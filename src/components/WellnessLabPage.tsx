import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowRight, ArrowUpRight } from "lucide-react";

// ─── Palette (mirrored from HealthyLivingApp) ────────────────────────────────
const BG      = "#FFFFFF";
const BG_ALT  = "#FBF8F3";
const BG_MINT = "#E5F2EB";
const BG_SAGE = "#F4F9F6";
const BG_PEACH= "#FDF1EC";
const BG_CREAM= "#FBF8F3";
const INK     = "#0F2418";
const INK_OFF = "rgba(15,36,24,0.5)";
const INK_DIM = "rgba(15,36,24,0.1)";
const GREEN   = "#2A8A58";
const GREEN_L = "#4FB88B";
const GREEN_BG= "#EBF7F1";
const CORAL   = "#FE5000";
const CORAL_BG= "#FDE6DC";
const WHITE   = "#FFFFFF";
const F = "'Plus Jakarta Sans', sans-serif";

// Re-import shared Tag + SiteFooter via props to avoid circular deps
import type { ComponentType } from "react";

type Page = "home"|"approach"|"updates"|"about"|"schools"|"research"|"tools"|"mealplans"|"workout"|"wellness"|"collaborate"|"scanner"|"rewards"|"communities"|"partners"|"press"|"faq"|"ai"|"lab";

function Tag({ children, color="green" }: { children:string; color?:"green"|"coral"|"sage"|"phase2" }) {
  const styles = {
    green:  { background:GREEN_BG, color:GREEN   },
    coral:  { background:CORAL_BG, color:CORAL   },
    sage:   { background:BG_SAGE,  color:INK     },
    phase2: { background:"#EDE8F5", color:"#6B47B8" },
  }[color];
  return (
    <span className="inline-block text-xs uppercase tracking-[0.1em] px-2.5 py-1 rounded-full" style={{ fontFamily:F, ...styles }}>
      {children}
    </span>
  );
}

