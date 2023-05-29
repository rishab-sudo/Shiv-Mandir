import { createSlice} from "@reduxjs/toolkit";
const initialState = {
  FormData:{},
  name:""
};
const templeReducer = createSlice({
name: "temple",
initialState,
reducers: {
    submitData:(state,action)=>{
        console.log("this is reducer mssg",action.payload)
        state.FormData=action.payload
    },
    setName:(state,action)=>{
        state.name=action.payload
    }
}
})
export const {
  submitData,
  setName
} = templeReducer.actions;
export default templeReducer.reducer;