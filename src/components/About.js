import React from 'react'

export default function About(props) {

    // const [theStyle, setTheStyle]=useState({
    //     color: 'white',
    //     backgroundColor: 'white'
    // });

    //const [btnText, setBtnText]=useState('Enable Dark Mode');

    // let switchStyle=()=>{
    //     if (theStyle.color==='white') {
    //         setTheStyle({
    //             color: 'white',
    //             backgroundColor: 'white' 
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }else{
    //         setTheStyle({
    //             color: 'white',
    //             backgroundColor: 'white' 
    //         }) 
    //         setBtnText("Enable Light Mode")
    //     }
    // }

  return (
    <>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item"style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}>
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse"
        style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='light'?'black':'blue'}}
        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Welcome to NewTextAnalyzer
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Welcome to NewTextAnalyzer – Your Gateway to Comprehensive Text Insights!
        At NewTextAnalyzer, we believe that understanding your text is the key to unlocking its potential. Whether you're a student, professional, writer, or anyone who works with words, our web app is designed to empower you with in-depth analysis and valuable insights.
        </div>
      </div>
    </div>
    <div className="accordion-item"style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button"
        style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='light'?'black':'blue'}}
        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          What Sets Us Apart?
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
           <strong>Cutting-edge Analysis Tools:</strong> NewTextAnalyzer utilizes state-of-the-art natural language processing (NLP) technology to provide you with advanced text analysis. Our tools go beyond simple word counts, offering sentiment analysis, key phrase extraction, and more.<br></br>

           <strong>Ease of Use:</strong> We've designed our web app with user-friendliness in mind. No need for complex setups or technical expertise – just paste your text, and let NewTextAnalyzer do the rest. The intuitive interface ensures a seamless experience for both beginners and experienced users.<br></br>

           <strong>Versatile Applications:</strong> Whether you're refining your writing style, conducting research, or simply curious about the emotional tone of your text, NewTextAnalyzer adapts to your needs. Our app is versatile and can be applied across various domains, including academics, content creation, and business communication.<br></br>
        </div>
      </div>
    </div>
    <div className="accordion-item"style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button"
        style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='light'?'black':'blue'}}
        data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Key Features:
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>Sentiment Analysis:</strong>Understand the emotional tone of your text – from positive and neutral to negative sentiments. Perfect for gauging the impact of your words.<br></br>
          <strong>Keyword Extraction:</strong>Identify and highlight the key phrases that define your text. Uncover the core themes and main ideas with ease.<br></br>
          <strong>Readability Metrics:</strong>Receive insights into the readability of your text, helping you tailor your content to your target audience.<br></br>
          <strong>Word Frequency Analysis:</strong>Explore the frequency of words in your text to identify patterns and focus areas.<br></br>
          <strong>Advanced NLP Algorithms:</strong>Benefit from cutting-edge natural language processing algorithms that ensure accurate and nuanced analysis.<br></br>
        </div>
      </div>
    </div>
</div><br></br><br></br><br></br>
<div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item"style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"
      style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='light'?'black':'blue'}}
      data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How It Works:
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <strong>Paste or Type:</strong> Simply paste your text or type it directly into our user-friendly interface.<br></br>

        <strong>Click Analyze:</strong> Hit the analyze button, and watch as NewTextAnalyzer processes your text in seconds.<br></br>

        <strong>Explore Insights:</strong> Dive into detailed insights and visualizations that provide a deeper understanding of your text.<br></br>
      </div>
  </div>
  <div className="accordion-item"style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"
      style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='light'?'black':'blue'}}
      data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Join Our Community:
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      Connect with other NewTextAnalyzer users, share tips, and stay updated on the latest features by joining our vibrant community. Follow us on social media and be part of the conversation!
      Empower your words with NewTextAnalyzer – Where Text Meets Insight!
      </div>
    </div>
  </div>
</div>
</div>
  </>
  )
}
