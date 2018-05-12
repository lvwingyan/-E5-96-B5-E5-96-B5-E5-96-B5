//var myHeading = document.querySelector('h1');
/*querySelector()函数获取标题这个对象，存储在 myHeading 的变量中*/
//myHeading.innerHTML = 'Hello world!';
/*将 myHeading 的属性 innerHTML （代表这个标题的内容）赋予了“Hello world!”这个值 */

//var myVariable = "Bob";
//myVariable = "Apple";

//var myHTML = document.querySelector('html');
//myHTML.onclick = function(){};
//document.querySelector('html').onclick = function(){};

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');//找到image元素的src属性
    if(mySrc === 'images/miao.jpg') {//判断src的值是否等于原始图像的路径，是就改成第二张图的路径；不是就改成原始图的路径
      myImage.setAttribute ('src','images/miao1.jpg');
    } else {
      myImage.setAttribute ('src','images/miao.jpg');
    }
}

//这会抓取 按钮 和 标题 的引用并将其存放在变量里:
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');//prompt()函数，需要用户输入内容
    localStorage.setItem('name', myName);
    //调用一个叫 localStorage 的API， 它允许我们将数据存储在浏览器里以供后续调用。
    //我们使用 localStorage 的 setItem() 函数来创建并将数据存储在 'name'参数里，然后将其值设置为包含用户输入的姓名的 myName 变量。
    myHeading.innerHTML = 'Hi, ' + myName;
    //将标题的 innerHTML 属性设置成加上用户姓名的字符串
}
//重置了应用程序
if(!localStorage.getItem('name')) {//检查‘name’是否存在，不存在创建，存在就之前那样显示
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hi, ' + storedName;
}
//将下面的 onclick 事件处理器绑定到 按钮 上，这样当我们点击时， setUserName() 函数就会运行。这允许用户在任何想要的时候通过点击按钮来设置新的 name 。
myButton.onclick = function() {
    setUserName();
  }
