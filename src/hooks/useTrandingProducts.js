import { useEffect, useState } from "react";

const useTrandingProducts = () => {
    const [trandingProducts, setTrandingProducts] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-hollows-38754.herokuapp.com/trandingProduct')
            .then(res => res.json())
            .then(data => setTrandingProducts(data))
    }, []);
    return [trandingProducts, setTrandingProducts]
}

export default useTrandingProducts;