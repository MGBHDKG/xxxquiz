import {useNavigate} from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    const play = () => {
       navigate("/game");
    }

    return (
        <div id="home-wrapper">
            <div id="home">
                <h1>Xxx<span>quiz</span></h1>
                <h2>This is an adult website</h2>
                <p>This website contains age-restricted materials including nudity and  
                explicit depictions of sexual activity. By entering, you affirm that you  are at 
                least 18 years of age or the age of majority in the jurisdiction  you are accessing
                the website from and you consent to viewing sexually  explicit content.</p>
                <button onClick={play}>caca</button>
            </div>
        </div>
    )
}