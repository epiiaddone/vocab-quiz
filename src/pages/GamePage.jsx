import { useSelector } from 'react-redux';

import { GAME_STATUS } from '../utils/constants';

import QuestionDisplay from '../components/QuestionDisplay';
import RevealButton from '../components/RevealButton';
import AnswerDisplay from '../components/AnswerDisplay';
import MarkingButtons from '../components/MarkingButtons';
import ScoreDisplay from '../components/ScoreDisplay';
import GameOver from '../components/GameOver';


const GamePage = () => {

    const {
        gameStatus,
        questionNumber,
        questionOrder } = useSelector(store => store.game)

    if (gameStatus === GAME_STATUS.GAMEOVER) {
        return (<GameOver />)
    }

    return (
        <div>
            <ScoreDisplay />
            <QuestionDisplay />
            {gameStatus === GAME_STATUS.QUESTION && <RevealButton />}
            {gameStatus === GAME_STATUS.ANSWER && <AnswerDisplay />}
            {gameStatus === GAME_STATUS.ANSWER && <MarkingButtons />}
        </div>
    )
}

export default GamePage;