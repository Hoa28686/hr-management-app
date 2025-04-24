
import { animalToEmoji } from "./animalToEmoji";
import "./PersonCard.css";

const PersonCard = (props) => {
  const now=new Date();
  const startDate= new Date(props.startDate);
  const difference=(now-startDate)/(1000*60*60*24*365);
  const workingYear= (difference >=1)? Math.floor(difference): difference.toFixed(1);
  console.log(workingYear);

  return (
    <div className="person">
      <p><span className="name">{props.name}</span></p>
      <p>Position: {props.title}</p>
      <p>Salary: ${props.salary}/month</p>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>      
      <p>Favorite animal: {animalToEmoji[props.animal.toLowerCase()]}</p>
      <p>Since: {props.startDate}</p>
      <p>Location: {props.location}</p>
      <p>Department: {props.department}</p>
      <p>Skills: {props.skills.join(', ')}</p>

      {[5,10,15].includes(workingYear) && <p>🎉 Schedule recognition meeting.</p> }
      {workingYear<=0.5 && <p>🔔 Schedule probation review.</p> }

    </div>
  );
};
export default PersonCard;
