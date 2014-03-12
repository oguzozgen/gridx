define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/on",
	'dojo/aspect',
	"dojo/i18n",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/query",
	"dojox/html/metrics",
	/*delete*/
	'delite/register',
	'delite/widget',

	/*dijit*/
	"dijit/_WidgetBase",
	"dijit/_FocusMixin",
	"dijit/_TemplatedMixin",
	// "dojo/text!./templates/Grid.html",
	"delite/handlebars!./templates/Grid.html",

	"./core/Core",
	"./core/model/extensions/Query",
	"./core/_Module",
	"./modules/Header",
	"./modules/View",
	"./modules/Body",
	"./modules/VLayout",
	"./modules/HLayout",
	"./modules/VScroller",
	"./modules/HScroller",
	"./modules/ColumnWidth",
	"./modules/Focus",
	"dijit/_BidiSupport",
	"dojo/i18n!./nls/gridx",
	"dojo/uacss",
	"dijit/hccss",
	"dojo/NodeList-dom",
	"dojo/NodeList-traverse",
	"delite/themes/load!./resources/{{theme}}/Gridx.css"
], function(declare, lang, has, on, aspect, i18n, domClass, domGeometry, query, metrics,
	register, widget,
	_WidgetBase, _FocusMixin, _TemplatedMixin, template,
	Core, Query, _Module, Header, View, Body, VLayout, HLayout, VScroller, HScroller, ColumnWidth, Focus, _BidiSupport, nls){

	var dummyFunc = function(){};

	return register('delite-grid', [HTMLElement, widget, Core], 
		{
		// summary:
		//		Gridx is a highly extensible widget providing grid/table functionalities. 
		// description:
		//		Gridx is much smaller, faster, more reasonable designed, more powerful and more flexible 
		//		compared to the old dojo DataGrid/EnhancedGrid.
		

		//textDir bidi support begin
		_setTextDirAttr: function(textDir){
			// summary:
			//		 Seamlessly changes grid 'textDir' property on the fly.
			// textDir:
			//		Grid text direction
			if(this.textDir != textDir){
				this.textDir = textDir;
				this.header.refresh();
				if(this.edit){
					this.edit._initAlwaysEdit();
				}
				this.body.refresh();
			}
		},

		getTextDir: function(colId, text){
			var col = this._columnsById[colId],
				textDir = (col && col.textDir) || this.textDir;
			return textDir = (textDir === "auto") ? _BidiSupport.prototype._checkContextual(text) : textDir;
		},

		getTextDirStyle: function(colId, text){
			var textDir = this.getTextDir(colId, text);
			return textDir ? " direction:" + textDir + ";" : "";
		},

		enforceTextDirWithUcc: function(colId, text){
			var textDir = this.getTextDir(colId, text);
			//var LRE = '\u202A', RLE = '\u202B', PDF = '\u202C';
			return textDir ? (textDir === "rtl" ? '\u202B' : '\u202A') + text + '\u202C' : text;
		},
		//textDir bidi support end

		coreModules: [
			//Put default modules here!
			Header,
			View,
			Body,
			VLayout,
			HLayout,
			VScroller,
			HScroller,
			ColumnWidth,
			Focus
		],

		coreExtensions: [
			//Put default extensions here!
			Query
		],

		buildRendering: template,
	
		postCreate: function(){
			// summary:
			//		Override to initialize grid modules
			// tags:
			//		protected extension
			var t = this;
			t.domNode = t;


			// t.inherited(arguments);
			if(t.touch === undefined){
				t.touch = has('ios') || has('android');
			}
			if(t.touch){
				domClass.add(t.domNode, 'gridxTouch');
			}else{
				domClass.add(t.domNode, 'gridxDesktop');
			}
			if(!t.isLeftToRight()){
				domClass.add(t.domNode, 'gridxRtl');
			}
			//in case gridx is not a root level package, it should still work
			t.nls = i18n.getLocalization('gridx', 'gridx', t.lang) || nls;
			t._eventFlags = {};
			this.modelExtensions = t.coreExtensions.concat(t.modelExtensions || []);
			// t.lastFocusNode.setAttribute('tabIndex', t.domNode.getAttribute('tabIndex'));
			t._initEvents(t._compNames, t._eventNames);
		
			//resize the grid when zoomed in/out.
			t.connect(metrics, 'onFontResize', function(){
				t.resize();
			});
		},
	
		connect: function(target, method, func, scope, receiveArguments){
			var cnnt = aspect.after(target, method, lang.hitch(scope || this, func), receiveArguments);
			this._cnnts.push(cnnt);
			return cnnt;
		},

		startup: function(){
			// summary:
			//		Startup this grid widget
			// tags:
			//		public extension
			var t = this;
			t.modules = t.coreModules.concat(t.modules || []);
			this._init();
			// if(!this._started){
				// this.inherited(arguments);
				this._deferStartup.callback();
			// }
		},
	
		destroy: function(){
			// summary:
			//		Destroy this grid widget
			// tags:
			//		public extension
			this._uninit();
			// this.inherited(arguments);
		},

	/*=====
		// autoHeight: Boolean
		//		If true, the grid's height is determined by the total height of the rows in current body view,
		//		so that there will never be vertical scroller bar. And when scrolling the mouse wheel over grid body,
		//		the whole page will be scrolled. Note if this is false, only the grid body will be scrolled.
		autoHeight: false,
		// autoWidth: Boolean
		//		If true, the grid's width is determined by the total width of the columns, so that there will
		//		never be horizontal scroller bar.
		autoWidth: false,

		// touch: Boolean
		//		Whether grid is run in touch environment
		//		If undefined, automatically set to true on mobile devices (like ios or android)
		//touch: undefined,
	=====*/

		resize: function(changeSize){
			// summary:
			//		Resize the grid using given width and height.
			// tags:
			//		public
			// changeSize: Object?
			//		An object like {w: ..., h: ...}.
			//		If omitted, the grid will re-layout itself in current width/height.
			var t = this, ds = {};
			if(changeSize){
				if(t.autoWidth){
					changeSize.w = undefined;
				}
				if(t.autoHeight){
					changeSize.h = undefined;
				}
				domGeometry.setMarginBox(t.domNode, changeSize);
			}
			t._onResizeBegin(changeSize, ds);
			t._onResizeEnd(changeSize, ds);
		},

		after: function(target, methodName, scope, advisingFunction, receiveArguments){

		},
		// before: functionfunction(target, methodName, advisingFunction, receiveArguments){
		//Private-------------------------------------------------------------------------------
		_onResizeBegin: function(){},
		_onResizeEnd: function(){},

		_cnnts: [],

		_escapeId: function(id){
			return String(id).replace(/\\/g, "\\\\");
		},

		//event handling begin
		_compNames: ['Cell', 'HeaderCell', 'Row', 'Header'],
	
		_eventNames: [
			'TouchStart', 'TouchEnd',
			'Click', 'DblClick',
			'MouseDown', 'MouseUp', 
			'MouseOver', 'MouseOut', 
			'MouseMove', 'ContextMenu',
			'KeyDown', 'KeyPress', 'KeyUp'
		],
	
		_initEvents: function(objNames, evtNames){
			var i = 0, j, comp, evt, evtName;
			while(comp = objNames[i++]){
				for(j = 0; evt = evtNames[j++];){
					evtName = 'on' + comp + evt;
					this[evtName] = this[evtName] || dummyFunc;
				}
			}
		},
	
		_connectEvents: function(node, connector, scope){
			for(var t = this,
					m = t.model,
					eventName,
					eventNames = t._eventNames,
					len = eventNames.length,
					i = 0; i < len; ++i){
				eventName = eventNames[i];
				m._cnnts.push(on(node, eventName.toLowerCase(), lang.hitch(scope, connector, eventName)));
			}
		},
	
		_isConnected: function(eventName){
			return this[eventName] !== dummyFunc;
		},
		//event handling end

		_isCtrlKey: function(evt){
			// summary:
			//		On Mac Ctrl+click also opens a context menu. So call this to check ctrlKey instead of directly call evt.ctrlKey
			//		if you need to implement some handler for Ctrl+click.
			return has('mac') ? evt.metaKey : evt.ctrlKey;
		}
	});
});
