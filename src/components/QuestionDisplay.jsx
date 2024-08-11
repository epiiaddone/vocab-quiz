import { useSelector } from "react-redux"
import { getLevelData } from "../utils/levelMatch"



export default function QuestionDisplay() {
    const { level, questionNumber, questionOrder, isPractiseMode, wrongAnswers, language } = useSelector(store => store.game)

    let currentQuestion;
    if (isPractiseMode) {
        currentQuestion = wrongAnswers[wrongAnswers.length - 1]
    } else {
        currentQuestion = questionOrder[questionNumber - 1]
    }

    //console.log("currentQuestion:", currentQuestion)

    const currentVocab = getLevelData(level)[currentQuestion][0]


    return (
        <div className="m-4 text-center text-2xl p-6 primary-bg rounded-md
        sm:text-4xl"
        >{currentVocab}</div>
    )
}