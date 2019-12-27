import React from "react";
import { StyleSheet } from "react-native";
import { Button as RNButton } from "react-native-elements";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  button: {
    height: 50,
    borderColor: 4,
    backgroundColor: colors.accent
  }
});

function Button(props) {
  const { title, disabled, loading, onPress } = props;
  return (
    <RNButton
      title={title}
      disabled={disabled}
      loading={loading}
      containerStyle={styles.container}
      buttonStyle={styles.button}
      onPress={onPress}
    />
  );
}

export default Button;
