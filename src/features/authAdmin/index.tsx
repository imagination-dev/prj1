import Wrapper from "../../common/components/wrapper";
import s from './styles.module.css'
import TitleSupport from "../../common/ui-kit/titleSupport";
import Button from "../../common/ui-kit/button";
import {useFormik} from "formik";
import Input from "../../common/ui-kit/input";
import {useContext} from "react";
import {AuthContext} from "../../app/App.tsx";
import {toast} from "react-toastify";

const AuthAdmin = () => {
    const {login} = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {login: "", password: ""},
        validate: (values) => {
            const errors: { login?: string, password?: string } = {};

            if (!values.login) {
                errors.login = 'Обязательное поле';
            } else if (values.login.length < 4) {
                errors.login = 'мин длина 4 символа';
            }
            if (!values.password) {
                errors.password = 'Обязательное поле';
            } else if (values.password.length < 4) {
                errors.password = 'мин длина 4 символа';
            }

            return errors;
        },
        onSubmit: (values) => {
            if (values.login === 'admin' && values.password === 'admin') {
                login()
            } else {
                toast.error('Неверный логин или пароль')
            }
        }
    })

    return (
        <Wrapper className={s.wrapper}>
            <form className={s.box} onSubmit={formik.handleSubmit}>
                <TitleSupport title={'Войдите, чтобы получить доступ к сервису'} align={'center'}/>

                <div className={s.inputs}>
                    <Input onBlur={formik.handleBlur}
                           helperText={formik.touched.login ? formik.errors.login : ''}
                           error={Boolean(formik.touched.login && formik.errors.login)}
                           name={'login'} onChange={formik.handleChange}
                           value={formik.values.login} label={'Логин'}/>

                    <Input type={'password'} onBlur={formik.handleBlur}
                           helperText={formik.touched.password ? formik.errors.password : ''}
                           error={Boolean(formik.touched.password && formik.errors.password)}
                           name={'password'} onChange={formik.handleChange}
                           value={formik.values.password} label={'Пароль'}/>
                </div>

                <Button className={s.btn} mw={160} type={'submit'}>Войти</Button>
            </form>
        </Wrapper>
    );
};

export default AuthAdmin;