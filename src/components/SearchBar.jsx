import React, {useState} from 'react'

const SearchBar = ({searchHandler})=>{
    const [location, setLocation] = useState("")
    return(
        <div>
            <form onSubmit={(e)=>searchHandler(e, location)}>
                <input onChange={(e) => setLocation(e.target.value)} type="text" value={location} placeholder="Location"/>
                <input type="submit" value = "Find Terrible Parking"/>
            </form>
        </div>
    )
}

export default SearchBar