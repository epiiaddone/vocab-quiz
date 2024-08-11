import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { toggleDarkMode } from '../features/darkmode/darkmodeSlice';
import { useDispatch, useSelector } from 'react-redux';

export const DarkModeButton = () => {
    const dispatch = useDispatch();
    const { isDarkMode } = useSelector(store => store.darkmode)

    return (
        <section className='absolute right-5 top-5'>
            <button className='' onClick={() => dispatch(toggleDarkMode())}>
                {isDarkMode ? (
                    <BsFillMoonFill className='text-yellow-50' />
                ) : (
                    <BsFillSunFill className='' />
                )}
            </button>
        </section>
    )
}

