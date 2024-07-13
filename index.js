import { franc } from 'franc';  //using franc,langs and colors  module (npm based)
import langs from 'langs';  //Running the js script on node as node index.js 'argument'
import colors from 'colors';  //imported instead of require() since franc is an ES6 module
 
const input = process.argv[2]; //Second Argument                         //Bonjour! Je Compris Francais
const langCode = franc(input);
if (langCode === 'und') {  //Undefined
    console.log(colors.red("Sorry, Need More Sample Text to provide a closely accurate answer"));
} else {
    const language = langs.where("3", langCode);
    if (language) {
        console.log(colors.green(`The best guess is: ${language.name}`));
    } else {
        console.log(colors.red(`Sorry, Could Not Identify Language: ${langCode}`));
    }
}