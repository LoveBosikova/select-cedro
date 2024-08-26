import style from './shevron.module.scss'

interface IPropsShevron {
    isActive: boolean
}

// Стрелочка селекта, использует производительную свг-анимацию

function Chevron (props: IPropsShevron) {

    const { isActive } = props;

    return (
        <svg className={style.chevron} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isActive ? <animateTransform attributeName="transform"
                        type="rotate"
                        values="0; -5"
                        keyTimes="0; 1"
                        keySplines="0 0 0.59 1; 0 0 0.59 1"
                        calcMode="spline"
                        dur="5s"
                        additive="sum"
                        repeatCount="1"/> : 
                        <animateTransform attributeName="transform"
                        type="rotate"
                        values="-5; 0"
                        keyTimes="0; 1"
                        keySplines="0 0 0.59 1; 0 0 0.59 1"
                        calcMode="spline"
                        dur="5s"
                        additive="sum"
                        repeatCount="1"/>}
            <path d="M4.43451 7.43744C4.74693 7.12502 5.25346 7.12502 5.56588 7.43744L10.0002 11.8718L14.4345 7.43744C14.7469 7.12502 15.2535 7.12502 15.5659 7.43744C15.8783 7.74986 15.8783 8.25639 15.5659 8.56881L10.5659 13.5688C10.2535 13.8812 9.74693 13.8812 9.43451 13.5688L4.43451 8.56881C4.12209 8.25639 4.12209 7.74986 4.43451 7.43744Z" fill="#130817" fillOpacity="0.3"/>
        </svg>
    )
}

export default Chevron;