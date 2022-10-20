import React, { useContext }  from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Config } from '../App';
import { mapObjIndexed, pathOr } from 'rambda';
import DocList from '../components/DocList';
import DocCard from '../components/DocCard';

function a11yProps(name: string) {
  return {
    id: `simple-tab-${name}`,
    'aria-controls': `simple-tabpanel-${name}`,
  };
};

const flags = {
  en: <span role="img" aria-label="en">🇬🇧</span>,
  ru: <span role="img" aria-label="ru">🇷🇺</span>,
  de: <span role="img" aria-label="de">🇩🇪</span>,
  tr: <span role="img" aria-label="tr">🇹🇷</span>,
};

type Props = {};

const Media = (props: Props) => {
  const { t } = useTranslation();
  const config = useContext(Config);
  const availableLangs = pathOr([], ['env', 'langs'], config);
  const media = pathOr([], ['company', 'media'], config);
  const [lang, setLang] = React.useState('en');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(newValue)
    setLang(newValue);
  };
  console.log(lang)

  return (
    <Box>
      <Tabs value={lang} onChange={handleChange} aria-label="lang tabs">
        {
          availableLangs.map((lang, index) => (
            <Tab 
              key={`tab-${lang}`}
              value={lang}
              label={
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  '& > span:last-of-type': {
                    ml: '4px'
                  }
                }}>
                  { flags[lang] }
                  <span>{lang}</span>
                </Box>
              } 
                {...a11yProps(lang)}
            />
          ))
        }
      </Tabs>
      <Box>
        {
          media.map((group: any) => (
            <DocList key={`media-group-${group.name}`} title={t(group.name)}>
              <>
                {
                  group.files.map((file: any) => (
                    file[lang] 
                      ? <DocCard title={file.name} url={file[lang]}/> 
                      : ''
                  ))
                }
              </>
            </DocList>
          ))
        }
      </Box>
    </Box>
  );
};

export default Media;
