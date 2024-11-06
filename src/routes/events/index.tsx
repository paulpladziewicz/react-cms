import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {createFileRoute, Link} from '@tanstack/react-router'
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export const Route = createFileRoute('/events/')({
    component: RouteComponent,
})

async function fetchEvents(page = 0) {
    const { data } = await axios.get(`/api/events`);
    return data;
}

function RouteComponent() {
    const { data, isLoading, error } = useQuery({ queryKey: ['events'], queryFn: fetchEvents })

    const renderEvents = () => {
        if (isLoading) return (
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );

        if (error) return <div>Error: {error.message}</div>;

        if (!data.content || data.content.length === 0) {
            return <div>There are no events available at the moment.</div>
        }

        return (
            <div>
                {data.content.map((event) => {
                    const nextAvailableDayEvent = event.detail.nextAvailableDayEvent;
                    const hasMultipleDates = event.detail.availableDayEventCount > 0;

                    if (!nextAvailableDayEvent) return null;

                    return (
                        <div className="row my-5" key={event.id}>
                            <div className="col-md-4">
                                {event.status === 'CANCELED' && (
                                    <p className="fw-semibold text-danger mb-0">Canceled</p>
                                )}
                                <div className="h6 mb-0">
                                    {new Date(nextAvailableDayEvent.startTime).toLocaleString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true,
                                    })}
                                </div>
                                {hasMultipleDates && (
                                    <p className="text-muted mb-0">More dates and times available</p>
                                )}
                            </div>
                            <div className="mt-2 mt-md-0 col-md-8">
                                <h3 className="h4 mb-0" style={{ lineHeight: 1 }}>
                                    {event.detail.title}
                                </h3>
                                <p className="my-2">
                                    {event.detail.description.length > 180
                                        ? `${event.detail.description.substring(0, 180)}...`
                                        : event.detail.description}
                                </p>
                                <Link
                                    className="btn btn-lg btn-link p-0"
                                    to={event.pathname}
                                    state={{ event }}
                                >
                                    View Event
                                    <i className="ai-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }


    return (
        <Container>
            <Row>
                <Col lg={10} className="mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Events</li>
                        </ol>
                    </nav>

                    <div className="d-sm-flex justify-content-between align-items-center">
                        <h1 className="display-3 mb-0">Events</h1>
                        <div className="d-flex justify-content-between align-items-center d-lg-block">
                            <a href="/my/events"
                               className="btn btn-sm btn-link fw-semibold fs-lg text-primary ps-0 ps-lg-2 py-2 px-3">My
                                Events</a>
                            <a href="/create/event" className="btn btn-sm fs-sm btn-primary py-2 px-3">Create</a>
                        </div>
                    </div>

                    {renderEvents()}

                </Col>
            </Row>


        </Container>
    );
}
