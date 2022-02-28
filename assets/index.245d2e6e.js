import{j as jsx,M as Menu,a as jsxs,S as SettingOutlined,C as CalculatorOutlined,L as Link,b as MergeCellsOutlined,c as createSlice,u as useDispatch,R as Row,d as Col,B as Button,e as useSelector,F as Fragment,T as Tooltip,D as Divider,f as Typography,r as react,I as Input$1,g as Space,h as InputNumber,i as React,k as Select,l as Image,m as Radio,n as DollarOutlined,E as ExpandAltOutlined,o as CopyrightOutlined,p as ClockCircleOutlined,q as Routes,s as Route,t as configureStore,v as ReactDOM,w as BrowserRouter,P as Provider}from"./vendor.e3da2165.js";const p=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const j of r.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&s(j)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}};p();var antd="",index="";const{SubMenu}=Menu,Settings=()=>jsx(Menu,{style:{borderRadius:"10px"},children:jsxs(SubMenu,{icon:jsx(SettingOutlined,{}),title:"Settings",style:{borderRadius:"10px"},children:[jsx(Menu.Item,{icon:jsx(CalculatorOutlined,{}),children:jsx(Link,{to:"/calculator",children:"Switch to calculator"})},"1"),jsx(Menu.Item,{icon:jsx(MergeCellsOutlined,{}),children:jsx(Link,{to:"/converter",children:"Switch to converter"})},"2"),jsx(Menu.Item,{icon:jsx(SettingOutlined,{}),children:jsx(Link,{to:"/settings",children:"Options"})},"3")]},"sub1")}),addNumberSlice=createSlice({name:"addNumber",initialState:{value:"0"},reducers:{add:(e,t)=>{if(e.value=="0"){e.value=t.payload;return}e.value+=t.payload},remove:(e,t)=>{if(t.payload=="Backspace"&&e.value.length==1){e.value="0";return}e.value=e.value.slice(0,e.value.length-1)},count:(state,action)=>{try{alert(eval(state.value))}catch(e){alert("Incorrect expression. Please, consider changing it")}}}}),inputState=e=>e.addNumber.value,{add,remove,count}=addNumberSlice.actions;var addNumberReducer=addNumberSlice.reducer;const style$5={margin:"5px",width:"65px",height:"65px"},Numbers=()=>{const e=useDispatch();return jsxs("div",{children:[jsxs(Row,{justify:"center",children:[jsx(Col,{span:8,children:jsx(Button,{onClick:()=>{e(add("7"))},style:style$5,shape:"circle",size:"large",type:"primary",children:"7"})}),jsx(Col,{span:8,children:jsx(Button,{onClick:()=>{e(add("8"))},style:style$5,shape:"circle",size:"large",type:"primary",children:"8"})}),jsx(Col,{span:8,children:jsx(Button,{onClick:()=>{e(add("9"))},style:style$5,shape:"circle",size:"large",type:"primary",children:"9"})})]}),jsxs(Row,{children:[jsx(Col,{span:8,children:jsx(Button,{onClick:()=>{e(add("4"))},style:style$5,shape:"circle",size:"large",type:"primary",children:"4"})}),jsx(Col,{span:8,children:jsx(Button,{onClick:()=>{e(add("5"))},style:style$5,shape:"circle",size:"large",type:"primary",children:"5"})}),jsx(Col,{span:8,children:jsx(Button,{onClick:()=>{e(add("6"))},style:style$5,shape:"circle",size:"large",type:"primary",children:"6"})})]}),jsxs(Row,{children:[jsx(Col,{span:8,children:jsx(Button,{onClick:()=>{e(add("1"))},style:style$5,shape:"circle",size:"large",type:"primary",children:"1"})}),jsx(Col,{span:8,children:jsx(Button,{onClick:()=>{e(add("2"))},style:style$5,shape:"circle",size:"large",type:"primary",children:"2"})}),jsx(Col,{span:8,children:jsx(Button,{onClick:()=>{e(add("3"))},style:style$5,shape:"circle",size:"large",type:"primary",children:"3"})})]}),jsxs(Row,{children:[jsx(Col,{span:8,children:jsx(Button,{onClick:()=>{e(add("0"))},style:style$5,shape:"circle",size:"large",type:"primary",children:"0"})}),jsx(Col,{span:8,children:jsx(Button,{onClick:()=>{e(add("."))},style:style$5,shape:"circle",size:"large",type:"primary",children:"."})})]})]})},{Title:Title$3}=Typography,HiddenInput=({numbers:e})=>{const t=useDispatch(),n=s=>{if(s.key=="Enter"&&t(count()),s.key=="Backspace"){t(remove(s.key));return}!/[\d]/.test(s.key)&&!/[\+\-\/\*]/.test(s.key)||t(add(s.key))};return react.exports.useEffect(()=>{input.focus()}),jsx("input",{style:{position:"absolute",opacity:"0%",pointerEvents:"none"},onKeyDown:n,id:"input"})},Input=()=>{const e=useSelector(inputState);return jsxs(Fragment,{children:[jsx(Tooltip,{placement:"bottom",title:jsx("span",{children:"You can use keyboard instead of buttons on the screen"}),children:jsxs("div",{style:{display:"flex",alignItems:"center"},children:[jsx(Title$3,{onClick:()=>{input.focus()},children:e}),jsx(Divider,{id:"caret",style:{backgroundColor:"#0086FF",height:"42px",width:"2px",marginBottom:"14px"},type:"vertical"})]})}),jsx(HiddenInput,{numbers:e})]})},style$4={margin:"5px",width:"65px",height:"65px"},Expressions=()=>{const e=useDispatch();return jsxs("div",{children:[jsx(Row,{children:jsx(Col,{span:24,children:jsx(Button,{onClick:()=>{e(add("+"))},style:style$4,shape:"circle",size:"large",children:"+"})})}),jsx(Row,{children:jsx(Col,{span:24,children:jsx(Button,{onClick:()=>{e(add("-"))},style:style$4,shape:"circle",size:"large",children:"-"})})}),jsx(Row,{children:jsx(Col,{span:24,children:jsx(Button,{onClick:()=>{e(add("/"))},style:style$4,shape:"circle",size:"large",children:"/"})})}),jsx(Row,{children:jsx(Col,{span:24,children:jsx(Button,{onClick:()=>{e(add("*"))},style:style$4,shape:"circle",size:"large",children:"*"})})}),jsx(Row,{children:jsx(Col,{span:24,children:jsx(Button,{onClick:()=>{e(count())},style:style$4,shape:"circle",size:"large",children:"="})})})]})},Calculator=()=>jsxs(Fragment,{children:[jsx(Input,{}),jsxs("div",{style:{display:"flex"},children:[jsx(Numbers,{}),jsx(Expressions,{})]})]}),style$3={width:"211px",margin:"5px"},DistanceConverter=()=>{const[e,t]=react.exports.useState(0),[n,s]=react.exports.useState(),[l,r]=react.exports.useState(0),[j,d]=react.exports.useState(0),[v,c]=react.exports.useState(0),[f,o]=react.exports.useState(0),[g,u]=react.exports.useState(0),[C,x]=react.exports.useState(0),[S,i]=react.exports.useState(0),[m,y]=react.exports.useState(0),h=()=>{n=="cm"&&(r(e),d(e/10),c(e/100),o(e/1e3),u(e/2.54),x(e/30.48),i(e/91.44),y(e/160934)),n=="dm"&&(r(e*10),d(e),c(e/10),o(e/100),u(e*3.937),x(e/3.048),i(e/9.14),y(e/16093)),n=="m"&&(r(e*100),d(e*10),c(e),o(e/10),u(e*39.37),x(e*3.281),i(e*1.094),y(e/1609)),n=="km"&&(r(e*1e3),d(e*100),c(e*10),o(e),u(e*39370),x(e*3281),i(e*1094),y(e/1.609)),n=="in"&&(r(e*2.54),d(e/3.937),c(e/39.37),o(e/39370),u(e),x(e/12),i(e/36),y(e/63360)),n=="ft"&&(r(e*30.48),d(e*3.048),c(e/3.281),o(e/3281),u(e*12),x(e),i(e/3),y(e/5280)),n=="yd"&&(r(e*91.44),d(e*9.14),c(e/1.094),o(e/1094),u(e/36),x(e*3),i(e),y(e/1760)),n=="mi"&&(r(e*160934),d(e*16093),c(e*1609),o(e*1.609),u(e/63360),x(e*5280),i(e*1760),y(e))};return react.exports.useEffect(()=>{h()}),jsxs(Fragment,{children:[jsx(Input$1,{onChange:a=>{t(a.target.value),s("cm"),h()},style:style$3,suffix:"cm",placeholder:"0",value:Math.round(l*100)/100}),jsx(Input$1,{onChange:a=>{t(a.target.value),s("dm"),h()},style:style$3,suffix:"dm",placeholder:"0",value:Math.round(j*100)/100}),jsx(Input$1,{onChange:a=>{t(a.target.value),s("m"),h()},style:style$3,suffix:"m",placeholder:"0",value:Math.round(v*100)/100}),jsx(Input$1,{onChange:a=>{t(a.target.value),s("km"),h()},style:style$3,suffix:"km",placeholder:"0",value:Math.round(f*100)/100}),jsx(Input$1,{onChange:a=>{t(a.target.value),s("in"),h()},style:style$3,suffix:"in",placeholder:"0",value:Math.round(g*100)/100}),jsx(Input$1,{onChange:a=>{t(a.target.value),s("ft"),h()},style:style$3,suffix:"ft",placeholder:"0",value:Math.round(C*100)/100}),jsx(Input$1,{onChange:a=>{t(a.target.value),s("yd"),h()},style:style$3,suffix:"yd",placeholder:"0",value:Math.round(S*100)/100}),jsx(Input$1,{onChange:a=>{t(a.target.value),s("mi"),h()},style:style$3,suffix:"mi",placeholder:"0",value:Math.round(m*100)/100})]})},{Title:Title$2}=Typography,{Option}=Select,style$2={color:"#0086FF",border:"2px #0086FF solid",padding:"5px",margin:"5px",borderRadius:"10px"},MoneyConverter=()=>{const e=react.exports.useRef(null),[t,n]=react.exports.useState(5),[s,l]=react.exports.useState({data:{RUB:81,USD:1}}),[r,j]=react.exports.useState("USD"),[d,v]=react.exports.useState("RUB"),[c,f]=react.exports.useState([]),[o,g]=react.exports.useState([]),u=()=>{fetch("https://freecurrencyapi.net/api/v2/latest?apikey=4f202bc0-9668-11ec-8d55-25c099a12d74").then(i=>i.json().then(m=>{m.data.USD=1,l(m)}))},C=()=>{o.length>5&&confirm("Too many calculations. Wanna delete old ones?")&&(g(o.splice(0,o.length)),f(c.splice(c.length-1,c.length))),f(c.concat([{first:r,second:d}])),g(o.concat([t*s.data[r]*s.data[d]]))},x=jsxs(Select,{onChange:i=>{j(i)},defaultValue:"USD",style:{width:60},children:[jsx(Option,{value:"USD",children:"$"}),jsx(Option,{value:"EUR",children:"\u20AC"}),jsx(Option,{value:"GBP",children:"\xA3"}),jsx(Option,{value:"CNY",children:"\xA5"}),jsx(Option,{value:"RUB",children:"\u20BD"})]}),S=jsxs(Select,{onChange:i=>{v(i)},defaultValue:"RUB",style:{width:60},children:[jsx(Option,{value:"USD",children:"$"}),jsx(Option,{value:"EUR",children:"\u20AC"}),jsx(Option,{value:"GBP",children:"\xA3"}),jsx(Option,{value:"CNY",children:"\xA5"}),jsx(Option,{value:"RUB",children:"\u20BD"})]});return react.exports.useEffect(()=>{C()},[t]),jsxs(Fragment,{children:[jsxs(Space,{direction:"vertical",children:[jsx(InputNumber,{ref:e,onPressEnter:i=>{n(i.target.value),u()},addonBefore:x,addonAfter:S,defaultValue:100}),jsx(Button,{onClick:()=>{n(e.current.value),u()},children:"Convert"})]}),",",jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",width:"300px"},children:[jsx(Title$2,{level:2,children:"History:"}),React.Children.toArray(o.map((i,m)=>jsxs("p",{id:"conversion",children:[jsx("span",{style:style$2,children:c[m].first}),">",jsx("span",{style:style$2,children:c[m].second}),"=",jsx("span",{style:style$2,children:i.toFixed(2)})]})))]})]})},{Title:Title$1}=Typography,Error=()=>jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[jsx(Title$1,{children:"This one is under construction"}),jsx(Image,{width:200,src:"/static/mechanic.jpg"}),jsx("p",{children:jsx("a",{href:"https://www.freepik.com/vectors/kids-car",children:"Kids car vector created by brgfx - www.freepik.com"})})]}),style$1={margin:"5px"},Converter=()=>{const[e,t]=react.exports.useState();let n=jsx(MoneyConverter,{});switch(e){case"money":n=jsx(MoneyConverter,{});break;case"distances":n=jsx(DistanceConverter,{});break;case"degrees":n=jsx(Error,{});break;case"time":n=jsx(Error,{});break}return jsx(Fragment,{children:jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:[jsxs(Radio.Group,{onChange:s=>{t(s.target.value)},defaultValue:"a",children:[jsx(Tooltip,{placement:"bottom",title:"Convert money",children:jsx(Radio.Button,{style:style$1,value:"money",children:jsx(DollarOutlined,{})})}),jsx(Tooltip,{placement:"bottom",title:"Convert distances",children:jsx(Radio.Button,{style:style$1,value:"distances",children:jsx(ExpandAltOutlined,{})})}),jsx(Tooltip,{placement:"bottom",title:"Convert degrees",children:jsx(Radio.Button,{style:style$1,value:"degrees",children:jsx(CopyrightOutlined,{})})}),jsx(Tooltip,{placement:"bottom",title:"Convert time",children:jsx(Radio.Button,{style:style$1,value:"time",children:jsx(ClockCircleOutlined,{})})})]}),n]})})},{Title}=Typography,AppPicker=()=>jsxs("div",{children:[jsx("div",{id:"arrow",style:{fontSize:"36px"},children:"^"}),jsx(Title,{children:"Choose an app"})]}),style={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},App=()=>jsxs("div",{style,children:[jsx(Settings,{}),jsxs(Routes,{children:[jsx(Route,{path:"/",element:jsx(AppPicker,{})}),jsx(Route,{path:"calculator",element:jsx(Calculator,{})}),jsx(Route,{path:"converter",element:jsx(Converter,{})}),jsx(Route,{path:"settings",element:jsx(Error,{})})]})]});var store=configureStore({reducer:{addNumber:addNumberReducer}});ReactDOM.render(jsx(React.StrictMode,{children:jsx(BrowserRouter,{children:jsx(Provider,{store,children:jsx(App,{})})})}),document.getElementById("root"));
