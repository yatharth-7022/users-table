import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { USER_ADD } from "../utils/routeConstants.ts";

export const Sorting = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div className="h-[20%] flex items-end">
      <div className="h-fit w-full flex justify-between">
        <div className="flex gap-8">
          <div className="relative">
            <input
              className="border  rounded-md h-[3rem]  w-[20rem] px-2 py-3 border-black"
              type="text"
              placeholder="Search"
            />
            <CiSearch className="  absolute top-4 scale-150 right-6" />
          </div>
          <div className="relative w-full max-w-xs">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              customInput={
                <input
                  type="text"
                  placeholder="Pick a date"
                  value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                  className="border rounded-md h-[3rem] w-[20rem] px-2 py-3 border-black"
                />
              }
            />

            <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>
        </div>
        <div>
          <button className="h-fit w-fit px-6 font-semibold py-3 rounded-lg flex gap-3 items-center bg-blue-950 text-white">
            <span className="text-white">
              <IoIosAddCircleOutline className="scale-125 text-white" />
            </span>{" "}
            <span onClick={() => navigate(USER_ADD)}>Add User</span>
          </button>
        </div>
      </div>
    </div>
  );
};
