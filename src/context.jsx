import { createContext, useEffect, useState } from "react";
import { getFromLocalDB, getFromWishList } from "./utils/localDB";

export const bookContext = createContext();



const BookProvider = ({ children }) => {
    const [readList, setReadList] = useState(() => getFromLocalDB());
    const [wishList, setWishList] = useState(() => getFromWishList());

    useEffect(() => {
        const allBooks = getFromLocalDB();
        setReadList(allBooks);
        const wishListBooks = getFromWishList();
        setWishList(wishListBooks);

    }, [])
    return <bookContext.Provider value={{ readList, setReadList, wishList, setWishList }}>
        {children}
    </bookContext.Provider>

}

export default BookProvider;