import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
