import{E as v,V as u,W as z,K as O,X as T,U,b as h,c as d,C as _,e as l,F as A,S,t as p}from"./CJLVywRw.js";import{u as q}from"./BaJpiPPH.js";function B(a,s,r){const[e={},c]=typeof s=="string"?[{},s]:[s,r],t=v(()=>u(a)),o=e.key||z([c,typeof t.value=="string"?t.value:"",...R(e)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const f=o===c?"$f"+o:o;if(!e.baseURL&&typeof t.value=="string"&&t.value[0]==="/"&&t.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:i,lazy:w,default:k,transform:x,pick:F,watch:m,immediate:C,getCachedData:D,deep:j,dedupe:E,...L}=e,y=O({...T,...L,cache:typeof e.cache=="boolean"?void 0:e.cache}),$={server:i,lazy:w,default:k,transform:x,pick:F,immediate:C,getCachedData:D,deep:j,dedupe:E,watch:m===!1?[]:[y,t,...m||[]]};let n;return q(f,()=>{var b;(b=n==null?void 0:n.abort)==null||b.call(n),n=typeof AbortController<"u"?new AbortController:{};const g=u(e.timeout);return g&&setTimeout(()=>n.abort(),g),(e.$fetch||globalThis.$fetch)(t.value,{signal:n.signal,...y})},$)}function R(a){var r;const s=[((r=u(a.method))==null?void 0:r.toUpperCase())||"GET",u(a.baseURL)];for(const e of[a.params||a.query]){const c=u(e);if(!c)continue;const t={};for(const[o,f]of Object.entries(c))t[u(o)]=u(f);s.push(t)}return s}const V={class:"not-prose"},K={key:0},X={key:1},G={key:2},N={class:"grid grid-cols-1 gap-4"},W=["href"],H={class:"flex items-center justify-between"},I={class:"semi-bold"},J={class:"text-sm"},M={class:"text-xs text-gray-500"},tt={__name:"project-list",async setup(a){let s,r;const{error:e,pending:c,data:t}=([s,r]=U(()=>B("https://api.github.com/users/taciozturk/repos","$hhCXzFajzm")),s=await s,r(),s);return v(()=>t.value.filter(o=>o.description)),(o,f)=>(h(),d("div",V,[_(c)?(h(),d("section",K,"Loading...")):_(e)?(h(),d("section",X,"Something went wrong... Try again!")):(h(),d("section",G,[l("ul",N,[(h(!0),d(A,null,S(_(t),i=>(h(),d("li",{key:i.id,class:"border border-2 rounded-sm border-gray-400 p-4 hover:border-primary hover:border-xl hover:text-primary font-mono"},[l("a",{href:i.html_url,target:"_blank"},[l("div",H,[l("div",I,p(i.name),1),l("div",J,p(i.stargazers_count)+" *",1)]),l("p",M,p(i.description),1)],8,W)]))),128))])]))]))}};export{tt as default};