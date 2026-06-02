import { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const res = await fetch('booksData.json');
                const data = await res.json();
                setAllBooks(data);
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        }
        setTimeout(dataFetch, 1000);
    }, [])

    return { loading, allBooks };

}
export default UseEffectHook;
