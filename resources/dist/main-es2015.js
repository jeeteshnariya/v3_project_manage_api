(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeeteshnariya/Documents/temp/paper-dashboard-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "1+2w":
/*!*********************************************!*\
  !*** ./src/app/_services/toster.service.ts ***!
  \*********************************************/
/*! exports provided: TosterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TosterService", function() { return TosterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");



let TosterService = class TosterService {
    constructor(toastr) {
        this.toastr = toastr;
        this.config = {
            timeOut: 2000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
            positionClass: "toast-" + "top" + "-" + "right",
        };
    }
    success(msg) {
        this.toastr.success(`<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">${msg}</span>`, "", this.config);
    }
    warning(msg) {
        this.config.toastClass = "alert alert-warning alert-with-icon";
        this.toastr.warning(`<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">${msg}</span>`, "", this.config);
    }
    error(msg) {
        this.config.toastClass = "alert alert-danger alert-with-icon";
        this.toastr.error(`<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">${msg}</span>`, "", this.config);
    }
    show(msg) {
        this.config.toastClass = "alert alert-primary alert-with-icon";
        this.toastr.show(`<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">${msg}</span>`, "", this.config);
    }
    info(msg) {
        this.config.toastClass = "alert alert-info alert-with-icon";
        this.toastr.info(`<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">${msg}</span>`, "", this.config);
    }
};
TosterService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
TosterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
], TosterService);



/***/ }),

/***/ "1LOO":
/*!********************************************!*\
  !*** ./src/app/_services/users.service.ts ***!
  \********************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");




let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
        this._url = "";
        this._url = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    getUsers() {
        return this.http.get(this._url + "/users");
    }
    getUser(id) {
        return this.http.get(this._url + "/users/" + id);
    }
    createUsers(data) {
        return this.http.post(this._url + "/users", data);
    }
    updateUsers(id, data) {
        return this.http.put(this._url + "/users/" + id, data);
    }
    deleteUsers(id) {
        return this.http.delete(this._url + "/users/" + id);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], UsersService);



/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "zvoc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_services/auth.service */ "7Vn+");





const ROUTES = [
    { path: "/dashboard", title: "Dashboard", icon: "nc-bank", class: "" },
    // { path: "/icons", title: "Icons", icon: "nc-diamond", class: "" },
    // {
    //   path: "/notifications",
    //   title: "Notifications",
    //   icon: "nc-bell-55",
    //   class: "",
    // },
    { path: "/profiles", title: "Users", icon: "nc-bag-16", class: "" },
    { path: "/user", title: "User Overview", icon: "nc-single-02", class: "" },
    { path: "/projects", title: "Projects", icon: "nc-app", class: "" },
];
let SidebarComponent = class SidebarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter((menuItem) => menuItem);
    }
    logout() {
        this.authService.logout().subscribe((resp) => {
            console.log("Successfully logout");
            console.log(resp);
            this.router.navigate(["/login"]);
        }, (err) => {
            console.error("Error logging in", err);
        });
    }
    roledisplay(item) {
        const admin = ["/dashboard", "/profiles", "/user", "/projects"];
        const faculty = ["/dashboard", "/profiles", "/user", "/projects"];
        const studnet = ["/dashboard", "/projects"];
        const role = this.authService.role;
        if (role == "student") {
            return studnet.includes(item); // Returns true
        }
        if (role == "faculty") {
            return faculty.includes(item); // Returns true
        }
        if (role == "admin") {
            return admin.includes(item); // Returns true
        }
        return false;
    }
};
SidebarComponent.ctorParameters = () => [
    { type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "sidebar-cmp",
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SidebarComponent);



/***/ }),

/***/ "7Vn+":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        // private _token: string = null;
        this._url = "";
        this._url = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    login(user) {
        return this.http.post(this._url + "/login", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp) => {
            // this._token = resp.token;
            localStorage.setItem("token", resp.token);
            localStorage.setItem("user", JSON.stringify(resp.user));
            return resp;
        }));
    }
    logout() {
        return this.http.post(this._url + "/logout", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp) => {
            // this._token = resp.token;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return resp;
        }));
    }
    set token(token) {
        // this._token = token;
        localStorage.setItem("token", token);
    }
    get token() {
        return localStorage.getItem("token");
    }
    get user() {
        var user = JSON.parse(localStorage.getItem("user"));
        return user;
    }
    get role() {
        var user = JSON.parse(localStorage.getItem("user"));
        return user.roles.slug;
    }
    isLoggedIn() {
        // return this.token != null;
        return localStorage.getItem("token") != null;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div\n    class=\"sidebar\"\n    data-color=\"white\"\n    data-active-color=\"danger\"\n    *ngIf=\"display\"\n  >\n    <sidebar-cmp></sidebar-cmp>\n  </div>\n  <div class=\"main-panel\" [ngStyle]=\"loginStyle\">\n    <navbar-cmp *ngIf=\"display\"></navbar-cmp>\n    <div class=\"content\">\n      <router-outlet> </router-outlet>\n    </div>\n    <footer-cmp *ngIf=\"display\"></footer-cmp>\n  </div>\n</div>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    baseUrl: "api",
};


