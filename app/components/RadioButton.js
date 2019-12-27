import React from "react";
import * as PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constants/colors";
import FormField from "./FormField";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  option: {
    padding: 10,
    marginLeft: -10,
    marginRight: 30,
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    fontSize: 16
  },
  labelActive: {
    color: colors.accent
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center"
  },
  iconActive: {
    borderColor: colors.accent
  },
  iconInner: {
    width: 10,
    height: 10,
    backgroundColor: colors.accent,
    borderRadius: 5
  }
});

function RadioButton(props) {
  const { options, value, setFieldValue, setFieldTouched } = props;
  return (
    <View style={styles.container}>
      {options.map(option => {
        const active = option.value === value;
        return (
          <TouchableOpacity
            disabled={active}
            key={option.value}
            onPress={() => {
              setFieldTouched(true);
              setFieldValue(option.value);
            }}
          >
            <View style={[styles.option, active && styles.active]}>
              <Text style={[styles.label, active && styles.labelActive]}>
                {option.label}
              </Text>
              <View style={[styles.icon, active && styles.iconActive]}>
                {active && <View style={styles.iconInner} />}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

RadioButton.defaultProps = {
  value: null
};

RadioButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired
    })
  ).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired
};

export default FormField(RadioButton);
