import { createSlice } from '@reduxjs/toolkit'
//const {userName,setUserName}=useState(null)
//const {userEmail,setUserEmail}=useState(null)
const initialState = {
userName:null,
userEmail:null
}

const userSlice = createSlice({
  name: 'auth',
  initialState,
  //active state which known as setUserNmae normally
  reducers: {
   setActiveUser:(state,action)=>{
    state.userName=action.payload.userName
    state.userEmail=action.payload.userEmail
},
//logout state
setUserLogoutState:state=>{
  state.userName=null
  state.userEmail=null
}
  }
});

export const {setActiveUser,setUserLogoutState} = userSlice.actions
export const selectUserName=state=>state.user.userName
export const selectUserEmail=state=>state.user.userEmail

export default userSlice.reducer








// import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

// let initialState={
//     user:"",
//     token:"",
//     loading:false
// }
// export const loginUser=createAsyncThunk('user',async(body)=>{
//     let res =await fetch("",{
//         method:'post',
//         headers:{
//             'content-Type':'application/json',
//             Authorization:localStorage.getItem('token')
//         },
//         body:JSON.stringify(body)
//     })
//     return await res.json();
// })
// const userSlice = createSlice({
//     name:"user",
//     initialState,
//     reducers:{
//          addTokens:(state,action)=>{
//             state.token=localStorage.getItem("token")
//          },
//          addUser:(state,action)=>{
//             state.user=localStorage.getItem("user")
//          }
//     },
//     extraReducers:{
// [loginUser.pending]:(state,action)=>{
//     state.loading=true
// },
// [loginUser.fulfilled]:(state,{payload:{user,token}})=>{
//     state.loading=false
//     state.token=token;
//     state.user = user
//     localStorage.setItem("token",JSON.stringify(token))
//     localStorage.setItem("user",JSON.stringify(user))
// },
// [loginUser.rejected]:(state,action)=>{
//     state.loading=true
// },
//     }
// })
// export const{addTokens,addUser}=userSlice.actions;
// export default userSlice.reducer;