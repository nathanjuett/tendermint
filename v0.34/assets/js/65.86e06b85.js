(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{660:function(e,t,s){"use strict";s.r(t);var o=s(1),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"docs-build-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docs-build-workflow"}},[e._v("#")]),e._v(" Docs Build Workflow")]),e._v(" "),s("p",[e._v("The documentation for Tendermint Core is hosted at:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.tendermint.com/master/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.tendermint.com/master/"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("built from the files in this ("),s("code",[e._v("/docs")]),e._v(") directory for\n"),s("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("master"),s("OutboundLink")],1),e._v(" respectively.")]),e._v(" "),s("h2",{attrs:{id:"how-it-works"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How It Works")]),e._v(" "),s("p",[e._v("There is a CircleCI job listening for changes in the "),s("code",[e._v("/docs")]),e._v(" directory, on both\nthe "),s("code",[e._v("master")]),e._v(" branch. Any updates to files in this directory\non those branches will automatically trigger a website deployment. Under the hood,\nthe private website repository has a "),s("code",[e._v("make build-docs")]),e._v(" target consumed by a CircleCI job in that repo.")]),e._v(" "),s("h2",{attrs:{id:"readme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#readme"}},[e._v("#")]),e._v(" README")]),e._v(" "),s("p",[e._v("The "),s("RouterLink",{attrs:{to:"/"}},[e._v("README.md")]),e._v(" is also the landing page for the documentation\non the website. During the Jenkins build, the current commit is added to the bottom\nof the README.")],1),e._v(" "),s("h2",{attrs:{id:"config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-js"}},[e._v("#")]),e._v(" Config.js")]),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"./.vuepress/config.js"}},[e._v("config.js")]),e._v(" generates the sidebar and Table of Contents\non the website docs. Note the use of relative links and the omission of\nfile extensions. Additional features are available to improve the look\nof the sidebar.")]),e._v(" "),s("h2",{attrs:{id:"links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links")]),e._v(" "),s("p",[s("strong",[e._v("NOTE:")]),e._v(" Strongly consider the existing links - both within this directory\nand to the website docs - when moving or deleting files.")]),e._v(" "),s("p",[e._v("Links to directories "),s("em",[e._v("MUST")]),e._v(" end in a "),s("code",[e._v("/")]),e._v(".")]),e._v(" "),s("p",[e._v("Relative links should be used nearly everywhere, having discovered and weighed the following:")]),e._v(" "),s("h3",{attrs:{id:"relative"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relative"}},[e._v("#")]),e._v(" Relative")]),e._v(" "),s("p",[e._v("Where is the other file, relative to the current one?")]),e._v(" "),s("ul",[s("li",[e._v("works both on GitHub and for the VuePress build")]),e._v(" "),s("li",[e._v("confusing / annoying to have things like: "),s("code",[e._v("../../../../myfile.md")])]),e._v(" "),s("li",[e._v("requires more updates when files are re-shuffled")])]),e._v(" "),s("h3",{attrs:{id:"absolute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#absolute"}},[e._v("#")]),e._v(" Absolute")]),e._v(" "),s("p",[e._v("Where is the other file, given the root of the repo?")]),e._v(" "),s("ul",[s("li",[e._v("works on GitHub, doesn't work for the VuePress build")]),e._v(" "),s("li",[e._v("this is much nicer: "),s("code",[e._v("/docs/hereitis/myfile.md")])]),e._v(" "),s("li",[e._v("if you move that file around, the links inside it are preserved (but not to it, of course)")])]),e._v(" "),s("h3",{attrs:{id:"full"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full"}},[e._v("#")]),e._v(" Full")]),e._v(" "),s("p",[e._v("The full GitHub URL to a file or directory. Used occasionally when it makes sense\nto send users to the GitHub.")]),e._v(" "),s("h2",{attrs:{id:"building-locally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-locally"}},[e._v("#")]),e._v(" Building Locally")]),e._v(" "),s("p",[e._v("Make sure you are in the "),s("code",[e._v("docs")]),e._v(" directory and run the following commands:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gLXJmIG5vZGVfbW9kdWxlcwo="}}),e._v(" "),s("p",[e._v("This command will remove old version of the visual theme and required packages. This step is optional.")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bnBtIGluc3RhbGwK"}}),e._v(" "),s("p",[e._v("Install the theme and all dependencies.")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bnBtIHJ1biBzZXJ2ZQo="}}),e._v(" "),s("p",[e._v("Run "),s("code",[e._v("pre")]),e._v(" and "),s("code",[e._v("post")]),e._v(" hooks and start a hot-reloading web-server. See output of this command for the URL (it is often "),s("a",{attrs:{href:"https://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://localhost:8080"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("p",[e._v("To build documentation as a static website run "),s("code",[e._v("npm run build")]),e._v(". You will find the website in "),s("code",[e._v(".vuepress/dist")]),e._v(" directory.")]),e._v(" "),s("h2",{attrs:{id:"search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[e._v("#")]),e._v(" Search")]),e._v(" "),s("p",[e._v("We are using "),s("a",{attrs:{href:"https://www.algolia.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Algolia"),s("OutboundLink")],1),e._v(" to power full-text search. This uses a public API search-only key in the "),s("code",[e._v("config.js")]),e._v(" as well as a "),s("a",{attrs:{href:"https://github.com/algolia/docsearch-configs/blob/master/configs/tendermint.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("tendermint.json"),s("OutboundLink")],1),e._v(" configuration file that we can update with PRs.")]),e._v(" "),s("h2",{attrs:{id:"consistency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consistency"}},[e._v("#")]),e._v(" Consistency")]),e._v(" "),s("p",[e._v("Because the build processes are identical (as is the information contained herein), this file should be kept in sync as\nmuch as possible with its "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/DOCS_README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("counterpart in the Cosmos SDK repo"),s("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);