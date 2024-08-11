import { useDispatch, useSelector } from "react-redux";
import { handleOrderClick } from "../features/menu/menuSlice";
import { MENU_ORDER } from "../utils/constants";

const MenuButtons = () => {
    const dispatch = useDispatch();

    const { order } = useSelector(store => store.menu)

    const numericalHighlightClass = order === MENU_ORDER.NUMERICAL ? ' primary-bg ' : "";
    const oldestHighlightClass = order === MENU_ORDER.OLDEST ? ' primary-bg ' : "";
    const lowestHighlightClass = order === MENU_ORDER.LOWEST ? ' primary-bg ' : "";

    return (
        <div
            className="flex gap-4 justify-center my-8"
        >
            <button
                className={`rounded-md py-2 px-4 text-center border-x border-y
                                 border-slate-400 bg-white dark:text-yellow-50
                                 dark:bg-gray-500 dark:border-yellow-50`
                    + numericalHighlightClass}
                onClick={() => dispatch(handleOrderClick(MENU_ORDER.NUMERICAL))}>
                Numerical Order
            </button>
            <button
                className={`rounded-md py-2 px-4 text-center border-x border-y
                                 border-slate-400 bg-white  dark:text-yellow-50
                                 dark:bg-gray-500 dark:border-yellow-50`
                    + oldestHighlightClass}
                onClick={() => dispatch(handleOrderClick(MENU_ORDER.OLDEST))}>
                Oldest Review
            </button>
            <button
                className={`rounded-md py-2 px-4 text-center border-x border-y
                                 border-slate-400 bg-white  dark:text-yellow-50
                                 dark:bg-gray-500 dark:border-yellow-50`
                    + lowestHighlightClass}
                onClick={() => dispatch(handleOrderClick(MENU_ORDER.LOWEST))}>
                Lowest Score
            </button>
        </div>
    )
}

export default MenuButtons;