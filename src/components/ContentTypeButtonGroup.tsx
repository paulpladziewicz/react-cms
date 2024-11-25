import {Link} from "@tanstack/react-router";

function ContentTypeButtonGroup () {
    return (
        <div className="d-flex flex-wrap">
            <Link to="/events" className="btn btn-sm fs-sm btn-secondary mb-2 me-2">Articles</Link>
            <Link to="/events" className="btn btn-sm fs-sm btn-secondary mb-2 me-2">Groups</Link>
            <Link to="/events" className="btn btn-sm fs-sm btn-secondary mb-2 me-2">Events</Link>
            <Link to="/events" className="btn btn-sm fs-sm btn-secondary mb-2 me-2">Businesses</Link>
            <Link to="/events" className="btn btn-sm fs-sm btn-secondary mb-2 me-2">NeighborServices™</Link>
        </div>
    )
}

export default ContentTypeButtonGroup;