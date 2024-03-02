// Sample data
const answers = [
    {
        question: 'What is the capital of France?',
        response: 'Paris',
        isCorrect: true,
        isEssayQuestion: false,
        points: 5
    },
    {
        question: 'What are lysosomes?',
        response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
        isCorrect: true,
        isEssayQuestion: true,
        points: 10
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        response: 'William Shakespeare',
        isCorrect: true,
        isEssayQuestion: false,
        points: 8
    },
    {
        question: 'What is the capital of Germany?',
        response: 'Berlin',
        isCorrect: true,
        isEssayQuestion: false,
        points: 5
    },
    {
        question: 'What is the powerhouse of the cell?',
        response: 'Mitochondria',
        isCorrect: true,
        isEssayQuestion: false,
        points: 6
    },
    {
        question: 'Who painted the Mona Lisa?',
        response: 'Leonardo da Vinci',
        isCorrect: true,
        isEssayQuestion: false,
        points: 7
    },
    {
        question: 'Explain the process of photosynthesis.',
        response: 'Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll present in their cells.',
        isCorrect: true,
        isEssayQuestion: true,
        points: 12
    },
    {
        question: 'What is the largest planet in our solar system?',
        response: 'Jupiter',
        isCorrect: true,
        isEssayQuestion: false,
        points: 8
    }
];
// function to count correct answers
function countCorrectAnswers(answers) {
    return answers.reduce((correct, answer) => {
        // increment correct if answer is correct using ? : syntax
        return answer.isCorrect ? correct + 1 : correct;
    }, 0);
}
const correctAnswerCount = countCorrectAnswers(answers)
console.log(correctAnswerCount)
