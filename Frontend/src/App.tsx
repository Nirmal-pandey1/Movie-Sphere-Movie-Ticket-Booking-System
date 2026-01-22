import { useState } from 'react'
import { Slider } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 const { hovered, ref } = useHover();
  return (
    <>
      <h1 className="text-amber-100">hello </h1>
      <h1>just some basic git check</h1>
       <Slider
      defaultValue={40}
      min={10}
      max={90}
      ref={ref}
      label={null}
      styles={{
        thumb: {
          transition: 'opacity 150ms ease',
          opacity: hovered ? 1 : 0,
        },
      }}
    />
    </>
  )
}

export default App
