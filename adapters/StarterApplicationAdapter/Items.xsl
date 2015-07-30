<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<!--
Copyright 2015 IBM Corp.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
<xsl:output method="text"/>
<xsl:template match="/rss">
    {
        "items" : [
            <xsl:for-each select="channel/item">
                {
                    'title' : '<xsl:value-of select="title"/>',
                    'link' : '<xsl:value-of select="link"/>',
                    'pubDate' : '<xsl:value-of select="pubDate"/>',
                    'description' : '<xsl:value-of select="description"/>'
                },
            </xsl:for-each>
        ]
    }
</xsl:template>
</xsl:stylesheet>