/***/ }),

/***/ "BuaG":
/*!***********************************************!*\
  !*** ./src/app/_services/auth.interceptor.ts ***!
  \***********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "7Vn+");



let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        console.log("INTERCEPTING");
        console.log(this.authService.token);
        if (this.authService.token) {
            console.log("INTERCEPTING, HAS TOKEN");
            const authReq = request.clone({
                headers: request.headers.set("Authorization", "Bearer " + this.authService.token),
            });
            console.log("Making an authorized request");
            request = authReq;
        }
        return next.handle(request);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AuthInterceptor);



/***/ }),

/***/ "CpO+":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.component */ "EtQq");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






let NavbarModule = class NavbarModule {
};
NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
    })
], NavbarModule);



/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/_services/auth.service */ "7Vn+");







let NavbarComponent = class NavbarComponent {
    constructor(location, renderer, element, router, authSvc) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.authSvc = authSvc;
        this.userName = null;
        this.userRole = null;
        this.userEmail = null;
        this.isCollapsed = true;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.userName = this.authSvc.user.name;
        this.userRole = this.authSvc.user.roles.slug;
        this.userEmail = this.authSvc.user.email;
    }
    ngOnInit() {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter((listTitle) => listTitle);
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
        });
    }
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
            if (titlee == "/projectoverview") {
                return "Project Overview";
            }
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    }
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName("html")[0];
        const mainPanel = (document.getElementsByClassName("main-panel")[0]);
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        if (window.innerWidth < 991) {
            mainPanel.style.position = "fixed";
        }
        this.sidebarVisible = true;
    }
    sidebarClose() {
        const html = document.getElementsByTagName("html")[0];
        const mainPanel = (document.getElementsByClassName("main-panel")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = "";
            }, 500);
        }
        this.toggleButton.classList.remove("toggled");
        this.sidebarVisible = false;
        html.classList.remove("nav-open");
    }
    collapse() {
        this.isCollapsed = !this.isCollapsed;
        const navbar = document.getElementsByTagName("nav")[0];
        console.log(navbar);
        if (!this.isCollapsed) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("bg-white");
        }
        else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("bg-white");
        }
    }
    logout() {
        this.authSvc.logout().subscribe((resp) => {
            console.log("Successfully logout");
            console.log(resp);
            this.router.navigate(["/login"]);
        }, (err) => {
            console.error("Error logging in", err);
        });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
NavbarComponent.propDecorators = {
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["navbar-cmp", { static: false },] }]
};
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "navbar-cmp",
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], NavbarComponent);



/***/ }),

/***/ "EvJt":
/*!**************************************************************************!*\
  !*** ./src/app/pages/projects/modal-project/modal-project.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL21vZGFsLXByb2plY3QvbW9kYWwtcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/sidebar/sidebar.component */ "47Jg");






let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(location) {
        this.display = false;
        this.location = location;
    }
    ngOnInit() {
        this.listTitles = app_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].filter((listTitle) => listTitle);
        this.setStyle();
    }
    setStyle() {
        if (this.getTitle() == "/login") {
            this.display = false;
            this.loginStyle = { width: "100%", height: "100vh" };
        }
        else {
            this.display = true;
            this.loginStyle = {};
        }
    }
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }
        return titlee;
    }
    ngDoCheck() {
        this.setStyle();
    }
};
AdminLayoutComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-admin-layout",
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], AdminLayoutComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TvAW":
/*!*************************************************************************!*\
  !*** ./src/app/pages/projects/modal-project/modal-project.component.ts ***!
  \*************************************************************************/
/*! exports provided: ModalProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProjectComponent", function() { return ModalProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_project_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-project.component.html */ "fJKU");
/* harmony import */ var _modal_project_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-project.component.css */ "EvJt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/_services/projects.service */ "sSi7");
/* harmony import */ var app_services_toster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/_services/toster.service */ "1+2w");








