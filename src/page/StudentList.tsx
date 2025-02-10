import React, { useState } from "react";
import db, { studentsTable } from "../db/db";
import { useLiveQuery } from "dexie-react-hooks";

interface Student {
  id?: number;
  name: string;
  age: number;
}

const StudentList: React.FC = () => {
  const students = useLiveQuery(() => studentsTable.toArray());
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const updateStudent = async () => {
    if (editingStudent) {
      try {
        await studentsTable.put(editingStudent);
        alert("Updated student successfully");
        setEditingStudent(null);
      } catch (error) {
        console.error("Failed to update student:", error);
        alert("Failed to update student");
      }
    }
  };

  const clearAll = async () => {
    try {
      await db.delete();
      alert("Database deleted");
    } catch (err) {
      console.error("Could not delete database:", err);
      alert("Could not delete database");
    }
  };

  const handleDelete = async (student: Student) => {
    try {
      if (student.id !== undefined) {
        await studentsTable.delete(student.id); // Delete from IndexedDB
        console.log(`Deleted student with ID: ${student.id}`);
      } else {
        console.warn("Student ID is undefined, cannot delete.");
      }
    } catch (error) {
      console.error("Failed to delete student:", error);
      alert("Failed to delete student");
    }
  };

  return (
    <div>
      <button disabled={!students?.length} onClick={clearAll}>
        Delete Database
      </button>
      <ul>
        {students?.map((student) => {
          return (
            <li key={student.id}>
              {editingStudent?.id === student.id ? (
                <>
                  <input
                    type="text"
                    value={editingStudent?.name}
                    onChange={(e) =>
                      setEditingStudent((prev) => ({
                        ...prev!,
                        name: e.target.value || "", // Ensure an empty string instead of undefined
                      }))
                    }
                  />
                  <input
                    type="number"
                    value={editingStudent?.age}
                    onChange={(e) =>
                      setEditingStudent((prev) => ({
                        ...prev!,
                        age: Number(e.target.value),
                      }))
                    }
                  />
                  <button onClick={updateStudent}>Save</button>
                  <button onClick={() => setEditingStudent(null)}>Cancel</button>
                </>
              ) : (
                <>
                  {student.name} ({student.age})
                  <button onClick={() => setEditingStudent(student)}>Edit</button>
                  <button onClick={() => handleDelete(student)}>Delete</button>
                </>
              )}
            </li>
          )
        }

        )}
      </ul>
    </div>
  );
};

export default StudentList;
