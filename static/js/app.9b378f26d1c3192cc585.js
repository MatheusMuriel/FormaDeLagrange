webpackJsonp([1],{"9M+g":function(a,t){},AUp8:function(a,t){},Jmt5:function(a,t){},NHnr:function(a,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l("7+uW"),n=l("mvHQ"),s=l.n(n),r=l("mtWM"),o=l.n(r),i={data:function(){return{valorX1:-2,valorX2:-1,valorX3:0,valorX4:1,valorX5:2,valorF1:-2,valorF2:29,valorF3:30,valorF4:31,valorF5:62,valorX:1.5,resposta:"",newtonSelected:!1}},methods:{clickCalcular:function(){var a=this,t={};for(var l in t.X1=this.valorX1,t.X2=this.valorX2,t.X3=this.valorX3,t.X4=this.valorX4,t.X5=this.valorX5,t.F1=this.valorF1,t.F2=this.valorF2,t.F3=this.valorF3,t.F4=this.valorF4,t.F5=this.valorF5,t.PX=this.valorX,t){var e=t[l];t[l]=e||0===e?e:"null"}var n=s()(t);o.a.post(this.getUrl(),n).then(function(t){a.exibirResposta(t.data)}).catch(function(a){console.log(a)})},getUrl:function(){return"https://matheusmuriel.pythonanywhere.com"+(this.newtonSelected?"/newton/":"/lagrange/")},exibirResposta:function(a){this.resposta=a},selectLagrange:function(){this.newtonSelected=!1},selectNewton:function(){this.newtonSelected=!0}}},c={render:function(){var a=this,t=a.$createElement,l=a._self._c||t;return l("div",{staticClass:"div-principal"},[l("div",{staticClass:"linha-images"},[l("h2",[a._v("Selecione seu personagem")]),a._v(" "),l("div",{staticClass:"images"},[l("img",{class:a.newtonSelected?"img-principal":"img-principal personagemSelecionado",attrs:{src:"https://i.imgur.com/vBqV9Gx.jpg"},on:{click:a.selectLagrange}}),a._v(" "),l("img",{class:a.newtonSelected?"img-principal personagemSelecionado":"img-principal",attrs:{src:"https://i.imgur.com/V8U6qzr.jpg"},on:{click:a.selectNewton}})])]),a._v(" "),l("b-container",{staticClass:"inputs"},[l("b-row",{staticClass:"linha-input",attrs:{"align-h":"center"}},[a.resposta?l("div",[a._v("\n        Resposta: "+a._s(a.resposta)+"\n      ")]):a._e()]),a._v(" "),l("b-row",{staticClass:"linha-head"},[l("div",{staticClass:"espacador"}),a._v(" "),l("p",[a._v("1")]),a._v(" "),l("p",[a._v("2")]),a._v(" "),l("p",[a._v("3")]),a._v(" "),l("p",[a._v("4")]),a._v(" "),l("p",[a._v("5")])]),a._v(" "),l("b-row",{staticClass:"linha-tabela",attrs:{"align-h":"center"}},[l("h5",[a._v("x")]),a._v(" "),l("b-input",{staticClass:"input-camp",attrs:{placeholder:"X1"},model:{value:a.valorX1,callback:function(t){a.valorX1=t},expression:"valorX1"}}),a._v(" "),l("b-input",{staticClass:"input-camp",attrs:{placeholder:"X2"},model:{value:a.valorX2,callback:function(t){a.valorX2=t},expression:"valorX2"}}),a._v(" "),l("b-input",{staticClass:"input-camp",attrs:{placeholder:"X3"},model:{value:a.valorX3,callback:function(t){a.valorX3=t},expression:"valorX3"}}),a._v(" "),l("b-input",{staticClass:"input-camp",attrs:{placeholder:"X4"},model:{value:a.valorX4,callback:function(t){a.valorX4=t},expression:"valorX4"}}),a._v(" "),l("b-input",{staticClass:"input-camp",attrs:{placeholder:"X5"},model:{value:a.valorX5,callback:function(t){a.valorX5=t},expression:"valorX5"}})],1),a._v(" "),l("b-row",{staticClass:"linha-tabela",attrs:{"align-h":"center"}},[l("h5",[a._v("F(x)")]),a._v(" "),l("b-input",{staticClass:"input-camp",attrs:{placeholder:"F1"},model:{value:a.valorF1,callback:function(t){a.valorF1=t},expression:"valorF1"}}),a._v(" "),l("b-input",{staticClass:"input-camp",attrs:{placeholder:"F2"},model:{value:a.valorF2,callback:function(t){a.valorF2=t},expression:"valorF2"}}),a._v(" "),l("b-input",{staticClass:"input-camp",attrs:{placeholder:"F3"},model:{value:a.valorF3,callback:function(t){a.valorF3=t},expression:"valorF3"}}),a._v(" "),l("b-input",{staticClass:"input-camp",attrs:{placeholder:"F4"},model:{value:a.valorF4,callback:function(t){a.valorF4=t},expression:"valorF4"}}),a._v(" "),l("b-input",{staticClass:"input-camp",attrs:{placeholder:"F5"},model:{value:a.valorF5,callback:function(t){a.valorF5=t},expression:"valorF5"}})],1),a._v(" "),l("b-row",{staticClass:"linha-tabela",attrs:{"align-h":"center"}},[l("p",[a._v("P(x)")]),a._v(" "),l("b-input",{staticClass:"input-camp",attrs:{placeholder:"X"},model:{value:a.valorX,callback:function(t){a.valorX=t},expression:"valorX"}})],1),a._v(" "),l("b-row",{attrs:{"align-h":"center"}},[l("b-button",{staticClass:"btn-calc",attrs:{variant:"outline-primary"},on:{click:a.clickCalcular}},[a._v("Calcular")])],1)],1)],1)},staticRenderFns:[]};var v={name:"App",components:{Lagrange:l("VU/8")(i,c,!1,function(a){l("AUp8")},null,null).exports}},p={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{attrs:{id:"app"}},[t("lagrange")],1)},staticRenderFns:[]},u=l("VU/8")(v,p,!1,null,null,null).exports,h=l("Tqaz");l("Jmt5"),l("9M+g");e.default.use(h.a),e.default.config.productionTip=!1,new e.default({el:"#app",components:{App:u},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.9b378f26d1c3192cc585.js.map