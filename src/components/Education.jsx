import Heading from "./commons/Heading";

const  education = [
      {
        "institution": "Institute of Engineering, Central Campus, Pulchowk",
        "location": "Kathmandu, Nepal",
        "degree": "Master of Science (M.Sc) in Computer System and Knowledge Engineering",
        "years": "2019 - 2021"
      },
      {
        "institution": "Institute of Engineering, Purwanchal Campus",
        "location": "Dharan, Sunsari, Nepal",
        "degree": "Bachelor in Electronics and Communication Engineering",
        "years": "2014 - 2018"
      }
    ]
  

export default function Education(){
    return(
        <>
            <Heading title='Education' />
            {education.map(({institution,location, degree, years}, index) =>{
              return(
                <>
                <div className="my-3">
                     <div className="flex justify-between font-bold">
                        <span>{institution}</span>
                        <span>{location}.</span>
                     </div>
                     <div className="flex justify-between italic text-sm">
                        <span>{degree}</span>
                        <span>{years}</span>
                     </div>
                 </div>
                
                </>
              )
                
            })}
        </>
    )
}