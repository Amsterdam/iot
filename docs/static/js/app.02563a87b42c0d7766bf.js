webpackJsonp([1],{"+C/5":function(e,t){},"/a6V":function(e,t){},"7uHI":function(e,t){},BvLc:function(e,t){},EYnv:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),s=n("exGp"),i=n.n(s),o=n("Dd8w"),c=n.n(o),u=(n("EYnv"),n("BvLc"),n("VRXO"),n("K3J8"),n("r/PZ"),n("7+uW")),l=n("NYxO"),d=n("mtWM"),m=n.n(d),p=n("Rf8U"),v=n.n(p),h=n("T1ft"),f=n.n(h),g=n("sUu7"),_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container-fluid mt-2"},[t("header",[t("img",{staticClass:"logo",attrs:{src:n("h6Nk")}}),this._v(" "),t("h2",[t("b",[this._v(this._s(this.title))])])])])},staticRenderFns:[]};var b,w=n("VU/8")({props:["title"]},_,!1,function(e){n("miY5")},"data-v-74e0e2b6",null).exports,k=n("d7EF"),x=n.n(k),y=n("M4fF"),C=n.n(y),q=n("//Fk"),j=n.n(q),T=(b=i()(a.a.mark(function e(t){var n,r,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=void 0,r=0;case 2:return e.prev=2,R.pending++,e.next=6,m.a.get(t);case 6:n=e.sent,e.next=15;break;case 9:return e.prev=9,e.t0=e.catch(2),console.error("Retry...",t),r++,e.next=15,S(100*r);case 15:return e.prev=15,R.pending--,e.finish(15);case 18:if(!n&&r<s){e.next=2;break}case 19:if(!n){e.next=24;break}return R.success++,e.abrupt("return",n);case 24:throw console.error("Request failed",t),R.error++,new Error("Request failed",t);case 27:case"end":return e.stop()}},e,this,[[2,9,15,18]])})),function(e){return b.apply(this,arguments)}),R={pending:0,success:0,error:0};function S(e){return new j.a(function(t,n){setTimeout(t,e)})}var A,M,E=(A=i()(a.a.mark(function e(t){var n,r,s,i,o,c,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t,r=[],s=1,i=1e3,o=t.includes("?")?"&":"?";case 5:if(!n){e.next=21;break}return e.prev=6,c=""+t+o+"page="+s+"&page_size="+i,e.next=10,T(c);case 10:u=e.sent,n=u.data._links.next.href,r=r.concat(u.data.results),s+=1,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),n=null;case 19:e.next=5;break;case 21:return e.abrupt("return",r);case 22:case"end":return e.stop()}},e,this,[[6,16]])})),function(e){return A.apply(this,arguments)}),$=(M=i()(a.a.mark(function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e.data};return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:return n=e.sent,e.abrupt("return",r(n));case 4:case"end":return e.stop()}},e,this)})),function(e){return M.apply(this,arguments)}),U=n("nrd6"),L=n.n(U),N=n("nvAS"),P=(n("+INe"),{rd:{code:"EPSG:28992",projection:"+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +towgs84=565.2369,50.0087,465.658,-0.406857330322398,0.350732676542563,-1.8703473836068,4.0812 +no_defs",transformation:{resolutions:[3440.64,1720.32,860.16,430.08,215.04,107.52,53.76,26.88,13.44,6.72,3.36,1.68,.84,.42,.21,.105,.0525],bounds:[[-285401.92,22598.08],[595301.9199999999,903301.9199999999]],origin:[-285401.92,22598.08]}},wgs84:{code:"EPSG:4326",projection:"+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs"},earthRadius:6378137}),z=P.rd;z.transformation.bounds=L.a.bounds.apply(null,z.transformation.bounds);var V=new L.a.Proj.CRS(z.code,z.projection,z.transformation);V.distance=L.a.CRS.Earth.distance,V.R=P.EARTH_RADIUS;var F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return Number(Math.round(e+"e"+t)+"e-"+t)};function H(e){var t=Object(N.default)(P.rd.projection,P.wgs84.projection,[e[0],e[1]]);return[t[1],t[0]].map(function(e){return F(e)})}var I="https://api.data.amsterdam.nl/",O=function(){var e=i()(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$("https://api.data.amsterdam.nl/typeahead?q="+t);case 2:return n=(n=e.sent).filter(function(e){return["Straatnamen","Gebieden"].includes(e.label)}).map(function(e){return e.content}),e.abrupt("return",C.a.flatten(n).map(function(e){return c()({},e,{searchText:t})}));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=i()(a.a.mark(function e(t){var n,r,s,i,o,c,u,l;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(I+t.uri);case 2:return n=e.sent,r=x()(n.bbox,4),s=r[0],i=r[1],o=r[2],c=r[3],u=H([s,i]),l=H([o,c]),e.abrupt("return",[u,l]);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),D=n("fZjL"),G=n.n(D);n("0J91");function Z(e){var t=L.a.map(e,{crs:V,attributionControl:!1,zoomControl:!0,scrollWheelZoom:!1});return W(t),t.addLayer(L.a.tileLayer("https://t1.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png",{tms:!0,minZoom:7,maxZoom:16,opacity:.8})),t}function W(e){e.setView([52.375,4.9],8)}var X="static/markers/",K={iconSize:[16,16],iconAnchor:[8,15],popupAnchor:[-3,-76]},J={Camera:{id:"Camera",iconUrl:X+"video-2x.png",name:"Camera",enabled:!0},Beacon:{id:"Beacon",iconUrl:X+"signpost-2x.png",name:"Baken",enabled:!0}},Y=void 0,Q=void 0;function ee(e){return J[G()(J).find(function(t){return t===e.device_type})]}function te(e){Y&&e.removeLayer(Y)}function ne(e,t,n){e.fitBounds([t,n])}function re(e,t,n){var r=L.a.Control.extend({options:{position:n},onAdd:function(e){return L.a.DomUtil.get(t)}});e.addControl(new r)}function ae(e,t,n){var r,s=this,o=(r=i()(a.a.mark(function t(n){var r,i,o,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=x()(n.wgs84_geometry.coordinates,2),i=r[0],o=r[1],c=ee(n),L.a.popup({offset:new L.a.Point(0,-20),autoPan:!1}).setContent('<div class="font-weight-bold">'+c.name+"</div>"+n.name).setLatLng([i,o]).openOn(e);case 3:case"end":return t.stop()}},t,s)})),function(e){return r.apply(this,arguments)});return Q=L.a.markerClusterGroup({disableClusteringAtZoom:12,spiderfyOnMaxZoom:!1}),G()(J).forEach(function(r){var a=L.a.featureGroup();t.filter(function(e){return e.device_type===r}).forEach(function(t){return L.a.marker(t.wgs84_geometry.coordinates,{icon:function(e){var t=J[e.device_type].iconUrl;return L.a.icon(c()({},K,{iconUrl:t}))}(t)}).addTo(a).on("click",function(){return r=t,Y&&e.removeLayer(Y),(Y=L.a.circleMarker(r.wgs84_geometry.coordinates)).addTo(e),void n(r);var r}).on("mouseover",function(){return o(t)}).on("mouseout",function(){return e.closePopup()})}),J[r].layer=a,J[r].enabled=!0,Q.addLayer(a)}),e.addLayer(Q),function(e,t){var n=L.a.Control.extend({options:{position:"topleft"},onAdd:function(e){var n=L.a.DomUtil.create("img","leaflet-bar leaflet-control leaflet-control-custom");return n.src=X+"home-3x.png",n.style.backgroundColor="white",n.style.width="33px",n.style.height="33px",n.onclick=function(){te(e),e.closePopup(),t(null),W(e)},n}});e.addControl(new n)}(e,n),Q}var se={name:"GeoSearch",data:function(){return{selected:null,options:[]}},computed:c()({},Object(l.c)(["map"])),watch:{selected:function(e){this.onSelect(e)}},methods:{onSelect:function(){var e=i()(a.a.mark(function e(t){var n,r,s,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return t.searchText=t._display,e.next=4,B(t);case 4:n=e.sent,r=x()(n,2),s=r[0],i=r[1],ne(this.map,s,i),e.next=13;break;case 11:this.options=[],W(this.map);case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),onSearch:function(){var e=i()(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:n=e.sent,this.options=n;case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},ie={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-select",{attrs:{label:"searchText",options:e.options,placeholder:"Zoek"},on:{search:e.onSearch},scopedSlots:e._u([{key:"option",fn:function(t){return[e._v("\n      "+e._s(t._display||"")+"\n    ")]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},staticRenderFns:[]};var oe={components:{GeoSearch:n("VU/8")(se,ie,!1,function(e){n("+C/5")},"data-v-172c6159",null).exports}},ce={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu mt-3"},[n("div",{staticClass:"container-fluid"},[n("div",[n("div",{staticClass:"float-right"},[n("nav",{staticClass:"nav nav-pills justify-content-end"},[n("router-link",{staticClass:"nav-link",class:{active:"Home"===e.$route.name},attrs:{to:"/"}},[n("span",{staticClass:"linklabel"},[e._v("\n            Home\n          ")])]),e._v(" "),n("router-link",{staticClass:"nav-link",class:{active:"Complaints"===e.$route.name},attrs:{to:"/complaints"}},[n("span",{staticClass:"linklabel"},[e._v("\n            Over IoT\n          ")])])],1)]),e._v(" "),n("div",{staticClass:"d-flex justify-content-center"},[n("geo-search",{directives:[{name:"show",rawName:"v-show",value:"Home"===e.$route.name,expression:"$route.name === 'Home'"}],staticClass:"geo-search",attrs:{"aria-disabled":!0}})],1)])]),e._v(" "),n("div",{staticClass:"clearfix"})])},staticRenderFns:[]};var ue=n("VU/8")(oe,ce,!1,function(e){n("yKvq")},"data-v-1f86e83c",null).exports,le={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"container-fluid mt-2"},[this._t("default")],2)},staticRenderFns:[]},de=n("VU/8")(null,le,!1,null,null,null).exports,me={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"container-fluid mt-2 pt-2 pb-1"},[n("div",[n("h2",[e._v("Disclaimer")]),e._v(" "),n("p",[e._v("\n      "+e._s(e.title)+" is gemaakt door "+e._s(e.author)+".\n    ")]),e._v(" "),n("p",[e._v("\n      De inhoud van "+e._s(e.title)+" is met uiterste zorgvuldigheid tot stand gebracht.\n      De inhoud wordt regelmatig gecontroleerd en geactualiseerd.\n    ")]),e._v(" "),n("p",[e._v("\n      "+e._s(e.author)+" kan echter niet aansprakelijk worden gesteld voor de juistheid, volledigheid en actualiteit van de website.\n      "+e._s(e.author)+" kan in het bijzonder niet aansprakelijk worden gesteld voor eventuele schade of consequenties ontstaan door direct of indirect gebruik van de inhoud van de website.\n    ")])])])},staticRenderFns:[]};var pe=n("VU/8")({name:"AMSFooter",props:["title"],data:function(){return{author:"datapunt"}}},me,!1,function(e){n("lbIx")},"data-v-68b3746c",null).exports,ve={name:"LoadingComponent",components:{},props:{simple:{default:!1,type:Boolean}},data:function(){return{HTTPStatus:R,showSpinner:!1}},methods:{shouldShowSpinner:function(e){var t=this;e>0?(clearTimeout(this.spinnerHideTimeout),this.spinnerHideTimeout=null,this.spinnerShowTimeout||(this.spinnerShowTimeout=setTimeout(function(){t.showSpinner=!0},750))):(clearTimeout(this.spinnerShowTimeout),this.spinnerShowTimeout=null,this.spinnerHideTimeout=setTimeout(function(){t.showSpinner=!1},300))}},watch:{"HTTPStatus.pending":function(e){this.shouldShowSpinner(e)}}},he={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"fade"}},[!e.simple&&e.showSpinner?n("div",{staticClass:"page-overlay"},[n("div",{staticClass:"progress-wrapper"},[n("div",{staticClass:"loader"}),e._v(" "),n("div",{staticClass:"progress-txt"},[e._v("Laden...")])])]):e._e(),e._v(" "),e.simple?n("div",{staticClass:"progress-indicator progress-red"}):e._e()])],1)},staticRenderFns:[]};var fe={name:"App",components:{"ams-header":w,"ams-menu":ue,"ams-content":de,"ams-footer":pe,"loading-component":n("VU/8")(ve,he,!1,function(e){n("Xrfb")},"data-v-1ce49bb7",null).exports},data:function(){return{title:"Register IoT"}}},ge={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ams-header",{attrs:{title:e.title}},[e._v("Header")]),e._v(" "),n("ams-menu",[e._v("Menu")]),e._v(" "),n("ams-content",[n("router-view")],1),e._v(" "),n("ams-footer",{attrs:{title:e.title}},[e._v("Footer")]),e._v(" "),n("loading-component")],1)},staticRenderFns:[]};var _e=n("VU/8")(fe,ge,!1,function(e){n("x5T1")},null,null).exports,be=n("/ocq"),we={name:"Thing",components:{},data:function(){return{}},computed:{},methods:{getMarkerType:ee,contactOwner:function(){this.$router.push({name:"InfoRequest",params:{id:this.thing.id}})}},props:["thing","location"]},ke={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",{staticClass:"font-weight-bold"},[e._v("\n    Details\n  ")]),e._v(" "),n("table",{staticClass:"table table-sm table-hover"},[e._m(0),e._v(" "),n("tbody",[n("tr",[n("th",{attrs:{scope:"row"}},[e._v("Type")]),e._v(" "),n("td",[e._v("\n        "+e._s(e.getMarkerType(e.thing).name)+"\n        "),n("img",{attrs:{src:e.getMarkerType(e.thing).iconUrl}})])]),e._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[e._v("Naam")]),e._v(" "),n("td",[e._v(e._s(e.thing.name))])]),e._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[e._v("Beschrijving")]),e._v(" "),n("td",[e._v(e._s(e.thing.description))])]),e._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[e._v("Doel")]),e._v(" "),n("td",[e._v(e._s(e.thing.purpose))])]),e._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[e._v("Referentie")]),e._v(" "),n("td",[e._v(e._s(e.thing.ref))])])]),e._v(" "),e._m(1),e._v(" "),n("tbody",[n("tr",[n("th",{attrs:{scope:"row"}},[e._v("Plaats")]),e._v(" "),n("td",[e._v(e._s(e.location.name))])]),e._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[e._v("Referentie")]),e._v(" "),n("td",[e._v(e._s(e.location.ref))])])])]),e._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",on:{click:function(t){e.contactOwner()}}},[e._v("Contact eigenaar")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",{attrs:{scope:"col",colspan:"2"}},[this._v("Apparaat:")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",{attrs:{scope:"col",colspan:"2"}},[this._v("Plaats:")])])])}]};var xe,ye,Ce=n("VU/8")(we,ke,!1,function(e){n("j4jL")},"data-v-5e6e92d9",null).exports,qe=n("bOdI"),je=n.n(qe),Te="https://api.data.amsterdam.nl",Re=null,Se=null,Ae=function(){var e=i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E(Te+"/vsd/iot_markers/"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),Me=function(){var e=i()(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(Te+"/vsd/iot_locations/");case 2:return t=e.sent,n=t.reduce(function(e,t){return c()({},e,je()({},t.id,t))},{}),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=i()(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(Te+"/vsd/iot_things/");case 2:return t=e.sent,n=t.reduce(function(e,t){return c()({},e,je()({},t.id,t))},{}),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),$e=(xe=i()(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Re||(Re=Ee()),e.next=3,Re;case 3:return n=e.sent,e.abrupt("return",n[t]);case 5:case"end":return e.stop()}},e,this)})),function(e){return xe.apply(this,arguments)}),Ue=(ye=i()(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Se||(Se=Me()),e.next=3,Se;case 3:return n=e.sent,e.abrupt("return",n[t]);case 5:case"end":return e.stop()}},e,this)})),function(e){return ye.apply(this,arguments)});var Le={name:"Map",components:{ThingInfo:Ce},computed:c()({},Object(l.c)(["locations","markers"])),methods:c()({},Object(l.b)({setMap:"setMap"}),{showLocationMarkers:function(e){e&&ae(this.map,e,this.showThing)},toggleMarkers:function(e){J[e].enabled=!J[e].enabled,J[e].layer&&(J[e].enabled?Q.addLayer(J[e].layer):Q.removeLayer(J[e].layer))},showThing:function(e){var t=this;return i()(a.a.mark(function n(){var r,s;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=11;break}return n.next=3,$e(e.id);case 3:return r=n.sent,n.next=6,Ue(e.location_id);case 6:s=n.sent,t.thing=r,t.location=s,n.next=13;break;case 11:t.thing=null,t.location=null;case 13:case"end":return n.stop()}},n,t)}))()},closeThing:function(){this.showThing(null),te(this.map)}}),watch:{markers:function(){this.showLocationMarkers(this.markers)}},data:function(){return{map:null,mapRef:this._uid+".leafletExample",height:window.innerHeight-120,thing:null,location:null,markerTypes:null}},mounted:function(){var e=this;window.addEventListener("resize",function(){e.height=window.innerHeight-120}),this.map=Z(this.$refs[this.mapRef]),this.setMap(this.map),this.markerTypes=J,this.showLocationMarkers(this.markers),re(this.map,"legend","bottomleft"),re(this.map,"thing","bottomright")}},Ne={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 mt-1"},[n("div",{ref:e.mapRef,staticClass:"map",style:{height:e.height+"px"}},[n("div",{staticClass:"leaflet-bottom leaflet-left"},[n("div",{staticClass:"map-overlay",attrs:{id:"legend"}},[n("h3",{staticClass:"font-weight-bold"},[e._v("Apparaten")]),e._v(" "),e._l(e.markerTypes,function(t){return n("div",{key:t.name,staticClass:"mb-1",on:{click:function(n){e.toggleMarkers(t.id)}}},[n("button",{staticClass:"btn btn-sm btn-light"},[n("img",{class:{"marker-off":!t.enabled},attrs:{src:t.iconUrl}})]),e._v("\n              "+e._s(t.name)+"\n            ")])})],2)]),e._v(" "),n("div",{staticClass:"leaflet-bottom leaflet-right"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.thing,expression:"thing"}],staticClass:"map-overlay",attrs:{id:"thing"}},[e.thing?n("div",[n("button",{staticClass:"btn btn-sm close float-right",attrs:{type:"button",title:"Sluit"},on:{click:e.closeThing}},[e._v("×")]),e._v(" "),n("thing-info",{attrs:{thing:e.thing,location:e.location}})],1):e._e()])])])])])])},staticRenderFns:[]};var Pe={name:"Home",components:{CityMap:n("VU/8")(Le,Ne,!1,function(e){n("7uHI")},"data-v-d6fa9ca0",null).exports}},ze={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("city-map")],1)},staticRenderFns:[]};var Ve=n("VU/8")(Pe,ze,!1,function(e){n("mzpn")},"data-v-63c3e4aa",null).exports,Fe={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"font-weight-bold"},[e._v("Bezwaren & Klachten – Gemeente Amsterdam")]),e._v(" "),n("p",[e._v("\n    Heeft u bezwaren of klachten over een object in dit register?\n  ")]),e._v(" "),n("p",[e._v("\n    Er is een standaard procedure bij uw Gemeente beschikbaar om bezwaren en klachten in te dienen, grondslag artikel 6:5 van de Algemene wet bestuursrecht.\n    De kern van deze bezwaarprocedure is dat u bezwaar indient tegen een bestuursbesluit dat genomen is door een van de bestuursorganen van de gemeente.\n    Bestuursorganen zijn: College, Burgemeester, Gemeenteraad. In Amsterdam worden de Bestuurscommissies ook aangemerkt als bestuursorgaan.\n  ")]),e._v(" "),n("p",[e._v("\n    Bezwaar indienen doet u door middel van een brief, meer informatie daarover treft u op "),n("a",{attrs:{href:"link"}},[e._v("LINK")])])])}]};var He=n("VU/8")({name:"Complaints"},Fe,!1,function(e){n("/a6V")},"data-v-dab3cfba",null).exports,Ie={name:"InfoRequestForm",props:["thing"],data:function(){return{request:{requestAccess:!1,name:"",email:"",title:"",motivation:"",question:"",acceptConditions:!1},submitted:!1}},methods:{getMarkerType:ee,handleSubmit:function(){var e=this;return i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validator.validateAll();case 2:t.sent&&(e.submitted=!0);case 4:case"end":return t.stop()}},t,e)}))()}}},Oe={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.thing?n("div",[n("h2",{staticClass:"font-weight-bold"},[e._v("Object: "+e._s(e.thing.name))]),e._v(" "),n("h3",{staticClass:"font-weight-bold"},[e._v("Type:\n    "+e._s(e.getMarkerType(e.thing).name)+"\n    "),n("img",{attrs:{src:e.getMarkerType(e.thing).iconUrl}})]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-9"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("div",{staticClass:"form-group"},[n("label",{class:{invalid:e.errors.has("naam")},attrs:{for:"naam"}},[e._v("Uw naam")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.name,expression:"request.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",id:"naam",name:"naam",placeholder:"Naam"},domProps:{value:e.request.name},on:{input:function(t){t.target.composing||e.$set(e.request,"name",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{class:{invalid:e.errors.has("email")},attrs:{for:"email"}},[e._v("Uw E-mail adres")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.email,expression:"request.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{type:"text",id:"email",name:"email",placeholder:"E-mail adres"},domProps:{value:e.request.email},on:{input:function(t){t.target.composing||e.$set(e.request,"email",t.target.value)}}}),e._v(" "),n("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("Uw gegevens worden niet opgeslagen in dit register.")])]),e._v(" "),n("div",{staticClass:"form-check mb-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.requestAccess,expression:"request.requestAccess"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"toegang"},domProps:{checked:Array.isArray(e.request.requestAccess)?e._i(e.request.requestAccess,null)>-1:e.request.requestAccess},on:{change:function(t){var n=e.request.requestAccess,r=t.target,a=!!r.checked;if(Array.isArray(n)){var s=e._i(n,null);r.checked?s<0&&e.$set(e.request,"requestAccess",n.concat([null])):s>-1&&e.$set(e.request,"requestAccess",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.request,"requestAccess",a)}}}),e._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:"toegang"}},[e._v("Ik wil toegang tot de data uit dit object")])]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"titel"}},[e._v("Titel van uw vraag")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.title,expression:"request.title"}],staticClass:"form-control",attrs:{type:"text",id:"titel",placeholder:"Titel"},domProps:{value:e.request.title},on:{input:function(t){t.target.composing||e.$set(e.request,"title",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"motivatie"}},[e._v("Motivatie")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.motivation,expression:"request.motivation"}],staticClass:"form-control",attrs:{type:"text",id:"motivatie",name:"motivatie",placeholder:"Motivatie"},domProps:{value:e.request.motivation},on:{input:function(t){t.target.composing||e.$set(e.request,"motivation",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{class:{invalid:e.errors.has("vraag")},attrs:{for:"vraag"}},[e._v("Uw vraag")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.request.question,expression:"request.question"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{rows:"10",id:"vraag",name:"vraag",placeholder:"Vraag"},domProps:{value:e.request.question},on:{input:function(t){t.target.composing||e.$set(e.request,"question",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.acceptConditions,expression:"request.acceptConditions"},{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{required: true}"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"voorwaarden",name:"voorwaarden"},domProps:{checked:Array.isArray(e.request.acceptConditions)?e._i(e.request.acceptConditions,null)>-1:e.request.acceptConditions},on:{change:function(t){var n=e.request.acceptConditions,r=t.target,a=!!r.checked;if(Array.isArray(n)){var s=e._i(n,null);r.checked?s<0&&e.$set(e.request,"acceptConditions",n.concat([null])):s>-1&&e.$set(e.request,"acceptConditions",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.request,"acceptConditions",a)}}}),e._v(" "),n("label",{staticClass:"form-check-label",class:{invalid:e.errors.has("voorwaarden")},attrs:{for:"voorwaarden"}},[e._v("\n            Ik accepteer de "),n("a",{class:{invalid:e.errors.has("voorwaarden")},attrs:{href:"#"}},[e._v("algemene voorwaarden")])])]),e._v(" "),n("p",[n("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"submit",disabled:e.submitted}},[e._v("Versturen")])]),e._v(" "),n("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[n("strong",[e._v("Waarschuwing!")]),e._v("\n          Deze functie is nog niet actief.\n          "),e.submitted?n("div",[n("strong",[e._v("Uw bericht is niet verstuurd!")])]):e._e()])])]),e._v(" "),e._m(0)])]):e._e()},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-3"},[t("p",[this._v("Let op:")]),this._v(" "),t("ul",[t("li",[this._v("Uw vraag wordt doorgestuurd naar de eigenaar door deze website.")]),this._v(" "),t("li",[this._v("Uw gegevens worden niet opgeslagen in dit register.")]),this._v(" "),t("li",[this._v("De eigenaar van het object ontvangt uw mailadres om contact op te nemen met u.")])])])}]};var Be={name:"InfoRequest",components:{InfoRequestForm:n("VU/8")(Ie,Oe,!1,function(e){n("bjpX")},"data-v-13753f4e",null).exports},data:function(){return{thing:null}},mounted:function(){var e=this;return i()(a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$route.params.id,t.next=3,$e(n);case 3:e.thing=t.sent;case 4:case"end":return t.stop()}},t,e)}))()}},De={render:function(){var e=this.$createElement,t=this._self._c||e;return this.thing?t("div",[t("info-request-form",{attrs:{thing:this.thing}})],1):this._e()},staticRenderFns:[]};var Ge=n("VU/8")(Be,De,!1,function(e){n("Qmuq")},"data-v-061b5220",null).exports;u.a.use(be.a);var Ze=new be.a({base:"/iot/",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:Ve},{path:"/complaints",name:"Complaints",component:He},{path:"/inforequest/:id",name:"InfoRequest",component:Ge}]});u.a.use(l.a);var We=new l.a.Store({state:{map:null,locations:null,markers:null},actions:{setMap:function(e,t){e.commit("map",t)},setLocations:function(e,t){e.commit("locations",t)},setMarkers:function(e,t){e.commit("markers",t)}},mutations:{map:function(e,t){e.map=t},locations:function(e,t){e.locations=t},markers:function(e,t){e.markers=t}},getters:{map:function(e){return e.map},locations:function(e){return e.locations},markers:function(e){return e.markers}}});u.a.use(v.a,m.a),u.a.use(g.a),u.a.config.productionTip=!1,u.a.component("v-select",f.a),new u.a({el:"#app",router:Ze,store:We,components:{App:_e},template:"<App/>",computed:c()({},Object(l.c)(["text"])),methods:c()({},Object(l.b)({setLocations:"setLocations",setMarkers:"setMarkers"}),{init:function(){var e=this;return i()(a.a.mark(function t(){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Se=Me(),Re=Ee(),t.next=3,Ae();case 3:return n=t.sent,e.setMarkers(n),t.next=7,Me();case 7:r=t.sent,e.setLocations(r);case 9:case"end":return t.stop()}},t,e)}))()}})}).init()},Qmuq:function(e,t){},VRXO:function(e,t){},Xrfb:function(e,t){},bjpX:function(e,t){},h6Nk:function(e,t,n){e.exports=n.p+"static/img/logo-short.b9187f7.svg"},j4jL:function(e,t){},lQeg:function(e,t){e.exports={_args:[["proj4@^2.4.4","/home/vegter/projects/ams/iot"]],_from:"proj4@>=2.4.4 <3.0.0",_id:"proj4@2.4.4",_inCache:!0,_installable:!0,_location:"/proj4",_nodeVersion:"8.2.1",_npmOperationalInternal:{host:"s3://npm-registry-packages",tmp:"tmp/proj4-2.4.4.tgz_1502418137878_0.6641639927402139"},_npmUser:{email:"andreas.hocevar@gmail.com",name:"ahocevar"},_npmVersion:"5.3.0",_phantomChildren:{},_requested:{name:"proj4",raw:"proj4@^2.4.4",rawSpec:"^2.4.4",scope:null,spec:">=2.4.4 <3.0.0",type:"range"},_requiredBy:["/","/proj4leaflet"],_resolved:"https://registry.npmjs.org/proj4/-/proj4-2.4.4.tgz",_shasum:"c03d825e380f6850a4a7af5d20d365f6b72c4042",_shrinkwrap:null,_spec:"proj4@^2.4.4",_where:"/home/vegter/projects/ams/iot",author:"",bugs:{url:"https://github.com/proj4js/proj4js/issues"},contributors:[{name:"Mike Adair",email:"madair@dmsolutions.ca"},{name:"Richard Greenwood",email:"rich@greenwoodmap.com"},{name:"Calvin Metcalf",email:"calvin.metcalf@gmail.com"},{name:"Richard Marsden",url:"http://www.winwaed.com"},{name:"T. Mittan"},{name:"D. Steinwand"},{name:"S. Nelson"}],dependencies:{mgrs:"1.0.0","wkt-parser":"^1.2.0"},description:"Proj4js is a JavaScript library to transform point coordinates from one coordinate system to another, including datum transformations.",devDependencies:{chai:"~1.8.1",curl:"git://github.com/cujojs/curl.git",grunt:"^1.0.1","grunt-cli":"~0.1.13","grunt-contrib-connect":"~0.6.0","grunt-contrib-jshint":"~1.1.0","grunt-contrib-uglify":"~0.11.1","grunt-mocha-phantomjs":"~0.4.0","grunt-rollup":"^1.0.1",istanbul:"~0.2.4",mocha:"~1.17.1",rollup:"^0.41.4","rollup-plugin-json":"^2.0.1","rollup-plugin-node-resolve":"^2.0.0",tin:"~0.4.0"},directories:{doc:"docs",test:"test"},dist:{integrity:"sha512-yo6qTpBQXnxhcPopKJeVwwOBRzUpEa3vzSFlr38f5mF4Jnfb6NOL/ePIomefWiZmPgkUblHpcwnWVMB8FS3GKw==",shasum:"c03d825e380f6850a4a7af5d20d365f6b72c4042",tarball:"https://registry.npmjs.org/proj4/-/proj4-2.4.4.tgz"},gitHead:"e0fc90bb256d5b296c2ec9af923158d0fee847c5",homepage:"https://github.com/proj4js/proj4js#readme",license:"MIT",main:"dist/proj4-src.js",maintainers:[{name:"cwmma",email:"calvin.metcalf@gmail.com"},{name:"ahocevar",email:"andreas.hocevar@gmail.com"}],module:"lib/index.js",name:"proj4",optionalDependencies:{},readme:"ERROR: No README data found!",repository:{type:"git",url:"git://github.com/proj4js/proj4js.git"},scripts:{build:"grunt","build:tmerc":"grunt build:tmerc",test:"npm run build && istanbul test _mocha test/test.js"},version:"2.4.4"}},lbIx:function(e,t){},miY5:function(e,t){},mzpn:function(e,t){},"r/PZ":function(e,t){},x5T1:function(e,t){},yKvq:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.02563a87b42c0d7766bf.js.map