import React, { StrictMode } from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root') as HTMLElement


const root = ReactDOM.createRoot(
  rootElement
);
if (rootElement?.hasChildNodes()) {
  // If the root element has children, we assume that the page has been pre-rendered by `react-snap`.
  // In this case, we use `hydrate` to attach event listeners and make the app interactive.
  hydrateRoot(rootElement, (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  ));
} else {
  // If the root element is empty, we assume that this is the first load of the app.
  // In this case, we use `render` to render the app from scratch.
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
