import { Link } from "react-router-dom"
import { getLevelTitle } from "../utils/levelMatch"
import { useDispatch } from "react-redux";
import { handleLevelSelect } from "../features/game/gameSlice";
import { getScoreColorClassName } from "../utils/scoreColors";


export default function LevelButton({ level }) {
    const dispatch = useDispatch();
    if (!level) return (
        <button disabled className="rounded px-1">error</button>
    )

    const scores = JSON.parse(localStorage.getItem('scores'))
    const score = scores.filter(score => score.level === level)
    const percent = score[0] ? score[0]['percent'] : undefined

    return (
        <Link
            className={getScoreColorClassName(percent, 'bg')
                + " p-2 font-bold rounded-md flex text-lg w-28 justify-center"}
            to="/game"
            onClick={() => dispatch(handleLevelSelect(level))}
        >
            <span className="mr-1">{getLevelTitle(level) + ':'}</span>{percent} %
        </Link>
    )
}