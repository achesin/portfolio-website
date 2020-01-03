import React from 'react'
import '../styles/global.css'
import TalkingHeader from '../components/talkingheader'
import Like from '../components/like'
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
        <h1>Send me an email at amandarcphotog@gmail.com</h1>
        &nbsp;
        <Like />
    </div>
)