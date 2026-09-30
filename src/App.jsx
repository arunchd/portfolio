import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import StatsCounter from './pages/Team'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [  //child routes will render here 
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'Team',
        element: <StatsCounter />
      }
    ]
  },

]

)


const App = () => {
  return (
    <>
      <RouterProvider router={router}>  </RouterProvider>
    </>
  )

}
export default App;