import { useState } from "react"

const Count = () => {
    // awal mula count berisi 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            // setCount digunakan untuk set nilai dari count
            <button onClick={() => setCount(count + 1)}>
                Click me + 1
            </button>
            <button onClick={() => setCount(count - 1)}>
                Click me - 1
            </button>
        </div>
    );
}

export default Count