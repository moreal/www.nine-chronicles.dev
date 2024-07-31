import { defineConfig } from 'vitepress'

export const en = defineConfig({
  title: 'NineChronicles Developer Portal',
  description: 'Site for NineChronicles Ecosystem Developers',
  lang: 'en-US',
  themeConfig: {
    outline: 'deep',
    nav: [
      { text: 'Guide', link: '/en/introduce/what-is-nine-chronicles' },
      { text: 'Examples', link: '/en/examples/getting-started' }
    ],

    sidebar: [
      {
        text: 'Introduce',
        collapsed: false,
        items: [
          { text: 'NineChronicles?', link: '/en/introduce/what-is-nine-chronicles' },
          { text: 'Networks', link: '/en/introduce/networks' },
          { text: 'Multiplanetary', link: '/en/introduce/multiplanetary' },
          { text: 'Developer Ecosystem', link: '/en/introduce/developer-ecosystem' },
        ]
      },
      {
        text: 'Create Network',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/en/guide/create-network/getting-started' },
          { text: 'Create a Private Key', link: '/en/guide/create-network/create-a-private-key' },
          { text: 'Create a Genesis Block', link: '/en/guide/create-network/create-a-genesis-block' },
          {
            text: 'Running a Blockchain Node',
            items: [
              { text: '.NET Project', link: '/en/guide/create-network/running-a-blockchain-node-with-dotnet-project' },
              { text: 'Docker' }
            ]
          },
        ]
      },
      {
        text: 'Get State',
        collapsed: false,
        items: [
          { text: 'GraphQL(Headless)', link: '/en/guide/get-state/get-state-with-headless-graphql' },
        ]
      },
      {
        text: 'Issue Transaction',
        collapsed: false,
        items: [
          { text: 'Chrono', link: '/en/guide/issue-transaction/issue-transaction-with-chrono' }
        ]
      },
      {
        text: 'Join Mainnet',
        collapsed: false,
        items: [
          { text: 'Play NineChronicles', link: '/en/guide/join-mainnet/play-nc' },
          { text: 'Operating a Blockchain Node', link: '/en/guide/join-mainnet/operating-a-blockchain-node' },
          { text: 'Modding', link: '/en/guide/join-mainnet/modding' },
        ]
      },
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/en/examples/getting-started' },
          { text: 'Transfer NCG(Chrono)', link: '/en/examples/transfer-ncg-with-chrono' },
          { text: 'Daily Reward DApp', link: '/en/examples/daily-reward-dapp' }
        ]
      },
      {
        text: 'Forum Trunk',
        collapsed: false,
        items: [
          { text: 'About the key store', link: '/en/forum-trunk/about-the-key-store' },
          { text: 'How to select filtered inventory items in the NineChronicles Unity project', link: '/en/forum-trunk/how-to-select-filtered-inventory-items-in-the-nine-chronicles-unity-project' },
          { text: 'How to use my own RPC server, not Planetarium’s', link: '/en/forum-trunk/how-to-use-my-own-rpc-server-not-planetariums' },
          { text: 'The Structure of Lib9c and its implementations (0) - Overview', link: '/en/forum-trunk/the-structure-of-lib9c-and-its-implementations-0-overview' },
          { text: 'Working with Bencodex', link: '/en/forum-trunk/working-with-bencodex' },
          { text: 'NineChronicles service and repository structure', link: '/en/forum-trunk/nine-chronicles-service-and-repository-structure' },
          { text: 'The Structure and Detail of the Snapshot File', link: '/en/forum-trunk/the-structure-and-detail-of-the-snapshot-file' },
          { text: 'Build and run your own NineChronicles server (a.k.a. Headless)', link: '/en/forum-trunk/build-and-run-your-own-nine-chronicles-server-a-k-a-headless' },
          { text: 'Working with Libplanet Web3KeyStore', link: '/en/forum-trunk/working-with-libplanet-web3keystore' },
          { text: 'The Structure and Location of "config.json"', link: '/en/forum-trunk/the-structure-and-location-of-config-json' },
          { text: 'The Structure of Battle System and its implementations (0) - Overview', link: '/en/forum-trunk/the-structure-of-battle-system-and-its-implementations-0-overview' },
          { text: 'The Structure of Battle System and its implementations (1) - Turns and Casting Skills : How Skills to Cast are Selected', link: '/en/forum-trunk/the-structure-of-battle-system-and-its-implementations-1-turns-and-casting-skills-how-skills-to-cast-are-selected' },
          { text: 'Hands-On Modding Tutorial: Wear any constumes you want', link: '/en/forum-trunk/hands-on-modding-tutorial-wear-any-constumes-you-want' },
          { text: '"planet" : Libplanet tools to help your Libplanet development journey', link: '/en/forum-trunk/planet-libplanet-tools-to-help-your-libplanet-development-journey' },
          { text: 'How to fix RocksDB error caused by `libdl`?', link: '/en/forum-trunk/how-to-fix-rocksdb-error-caused-by-libdl' },
          { text: 'Install .NET Core 3.1 in Ubuntu 22.04', link: '/en/forum-trunk/install-net-core-3-1-in-ubuntu-22-04' },
          { text: 'Playing the Nine Chronicles local network with the Unity editor', link: '/en/forum-trunk/playing-the-nine-chronicles-local-network-with-the-unity-editor' },
          { text: '[Tutorial] Planet Node: .NET CLI application as example for Libplanet', link: '/en/forum-trunk/tutorial-planet-node-net-cli-application-as-example-for-libplanet' },
          { text: '[TIP] How to play while changing multiple keys in the Unity editor', link: '/en/forum-trunk/tip-how-to-play-while-changing-multiple-keys-in-the-unity-editor' },
          { text: 'Play 9c on x86 macOS / Linux using CI Artifacts (UNOFFICIAL SUPPORT)', link: '/en/forum-trunk/play-9c-on-x86-macos-linux-using-ci-artifacts-unofficial-support' },
          { text: 'Playing the Nine Chronicles main network with the Unity editor', link: '/en/forum-trunk/playing-the-nine-chronicles-main-network-with-the-unity-editor' },
          { text: 'Create, Analyze APV with the "planet" command', link: '/en/forum-trunk/create-analyze-apv-with-the-planet-command' },
          { text: '[Tutorial] UniLibPlanet: Libplanet SDK Unity package for easily creating a blockchain Unity application', link: '/en/forum-trunk/tutorial-unilibplanet-libplanet-sdk-unity-package-for-easily-creating-a-blockchain-unity-application' },
          { text: 'Explain App Protocol Version(a.k.a. APV)', link: '/en/forum-trunk/explain-app-protocol-version-a-k-a-apv' },
          { text: 'Manage your keys with the ‘planet’ command', link: '/en/forum-trunk/manage-your-keys-with-the-planet-command' },
          { text: 'Processing of the Invitation Code', link: '/en/forum-trunk/processing-of-the-invitation-code' },
          { text: 'Configure a single-node network for testing', link: '/en/forum-trunk/configure-a-single-node-network-for-testing' },
          { text: 'Launcher Preload Procedure', link: '/en/forum-trunk/launcher-preload-procedure' },
          { text: 'Issues with .NET SDK on M1 Mac', link: '/en/forum-trunk/issues-with-net-sdk-on-m1-mac' },
          { text: 'Replay of transactions incorporated into blocks', link: '/en/forum-trunk/replay-of-transactions-incorporated-into-blocks' },
          { text: 'Transfer asset with GraphQL queries', link: '/en/forum-trunk/transfer-asset-with-graphql-queries' },
          { text: '[Unity] How to implement a `Action` logics(feat. TransferAsset)', link: '/en/forum-trunk/unity-how-to-implement-a-action-logics-feat-transferasset' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/planetarium/www.nine-chronicles.dev' }
    ]
  }
});
