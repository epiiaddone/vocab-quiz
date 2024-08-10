import { Link } from "react-router-dom"
import { getChineseLevelTitle, getLevelTitle } from "../utils/levelMatch"
import { useDispatch, useSelector } from "react-redux";
import { handleLevelSelect } from "../features/game/gameSlice";
import { getScoreColorClassName } from "../utils/scoreColors";
import { LANGUAGE } from "../utils/constants";


export default function LevelButton({ level }) {
    const dispatch = useDispatch();
    const { language } = useSelector(store => store.game)

    if (!level) return (
        <button disabled className="rounded px-1">error</button>
    )

    const scores = language === LANGUAGE.JAPANESE ?
        JSON.parse(localStorage.getItem('scores')) :
        JSON.parse(localStorage.getItem('chinese-scores'));
    const score = scores?.filter(score => score.level === level)
    const percent = score && score[0] ? score[0]['percent'] : undefined
    const title = language === LANGUAGE.JAPANESE ? getLevelTitle(level) : getChineseLevelTitle(level);

    return (
        <Link
            className={getScoreColorClassName(percent, 'bg')
                + " p-2 font-bold rounded-md flex text-lg w-28 justify-center"}
            to="/game"
            onClick={() => dispatch(handleLevelSelect(level))}
        >
            <span className="mr-1">{title + ':'}</span>{percent} %
        </Link>
    )
}