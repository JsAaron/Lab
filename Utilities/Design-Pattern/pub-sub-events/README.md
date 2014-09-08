观察者模式（发布、订阅）
=======================

根据自己思路实现，未经测试。

使用
----

    var a = new PubSubEvent();
     
    a.listen('click', function() {
      console.log('click!');
    });
     
    var clickName = function(name) {
      console.log(name + ' click!');
    }
    var clickName2 = function(name) {
      console.log(name + ' click2!');
    }
    a.listen('click', clickName, clickName2);
     
    a.listen('lala', function() {
      console.log('lala triggerd!');
    });
     
    a.trigger('click', 'Me');
    a.trigger('lala');
     
    a.remove('lala');
    a.remove('click', clickName);
     
    a.trigger('click', 'Me');
    a.trigger('lala');