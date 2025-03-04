import s from './styles.module.css'

interface IProps {
    items: number[]
    active: number
    type?: 'light' | 'dark'
}

const DotsSwiper = ({items, active, type = 'dark'}: IProps) => {
    return (
        <div className={s.mobile_dots}>
            {items.map((el) => <div key={el} style={{
                backgroundColor: active === el ? (type === 'dark' ? 'rgba(42, 42, 44, 1)' : '#fff') : (type === 'dark' ? 'rgba(42, 42, 44, 0.3)' : '#8d8d8d')
            }} className={s.dot}/>)}
        </div>
    );
};

export default DotsSwiper;