import React from "react";
import Status from "./Status.tsx";

export const StatusDisplay = () => {
  return (
    <div>
      <div className="flex font-normal text-[10px] gap-7 w-full ">
        <div>
          <Status status="green" label="Active Users" />
        </div>
        <div>
          <Status status="yellow" label="Inactive users" />
        </div>
        <div>
          <Status status="red" label="Archieved users" />
        </div>
      </div>
    </div>
  );
};
