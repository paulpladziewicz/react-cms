import {createFileRoute, useNavigate} from '@tanstack/react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";

export const Route = createFileRoute('/search/')({
    component: RouteComponent,
})

function fetchCards(data) {
    return fetch('/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then((res) => res.json());
}

export function useSearchCards() {
    const queryClient = useQueryClient();

    const mutation = useMutation(fetchCards, {
        onSuccess: (data, variables) => {
            queryClient.setQueryData(['cards', variables], data);
        },
    });

    const getCachedResults = (prompt) =>
        queryClient.getQueryData(['cards', { prompt }]);

    return { mutation, getCachedResults };
}

function RouteComponent() {
    const [prompt, setPrompt] = useState('');
    const [cachedPrompt, setCachedPrompt] = useState('');
    const { mutation, getCachedResults } = useSearchCards();
    const navigate = useNavigate();

    useEffect(() => {
        const cachedData = getCachedResults(cachedPrompt);
        if (cachedData) {
            // Set cached results logic here if needed
        }
    }, [cachedPrompt, getCachedResults]);

    return (
        <Container>
            <div className="input-group rounded-pill">
                  <span className="input-group-text">
                    <i className="ai-search"></i>
                  </span>
                <input type="search" className="form-control" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Search what you need or want to find" />
                <button type="button" className="btn btn-primary rounded-pill">Search</button>
            </div>


        </Container>
)
}
