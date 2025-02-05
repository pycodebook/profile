import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Extracurricular from "../../components/Extracurricular";
import IntroSection from "../../components/IntroSection";
import Navbar from "../../components/Navbar";
import ProfileImage from "../../components/ProfileImage";
import Skills from "../../components/Skills";
import Summary from "../../components/Summary";

export default function Profile() {
  return (
   <div className=" md:my-6 md:mx-12 m-4">
    <IntroSection />
     <div className="flex space-x-8">
     <div className="flex-3">
      <Summary />
      <Skills />
      </div>
      <div className="flex-1 pt-8">
        <ProfileImage />
      </div>
    </div>

    <Experience />
    <Education />
    <Extracurricular />
   </div>
  );
}
