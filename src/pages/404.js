import React from "react"
import Slider from '../components/Slider'
import TalkingHeader from '../components/talkingheader'
import Like from '../components/like'

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://raw.githubusercontent.com/achesin/website-images/master/misterwives/%40amandacphotog-111219-8474.jpg'
]

const NotFoundPage = () => (
  <div>
    <TalkingHeader />
    <h1>Hi there</h1>
    <div>Here's a paragraph about what I did!</div>
    <Slider slides={images}/>
    <Like />
  </div>
)

export default NotFoundPage
