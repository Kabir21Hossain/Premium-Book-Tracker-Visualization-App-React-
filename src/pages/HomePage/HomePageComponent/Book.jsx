import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {

    return (
        <Link to={`/books/${book.bookId}`} className="w-[370px] min-h-[450px] p-6 bg-white rounded-xl shadow-xl border border-gray-200">
            {/* Book Image */}
            <div className="w-[326px] min-h-[230px] flex justify-center items-center mb-6 bg-gray-200 rounded-xl shadow-lg">
                <div className="p-4">
                    <img
                        src={book.image}
                        alt="Book"
                        className="w-[134px] h-[166px] object-cover rounded-xl shadow-lg"
                    />
                </div>
            </div>

            {/* Book Info */}
            <div className="p-4">
                {/* Tags */}
                <div className="flex gap-3 mb-4">
                    <span className="px-4 py-2 bg-[#23BE0A10] text-green-600 rounded-full text-sm font-bold text-center">
                        {book.tags[0]}
                    </span>

                    <span className="px-4 py-2 bg-[#23BE0A10] text-green-600 rounded-full text-sm font-bold text-center">
                        {book.tags[1]}
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-serif font-bold mb-3">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="text-gray-400 text-md pb-2 border-b border-dashed border-gray-300 mb-4">
                    By : {book.author}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-md">{book.category}</span>

                    <div className="flex items-center gap-2">
                        <span className="text-md">{book.rating}</span>

                        <FaRegStar className="text-md" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;