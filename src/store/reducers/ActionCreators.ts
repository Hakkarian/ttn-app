import { IUser } from "../../models/IUser";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers2 = createAsyncThunk('user/fetchUsers2', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
    return response.data;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});