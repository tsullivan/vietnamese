const appData = {
  numbers: [
    { e: '1', v: 'môt' },
    { e: '2', v: 'hái' },
    { e: '3', v: 'ba' },
    { e: '4', v: 'bồn' },
    { e: '5', v: 'năm' },
    { e: '6', v: 'sáu' },
    { e: '7', v: 'bảy' },
    { e: '8', v: 'tám' },
    { e: '9', v: 'chín' },
    { e: '10', v: 'mứỏi' },
  ]
};

interface Challenge {
  questionText: string;
  answerTexts: string[];
}

// TODO Levels & Points
export const getChallenge = (): Challenge => {
  const questionText = appData.numbers[0].v;
  const answerTexts = [appData.numbers[1].e ];

  return {
    questionText,
    answerTexts,
  };
};
