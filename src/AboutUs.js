import React, { Component } from 'react'


export default class AboutUs extends Component {
    render() {
        return (
            <div className='main'>
                <h1>About Us</h1>
            {/* might have been nice to make an array of data and map over it rather than copy and paste these blurbs */}
                <div className='bio-item'>
                        <img className="bio-pic" src="https://media-exp1.licdn.com/dms/image/C5603AQE287gRluCYbA/profile-displayphoto-shrink_400_400/0/1621478870959?e=1631145600&v=beta&t=A1bkeCBGJPhO_ikmcv5avaRxNN-e-LG8DQn97NNW568" alt="DJ Drakos" />
                    <article>
                        <h2>DJ Drakos
                            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/dj-drakos/"><img className='icon' src='./linkedin.png' alt='LinkedIn' /></a>
                            <a target="_blank" rel='noreferrer' href="https://github.com/dianajodrakos"><img className='icon' src='./github.png' alt='Github' />
                            </a>
                        </h2>
                        <p>
                        A Full-stack Engineer, whole systems thinker, and art school dropout. I love solving a good logic puzzle and filtering signal from noise. Sometimes I knit, bike, or sleep, as needed.
  
                        </p>
                    </article>
                </div>

                <div className='bio-item'>
                    <img className="bio-pic" src="https://media-exp1.licdn.com/dms/image/C5603AQHj3Ur5UOz9IQ/profile-displayphoto-shrink_400_400/0/1625847270208?e=1631145600&v=beta&t=8a_jgN-fYS906YzL7NmVWyFUOXBY0cyeFfFTo8wpMRQ" alt="Kubisiak" />
                    <article>
                        <h2>.Kubisiak
                            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/kubisiak/"><img className='icon' src='./linkedin.png' alt='LinkedIn' /></a>
                            <a target="_blank" rel='noreferrer' href="https://github.com/mckubisiak"><img className='icon' src='./github.png' alt='Github' />
                            </a>
                        </h2>
                        <p>
                        A queer trans Software Engineer. I love mutually developing with people and supporting everyone's common as well as individuals goals.  <a href="https://kubisiak.darkroom.tech/">Photography</a> and <a href= "https://docs.google.com/document/d/1Tb3ETGO7tTbJFjT9ZHOJqpmd-qvIyq-JAkz8kT4pQfY/edit">Mutual Aid</a> are other avenues I like to participate in community.
                        </p>
                    </article>
                </div>

                <div className='bio-item'>
                        <img className="bio-pic" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlkWEQ4EAexQ/profile-displayphoto-shrink_400_400/0/1620661766468?e=1631145600&v=beta&t=rJPfZMro0k1beU2fxE5-xgH-GiC6tNetet_MVxpKTcE" alt="Sofia Tejada" />
                    <article>
                        <h2>Sofia Tejada 
                        <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/sofianais/"><img className='icon' src='./linkedin.png' alt='LinkedIn' /></a>
                        <a target="_blank" rel='noreferrer' href="https://github.com/sofiatejada"><img className='icon' src='./github.png' alt='Github' /></a>
                        </h2>
                        <p>
                        A Full-stack Developer based in the San Francisco Bay Area. I love to code because it's an exciting and challenging field where I can see myself being an asset to my community and where I know I will feel fulfilled. When I'm not coding, you can find me on Steam, learning to be a better photographer, or reading novels. My favorite languages are Korean and Spanish!
                        </p>
                        <p>
                        </p>
                    </article>
                </div>

                <div className='bio-item'>
                        <img className="bio-pic" src="https://media-exp1.licdn.com/dms/image/C4E03AQG9gSEPQJjNYg/profile-displayphoto-shrink_400_400/0/1620148404124?e=1631145600&v=beta&t=QvyV9IKqEmGUY9YTxmcBmfyPzVNYudBEVVbMN9sAWFQ" alt="Isaac Ewing" />
                    <article>
                        <h2>Isaac Ewing
                            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/isaac-ewing-6ba3b5211/"><img className='icon' src='./linkedin.png' alt='LinkedIn' /></a>
                            <a target="_blank" rel='noreferrer' href="https://github.com/Isaac-Ewing"><img className='icon' src='./github.png' alt='Github' />
                            </a>
                        </h2>
                        <p>
                        I am a Full-stack Developer who loves to solve complex coding problems involving math. In my free time I 
                        enjoy playing various sports with my friends poorly, reading, and playing video games (also poorly). 
                        I originally became interested in programming when I decided that I didn't want to use my degree in Chemical 
                        Engineering, and within a few days of first writing code, I knew that I wanted to do it professionally.
  
                        </p>
                    </article>
                </div>
                
                <div className='bio-item'>
                        <img className="bio-pic" src="https://media-exp1.licdn.com/dms/image/C4E03AQHTL9yonVG_eA/profile-displayphoto-shrink_400_400/0/1620147576714?e=1631145600&v=beta&t=6TXXJUgjfP3bLZf1vbDi_1_BPyYzwx7axotUvhqRWiQ" alt="Ben Francka" />
                    <article>
                        <h2>Ben Francka
                            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/ben-francka/"><img className='icon' src='./linkedin.png' alt='LinkedIn' /></a>
                            <a target="_blank" rel='noreferrer' href="https://github.com/BenFrancka"><img className='icon' src='./github.png' alt='Github' />
                            </a>
                        </h2>
                        <p>
                        A Full-stack Developer with a knack for working with teams and solving problems. Considering I grew up on a cattle farm working with my cousins, and have spent over a decade in professional kitchens as a chef working closely with teams of all backgrounds, I feel like I am adept at meeting teammates where they are with respect and enough motivation to keep everyone focused on the task at hand. 
                        </p>
                    </article>
                </div>

                <div className='credits'>
                    <h2>
                        Credits
                    </h2>
                    <p>
                        <a href="https://api.nasa.gov">
                        Nasa Astronomy Picture of the Day</a> was used to obtain a live updated astronomy picture and video for our main page.
                    </p>
                    <p>
                        <a href="https:www.7timer.info/doc.php?lang=en#astro">7timer API
                            </a> was used to obtain observational weather data: cloud cover, astronomical transparency, and air flow distortion
                    </p>
                    <p>
                        <a href="https://locationiq.com">
                        Location IQ API
                        </a> was used to obtain location information for use in the searching of weather data in the 7timer api.
                    </p>
                    <p>
                        <a href="https://api.le-systeme-solaire.net/">
                        Systeme Solaire API
                        </a> was used to access data pertaining to astronomical bodies including name, type, gravity, date discovered.
                    </p>
                </div>

            </div>
        )
    }
}
