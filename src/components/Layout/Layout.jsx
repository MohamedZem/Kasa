import { Outlet } from "react-router-dom";
import Header from "../Header/index.jsx";
import Footer from "../Footer/Footer.jsx";

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;