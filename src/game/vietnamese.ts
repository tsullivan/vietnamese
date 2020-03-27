import { range, sample } from 'lodash';

interface Challenge {
  questionText: string;
  answerTexts: string[];
}

// TODO Levels & Points
export const getChallenge = (): Challenge => {
  const a1 = sample(range(4, 15)) as number;
  const a2 = sample(range(5, 16)) as number;

  let challenge: Challenge;
  return challenge;
};
