import { JAPANESE_LEVELS } from "../utils/constants"
import LevelButton from "./LevelButton"


export default function LevelButtonContainer() {

    return (
        <div className="flex justify-center flex-wrap gap-1">
            {JAPANESE_LEVELS.map(level => {
                return <LevelButton level={level} key={level} />
            })}
        </div>
    )

}