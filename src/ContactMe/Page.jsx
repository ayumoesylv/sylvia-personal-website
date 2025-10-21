export default function Contact() {
    function handleSubmit(formData) {
        const firstName = formData.get("firstName")
    }
    return (
        <div>
            <h2>Contact me page!</h2>
            <form className = "contact-form" action = {handleSubmit}>
                <label htmlFor = "firstName">First Name: </label>
                <input id = "firstName" />

                <label htmlFor = "lastName">Last Name: </label>
                <input id = "lastName" />

                <label htmlFor = "email">Email: </label>
                <input id = "email" type = "email"/>
                
                <label htmlFor = "comment">Comment: </label>
                <textarea id = "comment"></textarea>

                <button>Submit!</button>
            </form>
            <div>

            </div>
        </div>
        

    )
}