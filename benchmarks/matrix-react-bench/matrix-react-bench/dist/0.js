(globalThis.webpackJsonp=globalThis.webpackJsonp||[]).push([[0],{781:function(t,e,i){"use strict";function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.r(e),i.d(e,"DefaultOptions",(function(){return o})),i.d(e,"default",(function(){return a}));const o={maxCount:150,speed:3,frameInterval:15,alpha:1,gradient:!1};class a{constructor(t){var e=this;r(this,"options",void 0),r(this,"context",null),r(this,"supportsAnimationFrame",window.requestAnimationFrame),r(this,"colors",["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"]),r(this,"lastFrameTime",Date.now()),r(this,"particles",[]),r(this,"waveAngle",0),r(this,"isRunning",void 0),r(this,"start",(async function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;if(!t)return;e.context=t.getContext("2d"),e.particles=[];const n=e.options.maxCount;for(;e.particles.length<n;)e.particles.push(e.resetParticle({},t.width,t.height));e.isRunning=!0,e.runAnimation(),i&&window.setTimeout(e.stop,i)})),r(this,"stop",async()=>{this.isRunning=!1}),r(this,"resetParticle",(t,e,i)=>(t.color=this.colors[Math.random()*this.colors.length|0]+(this.options.alpha+")"),this.options.gradient?t.color2=this.colors[Math.random()*this.colors.length|0]+(this.options.alpha+")"):t.color2=t.color,t.x=Math.random()*e,t.y=Math.random()*-i,t.diameter=10*Math.random()+5,t.tilt=-10*Math.random(),t.tiltAngleIncrement=.07*Math.random()+.05,t.tiltAngle=Math.random()*Math.PI,t)),r(this,"runAnimation",()=>{if(this.context&&this.context.canvas)if(0===this.particles.length)this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);else{const t=Date.now(),e=t-this.lastFrameTime;(!this.supportsAnimationFrame||e>this.options.frameInterval)&&(this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.updateParticles(),this.drawParticles(this.context),this.lastFrameTime=t-e%this.options.frameInterval),requestAnimationFrame(this.runAnimation)}}),r(this,"drawParticles",t=>{if(!this.context||!this.context.canvas)return;let e,i,n;for(const s of this.particles){if(this.context.beginPath(),t.lineWidth=s.diameter,i=s.x+s.tilt,e=i+s.diameter/2,n=s.y+s.tilt+s.diameter/2,this.options.gradient){const r=t.createLinearGradient(e,s.y,i,n);r.addColorStop(0,s.color),r.addColorStop(1,s.color2),t.strokeStyle=r}else t.strokeStyle=s.color;t.moveTo(e,s.y),t.lineTo(i,n),t.stroke()}}),r(this,"updateParticles",()=>{if(!this.context||!this.context.canvas)return;const t=this.context.canvas.width,e=this.context.canvas.height;let i;this.waveAngle+=.01;for(let n=0;n<this.particles.length;n++)i=this.particles[n],!this.isRunning&&i.y<-15?i.y=e+100:(i.tiltAngle+=i.tiltAngleIncrement,i.x+=Math.sin(this.waveAngle)-.5,i.y+=.5*(Math.cos(this.waveAngle)+i.diameter+this.options.speed),i.tilt=15*Math.sin(i.tiltAngle)),(i.x>t+20||i.x<-20||i.y>e)&&(this.isRunning&&this.particles.length<=this.options.maxCount?this.resetParticle(i,t,e):(this.particles.splice(n,1),n--))}),this.options=s(s({},o),t)}}}}]);