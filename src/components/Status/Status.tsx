import React from "react";
import StatusDot from "./StatusDot.tsx";
interface StatusProps {
  status: "green" | "yellow" | "red";
  label?: string;
}

const Status: React.FC<StatusProps> = ({ status, label }) => {
  return (
    <div className="flex items-center space-x-2">
      <StatusDot status={status} />
      <span>{label}</span>
    </div>
  );
};

export default Status;
