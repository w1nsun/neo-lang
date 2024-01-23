import React from "react";
import { Task } from "../Task/Task";
import styles from "./Lesson.module.css";

type Props = {};

export function Lesson(props: Props) {
  return (
    <div className={`${styles["lesson-content"]} container px-2 bg-slate-50`}>
      <div className="block">
        <div className={`${styles["task-container"]} flex flex-col mt-4 mb-4`}>
          <div className={`${styles["item-container"]}`}>
            <span className={`${styles.item}`}>
              Covariance and contravariance are concepts related to how Java
              handles subtyping, especially in the context of generics.
            </span>
            <span className={`${styles.item}`}>
              <div className="inline-block">
                <span
                  className={`${styles.answer}`}
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                >
                  Understanding
                </span>
              </div>
            </span>
            <span className={`${styles.item}`}>
              these concepts is crucial for writing type-safe code that can
              handle different types in a flexible yet controlled way. Let's
              dive into each concept with examples.
            </span>
          </div>
        </div>
        <div className={`${styles["task-container"]} flex flex-col mt-4 mb-4`}>
          <span>
            Covariance and contravariance are concepts related to how Java
            handles subtyping, especially in the context of generics.
            Understanding these concepts is crucial for writing type-safe code
            that can handle different types in a flexible yet controlled way.
            Let's dive into each concept with examples.
          </span>
        </div>
      </div>
      <Task />
    </div>
  );
}
