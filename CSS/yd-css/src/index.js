import index from './index.css';
console.log('index :>> ', index.test);
const _html = `
<div  class='${index.test}'><h1>京程一灯🏮</h1>
<a>initial</a>
<nav>
<a href='#'> <span>这是个链接</span> </a>
</nav>
<input value="" blank>
<input value="">
<input value="This element has a value">
<textarea></textarea>
</div>
<em>121212</em>
<h2>12121212</h2>
<div >12121</div>
`;
document.getElementById('app').innerHTML = _html;
