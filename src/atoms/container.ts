import { SignUpInterface } from "@/types/join";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { v1 } from "uuid";
const { persistAtom } = recoilPersist();

export const SignUpSectionAtom = atom({
  key: v1(),
  default: {
    currentSection: 1,
  },
});

export const UserDataAtom = atom<SignUpInterface>({
  key: "userData",
  default: {
    name: "",
    grade: 0,
    class: 0,
    ATPT_OFCDC_SC_CODE: "",
    SD_SCHUL_CODE: "",
  },
  effects_UNSTABLE: [persistAtom],
});
