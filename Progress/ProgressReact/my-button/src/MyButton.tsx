import './App.css'

function sayHello(name:string): string {
    return `Hello! ${name}`;
}

const list = [
    {
        name: 'pikachu',
        type: 'electric',
    },
    {
        name: 'bulbasur',
        type: 'grass',
    }
];

function MyButton () {
    const title = 'My Button';
    const flipCoin = Math.random() > 0.5;
    const className = flipCoin ?  'button': 'button2';
    const templateList = list.map( item => <li>{`${item.name} - ${item.type}`}</li>);

    //let content;
    
    // if (flipCoin) {
    //     content = <h1>Login</h1>
    // } else {
    //     content = <h1>Welcome</h1>
    // }

    return(
        <>
            {/* {content} */}
            {flipCoin ? <h1>Login</h1> : <h1>Welcome</h1>}
            {flipCoin && <h1>Cara</h1>}
            <ul>
                { templateList }
            </ul>
            <button className={className}>
                {sayHello(title)}
            </button>
        </>
    )
}

export default MyButton;