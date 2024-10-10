import './form.scss'

// 3rd
const Form = ({text, setText, bg}) => {

    //download function //implemnt later
    const handleDownload = () => {
        
        //for downloading qr canvas
        //access canvas
        const canvas = document.getElementById('canvas')
        // convert to toDataUrl()
        const canvas_ = canvas.toDataURL()

        //for downloading we need anchor tag
        //step1. create anchor
        const a = document.createElement('a')

        a.href = canvas_ //whats to download
        a.download = "qr_code.png" // filename

        //step2. append into DOM
        document.body.appendChild(a)
        //click on anchor
        a.click()
        //remove
        document.body.removeChild(a)

    }

  return (
      <main id="form">
          <input type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="www.google.com" />
          <button
              onClick={handleDownload}
              style={{background: bg}}
          >
              download
          </button>
    </main>
  )
}

export default Form