// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

export default class extends React.Component {
  render() {
    const List = withData(props => <MailList {...props} />);
    return (
      <React.Fragment>
        <h3 className="AppRouter_title">Inbox</h3>
        <List type="outbox" />
      </React.Fragment>
    );
  }
}
