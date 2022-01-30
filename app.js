class A {
  constructor() {
    this.str = 'helloworld!'
  }
  sayHello () {
    console.log(this.str)
  }
}

const a = new A()
a.sayHello()