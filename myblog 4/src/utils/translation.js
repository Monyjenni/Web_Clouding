import enData from "../locales/en.json";
import khData from "../locales/kh.json";

export const defaultLang = 'en';
export const langs = [
    {
        en: 'EN'
    },
    {
        kh: 'KH'
    }
];

export const trans = (key, lang = defaultLang) => {
    const arrKey = key.split('.');
    let tranValue = lang === defaultLang ? enData : khData;
    for (const tranKey of arrKey) {
        if (tranValue[tranKey] === undefined) {
            tranValue = '';
            return;
        }
        tranValue = tranValue[tranKey];
    }

    return tranValue;
}