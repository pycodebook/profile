import Heading from "./commons/Heading";

const experienceData = [
      {
        "company": "Nepal College of Information Technology, Pokhara University",
        "location": "Balkumari, Lalitpur",
        "role": "Assistant Professor",
        "duration": "Apr. 2022 – Present",
        "responsibilities": [
          "Involved in Teaching Web Technology, Analysis and Design of Algorithm, MIS, Artificial Intelligence, and Intelligent System.",
          "Supervised numerous major projects and participated in Hackfest events and other student-led activities.",
          "Awarded startup seed funding of 3.5 Million Nepalese Rupees by the University Grants Commission for the 'Smart Estimation' startup idea."
        ]
      },
      {
        "company": "Data Construct Pvt. Ltd.",
        "location": "Balkumari, Lalitpur",
        "role": "Co-founder, System Architect",
        "duration": "Oct. 2023 - Present",
        "responsibilities": [
          "Providing leadership and direction to the technical team at Data Construct, ensuring effective collaboration, and fostering a productive working environment.",
          "Leading the design and development of the architectural framework for Smart Estimation, an innovative software solution to accurately determine project prices.",
          "Managing the development and deployment of iCaptain, a comprehensive cricket league management platform, enabling features such as team registration, match scheduling, and team resource management."
        ]
      },
      {
        "company": "Thapathali Campus",
        "location": "Thapathali, Kathmandu",
        "role": "Part-time Lecturer",
        "duration": "June 2018 - Oct 2023",
        "responsibilities": [
          "Involved in Teaching Digital Logic, Antenna & Wave Propagation, and C Programming."
        ]
      },
      {
        "company": "Tech Train Pvt. Ltd.",
        "location": "Pulchowk, Lalitpur",
        "role": "Project Manager",
        "duration": "June 2019 - Dec. 2021",
        "responsibilities": [
          "Developed an Infrastructure Management System for multiple Municipalities, including Lalitpur Metropolitan City, Changunarayan Municipality, and Gorkha Municipality.",
          "Implemented a Project Management System for a growing US-based company, enabling efficient work scheduling, internal communication, and video conferencing among staff members.",
          "Designed a Product Digital Mapping System for the Trade and Export Promotion Center, facilitating the visualization of exportable products from Nepal on a GIS map, integrated seamlessly with a website."
        ]
      }
    ]
  
export default function Experience(){
    
    return(
        <>
            <Heading title='Professional Experience'/>
            {experienceData.map(({company,location, role, duration, responsibilities}, index) =>{
              return(
                <div key={index}>
                <div className="my-3">
                     <div className="flex justify-between font-bold">
                        <span>{company}</span>
                        <span>{location}.</span>
                     </div>
                     <div className="flex justify-between italic text-sm">
                        <span>{role}</span>
                        <span>{duration}</span>
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