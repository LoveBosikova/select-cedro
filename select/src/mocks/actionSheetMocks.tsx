import IconLetters from '../assets/icon-letters.png';


export interface IActionFieldTestData {
    id: number,
    type: string,
    value: string,
    src: string,
    isActive: boolean
}

export const actionSheetCorrectData: IActionFieldTestData[] = [
    { 
        id: 0,
        type: 'Subtitle',
        value: 'Title', 
        src: IconLetters,
        isActive: false
    },
    { 
        id: 1,
        type: 'Subtitle',
        value: 'Title 2' ,
        src: IconLetters,
        isActive: false

    },
    { 
        id: 2,
        type: 'Subtitle',
        value: 'Title 3',
        src: IconLetters,
        isActive: false
    },
    { 
        id: 3,
        type: 'Subtitle',
        value: 'Item 4',
        src: IconLetters,
        isActive: false
    },
    { 
        id: 4,
        type: 'Subtitle',
        value: 'Item 5',
        src: IconLetters,
        isActive: false
    },
    { 
        id: 5,
        type: 'Subtitle',
        value: 'Item 6',
        src: IconLetters,
        isActive: false
    },
]