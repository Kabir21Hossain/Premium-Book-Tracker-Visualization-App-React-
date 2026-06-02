import MainLayOut from "../MainLayOut/MainLayOut";
import HomePage from "../pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router";
import Books from "../pages/Books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookById from "../BookById";
import Dashboard from "../pages/PagesRead/Dashboard";

const loaderFun = async ({ params }) => {
    const res = await fetch('booksData.json');
    const data = await res.json();
    const book = data.find(book => book.bookId === parseInt(params.id));
    return book;
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/books/:id",
                loader: loaderFun,
                element: <BookById />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            }

        ],
        errorElement: <ErrorPage />
    },
]);
