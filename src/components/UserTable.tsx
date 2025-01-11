import React, { useEffect } from "react";
import { TableHeader } from "./TableHeader";
import { BiSortAlt2 } from "react-icons/bi";
import { UserData } from "../Data/UserData.ts";
import { FaPenFancy } from "react-icons/fa";
import StatusDot from "./Status/StatusDot.tsx";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";
import { setUser } from "../redux/Reducer.ts";
import { USER_INFO } from "../utils/routeConstants.ts";
import { useDispatch } from "react-redux";

export const UserTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDataJSON = UserData?.result?.rows;
  const tableHeaders: TableHeader[] = [
    { id: "firstName", label: "First Name", type: "string" },
    { id: "lastName", label: "Last Name", type: "string" },
    { id: "email", label: "Email", type: "string" },
    { id: "phone", label: "Phone", type: "number" },
    { id: "addedDate", label: "Added Date", type: "date" },
    { id: "updatedDate", label: "Updated Date", type: "date" },
    { id: "group", label: "Group", type: "string" },
    { id: "roleName", label: "Role Name", type: "string" },
    { id: "action", label: "Action", type: "any" },
  ];
  const users = useSelector((state: RootState) => state.counter);
  // const [data, setData] = useState(users);

  useEffect(() => {
    if (users) {
      console.log(users, "useeffect"); //this has updated object
      const indexOfUser = userDataJSON.findIndex(
        (user) => user.phone === users.phone
      );

      if (indexOfUser !== -1) {
        userDataJSON[indexOfUser] = users as (typeof userDataJSON)[number];
        // setData(userDataJSON[indexOfUser]);
      }
      console.log(userDataJSON[indexOfUser], "ohw");
    }
  }, []);
  function formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  const formatVerticalText = (text) => {
    if (!text) return "";
    return text.split(" ").map((word: string, index) => (
      <React.Fragment key={index}>
        {word}
        {index !== text.split(" ").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const formatVerticalDate = (text) => {
    if (!text) return "";
    return text.split(",").map((word: string, index) => (
      <React.Fragment key={index}>
        {word}
        {index !== text.split(" ").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const nameInitials = (firstName: string, lastName: string) => {
    return (
      firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase()
    );
  };

  return (
    <div className="flex flex-col overflow-y-auto h-full">
      <div className="w-full">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-[#fcfcfc] border-b-2 rounded-md text-[#6f727b] font-semibold">
            <tr>
              {tableHeaders.map((header) => (
                <th key={header.id} className="text-left px-2 py-2">
                  <div className="flex gap-3 items-center">
                    {header.label} <BiSortAlt2 className="scale-125" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userDataJSON?.map((row) => (
              <tr
                key={row.phone}
                onClick={() => {
                  dispatch(
                    setUser({
                      firstName: row?.firstName,
                      lastName: row?.lastName,
                      email: row?.email,
                      phone: row?.phone,
                      status: row?.status,
                      createdAt: formatDate(row?.createdAt),
                      updatedAt: formatDate(row?.updatedAt),
                      Role: row?.Role.role_name,
                      Customer: row?.Customer.name,
                    })
                  );
                  navigate(`${USER_INFO}/${row.phone}`);
                }}
                className="hover:bg-[#f2f2f2] transition hover:cursor-pointer duration-300 border-b-2 h-[5rem]"
              >
                <td className="px-2 flex items-center py-2">
                  <span className="text-sm flex gap-2 items-center">
                    <StatusDot status="green" />
                    {row.firstName}
                  </span>
                </td>
                <td className="px-2 py-2">{row.lastName}</td>
                <td className="p-4 align-middle pr-0">
                  <div className="flex flex-row gap-2 items-center">
                    <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full">
                      <span className="flex size-full items-center bg-[#f1f5f9] justify-center rounded-full bg-muted undefined">
                        {nameInitials(row.firstName, row.lastName)}
                      </span>
                    </span>
                    <div>{row.email}</div>
                  </div>
                </td>
                <td className="px-2 py-2">{row.phone}</td>
                <td className="px-2 py-2">
                  {formatVerticalDate(formatDate(row.createdAt))}
                </td>
                <td className="px-2 py-2">
                  {formatVerticalDate(formatDate(row.updatedAt))}
                </td>
                <td className="px-2 py-2 whitespace-pre-line">
                  {formatVerticalText(row.Customer?.name)}
                </td>
                <td className="px-2 py-2 whitespace-pre-line">
                  {formatVerticalText(row?.Role?.role_name)}
                </td>
                <td className="flex h-[5rem] justify-center items-center">
                  <div className="hover:bg-[#f1f5f9]">
                    <FaPenFancy className="hover:cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
