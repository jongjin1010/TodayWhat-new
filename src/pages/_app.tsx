import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/global";
import { RecoilRoot } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ToastContainer />
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
