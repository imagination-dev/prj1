import Wrapper from "../../common/components/wrapper";
import s from './styles.module.css'
import TitleSupport from "../../common/ui-kit/titleSupport";
import NormalButton from "../../common/ui-kit/normalButton";
import {useFormik} from "formik";
import dayjs from "dayjs";
import Input from "../../common/ui-kit/input";
import SelectItem from "../../common/ui-kit/select";
import DateInput from "../../common/ui-kit/dateInput";

type ValuesType = {
    name: string,
    sex: string,
    birthday: string,
}

const sex = [
    {title: 'Женский', id: 1},
    {title: 'Мужской', id: 2},
]

const About = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            sex: '',
            birthday: null,
        },
        validate: (values) => {
            const errors = {} as ValuesType;

            if (!values.name) {
                errors.name = 'Обязательное поле';
            } else if (values.name.length < 2) {
                errors.name = 'Мин. длина 2 символа';
            }
            if (!values.sex) {
                errors.sex = 'Обязательное поле';
            }
            if (!values.birthday) {
                errors.birthday = "Обязательное поле";
            } else {
                const selectedDate = dayjs(values.birthday);
                if (!selectedDate.isValid()) {
                    errors.birthday = "Некорректная дата";
                }
            }

            return errors;
        },
        onSubmit: () => {
        }
    })
    return (
        <Wrapper className={s.wrapper}>
            <div className={s.box}>
                <TitleSupport title={'Расскажите немного о себе'}/>

                <div className={s.inputs}>
                    <Input
                        helperText={formik.touched.name ? formik.errors.name : ''}
                        error={Boolean(formik.touched.name && formik.errors.name)}
                        label={'Имя'} value={formik.values.name} onChange={formik.handleChange}
                        onBlur={formik.handleBlur} name={'name'}/>
                    <SelectItem onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.sex && formik.errors.sex)}
                                value={formik.values.sex}
                                onChange={formik.handleChange}
                                helperText={formik.touched.sex ? formik.errors.sex : ''}
                                name={'sex'}
                                data={sex} placeholder={'Пол'}/>
                    <DateInput helperText={formik.touched.birthday ? formik.errors.birthday : ''}
                               error={Boolean(formik.touched.birthday && formik.errors.birthday)}
                               label={'Дата рождения'} type={'birthday'} value={formik.values.birthday}
                               onChange={(value) => {
                                   formik.setFieldValue('birthday', value)
                               }} onBlur={formik.handleBlur} name={'birthday'}/>
                </div>

                <NormalButton w={185} onClick={formik.handleSubmit} bc={'rgba(251, 209, 103, 1)'}>Перейти к
                    урокам</NormalButton>
            </div>
        </Wrapper>
    );
};

export default About;