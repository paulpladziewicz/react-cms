import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import ContentListItem from "./ContentListItem.tsx";

async function fetchEvents(contentType: string, page = 0) {
    const { data } = await axios.get(`/api/content?contentType=${contentType}&page=${page}`)

    return data;
}

interface Props {
    contentType: string;
}

function getTitle(contentType: string) {
    switch (contentType) {
        case 'NEIGHBOR_SERVICES_PROFILE':
            return 'NeighborServices™';
        case 'BUSINESS':
            return 'Businesses';
        case 'EVENT':
            return 'Events';
        case 'GROUP':
            return 'Groups';
        default:
            return '';
    }
}

function ContentList({ contentType }) {
    const { data, isLoading, error } = useQuery({
        queryKey: [contentType],
        queryFn: () => fetchEvents(contentType),
    })

    const renderContentListItems = () => {
        if (isLoading)
            return (
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )

        if (error) return <div>Error: {error.message}</div>

        if (!data.content || data.content.length === 0) {
            return <div>There are no list items available at the moment.</div>
        }

        return (
            <div className="mt-n4">
                {data.content.map((content) => {
                    return (
                        <div className="row my-5" key={content.pathname}>
                            <ContentListItem content={content} />
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <Container>
            <Row>
                <Col lg={10} xl={8} className="mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-2">
                            <li className="breadcrumb-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {getTitle(contentType)}
                            </li>
                        </ol>
                    </nav>

                    <h1 className="display-4 mb-0">{getTitle(contentType)}</h1>
                    {renderContentListItems()}

                </Col>
            </Row>
        </Container>
    )
}

export default ContentList;