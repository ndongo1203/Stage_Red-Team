import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Connexion from './Connexion'
import Inscription from './Inscription'
import Dashboard from './Dashboard'
import DashboardPage from './contenuDashboard/DashboardPage'
import ListeHotelsPage from './contenuHotel/ListeHotelsPage'

export default function RouteID() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Connexion />
        },
        {
            path: '/inscription',
            element: <Inscription />
        },
        {
            path: '/Dashboard',
            element: <Dashboard />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />
                },
                {
                    path: 'hotels',
                    element: <ListeHotelsPage />
                }
            ]
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}
