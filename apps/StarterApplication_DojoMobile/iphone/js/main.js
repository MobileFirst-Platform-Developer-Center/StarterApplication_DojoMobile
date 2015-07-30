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