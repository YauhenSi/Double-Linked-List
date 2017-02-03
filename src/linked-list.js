const Node = require('./node');

class LinkedList {
    constructor() {
		this.length = 0;
		this._head = null;
		this._tail = null;
			
	}

    append(data) {
		
		var node = new Node (data); 
		
		if(!this.length){
			
			this.length++;	
			this._head = node;
			this._tail = node;	
			return this;
		}
		
		var TempTail = node;
		
		TempTail.prev = this._tail;
		this._tail.next = TempTail;
		this._tail = TempTail;
		
		this.length++;
	}

    head() {
		return this._head.data ;
	}

    tail() {
		return this._tail.data;
	}

    at(index) {
		var i=0,tempNode=this._head;
		
		while(!(i === index)){
			i++;
			tempNode=tempNode.next;
			
		}
		
		return tempNode.data;
		
		
	}

    insertAt(index, data) {
		var i=0,tempNode=this._head;
		
		while(!(i === index)){
			i++;
			tempNode=tempNode.next;
		}
		 tempNode.data=data;
		
	}

    isEmpty() {
		if(this.length === 0) return true;
		return false;
	}

    clear() {
		this.length = 0;
		this._head.data = null;
		this._head.next = null;
		this._tail.data = null;
		this._tail.prev = null;
	}

    deleteAt(index) {
		
		var i=0,tempNode=this._head;
		
		while(!(i === index)){
			i++;
			tempNode=tempNode.next;

			
		}
		tempNode.prev.next =tempNode.next;
		tempNode.next.prev =tempNode.prev;
		
	}

    reverse() {
		var tempNode=this._head,i, tempArr=[];
		while(tempNode){
			tempArr.unshift(tempNode.data);
			tempNode = tempNode.next;
		}
		this.clear();
		for(i=0;i<tempArr.length;i++){
			this.append(tempArr[i]);
		}
		
		
	}

    indexOf(data) {
		var i=0,tempNode=this._head;
		
		while(!(data === tempNode.data)){
		tempNode = tempNode.next;
		i++;
		if(i === this.length){return -1;}
		
		}
		 return i;
		
		}
		
		
		
	}


module.exports = LinkedList;
