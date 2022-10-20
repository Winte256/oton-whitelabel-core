import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconButton, Typography, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

type Props = {
  refLink: string;
};

const RefClipboard: React.FunctionComponent<Props> = ({refLink}) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    setCopied(true);
    setTimeout(
      () => {
        setCopied(false);
      },
      5000
    )
  };
  
  return (
    <Box >
      <Typography sx={{
        opacity: 0.4,
        fontSize: '12px',
        mb: '-8px'
      }}>
        {t('Personal link')}
      </Typography>
      <Box sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Typography sx={{
          color: 'secondary.main',
          mr: '9px'
        }}>
          {refLink}
        </Typography>
        <CopyToClipboard text={refLink}
          onCopy={handleClick}>
          <IconButton size="small">
            <ContentCopyIcon fontSize="small" color="secondary"/>
          </IconButton>
          
        </CopyToClipboard>
        {
          copied && <Typography sx={{
            textTransform: 'uppercase',
            color: 'secondary.main',
            fontWeight: 'bold'
          }}>
            {t('Copied!')}
          </Typography>
        }
      </Box>
      
    </Box>
  );
};

export default RefClipboard;