import Banner from "@/components/homePage/Banner";
import DressStyle from "@/components/homePage/DressStyle";
import HappyCustomer from "@/components/homePage/HappyCustomer";
import NewArrival from "@/components/homePage/NewArrival";
import Sponser from "@/components/homePage/Sponser";
import TopSelling from "@/components/homePage/TopSelling";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
      <Banner></Banner>
      <Sponser></Sponser>
      <NewArrival></NewArrival>
      <TopSelling></TopSelling>
      <DressStyle></DressStyle>
    </>
  );
}
