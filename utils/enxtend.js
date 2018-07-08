/* 

    javascript里的继承是一个有趣的知识点，继承可以有六种类型：
    1.类式继承
    2.构造函数继承
    3.原型继承
    4.组合继承
    5.寄生式继承
    6.组合寄生式继承



    现在逐一来说明这六种继承的方式：

*/

// 组合寄生式继承
// 这种继承方法的好处：既可以继承父类的原型对象的所有方法，又可以保留子类自已的函数模板，在创建的过程中节省资源，因为不用创建父类
// function extend(sup, sub) {
//     var F = new Function(); //创建空函数，空函数没有模板，可以节省资源
//     F.prototype = sup.prototype; //将父类的原型对象赋值给空函数
//     sub.prototype = new F(); //将空函数对象赋值给子类的原型对象
//     sub.prototype.constructor = sub; //恢复子类原来的函数模板，函数模板都在原型对象的构造函数中
//     sub.superClass = sup.prototype; //新增一个子类属性，用来引用父类的原型对象,即可以使用父类的所有方法
// };



// 子类继承

function extend(sup, sub) {
    var F = new Function();
    F.prototype = sup.prototype;
    sub.prototype = new F();
    sub.prototype.constructor = sub;
    sub.SuperClass = sup.prototype;
}

module.exports = extend;

// 这种继承方法真的是非常有用，如果不是有前人的教导，你是无论如何也不会想出来的
// 写代码的一个非常有意思的地方就是，你可以看着通过自己的不停敲键盘，一行行的代码就会呈现在你的眼前
// 这些代码就好像一行行的诗句，表达的是你的思想火花，是那样的优美，那样的动人
// 一、类式继承


var fds = (a, b) => { a + b };


var result = fds(5, 5);
console.log(result);