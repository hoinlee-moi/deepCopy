const range = (start, end, step = start > end ? -1 : 1) => {
  if (start === end) return [start];
  if ((start - end) * step > 0) return [];

  const tmp = start;
  end = end ?? (start > 0 ? ((start = 1), tmp) : start % 2);

  const results = [];
  if (step === 0) return [start];

  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    results.push(i);
  }

  return results;
};
export { range };
