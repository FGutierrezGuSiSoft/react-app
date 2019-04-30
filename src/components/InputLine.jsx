import React from 'react';

function InputLine(props) {
  return (
    <div className="line">
      <label>{props.title}</label>
      <input name={props.name} className="fullWidth" type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

export default InputLine;
