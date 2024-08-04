import { useDispatch } from "react-redux"
import { handleRevealClick } from "../features/game/gameSlice";

export default function RevealButton() {
    const dispatch = useDispatch();

    return (
        <button
            className=""
            onClick={() => dispatch(handleRevealClick())}
        >
            Reveal Answer
        </button>
    )
}