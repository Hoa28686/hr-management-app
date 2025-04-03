const Person = (props) => {
  return (
    <div className="person">
      <p>Name: <span className="name">{props.name}</span></p>
      <p>Position: {props.title}</p>
      <p>Salary: ${props.salary}/month</p>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Favorite animal: {props.animal}</p>
    </div>
  );
};
export default Person;
