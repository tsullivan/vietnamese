import { range, sample, shuffle } from 'lodash';

interface ChallengeSource {
  en: string,
  vn: string,
}

type AppData = {
  numbers: {
    [key: number]: ChallengeSource;
    length: number;
  }
};

const appData: AppData = {
  numbers: [
    { en: '0', vn: 'khom' },
    { en: '1', vn: 'một' },
    { en: '2', vn: 'hai' },
    { en: '3', vn: 'ba' },
    { en: '4', vn: 'bồn' },
    { en: '5', vn: 'năm' },
    { en: '6', vn: 'sáu' },
    { en: '7', vn: 'bảy' },
    { en: '8', vn: 'tám' },
    { en: '9', vn: 'chín' },
    { en: '10', vn: 'mừỏi' },
  ]
};

interface Challenge {
  text: string;
  options: string[];
  answer: string;
}

// TODO Levels & Points
export const getChallenge = (): Challenge => {
  const idx = sample(range(0, appData.numbers.length - 1)) as number;
  const text = appData.numbers[idx].vn;
  const answer = appData.numbers[idx].en;
  const options: string[] = [answer];

  while (options.length < 3) {
    const idx2 = sample(range(0, appData.numbers.length - 1)) as number;
    const fake = appData.numbers[idx2].en;
    if (!options.includes(fake)) {
      options.push(fake);
    }
  }

  return {
    text,
    answer,
    options: shuffle(options),
  };
};
