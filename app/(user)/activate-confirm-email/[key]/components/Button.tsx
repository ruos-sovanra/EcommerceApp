'use client'
import style from "./style.module.css";
type Props = {
    title: string;
    onClick?: () => void;
    classname?: string;
};

const Button = ({ title, onClick, classname }: Props) => {
    return (
        <button onClick={onClick} className={`${style.container} ${classname}`}>
            {title}
        </button>

    );
}

export default Button;