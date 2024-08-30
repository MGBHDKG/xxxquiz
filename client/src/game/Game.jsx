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
    const [rightAnswer, setRightAnswer] = useState("");
    const [wrongAnswer, setWrongAnswer] = useState("");

    useEffect(() => {
        getNewQuestion()
    }, [])

    const getNewQuestion = async() => {
        setRightAnswer("");
        setWrongAnswer("");
        //Réactiver les boutons

        //Gérer les erreurs
        const response = await fetch('http://localhost:3000/question');
        const data = await response.json();
        setImg(data.picturepath);
        setQuestions({
            answer1: data.answer1,
            answer2: data.answer2,
            answer3: data.answer3,
            answer4: data.answer4,
            id: data.id
        })
    }

    const submitAnswer = async(answer) => {
        const response = await fetch('http://localhost:3000/answer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: questions.id,
              answer: answer
            }),
          });
    
        const data = await response.json();

        setImg(data.path);

        if(data.isRight)setRightAnswer(answer)

        else{
            setWrongAnswer(answer);
            setRightAnswer(data.rightAnswer);
        }

        //Désactiver les boutons

        setTimeout(() => {
            getNewQuestion()
        }, 5000)
    }

    return (
        <div id="game">
            <h2>Who is this actor/actress ?</h2>
            <img src={img} alt="Actor/actress image" />
            <h3>{rightAnswer}</h3>
            <Questions questions={questions} submitAnswer={submitAnswer} rightAnswer={rightAnswer} wrongAnswer={wrongAnswer}/>
        </div>
    )
}