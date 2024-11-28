"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2004],{2704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(4848),i=t(8453);const s={sidebar_position:2,title:"Zero-downtime Deployments"},o=void 0,r={id:"kubernetes-basics/zero-downtime-deployment",title:"Zero-downtime Deployments",description:"To showcase rolling updates in Kubernetes, we\u2019ll start with a k8s-getting-started deployment using v1 of the application image. Then, we\u2019ll update the deployment to v2, which will change the background color to green.",source:"@site/docs/kubernetes-basics/zero-downtime-deployment.md",sourceDirName:"kubernetes-basics",slug:"/kubernetes-basics/zero-downtime-deployment",permalink:"/hands-on-containers/kubernetes-basics/zero-downtime-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/armagankaratosun/hands-on-containers/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes-basics/zero-downtime-deployment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Zero-downtime Deployments"},sidebar:"tutorialSidebar",previous:{title:"Let's Break Your First Deployment",permalink:"/hands-on-containers/kubernetes-basics/kubernetes-101/break-your-first-deployment"},next:{title:"Kubernetes: Advanced Topics",permalink:"/hands-on-containers/category/kubernetes-advanced-topics"}},d={},l=[{value:"Start with the Initial Deployment (v1)",id:"start-with-the-initial-deployment-v1",level:2},{value:"Apply the Initial Deployment (v1)",id:"apply-the-initial-deployment-v1",level:2},{value:"Example Output",id:"example-output",level:3},{value:"What just happened?",id:"what-just-happened",level:3},{value:"Update to <code>v2</code> to Trigger a Rolling Update",id:"update-to-v2-to-trigger-a-rolling-update",level:2},{value:"Example Output",id:"example-output-1",level:3},{value:"Verify the Update",id:"verify-the-update",level:2},{value:"Bonus Points",id:"bonus-points",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"To showcase rolling updates in Kubernetes, we\u2019ll start with a k8s-getting-started deployment using v1 of the application image. Then, we\u2019ll update the deployment to v2, which will change the background color to green."}),"\n",(0,a.jsx)(n.p,{children:"The RollingUpdate strategy will allow us to update the application gradually, without any downtime."}),"\n",(0,a.jsx)(n.h2,{id:"start-with-the-initial-deployment-v1",children:"Start with the Initial Deployment (v1)"}),"\n",(0,a.jsxs)(n.p,{children:["Below is the YAML manifest for ",(0,a.jsx)(n.code,{children:"k8s-getting-started"})," using the ",(0,a.jsx)(n.code,{children:"RollingUpdate"})," strategy. This deployment will start with version ",(0,a.jsx)(n.code,{children:"v1"}),", which has a blue background. (Located at ",(0,a.jsx)(n.code,{children:"Deployments/deployment-rolling.yaml"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: k8s-getting-started\n  labels:\n    app: k8s-getting-started\nspec:\n  replicas: 5\n  strategy:\n    type: RollingUpdate            # Sets the update strategy to "RollingUpdate" for gradual updates\n    rollingUpdate:\n      maxUnavailable: 0            # Ensures no existing pods are terminated until new ones are ready\n      maxSurge: 1                  # Allows up to 1 extra pod during the update process for seamless transition\n  selector:\n    matchLabels:\n      app: k8s-getting-started\n  template:\n    metadata:\n      labels:\n        app: k8s-getting-started\n    spec:\n      containers:\n        - name: k8s-getting-started\n          image: armagankaratosun/k8s-getting-started:v1  # Initial image with blue background\n          ports:\n            - containerPort: 8080\n'})}),"\n",(0,a.jsx)(n.h2,{id:"apply-the-initial-deployment-v1",children:"Apply the Initial Deployment (v1)"}),"\n",(0,a.jsx)(n.p,{children:"To deploy version v1, run:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f deployment-rolling.yaml -n <your-namespace>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-output",children:"Example Output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"armagan@ ~ $ kubectl apply -f k8s-getting-started/Deployments/deployment-rolling.yaml -n <your-namespace>\ndeployment.apps/k8s-getting-started configured\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can list the available pods"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"armagan@ ~ $ kubectl get pods -n <your-namespace>\n\nNAME                                   READY   STATUS    RESTARTS   AGE\nk8s-getting-started-6697dbc867-7lss8   1/1     Running   0          17m\nk8s-getting-started-6697dbc867-b9nst   1/1     Running   0          17m\nk8s-getting-started-6697dbc867-jnfjq   1/1     Running   0          17m\nk8s-getting-started-6697dbc867-m6dz4   1/1     Running   0          17m\nk8s-getting-started-6697dbc867-wd24j   1/1     Running   0          17m\n"})}),"\n",(0,a.jsx)(n.h3,{id:"what-just-happened",children:"What just happened?"}),"\n",(0,a.jsx)(n.p,{children:"Kubernetes has now updated our deployment configuration, setting the update strategy to RollingUpdate to manage the upgrade process gradually."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"RollingUpdate"}),": This strategy replaces pods gradually, reducing disruption. Pods are updated one or a few at a time, minimizing downtime by allowing new pods to be ready before old pods are taken offline."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"maxUnavailable: 0"}),": Ensures no pods are terminated until the new pods are running. This helps maintain 100% availability."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"maxSurge: 1"}),": Allows 1 extra pod during the update, so a new pod can be created before terminating an old one. This extra capacity supports seamless scaling during updates."]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"update-to-v2-to-trigger-a-rolling-update",children:["Update to ",(0,a.jsx)(n.code,{children:"v2"})," to Trigger a Rolling Update"]}),"\n",(0,a.jsxs)(n.p,{children:["Now, let\u2019s update the deployment to use version ",(0,a.jsx)(n.code,{children:"v2"}),", which has a green background. This gradual transition will allow us to observe the ",(0,a.jsx)(n.code,{children:"RollingUpdate"})," strategy in action."]}),"\n",(0,a.jsxs)(n.p,{children:["Edit the image in deployment.yaml to use ",(0,a.jsx)(n.code,{children:"v2"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"spec:\n      containers:\n        - name: k8s-getting-started\n          image: armagankaratosun/k8s-getting-started:v2  # Updated to v2 with green background\n          ports:\n            - containerPort: 8080\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-output-1",children:"Example Output"}),"\n",(0,a.jsxs)(n.p,{children:["Kubernetes will update one pod at a time, creating a new pod with ",(0,a.jsx)(n.code,{children:"v2"})," (green background) and waiting for it to be ready before terminating an old pod with ",(0,a.jsx)(n.code,{children:"v1"})," (blue background). This process repeats until all pods are updated to v2."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"armagan@ ~ $ kubectl apply -f k8s-getting-started/Deployments/deployment-rolling.yaml -n <your-namespace>\ndeployment.apps/k8s-getting-started configured\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can list the available pods"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"armagan@ ~ $ kubectl get pods -n <your-namespace> -o wide\n\nNAME                                   READY   STATUS        RESTARTS   AGE   IP              NODE                                                         NOMINATED NODE   READINESS GATES\nk8s-getting-started-5dfdb8787d-249qw   1/1     Running       0          36s   10.66.149.147   k8s-training-generic-worker-pool-mcvxl-56bgd.datacoord.ewc   <none>           <none>\nk8s-getting-started-5dfdb8787d-527gm   1/1     Running       0          33s   10.66.189.22    k8s-training-generic-worker-pool-mcvxl-wxsg9.datacoord.ewc   <none>           <none>\nk8s-getting-started-5dfdb8787d-6pnpg   1/1     Running       0          23s   10.66.166.144   k8s-training-generic-worker-pool-mcvxl-zdpxd.datacoord.ewc   <none>           <none>\nk8s-getting-started-5dfdb8787d-8cvnn   1/1     Running       0          30s   10.66.220.15    k8s-training-generic-worker-pool-mcvxl-4jlhw.datacoord.ewc   <none>           <none>\nk8s-getting-started-5dfdb8787d-j2572   1/1     Running       0          27s   10.66.250.152   k8s-training-generic-worker-pool-mcvxl-wtfkw.datacoord.ewc   <none>           <none>\nk8s-getting-started-6697dbc867-7lss8   1/1     Terminating   0          21m   10.66.189.21    k8s-training-generic-worker-pool-mcvxl-wxsg9.datacoord.ewc   <none>           <none>\nk8s-getting-started-6697dbc867-b9nst   1/1     Terminating   0          21m   10.66.250.151   k8s-training-generic-worker-pool-mcvxl-wtfkw.datacoord.ewc   <none>           <none>\nk8s-getting-started-6697dbc867-m6dz4   1/1     Terminating   0          21m   10.66.166.143   k8s-training-generic-worker-pool-mcvxl-zdpxd.datacoord.ewc   <none>           <none>\nk8s-getting-started-6697dbc867-wd24j   1/1     Terminating   0          21m   10.66.220.14    k8s-training-generic-worker-pool-mcvxl-4jlhw.datacoord.ewc   <none>           <none>\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(846).A+"",width:"1377",height:"833"})}),"\n",(0,a.jsx)(n.h2,{id:"verify-the-update",children:"Verify the Update"}),"\n",(0,a.jsxs)(n.p,{children:["During the update, if you access ",(0,a.jsx)(n.a,{href:"localhost:8080",children:"localhost:8080"})," and refresh the browser, you\u2019ll notice that some pods are serving the ",(0,a.jsx)(n.code,{children:"v2"})," version with a green background, while others are still on ",(0,a.jsx)(n.code,{children:"v1"})," with a blue background."]}),"\n",(0,a.jsx)(n.p,{children:"Once the update is fully complete, all pods should be running the new image, and the background color will consistently appear as green."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(80).A+"",width:"1126",height:"659"})}),"\n",(0,a.jsx)(n.h2,{id:"bonus-points",children:"Bonus Points"}),"\n",(0,a.jsxs)(n.p,{children:["Try deploying the intentionally broken image ",(0,a.jsx)(n.code,{children:"armagankaratosun/k8s-getting-started:broken"})," again to simulate an issue. Observe whether the deployment works as expected under the ",(0,a.jsx)(n.code,{children:"RollingUpdate"})," strategy."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},80:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/green-34f2833d858f0c8e59d400ac7b512530.png"},846:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/rancher-1c2d84fcdf0a68c6cedfa40f94a1c74d.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(6540);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);