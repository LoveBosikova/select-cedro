import style from './selectActionSheet.module.scss';
import { ISelectProps } from './selectBasic';

function SelectActionSheet (props: ISelectProps) {

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
    
    return (
        <>
        </>
    )
}

export default SelectActionSheet