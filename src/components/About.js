
export default function About(props) {

//   const [myStyle, setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white',
//   })
let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white'
}

  return (
    <div className='container' style={myStyle}>
      <h1 className='my-3' style={{ color:props.mode==='dark'?'white':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample">

        {/* Section 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              “Quickly transform your text by converting to UPPERCASE/lowercase, removing extra spaces, copying with one click, and checking word or character counts along with estimated reading time. With live preview, what you see is exactly what you get.”
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              “This tool is completely free to use—no sign-up, no subscription, and no hidden charges. Just open it in your browser and start analyzing your text instantly.”
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              “TextUtils works seamlessly across all modern browsers including Chrome, Firefox, Edge, and Safari. It is fully responsive, ensuring a smooth experience on desktop, tablet, and mobile devices.”
            </div>
          </div>
        </div>

      </div>

      {/* Toggle Button */}
      {/* Agar toggle dark/light mode ka button chahiye to niche wala uncomment kar do */}
      {/* <div className='container my-3'>
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
      </div> */}
    </div>
  )
}
