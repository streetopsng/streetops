"use client";
import { dispatchType, RootStateType } from "@/store";
import { closeModal } from "@/store/slices/modalSlice";

import { useDispatch, useSelector } from "react-redux";

export default function Modal() {
    const dispatch = useDispatch<dispatchType>()
const modalState = useSelector((store:RootStateType)=>{

    return store.modalReducer
})

  return (
    <div
      className={`${modalState.isOpen ? "block" : "hidden"} fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn `}
    //   onClick={onClose}
    >
      <div
        className="bg-white  rounded-2xl shadow-xl w-[90%] mx-auto max-w-md p-6 relative animate-scaleIn"
  
      >
  

        <h2 className=" text-sm mb-4 ">
     {modalState.content}
          </h2>

          <div className='flex items-center justify-center'>
                <button
                onClick={()=> dispatch(closeModal())}
                className='bg-primary rounded-lg px-4 font-semibold text-wht w-full h-[30px] cursor-pointer'>Ok</button>
            </div>
        {/* {title && (
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            {title}
          </h2>
        )} */}

        
      </div>
    </div>
  );
}
