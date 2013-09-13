define([
	'dojo/_base/query',
	'dojo/_base/array',
	'dojo/dom-class',
	'../GTest'
], function(query, array, domClass, GTest){
	GTest.statusCheckers.push(
	{
		id: 'Header 3',
		name: 'columns are ordered from right to left',
		checker: function(grid, doh){
			query('.gridxCell', grid.header.domNode).forEach(function(headerCellNode, i){
				var col = grid.column(headerCellNode.getAttribute('colid'), true);
				doh.is(i, col.index());
			});
		}
	},
	{
		id: 'Header 4',
		name: 'grid header WAI-ARIA roles',
		checker: function(grid, doh){
			doh.is('row', grid.header.innerNode.getAttribute('role'));
			query('.gridxCell', grid.header.domNode).forEach(function(headerCellNode){
				doh.is('columnheader', headerCellNode.getAttribute('role'));
			});
		}
	},
	{
		id: 'Header 5',
		name: 'grid header cell has unique ID',
		checker: function(grid, doh){
			query('.gridxCell', grid.header.domNode).forEach(function(headerCellNode){
				doh.t(headerCellNode.hasAttribute('id'));
			});
		}
	},
	{
		id: 'Header 6',
		name: 'getHeaderNode return correct cell node when parameter is valid',
		checker: function(grid, doh){
			array.forEach(grid.columns(), function(col){
				var headerNode1 = grid.header.getHeaderNode(col.id);
				var headerNode2 = col.headerNode();
				doh.is(col.id, headerNode1.getAttribute('colid'), 'getHeaderNode() not returning correct header node');
				doh.is(headerNode1, headerNode2, 'header.getHeaderNode() is not equivalent to col.headerNode()');
				doh.t(domClass.contains(headerNode1, 'gridxCell'), 'header cell css class wrong');
			});
		}
	},
	{
		id: 'core-4',
		name: 'getHeaderNode return undefined when parameter is invalid or columnId does not exist',
		checker: function(grid, doh){
			doh.is(null, grid.header.getHeaderNode(null));
			doh.is(null, grid.header.getHeaderNode(undefined));
			doh.is(null, grid.header.getHeaderNode(Infinity));
			doh.is(null, grid.header.getHeaderNode(''));
			doh.is(null, grid.header.getHeaderNode('blablabla'));
		}
	}
	);
});