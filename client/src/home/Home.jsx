import {useNavigate} from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    const play = () => {
       navigate("/game");
    }

    return (
        <div id="home-wrapper">
            <div id="home">
                <h1>Xxx<span id="logo">quiz</span></h1>
                <h2>This is an adult website</h2>
                <p>This website contains age-restricted materials including nudity and  
                explicit depictions of sexual activity. By entering, you affirm that you  are at 
                least 18 years of age or the age of majority in the jurisdiction  you are accessing
                the website from and you consent to viewing sexually  explicit content.</p>
                <div id="footer-buttons">
                    <button onClick={play}>Start the quiz</button>
                    <button>Leave the page - Exit</button>
                </div>
                <p id="footer-text">Our <span id="parental">parental controls</span> page explains how you can easily
                block access to this site. </p>
            </div>
        </div>
    )
}