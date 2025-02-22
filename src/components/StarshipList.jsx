import { useState } from "react"
const StarshipSearch = (props) => {
    const [formData, setFormData] = useState('')
    const handleChange = (e) => {

        setFormData(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSearch(formData)

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">List for starship :</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={props.starship}
                />
                <button type="submit">Search</button>

            </form>

        </>
    )

}

export default StarshipSearch