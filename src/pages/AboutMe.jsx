import Fade from "react-reveal/Fade";
import psuLogo from "../assets/images/psuLogo.png";
import myProfile from "../assets/images/my_profile.jpg";

function AboutMe() {
    return (
    <div className="container">
        
        <div id="section-about-me" className="section-space pt-3">
            <div className="d-flex flex-row flex-md-column align-items-stretch gap-5 gap-xs-4">
                <div className="d-flex justify-content-center align-items-stretch">
                    <Fade bottom distance="10%">
                        <img
                            className="my-profile"
                            src={myProfile}
                            alt="My Profile"
                        />
                    </Fade>
                </div>
                <div className="py-5 py-md-0">
                    <div className="mb-4">
                        <Fade bottom distance="10%">
                            <p className="mb-1">About Me</p>
                            <h2 className="mb-3 font-xlarge text-uppercase">
                                😶 Who am{" "}
                                <span className="color-primary">I</span>?
                            </h2>
                            <p className="mb-2 indent-4">
                                Hello! I'm Thayakorn Muadrod (DEE), a passionate individual on the
                                verge of completing my third year of studies and eager to dive into
                                the field of <span className="font-bold">
                                    front-end development
                                </span>. With a strong affinity for coding
                                and a keen interest in
                                crafting user-friendly interfaces, I am excited about the prospect of
                                applying my skills in a practical setting{" "}


                            </p>
                            <p className="indent-4">
                                Now I'm looking for a{" "}
                                <span className="color-primary font-bold">
                                    Full-Time Frontend Developer
                                </span>{" "}
                                position (able to <b>Work From Anywhere</b> or{" "}
                                <b>Hybrid in Bangkok</b>) and I'm ready to
                                start working immediately and learn new things
                                in the assigned position.
                            </p>
                        </Fade>
                    </div>
                    <div>
                        <Fade bottom distance="10%">
                            <h2 className="mb-3 font-xlarge text-uppercase">
                                🎓 Education
                            </h2>
                            <div className="d-flex">
                                <div className="mr-4 mr-xs-3">
                                    <img
                                        className="logo-psu"
                                        src={psuLogo}
                                        alt="Prince of Songkla University Logo"
                                    />
                                </div>
                                <div>
                                    <p className="font-small">2020-2023</p>
                                    <p className="mb-1 font-large font-bold">
                                        COMPUTER SCIENCE (regular semester)
                                    </p>
                                    <p>Faculty of Science</p>
                                    <p>Prince of Songkla University, HatYai Campus </p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AboutMe;
