const limitText = (text) => {
  if (text.length > 140) {
    const slicedText = text.slice(0, 140);
    return slicedText + "...";
  }

  return text;
};

export { limitText };
