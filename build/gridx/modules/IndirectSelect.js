//>>built
define("gridx/modules/IndirectSelect","dojo/_base/declare dojo/_base/array dojo/_base/event dojo/query dojo/_base/lang dojo/dom-class dojo/_base/Deferred dojo/keys ../core/_Module ./RowHeader".split(" "),function(s,m,p,k,q,h,r,t,u){return s(u,{name:"indirectSelect",required:["rowHeader","selectRow"],preload:function(){var a=this,b=a.grid,d=b.focus,c=b.select.row,e=b.rowHeader;e.cellProvider=q.hitch(a,a._createSelector);a.batchConnect([c,"onHighlightChange","_onHighlightChange"],[c,"clear","_onClear"],
[c,"onSelectionChange","_onSelectionChange"],[b.body,"onRender","_onSelectionChange"],[b,"onRowKeyDown","_onKeyDown"],[b,"onHeaderKeyDown","_onKeyDown"],b.filter&&[b.filter,"onFilter","_onSelectionChange"]);b.select.row.holdingCtrl=!0;c.selectByIndex&&a.arg("all")&&(a._allSelected={},e.headerProvider=q.hitch(a,a._createSelectAllBox),e.loaded.then(function(){d&&a._initFocus();a.connect(b,"onRowHeaderHeaderMouseDown","_onSelectAll");a.connect(b,"onRowHeaderHeaderKeyDown",function(b){b.keyCode==t.SPACE&&
(p.stop(b),a._onSelectAll())})}))},all:!0,_createSelector:function(a){var b=a.node(),d=b&&h.contains(b,"gridxRowSelected");a=!this.grid.row(a.id,1).isSelectable();b=b&&h.contains(b,"gridxRowPartialSelected");return this._createCheckBox(d,b,a)},_createCheckBox:function(a,b,d){var c=this._getDijitClass(),e="";d&&(e=a?"CheckedDisabled":b?"PartialDisabld":"Disabled");return['\x3cspan role\x3d"',this._isSingle()?"radio":"checkbox",'" class\x3d"gridxIndirectSelectionCheckBox dijitReset dijitInline ',c,
" ",d?c+e:"",a?c+"Checked":"",b?c+"Partial":"",'" aria-checked\x3d"',a?"true":b?"mixed":"false",'"\x3e\x3cspan class\x3d"gridxIndirectSelectionCheckBoxInner"\x3e',this._isSingle()?a?"\x26#x25C9;":"\x26#x25CC;":a?"\x26#10003;":b?"\x26#9646;":"\x26#9744;","\x3c/span\x3e\x3c/span\x3e"].join("")},_createSelectAllBox:function(){var a=this._allSelected[this._getPageId()];this.grid.rowHeader.headerCellNode.setAttribute("aria-label",a?this.grid.nls.indirectDeselectAll:this.grid.nls.indirectSelectAll);return this._createCheckBox(a)},
_getPageId:function(){return this.grid.view.rootStart+","+this.grid.view.rootCount},_onClear:function(a){var b=this._getDijitClass(),d=b+"Checked",b=b+"Partial",c=this.grid;k("."+d,c.rowHeader.bodyNode).removeClass(d);k("."+b,c.rowHeader.bodyNode).removeClass(b);c.select.row.isSelected(a)&&k('[rowid\x3d"'+c._escapeId(a)+'"].gridxRowHeaderRow .gridxIndirectSelectionCheckBox',c.rowHeader.bodyNode).addClass(d);k("."+d,c.rowHeader.headerCellNode).removeClass(d).attr("aria-checked","false");this._allSelected=
{}},_onHighlightChange:function(a,b){var d=k('[visualindex\x3d"'+a.row+'"].gridxRowHeaderRow',this.grid.rowHeader.bodyNode)[0],c=d?k(".gridxIndirectSelectionCheckBox",d)[0]:void 0;if(c){var e=this._getDijitClass(),f="mixed"==b,g=b&&!f,d=d.getAttribute("rowid"),d=!this.grid.row(d,1).isSelectable();h.toggle(c,e+"Checked",g);h.toggle(c,e+"Partial",f);h.toggle(c,e+"CheckedDisabled",g&&d);h.toggle(c,e+"PartialDisabled",f&&d);h.toggle(c,e+"Disabled",!g&&!f&&d);c.setAttribute("aria-checked",g?"true":f?"mixed":
"false");this._isSingle()?c.firstChild.innerHTML=g?"\x26#x25C9":"\x26#x25CC":c.firstChild.innerHTML=g?"\x26#10003;":f?"\x26#9646;":"\x26#9744;"}},_getDijitClass:function(){return this._isSingle()?"dijitRadio":"dijitCheckBox"},_isSingle:function(){var a=this.grid.select.row;return a.hasOwnProperty("multiple")&&!a.arg("multiple")},_onSelectAll:function(){var a=this.grid;a.select.row[this._allSelected[this._getPageId()]?"deselectByIndex":"selectByIndex"]([0,a.view.visualCount-1])},_onSelectionChange:function(){var a=
this,b,d=a.grid,c,e=a.grid.view,f=a.model,g=e.rootStart,l=e.rootCount;if(d.select.row.selectByIndex&&a.arg("all")){var k=m.filter(d.select.row.getSelected(),function(a){return!f.parentId(a)}),e=d.select.row._getUnselectableRows(),n=m.filter(e,function(a){return!f.parentId(a)&&!d.select.row.isSelected(a)});l===f.size()?c=l&&l-n.length==k.length:(b=new r,f.when({start:g,count:l},function(){var a=m.filter(m.map(k,function(a){return f.idToIndex(a)}),function(a){return a>=g&&a<g+l});n=m.filter(n,function(a){a=
f.idToIndex(a);return a>=g&&a<g+l});c=l-n.length==a.length;b.callback()}));r.when(b,function(){a._allSelected[a._getPageId()]=c;var b=a.grid.rowHeader.headerCellNode.firstChild;b&&(h.toggle(b,a._getDijitClass()+"Checked",c),b.setAttribute("aria-checked",c?"true":"false"),a.grid.rowHeader.headerCellNode.setAttribute("aria-label",c?d.nls.indirectDeselectAll:d.nls.indirectSelectAll))})}},_initFocus:function(){var a=this.grid,b=a.rowHeader,d=b.headerCellNode,c=function(b){if(a.header.hidden)return!1;
h.add(d,"gridxHeaderCellFocus");d.focus();return!0},e=function(){h.remove(d,"gridxHeaderCellFocus");return!0};a.focus.registerArea({name:"selectAll",priority:-0.1,focusNode:b.headerNode,doFocus:c,doBlur:e,onFocus:c,onBlur:e})},_onKeyDown:function(a){65==a.keyCode&&(this.grid._isCtrlKey(a)&&!a.shiftKey)&&(this._allSelected[this._getPageId()]||this._onSelectAll(),p.stop(a))}})});
//@ sourceMappingURL=IndirectSelect.js.map