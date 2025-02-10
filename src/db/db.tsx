//db.tsx

import Dexie from "dexie";

//Define the structure of the student entity
interface Student {
    id?: number;  //// Optional because it's auto-incremented by Dexie
    name: string;
    age: number;
}

//Create a new instance of Dexie
const db = new Dexie('database'); // database is database name with 1 version 

// Define the database schema
db.version(1).stores({
    students: '++id, name, age',  // Primary key and indexed props
});

// Explicitly type the `students` table using the Student interface
export const studentsTable = db.table<Student, number>('students');

// Export the database instance
export default db;
