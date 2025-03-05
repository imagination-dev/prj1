import {ChangeEvent, KeyboardEvent, createRef, RefObject} from "react";
import s from './styles.module.css'
import {classNames} from "../../../../../common/utils/classNames.ts";

interface IProps {
    code: string[]
    setCode: (code: string[]) => void
    isError?: boolean
}

const CodeInput = ({code, setCode, isError = false}: IProps) => {
    const inputRefs: RefObject<HTMLInputElement | null>[] = Array(6).fill(6).map(() => createRef());

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {

        const newCode = [...code];
        newCode[index] = e.target.value.slice(0, 1);
        setCode(newCode);

        if (newCode[index] !== '' && index < 5) {
            inputRefs[index + 1].current!.focus();
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
            e.preventDefault(); // Запрещаем ввод
        }
        if (e.key === 'Backspace' && index > 0 && code[index] === '') {
            inputRefs[index - 1].current!.focus();
        }
    };

    return (
        <div className={s.box}>
            {code.map((value, index) => (
                <input
                    className={classNames(s.input, isError && s.error)}
                    key={index}
                    ref={inputRefs[index]}
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                />
            ))}
        </div>
    );
};

export default CodeInput;