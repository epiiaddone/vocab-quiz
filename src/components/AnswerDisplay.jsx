import { useSelector } from "react-redux"
import { getLevelData } from "../utils/levelMatch"


export default function AnswerDisplay() {
    const { level, questionNumber, questionOrder, isPractiseMode, wrongAnswers, language } = useSelector(store => store.game)

    let currentQuestion = ""
    if (isPractiseMode) {
        currentQuestion = wrongAnswers[wrongAnswers.length - 1]
    } else {
        currentQuestion = questionOrder[questionNumber - 1]
    }

    const currentKana = getLevelData(level)[currentQuestion][1]

    const currentEnglish = getLevelData(level)[currentQuestion][2]


    return (
        <div className="m-4 text-center text-2xl p-6">
            <div className="">{currentKana}</div>
            <div className="">{currentEnglish}</div>
        </div>
    )
}