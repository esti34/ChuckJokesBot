import axios from "axios";
import { randomUUID } from "crypto";

const apiKey = process.env.AZURE_TRANSLATOR_API_KEY;

export async function getTranslation(text, languageCode) {
  var response = await axios({
    baseURL: "https://api.cognitive.microsofttranslator.com",
    url: "/translate",
    method: "post",
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey,
      "Ocp-Apim-Subscription-Region": "northeurope",
      "Content-type": "application/json; charset=UTF-8",
      "X-ClientTraceId": randomUUID().toString(),
    },
    params: getParams(languageCode),
    data: [{ text: text }],
    responseType: "json",
  });
  return response.data[0].translations[0].text;
}

function getParams(languageCode) {
  var params = new URLSearchParams();
  params.append("api-version", "3.0");
  params.append("from", "en");
  params.append("to", languageCode);
  params.append("includeSentenceLength; charset=UTF-8", "true");
  return params;
}