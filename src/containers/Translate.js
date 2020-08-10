import pt from '../translations/pt.json';
import en from '../translations/en.json';
import nl from '../translations/nl.json';

const map = {
    pt,
    en,
    nl,
}

export function t(language, text) {
    const mapped = map[language];

    if (!mapped) {
        throw new Error(`No translations for language ${language}`);
    }

    return text in mapped ? mapped[text] : `[NTF: ${text}]`;
}