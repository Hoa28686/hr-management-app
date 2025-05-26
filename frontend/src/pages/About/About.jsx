import styles from "./About.module.css";
import { FiLink } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
const About = () => {
  return (
    <>
      <h1>HR Application</h1>
      <div className="container">
        <p>
          This is a simple HR application that allows users to manage, add, and
          edit employees. It is a school project demonstrate what I have learned
          in React, through components, routing, state management and APIs. The
          app is deployed using Render for the backend and Vercel for the
          frontend.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FiLink /> Links and Live Page
          </h2>
          <ul>
            <li>
              <a
                className={styles.pageLink}
                href="https://react-hr-app-hazel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend
              </a>
            </li>
            <li>
              <a
                className={styles.pageLink}
                href="https://react-hr-app.onrender.com/employees"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend (JSON Server API)
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📝 Key Features</h2>
          <ul className={styles.sectionList}>
            <li>Fetch data from API and display a list of employees</li>
            <li>Edit employee salary, location, department and skills</li>
            <li>Add new employee through a form</li>
            <li>
              Show messages for recognition or probation based on working
              duration
            </li>
            <li>
              Display the employee's favorite animal as an emoji, if available
              🐬🐣🐾
            </li>
            <li>
              Navigate between Home, Add and About pages using React Router
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🛠️ Technologies Used </h2>
          <ul className={styles.sectionList}>
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
