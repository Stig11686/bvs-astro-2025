(function(){
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

// split headings into masked words
function split(el){
  const out=[];
  [...el.childNodes].forEach(n=>{
    if(n.nodeType===3){n.textContent.split(/(\s+)/).forEach(t=>{if(!t)return;if(/^\s+$/.test(t))out.push(document.createTextNode(' '));else out.push(wrap(document.createTextNode(t)))})}
    else out.push(wrap(n.cloneNode(true)));
  });
  el.innerHTML='';out.forEach(n=>el.appendChild(n));
  $$('.w>span',el).forEach((s,i)=>s.style.transitionDelay=(i*0.06)+'s');
}
function wrap(node){const w=document.createElement('span');w.className='w';const s=document.createElement('span');s.appendChild(node);w.appendChild(s);return w}
$$('.split').forEach(split);window.__split=split;

// reveal on view
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);e.target.dispatchEvent(new Event('inview'))}}),{threshold:.2,rootMargin:'0px 0px -8% 0px'});
$$('.split,.rv,.r-grid,#scan').forEach(el=>{if(!el.closest('#heroes'))io.observe(el)});
$$('#checks li').forEach((li,i)=>{li.querySelector('path').style.transitionDelay=(i*.18+.2)+'s';io.observe(li)});

// header hide/show
const hdr=$('#hdr');let lastY=0;
addEventListener('scroll',()=>{const y=scrollY;hdr.classList.toggle('solid',y>40);document.body.classList.toggle('at-top',y<innerHeight*.6);if(!document.body.classList.contains('menu-open'))hdr.classList.toggle('hide',y>lastY&&y>300);lastY=y},{passive:true});

// off-canvas menu
const burger=$('#burger'),menu=$('#menu'),links=$$('.mlist a');
function setMenu(open){
  document.body.classList.toggle('menu-open',open);
  burger.setAttribute('aria-expanded',open);menu.setAttribute('aria-hidden',!open);
  $('.bl',burger).textContent=open?'Close':'Menu';
  links.forEach((a,i)=>a.style.transitionDelay=open?(0.18+i*0.05)+'s':'0s');
  if(open)setTimeout(()=>links[0].focus({preventScroll:true}),350);else burger.focus({preventScroll:true});
}
burger.onclick=()=>setMenu(!document.body.classList.contains('menu-open'));
$('#scrim').onclick=()=>setMenu(false);
links.forEach(a=>a.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('menu-open'))setMenu(false)});

// pillars accordion
$$('.pi').forEach(pi=>{$('.pi-btn',pi).onclick=()=>{const was=pi.classList.contains('open');$$('.pi').forEach(p=>{p.classList.remove('open');$('.pi-btn',p).setAttribute('aria-expanded','false')});if(!was){pi.classList.add('open');$('.pi-btn',pi).setAttribute('aria-expanded','true')}}});
$$('[data-pick]').forEach(a=>a.addEventListener('click',()=>{const s=$('#why');s.value=a.dataset.pick;const w=$('#selWrap');w.classList.remove('flash');void w.offsetWidth;w.classList.add('flash')}));

// contact form
$('#cform').addEventListener('submit',e=>{e.preventDefault();const b=$('#send');b.classList.add('sent');b.innerHTML='Sent <span class="arr">✓</span>';e.target.classList.add('done')});

// audit scan
$('#scan').addEventListener('inview',()=>{
  const url='yourbusiness.co.uk',el=$('#scanUrl');let i=0;el.textContent='';
  const t=setInterval(()=>{el.textContent=url.slice(0,++i);if(i>=url.length)clearInterval(t)},60);
  const score=64,C=377;$('#ringFg').style.strokeDashoffset=C-C*score/100;
  let n=0;const s=setInterval(()=>{n+=2;$('#ringN').textContent=Math.min(n,score);if(n>=score)clearInterval(s)},30);
});

