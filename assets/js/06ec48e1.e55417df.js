"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2823],{3378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var a=t(4848),s=t(8453);const r={sidebar_position:2,title:"Exposing Services via Loadbalancer"},i=void 0,c={id:"kubernetes-basics/kubernetes-advanced/service-loadbalancer",title:"Exposing Services via Loadbalancer",description:"Source code: k8s-getting-started GitHub Repository",source:"@site/docs/kubernetes-basics/kubernetes-advanced/service-loadbalancer.md",sourceDirName:"kubernetes-basics/kubernetes-advanced",slug:"/kubernetes-basics/kubernetes-advanced/service-loadbalancer",permalink:"/hands-on-containers/kubernetes-basics/kubernetes-advanced/service-loadbalancer",draft:!1,unlisted:!1,editUrl:"https://github.com/armagankaratosun/hands-on-containers/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes-basics/kubernetes-advanced/service-loadbalancer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Exposing Services via Loadbalancer"},sidebar:"tutorialSidebar",previous:{title:"Working with StorageClass and PVCs",permalink:"/hands-on-containers/kubernetes-basics/kubernetes-advanced/pod-with-pvc"},next:{title:"Exposing Services via Ingress",permalink:"/hands-on-containers/kubernetes-basics/kubernetes-advanced/service-ingress"}},d={},o=[{value:"Deploy the application (if you dont already)",id:"deploy-the-application-if-you-dont-already",level:2},{value:"Example Output",id:"example-output",level:3},{value:"Create a LoadBalancer Service",id:"create-a-loadbalancer-service",level:2},{value:"Example Output",id:"example-output-1",level:3},{value:"What just happened?",id:"what-just-happened",level:3},{value:"Browser Output",id:"browser-output",level:4}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Source code: ",(0,a.jsx)(n.a,{href:"https://github.com/armagankaratosun/k8s-getting-started",children:"k8s-getting-started GitHub Repository"})]}),"\n",(0,a.jsx)(n.p,{children:"You can copy/paste the YAML manifests from this guide, or clone the repository to edit and use the manifests directly."}),"\n",(0,a.jsx)(n.h2,{id:"deploy-the-application-if-you-dont-already",children:"Deploy the application (if you dont already)"}),"\n",(0,a.jsxs)(n.p,{children:["Below are the YAML manifests for a Kubernetes Deployment using a demo container image. (Located at ",(0,a.jsx)(n.code,{children:"Deployments/deployment.yaml"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: k8s-getting-started\n  labels:\n    app: k8s-getting-started\nspec:\n  replicas: 5\n  strategy:\n    type: Recreate # Specifies the strategy type as "Recreate", meaning that pods will be updated all at once\n  selector:\n    matchLabels:\n      app: k8s-getting-started\n  template:\n    metadata:\n      labels:\n        app: k8s-getting-started\n    spec:\n      containers:\n        - name: k8s-getting-started\n          image: armagankaratosun/k8s-getting-started:v1\n          ports:\n            - containerPort: 8080\n'})}),"\n",(0,a.jsx)(n.p,{children:"Apply the Initial Deployment\nTo deploy, run:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"kubectl apply -f deployment.yaml -n <your-namespace>"})}),"\n",(0,a.jsx)(n.h3,{id:"example-output",children:"Example Output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"armagan@ ~ $ kubectl apply -f k8s-getting-started/Deployments/deployment.yaml -n <your-namespace>\ndeployment.apps/k8s-getting-started created\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can list the available pods"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"armagan@ ~ $ kubectl get pods -n <your-namespace>\n\nNAME                                   READY   STATUS    RESTARTS   AGE\nk8s-getting-started-6697dbc867-9r49d   1/1     Running   0          31s\nk8s-getting-started-6697dbc867-rfm25   1/1     Running   0          32s\nk8s-getting-started-6697dbc867-tjr4w   1/1     Running   0          32s\nk8s-getting-started-6697dbc867-w5jbb   1/1     Running   0          31s\nk8s-getting-started-6697dbc867-zrp2z   1/1     Running   0          32s\n"})}),"\n",(0,a.jsx)(n.h2,{id:"create-a-loadbalancer-service",children:"Create a LoadBalancer Service"}),"\n",(0,a.jsxs)(n.p,{children:["This will create a LoadBalancer service, accessible by everyone with a public IP address provided by your cloud provider. (Located at ",(0,a.jsx)(n.code,{children:"Services/service-loadbalancer.yaml"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: k8s-getting-started-loadbalancer\nspec:\n  type: LoadBalancer  # Service type to provision an external IP address\n  selector:\n    app: k8s-getting-started  # Matches the label of the Deployment\n  ports:\n    - protocol: TCP\n      port: 80           # Port exposed externally\n      targetPort: 8080     # Port on the container that the app is running on\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-output-1",children:"Example Output"}),"\n",(0,a.jsxs)(n.p,{children:["Check the ",(0,a.jsx)(n.code,{children:"k8s-getting-started-loadbalancer"})," Service and its ",(0,a.jsx)(n.code,{children:"EXTERNAL-IP"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"armagan@darwin ~ $ kubectl get svc\nNAME                                      TYPE           CLUSTER-IP      EXTERNAL-IP       PORT(S)        AGE\nk8s-getting-started-loadbalancer          LoadBalancer   10.67.120.80    <your-external-ip>   80:30654/TCP   13d\nk8s-getting-started-service               ClusterIP      10.67.176.167   <none>            8080/TCP       13d\n"})}),"\n",(0,a.jsx)(n.h3,{id:"what-just-happened",children:"What just happened?"}),"\n",(0,a.jsxs)(n.p,{children:["The cloud provider provisioned a cloud load balancer to expose your service. Now it is accessible at ",(0,a.jsx)(n.code,{children:"EXTERNAL-IP"}),": ",(0,a.jsx)(n.code,{children:"<your-external-ip>"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Try accessing the service from a browser."}),"\n",(0,a.jsx)(n.h4,{id:"browser-output",children:"Browser Output"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(911).A+"",width:"816",height:"628"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},911:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/blue-fea573f56041b145d0ace80d5a8016dc.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var a=t(6540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);