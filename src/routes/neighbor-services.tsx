import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import ContentList from "../components/ContentList.tsx";

export const Route = createFileRoute('/neighbor-services')({
  component: RouteComponent,
})

function RouteComponent() {
    return <ContentList contentType="NEIGHBOR_SERVICES_PROFILE" />
}
