sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("customer.com.ui5app.controller.View2", {

        onInit: function () {
            this.getOwnerComponent().getRouter()
                .getRoute("RouteView2")
                .attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            const sId = oEvent.getParameter("arguments").id;
            const sPath = "/Customers/" + (parseInt(sId) - 1);
            this.getView().bindElement(sPath);
        },

        onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView1");
        }

    });
});