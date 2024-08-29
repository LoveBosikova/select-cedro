# React + TypeScript + Vite
 

# Чтобы запустить локально: 

### git clone https://github.com/LoveBosikova/select-cedro.git

### cd select-cedro

### cd select

### npm i

### npm run dev 

<image src="./select/src/assets/pageView.png" alt="Как выглядит демонстрация компонента">

### Ну, а теперь - технические аспекты

# Основное 

Весь компонент реальзован на функциональных компонентах. 
Без каких-либо флагов в props все внутренние элементы будут дефолтные. 

```
<SelectBasic 
  type={TYPES.DEFAULT}
  name='Test1' 
  placeholder='Placeholder' 
  items={simpleSelectCorrectData}>
  </SelectBasic>
```
Пример самого простого компонента.

На вход простого селекта с единичным выбором ожидается такой объект, при желании легко расширить под любые нужды:

```
export interface ISimpleSelectItem {
    id: number | undefined,
    value: string
}
```

Любой тип селекта возвращает ту же структуру данных в переменной value.

# Типизация селектов

Какой же тип селекта нужно будет рендерить, решается в компоненте SelectBasic. Типы перечислены в Map-у в файле globals.ts. 
Всё это дело при желании легко расширяется новыми типами селекта.

Главное, что нужно сделать при создании селекта - написать его тип type = DEFAULT | ACTIONSHEET | MULTISELECT | COMBOBOX
В зависимости от этого компонент уже будет требовать причитающиеся ему входные данные.

## Простой Select 

<image src="./select/src/assets/select.png" alt="Активный селект и disabled">

Чтобы сделать селект неактиынм, нужно передать флаг isDisabled={true} 

## Action sheet 

Из-за схожего функционала реализован как частный случай простого селекта. 
Код дефолтного actionSheet-а

```
<SelectBasic 
  name='Test3' 
  type={TYPES.ACTIONSHEET}
  placeholder='Placeholder' 
  isDisabled={false} 
  items={actionSheetCorrectData}
  isCustomSheetField={true}
  customSheetField={ActionSheet}
>
```
<image src="./select/src/assets/actionsheet.png" alt="Активный селект и disabled">

## Multi select

Реализован как отдельный компонент Multiselect.
Как это выглядит во внешнем коде:

```
<Multiselect 
  name='Test5' 
  type={TYPES.MULTISELECT}
  placeholder='Placeholder' 
  isDisabled={false} 
  items={multiSelectCorrectData}
  isCustomSheetField={true}
  customSheetField={ProfileSheet}
  isWithPadding={false}>
</Multiselect>
```

Флаг isWithPadding отвечает за наличие отстуах в списке дропдауна. Он не обязателей, по дефолту он в значении false,
то есть отступов нет.

<image src="./select/src/assets/multiselect.png" alt="Дефолтный мультиселект">

# Кастомизация элементов 

Кастомизация элемента дропдауна и таба("бара") происходит по одинаковому принципу -
нужный для отображения компонент передается через пропсу.

Например, хотим кастомную плашку дропдауна - передаем любую в пропс customSheetField и ставим флаг isCustomSheetField={true}.
Хотим кастомный таб - передаем нужный компонент таба в пропс customTab и ставим флаг isCustomTabs={true}.

Вот пример мультиселекта с кастомным дропдауном и с кастомным табом:

```
<Combobox
  name='Test8' 
  type={TYPES.COMBOBOX}
  placeholder='Выберите одну или несколько категорий' 
  isDisabled={false} 
  items={simpleSelectCorrectData}
  isCustomSheetField={true}
  customSheetField={ComboboxSheet}
  isCustomTabs={true}
  customTab={CustomSimpleBar}
  >
</Combobox>
```

<image src="./select/src/assets/custom.png" alt="Пример мультиселекта с кастомным дропдауном и кастомным табом">

