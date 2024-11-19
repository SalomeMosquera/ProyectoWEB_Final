import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { formValidate } from "../utils/formValidate";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import FormError from "../Componentes/FormError";
import FormInput from "../Componentes/FormInput";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const { required, patternEmail, validateTrim } = formValidate();

  const [firebaseError, setFirebaseError] = useState({});

  const onSubmitL = async ({ email, password }) => {
    console.log("Procesando formulario--->_", email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario loggeado Exitosamente!");

      navigate("/home");
    } catch (error) {
      console.log(error.message);

      const customError = erroresFirebase(error.code);
      setFirebaseError(customError);

      if (customError.code === "password") {
        setError("password", {
          type: "manual",
          message: customError.message,
        });
      }
    }
  };

  return (
    <>
      <div className="logIn">
        <form onSubmit={handleSubmit(onSubmitL)}>
          <h3>Login</h3>

          <div className="mb-3">
            <i className="fa-solid fa-envelope"></i>
            <FormInput
              type="email"
              placeholder="Ingresa tu correo"
              // onChange={(e) => setEmail(e.target.value)}
              {...register("email", {
                required,
                pattern: patternEmail,
              })}
              error={errors.email}
            >
              <FormError error={errors.email} />
            </FormInput>
          </div>

          <div className="mb-3">
            <i className="fa-solid fa-lock"></i>
            <FormInput
              type="password"
              placeholder="Ingresa tu contraseña"
              // onChange={(e) => setPassword(e.target.value)}
              {...register("password", {
                required,
                validate: validateTrim,
              })}
              error={errors.password}
            >
              <FormError error={errors.password} />
            </FormInput>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
          <p className="register-text text-right">
            ¿No tiene una cuenta?
            <NavLink to="/register"> Registrate Aquí</NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
