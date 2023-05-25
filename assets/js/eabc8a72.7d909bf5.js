"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9651],{64003:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});s(67294);var n=s(85893),r=s(11151);const o={},c="Account Abstraction on Flow",a={unversionedId:"concepts/hybrid-custody/guides/account-abstraction",id:"concepts/hybrid-custody/guides/account-abstraction",title:"Account Abstraction on Flow",description:"Flow provides native support for key use cases that are enabled by Account Abstraction, empowering developers to deliver mainstream-ready user experiences.  With Cadence, Flow was designed with these use cases in mind through the separation of the contract and transaction layers.  This guide demonstrates how Flow supports key use cases that are made possible with Account Abstraction.",source:"@site/docs/concepts/hybrid-custody/guides/account-abstraction.md",sourceDirName:"concepts/hybrid-custody/guides",slug:"/concepts/hybrid-custody/guides/account-abstraction",permalink:"/docs/concepts/hybrid-custody/guides/account-abstraction",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/hybrid-custody/guides/account-abstraction.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1685055813,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get Started with Account Linking",permalink:"/docs/concepts/hybrid-custody/get-started"},next:{title:"Account Model & Implementation",permalink:"/docs/concepts/hybrid-custody/guides/account-model"}},i={},d=[{value:"Multi-sig Transactions",id:"multi-sig-transactions",level:2},{value:"Sponsored Transactions",id:"sponsored-transactions",level:2},{value:"Bundled Transactions",id:"bundled-transactions",level:2},{value:"Account Recovery",id:"account-recovery",level:2},{value:"Multi-factor Authentication",id:"multi-factor-authentication",level:2},{value:"Seamless Experience",id:"seamless-experience",level:2}];function l(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"account-abstraction-on-flow",children:"Account Abstraction on Flow"}),"\n",(0,n.jsx)(t.p,{children:"Flow provides native support for key use cases that are enabled by Account Abstraction, empowering developers to deliver mainstream-ready user experiences.  With Cadence, Flow was designed with these use cases in mind through the separation of the contract and transaction layers.  This guide demonstrates how Flow supports key use cases that are made possible with Account Abstraction."}),"\n",(0,n.jsx)(t.h2,{id:"multi-sig-transactions",children:"Multi-sig Transactions"}),"\n",(0,n.jsx)(t.p,{children:"Since accounts are smart contracts, they can be defined in order to require multiple signatures in order to execute a transaction, which unlocks a range of new users that improve the user experience for Web3 apps."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Account Abstraction"}),(0,n.jsx)(t.th,{children:"Flow"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"The move from from Externally-Owned Accounts (EOAs) to smart contract accounts enables developers to build in logic to require multiple signatures to execute transactions."}),(0,n.jsxs)(t.td,{children:["Flow has native support for multi-sig transactions since all accounts are defined as smart contracts. Flow provides ",(0,n.jsx)(t.a,{href:"/docs/concepts/start-here/accounts-and-keys#keys",children:"support for multiple keys"})," to be added to an account and weights can be applied to denote relative priority."]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"sponsored-transactions",children:"Sponsored Transactions"}),"\n",(0,n.jsx)(t.p,{children:"The concept of paying fees to execute transactions in order to use Web3 apps can be a hurdle for newcomers as they begin to explore these experiences.  In order to remove this significant point of friction in requiring newcomers to acquire crypto before they can get started with an app, developers can subsidize these costs on behalf of users."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Account Abstraction"}),(0,n.jsx)(t.th,{children:"Flow"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["The ERC-4337 standard introduces the concept of ",(0,n.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-4337#extension-paymasters",children:"paymasters"}),", which can enable a developer to pay the fees for a transaction for their users."]}),(0,n.jsxs)(t.td,{children:["Flow has built-in support for ",(0,n.jsx)(t.a,{href:"/docs/concepts/start-here/accounts-and-keys#signer-roles",children:"3 different roles"})," for transactions which provides native support for sponsored transactions."]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"bundled-transactions",children:"Bundled Transactions"}),"\n",(0,n.jsx)(t.p,{children:"Developers can deliver a more streamlined user experience that reduces the amount of interruptions in the form of transaction approvals by bundling multiple transactions together into a single transaction that executes the set of operations with one signature."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Account Abstraction"}),(0,n.jsx)(t.th,{children:"Flow"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"The ERC-4337 standard outlines support for bundled transactions through a new mempool that holds user operations from smart wallets. Bundlers package sets of these user operations into a single transaction on the blockchain and return the result back to each wallet."}),(0,n.jsx)(t.td,{children:"Since Cadence has an explicit separation of contracts and transactions, Flow has protocol-level support for bundling transactions across multiple contracts into a single transaction."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"account-recovery",children:"Account Recovery"}),"\n",(0,n.jsx)(t.p,{children:"Account Abstraction enables developers to build more robust account management features for users, addressing the major pain point of losing access to assets forever if the user loses their keys to their account.  Apps can enable users to recover access to their accounts and enclosed assets through social recovery or pre-approved accounts."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Account Abstraction"}),(0,n.jsx)(t.th,{children:"Flow"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Smart contract accounts can be defined to include account recovery logic that enables users to define custom recovery methods that can rely on specific accounts or other validated sources."}),(0,n.jsx)(t.td,{children:"Since all accounts are smart contracts, Flow has native support for account recovery and cycling of keys to help users regain access to accounts in a secure manner."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"multi-factor-authentication",children:"Multi-factor Authentication"}),"\n",(0,n.jsx)(t.p,{children:"Multi-factor authentication is a broadly accepted concept in Web2 apps for secure access to accounts and Account Abstraction enables developers to deliver the same benefits to Web3 users."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Account Abstraction"}),(0,n.jsx)(t.th,{children:"Flow"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Smart contract accounts can require a secondary factor to confirm transactions which can be delivered in the form of familiar confirmation channels such as email or SMS."}),(0,n.jsx)(t.td,{children:"Since all accounts are smart contracts, Flow has native support for multi-factor authentication as developers can implement these security mechanisms for their users."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"seamless-experience",children:"Seamless Experience"}),"\n",(0,n.jsx)(t.p,{children:"Account Abstraction brings the potential for dramatic improvements to the user experience of Web3 apps.  Developers can introduce conditions under which a user can grant a smart contract account to pre-approve transactions under certain conditions, reducing interruptions for the user to explicitly sign each transaction."}),"\n",(0,n.jsx)(t.p,{children:"These improvements are especially notable on mobile, where users are typically met with the jarring experience of switching between apps in approve transactions."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Account Abstraction"}),(0,n.jsx)(t.th,{children:"Flow"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Developers can build new features that streamline the user experience of Web3 apps, such as \u2018session keys\u2019 that pre-approve transactions for a period of time or setting custom limits on transaction volume or network fees."}),(0,n.jsx)(t.td,{children:"Since all accounts are smart contracts, Flow has support for these new controls that enable apps to sign pre-approved transactions based on user controls and preferences."})]})})]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}}}]);