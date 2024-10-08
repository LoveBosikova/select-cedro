import React from 'react';
import Dropdawn from '../dropdawn/dropdawn';
import Chevron from '../chevron/chevron';
import { IActionFieldTestData } from '../../mocks/actionSheetMocks';

import { useEffect, useState } from 'react'

import type { ISelectProps } from './selectBasic';

import style from './select.module.scss';
import { IMultiSelectData } from '../../mocks/multiselectMocks';

// На вход простого селекта с единичным выбором ожидается такой объект, при желании легко расширить под любые нужды,
// Возвращает ту же структуру данных в переменной value

export interface ISimpleSelectItem {
    id: number | undefined,
    value: string
}

function Select (props: ISelectProps) {
    const {
        name, 
        type,
        items,
        form = undefined,
        customLabel, 
        customDropdawn, 
        isRequired = false, 
        isDisabled = false,
        minLength,
        maxLength = 100,
        placeholder = 'Placeholder',
        children,
        isCustomSheetField = false,
        customSheetField,
        ...rest
        } = props

    // Значение поисковой строки
    const [ value, setValue ] = useState<ISimpleSelectItem | IActionFieldTestData | IMultiSelectData[]>({id: undefined, value: ''})
    // В фокусе ли селект
    const [ isFocused, setIsFocused] = useState<boolean>(false);
    // В фокусе ли селект
    const [ isError, setIsError] = useState<boolean>(false);
    // Подходящие значения инпута 
    const [ currentData, setCurrentData ] = useState<ISimpleSelectItem[] | IActionFieldTestData[]>(items);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue({...value, ...{value: e.target.value}})

        const newData = items.filter((item: ISimpleSelectItem | IActionFieldTestData)=> item.value.toLowerCase().includes(value.value.toLowerCase()))
        if (newData.length === 0) {
            setIsError(true)
            setCurrentData(items)
        } else if (newData.length > 0) {
            setIsError(false)
            setCurrentData(newData)
        }

        if (value.value === '') {
            setIsError(false)
        }
    }

    const handleChevron = () => {
        if(!isDisabled) {
            setIsFocused(!isFocused)
        }
    }

    useEffect(()=>{
        setCurrentData(items.filter((item: ISimpleSelectItem | IActionFieldTestData)=> item.value.toLowerCase().includes(value.value.toLowerCase())))
    }, [value])

    return (
        <div className={style.selectWrap} onClick={isDisabled? ()=> {} : ()=> setIsFocused(!isFocused)}>
        <input
            type='text'
            id={name}
            form={form}
            name={name}
            placeholder={placeholder}
            required={isRequired}
            disabled={isDisabled}
            minLength={minLength? minLength : isRequired? 1: 0}
            maxLength={maxLength}
            className={isError ? style.input__error : style.input}
            value={value.value}
            onChange={handleInputChange}
            {...rest}
        ></input>
        <Chevron 
            isActive={isFocused}  
            handleChevron={handleChevron}
            >
        </Chevron>
        {customDropdawn? customDropdawn :(
            <Dropdawn 
                type={type}
                value={value}
                items={currentData} 
                isActive={isFocused} 
                setIsFocused={setIsFocused} 
                setValue={setValue}
                setCurrentData={setCurrentData}
                isCustomSheetField={isCustomSheetField}
                CustomSheetField={customSheetField}
                {...rest}>
            </Dropdawn>
        )}
        </div> 
    )
}

export default Select;