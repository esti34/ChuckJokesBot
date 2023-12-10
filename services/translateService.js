import { getTranslation } from "./../api/translateApi.js";

export const translate = async (text, languageName) => {
  return await getTranslation(text, languageName);
}
