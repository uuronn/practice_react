/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage"

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  }

  /* ↓ 第二引数に入れられた変数の値が変わったときに実行される */
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);
  //   ↑  Line 24:6:  React Hook useEffect has a missing dependency: 'faceShowFlag'. Either include it or remove the dependency array のLintエラーが出る
  //             それを一番上のコードで解消
    
    return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" >お元気で？</ColorfulMessage>
      <ColorfulMessage color="pink" >お元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <br/>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{ num }</p>
      {faceShowFlag && <p>( ;∀;)</p>}
    </>
  );
};

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   // レンダリングする箇所-----------------------
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//   // ここまで---------------
// }

// export default App;
