import React from 'react';
import {NavLink} from "react-router-dom";
import VwMasthead from './../assets/vw/golfr/vwgolfr-masthead.png'
import VwGrab1 from './../assets/vw/golfr/golfrrr01.png'
import VwGrab2 from './../assets/vw/golfr/golfrrr02.png'
import VwGrab3 from './../assets/vw/golfr/golfrrr03.png'
import VwGrab4 from './../assets/vw/golfr/golfrrr05.png'

const VW = () => {
    return(
        <div className="Hero page project vw-project">
            <div className="HeroGroup">
                <h2>VW Golf Rrr</h2>
                <img src={VwMasthead} alt="" width="100%"></img>
                <p><a className="visitor" target="_blank" href="https://lookwhatwedid.co/vwgolfrrr-awards/">Visit Site</a></p>
                <p>The Volkswagen Unleash Your Rrr project was a new breed of technology for Deutsch. The app records your voice and your face as you imitate the Volkswagen Golf R screaming around the track at top speed. The Deutsch team came up with a set of techniques and technologies in order to break up those sounds dynamically, analyze them, and then assemble some carefully selected video content to match your performance. What you end up with is a customized video complete with your voice with clips of the Golf R screaming around the track that matches your voice, timing and energy.</p>
				<p>We used combination of digital signals processing and deep machine learning to analyze your performance. We then stitch together an optimized, YouTube ready video so you can share it out to all your friends.</p>
				<p>We were a very small team and I worked on building the AI library, sound engineering, tracking scores, and testing.</p>

                <p>We made news and won some awards. <a target="_blank" href="http://www.thefwa.com/site/unleash-your-rrrr">FWA Site of the Day</a>, <a target="_blank" href="http://www.adweek.com/adfreak/make-bunch-vrooming-and-squealing-car-noises-and-vw-will-turn-it-video-165861">AdWeek</a>, <a target="_blank" href="http://creativity-online.com/work/volkswagen-unleash-your-rrrr-michael-winslow-demo/42684">Creativity Online</a>, <a target="_blank" href="https://www.businessinsider.com/volkswagen-golf-r-voice-controlled-campaign-2015-7">Business Insider</a>, <a target="_blank" href="https://thenextweb.com/shareables/2015/07/15/vroom-vroom/">TNW</a>, <a target="_blank" href="https://www.fastcompany.com/3048595/you-control-this-new-vw-ad-by-making-your-own-ridiculous-car-noises">Fast Company</a></p>
                
                <div className="video-container">
					<iframe src="https://player.vimeo.com/video/152452333?api=1" width="100%" height="600" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" id="player-2" class="video"></iframe>
				</div>

                <div className="grabs">
                    <img src={VwGrab1} alt="" width="100%"></img>
                    <img src={VwGrab2} alt="" width="100%"></img>
                    <img src={VwGrab3} alt="" width="100%"></img>
                    <img src={VwGrab4} alt="" width="100%"></img>
                </div>

                
                
            </div>
            
        </div> 
    )
}

export default VW;