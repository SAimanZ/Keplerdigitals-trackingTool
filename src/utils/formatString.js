import moment from 'moment';
// export const formatString = (str, type) => {
//   let string = str;
//   if (type && type === 'date') {
//     string = moment(new Date(str)).format('L');
//   }
//   const words = string.split(' ');
//   const lines = [];
//   let line = '';

//   for (const word of words) {
//     if (line.length + word.length <= 12) {
//       line += word + ' ';
//     } else {
//       lines.push(line.trim());
//       line = word + ' ';
//       if (lines.length === 2) {
//         lines[1] += '...';
//         break;
//       }
//     }
//   }

//   if (line.length > 0 && lines.length < 2) {
//     lines.push(line.trim());
//   }
//   return lines;
// };

export const formatString = (str, type) => {
  let string = str;
  if (type && type === 'date') {
    string = moment(new Date(str)).format('L');
  }

  const result = [];
  const words = string.split(' ');

  if (words.length === 1 && string.length > 10) {
    // Scenario 1: Truncate the string to 10 characters and add '...'
    result.push(string.substr(0, 10) + '...');
  } else {
    if (words.length === 2) {
      // Scenario 2: Return the two words in an array
      if (words[0].length + words[1].length < 12) {
        result.push(words[0] + ' ' + words[1]);
      } else {
        result.push(words[0]);
        result.push(words[1]);
      }
    } else if (words.length > 2) {
      // Scenario 3: Return first two words and add '...' at the end of the second word
      result.push(words[0]);
      result.push(words[1] + '...');
    } else {
      // Single word case or empty string
      result.push(string);
    }
  }
  return result;
};
