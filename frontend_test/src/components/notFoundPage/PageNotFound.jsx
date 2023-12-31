import React from 'react';
import { useTranslation } from 'react-i18next';

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="text-center">
        <img
          alt={t('pageNotFound.msg1')}
          className="img-fluid h-25"
          src="https://cdn2.hexlet.io/assets/error-pages/404-4b6ef16aba4c494d8101c104236304e640683fa9abdb3dd7a46cab7ad05d46e9.svg"
        />
        <h1 className="h4 text-muted">{t('pageNotFound.msg1')}</h1>
        <p className="text-muted">
          {t('pageNotFound.msg2')}
          {' '}
          <a href="/">
            {t('pageNotFound.msg3')}
          </a>
        </p>
      </div>
      <hr />
    </>
  );
};

export default PageNotFound;
