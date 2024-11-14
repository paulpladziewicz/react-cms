import {createFileRoute} from '@tanstack/react-router';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {Container, Row, Col} from "react-bootstrap";
import {useEffect, useState} from "react";

export const Route = createFileRoute('/search/')({
    component: RouteComponent,
})

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

function RouteComponent() {
    const [prompt, setPrompt] = useState('');
    const [cards, setCards] = useState([]);
    const [cachedPrompt, setCachedPrompt] = useState('');
    const [error, setError] = useState(''); // State to track error messages
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
                    setPrompt('');
                },
            }
        );
    };

    return (
        <Container>
            <Row>
                <Col lg={10} xl={8} className="mx-auto">
                    <div>
                        <h1>AI-Enhanced Search</h1>
                        <p>Simply type any question or prompt—whether it’s a specific need, a task, or a curiosity—and we'll see what we can find for you.</p>
                    </div>

                    <div className="input-group rounded-pill">
                        <span className="input-group-text">
                            <i className="ai-search"></i>
                        </span>
                        <input
                            type="search"
                            className="form-control"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Search what you need or want to find nearby"
                        />
                        <button
                            type="button"
                            className="btn btn-primary rounded-pill"
                            onClick={handleSearch}
                            disabled={mutation.isLoading}
                        >
                            Search
                        </button>
                    </div>

                    {error && <p className="text-danger mt-2">{error}</p>} {/* Error message */}

                    {cards.length > 0 ? (
                        <div className="mt-4">
                            {cards.map((card) => (
                                <a
                                    key={card.pathname}
                                    className="card mb-3"
                                    href={card.pathname}
                                    target="_blank"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="card-body">
                                        <p>{card.type}</p>
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text">{card.description}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    ) : (
                        !error && (
                            <div className="mt-4">
                                <p className="text-muted">
                                    No relevant results found for your search. Try refining your prompt or ask a different question.
                                </p>
                            </div>
                        )
                    )}
                </Col>
            </Row>
        </Container>
    );
}