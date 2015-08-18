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
    });

    describe('Hash Tables', function() {
    	var testData = [];
    	var hashTable;

    	beforeEach(function() {
    		hashTable = ds().HashTable();
    	});

    });

    describe('Linked Lists', function() {
    	var testData = [];
    	var linkedList;

    	beforeEach(function() {
    		linkedList = ds().LinkedList();
    	});
    });

    describe('Lists', function() {
    	var testData = [];
    	var list;

    	beforeEach(function() {
    		list = ds().List();
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