const LAB_EVENTS: Record<string,{id:number;title:string;location:string;time:string;tags:string[];img:string}[]> = {
  "Abu Dhabi":[
    {id:0,title:"Corniche Walk Club",location:"Corniche Beach",time:"Tomorrow · 6:30 AM",tags:["Walking","Community","Free"],img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80"},
    {id:1,title:"Yoga at Yas Bay",location:"Yas Bay Waterfront",time:"Saturday · 7:00 AM",tags:["Yoga","Outdoor","Free"],img:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80"},
    {id:2,title:"Family Fitness Day",location:"Khalidiyah Park",time:"Sunday · 9:00 AM",tags:["Family","Fitness","Free"],img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&q=80"},
  ],
  "Dubai":[
    {id:3,title:"Sunrise Yoga",location:"Kite Beach",time:"Tomorrow · 7:00 AM",tags:["Yoga","Outdoor","Free"],img:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80"},
    {id:4,title:"Community Run",location:"Dubai Marina",time:"Saturday · 6:30 AM",tags:["Running","Community","Free"],img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&q=80"},
    {id:5,title:"Sunset Meditation",location:"Zabeel Park",time:"Sunday · 5:30 PM",tags:["Mindfulness","Outdoor"],img:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80"},
  ],
};

export default function WellnessLabPage({ setPage, SiteFooter }: { setPage:(p:Page)=>void; SiteFooter:ComponentType<{setPage:(p:Page)=>void}> }) {
  const [sleep,setSleep]   = useState(6.25);
  const [water,setWater]   = useState(4);
  const [move,setMove]     = useState(15);
  const [stress,setStress] = useState(0);
  const [showPlan,setShowPlan] = useState(false);
  const [acts,setActs]     = useState<("idle"|"progress"|"done")[]>(["idle","idle","idle"]);
  const [saved,setSaved]   = useState(new Set<number>());
  const [city,setCity]     = useState("Abu Dhabi");
  const [doneGoals,setDoneGoals] = useState(new Set<string>());
  const [aiInput,setAiInput] = useState("");
  const expDays = new Set([0,1,2]);

  const sB  = Math.min(Math.max(0, Math.round((sleep-6.25)*2.8)), 5);
  const wB  = Math.min(Math.max(0, Math.round((water-4)*0.65)), 3);
  const mB  = Math.min(Math.max(0, Math.round((move-15)*0.09)), 2);
  const stB = stress===0?0:stress===1?2:4;
  const projected = 72 + sB + wB + mB + stB;
  const diff = projected - 72;

  const impacts = [
    {name:"Sleep",   boost:sB,  msg:"Getting closer to 8 hours could have the biggest positive impact on your day."},
    {name:"Water",   boost:wB,  msg:"Reaching 8 glasses daily could noticeably improve energy and focus."},
    {name:"Movement",boost:mB,  msg:"Even 20 extra minutes of movement daily can significantly lift your wellbeing."},
    {name:"Stress",  boost:stB, msg:"Reducing stress has a powerful effect on energy, sleep, and overall wellbeing."},
  ].sort((a,b)=>b.boost-a.boost);
  const topImpact = impacts[0];

  const fmtSleep=(v:number)=>{const h=Math.floor(v);const m=Math.round((v-h)*60);return m?`${h}h ${m}m`:`${h}h`;};
  const startAct=(i:number)=>{
    setActs(a=>{const n=[...a] as ("idle"|"progress"|"done")[];n[i]="progress";return n;});
    setTimeout(()=>setActs(a=>{const n=[...a] as ("idle"|"progress"|"done")[];n[i]="done";return n;}),2500);
  };
  const toggleGoal=(g:string)=>setDoneGoals(prev=>{const n=new Set(prev);n.has(g)?n.delete(g):n.add(g);return n;});
  const toggleSave=(id:number)=>setSaved(prev=>{const n=new Set(prev);n.has(id)?n.delete(id):n.add(id);return n;});

  const ACTIVITIES=[
    {title:"15-Minute Walk",   best:"Energy + Stress",duration:"15 min",cta:"Start"},
    {title:"3-Minute Reset",   best:"Stress",         duration:"3 min", cta:"Start"},
    {title:"Early Night Challenge",best:"Recovery",    duration:"Tonight",cta:"Accept"},
  ];
  const BETTER_DAY=[
    {time:"8:00 AM", cat:"Morning hydration",     tip:"Drink one glass of water after waking up."},
    {time:"12:30 PM",cat:"10-minute walk",         tip:"Take a short walk after lunch."},
    {time:"4:00 PM", cat:"Stress reset",           tip:"Take a 3-minute breathing break."},
    {time:"7:00 PM", cat:"Evening movement",       tip:"Complete another 20 minutes of light activity."},
    {time:"9:45 PM", cat:"Start winding down",     tip:"Reduce screen time and prepare for sleep."},
    {time:"10:30 PM",cat:"Target bedtime",         tip:"Aim for 8 hours — lights out."},
  ];
  const INSIGHTS=[
    {title:"Sleep is your biggest opportunity",desc:"You reported less than 7 hours of sleep on 4 of your last 7 days.",badge:"High impact",   badgeColor:"coral" as const,action:"Explore"},
    {title:"Movement may be helping your energy",desc:"Your energy check-ins are better on days when you move for 30+ minutes.",badge:"Positive pattern",badgeColor:"green" as const,action:"View Pattern"},
    {title:"Your hydration is improving",desc:"You reached your hydration target on 5 days this week.",badge:"5 Day Streak",badgeColor:"sage" as const,action:"Keep Going"},
  ];
  const COMING_UP=[
    {day:"Today",   items:["3-minute stress reset","Sleep goal — 8 hours"]},
    {day:"Tomorrow",items:["Sunrise Yoga · 7:00 AM · Kite Beach"]},
    {day:"Saturday",items:["Community Run · 6:30 AM · Dubai Marina"]},
  ];
  const AI_CHIPS=["How can I improve my score?","What should I focus on this week?","Give me a 20-minute wellness plan","Which activity should I try?"];

  return (
    <div style={{fontFamily:F}}>

      {/* PAGE HEADER */}
      <div style={{background:`linear-gradient(135deg,${BG_MINT} 0%,${BG_CREAM} 100%)`}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Tag color="green">Interactive</Tag>
            <h1 style={{fontFamily:F,fontWeight:800,letterSpacing:"-0.025em",fontSize:"clamp(2rem,4.5vw,3.2rem)",color:INK,lineHeight:1.05,margin:"1rem 0 0.5rem"}}>
              Wellness Lab
            </h1>
            <p className="text-base leading-relaxed max-w-md" style={{color:INK_OFF}}>Experiment with small changes and discover what could make you feel better.</p>
          </div>
          <div className="flex-shrink-0 p-6 rounded-2xl min-w-[210px]" style={{background:BG,border:`1px solid ${INK_DIM}`,boxShadow:"0 4px 20px rgba(15,36,24,0.07)"}}>
            <p className="text-xs uppercase tracking-[0.15em] mb-1" style={{color:INK_OFF}}>Wellness Score</p>
            <div className="flex items-end gap-2 mb-1">
              <span style={{fontFamily:F,fontWeight:800,fontSize:"3rem",lineHeight:1,color:INK}}>72</span>
              <span className="text-sm font-semibold pb-1.5" style={{color:GREEN}}>↑ 4 this week</span>
            </div>
            <p className="text-xs" style={{color:INK_OFF}}>Biggest opportunity: <span style={{color:CORAL,fontWeight:600}}>Sleep consistency</span></p>
          </div>
        </div>
      </div>

      {/* WHAT-IF SIMULATOR */}
      <div style={{background:BG}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="rounded-3xl overflow-hidden" style={{border:`1.5px solid ${INK_DIM}`}}>
            <div className="px-8 py-6" style={{background:BG_ALT,borderBottom:`1px solid ${INK_DIM}`}}>
              <h2 style={{fontFamily:F,fontWeight:800,fontSize:"1.5rem",color:INK,letterSpacing:"-0.02em"}}>What could improve your day?</h2>
              <p className="text-sm mt-1" style={{color:INK_OFF}}>Adjust the sliders to see how small lifestyle changes could influence your projected wellness score.</p>
            </div>
            <div className="grid lg:grid-cols-[1fr_300px]">
              {/* Sliders */}
              <div className="px-8 py-8 space-y-8" style={{borderRight:`1px solid ${INK_DIM}`}}>
                {([
                  {label:"Sleep",   current:"6h 15m", val:fmtSleep(sleep), min:4,  max:10, step:0.25, onChange:(v:string)=>setSleep(parseFloat(v)),  lo:"4h",  hi:"10h"},
                  {label:"Water",   current:"4 glasses",val:`${water} glasses`,min:1,max:10,step:1,   onChange:(v:string)=>setWater(parseInt(v)),    lo:"1",   hi:"10"},
                  {label:"Movement",current:"15 min",  val:`${move} min`,   min:0,  max:90, step:5,   onChange:(v:string)=>setMove(parseInt(v)),     lo:"0 min",hi:"90 min"},
                ] as {label:string;current:string;val:string;min:number;max:number;step:number;onChange:(v:string)=>void;lo:string;hi:string}[]).map(s=>(
                  <div key={s.label}>
                    <div className="flex justify-between mb-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.12em]" style={{color:INK_OFF}}>{s.label}</p>
                        <p className="text-xs mt-0.5" style={{color:INK_OFF}}>Current: <span style={{color:CORAL}}>{s.current}</span></p>
                      </div>
                      <span className="text-lg font-bold" style={{color:INK,fontFamily:F}}>{s.val}</span>
                    </div>
                    <input type="range" min={s.min} max={s.max} step={s.step}
                      value={s.label==="Sleep"?sleep:s.label==="Water"?water:move}
                      onChange={e=>s.onChange(e.target.value)}
                      className="w-full h-2 rounded-full cursor-pointer appearance-none" style={{accentColor:GREEN}}/>
                    <div className="flex justify-between mt-1.5">
                      <span className="text-xs" style={{color:INK_DIM}}>{s.lo}</span>
                      <span className="text-xs" style={{color:INK_DIM}}>{s.hi}</span>
                    </div>
                  </div>
                ))}
                {/* Stress */}
                <div>
                  <div className="flex justify-between mb-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em]" style={{color:INK_OFF}}>Stress</p>
                      <p className="text-xs mt-0.5" style={{color:INK_OFF}}>Current: <span style={{color:CORAL}}>High</span></p>
                    </div>
                    <span className="text-lg font-bold" style={{color:INK,fontFamily:F}}>{["High","Medium","Low"][stress]}</span>
                  </div>
                  <input type="range" min={0} max={2} step={1} value={stress} onChange={e=>setStress(parseInt(e.target.value))}
                    className="w-full h-2 rounded-full cursor-pointer appearance-none" style={{accentColor:GREEN}}/>
                  <div className="flex justify-between mt-1.5">
                    <span className="text-xs" style={{color:INK_DIM}}>High</span>
                    <span className="text-xs" style={{color:INK_DIM}}>Medium</span>
                    <span className="text-xs" style={{color:INK_DIM}}>Low</span>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button onClick={()=>setShowPlan(true)} className="px-6 py-3.5 text-sm font-bold rounded-full"
                    style={{background:GREEN,color:WHITE,fontFamily:F}}>
                    Build My Better Day
                  </button>
                  <button onClick={()=>{setSleep(6.25);setWater(4);setMove(15);setStress(0);setShowPlan(false);}}
                    className="px-6 py-3.5 text-sm font-semibold rounded-full"
                    style={{background:BG_ALT,color:INK,border:`1px solid ${INK_DIM}`}}>
                    Reset
                  </button>
                </div>
              </div>

              {/* Score panel */}
              <div className="px-8 py-8 flex flex-col justify-center" style={{background:BG_ALT}}>
                <p className="text-xs uppercase tracking-[0.15em] mb-3" style={{color:INK_OFF}}>Projected Wellness Score</p>
                <div className="flex items-center gap-3 mb-3">
                  <span style={{fontFamily:F,fontWeight:300,fontSize:"2rem",color:INK_OFF,lineHeight:1}}>72</span>
                  <span style={{color:INK_OFF,fontSize:"1.2rem"}}>→</span>
                  <AnimatePresence mode="popLayout">
                    <motion.span key={projected} initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:10}} transition={{duration:0.2}}
                      style={{fontFamily:F,fontWeight:800,fontSize:"3.5rem",color:diff>0?GREEN:INK,lineHeight:1}}>
                      {projected}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <AnimatePresence>
                  {diff>0 && (
                    <motion.div initial={{scale:0.85,opacity:0}} animate={{scale:1,opacity:1}} exit={{opacity:0}}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-5 self-start"
                      style={{background:GREEN_BG,color:GREEN}}>
                      <span className="text-xs font-bold">+{diff} potential improvement</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                {diff===0&&<div className="mb-5"/>}
                <div className="p-4 rounded-2xl" style={{background:BG,border:`1px solid ${INK_DIM}`}}>
                  <p className="text-xs uppercase tracking-[0.12em] mb-3" style={{color:INK_OFF}}>Biggest Impact</p>
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-sm font-bold mb-1" style={{color:INK}}>{topImpact.name}</p>
                      <p className="text-xs leading-relaxed" style={{color:INK_OFF}}>{topImpact.msg}</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs mt-4 leading-relaxed" style={{color:INK_DIM}}>This is a wellness estimate, not medical advice.</p>
              </div>
            </div>
          </div>

          {/* Build My Better Day panel */}
          <AnimatePresence>
            {showPlan && (
              <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}
                transition={{duration:0.38,ease:[0.25,0,0,1]}} style={{overflow:"hidden"}}>
                <div className="mt-6 rounded-3xl overflow-hidden" style={{border:`1.5px solid ${GREEN_L}`}}>
                  <div className="px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    style={{background:GREEN_BG,borderBottom:`1px solid ${INK_DIM}`}}>
                    <div>
                      <h3 style={{fontFamily:F,fontWeight:800,fontSize:"1.3rem",color:INK}}>Your Better Day</h3>
                      <p className="text-sm mt-0.5" style={{color:INK_OFF}}>A simple plan based on the changes you selected.</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs uppercase tracking-[0.12em]" style={{color:INK_OFF}}>Potential score</p>
                      <p style={{fontFamily:F,fontWeight:800,fontSize:"2.2rem",color:GREEN,lineHeight:1}}>{projected}</p>
                    </div>
                  </div>
                  <div className="px-8 py-8" style={{background:BG}}>
                    <div className="relative pl-8">
                      <div className="absolute left-4 top-3 bottom-3 w-px" style={{background:INK_DIM}}/>
                      <div className="space-y-7">
                        {BETTER_DAY.map((item,i)=>(
                          <motion.div key={i} initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{delay:i*0.06,duration:0.25}}
                            className="relative">
                            <div className="absolute -left-8 top-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                              style={{background:BG_MINT,border:`1.5px solid ${GREEN_L}`}}>
                            </div>
                            <p className="text-xs uppercase tracking-[0.1em] mb-0.5" style={{color:INK_OFF}}>{item.time}</p>
                            <p className="text-sm font-bold" style={{color:INK}}>{item.cat}</p>
                            <p className="text-xs mt-0.5 leading-relaxed" style={{color:INK_OFF}}>{item.tip}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 mt-8 pt-6 flex-wrap" style={{borderTop:`1px solid ${INK_DIM}`}}>
                      <button className="px-5 py-3 text-sm font-bold rounded-full" style={{background:GREEN,color:WHITE}}>Save as Today's Plan</button>
                      <button onClick={()=>setPage("ai")} className="px-5 py-3 text-sm font-semibold rounded-full"
                        style={{background:BG_ALT,color:INK,border:`1px solid ${INK_DIM}`}}>
                        Ask AI to Improve This Plan
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* KEY INSIGHTS */}
      <div style={{background:BG_ALT}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <h2 style={{fontFamily:F,fontWeight:800,fontSize:"1.6rem",color:INK,letterSpacing:"-0.02em"}}>Key Insights</h2>
          <p className="text-sm mt-1 mb-8" style={{color:INK_OFF}}>Patterns based on your recent check-ins.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {INSIGHTS.map((ins,i)=>(
              <div key={i} className="p-6 rounded-2xl transition-all" style={{background:BG,border:`1px solid ${INK_DIM}`,cursor:"default"}}
                onMouseEnter={e=>(e.currentTarget as HTMLDivElement).style.boxShadow="0 8px 28px rgba(15,36,24,0.09)"}
                onMouseLeave={e=>(e.currentTarget as HTMLDivElement).style.boxShadow="none"}>
                <Tag color={ins.badgeColor}>{ins.badge}</Tag>
                <h3 className="text-sm font-bold mt-3 mb-2" style={{color:INK}}>{ins.title}</h3>
                <p className="text-xs leading-relaxed mb-5" style={{color:INK_OFF}}>{ins.desc}</p>
                <button className="text-xs font-semibold flex items-center gap-1" style={{color:GREEN}}>
                  {ins.action} <ArrowRight size={11}/>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRY THIS TODAY */}
      <div style={{background:BG}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <h2 style={{fontFamily:F,fontWeight:800,fontSize:"1.6rem",color:INK,letterSpacing:"-0.02em"}}>Try This Today</h2>
          <p className="text-sm mt-1 mb-8" style={{color:INK_OFF}}>Small actions selected for your current wellness goals.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {ACTIVITIES.map((a,i)=>{
              const st=acts[i];
              return (
                <div key={i} className="p-6 rounded-2xl" style={{background:st==="done"?GREEN_BG:BG_ALT,border:`1.5px solid ${st==="done"?GREEN_L:INK_DIM}`,transition:"all 300ms"}}>
                  <h3 className="text-sm font-bold mb-1" style={{color:INK}}>{a.title}</h3>
                  <p className="text-xs mb-1" style={{color:INK_OFF}}>Best for: <span style={{color:GREEN,fontWeight:600}}>{a.best}</span></p>
                  <p className="text-xs mb-6" style={{color:INK_OFF}}>Duration: {a.duration}</p>
                  <motion.button whileTap={{scale:0.96}} onClick={()=>st==="idle"&&startAct(i)} disabled={st!=="idle"}
                    className="px-5 py-2.5 text-xs font-bold rounded-full transition-all"
                    style={{background:st==="done"?GREEN:st==="progress"?BG_SAGE:GREEN,color:st==="progress"?INK:WHITE,opacity:st==="progress"?0.75:1}}>
                    {st==="idle"?a.cta:st==="progress"?"In Progress…":"Completed"}
                  </motion.button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* AROUND YOU */}
      <div style={{background:BG_CREAM}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 style={{fontFamily:F,fontWeight:800,fontSize:"1.6rem",color:INK,letterSpacing:"-0.02em"}}>Around You</h2>
              <p className="text-sm mt-1" style={{color:INK_OFF}}>Things happening nearby that support your wellness.</p>
            </div>
            <select value={city} onChange={e=>setCity(e.target.value)} className="text-sm px-4 py-2 rounded-full focus:outline-none cursor-pointer"
              style={{background:BG,border:`1px solid ${INK_DIM}`,color:INK,fontFamily:F}}>
              <option>Abu Dhabi</option>
              <option>Dubai</option>
            </select>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4" style={{scrollbarWidth:"none"}}>
            {(LAB_EVENTS[city]||[]).map(ev=>(
              <div key={ev.id} className="flex-shrink-0 rounded-2xl overflow-hidden" style={{width:272,background:BG,border:`1px solid ${INK_DIM}`}}>
                <div className="h-40 overflow-hidden bg-gray-100">
                  <img src={ev.img} alt={ev.title} style={{width:"100%",height:"100%",objectFit:"cover"}}
                    onError={e=>(e.currentTarget as HTMLImageElement).style.display="none"}/>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold mb-1" style={{color:INK}}>{ev.title}</h3>
                  <p className="text-xs mb-1" style={{color:INK_OFF}}>{ev.location}</p>
                  <p className="text-xs mb-3 font-medium" style={{color:GREEN}}>{ev.time}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {ev.tags.map(t=><span key={t} className="text-xs px-2.5 py-1 rounded-full" style={{background:BG_MINT,color:INK_OFF}}>{t}</span>)}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={()=>toggleSave(ev.id)} className="flex-1 py-2 text-xs font-semibold rounded-full transition-all"
                      style={{background:saved.has(ev.id)?GREEN_BG:BG_ALT,color:saved.has(ev.id)?GREEN:INK_OFF,border:`1px solid ${saved.has(ev.id)?GREEN_L:INK_DIM}`}}>
                      {saved.has(ev.id)?"Saved":"Save"}
                    </button>
                    <button className="flex-1 py-2 text-xs font-semibold rounded-full" style={{background:BG_MINT,color:INK}}>View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="text-sm font-semibold inline-flex items-center gap-1.5" style={{color:GREEN}}>
              See All Activities <ArrowUpRight size={13}/>
            </button>
          </div>
        </div>
      </div>

      {/* WELLNESS EXPERIMENTS */}
      <div style={{background:BG}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <h2 style={{fontFamily:F,fontWeight:800,fontSize:"1.6rem",color:INK,letterSpacing:"-0.02em"}}>Wellness Experiments</h2>
          <p className="text-sm mt-1 mb-8" style={{color:INK_OFF}}>Try a small habit and see how it affects how you feel.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {/* Active */}
            <div className="p-6 rounded-2xl" style={{background:BG_MINT,border:`1.5px solid ${GREEN_L}`}}>
              <Tag color="green">Active Experiment</Tag>
              <h3 className="text-sm font-bold mb-1 mt-4" style={{color:INK}}>Morning Water Experiment</h3>
              <p className="text-xs mb-4 leading-relaxed" style={{color:INK_OFF}}>Drink one glass of water within 30 minutes of waking for 5 days.</p>
              <p className="text-xs mb-2 font-semibold" style={{color:INK}}>Day 3 of 5</p>
              <div className="flex gap-1.5 mb-4">{[0,1,2,3,4].map(d=><span key={d} className="text-lg">{expDays.has(d)?"●":"○"}</span>)}</div>
              <p className="text-xs mb-5" style={{color:INK_OFF}}>Watching: <span style={{color:GREEN,fontWeight:600}}>Energy + Mood</span></p>
              <button className="px-5 py-2.5 text-xs font-bold rounded-full" style={{background:GREEN,color:WHITE}}>Check In Today</button>
            </div>
            {/* Suggested */}
            {[{title:"Screen-Free Wind Down",desc:"Avoid screens for 30 minutes before bed for 5 nights."},{title:"10-Minute After-Lunch Walk",desc:"Walk for 10 minutes after lunch for 5 days."}].map(ex=>(
              <div key={ex.title} className="p-6 rounded-2xl" style={{background:BG_ALT,border:`1px solid ${INK_DIM}`}}>
                <h3 className="text-sm font-bold mb-1" style={{color:INK}}>{ex.title}</h3>
                <p className="text-xs mb-6 leading-relaxed" style={{color:INK_OFF}}>{ex.desc}</p>
                <button className="px-5 py-2.5 text-xs font-bold rounded-full" style={{background:BG,color:GREEN,border:`1px solid ${GREEN_L}`}}>Try Experiment</button>
              </div>
            ))}
          </div>

          {/* Result state */}
          <div className="mt-8 p-8 rounded-3xl" style={{background:BG_ALT,border:`1.5px solid ${GREEN_L}`}}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Tag color="green">Experiment Complete</Tag>
                <h3 style={{fontFamily:F,fontWeight:800,fontSize:"1.2rem",color:INK,margin:"1rem 0 0.5rem"}}>Morning Water Experiment</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{color:INK_OFF}}>
                  Your average morning energy was slightly higher on the days you completed this experiment.
                </p>
                <p className="text-xs italic mb-5" style={{color:INK_DIM}}>Based on self-reported check-ins. Not a clinical conclusion.</p>
                <div className="flex gap-3 flex-wrap">
                  <button className="px-5 py-2.5 text-xs font-bold rounded-full" style={{background:GREEN,color:WHITE}}>Keep This Habit</button>
                  <button className="px-5 py-2.5 text-xs font-bold rounded-full" style={{background:BG,color:INK,border:`1px solid ${INK_DIM}`}}>Try Another</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {([["Before","6.2 / 10",CORAL_BG,CORAL],["During experiment","7.1 / 10",GREEN_BG,GREEN]] as [string,string,string,string][]).map(([l,v,bg,c])=>(
                  <div key={l} className="p-5 rounded-2xl text-center" style={{background:bg}}>
                    <p className="text-xs mb-2" style={{color:INK_OFF}}>{l}</p>
                    <p className="text-2xl font-bold" style={{color:c,fontFamily:F}}>{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMING UP */}
      <div style={{background:BG_ALT}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <h2 style={{fontFamily:F,fontWeight:800,fontSize:"1.6rem",color:INK,letterSpacing:"-0.02em",marginBottom:"2rem"}}>Coming Up</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              {COMING_UP.map(day=>(
                <div key={day.day} className="mb-6">
                  <p className="text-xs uppercase tracking-[0.15em] mb-3" style={{color:INK_OFF}}>{day.day}</p>
                  {day.items.map(item=>(
                    <button key={item} onClick={()=>toggleGoal(item)}
                      className="flex items-center gap-3 w-full text-left py-3.5 px-1 transition-all"
                      style={{borderBottom:`1px solid ${INK_DIM}`}}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{background:doneGoals.has(item)?GREEN:BG,border:`1.5px solid ${doneGoals.has(item)?GREEN:INK_DIM}`,transition:"all 200ms"}}>
                        {doneGoals.has(item)&&<span style={{color:WHITE,fontSize:"10px"}}></span>}
                      </div>
                      <span className="text-sm leading-relaxed" style={{color:doneGoals.has(item)?INK_OFF:INK,textDecoration:doneGoals.has(item)?"line-through":"none",transition:"all 200ms"}}>{item}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
            {/* AI Coach preview */}
            <div className="p-8 rounded-3xl flex flex-col" style={{background:BG_MINT,border:`1.5px solid ${INK_DIM}`}}>
              <Tag color="green">Wellness AI</Tag>
              <h3 style={{fontFamily:F,fontWeight:800,fontSize:"1.2rem",color:INK,margin:"1rem 0 0.5rem"}}>Ask Your Wellness Coach</h3>
              <p className="text-sm mb-6" style={{color:INK_OFF}}>Want help deciding what to focus on next?</p>
              <div className="flex items-center rounded-xl overflow-hidden mb-4" style={{background:BG,border:`1px solid ${INK_DIM}`}}>
                <input value={aiInput} onChange={e=>setAiInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&setPage("ai")}
                  placeholder="Ask anything about your wellness plan…"
                  className="flex-1 px-4 py-3 text-sm bg-transparent focus:outline-none" style={{color:INK,fontFamily:F}}/>
                <button onClick={()=>setPage("ai")} className="px-4 py-3 text-xs font-bold flex items-center gap-1.5"
                  style={{background:GREEN,color:WHITE}}>Ask <Send size={11}/></button>
              </div>
              <div className="flex flex-wrap gap-2">
                {AI_CHIPS.map(c=>(
                  <button key={c} onClick={()=>setPage("ai")} className="px-3 py-1.5 text-xs rounded-full transition-all"
                    style={{background:BG,border:`1px solid ${INK_DIM}`,color:INK_OFF,fontFamily:F}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.background=BG_ALT;(e.currentTarget as HTMLButtonElement).style.color=INK;}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.background=BG;(e.currentTarget as HTMLButtonElement).style.color=INK_OFF;}}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter setPage={setPage}/>
    </div>
  );
}