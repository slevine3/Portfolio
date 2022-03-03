export const Contact = () => {
  return (
    <div id="contact" className="contact_container">
      <div>
        <h1>CONTACT ME</h1>
      </div>
      <div>
        <form className="contact_form">
          <lable htmlFor="name">Name: </lable>
          <input type="text" name="name"></input>
          <lable htmlFor="not_sure">Email: </lable>
          <input type="email" name="not_sure"></input>
          <lable htmlFor="message">Message: </lable>
          <textarea name="message"></textarea>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
