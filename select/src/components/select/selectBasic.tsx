import { useEffect, useState, type ReactNode } from 'react'
import style from './selectBasic.module.scss'
import Chevron from '../chevron/chevron';

import type { ISelectItem } from '../dropdawn/dropdawn';
import Dropdawn from '../dropdawn/dropdawn';

interface ISelectProps {
    name: string,
    items: ISelectItem[],
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

// Для создания селекта обязательно нужно указать его имя
// Флаг form  связывает отдельно стоящий элемент <input> с формой. По умолчанию не связан ни с какой формой.
// Флаг isActive отвечает за атрибут disabled. По умолчанию селект активен.
// Флаг isRequired  отвечает за атрибут required. По умолчанию селект не обязателен к заполнению.
// Флаг minLength отвечает за минимальную длину ввода. По умолчанию минимальный ввод 0, если только нет флага isRequired.
// Флаг maxLength отвечает за максимальную длину ввода. По умолчанию максимальный ввод 100. Цифра взята от балды, в реальной жизни обсуждается с заказчиками.


// TODO: isLoading, isMultiple

function SelectBasic (props: ISelectProps) {
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
    const [ value, setValue ] = useState<string>('')
    // В фокусе ли селект
    const [ isFocused, setIsFocused] = useState<boolean>(false);
    // В фокусе ли селект
    const [ isError, setIsError] = useState<boolean>(false);
    // Подходящие значения инпута 
    const [ currentData, setCurrentData ] = useState<ISelectItem[]>(items);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue(e.target.value)

        const newData = items.filter((item: ISelectItem)=> item.value.toLowerCase().includes(value.toLowerCase()))
        if (newData.length === 0) {
            setIsError(true)
            setCurrentData(items)
        } else if (newData.length > 0) {
            setIsError(false)
            setCurrentData(newData)
        }
    }

    const handleOnFocus = () => { 
        setIsFocused(true); 
    }; 

    const handleBlur = () => { 
        setIsFocused(false); 
    }; 

    const handleChevron = (state: boolean) => {
        setIsFocused(!state)
    }

    useEffect(()=>{
        setCurrentData(items.filter((item: ISelectItem)=> item.value.toLowerCase().includes(value.toLowerCase())))
    }, [value])

    return (
    
    <div className={style.contentWrap}>
        {/* TODO вывести в отдельный компонент */}
        {customLabel? customLabel: <label className={style.label} htmlFor={name}></label>}

        {/* По умолчанию показываем обычный селект, если приходит флаг mode, то уже в зависимости от него показываем другие селекты*/}
        {/* {!mode ? <>
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
        value={value}
        onChange={handleInputChange}
        onFocus={handleOnFocus} 
        onBlur={handleBlur} 
        {...rest}
        ></input>
        <Chevron isActive={isFocused} onClick={() => handleChevron(isFocused)}></Chevron>

        </> :<></>
        } */}
            {
                switch (mode: string) {
                    case 'actionsheet':
                      return <></>
                    //   break;
                    case 4:
                      alert( 'В точку!' );
                      break;
                    case 5:
                      alert( 'Перебор' );
                      break;
                    default:
                      alert( "Нет таких значений" );
                  }
            }


        {/* TODO вывести в отдельный компонент */}
        {customDropdawn? customDropdawn :(
            <Dropdawn 
            items={currentData} 
            isActive={isFocused} 
            setIsFocused={setIsFocused} 
            setValue={setValue}
            setCurrentData={setCurrentData}>
            </Dropdawn>
        )}
    </div>

    )
}
export default SelectBasic