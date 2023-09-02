import React from 'react'

export default function About(props) {
    
    // const [myStyle , setMyStyle] = useState({
    //     backgroundColor:'white',
    //     color:'black',
    // })
    // const [btnBgColor, setbtnBgColor] = useState({
    //     backgroundColor:'black',
    //     color:'white'
    // })
    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    // const toggleStyle =()=>{
    //         if (myStyle.backgroundColor === 'white'){
    //             setMyStyle({
    //                 backgroundColor:'black',
    //                 color:'white'
    //             })
    //             setbtnText('Enable White Mode');
    //             setbtnBgColor({backgroundColor:"white",color:'black'})
    //         }
    //         else{
    //             setMyStyle({
    //                 backgroundColor:'white',
    //                 color:'black'
    //             })
    //             setbtnText("Enable Dark Mode");
    //             setbtnBgColor({backgroundColor:'black',color:'white'})
    //         }
    // }

    let myStyle={
        color: props.mode==='dark'?'white':'#02101b',
        backgroundColor:props.mode === 'dark'?'#02101b':'white'
    }

  return (
    <div className='container ' style={myStyle}>
            <h2 className='my-3 p-3'>About Us</h2>
            <div className="accordion" id="accordionExample">
             <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}> 
                    Free to use
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                   The website is 100% free of cost and open for everyone.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}> 
                    explore the text
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This website helps you to explore your given text and use its full utility
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    habijabi
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nemo velit consequatur officiis debitis assumenda illum perspiciatis qui ipsam corporis.
                </div>
                </div>
            </div>
            </div>
            {/* <button className='btn m-3' style={btnBgColor} onClick={toggleStyle} >{btnText}</button> */}
    </div>
  )
}
