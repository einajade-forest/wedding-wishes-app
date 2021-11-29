<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:w="https://github.com/einajade-forest/WW-Wines"
>
  <xsl:output method="xml" indent="yes"/>

  <xsl:template match="w:WineDescriptions">
    <html>
      <style>
        body {font-family: 'Trebuchet MS', Calibri, Arial; color: #262626" >}
      </style>
      <body>
        <table border="2">
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Source</th>
          </tr>
          <xsl:for-each select="w:WineDescription">
            <tr>
              <td>
                <xsl:value-of select="@Id" />
              </td>
              <td>
                <xsl:value-of select="@Text" />
              </td>
              <td>
                <xsl:value-of select="@Source" />
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
