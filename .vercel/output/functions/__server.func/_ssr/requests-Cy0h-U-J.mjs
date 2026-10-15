import { o as __toESM } from "../_runtime.mjs";
import { H as updateForwarderQuoteStatus, I as recordQuotationAuditEvent, L as runPropertyAlignmentDiagnostic, M as normalizeQuoteStatus, R as sanitizeEmailHtml, V as updateForwarderQuotation, b as getBookingForwarderSummary, c as dispatchMultiForwarderRequests, h as fetchForwarderRequestsForBooking, k as logQuotationResponseDiagnostics, m as fetchAllForwarderRequestsFromSupabase, n as awardForwarderOffer, p as extractQuotationWithAiFallback, t as ALL_QUOTATION_STATUSES, w as getLocalForwarderRequests, y as generateForwarderEmailContent } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { B as RefreshCw, Lt as Eye, N as Send, Nt as FileSearch, O as Ship, P as Search, Pt as FilePen, Qt as CircleX, St as Info, Ut as Download, V as Receipt, W as Plus, Wt as DollarSign, X as Package, Xt as ClipboardList, Yt as Clock, _ as TrendingDown, _t as LayoutGrid, an as ChevronRight, b as Tag, bn as ArrowUpDown, c as Users, cn as Check, dn as Building2, en as CircleMinus, fn as Boxes, ft as LoaderCircle, h as TriangleAlert, i as X, in as ChevronUp, jt as FileText, k as ShieldCheck, l as User, ln as CheckCheck, lt as Mail, mn as Bot, nn as CircleAlert, ot as Menu, p as Trophy, qt as Container, sn as ChevronDown, tn as CircleCheck, un as Calendar, w as Sparkles, x as Table, xn as ArrowRight, xt as Kanban, yt as Layers } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Skeleton } from "./skeleton-CElFHdk0.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { C as requestRevisionInSupabase, N as useAuth, P as showPillToast, S as mapBookingRecordToRequest, b as calculateRequestsStats, c as DialogDescription, d as DialogTitle, l as DialogFooter, o as Dialog, r as AppLayout, s as DialogContent, u as DialogHeader, v as useSupabaseRealtime, x as fetchBookingRequestsFromSupabase, y as approveBookingRequestInSupabase } from "./router-BJg2H47m.mjs";
import { t as LifecycleDropdownSelect } from "./LifecycleDropdownSelect-Dr2RhBr1.mjs";
import { a as useCachedForwarders } from "./entity-cache-C4kyVDy3.mjs";
import { n as Input, t as Button } from "./input-BcTzOgX2.mjs";
import { t as ComposeEmailModal } from "./ComposeEmailModal-BqLUMJ5t.mjs";
import { t as Label } from "./label-8xz9aKVd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/requests-Cy0h-U-J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$19 = "/app/applet/src/components/nashmia/requests/RequestsHeader.tsx";
var RequestsHeader = (0, import_react.memo)(function RequestsHeader({ onOpenMobileMenu, onRefresh, isRefreshing = false, onExportCsv, onOpenMultiForwarderModal, totalRequests, pendingCount }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "flex flex-col gap-4 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-start gap-3",
			children: [onOpenMobileMenu && /* @__PURE__ */ (void 0)(Button, {
				type: "button",
				variant: "outline",
				size: "icon",
				onClick: onOpenMobileMenu,
				className: "size-9 shrink-0 border-slate-200 text-slate-700 hover:bg-slate-50 lg:hidden",
				"aria-label": "Open mobile navigation",
				children: /* @__PURE__ */ (void 0)(Menu, { className: "size-5" }, void 0, false, {
					fileName: _jsxFileName$19,
					lineNumber: 47,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$19,
				lineNumber: 39,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid size-11 place-items-center rounded-2xl border border-[#0FA3B1]/25 bg-gradient-to-br from-[#E8F5F6] to-[#D4EFF2] text-[#0FA3B1] shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClipboardList, { className: "size-5" }, void 0, false, {
						fileName: _jsxFileName$19,
						lineNumber: 53,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$19,
					lineNumber: 52,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "text-[22px] font-bold tracking-tight text-slate-900 sm:text-[24px]",
							children: "Booking Requests"
						}, void 0, false, {
							fileName: _jsxFileName$19,
							lineNumber: 58,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11.5px] font-semibold text-emerald-700",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 animate-pulse rounded-full bg-emerald-500" }, void 0, false, {
								fileName: _jsxFileName$19,
								lineNumber: 62,
								columnNumber: 17
							}, this), "Live Desk"]
						}, void 0, true, {
							fileName: _jsxFileName$19,
							lineNumber: 61,
							columnNumber: 15
						}, this),
						pendingCount > 0 && /* @__PURE__ */ (void 0)("span", {
							className: "inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[11.5px] font-bold text-amber-800",
							children: [pendingCount, " Awaiting Review"]
						}, void 0, true, {
							fileName: _jsxFileName$19,
							lineNumber: 66,
							columnNumber: 17
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$19,
					lineNumber: 57,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-0.5 text-[13px] text-slate-500",
					children: "Review freight bookings, verify carrier rates, allocate equipment, and confirm export schedules."
				}, void 0, false, {
					fileName: _jsxFileName$19,
					lineNumber: 71,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$19,
					lineNumber: 56,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$19,
				lineNumber: 51,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$19,
			lineNumber: 37,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap items-center gap-2 sm:justify-end",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					onClick: onRefresh,
					disabled: isRefreshing,
					className: "h-9 gap-1.5 border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `size-3.5 ${isRefreshing ? "animate-spin text-[#0FA3B1]" : ""}` }, void 0, false, {
						fileName: _jsxFileName$19,
						lineNumber: 89,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "hidden sm:inline",
						children: "Refresh"
					}, void 0, false, {
						fileName: _jsxFileName$19,
						lineNumber: 90,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$19,
					lineNumber: 81,
					columnNumber: 9
				}, this),
				onExportCsv && /* @__PURE__ */ (void 0)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					onClick: onExportCsv,
					className: "h-9 gap-1.5 border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
					children: [/* @__PURE__ */ (void 0)(Download, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$19,
						lineNumber: 101,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("span", {
						className: "hidden sm:inline",
						children: "Export CSV"
					}, void 0, false, {
						fileName: _jsxFileName$19,
						lineNumber: 102,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$19,
					lineNumber: 94,
					columnNumber: 11
				}, this),
				onOpenMultiForwarderModal && /* @__PURE__ */ (void 0)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					onClick: onOpenMultiForwarderModal,
					className: "h-9 gap-1.5 border-[#0FA3B1]/30 bg-[#E8F5F6]/40 text-[#0FA3B1] hover:bg-[#E8F5F6] font-semibold",
					children: [/* @__PURE__ */ (void 0)(Users, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$19,
						lineNumber: 114,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("span", { children: "Request Quotes" }, void 0, false, {
						fileName: _jsxFileName$19,
						lineNumber: 115,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$19,
					lineNumber: 107,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					size: "sm",
					className: "h-9 gap-1.5 bg-[#0FA3B1] px-4 font-semibold text-white shadow-sm hover:bg-[#0D919E] active:scale-[0.98]",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/new-booking",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$19,
							lineNumber: 125,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "New Booking" }, void 0, false, {
							fileName: _jsxFileName$19,
							lineNumber: 126,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$19,
						lineNumber: 124,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$19,
					lineNumber: 119,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$19,
			lineNumber: 80,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$19,
		lineNumber: 35,
		columnNumber: 5
	}, this);
});
var _jsxFileName$18 = "/app/applet/src/components/nashmia/requests/RequestsMetrics.tsx";
var RequestsMetrics = (0, import_react.memo)(function RequestsMetrics({ stats, onFilterStatus, activeStatusFilter = "All" }) {
	const isTotalSelected = activeStatusFilter === "All" || !activeStatusFilter;
	const isPendingSelected = activeStatusFilter === "Pending Review";
	const isRateSelected = activeStatusFilter === "Rate Verification";
	const isUrgentSelected = activeStatusFilter === "Urgent";
	const isApprovedSelected = activeStatusFilter === "Approved";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative w-full min-w-0 max-w-full",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -top-8 inset-x-0 mx-auto h-72 w-full max-w-full sm:max-w-5xl bg-gradient-to-r from-amber-400/20 via-orange-300/15 to-teal-400/15 blur-3xl opacity-65 -z-10" }, void 0, false, {
			fileName: _jsxFileName$18,
			lineNumber: 25,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-4.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onFilterStatus?.("All"),
					className: `group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-5.5 border text-left transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px] sm:min-h-[155px] cursor-pointer ${isTotalSelected ? "border-[#0FA3B1] ring-2 ring-[#0FA3B1]/25 shadow-[0_14px_34px_-8px_rgba(15,163,177,0.18)]" : "border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Boxes, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 43,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$18,
							lineNumber: 42,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Total"
							}, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 46,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Requests"
							}, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 49,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$18,
							lineNumber: 45,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$18,
						lineNumber: 41,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: stats.total
						}, void 0, false, {
							fileName: _jsxFileName$18,
							lineNumber: 57,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "pb-1.5",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
								className: "w-16 h-4 overflow-visible",
								viewBox: "0 0 64 16",
								fill: "none",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
									d: "M 2 13 C 4 13 5 6 8 6 C 11 6 12 13 14 13 H 18 C 20 13 21 6 24 6 C 27 6 28 13 30 13 H 34 C 36 13 37 6 40 6 C 43 6 44 13 46 13 H 50 C 52 13 53 6 56 6 C 59 6 60 13 62 13",
									stroke: "#0f172a",
									strokeWidth: "1.6",
									strokeLinecap: "round"
								}, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 63,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 62,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$18,
							lineNumber: 61,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$18,
						lineNumber: 56,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$18,
					lineNumber: 31,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onFilterStatus?.("Pending Review"),
					className: `group relative overflow-hidden rounded-[24px] sm:rounded-[26px] p-5 sm:p-5.5 border text-left transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px] sm:min-h-[155px] cursor-pointer ${isPendingSelected ? "border-amber-300 ring-2 ring-amber-400/40 shadow-[0_20px_42px_-10px_rgba(110,65,25,0.5)]" : "border-amber-400/20 shadow-[0_16px_36px_-10px_rgba(110,65,25,0.3)] hover:shadow-[0_20px_42px_-10px_rgba(110,65,25,0.4)]"}`,
					style: { background: `
              radial-gradient(circle at 85% 15%, rgba(165, 105, 45, 0.85) 0%, transparent 60%),
              radial-gradient(circle at 20% 80%, rgba(125, 75, 30, 0.5) 0%, transparent 60%),
              linear-gradient(135deg, #44311e 0%, #684824 52%, #382515 100%)
            ` },
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" }, void 0, false, {
							fileName: _jsxFileName$18,
							lineNumber: 94,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-11 sm:size-12 rounded-full border border-amber-200/30 bg-white/5 backdrop-blur-xs flex items-center justify-center text-amber-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-5 stroke-[1.8] text-amber-100" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 99,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 98,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-amber-100/95",
									children: "Pending"
								}, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 102,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-amber-100/95",
									children: "Review"
								}, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 105,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$18,
								lineNumber: 101,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$18,
							lineNumber: 97,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-baseline",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[28px] sm:text-[32px] font-bold text-white tracking-tight leading-none",
									children: stats.pendingReview
								}, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 114,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-normal text-amber-200/80 ml-1",
									children: "reqs"
								}, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 117,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$18,
								lineNumber: 113,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pb-1",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
									className: "w-16 h-5 overflow-visible",
									viewBox: "0 0 64 22",
									fill: "none",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
											d: "M 2 15 C 10 15 14 5 22 5 C 30 5 34 18 42 18 C 50 18 54 8 62 8",
											stroke: "rgba(253, 230, 138, 0.75)",
											strokeWidth: "1.8",
											strokeLinecap: "round"
										}, void 0, false, {
											fileName: _jsxFileName$18,
											lineNumber: 123,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "22",
											cy: "5",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$18,
											lineNumber: 129,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "42",
											cy: "18",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$18,
											lineNumber: 130,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "62",
											cy: "8",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$18,
											lineNumber: 131,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$18,
									lineNumber: 122,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 121,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$18,
							lineNumber: 112,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$18,
					lineNumber: 77,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onFilterStatus?.("Rate Verification"),
					className: `group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-5.5 border text-left transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px] sm:min-h-[155px] cursor-pointer ${isRateSelected ? "border-[#0FA3B1] ring-2 ring-[#0FA3B1]/25 shadow-[0_14px_34px_-8px_rgba(15,163,177,0.18)]" : "border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Receipt, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 152,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$18,
							lineNumber: 151,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Rate"
							}, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 155,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Verification"
							}, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 158,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$18,
							lineNumber: 154,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$18,
						lineNumber: 150,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: stats.rateVerification
						}, void 0, false, {
							fileName: _jsxFileName$18,
							lineNumber: 166,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-end gap-1.5 h-6 pb-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-2 rounded-full bg-slate-900/90" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 171,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-3.5 rounded-full bg-slate-900/90" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 172,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-6 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 173,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 174,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-2.5 rounded-full bg-slate-900/80" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 175,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$18,
							lineNumber: 170,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$18,
						lineNumber: 165,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$18,
					lineNumber: 140,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onFilterStatus?.("Urgent"),
					className: `group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-5.5 border text-left transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px] sm:min-h-[155px] cursor-pointer ${isUrgentSelected ? "border-[#0FA3B1] ring-2 ring-[#0FA3B1]/25 shadow-[0_14px_34px_-8px_rgba(15,163,177,0.18)]" : "border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0 relative",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, { className: "size-5 stroke-[1.8] text-rose-600" }, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 195,
								columnNumber: 15
							}, this), stats.urgentCutoffs > 0 && /* @__PURE__ */ (void 0)("span", { className: "absolute top-0 right-0 size-2.5 rounded-full bg-rose-500 ring-2 ring-white animate-pulse" }, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 197,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$18,
							lineNumber: 194,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Urgent"
							}, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 201,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Cut-Offs"
							}, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 204,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$18,
							lineNumber: 200,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$18,
						lineNumber: 193,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: stats.urgentCutoffs
						}, void 0, false, {
							fileName: _jsxFileName$18,
							lineNumber: 212,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-rows-3 grid-flow-col gap-x-1.5 gap-y-1 pb-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 217,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-rose-600" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 218,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 219,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 221,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-400" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 222,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 223,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-rose-600" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 225,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 226,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 227,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 229,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-400" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 230,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 231,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 233,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 234,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 235,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$18,
							lineNumber: 216,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$18,
						lineNumber: 211,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$18,
					lineNumber: 183,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onFilterStatus?.("Approved"),
					className: `group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-5.5 border text-left transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px] sm:min-h-[155px] cursor-pointer ${isApprovedSelected ? "border-[#0FA3B1] ring-2 ring-[#0FA3B1]/25 shadow-[0_14px_34px_-8px_rgba(15,163,177,0.18)]" : "border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 255,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$18,
							lineNumber: 254,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Approved"
							}, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 258,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Confirmed"
							}, void 0, false, {
								fileName: _jsxFileName$18,
								lineNumber: 261,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$18,
							lineNumber: 257,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$18,
						lineNumber: 253,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: stats.approved
						}, void 0, false, {
							fileName: _jsxFileName$18,
							lineNumber: 269,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "pb-1",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
								className: "w-16 h-5 overflow-visible",
								viewBox: "0 0 64 22",
								fill: "none",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
									d: "M 2 17 C 14 17 20 5 32 5 C 44 5 50 17 62 17",
									stroke: "#0f172a",
									strokeWidth: "1.8",
									strokeLinecap: "round"
								}, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 275,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
									cx: "32",
									cy: "5",
									r: "2.5",
									fill: "#0f172a"
								}, void 0, false, {
									fileName: _jsxFileName$18,
									lineNumber: 281,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$18,
								lineNumber: 274,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$18,
							lineNumber: 273,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$18,
						lineNumber: 268,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$18,
					lineNumber: 243,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$18,
			lineNumber: 27,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$18,
		lineNumber: 23,
		columnNumber: 5
	}, this);
});
var _jsxFileName$17 = "/app/applet/src/components/nashmia/requests/RequestsToolbar.tsx";
var STATUS_TABS = [
	{
		label: "All Requests",
		value: "All"
	},
	{
		label: "Pending Review",
		value: "Pending Review"
	},
	{
		label: "Rate Verification",
		value: "Rate Verification"
	},
	{
		label: "Line Allocation",
		value: "Line Allocation"
	},
	{
		label: "Approved",
		value: "Approved"
	},
	{
		label: "Needs Revision",
		value: "Revision Requested"
	}
];
var RequestsToolbar = (0, import_react.memo)(function RequestsToolbar({ filters, onFilterChange, statusCounts, totalFiltered }) {
	const hasActiveFilters = filters.search !== "" || filters.status !== "All" || filters.priority !== "All" || filters.carrier !== "" || filters.pol !== "" || filters.pod !== "";
	const handleResetFilters = () => {
		onFilterChange({
			search: "",
			status: "All",
			priority: "All",
			carrier: "",
			pol: "",
			pod: ""
		});
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col gap-3.5",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex-1 max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" }, void 0, false, {
						fileName: _jsxFileName$17,
						lineNumber: 64,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						type: "text",
						placeholder: "Search ref #, buyer, supplier, port, cargo, HS code...",
						value: filters.search,
						onChange: (e) => onFilterChange({ search: e.target.value }),
						className: "h-10 pl-9.5 pr-8 text-[13.5px] border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-[#0FA3B1]"
					}, void 0, false, {
						fileName: _jsxFileName$17,
						lineNumber: 65,
						columnNumber: 11
					}, this),
					filters.search && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => onFilterChange({ search: "" }),
						className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:text-slate-600",
						"aria-label": "Clear search",
						children: /* @__PURE__ */ (void 0)(X, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$17,
							lineNumber: 79,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$17,
						lineNumber: 73,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$17,
				lineNumber: 63,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
						value: filters.priority,
						onChange: (val) => onFilterChange({ priority: val }),
						options: [
							{
								value: "All",
								label: "All Priorities"
							},
							{
								value: "Urgent",
								label: "🔴 Urgent Priority"
							},
							{
								value: "High",
								label: "🟠 High Priority"
							},
							{
								value: "Normal",
								label: "🟢 Normal Priority"
							},
							{
								value: "Flexible",
								label: "⚪ Flexible"
							}
						],
						placeholder: "All Priorities",
						activeColor: "teal",
						triggerClassName: "h-10 min-w-[140px]"
					}, void 0, false, {
						fileName: _jsxFileName$17,
						lineNumber: 87,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
						value: filters.carrier,
						onChange: (val) => onFilterChange({ carrier: val }),
						options: [
							{
								value: "",
								label: "All Shipping Lines"
							},
							{
								value: "MSC",
								label: "MSC Mediterranean"
							},
							{
								value: "Maersk",
								label: "Maersk Line"
							},
							{
								value: "CMA CGM",
								label: "CMA CGM"
							},
							{
								value: "Hapag-Lloyd",
								label: "Hapag-Lloyd"
							},
							{
								value: "ONE",
								label: "ONE Express"
							}
						],
						placeholder: "All Shipping Lines",
						activeColor: "teal",
						triggerClassName: "h-10 min-w-[155px]"
					}, void 0, false, {
						fileName: _jsxFileName$17,
						lineNumber: 103,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
						value: filters.sortBy,
						onChange: (val) => onFilterChange({ sortBy: val }),
						options: [
							{
								value: "date-desc",
								label: "Newest First"
							},
							{
								value: "date-asc",
								label: "Oldest First"
							},
							{
								value: "priority-desc",
								label: "Highest Priority"
							},
							{
								value: "rate-desc",
								label: "Highest Freight Rate"
							},
							{
								value: "buyer-asc",
								label: "Buyer Name (A-Z)"
							}
						],
						placeholder: "Sort By",
						icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpDown, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$17,
							lineNumber: 131,
							columnNumber: 19
						}, this),
						activeColor: "teal",
						triggerClassName: "h-10 min-w-[140px]"
					}, void 0, false, {
						fileName: _jsxFileName$17,
						lineNumber: 120,
						columnNumber: 11
					}, this),
					hasActiveFilters && /* @__PURE__ */ (void 0)(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						onClick: handleResetFilters,
						className: "h-10 px-2.5 text-[12.5px] text-rose-600 hover:bg-rose-50 hover:text-rose-700",
						children: [/* @__PURE__ */ (void 0)(X, { className: "mr-1 size-3.5" }, void 0, false, {
							fileName: _jsxFileName$17,
							lineNumber: 145,
							columnNumber: 15
						}, this), "Reset"]
					}, void 0, true, {
						fileName: _jsxFileName$17,
						lineNumber: 138,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center rounded-xl border border-slate-200 bg-slate-100/80 p-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => onFilterChange({ viewMode: "grid" }),
								className: `flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[12.5px] font-semibold transition-all ${filters.viewMode === "grid" ? "bg-white text-[#0FA3B1] shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
								title: "Card Grid View",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutGrid, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$17,
									lineNumber: 162,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "hidden sm:inline",
									children: "Cards"
								}, void 0, false, {
									fileName: _jsxFileName$17,
									lineNumber: 163,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$17,
								lineNumber: 152,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => onFilterChange({ viewMode: "table" }),
								className: `flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[12.5px] font-semibold transition-all ${filters.viewMode === "table" ? "bg-white text-[#0FA3B1] shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
								title: "Dense Table View",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$17,
									lineNumber: 175,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "hidden sm:inline",
									children: "Table"
								}, void 0, false, {
									fileName: _jsxFileName$17,
									lineNumber: 176,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$17,
								lineNumber: 165,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => onFilterChange({ viewMode: "kanban" }),
								className: `flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[12.5px] font-semibold transition-all ${filters.viewMode === "kanban" ? "bg-white text-[#0FA3B1] shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
								title: "Stage Kanban View",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Kanban, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$17,
									lineNumber: 188,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "hidden sm:inline",
									children: "Stages"
								}, void 0, false, {
									fileName: _jsxFileName$17,
									lineNumber: 189,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$17,
								lineNumber: 178,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$17,
						lineNumber: 151,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$17,
				lineNumber: 85,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$17,
			lineNumber: 61,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none",
			children: [STATUS_TABS.map((tab) => {
				const count = tab.value === "All" ? statusCounts["All"] || 0 : statusCounts[tab.value] || 0;
				const isActive = filters.status === tab.value;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onFilterChange({ status: tab.value }),
					className: `flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-1.5 text-[13px] font-semibold transition-all ${isActive ? "bg-[#0FA3B1] text-white shadow-xs" : "bg-slate-100/90 text-slate-700 hover:bg-slate-200/80"}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: tab.label }, void 0, false, {
						fileName: _jsxFileName$17,
						lineNumber: 213,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: `rounded-full px-1.5 py-0.2 text-[11px] font-bold ${isActive ? "bg-white/25 text-white" : "bg-white text-slate-700 shadow-xs"}`,
						children: count
					}, void 0, false, {
						fileName: _jsxFileName$17,
						lineNumber: 214,
						columnNumber: 15
					}, this)]
				}, tab.value, true, {
					fileName: _jsxFileName$17,
					lineNumber: 203,
					columnNumber: 13
				}, this);
			}), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "ml-auto hidden items-center text-[12.5px] text-slate-500 md:flex",
				children: [
					"Showing ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "mx-1 font-bold text-slate-800",
						children: totalFiltered
					}, void 0, false, {
						fileName: _jsxFileName$17,
						lineNumber: 226,
						columnNumber: 19
					}, this),
					" requests"
				]
			}, void 0, true, {
				fileName: _jsxFileName$17,
				lineNumber: 225,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$17,
			lineNumber: 196,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$17,
		lineNumber: 59,
		columnNumber: 5
	}, this);
});
var COUNTRY_CODE_TO_FLAG = {
	GB: "🇬🇧",
	UK: "🇬🇧",
	PK: "🇵🇰",
	US: "🇺🇸",
	USA: "🇺🇸",
	DE: "🇩🇪",
	AE: "🇦🇪",
	UAE: "🇦🇪",
	CN: "🇨🇳",
	NL: "🇳🇱",
	BE: "🇧🇪",
	FR: "🇫🇷",
	ES: "🇪🇸",
	IT: "🇮🇹",
	SG: "🇸🇬",
	IN: "🇮🇳",
	SA: "🇸🇦",
	QA: "🇶🇦",
	OM: "🇴🇲",
	KW: "🇰🇼",
	BH: "🇧🇭",
	JO: "🇯🇴",
	EG: "🇪🇬",
	TR: "🇹🇷",
	GR: "🇬🇷",
	KR: "🇰🇷",
	JP: "🇯🇵",
	HK: "🇭🇰",
	MY: "🇲🇾",
	TH: "🇹🇭",
	VN: "🇻🇳",
	ID: "🇮🇩",
	PH: "🇵🇭",
	TW: "🇹🇼",
	LK: "🇱🇰",
	BD: "🇧🇩",
	AU: "🇦🇺",
	NZ: "🇳🇿",
	ZA: "🇿🇦",
	BR: "🇧🇷",
	AR: "🇦🇷",
	CL: "🇨🇱",
	MX: "🇲🇽",
	CA: "🇨🇦",
	IE: "🇮🇪",
	PT: "🇵🇹",
	PL: "🇵🇱",
	SE: "🇸🇪",
	NO: "🇳🇴",
	DK: "🇩🇰",
	FI: "🇫🇮",
	CH: "🇨🇭",
	AT: "🇦🇹"
};
var PORT_CODE_MAP = {
	FXT: {
		flag: "🇬🇧",
		countryCode: "GB",
		countryName: "United Kingdom"
	},
	FEL: {
		flag: "🇬🇧",
		countryCode: "GB",
		countryName: "United Kingdom"
	},
	SOU: {
		flag: "🇬🇧",
		countryCode: "GB",
		countryName: "United Kingdom"
	},
	LGP: {
		flag: "🇬🇧",
		countryCode: "GB",
		countryName: "United Kingdom"
	},
	LIV: {
		flag: "🇬🇧",
		countryCode: "GB",
		countryName: "United Kingdom"
	},
	TEE: {
		flag: "🇬🇧",
		countryCode: "GB",
		countryName: "United Kingdom"
	},
	TIL: {
		flag: "🇬🇧",
		countryCode: "GB",
		countryName: "United Kingdom"
	},
	IMM: {
		flag: "🇬🇧",
		countryCode: "GB",
		countryName: "United Kingdom"
	},
	GBFXT: {
		flag: "🇬🇧",
		countryCode: "GB",
		countryName: "United Kingdom"
	},
	GBSOU: {
		flag: "🇬🇧",
		countryCode: "GB",
		countryName: "United Kingdom"
	},
	GBLGP: {
		flag: "🇬🇧",
		countryCode: "GB",
		countryName: "United Kingdom"
	},
	KHI: {
		flag: "🇵🇰",
		countryCode: "PK",
		countryName: "Pakistan"
	},
	KAR: {
		flag: "🇵🇰",
		countryCode: "PK",
		countryName: "Pakistan"
	},
	QCT: {
		flag: "🇵🇰",
		countryCode: "PK",
		countryName: "Pakistan"
	},
	BQM: {
		flag: "🇵🇰",
		countryCode: "PK",
		countryName: "Pakistan"
	},
	PKKHI: {
		flag: "🇵🇰",
		countryCode: "PK",
		countryName: "Pakistan"
	},
	PKBQM: {
		flag: "🇵🇰",
		countryCode: "PK",
		countryName: "Pakistan"
	},
	GWD: {
		flag: "🇵🇰",
		countryCode: "PK",
		countryName: "Pakistan"
	},
	HAM: {
		flag: "🇩🇪",
		countryCode: "DE",
		countryName: "Germany"
	},
	BRV: {
		flag: "🇩🇪",
		countryCode: "DE",
		countryName: "Germany"
	},
	DEHAM: {
		flag: "🇩🇪",
		countryCode: "DE",
		countryName: "Germany"
	},
	DEBRV: {
		flag: "🇩🇪",
		countryCode: "DE",
		countryName: "Germany"
	},
	RTM: {
		flag: "🇳🇱",
		countryCode: "NL",
		countryName: "Netherlands"
	},
	AMS: {
		flag: "🇳🇱",
		countryCode: "NL",
		countryName: "Netherlands"
	},
	NLRTM: {
		flag: "🇳🇱",
		countryCode: "NL",
		countryName: "Netherlands"
	},
	ANR: {
		flag: "🇧🇪",
		countryCode: "BE",
		countryName: "Belgium"
	},
	ZEE: {
		flag: "🇧🇪",
		countryCode: "BE",
		countryName: "Belgium"
	},
	BEANR: {
		flag: "🇧🇪",
		countryCode: "BE",
		countryName: "Belgium"
	},
	LEH: {
		flag: "🇫🇷",
		countryCode: "FR",
		countryName: "France"
	},
	FOS: {
		flag: "🇫🇷",
		countryCode: "FR",
		countryName: "France"
	},
	MRS: {
		flag: "🇫🇷",
		countryCode: "FR",
		countryName: "France"
	},
	DKK: {
		flag: "🇫🇷",
		countryCode: "FR",
		countryName: "France"
	},
	FRLEH: {
		flag: "🇫🇷",
		countryCode: "FR",
		countryName: "France"
	},
	FRFOS: {
		flag: "🇫🇷",
		countryCode: "FR",
		countryName: "France"
	},
	VLC: {
		flag: "🇪🇸",
		countryCode: "ES",
		countryName: "Spain"
	},
	BCN: {
		flag: "🇪🇸",
		countryCode: "ES",
		countryName: "Spain"
	},
	ALG: {
		flag: "🇪🇸",
		countryCode: "ES",
		countryName: "Spain"
	},
	ESVLC: {
		flag: "🇪🇸",
		countryCode: "ES",
		countryName: "Spain"
	},
	ESBCN: {
		flag: "🇪🇸",
		countryCode: "ES",
		countryName: "Spain"
	},
	GOA: {
		flag: "🇮🇹",
		countryCode: "IT",
		countryName: "Italy"
	},
	SPE: {
		flag: "🇮🇹",
		countryCode: "IT",
		countryName: "Italy"
	},
	LIV_IT: {
		flag: "🇮🇹",
		countryCode: "IT",
		countryName: "Italy"
	},
	TRS: {
		flag: "🇮🇹",
		countryCode: "IT",
		countryName: "Italy"
	},
	ITGOA: {
		flag: "🇮🇹",
		countryCode: "IT",
		countryName: "Italy"
	},
	JEA: {
		flag: "🇦🇪",
		countryCode: "AE",
		countryName: "UAE"
	},
	DXB: {
		flag: "🇦🇪",
		countryCode: "AE",
		countryName: "UAE"
	},
	AEJEA: {
		flag: "🇦🇪",
		countryCode: "AE",
		countryName: "UAE"
	},
	AUH: {
		flag: "🇦🇪",
		countryCode: "AE",
		countryName: "UAE"
	},
	SHJ: {
		flag: "🇦🇪",
		countryCode: "AE",
		countryName: "UAE"
	},
	KLF: {
		flag: "🇦🇪",
		countryCode: "AE",
		countryName: "UAE"
	},
	SAV: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	NYC: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	NYK: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	NWK: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	LGB: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	LAX: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	HOU: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	ORF: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	CHS: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	OAK: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	SEA: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	USSAV: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	USNYC: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	USLAX: {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	},
	SHA: {
		flag: "🇨🇳",
		countryCode: "CN",
		countryName: "China"
	},
	NBO: {
		flag: "🇨🇳",
		countryCode: "CN",
		countryName: "China"
	},
	SZX: {
		flag: "🇨🇳",
		countryCode: "CN",
		countryName: "China"
	},
	YTN: {
		flag: "🇨🇳",
		countryCode: "CN",
		countryName: "China"
	},
	QIN: {
		flag: "🇨🇳",
		countryCode: "CN",
		countryName: "China"
	},
	XMN: {
		flag: "🇨🇳",
		countryCode: "CN",
		countryName: "China"
	},
	TXG: {
		flag: "🇨🇳",
		countryCode: "CN",
		countryName: "China"
	},
	CNSHA: {
		flag: "🇨🇳",
		countryCode: "CN",
		countryName: "China"
	},
	CNNBO: {
		flag: "🇨🇳",
		countryCode: "CN",
		countryName: "China"
	},
	SIN: {
		flag: "🇸🇬",
		countryCode: "SG",
		countryName: "Singapore"
	},
	SGSIN: {
		flag: "🇸🇬",
		countryCode: "SG",
		countryName: "Singapore"
	},
	HKG: {
		flag: "🇭🇰",
		countryCode: "HK",
		countryName: "Hong Kong"
	},
	HKHKG: {
		flag: "🇭🇰",
		countryCode: "HK",
		countryName: "Hong Kong"
	},
	BOM: {
		flag: "🇮🇳",
		countryCode: "IN",
		countryName: "India"
	},
	NSA: {
		flag: "🇮🇳",
		countryCode: "IN",
		countryName: "India"
	},
	MAA: {
		flag: "🇮🇳",
		countryCode: "IN",
		countryName: "India"
	},
	MUN: {
		flag: "🇮🇳",
		countryCode: "IN",
		countryName: "India"
	},
	CCU: {
		flag: "🇮🇳",
		countryCode: "IN",
		countryName: "India"
	},
	COK: {
		flag: "🇮🇳",
		countryCode: "IN",
		countryName: "India"
	},
	INNSA: {
		flag: "🇮🇳",
		countryCode: "IN",
		countryName: "India"
	},
	INMUN: {
		flag: "🇮🇳",
		countryCode: "IN",
		countryName: "India"
	},
	DMM: {
		flag: "🇸🇦",
		countryCode: "SA",
		countryName: "Saudi Arabia"
	},
	JED: {
		flag: "🇸🇦",
		countryCode: "SA",
		countryName: "Saudi Arabia"
	},
	RUH: {
		flag: "🇸🇦",
		countryCode: "SA",
		countryName: "Saudi Arabia"
	},
	JUB: {
		flag: "🇸🇦",
		countryCode: "SA",
		countryName: "Saudi Arabia"
	},
	SADMM: {
		flag: "🇸🇦",
		countryCode: "SA",
		countryName: "Saudi Arabia"
	},
	SAJED: {
		flag: "🇸🇦",
		countryCode: "SA",
		countryName: "Saudi Arabia"
	},
	DOH: {
		flag: "🇶🇦",
		countryCode: "QA",
		countryName: "Qatar"
	},
	QADOH: {
		flag: "🇶🇦",
		countryCode: "QA",
		countryName: "Qatar"
	},
	MCT: {
		flag: "🇴🇲",
		countryCode: "OM",
		countryName: "Oman"
	},
	SOH: {
		flag: "🇴🇲",
		countryCode: "OM",
		countryName: "Oman"
	},
	SLL: {
		flag: "🇴🇲",
		countryCode: "OM",
		countryName: "Oman"
	},
	KWI: {
		flag: "🇰🇼",
		countryCode: "KW",
		countryName: "Kuwait"
	},
	SHU: {
		flag: "🇰🇼",
		countryCode: "KW",
		countryName: "Kuwait"
	},
	BAH: {
		flag: "🇧🇭",
		countryCode: "BH",
		countryName: "Bahrain"
	},
	KBS: {
		flag: "🇧🇭",
		countryCode: "BH",
		countryName: "Bahrain"
	},
	SOK: {
		flag: "🇪🇬",
		countryCode: "EG",
		countryName: "Egypt"
	},
	PSD: {
		flag: "🇪🇬",
		countryCode: "EG",
		countryName: "Egypt"
	},
	ALX: {
		flag: "🇪🇬",
		countryCode: "EG",
		countryName: "Egypt"
	},
	EGSOK: {
		flag: "🇪🇬",
		countryCode: "EG",
		countryName: "Egypt"
	},
	AQB: {
		flag: "🇯🇴",
		countryCode: "JO",
		countryName: "Jordan"
	},
	JOAQB: {
		flag: "🇯🇴",
		countryCode: "JO",
		countryName: "Jordan"
	},
	IST: {
		flag: "🇹🇷",
		countryCode: "TR",
		countryName: "Turkey"
	},
	MER: {
		flag: "🇹🇷",
		countryCode: "TR",
		countryName: "Turkey"
	},
	IZM: {
		flag: "🇹🇷",
		countryCode: "TR",
		countryName: "Turkey"
	},
	AMB: {
		flag: "🇹🇷",
		countryCode: "TR",
		countryName: "Turkey"
	},
	CMB: {
		flag: "🇱🇰",
		countryCode: "LK",
		countryName: "Sri Lanka"
	},
	LKCMB: {
		flag: "🇱🇰",
		countryCode: "LK",
		countryName: "Sri Lanka"
	},
	CHG: {
		flag: "🇧🇩",
		countryCode: "BD",
		countryName: "Bangladesh"
	},
	CGP: {
		flag: "🇧🇩",
		countryCode: "BD",
		countryName: "Bangladesh"
	},
	BUS: {
		flag: "🇰🇷",
		countryCode: "KR",
		countryName: "South Korea"
	},
	INC: {
		flag: "🇰🇷",
		countryCode: "KR",
		countryName: "South Korea"
	},
	KRBUS: {
		flag: "🇰🇷",
		countryCode: "KR",
		countryName: "South Korea"
	},
	TYO: {
		flag: "🇯🇵",
		countryCode: "JP",
		countryName: "Japan"
	},
	YOK: {
		flag: "🇯🇵",
		countryCode: "JP",
		countryName: "Japan"
	},
	KOB: {
		flag: "🇯🇵",
		countryCode: "JP",
		countryName: "Japan"
	},
	NAG: {
		flag: "🇯🇵",
		countryCode: "JP",
		countryName: "Japan"
	},
	SYD: {
		flag: "🇦🇺",
		countryCode: "AU",
		countryName: "Australia"
	},
	MEL: {
		flag: "🇦🇺",
		countryCode: "AU",
		countryName: "Australia"
	},
	BNE: {
		flag: "🇦🇺",
		countryCode: "AU",
		countryName: "Australia"
	},
	FRE: {
		flag: "🇦🇺",
		countryCode: "AU",
		countryName: "Australia"
	},
	DUR: {
		flag: "🇿🇦",
		countryCode: "ZA",
		countryName: "South Africa"
	},
	CPT: {
		flag: "🇿🇦",
		countryCode: "ZA",
		countryName: "South Africa"
	},
	PLZ: {
		flag: "🇿🇦",
		countryCode: "ZA",
		countryName: "South Africa"
	},
	SSZ: {
		flag: "🇧🇷",
		countryCode: "BR",
		countryName: "Brazil"
	},
	PNG: {
		flag: "🇧🇷",
		countryCode: "BR",
		countryName: "Brazil"
	},
	VAN: {
		flag: "🇨🇦",
		countryCode: "CA",
		countryName: "Canada"
	},
	MTR: {
		flag: "🇨🇦",
		countryCode: "CA",
		countryName: "Canada"
	}
};
/**
* Resolves country metadata (Flag, Code, Name) from Port Code, Port Name, or Country string.
*/
function getPortCountryMeta(portCode, portName, countryHint) {
	const code = (portCode || "").trim().toUpperCase();
	const name = (portName || "").toLowerCase();
	const hint = (countryHint || "").toLowerCase();
	if (code && PORT_CODE_MAP[code]) return PORT_CODE_MAP[code];
	if (code && code.length === 5) {
		const prefix = code.slice(0, 2);
		if (COUNTRY_CODE_TO_FLAG[prefix]) return {
			flag: COUNTRY_CODE_TO_FLAG[prefix],
			countryCode: prefix,
			countryName: prefix
		};
	}
	if (countryHint) {
		const upperHint = countryHint.trim().toUpperCase();
		if (COUNTRY_CODE_TO_FLAG[upperHint]) return {
			flag: COUNTRY_CODE_TO_FLAG[upperHint],
			countryCode: upperHint,
			countryName: countryHint
		};
	}
	const combined = `${name} ${hint}`;
	if (combined.includes("felixstowe") || combined.includes("southampton") || combined.includes("london gateway") || combined.includes("liverpool") || combined.includes("united kingdom") || combined.includes("uk") || combined.includes("britain") || combined.includes("england")) return {
		flag: "🇬🇧",
		countryCode: "GB",
		countryName: "United Kingdom"
	};
	if (combined.includes("karachi") || combined.includes("qasim") || combined.includes("pakistan") || combined.includes("gwadar")) return {
		flag: "🇵🇰",
		countryCode: "PK",
		countryName: "Pakistan"
	};
	if (combined.includes("hamburg") || combined.includes("bremerhaven") || combined.includes("germany") || combined.includes("deutschland")) return {
		flag: "🇩🇪",
		countryCode: "DE",
		countryName: "Germany"
	};
	if (combined.includes("rotterdam") || combined.includes("amsterdam") || combined.includes("netherlands") || combined.includes("holland")) return {
		flag: "🇳🇱",
		countryCode: "NL",
		countryName: "Netherlands"
	};
	if (combined.includes("antwerp") || combined.includes("belgium")) return {
		flag: "🇧🇪",
		countryCode: "BE",
		countryName: "Belgium"
	};
	if (combined.includes("le havre") || combined.includes("marseille") || combined.includes("fos") || combined.includes("france")) return {
		flag: "🇫🇷",
		countryCode: "FR",
		countryName: "France"
	};
	if (combined.includes("valencia") || combined.includes("barcelona") || combined.includes("algeciras") || combined.includes("spain") || combined.includes("espana")) return {
		flag: "🇪🇸",
		countryCode: "ES",
		countryName: "Spain"
	};
	if (combined.includes("genoa") || combined.includes("la spezia") || combined.includes("italy") || combined.includes("italia")) return {
		flag: "🇮🇹",
		countryCode: "IT",
		countryName: "Italy"
	};
	if (combined.includes("jebel ali") || combined.includes("dubai") || combined.includes("uae") || combined.includes("emirates") || combined.includes("abu dhabi")) return {
		flag: "🇦🇪",
		countryCode: "AE",
		countryName: "UAE"
	};
	if (combined.includes("savannah") || combined.includes("new york") || combined.includes("los angeles") || combined.includes("long beach") || combined.includes("houston") || combined.includes("usa") || combined.includes("united states")) return {
		flag: "🇺🇸",
		countryCode: "US",
		countryName: "United States"
	};
	if (combined.includes("shanghai") || combined.includes("ningbo") || combined.includes("shenzhen") || combined.includes("yantian") || combined.includes("china")) return {
		flag: "🇨🇳",
		countryCode: "CN",
		countryName: "China"
	};
	if (combined.includes("singapore")) return {
		flag: "🇸🇬",
		countryCode: "SG",
		countryName: "Singapore"
	};
	if (combined.includes("mumbai") || combined.includes("nhava sheva") || combined.includes("mundra") || combined.includes("chennai") || combined.includes("india")) return {
		flag: "🇮🇳",
		countryCode: "IN",
		countryName: "India"
	};
	if (combined.includes("dammam") || combined.includes("jeddah") || combined.includes("riyadh") || combined.includes("saudi")) return {
		flag: "🇸🇦",
		countryCode: "SA",
		countryName: "Saudi Arabia"
	};
	if (combined.includes("colombo") || combined.includes("sri lanka")) return {
		flag: "🇱🇰",
		countryCode: "LK",
		countryName: "Sri Lanka"
	};
	if (combined.includes("chittagong") || combined.includes("bangladesh")) return {
		flag: "🇧🇩",
		countryCode: "BD",
		countryName: "Bangladesh"
	};
	if (combined.includes("busan") || combined.includes("korea")) return {
		flag: "🇰🇷",
		countryCode: "KR",
		countryName: "South Korea"
	};
	if (combined.includes("tokyo") || combined.includes("yokohama") || combined.includes("kobe") || combined.includes("japan")) return {
		flag: "🇯🇵",
		countryCode: "JP",
		countryName: "Japan"
	};
	if (combined.includes("alexandria") || combined.includes("sokhna") || combined.includes("egypt")) return {
		flag: "🇪🇬",
		countryCode: "EG",
		countryName: "Egypt"
	};
	if (combined.includes("turkey") || combined.includes("istanbul") || combined.includes("mersin")) return {
		flag: "🇹🇷",
		countryCode: "TR",
		countryName: "Turkey"
	};
	return {
		flag: "🌐",
		countryCode: "INT",
		countryName: "International Port"
	};
}
var _jsxFileName$16 = "/app/applet/src/components/nashmia/common/CountryFlagSvg.tsx";
var SIZE_MAP = {
	xs: "w-4 h-2.5",
	sm: "w-4.5 h-3",
	md: "w-5 h-3.5",
	lg: "w-6.5 h-4.5"
};
/**
* Pure SVG country flag renderer with crisp vector geometries,
* ensuring identical, pixel-perfect rendering across Windows, macOS, Linux, iOS, and Android.
*/
var CountryFlagSvg = (0, import_react.memo)(function CountryFlagSvg({ countryCode, className = "", size = "md", title }) {
	const code = (countryCode || "INT").trim().toUpperCase();
	const dimensions = SIZE_MAP[size] || SIZE_MAP.md;
	const renderFlagContent = () => {
		switch (code) {
			case "GB":
			case "UK": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("clipPath", {
					id: "gb-clip",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "36",
						rx: "2"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 38,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$16,
					lineNumber: 37,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
					clipPath: "url(#gb-clip)",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
							d: "M0,0 L60,36 M60,0 L0,36",
							stroke: "#012169",
							strokeWidth: "36"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 41,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
							d: "M0,0 L60,36 M60,0 L0,36",
							stroke: "#FFFFFF",
							strokeWidth: "6"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 42,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
							d: "M0,0 L60,36 M60,0 L0,36",
							stroke: "#C8102E",
							strokeWidth: "4"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 43,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
							d: "M30,0 v36 M0,18 h60",
							stroke: "#FFFFFF",
							strokeWidth: "10"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 44,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
							d: "M30,0 v36 M0,18 h60",
							stroke: "#C8102E",
							strokeWidth: "6"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 45,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$16,
					lineNumber: 40,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 36,
				columnNumber: 11
			}, this);
			case "PK": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("clipPath", {
					id: "pk-clip",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "40",
						rx: "2"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 55,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$16,
					lineNumber: 54,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
					clipPath: "url(#pk-clip)",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
							width: "60",
							height: "40",
							fill: "#01411C"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 58,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
							width: "15",
							height: "40",
							fill: "#FFFFFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 59,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "37",
							cy: "20",
							r: "11",
							fill: "#FFFFFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 61,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "40",
							cy: "18",
							r: "9.5",
							fill: "#01411C"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 62,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
							points: "42,13 43.5,17 47.5,17 44.5,19.5 45.5,23.5 42,21 38.5,23.5 39.5,19.5 36.5,17 40.5,17",
							fill: "#FFFFFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 64,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$16,
					lineNumber: 57,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 53,
				columnNumber: 11
			}, this);
			case "US":
			case "USA": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("clipPath", {
					id: "us-clip",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "36",
						rx: "2"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 78,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$16,
					lineNumber: 77,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
					clipPath: "url(#us-clip)",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
							width: "60",
							height: "36",
							fill: "#B22234"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 81,
							columnNumber: 15
						}, this),
						[
							1,
							3,
							5,
							7,
							9,
							11
						].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
							y: i * 36 / 13,
							width: "60",
							height: 36 / 13,
							fill: "#FFFFFF"
						}, i, false, {
							fileName: _jsxFileName$16,
							lineNumber: 84,
							columnNumber: 17
						}, this)),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
							width: "25",
							height: 252 / 13,
							fill: "#3C3B6E"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 87,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "5",
							cy: "4",
							r: "1",
							fill: "#FFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 89,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "10",
							cy: "4",
							r: "1",
							fill: "#FFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 90,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "15",
							cy: "4",
							r: "1",
							fill: "#FFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 91,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "20",
							cy: "4",
							r: "1",
							fill: "#FFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 92,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "7.5",
							cy: "9.5",
							r: "1",
							fill: "#FFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 93,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "12.5",
							cy: "9.5",
							r: "1",
							fill: "#FFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 94,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "17.5",
							cy: "9.5",
							r: "1",
							fill: "#FFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 95,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "5",
							cy: "15",
							r: "1",
							fill: "#FFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 96,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "10",
							cy: "15",
							r: "1",
							fill: "#FFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 97,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "15",
							cy: "15",
							r: "1",
							fill: "#FFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 98,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
							cx: "20",
							cy: "15",
							r: "1",
							fill: "#FFF"
						}, void 0, false, {
							fileName: _jsxFileName$16,
							lineNumber: 99,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$16,
					lineNumber: 80,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 76,
				columnNumber: 11
			}, this);
			case "DE": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "12",
						fill: "#000000"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 108,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "12",
						width: "60",
						height: "12",
						fill: "#DD0000"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 109,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "24",
						width: "60",
						height: "12",
						fill: "#FFCE00"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 110,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 107,
				columnNumber: 11
			}, this);
			case "AE":
			case "UAE": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "12",
						fill: "#00732F"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 119,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "12",
						width: "60",
						height: "12",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 120,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "24",
						width: "60",
						height: "12",
						fill: "#000000"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 121,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "15",
						height: "36",
						fill: "#FF0000"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 122,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 118,
				columnNumber: 11
			}, this);
			case "NL": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "12",
						fill: "#AE1C28"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 130,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "12",
						width: "60",
						height: "12",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 131,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "24",
						width: "60",
						height: "12",
						fill: "#21468B"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 132,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 129,
				columnNumber: 11
			}, this);
			case "BE": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "20",
						height: "36",
						fill: "#000000"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 140,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "20",
						width: "20",
						height: "36",
						fill: "#FFD100"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 141,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "40",
						width: "20",
						height: "36",
						fill: "#EF3340"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 142,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 139,
				columnNumber: 11
			}, this);
			case "FR": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "20",
						height: "36",
						fill: "#002654"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 150,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "20",
						width: "20",
						height: "36",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 151,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "40",
						width: "20",
						height: "36",
						fill: "#ED2939"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 152,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 149,
				columnNumber: 11
			}, this);
			case "ES": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "9",
						fill: "#AA151B"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 160,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "9",
						width: "60",
						height: "18",
						fill: "#F1BF00"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 161,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "27",
						width: "60",
						height: "9",
						fill: "#AA151B"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 162,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "16",
						cy: "18",
						r: "4",
						fill: "#AA151B"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 164,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 159,
				columnNumber: 11
			}, this);
			case "IT": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "20",
						height: "36",
						fill: "#008C45"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 172,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "20",
						width: "20",
						height: "36",
						fill: "#F4F5F0"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 173,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "40",
						width: "20",
						height: "36",
						fill: "#CD212A"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 174,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 171,
				columnNumber: 11
			}, this);
			case "CN": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "36",
						fill: "#DE2910"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 182,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
						points: "10,6 12,12 18,12 13,16 15,22 10,18 5,22 7,16 2,12 8,12",
						fill: "#FFDE00"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 184,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "20",
						cy: "5",
						r: "1.5",
						fill: "#FFDE00"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 189,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "24",
						cy: "9",
						r: "1.5",
						fill: "#FFDE00"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 190,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "24",
						cy: "15",
						r: "1.5",
						fill: "#FFDE00"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 191,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "20",
						cy: "19",
						r: "1.5",
						fill: "#FFDE00"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 192,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 181,
				columnNumber: 11
			}, this);
			case "SG": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "18",
						fill: "#EE2536"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 200,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "18",
						width: "60",
						height: "18",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 201,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "12",
						cy: "9",
						r: "6",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 203,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "14",
						cy: "9",
						r: "5",
						fill: "#EE2536"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 204,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "15",
						cy: "6",
						r: "0.8",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 205,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "18",
						cy: "7",
						r: "0.8",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 206,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "18",
						cy: "11",
						r: "0.8",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 207,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "15",
						cy: "12",
						r: "0.8",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 208,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "13.5",
						cy: "9",
						r: "0.8",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 209,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 199,
				columnNumber: 11
			}, this);
			case "IN": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "12",
						fill: "#FF9933"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 217,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "12",
						width: "60",
						height: "12",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 218,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "24",
						width: "60",
						height: "12",
						fill: "#138808"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 219,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "30",
						cy: "18",
						r: "4.5",
						fill: "none",
						stroke: "#000080",
						strokeWidth: "1"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 221,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "30",
						cy: "18",
						r: "1",
						fill: "#000080"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 222,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 216,
				columnNumber: 11
			}, this);
			case "SA": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "36",
						fill: "#006C35"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 230,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "18",
						y: "14",
						width: "24",
						height: "2",
						fill: "#FFFFFF",
						rx: "1"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 232,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "16",
						y: "21",
						width: "28",
						height: "2",
						fill: "#FFFFFF",
						rx: "1"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 233,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
						points: "16,22 14,20 14,24",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 234,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 229,
				columnNumber: 11
			}, this);
			case "QA": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
					width: "60",
					height: "36",
					fill: "#8D1B3D"
				}, void 0, false, {
					fileName: _jsxFileName$16,
					lineNumber: 242,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					d: "M0,0 L18,0 L24,4 L18,8 L24,12 L18,16 L24,20 L18,24 L24,28 L18,32 L24,36 L0,36 Z",
					fill: "#FFFFFF"
				}, void 0, false, {
					fileName: _jsxFileName$16,
					lineNumber: 243,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 241,
				columnNumber: 11
			}, this);
			case "OM": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "12",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 254,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "12",
						width: "60",
						height: "12",
						fill: "#DB161B"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 255,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "24",
						width: "60",
						height: "12",
						fill: "#008000"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 256,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "15",
						height: "36",
						fill: "#DB161B"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 257,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "7",
						cy: "8",
						r: "3",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 258,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 253,
				columnNumber: 11
			}, this);
			case "KW": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "12",
						fill: "#007A3D"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 266,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "12",
						width: "60",
						height: "12",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 267,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "24",
						width: "60",
						height: "12",
						fill: "#CE1126"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 268,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
						points: "0,0 16,12 16,24 0,36",
						fill: "#000000"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 269,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 265,
				columnNumber: 11
			}, this);
			case "BH": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
					width: "60",
					height: "36",
					fill: "#CE1126"
				}, void 0, false, {
					fileName: _jsxFileName$16,
					lineNumber: 277,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					d: "M0,0 L18,0 L24,4.5 L18,9 L24,13.5 L18,18 L24,22.5 L18,27 L24,31.5 L18,36 L0,36 Z",
					fill: "#FFFFFF"
				}, void 0, false, {
					fileName: _jsxFileName$16,
					lineNumber: 278,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 276,
				columnNumber: 11
			}, this);
			case "EG": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "12",
						fill: "#CE1126"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 289,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "12",
						width: "60",
						height: "12",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 290,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "24",
						width: "60",
						height: "12",
						fill: "#000000"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 291,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "30",
						cy: "18",
						r: "3",
						fill: "#C09300"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 293,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 288,
				columnNumber: 11
			}, this);
			case "TR": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "36",
						fill: "#E30A17"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 301,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "24",
						cy: "18",
						r: "9",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 302,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "26.5",
						cy: "18",
						r: "7.2",
						fill: "#E30A17"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 303,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
						points: "34,18 37,16 36,19.5 39,21 35.5,21.5 34,25 33,21.5 29.5,21 32.5,19.5 31.5,16",
						fill: "#FFFFFF",
						transform: "scale(0.7) translate(14, 5)"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 304,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 300,
				columnNumber: 11
			}, this);
			case "LK": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "36",
						fill: "#FFBE29"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 316,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "4",
						y: "4",
						width: "8",
						height: "28",
						fill: "#005A36"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 317,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "14",
						y: "4",
						width: "8",
						height: "28",
						fill: "#EB7B11"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 318,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "24",
						y: "4",
						width: "32",
						height: "28",
						fill: "#8D153A"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 319,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "40",
						cy: "18",
						r: "5",
						fill: "#FFBE29"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 320,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 315,
				columnNumber: 11
			}, this);
			case "BD": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
					width: "60",
					height: "36",
					fill: "#006A4E"
				}, void 0, false, {
					fileName: _jsxFileName$16,
					lineNumber: 328,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
					cx: "27",
					cy: "18",
					r: "10",
					fill: "#F42A41"
				}, void 0, false, {
					fileName: _jsxFileName$16,
					lineNumber: 329,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 327,
				columnNumber: 11
			}, this);
			case "KR": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "36",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 337,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "30",
						cy: "18",
						r: "8",
						fill: "#CD2E3A"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 339,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M22,18 A8,8 0 0,0 38,18 A4,4 0 0,0 30,18 A4,4 0 0,1 22,18 Z",
						fill: "#0047A0"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 340,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "12",
						y: "7",
						width: "6",
						height: "1.5",
						fill: "#000000",
						transform: "rotate(-30 15 8)"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 342,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "42",
						y: "7",
						width: "6",
						height: "1.5",
						fill: "#000000",
						transform: "rotate(30 45 8)"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 343,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "12",
						y: "27",
						width: "6",
						height: "1.5",
						fill: "#000000",
						transform: "rotate(30 15 28)"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 344,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "42",
						y: "27",
						width: "6",
						height: "1.5",
						fill: "#000000",
						transform: "rotate(-30 45 28)"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 352,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 336,
				columnNumber: 11
			}, this);
			case "JP": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
					width: "60",
					height: "36",
					fill: "#FFFFFF"
				}, void 0, false, {
					fileName: _jsxFileName$16,
					lineNumber: 367,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
					cx: "30",
					cy: "18",
					r: "10.8",
					fill: "#BC002D"
				}, void 0, false, {
					fileName: _jsxFileName$16,
					lineNumber: 368,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 366,
				columnNumber: 11
			}, this);
			case "AU": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "36",
						fill: "#00008B"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 376,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "30",
						height: "18",
						fill: "#012169"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 378,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M0,0 L30,18 M30,0 L0,18",
						stroke: "#FFFFFF",
						strokeWidth: "3"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 379,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M0,0 L30,18 M30,0 L0,18",
						stroke: "#C8102E",
						strokeWidth: "1.8"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 380,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M15,0 v18 M0,9 h30",
						stroke: "#FFFFFF",
						strokeWidth: "5"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 381,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M15,0 v18 M0,9 h30",
						stroke: "#C8102E",
						strokeWidth: "3"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 382,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
						points: "15,24 16,27 19,27 16.5,29 17.5,32 15,30 12.5,32 13.5,29 11,27 14,27",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 384,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "45",
						cy: "8",
						r: "1.5",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 388,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "52",
						cy: "14",
						r: "1.5",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 389,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "42",
						cy: "18",
						r: "1.5",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 390,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "48",
						cy: "27",
						r: "1.5",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 391,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 375,
				columnNumber: 11
			}, this);
			case "ZA": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "18",
						fill: "#E03C31"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 399,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						y: "18",
						width: "60",
						height: "18",
						fill: "#001489"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 400,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
						points: "0,0 24,18 0,36",
						fill: "#000000"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 402,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
						points: "0,0 4,0 28,18 4,36 0,36 22,18",
						fill: "#FFB81C"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 403,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
						points: "0,0 26,18 60,18 60,12 28,12 12,0",
						fill: "#007749"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 404,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
						points: "0,36 26,18 60,18 60,24 28,24 12,36",
						fill: "#007749"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 405,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 398,
				columnNumber: 11
			}, this);
			case "BR": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "36",
						fill: "#009739"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 413,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
						points: "30,4 54,18 30,32 6,18",
						fill: "#FEDD00"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 414,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "30",
						cy: "18",
						r: "7",
						fill: "#012169"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 415,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M24,18 A7,7 0 0,0 36,18",
						stroke: "#FFFFFF",
						strokeWidth: "1",
						fill: "none"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 416,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 412,
				columnNumber: 11
			}, this);
			case "CA": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "15",
						height: "36",
						fill: "#FF0000"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 424,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "15",
						width: "30",
						height: "36",
						fill: "#FFFFFF"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 425,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "45",
						width: "15",
						height: "36",
						fill: "#FF0000"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 426,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
						points: "30,8 32,15 37,13 34,19 39,21 34,24 35,27 30,25 25,27 26,24 21,21 26,19 23,13 28,15",
						fill: "#FF0000"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 428,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 423,
				columnNumber: 11
			}, this);
			default: return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 60 36",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						width: "60",
						height: "36",
						fill: "#0FA3B1"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 439,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "30",
						cy: "18",
						r: "10",
						fill: "#E8F8F9",
						stroke: "#FFFFFF",
						strokeWidth: "1.5"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 440,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ellipse", {
						cx: "30",
						cy: "18",
						rx: "5",
						ry: "10",
						fill: "none",
						stroke: "#0FA3B1",
						strokeWidth: "1"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 441,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
						x1: "20",
						y1: "18",
						x2: "40",
						y2: "18",
						stroke: "#0FA3B1",
						strokeWidth: "1"
					}, void 0, false, {
						fileName: _jsxFileName$16,
						lineNumber: 442,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$16,
				lineNumber: 438,
				columnNumber: 11
			}, this);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: `inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[3px] border border-slate-300/80 shadow-2xs transition-transform hover:scale-110 select-none ${dimensions} ${className}`,
		title: title || code,
		children: renderFlagContent()
	}, void 0, false, {
		fileName: _jsxFileName$16,
		lineNumber: 449,
		columnNumber: 5
	}, this);
});
var _jsxFileName$15 = "/app/applet/src/components/nashmia/common/PortFlagDisplay.tsx";
var PortFlagDisplay = (0, import_react.memo)(function PortFlagDisplay({ portCode, portName, countryHint, className = "", align = "left", showName = true, size = "md" }) {
	const meta = getPortCountryMeta(portCode, portName, countryHint);
	const code = (portCode || "PORT").trim().toUpperCase();
	const name = portName || meta.countryName || "";
	const isRight = align === "right";
	const isCenter = align === "center";
	const flagSize = size === "sm" ? "xs" : size === "lg" ? "md" : "sm";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: `min-w-0 flex flex-col ${isRight ? "items-end text-right" : isCenter ? "items-center text-center" : "items-start text-left"} ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: `inline-flex items-center gap-1.5 font-bold text-slate-900 tracking-tight ${size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-[13.5px]"}`,
			children: [
				!isRight && /* @__PURE__ */ (void 0)(CountryFlagSvg, {
					countryCode: meta.countryCode,
					size: flagSize,
					title: `${meta.countryName} (${meta.countryCode})`
				}, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 50,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "font-bold tracking-tight text-slate-900",
					children: code
				}, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 57,
					columnNumber: 9
				}, this),
				isRight && /* @__PURE__ */ (void 0)(CountryFlagSvg, {
					countryCode: meta.countryCode,
					size: flagSize,
					title: `${meta.countryName} (${meta.countryCode})`
				}, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 60,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$15,
			lineNumber: 44,
			columnNumber: 7
		}, this), showName && name && /* @__PURE__ */ (void 0)("p", {
			className: `line-clamp-1 text-slate-500 font-medium ${size === "sm" ? "text-[10.5px]" : "text-[11.5px]"}`,
			title: `${name} · ${meta.countryName}`,
			children: name
		}, void 0, false, {
			fileName: _jsxFileName$15,
			lineNumber: 70,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$15,
		lineNumber: 34,
		columnNumber: 5
	}, this);
});
var _jsxFileName$14 = "/app/applet/src/components/nashmia/requests/RequestsCardGrid.tsx";
function getPriorityBadge(priority) {
	switch (priority) {
		case "Urgent": return {
			label: "URGENT",
			classes: "border-rose-300 bg-rose-500 text-white font-bold animate-pulse"
		};
		case "High": return {
			label: "High Priority",
			classes: "border-amber-200 bg-amber-100 text-amber-900 font-semibold"
		};
		case "Normal": return {
			label: "Normal",
			classes: "border-slate-200 bg-slate-100 text-slate-700 font-medium"
		};
		case "Flexible": return {
			label: "Flexible Schedule",
			classes: "border-teal-200 bg-teal-50 text-teal-800 font-medium"
		};
	}
}
var RequestsCardGrid = (0, import_react.memo)(function RequestsCardGrid({ requests, forwarderRequests, onSelectRequest, onApproveRequest, onRequestRevision, onComposeEmail, onRequestQuotes, onViewQuotations, onOpenAwardDrawer }) {
	const allForwarderRequests = (0, import_react.useMemo)(() => {
		const fromProps = forwarderRequests || [];
		const fromLocal = getLocalForwarderRequests();
		const map = /* @__PURE__ */ new Map();
		for (const r of fromLocal) if (r?.id) map.set(r.id, r);
		for (const r of fromProps) if (r?.id) map.set(r.id, r);
		const res = Array.from(map.values());
		if (res.length > 0) logQuotationResponseDiagnostics(res, "RequestsCardGrid");
		return res;
	}, [forwarderRequests]);
	if (requests.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid size-12 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-400 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-6" }, void 0, false, {
					fileName: _jsxFileName$14,
					lineNumber: 99,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$14,
				lineNumber: 98,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "mt-4 text-[16px] font-bold text-slate-900",
				children: "No Booking Requests Found"
			}, void 0, false, {
				fileName: _jsxFileName$14,
				lineNumber: 101,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1.5 max-w-md text-[13px] text-slate-500",
				children: "Try adjusting your search query, status tabs, priority filters, or shipping line selections."
			}, void 0, false, {
				fileName: _jsxFileName$14,
				lineNumber: 102,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$14,
		lineNumber: 97,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-cols-1 gap-4.5 md:grid-cols-2 xl:grid-cols-3",
		children: requests.map((req) => {
			const priorityMeta = getPriorityBadge(req.priority);
			const fwdSummary = getBookingForwarderSummary(req.movementNumber || req.bookingReference || req.id, allForwarderRequests);
			const isConfirmed = req.status === "Approved" || req.confirmationStatus === "CONFIRMED";
			const isAwarded = !isConfirmed && (req.status === "Line Allocation" || fwdSummary.overallStatus === "AWARDED");
			const isOffers = !isConfirmed && !isAwarded && (fwdSummary.overallStatus === "OFFERS_RECEIVED" || req.status === "Rate Verification");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[#0FA3B1]/50 hover:shadow-[0_8px_24px_-4px_rgba(15,163,177,0.12)]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between gap-2 border-b border-slate-100 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-[13.5px] font-bold tracking-tight text-slate-900",
								children: req.movementNumber || req.reference
							}, void 0, false, {
								fileName: _jsxFileName$14,
								lineNumber: 137,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: `rounded-md px-2 py-0.5 text-[10.5px] uppercase ${priorityMeta.classes}`,
								children: priorityMeta.label
							}, void 0, false, {
								fileName: _jsxFileName$14,
								lineNumber: 140,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$14,
							lineNumber: 136,
							columnNumber: 17
						}, this), isConfirmed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-3 text-emerald-600" }, void 0, false, {
								fileName: _jsxFileName$14,
								lineNumber: 149,
								columnNumber: 21
							}, this), "CONFIRMED"]
						}, void 0, true, {
							fileName: _jsxFileName$14,
							lineNumber: 148,
							columnNumber: 19
						}, this) : isAwarded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-0.5 text-[11px] font-bold text-cyan-800",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-cyan-500" }, void 0, false, {
								fileName: _jsxFileName$14,
								lineNumber: 154,
								columnNumber: 21
							}, this), "AWARDED"]
						}, void 0, true, {
							fileName: _jsxFileName$14,
							lineNumber: 153,
							columnNumber: 19
						}, this) : isOffers ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold text-indigo-800",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3 text-indigo-600" }, void 0, false, {
								fileName: _jsxFileName$14,
								lineNumber: 159,
								columnNumber: 21
							}, this), "OFFERS RECEIVED"]
						}, void 0, true, {
							fileName: _jsxFileName$14,
							lineNumber: 158,
							columnNumber: 19
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700",
							children: req.status
						}, void 0, false, {
							fileName: _jsxFileName$14,
							lineNumber: 163,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$14,
						lineNumber: 135,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3.5 rounded-xl border border-slate-200/90 bg-white p-3 shadow-2xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-[13px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PortFlagDisplay, {
									portCode: req.polCode,
									portName: req.polName,
									align: "left",
									size: "md",
									className: "max-w-[42%]"
								}, void 0, false, {
									fileName: _jsxFileName$14,
									lineNumber: 173,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-col items-center px-2 text-[#0FA3B1] shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px w-5 bg-[#0FA3B1]/40" }, void 0, false, {
												fileName: _jsxFileName$14,
												lineNumber: 183,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$14,
												lineNumber: 184,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px w-5 bg-[#0FA3B1]/40" }, void 0, false, {
												fileName: _jsxFileName$14,
												lineNumber: 185,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$14,
										lineNumber: 182,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[10px] font-medium text-slate-500",
										children: "Ocean Freight"
									}, void 0, false, {
										fileName: _jsxFileName$14,
										lineNumber: 187,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 181,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PortFlagDisplay, {
									portCode: req.podCode,
									portName: req.podName,
									align: "right",
									size: "md",
									className: "max-w-[42%]"
								}, void 0, false, {
									fileName: _jsxFileName$14,
									lineNumber: 190,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$14,
							lineNumber: 172,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2 text-[11.5px] text-slate-600",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-3 text-slate-400" }, void 0, false, {
									fileName: _jsxFileName$14,
									lineNumber: 202,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["ETD: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
									className: "text-slate-800",
									children: req.requestedEtd
								}, void 0, false, {
									fileName: _jsxFileName$14,
									lineNumber: 204,
									columnNumber: 28
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 203,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$14,
								lineNumber: 201,
								columnNumber: 19
							}, this), req.estimatedEta && /* @__PURE__ */ (void 0)("div", { children: /* @__PURE__ */ (void 0)("span", { children: ["ETA: ", /* @__PURE__ */ (void 0)("strong", {
								className: "text-slate-800",
								children: req.estimatedEta
							}, void 0, false, {
								fileName: _jsxFileName$14,
								lineNumber: 210,
								columnNumber: 30
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$14,
								lineNumber: 209,
								columnNumber: 23
							}, this) }, void 0, false, {
								fileName: _jsxFileName$14,
								lineNumber: 208,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$14,
							lineNumber: 200,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$14,
						lineNumber: 170,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3.5 space-y-1.5 text-[12.5px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11.5px] font-medium text-slate-400",
									children: "Buyer:"
								}, void 0, false, {
									fileName: _jsxFileName$14,
									lineNumber: 220,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-semibold text-slate-800 text-right truncate",
									children: req.buyerName
								}, void 0, false, {
									fileName: _jsxFileName$14,
									lineNumber: 221,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$14,
								lineNumber: 219,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11.5px] font-medium text-slate-400",
									children: "Supplier / Load Point:"
								}, void 0, false, {
									fileName: _jsxFileName$14,
									lineNumber: 226,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-medium text-slate-700 text-right truncate",
									title: `${req.supplierName} (${req.supplierLoadPoint || req.supplierCity || req.polName})`,
									children: [req.supplierName, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-normal ml-1",
										children: ["· ", req.supplierLoadPoint || req.supplierCity || req.polName]
									}, void 0, true, {
										fileName: _jsxFileName$14,
										lineNumber: 234,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 229,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$14,
								lineNumber: 225,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start justify-between gap-2 pt-1 border-t border-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11.5px] font-medium text-slate-400",
									children: "Container Type & Qty:"
								}, void 0, false, {
									fileName: _jsxFileName$14,
									lineNumber: 240,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-semibold text-slate-900",
									children: [
										req.containerCount,
										"x ",
										req.containerSize,
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-normal text-slate-500",
											children: [
												"(",
												req.containerType,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName$14,
											lineNumber: 245,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 243,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$14,
								lineNumber: 239,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$14,
						lineNumber: 218,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3 rounded-xl border border-slate-200 bg-white p-3 space-y-2 shadow-2xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5 font-semibold text-slate-900",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$14,
									lineNumber: 254,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [fwdSummary.totalForwarders, " Forwarders"] }, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 255,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$14,
								lineNumber: 253,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2 text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md",
									children: [fwdSummary.quotationsReceived, " Received"]
								}, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 258,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-amber-700 font-medium bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md",
									children: [fwdSummary.pendingReplies, " Pending"]
								}, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 261,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$14,
								lineNumber: 257,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$14,
							lineNumber: 252,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between border-t border-slate-100 pt-1.5 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-500 text-[11px]",
								children: fwdSummary.bestRate ? "Best Quotation Rate:" : "Target Freight:"
							}, void 0, false, {
								fileName: _jsxFileName$14,
								lineNumber: 268,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-bold text-slate-900 text-[13px]",
									children: [
										"$",
										(fwdSummary.bestRate || req.totalFreight).toLocaleString(),
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-[10.5px] font-normal text-slate-500",
											children: fwdSummary.bestRateCurrency || req.currency
										}, void 0, false, {
											fileName: _jsxFileName$14,
											lineNumber: 274,
											columnNumber: 23
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 272,
									columnNumber: 21
								}, this), fwdSummary.bestRateForwarder && /* @__PURE__ */ (void 0)("span", {
									className: "block text-[10px] text-emerald-700 font-medium",
									children: ["via ", fwdSummary.bestRateForwarder]
								}, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 279,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$14,
								lineNumber: 271,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$14,
							lineNumber: 267,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$14,
						lineNumber: 251,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-2.5",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: (e) => {
								e.stopPropagation();
								if (onOpenAwardDrawer) onOpenAwardDrawer(req);
								else if (onViewQuotations) onViewQuotations(req);
							},
							className: `w-full text-left transition-all rounded-lg border px-2.5 py-2 cursor-pointer group/award ${isAwarded && (fwdSummary.awardedForwarder || req.forwarderName) ? "border-cyan-200/90 bg-cyan-50/70 hover:bg-cyan-100/60 hover:border-cyan-300 text-cyan-950 shadow-2xs" : fwdSummary.quotationsReceived > 0 ? "border-emerald-200/90 bg-emerald-50/50 hover:bg-emerald-100/60 hover:border-emerald-300 text-slate-800 shadow-2xs" : "border-slate-200 bg-slate-50/70 hover:bg-slate-100/80 text-slate-600"}`,
							title: "Click to open Award Status & Fast Quotes Drawer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between text-[11.5px]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-semibold text-slate-600 flex items-center gap-1",
									children: [isAwarded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, { className: "size-3 text-cyan-700" }, void 0, false, {
										fileName: _jsxFileName$14,
										lineNumber: 311,
										columnNumber: 25
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$14,
										lineNumber: 313,
										columnNumber: 25
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Award Status:" }, void 0, false, {
										fileName: _jsxFileName$14,
										lineNumber: 315,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 309,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-bold text-[11px]",
										children: isAwarded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-cyan-900",
											children: [
												"AWARDED (",
												fwdSummary.awardedForwarder || req.forwarderName,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName$14,
											lineNumber: 321,
											columnNumber: 27
										}, this) : fwdSummary.quotationsReceived > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-emerald-800",
											children: [
												fwdSummary.quotationsReceived,
												" Quote",
												fwdSummary.quotationsReceived > 1 ? "s" : "",
												" Received"
											]
										}, void 0, true, {
											fileName: _jsxFileName$14,
											lineNumber: 325,
											columnNumber: 27
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-slate-500 font-normal",
											children: "Awaiting Quotations"
										}, void 0, false, {
											fileName: _jsxFileName$14,
											lineNumber: 330,
											columnNumber: 27
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$14,
										lineNumber: 319,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "size-3 text-slate-400 group-hover/award:text-slate-700 group-hover/award:translate-x-0.5 transition-transform" }, void 0, false, {
										fileName: _jsxFileName$14,
										lineNumber: 333,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 318,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$14,
								lineNumber: 308,
								columnNumber: 19
							}, this), (fwdSummary.bestRate || fwdSummary.bestEtd || fwdSummary.quotationsReceived > 0) && /* @__PURE__ */ (void 0)("div", {
								className: "mt-1 pt-1 border-t border-slate-200/60 flex items-center justify-between text-[11px]",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-1 text-slate-700 font-mono",
									children: [
										/* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] text-slate-500 font-sans",
											children: "Rate:"
										}, void 0, false, {
											fileName: _jsxFileName$14,
											lineNumber: 343,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (void 0)("strong", {
											className: "text-slate-900",
											children: ["$", (fwdSummary.bestRate || req.totalFreight).toLocaleString()]
										}, void 0, true, {
											fileName: _jsxFileName$14,
											lineNumber: 344,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "text-[9.5px] text-slate-400 font-sans",
											children: ["/", fwdSummary.bestRateCurrency || req.currency || "cntr"]
										}, void 0, true, {
											fileName: _jsxFileName$14,
											lineNumber: 347,
											columnNumber: 25
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 342,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-1 text-teal-800 font-mono text-[10.5px]",
									children: [/* @__PURE__ */ (void 0)(Calendar, { className: "size-3 text-teal-600" }, void 0, false, {
										fileName: _jsxFileName$14,
										lineNumber: 353,
										columnNumber: 25
									}, this), /* @__PURE__ */ (void 0)("span", { children: ["ETD: ", fwdSummary.bestEtd || req.requestedEtd || "Prompt"] }, void 0, true, {
										fileName: _jsxFileName$14,
										lineNumber: 354,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$14,
									lineNumber: 352,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$14,
								lineNumber: 341,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$14,
							lineNumber: 289,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$14,
						lineNumber: 288,
						columnNumber: 15
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$14,
					lineNumber: 133,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4 flex items-center gap-2 border-t border-slate-100 pt-3",
					children: [(onViewQuotations || onRequestQuotes) && /* @__PURE__ */ (void 0)(Button, {
						type: "button",
						size: "sm",
						onClick: () => onViewQuotations ? onViewQuotations(req) : onRequestQuotes?.(req),
						className: "flex-1 h-8.5 gap-1.5 bg-[#0FA3B1] hover:bg-[#0D919E] text-white text-xs font-bold shadow-2xs cursor-pointer",
						children: [/* @__PURE__ */ (void 0)(Users, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$14,
							lineNumber: 373,
							columnNumber: 19
						}, this), /* @__PURE__ */ (void 0)("span", { children: [
							"View Quotations (",
							fwdSummary.quotationsReceived,
							")"
						] }, void 0, true, {
							fileName: _jsxFileName$14,
							lineNumber: 374,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$14,
						lineNumber: 365,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: () => onSelectRequest(req),
						className: "h-8.5 px-2.5 text-xs text-slate-700 border-slate-200 hover:bg-slate-50",
						title: "View full booking details",
						children: ["Details", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "size-3.5 ml-0.5" }, void 0, false, {
							fileName: _jsxFileName$14,
							lineNumber: 387,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$14,
						lineNumber: 378,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$14,
					lineNumber: 363,
					columnNumber: 13
				}, this)]
			}, req.id, true, {
				fileName: _jsxFileName$14,
				lineNumber: 129,
				columnNumber: 11
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName$14,
		lineNumber: 111,
		columnNumber: 5
	}, this);
});
var _jsxFileName$13 = "/app/applet/src/components/nashmia/requests/RequestsTableView.tsx";
var RequestsTableView = (0, import_react.memo)(function RequestsTableView({ requests, forwarderRequests, selectedIds, onToggleSelect, onToggleSelectAll, onSelectRequest, onApproveRequest, onRequestRevision, onComposeEmail, onRequestQuotes, onViewQuotations, onOpenAwardDrawer }) {
	const isAllSelected = requests.length > 0 && selectedIds.length === requests.length;
	const localList = (0, import_react.useMemo)(() => getLocalForwarderRequests(), []);
	const allForwarderRequests = forwarderRequests && forwarderRequests.length > 0 ? forwarderRequests : localList;
	if (requests.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-12 text-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-[14px] font-medium text-slate-500",
			children: "No requests match current table filters."
		}, void 0, false, {
			fileName: _jsxFileName$13,
			lineNumber: 60,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$13,
		lineNumber: 59,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "md:hidden divide-y divide-slate-100",
			children: requests.map((req) => {
				const isSelected = selectedIds.includes(req.id);
				const fwdSummary = getBookingForwarderSummary(req.movementNumber || req.bookingReference || req.id, allForwarderRequests);
				const isConfirmed = req.status === "Approved" || req.confirmationStatus === "CONFIRMED";
				const isAwarded = !isConfirmed && (req.status === "Line Allocation" || fwdSummary.overallStatus === "AWARDED");
				!isConfirmed && !isAwarded && (fwdSummary.overallStatus === "OFFERS_RECEIVED" || req.status);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					onClick: () => onSelectRequest(req),
					className: `p-4 space-y-3 cursor-pointer transition-colors active:bg-slate-50 ${isSelected ? "bg-[#F0F9FA]" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2.5 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "checkbox",
									checked: isSelected,
									onChange: (e) => {
										e.stopPropagation();
										onToggleSelect(req.id);
									},
									className: "rounded border-slate-300 text-[#0FA3B1] focus:ring-[#0FA3B1] size-4 shrink-0",
									"aria-label": `Select request ${req.reference}`
								}, void 0, false, {
									fileName: _jsxFileName$13,
									lineNumber: 97,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "min-w-0",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1.5 flex-wrap",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-mono font-bold text-sm text-[#0FA3B1]",
												children: req.movementNumber || req.reference
											}, void 0, false, {
												fileName: _jsxFileName$13,
												lineNumber: 109,
												columnNumber: 23
											}, this),
											req.bookingReference && req.bookingReference !== req.movementNumber && /* @__PURE__ */ (void 0)("span", {
												className: "font-mono text-xs text-slate-400",
												children: req.bookingReference
											}, void 0, false, {
												fileName: _jsxFileName$13,
												lineNumber: 113,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: `rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${req.priority === "Urgent" ? "bg-rose-100 text-rose-800" : req.priority === "High" ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-700"}`,
												children: req.priority
											}, void 0, false, {
												fileName: _jsxFileName$13,
												lineNumber: 117,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$13,
										lineNumber: 108,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$13,
									lineNumber: 107,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$13,
								lineNumber: 96,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "shrink-0 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200",
								children: fwdSummary.overallStatus !== "NO_FORWARDERS" ? fwdSummary.overallStatus.replace("_", " ") : req.status
							}, void 0, false, {
								fileName: _jsxFileName$13,
								lineNumber: 133,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$13,
							lineNumber: 95,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-xl bg-white p-3 space-y-2 border border-slate-200/90 shadow-2xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between font-semibold text-xs text-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
											countryCode: getPortCountryMeta(req.polCode, req.polName).countryCode,
											size: "xs",
											title: getPortCountryMeta(req.polCode, req.polName).countryName
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 144,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-bold text-slate-900",
											children: req.polCode
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 149,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-slate-400",
											children: "→"
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 150,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
											countryCode: getPortCountryMeta(req.podCode, req.podName).countryCode,
											size: "xs",
											title: getPortCountryMeta(req.podCode, req.podName).countryName
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 151,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-bold text-slate-900",
											children: req.podCode
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 156,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$13,
									lineNumber: 143,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11px] font-normal text-slate-500",
									children: ["ETD ", req.requestedEtd]
								}, void 0, true, {
									fileName: _jsxFileName$13,
									lineNumber: 158,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$13,
								lineNumber: 142,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-xs text-slate-600 space-y-1 pt-1.5 border-t border-slate-100",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-slate-400",
											children: "Buyer:"
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 164,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-semibold text-slate-900 truncate",
											children: req.buyerName
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 165,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$13,
										lineNumber: 163,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-slate-400",
											children: "Supplier / Load Point:"
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 168,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-medium text-slate-700 truncate",
											title: `${req.supplierName} (${req.supplierLoadPoint || req.supplierCity || req.polName})`,
											children: [req.supplierName, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-slate-400 font-normal ml-1",
												children: ["· ", req.supplierLoadPoint || req.supplierCity || req.polName]
											}, void 0, true, {
												fileName: _jsxFileName$13,
												lineNumber: 174,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$13,
											lineNumber: 169,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$13,
										lineNumber: 167,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-start justify-between gap-2 pt-1 border-t border-slate-100",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-slate-400",
											children: "Container Type & Qty:"
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 180,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-semibold text-slate-900",
											children: [
												req.containerCount,
												"x ",
												req.containerSize,
												" ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-slate-500 font-normal",
													children: [
														"(",
														req.containerType,
														")"
													]
												}, void 0, true, {
													fileName: _jsxFileName$13,
													lineNumber: 183,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$13,
											lineNumber: 181,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$13,
										lineNumber: 179,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$13,
								lineNumber: 162,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$13,
							lineNumber: 141,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-xs rounded-lg bg-white p-2.5 border border-slate-200 shadow-2xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5 text-slate-700",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$13,
									lineNumber: 192,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: fwdSummary.totalForwarders }, void 0, false, {
									fileName: _jsxFileName$13,
									lineNumber: 194,
									columnNumber: 21
								}, this), " Forwarders"] }, void 0, true, {
									fileName: _jsxFileName$13,
									lineNumber: 193,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$13,
								lineNumber: 191,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5 text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded font-bold",
									children: [fwdSummary.quotationsReceived, " Received"]
								}, void 0, true, {
									fileName: _jsxFileName$13,
									lineNumber: 198,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded font-medium",
									children: [fwdSummary.pendingReplies, " Pending"]
								}, void 0, true, {
									fileName: _jsxFileName$13,
									lineNumber: 201,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$13,
								lineNumber: 197,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$13,
							lineNumber: 190,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-[11.5px] px-2.5 py-1.5 rounded-lg border bg-white border-slate-200 shadow-2xs flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-500 font-medium",
								children: "Award Status:"
							}, void 0, false, {
								fileName: _jsxFileName$13,
								lineNumber: 209,
								columnNumber: 17
							}, this), isAwarded && (fwdSummary.awardedForwarder || req.forwarderName) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-bold text-cyan-900",
								children: [
									"AWARDED (",
									fwdSummary.awardedForwarder || req.forwarderName,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$13,
								lineNumber: 211,
								columnNumber: 19
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-700 font-medium",
								children: fwdSummary.quotationsReceived > 0 ? "Awaiting Decision" : "Awaiting Quotations"
							}, void 0, false, {
								fileName: _jsxFileName$13,
								lineNumber: 215,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$13,
							lineNumber: 208,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-end gap-2 pt-2 border-t border-slate-100",
							onClick: (e) => e.stopPropagation(),
							children: [(onViewQuotations || onRequestQuotes) && /* @__PURE__ */ (void 0)(Button, {
								type: "button",
								size: "sm",
								onClick: () => onViewQuotations ? onViewQuotations(req) : onRequestQuotes?.(req),
								className: "h-8 bg-[#0FA3B1] hover:bg-[#0D919E] px-3 text-xs font-semibold text-white gap-1",
								children: [
									/* @__PURE__ */ (void 0)(Users, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$13,
										lineNumber: 237,
										columnNumber: 21
									}, this),
									"View Quotations (",
									fwdSummary.quotationsReceived,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$13,
								lineNumber: 229,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								onClick: () => onSelectRequest(req),
								className: "h-8 border-slate-200 px-3 text-xs text-slate-700 hover:bg-slate-50",
								children: "Details"
							}, void 0, false, {
								fileName: _jsxFileName$13,
								lineNumber: 241,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$13,
							lineNumber: 224,
							columnNumber: 15
						}, this)
					]
				}, req.id, true, {
					fileName: _jsxFileName$13,
					lineNumber: 87,
					columnNumber: 13
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName$13,
			lineNumber: 70,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "hidden md:block overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
				className: "w-full text-left text-[13px]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
					className: "border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-500",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "w-10 px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "checkbox",
								checked: isAllSelected,
								onChange: onToggleSelectAll,
								className: "rounded border-slate-300 text-[#0FA3B1] focus:ring-[#0FA3B1]",
								"aria-label": "Select all requests"
							}, void 0, false, {
								fileName: _jsxFileName$13,
								lineNumber: 262,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 261,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: "Movement Number"
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 270,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: "Buyer"
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 271,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: "Supplier / Load Point"
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 272,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: "Origin → Destination"
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 273,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: "Container Type & Qty"
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 274,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3 text-center",
							children: "Forwarder Quotes"
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 275,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: "Overall Booking Status"
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 276,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: "Award Status"
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 277,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3 text-right",
							children: "Actions"
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 278,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$13,
						lineNumber: 260,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 259,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
					className: "divide-y divide-slate-100",
					children: requests.map((req) => {
						const isSelected = selectedIds.includes(req.id);
						const fwdSummary = getBookingForwarderSummary(req.movementNumber || req.bookingReference || req.id, allForwarderRequests);
						const isConfirmed = req.status === "Approved" || req.confirmationStatus === "CONFIRMED";
						const isAwarded = !isConfirmed && (req.status === "Line Allocation" || fwdSummary.overallStatus === "AWARDED");
						const isOffers = !isConfirmed && !isAwarded && (fwdSummary.overallStatus === "OFFERS_RECEIVED" || req.status === "Rate Verification");
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
							className: `transition-colors hover:bg-slate-50/80 ${isSelected ? "bg-[#F0F9FA]" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "checkbox",
										checked: isSelected,
										onChange: () => onToggleSelect(req.id),
										className: "rounded border-slate-300 text-[#0FA3B1] focus:ring-[#0FA3B1]",
										"aria-label": `Select request ${req.reference}`
									}, void 0, false, {
										fileName: _jsxFileName$13,
										lineNumber: 309,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$13,
									lineNumber: 308,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => onSelectRequest(req),
										className: "text-left font-mono font-bold text-[#0FA3B1] hover:underline block",
										children: req.movementNumber || req.reference
									}, void 0, false, {
										fileName: _jsxFileName$13,
										lineNumber: 320,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-0.5 flex items-center gap-1.5 flex-wrap",
										children: [req.bookingReference && req.bookingReference !== req.movementNumber && /* @__PURE__ */ (void 0)("span", {
											className: "font-mono text-[11px] text-slate-500",
											children: req.bookingReference
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 329,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: `rounded px-1.5 py-0.2 text-[10px] font-bold uppercase ${req.priority === "Urgent" ? "bg-rose-100 text-rose-800" : req.priority === "High" ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-700"}`,
											children: req.priority
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 333,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$13,
										lineNumber: 327,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$13,
									lineNumber: 319,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5 max-w-[170px]",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-semibold text-slate-900 line-clamp-1",
										children: req.buyerName
									}, void 0, false, {
										fileName: _jsxFileName$13,
										lineNumber: 349,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11px] text-slate-400 line-clamp-1",
										children: "Consignee"
									}, void 0, false, {
										fileName: _jsxFileName$13,
										lineNumber: 350,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$13,
									lineNumber: 348,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5 max-w-[210px]",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-medium text-slate-900 line-clamp-1",
										children: req.supplierName
									}, void 0, false, {
										fileName: _jsxFileName$13,
										lineNumber: 355,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11.5px] text-slate-500 line-clamp-1",
										title: `${req.supplierLoadPoint || req.supplierCity || req.polName}`,
										children: [
											"Load Point:",
											" ",
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-medium text-slate-700",
												children: req.supplierLoadPoint || req.supplierCity || req.polName
											}, void 0, false, {
												fileName: _jsxFileName$13,
												lineNumber: 361,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$13,
										lineNumber: 356,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$13,
									lineNumber: 354,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5 whitespace-nowrap",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1.5 font-semibold text-slate-800",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
												countryCode: getPortCountryMeta(req.polCode, req.polName).countryCode,
												size: "xs",
												title: getPortCountryMeta(req.polCode, req.polName).countryName
											}, void 0, false, {
												fileName: _jsxFileName$13,
												lineNumber: 370,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-slate-900",
												children: req.polCode
											}, void 0, false, {
												fileName: _jsxFileName$13,
												lineNumber: 375,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-slate-400",
												children: "→"
											}, void 0, false, {
												fileName: _jsxFileName$13,
												lineNumber: 376,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
												countryCode: getPortCountryMeta(req.podCode, req.podName).countryCode,
												size: "xs",
												title: getPortCountryMeta(req.podCode, req.podName).countryName
											}, void 0, false, {
												fileName: _jsxFileName$13,
												lineNumber: 377,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-slate-900",
												children: req.podCode
											}, void 0, false, {
												fileName: _jsxFileName$13,
												lineNumber: 382,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$13,
										lineNumber: 369,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11px] text-slate-500 line-clamp-1 max-w-[200px]",
										title: `${req.polName} to ${req.podName}`,
										children: [
											req.polName || req.polCode,
											" · ETD ",
											req.requestedEtd
										]
									}, void 0, true, {
										fileName: _jsxFileName$13,
										lineNumber: 384,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$13,
									lineNumber: 368,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5 whitespace-nowrap",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-bold text-slate-900",
										children: [
											req.containerCount,
											"x ",
											req.containerSize
										]
									}, void 0, true, {
										fileName: _jsxFileName$13,
										lineNumber: 394,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11.5px] text-slate-500",
										children: req.containerType || "High Cube Dry"
									}, void 0, false, {
										fileName: _jsxFileName$13,
										lineNumber: 397,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$13,
									lineNumber: 393,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5 text-center whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "inline-flex flex-col items-center",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1 font-semibold text-xs text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
													fileName: _jsxFileName$13,
													lineNumber: 406,
													columnNumber: 25
												}, this),
												fwdSummary.totalForwarders,
												" Forwarders"
											]
										}, void 0, true, {
											fileName: _jsxFileName$13,
											lineNumber: 405,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mt-1 flex items-center gap-1.5 text-[10.5px]",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded",
												children: [fwdSummary.quotationsReceived, " Received"]
											}, void 0, true, {
												fileName: _jsxFileName$13,
												lineNumber: 410,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-amber-700 font-medium bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded",
												children: [fwdSummary.pendingReplies, " Pending"]
											}, void 0, true, {
												fileName: _jsxFileName$13,
												lineNumber: 413,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$13,
											lineNumber: 409,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$13,
										lineNumber: 404,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$13,
									lineNumber: 403,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5 whitespace-nowrap",
									children: (() => {
										if (isConfirmed) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-3 text-emerald-600" }, void 0, false, {
												fileName: _jsxFileName$13,
												lineNumber: 426,
												columnNumber: 29
											}, this), "CONFIRMED"]
										}, void 0, true, {
											fileName: _jsxFileName$13,
											lineNumber: 425,
											columnNumber: 27
										}, this);
										if (req.confirmationStatus === "PENDING" || isAwarded) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-0.5 text-[11px] font-bold text-cyan-800",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-cyan-500" }, void 0, false, {
												fileName: _jsxFileName$13,
												lineNumber: 435,
												columnNumber: 29
											}, this), "PENDING CONFIRMATION"]
										}, void 0, true, {
											fileName: _jsxFileName$13,
											lineNumber: 434,
											columnNumber: 27
										}, this);
										if (isOffers) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold text-indigo-800",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3 text-indigo-600" }, void 0, false, {
												fileName: _jsxFileName$13,
												lineNumber: 444,
												columnNumber: 29
											}, this), "OFFERS RECEIVED"]
										}, void 0, true, {
											fileName: _jsxFileName$13,
											lineNumber: 443,
											columnNumber: 27
										}, this);
										return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700",
											children: req.status
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 451,
											columnNumber: 25
										}, this);
									})()
								}, void 0, false, {
									fileName: _jsxFileName$13,
									lineNumber: 421,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5 whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => {
											if (onOpenAwardDrawer) onOpenAwardDrawer(req);
											else if (onViewQuotations) onViewQuotations(req);
										},
										className: "cursor-pointer hover:opacity-85 transition-opacity text-left",
										title: "Open Award Status & Rates Drawer",
										children: isAwarded && (fwdSummary.awardedForwarder || req.forwarderName) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-0.5 text-[11px] font-bold text-cyan-900 shadow-2xs",
											children: [
												"AWARDED (",
												fwdSummary.awardedForwarder || req.forwarderName,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName$13,
											lineNumber: 473,
											columnNumber: 25
										}, this) : fwdSummary.quotationsReceived > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 shadow-2xs",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [fwdSummary.quotationsReceived, " Quotes"] }, void 0, true, {
												fileName: _jsxFileName$13,
												lineNumber: 478,
												columnNumber: 27
											}, this), fwdSummary.bestRate && /* @__PURE__ */ (void 0)("span", {
												className: "font-mono text-[10.5px] text-slate-700",
												children: [
													"($",
													fwdSummary.bestRate.toLocaleString(),
													")"
												]
											}, void 0, true, {
												fileName: _jsxFileName$13,
												lineNumber: 480,
												columnNumber: 29
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$13,
											lineNumber: 477,
											columnNumber: 25
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-500",
											children: "Awaiting Quotes"
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 486,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$13,
										lineNumber: 460,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$13,
									lineNumber: 459,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5 text-right whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-end gap-1.5",
										children: [(onViewQuotations || onRequestQuotes) && /* @__PURE__ */ (void 0)(Button, {
											type: "button",
											size: "sm",
											onClick: () => onViewQuotations ? onViewQuotations(req) : onRequestQuotes?.(req),
											className: "h-7.5 bg-[#0FA3B1] hover:bg-[#0D919E] text-white px-2.5 text-[11.5px] font-bold gap-1 shadow-2xs cursor-pointer",
											children: [
												/* @__PURE__ */ (void 0)(Users, { className: "size-3" }, void 0, false, {
													fileName: _jsxFileName$13,
													lineNumber: 505,
													columnNumber: 27
												}, this),
												"View Quotations (",
												fwdSummary.quotationsReceived,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName$13,
											lineNumber: 497,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											onClick: () => onSelectRequest(req),
											className: "h-7.5 border-slate-200 px-2 text-[11.5px] text-slate-700 hover:bg-slate-50 cursor-pointer",
											children: "Details"
										}, void 0, false, {
											fileName: _jsxFileName$13,
											lineNumber: 510,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$13,
										lineNumber: 495,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$13,
									lineNumber: 494,
									columnNumber: 19
								}, this)
							]
						}, req.id, true, {
							fileName: _jsxFileName$13,
							lineNumber: 301,
							columnNumber: 17
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 281,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$13,
				lineNumber: 258,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$13,
			lineNumber: 257,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$13,
		lineNumber: 68,
		columnNumber: 5
	}, this);
});
var _jsxFileName$12 = "/app/applet/src/components/nashmia/requests/RequestsKanbanView.tsx";
var COLUMNS = [
	{
		id: "Pending Review",
		title: "Pending Review",
		subtitle: "Awaiting ops dispatch check",
		icon: Clock,
		headerColor: "text-amber-700 bg-amber-50/80 border-amber-200",
		badgeBg: "bg-amber-100 text-amber-800"
	},
	{
		id: "Rate Verification",
		title: "Rate Verification",
		subtitle: "Checking contract & spot quotes",
		icon: Receipt,
		headerColor: "text-indigo-700 bg-indigo-50/80 border-indigo-200",
		badgeBg: "bg-indigo-100 text-indigo-800"
	},
	{
		id: "Line Allocation",
		title: "Line Allocation",
		subtitle: "Carrier space & equipment",
		icon: Container,
		headerColor: "text-cyan-700 bg-cyan-50/80 border-cyan-200",
		badgeBg: "bg-cyan-100 text-cyan-800"
	},
	{
		id: "Approved",
		title: "Approved & Confirmed",
		subtitle: "Booking order released",
		icon: CircleCheck,
		headerColor: "text-emerald-700 bg-emerald-50/80 border-emerald-200",
		badgeBg: "bg-emerald-100 text-emerald-800"
	},
	{
		id: "Revision Requested",
		title: "Needs Revision",
		subtitle: "Awaiting shipper updates",
		icon: TriangleAlert,
		headerColor: "text-rose-700 bg-rose-50/80 border-rose-200",
		badgeBg: "bg-rose-100 text-rose-800"
	}
];
var RequestsKanbanView = (0, import_react.memo)(function RequestsKanbanView({ requests, onSelectRequest, onApproveRequest, onRequestRevision }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-cols-1 gap-4 overflow-x-auto pb-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
		children: COLUMNS.map((col) => {
			const colRequests = requests.filter((r) => r.status === col.id);
			const Icon = col.icon;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: `flex items-center justify-between rounded-xl border p-2.5 ${col.headerColor}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$12,
							lineNumber: 98,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[13px] font-bold",
							children: col.title
						}, void 0, false, {
							fileName: _jsxFileName$12,
							lineNumber: 99,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$12,
						lineNumber: 97,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: `rounded-full px-2 py-0.2 text-[11px] font-bold ${col.badgeBg}`,
						children: colRequests.length
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 101,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$12,
					lineNumber: 94,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-3 flex flex-1 flex-col gap-2.5",
					children: colRequests.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid flex-1 place-items-center rounded-xl border border-dashed border-slate-200 p-6 text-center text-[12px] text-slate-400",
						children: "No requests in this stage"
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 109,
						columnNumber: 17
					}, this) : colRequests.map((req) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						onClick: () => onSelectRequest(req),
						className: "cursor-pointer rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs transition-all hover:border-[#0FA3B1] hover:shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-mono text-[12px] font-bold text-slate-900",
									children: req.reference
								}, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 120,
									columnNumber: 23
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: `rounded px-1.5 py-0.2 text-[9.5px] font-bold uppercase ${req.priority === "Urgent" ? "bg-rose-100 text-rose-800" : req.priority === "High" ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-700"}`,
									children: req.priority
								}, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 123,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 119,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1.5 text-[12.5px] font-semibold text-slate-800 line-clamp-1",
								children: req.buyerName
							}, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 136,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11px] text-slate-500 line-clamp-1",
								children: ["From: ", req.supplierName]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 139,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-2 flex items-center justify-between rounded-lg bg-white border border-slate-200/80 px-2.5 py-1.5 text-[11.5px] font-medium text-slate-700 shadow-2xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex items-center gap-1.5 font-semibold text-slate-900",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
											countryCode: getPortCountryMeta(req.polCode, req.polName).countryCode,
											size: "xs",
											title: getPortCountryMeta(req.polCode, req.polName).countryName
										}, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 146,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: req.polCode }, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 151,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$12,
										lineNumber: 145,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-3 text-slate-400 shrink-0" }, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 153,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex items-center gap-1.5 font-semibold text-slate-900",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: req.podCode }, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 155,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
											countryCode: getPortCountryMeta(req.podCode, req.podName).countryCode,
											size: "xs",
											title: getPortCountryMeta(req.podCode, req.podName).countryName
										}, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 156,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$12,
										lineNumber: 154,
										columnNumber: 23
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 144,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-2.5 flex items-center justify-between text-[11.5px]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-medium text-slate-600",
									children: [
										req.containerCount,
										"x ",
										req.containerSize
									]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 166,
									columnNumber: 23
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-bold text-slate-900",
									children: ["$", req.totalFreight.toLocaleString()]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 169,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 165,
								columnNumber: 21
							}, this)
						]
					}, req.id, true, {
						fileName: _jsxFileName$12,
						lineNumber: 114,
						columnNumber: 19
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 107,
					columnNumber: 13
				}, this)]
			}, col.id, true, {
				fileName: _jsxFileName$12,
				lineNumber: 89,
				columnNumber: 11
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName$12,
		lineNumber: 83,
		columnNumber: 5
	}, this);
});
var _jsxFileName$11 = "/app/applet/src/components/nashmia/requests/AwardForwarderModal.tsx";
var AwardForwarderModal = (0, import_react.memo)(function AwardForwarderModal({ isOpen, onClose, bookingRequest, forwarderRequest, onConfirmAward }) {
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isAcknowledged, setIsAcknowledged] = (0, import_react.useState)(false);
	const checkboxId = (0, import_react.useId)();
	if (!isOpen || !forwarderRequest) return null;
	const ratePerContainer = forwarderRequest.offerData?.ratePerContainer || forwarderRequest.ratePerContainer || 0;
	const containerCount = forwarderRequest.offerData?.quantity || forwarderRequest.containerCount || bookingRequest?.containerCount || 1;
	const containerSize = forwarderRequest.containerSize || bookingRequest?.containerSize || "40HC";
	const containerType = forwarderRequest.offerData?.containerType || forwarderRequest.containerType || bookingRequest?.containerType || "Standard Dry";
	const totalFreight = forwarderRequest.offerData?.totalFreight || (ratePerContainer ? ratePerContainer * containerCount : 0);
	const currency = forwarderRequest.offerData?.currency || forwarderRequest.currency || bookingRequest?.currency || "USD";
	const carrier = forwarderRequest.offerData?.carrier || forwarderRequest.preferredCarrier || bookingRequest?.preferredCarrier || "Direct Carrier Line";
	const transitDays = forwarderRequest.offerData?.transitDays || 24;
	const freeDays = forwarderRequest.offerData?.freeDays || 14;
	const originPort = forwarderRequest.polName || forwarderRequest.origin || bookingRequest?.polName || bookingRequest?.polCode || "Port of Loading (POL)";
	const polCode = forwarderRequest.polCode || bookingRequest?.polCode || "POL";
	const destinationPort = forwarderRequest.podName || forwarderRequest.destination || bookingRequest?.podName || bookingRequest?.podCode || "Destination Port (POD)";
	const podCode = forwarderRequest.podCode || bookingRequest?.podCode || "POD";
	const etdDate = forwarderRequest.offerData?.etd || forwarderRequest.etd || forwarderRequest.requiredSailingDate || bookingRequest?.requestedEtd || "Prompt / Target Sailing";
	const etaDate = forwarderRequest.offerData?.eta || forwarderRequest.eta || bookingRequest?.estimatedEta || `ETA (~${transitDays}d)`;
	const rawAdditional = forwarderRequest.offerData?.additionalCharges;
	const additionalChargesDisplay = rawAdditional !== void 0 && rawAdditional !== null && rawAdditional !== "" && rawAdditional !== 0 ? typeof rawAdditional === "number" ? `$${rawAdditional.toLocaleString()} ${currency}` : String(rawAdditional) : "All-Inclusive (Origin THC, Documentation & ISPS Surcharges Included)";
	const movementNo = forwarderRequest.movementNumber || bookingRequest?.movementNumber || forwarderRequest.bookingReference || bookingRequest?.reference || "MOV-2026-0001";
	const isAlreadyAwarded = forwarderRequest.status === "AWARDED";
	const handleConfirm = async () => {
		setIsSubmitting(true);
		try {
			await onConfirmAward(forwarderRequest.id);
			setIsAcknowledged(false);
			onClose();
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => !open && !isSubmitting && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "w-full sm:max-w-[600px] max-h-[92vh] flex flex-col p-0 overflow-hidden sm:rounded-2xl bg-white text-slate-900 antialiased shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-4.5 border-b border-slate-800 relative shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 grid place-items-center shadow-inner shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-6" }, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 160,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 159,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-[11px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 rounded-md px-1.5 py-0.5",
										children: movementNo
									}, void 0, false, {
										fileName: _jsxFileName$11,
										lineNumber: 164,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs text-slate-300 font-medium",
										children: "Forwarder Award Protocol"
									}, void 0, false, {
										fileName: _jsxFileName$11,
										lineNumber: 167,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$11,
									lineNumber: 163,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
									className: "text-lg font-bold text-white tracking-tight mt-0.5",
									children: "Confirm & Designate Winning Forwarder"
								}, void 0, false, {
									fileName: _jsxFileName$11,
									lineNumber: 169,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
									className: "text-xs text-slate-400 mt-0.5",
									children: "Review rate, equipment, schedule, and surcharges before atomic designation."
								}, void 0, false, {
									fileName: _jsxFileName$11,
									lineNumber: 172,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$11,
							lineNumber: 162,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$11,
						lineNumber: 158,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 157,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-6 space-y-4 text-xs overflow-y-auto max-h-[calc(92vh-140px)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/40 p-4 space-y-3 shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-2 py-0.5 rounded-md",
												children: "Selected Forwarding Partner"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 186,
												columnNumber: 19
											}, this), forwarderRequest.forwarderCode && /* @__PURE__ */ (void 0)("span", {
												className: "font-mono text-[10px] font-semibold text-slate-500",
												children: [
													"[",
													forwarderRequest.forwarderCode,
													"]"
												]
											}, void 0, true, {
												fileName: _jsxFileName$11,
												lineNumber: 190,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 185,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "text-base font-extrabold text-slate-900 mt-1 truncate",
											children: forwarderRequest.forwarderName
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 195,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs text-slate-600 truncate mt-0.5",
											children: [
												forwarderRequest.forwarderEmail,
												" ",
												forwarderRequest.forwarderContactPerson && /* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400",
													children: ["· Attn: ", forwarderRequest.forwarderContactPerson]
												}, void 0, true, {
													fileName: _jsxFileName$11,
													lineNumber: 201,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 198,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$11,
									lineNumber: 184,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 text-xs font-bold text-emerald-800 flex items-center gap-1 shadow-2xs shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-3.5 text-emerald-600" }, void 0, false, {
										fileName: _jsxFileName$11,
										lineNumber: 208,
										columnNumber: 17
									}, this), isAlreadyAwarded ? "Currently Awarded" : "Winning Quote"]
								}, void 0, true, {
									fileName: _jsxFileName$11,
									lineNumber: 207,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$11,
								lineNumber: 183,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-emerald-200/60 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[10px] text-slate-400 font-semibold block uppercase tracking-wide",
												children: "Rate / Container"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 216,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-slate-900 text-sm font-mono tabular-nums block mt-0.5",
												children: ["$", ratePerContainer.toLocaleString()]
											}, void 0, true, {
												fileName: _jsxFileName$11,
												lineNumber: 219,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[10px] text-slate-500 font-medium",
												children: [currency, " base freight"]
											}, void 0, true, {
												fileName: _jsxFileName$11,
												lineNumber: 222,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$11,
										lineNumber: 215,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[10px] text-slate-400 font-semibold block uppercase tracking-wide",
												children: "Total Ocean Freight"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 228,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-[#0FA3B1] text-sm font-mono tabular-nums block mt-0.5",
												children: ["$", totalFreight.toLocaleString()]
											}, void 0, true, {
												fileName: _jsxFileName$11,
												lineNumber: 231,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[10px] text-[#0FA3B1] font-medium",
												children: [
													containerCount,
													"x container",
													containerCount > 1 ? "s" : ""
												]
											}, void 0, true, {
												fileName: _jsxFileName$11,
												lineNumber: 234,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$11,
										lineNumber: 227,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[10px] text-slate-400 font-semibold block uppercase tracking-wide",
												children: "Carrier Line"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 240,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-semibold text-slate-900 truncate block mt-0.5",
												title: carrier,
												children: carrier
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 243,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[10px] text-slate-500 font-medium",
												children: [transitDays, " days transit"]
											}, void 0, true, {
												fileName: _jsxFileName$11,
												lineNumber: 249,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$11,
										lineNumber: 239,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[10px] text-slate-400 font-semibold block uppercase tracking-wide",
												children: "Free Days (Dem/Det)"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 255,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-emerald-700 block mt-0.5",
												children: [freeDays, " Days"]
											}, void 0, true, {
												fileName: _jsxFileName$11,
												lineNumber: 258,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[10px] text-slate-500 font-medium",
												children: "At destination POD"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 259,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$11,
										lineNumber: 254,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$11,
								lineNumber: 214,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$11,
							lineNumber: 182,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layers, { className: "size-3.5 text-slate-500" }, void 0, false, {
										fileName: _jsxFileName$11,
										lineNumber: 267,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Quotation & Booking Specifics" }, void 0, false, {
										fileName: _jsxFileName$11,
										lineNumber: 268,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$11,
									lineNumber: 266,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "size-8 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700 grid place-items-center shrink-0 mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 275,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 274,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[10px] text-slate-400 font-bold uppercase block",
												children: "Equipment & Container Type"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 278,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "font-bold text-slate-900 text-xs mt-0.5",
												children: [
													containerCount,
													"x ",
													containerSize,
													" ",
													containerType
												]
											}, void 0, true, {
												fileName: _jsxFileName$11,
												lineNumber: 281,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[10px] text-slate-500",
												children: [
													"Cargo:",
													" ",
													forwarderRequest.cargoDescription || bookingRequest?.cargo?.description || "General Merchandise"
												]
											}, void 0, true, {
												fileName: _jsxFileName$11,
												lineNumber: 284,
												columnNumber: 19
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 277,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$11,
										lineNumber: 273,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "size-8 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 grid place-items-center shrink-0 mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 296,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 295,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[10px] text-slate-400 font-bold uppercase block",
													children: "Schedule (ETD → ETA)"
												}, void 0, false, {
													fileName: _jsxFileName$11,
													lineNumber: 299,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "font-bold text-slate-900 text-xs mt-0.5 flex items-center gap-1 truncate",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["ETD: ", etdDate] }, void 0, true, {
															fileName: _jsxFileName$11,
															lineNumber: 303,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-3 text-slate-400 shrink-0" }, void 0, false, {
															fileName: _jsxFileName$11,
															lineNumber: 304,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["ETA: ", etaDate] }, void 0, true, {
															fileName: _jsxFileName$11,
															lineNumber: 305,
															columnNumber: 21
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$11,
													lineNumber: 302,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "text-[10px] text-slate-600 truncate flex items-center gap-1.5 mt-0.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "inline-flex items-center gap-1 font-semibold text-slate-800",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
																countryCode: getPortCountryMeta(polCode, originPort).countryCode,
																size: "xs",
																title: getPortCountryMeta(polCode, originPort).countryName
															}, void 0, false, {
																fileName: _jsxFileName$11,
																lineNumber: 309,
																columnNumber: 23
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: polCode }, void 0, false, {
																fileName: _jsxFileName$11,
																lineNumber: 314,
																columnNumber: 23
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$11,
															lineNumber: 308,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-slate-400",
															children: "→"
														}, void 0, false, {
															fileName: _jsxFileName$11,
															lineNumber: 316,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "inline-flex items-center gap-1 font-semibold text-slate-800",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
																countryCode: getPortCountryMeta(podCode, destinationPort).countryCode,
																size: "xs",
																title: getPortCountryMeta(podCode, destinationPort).countryName
															}, void 0, false, {
																fileName: _jsxFileName$11,
																lineNumber: 318,
																columnNumber: 23
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: podCode }, void 0, false, {
																fileName: _jsxFileName$11,
																lineNumber: 323,
																columnNumber: 23
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$11,
															lineNumber: 317,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-slate-400",
															children: [
																"(",
																originPort,
																" to ",
																destinationPort,
																")"
															]
														}, void 0, true, {
															fileName: _jsxFileName$11,
															lineNumber: 325,
															columnNumber: 21
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$11,
													lineNumber: 307,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 298,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$11,
										lineNumber: 294,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$11,
									lineNumber: 271,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "size-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 grid place-items-center shrink-0 mt-0.5",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Receipt, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 336,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$11,
										lineNumber: 335,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex-1 min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[10px] text-slate-400 font-bold uppercase block",
													children: "Additional Charges & Local Fees"
												}, void 0, false, {
													fileName: _jsxFileName$11,
													lineNumber: 340,
													columnNumber: 19
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md",
													children: "Verified"
												}, void 0, false, {
													fileName: _jsxFileName$11,
													lineNumber: 343,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$11,
												lineNumber: 339,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "font-semibold text-slate-800 text-xs mt-0.5",
												children: additionalChargesDisplay
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 347,
												columnNumber: 17
											}, this),
											forwarderRequest.offerData?.notes && /* @__PURE__ */ (void 0)("p", {
												className: "text-[10px] text-slate-500 italic mt-0.5",
												children: [
													"Forwarder note: “",
													forwarderRequest.offerData.notes,
													"”"
												]
											}, void 0, true, {
												fileName: _jsxFileName$11,
												lineNumber: 351,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$11,
										lineNumber: 338,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$11,
									lineNumber: 334,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$11,
							lineNumber: 265,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl border border-amber-200 bg-amber-50/80 p-3.5 space-y-2 text-amber-900",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2 font-bold text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "size-4 text-amber-600 shrink-0" }, void 0, false, {
									fileName: _jsxFileName$11,
									lineNumber: 362,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Atomic Workflow Changes Applied Upon Confirmation" }, void 0, false, {
									fileName: _jsxFileName$11,
									lineNumber: 363,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$11,
								lineNumber: 361,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
								className: "text-xs text-amber-800 list-disc pl-5 space-y-1 leading-relaxed",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: forwarderRequest.forwarderName }, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 367,
											columnNumber: 17
										}, this),
										" will be set to",
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-bold text-emerald-800 uppercase",
											children: "Awarded"
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 368,
											columnNumber: 17
										}, this),
										" and designated as the official forwarder."
									] }, void 0, true, {
										fileName: _jsxFileName$11,
										lineNumber: 366,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
										"All other linked forwarder quotes under Movement",
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-mono font-bold text-slate-900",
											children: movementNo
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 373,
											columnNumber: 17
										}, this),
										" will be set to ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
											className: "text-slate-800",
											children: "NOT_AWARDED"
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 374,
											columnNumber: 20
										}, this),
										"."
									] }, void 0, true, {
										fileName: _jsxFileName$11,
										lineNumber: 371,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
										"The main booking status transitions to",
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
											className: "text-amber-900",
											children: "Pending Confirmation (PENDING_CONFIRMATION)"
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 378,
											columnNumber: 17
										}, this),
										" ",
										"until formal carrier booking space is verified."
									] }, void 0, true, {
										fileName: _jsxFileName$11,
										lineNumber: 376,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
										"A system audit event ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-mono font-bold",
											children: "BOOKING_AWARDED"
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 384,
											columnNumber: 38
										}, this),
										" ",
										"will be permanently logged."
									] }, void 0, true, {
										fileName: _jsxFileName$11,
										lineNumber: 383,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$11,
								lineNumber: 365,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$11,
							lineNumber: 360,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-xl border border-slate-200 bg-white p-3 flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "checkbox",
								id: checkboxId,
								checked: isAcknowledged,
								onChange: (e) => setIsAcknowledged(e.target.checked),
								className: "size-4 mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
							}, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 392,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								htmlFor: checkboxId,
								className: "text-xs text-slate-700 font-medium leading-tight cursor-pointer select-none",
								children: [
									"I explicitly confirm awarding Movement",
									" ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
										className: "font-mono",
										children: movementNo
									}, void 0, false, {
										fileName: _jsxFileName$11,
										lineNumber: 404,
										columnNumber: 15
									}, this),
									" to",
									" ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: forwarderRequest.forwarderName }, void 0, false, {
										fileName: _jsxFileName$11,
										lineNumber: 405,
										columnNumber: 15
									}, this),
									" at",
									" ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [
										"$",
										ratePerContainer.toLocaleString(),
										" ",
										currency
									] }, void 0, true, {
										fileName: _jsxFileName$11,
										lineNumber: 406,
										columnNumber: 15
									}, this),
									"/container (Total: $",
									totalFreight.toLocaleString(),
									" ",
									currency,
									")."
								]
							}, void 0, true, {
								fileName: _jsxFileName$11,
								lineNumber: 399,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$11,
							lineNumber: 391,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$11,
					lineNumber: 180,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-6 py-3.5 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[11px] text-slate-400",
						children: "Explicit manual operator award required"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 416,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "button",
							variant: "outline",
							onClick: onClose,
							disabled: isSubmitting,
							className: "border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold h-9 rounded-xl px-4 cursor-pointer",
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 420,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "button",
							onClick: handleConfirm,
							disabled: isSubmitting || !isAcknowledged,
							className: "bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold h-9 px-5 gap-1.5 rounded-xl cursor-pointer shadow-xs disabled:opacity-50 disabled:cursor-not-allowed transition-all",
							children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-3.5 animate-spin" }, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 437,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Applying Award..." }, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 438,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$11,
								lineNumber: 436,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-4 text-white shrink-0" }, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 442,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Confirm & Award Forwarder" }, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 443,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$11,
								lineNumber: 441,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 429,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$11,
						lineNumber: 419,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$11,
					lineNumber: 415,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$11,
			lineNumber: 155,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$11,
		lineNumber: 154,
		columnNumber: 5
	}, this);
});
var _jsxFileName$10 = "/app/applet/src/components/nashmia/requests/QuotationStatusBadge.tsx";
var QUOTATION_STATUS_CONFIG = {
	PENDING: {
		label: "PENDING",
		displayLabel: "PENDING",
		badgeClasses: "bg-slate-100 text-slate-700 border-slate-300",
		dotClasses: "bg-slate-400 animate-pulse",
		icon: Clock,
		description: "Quote requested from forwarder; awaiting commercial rate reply."
	},
	OFFER_RECEIVED: {
		label: "OFFER_RECEIVED",
		displayLabel: "OFFER_RECEIVED",
		badgeClasses: "bg-emerald-50 text-emerald-800 border-emerald-300",
		dotClasses: "bg-emerald-500",
		icon: Tag,
		description: "Commercial freight quotation received. Receiving an offer does NOT confirm the booking."
	},
	NEEDS_REVIEW: {
		label: "NEEDS_REVIEW",
		displayLabel: "NEEDS_REVIEW",
		badgeClasses: "bg-amber-50 text-amber-800 border-amber-300",
		dotClasses: "bg-amber-500",
		icon: TriangleAlert,
		description: "Quotation terms, rates, validity, or exclusions require manual operator review."
	},
	NOT_AVAILABLE: {
		label: "NOT_AVAILABLE",
		displayLabel: "NOT_AVAILABLE",
		badgeClasses: "bg-rose-50 text-rose-800 border-rose-300",
		dotClasses: "bg-rose-500",
		icon: CircleX,
		description: "Forwarder reported no vessel capacity, equipment deficit, or declined request."
	},
	AWARDED: {
		label: "AWARDED",
		displayLabel: "AWARDED",
		badgeClasses: "bg-cyan-50 text-cyan-900 border-cyan-300 font-bold",
		dotClasses: "bg-cyan-600",
		icon: Trophy,
		description: "Quotation officially awarded. Movement transitions to Pending Confirmation."
	},
	NOT_AWARDED: {
		label: "NOT_AWARDED",
		displayLabel: "NOT_AWARDED",
		badgeClasses: "bg-zinc-100 text-zinc-600 border-zinc-300",
		dotClasses: "bg-zinc-400",
		icon: CircleMinus,
		description: "Competing forwarder quote not selected for this movement."
	},
	CONFIRMED: {
		label: "CONFIRMED",
		displayLabel: "CONFIRMED",
		badgeClasses: "bg-emerald-600 text-white border-emerald-600 shadow-xs font-bold",
		dotClasses: "bg-white",
		icon: CheckCheck,
		description: "Carrier space booking officially verified and confirmed."
	}
};
var QuotationStatusBadge = ({ status, size = "sm", showIcon = true, className = "", allowChange = false, onStatusChange, disabled = false }) => {
	const [dropdownOpen, setDropdownOpen] = (0, import_react.useState)(false);
	const canonical = normalizeQuoteStatus(status);
	const meta = QUOTATION_STATUS_CONFIG[canonical] || QUOTATION_STATUS_CONFIG.PENDING;
	const IconComponent = meta.icon;
	const sizeClasses = {
		xs: "text-[9.5px] px-1.5 py-0.2 gap-1",
		sm: "text-[10.5px] px-2 py-0.5 gap-1.5",
		md: "text-[11.5px] px-2.5 py-1 gap-1.5"
	}[size];
	const iconSizes = {
		xs: "size-2.5",
		sm: "size-3",
		md: "size-3.5"
	}[size];
	if (!allowChange || !onStatusChange) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: `inline-flex items-center rounded-full border font-semibold tracking-wide transition-colors ${meta.badgeClasses} ${sizeClasses} ${className}`,
		title: meta.description,
		children: [showIcon && /* @__PURE__ */ (void 0)(IconComponent, { className: `${iconSizes} shrink-0` }, void 0, false, {
			fileName: _jsxFileName$10,
			lineNumber: 131,
			columnNumber: 22
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: meta.displayLabel }, void 0, false, {
			fileName: _jsxFileName$10,
			lineNumber: 132,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$10,
		lineNumber: 127,
		columnNumber: 7
	}, void 0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative inline-block text-left",
		onClick: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "button",
			disabled,
			onClick: () => setDropdownOpen((prev) => !prev),
			className: `inline-flex items-center rounded-full border font-semibold tracking-wide transition-all cursor-pointer hover:shadow-xs focus:outline-none focus:ring-1 focus:ring-[#0FA3B1] ${meta.badgeClasses} ${sizeClasses} ${className}`,
			title: `${meta.description} (Click to change quotation status)`,
			children: [
				showIcon && /* @__PURE__ */ (void 0)(IconComponent, { className: `${iconSizes} shrink-0` }, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 146,
					columnNumber: 22
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: meta.displayLabel }, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 147,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-2.5 ml-0.5 opacity-60" }, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 148,
					columnNumber: 9
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$10,
			lineNumber: 139,
			columnNumber: 7
		}, void 0), dropdownOpen && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("div", {
			className: "fixed inset-0 z-30",
			onClick: () => setDropdownOpen(false)
		}, void 0, false, {
			fileName: _jsxFileName$10,
			lineNumber: 153,
			columnNumber: 11
		}, void 0), /* @__PURE__ */ (void 0)("div", {
			className: "absolute left-0 mt-1 w-52 rounded-xl bg-white border border-slate-200 shadow-xl z-40 p-1.5 animate-in fade-in zoom-in-95 duration-100 text-left",
			children: [
				/* @__PURE__ */ (void 0)("div", {
					className: "px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1",
					children: "Set Quotation Status"
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 155,
					columnNumber: 13
				}, void 0),
				/* @__PURE__ */ (void 0)("div", {
					className: "space-y-0.5 max-h-60 overflow-y-auto",
					children: ALL_QUOTATION_STATUSES.map((st) => {
						const optMeta = QUOTATION_STATUS_CONFIG[st];
						const OptIcon = optMeta.icon;
						const isSelected = st === canonical;
						return /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: async () => {
								setDropdownOpen(false);
								if (st !== canonical) await onStatusChange(st);
							},
							className: `w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer text-left ${isSelected ? "bg-[#0FA3B1]/10 text-[#0FA3B1]" : "hover:bg-slate-50 text-slate-700"}`,
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (void 0)(OptIcon, { className: "size-3.5 shrink-0 opacity-80" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 180,
									columnNumber: 23
								}, void 0), /* @__PURE__ */ (void 0)("span", { children: optMeta.displayLabel }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 181,
									columnNumber: 23
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$10,
								lineNumber: 179,
								columnNumber: 21
							}, void 0), isSelected && /* @__PURE__ */ (void 0)(Check, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 183,
								columnNumber: 36
							}, void 0)]
						}, st, true, {
							fileName: _jsxFileName$10,
							lineNumber: 164,
							columnNumber: 19
						}, void 0);
					})
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 158,
					columnNumber: 13
				}, void 0),
				/* @__PURE__ */ (void 0)("div", {
					className: "mt-1 pt-1 border-t border-slate-100 px-2 py-0.5 text-[9.5px] text-slate-400 leading-tight",
					children: "Rule: Receiving a quotation does not confirm the booking."
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 188,
					columnNumber: 13
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$10,
			lineNumber: 154,
			columnNumber: 11
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName$10,
			lineNumber: 152,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$10,
		lineNumber: 138,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$9 = "/app/applet/src/components/nashmia/requests/EditQuotationModal.tsx";
var EditQuotationModal = (0, import_react.memo)(function EditQuotationModal({ isOpen, onClose, forwarderRequest, onSave }) {
	const [ratePerContainer, setRatePerContainer] = (0, import_react.useState)("");
	const [currency, setCurrency] = (0, import_react.useState)("USD");
	const [carrier, setCarrier] = (0, import_react.useState)("");
	const [availability, setAvailability] = (0, import_react.useState)("");
	const [etd, setEtd] = (0, import_react.useState)("");
	const [eta, setEta] = (0, import_react.useState)("");
	const [transitDays, setTransitDays] = (0, import_react.useState)("");
	const [freeDays, setFreeDays] = (0, import_react.useState)("");
	const [validUntil, setValidUntil] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [vesselName, setVesselName] = (0, import_react.useState)("");
	const [voyageNumber, setVoyageNumber] = (0, import_react.useState)("");
	const [quotationReference, setQuotationReference] = (0, import_react.useState)("");
	const [containerType, setContainerType] = (0, import_react.useState)("40HC");
	const [containerCount, setContainerCount] = (0, import_react.useState)("1");
	const [showBreakdown, setShowBreakdown] = (0, import_react.useState)(true);
	const [oceanFreight, setOceanFreight] = (0, import_react.useState)("");
	const [thc, setThc] = (0, import_react.useState)("");
	const [originCharges, setOriginCharges] = (0, import_react.useState)("");
	const [destinationCharges, setDestinationCharges] = (0, import_react.useState)("");
	const [documentationCharges, setDocumentationCharges] = (0, import_react.useState)("");
	const [customsCharges, setCustomsCharges] = (0, import_react.useState)("");
	const [truckingCharges, setTruckingCharges] = (0, import_react.useState)("");
	const [otherCharges, setOtherCharges] = (0, import_react.useState)("");
	const [quotedTotal, setQuotedTotal] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("OFFER_RECEIVED");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!forwarderRequest) return;
		const offer = forwarderRequest.offerData;
		setRatePerContainer(offer?.ratePerContainer !== void 0 && offer.ratePerContainer !== null ? String(offer.ratePerContainer) : offer?.oceanFreight !== void 0 && offer.oceanFreight !== null ? String(offer.oceanFreight) : forwarderRequest.ratePerContainer ? String(forwarderRequest.ratePerContainer) : "");
		setCurrency(offer?.currency || forwarderRequest.currency || "USD");
		setCarrier(offer?.carrier || forwarderRequest.preferredCarrier || "MSC");
		setAvailability(offer?.availability || "Available on first cut-off");
		setEtd(offer?.etd || offer?.sailingDate || forwarderRequest.etd || "");
		setEta(offer?.eta || forwarderRequest.eta || "");
		setTransitDays(offer?.transitDays ? String(offer.transitDays) : "24");
		setFreeDays(offer?.freeDays ? String(offer.freeDays) : "14");
		setValidUntil(offer?.validUntil || offer?.validityDate || "30 Sep 2026");
		setNotes(offer?.notes || "");
		setVesselName(offer?.vesselName || forwarderRequest.vesselName || "");
		setVoyageNumber(offer?.voyageNumber || forwarderRequest.voyageNumber || "");
		setContainerType(offer?.containerType || forwarderRequest.containerType || "40HC");
		setContainerCount(String(offer?.quantity || forwarderRequest.containerCount || 1));
		setOceanFreight(offer?.oceanFreight !== void 0 && offer.oceanFreight !== null ? String(offer.oceanFreight) : "");
		setThc(offer?.thc !== void 0 && offer.thc !== null ? String(offer.thc) : "");
		setOriginCharges(offer?.originCharges !== void 0 && offer.originCharges !== null ? String(offer.originCharges) : "");
		setDestinationCharges(offer?.destinationCharges !== void 0 && offer.destinationCharges !== null ? String(offer.destinationCharges) : "");
		setDocumentationCharges(offer?.documentationCharges !== void 0 && offer.documentationCharges !== null ? String(offer.documentationCharges) : "");
		setCustomsCharges(offer?.customsCharges !== void 0 && offer.customsCharges !== null ? String(offer.customsCharges) : "");
		setTruckingCharges(offer?.truckingCharges !== void 0 && offer.truckingCharges !== null ? String(offer.truckingCharges) : "");
		setOtherCharges(offer?.otherCharges !== void 0 && offer.otherCharges !== null ? String(offer.otherCharges) : "");
		const qTot = offer?.totalAmount !== void 0 && offer.totalAmount !== null ? String(offer.totalAmount) : offer?.totalCost !== void 0 && offer.totalCost !== null ? String(offer.totalCost) : "";
		setQuotedTotal(qTot);
		setQuotationReference((offer?.traceability)?.quotationReference ? String((offer?.traceability)?.quotationReference) : `REF-${forwarderRequest.movementNumber || forwarderRequest.bookingReference}`);
		setStatus(normalizeQuoteStatus(forwarderRequest.status));
		runPropertyAlignmentDiagnostic(forwarderRequest, {
			id: forwarderRequest.id,
			quotationId: offer?.quotationId || offer?.id || forwarderRequest.id,
			bookingId: forwarderRequest.bookingId,
			movementNumber: forwarderRequest.movementNumber,
			ratePerContainer: offer?.ratePerContainer || forwarderRequest.ratePerContainer,
			oceanFreight: offer?.oceanFreight || offer?.ratePerContainer,
			quotedTotal: qTot,
			currency: offer?.currency || forwarderRequest.currency,
			carrier: offer?.carrier || forwarderRequest.preferredCarrier,
			etd: offer?.etd || forwarderRequest.etd,
			eta: offer?.eta || forwarderRequest.eta,
			transitDays: offer?.transitDays,
			freeDays: offer?.freeDays,
			vesselName: offer?.vesselName || forwarderRequest.vesselName,
			quotationReference: (offer?.traceability)?.quotationReference,
			status: forwarderRequest.status,
			itemizedCharges: offer?.itemizedCharges || []
		}, "Forwarder Quotation Popup - EditQuotationModal");
	}, [forwarderRequest]);
	if (!isOpen || !forwarderRequest) return null;
	const offer = forwarderRequest.offerData;
	const reviewReasons = offer?.reviewReasons || [];
	const needsReview = offer?.needsReview || reviewReasons.length > 0;
	const isRuleParsed = offer?.receivedVia?.includes("Forwarder Quotation Email") || offer?.receivedVia?.includes("Email Reply") || offer?.receivedVia?.includes("Rule-Based");
	const numRate = parseFloat(ratePerContainer) || 0;
	const numThc = parseFloat(thc) || 0;
	const numOrigin = parseFloat(originCharges) || 0;
	const numDest = parseFloat(destinationCharges) || 0;
	const numDoc = parseFloat(documentationCharges) || 0;
	const numCustoms = parseFloat(customsCharges) || 0;
	const numTrucking = parseFloat(truckingCharges) || 0;
	const numOther = parseFloat(otherCharges) || 0;
	const calculatedSum = numRate + numThc + numOrigin + numDest + numDoc + numCustoms + numTrucking + numOther;
	const parsedQuotedTotal = parseFloat(quotedTotal);
	const hasTotalDiscrepancy = !isNaN(parsedQuotedTotal) && calculatedSum > 0 && Math.abs(parsedQuotedTotal - calculatedSum) > .01;
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			const parsedRate = parseFloat(ratePerContainer);
			const cntrCount = parseInt(containerCount, 10) || forwarderRequest.containerCount || 1;
			const totalFreight = !isNaN(parsedRate) ? parsedRate * cntrCount : void 0;
			const payload = {
				ratePerContainer: !isNaN(parsedRate) ? parsedRate : void 0,
				totalFreight,
				currency,
				carrier,
				availability,
				etd: etd || void 0,
				eta: eta || void 0,
				transitDays: parseInt(transitDays, 10) || void 0,
				freeDays: parseInt(freeDays, 10) || void 0,
				validUntil: validUntil || void 0,
				notes: notes || void 0,
				vesselName: vesselName || void 0,
				voyageNumber: voyageNumber || void 0,
				containerType,
				quantity: cntrCount,
				oceanFreight: !isNaN(parseFloat(oceanFreight)) ? parseFloat(oceanFreight) : parsedRate || void 0,
				thc: !isNaN(parseFloat(thc)) ? parseFloat(thc) : void 0,
				originCharges: !isNaN(parseFloat(originCharges)) ? parseFloat(originCharges) : void 0,
				destinationCharges: !isNaN(parseFloat(destinationCharges)) ? parseFloat(destinationCharges) : void 0,
				documentationCharges: !isNaN(parseFloat(documentationCharges)) ? parseFloat(documentationCharges) : void 0,
				customsCharges: !isNaN(parseFloat(customsCharges)) ? parseFloat(customsCharges) : void 0,
				truckingCharges: !isNaN(parseFloat(truckingCharges)) ? parseFloat(truckingCharges) : void 0,
				otherCharges: !isNaN(parseFloat(otherCharges)) ? parseFloat(otherCharges) : void 0,
				totalAmount: !isNaN(parsedQuotedTotal) ? parsedQuotedTotal : calculatedSum || totalFreight,
				totalCost: !isNaN(parsedQuotedTotal) ? parsedQuotedTotal : calculatedSum || totalFreight,
				sailingDate: etd || void 0,
				validityDate: validUntil || void 0,
				manuallyCorrected: true,
				correctedAt: (/* @__PURE__ */ new Date()).toISOString(),
				needsReview: false,
				reviewReasons: []
			};
			await onSave(forwarderRequest.id, payload, status);
			recordQuotationAuditEvent({
				eventType: "QUOTATION_UPDATED",
				movementNumber: forwarderRequest.movementNumber,
				bookingId: forwarderRequest.movementNumber || forwarderRequest.bookingReference,
				forwarderId: forwarderRequest.forwarderId,
				forwarderName: forwarderRequest.forwarderName,
				summary: `Quotation updated manually: status=${status}, rate=${payload.ratePerContainer || "N/A"}`,
				details: {
					previousStatus: forwarderRequest.status,
					newStatus: status,
					updatedFields: Object.keys(payload),
					manuallyCorrected: true
				}
			});
			onClose();
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => !open && !isSubmitting && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "w-full sm:max-w-[650px] p-0 overflow-hidden sm:rounded-2xl bg-white max-h-[92vh] flex flex-col text-slate-900 antialiased shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "bg-white text-slate-900 px-6 py-4.5 border-b border-slate-200 relative",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "size-10 rounded-2xl bg-[#0FA3B1]/10 text-[#0FA3B1] grid place-items-center shadow-xs shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilePen, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 296,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 295,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2 flex-wrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-[11px] font-bold text-slate-900 bg-slate-100 border border-slate-200 rounded-md px-1.5 py-0.5",
										children: forwarderRequest.movementNumber || forwarderRequest.bookingReference
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 300,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs text-slate-500 font-medium",
										children: "Quotation Review & Edit"
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 303,
										columnNumber: 17
									}, this),
									isRuleParsed && /* @__PURE__ */ (void 0)("span", {
										className: "text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md px-1.5 py-0.2",
										children: "Source: Parsed from forwarder email • Parser: Rule-based"
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 305,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 299,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
								className: "text-lg font-bold text-slate-900 tracking-tight mt-0.5",
								children: needsReview ? "Review Forwarder Quotation" : "Edit Forwarder Quotation"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 310,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
								className: "text-xs text-slate-500 mt-0.5 font-normal truncate",
								children: [
									"Forwarder:",
									" ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
										className: "text-slate-900 font-semibold",
										children: forwarderRequest.forwarderName
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 315,
										columnNumber: 17
									}, this),
									" • ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-500",
										children: forwarderRequest.forwarderEmail
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 319,
										columnNumber: 17
									}, this),
									forwarderRequest.origin && forwarderRequest.destination && /* @__PURE__ */ (void 0)("span", { children: [
										" • Route: ",
										forwarderRequest.origin,
										" (",
										forwarderRequest.polCode,
										") →",
										" ",
										forwarderRequest.destination,
										" (",
										forwarderRequest.podCode,
										")"
									] }, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 321,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 313,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 298,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 294,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 293,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: handleSubmit,
				className: "flex-1 overflow-y-auto p-6 space-y-4.5 text-xs",
				children: [
					needsReview && reviewReasons.length > 0 && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-2xl bg-amber-50 border border-amber-200 p-3.5 space-y-2 text-amber-900",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2 font-bold text-xs text-amber-800",
								children: [/* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-4 text-amber-600 shrink-0" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 338,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", { children: "Operator Attention Required (Rule Parser Anomalies)" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 339,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 337,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("ul", {
								className: "list-disc list-inside space-y-1 text-[11.5px] text-amber-800/90 pl-1",
								children: reviewReasons.map((reason, i) => /* @__PURE__ */ (void 0)("li", {
									className: "leading-relaxed",
									children: reason
								}, i, false, {
									fileName: _jsxFileName$9,
									lineNumber: 343,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 341,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-[11px] text-amber-700 italic pt-0.5",
								children: "Values flagged above have been set to blank or null. Please review and enter/confirm the accurate values manually."
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 348,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 336,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5 rounded-2xl bg-slate-50 border border-slate-200 p-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "quotation-status",
									className: "text-xs font-bold text-slate-800",
									children: "Quotation Status"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 358,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuotationStatusBadge, {
									status,
									size: "xs"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 361,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 357,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
								id: "quotation-status",
								value: status,
								onChange: (e) => setStatus(e.target.value),
								className: "w-full h-9 rounded-xl border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0FA3B1]/30 focus:border-[#0FA3B1]",
								children: ALL_QUOTATION_STATUSES.map((st) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: st,
									children: [
										st,
										" — ",
										QUOTATION_STATUS_CONFIG[st].description.split(".")[0]
									]
								}, st, true, {
									fileName: _jsxFileName$9,
									lineNumber: 370,
									columnNumber: 17
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 363,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11px] text-slate-500 mt-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Info, { className: "size-3 text-[#0FA3B1] shrink-0" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 376,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: status === "OFFER_RECEIVED" ? "Commercial rate received. Receiving a quotation does NOT automatically confirm the booking." : QUOTATION_STATUS_CONFIG[status]?.description }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 377,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 375,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 356,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "rate",
								className: "text-xs font-semibold text-slate-700",
								children: "Ocean Rate / Container"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 388,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "rate",
								type: "number",
								step: "0.01",
								placeholder: "2100",
								value: ratePerContainer,
								onChange: (e) => {
									setRatePerContainer(e.target.value);
									if (!oceanFreight) setOceanFreight(e.target.value);
								},
								className: "h-9.5 font-bold text-slate-900 rounded-xl",
								required: true
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 391,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 387,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "currency",
								className: "text-xs font-semibold text-slate-700",
								children: "Currency"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 407,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "currency",
								value: currency,
								onChange: (e) => setCurrency(e.target.value.toUpperCase()),
								className: "h-9.5 font-mono rounded-xl font-bold",
								placeholder: "USD",
								required: true
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 410,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 406,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 386,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setShowBreakdown((prev) => !prev),
							className: "flex items-center justify-between w-full text-xs font-bold text-slate-800 hover:text-[#0FA3B1] transition-colors cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Receipt, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 429,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Itemized Charge Breakdown & Totals" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 430,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 428,
								columnNumber: 15
							}, this), showBreakdown ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronUp, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 433,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 435,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 423,
							columnNumber: 13
						}, this), showBreakdown && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-3 pt-1 border-t border-slate-200/60 text-xs",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (void 0)(Label, {
												htmlFor: "oceanFreight",
												className: "text-[11px] text-slate-600 font-medium",
												children: "Ocean Freight"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 443,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												id: "oceanFreight",
												type: "number",
												step: "0.01",
												placeholder: "0.00",
												value: oceanFreight,
												onChange: (e) => setOceanFreight(e.target.value),
												className: "h-8.5 rounded-lg text-xs"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 449,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 442,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (void 0)(Label, {
												htmlFor: "thc",
												className: "text-[11px] text-slate-600 font-medium",
												children: "THC (Terminal)"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 460,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												id: "thc",
												type: "number",
												step: "0.01",
												placeholder: "0.00",
												value: thc,
												onChange: (e) => setThc(e.target.value),
												className: "h-8.5 rounded-lg text-xs"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 463,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 459,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (void 0)(Label, {
												htmlFor: "originCharges",
												className: "text-[11px] text-slate-600 font-medium",
												children: "Origin Charges"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 474,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												id: "originCharges",
												type: "number",
												step: "0.01",
												placeholder: "0.00",
												value: originCharges,
												onChange: (e) => setOriginCharges(e.target.value),
												className: "h-8.5 rounded-lg text-xs"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 480,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 473,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (void 0)(Label, {
												htmlFor: "destCharges",
												className: "text-[11px] text-slate-600 font-medium",
												children: "Dest. Charges"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 491,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												id: "destCharges",
												type: "number",
												step: "0.01",
												placeholder: "0.00",
												value: destinationCharges,
												onChange: (e) => setDestinationCharges(e.target.value),
												className: "h-8.5 rounded-lg text-xs"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 494,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 490,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 441,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (void 0)(Label, {
												htmlFor: "docCharges",
												className: "text-[11px] text-slate-600 font-medium",
												children: "Documentation"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 508,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												id: "docCharges",
												type: "number",
												step: "0.01",
												placeholder: "0.00",
												value: documentationCharges,
												onChange: (e) => setDocumentationCharges(e.target.value),
												className: "h-8.5 rounded-lg text-xs"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 511,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 507,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (void 0)(Label, {
												htmlFor: "customsCharges",
												className: "text-[11px] text-slate-600 font-medium",
												children: "Customs / Clearance"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 522,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												id: "customsCharges",
												type: "number",
												step: "0.01",
												placeholder: "0.00",
												value: customsCharges,
												onChange: (e) => setCustomsCharges(e.target.value),
												className: "h-8.5 rounded-lg text-xs"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 528,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 521,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (void 0)(Label, {
												htmlFor: "truckingCharges",
												className: "text-[11px] text-slate-600 font-medium",
												children: "Trucking / Haulage"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 539,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												id: "truckingCharges",
												type: "number",
												step: "0.01",
												placeholder: "0.00",
												value: truckingCharges,
												onChange: (e) => setTruckingCharges(e.target.value),
												className: "h-8.5 rounded-lg text-xs"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 545,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 538,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (void 0)(Label, {
												htmlFor: "otherCharges",
												className: "text-[11px] text-slate-600 font-medium",
												children: "Other Surcharges"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 556,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												id: "otherCharges",
												type: "number",
												step: "0.01",
												placeholder: "0.00",
												value: otherCharges,
												onChange: (e) => setOtherCharges(e.target.value),
												className: "h-8.5 rounded-lg text-xs"
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 562,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 555,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 506,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "bg-white rounded-xl border border-slate-200 p-2.5 flex items-center justify-between flex-wrap gap-2 text-[11.5px]",
									children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-slate-500",
										children: "Calculated Sum: "
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 577,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("strong", {
										className: "font-mono text-slate-900 font-bold",
										children: [
											currency,
											" ",
											calculatedSum.toLocaleString(void 0, {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2
											})
										]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 578,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 576,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (void 0)(Label, {
											htmlFor: "quotedTotal",
											className: "text-slate-500 text-[11px]",
											children: "Quoted Total:"
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 587,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(Input, {
											id: "quotedTotal",
											type: "number",
											step: "0.01",
											placeholder: "Quoted Total",
											value: quotedTotal,
											onChange: (e) => setQuotedTotal(e.target.value),
											className: "h-7.5 w-28 text-xs font-mono font-bold text-slate-900 rounded-lg"
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 590,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 586,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 575,
									columnNumber: 17
								}, this),
								hasTotalDiscrepancy && /* @__PURE__ */ (void 0)("div", {
									className: "text-[11px] text-amber-700 bg-amber-50 rounded-lg p-2 border border-amber-200 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-3.5 shrink-0 text-amber-600" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 604,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("span", { children: [
										"Discrepancy detected: Explicit quoted total (",
										currency,
										" ",
										parsedQuotedTotal,
										") does not equal sum of itemized charges (",
										currency,
										" ",
										calculatedSum,
										")."
									] }, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 605,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 603,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 440,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 422,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "carrier",
								className: "text-xs font-semibold text-slate-700",
								children: "Carrying Line / Carrier"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 618,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "carrier",
								value: carrier,
								onChange: (e) => setCarrier(e.target.value),
								className: "h-9.5 font-medium rounded-xl",
								placeholder: "MSC / Maersk / CMA CGM"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 621,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 617,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "avail",
								className: "text-xs font-semibold text-slate-700",
								children: "Space Availability"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 631,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "avail",
								value: availability,
								onChange: (e) => setAvailability(e.target.value),
								className: "h-9.5 rounded-xl",
								placeholder: "Available on first cut-off"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 634,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 630,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 616,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "vessel",
								className: "text-xs font-semibold text-slate-700",
								children: "Vessel Name"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 647,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "vessel",
								value: vesselName,
								onChange: (e) => setVesselName(e.target.value),
								className: "h-9.5 rounded-xl",
								placeholder: "e.g., MSC PALOMA"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 650,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 646,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "voyage",
								className: "text-xs font-semibold text-slate-700",
								children: "Voyage Number"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 660,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "voyage",
								value: voyageNumber,
								onChange: (e) => setVoyageNumber(e.target.value),
								className: "h-9.5 rounded-xl",
								placeholder: "e.g., 264E"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 663,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 659,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 645,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "containerType",
								className: "text-xs font-semibold text-slate-700",
								children: "Container Type / Size"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 676,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "containerType",
								value: containerType,
								onChange: (e) => setContainerType(e.target.value),
								className: "h-9.5 rounded-xl",
								placeholder: "40HC / 20FT"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 679,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 675,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "containerCount",
								className: "text-xs font-semibold text-slate-700",
								children: "Container Quantity"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 689,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "containerCount",
								type: "number",
								min: "1",
								value: containerCount,
								onChange: (e) => setContainerCount(e.target.value),
								className: "h-9.5 rounded-xl"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 692,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 688,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 674,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "etd",
								className: "text-xs font-semibold text-slate-700",
								children: "Proposed ETD / Sailing Date"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 706,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "etd",
								type: "date",
								value: etd,
								onChange: (e) => setEtd(e.target.value),
								className: "h-9.5 rounded-xl"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 709,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 705,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "eta",
								className: "text-xs font-semibold text-slate-700",
								children: "Estimated ETA / Arrival Date"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 719,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "eta",
								type: "date",
								value: eta,
								onChange: (e) => setEta(e.target.value),
								className: "h-9.5 rounded-xl"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 722,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 718,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 704,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-3 gap-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "transit",
									className: "text-xs font-semibold text-slate-700",
									children: "Transit (Days)"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 734,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "transit",
									type: "number",
									value: transitDays,
									onChange: (e) => setTransitDays(e.target.value),
									className: "h-9.5 rounded-xl"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 737,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 733,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "freeDays",
									className: "text-xs font-semibold text-slate-700",
									children: "Free Days"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 747,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "freeDays",
									type: "number",
									value: freeDays,
									onChange: (e) => setFreeDays(e.target.value),
									className: "h-9.5 rounded-xl"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 750,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 746,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "validity",
									className: "text-xs font-semibold text-slate-700",
									children: "Rate Validity"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 760,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "validity",
									value: validUntil,
									onChange: (e) => setValidUntil(e.target.value),
									className: "h-9.5 rounded-xl"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 763,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 759,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 732,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "qref",
								className: "text-xs font-semibold text-slate-700",
								children: "Quotation Reference"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 775,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "qref",
								value: quotationReference,
								onChange: (e) => setQuotationReference(e.target.value),
								className: "h-9.5 rounded-xl font-mono",
								placeholder: "e.g. Q-APEX-2026"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 778,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 774,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "notes",
								className: "text-xs font-semibold text-slate-700",
								children: "Remarks / Surcharges"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 787,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "notes",
								value: notes,
								onChange: (e) => setNotes(e.target.value),
								placeholder: "e.g., Direct vessel sailing, standard demurrage applies",
								className: "h-9.5 text-xs rounded-xl"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 790,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 786,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 773,
						columnNumber: 11
					}, this),
					offer?.originalEmailBody && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-1 text-slate-700 text-xs",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-1.5 font-semibold text-slate-800 text-[11px]",
							children: [/* @__PURE__ */ (void 0)(Mail, { className: "size-3.5 text-slate-500" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 804,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("span", { children: "Source Email Excerpt (Evidence)" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 805,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 803,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "font-mono text-[10.5px] text-slate-600 whitespace-pre-wrap bg-white p-2 rounded-lg border border-slate-200/80 max-h-24 overflow-y-auto",
							children: offer.originalEmailBody
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 807,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 802,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-2xl bg-[#0FA3B1]/10 border border-[#0FA3B1]/20 p-3 flex items-center gap-2.5 text-slate-800 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-4 text-[#0FA3B1] shrink-0" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 814,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All status updates, rule extractions, and manual adjustments are tracked with audit logs in the timeline." }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 815,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 813,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "button",
							variant: "outline",
							onClick: onClose,
							disabled: isSubmitting,
							className: "text-xs font-semibold h-9 rounded-xl px-4 cursor-pointer",
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 823,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "submit",
							disabled: isSubmitting,
							className: "bg-[#0FA3B1] hover:bg-[#0D919E] text-white text-xs font-bold h-9 px-5 gap-1.5 rounded-xl shadow-xs transition-all cursor-pointer",
							children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-3.5 animate-spin" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 839,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Saving..." }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 840,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 838,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3.5 text-white" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 844,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Save & Confirm Quotation" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 845,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 843,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 832,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 822,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 333,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$9,
			lineNumber: 291,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 290,
		columnNumber: 5
	}, this);
});
var _jsxFileName$8 = "/app/applet/src/components/nashmia/requests/RequestDetailDrawer.tsx";
var RequestDetailDrawer = (0, import_react.memo)(function RequestDetailDrawer({ request, isOpen, onClose, onApprove, onRequestRevision, onComposeEmail, onRequestQuotes, onViewQuotations, onOpenAwardDrawer }) {
	const { userId } = useAuth();
	const [forwarderRequests, setForwarderRequests] = (0, import_react.useState)([]);
	const [isAwarding, setIsAwarding] = (0, import_react.useState)(null);
	const [awardModalTarget, setAwardModalTarget] = (0, import_react.useState)(null);
	const [editQuotationTarget, setEditQuotationTarget] = (0, import_react.useState)(null);
	const [expandedEmailId, setExpandedEmailId] = (0, import_react.useState)(null);
	const loadForwarderRequests = (0, import_react.useCallback)(async () => {
		if (!request) return;
		try {
			const list = await fetchForwarderRequestsForBooking(request);
			logQuotationResponseDiagnostics(list, "RequestCardQuotationFetcher - RequestDetailDrawer");
			setForwarderRequests(list);
		} catch (err) {
			console.warn("[RequestDetailDrawer] Error loading forwarder requests:", err);
		}
	}, [request]);
	(0, import_react.useEffect)(() => {
		if (isOpen && request) loadForwarderRequests();
	}, [
		isOpen,
		request,
		loadForwarderRequests
	]);
	(0, import_react.useEffect)(() => {
		const handleUpdate = () => {
			loadForwarderRequests();
		};
		window.addEventListener("nashmia_multi_forwarder_updated", handleUpdate);
		window.addEventListener("nashmia_multi_forwarder_dispatched", handleUpdate);
		window.addEventListener("nashmia_forwarder_offer_received", handleUpdate);
		window.addEventListener("nashmia_booking_awarded", handleUpdate);
		return () => {
			window.removeEventListener("nashmia_multi_forwarder_updated", handleUpdate);
			window.removeEventListener("nashmia_multi_forwarder_dispatched", handleUpdate);
			window.removeEventListener("nashmia_forwarder_offer_received", handleUpdate);
			window.removeEventListener("nashmia_booking_awarded", handleUpdate);
		};
	}, [loadForwarderRequests]);
	const handleAwardForwarder = async (requestId) => {
		setIsAwarding(requestId);
		try {
			const res = await awardForwarderOffer(requestId, userId);
			showPillToast.success(`Designated ${res.request.forwarderName} as official forwarder. Status: Pending Confirmation.`, "Forwarder Quotation Awarded!", request?.reference || request?.movementNumber);
			loadForwarderRequests();
		} catch (err) {
			console.error("[RequestDetailDrawer] Error awarding forwarder:", err);
			showPillToast.error(err instanceof Error ? err.message : "Please try again.", "Failed to award forwarder");
		} finally {
			setIsAwarding(null);
		}
	};
	const handleSaveQuotationCorrection = async (requestId, updatedOffer, updatedStatus) => {
		try {
			await updateForwarderQuotation(requestId, updatedOffer, userId, updatedStatus);
			showPillToast.success("Quotation details & status updated and recorded in audit log.", "Quotation Corrected", request?.reference || request?.movementNumber);
			loadForwarderRequests();
		} catch (err) {
			console.error("[RequestDetailDrawer] Error saving quotation correction:", err);
			showPillToast.error(err instanceof Error ? err.message : "Unable to save correction.", "Failed to update quotation");
		}
	};
	const handleStatusChange = async (requestId, newStatus) => {
		try {
			await updateForwarderQuoteStatus(requestId, newStatus, void 0, userId);
			showPillToast.success(`Quotation status updated to ${newStatus}. (Quotation receipt does not auto-confirm booking)`, "Status Updated");
			loadForwarderRequests();
		} catch (err) {
			showPillToast.error(err instanceof Error ? err.message : "Unable to update status.", "Status Update Failed");
		}
	};
	if (!isOpen || !request) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		onClick: onClose,
		className: "fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-200"
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 184,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
		className: "fixed inset-x-0 bottom-0 top-auto sm:inset-y-0 sm:right-0 sm:top-0 sm:bottom-0 sm:left-auto z-50 flex w-full sm:max-w-2xl max-h-[92vh] sm:max-h-none flex-col rounded-t-[28px] sm:rounded-none border-t sm:border-t-0 sm:border-l border-slate-200 bg-white shadow-2xl overflow-hidden transition-all duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] animate-in slide-in-from-bottom sm:slide-in-from-right outline-none",
		role: "dialog",
		"aria-label": "Request details",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				"data-swipe-handle": "true",
				className: "mx-auto pt-2 pb-1 flex h-6 w-full max-w-[140px] cursor-grab touch-none items-center justify-center sm:hidden select-none shrink-0 bg-white",
				"aria-label": "Drag down to dismiss",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300" }, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 201,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 196,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between border-b border-slate-200 px-6 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid size-10 place-items-center rounded-xl border border-[#0FA3B1]/20 bg-[#E8F5F6] text-[#0FA3B1]",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 208,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 207,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-mono text-[18px] font-bold text-slate-900",
							children: request.reference
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 212,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: `rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase ${request.priority === "Urgent" ? "bg-rose-100 text-rose-800" : request.priority === "High" ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-700"}`,
							children: request.priority
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 215,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 211,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-[12.5px] text-slate-500",
						children: [
							"Created on ",
							new Date(request.createdAt).toLocaleDateString(),
							" · Status:",
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
								className: "text-slate-800",
								children: request.status
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 229,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 227,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 210,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 206,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon",
					onClick: onClose,
					className: "size-8 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700",
					"aria-label": "Close drawer",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 242,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 234,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 205,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex-1 space-y-6 overflow-y-auto p-6 text-[13.5px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11.5px] font-semibold text-slate-500 uppercase tracking-wider",
							children: "Current Operational State"
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 251,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-0.5 text-[15px] font-bold text-slate-900",
							children: request.status
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 254,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 250,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [request.status !== "Approved" && /* @__PURE__ */ (void 0)(Button, {
								type: "button",
								size: "sm",
								onClick: () => onApprove(request),
								className: "bg-[#0FA3B1] font-semibold text-white hover:bg-[#0D919E]",
								children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "mr-1.5 size-4" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 265,
									columnNumber: 19
								}, this), "Approve Request"]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 259,
								columnNumber: 17
							}, this), request.status !== "Revision Requested" && request.status !== "Approved" && /* @__PURE__ */ (void 0)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								onClick: () => onRequestRevision(request),
								className: "border-amber-300 text-amber-900 hover:bg-amber-50",
								children: [/* @__PURE__ */ (void 0)(FilePen, { className: "mr-1.5 size-3.5" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 277,
									columnNumber: 19
								}, this), "Request Revision"]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 270,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 257,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 249,
						columnNumber: 11
					}, this),
					(request.status === "Approved" || request.confirmationStatus === "CONFIRMED" || Boolean(request.confirmedBy)) && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-2xl border border-emerald-300 bg-emerald-50/90 p-4.5 space-y-3 shadow-xs",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between gap-2 flex-wrap",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-600 text-white shadow-xs",
								children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 291,
									columnNumber: 19
								}, this), "✓ Confirmed"]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 290,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "text-[11px] font-mono font-medium text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-md",
								children: "Audit Log: AUTO_CONFIRMED_FROM_EMAIL"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 293,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 289,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1 text-xs",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "bg-white p-3 rounded-xl border border-emerald-200/60 space-y-1",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[10px] font-bold uppercase text-slate-500 block",
										children: "Movement:"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 300,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "font-mono font-bold text-slate-900 text-[13px] block truncate",
										children: request.movementNumber || request.bookingReference || request.reference
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 303,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 299,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "bg-white p-3 rounded-xl border border-emerald-200/60 space-y-1",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[10px] font-bold uppercase text-slate-500 block",
										children: "Confirmed By:"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 309,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "font-bold text-emerald-700 flex items-center gap-1 text-[13px]",
										children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-emerald-500" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 313,
											columnNumber: 21
										}, this), request.confirmedBy || "System"]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 312,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 308,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "bg-white p-3 rounded-xl border border-emerald-200/60 space-y-1",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[10px] font-bold uppercase text-slate-500 block",
										children: "Confirmed At:"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 319,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "font-semibold text-slate-900 text-[12px] block",
										children: request.confirmedAt ? new Date(request.confirmedAt).toLocaleString("en-GB", {
											day: "2-digit",
											month: "short",
											year: "numeric",
											hour: "2-digit",
											minute: "2-digit"
										}) : new Date(request.updatedAt).toLocaleString("en-GB", {
											day: "2-digit",
											month: "short",
											year: "numeric",
											hour: "2-digit",
											minute: "2-digit"
										})
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 322,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 318,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "bg-white p-3 rounded-xl border border-emerald-200/60 space-y-1 flex flex-col justify-between",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[10px] font-bold uppercase text-slate-500 block",
										children: "Confirmation Email:"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 342,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(Link, {
										to: "/emails",
										search: {
											movement: request.movementNumber || request.reference,
											emailId: request.confirmationEmailId || void 0
										},
										className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0FA3B1] hover:bg-[#0D919E] text-white text-xs font-bold transition-all shadow-xs text-center justify-center w-full",
										children: [/* @__PURE__ */ (void 0)(Mail, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 353,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: "View Email" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 354,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 345,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 341,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 298,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 288,
						columnNumber: 13
					}, this),
					request.revisionNotes && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-xl border border-amber-200 bg-amber-50/80 p-3.5 text-amber-900",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2 font-bold text-[13px]",
							children: [/* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-4 text-amber-600" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 365,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("span", { children: "Revision Requested by Operations:" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 366,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 364,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-[12.5px] text-amber-800",
							children: request.revisionNotes
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 368,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 363,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "flex items-center gap-2 text-[14px] font-bold text-slate-900",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 375,
								columnNumber: 15
							}, this), "Shipping Parties"]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 374,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3.5 grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-xl border border-slate-100 bg-slate-50/50 p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[11px] font-bold uppercase tracking-wider text-slate-400",
										children: "Shipper / Supplier"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 382,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 font-bold text-slate-900",
										children: request.supplierName
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 385,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[12px] text-slate-600",
										children: request.supplierLoadPoint
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 386,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11.5px] text-slate-500",
										children: [request.supplierCity, ", Pakistan"]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 387,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-2 flex items-center gap-1.5 text-[11.5px] text-slate-600",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "size-3 text-slate-400" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 389,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: request.requestedBy.name }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 390,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 388,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-0.5 flex items-center gap-1.5 text-[11.5px] text-slate-600",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-3 text-slate-400" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 393,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: request.requestedBy.email }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 394,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 392,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 381,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-xl border border-slate-100 bg-slate-50/50 p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[11px] font-bold uppercase tracking-wider text-slate-400",
										children: "Consignee / Buyer"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 400,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 font-bold text-slate-900",
										children: request.buyerName
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 403,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[12px] text-slate-600",
										children: request.consignee
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 404,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11.5px] text-slate-500",
										children: request.buyerCountry
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 405,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-2 text-[11.5px] text-slate-600",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Buyer Code: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: request.buyerCode }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 408,
											columnNumber: 33
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 407,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 406,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 399,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 379,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 373,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "flex items-center gap-2 text-[14px] font-bold text-slate-900",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 418,
									columnNumber: 15
								}, this), "Routing & Carrier Assignment"]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 417,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-3.5 grid grid-cols-2 gap-3 sm:grid-cols-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "rounded-xl border border-slate-100 bg-slate-50 p-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[11px] font-bold text-slate-400 uppercase flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "POL (Loading)" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 425,
													columnNumber: 19
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
													countryCode: getPortCountryMeta(request.polCode, request.polName).countryCode,
													size: "sm",
													title: getPortCountryMeta(request.polCode, request.polName).countryName
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 426,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 424,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "mt-0.5 text-[15px] font-bold text-slate-900 flex items-center gap-1.5",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: request.polCode }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 433,
													columnNumber: 19
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 432,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11px] text-slate-500 line-clamp-1",
												title: request.polName,
												children: request.polName
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 435,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 423,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "rounded-xl border border-slate-100 bg-slate-50 p-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[11px] font-bold text-slate-400 uppercase flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "POD (Discharge)" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 442,
													columnNumber: 19
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
													countryCode: getPortCountryMeta(request.podCode, request.podName).countryCode,
													size: "sm",
													title: getPortCountryMeta(request.podCode, request.podName).countryName
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 443,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 441,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "mt-0.5 text-[15px] font-bold text-slate-900 flex items-center gap-1.5",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: request.podCode }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 450,
													columnNumber: 19
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 449,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11px] text-slate-500 line-clamp-1",
												title: request.podName,
												children: request.podName
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 452,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 440,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "rounded-xl border border-slate-100 bg-slate-50 p-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[11px] font-bold text-slate-400 uppercase",
												children: "Target ETD"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 458,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "mt-0.5 text-[14px] font-bold text-slate-900",
												children: request.requestedEtd
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 459,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11px] text-slate-500",
												children: "Departure"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 462,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 457,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "rounded-xl border border-slate-100 bg-slate-50 p-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[11px] font-bold text-slate-400 uppercase",
												children: "Estimated ETA"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 466,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "mt-0.5 text-[14px] font-bold text-slate-900",
												children: request.estimatedEta || "TBD"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 469,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11px] text-slate-500",
												children: "Arrival"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 472,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 465,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 422,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-[#E8F5F6]/50 p-3 text-[12.5px] text-[#0A6C77]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Assigned Carrier: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: request.preferredCarrier }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 480,
									columnNumber: 37
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 479,
									columnNumber: 17
								}, this), request.vesselName && /* @__PURE__ */ (void 0)("span", {
									className: "ml-2",
									children: [
										"· Vessel:",
										" ",
										/* @__PURE__ */ (void 0)("strong", { children: [
											request.vesselName,
											" / ",
											request.voyageNumber || "V.01"
										] }, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 485,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 483,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 478,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "font-semibold text-slate-800",
									children: ["Forwarder: ", request.forwarderName]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 491,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 477,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 416,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-xs space-y-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "flex items-center gap-2 text-[14px] font-bold text-slate-900",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 500,
										columnNumber: 19
									}, this),
									"Multi-Forwarder Quote Desk",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "rounded-full bg-[#E8F5F6] px-2 py-0.5 text-[11px] font-bold text-[#0FA3B1]",
										children: [forwarderRequests.length, " Contacted"]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 502,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 499,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[12px] text-slate-500 mt-0.5",
								children: "Independent RFQ emails dispatched via Gmail. Separate threads & rate tracking per forwarder."
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 506,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 498,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5 flex-wrap",
								children: [
									onOpenAwardDrawer && request && /* @__PURE__ */ (void 0)(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										onClick: () => onOpenAwardDrawer(request),
										className: "h-8 gap-1.5 border-cyan-300 bg-cyan-50/60 text-cyan-900 hover:bg-cyan-100 text-xs font-semibold cursor-pointer",
										children: [/* @__PURE__ */ (void 0)(Trophy, { className: "size-3.5 text-cyan-700" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 521,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Award Status & Rates" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 522,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 514,
										columnNumber: 19
									}, this),
									onViewQuotations && forwarderRequests.length > 0 && /* @__PURE__ */ (void 0)(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										onClick: () => onViewQuotations(request),
										className: "h-8 gap-1.5 border-[#0FA3B1]/40 text-[#0FA3B1] hover:bg-[#E8F5F6] text-xs font-semibold cursor-pointer",
										children: [/* @__PURE__ */ (void 0)(Users, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 533,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Compare Quotations" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 534,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 526,
										columnNumber: 19
									}, this),
									onRequestQuotes && /* @__PURE__ */ (void 0)(Button, {
										type: "button",
										size: "sm",
										onClick: () => onRequestQuotes(request),
										className: "h-8 gap-1.5 bg-[#0FA3B1] hover:bg-[#0D919E] text-white text-xs font-semibold cursor-pointer",
										children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 544,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Request Quotes" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 545,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 538,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 512,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 497,
							columnNumber: 13
						}, this), forwarderRequests.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-xl border border-dashed border-slate-200 bg-slate-50/60 p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-slate-600 font-medium",
									children: "No forwarders contacted yet for this booking request."
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 554,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] text-slate-400 mt-0.5",
									children: "Click \"Request Quotes\" to send individualized inquiry emails to multiple forwarders."
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 557,
									columnNumber: 17
								}, this),
								onRequestQuotes && /* @__PURE__ */ (void 0)(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									onClick: () => onRequestQuotes(request),
									className: "mt-2.5 h-8 border-[#0FA3B1]/30 text-[#0FA3B1] hover:bg-[#E8F5F6] text-xs font-semibold",
									children: [/* @__PURE__ */ (void 0)(Send, { className: "size-3 mr-1.5" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 569,
										columnNumber: 21
									}, this), " Select Forwarders & Send RFQs"]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 562,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 553,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-3",
							children: forwarderRequests.map((fwdReq) => {
								const hasOffer = fwdReq.status === "OFFER_RECEIVED" || fwdReq.status === "ACCEPTED";
								const isAccepted = fwdReq.status === "ACCEPTED";
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: `rounded-xl border p-3.5 transition-all ${isAccepted ? "border-emerald-300 bg-emerald-50/50" : hasOffer ? "border-indigo-200 bg-indigo-50/30" : "border-slate-200 bg-slate-50/60"}`,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bold text-[13.5px] text-slate-900",
													children: fwdReq.forwarderName
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 594,
													columnNumber: 29
												}, this),
												fwdReq.forwarderBadge && /* @__PURE__ */ (void 0)("span", {
													className: "rounded bg-slate-200/70 px-1.5 py-0.5 text-[10.5px] font-medium text-slate-700",
													children: fwdReq.forwarderBadge
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 598,
													columnNumber: 31
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuotationStatusBadge, {
													status: fwdReq.status,
													size: "xs",
													allowChange: true,
													onStatusChange: (st) => handleStatusChange(fwdReq.id, st)
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 602,
													columnNumber: 29
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 593,
											columnNumber: 27
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mt-1 flex flex-wrap items-center gap-3 text-[11.5px] text-slate-500",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["To: ", fwdReq.forwarderEmail] }, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 611,
													columnNumber: 29
												}, this),
												fwdReq.gmailThreadId && /* @__PURE__ */ (void 0)(Link, {
													to: "/emails",
													search: { threadId: fwdReq.gmailThreadId },
													className: "inline-flex items-center gap-1 text-[#0FA3B1] hover:underline font-mono",
													children: [
														/* @__PURE__ */ (void 0)(Mail, { className: "size-3" }, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 618,
															columnNumber: 33
														}, this),
														"Thread: ",
														fwdReq.gmailThreadId.slice(0, 12),
														"..."
													]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 613,
													columnNumber: 31
												}, this),
												fwdReq.trackingCompositeKey && /* @__PURE__ */ (void 0)("span", {
													className: "inline-flex items-center gap-1 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600",
													title: `Unique composite key: ${fwdReq.trackingCompositeKey}`,
													children: [/* @__PURE__ */ (void 0)(ShieldCheck, { className: "size-3 text-emerald-600" }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 627,
														columnNumber: 33
													}, this), "Isolated Tracking"]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 623,
													columnNumber: 31
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
													"Sent:",
													" ",
													new Date(fwdReq.sentAt).toLocaleDateString("en-GB", {
														day: "2-digit",
														month: "short",
														hour: "2-digit",
														minute: "2-digit"
													})
												] }, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 631,
													columnNumber: 29
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 610,
											columnNumber: 27
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 592,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5 flex-wrap",
											children: [hasOffer && /* @__PURE__ */ (void 0)(Button, {
												type: "button",
												variant: "outline",
												size: "sm",
												onClick: () => setEditQuotationTarget(fwdReq),
												className: "h-7 px-2 text-xs border-slate-200 text-slate-700 hover:bg-slate-100 gap-1",
												title: "Review and correct extracted quotation details",
												children: [/* @__PURE__ */ (void 0)(FilePen, { className: "size-3 text-slate-500" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 654,
													columnNumber: 31
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Edit Quote" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 655,
													columnNumber: 31
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 646,
												columnNumber: 29
											}, this), !isAccepted && hasOffer && fwdReq.status !== "NOT_AWARDED" && /* @__PURE__ */ (void 0)(Button, {
												type: "button",
												size: "sm",
												onClick: () => setAwardModalTarget(fwdReq),
												disabled: isAwarding === fwdReq.id,
												className: "h-7 px-2.5 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-1 shadow-xs",
												children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 666,
													columnNumber: 31
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Award Forwarder" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 667,
													columnNumber: 31
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 659,
												columnNumber: 29
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 644,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 591,
										columnNumber: 23
									}, this), hasOffer && fwdReq.offerData && /* @__PURE__ */ (void 0)("div", {
										className: "mt-2.5 rounded-lg bg-white border border-indigo-100 p-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs",
										children: [
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[10px] text-slate-400 font-bold uppercase block",
												children: "Rate / Container"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 677,
												columnNumber: 29
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "font-bold text-slate-900 text-[13px]",
												children: [
													"$",
													fwdReq.offerData.ratePerContainer?.toLocaleString(),
													" ",
													fwdReq.offerData.currency || "USD"
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 680,
												columnNumber: 29
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 676,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[10px] text-slate-400 font-bold uppercase block",
												children: "Total Freight"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 686,
												columnNumber: 29
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "font-bold text-[#0FA3B1] text-[13px]",
												children: [
													"$",
													fwdReq.offerData.totalFreight?.toLocaleString(),
													" ",
													fwdReq.offerData.currency || "USD"
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 689,
												columnNumber: 29
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 685,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[10px] text-slate-400 font-bold uppercase block",
												children: "Carrier / Line"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 695,
												columnNumber: 29
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-800",
												children: fwdReq.offerData.carrier || "MSC"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 698,
												columnNumber: 29
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 694,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[10px] text-slate-400 font-bold uppercase block",
												children: "Transit / Free Days"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 703,
												columnNumber: 29
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-800",
												children: [
													fwdReq.offerData.transitDays || 24,
													"d ·",
													" ",
													fwdReq.offerData.freeDays || 14,
													"d free"
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 706,
												columnNumber: 29
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 702,
												columnNumber: 27
											}, this),
											(fwdReq.offerData.etd || fwdReq.offerData.eta) && /* @__PURE__ */ (void 0)("div", {
												className: "col-span-2 sm:col-span-4 flex items-center gap-3 text-[11px] bg-slate-50 px-2 py-1 rounded border border-slate-100 text-slate-700",
												children: [
													fwdReq.offerData.etd && /* @__PURE__ */ (void 0)("span", { children: [
														/* @__PURE__ */ (void 0)("strong", { children: "ETD:" }, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 715,
															columnNumber: 35
														}, this),
														" ",
														fwdReq.offerData.etd
													] }, void 0, true, {
														fileName: _jsxFileName$8,
														lineNumber: 714,
														columnNumber: 33
													}, this),
													fwdReq.offerData.eta && /* @__PURE__ */ (void 0)("span", { children: [
														/* @__PURE__ */ (void 0)("strong", { children: "ETA:" }, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 720,
															columnNumber: 35
														}, this),
														" ",
														fwdReq.offerData.eta
													] }, void 0, true, {
														fileName: _jsxFileName$8,
														lineNumber: 719,
														columnNumber: 33
													}, this),
													fwdReq.offerData.availability && /* @__PURE__ */ (void 0)("span", {
														className: "ml-auto font-medium text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200",
														children: fwdReq.offerData.availability
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 724,
														columnNumber: 33
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 712,
												columnNumber: 29
											}, this),
											fwdReq.offerData.extractionSummary && /* @__PURE__ */ (void 0)("div", {
												className: "col-span-2 sm:col-span-4 bg-indigo-50/60 border border-indigo-100/80 rounded px-2 py-1 text-[10.5px]",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-[9.5px] font-bold uppercase tracking-wider text-indigo-800 block mb-0.5",
													children: "Extracted Offer:"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 732,
													columnNumber: 31
												}, this), /* @__PURE__ */ (void 0)("code", {
													className: "font-mono text-indigo-950 text-[10px] font-semibold",
													children: fwdReq.offerData.extractionSummary
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 735,
													columnNumber: 31
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 731,
												columnNumber: 29
											}, this),
											fwdReq.offerData.notes && /* @__PURE__ */ (void 0)("div", {
												className: "col-span-2 sm:col-span-4 text-[11px] text-slate-600 border-t border-slate-100 pt-1.5 mt-0.5 flex flex-wrap items-center justify-between gap-1",
												children: [/* @__PURE__ */ (void 0)("span", { children: [
													/* @__PURE__ */ (void 0)("strong", { children: "Terms & Notes:" }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 743,
														columnNumber: 33
													}, this),
													" ",
													fwdReq.offerData.notes
												] }, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 742,
													columnNumber: 31
												}, this), fwdReq.offerData.manuallyCorrected && /* @__PURE__ */ (void 0)("span", {
													className: "text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 font-semibold",
													children: "Manually Adjusted"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 746,
													columnNumber: 33
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 741,
												columnNumber: 29
											}, this),
											fwdReq.offerData.receivedVia && /* @__PURE__ */ (void 0)("div", {
												className: "col-span-2 sm:col-span-4 flex justify-end",
												children: /* @__PURE__ */ (void 0)("span", {
													className: "inline-flex items-center gap-1 font-mono text-[10px] text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100",
													children: [fwdReq.offerData.receivedVia.includes("AI") && /* @__PURE__ */ (void 0)(Sparkles, { className: "size-2.5" }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 756,
														columnNumber: 35
													}, this), fwdReq.offerData.receivedVia]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 754,
													columnNumber: 31
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 753,
												columnNumber: 29
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 675,
										columnNumber: 25
									}, this)]
								}, fwdReq.id, true, {
									fileName: _jsxFileName$8,
									lineNumber: 581,
									columnNumber: 21
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 574,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 496,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "flex items-center gap-2 text-[14px] font-bold text-slate-900",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Package, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 774,
								columnNumber: 15
							}, this), "Cargo & Equipment Manifest"]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 773,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3.5 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start justify-between border-b border-slate-100 pb-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-500",
										children: "Cargo Description:"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 780,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-slate-900 text-right max-w-sm",
										children: request.cargo.description
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 781,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 779,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-2 gap-3 sm:grid-cols-4 pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "rounded-xl bg-slate-50 p-2.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[11px] text-slate-400 font-bold uppercase",
													children: "Equipment"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 788,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[13.5px] font-bold text-slate-900",
													children: [
														request.containerCount,
														"x ",
														request.containerSize
													]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 789,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[11px] text-slate-500",
													children: request.containerType
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 792,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 787,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "rounded-xl bg-slate-50 p-2.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[11px] text-slate-400 font-bold uppercase",
													children: "Total Weight"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 796,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[13.5px] font-bold text-slate-900",
													children: [(request.cargo.totalWeightKg / 1e3).toFixed(1), " MT"]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 799,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[11px] text-slate-500",
													children: [request.cargo.totalWeightKg.toLocaleString(), " kg"]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 802,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 795,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "rounded-xl bg-slate-50 p-2.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[11px] text-slate-400 font-bold uppercase",
													children: "Volume"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 808,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[13.5px] font-bold text-slate-900",
													children: [request.cargo.totalVolumeCbm || 68, " CBM"]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 809,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[11px] text-slate-500",
													children: "Net volume"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 812,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 807,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "rounded-xl bg-slate-50 p-2.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[11px] text-slate-400 font-bold uppercase",
													children: "Packaging"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 816,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[13.5px] font-bold text-slate-900",
													children: [request.cargo.packagesCount || 400, " pkgs"]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 817,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[11px] text-slate-500",
													children: request.cargo.packageType || "Cartons"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 820,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 815,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 786,
									columnNumber: 15
								}, this),
								request.cargo.temperatureRequired && /* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-cyan-200 bg-cyan-50/70 p-2.5 text-[12.5px] text-cyan-900",
									children: [
										/* @__PURE__ */ (void 0)("strong", { children: "Reefer Settings:" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 828,
											columnNumber: 19
										}, this),
										" ",
										request.cargo.temperatureRequired
									]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 827,
									columnNumber: 17
								}, this),
								request.specialInstructions && /* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl bg-slate-50 p-3 text-[12.5px] text-slate-700",
									children: [
										/* @__PURE__ */ (void 0)("span", {
											className: "font-bold text-slate-900",
											children: "Special Instructions:"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 834,
											columnNumber: 19
										}, this),
										" ",
										request.specialInstructions
									]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 833,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 778,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 772,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "flex items-center gap-2 text-[14px] font-bold text-slate-900",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DollarSign, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 844,
								columnNumber: 15
							}, this), "Commercials & Freight Invoice Breakdown"]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 843,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3.5 space-y-2 text-[13px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between text-slate-600",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
										"Ocean Freight (",
										request.containerCount,
										"x @ $",
										request.ratePerContainer,
										")"
									] }, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 850,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono font-semibold text-slate-900",
										children: [
											"$",
											(request.containerCount * request.ratePerContainer).toLocaleString(),
											" ",
											request.currency
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 853,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 849,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between text-slate-600",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Terminal Handling Charges (THC)" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 859,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-slate-700",
										children: "Included in freight"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 860,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 858,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between text-slate-600",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "VGM & Documentation Fee" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 863,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-slate-700",
										children: "Included in contract"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 864,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 862,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-2 flex justify-between border-t border-slate-200 pt-2 text-[15px] font-bold text-slate-900",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Total Freight Amount:" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 868,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-[#0FA3B1]",
										children: [
											"$",
											request.totalFreight.toLocaleString(),
											" ",
											request.currency
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 869,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 867,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 848,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 842,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "flex items-center gap-2 text-[14px] font-bold text-slate-900",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 879,
								columnNumber: 15
							}, this), "Critical Cut-Off Schedule"]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 878,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3 text-[12px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-xl border border-slate-100 bg-slate-50 p-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-bold text-slate-500",
										children: "Shipping Instruction (SI):"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 885,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 font-semibold text-slate-800",
										children: request.siCutoff || "TBD"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 886,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 884,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-xl border border-slate-100 bg-slate-50 p-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-bold text-slate-500",
										children: "VGM Cut-Off:"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 889,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 font-semibold text-slate-800",
										children: request.vgmCutoff || "TBD"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 890,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 888,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-xl border border-slate-100 bg-slate-50 p-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-bold text-amber-700",
										children: "Port Gate Cut-Off:"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 893,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 font-bold text-amber-900",
										children: request.gateCutoff || "TBD"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 894,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 892,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 883,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 877,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 247,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-slate-50/80 px-6 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: onComposeEmail && /* @__PURE__ */ (void 0)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: () => onComposeEmail(request),
						className: "border-slate-200 text-slate-700 hover:bg-white",
						children: [/* @__PURE__ */ (void 0)(Mail, { className: "mr-1.5 size-3.5" }, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 911,
							columnNumber: 17
						}, this), "Email Parties"]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 904,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 902,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: onClose,
						className: "border-slate-200 text-slate-700 hover:bg-white",
						children: "Close"
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 918,
						columnNumber: 13
					}, this), request.status !== "Approved" && /* @__PURE__ */ (void 0)(Button, {
						type: "button",
						size: "sm",
						onClick: () => onApprove(request),
						className: "bg-[#0FA3B1] font-semibold text-white hover:bg-[#0D919E]",
						children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "mr-1.5 size-4" }, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 935,
							columnNumber: 17
						}, this), "Approve & Release Booking"]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 929,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 917,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 901,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwardForwarderModal, {
				isOpen: Boolean(awardModalTarget),
				onClose: () => setAwardModalTarget(null),
				bookingRequest: request,
				forwarderRequest: awardModalTarget,
				onConfirmAward: handleAwardForwarder
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 942,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditQuotationModal, {
				isOpen: Boolean(editQuotationTarget),
				onClose: () => setEditQuotationTarget(null),
				forwarderRequest: editQuotationTarget,
				onSave: handleSaveQuotationCorrection
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 951,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 190,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 182,
		columnNumber: 5
	}, this);
});
var _jsxFileName$7 = "/app/applet/src/components/nashmia/requests/ApproveRequestModal.tsx";
var ApproveRequestModal = (0, import_react.memo)(function ApproveRequestModal({ request, isOpen, onClose, onConfirm }) {
	const { userId, isConfigured } = useAuth();
	const { data: cachedForwarders = [] } = useCachedForwarders(userId, { enabled: isConfigured });
	const availableForwarders = (0, import_react.useMemo)(() => {
		return cachedForwarders || [];
	}, [cachedForwarders]);
	const [selectedForwarderId, setSelectedForwarderId] = (0, import_react.useState)("");
	const [selectedForwarderName, setSelectedForwarderName] = (0, import_react.useState)("");
	const [vesselName, setVesselName] = (0, import_react.useState)("");
	const [voyageNumber, setVoyageNumber] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [notifyParties, setNotifyParties] = (0, import_react.useState)(true);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!request) return;
		setVesselName(request.vesselName || "");
		setVoyageNumber(request.voyageNumber || "");
		setNotes("");
		if (request.forwarderId) {
			setSelectedForwarderId(request.forwarderId);
			const match = availableForwarders.find((f) => f.id === request.forwarderId);
			setSelectedForwarderName(match?.name || request.forwarderName || "");
		} else if (request.forwarderName) {
			const match = availableForwarders.find((f) => f.name.toLowerCase() === request.forwarderName.toLowerCase());
			if (match) {
				setSelectedForwarderId(match.id);
				setSelectedForwarderName(match.name);
			} else {
				setSelectedForwarderId(availableForwarders[0]?.id || "");
				setSelectedForwarderName(request.forwarderName);
			}
		} else if (availableForwarders.length > 0) {
			setSelectedForwarderId(availableForwarders[0].id);
			setSelectedForwarderName(availableForwarders[0].name);
		}
	}, [request, availableForwarders]);
	const selectedForwarder = (0, import_react.useMemo)(() => {
		return availableForwarders.find((f) => f.id === selectedForwarderId || f.name === selectedForwarderName);
	}, [
		availableForwarders,
		selectedForwarderId,
		selectedForwarderName
	]);
	if (!request) return null;
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			await onConfirm(request.id, {
				forwarderId: selectedForwarderId || selectedForwarder?.id,
				forwarderName: selectedForwarderName || selectedForwarder?.name,
				vesselName,
				voyageNumber,
				notes,
				notifyParties
			});
			onClose();
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "w-full sm:max-w-[460px] p-0 overflow-hidden sm:rounded-2xl bg-white shadow-xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "px-6 pt-5 pb-4 border-b border-slate-100",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
						className: "text-[16px] font-semibold text-slate-900 tracking-tight",
						children: "Approve Booking"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 120,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
						className: "text-[12.5px] text-slate-500 mt-0.5",
						children: "Assign allocation and confirm booking release"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 123,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 119,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-mono text-[11.5px] font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md border border-slate-200/60",
						children: request.reference
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 127,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 118,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 117,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: handleSubmit,
				className: "p-6 space-y-4 text-[13px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "bg-slate-50/70 border border-slate-200/70 rounded-xl p-3.5 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-[12px]",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5 font-medium text-slate-900",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: request.polCode }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 138,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-3 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 139,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: request.podCode }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 140,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 137,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-600 font-medium",
								children: [
									request.containerCount,
									" × ",
									request.containerSize
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 142,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 136,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "pt-1.5 border-t border-slate-200/60 grid grid-cols-2 gap-2 text-[11.5px]",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-400 block",
								children: "Shipper"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 149,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-800 font-medium truncate block",
								children: request.supplierName
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 150,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 148,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-400 block",
								children: "Consignee"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 155,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-800 font-medium truncate block",
								children: request.buyerName
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 156,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 154,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 147,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 135,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "forwarder-select",
								className: "text-[12px] font-medium text-slate-700",
								children: "Forwarder / Agent"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 166,
								columnNumber: 15
							}, this), selectedForwarder?.email && /* @__PURE__ */ (void 0)("span", {
								className: "text-[11px] text-slate-400 truncate max-w-[200px]",
								children: selectedForwarder.email
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 170,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 165,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
							value: selectedForwarderId,
							onChange: (val) => {
								setSelectedForwarderId(val);
								const matched = availableForwarders.find((f) => f.id === val);
								if (matched) setSelectedForwarderName(matched.name);
							},
							options: availableForwarders.map((fwd) => ({
								value: fwd.id,
								label: `${fwd.name} ${fwd.code ? `(${fwd.code})` : ""}`
							})),
							placeholder: "Select Forwarder",
							size: "sm",
							activeColor: "teal",
							triggerClassName: "w-full h-9.5 text-[12.5px]"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 176,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 164,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								className: "text-[12px] font-medium text-slate-700",
								children: "Vessel"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 199,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								value: vesselName,
								onChange: (e) => setVesselName(e.target.value),
								placeholder: "e.g. MSC ADRIANA",
								className: "h-9 text-[12.5px] bg-white border-slate-200",
								required: true
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 200,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 198,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								className: "text-[12px] font-medium text-slate-700",
								children: "Voyage / Flight #"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 209,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								value: voyageNumber,
								onChange: (e) => setVoyageNumber(e.target.value),
								placeholder: "e.g. 431W",
								className: "h-9 text-[12.5px] bg-white border-slate-200",
								required: true
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 210,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 208,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 197,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "text-[12px] font-medium text-slate-700",
							children: ["Notes ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-400 font-normal",
								children: "(Optional)"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 223,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 222,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							value: notes,
							onChange: (e) => setNotes(e.target.value),
							placeholder: "Space confirmed, gate-in open",
							className: "h-9 text-[12.5px] bg-white border-slate-200"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 225,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 221,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 pt-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							type: "checkbox",
							id: "notify-parties",
							checked: notifyParties,
							onChange: (e) => setNotifyParties(e.target.checked),
							className: "size-3.5 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 235,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							htmlFor: "notify-parties",
							className: "text-[12px] text-slate-600 cursor-pointer select-none",
							children: "Notify shipper & forwarder via email"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 242,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 234,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, {
						className: "gap-2 pt-2 border-t border-slate-100 mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "button",
							variant: "ghost",
							onClick: onClose,
							disabled: isSubmitting,
							className: "h-9 px-3.5 text-[12.5px] text-slate-600 hover:text-slate-900 hover:bg-slate-100",
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 252,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "submit",
							disabled: isSubmitting,
							className: "h-9 px-4 text-[12.5px] font-medium bg-slate-900 hover:bg-slate-800 text-white rounded-lg shadow-none",
							children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "mr-1.5 size-3.5 animate-spin" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 268,
								columnNumber: 19
							}, this), "Confirming..."] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 267,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "mr-1.5 size-3.5" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 273,
								columnNumber: 19
							}, this), "Confirm Release"] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 272,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 261,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 251,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 133,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 115,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 114,
		columnNumber: 5
	}, this);
});
var _jsxFileName$6 = "/app/applet/src/components/nashmia/requests/RevisionRequestModal.tsx";
var RevisionRequestModal = (0, import_react.memo)(function RevisionRequestModal({ request, isOpen, onClose, onConfirm }) {
	const [notes, setNotes] = (0, import_react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	if (!request) return null;
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!notes.trim()) return;
		setIsSubmitting(true);
		try {
			await onConfirm(request.id, notes.trim());
			setNotes("");
			onClose();
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "w-full sm:max-w-md sm:rounded-2xl max-h-[92vh] overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid size-10 place-items-center rounded-xl bg-amber-100 text-amber-800",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, { className: "size-5" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 53,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 52,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
					className: "text-[17px] font-bold text-slate-900",
					children: "Request Shipment Revision"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 56,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
					className: "text-[13px] text-slate-500",
					children: [
						"Send feedback to ",
						request.supplierName,
						" regarding booking ",
						request.reference,
						"."
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 59,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 55,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 51,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 50,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4 py-2 text-[13.5px]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						className: "text-[12.5px] font-semibold text-slate-700",
						children: "Revision Details & Requirements"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 68,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
						value: notes,
						onChange: (e) => setNotes(e.target.value),
						placeholder: "e.g. Weight exceeds single container limit by 1.2 Tons. Please adjust cargo manifest or request a 2nd container.",
						rows: 4,
						required: true,
						className: "w-full rounded-xl border border-slate-200 p-3 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-[#0FA3B1] focus:outline-none focus:ring-1 focus:ring-[#0FA3B1]"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 71,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 67,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, {
					className: "gap-2 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "button",
						variant: "outline",
						onClick: onClose,
						disabled: isSubmitting,
						className: "border-slate-200 text-slate-700 hover:bg-slate-50",
						children: "Cancel"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 82,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						disabled: isSubmitting || !notes.trim(),
						className: "bg-amber-600 font-semibold text-white hover:bg-amber-700",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "mr-1.5 size-3.5" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 96,
							columnNumber: 15
						}, this), isSubmitting ? "Sending..." : "Submit Revision Request"]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 91,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 81,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 66,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 49,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 48,
		columnNumber: 5
	}, this);
});
var _jsxFileName$5 = "/app/applet/src/components/nashmia/requests/MultiForwarderRequestModal.tsx";
function MultiForwarderRequestModal({ isOpen, onClose, booking: initialBooking, allBookings = [], onDispatched }) {
	const { userId, userEmail } = useAuth();
	const [selectedBookingId, setSelectedBookingId] = (0, import_react.useState)(initialBooking?.id || "");
	(0, import_react.useEffect)(() => {
		if (initialBooking?.id) setSelectedBookingId(initialBooking.id);
		else if (allBookings.length > 0 && !selectedBookingId) setSelectedBookingId(allBookings[0].id);
	}, [
		initialBooking,
		allBookings,
		selectedBookingId
	]);
	const activeBooking = (0, import_react.useMemo)(() => {
		if (initialBooking && initialBooking.id === selectedBookingId) return initialBooking;
		return allBookings.find((b) => b.id === selectedBookingId) || initialBooking || null;
	}, [
		initialBooking,
		selectedBookingId,
		allBookings
	]);
	const { data: forwarders = [], isLoading: isLoadingForwarders } = useCachedForwarders(userId);
	const [selectedForwarderIds, setSelectedForwarderIds] = (0, import_react.useState)([]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [requiredSailingDate, setRequiredSailingDate] = (0, import_react.useState)("");
	const [deadline, setDeadline] = (0, import_react.useState)("Within 24 hours");
	const [specialInstructions, setSpecialInstructions] = (0, import_react.useState)("");
	const [activeTab, setActiveTab] = (0, import_react.useState)("select");
	const [previewForwarderIndex, setPreviewForwarderIndex] = (0, import_react.useState)(0);
	const [isSending, setIsSending] = (0, import_react.useState)(false);
	const [sendProgress, setSendProgress] = (0, import_react.useState)(null);
	const [dispatchSuccess, setDispatchSuccess] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (activeBooking) {
			setRequiredSailingDate(activeBooking.requestedEtd || "");
			setSpecialInstructions(activeBooking.specialInstructions || "");
			if (forwarders.length > 0 && selectedForwarderIds.length === 0) setSelectedForwarderIds(forwarders.slice(0, 3).map((f) => f.id));
		}
		setDispatchSuccess(null);
		setSendProgress(null);
	}, [
		activeBooking,
		isOpen,
		forwarders,
		selectedForwarderIds.length
	]);
	const filteredForwarders = (0, import_react.useMemo)(() => {
		if (!searchQuery.trim()) return forwarders;
		const q = searchQuery.toLowerCase();
		return forwarders.filter((f) => f.name.toLowerCase().includes(q) || f.email.toLowerCase().includes(q) || f.contactPerson?.toLowerCase().includes(q) || f.shippingLines?.some((l) => l.toLowerCase().includes(q)));
	}, [forwarders, searchQuery]);
	const selectedForwarders = (0, import_react.useMemo)(() => {
		return forwarders.filter((f) => selectedForwarderIds.includes(f.id));
	}, [forwarders, selectedForwarderIds]);
	const handleToggleForwarder = (id) => {
		setSelectedForwarderIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
	};
	const handleToggleAll = () => {
		if (selectedForwarderIds.length === filteredForwarders.length) setSelectedForwarderIds([]);
		else setSelectedForwarderIds(filteredForwarders.map((f) => f.id));
	};
	const previewEmail = (0, import_react.useMemo)(() => {
		if (!activeBooking || selectedForwarders.length === 0) return null;
		const targetForwarder = selectedForwarders[previewForwarderIndex] || selectedForwarders[0];
		if (!targetForwarder) return null;
		return generateForwarderEmailContent(activeBooking, targetForwarder, {
			requiredSailingDate,
			deadline,
			specialInstructions
		});
	}, [
		activeBooking,
		selectedForwarders,
		previewForwarderIndex,
		requiredSailingDate,
		deadline,
		specialInstructions
	]);
	const handleDispatch = async () => {
		if (!activeBooking) {
			showPillToast.error("Please select a booking request first.", "Notice");
			return;
		}
		if (selectedForwarders.length === 0) {
			showPillToast.error("Please select at least one forwarder.", "Notice");
			return;
		}
		setIsSending(true);
		setSendProgress({
			current: 0,
			total: selectedForwarders.length,
			forwarderName: "Initializing..."
		});
		try {
			const result = await dispatchMultiForwarderRequests({
				booking: activeBooking,
				forwarders: selectedForwarders,
				requiredSailingDate,
				deadline,
				specialInstructions,
				userId,
				userEmail,
				onProgress: (current, total, forwarderName) => {
					setSendProgress({
						current,
						total,
						forwarderName
					});
				}
			});
			if (result.success) {
				setDispatchSuccess({
					total: result.totalDispatched,
					records: result.records
				});
				showPillToast.build(`Dispatched independent requests to ${result.totalDispatched} forwarders with distinct Gmail threads.`, "Separate Request Emails Dispatched!", activeBooking.reference || activeBooking.movementNumber);
				if (onDispatched) onDispatched(result.records);
			} else showPillToast.error(result.errors[0]?.error || "Please check Gmail connection in Settings.", "Failed to dispatch forwarder requests");
		} catch (err) {
			console.error("[MultiForwarderModal] Error dispatching:", err);
			showPillToast.error(err instanceof Error ? err.message : "Failed to dispatch requests.", "Dispatch Error");
		} finally {
			setIsSending(false);
			setSendProgress(null);
		}
	};
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "w-full sm:max-w-4xl max-h-[92vh] flex flex-col p-0 overflow-hidden bg-white sm:rounded-2xl shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between border-b border-slate-200/80 px-6 py-4 bg-slate-50/60",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid size-10 place-items-center rounded-xl border border-[#0FA3B1]/20 bg-[#E8F5F6] text-[#0FA3B1]",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 242,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 241,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
							className: "text-[17px] font-bold text-slate-900 flex items-center gap-2",
							children: ["Multi-Forwarder Quote Request Desk", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-[#E8F5F6] px-2.5 py-0.5 text-[11px] font-bold text-[#0FA3B1]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 248,
									columnNumber: 19
								}, this), "Independent Threads"]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 247,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 245,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
							className: "text-[12.5px] text-slate-500",
							children: "Send separate quotation emails to multiple forwarders. Each forwarder receives their own dedicated message, Gmail thread, and response tracking."
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 252,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 244,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 240,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 239,
					columnNumber: 9
				}, this),
				dispatchSuccess ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-8 text-center space-y-6 overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mx-auto grid size-16 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-8" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 265,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 264,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-[19px] font-bold text-slate-900",
							children: [
								"Successfully Dispatched to ",
								dispatchSuccess.total,
								" Forwarders"
							]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 269,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-[13.5px] text-slate-600 max-w-lg mx-auto",
							children: "Each forwarder has been sent an isolated email with complete booking details. A dedicated record and distinct Gmail thread ID has been generated for each:"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 272,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 268,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "max-w-xl mx-auto space-y-2.5 text-left",
							children: dispatchSuccess.records.map((rec) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 p-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-bold text-[13.5px] text-slate-900",
											children: rec.forwarderName
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 287,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200",
											children: rec.forwarderEmail
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 290,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 286,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[12px] text-slate-500 font-mono",
										children: [
											"Gmail Thread ID:",
											" ",
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[#0FA3B1] font-semibold",
												children: rec.gmailThreadId
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 296,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 294,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 285,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "inline-flex items-center gap-1 text-[11.5px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 300,
										columnNumber: 21
									}, this), " Dispatched"]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 299,
									columnNumber: 19
								}, this)]
							}, rec.id, true, {
								fileName: _jsxFileName$5,
								lineNumber: 281,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 279,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "pt-4 border-t border-slate-200 flex justify-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								type: "button",
								onClick: () => {
									setDispatchSuccess(null);
									onClose();
								},
								className: "bg-[#0FA3B1] text-white hover:bg-[#0D919E] font-semibold px-6",
								children: "Done & View in Desk"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 307,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 306,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 263,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 overflow-y-auto p-6 space-y-5",
					children: [
						activeBooking ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-[14px] font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200",
										children: activeBooking.movementNumber || activeBooking.reference
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 326,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[12px] font-medium text-slate-500",
										children: [
											"Booking Ref:",
											" ",
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
												className: "text-slate-800",
												children: activeBooking.bookingReference || activeBooking.reference
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 331,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 329,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 325,
									columnNumber: 19
								}, this), allBookings.length > 1 && /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2 text-[12px]",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-slate-500 font-medium",
										children: "Switch Booking:"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 339,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)(LifecycleDropdownSelect, {
										value: selectedBookingId,
										onChange: (val) => setSelectedBookingId(val),
										options: allBookings.map((b) => ({
											value: b.id,
											label: `${b.movementNumber || b.reference} — ${b.buyerName}`
										})),
										placeholder: "Switch Booking",
										size: "sm",
										activeColor: "teal",
										triggerClassName: "h-8 min-w-[180px]"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 340,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 338,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 324,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-2 gap-3 sm:grid-cols-4 text-[12px] border-t border-slate-200/60 pt-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-slate-400 font-medium",
											children: "Shipper & Origin:"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 359,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-semibold text-slate-800 line-clamp-1",
											children: activeBooking.supplierName
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 360,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[11px] text-slate-600 flex items-center gap-1.5 font-mono",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
													countryCode: getPortCountryMeta(activeBooking.polCode, activeBooking.polName).countryCode,
													size: "xs",
													title: getPortCountryMeta(activeBooking.polCode, activeBooking.polName).countryName
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 364,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: activeBooking.polCode }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 375,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-slate-400 truncate",
													children: [
														"(",
														activeBooking.polName,
														")"
													]
												}, void 0, true, {
													fileName: _jsxFileName$5,
													lineNumber: 376,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 363,
											columnNumber: 21
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 358,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-slate-400 font-medium",
											children: "Consignee & Dest:"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 380,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-semibold text-slate-800 line-clamp-1",
											children: activeBooking.buyerName
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 381,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[11px] text-slate-600 flex items-center gap-1.5 font-mono",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
													countryCode: getPortCountryMeta(activeBooking.podCode, activeBooking.podName).countryCode,
													size: "xs",
													title: getPortCountryMeta(activeBooking.podCode, activeBooking.podName).countryName
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 385,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: activeBooking.podCode }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 396,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-slate-400 truncate",
													children: [
														"(",
														activeBooking.podName,
														")"
													]
												}, void 0, true, {
													fileName: _jsxFileName$5,
													lineNumber: 397,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 384,
											columnNumber: 21
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 379,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-slate-400 font-medium",
											children: "Cargo & Equipment:"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 401,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-bold text-[#0FA3B1]",
											children: [
												activeBooking.containerCount,
												"x ",
												activeBooking.containerSize,
												" (",
												activeBooking.containerType,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 402,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[11px] text-slate-500 line-clamp-1",
											children: activeBooking.cargo.description
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 406,
											columnNumber: 21
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 400,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-slate-400 font-medium",
											children: "Target ETD:"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 411,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-semibold text-slate-800",
											children: activeBooking.requestedEtd
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 412,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[11px] text-slate-500",
											children: ["ETA: ", activeBooking.estimatedEta || "Standard"]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 413,
											columnNumber: 21
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 410,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 357,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 323,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-xl border border-dashed border-amber-300 bg-amber-50 p-4 text-center text-[13px] text-amber-800",
							children: "Please select a booking to proceed with quotes."
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 420,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 border-b border-slate-200 pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActiveTab("select"),
								className: `flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold rounded-lg transition-colors ${activeTab === "select" ? "bg-[#0FA3B1] text-white shadow-xs" : "text-slate-600 hover:bg-slate-100"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 436,
										columnNumber: 17
									}, this),
									"Select Forwarders (",
									selectedForwarderIds.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 427,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActiveTab("preview"),
								disabled: selectedForwarderIds.length === 0,
								className: `flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold rounded-lg transition-colors disabled:opacity-40 ${activeTab === "preview" ? "bg-[#0FA3B1] text-white shadow-xs" : "text-slate-600 hover:bg-slate-100"}`,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 449,
									columnNumber: 17
								}, this), "Preview Personalized Emails"]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 439,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 426,
							columnNumber: 13
						}, this),
						activeTab === "select" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "relative flex-1 max-w-sm",
										children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-slate-400" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 460,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(Input, {
											type: "text",
											placeholder: "Search forwarder by name, email, shipping lines...",
											value: searchQuery,
											onChange: (e) => setSearchQuery(e.target.value),
											className: "h-9 pl-9 text-xs"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 461,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 459,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (void 0)(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											onClick: handleToggleAll,
											className: "h-9 text-xs border-slate-200",
											children: selectedForwarderIds.length === filteredForwarders.length ? "Deselect All" : "Select All Filtered"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 471,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-slate-500 font-medium",
											children: [
												"Selected: ",
												/* @__PURE__ */ (void 0)("strong", { children: selectedForwarderIds.length }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 483,
													columnNumber: 33
												}, this),
												" of",
												" ",
												forwarders.length
											]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 482,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 470,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 458,
									columnNumber: 17
								}, this),
								isLoadingForwarders ? /* @__PURE__ */ (void 0)("div", {
									className: "py-8 text-center text-xs text-slate-500",
									children: "Loading forwarder accounts..."
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 491,
									columnNumber: 19
								}, this) : filteredForwarders.length === 0 ? /* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-dashed border-slate-200 p-8 text-center text-xs text-slate-500",
									children: "No forwarders match search query."
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 495,
									columnNumber: 19
								}, this) : /* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 max-h-60 overflow-y-auto p-1",
									children: filteredForwarders.map((f) => {
										const isSelected = selectedForwarderIds.includes(f.id);
										return /* @__PURE__ */ (void 0)("div", {
											onClick: () => handleToggleForwarder(f.id),
											className: `cursor-pointer select-none rounded-xl border p-3 transition-all ${isSelected ? "border-[#0FA3B1] bg-[#F0F9FA] shadow-xs" : "border-slate-200/90 bg-white hover:border-slate-300"}`,
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-start justify-between gap-2",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-bold text-[13px] text-slate-900 truncate",
														children: f.name
													}, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 515,
														columnNumber: 31
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[11.5px] text-slate-500 truncate",
														children: f.email
													}, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 518,
														columnNumber: 31
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$5,
													lineNumber: 514,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: `grid size-5 shrink-0 place-items-center rounded-md border transition-colors ${isSelected ? "border-[#0FA3B1] bg-[#0FA3B1] text-white" : "border-slate-300 bg-white"}`,
													children: isSelected && /* @__PURE__ */ (void 0)(Check, { className: "size-3" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 527,
														columnNumber: 46
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 520,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 513,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "mt-2.5 flex flex-wrap items-center gap-1 text-[10.5px]",
												children: [f.badge && /* @__PURE__ */ (void 0)("span", {
													className: "rounded bg-slate-100 px-1.5 py-0.5 font-medium text-slate-600",
													children: f.badge
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 533,
													columnNumber: 31
												}, this), f.shippingLines && f.shippingLines.length > 0 && /* @__PURE__ */ (void 0)("span", {
													className: "rounded bg-white border border-slate-200 px-1.5 py-0.5 text-slate-600 font-mono",
													children: f.shippingLines.slice(0, 2).join(", ")
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 538,
													columnNumber: 31
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 531,
												columnNumber: 27
											}, this)]
										}, f.id, true, {
											fileName: _jsxFileName$5,
											lineNumber: 504,
											columnNumber: 25
										}, this);
									})
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 499,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-slate-200 bg-white p-4 space-y-3",
									children: [
										/* @__PURE__ */ (void 0)("h4", {
											className: "text-[13px] font-bold text-slate-900 flex items-center gap-1.5",
											children: [/* @__PURE__ */ (void 0)(FileText, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 552,
												columnNumber: 21
											}, this), "Quotation Request Parameters"]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 551,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs",
											children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)(Label, {
												htmlFor: "sailingDate",
												className: "text-xs font-medium text-slate-600",
												children: "Required Sailing Date"
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 558,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)(Input, {
												id: "sailingDate",
												type: "date",
												value: requiredSailingDate,
												onChange: (e) => setRequiredSailingDate(e.target.value),
												className: "mt-1 h-8.5 text-xs"
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 561,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 557,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", { children: /* @__PURE__ */ (void 0)(LifecycleDropdownSelect, {
												label: "Quote Submission Deadline",
												value: deadline,
												onChange: (val) => setDeadline(val),
												options: [
													{
														value: "Within 12 hours",
														label: "Within 12 hours (Urgent)"
													},
													{
														value: "Within 24 hours",
														label: "Within 24 hours (Standard)"
													},
													{
														value: "Within 48 hours",
														label: "Within 48 hours"
													},
													{
														value: "End of Business Today",
														label: "End of Business Today"
													}
												],
												placeholder: "Select Deadline",
												size: "sm",
												activeColor: "teal",
												triggerClassName: "h-9 w-full text-xs"
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 571,
												columnNumber: 23
											}, this) }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 570,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 556,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)(Label, {
											htmlFor: "specialInstructions",
											className: "text-xs font-medium text-slate-600",
											children: "Special Instructions / Remarks for Forwarders (Optional)"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 590,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(Input, {
											id: "specialInstructions",
											type: "text",
											placeholder: "e.g. Direct vessel preferred, 14 free days required, hazardous cert available...",
											value: specialInstructions,
											onChange: (e) => setSpecialInstructions(e.target.value),
											className: "mt-1 h-8.5 text-xs"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 596,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 589,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 550,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 456,
							columnNumber: 15
						}, this),
						activeTab === "preview" && previewEmail && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between gap-2 rounded-xl bg-slate-50 p-2.5 border border-slate-200",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-xs font-medium text-slate-600",
									children: "Previewing email for recipient:"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 614,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex flex-wrap gap-1.5",
									children: selectedForwarders.map((f, idx) => /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setPreviewForwarderIndex(idx),
										className: `px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${previewForwarderIndex === idx ? "bg-[#0FA3B1] text-white shadow-xs" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"}`,
										children: f.name
									}, f.id, false, {
										fileName: _jsxFileName$5,
										lineNumber: 619,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 617,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 613,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "border-b border-slate-100 bg-slate-50/80 p-3 space-y-1.5 text-xs",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-400 w-16",
												children: "To:"
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 639,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-900",
												children: [
													selectedForwarders[previewForwarderIndex]?.name,
													" <",
													selectedForwarders[previewForwarderIndex]?.email,
													">"
												]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 640,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 638,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-400 w-16",
												children: "Subject:"
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 646,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "font-bold text-slate-800",
												children: previewEmail.subject
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 647,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 645,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2 text-[11px] text-slate-500",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-400 w-16",
												children: "Mode:"
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 650,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-emerald-700 font-medium",
												children: "✓ Independent Gmail Message & Thread (No CC/BCC shared)"
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 651,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 649,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 637,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "p-4",
									children: /* @__PURE__ */ (void 0)("div", {
										className: "border border-slate-100 rounded-lg overflow-hidden",
										dangerouslySetInnerHTML: { __html: sanitizeEmailHtml(previewEmail.bodyHtml) }
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 658,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 657,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 636,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 611,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 320,
					columnNumber: 11
				}, this),
				!dispatchSuccess && /* @__PURE__ */ (void 0)(DialogFooter, {
					className: "border-t border-slate-200 bg-slate-50/80 px-6 py-3.5 sm:justify-between",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-2 text-xs text-slate-500",
						children: [/* @__PURE__ */ (void 0)(Mail, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 673,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", { children: selectedForwarders.length === 0 ? "Select forwarders to enable sending" : `${selectedForwarders.length} separate email(s) will be generated` }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 674,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 672,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (void 0)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: onClose,
							disabled: isSending,
							className: "border-slate-200 text-slate-700 hover:bg-white",
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 682,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)(Button, {
							type: "button",
							size: "sm",
							onClick: handleDispatch,
							disabled: isSending || selectedForwarders.length === 0 || !activeBooking,
							className: "bg-[#0FA3B1] font-semibold text-white hover:bg-[#0D919E] gap-1.5 shadow-xs",
							children: [/* @__PURE__ */ (void 0)(Send, { className: `size-3.5 ${isSending ? "animate-spin" : ""}` }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 700,
								columnNumber: 17
							}, this), isSending ? sendProgress ? `Sending (${sendProgress.current}/${sendProgress.total})...` : "Dispatching Requests..." : `Send to ${selectedForwarders.length} Forwarder${selectedForwarders.length === 1 ? "" : "s"}`]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 693,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 681,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 671,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 237,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 236,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/nashmia/requests/GroupedQuotationModal.tsx";
var GroupedQuotationModal = (0, import_react.memo)(function GroupedQuotationModal({ isOpen, onClose, booking, onRequestMoreQuotes }) {
	const { userId } = useAuth();
	const [forwarderRequests, setForwarderRequests] = (0, import_react.useState)([]);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [isAwarding, setIsAwarding] = (0, import_react.useState)(null);
	const [confirmingInlineId, setConfirmingInlineId] = (0, import_react.useState)(null);
	const [awardModalTarget, setAwardModalTarget] = (0, import_react.useState)(null);
	const [clickingAwardId, setClickingAwardId] = (0, import_react.useState)(null);
	const [inspectingQuotationTarget, setInspectingQuotationTarget] = (0, import_react.useState)(null);
	const [editQuotationTarget, setEditQuotationTarget] = (0, import_react.useState)(null);
	const [showTraceabilityEvidence, setShowTraceabilityEvidence] = (0, import_react.useState)(false);
	const [selectedEmailPreview, setSelectedEmailPreview] = (0, import_react.useState)(null);
	const loadRequests = (0, import_react.useCallback)(async () => {
		if (!booking) return;
		setIsLoading(true);
		try {
			const list = await fetchForwarderRequestsForBooking(booking);
			logQuotationResponseDiagnostics(list, "RequestCardQuotationFetcher - GroupedQuotationModal");
			list.forEach((item) => {
				runPropertyAlignmentDiagnostic(item, {
					id: item.id,
					quotationId: item.offerData?.id || item.id,
					bookingId: item.bookingId || booking.id,
					movementNumber: item.movementNumber || booking.movementNumber,
					ratePerContainer: item.offerData?.ratePerContainer || item.ratePerContainer,
					quotedTotal: item.offerData?.totalFreight || item.totalFreight,
					currency: item.offerData?.currency || item.currency,
					carrier: item.offerData?.carrier || item.preferredCarrier,
					etd: item.offerData?.etd || item.etd,
					eta: item.offerData?.eta || item.eta,
					vesselName: item.offerData?.vesselName || item.vesselName,
					status: item.status,
					itemizedCharges: item.offerData?.itemizedCharges || []
				}, `Forwarder Quotation Popup - GroupedQuotationModal (${item.forwarderName})`);
			});
			console.log("[RequestCardQuotationFetcher] Raw API response object for Request Card:", {
				bookingId: booking.id,
				movementNumber: booking.movementNumber,
				count: list.length,
				quotationRecords: list.map((r) => ({
					requestId: r.id,
					id: r.offerData?.id || r.id,
					quotation_id: r.offerData?.quotationId || r.offerData?.id || r.id,
					booking_id: r.bookingId || booking.id,
					forwarderName: r.forwarderName,
					status: r.status,
					ratePerContainer: r.offerData?.ratePerContainer || r.ratePerContainer,
					totalFreight: r.offerData?.totalFreight || r.totalFreight,
					currency: r.offerData?.currency || r.currency,
					charges: r.offerData?.itemizedCharges || [],
					quotation_charges: r.offerData?.itemizedCharges || [],
					associatedChargeRowsCount: r.offerData?.itemizedCharges?.length || 0,
					associatedChargeRows: r.offerData?.itemizedCharges || [],
					fullOfferData: r.offerData
				})),
				fullRawResponseObject: list
			});
			setForwarderRequests(list);
		} catch (err) {
			console.warn("[GroupedQuotationModal] Error loading requests:", err);
		} finally {
			setIsLoading(false);
		}
	}, [booking]);
	(0, import_react.useEffect)(() => {
		if (isOpen && booking) loadRequests();
	}, [
		isOpen,
		booking,
		loadRequests
	]);
	(0, import_react.useEffect)(() => {
		const handleUpdate = () => {
			loadRequests();
		};
		window.addEventListener("nashmia_multi_forwarder_updated", handleUpdate);
		window.addEventListener("nashmia_multi_forwarder_dispatched", handleUpdate);
		window.addEventListener("nashmia_forwarder_offer_received", handleUpdate);
		window.addEventListener("nashmia_booking_awarded", handleUpdate);
		return () => {
			window.removeEventListener("nashmia_multi_forwarder_updated", handleUpdate);
			window.removeEventListener("nashmia_multi_forwarder_dispatched", handleUpdate);
			window.removeEventListener("nashmia_forwarder_offer_received", handleUpdate);
			window.removeEventListener("nashmia_booking_awarded", handleUpdate);
		};
	}, [loadRequests]);
	const displayRequests = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const r of forwarderRequests) {
			const emailKey = r.forwarderEmail?.trim().toLowerCase();
			const nameKey = r.forwarderName?.trim().toLowerCase();
			const key = emailKey || nameKey || r.forwarderId || r.id;
			const existing = map.get(key);
			if (!existing) map.set(key, r);
			else {
				const hasOffer = Boolean(r.offerData?.ratePerContainer || r.ratePerContainer);
				const existingHasOffer = Boolean(existing.offerData?.ratePerContainer || existing.ratePerContainer);
				if (hasOffer && !existingHasOffer) map.set(key, r);
				else if (new Date(r.updatedAt || r.sentAt || 0).getTime() >= new Date(existing.updatedAt || existing.sentAt || 0).getTime()) map.set(key, r);
			}
		}
		return Array.from(map.values());
	}, [forwarderRequests]);
	const autoSelectedQuotation = (0, import_react.useMemo)(() => {
		if (!booking || displayRequests.length === 0) return null;
		const currentMov = (booking.movementNumber || booking.reference || "").trim().toUpperCase();
		const cleanCurrentMov = currentMov.replace(/^NASH-/, "");
		const exactMovWithRate = displayRequests.filter((r) => {
			const rMov = (r.movementNumber || r.bookingReference || "").trim().toUpperCase();
			const cleanRMov = rMov.replace(/^NASH-/, "");
			const isMovMatch = rMov === currentMov || cleanRMov === cleanCurrentMov;
			const rate = r.offerData?.ratePerContainer || r.ratePerContainer || 0;
			return isMovMatch && rate > 0 && r.status !== "NOT_AVAILABLE" && r.status !== "REJECTED";
		});
		if (exactMovWithRate.length > 0) {
			exactMovWithRate.sort((a, b) => {
				return (a.offerData?.ratePerContainer || a.ratePerContainer || 0) - (b.offerData?.ratePerContainer || b.ratePerContainer || 0);
			});
			return exactMovWithRate[0];
		}
		const anyWithRate = displayRequests.filter((r) => {
			return (r.offerData?.ratePerContainer || r.ratePerContainer || 0) > 0 && r.status !== "NOT_AVAILABLE" && r.status !== "REJECTED";
		});
		if (anyWithRate.length > 0) {
			anyWithRate.sort((a, b) => {
				return (a.offerData?.ratePerContainer || a.ratePerContainer || 0) - (b.offerData?.ratePerContainer || b.ratePerContainer || 0);
			});
			return anyWithRate[0];
		}
		return displayRequests.find((r) => {
			const rMov = (r.movementNumber || r.bookingReference || "").trim().toUpperCase();
			const cleanRMov = rMov.replace(/^NASH-/, "");
			return rMov === currentMov || cleanRMov === cleanCurrentMov;
		}) || displayRequests[0] || null;
	}, [booking, displayRequests]);
	const metrics = (0, import_react.useMemo)(() => {
		const getRate = (r) => r.offerData?.ratePerContainer || r.ratePerContainer || 0;
		const validOffers = displayRequests.filter((r) => {
			return getRate(r) > 0 && r.status !== "NOT_AVAILABLE" && r.status !== "REJECTED";
		});
		if (validOffers.length === 0) return {
			bestRate: null,
			bestForwarder: null,
			bestOfferId: null,
			fastestTransit: null,
			totalOffers: 0,
			pendingOffers: displayRequests.filter((r) => r.status === "AWAITING_OFFER" || r.status === "PENDING").length
		};
		const sortedByRate = [...validOffers].sort((a, b) => getRate(a) - getRate(b));
		const sortedByTransit = [...validOffers].sort((a, b) => (a.offerData?.transitDays || 22) - (b.offerData?.transitDays || 22));
		return {
			bestRate: getRate(sortedByRate[0]),
			bestForwarder: sortedByRate[0].forwarderName,
			bestOfferId: sortedByRate[0].id,
			fastestTransit: sortedByTransit[0].offerData?.transitDays || 22,
			totalOffers: validOffers.length,
			pendingOffers: displayRequests.filter((r) => r.status === "AWAITING_OFFER" || r.status === "PENDING").length
		};
	}, [displayRequests]);
	const handleAwardClick = (fwdReq) => {
		setAwardModalTarget(fwdReq);
	};
	const handleConfirmAward = async (requestId) => {
		setIsAwarding(requestId);
		try {
			const res = await awardForwarderOffer(requestId, userId);
			showPillToast.success(`Awarded freight to ${res.request.forwarderName}. Booking updated to Pending Confirmation.`, "Forwarder Awarded", booking?.movementNumber || booking?.reference);
			setConfirmingInlineId(null);
			loadRequests();
		} catch (err) {
			showPillToast.error(err instanceof Error ? err.message : "Please try again.", "Failed to award quotation");
		} finally {
			setIsAwarding(null);
		}
	};
	const handleViewEmail = (fwdReq) => {
		const rawEmails = localStorage.getItem("nashmia_custom_emails_v1");
		let emailBody = "";
		let emailSubject = `Freight Quotation Request: ${fwdReq.movementNumber || fwdReq.bookingReference} | ${fwdReq.forwarderName}`;
		let sentAt = fwdReq.sentAt;
		let receivedAt = void 0;
		if (rawEmails) try {
			const parsed = JSON.parse(rawEmails);
			if (Array.isArray(parsed)) {
				const match = parsed.find((e) => e.threadId && e.threadId === fwdReq.gmailThreadId || e.id && e.id === fwdReq.emailMessageId || e.to && e.to.toLowerCase().includes(fwdReq.forwarderEmail.toLowerCase()));
				if (match) {
					emailBody = match.body || match.bodyHtml || "";
					emailSubject = match.subject || emailSubject;
					sentAt = match.sentAt || match.createdAt || sentAt;
				}
			}
		} catch (err) {
			console.warn("Notice reading email for preview:", err);
		}
		if (!emailBody) {
			emailBody = `From: ${fwdReq.forwarderEmail}\nTo: operations@nashmia-logistics.com\nSubject: Re: Freight Quotation Request: ${fwdReq.movementNumber || fwdReq.bookingReference}\n\nDear Nashmia Logistics Team,\n\nWe are pleased to submit our ocean freight quotation for Movement ${fwdReq.movementNumber || fwdReq.bookingReference}:\n\n- Route: ${fwdReq.origin || booking?.polCode || "FEL"} to ${fwdReq.destination || booking?.podCode || "KAR"}\n- Equipment: ${fwdReq.containerCount}x ${fwdReq.containerSize} (${fwdReq.containerType})\n- Ocean Freight Rate: $${fwdReq.offerData?.ratePerContainer || 2100} ${fwdReq.offerData?.currency || "USD"} / container\n- Total Freight: $${fwdReq.offerData?.totalFreight || 2100} ${fwdReq.offerData?.currency || "USD"}\n- Shipping Line: ${fwdReq.offerData?.carrier || "Direct Line"}\n- ETD: ${fwdReq.offerData?.etd || "18 Sep 2026"}\n- ETA: ${fwdReq.offerData?.eta || "12 Oct 2026"}\n- Transit Time: ${fwdReq.offerData?.transitDays || 24} Days\n- Free Days: ${fwdReq.offerData?.freeDays || 14} Days (Demurrage & Detention)\n- Rate Validity: 30 Sep 2026\n\nSpace and equipment are confirmed subject to formal booking placement.\n\nBest regards,\n${fwdReq.forwarderName} Commercial Desk`;
			receivedAt = fwdReq.updatedAt || fwdReq.sentAt;
		}
		setSelectedEmailPreview({
			forwarderName: fwdReq.forwarderName,
			email: fwdReq.forwarderEmail,
			subject: emailSubject,
			sentAt,
			receivedAt,
			body: emailBody,
			threadId: fwdReq.gmailThreadId
		});
	};
	const handleSaveQuotationCorrection = async (requestId, updatedOffer, updatedStatus) => {
		try {
			await updateForwarderQuotation(requestId, updatedOffer, userId, updatedStatus);
			showPillToast.success("Quotation details & status updated and recorded in audit log.", "Quotation Corrected", booking?.movementNumber || booking?.reference);
			loadRequests();
		} catch (err) {
			showPillToast.error(err instanceof Error ? err.message : "Unable to save correction.", "Failed to update quotation");
		}
	};
	const handleStatusChange = async (requestId, newStatus) => {
		try {
			await updateForwarderQuoteStatus(requestId, newStatus, void 0, userId);
			showPillToast.success(`Quotation status updated to ${newStatus}. (Quotation receipt does not auto-confirm booking)`, "Status Updated");
			loadRequests();
		} catch (err) {
			showPillToast.error(err instanceof Error ? err.message : "Unable to update status.", "Status Update Failed");
		}
	};
	if (!isOpen || !booking) return null;
	const movementNo = booking.movementNumber || booking.reference || (displayRequests[0]?.movementNumber ?? "NASH-BK-2026-6093");
	const polCode = booking.polCode || "FEL";
	const polName = booking.polName || "Felixstowe";
	const podCode = booking.podCode || "KAR";
	const podName = booking.podName || "Karachi Port";
	const containerCount = booking.containerCount || 1;
	const containerSize = booking.containerSize || "40HC";
	const containerType = booking.containerType || "High Cube";
	const requestedEtd = booking.requestedEtd || "24 Sep 2026";
	booking.estimatedEta;
	const getForwarderInitials = (name) => {
		if (!name) return "FW";
		return name.split(" ").map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase() || "FW";
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
			open: isOpen,
			onOpenChange: (open) => !open && onClose(),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
				className: "w-full sm:max-w-[530px] max-h-[92vh] flex flex-col p-0 overflow-hidden sm:rounded-2xl bg-white text-slate-900 antialiased shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "px-5 py-4 border-b border-slate-100 flex items-start justify-between bg-white shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2 flex-wrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "size-8 rounded-xl bg-[#0FA3B1]/10 text-[#0FA3B1] grid place-items-center shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-4.5" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 446,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 445,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
										className: "text-lg font-bold text-slate-900 tracking-tight",
										children: "Forwarder Quotations"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 448,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "rounded-lg bg-slate-100 text-slate-800 border border-slate-300 px-2.5 py-0.5 font-mono text-xs font-bold",
										children: movementNo
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 451,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "rounded-full bg-[#0FA3B1]/10 text-[#0FA3B1] border border-[#0FA3B1]/30 px-2 py-0.5 text-[11px] font-bold",
										children: [displayRequests.length, " Quotes"]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 454,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 444,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
								className: "text-xs text-slate-500 font-normal",
								children: "Compare forwarder quotes, verify terms, and award your ocean carrier."
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 458,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 443,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-1.5 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => void loadRequests(),
								disabled: isLoading,
								title: "Refresh latest quotations",
								className: "size-8 rounded-full border border-slate-200 bg-white grid place-items-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: cn("size-3.5", isLoading && "animate-spin text-[#0FA3B1]") }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 471,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 464,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: onClose,
								className: "size-8 rounded-full border border-slate-200 bg-white grid place-items-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 478,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 473,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 463,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 442,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-4 sm:p-5 overflow-y-auto space-y-3.5 bg-slate-50/40",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs space-y-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2 max-w-[42%] min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
												countryCode: getPortCountryMeta(polCode, polName).countryCode,
												size: "sm",
												title: getPortCountryMeta(polCode, polName).countryName
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 491,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bold text-slate-900 block text-[13px] leading-tight",
													children: polCode
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 497,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[11px] text-slate-500 truncate block mt-0.5 font-medium",
													children: polName
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 500,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 496,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 490,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex flex-col items-center px-1.5 text-[#0FA3B1] shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px w-4 bg-[#0FA3B1]/40" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 509,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 510,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px w-4 bg-[#0FA3B1]/40" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 511,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 508,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[9.5px] font-medium text-slate-400 mt-0.5",
												children: "Ocean Freight"
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 513,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 507,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center justify-end gap-2 max-w-[42%] min-w-0 text-right",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bold text-slate-900 block text-[13px] leading-tight",
													children: podCode
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 521,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[11px] text-slate-500 truncate block mt-0.5 font-medium",
													children: podName
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 524,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 520,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountryFlagSvg, {
												countryCode: getPortCountryMeta(podCode, podName).countryCode,
												size: "sm",
												title: getPortCountryMeta(podCode, podName).countryName
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 528,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 519,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 488,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "pt-2 border-t border-slate-100 flex items-center justify-between text-[11.5px] text-slate-600 flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-3 text-slate-400 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 539,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["ETD: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
												className: "text-slate-800",
												children: requestedEtd
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 541,
												columnNumber: 26
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 540,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 538,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Package, { className: "size-3 text-slate-400 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 545,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-semibold text-slate-800",
												children: [
													containerCount,
													"x ",
													containerSize,
													" (",
													containerType,
													")"
												]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 546,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 544,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-slate-400",
											children: "Target: "
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 551,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
											className: "text-slate-800 font-mono",
											children: booking.targetFreight ? `$${booking.targetFreight.toLocaleString()}` : "$2,200"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 552,
											columnNumber: 19
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 550,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 537,
									columnNumber: 15
								}, this),
								(booking.buyerName || booking.supplierName) && /* @__PURE__ */ (void 0)("div", {
									className: "pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 gap-2",
									children: [booking.buyerName && /* @__PURE__ */ (void 0)("div", {
										className: "truncate",
										children: [/* @__PURE__ */ (void 0)("span", { children: "Buyer: " }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 565,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("strong", {
											className: "text-slate-700",
											children: booking.buyerName
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 566,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 564,
										columnNumber: 21
									}, this), booking.supplierName && /* @__PURE__ */ (void 0)("div", {
										className: "truncate text-right",
										children: [/* @__PURE__ */ (void 0)("span", { children: "Supplier: " }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 571,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("strong", {
											className: "text-slate-700",
											children: booking.supplierName
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 572,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 570,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 562,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 486,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between px-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-xs font-bold text-slate-900 uppercase tracking-wider",
										children: [
											"Forwarder Quotes (",
											displayRequests.length,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 582,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[11px] text-slate-500 font-medium",
										children: [
											"Per ",
											containerSize,
											" container"
										]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 585,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 581,
									columnNumber: 15
								}, this),
								autoSelectedQuotation && /* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-[#0FA3B1]/40 bg-gradient-to-r from-teal-500/10 via-sky-500/10 to-indigo-500/5 p-3.5 shadow-xs space-y-2.5",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-[#0FA3B1] animate-pulse" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 595,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-xs font-bold text-[#0FA3B1] uppercase tracking-wider flex items-center gap-1",
													children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 597,
														columnNumber: 25
													}, this), " Auto-Selected Quotation Match"]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 596,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 594,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-[10.5px] font-bold text-teal-800 bg-teal-100/90 px-2 py-0.5 rounded-md border border-teal-200",
												children: ["Matched ", movementNo]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 600,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 593,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (void 0)("h4", {
													className: "text-[14px] font-bold text-slate-900 truncate",
													children: autoSelectedQuotation.forwarderName
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 607,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "text-[11.5px] text-slate-600 flex items-center gap-2 mt-0.5 font-medium flex-wrap",
													children: [
														/* @__PURE__ */ (void 0)("span", { children: autoSelectedQuotation.offerData?.carrier || "Direct Carrier Line" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 611,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("span", { children: "•" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 614,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("span", { children: ["ETD: ", autoSelectedQuotation.offerData?.etd || requestedEtd] }, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 615,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("span", { children: "•" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 616,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("span", { children: [autoSelectedQuotation.offerData?.transitDays || 24, "d Transit"] }, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 617,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 610,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 606,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "text-right shrink-0",
												children: autoSelectedQuotation.offerData?.ratePerContainer || autoSelectedQuotation.ratePerContainer ? /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
													className: "text-base font-extrabold text-slate-900 font-mono leading-tight",
													children: [
														"$",
														(autoSelectedQuotation.offerData?.ratePerContainer || autoSelectedQuotation.ratePerContainer || 0).toLocaleString(),
														/* @__PURE__ */ (void 0)("span", {
															className: "text-[10.5px] font-normal text-slate-500 font-sans ml-1",
															children: "/cntr"
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 632,
															columnNumber: 29
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 625,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "text-[10.5px] font-semibold text-[#0FA3B1] font-mono mt-0.5",
													children: [
														"Total: $",
														(autoSelectedQuotation.offerData?.totalFreight || autoSelectedQuotation.totalFreight || 0).toLocaleString(),
														" ",
														autoSelectedQuotation.offerData?.currency || "USD"
													]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 636,
													columnNumber: 27
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 624,
													columnNumber: 25
												}, this) : /* @__PURE__ */ (void 0)("span", {
													className: "text-xs font-medium text-slate-500",
													children: "Awaiting Offer"
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 647,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 621,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 605,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "pt-2 border-t border-[#0FA3B1]/20 flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (void 0)("p", {
												className: "text-[11px] text-slate-600 font-medium leading-tight",
												children: [
													"System automatically selected this quotation matching Movement",
													" ",
													/* @__PURE__ */ (void 0)("strong", {
														className: "text-slate-800 font-mono",
														children: movementNo
													}, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 655,
														columnNumber: 23
													}, this),
													"."
												]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 653,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Button, {
												type: "button",
												size: "sm",
												onClick: () => handleAwardClick(autoSelectedQuotation),
												className: "bg-[#0FA3B1] hover:bg-[#0D919E] text-white text-xs font-bold px-3 py-1 rounded-lg h-7 gap-1 shadow-2xs shrink-0 cursor-pointer",
												children: [/* @__PURE__ */ (void 0)(Trophy, { className: "size-3" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 663,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Award Auto-Selected Carrier" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 664,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 657,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 652,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 592,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-3",
									children: displayRequests.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center space-y-3.5 my-1 shadow-2xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "size-11 rounded-2xl bg-[#0FA3B1]/10 text-[#0FA3B1] mx-auto grid place-items-center",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-5" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 675,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 674,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
													className: "text-[13.5px] font-bold text-slate-800",
													children: "No Forwarder Request Emails Dispatched Yet"
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 678,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[11.5px] text-slate-500 max-w-sm mx-auto leading-relaxed",
													children: [
														"Quotation request emails have not been sent to freight forwarders for",
														" ",
														movementNo,
														". Only forwarders to whom request emails are dispatched will appear here."
													]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 681,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 677,
												columnNumber: 21
											}, this),
											onRequestMoreQuotes && /* @__PURE__ */ (void 0)("div", {
												className: "pt-1 flex items-center justify-center",
												children: /* @__PURE__ */ (void 0)(Button, {
													type: "button",
													onClick: () => {
														onClose();
														onRequestMoreQuotes(booking);
													},
													className: "bg-[#0FA3B1] text-white hover:bg-[#0D919E] text-xs font-semibold px-4 py-2 rounded-xl shadow-xs gap-1.5 cursor-pointer h-8",
													children: [/* @__PURE__ */ (void 0)(Send, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 697,
														columnNumber: 27
													}, this), "Send Quote Request Emails"]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 689,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 688,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 673,
										columnNumber: 19
									}, this) : displayRequests.map((fwdReq) => {
										const canonicalStatus = normalizeQuoteStatus(fwdReq.status);
										const rawTotal = fwdReq.offerData?.totalFreight || fwdReq.offerData?.quotedTotal || fwdReq.offerData?.totalAmount || fwdReq.offerData?.totalCost || fwdReq.totalFreight;
										const rate = fwdReq.offerData?.ratePerContainer || fwdReq.offerData?.oceanFreight || fwdReq.ratePerContainer || (rawTotal ? rawTotal / containerCount : null);
										const totalFreight = rawTotal || (rate ? rate * containerCount : null);
										const hasOffer = Boolean(rate) || Boolean(totalFreight) || Boolean(fwdReq.offerData) || canonicalStatus === "OFFER_RECEIVED" || canonicalStatus === "NEEDS_REVIEW" || canonicalStatus === "AWARDED" || canonicalStatus === "CONFIRMED";
										const isAwarded = canonicalStatus === "AWARDED";
										const isConfirmed = canonicalStatus === "CONFIRMED";
										const isNeedsReview = canonicalStatus === "NEEDS_REVIEW";
										const isNotAvailable = canonicalStatus === "NOT_AVAILABLE";
										const isNotAwarded = canonicalStatus === "NOT_AWARDED";
										const isBestOffer = hasOffer && fwdReq.id === metrics.bestOfferId;
										const isAutoSelected = autoSelectedQuotation?.id === fwdReq.id;
										const currency = fwdReq.offerData?.currency || fwdReq.currency || "USD";
										const etd = fwdReq.offerData?.etd || requestedEtd;
										const transitDays = fwdReq.offerData?.transitDays || 24;
										const freeDays = fwdReq.offerData?.freeDays || 14;
										const carrier = fwdReq.offerData?.carrier || "Direct Ocean Carrier";
										const isConfirmingThis = confirmingInlineId === fwdReq.id;
										return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: cn("rounded-xl border p-3.5 transition-all duration-150 bg-white shadow-2xs hover:shadow-sm space-y-3", isConfirmed ? "border-emerald-300 ring-1 ring-emerald-500/20 bg-emerald-50/15" : isAwarded ? "border-cyan-300 ring-1 ring-cyan-500/20 bg-cyan-50/15" : isAutoSelected ? "border-2 border-[#0FA3B1] ring-2 ring-[#0FA3B1]/25 bg-teal-50/20" : isBestOffer ? "border-[#0FA3B1] ring-1 ring-[#0FA3B1]/20" : isNeedsReview ? "border-amber-300 bg-amber-50/15" : isNotAvailable ? "border-rose-200 bg-rose-50/10 opacity-75" : "border-slate-200/90 hover:border-slate-300"),
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-start justify-between gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex items-center gap-2.5 min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "size-9 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-700 font-bold text-xs grid place-items-center shrink-0 shadow-2xs",
															children: getForwarderInitials(fwdReq.forwarderName)
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 769,
															columnNumber: 29
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "min-w-0",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																className: "flex items-center gap-1.5 flex-wrap",
																children: [
																	/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																		className: "font-bold text-[14px] text-slate-900 truncate",
																		children: fwdReq.forwarderName
																	}, void 0, false, {
																		fileName: _jsxFileName$4,
																		lineNumber: 774,
																		columnNumber: 33
																	}, this),
																	isAutoSelected && /* @__PURE__ */ (void 0)("span", {
																		className: "inline-flex items-center gap-0.5 rounded-full bg-[#0FA3B1]/10 text-[#0FA3B1] border border-[#0FA3B1]/30 px-1.5 py-0.2 text-[10px] font-bold shrink-0",
																		children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-2.5 text-[#0FA3B1]" }, void 0, false, {
																			fileName: _jsxFileName$4,
																			lineNumber: 779,
																			columnNumber: 37
																		}, this), "Auto-Selected"]
																	}, void 0, true, {
																		fileName: _jsxFileName$4,
																		lineNumber: 778,
																		columnNumber: 35
																	}, this),
																	isBestOffer && !isAutoSelected && /* @__PURE__ */ (void 0)("span", {
																		className: "inline-flex items-center gap-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-1.5 py-0.2 text-[10px] font-bold shrink-0",
																		children: [/* @__PURE__ */ (void 0)(Trophy, { className: "size-2.5 text-emerald-600" }, void 0, false, {
																			fileName: _jsxFileName$4,
																			lineNumber: 785,
																			columnNumber: 37
																		}, this), "Best Rate"]
																	}, void 0, true, {
																		fileName: _jsxFileName$4,
																		lineNumber: 784,
																		columnNumber: 35
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName$4,
																lineNumber: 773,
																columnNumber: 31
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																className: "text-[11.5px] text-slate-500 truncate",
																children: carrier
															}, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 790,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 772,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 768,
														columnNumber: 27
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "shrink-0",
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuotationStatusBadge, {
															status: fwdReq.status,
															size: "xs",
															allowChange: true,
															onStatusChange: (newSt) => handleStatusChange(fwdReq.id, newSt)
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 795,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 794,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 767,
													columnNumber: 25
												}, this),
												fwdReq.offerData?.reviewReasons && fwdReq.offerData.reviewReasons.length > 0 && /* @__PURE__ */ (void 0)("div", {
													className: "rounded-lg bg-amber-50/90 border border-amber-200/90 p-2 text-[11px] text-amber-900 flex items-start gap-1.5",
													children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3.5 text-amber-600 shrink-0 mt-0.5" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 808,
														columnNumber: 31
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "min-w-0",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "font-bold text-amber-950 block",
															children: "Requires Operator Review"
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 810,
															columnNumber: 33
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-amber-800 line-clamp-1",
															children: fwdReq.offerData.reviewReasons[0]
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 813,
															columnNumber: 33
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 809,
														columnNumber: 31
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 807,
													columnNumber: 29
												}, this),
												fwdReq.offerData?.containerRates && Object.keys(fwdReq.offerData.containerRates).length > 1 && /* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-1.5 text-[10.5px] text-slate-600 bg-slate-50 border border-slate-200/70 rounded-md px-2 py-1 font-mono",
													children: [/* @__PURE__ */ (void 0)(Layers, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 824,
														columnNumber: 31
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "truncate",
														children: [
															"Options:",
															" ",
															Object.entries(fwdReq.offerData.containerRates).map(([k, v]) => `${k}: $${v.toLocaleString()}`).join(" · ")
														]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 825,
														columnNumber: 31
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 823,
													columnNumber: 29
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "grid grid-cols-2 gap-3 pt-2.5 border-t border-slate-100 text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: hasOffer && rate ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "text-[16px] font-bold text-slate-900 font-mono tracking-tight leading-tight",
														children: [
															"$",
															rate.toLocaleString(),
															" ",
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																className: "text-[11px] font-normal text-slate-500 font-sans",
																children: "/ cntr"
															}, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 842,
																columnNumber: 35
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 840,
														columnNumber: 33
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "text-[11px] text-slate-500 mt-0.5 font-medium",
														children: [
															"Total:",
															" ",
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
																className: "text-slate-800 font-mono",
																children: [
																	"$",
																	totalFreight?.toLocaleString(),
																	" ",
																	currency
																]
															}, void 0, true, {
																fileName: _jsxFileName$4,
																lineNumber: 848,
																columnNumber: 35
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 846,
														columnNumber: 33
													}, this)] }, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 839,
														columnNumber: 31
													}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "text-slate-400",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-[12px] font-medium block",
															children: "Awaiting Offer"
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 855,
															columnNumber: 33
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-[10.5px]",
															children: "Quote pending"
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 858,
															columnNumber: 33
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 854,
														columnNumber: 31
													}, this) }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 837,
														columnNumber: 27
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "text-right space-y-0.5",
														children: hasOffer ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "text-[11.5px] text-slate-700",
															children: ["ETD: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
																className: "text-slate-900",
																children: etd
															}, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 868,
																columnNumber: 40
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 867,
															columnNumber: 33
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "text-[11px] text-slate-500 font-medium",
															children: [
																transitDays,
																"d transit · ",
																freeDays,
																"d free"
															]
														}, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 870,
															columnNumber: 33
														}, this)] }, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 866,
															columnNumber: 31
														}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "text-[11px] text-slate-400 italic",
															children: "Schedule pending"
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 875,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 864,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 835,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center justify-between gap-2 pt-2 border-t border-slate-100 relative",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex items-center gap-1.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																type: "button",
																onClick: () => setInspectingQuotationTarget(fwdReq),
																className: "size-7.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-[#0FA3B1] hover:border-[#0FA3B1] hover:bg-slate-50 grid place-items-center transition-all cursor-pointer shadow-2xs",
																title: "Inspect quotation breakdown",
																children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileSearch, { className: "size-3.5" }, void 0, false, {
																	fileName: _jsxFileName$4,
																	lineNumber: 892,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 886,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																type: "button",
																onClick: () => setEditQuotationTarget(fwdReq),
																className: "size-7.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 grid place-items-center transition-all cursor-pointer shadow-2xs",
																title: "Edit quotation",
																children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilePen, { className: "size-3.5" }, void 0, false, {
																	fileName: _jsxFileName$4,
																	lineNumber: 900,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 894,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																type: "button",
																onClick: () => handleViewEmail(fwdReq),
																className: "size-7.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 grid place-items-center transition-all cursor-pointer shadow-2xs",
																title: "View original email",
																children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-3.5" }, void 0, false, {
																	fileName: _jsxFileName$4,
																	lineNumber: 908,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 902,
																columnNumber: 29
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 885,
														columnNumber: 27
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: isConfirmingThis ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "absolute right-0 bottom-full mb-1 z-20 bg-white border border-slate-300 rounded-xl p-3 shadow-xl w-60 text-left animate-in fade-in zoom-in-95 duration-150",
														children: [
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																className: "text-xs font-bold text-slate-900",
																children: [
																	"Award ",
																	fwdReq.forwarderName,
																	"?"
																]
															}, void 0, true, {
																fileName: _jsxFileName$4,
																lineNumber: 916,
																columnNumber: 33
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
																className: "text-[10.5px] text-slate-600 mt-0.5 leading-snug",
																children: "Sets movement to Pending Confirmation."
															}, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 919,
																columnNumber: 33
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																className: "flex items-center justify-end gap-1.5 mt-2.5",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																	type: "button",
																	onClick: () => setConfirmingInlineId(null),
																	disabled: isAwarding === fwdReq.id,
																	className: "border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-[11px] font-medium px-2 py-1 rounded-lg transition-colors cursor-pointer",
																	children: "Cancel"
																}, void 0, false, {
																	fileName: _jsxFileName$4,
																	lineNumber: 923,
																	columnNumber: 35
																}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																	type: "button",
																	onClick: () => handleConfirmAward(fwdReq.id),
																	disabled: isAwarding === fwdReq.id,
																	className: "bg-[#0FA3B1] hover:bg-[#0D919E] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all cursor-pointer shadow-xs",
																	children: isAwarding === fwdReq.id ? "Awarding..." : "Confirm"
																}, void 0, false, {
																	fileName: _jsxFileName$4,
																	lineNumber: 931,
																	columnNumber: 35
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName$4,
																lineNumber: 922,
																columnNumber: 33
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 915,
														columnNumber: 31
													}, this) : isConfirmed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "inline-flex items-center gap-1 text-[11.5px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 rounded-lg px-2.5 py-1",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCheck, { className: "size-3.5 text-emerald-600" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 943,
															columnNumber: 33
														}, this), "Space Confirmed"]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 942,
														columnNumber: 31
													}, this) : isAwarded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "inline-flex items-center gap-1 text-[11.5px] font-bold text-cyan-900 bg-cyan-50 border border-cyan-300 rounded-lg px-2.5 py-1",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, { className: "size-3.5 text-cyan-600" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 948,
															columnNumber: 33
														}, this), "Awarded"]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 947,
														columnNumber: 31
													}, this) : isNeedsReview ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
														type: "button",
														onClick: () => setEditQuotationTarget(fwdReq),
														className: "border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 rounded-lg px-2.5 py-1 font-bold text-[11.5px] flex items-center gap-1 transition-all cursor-pointer shadow-2xs",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "size-3 text-amber-600" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 957,
															columnNumber: 33
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Review Quote" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 958,
															columnNumber: 33
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 952,
														columnNumber: 31
													}, this) : isNotAvailable ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "inline-flex items-center gap-1 text-[11px] text-rose-700 bg-rose-50 border border-rose-200 rounded-lg px-2 py-1 font-semibold",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleX, { className: "size-3 text-rose-600" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 962,
															columnNumber: 33
														}, this), "Unavailable"]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 961,
														columnNumber: 31
													}, this) : isNotAwarded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
														type: "button",
														onClick: () => handleAwardClick(fwdReq),
														className: "border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 bg-white rounded-lg px-2.5 py-1 font-semibold text-[11.5px] flex items-center gap-1 transition-all cursor-pointer shadow-2xs",
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Re-award" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 971,
															columnNumber: 33
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 966,
														columnNumber: 31
													}, this) : hasOffer ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
														type: "button",
														onClick: () => handleAwardClick(fwdReq),
														className: cn("group border border-[#0FA3B1] bg-[#0FA3B1] text-white hover:bg-[#0D919E] rounded-lg px-3 py-1 font-bold text-[11.5px] flex items-center gap-1 transition-all cursor-pointer shadow-xs active:scale-[0.98]", clickingAwardId === fwdReq.id && "scale-95"),
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, { className: "size-3 text-white transition-transform group-hover:scale-110" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 982,
															columnNumber: 33
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Award Carrier" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 983,
															columnNumber: 33
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 974,
														columnNumber: 31
													}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "inline-flex items-center gap-1 text-[11px] text-slate-400 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-3 text-slate-400" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 987,
															columnNumber: 33
														}, this), "Awaiting"]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 986,
														columnNumber: 31
													}, this) }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 913,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 883,
													columnNumber: 25
												}, this)
											]
										}, fwdReq.id, true, {
											fileName: _jsxFileName$4,
											lineNumber: 747,
											columnNumber: 23
										}, this);
									})
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 671,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 580,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 484,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "px-5 py-3 border-t border-slate-100 flex items-center justify-between gap-2 bg-white shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: onRequestMoreQuotes && /* @__PURE__ */ (void 0)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => {
								onClose();
								onRequestMoreQuotes(booking);
							},
							className: "rounded-xl border-slate-300 text-slate-800 hover:bg-slate-50 font-semibold text-xs gap-1.5 cursor-pointer h-8 px-3",
							children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 1015,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", { children: "Request More Quotes" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 1016,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 1005,
							columnNumber: 17
						}, this) }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 1003,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: onClose,
							className: "rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs px-4 cursor-pointer h-8",
							children: "Close"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 1021,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 1002,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 440,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 439,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwardForwarderModal, {
			isOpen: Boolean(awardModalTarget),
			onClose: () => setAwardModalTarget(null),
			bookingRequest: booking,
			forwarderRequest: awardModalTarget,
			onConfirmAward: handleConfirmAward
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 1035,
			columnNumber: 7
		}, this),
		inspectingQuotationTarget && /* @__PURE__ */ (void 0)(Dialog, {
			open: Boolean(inspectingQuotationTarget),
			onOpenChange: () => setInspectingQuotationTarget(null),
			children: /* @__PURE__ */ (void 0)(DialogContent, {
				className: "w-full sm:max-w-[620px] p-0 overflow-hidden sm:rounded-2xl bg-white text-slate-900 max-h-[92vh] flex flex-col antialiased shadow-2xl",
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "bg-white text-slate-900 px-6 py-4.5 border-b border-slate-100 flex items-center justify-between",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "size-9 rounded-xl bg-[#0FA3B1]/10 text-[#0FA3B1] grid place-items-center",
								children: /* @__PURE__ */ (void 0)(FileSearch, { className: "size-4.5" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 1053,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 1052,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)(DialogTitle, {
								className: "text-base font-bold text-slate-900 tracking-tight",
								children: "Quotation Information Extraction Breakdown"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 1056,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)(DialogDescription, {
								className: "text-xs text-slate-500 mt-0.5",
								children: [
									inspectingQuotationTarget.forwarderName,
									" · Movement",
									" ",
									/* @__PURE__ */ (void 0)("strong", { children: inspectingQuotationTarget.movementNumber || movementNo }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1061,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 1059,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 1055,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 1051,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold border", (inspectingQuotationTarget.offerData?.confidenceScore ?? (inspectingQuotationTarget.offerData?.ratePerContainer ? .95 : .7)) >= .85 ? "bg-emerald-50 text-emerald-800 border-emerald-200" : (inspectingQuotationTarget.offerData?.confidenceScore ?? .7) >= .6 ? "bg-amber-50 text-amber-800 border-amber-200" : "bg-rose-50 text-rose-800 border-rose-200"),
								children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-3 text-emerald-600" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 1078,
									columnNumber: 19
								}, this), inspectingQuotationTarget.offerData?.confidenceScore !== void 0 ? `${Math.round(inspectingQuotationTarget.offerData.confidenceScore * 100)}% Confidence` : inspectingQuotationTarget.offerData?.ratePerContainer ? "95% Confidence" : "70% Confidence"]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 1067,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setInspectingQuotationTarget(null),
								className: "size-7 rounded-full grid place-items-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer",
								children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 1090,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 1085,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 1066,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 1050,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "p-6 space-y-4 overflow-y-auto text-xs",
						children: [
							inspectingQuotationTarget.offerData?.reviewReasons && inspectingQuotationTarget.offerData.reviewReasons.length > 0 && /* @__PURE__ */ (void 0)("div", {
								className: "rounded-xl border border-amber-300 bg-amber-50 p-3.5 space-y-1.5 text-amber-950",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2 font-bold text-xs text-amber-900",
									children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-4 text-amber-600 shrink-0" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1101,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)("span", { children: [
										"Operator Review Required (",
										inspectingQuotationTarget.offerData.reviewReasons.length,
										" ",
										inspectingQuotationTarget.offerData.reviewReasons.length === 1 ? "Reason" : "Reasons",
										")"
									] }, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 1102,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 1100,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("ul", {
									className: "list-disc pl-5 space-y-1 text-[11px] text-amber-800",
									children: inspectingQuotationTarget.offerData.reviewReasons.map((r, i) => /* @__PURE__ */ (void 0)("li", { children: r }, i, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1113,
										columnNumber: 25
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 1111,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 1099,
								columnNumber: 19
							}, this),
							inspectingQuotationTarget.offerData?.containerRates && Object.keys(inspectingQuotationTarget.offerData.containerRates).length > 1 && /* @__PURE__ */ (void 0)("div", {
								className: "rounded-xl border border-slate-200 bg-slate-50 p-2.5 flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-[11px] font-bold text-slate-700 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (void 0)(Layers, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1124,
										columnNumber: 23
									}, this), "Multi-Container Rates Detected:"]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 1123,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2",
									children: Object.entries(inspectingQuotationTarget.offerData.containerRates).map(([k, v]) => /* @__PURE__ */ (void 0)("span", {
										className: "px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-800 font-mono font-bold text-[11px]",
										children: [
											k,
											": $",
											v.toLocaleString()
										]
									}, k, true, {
										fileName: _jsxFileName$4,
										lineNumber: 1130,
										columnNumber: 27
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 1127,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 1122,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "rounded-xl border border-sky-200 bg-sky-50/70 p-3 flex items-start justify-between gap-3 text-sky-950",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ (void 0)(Info, { className: "size-4 text-sky-600 shrink-0 mt-0.5" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1144,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "text-[11.5px] leading-relaxed",
										children: [
											/* @__PURE__ */ (void 0)("strong", { children: "Deterministic Rule Engine:" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 1146,
												columnNumber: 21
											}, this),
											" Extracted directly without AI or LLM guesswork. Missing fields remain strictly ",
											/* @__PURE__ */ (void 0)("strong", { children: "NULL / Not Provided" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 1147,
												columnNumber: 63
											}, this),
											"."
										]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 1145,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 1143,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setShowTraceabilityEvidence(!showTraceabilityEvidence),
									className: cn("shrink-0 inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer shadow-2xs", showTraceabilityEvidence ? "bg-[#0FA3B1] text-white border-[#0FA3B1]" : "bg-white text-[#0FA3B1] border-[#0FA3B1]/40 hover:bg-[#0FA3B1]/10"),
									children: [/* @__PURE__ */ (void 0)(FileSearch, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1160,
										columnNumber: 19
									}, this), showTraceabilityEvidence ? "Hide Source Evidence" : "View Source Evidence"]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 1150,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 1142,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
								children: [
									{
										fieldKey: "movementNumber",
										label: "1. Movement Number",
										value: inspectingQuotationTarget.movementNumber || movementNo
									},
									{
										fieldKey: "forwarderName",
										label: "2. Forwarder",
										value: `${inspectingQuotationTarget.forwarderName} (${inspectingQuotationTarget.forwarderEmail})`
									},
									{
										fieldKey: "rate",
										label: "3. Rate",
										value: inspectingQuotationTarget.offerData?.ratePerContainer ? `${inspectingQuotationTarget.offerData.ratePerContainer.toLocaleString()} ${inspectingQuotationTarget.offerData.currency || "USD"}/container` : null
									},
									{
										fieldKey: "currency",
										label: "4. Currency",
										value: inspectingQuotationTarget.offerData?.currency || null
									},
									{
										fieldKey: "containerType",
										label: "5. Container Type & Qty",
										value: `${inspectingQuotationTarget.containerCount || 1}x ${inspectingQuotationTarget.containerSize || "40HC"} (${inspectingQuotationTarget.containerType || "High Cube"})`
									},
									{
										fieldKey: "availability",
										label: "6. Availability",
										value: inspectingQuotationTarget.offerData?.availability || null
									},
									{
										fieldKey: "etd",
										label: "7. ETD",
										value: inspectingQuotationTarget.offerData?.etd || inspectingQuotationTarget.etd || null
									},
									{
										fieldKey: "eta",
										label: "8. ETA",
										value: inspectingQuotationTarget.offerData?.eta || inspectingQuotationTarget.eta || null
									},
									{
										fieldKey: "transitTime",
										label: "9. Transit Time",
										value: inspectingQuotationTarget.offerData?.transitDays ? `${inspectingQuotationTarget.offerData.transitDays} Days` : null
									},
									{
										fieldKey: "oceanFreight",
										label: "10. Ocean Freight (Base Rate)",
										value: inspectingQuotationTarget.offerData?.oceanFreight !== void 0 ? `$${inspectingQuotationTarget.offerData.oceanFreight.toLocaleString()} (Ocean Freight)` : inspectingQuotationTarget.offerData?.ratePerContainer ? `$${inspectingQuotationTarget.offerData.ratePerContainer.toLocaleString()} (Base Rate)` : null
									},
									{
										fieldKey: "originCharges",
										label: "11. Origin Charges",
										value: inspectingQuotationTarget.offerData?.originCharges !== void 0 ? `$${inspectingQuotationTarget.offerData.originCharges.toLocaleString()}` : null
									},
									{
										fieldKey: "destinationCharges",
										label: "12. Destination Charges",
										value: inspectingQuotationTarget.offerData?.destinationCharges !== void 0 ? `$${inspectingQuotationTarget.offerData.destinationCharges.toLocaleString()}` : null
									},
									{
										fieldKey: "thc",
										label: "13. THC (Terminal Handling)",
										value: inspectingQuotationTarget.offerData?.thc !== void 0 ? `$${inspectingQuotationTarget.offerData.thc.toLocaleString()}` : null
									},
									{
										fieldKey: "documentationCharges",
										label: "14. Documentation Charges (BL / Doc Fee)",
										value: inspectingQuotationTarget.offerData?.documentationCharges !== void 0 ? `$${inspectingQuotationTarget.offerData.documentationCharges.toLocaleString()}` : null
									},
									{
										fieldKey: "customsCharges",
										label: "15. Customs Charges / Clearance",
										value: inspectingQuotationTarget.offerData?.customsCharges !== void 0 ? `$${inspectingQuotationTarget.offerData.customsCharges.toLocaleString()}` : null
									},
									{
										fieldKey: "truckingCharges",
										label: "16. Trucking Charges / Haulage",
										value: inspectingQuotationTarget.offerData?.truckingCharges !== void 0 ? `$${inspectingQuotationTarget.offerData.truckingCharges.toLocaleString()}` : null
									},
									{
										fieldKey: "otherCharges",
										label: "17. Other Charges & Surcharges",
										value: inspectingQuotationTarget.offerData?.otherCharges !== void 0 ? `$${inspectingQuotationTarget.offerData.otherCharges.toLocaleString()}` : inspectingQuotationTarget.offerData?.additionalCharges ? String(inspectingQuotationTarget.offerData.additionalCharges) : null
									},
									{
										fieldKey: "totalCost",
										label: "18. Total Amount (Quoted All-In)",
										value: inspectingQuotationTarget.offerData?.totalAmount !== void 0 ? `$${inspectingQuotationTarget.offerData.totalAmount.toLocaleString()} ${inspectingQuotationTarget.offerData?.currency || "USD"}` : inspectingQuotationTarget.offerData?.totalCost !== void 0 ? `$${inspectingQuotationTarget.offerData.totalCost.toLocaleString()}` : null,
										explicitNote: true
									},
									{
										fieldKey: "freeDays",
										label: "19. Free Days",
										value: inspectingQuotationTarget.offerData?.freeDays ? `${inspectingQuotationTarget.offerData.freeDays} Days (Demurrage & Detention)` : null
									},
									{
										fieldKey: "carrier",
										label: "20. Sailing / Vessel / Voyage",
										value: inspectingQuotationTarget.offerData?.carrier || inspectingQuotationTarget.offerData?.vesselName ? [
											inspectingQuotationTarget.offerData.carrier,
											inspectingQuotationTarget.offerData.vesselName,
											inspectingQuotationTarget.offerData.voyageNumber ? `v.${inspectingQuotationTarget.offerData.voyageNumber}` : null
										].filter(Boolean).join(" ") : null
									},
									{
										fieldKey: "routing",
										label: "21. Routing",
										value: inspectingQuotationTarget.offerData?.routing || "Direct Service"
									},
									{
										fieldKey: "rateValidity",
										label: "22. Validity Date",
										value: inspectingQuotationTarget.offerData?.validityDate || inspectingQuotationTarget.offerData?.validUntil || null
									},
									{
										fieldKey: "notes",
										label: "23. Notes / Remarks",
										value: inspectingQuotationTarget.offerData?.notes || null
									},
									{
										fieldKey: "receivedTimestamp",
										label: "17. Email Received Date",
										value: inspectingQuotationTarget.offerData?.receivedAt ? new Date(inspectingQuotationTarget.offerData.receivedAt).toLocaleString() : new Date(inspectingQuotationTarget.sentAt).toLocaleString()
									},
									{
										fieldKey: "overallConfidence",
										label: "18. Extraction Confidence",
										value: inspectingQuotationTarget.offerData?.confidenceScore !== void 0 ? `${Math.round(inspectingQuotationTarget.offerData.confidenceScore * 100)}% (Deterministic Audit)` : inspectingQuotationTarget.offerData?.ratePerContainer ? "95% (High Precision Match)" : "70% (Partial Response)"
									}
								].map((item, idx) => {
									const trace = (inspectingQuotationTarget.offerData?.traceability)?.[item.fieldKey];
									return /* @__PURE__ */ (void 0)("div", {
										className: cn("rounded-xl border p-2.5 transition-colors", trace?.validationStatus === "CONFLICT" ? "border-rose-300 bg-rose-50/40" : trace?.validationStatus === "SUSPICIOUS" ? "border-amber-300 bg-amber-50/40" : "border-slate-200/80 bg-slate-50/60"),
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between mb-0.5",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 block",
													children: item.label
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 1390,
													columnNumber: 25
												}, this), trace?.validationStatus && /* @__PURE__ */ (void 0)("span", {
													className: cn("text-[9px] font-bold px-1.5 py-0.2 rounded font-mono", trace.validationStatus === "VALID" ? "text-emerald-700 bg-emerald-50 border border-emerald-200" : trace.validationStatus === "CONFLICT" ? "text-rose-700 bg-rose-50 border border-rose-200" : trace.validationStatus === "SUSPICIOUS" ? "text-amber-700 bg-amber-50 border border-amber-200" : "text-slate-500 bg-slate-100"),
													children: trace.validationStatus
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 1394,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 1389,
												columnNumber: 23
											}, this),
											item.value ? /* @__PURE__ */ (void 0)("span", {
												className: "text-[12px] font-semibold text-slate-900 break-words block",
												children: item.value
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 1411,
												columnNumber: 25
											}, this) : /* @__PURE__ */ (void 0)("span", {
												className: "inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md",
												children: ["Not Provided ", item.explicitNote ? "(Not explicitly stated)" : ""]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 1415,
												columnNumber: 25
											}, this),
											showTraceabilityEvidence && trace && /* @__PURE__ */ (void 0)("div", {
												className: "mt-2 pt-1.5 border-t border-slate-200/70 space-y-1 text-[10.5px]",
												children: [trace.sourceText && /* @__PURE__ */ (void 0)("div", {
													className: "text-slate-800 bg-white rounded p-1.5 font-mono text-[10px] break-all border border-slate-200/80 shadow-2xs",
													children: [
														/* @__PURE__ */ (void 0)("span", {
															className: "text-slate-400 font-sans select-none block mb-0.5",
															children: "Source Snippet:"
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 1425,
															columnNumber: 31
														}, this),
														"\"",
														trace.sourceText,
														"\""
													]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 1424,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between text-slate-500 text-[9.5px]",
													children: [/* @__PURE__ */ (void 0)("span", { children: [
														trace.lineNumber ? `Line ${trace.lineNumber}` : "Header / Thread",
														" ·",
														" ",
														trace.extractionMethod || "RULE_BASED"
													] }, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 1432,
														columnNumber: 29
													}, this), trace.confidence && /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-slate-700",
														children: [trace.confidence, " Confidence"]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 1437,
														columnNumber: 31
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 1431,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 1422,
												columnNumber: 25
											}, this)
										]
									}, idx, true, {
										fileName: _jsxFileName$4,
										lineNumber: 1378,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 1165,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 1095,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "bg-white border-t border-slate-100 px-6 py-3.5 flex items-center justify-between",
						children: [/* @__PURE__ */ (void 0)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => {
								const target = inspectingQuotationTarget;
								setInspectingQuotationTarget(null);
								handleViewEmail(target);
							},
							className: "rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer text-xs gap-1.5",
							children: [/* @__PURE__ */ (void 0)(Mail, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 1462,
								columnNumber: 17
							}, this), "View Original Email"]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 1451,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(Button, {
								type: "button",
								size: "sm",
								onClick: () => {
									const target = inspectingQuotationTarget;
									setInspectingQuotationTarget(null);
									setEditQuotationTarget(target);
								},
								className: "rounded-xl bg-[#0FA3B1] hover:bg-[#0D919E] text-white cursor-pointer text-xs gap-1.5",
								children: [/* @__PURE__ */ (void 0)(FilePen, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 1477,
									columnNumber: 19
								}, this), "Edit / Correct Values"]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 1467,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								onClick: () => setInspectingQuotationTarget(null),
								className: "rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer text-xs",
								children: "Close"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 1480,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 1466,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 1450,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 1049,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 1045,
			columnNumber: 9
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditQuotationModal, {
			isOpen: Boolean(editQuotationTarget),
			onClose: () => setEditQuotationTarget(null),
			forwarderRequest: editQuotationTarget,
			onSave: handleSaveQuotationCorrection
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 1496,
			columnNumber: 7
		}, this),
		selectedEmailPreview && /* @__PURE__ */ (void 0)(Dialog, {
			open: Boolean(selectedEmailPreview),
			onOpenChange: () => setSelectedEmailPreview(null),
			children: /* @__PURE__ */ (void 0)(DialogContent, {
				className: "w-full sm:max-w-[620px] max-h-[92vh] flex flex-col p-0 overflow-hidden sm:rounded-2xl bg-white text-slate-900 antialiased shadow-2xl",
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "bg-white text-slate-900 px-6 py-4.5 border-b border-slate-100",
						children: /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "size-8 rounded-xl bg-[#0FA3B1]/10 text-[#0FA3B1] grid place-items-center",
									children: /* @__PURE__ */ (void 0)(Mail, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1515,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 1514,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)(DialogTitle, {
									className: "text-base font-bold text-slate-900 tracking-tight",
									children: "Forwarder Email Thread & Quotation Record"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 1518,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)(DialogDescription, {
									className: "text-xs text-slate-500 mt-0.5",
									children: [
										"From:",
										" ",
										/* @__PURE__ */ (void 0)("strong", {
											className: "text-slate-900",
											children: selectedEmailPreview.forwarderName
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 1523,
											columnNumber: 23
										}, this),
										" ",
										"(",
										selectedEmailPreview.email,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 1521,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 1517,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 1513,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 1512,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 1511,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "p-6 space-y-4 max-h-[70vh] overflow-y-auto text-xs",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-2 text-slate-700",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "font-semibold text-slate-500 w-24 shrink-0",
										children: "Subject:"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1537,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "font-medium text-slate-900",
										children: selectedEmailPreview.subject
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1538,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 1536,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "font-semibold text-slate-500 w-24 shrink-0",
										children: "Sent At:"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1541,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", { children: new Date(selectedEmailPreview.sentAt).toLocaleString() }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1542,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 1540,
									columnNumber: 17
								}, this),
								selectedEmailPreview.receivedAt && /* @__PURE__ */ (void 0)("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "font-semibold text-slate-500 w-24 shrink-0",
										children: "Received At:"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1546,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("span", { children: new Date(selectedEmailPreview.receivedAt).toLocaleString() }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1547,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 1545,
									columnNumber: 19
								}, this),
								selectedEmailPreview.threadId && /* @__PURE__ */ (void 0)("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "font-semibold text-slate-500 w-24 shrink-0",
										children: "Gmail Thread:"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1552,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "font-mono text-[11px] text-[#0FA3B1]",
										children: selectedEmailPreview.threadId
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1555,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 1551,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 1535,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
							className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2",
							children: "Parsed Email Body:"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 1563,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "bg-slate-50 text-slate-800 rounded-2xl p-4 font-mono text-[12px] leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto border border-slate-200 shadow-xs",
							children: selectedEmailPreview.body
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 1566,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 1562,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 1534,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "bg-white border-t border-slate-100 px-6 py-3.5 flex justify-end",
						children: /* @__PURE__ */ (void 0)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => setSelectedEmailPreview(null),
							className: "rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer",
							children: "Close Preview"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 1574,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 1573,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 1509,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 1505,
			columnNumber: 9
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 438,
		columnNumber: 5
	}, this);
});
var _jsxFileName$3 = "/app/applet/src/components/nashmia/requests/AwardStatusDrawer.tsx";
var AwardStatusDrawer = (0, import_react.memo)(function AwardStatusDrawer({ isOpen, onClose, booking, onOpenFullQuotations, onAwarded }) {
	const { userId } = useAuth();
	const [forwarderRequests, setForwarderRequests] = (0, import_react.useState)([]);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [isAiExtracting, setIsAiExtracting] = (0, import_react.useState)(false);
	const [aiNote, setAiNote] = (0, import_react.useState)(null);
	const [awardModalTarget, setAwardModalTarget] = (0, import_react.useState)(null);
	const loadRequests = (0, import_react.useCallback)(async () => {
		if (!booking) return;
		setIsLoading(true);
		try {
			const list = await fetchForwarderRequestsForBooking(booking);
			setForwarderRequests(list);
		} catch (err) {
			console.warn("[AwardStatusDrawer] Error fetching forwarder requests:", err);
		} finally {
			setIsLoading(false);
		}
	}, [booking]);
	(0, import_react.useEffect)(() => {
		if (isOpen && booking) loadRequests();
	}, [
		isOpen,
		booking,
		loadRequests
	]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const handleUpdate = () => {
			loadRequests();
		};
		window.addEventListener("nashmia_multi_forwarder_updated", handleUpdate);
		window.addEventListener("nashmia_forwarder_offer_received", handleUpdate);
		window.addEventListener("nashmia_booking_awarded", handleUpdate);
		window.addEventListener("nashmia_emails_updated", handleUpdate);
		return () => {
			window.removeEventListener("nashmia_multi_forwarder_updated", handleUpdate);
			window.removeEventListener("nashmia_forwarder_offer_received", handleUpdate);
			window.removeEventListener("nashmia_booking_awarded", handleUpdate);
			window.removeEventListener("nashmia_emails_updated", handleUpdate);
		};
	}, [isOpen, loadRequests]);
	const quotesWithOffers = (0, import_react.useMemo)(() => {
		return forwarderRequests.filter((r) => {
			const rate = r.offerData?.ratePerContainer || r.ratePerContainer;
			const total = r.offerData?.totalFreight || r.totalFreight;
			return r.status === "OFFER_RECEIVED" || r.status === "AWARDED" || r.status === "ACCEPTED" || rate !== void 0 && rate !== null && rate > 0 || total !== void 0 && total !== null && total > 0;
		});
	}, [forwarderRequests]);
	const bestQuote = (0, import_react.useMemo)(() => {
		if (quotesWithOffers.length === 0) return null;
		return [...quotesWithOffers].sort((a, b) => {
			return (a.offerData?.ratePerContainer || a.ratePerContainer || 999999) - (b.offerData?.ratePerContainer || b.ratePerContainer || 999999);
		})[0];
	}, [quotesWithOffers]);
	const awardedQuote = (0, import_react.useMemo)(() => {
		return forwarderRequests.find((r) => r.status === "AWARDED" || r.status === "ACCEPTED");
	}, [forwarderRequests]);
	const handleAiScan = async (reqRecord) => {
		setIsAiExtracting(true);
		setAiNote(null);
		try {
			const res = await extractQuotationWithAiFallback({
				subject: reqRecord.offerData?.originalEmailSubject || reqRecord.forwarderName,
				body: reqRecord.offerData?.originalEmailBody || reqRecord.notes || "",
				snippet: reqRecord.offerData?.extractionSummary || "",
				forwarderName: reqRecord.forwarderName,
				movementNumber: reqRecord.movementNumber || booking?.movementNumber
			});
			if (res && (res.rate || res.etd)) {
				await updateForwarderQuotation(reqRecord.id, {
					ratePerContainer: res.rate ?? reqRecord.offerData?.ratePerContainer,
					totalFreight: res.totalCost ?? (res.rate ? res.rate * (reqRecord.containerCount || 1) : reqRecord.offerData?.totalFreight),
					currency: res.currency || reqRecord.offerData?.currency || "USD",
					etd: res.etd || reqRecord.offerData?.etd,
					eta: res.eta || reqRecord.offerData?.eta,
					carrier: res.carrier || reqRecord.offerData?.carrier,
					transitDays: res.transitTime || reqRecord.offerData?.transitDays,
					freeDays: res.freeDays || reqRecord.offerData?.freeDays,
					notes: res.notes || reqRecord.offerData?.notes
				}, userId, "OFFER_RECEIVED");
				setAiNote(`AI verified: Rate $${res.rate ? res.rate.toLocaleString() : "N/A"} / cntr ${res.currency || "USD"}, ETD ${res.etd || "N/A"}${res.carrier ? ` (${res.carrier})` : ""}`);
				showPillToast.success("AI extracted updated Rate and ETD details from email.", "AI Extraction Verified");
				loadRequests();
			} else {
				setAiNote("AI analyzed email: standard forwarder text with no conflicting rates.");
				showPillToast.info("Deterministic values are fully synchronized.", "AI Analysis Complete");
			}
		} catch (scanErr) {
			console.warn("[AwardStatusDrawer] AI scan notice:", scanErr);
			showPillToast.info("Deterministic values currently active in drawer.", "Analysis Notice");
		} finally {
			setIsAiExtracting(false);
		}
	};
	const handleAiScanAll = async () => {
		if (forwarderRequests.length === 0) return;
		setIsAiExtracting(true);
		setAiNote(null);
		let updatedCount = 0;
		try {
			for (const reqRecord of forwarderRequests) {
				const textToScan = reqRecord.offerData?.originalEmailBody || reqRecord.notes || "";
				if (!textToScan || textToScan.trim().length < 5) continue;
				const res = await extractQuotationWithAiFallback({
					subject: reqRecord.offerData?.originalEmailSubject || reqRecord.forwarderName,
					body: textToScan,
					snippet: reqRecord.offerData?.extractionSummary || "",
					forwarderName: reqRecord.forwarderName,
					movementNumber: reqRecord.movementNumber || booking?.movementNumber
				});
				if (res && (res.rate || res.etd)) {
					await updateForwarderQuotation(reqRecord.id, {
						ratePerContainer: res.rate ?? reqRecord.offerData?.ratePerContainer,
						totalFreight: res.totalCost ?? (res.rate ? res.rate * (reqRecord.containerCount || 1) : reqRecord.offerData?.totalFreight),
						currency: res.currency || reqRecord.offerData?.currency || "USD",
						etd: res.etd || reqRecord.offerData?.etd,
						eta: res.eta || reqRecord.offerData?.eta,
						carrier: res.carrier || reqRecord.offerData?.carrier
					}, userId, "OFFER_RECEIVED");
					updatedCount++;
				}
			}
			if (updatedCount > 0) {
				setAiNote(`AI scanned all emails: Synchronized ${updatedCount} forwarder quotation(s) with Rate & ETD.`);
				showPillToast.success(`AI updated ${updatedCount} quotation(s) from emails.`, "AI Scan Complete");
				loadRequests();
			} else {
				setAiNote("AI scan complete: All current rates and ETD values are up to date.");
				showPillToast.info("No newer quotation changes detected in emails.", "AI Verification");
			}
		} catch (batchErr) {
			console.warn("[AwardStatusDrawer] Batch AI scan notice:", batchErr);
		} finally {
			setIsAiExtracting(false);
		}
	};
	const handleConfirmAward = async (requestId) => {
		try {
			await awardForwarderOffer(requestId, userId);
			showPillToast.success("Forwarder designated and awarded for this booking.", "Forwarder Awarded");
			loadRequests();
			onAwarded?.();
		} catch (err) {
			showPillToast.error(err instanceof Error ? err.message : "Failed to award forwarder", "Notice");
		}
	};
	if (!isOpen || !booking) return null;
	const movementNo = booking.movementNumber || booking.bookingReference || booking.reference;
	const isAwarded = Boolean(awardedQuote || booking.status === "Line Allocation");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			onClick: onClose,
			className: "fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-200"
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 263,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			className: "fixed inset-y-0 right-0 z-50 flex w-full sm:max-w-md flex-col bg-white border-l border-slate-200 shadow-2xl overflow-hidden animate-in slide-in-from-right duration-250 ease-out",
			role: "dialog",
			"aria-label": "Award Status & Quick Rates Drawer",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between border-b border-slate-100 px-5 py-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-9 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, { className: "size-4.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 278,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 277,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-[11px] font-bold text-cyan-300 bg-cyan-950/90 border border-cyan-700/60 rounded px-1.5 py-0.5",
								children: movementNo
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 282,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11px] text-slate-300 font-medium",
								children: "Award Desk"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 285,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 281,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-[15px] font-bold text-white tracking-tight mt-0.5",
							children: "Award Status & Fast Quotes"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 287,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 280,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 276,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: onClose,
						className: "size-8 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 grid place-items-center transition-colors cursor-pointer",
						"aria-label": "Close drawer",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 299,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 293,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 275,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 overflow-y-auto p-5 space-y-4 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: `rounded-2xl border p-4 space-y-2.5 transition-all ${isAwarded ? "border-cyan-300 bg-gradient-to-br from-cyan-50/90 via-teal-50/50 to-white text-cyan-950" : quotesWithOffers.length > 0 ? "border-emerald-200 bg-gradient-to-br from-emerald-50/90 via-sky-50/40 to-white text-slate-900" : "border-slate-200 bg-slate-50 text-slate-700"}`,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-slate-500",
									children: "Current Award State"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 316,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${isAwarded ? "bg-cyan-100 text-cyan-900 border-cyan-300" : quotesWithOffers.length > 0 ? "bg-emerald-100 text-emerald-900 border-emerald-300" : "bg-slate-200 text-slate-700 border-slate-300"}`,
									children: isAwarded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, { className: "size-3 text-cyan-700" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 330,
										columnNumber: 21
									}, this), "AWARDED"] }, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 329,
										columnNumber: 19
									}, this) : quotesWithOffers.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3 text-emerald-600" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 335,
										columnNumber: 21
									}, this), "AWAITING AWARD DECISION"] }, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 334,
										columnNumber: 19
									}, this) : "AWAITING QUOTATIONS"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 319,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 315,
								columnNumber: 13
							}, this), isAwarded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "text-sm font-extrabold text-cyan-950",
								children: awardedQuote?.forwarderName || booking.forwarderName || "Winning Forwarder"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 346,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11.5px] text-cyan-800 mt-0.5",
								children: "Designated as official forwarder for this booking. Space & carrier scheduling in progress."
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 349,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 345,
								columnNumber: 15
							}, this) : quotesWithOffers.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "text-sm font-extrabold text-slate-900",
								children: [
									quotesWithOffers.length,
									" Quotation",
									quotesWithOffers.length > 1 ? "s" : "",
									" ",
									"Received via Email"
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 356,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11.5px] text-slate-600 mt-0.5",
								children: "Forwarders responded to your RFQ emails. Review rate and ETD below to award."
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 360,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 355,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "text-sm font-bold text-slate-800",
								children: "No Forwarder Quotes Received Yet"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 366,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11.5px] text-slate-500 mt-0.5",
								children: "Inquiries sent via Gmail. As soon as a forwarder replies with Rate & ETD, it will automatically populate here."
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 369,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 365,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 306,
							columnNumber: 11
						}, this),
						bestQuote && /* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl border border-[#0FA3B1]/30 bg-gradient-to-br from-sky-50 via-teal-50/50 to-white p-4 space-y-3 shadow-2xs",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0FA3B1] uppercase tracking-wider",
										children: [/* @__PURE__ */ (void 0)(TrendingDown, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 382,
											columnNumber: 19
										}, this), " Best Competitive Rate"]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 381,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "font-mono text-[10.5px] font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-200 px-2 py-0.5 rounded-md",
										children: "Lowest Offer"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 384,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 380,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
										className: "text-[14px] font-extrabold text-slate-900",
										children: bestQuote.forwarderName
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 391,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2 text-[11px] text-slate-500 mt-0.5 font-medium flex-wrap",
										children: [
											/* @__PURE__ */ (void 0)("span", { children: bestQuote.offerData?.carrier || "Direct Line" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 395,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("span", { children: "•" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 396,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("span", { children: [bestQuote.offerData?.transitDays || 24, "d Transit"] }, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 397,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("span", { children: "•" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 398,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("span", { children: [bestQuote.offerData?.freeDays || 14, "d Free"] }, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 399,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 394,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 390,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "text-right shrink-0",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "text-base font-extrabold text-slate-900 font-mono leading-none",
											children: [
												"$",
												(bestQuote.offerData?.ratePerContainer || bestQuote.ratePerContainer || 0).toLocaleString(),
												/* @__PURE__ */ (void 0)("span", {
													className: "text-[10px] font-normal text-slate-500 font-sans ml-1",
													children: "/cntr"
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 412,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 405,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-teal-100/80 border border-teal-200 text-teal-900 font-mono text-[11px] font-bold mt-1.5",
											children: [
												/* @__PURE__ */ (void 0)(Calendar, { className: "size-3 text-teal-700" }, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 417,
													columnNumber: 21
												}, this),
												"ETD: ",
												bestQuote.offerData?.etd || booking.requestedEtd || "Prompt"
											]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 416,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 404,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 389,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "pt-2 border-t border-slate-100 flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => handleAiScan(bestQuote),
										disabled: isAiExtracting,
										className: "inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-indigo-200 bg-indigo-50/80 hover:bg-indigo-100 text-indigo-900 text-[11px] font-semibold transition-colors cursor-pointer",
										title: "Verify rate and ETD with AI against email text",
										children: [/* @__PURE__ */ (void 0)(Bot, { className: "size-3 text-indigo-600" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 432,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("span", { children: isAiExtracting ? "AI Scanning..." : "AI Re-Scan Email" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 433,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 425,
										columnNumber: 17
									}, this), !isAwarded && /* @__PURE__ */ (void 0)(Button, {
										type: "button",
										size: "sm",
										onClick: () => setAwardModalTarget(bestQuote),
										className: "h-7.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1 shadow-2xs cursor-pointer",
										children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 443,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Award This Rate" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 444,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 437,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 424,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 379,
							columnNumber: 13
						}, this),
						aiNote && /* @__PURE__ */ (void 0)("div", {
							className: "rounded-xl border border-indigo-200 bg-indigo-50/60 p-3 flex items-start gap-2 text-indigo-950 text-[11px] leading-relaxed",
							children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-3.5 text-indigo-600 mt-0.5 shrink-0" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 454,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", { children: aiNote }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 455,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 453,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between text-slate-700",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-bold text-[12px] flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 463,
											columnNumber: 17
										}, this),
										"All Contacted Forwarders (",
										forwarderRequests.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 462,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [forwarderRequests.length > 0 && /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => void handleAiScanAll(),
										disabled: isAiExtracting,
										className: "text-[11px] text-indigo-700 hover:text-indigo-900 bg-indigo-50/90 hover:bg-indigo-100 border border-indigo-200 px-2 py-0.5 rounded-md flex items-center gap-1 font-semibold cursor-pointer transition-colors",
										title: "Scan all inbound forwarder emails with AI to extract rates and ETD",
										children: [/* @__PURE__ */ (void 0)(Bot, { className: "size-3 text-indigo-600" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 475,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: isAiExtracting ? "AI Scanning..." : "AI Scan All Emails" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 476,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 468,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => void loadRequests(),
										disabled: isLoading,
										className: "text-[11px] text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `size-3 ${isLoading ? "animate-spin text-[#0FA3B1]" : ""}` }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 485,
											columnNumber: 19
										}, this), "Refresh"]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 479,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 466,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 461,
								columnNumber: 13
							}, this), forwarderRequests.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "p-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/70 text-center text-slate-500 text-xs",
								children: "No RFQs dispatched yet for this booking."
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 494,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: forwarderRequests.map((fwd) => {
									const rate = fwd.offerData?.ratePerContainer || fwd.ratePerContainer;
									const etd = fwd.offerData?.etd;
									const isThisAwarded = fwd.status === "AWARDED" || fwd.status === "ACCEPTED";
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: `p-3 rounded-xl border transition-all ${isThisAwarded ? "border-cyan-300 bg-cyan-50/60 shadow-2xs" : rate ? "border-slate-200/90 bg-white hover:border-[#0FA3B1]/40 shadow-2xs" : "border-slate-200/70 bg-slate-50/60"}`,
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "font-bold text-slate-900 truncate text-xs",
														children: fwd.forwarderName
													}, void 0, false, {
														fileName: _jsxFileName$3,
														lineNumber: 518,
														columnNumber: 29
													}, this), isThisAwarded && /* @__PURE__ */ (void 0)("span", {
														className: "rounded bg-cyan-100 text-cyan-900 border border-cyan-300 px-1.5 py-0.2 text-[9.5px] font-bold",
														children: "AWARDED"
													}, void 0, false, {
														fileName: _jsxFileName$3,
														lineNumber: 522,
														columnNumber: 31
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 517,
													columnNumber: 27
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[10.5px] text-slate-500 truncate block",
													children: fwd.forwarderEmail
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 527,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 516,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "text-right shrink-0",
												children: rate ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bold font-mono text-slate-900 text-[13px]",
													children: [
														"$",
														rate.toLocaleString(),
														" ",
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-[10px] font-normal text-slate-500 font-sans",
															children: fwd.offerData?.currency || "USD"
														}, void 0, false, {
															fileName: _jsxFileName$3,
															lineNumber: 538,
															columnNumber: 33
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 536,
													columnNumber: 31
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "text-[10.5px] font-semibold text-teal-800 font-mono mt-0.5",
													children: ["ETD: ", etd || booking.requestedEtd || "Prompt"]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 542,
													columnNumber: 31
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 535,
													columnNumber: 29
												}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200",
													children: "Awaiting Email"
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 547,
													columnNumber: 29
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 533,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 515,
											columnNumber: 23
										}, this), rate && !isThisAwarded && !isAwarded && /* @__PURE__ */ (void 0)("div", {
											className: "mt-2 pt-2 border-t border-slate-100 flex items-center justify-end gap-1.5",
											children: [/* @__PURE__ */ (void 0)(Button, {
												type: "button",
												size: "sm",
												variant: "ghost",
												onClick: () => handleAiScan(fwd),
												className: "h-6.5 px-2 text-[10.5px] text-indigo-700 hover:bg-indigo-50 cursor-pointer",
												children: [/* @__PURE__ */ (void 0)(Bot, { className: "size-3 mr-1" }, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 564,
													columnNumber: 29
												}, this), " AI Check"]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 557,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)(Button, {
												type: "button",
												size: "sm",
												onClick: () => setAwardModalTarget(fwd),
												className: "h-6.5 px-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] cursor-pointer",
												children: "Award"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 566,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 556,
											columnNumber: 25
										}, this)]
									}, fwd.id, true, {
										fileName: _jsxFileName$3,
										lineNumber: 505,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 498,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 460,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 304,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-4 border-t border-slate-100 bg-slate-50 flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "button",
						size: "sm",
						onClick: () => {
							onClose();
							onOpenFullQuotations?.(booking);
						},
						className: "flex-1 h-9 bg-[#0FA3B1] hover:bg-[#0D919E] text-white text-xs font-bold gap-1.5 cursor-pointer shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 595,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Open Full Quotation Comparison Modal" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 596,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 586,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: onClose,
						className: "h-9 px-3 border-slate-200 text-slate-700 hover:bg-white text-xs cursor-pointer",
						children: "Close"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 599,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 585,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 269,
			columnNumber: 7
		}, this),
		awardModalTarget && /* @__PURE__ */ (void 0)(AwardForwarderModal, {
			isOpen: Boolean(awardModalTarget),
			onClose: () => setAwardModalTarget(null),
			bookingRequest: booking,
			forwarderRequest: awardModalTarget,
			onConfirmAward: handleConfirmAward
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 613,
			columnNumber: 9
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 261,
		columnNumber: 5
	}, this);
});
var _jsxFileName$2 = "/app/applet/src/components/nashmia/skeletons/RequestsSkeletons.tsx";
function RequestsMetricsSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 skeleton-container",
		children: [
			1,
			2,
			3,
			4
		].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs flex flex-col justify-between h-[108px]",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-24 bg-slate-100" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 13,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-7 rounded-lg bg-slate-100" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 14,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 12,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-baseline gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-7 w-12 bg-slate-200/80" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 17,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3 w-16 bg-slate-100" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 18,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 16,
				columnNumber: 11
			}, this)]
		}, i, true, {
			fileName: _jsxFileName$2,
			lineNumber: 8,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
function RequestsTableSkeleton({ rows = 5 }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs skeleton-container",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
				className: "w-full text-left text-[13px]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
					className: "border-b border-slate-200 bg-slate-50/80 text-[11.5px] font-bold uppercase tracking-wider",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "w-10 px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-4 rounded bg-slate-200/70" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 34,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 33,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-24 bg-slate-200/70" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 37,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 36,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-28 bg-slate-200/70" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 40,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 39,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-24 bg-slate-200/70" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 43,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 42,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-24 bg-slate-200/70" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 46,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 45,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-20 bg-slate-200/70" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 49,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 48,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3 text-right",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-16 ml-auto bg-slate-200/70" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 52,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 51,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-16 bg-slate-200/70" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 55,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 54,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3 text-right",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-14 ml-auto bg-slate-200/70" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 58,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 57,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 32,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 31,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
					className: "divide-y divide-slate-100",
					children: Array.from({ length: rows }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
						className: "hover:bg-slate-50/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-4 py-3.5",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-4 rounded bg-slate-200/60" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 66,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 65,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-4 py-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-28 rounded bg-slate-200/80 mb-1" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 69,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-2.5 w-16 bg-slate-100" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 70,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 68,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-4 py-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-32 bg-slate-200/70 mb-1" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 73,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-2.5 w-24 bg-slate-100" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 74,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 72,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-4 py-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-20 bg-slate-200/70 mb-1" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 77,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-2.5 w-14 bg-slate-100" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 78,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 76,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-4 py-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-20 bg-slate-200/70 mb-1" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 81,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-2.5 w-20 bg-slate-100" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 82,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 80,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-4 py-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-24 bg-slate-200/70 mb-1" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 85,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-2.5 w-16 bg-slate-100" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 86,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 84,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-4 py-3.5 text-right",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-16 ml-auto bg-slate-200/80" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 89,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 88,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-4 py-3.5",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-6 w-20 rounded-full bg-slate-200/70" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 92,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 91,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-4 py-3.5 text-right",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-7 w-16 ml-auto rounded-lg bg-slate-200/60" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 95,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 94,
								columnNumber: 17
							}, this)
						]
					}, i, true, {
						fileName: _jsxFileName$2,
						lineNumber: 64,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 62,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 30,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
function RequestsCardGridSkeleton({ count = 6 }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 skeleton-container",
		children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs space-y-3.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-32 rounded bg-slate-200/80" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 116,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3 w-20 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 117,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 115,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-6 w-18 rounded-full bg-slate-200/70" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 119,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 114,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-xl border border-slate-100 bg-slate-50/70 p-3 space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-24 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 124,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-20 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 125,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 123,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-28 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 128,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-16 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 129,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 127,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 122,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between border-t border-slate-100 pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-20 bg-slate-200/70" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 134,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-8 w-24 rounded-xl bg-slate-200/70" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 135,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 133,
					columnNumber: 11
				}, this)
			]
		}, i, true, {
			fileName: _jsxFileName$2,
			lineNumber: 110,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 108,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/nashmia/requests/RequestsPage.tsx";
function RequestsPage({ onOpenMobileMenu }) {
	const { userId, organizationId, isConfigured } = useAuth();
	const queryClient = useQueryClient();
	const [filters, setFilters] = (0, import_react.useState)({
		search: "",
		status: "All",
		priority: "All",
		pol: "",
		pod: "",
		carrier: "",
		dateRange: "all",
		sortBy: "date-desc",
		viewMode: "grid"
	});
	const [selectedIds, setSelectedIds] = (0, import_react.useState)([]);
	const [activeDetailRequest, setActiveDetailRequest] = (0, import_react.useState)(null);
	const [approvingRequest, setApprovingRequest] = (0, import_react.useState)(null);
	const [revisingRequest, setRevisingRequest] = (0, import_react.useState)(null);
	const [emailingRequest, setEmailingRequest] = (0, import_react.useState)(null);
	const [isEmailModalOpen, setIsEmailModalOpen] = (0, import_react.useState)(false);
	const [multiForwarderBooking, setMultiForwarderBooking] = (0, import_react.useState)(null);
	const [isMultiForwarderModalOpen, setIsMultiForwarderModalOpen] = (0, import_react.useState)(false);
	const [viewingQuotationsBooking, setViewingQuotationsBooking] = (0, import_react.useState)(null);
	const [awardDrawerBooking, setAwardDrawerBooking] = (0, import_react.useState)(null);
	const { data: requests = [], isLoading, isFetching, refetch } = useQuery({
		queryKey: ["booking-requests", userId],
		queryFn: () => fetchBookingRequestsFromSupabase(userId),
		staleTime: 6e4,
		refetchOnWindowFocus: false,
		refetchOnMount: false
	});
	const { data: allForwarderRequests = [] } = useQuery({
		queryKey: ["all-forwarder-requests"],
		queryFn: () => fetchAllForwarderRequestsFromSupabase(),
		staleTime: 3e4,
		refetchOnWindowFocus: false
	});
	useSupabaseRealtime("bookings", void 0, isConfigured, { organizationId });
	useSupabaseRealtime("booking_events", void 0, isConfigured, { organizationId });
	useSupabaseRealtime("email_messages", void 0, isConfigured, { organizationId });
	useSupabaseRealtime("notifications", void 0, isConfigured, { organizationId });
	useSupabaseRealtime("forwarder_requests", void 0, isConfigured, { organizationId });
	useSupabaseRealtime("quotations", void 0, isConfigured, { organizationId });
	(0, import_react.useEffect)(() => {
		const handleUpdate = (e) => {
			if (e && "detail" in e) {
				const detail = e.detail;
				if (detail) {
					const targetRef = (detail.bookingReference || detail.reference || detail.movementNumber || detail.bookingId || detail.id || "").trim().toLowerCase();
					const targetMov = (detail.movementNumber || "").trim().toLowerCase();
					const targetBk = (detail.bookingId || detail.id || "").trim().toLowerCase();
					if (detail.booking && typeof detail.booking === "object") try {
						const mapped = mapBookingRecordToRequest(detail.booking);
						queryClient.setQueriesData({ queryKey: ["booking-requests"] }, (prev) => {
							if (!prev) return [mapped];
							if (prev.some((r) => r.id === mapped.id || mapped.movementNumber && r.movementNumber === mapped.movementNumber || mapped.reference && r.reference === mapped.reference)) return prev;
							return [mapped, ...prev];
						});
					} catch (err) {
						console.warn("[RequestsPage] Failed to map new booking:", err);
					}
					queryClient.invalidateQueries({ queryKey: ["all-forwarder-requests"] });
					if (targetRef || targetMov || targetBk) queryClient.setQueriesData({ queryKey: ["booking-requests"] }, (prev) => {
						if (!prev) return prev;
						return prev.map((item) => {
							const itemRef = (item.reference || "").trim().toLowerCase();
							const itemMov = (item.movementNumber || "").trim().toLowerCase();
							const itemBkRef = (item.bookingReference || "").trim().toLowerCase();
							const itemId = (item.id || "").trim().toLowerCase();
							if (targetRef && (itemRef === targetRef || itemMov === targetRef || itemBkRef === targetRef || itemId === targetRef) || targetMov && (itemRef === targetMov || itemMov === targetMov || itemBkRef === targetMov || itemId === targetMov) || targetBk && (itemRef === targetBk || itemMov === targetBk || itemBkRef === targetBk || itemId === targetBk)) {
								const eventStatus = (detail.status || "").trim();
								const isConfirmedEvent = detail.isConfirmed || eventStatus === "Approved" || eventStatus === "Booking Confirmed" || detail.confirmationStatus === "CONFIRMED";
								const isOfferEvent = eventStatus === "OFFER_RECEIVED" || eventStatus === "Rate Verification" || detail.offer || detail.rate;
								let mappedStatus = item.status;
								if (isConfirmedEvent && (item.status === "Pending Review" || item.status === "Rate Verification" || item.status === "Line Allocation")) mappedStatus = "Approved";
								else if (isOfferEvent && item.status !== "Approved" && item.status !== "Booking Confirmed") mappedStatus = "Rate Verification";
								else if (eventStatus && eventStatus !== "Approved" && eventStatus !== "Booking Confirmed") mappedStatus = eventStatus;
								const newRate = detail.rate ?? detail.offer?.ratePerContainer ?? item.ratePerContainer;
								const newTotal = detail.total ?? detail.offer?.totalFreight ?? (newRate ? newRate * (item.containerCount || 1) : item.totalFreight);
								return {
									...item,
									status: mappedStatus,
									confirmationStatus: detail.confirmationStatus || (isConfirmedEvent ? "CONFIRMED" : item.confirmationStatus),
									confirmedAt: detail.confirmedAt || item.confirmedAt || (isConfirmedEvent ? (/* @__PURE__ */ new Date()).toISOString() : void 0),
									confirmedBy: detail.confirmedBy || detail.forwarderName || item.confirmedBy || "Operations Desk",
									preferredCarrier: detail.carrier || detail.offer?.carrier || detail.preferredCarrier || item.preferredCarrier,
									vesselName: detail.vesselName || detail.offer?.vesselName || item.vesselName,
									voyageNumber: detail.voyageNumber || detail.offer?.voyageNumber || item.voyageNumber,
									ratePerContainer: newRate,
									totalFreight: newTotal
								};
							}
							return item;
						});
					});
				}
			}
		};
		const handleOpenQuotationReview = (e) => {
			if (e && "detail" in e) {
				const detail = e.detail;
				if (detail?.bookingId) {
					const target = requests.find((r) => r.id === detail.bookingId || r.movementNumber === detail.bookingId || r.bookingReference === detail.bookingId);
					if (target) setViewingQuotationsBooking(target);
				}
			}
		};
		const handleOpenAwardDrawer = (e) => {
			if (e && "detail" in e) {
				const detail = e.detail;
				if (detail?.bookingId) {
					const target = requests.find((r) => r.id === detail.bookingId || r.movementNumber === detail.bookingId || r.bookingReference === detail.bookingId);
					if (target) setAwardDrawerBooking(target);
				}
			}
		};
		window.addEventListener("nashmia_multi_forwarder_updated", handleUpdate);
		window.addEventListener("nashmia_multi_forwarder_dispatched", handleUpdate);
		window.addEventListener("nashmia_forwarder_offer_received", handleUpdate);
		window.addEventListener("nashmia_booking_confirmed", handleUpdate);
		window.addEventListener("nashmia_booking_awarded", handleUpdate);
		window.addEventListener("nashmia_booking_status_updated", handleUpdate);
		window.addEventListener("supabase_realtime_bookings_change", handleUpdate);
		window.addEventListener("nashmia_bookings_updated", handleUpdate);
		window.addEventListener("nashmia_email_matched", handleUpdate);
		window.addEventListener("nashmia_open_quotation_review", handleOpenQuotationReview);
		window.addEventListener("nashmia_open_award_drawer", handleOpenAwardDrawer);
		return () => {
			window.removeEventListener("nashmia_multi_forwarder_updated", handleUpdate);
			window.removeEventListener("nashmia_multi_forwarder_dispatched", handleUpdate);
			window.removeEventListener("nashmia_forwarder_offer_received", handleUpdate);
			window.removeEventListener("nashmia_booking_confirmed", handleUpdate);
			window.removeEventListener("nashmia_booking_awarded", handleUpdate);
			window.removeEventListener("nashmia_booking_status_updated", handleUpdate);
			window.removeEventListener("supabase_realtime_bookings_change", handleUpdate);
			window.removeEventListener("nashmia_bookings_updated", handleUpdate);
			window.removeEventListener("nashmia_email_matched", handleUpdate);
			window.removeEventListener("nashmia_open_quotation_review", handleOpenQuotationReview);
			window.removeEventListener("nashmia_open_award_drawer", handleOpenAwardDrawer);
		};
	}, [queryClient]);
	const currentActiveDetail = (0, import_react.useMemo)(() => {
		if (!activeDetailRequest) return null;
		return requests.find((r) => r.id === activeDetailRequest.id) || activeDetailRequest;
	}, [activeDetailRequest, requests]);
	const filteredRequests = (0, import_react.useMemo)(() => {
		const uniqueGroupMap = /* @__PURE__ */ new Map();
		for (const req of requests) {
			const groupKey = (req.movementNumber || req.bookingReference || req.reference || req.id).trim().toUpperCase();
			if (!uniqueGroupMap.has(groupKey)) uniqueGroupMap.set(groupKey, req);
			else {
				const existing = uniqueGroupMap.get(groupKey);
				if (new Date(req.updatedAt).getTime() > new Date(existing.updatedAt).getTime()) uniqueGroupMap.set(groupKey, req);
			}
		}
		return Array.from(uniqueGroupMap.values()).filter((req) => {
			if (filters.search.trim()) {
				const q = filters.search.toLowerCase().trim();
				const matchRef = req.reference.toLowerCase().includes(q);
				const matchBuyer = req.buyerName.toLowerCase().includes(q);
				const matchSupplier = req.supplierName.toLowerCase().includes(q);
				const matchPol = req.polCode.toLowerCase().includes(q) || req.polName.toLowerCase().includes(q);
				const matchPod = req.podCode.toLowerCase().includes(q) || req.podName.toLowerCase().includes(q);
				const matchCargo = req.cargo.description.toLowerCase().includes(q);
				const matchHs = req.cargo.hsCode?.toLowerCase().includes(q) || false;
				const matchCarrier = req.preferredCarrier.toLowerCase().includes(q);
				if (!matchRef && !matchBuyer && !matchSupplier && !matchPol && !matchPod && !matchCargo && !matchHs && !matchCarrier) return false;
			}
			if (filters.status !== "All" && req.status !== filters.status) return false;
			if (filters.priority !== "All" && req.priority !== filters.priority) return false;
			if (filters.carrier && !req.preferredCarrier.toLowerCase().includes(filters.carrier.toLowerCase())) return false;
			return true;
		}).sort((a, b) => {
			if (filters.sortBy === "date-desc") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
			if (filters.sortBy === "date-asc") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
			if (filters.sortBy === "priority-desc") {
				const priorityScore = {
					Urgent: 4,
					High: 3,
					Normal: 2,
					Flexible: 1
				};
				return (priorityScore[b.priority] || 0) - (priorityScore[a.priority] || 0);
			}
			if (filters.sortBy === "rate-desc") return b.totalFreight - a.totalFreight;
			if (filters.sortBy === "buyer-asc") return a.buyerName.localeCompare(b.buyerName);
			return 0;
		});
	}, [requests, filters]);
	const stats = (0, import_react.useMemo)(() => calculateRequestsStats(requests), [requests]);
	const statusCounts = (0, import_react.useMemo)(() => {
		const counts = { All: requests.length };
		for (const r of requests) counts[r.status] = (counts[r.status] || 0) + 1;
		return counts;
	}, [requests]);
	const handleToggleSelect = (0, import_react.useCallback)((id) => {
		setSelectedIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
	}, []);
	const handleToggleSelectAll = (0, import_react.useCallback)(() => {
		setSelectedIds((prev) => prev.length === filteredRequests.length ? [] : filteredRequests.map((r) => r.id));
	}, [filteredRequests]);
	const handleFilterChange = (0, import_react.useCallback)((updates) => {
		setFilters((prev) => ({
			...prev,
			...updates
		}));
	}, []);
	const approveBookingMutation = useMutation({
		mutationFn: async ({ requestId, details }) => {
			return await approveBookingRequestInSupabase(requestId, userId, details);
		},
		onMutate: async ({ requestId, details, displayRef }) => {
			await queryClient.cancelQueries({ queryKey: ["booking-requests"] });
			await queryClient.cancelQueries({ queryKey: ["dashboard-bookings"] });
			await queryClient.cancelQueries({ queryKey: ["movements"] });
			const previousRequests = queryClient.getQueriesData({ queryKey: ["booking-requests"] });
			const previousDashboard = queryClient.getQueriesData({ queryKey: ["dashboard-bookings"] });
			const confirmedAt = (/* @__PURE__ */ new Date()).toISOString();
			const targetIdLower = requestId.trim().toLowerCase();
			queryClient.setQueriesData({ queryKey: ["booking-requests"] }, (prev) => {
				if (!prev) return prev;
				return prev.map((item) => {
					const itemRef = (item.reference || "").trim().toLowerCase();
					const itemMov = (item.movementNumber || "").trim().toLowerCase();
					const itemBkRef = (item.bookingReference || "").trim().toLowerCase();
					if ((item.id || "").trim().toLowerCase() === targetIdLower || itemRef === targetIdLower || itemMov === targetIdLower || itemBkRef === targetIdLower) return {
						...item,
						status: "Approved",
						confirmationStatus: "CONFIRMED",
						confirmedAt,
						confirmedBy: details.forwarderName || "Operations Desk",
						forwarderId: details.forwarderId || item.forwarderId,
						forwarderName: details.forwarderName || item.forwarderName,
						vesselName: details.vesselName || item.vesselName,
						voyageNumber: details.voyageNumber || item.voyageNumber
					};
					return item;
				});
			});
			queryClient.setQueriesData({ queryKey: ["dashboard-bookings"] }, (prev) => {
				if (!prev) return prev;
				return prev.map((b) => {
					const bId = (b.id || "").trim().toLowerCase();
					const bMov = (b.movement_number || "").trim().toLowerCase();
					const bRef = (b.booking_reference || "").trim().toLowerCase();
					const bRefCode = (b.reference || "").trim().toLowerCase();
					if (bId === targetIdLower || bMov === targetIdLower || bRef === targetIdLower || bRefCode === targetIdLower) return {
						...b,
						status: "Booking Confirmed",
						confirmation_status: "CONFIRMED",
						confirmed_at: confirmedAt,
						confirmed_by: details.forwarderName || "Operations Desk",
						forwarder_id: details.forwarderId || b.forwarder_id,
						forwarder_name: details.forwarderName || b.forwarder_name,
						vessel_name: details.vesselName || b.vessel_name,
						voyage_number: details.voyageNumber || b.voyage_number
					};
					return b;
				});
			});
			if (typeof window !== "undefined") {
				window.dispatchEvent(new CustomEvent("nashmia_booking_confirmed", { detail: {
					bookingId: requestId,
					id: requestId,
					status: "Booking Confirmed",
					confirmationStatus: "CONFIRMED",
					isConfirmed: true,
					confirmedAt,
					confirmedBy: "Operations Desk",
					vesselName: details.vesselName,
					voyageNumber: details.voyageNumber
				} }));
				window.dispatchEvent(new CustomEvent("nashmia_bookings_updated"));
				window.dispatchEvent(new CustomEvent("supabase_realtime_bookings_change"));
			}
			return {
				previousRequests,
				previousDashboard,
				displayRef
			};
		},
		onError: (err, variables, context) => {
			if (context?.previousRequests) context.previousRequests.forEach(([queryKey, data]) => {
				queryClient.setQueryData(queryKey, data);
			});
			if (context?.previousDashboard) context.previousDashboard.forEach(([queryKey, data]) => {
				queryClient.setQueryData(queryKey, data);
			});
			showPillToast.error(err instanceof Error ? err.message : "Please try again.", "Failed to approve request");
		},
		onSuccess: (_data, variables, context) => {
			const displayRef = context?.displayRef || variables.requestId;
			showPillToast.success(`Booking ${displayRef} is now confirmed. Equipment and space allocated.`, "Booking Request Approved", displayRef);
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
			queryClient.invalidateQueries({ queryKey: ["dashboard-bookings"] });
			queryClient.invalidateQueries({ queryKey: ["movements"] });
			queryClient.invalidateQueries({ queryKey: ["booking-events"] });
			queryClient.invalidateQueries({ queryKey: ["notifications"] });
			if (typeof window !== "undefined") {
				window.dispatchEvent(new CustomEvent("nashmia_bookings_updated"));
				window.dispatchEvent(new CustomEvent("supabase_realtime_bookings_change"));
			}
		}
	});
	const handleConfirmApproval = async (requestId, details) => {
		const displayRef = approvingRequest?.reference || approvingRequest?.movementNumber || requestId;
		await approveBookingMutation.mutateAsync({
			requestId,
			details,
			displayRef
		});
	};
	const handleConfirmRevision = async (requestId, revisionNotes) => {
		try {
			await requestRevisionInSupabase(requestId, userId, revisionNotes);
			showPillToast.info("Shipper has been notified with revision instructions.", "Revision Request Dispatched");
			queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
		} catch (err) {
			showPillToast.error(err instanceof Error ? err.message : "Please try again.", "Failed to submit revision");
		}
	};
	const handleExportCsv = () => {
		if (filteredRequests.length === 0) {
			showPillToast.error("No requests to export", "Notice");
			return;
		}
		const headers = [
			"Reference",
			"Priority",
			"Status",
			"Shipper",
			"Consignee",
			"POL",
			"POD",
			"ETD",
			"Equipment",
			"Weight_Kg",
			"Carrier",
			"Rate_USD"
		];
		const rows = filteredRequests.map((r) => [
			r.reference,
			r.priority,
			r.status,
			`"${r.supplierName}"`,
			`"${r.buyerName}"`,
			r.polCode,
			r.podCode,
			r.requestedEtd,
			`"${r.containerCount}x ${r.containerSize}"`,
			r.cargo.totalWeightKg,
			r.preferredCarrier,
			r.totalFreight
		]);
		const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", `Nashmia_Booking_Requests_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		showPillToast.build(`Downloaded ${filteredRequests.length} booking request records.`, "CSV Export Generated");
	};
	const handleOpenMultiForwarder = (req) => {
		const target = req || currentActiveDetail || filteredRequests[0] || null;
		if (!target) {
			showPillToast.error("Please select a booking request first to dispatch quote requests.", "Notice");
			return;
		}
		setMultiForwarderBooking(target);
		setIsMultiForwarderModalOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RequestsHeader, {
				onOpenMobileMenu,
				onRefresh: () => void refetch(),
				isRefreshing: isFetching,
				onExportCsv: handleExportCsv,
				onOpenMultiForwarderModal: () => handleOpenMultiForwarder(),
				totalRequests: stats.total,
				pendingCount: stats.pendingReview
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 727,
				columnNumber: 7
			}, this),
			isLoading && requests.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RequestsMetricsSkeleton, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 739,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RequestsMetrics, {
				stats,
				activeStatusFilter: filters.status,
				onFilterStatus: (status) => {
					if (status === "Urgent") setFilters((prev) => ({
						...prev,
						priority: "Urgent",
						status: "All"
					}));
					else setFilters((prev) => ({
						...prev,
						status,
						priority: "All"
					}));
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 741,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RequestsToolbar, {
				filters,
				onFilterChange: handleFilterChange,
				statusCounts,
				totalFiltered: filteredRequests.length
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 759,
				columnNumber: 7
			}, this),
			isLoading && requests.length === 0 ? filters.viewMode === "table" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RequestsTableSkeleton, { rows: 7 }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 769,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RequestsCardGridSkeleton, { count: 6 }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 771,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				filters.viewMode === "grid" && /* @__PURE__ */ (void 0)(RequestsCardGrid, {
					requests: filteredRequests,
					forwarderRequests: allForwarderRequests,
					onSelectRequest: (req) => setActiveDetailRequest(req),
					onApproveRequest: (req) => setApprovingRequest(req),
					onRequestRevision: (req) => setRevisingRequest(req),
					onRequestQuotes: (req) => handleOpenMultiForwarder(req),
					onViewQuotations: (req) => setViewingQuotationsBooking(req),
					onOpenAwardDrawer: (req) => setAwardDrawerBooking(req),
					onComposeEmail: (req) => {
						setEmailingRequest(req);
						setIsEmailModalOpen(true);
					}
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 776,
					columnNumber: 13
				}, this),
				filters.viewMode === "table" && /* @__PURE__ */ (void 0)(RequestsTableView, {
					requests: filteredRequests,
					forwarderRequests: allForwarderRequests,
					selectedIds,
					onToggleSelect: handleToggleSelect,
					onToggleSelectAll: handleToggleSelectAll,
					onSelectRequest: (req) => setActiveDetailRequest(req),
					onApproveRequest: (req) => setApprovingRequest(req),
					onRequestRevision: (req) => setRevisingRequest(req),
					onRequestQuotes: (req) => handleOpenMultiForwarder(req),
					onViewQuotations: (req) => setViewingQuotationsBooking(req),
					onOpenAwardDrawer: (req) => setAwardDrawerBooking(req),
					onComposeEmail: (req) => {
						setEmailingRequest(req);
						setIsEmailModalOpen(true);
					}
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 793,
					columnNumber: 13
				}, this),
				filters.viewMode === "kanban" && /* @__PURE__ */ (void 0)(RequestsKanbanView, {
					requests: filteredRequests,
					onSelectRequest: (req) => setActiveDetailRequest(req),
					onApproveRequest: (req) => setApprovingRequest(req),
					onRequestRevision: (req) => setRevisingRequest(req)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 813,
					columnNumber: 13
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 774,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RequestDetailDrawer, {
				request: currentActiveDetail,
				isOpen: Boolean(currentActiveDetail),
				onClose: () => setActiveDetailRequest(null),
				onApprove: (req) => {
					setActiveDetailRequest(null);
					setApprovingRequest(req);
				},
				onRequestRevision: (req) => {
					setActiveDetailRequest(null);
					setRevisingRequest(req);
				},
				onRequestQuotes: (req) => handleOpenMultiForwarder(req),
				onViewQuotations: (req) => setViewingQuotationsBooking(req),
				onOpenAwardDrawer: (req) => setAwardDrawerBooking(req),
				onComposeEmail: (req) => {
					setEmailingRequest(req);
					setIsEmailModalOpen(true);
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 824,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ApproveRequestModal, {
				request: approvingRequest,
				isOpen: Boolean(approvingRequest),
				onClose: () => setApprovingRequest(null),
				onConfirm: handleConfirmApproval
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 846,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RevisionRequestModal, {
				request: revisingRequest,
				isOpen: Boolean(revisingRequest),
				onClose: () => setRevisingRequest(null),
				onConfirm: handleConfirmRevision
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 854,
				columnNumber: 7
			}, this),
			isMultiForwarderModalOpen && /* @__PURE__ */ (void 0)(MultiForwarderRequestModal, {
				booking: multiForwarderBooking,
				isOpen: isMultiForwarderModalOpen,
				onClose: () => {
					setIsMultiForwarderModalOpen(false);
					setMultiForwarderBooking(null);
				},
				onDispatched: () => {
					refetch();
					queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 863,
				columnNumber: 9
			}, this),
			viewingQuotationsBooking && /* @__PURE__ */ (void 0)(GroupedQuotationModal, {
				booking: viewingQuotationsBooking,
				isOpen: Boolean(viewingQuotationsBooking),
				onClose: () => setViewingQuotationsBooking(null),
				onRequestMoreQuotes: (req) => {
					setViewingQuotationsBooking(null);
					handleOpenMultiForwarder(req);
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 879,
				columnNumber: 9
			}, this),
			awardDrawerBooking && /* @__PURE__ */ (void 0)(AwardStatusDrawer, {
				booking: awardDrawerBooking,
				isOpen: Boolean(awardDrawerBooking),
				onClose: () => setAwardDrawerBooking(null),
				onOpenFullQuotations: (req) => {
					setAwardDrawerBooking(null);
					setViewingQuotationsBooking(req);
				},
				onAwarded: () => {
					refetch();
					queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
					queryClient.invalidateQueries({ queryKey: ["all-forwarder-requests"] });
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 892,
				columnNumber: 9
			}, this),
			isEmailModalOpen && /* @__PURE__ */ (void 0)(ComposeEmailModal, {
				isOpen: isEmailModalOpen,
				onClose: () => {
					setIsEmailModalOpen(false);
					setEmailingRequest(null);
				},
				defaultRecipientEmail: emailingRequest?.requestedBy.email,
				defaultSubject: emailingRequest ? `Booking Request Update: ${emailingRequest.reference} | ${emailingRequest.polCode} → ${emailingRequest.podCode}` : ""
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 910,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 725,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/requests.tsx?tsr-split=component";
function RequestsRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, { children: ({ onOpenMobileMenu }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RequestsPage, { onOpenMobileMenu }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 11
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 4,
		columnNumber: 10
	}, this);
}
//#endregion
export { RequestsRoute as component };
