export const moves=[
  {
    "id": "static",
    "name": "고정",
    "group": "기본",
    "prompt": "Hold a locked-off camera position and framing throughout the shot.",
    "description": "카메라 위치와 방향을 고정합니다.",
    "purpose": "인물의 작은 표정과 동작에 집중할 때",
    "note": "피사체의 움직임까지 멈추라는 뜻은 아닙니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "handheld",
    "name": "핸드헬드",
    "group": "기본",
    "prompt": "Film from a handheld viewpoint with restrained operator movement.",
    "description": "촬영자의 미세한 움직임이 화면에 전달됩니다.",
    "purpose": "현장감과 불안정한 감정을 표현할 때",
    "note": "강한 흔들림은 얼굴과 배경의 일관성을 떨어뜨릴 수 있습니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "dolly-in",
    "name": "달리 인",
    "group": "직선 이동",
    "prompt": "Move the camera physically forward toward the subject, revealing changing foreground parallax.",
    "description": "카메라가 피사체를 향해 실제로 전진합니다.",
    "purpose": "감정에 가까워지거나 중요한 대상을 강조할 때",
    "note": "줌과 달리 전경과 배경의 상대 위치가 변합니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "dolly-out",
    "name": "달리 아웃",
    "group": "직선 이동",
    "prompt": "Move the camera physically backward away from the subject, gradually revealing the surrounding space.",
    "description": "카메라가 뒤로 이동하며 공간을 드러냅니다.",
    "purpose": "고립감이나 장면의 전체 맥락을 보여줄 때",
    "note": "뒤로 이동할 공간을 장면에 확보하세요.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "truck-left",
    "name": "트럭 레프트",
    "group": "직선 이동",
    "prompt": "Translate the camera to the left while maintaining its forward-facing orientation.",
    "description": "카메라가 왼쪽으로 평행 이동합니다.",
    "purpose": "전경을 지나며 공간의 깊이를 보여줄 때",
    "note": "피사체를 계속 중앙에 두려면 별도의 시선 회전이 필요합니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "truck-right",
    "name": "트럭 라이트",
    "group": "직선 이동",
    "prompt": "Translate the camera to the right while maintaining its forward-facing orientation.",
    "description": "카메라가 오른쪽으로 평행 이동합니다.",
    "purpose": "장면의 옆 공간을 자연스럽게 공개할 때",
    "note": "팬은 제자리 회전이고 트럭은 위치 이동입니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "pedestal-up",
    "name": "페데스털 업",
    "group": "직선 이동",
    "prompt": "Raise the camera vertically while keeping its viewing direction level and unchanged.",
    "description": "시선 방향을 유지한 채 카메라 높이를 올립니다.",
    "purpose": "낮은 대상에서 높은 공간으로 시선을 옮길 때",
    "note": "위를 올려다보는 틸트와 구분하세요.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "pedestal-down",
    "name": "페데스털 다운",
    "group": "직선 이동",
    "prompt": "Lower the camera vertically while keeping its viewing direction level and unchanged.",
    "description": "시선 방향을 유지한 채 카메라 높이를 내립니다.",
    "purpose": "높이 차이를 따라 공간을 소개할 때",
    "note": "아래를 내려다보는 틸트와 구분하세요.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "pan-left",
    "name": "팬 레프트",
    "group": "회전",
    "prompt": "Rotate the camera to the left from a fixed position without translating the camera.",
    "description": "제자리에서 카메라 방향만 왼쪽으로 돌립니다.",
    "purpose": "인물의 시선을 따라 주변을 보여줄 때",
    "note": "카메라의 물리적 이동은 포함하지 않습니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "pan-right",
    "name": "팬 라이트",
    "group": "회전",
    "prompt": "Rotate the camera to the right from a fixed position without translating the camera.",
    "description": "제자리에서 카메라 방향만 오른쪽으로 돌립니다.",
    "purpose": "가로로 펼쳐진 공간을 보여줄 때",
    "note": "가까운 물체의 시차는 트럭 이동과 다릅니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "tilt-up",
    "name": "틸트 업",
    "group": "회전",
    "prompt": "Tilt the camera upward from a fixed position without changing its physical height.",
    "description": "고정 위치에서 시선을 위로 올립니다.",
    "purpose": "인물에서 높은 건물이나 하늘로 연결할 때",
    "note": "카메라 높이 자체는 변하지 않습니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "tilt-down",
    "name": "틸트 다운",
    "group": "회전",
    "prompt": "Tilt the camera downward from a fixed position without changing its physical height.",
    "description": "고정 위치에서 시선을 아래로 내립니다.",
    "purpose": "얼굴에서 손이나 발밑 단서로 연결할 때",
    "note": "높이 이동과 함께 지시하면 의도가 모호해질 수 있습니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "zoom-in",
    "name": "줌 인",
    "group": "렌즈",
    "prompt": "Keep the camera position fixed and gradually increase the lens focal length to tighten the framing.",
    "description": "위치는 고정하고 화각을 좁힙니다.",
    "purpose": "멀리 있는 대상에 시각적 주의를 모을 때",
    "note": "전진 이동의 시차 효과는 생기지 않습니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "zoom-out",
    "name": "줌 아웃",
    "group": "렌즈",
    "prompt": "Keep the camera position fixed and gradually decrease the lens focal length to widen the framing.",
    "description": "위치는 고정하고 화각을 넓힙니다.",
    "purpose": "같은 시점에서 화면 밖의 맥락을 공개할 때",
    "note": "달리 아웃과 배경의 원근 변화가 다릅니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "dolly-zoom",
    "name": "달리 줌",
    "group": "렌즈",
    "prompt": "Dolly toward the subject while widening the lens in coordination, keeping the subject approximately the same size as the background perspective changes.",
    "description": "전진과 반대 방향의 줌을 결합해 인물 크기를 유지합니다.",
    "purpose": "충격이나 공간이 뒤틀리는 감각을 표현할 때",
    "note": "복합 동작이므로 모델별 재현 편차가 클 수 있습니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "arc",
    "name": "아크",
    "group": "원형 이동",
    "prompt": "Move along a short curved path around the subject while keeping the subject in frame.",
    "description": "피사체 주변의 짧은 곡선 경로로 이동합니다.",
    "purpose": "인물과 배경의 관계를 입체적으로 보여줄 때",
    "note": "전체 한 바퀴를 도는 오비트와 구분합니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "orbit",
    "name": "오비트",
    "group": "원형 이동",
    "prompt": "Complete one circular camera path around the subject while keeping the subject centered.",
    "description": "피사체를 중심으로 한 바퀴 회전 이동합니다.",
    "purpose": "제품이나 인물의 여러 면을 보여줄 때",
    "note": "뒷모습과 가려진 면의 일관성 확보가 필요합니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "follow",
    "name": "후방 팔로우",
    "group": "추적",
    "prompt": "Follow behind the subject at a consistent distance as the subject moves forward.",
    "description": "이동하는 피사체의 뒤를 같은 간격으로 따라갑니다.",
    "purpose": "관객이 인물과 함께 목적지로 향하게 할 때",
    "note": "피사체의 이동 방향과 속도를 함께 정하세요.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "lead",
    "name": "정면 리드",
    "group": "추적",
    "prompt": "Track backward in front of the approaching subject, maintaining a consistent distance and frontal framing.",
    "description": "앞에서 뒤로 이동하며 다가오는 인물을 촬영합니다.",
    "purpose": "걸어오는 인물의 표정과 진행을 함께 담을 때",
    "note": "인물과 카메라의 간격을 명시하세요.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "side-track",
    "name": "측면 트래킹",
    "group": "추적",
    "prompt": "Track alongside the moving subject, matching the subject speed and maintaining a side view.",
    "description": "피사체와 나란히 같은 속도로 이동합니다.",
    "purpose": "걷기나 달리기를 측면에서 따라갈 때",
    "note": "단순 트럭과 달리 피사체도 함께 이동합니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "crane-up",
    "name": "크레인 업",
    "group": "크레인·항공",
    "prompt": "Lift the camera on an ascending crane path while gradually aiming down toward the subject.",
    "description": "카메라가 상승하며 피사체를 내려다봅니다.",
    "purpose": "인물에서 주변 공간으로 규모를 확장할 때",
    "note": "높이 이동과 시선 회전이 결합된 동작입니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "crane-down",
    "name": "크레인 다운",
    "group": "크레인·항공",
    "prompt": "Descend from a high crane position toward the subject while adjusting the viewing angle to retain the subject.",
    "description": "높은 시점에서 내려오며 피사체에 접근합니다.",
    "purpose": "넓은 공간에서 구체적인 인물로 집중할 때",
    "note": "급격한 높이 변화는 형태 변형을 유발할 수 있습니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "aerial-in",
    "name": "항공 접근",
    "group": "크레인·항공",
    "prompt": "Fly forward from an elevated aerial position toward the subject with a controlled gradual descent.",
    "description": "높은 위치에서 전진하며 완만하게 하강합니다.",
    "purpose": "장소 소개에서 주요 대상으로 접근할 때",
    "note": "실제 비행이나 촬영 가능성을 검증한 자료는 아닙니다.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "aerial-out",
    "name": "항공 이탈",
    "group": "크레인·항공",
    "prompt": "Fly backward and upward from the subject to reveal the wider landscape.",
    "description": "뒤로 상승하며 넓은 주변 환경을 드러냅니다.",
    "purpose": "마무리 장면에서 공간의 규모를 보여줄 때",
    "note": "배경 확장 시 새로 생성되는 영역을 확인하세요.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "pov",
    "name": "1인칭 이동",
    "group": "인물 시점",
    "prompt": "Advance from a first-person eye-level viewpoint with gentle walking rhythm.",
    "description": "인물의 눈높이에서 걸어가는 시점을 표현합니다.",
    "purpose": "관객이 직접 공간을 탐색하게 할 때",
    "note": "일반 관찰 카메라와 인물의 시점을 구분하세요.",
    "author": "FRAME",
    "verified": false
  },
  {
    "id": "body-mounted",
    "name": "바디 마운트",
    "group": "인물 시점",
    "prompt": "Keep the camera rigidly attached in front of the moving subject, holding the face steady as the background moves.",
    "description": "인물과 카메라가 함께 움직여 얼굴 위치를 유지합니다.",
    "purpose": "배경만 흐르며 감정이 고립되는 느낌을 줄 때",
    "note": "일반 핸드헬드와 다른 고정 관계입니다.",
    "author": "FRAME",
    "verified": false
  }
];

