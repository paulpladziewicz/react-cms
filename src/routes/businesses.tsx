import { createFileRoute } from '@tanstack/react-router'
import ContentList from "../components/ContentList.tsx";

export const Route = createFileRoute('/businesses')({
  component: RouteComponent,
})

function RouteComponent() {
    return <ContentList contentType="BUSINESS" />
}
