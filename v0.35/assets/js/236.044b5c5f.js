(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{762:function(e,o,s){"use strict";s.r(o);var t=s(1),n=Object(t.a)({},(function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"consensus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consensus"}},[e._v("#")]),e._v(" Consensus")]),e._v(" "),s("p",[e._v("Tendermint Consensus is a distributed protocol executed by validator processes to agree on\nthe next block to be added to the Tendermint blockchain. The protocol proceeds in rounds, where\neach round is a try to reach agreement on the next block. A round starts by having a dedicated\nprocess (called proposer) suggesting to other processes what should be the next block with\nthe "),s("code",[e._v("ProposalMessage")]),e._v(".\nThe processes respond by voting for a block with "),s("code",[e._v("VoteMessage")]),e._v(" (there are two kinds of vote\nmessages, prevote and precommit votes). Note that a proposal message is just a suggestion what the\nnext block should be; a validator might vote with a "),s("code",[e._v("VoteMessage")]),e._v(" for a different block. If in some\nround, enough number of processes vote for the same block, then this block is committed and later\nadded to the blockchain. "),s("code",[e._v("ProposalMessage")]),e._v(" and "),s("code",[e._v("VoteMessage")]),e._v(" are signed by the private key of the\nvalidator. The internals of the protocol and how it ensures safety and liveness properties are\nexplained in a forthcoming document.")]),e._v(" "),s("p",[e._v("For efficiency reasons, validators in Tendermint consensus protocol do not agree directly on the\nblock as the block size is big, i.e., they don't embed the block inside "),s("code",[e._v("Proposal")]),e._v(" and\n"),s("code",[e._v("VoteMessage")]),e._v(". Instead, they reach agreement on the "),s("code",[e._v("BlockID")]),e._v(" (see "),s("code",[e._v("BlockID")]),e._v(" definition in\n"),s("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/spec/core/data_structures.md#blockid",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blockchain"),s("OutboundLink")],1),e._v(" section)\nthat uniquely identifies each block. The block itself is\ndisseminated to validator processes using peer-to-peer gossiping protocol. It starts by having a\nproposer first splitting a block into a number of block parts, that are then gossiped between\nprocesses using "),s("code",[e._v("BlockPartMessage")]),e._v(".")]),e._v(" "),s("p",[e._v("Validators in Tendermint communicate by peer-to-peer gossiping protocol. Each validator is connected\nonly to a subset of processes called peers. By the gossiping protocol, a validator send to its peers\nall needed information ("),s("code",[e._v("ProposalMessage")]),e._v(", "),s("code",[e._v("VoteMessage")]),e._v(" and "),s("code",[e._v("BlockPartMessage")]),e._v(") so they can\nreach agreement on some block, and also obtain the content of the chosen block (block parts). As\npart of the gossiping protocol, processes also send auxiliary messages that inform peers about the\nexecuted steps of the core consensus algorithm ("),s("code",[e._v("NewRoundStepMessage")]),e._v(" and "),s("code",[e._v("NewValidBlockMessage")]),e._v("), and\nalso messages that inform peers what votes the process has seen ("),s("code",[e._v("HasVoteMessage")]),e._v(",\n"),s("code",[e._v("VoteSetMaj23Message")]),e._v(" and "),s("code",[e._v("VoteSetBitsMessage")]),e._v("). These messages are then used in the gossiping\nprotocol to determine what messages a process should send to its peers.")]),e._v(" "),s("p",[e._v("We now describe the content of each message exchanged during Tendermint consensus protocol.")])])}),[],!1,null,null,null);o.default=n.exports}}]);