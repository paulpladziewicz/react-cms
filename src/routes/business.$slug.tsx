import {createFileRoute, Link, useLocation} from '@tanstack/react-router'
import {useLayoutEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";

export const Route = createFileRoute('/business/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
    const { state } = useLocation();
    const content = state?.content;

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!content) {
        return <div>No business data available.</div>;
    }

    const { detail, pathname, isAdmin } = content;
    const { title, description, address, phoneNumber, displayEmail, email, website, businessHours, headline } = detail;

    return (
        <Container>
            <Row>
                <Col lg={10} xl={8} className="mx-auto">
                    {isAdmin && (
                        <div className="text-end mb-2">
                            <Link
                                to={`/edit${pathname}`}
                                className="btn btn-secondary btn-icon"
                                aria-label="Edit"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                            >
                                <i className="ai-edit-alt"></i>
                            </Link>
                        </div>
                    )}

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-2">
                            <li className="breadcrumb-item">
                                <Link to="/businesses">Businesses</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {title}
                            </li>
                        </ol>
                    </nav>

                    <h1 className="display-3 mb-3">{title}</h1>

                    <div className="d-md-flex">
                        <ul className="list-unstyled me-5">
                            {address && (
                                <li className="nav flex-nowrap mb-3">
                                    <i className="ai-map-pin lead text-primary me-2"></i>
                                    <span className="nav-link fw-normal p-0 mt-n1">{address}</span>
                                </li>
                            )}
                            {phoneNumber && (
                                <li className="nav flex-nowrap mb-3">
                                    <i className="ai-phone lead text-primary me-2"></i>
                                    <a
                                        className="nav-link fw-normal p-0 mt-n1"
                                        href={`tel:${phoneNumber}`}
                                    >
                                        {phoneNumber}
                                    </a>
                                </li>
                            )}
                            {displayEmail && email && (
                                <li className="nav flex-nowrap mb-3">
                                    <i className="ai-mail lead text-primary me-2"></i>
                                    <a
                                        className="nav-link fw-normal p-0 mt-n1"
                                        href={`mailto:${email}`}
                                    >
                                        {email}
                                    </a>
                                </li>
                            )}
                            {website && (
                                <li className="nav flex-nowrap mb-3">
                                    <i className="ai-globe lead text-primary me-2"></i>
                                    <a
                                        className="nav-link fw-normal p-0 mt-n1"
                                        href={
                                            website.startsWith("http")
                                                ? website
                                                : `https://${website}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {website}
                                    </a>
                                </li>
                            )}
                        </ul>

                        {businessHours && (
                            <div>
                                <ul className="list-unstyled">
                                    {Object.entries(businessHours).map(([day, hours], index) => (
                                        <li key={index} className="fw-medium mb-1">
                                            {day}: {hours}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="fs-sm text-uppercase mb-3">What we do</div>
                    <h2 className="display-6">{headline}</h2>
                    <p
                        className="fs-xl"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </Col>
            </Row>
        </Container>
    );
}