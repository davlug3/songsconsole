import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "/node_modules/primeflex/primeflex.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root.tsx'
import ErrorPage from './error-page.tsx'
import ThemeContextProvider from './context/ThemeContextProvider.tsx'
import { PrimeReactProvider} from 'primereact/api'
import AppSearchContextProvider from "./context/AppSearchContextProvider.tsx"
import DataContextProvider from './context/DataContextProvider.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // children: [
    //   {
    //     path: "video", 
    //     element: <div>Video Route</div>
    //   }

    // ], 
    errorElement: <ErrorPage></ErrorPage>
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <PrimeReactProvider>
      <DataContextProvider>
        <AppSearchContextProvider>
          <ThemeContextProvider>
            <RouterProvider router={router}></RouterProvider>
          </ThemeContextProvider>
        </AppSearchContextProvider>
      </DataContextProvider>
    </PrimeReactProvider>
  // </React.StrictMode>,
)
