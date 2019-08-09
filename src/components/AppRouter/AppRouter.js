import React from 'react';
// import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
// import { AuthProvider } from '../../context/Auth';
// import { DataProvider, withData } from '../../context/Data';
import '../AppRouter/AppRouter.module.css';

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

export default props => {
  const home = () => <Home />;
  const inboxList = () => <InboxList />;
  const inboxMail = () => <InboxMail />;
  const outboxList = () => <OutboxList />;
  const outboxMail = () => <OutboxMail />;
  return (
    <div className="AppRouter_container">
      <ul className="AppRouter_navList t-nav-list">
        <li className="AppRouter_navElement">
          <Link className="AppRouter_linkt-link-home active" to="/app/home">
            Home
          </Link>
        </li>
        <li className="AppRouter_navElement">
          <Link className="AppRouter_linkt-link-inbox" to="/app/inbox">
            Inbox
          </Link>
        </li>
        <li className="AppRouter_navElement">
          <Link className="AppRouter_linkt-link-outbox" to="/app/outbox">
            Outbox
          </Link>
        </li>
      </ul>
      <div className="AppRouter_content">
        <Route path="/app/home" component={home} />
        <Route path="/app/inbox" component={inboxList} />
        <Route path="/app/inboxMail" component={inboxMail} />
        <Route path="/app/outbox" component={outboxList} />
        <Route path="/app/outboxMail" component={outboxMail} />
      </div>
    </div>
  );
};
