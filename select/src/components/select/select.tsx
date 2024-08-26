import Dropdawn from '../dropdawn/dropdawn';
import Chevron from '../chevron/chevron';

import { useEffect, useState } from 'react'

import type { ISelectProps } from './selectBasic';
import { ISelectItem } from '../dropdawn/dropdawn';

import style from './select.module.scss';

// На вход простого селекта с единичным выбором ожидается такой объект, при желании легко расширить под любые нужды,
// Возвращает ту же структуру данных в переменной value

export interface ISimpleSelectItem {
    id: number | undefined,
    value: string
}

function Select (props: ISelectProps) {
    const {
        name, 
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
        mode,
        ...rest
        } = props

    // Значение поисковой строки
    const [ value, setValue ] = useState<ISimpleSelectItem>({id: undefined, value: ''})
    // В фокусе ли селект
    const [ isFocused, setIsFocused] = useState<boolean>(false);
    // В фокусе ли селект
    const [ isError, setIsError] = useState<boolean>(false);
    // Подходящие значения инпута 
    const [ currentData, setCurrentData ] = useState<ISimpleSelectItem[]>(items);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue({...value, ...{value: e.target.value}})

        const newData = items.filter((item: ISelectItem)=> item.value.toLowerCase().includes(value.value.toLowerCase()))
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

    const handleOnFocus = () => { 
        setIsFocused(true); 
    }; 

    const handleBlur = () => { 
        setIsFocused(false); 
    }; 

    const handleChevron = (state: boolean) => {
        if (!isDisabled) {
            setIsFocused(!state)
        }
    }

    useEffect(()=>{
        setCurrentData(items.filter((item: ISimpleSelectItem)=> item.value.toLowerCase().includes(value.value.toLowerCase())))
    }, [value])

    return (
        <>
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
            onFocus={handleOnFocus} 
            onBlur={handleBlur} 
            {...rest}
        ></input>
        <Chevron 
            isActive={isFocused} 
            isDisabled={isDisabled} 
            onClick={() => handleChevron(isFocused)}>
        </Chevron>
        {customDropdawn? customDropdawn :(
            <Dropdawn 
                value={value}
                items={currentData} 
                isActive={isFocused} 
                setIsFocused={setIsFocused} 
                setValue={setValue}
                setCurrentData={setCurrentData}>
            </Dropdawn>
        )}
        </> 
    )
}

export default Select;