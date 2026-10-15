import { o as __toESM } from "../_runtime.mjs";
import { Y as createBookingInSupabase, ct as generateMovementNumber, r as buildTrackingCompositeKey, vt as insertBuyerToSupabase, w as getLocalForwarderRequests, xt as insertSupplierToSupabase, z as saveLocalForwarderRequests } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { l as require_react_dom, u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { $ as Minus, $t as CircleQuestionMark, Bt as Ellipsis, Dt as Folder, En as Anchor, Jt as Compass, Kt as Copy, L as Route, Mt as FileSpreadsheet, N as Send, O as Ship, P as Search, Sn as ArrowLeft, St as Info, V as Receipt, W as Plus, Yt as Clock, an as ChevronRight, cn as Check, ct as MapPin, d as UserCheck, dn as Building2, dt as Lock, et as Minimize2, ft as LoaderCircle, gn as BookmarkCheck, hn as Bookmark, ht as Link2, i as X, it as MessageSquarePlus, jt as FileText, l as User, lt as Mail, nn as CircleAlert, on as ChevronLeft, ot as Menu, pn as Box, qt as Container, rt as MessageSquareQuote, s as Warehouse, sn as ChevronDown, st as Maximize2, tn as CircleCheck, un as Calendar, v as Trash2, w as Sparkles, xn as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { A as sendEmailThroughBackend, N as useAuth, P as showPillToast, c as DialogDescription, d as DialogTitle, i as useRealRateCards, j as useGmail, l as DialogFooter, o as Dialog, r as AppLayout, s as DialogContent, u as DialogHeader, v as useSupabaseRealtime } from "./router-BJg2H47m.mjs";
import { t as LifecycleDropdownSelect } from "./LifecycleDropdownSelect-Dr2RhBr1.mjs";
import { a as useCachedForwarders, i as useCachedBuyers, n as invalidateCachedForwarders, o as useCachedSuppliers, r as invalidateCachedSuppliers, t as invalidateCachedBuyers } from "./entity-cache-C4kyVDy3.mjs";
import { n as EmailSendingProcessModal, t as EMAILS_QUERY_KEY } from "./EmailSendingProcessModal-DxhN1d-h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-booking-D2JFeBvI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var PORTS_OF_LOADING = [
	{
		code: "FXT",
		name: "Felixstowe",
		country: "United Kingdom",
		fullLabel: "Felixstowe (FXT) · UK"
	},
	{
		code: "SOU",
		name: "Southampton",
		country: "United Kingdom",
		fullLabel: "Southampton (SOU) · UK"
	},
	{
		code: "LGP",
		name: "London Gateway",
		country: "United Kingdom",
		fullLabel: "London Gateway (LGP) · UK"
	},
	{
		code: "KHI",
		name: "Karachi Port",
		country: "Pakistan",
		fullLabel: "Karachi (KHI) · PK"
	},
	{
		code: "QCT",
		name: "Port Qasim",
		country: "Pakistan",
		fullLabel: "Port Qasim (QCT) · PK"
	},
	{
		code: "HAM",
		name: "Hamburg",
		country: "Germany",
		fullLabel: "Hamburg (HAM) · DE"
	},
	{
		code: "RTM",
		name: "Rotterdam",
		country: "Netherlands",
		fullLabel: "Rotterdam (RTM) · NL"
	},
	{
		code: "JEA",
		name: "Jebel Ali",
		country: "UAE",
		fullLabel: "Jebel Ali (JEA) · AE"
	}
];
var PORTS_OF_DISCHARGE = [
	{
		code: "KHI",
		name: "Karachi Port",
		country: "Pakistan",
		fullLabel: "Karachi (KHI) · PK"
	},
	{
		code: "QCT",
		name: "Port Qasim",
		country: "Pakistan",
		fullLabel: "Port Qasim (QCT) · PK"
	},
	{
		code: "JEA",
		name: "Jebel Ali",
		country: "UAE",
		fullLabel: "Jebel Ali (JEA) · AE"
	},
	{
		code: "HAM",
		name: "Hamburg",
		country: "Germany",
		fullLabel: "Hamburg (HAM) · DE"
	},
	{
		code: "GOT",
		name: "Gothenburg",
		country: "Sweden",
		fullLabel: "Gothenburg (GOT) · SE"
	},
	{
		code: "FOS",
		name: "Fos-sur-Mer",
		country: "France",
		fullLabel: "Fos-sur-Mer (FOS) · FR"
	},
	{
		code: "LGB",
		name: "Long Beach",
		country: "United States",
		fullLabel: "Long Beach (LGB) · US"
	},
	{
		code: "FXT",
		name: "Felixstowe",
		country: "United Kingdom",
		fullLabel: "Felixstowe (FXT) · UK"
	},
	{
		code: "RTM",
		name: "Rotterdam",
		country: "Netherlands",
		fullLabel: "Rotterdam (RTM) · NL"
	}
];
var SHIPPING_LINES = [
	{
		id: "sl-msc",
		name: "MSC",
		code: "MSCU",
		vesselsActive: 780
	},
	{
		id: "sl-maersk",
		name: "Maersk",
		code: "MAEU",
		vesselsActive: 710
	},
	{
		id: "sl-cmacgm",
		name: "CMA CGM",
		code: "CMDU",
		vesselsActive: 590
	},
	{
		id: "sl-hapag",
		name: "Hapag-Lloyd",
		code: "HLCU",
		vesselsActive: 260
	},
	{
		id: "sl-evergreen",
		name: "Evergreen",
		code: "EGLV",
		vesselsActive: 215
	},
	{
		id: "sl-one",
		name: "ONE",
		code: "ONEY",
		vesselsActive: 220
	},
	{
		id: "sl-cosco",
		name: "Cosco Shipping",
		code: "COSU",
		vesselsActive: 500
	}
];
var RATE_CARDS = [];
function findAgreedRate(agentId, polCode, podCode, size) {
	if (!agentId || !polCode || !podCode || !size) return null;
	return RATE_CARDS.find((rc) => rc.agentId === agentId && rc.polCode === polCode && rc.podCode === podCode && rc.size === size) ?? null;
}
var CONTAINER_SPECS = {
	"20FT": {
		label: "20FT",
		sublabel: "Standard Dry",
		cbm: "33.2 CBM",
		maxPayload: "28,180 kg",
		description: "Best for heavy & dense commodities"
	},
	"40FT": {
		label: "40FT",
		sublabel: "Standard GP",
		cbm: "67.7 CBM",
		maxPayload: "26,700 kg",
		description: "General purpose multi-item cargo"
	},
	"40HC": {
		label: "40HC",
		sublabel: "High Cube",
		cbm: "76.3 CBM",
		maxPayload: "26,500 kg",
		description: "Extra 1ft height for voluminous freight"
	}
};
var PRESET_INSTRUCTIONS = [
	"Please confirm availability before vessel cut-off.",
	"Requires clean, dry, odor-free container inspection at depot.",
	"Direct Bill of Lading required with freight prepaid.",
	"Release BL against surrender of original export docs.",
	"Notify warehouse dispatch 24 hours prior to container positioning."
];
var _jsxFileName$11 = "/app/applet/src/components/nashmia/booking/BookingHeader.tsx";
function BookingHeader({ onBack, onOpenMobileMenu, isSaved = true }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2 text-sm text-slate-500",
				children: [
					onOpenMobileMenu && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: onOpenMobileMenu,
						"aria-label": "Toggle navigation menu",
						className: "mr-1 grid size-8 place-items-center rounded-[10px] border border-slate-200 bg-white text-slate-700 shadow-xs transition-all hover:bg-slate-50 lg:hidden",
						children: /* @__PURE__ */ (void 0)(Menu, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 23,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 17,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						onClick: onBack,
						className: "group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:bg-[#E8F1F3] hover:text-slate-900",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "size-3.5 transition-transform group-hover:-translate-x-0.5" }, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 31,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Back to Movements" }, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 32,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$11,
						lineNumber: 26,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-slate-300",
						children: "/"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 34,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs font-medium text-slate-400",
						children: "Movements"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 35,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-slate-300",
						children: "/"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 36,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs font-semibold text-slate-800",
						children: "New Booking"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 37,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$11,
				lineNumber: 15,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "flex size-2 items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute size-2 animate-ping rounded-full bg-[#6A80A9]/30 opacity-75" }, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 43,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "relative size-1.5 rounded-full bg-[#6A80A9]" }, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 44,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$11,
						lineNumber: 42,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-semibold text-slate-900",
						children: "Draft"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 46,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-slate-300",
						children: "•"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 47,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "flex items-center gap-1 text-slate-500",
						children: isSaved ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3 text-[#6A80A9]" }, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 51,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Auto-saved" }, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 52,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$11,
							lineNumber: 50,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Saving..." }, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 55,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 48,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$11,
				lineNumber: 41,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$11,
			lineNumber: 14,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col justify-between gap-2 sm:flex-row sm:items-end",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl",
						children: "New Booking Request"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 65,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "hidden items-center gap-1 rounded-full border border-[#C7D5BF]/80 bg-[#C7D5BF]/25 px-2.5 py-0.5 text-[11px] font-semibold text-[#2D3C26] sm:inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3 text-[#2D3C26]" }, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 69,
							columnNumber: 15
						}, this), "Automated Lifecycle"]
					}, void 0, true, {
						fileName: _jsxFileName$11,
						lineNumber: 68,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$11,
					lineNumber: 64,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-slate-500 sm:text-base",
					children: "Create a movement and prepare the booking request for your forwarder."
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 73,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$11,
				lineNumber: 63,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$11,
			lineNumber: 62,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$11,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
var _jsxFileName$10 = "/app/applet/src/components/nashmia/booking/BookingProgress.tsx";
var STEPS = [
	{
		number: "01",
		label: "Booking Details",
		id: "parties"
	},
	{
		number: "02",
		label: "Route & Shipping",
		id: "route"
	},
	{
		number: "03",
		label: "Container & Cargo",
		id: "cargo"
	},
	{
		number: "04",
		label: "Review & Rate",
		id: "review"
	}
];
function BookingProgress({ currentStep, onSelectStep }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "w-full min-w-0 max-w-full overflow-x-auto pb-1 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "min-w-[460px] sm:min-w-[580px] rounded-[20px] border border-white/80 bg-white/70 p-3 shadow-[0_8px_30px_rgba(15,23,42,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex items-center justify-between px-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-8 right-8 top-5 h-[2px] -translate-y-1/2 bg-[#E8F1F3]" }, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 22,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute left-8 top-5 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#C7D5BF] via-[#6A80A9] to-[#6A80A9] transition-all duration-500 ease-out",
						style: { width: `calc(${Math.min(currentStep, STEPS.length - 1) / (STEPS.length - 1) * 100}% - 40px)` }
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 25,
						columnNumber: 11
					}, this),
					STEPS.map((step, index) => {
						const isCompleted = index < currentStep;
						const isCurrent = index === currentStep;
						const isUpcoming = index > currentStep;
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onSelectStep?.(index),
							className: "group relative z-10 flex flex-col items-center gap-1.5 focus:outline-none",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: cn("flex size-9 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300", isCompleted && "border-[#C7D5BF] bg-[#C7D5BF] text-[#2D3C26] shadow-[0_2px_8px_rgba(199,213,191,0.4)]", isCurrent && "scale-110 border-[#6A80A9] bg-[#6A80A9] text-white shadow-[0_4px_14px_rgba(106,128,169,0.35)] ring-4 ring-[#6A80A9]/15", isUpcoming && "border-slate-200/80 bg-[#E8F1F3] text-slate-500 group-hover:border-slate-300 group-hover:bg-[#dbe7ea]"),
								children: isCompleted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-4 stroke-[2.5]" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 57,
									columnNumber: 21
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: step.number }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 59,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 45,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: cn("text-xs font-medium tracking-tight transition-colors whitespace-nowrap", isCurrent && "font-semibold text-black", isCompleted && "text-slate-700", isUpcoming && "text-slate-400 group-hover:text-slate-600"),
								children: step.label
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 64,
								columnNumber: 17
							}, this)]
						}, step.number, true, {
							fileName: _jsxFileName$10,
							lineNumber: 38,
							columnNumber: 15
						}, this);
					})
				]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 20,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$10,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$10,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
