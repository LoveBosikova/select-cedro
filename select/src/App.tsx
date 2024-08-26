import './App.scss'
import SelectBasic from './components/select/selectBasic'
import Title from './components/title/title'

import { simpleSelectCorrectData } from './mocks/simpleSelectMocks'

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
                name='Test1' 
                placeholder='Default one' 
                items={simpleSelectCorrectData}>
                </SelectBasic>
              </li>
              <li className='select__item'>
                <SelectBasic 
                name='Test2' 
                placeholder='Disabled' 
                isDisabled={true} 
                items={simpleSelectCorrectData}>
                </SelectBasic>
              </li>
            </ul>
        </section>
        <section className='select--actionSheet'>
        <Title>Action sheet</Title>
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
