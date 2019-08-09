// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from 'react';
import MailList from '../MailList';
import Mail from '../Mail';
import { withData } from '../../context/Data';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './OutboxList.module.css';

export default class extends React.Component {
  render() {
    const List = withData(props => <MailList type="outbox" {...props} />);
    const Message = withData(props => <Mail type="outbox" {...props} />);
    return (
      <React.Fragment>
        <div className={styles.container + ' t-outbox-list'}>
          <Switch>
            <Route path="/app/outbox" exact component={List} />
            <Route path="/app/outbox/:id" component={Message} />
            <Redirect to="/app/outbox" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
