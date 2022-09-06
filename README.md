# 09PipesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.
## Build 
ng build --base-href="./"

## primeNG
https://www.primefaces.org/primeng/setup

 INSTALAR primeng:
 1.- npm
npm install primeng --save
npm install primeicons --save

2.-  angular.json
"styles": [
              "src/styles.scss",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeng/resources/themes/vela-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css"
            ],

3.- En app.module, importar los componentes a utilizar
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],

  ## Flex
  npm install primeflex