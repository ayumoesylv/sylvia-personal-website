import Contacts from "./../ConstantComponents/Contacts"

export default function Contact() {
    function handleSubmit(formData) {
        const firstName = formData.get("firstName")
    }
    return (
        <div>
            <div className = "contact-container">
            <h1>CONTACT ME</h1>
            <form className = "contact-form" action = {handleSubmit}>
                <div className = "contact-name">
                    <label htmlFor = "firstName">First Name: </label>
                    <input id = "firstName" type = "text"/>

                    <label htmlFor = "lastName">Last Name: </label>
                    <input id = "lastName" type = "text"/>
                </div>
                <label htmlFor = "email">Email: </label>
                <input id = "email" type = "email"/>
                
                <label htmlFor = "comment">Comment: </label>
                <textarea id = "comment"></textarea>

                <button>Submit!</button>
            </form>
            </div>
            <Contacts />
        </div>
        

    )
}