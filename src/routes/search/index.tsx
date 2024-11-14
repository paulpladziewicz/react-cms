import {createFileRoute} from '@tanstack/react-router';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {Container} from "react-bootstrap";
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

    const getCachedResults = (prompt) =>
        queryClient.getQueryData(['cards', {prompt}]);

    return {mutation, getCachedResults};
}

function RouteComponent() {
    const [prompt, setPrompt] = useState('');
    const [cards, setCards] = useState([]);
    const [cachedPrompt, setCachedPrompt] = useState('');
    const {mutation, getCachedResults} = useSearchCards();

    useEffect(() => {
        const cachedData = getCachedResults(cachedPrompt);
        if (cachedData && cachedData.length > 0) {
            setCards((prev) => (prev.length === 0 ? cachedData : prev));
        }
    }, [cachedPrompt, getCachedResults]);

    const handleSearch = () => {
        mutation.mutate(
            {prompt},
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
            <div className="input-group rounded-pill">
                <span className="input-group-text">
                    <i className="ai-search"></i>
                </span>
                <input
                    type="search"
                    className="form-control"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Search what you need or want to find"
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

            {cards.length > 0 && (
                <div className="mt-4">
                    {cards.map((card) => (
                        <a
                            key={card.pathname}
                            className="card mb-3"
                            href={card.pathname}
                            style={{cursor: 'pointer'}}
                        >
                            <div className="card-body">
                                <p>{card.type}</p>
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </Container>
    );
}
