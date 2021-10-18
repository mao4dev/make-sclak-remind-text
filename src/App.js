import { useState } from "react";
import { TextInput } from "./component/textInput";
import { TimeInput } from "./component/timeInput";
import { RepeatSelect } from "./component/repeatSelect";
import { format } from "date-fns-tz";

import "./styles.css";

export default function App() {
  const [whenText, setWhenText] = useState("");
  const [whoText, setWhoText] = useState("");
  const [whatText, setWhatText] = useState("");
  const [repeat, setSelected] = useState("");

  // function copyTextToClipboard(text) {
  //   navigator.clipboard.writeText(text).then(
  //     function () {
  //       console.log("Async: Copying to clipboard was successful!");
  //     },
  //     function (err) {
  //       console.error("Async: Could not copy text: ", err);
  //     }
  //   );
  // }

  // const clipBoadCopy = (e) => {
  //   copyTextToClipboard();
  // };
  function formatTime(value) {
    console.log(value);
    let val = "";
    if (value) {
      const utcDate = new Date(value);
      val = format(utcDate, "HH:mm");
    }

    return val.length > 0 ? "at " + val : "";
  }

  return (
    <div className="App">
      <h1>Slack リマインダーテキスト生成</h1>
      <div>
        <label>hint :</label>
        うまく登録できない時は、メッセージに全角空白を入れてみてください。
      </div>
      <div>
        <b>
          /remind {whoText} {whatText} {formatTime(whenText)} {repeat}
        </b>
      </div>
      <TextInput setText={setWhoText} label="誰に？" />
      <TimeInput setTime={setWhenText} label="何時に？" timeValue={whenText} />
      <TextInput setText={setWhatText} label="なんて？" isQuotation="false" />
      <RepeatSelect setSelected={setSelected} label="繰り返す？" />
      {/* <button>クリップボードにコピー</button> */}
    </div>
  );
}