export function normalizeCameraSettings(value={}){
 const movement=moves.some(m=>m.id===value.movement)?value.movement:'original';
 let speed=['slow','normal','fast'].includes(value.speed)?value.speed:'slow', stability=['stable','subtle','rough'].includes(value.stability)?value.stability:'stable';
 if(movement==='static'){speed='still';stability='stable';}
 if(movement==='handheld'&&stability==='stable')stability='subtle';
 if(['aerial-in','aerial-out','crane-up','crane-down','dolly-zoom','body-mounted'].includes(movement))stability='stable';
 return {movement,speed,stability,direction:value.direction==='counterclockwise'?'counterclockwise':'clockwise',target:typeof value.target==='string'?value.target.trim().slice(0,160):''};
}
export function legacyCameraSettings(text=''){return normalizeCameraSettings({movement:/locked|fixed/i.test(text)?'static':/dolly-in/i.test(text)?'dolly-in':'original'});}
export function buildCameraPrompt(value={}){
 const s=normalizeCameraSettings(value),m=moves.find(m=>m.id===s.movement);if(!m)return '';
 const parts=[m.prompt.replaceAll('the subject',s.target||'the main subject')];
 if(s.movement!=='static')parts.push({slow:'Perform the movement slowly and evenly.',normal:'Use a moderate, even movement pace.',fast:'Perform the movement briskly with a clear path.'}[s.speed]);
 if(['arc','orbit'].includes(s.movement))parts.push(`Travel ${s.direction} when viewed from above.`);
 if(s.movement!=='static')parts.push({stable:'Keep the camera motion stabilized.',subtle:'Allow subtle organic camera sway.',rough:'Allow pronounced, irregular handheld shake.'}[s.stability]);
 return parts.join(' ');
}
export function cameraPose(value={},time=0){
 const s=normalizeCameraSettings(value),t=Math.max(0,Math.min(1,time)),q=t*t*(3-2*t);let position=[0,2.8,10],target=[0,1.6,0],subject=[0,0,0],focal=.9;
 const id=s.movement,sign=id.endsWith('left')?-1:1;
 if(id==='dolly-in')position[2]=10-4.5*q;if(id==='dolly-out')position[2]=6+6*q;
 if(id.startsWith('truck-')){position[0]=sign*4*q;target[0]=position[0];}
 if(id.startsWith('pedestal-')){const y=id.endsWith('up')?3*q:3*(1-q);position[1]+=y;target[1]+=y;}
 if(id.startsWith('pan-')){const a=sign*.65*q;target=[10*Math.sin(a),1.6,10-10*Math.cos(a)];}
 if(id.startsWith('tilt-'))target[1]+=(id.endsWith('up')?6:-4)*q;
 if(id==='zoom-in')focal=.9+.9*q;if(id==='zoom-out')focal=1.5-.75*q;
 if(id==='dolly-zoom'){position=[0,1.6,10-4*q];focal=.9*position[2]/10;}
 if(id==='arc'||id==='orbit'){const a=(s.direction==='clockwise'?-1:1)*(id==='orbit'?2*Math.PI:Math.PI/3)*t;position=[10*Math.sin(a),2.8,10*Math.cos(a)];}
 if(['follow','lead','side-track','body-mounted'].includes(id)){const d=4*q;if(id==='side-track'){subject=[d,0,0];position=[8+d,2.8,0];}else{subject=[0,0,id==='follow'?-d:d];position=[0,id==='body-mounted'?1.6:2.8,(id==='body-mounted'?3:10)+subject[2]];}target=[subject[0],1.6,subject[2]];}
 if(id==='crane-up')position[1]=2.8+5*q;if(id==='crane-down')position[1]=7.8-5*q;
 if(id==='aerial-in')position=[0,7-2*q,17-8*q];if(id==='aerial-out')position=[0,5+2*q,9+8*q];
 if(id==='pov'){position=[0,1.7,8-5*q];target=[0,1.5,-5*q];}
 if(s.stability!=='stable'&&id!=='static'){const a=s.stability==='rough'?.23:.045;position[0]+=Math.sin(t*51)*a;position[1]+=Math.sin(t*73)*a;}
 return {position,target,subject,focal};
}
