import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
} from "react";

import styles from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  const [value, setValue] = useState("");

  useImperativeHandle(ref, () => {
    setValue(value.toUpperCase(value.trim()));
    return {
      inputValue: value,
      clearInputVal: clear,
    };
  });

  const clear = () => {
    setValue("");
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Enter the name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
});

export default Input;
