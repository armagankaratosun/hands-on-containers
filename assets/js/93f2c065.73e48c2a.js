"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1809],{2499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(4848),s=t(8453);const r={sidebar_position:1,title:"Create Your First Dockerfile"},i=void 0,a={id:"solutions/first-dockerfile",title:"Create Your First Dockerfile",description:"Dockerfile",source:"@site/docs/solutions/first-dockerfile.md",sourceDirName:"solutions",slug:"/solutions/first-dockerfile",permalink:"/hands-on-containers/solutions/first-dockerfile",draft:!1,unlisted:!1,editUrl:"https://github.com/armagankaratosun/hands-on-containers/tree/main/packages/create-docusaurus/templates/shared/docs/solutions/first-dockerfile.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Create Your First Dockerfile"},sidebar:"tutorialSidebar",previous:{title:"Solutions",permalink:"/hands-on-containers/category/solutions"},next:{title:"Run Your First Image Locally",permalink:"/hands-on-containers/solutions/run-first-container"}},c={},l=[{value:"Dockerfile",id:"dockerfile",level:2},{value:"Bonus points",id:"bonus-points",level:2}];function u(e){const n={code:"code",h2:"h2",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"dockerfile",children:"Dockerfile"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dockerfile",children:'FROM python:3.12\n\nWORKDIR /app\n\n# Install the application dependencies\nCOPY requirements.txt ./\nRUN pip install --no-cache-dir -r requirements.txt\n\n# Copy the source code into the container.\nCOPY . /app\n\n# Expose the port that the application listens on.\nEXPOSE 8000\n\n# Setup an app user so the container doesn\'t run as the root user\nRUN useradd app\nUSER app\n\n# Run the application.\nCMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]\n'})}),"\n",(0,o.jsx)(n.h2,{id:"bonus-points",children:"Bonus points"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);