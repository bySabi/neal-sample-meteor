import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import 'neal-react/css/base.scss';
import App from './ui/App';

Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  ReactDOM.render(<App />, document.getElementById("render-target"));
});
