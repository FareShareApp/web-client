import React from 'react';
import '../styles/InputField.css';

const InputField = (props) => {
    return(
      <div>
          <div float> {props.description} </div>
          <input className="input" placeholder = {props.placeholder}  type={props.type}/>
      </div>
    );
  };

  export default InputField;