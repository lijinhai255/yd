import index from './index.css';
console.log('index :>> ', index.test);
const _html = `<div  class='${index.test}'><h1>京程一灯🏮</h1></div>`;
document.getElementById('app').innerHTML = _html;
