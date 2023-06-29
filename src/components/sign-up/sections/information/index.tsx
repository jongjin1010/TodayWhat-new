import { UserDataAtom } from "@/atoms/container";
import { SignUpInterface } from "@/types/join";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import * as S from "./style";

function InformationInputSection() {
  const router = useRouter();
  const [userData, setUserData] = useRecoilState(UserDataAtom);
  const [form, setForm] = useState<SignUpInterface>({
    grade: 1,
    class: 1,
  });

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form: SignUpInterface) => ({ ...form, [name]: value }));
  }, []);

  const onSignUp = () => {
    setUserData((prev: SignUpInterface) => ({
      ...prev,
      grade: form.grade,
      class: form.class,
    }));
    toast.success("정보가 저장 되었어요", {
      autoClose: 1000,
    });
    router.push("/");
  };

  return (
    <section>
      <S.InputsWrapper>
        <S.InputItem>
          <S.InputTitle>학교 이름</S.InputTitle>
          <S.Input disabled value={userData.name} />
        </S.InputItem>
        <S.InputItem>
          <S.InputTitle>학년</S.InputTitle>
          <S.Input
            type={"number"}
            name="grade"
            onChange={onChange}
            value={form.grade}
            placeholder="학년 입력"
            min={1}
            max={6}
          />
        </S.InputItem>
        <S.InputItem>
          <S.InputTitle>반</S.InputTitle>
          <S.Input
            type={"number"}
            name="class"
            onChange={onChange}
            value={form.class}
            placeholder="반 입력"
            min={1}
          />
        </S.InputItem>
        {form.grade > 0 && form.grade < 7 && form.class > 0 && (
          <S.SignUpButton onClick={onSignUp}>확인</S.SignUpButton>
        )}
      </S.InputsWrapper>
    </section>
  );
}

export default InformationInputSection;