let ModalProjectComponent = class ModalProjectComponent {
    constructor(activeModal, fb, projectService, tost) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.projectService = projectService;
        this.tost = tost;
        this.mode = null;
        this.message = null;
    }
    ngOnInit() {
        this.mode = this.data.mode;
        this.initForm();
        this.projectForm.patchValue(this.data.project);
    }
    initForm() {
        this.projectForm = this.fb.group({
            id: "",
            name: "New Application",
            start_date: "",
            due_date: "",
            description: "",
            technology: "",
            status: "Open",
            users: this.fb.group({
                name: "@username",
                email: "ex@domain.name",
            }),
        });
    }
    onSubmit() {
        if (this.mode === "add") {
            this.saveProject();
        }
        else {
            this.updateProject();
        }
    }
    saveProject() {
        this.projectService.createProject(this.projectForm.value).subscribe((resp) => {
            console.log(resp);
            this.tost.success(resp.message);
            this.activeModal.close("Ok click");
        }, (err) => {
            console.error("Error logging in", err);
            this.message = err.error.errors;
        });
    }
    updateProject() {
        var id = this.data.project.id;
        this.projectService.updateProject(id, this.projectForm.value).subscribe((resp) => {
            console.log(resp);
            this.tost.info(resp.message);
            this.activeModal.close("Ok click");
        }, (err) => {
            console.error("Error logging in", err);
            this.message = err.error.errors;
        });
    }
};
ModalProjectComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"] },
    { type: app_services_toster_service__WEBPACK_IMPORTED_MODULE_7__["TosterService"] }
];
ModalProjectComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalProjectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-modal-project",
        template: _raw_loader_modal_project_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_project_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"],
        app_services_toster_service__WEBPACK_IMPORTED_MODULE_7__["TosterService"]])
], ModalProjectComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "wCP4");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/footer/footer.module */ "cNqA");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "CpO+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/auth.interceptor */ "BuaG");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/auth.service */ "7Vn+");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/users.service */ "1LOO");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/projects.service */ "sSi7");
/* harmony import */ var _pages_projects_modal_project_modal_project_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/projects/modal-project/modal-project.component */ "TvAW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_toster_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_services/toster.service */ "1+2w");



















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_10__["AdminLayoutComponent"], _pages_projects_modal_project_modal_project_component__WEBPACK_IMPORTED_MODULE_16__["ModalProjectComponent"]],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutes"], {
                useHash: true,
            }),
            _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"],
            _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        ],
        providers: [
            _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_14__["UsersService"],
            _services_projects_service__WEBPACK_IMPORTED_MODULE_15__["ProjectsService"],
            _services_toster_service__WEBPACK_IMPORTED_MODULE_18__["TosterService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
                multi: true,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");

const AppRoutes = [
    {
        path: "",
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            {
                path: "",
                loadChildren: "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
            },
        ],
    },
    {
        path: "**",
        redirectTo: "dashboard",
    },
];


/***/ }),

/***/ "cNqA":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "jQpT");





let FooterModule = class FooterModule {
};
FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
    })
], FooterModule);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "fJKU":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/modal-project/modal-project.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h5 class=\"modal-title\" *ngIf=\"data.mode == 'add'\">Add New</h5>\n  <h5 class=\"modal-title\" *ngIf=\"data.mode == 'edit'\">Edit Project</h5>\n  <button\n    type=\"button\"\n    class=\"close\"\n    aria-label=\"Close\"\n    (click)=\"activeModal.dismiss('Cross click')\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"projectForm\">\n    <div class=\"row\" formGroupName=\"users\">\n      <div class=\"col-md-6 pr-1\">\n        <div class=\"form-group\">\n          <label>Username</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            disabled=\"\"\n            placeholder=\"Username\"\n            formControlName=\"name\"\n          />\n        </div>\n      </div>\n      <div class=\"col-md-6 pl-1\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input\n            type=\"email\"\n            disabled=\"\"\n            class=\"form-control\"\n            placeholder=\"Email\"\n            formControlName=\"email\"\n          />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label>Project Name</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Project Name\"\n            formControlName=\"name\"\n          />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 pr-1\">\n        <div class=\"form-group\">\n          <label>Start Date</label>\n          <input\n            type=\"date\"\n            class=\"form-control\"\n            placeholder=\"Company\"\n            formControlName=\"start_date\"\n          />\n        </div>\n      </div>\n      <div class=\"col-md-6 pl-1\">\n        <div class=\"form-group\">\n          <label>Due Date</label>\n          <input\n            type=\"date\"\n            class=\"form-control\"\n            placeholder=\"Last Name\"\n            formControlName=\"due_date\"\n          />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 pr-1\">\n        <div class=\"form-group\">\n          <label>Technology</label>\n\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"php, nodejs, laravel\"\n            formControlName=\"technology\"\n          />\n        </div>\n      </div>\n      <div class=\"col-md-6 pl-1\">\n        <div class=\"form-group\">\n          <label>Status</label>\n\n          <select class=\"form-control\" formControlName=\"status\">\n            <option>Open</option>\n            <option>Active</option>\n            <option>Completed</option>\n            <option>Pending</option>\n            <option>Archive</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea\n            class=\"form-control textarea\"\n            formControlName=\"description\"\n            >{{ description }}</textarea\n          >\n          <span *ngIf=\"message\"\n            ><p *ngFor=\"let item of message.description\" style=\"color: red\">\n              {{ item }}\n            </p></span\n          >\n        </div>\n      </div>\n    </div>\n  </form>\n  <pre>{{ project | json }}</pre>\n</div>\n\n<div class=\"modal-footer\">\n  <button\n    type=\"button\"\n    class=\"btn btn-outline-secondary\"\n    ngbAutofocus\n    (click)=\"activeModal.dismiss('cancel click')\"\n  >\n    Cancel\n  </button>\n  <button\n    type=\"button\"\n    ngbAutofocus\n    class=\"btn btn-danger\"\n    (click)=\"onSubmit()\"\n  >\n    Save\n  </button>\n</div>\n");

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <div class=\"copyright pull-right\">\n      &copy; {{ test | date: \"yyyy\" }}, made with\n      <i class=\"fa fa-heart heart\"></i> by\n      <a href=\"http://www.aptrix.in\">Aptrix Interactive</a>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'footer-cmp',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], FooterComponent);



