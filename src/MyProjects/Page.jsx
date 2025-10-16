import techData from "./techData"

function TechElement({tech, years}) {
    return (
        <div>
            <p>{tech}</p>
            <p>{years}</p>
        </div>
    )
}

export default function MyProjects() {
    const techComponents = techData.map(({tech, years}) => {
        return (
            <TechElement tech = {tech} years = {years}/>
        )
    })
    return (
        <div>
            <h2>My Projects</h2>
            <h2>About my personal website development</h2>
            <p>I was inspired to make a personal website after I went to Big Red Hacks 
                and started learning React! With absolutely no experience at all, 
                I tried (and struggled) with vibecoding, working in a team, 
                managing a project in GitHub, and following tutorials. 
                Importantly though, it was fun. When I saw the projects that the winning teams made, 
                I remember feeling so blown away with what was possible. 
                I really wanted to develop those skills for myself, 
                and so I decided to create this website! 
                I spent some time self learning and got to coding. 
                It’s been difficult doing this all from scratch 
                and navigating through the error messages, 
                but I’ve definitely grown a lot! </p>
            <h2>Skills and technologies</h2>
            <div>{techComponents}</div>
        </div>
        

    )
}