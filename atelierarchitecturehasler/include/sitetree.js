/* [nodename, id, name, navigationtext, href, isnavigation, childs[], templatename] */

if (typeof(decodeURIComponent) == 'undefined') {
  decodeURIComponent = function(s) {
    return unescape(s);
  }
}

function jdecode(s) {
    s = s.replace(/\+/g, "%20")
    return decodeURIComponent(s);
}

var POS_NODENAME=0;
var POS_ID=1;
var POS_NAME=2;
var POS_NAVIGATIONTEXT=3;
var POS_HREF=4;
var POS_ISNAVIGATION=5;
var POS_CHILDS=6;
var POS_TEMPLATENAME=7;
var POS_TARGET=8;
var theSitetree=[ 
	['PAGE','701',jdecode('Home'),jdecode(''),'/701.html','true',[],'',''],
	['PAGE','11301',jdecode('Historique'),jdecode(''),'/11301.html','true',[],'',''],
	['PAGE','5043',jdecode('Architecture'),jdecode(''),'/5043/index.html','true',[ 
		['PAGE','42301',jdecode('r%C3%A9alisations+1970-78'),jdecode(''),'/5043/42301.html','true',[],'',''],
		['PAGE','5064',jdecode('r%C3%A9alisations+1986-90'),jdecode(''),'/5043/5064.html','true',[],'',''],
		['PAGE','17301',jdecode('r%C3%A9alisations+r%C3%A9centes'),jdecode(''),'/5043/17301.html','true',[],'',''],
		['PAGE','17322',jdecode('transformations'),jdecode(''),'/5043/17322.html','true',[],'',''],
		['PAGE','5085',jdecode('en+cours'),jdecode(''),'/5043/5085.html','true',[],'',''],
		['PAGE','62901',jdecode('%C3%A0+l%26%23x27%3Benqu%C3%AAte+publique'),jdecode(''),'/5043/62901.html','true',[],'',''],
		['PAGE','5106',jdecode('avant-projets'),jdecode(''),'/5043/5106.html','true',[],'',''],
		['PAGE','37401',jdecode('architecture+d%26%23x27%3Bint%C3%A9rieure'),jdecode(''),'/5043/37401.html','true',[],'','']
	],'',''],
	['PAGE','150501',jdecode('Mat%C3%A9riaux+-D%C3%A9tails'),jdecode(''),'/150501/index.html','true',[ 
		['PAGE','51101',jdecode('constructions+en+bois'),jdecode(''),'/150501/51101.html','true',[],'',''],
		['PAGE','36001',jdecode('mat%C3%A9riaux'),jdecode(''),'/150501/36001.html','true',[],'',''],
		['PAGE','49301',jdecode('d%C3%A9tails+d%26%23x27%3Barchitecture'),jdecode(''),'/150501/49301.html','true',[],'','']
	],'',''],
	['PAGE','5127',jdecode('Offres'),jdecode(''),'/5127.html','true',[],'',''],
	['PAGE','5001',jdecode('Contact'),jdecode(''),'/5001.html','true',[],'',''],
	['PAGE','7301',jdecode('Acc%C3%A8s'),jdecode(''),'/7301.html','true',[],'',''],
	['PAGE','83001',jdecode('Comment+nous+trouver'),jdecode(''),'/83001.html','true',[],'','']];
var siteelementCount=19;
theSitetree.topTemplateName='Linear';
theSitetree.paletteFamily='993300';
theSitetree.keyvisualId='2185';
theSitetree.keyvisualName='architekt2.jpg';
theSitetree.fontsetId='361';
theSitetree.graphicsetId='412';
theSitetree.contentColor='FFFFFF';
theSitetree.contentBGColor='333300';
var localeDef={
  language: 'fr',
  country: 'FR'
};
var theTemplate={
				hasFlashNavigation: 'false',
				hasFlashLogo: 	'false',
				hasFlashCompanyname: 'false',
				hasFlashElements: 'false',
				hasCompanyname: 'false',
				name: 			'Linear',
				paletteFamily: 	'993300',
				keyvisualId: 	'2185',
				keyvisualName: 	'architekt2.jpg',
				fontsetId: 		'361',
				graphicsetId: 	'412',
				contentColor: 	'FFFFFF',
				contentBGColor: '333300',
				a_color: 		'003333',
				b_color: 		'FFFFFF',
				c_color: 		'FFFFFF',
				d_color: 		'99CC66',
				e_color: 		'CCFF66',
				f_color: 		'669966',
				hasCustomLogo: 	'true',
				contentFontFace:'Verdana, Arial, Helvetica, sans-serif',
				contentFontSize:'12',
				useFavicon:     'false'
			  };
