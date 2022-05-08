import { useEffect, useState } from "react";

const useTrandingDetail = trandingId => {
    const [trandingProduct, setTrandingProduct] = useState({});

    useEffect(() => {
        const url = `https://cryptic-hollows-38754.herokuapp.com/trandingProduct/${trandingId}`;


        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setTrandingProduct(data))

    }, [trandingId]);
    return [trandingProduct]
}

export default useTrandingDetail;