'use client'

import SearchManufacture from "@/components/SearchManufacture";
import {useState} from "react";


const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('')
    const handleSearch = () => {}
    return (
        <form onSubmit={handleSearch} className="searchbar">

            <div className="searchbar__item">
                <SearchManufacture manufacturer={manufacturer} setManufacturer={setManufacturer}/>
            </div>
        </form>
    )
}
export default SearchBar
