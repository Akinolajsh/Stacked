// class Stack{
//     content: any[]
//     constructor(){
//             this.content = [];
//         }

//         addtoStack(val){
//             let stack = this.content.push(val)
//             console.log(this.content)
//         }

//         removefromStack(){
//             this.content.pop()
//             console.log(this.content)
//         }
// }

// let stack = new Stack()

// stack.addtoStack("Akin")
// stack.addtoStack("Austine")
// stack.addtoStack("Williams")
// stack.removefromStack()

class Queue {
  content: any[];
  constructor() {
    this.content = [];
  }

  addtoQueue(val) {
    let queue = this.content.push(val);
    console.log(this.content);
  }

  removefromQueue() {
    this.content.shift();
    console.log(this.content);
  }
}

let queue = new Queue();

queue.addtoQueue("Dog");

queue.addtoQueue("Cow");

queue.addtoQueue("Rat");

queue.removefromQueue();
queue.removefromQueue();
