import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
const { slug } = Route.useParams()
  return `Hello slug: ${slug}`
}
