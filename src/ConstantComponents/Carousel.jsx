import artData from "./artData";
import { useState } from 'react';

export default function Carousel() {
    {/* Set initial state to the first object's img value from ./artData  artData[0].img*/}
    const [picturenum, setPicturenum] = useState(0)
    const carouselPictures = artData.map((artwork) => {
        <div>
            <img src = {artwork.img}/>
            <h1>{artwork.title}</h1>
            <p>{artwork.caption}</p>
        </div>
    })

    function handleClick() {
        setPicturenum(picturenum => picturenum + 1)
    }

    return(
        <div>
            {carouselPictures}
            <button onClick={handleClick}>Next</button>
            <img src={artData[picturenum].img} />
        </div>
    )
}