import Link from "./UI/Link";

import scss from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <section className={scss.contact}>
      <div>
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <form>
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email"></input>
        <textarea placeholder="Message" spellCheck={false}></textarea>
        <button type="button">
          <Link href="#">Send message</Link>
        </button>
      </form>
    </section>
  );
}
