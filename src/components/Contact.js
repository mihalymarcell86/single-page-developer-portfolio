import useValidateInput from "../hooks/useValidateInput";
import Link from "./UI/Link";
import Input from "./UI/Input";

import scss from "../styles/Contact.module.scss";

export default function Contact() {
  const [nameState, nameProps] = useValidateInput();
  const [emailState, emailProps] = useValidateInput({ type: "email" });
  const [messageState, messageProps] = useValidateInput();
  const formIsValid =
    nameState.isValid && emailState.isValid && messageState.isValid;

  return (
    <section className={scss.contact} id="contact">
      <div>
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <form>
        <Input state={nameState} customProps={nameProps}>
          <input type="text" placeholder="Name"></input>
        </Input>
        <Input state={emailState} customProps={emailProps}>
          <input type="email" placeholder="Email"></input>
        </Input>
        <Input state={messageState} customProps={messageProps}>
          <textarea placeholder="Message" spellCheck={false}></textarea>
        </Input>
        <button type="button" disabled={!formIsValid}>
          <Link href="#">Send message</Link>
        </button>
      </form>
    </section>
  );
}
