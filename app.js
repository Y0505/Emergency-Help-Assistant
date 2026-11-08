const $=id=>document.getElementById(id),home=$("home"),guideView=$("guide");let active="",index=0;
const data={
choking:{title:"Adult choking",intro:"A blocked airway needs quick action.",source:"RESUSCITATION COUNCIL UK · FIRST AID",steps:[
["CHECK THE COUGH","RECOGNISE","Can they cough effectively?","Ask the person to cough. If they can cough strongly, encourage them to keep coughing and watch closely for worsening symptoms.","choking",[["YES — THEY CAN COUGH","mild"],["NO — CANNOT BREATHE / SPEAK","severe"]]],
["HELP THEM COUGH","MILD OBSTRUCTION","Encourage them to keep coughing.","A strong cough is the best way to clear a mild airway blockage. Stay with them and watch for signs that the obstruction is becoming severe.","cough",[["STILL COUGHING EFFECTIVELY","monitor"],["COUGH BECOMES INEFFECTIVE","severe"]]],
["CALL FOR HELP","SEVERE OBSTRUCTION","Call 999. Put the phone on speaker.","If they cannot breathe, speak or cough effectively, treat this as severe choking. Ask someone to call 999 while you help, or call on speakerphone.","call",null,"Give up to five back blows. Check after each attempt whether the blockage has cleared."],
["BACK BLOWS","SEVERE OBSTRUCTION","Give up to five back blows.","Lean the person forwards and support their chest. Give up to five sharp blows between the shoulder blades with the heel of your hand. Check after each one.","back",null,"If back blows do not clear the blockage, move to abdominal thrusts."],
["ABDOMINAL THRUSTS","SEVERE OBSTRUCTION","Give up to five abdominal thrusts.","Stand behind the person. Place a fist between the navel and the bottom of the breastbone, grasp it with your other hand and pull sharply inwards and upwards. Check after each thrust.","thrust",null,"If the blockage remains, alternate up to five back blows and up to five abdominal thrusts. Follow the 999 call handler."],
["IF THEY COLLAPSE","EMERGENCY","If they become unresponsive, start CPR.","Carefully lower them to the floor. Call 999 if not already done. Start CPR and follow the call handler's instructions. Do not perform a blind finger sweep.","cpr",null,"Anyone who has needed abdominal thrusts or chest compressions for choking should receive medical assessment."],
["AFTER THE EVENT","MEDICAL ASSESSMENT","Get medical assessment.","Medical assessment is recommended after abdominal thrusts or chest compressions, because injury can occur. This guide is for adults only.","check"]]},
bleeding:{title:"Severe bleeding",intro:"Heavy bleeding needs immediate pressure and emergency help.",source:"RESUSCITATION COUNCIL UK · FIRST AID",steps:[
["MAKE IT SAFE","FIRST ACTION","Check safety. Call 999.","Make sure it is safe to approach. Severe or life-threatening bleeding needs emergency help. Ask someone to call 999, or call on speakerphone.","call",null,"If possible, put on disposable gloves or use a barrier. Do not put yourself at risk."],
["DIRECT PRESSURE","CONTROL BLEEDING","Press firmly on the wound.","Apply firm, direct pressure to the bleeding area using a dressing or clean material. Keep pressure directly over the source of bleeding.","pressure",null,"Maintain firm pressure. Follow the emergency call handler's instructions."],
["KEEP PRESSURE","WHILE HELP IS COMING","Keep pressure on. Stay with them.","Maintain direct pressure while waiting for emergency help. Help the person lie down if appropriate, keep them warm and monitor responsiveness and breathing.","pressure",null,"If they become unresponsive or are not breathing normally, tell the call handler immediately."],
["TOURNIQUET","SPECIALIST ACTION","A tourniquet may be needed.","For life-threatening bleeding from an arm or leg that is not controlled by direct pressure, a tourniquet may be required. Use one if trained or instructed by the emergency call handler.","tourniquet",null,"If applied, note the time. Do not loosen or remove it yourself."]]},
cpr:{title:"Unresponsive",intro:"Unresponsive and not breathing normally? Treat it as an emergency.",source:"RESUSCITATION COUNCIL UK · ADULT BLS",steps:[
["CHECK SAFETY","FIRST ACTION","Make sure the area is safe.","Check for danger to you, the person and anyone nearby. Approach only when it is safe.","check",null,"Check whether the person responds when you speak loudly and gently shake their shoulders."],
["CHECK RESPONSE","RECOGNISE","Are they responding?","Speak loudly and gently shake their shoulders. If they do not respond, shout for help.","unresponsive",null,"Open the airway and assess breathing. Do not spend more than 10 seconds checking."],
["CALL 999","GET HELP","Call 999. Use speakerphone.","If they are unresponsive, call 999. Put the phone on speaker so the call handler can guide you. Ask someone to find an AED if available.","call",null,"Assess breathing. Occasional gasps, slow laboured breaths or irregular gasping are not normal breathing."],
["CHECK BREATHING","ASSESS","Are they breathing normally?","Open the airway and look, listen and feel for normal breathing for no more than 10 seconds. If in doubt, treat it as abnormal and follow the call handler.","breathing",[["YES — BREATHING NORMALLY","normal"],["NO — NOT BREATHING NORMALLY","abnormal"]]],
["RECOVERY POSITION","IF BREATHING NORMALLY","Place them in the recovery position.","If they are unresponsive but breathing normally, place them in the recovery position if appropriate. Keep checking breathing and follow the call handler.","recovery",[["STILL BREATHING NORMALLY","monitor"],["BREATHING BECOMES ABNORMAL","abnormal"]]],
["START CPR","IF NOT BREATHING NORMALLY","Start chest compressions now.","Place the heel of one hand in the centre of the chest, put your other hand on top and interlock your fingers. Keep arms straight. Push down 5–6 cm at 100–120 compressions per minute.","cpr",null,"If trained and able, give 30 compressions followed by 2 rescue breaths. If not trained or unable, give continuous chest compressions. Follow the call handler."],
["USE AN AED","WHEN AVAILABLE","Switch on the AED and follow it.","If an automated external defibrillator arrives, switch it on and follow its spoken and visual prompts. Do not touch the person while it analyses or delivers a shock.","aed",null,"Continue until help takes over, the person shows signs of life, you cannot continue, or the scene becomes unsafe."]]},
stroke:{title:"Possible stroke",intro:"A sudden change in face, arm or speech can be a stroke.",source:"RESUSCITATION COUNCIL UK · FIRST AID",steps:[
["FACE","FAST CHECK","Has their face drooped?","Ask them to smile. Does one side of the face droop, or does their smile look uneven?","face",null,"A new facial weakness can be a warning sign. Continue the FAST check, but do not delay calling 999 if you suspect a stroke."],
["ARMS","FAST CHECK","Can they raise both arms?","Ask them to raise both arms and keep them raised. Does one arm drift down or can they not lift it?","arms",null,"Sudden weakness in one arm is a warning sign. Do not delay emergency help."],
["SPEECH","FAST CHECK","Is their speech unusual?","Ask them to say a simple sentence. Is their speech slurred, confused or difficult to understand?","speech",null,"A sudden speech problem is a warning sign. Call 999 immediately if any FAST sign is present."],
["TIME","ACT NOW","Call 999. Note when symptoms began.","A suspected stroke is an emergency. Call 999 immediately, even if symptoms improve or disappear. Note when symptoms started or when the person was last seen well.","call",null,"Do not drive them yourself. Monitor breathing and follow the emergency call handler."]]},
burns:{title:"Burns",intro:"A burn or scald may need urgent first aid and medical assessment.",source:"FIRST-AID DEMONSTRATION · CLINICAL REVIEW REQUIRED",steps:[
["GET HELP","FIRST ACTION","Call 999 for a serious or life-threatening burn.","If the person is seriously injured, has difficulty breathing, or you are worried about their condition, call 999. Follow the call handler’s instructions.","call",null,"Do not delay emergency help to use this guide."],
["COOL THE BURN","FIRST AID","Use cool running water if safe to do so.","For a burn, use cool or lukewarm running water and follow the emergency call handler’s advice. Do not use ice or apply creams as a substitute for medical advice.","check",null,"This brief prototype guidance must be checked against current UK clinical guidance before use."]]},
seizure:{title:"Seizure",intro:"Keep the person safe and get emergency help when needed.",source:"FIRST-AID DEMONSTRATION · CLINICAL REVIEW REQUIRED",steps:[
["MAKE THE AREA SAFE","DURING A SEIZURE","Protect them from nearby hazards.","Move nearby objects away if you can do so safely. Do not restrain the person and do not put anything in their mouth.","check",null,"Time the seizure if possible. Call 999 if it is their first seizure, lasts more than 5 minutes, repeats without recovery, or they are injured or having difficulty breathing."],
["WHEN IT STOPS","AFTER THE SEIZURE","Check their breathing and responsiveness.","Stay with them and follow the emergency call handler’s instructions. If they are unresponsive or not breathing normally, call 999 immediately.","call",null,"This short guide is not a substitute for seizure first-aid training or clinical advice."]]},
allergy:{title:"Severe allergic reaction",intro:"A suspected severe allergic reaction is a medical emergency.",source:"FIRST-AID DEMONSTRATION · CLINICAL REVIEW REQUIRED",steps:[
["RECOGNISE THE EMERGENCY","ANAPHYLAXIS","Call 999 immediately if a severe reaction is suspected.","A rapidly developing severe allergic reaction can be life-threatening. Call 999 and say you suspect anaphylaxis.","call",null,"Follow the call handler’s instructions. If the person has prescribed emergency medication, tell the call handler and follow their guidance."],
["STAY WITH THEM","WHILE HELP IS COMING","Monitor them and follow emergency advice.","Stay with the person, monitor their breathing and responsiveness, and follow the emergency call handler’s instructions.","check",null,"This brief prototype guidance must be checked against current UK clinical guidance before use."]]},
fracture:{title:"Suspected fracture",intro:"A suspected broken bone needs careful handling and assessment.",source:"FIRST-AID DEMONSTRATION · CLINICAL REVIEW REQUIRED",steps:[
["CHECK FOR DANGER","FIRST ACTION","Make sure the area is safe.","Do not put yourself or the injured person at further risk. Call 999 for a serious injury, major bleeding, severe pain, deformity, or if you are unsure.","call",null,"Follow the emergency call handler’s instructions."],
["SUPPORT THE INJURY","WHILE WAITING","Keep the injured area as still as possible.","Help the person stay still and comfortable. Do not try to straighten the limb or push a bone back into place. Follow professional advice.","check",null,"This short guide does not replace assessment by a medical professional."]]}

};
const art={
choking:'<circle cx="180" cy="70" r="34" fill="#d49a79"/><path d="M147 65q7-47 48-35 22 7 20 37-22-8-34-27-12 22-34 25" fill="#2c433d"/><path d="M113 238q7-101 67-101t67 101" fill="#4c6d60"/><path d="M143 127q37 35 74 0" fill="none" stroke="#bd795d" stroke-width="10" stroke-linecap="round"/><path d="M162 130l18 16 18-16" fill="none" stroke="#d94f43" stroke-width="6"/>',
cough:'<circle cx="180" cy="78" r="38" fill="#d49a79"/><path d="M142 70q7-48 49-34 23 8 26 37-25-9-37-29-13 22-38 26" fill="#2c433d"/><path d="M102 245q8-111 78-111t78 111" fill="#4c6d60"/><path d="M248 70h31m-22-12 12 12-12 12" stroke="#d94f43" stroke-width="4" fill="none"/>',
call:'<rect x="115" y="42" width="130" height="176" rx="18" fill="#293c37"/><rect x="125" y="55" width="110" height="145" rx="9" fill="#e9eee5"/><circle cx="180" cy="115" r="36" fill="#d84d43"/><path d="M163 105q3-8 10-3l8 8 9-8q8-5 11 3 2 7-4 13l-16 15-16-15q-5-6-2-13" fill="#fff"/><text x="180" y="177" text-anchor="middle" font-size="13" font-family="monospace" fill="#263c37">999</text>',
back:'<circle cx="116" cy="75" r="25" fill="#d49a79"/><path d="M92 104q40-20 68 8l34 66-45 19-55-56z" fill="#4b6b5f"/><path d="M135 115q62-10 93 32l-24 28q-34-22-62-11" fill="#d49a79"/><path d="M214 39l-17 43m4-29 13 15" stroke="#d84d43" stroke-width="7" stroke-linecap="round"/>',
thrust:'<circle cx="180" cy="49" r="25" fill="#d49a79"/><path d="M126 238q7-151 54-151t54 151" fill="#4c6d60"/><path d="M143 111q37 31 74 0" fill="none" stroke="#d49a79" stroke-width="15"/><rect x="158" y="145" width="44" height="35" rx="8" fill="#d84d43"/><path d="M180 182v-18m-9 9 9-9 9 9" stroke="#fff" stroke-width="4" fill="none"/>',
cpr:'<path d="M48 178q45-49 113-49t151 49" fill="#d49a79"/><circle cx="91" cy="122" r="23" fill="#d49a79"/><path d="M71 120q10-30 39-19" stroke="#2c433d" stroke-width="13" stroke-linecap="round"/><path d="M110 170q37-39 83-23l27 34" fill="none" stroke="#4b6b5f" stroke-width="24"/><path d="M174 76l-6 53m31-53 6 53" stroke="#d49a79" stroke-width="13"/><path d="M161 128h51" stroke="#d84d43" stroke-width="10"/><path d="M186 155v29m-10-10 10 10 10-10" stroke="#d84d43" stroke-width="4" fill="none"/>',
check:'<circle cx="180" cy="75" r="32" fill="#d49a79"/><path d="M147 69q10-42 48-30 19 7 20 31-22-5-34-24-13 20-34 23" fill="#2c433d"/><path d="M112 236q8-105 68-105t68 105" fill="#4b6b5f"/><path d="M150 149l20 20 42-45" fill="none" stroke="#f7f6ef" stroke-width="8" stroke-linecap="round"/>',
pressure:'<path d="M36 174q53-44 113-48l120-10q23-2 25 17 1 15-19 20l-99 19-60 46H45z" fill="#d49a79"/><path d="M132 116q-4-31 21-39 24-7 35 15l-2 37-46 9z" fill="#d49a79"/><path d="M145 149l28-25 25 14-24 31z" fill="#f5f3ee" stroke="#b7c8ba" stroke-width="3"/><path d="M157 144l16-12 12 8-15 15z" fill="#d84d43"/>',
tourniquet:'<path d="M58 155q50-51 119-54l107-4q24 0 24 18 0 15-24 17l-94 4-76 52H60z" fill="#d49a79"/><rect x="160" y="101" width="23" height="79" rx="5" fill="#d84d43" transform="rotate(80 171 140)"/><path d="M158 111l36 32m-26-38 36 31" stroke="#fff" stroke-width="5"/>',
unresponsive:'<circle cx="93" cy="132" r="25" fill="#d49a79"/><path d="M116 144q53-36 103 0l44 35-27 29-70-25-47 25-29-25z" fill="#4c6b60"/><path d="M70 128q10-30 40-20" stroke="#2c433d" stroke-width="11"/>',
breathing:'<circle cx="93" cy="126" r="24" fill="#d49a79"/><path d="M116 139q55-35 105 1l37 39-28 25-68-26-48 26-28-25z" fill="#4c6b60"/><path d="M160 84q-17-18 0-30m18 30q17-18 0-30" fill="none" stroke="#77a28a" stroke-width="4"/>',
recovery:'<circle cx="90" cy="127" r="23" fill="#d49a79"/><path d="M112 137q42-36 91-4l49 38-26 29-66-25-45 22-23-26z" fill="#4b6b5f"/><path d="M130 170l-38 34m88-28 35 31" stroke="#d49a79" stroke-width="15"/>',
aed:'<rect x="101" y="40" width="158" height="174" rx="18" fill="#f3f0e7" stroke="#405b50" stroke-width="5"/><rect x="117" y="56" width="126" height="88" rx="9" fill="#dce9df"/><path d="M180 74v49m-24-25h48" stroke="#d84d43" stroke-width="9" stroke-linecap="round"/><circle cx="180" cy="177" r="17" fill="#d84d43"/>',
face:'<circle cx="180" cy="127" r="76" fill="#d49a79"/><path d="M106 111q10-68 74-68t74 68q-38-10-74-45-34 34-74 45" fill="#2c433d"/><path d="M139 117l18 2m46-2 18-7" stroke="#263c37" stroke-width="6" stroke-linecap="round"/><path d="M149 157q30 3 53-15" stroke="#a94e43" stroke-width="6" fill="none"/>',
arms:'<circle cx="180" cy="54" r="23" fill="#d49a79"/><path d="M146 86q34-18 68 0l25 74-33 10-26-51-26 51-33-10z" fill="#4b6b5f"/><path d="M148 103l-47-40m111 40 48-3" stroke="#d49a79" stroke-width="13" stroke-linecap="round"/><path d="M97 52l-1-24m-10 10 10-10 10 10M258 49l0-25" stroke="#d84d43" stroke-width="4" fill="none"/>',
speech:'<circle cx="150" cy="119" r="55" fill="#d49a79"/><path d="M98 105q10-54 57-47 36 4 49 43-37-9-60-38-16 27-46 42" fill="#2c433d"/><path d="M127 128h13m25 0h13" stroke="#263c37" stroke-width="5" stroke-linecap="round"/><path d="M126 151q23 16 46-2" stroke="#a94e43" stroke-width="5" fill="none"/><path d="M224 49h62q12 0 12 12v29q0 12-12 12h-20l-16 16v-16h-26q-12 0-12-12V61q0-12 12-12" fill="#fffefa" stroke="#9bad9e" stroke-width="2"/><path d="M235 70h36m-36 13h25" stroke="#d84d43" stroke-width="4"/>'
};
function svg(type){return '<svg viewBox="0 0 360 260" role="img" aria-label="Original first-aid instructional illustration"><circle cx="180" cy="130" r="104" fill="#e2e9df"/>'+(art[type]||art.check)+'</svg>'}
function openGuide(k){active=k;index=0;home.hidden=true;guideView.hidden=false;render();window.scrollTo({top:0,behavior:"smooth"})}
function render(){const g=data[active],s=g.steps[index];$("guideTitle").textContent=g.title;$("guideIntro").textContent=g.intro;$("guideSource").textContent="SOURCE: "+g.source;$("stepLabel").textContent=s[0];$("heading").textContent=s[2];$("description").textContent=s[3];const stepImage=active==="choking"&&index===0?"assets/images/adult-choking-check-the-cough.jpg.jpg":null;const visual=$("visual");visual.classList.toggle("has-photo",!!stepImage);visual.innerHTML=stepImage?`<img src="${stepImage}" alt="Adult who is choking but can still cough effectively">`:svg(s[4]);$("progress").style.width=((index+1)/g.steps.length*100)+"%";$("stepCount").textContent="STEP "+String(index+1).padStart(2,"0");$("total").textContent="OF "+String(g.steps.length).padStart(2,"0");$("prev").disabled=index===0;const next=$("next");next.hidden=!!s[5];next.textContent=index===g.steps.length-1?"RESTART GUIDE ↻":"NEXT STEP →";const box=$("choices");box.innerHTML="";if(s[5])s[5].forEach(([label,v])=>{let b=document.createElement("button");b.textContent=label;if(v==="severe"||v==="abnormal")b.className="danger";b.onclick=()=>{index=active==="choking"?(v==="mild"?1:v==="monitor"?0:2):(v==="normal"?4:v==="abnormal"?5:4);render()};box.appendChild(b)});else if(s[6]){let n=document.createElement("p");n.textContent=s[6];n.style.cssText="font-size:10px;line-height:1.7;color:#6f7d72;background:#f1f3ed;padding:12px";box.appendChild(n)}}
document.querySelectorAll("[data-guide]").forEach(b=>b.addEventListener("click",()=>openGuide(b.dataset.guide)));$("prev").onclick=()=>{if(index>0){index--;render()}};$("next").onclick=()=>{if(index===data[active].steps.length-1)index=0;else index++;render()};const modal=$("modal");function show(){modal.hidden=false;$("close").focus()}function hide(){modal.hidden=true}$("about").onclick=show;$("disclaimer").onclick=e=>{e.preventDefault();show()};$("sources").onclick=e=>{e.preventDefault();show()};$("close").onclick=hide;modal.onclick=e=>{if(e.target===modal)hide()};document.addEventListener("keydown",e=>{if(e.key==="Escape")hide()});

