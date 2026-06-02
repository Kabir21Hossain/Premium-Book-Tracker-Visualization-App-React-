const getFromLocalDB = () => {
    const data = localStorage.getItem("readlist");
    return data ? JSON.parse(data) : [];
}

const addToLocalDB = (book) => {
    const allBooks = getFromLocalDB();
    const isExist = allBooks.find((bk) => bk.bookId === book.bookId);
    if (isExist) {
        return;
    }
    allBooks.push(book);
    localStorage.setItem("readlist", JSON.stringify(allBooks));
}

const getFromWishList = () => {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
}

const addToWishList = (book) => {
    const allBooks = getFromWishList();
    const isExist = allBooks.find((bk) => bk.bookId === book.bookId);
    if (isExist) {
        return;
    }
    allBooks.push(book);
    localStorage.setItem("wishlist", JSON.stringify(allBooks));
}


export { getFromLocalDB, addToLocalDB, getFromWishList, addToWishList };