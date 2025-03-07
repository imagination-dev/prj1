import s from './styles.module.css'

type Aligh = 'center' | 'left' | 'right'

interface Props {
    title: string
    align?: Aligh
}

const TitleSupport = ({title, align = 'center'}: Props) => {
    return (
        <h3 className={s.title} style={{
            textAlign: align
        }}>
            {title}
        </h3>
    );
};

export default TitleSupport;