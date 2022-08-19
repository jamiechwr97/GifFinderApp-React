import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifFinderApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball Z']);

    const onAddCategory = () => {
        setCategories([ ...categories, 'Valorant' ])
    }

    return (
        <>
            {/* titulo */}
            <h1>Gif Finder</h1>

            {/* Input */}
            <AddCategory />

            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                } ) }
            </ol>
                {/* Gif Item */}
        </>
    )
}