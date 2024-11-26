import {Link} from "@tanstack/react-router";

function ContentTypeButtonGroup () {
    return (
        <div className="d-flex flex-wrap">
            <a href="/articles" className="btn btn-sm fs-sm btn-secondary mb-2 me-2">Articles</a>
            <Link to="/groups" className="btn btn-sm fs-sm btn-secondary mb-2 me-2">Groups</Link>
            <Link to="/events" className="btn btn-sm fs-sm btn-secondary mb-2 me-2">Events</Link>
            <Link to="/businesses" className="btn btn-sm fs-sm btn-secondary mb-2 me-2">Businesses</Link>
            <Link to="/neighbor-services" className="btn btn-sm fs-sm btn-secondary mb-2 me-2">NeighborServices™</Link>
        </div>
    )
}

export default ContentTypeButtonGroup;