var _jsxFileName$9 = "/app/applet/src/components/nashmia/booking/BookingPartiesSection.tsx";
function BookingPartiesSection({ selectedBuyer, onSelectBuyer, selectedSupplier, onSelectSupplier, availableBuyers = [], availableSuppliers = [], onQuickCreateBuyer, onQuickCreateSupplier, errors }) {
	const [buyerOpen, setBuyerOpen] = (0, import_react.useState)(false);
	const [buyerSearch, setBuyerSearch] = (0, import_react.useState)("");
	const [supplierOpen, setSupplierOpen] = (0, import_react.useState)(false);
	const [supplierSearch, setSupplierSearch] = (0, import_react.useState)("");
	const [isQuickAddOpen, setIsQuickAddOpen] = (0, import_react.useState)(false);
	const [quickBuyerName, setQuickBuyerName] = (0, import_react.useState)("");
	const [quickCompanyName, setQuickCompanyName] = (0, import_react.useState)("");
	const [quickCountry, setQuickCountry] = (0, import_react.useState)("United Kingdom");
	const [quickContactPerson, setQuickContactPerson] = (0, import_react.useState)("");
	const [quickEmail, setQuickEmail] = (0, import_react.useState)("");
	const [quickPhone, setQuickPhone] = (0, import_react.useState)("");
	const [quickPort, setQuickPort] = (0, import_react.useState)("Karachi (KHI)");
	const [isSavingBuyer, setIsSavingBuyer] = (0, import_react.useState)(false);
	const [isQuickSupplierOpen, setIsQuickSupplierOpen] = (0, import_react.useState)(false);
	const [quickSupplierName, setQuickSupplierName] = (0, import_react.useState)("");
	const [quickLoadPoint, setQuickLoadPoint] = (0, import_react.useState)("");
	const [quickSupplierCity, setQuickSupplierCity] = (0, import_react.useState)("London");
	const [quickSupplierAddress, setQuickSupplierAddress] = (0, import_react.useState)("");
	const [quickSupplierCountry, setQuickSupplierCountry] = (0, import_react.useState)("United Kingdom");
	const [quickSupplierContact, setQuickSupplierContact] = (0, import_react.useState)("");
	const [quickSupplierEmail, setQuickSupplierEmail] = (0, import_react.useState)("");
	const [quickSupplierPhone, setQuickSupplierPhone] = (0, import_react.useState)("");
	const [isSavingSupplier, setIsSavingSupplier] = (0, import_react.useState)(false);
	const buyerRef = (0, import_react.useRef)(null);
	const supplierRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (buyerRef.current && !buyerRef.current.contains(event.target)) setBuyerOpen(false);
			if (supplierRef.current && !supplierRef.current.contains(event.target)) setSupplierOpen(false);
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const buyersList = availableBuyers;
	const suppliersList = availableSuppliers;
	const filteredBuyers = buyersList.filter((b) => b.name.toLowerCase().includes(buyerSearch.toLowerCase()) || b.consignee.toLowerCase().includes(buyerSearch.toLowerCase()) || b.country.toLowerCase().includes(buyerSearch.toLowerCase()) || b.code && b.code.toLowerCase().includes(buyerSearch.toLowerCase()));
	const filteredSuppliers = suppliersList.filter((s) => s.name.toLowerCase().includes(supplierSearch.toLowerCase()) || s.loadPoint.toLowerCase().includes(supplierSearch.toLowerCase()) || s.city.toLowerCase().includes(supplierSearch.toLowerCase()) || s.address && s.address.toLowerCase().includes(supplierSearch.toLowerCase()) || s.country && s.country.toLowerCase().includes(supplierSearch.toLowerCase()));
	const handleQuickAddSubmit = async (e) => {
		e.preventDefault();
		if (!quickBuyerName.trim()) {
			toast.error("Please enter a Buyer name");
			return;
		}
		setIsSavingBuyer(true);
		try {
			const countryCode = quickCountry === "United Kingdom" ? "GB" : quickCountry === "Pakistan" ? "PK" : quickCountry === "United Arab Emirates" ? "AE" : quickCountry === "Germany" ? "DE" : "US";
			const newBuyerData = {
				name: quickBuyerName.trim(),
				company: quickCompanyName.trim() || quickBuyerName.trim(),
				country: quickCountry,
				countryCode,
				contactPerson: quickContactPerson.trim() || "Operations Desk",
				email: quickEmail.trim() || `ops@${quickBuyerName.toLowerCase().replace(/\s+/g, "")}.com`,
				phone: quickPhone.trim() || "+44 20 7946 0000",
				activeMovements: 0,
				deltaThisMonth: "+1 new",
				progressPercent: 0,
				totalMovements: 0,
				deliveredMovements: 0,
				inTransitMovements: 0,
				status: "Active",
				code: `${quickBuyerName.slice(0, 3).toUpperCase()}-${countryCode}`,
				preferredPort: quickPort
			};
			if (onQuickCreateBuyer) {
				const created = await onQuickCreateBuyer(newBuyerData);
				if (created) onSelectBuyer(created);
			} else onSelectBuyer({
				id: `buyer-${Date.now()}`,
				name: newBuyerData.name,
				consignee: newBuyerData.company,
				country: newBuyerData.country,
				code: newBuyerData.code,
				badge: "Consignee",
				status: "Active",
				destinationPort: quickPort
			});
			setIsQuickAddOpen(false);
			setBuyerOpen(false);
			setQuickBuyerName("");
			setQuickCompanyName("");
			setQuickContactPerson("");
			setQuickEmail("");
			setQuickPhone("");
			toast.success(`${quickBuyerName} added & selected`);
		} catch (err) {
			toast.error("Failed to add buyer", { description: err instanceof Error ? err.message : "Database error" });
		} finally {
			setIsSavingBuyer(false);
		}
	};
	const handleQuickAddSupplierSubmit = async (e) => {
		e.preventDefault();
		if (!quickSupplierName.trim()) {
			toast.error("Please enter a Supplier name");
			return;
		}
		setIsSavingSupplier(true);
		try {
			const countryCode = quickSupplierCountry === "United Kingdom" ? "GB" : quickSupplierCountry === "Pakistan" ? "PK" : quickSupplierCountry === "United Arab Emirates" ? "AE" : quickSupplierCountry === "Germany" ? "DE" : "US";
			const loadPointResolved = quickLoadPoint.trim() || `${quickSupplierName.trim()} Hub (${quickSupplierCity})`;
			const addressResolved = quickSupplierAddress.trim() || `Industrial Park, ${quickSupplierCity}, ${quickSupplierCountry}`;
			const newSupplierData = {
				name: quickSupplierName.trim(),
				subtitle: "Pickup Vendor",
				companyName: quickSupplierName.trim(),
				country: quickSupplierCountry,
				countryCode,
				loadPoint: loadPointResolved,
				loadPointCity: quickSupplierCity,
				loadPointType: "Warehouse",
				contactPerson: quickSupplierContact.trim() || "Warehouse Manager",
				contactRole: "Logistics Lead",
				email: quickSupplierEmail.trim() || `warehouse@${quickSupplierName.toLowerCase().replace(/\s+/g, "")}.com`,
				phone: quickSupplierPhone.trim() || "+44 20 7946 0123",
				activeContainers: 0,
				containersDelta: "+1 new",
				totalContainersMoved: 0,
				status: "Active",
				code: `SUP-${quickSupplierName.slice(0, 3).toUpperCase()}`,
				address: addressResolved,
				city: quickSupplierCity
			};
			if (onQuickCreateSupplier) {
				const created = await onQuickCreateSupplier(newSupplierData);
				if (created) onSelectSupplier(created);
			} else onSelectSupplier({
				id: `sup-${Date.now()}`,
				name: newSupplierData.name,
				loadPoint: newSupplierData.loadPoint,
				city: newSupplierData.city,
				address: newSupplierData.address,
				country: newSupplierData.country
			});
			setIsQuickSupplierOpen(false);
			setSupplierOpen(false);
			setQuickSupplierName("");
			setQuickLoadPoint("");
			setQuickSupplierAddress("");
			setQuickSupplierContact("");
			setQuickSupplierEmail("");
			setQuickSupplierPhone("");
			toast.success(`${quickSupplierName} added & selected`);
		} catch (err) {
			toast.error("Failed to add supplier", { description: err instanceof Error ? err.message : "Database error" });
		} finally {
			setIsSavingSupplier(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "section-parties",
		className: "glass-card rounded-[24px] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-6 flex items-start justify-between",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex size-7 items-center justify-center rounded-lg bg-[#6A80A9]/10 text-xs font-bold text-[#6A80A9]",
							children: "01"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 293,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-xl font-bold tracking-tight text-black sm:text-2xl",
							children: "Booking Parties"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 296,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 292,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-slate-500 sm:text-sm",
						children: "Tell us who this movement is for and where the cargo is being collected."
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 300,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 291,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 290,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-2",
					ref: buyerRef,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "text-xs font-semibold uppercase tracking-wider text-slate-700",
							children: ["Account / Buyer ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-rose-500",
								children: "*"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 312,
								columnNumber: 31
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 311,
							columnNumber: 13
						}, this), selectedBuyer && /* @__PURE__ */ (void 0)("span", {
							className: "inline-flex items-center gap-1 rounded-md bg-[#6A80A9]/10 px-2 py-0.5 text-[10px] font-semibold text-[#6A80A9]",
							children: [/* @__PURE__ */ (void 0)(UserCheck, { className: "size-3" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 316,
								columnNumber: 17
							}, this), selectedBuyer.badge || "Consignee"]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 315,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 310,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => {
									setBuyerOpen((prev) => !prev);
									setSupplierOpen(false);
								},
								className: cn("flex w-full items-center justify-between rounded-[16px] border bg-white/80 px-4 py-3.5 text-left text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#6A80A9]/30", buyerOpen ? "border-[#6A80A9] ring-2 ring-[#6A80A9]/20" : "border-slate-200/90", errors?.buyer && !selectedBuyer && "border-rose-400 bg-rose-50/30"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 338,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 337,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: selectedBuyer ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-semibold text-black",
											children: selectedBuyer.name
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 344,
											columnNumber: 25
										}, this), selectedBuyer.code && /* @__PURE__ */ (void 0)("span", {
											className: "rounded bg-slate-100 px-1.5 py-0.2 text-[9px] font-medium text-slate-600",
											children: selectedBuyer.code
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 346,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 343,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11px] text-slate-500",
										children: [
											selectedBuyer.consignee,
											" • ",
											selectedBuyer.country
										]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 351,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 342,
										columnNumber: 21
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400",
										children: "Select buyer..."
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 356,
										columnNumber: 21
									}, this) }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 340,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 336,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: cn("size-4 text-slate-400 transition-transform duration-200", buyerOpen && "rotate-180 text-black") }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 360,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 324,
								columnNumber: 13
							}, this),
							errors?.buyer && !selectedBuyer && /* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-[11px] font-medium text-rose-500",
								children: errors.buyer
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 370,
								columnNumber: 15
							}, this),
							buyerOpen && /* @__PURE__ */ (void 0)("div", {
								className: "glass-card-strong absolute z-30 mt-2 max-h-72 w-full overflow-hidden rounded-[18px] border border-white/90 p-2 shadow-[0_16px_40px_rgba(15,23,42,0.12)] animate-in fade-in zoom-in-95",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "relative mb-2 px-1",
										children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3.5 top-2.5 size-3.5 text-slate-400" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 377,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("input", {
											type: "text",
											value: buyerSearch,
											onChange: (e) => setBuyerSearch(e.target.value),
											placeholder: "Search buyer by name, consignee or country...",
											className: "w-full rounded-xl border border-slate-200/80 bg-white/95 py-2 pl-9 pr-3 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none",
											autoFocus: true
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 378,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 376,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "max-h-48 overflow-y-auto space-y-1 pr-1 scrollbar-thin",
										children: filteredBuyers.length > 0 ? filteredBuyers.map((b) => /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => {
												onSelectBuyer(b);
												setBuyerOpen(false);
												setBuyerSearch("");
											},
											className: cn("flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs transition-colors hover:bg-[#E8F1F3]/80", selectedBuyer?.id === b.id && "bg-[#6A80A9]/10 font-semibold text-[#6A80A9]"),
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "min-w-0 pr-2",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (void 0)("span", {
															className: "font-semibold text-black truncate",
															children: b.name
														}, void 0, false, {
															fileName: _jsxFileName$9,
															lineNumber: 406,
															columnNumber: 29
														}, this),
														b.code && /* @__PURE__ */ (void 0)("span", {
															className: "shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-600",
															children: b.code
														}, void 0, false, {
															fileName: _jsxFileName$9,
															lineNumber: 408,
															columnNumber: 31
														}, this),
														b.id.startsWith("buyer-") && !b.id.includes("buyer-1") && !b.id.includes("buyer-2") && !b.id.includes("buyer-3") && !b.id.includes("buyer-4") && /* @__PURE__ */ (void 0)("span", {
															className: "shrink-0 rounded bg-emerald-50 px-1.5 py-0.2 text-[8px] font-bold text-emerald-700",
															children: "REALTIME"
														}, void 0, false, {
															fileName: _jsxFileName$9,
															lineNumber: 417,
															columnNumber: 33
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$9,
													lineNumber: 405,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-[11px] text-slate-500 block truncate",
													children: [
														b.consignee,
														" • ",
														b.country
													]
												}, void 0, true, {
													fileName: _jsxFileName$9,
													lineNumber: 422,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$9,
												lineNumber: 404,
												columnNumber: 25
											}, this), selectedBuyer?.id === b.id && /* @__PURE__ */ (void 0)(Check, { className: "size-4 shrink-0 text-[#6A80A9]" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 427,
												columnNumber: 27
											}, this)]
										}, b.id, true, {
											fileName: _jsxFileName$9,
											lineNumber: 390,
											columnNumber: 23
										}, this)) : /* @__PURE__ */ (void 0)("div", {
											className: "py-4 text-center text-xs text-slate-400",
											children: [
												"No buyers found for \"",
												buyerSearch,
												"\""
											]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 432,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 387,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "mt-2 border-t border-slate-100 pt-2 px-1",
										children: /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => {
												setIsQuickAddOpen(true);
												setBuyerOpen(false);
											},
											className: "flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#6A80A9]/10 py-2 text-xs font-semibold text-[#6A80A9] transition-colors hover:bg-[#6A80A9]/20",
											children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 448,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("span", { children: "Add New Buyer to Supabase" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 449,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 440,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 439,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 375,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 323,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 309,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-2",
					ref: supplierRef,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "text-xs font-semibold uppercase tracking-wider text-slate-700",
							children: ["Pickup Vendor / Supplier ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-rose-500",
								children: "*"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 461,
								columnNumber: 40
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 460,
							columnNumber: 13
						}, this), selectedSupplier && /* @__PURE__ */ (void 0)("span", {
							className: "inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700",
							children: [/* @__PURE__ */ (void 0)(Warehouse, { className: "size-3" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 465,
								columnNumber: 17
							}, this), "Origin"]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 464,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 459,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => {
									setSupplierOpen((prev) => !prev);
									setBuyerOpen(false);
								},
								className: cn("flex w-full items-center justify-between rounded-[16px] border bg-white/80 px-4 py-3.5 text-left text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#6A80A9]/30", supplierOpen ? "border-[#6A80A9] ring-2 ring-[#6A80A9]/20" : "border-slate-200/90", errors?.supplier && !selectedSupplier && "border-rose-400 bg-rose-50/30"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Warehouse, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 487,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 486,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: selectedSupplier ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-semibold text-black",
											children: selectedSupplier.name
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 493,
											columnNumber: 25
										}, this), selectedSupplier.country && /* @__PURE__ */ (void 0)("span", {
											className: "rounded bg-slate-100 px-1.5 py-0.2 text-[9px] font-medium text-slate-600",
											children: selectedSupplier.country
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 495,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 492,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11px] text-slate-500",
										children: [
											selectedSupplier.city,
											" • ",
											selectedSupplier.loadPoint
										]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 500,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 491,
										columnNumber: 21
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400",
										children: "Select supplier..."
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 505,
										columnNumber: 21
									}, this) }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 489,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 485,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: cn("size-4 text-slate-400 transition-transform duration-200", supplierOpen && "rotate-180 text-black") }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 509,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 473,
								columnNumber: 13
							}, this),
							errors?.supplier && !selectedSupplier && /* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-[11px] font-medium text-rose-500",
								children: errors.supplier
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 519,
								columnNumber: 15
							}, this),
							supplierOpen && /* @__PURE__ */ (void 0)("div", {
								className: "glass-card-strong absolute z-30 mt-2 max-h-72 w-full overflow-hidden rounded-[18px] border border-white/90 p-2 shadow-[0_16px_40px_rgba(15,23,42,0.12)] animate-in fade-in zoom-in-95",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "relative mb-2 px-1",
										children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3.5 top-2.5 size-3.5 text-slate-400" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 526,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("input", {
											type: "text",
											value: supplierSearch,
											onChange: (e) => setSupplierSearch(e.target.value),
											placeholder: "Search supplier, load point or city...",
											className: "w-full rounded-xl border border-slate-200/80 bg-white/95 py-2 pl-9 pr-3 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none",
											autoFocus: true
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 527,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 525,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "max-h-48 overflow-y-auto space-y-1 pr-1 scrollbar-thin",
										children: filteredSuppliers.length > 0 ? filteredSuppliers.map((s) => /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => {
												onSelectSupplier(s);
												setSupplierOpen(false);
												setSupplierSearch("");
											},
											className: cn("flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs transition-colors hover:bg-[#E8F1F3]/80", selectedSupplier?.id === s.id && "bg-[#6A80A9]/10 font-semibold text-[#6A80A9]"),
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "min-w-0 pr-2",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-black truncate",
														children: s.name
													}, void 0, false, {
														fileName: _jsxFileName$9,
														lineNumber: 555,
														columnNumber: 29
													}, this), s.id.startsWith("sup-") && !s.id.includes("sup-1") && !s.id.includes("sup-2") && !s.id.includes("sup-3") && !s.id.includes("sup-4") && /* @__PURE__ */ (void 0)("span", {
														className: "shrink-0 rounded bg-emerald-50 px-1.5 py-0.2 text-[8px] font-bold text-emerald-700",
														children: "REALTIME"
													}, void 0, false, {
														fileName: _jsxFileName$9,
														lineNumber: 561,
														columnNumber: 33
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$9,
													lineNumber: 554,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-[11px] text-slate-500 block truncate",
													children: [
														"Load Point: ",
														s.loadPoint,
														" (",
														s.city,
														")"
													]
												}, void 0, true, {
													fileName: _jsxFileName$9,
													lineNumber: 566,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$9,
												lineNumber: 553,
												columnNumber: 25
											}, this), selectedSupplier?.id === s.id && /* @__PURE__ */ (void 0)(Check, { className: "size-4 shrink-0 text-[#6A80A9]" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 571,
												columnNumber: 27
											}, this)]
										}, s.id, true, {
											fileName: _jsxFileName$9,
											lineNumber: 539,
											columnNumber: 23
										}, this)) : /* @__PURE__ */ (void 0)("div", {
											className: "py-4 text-center text-xs text-slate-400",
											children: [
												"No suppliers found for \"",
												supplierSearch,
												"\""
											]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 576,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 536,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "mt-2 border-t border-slate-100 pt-2 px-1",
										children: /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => {
												setIsQuickSupplierOpen(true);
												setSupplierOpen(false);
											},
											className: "flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#6A80A9]/10 py-2 text-xs font-semibold text-[#6A80A9] transition-colors hover:bg-[#6A80A9]/20",
											children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 592,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("span", { children: "Add New Supplier to Supabase" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 593,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 584,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 583,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 524,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 472,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 458,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 307,
				columnNumber: 7
			}, this),
			selectedSupplier && /* @__PURE__ */ (void 0)("div", {
				className: "mt-6 rounded-[18px] border border-[#C7D5BF]/80 bg-gradient-to-r from-[#C7D5BF]/15 via-white/80 to-[#E8F1F3]/30 p-4.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] animate-in fade-in duration-300",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#C7D5BF]/50 text-[#2D3C26] shadow-sm",
							children: /* @__PURE__ */ (void 0)(MapPin, { className: "size-4.5" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 608,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 607,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "space-y-0.5",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
										children: "Load Point (Origin Depot)"
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 612,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "inline-flex items-center gap-1 rounded-full bg-[#2D3C26]/10 px-2 py-0.5 text-[10px] font-semibold text-[#2D3C26]",
										children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-2.5" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 616,
											columnNumber: 21
										}, this), "Auto-Populated"]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 615,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 611,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "text-base font-bold text-black",
									children: selectedSupplier.loadPoint
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 620,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-slate-600",
									children: selectedSupplier.address
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 621,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 610,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 606,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-1.5 rounded-xl border border-white/80 bg-white/70 px-3 py-2 text-xs text-slate-600 shadow-sm backdrop-blur-sm sm:max-w-[260px]",
						children: [/* @__PURE__ */ (void 0)(Info, { className: "size-4 shrink-0 text-[#6A80A9]" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 626,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "text-[11px] leading-tight",
							children: "Load point automatically populated from supplier directory."
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 627,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 625,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 605,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 604,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: isQuickAddOpen,
				onOpenChange: setIsQuickAddOpen,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "w-full sm:max-w-[480px] max-h-[92vh] overflow-y-auto sm:rounded-[28px] bg-white p-5 sm:p-6 shadow-2xl focus:outline-none [scrollbar-width:thin]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
						className: "flex items-center gap-2 text-lg font-bold text-black",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "size-5 text-[#6A80A9]" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 640,
							columnNumber: 15
						}, this), "Add New Buyer to Supabase"]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 639,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
						className: "text-xs text-slate-500",
						children: "New buyers are saved to Supabase in real-time and automatically available across all booking and directory views."
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 643,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 638,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
						onSubmit: handleQuickAddSubmit,
						className: "space-y-3.5 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "text-xs font-semibold text-slate-700",
								children: "Buyer / Brand Name *"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 651,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								value: quickBuyerName,
								onChange: (e) => setQuickBuyerName(e.target.value),
								placeholder: "e.g. Al-Noor Global Trading",
								required: true,
								className: "mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 652,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 650,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "text-xs font-semibold text-slate-700",
								children: "Consignee Legal Company"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 663,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								value: quickCompanyName,
								onChange: (e) => setQuickCompanyName(e.target.value),
								placeholder: "e.g. Al-Noor Logistics Ltd",
								className: "mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 666,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 662,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
									label: "Country",
									value: quickCountry,
									onChange: (val) => setQuickCountry(val),
									options: [
										"United Kingdom",
										"Pakistan",
										"United Arab Emirates",
										"Germany",
										"Spain",
										"United States"
									],
									placeholder: "Country",
									size: "sm",
									activeColor: "blue",
									triggerClassName: "w-full h-9.5 text-xs mt-1"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 676,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
									label: "Destination Port",
									value: quickPort,
									onChange: (val) => setQuickPort(val),
									options: [
										"Karachi (KHI)",
										"Dubai (DXB)",
										"Hamburg (HAM)",
										"Gothenburg (GOT)",
										"Barcelona (BCN)"
									],
									placeholder: "Destination Port",
									size: "sm",
									activeColor: "blue",
									triggerClassName: "w-full h-9.5 text-xs mt-1"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 694,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 675,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "text-xs font-semibold text-slate-700",
									children: "Contact Person"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 714,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "text",
									value: quickContactPerson,
									onChange: (e) => setQuickContactPerson(e.target.value),
									placeholder: "e.g. Tariq Khan",
									className: "mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 715,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 713,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "text-xs font-semibold text-slate-700",
									children: "Phone / WhatsApp"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 725,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "text",
									value: quickPhone,
									onChange: (e) => setQuickPhone(e.target.value),
									placeholder: "+44 7911 123456",
									className: "mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 726,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 724,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 712,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, {
								className: "mt-4 flex flex-col-reverse sm:flex-row items-center justify-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setIsQuickAddOpen(false),
									className: "w-full sm:w-auto rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer",
									children: "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 737,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "submit",
									disabled: isSavingBuyer,
									className: "w-full sm:w-auto rounded-xl bg-[#6A80A9] px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-[#586C8F] disabled:opacity-50 cursor-pointer",
									children: isSavingBuyer ? "Saving to Supabase..." : "Save & Select Buyer"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 744,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 736,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 649,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 637,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 636,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: isQuickSupplierOpen,
				onOpenChange: setIsQuickSupplierOpen,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "w-full sm:max-w-[480px] max-h-[92vh] overflow-y-auto sm:rounded-[28px] bg-white p-5 sm:p-6 shadow-2xl focus:outline-none [scrollbar-width:thin]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
						className: "flex items-center gap-2 text-lg font-bold text-black",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Warehouse, { className: "size-5 text-[#6A80A9]" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 761,
							columnNumber: 15
						}, this), "Add New Supplier to Supabase"]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 760,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
						className: "text-xs text-slate-500",
						children: "New suppliers are saved to Supabase in real-time and automatically available across booking and supplier directory views."
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 764,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 759,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
						onSubmit: handleQuickAddSupplierSubmit,
						className: "space-y-3.5 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "text-xs font-semibold text-slate-700",
								children: "Supplier / Vendor Name *"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 772,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								value: quickSupplierName,
								onChange: (e) => setQuickSupplierName(e.target.value),
								placeholder: "e.g. Thames River Textiles Ltd",
								required: true,
								className: "mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 775,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 771,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "text-xs font-semibold text-slate-700",
									children: "City"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 787,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "text",
									value: quickSupplierCity,
									onChange: (e) => setQuickSupplierCity(e.target.value),
									placeholder: "e.g. Manchester",
									className: "mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 788,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 786,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
									label: "Country",
									value: quickSupplierCountry,
									onChange: (val) => setQuickSupplierCountry(val),
									options: [
										"United Kingdom",
										"Pakistan",
										"United Arab Emirates",
										"Germany",
										"Spain",
										"United States"
									],
									placeholder: "Country",
									size: "sm",
									activeColor: "blue",
									triggerClassName: "w-full h-9.5 text-xs mt-1"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 797,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 785,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "text-xs font-semibold text-slate-700",
								children: "Load Point / Depot Name"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 817,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								value: quickLoadPoint,
								onChange: (e) => setQuickLoadPoint(e.target.value),
								placeholder: "e.g. Manchester Central Depot Bay 4",
								className: "mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 820,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 816,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "text-xs font-semibold text-slate-700",
								children: "Physical Pickup Address"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 830,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								value: quickSupplierAddress,
								onChange: (e) => setQuickSupplierAddress(e.target.value),
								placeholder: "e.g. Unit 4, Trafford Park Logistics Gateway",
								className: "mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 833,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 829,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "text-xs font-semibold text-slate-700",
									children: "Contact Person"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 844,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "text",
									value: quickSupplierContact,
									onChange: (e) => setQuickSupplierContact(e.target.value),
									placeholder: "e.g. James Wilson",
									className: "mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 845,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 843,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "text-xs font-semibold text-slate-700",
									children: "Phone / WhatsApp"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 855,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "text",
									value: quickSupplierPhone,
									onChange: (e) => setQuickSupplierPhone(e.target.value),
									placeholder: "+44 161 999 1234",
									className: "mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 856,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 854,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 842,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, {
								className: "mt-4 flex flex-col-reverse sm:flex-row items-center justify-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setIsQuickSupplierOpen(false),
									className: "w-full sm:w-auto rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer",
									children: "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 867,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "submit",
									disabled: isSavingSupplier,
									className: "w-full sm:w-auto rounded-xl bg-[#6A80A9] px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-[#586C8F] disabled:opacity-50 cursor-pointer",
									children: isSavingSupplier ? "Saving to Supabase..." : "Save & Select Supplier"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 874,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 866,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 770,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 758,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 757,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 285,
		columnNumber: 5
	}, this);
}
var _jsxFileName$8 = "/app/applet/src/components/nashmia/booking/RouteSection.tsx";
function RouteSection({ pol, onSelectPol, pod, onSelectPod, errors }) {
	const [polOpen, setPolOpen] = (0, import_react.useState)(false);
	const [polSearch, setPolSearch] = (0, import_react.useState)("");
	const [podOpen, setPodOpen] = (0, import_react.useState)(false);
	const [podSearch, setPodSearch] = (0, import_react.useState)("");
	const polRef = (0, import_react.useRef)(null);
	const podRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (polRef.current && !polRef.current.contains(event.target)) setPolOpen(false);
			if (podRef.current && !podRef.current.contains(event.target)) setPodOpen(false);
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const filteredPol = PORTS_OF_LOADING.filter((p) => p.name.toLowerCase().includes(polSearch.toLowerCase()) || p.code.toLowerCase().includes(polSearch.toLowerCase()) || p.country.toLowerCase().includes(polSearch.toLowerCase()));
	const filteredPod = PORTS_OF_DISCHARGE.filter((p) => p.name.toLowerCase().includes(podSearch.toLowerCase()) || p.code.toLowerCase().includes(podSearch.toLowerCase()) || p.country.toLowerCase().includes(podSearch.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "section-route",
		className: "glass-card rounded-[24px] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)]",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mb-6 flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "flex size-7 items-center justify-center rounded-lg bg-[#6A80A9]/10 text-xs font-bold text-[#6A80A9]",
						children: "02"
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 62,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-xl font-bold tracking-tight text-black sm:text-2xl",
						children: "Route"
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 65,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 61,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs text-slate-500 sm:text-sm",
					children: "Define where the container is loading and where it is going."
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 67,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 60,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "hidden rounded-full border border-slate-200/80 bg-white/60 px-3 py-1 text-[11px] font-medium text-slate-500 sm:inline-block",
				children: "Maritime Corridor"
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 71,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 59,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_auto_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-2",
					ref: polRef,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "text-xs font-semibold uppercase tracking-wider text-slate-700",
							children: ["Port of Loading (POL) ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-rose-500",
								children: "*"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 82,
								columnNumber: 37
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 81,
							columnNumber: 13
						}, this), pol && /* @__PURE__ */ (void 0)("span", {
							className: "rounded-md bg-[#6A80A9]/10 px-2 py-0.5 text-[10px] font-bold text-[#6A80A9]",
							children: pol.code
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 85,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 80,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => {
									setPolOpen((prev) => !prev);
									setPodOpen(false);
								},
								className: cn("flex w-full items-center justify-between rounded-[16px] border bg-white/80 px-4 py-3.5 text-left text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#6A80A9]/30", polOpen ? "border-[#6A80A9] ring-2 ring-[#6A80A9]/20" : "border-slate-200/90", errors?.pol && !pol && "border-rose-400 bg-rose-50/30"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 106,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 105,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: pol ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-semibold text-black",
										children: pol.name
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 111,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11px] text-slate-500",
										children: pol.fullLabel
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 112,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 110,
										columnNumber: 21
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400",
										children: "Select origin port..."
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 115,
										columnNumber: 21
									}, this) }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 108,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 104,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: cn("size-4 text-slate-400 transition-transform duration-200", polOpen && "rotate-180 text-black") }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 119,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 92,
								columnNumber: 13
							}, this),
							errors?.pol && !pol && /* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-[11px] font-medium text-rose-500",
								children: errors.pol
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 128,
								columnNumber: 15
							}, this),
							polOpen && /* @__PURE__ */ (void 0)("div", {
								className: "glass-card-strong absolute z-30 mt-2 max-h-64 w-full overflow-hidden rounded-[18px] border border-white/90 p-2 shadow-[0_16px_40px_rgba(15,23,42,0.12)] animate-in fade-in zoom-in-95",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "relative mb-2 px-1",
									children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3.5 top-2.5 size-3.5 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 134,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("input", {
										type: "text",
										value: polSearch,
										onChange: (e) => setPolSearch(e.target.value),
										placeholder: "Search origin port or country...",
										className: "w-full rounded-xl border border-slate-200/80 bg-white/95 py-2 pl-9 pr-3 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none",
										autoFocus: true
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 135,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 133,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "max-h-44 overflow-y-auto space-y-1 pr-1 scrollbar-thin",
									children: filteredPol.map((port) => /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => {
											onSelectPol(port);
											setPolOpen(false);
											setPolSearch("");
										},
										className: cn("flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-colors hover:bg-[#E8F1F3]/80", pol?.code === port.code && "bg-[#6A80A9]/10 font-semibold text-[#6A80A9]"),
										children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-semibold text-black",
											children: port.name
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 160,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "ml-2 text-[11px] text-slate-500",
											children: [
												port.code,
												" • ",
												port.country
											]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 161,
											columnNumber: 25
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 159,
											columnNumber: 23
										}, this), pol?.code === port.code && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 165,
											columnNumber: 51
										}, this)]
									}, port.code, true, {
										fileName: _jsxFileName$8,
										lineNumber: 146,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 144,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 132,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 91,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 79,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "my-2 flex flex-col items-center justify-center px-2 lg:my-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "PORT OF LOADING" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 177,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-3 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 178,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "PORT OF DISCHARGE" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 179,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 176,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative mt-2 flex w-full min-w-[140px] items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[2px] w-full bg-gradient-to-r from-[#6A80A9]/20 via-[#6A80A9] to-[#6A80A9]/20" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 183,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute flex size-7 items-center justify-center rounded-full border border-white bg-white shadow-sm ring-2 ring-[#6A80A9]/20",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Compass, { className: "size-3.5 text-[#6A80A9] animate-[spin_12s_linear_infinite]" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 185,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 184,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 182,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "mt-1 text-[11px] font-medium text-slate-500",
							children: [
								pol?.code ?? "POL",
								" → ",
								pod?.code ?? "POD"
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 189,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 175,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-2",
					ref: podRef,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "text-xs font-semibold uppercase tracking-wider text-slate-700",
							children: ["Port of Discharge (POD) ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-rose-500",
								children: "*"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 198,
								columnNumber: 39
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 197,
							columnNumber: 13
						}, this), pod && /* @__PURE__ */ (void 0)("span", {
							className: "rounded-md bg-[#6A80A9]/10 px-2 py-0.5 text-[10px] font-bold text-[#6A80A9]",
							children: pod.code
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 201,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 196,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => {
									setPodOpen((prev) => !prev);
									setPolOpen(false);
								},
								className: cn("flex w-full items-center justify-between rounded-[16px] border bg-white/80 px-4 py-3.5 text-left text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#6A80A9]/30", podOpen ? "border-[#6A80A9] ring-2 ring-[#6A80A9]/20" : "border-slate-200/90", errors?.pod && !pod && "border-rose-400 bg-rose-50/30"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 222,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 221,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: pod ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-semibold text-black",
										children: pod.name
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 227,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11px] text-slate-500",
										children: pod.fullLabel
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 228,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 226,
										columnNumber: 21
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400",
										children: "Select destination port..."
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 231,
										columnNumber: 21
									}, this) }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 224,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 220,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: cn("size-4 text-slate-400 transition-transform duration-200", podOpen && "rotate-180 text-black") }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 235,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 208,
								columnNumber: 13
							}, this),
							errors?.pod && !pod && /* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-[11px] font-medium text-rose-500",
								children: errors.pod
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 244,
								columnNumber: 15
							}, this),
							podOpen && /* @__PURE__ */ (void 0)("div", {
								className: "glass-card-strong absolute z-30 mt-2 max-h-64 w-full overflow-hidden rounded-[18px] border border-white/90 p-2 shadow-[0_16px_40px_rgba(15,23,42,0.12)] animate-in fade-in zoom-in-95",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "relative mb-2 px-1",
									children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3.5 top-2.5 size-3.5 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 250,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("input", {
										type: "text",
										value: podSearch,
										onChange: (e) => setPodSearch(e.target.value),
										placeholder: "Search destination port or country...",
										className: "w-full rounded-xl border border-slate-200/80 bg-white/95 py-2 pl-9 pr-3 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none",
										autoFocus: true
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 251,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 249,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "max-h-44 overflow-y-auto space-y-1 pr-1 scrollbar-thin",
									children: filteredPod.map((port) => /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => {
											onSelectPod(port);
											setPodOpen(false);
											setPodSearch("");
										},
										className: cn("flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-colors hover:bg-[#E8F1F3]/80", pod?.code === port.code && "bg-[#6A80A9]/10 font-semibold text-[#6A80A9]"),
										children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-semibold text-black",
											children: port.name
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 276,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "ml-2 text-[11px] text-slate-500",
											children: [
												port.code,
												" • ",
												port.country
											]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 277,
											columnNumber: 25
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 275,
											columnNumber: 23
										}, this), pod?.code === port.code && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 281,
											columnNumber: 51
										}, this)]
									}, port.code, true, {
										fileName: _jsxFileName$8,
										lineNumber: 262,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 260,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 248,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 207,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 195,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 77,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 54,
		columnNumber: 5
	}, this);
}
var _jsxFileName$7 = "/app/applet/src/components/nashmia/booking/ShippingSection.tsx";
function ShippingSection({ bookingAgent, onSelectBookingAgent, selectedBookingAgents, onSelectBookingAgents, pol, pod, containerSize, matchedRate, rateMode = "AGREED_RATE", onChangeRateMode, onSelectRateMode, customRate = null, onChangeCustomRate, currency = "USD", onChangeCurrency, quantity = 1, availableBookingAgents = [], availableRateCards = [], errors }) {
	const [agentOpen, setAgentOpen] = (0, import_react.useState)(false);
	const [agentSearch, setAgentSearch] = (0, import_react.useState)("");
	const [rateDirectoryOpen, setRateDirectoryOpen] = (0, import_react.useState)(false);
	const [isEditingCustomRate, setIsEditingCustomRate] = (0, import_react.useState)(false);
	const [customRateInput, setCustomRateInput] = (0, import_react.useState)(customRate ? String(customRate) : "");
	const totalCalculatedFreight = (customRate !== null && customRate !== void 0 ? customRate : matchedRate?.ratePerContainer || 0) * quantity;
	const agentRef = (0, import_react.useRef)(null);
	const handleRateModeToggle = (mode) => {
		onChangeRateMode?.(mode);
		onSelectRateMode?.(mode);
	};
	const handleApplyCustomRate = () => {
		const parsed = parseFloat(customRateInput);
		if (!isNaN(parsed) && parsed >= 0) {
			onChangeCustomRate?.(parsed);
			setIsEditingCustomRate(false);
		} else if (customRateInput.trim() === "") {
			onChangeCustomRate?.(null);
			setIsEditingCustomRate(false);
		}
	};
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (agentRef.current && !agentRef.current.contains(event.target)) setAgentOpen(false);
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const agentsList = availableBookingAgents;
	const selectedAgents = (0, import_react.useMemo)(() => {
		if (selectedBookingAgents && selectedBookingAgents.length > 0) return selectedBookingAgents;
		return bookingAgent ? [bookingAgent] : [];
	}, [selectedBookingAgents, bookingAgent]);
	const filteredAgents = agentsList.filter((a) => a.name.toLowerCase().includes(agentSearch.toLowerCase()) || a.code && a.code.toLowerCase().includes(agentSearch.toLowerCase()) || a.contractTier && a.contractTier.toLowerCase().includes(agentSearch.toLowerCase()) || a.email && a.email.toLowerCase().includes(agentSearch.toLowerCase()));
	const handleToggleAgent = (agent) => {
		const isSelected = selectedAgents.some((a) => a.id === agent.id);
		let next;
		if (isSelected) next = selectedAgents.filter((a) => a.id !== agent.id);
		else next = [...selectedAgents, agent];
		if (onSelectBookingAgents) onSelectBookingAgents(next);
		if (next.length > 0) onSelectBookingAgent(next[0]);
	};
	const handleRemoveAgent = (agentId, e) => {
		e.stopPropagation();
		const next = selectedAgents.filter((a) => a.id !== agentId);
		if (onSelectBookingAgents) onSelectBookingAgents(next);
		if (next.length > 0) onSelectBookingAgent(next[0]);
	};
	const handleSelectAllAgents = () => {
		if (onSelectBookingAgents) onSelectBookingAgents(agentsList);
		if (agentsList.length > 0) onSelectBookingAgent(agentsList[0]);
	};
	const handleClearAgents = () => {
		if (onSelectBookingAgents) onSelectBookingAgents([]);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "section-shipping",
		className: "glass-card rounded-[24px] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-6 flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex size-7 items-center justify-center rounded-lg bg-[#6A80A9]/10 text-xs font-bold text-[#6A80A9]",
							children: "03"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 196,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-xl font-bold tracking-tight text-black sm:text-2xl",
							children: "Shipping Details"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 199,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 195,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-slate-500 sm:text-sm",
						children: "Select the booking partner and forwarders for freight procurement."
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 203,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 194,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "hidden rounded-full border border-slate-200/80 bg-white/60 px-3 py-1 text-[11px] font-medium text-slate-500 sm:inline-block",
					children: "Approved Rate Cards"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 207,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 193,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-2",
					ref: agentRef,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "text-xs font-semibold uppercase tracking-wider text-slate-700",
							children: ["Booking Agents / Forwarders ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-rose-500",
								children: "*"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 218,
								columnNumber: 43
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 217,
							columnNumber: 13
						}, this), selectedAgents.length > 0 && /* @__PURE__ */ (void 0)("span", {
							className: "rounded-md bg-[#6A80A9]/10 px-2 py-0.5 text-[10px] font-semibold text-[#6A80A9]",
							children: selectedAgents.length === 1 ? selectedAgents[0].contractTier || "1 Forwarder" : `${selectedAgents.length} Forwarders Selected`
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 221,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 216,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => {
									setAgentOpen((prev) => !prev);
								},
								className: cn("flex w-full items-center justify-between rounded-[16px] border bg-white/80 px-4 py-3.5 text-left text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#6A80A9]/30", agentOpen ? "border-[#6A80A9] ring-2 ring-[#6A80A9]/20" : "border-slate-200/90", errors?.bookingAgent && selectedAgents.length === 0 && "border-rose-400 bg-rose-50/30"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-3 min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 245,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 244,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "min-w-0 flex-1",
										children: selectedAgents.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-slate-400",
											children: "Select booking agents / forwarders..."
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 249,
											columnNumber: 21
										}, this) : selectedAgents.length === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-semibold text-black truncate",
											children: selectedAgents[0].name
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 252,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[11px] text-slate-500 truncate",
											children: [
												selectedAgents[0].contractTier || "Booking Agent",
												selectedAgents[0].code ? ` • ${selectedAgents[0].code}` : "",
												selectedAgents[0].email ? ` • ${selectedAgents[0].email}` : ""
											]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 253,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 251,
											columnNumber: 21
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-semibold text-black truncate",
											children: [selectedAgents.length, " Forwarders Selected"]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 261,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[11px] text-[#6A80A9] truncate font-medium",
											children: selectedAgents.map((a) => a.name).join(", ")
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 264,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 260,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 247,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 243,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: cn("size-4 shrink-0 text-slate-400 transition-transform duration-200 ml-2", agentOpen && "rotate-180 text-black") }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 271,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 230,
								columnNumber: 13
							}, this),
							selectedAgents.length > 1 && /* @__PURE__ */ (void 0)("div", {
								className: "mt-2 flex flex-wrap gap-1.5 animate-in fade-in",
								children: selectedAgents.map((agent) => /* @__PURE__ */ (void 0)("span", {
									className: "inline-flex items-center gap-1 rounded-lg border border-[#6A80A9]/20 bg-[#E8F1F3]/80 px-2 py-1 text-[11px] font-medium text-slate-800",
									children: [
										/* @__PURE__ */ (void 0)("span", {
											className: "font-semibold",
											children: agent.name
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 287,
											columnNumber: 21
										}, this),
										agent.email && /* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] text-slate-500",
											children: [
												"(",
												agent.email,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 289,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: (e) => handleRemoveAgent(agent.id, e),
											className: "ml-0.5 rounded-full p-0.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors",
											title: `Remove ${agent.name}`,
											children: /* @__PURE__ */ (void 0)(X, { className: "size-3" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 297,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 291,
											columnNumber: 21
										}, this)
									]
								}, agent.id, true, {
									fileName: _jsxFileName$7,
									lineNumber: 283,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 281,
								columnNumber: 15
							}, this),
							errors?.bookingAgent && selectedAgents.length === 0 && /* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-[11px] font-medium text-rose-500",
								children: errors.bookingAgent
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 305,
								columnNumber: 15
							}, this),
							agentOpen && /* @__PURE__ */ (void 0)("div", {
								className: "glass-card-strong absolute z-30 mt-2 max-h-80 w-full overflow-hidden rounded-[18px] border border-white/90 p-2.5 shadow-[0_16px_40px_rgba(15,23,42,0.12)] animate-in fade-in zoom-in-95",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "mb-2 space-y-2 px-1",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3.5 top-2.5 size-3.5 text-slate-400" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 313,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "text",
												value: agentSearch,
												onChange: (e) => setAgentSearch(e.target.value),
												placeholder: "Search forwarder name, email, code...",
												className: "w-full rounded-xl border border-slate-200/80 bg-white/95 py-2 pl-9 pr-3 text-xs text-black placeholder:text-slate-400 focus:border-[#6A80A9] focus:outline-none",
												autoFocus: true
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 314,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 312,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between text-[11px] text-slate-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-700",
												children: [
													selectedAgents.length,
													" of ",
													agentsList.length,
													" forwarders selected"
												]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 325,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2",
												children: [
													/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: handleSelectAllAgents,
														className: "text-[#6A80A9] hover:underline font-semibold",
														children: "Select All"
													}, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 329,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("span", {
														className: "text-slate-300",
														children: "|"
													}, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 336,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: handleClearAgents,
														className: "text-slate-400 hover:text-slate-700 hover:underline",
														children: "Clear"
													}, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 337,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 328,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 324,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 311,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "max-h-48 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin",
										children: filteredAgents.map((agent) => {
											const isSelected = selectedAgents.some((a) => a.id === agent.id);
											return /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => handleToggleAgent(agent),
												className: cn("flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs transition-colors hover:bg-[#E8F1F3]/80", isSelected ? "bg-[#6A80A9]/10 font-semibold text-[#6A80A9] border border-[#6A80A9]/20" : "border border-transparent"),
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "min-w-0 flex-1 pr-2",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "font-semibold text-black truncate",
															children: agent.name
														}, void 0, false, {
															fileName: _jsxFileName$7,
															lineNumber: 365,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500",
															children: agent.code
														}, void 0, false, {
															fileName: _jsxFileName$7,
															lineNumber: 366,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$7,
														lineNumber: 364,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "flex items-center gap-2 mt-0.5 text-[11px] text-slate-500",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "truncate",
															children: agent.contractTier
														}, void 0, false, {
															fileName: _jsxFileName$7,
															lineNumber: 371,
															columnNumber: 29
														}, this), agent.email && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("span", { children: "•" }, void 0, false, {
															fileName: _jsxFileName$7,
															lineNumber: 374,
															columnNumber: 33
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "truncate font-mono text-[10.5px] text-slate-400",
															children: agent.email
														}, void 0, false, {
															fileName: _jsxFileName$7,
															lineNumber: 375,
															columnNumber: 33
														}, this)] }, void 0, true, {
															fileName: _jsxFileName$7,
															lineNumber: 373,
															columnNumber: 31
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$7,
														lineNumber: 370,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$7,
													lineNumber: 363,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: cn("flex size-5 shrink-0 items-center justify-center rounded-md border transition-all", isSelected ? "border-[#6A80A9] bg-[#6A80A9] text-white shadow-xs" : "border-slate-300 bg-white"),
													children: isSelected && /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 stroke-[2.5]" }, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 392,
														columnNumber: 42
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 384,
													columnNumber: 25
												}, this)]
											}, agent.id, true, {
												fileName: _jsxFileName$7,
												lineNumber: 352,
												columnNumber: 23
											}, this);
										})
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 348,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between px-1",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10.5px] text-slate-400",
											children: "Emails will be sent to all selected forwarders"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 401,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setAgentOpen(false),
											className: "rounded-lg bg-black px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 transition-colors",
											children: [
												"Done (",
												selectedAgents.length,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 404,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 400,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 309,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 229,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 215,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 213,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8 border-t border-slate-100/90 pt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-slate-800",
								children: "Freight Rate Mode"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 423,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: cn("inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold transition-all", rateMode === "ASKING_RATE" ? "bg-[#6A80A9]/15 text-[#374b6e]" : "bg-[#C7D5BF]/40 text-[#2D3C26]"),
								children: rateMode === "ASKING_RATE" ? "Asking Rate Mode" : "Agreed Commercial Rate"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 426,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 422,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-0.5 text-xs text-slate-500",
							children: rateMode === "ASKING_RATE" ? "Solicit live freight rate quotations directly from the selected forwarder(s)." : "Apply negotiated contractual rate card or specify agreed container freight."
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 437,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 421,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative z-10 inline-flex items-center rounded-[14px] border border-slate-200/90 bg-slate-100/90 p-1 shadow-inner self-start sm:self-auto",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => handleRateModeToggle("ASKING_RATE"),
								className: cn("flex items-center gap-1.5 rounded-[10px] px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer select-none", rateMode === "ASKING_RATE" ? "bg-white text-black shadow-xs font-bold ring-1 ring-slate-200/50" : "text-slate-600 hover:text-black"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleQuestionMark, { className: "size-3.5 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 456,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Asking Rate" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 457,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 446,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => handleRateModeToggle("AGREED_RATE"),
								className: cn("flex items-center gap-1.5 rounded-[10px] px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer select-none", rateMode === "AGREED_RATE" ? "bg-white text-black shadow-xs font-bold ring-1 ring-slate-200/50" : "text-slate-600 hover:text-black"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Receipt, { className: "size-3.5 text-[#2D3C26]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 469,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Agreed Freight Rate" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 470,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 459,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 445,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 420,
						columnNumber: 9
					}, this),
					rateMode === "ASKING_RATE" && /* @__PURE__ */ (void 0)("div", {
						className: "relative overflow-hidden rounded-[22px] border border-[#6A80A9]/30 bg-gradient-to-br from-white/95 via-white/85 to-[#E8F1F3]/40 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)] backdrop-blur-xl animate-in fade-in duration-200",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-100/90 pb-3",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex size-8 items-center justify-center rounded-xl bg-[#6A80A9]/15 text-[#6A80A9]",
										children: /* @__PURE__ */ (void 0)(MessageSquareQuote, { className: "size-4.5" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 482,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 481,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
										className: "text-xs font-bold uppercase tracking-wider text-slate-900",
										children: "Forwarder Quotation Request"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 485,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-[11px] text-slate-500",
										children: "Direct Rate Inquiry & Space Verification"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 488,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 484,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 480,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-[#6A80A9]/30 bg-[#6A80A9]/10 px-3 py-1 text-xs font-semibold text-[#6A80A9]",
									children: [/* @__PURE__ */ (void 0)("span", { className: "size-1.5 rounded-full bg-[#6A80A9] animate-pulse" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 495,
										columnNumber: 17
									}, this), "Asking Rate Mode"]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 494,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 479,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "mt-4 flex items-start gap-2.5 rounded-xl border border-sky-200/80 bg-sky-50/70 p-3.5 text-xs text-sky-900",
								children: [/* @__PURE__ */ (void 0)(Info, { className: "size-4 shrink-0 text-sky-600 mt-0.5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 502,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
									className: "font-semibold text-sky-950",
									children: "The freight forwarder will be asked to provide the freight rate."
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 504,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "mt-0.5 text-[11.5px] text-sky-800 leading-relaxed",
									children: "Agreed freight rate input fields are hidden. When this booking request is sent, an email will automatically be generated asking the forwarder for their best freight quotation along with schedule and space confirmation."
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 507,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 503,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 501,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "mt-4 rounded-xl border border-slate-200/70 bg-white/80 p-4",
								children: [/* @__PURE__ */ (void 0)("p", {
									className: "text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2.5",
									children: "Quotation Requirements Requested in Forwarder Email:"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 517,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/80 p-2.5",
											children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-4 text-[#6A80A9] shrink-0" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 522,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-900",
												children: "Freight Rate"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 524,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[10.5px] text-slate-500",
												children: "Per-container ocean freight"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 525,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 523,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 521,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/80 p-2.5",
											children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-4 text-[#6A80A9] shrink-0" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 529,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-900",
												children: "Currency"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 531,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[10.5px] text-slate-500",
												children: "USD, EUR, GBP quotation"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 532,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 530,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 528,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/80 p-2.5",
											children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-4 text-[#6A80A9] shrink-0" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 536,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-900",
												children: "Space Availability"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 538,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[10.5px] text-slate-500",
												children: "Carrier slot allocation"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 539,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 537,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 535,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/80 p-2.5",
											children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-4 text-[#6A80A9] shrink-0" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 543,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-900",
												children: "ETD & ETA Schedule"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 545,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[10.5px] text-slate-500",
												children: "Departure & arrival dates"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 546,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 544,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 542,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/80 p-2.5",
											children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-4 text-[#6A80A9] shrink-0" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 550,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-900",
												children: "Transit Time"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 552,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[10.5px] text-slate-500",
												children: "Estimated transit duration"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 553,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 551,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 549,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/80 p-2.5",
											children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-4 text-[#6A80A9] shrink-0" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 557,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-900",
												children: "Additional Charges & Validity"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 559,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[10.5px] text-slate-500",
												children: "THC, surcharges & validity"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 562,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 558,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 556,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 520,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 516,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 477,
						columnNumber: 11
					}, this),
					rateMode === "AGREED_RATE" && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-4 animate-in fade-in duration-200",
						children: matchedRate ? /* @__PURE__ */ (void 0)("div", {
							className: "relative overflow-hidden rounded-[22px] border border-white/90 bg-gradient-to-br from-white/95 via-white/85 to-[#E8F1F3]/40 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04),inset_0_1px_2px_rgba(255,255,255,1)] backdrop-blur-xl transition-all duration-300",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex size-7 items-center justify-center rounded-lg bg-[#C7D5BF]/40 text-[#2D3C26]",
										children: /* @__PURE__ */ (void 0)(Receipt, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 579,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 578,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
										className: "text-xs font-bold uppercase tracking-wider text-slate-800",
										children: "Agreed Freight Rate"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 582,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-[11px] text-slate-400",
										children: "Commercial Rate Card Agreement"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 585,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 581,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 577,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full border border-[#C7D5BF] bg-[#C7D5BF]/30 px-3 py-1 text-xs font-semibold text-[#2D3C26]",
										children: [/* @__PURE__ */ (void 0)("span", { className: "size-1.5 rounded-full bg-[#2D3C26]" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 591,
											columnNumber: 23
										}, this), "Rate matched"]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 590,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-xs text-slate-400",
										children: ["Valid to ", matchedRate.validUntil]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 594,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 589,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 576,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
								children: [/* @__PURE__ */ (void 0)("div", { children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-baseline gap-2",
										children: [
											/* @__PURE__ */ (void 0)("span", {
												className: "text-3xl font-extrabold tracking-tight text-black sm:text-4xl",
												children: ["$", (customRate ?? matchedRate.ratePerContainer).toLocaleString()]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 604,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("span", {
												className: "text-xs font-medium uppercase text-slate-500",
												children: [currency, " / container"]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 607,
												columnNumber: 23
											}, this),
											quantity > 1 && /* @__PURE__ */ (void 0)("span", {
												className: "text-xs font-semibold text-slate-700",
												children: [
													"(Total: $",
													totalCalculatedFreight.toLocaleString(),
													" ",
													currency,
													")"
												]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 611,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 603,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "mt-1 text-xs font-medium text-slate-600",
										children: [
											matchedRate.agentName,
											" • ",
											pol?.name ?? matchedRate.polCode,
											" →",
											" ",
											pod?.name ?? matchedRate.podCode,
											" • ",
											containerSize
										]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 616,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-[11px] text-slate-400",
										children: ["Card: ", matchedRate.cardName]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 620,
										columnNumber: 21
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 602,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex flex-wrap items-center gap-2 self-start sm:self-end",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center rounded-xl border border-slate-200/80 bg-white/90 p-1 shadow-xs",
										children: [
											"USD",
											"EUR",
											"GBP"
										].map((curr) => /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => onChangeCurrency?.(curr),
											className: cn("rounded-lg px-2.5 py-1 text-[11px] font-bold transition-colors", currency === curr ? "bg-black text-white" : "text-slate-600 hover:text-black"),
											children: curr
										}, curr, false, {
											fileName: _jsxFileName$7,
											lineNumber: 627,
											columnNumber: 25
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 625,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setRateDirectoryOpen(true),
										className: "inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50",
										children: [/* @__PURE__ */ (void 0)(FileSpreadsheet, { className: "size-3.5 text-[#6A80A9]" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 648,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("span", { children: "View Rate Schedule" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 649,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 643,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 623,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 601,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 574,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (void 0)("div", {
							className: "rounded-[20px] border border-dashed border-slate-300/80 bg-[#E8F1F3]/25 p-5 transition-all",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex size-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600",
										children: /* @__PURE__ */ (void 0)(CircleAlert, { className: "size-4.5" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 659,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 658,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
										className: "text-xs font-bold text-slate-800",
										children: customRate ? `Agreed Rate: $${customRate} ${currency}/container` : "No active rate card found"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 662,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-[11px] text-slate-500",
										children: customRate ? `Custom agreed freight rate applied for ${containerSize} container.` : bookingAgent && pol && pod ? `No negotiated monthly rate for ${bookingAgent.name} on ${pol.code} → ${pod.code} (${containerSize}). You can specify a custom agreed rate or review cards.` : "Select booking agent, origin, destination, and container size to match rate."
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 667,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 661,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 657,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [isEditingCustomRate ? /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white p-1 shadow-xs",
										children: [
											/* @__PURE__ */ (void 0)("span", {
												className: "pl-2 text-xs font-bold text-slate-500",
												children: "$"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 681,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("input", {
												type: "number",
												placeholder: "Rate",
												value: customRateInput,
												onChange: (e) => setCustomRateInput(e.target.value),
												onKeyDown: (e) => {
													if (e.key === "Enter") {
														e.preventDefault();
														handleApplyCustomRate();
													}
												},
												className: "w-20 rounded-lg px-2 py-1 text-xs font-semibold text-black focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 682,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: handleApplyCustomRate,
												className: "rounded-lg bg-black px-2.5 py-1 text-[11px] font-bold text-white hover:bg-slate-800",
												children: "Set"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 695,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setIsEditingCustomRate(false),
												className: "rounded-lg px-2 py-1 text-[11px] font-medium text-slate-500 hover:text-black",
												children: "Cancel"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 702,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 680,
										columnNumber: 23
									}, this) : /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setIsEditingCustomRate(true),
										className: "rounded-xl border border-slate-200/90 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50",
										children: customRate ? "Edit Rate" : "Enter Agreed Rate"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 711,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setRateDirectoryOpen(true),
										className: "rounded-xl border border-slate-200/90 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-sm transition-all hover:bg-slate-50",
										children: "Review Rate Cards"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 720,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 677,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 656,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 655,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 572,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 419,
				columnNumber: 7
			}, this),
			rateDirectoryOpen && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 p-0 sm:p-4 backdrop-blur-sm animate-in fade-in",
				onClick: (e) => {
					if (e.target === e.currentTarget) setRateDirectoryOpen(false);
				},
				children: /* @__PURE__ */ (void 0)("div", {
					className: "glass-card-strong w-full max-w-2xl max-h-[90vh] rounded-t-[28px] rounded-b-none sm:rounded-[24px] border-t sm:border border-white/95 p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] outline-none overflow-y-auto",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							"data-swipe-handle": "true",
							className: "mx-auto -mt-2 mb-3 flex h-6 w-full max-w-[140px] cursor-grab touch-none items-center justify-center sm:hidden select-none",
							"aria-label": "Drag down to dismiss",
							children: /* @__PURE__ */ (void 0)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 750,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 745,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between border-b border-slate-100 pb-4",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex size-8 items-center justify-center rounded-lg bg-[#6A80A9]/10 text-[#6A80A9]",
									children: /* @__PURE__ */ (void 0)(Receipt, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 756,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 755,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
									className: "text-base font-bold text-black",
									children: "Active Monthly Rate Cards"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 759,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-slate-500",
									children: "Approved contracts for Nashmia Industries Q3 freight procurement"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 760,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 758,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 754,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setRateDirectoryOpen(false),
								className: "rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-black",
								children: /* @__PURE__ */ (void 0)(X, { className: "size-4.5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 770,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 765,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 753,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-4 max-h-80 overflow-y-auto space-y-2 pr-1 scrollbar-thin",
							children: (availableRateCards.length > 0 ? availableRateCards.filter((r) => r.status !== "Inactive") : RATE_CARDS).length === 0 ? /* @__PURE__ */ (void 0)("div", {
								className: "rounded-xl border border-dashed border-slate-200 p-8 text-center",
								children: [
									/* @__PURE__ */ (void 0)(Receipt, { className: "mx-auto size-8 text-slate-300 mb-2" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 780,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-xs font-semibold text-slate-700",
										children: "No Rate Cards Configured"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 781,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-[11px] text-slate-400 mt-1 max-w-sm mx-auto",
										children: "Live rates will be quoted directly by selected forwarders upon booking submission."
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 782,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 779,
								columnNumber: 17
							}, this) : (availableRateCards.length > 0 ? availableRateCards.filter((r) => r.status !== "Inactive") : RATE_CARDS).map((card, idx) => {
								const isFull = "base_rate" in card || "load_point" in card;
								const fwdName = isFull ? card.forwarders?.company_name || card.forwarders?.contact_person || "Forwarder" : card.agentName;
								const pickupLoc = isFull ? card.load_point || card.origin : `${card.polCode} → ${card.podCode}`;
								const rateVal = isFull ? card.base_rate || card.rate || 0 : card.ratePerContainer;
								const cardCurr = isFull ? card.currency || "USD" : card.currency || "USD";
								const validDate = isFull ? card.valid_until : card.validUntil;
								const cSize = isFull ? card.container_size || "40HC" : card.size;
								const isMatched = matchedRate && (matchedRate.ratePerContainer === rateVal || matchedRate.agentName === fwdName);
								return /* @__PURE__ */ (void 0)("div", {
									onClick: () => {
										onChangeCustomRate?.(rateVal);
										onChangeCurrency?.(cardCurr);
										setRateDirectoryOpen(false);
										toast.success(`Applied Rate Card: $${rateVal.toLocaleString()} (${fwdName})`);
									},
									className: cn("flex items-center justify-between rounded-xl border p-3 text-xs transition-colors cursor-pointer", isMatched ? "border-[#6A80A9] bg-[#6A80A9]/10 font-semibold" : "border-slate-200/80 bg-white/70 hover:bg-slate-50 hover:border-slate-300"),
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "space-y-0.5",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "font-bold text-black",
												children: fwdName
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 840,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600 font-medium",
												children: cSize
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 841,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 839,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-[11px] text-slate-500",
											children: ["Pickup: ", /* @__PURE__ */ (void 0)("strong", {
												className: "text-slate-700",
												children: pickupLoc
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 846,
												columnNumber: 35
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 845,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 838,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-sm font-bold text-black font-mono",
											children: [cardCurr === "USD" ? "$" : `${cardCurr} `, rateVal.toLocaleString()]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 851,
											columnNumber: 25
										}, this), validDate && /* @__PURE__ */ (void 0)("p", {
											className: "text-[10px] text-slate-400",
											children: ["Valid to ", validDate]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 856,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 850,
										columnNumber: 23
									}, this)]
								}, idx, true, {
									fileName: _jsxFileName$7,
									lineNumber: 821,
									columnNumber: 21
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 774,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-6 flex justify-end",
							children: /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setRateDirectoryOpen(false),
								className: "rounded-xl bg-black px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90",
								children: "Close Rate Cards"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 866,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 865,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 743,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 737,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 188,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "/app/applet/src/components/nashmia/booking/NashmiaCustomDatePicker.tsx";
var WEEKDAYS_EN = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
var NashmiaCustomDatePicker = ({ value, onChange, error, label = "Loading Date", required = false, className }) => {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	const parseValue = (val) => {
		if (!val) return {
			startDate: "",
			endDate: "",
			isRange: false
		};
		if (val.includes(" to ")) {
			const [start, end] = val.split(" to ");
			return {
				startDate: start?.trim() || "",
				endDate: end?.trim() || "",
				isRange: true
			};
		}
		if (val.includes(" - ")) {
			const [start, end] = val.split(" - ");
			return {
				startDate: start?.trim() || "",
				endDate: end?.trim() || "",
				isRange: true
			};
		}
		return {
			startDate: val.trim(),
			endDate: "",
			isRange: false
		};
	};
	const parsed = parseValue(value);
	const [pickerMode, setPickerMode] = (0, import_react.useState)(parsed.isRange || value && value.includes("to") ? "range" : "range");
	const [rangeStart, setRangeStart] = (0, import_react.useState)(parsed.startDate || "2026-08-10");
	const [rangeEnd, setRangeEnd] = (0, import_react.useState)(parsed.endDate || "2026-08-20");
	const initialBase = parsed.startDate ? new Date(parsed.startDate) : /* @__PURE__ */ new Date();
	const validInitialDate = isNaN(initialBase.getTime()) ? /* @__PURE__ */ new Date() : initialBase;
	const [currentYear, setCurrentYear] = (0, import_react.useState)(validInitialDate.getFullYear());
	const [currentMonth, setCurrentMonth] = (0, import_react.useState)(validInitialDate.getMonth());
	const [isMonthSelectorOpen, setIsMonthSelectorOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				setIsOpen(false);
				setIsMonthSelectorOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	(0, import_react.useEffect)(() => {
		const p = parseValue(value);
		if (p.startDate) {
			setRangeStart(p.startDate);
			const d = new Date(p.startDate);
			if (!isNaN(d.getTime())) {
				setCurrentYear(d.getFullYear());
				setCurrentMonth(d.getMonth());
			}
		}
		if (p.endDate) {
			setRangeEnd(p.endDate);
			setPickerMode("range");
		}
	}, [value]);
	const handlePrevMonth = () => {
		if (currentMonth === 0) {
			setCurrentMonth(11);
			setCurrentYear((y) => y - 1);
		} else setCurrentMonth((m) => m - 1);
	};
	const handleNextMonth = () => {
		if (currentMonth === 11) {
			setCurrentMonth(0);
			setCurrentYear((y) => y + 1);
		} else setCurrentMonth((m) => m + 1);
	};
	const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
	const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
	const formatDateStr = (year, month, day) => {
		return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
	};
	const handleSelectDay = (day) => {
		const dateStr = formatDateStr(currentYear, currentMonth, day);
		if (pickerMode === "single") {
			setRangeStart(dateStr);
			setRangeEnd("");
			onChange(dateStr);
			setIsOpen(false);
			return;
		}
		if (!rangeStart || rangeStart && rangeEnd) {
			setRangeStart(dateStr);
			setRangeEnd("");
		} else if (rangeStart && !rangeEnd) {
			if (new Date(dateStr) < new Date(rangeStart)) {
				setRangeEnd(rangeStart);
				setRangeStart(dateStr);
				onChange(`${dateStr} to ${rangeStart}`);
			} else {
				setRangeEnd(dateStr);
				onChange(`${rangeStart} to ${dateStr}`);
			}
		}
	};
	const displayFormattedDate = (val) => {
		if (!val) return "";
		const p = parseValue(val);
		const formatSingle = (dStr) => {
			if (!dStr) return "";
			const d = new Date(dStr);
			if (isNaN(d.getTime())) return dStr;
			return `${d.getDate()} ${d.toLocaleString("en-GB", { month: "short" })} ${d.getFullYear()}`;
		};
		if (p.isRange && p.startDate && p.endDate) {
			const d1 = new Date(p.startDate);
			const d2 = new Date(p.endDate);
			if (!isNaN(d1.getTime()) && !isNaN(d2.getTime())) {
				if (d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()) return `${d1.getDate()} – ${d2.getDate()} ${d1.toLocaleString("en-GB", { month: "short" })} ${d1.getFullYear()} (Date Range)`;
				return `${formatSingle(p.startDate)} → ${formatSingle(p.endDate)}`;
			}
			return `${p.startDate} to ${p.endDate}`;
		}
		return formatSingle(p.startDate || val);
	};
	const today = /* @__PURE__ */ new Date();
	const isCurrentToday = (day) => today.getFullYear() === currentYear && today.getMonth() === currentMonth && today.getDate() === day;
	const getDayDateObj = (day) => new Date(currentYear, currentMonth, day);
	const isStartDay = (day) => {
		if (!rangeStart) return false;
		const d = new Date(rangeStart);
		return d.getFullYear() === currentYear && d.getMonth() === currentMonth && d.getDate() === day;
	};
	const isEndDay = (day) => {
		if (!rangeEnd) return false;
		const d = new Date(rangeEnd);
		return d.getFullYear() === currentYear && d.getMonth() === currentMonth && d.getDate() === day;
	};
	const isInRange = (day) => {
		if (!rangeStart || !rangeEnd) return false;
		const current = getDayDateObj(day);
		const s = new Date(rangeStart);
		const e = new Date(rangeEnd);
		return current > s && current < e;
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: containerRef,
		className: cn("relative w-full", className),
		children: [
			label && /* @__PURE__ */ (void 0)("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (void 0)("label", {
					className: "block text-xs font-semibold uppercase tracking-wider text-slate-700",
					children: [
						label,
						" ",
						required && /* @__PURE__ */ (void 0)("span", {
							className: "text-rose-500",
							children: "*"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 213,
							columnNumber: 34
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 212,
					columnNumber: 11
				}, void 0), /* @__PURE__ */ (void 0)("span", {
					className: "rounded-md bg-[#6A80A9]/10 px-2 py-0.5 text-[10.5px] font-semibold text-[#6A80A9]",
					children: value && (value.includes("to") || value.includes("-")) ? "Date Range (Flex Window)" : "Specific Date"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 215,
					columnNumber: 11
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 211,
				columnNumber: 9
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => setIsOpen(!isOpen),
				className: cn("flex w-full items-center justify-between rounded-[18px] border bg-white/95 px-4 py-3.5 text-sm font-medium transition-all duration-200 text-left", "shadow-xs hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6A80A9]/20", isOpen ? "border-[#6A80A9] ring-2 ring-[#6A80A9]/20" : "border-slate-200/90", error && !value ? "border-rose-400 bg-rose-50/30" : ""),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2.5 min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#E8F1F3] text-[#24828E]",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-4 stroke-[2]" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 236,
							columnNumber: 13
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 235,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: cn("text-[13.5px] truncate", value ? "font-semibold text-slate-900" : "text-slate-400 font-normal"),
						children: value ? displayFormattedDate(value) : "Select loading date or range (e.g. 10–20 Aug)..."
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 238,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 234,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: cn("size-4 shrink-0 text-slate-400 transition-transform duration-200 ml-2", isOpen && "rotate-180 text-black") }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 249,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 224,
				columnNumber: 7
			}, void 0),
			error && !value && /* @__PURE__ */ (void 0)("p", {
				className: "mt-1 text-[11px] font-medium text-rose-500",
				children: error
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 257,
				columnNumber: 27
			}, void 0),
			isOpen && /* @__PURE__ */ (void 0)("div", {
				className: cn("absolute z-50 mt-1.5 w-[290px] sm:w-[305px] rounded-[20px] border border-slate-200/90 bg-white p-3.5", "shadow-[0_16px_40px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.04)] select-none", "animate-in fade-in zoom-in-95 duration-150"),
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "mb-2.5 flex rounded-lg bg-slate-100 p-0.5",
						children: [/* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => setPickerMode("range"),
							className: cn("flex-1 rounded-md py-1 text-[11px] font-bold transition-all text-center", pickerMode === "range" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-800"),
							children: "📅 Date Range"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 270,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => {
								setPickerMode("single");
								if (rangeStart) {
									setRangeEnd("");
									onChange(rangeStart);
								}
							},
							className: cn("flex-1 rounded-md py-1 text-[11px] font-bold transition-all text-center", pickerMode === "single" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-800"),
							children: "Single Date"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 282,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 269,
						columnNumber: 11
					}, void 0),
					pickerMode === "range" && /* @__PURE__ */ (void 0)("div", {
						className: "mb-2.5 rounded-lg border border-[#6A80A9]/20 bg-[#E8F1F3]/80 px-2.5 py-1.5 text-xs",
						children: /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between text-[11px] font-medium text-slate-700",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "font-bold text-[#6A80A9] uppercase tracking-wider text-[10px]",
								children: "Range:"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 306,
								columnNumber: 17
							}, void 0), /* @__PURE__ */ (void 0)("span", {
								className: "font-semibold text-slate-900",
								children: [
									rangeStart ? rangeStart.slice(5) : "Start",
									"  →  ",
									rangeEnd ? rangeEnd.slice(5) : "End"
								]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 309,
								columnNumber: 17
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 305,
							columnNumber: 15
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 304,
						columnNumber: 13
					}, void 0),
					/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between pb-2",
						children: [/* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => setIsMonthSelectorOpen(!isMonthSelectorOpen),
							className: "flex items-center gap-1 text-[13.5px] font-bold text-slate-900 transition-colors hover:text-[#6A80A9]",
							children: [/* @__PURE__ */ (void 0)("span", { children: [
								currentYear,
								"년 ",
								currentMonth + 1,
								"월 (",
								new Date(currentYear, currentMonth, 1).toLocaleString("en-GB", { month: "short" }),
								")"
							] }, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 326,
								columnNumber: 15
							}, void 0), /* @__PURE__ */ (void 0)(ChevronDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 333,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 321,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center rounded-full border border-slate-200/90 bg-white px-1 py-0.5 shadow-xs",
							children: [
								/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: handlePrevMonth,
									className: "flex size-5 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-black",
									"aria-label": "Previous Month",
									children: /* @__PURE__ */ (void 0)(ChevronLeft, { className: "size-3.5 stroke-[2]" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 344,
										columnNumber: 17
									}, void 0)
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 338,
									columnNumber: 15
								}, void 0),
								/* @__PURE__ */ (void 0)("span", { className: "mx-0.5 h-2.5 w-px bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 346,
									columnNumber: 15
								}, void 0),
								/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: handleNextMonth,
									className: "flex size-5 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-black",
									"aria-label": "Next Month",
									children: /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-3.5 stroke-[2]" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 353,
										columnNumber: 17
									}, void 0)
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 347,
									columnNumber: 15
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 337,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 319,
						columnNumber: 11
					}, void 0),
					isMonthSelectorOpen ? /* @__PURE__ */ (void 0)("div", {
						className: "grid grid-cols-3 gap-1.5 py-2",
						children: Array.from({ length: 12 }, (_, i) => /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => {
								setCurrentMonth(i);
								setIsMonthSelectorOpen(false);
							},
							className: cn("rounded-lg py-1.5 text-[11px] font-semibold transition-all", currentMonth === i ? "bg-[#6A80A9] text-white shadow-xs" : "bg-slate-50 text-slate-700 hover:bg-slate-100"),
							children: [
								i + 1,
								"월 (",
								new Date(2026, i, 1).toLocaleString("en-GB", { month: "short" }),
								")"
							]
						}, i, true, {
							fileName: _jsxFileName$6,
							lineNumber: 362,
							columnNumber: 17
						}, void 0))
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 360,
						columnNumber: 13
					}, void 0) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "grid grid-cols-7 text-center pb-1",
							children: WEEKDAYS_EN.map((day, idx) => /* @__PURE__ */ (void 0)("div", {
								className: "text-[10.5px] font-semibold text-slate-400 py-0.5",
								children: day
							}, idx, false, {
								fileName: _jsxFileName$6,
								lineNumber: 385,
								columnNumber: 19
							}, void 0))
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 383,
							columnNumber: 15
						}, void 0),
						/* @__PURE__ */ (void 0)("div", {
							className: "grid grid-cols-7 gap-y-0.5 text-center",
							children: [Array.from({ length: firstDayOfWeek }).map((_, idx) => /* @__PURE__ */ (void 0)("div", { className: "size-7 sm:size-8" }, `empty-${idx}`, false, {
								fileName: _jsxFileName$6,
								lineNumber: 395,
								columnNumber: 19
							}, void 0)), Array.from({ length: daysInMonth }, (_, idx) => {
								const day = idx + 1;
								const isStart = isStartDay(day);
								const isEnd = isEndDay(day);
								const inBetween = isInRange(day);
								const isSingleSelected = pickerMode === "single" && isStart;
								const isToday = isCurrentToday(day);
								return /* @__PURE__ */ (void 0)("div", {
									className: cn("relative flex size-7 sm:size-8 items-center justify-center", inBetween && "bg-[#E8F1F3]/90", isStart && rangeEnd && "rounded-l-full bg-[#E8F1F3]/90", isEnd && rangeStart && "rounded-r-full bg-[#E8F1F3]/90"),
									children: [/* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => handleSelectDay(day),
										className: cn("size-7 sm:size-7.5 rounded-full text-[11.5px] font-medium transition-all duration-150 flex items-center justify-center z-10", isStart || isEnd || isSingleSelected ? "bg-[#6A80A9] text-white font-bold shadow-xs scale-105" : inBetween ? "text-slate-900 font-semibold hover:bg-[#6A80A9]/30" : "text-slate-800 hover:bg-[#E8F1F3] hover:text-[#6A80A9]"),
										children: day
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 417,
										columnNumber: 23
									}, void 0), isToday && !isStart && !isEnd && /* @__PURE__ */ (void 0)("span", { className: "absolute bottom-0.5 size-1 rounded-full bg-[#6A80A9]" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 434,
										columnNumber: 25
									}, void 0)]
								}, day, true, {
									fileName: _jsxFileName$6,
									lineNumber: 408,
									columnNumber: 21
								}, void 0);
							})]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 392,
							columnNumber: 15
						}, void 0),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2",
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => {
									const todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
									setRangeStart(todayStr);
									setRangeEnd("");
									onChange(todayStr);
								},
								className: "text-[11px] font-semibold text-[#6A80A9] hover:underline",
								children: "Today"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 443,
								columnNumber: 17
							}, void 0), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setIsOpen(false),
								className: "rounded-md bg-black px-3 py-1 text-[11px] font-semibold text-white hover:bg-slate-800 transition-colors",
								children: "Done"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 455,
								columnNumber: 17
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 442,
							columnNumber: 15
						}, void 0)
					] }, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 381,
						columnNumber: 13
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 261,
				columnNumber: 9
			}, void 0)
		]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 208,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$5 = "/app/applet/src/components/nashmia/booking/ContainerCargoSection.tsx";
var COMMON_COMMODITIES = [
	"Used Clothing & Textiles",
	"Cotton Yarn & Fabrics",
	"Surgical Instruments",
	"Leather Goods & Footwear",
	"Sports Goods & Accessories",
	"Industrial Hardware"
];
function ContainerCargoSection({ containerSize, onSelectSize, onSelectContainerSize, quantity, onChangeQuantity, productDescription, onChangeProductDescription, loadingDate, onChangeLoadingDate, errors }) {
	const [calendarOpen, setCalendarOpen] = (0, import_react.useState)(false);
	const handleSelectSize = (size) => {
		if (typeof onSelectSize === "function") onSelectSize(size);
		if (typeof onSelectContainerSize === "function") onSelectContainerSize(size);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "section-cargo",
		className: "glass-card rounded-[24px] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-6 flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex size-7 items-center justify-center rounded-lg bg-[#6A80A9]/10 text-xs font-bold text-[#6A80A9]",
							children: "04"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 84,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-xl font-bold tracking-tight text-black sm:text-2xl",
							children: "Container & Cargo"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 87,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 83,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-slate-500 sm:text-sm",
						children: "Add the equipment and cargo details for this movement."
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 91,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 82,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "hidden rounded-full border border-slate-200/80 bg-white/60 px-3 py-1 text-[11px] font-medium text-slate-500 sm:inline-block",
					children: "Equipment Specs"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 95,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 81,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "text-xs font-semibold uppercase tracking-wider text-slate-700",
						children: ["Container Equipment Size ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-rose-500",
							children: "*"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 104,
							columnNumber: 38
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 103,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[11px] text-slate-400",
						children: "Standard ISO Freight Containers"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 106,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 102,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-1 gap-3.5 sm:grid-cols-3",
					children: [
						"20FT",
						"40FT",
						"40HC"
					].map((size) => {
						const spec = CONTAINER_SPECS[size];
						const isSelected = containerSize === size;
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => handleSelectSize(size),
							className: cn("group relative flex flex-col justify-between rounded-[20px] p-4 text-left transition-all duration-200 focus:outline-none", isSelected ? "border-2 border-[#6A80A9] bg-gradient-to-b from-[#6A80A9]/12 via-[#6A80A9]/6 to-white/90 shadow-[0_8px_24px_rgba(106,128,169,0.15),inset_0_1px_1px_rgba(255,255,255,1)]" : "border border-slate-200/80 bg-white/70 hover:border-slate-300 hover:bg-white"),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: cn("flex size-9 items-center justify-center rounded-xl transition-colors", isSelected ? "bg-[#6A80A9] text-white" : "bg-slate-100 text-slate-600"),
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { className: "size-5" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 134,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 128,
										columnNumber: 19
									}, this), isSelected && /* @__PURE__ */ (void 0)("span", {
										className: "flex size-5 items-center justify-center rounded-full bg-[#6A80A9] text-white",
										children: /* @__PURE__ */ (void 0)(Check, { className: "size-3 stroke-[2.5]" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 138,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 137,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 127,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-3 space-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-lg font-bold text-black",
											children: spec.label
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 146,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs font-semibold text-[#6A80A9]",
											children: spec.sublabel
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 147,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 145,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11px] text-slate-500 leading-tight",
										children: spec.description
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 149,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 144,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-3 flex items-center gap-2 border-t border-slate-100/80 pt-2 text-[10px] text-slate-400",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-medium text-slate-600",
											children: spec.cbm
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 154,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 155,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Max ", spec.maxPayload] }, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 156,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 153,
									columnNumber: 17
								}, this)
							]
						}, size, true, {
							fileName: _jsxFileName$5,
							lineNumber: 115,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 109,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 101,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 grid grid-cols-1 gap-5 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-2 md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "text-xs font-semibold uppercase tracking-wider text-slate-700",
							children: ["Container Count ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-rose-500",
								children: "*"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 169,
								columnNumber: 29
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 168,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between rounded-[16px] border border-slate-200/90 bg-white/90 p-2 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => onChangeQuantity(Math.max(1, quantity - 1)),
									disabled: quantity <= 1,
									className: "flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all hover:bg-slate-200 disabled:opacity-40",
									"aria-label": "Decrease quantity",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 179,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 172,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xl font-bold text-black",
										children: quantity
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 182,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[10px] uppercase tracking-wider text-slate-400",
										children: quantity === 1 ? "Unit" : "Units"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 183,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 181,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => onChangeQuantity(quantity + 1),
									className: "flex size-10 items-center justify-center rounded-xl bg-black text-white transition-all hover:bg-slate-800",
									"aria-label": "Increase quantity",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 193,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 187,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 171,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 167,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-2 md:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NashmiaCustomDatePicker, {
							label: "Loading Date",
							required: true,
							value: loadingDate,
							onChange: onChangeLoadingDate,
							error: errors?.loadingDate
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 200,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 199,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-2 md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "text-xs font-semibold uppercase tracking-wider text-slate-700",
								children: ["Product / Contents ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-rose-500",
									children: "*"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 212,
									columnNumber: 32
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 211,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "text",
									value: productDescription,
									onChange: (e) => onChangeProductDescription(e.target.value),
									placeholder: "Describe the cargo (e.g. Used clothing)...",
									className: cn("w-full rounded-[16px] border bg-white/90 px-4 py-3.5 text-sm text-black placeholder:text-slate-400 transition-all focus:border-[#6A80A9] focus:outline-none focus:ring-2 focus:ring-[#6A80A9]/30", errors?.productDescription && !productDescription ? "border-rose-400 bg-rose-50/30" : "border-slate-200/90")
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 215,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 214,
								columnNumber: 11
							}, this),
							errors?.productDescription && !productDescription && /* @__PURE__ */ (void 0)("p", {
								className: "text-[11px] font-medium text-rose-500",
								children: errors.productDescription
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 229,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 210,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 165,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3.5 flex flex-wrap items-center gap-1.5 border-t border-slate-100/80 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-[11px] font-medium text-slate-400",
					children: "Cargo Presets:"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 236,
					columnNumber: 9
				}, this), COMMON_COMMODITIES.slice(0, 4).map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onChangeProductDescription(c),
					className: "rounded-full border border-slate-200/80 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-colors hover:border-[#6A80A9]/50 hover:bg-[#E8F1F3]/50 hover:text-black",
					children: ["+ ", c]
				}, c, true, {
					fileName: _jsxFileName$5,
					lineNumber: 238,
					columnNumber: 11
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 235,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 76,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/nashmia/booking/SpecialInstructionsSection.tsx";
function SpecialInstructionsSection({ instructions, onChangeInstructions }) {
	const handleAddPreset = (preset) => {
		if (!instructions.trim()) onChangeInstructions(preset);
		else if (!instructions.includes(preset)) onChangeInstructions(`${instructions.trim()}\n• ${preset}`);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "section-instructions",
		className: "glass-card rounded-[24px] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-6 flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex size-7 items-center justify-center rounded-lg bg-[#6A80A9]/10 text-xs font-bold text-[#6A80A9]",
							children: "05"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 30,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-xl font-bold tracking-tight text-black sm:text-2xl",
							children: "Special Instructions"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 33,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 29,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-slate-500 sm:text-sm",
						children: "Anything the booking agent should know?"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 37,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 28,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "hidden rounded-full border border-slate-200/80 bg-white/60 px-3 py-1 text-[11px] font-medium text-slate-500 sm:inline-block",
					children: "Forwarder Direct"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 41,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 27,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
					rows: 4,
					value: instructions,
					onChange: (e) => onChangeInstructions(e.target.value),
					placeholder: "Add special instructions for this booking (e.g. Please confirm availability before vessel cut-off)...",
					className: "w-full rounded-[20px] border border-slate-200/90 bg-white/90 p-4.5 text-sm leading-relaxed text-black placeholder:text-slate-400 shadow-sm transition-all focus:border-[#6A80A9] focus:outline-none focus:ring-2 focus:ring-[#6A80A9]/30"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 48,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 47,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3 text-[#6A80A9]" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 60,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Operational Standard Clauses (Click to insert):" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 61,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 59,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap gap-2",
					children: PRESET_INSTRUCTIONS.map((preset, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => handleAddPreset(preset),
						className: "inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/80 px-3 py-1.5 text-left text-xs font-medium text-slate-700 transition-all hover:border-[#6A80A9]/60 hover:bg-[#E8F1F3]/60 hover:text-black",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageSquarePlus, { className: "size-3 text-[#6A80A9] shrink-0" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 72,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: preset }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 73,
							columnNumber: 15
						}, this)]
					}, idx, true, {
						fileName: _jsxFileName$4,
						lineNumber: 66,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 64,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 58,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/nashmia/booking/BookingSummaryCard.tsx";
function BookingSummaryCard({ reference, buyer, supplier, pol, pod, shippingLine, bookingAgent, selectedBookingAgents, containerSize, quantity, loadingDate, matchedRate, rateMode = "AGREED_RATE", customRate = null, currency = "USD", onSubmit, onSaveDraft, isSubmitting = false }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const handleCopyRef = () => {
		navigator.clipboard.writeText(reference);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	const effectiveRate = customRate !== null && customRate !== void 0 ? customRate : matchedRate ? matchedRate.ratePerContainer : null;
	const totalFreight = effectiveRate !== null ? effectiveRate * quantity : null;
	const formattedDate = (() => {
		if (!loadingDate) return "18 Aug 2026";
		if (loadingDate.includes(" to ") || loadingDate.includes(" - ")) {
			const [start, end] = loadingDate.includes(" to ") ? loadingDate.split(" to ") : loadingDate.split(" - ");
			const d1 = new Date(start?.trim());
			const d2 = new Date(end?.trim());
			if (!isNaN(d1.getTime()) && !isNaN(d2.getTime())) {
				if (d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()) return `${d1.getDate()}–${d2.getDate()} ${d1.toLocaleString("en-GB", { month: "short" })} ${d1.getFullYear()}`;
				return `${d1.getDate()} ${d1.toLocaleString("en-GB", { month: "short" })} – ${d2.getDate()} ${d2.toLocaleString("en-GB", { month: "short" })} ${d2.getFullYear()}`;
			}
			return loadingDate;
		}
		const d = new Date(loadingDate);
		return isNaN(d.getTime()) ? loadingDate : d.toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric"
		});
	})();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
		className: "sticky top-6 rounded-[24px] border border-white/90 bg-gradient-to-b from-white/95 via-white/85 to-[#E8F1F3]/40 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06),inset_0_1px_2px_rgba(255,255,255,1)] backdrop-blur-2xl transition-all duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border-b border-slate-100 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-lg font-bold tracking-tight text-black",
						children: "Booking Summary"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 121,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "inline-flex items-center gap-1 rounded-full border border-[#6A80A9]/30 bg-[#6A80A9]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#6A80A9]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-2.5" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 123,
							columnNumber: 13
						}, this), "Live Preview"]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 122,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 120,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-0.5 text-xs text-slate-500",
					children: "Review before creating the movement."
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 127,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 119,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 rounded-[18px] border border-slate-200/70 bg-white/80 p-3.5 shadow-sm backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "size-3 text-slate-400" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 134,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Movement Reference" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 135,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 133,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleCopyRef,
						className: "flex items-center gap-1 text-[10px] font-medium text-[#6A80A9] hover:underline",
						children: copied ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3 text-emerald-600" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 144,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-emerald-600",
							children: "Copied"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 145,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 143,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "size-3" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 149,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Copy" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 150,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 148,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 137,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 132,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-1 flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						suppressHydrationWarning: true,
						className: "text-xl font-black tracking-tight text-black sm:text-2xl font-mono",
						children: reference
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 156,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[10px] font-medium text-slate-400",
						children: "Automatically generated"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 162,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 155,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 131,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 space-y-3 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between py-1 border-b border-slate-100/80",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex items-center gap-1.5 text-slate-500",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "size-3.5 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 171,
								columnNumber: 13
							}, this), "Buyer"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 170,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-semibold text-black",
							children: buyer ? buyer.name : "—"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 174,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 169,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between py-1 border-b border-slate-100/80",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex items-center gap-1.5 text-slate-500",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Warehouse, { className: "size-3.5 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 180,
								columnNumber: 13
							}, this), "Supplier"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 179,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-semibold text-black",
							children: supplier ? supplier.name : "—"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 183,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 178,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between py-1 border-b border-slate-100/80",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex items-center gap-1.5 text-slate-500",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "size-3.5 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 189,
								columnNumber: 13
							}, this), "Load Point"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 188,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-semibold text-black text-right truncate max-w-[150px]",
							children: supplier ? supplier.loadPoint : "—"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 192,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 187,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between py-1 border-b border-slate-100/80",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex items-center gap-1.5 text-slate-500",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Route, { className: "size-3.5 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 200,
								columnNumber: 13
							}, this), "Route"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 199,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-semibold text-black",
							children: pol && pod ? `${pol.name} → ${pod.name}` : pol ? `${pol.code} → —` : "—"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 203,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 198,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between py-1 border-b border-slate-100/80",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex items-center gap-1.5 text-slate-500",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-3.5 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 211,
								columnNumber: 13
							}, this), "Shipping Line"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 210,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-semibold text-black",
							children: shippingLine ? shippingLine.name : "—"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 214,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 209,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between py-1 border-b border-slate-100/80",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex items-center gap-1.5 text-slate-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Receipt, { className: "size-3.5 text-slate-400" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 220,
									columnNumber: 13
								}, this),
								"Forwarder",
								selectedBookingAgents && selectedBookingAgents.length > 1 ? "s" : ""
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 219,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-semibold text-black text-right max-w-[180px] truncate",
							title: selectedBookingAgents && selectedBookingAgents.length > 1 ? selectedBookingAgents.map((a) => a.name).join(", ") : bookingAgent?.name || "",
							children: selectedBookingAgents && selectedBookingAgents.length > 1 ? `${selectedBookingAgents.length} Forwarders (${selectedBookingAgents.map((a) => a.name).join(", ")})` : bookingAgent ? bookingAgent.name : "—"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 223,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 218,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between py-1 border-b border-slate-100/80",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex items-center gap-1.5 text-slate-500",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "size-3.5 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 242,
								columnNumber: 13
							}, this), "Equipment"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 241,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-semibold text-black",
							children: [
								containerSize,
								" × ",
								quantity
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 245,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 240,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between py-1 border-b border-slate-100/80",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex items-center gap-1.5 text-slate-500",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-3.5 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 253,
								columnNumber: 13
							}, this), "Loading Date"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 252,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-semibold text-black",
							children: formattedDate
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 256,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 251,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between py-1 border-b border-slate-100/80",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex items-center gap-1.5 text-slate-500",
							children: [rateMode === "ASKING_RATE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleQuestionMark, { className: "size-3.5 text-[#6A80A9]" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 263,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Receipt, { className: "size-3.5 text-[#2D3C26]" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 265,
								columnNumber: 15
							}, this), "Freight Mode"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 261,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: cn("font-semibold rounded-md px-2 py-0.5 text-[11px]", rateMode === "ASKING_RATE" ? "bg-[#6A80A9]/10 text-[#374b6e]" : "bg-[#C7D5BF]/30 text-[#2D3C26]"),
							children: rateMode === "ASKING_RATE" ? "Asking Rate" : "Agreed Rate"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 269,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 260,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 167,
				columnNumber: 7
			}, this),
			rateMode === "ASKING_RATE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 rounded-[18px] border border-[#6A80A9]/30 bg-gradient-to-br from-[#6A80A9]/10 via-white/90 to-[#E8F1F3]/40 p-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[11px] font-bold uppercase tracking-wider text-[#374b6e]",
						children: "Rate Inquiry Status"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 286,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full bg-[#6A80A9]/15 px-2 py-0.5 text-[9px] font-bold text-[#374b6e]",
						children: "Asking Rate"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 289,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 285,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xl font-black tracking-tight text-black sm:text-2xl",
						children: "Quotation Requested"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 295,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-[11px] text-slate-600 leading-tight",
						children: "The freight forwarder will be asked to provide the freight rate."
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 298,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 294,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 284,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 rounded-[18px] border border-[#C7D5BF]/90 bg-gradient-to-br from-[#C7D5BF]/20 via-white/90 to-[#E8F1F3]/30 p-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[11px] font-bold uppercase tracking-wider text-[#2D3C26]",
						children: "Agreed Total Freight"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 306,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full bg-[#2D3C26]/10 px-2 py-0.5 text-[9px] font-bold text-[#2D3C26]",
						children: customRate ? "Custom agreed rate" : "Monthly rate card"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 309,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 305,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-2 flex items-baseline justify-between",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-2xl font-black tracking-tight text-black sm:text-3xl",
						children: totalFreight !== null ? `$${totalFreight.toLocaleString()}` : "Rate Pending"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 316,
						columnNumber: 15
					}, this), effectiveRate !== null && /* @__PURE__ */ (void 0)("p", {
						className: "text-[11px] text-slate-600",
						children: [
							"$",
							effectiveRate.toLocaleString(),
							" ",
							currency,
							" × ",
							quantity,
							" container",
							quantity > 1 ? "s" : ""
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 320,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 315,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 314,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 304,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 space-y-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onSubmit,
					disabled: isSubmitting,
					className: "group relative flex h-[54px] w-full items-center justify-center gap-2 rounded-[14px] bg-black font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-xl active:translate-y-0 disabled:opacity-50",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Create Booking" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 339,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 340,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 333,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onSaveDraft,
					disabled: isSubmitting,
					className: "flex h-[46px] w-full items-center justify-center gap-1.5 rounded-[14px] border border-slate-200/90 bg-white/80 text-xs font-semibold text-slate-800 shadow-sm transition-all hover:bg-white hover:border-slate-300",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bookmark, { className: "size-3.5 text-slate-500" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 350,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Save as Draft" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 351,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 344,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 331,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-center text-[10px] text-slate-400",
				children: "Creates a formal electronic booking request in the Nashmia Movement Registry."
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 356,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 117,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/nashmia/booking/BookingEmailPreviewModal.tsx";
var AVATAR_BG_COLORS = [
	"from-amber-400 to-orange-500",
	"from-blue-500 to-indigo-600",
	"from-emerald-400 to-teal-600",
	"from-purple-400 to-pink-500",
	"from-rose-400 to-red-500",
	"from-cyan-400 to-blue-500"
];
function getInitials(name) {
	if (!name) return "NI";
	const parts = name.trim().split(/\s+/);
	if (parts.length >= 2 && parts[0] && parts[1]) return (parts[0][0] + parts[1][0]).toUpperCase();
	return name.slice(0, 2).toUpperCase();
}
function getFileType(fileName) {
	const ext = fileName.split(".").pop()?.toLowerCase();
	if (ext === "pptx" || ext === "ppt") return "pptx";
	if (ext === "docx" || ext === "doc" || ext === "word") return "docx";
	if (ext === "xlsx" || ext === "xls" || ext === "csv") return "xlsx";
	if (ext === "pdf") return "pdf";
	return "other";
}
function BookingEmailPreviewModal({ isOpen, onClose, reference, buyer, supplier, pol, pod, shippingLine, bookingAgent, selectedBookingAgents, containerSize, quantity, loadingDate, productDescription, instructions, matchedRate, rateMode = "AGREED_RATE", customRate = null, currency = "USD", onSuccess, onSaveDraft }) {
	const { user, userId, profile } = useAuth();
	const { googleEmail, displayName: gmailName, avatarUrl: gmailAvatar } = useGmail();
	const queryClient = useQueryClient();
	const fileInputRef = (0, import_react.useRef)(null);
	const fromEmail = (0, import_react.useMemo)(() => {
		return googleEmail || user?.email || profile?.email || "operations@nashmia-logistics.com";
	}, [
		googleEmail,
		user?.email,
		profile?.email
	]);
	const senderDisplayName = (0, import_react.useMemo)(() => {
		return gmailName || profile?.full_name || profile?.name || user?.email?.split("@")[0] || "Nashmia Logistics Operations";
	}, [
		gmailName,
		profile,
		user?.email
	]);
	const senderInitials = (0, import_react.useMemo)(() => {
		return getInitials(senderDisplayName);
	}, [senderDisplayName]);
	const forwardersList = (0, import_react.useMemo)(() => {
		if (selectedBookingAgents && selectedBookingAgents.length > 0) return selectedBookingAgents;
		return bookingAgent ? [bookingAgent] : [];
	}, [selectedBookingAgents, bookingAgent]);
	const forwarderContact = (0, import_react.useMemo)(() => {
		if (forwardersList.length === 0) return "Booking Team";
		if (forwardersList.length === 1) return forwardersList[0].contactPerson || forwardersList[0].contact || `${forwardersList[0].name} Booking Team`;
		return forwardersList.map((f) => f.name).join(" & ") + " Booking Teams";
	}, [forwardersList]);
	const loadPoint = (0, import_react.useMemo)(() => {
		if (supplier?.loadPoint) return supplier.loadPoint;
		if (supplier?.city) return `${supplier.city} Warehouse`;
		return supplier?.name ? `${supplier.name} Facility` : "Origin Loading Depot";
	}, [supplier]);
	const polLabel = (0, import_react.useMemo)(() => {
		return pol ? `${pol.code || ""} (${pol.name})`.trim() : "Port of Loading";
	}, [pol]);
	const podLabel = (0, import_react.useMemo)(() => {
		return pod ? `${pod.code || ""} (${pod.name})`.trim() : "Port of Discharge";
	}, [pod]);
	const effectiveCurrency = currency || matchedRate?.currency || "USD";
	const effectiveRatePerContainer = customRate !== null && customRate !== void 0 ? customRate : matchedRate?.ratePerContainer || 0;
	const effectiveTotalFreight = effectiveRatePerContainer * quantity;
	const formattedLoadingDate = (0, import_react.useMemo)(() => {
		if (!loadingDate) return "Prompt / As Scheduled";
		if (loadingDate.includes(" to ") || loadingDate.includes(" - ")) {
			const [start, end] = loadingDate.includes(" to ") ? loadingDate.split(" to ") : loadingDate.split(" - ");
			const d1 = new Date(start?.trim());
			const d2 = new Date(end?.trim());
			if (!isNaN(d1.getTime()) && !isNaN(d2.getTime())) {
				if (d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()) return `${d1.getDate()}–${d2.getDate()} ${d1.toLocaleString("en-GB", { month: "short" })} ${d1.getFullYear()} (Flexible Window)`;
				return `${d1.getDate()} ${d1.toLocaleString("en-GB", { month: "short" })} – ${d2.getDate()} ${d2.toLocaleString("en-GB", { month: "short" })} ${d2.getFullYear()} (Window)`;
			}
			return loadingDate;
		}
		try {
			const d = new Date(loadingDate);
			if (isNaN(d.getTime())) return loadingDate;
			return d.toLocaleDateString("en-GB", {
				day: "numeric",
				month: "short",
				year: "numeric"
			});
		} catch {
			return loadingDate;
		}
	}, [loadingDate]);
	const defaultSubject = (0, import_react.useMemo)(() => {
		if (rateMode === "ASKING_RATE") return `Freight Rate Request: ${reference} | ${polLabel} → ${podLabel}`;
		return `Booking Request & Shipping Instruction: ${reference}`;
	}, [
		reference,
		rateMode,
		polLabel,
		podLabel
	]);
	const generateEmailBody = () => {
		if (rateMode === "ASKING_RATE") return `Dear ${forwarderContact},\n\nPlease provide your best ocean freight quotation for Movement ${reference}:\n\n• Route: ${polLabel} to ${podLabel}\n• Shipper / Facility: ${supplier?.name || "Supplier Point"} (${loadPoint})\n• Consignee: ${buyer?.name || "Consignee Account"}\n• Equipment: ${quantity}x ${containerSize}\n• Requested ETD: ${formattedLoadingDate}\n${productDescription ? `• Commodity: ${productDescription}\n` : ""}${instructions ? `• Special Instructions: ${instructions}\n` : ""}\nKindly share your earliest available vessel schedule, transit time, and detention/demurrage free days.\n\nBest regards,\n${senderDisplayName}\nNashmia Global Logistics`;
		return `Dear ${forwarderContact},\n\nPlease arrange booking and container placement for Movement ${reference}:\n\n• Route: ${polLabel} to ${podLabel}\n• Shipping Line: ${shippingLine?.name || "Direct Carrier"}\n• Equipment: ${quantity}x ${containerSize}\n• Loading Date: ${formattedLoadingDate}\n• Shipper: ${supplier?.name || "Supplier Point"} (${loadPoint})\n• Consignee: ${buyer?.name || "Consignee Account"}\n${effectiveRatePerContainer > 0 ? `• Agreed Freight Rate: ${effectiveCurrency} ${effectiveRatePerContainer.toLocaleString()} / container (Total: ${effectiveCurrency} ${effectiveTotalFreight.toLocaleString()})\n` : ""}${instructions ? `• Booking Notes: ${instructions}\n` : ""}\nPlease confirm vessel space and share booking confirmation number at your earliest convenience.\n\nBest regards,\n${senderDisplayName}\nNashmia Global Logistics`;
	};
	const [subject, setSubject] = (0, import_react.useState)(defaultSubject);
	const [body, setBody] = (0, import_react.useState)(generateEmailBody());
	const [isMaximized, setIsMaximized] = (0, import_react.useState)(false);
	const [showCcBcc, setShowCcBcc] = (0, import_react.useState)(false);
	const [cc, setCc] = (0, import_react.useState)("");
	const [bcc, setBcc] = (0, import_react.useState)("");
	const [isScheduleOpen, setIsScheduleOpen] = (0, import_react.useState)(false);
	const [scheduleDate, setScheduleDate] = (0, import_react.useState)("");
	const [recipients, setRecipients] = (0, import_react.useState)([]);
	const [isAddingRecipient, setIsAddingRecipient] = (0, import_react.useState)(false);
	const [recipientInput, setRecipientInput] = (0, import_react.useState)("");
	const [attachments, setAttachments] = (0, import_react.useState)([
		{
			id: "att-1",
			name: `${reference || "Shipment"}_Specification.docx`,
			size: "1.2 MB",
			type: "docx"
		},
		{
			id: "att-2",
			name: `${reference || "Shipment"}_Rate_Schedule.xlsx`,
			size: "340 KB",
			type: "xlsx"
		},
		{
			id: "att-3",
			name: `${reference || "Shipment"}_Cargo_Manifest.pdf`,
			size: "2.4 MB",
			type: "pdf"
		}
	]);
	const [isProcessModalOpen, setIsProcessModalOpen] = (0, import_react.useState)(false);
	const [processItems, setProcessItems] = (0, import_react.useState)([]);
	const createdBookingRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (forwardersList.length > 0) {
			const mapped = forwardersList.map((f, idx) => ({
				id: f.id || `fwd-${idx}`,
				name: f.name,
				email: f.email || `${f.name.toLowerCase().replace(/\s+/g, "")}@freight.com`,
				avatarBg: AVATAR_BG_COLORS[idx % AVATAR_BG_COLORS.length]
			}));
			setRecipients(mapped);
		} else setRecipients([]);
	}, [forwardersList]);
	(0, import_react.useEffect)(() => {
		setSubject(defaultSubject);
		setBody(generateEmailBody());
		setAttachments([
			{
				id: "att-1",
				name: `${reference || "Shipment"}_Specification.docx`,
				size: "1.2 MB",
				type: "docx"
			},
			{
				id: "att-2",
				name: `${reference || "Shipment"}_Rate_Schedule.xlsx`,
				size: "340 KB",
				type: "xlsx"
			},
			{
				id: "att-3",
				name: `${reference || "Shipment"}_Cargo_Manifest.pdf`,
				size: "2.4 MB",
				type: "pdf"
			}
		]);
	}, [
		reference,
		forwarderContact,
		buyer?.name,
		supplier?.name,
		loadPoint,
		polLabel,
		podLabel,
		shippingLine?.name,
		containerSize,
		quantity,
		formattedLoadingDate,
		effectiveCurrency,
		effectiveRatePerContainer,
		effectiveTotalFreight,
		rateMode,
		instructions
	]);
	const handleRemoveRecipient = (id) => {
		setRecipients((prev) => prev.filter((r) => r.id !== id));
	};
	const handleCreateCustomRecipient = () => {
		if (!recipientInput.trim()) {
			setIsAddingRecipient(false);
			return;
		}
		const val = recipientInput.trim();
		const newRec = {
			id: `custom-${Date.now()}`,
			name: val.includes("@") ? val.split("@")[0].replace(/[._-]/g, " ") : val,
			email: val.includes("@") ? val : `${val.toLowerCase().replace(/\s+/g, "")}@forwarder.com`,
			avatarBg: AVATAR_BG_COLORS[recipients.length % AVATAR_BG_COLORS.length]
		};
		setRecipients((prev) => [...prev, newRec]);
		setRecipientInput("");
		setIsAddingRecipient(false);
	};
	const handleFileUpload = (e) => {
		const files = e.target.files;
		if (!files || files.length === 0) return;
		const newAtts = Array.from(files).map((file, idx) => ({
			id: `upload-${Date.now()}-${idx}`,
			name: file.name,
			size: `${(file.size / 1048576).toFixed(1)} MB`,
			type: getFileType(file.name),
			file
		}));
		setAttachments((prev) => [...prev, ...newAtts]);
		showPillToast.success(`Attached ${files.length} file${files.length > 1 ? "s" : ""}`, "File Attached");
	};
	const handleRemoveAttachment = (id) => {
		setAttachments((prev) => prev.filter((a) => a.id !== id));
	};
	const handleSend = async () => {
		if (recipients.length === 0) {
			toast.error("Recipient required", { description: "Please specify at least one forwarder recipient to send this booking email." });
			return;
		}
		const items = recipients.map((r, idx) => ({
			id: r.id.startsWith("custom-") || r.id.startsWith("fwd-") ? `target-${idx}-${Date.now()}` : r.id,
			name: r.name,
			email: r.email,
			contactName: `${r.name} Desk`,
			status: "Waiting"
		}));
		createdBookingRef.current = null;
		setProcessItems(items);
		setIsProcessModalOpen(true);
	};
	const handleSendSingleForwarder = async (item) => {
		try {
			let bRecord = createdBookingRef.current;
			if (!bRecord) {
				bRecord = await createBookingInSupabase(userId, {
					reference,
					bookingReference: reference,
					movementNumber: reference,
					buyerId: buyer?.id,
					buyerName: buyer?.name,
					buyerCountry: buyer?.country,
					supplierId: supplier?.id,
					supplierName: supplier?.name,
					supplierCity: supplier?.city,
					forwarderId: rateMode === "AGREED_RATE" && forwardersList.length === 1 ? forwardersList[0]?.id || bookingAgent?.id : void 0,
					forwarderName: rateMode === "AGREED_RATE" && forwardersList.length === 1 ? forwardersList[0]?.name || bookingAgent?.name : "Pending Award",
					shippingLineId: shippingLine?.id,
					shippingLineName: shippingLine?.name,
					rateCardId: matchedRate?.id,
					origin: pol?.name || pol?.code || "Felixstowe (FXT)",
					destination: pod?.name || pod?.code || "Karachi (KHI)",
					polName: pol?.name || "Felixstowe (FXT)",
					podName: pod?.name || "Karachi (KHI)",
					polCode: pol?.code || "FXT",
					podCode: pod?.code || "KHI",
					containerSize,
					containerType: "High Cube",
					containerCount: quantity,
					loadingDate,
					requestedEtd: loadingDate,
					productDescription: productDescription || "Export Cargo",
					notes: instructions || "",
					rateMode,
					freightRateMode: rateMode,
					customRate: rateMode === "ASKING_RATE" ? null : effectiveRatePerContainer,
					totalFreight: rateMode === "ASKING_RATE" ? null : effectiveTotalFreight,
					currency: effectiveCurrency,
					status: rateMode === "ASKING_RATE" ? "Booking Requested" : "Booking Confirmed",
					allocatedForwarders: forwardersList.map((f) => ({
						id: f.id,
						name: f.name,
						email: f.email
					}))
				});
				createdBookingRef.current = bRecord;
			}
			const forwarderObj = forwardersList.find((f) => f.id === item.id || f.email && f.email.toLowerCase() === item.email.toLowerCase() || f.name.toLowerCase() === item.name.toLowerCase());
			const recipientName = forwarderObj?.name || item.name;
			const sendResult = await sendEmailThroughBackend({
				userId,
				toEmail: item.email,
				toName: recipientName,
				subject,
				bodyText: body,
				bookingId: bRecord?.id,
				bookingReference: reference,
				movementNumber: reference,
				templateType: rateMode === "ASKING_RATE" ? "rate_request" : "booking_request",
				attachments: attachments.map((a) => ({
					name: a.name,
					size: a.size,
					type: a.type
				})),
				cc: cc || void 0,
				bcc: bcc || void 0
			});
			try {
				const allExisting = getLocalForwarderRequests();
				const trackingKey = buildTrackingCompositeKey(reference, forwarderObj?.id || item.id, item.email);
				const newFwdRecord = {
					id: `fr-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
					trackingCompositeKey: trackingKey,
					bookingId: bRecord?.id,
					movementNumber: reference,
					bookingReference: reference,
					forwarderId: forwarderObj?.id || item.id,
					forwarderName: recipientName,
					forwarderEmail: item.email,
					contactPerson: item.contactName,
					origin: pol?.name || pol?.code,
					destination: pod?.name || pod?.code,
					containerSize,
					containerType: "High Cube",
					containerCount: quantity,
					status: rateMode === "AGREED_RATE" && effectiveRatePerContainer > 0 ? "Quoted" : "Pending",
					hasOffer: rateMode === "AGREED_RATE" && effectiveRatePerContainer > 0,
					sentAt: (/* @__PURE__ */ new Date()).toISOString(),
					sentVia: sendResult.success ? "Gmail Direct" : "Simulated Outbox",
					offerData: rateMode === "AGREED_RATE" && effectiveRatePerContainer > 0 ? {
						ratePerContainer: effectiveRatePerContainer,
						totalFreight: effectiveTotalFreight,
						currency: effectiveCurrency,
						carrier: shippingLine?.name || "Direct Line",
						receivedAt: (/* @__PURE__ */ new Date()).toISOString(),
						receivedVia: "Agreed Tariff"
					} : void 0,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				};
				const filteredExisting = allExisting.filter((r) => !((r.bookingId === newFwdRecord.bookingId || r.movementNumber === newFwdRecord.movementNumber) && r.forwarderEmail.toLowerCase() === newFwdRecord.forwarderEmail.toLowerCase()));
				filteredExisting.unshift(newFwdRecord);
				saveLocalForwarderRequests(filteredExisting);
			} catch (fwdRecErr) {
				console.warn("[BookingEmailPreviewModal] Notice creating forwarder record:", fwdRecErr);
			}
			queryClient.invalidateQueries({ queryKey: EMAILS_QUERY_KEY });
			queryClient.invalidateQueries({ queryKey: ["dashboard-data"] });
			queryClient.invalidateQueries({ queryKey: ["dashboard-bookings"] });
			queryClient.invalidateQueries({ queryKey: ["forwarder-offer-cards"] });
			queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
			queryClient.invalidateQueries({ queryKey: ["operational-bookings"] });
			queryClient.invalidateQueries({ queryKey: ["bookings"] });
			queryClient.invalidateQueries({ queryKey: ["movements"] });
			if (typeof window !== "undefined") {
				window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: {
					updated: true,
					id: bRecord?.id,
					movementNumber: reference,
					bookingReference: reference
				} }));
				window.dispatchEvent(new CustomEvent("supabase_realtime_bookings_change", { detail: {
					updated: true,
					id: bRecord?.id,
					movementNumber: reference,
					bookingReference: reference
				} }));
				window.dispatchEvent(new CustomEvent("nashmia_forwarder_offers_updated", { detail: { timestamp: Date.now() } }));
			}
			return {
				success: sendResult.success,
				gmailMessageId: sendResult.gmailMessageId,
				gmailThreadId: sendResult.gmailThreadId,
				errorMessage: sendResult.errorMessage
			};
		} catch (err) {
			return {
				success: false,
				errorMessage: err instanceof Error ? err.message : "Failed to record and send booking request."
			};
		}
	};
	const handleProcessModalClose = () => {
		setIsProcessModalOpen(false);
		const bRecord = createdBookingRef.current;
		if (bRecord) onSuccess({
			success: true,
			bookingId: bRecord.id,
			reference: bRecord.booking_reference || reference,
			movementNumber: bRecord.movement_number || reference,
			toEmail: recipients.map((r) => r.email).join(", "),
			gmailStatus: "sent",
			forwardersCount: processItems.length
		});
		onClose();
	};
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const originalStyle = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = originalStyle;
		};
	}, [isOpen]);
	(0, import_react.useEffect)(() => {
		if (!isOpen || isProcessModalOpen) return;
		const handleEscape = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleEscape);
		return () => window.removeEventListener("keydown", handleEscape);
	}, [
		isOpen,
		isProcessModalOpen,
		onClose
	]);
	if (!isOpen) return null;
	if (typeof document === "undefined") return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 transition-opacity animate-in fade-in duration-200",
			onClick: onClose
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 660,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("fixed z-50 bg-white shadow-2xl transition-all flex flex-col justify-between overflow-hidden text-slate-900 outline-none", isMaximized ? "inset-2 sm:inset-4 w-auto h-auto rounded-[20px] p-5 sm:p-6 border border-slate-200/80" : "inset-x-0 bottom-0 top-auto translate-x-0 translate-y-0 w-full max-h-[92vh] rounded-t-[28px] rounded-b-none border-t border-x-0 border-b-0 border-slate-200/90 p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] animate-in slide-in-from-bottom duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-[660px] sm:max-h-[92vh] sm:min-h-[580px] sm:rounded-[28px] sm:border sm:border-slate-200/80 sm:p-6 sm:slide-in-from-bottom-0 sm:zoom-in-95 sm:duration-150"),
			onClick: (e) => e.stopPropagation(),
			children: [
				!isMaximized && /* @__PURE__ */ (void 0)("div", {
					"data-swipe-handle": "true",
					className: "mx-auto -mt-2 mb-2 flex h-6 w-full max-w-[140px] cursor-grab touch-none items-center justify-center sm:hidden select-none shrink-0",
					"aria-label": "Drag down to dismiss",
					children: /* @__PURE__ */ (void 0)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 682,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 677,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between pb-3.5 border-b border-slate-100",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-8 rounded-full bg-slate-100 grid place-items-center text-slate-700",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 690,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 689,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-bold text-[15px] text-slate-900 tracking-tight",
							children: "Compose email"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 692,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 688,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1.5 text-slate-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: onClose,
								className: "p-1 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors",
								title: "Minimize",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 704,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 698,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setIsMaximized(!isMaximized),
								className: "p-1 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors",
								title: isMaximized ? "Restore" : "Maximize",
								children: isMaximized ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minimize2, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 712,
									columnNumber: 30
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize2, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 712,
									columnNumber: 65
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 706,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: onClose,
								className: "p-1 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors",
								title: "Close",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 720,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 714,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 697,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 687,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between py-2.5 border-b border-slate-100",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-slate-400 text-xs font-normal w-10 shrink-0",
							children: "From"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 728,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2.5",
							children: [gmailAvatar ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: gmailAvatar,
								alt: senderDisplayName,
								className: "size-7 rounded-full object-cover border border-slate-200",
								referrerPolicy: "no-referrer"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 731,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-7 rounded-full bg-[#0FA3B1] text-white text-[11px] font-bold grid place-items-center shrink-0",
								children: senderInitials
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 738,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5 flex-wrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[13px] font-bold text-slate-900",
										children: senderDisplayName
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 743,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "inline-grid place-items-center size-3.5 rounded-full bg-[#0084FF] text-white shrink-0",
										title: "Verified Sender",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-2.5 stroke-[3]" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 748,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 744,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[12px] text-slate-400 font-normal",
										children: [
											"(",
											fromEmail,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 750,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 742,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 729,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 727,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-4 text-slate-400" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 754,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 726,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start justify-between py-2.5 border-b border-slate-100 gap-2 min-h-[44px]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3 flex-wrap flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-400 text-xs font-normal w-10 shrink-0 pt-0.5",
								children: "To"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 760,
								columnNumber: 13
							}, this),
							recipients.map((rec) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "inline-flex items-center gap-1.5 bg-slate-100/90 hover:bg-slate-200/80 rounded-full pl-1 pr-2 py-0.5 text-xs transition-colors border border-slate-200/50",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: cn("size-5 rounded-full text-white text-[9px] font-bold grid place-items-center bg-gradient-to-tr shrink-0", rec.avatarBg),
										children: getInitials(rec.name)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 768,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-slate-800 text-[11.5px] max-w-[140px] truncate",
										children: rec.name
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 776,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => handleRemoveRecipient(rec.id),
										className: "text-slate-400 hover:text-slate-700 rounded-full p-0.5 transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 784,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 779,
										columnNumber: 17
									}, this)
								]
							}, rec.id, true, {
								fileName: _jsxFileName$2,
								lineNumber: 764,
								columnNumber: 15
							}, this)),
							isAddingRecipient ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative inline-flex items-center",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "text",
									autoFocus: true,
									value: recipientInput,
									onChange: (e) => setRecipientInput(e.target.value),
									onKeyDown: (e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											handleCreateCustomRecipient();
										} else if (e.key === "Escape") setIsAddingRecipient(false);
									},
									placeholder: "Type name or email...",
									className: "text-[12px] bg-white border border-[#0FA3B1] rounded-full px-2.5 py-0.5 focus:outline-none w-48"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 792,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 791,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setIsAddingRecipient(true),
								className: "inline-flex items-center gap-1 text-[11.5px] text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 border border-dashed border-slate-200 rounded-full px-2 py-0.5 transition-colors cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 815,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Add" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 816,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 810,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 759,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setShowCcBcc(!showCcBcc),
						className: "text-[12px] text-slate-400 hover:text-slate-600 font-medium cursor-pointer ml-auto shrink-0 select-none pt-0.5",
						children: showCcBcc ? "Hide CC / BCC" : "Add CC / BCC"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 822,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 758,
					columnNumber: 9
				}, this),
				showCcBcc && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-2 py-1.5 text-xs animate-in fade-in duration-150 border-b border-slate-100",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "text-slate-400 font-normal w-10 shrink-0",
							children: "CC"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 835,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("input", {
							type: "text",
							value: cc,
							onChange: (e) => setCc(e.target.value),
							placeholder: "CC recipients (comma separated)",
							className: "flex-1 text-[12px] text-slate-800 bg-slate-50/50 border border-slate-200 rounded-lg px-2.5 py-1 focus:outline-none focus:border-slate-400"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 836,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 834,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "text-slate-400 font-normal w-10 shrink-0",
							children: "BCC"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 845,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("input", {
							type: "text",
							value: bcc,
							onChange: (e) => setBcc(e.target.value),
							placeholder: "BCC recipients (comma separated)",
							className: "flex-1 text-[12px] text-slate-800 bg-slate-50/50 border border-slate-200 rounded-lg px-2.5 py-1 focus:outline-none focus:border-slate-400"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 846,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 844,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 833,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 overflow-y-auto space-y-2 min-h-[190px] max-h-[360px] py-2 pr-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						type: "text",
						value: subject,
						onChange: (e) => setSubject(e.target.value),
						placeholder: "Booking Request Subject",
						className: "w-full text-[16.5px] font-bold text-slate-950 placeholder:text-slate-400 focus:outline-none bg-transparent tracking-tight py-0.5 leading-snug"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 860,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
						rows: 7,
						value: body,
						onChange: (e) => setBody(e.target.value),
						placeholder: "Write your email message...",
						className: "w-full text-[13.5px] text-slate-700 leading-relaxed placeholder:text-slate-400 focus:outline-none resize-none bg-transparent py-1.5 min-h-[140px]"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 869,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 858,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "pt-3 border-t border-slate-100",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 pb-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-bold text-[12.5px] text-slate-900",
								children: "Attachment"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 881,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11px] text-slate-500 flex items-center gap-1",
								children: ["Verified Documents", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "inline-grid place-items-center size-3.5 rounded-full bg-[#10B981] text-white",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-2.5 stroke-[3]" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 885,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 884,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 882,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 880,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
							children: attachments.map((att) => {
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between gap-2 p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-100/70 transition-colors shadow-2xs group",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2.5 min-w-0",
										children: [att.type === "pptx" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "size-7 rounded-lg bg-[#D24726] text-white text-[11px] font-bold grid place-items-center shrink-0 shadow-2xs",
											children: "P"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 900,
											columnNumber: 23
										}, this) : att.type === "docx" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "size-7 rounded-lg bg-[#2B579A] text-white text-[11px] font-bold grid place-items-center shrink-0 shadow-2xs",
											children: "W"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 904,
											columnNumber: 23
										}, this) : att.type === "xlsx" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "size-7 rounded-lg bg-[#217346] text-white text-[11px] font-bold grid place-items-center shrink-0 shadow-2xs",
											children: "X"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 908,
											columnNumber: 23
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "size-7 rounded-lg bg-[#E53935] text-white text-[10px] font-bold grid place-items-center shrink-0 shadow-2xs",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "size-3.5 text-white" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 913,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 912,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "text-[12px] font-semibold text-slate-900 truncate leading-tight",
												children: att.name
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 918,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "text-[10.5px] text-slate-400 leading-tight mt-0.5",
												children: att.size
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 921,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 917,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 898,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => handleRemoveAttachment(att.id),
										className: "opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-700 transition-opacity p-1 cursor-pointer",
										title: "Remove file",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 933,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 927,
										columnNumber: 19
									}, this)]
								}, att.id, true, {
									fileName: _jsxFileName$2,
									lineNumber: 894,
									columnNumber: 17
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 891,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							type: "file",
							multiple: true,
							ref: fileInputRef,
							onChange: handleFileUpload,
							className: "hidden"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 941,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 879,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between pt-4 mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3 text-slate-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => {
									setBody((prev) => prev ? `${prev}\n\n[AI Verified]: Cargo logistics and vessel dispatch requirement confirmed.` : prev);
									showPillToast.success("Email inquiry optimized with AI.", "AI Polish");
								},
								className: "hover:text-slate-700 transition-colors p-1 cursor-pointer",
								title: "AI Polish",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ellipsis, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 967,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 954,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => fileInputRef.current?.click(),
								className: "hover:text-slate-700 transition-colors p-1 cursor-pointer",
								title: "Attach File",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 976,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 970,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => {
									onSaveDraft();
									toast.success("Draft Saved", { description: `Booking draft for ${reference} preserved.` });
									onClose();
								},
								className: "hover:text-slate-700 transition-colors p-1 cursor-pointer",
								title: "Save as Draft",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Folder, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 991,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 979,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => {
									setSubject("");
									setBody("");
									setRecipients([]);
									showPillToast.info("Cleared email fields.", "Cleared");
								},
								className: "hover:text-rose-500 transition-colors p-1 cursor-pointer",
								title: "Discard / Clear",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1005,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 994,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 953,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2.5 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setIsScheduleOpen(!isScheduleOpen),
								className: "rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold px-3.5 py-2 flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-3.5 text-slate-500 stroke-[1.8]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1017,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Schedule" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1018,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 1012,
								columnNumber: 13
							}, this),
							isScheduleOpen && /* @__PURE__ */ (void 0)("div", {
								className: "absolute bottom-full right-24 mb-2 w-64 bg-white border border-slate-200 rounded-xl p-3 shadow-xl z-30 space-y-2 text-xs animate-in fade-in",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "font-semibold text-slate-900 flex items-center gap-1",
										children: [/* @__PURE__ */ (void 0)(Clock, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1025,
											columnNumber: 19
										}, this), "Schedule Dispatch"]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1024,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("input", {
										type: "datetime-local",
										value: scheduleDate,
										onChange: (e) => setScheduleDate(e.target.value),
										className: "w-full text-xs border border-slate-200 rounded-lg p-1.5 focus:outline-none"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1028,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex justify-end gap-1.5 pt-1",
										children: [/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setIsScheduleOpen(false),
											className: "px-2 py-1 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer",
											children: "Cancel"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1035,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => {
												setIsScheduleOpen(false);
												showPillToast.success(`Email scheduled for ${scheduleDate || "tomorrow at 9:00 AM"}`, "Email Scheduled");
												handleSend();
											},
											className: "px-2.5 py-1 bg-[#0FA3B1] text-white font-bold rounded-lg cursor-pointer hover:bg-[#0D919E]",
											children: "Set Schedule"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1042,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1034,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 1023,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: handleSend,
								disabled: isProcessModalOpen,
								className: cn("bg-[#0F172A] hover:bg-black text-white text-xs font-bold px-4.5 py-2 rounded-xl flex items-center gap-2 cursor-pointer shadow-sm active:scale-95 transition-all", isProcessModalOpen && "opacity-80 cursor-wait"),
								children: isProcessModalOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-3.5 animate-spin" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1072,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Dispatching..." }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1073,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1071,
									columnNumber: 17
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Send & Create" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1077,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-3.5 text-white stroke-[2.2]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1078,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1076,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1061,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 1010,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 951,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 666,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailSendingProcessModal, {
			isOpen: isProcessModalOpen,
			onClose: handleProcessModalClose,
			items: processItems,
			movementReference: reference,
			onSendItem: handleSendSingleForwarder
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 1087,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 658,
		columnNumber: 5
	}, this), document.body);
}
var _jsxFileName$1 = "/app/applet/src/components/nashmia/booking/NewBookingPage.tsx";
function NewBookingPage({ onBackToDashboard, onOpenMobileMenu }) {
	const { userId, isConfigured } = useAuth();
	const { data: bList = [] } = useCachedBuyers(userId, { enabled: isConfigured });
	const { data: sList = [] } = useCachedSuppliers(userId, { enabled: isConfigured });
	const { data: fList = [] } = useCachedForwarders(userId, { enabled: isConfigured });
	const [extraBuyers, setExtraBuyers] = (0, import_react.useState)([]);
	const [extraSuppliers, setExtraSuppliers] = (0, import_react.useState)([]);
	const [extraAgents, setExtraAgents] = (0, import_react.useState)([]);
	const dynamicBuyers = (0, import_react.useMemo)(() => {
		const mapped = bList.map((b) => ({
			id: b.id,
			name: b.name,
			country: b.country,
			consignee: b.company || b.name,
			code: b.code || `${b.name.slice(0, 3).toUpperCase()}`,
			badge: b.company ? "Consignee" : "Direct Buyer",
			status: b.status,
			destinationPort: b.preferredPort || b.destinationPort,
			activeMovements: b.activeMovements,
			creditTerm: "30 Days NET"
		}));
		const ids = new Set(mapped.map((b) => b.id));
		return [...extraBuyers.filter((b) => !ids.has(b.id)), ...mapped];
	}, [bList, extraBuyers]);
	const dynamicSuppliers = (0, import_react.useMemo)(() => {
		const mapped = sList.map((s) => ({
			id: s.id,
			name: s.name,
			country: s.country,
			city: s.city || "London",
			address: s.address || "Warehouse Bay",
			loadPoint: s.loadPoint || `${s.city || "London"} Warehouse`,
			contact: s.contactPerson,
			email: s.email,
			status: s.status
		}));
		const ids = new Set(mapped.map((s) => s.id));
		return [...extraSuppliers.filter((s) => !ids.has(s.id)), ...mapped];
	}, [sList, extraSuppliers]);
	const dynamicAgents = (0, import_react.useMemo)(() => {
		const mapped = fList.map((f) => ({
			id: f.id,
			name: f.name,
			code: f.code || `${f.name.slice(0, 3).toUpperCase()}-FWD`,
			contact: f.contactPerson,
			email: f.email,
			phone: f.whatsapp,
			contractTier: f.badge || "Tier 1 Priority",
			activeRates: f.rateCards ? f.rateCards.length : 0,
			slaHours: 4,
			supportedLines: f.shippingLines || ["MSC", "Maersk"]
		}));
		const ids = new Set(mapped.map((a) => a.id));
		return [...extraAgents.filter((a) => !ids.has(a.id)), ...mapped];
	}, [fList, extraAgents]);
	const [reference, setReference] = (0, import_react.useState)(() => generateMovementNumber());
	const [buyer, setBuyer] = (0, import_react.useState)(null);
	const [supplier, setSupplier] = (0, import_react.useState)(null);
	const [pol, setPol] = (0, import_react.useState)(PORTS_OF_LOADING[0] || null);
	const [pod, setPod] = (0, import_react.useState)(PORTS_OF_DISCHARGE[0] || null);
	const [shippingLine, setShippingLine] = (0, import_react.useState)(SHIPPING_LINES[0] || null);
	const [bookingAgent, setBookingAgent] = (0, import_react.useState)(null);
	const [selectedBookingAgents, setSelectedBookingAgents] = (0, import_react.useState)([]);
	const [containerSize, setContainerSize] = (0, import_react.useState)("40HC");
	const [quantity, setQuantity] = (0, import_react.useState)(1);
	const [productDescription, setProductDescription] = (0, import_react.useState)("");
	const [loadingDate, setLoadingDate] = (0, import_react.useState)(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const [instructions, setInstructions] = (0, import_react.useState)("");
	const [rateMode, setRateMode] = (0, import_react.useState)("AGREED_RATE");
	const [customRate, setCustomRate] = (0, import_react.useState)(null);
	const [currency, setCurrency] = (0, import_react.useState)("USD");
	const queryClient = useQueryClient();
	useSupabaseRealtime("buyers", (0, import_react.useCallback)(() => {
		invalidateCachedBuyers(queryClient, userId);
	}, [queryClient, userId]), isConfigured);
	useSupabaseRealtime("suppliers", (0, import_react.useCallback)(() => {
		invalidateCachedSuppliers(queryClient, userId);
	}, [queryClient, userId]), isConfigured);
	useSupabaseRealtime("forwarders", (0, import_react.useCallback)(() => {
		invalidateCachedForwarders(queryClient, userId);
	}, [queryClient, userId]), isConfigured);
	(0, import_react.useEffect)(() => {
		const handleBuyerCreated = (e) => {
			const created = e.detail;
			if (!created) return;
			const mapped = {
				id: created.id,
				name: created.name,
				country: created.country,
				consignee: created.company || created.name,
				code: created.code || `${created.name.slice(0, 3).toUpperCase()}`,
				badge: "Consignee",
				status: created.status || "Active",
				destinationPort: created.preferredPort || "Karachi (KHI)",
				activeMovements: created.activeMovements || 0,
				creditTerm: "30 Days NET"
			};
			setExtraBuyers((prev) => {
				const filtered = prev.filter((b) => b.id !== mapped.id && b.name.toLowerCase() !== mapped.name.toLowerCase());
				return [mapped, ...filtered];
			});
			setBuyer(mapped);
		};
		window.addEventListener("nashmia-buyer-created", handleBuyerCreated);
		return () => window.removeEventListener("nashmia-buyer-created", handleBuyerCreated);
	}, []);
	(0, import_react.useEffect)(() => {
		const handleSupplierCreated = (e) => {
			const created = e.detail;
			if (!created) return;
			const mapped = {
				id: created.id,
				name: created.name,
				country: created.country,
				city: created.city || "London",
				address: created.address || "Warehouse Bay",
				loadPoint: created.loadPoint || `${created.city || "London"} Warehouse`,
				contact: created.contactPerson,
				email: created.email,
				status: created.status || "Active"
			};
			setExtraSuppliers((prev) => {
				const filtered = prev.filter((s) => s.id !== mapped.id && s.name.toLowerCase() !== mapped.name.toLowerCase());
				return [mapped, ...filtered];
			});
			setSupplier(mapped);
		};
		window.addEventListener("nashmia-supplier-created", handleSupplierCreated);
		return () => window.removeEventListener("nashmia-supplier-created", handleSupplierCreated);
	}, []);
	(0, import_react.useEffect)(() => {
		const handleForwarderCreated = (e) => {
			const created = e.detail;
			if (!created) return;
			const mapped = {
				id: created.id,
				name: created.name,
				code: created.code || `${created.name.slice(0, 3).toUpperCase()}-FWD`,
				contact: created.contactPerson,
				email: created.email,
				phone: created.whatsapp,
				contractTier: created.badge || "Tier 1 Priority",
				activeRates: created.rateCards ? created.rateCards.length : 0,
				slaHours: 4,
				supportedLines: created.shippingLines || ["MSC", "Maersk"]
			};
			setExtraAgents((prev) => {
				const filtered = prev.filter((a) => a.id !== mapped.id && a.name.toLowerCase() !== mapped.name.toLowerCase());
				return [mapped, ...filtered];
			});
			setBookingAgent(mapped);
		};
		window.addEventListener("nashmia-forwarder-created", handleForwarderCreated);
		return () => window.removeEventListener("nashmia-forwarder-created", handleForwarderCreated);
	}, []);
	const handleQuickCreateBuyer = async (buyerData) => {
		let createdAcc;
		const tempId = `buyer-${Date.now()}`;
		const fallbackBuyerFull = {
			...buyerData,
			id: tempId,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		const fallbackBuyerAcc = {
			id: tempId,
			name: buyerData.name,
			country: buyerData.country,
			consignee: buyerData.company,
			code: buyerData.code,
			badge: "Consignee",
			status: "Active",
			destinationPort: buyerData.preferredPort,
			activeMovements: 0,
			creditTerm: "30 Days NET"
		};
		if (isConfigured) try {
			const created = await insertBuyerToSupabase(userId || null, buyerData);
			createdAcc = {
				id: created.id,
				name: created.name,
				country: created.country,
				consignee: created.company,
				code: created.code,
				badge: "Consignee",
				status: created.status,
				destinationPort: created.preferredPort,
				activeMovements: 0,
				creditTerm: "30 Days NET"
			};
			try {
				window.dispatchEvent(new CustomEvent("nashmia-buyer-created", { detail: created }));
			} catch (e) {
				console.error("Event dispatch error:", e);
			}
		} catch (err) {
			console.warn("[NewBookingPage] Supabase buyer creation fallback:", err);
			createdAcc = fallbackBuyerAcc;
			try {
				window.dispatchEvent(new CustomEvent("nashmia-buyer-created", { detail: fallbackBuyerFull }));
			} catch (e) {
				console.error("Event dispatch error:", e);
			}
		}
		else {
			createdAcc = fallbackBuyerAcc;
			try {
				window.dispatchEvent(new CustomEvent("nashmia-buyer-created", { detail: fallbackBuyerFull }));
			} catch (e) {
				console.error("Event dispatch error:", e);
			}
		}
		setExtraBuyers((prev) => [createdAcc, ...prev.filter((b) => b.id !== createdAcc.id)]);
		setBuyer(createdAcc);
		return createdAcc;
	};
	const handleQuickCreateSupplier = async (supplierData) => {
		let createdSup;
		const tempId = `sup-${Date.now()}`;
		const fallbackSupplierFull = {
			...supplierData,
			id: tempId,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		const fallbackSupplierVendor = {
			id: tempId,
			name: supplierData.name,
			country: supplierData.country,
			city: supplierData.city,
			address: supplierData.address,
			loadPoint: supplierData.loadPoint,
			contact: supplierData.contactPerson,
			email: supplierData.email,
			status: "Active"
		};
		if (isConfigured) try {
			const created = await insertSupplierToSupabase(userId || null, supplierData);
			createdSup = {
				id: created.id,
				name: created.name,
				country: created.country,
				city: created.city,
				address: created.address,
				loadPoint: created.loadPoint,
				contact: created.contactPerson,
				email: created.email,
				status: created.status
			};
			try {
				window.dispatchEvent(new CustomEvent("nashmia-supplier-created", { detail: created }));
			} catch (e) {
				console.error("Event dispatch error:", e);
			}
		} catch (err) {
			console.warn("[NewBookingPage] Supabase supplier creation fallback:", err);
			createdSup = fallbackSupplierVendor;
			try {
				window.dispatchEvent(new CustomEvent("nashmia-supplier-created", { detail: fallbackSupplierFull }));
			} catch (e) {
				console.error("Event dispatch error:", e);
			}
		}
		else {
			createdSup = fallbackSupplierVendor;
			try {
				window.dispatchEvent(new CustomEvent("nashmia-supplier-created", { detail: fallbackSupplierFull }));
			} catch (e) {
				console.error("Event dispatch error:", e);
			}
		}
		setExtraSuppliers((prev) => [createdSup, ...prev.filter((s) => s.id !== createdSup.id)]);
		setSupplier(createdSup);
		return createdSup;
	};
	const { data: realRateCards = [] } = useRealRateCards(userId);
	(0, import_react.useEffect)(() => {
		try {
			const params = new URLSearchParams(window.location.search);
			const supId = params.get("supplierId");
			const bId = params.get("buyerId");
			const agentId = params.get("bookingAgentId") || params.get("fwd");
			const urlSize = params.get("size");
			if (supId) {
				const foundSup = dynamicSuppliers.find((s) => s.id === supId);
				if (foundSup) setSupplier((prev) => prev?.id === foundSup.id ? prev : foundSup);
			}
			if (bId) {
				const foundBuyer = dynamicBuyers.find((b) => b.id === bId);
				if (foundBuyer) setBuyer((prev) => prev?.id === foundBuyer.id ? prev : foundBuyer);
			}
			if (agentId) {
				const foundAgent = dynamicAgents.find((a) => a.id === agentId);
				if (foundAgent) {
					setBookingAgent((prev) => prev?.id === foundAgent.id ? prev : foundAgent);
					setSelectedBookingAgents((prev) => prev.some((a) => a.id === foundAgent.id) ? prev : [foundAgent]);
				}
			}
			if (urlSize && (urlSize === "20FT" || urlSize === "40FT" || urlSize === "40HC")) setContainerSize((prev) => prev === urlSize ? prev : urlSize);
		} catch {}
	}, [
		dynamicBuyers,
		dynamicSuppliers,
		dynamicAgents
	]);
	const [currentStep, setCurrentStep] = (0, import_react.useState)(0);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [draftSavedToast, setDraftSavedToast] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
	const matchedRate = (0, import_react.useMemo)(() => {
		const activeAgentId = selectedBookingAgents[0]?.id || bookingAgent?.id;
		if (!activeAgentId) return null;
		const dbMatch = realRateCards.find((rc) => {
			if (rc.status === "Inactive") return false;
			const isAgentMatch = rc.forwarder_id === activeAgentId;
			if (!isAgentMatch) return false;
			const pickupLocation = supplier?.loadPoint || supplier?.city || "";
			const pickupMatch = !pickupLocation && !pol ? true : pickupLocation && rc.load_point && rc.load_point.toLowerCase().includes(pickupLocation.toLowerCase()) || pickupLocation && rc.origin && rc.origin.toLowerCase().includes(pickupLocation.toLowerCase()) || pol && rc.pol_code && rc.pol_code.toLowerCase() === pol.code.toLowerCase() || pol && rc.origin && rc.origin.toLowerCase().includes(pol.name.toLowerCase());
			return isAgentMatch && pickupMatch;
		}) || realRateCards.find((rc) => rc.status !== "Inactive" && rc.forwarder_id === activeAgentId);
		if (dbMatch) return {
			agentId: dbMatch.forwarder_id,
			agentName: dbMatch.forwarders?.company_name || dbMatch.forwarders?.contact_person || bookingAgent?.name || "Forwarder",
			polCode: dbMatch.pol_code || pol?.code || dbMatch.origin || "Pickup Point",
			podCode: dbMatch.pod_code || pod?.code || dbMatch.destination || "Destination",
			size: dbMatch.container_size || containerSize,
			ratePerContainer: dbMatch.base_rate || dbMatch.rate || 0,
			currency: dbMatch.currency || "USD",
			validUntil: dbMatch.valid_until,
			cardName: dbMatch.card_name || `${dbMatch.origin} (${dbMatch.load_point || "Pickup"})`
		};
		if (bookingAgent && pol && pod && containerSize) return findAgreedRate(bookingAgent.id, pol.code, pod.code, containerSize);
		return null;
	}, [
		realRateCards,
		selectedBookingAgents,
		bookingAgent,
		pol,
		pod,
		containerSize,
		supplier
	]);
	const handleSelectStep = (index) => {
		setCurrentStep(index);
		const target = document.getElementById([
			"section-parties",
			"section-route",
			"section-cargo",
			"section-instructions"
		][index]);
		if (target) target.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	const validateForm = () => {
		const errs = {};
		if (!buyer) errs.buyer = "Buyer account is required";
		if (!supplier) errs.supplier = "Pickup supplier is required";
		if (!pol) errs.pol = "Port of loading is required";
		if (!pod) errs.pod = "Port of discharge is required";
		if (selectedBookingAgents.length === 0 && !bookingAgent) errs.bookingAgent = "At least one booking agent / forwarder is required";
		const cleanDesc = productDescription.trim() || "Commercial Freight Cargo";
		if (!productDescription.trim()) setProductDescription(cleanDesc);
		if (!loadingDate) errs.loadingDate = "Loading date is required";
		setErrors(errs);
		const errorKeys = Object.keys(errs);
		if (errorKeys.length > 0) {
			const firstErrorKey = errorKeys[0];
			const sectionMap = {
				buyer: "section-parties",
				supplier: "section-parties",
				pol: "section-route",
				pod: "section-route",
				bookingAgent: "section-shipping",
				productDescription: "section-cargo",
				loadingDate: "section-cargo"
			};
			if (firstErrorKey && sectionMap[firstErrorKey]) document.getElementById(sectionMap[firstErrorKey])?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
			toast.error("Please fill required field", { description: errs[firstErrorKey] });
			return false;
		}
		return true;
	};
	const handleCreateBooking = () => {
		if (!validateForm()) return;
		setModalOpen(true);
	};
	const handleSaveDraft = async () => {
		try {
			const effectiveRate = customRate !== null && customRate !== void 0 ? customRate : matchedRate ? matchedRate.ratePerContainer : null;
			const draftBooking = await createBookingInSupabase(userId, {
				reference,
				bookingReference: reference,
				movementNumber: reference,
				buyerId: buyer?.id,
				buyerName: buyer?.name,
				buyerCountry: buyer?.country,
				supplierId: supplier?.id,
				supplierName: supplier?.name,
				supplierCity: supplier?.city,
				forwarderId: rateMode === "AGREED_RATE" && selectedBookingAgents.length === 1 ? selectedBookingAgents[0]?.id || bookingAgent?.id : void 0,
				forwarderName: rateMode === "AGREED_RATE" && selectedBookingAgents.length === 1 ? selectedBookingAgents[0]?.name || bookingAgent?.name : "Pending Award",
				shippingLineId: shippingLine?.id,
				shippingLineName: shippingLine?.name,
				origin: pol?.name || "Felixstowe (FXT)",
				destination: pod?.name || "Karachi (KHI)",
				containerSize,
				containerCount: quantity,
				loadingDate,
				productDescription,
				specialInstructions: instructions,
				rateMode,
				freightRateMode: rateMode,
				customRate: rateMode === "ASKING_RATE" ? null : effectiveRate,
				totalFreight: rateMode === "ASKING_RATE" ? null : effectiveRate !== null ? effectiveRate * quantity : null,
				currency: currency || "USD",
				status: "Draft"
			});
			queryClient.invalidateQueries({ queryKey: ["dashboard-bookings"] });
			queryClient.invalidateQueries({ queryKey: ["dashboard-data"] });
			queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
			queryClient.invalidateQueries({ queryKey: ["movements"] });
			if (typeof window !== "undefined") {
				window.dispatchEvent(new CustomEvent("nashmia_booking_created", { detail: {
					booking: draftBooking,
					id: draftBooking.id,
					movementNumber: draftBooking.movement_number,
					bookingReference: draftBooking.booking_reference,
					reference: draftBooking.booking_reference,
					status: "Draft",
					rateMode
				} }));
				window.dispatchEvent(new CustomEvent("nashmia_movement_created", { detail: {
					booking: draftBooking,
					id: draftBooking.id,
					movementNumber: draftBooking.movement_number,
					bookingReference: draftBooking.booking_reference,
					reference: draftBooking.booking_reference,
					status: "Draft",
					rateMode
				} }));
				window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: {
					updated: true,
					id: draftBooking.id,
					movementNumber: draftBooking.movement_number,
					bookingReference: draftBooking.booking_reference
				} }));
			}
		} catch (e) {
			console.warn("Draft persistence notice:", e);
		}
		setDraftSavedToast(true);
		toast.success("Draft Saved", { description: `Movement reference ${reference} draft has been preserved.` });
		setTimeout(() => setDraftSavedToast(false), 3500);
	};
	const handleBookingSuccess = (result) => {
		queryClient.invalidateQueries({ queryKey: ["dashboard-bookings"] });
		queryClient.invalidateQueries({ queryKey: ["dashboard-data"] });
		queryClient.invalidateQueries({ queryKey: ["bookings"] });
		queryClient.invalidateQueries({ queryKey: ["movements"] });
		queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
		const movRef = result?.movementNumber || result?.reference || reference;
		toast.success("Booking Created Successfully!", {
			description: `Movement ${movRef} has been recorded into the live database.`,
			duration: 5e3
		});
		setModalOpen(false);
		onBackToDashboard?.();
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "w-full min-w-0 max-w-full pb-16 text-black space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookingHeader, {
				onBack: onBackToDashboard,
				onOpenMobileMenu,
				isSaved: !isSubmitting
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 701,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 sm:mt-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookingProgress, {
					currentStep,
					onSelectStep: handleSelectStep
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 709,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 708,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 sm:mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-8 lg:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-2xs flex flex-wrap items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "size-10 rounded-xl bg-[#0FA3B1]/10 text-[#0FA3B1] grid place-items-center font-bold text-xs shrink-0",
									children: "REF"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 719,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider",
									children: "Booking & Movement Reference"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 723,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2 mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "text",
										value: reference,
										onChange: (e) => setReference(e.target.value.trim()),
										className: "font-mono text-sm font-bold text-slate-900 bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 focus:border-[#0FA3B1] rounded-lg px-3 py-1.5 outline-none transition-all w-56 tracking-tight",
										placeholder: "e.g. NASH-BK-2026-7023"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 727,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setReference(generateMovementNumber()),
										className: "text-xs text-[#0FA3B1] hover:text-[#0D919E] hover:underline font-semibold cursor-pointer",
										title: "Generate new NASH-BK number",
										children: "Regenerate"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 734,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 726,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 722,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 718,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-xs text-slate-500 max-w-xs leading-relaxed",
								children: "Standard Nashmia Global movement identifier used across forwarder RFQ emails and carrier confirmation."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 745,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 717,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookingPartiesSection, {
							selectedBuyer: buyer,
							onSelectBuyer: (b) => {
								setBuyer(b);
								setErrors((prev) => ({
									...prev,
									buyer: ""
								}));
							},
							selectedSupplier: supplier,
							onSelectSupplier: (s) => {
								setSupplier(s);
								setErrors((prev) => ({
									...prev,
									supplier: ""
								}));
							},
							availableBuyers: dynamicBuyers,
							availableSuppliers: dynamicSuppliers,
							onQuickCreateBuyer: handleQuickCreateBuyer,
							onQuickCreateSupplier: handleQuickCreateSupplier,
							errors
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 752,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RouteSection, {
							pol,
							onSelectPol: (p) => {
								setPol(p);
								setErrors((prev) => ({
									...prev,
									pol: ""
								}));
							},
							pod,
							onSelectPod: (p) => {
								setPod(p);
								setErrors((prev) => ({
									...prev,
									pod: ""
								}));
							},
							errors
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 771,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShippingSection, {
							shippingLine,
							onSelectShippingLine: (sl) => {
								setShippingLine(sl);
								setErrors((prev) => ({
									...prev,
									shippingLine: ""
								}));
							},
							bookingAgent,
							onSelectBookingAgent: (ba) => {
								setBookingAgent(ba);
								setErrors((prev) => ({
									...prev,
									bookingAgent: ""
								}));
							},
							selectedBookingAgents,
							onSelectBookingAgents: (agents) => {
								setSelectedBookingAgents(agents);
								if (agents.length > 0) {
									setBookingAgent(agents[0]);
									setErrors((prev) => ({
										...prev,
										bookingAgent: ""
									}));
								} else setBookingAgent(null);
							},
							pol,
							pod,
							containerSize,
							quantity,
							matchedRate,
							rateMode,
							onChangeRateMode: setRateMode,
							customRate,
							onChangeCustomRate: setCustomRate,
							currency,
							onChangeCurrency: setCurrency,
							availableBookingAgents: dynamicAgents,
							availableRateCards: realRateCards,
							errors
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 786,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContainerCargoSection, {
							containerSize,
							onSelectSize: setContainerSize,
							onSelectContainerSize: setContainerSize,
							quantity,
							onChangeQuantity: setQuantity,
							productDescription,
							onChangeProductDescription: (val) => {
								setProductDescription(val);
								setErrors((prev) => ({
									...prev,
									productDescription: ""
								}));
							},
							loadingDate,
							onChangeLoadingDate: (val) => {
								setLoadingDate(val);
								setErrors((prev) => ({
									...prev,
									loadingDate: ""
								}));
							},
							errors
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 824,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpecialInstructionsSection, {
							instructions,
							onChangeInstructions: setInstructions
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 844,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between lg:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs text-slate-500",
								children: rateMode === "ASKING_RATE" ? "Rate Status" : "Estimated Total"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 852,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-lg font-black text-black",
								children: rateMode === "ASKING_RATE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-sm font-semibold text-[#6A80A9]",
									children: "Quotation Requested"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 857,
									columnNumber: 19
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
									"$",
									(customRate !== null && customRate !== void 0 ? customRate : matchedRate ? matchedRate.ratePerContainer : 0) * quantity > 0 ? ((customRate !== null && customRate !== void 0 ? customRate : matchedRate?.ratePerContainer || 0) * quantity).toLocaleString() : "—",
									" ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs font-normal text-slate-500",
										children: currency
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 874,
										columnNumber: 21
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 859,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 855,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 851,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: handleSaveDraft,
									className: "flex h-11 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookmarkCheck, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 885,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Draft" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 886,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 880,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: handleCreateBooking,
									className: "flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-black px-6 text-xs font-semibold text-white shadow-md hover:bg-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Submit" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 893,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 894,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 888,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 879,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 850,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 715,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "sticky top-6",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookingSummaryCard, {
							reference,
							buyer,
							supplier,
							pol,
							pod,
							shippingLine,
							bookingAgent,
							selectedBookingAgents,
							containerSize,
							quantity,
							loadingDate,
							matchedRate,
							rateMode,
							customRate,
							currency,
							onSubmit: handleCreateBooking,
							onSaveDraft: handleSaveDraft,
							isSubmitting
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 903,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 902,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 901,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 713,
				columnNumber: 7
			}, this),
			draftSavedToast && /* @__PURE__ */ (void 0)("div", {
				className: "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl bg-black px-4 py-3 text-xs font-semibold text-white shadow-2xl animate-in slide-in-from-bottom-5",
				children: [/* @__PURE__ */ (void 0)(Check, { className: "size-4 text-emerald-400" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 930,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("span", { children: "Draft booking state preserved locally." }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 931,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 929,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookingEmailPreviewModal, {
				isOpen: modalOpen,
				onClose: () => setModalOpen(false),
				reference,
				buyer,
				supplier,
				pol,
				pod,
				shippingLine,
				bookingAgent,
				selectedBookingAgents,
				containerSize,
				quantity,
				loadingDate,
				productDescription,
				instructions,
				matchedRate,
				rateMode,
				customRate,
				currency,
				onSuccess: handleBookingSuccess,
				onSaveDraft: handleSaveDraft,
				onViewMovement: () => {
					setModalOpen(false);
					onBackToDashboard?.();
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 936,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 699,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/new-booking.tsx?tsr-split=component";
function NewBookingRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, {
		maxWidth: "max-w-[1520px]",
		children: ({ onOpenMobileMenu }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NewBookingPage, { onOpenMobileMenu }, void 0, false, {
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
export { NewBookingRoute as component };
