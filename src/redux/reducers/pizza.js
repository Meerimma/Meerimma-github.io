import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getCinema = createAsyncThunk(
    'pizza/getPizza',
    async (_,{rejectWithValue}) => {
        try {
            const res = await axios ('/pizza')

            if(res.statusText !== 'OK') {
                throw new Error('Server error !')
            }

            return res.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }

)

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
        data:[],
        dataLength : 0,
        filter: {},
        status: '',
        error:''
    },
    reducers:{

        // getPizza:(state,action)=>{
        //     state.data = action.payload
        //     state.dataLength = action.payload.length
        // }

    },
    extraReducers:{

    }

})

export const {getPizza} = pizzaSlice.actions
export default pizzaSlice.reducer