/* Simulated IP/location flow for the visual demo.
   No real IP lookup, geolocation permission, or network request is made. */
(()=>{
  const toggle=document.getElementById("speakToggle");
  const panel=document.getElementById("speakPanel");
  const close=document.getElementById("speakClose");
  const checkButton=document.getElementById("getLocation");
  const speakButton=document.getElementById("speakLocation");
  const status=document.getElementById("locationStatus");
  const result=document.getElementById("locationResult");
  const copyButton=document.getElementById("copyLocation");
  if(!toggle||!panel||!close||!checkButton||!speakButton||!status||!result||!copyButton)return;

  // Mount the modal directly under body so ancestor stacking contexts cannot cover it.
  if(panel.parentElement!==document.body)document.body.appendChild(panel);

  const demoMessage="This is a demonstration. I cannot speak. The sample IP address is 203.0.113.42. This is not my real location.";
  let demoReady=false;
  let pending=false;

  let closeTimer;
  function setOpen(open,restoreFocus=true){
    window.clearTimeout(closeTimer);
    toggle.setAttribute("aria-expanded",String(open));
    if(open){
      panel.hidden=false;
      window.requestAnimationFrame(()=>panel.classList.add("is-open"));
      close.focus();
    }else{
      panel.classList.remove("is-open");
      closeTimer=window.setTimeout(()=>{panel.hidden=true;},240);
      if(restoreFocus)toggle.focus();
    }
  }
  toggle.addEventListener("click",()=>setOpen(panel.hidden));
  close.addEventListener("click",()=>setOpen(false));
  panel.addEventListener("click",event=>{if(event.target===panel)setOpen(false,false)});
  document.addEventListener("click",event=>{
    if(!panel.hidden&&!panel.contains(event.target)&&!toggle.contains(event.target))setOpen(false,false);
  });
  document.addEventListener("keydown",event=>{
    if(event.key==="Escape"&&!panel.hidden)setOpen(false);
  });

  checkButton.addEventListener("click",()=>{
    if(pending)return;
    pending=true;
    demoReady=false;
    result.hidden=true;
    speakButton.disabled=true;
    checkButton.disabled=true;
    checkButton.textContent="Checking demo connection…";
    status.textContent="Simulating a location check. This is sample data only.";
    window.setTimeout(()=>{
      result.hidden=false;
      demoReady=true;
      pending=false;
      checkButton.disabled=false;
      checkButton.textContent="Run demo again";
      speakButton.disabled=false;
      status.textContent="Demo complete. A reserved example IP is shown below — no real data was requested.";
    },900);
  });

  speakButton.addEventListener("click",()=>{
    if(!demoReady)return;
    if(!("speechSynthesis" in window)||!("SpeechSynthesisUtterance" in window)){
      status.textContent="Speech playback is not supported in this browser. The demo message is still shown above.";
      return;
    }
    window.speechSynthesis.cancel();
    const utterance=new SpeechSynthesisUtterance(demoMessage);
    utterance.lang="en";
    utterance.rate=.88;
    utterance.pitch=1;
    utterance.onstart=()=>status.textContent="Playing the sample message. In a real call, check whether the operator can hear your phone’s audio.";
    utterance.onend=()=>status.textContent="Demo message finished. You can play it again.";
    utterance.onerror=()=>status.textContent="Audio playback did not work. The sample message is still available on screen.";
    window.speechSynthesis.speak(utterance);
  });

  copyButton.addEventListener("click",async()=>{
    if(!demoReady)return;
    try{
      await navigator.clipboard.writeText(demoMessage);
      status.textContent="Demo message copied.";
    }catch(error){
      status.textContent="Copy is unavailable in this browser. The sample message is shown through the read-aloud button.";
    }
  });
})();
