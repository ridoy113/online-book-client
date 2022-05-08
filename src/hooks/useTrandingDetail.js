import { useEffect, useState } from "react";

const useTrandingDetail = trandingId => {
    const [trandingProduct, setTrandingProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/trandingProduct/${trandingId}`;

        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setTrandingProduct(data))

    }, [trandingId]);
    return [trandingProduct]
}

export default useTrandingDetail;