import { createSlice } from "@reduxjs/toolkit"
import { GAME_STATUS } from "../../utils/constants";
import { getLevelData } from "../../utils/levelMatch";

const initialState = {
    level: 0,
    isPractiseMode: false,
    wrongAnswers: [],
    correctCount: 0,
    wrongCount: 0,
    questionNumber: 1,
    gameStatus: GAME_STATUS.MENU,
    questionOrder: []
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        handleLevelSelect: (state, { payload }) => {
            state.level = payload;
            state.gameStatus = GAME_STATUS.QUESTION
            state.isPractiseMode = false
            const levelData = getLevelData(state.level)
            for (let i = 0; i < levelData.length; i++) {
                state.questionOrder.push(i)
            }
            for (let i = state.questionOrder.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [state.questionOrder[i], state.questionOrder[j]] = [state.questionOrder[j], state.questionOrder[i]];
            }
        },
        handleRevealClick: (state) => {
            state.gameStatus = GAME_STATUS.ANSWER
        },
        handleCorrectClick: (state) => {
            state.gameStatus = GAME_STATUS.QUESTION
            state.correctCount++
            state.questionNumber++
            if (state.questionOrder[state.questionNumber - 1] === undefined) {
                if (state.wrongAnswers.length > 0) state.isPractiseMode = true;
                else state.gameStatus = GAME_STATUS.GAMEOVER
            }
        },
        handlePractiseCorrectClick: (state) => {
            state.wrongAnswers.pop();
            if (state.wrongAnswers.length === 0) {
                state.gameStatus = GAME_STATUS.GAMEOVER
            } else {
                state.gameStatus = GAME_STATUS.QUESTION
                for (let i = state.wrongAnswers.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [state.wrongAnswers[i], state.wrongAnswers[j]] = [state.wrongAnswers[j], state.wrongAnswers[i]];
                }
            }
        },
        handleWrongClick: (state) => {
            state.gameStatus = GAME_STATUS.QUESTION
            state.wrongAnswers.push(state.questionOrder[state.questionNumber - 1])
            state.questionNumber++
            if (state.questionOrder[state.questionNumber - 1] === undefined) {
                state.isPractiseMode = true;
            }
            state.wrongCount++
        },
        handlePractiseWrongClick: (state) => {
            state.gameStatus = GAME_STATUS.QUESTION
            for (let i = state.wrongAnswers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [state.wrongAnswers[i], state.wrongAnswers[j]] = [state.wrongAnswers[j], state.wrongAnswers[i]];
            }
        },
        handleHomeClick: (state) => {
            state.gameStatus = GAME_STATUS.MENU
            state.questionNumber = 1
            state.wrongAnswers = []
            const correctPercent = Math.round(state.correctCount * 100 / state.questionOrder.length);
            const scores = JSON.parse(localStorage.getItem('scores'));
            let newScores = [];
            if (scores) {
                newScores = scores.filter(score => score["level"] != state.level)
            }
            newScores.push({
                level: state.level,
                percent: correctPercent,
                date: new Date()
            })
            localStorage.setItem('scores', JSON.stringify(newScores));
            state.questionOrder = []
            state.correctCount = 0
            state.wrongCount = 0
            state.level = 0
        },
        gameOver: (state) => {
            state.gameStatus = GAME_STATUS.GAMEOVER
        },
        exitGame: (state) => {
            state.gameStatus = GAME_STATUS.MENU
            state.questionOrder = []
            state.correctCount = 0
            state.wrongCount = 0
            state.level = 0
            state.questionNumber = 1
            state.wrongAnswers = []
            state.isPractiseMode = false
        }
    }

})

export const {
    handleLevelSelect,
    handleRevealClick,
    handleCorrectClick,
    handleWrongClick,
    handleHomeClick,
    gameOver,
    handlePractiseCorrectClick,
    handlePractiseWrongClick,
    exitGame
} = gameSlice.actions;

export default gameSlice.reducer;