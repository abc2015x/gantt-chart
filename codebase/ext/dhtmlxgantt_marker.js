/*
@license

dhtmlxGantt v.4.2.1 Professional Evaluation
This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Gantt.plugin(function(t){t._markers||(t._markers={}),t.config.show_markers=!0,t.attachEvent("onClear",function(){t._markers={}}),t.attachEvent("onGanttReady",function(){function e(e){if(!t.config.show_markers)return!1;if(!e.start_date)return!1;var i=t.getState();if(!(+e.start_date>+i.max_date||+e.end_date&&+e.end_date<+i.min_date||+e.start_date<+i.min_date)){var n=document.createElement("div");n.setAttribute("marker_id",e.id);var a="gantt_marker";t.templates.marker_class&&(a+=" "+t.templates.marker_class(e)),
e.css&&(a+=" "+e.css),e.title&&(n.title=e.title),n.className=a;var r=t.posFromDate(e.start_date);if(n.style.left=r+"px",n.style.height=Math.max(t._y_from_ind(t._order.length),0)+"px",e.end_date){var s=t.posFromDate(e.end_date);n.style.width=Math.max(s-r,0)+"px"}return e.text&&(n.innerHTML="<div class='gantt_marker_content' >"+e.text+"</div>"),n}}var i=document.createElement("div");i.className="gantt_marker_area",t.$task_data.appendChild(i),t.$marker_area=i,t._markerRenderer=t._task_renderer("markers",e,t.$marker_area,null);
}),t.attachEvent("onDataRender",function(){t.renderMarkers()}),t.getMarker=function(t){return this._markers?this._markers[t]:null},t.addMarker=function(e){return e.id=e.id||t.uid(),this._markers[e.id]=e,e.id},t.deleteMarker=function(t){return this._markers&&this._markers[t]?(delete this._markers[t],!0):!1},t.updateMarker=function(t){this._markerRenderer&&this._markerRenderer.render_item(this.getMarker(t))},t._getMarkers=function(){var t=[];for(var e in this._markers)t.push(this._markers[e]);return t;
},t.renderMarkers=function(){if(!this._markers)return!1;if(!this._markerRenderer)return!1;var t=this._getMarkers();return this._markerRenderer.render_items(t),!0}});
//# sourceMappingURL=../sources/ext/dhtmlxgantt_marker.js.map