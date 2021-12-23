import React, { useState } from 'react';
import { LanguageSwitch } from './presentational/LanguageSwitch';
import { t as translate } from './containers/Translate';

function App() {
  const [lang, setLanguage] = useState('pt');
  const t = translate.bind(null, lang);

  return (
    <>
      <header className="header">
        <LanguageSwitch languages={['pt', 'en', 'nl']} selected={lang} onChange={setLanguage} />
        <span id="logo" aria-label="Logo: Comunidade Vida Plena"></span>
        <h1>{t('Estamos renovando o site!')}</h1>
      </header>

      <section className="body">
          <h2>{t('Mas você pode nos encontrar ativos nas redes sociais. Nosso endereço físico é:')}</h2>
          <h3 className="address">
              <span>Kometensingel 58, 1033 BW Amsterdam.</span>
              <a href="https://goo.gl/maps/pf8H7KWbSFiaEcneA" target="blank">{t('Maps')}</a>
          </h3>
          <p className="contact">{t('Contato: +31 6 1665 8910 (WhatsApp)')}</p>
          <h4>{t('Horários de funcionamento')}</h4>
          <dl className="hours">
              <dt>{t('Domingo')}</dt>
              <dd>14:30</dd>
          </dl>
          <p className="contact"><b>{t('Culto nas casas')}</b> - <i>{t('Consulte no WhatsApp acima')}</i></p>
          <ul className="social">
              <li><a href="https://www.facebook.com/vpholanda" target="blank" className="facebook" aria-label="Facebook VP">Facebook VP</a></li>
              <li><a href="https://www.instagram.com/vpholanda" target="blank" className="instagram" aria-label="Instagram VP">Instagram VP</a></li>
              <li><a href="https://www.youtube.com/c/vpholanda" target="blank" className="youtube" aria-label="Youtube VP">Youtube VP</a></li>
              <li><a href="https://soundcloud.com/vpholanda" target="blank" className="soundcloud" aria-label="Soundcloud VP">Soundcloud VP</a></li>
          </ul>
      </section>

      <footer>
          <p>{t('Comunidade Evangélica Vida Plena')} &copy;</p>
          <address>{t('Endereço de visita')} - Kometensingel 58, 1033 BW Amsterdam</address>
          <address>{t('Correspondência')} - Postbus 22065 1302CB Almere</address>
      </footer>
    </>
  );
}

export default App;
