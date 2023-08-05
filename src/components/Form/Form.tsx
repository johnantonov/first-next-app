
import React from "react"

export const Form = () => {
  return (
    <section className="sectionForm">
      <h2 className="sectionForm__title">Ready to get started? Drop us a line!</h2>
      <form className="form" action="">
        <label htmlFor="formName">
          <input type="text" id="formName" placeholder="Name"/>
        </label>
        <label htmlFor="formEmail">
          <input type="email" id="formEmail" placeholder="Email"/>
        </label>
        <label htmlFor="formText">
          <input type="text" id="formText" placeholder="What we can do for you?"/>
        </label>
        <label htmlFor="formSend">
          <input type="submit" id="formSend" value="Send"/>
        </label>
      </form>
    </section>
  )
}