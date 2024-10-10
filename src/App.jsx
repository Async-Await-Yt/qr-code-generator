import React, { useState } from 'react'
import components from '@components'

const { Header, QRWrapper, Form } = components

const App = () => {

  const [text, setText] = useState('')
  const [bg, setBg] = useState('dodgerblue') // initial color

  return (
    <>
      <Header bg={bg} setBg={setBg} />
      <main id="app">
        <QRWrapper bg={bg} text={text} />
        <Form bg={bg} text={text} setText={setText} />
        {/* // for button bg */}
    </main>
      </>
  )
}

export default App