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
    // passing a primitive value in dependency only runs the effect when a filed value has actually changed
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