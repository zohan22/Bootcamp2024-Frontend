import './App.css'
import { useState } from 'react'

type Props = {
    title: string;
};


function Button({title}: Props) {
    const [count, setCount] = useState(0);


    const onPress = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    };

    return(
        <>
            <button onClick={ onPress }>
            {title}
            </button>
            <p>{count}</p>
        </>
    )
}

export default Button;