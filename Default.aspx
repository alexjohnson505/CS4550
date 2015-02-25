<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset='utf-8' />

<title>Demo Home Page</title>

<style type="text/css">
    ul.master_navigation
    {
        font-size: 100%;
        font-weight: bold;
        text-align: center;
        list-style: none;
        margin: 0.5em 0;
        padding: 0;
    }

    ul.master_navigation li
    {
        display: inline-block;
        padding: 0 0.5%;
    }

    a
    {
        color: #08f;
        font-weight: bold;
        text-decoration: none;
    }

    a:visited
    {
        color: #88f;
    }

    a:hover
    {
        color: #f00;
    }

    p
    {
        text-align: justify;
    }
</style>

<style type="text/css" media="screen">
    body {
        width:900px;
        max-width: 100%;
        margin: 0;
        padding: 0;
    }

    .pad {
        padding: 10px;
    }
</style>

</head>

<body>

<div class="pad">

<form id="form1" runat="server">

<div>

<ul class="master_navigation">
    <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
    <li><a href="statistics/" target="_blank">Statistics</a></li>
    <li><a href="source/" target="_blank">Source</a></li>
    <li><a href="search/" target="_blank">Search</a></li>
    <li><a href="searchtree/" target="_blank">SearchTree</a></li>
    <li><a href="textview/" target="_blank">TextView</a></li>
    <li><a href="filelist.aspx" target="_blank">FileList</a></li>
    <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
    <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
    <li><a href="blog/" target="_blank">Blog</a></li>
</ul>

<hr />

<p>
    <b>CS4550 Web Development - Alex Johnson</b>
</p>

<hr />


<h3>Homework Assignments</h3>

<p>
    
    <a href="assignments/html/studyList.html">Assignment 01 - HTML</a><br>
    <a href="assignments/css/profile.html">Assignment 02 - CSS</a>

</p>

<hr />

<!-- <p>
    It would be helpful if your home page shows your name and a
    photo of yourself.  This will help us to get to know you. 
</p>
    
<hr />

<p>
Here is a link to the
<a href="story/index.htm" target="_blank">Story Utility</a>
on this site so that you may explore this tool.
</p>

<p>
Here is a link to the
<a href="http://www.northeastern.edu/rasala/webstories.htm"
        target="_blank">Web Development Stories</a>
so that you may see a good collection of online documentation.
</p>

<p>
This provides a model for using stories for documentation and
for collections of experiments.
</p> -->


</div>

</form>

</div>

</body>
</html>
