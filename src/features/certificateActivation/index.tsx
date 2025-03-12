import Wrapper from "../../common/components/wrapper";
import s from './styles.module.css'
import TitleSupport from "../../common/ui-kit/titleSupport";
import Button from "../../common/ui-kit/button";
import {useFormik} from "formik";
import SelectItem from "../../common/ui-kit/select";
import Input from "../../common/ui-kit/input";
import {TextMaskCustom} from "../../common/ui-kit/numberInput";

const curses = [
    {title: 'Курс 1', id: 1},
    {title: 'Курс 2', id: 2},
    {title: 'Курс 3', id: 3},
    {title: 'Курс 4', id: 4},
    {title: 'Курс 5', id: 5},
]

type ValuesType = {
    mobile: string,
    email: string,
    curses: string,
}


const CertificateActivation = () => {
    const formik = useFormik({
        initialValues: {
            mobile: '',
            email: '',
            curses: '',
        },
        validate: (values) => {
            const errors = {} as ValuesType;
            if (!values.mobile) {
                errors.mobile = 'Обязательное поле';
            } else if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(values.mobile)) {
                errors.mobile = "Введите корректный номер";
            }

            if (!values.email) {
                errors.email = 'Обязательное поле';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Невалидный email адрес';
            }
            if (!values.curses) {
                errors.curses = 'Обязательное поле';
            }


            return errors;
        },
        onSubmit: () => {
            // setOpenModal(true)
        }
    })

    return (
        <Wrapper className={s.wrapper}>
            <div className={s.box}>
                <TitleSupport title={'Активация сертификата'}/>

                <form onSubmit={formik.handleSubmit} className={s.inputs}>
                    <SelectItem onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.curses && formik.errors.curses)}
                                value={formik.values.curses}
                                onChange={formik.handleChange}
                                helperText={formik.touched.curses ? formik.errors.curses : ''}
                                name={'curses'}
                                data={curses} placeholder={'Выберите курс'}/>
                    <Input
                        helperText={formik.touched.email ? formik.errors.email : ''}
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        label={'E-mail'} type={'email'} value={formik.values.email}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} name={'email'}/>


                    <Input
                        InputProps={{
                            inputComponent: TextMaskCustom as any,
                        }}
                        id={'1'}
                        helperText={formik.touched.mobile ? formik.errors.mobile : ''}
                        error={Boolean(formik.touched.mobile && formik.errors.mobile)}
                        label={'Номер телефона'} value={formik.values.mobile} onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name={'mobile'}/>

                    <Button className={s.btn} type={'submit'}>Активировать</Button>
                </form>


            </div>
        </Wrapper>
    );
};

export default CertificateActivation;