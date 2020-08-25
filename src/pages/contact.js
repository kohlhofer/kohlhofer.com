import React from "react"

import Layout from "../components/layout"

const contactPage = () => (
  <Layout pageTitle="Get in touch" color="blue">
  <div className="contact">

  <form method="POST" action="/thankyou" data-netlify="true" name="contact" netlify-honeypot="bot-field" enctype="application/x-www-form-urlencoded"> 
  <p>
  <label for="message">Your message</label> 
  <textarea rows="5" type="text" name="message" id="message"/> 

  </p>
  <p>
  <label for="email">Your email</label> 
  <input type="email" name="email" id="email" /> 
  </p>
  <p class="form-hidden">
  <label>Don’t fill this out if you're human:</label> 
  <input name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
  </p>
  <p>
  <button type="submit">Send message</button> 
  </p>
  </form> 
  <div className="contact-words">
  <p>Get in touch to talk product, design, music, or anything.</p>
  <p>I have extensive experience working and collaborating remotely. So far I have lived and worked in the US, the UK, Austria, and Germany.</p>
  </div>

  </div>  
  </Layout>
)

export default contactPage
