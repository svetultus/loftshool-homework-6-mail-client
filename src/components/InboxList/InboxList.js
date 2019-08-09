// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from 'react';
import MailList from '../MailList';
import Mail from '../Mail';
import { withData } from '../../context/Data';
import { Switch, Route, Redirect } from 'react-router-dom';

export default class extends React.Component {
  render() {
    const List = withData(props => <MailList type="inbox" {...props} />);
    const Message = withData(props => <Mail type="inbox" {...props} />);
    return (
      <React.Fragment>
        <h3 className="AppRouter_title">Inbox</h3>
        <div className="MailList_container t-inbox-list">
          <Switch>
            <Route path="/app/inbox" exact component={List} />
            <Route path="/app/inbox/:id" component={Message} />
            <Redirect to="/app/inbox" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
