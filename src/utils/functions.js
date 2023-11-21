/**
 * @param {number} maxSize
 */
export function randomNumber(maxSize) {
  return Math.floor(Math.random() * maxSize);
}

export function isMatch(searchOnString, searchText) {
  searchText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  return searchOnString.match(new RegExp('\\b' + searchText + '\\b', 'i')) != null;
}
