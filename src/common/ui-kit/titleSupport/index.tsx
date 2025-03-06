import s from './styles.module.css'
const TitleSupport = ({title}:{title:string}) => {
    return (
        <h3 className={s.title}>
            {title}
        </h3>
    );
};

export default TitleSupport;