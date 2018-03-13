import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'antd';
ReactDOM.render(<LocaleProvider locale={zh_CN}><App /></LocaleProvider>, document.getElementById('root'));
registerServiceWorker();1
