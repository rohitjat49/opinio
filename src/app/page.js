import Image from "next/image";
import HomePage from "./Components/Home/HomePage";
import PredictionHome from "./Components/PredictionPage/PredictionHome";
import LiveMatch from "./Components/LiveMatch/LiveMatch";
import NumberLogin from "./Components/Login/NumberLogin";
import VerifyOTP from "./Components/Login/VerifyOTP";
import Link from "next/link";




export default function Home() {
  return (
   <div className="">
    <HomePage/>  
    <LiveMatch/>
    {/* <NumberLogin/> */}
    {/* <VerifyOTP/> */}


    {/* <PredictionHome/> */}
 
   </div>
  );
}