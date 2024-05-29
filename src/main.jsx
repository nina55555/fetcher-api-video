import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage.jsx';
import Accueil from './pages/accueil/Accueil.jsx';
import Inscription from './pages/inscription/Inscription.jsx';
import Connexion from './pages/connexion/Connexion.jsx';
import Collection from './pages/collection/Collection.jsx';
import axios from 'axios';
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
  useQuery
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/accueil",
    element: <Accueil/>,
  },
  {
    path: "/inscription",
    element: <Inscription/>,
  },
  {
    path: "/connexion",
    element: <Connexion/>,
  },
  {
    path: "/collection",
    element: <Collection/>,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <QueryClientProvider client={queryClient}>
      
    </QueryClientProvider>
    </RouterProvider>
  </React.StrictMode>
)
