import React, { useState } from "react";
import styles from "./AnswerSelectBox.module.css";

type SelectOption = {
  label: string;
  value: string | number;
};

export type SelectProps = {
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
  value?: SelectOption;
};

export function AnswerSelectBox({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<
    number | undefined
  >();
  const ulClassName = `${styles.options} ${isOpen ? styles.show : ""}`;

  function selectOption(option: SelectOption) {
    onChange(option);
  }

  function isOptionSelected(option: SelectOption) {
    console.log({ option, value });
    return option.value === value?.value;
  }

  return (
    <span
      onBlur={() => {
        setIsOpen(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
      }}
      tabIndex={0}
      className={`${styles["answer-select-box"]}`}
    >
      <span className={styles.value}>{value?.label}</span>
      <div className={styles.devider}></div>
      <div className={styles.caret}></div>
      <ul className={ulClassName}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => {
              setHighlightedIndex(index);
            }}
            key={option.label}
            className={`${styles.option} ${
              isOptionSelected(option) ? styles.selected : ""
            } ${highlightedIndex === index ? styles.highlighted : ""}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </span>
  );
}
