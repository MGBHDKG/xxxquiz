import { useEffect, useState } from "react"
import Questions from "./Questions";

export default function Game(){
    const [img, setImg] = useState("");
    const [questions, setQuestions] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    });

    useEffect(() => {
        getNewQuestion()
    }, [])

    const getNewQuestion = async() => {
        //Gérer les erreurs
        const response = await fetch('http://localhost:3000/question');
        const data = await response.json();
        setImg(data.picturepath);
        setQuestions({
            answer1: data.answer1,
            answer2: data.answer2,
            answer3: data.answer3,
            answer4: data.answer4
        })
    }

    return (
        <div id="game">
            <h2>Who is this actor/actress ?</h2>
            <img src={img} alt="Actor/actress image" />
            <Questions questions={questions}/>
        </div>
    )
}