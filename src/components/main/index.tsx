import { UserDataAtom } from "@/atoms/container";
import { SignUpInterface } from "@/types/join";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { v1 } from "uuid";
import * as S from "./style";

function MainPage() {
  const router = useRouter();
  const userData = useRecoilValue(UserDataAtom);
  const reset = useResetRecoilState(UserDataAtom);
  const [hasMeal, setHasMeal] = useState<boolean>(false);
  const [meal, setMeal] = useState<any>();
  const [user, setUser] = useState<SignUpInterface>({
    name: "",
    grade: 0,
    class: 0,
    ATPT_OFCDC_SC_CODE: "",
    SD_SCHUL_CODE: "",
  });

  useEffect(() => {
    if (!userData.grade) {
      router.push("/sign-up");
    } else {
      setUser(userData);
      getMealServiceDietInfo();
    }
  }, []);

  const getToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return year + month + day;
  };

  const getMealServiceDietInfo = async () => {
    try {
      const res: any = await axios.get(
        `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${
          process.env.NEXT_PUBLIC_API_KEY
        }&Type=json&ATPT_OFCDC_SC_CODE=${
          userData.ATPT_OFCDC_SC_CODE
        }&SD_SCHUL_CODE=${userData.SD_SCHUL_CODE}&MLSV_YMD=${getToday()}`
      );

      setMeal(res.data.mealServiceDietInfo[1].row);
    } catch {}
  };

  useEffect(() => {
    if (meal) {
      setHasMeal(true);
    } else {
      setHasMeal(false);
    }
  }, [meal]);

  const format = (menu: any) => {
    let result = "";
    let stack = [];
    let str = [];

    for (let character of menu) {
      stack.push(character);
    }

    for (let i = 0; i < menu.length; i++) {
      let temp = stack.pop();

      if (temp === "(") {
        while (str.pop() !== ")") {
          console.log();
        }
      } else {
        str.push(temp);
      }
    }

    result = str.reverse().join(" ");

    return result;
  };

  const toArray = (meal: any) => {
    let array = [];

    for (const item of meal.replace(/[*, .]/g, "").split("<br/>")) {
      array.push(item.replace(/^[^가-힣]/g, "").replace(/[^가-힣]$/g, ""));
    }
    return array;
  };

  const getMeal = (time: string) => {
    if (time === "조식") {
      return toArray(format(meal[0].DDISH_NM));
    }
    if (time === "중식") {
      return toArray(format(meal[1].DDISH_NM));
    }
    if (time === "석식") {
      return toArray(format(meal[2].DDISH_NM));
    }
  };

  const onEdit = () => {
    reset();
    router.push("/sign-up");
  };

  return (
    <S.MainPageLayout>
      <Image width={120} height={40} alt="logo" src={"/images/Logo.png"} />
      <S.MyInformation onClick={onEdit}>
        <S.School>{user.name}</S.School>
        <S.Student>{`${user.grade}학년 ${user.class}반`}</S.Student>
      </S.MyInformation>
      <div style={{ marginBottom: "0" }}>
        {hasMeal && (
          <div>
            {meal[0] && (
              <S.MealBox>
                <S.LineBox>
                  <S.Line />
                  <S.Time>아침</S.Time>
                  <S.Line />
                </S.LineBox>
                <S.ItemBox>
                  {getMeal("조식")?.map((item: any) => (
                    <S.MealItem key={v1()}>{item}</S.MealItem>
                  ))}
                </S.ItemBox>
              </S.MealBox>
            )}
            {meal[1] && (
              <S.MealBox>
                <S.LineBox>
                  <S.Line />
                  <S.Time>점심</S.Time>
                  <S.Line />
                </S.LineBox>
                <S.ItemBox>
                  {getMeal("중식")?.map((item: any) => (
                    <S.MealItem key={v1()}>{item}</S.MealItem>
                  ))}
                </S.ItemBox>
              </S.MealBox>
            )}
            {meal[2] && (
              <S.MealBox>
                <S.LineBox>
                  <S.Line />
                  <S.Time>저녁</S.Time>
                  <S.Line />
                </S.LineBox>
                <S.ItemBox>
                  {getMeal("석식")?.map((item: any) => (
                    <S.MealItem key={v1()}>{item}</S.MealItem>
                  ))}
                </S.ItemBox>
              </S.MealBox>
            )}
          </div>
        )}
        {!hasMeal && <S.NotHasMeal>오늘은 급식이 없어요</S.NotHasMeal>}
      </div>
    </S.MainPageLayout>
  );
}

export default MainPage;
