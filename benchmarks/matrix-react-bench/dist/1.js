(globalThis.webpackJsonp=globalThis.webpackJsonp||[]).push([[1],{782:function(t,e,i){"use strict";function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.r(e),i.d(e,"DefaultOptions",(function(){return a})),i.d(e,"default",(function(){return r}));const a={maxCount:500,gravity:.05};class r{constructor(t){var e=this;o(this,"options",void 0),o(this,"context",null),o(this,"supportsAnimationFrame",window.requestAnimationFrame),o(this,"particles",[]),o(this,"isRunning",void 0),o(this,"start",(async function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;t&&(e.isRunning=!0,e.context=t.getContext("2d"),e.supportsAnimationFrame.call(window,e.updateWorld),i&&window.setTimeout(e.stop,i))})),o(this,"updateWorld",()=>{(this.isRunning||0!==this.particles.length)&&(this.update(),this.paint(),this.supportsAnimationFrame.call(window,this.updateWorld))}),o(this,"update",()=>{this.particles.length<this.options.maxCount&&this.isRunning&&this.createFirework();const t=[];for(let e=0;e<this.particles.length;e++)this.move(this.particles[e])&&t.push(this.particles[e]);this.particles=t}),o(this,"paint",()=>{if(this.context&&this.context.canvas){this.context.globalCompositeOperation="destination-out",this.context.fillStyle="rgba(0,0,0,0.5)",this.context.fillRect(0,0,this.context.canvas.width,this.context.canvas.height),this.context.globalCompositeOperation="lighter";for(let t=0;t<this.particles.length;t++)this.drawParticle(this.particles[t])}}),o(this,"createFirework",()=>{if(!this.context||!this.context.canvas)return;const t=this.context.canvas.width,e=this.context.canvas.height,i=Math.random()*(t-200)+100,n=Math.random()*(e-200)+100,s=50*Math.random()+100,o="rgb("+~~(200*Math.random()+55)+","+~~(200*Math.random()+55)+","+~~(200*Math.random()+55)+")";for(let t=0;t<s;t++){const t={};t.color=o,t.w=t.h=4*Math.random()+1,t.x=i-t.w/2,t.y=n-t.h/2,t.vx=10*(Math.random()-.5),t.vy=10*(Math.random()-.5),t.alpha=.5*Math.random()+.5;const e=Math.sqrt(25-t.vx*t.vx);Math.abs(t.vy)>e&&(t.vy=t.vy>0?e:-e),this.particles.push(t)}}),o(this,"stop",async()=>{this.isRunning=!1}),o(this,"drawParticle",t=>{this.context&&this.context.canvas&&(this.context.save(),this.context.beginPath(),this.context.translate(t.x+t.w/2,t.y+t.h/2),this.context.arc(0,0,t.w,0,2*Math.PI),this.context.fillStyle=t.color,this.context.globalAlpha=t.alpha,this.context.closePath(),this.context.fill(),this.context.restore())}),o(this,"move",t=>(t.x+=t.vx,t.vy+=this.options.gravity,t.y+=t.vy,t.alpha-=.01,!(t.x<=-t.w||t.x>=screen.width||t.y>=screen.height||t.alpha<=0))),this.options=s(s({},a),t)}}}}]);