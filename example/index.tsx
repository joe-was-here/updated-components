import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Input } from '../.';

const App = () => {
  return (
    <div>
      <Input id="testing" name="testing" label="Here we go" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
