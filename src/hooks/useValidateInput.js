import { useState } from "react";
import validator from "validator";

function useValidateInput(options) {
  const [state, setState] = useState({
    wasTouched: false,
    isValid: false,
    value: "",
    error: "",
  });

  function checkValidity(string) {
    if (validator.isEmpty(string)) {
      setState((prev) => ({
        ...prev,
        isValid: false,
        error: "Please don't leave this field blank.",
      }));
    } else if (options?.type === "email" && !validator.isEmail(string)) {
      setState((prev) => ({
        ...prev,
        isValid: false,
        error: "Sorry, invalid format here",
      }));
    } else {
      setState((prev) => ({ ...prev, isValid: true, error: "" }));
    }
  }

  function handleBlur(e) {
    const value = e.target.value;
    checkValidity(value);
    setState((prev) => ({
      ...prev,
      wasTouched: true,
    }));
  }

  function handleChange(e) {
    const value = e.target.value;
    setState((prev) => ({ ...prev, value: value }));
    if (state.wasTouched) checkValidity(value);
  }

  return [
    state,
    {
      onBlur: handleBlur,
      onChange: handleChange,
      value: state.value,
    },
  ];
}

export default useValidateInput;
