import { useDispatch, useSelector } from "react-redux"
import { handleCorrectClick, handlePractiseCorrectClick, handlePractiseWrongClick, handleWrongClick } from "../features/game/gameSlice";




export default function MarkingButtons() {
    const { isPractiseMode } = useSelector(store => store.game)
    const dispatch = useDispatch();

    return (
        <div className="on-bottom flex w-full gap-8 content-center justify-center flex-wrap">
            <button
                className=" w-60 rounded-md correct-color-bg text-2xl py-4 px-8 text-center"
                onClick={() => {
                    if (isPractiseMode) dispatch(handlePractiseCorrectClick())
                    else dispatch(handleCorrectClick())
                }
                }
            >
                Correct
            </button>
            <button
                className=" w-60 rounded-md wrong-color-bg text-2xl py-4 px-8 text-center"
                onClick={() => {
                    if (isPractiseMode) dispatch(handlePractiseWrongClick())
                    else dispatch(handleWrongClick())
                }
                }
            >
                Wrong
            </button>
        </div>
    )
}