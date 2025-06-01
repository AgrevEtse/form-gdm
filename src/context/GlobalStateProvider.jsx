import { useState } from 'react'

import GlobalStateContext from '@/context/GlobalStateContext'
import { DEFAULT_CURP } from '@/utils/defaultStates.js'

const GlobalStateProvider = ({ children }) => {
  const [curp, setCurp] = useState(DEFAULT_CURP)

  const resetCurp = () => {
    setCurp(DEFAULT_CURP)
  }

  return (
    <GlobalStateContext.Provider value={{ curp, setCurp, resetCurp }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateProvider
