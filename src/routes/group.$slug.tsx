import * as React from 'react'
import {createFileRoute, Link, useLocation} from '@tanstack/react-router'
import {useLayoutEffect} from "react";
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const Route = createFileRoute('/group/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
    const {state} = useLocation()
    const content = state?.content
    const userId = window.pageConfig?.userId


    useLayoutEffect(() => {
        window.scrollTo(0,0);
    }, []);

    if (!content) {
        return <div>No event data available.</div>
    }

    const { detail, administrators } = content
    const {title, description, announcements, group, adminCount, memberCount } = detail
    const isAdmin = administrators.includes(userId);

    const renderAnnouncements = () => {
        return (
            <section className="mb-4">
                <h2 className="h1 m-0">Announcements</h2>
                {isAdmin && <Button className="btn btn-link p-0">Add Announcement</Button>}
                <ul className="list-unstyled">
                    <li>
                        <p className="my-3">There are no announcements at this time.</p>
                    </li>
                    <li className="my-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h5 className="mb-1">Announcement Title</h5>
                                <p className="mb-1">Announcement Content</p>
                                <small className="text-muted">Time Ago</small>
                            </div>
                            {isAdmin && (
                                <Button className="btn btn-danger btn-sm ms-4">
                                    <i className="ai-trash"></i>
                                </Button>
                            )}
                        </div>
                    </li>
                </ul>
            </section>
        );
    }

    return (
        <Container>
            <Row>
                <Col md={10} lg={8} className="mx-auto">
                    <nav aria-label="breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/groups">Groups</Breadcrumb.Item>
                            <Breadcrumb.Item active aria-current="page">
                                {title}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </nav>
                    <section>
                        <h1 className="display-4 mb-0">{title}</h1>

                        <Button className="btn btn-link p-0" disabled>
                            Join Group
                        </Button>
                        <p className="fs-lg my-3">{description}</p>
                    </section>

                    {renderAnnouncements()}
                </Col>
            </Row>
        </Container>
    )
}
