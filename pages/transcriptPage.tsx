import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from 'react';

export default function Form() {
  const [isLoaded, setIsLoaded] = useState(false);  // Initialize isLoaded to false

  return (
    <AnimatePresence>
        <div className="flex flex-col md:flex-row w-full md:overflow-hidden">
            <div className="w-full min-h-[100vh] flex flex-col px-4 pt-2 pb-8 md:px-0 md:py-2 bg-[#FCFCFC] justify-center">
            <div className="h-full w-full items-center justify-center flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    key="step-1"
                    transition={{
                    duration: 0.95,
                    ease: [0.165, 0.84, 0.44, 1],
                    }}
                    className="max-w-lg mx-auto px-4 lg:px-0"
                >
                    { // Your switch or if-else logic here
                        !isLoaded ?
                        <div className="loader">Loading...</div>
                        :
                        <div className="transcript">Transcript here</div>
                    }
                    <div className="flex gap-[15px] justify-end mt-8">
                    <div>
                        <Link
                        href="/form"
                        className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                        style={{
                            boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                        }}
                        >
                        Back to form
                        </Link>
                    </div>
                    <div>
                        <Link href="/demo">
                        <button
                        className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                        style={{
                            boxShadow:
                            "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                        }}
                        >
                        <span> Continue </span>
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M13.75 6.75L19.25 12L13.75 17.25"
                            stroke="#FFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M19 12H4.75"
                            stroke="#FFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </button>
                        </Link>
                    </div>
                    </div>
                </motion.div>
            </div>
            </div>
        </div>
    </AnimatePresence>
  );
}
