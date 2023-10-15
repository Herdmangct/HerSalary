import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import SimpleForm from './simpleForm';

export default function Form() {
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
                    <h2 className="text-4xl font-bold text-[#1E2B3A]">
                    Please fill in your personal information
                    </h2>
                    <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal my-4">
                    This is so that we can personalise your negotiation transcripts as much as possible.
                    If you are uncomfortable with sharing this information, just write N/A or choose N/A. 
                    </p>
                    <SimpleForm />
                </motion.div>
            </div>
            </div>
        </div>
    </AnimatePresence>
  );
}
