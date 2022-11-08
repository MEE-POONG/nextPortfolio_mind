import { useState , useEffect} from 'react'

export default function App(){

    const [buttonText,setButtonText] = useState("Click me plese");
    const [sum,setIncremet] = useState(0); 
    const [data , setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${sum}`)
            .then(res => res.json())
            .then(data => setData(data));

    },[sum])

    console.log(data)

    return(
    <div>

        <li><a href="/skill"> กลับหน้า skill</a></li>
        <button onClick={() => setButtonText("Thank")}>{buttonText}</button>
        <h1>{sum}</h1>
        <button onClick={() => setIncremet(sum +1)}> Clik me to increment</button>
        <button onClick={() => setIncremet(sum -1)}> Clik me to decrement</button>
    </div>

    )

}