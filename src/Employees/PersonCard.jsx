const PersonCard = (props) => {
  return (
    <div className="person">
      <p><span className="name">{props.name}</span></p>
      <p>Position: {props.title}</p>
      <p>Salary: ${props.salary}/month</p>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Favorite animal: {props.animal}</p>
      <p>Since: {props.startDate}</p>
      <p>Location: {props.location}</p>
      <p>Department: {props.department}</p>
      <p>skills: {props.skills}</p>
    </div>
  );
};
export default PersonCard;
