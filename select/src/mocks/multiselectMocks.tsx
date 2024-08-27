import avatar1 from '../assets/Avatar1.png'
import avatar2 from '../assets/Avatar2.png'
import avatar3 from '../assets/Avatar3.png'

export interface IMultiSelectData {
    id:  number |  undefined,
    value: string,
    email: string,
    src: string,
}

export const multiSelectCorrectData: IMultiSelectData[] = [
    {
        id: 0,
        value: 'Куликов В.',
        email: 'example1mail.com',
        src: avatar1,
    },
    {
        id: 1,
        value: 'Кузнецов И.',
        email: 'example1mail.com',
        src: avatar2,
    },
    {
        id: 2,
        value: 'Кудрявцев И.',
        email: 'example1mail.com',
        src: avatar3,
    },
    {
        id: 3,
        value: 'Макаров Д.',
        email: 'example1mail.com',
        src: avatar3,
    },
    {
        id: 4,
        value: 'Куликов В.',
        email: 'example1mail.com',
        src: avatar1,
    },
    {
        id: 5,
        value: 'Кузнецов И.',
        email: 'example1mail.com',
        src: avatar2,
    },
    {
        id: 6,
        value: 'Кудрявцев И.',
        email: 'example1mail.com',
        src: avatar3,
    },
    {
        id: 7,
        value: 'Макаров Д.',
        email: 'example1mail.com',
        src: avatar3,
    },
]