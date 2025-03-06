import s from './styles.module.css'
import Wrapper from "../../common/components/wrapper";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {useState} from "react";
import ExpandIcon from '../../common/assets/expand.svg?react'
import {classNames} from "../../common/utils/classNames.ts";
import {useFormik} from "formik";
import ModalSuccess from "../../common/modals/modalSucssess";
import TextArea from "../../common/ui-kit/textArea";
import Button from "../../common/ui-kit/button";
import TitleSupport from "../../common/ui-kit/titleSupport";

const Questions = () => {
    const [openModal, setOpenModal] = useState(false)
    const formik = useFormik({
        initialValues: {text: ""},
        validate: (values) => {
            const errors: { text?: string } = {};

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

    const [expanded, setExpanded] = useState<any>({
        0: false,
        1: false,
        2: false,
    });

    const handleChange = (panel: any) => (_: any, isExpanded: boolean) => {
        setExpanded((prev: any) => ({
            ...prev,
            [panel]: isExpanded,
        }));
    };

    const data = [
        {
            title: "Видео-урок не загружается",
            description: "Убедитесь в стабильности интернет-соединения, обновите страницу урока или попробуйте открыть курс в другом браузере."
        },
        {
            title: "Куда отправить домашнее задание",
            description: "Для отправки выполненной работы перейдите в чат с куратором на странице урока, прикрепите фотографию к сообщению и отправьте его."
        },
        {
            title: "Куратор не отвечает",
            description: "Куратор помогает по всем вопросам и проверяет домашние задания в течение суток. Если ответ ещё не поступил, не переживайте, скоро с вами свяжутся."
        },
    ]
    return (
        <Wrapper className={s.wrapper}>
            <>
                {openModal && <ModalSuccess open={openModal} handleClose={handleClose}/>}
                <TitleSupport title={'Частые вопросы'}/>
                <div className={s.items}>
                    {data.map((el, i) => {
                        return <Accordion key={i}
                                          expanded={expanded[i] || false}
                                          onChange={handleChange(i)}
                                          sx={{
                                              borderRadius: '20px !important',
                                              padding: '0 30px !important',
                                              "&.MuiAccordion-root": {
                                                  margin: 0,
                                                  boxShadow: "none",
                                                  "&:before": {display: "none"},
                                              },
                                              "&.Mui-expanded": {
                                                  margin: 0,
                                              },
                                              "& .MuiButtonBase-root": {
                                                  minHeight: 'fit-content !important',
                                                  height: '78px',
                                              },
                                              "& .MuiAccordionSummary-content": {
                                                  margin: '0px 0 !important',

                                              },
                                              '@media screen and (max-width: 768px)': {
                                                  padding: '0 4px !important',
                                                  borderRadius: '10px !important',
                                                  "& .MuiButtonBase-root": {
                                                      minHeight: 'fit-content !important',
                                                      height: '58px',
                                                  },
                                              }
                                          }}>
                            <AccordionSummary
                                expandIcon={<div className={classNames(s.expand, expanded[i] && s.expand_open)}>
                                    <ExpandIcon/>
                                </div>}
                                aria-controls={`panel${i}-content`}
                                id={`panel${i}-header`}
                            >
                                <p className={s.title}>{el.title}</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className={s.description}>
                                    {el.description}
                                </p>
                            </AccordionDetails>
                        </Accordion>
                    })}

                </div>

                <div className={s.sender_box}>
                    <div className={s.text_box}>
                        <p className={s.text_box_title}>Не нашли нужного ответа?</p>
                        <p className={s.text_box_description}>Если у вас другая проблема, заполните форму ниже и
                            подробно опишите вашу ситуацию. Мы постараемся помочь вам как можно скорее.</p>
                    </div>

                    <form onSubmit={formik.handleSubmit} className={s.action_box}>
                        <TextArea withTools={true} onBlur={formik.handleBlur}
                                  placeholder={'Введите ваш вопрос '}
                                  helperText={formik.touched.text ? formik.errors.text : ''}
                                  error={Boolean(formik.touched.text && formik.errors.text)}
                                  name={'text'} onChange={formik.handleChange}
                                  value={formik.values.text}/>
                        <Button type={'submit'} onClick={() => {
                        }}>Отправить</Button>
                    </form>
                </div>
            </>
        </Wrapper>
    );
};

export default Questions;