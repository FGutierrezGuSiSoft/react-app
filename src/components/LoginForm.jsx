import React from 'react';

import InputLine from "./InputLine";
import SubmitButton from "./SubmitButton";

function LoginForm() {
  return (
    <form method="POST" action="/login">
      <InputLine title={"Correo"} name={"correo"} type={"email"} placeholder={"ejemplo@gmail.com"} />
      <InputLine title={"Contraseña"} name={"contrasena"} type={"password"} />

      <SubmitButton title={"Ingresar"} />
    </form>
  );
}

export default LoginForm;
