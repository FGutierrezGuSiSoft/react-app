import React from 'react';

import InputLine from "./InputLine";
import SubmitButton from "./SubmitButton";

function RegisterForm() {
  return (
    <form method="POST" action="/login">
      <InputLine title={"Nombre y Apellido"} name={"name"} type={"text"} />
      <InputLine title={"Correo"} name={"correo"} type={"email"} placeholder={"ejemplo@gmail.com"} />
      <InputLine title={"Contraseña"} name={"contrasena"} type={"password"} />
      <InputLine title={"Confirmación de Contraseña"} name={"confirmation"} type={"password"} />

      <SubmitButton title={"Ingresar"} />
    </form>
  );
}

export default RegisterForm;
