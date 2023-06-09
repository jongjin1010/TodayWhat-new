import { SignUpSectionAtom, UserDataAtom } from "@/atoms/container";
import Loading from "@/components/loading";
import { SignUpInterface } from "@/types/join";
import { Row } from "@/types/school";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import * as S from "./style";

function SchoolNameInputSection() {
  const [isReqEnd, setIsReqEnd] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<Row[]>([]);
  const signUpSection = useSetRecoilState(SignUpSectionAtom);
  const userData = useSetRecoilState(UserDataAtom);

  useEffect(() => {
    getSchoolListBySchoolName();
  }, [name]);

  const getSchoolListBySchoolName = async () => {
    if (name) {
      setIsReqEnd(false);
      const data: Row[] = [];

      try {
        const res: any = await axios.get(
          `https://open.neis.go.kr/hub/schoolInfo?KEY=${process.env.NEXT_PUBLIC_API_KEY}&Type=json&SCHUL_NM=${name}`
        );

        res.data.schoolInfo[1].row.forEach((item: Row, index: number) => {
          if (index < 6) {
            data.push(item);
          }
        });

        setData(data);
      } catch {
        setIsReqEnd(true);
      }
      setIsReqEnd(true);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onItemClick = (item: Row) => {
    userData((prev: SignUpInterface) => ({
      ...prev,
      name: item.SCHUL_NM,
      ATPT_OFCDC_SC_CODE: item.ATPT_OFCDC_SC_CODE,
      SD_SCHUL_CODE: item.SD_SCHUL_CODE,
    }));
    signUpSection({ currentSection: 2 });
  };

  return (
    <section>
      <S.SearchInput
        type="text"
        placeholder="학교 이름"
        onChange={onChange}
        value={name}
      />
      {isReqEnd && data && (
        <S.ResultBox>
          {data?.map((item) => (
            <S.ResultItem
              key={item.SD_SCHUL_CODE}
              onClick={() => onItemClick(item)}
            >
              <S.Name>{item.SCHUL_NM}</S.Name>
              <S.Address>{item.ORG_RDNMA}</S.Address>
            </S.ResultItem>
          ))}
        </S.ResultBox>
      )}

      {!isReqEnd && (
        <S.ResultBox>
          <Loading />
        </S.ResultBox>
      )}
    </section>
  );
}

export default SchoolNameInputSection;
