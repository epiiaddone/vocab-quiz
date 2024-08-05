import { useDispatch } from "react-redux"
import { handleRevealClick } from "../features/game/gameSlice";

export default function RevealButton() {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-center w-full on-bottom">
            <button
                className="rounded-md py-4 px-8 text-center border-x border-y
             border-slate-400 bg-white text-3xl"
                onClick={() => dispatch(handleRevealClick())}
            >
                Reveal Answer
            </button>
        </div>
    )
}