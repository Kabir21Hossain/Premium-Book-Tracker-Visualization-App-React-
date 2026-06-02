import { useContext } from "react";
import { bookContext } from "../../context";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router";
import ListCard from "./ListCard";
import { useState } from "react";

const Books = () => {
    const { readList, wishList } = useContext(bookContext);
    const [sortingType, setSortingType] = useState("");

    const handleSort = (type) => {
        setSortingType(type);
    };

    // Get capitalized sort label for premium display
    const getSortLabel = () => {
        if (sortingType === "rating") return "Rating";
        if (sortingType === "page") return "Pages";
        if (sortingType === "year") return "Year";
        return "";
    };

    // Derive sorted lists without mutating original arrays
    const sortedReadList = [...readList].sort((a, b) => {
        if (sortingType === "rating") return b.rating - a.rating; // Descending (highest rating first)
        if (sortingType === "page") return b.totalPages - a.totalPages; // Descending (most pages first)
        if (sortingType === "year") return b.yearOfPublishing - a.yearOfPublishing; // Descending (newest first)
        return 0;
    });

    const sortedWishList = [...wishList].sort((a, b) => {
        if (sortingType === "rating") return b.rating - a.rating;
        if (sortingType === "page") return b.totalPages - a.totalPages;
        if (sortingType === "year") return b.yearOfPublishing - a.yearOfPublishing;
        return 0;
    });

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <h2 className="bg-gray-200 text-center py-5 my-5 rounded-lg shadow-lg font-bold text-3xl">Books</h2>

            <div className="flex justify-center">
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white ">Sort By {sortingType ? getSortLabel() : ""} </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("rating")}>Rating</a></li>
                        <li><a onClick={() => handleSort("page")}>Pages</a></li>
                        <li><a onClick={() => handleSort("year")}>Year</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-8">
                <Tabs>
                    <TabList>
                        <Tab >Read Books</Tab>
                        <Tab >Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {sortedReadList.length > 0 ? (
                            sortedReadList.map(book => (
                                <div key={book.bookId}>
                                    <ListCard book={book} />
                                </div>
                            ))
                        ) : (
                            <p className="text-center py-5 text-xl font-medium">No books found in read list!</p>
                        )}
                    </TabPanel>

                    <TabPanel>
                        {sortedWishList.length > 0 ? (
                            sortedWishList.map(book => (
                                <div key={book.bookId}>
                                    <ListCard book={book} />
                                </div>
                            ))
                        ) : (
                            <p className="text-center py-5 text-xl font-medium">No books found in wishlist!</p>
                        )}
                    </TabPanel>
                </Tabs>
            </div>
        </div>


    )
}
export default Books;