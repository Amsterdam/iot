webpackJsonp([1],{"/a6V":function(e,t){},AeKd:function(e,t){},BJy4:function(e,t){},BvLc:function(e,t){},EYnv:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),r=n.n(a),s=n("exGp"),i=n.n(s),o=n("Dd8w"),c=n.n(o),l=(n("EYnv"),n("BvLc"),n("VRXO"),n("r/PZ"),n("7+uW")),u=n("NYxO"),d=n("mtWM"),m=n.n(d),p=n("Rf8U"),v=n.n(p),h=n("sUu7"),f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container mt-2"},[t("header",[t("img",{staticClass:"logo",attrs:{src:n("h6Nk")}}),this._v(" "),t("h2",[t("b",[this._v(this._s(this.title))])])])])},staticRenderFns:[]};var g=n("VU/8")({props:["title"]},f,!1,function(e){n("fp0P")},"data-v-2c23ea43",null).exports,_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"menu mt-3"},[t("div",{staticClass:"container"},[t("nav",{staticClass:"nav nav-pills justify-content-end"},[t("router-link",{staticClass:"nav-link",class:{active:"Home"===this.$route.name},attrs:{to:"/"}},[t("span",{staticClass:"linklabel"},[this._v("\n          Home\n        ")])]),this._v(" "),t("router-link",{staticClass:"nav-link",class:{active:"Complaints"===this.$route.name},attrs:{to:"/complaints"}},[t("span",{staticClass:"linklabel"},[this._v("\n          Over IoT\n        ")])])],1)])])},staticRenderFns:[]};var b=n("VU/8")({},_,!1,function(e){n("Zug0")},"data-v-e9ad1f08",null).exports,w={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"container mt-2"},[this._t("default")],2)},staticRenderFns:[]},k=n("VU/8")(null,w,!1,null,null,null).exports,C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"container-fluid mt-2 pt-2 pb-1"},[n("div",[n("h2",[e._v("Disclaimer")]),e._v(" "),n("p",[e._v("\n      "+e._s(e.title)+" is gemaakt door "+e._s(e.author)+".\n    ")]),e._v(" "),n("p",[e._v("\n      De inhoud van "+e._s(e.title)+" is met uiterste zorgvuldigheid tot stand gebracht.\n      De inhoud wordt regelmatig gecontroleerd en geactualiseerd.\n    ")]),e._v(" "),n("p",[e._v("\n      "+e._s(e.author)+" kan echter niet aansprakelijk worden gesteld voor de juistheid, volledigheid en actualiteit van de website.\n      "+e._s(e.author)+" kan in het bijzonder niet aansprakelijk worden gesteld voor eventuele schade of consequenties ontstaan door direct of indirect gebruik van de inhoud van de website.\n    ")])])])},staticRenderFns:[]};var x,y=n("VU/8")({name:"AMSFooter",props:["title"],data:function(){return{author:"datapunt"}}},C,!1,function(e){n("lbIx")},"data-v-68b3746c",null).exports,q=n("//Fk"),j=n.n(q),A=(x=i()(r.a.mark(function e(t){var n,a,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=void 0,a=0;case 2:return e.prev=2,R.pending++,e.next=6,m.a.get(t);case 6:n=e.sent,e.next=15;break;case 9:return e.prev=9,e.t0=e.catch(2),console.error("Retry...",t),a++,e.next=15,T(100*a);case 15:return e.prev=15,R.pending--,e.finish(15);case 18:if(!n&&a<s){e.next=2;break}case 19:if(!n){e.next=24;break}return R.success++,e.abrupt("return",n);case 24:throw console.error("Request failed",t),R.error++,new Error("Request failed",t);case 27:case"end":return e.stop()}},e,this,[[2,9,15,18]])})),function(e){return x.apply(this,arguments)}),R={pending:0,success:0,error:0};function T(e){return new j.a(function(t,n){setTimeout(t,e)})}var $,E,S=($=i()(r.a.mark(function e(t){var n,a,s,i,o,c,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t,a=[],s=1,i=1e3,o=t.includes("?")?"&":"?";case 5:if(!n){e.next=21;break}return e.prev=6,c=""+t+o+"page="+s+"&page_size="+i,e.next=10,A(c);case 10:l=e.sent,n=l.data._links.next.href,a=a.concat(l.data.results),s+=1,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),n=null;case 19:e.next=5;break;case 21:return e.abrupt("return",a);case 22:case"end":return e.stop()}},e,this,[[6,16]])})),function(e){return $.apply(this,arguments)}),U=(E=i()(r.a.mark(function e(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e.data};return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:return n=e.sent,e.abrupt("return",a(n));case 4:case"end":return e.stop()}},e,this)})),{name:"LoadingComponent",components:{},props:{simple:{default:!1,type:Boolean}},data:function(){return{HTTPStatus:R,showSpinner:!1}},methods:{shouldShowSpinner:function(e){var t=this;e>0?(clearTimeout(this.spinnerHideTimeout),this.showSpinner=!0):this.spinnerHideTimeout=setTimeout(function(){t.showSpinner=!1},300)}},watch:{"HTTPStatus.pending":function(e){this.shouldShowSpinner(e)}}}),P={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"fade"}},[!e.simple&&e.showSpinner?n("div",{staticClass:"page-overlay"},[n("div",{staticClass:"progress-wrapper"},[n("div",{staticClass:"loader"}),e._v(" "),n("div",{staticClass:"progress-txt"},[e._v("Laden...")])])]):e._e(),e._v(" "),e.simple?n("div",{staticClass:"progress-indicator progress-red"}):e._e()])],1)},staticRenderFns:[]};var L={name:"App",components:{"ams-header":g,"ams-menu":b,"ams-content":k,"ams-footer":y,"loading-component":n("VU/8")(U,P,!1,function(e){n("xgc0")},"data-v-12edb72e",null).exports},data:function(){return{title:"Register IoT"}}},M={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("ams-header",{attrs:{title:this.title}},[this._v("Header")]),this._v(" "),t("ams-menu",[this._v("Menu")]),this._v(" "),t("ams-content",[t("router-view")],1),this._v(" "),t("loading-component")],1)},staticRenderFns:[]};var N=n("VU/8")(L,M,!1,function(e){n("SLis")},null,null).exports,V=n("/ocq"),z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card mt-2"},[t("h3",{staticClass:"card-header"},[this._v("\n    "+this._s(this.title)+"\n  ")]),this._v(" "),t("div",{staticClass:"card-body"},[this._t("default")],2)])},staticRenderFns:[]};var B={name:"Thing",components:{Card:n("VU/8")({name:"card",props:["title"]},z,!1,function(e){n("mKa+")},"data-v-63449976",null).exports},props:["thing","location"]},D={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",{staticClass:"font-weight-bold"},[e._v("Details")]),e._v(" "),n("h5",[e._v("Apparaat")]),e._v(" "),n("div",{staticClass:"font-weight-bold"},[e._v("Type")]),e._v(" "),n("p",[e._v(e._s(e.thing.device_type))]),e._v(" "),n("div",{staticClass:"font-weight-bold"},[e._v("Naam")]),e._v(" "),n("p",[e._v(e._s(e.thing.name))]),e._v(" "),n("div",{staticClass:"font-weight-bold"},[e._v("Beschrijving")]),e._v(" "),n("p",[e._v(e._s(e.thing.description))]),e._v(" "),n("div",{staticClass:"font-weight-bold"},[e._v("Doel")]),e._v(" "),n("p",[e._v(e._s(e.thing.purpose))]),e._v(" "),n("div",{staticClass:"font-weight-bold"},[e._v("Referentie")]),e._v(" "),n("p",[e._v(e._s(e.thing.ref))]),e._v(" "),n("p",{staticClass:"font-weight-bold"},[n("router-link",{attrs:{to:{name:"InfoRequest",params:{id:e.thing.id}}}},[e._v("\n    Contact eigenaar\n  ")])],1),e._v(" "),n("h5",[e._v("Plaatsing")]),e._v(" "),n("div",{staticClass:"font-weight-bold"},[e._v("Plaats")]),e._v(" "),n("p",[e._v(e._s(e.location.name))]),e._v(" "),n("div",{staticClass:"font-weight-bold"},[e._v("Referentie")]),e._v(" "),n("p",[e._v(e._s(e.location.ref))])])},staticRenderFns:[]};var F=n("VU/8")(B,D,!1,function(e){n("Qp/D")},"data-v-f7f2b48a",null).exports,I=n("nrd6"),H=n.n(I),O=(n("nvAS"),n("+INe"),{rd:{code:"EPSG:28992",projection:"+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +towgs84=565.2369,50.0087,465.658,-0.406857330322398,0.350732676542563,-1.8703473836068,4.0812 +no_defs",transformation:{resolutions:[3440.64,1720.32,860.16,430.08,215.04,107.52,53.76,26.88,13.44,6.72,3.36,1.68,.84,.42,.21,.105,.0525],bounds:[[-285401.92,22598.08],[595301.9199999999,903301.9199999999]],origin:[-285401.92,22598.08]}},wgs84:{code:"EPSG:4326",projection:"+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs"},earthRadius:6378137}),G=O.rd;G.transformation.bounds=H.a.bounds.apply(null,G.transformation.bounds);var Z=new H.a.Proj.CRS(G.code,G.projection,G.transformation);Z.distance=H.a.CRS.Earth.distance,Z.R=O.EARTH_RADIUS;function K(e){var t=H.a.map(e,{crs:Z,attributionControl:!1,zoomControl:!0,scrollWheelZoom:!1});return J(t),t.addLayer(H.a.tileLayer("https://t1.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png",{tms:!0,minZoom:7,maxZoom:16,opacity:.8})),t}function J(e){e.setView([52.375,4.9],8)}var W=n("fZjL"),Q=n.n(W),X=n("d7EF"),Y=n.n(X),ee=(n("0J91"),"static/markers/"),te={iconSize:[16,16],iconAnchor:[8,15],popupAnchor:[-3,-76]},ne={Camera:{id:"Camera",iconUrl:ee+"video-2x.png",name:"Camera",enabled:!0},Beacon:{id:"Beacon",iconUrl:ee+"signpost-2x.png",name:"Baken",enabled:!0}},ae=void 0,re=void 0;function se(e){ae&&e.removeLayer(ae)}function ie(e,t,n){var a=H.a.Control.extend({options:{position:n},onAdd:function(e){return H.a.DomUtil.get(t)}});e.addControl(new a)}function oe(e,t,n){var a,s=this,o=(a=i()(r.a.mark(function t(n){var a,i,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=Y()(n.wgs84_geometry.coordinates,2),i=a[0],o=a[1],H.a.popup({offset:new H.a.Point(0,-20),autoPan:!1}).setContent('<div class="font-weight-bold">'+n.device_type+"</div>"+n.name).setLatLng([i,o]).openOn(e);case 2:case"end":return t.stop()}},t,s)})),function(e){return a.apply(this,arguments)});return re=H.a.markerClusterGroup({disableClusteringAtZoom:12,spiderfyOnMaxZoom:!1}),Q()(ne).forEach(function(a){var r=H.a.featureGroup();t.filter(function(e){return e.device_type===a}).forEach(function(t){return H.a.marker(t.wgs84_geometry.coordinates,{icon:function(e){var t=ne[e.device_type].iconUrl;return H.a.icon(c()({},te,{iconUrl:t}))}(t)}).addTo(r).on("click",function(){return a=t,ae&&e.removeLayer(ae),(ae=H.a.circleMarker(a.wgs84_geometry.coordinates)).addTo(e),void n(a);var a}).on("mouseover",function(){return o(t)}).on("mouseout",function(){return e.closePopup()})}),ne[a].layer=r,ne[a].enabled=!0,re.addLayer(r)}),e.addLayer(re),function(e,t){var n=H.a.Control.extend({options:{position:"topleft"},onAdd:function(e){var n=H.a.DomUtil.create("img","leaflet-bar leaflet-control leaflet-control-custom");return n.src=ee+"home-3x.png",n.style.backgroundColor="white",n.style.width="33px",n.style.height="33px",n.onclick=function(){se(e),e.closePopup(),t(null),J(e)},n}});e.addControl(new n)}(e,n),re}var ce,le,ue=n("bOdI"),de=n.n(ue),me="https://acc.api.data.amsterdam.nl",pe=null,ve=null,he=function(){var e=i()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S(me+"/vsd/iot_markers/"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=i()(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(me+"/vsd/iot_locations/");case 2:return t=e.sent,n=t.reduce(function(e,t){return c()({},e,de()({},t.id,t))},{}),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=i()(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(me+"/vsd/iot_things/");case 2:return t=e.sent,n=t.reduce(function(e,t){return c()({},e,de()({},t.id,t))},{}),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),_e=(ce=i()(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return pe||(pe=ge()),e.next=3,pe;case 3:return n=e.sent,e.abrupt("return",n[t]);case 5:case"end":return e.stop()}},e,this)})),function(e){return ce.apply(this,arguments)}),be=(le=i()(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return ve||(ve=fe()),e.next=3,ve;case 3:return n=e.sent,e.abrupt("return",n[t]);case 5:case"end":return e.stop()}},e,this)})),function(e){return le.apply(this,arguments)});var we=null,ke={name:"Map",components:{ThingInfo:F},computed:c()({},Object(u.c)(["locations","markers"])),methods:{showLocationMarkers:function(e){e&&oe(we,e,this.showThing)},toggleMarkers:function(e){ne[e].enabled=!ne[e].enabled,ne[e].layer&&(ne[e].enabled?re.addLayer(ne[e].layer):re.removeLayer(ne[e].layer))},showThing:function(e){var t=this;return i()(r.a.mark(function n(){var a,s;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=11;break}return n.next=3,_e(e.id);case 3:return a=n.sent,n.next=6,be(e.location_id);case 6:s=n.sent,t.thing=a,t.location=s,n.next=13;break;case 11:t.thing=null,t.location=null;case 13:case"end":return n.stop()}},n,t)}))()},closeThing:function(){this.showThing(null),se(we)}},watch:{markers:function(){this.showLocationMarkers(this.markers)}},data:function(){return{mapRef:this._uid+".leafletExample",thing:null,location:null,markerTypes:null}},mounted:function(){we=K(this.$refs[this.mapRef]),this.markerTypes=ne,this.showLocationMarkers(this.markers),ie(we,"legend","bottomleft"),ie(we,"thing","bottomright")}},Ce={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 mt-1"},[n("div",{ref:e.mapRef,staticClass:"map"},[n("div",{staticClass:"leaflet-bottom leaflet-left"},[n("div",{staticClass:"map-overlay",attrs:{id:"legend"}},[n("h3",{staticClass:"font-weight-bold"},[e._v("Apparaten")]),e._v(" "),n("form",e._l(e.markerTypes,function(t){return n("div",{key:t.name,staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.enabled,expression:"markerType.enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"toggle"+t.name},domProps:{checked:Array.isArray(t.enabled)?e._i(t.enabled,null)>-1:t.enabled},on:{click:function(n){e.toggleMarkers(t.id)},change:function(n){var a=t.enabled,r=n.target,s=!!r.checked;if(Array.isArray(a)){var i=e._i(a,null);r.checked?i<0&&e.$set(t,"enabled",a.concat([null])):i>-1&&e.$set(t,"enabled",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(t,"enabled",s)}}}),e._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:"toggle"+t.name}},[n("img",{attrs:{src:t.iconUrl}}),e._v(" "+e._s(t.name)+"\n                ")])])}))])]),e._v(" "),n("div",{staticClass:"leaflet-bottom leaflet-right"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.thing,expression:"thing"}],staticClass:"map-overlay",attrs:{id:"thing"}},[e.thing?n("div",[n("button",{staticClass:"btn btn-sm close float-right",attrs:{type:"button",title:"Sluit"},on:{click:e.closeThing}},[e._v("×")]),e._v(" "),n("thing-info",{attrs:{thing:e.thing,location:e.location}})],1):e._e()])])])])])])},staticRenderFns:[]};var xe={name:"Home",components:{CityMap:n("VU/8")(ke,Ce,!1,function(e){n("AeKd")},"data-v-59d61142",null).exports}},ye={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("city-map")],1)},staticRenderFns:[]};var qe=n("VU/8")(xe,ye,!1,function(e){n("mzpn")},"data-v-63c3e4aa",null).exports,je={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"font-weight-bold"},[e._v("Bezwaren & Klachten – Gemeente Amsterdam")]),e._v(" "),n("p",[e._v("\n    Heeft u bezwaren of klachten over een object in dit register?\n  ")]),e._v(" "),n("p",[e._v("\n    Er is een standaard procedure bij uw Gemeente beschikbaar om bezwaren en klachten in te dienen, grondslag artikel 6:5 van de Algemene wet bestuursrecht.\n    De kern van deze bezwaarprocedure is dat u bezwaar indient tegen een bestuursbesluit dat genomen is door een van de bestuursorganen van de gemeente.\n    Bestuursorganen zijn: College, Burgemeester, Gemeenteraad. In Amsterdam worden de Bestuurscommissies ook aangemerkt als bestuursorgaan.\n  ")]),e._v(" "),n("p",[e._v("\n    Bezwaar indienen doet u door middel van een brief, meer informatie daarover treft u op "),n("a",{attrs:{href:"link"}},[e._v("LINK")])])])}]};var Ae=n("VU/8")({name:"Complaints"},je,!1,function(e){n("/a6V")},"data-v-dab3cfba",null).exports,Re={name:"InfoRequest",data:function(){return{thing:null,request:{requestAccess:!1,name:"",email:"",title:"",motivation:"",question:"",acceptConditions:!1}}},methods:{handleSubmit:function(){this.$validator.validateAll()}},mounted:function(){var e=this;return i()(r.a.mark(function t(){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$route.params.id,t.next=3,_e(n);case 3:e.thing=t.sent;case 4:case"end":return t.stop()}},t,e)}))()}},Te={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.thing?n("div",[n("h2",{staticClass:"font-weight-bold"},[e._v("Object: "+e._s(e.thing.name))]),e._v(" "),n("h3",{staticClass:"font-weight-bold"},[e._v("Type: "+e._s(e.thing.device_type))]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-9"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("div",{staticClass:"form-group"},[n("label",{class:{invalid:e.errors.has("naam")},attrs:{for:"naam"}},[e._v("Uw naam")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.name,expression:"request.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",id:"naam",name:"naam",placeholder:"Naam"},domProps:{value:e.request.name},on:{input:function(t){t.target.composing||e.$set(e.request,"name",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{class:{invalid:e.errors.has("email")},attrs:{for:"email"}},[e._v("Uw E-mail adres")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.email,expression:"request.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{type:"text",id:"email",name:"email",placeholder:"E-mail adres"},domProps:{value:e.request.email},on:{input:function(t){t.target.composing||e.$set(e.request,"email",t.target.value)}}}),e._v(" "),n("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("Uw gegevens worden niet opgeslagen in dit register.")])]),e._v(" "),n("div",{staticClass:"form-check mb-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.requestAccess,expression:"request.requestAccess"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"toegang"},domProps:{checked:Array.isArray(e.request.requestAccess)?e._i(e.request.requestAccess,null)>-1:e.request.requestAccess},on:{change:function(t){var n=e.request.requestAccess,a=t.target,r=!!a.checked;if(Array.isArray(n)){var s=e._i(n,null);a.checked?s<0&&e.$set(e.request,"requestAccess",n.concat([null])):s>-1&&e.$set(e.request,"requestAccess",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.request,"requestAccess",r)}}}),e._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:"toegang"}},[e._v("Ik wil toegang tot de data uit dit object")])]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"titel"}},[e._v("Titel van uw vraag")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.title,expression:"request.title"}],staticClass:"form-control",attrs:{type:"text",id:"titel",placeholder:"Titel"},domProps:{value:e.request.title},on:{input:function(t){t.target.composing||e.$set(e.request,"title",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"motivatie"}},[e._v("Motivatie")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.motivation,expression:"request.motivation"}],staticClass:"form-control",attrs:{type:"text",id:"motivatie",name:"motivatie",placeholder:"Motivatie"},domProps:{value:e.request.motivation},on:{input:function(t){t.target.composing||e.$set(e.request,"motivation",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{class:{invalid:e.errors.has("vraag")},attrs:{for:"vraag"}},[e._v("Uw vraag")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.request.question,expression:"request.question"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{rows:"10",id:"vraag",name:"vraag",placeholder:"Vraag"},domProps:{value:e.request.question},on:{input:function(t){t.target.composing||e.$set(e.request,"question",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.acceptConditions,expression:"request.acceptConditions"},{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{required: true}"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"voorwaarden",name:"voorwaarden"},domProps:{checked:Array.isArray(e.request.acceptConditions)?e._i(e.request.acceptConditions,null)>-1:e.request.acceptConditions},on:{change:function(t){var n=e.request.acceptConditions,a=t.target,r=!!a.checked;if(Array.isArray(n)){var s=e._i(n,null);a.checked?s<0&&e.$set(e.request,"acceptConditions",n.concat([null])):s>-1&&e.$set(e.request,"acceptConditions",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.request,"acceptConditions",r)}}}),e._v(" "),n("label",{staticClass:"form-check-label",class:{invalid:e.errors.has("voorwaarden")},attrs:{for:"voorwaarden"}},[e._v("\n            Ik accepteer de "),n("a",{attrs:{href:"#"}},[e._v("algemene voorwaarden")])])]),e._v(" "),n("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"submit"}},[e._v("Versturen")])])]),e._v(" "),e._m(0)])]):e._e()},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-3"},[t("p",[this._v("Let op:")]),this._v(" "),t("ul",[t("li",[this._v("Uw vraag wordt doorgestuurd naar de eigenaar door deze website.")]),this._v(" "),t("li",[this._v("Uw gegevens worden niet opgeslagen in dit register.")]),this._v(" "),t("li",[this._v("De eigenaar van het object ontvangt uw mailadres om contact op te nemen met u.")])])])}]};var $e=n("VU/8")(Re,Te,!1,function(e){n("BJy4")},"data-v-a7b41538",null).exports;l.a.use(V.a);var Ee=new V.a({base:"/iot/",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:qe},{path:"/complaints",name:"Complaints",component:Ae},{path:"/inforequest/:id",name:"InfoRequest",component:$e}]});l.a.use(u.a);var Se=new u.a.Store({state:{locations:null,markers:null},actions:{setLocations:function(e,t){e.commit("locations",t)},setMarkers:function(e,t){e.commit("markers",t)}},mutations:{locations:function(e,t){e.locations=t},markers:function(e,t){e.markers=t}},getters:{locations:function(e){return e.locations},markers:function(e){return e.markers}}});l.a.use(v.a,m.a),l.a.use(h.a),l.a.config.productionTip=!1,new l.a({el:"#app",router:Ee,store:Se,components:{App:N},template:"<App/>",computed:c()({},Object(u.c)(["text"])),methods:c()({},Object(u.b)({setLocations:"setLocations",setMarkers:"setMarkers"}),{init:function(){var e=this;return i()(r.a.mark(function t(){var n,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return ve=fe(),pe=ge(),t.next=3,he();case 3:return n=t.sent,e.setMarkers(n),t.next=7,fe();case 7:a=t.sent,e.setLocations(a);case 9:case"end":return t.stop()}},t,e)}))()}})}).init()},"Qp/D":function(e,t){},SLis:function(e,t){},VRXO:function(e,t){},Zug0:function(e,t){},fp0P:function(e,t){},h6Nk:function(e,t,n){e.exports=n.p+"static/img/logo-short.b9187f7.svg"},lQeg:function(e,t){e.exports={_args:[["proj4@^2.4.4","/home/vegter/projects/ams/iot"]],_from:"proj4@>=2.4.4 <3.0.0",_id:"proj4@2.4.4",_inCache:!0,_installable:!0,_location:"/proj4",_nodeVersion:"8.2.1",_npmOperationalInternal:{host:"s3://npm-registry-packages",tmp:"tmp/proj4-2.4.4.tgz_1502418137878_0.6641639927402139"},_npmUser:{email:"andreas.hocevar@gmail.com",name:"ahocevar"},_npmVersion:"5.3.0",_phantomChildren:{},_requested:{name:"proj4",raw:"proj4@^2.4.4",rawSpec:"^2.4.4",scope:null,spec:">=2.4.4 <3.0.0",type:"range"},_requiredBy:["/","/proj4leaflet"],_resolved:"https://registry.npmjs.org/proj4/-/proj4-2.4.4.tgz",_shasum:"c03d825e380f6850a4a7af5d20d365f6b72c4042",_shrinkwrap:null,_spec:"proj4@^2.4.4",_where:"/home/vegter/projects/ams/iot",author:"",bugs:{url:"https://github.com/proj4js/proj4js/issues"},contributors:[{name:"Mike Adair",email:"madair@dmsolutions.ca"},{name:"Richard Greenwood",email:"rich@greenwoodmap.com"},{name:"Calvin Metcalf",email:"calvin.metcalf@gmail.com"},{name:"Richard Marsden",url:"http://www.winwaed.com"},{name:"T. Mittan"},{name:"D. Steinwand"},{name:"S. Nelson"}],dependencies:{mgrs:"1.0.0","wkt-parser":"^1.2.0"},description:"Proj4js is a JavaScript library to transform point coordinates from one coordinate system to another, including datum transformations.",devDependencies:{chai:"~1.8.1",curl:"git://github.com/cujojs/curl.git",grunt:"^1.0.1","grunt-cli":"~0.1.13","grunt-contrib-connect":"~0.6.0","grunt-contrib-jshint":"~1.1.0","grunt-contrib-uglify":"~0.11.1","grunt-mocha-phantomjs":"~0.4.0","grunt-rollup":"^1.0.1",istanbul:"~0.2.4",mocha:"~1.17.1",rollup:"^0.41.4","rollup-plugin-json":"^2.0.1","rollup-plugin-node-resolve":"^2.0.0",tin:"~0.4.0"},directories:{doc:"docs",test:"test"},dist:{integrity:"sha512-yo6qTpBQXnxhcPopKJeVwwOBRzUpEa3vzSFlr38f5mF4Jnfb6NOL/ePIomefWiZmPgkUblHpcwnWVMB8FS3GKw==",shasum:"c03d825e380f6850a4a7af5d20d365f6b72c4042",tarball:"https://registry.npmjs.org/proj4/-/proj4-2.4.4.tgz"},gitHead:"e0fc90bb256d5b296c2ec9af923158d0fee847c5",homepage:"https://github.com/proj4js/proj4js#readme",license:"MIT",main:"dist/proj4-src.js",maintainers:[{name:"cwmma",email:"calvin.metcalf@gmail.com"},{name:"ahocevar",email:"andreas.hocevar@gmail.com"}],module:"lib/index.js",name:"proj4",optionalDependencies:{},readme:"ERROR: No README data found!",repository:{type:"git",url:"git://github.com/proj4js/proj4js.git"},scripts:{build:"grunt","build:tmerc":"grunt build:tmerc",test:"npm run build && istanbul test _mocha test/test.js"},version:"2.4.4"}},lbIx:function(e,t){},"mKa+":function(e,t){},mzpn:function(e,t){},"r/PZ":function(e,t){},xgc0:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.58d5326dbe1b8c2326c8.js.map