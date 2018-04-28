import _ from 'lodash';
import './style.css'
import _img1 from './webpack.jpg';
import _svg1 from './webpack.svg';

import Data from './data.xml';

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    var img1 = new Image();
        img1.src = _img1;
    var img2 = new Image();
        img2.src = _svg1;
    element.appendChild(img1);
    element.appendChild(img2);
    console.log(Data);
    return element;
  }
  
  document.body.appendChild(component());