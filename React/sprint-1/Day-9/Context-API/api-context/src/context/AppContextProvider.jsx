import { createContext, useState } from "react"


//step-1--> createContext()
const AppContext = createContext()

let languages = {
  english: "en",
  chinese: "ch",
  french: "fr",
  spanish: "es",
  german: "gn"
}


//step-2 --  a) create function 
let AppContextProvider = ({ children }) => {

    //use State
  const [language, setLanguage] = useState(languages.english)

 // function For setting Language
  const HandleLanguages = (selectLanguage) => {
    let UpdatedLanguage = languages[selectLanguage] || languages.english
    setLanguage(UpdatedLanguage)
  }


  return (
    <AppContext.Provider value={{ language, HandleLanguages }} >{children}</AppContext.Provider>
  )
}
export default AppContextProvider
