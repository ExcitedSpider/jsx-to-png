import logo from "./logo.svg";
import "./App.css";
import { jsxToPng } from "jsx-to-png";
import * as React from "react";

const Icon = (props) => (
  <svg
    width="105"
    height="125"
    viewBox="0 0 105 125"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M52.5 8.75C43.8471 8.75 35.3885 11.3159 28.1938 16.1232C20.9992 20.9305 15.3916 27.7633 12.0803 35.7576C8.76896 43.7519 7.90256 52.5485 9.59066 61.0352C11.2788 69.5219 15.4456 77.3174 21.5641 83.4359C27.6826 89.5545 35.4782 93.7213 43.9648 95.4094C52.4515 97.0975 61.2482 96.2311 69.2424 92.9197C77.2367 89.6084 84.0695 84.0009 88.8768 76.8062C93.6841 69.6116 96.25 61.1529 96.25 52.5C96.25 46.7547 95.1184 41.0656 92.9198 35.7576C90.7211 30.4496 87.4985 25.6266 83.4359 21.5641C79.3734 17.5015 74.5504 14.2789 69.2424 12.0803C63.9344 9.88163 58.2454 8.75 52.5 8.75V8.75ZM52.5 87.5C45.5777 87.5 38.8108 85.4473 33.0551 81.6014C27.2993 77.7556 22.8133 72.2893 20.1642 65.8939C17.5152 59.4985 16.8221 52.4612 18.1725 45.6718C19.523 38.8825 22.8564 32.6461 27.7513 27.7513C32.6461 22.8564 38.8825 19.523 45.6719 18.1725C52.4612 16.822 59.4985 17.5152 65.8939 20.1642C72.2894 22.8133 77.7556 27.2993 81.6015 33.055C85.4473 38.8108 87.5 45.5777 87.5 52.5C87.5 61.7826 83.8125 70.685 77.2488 77.2487C70.685 83.8125 61.7826 87.5 52.5 87.5V87.5ZM32.8125 43.75C32.8125 42.4521 33.1974 41.1833 33.9185 40.1041C34.6396 39.0249 35.6645 38.1837 36.8637 37.687C38.0628 37.1903 39.3823 37.0604 40.6553 37.3136C41.9283 37.5668 43.0976 38.1918 44.0154 39.1096C44.9332 40.0274 45.5582 41.1967 45.8114 42.4697C46.0646 43.7427 45.9347 45.0622 45.438 46.2614C44.9413 47.4605 44.1001 48.4854 43.0209 49.2065C41.9417 49.9276 40.673 50.3125 39.375 50.3125C37.6345 50.3125 35.9653 49.6211 34.7346 48.3904C33.5039 47.1597 32.8125 45.4905 32.8125 43.75ZM72.1875 43.75C72.1875 45.0479 71.8026 46.3167 71.0815 47.3959C70.3604 48.4751 69.3355 49.3163 68.1364 49.813C66.9372 50.3097 65.6177 50.4396 64.3447 50.1864C63.0717 49.9332 61.9024 49.3082 60.9846 48.3904C60.0668 47.4726 59.4418 46.3033 59.1886 45.0303C58.9354 43.7573 59.0654 42.4378 59.5621 41.2386C60.0588 40.0395 60.8999 39.0146 61.9791 38.2935C63.0583 37.5724 64.3271 37.1875 65.625 37.1875C67.3655 37.1875 69.0347 37.8789 70.2654 39.1096C71.4961 40.3403 72.1875 42.0095 72.1875 43.75ZM68.8188 58.5813C69.2573 58.8611 69.6361 59.225 69.9332 59.6521C70.2303 60.0791 70.4398 60.5608 70.5496 61.0693C70.6595 61.5778 70.6675 62.1031 70.5731 62.6147C70.4788 63.1263 70.284 63.6141 70 64.05C68.0879 66.9014 65.5032 69.2382 62.474 70.8541C59.4449 72.47 56.0645 73.3152 52.6313 73.3152C49.1981 73.3152 45.8177 72.47 42.7885 70.8541C39.7594 69.2382 37.1746 66.9014 35.2625 64.05C34.9724 63.622 34.7694 63.141 34.6651 62.6345C34.5608 62.128 34.5574 61.606 34.6549 61.0982C34.7524 60.5903 34.9489 60.1067 35.2334 59.6748C35.5178 59.243 35.8845 58.8714 36.3125 58.5813C36.7412 58.2874 37.2245 58.0823 37.7337 57.9782C38.2429 57.874 38.7679 57.8729 39.2776 57.9748C39.7872 58.0768 40.2713 58.2797 40.7014 58.5717C41.1314 58.8637 41.4985 59.2389 41.7813 59.675C42.9785 61.4799 44.6038 62.9605 46.5122 63.9847C48.4207 65.0089 50.5529 65.5449 52.7188 65.5449C54.8847 65.5449 57.0169 65.0089 58.9253 63.9847C60.8337 62.9605 62.459 61.4799 63.6563 59.675C64.2223 58.8779 65.0675 58.3228 66.024 58.1202C66.9804 57.9176 67.9781 58.0822 68.8188 58.5813Z"
      fill="white"
    />
    <text
      fill="white"
      xmlSpace="preserve"
      fontFamily="PingFang SC"
      fontSize="14"
      fontWeight="500"
      letterSpacing="0em"
      y="120"
      x="52"
      style={{
        whiteSpace: "pre",
        dominantBaseline: "middle",
        textAnchor: "middle",
      }}
    >
      Hello {props.name}
    </text>
  </svg>
);

function App() {
  const [imageSrc, setImageSrc] = React.useState(() => logo);
  const [username, setUsername] = React.useState('Scipio');

  React.useEffect(() => {
    let validFlag = true;

    jsxToPng(<Icon name={username}></Icon>).then((data) => {
      if (validFlag) {
        setImageSrc(data);
      }
    });

    return () => {
      validFlag = false;
    };
  }, [username]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={imageSrc} className="App-logo" alt="logo" />
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            style={{ marginTop: "60px", marginLeft: '20px' }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
      </header>
    </div>
  );
}

export default App;
