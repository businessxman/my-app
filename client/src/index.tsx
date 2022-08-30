import 'tslib';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ToolTipProvider from "./context/TooltipContext";
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './styles/screen.scss'

const Root = () => (
  <ToolTipProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ToolTipProvider>
);


//ReactDOM.render(<Root />, document.getElementById("root"));

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(<Root />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();