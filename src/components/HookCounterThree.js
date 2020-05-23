import React, {useState} from 'react'

function HookCounterThree(){
    const [name, setName] = useState({firstName:'', lastName:''})
return(
    <div>
        <form>
            <input 
            type="text"
            value={name.firstName}
            onChange={e => setName({...name,firstName:e.target.value})}>
            </input>
            <input type="text"
            value={name.lastName}
            onChange={e => setName({...name, lastName:e.target.value})}>
            </input>
<h2>Your first name is - {name.firstName}</h2>
<h2>Your last name is - {name.lastName}</h2>
        </form>
    </div>
)
}
export default HookCounterThree

// setState merge the state while useState setter function don't merge the state. wew have to do it manually(spread operator)

//how to read {...name, lastName:e.target.value} ? - copy every properety in the name object and override just the first name field with different value