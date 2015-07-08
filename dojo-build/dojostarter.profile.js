/*
 *
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

 */

var profile = {
	layers: {
		"dojo/dojo" : {
			boot: true,
			customBase: true,
			include: [
// 				"dojo/_base/lang",
// 				"dojo/dom-attr",
// 				"dojo/has",
// 				"dojo/ready",
 				
				"dojo/dojo",
				"dojo/main",
				"dojo/_base/config",
				"dojo/_base/loader",
				"dojo/_base/kernel",				//gfx
				"dojo/_base/array",					//gfx
				"dojo/_base/window",
				"dojo/_base/xhr",
				"dojo/_base/Deferred",
				"dojo/cldr/supplemental",			//mobile
				"dojo/cldr/nls/gregorian",			//mobile
				"dojo/colors",						//gfx
				"dojo/cldr/nls/en/gregorian", // gallery, "Picker" demo
				"dojo/date",						//mobile
				"dojo/data/ItemFileReadStore",
				"dojo/data/ItemFileWriteStore",// gallery "List Data" demo
				"dojo/date/locale",					//mobile
				"dojo/dom",
				"dojo/dom-class",
				"dojo/dom-construct",
				"dojo/dom-geometry",
				"dojo/dom-style",
				"dojo/DeferredList",
				"dojo/fx",
				"dojo/i18n",						//charting,mobile
				"dojo/io/script",
				"dojo/loadInit",
				"dojo/NodeList-fx",
				"dojo/on",
				"dojo/parser",
				"dojo/query",
				"dojo/regexp",						//mobile
				"dojo/text",
				"dojo/window",
				"dojo/selector/acme",
				"dojo/selector/lite",
				"dojo/store/Memory",				//mobile
				// Common UI Framework (Abstract) - Needed by both dijit and dojox/mobile
				"dijit/dijit",						//mobile
				"dijit/_WidgetBase",				//mobile
				"dijit/_TemplatedMixin",			//mobile
				"dijit/_WidgetsInTemplateMixin",	//mobile
				"dijit/_Contained",					//mobile
				"dijit/_Container",					//mobile
				"dijit/place",						//mobile
				"dijit/registry",					//mobile,charting
				"dijit/form/_ButtonMixin",			//mobile
				"dijit/form/_FormWidget",			//mobile
				"dijit/form/_FormValueWidget",		//mobile
				"dijit/form/_ListBase",				//mobile
				"dijit/form/_TextBoxMixin",			//mobile
				"dijit/layout/_LayoutWidget",		//mobile
				"dijit/form/_AutoCompleterMixin",	//mobile
				"dijit/form/nls/ComboBox",			//mobile	
				"dijit/form/_ComboBoxMenuMixin",	//mobile
				"dijit/form/_ExpandingTextAreaMixin",//mobile
				"dijit/form/_CheckBoxMixin",		//charting
				"dijit/form/DataList",				//mobile
				"dijit/form/_RadioButtonMixin",		//mobile
				"dojox/css3/fx",					//mobile
				"dojox/css3/transit",				//mobile
				"dojox/css3/transition",			//mobile
				"dojox/mobile",
				"dojox/mobile/_base",
				"dojox/mobile/_compat",
				"dojox/mobile/compat",	// Including this loads IE/FF support
				"dojox/mobile/deviceTheme",	 // Including this loads dynamic theming support
				"dojox/mobile/_DataListMixin",
				"dojox/mobile/_ItemBase",
				"dojox/mobile/_IconItemPane",
				"dojox/mobile/_ListTouchMixin",
				"dojox/mobile/_ScrollableMixin",
				"dojox/mobile/parser",
				"dojox/mobile/scrollable",
				"dojox/mobile/sniff",
				"dojox/mobile/Accordion",//gallery
				"dojox/mobile/Audio",//gallery
				"dojox/mobile/Button",
				"dojox/mobile/Carousel",
				"dojox/mobile/CheckBox",
				"dojox/mobile/common",
				"dojox/mobile/ContentPane",
				"dojox/mobile/GridLayout",// gallery
				"dojox/mobile/EdgeToEdgeCategory",
				"dojox/mobile/EdgeToEdgeDataList",
				"dojox/mobile/EdgeToEdgeList",
				"dojox/mobile/ExpandingTextArea",
				"dojox/mobile/FixedSplitter",
				"dojox/mobile/FixedSplitterPane",
				"dojox/mobile/Heading",
				"dojox/mobile/i18n",
				"dojox/mobile/IconContainer",
				"dojox/mobile/IconItem",
				"dojox/mobile/IconMenu",// gallery
				"dojox/mobile/iconUtils",
				"dojox/mobile/ListItem",
				"dojox/mobile/Opener",
				"dojox/mobile/Overlay",
				"dojox/mobile/PageIndicator",
				"dojox/mobile/Pane",
				"dojox/mobile/ProgressBar",// gallery
				"dojox/mobile/Rating",
				"dojox/mobile/RadioButton",
				"dojox/mobile/RoundRect",
				"dojox/mobile/RoundRectCategory",
				"dojox/mobile/RoundRectDataList",
				"dojox/mobile/RoundRectList",
				"dojox/mobile/ScrollableView",
				"dojox/mobile/Slider",
				"dojox/mobile/SpinWheel",
				"dojox/mobile/SpinWheelDatePicker",
				"dojox/mobile/SpinWheelSlot",
				"dojox/mobile/SpinWheelTimePicker",
				"dojox/mobile/ScrollablePane",// gallery
				"dojox/mobile/SwapView",
				"dojox/mobile/Switch",
				"dojox/mobile/TabBar",
				"dojox/mobile/TabBarButton",
				"dojox/mobile/TextArea",
				"dojox/mobile/TextBox",
				"dojox/mobile/ToggleButton",
				"dojox/mobile/ToolBarButton",
				"dojox/mobile/Tooltip",
				"dojox/mobile/transition",
				"dojox/mobile/TransitionEvent",
				"dojox/mobile/ValuePicker", //gallery
				"dojox/mobile/ValuePickerDatePicker", //gallery
				"dojox/mobile/ValuePickerTimePicker", // gallery
				"dojox/mobile/ValuePickerSlot", // gallery
				"dojox/mobile/View",
				"dojox/mobile/ViewController",
				"dojox/mobile/Video", //gallery
				"dojox/mobile/SimpleDialog", //1.8
				"dojox/mobile/dh/SuffixFileTypeMap", // "Icons" load independent page will require some of "dh" modules.
				"dojox/mobile/dh/UrlDataSource",
				"dojox/mobile/dh/StringDataSource",
				"dojox/mobile/dh/HtmlContentHandler",
				"dojox/mobile/dh/PatternFileTypeMap",
				"dojox/mobile/dh/JsonContentHandler",
				"dojox/mobile/dh/ContentTypeMap",
				"dojox/mobile/dh/HtmlScriptContentHandler",
				"dojox/mobile/dh/DataHandler",
				"dojox/highlight",
				"dojox/highlight/languages/javascript"
			],
			exclude: []
		}
	}
};
