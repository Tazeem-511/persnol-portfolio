import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";
import { Main } from "next/document";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
       <Main></Main>
      <Footer></Footer>
    </>
  );
}


