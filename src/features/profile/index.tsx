import s from './styles.module.css'
import Wrapper from "../../common/components/wrapper";
import {classNames} from "../../common/utils/classNames.ts";
import NormalButton from "../../common/ui-kit/normalButton";
import {Avatar, useMediaQuery} from "@mui/material";
import TitleSupport from "../../common/ui-kit/titleSupport";
import Input from "../../common/ui-kit/input";
import {useFormik} from "formik";
import SelectItem from "../../common/ui-kit/select";
import {TextMaskCustom} from "../../common/ui-kit/numberInput";
import DateInput from "../../common/ui-kit/dateInput";
import dayjs from "dayjs";
import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {MobileContext} from "../../app/App.tsx";

const sex = [
    {title: 'Женский', id: 1},
    {title: 'Мужской', id: 2},
]

type ValuesType = {
    name: string,
    lastName: string,
    mobile: string,
    email: string,
    sex: string,
    birthday: string,
}


const Profile = () => {
    const {mask} = useContext(MobileContext)

    const [disabled, setDisabled] = useState(true)

    const navigate = useNavigate()
    const query768 = useMediaQuery('(max-width:768px)');
    const formik = useFormik({
        initialValues: {
            name: "",
            mobile: '',
            email: '',
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

            if (!values.mobile) {
                errors.mobile = 'Обязательное поле';
            } else if (values.mobile.length !== mask.length) {
                errors.mobile = "Введите корректный номер";
            }

            if (!values.email) {
                errors.email = 'Обязательное поле';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Невалидный email адрес';
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
            setDisabled(true)
            // setOpenModal(true)
        }
    })


    return (
        <Wrapper className={s.wrapper}>
            <div className={s.main}>
                <div className={classNames(s.box, s.box_left)}>
                    <NormalButton w={'100%'} onClick={() => navigate('/my-accesses')} bc={'rgba(251, 209, 103, 1)'}>
                        Управление доступами
                    </NormalButton>
                </div>
                <div className={classNames(s.box, s.box_right)}>
                    {query768 && <TitleSupport align={'center'} title={'Мой профиль'}/>}

                    <Avatar src={''}
                            sx={{
                                cursor: 'pointer',
                                width: !query768 ? '165px' : '135px', height: !query768 ? '165px' : '135px'
                            }}/>

                    <div className={s.box_right_content}>
                        {!query768 && <TitleSupport align={'left'} title={'Мой профиль'}/>}

                        <div className={s.inputs}>
                            <Input
                                disabled={disabled}
                                helperText={formik.touched.name ? formik.errors.name : ''}
                                error={Boolean(formik.touched.name && formik.errors.name)}
                                label={'Имя'} value={formik.values.name} onChange={formik.handleChange}
                                onBlur={formik.handleBlur} name={'name'}/>

                            <Input
                                type={'tel'}
                                disabled={disabled}
                                InputProps={{
                                    inputComponent: TextMaskCustom as any,
                                }}
                                id={'1'}
                                helperText={formik.touched.mobile ? formik.errors.mobile : ''}
                                error={Boolean(formik.touched.mobile && formik.errors.mobile)}
                                label={'Номер телефона'} value={formik.values.mobile} onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name={'mobile'}/>

                            <Input
                                disabled={disabled}
                                helperText={formik.touched.email ? formik.errors.email : ''}
                                error={Boolean(formik.touched.email && formik.errors.email)}
                                label={'E-mail'} type={'email'} value={formik.values.email}
                                onChange={formik.handleChange} onBlur={formik.handleBlur} name={'email'}/>

                            <SelectItem onBlur={formik.handleBlur}
                                        disabled={disabled}
                                        error={Boolean(formik.touched.sex && formik.errors.sex)}
                                        value={formik.values.sex}
                                        onChange={formik.handleChange}
                                        helperText={formik.touched.sex ? formik.errors.sex : ''}
                                        name={'sex'}
                                        data={sex} placeholder={'Пол'}/>
                            <div className={s.date_input}>
                                <DateInput disabled={disabled}
                                           helperText={formik.touched.birthday ? formik.errors.birthday : ''}
                                           error={Boolean(formik.touched.birthday && formik.errors.birthday)}
                                           label={'Дата рождения'} type={'birthday'} value={formik.values.birthday}
                                           onChange={(value) => {
                                               formik.setFieldValue('birthday', value)
                                           }} onBlur={formik.handleBlur} name={'birthday'}/>
                            </div>
                        </div>

                        <NormalButton w={130} className={s.btn} onClick={(e: any) => {
                            if (disabled) {
                                setDisabled(false)
                            } else {
                                formik.handleSubmit(e)
                            }

                        }}
                                      bc={'rgba(251, 209, 103, 1)'}>
                            {disabled ? 'Изменить' : 'Сохранить'}
                        </NormalButton>

                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Profile;