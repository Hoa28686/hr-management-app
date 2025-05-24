import axios from "axios";
import "./AddEmployee.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";

const AddEmployee = ({ onAddEmployee, apiUrl }) => {
  const [formData, setFormData] = useState({
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
  });
  const navigate = useNavigate();
  const { post } = useAxios();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEmployee = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => {
        let formatedValue =
          key === "email"
            ? value
            : key === "salary"
            ? parseFloat(parseFloat(value).toFixed(2))
            : key === "skills"
            ? value.split(",").map((skill) => skill.trim())
            : typeof value === "string"
            ? value.toLowerCase()
            : value;
        return [key, formatedValue];
      })
    );
    const addedNewEmployee = await post(apiUrl, newEmployee);
    onAddEmployee(addedNewEmployee);

    setFormData({
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
    });
    navigate("/");
    // console.log(newEmployee);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="addForm">
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="salary">Salary: </label>
          <input
            type="number"
            step="any"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="animal">Animal: </label>
          <input
            type="text"
            name="animal"
            value={formData.animal}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="startDate">Start date: </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="department">Department: </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="skills">Skills: </label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddEmployee;
