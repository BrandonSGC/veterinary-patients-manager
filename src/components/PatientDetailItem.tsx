type PatientDetailItemProps = {
  label: string;
  data: string;
};

export const PatientDetailItem = ({ label, data }: PatientDetailItemProps) => {
  return (
    <p className="mb-3 font-bold text-gray-600 uppercase">
      {label}: <span className="font-normal normal-case">{data}</span>
    </p>
  );
};
