import { getJokesPage } from "./../api/jokesDataApi.js";
import { load } from 'cheerio'

export const getJokes = async () => {
  const html = await getJokesPage();
  const $ = load(html);
  const listLine = $(".m-detail--body ol li");
  return listLine.map((index, element) => $(element).text()).get();
};