var webappMappings = {};
webappMappings['1006']=webappMappings['1006-1006']={
webappId:    '1006',
documentId:  '701',
internalId:  '1006',
customField: '1006'
};
webappMappings['2001']=webappMappings['2001-location']={
webappId:    '2001',
documentId:  '7301',
internalId:  'location',
customField: 'language:fr;country:FR;isIncluded:false;'
};
webappMappings['2002']=webappMappings['2002-routing']={
webappId:    '2002',
documentId:  '83001',
internalId:  'routing',
customField: 'fr_FR'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '701',
internalId:  '',
customField: '20100129-111032'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '5043',
internalId:  '',
customField: '20090407-230924'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '17301',
internalId:  '',
customField: '20100528-140745'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '5085',
internalId:  '',
customField: '20100528-145819'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '11301',
internalId:  '',
customField: '20090407-230743'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '42301',
internalId:  '',
customField: '20080508-162613'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '5127',
internalId:  '',
customField: '20100528-150316'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '5001',
internalId:  '',
customField: '20080422-111514'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '7301',
internalId:  '',
customField: '20060926-151844'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '5064',
internalId:  '',
customField: '20071018-110428'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '17322',
internalId:  '',
customField: '20080208-092754'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '62901',
internalId:  '',
customField: '20100528-142402'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '5106',
internalId:  '',
customField: '20100528-140225'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '37401',
internalId:  '',
customField: '20100108-144812'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '51101',
internalId:  '',
customField: '20070815-100921'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '36001',
internalId:  '',
customField: '20061031-143311'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '49301',
internalId:  '',
customField: '20070816-154512'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '83001',
internalId:  '',
customField: '20070908-120046'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '150501',
internalId:  '',
customField: '20090427-230038'
};
var canonHostname = 'hptworkerdb01b.bluewin.ch';
var accountId     = 'ABW0X0IN2W7D';
var companyName   = 'Le+K+Rei+Vert%2C+Atelier+d%27architecture';
var htmlTitle	  = 'Le+K+Rei+Vert%2C+atelier+d%27architecture+';
var metaKeywords  = 'atelier%3B++architecture+%3BHasler%3B++projets%3B++r%C3%A9alisations%3B++b%C3%A2timents%3B++historique%3B+fengshui%3B+bureau%3B+bois%3B+d%C3%A9tail%3B+landeron+%3B+architecte%3B+Reynald%3B+terrain%3B+';
var metaContents  = 'atelier%3B++architecture+%3BHasler%3B++projets%3B++r%C3%A9alisations%3B++b%C3%A2timents%3B++historique%3B+fengshui%3B+bureau%3B+bois%3B+d%C3%A9tail%3B+landeron+%3B+architecte%3B+Reynald%3B+terrain%3B+';
theSitetree.getById = function(id, ar) {
	if (typeof(ar) == 'undefined'){
		ar = this;
	}
	for (var i=0; i < ar.length; i++) {
		if (ar[i][POS_ID] == id){
			return ar[i];
		}
		if (ar[i][POS_CHILDS].length > 0) {
			var result=this.getById(id, ar[i][POS_CHILDS]);
			if (result != null){
				return result;
			}
		}
	}
	return null;
};

theSitetree.getParentById = function(id, ar) {
	if (typeof(ar) == 'undefined'){
		ar = this;
	}
	for (var i=0; i < ar.length; i++) {
		for (var j = 0; j < ar[i][POS_CHILDS].length; j++) {
			if (ar[i][POS_CHILDS][j][POS_ID] == id) {
				// child found
				return ar[i];
			}
			var result=this.getParentById(id, ar[i][POS_CHILDS]);
			if (result != null){
				return result;
			}
		}
	}
	return null;
};

theSitetree.getName = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_NAME];
	}
	return null;
};

theSitetree.getNavigationText = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_NAVIGATIONTEXT];
	}
	return null;
};

theSitetree.getHREF = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_HREF];
	}
	return null;
};

theSitetree.getIsNavigation = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_ISNAVIGATION];
	}
	return null;
};

theSitetree.getTemplateName = function(id, lastTemplateName, ar) {
	if (typeof(lastTemplateName) == 'undefined'){
		lastTemplateName = this.topTemplateName;
	}
	if (typeof(ar) == 'undefined'){
		ar = this;
	}
	for (var i=0; i < ar.length; i++) {
		var actTemplateName = ar[i][POS_TEMPLATENAME];
		if (actTemplateName == ''){
			actTemplateName = lastTemplateName;
		}
		if (ar[i][POS_ID] == id) {
			return actTemplateName;
		}
		if (ar[i][POS_CHILDS].length > 0) {
			var result=this.getTemplateName(id, actTemplateName, ar[i][POS_CHILDS]);
			if (result != null){
				return result;
			}
		}
	}
	return null;
};

theSitetree.getByXx = function(lookup, xx, ar) {
    if (typeof(ar) == 'undefined'){
    	ar = this;
    }
    for (var i=0; i < ar.length; i++) {
        if (ar[i][xx] == lookup){
        	return ar[i];
        }
        if (ar[i][POS_CHILDS].length > 0) {
        	var result=this.getByXx(lookup, xx, ar[i][POS_CHILDS]);
            if (result != null){
                return result;
               }
        }
    }
    return null;
};

function gotoPage(lookup) {
	if(__path_prefix__ == "/servlet/CMServeRES" && typeof (changePage) == 'function'){
		changePage(lookup);
		return;
	}
	var page = theSitetree.getHREF(lookup);
	if (!page) {
		var testFor = [ POS_NAME, POS_NAVIGATIONTEXT ];
		for (var i=0 ; i < testFor.length ; i++) {
			var p = theSitetree.getByXx(lookup, testFor[i]);
			if (p != null) {
				page = p[POS_HREF];
				break;
			}
		}
	}
	document.location.href = (new URL(__path_prefix__ + page, true, true)).toString();
};
