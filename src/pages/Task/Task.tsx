import React, { useState } from "react";
import "./Task.css";
import { AnswerSelectBox } from "../../components/ui/AnswerSelectBox";

type Props = {};

export function Task(props: Props) {
  const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
  ];
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );

  return (
    <div className="task-container">
      <span className="task-container-block">
        Visual Studio Code is a lightweight but powerful source code editor
        which runs on your desktop and is available for Windows, macOS and
        Linux. It comes with built-in support for JavaScript, TypeScript and
      </span>
      <span className="task-container-block">
        <div className="answer-item">
          <div className="answer-correct">Node.js</div>
        </div>
      </span>
      <span className="task-container-block">
        Enable additional languages, themes, debuggers, commands, and more. VS
        Code's growing{" "}
      </span>
      <span className="task-container-block">
        <div className="answer-item">
          <div className="answer-correct">community</div>
        </div>
      </span>
      <span className="task-container-block">
        shares their secret sauce to{" "}
      </span>
      <AnswerSelectBox
        options={options}
        value={value}
        onChange={(o) => {
          setValue(o);
        }}
      />
      <span className="task-container-block"> your workflow.</span>
      <br />
      <span className="exercise-select-correct-form-word-text">
        <span>6. Muszę</span>
      </span>
      <span className="exercise-select-correct-form-word-text">
        <span></span>
        <span className="exercise-select-correct-form-word-answer">
          <div className="right_answer_tip_wrapper">
            <div className="answer-item">
              <div className="select-item">
                <div className="select-correct-form-word select_word_selected hoverBlock">
                  <div className="arrow open center"></div>
                </div>
                <div className="arrow"></div>{" "}
                <div className="select-correct-form-word-dropdown">
                  <div className="substrate"></div>
                  <div className="scroll standart">
                    <div className="scroll-content">
                      <div className="options">
                        <div className="item">wjeżdżaliśmy</div>
                        <div className="item">wjechaliśmy</div>
                        <div className="item">wjechaliśmy</div>
                        <div className="item">wjechaliśmy</div>
                        <div className="item">wjechaliśmy</div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>{" "}
              <div className="answer_tip"></div>
            </div>
          </div>{" "}
          <div className="exercise-history-answers exercise-history-answers">
            <div className="indicators_wrapper">
              <div className="exercise-indicators indicators">
                <div className="exercise-indicators-item item"></div>
              </div>
              <div className="comment-icon comment-icon"></div>
            </div>{" "}
          </div>
        </span>
      </span>
      <span className="exercise-select-correct-form-word-text">
        <span>
          wcześnie rano, aby uniknąć korków.
          <br />
        </span>
      </span>
    </div>
  );
}
