/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "getting-started/installation",
        "getting-started/building",
        "getting-started/configuration",
      ],
    },
    {
      type: "category",
      label: "Guides",
      link: {
        type: "generated-index",
        title: "ipsw Guides",
        description: "Let's learn about the most important ipsw concepts!",
        keywords: ["guides"],
      },
      items: [
        "guides/download",
        "guides/info",
        "guides/extract",
        "guides/macho",
        "guides/kernel",
        "guides/dyld",
        "guides/ota",
        "guides/dump_dsc_syms",
        "guides/ent",
        "guides/img4",
        "guides/stub_islands",
        "guides/gadget_search",
        "guides/dump_syscalls",
        "guides/symbolicate",
        "guides/device_list",
        "guides/shsh",
        "guides/debugserver",
        "guides/pongo",
        "guides/ida_pro",
        // {
        //   type: "category",
        //   label: "Docs",
        //   link: {
        //     type: "doc",
        //     id: "guides/docs/introduction",
        //   },
        //   items: [
        //     "guides/docs/create-doc",
        //     {
        //       type: "category",
        //       label: "Sidebar",
        //       link: {
        //         type: "doc",
        //         id: "guides/docs/sidebar/index",
        //       },
        //       items: [
        //         "guides/docs/sidebar/items",
        //         "guides/docs/sidebar/autogenerated",
        //         "guides/docs/sidebar/multiple-sidebars",
        //       ],
        //     },
        //     "guides/docs/versioning",
        //     "guides/docs/multi-instance",
        //   ],
        // },
      ],
    },
    "roadmap",
  ],
  cli: [{ type: "autogenerated", dirName: "cli" }],
};

export default sidebars;
