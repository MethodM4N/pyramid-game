(()=>{"use strict";var e,n,t,i,o,r,s;window.focus();var d,a,h,c=document.getElementById("score"),p=document.getElementById("instructions"),w=document.getElementById("results");function l(e,n,t,i,o){var s=u(e,1*r.length,n,t,i,!1);s.direction=o,r.push(s)}function u(e,t,o,s,d,a){var h=new THREE.BoxGeometry(s,1,d),c=new THREE.Color("hsl(".concat(30+4*r.length,", 100%, 50%)")),p=new THREE.MeshLambertMaterial({color:c}),w=new THREE.Mesh(h,p);w.position.set(e,t,o),n.add(w);var l=new CANNON.Box(new CANNON.Vec3(s/2,.5,d/2)),u=a?5:0;u*=s/3,u*=d/3;var v=new CANNON.Body({mass:u,shape:l});return v.position.set(e,t,o),i.addBody(v),{threejs:w,cannonjs:v,width:s,depth:d}}function v(e,n,t,i){var o=u(e,1*(r.length-1),n,t,i,!0);s.push(o)}function f(){if(d=!1,a=!1,o=0,r=[],s=[],p&&(p.style.display="none"),w&&(w.style.display="none"),c&&(c.innerText=0),i)for(;i.bodies.length>0;)i.remove(i.bodies[0]);if(n){for(;n.children.find((function(e){return"Mesh"==e.type}));){var t=n.children.find((function(e){return"Mesh"==e.type}));n.remove(t)}l(0,0,3,3),l(-10,0,3,3,"x")}e&&(e.position.set(4,4,4),e.lookAt(0,0,0))}function E(){d?f():j()}function j(){if(!a){var e=r[r.length-1],n=r[r.length-2],t=e.direction,i="x"==t?e.width:e.depth,o=e.threejs.position[t]-n.threejs.position[t],s=Math.abs(o),d=i-s;if(d>0){!function(e,n,t,i){var o=e.direction,r="x"==o?n:e.width,s="z"==o?n:e.depth;e.width=r,e.depth=s,e.threejs.scale[o]=n/t,e.threejs.position[o]-=i/2,e.cannonjs.position[o]-=i/2;var d=new CANNON.Box(new CANNON.Vec3(r/2,.5,s/2));e.cannonjs.shapes=[],e.cannonjs.addShape(d)}(e,d,i,o);var h=(d/2+s/2)*Math.sign(o);v("x"==t?e.threejs.position.x+h:e.threejs.position.x,"z"==t?e.threejs.position.z+h:e.threejs.position.z,"x"==t?s:e.width,"z"==t?s:e.depth);var p="x"==t?e.threejs.position.x:-10,w="z"==t?e.threejs.position.z:-10,u=e.width,f=e.depth,E="x"==t?"z":"x";c&&(c.innerText=r.length-1),l(p,w,u,f,E)}else y()}}function y(){var e=r[r.length-1];v(e.threejs.position.x,e.threejs.position.z,e.width,e.depth),i.remove(e.cannonjs),n.remove(e.threejs),a=!0,w&&!d&&(w.style.display="flex")}function g(c){if(o){var p=c-o,w=.008,l=r[r.length-1],u=r[r.length-2];a||d&&!(d&&l.threejs.position[l.direction]<u.threejs.position[l.direction]+h)?d&&(j(),h=1*Math.random()-.5):(l.threejs.position[l.direction]+=w*p,l.cannonjs.position[l.direction]+=w*p,l.threejs.position[l.direction]>10&&y()),e.position.y<1*(r.length-2)+4&&(e.position.y+=w*p),function(e){i.step(e/1e3),s.forEach((function(e){e.threejs.position.copy(e.cannonjs.position),e.threejs.quaternion.copy(e.cannonjs.quaternion)}))}(p),t.render(n,e)}o=c}!function(){d=!0,a=!1,o=0,r=[],s=[],h=1*Math.random()-.5,(i=new CANNON.World).gravity.set(0,-10,0),i.broadphase=new CANNON.NaiveBroadphase,i.solver.iterations=40;var c=10/(window.innerWidth/window.innerHeight);(e=new THREE.OrthographicCamera(-5,5,c/2,c/-2,0,100)).position.set(4,4,4),e.lookAt(0,0,0),n=new THREE.Scene,l(0,0,3,3),l(-10,0,3,3,"x");var p=new THREE.AmbientLight(16777215,.6);n.add(p);var w=new THREE.DirectionalLight(16777215,.6);w.position.set(10,20,0),n.add(w),(t=new THREE.WebGLRenderer({antialias:!0})).setSize(window.innerWidth,window.innerHeight),t.setAnimationLoop(g),document.body.appendChild(t.domElement),t.render(n,e)}(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)?window.addEventListener("touchstart",E):window.addEventListener("mousedown",E),window.addEventListener("touchmove",f),window.addEventListener("keydown",(function(e){return" "==e.key?(e.preventDefault(),void E()):"R"==e.key||"r"==e.key||"к"==e.key||"К"==e.key?(e.preventDefault(),void f()):void 0})),window.addEventListener("resize",(function(){var i=10/(window.innerWidth/window.innerHeight);e.top=i/2,e.bottom=i/-2,t.setSize(window.innerWidth,window.innerHeight),t.render(n,e)}))})();