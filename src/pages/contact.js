import React from 'react'
import '../styles/global.css'
import TalkingHeader from '../components/talkingheader'
import Like from '../components/like'

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
        <TalkingHeader />
        <h1>Send me an email at amandarcphotog@gmail.com</h1>
        &nbsp;
        <Like />
    </div>
)