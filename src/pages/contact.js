import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const contactPage = () => (
  <Layout pageTitle="Contact">
	<div className="contact">

<div className="kwes-form"> 
    <form method="POST" success-message="Thank you for your message!" error-message="Looks like there was an error. Please check the form" action="https://kwes.io/api/foreign/forms/TdKsRlv5KLE2nOzg3yC6"> 
<h1>Get in touch</h1>
<p>
        <label for="email">Your email</label> 
        <input type="text" name="email" rules="required|email|max:255"/> 
</p>
<p>
        <label for="message">Your message</label> 
        <textarea rows="4" type="text" name="message" rules=""/> 

</p>
<p>
        <button type="submit">Submit</button> 
</p>
    </form> 
</div>
<hr />
<div className="contact-words">
<p>I have extensive experience working and collaborating remotely. I lived and worked on both coasts of the US (and the middle), in the UK, Austria, and Germany.</p>
</div>

</div>  
</Layout>
)

export default contactPage
