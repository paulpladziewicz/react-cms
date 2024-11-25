import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import {Container} from "react-bootstrap";
import Navbar from '../components/Navbar.tsx';

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <Navbar isAuthenticated={false}/>

            <div className="container">
                <div className="row my-3 my-md-5 pb-5">
                    <div className="col-md-5 d-flex align-items-center order-md-2">
                        <img className="mb-3 mb-md-0" src="https://cdn.fremontmi.com/optimized-heart.png"
                             alt="downtown fremont"/>
                    </div>
                    <div className="col-md-7 d-flex align-items-center order-md-1">
                        <div>
                            <h1 className="display-2">Dedicated Space Just For Fremont</h1>
                            <p className="fs-lg mb-3">Helping you find what you're looking for in the local community —
                                all
                                without distractions or privacy concerns.</p>
                            <a className="btn btn-lg btn-link p-0" href="/about">
                                Why we built FremontMI.com
                                <i className="ai-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
