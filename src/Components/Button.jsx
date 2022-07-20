import React from 'react'

//  const Button = (props) => {
const Button = (props) => {
    return (
      <button
      className="text-white text-lg bg-yellow-600 rounded-md p-2"
      onClick={props.onClick}
      type={props.type}
      >
      {props.label}
    </button>
    )
}

export default Button
