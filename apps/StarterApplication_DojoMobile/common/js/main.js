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
window.$ = WLJQ;
var feeds = null;
var busy = null;
var feedsTab = null;
var aboutTab = null;
var reloadTab = null;

var loadFeeds = null;
var beforeInitEnv = null;
var inTrans = false;
	
var MobileFirst_URL = 'https://www.ibm.com/developerworks/mobile/';

function wlCommonInit(){
	busy = new WL.BusyIndicator('content');
	
	require([
				"dojo/_base/lang",
				"dojo/_base/array",
				"dojo/dom",
				"dojo/dom-class",
				"dojo/dom-construct",
				"dojo/query",
				"dojo/dom-style",
				"dojo/dom-attr",
				"dojo/on",
				"dojo/_base/Deferred",
				"dijit/registry",
				"dojo/has",
				"dojo/ready",
				"dojox/mobile/parser",
				"dojox/mobile",
				"dojox/mobile/compat",
				 "dojox/mobile/deviceTheme",
				 "dojox/mobile/View",
				 "dojox/mobile/ScrollableView",
				 "dojox/mobile/TabBar",
				 "dojox/mobile/TabBarButton"
				 ],
	         
			function(lang,array,dom,domClass,domConstruct,query,domStyle,domAttr,on,Deferred,registry,has, ready)
			{
		
				loadFeeds = function(){
					
					WL.Logger.debug("Invoke loadFeeds");
					
					busy.show();
	
					var resourceRequest = new WLResourceRequest("/adapters/StarterApplicationAdapter/getEngadgetFeeds", WLResourceRequest.GET, 30000);
					resourceRequest.send().then(
							lang.hitch(this, loadFeedsOK),
							lang.hitch(this, loadFeedsFAIL)
					);
				}
				
				loadFeedsOK = function(data){
					
					WL.Logger.debug("Start loadFeedsOK");
					if (!data || !data.responseJSON || !data.responseJSON.items || data.responseJSON.items.length==0)
						console.debug("Could not retrieve feeds");
					feeds = data.responseJSON.items;
	      			
	      			//Clean existing list
	      			var feedInfo = dom.byId("feedList");		
	      			var widgets = registry.findWidgets(feedInfo);
	      			array.forEach(widgets, function(w) {
	      				w.destroyRecursive(true);
	      			});
	      			domConstruct.empty(feedInfo); 
					
					var feedList = registry.byId("feedList");
					
					array.forEach(feeds, lang.hitch(this, function(feed,i) {
						
						var itemHtml = domConstruct.create("div", {innerHTML:
							"<div class='feedTitle' index='" + i + "'>" + feed.title + "</div><div class='pubDate'>"+ feed.pubDate+"</div>"
						});
						
						var itemCfg = {icon:""};
						itemCfg["class"] = "mblVariableHeight";
						itemCfg.noArrow = false;
						itemCfg.moveTo = "#";
						var thisObj = this;
						itemCfg.onClick = function(e){
							feedList.selectItem(this);
							lang.hitch(this,thisObj.displayFeed)(i);
						};
						
						var item = new dojox.mobile.ListItem(itemCfg, itemHtml);
						feedList.addChild(item); 
						
					}), this);
					
	      			busy.hide();
				}
				
				loadFeedsFAIL = function(){ busy.hide(); }
				
				displayFeed = function(index) {
			
					var feedDetail = feeds[index].description;
					dom.byId("feedDetail").innerHTML = feedDetail;
					
					//Refine img and links
					query("img").forEach(function(node, index, nodelist){
						if(domAttr.get(node, "src").indexOf("jpg")>=0){
							if(node.style.width && node.style.height){
								var rate = parseInt(node.style.height.replace(/px/gi,""))/parseInt(node.style.width.replace(/px/gi,"")); 
								node.style.width = document.body.clientWidth/1.8 + "px";
								node.style.height = (document.body.clientWidth/1.8) * rate + "px";
								domAttr.set(node, "width",260);
							}else{
								node.style.width = node.style.height = document.body.clientWidth/1.8 + "px";
								domAttr.set(node, "width",260);
							}
						}
					});
					
					query("#feedDetail a").forEach(function(node, index, nodelist){
							domAttr.set(node, "target","_blank");
					});
					
					if(!inTrans){
						inTrans = true;
						registry.byId("mainFeedView").performTransition("FeedDeatilView",1,"slide");
					}
					
					registry.byId("homeMenuItem").selected = false;
				}
				
				loadAbout = function(){
					var content = '<h2 id="aboutMobileFirstTitle">IBM MobileFirst</h2><p id="aboutMobileFirstProductName">IBM MobileFirst</p><p id="aboutMobileFirstVersion">Version 6.2.0</p>' + 
						'<p id="aboutMobileFirstText">COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing application programs conforming to the application programming interface for the operating platform for which the sample code is written. Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.</p><a id="aboutMobileFirstLink">IBM MobileFirst</a>';
					
					dom.byId("aboutTab").innerHTML = content;
					on(dom.byId('aboutMobileFirstLink'), "touchstart", function() {
						WL.App.openURL(MobileFirst_URL, '_blank');
					});
				}
				
				ready(function()
				{
					WL.Logger.debug("Everything loaded");
				
					setTimeout(function() {
						domStyle.set('loadDiv', 'display', 'none');
						
						beforeInitEnv();
						
						WL.Logger.debug("About to call LoadFeeds");
						loadFeeds();
						loadAbout();
					}, 1000);
				}
			);
	});
}
