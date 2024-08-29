import React, { useEffect, useState } from 'react';
import { ISelectProps } from './selectBasic';

import searchIcon from '../../assets/icon-search.png';
import Dropdawn from '../dropdawn/dropdawn';
import ProfileBar from '../profileBar/profileBar';

import type { IMultiSelectData } from '../../mocks/multiselectMocks';

import style from './selectMulti.module.scss'

function Multiselect (props: ISelectProps) {
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
        isCustomTabs = false,
        customTab,
        ...rest
        } = props

    // Значение поисковой строки
    const [ inputValue, setInputValue] = useState<string>('')

    // Выбранные значения
    const [ selectedItems, setSelectedItems ] = useState<IMultiSelectData[]>([])

    // В фокусе ли селект
    const [ isFocused, setIsFocused] = useState<boolean>(false)

    // Отслеживаем ошибки
    const [ isError, setIsError] = useState<boolean>(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputValue(e.target.value)
    }

    const handleOnFocus = () => { 
        setIsFocused(true); 
    }; 

    const handleIsFocus = () => {
        setIsFocused(true); 

    }

    const handleBlur = () => { 
        setIsFocused(false); 
    }; 

    useEffect(()=> {
        console.log(`selections updated:`, selectedItems);
        setIsFocused(false); 
    }, [selectedItems])

    // Определяем кастомный таб
    const ComponentTab = (isCustomTabs ? customTab : <></>) as React.ElementType

        return (
            <div className={style.multiselectContainer} onClick={handleIsFocus}>
                {selectedItems.length > 0 ? <></> : <picture className={style.searchIconWrap}><img src={searchIcon} alt='Search Icon' /></picture>}
                {/* Контейнер для выбранных позиций */}
                <ul className={style.chosenItems}>
                    {/* Если передан, то выводим кастомный таб, если нет - дефолтный */}
                    {selectedItems.length > 0 ? selectedItems.map((item) => isCustomTabs ? <ComponentTab key={item.id} item={item} selectedItems={selectedItems} setSelectedItems={setSelectedItems} {...rest}></ComponentTab> : <ProfileBar key={item.id} item={item} selectedItems={selectedItems} setSelectedItems={setSelectedItems}></ProfileBar>) : <></>}
                </ul>
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
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={handleOnFocus} 
                    onBlur={handleBlur} 
                    {...rest}
                ></input>
                {customDropdawn? customDropdawn :(
                    <Dropdawn 
                        type={type}
                        value={inputValue}
                        items={items} 
                        isActive={isFocused} 
                        setIsFocused={setIsFocused} 
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        isCustomSheetField={isCustomSheetField}
                        CustomSheetField={customSheetField}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                        {...rest}>
                    </Dropdawn>)}
            </div>
        )
}

export default Multiselect