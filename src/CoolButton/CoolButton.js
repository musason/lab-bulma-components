import React from "react";

function CoolButton(props) {
  let classValue = props.isDanger ? "is-danger" : "is-primary";

  console.log(classValue);
  return (
    <div>
      <button className={`${props.isDanger && "is-danger"}`}>
        {props.children}
      </button>
    </div>
  );
}

export default CoolButton;
