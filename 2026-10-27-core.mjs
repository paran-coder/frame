import {buildCameraPrompt} from './2026-10-27-camera.mjs';
const aliases={
 '창문광':['window light','window daylight','window side light','side window','창문광','창가'],
 '자연광':['daylight','natural light','natural sunlight','window light','side window','자연광','햇살','햇빛'],
 '역광':['backlight','back light','역광'], '탑뷰':['overhead','top-down','탑뷰'],
 '핸드헬드':['handheld','핸드헬드'], '필름':['film grain','fine grain','필름'],
 '심도':['depth of field','shallow focus','deep focus','심도']
};
export function filterRecipes(rows,{query='',category='전체',tag='전체'}={}) {
 const terms=query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
 return rows.filter(r=>{
  if(category!=='전체'&&r.category!==category||tag!=='전체'&&!r.tags.includes(tag))return false;
  const haystack=[r.title,r.scene,r.description,r.prompt,r.action,r.camera,r.motion,...r.tags].join(' ').toLocaleLowerCase();
  return terms.every(t=>(aliases[t]||[t]).some(a=>haystack.includes(a)));
 });
}
export function buildPrompt(recipe,{scene='',mode='text',variant='',cameraSettings,includeExampleAction=false}={}) {
 if(!recipe)return '';
 const action=recipe.action??recipe.motion??'',camera=buildCameraPrompt(cameraSettings)||variant||recipe.camera||'';
 if(mode==='image')return [action,camera,recipe.focus].filter(Boolean).join('\n\n');
 const custom=scene.trim();
 return [custom||recipe.scene,recipe.prompt,(!custom||includeExampleAction)?action:'',camera,recipe.focus].filter(Boolean).join('\n\n');
}
export function resolvePromptUpdate({current,previousGenerated,nextGenerated,force=false}) {
 if(force)return {value:nextGenerated,generated:nextGenerated,needsReview:false};
 if(current!==previousGenerated){return {value:current,generated:previousGenerated,needsReview:nextGenerated!==previousGenerated};}
 return {value:nextGenerated,generated:nextGenerated,needsReview:false};
}
export function upsertProject(projects,record){
 if(projects.some(p=>p.id===record.id))return projects.map(p=>p.id===record.id?{...p,...record}:p);
 return [record,...projects];
}
export function readState(raw) {
 try {const v=JSON.parse(raw);return {favorites:Array.isArray(v?.favorites)?[...new Set(v.favorites.filter(x=>typeof x==='string'))]:[],projects:Array.isArray(v?.projects)?v.projects.filter(x=>x&&typeof x.id==='string'&&typeof x.name==='string'&&typeof x.prompt==='string'):[]};}catch{return {favorites:[],projects:[]};}
}
