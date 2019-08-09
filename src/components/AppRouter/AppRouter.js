import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import styles from '../AppRouter/AppRouter.module.css';

// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

export default () => {
  const home = () => (
    <React.Fragment>
      <h3 className={styles.title}>Home</h3>
      <Home />
    </React.Fragment>
  );
  const inboxList = () => (
    <React.Fragment>
      <h3 className={styles.title}>Inbox</h3>
      <InboxList />
    </React.Fragment>
  );
  const inboxMail = () => (
    <React.Fragment>
      <h3 className={styles.title}>InboxMail</h3>
      <InboxMail />;
    </React.Fragment>
  );
  const outboxList = () => (
    <React.Fragment>
      <h3 className={styles.title}>Outbox</h3>
      <OutboxList />
    </React.Fragment>
  );
  const outboxMail = () => (
    <React.Fragment>
      <h3 className={styles.title}>OutboxMail</h3>
      <OutboxMail />
    </React.Fragment>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <ul className={styles.navList + ' t-nav-list'}>
            <li className={styles.navElement}>
              <Link className={styles.link + ' t-link-home'} to="/app/home">
                Home
              </Link>
            </li>
            <li className={styles.navElement}>
              <Link className={styles.link + ' t-link-inbox'} to="/app/inbox">
                Inbox
              </Link>
            </li>
            <li className={styles.navElement}>
              <Link className={styles.link + ' t-link-outbox'} to="/app/outbox">
                Outbox
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <Route path="/app" exact component={home} />
          <Route path="/app/home" component={home} />
          <Route path="/app/inbox" component={inboxList} />
          <Route path="/app/inboxMail" component={inboxMail} />
          <Route path="/app/outbox" component={outboxList} />
          <Route path="/app/outboxMail" component={outboxMail} />
        </div>
      </div>
    </div>
  );
};
