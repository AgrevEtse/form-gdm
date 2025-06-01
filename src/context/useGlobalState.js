import { useContext } from 'react'
import GlobalStateContext from '@/context/GlobalStateContext'

const useGlobalStateContext = () => {
  return useContext(GlobalStateContext)
}

export default useGlobalStateContext
