import React from "react";

const BigImage = (props) => {
    console.log(props);

    return (
        <div id="bigImage">
            <img src={props.bgImg} alt={props.altText} />
            <div class="label">
                <p>{props.altText}</p>
            </div>
        </div>
    );
}

export default BigImage;