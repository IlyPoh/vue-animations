export const splitTextWithSpan = (text) => {
  const splittedText = text.split(' ');
  return splittedText.map((word) => {
    return <span key={word}>{word}</span>;
  });
};
