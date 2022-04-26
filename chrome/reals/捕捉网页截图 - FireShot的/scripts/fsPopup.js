/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2021 Evgeny Suslikov (evgeny@suslikov.ru)
*/
var capMode,clickedElem;
function enableToolsItems(){var b=capMode===cModeTabs,d=getExtension().isProMode(),a=b?"block":"none",f=b?"none":"block",g=!d&&b?"disabled":"";document.getElementById("mnuTabsUpgrade").style.display=d||!b?"none":"block";document.getElementById("mnuSaveSinglePDF").style.display=a;document.getElementById("mnuSavePDF").style.display=f;document.getElementById("mnuEdit").className=g;document.getElementById("mnuSave").className=g;document.getElementById("mnuUpload").className=g;document.getElementById("mnuPrint").className=
g;document.getElementById("mnuClipboard").className=g;document.getElementById("mnuEmail").className=g;document.getElementById("mnuExtEdit").className=g;document.getElementById("mnuSendOneNote").className=g;document.getElementById("mnuSaveSinglePDF").className=g}function switchPane(b,d){d=document.getElementById(d);d.style.display="block";d.style.left=Math.min(document.body.clientWidth-d.clientWidth-5,b.pageX)+"px";d.style.top=Math.min(document.body.clientHeight-d.clientHeight-5,b.pageY)+"px"}
function closePane(b){document.getElementById(b).style.display="none"}
function updateLastAction(){var b=getExtension().getLADescription();document.getElementById("spnLastAction").textContent=b;document.getElementById("spnLastAction").title=b;document.getElementById("spnShortcut").textContent="";chrome.commands.getAll(function(d){getLAShortcut(function(a){document.getElementById("spnLastAction").title=b+" ("+a+")";document.getElementById("spnShortcut").textContent=a;document.getElementById("spnShortcutStop").textContent=a})})}
function click(b,d){if("disabled"!=b.className){clickedElem=b;capMode===cModeTabs&&b.parentElement&&"mnuTools"===b.parentElement.getAttribute("rel")||"mnuCaptureEntire"==b.id||"mnuCaptureVisible"==b.id||"mnuCaptureSelection"==b.id||"mnuCaptureBrowser"==b.id||"mnuCaptureTabs"==b.id||"mnuMiscellaneousFolder"==b.id||window.close();var a=getExtension(),f=function(g){return capMode!==cModeTabs?g():tabsPermissionRequired(function(){window&&window.close();g()})};switch(b.id){case "mnuResume":a.resumeEditing();
break;case "mnuPreferences":case "mnuPreferencesLite":a.openExtensionPreferences();break;case "mnuQuickLaunch":a.captureLastUsedMode();break;case "mnuCaptureEntire":capMode=cModeEntire;enableToolsItems();switchPane(d,"mnuTools");break;case "mnuCaptureVisible":capMode=cModeVisible;enableToolsItems();switchPane(d,"mnuTools");break;case "mnuCaptureSelection":capMode=cModeSelected;enableToolsItems();switchPane(d,"mnuTools");break;case "mnuCaptureBrowser":capMode=cModeBrowser;enableToolsItems();switchPane(d,
"mnuTools");break;case "mnuCaptureTabs":capMode=cModeTabs;enableToolsItems();switchPane(d,"mnuTools");break;case "mnuMiscellaneousFolder":switchPane(d,"mnuMiscellaneous");break;case "mnuViewDemo":a.openDemoPage();break;case "mnuSupport":a.openSupportPage();break;case "mnuAPI":a.openAPIPage();break;case "mnuTabsUpgrade":case "mnuUpgrade":a.doUpgrade();break;case "mnuRegister":a.doRegister();break;case "mnuEnterLicense":a.enterLicense();break;case "mnuCaptureEntireLite":a.executeGrabber(cActionEdit,
cModeEntire);break;case "mnuCaptureVisibleLite":a.executeGrabber(cActionEdit,cModeVisible);break;case "mnuCaptureSelectionLite":a.executeGrabber(cActionEdit,cModeSelected);break;case "mnuEdit":f(function(){a.executeGrabber(cActionEdit,capMode)});break;case "mnuSave":f(function(){a.executeGrabber(cActionSave,capMode)});break;case "mnuSavePDF":f(function(){a.executeGrabber(cActionSavePDF,capMode)});break;case "mnuSaveSinglePDF":f(function(){a.executeGrabber(cActionMultiPDF,capMode)});break;case "mnuUpload":f(function(){a.executeGrabber(cActionUpload,
capMode)});break;case "mnuPrint":f(function(){a.executeGrabber(cActionPrint,capMode)});break;case "mnuClipboard":f(function(){a.executeGrabber(cActionClipboard,capMode)});break;case "mnuEmail":f(function(){a.executeGrabber(cActionEMail,capMode)});break;case "mnuExtEdit":f(function(){a.executeGrabber(cActionPaint,capMode)});break;case "mnuSendOneNote":f(function(){a.executeGrabber(cActionSendOneNote,capMode)});break;case "mnuOpenFile":a.openFile();break;case "mnuOpenClipboard":a.openClipboard();break;
case "mnuLicenseInfo":a.showLicenseInfo();break;case "mnuAbout":a.showAbout();break;case "mnuFireShotNative":a.installNative();break;case "lnkDuplicateTab":a.duplicateTab();break;case "lnkTryAnotherPage":window.close();a.openURL("https://www.google.com/search?q=kitties");break;case "lnkAllowFileAccess":a.openURL("https://getfireshot.com/enable-file-access.php?browser=ch");break;case "lnkExtensionSettings":a.openExtensionSettings();break;case "mnuStopFireShot":a.stopCapturing()}}}
function mouseOver(b,d){b==clickedElem||b.parentNode&&"mnuTools"==b.parentNode.getAttribute("rel")||(document.getElementById("mnuTools").style.display="none");b==clickedElem||b.parentNode&&"mnuMiscellaneous"==b.parentNode.getAttribute("rel")||(document.getElementById("mnuMiscellaneous").style.display="none")}
function load(){try{i18nPrepare()}catch(g){logError(g.message)}for(var b=function(g){g.preventDefault();click(this,g);return!0},d=function(g){mouseOver(this,g)},a=document.createNodeIterator(document.documentElement,NodeFilter.SHOW_ELEMENT,null,!1),f;f=a.nextNode();)if("LI"==f.nodeName||"command"===f.getAttribute("rel"))f.onclick=b,f.onmouseover=d;updateLastAction();updateAccessibility(allowKeyboard)}
function updateAccessibility(b){getExtension().checkAdvancedFeatures();getExtension().getMenuSettings(function(d){for(var a in d){var f=document.getElementById(a);if(null===f)alert("Element "+a+" not found");else{var g=d[a];f.style.display="hidden"===g?"none":"block";"disabled"===g?f.classList.add("disabled"):f.classList.remove("disabled")}}document.body.style.display="block";b()})}
function allowKeyboard(){function b(c){var k=function(){return{next:null,prev:null,getPrev:function(){for(var h=this.prev;h&&"none"===h.node.style.display;)h=h.prev;return h},getNext:function(){for(var h=this.next;h&&"none"===h.node.style.display;)h=h.next;return h}}};c=document.createNodeIterator(c,NodeFilter.SHOW_ELEMENT,{acceptNode:function(h){return"li"!==h.nodeName.toLowerCase()||h.classList.contains("disabled")||"none"===h.style.display||"none"===h.parentNode.parentNode.style.display?NodeFilter.FILTER_REJECT:
NodeFilter.FILTER_ACCEPT}});for(var l=new k,r=null,m=l,t;t=c.nextNode();){m.node=t;if(m.prev=r)r.next=m;r=m;m=new k}return l}function d(c){c.node.classList.add("hoverstyle")}function a(){var c=new Event("click");c.pageX=1E3;c.pageY=e.node.getClientRects()[0].top;e.node.dispatchEvent(c)}var f=function(c,k){k.node&&c.push(k);k.next&&[k.next].reduce(f,c);return c},g=b(document.getElementById("mnuMain")),p=b(document.getElementById("mnuTools")),q=b(document.getElementById("mnuMiscellaneous")),u=[g,p,
q].reduce(function(c,k){return c.concat([k].reduce(f,[]))},[]),e=g,n=null;u.forEach(function(c){c.node.addEventListener("mouseover",function(){e&&e.node.classList.remove("hoverstyle");e=c;c.node.classList.add("mouseactive")});c.node.addEventListener("click",function(k){var l=c.node;e&&e.node.classList.remove("hoverstyle");"mnuCaptureEntire"===l.id||"mnuCaptureVisible"===l.id||"mnuCaptureSelection"===l.id||"mnuCaptureBrowser"===l.id||"mnuCaptureTabs"===l.id?(n=e,e="none"===p.node.style.display?p.getNext():
p):"mnuMiscellaneousFolder"===l.id&&(n=e,e="none"===q.node.style.display?q.getNext():q);k.isTrusted||d(e)})});document.addEventListener("keydown",function(c){if(e.node){var k=!e.node.classList.contains("hoverstyle")&&!e.node.classList.contains("mouseactive");u.forEach(function(l){return l.node.classList.remove("mouseactive")});"ArrowDown"===c.key&&k?d(e):"ArrowDown"===c.key&&e.getNext()?(e.node.classList.remove("hoverstyle"),e=e.getNext(),d(e)):"ArrowUp"===c.key&&e.getPrev()?(e.node.classList.remove("hoverstyle"),
e=e.getPrev(),d(e)):"Enter"===c.key?a():"ArrowRight"===c.key?(c=e.node,"mnuMiscellaneousFolder"!==c.id&&"mnuCaptureEntire"!==c.id&&"mnuCaptureVisible"!==c.id&&"mnuCaptureSelection"!==c.id&&"mnuCaptureBrowser"!==c.id&&"mnuCaptureTabs"!==c.id||a()):"ArrowLeft"===c.key&&n&&(e.node.classList.remove("hoverstyle"),e=n,n=null,d(e),closePane("mnuTools"),closePane("mnuMiscellaneous"))}})}
document.addEventListener("DOMContentLoaded",function(){var b=getExtension();b.checkActivationPage(function(d){d&&window.close()});b.checkBadgeAction()?isSafari()?(b=document.createElement("p"),b.textContent="FireShot has been updated",document.body.replaceChild(b,document.getElementById("mnuMain")),document.body.style.display="block"):window.close():load()});
