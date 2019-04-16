# 使用synchronized关键字实现同步

## 内部锁

* Java对象中含有一个内部锁,并且含有一个相关条件.`wait`方法添加一个线程进入等待集,`notify/notifyAll`解除等待现成的阻塞状态

## synchronized

* 使用此关键字声明一个方法,对象的内部锁将保护整个方法
* 也可作用于静态方法,如果调用这种方法,该方法获得相关类对象的内部锁

## 内部锁和条件的局限

* 不能中断一个正在试图获得锁的线程
* 试图获得锁时不能设定超时
* 每个锁仅有单一的条件可能不够

## 同步阻塞

* 除了同步方法,还可以通过同步阻塞获得对象内部的锁
```java
synchronized(obj) {
  //code
}
```

## 同步解决方法建议

* 最好既不使用`Lock/Condition`也不使用`synchronized`关键字,多数情况下可以使用`java.util.concurrent`包中的机制
* 如果`synchronized`关键字适合,尽量使用它
* 当特别需要`Lock/Condition`结构提供的独有特性时,才使用它
