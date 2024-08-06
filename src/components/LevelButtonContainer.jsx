import { useSelector } from "react-redux"
import { JAPANESE_LEVELS, MENU_ORDER } from "../utils/constants"
import LevelButton from "./LevelButton"


export default function LevelButtonContainer() {
    const { order } = useSelector(store => store.menu)

    let japaneseLevels = JAPANESE_LEVELS;
    const scores = JSON.parse(localStorage.getItem('scores'))
    const levelScores = new Map();
    japaneseLevels.forEach(level => {
        levelScores.set(level, [150, new Date()])
    })
    scores.forEach(score => {
        levelScores.set(score.level, [score.percent, new Date(score.date)])
    })
    const levelScoresArray = Array.from(levelScores);
    console.log(levelScoresArray)
    if (order === MENU_ORDER.OLDEST) {
        levelScoresArray.sort((a, b) => a[1][1] - b[1][1])
    } else if (order === MENU_ORDER.LOWEST) {
        levelScoresArray.sort((a, b) => a[1][0] - b[1][0])
    }
    japaneseLevels = []
    levelScoresArray.forEach(score => japaneseLevels.push(score[0]))

    return (
        <div className="flex justify-center flex-wrap gap-1 mx-2">
            {japaneseLevels.map(level => {
                return <LevelButton level={level} key={level} />
            })}
        </div>
    )

}