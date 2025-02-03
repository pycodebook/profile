import Heading from "./commons/Heading";

const skills = {
    "languages": ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Python", "React Js"],
    "frameworks": ["Flask", "Django", "TensorFlow"],
    "databases": ["MySQL", "PostgreSQL"],
    "cloud_platforms": ["AWS"],
    "project_management": ["Agile", "Scrum"],
    "soft_skills": ["Leadership", "Team Collaboration", "Effective Communication", "Problem-Solving", "Time Management"],
    "certifications": [
      "Neural Networks and Deep Learning",
      "Improving Deep Neural Networks: Hyper-parameter Tuning",
      "Regularization and Optimization",
      "Structuring Machine Learning Projects"
    ],
    "developer_tools": ["Git", "Docker", "Jira", "Discord", "Trello", "Amazon EC2", "AWS Lambda"]
  }


 export default function Skills(){
    const beautifyKey = (input) =>{
      const splitInput = input.split('_')
      const capitalize = splitInput.map((value)=> {return value[0].toUpperCase()+value.slice(1)}).join(' ')
      return capitalize
    }
    return(
        <>
       
       <Heading title='Skill Highlights'/>
        <ul className="mt-2">
          {Object.entries(skills).map(([key, value], index)=>{
            return(
              <li key={index}>
                <span className="font-bold">{beautifyKey(key)}: </span> {value.join(', ')}
              </li>
            )
          })}
        </ul>
        </>
    )
}