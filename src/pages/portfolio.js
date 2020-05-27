import React from 'react'
import SEO from "../components/seo"
import TalkingHeader from '../components/talkingheader'
import ArticleList from '../components/article-list'
import Like from '../components/like'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default () => (
    <div>
        <SEO title="Portfolio" />
        <TalkingHeader />
        <div class="container">
            <h1>My Portfolio</h1>
            <Flippy
                flipOnHover={true} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                style={{ display: 'inline-block', width: '400px', height: '400px'}} /// these are optional style, it is not necessary
            >
                <FrontSide
                style={{
                    backgroundColor: '#41669d',
                }}
                >
                John Cardoza
                <img src={require("../images/zona.jpg")} width="600" height="400" alt="Lead Singer of AZ"></img>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#175852'}}>
                54 Below
                March 2, 2020
                <a href="/arizona-band/" class="button button-portfolio button-small">Full Portfolio</a>
                </BackSide>
            </Flippy>
            &nbsp;
            <Flippy
                flipOnHover={true} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                style={{ display: 'inline-block', width: '400px', height: '400px' }} /// these are optional style, it is not necessary
            >
                <FrontSide
                style={{
                    backgroundColor: '#41669d',
                }}
                >
                JOAN
                
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#175852'}}>
                Mercury Lounge
                February 11, 2020
                <a href="/arizona-band/" class="button button-portfolio button-small">Full Portfolio</a>
                </BackSide>
            </Flippy>
            &nbsp;
            <Flippy
                flipOnHover={true} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                style={{ display: 'inline-block', width: '400px', height: '400px' }} /// these are optional style, it is not necessary
            >
                <FrontSide
                style={{
                    backgroundColor: '#41669d',
                }}
                >
                Paxton Pennington
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#175852'}}>
                Single Cover Shoot
                <a href="/arizona-band/" class="button button-portfolio button-small">Full Portfolio</a>
                </BackSide>
            </Flippy>
            <ArticleList />
        </div>
        <Like />
    </div>
)