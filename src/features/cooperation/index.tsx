import s from './styles.module.css'
import Wrapper from "../../common/components/wrapper";
import TitleSupport from "../../common/ui-kit/titleSupport";
import Button from "../../common/ui-kit/button";
import Input from "../../common/ui-kit/input";
import {useFormik} from "formik";
import TextArea from "../../common/ui-kit/textArea";
import {useState} from "react";
import ModalSuccess from "../../common/modals/modalSucssess";

const Cooperation = ({title}: { title: string }) => {
    const [openModal, setOpenModal] = useState(false)
    const formik = useFormik({
        initialValues: {email: "", text: ""},
        validate: (values) => {
            const errors: { email?: string, text?: string } = {};

            if (!values.email) {
                errors.email = 'Обязательное поле';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Невалидный email адрес';
            }
            if (!values.text) {
                errors.text = 'Обязательное поле';
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
            <form className={s.box} onSubmit={formik.handleSubmit}>
                {openModal && <ModalSuccess open={openModal} handleClose={handleClose}/>}
                <TitleSupport title={title}/>
                <div className={s.items}>
                    <Input type={'email'} onBlur={formik.handleBlur}
                           helperText={formik.touched.email ? formik.errors.email : ''}
                           error={Boolean(formik.touched.email && formik.errors.email)}
                           name={'email'} onChange={formik.handleChange}
                           value={formik.values.email} label={'E-mail'}/>
                    <TextArea withTools={true} onBlur={formik.handleBlur}
                              placeholder={'Опишите ваше предложение'}
                              helperText={formik.touched.text ? formik.errors.text : ''}
                              error={Boolean(formik.touched.text && formik.errors.text)}
                              name={'text'} onChange={formik.handleChange}
                              value={formik.values.text}/>
                </div>
                <Button mw={160} type={'submit'} onClick={() => {
                }}>Отправить</Button>
            </form>
        </Wrapper>
    );
};

export default Cooperation;