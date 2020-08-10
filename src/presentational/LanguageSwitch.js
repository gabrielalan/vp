import React from 'react';

export function LanguageSwitch({ languages, selected, onChange }) {
    return <section className="languages">
        {languages.map(lng => <button onClick={() => onChange(lng)} className={selected === lng ? 'selected' : ''}>{lng}</button>)}
    </section>;
}