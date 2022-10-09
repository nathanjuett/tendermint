(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{818:function(e,t,n){"use strict";n.r(t);var o=n(1),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"peer-manager-wip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#peer-manager-wip"}},[e._v("#")]),e._v(" Peer manager - WIP")]),e._v(" "),n("p",[e._v("The peer manager is the component of the "),n("em",[e._v("new")]),e._v(" p2p layer that implements\nthe connection policy for the node, based on the\nconfiguration provided by the operators, the current state of the connections\nreported by the "),n("RouterLink",{attrs:{to:"/spec/p2p/v0.35/router.html"}},[n("code",[e._v("Router")])]),e._v(", and the set of known candidate peers.")],1),e._v(" "),n("p",[e._v("This document uses "),n("em",[e._v("candidate peer")]),e._v(" to refer to the information about a node in\nthe network, namely its unique identifier and one or more network addresses.\nThis information can be manually configured by the node operator (e.g., via\n"),n("code",[e._v("PersistentPeers")]),e._v(" parameter) or can be obtained via the Peer-Exchange Protocol\n(PEX), which feeds the peer manager with discovered peers' information.")]),e._v(" "),n("h2",{attrs:{id:"connection-policy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connection-policy"}},[e._v("#")]),e._v(" Connection policy")]),e._v(" "),n("p",[e._v("The connection policy defines:")]),e._v(" "),n("ol",[n("li",[e._v("When the node should establish new connections to peers, and")]),e._v(" "),n("li",[e._v("The next peer to which the router should try to establish a connection.")])]),e._v(" "),n("p",[e._v("The first definition is made based on the concept of "),n("a",{attrs:{href:"#connection-slots"}},[e._v("connection slots")]),e._v(".\nIn short, the peer manager will try to fill every connection slot with a peer.\nIf all the connection slots are full but there is the possibility to connect to\na peer that is higher-"),n("a",{attrs:{href:"#peer-ranking"}},[e._v("ranked")]),e._v(" than one of the connecting peers,\nthe peer manager may attempt to "),n("a",{attrs:{href:"#slot-upgrades"}},[e._v("upgrade a connection slot")]),e._v(".\nDetails of these operations are provided in the following.")]),e._v(" "),n("h3",{attrs:{id:"connection-slots"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connection-slots"}},[e._v("#")]),e._v(" Connection slots")]),e._v(" "),n("p",[e._v("The number of connection slots is defined by the "),n("code",[e._v("MaxConnected")]),e._v(" parameter.")]),e._v(" "),n("p",[e._v("While there are available connection slots, the peer manager will provide\ncandidate peers to the router, which will try to establish\nnew connections to them.\nWhen the peer manager provides a candidate peer to\nthe router, a connection slot becomes "),n("em",[e._v("virtually")]),e._v(" occupied by the peer, as the\nrouter should be dialing it.")]),e._v(" "),n("p",[e._v("When the router establishes a connection to a peer, either\nbecause it "),n("a",{attrs:{href:"#accepted-transition"}},[e._v("accepted a connection")]),e._v(" from a peer,\nor because it "),n("a",{attrs:{href:"#dialed-transition"}},[e._v("successfully dialed")]),e._v(" a candidate peer,\nthe peer manager should find a slot for this connection.")]),e._v(" "),n("p",[e._v("If there is an available connection slot, and this is the first connection\nestablished with that peer, the slot is filled by the new connection and\nthe peer becomes a "),n("a",{attrs:{href:"#connected-peer"}},[e._v("connected peer")]),e._v(".\nThe peer manager does not allow two slots to be filled with connections to the\nsame peer.")]),e._v(" "),n("p",[e._v("If all "),n("code",[e._v("MaxConnected")]),e._v(" connection slots are full, the node should "),n("em",[e._v("a priori")]),e._v("\nreject the connection established with or accepted from the peer.\nHowever, it is possible that the new connection is with a peer whose score is\nbetter than the score of a peer occupying one of the connection slots.\nIn this case, the peer manager will try to "),n("a",{attrs:{href:"#slot-upgrades"}},[e._v("upgrade the slot")]),e._v("\nto make room to the new connection, by evicting the peer currently occupying\nthis slot.")]),e._v(" "),n("blockquote",[n("p",[e._v("Although not advisable, the "),n("code",[e._v("MaxConnected")]),e._v(" parameter can be set to "),n("code",[e._v("0")]),e._v(", which\nmeans no limit.")]),e._v(" "),n("p",[e._v("In this case, the node will accept all connections established by peers, and\nwill try to establish connections (dial) to every candidate peer it knows.")])]),e._v(" "),n("h3",{attrs:{id:"outgoing-connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#outgoing-connections"}},[e._v("#")]),e._v(" Outgoing connections")]),e._v(" "),n("p",[e._v("The peer manager distinguishes "),n("em",[e._v("incoming")]),e._v(" from "),n("em",[e._v("outgoing")]),e._v(" connections.\nA connection is "),n("em",[e._v("incoming")]),e._v(" when the router has "),n("a",{attrs:{href:"#accepted-transition"}},[e._v("accepted")]),e._v("\nit from a peer.\nA connection is "),n("em",[e._v("outgoing")]),e._v(" when the router has successfully\n"),n("a",{attrs:{href:"#dialed-transition"}},[e._v("dialed")]),e._v(" a peer.")]),e._v(" "),n("p",[e._v("If the "),n("code",[e._v("MaxOutgoingConnections")]),e._v(" parameter is set (i.e., it is greater than zero), it\ndefines the maximum number of "),n("em",[e._v("outgoing")]),e._v(" connections the node should maintain.\nMore precisely, it determines that the node should not attempt to dial new\npeers when the router already has established outgoing connections to\n"),n("code",[e._v("MaxOutgoingConnections")]),e._v(" peers.\nThis parameter cannot be set to a value larger than "),n("code",[e._v("MaxConnected")]),e._v(".")]),e._v(" "),n("blockquote",[n("p",[e._v("The previous version of the "),n("code",[e._v("p2p")]),e._v(" explicitly distinguished incoming and\noutgoing peers. Configuring the "),n("code",[e._v("MaxOutgoingConnections")]),e._v(" parameters should\ntherefore make the connection policy similar to the one adopted in the\nprevious version. (TODO: check)")])]),e._v(" "),n("h3",{attrs:{id:"slot-upgrades"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slot-upgrades"}},[e._v("#")]),e._v(" Slot upgrades")]),e._v(" "),n("p",[e._v("The rationale behind this concept is that the node may try to establish or\naccept connections even when all the connection slots are full, provided that\nthe peer in the other side of the new connection is better-ranked than a peer\nthat is occupying a connection slot.\nA slot can therefore be upgraded, meaning that the lower-ranked peer\noccupying the slot will be replaced by a higher-ranked peer.")]),e._v(" "),n("p",[e._v("The upgrading of connection slots is determined by the "),n("code",[e._v("MaxConnectedUpgrade")]),e._v("\nparameter, which defines the number of connections that the peer manager can\nuse for upgrading connection slots.")]),e._v(" "),n("p",[e._v("If "),n("code",[e._v("MaxConnectedUpgrade")]),e._v(" is set to zero, the upgrading of connection slots is\ndisabled.\nThis means, in particular, that "),n("code",[e._v("MaxConnected")]),e._v(" is the hard limit of peers that\ncan be in the "),n("a",{attrs:{href:"#connected-peer"}},[e._v("connected state")]),e._v(".")]),e._v(" "),n("p",[e._v("If "),n("code",[e._v("MaxConnectedUpgrade")]),e._v(" is larger than zero, the upgrading of connection slots\nis enabled.\nAs a result, the hard limit for the number of peers that can be in the\n"),n("a",{attrs:{href:"#connected-peer"}},[e._v("connected state")]),e._v(" becomes "),n("code",[e._v("MaxConnected + MaxConnectedUpgrade")]),e._v(".\nSome of these peers, however, will not remain in this state as they should be\n"),n("a",{attrs:{href:"#evictnext-transition"}},[e._v("evicted")]),e._v(" by the router.")]),e._v(" "),n("h3",{attrs:{id:"peer-ranking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#peer-ranking"}},[e._v("#")]),e._v(" Peer ranking")]),e._v(" "),n("p",[e._v("The peer manager should rank peers based on user-provided parameters and on the\ncurrent state of the peer.")]),e._v(" "),n("p",[e._v("The ranking is established by ordering all known peers by its score.\nThis mechanism is currently very basic.")]),e._v(" "),n("blockquote",[n("p",[e._v("The code contains a number of potential replacements for this ranking\nmechanism. Therefore, improving this mechanism is a work in progress.")])]),e._v(" "),n("p",[e._v("Peers configured as "),n("code",[e._v("PersistentPeers")]),e._v(" have "),n("em",[e._v("always")]),e._v(" "),n("code",[e._v("PeerScorePersistent")]),e._v(",\nwhich is the maximum allowed peer score.")]),e._v(" "),n("p",[e._v("The remaining peers have a "),n("code",[e._v("MutableScore")]),e._v(", initialized to "),n("code",[e._v("0")]),e._v(" when the peer is\nadded to the peer manager.\nWhen the peer is reported as a "),n("code",[e._v("PeerStatusGood")]),e._v(", its score is incremented.\nWhen the peer is reported as a "),n("code",[e._v("PeerStatusBad")]),e._v(", its score is decremented.")]),e._v(" "),n("blockquote",[n("p",[e._v('The mechanisms based on the "reputation" of the peer according to reactors,\nhowever, appears not to be fully implemented.\nA peer is never '),n("code",[e._v("PeerStatusGood")]),e._v(", and is only reported as "),n("code",[e._v("PeerStatusBad")]),e._v(' a\nreactor interacting with the peer reports an error to the router, and the\nerror is not "fatal".\nIf the error is fatal, the peer is reported as '),n("a",{attrs:{href:"#errored-transition"}},[e._v("errored")]),e._v(".")])]),e._v(" "),n("p",[e._v("This score can also be "),n("em",[e._v("temporarily")]),e._v(" decremented due to connection errors.\nWhen the router fails to dial to a peer, it increments the peer's\n"),n("code",[e._v("DialFailures")]),e._v(" counter.\nThis counter is reset when the router successfully dials the peer, establishing\na connection to it.\nDuring this period, between dial failures and succeeding to dial the peer, the\npeer score is decremented by the "),n("code",[e._v("DialFailures")]),e._v(" counter.")]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("DialFailures")]),e._v(" actually refers to a peer address. A peer may have multiple\naddresses, and all associated counters are considered for decrementing the\npeer's score. Also, all counters are reset when the router succeeds dialing\nthe peer.")])]),e._v(" "),n("h2",{attrs:{id:"peer-life-cycle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#peer-life-cycle"}},[e._v("#")]),e._v(" Peer life cycle")]),e._v(" "),n("p",[e._v("For implementing the connection policy, the peer manager keeps track of the\nstate of peers and manages their life-cycle.\nThe life cycle of a peer is summarized in the picture below.\nThe circles represent "),n("em",[e._v("states")]),e._v(" of a peer and the rectangles represent\n"),n("em",[e._v("transitions")]),e._v(".\nAll transitions are performed by the "),n("code",[e._v("Router")]),e._v(", by invoking methods of the peer\nmanager with corresponding names.\nNormal transitions are represented by green arrows, while red arrows represent\nalternative transitions taken in case of errors.")]),e._v(" "),n("img",{attrs:{src:"pics/p2p-v0.35-peermanager.png",alt:"peer life cycle",title:"",width:"600px",name:"",align:"center"}}),e._v(" "),n("h3",{attrs:{id:"candidate-peer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#candidate-peer"}},[e._v("#")]),e._v(" Candidate peer")]),e._v(" "),n("p",[e._v("The initial state of a peer in the peer manager.")]),e._v(" "),n("p",[e._v("A "),n("code",[e._v("Candidate")]),e._v(" peer may become an actual peer, to which the node is connected.\nWe do not use candidate to refer to a peer to which we are connected, nor to\na peer we are attempting to connect.")]),e._v(" "),n("p",[e._v("Candidate peers from which the router recently disconnected or failed to dial\nare, during a certain period, not eligible for establishing connections.\nThis scenario is represented by the "),n("code",[e._v("Frozen Candidate")]),e._v(" state.")]),e._v(" "),n("h3",{attrs:{id:"dialnext-transition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dialnext-transition"}},[e._v("#")]),e._v(" DialNext transition")]),e._v(" "),n("p",[e._v("This state transition produces candidate peers the node should dial to, which\nare consumed by the "),n("RouterLink",{attrs:{to:"/spec/p2p/v0.35/router.html#dialing-peers"}},[e._v("dialing routine")]),e._v(" of the router.")],1),e._v(" "),n("p",[e._v("The transition is performed when the "),n("a",{attrs:{href:"#connection-policy"}},[e._v("connection policy")]),e._v("\ndetermines that the node should try to establish a connection with a peer.")]),e._v(" "),n("p",[e._v("The algorithm controlling this state transition can be synthesized as follows:")]),e._v(" "),n("ol",[n("li",[e._v("Wait until there are peers in "),n("code",[e._v("Candidate")]),e._v(" state")]),e._v(" "),n("li",[e._v("Select the best-ranked "),n("code",[e._v("peer")]),e._v(" in "),n("code",[e._v("Candidate")]),e._v(" state")]),e._v(" "),n("li",[e._v("If "),n("code",[e._v("|Candidate + Dialing| < MaxConnected")]),e._v(", returns the selected "),n("code",[e._v("peer")])]),e._v(" "),n("li",[e._v("Else if "),n("code",[e._v("|Candidate + Dialing| < MaxConnected + MaxConnectedUpgrade")]),e._v(", try to\nfind a connection "),n("code",[e._v("slot")]),e._v(" to upgrade to give room to the selected "),n("code",[e._v("peer")]),e._v(" "),n("ol",[n("li",[e._v("If a connection "),n("code",[e._v("slot")]),e._v(" to upgrade is found, set the peer in the slot to\nthe "),n("code",[e._v("Upgrading")]),e._v(" sub-state and returns the selected "),n("code",[e._v("peer")])])])])]),e._v(" "),n("p",[e._v("The peer manager selects the "),n("a",{attrs:{href:"#peer-ranking"}},[e._v("best-ranked")]),e._v(" peer which is in the\n"),n("a",{attrs:{href:"#candidate-peer"}},[n("code",[e._v("Candidate")])]),e._v(" state and provides it to the router.\nAs the router is supposed to dial the peer, the peer manager sets the peer to\nthe "),n("a",{attrs:{href:"#dialing-peer"}},[e._v("dialing")]),e._v(" state.")]),e._v(" "),n("p",[e._v("Dialing a candidate peer may have become possible because the peer manager\nhas found a "),n("a",{attrs:{href:"#slot-upgrades"}},[e._v("connection slot to upgrade")]),e._v(" to given room to the\nselected candidate peer.\nIf this is the case, the peer occupying this connection slot is set to the\n"),n("a",{attrs:{href:"#upgrading-peer"}},[e._v("upgrading state")]),e._v(", and will be evicted once the\nconnection to the candidate peer is successfully established.")]),e._v(" "),n("h3",{attrs:{id:"dialing-peer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dialing-peer"}},[e._v("#")]),e._v(" Dialing peer")]),e._v(" "),n("p",[e._v("A peer that has been returned to the router as the next peer to dial.\nThe router should be attempting to connect to this peer.")]),e._v(" "),n("p",[e._v("A peer in "),n("code",[e._v("Dialing")]),e._v(" state is not considered as a candidate peer.")]),e._v(" "),n("h3",{attrs:{id:"dialed-transition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dialed-transition"}},[e._v("#")]),e._v(" Dialed transition")]),e._v(" "),n("p",[e._v("This transition is performed when the node establishes an outgoing connection\nwith a peer.\nThis means that the peer manager has provided this peer to the router as the\n"),n("a",{attrs:{href:"#dialnext-transition"}},[e._v("next peer to dial")]),e._v(", and the router has dialed and\nsuccessfully established a connection with the peer.\nThe peer is thus expected to be in the "),n("code",[e._v("Dialing")]),e._v(" state.")]),e._v(" "),n("p",[e._v("It may occur, however, that when this transition is invoked the peer is already\nin the "),n("code",[e._v("Connected")]),e._v(" state.\nThe most likely reason is that the router, while dialing this peer, has also\naccepted an incoming connection from the same peer.\nIn this case, the transition fails, indicating to the router that is should\nclose the newly established connection.")]),e._v(" "),n("p",[e._v("It may also occur that the node is already connected to "),n("code",[e._v("MaxConnected")]),e._v(" peers,\nwhich means that all connection slots are full.\nIn this case, the peer manager tries to find a connection slot that can be\n"),n("a",{attrs:{href:"#slot-upgrades"}},[e._v("upgraded")]),e._v(" to give room for the new established connection.\nIf no suitable connection slot is found, the transitions fails.\nThis logic considered in this step is synthesized by the following algorithm:")]),e._v(" "),n("ol",[n("li",[e._v("If "),n("code",[e._v("|Connected| < MaxConnected")]),e._v(", the transition succeeds\n"),n("ol",[n("li",[e._v("The established connection occupies one of the available connection slots")])])]),e._v(" "),n("li",[e._v("If a connected peer was put in the "),n("code",[e._v("Upgrading")]),e._v(" sub-state to give room to this peer\n"),n("ol",[n("li",[e._v("Let "),n("code",[e._v("slot")]),e._v(" be the connection slot occupied by this peer")])])]),e._v(" "),n("li",[e._v("If "),n("code",[e._v("|Connected| < MaxConnected + MaxConnectedUpgrade")]),e._v(" "),n("ol",[n("li",[e._v("Let "),n("code",[e._v("slot")]),e._v(" be a connection slot that can be upgraded to give room to\nthe established connection, if any")])])]),e._v(" "),n("li",[e._v("If "),n("code",[e._v("slot")]),e._v(" is set to a valid connection slot, the transition succeeds\n"),n("ol",[n("li",[e._v("Set the peer occupying "),n("code",[e._v("slot")]),e._v(" to the "),n("code",[e._v("Evict")]),e._v(" sub-state")]),e._v(" "),n("li",[e._v("The established connection occupies one of the connection slots reserved for upgrades")])])]),e._v(" "),n("li",[e._v("Else the transition fails and the connection is refused")])]),e._v(" "),n("p",[e._v("Notice that, in order to dial this peer, the peer manager may have put another\nlower-ranked peer in the "),n("a",{attrs:{href:"#upgrading-peer"}},[e._v("upgrading sub-state")]),e._v(" to give room\nto this connection.\nIn this case, as illustrated above, the slot for the established connection was\n"),n("em",[e._v("reserved")]),e._v(", and this transition will not fail.")]),e._v(" "),n("p",[e._v("If the transition succeeds, the peer is set to the\n"),n("a",{attrs:{href:"#connected-peer"}},[n("code",[e._v("Connected")])]),e._v(" state as an "),n("em",[e._v("outgoing")]),e._v(" peer.\nThe peer's "),n("code",[e._v("LastConnected")]),e._v(" and the dialed address' "),n("code",[e._v("LastDialSuccess")]),e._v(" times are\nset, and dialed address' "),n("code",[e._v("DialFailures")]),e._v(" counter is reset.")]),e._v(" "),n("blockquote",[n("p",[e._v("If the peer is "),n("code",[e._v("Inactive")]),e._v(", it is set as active.\nThis action has no effect apart from producing metrics.")])]),e._v(" "),n("p",[e._v("If a connection slot was upgraded to give room for the established connection, the\npeer on that slot transitions to the "),n("a",{attrs:{href:"#evict-peer"}},[e._v("evict sub-state")]),e._v(".")]),e._v(" "),n("h4",{attrs:{id:"errors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),n("p",[e._v("The transition fails if:")]),e._v(" "),n("ul",[n("li",[e._v("the node dialed itself")]),e._v(" "),n("li",[e._v("the peer is already in the "),n("code",[e._v("Connected")]),e._v(" state")]),e._v(" "),n("li",[e._v("the node is connected to "),n("code",[e._v("MaxConnected")]),e._v(" peers, and no slot is suitable for upgrading")])]),e._v(" "),n("p",[e._v("Errors are also returned if:")]),e._v(" "),n("ul",[n("li",[e._v("the dialed peer was pruned from the peer store (because it had more than "),n("code",[e._v("MaxPeers")]),e._v(" stored)")]),e._v(" "),n("li",[e._v("the updated peer information is invalid")]),e._v(" "),n("li",[e._v("there is an error when saving the peer state to the peer store")])]),e._v(" "),n("h3",{attrs:{id:"dialfailed-transition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dialfailed-transition"}},[e._v("#")]),e._v(" DialFailed transition")]),e._v(" "),n("p",[e._v("This transition informs of a failure when establishing an outgoing connection to\na peer.")]),e._v(" "),n("p",[e._v("The dialed address's "),n("code",[e._v("LastDialFailure")]),e._v(" time is set, and its "),n("code",[e._v("DialFailures")]),e._v("\ncounter is increased.\nThis information is used to compute the "),n("a",{attrs:{href:"#retry-delay"}},[e._v("retry delay")]),e._v(" for the\ndialed address.")]),e._v(" "),n("p",[e._v("The peer manager then spawns a routine that after the computed retry delay\nnotifies the next peer to dial routine about the availability of this peer.\nUntil then, the peer is the "),n("code",[e._v("Frozen Candidate")]),e._v(" state.")]),e._v(" "),n("h4",{attrs:{id:"retry-delay"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#retry-delay"}},[e._v("#")]),e._v(" Retry delay")]),e._v(" "),n("p",[e._v("The retry delay is the minimum time, from the latest failed dialing attempt, we\nshould wait until dialing a peer address again.")]),e._v(" "),n("p",[e._v("The default delay is defined by "),n("code",[e._v("MinRetryTime")]),e._v(" parameter.\nIf it is set to zero, we "),n("em",[e._v("never")]),e._v(" retry dialing a peer address.")]),e._v(" "),n("p",[e._v("Upon each failed dial attempt, we increase the delay by "),n("code",[e._v("MinRetryTime")]),e._v(", plus an\noptional random jitter of up to "),n("code",[e._v("RetryTimeJitter")]),e._v(".")]),e._v(" "),n("p",[e._v("The retry delay should not be longer than the "),n("code",[e._v("MaxRetryTime")]),e._v(" parameter,\nor "),n("code",[e._v("MaxRetryTimePersistent")]),e._v(" parameter in the case of persistent peers.")]),e._v(" "),n("h4",{attrs:{id:"errors-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#errors-2"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),n("p",[e._v("Errors are also returned if:")]),e._v(" "),n("ul",[n("li",[e._v("the updated peer information is invalid")]),e._v(" "),n("li",[e._v("there is an error when saving the peer state to the peer store")])]),e._v(" "),n("h3",{attrs:{id:"accepted-transition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#accepted-transition"}},[e._v("#")]),e._v(" Accepted transition")]),e._v(" "),n("p",[e._v("This transition is performed when the node establishes an "),n("em",[e._v("incoming")]),e._v(" connection\nwith a peer.\nThis means that the router has received a connection attempt from this peer and\nsuccessfully established a connection with it.")]),e._v(" "),n("p",[e._v("It may occur, however, that when this transition is invoked the peer is already\nin the "),n("a",{attrs:{href:"#connected-peer"}},[n("code",[e._v("Connected")])]),e._v(" state.\nThe most likely reason is that the router was simultaneously dialing the same\npeer, and has successfully "),n("a",{attrs:{href:"#dialed-transition"}},[e._v("established a connection")]),e._v(" with\nit.\nIn this case, the transition fails, indicating to the router that it should\nclose the accepted connection.")]),e._v(" "),n("p",[e._v("It may also occur that the node is already connected to "),n("code",[e._v("MaxConnected")]),e._v(" peers,\nwhich means that all connection slots are full.\nIn this case, the peer manager tries to find a connection slot that can be\n"),n("a",{attrs:{href:"#slot-upgrades"}},[e._v("upgraded")]),e._v(" to give room for the accepted connection.\nIf no suitable connection slot is found, the transitions fails.\nThis logic considered in this step is synthesized by the following algorithm:")]),e._v(" "),n("ol",[n("li",[e._v("If "),n("code",[e._v("|Connected| < MaxConnected")]),e._v(", the transition succeeds\n"),n("ol",[n("li",[e._v("The established connection occupies one of the available connection slots")])])]),e._v(" "),n("li",[e._v("Let "),n("code",[e._v("slot")]),e._v(" be a connection slot that can be upgraded to give room to the\nestablished connection, if any")]),e._v(" "),n("li",[e._v("If "),n("code",[e._v("|Connected| < MaxConnected + MaxConnectedUpgrade")]),e._v(" and "),n("code",[e._v("slot")]),e._v(" is set to a\nvalid connection slot, the transition succeeds\n"),n("ol",[n("li",[e._v("Set the peer occupying "),n("code",[e._v("slot")]),e._v(" to the "),n("code",[e._v("Evict")]),e._v(" sub-state")]),e._v(" "),n("li",[e._v("The established connection occupies one of the connection slots reserved for upgrades")])])]),e._v(" "),n("li",[e._v("Else the transition fails and the connection is refused")])]),e._v(" "),n("p",[e._v("If the transition succeeds, the peer is set to the\n"),n("a",{attrs:{href:"#connected-peer"}},[n("code",[e._v("Connected")])]),e._v(" state as an "),n("em",[e._v("incoming")]),e._v(" peer.")]),e._v(" "),n("p",[e._v("The accepted peer might not be known by the peer manager.\nIn this case the peer is registered in the peer store, without any associated\naddress (as the connection remote address usually "),n("em",[e._v("is not")]),e._v(" the peer's listen address).\nThe peer's "),n("code",[e._v("LastConnected")]),e._v(" time is set and the "),n("code",[e._v("DialFailures")]),e._v(" counter is reset\nfor all addresses associated to the peer.")]),e._v(" "),n("blockquote",[n("p",[e._v("If the peer is "),n("code",[e._v("Inactive")]),e._v(", it is set as active.\nThis action has not effect apart from producing metrics.")])]),e._v(" "),n("p",[e._v("If a connection slot was upgraded to give room for the accepted connection, the\npeer on that slot transitions to the "),n("a",{attrs:{href:"#evict-peer"}},[e._v("evict sub-state")]),e._v(".")]),e._v(" "),n("h4",{attrs:{id:"errors-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#errors-3"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),n("p",[e._v("The transition fails if:")]),e._v(" "),n("ul",[n("li",[e._v("the node accepted itself")]),e._v(" "),n("li",[e._v("the peer is already in the "),n("code",[e._v("Connected")]),e._v(" state")]),e._v(" "),n("li",[e._v("the node is connected to "),n("code",[e._v("MaxConnected")]),e._v(" peers, and no slot is suitable for upgrading")])]),e._v(" "),n("p",[e._v("Errors are also returned if:")]),e._v(" "),n("ul",[n("li",[e._v("the updated peer information is invalid")]),e._v(" "),n("li",[e._v("there is an error when saving the peer state to the peer store")])]),e._v(" "),n("h3",{attrs:{id:"connected-peer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connected-peer"}},[e._v("#")]),e._v(" Connected peer")]),e._v(" "),n("p",[e._v("A peer to which the node is connected.\nA peer in this state is not considered a candidate peer.")]),e._v(" "),n("p",[e._v("The peer manager distinguishes "),n("em",[e._v("incoming")]),e._v(" from "),n("em",[e._v("outgoing")]),e._v(" connections.\nIncoming connections are established through the "),n("a",{attrs:{href:"#accepted-transition"}},[n("code",[e._v("Accepted")])]),e._v(" transition.\nOutgoing connections are established through the "),n("a",{attrs:{href:"#dialed-transition"}},[n("code",[e._v("Dialed")])]),e._v(" transition.")]),e._v(" "),n("h3",{attrs:{id:"ready-transition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ready-transition"}},[e._v("#")]),e._v(" Ready transition")]),e._v(" "),n("p",[e._v("By invoking this transition, the router notifies the peer manager that it is\nready to exchange messages with a peer.")]),e._v(" "),n("p",[e._v("The router invokes this transition just after successfully performing the\n"),n("a",{attrs:{href:"#dialed-transition"}},[n("code",[e._v("Dialed")])]),e._v(" or "),n("a",{attrs:{href:"#accepted-transition"}},[n("code",[e._v("Accepted")])]),e._v(" transitions,\nproviding to the peer manager a list of channels supported by the peer.\nThis information is broadcast to all reactors in a "),n("code",[e._v("PeerUpdate")]),e._v(" message that\ninforms the new state (up) of the peer.")]),e._v(" "),n("p",[e._v("This transition is not represented in the picture because it does not change\nthe state of the peer, which should be in the "),n("a",{attrs:{href:"#connected-peer"}},[n("code",[e._v("Connected")])]),e._v(" state.")]),e._v(" "),n("h3",{attrs:{id:"disconnected-transition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#disconnected-transition"}},[e._v("#")]),e._v(" Disconnected transition")]),e._v(" "),n("p",[e._v("This transition is performed when the node disconnects from a peer.\nIt is invoked by the router when an error is returned by the routines used to\nexchange messages with the peer.")]),e._v(" "),n("p",[e._v("The peer is expected to be in the "),n("a",{attrs:{href:"#connected-peer"}},[n("code",[e._v("Connected")])]),e._v(" state.\nIf the "),n("a",{attrs:{href:"#ready-transition"}},[n("code",[e._v("Ready")])]),e._v(" transition has been performed, the peer manager broadcasts a\n"),n("code",[e._v("PeerUpdate")]),e._v(" to all reactors notifying the new status (down) of this peer.")]),e._v(" "),n("p",[e._v("If the peer is still present in the peer store, its "),n("code",[e._v("LastDisconnected")]),e._v(" time is\nset and the peer manager spawns a routine that after "),n("code",[e._v("DisconnectCooldownPeriod")]),e._v("\nnotifies the next peer to dial routine about the availability of this peer.\nUntil then, the peer is the "),n("code",[e._v("Frozen Candidate")]),e._v(" state.")]),e._v(" "),n("h3",{attrs:{id:"errored-transition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#errored-transition"}},[e._v("#")]),e._v(" Errored transition")]),e._v(" "),n("p",[e._v("This transition is performed when a reactor interacting with the peer reports\nan error to the router.")]),e._v(" "),n("p",[e._v("The peer is expected to be in the "),n("a",{attrs:{href:"#connected-peer"}},[n("code",[e._v("Connected")])]),e._v(" state.\nIf so, the peer transitions to the "),n("a",{attrs:{href:"#evict-peer"}},[n("code",[e._v("Evict")])]),e._v(" sub-state, which\nshould lead the router to disconnect from the peer, and the next peer to evict\nroutine is notified.")]),e._v(" "),n("h3",{attrs:{id:"upgrading-peer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-peer"}},[e._v("#")]),e._v(" Upgrading peer")]),e._v(" "),n("p",[e._v("A "),n("a",{attrs:{href:"#connected-peer"}},[e._v("connected peer")]),e._v(" which should be evicted to give room to a\nhigher-ranked peer the router is dialing to.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("Upgrading")]),e._v(" sub-state is part of the procedure to "),n("a",{attrs:{href:"#slot-upgrades"}},[e._v("upgrade connection slots")]),e._v(".\nWhen a connection with the higher-ranked peer that should take the connection\nslot from this peer is "),n("a",{attrs:{href:"#dialed-transition"}},[e._v("established")]),e._v(", the\n"),n("a",{attrs:{href:"#evict-peer"}},[e._v("eviction")]),e._v(" of this peer is scheduled.")]),e._v(" "),n("h3",{attrs:{id:"evict-peer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#evict-peer"}},[e._v("#")]),e._v(" Evict peer")]),e._v(" "),n("p",[e._v("A peer whose eviction was scheduled, for either of the following reasons:")]),e._v(" "),n("ol",[n("li",[e._v("to give room to a higher-ranked peer the router is connected to, as part of\nthe procedure to "),n("a",{attrs:{href:"#slot-upgrades"}},[e._v("upgrade connection slots")]),e._v(",")]),e._v(" "),n("li",[e._v("or because this peer was reported as "),n("a",{attrs:{href:"#errored-transition"}},[e._v("errored")]),e._v(" by a\nreactor interacting with this peer.")])]),e._v(" "),n("p",[e._v("This peer is a "),n("a",{attrs:{href:"#connected-peer"}},[e._v("connected peer")]),e._v(".\n"),n("code",[e._v("Evict")]),e._v(" is the first sub-state of the procedure that should lead the node to\n"),n("a",{attrs:{href:"#disconnected-transition"}},[e._v("disconnect")]),e._v(" from a peer.")]),e._v(" "),n("h3",{attrs:{id:"evictnext-transition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#evictnext-transition"}},[e._v("#")]),e._v(" EvictNext transition")]),e._v(" "),n("p",[e._v("This transition returns a peer to the router to evict.")]),e._v(" "),n("p",[e._v("The state transition is performed whenever the peer manager has scheduled the\neviction of a peer, i.e., whenever there is a peer on "),n("code",[e._v("Evict")]),e._v(" sub-state.\nThe peer to evict must be a peer in the "),n("code",[e._v("Connected")]),e._v(" state.")]),e._v(" "),n("p",[e._v("The peer to evict is randomly picked from the possible multiple peers with\neviction scheduled.")]),e._v(" "),n("blockquote",[n("p",[e._v("This transition is invoked when the next to evict routine is notified by\nanother routine.\nIn some cases, the transition is processed when no peer should be evicted. In\nthis case, if the connections slots are not full, or there are enough peers\nin the "),n("code",[e._v("Evicting")]),e._v(" state so to respect the "),n("code",[e._v("MaxConnected")]),e._v(" parameter, the\ntransition is not taken.\nOtherwise, the peer with the lowest rank is evicted. This should not occur,\nfrom comments in the code, but this is something to check.")])]),e._v(" "),n("h3",{attrs:{id:"evicting-peer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#evicting-peer"}},[e._v("#")]),e._v(" Evicting peer")]),e._v(" "),n("p",[e._v("A peer whose eviction is in progress.\nA peer transitions to this sub-state when it is returned to the router by the\n"),n("a",{attrs:{href:"#evictnext-transition"}},[e._v("next peer to evict")]),e._v(" transition.")]),e._v(" "),n("p",[e._v("This peer is still a "),n("a",{attrs:{href:"#connected-peer"}},[e._v("connected peer")]),e._v(".\n"),n("code",[e._v("Evicting")]),e._v(" is the second and last sub-state of the procedure for\n"),n("a",{attrs:{href:"#disconnected-transition"}},[e._v("disconnecting")]),e._v(" from a peer.")])])}),[],!1,null,null,null);t.default=r.exports}}]);