import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setUser } from "../redux/Reducer.ts";
import { AppDispatch, RootState } from "../redux/store.ts";
import { useDispatch } from "react-redux";

const UserInfo = () => {
  const user = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();
  const [userForm, setUserForm] = useState(user);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const handleChange = (key: string, value: string | number) => {
    setUserForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  function handleSave() {
    dispatch(setUser(userForm));
    setIsEditing(false);
    navigate("/");
  }
  function handleCancel() {
    setUserForm(user);
    setIsEditing(false);
    navigate("/");
  }
  console.log(user, "userForm");

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
                readOnly={!isEditing}
                value={userForm[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className={`mt-1 block w-[25rem] p-2 border h-[3rem] border-gray-300 rounded-md shadow-sm ${
                  isEditing
                    ? "focus:ring-indigo-500 focus:border-indigo-500"
                    : "bg-gray-50"
                }`}
              />
            </div>
          ))}

          <div className="col-span-3 flex justify-end mt-4">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={handleCancel}
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
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="bg-blue-950 text-white px-4 py-2 rounded-md"
              >
                Edit User
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
