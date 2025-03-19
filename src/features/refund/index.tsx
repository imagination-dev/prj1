import s from './styles.module.css'
import Wrapper from "../../common/components/wrapper";
import TitleSupport from "../../common/ui-kit/titleSupport";
import SelectItem from "../../common/ui-kit/select";
import {useFormik} from "formik";
import ModalSuccess from "../../common/modals/modalSucssess";
import TextArea from "../../common/ui-kit/textArea";
import Button from "../../common/ui-kit/button";
import {useState} from "react";

const data = [
    {title: 'Каллиграфия. Пробный доступ', id: 1},
    {title: 'Скетчинг. Пробный доступ', id: 2},
    {title: 'Леттеринг. Пробный доступ', id: 3},
    {title: 'Фешен-иллюстрация. Пробный доступ ', id: 4},
    {title: 'Каллиграфия. Полный доступ', id: 5},
    {title: 'Скетчинг. Полный доступ', id: 6},
    {title: 'Леттеринг. Полный доступ', id: 7},
    {title: 'Фешен-иллюстрация. Полный доступ', id: 8},
    {title: 'Доступ к 10 творческим курсам', id: 9},
]

const Refund = () => {
    const [openModal, setOpenModal] = useState(false)

    const formik = useFormik({
        initialValues: {text: "", cource: ''},
        validate: (values) => {
            const errors: { text?: string, cource?: string } = {};

            if (!values.text) {
                errors.text = 'Обязательное поле';
            }
            if (!values.cource) {
                errors.cource = 'Обязательное поле';
            }

            return errors;
        },
        onSubmit: () => {
            setOpenModal(true)
        }
    })


    const handleClose = () => {
        formik.resetForm()
        setOpenModal(false)
    }
    return (
        <Wrapper className={s.wrapper}>
            <div className={s.box}>
                {openModal && <ModalSuccess open={openModal} handleClose={handleClose}/>}
                <div className={s.description_box}>
                    <TitleSupport title={'Возрват средств'}/>
                    <p className={s.desscription}>Для обеспечения наиболее эффективной и быстрой обратной связи
                        рекомендуем максимально подробно описать причину возврата, а так же выбрать курс, по которому
                        хотите оформить возврат.</p>
                </div>

                <form onSubmit={formik.handleSubmit} className={s.action_box}>
                    <SelectItem onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.cource && formik.errors.cource)}
                                value={formik.values.cource}
                                onChange={formik.handleChange}
                                helperText={formik.touched.cource ? formik.errors.cource : ''}
                                name={'cource'}
                                data={data} placeholder={'Выберите курс'}/>
                    <TextArea withTools={true} onBlur={formik.handleBlur}
                              placeholder={'Введите ваш вопрос '}
                              helperText={formik.touched.text ? formik.errors.text : ''}
                              error={Boolean(formik.touched.text && formik.errors.text)}
                              name={'text'} onChange={formik.handleChange}
                              value={formik.values.text}/>
                    <Button mw={160} type={'submit'} onClick={() => {
                    }}>Отправить</Button>
                </form>

            </div>
        </Wrapper>
    );
};

export default Refund;