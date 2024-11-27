import {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import ContentTypeButtonGroup from "./ContentTypeButtonGroup.tsx";
import {useMutation, useQueryClient} from "@tanstack/react-query";

function fetchCards(data) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const csrfHeader = document.querySelector('meta[name="csrf-header"]').getAttribute('content');
    return fetch('/api/vectors/search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', [csrfHeader]: csrfToken},
        body: JSON.stringify(data),
    }).then((res) => res.json());
}

function useSearchCards() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: fetchCards,
        onSuccess: (data, variables) => {
            queryClient.setQueryData(['cards', variables], data);
        },
    });

    const getCachedResults = (prompt) => queryClient.getQueryData(['cards', {prompt}]);

    return {mutation, getCachedResults};
}

function getCardTypeText(type) {
    switch (type) {
        case 'NEIGHBOR_SERVICES_PROFILE':
            return 'NeighborServices™ Profile';
        case 'BUSINESS':
            return 'Business';
        case 'EVENT':
            return 'Event';
        case 'ARTICLE':
            return 'Article';
        case 'GROUP':
            return 'Group';
        default:
            return '';
    }
}

function renderCardLink(type) {
    switch (type) {
        case 'NEIGHBOR_SERVICES_PROFILE':
            return (<>View NeighborServices™ Profile<i className="ai-arrow-right ms-2"></i></>);
        case 'BUSINESS':
            return (<>View Business<i className="ai-arrow-right ms-2"></i></>);
        case 'EVENT':
            return (<>View Event<i className="ai-arrow-right ms-2"></i></>);
        case 'ARTICLE':
            return (<>View Article<i className="ai-arrow-right ms-2"></i></>);
        case 'GROUP':
            return (<>View Group<i className="ai-arrow-right ms-2"></i></>);
        default:
            return '';
    }
}

function Search() {
    const [prompt, setPrompt] = useState('');
    const [cards, setCards] = useState(null);
    const [cachedPrompt, setCachedPrompt] = useState('');
    const [error, setError] = useState('');
    const { mutation, getCachedResults } = useSearchCards();

    useEffect(() => {
        const cachedData = getCachedResults(cachedPrompt);
        if (cachedData && cachedData.length > 0) {
            setCards((prev) => (prev.length === 0 ? cachedData : prev));
        }
    }, [cachedPrompt, getCachedResults]);

    const handleSearch = () => {
        if (!prompt.trim()) {
            setError('Please enter a prompt.');
            return;
        }

        setError(''); // Clear any previous error
        mutation.mutate(
            { prompt },
            {
                onSuccess: (data) => {
                    setCards(data);
                    setCachedPrompt(prompt);
                },
            }
        );
    };

    const handleClear = () => {
        setPrompt('');
        setError('');
        setCachedPrompt('');
        setCards(null);
    }

    const renderCards = () => {

        if (mutation.isPending) {
            return (
                <div className="mt-4 text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2 text-muted">Fetching results, please wait...</p>
                </div>
            )
        }

        if (mutation.isError) {
            return (
                <p className="text-danger">An unexpected error occurred. Please try again soon.</p>
            )
        }

        if (cards === null) {
            return null;
        }

        if (cards?.length > 0) {
            return (
                <>
                    {cards.map((card) => (
                        <div className="card mt-4" key={card.pathname}>
                            <div className="card-body">
                                <p>{getCardTypeText(card.type)}</p>
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description.length > 120 ? `${card.description.substring(0, 180)}...` : card.description}</p>
                                <a
                                    className="btn btn-link p-0"
                                    href={card.pathname}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {renderCardLink(card.type)}
                                </a>
                            </div>
                        </div>
                    ))}
                </>
            )
        } else {
            return (
                <p>
                    There is currently no relevant content available on the platform. Please try another search.
                </p>
            );
        }
    }

    return (
        <Container>
            <Row>
                <Col lg={10} xl={8} className="mx-auto">
                    <div>
                        <h1 className="mb-1">Search</h1>
                        <p>Simply enter keywords, a question, or a prompt, and we'll see what we can find for you.</p>
                    </div>

                    <div className="input-group rounded-pill mb-4">
                        <span className="input-group-text">
                            <i className="ai-search"></i>
                        </span>
                        <input
                            type="search"
                            className="form-control"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                        <div>
                            {/*<button type="button" className="btn btn-secondary input-group-text me-2 py-2 px-2 bg-transparent border-0">*/}
                            {/*    <i className="ai-microphone"></i>*/}
                            {/*</button>*/}
                            <button
                                type="button"
                                className="btn btn-primary rounded-pill"
                                onClick={handleSearch}
                                disabled={mutation.isPending}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="mt-n2 text-end">
                        <button className="btn btn-link p-0 mt-n4 me-4" onClick={handleClear}>Clear</button>
                    </div>


                    {error && <p className="text-danger mt-n3">{error}</p>} {/* Error message */}

                    {renderCards()}
                </Col>
            </Row>
        </Container>
    );
}

export default Search;