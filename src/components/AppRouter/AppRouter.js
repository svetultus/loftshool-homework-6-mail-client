import React from 'react';
// import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Home from '../Home';
// import LoginForm from '../LoginForm';
// import InboxList from '../InboxList';
// import InboxMail from '../InboxMail';
// import OutboxList from '../OutboxList';
// import OutboxMail from '../OutboxMail';
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

export default () => {
  // const home = () => <Home />;
  // const inboxList = () => <InboxList />;
  // const inboxMail = () => <InboxMail />;
  // const outboxList = () => <OutboxList />;
  // const outboxMail = () => <OutboxMail />;
  // const loginForm = () => <LoginForm />;

  return (
    <div className="AppRouter_container">
      <ul className="AppRouter_navList t-nav-list">
        <li className="AppRouter_navElement">
          <Link className="AppRouter_linkt-link-home active" to="/home">
            Home
          </Link>
        </li>
        <li className="AppRouter_navElement">
          <Link className="AppRouter_linkt-link-home active" to="/login">
            Login
          </Link>
        </li>
        <li className="AppRouter_navElement">
          <Link className="AppRouter_linkt-link-inbox" to="/inbox">
            Inbox
          </Link>
        </li>
        <li className="AppRouter_navElement">
          <Link className="AppRouter_linkt-link-outbox" to="/outbox">
            Outbox
          </Link>
        </li>
      </ul>
      <div className="AppRouter_content" />
    </div>
  );
};
