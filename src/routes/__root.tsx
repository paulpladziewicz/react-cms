import { Outlet, createRootRoute } from '@tanstack/react-router';
import Navbar from "../components/Navbar.tsx";
import * as React from "react";

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <div>
            <Navbar isAuthenticated={false}/>
            <Outlet />
        </div>
    )
}