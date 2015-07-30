/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

beforeInitEnv = function() {
	require(['dojo/_base/lang', 'dojo/dom', 'dojo/dom-style', 'dojo/on', 'dijit/registry', 'dojox/mobile/TransitionEvent'], 
		function(lang, dom, domStyle, on, registry, TransitionEvent) {
		WL.TabBar.init();
		feedsTab = WL.TabBar.addItem('feeds', function(){
			new TransitionEvent(dom.byId('loadDiv'),
				{'moveTo': 'mainFeedView', transition: 'slide', transitionDir: -1}).dispatch();
		}, 'Feeds', {image: 'images/feed.png', imageSelected: 'images/feed.png'});
		aboutTab = WL.TabBar.addItem('about', function(){
			new TransitionEvent(dom.byId('loadDiv'),
				{'moveTo': 'aboutView', transition: 'slide', transitionDir: 1}).dispatch();
		}, 'About', {image: 'images/about.png', imageSelected: 'images/about.png'});
		
		on(registry.byId("FeedDeatilView"), "afterTransitionIn", function() {
			inTrans = false;
			registry.byId("feedList").deselectAll();
			WL.App.overrideBackButton(function() {
				new TransitionEvent(dom.byId('loadDiv'),
					{'moveTo': 'mainFeedView', transition: 'slide', transitionDir: -1}).dispatch();
			});
		});
		on(registry.byId("FeedDeatilView"),"beforeTransitionOut", function() {
			WL.App.resetBackButton();
		});
		
		WL.TabBar.setSelectedItem('feeds');
		WL.TabBar.setVisible(true);
		
		WL.OptionsMenu.init();
		WL.OptionsMenu.addItem('reload', function () {loadFeeds();}, 'Reload', {image : 'reload', enabled : true});
		
		domStyle.set('aboutTab', 'height', (screen.height - 60) + 'px');
	});
};

// This method is invoked after loading the main HTML and successful initialization of the MobileFirst runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}