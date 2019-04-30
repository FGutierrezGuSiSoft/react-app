import React from 'react';

function Login(props) {
  return (
    <div className="line" id="submit">
      <input type="submit" value={props.title} />
    </div>
  );
}

export default Login;
