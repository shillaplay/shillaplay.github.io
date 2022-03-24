(window.webpackJsonp = window.webpackJsonp || []).push([
	[12], {
		347: function(t, e, r) {
			t.exports = r.p + "img/5aea5de.png"
		},
		447: function(t, e, r) {
			var content = r(815);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, r(34).default)("0e4b4d58", content, !0, {
				sourceMap: !1
			})
		},
		814: function(t, e, r) {
			"use strict";
			var n = r(447);
			r.n(n).a
		},
		815: function(t, e, r) {
			(e = r(33)(!1)).push([t.i, "@media (max-width:991px){.bet_control[data-v-7a57d527],.players .list[data-v-7a57d527]{width:100%!important}}@media (max-width:1360px){.main:not(.chat-closed) .play_ground[data-v-7a57d527],.main:not(.chat-closed) .players[data-v-7a57d527]{width:100%!important;flex:0 0 100%!important;max-width:100%!important}}.bet_var[data-v-7a57d527]{width:13%;padding:10px;margin:5px;font-size:10px}.players .list[data-v-7a57d527]{color:#fff;width:80%;border-radius:10px}.players .list .head[data-v-7a57d527]{border-radius:10px 10px 0 0;background:#191d2d;padding:15px 20px}.players .list .head .title[data-v-7a57d527]{font-size:18px;font-weight:600;letter-spacing:2px}.players .list .head .rs[data-v-7a57d527]{font-size:18px}.players .list .body[data-v-7a57d527]{border-radius:0 0 10px 10px;background:#131521}.players .list .body .title[data-v-7a57d527]{color:#555b73;font-size:13px;font-weight:600}.players .list .body .player[data-v-7a57d527]{background:#191d2d;padding:15px;border-radius:15px;margin:15px 0;align-items:center}.players .list .body .players_list[data-v-7a57d527]{max-height:500px;height:500px;overflow-y:auto;padding:0 20px 15px}.players .list .body .players_list .player[data-v-7a57d527]:nth-child(2n){background:#151825}.player .user img[data-v-7a57d527]{width:30px;height:30px;border-radius:5px;margin-right:5px}.player span[data-v-7a57d527]{font-size:14px}.player .chance div[data-v-7a57d527]{transition:.5s ease-in-out;transform:skew(-15deg);border:2px solid #000;padding:2px 15px;border-radius:5px;display:inline-block}.player .chance span[data-v-7a57d527]{display:inline-block;transform:skew(15deg)}.empty_players[data-v-7a57d527]{color:#555b73;text-align:center;display:flex;justify-content:center;align-items:center;height:450px}.spinner[data-v-7a57d527]{position:relative;left:.25px;bottom:125px;width:30px}.fa-fill-drip[data-v-7a57d527]{border:1px solid #131521;color:#515b73;margin-left:12px;padding:5px;border-radius:5px;background:#131521;cursor:pointer}.winner_info span[data-v-7a57d527]{font-size:19px}.winner_info img[data-v-7a57d527]{width:30px;height:30px;border-radius:5px}.winner_info label[data-v-7a57d527]{font-size:17px}.winner_info .chance div[data-v-7a57d527]{transform:skew(-15deg);border:2px solid #000;padding:0 15px;border-radius:5px;display:inline-block}.winner_info .chance span[data-v-7a57d527]{font-size:17px;display:inline-block;transform:skew(15deg)}.history .list[data-v-7a57d527]{color:#fff}.history .list .head[data-v-7a57d527]{border-radius:10px 10px 0 0;background:#191d2d;padding:15px 20px}.history .list .body[data-v-7a57d527]{border-radius:0 0 10px 10px;background:#131521}.history .list .body .title[data-v-7a57d527]{color:#555b73;font-size:13px;font-weight:600}.history .list .body .game[data-v-7a57d527]{background:#191d2d;padding:30px 15px;border-radius:15px;min-width:700px;margin:15px 0;align-items:center}.history .list .body .games[data-v-7a57d527]{max-height:550px;height:550px;overflow:auto;padding:0 20px 15px}.history .list .body .games .game[data-v-7a57d527]:nth-child(2n){background:#151825}.history .game span[data-v-7a57d527]{font-size:14px}.history .game img[data-v-7a57d527]{width:35px;height:35px;border-radius:5px;margin-right:8px}.history .chance div[data-v-7a57d527]{transform:skew(-15deg);border:2px solid #000;padding:0 8px;border-radius:5px;display:inline-block}.history .chance span[data-v-7a57d527]{font-size:13px;display:inline-block;transform:skew(15deg)}.history .list .head .title[data-v-7a57d527]{font-size:18px;font-weight:600;letter-spacing:2px}.active_bet[data-v-7a57d527]{border:1px solid #599bff}", ""]), t.exports = e
		},
		864: function(t, e, r) {
			"use strict";
			r.r(e);
			r(259), r(257), r(24);
			var n = r(4),
				o = r(80),
				d = {
					fetch: function(t) {
						return Object(n.a)(regeneratorRuntime.mark((function e() {
							var r, n;
							return regeneratorRuntime.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return r = t.store, t.params, n = t.error, t.req, e.next = 4, o.a.get("/api/jackpot").then((function(t) {
											return r.commit("updateJackpotInfo", {
												data: t.data,
												game: "jackpot"
											})
										})).catch((function(t) {
											n({
												statusCode: 400
											})
										}));
									case 4:
									case "end":
										return e.stop()
								}
							}), e)
						})))()
					},
					data: function() {
						return {
							bet_amount: null,
							bet_var: ["1", "5", "10", "100", "500"],
							endGame: !1,
							winner: null,
							showTimer: !0
						}
					},
					methods: {
						chanceBackground: function(t) {
							return "rgba(" + parseInt(t.slice(1, 3), 16) + ", " + parseInt(t.slice(3, 5), 16) + ", " + parseInt(t.slice(5, 7), 16) + ", 0.4)"
						},
						makeBet: function(t) {
							var e = this;
							if (!this.bet_amount) return this.$notify({
								type: "error",
								text: "Bet cannot be empty."
							});
							t.target.disabled = !0, t.target.innerHTML = '<i class="fas fa-cog fa-spin"></i>', o.a.post("/game/jackpot/bet", {
								amount: this.bet_amount
							}).then((function(r) {
								t.target.disabled = !1, t.target.innerHTML = "PLAY", e.bet_amount = "", e.$store.commit("updateUser", r.data.userInfo), e.$notify({
									type: "success",
									text: r.data.description
								})
							})).catch((function(r) {
								t.target.disabled = !1, t.target.innerHTML = "PLAY", e.$notify({
									type: "error",
									text: r.response.data.description
								})
							}))
						}
					},
					mounted: function() {
						var t = this;
						this.sockets.subscribe("jackpot_endGame", (function(data) {
							for (var e, r = t.$store.state.jackpot.players.find((function(t) {
									return t.username == data.winner_username
								})), n = 0, i = 0; i < t.$store.state.jackpot.players.findIndex((function(t) {
									return t.username == data.winner_username
								})); i++) n += parseFloat(3.6 * t.$store.state.jackpot.players[i].value);
							e = 360 - n - (Math.random() * (3.6 * r.value - 2) + 2) + 2520, t.$el.querySelector(".cdc-sections").style.transform = "rotate(".concat(e, "deg)"), t.showTimer = !1;
							var o = t;
							setTimeout((function() {
								o.winner = {
									username: data.winner_username,
									chance: o.$store.state.jackpot.players.find((function(t) {
										return t.username == data.winner_username
									})).value,
									color: o.$store.state.jackpot.players.find((function(t) {
										return t.username == data.winner_username
									})).color
								}, o.endGame = !0, setTimeout((function() {
									o.$store.commit("jackpot_endGame", data), o.$el.querySelector(".cdc-sections").style.transform = "rotate(0deg)", o.endGame = !1, o.winner = null, o.showTimer = !0
								}), 4500)
							}), 4500)
						})), console.log(this.$store.state.domainFull), this.$socket.emit("join_room", "jackpot_" + this.$store.state.domainFull)
					},
					beforeDestroy: function() {
						this.sockets.unsubscribe("jackpot_endGame"), this.$socket.emit("leave_room", "jackpot_" + this.$store.state.domainFull)
					}
				},
				l = (r(814), r(23)),
				component = Object(l.a)(d, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "container-expand row m-0"
					}, [n("div", {
						staticClass: "play_ground col-lg-6 col-md-12 col-12",
						staticStyle: {
							color: "white"
						}
					}, [n("div", {
						staticClass: "p-5"
					}, [n("client-only", [n("vc-donut", {
						attrs: {
							background: "#131521",
							foreground: "#171329",
							sections: t.$store.state.jackpot.players,
							size: 400,
							unit: "px",
							thickness: 10
						}
					}, [n("img", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.$store.state.jackpot.isRolling && !t.endGame,
							expression: "$store.state.jackpot.isRolling && !endGame"
						}],
						staticClass: "spinner",
						attrs: {
							src: r(347)
						}
					}), t._v(" "), n("transition", {
						attrs: {
							name: "fade"
						}
					}, [t.endGame ? n("div", {
						staticClass: "winner_info mb-5",
						staticStyle: {
							"line-height": "35px"
						}
					}, [n("span", [t._v("Congratulations!")]), n("br"), t._v(" "), n("img", {
						attrs: {
							src: t.userPicture(t.winner.username),
							alt: t.winner.username
						}
					}), t._v(" "), n("label", [t._v(t._s(t.winner.username))]), t._v(" "), n("div", {
						staticClass: "chance"
					}, [n("div", {
						style: {
							"border-color": t.winner.color,
							color: t.winner.color,
							background: t.chanceBackground(t.winner.color)
						}
					}, [n("span", [t._v(t._s(t.winner.chance.toFixed(2)) + "%")])])])]) : t._e()]), t._v(" "), n("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: !t.$store.state.jackpot.isRolling && t.showTimer,
							expression: "!$store.state.jackpot.isRolling && showTimer"
						}],
						staticClass: "mb-5",
						staticStyle: {
							"line-height": "35px"
						}
					}, [n("span", {
						staticStyle: {
							"font-size": "50px"
						}
					}, [t._v(t._s(t.$store.state.jackpot.time))]), n("br"), t._v(" "), n("span", {
						staticStyle: {
							"font-size": "15px",
							color: "#677290",
							"font-weight": "600"
						}
					}, [t._v("SECONDS")]), t._v(" "), n("div", {
						staticClass: "progress m-auto",
						staticStyle: {
							"max-width": "120px",
							width: "120px",
							"max-height": "10px"
						}
					}, [n("div", {
						staticClass: "progress-bar progress-bar-striped progress-bar-animated",
						staticStyle: {
							transition: ".5s"
						},
						style: {
							width: 100 * t.$store.state.jackpot.time / 120 + "%"
						},
						attrs: {
							role: "progressbar",
							"aria-valuemin": "0",
							"aria-valuemax": "120"
						}
					})])]), t._v(" "), n("div", {
						staticStyle: {
							"line-height": "35px"
						}
					}, [n("span", {
						staticStyle: {
							"font-size": "15px",
							color: "#677290",
							"font-weight": "600"
						}
					}, [t._v("GAME BANK")]), n("br"), t._v(" "), n("span", {
						staticStyle: {
							"font-size": "30px"
						}
					}, [t._v("$" + t._s(parseFloat(t.$store.state.jackpot.total).toFixed(2)))])])], 1)], 1)], 1), t._v(" "), n("div", {
						staticClass: "justify-content-center"
					}, [n("div", {
						staticClass: "bet_control w-75 row m-0 m-auto"
					}, [n("div", {
						staticClass: "tilted-input w-75"
					}, [n("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.bet_amount,
							expression: "bet_amount",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "w-100",
						attrs: {
							type: "number",
							placeholder: "0.00"
						},
						domProps: {
							value: t.bet_amount
						},
						on: {
							input: function(e) {
								e.target.composing || (t.bet_amount = t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]), t._v(" "), n("button", {
						staticClass: "tilted-btn w-25 filled p-0",
						attrs: {
							disabled: t.$store.state.jackpot.isRolling
						},
						on: {
							click: function(e) {
								t.$store.state.userID ? t.makeBet(e) : t.stub()
							}
						}
					}, [n("a", [t._v("play")])])]), t._v(" "), n("div", {
						staticClass: "bet_control w-75 row m-0 m-auto d-flex justify-content-center pt-2"
					}, [t._l(t.bet_var, (function(e) {
						return n("button", {
							key: e,
							staticClass: "tilted-btn bet_var",
							on: {
								click: function(r) {
									t.bet_amount ? t.bet_amount = parseFloat(t.bet_amount) + parseFloat(e) : t.bet_amount = e
								}
							}
						}, [n("a", [t._v("+" + t._s(e))])])
					})), t._v(" "), n("button", {
						staticClass: "tilted-btn bet_var",
						on: {
							click: function(e) {
								t.bet_amount = t.$store.state.userID ? t.$store.state.userInfo.balance.toFixed(2) : 0
							}
						}
					}, [n("a", [t._v("+ALL")])])], 2)])]), t._v(" "), n("div", {
						staticClass: "players col-lg-6 col-md-12 col-12 mb-4"
					}, [n("div", {
						staticClass: "list m-auto pt-5"
					}, [n("div", {
						staticClass: "head row m-0 align-items-center"
					}, [n("span", {
						staticClass: "title"
					}, [t._v("PLAYERS")]), t._v(" "), n("i", {
						staticClass: "far fa-fill-drip",
						on: {
							click: function(e) {
								return t.$store.commit("jackpot_changeColors")
							}
						}
					}), t._v(" "), n("div", {
						staticClass: "ml-auto rs"
					}, [t._v("\n          " + t._s(t.$store.state.jackpot.players.length) + "\n          "), n("i", {
						staticClass: "fas fa-users"
					})])]), t._v(" "), n("div", {
						staticClass: "body"
					}, [t._m(0), t._v(" "), n("div", {
						staticClass: "players_list"
					}, [0 != t.$store.state.jackpot.players.length || t.endGame ? t._e() : n("div", {
						staticClass: "empty_players align-items-center"
					}, [n("span", [t._v("Waiting for players... Be the first!")])]), t._v(" "), n("transition-group", {
						attrs: {
							name: "fade"
						}
					}, t._l(t.$store.state.jackpot.players, (function(e) {
						return n("div", {
							key: e.username,
							staticClass: "player row",
							class: {
								active_bet: t.$store.state.userID && e.username == t.$store.state.userInfo.username
							}
						}, [n("div", {
							staticClass: "user w-50"
						}, [n("img", {
							attrs: {
								src: t.userPicture(e.username),
								alt: e.username
							}
						}), t._v(" "), n("span", [t._v(t._s(e.username))])]), t._v(" "), n("div", {
							staticClass: "rate w-25"
						}, [n("span", [t._v("$" + t._s(parseFloat(e.amount).toFixed(2)))])]), t._v(" "), n("div", {
							staticClass: "chance w-25"
						}, [n("div", {
							style: {
								"border-color": e.color,
								color: e.color,
								background: t.chanceBackground(e.color)
							}
						}, [n("span", [t._v(t._s(e.value.toFixed(2)) + "%")])])])])
					})), 0)], 1)])])]), t._v(" "), n("div", {
						staticClass: "history col-lg-10 col-md-12 col-12 m-auto"
					}, [n("div", {
						staticClass: "list pt-5"
					}, [t._m(1), t._v(" "), n("div", {
						staticClass: "body"
					}, [t._m(2), t._v(" "), n("div", {
						staticClass: "games"
					}, [n("transition-group", {
						attrs: {
							name: "fade"
						}
					}, t._l(t.$store.state.jackpot.history, (function(e, r) {
						return n("div", {
							key: e.game_id,
							staticClass: "game row"
						}, [n("div", {
							staticClass: "d-flex align-items-center",
							staticStyle: {
								width: "25%"
							}
						}, [n("img", {
							attrs: {
								src: t.userPicture(e.winner_username),
								alt: e.winner_username
							}
						}), t._v(" "), n("div", {
							staticStyle: {
								"line-height": "18px"
							}
						}, [n("span", {
							staticStyle: {
								color: "#5B6480"
							}
						}, [t._v(t._s(e.winner_username))]), n("br"), t._v(" "), n("span", {
							staticStyle: {
								"font-size": "13px"
							}
						}, [t._v("$" + t._s(e.bet.toFixed(2)))])])]), t._v(" "), n("div", {
							staticClass: "chance",
							staticStyle: {
								width: "25%"
							}
						}, [n("div", {
							style: {
								"border-color": t.$store.state.randomColors[r],
								color: t.$store.state.randomColors[r],
								background: t.chanceBackground(t.$store.state.randomColors[r])
							}
						}, [n("span", [t._v(t._s(e.chance.toFixed(2)) + "%")])])]), t._v(" "), n("div", {
							staticStyle: {
								width: "25%"
							}
						}, [n("span", [t._v("$" + t._s(e.amount.toFixed(2)))])]), t._v(" "), n("div", {
							staticStyle: {
								width: "25%"
							}
						}, [n("span", [t._v(t._s(t._f("toDate")(e.date)))])])])
					})), 0)], 1)])])])])
				}), [function() {
					var t = this.$createElement,
						e = this._self._c || t;
					return e("div", {
						staticClass: "row m-0",
						staticStyle: {
							padding: "15px 20px 0px 20px"
						}
					}, [e("div", {
						staticClass: "title w-50"
					}, [this._v("USER")]), this._v(" "), e("div", {
						staticClass: "title w-25"
					}, [this._v("RATE")]), this._v(" "), e("div", {
						staticClass: "title w-25"
					}, [this._v("CHANCE")])])
				}, function() {
					var t = this.$createElement,
						e = this._self._c || t;
					return e("div", {
						staticClass: "head row m-0 align-items-center"
					}, [e("span", {
						staticClass: "title"
					}, [this._v("LATEST GAMES")])])
				}, function() {
					var t = this.$createElement,
						e = this._self._c || t;
					return e("div", {
						staticClass: "row m-0 d-flex align-items-center",
						staticStyle: {
							padding: "15px 35px 0px 35px"
						}
					}, [e("div", {
						staticClass: "title",
						staticStyle: {
							width: "25%"
						}
					}, [this._v("WINNER")]), this._v(" "), e("div", {
						staticClass: "title",
						staticStyle: {
							width: "25%"
						}
					}, [this._v("CHANCE")]), this._v(" "), e("div", {
						staticClass: "title",
						staticStyle: {
							width: "25%"
						}
					}, [this._v("PRIZE")]), this._v(" "), e("div", {
						staticClass: "title",
						staticStyle: {
							width: "25%"
						}
					}, [this._v("TIME")])])
				}], !1, null, "7a57d527", null);
			e.default = component.exports
		}
	}
]);