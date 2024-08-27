import Select from "../components/select/select";
import Multiselect from "../components/select/selectMulti";
import ActionSheet from "../components/sheetfield/actionSheet";

export const TYPES = {
    DEFAULT: 'DEFAULT',
    ACTIONSHEET: 'ACTIONSHEET',
    MULTISELECT: 'MULTISELECT',
    COMBOBOX: 'COMBOBOX'
}

export const SELECT = {
    [TYPES.DEFAULT]: {
        key: TYPES.DEFAULT,
        component: Select,
    },
    [TYPES.ACTIONSHEET]: {
        key: TYPES.ACTIONSHEET,
        component:  Select, 
    },
    [TYPES.MULTISELECT]: {
        key: TYPES.MULTISELECT,
        component:  Multiselect,
    }
}

export const CUSTOMS = {
    ACTIONSHEET: 'ACTIONSHEET',
}

export const CUSTOM_ELEMENTS = {
    [CUSTOMS.ACTIONSHEET]: {
        key: CUSTOMS.ACTIONSHEET,
        component: ActionSheet,
    }
}