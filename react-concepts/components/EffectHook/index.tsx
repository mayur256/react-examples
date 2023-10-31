'use client'

// top level imports
import { FormEvent, ReactElement, useEffect, useState } from "react";

// type definitions
type DeliveryInfo = {
    address: string,
    pincode: number,
    homeDelivery: boolean
}

// Component definition
export function EffectHook(): ReactElement {

    // state definition
    const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
        address: '',
        pincode: 0,
        homeDelivery: false,
    });

    useEffect(() => {
        console.count('Component rendered');
        console.log(deliveryInfo.address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deliveryInfo.address])
    // passing a primitive value in dependency only runs the effect when a value has actually changed
    // alternatively passing a reference value as dependency causes the effect to run every time a reference to the object changes

    /** Utility / handler functions */
    /* const handleChange = (event: ChangeEvent): void => {
        const value = (event.target as HTMLInputElement).value;
        const name = (event.target as HTMLInputElement).name;
        const isChecked = (event.target as HTMLInputElement).checked;

        let tValue: string | number | boolean = value;
        if (name === 'pincode') {
            tValue = +value;
        } else if (name === 'homeDelivery') {
            tValue = isChecked;
        }
        
        setDeliveryInfo((prev: DeliveryInfo): DeliveryInfo => ({
            ...prev,
            [name]: tValue
        }))
    }*/

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const formElements: HTMLFormControlsCollection = (event.target as HTMLFormElement).elements;
        const address = (formElements.namedItem('address') as HTMLInputElement).value;
        const pincode = +(formElements.namedItem('pincode') as HTMLInputElement).value;
        const homeDelivery = (formElements.namedItem('homeDelivery') as HTMLInputElement).checked;

        setDeliveryInfo({ address, pincode, homeDelivery });
    }

    /** Utility / handler functions */

    // main renderer
    return (
        <form className="p-4" onSubmit={handleSubmit}>
            <div className="mb-6">
                <input
                    type="text"
                    id="address"
                    name="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    // value={deliveryInfo.address}
                />
            </div>
            <div className="mb-6">
                <input
                    type="number"
                    id="pincode"
                    name="pincode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    // value={deliveryInfo.pincode}
                />
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input
                        id="homeDelivery"
                        name="homeDelivery"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                    />
                </div>
                <label htmlFor="homeDelivery" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Comfortable with home delivery</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Info</button>

            <code className='bg-gray-100 p-2 rounded'>
                {JSON.stringify(deliveryInfo)}
            </code>
        </form>

    )
}

// component to demonstrate effect nuances and cleanup
export function EffectNuances(): ReactElement {
    // state definition
    const [count, setCount] = useState<number>(0);

    // the following update in a useeffect hook is a bad practise
    /* useEffect(() => {
        console.count('effect');
        setInterval(() => setCount(count + 1), 1000);
    }, [count]); */

    // a simple effect that runs on every mount and with every re-render due to count
    useEffect(() => {
        console.log(`%ceffect - ${count}`, "color:white;background:blue");
        return () => {
            console.log(`%ccleanup - ${count}`, "color:white;background:green");
        }
    }, [count]);

    // the following update mitigates the above issue to an extent
    // but it is not recommended in react to update state within effect if that state is
    // already present in the effect's dependency
    /* useEffect(() => {
        console.log(`%ceffect - ${count}`, "color:white;background:blue");
        const interval = setInterval(() => setCount(prevCount => prevCount + 1), 1000);
        
        // this function is called a cleanup function and runs at the following times
        // 1. component unmounts
        // 2. every re-render with changed dependencies
        // 3. in development/strict mode when component mounts
        return () => {
            console.log(`%ccleanup - ${count}`, "color:white;background:green");
            clearInterval(interval); // clears intervals from last render
        }
    }, [count]); */
    
    return (
        <>
            <p>Count: {count}</p>
            <div className="mt-2">
                <button
                    onClick={() => setCount(prev => prev + 1)}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Increase
                </button>
                <button
                    type="button"
                    onClick={() => setCount(prev => prev - 1)}
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Decrease
                </button>
            </div>
        </>
    )
};
