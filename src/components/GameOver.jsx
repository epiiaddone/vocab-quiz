import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleHomeClick } from "../features/game/gameSlice";
import { getScoreColorClassName } from "../utils/scoreColors";


const GameOver = () => {
    const dispatch = useDispatch();

    const { correctCount, questionOrder } = useSelector(store => store.game)
    const percent = Math.round(correctCount * 100 / questionOrder.length)

    return (
        <div>
            <div
                className={getScoreColorClassName(percent, 'text')}
            >{percent} % </div>
            <Link
                to="/"
                onClick={() => dispatch(handleHomeClick())}
            >
                Home
            </Link>
        </div>
    )
}

export default GameOver;