import React from 'react';

function Card(props) {
  return (
    <div className="login">
      <div className="card">
        <header>
          <h3>{props.title}</h3>
        </header>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
