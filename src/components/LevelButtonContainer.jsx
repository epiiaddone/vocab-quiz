import { useSelector } from "react-redux"
import { CHINESE_LEVELS, JAPANESE_LEVELS, LANGUAGE, MENU_ORDER } from "../utils/constants"
import LevelButton from "./LevelButton"


export default function LevelButtonContainer() {
    const { order, language } = useSelector(store => store.menu)

    let levels = language === LANGUAGE.JAPANESE ? JAPANESE_LEVELS : CHINESE_LEVELS;
    const levelScores = new Map();
    levels.forEach(level => {
        levelScores.set(level, [150, new Date()])
    })
    //console.log(levelScores)

    const scores = JSON.parse(localStorage.getItem('scores'))
    //console.log(scores)
    scores?.forEach(score => {
        if (levelScores.has(score.level)) levelScores.set(score.level, [score.percent, new Date(score.date)])
    })
    const levelScoresArray = Array.from(levelScores);
    //console.log(levelScoresArray)
    if (order === MENU_ORDER.OLDEST) {
        levelScoresArray.sort((a, b) => a[1][1] - b[1][1])
    } else if (order === MENU_ORDER.LOWEST) {
        levelScoresArray.sort((a, b) => a[1][0] - b[1][0])
    }
    const gameLevels = []
    levelScoresArray.forEach(score => gameLevels.push(score[0]))

    return (
        <div className="flex justify-center flex-wrap gap-1 mx-2">
            {gameLevels.map(level => {
                return <LevelButton level={level} key={level} />
            })}
        </div>
    )

}