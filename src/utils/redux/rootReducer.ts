import systemReducer from '@/features/systems/systemSlice';
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    systemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer; 