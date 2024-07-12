import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Vipul', 'Ravi', 'Simant'];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }

    const handleClick = () => {
      console.log('You clicked it!')
    }

    const handleClick2 = (name) => {
      console.log(`${name} was Clicked`)
    }

    const handleClick3 = (e) => {
      console.log(`${e.target.innerText} was Clicked`)
    }

  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click it</button>
        <button onClick={() => {handleClick2('Vipul')}}>Click it</button>
        <button onClick={(e) => {handleClick3(e)}}>Click it</button>
    </main>
  )
}

export default Content
