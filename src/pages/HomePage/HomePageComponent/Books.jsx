import UseEffectHook from "../../../UseEffectHook";
import Book from "./Book";
import { RingLoader } from "react-spinners";
const Books = () => {
    const { loading, allBooks } = UseEffectHook();

    return (
        <>
            {loading ? <div className="flex justify-center items-center my-10 h-[60vh] font-bold"><RingLoader color="#3b82f6" size={50} /></div> : (
                <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                    {allBooks?.map((book) =>
                        <Book key={book.bookId} book={book} />)}
                </div>
            )}
        </>
    )
}


export default Books