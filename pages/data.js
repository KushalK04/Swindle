import { createContext, useState } from 'react'

export const UserSelectionsContext = createContext()

export default function UserSelectionsProvider({ children }) {
  const [selections, setSelections] = useState({})

  const updateSelections = (question, choice) => {
    setSelections((prevState) => ({
      ...prevState,
      [question]: choice,
    }))
  }

  return (
    <UserSelectionsContext.Provider value={{ selections, updateSelections }}>
      {children}
    </UserSelectionsContext.Provider>
  )
}
