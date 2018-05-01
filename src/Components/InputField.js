import React from 'react';
import '../styles/InputField.css';
import '../styles/FormContainer.css';

const InputField = (props) => {
    return(
      <div>
          <div> {props.description} </div>
          <input name = {props.Name} 
              value = {props.Value}
                 onChange={props.onchange}
                  placeholder = {props.placeholder}
                  type={props.type}
                   //className ="form-control" type={props.type}
                   className ="input"
                   />
      </div>
    );
  };

  export default InputField;