// reviews
const R=[
 {q:"My website crashed after a TikTok went viral with over 200,000 views. Steve looked at it immediately and got it back up and running straight away.",n:'Elizabeth Matfin',r:'Maidens & Ravens Bridal Boutique, York'},
 {q:"I've had poor experiences with website designers before. Limited help, slow responses, and charged a fortune for small tasks. Steve is the opposite. I've no plans to use anyone else.",n:'Elizabeth Matfin',r:'Maidens & Ravens Bridal Boutique, York'},
 {q:"Steve is fantastic! He created a beautiful website for my skin clinic. The finished result looks extremely professional, slick and stylish. Steve couldn't have been more accommodating and helpful. He went out of his way to make sure my website was just as I wanted!",n:'Rebecca Rennolds',r:'Owner, Rebecca Rennolds Permanent Beauty & Laser'}
];
const stage=$('#qstage');
stage.innerHTML=R.map(x=>`<figure class="q"><blockquote class="qb">“${x.q}”</blockquote><figcaption><div><div class="stars">★★★★★</div><b>${x.n}</b><span>${x.r}</span></div></figcaption></figure>`).join('');
$$('.qb',stage).forEach(b=>{split(b);$$('.w>span',b).forEach((s,i)=>s.style.transitionDelay=(i*0.018)+'s')});
let ri=0,rt;const qs=$$('.q',stage),bar=$('#rBar');
function showR(i){ri=(i+R.length)%R.length;qs.forEach((q,k)=>q.classList.toggle('on',k===ri));$('#rCount').textContent=String(ri+1).padStart(2,'0')+' / '+String(R.length).padStart(2,'0');
  if(window.gsap){gsap.killTweensOf(bar);gsap.fromTo(bar,{scaleX:0},{scaleX:1,duration:8,ease:'none'})}
  clearTimeout(rt);rt=setTimeout(()=>showR(ri+1),8000)}
$('#rPrev').onclick=()=>showR(ri-1);$('#rNext').onclick=()=>showR(ri+1);
showR(0);

// chevron draw-in
$$('.chev').forEach((c,i)=>{const L=c.getTotalLength();c.style.strokeDasharray=L;c.style.strokeDashoffset=L;c.style.transition=`stroke-dashoffset 1s cubic-bezier(.2,.8,.2,1) ${.5+i*.2}s`;requestAnimationFrame(()=>requestAnimationFrame(()=>c.style.strokeDashoffset=0))});

// mouse parallax
const shapes=$('#shapes'),floats=$$('.float');
if(!reduce)addEventListener('pointermove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
  if(window.gsap){gsap.to('#gA',{x:x*-18,y:y*-18,duration:1,ease:'power3.out'});gsap.to('#gB',{x:x*26,y:y*26,duration:1,ease:'power3.out'});floats.forEach(f=>gsap.to(f,{x:x*f.dataset.depth,y:y*f.dataset.depth,duration:1.2,ease:'power3.out'}))}});

if(!window.gsap||reduce)return;
gsap.registerPlugin(ScrollTrigger);

// hero morph on scroll: logo shapes stretch into slashes
const P=s=>s.trim().split(/\s+/).map(p=>p.split(',').map(Number));
const A0=P('60,200 340,200 290,480 60,480'),A1=P('150,-40 250,-40 110,640 10,640');
const B0=P('380,100 580,100 580,380 330,380'),B1=P('470,-80 570,-80 430,600 330,600');
const lerp=(a,b,t)=>a.map((p,i)=>[p[0]+(b[i][0]-p[0])*t,p[1]+(b[i][1]-p[1])*t].join(',')).join(' ');
const pA=$('#pA'),pB=$('#pB'),cA=$('#cA'),cB=$('#cB');
if(shapes)ScrollTrigger.create({trigger:'#hero',start:'top top',end:'bottom top',scrub:.6,onUpdate:s=>{const t=gsap.parseEase('power2.inOut')(s.progress);
  pA.setAttribute('points',lerp(A0,A1,t));pB.setAttribute('points',lerp(B0,B1,t));
  cA.style.opacity=cB.style.opacity=1-Math.min(1,t*2.2);
  shapes.style.transform=`translateY(${t*120}px) rotate(${t*-6}deg)`}});


// pinned horizontal work scroll (desktop)
ScrollTrigger.matchMedia({'(min-width: 901px)':()=>{
  const track=$('#track');const dist=()=>Math.max(0,track.scrollWidth-innerWidth);
  gsap.to(track,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:'#trackWrap',start:'center center',end:()=>'+='+dist(),pin:'#work',pinSpacing:true,scrub:.8,invalidateOnRefresh:true,anticipatePin:1}});
}});
})();
