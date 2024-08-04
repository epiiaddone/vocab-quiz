import { useDispatch, useSelector } from "react-redux"
import { handleCorrectClick, handlePractiseCorrectClick, handlePractiseWrongClick, handleWrongClick } from "../features/game/gameSlice";




export default function MarkingButtons() {
    const { isPractiseMode } = useSelector(store => store.game)
    const dispatch = useDispatch();

    return (
        <div className="flex">
            <button
                className=""
                onClick={() => {
                    if (isPractiseMode) dispatch(handlePractiseCorrectClick())
                    else dispatch(handleCorrectClick())
                }
                }
            >
                Correct
            </button>
            <button
                className=""
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