import React from 'react';
import styles from './Home.module.css';
// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
export default () => (
  <div className={styles.container + ' t-greeting'}>
    Приветствуем в почтовом клиенте!
  </div>
);
