const PARAMETERS_ARRAY = ['-c', '--config', '-i', '--input', '-o', '--output'];
const PARAMETERS_PATTERNS = ['C0', 'C1', 'R0', 'R1', 'A'];
const ALPHABET_LENGTH = 26;
const ALPHABET_UPPER_CASE = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];
const ALPHABET_LOWER_CASE = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];

module.exports = {
  PARAMETERS_ARRAY,
  ALPHABET_LENGTH,
  ALPHABET_UPPER_CASE,
  ALPHABET_LOWER_CASE,
  PARAMETERS_PATTERNS };