import { Dispatch, SetStateAction } from 'react';

import style from './sheetfield.module.scss';

interface IPropsSheetField {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    setIsFocused: Dispatch<SetStateAction<boolean>>
}
function SheetField (props: IPropsSheetField) {

    const { value, setValue, setIsFocused } = props

    const handleClick = () => { 
        setValue(value); 
        setIsFocused(false)
    }; 

    if (!value) return null

    return (
        <li className={style.sheetfield} onClick={handleClick}>
            { value }
        </li>
    )
}

export default SheetField