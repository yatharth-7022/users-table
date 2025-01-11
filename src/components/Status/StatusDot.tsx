// StatusDot.tsx
import React from "react";

interface StatusDotProps {
  status: "green" | "yellow" | "red";
}

const StatusDot: React.FC<StatusDotProps> = ({ status }) => {
  let statusColor = "";

  switch (status) {
    case "green":
      statusColor = "bg-green-500";
      break;
    case "yellow":
      statusColor = "bg-yellow-500";
      break;
    case "red":
      statusColor = "bg-red-500";
      break;
    default:
      statusColor = "bg-gray-500";
  }

  return (
    <div className={`w-4 h-4 rounded-full ${statusColor} inline-block`}></div>
  );
};

export default StatusDot;
