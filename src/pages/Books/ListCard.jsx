import { BsPeople } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineDocumentText } from "react-icons/hi";

const ListCard = ({ book }) => {
    return (
        <div className="max-w-full flex  flex-col md:flex-row gap-6  border border-gray-200 rounded-lg p-6 mb-4 shadow-lg">
            <div className="left w-[230px] h-[229px] bg-gray-200 flex justify-center items-center rounded-2xl">
                <img src={book.image} alt="book.bookName" className=" w-[100px] h-[150px] rounded-xl" />
            </div>

            <div className="right">
                <h2 className="text-lg font-serif font-bold">{book.bookName}</h2>
                <p className="font-medium text-gray-500">author : {book.author}</p>

                <div className=" flex flex-col md:flex-row gap-3 my-3 items-center">
                    <span className="font-bold text-sm">Tags</span>
                    <span className="bg-[#23BE0A33] rounded-2xl px-4 py-1 my-1 font-bold  text-sm text-green-600 shadow-md opacity-[50%] flex justify-center items-center md:max-w-[220px]">#{book.tags[0]}</span>
                    <span className="bg-[#23BE0A33] rounded-2xl px-4 py-1 my-1 font-bold  text-sm text-green-600 shadow-md opacity-[50%]  flex justify-center items-center md:max-w-[220px]">#{book.tags[1]}</span>
                    <span className="flex items-center gap-2 text-gray-500 font-semibold"><CiLocationOn /> year of publishing:{book.yearOfPublishing}</span>


                </div>

                <div className=" flex flex-col md:flex-row gap-4 text-gray-500 font-medium my-4">
                    <p className="flex items-center gap-2"><span ><BsPeople /></span> Publisher:{book.publisher}</p>
                    <p className="flex items-center gap-2"><span ><HiOutlineDocumentText /></span> Pages: {book.totalPages}</p>
                </div>

                <hr className="md:min-w-3xl border-solid border-1 border-gray-500 mb-4" />
                <div className=" flex flex-col md:flex-row gap-3 mt-4">
                    <button className="btn btn-info btn-soft">Category:{book.category}</button>
                    <button className="btn btn-warning btn-soft">Rating:{book.rating}</button>
                    <button className="btn btn-success btn-soft">View Details</button>
                </div>

            </div>
        </div>
    )
}

export default ListCard;