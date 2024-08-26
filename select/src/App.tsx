import './App.scss'
import Select from './components/select/select'
import Title from './components/title/title'

function App() {
  // Страничка для презентации всех видов селекта

  return (
    <main className='main'>
      <div className='contentWrap'>
        <section className='select'>
          <Title>Select</Title>
            <ul className='select__list'>
              <li className='select__item'>
                <Select name='Test1' placeholder='Default one'></Select>
              </li>
              <li className='select__item'>
                <Select name='Test2' placeholder='Disabled' isActive={false}></Select>
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
