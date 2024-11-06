import { createFileRoute, useLocation } from '@tanstack/react-router'

export const Route = createFileRoute('/event/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const { state } = useLocation() // Access event data passed through state
  const event = state?.event

  if (!event) {
    return <div>No event data available.</div>
  }

  const { detail, status } = event
  const { title, description, locationName, address, days, formattedTimes } =
    detail

  return (
    <div className="col-md-10 col-lg-8 mx-auto">
      <section>
        {status === 'CANCELED' && (
          <p className="fw-semibold text-danger my-2">
            This event has been canceled.
          </p>
        )}

        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="display-4 mb-0">{title}</h1>
        </div>

        <p
          className="fs-xl mt-2 mb-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {locationName && <h3 className="h5 mb-0">{locationName}</h3>}
        {address && <p>{address}</p>}

        {days && formattedTimes && (
          <div className="mt-4">
            {days.map((_, index) => (
              <p key={index} className="fs-lg fw-bold mb-2">
                {formattedTimes[index * 2]}
                {formattedTimes[index * 2 + 1] !== 'No End Time' && (
                  <>
                    {' - '}
                    {formattedTimes[index * 2 + 1]}
                  </>
                )}
              </p>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
