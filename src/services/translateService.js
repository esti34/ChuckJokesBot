import { getTranslation } from "./../api/translateApi.js";

export async function translate(text, languageName) {
  return await getTranslation(text, languageName);
}
