import React from 'react'
import '../styles/global.css'
import TalkingHeader from '../components/talkingheader'
import SlimLike from '../components/slimlike'
import SEO from "../components/seo"

 /*
 <form method="post" action="#">
            <label>
                Name
                <input type="text" name="name" id="name" />
            </label>
            <label>
                Email
                <input type="email" name="email" id="email" />
            </label>
            <label>
                Message
                <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit" class="button button-contact">Send</button>
            &nbsp;
            <input type="reset" value="Clear" class="button button-contact"/>
        </form> 
 */
export default() => (
    <div>
        <SEO title="Contact" />
        <TalkingHeader />
        <h1>Send me an email at amanda@amandacphotog.com</h1>
        <p>I offer multiple options for portrait sessions, and am happy to work with you to photograph your gig!</p>
        <p>You can also find me on Instagram, @amandacphotog, but for booking, email is the best way to reach me!</p>
        &nbsp;
        <SlimLike />
    </div>
)