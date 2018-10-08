webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".icon-lg {\n  height: 200px;\n  width: 200px;\n}\n.icon-sm {\n  height: 64px;\n  width: 64px;\n}\n.icon-footer {\n  width: 75px;\n  height: 65px;\n  opacity: 0.87;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<td-layout #layout>\n\t<td-navigation-drawer flex [sidenavTitle]=\"'SQL for Jupyter'\" logo=\"assets:teradata-dark\">\n\t\t<mat-nav-list>\n\t\t\t<a mat-list-item routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"layout.close()\">\n\t\t\t\t<mat-icon>web</mat-icon>Introduction\n\t\t\t</a>\n\t\t\t<a mat-list-item routerLink=\"/download\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"layout.close()\">\n\t\t\t\t<mat-icon>get_app</mat-icon>Installation\n\t\t\t</a>\n\t\t\t<mat-divider></mat-divider>\n\t\t\t<h3 mat-subheader class=\"push-top-md push-bottom-none\">Notebooks</h3>\n\t\t\t<a mat-list-item href=\"https://github.com/Teradata/jupyterextensions/tree/master/notebooks/GettingStarted.ipynb\"\n\t\t\t\ttarget=\"_blank\" type=\"application/force-download\" download=\"GettingStarted.ipynb\" (click)=\"layout.close()\">\n\t\t\t\t<mat-icon svgIcon=\"book\"></mat-icon> Getting Started\n\t\t\t</a>\n\t\t\t<a mat-list-item  href=\"https://github.com/Teradata/jupyterextensions/tree/master/notebooks/GettingStartedDemo.ipynb\"\n\t\t\t\ttarget=\"_blank\" type=\"application/force-download\" download=\"GettingStartedDemo.ipynb\" (click)=\"layout.close()\">\n\t\t\t\t<mat-icon svgIcon=\"book\"></mat-icon> Live Demo\n\t\t\t</a>\n\t\t\t<a mat-list-item  \n\t\t\thref=\"https://github.com/Teradata/jupyterextensions/tree/master/notebooks/ScriptTableOperatorSample.ipynb\" \n\t\t\ttarget=\"_blank\" type=\"application/force-download\" download=\"ScriptTableOperatorSample.ipynb\" (click)=\"layout.close()\">\n\t\t\t\t<mat-icon svgIcon=\"book\"></mat-icon> Script Table Operator\n\t\t\t</a>\n\t\t\t<a mat-list-item  href=\"https://github.com/Teradata/jupyterextensions/tree/master/notebooks\"\n\t\t\t\ttarget=\"_blank\" (click)=\"layout.close()\">\n\t\t\t\t<mat-icon svgIcon=\"github\"></mat-icon> Others..\n\t\t\t</a>\n\t\t\t<mat-divider></mat-divider>\n\t\t\t<h3 mat-subheader class=\"push-top-md push-bottom-none\">Documentation</h3>\n\t\t\t<a mat-list-item href=\"https://docs.teradata.com/access/sources/dita/map?dita:mapPath=nuw1535116212598.ditamap\" target=\"_blank\" (click)=\"layout.close()\">\n\t\t\t\t<mat-icon>library_books_24px</mat-icon>\n\t\t\t\tInstall Guide\n\t\t\t</a>\n\t\t\t<a mat-list-item href=\"https://docs.teradata.com/home\" target=\"_blank\" (click)=\"layout.close()\">\n\t\t\t\t<mat-icon>library_books_24px</mat-icon>\n\t\t\t\tTeradata Documentation\n\t\t\t</a>\n\t\t</mat-nav-list>\n\t</td-navigation-drawer>\n\t<td-layout-nav class=\"title-bar\" logo=\"assets:teradata\">\n\t\t<button mat-icon-button td-menu-button tdLayoutToggle>\n\t\t\t<mat-icon>menu</mat-icon>\n\t\t</button>\n\t\t<div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\n\t\t\t<span class=\"text-upper\">\n\t\t\t\t SQL <span hide-xs>Extension</span> for Jupyter\n\t\t\t</span>\n\t\t\t<span flex></span>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class=\"bg1\" layout-gt-xs=\"row\" layout-align=\"center start\">\n\t\t\t\t<div flex-sm=\"95\" flex-gt-sm=\"85\">\n\t\t\t\t\t<div layout-gt-xs=\"row\">\n\t\t\t\t\t\t<div flex-md=\"90\" class=\"pad-md\">\n\t\t\t\t\t\t\t<div layout-xs=\"row\">\n\t\t\t\t\t\t\t\t<a hide-gt-xs href=\"https://jupyterlab.readthedocs.io/en/stable/getting_started/overview.html\" target=\"_blank\"><mat-icon\n\t\t\t\t\t\t\t\t\t svgIcon=\"assets:logo\" class=\"icon-sm push-right-sm\"></mat-icon></a>\n\t\t\t\t\t\t\t\t<p class=\"tc-white mat-title\">The Teradata SQL extension for Jupyter provides a SQL kernel and navigator UI extension that\n\t\t\t\t\t\t\t\t\tallows the user to explore and execute queries on Teradata Vantage</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div layout=\"row\" layout-wrap class=\"push-top\">\n\t\t\t\t\t\t\t\t<a flex-xs=\"100\" flex-sm=\"100\" routerLink=\"/\" routerLinkActive=\"active\" mat-raised-button class=\"text-upper\">\n\t\t\t\t\t\t\t\t\t<mat-icon class=\"push-right-xs\">web</mat-icon> Introduction\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div flex-xs=\"100\" flex-sm=\"100\" class=\"push-sm\"></div>\n\t\t\t\t\t\t\t\t<a flex-xs=\"100\" flex-sm=\"100\" routerLink=\"/download\" routerLinkActive=\"active\" mat-raised-button color=\"accent\" class=\"text-upper\">\n\t\t\t\t\t\t\t\t\t<mat-icon class=\"push-right-xs\">get_app</mat-icon> Installation\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div flex-xs=\"100\" flex-sm=\"100\" class=\"push-sm\"></div>\n\t\t\t\t\t\t\t\t<a flex-xs=\"100\" flex-sm=\"100\" href=\"https://github.com/Teradata/jupyterextensions/tree/master/notebooks\" target=\"_blank\" mat-raised-button\n\t\t\t\t\t\t\t\tclass=\"text-upper\">\n\t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"book\" class=\"push-right-xs\"></mat-icon> Notebooks\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a hide-xs href=\"https://jupyterlab.readthedocs.io/en/stable/getting_started/overview.html\" target=\"_blank\"><mat-icon svgIcon=\"assets:logo\" class=\"icon-lg push\"></mat-icon></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<router-outlet></router-outlet>\n\n\t\t</div>\n\t\t<td-layout-footer class=\"footer\">\n\t\t\t<div layout=\"row\" layout-align=\"start center\">\n\t\t\t\t<span class=\"tc-blue-grey-300 mat-caption\">Copyright © 2018 Teradata. All rights reserved | <a href=\"https://github.com/Teradata/jupyterextensions/tree/master/licensefiles\"\n\t\t\t\t\t class=\"link\" target=\"_blank\"> License Agreement </a></span>\n\t\t\t</div>\n\t\t</td-layout-footer>\n\t</td-layout-nav>\n</td-layout>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__("./node_modules/@covalent/core/esm5/covalent-core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(media, _iconRegistry, _domSanitizer) {
        this.media = media;
        this._iconRegistry = _iconRegistry;
        this._domSanitizer = _domSanitizer;
        this.today = Date.now();
        this.name = 'SQL Extension for Jupyter';
        this.featured = [];
        this.projects = [];
        this.members = [];
        this._iconRegistry.addSvgIconInNamespace('assets', 'teradata', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/teradata.svg'));
        this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-dark', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/teradata-dark.svg'));
        this._iconRegistry.addSvgIconInNamespace('assets', 'bg', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/Jupyter.bg.png'));
        this._iconRegistry.addSvgIconInNamespace('assets', 'logo', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/jupyter.logo.svg'));
        this._iconRegistry.addSvgIconInNamespace('assets', 'kernel', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/kernel.svg'));
        this._iconRegistry.addSvgIconInNamespace('assets', 'navigator', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/navigator.svg'));
        this._iconRegistry.addSvgIconInNamespace('assets', 'notebook', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/book.svg)'));
        this._iconRegistry.addSvgIcon('book', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/book.svg'));
        this._iconRegistry.addSvgIcon('github', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'td-app',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__covalent_core__["n" /* TdMediaService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__download_component__ = __webpack_require__("./src/app/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__intro_component__ = __webpack_require__("./src/app/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__covalent_core__ = __webpack_require__("./node_modules/@covalent/core/esm5/covalent-core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'download', component: __WEBPACK_IMPORTED_MODULE_8__download_component__["a" /* DownloadComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__intro_component__["a" /* IntroComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["b" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                //RouterModule.forRoot([]),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
                /** Material Modules */
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["q" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["u" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["w" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["v" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["r" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["x" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["t" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatAutocompleteModule */],
                /** Covalent Modules */
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["a" /* CovalentCommonModule */],
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["e" /* CovalentLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["g" /* CovalentMediaModule */],
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["d" /* CovalentExpansionPanelModule */],
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["m" /* CovalentStepsModule */],
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["c" /* CovalentDialogsModule */],
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["f" /* CovalentLoadingModule */],
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["l" /* CovalentSearchModule */],
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["k" /* CovalentPagingModule */],
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["j" /* CovalentNotificationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["h" /* CovalentMenuModule */],
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["b" /* CovalentDataTableModule */],
                __WEBPACK_IMPORTED_MODULE_11__covalent_core__["i" /* CovalentMessageModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_8__download_component__["a" /* DownloadComponent */], __WEBPACK_IMPORTED_MODULE_9__intro_component__["a" /* IntroComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/download.component.css":
/***/ (function(module, exports) {

module.exports = ".icon-lg {\n  height: 200px;\n  width: 200px;\n}\n.icon-footer {\n  width: 75px;\n  height: 65px;\n  opacity: 0.87;\n}\n.download-button {\n  margin: 20px 10px 0px 85px;\n}\n.download-icon {\n  margin: 0 8px 0 0;\n}\n.mac-download-button {\n  padding-right: 34px;\n}\n.install-link {\n  margin: 10px 0 10px 85px;\n}"

/***/ }),

/***/ "./src/app/download.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"center start\" class=\"bgc-white\">\n\t\t<div flex-xs=\"95\" flex-gt-xs=\"90\" layout-gt-sm=\"row\" tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['push-md']\">\n\t\t\t<!-- Column 1 -->\n\t\t\t<div flex-gt-sm=\"50\" class=\"push-md\">\n\t\t\t\t<div>\n\t\t\t\t\t<mat-list>\n\t\t\t\t\t\t<h3 mat-subheader>\n\t\t\t\t\t\t\t<span class=\"mat-title tc-accent\">Docker Installation</span>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<span mat-line>\n\t\t\t\t\t\t\t\t<span class=\"text-wrap\">Install into your existing Docker environment on MacOS or Windows</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<span mat-line>\n\t\t\t\t\t\t\t\t<span class=\"text-wrap\">Docker must be installed separately</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<span mat-line> Self contained - no other components required</span>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t</mat-list>\n\t\t\t\t\t<div layout=\"row\" layout-wrap class=\"push-top\">\n\t\t\t\t\t\t<a flex-xs=\"100\" mat-raised-button color=\"accent\" href=\"https://docs.teradata.com/access/sources/dita/map?dita:mapPath=nuw1535116212598.ditamap\"\n\t\t\t\t\t\t target=\"_blank\">\n\t\t\t\t\t\t\t<mat-icon class=\"push-right-xs\">launch</mat-icon> Instructions\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div flex-xs=\"100\" class=\"push-sm\"></div>\n\t\t\t\t\t\t<a flex-xs=\"100\" mat-raised-button color=\"accent\" href=\"https://teradata-jupyter.s3.amazonaws.com/sqlextension/01.00/docker/teradatajupyterlabext.tar.gz\" download>\n\t\t\t\t\t\t\t<mat-icon class=\"push-right-xs\">file_download</mat-icon> Docker Image\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- End of Column 1 -->\n\t\t\t<!-- Column 2 -->\n\t\t\t<div flex-gt-sm=\"50\" class=\"push-md\">\n\t\t\t\t<div tdMediaToggle=\"xs\" [mediaClasses]=\"['pad-top']\">\n\t\t\t\t\t<mat-list>\n\t\t\t\t\t\t<h3 mat-subheader>\n\t\t\t\t\t\t\t<span class=\"mat-title tc-accent\">Manual Installation into JupyterLab</span>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<span mat-line>\n\t\t\t\t\t\t\t\t<span class=\"text-wrap\">Install into your existing JupyterLab environment on MacOS or Windows</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<span mat-line>\n\t\t\t\t\t\t\t\t<span class=\"text-wrap\">JupyterLab 0.34 must be installed separately</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<span mat-line>\n\t\t\t\t\t\t\t\t<span class=\"text-wrap\">ZeroMQ must be installed separately </span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<span mat-line>\n\t\t\t\t\t\t\t\t<span class=\"text-wrap\">Node and NPM must be installed separately</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t</mat-list>\n\t\t\t\t\t<div layout=\"row\" layout-wrap class=\"push-top\">\n\t\t\t\t\t\t<a flex-xs=\"100\" mat-raised-button color=\"accent\" href=\"https://docs.teradata.com/access/sources/dita/map?dita:mapPath=nuw1535116212598.ditamap\" target=\"_blank\">\n\t\t\t\t\t\t\t<mat-icon class=\"push-right-xs\">launch</mat-icon> Instructions\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div flex-xs=\"100\" class=\"push-sm\"></div>\n\t\t\t\t\t\t<a flex-xs=\"100\" mat-raised-button color=\"accent\" href=\"https://teradata-jupyter.s3.amazonaws.com/sqlextension/01.00/mac/teradatasqlmacos.zip\" download>\n\t\t\t\t\t\t\t<mat-icon class=\"push-right-xs\">file_download</mat-icon> macOS\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div flex-xs=\"100\" class=\"push-sm\"></div>\n\t\t\t\t\t\t<a flex-xs=\"100\" mat-raised-button color=\"accent\" href=\"https://teradata-jupyter.s3.amazonaws.com/sqlextension/01.00/windows/teradatasqlwin.zip\" download>\n\t\t\t\t\t\t\t<mat-icon class=\"push-right-xs\">file_download</mat-icon> Windows</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- End of Column 2 -->\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "./src/app/download.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DownloadComponent = /** @class */ (function () {
    function DownloadComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
        __metadata("design:type", String)
    ], DownloadComponent.prototype, "name", void 0);
    DownloadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'download',
            template: __webpack_require__("./src/app/download.component.html"),
            styles: [__webpack_require__("./src/app/download.component.css")]
        })
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./src/app/intro.component.css":
/***/ (function(module, exports) {

module.exports = ".icon-lg {\n  height: 200px;\n  width: 200px;\n}\n.icon-footer {\n  width: 75px;\n  height: 65px;\n  opacity: 0.87;\n}\n.nb-link {\n  margin-left: 48px;\n}"

/***/ }),

/***/ "./src/app/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Info Block -->\n<div layout=\"row\" layout-align=\"center start\" class=\"bgc-white\">\n\t<div flex-xs=\"95\" flex-gt-xs=\"90\" layout-gt-sm=\"row\" tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['push-md']\">\n\t\t<!-- Column 1 -->\n\t\t<div flex-gt-sm=\"50\" tdMediaToggle=\"gt-sm\" [mediaClasses]=\"['push-md']\">\n\t\t\t<div tdMediaToggle=\"xs\" [mediaClasses]=\"['pad-top']\">\n\t\t\t\t<mat-list>\n\t\t\t\t\t<h3 mat-subheader>\n\t\t\t\t\t\t<span class=\"mat-title tc-accent\">The SQL Kernel Provides</span>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t<span matLine>\n\t\t\t\t\t\t\t<span class=\"text-wrap\">\n\t\t\t\t\t\t\t\t Connection management to add, remove, connect, and list connections\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t<span matLine>\n\t\t\t\t\t\t\t<span class=\"text-wrap\">\n\t\t\t\t\t\t\t\t Query engine that uses an embedded Teradata SQL driver\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t<span matLine>\n\t\t\t\t\t\t\t<span class=\"text-wrap\">\n\t\t\t\t\t\t\t\t SQL aware notebook with SQL intellisense and syntax checking\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t<span matLine>\n\t\t\t\t\t\t\t<span class=\"text-wrap\">\n\t\t\t\t\t\t\t\t Result set renderer that displays result data in easy to read, pageable grid\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t<span matLine>\n\t\t\t\t\t\t\t<span class=\"text-wrap\">\n\t\t\t\t\t\t\t\t Execution history that stores execution metadata to recall SQL commands at a later time\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t<span matLine>\n\t\t\t\t\t\t\t<span class=\"text-wrap\">\n\t\t\t\t\t\t\t\t Visualization using VegaLite library to display charts, graphs, plots, etc.\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t<span matLine>\n\t\t\t\t\t\t\t<span class=\"text-wrap\">\n\t\t\t\t\t\t\t\t Magic commands that provide additional custom kernel options to enhance Teradata user experience\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</mat-list-item>\n\t\t\t\t</mat-list>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- End of Column 1 -->\n\t\t<!-- Column 2 -->\n\t\t<div flex-gt-sm=\"50\" tdMediaToggle=\"gt-sm\" [mediaClasses]=\"['push-md']\">\n\t\t\t<div tdMediaToggle=\"xs\" [mediaClasses]=\"['pad-top']\">\n\t\t\t\t<mat-list>\n\t\t\t\t\t<h3 mat-subheader>\n\t\t\t\t\t\t<span class=\"mat-title tc-accent\">The Navigator Provides</span>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t<span matLine>\n\t\t\t\t\t\t\t<span class=\"text-wrap\">\n\t\t\t\t\t\t\t\tThe ability to explore the SQL Engine catalog, regardless of the language you are\n\t\t\t\t\t\t\tusing in your notebook (SQL, Python, R)\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t<span matLine>\n\t\t\t\t\t\t\t<span class=\"text-wrap\">\n\t\t\t\t\t\t\t\t Hierarchical display of SQL object relational model\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t<span matLine>\n\t\t\t\t\t\t\t<span class=\"text-wrap\">\n\t\t\t\t\t\t\t\t Column metadata showing data types and indexes\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t<span matLine>\n\t\t\t\t\t\t\t<span class=\"text-wrap\">\n\t\t\t\t\t\t\t\t Row Count and Column Distribution menu options\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</mat-list-item>\n\t\t\t\t</mat-list>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- End of Column 2 -->\n\t</div>\n</div>\n<!-- End of Info Block -->\n\n<!-- Screenshots 1 -->\n<div layout=\"row\" layout-align=\"center start\" class=\"bgc-blue-grey-50\">\n\t<div flex=\"85\" tdMediaToggle=\"gt-sm\" [mediaClasses]=\"['push-md']\">\n\t\t<h2 class=\"mat-display-1 push-bottom-sm tc-blue-grey-800\">Usage</h2>\n\t\t<div layout-gt-sm=\"row\">\n\t\t\t<div flex-gt-sm=\"50\" class=\"push-md\">\n\t\t\t\t<div layout=\"row\">\n\t\t\t\t\t<mat-icon class=\"push-right-sm tc-blue-grey-700\">filter_1</mat-icon>\n\t\t\t\t\t<span class=\"mat-title push-none tc-blue-grey-700\">\n\t\t\t\t\t\tAdd a new connection and execute a SQL query, displaying its resultset data\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<mat-card class=\"video-card push-top-md\">\n\t\t\t\t\t<video class=\"video-card\" poster=\"assets/icons/JupyterTDExtAdd.Preview.png\" controls>\n\t\t\t\t\t\t<source src=\"assets/icons/JupyterTDExtAdd.mp4\" type=\"video/mp4\">\n\t\t\t\t\t</video>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t\t<div flex-gt-sm=\"50\" class=\"push-md\">\n\t\t\t\t<div layout=\"row\">\n\t\t\t\t\t<mat-icon class=\"push-right-sm tc-blue-grey-700\">filter_2</mat-icon>\n\t\t\t\t\t<span class=\"mat-title push-none tc-blue-grey-700\">\n\t\t\t\t\t\tCopy result set data from Teradata SQL Notebook to Python Notebook\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<mat-card class=\"video-card push-top-md\">\n\t\t\t\t\t<video class=\"video-card\" poster=\"assets/icons/JupyterTDExtCopy.Preview.png\" controls>\n\t\t\t\t\t\t<source src=\"assets/icons/JupyterTDExtCopy.mp4\" type=\"video/mp4\">\n\t\t\t\t\t</video>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- End of Screenshots 1 -->\n\n<!-- Screenshots 2 -->\n<div layout=\"row\" layout-align=\"center start\" class=\"bgc-blue-grey-100\">\n\t<div flex=\"85\" layout-gt-sm=\"row\" tdMediaToggle=\"gt-sm\" [mediaClasses]=\"['push-md']\">\n\t\t<div flex-gt-sm=\"50\" class=\"push-md\">\n\t\t\t<div layout=\"row\">\n\t\t\t\t<mat-icon class=\"push-right-sm tc-blue-grey-700\">filter_3</mat-icon>\n\t\t\t\t<span class=\"mat-title push-none tc-blue-grey-700\">\n\t\t\t\t\t Run SQL query and quickly visualize result set data\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<mat-card class=\"video-card push-top-md\">\n\t\t\t\t<video class=\"video-card\" poster=\"assets/icons/JupyterTDExtChart.Preview.png\"\n\t\t\t\t controls>\n\t\t\t\t\t<source src=\"assets/icons/JupyterTDExtChart.mp4\" type=\"video/mp4\">\n\t\t\t\t</video>\n\t\t\t</mat-card>\n\t\t</div>\n\t\t<div flex-gt-sm=\"50\" class=\"push-md\">\n\t\t\t<div layout=\"row\">\n\t\t\t\t<mat-icon class=\"push-right-sm tc-blue-grey-700\">filter_4</mat-icon>\n\t\t\t\t<span class=\"mat-title push-none tc-blue-grey-700\">\n\t\t\t\t\t Use Navigator to explore the SQL Engine catalog\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<mat-card class=\"video-card push-top-md\">\n\t\t\t\t<video class=\"video-card\" poster=\"assets/icons/JupyterTDExtNav1.Preview.png\"\n\t\t\t\t controls>\n\t\t\t\t\t<source src=\"assets/icons/JupyterTDExtNav1.mp4\" type=\"video/mp4\">\n\t\t\t\t</video>\n\t\t\t</mat-card>\n\t\t</div>\n\t</div>\n</div>\n<!-- End of Screenshots 2 -->\n\n<!-- Screenshots 3 -->\n<div layout=\"row\" layout-align=\"center start\" class=\"bgc-blue-grey-200\">\n\t<div flex=\"85\" layout-gt-sm=\"row\" tdMediaToggle=\"gt-sm\" [mediaClasses]=\"['push-md']\">\n\t\t<div flex-gt-sm=\"50\" class=\"push-md\">\n\t\t\t<div layout=\"row\">\n\t\t\t\t<mat-icon class=\"push-right-sm tc-blue-grey-700\">filter_5</mat-icon>\n\t\t\t\t<span class=\"mat-title push-none tc-blue-grey-700\">\n\t\t\t\t\t Open Multiple Navigators to compare database object lists and build SQL statements\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<mat-card class=\"video-card push-top-md\">\n\t\t\t\t<video class=\"video-card\" poster=\"assets/icons/JupyterTDExtNav2.Preview.png\"\n\t\t\t\t controls>\n\t\t\t\t\t<source src=\"assets/icons/JupyterTDExtNav2.mp4\" type=\"video/mp4\">\n\t\t\t\t</video>\n\t\t\t</mat-card>\n\t\t</div>\n\t\t<div flex-gt-sm=\"50\" class=\"push-left-md push-top-md push-right-md\">\n\n\t\t</div>\n\t</div>\n</div>\n<!-- End of Screenshots 3 -->\n\n<!-- Notebooks  -->\n<div layout=\"row\" layout-align=\"center start\" class=\"bgc-blue-grey-700\">\n\t<div flex=\"85\" layout-gt-sm=\"row\" tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['push-md']\">\n\t\t<!-- Column 1 -->\n\t\t<div flex-gt-sm=\"33\" class=\"push-md\">\n\t\t\t<div>\n\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\n\t\t\t\t\t<mat-icon svgIcon=\"book\" class=\"push-right\"></mat-icon>\n\t\t\t\t\t<span class=\"mat-title push-none tc-blue-grey-50\">Getting Started</span>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"tc-blue-grey-200\">Provides a guide to using Teradata SQL notebook</p>\n\t\t\t\t<a mat-raised-button color=\"accent\" href=\"https://github.com/Teradata/jupyterextensions/tree/master/notebooks/GettingStarted.ipynb\" target=\"_blank\">GettingStarted.ipynb</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- End of Column 1 -->\n\n\t\t<!-- Column 2 -->\n\t\t<div flex-gt-sm=\"33\" class=\"push-md\">\n\t\t\t<div>\n\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\n\t\t\t\t\t<mat-icon svgIcon=\"book\" class=\"push-right\"></mat-icon>\n\t\t\t\t\t<span class=\"mat-title push-none tc-blue-grey-50\">Live Demo</span>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"tc-blue-grey-200\">Provides an interactive Teradata SQL notebook</p>\n\t\t\t\t<a mat-raised-button color=\"accent\" href=\"https://github.com/Teradata/jupyterextensions/tree/master/notebooks/GettingStartedDemo.ipynb\" target=\"_blank\" >GettingStartedDemo.ipynb</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- End of Column 2 -->\n\n\t\t<!-- Column 3 -->\n\t\t<div flex-gt-sm=\"33\" class=\"push-md\">\n\t\t\t<div>\n\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\n\t\t\t\t\t<mat-icon svgIcon=\"book\" class=\"push-right\"></mat-icon>\n\t\t\t\t\t<span class=\"mat-title push-none tc-blue-grey-50\">Script Table Operators</span>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"tc-blue-grey-200\">Provides sample scenario using the %runsto magic</p>\n\t\t\t\t<a mat-raised-button color=\"accent\" href=\"https://github.com/Teradata/jupyterextensions/tree/master/notebooks/ScriptTableOperatorSample.ipynb\" target=\"_blank\">ScriptTableOperatorSample.ipynb</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- End of Column 3 -->\n\n\t</div>\n</div>\n<!-- End of Notebooks -->"

/***/ }),

/***/ "./src/app/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'intro',
            template: __webpack_require__("./src/app/intro.component.html"),
            styles: [__webpack_require__("./src/app/intro.component.css")]
        })
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map