sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("customer.com.ui5app.controller.View1", {

        onSearch: function (oEvent) {
            const sValue = oEvent.getParameter("newValue");
            const oTable = this.byId("customerTable");
            const oBinding = oTable.getBinding("items");

            if (sValue) {
                const aFilters = [
                    new Filter("FirstName", FilterOperator.Contains, sValue),
                    new Filter("LastName", FilterOperator.Contains, sValue)
                ];

                const oFilter = new Filter({
                    filters: aFilters,
                    and: false
                });

                oBinding.filter(oFilter);
            } else {
                oBinding.filter([]);
            }
        },

       onItemPress: function (oEvent) {

           // Correct way to get pressed row
          var oItem = oEvent.getParameter("listItem");

          var oContext = oItem.getBindingContext();

          var sId = oContext.getProperty("id");

          this.getOwnerComponent().getRouter().navTo("RouteView2", {
            id: sId
          });

        },

        onRefresh: function () {

        var oModel = this.getOwnerComponent().getModel();
        var oTable = this.byId("customerTable");
        var oSearchField = this.byId("SearchField");

        // Reload data
        oModel.loadData("model/data.json", null, true);

        // Clear filters
        oTable.getBinding("items").filter([]);

        // Clear search input
        oSearchField.setValue("");

        }

    });
});