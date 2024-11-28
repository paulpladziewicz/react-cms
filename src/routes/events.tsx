import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

export const Route = createFileRoute('/events')({
  component: RouteComponent,
})

async function fetchEvents(page = 0) {
  const { data } = await axios.get(`http://localhost:8080/api/events`)
  return data
}

function RouteComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  })

  const renderEvents = () => {
    if (isLoading)
      return (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )

    if (error) return <div>Error: {error.message}</div>

    if (!data.content || data.content.length === 0) {
      return <div>There are no events available at the moment.</div>
    }

    return (
      <div className="mt-n4">
        {data.content.map((event) => {
          const nextAvailableDayEvent = event.detail.nextAvailableDayEvent
          const hasMultipleDates = event.detail.availableDayEventCount > 0

          if (!nextAvailableDayEvent) return null

          return (
            <div className="row my-5" key={event.id}>
              <div className="col-md-4">
                {event.status === 'CANCELED' && (
                  <p className="fw-semibold text-danger mb-0">Canceled</p>
                )}
                <div className="h6 mb-0">
                  {new Date(nextAvailableDayEvent.startTime).toLocaleString(
                    'en-US',
                    {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    },
                  )}
                </div>
                {hasMultipleDates && (
                  <p className="text-muted mb-0">
                    More dates and times available
                  </p>
                )}
              </div>
              <div className="mt-2 mt-md-0 col-md-8">
                <h3 style={{ lineHeight: 1 }}>
                  <Link
                      to={event.pathname}
                      state={{event}}
                  >
                    {event.detail.title}
                  </Link>
                </h3>
                <p className="my-2">
                  {event.detail.description.length > 180
                      ? `${event.detail.description.substring(0, 180)}...`
                      : event.detail.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-2">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Events
              </li>
            </ol>
          </nav>

          <h1 className="display-4 mb-0">Events</h1>
          {renderEvents()}
        </Col>
      </Row>
    </Container>
  )
}
