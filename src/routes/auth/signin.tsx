import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {};

const Signin = (props: Props) => {
  const { t } = useTranslation('auth');
  return <div>{t('signin')} page</div>;
};

export default Signin;
