import { useState } from "react"
import { useGlobalContext } from "../Context"

const Search = () => {

    const [text, setText] = useState('')
    const {setSearchTearm, fetchRandomMeal} = useGlobalContext()

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (text) {
            setSearchTearm(text)
        }
    }

    const handleRandomMeal = () =>{
        setSearchTearm('')
        setText('')
        fetchRandomMeal()
    }

    return <header className="search-container">
        <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={text} placeholder="type favorite meal" className="form-input"/>
                <button type="submit" className="btn">Search</button>
                <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>Sorprise me!</button>
            </form>
    </header>
}

export default Search