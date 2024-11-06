import {RouterProvider, createRouter} from '@tanstack/react-router';
import {routeTree} from './routeTree.gen';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Plausible from "plausible-tracker";

const { enableAutoPageviews, enableAutoOutboundTracking } = Plausible()
enableAutoPageviews()
enableAutoOutboundTracking()

const router = createRouter({routeTree});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>

    );
}

export default App;
