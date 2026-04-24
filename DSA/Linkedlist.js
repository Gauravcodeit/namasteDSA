function Node(value){
    this.value = value;
    this.next = null;
}

let myLinkedList = function() {
    this.size = 0;
    this.head = null;
}

myLinkedList.prototype.addAtHead = function(value){
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

myLinkedList.prototype.addAtTail = function(value){
    let newNode = new Node(value);
    if (this.head == null) {
         this.head = newNode;
    }
    else
    {
        let curr = this.head;
        while (curr.next != null){
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;
}

myLinkedList.prototype.addAtIndex = function(index, value) {
    let newNode = new Node(value);
    if (index > this.size || index < 0){
        return
    }
    if( this.size == 0){
        this.head = newNode;
    }
    if (index == this.size) {
        this.addAtTail(value)
    }
    else {
        let curr = this.head;
        for (let i=0; i < index - 1; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next =newNode;
    }
    this.size++
}
myLinkedList.prototype.get = function(index){
    if (index >= this.size || index < 0) return;
    curr = this.head;
    for (let i=0; i < index; i++) {
        curr = curr.next;
    }
    return curr.value;
}

myLinkedList.prototype.deleteNode = function(index){
    if (index >= this.size || index < 0) return;
    if (index == 0) {
        this.head = this.head.next;
    }
    else{
        let curr = this.head;
        for (let i =0; i< index -1; i++) {
            curr = curr.next;
        }
         curr.next = curr.next.next;
    }
    this.size --;
}

myLinkedList.prototype.print = function(){
    let curr = this.head;
    for (let i = 0; i< this.size; i++) {
        console.log(curr.value)
        curr = curr.next;
    }
}

let linkedList = new myLinkedList;

linkedList.addAtHead(4);
linkedList.addAtHead(5);
linkedList.addAtTail(6);
linkedList.addAtTail(2);
linkedList.addAtIndex(1,10);

//console.log(linkedList.get(0))
linkedList.print();
linkedList.deleteNode(0);
console.log(linkedList,"new Linked List")
linkedList.print();
