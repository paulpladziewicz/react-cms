import {Link} from "@tanstack/react-router";

function ContentListItem({content}) {
    const {type, pathname, tags} = content;
    const {title, headline, description} = content.detail;

    switch (type) {
        case "GROUP": {
            return (
                <article className="row g-0 border-0">
                    <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
                        <h3>
                            <Link
                                to={pathname}
                                state={{ content }}
                            >
                                {title}
                            </Link>
                        </h3>
                        <p className="mb-2">{description}</p>
                        <div className="d-flex flex-wrap align-items-center mt-n2">
                            <a href="#" className="badge text-nav fs-xs border mt-2">{tags}</a>
                        </div>
                    </div>
                </article>
            );
        }
        case "BUSINESS": {
            return (
                <article className="row g-0 border-0">
                    <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
                        <h3>
                            <Link
                                to={pathname}
                                state={{content}}
                            >
                                {title}
                            </Link>
                        </h3>
                        <p className="mb-2">{headline}</p>
                        <p className="mb-2">{description}</p>
                        <div className="d-flex flex-wrap align-items-center mt-n2">
                            <a href="#" className="badge text-nav fs-xs border mt-2">{tags}</a>
                        </div>
                    </div>
                </article>
            );
        }
        default: {
            return (
                <article className="row g-0 border-0">
                    <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
                        <h3>
                            <Link
                                to={pathname}
                                state={{content}}
                            >
                                {title}
                            </Link>
                        </h3>
                        <p className="mb-2">{description}</p>
                        <div className="d-flex flex-wrap align-items-center mt-n2">
                            <a href="#" className="badge text-nav fs-xs border mt-2">{tags}</a>
                        </div>
                    </div>
                </article>
            );
        }
    }
}

export default ContentListItem;