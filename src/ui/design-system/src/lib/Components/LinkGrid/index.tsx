import React from 'react';
import { LinkGridImage } from './LinkGridImage';
import ReadDocs from '../../../../images/page/read-docs.svg';
import ArrowRight from '../../../../images/page/arrow-right.svg';

export interface GridLink {
  title: string;
  href: string;
}

export interface LinkGridSection {
  links: GridLink[];
  header: string;
  imageName: string;
  more: string;
  showBorder?: boolean;
}

export interface LinkGridProps {
  sections: LinkGridSection[];
}

const sections: LinkGridSection[] = [
  {
    header: 'Introduction',
    links: [
      {
        title: 'Hello World Tutorial',
        href: 'https://developers.flow.com/build/getting-started/quickstarts/hello-world',
      },
      {
        title: 'App Architecture',
        href: 'https://developers.flow.com/build/getting-started/app-architecture',
      },
      { title: 'EVM', href: 'https://developers.flow.com/evm/about' },
      { title: 'Flownaut', href: 'https://flownaut.ecdao.org/en' },
      { title: 'Playground', href: 'https://play.flow.com/' },
      {
        title: 'Mobile Quickstart',
        href: 'https://developers.flow.com/build/guides/mobile/overview',
      },
      {
        title: 'More',
        href: 'https://developers.flow.com/build/basics/blocks',
      },
    ],
    imageName: 'docs-introduction',
    more: '/',
  },
  {
    header: 'Fundamentals',
    links: [
      {
        title: 'Wallets',
        href: 'https://developers.flow.com/ecosystem/wallets',
      },
      {
        title: 'Deployment',
        href: 'https://developers.flow.com/build/smart-contracts/deploying',
      },
      {
        title: 'Block Explorer',
        href: 'https://developers.flow.com/ecosystem/block-explorers',
      },
      {
        title: 'Accounts',
        href: 'https://developers.flow.com/build/basics/accounts',
      },
      {
        title: 'Faucets',
        href: 'https://developers.flow.com/ecosystem/faucets',
      },
      {
        title: 'Bridges',
        href: 'https://developers.flow.com/ecosystem/bridges',
      },
      {
        title: 'More',
        href: 'https://developers.flow.com/build/basics/blocks',
      },
    ],
    imageName: 'docs-fundamentals',
    more: '/',
  },
  {
    header: 'The Stack',
    links: [
      {
        title: 'Flow Virtual Machine',
        href: 'https://flow.com/technical-paper',
      },
      {
        title: 'Cadence Smart Contracts',
        href: 'https://developers.flow.com/build/smart-contracts/overview',
      },
      {
        title: 'Cadence Smart Contract Testing',
        href: 'https://developers.flow.com/build/smart-contracts/testing',
      },
      { title: 'Flow CLI', href: 'https://developers.flow.com/tools/flow-cli' },
      {
        title: 'Node Operations',
        href: 'https://developers.flow.com/networks/node-ops',
      },
      {
        title: 'Network Architecture',
        href: 'https://jan-bernatik.medium.com/introduction-to-flow-blockchain-7532977c8af8',
      },
    ],
    imageName: 'docs-the-stack',
    more: 'https://flow.com/decentralization',
  },
  {
    header: 'Advanced',
    links: [
      {
        title: 'Account Abstraction',
        href: 'https://developers.flow.com/build/differences-vs-evm/account-abstraction',
      },
      {
        title: 'Understanding Transaction Time',
        href: 'https://developers.flow.com/build/differences-vs-evm/transaction-time',
      },
      {
        title: 'FLIX',
        href: 'https://developers.flow.com/build/advanced-concepts/flix',
      },
      {
        title: 'Metadata Views',
        href: 'https://developers.flow.com/build/advanced-concepts/metadata-views',
      },
      {
        title: 'VRF',
        href: 'https://developers.flow.com/build/advanced-concepts/randomness',
      },
      {
        title: 'Sponsored Transactions',
        href: 'https://developers.flow.com/build/differences-vs-evm/account-abstraction#sponsored-transactions',
      },
      {
        title: 'Multi-auth Transactions',
        href: 'https://developers.flow.com/build/differences-vs-evm/account-abstraction#multi-sig-transactions',
      },
    ],
    imageName: 'docs-advanced',
    more: '',
    showBorder: false,
  },
];

const SectionCard = ({
  header,
  links,
  imageName,
  more,
  showBorder = true,
}: LinkGridSection): React.ReactNode => {
  const borderStyle = showBorder
    ? 'md:border md:border-solid md:border-gray-400 md:border-t-0 md:border-b-0 md:border-l-0'
    : '';
  return (
    <div className={`p-6 flex flex-col space-y-4 ${borderStyle}`}>
      <LinkGridImage imageName={imageName} />
      <h3 className="text-lg font-semibold">{header}</h3>
      <div className="space-y-2 flex flex-col gap-1">
        {links.map((link, index) => (
          <span
            key={index}
            className="hover:underline hover:primary-green cursor-pointer"
          >
            <a
              className="text-primary-gray-300 hover:text-primary-green"
              href={link.href}
            >
              {link.title}
            </a>
          </span>
        ))}
      </div>
      <a
        href={more}
        className="border-none bg-transparent font-semibold hover:underline mt-auto py-5"
      >
        <span className="md:hidden">View All</span>
        <span className="hidden md:block text-primary-gray-300 hover:text-primary-green">
          More
        </span>
      </a>
    </div>
  );
};

export const LinkGrid = (): React.ReactNode => (
  <div className="container md:border md:border md:border-solid border-gray-400 rounded-lg p-0">
    <div className="p-8 flex flex-col md:flex-row md:items-center md:justify-between md:justify-center md:border-b border-t-0 border-r-0 border-l-0 md:border-solid border-gray-400">
      <div className="text-4xl px-6">Explore the Docs</div>
      <div className="px-6 flex items-center gap-2 font-semibold">
        Read Docs
        <ReadDocs className="hidden md:block stroke-current" />
        <ArrowRight className="md:hidden stroke-current" />
      </div>
    </div>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {sections.map((section, index) => (
        <SectionCard key={index} {...section} />
      ))}
    </div>
  </div>
);
