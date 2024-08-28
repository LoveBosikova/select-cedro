import { IMultiSelectData } from '../../mocks/multiselectMocks';
import style from './comboboxSheet.module.scss';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface IMultiSelectSheetProps {
    item: IMultiSelectData,
    items?: IMultiSelectData[],
    isCustomSheetField?: boolean, 
    value?: string,
    setValue?: Dispatch<SetStateAction<IMultiSelectData>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    selectedItems?: IMultiSelectData[],
    setSelectedItems: React.Dispatch<React.SetStateAction<IMultiSelectData[]>>,
    isPadding: boolean,
    inputValue: string
}

function ComboboxSheet (props: IMultiSelectSheetProps) {

    const { 
        item,
        inputValue,
        setInputValue, 
        setIsFocused, 
        selectedItems = [],
        setSelectedItems
    } = props; 

    if (!item.value.includes(inputValue)) return <></>

    const [ isDisabled , setIsDisabled ] = useState(false);

    function handleClick () {
        setSelectedItems([...selectedItems, item])
        setInputValue(''); 
        setIsDisabled(!isDisabled)
        setIsFocused(false)
    }

    useEffect(()=> {
        if (selectedItems.find(el => el.id === item.id)) setIsDisabled(true);
        else setIsDisabled(false)
    }, [selectedItems])

    return (
        <React.Fragment>
        <li className={style.customSheet}>
            <button className={style.btn} onClick={handleClick} disabled={isDisabled}>
            <div className={style.textWrap}>
                <h3 className={isDisabled? style.value__disabled : style.value}>{item?.value}</h3>
            </div>
            </button>
        </li>
        </React.Fragment>
        )
}

export default ComboboxSheet