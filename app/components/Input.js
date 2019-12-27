import React from "react";
import * as PropTypes from "prop-types";
import { TextInput } from "react-native";
import colors from "../constants/colors";
import FormField from "./FormField";

const style = {
  width: "100%",
  height: 50,
  paddingHorizontal: 10,
  borderWidth: 1,
  borderColor: colors.border,
  borderRadius: 4,
  fontSize: 16
};

function Input(props) {
  const { placeholder, value, setFieldValue, setFieldTouched } = props;
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      autoCapitalize="none"
      onChangeText={setFieldValue}
      onBlur={() => setFieldTouched(true)}
      value={value}
    />
  );
}

Input.defaultProps = {
  placeholder: "",
  value: ""
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired
};

export default FormField(Input);
