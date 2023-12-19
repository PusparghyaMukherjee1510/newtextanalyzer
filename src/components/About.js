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
    <div className='container my-3' >
        <h1 className='my-3'>{props.aboutus}</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{backgroundColor:  props.mode==='light'? 'white' : 'black',color: props.mode==='light'?'black':'white'}}>
      <div className="accordion-body" style={{backgroundColor:  props.mode==='light'? 'white' : 'black',color: props.mode==='light'?'black':'white'}} >
      Welcome to NewTextAnalyzer – Your Gateway to Comprehensive Text Insights!

At NewTextAnalyzer, we believe that understanding your text is the key to unlocking its potential. Whether you're a student, professional, writer, or anyone who works with words, our web app is designed to empower you with in-depth analysis and valuable insights.

### What Sets Us Apart?

**Cutting-edge Analysis Tools:** NewTextAnalyzer utilizes state-of-the-art natural language processing (NLP) technology to provide you with advanced text analysis. Our tools go beyond simple word counts, offering sentiment analysis, key phrase extraction, and more.

**Ease of Use:** We've designed our web app with user-friendliness in mind. No need for complex setups or technical expertise – just paste your text, and let NewTextAnalyzer do the rest. The intuitive interface ensures a seamless experience for both beginners and experienced users.

**Versatile Applications:** Whether you're refining your writing style, conducting research, or simply curious about the emotional tone of your text, NewTextAnalyzer adapts to your needs. Our app is versatile and can be applied across various domains, including academics, content creation, and business communication.

### Key Features:

**Sentiment Analysis:** Understand the emotional tone of your text – from positive and neutral to negative sentiments. Perfect for gauging the impact of your words.

**Keyword Extraction:** Identify and highlight the key phrases that define your text. Uncover the core themes and main ideas with ease.

**Readability Metrics:** Receive insights into the readability of your text, helping you tailor your content to your target audience.

**Word Frequency Analysis:** Explore the frequency of words in your text to identify patterns and focus areas.

**Advanced NLP Algorithms:** Benefit from cutting-edge natural language processing algorithms that ensure accurate and nuanced analysis.

### How It Works:

1. **Paste or Type:** Simply paste your text or type it directly into our user-friendly interface.

2. **Click Analyze:** Hit the analyze button, and watch as NewTextAnalyzer processes your text in seconds.

3. **Explore Insights:** Dive into detailed insights and visualizations that provide a deeper understanding of your text.

### Join Our Community:

Connect with other NewTextAnalyzer users, share tips, and stay updated on the latest features by joining our vibrant community. Follow us on social media and be part of the conversation!

Empower your words with NewTextAnalyzer – Where Text Meets Insight!
      </div>
    </div>
  </div>
  
  
</div>
{/* <button type='button' className='btn btn-primary my-3' onClick={switchStyle} >{btnText}</button> */}
    </div>
  )
}
