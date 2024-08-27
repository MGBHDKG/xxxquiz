export default function Questions({questions}) {
    return(
        <div id="questions">
            <button className="answer">{questions.answer1}</button>
            <button className="answer">{questions.answer2}</button>
            <button className="answer">{questions.answer3}</button>
            <button className="answer">{questions.answer4}</button>
        </div>
    )
}