import {useState} from "react";
import Navbar from "./../ConstantComponents/Navbar";
import selfie from "/Users/sylviazhang/vscode projects/Personal Website/personal-website/src/IMG_1313.jpeg";
import bioData from "./bioData"

function Heading() {
    const [showBio, setShowBio] = useState(false)

    function handleShowBio() {
        setShowBio(showBio => !showBio)
    }

    function determineText() {
        if (showBio) {
            return "Click me to hide my bio!"
        } else {
            return "Click me to show my bio!"
        }
    }

    return (
        <div className = "heading-container">
            <div className = "vertical-container">
                <img src = {selfie} className="headshot" width={250} height="auto" alt = "Sylvia" onClick={handleShowBio}/>
                <p>{determineText()}</p>
            </div>
            <div className = "vertical-container">
                <h1 className="big-text">Sylvia Zhang</h1>
                {showBio ? <Bio /> : null}
            </div>
        </div>
    )
}

function MainContent() {
    return (
        <div>
            <p>
                Hi! I’m Sylvia. It’s nice to meet you! I’m a first year at Cornell interested in software engineering, artificial intelligence, and endangered languages. Some of my hobbies include Model UN, digital art, and watching horror game let’s plays! Something I’d love to learn how to do is to bake!
            </p>
        </div>
    )
}

function Bio() {
    const bioComponents = bioData.map((bio) => {
        return (
            <div>
                <BioElement img = {bio.img} title = {bio.title} text = {bio.text}/> 
            </div>
            
        )
    })
    return (
        <div>
            {bioComponents}
        </div>
    )
}

function BioElement(props) {
    return (
        <div className = "vertical-container round-border">
            <img src = {props.img} width = {50} height = "auto"/>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default function AboutMe() {
    

    return (
        <div>
            <Navbar />
            <Heading />
            <MainContent />
        </div>
    )
}