//>>built
define("gridx/modules/select/Row","dojo/_base/declare dojo/_base/array dojo/_base/sniff dojo/_base/event dojo/query dojo/_base/lang dojo/dom-class dojo/keys ./_RowCellBase ../../core/_Module".split(" "),function(h,k,l,m,n,p,g,q,r,s){return h(r,{name:"selectRow",rowMixin:{select:function(){this.grid.select.row.selectById(this.id);return this},deselect:function(){this.grid.select.row.deselectById(this.id);return this},isSelected:function(){return this.grid.select.row.isSelected(this.id)},isSelectable:function(){return this.grid.select.row._isSelectable(this.id)},
setSelectable:function(a){this.grid.select.row.setSelectable(this.id,a)}},treeMode:!0,setSelectable:function(a,b){var c=this.model,d=this.grid.body.getRowNode({rowId:a});c.setMarkable(a,b);this.unselectable[a]=!b;d&&(g.toggle(d,"gridxRowUnselectable",!b),this.onHighlightChange({row:parseInt(d.getAttribute("visualindex"),10)},c.getMark(a)),this.onSelectionChange())},getSelected:function(){return this.model.getMarkedIds()},clear:function(a){if(this.arg("enabled")){var b=this.model;k.forEach(b.getMarkedIds(),
function(c){c!==a&&b.markById(c,0)});b.when()}},_type:"row",_isSelectable:function(a){var b=this.arg("unselectable");return a in b?!b[a]:!0},_getUnselectableRows:function(){var a=[],b=this.arg("unselectable"),c;for(c in b)this.unselectable[c]&&this.model.byId(c)&&a.push(c);return a},_init:function(){function a(a){if(a.columnId){var d=c._columnsById[a.columnId];return b.arg("triggerOnCell")?!1!==d.rowSelectable&&!g.contains(a.target,"gridxTreeExpandoIcon")&&!g.contains(a.target,"gridxTreeExpandoInner"):
d.rowSelectable}return!a.columnId}var b=this,c=b.grid,d=b.arg("unselectable",{});b.model.treeMarkMode("",b.arg("treeMode"));for(var f in d)b.model.setMarkable(f,!d[f]);b.inherited(arguments);b.model._spTypes.select=1;b.model.setMarkable(p.hitch(b,"_isSelectable"));b.batchConnect([c,"onRowMouseDown",function(e){a(e)&&b._select(e.rowId,c._isCtrlKey(e))}],[c,"onRowTouchStart",function(e){a(e)&&b._select(e.rowId,c._isCtrlKey(e)||"__indirectSelect__"===e.columnId)}],[c.body,"onAfterRow",function(b){var a=
!b.isSelectable();g.toggle(b.node(),"gridxRowUnselectable",a)}],[c,4>l("ff")?"onRowKeyUp":"onRowKeyDown",function(a){if(a.keyCode==q.SPACE&&(!a.columnId||c._columnsById[a.columnId].rowSelectable||b.arg("triggerOnCell")&&(!c.focus||"body"==c.focus.currentArea()))){var d=c.cell(a.rowId,a.columnId);if(!d||!d.isEditing||!d.isEditing())b._select(a.rowId,c._isCtrlKey(a)),m.stop(a)}}],[c.model,"setStore","_syncUnselectable"])},_onMark:function(a,b,c,d){"select"==d&&(this._highlight(a,b),this[b?"onSelected":
"onDeselected"](this.grid.row(a,1),a),this._onSelectionChange())},_highlight:function(a,b){var c=n('[rowid\x3d"'+this.grid._escapeId(a)+'"]',this.grid.mainNode),d=b&&"mixed"!=b;c.length&&(c.forEach(function(a){g.toggle(a,"gridxRowSelected",d);g.toggle(a,"gridxRowPartialSelected","mixed"==b);a.setAttribute("aria-selected",!!d)}),this.onHighlightChange({row:parseInt(c[0].getAttribute("visualindex"),10)},b))},_markById:function(a,b){var c=this.model;this.grid.row(a);c.treeMarkMode()&&(!c.getMark(a)&&
b)&&(b="mixed");c.markById(a,b);c.when()},_onRender:function(a,b){var c=this.model,d=a+b,f,e;for(f=a;f<d;++f)if(e=this.grid.body.getRowNode({visualIndex:f}))e=e.getAttribute("rowid"),this._highlight(e,c.getMark(e))},_syncUnselectable:function(){var a=this.arg("unselectable"),b;for(b in a)this.model.setMarkable(b,!a[b])}})});
//@ sourceMappingURL=Row.js.map