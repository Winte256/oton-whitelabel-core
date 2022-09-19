import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FULFILLED,
  INIT,
  PENDING,
  StatusType,
} from '../constants/fetchStatuses';

type Props = {};

const LanguageSwitcher = (props: Props) => {
  const { i18n } = useTranslation();
  const [isWait, setIsWait] = useState(false);
  const [listState, setListState] = useState<StatusType>(INIT);
  const [supportedLngs, setSupportedLngs] = useState<string[]>([]);

  const changeLang = async (lang: string) => {
    if (isWait) {
      return;
    }
    setIsWait(true);
    i18n.changeLanguage(lang);
    setIsWait(false);
  };

  const fetchLangList = async () => {
    if (listState === PENDING || listState === FULFILLED) {
      return;
    }
    setListState(PENDING);
    const data = await i18n.services.backendConnector.backend.getOptions();
    setSupportedLngs(data.supportedLngs);

    setListState(FULFILLED);
  };

  useEffect(() => {
    fetchLangList();
  });

  return (
    <div>
      {supportedLngs.map((lang) => (
        <Button key={lang} onClick={() => changeLang(lang)}>
          {lang}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
