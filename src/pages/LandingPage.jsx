import { DarkModeButton } from "../components/DarkModeButton";
import LandingBanner from "../components/LandingBanner";
import LanguageButtons from "../components/LanguageButtons";
import LevelButtonContainer from "../components/LevelButtonContainer";
import MenuButtons from "../components/MenuButtons";

const LandingPage = () => {

    return (
        <div>
            <DarkModeButton />
            <LandingBanner />
            <LanguageButtons />
            <MenuButtons />
            <LevelButtonContainer />
        </div>
    )
}

export default LandingPage;