import { Outlet } from "react-router-dom";
import Header from "../Header/index.jsx";
import Footer from "../Footer/Footer.jsx";

function Layout() {
  return (
    <div className="layout">
      <Header />

      <main className="layout__content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;