import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const contactPage = () => (
  <Layout pageTitle="Get in touch" color="blue">
	<div className="contact">

    <form method="POST" data-netlify="true" action="" name="contact" netlify-honeypot="bot-field"> 
<p>
        <label for="message">Your message</label> 
        <textarea rows="4" type="text" name="message" rules=""/> 

</p>
<p>
        <label for="email">Your email</label> 
        <input type="email" name="email" rules="required|email|max:255"/> 
</p>
<p class="form-hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
<p>
        <button type="submit">Send message</button> 
</p>
    </form> 
<hr />
<div className="contact-words">
<p>Get in touch to talk product, design, music, or anything.</p>
<p>I have extensive experience working and collaborating remotely. So far I have lived and worked in the US, the UK, Austria, and Germany.</p>
</div>

</div>  
</Layout>
)

export default contactPage
