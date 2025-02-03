import Education from "../components/Education";
import Experience from "../components/Experience";
import Extracurricular from "../components/Extracurricular";
import ProfileImage from "../components/ProfileImage";
import Skills from "../components/Skills";
import Summary from "../components/Summary";

export default function Profile() {
  return (
   <div className="mx-12 my-6">
       <div className="text-3xl font-bold">Ashok Basnet</div>
       <div className="italic">Gwarko, Lalitpur, Nepal.</div>
     <div className="flex space-x-8">
     <div className="flex-3">
      <Summary />
      <Skills />
      </div>
      <div className="flex-1 mt-10">
        <ProfileImage />
      </div>
    </div>

    <Experience />
    <Education />
    <Extracurricular />
   </div>
  );
}
