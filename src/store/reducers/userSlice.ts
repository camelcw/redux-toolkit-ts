import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../types/types";
import axios from "axios";

interface UserState {
    users: IUser[];
    loading: boolean;
    error: null | string;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function (page, limit) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data
        } catch (e) {
            console.log(e)
            return e;
        }
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
            state.error = null;

        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Error';
        })
    }
})

export const {} = userSlice.actions
export default userSlice.reducer;
