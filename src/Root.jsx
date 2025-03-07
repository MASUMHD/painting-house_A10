import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

const Root = () => {
    return (
        <div>
            <div className="container mx-auto md:px-24 ">
                <NavBar />
                <Outlet />
                <Footer />
            </div>
            
            
        </div>
    );
};

export default Root;