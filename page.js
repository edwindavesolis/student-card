import StudentCard from "./components/StudentCard";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <StudentCard name="Juan Dela Cruz" course="BSIT" year="2nd Year" />
    </main>
  );
}