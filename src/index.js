import './style.css';
import './index.html';

import { Quote } from './Quote';

const mainElm = document.querySelector('#app');
mainElm.innerHTML = Quote();
