"use client";

import { useState } from "react";

export default function StudentCard({ name, course, year }) {
  const [message, setMessage] = useState("Hello, Student!");

  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-md">
      <h2 className="mb-4 text-sm font-semibold tracking-wide text-gray-500">
        STUDENT CARD
      </h2>

      <p className="text-2xl font-bold text-blue-700">{name}</p>
      <p className="mt-1 text-lg text-gray-700">{course}</p>
      <p className="text-lg text-gray-700">{year}</p>

      <button
        onClick={() => setMessage("Welcome to Next.js!")}
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
      >
        Click Me
      </button>

      <p className="mt-4 text-gray-800">{message}</p>
    </div>
  );
}