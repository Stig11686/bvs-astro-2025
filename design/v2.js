(function(){
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const B=document.body,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(pointer:fine)').matches;
const hasG=!!window.gsap;if(hasG)gsap.registerPlugin(ScrollTrigger);

// rolling labels
$$('.lbl').forEach(l=>{const t=l.textContent;l.innerHTML=`<span class="roll"><span data-t="${t.replace(/"/g,'&quot;')}">${t}</span></span>`});

// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!e.target.classList.contains('in')){e.target.classList.add('in');io.unobserve(e.target);e.target.dispatchEvent(new Event('inview'))}}),{threshold:.18});
const pend=new Set($$('.rv,#checks li'));pend.forEach(el=>io.observe(el));
function chk(){pend.forEach(el=>{if(el.classList.contains('in')){pend.delete(el);return}const r=el.getBoundingClientRect();if(r.top<innerHeight*.9&&r.bottom>0){el.classList.add('in');el.dispatchEvent(new Event('inview'));pend.delete(el)}})}
addEventListener('scroll',chk,{passive:true});setTimeout(chk,400);
$$('#checks li').forEach((li,i)=>li.querySelector('path').style.transitionDelay=(.2+i*.15)+'s');

// header
const hdr=$('#hdr');let lastY=0;
addEventListener('scroll',()=>{const y=scrollY;hdr.classList.toggle('solid',y>30);B.classList.toggle('at-top',y<innerHeight*.7);if(!B.classList.contains('menu-open'))hdr.classList.toggle('hide',y>lastY&&y>400);lastY=y},{passive:true});

// menu
const mbtn=$('#mbtn'),menu=$('#menu'),mlinks=$$('.mlist a');
function setMenu(o){B.classList.toggle('menu-open',o);mbtn.setAttribute('aria-expanded',o);menu.setAttribute('aria-hidden',!o);
  const r=$('#mlbl .roll>span');r.textContent=o?'Close':'Menu';r.dataset.t=o?'Close':'Menu';
  mlinks.forEach((a,i)=>a.style.transitionDelay=o?(.16+i*.045)+'s':'0s');
  if(o)setTimeout(()=>mlinks[0].focus({preventScroll:true}),400)}
mbtn.onclick=()=>setMenu(!B.classList.contains('menu-open'));
$('#scrim').onclick=()=>setMenu(false);
mlinks.forEach(a=>a.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',e=>{if(e.key==='Escape'&&B.classList.contains('menu-open')){setMenu(false);mbtn.focus()}});

// pill image cycle


// marquees
const items=[['Website Design',0],['Website Rescue',1],['Care Plans',0],['Free Audits',1],['Made in Yorkshire',0]];
$$('.mq').forEach((m,k)=>{const bs=m.closest('.bands');const its=bs&&bs.dataset.items?bs.dataset.items.split('|').map((t,i)=>[t,i%2]):items;const seq=(k?its:[...its].reverse()).map(([t,e])=>`<span>${e?`<em>${t}</em>`:t}<b class="t"><i></i><i></i></b></span>`).join('');m.innerHTML=seq+seq+seq+seq});
if(hasG&&!reduce){let vel=0;const mqs=$$('.mq').map(m=>({el:m,x:0,dir:+m.dataset.dir}));
  ScrollTrigger.create({onUpdate:s=>{vel=s.getVelocity()/140}});
  gsap.ticker.add(()=>{vel*=.92;mqs.forEach(o=>{const w=o.el.scrollWidth/4;o.x-=(1.1+Math.abs(vel))*o.dir*(vel<-0.5?-1:1);if(o.x<-w)o.x+=w;if(o.x>0)o.x-=w;o.el.style.transform=`translateX(${o.x}px)`})})}

// statement words
const st=$('#stmt');if(st){
(function wrapWords(node){[...node.childNodes].forEach(n=>{if(n.nodeType===3){const f=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(t=>{if(!t)return;if(/^\s+$/.test(t))f.appendChild(document.createTextNode(t));else{const s=document.createElement('span');s.className='wd';s.textContent=t;f.appendChild(s)}});n.replaceWith(f)}else wrapWords(n)})})(st);
$$('.it',st).forEach(e=>e.querySelectorAll('.wd').forEach(w=>w.classList.add('itw')));
const wds=$$('.wd',st);
if(hasG&&!reduce){ScrollTrigger.create({trigger:st,start:'top 80%',end:'bottom 45%',scrub:true,onUpdate:s=>{const n=Math.round(s.progress*wds.length);wds.forEach((w,i)=>{const on=i<n;w.classList.toggle('lit',on);if(w.classList.contains('itw'))w.style.color=on?'var(--acc)':''})}})}
else wds.forEach(w=>w.classList.add('lit'));}

// hero intro
const squig=$('#squig');if(squig){const L=squig.getTotalLength();squig.style.strokeDasharray=L;squig.style.strokeDashoffset=L;
if(hasG&&!reduce){
  const tl=gsap.timeline({delay:.15});
  tl.from('.ln>span',{yPercent:110,duration:1,ease:'power4.out',stagger:.1})
    .to(squig,{strokeDashoffset:0,duration:.8,ease:'power2.out'},'-=.3')
    .from('.hero-side>*',{y:30,opacity:0,duration:.8,ease:'power3.out',stagger:.08},'-=.7')
    .from('.collage .stk',{scale:0,opacity:0,duration:.9,ease:'back.out(1.8)',stagger:.12},'-=1.1')
    .from('.bgshape',{scaleY:0,transformOrigin:'bottom',duration:1.2,ease:'power4.out',stagger:.1},0);
  setTimeout(()=>{if(tl.progress()<1)tl.progress(1)},3200);
  $$('[data-par]').forEach(el=>gsap.to(el,{y:+el.dataset.par*3,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}}));
  gsap.to('#collage',{y:-120,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
}else squig.style.strokeDashoffset=0;}
if(hasG&&!reduce&&$('.ph-hero')){gsap.from('.ph-hero .ln>span',{yPercent:110,duration:1,ease:'power4.out',stagger:.08,delay:.1});gsap.from('.ph-hero .ph-in>*:not(h1)',{y:26,opacity:0,duration:.8,ease:'power3.out',stagger:.08,delay:.45});gsap.from('.ph-hero .bgshape',{scaleY:0,transformOrigin:'bottom',duration:1.2,ease:'power4.out',stagger:.1})}

// draggable stickers
$$('.stk').forEach(el=>{let sx,sy,ox=0,oy=0,drag=false,moved=false;
  el.addEventListener('pointerdown',e=>{drag=true;moved=false;sx=e.clientX-ox;sy=e.clientY-oy;el.setPointerCapture(e.pointerId);el.style.zIndex=10;el.style.transition='none'});
  el.addEventListener('pointermove',e=>{if(!drag)return;ox=e.clientX-sx;oy=e.clientY-sy;if(Math.abs(ox)+Math.abs(oy)>4)moved=true;el.style.translate=`${ox}px ${oy}px`});
  const up=()=>{if(!drag)return;drag=false;el.classList.remove('wob');void el.offsetWidth;el.classList.add('wob')};
  el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);
  el.addEventListener('click',e=>{if(moved){e.preventDefault();moved=false}});
  el.addEventListener('dragstart',e=>e.preventDefault())});

// pillar stack
if(hasG&&!reduce){const cards=$$('.pc');cards.forEach((c,i)=>{if(i===cards.length-1)return;
  gsap.to(c,{scale:.93-(cards.length-2-i)*0.0,filter:'brightness(.82)',ease:'none',scrollTrigger:{trigger:cards[i+1],start:'top bottom',end:'top '+(110+(i+1)*26)+'px',scrub:true}})})}
$$('[data-pick]').forEach(a=>a.addEventListener('click',()=>{if(!$('#why'))return;$('#why').value=a.dataset.pick;const w=$('#selWrap');w.classList.remove('flash');void w.offsetWidth;w.classList.add('flash')}));

// horizontal work
if(hasG&&!reduce&&$('#track'))ScrollTrigger.matchMedia({'(min-width: 1001px)':()=>{const tr=$('#track');const d=()=>Math.max(0,tr.scrollWidth-innerWidth);
  gsap.to(tr,{x:()=>-d(),ease:'none',scrollTrigger:{trigger:'#work',start:'top top',end:()=>'+='+d(),pin:true,scrub:.8,invalidateOnRefresh:true,anticipatePin:1}})}});

// audit
$('#scan')&&$('#scan').addEventListener('inview',()=>{const u='yourbusiness.co.uk',el=$('#surl');let i=0;el.textContent='';const t=setInterval(()=>{el.textContent=u.slice(0,++i);if(i>=u.length)clearInterval(t)},60);
  const sc=64;$('#rfg').style.strokeDashoffset=377-377*sc/100;let n=0;const s=setInterval(()=>{n+=2;$('#rn').textContent=Math.min(n,sc);if(n>=sc)clearInterval(s)},30)});
$('#aform')&&$('#aform').addEventListener('submit',e=>{e.preventDefault();const b=e.target.querySelector('button');b.querySelector('.roll>span').textContent="Thanks, it's on my list ✓";burst(b)});

// review deck
const deck=$('#deck');if(deck){let qcs=$$('.qc',deck);
const pose=[{r:-2,y:0,s:1},{r:5,y:14,s:.96},{r:-7,y:26,s:.92}];
function layout(anim){qcs.forEach((c,k)=>{const p=pose[Math.min(k,2)];c.style.zIndex=10-k;const tf=`translate(0px,${p.y}px) rotate(${p.r}deg) scale(${p.s})`;c.style.transition=anim?'transform .6s cubic-bezier(.34,1.56,.64,1)':'none';c.style.transform=tf})}
layout(false);
function throwTop(dir=1){const c=qcs[0];c.style.transition='transform .45s cubic-bezier(.4,0,.2,1)';c.style.transform=`translate(${dir*120}%,-40px) rotate(${dir*22}deg)`;
  setTimeout(()=>{qcs.push(qcs.shift());c.style.zIndex=0;layout(true)},380)}
function back(){const c=qcs.pop();qcs.unshift(c);c.style.transition='none';c.style.transform='translate(-120%,-40px) rotate(-22deg)';c.style.zIndex=11;void c.offsetWidth;layout(true)}
if($('#dnext')){$('#dnext').onclick=()=>throwTop(1);$('#dprev').onclick=back}
deck.addEventListener('pointerdown',e=>{const c=qcs[0];if(!c.contains(e.target))return;let sx=e.clientX,dx=0;c.setPointerCapture(e.pointerId);c.style.transition='none';
  const mv=ev=>{dx=ev.clientX-sx;c.style.transform=`translate(${dx}px,0) rotate(${-2+dx/18}deg)`};
  const up=()=>{c.removeEventListener('pointermove',mv);c.removeEventListener('pointerup',up);if(Math.abs(dx)>110)throwTop(Math.sign(dx));else if(Math.abs(dx)<4)throwTop(1);else layout(true)};
  c.addEventListener('pointermove',mv);c.addEventListener('pointerup',up)});}

// blog floating image
const bf=$('#bfloat'),bimgs=bf?$$('img',bf):[];let bx=0,by=0,tx=0,ty=0,brot=0;
$$('.brow').forEach(r=>{r.addEventListener('mouseenter',()=>{bf.classList.add('on');bimgs.forEach((im,i)=>im.classList.toggle('on',i==r.dataset.img))});r.addEventListener('mouseleave',()=>bf.classList.remove('on'))});

// cursor + magnetic
const cur=$('#cur'),ring=$('#cring'),lab=$('#clab');let mx=-100,my=-100,rx=-100,ry=-100,curOn=fine&&!reduce;
window.setCursor=v=>{curOn=v&&fine&&!reduce;B.classList.toggle('cur-on',curOn)};window.setCursor(true);
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;tx=mx;ty=my});
function loop(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;cur.style.transform=`translate(${mx}px,${my}px)`;ring.style.transform=`translate(${rx}px,${ry}px)`;
  const nbx=bx+(tx-bx)*.12;brot=Math.max(-12,Math.min(12,(nbx-bx)*.6));bx=nbx;by+=(ty-by)*.12;if(bf)bf.style.transform=`translate(${bx+30}px,${by-120}px) rotate(${brot}deg)`;requestAnimationFrame(loop)}loop();
document.addEventListener('pointerover',e=>{const l=e.target.closest('[data-cursor]');const a=e.target.closest('a,button,select,input,textarea');
  ring.classList.toggle('lab',!!l);ring.classList.toggle('hov',!l&&!!a);if(l)lab.textContent=l.dataset.cursor});
if(fine&&!reduce)$$('.mag').forEach(m=>{m.addEventListener('pointermove',e=>{const r=m.getBoundingClientRect();m.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.22}px,${(e.clientY-r.top-r.height/2)*.3}px)`});m.addEventListener('pointerleave',()=>m.style.transform='')});

// contact
$('#cform')&&$('#cform').addEventListener('submit',e=>{e.preventDefault();const b=e.target.querySelector('button[type=submit]');b.querySelector('.roll>span').textContent='Sent ✓';e.target.classList.add('done');burst(b)});
function burst(el){const r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cols=['#6a1a2c','#16365a','#d06a80','#6ba6dd','#fff'];
  for(let i=0;i<28;i++){const s=document.createElement('i');s.className='cf';s.style.left=cx+'px';s.style.top=cy+'px';s.style.background=cols[i%cols.length];document.body.appendChild(s);
    const a=Math.random()*Math.PI*2,d=80+Math.random()*160;
    s.animate([{transform:'translate(-50%,-50%) skewX(-12deg) rotate(0)',opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d-60}px) skewX(-12deg) rotate(${Math.random()*540}deg)`,opacity:1,offset:.6},{transform:`translate(${Math.cos(a)*d*1.2}px,${Math.sin(a)*d+120}px) skewX(-12deg) rotate(${Math.random()*720}deg)`,opacity:0}],{duration:1300+Math.random()*500,easing:'cubic-bezier(.2,.8,.3,1)'}).onfinish=()=>s.remove()}}

