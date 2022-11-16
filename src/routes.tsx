import UserPage from "./components/pages/user/UserPage";
import NotFound from "./components/UI/NotFound";
import TodoPage from "./components/pages/todo/TodoPage";


const routes = [
    {
        path: '/',
        element: <UserPage />,
    },
    {
        path: '/:id/todo',
        element: <TodoPage />
    },
    {
        path: '*',
        element: <NotFound/>
    },
]

export default routes