import { translate } from "./translateService.js";
import { getJokes } from "./dataService.js";
import { detectLanguage } from "./detectLanguageService.js";


var currentLangCode = "en";
const jokes = await getJokes();

export const handleSelectJoke = async (jokeNumber) => {
  if (jokeNumber > 0 && jokeNumber < 102) {
    return await translate(jokes[jokeNumber - 1], currentLangCode);
  } else {
    return "wrong number";
  }
}

export const handleSetLanguage = async (match) => {
  var languageCode = await detectLanguage(match[1]);
  if (languageCode != "wrong") {
    currentLangCode = languageCode;
    return await translate("no problem", languageCode);
  }
  else {
    return languageCode;
  }
}