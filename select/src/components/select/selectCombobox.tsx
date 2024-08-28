import React, { useEffect, useState } from 'react';
import { ISelectProps } from './selectBasic';

import Dropdawn from '../dropdawn/dropdawn';
import ItemBar from '../itemBar/itemBar';

import AddIcon from '../../assets/icon-plus.png'

import type { IMultiSelectData } from '../../mocks/multiselectMocks';

import style from './selectCombobox.module.scss'

function Combobox (props: ISelectProps) {
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
        mode,
        isCustomSheetField = false,
        customSheetField,
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
    }, [selectedItems])

        return (
            <div className={style.multiselectContainer} onClick={handleIsFocus}>
                <ul className={style.chosenItems}>
                    {selectedItems.length > 0 ? selectedItems.map((item) => <ItemBar key={item.id} item={item} selectedItems={selectedItems} setSelectedItems={setSelectedItems}></ItemBar>) : <></>}
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

                    {isError ? <div className={style.addItem}>
                        <button className={style.addBtn}>
                            <picture className={style.plusWrap}>
                                <img src={AddIcon} alt='Plus Icon' tabIndex={0}/>
                            </picture>
                            <p className={style.addText}>Создать «{inputValue}»</p>
                        </button>
                    </div> : <></>}

            </div>
        )
}

export default Combobox