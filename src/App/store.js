import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../Features/project/projectSlice";
export const store = configureStore({
    reducer: {
        project: projectReducer,
    },
});