import {MouseEventHandler} from "react";

export type CustomButtonProps ={
    title?:string,
    containerStyles?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    btnType?:"button" | 'submit';
}

export type CustomFilterProps ={
    title?:string,

}

export type SearchManufacturerProps ={
    manufacturer:string,
    setManufacturer:(   manufacture:string) => void

}