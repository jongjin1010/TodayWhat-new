import { SignUpSectionAtom } from "@/atoms/container";
import React, { ChangeEvent, useState } from "react";
import { useRecoilValue } from "recoil";
import SignUpSectionContainer from "../sections/container";
import * as S from "./style";

function SignUpPage() {
  const signUpSection = useRecoilValue(SignUpSectionAtom);

  return (
    <S.SignUpPageLayout>
      <S.GoBackButton section={signUpSection.currentSection} />
      <S.Title>
        {signUpSection.currentSection === 1
          ? "학교 이름을 입력해주세요"
          : "해당 정보를 입력해주세요"}
      </S.Title>
      <SignUpSectionContainer section={signUpSection.currentSection} />
    </S.SignUpPageLayout>
  );
}

export default SignUpPage;
