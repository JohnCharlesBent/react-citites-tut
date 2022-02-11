import React, { useState } from "react";
import BigImage from "../BigImage";

const Thumbnails = ({ images }) => {
    const [bigImg, setBigImg] = useState(images[0].img);
    const [imgAlt, setImageAlt] = useState(images[0].city);

    const thumbnails = document.querySelectorAll('.thumb');

    const changeImage = (e) => {
        e.persist();
        setBigImg(e.target.src);
        setImageAlt(e.target.alt);

        for (let thumb of thumbnails) {
            thumb.classList.remove("active");
        }

        e.target.classList.add("active");
    }

    const thumbs = images.map((image, index) => {
        let classes;
        index === 0 ? (classes = "thumb active") : (classes = "thumb");

        return (
            <img 
              className={classes}
              src={image.img}
              alt={image.city}
              onClick={changeImage}
              key={index}
            />
        );
    });

    return (
        <>
            <div id="thumbs">{thumbs}</div>
            <BigImage bgImg={bigImg} altText={imgAlt} />
        </>
    );
}

export default Thumbnails;