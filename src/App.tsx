// App.tsx
import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserInfo from "./components/UserInfo.tsx";
import { Table } from "./components/Table.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { USER_INFO } from "./utils/routeConstants.ts";
import { USER_ADD } from "./utils/routeConstants.ts";
import { AddUser } from "./components/AddUser.tsx";
const App = () => {
  return (
    <Provider store={store}>
      <div className="h-screen w-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Table />} />
            <Route path={`${USER_INFO}/:phone`} element={<UserInfo />} />
            <Route path={`${USER_ADD}`} element={<AddUser />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
