  
import { useState } from "react"

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues( initialState )
    }

    const handleInputChange = (name) => (event) => {

        setValues({
            ...values,
            [name]: event.nativeEvent.text
        });
    }

    return [ values, handleInputChange, reset ];
}