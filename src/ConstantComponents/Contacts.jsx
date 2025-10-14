export default function Contacts() {
    return (
        <footer>
            <ul className = "container">
                <a 
                    href = "https://www.instagram.com/keerz.ie/" 
                    target = "_blank"
                >
                    <img 
                        src = {"/Icons/insta-white.svg"}
                        width = "30"
                        height = "30"
                    />
                </a>
                <a
                    href = "www.linkedin.com/in/sylvia-zhang-a58096343"
                    target = "_blank"
                >
                    <img 
                        src = {"/Icons/linkedin-white.svg"}
                        width = "30"
                        height = "30"
                    />
                </a>
            </ul>
        </footer>
    )
}