/***/ }),

/***/ "sSi7":
/*!***********************************************!*\
  !*** ./src/app/_services/projects.service.ts ***!
  \***********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");




let ProjectsService = class ProjectsService {
    constructor(http) {
        this.http = http;
        this._url = "";
        this._url = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    getProjects() {
        return this.http.get(this._url + "/projects");
    }
    getProject(id) {
        return this.http.get(this._url + "/projects/" + id);
    }
    createProject(data) {
        return this.http.post(this._url + "/projects", data);
    }
    updateProject(id, data) {
        return this.http.put(this._url + "/projects/" + id, data);
    }
    deleteProject(id) {
        return this.http.delete(this._url + "/projects/" + id);
    }
};
ProjectsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProjectsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ProjectsService);



/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "wCP4":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.component */ "47Jg");





let SidebarModule = class SidebarModule {
};
SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
    })
], SidebarModule);



/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\"\n>\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\">\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{ getTitle() }}</a>\n    </div>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      (click)=\"collapse()\"\n      [attr.aria-expanded]=\"!isCollapsed\"\n      aria-controls=\"collapseExample\"\n    >\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div\n      class=\"collapse navbar-collapse justify-content-end\"\n      id=\"collapseExample\"\n      [ngbCollapse]=\"isCollapsed\"\n    >\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-rotate\" href=\"javascript:void(0)\">\n            <p style=\"text-transform: capitalize\">\n              Welcome, {{ userName || \"User\" }}\n              <span class=\"badge badge-pill badge-secondary mt-2\">{{\n                userRole || \"Role\"\n              }}</span>\n            </p>\n          </a>\n        </li>\n\n        <li class=\"nav-item btn-rotate\" ngbDropdown placement=\"bottom-left\">\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdownMenuLink\">\n            <i class=\"nc-icon nc-settings-gear-65\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\n            </p>\n          </a>\n          <div\n            ngbDropdownMenu\n            aria-labelledby=\"navbarDropdownMenuLink\"\n            class=\"dropdown-menu dropdown-menu-right\"\n          >\n            <a ngbDropdownItem href=\"javascript:void(0)\">{{\n              userEmail || \"exmp@domain.com\"\n            }}</a>\n            <a ngbDropdownItem href=\"javascript:void(0)\" (click)=\"logout()\"\n              >Log Out</a\n            >\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

=========================================================
* Paper Dashboard Angular - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zvoc":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a class=\"simple-text logo-normal\">\n      <div class=\"logo-image-normal\">\n        <img src=\"assets/img/logo.svg\" />\n      </div>\n    </a>\n  </div>\n  <ul class=\"nav\">\n    <li\n      *ngFor=\"let menuItem of menuItems\"\n      routerLinkActive=\"active\"\n      class=\"{{ menuItem.class }}\"\n    >\n      <a [routerLink]=\"[menuItem.path]\" *ngIf=\"roledisplay(menuItem.path)\">\n        <i class=\"nc-icon {{ menuItem.icon }}\"></i>\n        <p>{{ menuItem.title }}</p>\n      </a>\n    </li>\n    <li class=\"active-pro\">\n      <a (click)=\"logout()\">\n        <i class=\"nc-icon nc-share-66\"></i>\n        <p>Log Out</p>\n      </a>\n    </li>\n  </ul>\n</div>\n");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map