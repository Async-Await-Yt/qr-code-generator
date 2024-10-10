import React, {useState, useEffect} from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import './qr.scss'
//2nd component
const QRWrapper = ({ bg, text }) => {
    
    const [w, setW] = useState(0) // width of qr canvas
    //use js window object 
    const width = window.innerWidth

    useEffect(() => {
      if(width < 1000) setW(250)
      else if(width > 1000) setW(400)
      else if(width > 1800) setW(500)
      
    }, [])
    
  return (
      <main id="wrapper">
          <QRCodeCanvas
              //size // we will change this depending on device width
              size={w}
              id='canvas'
              //includes margin
              includeMargin
              //for now //later we will change it by state
              value={text.toLowerCase()} // use lowercase text
              fgColor='#fff' // qr color
              bgColor={bg} // we will change it later
              
          />
    </main>
  )
}

export default QRWrapper