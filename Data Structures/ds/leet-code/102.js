class Node {
    constructor(val) {
        this.left = null;
        this.value = val;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (this.root === null) {
            this.root = node;
            return this
        }
        let current = this.root;
        while (true) {

            if (val < current.value) {
                if (current.left === null) {
                    current.left = node;
                    return this
                }
                current = current.left;
            } else if (current.value === val) {
                return this;
            }
            else {
                if (current.right === null) {
                    current.right = node;
                    return this
                }
                current = current.right;
            }
        }

    }

    levelOrder(root) {
        if (!root) return [];

        const result = [];
        const queue = [root];

        while (queue.length) {
            const levelSize = queue.length;
            const level = [];

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                level.push(node.val);

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            result.push(level);
        }

        return result;
    }
}
let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(10);
tree.insert(2);
tree.insert(4);
tree.insert(12);
tree.insert(11);
console.log(tree.levelOrder(tree.root));