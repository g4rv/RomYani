export type TestData = {
    question: string;
    answers: string[];
    correctAnswer: string;
    currAnswer: string;
}

export type TestsArr = TestData[]

export type TestState = 'inProgress' | 'passed' | 'failed'