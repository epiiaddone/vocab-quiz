import { useSelector } from "react-redux"
import { getChineseLevelData, getLevelData } from "../utils/levelMatch"
import { LANGUAGE } from "../utils/constants"


export default function AnswerDisplay() {
    const { level, questionNumber, questionOrder, isPractiseMode, wrongAnswers, language } = useSelector(store => store.game)

    let currentQuestion = ""
    if (isPractiseMode) {
        currentQuestion = wrongAnswers[wrongAnswers.length - 1]
    } else {
        currentQuestion = questionOrder[questionNumber - 1]
    }

    const currentKana = language === LANGUAGE.JAPANESE ?
        getLevelData(level)[currentQuestion][1] :
        getChineseLevelData(level)[currentQuestion][1];

    const currentEnglish = language === LANGUAGE.JAPANESE ?
        getLevelData(level)[currentQuestion][2] :
        getChineseLevelData(level)[currentQuestion][2];

    return (
        <div className="m-4 text-center text-2xl p-6">
            <div className="">{currentKana}</div>
            <div className="">{currentEnglish}</div>
        </div>
    )
}