import React from 'react';

const InputField = (props) => {
    return(
      <div>
          <div float> {props.description} </div>
          <input placeholder = {props.placeholder} class="form-control" type={props.type}/>
      </div>
    );
  };

  export default InputField;