import { o as __toESM } from "../_runtime.mjs";
import { Ht as updateLocalBooking, d as extractQuotationFieldsDeterministic, i as classifyConfirmationDeterministic, pt as getLocalBookings } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { B as RefreshCw, C as SquarePen, Ct as Inbox, D as SlidersHorizontal, Dt as Folder, It as FileCheckCorner, N as Send, P as Search, Pt as FilePen, Q as OctagonAlert, R as RotateCcw, S as Star, Ut as Download, Vt as EllipsisVertical, W as Plus, Wt as DollarSign, Y as Paperclip, Yt as Clock, _t as LayoutGrid, an as ChevronRight, b as Tag, cn as Check, i as X, in as ChevronUp, jt as FileText, k as ShieldCheck, kt as FolderInput, lt as Mail, nn as CircleAlert, on as ChevronLeft, ot as Menu, r as Zap, sn as ChevronDown, tn as CircleCheck, ut as LogOut, v as Trash2, z as Reply, zt as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Skeleton } from "./skeleton-CElFHdk0.mjs";
import { i as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { N as useAuth, j as useGmail, r as AppLayout } from "./router-BJg2H47m.mjs";
import { t as LifecycleDropdownSelect } from "./LifecycleDropdownSelect-Dr2RhBr1.mjs";
import { t as MovementLifecycleDrawer } from "./MovementLifecycleDrawer-BFcX3wIF.mjs";
import { i as useRetryEmail, r as useEmails } from "./EmailSendingProcessModal-DxhN1d-h.mjs";
import { t as ComposeEmailModal } from "./ComposeEmailModal-BqLUMJ5t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/emails-BRZT_oiA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$6 = "/app/applet/src/components/nashmia/emails/EmailFolderSidebar.tsx";
function EmailFolderSidebar({ selectedFolder, onSelectFolder, folderCounts, onOpenCompose, activeFolderTag, onSelectFolderTag }) {
	const { user, profile } = useAuth();
	const [isMoreOpen, setIsMoreOpen] = (0, import_react.useState)(false);
	const [customFolders, setCustomFolders] = (0, import_react.useState)([
		{
			id: "office",
			name: "Office",
			color: "text-blue-500 fill-blue-500"
		},
		{
			id: "personal",
			name: "Personal",
			color: "text-rose-500 fill-rose-500"
		},
		{
			id: "freelance",
			name: "Freelance",
			color: "text-amber-500 fill-amber-500"
		}
	]);
	const [isAddingFolder, setIsAddingFolder] = (0, import_react.useState)(false);
	const [newFolderName, setNewFolderName] = (0, import_react.useState)("");
	const handleAddFolder = () => {
		if (!newFolderName.trim()) {
			setIsAddingFolder(false);
			return;
		}
		const colors = [
			"text-indigo-500 fill-indigo-500",
			"text-emerald-500 fill-emerald-500",
			"text-purple-500 fill-purple-500",
			"text-cyan-500 fill-cyan-500"
		];
		const pickedColor = colors[customFolders.length % colors.length];
		setCustomFolders((prev) => [...prev, {
			id: newFolderName.toLowerCase().replace(/\s+/g, "-"),
			name: newFolderName.trim(),
			color: pickedColor
		}]);
		setNewFolderName("");
		setIsAddingFolder(false);
	};
	const displayName = profile?.full_name || user?.user_metadata?.full_name || (user?.email ? user.email.split("@")[0] : "Nashmia Logistics");
	const displayEmail = user?.email || profile?.email || "";
	const avatarLetter = (displayName[0] || user?.email?.[0] || "N").toUpperCase();
	profile?.avatar_url;
	const unreadCount = folderCounts.inbox;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
		className: "w-full lg:w-[260px] xl:w-[280px] shrink-0 flex flex-col justify-between select-none py-2",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "space-y-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3.5 px-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative size-12 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid size-12 place-items-center rounded-full bg-gradient-to-tr from-[#0FA3B1] to-[#078A99] font-bold text-white text-[16px] ring-2 ring-slate-100 shadow-xs",
							children: avatarLetter
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 89,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute bottom-0 right-0 size-3 rounded-full bg-emerald-500 ring-2 ring-white" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 92,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 88,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-[15px] font-bold text-blue-600 truncate leading-tight tracking-tight",
							children: displayName
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 95,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-slate-400 truncate mt-0.5 font-normal",
							children: displayEmail || "Online"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 98,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 94,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 87,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "space-y-1 relative",
					"aria-label": "Mailbox folders",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => {
								onSelectFolderTag?.(null);
								onSelectFolder("inbox");
							},
							className: cn("group relative w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-[14px] font-semibold transition-colors text-left", selectedFolder === "inbox" && !activeFolderTag ? "text-slate-900 bg-slate-50/80" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/60 font-medium"),
							children: [
								selectedFolder === "inbox" && !activeFolderTag && /* @__PURE__ */ (void 0)("span", { className: "absolute -left-1 sm:-left-2 top-1/2 -translate-y-1/2 w-1.5 h-7 bg-blue-600 rounded-r-full" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 121,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: cn("size-5 transition-colors shrink-0", selectedFolder === "inbox" && !activeFolderTag ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600") }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 123,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "truncate",
									children: "Inbox"
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 131,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "ml-auto px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FF334B] text-white shadow-xs",
									children: unreadCount
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 132,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 107,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => {
								onSelectFolderTag?.(null);
								onSelectFolder("all");
							},
							className: cn("group relative w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-[14px] transition-colors text-left", selectedFolder === "all" && !activeFolderTag ? "text-slate-900 bg-slate-50/80 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/60 font-medium"),
							children: [
								selectedFolder === "all" && !activeFolderTag && /* @__PURE__ */ (void 0)("span", { className: "absolute -left-1 sm:-left-2 top-1/2 -translate-y-1/2 w-1.5 h-7 bg-blue-600 rounded-r-full" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 152,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: cn("size-5 transition-colors shrink-0", selectedFolder === "all" && !activeFolderTag ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600") }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 154,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "truncate",
									children: "Flagged"
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 162,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 138,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => {
								onSelectFolderTag?.(null);
								onSelectFolder("drafts");
							},
							className: cn("group relative w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-[14px] transition-colors text-left", selectedFolder === "drafts" && !activeFolderTag ? "text-slate-900 bg-slate-50/80 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/60 font-medium"),
							children: [
								selectedFolder === "drafts" && !activeFolderTag && /* @__PURE__ */ (void 0)("span", { className: "absolute -left-1 sm:-left-2 top-1/2 -translate-y-1/2 w-1.5 h-7 bg-blue-600 rounded-r-full" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 180,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: cn("size-5 transition-colors shrink-0", selectedFolder === "drafts" && !activeFolderTag ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600") }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 182,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "truncate",
									children: "Draft"
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 190,
									columnNumber: 13
								}, this),
								folderCounts.drafts > 0 && /* @__PURE__ */ (void 0)("span", {
									className: "ml-auto text-xs text-slate-400 font-medium",
									children: folderCounts.drafts
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 192,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 166,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => {
								onSelectFolderTag?.(null);
								onSelectFolder("sent");
							},
							className: cn("group relative w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-[14px] transition-colors text-left", selectedFolder === "sent" && !activeFolderTag ? "text-slate-900 bg-slate-50/80 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/60 font-medium"),
							children: [
								selectedFolder === "sent" && !activeFolderTag && /* @__PURE__ */ (void 0)("span", { className: "absolute -left-1 sm:-left-2 top-1/2 -translate-y-1/2 w-1.5 h-7 bg-blue-600 rounded-r-full" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 213,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: cn("size-5 transition-colors shrink-0", selectedFolder === "sent" && !activeFolderTag ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600") }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 215,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "truncate",
									children: "Sent"
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 223,
									columnNumber: 13
								}, this),
								folderCounts.sent > 0 && /* @__PURE__ */ (void 0)("span", {
									className: "ml-auto text-xs text-slate-400 font-medium",
									children: folderCounts.sent
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 225,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 199,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => {
								onSelectFolderTag?.(null);
								onSelectFolder("failed");
							},
							className: cn("group relative w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-[14px] transition-colors text-left", selectedFolder === "failed" && !activeFolderTag ? "text-slate-900 bg-slate-50/80 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/60 font-medium"),
							children: [
								selectedFolder === "failed" && !activeFolderTag && /* @__PURE__ */ (void 0)("span", { className: "absolute -left-1 sm:-left-2 top-1/2 -translate-y-1/2 w-1.5 h-7 bg-blue-600 rounded-r-full" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 246,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: cn("size-5 transition-colors shrink-0", selectedFolder === "failed" && !activeFolderTag ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600") }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 248,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "truncate",
									children: "Trash"
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 256,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 232,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setIsMoreOpen((v) => !v),
							className: "group w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[14px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50/60 transition-colors text-left",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutGrid, { className: "size-5 text-slate-400 group-hover:text-slate-600 transition-colors shrink-0" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 266,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "More" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 267,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 265,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: cn("size-4 text-slate-400 transition-transform duration-200", isMoreOpen && "rotate-180") }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 269,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 260,
							columnNumber: 11
						}, this),
						isMoreOpen && /* @__PURE__ */ (void 0)("div", {
							className: "pl-9 pr-2 py-1 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150",
							children: [
								/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => {
										onSelectFolderTag?.(null);
										onSelectFolder("booking");
									},
									className: cn("w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between", selectedFolder === "booking" ? "bg-blue-50 text-blue-700 font-semibold" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"),
									children: [/* @__PURE__ */ (void 0)("span", { children: "Booking Emails" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 293,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[11px] text-slate-400",
										children: folderCounts.booking
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 294,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 280,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => {
										onSelectFolderTag?.(null);
										onSelectFolder("pending");
									},
									className: cn("w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between", selectedFolder === "pending" ? "bg-blue-50 text-blue-700 font-semibold" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"),
									children: [/* @__PURE__ */ (void 0)("span", { children: "Pending Outbox" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 309,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[11px] text-slate-400",
										children: folderCounts.pending
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 310,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 296,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => {
										onSelectFolderTag?.(null);
										onSelectFolder("system");
									},
									className: cn("w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between", selectedFolder === "system" ? "bg-blue-50 text-blue-700 font-semibold" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"),
									children: [/* @__PURE__ */ (void 0)("span", { children: "System Audits" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 325,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[11px] text-slate-400",
										children: folderCounts.system
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 326,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 312,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 279,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 105,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "pt-2 space-y-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between px-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-[15px] font-bold text-slate-900 tracking-tight",
								children: "Folders"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 335,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setIsAddingFolder((v) => !v),
								className: "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shadow-2xs",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 341,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Add" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 342,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 336,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 334,
							columnNumber: 11
						}, this),
						isAddingFolder && /* @__PURE__ */ (void 0)("div", {
							className: "px-3.5 py-2 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)("input", {
								type: "text",
								value: newFolderName,
								onChange: (e) => setNewFolderName(e.target.value),
								onKeyDown: (e) => e.key === "Enter" && handleAddFolder(),
								placeholder: "Folder name...",
								autoFocus: true,
								className: "flex-1 text-xs bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 349,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: handleAddFolder,
								className: "p-1 rounded-md bg-blue-600 text-white hover:bg-blue-700",
								children: /* @__PURE__ */ (void 0)(Check, { className: "size-3" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 363,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 358,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 348,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-0.5",
							children: customFolders.map((folder) => {
								const isSelected = activeFolderTag === folder.id;
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => {
										onSelectFolderTag?.(isSelected ? null : folder.id);
									},
									className: cn("group w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-[14px] font-medium transition-colors text-left", isSelected ? "bg-slate-100 text-slate-900 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/60"),
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Folder, { className: cn("size-5 shrink-0", folder.color) }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 386,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "truncate",
										children: folder.name
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 387,
										columnNumber: 19
									}, this)]
								}, folder.id, true, {
									fileName: _jsxFileName$6,
									lineNumber: 373,
									columnNumber: 17
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 369,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 333,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 85,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "pt-8 px-1 pb-2",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onOpenCompose,
				className: "w-full py-3.5 px-5 rounded-2xl bg-[#FF334B] hover:bg-[#F2243C] text-white text-[15px] font-bold flex items-center justify-center gap-2.5 shadow-md shadow-red-500/20 active:scale-[0.99] transition-all cursor-pointer",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SquarePen, { className: "size-4 text-white stroke-[2.5]" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 402,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Compose" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 403,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 397,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 396,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 84,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/app/applet/src/components/nashmia/skeletons/EmailSkeletons.tsx";
function EmailListSkeleton({ count = 5 }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3 skeleton-container",
		children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs space-y-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-10 rounded-full bg-slate-200/80 shrink-0" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 13,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex-1 min-w-0 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-32 bg-slate-200/80" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 16,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3 w-14 bg-slate-100 shrink-0" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 17,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 15,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-44 bg-slate-200/70" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 19,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 14,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 12,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3 w-full bg-slate-100" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 23,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between pt-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-5 w-20 rounded-full bg-slate-200/60" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 26,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-12 rounded bg-slate-100" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 27,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 25,
					columnNumber: 11
				}, this)
			]
		}, i, true, {
			fileName: _jsxFileName$5,
			lineNumber: 8,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
function EmailPreviewSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col h-full bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden skeleton-container",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-7 rounded-lg bg-slate-200/70" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 41,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-7 rounded-lg bg-slate-200/70" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 42,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-7 rounded-lg bg-slate-200/70" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 43,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 40,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-14 bg-slate-100" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 46,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-7 rounded-lg bg-slate-200/70" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 47,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 45,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 39,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex-1 p-6 space-y-5 overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-5 w-3/4 bg-slate-200/80" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 56,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-5 w-20 rounded-full bg-slate-200/60" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 58,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-5 w-28 rounded-full bg-slate-200/60" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 59,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 57,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 55,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-8 w-24 rounded-xl bg-slate-200/70 shrink-0" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 62,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 54,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-10 rounded-full bg-slate-200/80 shrink-0" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 68,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-32 bg-slate-200/80" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 70,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3 w-40 bg-slate-100" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 71,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 69,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 67,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3 w-20 bg-slate-100 shrink-0" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 74,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 66,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-2.5 pt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-full bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 79,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-11/12 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 80,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-4/5 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 81,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-full bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 82,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-3/4 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 83,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 78,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border-t border-slate-100 pt-4 space-y-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-28 bg-slate-200/70" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 88,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-9 rounded-lg bg-slate-200/70 shrink-0" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 91,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex-1 space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-28 bg-slate-200/70" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 93,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-2.5 w-16 bg-slate-100" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 94,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 92,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 90,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-9 rounded-lg bg-slate-200/70 shrink-0" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 98,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex-1 space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-24 bg-slate-200/70" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 100,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-2.5 w-14 bg-slate-100" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 101,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 99,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 97,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 89,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 87,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 52,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 37,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/nashmia/emails/EmailListPanel.tsx";
var SENDER_AVATARS = {
	"sam miller": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
	"lily jones": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
	smith: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
	patrick: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
};
var DEFAULT_AVATARS = [
	"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
	"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
	"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
	"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
	"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
	"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
];
function getSenderAvatar(name, email) {
	const clean = (name || email || "User").toLowerCase().trim();
	if (SENDER_AVATARS[clean]) return SENDER_AVATARS[clean];
	for (const [k, url] of Object.entries(SENDER_AVATARS)) if (clean.includes(k)) return url;
	let hash = 0;
	for (let i = 0; i < clean.length; i++) {
		hash = (hash << 5) - hash + clean.charCodeAt(i);
		hash |= 0;
	}
	return DEFAULT_AVATARS[Math.abs(hash) % DEFAULT_AVATARS.length];
}
function formatCardTimestamp(dateStr) {
	try {
		const d = new Date(dateStr);
		if (isNaN(d.getTime())) return dateStr;
		const now = /* @__PURE__ */ new Date();
		const isToday = d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
		const timeFormatted = d.toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true
		});
		if (isToday) return `Today, ${timeFormatted}`;
		const yesterday = new Date(now);
		yesterday.setDate(now.getDate() - 1);
		if (d.getDate() === yesterday.getDate() && d.getMonth() === yesterday.getMonth() && d.getFullYear() === yesterday.getFullYear()) return `Yesterday, ${timeFormatted}`;
		if (Math.floor((now.getTime() - d.getTime()) / 864e5) < 7) return `${d.toLocaleDateString("en-US", { weekday: "long" })}, ${timeFormatted}`;
		return d.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			hour12: true
		});
	} catch {
		return dateStr;
	}
}
function EmailListPanel({ emails, selectedEmailId, onSelectEmail, isLoading, onOpenComposeDraft, onRetryEmail }) {
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedStatusFilter, setSelectedStatusFilter] = (0, import_react.useState)("ALL");
	const [selectedTypeFilter, setSelectedTypeFilter] = (0, import_react.useState)("ALL");
	const [isFilterOpen, setIsFilterOpen] = (0, import_react.useState)(false);
	const [refreshTick, setRefreshTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const handleUpdate = () => {
			setRefreshTick((t) => t + 1);
		};
		window.addEventListener("nashmia_booking_confirmed", handleUpdate);
		window.addEventListener("nashmia_forwarder_offer_received", handleUpdate);
		window.addEventListener("nashmia_multi_forwarder_updated", handleUpdate);
		window.addEventListener("nashmia_multi_forwarder_dispatched", handleUpdate);
		window.addEventListener("storage", handleUpdate);
		return () => {
			window.removeEventListener("nashmia_booking_confirmed", handleUpdate);
			window.removeEventListener("nashmia_forwarder_offer_received", handleUpdate);
			window.removeEventListener("nashmia_multi_forwarder_updated", handleUpdate);
			window.removeEventListener("nashmia_multi_forwarder_dispatched", handleUpdate);
			window.removeEventListener("storage", handleUpdate);
		};
	}, []);
	const { confirmedBookingRefs, acceptedThreadIds } = (0, import_react.useMemo)(() => {
		const refs = /* @__PURE__ */ new Set();
		const threads = /* @__PURE__ */ new Set();
		const bookings = getLocalBookings();
		for (const b of bookings) {
			const statusUpper = (b.status || "").toUpperCase();
			const confUpper = (b.confirmation_status || "").toUpperCase();
			if (statusUpper.includes("CONFIRM") || statusUpper === "LOADED" || statusUpper === "IN TRANSIT" || confUpper === "CONFIRMED") {
				if (b.booking_reference) refs.add(b.booking_reference.trim().toUpperCase());
				if (b.movement_number) refs.add(b.movement_number.trim().toUpperCase());
				if (b.reference) refs.add(b.reference.trim().toUpperCase());
				if (b.id) refs.add(b.id.trim().toUpperCase());
			}
		}
		try {
			const fwdRaw = localStorage.getItem("nashmia_forwarder_requests");
			if (fwdRaw) {
				const parsed = JSON.parse(fwdRaw);
				if (Array.isArray(parsed)) {
					for (const req of parsed) if (req.status === "ACCEPTED" || req.status === "OFFER_RECEIVED") {
						if (req.movementNumber) refs.add(req.movementNumber.trim().toUpperCase());
						if (req.bookingId) refs.add(req.bookingId.trim().toUpperCase());
						if (req.gmailThreadId) threads.add(req.gmailThreadId.trim());
					}
				}
			}
		} catch {}
		try {
			const cachedRaw = localStorage.getItem("nashmia_cached_bookings");
			if (cachedRaw) {
				const parsed = JSON.parse(cachedRaw);
				if (Array.isArray(parsed)) for (const b of parsed) {
					const st = (b.status || "").toUpperCase();
					const cf = (b.confirmationStatus || b.confirmation_status || "").toUpperCase();
					if (st.includes("CONFIRM") || cf === "CONFIRMED") {
						if (b.reference) refs.add(b.reference.trim().toUpperCase());
						if (b.id) refs.add(b.id.trim().toUpperCase());
					}
				}
			}
		} catch {}
		return {
			confirmedBookingRefs: refs,
			acceptedThreadIds: threads
		};
	}, [emails, refreshTick]);
	const filteredList = (0, import_react.useMemo)(() => {
		const q = searchQuery.toLowerCase().trim();
		return emails.filter((item) => {
			if (q) {
				const matchRecipient = `${item.toEmail} ${item.toName || ""}`.toLowerCase().includes(q);
				const matchSender = `${item.fromEmail} ${item.fromName || ""}`.toLowerCase().includes(q);
				const matchSubject = item.subject.toLowerCase().includes(q);
				const matchRef = (item.bookingReference || "").toLowerCase().includes(q);
				const matchBody = item.body.toLowerCase().includes(q);
				const matchForwarder = (item.forwarderName || "").toLowerCase().includes(q);
				if (!matchRecipient && !matchSender && !matchSubject && !matchRef && !matchBody && !matchForwarder) return false;
			}
			if (selectedStatusFilter !== "ALL" && item.status !== selectedStatusFilter) return false;
			if (selectedTypeFilter !== "ALL" && item.emailType !== selectedTypeFilter) return false;
			return true;
		});
	}, [
		emails,
		searchQuery,
		selectedStatusFilter,
		selectedTypeFilter
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex-1 flex flex-col min-w-0 h-full select-none",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative mb-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "bg-white rounded-2xl border border-slate-200/80 shadow-xs px-4 py-3 flex items-center gap-3 transition-shadow focus-within:shadow-sm focus-within:border-slate-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-4 text-slate-400 shrink-0" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 258,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						type: "text",
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						placeholder: "Search",
						className: "flex-1 bg-transparent text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 259,
						columnNumber: 11
					}, this),
					searchQuery && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => setSearchQuery(""),
						className: "text-slate-400 hover:text-slate-600 p-0.5",
						children: /* @__PURE__ */ (void 0)(X, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 272,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 267,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setIsFilterOpen((v) => !v),
						title: "Filter options",
						className: cn("p-1.5 rounded-lg transition-colors shrink-0", isFilterOpen || selectedStatusFilter !== "ALL" || selectedTypeFilter !== "ALL" ? "bg-slate-100 text-slate-900" : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlidersHorizontal, { className: "size-4.5" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 286,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 275,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 257,
				columnNumber: 9
			}, this), isFilterOpen && /* @__PURE__ */ (void 0)("div", {
				className: "absolute top-full mt-2 left-0 right-0 z-20 p-3.5 bg-white rounded-2xl border border-slate-200 shadow-lg space-y-3 animate-in fade-in slide-in-from-top-1 duration-150",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-center justify-between text-xs font-semibold text-slate-700",
					children: [/* @__PURE__ */ (void 0)("span", { children: "Filter Conversations" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 294,
						columnNumber: 15
					}, this), (selectedStatusFilter !== "ALL" || selectedTypeFilter !== "ALL") && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => {
							setSelectedStatusFilter("ALL");
							setSelectedTypeFilter("ALL");
						},
						className: "text-blue-600 hover:underline text-[11px]",
						children: "Reset"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 296,
						columnNumber: 17
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 293,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "grid grid-cols-2 gap-2 text-xs",
					children: [/* @__PURE__ */ (void 0)(LifecycleDropdownSelect, {
						label: "Status",
						value: selectedStatusFilter,
						onChange: (val) => setSelectedStatusFilter(val),
						options: [
							{
								value: "ALL",
								label: "All Statuses"
							},
							{
								value: "SENT",
								label: "Sent"
							},
							{
								value: "PENDING",
								label: "Pending"
							},
							{
								value: "DRAFT",
								label: "Drafts"
							},
							{
								value: "FAILED",
								label: "Failed"
							}
						],
						placeholder: "All Statuses",
						size: "sm",
						activeColor: "teal",
						triggerClassName: "h-8.5 w-full text-xs font-medium"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 310,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)(LifecycleDropdownSelect, {
						label: "Category",
						value: selectedTypeFilter,
						onChange: (val) => setSelectedTypeFilter(val),
						options: [
							{
								value: "ALL",
								label: "All Categories"
							},
							{
								value: "BOOKING_REQUEST",
								label: "Booking Request"
							},
							{
								value: "BOOKING_CONFIRMATION",
								label: "Confirmation"
							},
							{
								value: "GENERAL",
								label: "General"
							}
						],
						placeholder: "All Categories",
						size: "sm",
						activeColor: "teal",
						triggerClassName: "h-8.5 w-full text-xs font-medium"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 327,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 309,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 292,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 256,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex-1 overflow-y-auto pr-1 space-y-3.5 scrollbar-thin scrollbar-thumb-slate-200",
			children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailListSkeleton, { count: 4 }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 350,
				columnNumber: 11
			}, this) : filteredList.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "bg-white rounded-2xl p-12 border border-slate-200/70 text-center space-y-3 shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "size-12 rounded-full bg-slate-100 text-slate-400 grid place-items-center mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Inbox, { className: "size-6" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 355,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 354,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-sm font-bold text-slate-800",
						children: "No emails found"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 357,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-slate-400 max-w-xs mx-auto",
						children: searchQuery ? "No email conversations match your search query." : "No emails recorded in this mailbox yet."
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 358,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 353,
				columnNumber: 11
			}, this) : filteredList.map((item) => {
				const isSelected = selectedEmailId === item.id;
				const senderName = item.direction === "outbound" ? item.toName || item.forwarderName || item.toEmail : item.fromName || item.forwarderName || (item.fromEmail ? item.fromEmail.split("@")[0].replace(/[._-]/g, " ") : "Freight Forwarder");
				getSenderAvatar(senderName, item.fromEmail);
				const timeText = formatCardTimestamp(item.sentAt || item.createdAt);
				const previewText = item.snippet || item.body || "No preview available";
				const attachmentCount = item.attachments && item.attachments.length > 0 ? item.attachments.length : 0;
				const movementRef = item.movementNumber || item.bookingReference || `${item.subject} ${item.body} ${item.snippet || ""}`.match(/\b(MOV-\d{4}-\d{3,6}|BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|NASH-[A-Z0-9-]+)\b/i)?.[0];
				const isDeterministicConfirmed = classifyConfirmationDeterministic(item.subject || "", item.body || item.snippet || "", item.snippet)?.status === "CONFIRMED";
				const isLinkedBookingConfirmed = Boolean(movementRef && confirmedBookingRefs.has(movementRef.trim().toUpperCase()));
				const textLower = `${item.subject} ${item.body} ${item.snippet || ""}`.toLowerCase();
				const hasConfirmKeyword = textLower.includes("booking confirmed") || textLower.includes("space confirmed") || textLower.includes("booking is confirmed") || textLower.includes("space is confirmed") || textLower.includes("booking has been confirmed") || textLower.includes("we confirm") || textLower.includes("pleased to confirm") || textLower.includes("happy to confirm") || textLower.includes("allocation confirmed") || textLower.includes("booking approved") || textLower.includes("booking accepted") || textLower.includes("space secured") || textLower.includes("confirmed as booked") || textLower.includes("confirmed for sailing") || textLower.includes("confirmed on vessel") || textLower.includes("confirmed with carrier");
				const isThreadAccepted = Boolean(item.threadId && acceptedThreadIds.has(item.threadId.trim()) || item.gmailThreadId && acceptedThreadIds.has(item.gmailThreadId.trim()));
				const isConfirmed = item.confirmationStatus === "CONFIRMED" || item.emailType === "BOOKING_CONFIRMATION" || isDeterministicConfirmed || isLinkedBookingConfirmed || isThreadAccepted || hasConfirmKeyword;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					onClick: () => onSelectEmail(item),
					className: cn("group relative rounded-2xl p-5 border transition-all duration-150 cursor-pointer shadow-xs", isConfirmed ? isSelected ? "border-emerald-500 ring-2 ring-emerald-500/30 bg-emerald-50/40 shadow-md" : "border-emerald-300/90 bg-emerald-50/20 hover:bg-emerald-50/35 hover:border-emerald-400 ring-1 ring-emerald-400/20 shadow-xs" : isSelected ? "bg-white border-blue-400 ring-2 ring-blue-500/20 shadow-md" : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-md"),
					children: [
						isConfirmed && /* @__PURE__ */ (void 0)("div", { className: "absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-emerald-500 shadow-sm" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 451,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: cn("size-11 rounded-full grid place-items-center font-bold text-xs tracking-wider shadow-2xs border", isConfirmed ? "bg-emerald-100/90 text-emerald-800 border-emerald-300" : "bg-slate-100 text-slate-700 border-slate-200"),
									children: senderName.split(" ").map((n) => n[0]).filter(Boolean).slice(0, 2).join("").toUpperCase() || "EM"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 457,
									columnNumber: 21
								}, this), isConfirmed && /* @__PURE__ */ (void 0)("div", {
									className: "absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-2 ring-white shadow-2xs",
									children: /* @__PURE__ */ (void 0)(CircleCheck, { className: "size-2.5" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 475,
										columnNumber: 25
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 474,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 456,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-baseline justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "text-[15px] font-bold text-slate-900 truncate leading-tight flex items-center gap-1.5",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "truncate",
												children: senderName
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 483,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 482,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs text-slate-400 font-medium whitespace-nowrap shrink-0",
											children: timeText
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 485,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 481,
										columnNumber: 21
									}, this),
									isConfirmed && /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center flex-wrap gap-1.5 mt-1.5",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-bold shadow-2xs",
											children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3 text-emerald-600 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 494,
												columnNumber: 27
											}, this), "Booking Confirmed"]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 493,
											columnNumber: 25
										}, this), movementRef && /* @__PURE__ */ (void 0)("span", {
											className: "inline-flex items-center px-1.5 py-0.5 rounded-md bg-white/90 border border-emerald-200 text-emerald-700 text-[10.5px] font-mono font-bold tracking-tight shadow-2xs",
											children: movementRef
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 498,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 492,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: cn("text-sm font-semibold mt-1 truncate", isConfirmed ? "text-slate-900" : "text-slate-800"),
										children: item.subject
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 506,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 480,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 455,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[13px] text-slate-500 line-clamp-2 mt-2 leading-relaxed pl-14",
							children: previewText
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 518,
							columnNumber: 17
						}, this),
						attachmentCount > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "pl-14 mt-3",
							children: /* @__PURE__ */ (void 0)("span", {
								className: "inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:underline",
								children: [/* @__PURE__ */ (void 0)(Paperclip, { className: "size-3.5 rotate-45 stroke-[2.5]" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 526,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("span", { children: [attachmentCount, " Attachments"] }, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 527,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 525,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 524,
							columnNumber: 19
						}, this),
						(item.status === "DRAFT" || item.status === "FAILED" || isConfirmed) && /* @__PURE__ */ (void 0)("div", {
							className: cn("pl-14 mt-2.5 flex items-center justify-between pt-2 border-t", isConfirmed ? "border-emerald-100" : "border-slate-100"),
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-3",
								children: [
									item.status === "DRAFT" && onOpenComposeDraft && /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: (e) => {
											e.stopPropagation();
											onOpenComposeDraft(item);
										},
										className: "inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:underline",
										children: [/* @__PURE__ */ (void 0)(FilePen, { className: "size-3" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 550,
											columnNumber: 27
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Edit Draft" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 551,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 542,
										columnNumber: 25
									}, this),
									item.status === "FAILED" && onRetryEmail && /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: (e) => {
											e.stopPropagation();
											onRetryEmail(item);
										},
										className: "inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 hover:underline",
										children: [/* @__PURE__ */ (void 0)(RotateCcw, { className: "size-3" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 564,
											columnNumber: 27
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Retry Send" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 565,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 556,
										columnNumber: 25
									}, this),
									isConfirmed && /* @__PURE__ */ (void 0)("span", {
										className: "inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700",
										children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-emerald-600" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 571,
											columnNumber: 27
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Forwarder Confirmed • Space Secured" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 572,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 570,
										columnNumber: 25
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 540,
								columnNumber: 21
							}, this), isConfirmed && movementRef && /* @__PURE__ */ (void 0)("span", {
								className: "text-[10px] font-mono font-bold text-emerald-600 bg-white px-1.5 py-0.5 rounded border border-emerald-200",
								children: movementRef
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 578,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 534,
							columnNumber: 19
						}, this)
					]
				}, item.id, true, {
					fileName: _jsxFileName$4,
					lineNumber: 435,
					columnNumber: 15
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 348,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 254,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/nashmia/emails/EmailPreviewPanel.tsx";
function EmailPreviewPanel({ email, allEmails = [], isLoading = false, onSelectEmail, onRetry, onOpenDraftModal, isRetrying = false }) {
	const { user, profile } = useAuth();
	const queryClient = useQueryClient();
	const [isStarred, setIsStarred] = (0, import_react.useState)(false);
	const [quickReplyText, setQuickReplyText] = (0, import_react.useState)("");
	const [isSendingQuickReply, setIsSendingQuickReply] = (0, import_react.useState)(false);
	const [isSystemDetailsOpen, setIsSystemDetailsOpen] = (0, import_react.useState)(false);
	const [isDrawerOpen, setIsDrawerOpen] = (0, import_react.useState)(false);
	const [isDetecting, setIsDetecting] = (0, import_react.useState)(false);
	const [isConfirmingMovement, setIsConfirmingMovement] = (0, import_react.useState)(false);
	const [step5Result, setStep5Result] = (0, import_react.useState)(null);
	const [localConfirmation, setLocalConfirmation] = (0, import_react.useState)(null);
	const threadMessages = (0, import_react.useMemo)(() => {
		if (!email) return [];
		if (allEmails.length === 0) return [email];
		const matchThreadId = email.gmailThreadId;
		const matchBookingId = email.bookingId;
		const matchMovementNumber = email.movementNumber;
		const matchBookingRef = email.bookingReference;
		return allEmails.filter((item) => {
			if (item.id === email.id) return true;
			if (matchThreadId && item.gmailThreadId && item.gmailThreadId === matchThreadId) return true;
			if (matchBookingId && item.bookingId && item.bookingId === matchBookingId) return true;
			if (matchMovementNumber && (item.movementNumber === matchMovementNumber || item.bookingReference === matchMovementNumber)) return true;
			if (matchBookingRef && (item.bookingReference === matchBookingRef || item.movementNumber === matchBookingRef)) return true;
			return false;
		}).sort((a, b) => {
			return new Date(a.sentAt || a.createdAt).getTime() - new Date(b.sentAt || b.createdAt).getTime();
		});
	}, [allEmails, email]);
	const currentIndex = (0, import_react.useMemo)(() => {
		if (!email || allEmails.length === 0) return 0;
		const idx = allEmails.findIndex((e) => e.id === email.id);
		return idx >= 0 ? idx : 0;
	}, [allEmails, email]);
	const extractedQuote = email ? extractQuotationFieldsDeterministic(email.subject || "", email.body || email.snippet || "") : null;
	const totalCount = allEmails.length > 0 ? allEmails.length : 1;
	const handlePrev = () => {
		if (currentIndex > 0 && onSelectEmail) onSelectEmail(allEmails[currentIndex - 1]);
	};
	const handleNext = () => {
		if (currentIndex < allEmails.length - 1 && onSelectEmail) onSelectEmail(allEmails[currentIndex + 1]);
	};
	if (!email) {
		if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPreviewSkeleton, {}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 153,
			columnNumber: 14
		}, this);
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "hidden lg:flex flex-1 items-center justify-center bg-white rounded-2xl border border-slate-200/80 p-12 text-center shadow-xs",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-xs space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "size-14 rounded-full bg-slate-50 text-slate-400 grid place-items-center mx-auto ring-1 ring-slate-100",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-6" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 160,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 159,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-base font-bold text-slate-900",
						children: "Select an email to read"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 162,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-slate-400 leading-relaxed",
						children: "Choose any conversation from the list to view its contents, attachments, and activity history."
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 163,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 158,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 157,
			columnNumber: 7
		}, this);
	}
	const senderName = email.direction === "outbound" ? email.toName || email.forwarderName || "Recipient" : email.fromName || email.forwarderName || (email.fromEmail ? email.fromEmail.split("@")[0].replace(/[._-]/g, " ") : "Freight Forwarder");
	const senderEmail = email.direction === "outbound" ? email.toEmail : email.fromEmail || "operations@forwarder.com";
	getSenderAvatar(senderName, senderEmail);
	const currentUserInitial = ((profile?.full_name || profile?.name || user?.email?.split("@")[0] || "You")[0] || "Y").toUpperCase();
	const formattedTime = formatCardTimestamp(email.sentAt || email.createdAt);
	const hasQuotationOffer = Boolean(extractedQuote && (extractedQuote.oceanFreight !== null && extractedQuote.oceanFreight > 0 || extractedQuote.totalAmount !== null && extractedQuote.totalAmount > 0));
	const attachments = email.attachments && email.attachments.length > 0 ? email.attachments : [];
	const activeConfStatus = localConfirmation?.status || email.confirmationStatus || "NEEDS_REVIEW";
	const activeConfidence = localConfirmation ? localConfirmation.confidence : email.confirmationConfidence ?? .9;
	const activeReason = localConfirmation?.reason || email.confirmationReason || "Classification evaluated based on email body patterns.";
	const activeDetectedBy = localConfirmation?.detectedBy || email.confirmationDetectedBy || "DETERMINISTIC";
	const cond1ValidBooking = Boolean(email.bookingId || email.bookingReference || email.movementNumber);
	const cond2ExactMatch = email.matchStatus === "MATCHED" || email.matchStatus === "NEEDS_REVIEW" || Boolean(email.movementNumber);
	const cond3ForwarderValid = Boolean(email.forwarderId || email.forwarderName);
	const cond4GenuineReply = email.direction === "inbound";
	const allStep5ConditionsMet = cond1ValidBooking && cond2ExactMatch && cond3ForwarderValid && cond4GenuineReply && activeConfStatus === "CONFIRMED" && true;
	const isMovementAlreadyAutoConfirmed = step5Result?.actionTaken === "AUTO_CONFIRMED" || step5Result?.actionTaken === "SKIPPED_IDEMPOTENT" || allStep5ConditionsMet && email.matchStatus === "MATCHED" && activeConfStatus === "CONFIRMED";
	const movementRef = email.movementNumber || email.bookingReference || `${email.subject} ${email.body} ${email.snippet || ""}`.match(/\b(MOV-\d{4}-\d{3,6}|BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|NASH-[A-Z0-9-]+)\b/i)?.[0];
	const detResult = classifyConfirmationDeterministic(email.subject || "", email.body || email.snippet || "", email.snippet);
	const isLinkedBookingConfirmed = Boolean(movementRef && getLocalBookings().some((b) => {
		const refUpper = movementRef.trim().toUpperCase();
		const s = (b.status || "").toUpperCase();
		const c = (b.confirmation_status || "").toUpperCase();
		if (!(s.includes("CONFIRM") || c === "CONFIRMED" || s === "LOADED" || s === "IN TRANSIT")) return false;
		return b.booking_reference?.trim().toUpperCase() === refUpper || b.movement_number?.trim().toUpperCase() === refUpper || b.reference?.trim().toUpperCase() === refUpper || b.id?.trim().toUpperCase() === refUpper;
	}));
	const textLower = `${email.subject} ${email.body} ${email.snippet || ""}`.toLowerCase();
	const hasConfirmKeyword = textLower.includes("booking confirmed") || textLower.includes("space confirmed") || textLower.includes("booking is confirmed") || textLower.includes("space is confirmed") || textLower.includes("booking has been confirmed") || textLower.includes("we confirm") || textLower.includes("pleased to confirm") || textLower.includes("happy to confirm") || textLower.includes("allocation confirmed") || textLower.includes("booking approved") || textLower.includes("booking accepted") || textLower.includes("space secured") || textLower.includes("confirmed as booked") || textLower.includes("confirmed for sailing") || textLower.includes("confirmed on vessel") || textLower.includes("confirmed with carrier");
	const isConfirmed = email.confirmationStatus === "CONFIRMED" || email.emailType === "BOOKING_CONFIRMATION" || activeConfStatus === "CONFIRMED" || isMovementAlreadyAutoConfirmed || detResult?.status === "CONFIRMED" || isLinkedBookingConfirmed || hasConfirmKeyword;
	const handleExecuteStep5Confirmation = async () => {
		setIsConfirmingMovement(true);
		try {
			const movementRef = email.movementNumber || email.bookingReference;
			const result = await (await fetch("/api/movements/auto-confirm", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					bookingId: email.bookingId,
					movementNumber: movementRef,
					forwarderId: email.forwarderId,
					forwarderName: email.forwarderName,
					emailMessageId: email.id,
					gmailMessageId: email.gmailMessageId,
					gmailThreadId: email.gmailThreadId,
					senderEmail: email.fromEmail,
					senderName: email.fromName,
					direction: email.direction || "inbound",
					matchStatus: email.matchStatus || "MATCHED",
					matchedBy: email.matchedBy || "MOVEMENT_NUMBER",
					isForwarderValidated: Boolean(email.forwarderId || email.forwarderName),
					confirmationStatus: activeConfStatus,
					confidence: activeConfidence,
					reason: activeReason,
					detectedBy: activeDetectedBy
				})
			})).json();
			if (result) {
				setStep5Result(result);
				const targetRef = email.movementNumber || email.bookingReference || result.movementNumber;
				const targetId = email.bookingId || result.bookingId || targetRef;
				if (targetId) updateLocalBooking(targetId, {
					status: "Booking Confirmed",
					confirmation_status: "CONFIRMED",
					confirmed_at: (/* @__PURE__ */ new Date()).toISOString(),
					confirmed_by: email.forwarderName || "Forwarder Confirmation Engine",
					confirmation_email_id: email.id
				});
				if (targetRef && targetRef !== targetId) updateLocalBooking(targetRef, {
					status: "Booking Confirmed",
					confirmation_status: "CONFIRMED",
					confirmed_at: (/* @__PURE__ */ new Date()).toISOString(),
					confirmed_by: email.forwarderName || "Forwarder Confirmation Engine",
					confirmation_email_id: email.id
				});
				if (typeof window !== "undefined") {
					window.dispatchEvent(new CustomEvent("nashmia_booking_confirmed", { detail: {
						bookingId: targetId,
						movementNumber: targetRef,
						bookingReference: targetRef,
						status: "Booking Confirmed",
						confirmedBy: email.forwarderName || "Forwarder"
					} }));
					window.dispatchEvent(new CustomEvent("nashmia_booking_status_updated", { detail: {
						bookingId: targetId,
						movementNumber: targetRef,
						bookingReference: targetRef,
						status: "Booking Confirmed"
					} }));
					window.dispatchEvent(new CustomEvent("supabase_realtime_bookings_change", { detail: {
						updated: true,
						movementNumber: targetRef
					} }));
					window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: {
						updated: true,
						movementNumber: targetRef
					} }));
				}
				queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
				queryClient.invalidateQueries({ queryKey: ["bookings"] });
				queryClient.invalidateQueries({ queryKey: ["movements"] });
				toast.success(targetRef ? `Movement ${targetRef} auto-confirmed!` : "Booking confirmation step updated");
			}
		} catch {
			toast.error("Step 5 execution failed");
		} finally {
			setIsConfirmingMovement(false);
		}
	};
	const handleSendQuickReply = async () => {
		if (!quickReplyText.trim()) return;
		setIsSendingQuickReply(true);
		try {
			const data = await (await fetch("/api/emails/send", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					to: senderEmail,
					subject: email.subject.startsWith("Re:") ? email.subject : `Re: ${email.subject}`,
					body: quickReplyText,
					threadId: email.gmailThreadId
				})
			})).json();
			if (data.success) {
				toast.success("Reply dispatched");
				setQuickReplyText("");
			} else toast.error(data.error || "Failed to send reply");
		} catch {
			toast.error("Network error sending reply");
		} finally {
			setIsSendingQuickReply(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex-1 flex flex-col min-w-0 bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between px-6 py-3.5 border-b border-slate-100",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-1 sm:gap-2 text-slate-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							title: "Delete",
							onClick: () => toast.info("Email moved to trash"),
							className: "p-2 rounded-xl hover:bg-slate-100 hover:text-slate-800 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-4.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 478,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 472,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							title: "Report Spam",
							onClick: () => toast.info("Marked as spam"),
							className: "p-2 rounded-xl hover:bg-slate-100 hover:text-slate-800 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OctagonAlert, { className: "size-4.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 486,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 480,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							title: "Snooze",
							onClick: () => toast.info("Email snoozed"),
							className: "p-2 rounded-xl hover:bg-slate-100 hover:text-slate-800 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-4.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 494,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 488,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							title: "Move to folder",
							onClick: () => toast.info("Choose a folder to move this message"),
							className: "p-2 rounded-xl hover:bg-slate-100 hover:text-slate-800 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FolderInput, { className: "size-4.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 502,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 496,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							title: "Tags",
							onClick: () => toast.info("Tag assigned"),
							className: "p-2 rounded-xl hover:bg-slate-100 hover:text-slate-800 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, { className: "size-4.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 510,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 504,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							title: "More Options",
							className: "p-2 rounded-xl hover:bg-slate-100 hover:text-slate-800 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EllipsisVertical, { className: "size-4.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 517,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 512,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 471,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3 text-xs font-medium text-slate-400",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
						currentIndex + 1,
						" of ",
						totalCount
					] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 523,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: handlePrev,
							disabled: currentIndex <= 0,
							title: "Previous email",
							className: "p-1 rounded hover:bg-slate-100 text-slate-600 disabled:opacity-30 disabled:hover:bg-transparent",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 534,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 527,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: handleNext,
							disabled: currentIndex >= totalCount - 1,
							title: "Next email",
							className: "p-1 rounded hover:bg-slate-100 text-slate-600 disabled:opacity-30 disabled:hover:bg-transparent",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 543,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 536,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 526,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 522,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 469,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between px-6 pt-5 pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "size-11 rounded-full grid place-items-center bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs tracking-wider shadow-2xs shrink-0",
						children: senderName.split(" ").map((n) => n[0]).filter(Boolean).slice(0, 2).join("").toUpperCase() || "EM"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 552,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-[16px] font-bold text-slate-900 leading-tight",
						children: senderName
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 562,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-slate-400 font-normal mt-0.5",
						children: [
							"<",
							senderEmail,
							">"
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 563,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 561,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 551,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs text-slate-400 font-medium whitespace-nowrap mr-1",
							children: formattedTime
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 569,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onOpenDraftModal?.(email),
							title: "Reply",
							className: "p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reply, { className: "size-4.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 578,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 572,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setIsStarred((v) => !v),
							title: "Star message",
							className: "p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-amber-500 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: cn("size-4.5", isStarred && "fill-amber-400 text-amber-400 stroke-amber-400") }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 586,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 580,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							title: "More message actions",
							className: "p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EllipsisVertical, { className: "size-4.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 598,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 593,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 568,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 550,
				columnNumber: 7
			}, this),
			hasQuotationOffer && /* @__PURE__ */ (void 0)("div", {
				className: "mx-6 mt-3 p-4 rounded-xl bg-gradient-to-r from-sky-50 via-teal-50/50 to-emerald-50/40 border border-[#0FA3B1]/40 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-start gap-3 min-w-0",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "size-10 rounded-xl bg-[#0FA3B1] text-white flex items-center justify-center shrink-0 shadow-xs font-bold font-mono",
						children: /* @__PURE__ */ (void 0)(DollarSign, { className: "size-5 stroke-[2.5]" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 608,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 607,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (void 0)("span", {
									className: "text-sm font-bold text-slate-900",
									children: "Freight Quotation Offer Received"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 612,
									columnNumber: 17
								}, this),
								movementRef && /* @__PURE__ */ (void 0)("span", {
									className: "inline-flex items-center px-2 py-0.5 rounded-md bg-white border border-[#0FA3B1]/30 text-[#0FA3B1] text-xs font-mono font-bold shadow-2xs",
									children: movementRef
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 616,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("span", {
									className: "inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-300",
									children: "Offer Received"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 620,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 611,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600 mt-1 font-medium",
							children: [
								extractedQuote?.oceanFreight !== null && /* @__PURE__ */ (void 0)("span", { children: [
									"Rate:",
									" ",
									/* @__PURE__ */ (void 0)("strong", {
										className: "text-slate-900 font-mono text-sm",
										children: [
											"$",
											extractedQuote?.oceanFreight?.toLocaleString(),
											" ",
											extractedQuote?.currency || "USD"
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 628,
										columnNumber: 21
									}, this),
									" ",
									"/ cntr"
								] }, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 626,
									columnNumber: 19
								}, this),
								extractedQuote?.totalAmount !== null && /* @__PURE__ */ (void 0)("span", { children: [
									"Total:",
									" ",
									/* @__PURE__ */ (void 0)("strong", {
										className: "text-slate-900 font-mono text-sm",
										children: [
											"$",
											extractedQuote?.totalAmount?.toLocaleString(),
											" ",
											extractedQuote?.currency || "USD"
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 638,
										columnNumber: 21
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 636,
									columnNumber: 19
								}, this),
								extractedQuote?.sailingDate && /* @__PURE__ */ (void 0)("span", { children: ["ETD: ", /* @__PURE__ */ (void 0)("strong", {
									className: "text-slate-800",
									children: extractedQuote.sailingDate
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 646,
									columnNumber: 26
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 645,
									columnNumber: 19
								}, this),
								extractedQuote?.freeDays !== null && extractedQuote?.freeDays !== void 0 && /* @__PURE__ */ (void 0)("span", { children: [extractedQuote.freeDays, "d Free"] }, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 650,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 624,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 610,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 606,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "flex items-center gap-2 self-end sm:self-center shrink-0",
					children: movementRef && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => setIsDrawerOpen(true),
						className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0FA3B1] hover:bg-[#0D919E] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer",
						children: [/* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 663,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", { children: "View Movement" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 664,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 658,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 656,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 605,
				columnNumber: 9
			}, this),
			isConfirmed && /* @__PURE__ */ (void 0)("div", {
				className: "mx-6 mt-3 p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-emerald-50/70 to-teal-50/50 border border-emerald-300 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-start gap-3 min-w-0",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "size-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs",
						children: /* @__PURE__ */ (void 0)(CircleCheck, { className: "size-5 stroke-[2.5]" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 676,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 675,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (void 0)("span", {
									className: "text-sm font-bold text-emerald-950",
									children: "Booking Confirmed by Forwarder"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 680,
									columnNumber: 17
								}, this),
								movementRef && /* @__PURE__ */ (void 0)("span", {
									className: "inline-flex items-center px-2 py-0.5 rounded-md bg-white border border-emerald-300 text-emerald-800 text-xs font-mono font-bold shadow-2xs",
									children: movementRef
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 684,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("span", {
									className: "inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 text-[11px] font-semibold border border-emerald-200",
									children: "Space Secured"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 688,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 679,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-emerald-800 mt-0.5 leading-normal",
							children: email.forwarderName ? `${email.forwarderName} has confirmed space and vessel allocation.` : "The forwarder has confirmed this booking and secured cargo space."
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 692,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 678,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 674,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "flex items-center gap-2 self-end sm:self-center shrink-0",
					children: movementRef && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => setIsDrawerOpen(true),
						className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors",
						children: [/* @__PURE__ */ (void 0)(ShieldCheck, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 707,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", { children: "View Movement" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 708,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 702,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 700,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 673,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "px-6 py-2",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-[20px] font-bold text-slate-900 tracking-tight leading-snug flex items-center flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: email.subject }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 718,
						columnNumber: 11
					}, this), isConfirmed && movementRef && /* @__PURE__ */ (void 0)("span", {
						className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold",
						children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3 text-emerald-600" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 721,
							columnNumber: 15
						}, this), movementRef]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 720,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 717,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 716,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex-1 overflow-y-auto px-6 py-3 space-y-6 scrollbar-thin scrollbar-thumb-slate-200",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-[14px] text-slate-700 leading-relaxed font-normal whitespace-pre-wrap space-y-4",
						children: email.body || email.snippet || "(No message body content provided)"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 731,
						columnNumber: 9
					}, this),
					attachments.length > 0 && /* @__PURE__ */ (void 0)("div", {
						className: "pt-3 border-t border-slate-100",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between mb-3",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-sm font-bold text-slate-900 flex items-center gap-2",
								children: [/* @__PURE__ */ (void 0)(Paperclip, { className: "size-4 text-blue-600 stroke-[2.5]" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 740,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", { children: [attachments.length, " Attachments"] }, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 741,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 739,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => {
									attachments.forEach((att) => {
										const filename = att.filename || att.name || "attachment";
										if (att.data) try {
											const cleanBase64 = att.data.replace(/-/g, "+").replace(/_/g, "/");
											const binary = atob(cleanBase64);
											const bytes = new Uint8Array(binary.length);
											for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
											const blob = new Blob([bytes], { type: att.mimeType || "application/octet-stream" });
											const blobUrl = URL.createObjectURL(blob);
											const a = document.createElement("a");
											a.href = blobUrl;
											a.download = filename;
											document.body.appendChild(a);
											a.click();
											document.body.removeChild(a);
											URL.revokeObjectURL(blobUrl);
											return;
										} catch {}
										if (att.url && att.url !== "#") {
											const a = document.createElement("a");
											a.href = att.url;
											a.download = filename;
											a.target = "_blank";
											a.rel = "noopener noreferrer";
											document.body.appendChild(a);
											a.click();
											document.body.removeChild(a);
											return;
										}
										const msgId = att.gmailMessageId || email.gmailMessageId;
										if (att.attachmentId && msgId) {
											const downloadEndpoint = `/api/gmail/attachment?messageId=${encodeURIComponent(msgId)}&attachmentId=${encodeURIComponent(att.attachmentId)}&filename=${encodeURIComponent(filename)}&mimeType=${encodeURIComponent(att.mimeType || "application/octet-stream")}`;
											const a = document.createElement("a");
											a.href = downloadEndpoint;
											a.download = filename;
											a.target = "_blank";
											a.rel = "noopener noreferrer";
											document.body.appendChild(a);
											a.click();
											document.body.removeChild(a);
										}
									});
									toast.success(`Downloading ${attachments.length} attachment(s)...`);
								},
								className: "text-xs font-semibold text-blue-600 hover:underline cursor-pointer",
								children: "Download All"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 743,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 738,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
							children: attachments.map((att, idx) => /* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-100/70 transition-colors",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-3 min-w-0",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "size-9 rounded-lg bg-white border border-slate-200 grid place-items-center shrink-0",
										children: /* @__PURE__ */ (void 0)(FileText, { className: "size-4 text-blue-600" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 812,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 811,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "text-xs font-bold text-slate-800 truncate",
											children: att.name
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 815,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-[11px] text-slate-400",
											children: att.size
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 816,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 814,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 810,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => {
										const filename = att.filename || att.name || "attachment";
										if (att.data) try {
											const cleanBase64 = att.data.replace(/-/g, "+").replace(/_/g, "/");
											const binary = atob(cleanBase64);
											const bytes = new Uint8Array(binary.length);
											for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
											const blob = new Blob([bytes], { type: att.mimeType || "application/octet-stream" });
											const blobUrl = URL.createObjectURL(blob);
											const a = document.createElement("a");
											a.href = blobUrl;
											a.download = filename;
											document.body.appendChild(a);
											a.click();
											document.body.removeChild(a);
											URL.revokeObjectURL(blobUrl);
											toast.success(`Downloaded ${filename}`);
											return;
										} catch {}
										if (att.url && att.url !== "#") {
											const a = document.createElement("a");
											a.href = att.url;
											a.download = filename;
											a.target = "_blank";
											a.rel = "noopener noreferrer";
											document.body.appendChild(a);
											a.click();
											document.body.removeChild(a);
											toast.success(`Downloading ${filename}...`);
											return;
										}
										const msgId = att.gmailMessageId || email.gmailMessageId;
										if (att.attachmentId && msgId) {
											const downloadEndpoint = `/api/gmail/attachment?messageId=${encodeURIComponent(msgId)}&attachmentId=${encodeURIComponent(att.attachmentId)}&filename=${encodeURIComponent(filename)}&mimeType=${encodeURIComponent(att.mimeType || "application/octet-stream")}`;
											const a = document.createElement("a");
											a.href = downloadEndpoint;
											a.download = filename;
											a.target = "_blank";
											a.rel = "noopener noreferrer";
											document.body.appendChild(a);
											a.click();
											document.body.removeChild(a);
											toast.success(`Downloading ${filename}...`);
											return;
										}
										toast.info(`Attachment "${filename}" is being synchronized from Gmail.`);
									},
									title: `Download ${att.name}`,
									className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-white transition-colors cursor-pointer",
									children: /* @__PURE__ */ (void 0)(Download, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 879,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 819,
									columnNumber: 19
								}, this)]
							}, idx, true, {
								fileName: _jsxFileName$3,
								lineNumber: 806,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 804,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 737,
						columnNumber: 11
					}, this),
					(email.bookingReference || email.direction === "inbound" || email.status === "FAILED") && /* @__PURE__ */ (void 0)("div", {
						className: "pt-2",
						children: [/* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => setIsSystemDetailsOpen((v) => !v),
							className: "w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 hover:bg-slate-100/70 transition-colors",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (void 0)(ShieldCheck, { className: "size-4 text-blue-600" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 896,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("span", { children: [
										"Booking Intelligence & Lifecycle",
										" ",
										email.bookingReference ? `(#${email.bookingReference})` : ""
									] }, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 897,
										columnNumber: 17
									}, this),
									isMovementAlreadyAutoConfirmed && /* @__PURE__ */ (void 0)("span", {
										className: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700",
										children: "Confirmed ✓"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 902,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 895,
								columnNumber: 15
							}, this), isSystemDetailsOpen ? /* @__PURE__ */ (void 0)(ChevronUp, { className: "size-4 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 908,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (void 0)(ChevronDown, { className: "size-4 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 910,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 890,
							columnNumber: 13
						}, this), isSystemDetailsOpen && /* @__PURE__ */ (void 0)("div", {
							className: "mt-2 p-4 rounded-xl bg-white border border-slate-200 space-y-3 animate-in fade-in duration-150 text-xs",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "font-bold text-slate-800",
										children: ["Movement Validation: ", activeConfStatus]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 918,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setIsDrawerOpen(true),
											className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold",
											children: [/* @__PURE__ */ (void 0)(FileCheckCorner, { className: "size-3.5 text-blue-600" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 927,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: "View Lifecycle Drawer" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 928,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 922,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											disabled: isConfirmingMovement,
											onClick: handleExecuteStep5Confirmation,
											className: "inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-xs",
											children: [/* @__PURE__ */ (void 0)(RefreshCw, { className: cn("size-3", isConfirmingMovement && "animate-spin") }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 936,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: "Auto-Confirm Movement" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 937,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 930,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 921,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 917,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "text-slate-600 text-xs leading-relaxed",
									children: activeReason
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 942,
									columnNumber: 17
								}, this),
								threadMessages.length > 1 && /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2 pt-2 border-t border-slate-100",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "font-bold text-slate-800 block",
										children: [
											"Conversation Thread (",
											threadMessages.length,
											" messages)"
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 947,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5",
										children: threadMessages.map((msg, i) => /* @__PURE__ */ (void 0)("div", {
											onClick: () => onSelectEmail?.(msg),
											className: cn("p-2.5 rounded-lg border text-xs cursor-pointer flex items-center justify-between", msg.id === email.id ? "bg-blue-50/70 border-blue-200 font-semibold text-blue-900" : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"),
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "truncate",
												children: [
													i + 1,
													". ",
													msg.fromName || msg.fromEmail,
													" — ",
													msg.subject
												]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 962,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] text-slate-400 whitespace-nowrap ml-2",
												children: formatCardTimestamp(msg.sentAt || msg.createdAt)
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 965,
												columnNumber: 27
											}, this)]
										}, msg.id, true, {
											fileName: _jsxFileName$3,
											lineNumber: 952,
											columnNumber: 25
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 950,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 946,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 915,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 889,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 729,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-4 px-6 border-t border-slate-100 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3 bg-slate-50 rounded-2xl border border-slate-200/80 px-4 py-2.5 focus-within:bg-white focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-8 rounded-full grid place-items-center bg-[#0FA3B1] text-white font-bold text-xs tracking-wider shadow-2xs shrink-0",
							children: currentUserInitial
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 982,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							type: "text",
							value: quickReplyText,
							onChange: (e) => setQuickReplyText(e.target.value),
							onKeyDown: (e) => e.key === "Enter" && handleSendQuickReply(),
							placeholder: `Reply to ${senderName}...`,
							className: "flex-1 bg-transparent text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 985,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: handleSendQuickReply,
							disabled: isSendingQuickReply || !quickReplyText.trim(),
							className: "size-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white grid place-items-center transition-colors shadow-xs disabled:opacity-40 disabled:hover:bg-blue-600 cursor-pointer shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 999,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 993,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 981,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 980,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MovementLifecycleDrawer, {
				isOpen: isDrawerOpen,
				onClose: () => setIsDrawerOpen(false),
				bookingId: email.bookingId,
				initialReference: email.movementNumber || email.bookingReference
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 1005,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 467,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/nashmia/emails/GmailConnectionBanner.tsx";
function GmailConnectionBanner({ onRefreshEmails, className }) {
	const { isConnected, isConnecting, googleEmail, displayName, avatarUrl, lastSyncAt, connect, disconnect, syncInboxToApp } = useGmail();
	const [isSyncing, setIsSyncing] = (0, import_react.useState)(false);
	const [isDisconnecting, setIsDisconnecting] = (0, import_react.useState)(false);
	const handleConnect = async () => {
		if (await connect() && onRefreshEmails) onRefreshEmails();
	};
	const handleSync = async () => {
		setIsSyncing(true);
		try {
			const result = await syncInboxToApp();
			toast.success("Inbox Synced", { description: `Retrieved latest emails from Gmail. ${result.imported} new messages recorded.` });
			if (onRefreshEmails) onRefreshEmails();
		} catch (err) {
			toast.error("Sync Failed", { description: err instanceof Error ? err.message : "Failed to sync Gmail inbox" });
		} finally {
			setIsSyncing(false);
		}
	};
	const handleDisconnect = async () => {
		if (isDisconnecting) return;
		setIsDisconnecting(true);
		try {
			await disconnect();
			if (onRefreshEmails) onRefreshEmails();
		} catch (err) {
			toast.error("Disconnect Failed", { description: err instanceof Error ? err.message : "Failed to disconnect Gmail" });
		} finally {
			setIsDisconnecting(false);
		}
	};
	if (isConnected) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		id: "gmail-connected-banner",
		className: cn("rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs transition-all hover:border-slate-300", className),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-start sm:items-center gap-3.5 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid size-11 place-items-center rounded-full bg-gradient-to-br from-[#0FA3B1] to-[#0b7a85] text-white font-bold text-base shadow-2xs",
						children: (displayName?.[0] || googleEmail?.[0] || "G").toUpperCase()
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 90,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "absolute -bottom-0.5 -right-0.5 size-4 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center shadow-2xs",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-2.5 text-white" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 94,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 93,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 89,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "min-w-0 space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14.5px] font-bold text-slate-900 tracking-tight truncate",
								children: displayName || "Connected Account"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 100,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-emerald-500 animate-pulse" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 104,
									columnNumber: 19
								}, this), "Live Sync Active"]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 103,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded-md px-2 py-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-3 text-emerald-600" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 108,
									columnNumber: 19
								}, this), "Google Verified"]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 107,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 99,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 text-xs text-slate-600 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-mono text-slate-700 font-medium",
							children: googleEmail
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 114,
							columnNumber: 17
						}, this), lastSyncAt && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("span", {
							className: "text-slate-300",
							children: "•"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 117,
							columnNumber: 21
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "text-slate-500 text-[11.5px]",
							children: [
								"Last synced:",
								" ",
								/* @__PURE__ */ (void 0)("span", {
									className: "font-medium text-slate-700",
									children: new Date(lastSyncAt).toLocaleTimeString([], {
										hour: "2-digit",
										minute: "2-digit"
									})
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 120,
									columnNumber: 23
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 118,
							columnNumber: 21
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 116,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 113,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 98,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 88,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2 self-start lg:self-center shrink-0 flex-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleSync,
						disabled: isSyncing,
						className: "inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 hover:border-slate-300 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: cn("size-3.5 text-slate-600", isSyncing && "animate-spin text-[#0FA3B1]") }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 141,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: isSyncing ? "Syncing..." : "Sync Gmail" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 147,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 135,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "https://mail.google.com",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 hover:text-slate-900 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5 text-slate-400" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 156,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "hidden sm:inline",
							children: "Open Mailbox"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 157,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 150,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleDisconnect,
						disabled: isDisconnecting,
						className: "inline-flex items-center gap-1.5 rounded-xl border border-rose-200 bg-white px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50/70 hover:border-rose-300 transition-all disabled:opacity-50 cursor-pointer",
						title: "Disconnect Gmail Account",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: cn("size-3.5", isDisconnecting && "animate-spin") }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 167,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: isDisconnecting ? "Disconnecting..." : "Disconnect" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 168,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 160,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 134,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 86,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 79,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		id: "gmail-connect-promo-banner",
		className: cn("rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all hover:border-slate-300", className),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col lg:flex-row lg:items-center justify-between gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid size-12 shrink-0 place-items-center rounded-2xl bg-white border border-slate-200/90 shadow-2xs",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
						version: "1.1",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 48 48",
						className: "size-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
								fill: "#EA4335",
								d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 194,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
								fill: "#4285F4",
								d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 198,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
								fill: "#FBBC05",
								d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 202,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
								fill: "#34A853",
								d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 206,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
								fill: "none",
								d: "M0 0h48v48H0z"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 210,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 188,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 187,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2.5 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-base font-bold text-slate-900 tracking-tight",
								children: "Connect Gmail for Dispatch & Tracking"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 216,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-3 text-blue-600" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 220,
									columnNumber: 17
								}, this), "Google Workspace Verified"]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 219,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 215,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[13px] text-slate-600 max-w-2xl leading-relaxed",
							children: "Dispatch RFQ bookings, send container shipping instructions, and track forwarder quotations directly through your official company Google account."
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 224,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "pt-1 flex items-center gap-2 flex-wrap text-[11.5px] text-slate-500 font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex items-center gap-1 bg-slate-50 border border-slate-200/80 px-2.5 py-0.5 rounded-md text-slate-700",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Zap, { className: "size-3 text-amber-500" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 232,
										columnNumber: 17
									}, this), " Instant RFQ Dispatch"]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 231,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex items-center gap-1 bg-slate-50 border border-slate-200/80 px-2.5 py-0.5 rounded-md text-slate-700",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 235,
										columnNumber: 17
									}, this), " Real-time Quotation Sync"]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 234,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex items-center gap-1 bg-slate-50 border border-slate-200/80 px-2.5 py-0.5 rounded-md text-slate-700",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-3 text-emerald-600" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 238,
										columnNumber: 17
									}, this), " Secure OAuth 2.0"]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 237,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 230,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 214,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 186,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shrink-0 self-start lg:self-center",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: handleConnect,
					disabled: isConnecting,
					className: "inline-flex items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 hover:border-slate-400 active:scale-[0.99] transition-all disabled:opacity-60 cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "size-4 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
							version: "1.1",
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 48 48",
							className: "size-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
									fill: "#EA4335",
									d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 259,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
									fill: "#4285F4",
									d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 263,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
									fill: "#FBBC05",
									d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 267,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
									fill: "#34A853",
									d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 271,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
									fill: "none",
									d: "M0 0h48v48H0z"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 275,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 253,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 252,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: isConnecting ? "Connecting to Google..." : "Connect with Google" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 278,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 246,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 245,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 184,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 177,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/nashmia/emails/EmailsManagementPage.tsx";
function EmailsManagementPage({ onOpenMobileMenu }) {
	const [selectedFolder, setSelectedFolder] = (0, import_react.useState)("all");
	const [activeFolderTag, setActiveFolderTag] = (0, import_react.useState)(null);
	const [selectedEmail, setSelectedEmail] = (0, import_react.useState)(null);
	const [isComposeOpen, setIsComposeOpen] = (0, import_react.useState)(false);
	const [draftToEdit, setDraftToEdit] = (0, import_react.useState)(null);
	const { emails, allEmails, statistics, folderCounts, isLoading, isError, refetch } = useEmails(selectedFolder);
	const retryMutation = useRetryEmail();
	const displayedEmails = (0, import_react.useMemo)(() => {
		if (!activeFolderTag) return emails;
		const tag = activeFolderTag.toLowerCase();
		return emails.filter((e) => {
			return `${e.subject} ${e.body} ${e.snippet || ""} ${e.toName || ""} ${e.fromName || ""}`.toLowerCase().includes(tag);
		});
	}, [emails, activeFolderTag]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined" || allEmails.length === 0) return;
		try {
			const params = new URLSearchParams(window.location.search);
			const paramEmailId = params.get("emailId");
			const paramMovement = params.get("movement");
			const paramThreadId = params.get("threadId");
			if (paramEmailId) {
				const found = allEmails.find((e) => e.id === paramEmailId || e.gmailMessageId === paramEmailId);
				if (found) {
					setSelectedEmail(found);
					return;
				}
			}
			if (paramThreadId) {
				const found = allEmails.find((e) => e.gmailThreadId === paramThreadId);
				if (found) {
					setSelectedEmail(found);
					return;
				}
			}
			if (paramMovement) {
				const found = allEmails.find((e) => e.movementNumber?.toLowerCase() === paramMovement.toLowerCase() || e.bookingReference?.toLowerCase() === paramMovement.toLowerCase());
				if (found) {
					setSelectedEmail(found);
					return;
				}
			}
		} catch {}
	}, [allEmails]);
	(0, import_react.useEffect)(() => {
		if (displayedEmails.length === 0) {
			setSelectedEmail(null);
			return;
		}
		setSelectedEmail((prev) => {
			if (!prev) return displayedEmails[0];
			return displayedEmails.find((e) => e.id === prev.id) || displayedEmails[0];
		});
	}, [displayedEmails]);
	const handleOpenCompose = () => {
		setDraftToEdit(null);
		setIsComposeOpen(true);
	};
	const handleOpenDraft = (draft) => {
		setDraftToEdit(draft);
		setIsComposeOpen(true);
	};
	const handleRetryEmail = (email) => {
		retryMutation.mutate(email);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [onOpenMobileMenu && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: onOpenMobileMenu,
						className: "lg:hidden p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50",
						children: /* @__PURE__ */ (void 0)(Menu, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 133,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 128,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight",
						children: "Emails"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 137,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs sm:text-sm text-slate-500 mt-0.5",
						children: "Manage booking requests, sent emails, drafts and correspondence."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 140,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 136,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 126,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => refetch(),
						disabled: isLoading,
						className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-all shadow-xs shrink-0 disabled:opacity-50",
						title: "Refresh All Emails",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: cn("size-3.5", isLoading && "animate-spin text-blue-600") }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 155,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "hidden sm:inline",
							children: "Refresh"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 156,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 148,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleOpenCompose,
						className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF334B] hover:bg-[#F2243C] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm shadow-red-500/20 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4 text-white stroke-[2.5]" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 164,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Compose Email" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 165,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 159,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 147,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 125,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GmailConnectionBanner, { onRefreshEmails: refetch }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 171,
				columnNumber: 7
			}, this),
			isError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-12 rounded-2xl border border-red-200 bg-red-50 text-center space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "size-8 text-red-600 mx-auto" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 176,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-sm font-bold text-red-900",
						children: "Unable to load emails"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 177,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-red-700 max-w-sm mx-auto",
						children: "Failed to connect to the database. Check your connection or credentials."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 178,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => refetch(),
						className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 186,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Try Again" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 187,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 181,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 175,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col lg:flex-row items-stretch gap-6 min-h-[720px] lg:h-[calc(100vh-190px)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "hidden lg:flex shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailFolderSidebar, {
							selectedFolder,
							onSelectFolder: (f) => {
								setActiveFolderTag(null);
								setSelectedFolder(f);
							},
							folderCounts,
							onOpenCompose: handleOpenCompose,
							activeFolderTag,
							onSelectFolderTag: (tag) => setActiveFolderTag(tag)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 194,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 193,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "lg:hidden w-full flex items-center justify-between p-3 rounded-2xl border border-slate-200 bg-white gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-bold text-slate-700",
							children: "Mailbox:"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 209,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
							value: selectedFolder,
							onChange: (val) => setSelectedFolder(val),
							options: [
								{
									value: "all",
									label: `All Emails (${folderCounts.all})`
								},
								{
									value: "inbox",
									label: `Inbox (${folderCounts.inbox})`
								},
								{
									value: "sent",
									label: `Sent (${folderCounts.sent})`
								},
								{
									value: "drafts",
									label: `Drafts (${folderCounts.drafts})`
								},
								{
									value: "pending",
									label: `Pending (${folderCounts.pending})`
								},
								{
									value: "failed",
									label: `Failed (${folderCounts.failed})`
								},
								{
									value: "booking",
									label: `Booking Emails (${folderCounts.booking})`
								},
								{
									value: "system",
									label: `System Emails (${folderCounts.system})`
								}
							],
							placeholder: "Select Mailbox",
							size: "sm",
							activeColor: "teal",
							className: "flex-1 max-w-xs",
							triggerClassName: "w-full"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 210,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 208,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "w-full lg:w-[380px] xl:w-[420px] shrink-0 h-full flex flex-col",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailListPanel, {
							emails: displayedEmails,
							selectedEmailId: selectedEmail?.id || null,
							onSelectEmail: setSelectedEmail,
							isLoading,
							onOpenComposeDraft: handleOpenDraft,
							onRetryEmail: handleRetryEmail
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 233,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 232,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "w-full lg:flex-1 h-full flex flex-col",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPreviewPanel, {
							email: selectedEmail,
							allEmails,
							isLoading,
							onSelectEmail: setSelectedEmail,
							onRetry: handleRetryEmail,
							onOpenDraftModal: handleOpenDraft,
							isRetrying: retryMutation.isPending
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 245,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 244,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 191,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComposeEmailModal, {
				isOpen: isComposeOpen,
				onClose: () => setIsComposeOpen(false),
				initialDraft: draftToEdit
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 259,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 123,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/emails.tsx?tsr-split=component";
function EmailsRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, { children: ({ onOpenMobileMenu }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailsManagementPage, { onOpenMobileMenu }, void 0, false, {
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
export { EmailsRoute as component };
