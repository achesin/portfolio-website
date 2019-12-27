import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'

//whole article is clickable
export default (props) => (
    <Link to={props.to}> 
        <article class="article-box" key={props.id}>
            <div class="left">
                <img src={'https://source.unsplash.com/150x150/?' + props.keywords} alt={props.keywords}/>
            </div>
            <div class="right">
                <h3>
                    {props.title}
                </h3>
                <div class="date">
                    {props.date}
                </div>
                <div>
                    {props.excerpt}
                </div>
            </div>
        </article>
    </Link>
)