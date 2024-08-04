import { useSelector } from "react-redux"
import { getLevelData } from "../utils/levelMatch"


export default function QuestionDisplay() {
    const { level, questionNumber, questionOrder, isPractiseMode, wrongAnswers } = useSelector(store => store.game)

    let currentQuestion = ""
    if (isPractiseMode) {
        currentQuestion = wrongAnswers[wrongAnswers.length - 1]
    } else {
        currentQuestion = questionOrder[questionNumber - 1]
    }

    const currentVocab = getLevelData(level)[currentQuestion][0]

    return (
        <div className="">{currentVocab}</div>
    )
}