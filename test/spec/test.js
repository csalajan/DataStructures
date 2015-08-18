var ds = require('../../DataStructures.js');

(function () {
  'use strict';

  describe('Data Structures', function () {

    describe('Binary Trees', function () {
		var testData = [16, 7, 4, 15, 23, 9, 18, 42, 12, 27];
		var tree;

		beforeEach(function() {
			tree = ds().BST();
			testData.forEach(function(item) {
				tree.Add(item); 
			});
		});

		it('should create a binary tree', function () {
			expect(tree).toEqual(jasmine.any(Object));
			expect(tree.GetType()).toEqual("BinaryTree");
		});

		it('should populate a binary tree', function() {
			expect(tree.Root().Value()).toEqual(16);
			expect(tree.Root().Right().Value()).toEqual(23);
			expect(tree.Root().Left().Value()).toEqual(7);
		});

		it('should find the minimum value', function() {
			expect(tree.GetMin().Value()).toEqual(4);
		});

		it('should find the maximum value', function() {
			expect(tree.GetMax().Value()).toEqual(42);
		});

		it('should clear the binary tree', function() {
			tree.Clear();
			expect(tree.Root().Value()).toEqual(undefined);
			tree.Root(23);
			expect(tree.Root().Value()).toEqual(23);
		});

		it('should display contents of binary tree', function() {
			expect(tree.Scan()).toEqual("16,7,4,15,9,12,23,18,42,27");
		});

		it('should find the correct element', function() {
			expect(tree.Find(18).Value()).toEqual(18);
			expect(tree.Find(99)).toEqual(null);
		});

		it('should repopulate the tree on initialization', function() {
			tree.Clear();
			expect(tree.Root().Value()).toEqual(undefined);
			tree = ds().BST(testData);
			expect(tree.Scan()).toEqual("16,7,4,15,9,12,23,18,42,27");
		});
    });

	describe('Lists', function() {
    	var testData = [23, 7, 14, 33, 27, 1, 18, 24];
    	var list;

    	beforeEach(function() {
    		list = ds().List();
    		testData.forEach(function(item) {
    			list.Add(item);
    		})
    	});

    	it('returns type of List', function() {
    		expect(list).toEqual(jasmine.any(Object));
    		expect(list.GetType()).toEqual('List');
    	});

    	it('returns the correct length', function() {
    		expect(list.Length()).toEqual(8);
    	})

    	it('doesn\'t find a value', function() {
    		expect(list.Find(88)).toEqual(-1);
    	})

    	it('checks list for elements', function() {
    		expect(list.Contains(18)).toEqual(true);
    		expect(list.Contains(88)).toEqual(false);
    	});

    	it('inserts element after another element', function() {
    		list.Insert(99, 7);
    		expect(list.Insert(100, 88)).toEqual(false);
    		expect(list.ToString()).toEqual([ 23, 7, 99, 14, 33, 27, 1, 18, 24 ]);

    	});

    	it('removes element from the list', function() {
    		list.Remove(18);
    		expect(list.Remove(88)).toEqual(false);
    		expect(list.ToString()).toEqual([ 23, 7, 14, 33, 27, 1, 24 ]);

    	});

    	it('clears the list', function() {
    		list.Clear();
    		expect(list.ToString()).toEqual([]);
    	});
    });

    describe('Hash Tables', function() {
    	var testData = [];
    	var hashTable;

    	beforeEach(function() {
    		hashTable = ds().HashTable();
    	});

    	it('creates a Hash Table object', function() {
    		expect(hashTable).toEqual(jasmine.any(Object));
    		expect(hashTable.GetType()).toEqual("HashTable");
    	})

    });

    describe('Linked Lists', function() {
    	var testData = [];
    	var linkedList;

    	beforeEach(function() {
    		linkedList = ds().LinkedList();
    	});

    	it('should create a Linked List object', function() {
    		expect(linkedList).toEqual(jasmine.any(Object));
    		expect(linkedList.GetType()).toEqual("LinkedList");
    	});

    	it('inserts elements into Linked List', function() {
    		linkedList.Insert(23, 'head');
    		expect(linkedList.Find(23).Value()).toEqual(23);
    	});

    	it('removes element from Linked List', function() {
    		linkedList.Insert(23, 'head');
    		linkedList.Insert(24, 23);
    		expect(linkedList.Find(23).Value()).toEqual(23);

    		linkedList.Remove(23);
    		expect(linkedList.Find(23)).toEqual(null);
    	})
    });

    describe('Stacks', function() {
    	var testData = [];
    	var stack;

    	beforeEach(function() {
    		stack = ds().Stack();
    	})
    })
  });
})();
