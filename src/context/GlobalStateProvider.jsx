import { useState } from 'react'
import PropTypes from 'prop-types'

import GlobalStateContext from '@/context/GlobalStateContext'
import { DEFAULT_CURP, DEFAULT_FORM } from '@/utils/defaultStates.js'
import { useReducer } from 'react'

const GlobalStateProvider = ({ children }) => {
  const [curp, setCurp] = useState(DEFAULT_CURP)
  // const [form, setForm] = useState(DEFAULT_FORM)
  const [currentStep, setCurrentStep] = useState(0)

  // const updateFieldForm = (section, field, value) => {
  //   setForm((prev) => ({
  //     ...prev,
  //     [section]: {
  //       ...prev[section],
  //       [field]: value
  //     }
  //   }))
  // }

  const formReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_FIELD': {
        const { section, field, value } = action
        return {
          ...state,
          [section]: {
            ...state[section],
            [field]: value
          }
        }
      }

      case 'UPDATE_ARRAY_ITEM': {
        const { arrayName, index, field, value } = action

        const updatedArray = [...state[arrayName]]
        updatedArray[index] = {
          ...updatedArray[index],
          [field]: value
        }

        return {
          ...state,
          [arrayName]: updatedArray
        }
      }

      case 'RESET': {
        return action.payload
      }

      default:
        return state
    }
  }

  const [form, dispatch] = useReducer(formReducer, DEFAULT_FORM)

  const resetStates = () => {
    setCurp(DEFAULT_CURP)
    dispatch({ type: 'RESET', payload: DEFAULT_FORM })
  }

  return (
    <GlobalStateContext.Provider
      value={{
        curp,
        setCurp,
        form,
        dispatch,
        resetStates,
        currentStep,
        setCurrentStep
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}

GlobalStateProvider.propTypes = {
  children: PropTypes.node
}

export default GlobalStateProvider
