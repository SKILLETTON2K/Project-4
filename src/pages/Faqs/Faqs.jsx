import React from "react";
import '../../pages/App/App.css';
import Footer from "../../components/Footer/Footer";

function Faqs () {
    return (
        <>
        <form className='faq-back'>
            <h1 className='faqs'>Frequently Asked Questions</h1>

            <p className='faq-q'>Q: What is required to use schematics?<br></br>
                A: You'll need WorldEdit installed, the plugin link is located at the bottom of the page!<br></br>
                <br></br>
                Q: Why can't I see any schematics on your website? <br></br>
                A: You'll need to make sure you're signed in to see our available schematics!<br></br>
                <br></br>
                Q: Who made this amazing web page?<br></br>
                A: The world may never know... <br></br>
                <br></br>
            </p>
            </form>


            <Footer />
        </>
    )
}

export default Faqs;