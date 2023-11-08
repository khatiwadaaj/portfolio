import Image from "next/image";
import Footer from "./components/Footer";
import HeroInfo from "./components/HeroInfo";
import ProjectsSection from "./components/ProjectsSection";
import SocialContact from "./components/SocialContact";
import TechStackInfo from "./components/TechStackInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import Header from "./components/Header";
import SideNavBar from "./components/SideNavBar";

export default function Home() {
  return (
    <div className='container relative mx-auto max-w-screen-xl'>
      <div className=''>
        {/* <SideNavBar /> */}
        <Header />
        <HeroInfo />
        <ProjectsSection />
        <TechStackInfo />
        {/* <ExperienceInfo /> */}
        <SocialContact />
        <Footer />
      </div>
    </div>
  );
}
