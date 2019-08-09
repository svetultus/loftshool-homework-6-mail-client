import React from 'react';
import { Redirect } from 'react-router-dom';
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
export default ({ match, type, data }) => {
  const id = match.params.id;
  const messagelist = data[type];
  const message = messagelist.find(elem => {
    return elem.id === id;
  });

  return message ? (
    <div className="Mail_container">
      <p className="t-mail-from">
        From: <b>{message.from}</b>
      </p>
      <p className="t-mail-body">{message.body}</p>
    </div>
  ) : (
    <Redirect to={'/app/' + type} />
  );
};
