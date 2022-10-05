'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">prime-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-9b2236af699b61179db78489c750cd1f0ac44ee2f36fdb6d80de95c3d395867d09962464d91407ab71fd227208df3f8f115f72eb29612f6d3385c06ac69e0c0e"' : 'data-target="#xs-controllers-links-module-AppModule-9b2236af699b61179db78489c750cd1f0ac44ee2f36fdb6d80de95c3d395867d09962464d91407ab71fd227208df3f8f115f72eb29612f6d3385c06ac69e0c0e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9b2236af699b61179db78489c750cd1f0ac44ee2f36fdb6d80de95c3d395867d09962464d91407ab71fd227208df3f8f115f72eb29612f6d3385c06ac69e0c0e"' :
                                            'id="xs-controllers-links-module-AppModule-9b2236af699b61179db78489c750cd1f0ac44ee2f36fdb6d80de95c3d395867d09962464d91407ab71fd227208df3f8f115f72eb29612f6d3385c06ac69e0c0e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-9b2236af699b61179db78489c750cd1f0ac44ee2f36fdb6d80de95c3d395867d09962464d91407ab71fd227208df3f8f115f72eb29612f6d3385c06ac69e0c0e"' : 'data-target="#xs-injectables-links-module-AppModule-9b2236af699b61179db78489c750cd1f0ac44ee2f36fdb6d80de95c3d395867d09962464d91407ab71fd227208df3f8f115f72eb29612f6d3385c06ac69e0c0e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9b2236af699b61179db78489c750cd1f0ac44ee2f36fdb6d80de95c3d395867d09962464d91407ab71fd227208df3f8f115f72eb29612f6d3385c06ac69e0c0e"' :
                                        'id="xs-injectables-links-module-AppModule-9b2236af699b61179db78489c750cd1f0ac44ee2f36fdb6d80de95c3d395867d09962464d91407ab71fd227208df3f8f115f72eb29612f6d3385c06ac69e0c0e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-dc23eaccf951e4a7871a153ee6d90a225745a7bd25272f19853398a74133ad46d13ece5f13732a62b7ac7c586aa9ae81195370a60c82ad9883ef54760ba3aacb"' : 'data-target="#xs-controllers-links-module-AuthModule-dc23eaccf951e4a7871a153ee6d90a225745a7bd25272f19853398a74133ad46d13ece5f13732a62b7ac7c586aa9ae81195370a60c82ad9883ef54760ba3aacb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-dc23eaccf951e4a7871a153ee6d90a225745a7bd25272f19853398a74133ad46d13ece5f13732a62b7ac7c586aa9ae81195370a60c82ad9883ef54760ba3aacb"' :
                                            'id="xs-controllers-links-module-AuthModule-dc23eaccf951e4a7871a153ee6d90a225745a7bd25272f19853398a74133ad46d13ece5f13732a62b7ac7c586aa9ae81195370a60c82ad9883ef54760ba3aacb"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-dc23eaccf951e4a7871a153ee6d90a225745a7bd25272f19853398a74133ad46d13ece5f13732a62b7ac7c586aa9ae81195370a60c82ad9883ef54760ba3aacb"' : 'data-target="#xs-injectables-links-module-AuthModule-dc23eaccf951e4a7871a153ee6d90a225745a7bd25272f19853398a74133ad46d13ece5f13732a62b7ac7c586aa9ae81195370a60c82ad9883ef54760ba3aacb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-dc23eaccf951e4a7871a153ee6d90a225745a7bd25272f19853398a74133ad46d13ece5f13732a62b7ac7c586aa9ae81195370a60c82ad9883ef54760ba3aacb"' :
                                        'id="xs-injectables-links-module-AuthModule-dc23eaccf951e4a7871a153ee6d90a225745a7bd25272f19853398a74133ad46d13ece5f13732a62b7ac7c586aa9ae81195370a60c82ad9883ef54760ba3aacb"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContractsModule.html" data-type="entity-link" >ContractsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContractsModule-1bde9bd10090b9694ba943d2754244d5b061f28f51f1882116b89fc06558e1bda7cf593746e88d2e9bc4486447021cd9c71601fc51f6f705260d37a7d3f69cfe"' : 'data-target="#xs-controllers-links-module-ContractsModule-1bde9bd10090b9694ba943d2754244d5b061f28f51f1882116b89fc06558e1bda7cf593746e88d2e9bc4486447021cd9c71601fc51f6f705260d37a7d3f69cfe"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContractsModule-1bde9bd10090b9694ba943d2754244d5b061f28f51f1882116b89fc06558e1bda7cf593746e88d2e9bc4486447021cd9c71601fc51f6f705260d37a7d3f69cfe"' :
                                            'id="xs-controllers-links-module-ContractsModule-1bde9bd10090b9694ba943d2754244d5b061f28f51f1882116b89fc06558e1bda7cf593746e88d2e9bc4486447021cd9c71601fc51f6f705260d37a7d3f69cfe"' }>
                                            <li class="link">
                                                <a href="controllers/ContractsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContractsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContractsModule-1bde9bd10090b9694ba943d2754244d5b061f28f51f1882116b89fc06558e1bda7cf593746e88d2e9bc4486447021cd9c71601fc51f6f705260d37a7d3f69cfe"' : 'data-target="#xs-injectables-links-module-ContractsModule-1bde9bd10090b9694ba943d2754244d5b061f28f51f1882116b89fc06558e1bda7cf593746e88d2e9bc4486447021cd9c71601fc51f6f705260d37a7d3f69cfe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContractsModule-1bde9bd10090b9694ba943d2754244d5b061f28f51f1882116b89fc06558e1bda7cf593746e88d2e9bc4486447021cd9c71601fc51f6f705260d37a7d3f69cfe"' :
                                        'id="xs-injectables-links-module-ContractsModule-1bde9bd10090b9694ba943d2754244d5b061f28f51f1882116b89fc06558e1bda7cf593746e88d2e9bc4486447021cd9c71601fc51f6f705260d37a7d3f69cfe"' }>
                                        <li class="link">
                                            <a href="injectables/ContractsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContractsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoggerModule-0c1a811f9988dd8bbd1b3545fd2cc39878f9a4a231d821d1418743bff301e8b847415ca17605025a0ef3d98ccaa9f9d62b627379989d9f38113974547d8f8102"' : 'data-target="#xs-injectables-links-module-LoggerModule-0c1a811f9988dd8bbd1b3545fd2cc39878f9a4a231d821d1418743bff301e8b847415ca17605025a0ef3d98ccaa9f9d62b627379989d9f38113974547d8f8102"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-0c1a811f9988dd8bbd1b3545fd2cc39878f9a4a231d821d1418743bff301e8b847415ca17605025a0ef3d98ccaa9f9d62b627379989d9f38113974547d8f8102"' :
                                        'id="xs-injectables-links-module-LoggerModule-0c1a811f9988dd8bbd1b3545fd2cc39878f9a4a231d821d1418743bff301e8b847415ca17605025a0ef3d98ccaa9f9d62b627379989d9f38113974547d8f8102"' }>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksModule.html" data-type="entity-link" >TasksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TasksModule-5f74fc2592bfc95054dee59ddc938108054bf0c84d21d32b4974f09ff894528df06aad59b39023a2e43ce5c4361cba7cb3007d0e940dd0939dcd22479612d5c4"' : 'data-target="#xs-controllers-links-module-TasksModule-5f74fc2592bfc95054dee59ddc938108054bf0c84d21d32b4974f09ff894528df06aad59b39023a2e43ce5c4361cba7cb3007d0e940dd0939dcd22479612d5c4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TasksModule-5f74fc2592bfc95054dee59ddc938108054bf0c84d21d32b4974f09ff894528df06aad59b39023a2e43ce5c4361cba7cb3007d0e940dd0939dcd22479612d5c4"' :
                                            'id="xs-controllers-links-module-TasksModule-5f74fc2592bfc95054dee59ddc938108054bf0c84d21d32b4974f09ff894528df06aad59b39023a2e43ce5c4361cba7cb3007d0e940dd0939dcd22479612d5c4"' }>
                                            <li class="link">
                                                <a href="controllers/TasksController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TasksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TasksModule-5f74fc2592bfc95054dee59ddc938108054bf0c84d21d32b4974f09ff894528df06aad59b39023a2e43ce5c4361cba7cb3007d0e940dd0939dcd22479612d5c4"' : 'data-target="#xs-injectables-links-module-TasksModule-5f74fc2592bfc95054dee59ddc938108054bf0c84d21d32b4974f09ff894528df06aad59b39023a2e43ce5c4361cba7cb3007d0e940dd0939dcd22479612d5c4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TasksModule-5f74fc2592bfc95054dee59ddc938108054bf0c84d21d32b4974f09ff894528df06aad59b39023a2e43ce5c4361cba7cb3007d0e940dd0939dcd22479612d5c4"' :
                                        'id="xs-injectables-links-module-TasksModule-5f74fc2592bfc95054dee59ddc938108054bf0c84d21d32b4974f09ff894528df06aad59b39023a2e43ce5c4361cba7cb3007d0e940dd0939dcd22479612d5c4"' }>
                                        <li class="link">
                                            <a href="injectables/TasksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TasksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-bf803ad34b462dc375228cdae1a266319a924550f997f0fb3917a0db8ba637a155f25b9579cc3499e5d71ec3d80452ffa0814d2dc714a35102305baed8b921ab"' : 'data-target="#xs-injectables-links-module-UsersModule-bf803ad34b462dc375228cdae1a266319a924550f997f0fb3917a0db8ba637a155f25b9579cc3499e5d71ec3d80452ffa0814d2dc714a35102305baed8b921ab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-bf803ad34b462dc375228cdae1a266319a924550f997f0fb3917a0db8ba637a155f25b9579cc3499e5d71ec3d80452ffa0814d2dc714a35102305baed8b921ab"' :
                                        'id="xs-injectables-links-module-UsersModule-bf803ad34b462dc375228cdae1a266319a924550f997f0fb3917a0db8ba637a155f25b9579cc3499e5d71ec3d80452ffa0814d2dc714a35102305baed8b921ab"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDto.html" data-type="entity-link" >UpdateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersDTO.html" data-type="entity-link" >UsersDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/iConfig.html" data-type="entity-link" >iConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});