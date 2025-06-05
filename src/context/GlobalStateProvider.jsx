import { useState } from 'react'
import PropTypes from 'prop-types'

import GlobalStateContext from '@/context/GlobalStateContext'
import { DEFAULT_CURP, DEFAULT_FORM } from '@/utils/defaultStates.js'

const GlobalStateProvider = ({ children }) => {
  const [curp, setCurp] = useState(DEFAULT_CURP)
  const [form, setForm] = useState(DEFAULT_FORM)
  const [currentStep, setCurrentStep] = useState(0)

  const updateFieldForm = (section, field, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const resetStates = () => {
    setCurp(DEFAULT_CURP)
    setForm(DEFAULT_FORM)
    setCurrentStep(0)
  }

  return (
    <GlobalStateContext.Provider
      value={{
        curp,
        setCurp,
        form,
        updateFieldForm,
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
