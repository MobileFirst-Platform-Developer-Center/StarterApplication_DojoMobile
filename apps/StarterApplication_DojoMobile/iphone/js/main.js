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

beforeInitEnv = function() {
	require(['dojo/_base/lang', 'dojo/dom', 'dojo/on', 'dijit/registry', 'dojox/mobile/TransitionEvent'], 
		function(lang, dom, on, registry, TransitionEvent) {
		WL.TabBar.init();
		feedsTab = WL.TabBar.addItem('feeds', function(){
			new TransitionEvent(dom.byId('loadDiv'),
				{'moveTo': 'mainFeedView', transition: 'slide', transitionDir: -1}).dispatch();
		}, 'Feeds', {image: 'images/feed.png'});
		aboutTab = WL.TabBar.addItem('about', function(){
			new TransitionEvent(dom.byId('loadDiv'),
				{'moveTo': 'aboutView', transition: 'slide', transitionDir: 1}).dispatch();
		}, 'About', {image: 'images/about.png'});
		reloadTab = WL.TabBar.addItem('reload', 
			lang.hitch(this,loadFeeds), 'Reload', {image: 'images/reload.png'});
		
		on(registry.byId("FeedDeatilView"), "afterTransitionIn", function() {
			inTrans = false;
			registry.byId("feedList").deselectAll();
		});
		on(registry.byId("mainFeedView"),"afterTransitionIn", function() {
			reloadTab.setEnabled(true);
		});
		on(registry.byId("mainFeedView"),"beforeTransitionOut", function() {
			reloadTab.setEnabled(false);
		});
		
		WL.TabBar.setSelectedItem('feeds');
		WL.TabBar.setVisible(true);
	});
};

// This method is invoked after loading the main HTML and successful initialization of the MobileFirst runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}