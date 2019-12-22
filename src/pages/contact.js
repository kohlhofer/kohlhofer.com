import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const contactPage = () => (
  <Layout pageTitle="Get in touch" color="blue">
	<div className="contact">

    <form method="POST" action="https://getform.io/f/817f8dc3-d396-441f-a0ce-8fc76da7a1b3"> 
<p>
        <label for="message">Your message</label> 
        <textarea rows="4" type="text" name="message" rules=""/> 

</p>
<p>
        <label for="email">Your email</label> 
        <input type="email" name="email" rules="required|email|max:255"/> 
</p>
<p>
        <button type="submit">Send message</button> 
</p>
    </form> 
<hr />
<div className="contact-words">
<p>I have extensive experience working and collaborating remotely. I lived and worked on both coasts of the US (and the middle), in the UK, Austria, and Germany.</p>
</div>

</div>  
</Layout>
)

export default contactPage
