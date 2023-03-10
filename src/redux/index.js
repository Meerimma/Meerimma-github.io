import {configureStore} from "@reduxjs/toolkit";
import pizza from './reducers/pizza'


export const store = configureStore({
    reducer: {
        pizza
    }
})