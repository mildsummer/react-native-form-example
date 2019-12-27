import React, { useState } from "react";
import * as PropTypes from "prop-types";
import moment from "moment";
import Button from "./Button";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FormField from "./FormField";

function DatePicker(props) {
  const { value, title, placeholder, setFieldValue, setFieldTouched } = props;
  const [active, setActive] = useState(false);

  const open = () => {
    setActive(true);
  };

  const dismiss = () => {
    setActive(false);
    setFieldTouched(true);
  };

  return (
    <>
      <DateTimePickerModal
        isVisible={active}
        date={
          value ||
          moment()
            .startOf("day")
            .toDate()
        }
        onConfirm={date => {
          dismiss();
          setFieldValue(
            moment(date)
              .startOf("day")
              .toDate()
          );
        }}
        headerTextIOS={title}
        cancelTextIOS="キャンセル"
        confirmTextIOS="OK"
        onCancel={dismiss}
        locale="ja"
      />
      <Button
        title={value ? moment(value).format("YYYY年MM月DD日") : placeholder}
        onPress={open}
      />
    </>
  );
}

DatePicker.defaultProps = {
  title: "日付を選択してください",
  placeholder: "日付を選択してください"
};

DatePicker.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string
};

export default FormField(DatePicker);
