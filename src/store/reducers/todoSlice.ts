import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export interface ITodo {
    id: number;
    title: string;
}

interface TodoState {
    todos: ITodo[];
    loading: boolean;
    error: null | string;
    limit:  number;
    page: string | number;

}

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 20,
};

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function ({limit, page}: {limit: number | string, page: number | string} ) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _limit: limit,
                    _page: page,
                }
            });
            return response.data
        } catch (e) {
            console.log(e)
            return e;
        }
    }
)

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodo: (state,action) => {
            state.todos.push(action.payload.todo)
        },
        changePage: (state, action) => {
            state.page = action.payload

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Error'
        })
    }
})
export default todoSlice.reducer;
export const {setTodo, changePage} = todoSlice.actions