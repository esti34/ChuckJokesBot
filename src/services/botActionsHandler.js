import { translate } from "./translateService.js";
import { getJokes } from "./dataService.js";

var currentLangCode = "en";
const jokes = await getJokes();

export async function handleSelectJoke(jokeNumber) {
  if (jokeNumber > 0 && jokeNumber < 102) {
    return await translate(jokes[jokeNumber - 1], currentLangCode);
  } else {
    return "wrong number";
  }
}

export async function handleSetLanguage(match) {
  var languageCode = await detectLanguage(match[1]);
  if (languageCode != "wrong") {
    currentLangCode = languageCode;
    return await translate("no problem", languageCode);
  }
  else {
    return languageCode;
  }
}