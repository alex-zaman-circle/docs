"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5929],{19784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});n(67294);var o=n(85893),a=n(11151);const i={title:"Delegation"},s=void 0,r={unversionedId:"concepts/nodes/delegation",id:"concepts/nodes/delegation",title:"Delegation",description:"Staking transactions are referred to throughout this document but will not",source:"@site/docs/concepts/nodes/delegation.mdx",sourceDirName:"concepts/nodes",slug:"/concepts/nodes/delegation",permalink:"/docs/concepts/nodes/delegation",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/delegation.mdx",tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1683160952,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{title:"Delegation"},sidebar:"tutorialSidebar",previous:{title:"Flow Archive Access API rate limits on Dapper Labs Archive nodes",permalink:"/docs/concepts/nodes/archive-api-rate-limits"},next:{title:"Flow Users / Backers",permalink:"/docs/concepts/nodes/faq/backers"}},d={},c=[{value:"Separating Node Operation from Holding Stake",id:"separating-node-operation-from-holding-stake",level:2},{value:"Account Key",id:"account-key",level:3},{value:"Staking Key",id:"staking-key",level:3},{value:"Managing Rewards &amp; Stake",id:"managing-rewards--stake",level:2},{value:"Slashing",id:"slashing",level:2},{value:"Process",id:"process",level:2},{value:"FAQ",id:"faq",level:2},{value:"Is the Stake Stored in a User Account?",id:"is-the-stake-stored-in-a-user-account",level:4}];function l(e){const t=Object.assign({p:"p",h2:"h2",a:"a",h3:"h3",em:"em",ul:"ul",li:"li",ol:"ol",strong:"strong",code:"code",h4:"h4"},(0,a.ah)(),e.components),{Callout:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{type:"warning",title:"Staking Transactions",children:(0,o.jsx)(t.p,{children:"Staking transactions are referred to throughout this document but will not\nexist in the described form for Beta Mainnet. At launch, node operators supply\nthe Flow team with their staking key directly to ensure they are included in\nthe genesis process. Staking transactions refer to a future state when nodes\nare dynamically joining and leaving the network which will not be possible\nuntil a later time. \\n\\nAll other mechanisms (smart contracts, rewards, etc.)\nwill work as described at launch."})}),"\n",(0,o.jsx)(t.h2,{id:"separating-node-operation-from-holding-stake",children:"Separating Node Operation from Holding Stake"}),"\n",(0,o.jsx)(t.p,{children:"Reliably operating a node on a decentralized network requires skill and commitment to the preservation of the integrity and security of that network. Providing the capital to pay for that security and earn a return for doing so requires a different set of skills but an equivalent responsibility and duty towards the maintenance of that network."}),"\n",(0,o.jsxs)(t.p,{children:["In acknowledgment of these two critical and very different roles, it is important that Flow enables the participation of both groups in their own right. This separation of roles: capital from operation, is so clear and important that the protocol explicitly differentiates the key needed to operate the node (the Staking Key) from the key which manage the capital associated operating the node (Account Key). The account governed by the account key deposits the stake and receives the rewards. The staking key is used only for node operations and has no direct financial authority. You can learn more about Node Keys ",(0,o.jsx)(t.a,{href:"doc:node-keys",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"account-key",children:"Account Key"}),"\n",(0,o.jsx)(t.p,{children:"Signs the staking transactions for a node (i.e. the transaction that affirms the stake would like to participate in node operation - this is manual for the beta version of the network). Rewards from operating the node will then be deposited into the account governed by the account key. Distribution of the received rewards between the involved parties (node operator(s) and staking-capital provider(s)) can be managed by a smart contract. All accounts on Flow can contain smart contracts and the account governed by the account key is no exception - deploying a contract to that account to support additional logic around the distribution of rewards is straightforward and completely customizable."}),"\n",(0,o.jsx)(t.h3,{id:"staking-key",children:"Staking Key"}),"\n",(0,o.jsx)(t.p,{children:"Is used by the node operator to sign protocol message (such as voting for blocks as a consensus node). The staking key signature on a message authenticates the original sender of that message and guarantees message integrity. In other words, the Staking Key is only relevant for the Flow-internal protocol but it cannot sign any transactions."}),"\n",(0,o.jsxs)(t.p,{children:["You can learn more about this division of identity ",(0,o.jsx)(t.a,{href:"https://docs.onflow.org/docs/nodes-network-identity",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"managing-rewards--stake",children:"Managing Rewards & Stake"}),"\n",(0,o.jsx)(t.p,{children:"As mentioned above, the account key must authorize the initial staking transaction and the withdrawal of the staked FLOW tokens for participation in the protocol. As part of the staking transaction, the public staking key is supplied. If the staking transaction is successful, the stake is withdrawn from the Account governed by the Account Key and the node is authorized to participate in the network."}),"\n",(0,o.jsx)(t.p,{children:"The withdrawn funds are locked by the protocol for the duration of at least one epoch plus the unbonding period. The stake deposits of all nodes are protected by the strong security guarantees of Flow's Byzantine-Fault-Tolerant consensus algorithm. This means that no malicious actor can access the staking deposits. Thereby, Flow guarantees that the deposited stakes are managed in compliance with the protocol rules."}),"\n",(0,o.jsxs)(t.p,{children:["By participating in the network, a node earns rewards, which are automatically deposited (weekly) into the Account governed by the Account Key. This account ",(0,o.jsx)(t.em,{children:"can"})," (optionally) also hold any information and logic (via smart contract(s)) around the management of these funds such as:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"the stake commitments from any individuals who pooled their stake to run the node,"}),"\n",(0,o.jsx)(t.li,{children:"the weight of rewards for their respective stake,"}),"\n",(0,o.jsx)(t.li,{children:"the service fee (or reward portion) paid to the operator of the node (which Flow currently enforces to be a 10% commission on rewards for node operators)"}),"\n",(0,o.jsx)(t.li,{children:"the withdrawal terms of stake from the pool (if longer than/different from those enforced by the protocol), and"}),"\n",(0,o.jsx)(t.li,{children:"the liability for slashing."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"A template delegation contract will be provided by the Flow team initially to ensure the safety of delegators, but ultimately it's completely parameterizable by the agents providing the stake and the node operator."}),"\n",(0,o.jsx)(t.h2,{id:"slashing",children:"Slashing"}),"\n",(0,o.jsxs)(t.p,{children:["So, who gets slashed? Severe slashing on Flow only takes place in the most nefarious of attacks. The protocol reserves slashing for maintaining the security of the protocol rather than its liveness. You can find more details on the conditions under which a node is slashed ",(0,o.jsx)(t.a,{href:"doc:slashing-conditions",children:"here"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"While a node is in operation and during the unbonding period thereafter, the consensus nodes hold the staked tokens. Slashable protocol violations must be adjudicated by a supermajority of more than 2/3 of the staked consensus nodes in order to take effect. If a node is found guilty of committing a slashable protocol violation, the consensus nodes directly deduct a fine from the node's stake. Of course, only the remaining stake is deposited back into the Account governed by the Account Key at the end of the unbonding period."}),"\n",(0,o.jsx)(t.h2,{id:"process",children:"Process"}),"\n",(0,o.jsx)(t.p,{children:"If you are a node operator, who is trying to pool capital to meet the minimum stake for operating a node, there are a couple of things you need to do:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsxs)(t.strong,{children:["Deploy the ",(0,o.jsx)(t.code,{children:"Delegation Contract"})]})," into your Account (in the Beta period, you'll need the Flow team to co-sign your smart-contract-deployment transaction)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Recruit folks who'd like to delegate"})," their stake to your services and submit the appropriate transactions to your contract to assign them their rights."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Run the node"})," (see ",(0,o.jsx)(t.a,{href:"https://docs.onflow.org/docs/setting-up-a-node",children:"Node Operation Section"}),")"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Receive Rewards"})," - you and your delegators will automatically receive rewards according to the payout schedule you defined in the contract."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,o.jsx)(t.h4,{id:"is-the-stake-stored-in-a-user-account",children:"Is the Stake Stored in a User Account?"}),"\n",(0,o.jsx)(t.p,{children:"Unstaked tokens are indeed stored in an account held by the owner of those tokens. When those tokens are successfully staked, the staking amount is withdrawn from the account (which submitted the staking transaction and authorized the token withdrawal). The staked tokens are then:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"entirely locked by the protocol (maintained by the Execution Nodes)"}),"\n",(0,o.jsxs)(t.li,{children:["the stake is added to the Identity for the newly created node (the Identity Table is part of Flow's ",(0,o.jsx)(t.a,{href:"doc:nodes-network-identity",children:(0,o.jsx)(t.em,{children:"Protocol State"})}),", which is maintained by the Consensus Nodes)"]}),"\n",(0,o.jsxs)(t.li,{children:["**At genesis, **Nodes are ",(0,o.jsxs)(t.em,{children:["initialized with the stake already accredited to their ",(0,o.jsx)(t.a,{href:"doc:nodes-network-identity",children:"Network Identity"})]}),", which is external to the Node Operator's Account."]}),"\n"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}]);