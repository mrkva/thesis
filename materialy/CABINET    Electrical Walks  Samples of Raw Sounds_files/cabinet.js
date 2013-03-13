/*****************************/
/*** Today's Date + highlighter *****/
/*****************************/
var today=new Date ();
var month=today.getMonth()+1;
var year=today.getFullYear();
var day=today.getDate();
if (day<10) day="0"+day;
if (month<10) month="0"+month;
var today_f=year + "-" + month + "-" + day;

$(document).ready( function () {
	$('#calendar_full #' + today_f).addClass('today');
});

/*****************************/
/*** Drop down menu  *****/
/*** From http://javascript-array.com/scripts/jquery_simple_drop_down_menu/  *****/
/*****************************/

var timeout    = 500;
var closetimer = 0;
var ddmenuitem = 0;
var ddhdr = 0;

function jsddm_open()
{  jsddm_canceltimer();
   jsddm_off();
   ddmenuitem = $(this).find('ul').css('display', 'block'); 
   ddhdr = $(this).find('a.nav_link').addClass('active');
}

function jsddm_off()
{  if(ddmenuitem) ddmenuitem.css('display', 'none');
    if(ddhdr) ddhdr.removeClass('active');
}

function jsddm_close()
{  if(ddmenuitem) ddmenuitem.css('display', 'none');
}

function jsddm_timer()
{  closetimer = window.setTimeout(jsddm_off, timeout);}

function jsddm_canceltimer()
{  if(closetimer)
   {  window.clearTimeout(closetimer);
      closetimer = null;}}

$(document).ready(function()
{  $('#jsddm > li').bind('mouseover', jsddm_open)
    $('#jsddm > li').bind('mouseout',  jsddm_timer)});

document.onclick = jsddm_close;

/*****************************/
/*** Dropdown for ReadingRoom *****/
/*****************************/


toggle = false;
function revealRRTitle(pubTitle1, pubTitle2) {
toggle = toggle ? false : true;
show = toggle ? "visible" : "hidden";
document.getElementById(pubTitle1).style.visibility=show;
document.getElementById(pubTitle2).style.visibility=show;
n = toggle ? document.getElementById(pubTitle2).offsetHeight : 0;
document.getElementById(pubTitle1).style.height=n;
toggle = false;
}


/***********************************************************************************************/
//font resizer
baseSize = 9;
function checkFontSetting() {

	if (document.cookie.indexOf("fontSize")>=0) {
		cookieVal = document.cookie.split("fontSize=")[1];
		baseSize=0;
		changeType(cookieVal*1)
	}
}

function changeType(sizeDiff) {
	baseSize += sizeDiff;
	if (baseSize < 30 && baseSize > 5) {
		if(document.getElementById("articleText")){
		document.getElementById("articleText").style.fontSize = baseSize + "pt" ;
		document.cookie = "fontSize="+baseSize+";path=/";
		}
	}
}

// popup window	& Legacy Functions
wdth=640;ht=580;scrl=1;rs=1;name="Immaterial";
function popwin(file,wdth,ht,name,scrl,rs) { 
// POPUP WINDOW SIZE ADJUSTMENTS
var size = 'width=' + wdth + ',height=' + ht;
if (scrl)	{ size += ',resizable,status';}
if (rs)		{ size += ',scrollbars';}

p = open(file, name, size); 
p.focus();
}



/*****************************/
/*** Image Viewer Pop Up Issue 10 Legacy *****/
/*****************************/

function openBrWindow(theURL,winName,features) { 
     window.open(theURL,winName,features); 
} 


/*****************************/
/*** Munge Function *****/
/*****************************/

function munge(p1,p2) {
     var box = p1 + p2;
     var a = "@";
     var dom = "cabinetmagazine";
     var dot = ".";
     var tld = "org";
     alert("You can reach us at: " + box + a + dom + dot + tld);
}

/*****************************/
/*** Image Viewer Popup *****/
/*****************************/

function openViewer(imagePath,imgNum) {
	str = "/sitewide/pop.php?imagePath=" + imagePath + "&imgNum="  + imgNum
	window.open (str,"pic","height=550,width=550,scrolling=auto,scrollbars")
	}

/*****************************/
/*** Media Viewer Popup *****/
/*****************************/
function openMedia(mediaType,mediaPath) {
	features = "";
	mediaString = "/sitewide/mediaplayer.php";
	if (mediaType=="audio") {
	features+="height=140,width=360"
	mediaString+="?mediaType=audio";
	}
	else {
	features+="height=390,width=360"
	mediaString+="?mediaType=video";
	}
	mediaString+="&mediaPath="+mediaPath
	mediaWin = window.open(mediaString,"mediaWin",features);
	mediaWin.focus();
}