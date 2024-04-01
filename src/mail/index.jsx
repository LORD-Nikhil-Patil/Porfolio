import emailjs from '@emailjs/browser';
import { useRef } from "react"
import "./styles.css"
const EmailContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm('service_5scbeew', 'template_1rwt7xj', form.current, 'ucbo8LGEIpnVxY3i6')
            .then((result) => {
                console.log(result)
            }, (error) => {
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='mail'>
            <div className="mail__input">
                <div className="form__group field">
                    <input type="input" className="form__field amatic-sc-regular" placeholder="Name" name="name" id='name' required />
                    <label for="name" className="form__label">Name</label>
                </div>
                <div class="form__group field">
                    <input type="input" className="form__field amatic-sc-regular" placeholder="Email" name="Email" id='Email' required />
                    <label for="Email" className="form__label">Email</label>
                </div>
            </div>
            <div className='mail__textarea'>
                <div class="form__group field">
                    <textarea type="message" className="form__field amatic-sc-regular" placeholder="Message" name="message" id='message' required  rows="5"/>
                    <label for="name" className="form__label">Message</label>
                </div>
            </div>

              <input type="submit" value="Send"  className="button-54 " />
        </form>
    );
};


export default EmailContactForm;