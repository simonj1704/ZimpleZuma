"use strict";

/* const node1 = {
	prev: null,
  next: null,
  data: "A"
}

const node2 = {
    prev: null,
    next: null,
    data: "B"
}

const node3 = {
    prev: null,
    next: null,
    data: "C"
}

const node4 = {
    prev: null,
    next: null,
    data: "D"
} */

export default class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.moreMatches = null;

    }

    dump(){
        let a_node = this.head;
        while (a_node != null){
            console.log(`
            node: ${a_node.data}
            -----------
                prev: ${a_node.prev?.data}
                next: ${a_node.next?.data}
            `)
            a_node = a_node.next;
        }
    }

    add(payload){
        let new_node = {
            prev: null,
            next: null,
            data: payload
        }

        if (this.head == null){
            this.head = new_node;
            this.tail = new_node;
            this.size++;
            return new_node;
        }

        let last_node = this.tail;
        last_node.next = new_node;
        new_node.prev = last_node;
        this.tail = new_node;
        this.size++;
        return new_node;
    }

    addLast(payload){
        let new_node = {
            prev: null,
            next: null,
            data: payload
        }

        if (this.head == null){
            this.head = new_node;
            this.tail = new_node;
            this.size++;
            return new_node;
        }

        let last_node = this.tail;
        last_node.next = new_node;
        new_node.prev = last_node;
        this.tail = new_node;
        this.size++;
        return new_node;
    }

    addFirst(payload){
        let new_node = {
            prev: null,
            next: null,
            data: payload
        }

        if (this.head == null){
            this.head = new_node;
            this.tail = new_node;
            this.size++;
            return new_node;
        }

        let first_node = this.head;
        first_node.prev = new_node;
        new_node.next = first_node;
        this.head = new_node;
        this.size++;
        return new_node;
    }

    removeLast(){
        if (this.head == null){
            return "List is empty!";
        }
        let last_node = this.tail;
        if(last_node.prev == null){
            this.head = null;
            this.tail = null;
            this.size--;
            return last_node;
        } else {
        let prev_node = last_node.prev;
        prev_node.next = null;
        this.tail = prev_node;
        if(prev_node.prev == null){
            this.head = prev_node;
        }
        this.size--;
        return last_node;
    }
    
    }

    removeFirst(){
        if (this.head == null){
            return "List is empty!";
        }
        let first_node = this.head;
        if(first_node.next == null){
            this.head = null;
            this.tail = null;
            this.size--;
            return first_node;
        } else {
        let next_node = first_node.next;
        next_node.prev = null;
        this.head = next_node;
        if(next_node.next == null){
            this.tail = next_node;
        }
        this.size--;
        return first_node;
        }
    }

    remove(index){
        if (this.head == null){
            return "List is empty!";
        }
        let a_node;
        let i;
        if (index << Math.floor(this.size / 2)){
            a_node = this.tail;
            i = this.size - 1;
            while (a_node != null){
                if (i == index){
                    if (a_node.prev == null){
                        this.head = a_node.next;
                    } else {
                        let prev_node = a_node.prev;
                        let next_node = a_node.next;
                        prev_node.next = next_node;
                    }
                    if (a_node.next == null){
                        this.tail = a_node.prev;
                    } else {
                        let next_node = a_node.next;
                        let prev_node = a_node.prev;
                        next_node.prev = prev_node;
                    }
                    this.size--;
                    return a_node;
                }
                a_node = a_node.prev;
                i--;
            }
        } else {
            i = 0;
            a_node = this.head;
            while (a_node != null){
                if (i == index){
                    if (a_node.prev == null){
                        this.head = a_node.next;
                    } else {
                        let prev_node = a_node.prev;
                        let next_node = a_node.next;
                        prev_node.next = next_node;
                    }
                    if (a_node.next == null){
                        this.tail = a_node.prev;
                    } else {
                        let next_node = a_node.next;
                        let prev_node = a_node.prev;
                        next_node.prev = prev_node;
                    }
                    this.size--;
                    return a_node;
                }
                a_node = a_node.next;
                i++;
            }
        }
        
        return "Index out of range!";
    
    }

    removeNode(node){
        if (this.head == null){
            return "List is empty!";
        }

        if(node == null){
            return "Node not found!";
        } 
        
        if (node.prev == null && node.next == null){
            this.head = null;
            this.tail = null;
            this.size--;
            console.log("all Node removed!");
            return node;
        }
        
        if (node.prev == null){
            this.head = node.next;
            node.next.prev = null;
            this.size--;
            return node;
        }
        
        if (node.next == null){
            this.tail = node.prev;
            node.prev.next = null;
            this.size--;
            return node;
        }
        
        let prev_node = node.prev;
        let next_node = node.next;
        prev_node.next = next_node;
        next_node.prev = prev_node;
        this.size--;
        return node;
        
    }

    getNode(index){
        if (this.head == null){
            return "List is empty!";
        }
        let a_node;
        let i;
        if (index << Math.floor(this.size / 2)){
            a_node = this.tail;
            i = this.size - 1;
            while (a_node != null){
                if (i == index){
                    return a_node;
                }
                a_node = a_node.prev;
                i--;
            }
        } else {
            i = 0;
            a_node = this.head;
            while (a_node != null){
                if (i == index){
                    return a_node;
                }
                a_node = a_node.next;
                i++;
            }
        }
        
        return null;
    }

    insertBeforeNode(payload, existing_node){
        let new_node = {
            prev: null,
            next: null,
            data: payload
        }

        if(existing_node == null){
            return "Node not found!";
        }

        if (this.head == null){
            this.head = new_node;
            this.tail = new_node;
            this.size++;
            return new_node;
        }

        if (existing_node.prev == null){
            this.head = new_node;
            new_node.next = existing_node;
            existing_node.prev = new_node;
            this.size++;
            return new_node;
        }

        let prev_node = existing_node.prev;
        prev_node.next = new_node;
        new_node.prev = prev_node;
        new_node.next = existing_node;
        existing_node.prev = new_node;
        this.size++;
        return new_node;
    
    }

    insertAfterNode(payload, existing_node){
        let new_node = {
            prev: null,
            next: null,
            data: payload
        }

        if(existing_node == null){
            return "Node not found!";
        }

        if (this.head == null){
            this.head = new_node;
            this.tail = new_node;
            this.size++;
            return new_node;
        }

        if (existing_node.next == null){
            this.tail = new_node;
            new_node.prev = existing_node;
            existing_node.next = new_node;
            this.size++;
            return new_node;
        }

        let next_node = existing_node.next;
        next_node.prev = new_node;
        new_node.next = next_node;
        new_node.prev = existing_node;
        existing_node.next = new_node;
        this.size++;
        return new_node;
    
    }

    clearList(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    first(){
        return this.head;
    }

    last(){
        return this.tail;
    }

    indexOf(payload){
        let a_node = this.head;
        let i = 0;
        while (a_node != null){
            if (a_node.data == payload){
                return i;
            }
            a_node = a_node.next;
            i++;
        }
        return -1;
    
    }

    insertAfter(payload, index){
        let existing_node = this.getNode(index);
        return this.insertAfterNode(payload, existing_node);
    }

    insertBefore(payload, index){
        let existing_node = this.getNode(index);
        return this.insertBeforeNode(payload, existing_node);
    }

    nodeAt(index){
        return this.getNode(index);
    }

    get(index){
        let a_node = this.getNode(index);
        return a_node;
    }

    swapNodes(node1, node2){
        if (node1 == null || node2 == null){
            return "Node not found!";
        }
        if (node1 == node2){
            return "Same node!";
        }

        if (node1.prev == null && node2.next == null){
            this.head = node2;
            this.tail = node1;
            node1.prev = node2.prev;
            node2.next = node1.next;
            node1.next.prev = node2;
            node2.prev.next = node1;
            node1.next = null;
            node2.prev = null;

        } else if (node2.prev == null && node1.next == null){
            this.head = node1;
            this.tail = node2;
            node2.prev = node1.prev;
            node1.next = node2.next;
            node2.next.prev = node1;
            node1.prev.next = node2;
            node2.next = null;
            node1.prev = null;

        } else if (node1.prev == null && node1.next == node2){
            const temp1 = node2.next;

            this.head = node2;
            node2.prev = null;
            node1.prev = node2;
            node2.next = node1;
            node1.next = temp1;
            temp1.prev = node1;

        } else if (node2.prev == null && node2.next == node1) {
            const temp1 = node1.next;

            this.head = node1;
            node1.prev = null;
            node2.prev = node1;
            node1.next = node2;
            node2.next = temp1;
            temp1.prev = node2;

        } else if (node1.next == null && node1.prev == node2){
            const temp1 = node2.prev;

            this.tail = node2;
            node2.next = null;
            node1.next = node2;
            node2.prev = node1;
            node1.prev = temp1;
            temp1.next = node1;

        } else if (node2.next == null && node2.prev == node1){
            const temp1 = node1.prev;

            this.tail = node1;
            node1.next = null;
            node2.next = node1;
            node1.prev = node2;
            node2.prev = temp1;
            temp1.next = node2;

        } else if (node1.prev == null){
            const temp1 = node2.next;
            const temp2 = node2.prev;

            this.head = node2;
            node2.prev = null;
            node2.next = node1.next;
            node1.next.prev = node2;
            node1.next = temp1;
            temp1.prev = node1;
            node1.prev = temp2;
            temp2.next = node1;
            
        } else if (node2.prev == null){
            const temp1 = node1.next;
            const temp2 = node1.prev;

            this.head = node1;
            node1.prev = null;
            node1.next = node2.next;
            node2.next.prev = node1;
            node2.next = temp1;
            temp1.prev = node2;
            node2.prev = temp2;
            temp2.next = node2;

        } else if (node1.next == null){
            const temp1 = node2.next;
            const temp2 = node2.prev;

            this.tail = node2;
            node2.next = null;
            node2.prev = node1.prev;
            node1.prev.next = node2;
            node1.prev = temp2;
            temp2.next = node1;
            node1.next = temp1;
            temp1.prev = node1;

        } else if (node2.next == null){
            const temp1 = node1.next;
            const temp2 = node1.prev;

            this.tail = node1;
            node1.next = null;
            node1.prev = node2.prev;
            node2.prev.next = node1;
            node2.prev = temp2;
            temp2.next = node2;
            node2.next = temp1;
            temp1.prev = node2;

        } else if (node1.next == node2){
        const temp1 = node1.prev;
        const temp2 = node2.next;
        
        node1.next = node2.next;
        node1.prev = node2;
        temp1.next = node2;
        node2.next = node1;
        node2.prev = temp1;
        temp2.prev = node1;

        } else if (node2.next == node1){
        const temp1 = node2.prev;
        const temp2 = node1.next;

        node2.next = node1.next;
        node2.prev = node1;
        temp1.next = node1;
        node1.next = node2;
        node1.prev = temp1;
        temp2.prev = node2;

        } else {
        const temp1 = node1.prev;
        const temp2 = node2.next;
        const temp3 = node1.next;
        const temp4 = node2.prev;
        
        node1.next = node2.next;
        node1.prev = node2.prev;
        temp1.next = node2;
        node2.next = temp3;
        node2.prev = temp1;
        temp2.prev = node1;
        temp3.prev = node2;
        temp4.next = node1;
        }

        return this.dumplist();

        
    }
    
    getIndexOfNode(node){
        let index = 0;
        let currentNode = this.head;
        while (currentNode != node){
          currentNode = currentNode.next;
          index++;
        }
        return index;
      }
    
    randomBall() {
        const balls = ["🔴", "🔵","🟡","🟢"]
        return balls[Math.floor(Math.random()*balls.length)];
      }

      findMatchesAround(node){
          let matches = [];
          let indexes = [];
          matches.push(node);
        indexes.push(this.getIndexOfNode(node));
        // go left until we find a different color
        let before = node.prev; 
        while(before != null && before.data == node.data) {
          matches.push(before);
          indexes.push(this.getIndexOfNode(before));
          before = before.prev;
        }


        // go right until we find a different color
        let after = node.next;
        while(after != null && after.data == node.data) {
          matches.push(after);
          indexes.push(this.getIndexOfNode(after));
          after = after.next;
        }

        if(before == null){
            this.moreMatches = after;
        } else if(after == null){
            this.moreMatches = before;
        }
    
        console.log(matches)
        
        if(matches.length >= 3) {
          matches.forEach( node => {
            this.removeNode(node);
          });
          this.dump();
    
        }
        return indexes;
      }
      
}

/*node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;

const ll = new LinkedList();*/
