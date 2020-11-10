import React from "react";

import {
  GroupContainer,
  FormInputStyle,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputStyle onChange={handleChange} {...otherProps} />
      {label && (
        <FormInputLabel className={otherProps.value.length ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
