import React, {useContext} from 'react';
import {IMaskInput} from "react-imask";
import {MobileContext} from "../../../app/App.tsx";

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
    mask: string;
}

export const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const {mask} = useContext(MobileContext)
        const {onChange, ...other} = props;


        return (
            <IMaskInput
                {...other}
                mask={mask}
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
