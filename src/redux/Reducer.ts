import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CounterState {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  Customer: Customer | string;
  Role: Role | string;
  address?: string | null;
  customer_id?: number;
  country_code?: string;
  group_access?: string | null;
  group_data?: any[];
  role_id?: number;
}

export interface Customer {
  name: string;
  id?: number;
  email?: string;
  address?: string;
}
export interface Role {
  role_name: string;
  id?: number;
  status?: string;
  customer_id?: number;
}
const initialState: CounterState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  status: "",
  createdAt: "",
  updatedAt: "",
  Customer: {
    name: "",
  },
  Role: {
    role_name: "",
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<CounterState>) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
