import React from "react";
import * as PropTypes from "prop-types";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import colors from "../constants/colors";
import FormField from "./FormField";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: -10,
    marginTop: -10,
    marginBottom: -10,
    marginRight: -10,
    flexDirection: "row",
    alignItems: "center"
  },
  box: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center"
  },
  checked: {
    backgroundColor: colors.accent,
    borderColor: colors.accent
  },
  checkedInner: {
    width: 30,
    height: 30,
    textAlign: "center"
  }
});

function CheckBox(props) {
  const { title, value, setFieldValue, setFieldTouched } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        setFieldTouched(true);
        setFieldValue(!value);
      }}
    >
      <View style={styles.container}>
        <View style={[styles.box, value && styles.checked]}>
          {value && (
            <Icon
              name="ios-checkmark"
              size={30}
              color={colors.white}
              style={styles.checkedInner}
            />
          )}
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

CheckBox.propTypes = {
  title: PropTypes.string.isRequired
};

export default FormField(CheckBox);
