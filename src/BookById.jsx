import { useLoaderData } from "react-router";
import { useContext } from "react";
import { bookContext } from "./context";
import { toast } from "react-toastify";
import { addToLocalDB, addToWishList } from "./utils/localDB";

const BookById = () => {
    const book = useLoaderData();
    const { readList, setReadList, wishList, setWishList } = useContext(bookContext);

    const handleReadList = ({ book }) => {
        const isExist = readList.find((b) => b.bookId === parseInt(book.bookId));
        if (isExist) {
            toast.warning(`You have already read ${book.bookName}!`);
        } else {
            setReadList([...readList, book]);
            addToLocalDB(book);
            toast.success(`${book.bookName} added to read list!`);
        }

    }

    const handleWishList = ({ book }) => {
        const isExist = wishList.find((b) => b.bookId === parseInt(book.bookId));
        if (isExist) {
            toast.warning(`You have already added ${book.bookName} to your wishlist!`);
        } else {
            setWishList([...wishList, book]);
            addToWishList(book);
            toast.success(`${book.bookName} added to wishlist!`);
        }

    }


    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold font-serif mb-4">Book Details</h2>
            {book ? (
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="bg-gray-100 p-8 rounded-2xl flex justify-center items-center md:w-1/3">
                        <img src={book.image} alt={book.bookName} className="w-48 h-64 object-cover rounded-lg shadow-md" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold font-serif mb-2">{book.bookName}</h1>
                        <p className="text-gray-600 text-lg mb-4">By: {book.author}</p>
                        <hr className="my-4 border-gray-200" />
                        <p className="text-gray-500 font-semibold mb-2">{book.category}</p>
                        <p className="text-gray-700 leading-relaxed mb-6"><span className="font-bold">Review:</span> {book.review}</p>
                        <div className="flex gap-2 mb-6">
                            {book.tags?.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-semibold">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <hr className="my-4 border-gray-200" />
                        <div className="space-y-2 text-sm text-gray-600">
                            <p><span className="font-semibold">Number of Pages:</span> {book.totalPages}</p>
                            <p><span className="font-semibold">Publisher:</span> {book.publisher}</p>
                            <p><span className="font-semibold">Year of Publishing:</span> {book.yearOfPublishing}</p>
                            <p><span className="font-semibold">Rating:</span> {book.rating} ⭐</p>
                        </div>

                        <div className="flex gap-2 pt-5">
                            <button className=" text-black font-semibold rounded-lg   btn btn-soft" onClick={() => handleReadList({ book })}>Mark As Read</button>
                            <button className=" text-white font-semibold rounded-lg btn btn-accent" onClick={() => handleWishList({ book })}>Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-red-500 font-bold">Book not found!</p>
            )}


        </div>
    );
}

export default BookById;