import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}

      body {
        font-family: "Noto Sans KR", sans-serif;
        background-color: #eeeded;
      }

      * {
        box-sizing: border-box;
      }

      a {
        text-decoration: none;
        color: black;
      }

      button {
        background: inherit;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        overflow: visible;
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyle;
