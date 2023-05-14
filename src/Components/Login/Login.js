import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "../Login/InputControl";
// import { useDispatch,useSelector } from "react-redux";
// import { setActiveUser,setUserLogOutState,selectUserEmail,selectUserName } from "../../redux/userSlice";
import { auth } from "../../firebase";
import styles from "./Login.module.css";
import login22 from"../../Images/login22.jpg"
import About1 from"../../Images/About1.jpg"

function Login() {
//   const dispatch=useDispatch()
//   const userName=useSelector(selectUserName)
//   const userEmail=useSelector(selectUserEmail)
  
//   const handleSignIn=()=>{
// auth.signInWithPopup(provider).then((result)=>{
//   dispatch(setActiveUser({
//     userName:result.user.displayName,
//     userEmail:result.user.email
//   }))
// })
//   }
//   const handleSignOut=()=>{
//     auth.signOut().then(()=>{
//       dispatch(setUserLogOutState())
//     }).catch((err)=>alert(err.message))
//   }
  
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/Donate");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div     style={{ backgroundImage: `url(${login22})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"cover",
    height:'100vh',
    minWidth:"100vw",
    }}>
    <section id="Login" className="" >

      <div className={styles.Logincontainer} >
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Login..</h1>
          <InputControl
            label="Email"
            type="email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="Enter email address"
          />
          <InputControl
            label="Password"
            type="password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            placeholder="Enter Password"
          />

          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <span>
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Login;
