import "./AddEmployee.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";

const emptyForm = {
  name: "",
  title: "",
  salary: "",
  phone: "",
  email: "",
  animal: "",
  startDate: "",
  location: "",
  department: "",
  skills: "",
};

const AddEmployee = ({ onAddEmployee, apiUrl }) => {
  const [formData, setFormData] = useState(emptyForm);
  const navigate = useNavigate();
  const { post } = useAxios();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const newEmployee = Object.fromEntries(
    Object.entries(formData).map(([key, value]) => {
      let formatedValue;
      switch (key) {
        case "salary":
          formatedValue = parseFloat(parseFloat(value).toFixed(2));
          break;
        case "skills":
          formatedValue = value.split(",").map((skill) => skill.trim());
          break;
        case "email":
          formatedValue = value;
          break;
        default:
          formatedValue =
            typeof value === "string" ? value.toLowerCase() : value;
          break;
      }

      return [key, formatedValue];
    })
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addedNewEmployee = await post(apiUrl, newEmployee);
    onAddEmployee(addedNewEmployee);

    setFormData(emptyForm);
    navigate("/");
  };

  return (
    <>
      <h1>Add new employee</h1>
      <form onSubmit={handleSubmit} className="addForm container">
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="salary">Salary: </label>
          <input
            id="salary"
            type="number"
            step="any"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="animal">Animal: </label>
          <input
            id="animal"
            type="text"
            name="animal"
            value={formData.animal}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="startDate">Start date: </label>
          <input
            id="startDate"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location: </label>
          <input
            id="location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="department">Department: </label>
          <input
            id="department"
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="skills">Skills: </label>
          <input
            id="skills"
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddEmployee;
