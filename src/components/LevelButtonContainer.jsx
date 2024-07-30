import { JAPANESE_LEVELS } from "../utils/constants"
import LevelButton from "./LevelButton"


export default function LevelButtonContainer() {


    return (
        <div className="lesson-button-container">
            {JAPANESE_LEVELS.map(level => {
                return <LevelButton level={level} key={level} />
            })}
        </div>
    )

}