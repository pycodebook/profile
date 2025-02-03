import Heading from "./commons/Heading";

 export default function Skills(){
    return(
        <>
       
       <Heading title='Skill Highlights'/>
        <ul className="mt-2">
          <li><span className="font-bold">Languages:</span> HTML, CSS, JavaScript, PHP, SQL, Python, React Js.</li>
          <li><span className="font-bold">Frameworks & Libraries:</span> Flask, Django, TensorFlow.</li>
          <li><span className="font-bold">Databases:</span> MySQL, PostgreSQL.</li>
          <li><span className="font-bold">Cloud Platforms:</span> AWS</li>
          <li><span className="font-bold">Project Management:</span> Agile, Scrum.</li>
          <li><span className="font-bold">Soft Skills:</span> Leadership, Team Collaboration, Effective Communication, Problem-Solving, Time Management.</li>
          <li><span className="font-bold">Certifications:</span> Neural Networks and Deep Learning, Improving Deep Neural Networks: Hyper-parameter Tuning.</li>
          <li><span className="font-bold">Regularization and Optimization:</span> Structuring Machine Learning Projects.</li>
          <li><span className="font-bold">Developer Tools:</span> Git, Docker, Jira, Discord, Trello, Amazon Web Services (Amazon EC2, AWS Lambda).</li>
        </ul>
        </>
    )
}