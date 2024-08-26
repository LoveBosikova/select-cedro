import SheetField from '../sheetfield/sheetfield';

import { Dispatch, SetStateAction } from 'react';

import style from './dropdawn.module.scss';

export interface ISelectItem {
    id: number,
    value: string,
}

interface IPropsDropdawn {
    items: ISelectItem[],
    isActive: boolean,
    setValue: Dispatch<SetStateAction<string>>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    setCurrentData: Dispatch<SetStateAction<ISelectItem[]>>
}

function Dropdawn (props: IPropsDropdawn) {

    const { items, isActive, setValue, setIsFocused, setCurrentData } = props

    if (!items || items.length === 0) return null

    return (
        <ul className={isActive ? style.dropdawn__opened : style.dropdawn__closed}>
            {items.map( item => <SheetField key={item.id} setValue={setValue} setCurrentData={setCurrentData} setIsFocused={setIsFocused} items={items} {...item}></SheetField>)}
        </ul>
    )
}

export default Dropdawn