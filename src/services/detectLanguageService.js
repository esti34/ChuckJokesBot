import iso6391 from "iso-639-1";

export async function detectLanguage(text) {
  var nameLan = iso6391.getCode(text);
  if (iso6391.validate(nameLan)) {
    return nameLan;
  }
  return "wrong";
}