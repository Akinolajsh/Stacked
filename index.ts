class Stack{
    content: any[]
    constructor(){
            this.content = [];
        }

        addtoStack(val){
            let stack = this.content.push(val)
            console.log(this.content)
        }

        removefromStack(){
            this.content.pop()
            console.log(this.content)
        }
}

let stack = new Stack()

stack.addtoStack("Akin")
stack.addtoStack("Austine")
stack.addtoStack("Williams")
stack.removefromStack()