import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(initialValue);
    }


    return {
        // properties
        counter,
        // methods - actions
        handleAdd,
        handleSubstract,
        handleReset
    }
}
