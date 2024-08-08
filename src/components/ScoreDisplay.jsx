import { useDispatch, useSelector } from "react-redux"
import { GAME_STATUS } from "../utils/constants"
import { Link } from "react-router-dom"
import { exitGame } from "../features/game/gameSlice"
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaBook } from "react-icons/fa";


export default function ScoreDisplay() {
    const dispatch = useDispatch()

    const {
        correctCount,
        questionOrder,
        wrongAnswers,
        isPractiseMode,
        wrongCount
    } = useSelector(store => store.game)

    return (
        <div>
            <div className="m-4 flex justify-between">
                <Link
                    to="/"
                    onClick={() => dispatch(exitGame())}
                    className="rounded-md py-1 px-2 text-center border-x border-y border-slate-400 bg-white"
                >Exit</Link>
                <div className="flex gap-x-3">
                    <div className="flex items-center gap-x-1 ">
                        <FaCheck className="correct-color" /> {correctCount}</div>
                    <div className="flex items-center gap-x-1">
                        <ImCross className=" wrong-color" />{wrongCount}</div>
                    <div className="flex items-center gap-x-1 ">
                        <FaBook className="primary-color" />{questionOrder.length - correctCount - wrongCount}</div>
                </div>
            </div>
            {
                isPractiseMode &&
                <div className="text-center sm:text-xl">
                    Practise Mode: {wrongAnswers.length} remaining
                </div>
            }
        </div >
    )
}