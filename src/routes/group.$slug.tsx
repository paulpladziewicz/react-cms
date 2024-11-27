import * as React from 'react'
import {createFileRoute, Link, useLocation} from '@tanstack/react-router'
import {useLayoutEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";

export const Route = createFileRoute('/group/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
    const {state} = useLocation()
    const content = state?.content

    useLayoutEffect(() => {
        window.scrollTo(0,0);
    }, []);

    if (!content) {
        return <div>No event data available.</div>
    }

    const {detail} = content
    const {title, description} = detail

    return (
        <Container>
            <Row>
                <Col lg={10} xl={8} className="mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-2">
                            <li className="breadcrumb-item"><Link to="/groups">Groups</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{title}</li>
                        </ol>
                    </nav>

                    <section>

                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h1 className="display-4 mb-0">{title}</h1>
                        </div>

                        <p
                            className="fs-lg mt-2 mb-4"
                            dangerouslySetInnerHTML={{__html: description}}
                        />
                    </section>
                </Col>
            </Row>
        </Container>
    )
}
