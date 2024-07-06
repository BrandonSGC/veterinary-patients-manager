import { useForm } from "react-hook-form";
import { Error } from "./Error";
import { PatientDraft } from "../types";

export const PatientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientDraft>();

  const registerPatient = (data: PatientDraft) => {
    console.log("Creating patient: ", data);
  };

  return (
    <div className="mx-5 md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl font-black text-center">Patient Tracking</h2>

      <p className="mt-5 mb-10 text-lg text-center">
        Add Patients and {""}
        <span className="font-bold text-indigo-600">Manage Them</span>
      </p>

      <form
        className="px-5 py-10 mb-10 bg-white rounded-lg shadow-md"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm font-bold uppercase">
            Patient
          </label>
          <input
            id="name"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="Patient name"
            {...register("name", {
              required: "Patient name is required",
            })}
          />
          {errors.name && <Error>{errors.name?.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm font-bold uppercase">
            Caretaker
          </label>
          <input
            id="caretaker"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="Caretaker's name"
            {...register("caretaker", {
              required: "Caretaker is required",
            })}
          />
          {errors.caretaker && (
            <Error>{errors.caretaker?.message?.toString()}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm font-bold uppercase">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3 border border-gray-100"
            type="email"
            placeholder="Registration email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && <Error>{errors.email?.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm font-bold uppercase">
            Discharge date
          </label>
          <input
            id="date"
            className="w-full p-3 border border-gray-100"
            type="date"
            {...register("date", {
              required: "Discharge date is required",
            })}
          />
          {errors.date && <Error>{errors.date?.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm font-bold uppercase">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3 border border-gray-100"
            placeholder="Patient symptoms"
            {...register("symptoms", {
              required: "Symptoms are required",
            })}
          ></textarea>
          {errors.symptoms && (
            <Error>{errors.symptoms?.message?.toString()}</Error>
          )}
        </div>

        <input
          type="submit"
          className="w-full p-3 font-bold text-white uppercase transition-colors bg-indigo-600 cursor-pointer hover:bg-indigo-700"
          value="Save Patient"
        />
      </form>
    </div>
  );
};
