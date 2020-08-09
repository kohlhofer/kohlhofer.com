import React from 'react'
import "../css/signup-form.scss"

const handleSubmit = e => {
  window.open(
    `https://tinyletter.com/Kohlhofer`,
    'popupwindow',
    'scrollbars=yes,width=800,height=600'
  )
  return true
}

const SignupForm = () => {
  return (
    <form
      action="https://tinyletter.com/Kohlhofer"
      method="post"
      target="popupwindow"
      onSubmit={handleSubmit}
      className="SignupForm"
    >
      <p>Learn about updates, new episodes, etc...</p>
      <div className="Wrapper">
        <input
          aria-label="Email address"
          placeholder="Enter your email..."
          name="email"
          type="text"
          required
          id="tlemail"
        />
        <input type="hidden" value="1" name="embed" />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  )
}
export default SignupForm
