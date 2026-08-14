import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";

import Home from '../routes/Home.jsx'
import Contact from "../routes/Contact.jsx";
import EditContact from "../routes/EditContact.jsx";

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

const router = createBrowserRouter(
    routes
);

export default router;