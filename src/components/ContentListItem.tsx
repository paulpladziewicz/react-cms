import {Link} from "@tanstack/react-router";

import getCardTypeText from "../utils/getCardTypeText.ts";

function ContentListItem({content, showType = false}) {
    const {type, pathname, tags} = content;
    const {title, description} = content.detail;

    return (
        <article>
            {showType && <p>{getCardTypeText(type)}</p>}
            <h3>
                <Link
                    to={pathname}
                    state={{content}}
                >
                    {title}
                </Link>
            </h3>
            <p className="mb-2">{description.length > 120 ? `${description.substring(0, 180)}...` : description}</p>
            <div className="d-flex flex-wrap align-items-center mt-n2">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="badge text-nav fs-xs border mt-2 me-1"
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </article>
    );
}

export default ContentListItem;