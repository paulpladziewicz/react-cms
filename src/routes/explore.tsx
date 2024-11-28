import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/explore')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div>
        <main className="page-wrapper py-5">
          <div
              className="container d-flex flex-column justify-content-center align-items-center h-100 text-center pb-2 py-sm-3 py-md-4 py-lg-5">


            <h1 className="display-2 text-primary">Explore is coming soon</h1>
            <p className="fs-xl mx-auto mb-5" style={{maxWidth: '680px'}}>We can't wait to unveil what we've been
              working
              on, and we appreciate your patience. Thanks for being a part of our journey!</p>

          </div>
        </main>
      </div>
  )
}
