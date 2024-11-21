import { useNavigate } from "react-router-dom"
import HeroSection from "../src/components/HeroSection";
import FeaturesSection from "../src/components/FeaturesSection";
import HowItWorks from "../src/components/HowItWorks";
import CTASection from "../src/components/CtaSection";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/NavBar";



const Landing = () => {

  const navigate = useNavigate();


  return(
    <>
      <Navbar></Navbar>
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorks></HowItWorks>
      <CTASection></CTASection>
      <Footer></Footer>
    </>
    
  )
}

export default Landing