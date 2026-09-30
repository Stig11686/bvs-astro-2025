(function(){
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const B=document.body;let cur=null,timers=[],slide;
const later=(f,ms)=>timers.push(setTimeout(f,ms));
const reveal=sec=>$$('.split,.rv',sec).forEach(el=>el.classList.add('is-in'));
function draw(el,delay){const L=el.getTotalLength();el.style.transition='none';el.style.strokeDasharray=L;el.style.strokeDashoffset=L;void el.getBoundingClientRect();el.style.transition=`stroke-dashoffset .8s cubic-bezier(.2,.8,.2,1) ${delay}s`;el.style.strokeDashoffset=0}
function slideshow(sec){clearInterval(slide);const im=$$('.hc-frame img',sec);let i=0;im.forEach(x=>x.classList.remove('on'));im[0].classList.add('on');slide=setInterval(()=>{im[i].classList.remove('on');i=(i+1)%im.length;im[i].classList.add('on')},3600)}
window.setHero=function(v,replay){
  if(v===cur&&!replay)return;cur=v;
  timers.forEach(clearTimeout);timers=[];clearInterval(slide);
  B.dataset.hero=v;B.classList.remove('curtain-on');
  const sec=$(`#heroes [data-v="${v}"]`);if(!sec)return;
  if(replay)window.scrollTo(0,0);
  sec.classList.remove('play','open');$$('.split,.rv',sec).forEach(el=>el.classList.remove('is-in'));
  void sec.offsetWidth;
  if(v==='shutter'){requestAnimationFrame(()=>sec.classList.add('play'));later(()=>reveal(sec),800)}
  else if(v==='reel'){requestAnimationFrame(()=>sec.classList.add('play'));later(()=>reveal(sec),300)}
  else if(v==='curtain'){B.classList.add('curtain-on');$$('.cchev',sec).forEach((c,i)=>draw(c,.25+i*.15));later(()=>sec.classList.add('open'),1300);later(()=>{reveal(sec);slideshow(sec)},1650);later(()=>B.classList.remove('curtain-on'),1900)}
  else{$$('.chev',sec).forEach((c,i)=>draw(c,.3+i*.2));later(()=>reveal(sec),120)}
  if(window.ScrollTrigger)requestAnimationFrame(()=>ScrollTrigger.refresh());
};

if(window.gsap&&window.ScrollTrigger&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const st=t=>({trigger:t,start:'top top',end:'bottom top',scrub:.6});
  gsap.to('.hx-shutter .sA>g',{x:-340,ease:'none',scrollTrigger:st('.hx-shutter')});
  gsap.to('.hx-shutter .sB>g',{x:340,ease:'none',scrollTrigger:st('.hx-shutter')});
  gsap.to('.hx-shutter .hx-copy',{y:-80,opacity:.2,ease:'none',scrollTrigger:st('.hx-shutter')});
  gsap.set('.reel',{rotation:-10});
  gsap.to('.reel',{scale:1.3,rotation:-4,ease:'none',scrollTrigger:st('.hx-reel')});
  gsap.to('.hx-reel .hx-copy',{y:-80,opacity:.2,ease:'none',scrollTrigger:st('.hx-reel')});
  gsap.to('.hc-frame-wrap',{yPercent:-12,ease:'none',scrollTrigger:st('.hx-curtain')});
  gsap.to('.hc-acc.a',{x:-40,y:40,ease:'none',scrollTrigger:st('.hx-curtain')});
  gsap.to('.hc-acc.b',{x:40,y:-40,ease:'none',scrollTrigger:st('.hx-curtain')});
}
window.setHero(B.dataset.hero||'shutter');
})();
