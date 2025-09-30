import {useState} from "react";

export default function Navbar() {
    return(
        <nav>
            <ul className = "nav-ul">
                <li className = "nav-li"><a className = "nav-a" href="/Users/sylviazhang/vscode projects/Personal Website/personal-website/src/AboutMe/Page.jsx">About Me</a></li>
                <li className = "nav-li"><a className = "nav-a" href="/Users/sylviazhang/vscode projects/Personal Website/personal-website/src/MyProjects/Page.jsx">Projects</a></li>
                <li className = "nav-li"><a className = "nav-a" href="/Users/sylviazhang/vscode projects/Personal Website/personal-website/src/Hobbies/Page.jsx">Hobbies</a></li>
                <li className = "nav-li"><a className = "nav-a" href="/Users/sylviazhang/vscode projects/Personal Website/personal-website/src/ContactMe/Page.jsx">Contact Me</a></li>
            </ul>
        </nav>
    )
}