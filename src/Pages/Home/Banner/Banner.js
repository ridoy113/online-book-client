import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../img/banner (2).jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='align-item-center'>
                        <h2>Online Book Warehouse</h2>
                        <p>This new English For Today Textbook has been developed.Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;