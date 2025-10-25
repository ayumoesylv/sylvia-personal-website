import {useState} from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {
    return(
        <nav className = "navbar">
            <Link className = "nav-link" to = "/contact">Contact Me</Link>
            <Link className = "nav-link" to = "/hobbies">Hobbies</Link>   
            <Link className = "nav-link" to = "/projects">My Projects</Link>         
            <Link className = "nav-link" to = "/">About Me</Link>
            
            {/* <ul className = "nav-ul">
                <li className = "nav-li"><a className = "nav-a" href="/Users/sylviazhang/vscode projects/Personal Website/personal-website/src/AboutMe/Page.jsx">About Me</a></li>
                <li className = "nav-li"><a className = "nav-a" href="/Users/sylviazhang/vscode projects/Personal Website/personal-website/src/MyProjects/Page.jsx">Projects</a></li>
                <li className = "nav-li"><a className = "nav-a" href="/Users/sylviazhang/vscode projects/Personal Website/personal-website/src/Hobbies/Page.jsx">Hobbies</a></li>
                <li className = "nav-li"><a className = "nav-a" href="/Users/sylviazhang/vscode projects/Personal Website/personal-website/src/ContactMe/Page.jsx">Contact Me</a></li>
            </ul> */}
        </nav>
    )
}