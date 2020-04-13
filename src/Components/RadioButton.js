import React from 'react'


 function RadioButton(props) {
    return (
        <div className="form-check">
            <input className="form-check-input" 
                    type="radio"
                    name="discipline"
                    id= {props.name}
                    value= {props.name}
                    checked={props.discipline === props.name}
                    onChange ={props.onChange}
                    />
            <label className="form-check-label" htmlFor={props.name}>{props.name}</label>
        </div>
    )
}

export default RadioButton

