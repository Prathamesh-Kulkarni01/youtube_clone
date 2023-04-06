import { createContext, useEffect, useState } from "react";
import { fatchDataFromAPI } from "../utils/api";

export const Context=createContext()

export const AppContext=({children})=>{

    const [loading, setLoading] = useState(false)
    const [searchResult, setSearchResult] = useState(false)
    const [selectCategories, setSelectCategories] = useState("New")
const [mobileMenu, setMobileMenu] = useState(false)

useEffect(() => {
    fatchSelectedCategoryData(selectCategories)
}, [selectCategories])


 const fatchSelectedCategoryData=(query)=>{
setLoading(true)
fatchDataFromAPI(`search/?q=${query}`).then(({contents})=>{
    console.log(contents);
    setSearchResult(contents)
setLoading(false)
})

}

return(
    <Context.Provider value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu
        }}>
        {children}
    </Context.Provider>
)
}