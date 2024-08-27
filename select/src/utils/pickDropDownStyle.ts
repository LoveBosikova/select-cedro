import { TYPES } from "./globals";
import style from '../components/dropdawn/dropdawnWrap.module.scss';

// Функция для подбора стилю выпадающему меню

const pickDropDownStyle = (isActive: boolean, type: string) => {
    if (!isActive) {
        return style.dropdawn__closed;
    }
    if (isActive && type===TYPES.DEFAULT) {
        return style.dropdawn__opened 
    } else if (isActive && type===TYPES.ACTIONSHEET) {
        return style.actionsheet__opened
    }
}

export default pickDropDownStyle