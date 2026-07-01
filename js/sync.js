window.AcademySync = (()=>{
 const url = window.ACADEMY_CONFIG.syncUrl || '';
 function post(payload){
  if(!url) return Promise.resolve({ok:false,local:true});
  try{
   return fetch(url,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain'},body:JSON.stringify(payload)}).then(()=>({ok:true})).catch(()=>({ok:false}));
  }catch(e){return Promise.resolve({ok:false,error:String(e)})}
 }
 function jsonp(action,params={}){
  return new Promise((resolve)=>{
   if(!url){resolve({ok:false,error:'No sync URL configured'});return}
   const cb='academy_cb_'+Date.now()+Math.floor(Math.random()*9999);
   window[cb]=(data)=>{delete window[cb];script.remove();resolve(data||{})};
   const script=document.createElement('script');
   const u=new URL(url);u.searchParams.set('action',action);u.searchParams.set('callback',cb);Object.entries(params).forEach(([k,v])=>u.searchParams.set(k,v));
   script.src=u.toString();script.onerror=()=>{delete window[cb];script.remove();resolve({ok:false,error:'Request failed'})};
   document.body.appendChild(script);
  })
 }
 return {post,jsonp};
})();
