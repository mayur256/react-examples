'use client'

// top level imports
import { ReactElement, useState } from "react";
import { createPortal } from "react-dom";

// Component definition
export function PortalModal(): ReactElement {
    // state definition
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <div className="h-full flex items-center">
            <div className="text-center flex-grow">
                <p>Show a custom modal with Portal feature</p>
                <button
                    onClick={() => setShowModal(true)}
                    type="button"
                    className="mt-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    disabled={showModal}
                >
                    Show Modal
                </button>
            </div>

            {showModal && (
                createPortal(<Modal onCloseClick={() => setShowModal(false)} />, document.body)
            )}
        </div>
    )
}

// Component that describes modal UI
type IModalProps = { onCloseClick: () => void };
function Modal({ onCloseClick }: IModalProps): ReactElement {
    return (
        <div className="w-full absolute top-1/4" style={{ background: 'aliceblue' }}>
            <div className="border-2 shadow-2xl">
                <div className="border-b-2 p-2">
                    <p>Modal Header</p>
                </div>

                <div className="p-2 text-center">
                    Modal body
                </div>

                <div className="p-2 text-center" >
                    <button
                        onClick={onCloseClick}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
