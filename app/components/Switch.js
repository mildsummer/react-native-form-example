import React from "react";
import { Switch as RNSwitch, View, StyleSheet } from "react-native";
import FormField from "./FormField";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start"
  }
});

function Switch(props) {
  const { value, setFieldValue, setFieldTouched } = props;
  return (
    <View style={styles.container}>
      <RNSwitch
        value={value}
        ios_backgroundColor={colors.lightGray}
        thumbColor={colors.white}
        trackColor={{ true: colors.accent, false: colors.lightGray }}
        onValueChange={newValue => {
          setFieldTouched(true);
          setFieldValue(newValue);
        }}
      />
    </View>
  );
}

export default FormField(Switch);
