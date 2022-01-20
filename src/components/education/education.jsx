import React from 'react';
import './education.css';

const Education = () => {
    return (
        <section className="ed">
            <div className="ed-left">
                <h1 className="ed-title">Education/Experience</h1>
                <p className="ed-sub">
                    Well I was going to come up with some details about Ed/Exp but its too bothersome :D.
                </p>
                <p className="ed-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </p>
                <div className="ed-award">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s900-c-k-c0x00ffffff-no-rj" alt="" className="ed-award-img" />
                    <div className="ed-award-texts">
                        <h4 className="ed-award-title">Web Development Simplified</h4>
                        <p className="ed-award-desc">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                            and fugit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ed-right">
                <div className="ed-card bg"></div>
                <div className="ed-card pic">
                    <img src="https://www.clockwork.com/wp-content/uploads/2019/05/human-centered-experience-design-1024x1021.png" alt="" className="ed-img" />
                </div>
            </div>
        </section>
    );
}

export default Education;
