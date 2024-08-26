import SheetField from '../sheetfield/sheetfield';
import style from './dropdawn.module.scss';

export interface ISelectItem {
    value: string,
}

interface IPropsDropdawn {
    items: ISelectItem[]
}

function Dropdawn (props: IPropsDropdawn) {

    const { items } = props

    if (!items || items.length === 0) return null

    return (
        <ul className={style.dropdawn}>
            {items.map( item => <SheetField key={item.value} {...item}></SheetField>)}
        </ul>
    )
}

export default Dropdawn