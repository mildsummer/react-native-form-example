import React from "react";
import * as PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Avatar } from "react-native-elements";
import Button from "./Button";
import FormField from "./FormField";

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  thumbnail: {
    marginBottom: 8
  }
});

function ImageSelect(props) {
  const { title, value, setFieldValue, setFieldTouched } = props;

  async function select() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (status === "granted") {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync();
      setFieldTouched(true);
      if (!cancelled && uri) {
        setFieldValue(uri);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Avatar
        containerStyle={styles.thumbnail}
        source={value ? { uri: value } : null}
        size="large"
      />
      <Button title={title} onPress={select} />
    </View>
  );
}

ImageSelect.defaultProps = {
  title: "画像を選択"
};

ImageSelect.propTypes = {
  title: PropTypes.string
};

export default FormField(ImageSelect);
