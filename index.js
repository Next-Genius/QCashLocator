"use strict";

window.MyApp = {};

$(function() {
    MyApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyApp,        
        defaultLayout: "navbar",
        navigation: [
			{
				title: "List",
				action: "#list",
				icon: "list"
			},
			{
				title: "Near By",
				action: "#map",
				icon: "map"
			},
			{
				title: "Settings",
				action: "#settings",
				icon: "settings"
			}
        ]
    });
    MyApp.app.router.register(":view/:id", { view: "map", id: undefined });
    MyApp.app.navigate();   
});
