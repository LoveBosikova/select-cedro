import { ISimpleSelectItem } from "../components/select/select";
import { IMultiSelectData } from "../mocks/multiselectMocks";

function createComboboxItem (value: string, arr: ISimpleSelectItem[] | IMultiSelectData[]) {

    const maxId = Math.max.apply(null, arr.map((el)=> el.id ? +el.id : 0))
    
    return {id: maxId + 1, value}
}

export default createComboboxItem