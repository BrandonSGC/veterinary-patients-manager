import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Error } from "./Error";
import { DraftPatient } from "../types";
import { usePatientStore } from "../store";

export const PatientForm = () => {
  const { patients, activeId, addPatient, updatePatient } = usePatientStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<DraftPatient>();

  useEffect(() => {
    if (activeId) {
      const activePatient = patients.filter(
        (patient) => patient.id === activeId
      )[0];
      setValue("name", activePatient.name);
      setValue("caretaker", activePatient.caretaker);
      setValue("email", activePatient.email);
      setValue("date", activePatient.date);
      setValue("symptoms", activePatient.symptoms);
    }
  }, [activeId]);

  const registerPatient = (data: DraftPatient) => {
    if (activeId) {
      updatePatient(data);
      toast.success("Patient updated successfully");
    } else {
      addPatient(data);
      toast.success("Patient registered successfully");
    }
    reset();
  };

  return (
    <div className="md:h-screen">
      <h2 className="text-3xl font-black text-center">Patient Tracking</h2>
      <p className="mb-5 text-lg text-center">
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
            className="w-full p-3 border border-gray-200 rounded"
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
            className="w-full p-3 border border-gray-200 rounded"
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
            className="w-full p-3 border border-gray-200 rounded"
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
            className="w-full p-3 border border-gray-200 rounded"
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
            className="w-full p-3 border border-gray-200 rounded"
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
          className="w-full p-3 font-bold text-white uppercase transition-colors bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700"
          value={activeId ? "Edit Patient" : "Save Patient"}
        />
      </form>
    </div>
  );
};
