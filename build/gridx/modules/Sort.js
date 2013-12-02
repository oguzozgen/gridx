//>>built
define("gridx/modules/Sort","dojo/_base/declare dojo/_base/array dojo/query dojo/_base/event dojo/_base/sniff dojo/string dojo/keys dojo/dom dojo/dom-class ../core/model/extensions/Sort ../core/_Module".split(" "),function(p,q,k,l,r,m,g,s,h,t,n){return n.register(p(n,{name:"sort",forced:["header"],modelExtensions:[t],constructor:function(){this._sortData=[]},preload:function(){var a=this,b=a.grid,c;h.add(b.domNode,"gridxSort");a.aspect(b,"onHeaderCellClick","_onClick");a.aspect(b,"onHeaderCellMouseOver",
"reLayout",b.vLayout);a.aspect(b,"onHeaderCellMouseOut","reLayout",b.vLayout);a.aspect(b.header,"onRender","_update");a.connect(b,"onHeaderCellTouchStart",function(a){k(".gridxHeaderCellTouch",b.header.domNode).removeClass("gridxHeaderCellTouch");h.add(a.headerCellNode,"gridxHeaderCellTouch")});a.connect(b,"onHeaderCellTouchEnd",function(a){h.remove(a.headerCellNode,"gridxHeaderCellTouch")});b.persist&&(c=b.persist.registerAndLoad("sort",function(){return a._sortData}));if((c=c||a.arg("initialOrder"))&&
c.length)a._sortData=c,a.model.sort(c)},load:function(){var a=this.grid;this._update();r("ff")&&s.setSelectable(a.header.domNode,!1);this._initFocus();this.loaded.callback()},columnMixin:{sort:function(a,b){var c=this.grid.sort;c._prepareSortData(this.id,b);return c.sort(c._sortData)},isSorted:function(){return this.grid.sort.isSorted(this.id)},clearSort:function(){this.grid.sort.clear();return this},isSortable:function(){var a=this.grid._columnsById[this.id];return a.sortable||void 0===a.sortable},
setSortable:function(a){this.grid._columnsById[this.id].sortable=a;return this}},nested:!0,sort:function(a){this._sortData=a||[];this.model.sort(a);this._updateHeader();return this.grid.body.refresh()},isSorted:function(a){for(var b=this._sortData.length-1;0<=b;--b){var c=this._sortData[b];if(c.colId===a)return c.decending?-1:1}return 0},clear:function(){this.sort()},getSortData:function(){return this._sortData},_sortData:null,_onClick:function(a){l.stop(a);this._sort(a.columnId,h.contains(a.target,
"gridxArrowButtonNode"),this.grid._isCtrlKey(a))},_sort:function(a,b,c){var d=this.grid;this._focusHeaderId=a;this._focusSortArrow=b;if(d.column(a,1).isSortable()&&(b||!d.select||!d.select.column))this._prepareSortData(a,c),this.sort(this._sortData)},_prepareSortData:function(a,b){var c=!0,d=!1,f=this.grid._columnsById[a].sortable;b=this.arg("nested")&&b;"descend"==f?d=!0:"ascend"!=f&&(c=!1);for(var e,f=this._sortData.length-1;0<=f;--f,e=0)if(e=this._sortData[f],e.colId===a){e.descending=c?d:!e.descending;
break}e||(e={colId:a,descending:c&&d},this._sortData.push(e));b||(this._sortData=[e])},_getSortModeCls:function(a){return{ascend:"gridxSortAscendOnly",descend:"gridxSortDescendOnly"}[a.isSortable()]||""},_initHeader:function(a){var b=a.headerNode();b.innerHTML=["\x3cdiv class\x3d'gridxSortNode'\x3e\x3cdiv role\x3d'presentation' tabindex\x3d'0' class\x3d'gridxArrowButtonNode ",this._getSortModeCls(a),"'\x3e\x3c/div\x3e\x3cdiv class\x3d'gridxColCaption'\x3e",a.name(),"\x3c/div\x3e\x3c/div\x3e"].join("");
b.removeAttribute("aria-sort");this._setTitle(b,a)},_update:function(){var a=this,b=a.grid;k(".gridxCell",b.header.domNode).forEach(function(c){var d=b.column(c.getAttribute("colid"),1);d.isSortable()&&a._initHeader(d);a._setTitle(c,d)});a._updateHeader()},_setTitle:function(a,b){b.isSortable()&&a.setAttribute("title",m.substitute(this.arg("nested")?this.grid.nls.helpMsg:this.grid.nls.singleHelpMsg,[b.def().tooltip||b.name()]))},_updateHeader:function(){var a=this.grid;k("[aria-sort]",a.header.domNode).forEach(function(b){this._initHeader(a.column(b.getAttribute("colid"),
1))},this);for(var b=q.filter(this._sortData,function(b){return a._columnsById[b.colId]}),c=0,d=b.length;c<d;++c){var f=b[c],e=a.column(f.colId,1),g=e.headerNode();g.innerHTML=["\x3cdiv class\x3d'gridxSortNode ",f.descending?"gridxSortDown":"gridxSortUp","'\x3e\x3cdiv role\x3d'presentation' tabindex\x3d'0' class\x3d'gridxArrowButtonNode ",this._getSortModeCls(e),"'\x3e\x3cdiv class\x3d'gridxArrowButtonChar'\x3e",f.descending?"\x26#9662;":"\x26#9652;","\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'",1==
d?"gridxSortSingle":"gridxSortNested","'\x3e",c+1,"\x3c/div\x3e\x3cdiv class\x3d'gridxColCaption'\x3e",e.name(),"\x3c/div\x3e\x3c/div\x3e"].join("");g.setAttribute("aria-sort",f.descending?"descending":"ascending");this.arg("nested")&&(f=m.substitute(a.nls.priorityOrder,[c+1]),g.setAttribute("aria-label",(e.def().tooltip||e.name())+", "+f))}a.vLayout.reLayout();a.focus&&"header"==a.focus.currentArea()&&this._focus(this._focusHeaderId)},_focusHeaderId:null,_focusSortArrow:!1,_initFocus:function(){var a=
this.grid,b=a.focus;b&&(a.select&&a.select.column?b.registerArea({name:"header",priority:0,focusNode:a.header.domNode,scope:this,doFocus:this._doFocus,onFocus:this._onFocus,connects:[this.connect(a,"onHeaderCellKeyPress","_onKeyPress")]}):this.connect(a,"onHeaderCellKeyDown",function(b){(b.keyCode==g.ENTER||b.keyCode==g.SPACE)&&this._sort(b.columnId,!1,a._isCtrlKey(b))}))},_doFocus:function(a){var b=this._focusHeaderId=this._focusHeaderId||this.grid._columns[0].id;this._focus(b,a);return!0},_onFocus:function(a){this._focusSortArrow=
!1;return!0},_onKeyPress:function(a){switch(a.keyCode){case g.RIGHT_ARROW:case g.LEFT_ARROW:this._moveFocus(a);break;case g.ENTER:case g.SPACE:this._sort(this._focusHeaderId,this._focusSortArrow,this.grid._isCtrlKey(a))}},_moveFocus:function(a){if(this._focusHeaderId){var b,c=this.grid;b=c.isLeftToRight()?1:-1;var d=a.keyCode==g.LEFT_ARROW?-b:b,f=this._focusSortArrow;l.stop(a);b=c.column(this._focusHeaderId,1);var e=b.isSortable();if(!e||f^0>d)b=c.column(b.index()+d);b&&(this._focusHeaderId=b.id,
this._focusSortArrow=b.isSortable()&&(e||0>d)&&!f,this._focus(b.id,a))}},_focus:function(a,b){var c=this.grid.header,d=c.getHeaderNode(a);c._focusNode(d);if(b)c.onMoveToHeaderCell(a,b);this._focusArrow(a)},_focusArrow:function(a){var b=this.grid.header;k(".gridxArrowButtonFocus",b.domNode).forEach(function(a){h.remove(a,"gridxArrowButtonFocus")});if(this._focusSortArrow&&(a=k(".gridxArrowButtonNode",b.getHeaderNode(a))[0]))h.add(a,"gridxArrowButtonFocus"),a.focus()}}))});
//@ sourceMappingURL=Sort.js.map