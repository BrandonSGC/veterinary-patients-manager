import { PatientForm, PatientsList } from "./components";

function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-center text-5xl md:w-2/3 md:mx-auto">
          Veterinary Patients <span className="text-indigo-700">Manager</span>
        </h1>
      </div>

      <div className="mt-12 md:flex">
        <PatientForm />
        <PatientsList />
      </div>
    </>
  );
}

export default App;
