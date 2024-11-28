"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8526],{4758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(4848),a=t(8453);const o={sidebar_position:1,title:"Managing Bind Mounts"},r=void 0,s={id:"container-basics/docker-advanced/docker-volumes/managing-bind-volumes",title:"Managing Bind Mounts",description:"Bind mounts",source:"@site/docs/container-basics/docker-advanced/docker-volumes/managing-bind-volumes.md",sourceDirName:"container-basics/docker-advanced/docker-volumes",slug:"/container-basics/docker-advanced/docker-volumes/managing-bind-volumes",permalink:"/hands-on-containers/container-basics/docker-advanced/docker-volumes/managing-bind-volumes",draft:!1,unlisted:!1,editUrl:"https://github.com/armagankaratosun/hands-on-containers/tree/main/packages/create-docusaurus/templates/shared/docs/container-basics/docker-advanced/docker-volumes/managing-bind-volumes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Managing Bind Mounts"},sidebar:"tutorialSidebar",previous:{title:"Docker Volumes",permalink:"/hands-on-containers/category/docker-volumes"},next:{title:"Managing Named Mounts",permalink:"/hands-on-containers/container-basics/docker-advanced/docker-volumes/managing-named-volumes"}},d={},c=[{value:"Bind mounts",id:"bind-mounts",level:2},{value:"Create mount path",id:"create-mount-path",level:3},{value:"Create dummy data",id:"create-dummy-data",level:3},{value:"Bind path to container",id:"bind-path-to-container",level:3},{value:"What just happened?",id:"what-just-happened",level:4},{value:"Check Data inside the container",id:"check-data-inside-the-container",level:3},{value:"Using <code>docker inspect</code> verify the bind path",id:"using-docker-inspect-verify-the-bind-path",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"bind-mounts",children:"Bind mounts"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Bind mounts"})," are the simplest form of Docker volumes, but they offer fewer features compared to Docker-managed volumes. With a bind mount, a file or directory on the host machine is mounted into a container using an absolute path from the host."]}),"\n",(0,i.jsx)("div",{style:{textAlign:"left"},children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Docker Named Volume",src:t(1526).A+"",width:"664",height:"400"})})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Source"}),": ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/storage/bind-mounts",children:"Docker Volume Documentation"})]}),"\n",(0,i.jsxs)(n.p,{children:["In contrast, ",(0,i.jsx)(n.code,{children:"named volumes"})," are created as needed in Docker's storage directory or on a remote storage server (e.g., when using volume drivers). Additionally, bind mounts cannot be managed through the Docker CLI."]}),"\n",(0,i.jsx)(n.h3,{id:"create-mount-path",children:"Create mount path"}),"\n",(0,i.jsx)(n.p,{children:"First, create a directory on your host machine that will be mounted into the container:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir -p /tmp/my-first-container-with-volume\n"})}),"\n",(0,i.jsx)(n.h3,{id:"create-dummy-data",children:"Create dummy data"}),"\n",(0,i.jsx)(n.p,{children:"Now, create a sample file inside the mount path to verify it can be accessed from the container:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'echo "Hello from the host" > /tmp/my-first-container-with-volume/hello.txt\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"bind-path-to-container",children:"Bind path to container"}),"\n",(0,i.jsx)(n.p,{children:"Run the container and bind the host directory to a directory in the container:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:' docker run -d \\\n  -it \\\n  --name my-first-container-with-volume \\\n  --mount type=bind,source="/tmp/my-first-container-with-volume",target=/app/data \\\n  my-first-image:v1\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["There are diffrences between ",(0,i.jsx)(n.code,{children:"-v"})," and ",(0,i.jsx)(n.code,{children:"--mount"})," behavior and ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/storage/bind-mounts/#choose-the--v-or---mount-flag",children:"the details are further explained in the Docker documentation"}),"."]})}),"\n",(0,i.jsx)(n.h4,{id:"what-just-happened",children:"What just happened?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--mount type=bind"})," Defines the mount type."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'source="/tmp/my-first-container-with-volume",target=/app/data'})," Binds the host directory ",(0,i.jsx)(n.code,{children:"/tmp/my-first-container-with-volume"})," to the ",(0,i.jsx)(n.code,{children:"/app/data"})," directory inside the container."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"check-data-inside-the-container",children:"Check Data inside the container"}),"\n",(0,i.jsx)(n.p,{children:"To confirm that the bind mount is working, execute a shell inside the container and view the data:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker exec -it my-first-container-with-volume bash\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once inside the container, list the contents of the /app/data directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ls /app/data\ncat /app/data/hello.txt\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should see hello.txt and its contents (Hello from the host), confirming the host directory is successfully mounted."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"app@3deeb1c8f37f:/app$ ls /app/data/\nhello.txt\napp@3deeb1c8f37f:/app$ cat /app/data/hello.txt\nHello from the host\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"CTRL+D"})," to exit from container shell."]}),"\n",(0,i.jsxs)(n.h3,{id:"using-docker-inspect-verify-the-bind-path",children:["Using ",(0,i.jsx)(n.code,{children:"docker inspect"})," verify the bind path"]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"docker inspect"})," to verify that the bind mount is configured correctly:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker inspect my-first-container-with-volume --format='{{json .Mounts}}'\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command will display detailed information about the mounts used by the container, including the source and target paths."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "Type":"bind",\n      "Source":"/tmp/my-first-container-with-volume",\n      "Destination":"/app/data",\n      "Mode":"",\n      "RW":true,\n      "Propagation":"rprivate"\n   }\n]\n'})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1526:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/docker_volume-428f0eb9da94eaf5c943195df9016637.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(6540);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);