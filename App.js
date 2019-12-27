import React, { Component } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  ScrollView
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Select from "./app/components/Select";
import Input from "./app/components/Input";
import ImageSelect from "./app/components/ImageSelect";
import RadioButton from "./app/components/RadioButton";
import Button from "./app/components/Button";
import CheckBox from "./app/components/CheckBox";
import Switch from "./app/components/Switch";
import DatePicker from "./app/components/DatePicker";
import prefectures from "./app/constants/prefectures";

const genderOptions = [
  { label: "男性", value: 0 },
  { label: "女性", value: 1 }
];

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "3文字以上で入力してください")
    .max(20, "20文字以内で入力してください")
    .required("氏名を入力してください"),
  gender: Yup.number()
    .oneOf(
      genderOptions.map(option => option.value),
      "性別を選択して下さい"
    )
    .required("性別を選択して下さい"),
  prefecture: Yup.number()
    .oneOf(
      prefectures.map(option => option.value),
      "地域を選択してください"
    )
    .nullable()
    .required("地域を選択してください"),
  terms: Yup.bool().oneOf([true], "同意が必要です"),
  notification: Yup.bool(),
  image: Yup.string()
    .nullable()
    .required("画像が必要です"),
  date: Yup.date()
    .nullable()
    .required("日付を選択してください")
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: "100%"
  }
});

export default class App extends Component {
  onSubmit = async (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.form}>
            <Formik
              initialValues={{
                name: "",
                gender: null,
                prefecture: null,
                terms: false,
                notification: false,
                date: null,
                image: null
              }}
              validateOnMount
              validationSchema={schema}
              onSubmit={this.onSubmit}
            >
              {({ handleSubmit, isValid, isSubmitting }) => (
                <>
                  <Input
                    label="氏名"
                    name="name"
                    placeholder="氏名を入力してください"
                  />
                  <RadioButton
                    label="性別"
                    name="gender"
                    options={genderOptions}
                  />
                  <Select
                    label="お住いの地域"
                    name="prefecture"
                    options={prefectures}
                  />
                  <CheckBox label="同意事項" title="同意する" name="terms" />
                  <Switch label="通知" name="notification" />
                  <ImageSelect label="アカウント画像" name="image" />
                  <DatePicker
                    label="日付"
                    title="日付を選択"
                    placeholder="日付を選択"
                    name="date"
                  />
                  <Button
                    title="Submit"
                    onPress={handleSubmit}
                    disabled={!isValid || isSubmitting}
                  />
                </>
              )}
            </Formik>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}
