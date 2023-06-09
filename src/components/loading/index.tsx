import React from "react";
import * as S from "./style";

function Loading() {
  return (
    <S.Loader>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.Loader>
  );
}

export default Loading;
