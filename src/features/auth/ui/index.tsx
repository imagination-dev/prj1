import Wrapper from "../../../common/components/wrapper";
import loginIcon from '../../../common/assets/login.png'
import s from './style.module.css'
import {useFormik} from "formik";
import Button from "../../../common/ui-kit/button";
import Input from "../../../common/ui-kit/input";
import {useState} from "react";
import ConfirmModal from "./confirmModal";

const Login = () => {

    const [openCodeModal, setOpenCodeModal] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {email: ""},
        validate: (values) => {
            const errors: { email?: string } = {};

            if (!values.email) {
                errors.email = 'Обязательное поле';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Невалидный email адрес';
            }
            return errors;
        },
        onSubmit: () => {
            setOpenCodeModal(true)
        }
    })

    return (
        <Wrapper className={s.wrapper}>
            <>
                {openCodeModal && <ConfirmModal value={formik.values.email} isOpen={openCodeModal}
                                                handleClose={() => setOpenCodeModal(false)}/>}
                <form className={s.login_form} onSubmit={formik.handleSubmit}>
                    <h3 className={s.title}>Войдите, чтобы получить доступ к урокам</h3>
                    <Input onBlur={formik.handleBlur}
                           helperText={formik.touched.email ? formik.errors.email : ''}
                           error={Boolean(formik.touched.email && formik.errors.email)}
                           name={'email'} onChange={formik.handleChange}
                           value={formik.values.email} label={'E-mail'}/>
                    <Button type={'submit'} className={s.btn}>Войти</Button>
                </form>
                <img className={s.logo} src={loginIcon} alt="logo"/>
                <h3 className={s.title_mobile}>Войдите, чтобы получить доступ к урокам</h3>
            </>
        </Wrapper>
    );
};

export default Login;