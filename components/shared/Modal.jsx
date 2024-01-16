import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Modal({ open, onClose = () => {}, children }) {
    return (
        <>
            <Transition appear={open} show={open} as={Fragment}>
                <Dialog as="div" className={`relative z-50   font-sans font-extralight`} onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300 font-extralight"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto font-extralight">
                        <div className="flex min-h-full items-center justify-center font-extralight p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300 font-extralight"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                {children}
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
