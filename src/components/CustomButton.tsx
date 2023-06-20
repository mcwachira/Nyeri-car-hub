'use client'
import React from 'react'
import {CustomButtonProps} from "@/types";
import Image from 'next/image'

const CustomButton = ({title, containerStyles, handleClick, btnType, isDisabled,
                          textStyles,
                          rightIcon}:CustomButtonProps) => {
    return (
       <button
       disabled={false}
          type={btnType ||"button"}
       className={`custom-btn ${containerStyles}`}
       onClick={handleClick}

       >
<span className={`flex-1 ${textStyles}`}>
{title}</span>
           {rightIcon &&(
               <div className='relative w-6 h-6'>
                   <Image src={rightIcon} alt='right icon' fill className='object-cxontain'/>

               </div>
           )}
       </button>
    )
}
export default CustomButton
