import Heading from "./commons/Heading";

const  volunteerExperience= [
      {
        "title": "Arduino Training",
        "role": "Volunteer Trainer",
        "responsibilities": [
          "Conducted hands-on training sessions on Arduino programming and project development for undergraduate students."
        ]
      },
      {
        "title": "PCB Design and Etching Training",
        "role": "Volunteer Organizer",
        "responsibilities": [
          "Guided students in designing and fabricating custom PCBs for electronics projects."
        ]
      },
      {
        "title": "Robotics Club",
        "role": "Active Volunteer",
        "responsibilities": [
          "Supported robotics events and workshops, helping students build and program robots.",
          "Facilitated inter-college collaborations and competitions within the Robotics Club."
        ]
      }
    ]

export default function Extracurricular(){
    return(
        <>
            <Heading title='Extracurricular Activities & Volunteering' />
            {volunteerExperience.map(({title,role, responsibilities}, index) =>{
              return(
                <div key={index}>
                <div className="my-3">
                     <div className="font-bold">
                        {title}
                     </div>
                     <div className="italic text-sm">
                        {role}
                     </div>
                 </div>
                
                    <ul className="ml-8 text-base">
                    {responsibilities.map((item, index)=>{
                        return(
                            <li className="list-disc" key={index}>
                            {item}
                            </li>
                        )
                    })}
                    </ul>
                
                </div>
              )
                
            })}
        </>
    )
}