"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[393],{5800:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var a=s(4848),r=s(8453);const c={sidebar_position:7,title:"Docker Cheat Sheat"},i=void 0,t={id:"solutions/docker-cheat-sheat",title:"Docker Cheat Sheat",description:"Images",source:"@site/docs/solutions/docker-cheat-sheat.md",sourceDirName:"solutions",slug:"/solutions/docker-cheat-sheat",permalink:"/hands-on-containers/solutions/docker-cheat-sheat",draft:!1,unlisted:!1,editUrl:"https://github.com/armagankaratosun/hands-on-containers/tree/main/packages/create-docusaurus/templates/shared/docs/solutions/docker-cheat-sheat.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Docker Cheat Sheat"},sidebar:"tutorialSidebar",previous:{title:"Working with Public Repositories",permalink:"/hands-on-containers/solutions/working-with-public-repo"}},o={},l=[{value:"Images",id:"images",level:2},{value:"Containers",id:"containers",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Build an Image from a Dockerfile"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker build -t <image_name>\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Build an Image from a Dockerfile without the cache"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker build -t <image_name> . \u2013no-cache\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"List local images"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker images\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Delete an Image"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker rmi <image_name>\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Remove all unused images"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker image prune\n"})}),"\n",(0,a.jsx)(n.h2,{id:"containers",children:"Containers"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Create and run a container from an image, with a custom name:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run --name <container_name> <image_name>\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Run a container with and publish a container\u2019s port(s) to the host."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -p <host_port>:<container_port> <image_name>\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Run a container in the background"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -d <image_name>\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Start or stop an existing container:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker start|stop <container_name> (or <container-id>)\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Remove a stopped container:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker rm <container_name>\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsx)(n.li,{children:"Open a shell inside a running container:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker exec -it <container_name> sh\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"7",children:["\n",(0,a.jsx)(n.li,{children:"Fetch and follow the logs of a container:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker logs -f <container_name>\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"8",children:["\n",(0,a.jsx)(n.li,{children:"To inspect a running container:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker inspect <container_name> (or <container_id>)\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"9",children:["\n",(0,a.jsx)(n.li,{children:"To list currently running containers:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker ps\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"10",children:["\n",(0,a.jsx)(n.li,{children:"List all docker containers (running and stopped):"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker ps --all\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"11",children:["\n",(0,a.jsx)(n.li,{children:"View resource usage stats"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker container stats\n"})}),"\n",(0,a.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://docs.docker.com/get-started/docker_cheatsheet.pdf",children:"https://docs.docker.com/get-started/docker_cheatsheet.pdf"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var a=s(6540);const r={},c=a.createContext(r);function i(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);