import type { Exercise } from '@/shared/types/exercises'

export const algoDataStructuresExercises: Exercise[] = [
  {
    slug: 'algo-ds-1',
    title: 'Stack: Push and Pop',
    description: `## Stack Data Structure

A Stack is a Last-In-First-Out (LIFO) data structure where elements are added and removed from the same end (the top).

Operations:
- \`push(x)\`: Add element x to the top
- \`pop()\`: Remove and return the top element
- \`peek()\`: View the top element without removing
- \`size\`: Number of elements

Real-world example: Browser back button (most recent page visited is removed first).

\`\`\`ts
class Stack {
  push(x: any): void {}
  pop(): any {}
  peek(): any {}
  get size(): number {}
}

const s = new Stack()
s.push(1)
s.push(2)
s.pop() // 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Algorithms',
    initialCode: `class Stack {
  private items: any[] = []
  
  push(x: any): void {
    // Add element to the top
  }
  
  pop(): any {
    // Remove and return top element
  }
  
  peek(): any {
    // Return top element without removing
  }
  
  get size(): number {
    // Return number of elements
  }
}`,
    solution: `class Stack {
  private items: any[] = []
  
  push(x: any): void {
    this.items.push(x)
  }
  
  pop(): any {
    return this.items.pop()
  }
  
  peek(): any {
    return this.items[this.items.length - 1]
  }
  
  get size(): number {
    return this.items.length
  }
}`,
    tests: [
      { description: 'push and pop work correctly', assertion: `const s = new Stack(); s.push(1); s.push(2); expect(s.pop()).toBe(2)` },
      { description: 'size increases with push', assertion: `const s = new Stack(); s.push(1); s.push(2); expect(s.size).toBe(2)` },
      { description: 'peek returns top without removing', assertion: `const s = new Stack(); s.push(5); const peeked = s.peek(); expect(peeked).toBe(5); expect(s.size).toBe(1)` },
      { description: 'pop decreases size', assertion: `const s = new Stack(); s.push(1); s.push(2); s.pop(); expect(s.size).toBe(1)` },
      { description: 'LIFO order is maintained', assertion: `const s = new Stack(); s.push(1); s.push(2); s.push(3); expect(s.pop()).toBe(3); expect(s.pop()).toBe(2)` },
    ],
    hints: [
      'Use an array internally to store elements.',
      'push() should append to the end.',
      'pop() should remove and return the last element.',
      'peek() should return the last element without removing.',
      'size should return the array length.',
    ],
    tags: ['data-structures', 'stack', 'lifo', 'push-pop'],
  },
  {
    slug: 'algo-ds-2',
    title: 'Queue: Enqueue and Dequeue',
    description: `## Queue Data Structure

A Queue is a First-In-First-Out (FIFO) data structure where elements are added at the back and removed from the front.

Operations:
- \`enqueue(x)\`: Add element x to the back
- \`dequeue()\`: Remove and return the front element
- \`size\`: Number of elements

Real-world example: Printer queue (first document printed is the first one sent to printer).

\`\`\`ts
class Queue {
  enqueue(x: any): void {}
  dequeue(): any {}
  get size(): number {}
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.dequeue() // 1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Algorithms',
    initialCode: `class Queue {
  private items: any[] = []
  
  enqueue(x: any): void {
    // Add element to the back
  }
  
  dequeue(): any {
    // Remove and return front element
  }
  
  get size(): number {
    // Return number of elements
  }
}`,
    solution: `class Queue {
  private items: any[] = []
  
  enqueue(x: any): void {
    this.items.push(x)
  }
  
  dequeue(): any {
    return this.items.shift()
  }
  
  get size(): number {
    return this.items.length
  }
}`,
    tests: [
      { description: 'enqueue and dequeue work correctly', assertion: `const q = new Queue(); q.enqueue(1); q.enqueue(2); expect(q.dequeue()).toBe(1)` },
      { description: 'size increases with enqueue', assertion: `const q = new Queue(); q.enqueue(1); q.enqueue(2); expect(q.size).toBe(2)` },
      { description: 'dequeue decreases size', assertion: `const q = new Queue(); q.enqueue(1); q.enqueue(2); q.dequeue(); expect(q.size).toBe(1)` },
      { description: 'FIFO order is maintained', assertion: `const q = new Queue(); q.enqueue(1); q.enqueue(2); q.enqueue(3); expect(q.dequeue()).toBe(1); expect(q.dequeue()).toBe(2)` },
      { description: 'multiple operations work together', assertion: `const q = new Queue(); q.enqueue(1); q.enqueue(2); expect(q.dequeue()).toBe(1); q.enqueue(3); expect(q.dequeue()).toBe(2)` },
    ],
    hints: [
      'Use an array internally to store elements.',
      'enqueue() should append to the end using push().',
      'dequeue() should remove from the front using shift().',
      'size should return the array length.',
    ],
    tags: ['data-structures', 'queue', 'fifo', 'enqueue-dequeue'],
  },
  {
    slug: 'algo-ds-3',
    title: 'Balanced Brackets Check',
    description: `## Balanced Brackets Check

Check if a string containing brackets is balanced. Each opening bracket must have a corresponding closing bracket, and brackets must be properly nested.

Valid: "()", "()[]{}", "([{}])"
Invalid: "([)]", "(()", "())"

Algorithm:
1. Use a stack to track opening brackets
2. For each character:
   - If opening bracket, push to stack
   - If closing bracket, check if it matches the top of stack
3. Stack should be empty at the end

\`\`\`ts
function isBalanced(s: string): boolean {
  // Return true if brackets are balanced
}

isBalanced('([{}])') // true
isBalanced('([)]') // false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Algorithms',
    initialCode: `function isBalanced(s: string): boolean {
  // Check if brackets are balanced
  // Use a stack to track opening brackets
}`,
    solution: `function isBalanced(s: string): boolean {
  const stack: string[] = []
  const pairs: Record<string, string> = { ')': '(', ']': '[', '}': '{' }
  
  for (const char of s) {
    if ('([{'.includes(char)) {
      stack.push(char)
    } else if (')]}'.includes(char)) {
      if (stack.pop() !== pairs[char]) return false
    }
  }
  
  return stack.length === 0
}`,
    tests: [
      { description: 'simple balanced brackets', assertion: `expect(isBalanced('()')).toBe(true)` },
      { description: 'multiple balanced brackets', assertion: `expect(isBalanced('()[]{}')).toBe(true)` },
      { description: 'nested balanced brackets', assertion: `expect(isBalanced('([{}])')).toBe(true)` },
      { description: 'mismatched brackets', assertion: `expect(isBalanced('([)]')).toBe(false)` },
      { description: 'unbalanced brackets', assertion: `expect(isBalanced('(()')).toBe(false)` },
    ],
    hints: [
      'Use a stack to store opening brackets.',
      'For each opening bracket, push it to the stack.',
      'For each closing bracket, check if it matches the top of the stack.',
      'Use an object to map closing brackets to opening brackets.',
      'Stack should be empty at the end.',
    ],
    tags: ['data-structures', 'stack', 'bracket-matching', 'validation'],
  },
  {
    slug: 'algo-ds-4',
    title: 'Linked List: Append and Length',
    description: `## Linked List Data Structure

A Linked List is a linear data structure where elements (nodes) are connected via pointers/references.

Each node contains:
- \`value\`: The data
- \`next\`: Reference to the next node

Operations:
- \`append(value)\`: Add element to the end
- \`length\`: Get the number of nodes

\`\`\`ts
class Node {
  constructor(value: any) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  append(value: any): void {}
  getLength(): number {}
}

const ll = new LinkedList()
ll.append(1)
ll.append(2)
ll.getLength() // 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Algorithms',
    initialCode: `class Node {
  value: any
  next: Node | null = null
  constructor(value: any) {
    this.value = value
  }
}

class LinkedList {
  private head: Node | null = null
  
  append(value: any): void {
    // Add element to the end of the list
  }
  
  getLength(): number {
    // Return the number of nodes
  }
}`,
    solution: `class Node {
  value: any
  next: Node | null = null
  constructor(value: any) {
    this.value = value
  }
}

class LinkedList {
  private head: Node | null = null
  
  append(value: any): void {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      return
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
  }
  
  getLength(): number {
    let count = 0
    let current = this.head
    while (current) {
      count++
      current = current.next
    }
    return count
  }
}`,
    tests: [
      { description: 'append single node', assertion: `const ll = new LinkedList(); ll.append(1); expect(ll.getLength()).toBe(1)` },
      { description: 'append multiple nodes', assertion: `const ll = new LinkedList(); ll.append(1); ll.append(2); ll.append(3); expect(ll.getLength()).toBe(3)` },
      { description: 'empty list has length 0', assertion: `const ll = new LinkedList(); expect(ll.getLength()).toBe(0)` },
      { description: 'append to populated list increases length', assertion: `const ll = new LinkedList(); ll.append(1); ll.append(2); ll.append(3); expect(ll.getLength()).toBe(3)` },
      { description: 'append various values', assertion: `const ll = new LinkedList(); ll.append('a'); ll.append('b'); ll.append('c'); expect(ll.getLength()).toBe(3)` },
    ],
    hints: [
      'Create a new Node with the value.',
      'If head is null, set it as the new node.',
      'Otherwise, traverse to the end and append there.',
      'For getLength, traverse the entire list and count nodes.',
    ],
    tags: ['data-structures', 'linked-list', 'nodes', 'pointers'],
  },
  {
    slug: 'algo-ds-5',
    title: 'Stack-based Min Tracker',
    description: `## Stack with Min Tracking

Design a Stack that supports pushing, popping, and tracking the minimum element efficiently in O(1) time.

Challenge: Without auxiliary space, finding min is O(n). With a helper stack, it's O(1).

Operations:
- \`push(x)\`: Add element
- \`pop()\`: Remove element
- \`getMin()\`: Return current minimum in O(1)

\`\`\`ts
class MinStack {
  push(x: number): void {}
  pop(): number | undefined {}
  getMin(): number | undefined {}
}

const ms = new MinStack()
ms.push(3)
ms.push(1)
ms.push(2)
ms.getMin() // 1
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Algorithms',
    initialCode: `class MinStack {
  private items: number[] = []
  private minStack: number[] = []
  
  push(x: number): void {
    // Add element and track minimum
  }
  
  pop(): number | undefined {
    // Remove and return top element
  }
  
  getMin(): number | undefined {
    // Return current minimum
  }
}`,
    solution: `class MinStack {
  private items: number[] = []
  private minStack: number[] = []
  
  push(x: number): void {
    this.items.push(x)
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x)
    }
  }
  
  pop(): number | undefined {
    const popped = this.items.pop()
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop()
    }
    return popped
  }
  
  getMin(): number | undefined {
    return this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : undefined
  }
}`,
    tests: [
      { description: 'getMin returns minimum after pushes', assertion: `const ms = new MinStack(); ms.push(3); ms.push(1); ms.push(2); expect(ms.getMin()).toBe(1)` },
      { description: 'getMin updates after pop', assertion: `const ms = new MinStack(); ms.push(3); ms.push(1); ms.pop(); expect(ms.getMin()).toBe(3)` },
      { description: 'handles equal minimums', assertion: `const ms = new MinStack(); ms.push(1); ms.push(1); ms.push(2); expect(ms.getMin()).toBe(1)` },
      { description: 'maintains min with negative numbers', assertion: `const ms = new MinStack(); ms.push(5); ms.push(-3); ms.push(2); expect(ms.getMin()).toBe(-3)` },
      { description: 'pop returns correct element', assertion: `const ms = new MinStack(); ms.push(5); ms.push(3); expect(ms.pop()).toBe(3)` },
    ],
    hints: [
      'Use two stacks: one for elements, one for minimums.',
      'When pushing, check if it\'s less than or equal to the current min.',
      'When popping, check if it was the current min and pop from minStack too.',
      'getMin returns the top of the minStack.',
      'This keeps getMin at O(1) instead of O(n).',
    ],
    tags: ['data-structures', 'stack', 'min-tracking', 'optimization'],
  },
]
