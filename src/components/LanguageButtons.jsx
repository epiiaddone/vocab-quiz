import japanFlag from "../assets/svgs/japan-flag.svg"
import chinaFlag from "../assets/svgs/china-flag.svg"
import { handleLanguageClick } from "../features/menu/menuSlice"
import { LANGUAGE } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"

export default function LanguageButtons() {
    const dispatch = useDispatch()
    const { language } = useSelector(store => store.menu)

    return (
        <div className="flex justify-center gap-8">
            <button
                onClick={() => dispatch(handleLanguageClick(LANGUAGE.JAPANESE))}>
                <img src={japanFlag} alt="Japanese"
                    className={language === LANGUAGE.JAPANESE ? "h-16" : "h-10"}
                />
            </button>
            <button
                onClick={() => dispatch(handleLanguageClick(LANGUAGE.CHINESE))}>
                <img src={chinaFlag} alt="Chinese"
                    className={language === LANGUAGE.CHINESE ? "h-16" : "h-10"}
                />
            </button>
        </div>
    )
}