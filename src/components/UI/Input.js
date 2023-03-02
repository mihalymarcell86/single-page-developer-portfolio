import React from "react";
import scss from "../../styles/Input.module.scss";

export default function Input({ children, state, customProps }) {
  const clonedChild = React.cloneElement(children, {
    ...customProps,
  });

  return (
    <div
      className={`${scss.container} ${
        state.wasTouched ? (state.isValid ? scss.isValid : scss.isInvalid) : ""
      }`}
    >
      {clonedChild}
      {state.wasTouched && !state.isValid && (
        <div className={scss.warning}>!</div>
      )}
      {state.wasTouched && !state.isValid && (
        <div className={scss.error}>{state.error}</div>
      )}
    </div>
  );
}
