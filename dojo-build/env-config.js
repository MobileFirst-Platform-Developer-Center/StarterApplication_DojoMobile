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

var dojoConfig = {
	"action"				  : "release",

	// point basePath to build/
	"releaseDir"			  : "../optimized",
	"selectorEngine"		  : "acme",
	"optimize"				  : "shrinksafe",
	"layerOptimize"			  : "shrinksafe",
	"stripConsole"			  : "normal",
	"copyTests"				  : false,
	
	"cssImportIgnore"		  : "../dijit.css",
	"cssOptimize"			  : "comments.keepLines",
	"mini"					  : true,
	"webkitMobile"			  : true,

	// now a typical loader packages configuration
	packages:[
		{ name:"dojo"		 , location:"./dojo"		},
		{ name:"dojox"		 , location:"./dojox"		},
		{ name:"dijit"		 , location:"./dijit"		},
		{ name:"demos"		 , location:"./demos"		}
	]
}
