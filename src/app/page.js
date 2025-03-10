import Image from "next/image";
import HomePage from "./Components/Home/HomePage";
import PredictionHome from "./Components/PredictionPage/PredictionHome";
import LiveMatch from "./Components/LiveMatch/LiveMatch";
import Link from "next/link";
import BettingBid from "./Components/Order/BettingBid";
import MobileNumberInput from "./Components/Loging/MobileNumber";
import OtpVerification from "./Components/Loging/OtpNumber";
import WalletUI from "./Components/wallet/WalletUi";
import PaymentMethods from "./Components/wallet/PaymentMethod";
import CardMethod from "./Components/wallet/CardMethod";
import BallBox from "./ui/LiveButton";
import UserProfile from "./Components/Home/UserProfile";




export default function Home() {
  return (
   <div className="">
    <HomePage/>  
   
    
   </div>
  );
}