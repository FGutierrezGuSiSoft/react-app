import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import RegisterForm from './RegisterForm';

const links = [
  { href: '/', title: 'Ingresar' }
];

function Login() {
  return (
    <div>
      <Navbar links={links} />
      <Card title={"Registarse"}>
        <RegisterForm />
      </Card>
    </div>
  );
}

export default Login;
