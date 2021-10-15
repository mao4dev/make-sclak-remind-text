import { useState } from "react";
import { TextInput } from "./component/textInput";
import { TimeInput } from "./component/timeInput";
import { RepeatSelect } from "./component/repeatSelect";
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

  return (
    <div className="App">
      <h1>Slack リマインダーテキスト生成</h1>
      <div>
        <label>hint :</label>
        うまく登録できない時は、メッセージに全角空白を入れてみてください。
      </div>
      <div>
        <b>
          /remind {whoText} {whatText} {whenText} {repeat}
        </b>
      </div>
      <TextInput setText={setWhoText} label="誰に？" />
      <TimeInput setTime={setWhenText} label="何時？" prefix="at " />
      <TextInput setText={setWhatText} label="なんて？" isQuotation="true" />
      <RepeatSelect setSelected={setSelected} label="繰り返す？" />
      {/* <button>クリップボードにコピー</button> */}
    </div>
  );
}
