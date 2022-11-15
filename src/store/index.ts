import {AnyAction, Store} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {rootReducer, RootState} from './reducers';
import {configureStore} from "@reduxjs/toolkit";

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
    dispatch: AppThunkDispatch;
};


export const store: AppStore = configureStore({
        reducer: rootReducer,
         middleware: [thunk],
    }
)
