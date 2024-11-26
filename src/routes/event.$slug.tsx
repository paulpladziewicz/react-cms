import {createFileRoute, Link, useLocation} from '@tanstack/react-router'
import {Col, Container, Row} from "react-bootstrap";
import {useLayoutEffect} from "react";

export const Route = createFileRoute('/event/$slug')({
    component: RouteComponent,
})

function RouteComponent() {
    const {state} = useLocation() // Access event data passed through state
    const event = state?.content

    useLayoutEffect(() => {
        window.scrollTo(0,0);
    }, []);

    if (!event) {
        return <div>No event data available.</div>
    }

    const {detail, status} = event
    const {title, description, locationName, address, days, formattedTimes} =
        detail

    return (
        <Container>
            <Row>
                <Col lg={10} xl={8} className="mx-auto">

                    <div className="text-end">
                        <button type="button" className="btn btn-secondary btn-icon btn-sm me-2" aria-label="Edit">
                            <i className="ai-edit-alt"></i>
                        </button>
                        <button type="button" className="btn btn-warning btn-icon btn-sm" aria-label="Report">
                            <i className="ai-flag"></i>
                        </button>
                    </div>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-2">
                            <li className="breadcrumb-item"><Link to="/events">Events</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{title}</li>
                        </ol>
                    </nav>

                    <section>
                        {status === 'CANCELED' && (
                            <p className="fw-semibold text-danger my-2">
                                This event has been canceled.
                            </p>
                        )}

                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h1 className="display-4 mb-0">{title}</h1>
                        </div>

                        <p
                            className="fs-lg mt-2 mb-4"
                            dangerouslySetInnerHTML={{__html: description}}
                        />

                        {locationName && <h3 className="h5 mb-0">{locationName}</h3>}
                        {address && <p>{address}</p>}

                        {days && formattedTimes && (
                            <div className="mt-4">
                                {days.map((_, index) => (
                                    <p key={index} className="fs-lg fw-bold mb-2">
                                        {formattedTimes[index * 2]}
                                        {formattedTimes[index * 2 + 1] !== 'No End Time' && (
                                            <>
                                                {' - '}
                                                {formattedTimes[index * 2 + 1]}
                                            </>
                                        )}
                                    </p>
                                ))}
                            </div>
                        )}
                    </section>
                </Col>
            </Row>
        </Container>
    )
}