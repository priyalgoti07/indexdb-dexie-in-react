import React from "react";
import db, {studentsTable } from "../db/db"; // Import the typed table
import { useLiveQuery } from "dexie-react-hooks";

// Define the structure of a Student
interface Student {
  id?: number; // Optional because it's auto-incremented by Dexie
  name: string;
  age: number;
}

const StudentList: React.FC = () => {
  // Fetch students using useLiveQuery with proper typing
  const students = useLiveQuery(() => studentsTable.toArray());

  // Function to update a student
  const updateStudent = async (data: Student) => {
    try {
      await studentsTable.put({ id: data.id, name: "your name 😂😂", age: 20 });
      alert("Updated your database with static data");
    } catch (error) {
      console.error("Failed to update student:", error);
      alert("Failed to update student");
    }
  };

  // Function to clear the entire database
  const clearAll = async () => {
    try {
      await db.delete();
      alert("Database deleted");
    } catch (err) {
      console.error("Could not delete database:", err);
      alert("Could not delete database");
    }
  };

  return (
    <ul>
      <button disabled={students?.length === 0} onClick={clearAll}>
        Delete Database
      </button>
      {students?.map((student) => (
        <li key={student.id}>
          {student.name} {student.age}
          <button onClick={() => updateStudent(student)}>Edit {student.id}</button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;