// process line
const pl=$('.steps .line path');if(pl){const L2=pl.getTotalLength();pl.style.strokeDasharray=L2;pl.style.strokeDashoffset=L2;
  if(hasG&&!reduce)gsap.to(pl,{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'.steps',start:'top 80%',end:'bottom 60%',scrub:true}});else pl.style.strokeDashoffset=0}
// plan billing toggle
const pt=$('.pill-toggle');if(pt){const bs=$$('button',pt),ind=$('i',pt);
  const put=b=>{ind.style.width=b.offsetWidth+'px';ind.style.transform='translateX('+(b.offsetLeft-5)+'px)'};
  bs.forEach(b=>b.addEventListener('click',()=>{bs.forEach(x=>x.classList.toggle('on',x===b));put(b);const m=b.dataset.bill;
    $$('.plan').forEach(p=>{$('.price',p).innerHTML=p.dataset[m];$('.alt',p).textContent=p.dataset[m+'Alt']})}));
  put($('.on',pt));requestAnimationFrame(()=>put($('.on',pt)));document.fonts&&document.fonts.ready.then(()=>put($('.on',pt)));addEventListener('resize',()=>put($('.on',pt)))}
// accordions
$$('.acc').forEach(acc=>$$('.acc-q',acc).forEach(q=>q.addEventListener('click',()=>{const it=q.parentElement,o=it.classList.contains('open');$$('.acc-i',acc).forEach(x=>{x.classList.remove('open');$('.acc-q',x).setAttribute('aria-expanded','false')});if(!o){it.classList.add('open');q.setAttribute('aria-expanded','true')}})));
// reading progress + toc
const prog=$('#readbar'),art=$('#article');
if(prog&&art){const heads=$$('h2',art),toc=$$('.toc a');
  addEventListener('scroll',()=>{const r=art.getBoundingClientRect();const p=Math.min(1,Math.max(0,-r.top/(r.height-innerHeight)));prog.style.transform='scaleX('+p+')';
    let cur=0;heads.forEach((h,i)=>{if(h.getBoundingClientRect().top<innerHeight*.35)cur=i});toc.forEach((a,i)=>a.classList.toggle('on',i===cur))},{passive:true})}
// blog filter
$$('.fchip').forEach(c=>c.addEventListener('click',()=>{$$('.fchip').forEach(x=>x.classList.toggle('on',x===c));const f=c.dataset.f;$$('.bcard').forEach(b=>{const show=f==='all'||b.dataset.cat===f;b.style.display=show?'':'none'});if(window.ScrollTrigger)ScrollTrigger.refresh()}));
// copy link
$$('[data-copy]').forEach(b=>b.addEventListener('click',()=>{navigator.clipboard&&navigator.clipboard.writeText(location.href);const r=b.querySelector('.roll>span');if(r){r.textContent='Link copied ✓';r.dataset.t='Link copied ✓'}}));
// footer letters
const fb=$('#fbig');if(fb)fb.innerHTML=[...fb.textContent].map(c=>`<span>${c}</span>`).join('');
})();
