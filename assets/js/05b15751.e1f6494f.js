(self.webpackChunk=self.webpackChunk||[]).push([[5888],{77702:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>P,frontMatter:()=>v,metadata:()=>w,toc:()=>N});var a=n(87462),o=n(63366),i=n(67294),r=n(3905),l=n(74165),s=n(15861),p=n(73853),c=n(13831);function d(e,t,n){return u.apply(this,arguments)}function u(){return(u=(0,s.Z)((0,l.Z)().mark((function e(t,n,a){var o,r,s,d;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new p.U(n),e.next=3,c.G.create({provider:o});case 3:if(r=e.sent,"polkadot"===t||"kusama"===t){e.next=7;break}return a(i.createElement("div",null)),e.abrupt("return");case 7:s=[],d={color:"#e6007a",cursor:"pointer",textDecoration:"underline"},r.consts.referenda.tracks.forEach((function(e){var n=e.toHuman(),a=n[1].name.replace("_"," ");a=a.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ");var o=m(n[1].minApproval),r=m(n[1].minSupport);s.push(i.createElement("tr",{key:n[0]},i.createElement("td",null,i.createElement("b",null,n[0])),i.createElement("td",null,i.createElement("b",null,a)),i.createElement("td",null,n[1].maxDeciding),i.createElement("td",null,h(n[1].decisionDeposit,t)),i.createElement("td",{style:d,title:n[1].preparePeriod+" Blocks"},g(n[1].preparePeriod)),i.createElement("td",{style:d,title:n[1].decisionPeriod+" Blocks"},g(n[1].decisionPeriod)),i.createElement("td",{style:d,title:n[1].confirmPeriod+" Blocks"},g(n[1].confirmPeriod)),i.createElement("td",{style:d,title:n[1].minEnactmentPeriod+" Blocks"},g(n[1].minEnactmentPeriod)),i.createElement("td",{style:d},o),i.createElement("td",{style:d},r)))})),a(i.createElement("div",{style:{textAlign:"center"}},i.createElement("b",null,t.charAt(0).toUpperCase()+t.slice(1)," Tracks (",s.length,"):"),i.createElement("br",null),i.createElement("div",{style:{border:"1px solid #dadde1"}},i.createElement("table",{style:{margin:0,maxHeight:"600px",borderCollapse:"separate",borderSpacing:0,whiteSpace:"nowrap"}},i.createElement("thead",{style:{width:"100%",textAlign:"center",position:"sticky",top:0,background:"#c1c1c1"}},i.createElement("tr",null,i.createElement("th",null,"ID"),i.createElement("th",null,"Origin"),i.createElement("th",null,"Max Deciding"),i.createElement("th",null,"Decision Deposit"),i.createElement("th",null,"Prepare Period"),i.createElement("th",null,"Decision Period"),i.createElement("th",null,"Confirm Period"),i.createElement("th",null,"Min Enactment Period"),i.createElement("th",null,"Min Approval"),i.createElement("th",null,"Min Support"))),i.createElement("tbody",{style:{width:"100%",textAlign:"center"}},s))),i.createElement("b",{style:{fontSize:"12px"}},"**Hover\xa0",i.createElement("span",{style:{color:"#e6007a",textDecoration:"underline"}},"underlined cell values"),"\xa0for additional info**")));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){if(e.hasOwnProperty("Reciprocal")){var t=e.Reciprocal;return i.createElement("div",{title:"Factor: "+t.factor+", X-Offset: "+t.xOffset+", Y-Offset: "+t.yOffset},"Reciprocal")}if(e.hasOwnProperty("LinearDecreasing")){var n=e.LinearDecreasing;return i.createElement("div",{title:"Length: "+n.length+", Floor: "+n.floor+", Ceiling: "+n.ceil},"Linear Decreasing")}return""}function g(e){var t=e.replace(/\,/g,"");return t=parseInt(t),(t*=6)>=86400?(t/=86400)>1?t+" Days":t+" Day":t%3600==0?(t/=3600)+" Hours":(t/=60)+" Minutes"}function h(e,t){var n={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"}},a=void 0;if("polkadot"===t)a=3;else{if("kusama"!==t)return;a=6}return e=e.replace(/\,/g,""),e=parseFloat(e),(e=Number.isInteger(e/n[t].precision)?e/n[t].precision+" "+n[t].symbol:(e/n[t].precision).toFixed(a)+" "+n[t].symbol).toString()}const k=function(e){var t=e.network,n=e.defaultValue,a=(0,i.useState)(""),o=a[0],r=a[1];return(0,i.useEffect)((0,s.Z)((0,l.Z)().mark((function e(){var a;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=void 0,"polkadot"!==t){e.next=5;break}a="wss://rpc.polkadot.io",e.next=10;break;case 5:if("kusama"!==t){e.next=9;break}a="wss://kusama-rpc.polkadot.io/",e.next=10;break;case 9:return e.abrupt("return",i.createElement("div",null));case 10:return r(i.createElement("div",{style:{color:"#e6007a",textAlign:"center"}},i.createElement("b",null,n))),e.next=13,d(t,a,r);case 13:case"end":return e.stop()}}),e)}))),[]),o};var f=["components"],v={id:"maintain-guides-opengov",title:"Participate in OpenGov",sidebar_label:"Participate in OpenGov",description:"Steps on how to participate in OpenGov.",keywords:["democracy","council","action","proposal","referenda"],slug:"../maintain-guides-opengov"},b=void 0,w={unversionedId:"maintain/maintain-guides-opengov",id:"maintain/maintain-guides-opengov",title:"Participate in OpenGov",description:"Steps on how to participate in OpenGov.",source:"@site/../docs/maintain/maintain-guides-opengov.md",sourceDirName:"maintain",slug:"/maintain-guides-opengov",permalink:"/docs/maintain-guides-opengov",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-opengov.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1675348875,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{id:"maintain-guides-opengov",title:"Participate in OpenGov",sidebar_label:"Participate in OpenGov",description:"Steps on how to participate in OpenGov.",keywords:["democracy","council","action","proposal","referenda"],slug:"../maintain-guides-opengov"},sidebar:"docs",previous:{title:"Participate in Democracy",permalink:"/docs/maintain-guides-democracy"},next:{title:"Join the Council",permalink:"/docs/maintain-guides-how-to-join-council"}},y={},N=[{value:"Create a Referenda Proposal using Polkadot-JS UI",id:"create-a-referenda-proposal-using-polkadot-js-ui",level:2},{value:"Submitting a Preimage",id:"submitting-a-preimage",level:3},{value:"Submitting a Proposal",id:"submitting-a-proposal",level:3},{value:"Voting on Referenda",id:"voting-on-referenda",level:2},{value:"Removing expired voting locks",id:"removing-expired-voting-locks",level:3},{value:"Origins and Tracks",id:"origins-and-tracks",level:2},{value:"Delegating Voting Power",id:"delegating-voting-power",level:2}],E={toc:N};function P(e){var t=e.components,i=(0,o.Z)(e,f);return(0,r.kt)("wrapper",(0,a.Z)({},E,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"OpenGov is live on Kusama Network",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"OpenGov is yet to be deployed on Polkadot Network.")),(0,r.kt)("h2",{id:"create-a-referenda-proposal-using-polkadot-js-ui"},"Create a Referenda Proposal using Polkadot-JS UI"),(0,r.kt)("h3",{id:"submitting-a-preimage"},"Submitting a Preimage"),(0,r.kt)("p",null,"The act of making a proposal is split from submitting the preimage for the proposal since the\nstorage cost of submitting a large preimage could be pretty expensive. Allowing for the preimage\nsubmission to come as a separate transaction means that another account could submit the preimage\nfor you and pay the fee for it. The example below demonstrates the creation of a preimage on Kusama\n(",(0,r.kt)("strong",{parentName:"p"},"the same procedure applies when OpenGov is live on Polkadot"),'). To propose that a remark "Expect\nChaos!" be added to the blockchain, the preimage hash would be\n',(0,r.kt)("inlineCode",{parentName:"p"},"0x8ac3f722caf7677254e25ca4ad77d533ca893c7d2ad4009e258d749f2004ef94"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"submit preimage",src:n(10579).Z,width:"1929",height:"834"})),(0,r.kt)("p",null,"After the preimage is submitted successfuly on-chain, Polkadot-JS UI lists it under the tab of\nGovernance > Preimages."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preimage",src:n(68875).Z,width:"2849",height:"213"})),(0,r.kt)("h3",{id:"submitting-a-proposal"},"Submitting a Proposal"),(0,r.kt)("p",null,'Submitting a proposal requires you to bond some tokens. On Polkadot-JS UI, you can navigate to the\nGovernance -> Referenda to make a new proposal. In order to submit a proposal, you will need to\nsubmit what\'s called the preimage hash. The preimage hash is simply the hash of the proposal to be\nenacted. The easiest way to get the preimage hash is by clicking on the "Submit preimage" button as\nshown in the previous section.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"submit proposal",src:n(31993).Z,width:"1936",height:"1118"})),(0,r.kt)("p",null,"The proposal will be registered from the account selected and the balance lock will be applied to\nit. An appropriate origin must be chosen, as each origin has different privileges, and acceptance\ncriteria. After entering the hash of the preimage for the proposal, the preimage length field is\nautomatically populated. The enactment delay can be specified either as a block number, or as a\nspecific number of blocks after the referendum is approved. The deposit for this proposal will be\nlocked for the referendum duration."),(0,r.kt)("h2",{id:"voting-on-referenda"},"Voting on Referenda"),(0,r.kt)("p",null,'To vote on a referendum, navigate to the "Referenda" tab of Polkadot-JS UI. All the active referenda\nwill be shown in their respective track sections. Click the "Vote" button to cast a vote for the\ncorresponding referendum. As OpenGov takes both the approval and support into account, there are\nfour options to choose from when voting on a referendum:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aye"),(0,r.kt)("li",{parentName:"ul"},"Nay"),(0,r.kt)("li",{parentName:"ul"},"Split"),(0,r.kt)("li",{parentName:"ul"},"Abstain")),(0,r.kt)("p",null,"Also, you have to specify the conviction multiplier for this vote. The longer you are willing to\nlock your tokens, the stronger your vote will be weighted. Unwillingness to lock your tokens means\nthat your vote only counts for 10% of the tokens that you hold."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"vote on referendum",src:n(10626).Z,width:"1931",height:"820"})),(0,r.kt)("admonition",{title:"OpenGov uses Conviction Voting Pallet (Not Democracy Pallet)",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"convictionVoting.vote")," for voting on Referenda in OpenGov instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"democracy.vote")," (which\nonly works for old version of governance).")),(0,r.kt)("h3",{id:"removing-expired-voting-locks"},"Removing expired voting locks"),(0,r.kt)("p",null,"To remove the lock from votes you first need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"removeVote")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"unlock")," through the\n",(0,r.kt)("inlineCode",{parentName:"p"},"convictionVoting")," pallet."),(0,r.kt)("h2",{id:"origins-and-tracks"},"Origins and Tracks"),(0,r.kt)(k,{network:"kusama",defaultValue:"Loading Kusama Tracks...",mdxType:"Tracks"}),(0,r.kt)("h2",{id:"delegating-voting-power"},"Delegating Voting Power"),(0,r.kt)("p",null,"For an overview on how delegation works in OpenGov, check out the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-opengov#multirole-delegation"},"Multirole Delegation")," section on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-opengov"},"Learn OpenGov")," page."),(0,r.kt)("p",null,"The following steps outline how to delegate voting power in OpenGov through Polkadot-JS UI:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/referenda"},"referenda tab")),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Delegate")," icon in the top-right corner\n",(0,r.kt)("img",{alt:"Delegate Window",src:n(91360).Z,width:"909",height:"263"})),(0,r.kt)("li",{parentName:"ol"},"Ensure the ",(0,r.kt)("inlineCode",{parentName:"li"},"delegate from account")," field lists the account you wish to apply delegation over"),(0,r.kt)("li",{parentName:"ol"},"Next, select the appropriate ",(0,r.kt)("inlineCode",{parentName:"li"},"submission track")," that you wish to delegate (or select the option\n",(0,r.kt)("inlineCode",{parentName:"li"},"apply delegation to all tracks"),")"),(0,r.kt)("li",{parentName:"ol"},"Specify the ",(0,r.kt)("inlineCode",{parentName:"li"},"delegate vote value"),", which is the amount of DOT or KSM you wish to provide the\ndelegate with"),(0,r.kt)("li",{parentName:"ol"},"Provide a ",(0,r.kt)("inlineCode",{parentName:"li"},"conviction")," multiplier determining how long the funds from the previous step are locked\n(for additional details see the section on ",(0,r.kt)("a",{parentName:"li",href:"#voluntary-locking"},"Voluntary Locking"),") and click\n",(0,r.kt)("inlineCode",{parentName:"li"},"Next")),(0,r.kt)("li",{parentName:"ol"},"The final step is to provide the account address that will be the delegate for the original\naccount provided (this account will be receiving the voting power for the source account on\nthe specified track)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Delegate",src:n(65748).Z,width:"902",height:"507"})),(0,r.kt)("p",null,"When you are ready to undelegate:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/extrinsics"},"extrinsics tab")),(0,r.kt)("li",{parentName:"ol"},"Select a wallet address that is currently delegating to another account"),(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("inlineCode",{parentName:"li"},"submit the following extrinsic")," dropdown, select ",(0,r.kt)("inlineCode",{parentName:"li"},"convictionVoting")),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"undelegate")," from the next dropdown to the right of the previous step (note you can also\ndelegate from this page as an alternative to the solution provided above)"),(0,r.kt)("li",{parentName:"ol"},"Provide the ",(0,r.kt)("inlineCode",{parentName:"li"},"submission track")," that was used when originally delegating from above"),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the transaction to restore the voting power back to the original source address")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Undelegate",src:n(98590).Z,width:"914",height:"605"})))}P.isMDXComponent=!0},65748:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/Delegate-Kusama-9b0f4f8eb22e9fa9d9fe4b578e8fd24e.png"},91360:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/Delegate-Window-Kusama-961c2052e6674e543bad14a509da8af3.png"},98590:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/Undelegate-Kusama-e4ef12e5cf91131a78739f92de8ddf75.png"},68875:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/opengov-preimage-submitted-cf1811497c4ddf510761c983b3219e8f.png"},10579:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/opengov-submit-preimage-73c7439c7ba3d5d07925a27a1e144164.png"},31993:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/opengov-submit-proposal-0c82b35f3f7b1d9e66130a621b76c44b.png"},10626:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/opengov-vote-referendum-67f2885a5ee834d341a7e02d726fd85c.png"},95856:()=>{},46601:()=>{}}]);