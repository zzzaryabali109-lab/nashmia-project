import { o as __toESM } from "../_runtime.mjs";
import { n as supabase, t as isSupabaseConfigured } from "./supabase-lbao-IEt.mjs";
import { Ct as linkAndReviewDriveDocument, G as INITIAL_FILES, K as INITIAL_FOLDERS, Mt as saveCutOffsForMovement, Nt as saveDriveDocument, Ot as removeDriveDocument, et as extractMovementNumber, ht as getSavedDocuments, kt as safeInsertNotification, pt as getLocalBookings } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { l as require_react_dom, u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as extractCutOffDeadlinesOnly } from "./ssr.mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { A as Share2, At as File, D as SlidersHorizontal, Dt as Folder, Kt as Copy, Lt as Eye, N as Send, O as Ship, P as Search, St as Info, Tt as Globe, U as Presentation, Ut as Download, V as Receipt, Vt as EllipsisVertical, W as Plus, Yt as Clock, c as Users, cn as Check, f as Upload, h as TriangleAlert, i as X, jt as FileText, k as ShieldCheck, mt as Link, ot as Menu, rn as ChevronsUpDown, sn as ChevronDown, tn as CircleCheck, un as Calendar, v as Trash2, wn as Archive, wt as HardDrive, zt as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { N as useAuth, _ as DropdownMenuTrigger, c as DialogDescription, d as DialogTitle, f as DropdownMenu, g as DropdownMenuSeparator, m as DropdownMenuItem, o as Dialog, p as DropdownMenuContent, r as AppLayout, s as DialogContent, u as DialogHeader, v as useSupabaseRealtime } from "./router-BJg2H47m.mjs";
import { t as LifecycleDropdownSelect$1 } from "./LifecycleDropdownSelect-Dr2RhBr1.mjs";
import { t as PillPagination } from "./PillPagination-D19p0fGj.mjs";
import { n as Input, t as Button } from "./input-BcTzOgX2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/documents-CIwPiA6d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var _jsxFileName$8 = "/app/applet/src/components/nashmia/documents/DocumentsSummaryStrip.tsx";
function DocumentsSummaryStrip({ totalCount, cutoffCount, blCount, otherCount, activeFilter = "all", onSelectFilter }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative w-full min-w-0 max-w-full",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -top-8 inset-x-0 mx-auto h-72 w-full max-w-full sm:max-w-4xl bg-gradient-to-r from-amber-400/20 via-orange-300/15 to-teal-400/15 blur-3xl opacity-65 -z-10" }, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 24,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onSelectFilter?.(activeFilter === "all" ? "all" : "all"),
					className: `group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px] sm:min-h-[155px] cursor-pointer text-left w-full ${activeFilter === "all" ? "border-slate-300 ring-2 ring-slate-900/10 shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)]" : "border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 42,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 41,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Total"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 45,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Documents"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 48,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 44,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 40,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: totalCount
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 56,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-end gap-1.5 h-6 pb-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-2 rounded-full bg-slate-900/90" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 61,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-3.5 rounded-full bg-slate-900/90" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 62,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-6 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 63,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 64,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-2.5 rounded-full bg-slate-900/80" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 65,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 60,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 55,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 30,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onSelectFilter?.(activeFilter === "cutoff" ? "all" : "cutoff"),
					className: `group relative overflow-hidden rounded-[24px] sm:rounded-[26px] p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px] sm:min-h-[155px] cursor-pointer text-left w-full ${activeFilter === "cutoff" ? "border-amber-300/70 ring-2 ring-amber-300/40 shadow-[0_20px_42px_-10px_rgba(110,65,25,0.45)]" : "border-amber-400/20 shadow-[0_16px_36px_-10px_rgba(110,65,25,0.3)] hover:shadow-[0_20px_42px_-10px_rgba(110,65,25,0.4)]"}`,
					style: { background: `
              radial-gradient(circle at 85% 15%, rgba(165, 105, 45, 0.85) 0%, transparent 60%),
              radial-gradient(circle at 20% 80%, rgba(125, 75, 30, 0.5) 0%, transparent 60%),
              linear-gradient(135deg, #44311e 0%, #684824 52%, #382515 100%)
            ` },
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" }, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 90,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-11 sm:size-12 rounded-full border border-amber-200/30 bg-white/5 backdrop-blur-xs flex items-center justify-center text-amber-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-5 stroke-[1.8] text-amber-100" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 95,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 94,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-amber-100/95",
									children: "Cut-Off"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 98,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-amber-100/95",
									children: "Notices"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 101,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 97,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 93,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-baseline",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[28px] sm:text-[32px] font-bold text-white tracking-tight leading-none",
									children: cutoffCount
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 110,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-normal text-amber-200/80 ml-1",
									children: "docs"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 113,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 109,
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
											fileName: _jsxFileName$8,
											lineNumber: 119,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "22",
											cy: "5",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 125,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "42",
											cy: "18",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 126,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "62",
											cy: "8",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 127,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 118,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 117,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 108,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 73,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onSelectFilter?.(activeFilter === "bl" ? "all" : "bl"),
					className: `group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px] sm:min-h-[155px] cursor-pointer text-left w-full ${activeFilter === "bl" ? "border-slate-300 ring-2 ring-slate-900/10 shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)]" : "border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 148,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 147,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Bills of"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 151,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Lading"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 154,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 150,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 146,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: blCount
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 162,
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
									fileName: _jsxFileName$8,
									lineNumber: 168,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 167,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 166,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 161,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 136,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onSelectFilter?.(activeFilter === "other" ? "all" : "other"),
					className: `group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px] sm:min-h-[155px] cursor-pointer text-left w-full ${activeFilter === "other" ? "border-slate-300 ring-2 ring-slate-900/10 shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)]" : "border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(File, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 194,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 193,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Other"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 197,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Documents"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 200,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 196,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 192,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: otherCount
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 208,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-rows-3 grid-flow-col gap-x-1.5 gap-y-1 pb-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 213,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 214,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 215,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 217,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-400" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 218,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 219,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 221,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 222,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 223,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 225,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-400" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 226,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 227,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 229,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 230,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 231,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 212,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 207,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 182,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 26,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
var _jsxFileName$7 = "/app/applet/src/components/nashmia/documents/FileThumbnailIcon.tsx";
function FileThumbnailIcon({ file, size = "md", className, showFormatTag = false }) {
	const [imageError, setImageError] = (0, import_react.useState)(false);
	const rawExt = (file.extension || file.name.split(".").pop() || "").toLowerCase();
	const fileType = file.type || getFileTypeFromExt(rawExt);
	const nameLower = (file.name || "").toLowerCase();
	const typeTag = (file.metadata?.typeTag || file.metadata?.category || file.metadata?.documentType || "").toLowerCase();
	const isBl = typeTag.includes("bill of lading") || typeTag === "bl" || nameLower.includes("bl_") || nameLower.includes("bl-") || nameLower.includes("master_bl") || nameLower.includes("house_bl");
	const isInvoice = typeTag.includes("invoice") || nameLower.includes("invoice");
	typeTag.includes("packing") || nameLower.includes("packing");
	const isCutOff = typeTag.includes("cut-off") || typeTag.includes("cutoff") || nameLower.includes("cut-off") || nameLower.includes("cutoff");
	const isImage = fileType === "image" || [
		"jpg",
		"jpeg",
		"png",
		"webp",
		"gif",
		"svg"
	].includes(rawExt);
	const imageUrl = file.url || file.metadata?.fileUrl || file.metadata?.thumbnail || file.thumbnailUrl || (isImage ? getFallbackImageUrl(file.name) : null);
	const sizeClasses = {
		sm: "size-7 rounded-lg text-xs",
		md: "size-8.5 sm:size-9 rounded-xl text-sm",
		lg: "size-14 rounded-2xl text-base",
		xl: "size-20 rounded-2xl text-lg"
	};
	const iconSizes = {
		sm: "size-3.5",
		md: "size-4.5",
		lg: "size-7",
		xl: "size-10"
	};
	if (isImage && imageUrl && !imageError) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("relative overflow-hidden shrink-0 border border-slate-200/90 bg-slate-100 shadow-xs group/thumb select-none flex items-center justify-center", sizeClasses[size], className),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: imageUrl,
				alt: file.name,
				onError: () => setImageError(true),
				className: "size-full object-cover transition-transform duration-300 group-hover/thumb:scale-110",
				loading: "lazy",
				referrerPolicy: "no-referrer"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 105,
				columnNumber: 9
			}, this),
			(size === "lg" || size === "xl" || showFormatTag) && /* @__PURE__ */ (void 0)("span", {
				className: "absolute bottom-1 right-1 rounded-md bg-black/70 px-1 py-0.2 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-xs",
				children: rawExt || "IMG"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 115,
				columnNumber: 11
			}, this),
			size === "sm" && /* @__PURE__ */ (void 0)("span", { className: "absolute bottom-0 right-0 size-2 rounded-tl-xs bg-amber-500" }, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 120,
				columnNumber: 11
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 98,
		columnNumber: 7
	}, this);
	if (isBl && rawExt !== "jpg" && rawExt !== "png") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("relative shrink-0 flex items-center justify-center font-bold text-white shadow-xs select-none", "bg-gradient-to-br from-[#1E40AF] via-[#1D4ED8] to-[#1E3A8A] ring-1 ring-blue-500/30", sizeClasses[size], className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 right-0 border-t-[5px] border-r-[5px] border-t-white/30 border-r-[#1E3A8A] rounded-bl-xs" }, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 137,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: cn("font-black tracking-tight", size === "sm" ? "text-[10px]" : "text-xs"),
				children: "B/L"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 139,
				columnNumber: 11
			}, this), (size === "lg" || size === "xl") && /* @__PURE__ */ (void 0)("span", {
				className: "text-[9px] font-semibold tracking-wider text-blue-200 uppercase mt-0.5",
				children: "Bill of Lading"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 145,
				columnNumber: 13
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 138,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 129,
		columnNumber: 7
	}, this);
	if (isInvoice && rawExt !== "jpg" && rawExt !== "png") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("relative shrink-0 flex items-center justify-center font-bold text-white shadow-xs select-none", "bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 ring-1 ring-emerald-500/30", sizeClasses[size], className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 right-0 border-t-[5px] border-r-[5px] border-t-white/30 border-r-teal-800 rounded-bl-xs" }, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 165,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Receipt, { className: iconSizes[size] }, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 167,
				columnNumber: 11
			}, this), (size === "lg" || size === "xl") && /* @__PURE__ */ (void 0)("span", {
				className: "text-[9px] font-black uppercase tracking-wider mt-0.5",
				children: "INV"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 169,
				columnNumber: 13
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 166,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 157,
		columnNumber: 7
	}, this);
	if (isCutOff && rawExt === "pdf") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("relative shrink-0 flex items-center justify-center font-bold text-white shadow-xs select-none", "bg-gradient-to-br from-rose-500 via-rose-600 to-red-700 ring-1 ring-rose-500/30", sizeClasses[size], className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 right-0 border-t-[6px] border-r-[6px] border-t-white/35 border-r-red-800 rounded-bl-xs" }, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 187,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 24 24",
				className: cn("fill-current", iconSizes[size]),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" }, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 190,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 189,
				columnNumber: 11
			}, this), (size === "lg" || size === "xl") && /* @__PURE__ */ (void 0)("span", {
				className: "text-[10px] font-black uppercase tracking-wider mt-0.5 opacity-95",
				children: "PDF"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 193,
				columnNumber: 13
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 188,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 179,
		columnNumber: 7
	}, this);
	switch (fileType) {
		case "pdf": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("relative shrink-0 flex items-center justify-center font-bold text-white shadow-xs select-none", "bg-gradient-to-br from-rose-500 via-rose-600 to-red-700 ring-1 ring-rose-500/25", sizeClasses[size], className),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 right-0 border-t-[6px] border-r-[6px] border-t-white/35 border-r-red-800 rounded-bl-xs" }, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 215,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col items-center justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
						viewBox: "0 0 24 24",
						className: cn("fill-current", iconSizes[size]),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" }, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 219,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 218,
						columnNumber: 13
					}, this), (size === "lg" || size === "xl") && /* @__PURE__ */ (void 0)("span", {
						className: "text-[10px] font-black uppercase tracking-wider mt-0.5 opacity-95",
						children: "PDF"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 222,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 217,
					columnNumber: 11
				}, this),
				showFormatTag && size !== "lg" && size !== "xl" && /* @__PURE__ */ (void 0)("span", {
					className: "absolute -bottom-1 -right-1 rounded-sm bg-red-900/90 px-1 py-0.1 text-[8px] font-bold text-white shadow-xs",
					children: "PDF"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 229,
					columnNumber: 13
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 206,
			columnNumber: 9
		}, this);
		case "sheet": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("relative shrink-0 flex items-center justify-center font-bold text-white shadow-xs select-none", "bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 ring-1 ring-emerald-500/25", sizeClasses[size], className),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
					viewBox: "0 0 24 24",
					className: cn("fill-current", iconSizes[size]),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H5v-2h4v2zm0-4H5v-2h4v2zm0-4H5V7h4v2zm10 8h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V7h8v2z" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 248,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 247,
					columnNumber: 13
				}, this), (size === "lg" || size === "xl") && /* @__PURE__ */ (void 0)("span", {
					className: "text-[10px] font-black uppercase tracking-wider mt-0.5 opacity-95",
					children: "XLS"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 251,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 246,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 238,
			columnNumber: 9
		}, this);
		case "doc": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("relative shrink-0 flex items-center justify-center font-bold text-white shadow-xs select-none", "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 ring-1 ring-blue-500/25", sizeClasses[size], className),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
					viewBox: "0 0 24 24",
					className: cn("fill-current", iconSizes[size]),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 271,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 270,
					columnNumber: 13
				}, this), (size === "lg" || size === "xl") && /* @__PURE__ */ (void 0)("span", {
					className: "text-[10px] font-black uppercase tracking-wider mt-0.5 opacity-95",
					children: "DOC"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 274,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 269,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 261,
			columnNumber: 9
		}, this);
		case "image": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("relative shrink-0 flex items-center justify-center font-bold text-white shadow-xs select-none", "bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-700 ring-1 ring-purple-500/25", sizeClasses[size], className),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
					viewBox: "0 0 24 24",
					className: cn("fill-current", iconSizes[size]),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 294,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 293,
					columnNumber: 13
				}, this), (size === "lg" || size === "xl") && /* @__PURE__ */ (void 0)("span", {
					className: "text-[10px] font-black uppercase tracking-wider mt-0.5 opacity-95",
					children: "IMG"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 297,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 292,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 284,
			columnNumber: 9
		}, this);
		case "slides": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("relative shrink-0 flex items-center justify-center font-bold text-white shadow-xs select-none", "bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 ring-1 ring-amber-600/25", sizeClasses[size], className),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Presentation, { className: iconSizes[size] }, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 315,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 307,
			columnNumber: 9
		}, this);
		case "archive": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("relative shrink-0 flex items-center justify-center font-bold text-white shadow-xs select-none", "bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 ring-1 ring-slate-600/25", sizeClasses[size], className),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Archive, { className: iconSizes[size] }, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 329,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 321,
			columnNumber: 9
		}, this);
		default: return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("relative shrink-0 flex items-center justify-center font-bold text-white shadow-xs select-none", "bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 ring-1 ring-slate-500/25", sizeClasses[size], className),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: iconSizes[size] }, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 343,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 335,
			columnNumber: 9
		}, this);
	}
}
function getFileTypeFromExt(ext) {
	switch (ext) {
		case "pdf": return "pdf";
		case "xls":
		case "xlsx":
		case "csv": return "sheet";
		case "doc":
		case "docx":
		case "txt": return "doc";
		case "jpg":
		case "jpeg":
		case "png":
		case "webp":
		case "gif":
		case "svg": return "image";
		case "ppt":
		case "pptx": return "slides";
		case "zip":
		case "rar":
		case "7z":
		case "tar":
		case "gz": return "archive";
		default: return "doc";
	}
}
function getFallbackImageUrl(name) {
	const lower = name.toLowerCase();
	if (lower.includes("packing") || lower.includes("cargo") || lower.includes("loading")) return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&auto=format&fit=crop&q=80";
	if (lower.includes("container") || lower.includes("ship") || lower.includes("port")) return "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=300&auto=format&fit=crop&q=80";
	if (lower.includes("inspection") || lower.includes("factory") || lower.includes("warehouse")) return "https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&auto=format&fit=crop&q=80";
	return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&auto=format&fit=crop&q=80";
}
var _jsxFileName$6 = "/app/applet/src/components/nashmia/documents/FileDetailsDrawer.tsx";
function FileDetailsDrawer({ file, folder, open, onClose, onShare, onDelete, onReview }) {
	if (!open || !file && !folder) return null;
	const isFolder = Boolean(folder && !file);
	const title = file?.name || folder?.name || "Item Details";
	const isNeedsReview = Boolean(file?.metadata?.needsReview || file?.metadata?.reviewStatus === "NEEDS_REVIEW");
	const unconfidentFields = file?.metadata?.unconfidentFields || [];
	const reviewReason = file?.metadata?.reviewReason;
	const isCutOffDoc = file?.metadata?.category === "Cut-Off Notice" || file?.metadata?.documentType === "CUT_OFF_NOTICE";
	const isBlDoc = file?.metadata?.category === "Bill of Lading" || file?.metadata?.documentType === "BILL_OF_LADING";
	const cutOffDeadlines = file?.metadata?.cutOffDeadlines || file?.metadata?.cutOffDates?.deadlines;
	const movementNumber = file?.metadata?.movementNumber;
	const forwarderName = file?.metadata?.forwarderName;
	const documentType = file?.metadata?.documentType || (isBlDoc ? "BILL_OF_LADING" : isCutOffDoc ? "CUT_OFF_NOTICE" : void 0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		onClick: onClose,
		className: "fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-200 sm:hidden animate-in fade-in"
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 68,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-x-0 bottom-0 top-auto sm:inset-y-0 sm:right-0 sm:top-0 sm:bottom-0 sm:left-auto z-50 w-full sm:w-96 max-h-[92vh] sm:max-h-none rounded-t-[28px] sm:rounded-none bg-white border-t sm:border-t-0 sm:border-l border-slate-200 shadow-2xl p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-bottom sm:slide-in-from-right duration-240 ease-[cubic-bezier(0.16,1,0.3,1)]",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				"data-swipe-handle": "true",
				className: "mx-auto -mt-2 mb-2 flex h-6 w-full max-w-[140px] cursor-grab touch-none items-center justify-center sm:hidden select-none shrink-0",
				"aria-label": "Drag down to dismiss",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 80,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 75,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between pb-4 border-b border-slate-100",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2.5 min-w-0",
					children: [isFolder ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-2 rounded-lg bg-blue-50 text-[#1D63ED]",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Folder, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 88,
							columnNumber: 19
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 87,
						columnNumber: 17
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-2 rounded-lg bg-blue-50 text-[#1D63ED]",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 92,
							columnNumber: 19
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 91,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-sm font-bold text-slate-800 truncate",
							children: title
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 96,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[11px] text-slate-400 font-medium",
							children: isFolder ? "Directory Folder" : `${file?.extension?.toUpperCase()} File`
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 97,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 95,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 85,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: onClose,
					className: "p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 106,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 102,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 84,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "my-5 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200/80 p-6 flex flex-col items-center justify-center text-center shadow-xs",
				children: [
					isFolder ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "size-16 rounded-2xl bg-blue-100/80 text-[#1D63ED] flex items-center justify-center mb-3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Folder, { className: "size-8" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 114,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 113,
						columnNumber: 15
					}, this) : file ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mb-3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileThumbnailIcon, {
							file,
							size: "lg",
							showFormatTag: true
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 118,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 117,
						columnNumber: 15
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "size-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "size-8" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 122,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 121,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs font-semibold text-slate-800 truncate max-w-full px-2",
						children: title
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 125,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[11px] text-slate-400 mt-0.5 font-medium",
						children: file?.fileSize || folder?.totalSize
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 128,
						columnNumber: 13
					}, this),
					isNeedsReview ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, { className: "size-3 text-amber-700" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 133,
							columnNumber: 17
						}, this), "Needs Review"]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 132,
						columnNumber: 15
					}, this) : file?.metadata?.category ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200",
						children: file.metadata.category
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 137,
						columnNumber: 15
					}, this) : null
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 111,
				columnNumber: 11
			}, this),
			isNeedsReview && /* @__PURE__ */ (void 0)("div", {
				className: "mb-5 rounded-xl border border-amber-300 bg-amber-50/90 p-4 space-y-2 text-xs",
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between font-bold text-amber-900",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-3.5 text-amber-700" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 148,
								columnNumber: 19
							}, this), " Manual Review Required"]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 147,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 font-bold",
							children: "Stored Safely"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 150,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 146,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "text-amber-800 text-[11px] leading-relaxed",
						children: reviewReason || "Movement, document type, or cut-off schedule could not be identified with confidence. Stored safely for operator review."
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 154,
						columnNumber: 15
					}, this),
					unconfidentFields.length > 0 && /* @__PURE__ */ (void 0)("div", {
						className: "flex flex-wrap gap-1 pt-1",
						children: unconfidentFields.map((f) => /* @__PURE__ */ (void 0)("span", {
							className: "inline-block px-1.5 py-0.5 text-[10px] font-medium bg-amber-200/80 text-amber-900 rounded",
							children: f === "movement" ? "Unidentified Movement" : f === "document_type" ? "Ambiguous Doc Type" : "Unclear Cut-Off"
						}, f, false, {
							fileName: _jsxFileName$6,
							lineNumber: 161,
							columnNumber: 21
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 159,
						columnNumber: 17
					}, this),
					file && onReview && /* @__PURE__ */ (void 0)("div", {
						className: "pt-2",
						children: /* @__PURE__ */ (void 0)(Button, {
							size: "sm",
							onClick: () => onReview(file),
							className: "w-full bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold gap-1.5 h-8",
							children: [/* @__PURE__ */ (void 0)(ShieldCheck, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 181,
								columnNumber: 21
							}, this), "Review & Link to Movement"]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 176,
							columnNumber: 19
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 175,
						columnNumber: 17
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 145,
				columnNumber: 13
			}, this),
			isCutOffDoc && /* @__PURE__ */ (void 0)("div", {
				className: "mb-5 rounded-xl border border-amber-200/80 bg-amber-50/40 p-4 space-y-3",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (void 0)("span", {
						className: "text-xs font-bold text-amber-900 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (void 0)(Clock, { className: "size-3.5 text-amber-600" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 194,
							columnNumber: 19
						}, this), " Cut-Off Deadlines"]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 193,
						columnNumber: 17
					}, this), movementNumber && /* @__PURE__ */ (void 0)("span", {
						className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-amber-200",
						children: movementNumber
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 197,
						columnNumber: 19
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 192,
					columnNumber: 15
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "space-y-2",
					children: cutOffDeadlines && cutOffDeadlines.length > 0 ? cutOffDeadlines.map((item, idx) => /* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-white border border-amber-200/60 shadow-2xs",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "font-semibold text-slate-700",
							children: item.type
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 210,
							columnNumber: 23
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: cn("font-medium text-right", item.dateTime ? "text-amber-800 font-semibold" : "text-slate-400 italic"),
							children: item.dateTime ? `→ ${item.dateTime}` : "Not Provided"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 211,
							columnNumber: 23
						}, this)]
					}, idx, true, {
						fileName: _jsxFileName$6,
						lineNumber: 206,
						columnNumber: 21
					}, this)) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
						file?.metadata?.cutOffDates?.siCutoff && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-white border border-amber-200/60 shadow-2xs",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-slate-700",
								children: "SI Cut-Off"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 225,
								columnNumber: 25
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-amber-800",
								children: ["→ ", file.metadata.cutOffDates.siCutoff]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 226,
								columnNumber: 25
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 224,
							columnNumber: 23
						}, this),
						file?.metadata?.cutOffDates?.vgmCutoff && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-white border border-amber-200/60 shadow-2xs",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-slate-700",
								children: "VGM Cut-Off"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 233,
								columnNumber: 25
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-amber-800",
								children: ["→ ", file.metadata.cutOffDates.vgmCutoff]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 234,
								columnNumber: 25
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 232,
							columnNumber: 23
						}, this),
						file?.metadata?.cutOffDates?.gateCutoff && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-white border border-amber-200/60 shadow-2xs",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-slate-700",
								children: "CY Cut-Off"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 241,
								columnNumber: 25
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-amber-800",
								children: ["→ ", file.metadata.cutOffDates.gateCutoff]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 242,
								columnNumber: 25
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 240,
							columnNumber: 23
						}, this),
						file?.metadata?.cutOffDates?.portCutoff && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-white border border-amber-200/60 shadow-2xs",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-slate-700",
								children: "Port Cut-Off"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 249,
								columnNumber: 25
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-amber-800",
								children: ["→ ", file.metadata.cutOffDates.portCutoff]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 250,
								columnNumber: 25
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 248,
							columnNumber: 23
						}, this),
						file?.metadata?.cutOffDates?.closingDate && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-white border border-amber-200/60 shadow-2xs",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-slate-700",
								children: "Cargo Cut-Off"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 257,
								columnNumber: 25
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-amber-800",
								children: ["→ ", file.metadata.cutOffDates.closingDate]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 258,
								columnNumber: 25
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 256,
							columnNumber: 23
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 222,
						columnNumber: 19
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 203,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 191,
				columnNumber: 13
			}, this),
			isBlDoc && /* @__PURE__ */ (void 0)("div", {
				className: "mb-5 rounded-xl border border-blue-200/80 bg-blue-50/40 p-4 space-y-3",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (void 0)("span", {
						className: "text-xs font-bold text-blue-900 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (void 0)(FileText, { className: "size-3.5 text-blue-600" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 274,
							columnNumber: 19
						}, this), " Bill of Lading (B/L)"]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 273,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)("span", {
						className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-600 text-white shadow-2xs",
						children: "BILL_OF_LADING"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 276,
						columnNumber: 17
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 272,
					columnNumber: 15
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "text-xs space-y-1.5 py-2 px-3 rounded-lg bg-white border border-blue-200/60 text-slate-700",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-slate-400",
								children: "Status"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 283,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-emerald-700",
								children: "Original Document Saved"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 284,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 282,
							columnNumber: 17
						}, this),
						movementNumber && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between pt-1 border-t border-slate-100",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-slate-400",
								children: "Linked Movement"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 288,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-mono font-bold text-blue-700",
								children: movementNumber
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 289,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 287,
							columnNumber: 19
						}, this),
						forwarderName && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between pt-1 border-t border-slate-100",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-slate-400",
								children: "Forwarder / Carrier"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 294,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-medium text-slate-800",
								children: forwarderName
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 295,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 293,
							columnNumber: 19
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 281,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 271,
				columnNumber: 13
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-[11px] font-bold tracking-wider text-slate-400 uppercase",
					children: "Properties & Metadata"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 304,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-2.5 text-xs",
					children: [
						file && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between text-slate-600 py-1 border-b border-slate-50",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-slate-400",
								children: "Document Name"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 311,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-slate-900 truncate max-w-[200px]",
								title: file.name,
								children: file.name
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 312,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 310,
							columnNumber: 17
						}, this),
						movementNumber && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between text-slate-600 py-1 border-b border-slate-50",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-slate-400",
								children: "Movement Number"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 323,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded",
								children: movementNumber
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 324,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 322,
							columnNumber: 17
						}, this),
						documentType && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between text-slate-600 py-1 border-b border-slate-50",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-slate-400",
								children: "Document Type"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 332,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-slate-800 px-2 py-0.5 bg-slate-100 rounded",
								children: file?.metadata?.displayDocumentType || documentType
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 333,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 331,
							columnNumber: 17
						}, this),
						file?.metadata?.originalFilename && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between text-slate-600 py-1 border-b border-slate-50",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-slate-400",
								children: "Original Filename"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 341,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-mono text-slate-800 text-[11px] truncate max-w-[200px]",
								title: file.metadata.originalFilename,
								children: file.metadata.originalFilename
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 342,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 340,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-slate-600 py-1 border-b border-slate-50",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "flex items-center gap-2 text-slate-400",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HardDrive, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 353,
									columnNumber: 19
								}, this), " File Format & Size"]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 352,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-semibold text-slate-800",
								children: [
									(file?.metadata?.fileFormat || file?.extension || "PDF").toUpperCase(),
									" •",
									" ",
									file?.fileSize || folder?.totalSize
								]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 355,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 351,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-slate-600 py-1 border-b border-slate-50",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "flex items-center gap-2 text-slate-400",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 363,
									columnNumber: 19
								}, this), " Received Date"]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 362,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-medium text-slate-800",
								children: [file?.metadata?.receivedDate || file?.lastModified || "Just now", file?.metadata?.receivedTime ? ` (${file.metadata.receivedTime})` : ""]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 365,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 361,
							columnNumber: 15
						}, this),
						(forwarderName || file?.metadata?.forwarder) && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between text-slate-600 py-1 border-b border-slate-50",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-slate-400",
								children: "Sender / Forwarder"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 373,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-slate-800 truncate max-w-[200px]",
								children: forwarderName || file?.metadata?.forwarder
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 374,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 372,
							columnNumber: 17
						}, this),
						(file?.metadata?.sourceEmail || file?.metadata?.senderEmail) && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between text-slate-600 py-1 border-b border-slate-50",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-slate-400",
								children: "Source Email"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 382,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-mono text-slate-700 text-[11px] truncate max-w-[200px]",
								title: file.metadata.sourceEmail || file.metadata.senderEmail || void 0,
								children: file.metadata.sourceEmail || file.metadata.senderEmail
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 383,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 381,
							columnNumber: 17
						}, this),
						file?.metadata?.uploadStatus || file?.metadata?.status ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-slate-600 py-1 border-b border-slate-50",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-400",
								children: "Upload / Status"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 394,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-blue-50 text-blue-700 border border-blue-200/60",
								children: file.metadata.uploadStatus || file.metadata.status
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 395,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 393,
							columnNumber: 17
						}, this) : null,
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "py-2 border-b border-slate-50",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2 text-slate-400 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 403,
									columnNumber: 19
								}, this), " People with Access"]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 402,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap gap-1.5",
								children: (file?.owners || folder?.sharedWith || []).map((owner) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-1.5 bg-slate-50 border border-slate-200/60 rounded-full py-0.5 pl-1 pr-2.5 text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: cn("size-4 rounded-full flex items-center justify-center font-bold text-[8px]", owner.avatarBg),
										children: owner.avatarText
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 411,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-medium text-slate-700",
										children: owner.name
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 419,
										columnNumber: 23
									}, this)]
								}, owner.id, true, {
									fileName: _jsxFileName$6,
									lineNumber: 407,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 405,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 401,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 308,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 303,
				columnNumber: 11
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 73,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "pt-5 border-t border-slate-100 flex flex-col gap-2",
			children: [file && (file.url || file.metadata?.fileUrl) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				href: file.url || file.metadata?.fileUrl || "#",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1D63ED] font-semibold text-xs border border-blue-200 transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 437,
					columnNumber: 15
				}, this), " Open Stored Document"]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 431,
				columnNumber: 13
			}, this) : null, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2",
				children: [
					file && /* @__PURE__ */ (void 0)(Button, {
						size: "sm",
						onClick: () => {
							const storagePath = file.metadata?.storagePath;
							const downloadUrl = storagePath ? `/api/documents/download?path=${encodeURIComponent(storagePath)}` : file.url || file.metadata?.fileUrl || file.sharedLink;
							if (downloadUrl && downloadUrl !== "#") {
								const a = document.createElement("a");
								a.href = downloadUrl;
								a.download = file.metadata?.originalFilename || file.metadata?.fileName || file.name;
								a.target = "_blank";
								a.rel = "noopener noreferrer";
								document.body.appendChild(a);
								a.click();
								document.body.removeChild(a);
							}
						},
						className: "flex-1 bg-[#1D63ED] hover:bg-blue-700 text-white text-xs font-semibold gap-1.5 h-8.5",
						children: [/* @__PURE__ */ (void 0)(Download, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 463,
							columnNumber: 17
						}, this), " Download"]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 442,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						size: "sm",
						onClick: onShare,
						className: "text-xs gap-1.5 h-8.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share2, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 467,
							columnNumber: 15
						}, this), " Share"]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 466,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: onClose,
						className: "text-xs h-8.5",
						children: "Close"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 469,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 440,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 429,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 72,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 66,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/app/applet/src/components/nashmia/documents/ShareDocumentModal.tsx";
function ShareDocumentModal({ item, open, onOpenChange }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [inviteEmail, setInviteEmail] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("viewer");
	if (!item) return null;
	const origin = typeof window !== "undefined" ? window.location.origin : "";
	const shareUrl = item.url || item.metadata?.fileUrl || `${origin}/documents?id=${encodeURIComponent(item.id)}`;
	const handleCopyLink = () => {
		navigator.clipboard.writeText(shareUrl);
		setCopied(true);
		toast.success("Link copied to clipboard", { description: "Anyone with this link can view the document." });
		setTimeout(() => setCopied(false), 2e3);
	};
	const handleInvite = (e) => {
		e.preventDefault();
		if (!inviteEmail.trim() || !inviteEmail.includes("@")) {
			toast.error("Please enter a valid email address");
			return;
		}
		toast.success(`Invitation sent to ${inviteEmail}`, { description: `Granted ${role} permissions for ${item.name}` });
		setInviteEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "w-full sm:max-w-md sm:rounded-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
					className: "text-base font-bold text-slate-800 flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-4 text-[#1D63ED]" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 62,
							columnNumber: 13
						}, this),
						" Share “",
						item.name,
						"”"
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 61,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
					className: "text-xs text-slate-500",
					children: "Manage sharing links and invite teammates to collaborate."
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 64,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 60,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: handleInvite,
					className: "mt-2 space-y-3",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex gap-2 items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								type: "email",
								placeholder: "Add people, emails, or groups...",
								value: inviteEmail,
								onChange: (e) => setInviteEmail(e.target.value),
								className: "text-xs h-9 flex-1"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 72,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect$1, {
								value: role,
								onChange: (val) => setRole(val),
								options: [{
									value: "viewer",
									label: "Viewer"
								}, {
									value: "editor",
									label: "Editor"
								}],
								placeholder: "Role",
								size: "sm",
								activeColor: "blue",
								triggerClassName: "h-9 w-28"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 79,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								type: "submit",
								size: "sm",
								className: "bg-[#1D63ED] hover:bg-blue-700 text-white h-9 px-3 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 96,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 91,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 71,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 70,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-2 rounded-lg bg-blue-100/60 text-[#1D63ED]",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 105,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 104,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs font-semibold text-slate-800",
							children: "General Access"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 108,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-[11px] text-slate-500",
							children: "Anyone with the link can view"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 109,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 107,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 103,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: handleCopyLink,
						className: "h-8 text-xs font-semibold text-[#1D63ED] border-blue-200 hover:bg-blue-50 gap-1.5",
						children: copied ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3.5 text-emerald-600" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 121,
							columnNumber: 17
						}, this), " Copied"] }, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 120,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 125,
							columnNumber: 17
						}, this), " Copy Link"] }, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 124,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 112,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 102,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-[11px] text-slate-400 truncate bg-slate-100/70 p-2 rounded-lg font-mono",
					children: shareUrl
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 132,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 59,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 58,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/nashmia/documents/UploadDocumentModal.tsx";
function UploadDocumentModal({ open, onOpenChange, folders, activeFolderId, onAddFile, onAddFolder }) {
	const [tab, setTab] = (0, import_react.useState)("file");
	const [folderName, setFolderName] = (0, import_react.useState)("");
	const [selectedFolder, setSelectedFolder] = (0, import_react.useState)(activeFolderId);
	const [selectedFiles, setSelectedFiles] = (0, import_react.useState)([]);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleDragOver = (e) => {
		e.preventDefault();
		setIsDragging(true);
	};
	const handleDragLeave = () => {
		setIsDragging(false);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragging(false);
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) setSelectedFiles(Array.from(e.dataTransfer.files));
	};
	const handleFileInputChange = (e) => {
		if (e.target.files && e.target.files.length > 0) setSelectedFiles(Array.from(e.target.files));
	};
	const handleUploadSubmit = (e) => {
		e.preventDefault();
		if (tab === "folder") {
			if (!folderName.trim()) {
				toast.error("Please enter a folder name");
				return;
			}
			onAddFolder({
				id: `folder-${Date.now()}`,
				name: folderName.trim(),
				fileCount: 0,
				totalSize: "0 KB",
				sharedWith: [INITIAL_OWNERS.alex, INITIAL_OWNERS.sarah],
				isActive: false
			});
			toast.success(`Folder "${folderName}" created successfully!`);
			setFolderName("");
			onOpenChange(false);
			return;
		}
		if (selectedFiles.length === 0) {
			toast.error("Please select at least one file to upload");
			return;
		}
		selectedFiles.forEach((file) => {
			const ext = file.name.split(".").pop()?.toLowerCase() || "file";
			let type = "doc";
			if ([
				"xlsx",
				"xls",
				"csv"
			].includes(ext)) type = "sheet";
			else if (["pdf"].includes(ext)) type = "pdf";
			else if ([
				"jpg",
				"jpeg",
				"png",
				"webp",
				"gif"
			].includes(ext)) type = "image";
			const sizeInMb = (file.size / 1048576).toFixed(1);
			const formattedSize = file.size > 1048576 ? `${sizeInMb} MB` : `${Math.round(file.size / 1024)} KB`;
			const now = /* @__PURE__ */ new Date();
			const formattedDate = now.toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric",
				hour: "2-digit",
				minute: "2-digit"
			});
			const detectedMovement = extractMovementNumber(file.name);
			const isCutOffNotice = file.name.toLowerCase().includes("cutoff") || file.name.toLowerCase().includes("cut-off") || file.name.toLowerCase().includes("gate_cutoff") || file.name.toLowerCase().includes("si_cutoff");
			const extractedCutOffs = isCutOffNotice ? extractCutOffDeadlinesOnly(file.name) : {
				deadlines: [],
				dates: {}
			};
			const newDriveFile = {
				id: `file-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
				name: file.name,
				type,
				extension: ext,
				owners: [],
				lastModified: formattedDate,
				lastModifiedTimestamp: now.toISOString(),
				fileSize: formattedSize,
				folderId: selectedFolder,
				sharedLink: "",
				metadata: {
					category: isCutOffNotice ? "Cut-Off Notice" : "Other",
					documentType: isCutOffNotice ? "CUT_OFF_NOTICE" : "OTHER",
					movementNumber: detectedMovement || void 0,
					hasCutOffDate: extractedCutOffs.hasCutOffDate,
					detectedCutOffDate: extractedCutOffs.detectedCutOffDate,
					cutOffDeadlines: extractedCutOffs.deadlines.length > 0 ? extractedCutOffs.deadlines : void 0,
					cutOffDates: extractedCutOffs.dates
				}
			};
			if (detectedMovement && isCutOffNotice) saveCutOffsForMovement(detectedMovement, {
				...extractedCutOffs.dates,
				sourceDocumentId: newDriveFile.id,
				sourceDocumentName: file.name,
				extractionStatus: extractedCutOffs.hasCutOffDate ? "COMPLETED" : "NO_DATES_DETECTED",
				reviewStatus: extractedCutOffs.hasAmbiguousDates ? "NEEDS_REVIEW" : "AUTO_VERIFIED"
			});
			onAddFile(newDriveFile);
		});
		toast.success(`${selectedFiles.length} file(s) uploaded successfully!`);
		setSelectedFiles([]);
		onOpenChange(false);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "w-full sm:max-w-md sm:rounded-2xl max-h-[92vh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
					className: "text-base font-bold text-slate-800 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Upload, { className: "size-4 text-[#1D63ED]" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 170,
						columnNumber: 13
					}, this), " Add to My Drive"]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 169,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
					className: "text-xs text-slate-500",
					children: "Upload documents, images, spreadsheets or create a new directory folder."
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 172,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 168,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex bg-slate-100 p-1 rounded-xl gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setTab("file"),
						className: `flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${tab === "file" ? "bg-white text-slate-800 shadow-xs" : "text-slate-500 hover:text-slate-800"}`,
						children: "Upload Files"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 179,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setTab("folder"),
						className: `flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${tab === "folder" ? "bg-white text-slate-800 shadow-xs" : "text-slate-500 hover:text-slate-800"}`,
						children: "New Folder"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 190,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 178,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: handleUploadSubmit,
					className: "space-y-4 mt-2",
					children: [tab === "file" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							onDragOver: handleDragOver,
							onDragLeave: handleDragLeave,
							onDrop: handleDrop,
							onClick: () => fileInputRef.current?.click(),
							className: `border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-colors ${isDragging ? "border-[#1D63ED] bg-blue-50/50" : "border-slate-200 hover:border-blue-400 bg-slate-50/50"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "file",
									ref: fileInputRef,
									onChange: handleFileInputChange,
									multiple: true,
									className: "hidden"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 218,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "size-10 rounded-xl bg-blue-100 text-[#1D63ED] flex items-center justify-center mx-auto mb-2",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Upload, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 226,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 225,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-xs font-bold text-slate-700",
									children: "Click to upload or drag & drop"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 228,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-[11px] text-slate-400 mt-0.5",
									children: "PDF, DOCX, XLSX, JPG, PNG up to 100MB"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 231,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 207,
							columnNumber: 15
						}, this),
						selectedFiles.length > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-1.5 max-h-36 overflow-y-auto pr-1",
							children: selectedFiles.map((f, i) => /* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "font-medium text-slate-700 truncate max-w-[240px]",
									children: f.name
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 244,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setSelectedFiles((prev) => prev.filter((_, idx) => idx !== i)),
									className: "text-slate-400 hover:text-rose-500",
									children: /* @__PURE__ */ (void 0)(X, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 254,
										columnNumber: 25
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 247,
									columnNumber: 23
								}, this)]
							}, i, true, {
								fileName: _jsxFileName$4,
								lineNumber: 240,
								columnNumber: 21
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 238,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
							label: "DESTINATION FOLDER",
							value: selectedFolder,
							onChange: (val) => setSelectedFolder(val),
							options: [{
								value: "root",
								label: "My Drive (Root)"
							}, ...folders.map((f) => ({
								value: f.id,
								label: f.name
							}))],
							placeholder: "Select Destination Folder",
							activeColor: "blue",
							triggerClassName: "w-full text-xs h-9"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 263,
							columnNumber: 17
						}, this) }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 262,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 205,
						columnNumber: 13
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5",
						children: "Folder Name"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 279,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						placeholder: "e.g. Design Files, Invoices, Marketing",
						value: folderName,
						onChange: (e) => setFolderName(e.target.value),
						className: "text-xs h-9",
						autoFocus: true
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 282,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 278,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-end gap-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => onOpenChange(false),
							className: "text-xs",
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 293,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "submit",
							size: "sm",
							className: "bg-[#1D63ED] hover:bg-blue-700 text-white text-xs font-semibold",
							children: tab === "file" ? "Upload" : "Create Folder"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 302,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 292,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 203,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 167,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 166,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/nashmia/documents/DocumentPreviewDialog.tsx";
function DocumentPreviewDialog({ file, open, onOpenChange, onShare }) {
	if (!file) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] flex flex-col p-0 overflow-hidden sm:rounded-2xl shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2.5 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileThumbnailIcon, {
						file,
						size: "sm"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 29,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
							className: "text-sm font-bold text-slate-800 truncate",
							children: file.name
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 31,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-[11px] text-slate-400",
							children: [
								file.fileSize,
								" • Modified ",
								file.lastModified
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 34,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 30,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 28,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [
						file.url || file.metadata?.fileUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => {
								const targetUrl = file.url || file.metadata?.fileUrl;
								if (targetUrl) {
									const a = document.createElement("a");
									a.href = targetUrl;
									a.target = "_blank";
									a.rel = "noopener noreferrer";
									document.body.appendChild(a);
									a.click();
									document.body.removeChild(a);
								}
							},
							className: "h-8 text-xs gap-1.5 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 60,
								columnNumber: 17
							}, this), " Open"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 42,
							columnNumber: 15
						}, this) : null,
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: onShare,
							className: "h-8 text-xs gap-1.5 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share2, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 70,
								columnNumber: 15
							}, this), " Share"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 63,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "button",
							size: "sm",
							onClick: () => {
								const storagePath = file.metadata?.storagePath;
								const msgId = file.metadata?.gmailMessageId || file.metadata?.emailMessageId;
								const attId = file.metadata?.attachmentId;
								let downloadUrl = "";
								if (storagePath) downloadUrl = `/api/documents/download?path=${encodeURIComponent(storagePath)}`;
								else if (msgId && attId) {
									const filename = file.metadata?.originalFilename || file.metadata?.fileName || file.name;
									downloadUrl = `/api/gmail/attachment?messageId=${encodeURIComponent(msgId)}&attachmentId=${encodeURIComponent(attId)}&filename=${encodeURIComponent(filename)}`;
								} else if (file.url && file.url !== "#" && !file.url.startsWith("https://drive.nashmia.com")) downloadUrl = file.url;
								else if (file.metadata?.fileUrl && file.metadata.fileUrl !== "#") downloadUrl = file.metadata.fileUrl;
								if (downloadUrl) {
									const a = document.createElement("a");
									a.href = downloadUrl;
									a.download = file.metadata?.originalFilename || file.metadata?.fileName || file.name;
									a.target = "_blank";
									a.rel = "noopener noreferrer";
									document.body.appendChild(a);
									a.click();
									document.body.removeChild(a);
								}
							},
							className: "h-8 bg-[#1D63ED] hover:bg-blue-700 text-white text-xs gap-1.5 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 112,
								columnNumber: 15
							}, this), " Download"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 72,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 40,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 27,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-6 overflow-y-auto bg-slate-50 flex-1 min-h-[320px] flex items-center justify-center",
				children: file.type === "image" && (file.url || file.metadata?.fileUrl) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md max-w-full max-h-[420px] flex items-center justify-center p-3",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: file.url || file.metadata?.fileUrl || "",
						alt: file.name,
						className: "max-h-[380px] w-auto object-contain rounded-xl shadow-inner",
						referrerPolicy: "no-referrer"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 121,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 120,
					columnNumber: 13
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "w-full max-w-lg bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileThumbnailIcon, {
								file,
								size: "lg",
								showFormatTag: true
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 131,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 130,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-base font-bold text-slate-800 break-all",
							children: file.name
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 134,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-slate-500 mt-1",
							children: [
								file.metadata?.uploadStatus || (file.url ? "Stored in Supabase Storage" : "Metadata Record"),
								" ",
								"• ",
								file.metadata?.source || "Incoming Forwarder Email"
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 135,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 133,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2.5 text-slate-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between items-center py-1 border-b border-slate-200/60",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-medium",
										children: "Document Name:"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 145,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-slate-900 truncate max-w-[240px]",
										title: file.name,
										children: file.name
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 146,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 144,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between items-center py-1 border-b border-slate-200/60",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-medium",
										children: "Movement Number:"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 154,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-blue-700 font-mono",
										children: file.metadata?.movementNumber || file.metadata?.movementReferenceNumber || "Not Linked"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 155,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 153,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between items-center py-1 border-b border-slate-200/60",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-medium",
										children: "Document Type:"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 162,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-blue-600",
										children: file.metadata?.displayDocumentType || file.metadata?.documentType || file.metadata?.typeTag || file.metadata?.category || "Other"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 163,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 161,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between items-center py-1 border-b border-slate-200/60",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-medium",
										children: "Original Filename:"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 172,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-slate-800 truncate max-w-[240px]",
										title: file.metadata?.originalFilename || file.metadata?.fileName || file.name,
										children: file.metadata?.originalFilename || file.metadata?.fileName || file.name
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 173,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 171,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between items-center py-1 border-b border-slate-200/60",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-medium",
										children: "File Format & Size:"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 181,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-slate-900",
										children: [
											(file.metadata?.fileFormat || file.extension).toUpperCase(),
											" •",
											" ",
											file.fileSize
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 182,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 180,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between items-center py-1 border-b border-slate-200/60",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-medium",
										children: "Received Date:"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 188,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-slate-900",
										children: [file.metadata?.receivedDate || file.lastModified, file.metadata?.receivedTime ? ` (${file.metadata.receivedTime})` : ""]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 189,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 187,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between items-center py-1 border-b border-slate-200/60",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-medium",
										children: "Sender / Forwarder:"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 195,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-slate-900",
										children: file.metadata?.forwarder || file.metadata?.forwarderName || "Freight Forwarder"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 196,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 194,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between items-center py-1 border-b border-slate-200/60",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-medium",
										children: "Source Email:"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 203,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-slate-800 text-[11px] truncate max-w-[240px]",
										children: file.metadata?.sourceEmail || file.metadata?.senderEmail || file.metadata?.forwarderEmail || "Not Provided"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 204,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 202,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between items-center pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-medium",
										children: "Upload / Source Status:"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 212,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200/60",
										children: file.metadata?.uploadStatus || file.metadata?.status || "Processed"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 213,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 211,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 143,
							columnNumber: 15
						}, this),
						file.url || file.metadata?.fileUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: file.url || file.metadata?.fileUrl || "#",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium text-xs border border-blue-200 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 228,
									columnNumber: 21
								}, this), " Open Stored Document"]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 222,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 221,
							columnNumber: 17
						}, this) : null
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 129,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 118,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 25,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 24,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/nashmia/documents/ManualReviewLinkModal.tsx";
var DOCUMENT_TYPES = [
	{
		id: "CUT_OFF_NOTICE",
		label: "Cut-Off Notice",
		category: "Cut-Off Notice"
	},
	{
		id: "BILL_OF_LADING",
		label: "Bill of Lading (B/L)",
		category: "Bill of Lading"
	},
	{
		id: "COMMERCIAL_INVOICE",
		label: "Commercial Invoice",
		category: "General"
	},
	{
		id: "PACKING_LIST",
		label: "Packing List",
		category: "General"
	},
	{
		id: "CERTIFICATE_OF_ORIGIN",
		label: "Certificate of Origin",
		category: "General"
	},
	{
		id: "SHIPPING_INSTRUCTION",
		label: "Shipping Instructions (SI)",
		category: "General"
	},
	{
		id: "GENERAL",
		label: "General Logistics Document",
		category: "General"
	}
];
var ManualReviewLinkModal = ({ isOpen, onClose, document, onDocumentLinked }) => {
	const metadata = document?.metadata || {};
	const unconfidentFields = metadata.unconfidentFields || [];
	const reviewReason = metadata.reviewReason || "Document stored safely. Identification confidence was below the required threshold.";
	const [movementSearch, setMovementSearch] = (0, import_react.useState)(metadata.movementNumber || "");
	const [selectedMovement, setSelectedMovement] = (0, import_react.useState)(metadata.movementNumber || "");
	const [selectedBookingId, setSelectedBookingId] = (0, import_react.useState)(metadata.bookingId || null);
	const [documentType, setDocumentType] = (0, import_react.useState)(metadata.documentType && metadata.documentType !== "NEEDS_REVIEW" ? metadata.documentType : metadata.category === "Cut-Off Notice" ? "CUT_OFF_NOTICE" : metadata.category === "Bill of Lading" ? "BILL_OF_LADING" : "CUT_OFF_NOTICE");
	const existingCutoff = metadata.cutOffDates || {};
	const [siCutoff, setSiCutoff] = (0, import_react.useState)(existingCutoff.siCutoff || "");
	const [vgmCutoff, setVgmCutoff] = (0, import_react.useState)(existingCutoff.vgmCutoff || "");
	const [portCutoff, setPortCutoff] = (0, import_react.useState)(existingCutoff.portCutoff || "");
	const [gateCutoff, setGateCutoff] = (0, import_react.useState)(existingCutoff.gateCutoff || "");
	const [closingDate, setClosingDate] = (0, import_react.useState)(existingCutoff.closingDate || "");
	const [reviewerName, setReviewerName] = (0, import_react.useState)("Alex Rivera (Operations Lead)");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [showDropdown, setShowDropdown] = (0, import_react.useState)(false);
	const [availableMovements, setAvailableMovements] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (document) {
			const meta = document.metadata || {};
			const cutoffs = meta.cutOffDates || {};
			setMovementSearch(meta.movementNumber || "");
			setSelectedMovement(meta.movementNumber || "");
			setSelectedBookingId(meta.bookingId || null);
			setDocumentType(meta.documentType && meta.documentType !== "NEEDS_REVIEW" ? meta.documentType : meta.category === "Cut-Off Notice" ? "CUT_OFF_NOTICE" : meta.category === "Bill of Lading" ? "BILL_OF_LADING" : "CUT_OFF_NOTICE");
			setSiCutoff(cutoffs.siCutoff || "");
			setVgmCutoff(cutoffs.vgmCutoff || "");
			setPortCutoff(cutoffs.portCutoff || "");
			setGateCutoff(cutoffs.gateCutoff || "");
			setClosingDate(cutoffs.closingDate || "");
		}
	}, [document]);
	(0, import_react.useEffect)(() => {
		try {
			const list = getLocalBookings().map((b) => ({
				movementNumber: b.movement_number || b.booking_reference || "NASH-2026-0042",
				bookingId: b.id,
				vessel: b.vessel_name,
				port: `${b.pol_name || b.origin || ""} → ${b.pod_name || b.destination || ""}`
			}));
			if (list.length === 0) {
				list.push({
					movementNumber: "NASH-2026-0042",
					bookingId: "428b49e1-b1e0-4a87-a068-1e43cfa11042",
					vessel: "MSC ISABELLA",
					port: "Jebel Ali (AEJEA) → Rotterdam (NLRTM)"
				});
				list.push({
					movementNumber: "NASH-2026-0089",
					bookingId: "89a2341b-12e0-4a87-b068-1e43cfa11089",
					vessel: "CMA CGM ANTOINE",
					port: "Shanghai (CNSHA) → Hamburg (DEHAM)"
				});
			}
			setAvailableMovements(list);
		} catch {
			setAvailableMovements([{
				movementNumber: "NASH-2026-0042",
				bookingId: "428b49e1-b1e0-4a87-a068-1e43cfa11042",
				vessel: "MSC ISABELLA",
				port: "Jebel Ali (AEJEA) → Rotterdam (NLRTM)"
			}]);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [isOpen]);
	if (!isOpen || !document) return null;
	const filteredMovements = availableMovements.filter((m) => m.movementNumber.toLowerCase().includes(movementSearch.toLowerCase()));
	const handleSelectMovement = (m) => {
		setSelectedMovement(m.movementNumber);
		setMovementSearch(m.movementNumber);
		if (m.bookingId) setSelectedBookingId(m.bookingId);
		setShowDropdown(false);
	};
	const handleConfirmAndLink = async (e) => {
		e.preventDefault();
		if (!selectedMovement && !movementSearch) {
			alert("Please specify or select a Movement Number to link this document.");
			return;
		}
		const finalMovementNumber = selectedMovement || movementSearch.trim();
		setIsSubmitting(true);
		try {
			const selectedTypeObj = DOCUMENT_TYPES.find((t) => t.id === documentType);
			const isCutoff = documentType === "CUT_OFF_NOTICE";
			const cutOffDeadlines = [];
			if (siCutoff) cutOffDeadlines.push({
				type: "SI Cut-Off",
				dateTime: siCutoff
			});
			if (vgmCutoff) cutOffDeadlines.push({
				type: "VGM Cut-Off",
				dateTime: vgmCutoff
			});
			if (portCutoff) cutOffDeadlines.push({
				type: "Port Cut-Off",
				dateTime: portCutoff
			});
			if (gateCutoff) cutOffDeadlines.push({
				type: "Gate Cut-Off",
				dateTime: gateCutoff
			});
			if (closingDate) cutOffDeadlines.push({
				type: "Vessel Closing",
				dateTime: closingDate
			});
			const cutOffDates = isCutoff ? {
				siCutoff: siCutoff || null,
				vgmCutoff: vgmCutoff || null,
				portCutoff: portCutoff || null,
				gateCutoff: gateCutoff || null,
				closingDate: closingDate || null,
				deadlines: cutOffDeadlines
			} : void 0;
			const updatedDoc = linkAndReviewDriveDocument(document.id, {
				movementNumber: finalMovementNumber,
				bookingId: selectedBookingId,
				documentType,
				category: selectedTypeObj?.category || "General",
				cutOffDates,
				cutOffDeadlines: isCutoff ? cutOffDeadlines : void 0,
				reviewerName,
				folderId: `folder-movement-${finalMovementNumber.toLowerCase()}`
			});
			if (isCutoff && cutOffDates) try {
				await saveCutOffsForMovement(finalMovementNumber, {
					...cutOffDates,
					siCutoff: cutOffDates.siCutoff,
					vgmCutoff: cutOffDates.vgmCutoff,
					portCutoff: cutOffDates.portCutoff,
					gateCutoff: cutOffDates.gateCutoff,
					closingDate: cutOffDates.closingDate,
					deadlines: cutOffDeadlines,
					sourceDocumentId: document.id,
					sourceDocumentName: document.name,
					sourceEmailId: document.metadata?.sourceEmailId || document.metadata?.emailMessageId || null,
					extractionStatus: "COMPLETED",
					reviewStatus: "MANUALLY_VERIFIED",
					requiresManualReview: false,
					hasAmbiguousDates: false
				}, selectedBookingId || void 0);
			} catch (syncErr) {
				console.warn("[ManualReviewLinkModal] saveCutOffsForMovement notice:", syncErr);
			}
			try {
				await safeInsertNotification(supabase, {
					userId: null,
					title: `Document Linked: ${finalMovementNumber}`,
					message: `Document "${document.name}" was manually verified and linked to Movement ${finalMovementNumber} by ${reviewerName}.`,
					type: "document_saved",
					bookingId: selectedBookingId,
					movementNumber: finalMovementNumber
				});
			} catch {}
			if (updatedDoc && onDocumentLinked) onDocumentLinked(updatedDoc);
			onClose();
		} catch (err) {
			console.error("[ManualReviewLinkModal] Error linking document:", err);
			alert("An error occurred while linking the document. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		id: "manual-review-modal-backdrop",
		className: "fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto animate-in fade-in duration-150",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm",
			onClick: onClose,
			"aria-hidden": "true"
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 279,
			columnNumber: 7
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			id: "manual-review-modal-card",
			onClick: (e) => e.stopPropagation(),
			className: "relative z-10 bg-white rounded-t-[28px] rounded-b-none sm:rounded-xl shadow-2xl border-t sm:border border-slate-200 w-full max-w-2xl max-h-[92vh] overflow-hidden my-0 sm:my-8 outline-none animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					"data-swipe-handle": "true",
					className: "mx-auto pt-2.5 pb-1 flex h-6 w-full max-w-[140px] cursor-grab touch-none items-center justify-center sm:hidden select-none shrink-0 bg-amber-500/10",
					"aria-label": "Drag down to dismiss",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 w-12 rounded-full bg-amber-300" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 295,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 290,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "bg-amber-500/10 border-b border-amber-200/80 px-6 py-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "w-9 h-9 rounded-lg bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "w-5 h-5 text-amber-600" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 302,
								columnNumber: 15
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 301,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-base font-semibold text-slate-900 leading-tight",
							children: "Review & Link Document"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 305,
							columnNumber: 15
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-amber-800",
							children: "Operator verification required • Safely stored without guessing"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 308,
							columnNumber: 15
						}, void 0)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 304,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 300,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						id: "btn-close-review-modal",
						type: "button",
						onClick: onClose,
						className: "text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 319,
							columnNumber: 13
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 313,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 299,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: handleConfirmAndLink,
					className: "p-6 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 text-rose-600",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "w-5 h-5" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 327,
									columnNumber: 15
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 326,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex-1 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-sm font-semibold text-slate-800 truncate",
											children: document.name
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 331,
											columnNumber: 17
										}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, { className: "w-3 h-3" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 333,
												columnNumber: 19
											}, void 0), "Needs Review"]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 332,
											columnNumber: 17
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 330,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-slate-500 mt-0.5",
										children: [
											"Size: ",
											document.fileSize,
											" • Received: ",
											document.lastModified,
											" • Sender:",
											" ",
											metadata.forwarderName || metadata.senderEmail || "External Carrier / Forwarder"
										]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 337,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-2.5 p-2.5 bg-amber-50/80 border border-amber-200 rounded text-xs text-amber-900 space-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "font-medium flex items-center gap-1.5 text-amber-800",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Info, { className: "w-3.5 h-3.5 shrink-0 text-amber-600" }, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 345,
													columnNumber: 19
												}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Why manual review is required:" }, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 346,
													columnNumber: 19
												}, void 0)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 344,
												columnNumber: 17
											}, void 0),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "pl-5 text-amber-900/90 leading-relaxed",
												children: reviewReason
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 348,
												columnNumber: 17
											}, void 0),
											unconfidentFields.length > 0 && /* @__PURE__ */ (void 0)("div", {
												className: "pl-5 flex flex-wrap gap-1.5 pt-1",
												children: unconfidentFields.map((f) => /* @__PURE__ */ (void 0)("span", {
													className: "inline-block px-1.5 py-0.5 text-[10px] font-medium bg-amber-200/80 text-amber-900 rounded",
													children: f === "movement" ? "🔍 Unidentified Movement" : f === "document_type" ? "📄 Ambiguous Document Type" : "⏰ Unclear Cut-Off Date"
												}, f, false, {
													fileName: _jsxFileName$2,
													lineNumber: 352,
													columnNumber: 23
												}, void 0))
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 350,
												columnNumber: 19
											}, void 0)
										]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 343,
										columnNumber: 15
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 329,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 325,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										htmlFor: "movement-search-input",
										className: "block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5",
										children: ["1. Link to Movement Number ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-rose-500",
											children: "*"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 377,
											columnNumber: 44
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 373,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "relative",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" }, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 381,
													columnNumber: 19
												}, void 0),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
													id: "movement-search-input",
													type: "text",
													required: true,
													placeholder: "e.g. NASH-2026-0042 or search existing...",
													value: movementSearch,
													onChange: (e) => {
														setMovementSearch(e.target.value);
														setSelectedMovement(e.target.value);
														setShowDropdown(true);
													},
													onFocus: () => setShowDropdown(true),
													className: "w-full pl-9 pr-8 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-medium text-slate-900 placeholder:text-slate-400"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 382,
													columnNumber: 19
												}, void 0),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
													type: "button",
													onClick: () => setShowDropdown(!showDropdown),
													className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "w-4 h-4" }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 401,
														columnNumber: 21
													}, void 0)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 396,
													columnNumber: 19
												}, void 0)
											]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 380,
											columnNumber: 17
										}, void 0), showDropdown && filteredMovements.length > 0 && /* @__PURE__ */ (void 0)("div", {
											className: "absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-48 overflow-y-auto divide-y divide-slate-100",
											children: filteredMovements.map((m) => /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => handleSelectMovement(m),
												className: "w-full text-left px-3.5 py-2 hover:bg-amber-50 transition-colors flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
													className: "text-xs font-semibold text-slate-900",
													children: m.movementNumber
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 416,
													columnNumber: 27
												}, void 0), m.port && /* @__PURE__ */ (void 0)("p", {
													className: "text-[11px] text-slate-500",
													children: m.port
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 417,
													columnNumber: 38
												}, void 0)] }, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 415,
													columnNumber: 25
												}, void 0), m.vessel && /* @__PURE__ */ (void 0)("span", {
													className: "text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium shrink-0",
													children: m.vessel
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 420,
													columnNumber: 27
												}, void 0)]
											}, m.movementNumber, true, {
												fileName: _jsxFileName$2,
												lineNumber: 409,
												columnNumber: 23
											}, void 0))
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 407,
											columnNumber: 19
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 379,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11px] text-slate-500 mt-1",
										children: "Select an existing active shipment or enter a custom Movement identifier."
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 429,
										columnNumber: 15
									}, void 0)
								] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 372,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect$1, {
									label: "2. CONFIRM DOCUMENT TYPE *",
									value: documentType,
									onChange: (val) => setDocumentType(val),
									options: DOCUMENT_TYPES.map((type) => ({
										value: type.id,
										label: type.label
									})),
									placeholder: "Select Document Type",
									activeColor: "teal",
									triggerClassName: "w-full text-sm h-10 font-medium"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 436,
									columnNumber: 15
								}, void 0) }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 435,
									columnNumber: 13
								}, void 0),
								documentType === "CUT_OFF_NOTICE" && /* @__PURE__ */ (void 0)("div", {
									className: "p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2 text-xs font-semibold text-slate-800",
											children: [/* @__PURE__ */ (void 0)(Calendar, { className: "w-4 h-4 text-amber-600" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 454,
												columnNumber: 19
											}, void 0), /* @__PURE__ */ (void 0)("span", { children: "3. Verify Cut-Off Deadlines for this Movement" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 455,
												columnNumber: 19
											}, void 0)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 453,
											columnNumber: 17
										}, void 0),
										/* @__PURE__ */ (void 0)("p", {
											className: "text-[11px] text-slate-500",
											children: "Enter or verify the cut-off dates parsed from the forwarder document. Do not leave ambiguous dates."
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 457,
											columnNumber: 17
										}, void 0),
										/* @__PURE__ */ (void 0)("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
											children: [
												/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													htmlFor: "si-cutoff-input",
													className: "block text-[11px] font-medium text-slate-700 mb-1",
													children: "SI (Shipping Instructions) Cut-Off"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 464,
													columnNumber: 21
												}, void 0), /* @__PURE__ */ (void 0)("input", {
													id: "si-cutoff-input",
													type: "text",
													placeholder: "e.g. 19 Sep 2026 4:00 PM",
													value: siCutoff,
													onChange: (e) => setSiCutoff(e.target.value),
													className: "w-full px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 text-slate-800"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 470,
													columnNumber: 21
												}, void 0)] }, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 463,
													columnNumber: 19
												}, void 0),
												/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													htmlFor: "vgm-cutoff-input",
													className: "block text-[11px] font-medium text-slate-700 mb-1",
													children: "VGM (Verified Gross Mass) Cut-Off"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 480,
													columnNumber: 21
												}, void 0), /* @__PURE__ */ (void 0)("input", {
													id: "vgm-cutoff-input",
													type: "text",
													placeholder: "e.g. 20 Sep 2026 12:00 PM",
													value: vgmCutoff,
													onChange: (e) => setVgmCutoff(e.target.value),
													className: "w-full px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 text-slate-800"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 486,
													columnNumber: 21
												}, void 0)] }, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 479,
													columnNumber: 19
												}, void 0),
												/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													htmlFor: "port-cutoff-input",
													className: "block text-[11px] font-medium text-slate-700 mb-1",
													children: "Port / Terminal Cut-Off"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 496,
													columnNumber: 21
												}, void 0), /* @__PURE__ */ (void 0)("input", {
													id: "port-cutoff-input",
													type: "text",
													placeholder: "e.g. 21 Sep 2026 6:00 PM",
													value: portCutoff,
													onChange: (e) => setPortCutoff(e.target.value),
													className: "w-full px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 text-slate-800"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 502,
													columnNumber: 21
												}, void 0)] }, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 495,
													columnNumber: 19
												}, void 0),
												/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													htmlFor: "gate-cutoff-input",
													className: "block text-[11px] font-medium text-slate-700 mb-1",
													children: "Gate / Cargo Closing"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 512,
													columnNumber: 21
												}, void 0), /* @__PURE__ */ (void 0)("input", {
													id: "gate-cutoff-input",
													type: "text",
													placeholder: "e.g. 21 Sep 2026 12:00 PM",
													value: gateCutoff,
													onChange: (e) => setGateCutoff(e.target.value),
													className: "w-full px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 text-slate-800"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 518,
													columnNumber: 21
												}, void 0)] }, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 511,
													columnNumber: 19
												}, void 0)
											]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 462,
											columnNumber: 17
										}, void 0)
									]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 452,
									columnNumber: 15
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									htmlFor: "reviewer-name-input",
									className: "block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5",
									children: "4. Authorized Operator"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 533,
									columnNumber: 15
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									id: "reviewer-name-input",
									type: "text",
									value: reviewerName,
									onChange: (e) => setReviewerName(e.target.value),
									className: "w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-700 font-medium"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 539,
									columnNumber: 15
								}, void 0)] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 532,
									columnNumber: 13
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 370,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "pt-4 border-t border-slate-200 flex items-center justify-end gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								id: "btn-cancel-review",
								type: "button",
								onClick: onClose,
								className: "px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors",
								children: "Cancel"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 551,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								id: "btn-confirm-link-document",
								type: "submit",
								disabled: isSubmitting || !selectedMovement && !movementSearch,
								className: "px-5 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-xs flex items-center gap-2 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 565,
									columnNumber: 15
								}, void 0), isSubmitting ? "Linking Document..." : "Confirm & Link to Movement"]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 559,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 550,
							columnNumber: 11
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 323,
					columnNumber: 9
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 284,
			columnNumber: 7
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 275,
		columnNumber: 5
	}, void 0), document.body);
};
var _jsxFileName$1 = "/app/applet/src/components/nashmia/documents/DocumentsPage.tsx";
function DocumentsPage({ onOpenMobileMenu }) {
	const { organizationId } = useAuth();
	const [folders, setFolders] = (0, import_react.useState)(INITIAL_FOLDERS);
	const [files, setFiles] = (0, import_react.useState)(INITIAL_FILES);
	const [selectedFileIds, setSelectedFileIds] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedMovement, setSelectedMovement] = (0, import_react.useState)("all");
	const [selectedDocType, setSelectedDocType] = (0, import_react.useState)("all");
	const [selectedForwarder, setSelectedForwarder] = (0, import_react.useState)("all");
	const [selectedStatus, setSelectedStatus] = (0, import_react.useState)("all");
	const [dateRangeFilter, setDateRangeFilter] = (0, import_react.useState)("all");
	const [activeStatFilter, setActiveStatFilter] = (0, import_react.useState)("all");
	const [sortField, setSortField] = (0, import_react.useState)("receivedDate");
	const [sortOrder, setSortOrder] = (0, import_react.useState)("desc");
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const pageSize = 8;
	const [detailsDrawerOpen, setDetailsDrawerOpen] = (0, import_react.useState)(false);
	const [activeItemForDetails, setActiveItemForDetails] = (0, import_react.useState)({
		file: null,
		folder: null
	});
	const [shareModalOpen, setShareModalOpen] = (0, import_react.useState)(false);
	const [shareTargetItem, setShareTargetItem] = (0, import_react.useState)(null);
	const [uploadModalOpen, setUploadModalOpen] = (0, import_react.useState)(false);
	const [previewDialogOpen, setPreviewDialogOpen] = (0, import_react.useState)(false);
	const [previewFile, setPreviewFile] = (0, import_react.useState)(null);
	const [manualReviewModalOpen, setManualReviewModalOpen] = (0, import_react.useState)(false);
	const [manualReviewDoc, setManualReviewDoc] = (0, import_react.useState)(null);
	const totalCount = files.length;
	const cutoffCount = (0, import_react.useMemo)(() => {
		return files.filter((f) => f.metadata?.typeTag === "Cut-Off" || f.metadata?.category === "Cut-Off Notice" || f.metadata?.documentType?.toLowerCase().includes("cut-off") || f.name.toLowerCase().includes("cutoff") || f.name.toLowerCase().includes("cut-off")).length;
	}, [files]);
	const blCount = (0, import_react.useMemo)(() => {
		return files.filter((f) => f.metadata?.typeTag === "BL" || f.metadata?.typeTag === "Bill of Lading" || f.metadata?.category === "Bill of Lading" || f.metadata?.documentType?.toLowerCase().includes("bill of lading") || f.name.toLowerCase().includes("bl_") || f.name.toLowerCase().includes("bl-") || f.name.toLowerCase().includes("bill")).length;
	}, [files]);
	const otherCount = (0, import_react.useMemo)(() => {
		return Math.max(0, totalCount - cutoffCount - blCount);
	}, [
		totalCount,
		cutoffCount,
		blCount
	]);
	const availableMovements = (0, import_react.useMemo)(() => {
		const set = /* @__PURE__ */ new Set();
		files.forEach((f) => {
			const mov = f.metadata?.movementNumber || f.metadata?.movementReferenceNumber;
			if (mov && mov !== "—") set.add(mov);
		});
		return Array.from(set).sort();
	}, [files]);
	const availableForwarders = (0, import_react.useMemo)(() => {
		const set = /* @__PURE__ */ new Set();
		files.forEach((f) => {
			const fwd = f.metadata?.forwarderName || f.metadata?.forwarder;
			if (fwd) set.add(fwd);
		});
		return Array.from(set).sort();
	}, [files]);
	const filteredFiles = (0, import_react.useMemo)(() => {
		return files.filter((file) => {
			if (activeStatFilter === "cutoff") {
				if (!(file.metadata?.typeTag === "Cut-Off" || file.metadata?.category === "Cut-Off Notice" || file.name.toLowerCase().includes("cutoff") || file.name.toLowerCase().includes("cut-off"))) return false;
			} else if (activeStatFilter === "bl") {
				if (!(file.metadata?.typeTag === "BL" || file.metadata?.typeTag === "Bill of Lading" || file.metadata?.category === "Bill of Lading" || file.name.toLowerCase().includes("bl_") || file.name.toLowerCase().includes("bl-") || file.name.toLowerCase().includes("bill"))) return false;
			} else if (activeStatFilter === "other") {
				const isCutoff = file.metadata?.typeTag === "Cut-Off" || file.metadata?.category === "Cut-Off Notice" || file.name.toLowerCase().includes("cutoff") || file.name.toLowerCase().includes("cut-off");
				const isBL = file.metadata?.typeTag === "BL" || file.metadata?.typeTag === "Bill of Lading" || file.metadata?.category === "Bill of Lading" || file.name.toLowerCase().includes("bl_") || file.name.toLowerCase().includes("bl-") || file.name.toLowerCase().includes("bill");
				if (isCutoff || isBL) return false;
			}
			if (searchQuery.trim()) {
				const query = searchQuery.toLowerCase().trim();
				const matchesName = file.name.toLowerCase().includes(query);
				const matchesOriginalName = Boolean(file.metadata?.originalFilename?.toLowerCase().includes(query));
				const matchesMov = Boolean(file.metadata?.movementNumber?.toLowerCase().includes(query) || file.metadata?.movementReferenceNumber?.toLowerCase().includes(query) || file.metadata?.bookingId?.toLowerCase().includes(query));
				const matchesVessel = Boolean(file.metadata?.vesselName?.toLowerCase().includes(query));
				const matchesFwd = Boolean(file.metadata?.forwarderName?.toLowerCase().includes(query) || file.metadata?.forwarder?.toLowerCase().includes(query) || file.metadata?.senderEmail?.toLowerCase().includes(query) || file.metadata?.sourceEmail?.toLowerCase().includes(query));
				const matchesDocType = Boolean(file.metadata?.documentType?.toLowerCase().includes(query) || file.metadata?.displayDocumentType?.toLowerCase().includes(query) || file.metadata?.typeTag?.toLowerCase().includes(query) || file.metadata?.category?.toLowerCase().includes(query));
				if (!matchesName && !matchesOriginalName && !matchesMov && !matchesVessel && !matchesFwd && !matchesDocType) return false;
			}
			if (selectedMovement !== "all") {
				if ((file.metadata?.movementNumber || file.metadata?.movementReferenceNumber) !== selectedMovement) return false;
			}
			if (selectedDocType !== "all") {
				if (!(file.metadata?.typeTag || file.metadata?.documentType || file.metadata?.displayDocumentType || file.metadata?.category || "").toLowerCase().includes(selectedDocType.toLowerCase())) return false;
			}
			if (selectedForwarder !== "all") {
				if ((file.metadata?.forwarderName || file.metadata?.forwarder || "").toLowerCase() !== selectedForwarder.toLowerCase()) return false;
			}
			if (selectedStatus !== "all") {
				if (!(file.metadata?.uploadStatus || file.metadata?.status || "Processed").toLowerCase().includes(selectedStatus.toLowerCase())) return false;
			}
			return true;
		});
	}, [
		files,
		activeStatFilter,
		searchQuery,
		selectedMovement,
		selectedDocType,
		selectedForwarder,
		selectedStatus
	]);
	const sortedFiles = (0, import_react.useMemo)(() => {
		return [...filteredFiles].sort((a, b) => {
			let comparison = 0;
			switch (sortField) {
				case "document":
					comparison = a.name.localeCompare(b.name);
					break;
				case "movement":
					comparison = (a.metadata?.movementNumber || "").localeCompare(b.metadata?.movementNumber || "");
					break;
				case "documentType":
					comparison = (a.metadata?.documentType || "").localeCompare(b.metadata?.documentType || "");
					break;
				case "forwarder":
					comparison = (a.metadata?.forwarderName || "").localeCompare(b.metadata?.forwarderName || "");
					break;
				default: comparison = new Date(a.lastModifiedTimestamp || a.lastModified).getTime() - new Date(b.lastModifiedTimestamp || b.lastModified).getTime();
			}
			return sortOrder === "asc" ? comparison : -comparison;
		});
	}, [
		filteredFiles,
		sortField,
		sortOrder
	]);
	const totalPages = Math.max(1, Math.ceil(sortedFiles.length / pageSize));
	const currentSafePage = Math.min(currentPage, totalPages);
	const paginatedFiles = (0, import_react.useMemo)(() => {
		const startIndex = (currentSafePage - 1) * pageSize;
		return sortedFiles.slice(startIndex, startIndex + pageSize);
	}, [
		sortedFiles,
		currentSafePage,
		pageSize
	]);
	sortedFiles.length === 0 || (currentSafePage - 1) * pageSize + 1;
	Math.min(currentSafePage * pageSize, sortedFiles.length);
	const handleSortToggle = (field) => {
		if (sortField === field) setSortOrder((prev) => prev === "asc" ? "desc" : "asc");
		else {
			setSortField(field);
			setSortOrder("asc");
		}
	};
	const areAllCurrentSelected = (0, import_react.useMemo)(() => {
		if (paginatedFiles.length === 0) return false;
		return paginatedFiles.every((f) => selectedFileIds.has(f.id));
	}, [paginatedFiles, selectedFileIds]);
	const handleSelectAllToggle = () => {
		setSelectedFileIds((prev) => {
			const next = new Set(prev);
			if (areAllCurrentSelected) paginatedFiles.forEach((f) => next.delete(f.id));
			else paginatedFiles.forEach((f) => next.add(f.id));
			return next;
		});
	};
	const handleSelectRow = (fileId) => {
		setSelectedFileIds((prev) => {
			const next = new Set(prev);
			if (next.has(fileId)) next.delete(fileId);
			else next.add(fileId);
			return next;
		});
	};
	const handlePreviewFile = (file) => {
		setPreviewFile(file);
		setPreviewDialogOpen(true);
	};
	const handleOpenStoredDocument = (file) => {
		const targetUrl = file.url || file.metadata?.fileUrl;
		if (targetUrl && targetUrl !== "#") {
			window.open(targetUrl, "_blank", "noopener,noreferrer");
			toast.info(`Opening stored document: "${file.name}"`);
		} else handlePreviewFile(file);
	};
	const handleDownloadFile = (file) => {
		if (file.metadata?.storagePath) {
			const a = document.createElement("a");
			const orgParam = organizationId ? `&organizationId=${encodeURIComponent(organizationId)}` : "";
			a.href = `/api/documents/download?path=${encodeURIComponent(file.metadata.storagePath)}${orgParam}`;
			a.download = file.metadata?.originalFilename || file.metadata?.fileName || file.name;
			a.target = "_blank";
			a.rel = "noopener noreferrer";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			toast.success(`Downloading ${file.name}`);
			return;
		}
		const msgId = file.metadata?.gmailMessageId || file.metadata?.emailMessageId;
		const attId = file.metadata?.attachmentId;
		if (msgId && attId) {
			const filename = file.metadata?.originalFilename || file.metadata?.fileName || file.name;
			const downloadEndpoint = `/api/gmail/attachment?messageId=${encodeURIComponent(msgId)}&attachmentId=${encodeURIComponent(attId)}&filename=${encodeURIComponent(filename)}&mimeType=${encodeURIComponent(file.metadata?.fileFormat || "application/octet-stream")}`;
			const a = document.createElement("a");
			a.href = downloadEndpoint;
			a.download = filename;
			a.target = "_blank";
			a.rel = "noopener noreferrer";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			toast.success(`Downloading ${file.name}`);
			return;
		}
		const downloadUrl = file.url || file.metadata?.fileUrl || file.sharedLink;
		if (downloadUrl && downloadUrl !== "#" && !downloadUrl.startsWith("https://drive.nashmia.com")) {
			const a = document.createElement("a");
			a.href = downloadUrl;
			a.download = file.metadata?.originalFilename || file.metadata?.fileName || file.name;
			a.target = "_blank";
			a.rel = "noopener noreferrer";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			toast.success(`Downloading ${file.name}`);
			return;
		}
		toast.info(`Document "${file.name}" is synchronizing from forwarder email. File content will be ready once retrieved.`);
	};
	const handleShareItem = (item) => {
		setShareTargetItem(item);
		setShareModalOpen(true);
	};
	const handleDeleteFile = (fileId) => {
		const file = files.find((f) => f.id === fileId);
		removeDriveDocument(fileId);
		setFiles((prev) => prev.filter((f) => f.id !== fileId));
		setSelectedFileIds((prev) => {
			const next = new Set(prev);
			next.delete(fileId);
			return next;
		});
		toast.success(`Moved "${file?.name || "Document"}" to Trash`);
	};
	const handleAddFile = (newFile) => {
		saveDriveDocument(newFile);
		setFiles((prev) => [newFile, ...prev.filter((f) => f.id !== newFile.id)]);
	};
	const handleAddFolder = (newFolder) => {
		setFolders((prev) => [...prev, newFolder]);
	};
	const handleBookingRealtime = (0, import_react.useCallback)((payload) => {
		if (!payload?.new) return;
		const booking = payload.new;
		const movNumber = String(booking.movement_number || booking.booking_reference || booking.reference || "").trim();
		const cutOffDates = booking.cut_off_dates || {};
		const rawConf = booking.confirmation_details || {};
		const confCutOffs = rawConf.cut_off_dates || {};
		const deadlines = booking.cut_off_deadlines || rawConf.cut_off_deadlines || [];
		if (movNumber && (deadlines.length > 0 || cutOffDates.siCutoff || confCutOffs.siCutoff)) setFiles((prev) => {
			if (!prev.some((f) => f.metadata?.movementNumber === movNumber && (f.metadata?.category === "Cut-Off Notice" || f.metadata?.documentType === "Cut-Off" || f.name.toLowerCase().includes("cutoff") || f.name.toLowerCase().includes("cut-off")))) {
				const newDoc = {
					id: `doc-cutoff-${movNumber.toLowerCase()}-${Date.now()}`,
					name: `Cut-Off_${movNumber}.pdf`,
					type: "pdf",
					extension: "pdf",
					owners: [],
					lastModified: "Just now",
					lastModifiedTimestamp: (/* @__PURE__ */ new Date()).toISOString(),
					fileSize: "410 KB",
					folderId: "folder-design",
					starred: true,
					sharedLink: `/documents?movement=${encodeURIComponent(movNumber)}`,
					metadata: {
						category: "Cut-Off Notice",
						documentType: "Cut-Off",
						movementNumber: movNumber,
						vesselName: "Vessel Updated",
						forwarderName: "Realtime Forwarder",
						forwarderEmail: "ops@forwarder.com",
						forwarderAvatarText: "A",
						typeTag: "Cut-Off",
						receivedDate: "Today",
						receivedTime: "Just now",
						status: "Processed",
						cutOffDeadlines: deadlines,
						cutOffDates: cutOffDates || confCutOffs
					}
				};
				saveDriveDocument(newDoc);
				return [newDoc, ...prev];
			}
			return prev;
		});
	}, []);
	const handleBookingEventRealtime = (0, import_react.useCallback)((payload) => {
		if (!payload?.new) return;
		const rawPayload = payload.new.payload;
		if (!rawPayload) return;
		try {
			const parsed = typeof rawPayload === "string" ? JSON.parse(rawPayload) : rawPayload;
			if (parsed?.document && parsed.document.id) {
				const doc = parsed.document;
				saveDriveDocument(doc);
				setFiles((prev) => {
					const filtered = prev.filter((f) => f.id !== doc.id);
					return [doc, ...filtered];
				});
			}
		} catch {}
	}, []);
	useSupabaseRealtime("bookings", handleBookingRealtime, isSupabaseConfigured);
	useSupabaseRealtime("booking_events", handleBookingEventRealtime, isSupabaseConfigured);
	(0, import_react.useEffect)(() => {
		const initialDocs = getSavedDocuments();
		setFiles(initialDocs);
		const syncFromServer = () => {
			const headers = {};
			if (organizationId) headers["x-organization-id"] = organizationId;
			const fetchUrl = organizationId ? `/api/documents?organizationId=${encodeURIComponent(organizationId)}` : "/api/documents";
			fetch(fetchUrl, { headers }).then((res) => res.ok ? res.json() : null).then((data) => {
				if (data && Array.isArray(data.files) && data.files.length > 0) {
					const currentLocal = getSavedDocuments();
					const currentMap = new Map(currentLocal.map((f) => [f.id, f]));
					let hasNewOrUpdated = false;
					for (const serverFile of data.files) {
						const existing = currentMap.get(serverFile.id);
						if (!existing) {
							saveDriveDocument(serverFile);
							hasNewOrUpdated = true;
						} else if (!existing.url && serverFile.url || !existing.metadata?.fileUrl && serverFile.metadata?.fileUrl || serverFile.metadata?.uploadStatus && serverFile.metadata?.uploadStatus !== existing.metadata?.uploadStatus) {
							const merged = {
								...existing,
								...serverFile,
								metadata: {
									...existing.metadata,
									...serverFile.metadata
								}
							};
							saveDriveDocument(merged);
							hasNewOrUpdated = true;
						}
					}
					if (hasNewOrUpdated) setFiles(getSavedDocuments());
				}
			}).catch(() => {});
		};
		syncFromServer();
		const pollInterval = setInterval(syncFromServer, 4e3);
		const handleDocumentSaved = (e) => {
			const customEvent = e;
			if (customEvent.detail) setFiles((prev) => {
				const filtered = prev.filter((f) => f.id !== customEvent.detail.id);
				return [customEvent.detail, ...filtered];
			});
		};
		const handleDocumentDeleted = (e) => {
			const customEvent = e;
			if (customEvent.detail?.id) setFiles((prev) => prev.filter((f) => f.id !== customEvent.detail.id));
		};
		const handleCutoffUpdated = () => {
			const current = getSavedDocuments();
			setFiles(current);
		};
		const handleStorageUpdate = (e) => {
			if (e.key === DOCUMENTS_STORAGE_KEY) setFiles(getSavedDocuments());
		};
		window.addEventListener("nashmia:document-saved", handleDocumentSaved);
		window.addEventListener("nashmia:attachment-saved", handleDocumentSaved);
		window.addEventListener("nashmia:document-deleted", handleDocumentDeleted);
		window.addEventListener("nashmia_movement_cutoff_updated", handleCutoffUpdated);
		window.addEventListener("storage", handleStorageUpdate);
		return () => {
			clearInterval(pollInterval);
			window.removeEventListener("nashmia:document-saved", handleDocumentSaved);
			window.removeEventListener("nashmia:attachment-saved", handleDocumentSaved);
			window.removeEventListener("nashmia:document-deleted", handleDocumentDeleted);
			window.removeEventListener("nashmia_movement_cutoff_updated", handleCutoffUpdated);
			window.removeEventListener("storage", handleStorageUpdate);
		};
	}, []);
	const renderDocumentBadge = (file) => {
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileThumbnailIcon, {
			file,
			size: "md",
			showFormatTag: false
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 662,
			columnNumber: 12
		}, this);
	};
	const renderTypePill = (type) => {
		const val = type || "Other";
		if (val === "Cut-Off" || val === "Cut-Off Notice") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8F8F0] text-[#10B981]",
			children: "Cut-Off"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 670,
			columnNumber: 9
		}, this);
		if (val === "BL" || val === "Bill of Lading") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F4EFFE] text-[#9333EA]",
			children: "BL"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 677,
			columnNumber: 9
		}, this);
		if (val === "Booking Confirmation") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E0F2FE] text-[#0284C7]",
			children: "Booking Confirmation"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 684,
			columnNumber: 9
		}, this);
		if (val === "Shipping Instructions") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FEF3C7] text-[#D97706]",
			children: "Shipping Instructions"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 691,
			columnNumber: 9
		}, this);
		if (val === "Invoice") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EBF7FC] text-[#0284C7]",
			children: "Invoice"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 698,
			columnNumber: 9
		}, this);
		if (val === "Packing List") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8F8F0] text-[#10B981]",
			children: "Packing List"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 705,
			columnNumber: 9
		}, this);
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F1F5F9] text-[#64748B]",
			children: val
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 711,
			columnNumber: 7
		}, this);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "w-full space-y-6 font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start gap-3.5",
					children: [onOpenMobileMenu && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: onOpenMobileMenu,
						"aria-label": "Toggle navigation menu",
						className: "mt-1 grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-2xs transition-all hover:bg-slate-50 lg:hidden",
						children: /* @__PURE__ */ (void 0)(Menu, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 730,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 724,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "inline-flex items-center gap-1 rounded-md border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#2563EB]",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Folder, { className: "size-3 text-[#2563EB]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 737,
										columnNumber: 17
									}, this), "Document Center"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 736,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 735,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "text-[28px] sm:text-[32px] font-bold tracking-tight text-slate-900 leading-tight",
								children: "Documents"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 741,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "max-w-2xl text-[13.5px] text-slate-500 font-normal",
								children: "Manage and track all your shipping documents, cut-offs, and bills of lading in one place."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 744,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 734,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 722,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setUploadModalOpen(true),
						className: "inline-flex h-11 items-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] px-5 text-sm font-semibold text-white shadow-[0_2px_10px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-0.5 active:translate-y-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 758,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Upload Document" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 759,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 753,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 752,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 720,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentsSummaryStrip, {
				totalCount,
				cutoffCount,
				blCount,
				otherCount,
				activeFilter: activeStatFilter,
				onSelectFilter: (filter) => {
					setActiveStatFilter(filter);
					setCurrentPage(1);
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 765,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "bg-white rounded-[22px] sm:rounded-[26px] border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] p-4 sm:p-6 lg:p-7 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative flex-1 min-w-0 sm:min-w-[240px] max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 783,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								placeholder: "Search by document name, movement, forwarder...",
								value: searchQuery,
								onChange: (e) => {
									setSearchQuery(e.target.value);
									setCurrentPage(1);
								},
								className: "w-full h-10 pl-9 pr-3.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 784,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 782,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect$1, {
									label: "Movement",
									value: selectedMovement,
									onChange: (val) => {
										setSelectedMovement(val);
										setCurrentPage(1);
									},
									options: [{
										value: "all",
										label: "All Movements"
									}, ...availableMovements.map((mov) => ({
										value: mov,
										label: mov
									}))],
									placeholder: "All Movements",
									size: "sm",
									activeColor: "blue",
									triggerClassName: "h-9 min-w-[130px]"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 799,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect$1, {
									label: "Document Type",
									value: selectedDocType,
									onChange: (val) => {
										setSelectedDocType(val);
										setCurrentPage(1);
									},
									options: [
										{
											value: "all",
											label: "All Types"
										},
										{
											value: "Booking Confirmation",
											label: "Booking Confirmation"
										},
										{
											value: "Bill of Lading",
											label: "Bill of Lading"
										},
										{
											value: "Shipping Instructions",
											label: "Shipping Instructions"
										},
										{
											value: "Cut-Off",
											label: "Cut-Off Notice"
										},
										{
											value: "Invoice",
											label: "Commercial Invoice"
										},
										{
											value: "Packing List",
											label: "Packing List"
										},
										{
											value: "Other",
											label: "Other"
										}
									],
									placeholder: "All Types",
									size: "sm",
									activeColor: "blue",
									triggerClassName: "h-9 min-w-[125px]"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 817,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect$1, {
									label: "Forwarder",
									value: selectedForwarder,
									onChange: (val) => {
										setSelectedForwarder(val);
										setCurrentPage(1);
									},
									options: [{
										value: "all",
										label: "All Forwarders"
									}, ...availableForwarders.map((fwd) => ({
										value: fwd,
										label: fwd
									}))],
									placeholder: "All Forwarders",
									size: "sm",
									activeColor: "blue",
									triggerClassName: "h-9 min-w-[135px]"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 841,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect$1, {
									label: "Status",
									value: selectedStatus,
									onChange: (val) => {
										setSelectedStatus(val);
										setCurrentPage(1);
									},
									options: [
										{
											value: "all",
											label: "All Status"
										},
										{
											value: "Processed",
											label: "Processed"
										},
										{
											value: "Pending",
											label: "Pending"
										},
										{
											value: "Needs Review",
											label: "Needs Review"
										}
									],
									placeholder: "All Status",
									size: "sm",
									activeColor: "blue",
									triggerClassName: "h-9 min-w-[115px]"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 859,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-col gap-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "text-[11.5px] font-medium text-slate-500 flex items-center gap-1",
										children: "Date Range"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 880,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											className: "h-9 px-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-2xs cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-3.5 text-slate-400" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 889,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: dateRangeFilter === "all" ? "From - To" : dateRangeFilter }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 890,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3 text-slate-400 ml-0.5 opacity-60" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 891,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 885,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 884,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
										align: "end",
										className: "w-48 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => setDateRangeFilter("all"),
												className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All Time" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 902,
													columnNumber: 21
												}, this), dateRangeFilter === "all" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-blue-600" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 903,
													columnNumber: 51
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 898,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => setDateRangeFilter("Today"),
												className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Today" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 909,
													columnNumber: 21
												}, this), dateRangeFilter === "Today" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-blue-600" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 910,
													columnNumber: 53
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 905,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => setDateRangeFilter("Last 7 Days"),
												className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Last 7 Days" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 916,
													columnNumber: 21
												}, this), dateRangeFilter === "Last 7 Days" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-blue-600" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 918,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 912,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => setDateRangeFilter("Last 30 Days"),
												className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Last 30 Days" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 925,
													columnNumber: 21
												}, this), dateRangeFilter === "Last 30 Days" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-blue-600" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 927,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 921,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => setDateRangeFilter("September 2025"),
												className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "September 2025" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 934,
													columnNumber: 21
												}, this), dateRangeFilter === "September 2025" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-blue-600" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 936,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 930,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 894,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 883,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 879,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-col justify-end",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => {
											setSearchQuery("");
											setSelectedMovement("all");
											setSelectedDocType("all");
											setSelectedForwarder("all");
											setSelectedStatus("all");
											setDateRangeFilter("all");
											setActiveStatFilter("all");
											setCurrentPage(1);
											toast.info("Filters reset to default");
										},
										title: "Reset / Toggle Filters",
										className: "h-9 w-9 flex items-center justify-center border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlidersHorizontal, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 962,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 945,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 944,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 797,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 780,
						columnNumber: 9
					}, this),
					selectedFileIds.size > 0 && /* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between px-4 py-2 bg-blue-50/70 border border-blue-200/80 rounded-xl text-xs text-blue-900",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "font-medium",
							children: [
								selectedFileIds.size,
								" document",
								selectedFileIds.size > 1 ? "s" : "",
								" selected"
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 971,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => {
									toast.success(`Downloading ${selectedFileIds.size} selected documents`);
								},
								className: "px-2.5 py-1 bg-white border border-blue-200 rounded-lg text-blue-700 hover:bg-blue-50 font-medium transition-colors",
								children: "Download Selected"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 975,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setSelectedFileIds(/* @__PURE__ */ new Set()),
								className: "px-2 py-1 text-slate-500 hover:text-slate-700 transition-colors",
								children: "Clear"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 984,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 974,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 970,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-7 px-4 sm:px-6 lg:px-7",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
							className: "w-full min-w-[1000px] border-separate border-spacing-0 text-left text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
								className: "bg-[#ECEEF1] text-[#5E6778]",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "rounded-l-2xl w-12 pl-6 pr-3 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											type: "checkbox",
											checked: areAllCurrentSelected,
											onChange: handleSelectAllToggle,
											className: "size-4 rounded border-slate-300 text-[#2563EB] focus:ring-blue-500 cursor-pointer"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1002,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1001,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										onClick: () => handleSortToggle("document"),
										className: "px-4 py-3.5 text-[13px] font-medium text-[#5E6778] cursor-pointer select-none",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Document" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1016,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronsUpDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1017,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1015,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1011,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										onClick: () => handleSortToggle("movement"),
										className: "px-4 py-3.5 text-[13px] font-medium text-[#5E6778] cursor-pointer select-none",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Movement" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1027,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronsUpDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1028,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1026,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1022,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										onClick: () => handleSortToggle("documentType"),
										className: "px-4 py-3.5 text-[13px] font-medium text-[#5E6778] cursor-pointer select-none",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Document Type" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1038,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronsUpDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1039,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1037,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1033,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										onClick: () => handleSortToggle("forwarder"),
										className: "px-4 py-3.5 text-[13px] font-medium text-[#5E6778] cursor-pointer select-none",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Forwarder" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1049,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronsUpDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1050,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1048,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1044,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3.5 text-[13px] font-medium text-[#5E6778]",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Type" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1057,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3 text-slate-400" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1058,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1056,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1055,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										onClick: () => handleSortToggle("receivedDate"),
										className: "px-4 py-3.5 text-[13px] font-medium text-[#5E6778] cursor-pointer select-none",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Received Date" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1068,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronsUpDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1069,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1067,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1063,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3.5 text-[13px] font-medium text-[#5E6778]",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Status" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1076,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3 text-slate-400" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1077,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1075,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1074,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "rounded-r-2xl pr-6 pl-4 py-3.5 text-right text-[13px] font-medium text-[#5E6778] w-28",
										children: "Actions"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1082,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 999,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 998,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: paginatedFiles.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								colSpan: 9,
								className: "py-14 text-center text-slate-400 text-sm",
								children: "No documents found matching the filter criteria."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1091,
								columnNumber: 19
							}, this) }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1090,
								columnNumber: 17
							}, this) : paginatedFiles.map((file) => {
								const isSelected = selectedFileIds.has(file.id);
								const movement = file.metadata?.movementReferenceNumber || file.metadata?.movementNumber || "—";
								const vessel = file.metadata?.vesselName || (movement !== "—" ? "Linked Movement" : "Pending Review");
								const rawDocType = file.metadata?.displayDocumentType || file.metadata?.documentType || file.metadata?.category || "Other";
								const docType = rawDocType === "CUT_OFF_NOTICE" || rawDocType.toLowerCase().includes("cut") ? "Cut-Off" : rawDocType === "BILL_OF_LADING" || rawDocType.toLowerCase().includes("lading") || rawDocType === "BL" ? "BL" : rawDocType;
								const forwarder = file.metadata?.forwarder || file.metadata?.forwarderName || "Direct Carrier";
								const email = file.metadata?.forwarderEmail || file.metadata?.senderEmail || "—";
								const avatarLetter = (file.metadata?.forwarderAvatarText || (forwarder !== "Direct Carrier" ? forwarder[0] : "D") || "D").toUpperCase();
								const typeTag = docType;
								const dateStr = file.metadata?.receivedDate || (file.lastModified ? file.lastModified.split("•")[0]?.trim() : (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
									day: "2-digit",
									month: "short",
									year: "numeric"
								}));
								const timeStr = file.metadata?.receivedTime || (file.lastModified && file.lastModified.includes("•") ? file.lastModified.split("•")[1]?.trim() : "");
								const status = file.metadata?.status || (movement !== "—" ? "Metadata Saved" : "Needs Review");
								const fileFormat = (file.metadata?.fileFormat || file.extension || "PDF").toUpperCase();
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
									onClick: () => handleSelectRow(file.id),
									className: `group cursor-pointer border-b border-[#F0F2F5] transition-colors last:border-b-0 hover:bg-[#F8FAFC] ${isSelected ? "bg-blue-50/40" : ""}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "w-12 pl-6 pr-3 py-4.5",
											onClick: (e) => e.stopPropagation(),
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												type: "checkbox",
												checked: isSelected,
												onChange: () => handleSelectRow(file.id),
												className: "size-4 rounded border-slate-300 text-[#2563EB] focus:ring-blue-500 cursor-pointer"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1157,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1156,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "px-4 py-4.5",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-3",
												children: [renderDocumentBadge(file), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex flex-col min-w-0",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
															type: "button",
															onClick: (e) => {
																e.stopPropagation();
																handlePreviewFile(file);
															},
															className: "font-medium text-[13.5px] text-slate-900 truncate max-w-[220px] hover:text-blue-600 transition-colors text-left cursor-pointer",
															title: file.name,
															children: file.name
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 1170,
															columnNumber: 29
														}, this),
														file.metadata?.originalFilename && file.metadata.originalFilename !== file.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-[10.5px] text-slate-400 font-mono truncate max-w-[220px]",
															title: `Original filename: ${file.metadata.originalFilename}`,
															children: ["Orig: ", file.metadata.originalFilename]
														}, void 0, true, {
															fileName: _jsxFileName$1,
															lineNumber: 1183,
															columnNumber: 31
														}, this) : null,
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-[11.5px] text-slate-400 font-normal",
															children: [
																fileFormat,
																" • ",
																file.fileSize
															]
														}, void 0, true, {
															fileName: _jsxFileName$1,
															lineNumber: 1190,
															columnNumber: 29
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 1169,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 1167,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1166,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "px-4 py-4.5",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex flex-col",
												children: [movement !== "—" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
													type: "button",
													onClick: (e) => {
														e.stopPropagation();
														setSelectedMovement(movement);
														setCurrentPage(1);
														toast.info(`Filtered documents for Movement ${movement}`);
													},
													className: "text-left font-medium text-[13px] text-slate-900 hover:text-blue-600 font-mono transition-colors cursor-pointer",
													title: `Filter by Movement ${movement}`,
													children: movement
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1201,
													columnNumber: 29
												}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-medium text-[13px] text-slate-400 font-mono",
													children: "—"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1215,
													columnNumber: 29
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[11.5px] text-slate-500 font-normal",
													children: vessel
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1219,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 1199,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1198,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "px-4 py-4.5",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "size-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0",
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 1227,
														columnNumber: 29
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1226,
													columnNumber: 27
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-slate-800 text-[13px] font-medium",
													children: docType
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1229,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 1225,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1224,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "px-4 py-4.5",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "size-7 rounded-full bg-[#1E293B] text-white flex items-center justify-center text-[10px] font-bold shrink-0",
													children: avatarLetter
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1236,
													columnNumber: 27
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex flex-col min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "font-medium text-[13px] text-slate-900 truncate max-w-[150px]",
														children: forwarder
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 1240,
														columnNumber: 29
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "text-[11.5px] text-slate-500 font-normal truncate max-w-[150px]",
														title: email,
														children: email
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 1243,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 1239,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 1235,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1234,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "px-4 py-4.5",
											children: renderTypePill(typeTag)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1254,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "px-4 py-4.5",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex flex-col",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-medium text-[13px] text-slate-900",
													children: dateStr
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1259,
													columnNumber: 27
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[11.5px] text-slate-400 font-normal",
													children: timeStr
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1260,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 1258,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1257,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "px-4 py-4.5",
											children: status === "Saved to Supabase Storage" || status === "Stored in Supabase" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3 text-emerald-600" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1271,
													columnNumber: 29
												}, this), " Stored in Supabase"]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 1270,
												columnNumber: 27
											}, this) : status === "Metadata Saved" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold bg-blue-50 text-blue-700 border border-blue-200/60",
												children: "Metadata Saved"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1274,
												columnNumber: 27
											}, this) : status === "Needs Review" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold bg-rose-50 text-rose-700 border border-rose-200/60",
												children: "Needs Review"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1278,
												columnNumber: 27
											}, this) : status === "Processed" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60",
												children: status
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1282,
												columnNumber: 27
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold bg-amber-50 text-amber-700 border border-amber-200/60",
												children: status
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1286,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1267,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "pr-6 pl-4 py-4.5 text-right",
											onClick: (e) => e.stopPropagation(),
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center justify-end gap-1",
												children: [
													(file.url || file.metadata?.fileUrl) && /* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => handleOpenStoredDocument(file),
														title: "Open Stored Document",
														className: "p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer",
														children: /* @__PURE__ */ (void 0)(ExternalLink, { className: "size-4" }, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 1305,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 1299,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
														type: "button",
														onClick: () => handlePreviewFile(file),
														title: "Preview Document & Details",
														className: "p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer",
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "size-4" }, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 1314,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 1308,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
														type: "button",
														onClick: () => handleDownloadFile(file),
														title: "Download Document",
														className: "p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer",
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "size-4" }, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 1322,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 1316,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
														asChild: true,
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
															type: "button",
															title: "More Options",
															className: "size-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer",
															children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EllipsisVertical, { className: "size-4" }, void 0, false, {
																fileName: _jsxFileName$1,
																lineNumber: 1331,
																columnNumber: 33
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 1326,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 1325,
														columnNumber: 29
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
														align: "end",
														className: "w-52 text-xs",
														children: [
															(file.url || file.metadata?.fileUrl) && /* @__PURE__ */ (void 0)(DropdownMenuItem, {
																onClick: () => handleOpenStoredDocument(file),
																className: "gap-2 cursor-pointer font-medium text-blue-700",
																children: [/* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3.5 text-blue-600" }, void 0, false, {
																	fileName: _jsxFileName$1,
																	lineNumber: 1340,
																	columnNumber: 35
																}, this), "Open Stored Document"]
															}, void 0, true, {
																fileName: _jsxFileName$1,
																lineNumber: 1336,
																columnNumber: 33
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
																onClick: () => handleDownloadFile(file),
																className: "gap-2 cursor-pointer",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "size-3.5 text-slate-500" }, void 0, false, {
																	fileName: _jsxFileName$1,
																	lineNumber: 1348,
																	columnNumber: 33
																}, this), "Download File"]
															}, void 0, true, {
																fileName: _jsxFileName$1,
																lineNumber: 1344,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
																onClick: () => handlePreviewFile(file),
																className: "gap-2 cursor-pointer",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "size-3.5 text-slate-500" }, void 0, false, {
																	fileName: _jsxFileName$1,
																	lineNumber: 1355,
																	columnNumber: 33
																}, this), "Preview Document"]
															}, void 0, true, {
																fileName: _jsxFileName$1,
																lineNumber: 1351,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
																onClick: () => {
																	setActiveItemForDetails({
																		file,
																		folder: null
																	});
																	setDetailsDrawerOpen(true);
																},
																className: "gap-2 cursor-pointer",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "size-3.5 text-slate-500" }, void 0, false, {
																	fileName: _jsxFileName$1,
																	lineNumber: 1365,
																	columnNumber: 33
																}, this), "View Document Details"]
															}, void 0, true, {
																fileName: _jsxFileName$1,
																lineNumber: 1358,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
																onClick: () => handleShareItem(file),
																className: "gap-2 cursor-pointer",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share2, { className: "size-3.5 text-slate-500" }, void 0, false, {
																	fileName: _jsxFileName$1,
																	lineNumber: 1372,
																	columnNumber: 33
																}, this), "Share Document"]
															}, void 0, true, {
																fileName: _jsxFileName$1,
																lineNumber: 1368,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
																onClick: () => {
																	navigator.clipboard.writeText(file.sharedLink || file.url || window.location.href);
																	toast.success("Link copied to clipboard");
																},
																className: "gap-2 cursor-pointer",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "size-3.5 text-slate-500" }, void 0, false, {
																	fileName: _jsxFileName$1,
																	lineNumber: 1384,
																	columnNumber: 33
																}, this), "Copy Link"]
															}, void 0, true, {
																fileName: _jsxFileName$1,
																lineNumber: 1375,
																columnNumber: 31
															}, this),
															file.metadata?.needsReview && /* @__PURE__ */ (void 0)(DropdownMenuItem, {
																onClick: () => {
																	setManualReviewDoc(file);
																	setManualReviewModalOpen(true);
																},
																className: "gap-2 font-medium text-amber-800 bg-amber-50 cursor-pointer",
																children: [/* @__PURE__ */ (void 0)(ShieldCheck, { className: "size-3.5 text-amber-600" }, void 0, false, {
																	fileName: _jsxFileName$1,
																	lineNumber: 1395,
																	columnNumber: 35
																}, this), "Review Document"]
															}, void 0, true, {
																fileName: _jsxFileName$1,
																lineNumber: 1388,
																columnNumber: 33
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
																fileName: _jsxFileName$1,
																lineNumber: 1399,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
																onClick: () => handleDeleteFile(file.id),
																className: "gap-2 text-rose-600 focus:text-rose-600 focus:bg-rose-50 cursor-pointer",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-3.5" }, void 0, false, {
																	fileName: _jsxFileName$1,
																	lineNumber: 1404,
																	columnNumber: 33
																}, this), "Move to Trash"]
															}, void 0, true, {
																fileName: _jsxFileName$1,
																lineNumber: 1400,
																columnNumber: 31
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 1334,
														columnNumber: 29
													}, this)] }, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 1324,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 1297,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1293,
											columnNumber: 23
										}, this)
									]
								}, file.id, true, {
									fileName: _jsxFileName$1,
									lineNumber: 1148,
									columnNumber: 21
								}, this);
							}) }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1088,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 997,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 996,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PillPagination, {
						currentPage: currentSafePage,
						totalPages,
						onPageChange: setCurrentPage,
						totalItems: sortedFiles.length,
						pageSize,
						itemName: "documents",
						className: "pt-2 border-t border-slate-100"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1420,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 778,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileDetailsDrawer, {
				file: activeItemForDetails.file,
				folder: activeItemForDetails.folder,
				open: detailsDrawerOpen,
				onClose: () => setDetailsDrawerOpen(false),
				onShare: () => {
					if (activeItemForDetails.file) handleShareItem(activeItemForDetails.file);
					else if (activeItemForDetails.folder) handleShareItem(activeItemForDetails.folder);
				},
				onReview: (fileToReview) => {
					setDetailsDrawerOpen(false);
					setManualReviewDoc(fileToReview);
					setManualReviewModalOpen(true);
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1433,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ManualReviewLinkModal, {
				isOpen: manualReviewModalOpen,
				onClose: () => {
					setManualReviewModalOpen(false);
					setManualReviewDoc(null);
				},
				document: manualReviewDoc,
				onDocumentLinked: (updated) => {
					const fresh = getSavedDocuments();
					setFiles(fresh);
					toast.success(`Document linked to Movement ${updated.metadata?.movementNumber || ""}`, { description: `Classification set to ${updated.metadata?.documentType || "DOCUMENT"}` });
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1450,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShareDocumentModal, {
				item: shareTargetItem,
				open: shareModalOpen,
				onOpenChange: setShareModalOpen
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1467,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadDocumentModal, {
				open: uploadModalOpen,
				onOpenChange: setUploadModalOpen,
				folders,
				activeFolderId: "folder-design",
				onAddFile: handleAddFile,
				onAddFolder: handleAddFolder
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1474,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentPreviewDialog, {
				file: previewFile,
				open: previewDialogOpen,
				onOpenChange: setPreviewDialogOpen,
				onShare: () => {
					if (previewFile) handleShareItem(previewFile);
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1484,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 718,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/documents.tsx?tsr-split=component";
function DocumentsRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, {
		bg: "bg-[#F4F6FA]",
		children: ({ onOpenMobileMenu }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentsPage, { onOpenMobileMenu }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 7,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 4,
		columnNumber: 10
	}, this);
}
//#endregion
export { DocumentsRoute as component };
