import React from 'react'
import { BtnProps } from '../constants/interface'

const Button:React.FC<BtnProps> = ({Style,children}) => {
    return (
        <div className={`${Style} py-[9px] px-[20px] cursor-pointer  rounded-[4px]`}>
            <h1 className='text-white font-[500] text-[18px] text-center'>{children}</h1>
        </div>
    )
}
export default Button
