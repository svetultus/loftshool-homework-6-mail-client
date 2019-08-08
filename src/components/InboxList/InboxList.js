// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from 'react';
import MailList from '../MailList';
import Mail from '../Mail';
import { withData } from '../../context/Data';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mailList = withData(props => <MailList type="inbox" {...props} />);
    const mail = withData(props => <Mail {...props} />);
    return (
      <React.Fragment>
        <h3 className="AppRouter_title">Inbox</h3>
        <div className="MailList_container t-inbox-list">
          <Switch>
            <Route exact path="/inbox" component={mailList} />
            <Route path="/inbox/:id" component={mail} />
          </Switch>
          {/* <List type="inbox" /> */}
        </div>
      </React.Fragment>
    );
  }
}
