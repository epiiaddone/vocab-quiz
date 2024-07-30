import { getLevelTitle } from "../utils/levelMatch"


export default function LevelButton({ level }) {

    if (!level) return (
        <div className="level-button--missing">{getLevelTitle(level)}</div>
    )


    return (
        <button className="level-button" data-level>{getLevelTitle(level)}</button>
    )
}