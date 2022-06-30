var delay=function(e){return promise=new Promise((function(n,o){setTimeout((function(){n(e)}),e)}))},logger=function(e){return console.log("Resolved after ".concat(e,"ms"))};delay(2e3).then(logger),delay(1e3).then(logger),delay(1500).then(logger);
//# sourceMappingURL=task-1.e2dbe65f.js.map
