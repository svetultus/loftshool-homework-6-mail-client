import React from 'react';
import { Redirect } from 'react-router-dom';

export default ({ match, type, data }) => {
  const id = match.params.id;
  const messagelist = data[type];
  const message = messagelist.find(elem => {
    return elem.id === id;
  });

  return message ? (
    <div className="Mail_container">
      {type === 'inbox' && (
        <p className="t-mail-from">
          From: <b>{message.from}</b>
        </p>
      )}
      {type === 'outbox' && (
        <p className="t-mail-to">
          To: <b>{message.to}</b>
        </p>
      )}
      <p className="t-mail-body">{message.body}</p>
    </div>
  ) : (
    <Redirect to={'/app/' + type} />
  );
};
