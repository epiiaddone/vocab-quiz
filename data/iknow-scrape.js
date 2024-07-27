let stuff = ``;
let divs = document.querySelectorAll('.cue-response');
divs.forEach(div => {
    let japElement = div.querySelector('.cue');
    let jap = japElement.innerHTML;

    let kanaElement = div.querySelector('.transliteration');
    let kana = kanaElement ? kanaElement.innerHTML : "";
    kana = kana.replaceAll("<!-- react-text:", "");
    kana = kana.replaceAll("<!-- /react-text -->", "");
    kana = kana.replaceAll("-->[", "");
    kana = kana.replaceAll("-->]", "");
    kana = kana.replaceAll("-->", "");
    const digitsRegex = /[0-9]/g;
    kana = kana.replaceAll(digitsRegex, "");
    kana = kana.trim();

    let engElement = div.querySelector('.response');
    let eng = engElement ? engElement.innerHTML : "";

    stuff += `["${jap}", "${kana}", "${eng}"],`;
})