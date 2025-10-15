import artData from "./artData";
import { useState } from 'react';

export default function Carousel() {
    {/* Set initial state to the first object's img value from ./artData  artData[0].img*/}
    const [picturenum, setPicturenum] = useState(0)

    function handleClick() {
        const wrap = Object.keys(artData).length;
        if (picturenum + 1 >= wrap) {
            setPicturenum(0)
        } else {
            setPicturenum(picturenum => picturenum + 1)
        }
    }

    return(
        <div className = "container carousel">
            <div className = "vertical-container">
                <img width = "400px" height = "auto" src={artData[picturenum].img} />
                <h2>{artData[picturenum].title}</h2>
                <p>{artData[picturenum].caption}</p>
            </div>
            <button onClick={handleClick}>Next</button>
        </div>
    )
}