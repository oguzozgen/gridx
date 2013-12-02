//>>built
define("gridx/modules/move/Row",["dojo/_base/declare","dojo/_base/array","dojo/keys","../../core/_Module","../../core/model/extensions/Move"],function(l,f,g,m,n){return l(m,{name:"moveRow",modelExtensions:[n],constructor:function(){this.connect(this.model,"onMoved","_onMoved")},getAPIPath:function(){return{move:{row:this}}},preload:function(){this.aspect(this.grid,"onRowKeyDown","_onKeyDown")},rowMixin:{moveTo:function(a,e){this.grid.move.row.move([this.index()],a,e);return this}},moveSelected:!0,
move:function(a,e,b){var c=this.model;c.moveIndexes(a,e);b||c.when()},moveRange:function(a,e,b,c){var d=this.model;d.move(a,e,b);c||d.when()},onMoved:function(){},_onMoved:function(){this.grid.body.refresh();this.onMoved()},_onKeyDown:function(a){var e=this,b=e.grid,c=b.select&&b.select.row;if(b._isCtrlKey(a)&&!a.shiftKey&&!a.altKey&&(a.keyCode==g.UP_ARROW||a.keyCode==g.DOWN_ARROW)){var d=a.rowIndex,h=function(c){if(a.keyCode==g.UP_ARROW){for(;0<=f.indexOf(c,d);)d--;d>=b.view.rootStart&&e.move(c,
d)}else{for(;0<=f.indexOf(c,d);)d++;d<b.view.rootStart+b.view.rootCount&&e.move(c,d+1)}};if(e.arg("moveSelected")&&c&&c.isSelected(a.rowId)){var k=c.getSelected();b.model.when({id:k},function(){var a=f.map(k,function(a){return b.model.idToIndex(a)});h(a)})}else h([b.model.idToIndex(a.rowId)])}}})});
//@ sourceMappingURL=Row.js.map