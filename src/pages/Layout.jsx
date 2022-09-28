import { AppBar } from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
    return <>
        <AppBar/>
        <Suspense>
            <Outlet/>
        </Suspense>
    </>
}

export default Layout;