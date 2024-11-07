import {createFileRoute, Link, useLocation} from '@tanstack/react-router'
import {Col, Container, Row} from "react-bootstrap";
import {useLayoutEffect} from "react";

export const Route = createFileRoute('/event/$slug')({
    component: RouteComponent,
})

function RouteComponent() {
    const {state} = useLocation() // Access event data passed through state
    const event = state?.event

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
                <Col md={8} lg={10} className="mx-auto">
                    <div className="sticky-top bg-white mb-2">
                        <button
                            className="btn btn-link p-0"
                            onClick={() => window.history.back()}
                        >
                            <i className="ai-arrow-left me-1"></i>Back
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
                            className="fs-xl mt-2 mb-4"
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