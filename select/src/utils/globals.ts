import Select from "../components/select/select";

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
    [TYPES.MULTISELECT]: {
        key: TYPES.MULTISELECT,
      component:  Select, //Это компонента
    }
}