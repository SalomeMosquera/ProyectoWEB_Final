import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../Firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { formValidate } from "../utils/formValidate";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import FormError from "../Componentes/FormError";
import FormInput from "../Componentes/FormInput";

const Register = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const registerUser = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Crear el documento del usuario en Firestore
    await setDoc(doc(db, "Users", user.uid), {
      email: user.email,
      firstName: getValues("fname"),
      lastName: getValues("lname"),
    });

    console.log("Usuario Registrado Exitosamente!!");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { required, patternEmail, minLength, validateTrim, validateEquals } =
    formValidate();

  const onSubmitR = async ({ email, password }) => {
    console.log("Procesando formulario--->_", email, password);
    try {
      await registerUser(email, password);
      navigate("/LogIn");
    } catch (error) {
      console.log(error.message); // Registra cualquier mensaje de error
    }
  };

  /*const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      console.log("Usuario Registrado Exitosamente!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };*/

  return (
    <>
      <div className="registro">
        <form onSubmit={handleSubmit(onSubmitR)}>
          <h3>Registro</h3>

          <div className="mb-3">
            <i className="fa-solid fa-user-large"></i>
            <FormInput
              type="text"
              // className="form-control"
              placeholder="Primer nombre"
              {...register("fname", { required })}
              error={errors.fname}
            >
              <FormError error={errors.fname} />
            </FormInput>
          </div>

          <div className="mb-3">
            <i className="fa-solid fa-user-group"></i>
            <FormInput
              type="text"
              // className="form-control"
              placeholder="Apellido"
              {...register("lname", { required })}
              error={errors.lname}
            >
              <FormError error={errors.lname} />
            </FormInput>
          </div>

          <div className="mb-3">
            <i className="fa-solid fa-envelope"></i>
            <FormInput
              type="email"
              // className="form-control"
              placeholder="Ingresa tu correo"
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
              // className="form-control"
              placeholder="Contraseña"
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

          <div className="mb-3">
            <i className="fa-solid fa-lock"></i>
            <FormInput
              type="password"
              // className="form-control"
              placeholder="Repite la contraseña"
              {...register("password2", {
                validate: validateEquals(getValues("password")),
              })}
              error={errors.password2}
            >
              <FormError error={errors.password2} />
            </FormInput>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Registrate
            </button>
          </div>
          <p className="register-text text-right">
            ¿Ya tienes cuenta? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
