/* This function is particularly useful in scenarios where you have a circular or looped navigation, such as in a carousel or slideshow, where reaching the end of the list means wrapping around to the beginning and vice versa. */
const validLoopedIndex = (n: number, length: number) => {
  const lastIndex = length - 1;

  return n > lastIndex ? 0 /* Wrap around to the first index */ : n < 0 ? lastIndex /* Wrap around to the last index */ : n;
};

export default validLoopedIndex;
