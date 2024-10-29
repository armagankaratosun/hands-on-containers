"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[190],{2499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=n(4848),r=n(8453);const s={sidebar_position:1,title:"Create Your First Dockerfile"},i=void 0,a={id:"solutions/first-dockerfile",title:"Create Your First Dockerfile",description:"",source:"@site/docs/solutions/first-dockerfile.md",sourceDirName:"solutions",slug:"/solutions/first-dockerfile",permalink:"/hands-on-containers/solutions/first-dockerfile",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/solutions/first-dockerfile.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Create Your First Dockerfile"},sidebar:"tutorialSidebar",previous:{title:"Solutions",permalink:"/hands-on-containers/category/solutions"},next:{title:"Run Your First Image Locally",permalink:"/hands-on-containers/solutions/run-first-container"}},c={},u=[];function l(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dockerfile",children:'FROM python:3.12\n\nWORKDIR /app\n\n# Install the application dependencies\nCOPY requirements.txt ./\nRUN pip install --no-cache-dir -r requirements.txt\n\n# Copy the source code into the container.\nCOPY . /app\n\n# Expose the port that the application listens on.\nEXPOSE 8000\n\n# Setup an app user so the container doesn\'t run as the root user\nRUN useradd app\nUSER app\n\n# Run the application.\nCMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]\n'})})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(6540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);