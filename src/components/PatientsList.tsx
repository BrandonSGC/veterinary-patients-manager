import { usePatientStore } from "../store";
import { PatientDetails } from "./PatientDetails";

export const PatientsList = () => {
  const { patients } = usePatientStore();

  return (
    <div className="overflow-y-scroll md:h-screen">
      {patients.length > 0 ? (
        <>
          <h2 className="text-3xl font-black text-center">Patients List</h2>
          <p className="mb-5 text-lg text-center">
            Manage your{" "}
            <span className="font-bold text-indigo-600">
              patients and appointments
            </span>
          </p>

          {patients.map((patient) => (
            <PatientDetails key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-3xl font-black text-center">No patients yet</h2>
          <p className="mt-5 mb-10 text-xl text-center">
            Start creating patients{" "}
            <span className="font-bold text-indigo-600">
              and will appear here
            </span>
          </p>
        </>
      )}
    </div>
  );
};
