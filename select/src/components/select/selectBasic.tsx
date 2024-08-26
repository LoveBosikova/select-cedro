import { type ReactNode } from 'react'

import { SELECT, TYPES } from '../../utils/globals';
import style from './selectBasic.module.scss'
import { ISimpleSelectItem } from './select';

export interface ISelectProps {
    type?: string | undefined,
    name: string,
    items: ISimpleSelectItem[],
    form?: string | undefined,
    isDisabled?: boolean,
    isRequired?: boolean,
    customDropdawn?: ReactNode,
    customLabel?: ReactNode,
    minLength?: number,
    maxLength?: number,
    placeholder?: string | undefined,
    isMultiple?: boolean,
    mode?: undefined | string,
    children?: ReactNode | ReactNode[] 
}

// Главное, что нужно сделать при создании селекта - написать его тип -DEFAULT | ACTIONSHEET | MULTISELECT | COMBOBOX
// В зависимости от этого компонент уже будет требовать причитающиеся ему входные данные
// Для создания любого селекта обязательно нужно указать его имя
// Флаг form  связывает отдельно стоящий элемент <input> с формой. По умолчанию не связан ни с какой формой.
// Флаг isActive отвечает за атрибут disabled. По умолчанию селект активен.
// Флаг isRequired  отвечает за атрибут required. По умолчанию селект не обязателен к заполнению.
// Флаг minLength отвечает за минимальную длину ввода. По умолчанию минимальный ввод 0, если только нет флага isRequired.
// Флаг maxLength отвечает за максимальную длину ввода. По умолчанию максимальный ввод 100. Цифра взята от балды, в реальной жизни обсуждается с заказчиками.


// TODO: isLoading, isMultiple

function SelectBasic (props: ISelectProps) {
    const {
        type = TYPES.DEFAULT,
        name, 
        customLabel, 
        } = props

        const SelectComponent = SELECT[type].component;

    return (
    
    <div className={style.contentWrap}>
        {/* TODO вывести в отдельный компонент */}
        {customLabel? customLabel: <label className={style.label} htmlFor={name}></label>}
        <SelectComponent {...props} />
    </div>

    )
}
export default SelectBasic