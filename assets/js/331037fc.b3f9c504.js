"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[373],{2665:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=i(4848),t=i(8453);const r={sidebar_position:3,title:"Working with Public Repositories"},o=void 0,a={id:"container-basics/repositories/working-with-public-repo",title:"Working with Public Repositories",description:"Where You Can Find Container Images?",source:"@site/docs/container-basics/repositories/working-with-public-repo.md",sourceDirName:"container-basics/repositories",slug:"/container-basics/repositories/working-with-public-repo",permalink:"/hands-on-containers/container-basics/repositories/working-with-public-repo",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/container-basics/repositories/working-with-public-repo.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Working with Public Repositories"},sidebar:"tutorialSidebar",previous:{title:"Image Repositories",permalink:"/hands-on-containers/category/image-repositories"},next:{title:"Working with Private Repositories",permalink:"/hands-on-containers/container-basics/repositories/working-with-private-repo"}},c={},l=[{value:"Where You Can Find Container Images?",id:"where-you-can-find-container-images",level:2},{value:"Let&#39;s Deploy an Offical Image",id:"lets-deploy-an-offical-image",level:2},{value:"Pulling the Nginx Image",id:"pulling-the-nginx-image",level:3},{value:"Running the Nginx Container",id:"running-the-nginx-container",level:3},{value:"What just happened?",id:"what-just-happened",level:3},{value:"Bonus Points",id:"bonus-points",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"where-you-can-find-container-images",children:"Where You Can Find Container Images?"}),"\n",(0,s.jsx)(n.p,{children:"Container images can be found in various public registries, including:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Docker Hub"}),": The largest and most popular container registry that hosts a vast array of both official and user-submitted images."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Quay.io"}),": A public registry developed by CoreOS, which is now part of Red Hat. It includes features such as security scanning of images."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Others"}),": There are other registries such as the Google Container Registry (GCR), Microsoft Container Registry (MCR), Amazon ECR Public Gallery and more."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lets-deploy-an-offical-image",children:"Let's Deploy an Offical Image"}),"\n",(0,s.jsxs)(n.p,{children:["This guide explains how to pull a Docker image from a public repository and run it. We'll use the ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/_/nginx",children:"official nginx image from DockerHub"})," image  as an example."]}),"\n",(0,s.jsx)(n.h3,{id:"pulling-the-nginx-image",children:"Pulling the Nginx Image"}),"\n",(0,s.jsx)(n.p,{children:"To pull the nginx image from Docker Hub, which is a public repository, use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull nginx\n"})}),"\n",(0,s.jsxs)(n.p,{children:["However, it's important to note that this command will default to pulling the image with the ",(0,s.jsx)(n.code,{children:"latest"})," tag. To specify a particular version, such as ",(0,s.jsx)(n.code,{children:"stable"}),", you need to include the version tag explicitly in your command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull nginx:stable\n"})}),"\n",(0,s.jsx)(n.h3,{id:"running-the-nginx-container",children:"Running the Nginx Container"}),"\n",(0,s.jsx)(n.p,{children:"Once the image is pulled, you can run a container based on that image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --name my-nginx -p 8080:80 -d nginx:stable\n"})}),"\n",(0,s.jsx)(n.h3,{id:"what-just-happened",children:"What just happened?"}),"\n",(0,s.jsx)(n.p,{children:"Here\u2019s what each option means:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--name my-nginx:"})," Assigns the name my-nginx to your container."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-p 8080:80:"})," Maps port 80 of the nginx container to port 8080 on your host."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-d (short for --detach):"})," Runs the container in the background. This means that Docker starts your container and returns you to the terminal prompt."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nginx:stable:"})," Specifies the image and the tag (version) to run. By default, the Docker engine searches for images on DockerHub unless you explicitly specify a different registry in the image name."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"bonus-points",children:"Bonus Points"}),"\n",(0,s.jsxs)(n.p,{children:["Try pulling the same image from ",(0,s.jsx)(n.a,{href:"https://gallery.ecr.aws/nginx/nginx",children:"Amazon ECR Public Gallery"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);