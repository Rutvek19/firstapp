import React, { useState } from 'react'


export default function Form(props) {

    const upprbtn = () => {
        // console.log("Clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase", "success")
    }
    const lwrbtn = () => {
        // console.log("Clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase", "success")

    }
    const clrbtn = () => {
        // console.log("Clicked")
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }
    const onchange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // const [btntxt, setBtnTxt] = useState("Enable dark Mode")
    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color: 'black',
    //         backgroundColor: 'white'
    //     })
    // const togglestyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnTxt("Enable light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnTxt("Enable dark Mode")


    //     }
    // }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.text}</h1>
                <div className="mb-3">

                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={onchange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={upprbtn} >Convert To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={lwrbtn} >Convert To LowererCase</button>
                <button className="btn btn-primary mx-1" onClick={clrbtn} >Clear Text</button>
                {/* <button type="button" onClick={togglestyle} className="btn btn-primary">{btntxt}</button> */}

            </div>
            <div className='container border 1px my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>Total Words Are : {text.split(" ").length} & Characters Are : {text.length}</p>
                <p>{0.008 * text.split(" ").length} Mins To Read Above Text </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something Above To Preview it here"}</p>
            </div>
        </>
    )
}
