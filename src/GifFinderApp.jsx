import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifFinderApp = () => {

    const [categories, setCategories] = useState(['Popular']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        setCategories([ newCategory ])
    }

    return (
        <>
            <h1>Gif Finder</h1>

            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( (category) => (
                    <GifGrid
                        key = { category } 
                        category = { category }
                    />
                )) 
            }
        </>
    )
}