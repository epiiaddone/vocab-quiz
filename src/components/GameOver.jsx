import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleHomeClick } from "../features/game/gameSlice";
import { getScoreColorClassName } from "../utils/scoreColors";


const GameOver = () => {
    const dispatch = useDispatch();

    const { correctCount, questionOrder } = useSelector(store => store.game)
    const percent = Math.round(correctCount * 100 / questionOrder.length)

    return (
        <div className="flex flex-wrap flex-col
        justify-center content-center gap-8  mt-12">
            <div
                className={getScoreColorClassName(percent, 'text') + " text-6xl"}
            >{percent} % </div>
            <Link
                to="/"
                onClick={() => dispatch(handleHomeClick())}
                className="rounded-md py-4 px-8 text-center border-x border-y
             border-slate-400 bg-white text-2xl"
            >
                Home
            </Link>
        </div>
    )
}

export default GameOver;