import React from "react";
import { Sorting } from "./Sorting.tsx";
import { StatusDisplay } from "./Status/StatusDisplay.tsx";
import { UserTable } from "./UserTable.tsx";

export const Table = () => {
  return (
    <div className="h-[100%] px-16 flex flex-col gap-7 w-full">
      <Sorting />
      <StatusDisplay />
      <UserTable />
    </div>
  );
};
