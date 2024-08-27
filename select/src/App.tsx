import './App.scss'
import SelectBasic from './components/select/selectBasic'
import Title from './components/title/title'

import { TYPES, CUSTOMS, CUSTOM_ELEMENTS } from './utils/globals';


import { simpleSelectCorrectData } from './mocks/simpleSelectMocks';
import { actionSheetCorrectData } from './mocks/actionSheetMocks';
import ActionSheet from './components/sheetfield/actionSheet';

function App() {
  // Страничка для презентации всех видов селекта


  return (
    <main className='main'>
      <div className='contentWrap'>
        <section className='select'>
          <Title>Select</Title>
            <ul className='select__list'>
              <li className='select__item'>
                <SelectBasic 
                type={TYPES.DEFAULT}
                name='Test1' 
                placeholder='Default one' 
                items={simpleSelectCorrectData}>
                </SelectBasic>
              </li>
              <li className='select__item'>
                <SelectBasic 
                name='Test2' 
                type={TYPES.DEFAULT}
                placeholder='Disabled' 
                isDisabled={true} 
                items={simpleSelectCorrectData}>
                </SelectBasic>
              </li>
            </ul>
        </section>
        <section className='select--actionSheet'>
        <Title>Action sheet</Title>
        <ul className='select__list'>
          <li className='select__item'>
            <SelectBasic 
              name='Test3' 
              type={TYPES.ACTIONSHEET}
              placeholder='Action Sheet' 
              isDisabled={false} 
              items={actionSheetCorrectData}
              isCustomSheetField={true}
              customSheetField={ActionSheet}
              >
            </SelectBasic>
          </li>
          <li className='select__item'>
          <SelectBasic 
              name='Test3' 
              type={TYPES.ACTIONSHEET}
              placeholder='Disabled Action Sheet' 
              isDisabled={true} 
              items={actionSheetCorrectData}
              isCustomSheetField={true}
              customSheetField={ActionSheet}
              >
            </SelectBasic>
          </li>
        </ul>
        </section>
        <section className='select--multi'>
        <Title>Multi select</Title>
        </section>
        <section className='select--combobox'>
        <Title>Combobox</Title>
        </section>
      </div>
    </main>
  )
}

export default App
