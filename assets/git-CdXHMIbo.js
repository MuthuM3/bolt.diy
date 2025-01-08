import{u as V,r as x,j as c}from"./components-Bw8-jeb5.js";import{M as e,O as v,Q as X,R as Y,S as K,U as D,V as A,W as Q,X as W,Y as Z,Z as C,_ as P,$ as O,a0 as ee,a1 as te,a2 as ae,a3 as re,a4 as ne,a5 as oe,a6 as se,a7 as ie}from"./index-_5QATau0.js";import"./stripIndent-CtOGPAlk.js";var le=Object.defineProperty,T=(t,a)=>{for(var r in a)le(t,r,{get:a[r],enumerable:!0})};function N(t,{contentType:a,dataStreamVersion:r}){const n=new Headers(t??{});return n.has("Content-Type")||n.set("Content-Type",a),r!==void 0&&n.set("X-Vercel-AI-Data-Stream",r),n}var F="AI_NoObjectGeneratedError",k=`vercel.ai.error.${F}`,ce=Symbol.for(k),U,E=class extends D{constructor({message:t="No object generated.",cause:a,text:r,response:n,usage:o}){super({name:F,message:t,cause:a}),this[U]=!0,this.text=r,this.response=n,this.usage=o}static isInstance(t){return D.hasMarker(t,k)}};U=ce;var q=e.union([e.string(),e.instanceof(Uint8Array),e.instanceof(ArrayBuffer),e.custom(t=>{var a,r;return(r=(a=globalThis.Buffer)==null?void 0:a.isBuffer(t))!=null?r:!1},{message:"Must be a Buffer"})]),w=e.lazy(()=>e.union([e.null(),e.string(),e.number(),e.boolean(),e.record(e.string(),w),e.array(w)])),m=e.record(e.string(),e.record(e.string(),w)),ue=e.array(e.union([e.object({type:e.literal("text"),text:e.string()}),e.object({type:e.literal("image"),data:e.string(),mimeType:e.string().optional()})])),B=e.object({type:e.literal("text"),text:e.string(),experimental_providerMetadata:m.optional()}),de=e.object({type:e.literal("image"),image:e.union([q,e.instanceof(URL)]),mimeType:e.string().optional(),experimental_providerMetadata:m.optional()}),me=e.object({type:e.literal("file"),data:e.union([q,e.instanceof(URL)]),mimeType:e.string(),experimental_providerMetadata:m.optional()}),pe=e.object({type:e.literal("tool-call"),toolCallId:e.string(),toolName:e.string(),args:e.unknown()}),fe=e.object({type:e.literal("tool-result"),toolCallId:e.string(),toolName:e.string(),result:e.unknown(),content:ue.optional(),isError:e.boolean().optional(),experimental_providerMetadata:m.optional()}),ge=e.object({role:e.literal("system"),content:e.string(),experimental_providerMetadata:m.optional()}),he=e.object({role:e.literal("user"),content:e.union([e.string(),e.array(e.union([B,de,me]))]),experimental_providerMetadata:m.optional()}),Se=e.object({role:e.literal("assistant"),content:e.union([e.string(),e.array(e.union([B,pe]))]),experimental_providerMetadata:m.optional()}),ve=e.object({role:e.literal("tool"),content:e.array(fe),experimental_providerMetadata:m.optional()});e.union([ge,he,Se,ve]);var ye="JSON schema:",xe="You MUST answer with a JSON object that matches the JSON schema above.",we="You MUST answer with JSON.";function Te({prompt:t,schema:a,schemaPrefix:r=a!=null?ye:void 0,schemaSuffix:n=a!=null?xe:we}){return[t!=null&&t.length>0?t:void 0,t!=null&&t.length>0?"":void 0,r,a!=null?JSON.stringify(a):void 0,n].filter(o=>o!=null).join(`
`)}v({prefix:"aiobj",size:24});v({prefix:"aiobj",size:24});v({prefix:"aitxt",size:24});var je={};T(je,{object:()=>_e,text:()=>be});var be=()=>({type:"text",responseFormat:()=>({type:"text"}),injectIntoSystemPrompt({system:t}){return t},parseOutput({text:t}){return t}}),_e=({schema:t})=>{const a=X(t);return{type:"object",responseFormat:({model:r})=>({type:"json",schema:r.supportsStructuredOutputs?a.jsonSchema:void 0}),injectIntoSystemPrompt({system:r,model:n}){return n.supportsStructuredOutputs?r:Te({prompt:r,schema:a.jsonSchema})},parseOutput({text:r},n){const o=Y({text:r});if(!o.success)throw new E({message:"No object generated: could not parse the response.",cause:o.error,text:r,response:n.response,usage:n.usage});const s=K({value:o.value,schema:a});if(!s.success)throw new E({message:"No object generated: response did not match schema.",cause:s.error,text:r,response:n.response,usage:n.usage});return s.value}}};function G(t,a){const r=t.getReader(),n=a.getReader();let o,s,u=!1,p=!1;async function g(i){try{o==null&&(o=r.read());const l=await o;o=void 0,l.done?i.close():i.enqueue(l.value)}catch(l){i.error(l)}}async function S(i){try{s==null&&(s=n.read());const l=await s;s=void 0,l.done?i.close():i.enqueue(l.value)}catch(l){i.error(l)}}return new ReadableStream({async pull(i){try{if(u){await S(i);return}if(p){await g(i);return}o==null&&(o=r.read()),s==null&&(s=n.read());const{result:l,reader:h}=await Promise.race([o.then(f=>({result:f,reader:r})),s.then(f=>({result:f,reader:n}))]);l.done||i.enqueue(l.value),h===r?(o=void 0,l.done&&(await S(i),u=!0)):(s=void 0,l.done&&(p=!0,await g(i)))}catch(l){i.error(l)}},cancel(){r.cancel(),n.cancel()}})}v({prefix:"aitxt",size:24});var Re={};T(Re,{mergeIntoDataStream:()=>Ce,toDataStream:()=>Ie,toDataStreamResponse:()=>De});function $(t={}){const a=new TextEncoder;let r="";return new TransformStream({async start(){t.onStart&&await t.onStart()},async transform(n,o){o.enqueue(a.encode(n)),r+=n,t.onToken&&await t.onToken(n),t.onText&&typeof n=="string"&&await t.onText(n)},async flush(){t.onCompletion&&await t.onCompletion(r),t.onFinal&&await t.onFinal(r)}})}function j(t,a){return t.pipeThrough(new TransformStream({transform:async(r,n)=>{var o;if(typeof r=="string"){n.enqueue(r);return}if("event"in r){r.event==="on_chat_model_stream"&&M((o=r.data)==null?void 0:o.chunk,n);return}M(r,n)}})).pipeThrough($(a)).pipeThrough(new TextDecoderStream).pipeThrough(new TransformStream({transform:async(r,n)=>{n.enqueue(A("text",r))}}))}function Ie(t,a){return j(t,a).pipeThrough(new TextEncoderStream)}function De(t,a){var r;const n=j(t,a?.callbacks).pipeThrough(new TextEncoderStream),o=a?.data,s=a?.init,u=o?G(o.stream,n):n;return new Response(u,{status:(r=s?.status)!=null?r:200,statusText:s?.statusText,headers:N(s?.headers,{contentType:"text/plain; charset=utf-8",dataStreamVersion:"v1"})})}function Ce(t,a){a.dataStream.merge(j(t,a.callbacks))}function M(t,a){if(typeof t.content=="string")a.enqueue(t.content);else{const r=t.content;for(const n of r)n.type==="text"&&a.enqueue(n.text)}}var Ee={};T(Ee,{mergeIntoDataStream:()=>Pe,toDataStream:()=>Me,toDataStreamResponse:()=>Ae});function b(t,a){const r=Oe();return Q(t[Symbol.asyncIterator]()).pipeThrough(new TransformStream({async transform(n,o){o.enqueue(r(n.delta))}})).pipeThrough($(a)).pipeThrough(new TextDecoderStream).pipeThrough(new TransformStream({transform:async(n,o)=>{o.enqueue(A("text",n))}}))}function Me(t,a){return b(t,a).pipeThrough(new TextEncoderStream)}function Ae(t,a={}){var r;const{init:n,data:o,callbacks:s}=a,u=b(t,s).pipeThrough(new TextEncoderStream),p=o?G(o.stream,u):u;return new Response(p,{status:(r=n?.status)!=null?r:200,statusText:n?.statusText,headers:N(n?.headers,{contentType:"text/plain; charset=utf-8",dataStreamVersion:"v1"})})}function Pe(t,a){a.dataStream.merge(b(t,a.callbacks))}function Oe(){let t=!0;return a=>(t&&(a=a.trimStart(),a&&(t=!1)),a)}const Ne=["node_modules/**",".git/**",".github/**",".vscode/**","**/*.jpg","**/*.jpeg","**/*.png","dist/**","build/**",".next/**","coverage/**",".cache/**",".vscode/**",".idea/**","**/*.log","**/.DS_Store","**/npm-debug.log*","**/yarn-debug.log*","**/yarn-error.log*","**/*lock.json","**/*lock.yaml"];function Fe(){const[t]=V(),{ready:a,importChat:r}=W(),{ready:n,gitClone:o}=Z(),[s,u]=x.useState(!1),[p,g]=x.useState(!0),S=async i=>{if(!(!n&&!a)&&i){const l=ae().add(Ne);try{const{workdir:h,data:f}=await o(i);if(r){const z=Object.keys(f).filter(d=>!l.ignores(d)),H=new TextDecoder("utf-8"),_=z.map(d=>{const{data:y,encoding:L}=f[d];return{path:d,content:L==="utf8"?y:y instanceof Uint8Array?H.decode(y):""}}).filter(d=>d.content),J=await re(_),R=ne(J),I=[{role:"assistant",content:`Cloning the repo ${i} into ${h}
<boltArtifact id="imported-files" title="Git Cloned Files" type="bundled">
${_.map(d=>`<boltAction type="file" filePath="${d.path}">
${d.content}
</boltAction>`).join(`
`)}
</boltArtifact>`,id:oe(),createdAt:new Date}];R&&I.push(R),await r(`Git Project:${i.split("/").slice(-1)[0]}`,I)}}catch(h){console.error("Error during import:",h),C.error("Failed to import repository"),g(!1),window.location.href="/";return}}};return x.useEffect(()=>{if(!a||!n||s)return;const i=t.get("url");if(!i){window.location.href="/";return}S(i).catch(l=>{console.error("Error importing repo:",l),C.error("Failed to import repository"),g(!1),window.location.href="/"}),u(!0)},[t,a,n,s]),c.jsx(P,{fallback:c.jsx(O,{}),children:()=>c.jsxs(c.Fragment,{children:[c.jsx(ee,{}),p&&c.jsx(te,{message:"Please wait while we clone the repository..."})]})})}const Ge=()=>[{title:"Bolt"},{name:"description",content:"Talk with Bolt, an AI assistant from StackBlitz"}];function $e(){return c.jsxs("div",{className:"flex flex-col h-full w-full bg-bolt-elements-background-depth-1",children:[c.jsx(se,{}),c.jsx(ie,{}),c.jsx(P,{fallback:c.jsx(O,{}),children:()=>c.jsx(Fe,{})})]})}export{$e as default,Ge as meta};