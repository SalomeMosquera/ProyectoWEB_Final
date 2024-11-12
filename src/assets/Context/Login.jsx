import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { formValidate } from "../utils/formValidate";
import { useForm } from "react-hook-form";

import FormError from "../Componentes/FormError";
import FormInput from "../Componentes/FormInput";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { required, patternEmail, minLength, validateTrim } = formValidate();

  const Submit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario loggeado Exitosamente!");
      navigate("/home");
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <div className="logIn">
        <form onSubmit={handleSubmit(Submit)}>
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
                minLength,
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
            ¿No tiene una cuenta? <a href="/register">Registrate Aquí</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default login;
