import React, { useState } from "react";
import {  studentsTable } from "../db/db"; // Import the typed table  db,
import StudentList from "./StudentList";

// Define the props for the Student component
interface StudentProps {
  defaultAge?: number; // Optional prop with a default value
}

// // Define the StudentList component (placeholder, adjust as needed)
// const StudentList: React.FC = () => {
//   return <div>Student List Placeholder</div>;
// };

// Main Student component
export const Student: React.FC<StudentProps> = ({ defaultAge = 21 }) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(defaultAge);
  const [status, setStatus] = useState<string>("");

  // Function to add a student
  const addStudent = async () => {
    let id: number | undefined;
    try {
      if (name && age) {
        id = await studentsTable.add({
          name,
          age,
        });
      } else {
        alert("Please provide name and age fields for the student.");
      }
      setStatus(`Student ${name} successfully added. Got id ${id}`);
      setName("");
      setAge(defaultAge);
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
  };

  return (
    <React.Fragment>
      <h1>Add Student</h1>
      <p>{status}</p>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(ev) => setAge(Number(ev.target.value))}
          />
        </label>
      </div>
      <button onClick={addStudent}>Add</button>
      <div>
        <h1>Student Listing</h1>
        <div>
          <StudentList />
        </div>
      </div>
    </React.Fragment>
  );
};