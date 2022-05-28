import React, {FC, useState} from 'react';

export enum cardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: number;
    height?: number;
    children?: React.ReactChild | React.ReactNode
    variant: cardVariant;
    // onClick?: () => void;                //onClick obisnuit
    // onClick?: (num: number) => void;     //onClick cu functie in el, si nu e obligatorie
    onClick: (num: () => void) => void;
}

//React.FC -> FC
const Card: FC<CardProps> = ({
        width,
        height,
        variant,
        onClick,
        children,
    }) => {

    const [state, setState] = useState(0);

    const increment = () => {
        setState(state + 1);
    }

    return (
        <div style={{width, height,
            border: variant === cardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === cardVariant.primary ? 'lightgray' : ''}}
             // onClick={onClick}>                                      //onClick obisnuit
             // onClick={() => onClick ? onClick(state) : null}         //onClick cu functie in el, si nu e obligatorie
             onClick={() => {
                 onClick(increment);
             }}
        >
            {children}      {/*pentru a putea crea noi HTML-Elements*/}
        </div>
    );
};

export default Card;