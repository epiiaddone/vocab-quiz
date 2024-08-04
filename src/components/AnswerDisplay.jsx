import { useSelector } from "react-redux"
import { getLevelData } from "../utils/levelMatch"


export default function AnswerDisplay() {
    const { level, questionNumber, questionOrder, isPractiseMode, wrongAnswers } = useSelector(store => store.game)

    let currentQuestion = ""
    if (isPractiseMode) {
        currentQuestion = wrongAnswers[wrongAnswers.length - 1]
    } else {
        currentQuestion = questionOrder[questionNumber - 1]
    }

    const currentKana = getLevelData(level)[currentQuestion][1]
    const currentEnglish = getLevelData(level)[currentQuestion][2]

    return (
        <div className="">
            <div className="">{currentKana}</div>
            <div className="">{currentEnglish}</div>
        </div>
    )
}