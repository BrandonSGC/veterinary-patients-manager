import { ToastContainer } from "react-toastify";
import { PatientForm, PatientsList } from "./components";
import "react-toastify/ReactToastify.css";

function App() {
  return (
    <>
      <div className="container mx-auto max-w-[1200px]">
        <div className="mt-10">
          <h1 className="text-5xl font-black text-center">
            Veterinary Patients <span className="text-indigo-700">Manager</span>
          </h1>
        </div>

        <div className="container grid items-center gap-5 mt-10 md:grid-cols-2">
          <PatientForm />
          <PatientsList />
        </div>
      </div>

      <ToastContainer autoClose={2500} />
    </>
  );
}

export default App;
