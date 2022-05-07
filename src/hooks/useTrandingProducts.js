import { useEffect, useState } from "react";

const useTrandingProducts = () => {
    const [trandingProducts, setTrandingProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/trandingProduct')
            .then(res => res.json())
            .then(data => setTrandingProducts(data))
    }, []);
    return [trandingProducts, setTrandingProducts]
}

export default useTrandingProducts;