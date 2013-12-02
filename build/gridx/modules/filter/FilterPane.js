//>>built
require({cache:{"url:gridx/templates/FilterPane.html":'\x3cul class\x3d"gridxFilterPaneForm"\x3e\r\n\t\x3cli\x3e\x3clabel id\x3d"${id}_ColumnLabel" for\x3d"${id}_ColumnSelect"\x3e${i18n.columnSelectLabel}\x3c/label\x3e\x3c/li\x3e\r\n\t\x3cli name\x3d"sltColumn"\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"dijit.form.Select" id\x3d"${id}_ColumnSelect" aria-labelledby\x3d"${id}_ColumnLabel" style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\x3c/li\x3e\r\n\t\x3cli\x3e\x3clabel id\x3d"${id}_ConditionLabel" for\x3d"${id}_ConditionSelect"\x3e${i18n.conditionSelectLabel}\x3c/label\x3e\x3c/li\x3e\r\n\t\x3cli name\x3d"sltCondition"\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"dijit.form.Select" id\x3d"${id}_ConditionSelect" style\x3d"width:100%;" aria-labelledby\x3d"${id}_ConditionLabel"\x3e\x3c/div\x3e\r\n\t\x3c/li\x3e\r\n\t\x3cli\x3e\x3clabel id\x3d"${id}_ValueLabel"\x3e${i18n.valueBoxLabel}\x3c/label\x3e\x3c/li\x3e\r\n\t\r\n\t\x3cli class\x3d"gridxFilterPaneFieldWrapper gridxFilterPaneTextWrapper"\x3e\r\n\t\t\x3cinput type\x3d"text" data-dojo-type\x3d"dijit.form.TextBox" intermediateChanges\x3d"true"\r\n\t\t style\x3d"width:100%;" aria-labelledby\x3d"${id}_ValueLabel"/\x3e\r\n\t\x3c/li\x3e\r\n\t\r\n\x3c!--            dropDownClass\x3d"gridx.modules.filter.DistinctComboBoxMenu"--\x3e\r\n\t\x3cli class\x3d"gridxFilterPaneFieldWrapper gridxFilterPaneComboWrapper"\x3e\r\n\t\t\x3cinput type\x3d"text" data-dojo-type\x3d"dijit.form.ComboBox" \r\n\t\t\tintermediateChanges\x3d"true" autoComplete\x3d"false" queryExpr\x3d"*${i18n.startsWithExpr}" \r\n\t\t\tstyle\x3d"width:100%;"  aria-labelledby\x3d"${id}_ValueLabel"/\x3e\r\n\t\x3c/li\x3e\r\n\t\r\n\t\x3cli class\x3d"gridxFilterPaneFieldWrapper gridxFilterPaneNumberWrapper"\x3e\r\n\t\t\x3cinput type\x3d"text" data-dojo-type\x3d"dijit.form.NumberTextBox"  aria-labelledby\x3d"${id}_ValueLabel" intermediateChanges\x3d"true" style\x3d"width:100%;"/\x3e\r\n\t\x3c/li\x3e\r\n\t\r\n\t\x3cli class\x3d"gridxFilterPaneFieldWrapper gridxFilterPaneDateWrapper"\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"dijit.form.DateTextBox" aria-labelledby\x3d"${id}_ValueLabel" intermediateChanges\x3d"true" style\x3d"width: 100%"\x3e\x3c/div\x3e\r\n\t\x3c/li\x3e\r\n\t\r\n\t\x3cli class\x3d"gridxFilterPaneFieldWrapper gridxFilterPaneDateRangeWrapper"\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"dijit.form.DateTextBox" style\x3d"width:44%; float: left;" intermediateChanges\x3d"true"\r\n\t\t\t aria-label\x3d"${i18n.beginDateRangeLabel}"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv style\x3d"width:10%; text-align: center; float: left;"\x3e${i18n.rangeTo}\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"dijit.form.DateTextBox" style\x3d"width:44%; float: right;" intermediateChanges\x3d"true"\r\n\t\t\t aria-label\x3d"${i18n.endDateRangeLabel}"\x3e\x3c/div\x3e\r\n\t\x3c/li\x3e\r\n\t\r\n\t\x3cli class\x3d"gridxFilterPaneFieldWrapper gridxFilterPaneTimeWrapper"\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"dijit.form.TimeTextBox" aria-labelledby\x3d"${id}_ValueLabel" style\x3d"width: 100%" intermediateChanges\x3d"true"\x3e\x3c/div\x3e\r\n\t\x3c/li\x3e\r\n\t\r\n\t\x3cli class\x3d"gridxFilterPaneFieldWrapper gridxFilterPaneTimeRangeWrapper"\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"dijit.form.TimeTextBox" style\x3d"width:44%; float: left;" intermediateChanges\x3d"true"\r\n\t\t\t aria-label\x3d"${i18n.beginTimeRangeLabel}"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv style\x3d"text-align: center; float: left; width: 10%;"\x3e${i18n.rangeTo}\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"dijit.form.TimeTextBox" style\x3d"width:44%; float: right;" intermediateChanges\x3d"true"\r\n\t\t\t aria-label\x3d"${i18n.endTimeRangeLabel}"\x3e\x3c/div\x3e\r\n\t\x3c/li\x3e\r\n\t\r\n\t\x3cli class\x3d"gridxFilterPaneFieldWrapper gridxFilterPaneRadioWrapper"\x3e\r\n\t\t\x3cspan style\x3d"width:49%; float:left;"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"dijit.form.RadioButton" aria-label\x3d"${i18n.radioTrueLabel}" checked\x3d"true"\x3e\x3c/div\x3e\x3cspan\x3e${i18n.trueLabel}\x3c/span\x3e\r\n\t\t\x3c/span\x3e\r\n\t\t\x3cspan style\x3d"width:49%; float: right;"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"dijit.form.RadioButton" aria-label\x3d"${i18n.radioFalseLabel}"\x3e\x3c/div\x3e\x3cspan\x3e${i18n.falseLabel}\x3c/span\x3e\r\n\t\t\x3c/span\x3e\r\n\t\x3c/li\x3e\r\n\t\r\n\t\x3cli class\x3d"gridxFilterPaneFieldWrapper gridxFilterPaneSelectWrapper"\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"dijit.form.Select" aria-labelledby\x3d"${id}_ValueLabel" style\x3d"width: 100%"\x3e\x3c/div\x3e\r\n\t\x3c/li\x3e\r\n\x3c/ul\x3e\r\n'}});
define("gridx/modules/filter/FilterPane","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-class dojo/string dojo/query dijit/registry dijit/_BidiSupport dojox/html/ellipsis dojox/html/metrics ./DistinctComboBoxMenu ../Filter dojo/text!../../templates/FilterPane.html dijit/layout/ContentPane dijit/form/Select dijit/form/TextBox dijit/form/DateTextBox dijit/form/TimeTextBox dijit/form/RadioButton dijit/form/NumberTextBox dijit/form/ComboBox".split(" "),function(l,h,e,
m,f,k,d,c,n,t,p,q,u,r,s){return l([s],{sltColumn:null,sltCondition:null,grid:null,postCreate:function(){this.inherited(arguments);this.i18n=this.grid.nls;this.set("title",this.grid.nls.defaultRuleTitle);this.set("content",k.substitute(r,this));this._initFields();this._initSltCol();this.connect(this.sltColumn,"onChange","_onColumnChange");this.connect(this.sltCondition,"onChange","_onConditionChange");this.comboText.dropDownClass=q;this._onConditionChange()},getData:function(){var a=this._getValue(),
b=this.sltColumn.get("value"),g=this.sltCondition.get("value");return"isEmpty"===g||null!==a&&("range"!==g||a.start&&a.end)?{colId:"_gridx_any_column_value_"==b?"":b,condition:g,value:"isEmpty"===g?"Date"===this._getType()?null:"":a,type:this._getType()}:null},setData:function(a){if(null!==a){this.sltColumn.set("value",a.colId,null);this._onColumnChange();var b=this;window.setTimeout(function(){b.sltCondition.set("value",a.condition,null);b._onConditionChange();window.setTimeout(function(){b._setValue(a.value)},
50)},10)}},close:function(){var a=this._getContainer();4===a.getChildren().length&&(a._contentBox.w+=p.getScrollbar().w);if(this===a.selectedChildWidget){var b=e.indexOf(a.getChildren(),this);0<b&&a.selectChild(a.getChildren()[b-1])}a.removeChild(this);f.toggle(a.domNode,"gridxFilterSingleRule",1===a.getChildren().length);this.grid.filterBar._filterDialog._updateAccordionContainerHeight()},onChange:function(){},_getContainer:function(){return c.byNode(this.domNode.parentNode.parentNode.parentNode)},
_initFields:function(){this.sltColumn=c.byNode(d("li\x3etable",this.domNode)[0]);this.sltCondition=c.byNode(d("li\x3etable",this.domNode)[1]);var a=this._fields=[this.tbSingle=c.byNode(d(".gridxFilterPaneTextWrapper \x3e .dijitTextBox",this.domNode)[0]),this.tbNumber=c.byNode(d(".gridxFilterPaneNumberWrapper \x3e .dijitTextBox",this.domNode)[0]),this.comboText=c.byNode(d(".gridxFilterPaneComboWrapper \x3e .dijitComboBox",this.domNode)[0]),this.sltSingle=c.byNode(d(".gridxFilterPaneSelectWrapper \x3e .dijitSelect",
this.domNode)[0]),this.dtbSingle=c.byNode(d(".gridxFilterPaneDateWrapper \x3e .dijitDateTextBox",this.domNode)[0]),this.dtbStart=c.byNode(d(".gridxFilterPaneDateRangeWrapper \x3e .dijitDateTextBox",this.domNode)[0]),this.dtbEnd=c.byNode(d(".gridxFilterPaneDateRangeWrapper \x3e .dijitDateTextBox",this.domNode)[1]),this.ttbSingle=c.byNode(d(".gridxFilterPaneTimeWrapper \x3e .dijitTimeTextBox",this.domNode)[0]),this.ttbStart=c.byNode(d(".gridxFilterPaneTimeRangeWrapper \x3e .dijitTimeTextBox",this.domNode)[0]),
this.ttbEnd=c.byNode(d(".gridxFilterPaneTimeRangeWrapper \x3e .dijitTimeTextBox",this.domNode)[1]),this.rbTrue=c.byNode(d(".gridxFilterPaneRadioWrapper .dijitRadio",this.domNode)[0]),this.rbFalse=c.byNode(d(".gridxFilterPaneRadioWrapper .dijitRadio",this.domNode)[1])];this.rbTrue.domNode.nextSibling.htmlFor=this.rbTrue.id;this.rbFalse.domNode.nextSibling.htmlFor=this.rbFalse.id;var b="rb_name_"+Math.random();this.rbTrue.set("name",b);this.rbFalse.set("name",b);e.forEach(a,function(a){this.connect(a,
"onChange","_onValueChange")},this)},_initSltCol:function(){var a=[{label:this.i18n.anyColumnOption,value:"_gridx_any_column_value_"}],b=this.sltColumn;e.forEach(this.grid.columns(),function(b){if(b.isFilterable()){var c=b.name(),c=this.grid.enforceTextDirWithUcc(b.id,c);a.push({value:b.id,label:c})}},this);b.addOption(a)},_initCloseButton:function(){var a=this._buttonWidget,b=m.create("span",{className:"gridxFilterPaneCloseButton",innerHTML:'\x3cimg src\x3d"'+this._blankGif+'"/\x3e',tabIndex:0,title:this.i18n.removeRuleButton||
""},a.domNode,"last");this.connect(b,"onclick","close");f.add(a.titleTextNode,"dojoxEllipsis")},_onColumnChange:function(){var a=this.sltColumn.get("value"),a=this.grid.filterBar._getConditionOptions("_gridx_any_column_value_"==a?"":a),b=this.sltCondition;b.set("options",[]);b.addOption(h.clone(a));this._updateTitle();this._updateValueField();this.onChange()},_onConditionChange:function(){this._updateValueField();this._updateTitle();this.onChange()},_onValueChange:function(){this.grid.textDir&&"auto"==
this.grid.textDir&&(this.tbSingle.focusNode.dir=n.prototype._checkContextual(this._getValue()));this._updateTitle();this.onChange()},_getDataType:function(){var a=this.sltColumn.get("value"),b="string";"_gridx_any_column_value_"!=a&&(b=this.grid.column(a).dataType());return b},_getType:function(){var a={string:"Text",number:"Number",date:"Date",time:"Time","enum":"Select","boolean":"Radio"}[this._getDataType()];"range"===this.sltCondition.get("value")&&(a+="Range");return a},_updateTitle:function(){if(this._buttonWidget){var a;
a=this._getValue();var b=this._getType(),c=this.sltCondition.get("value"),d=this._buttonWidget.titleTextNode;this._isValidValue(a)&&("range"!==c||a.start&&a.end)?a=this.sltColumn.get("displayedValue")+" "+this.grid.filterBar._getRuleString(c,a,b):(a=e.indexOf(this._getContainer().getChildren(),this)+1,a=k.substitute(this.i18n.ruleTitleTemplate,{ruleNumber:a}));d.innerHTML=a.replace(/&/g,"\x26amp;");d.title=a.replace(/<\/?span[^>]*>/g,"").replace("\x26nbsp;"," ")}},_needComboBox:function(){var a=this.sltColumn.get("value");
return"Text"===this._getType()&&"_gridx_any_column_value_"!=a&&this.grid._columnsById[a].field},_updateValueField:function(){var a=this._getType(),b=this.sltColumn.get("value"),c=this._needComboBox();e.forEach("Text Combo Date Number DateRange Time TimeRange Select Radio".split(" "),function(a){f.remove(this.domNode,"gridxFilterPane"+a)},this);f.add(this.domNode,"gridxFilterPane"+(c?"Combo":a));var d="isEmpty"===this.sltCondition.get("value");e.forEach(this._fields,function(a){a.set("disabled",d)});
b=this.grid._columnsById[b];c&&(this._dummyCombo||(this._dummyCombo=new dijit.form.ComboBox({store:this.grid.store})),!1!==b.autoComplete&&h.mixin(this.comboText,{store:this.grid.store,searchAttr:b.field,fetchProperties:{sort:[{attribute:b.field,descending:!1}]}}));"Select"==a&&(a=this.sltSingle,a.removeOption(a.getOptions()),a.addOption(e.map(b.enumOptions||[],function(a){return h.isObject(a)?a:{label:a,value:a}})),this._updateTitle())},_getValue:function(){var a=this._getType(),b=this._needComboBox();
switch(a){case "Text":return(b?this.comboText:this.tbSingle).get("value")||null;case "Number":return isNaN(this.tbNumber.get("value"))||!this.tbNumber.isValid()?null:this.tbNumber.get("value");case "Select":return this.sltSingle.get("value")||null;case "Date":return this.dtbSingle.get("value")||null;case "DateRange":return{start:this.dtbStart.get("value"),end:this.dtbEnd.get("value")};case "Time":return this.ttbSingle.get("value")||null;case "TimeRange":return{start:this.ttbStart.get("value"),end:this.ttbEnd.get("value")};
case "Radio":return!!this.rbTrue.get("checked");default:return null}},_setValue:function(a){if(this._isValidValue(a)){var b=this._getType(),c=this._needComboBox();switch(b){case "Text":(c?this.comboText:this.tbSingle).set("value",a);break;case "Number":this.tbNumber.set("value",a);break;case "Select":this.sltSingle.set("value",a);break;case "Date":this.dtbSingle.set("value",a);break;case "DateRange":this.dtbStart.set("value",a.start);this.dtbEnd.set("value",a.end);break;case "Time":this.ttbSingle.set("value",
a);break;case "TimeRange":this.ttbStart.set("value",a.start);this.ttbEnd.set("value",a.end);break;case "Radio":a?this.rbTrue.set("checked",!0):this.rbFalse.set("checked",!0)}}},_isValidValue:function(a){return null!==a&&void 0!=a},uninitialize:function(){this.inherited(arguments);this._dummyCombo&&this._dummyCombo.destroyRecursive()}})});
//@ sourceMappingURL=FilterPane.js.map