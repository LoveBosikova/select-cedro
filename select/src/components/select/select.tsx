import type { ReactNode } from 'react'
import style from './select.module.scss'
import Chevron from '../chevron/chevron';

interface ISelectProps {
    name: string,
    form?: string | undefined,
    isActive?: boolean,
    isRequired?: boolean,
    customDropdawn?: ReactNode,
    customLabel?: ReactNode,
    minLength?: number,
    maxLength?: number,
    placeholder?: string | undefined,
    isMultiple?: boolean
}

// Для создания селекта обязательно нужно указать его имя
// Флаг form  связывает отдельно стоящий элемент <input> с формой. По умолчанию не связан ни с какой формой.
// Флаг isActive отвечает за атрибут disabled. По умолчанию селект активен.
// Флаг isRequired  отвечает за атрибут required. По умолчанию селект не обязателен к заполнению.
// Флаг minLength отвечает за минимальную длину ввода. По умолчанию минимальный ввод 0, если только нет флага isRequired.
// Флаг maxLength отвечает за максимальную длину ввода. По умолчанию максимальный ввод 100. Цифра взята от балды, в реальной жизни обсуждается с заказчиками.


// TODO: isLoading, isMultiple

function Select (props: ISelectProps) {
    const {
        name, 
        form,
        customLabel, 
        customDropdawn, 
        isRequired, 
        isActive,
        minLength,
        maxLength,
        placeholder 
        } = props;

    return (
    
    <div className={style.contentWrap}>
        {/* TODO вывести в отдельный компонент */}
        {customLabel? customLabel: <label className={style.label} htmlFor={name}></label>}

        <input
        type='text'
        id={name}
        form={form? form : undefined}
        name={name}
        placeholder={placeholder? placeholder : 'Placeholder'}
        required={isRequired? isRequired : false}
        disabled={isActive? false : true}
        minLength={minLength? minLength : isRequired? 1: 0}
        maxLength={maxLength? maxLength : 100}
        className={style.input}
        ></input>

        <Chevron isActive={isActive? false : true}></Chevron>

        {/* TODO вывести в отдельный компонент */}
        {customDropdawn? customDropdawn :(
            <>
            </>
        )}
    </div>

    )
}
export default Select