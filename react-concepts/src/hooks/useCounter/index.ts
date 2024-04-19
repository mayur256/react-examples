import { useDebugValue, useState } from "react";

export function useCounter(initialVal: number) {
    const [counter, setCounter] = useState<number>(initialVal);

    useDebugValue(counter >= 0 ? 'PositiveCounter' : 'NegativeCounter')

    return { counter, setCounter }
}