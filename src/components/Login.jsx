import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import LoginForm from './LoginForm';

const links = [
  { href: 'register', title: 'Registrarse' }
];

function Login() {
  return (
    <div>
      <Navbar links={links} />
      <Card title={"Ingreso"}>
        <LoginForm />
      </Card>
    </div>
  );
}

export default Login;
