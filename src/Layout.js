import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header style={{ background: "blue", padding: 16, fontSize: 24 }}>
                HEADER
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
