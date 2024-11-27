import {createFileRoute, Link, useLocation} from '@tanstack/react-router'
import {useLayoutEffect} from "react";

export const Route = createFileRoute('/neighbor-services-profile/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
    const { state } = useLocation();
    const content = state?.content;

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!content) {
        return <div>No profile data available.</div>;
    }

    const { detail, tags } = content;
    const { title, description, profileImageUrl, neighborServices } = detail;

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-2">
                                <li className="breadcrumb-item">
                                    <Link to="/neighbor-services">NeighborServices™</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>

                        {!profileImageUrl ? null : (
                            <div
                                className="d-flex flex-column justify-content-end position-relative overflow-hidden rounded-circle bg-size-cover bg-position-center flex-shrink-0"
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    backgroundImage: `url(${profileImageUrl})`,
                                }}
                            ></div>
                        )}

                        <h1 className="display-4 mb-3 text-center">{title}</h1>
                        <p
                            className="fs-xl mb-3"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />

                        {tags?.length > 0 && (
                            <div className="d-flex flex-wrap">
                                {tags.map((tag, index) => (
                                    <span key={index} className="badge bg-secondary m-1">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="mt-4 mb-5">
                            {neighborServices?.length > 0 ? (
                                <ul className="list-unstyled">
                                    {neighborServices.map((service, index) => (
                                        <li key={index}>
                                            <div className="d-flex align-items-center">
                                                <h3 className="h3 w-75 pe-2 mb-2">{service.name}</h3>
                                                <p className="h5 w-25 ps-2 text-center mb-2">{service.price}</p>
                                            </div>
                                            <p className="fs-xl">{service.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted mb-3">No services available at this time.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
