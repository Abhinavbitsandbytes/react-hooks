import React, {useState} from 'react'

function HookCounter(){

// this function accepts an argument which is the initial value of the state property and returns the current value of the state property and a method which is capable of updating that state property
const [count, setCount] = useState(0)

    return(
        <div>
<button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}
export default HookCounter

// rules of hooks
// *Only call hooks at the top level 
// *Don't call hooks inside loopsa, conditions, or nested functions
