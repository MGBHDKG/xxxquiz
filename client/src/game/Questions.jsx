export default function Questions({questions, submitAnswer, rightAnswer, wrongAnswer}) {
    console.log(wrongAnswer, rightAnswer)
    return(
        <div id="questions">
            <div>
                <button 
                    className="answer" 
                    onClick={() => submitAnswer(questions.answer1)}
                    style={{
                        backgroundColor: rightAnswer && rightAnswer === questions.answer1 ? "green" : 
                        wrongAnswer && wrongAnswer === questions.answer1 ? "red" : ""
                    }}
                >
                {questions.answer1}
                </button>
            </div>
            <div>
                <button 
                    className="answer" 
                    onClick={() => submitAnswer(questions.answer2)}
                    style={{
                        backgroundColor: rightAnswer && rightAnswer === questions.answer2 ? "green" : 
                        wrongAnswer && wrongAnswer === questions.answer2 ? "red" : ""
                    }}
                >
                {questions.answer2}
                </button>
            </div>
            <div>
                <button 
                    className="answer" 
                    onClick={() => submitAnswer(questions.answer3)}
                    style={{
                        backgroundColor: rightAnswer && rightAnswer === questions.answer3 ? "green" : 
                        wrongAnswer && wrongAnswer === questions.answer3 ? "red" : ""
                    }}
                >
                {questions.answer3}
                </button>
            </div>
            <div>
                <button 
                    className="answer" 
                    onClick={() => submitAnswer(questions.answer4)}
                    style={{
                        backgroundColor: rightAnswer && rightAnswer === questions.answer4 ? "green" : 
                        wrongAnswer && wrongAnswer === questions.answer4 ? "red" : ""
                    }}
                >
                {questions.answer4}
                </button>
            </div>
        </div>
    )
}