import styles from "./About.module.css";
import { FiLink } from "react-icons/fi";
const About = () => {
  return (
    <>
      <h1>HR Application</h1>
      <div className="container">
        <p>
          This is a simple HR application that allows users to manage, add and
          edit employees. It is a school project designed to demonstrate what I
          have learned in React, through components, routing, state management
          and APIs. The app is deployed using Render.
        </p>

        <section>
          <h2>Links and Live Page</h2>
          <ul>
            <li className={styles.pageLink}>
              <a
                href="https://react-hr-app-myzr.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend <FiLink />
              </a>
            </li>
            <li className={styles.pageLink}>
              <a
                href="https://react-hr-app.onrender.com/employees"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend - JSON Server <FiLink />
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Features Included</h2>
          <ul>
            <li>Fetch data from API and display a list of employees</li>
            <li>Edit employee salary, location, department and skills</li>
            <li>Add new employee through a form</li>
            <li>
              Show messages for recognition or probation based on working
              duration
            </li>
            <li>
              Present the employee's favorite animal as an emoji, if available
            </li>
            <li>
              Navigate between Home, Add and About page using React Router{" "}
            </li>
          </ul>
        </section>
        <section>
          <h2>Technologies Used</h2>
          <ul>
            <li>React (with Hooks)</li>
            <li>React Router</li>
            <li>Axios (API calls)</li>
            <li>JSON Server (backend for employee data, deployed on Render)</li>
            <li>Basic CSS and CSS Modules</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default About;
