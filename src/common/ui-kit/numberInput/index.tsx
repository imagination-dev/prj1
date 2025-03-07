import React from 'react';
import {IMaskInput} from "react-imask";

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

export const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {

        const {onChange, ...other} = props;
        return (
            <IMaskInput
                {...other}
                mask="+7 (000) 000-00-00"
                definitions={{
                    "#": /[1-9]/,
                }}
                inputRef={ref} // Важно передавать ref
                onAccept={(value: any) => onChange({target: {name: props.name, value}})}
                // overwrite
            />
        );
    },
);
