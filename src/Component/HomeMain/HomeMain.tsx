import AboutVirayaSection from "./AboutVirayaSection"
// import Affiliations from "./Affiliations"
import CommercialInvestmentAdvisory from "./CommercialInvestmentAdvisory"
import CredibilitySection from "./CredibilitySection"
import FounderSection from "./FounderSection "
import HeroSection from "./HeroHm"
import IndustryProblemSection from "./IndustryProblemSection"
import LuxuryAdvisorySection from "./LuxuryAdvisorySection"
import MarketInsightSection from "./MarketInsightSection"
import Philosophy from "./Philosophy"
import PreLeasedInvestmentSection from "./PreLeasedInvestmentSection"
import PrivateConsultationSection from "./PrivateConsultationSection"
import ReelsShowcaseSection from "./ReelsShowcaseSection"
import StrategicLandSection from "./StrategicLandSection"
import TestimonialsSection from "./TestimonialsSection"
import TrustedDevelopersSlider from "./TrustedDevelopersSlider"
import VirayaAdvisoryModelSection from "./VirayaAdvisoryModelSection"
import VisionMission from "./VisionMission"
import WhyClientsChooseViraya from "./WhyClientsChooseViraya"

const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <CredibilitySection />
      <AboutVirayaSection />
      {/* <Affiliations/> */}
      <IndustryProblemSection />
      <FounderSection />
      <Philosophy />
      <TrustedDevelopersSlider/>
      <VirayaAdvisoryModelSection />
      <LuxuryAdvisorySection />
      <CommercialInvestmentAdvisory />
      <PreLeasedInvestmentSection />
      <StrategicLandSection />
      <WhyClientsChooseViraya />
      <MarketInsightSection />
      <VisionMission />
      <PrivateConsultationSection />
      <TestimonialsSection />
      <ReelsShowcaseSection />
    </>
  )
}

export default HomeMain
