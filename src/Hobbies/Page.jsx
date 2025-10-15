import Carousel from "./../ConstantComponents/Carousel"
import Contacts from "./../ConstantComponents/Contacts"
export default function Hobbies() {
    return(
        <div className = "container">
            <h2>Hobbies page!</h2>
            <Carousel />
            <p>I started my <a href = "https://www.instagram.com/simy.ia/" target = "_blank">art account</a> around 2021, my first year of high school 
                when I got a wacom tablet for math class. My school gave us access 
                to adobe creative cloud products like photoshop, so I started making 
                digital art. Over the years, I watched a lot of videos on digital art 
                and taught myself the basics! These are a collection of my 
                favourite pieces overall. 
            </p>
            <Contacts />
        </div>
        
    )
}