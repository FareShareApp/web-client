import React from 'react';

const InputField = (props) => {
    return(
      <div>
          <div> {props.description} </div>
          <input name = {props.Name} value = {props.Value} onChange={props.onchange} placeholder = {props.placeholder} className ="form-control" type={props.type}/>
      </div>
    );
  };

  export default InputField;