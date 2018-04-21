import React from 'react';
import '../styles/InputField.css';

const InputField = (props) => {
    return(
      <div>
          <div> {props.description} </div>
          <input name = {props.Name} value = {props.Value} onChange={props.onchange} placeholder = {props.placeholder} className ="input" type={props.type}/>
      </div>
    );
  };

  export default InputField;