// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  const { type, data } = props;
  const mailList = type !== 'outbox' ? data.inbox : data.outbox;

  return (
    <React.Fragment>
      {mailList.map(elem => {
        const header = elem.body.slice(0, 51).trim() + '...';
        const href = `/app/${type}/${elem.id}`;

        return (
          <Link className="MailList_link" to={href} key={elem.id}>
            {header}
          </Link>
        );
      })}
    </React.Fragment>
  );
};
