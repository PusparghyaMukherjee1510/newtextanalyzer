import React ,{ useState }from 'react'

export default function TextPlace(props) {

  const [text, setText] = useState("");

  const clickToUp=()=>{
    console.log("Clicked");
    let nt=text.toUpperCase();
    setText(nt);
    props.showAlert("Converted To Uppercase", "success")
  }

  const clickToLo=()=>{
    console.log("Clicked");
    let nt=text.toLowerCase();
    setText(nt);
    props.showAlert("Converted To Lowercase", "success")
  }
  
  const removeExtraSpace=()=>{
    let nt=text.split(/[ ]+/);
    setText(nt.join(" "));
    props.showAlert("Extra Spaces Removed", "success")
  }
  
  const clickToClear=()=>{
    console.log("Clicked");
    let nt='';
    setText(nt);
    props.showAlert("Text Cleared", "success")
  }

  const handleOnChange=(event)=>{
    console.log("On Changed");
    setText(event.target.value);
  }

  const clickToCopy=()=>{
    let nt=document.getElementById('my-box');
    nt.select();
    navigator.clipboard.writeText(nt.value);
    props.showAlert("Copied to Clipboard", "success")
  }

  // const hndlText=()=>{
  //   text.split(" ").forEach((run)=>{
  //      if (run[0]===" ") {
  //      return run.slice(0,1).concat(run);
  //      }
  //   })
  // }
  
  return (
    <>
    <div className='container my-3'>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"  value={text} placeholder='Enter Text Here' style={{backgroundColor:  props.mode==='light'? 'white' : 'black',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="my-box" rows="8">
  </textarea>
</div>
<button className="btn btn-primary mx-2" onClick={clickToUp}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={clickToLo}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={clickToClear}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={clickToCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container">
      <h3>Text Summary</h3>
      <p>{text.split(" ").filter((elem)=>{return elem.length!=0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length}Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text.length===0?"Enter Something to show preview":text}</p>
    </div>
    </>
  )
}
