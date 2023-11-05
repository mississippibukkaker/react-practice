import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./Components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceFlag, setFaceFlag] = useState(false);

  const countUp = () => {
    setNum(num + 1);
  };
  const showFace = () => {
    setFaceFlag(!faceFlag);
  };

  // useEffect ある変数の状態が変化したときだけ処理を走らせたいとき（再レンダリングでは走らせたくない
  useEffect(() => {
    console.log("useEffect");
    if (num > 0) {
      if (num % 3 == 0) {
        faceFlag || setFaceFlag(true);
      } else {
        faceFlag && setFaceFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">フリーですか？</ColorfulMessage>
      <ColorfulMessage color="pink">彼氏います！</ColorfulMessage>
      <button onClick={countUp}>カウントアップ</button>
      <br />
      <button onClick={showFace}>on/off</button>
      <p>{num}</p>
      {faceFlag && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;
