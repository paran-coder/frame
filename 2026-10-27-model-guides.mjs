export const modelGuides=[
 {name:'Kling · 클링',version:'VIDEO 3.0',url:'https://kling.ai/quickstart/klingai-video-3-model-user-guide',summary:'공식 가이드는 여러 샷의 구성, 참조 요소의 일관성, 영상과 음향을 함께 다루는 기능을 설명합니다.',application:'장면 초안에는 피사체·행동·구도·카메라를 먼저 적고, 여러 샷이나 음향을 쓸 때는 실제 생성 화면의 해당 설정을 별도로 확인하세요.'},
 {name:'Seedance · 씨댄스',version:'2.5',url:'https://seed.bytedance.com/en/seedance2_5',summary:'공식 소개는 영상·음향 공동 생성과 참조 영상 제어, 카메라 움직임과 인물 동선 등의 제작 기능을 설명합니다.',application:'공통 초안으로 장면의 의도를 정리한 뒤 참조 영상에서 가져올 움직임·구도와 유지할 대상을 구분하세요. 참조 업로드와 편집 옵션은 제공처에서 설정해야 합니다.'}
];
export function modelGuideHtml(){return modelGuides.map((g,i)=>`<article><h2>0${i+5} / ${g.name} 공식 참고 자료</h2><p>${g.summary}</p><p>${g.application}</p><a class="source-link" href="${g.url}" target="_blank" rel="noopener noreferrer">${g.name} ${g.version} 공식 자료 ↗</a><p class="caption">2026-10-27 확인 · 공식 기능 설명의 요약입니다. FRAME 레시피의 생성 검증이나 모델별 최적화를 의미하지 않습니다. 링크에서 공식 사례를 확인할 수 있으며, 이 페이지에 해당 결과 영상을 추가한 것은 아닙니다.</p></article>`).join('');}
