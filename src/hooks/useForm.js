import { useState } from 'react'

const useForm = (initialValue = {}) => {
  const [values, setValues] = useState(initialValue)

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  const handleReset = () => {
    setValues(initialValue)
  }

  return [values, handleInputChange, handleReset]
}

export default useForm
