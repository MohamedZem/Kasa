import { Outlet } from "react-router-dom";
import Header from "../Header/index.jsx";
import "../Header/header.scss";
import '../../components/Banner/banner.scss';
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