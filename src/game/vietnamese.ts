import { range, sample, shuffle } from 'lodash';

type Language = 'en' | 'vn';
type AppData = {
  [key: string]: {
    [key: number]: {
      [lang in Language]: string;
    };
    length: number;
  };
};

const appData: AppData = {
  numbers: [
    { en: '0', vn: 'không' },
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
  ],
  animals: [
    { en: 'bear', vn: 'gấu' },
    { en: 'cat', vn: 'mèo' },
    { en: 'dog', vn: 'chó' },
    { en: 'fish', vn: 'cá' },
  ],
  people: [
    { en: 'big brother', vn: 'anh trai' },
    { en: 'grandmother', vn: 'bà ngoại , bà nội ( paternal)' },
    { en: 'dad', vn: 'ba , cha , bố' },
    { en: 'little sister', vn: 'em gái' },
    { en: 'man', vn: 'đàn ông' },
    { en: 'woman', vn: 'đàn bà' },
    { en: 'mom', vn: 'mẹ , má' },
  ],
  'the body': [
    { en: 'ear', vn: 'tai' },
    { en: 'eyes', vn: 'mắc' },
    { en: 'face', vn: 'mặt' },
    { en: 'foot', vn: 'chân' },
    { en: 'hair', vn: 'tóc' },
    { en: 'hand', vn: 'tay' },
    { en: 'heart', vn: 'tim' },
    { en: 'mouth', vn: 'miệng' },
    { en: 'nose', vn: 'mủi' },
    { en: 'teeth', vn: 'răng' },
  ],
  objects: [
    { en: 'brick', vn: 'gạch' },
    { en: 'candy', vn: 'kẹo' },
    { en: 'cloud', vn: 'mây' },
    { en: 'house', vn: 'nhà' },
    { en: 'pants', vn: 'quần' },
    { en: 'shirt', vn: 'áo' },
    { en: 'socks', vn: 'dớ' },
    { en: 'wheat', vn: 'khoai mì' },
    { en: 'shoes', vn: 'giầy' },
  ],
  science: [
    { en: 'planet', vn: 'hành tin' },
    { en: 'star', vn: 'ngôi sao' },
    { en: 'sun', vn: 'mặt trời' },
    { en: 'moon', vn: 'mặt trăng' },
  ],
  opposites: [
    { en: 'cold', vn: 'lạnh' },
    { en: 'dry', vn: 'khô' },
    { en: 'no', vn: 'không' },
    { en: 'hot', vn: 'nòng' },
    { en: 'maybe', vn: 'cò thể' },
    { en: 'new', vn: 'mới' },
    { en: 'pretty', vn: 'đẹp' },
    { en: 'ugly', vn: 'xàu' },
    { en: 'wet', vn: 'ười' },
    { en: 'yes', vn: 'có' },
    { en: 'old', vn: 'cũ' },
  ],
  actions: [
    { en: `let's go`, vn: 'đi' },
    { en: 'drink water', vn: 'uống nước' },
    { en: 'eat rice', vn: 'ăn cơm' },
    { en: 'go home', vn: 'đi về' },
    { en: 'go take a bath/shower', vn: 'đi tấm' },
    { en: 'go to school', vn: 'đi học' },
    { en: 'kiss', vn: 'hôn' },
    { en: 'go to sleep', vn: 'đi ngũ đi' },
    { en: 'go to work', vn: 'đi làm' },
    { en: 'to build', vn: 'xây' },
    { en: 'to drive', vn: 'lài xe' },
    { en: 'to hold', vn: 'õm' },
    { en: 'to make', vn: 'lám' },
    { en: 'to nap', vn: 'ngũ trưa' },
    { en: 'to pick up', vn: 'ấm' },
    { en: 'to play', vn: 'chơi' },
    { en: 'open the door', vn: 'mớ cửa' },
    { en: 'sleep', vn: 'ngũ' },
    { en: 'smile', vn: 'cừơi' },
  ],
  numbersAlt: [
    { en: 'eight', vn: 'tám' },
    { en: 'eleven', vn: 'mừỏi một' },
    { en: 'five', vn: 'năm' },
    { en: 'four', vn: 'bốn' },
    { en: 'nine', vn: 'chín' },
    { en: 'one', vn: 'một' },
    { en: 'seven', vn: 'bảy' },
    { en: 'ten', vn: 'mừỏi' },
    { en: 'thirteen', vn: 'mừỏi ba' },
    { en: 'three', vn: 'ba' },
    { en: 'twelve', vn: 'mừỏi hai' },
    { en: 'two', vn: 'hai' },
    { en: 'zero', vn: 'không' },
    { en: 'six', vn: 'sáu' },
  ],
};

interface Challenge {
  category: string;
  text: string;
  answer: string;
  options: string[];
}

type AppCategory =
  | 'numbers'
  | 'animals'
  | 'people'
  | 'the body'
  | 'objects'
  | 'science'
  | 'opposites'
  | 'actions'
  | 'numbersAlt';

const createChallenge = (from: Language, to: Language, previous?: Challenge) => {
  const category = sample(Object.keys(appData)) as AppCategory;
  let text: string | undefined = undefined;
  let answer: string | undefined = undefined;
  let options: string[] | undefined = undefined;

  while (text === undefined) {
    const idx = sample(range(0, appData[category].length)) as number;
    answer = appData[category][idx][to];
    options = [answer];
    if (!previous || answer !== previous.answer) {
      text = appData[category][idx][from];
    }
  }

  if (!answer || !options) {
    throw new Error('this error will never be seen');
  }

  // TODO: more options as it gets harder
  while (options.length < Math.min(3, appData[category].length)) {
    const idx2 = sample(range(0, appData[category].length)) as number;
    const fake = appData[category][idx2][to];
    if (!options.includes(fake)) {
      options.push(fake);
    }
  }

  return {
    category,
    text,
    answer,
    options,
  };
};

// TODO Levels & Points
export const getChallenge = (
  previous?: Challenge
): Challenge & { shuffle: () => string[] } => {
  const langs = shuffle(['vn', 'en']) as [Language, Language];
  const { category, text, answer, options } = createChallenge(
    langs[0],
    langs[1],
    previous
  );

  return {
    category,
    text,
    answer,
    options: shuffle(options),
    shuffle: () => shuffle(options),
  };
};
