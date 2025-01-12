import React, { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { UserData } from "../Data/UserData";
import { addUser } from "../redux/Reducer";
import { useDispatch } from "react-redux";
export const AddUser = () => {
  const user = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const [userForm, setUserForm] = useState(user);

  const handleChange = (key: string, value: string | number) => {
    setUserForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  useEffect(() => {
    console.log(userForm);
  }, [userForm]);
  function handleSave() {
    dispatch(addUser(userForm));
  }
  return (
    <div className="h-full w-full flex flex-col px-10 pb-10 justify-end bg-[#F1F5F9] shadow-md rounded-md">
      <div className="bg-white overflow-y-scroll rounded-lg px-6 h-[90%]">
        <h1 className="text-lg font-medium mt-5 text-blue-950 mb-10">
          User Details
        </h1>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {Object.keys(userForm).map((key) => (
            <div key={key} className="mb-4">
              <label
                htmlFor={key}
                className="block text-sm font-normal text-blue-950 capitalize"
              >
                {key.replace(/([A-Z])/g, " $1")}:
              </label>
              <input
                id={key}
                value={userForm[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className={`mt-1 block w-[25rem] p-2 border h-[3rem] border-gray-300 rounded-md shadow-sm  text-black`}
              />
            </div>
          ))}

          <div className="col-span-3 flex justify-end mt-4">
            <>
              <button
                type="button"
                // onClick={handleCancel}
                className="bg-white text-black border-2 border-black px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-950 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </>
          </div>
        </form>
      </div>
    </div>
  );
};
