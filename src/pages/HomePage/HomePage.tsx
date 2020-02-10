import * as React from "react";
import "./HomePage.scss";
import Directory from '../../components/Directory/Directory'

export default class HomePage extends React.Component<any, any> {
  render() {
    return (
      <div className="homepage">
        <div className="directory-menu">
          <Directory />
        </div>
      </div>
    );
  }
}
