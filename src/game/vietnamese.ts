import { range, sample } from 'lodash';

interface ChallengeSource {
  e: string,
  v: string,
}

type AppData = {
  numbers: {
    [key: number]: ChallengeSource;
    length: number;
  }
};

const appData: AppData = {
  numbers: [
    { e: '0', v: 'khom' },
    { e: '1', v: 'một' },
    { e: '2', v: 'hai' },
    { e: '3', v: 'ba' },
    { e: '4', v: 'bồn' },
    { e: '5', v: 'năm' },
    { e: '6', v: 'sáu' },
    { e: '7', v: 'bảy' },
    { e: '8', v: 'tám' },
    { e: '9', v: 'chín' },
    { e: '10', v: 'mừỏi' },
  ]
};

interface Challenge {
  questionText: string;
  answerTexts: string[];
}

// TODO Levels & Points
export const getChallenge = (): Challenge => {
  const potato = sample(range(0, appData.numbers.length - 1)) as number;
  const questionText = appData.numbers[potato].v;
  const answerTexts = [appData.numbers[potato].e ];

  return {
    questionText,
    answerTexts,
  };
};
