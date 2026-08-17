// Imports the function needed to create the router
import { createBrowserRouter } from "react-router-dom";

// Imports the parent App
import App from "../App.jsx";

// Imports the route pages
import Home from '../routes/Home.jsx'
import Contact from "../routes/Contact.jsx";
import EditContact from "../routes/EditContact.jsx";

// Sets up the routes. All of the child routes inside of the parent App, under the "children" key
const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact/:id',
                element: <Contact />
            },
            {
                path: '/contact/:id/edit',
                element: <EditContact />
            }
        ]
    }
]

// Creates the router using the routes
const router = createBrowserRouter(
    routes
);

// Exports for use in project
export default router;