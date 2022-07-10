/**
 * [
 *   ["Bob", "87"],
 *   ["Mike", "35"],
 *   ["Bob", "52"],
 *   ["Jason", "35"],
 *   ["Mike", "55"],
 *   ["Jessica", "99"]
 * ]
 */

const getHighestAvgScorer = (scores) => {
  let maxOccurrences = 0;

  const scorers = scores.reduce((reduced, each) => {
    const [name, score] = each;
    if (!reduced[name]) {
      reduced[name] = {
        score: 0,
        occurrences: 0
      };
    }
    reduced[name].score = reduced[each.name]?.score ?? 0 + Number(score);
    reduced[name].occurrences++;
    maxOccurrences = maxOccurrences > reduced[name].occurrences ? maxOccurrences : reduced[name].occurrences;
    return reduced;
  }, {});

  return Object.entries(scorers).reduce((maxAvgScorer, each) => {
    const [name, { score }] = each;
    const avg = score / maxOccurrences;
    if (maxAvgScorer.score < avg) {
      return {
        name, score
      };
    }
    return maxAvgScorer;
  }, {
    name: '',
    score: 0
  });
};
