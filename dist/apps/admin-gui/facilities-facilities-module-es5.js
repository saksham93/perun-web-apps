function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facilities-facilities-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/components/facility-select-table/facility-select-table.component.html":
  /*!***********************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/components/facility-select-table/facility-select-table.component.html ***!
    \***********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesComponentsFacilitySelectTableFacilitySelectTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mt-3\" [class.hide-table]=\"exporting\" [hidden]=\"dataSource.filteredData.length === 0\">\n  <div class=\"card-body\">\n    <app-table-options [exporter]=\"exporter\" (start)=\"exporting = true\" (end)=\"exporting = false\"></app-table-options>\n\n    <table mat-table matTableExporter [dataSource]=\"dataSource\" #exporter=\"matTableExporter\" matSort matSortDirection=\"asc\" matSortDisableClear\n           class=\"w-100\">\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef\n            mat-sort-header>{{'FACILITY_MANAGEMENT.TABLE.ID' | translate}}</th>\n        <td class=\"static-column-size\" mat-cell *matCellDef=\"let facility\">{{facility.id}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"recent\">\n        <th mat-header-cell *matHeaderCellDef>\n        </th>\n        <td mat-cell *matCellDef=\"let facility\">\n          <mat-icon\n            class=\"align-bottom\"\n            *ngIf=\"recentIds.indexOf(facility.id) > -1\"\n            matTooltip=\"{{'VO_MANAGEMENT.TABLE.RECENT' | translate}}\">\n            visibility\n          </mat-icon>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef\n            mat-sort-header>{{'FACILITY_MANAGEMENT.TABLE.NAME' | translate}}</th>\n        <td mat-cell *matCellDef=\"let facility\">{{facility.name}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef>{{'FACILITY_MANAGEMENT.TABLE.DESCRIPTION' | translate}}</th>\n        <td mat-cell *matCellDef=\"let facility\">{{facility.description}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"technicalOwners\">\n        <th mat-header-cell *matHeaderCellDef>{{'FACILITY_MANAGEMENT.TABLE.TECHNICAL_OWNERS' | translate}}</th>\n        <td mat-cell *matCellDef=\"let facility\">{{facility.facilityOwners | technicalOwners}}</td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr\n        mat-row\n        *matRowDef=\"let facility; columns: displayedColumns;\"\n        [routerLink]=\"['/facilities', facility.id]\"\n        class=\"dark-hover-list-item\">\n      </tr>\n    </table>\n    <mat-paginator [length]=\"this.facilities.length\" [pageSize]=\"10\" [pageSizeOptions]=\"[5,10,25]\"></mat-paginator>\n  </div>\n</div>\n\n<mat-spinner *ngIf=\"exporting\" class=\"ml-auto mr-auto\"></mat-spinner>\n\n<app-alert *ngIf=\"dataSource.filteredData.length === 0\" color=\"warn\">\n  {{'SHARED.COMPONENTS.NO_FILTER_RESULTS_ALERT' | translate}}\n</app-alert>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesPagesFacilityDetailPageFacilityDetailPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid pl-xl-5 pr-xl-5 facility-theme\" *ngIf=\"facility !== undefined\">\n  <app-back-button>\n  </app-back-button>\n  <h1 class=\"page-title\">\n    {{'FACILITY_DETAIL.TITLE' | translate}}\n    <a class=\"facility-link\" [routerLink]=\"['/facilities', facility.id]\">\n      {{facility.name}}\n    </a>\n    <span class=\"text-muted\">\n      &nbsp;#{{facility.id}}\n    </span>\n  </h1>\n  <app-animated-router-outlet></app-animated-router-outlet>\n</div>\n\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.html":
  /*!*******************************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.html ***!
    \*******************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesPagesFacilityDetailPageFacilityOverviewFacilityOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <app-menu-buttons-field [items]=\"navItems\" [size]=\"'small'\"></app-menu-buttons-field>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.html":
  /*!***********************************************************************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.html ***!
    \***********************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsAttributesFacilitySettingsAttributesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <h1 class=\"page-subtitle\">{{'FACILITY_DETAIL.SETTINGS.ATTRIBUTES.TITLE' | translate}}</h1>\n  <app-refresh-button (refresh)=\"refreshTable()\"></app-refresh-button>\n  <button mat-flat-button class=\"mr-2\" color=\"accent\" (click)=\"onCreate()\">\n    {{'FACILITY_DETAIL.SETTINGS.ATTRIBUTES.CREATE' | translate}}\n  </button>\n\n  <button mat-flat-button class=\"mr-2\" color=\"accent\" (click)=\"onSave()\" [disabled]=\"selection.selected.length === 0\">\n    {{'FACILITY_DETAIL.SETTINGS.ATTRIBUTES.SAVE' | translate}}\n  </button>\n\n  <button mat-flat-button color=\"warn\" (click)=\"onDelete()\" [disabled]=\"selection.selected.length === 0\">\n    {{'FACILITY_DETAIL.SETTINGS.ATTRIBUTES.DELETE' | translate}}\n  </button>\n  <app-immediate-filter [placeholder]=\"'SHARED.COMPONENTS.ATTRIBUTES_LIST.FILTER'\" (filter)=\"applyFilter($event)\"></app-immediate-filter>\n  <mat-spinner class=\"ml-auto mr-auto\" *ngIf=\"loading\"></mat-spinner>\n  <app-attributes-list\n    #list\n    *ngIf=\"!loading\"\n    [filterValue]=\"filterValue\"\n    [attributes]=\"attributes\"\n    [selection]=\"selection\">\n  </app-attributes-list>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.html":
  /*!*******************************************************************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.html ***!
    \*******************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsOverviewFacilitySettingsOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <app-menu-buttons-field [items]=\"items\" [size]=\"'small'\"></app-menu-buttons-field>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.html":
  /*!*******************************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.html ***!
    \*******************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-animated-router-outlet></app-animated-router-outlet>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-select-page/facility-select-page.component.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-select-page/facility-select-page.component.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesPagesFacilitySelectPageFacilitySelectPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid pl-xl-5 pr-xl-5 facility-theme\">\n  <app-back-button>\n  </app-back-button>\n\n  <h1 class=\"page-title\">{{'FACILITY_MANAGEMENT.TITLE' | translate}}</h1>\n  <app-refresh-button (refresh)=\"refreshTable()\" *ngIf=\"!loading\"></app-refresh-button>\n  <app-immediate-filter [placeholder]=\"'FACILITY_MANAGEMENT.FILTER_PLACEHOLDER'\" (filter)=\"applyFilter($event)\" *ngIf=\"!loading\"></app-immediate-filter>\n  <mat-spinner class=\"ml-auto mr-auto\" *ngIf=\"loading\"></mat-spinner>\n  <app-facility-select-table\n    *ngIf=\"!loading\"\n    [filterValue]=\"filterValue\"\n    [facilities]=\"facilities\"\n    [recentIds]=\"recentIds\">\n  </app-facility-select-table>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesPagesResourceDetailPageResourceDetailPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid pl-xl-5 pr-xl-5 resource-theme\" *ngIf=\"resource !== undefined\">\n  <app-back-button>\n  </app-back-button>\n  <h1 class=\"page-title\">\n    {{'RESOURCE_DETAIL.TITLE' | translate}}\n    <a class=\"resource-link\" [routerLink]=\"['/facilities', resource.facilityId, 'resources', resource.id]\">\n      {{resource.name}}\n    </a>\n    <span class=\"text-muted\">\n      &nbsp;#{{resource.id}}\n    </span>\n  </h1>\n  <app-animated-router-outlet></app-animated-router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.html":
  /*!***************************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.html ***!
    \***************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesPagesResourceDetailPageResourceGroupsResourceGroupsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"page-subtitle\">{{'RESOURCE_DETAIL.ASSIGNED_GROUPS.TITLE' | translate}}</h1>\n<app-refresh-button (refresh)=\"loadAllGroups()\"></app-refresh-button>\n<button mat-flat-button color=\"accent\" (click)=\"addGroup()\">\n  {{'RESOURCE_DETAIL.ASSIGNED_GROUPS.ADD_GROUP' | translate}}\n</button>\n<button mat-flat-button color=\"warn\" class=\"ml-2\" [disabled]=\"selected.selected.length === 0\" (click)=\"removeGroups()\">\n  {{'RESOURCE_DETAIL.ASSIGNED_GROUPS.REMOVE_GROUP' | translate}}\n</button>\n<app-debounce-filter\n  [placeholder]=\"'RESOURCE_DETAIL.ASSIGNED_GROUPS.FILTER_GROUPS'\"\n  (filter)=\"applyFilter($event)\">\n</app-debounce-filter>\n<mat-spinner class=\"ml-auto mr-auto\" *ngIf=\"loading\"></mat-spinner>\n<div class=\"mt-3\" *ngIf=\"!loading && assignedGroups.length !== 0\">\n  <app-groups-list\n    [groups]=\"filteredGroups\"\n    [selection]=\"selected\"\n    [disableMembers]=\"false\"\n    [inDialog]=\"false\"\n    [hideColumns]=\"['vo', 'menu']\">\n  </app-groups-list>\n</div>\n<app-alert *ngIf=\"assignedGroups.length === 0 && !loading\" color=\"warn\">\n  {{'RESOURCE_DETAIL.ASSIGNED_GROUPS.NO_GROUPS' | translate}}\n</app-alert>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.html":
  /*!*******************************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.html ***!
    \*******************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesPagesResourceDetailPageResourceOverviewResourceOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <app-menu-buttons-field [items]=\"navItems\" [size]=\"'small'\"></app-menu-buttons-field>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.html":
  /*!***********************************************************************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.html ***!
    \***********************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsAttributesResourceSettingsAttributesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <h1 class=\"page-subtitle\">{{'RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.TITLE' | translate}}</h1>\n  <app-refresh-button (refresh)=\"refreshTable()\"></app-refresh-button>\n  <button mat-flat-button class=\"mr-2\" color=\"accent\" (click)=\"onCreate()\">\n    {{'RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.CREATE' | translate}}\n  </button>\n\n  <button mat-flat-button class=\"mr-2\" color=\"accent\" (click)=\"onSave()\" [disabled]=\"selection.selected.length === 0\">\n    {{'RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SAVE' | translate}}\n  </button>\n\n  <button mat-flat-button color=\"warn\" (click)=\"onDelete()\" [disabled]=\"selection.selected.length === 0\">\n    {{'RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.DELETE' | translate}}\n  </button>\n  <app-immediate-filter [placeholder]=\"'SHARED.COMPONENTS.ATTRIBUTES_LIST.FILTER'\" (filter)=\"applyFilter($event)\"></app-immediate-filter>\n  <mat-spinner class=\"ml-auto mr-auto\" *ngIf=\"loading\"></mat-spinner>\n  <app-attributes-list\n    #list\n    *ngIf=\"!loading\"\n    [filterValue]=\"filterValue\"\n    [attributes]=\"attributes\"\n    [selection]=\"selection\">\n  </app-attributes-list>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.html":
  /*!*******************************************************************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.html ***!
    \*******************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsOverviewResourceSettingsOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <app-menu-buttons-field [items]=\"items\" [size]=\"'small'\"></app-menu-buttons-field>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.html":
  /*!*******************************************************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.html ***!
    \*******************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-animated-router-outlet></app-animated-router-outlet>\n";
    /***/
  },

  /***/
  "./src/app/facilities/components/facility-select-table/facility-select-table.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/facilities/components/facility-select-table/facility-select-table.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesComponentsFacilitySelectTableFacilitySelectTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvY29tcG9uZW50cy9mYWNpbGl0eS1zZWxlY3QtdGFibGUvZmFjaWxpdHktc2VsZWN0LXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/facilities/components/facility-select-table/facility-select-table.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/facilities/components/facility-select-table/facility-select-table.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: FacilitySelectTableComponent */

  /***/
  function srcAppFacilitiesComponentsFacilitySelectTableFacilitySelectTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySelectTableComponent", function () {
      return FacilitySelectTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");

    var FacilitySelectTableComponent =
    /*#__PURE__*/
    function () {
      function FacilitySelectTableComponent() {
        _classCallCheck(this, FacilitySelectTableComponent);

        this.exporting = false;
        this.displayedColumns = ['id', 'recent', 'name', 'description', 'technicalOwners'];
      }

      _createClass(FacilitySelectTableComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.facilities);
          this.setDataSource();
          this.dataSource.filter = this.filterValue;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "setDataSource",
        value: function setDataSource() {
          if (!!this.dataSource) {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;

            this.dataSource.filterPredicate = function (data, filter) {
              var lowerCaseFilter = filter.trim().toLowerCase();

              if (data.name.trim().toLowerCase().indexOf(lowerCaseFilter) !== -1) {
                return true;
              }

              if (data.description !== null && data.description.trim().toLowerCase().indexOf(lowerCaseFilter) !== -1) {
                return true;
              }

              if (data.id.toString(10).startsWith(filter)) {
                return true;
              }

              return Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["parseTechnicalOwnersNames"])(data.facilityOwners).toLowerCase().indexOf(lowerCaseFilter) !== -1;
            };
          }
        }
      }, {
        key: "matSort",
        set: function set(ms) {
          this.sort = ms;
          this.setDataSource();
        }
      }]);

      return FacilitySelectTableComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], FacilitySelectTableComponent.prototype, "facilities", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], FacilitySelectTableComponent.prototype, "recentIds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FacilitySelectTableComponent.prototype, "filterValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]])], FacilitySelectTableComponent.prototype, "matSort", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], FacilitySelectTableComponent.prototype, "paginator", void 0);
    FacilitySelectTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-select-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./facility-select-table.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/components/facility-select-table/facility-select-table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./facility-select-table.component.scss */
      "./src/app/facilities/components/facility-select-table/facility-select-table.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FacilitySelectTableComponent);
    /***/
  },

  /***/
  "./src/app/facilities/facilities-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/facilities/facilities-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: FacilitiesRoutingModule */

  /***/
  function srcAppFacilitiesFacilitiesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitiesRoutingModule", function () {
      return FacilitiesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/facility-select-page/facility-select-page.component */
    "./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-detail-page.component */
    "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-overview/facility-overview.component */
    "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-resources/facility-resources.component */
    "./src/app/facilities/pages/facility-detail-page/facility-resources/facility-resources.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component */
    "./src/app/facilities/pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-detail-page.component */
    "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-overview/resource-overview.component */
    "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-groups/resource-groups.component */
    "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts");

    var routes = [{
      path: '',
      component: _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_3__["FacilitySelectPageComponent"]
    }, {
      path: ':facilityId',
      component: _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_4__["FacilityDetailPageComponent"],
      children: [{
        path: '',
        component: _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_5__["FacilityOverviewComponent"],
        data: {
          animation: 'FacilityOverviewPage'
        }
      }, {
        path: 'resources',
        component: _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_6__["FacilityResourcesComponent"],
        data: {
          animation: 'FacilityResourcesPage'
        }
      }, {
        path: 'allowed-groups',
        component: _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_7__["FacilityAllowedGroupsComponent"],
        data: {
          animation: 'FacilityAllowedGroupsPage'
        }
      }, {
        path: 'settings',
        component: _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_10__["FacilitySettingsComponent"],
        children: [{
          path: '',
          component: _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_11__["FacilitySettingsOverviewComponent"],
          data: {
            animation: 'FacilitySettingsOverviewPage'
          }
        }, {
          path: 'attributes',
          component: _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_12__["FacilitySettingsAttributesComponent"],
          data: {
            animation: 'FacilitySettingsAttributesPage'
          }
        }]
      }]
    }, {
      path: ':facilityId/resources/:resourceId',
      component: _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_8__["ResourceDetailPageComponent"],
      children: [{
        path: '',
        component: _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_9__["ResourceOverviewComponent"],
        data: {
          animation: 'ResourceOverviewPage'
        }
      }, {
        path: 'groups',
        component: _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_16__["ResourceGroupsComponent"],
        data: {
          animation: 'ResourceGroupsComponent'
        }
      }, {
        path: 'settings',
        component: _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_13__["ResourceSettingsComponent"],
        children: [{
          path: '',
          component: _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_14__["ResourceSettingsOverviewComponent"],
          data: {
            animation: 'ResourceSettingsOverviewPage'
          }
        }, {
          path: 'attributes',
          component: _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_15__["ResourceSettingsAttributesComponent"],
          data: {
            animation: 'ResourceSettingsAttributesPage'
          }
        }]
      }]
    }];

    var FacilitiesRoutingModule = function FacilitiesRoutingModule() {
      _classCallCheck(this, FacilitiesRoutingModule);
    };

    FacilitiesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FacilitiesRoutingModule);
    /***/
  },

  /***/
  "./src/app/facilities/facilities.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/facilities/facilities.module.ts ***!
    \*************************************************/

  /*! exports provided: FacilitiesModule */

  /***/
  function srcAppFacilitiesFacilitiesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitiesModule", function () {
      return FacilitiesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _facilities_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./facilities-routing.module */
    "./src/app/facilities/facilities-routing.module.ts");
    /* harmony import */


    var _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/facility-select-page/facility-select-page.component */
    "./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/facility-select-table/facility-select-table.component */
    "./src/app/facilities/components/facility-select-table/facility-select-table.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-detail-page.component */
    "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-overview/facility-overview.component */
    "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-resources/facility-resources.component */
    "./src/app/facilities/pages/facility-detail-page/facility-resources/facility-resources.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component */
    "./src/app/facilities/pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-detail-page.component */
    "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-overview/resource-overview.component */
    "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts");
    /* harmony import */


    var mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! mat-table-exporter */
    "../../node_modules/mat-table-exporter/fesm2015/mat-table-exporter.js");
    /* harmony import */


    var _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @perun-web-apps/ui/alerts */
    "../../libs/ui/alerts/src/index.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-groups/resource-groups.component */
    "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts");

    var FacilitiesModule = function FacilitiesModule() {
      _classCallCheck(this, FacilitiesModule);
    };

    FacilitiesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_4__["FacilitySelectPageComponent"], _components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_6__["FacilitySelectTableComponent"], _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_7__["FacilityDetailPageComponent"], _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_8__["FacilityOverviewComponent"], _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_9__["FacilityResourcesComponent"], _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_10__["FacilityAllowedGroupsComponent"], _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_11__["ResourceDetailPageComponent"], _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_12__["ResourceOverviewComponent"], _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_13__["FacilitySettingsComponent"], _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_14__["FacilitySettingsOverviewComponent"], _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_15__["FacilitySettingsAttributesComponent"], _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_16__["ResourceSettingsComponent"], _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_17__["ResourceSettingsOverviewComponent"], _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_18__["ResourceSettingsAttributesComponent"], _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_21__["ResourceGroupsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _facilities_routing_module__WEBPACK_IMPORTED_MODULE_3__["FacilitiesRoutingModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__["MatTableExporterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_20__["UiAlertsModule"]]
    })], FacilitiesModule);
    /***/
  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilityDetailPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: FacilityDetailPageComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilityDetailPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityDetailPageComponent", function () {
      return FacilityDetailPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/animations/Animations */
    "./src/app/shared/animations/Animations.ts");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/side-menu/side-menu-item.service */
    "./src/app/shared/side-menu/side-menu-item.service.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");

    var FacilityDetailPageComponent =
    /*#__PURE__*/
    function () {
      function FacilityDetailPageComponent(facilityService, route, sideMenuService, sideMenuItemService) {
        _classCallCheck(this, FacilityDetailPageComponent);

        this.facilityService = facilityService;
        this.route = route;
        this.sideMenuService = sideMenuService;
        this.sideMenuItemService = sideMenuItemService;
      }

      _createClass(FacilityDetailPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (params) {
            var facilityId = params['facilityId'];

            _this.facilityService.getFacilityById(facilityId).subscribe(function (facility) {
              _this.facility = facility;

              var facilityItem = _this.sideMenuItemService.parseFacility(facility);

              _this.sideMenuService.setFacilityMenuItems([facilityItem]);

              Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_7__["addRecentlyVisited"])('facilities', _this.facility);
            });
          });
        }
      }]);

      return FacilityDetailPageComponent;
    }();

    FacilityDetailPageComponent.ctorParameters = function () {
      return [{
        type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["FacilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuService"]
      }, {
        type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_5__["SideMenuItemService"]
      }];
    };

    FacilityDetailPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-detail-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./facility-detail-page.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.html"))["default"],
      animations: [_shared_animations_Animations__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./facility-detail-page.component.scss */
      "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["FacilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuService"], _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_5__["SideMenuItemService"]])], FacilityDetailPageComponent);
    /***/
  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilityOverviewFacilityOverviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktb3ZlcnZpZXcvZmFjaWxpdHktb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: FacilityOverviewComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilityOverviewFacilityOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityOverviewComponent", function () {
      return FacilityOverviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");

    var FacilityOverviewComponent =
    /*#__PURE__*/
    function () {
      function FacilityOverviewComponent(facilityService, route) {
        _classCallCheck(this, FacilityOverviewComponent);

        this.facilityService = facilityService;
        this.route = route;
        this.navItems = [];
      }

      _createClass(FacilityOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.subscribe(function (params) {
            var facilityId = params['facilityId'];

            _this2.facilityService.getFacilityById(facilityId).subscribe(function (facility) {
              _this2.facility = facility;

              _this2.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.navItems = [{
            cssIcon: 'perun-manage-facility',
            url: "/facilities/".concat(this.facility.id, "/resources"),
            label: 'MENU_ITEMS.FACILITY.RESOURCES',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-group',
            url: "/facilities/".concat(this.facility.id, "/allowed-groups"),
            label: 'MENU_ITEMS.FACILITY.ALLOWED_GROUPS',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-settings2',
            url: "/facilities/".concat(this.facility.id, "/settings"),
            label: 'MENU_ITEMS.FACILITY.SETTINGS',
            style: 'facility-btn'
          }];
        }
      }]);

      return FacilityOverviewComponent;
    }();

    FacilityOverviewComponent.ctorParameters = function () {
      return [{
        type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["FacilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FacilityOverviewComponent.prototype, "true", void 0);
    FacilityOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-overview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./facility-overview.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./facility-overview.component.scss */
      "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["FacilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], FacilityOverviewComponent);
    /***/
  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.scss":
  /*!**************************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.scss ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsAttributesFacilitySettingsAttributesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3MtYXR0cmlidXRlcy9mYWNpbGl0eS1zZXR0aW5ncy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts":
  /*!************************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts ***!
    \************************************************************************************************************************************************/

  /*! exports provided: FacilitySettingsAttributesComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsAttributesFacilitySettingsAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySettingsAttributesComponent", function () {
      return FacilitySettingsAttributesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../core/services/common/notificator.service */
    "./src/app/core/services/common/notificator.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/components/attributes-list/attributes-list.component */
    "./src/app/shared/components/attributes-list/attributes-list.component.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */
    "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */
    "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");

    var FacilitySettingsAttributesComponent =
    /*#__PURE__*/
    function () {
      function FacilitySettingsAttributesComponent(attributesService, sideMenuService, facility, route, dialog, notificator, translate) {
        var _this3 = this;

        _classCallCheck(this, FacilitySettingsAttributesComponent);

        this.attributesService = attributesService;
        this.sideMenuService = sideMenuService;
        this.facility = facility;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.translate = translate;
        this.attributes = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        this.filterValue = '';
        this.translate.get('FACILITY_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(function (value) {
          return _this3.saveSuccessMessage = value;
        });
        this.translate.get('FACILITY_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(function (value) {
          return _this3.deleteSuccessMessage = value;
        });
      }

      _createClass(FacilitySettingsAttributesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.parent.parent.params.subscribe(function (params) {
            _this4.facilityId = params['facilityId'];

            _this4.refreshTable();
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this5 = this;

          var dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DeleteAttributeDialogComponent"], {
            width: '450px',
            data: {
              entityId: this.facilityId,
              entity: 'facility',
              attributes: this.selection.selected
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this5.refreshTable();
            }
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this6 = this;

          // have to use this to update attribute with map in it, before saving it
          this.list.updateMapAttributes();
          this.attributesService.setAttributes(this.facilityId, 'facility', this.selection.selected).subscribe(function () {
            _this6.attributesService.getAllAttributes(_this6.facilityId, 'facility').subscribe(function (attributes) {
              _this6.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_12__["filterCoreAttributes"])(attributes);

              _this6.notificator.showSuccess(_this6.saveSuccessMessage);

              _this6.selection.clear();
            });
          });
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this7 = this;

          var dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CreateAttributeDialogComponent"], {
            width: '1050px',
            data: {
              entityId: this.facilityId,
              entity: 'facility',
              notEmptyAttributes: this.attributes,
              style: 'facility-theme'
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
              _this7.refreshTable();
            }
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this8 = this;

          this.loading = true;
          this.attributesService.getAllAttributes(this.facilityId, 'facility').subscribe(function (attributes) {
            _this8.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_12__["filterCoreAttributes"])(attributes);

            _this8.selection.clear();

            _this8.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }]);

      return FacilitySettingsAttributesComponent;
    }();

    FacilitySettingsAttributesComponent.ctorParameters = function () {
      return [{
        type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["AttributesService"]
      }, {
        type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"]
      }, {
        type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["FacilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FacilitySettingsAttributesComponent.prototype, "true", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('list', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_7__["AttributesListComponent"])], FacilitySettingsAttributesComponent.prototype, "list", void 0);
    FacilitySettingsAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-settings-attributes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./facility-settings-attributes.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./facility-settings-attributes.component.scss */
      "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["AttributesService"], _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"], _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["FacilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])], FacilitySettingsAttributesComponent);
    /***/
  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.scss":
  /*!**********************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.scss ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsOverviewFacilitySettingsOverviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3Mtb3ZlcnZpZXcvZmFjaWxpdHktc2V0dGluZ3Mtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts ***!
    \********************************************************************************************************************************************/

  /*! exports provided: FacilitySettingsOverviewComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsOverviewFacilitySettingsOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySettingsOverviewComponent", function () {
      return FacilitySettingsOverviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");

    var FacilitySettingsOverviewComponent =
    /*#__PURE__*/
    function () {
      function FacilitySettingsOverviewComponent(route, facilityService) {
        _classCallCheck(this, FacilitySettingsOverviewComponent);

        this.route = route;
        this.facilityService = facilityService;
        this.items = [];
      }

      _createClass(FacilitySettingsOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.route.parent.parent.params.subscribe(function (parentParams) {
            var facilityId = parentParams['facilityId'];

            _this9.facilityService.getFacilityById(facilityId).subscribe(function (facility) {
              _this9.facility = facility;

              _this9.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.items = [{
            cssIcon: 'perun-attributes',
            url: "/facilities/".concat(this.facility.id, "/settings/attributes"),
            label: 'MENU_ITEMS.FACILITY.ATTRIBUTES',
            style: 'facility-btn'
          }];
        }
      }]);

      return FacilitySettingsOverviewComponent;
    }();

    FacilitySettingsOverviewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["FacilityService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FacilitySettingsOverviewComponent.prototype, "true", void 0);
    FacilitySettingsOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-settings-overview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./facility-settings-overview.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./facility-settings-overview.component.scss */
      "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["FacilityService"]])], FacilitySettingsOverviewComponent);
    /***/
  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: FacilitySettingsComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySettingsComponent", function () {
      return FacilitySettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/animations/Animations */
    "./src/app/shared/animations/Animations.ts");

    var FacilitySettingsComponent =
    /*#__PURE__*/
    function () {
      function FacilitySettingsComponent() {
        _classCallCheck(this, FacilitySettingsComponent);
      }

      _createClass(FacilitySettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FacilitySettingsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FacilitySettingsComponent.prototype, "true", void 0);
    FacilitySettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./facility-settings.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.html"))["default"],
      animations: [_shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./facility-settings.component.scss */
      "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FacilitySettingsComponent);
    /***/
  },

  /***/
  "./src/app/facilities/pages/facility-select-page/facility-select-page.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-select-page/facility-select-page.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesPagesFacilitySelectPageFacilitySelectPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktc2VsZWN0LXBhZ2UvZmFjaWxpdHktc2VsZWN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: FacilitySelectPageComponent */

  /***/
  function srcAppFacilitiesPagesFacilitySelectPageFacilitySelectPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySelectPageComponent", function () {
      return FacilitySelectPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");

    var FacilitySelectPageComponent =
    /*#__PURE__*/
    function () {
      function FacilitySelectPageComponent(facilityService, sideMenuService) {
        _classCallCheck(this, FacilitySelectPageComponent);

        this.facilityService = facilityService;
        this.sideMenuService = sideMenuService;
        this.facilities = [];
        this.recentIds = [];
        this.filterValue = '';
      }

      _createClass(FacilitySelectPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sideMenuService.setFacilityMenuItems([]);
          this.refreshTable();
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this10 = this;

          this.loading = true;
          this.facilityService.getRichFacilities().subscribe(function (facilities) {
            _this10.facilities = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_4__["getRecentlyVisited"])('facilities', facilities);
            _this10.recentIds = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_4__["getRecentlyVisitedIds"])('facilities');
            _this10.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }]);

      return FacilitySelectPageComponent;
    }();

    FacilitySelectPageComponent.ctorParameters = function () {
      return [{
        type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["FacilityService"]
      }, {
        type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"]
      }];
    };

    FacilitySelectPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-select-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./facility-select-page.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/facility-select-page/facility-select-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./facility-select-page.component.scss */
      "./src/app/facilities/pages/facility-select-page/facility-select-page.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["FacilityService"], _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"]])], FacilitySelectPageComponent);
    /***/
  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceDetailPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2UtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ResourceDetailPageComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceDetailPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceDetailPageComponent", function () {
      return ResourceDetailPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/animations/Animations */
    "./src/app/shared/animations/Animations.ts");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/side-menu/side-menu-item.service */
    "./src/app/shared/side-menu/side-menu-item.service.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");

    var ResourceDetailPageComponent =
    /*#__PURE__*/
    function () {
      function ResourceDetailPageComponent(route, facilityService, resourcesService, sideMenuService, sideMenuItemService) {
        _classCallCheck(this, ResourceDetailPageComponent);

        this.route = route;
        this.facilityService = facilityService;
        this.resourcesService = resourcesService;
        this.sideMenuService = sideMenuService;
        this.sideMenuItemService = sideMenuItemService;
      }

      _createClass(ResourceDetailPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.route.params.subscribe(function (params) {
            var resourceId = params['resourceId'];

            _this11.resourcesService.getResourceById(resourceId).subscribe(function (resource) {
              _this11.resource = resource;

              _this11.facilityService.getFacilityById(resource.facilityId).subscribe(function (facility) {
                var facilityItem = _this11.sideMenuItemService.parseFacility(facility);

                var resourceItem = _this11.sideMenuItemService.parseResource(resource);

                _this11.sideMenuService.setFacilityMenuItems([facilityItem, resourceItem]);
              });
            });
          });
        }
      }]);

      return ResourceDetailPageComponent;
    }();

    ResourceDetailPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["FacilityService"]
      }, {
        type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["ResourcesService"]
      }, {
        type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuService"]
      }, {
        type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_5__["SideMenuItemService"]
      }];
    };

    ResourceDetailPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resource-detail-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resource-detail-page.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.html"))["default"],
      animations: [_shared_animations_Animations__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resource-detail-page.component.scss */
      "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["FacilityService"], _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["ResourcesService"], _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuService"], _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_5__["SideMenuItemService"]])], ResourceDetailPageComponent);
    /***/
  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceGroupsResourceGroupsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2UtZ3JvdXBzL3Jlc291cmNlLWdyb3Vwcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: ResourceGroupsComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceGroupsResourceGroupsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceGroupsComponent", function () {
      return ResourceGroupsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_components_dialogs_remove_group_from_resource_dialog_remove_group_from_resource_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/components/dialogs/remove-group-from-resource-dialog/remove-group-from-resource-dialog.component */
    "./src/app/shared/components/dialogs/remove-group-from-resource-dialog/remove-group-from-resource-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_assign_group_to_resource_dialog_assign_group_to_resource_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/components/dialogs/assign-group-to-resource-dialog/assign-group-to-resource-dialog.component */
    "./src/app/shared/components/dialogs/assign-group-to-resource-dialog/assign-group-to-resource-dialog.component.ts");

    var ResourceGroupsComponent =
    /*#__PURE__*/
    function () {
      function ResourceGroupsComponent(route, resourcesService, dialog) {
        _classCallCheck(this, ResourceGroupsComponent);

        this.route = route;
        this.resourcesService = resourcesService;
        this.dialog = dialog;
        this.assignedGroups = [];
        this.selected = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.filteredGroups = [];
      }

      _createClass(ResourceGroupsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.loading = true;
          this.route.parent.params.subscribe(function (parentParams) {
            _this12.resourceId = parentParams['resourceId'];

            _this12.loadAllGroups();
          });
        }
      }, {
        key: "loadAllGroups",
        value: function loadAllGroups() {
          var _this13 = this;

          this.loading = true;
          this.resourcesService.getAssignedGroups(this.resourceId).subscribe(function (assignedGroups) {
            _this13.assignedGroups = assignedGroups;
            _this13.filteredGroups = assignedGroups;

            _this13.selected.clear();

            _this13.loading = false;
          });
        }
      }, {
        key: "addGroup",
        value: function addGroup() {
          var _this14 = this;

          var dialogRef = this.dialog.open(_shared_components_dialogs_assign_group_to_resource_dialog_assign_group_to_resource_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AssignGroupToResourceDialogComponent"], {
            width: '800px',
            data: {
              theme: 'resource-theme',
              resourceId: this.resourceId
            }
          });
          dialogRef.afterClosed().subscribe(function (success) {
            if (success) {
              _this14.loadAllGroups();
            }
          });
        }
      }, {
        key: "removeGroups",
        value: function removeGroups() {
          var _this15 = this;

          var dialogRef = this.dialog.open(_shared_components_dialogs_remove_group_from_resource_dialog_remove_group_from_resource_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RemoveGroupFromResourceDialogComponent"], {
            width: '500px',
            data: {
              resourceId: this.resourceId,
              groups: this.selected.selected
            }
          });
          dialogRef.afterClosed().subscribe(function (success) {
            if (success) {
              _this15.loadAllGroups();
            }
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filteredGroups = this.assignedGroups.filter(function (option) {
            return option.name.toLowerCase().includes(filterValue.toLowerCase());
          });
        }
      }]);

      return ResourceGroupsComponent;
    }();

    ResourceGroupsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkbox', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"])], ResourceGroupsComponent.prototype, "checkbox", void 0);
    ResourceGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-perun-web-apps-resource-groups',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resource-groups.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resource-groups.component.scss */
      "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])], ResourceGroupsComponent);
    /***/
  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceOverviewResourceOverviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utb3ZlcnZpZXcvcmVzb3VyY2Utb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ResourceOverviewComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceOverviewResourceOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceOverviewComponent", function () {
      return ResourceOverviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");

    var ResourceOverviewComponent =
    /*#__PURE__*/
    function () {
      function ResourceOverviewComponent(resourcesService, route) {
        _classCallCheck(this, ResourceOverviewComponent);

        this.resourcesService = resourcesService;
        this.route = route;
        this.navItems = [];
      }

      _createClass(ResourceOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.route.params.subscribe(function (params) {
            var resourceId = params['resourceId'];

            _this16.resourcesService.getResourceById(resourceId).subscribe(function (resource) {
              _this16.resource = resource;

              _this16.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.navItems = [{
            cssIcon: 'perun-group',
            url: "/facilities/".concat(this.resource.facilityId, "/resources/").concat(this.resource.id, "/groups"),
            label: 'MENU_ITEMS.RESOURCE.ASSIGNED_GROUPS',
            style: 'resource-btn'
          }, {
            cssIcon: 'perun-settings2',
            url: "/facilities/".concat(this.resource.facilityId, "/resources/").concat(this.resource.id, "/settings"),
            label: 'MENU_ITEMS.RESOURCE.SETTINGS',
            style: 'resource-btn'
          }];
        }
      }]);

      return ResourceOverviewComponent;
    }();

    ResourceOverviewComponent.ctorParameters = function () {
      return [{
        type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ResourceOverviewComponent.prototype, "true", void 0);
    ResourceOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resource-overview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resource-overview.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resource-overview.component.scss */
      "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], ResourceOverviewComponent);
    /***/
  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.scss":
  /*!**************************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.scss ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsAttributesResourceSettingsAttributesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utc2V0dGluZ3MvcmVzb3VyY2Utc2V0dGluZ3MtYXR0cmlidXRlcy9yZXNvdXJjZS1zZXR0aW5ncy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts":
  /*!************************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts ***!
    \************************************************************************************************************************************************/

  /*! exports provided: ResourceSettingsAttributesComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsAttributesResourceSettingsAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceSettingsAttributesComponent", function () {
      return ResourceSettingsAttributesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../core/services/common/notificator.service */
    "./src/app/core/services/common/notificator.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/components/attributes-list/attributes-list.component */
    "./src/app/shared/components/attributes-list/attributes-list.component.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */
    "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */
    "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");

    var ResourceSettingsAttributesComponent =
    /*#__PURE__*/
    function () {
      function ResourceSettingsAttributesComponent(attributesService, sideMenuService, route, dialog, notificator, translate) {
        var _this17 = this;

        _classCallCheck(this, ResourceSettingsAttributesComponent);

        this.attributesService = attributesService;
        this.sideMenuService = sideMenuService;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.translate = translate;
        this.attributes = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        this.filterValue = '';
        this.translate.get('RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(function (value) {
          return _this17.saveSuccessMessage = value;
        });
        this.translate.get('RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(function (value) {
          return _this17.deleteSuccessMessage = value;
        });
      }

      _createClass(ResourceSettingsAttributesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.route.parent.parent.params.subscribe(function (params) {
            _this18.resourceId = params['resourceId'];

            _this18.refreshTable();
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this19 = this;

          var dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DeleteAttributeDialogComponent"], {
            width: '450px',
            data: {
              entityId: this.resourceId,
              entity: 'resource',
              attributes: this.selection.selected
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this19.refreshTable();
            }
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this20 = this;

          // have to use this to update attribute with map in it, before saving it
          this.list.updateMapAttributes();
          this.attributesService.setAttributes(this.resourceId, 'resource', this.selection.selected).subscribe(function () {
            _this20.attributesService.getAllAttributes(_this20.resourceId, 'resource').subscribe(function (attributes) {
              _this20.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_12__["filterCoreAttributes"])(attributes);

              _this20.notificator.showSuccess(_this20.saveSuccessMessage);

              _this20.selection.clear();
            });
          });
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this21 = this;

          var dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CreateAttributeDialogComponent"], {
            width: '1050px',
            data: {
              entityId: this.resourceId,
              entity: 'resource',
              notEmptyAttributes: this.attributes,
              style: 'resource-theme'
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
              _this21.refreshTable();
            }
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this22 = this;

          this.loading = true;
          this.attributesService.getAllAttributes(this.resourceId, 'resource').subscribe(function (attributes) {
            _this22.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_12__["filterCoreAttributes"])(attributes);

            _this22.selection.clear();

            _this22.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }]);

      return ResourceSettingsAttributesComponent;
    }();

    ResourceSettingsAttributesComponent.ctorParameters = function () {
      return [{
        type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["AttributesService"]
      }, {
        type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ResourceSettingsAttributesComponent.prototype, "true", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('list', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_7__["AttributesListComponent"])], ResourceSettingsAttributesComponent.prototype, "list", void 0);
    ResourceSettingsAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resource-settings-attributes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resource-settings-attributes.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resource-settings-attributes.component.scss */
      "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["AttributesService"], _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])], ResourceSettingsAttributesComponent);
    /***/
  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.scss":
  /*!**********************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.scss ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsOverviewResourceSettingsOverviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utc2V0dGluZ3MvcmVzb3VyY2Utc2V0dGluZ3Mtb3ZlcnZpZXcvcmVzb3VyY2Utc2V0dGluZ3Mtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts ***!
    \********************************************************************************************************************************************/

  /*! exports provided: ResourceSettingsOverviewComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsOverviewResourceSettingsOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceSettingsOverviewComponent", function () {
      return ResourceSettingsOverviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");

    var ResourceSettingsOverviewComponent =
    /*#__PURE__*/
    function () {
      function ResourceSettingsOverviewComponent(route, resourceService) {
        _classCallCheck(this, ResourceSettingsOverviewComponent);

        this.route = route;
        this.resourceService = resourceService;
        this.items = [];
      }

      _createClass(ResourceSettingsOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.route.parent.parent.params.subscribe(function (parentParams) {
            var resourceId = parentParams['resourceId'];

            _this23.resourceService.getResourceById(resourceId).subscribe(function (resource) {
              _this23.resource = resource;

              _this23.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.items = [{
            cssIcon: 'perun-attributes',
            url: "/facilities/".concat(this.resource.facilityId, "/resources/").concat(this.resource.id, "/settings/attributes"),
            label: 'MENU_ITEMS.RESOURCE.ATTRIBUTES',
            style: 'resource-btn'
          }];
        }
      }]);

      return ResourceSettingsOverviewComponent;
    }();

    ResourceSettingsOverviewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ResourceSettingsOverviewComponent.prototype, "true", void 0);
    ResourceSettingsOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resource-settings-overview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resource-settings-overview.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resource-settings-overview.component.scss */
      "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"]])], ResourceSettingsOverviewComponent);
    /***/
  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utc2V0dGluZ3MvcmVzb3VyY2Utc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ResourceSettingsComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceSettingsComponent", function () {
      return ResourceSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/animations/Animations */
    "./src/app/shared/animations/Animations.ts");

    var ResourceSettingsComponent =
    /*#__PURE__*/
    function () {
      function ResourceSettingsComponent() {
        _classCallCheck(this, ResourceSettingsComponent);
      }

      _createClass(ResourceSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResourceSettingsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ResourceSettingsComponent.prototype, "true", void 0);
    ResourceSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resource-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resource-settings.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.html"))["default"],
      animations: [_shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resource-settings.component.scss */
      "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ResourceSettingsComponent);
    /***/
  }
}]);
//# sourceMappingURL=facilities-facilities-module-es5.js.map