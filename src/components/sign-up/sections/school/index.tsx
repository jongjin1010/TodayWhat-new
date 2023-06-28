import { SignUpSectionAtom, UserDataAtom } from "@/atoms/container";
import Loading from "@/components/loading";
import { SignUpInterface } from "@/types/join";
import { Row } from "@/types/school";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { toast } from "react-toastify";

function SchoolNameInputSection() {
  const [isReqEnd, setIsReqEnd] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<Row[]>([]);
  const signUpSection = useSetRecoilState(SignUpSectionAtom);
  const userData = useSetRecoilState(UserDataAtom);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const getSchoolListBySchoolName = async () => {
      if (name) {
        setIsReqEnd(false);
        try {
          const res: any = await axios.get(
            `https://open.neis.go.kr/hub/schoolInfo?KEY=${process.env.NEXT_PUBLIC_API_KEY}&Type=json&SCHUL_NM=${name}`
          );

          const resultData = res.data.schoolInfo[1].row.slice(0, 6);
          setData(resultData);
        } catch {
          toast.error("알 수 없는 오류에요");
        } finally {
          setIsReqEnd(true);
        }
      }
    };

    if (name) {
      setIsReqEnd(false);
      timer = setTimeout(() => {
        getSchoolListBySchoolName();
      }, 200);
    } else {
      setIsReqEnd(true);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [name]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setName(inputValue);
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
      {isReqEnd && (
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
