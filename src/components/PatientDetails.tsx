import { toast } from "react-toastify";
import { usePatientStore } from "../store";
import type { Patient } from "../types";
import { PatientDetailItem } from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient;
};

export const PatientDetails = ({ patient }: PatientDetailsProps) => {
  const { deletePatient, getPatientById } = usePatientStore();

  const handleClick = () => {
    deletePatient(patient.id);
    toast.error("Patient deleted successfully");
  };

  return (
    <div className="p-5 mb-2 mr-5 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Name" data={patient.name} />
      <PatientDetailItem label="Caretaker" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Date" data={patient.date} />
      <PatientDetailItem label="Symptoms" data={patient.symptoms} />

      <div className="flex flex-col gap-2 mt-10 md:items-center md:justify-end md:flex-row">
        <button
          className="px-10 py-2 font-bold text-white uppercase bg-indigo-600 rounded hover:bg-indigo-700"
          onClick={() => getPatientById(patient.id)}
        >
          Edit
        </button>
        <button
          className="px-10 py-2 font-bold text-white uppercase bg-red-600 rounded hover:bg-red-700"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
