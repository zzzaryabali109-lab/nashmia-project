import { o as __toESM } from "../_runtime.mjs";
import { Vt as updateForwarderInSupabase, yt as insertForwarderToSupabase } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { A as Share2, Bt as Ellipsis, Et as Funnel, Ht as Earth, Kt as Copy, N as Send, O as Ship, P as Search, R as RotateCcw, S as Star, Tn as ArchiveRestore, W as Plus, Wt as DollarSign, Yt as Clock, _t as LayoutGrid, at as MessageCircle, bn as ArrowUpDown, cn as Check, hn as Bookmark, i as X, l as User, lt as Mail, nn as CircleAlert, ot as Menu, pt as List, q as Pen, qt as Container, sn as ChevronDown, tn as CircleCheck, w as Sparkles, wn as Archive, xn as ArrowRight, zt as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as useSwipeToDismiss } from "./use-swipe-to-dismiss-DDttoUG9.mjs";
import { i as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { N as useAuth, _ as DropdownMenuTrigger, c as DialogDescription, d as DialogTitle, f as DropdownMenu, g as DropdownMenuSeparator, h as DropdownMenuLabel, m as DropdownMenuItem, n as ResultSuccessView, o as Dialog, p as DropdownMenuContent, r as AppLayout, s as DialogContent, u as DialogHeader, v as useSupabaseRealtime } from "./router-BJg2H47m.mjs";
import { t as LifecycleDropdownSelect } from "./LifecycleDropdownSelect-Dr2RhBr1.mjs";
import { a as useCachedForwarders, n as invalidateCachedForwarders } from "./entity-cache-C4kyVDy3.mjs";
import { n as DirectorySummaryStripSkeleton, r as DirectoryTableSkeleton, t as DirectoryCardGridSkeleton } from "./DirectorySkeletons-CWkWH_i-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forwarders-Ds_GTxI2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var FORWARDER_SHIPPING_LINES_OPTIONS = [
	"All Shipping Lines",
	"MSC",
	"Maersk",
	"CMA CGM",
	"Hapag-Lloyd",
	"ONE",
	"Evergreen",
	"Cosco Shipping"
];
var FORWARDER_COUNTRY_OPTIONS = [
	"All Countries",
	"United Kingdom",
	"Pakistan",
	"Spain",
	"France",
	"Germany",
	"Italy",
	"United Arab Emirates",
	"United States"
];
var FORWARDER_SORT_OPTIONS = [
	{
		label: "Name (A–Z)",
		value: "name-asc"
	},
	{
		label: "Name (Z–A)",
		value: "name-desc"
	},
	{
		label: "Most Active Bookings",
		value: "bookings-desc"
	},
	{
		label: "Most Rate Cards",
		value: "rates-desc"
	},
	{
		label: "Recently Added",
		value: "recent"
	}
];
var _jsxFileName$12 = "/app/applet/src/components/nashmia/forwarders/AddForwarderModal.tsx";
var ALL_SHIPPING_LINES = FORWARDER_SHIPPING_LINES_OPTIONS.filter((sl) => sl !== "All Shipping Lines");
function AddForwarderModal({ open, onOpenChange, onSaveForwarder, editForwarder }) {
	const [name, setName] = (0, import_react.useState)("");
	const [contactPerson, setContactPerson] = (0, import_react.useState)("");
	const [contactRole, setContactRole] = (0, import_react.useState)("Freight Booking Agent");
	const [email, setEmail] = (0, import_react.useState)("");
	const [whatsapp, setWhatsapp] = (0, import_react.useState)("");
	const [country, setCountry] = (0, import_react.useState)("United Kingdom");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("Active");
	const [selectedShippingLines, setSelectedShippingLines] = (0, import_react.useState)([
		"MSC",
		"Maersk",
		"CMA CGM"
	]);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const [savedEntity, setSavedEntity] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (editForwarder) {
			setName(editForwarder.name);
			setContactPerson(editForwarder.contactPerson);
			setContactRole(editForwarder.contactRole || "Freight Booking Agent");
			setEmail(editForwarder.email);
			setWhatsapp(editForwarder.whatsapp);
			setCountry(editForwarder.country);
			setNotes(editForwarder.notes || "");
			setStatus(editForwarder.status === "Inactive" ? "Inactive" : "Active");
			setSelectedShippingLines(editForwarder.shippingLines.length > 0 ? editForwarder.shippingLines : ["MSC", "Maersk"]);
			setIsSuccess(false);
			setSavedEntity(null);
		} else {
			setName("");
			setContactPerson("");
			setContactRole("Freight Booking Agent");
			setEmail("");
			setWhatsapp("");
			setCountry("United Kingdom");
			setNotes("");
			setStatus("Active");
			setSelectedShippingLines([
				"MSC",
				"Maersk",
				"CMA CGM"
			]);
			setIsSuccess(false);
			setSavedEntity(null);
		}
		setErrors({});
	}, [editForwarder, open]);
	const toggleShippingLine = (line) => {
		if (selectedShippingLines.includes(line)) {
			if (selectedShippingLines.length > 1) setSelectedShippingLines(selectedShippingLines.filter((l) => l !== line));
		} else setSelectedShippingLines([...selectedShippingLines, line]);
	};
	const handleSelectAllLines = () => {
		setSelectedShippingLines([...ALL_SHIPPING_LINES]);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = {};
		if (!name.trim()) newErrors.name = "Forwarder name is required";
		if (!contactPerson.trim()) newErrors.contactPerson = "Contact person is required";
		if (!email.trim()) newErrors.email = "Email address is required";
		else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email address";
		if (!whatsapp.trim()) newErrors.whatsapp = "WhatsApp or phone number is required";
		if (selectedShippingLines.length === 0) newErrors.shippingLines = "Select at least one shipping line";
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}
		const countryCode = country === "United Kingdom" ? "GB" : country === "Germany" ? "DE" : country === "France" ? "FR" : country === "Spain" ? "ES" : country === "Italy" ? "IT" : country === "Netherlands" ? "NL" : country === "United Arab Emirates" ? "AE" : country === "Pakistan" ? "PK" : country === "China" ? "CN" : "US";
		const code = editForwarder?.code || `${name.slice(0, 3).toUpperCase()}-FWD-${countryCode}-${Math.floor(1e3 + Math.random() * 9e3)}`;
		onSaveForwarder({
			name: name.trim(),
			code,
			badge: "Booking Agent",
			contactPerson: contactPerson.trim(),
			contactRole: contactRole.trim() || "Freight Booking Agent",
			email: email.trim().toLowerCase(),
			whatsapp: whatsapp.trim(),
			country,
			countryCode,
			shippingLines: selectedShippingLines,
			activeBookings: editForwarder ? editForwarder.activeBookings : 0,
			totalBookings: editForwarder ? editForwarder.totalBookings : 0,
			notes: notes.trim(),
			status
		}, editForwarder?.id);
		setSavedEntity({
			name: name.trim(),
			code
		});
		setIsSuccess(true);
	};
	const handleDismiss = () => {
		onOpenChange(false);
		setTimeout(() => {
			setIsSuccess(false);
			setSavedEntity(null);
		}, 200);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			hideCloseButton: true,
			className: cn("w-full sm:max-w-[580px] max-h-[92vh] flex flex-col p-0 overflow-hidden sm:rounded-[28px] bg-white shadow-2xl focus:outline-none", isSuccess && "sm:max-w-[420px]"),
			children: isSuccess ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-4 sm:p-6 overflow-y-auto max-h-[88vh]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultSuccessView, {
					type: "success",
					title: editForwarder ? "Forwarder Profile Updated" : "Forwarder Registered Successfully",
					message: `Your forwarder partner data has been ${editForwarder ? "updated" : "saved and added to the directory"}. Active booking requests and rate cards can now reference this partner.`,
					entityName: savedEntity?.name,
					entitySubtitle: savedEntity?.code,
					actionText: "OKAY",
					onAction: handleDismiss,
					onClose: handleDismiss
				}, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 202,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 201,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: handleSubmit,
				className: "flex flex-col h-full max-h-[90vh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onOpenChange(false),
						"aria-label": "Close",
						className: "absolute top-4 right-4 z-20 flex size-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all hover:bg-slate-200 hover:text-slate-700 active:scale-95 cursor-pointer shadow-2xs",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4 stroke-[2.5]" }, void 0, false, {
							fileName: _jsxFileName$12,
							lineNumber: 229,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 223,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, {
						className: "p-5 sm:p-6 pb-3 sm:pb-4 border-b border-slate-100 shrink-0 bg-white space-y-1.5 text-left pr-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-[#E8F5F6] px-3 py-1 text-[11px] font-bold text-[#0FA3B1] w-fit",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 235,
									columnNumber: 17
								}, this), editForwarder ? "Edit Forwarder Partner" : "Forwarder Partner"]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 234,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
								className: "text-xl sm:text-[22px] font-extrabold tracking-tight text-[#0D1F3C]",
								children: editForwarder ? "Update Forwarder Profile" : "Register New Forwarder"
							}, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 238,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
								className: "text-xs sm:text-[13px] font-medium text-slate-500",
								children: editForwarder ? "Modify booking agent credentials, contracted shipping lines, and direct contact channels." : "Configure booking agent details, contact channels, and contracted shipping lines."
							}, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 241,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$12,
						lineNumber: 233,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex-1 overflow-y-auto px-5 sm:px-6 py-4 space-y-4 [scrollbar-width:thin]",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "text-[12px] font-semibold text-slate-600",
											children: ["Forwarder / Company Name ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 254,
												columnNumber: 46
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 253,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											type: "text",
											value: name,
											onChange: (e) => {
												setName(e.target.value);
												if (errors.name) setErrors((prev) => ({
													...prev,
													name: ""
												}));
											},
											placeholder: "e.g. Apex Global Forwarding",
											className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
										}, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 256,
											columnNumber: 19
										}, this),
										errors.name && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 268,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.name }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 269,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 267,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 252,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
										label: "Country / Primary Hub",
										value: country,
										onChange: (val) => setCountry(val),
										options: FORWARDER_COUNTRY_OPTIONS.filter((c) => c !== "All Countries").map((c) => ({
											value: c,
											label: c
										})),
										placeholder: "Select Country",
										activeColor: "teal",
										triggerClassName: "h-11 w-full text-sm sm:text-[13px] bg-slate-50/60"
									}, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 275,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 274,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 251,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "text-[12px] font-semibold text-slate-600",
											children: ["Contact Person ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 296,
												columnNumber: 36
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 295,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											type: "text",
											value: contactPerson,
											onChange: (e) => {
												setContactPerson(e.target.value);
												if (errors.contactPerson) setErrors((prev) => ({
													...prev,
													contactPerson: ""
												}));
											},
											placeholder: "e.g. David Sterling",
											className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
										}, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 298,
											columnNumber: 19
										}, this),
										errors.contactPerson && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 311,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.contactPerson }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 312,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 310,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 294,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "text-[12px] font-semibold text-slate-600",
										children: "Designation / Role"
									}, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 318,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "text",
										value: contactRole,
										onChange: (e) => setContactRole(e.target.value),
										placeholder: "e.g. Senior Booking Agent",
										className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
									}, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 321,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 317,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 293,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "text-[12px] font-semibold text-slate-600",
											children: ["Direct Email ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 335,
												columnNumber: 34
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 334,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											type: "email",
											value: email,
											onChange: (e) => {
												setEmail(e.target.value);
												if (errors.email) setErrors((prev) => ({
													...prev,
													email: ""
												}));
											},
											placeholder: "booking@forwarder.com",
											className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
										}, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 337,
											columnNumber: 19
										}, this),
										errors.email && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 349,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.email }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 350,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 348,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 333,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "text-[12px] font-semibold text-slate-600",
											children: ["WhatsApp / Phone ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 357,
												columnNumber: 38
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 356,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											type: "text",
											value: whatsapp,
											onChange: (e) => {
												setWhatsapp(e.target.value);
												if (errors.whatsapp) setErrors((prev) => ({
													...prev,
													whatsapp: ""
												}));
											},
											placeholder: "+44 20 7946 0912",
											className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
										}, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 359,
											columnNumber: 19
										}, this),
										errors.whatsapp && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 371,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.whatsapp }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 372,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 370,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 355,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 332,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2 rounded-xl border border-slate-200 bg-slate-50/60 p-3.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "text-[12px] font-semibold text-slate-700",
											children: ["Contracted Shipping Lines ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 382,
												columnNumber: 47
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 381,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: handleSelectAllLines,
											className: "text-[11px] font-bold text-[#0FA3B1] hover:underline cursor-pointer",
											children: [
												"Select All (",
												ALL_SHIPPING_LINES.length,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 384,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$12,
										lineNumber: 380,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap gap-1.5",
										children: ALL_SHIPPING_LINES.map((line) => {
											const isSelected = selectedShippingLines.includes(line);
											return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
												type: "button",
												onClick: () => toggleShippingLine(line),
												className: cn("inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer", isSelected ? "border-[#0FA3B1] bg-[#E8F5F6] text-[#0FA3B1] shadow-2xs ring-1 ring-[#0FA3B1]/20" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"),
												children: [isSelected && /* @__PURE__ */ (void 0)(Check, { className: "size-3 stroke-[2.5]" }, void 0, false, {
													fileName: _jsxFileName$12,
													lineNumber: 407,
													columnNumber: 40
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: line }, void 0, false, {
													fileName: _jsxFileName$12,
													lineNumber: 408,
													columnNumber: 25
												}, this)]
											}, line, true, {
												fileName: _jsxFileName$12,
												lineNumber: 396,
												columnNumber: 23
											}, this);
										})
									}, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 392,
										columnNumber: 17
									}, this),
									errors.shippingLines && /* @__PURE__ */ (void 0)("p", {
										className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
										children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 415,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: errors.shippingLines }, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 416,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$12,
										lineNumber: 414,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 379,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "text-[12px] font-semibold text-slate-600",
									children: "Operational Notes (Optional)"
								}, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 423,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "text",
									value: notes,
									onChange: (e) => setNotes(e.target.value),
									placeholder: "e.g. Preferred for MSC UK-Pakistan routes with guaranteed space.",
									className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
								}, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 426,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 422,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-xl border border-slate-200 bg-slate-50/60 p-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[12px] font-bold text-slate-800",
									children: "Forwarder Status"
								}, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 438,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] text-slate-500",
									children: "Active partners receive automated quotation requests and booking orders"
								}, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 439,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 437,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-1 bg-slate-200/70 p-0.5 rounded-full self-start sm:self-auto",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setStatus("Active"),
										className: cn("rounded-full px-3 py-1 text-[11.5px] font-bold transition-all cursor-pointer", status === "Active" ? "bg-white text-emerald-700 shadow-2xs" : "text-slate-600 hover:text-slate-900"),
										children: "Active"
									}, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 444,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setStatus("Inactive"),
										className: cn("rounded-full px-3 py-1 text-[11.5px] font-bold transition-all cursor-pointer", status === "Inactive" ? "bg-white text-slate-800 shadow-2xs" : "text-slate-600 hover:text-slate-900"),
										children: "Inactive"
									}, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 456,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 443,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 436,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$12,
						lineNumber: 249,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-4 sm:p-5 sm:py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2.5 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onOpenChange(false),
							className: "h-10 px-4 rounded-full text-[13px] font-semibold text-slate-500 hover:bg-slate-200/60 hover:text-slate-800 transition-colors cursor-pointer",
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName$12,
							lineNumber: 474,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "submit",
							className: "inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#009EE2] hover:bg-[#0089c7] px-5 sm:px-6 text-[13px] font-bold text-white shadow-md shadow-[#009EE2]/20 transition-all active:scale-[0.98] cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5 stroke-[2.5]" }, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 485,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: editForwarder ? "Save Changes" : "Register Forwarder" }, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 486,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$12,
							lineNumber: 481,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$12,
						lineNumber: 473,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$12,
				lineNumber: 218,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 193,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$12,
		lineNumber: 192,
		columnNumber: 5
	}, this);
}
var _jsxFileName$11 = "/app/applet/src/components/nashmia/forwarders/AddForwarderCard.tsx";
function AddForwarderCard({ onAddForwarder }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type: "button",
		onClick: onAddForwarder,
		className: "group relative flex min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-[32px] sm:rounded-[36px] border border-dashed border-[#6A80A9]/30 bg-white/70 p-6 sm:p-7 text-left shadow-[0_12px_36px_rgba(15,23,42,0.03)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#6A80A9] hover:bg-white hover:shadow-[0_22px_48px_rgba(106,128,169,0.12)] active:translate-y-0 cursor-pointer",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" }, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "size-16 sm:size-17 rounded-full border-2 border-white bg-gradient-to-br from-[#6A80A9] via-[#8B9EB7] to-[#A3B8D4] p-0.5 shadow-[0_6px_18px_rgba(106,128,169,0.2)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "size-full rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-7 stroke-[2]" }, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 22,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 21,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 20,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "inline-flex items-center gap-1 rounded-full bg-[#E8F1F3] border border-[#6A80A9]/20 px-3 py-1 text-[11px] font-bold text-[#6A80A9] shadow-2xs",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3" }, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 27,
						columnNumber: 13
					}, this), " Quick Add"]
				}, void 0, true, {
					fileName: _jsxFileName$11,
					lineNumber: 26,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$11,
				lineNumber: 19,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-[21px] sm:text-[22px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#6A80A9] transition-colors",
						children: "Register New Forwarder"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 33,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-[13.5px] font-medium text-slate-500 mt-1.5 leading-relaxed",
						children: "Add freight booking agent, contracted shipping lines, and monthly rate cards."
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 36,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3.5 flex flex-wrap items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "rounded-full bg-slate-50 border border-slate-200/80 px-3 py-0.5 text-[11px] font-semibold text-slate-600 shadow-2xs",
							children: "Booking Agent"
						}, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 41,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "rounded-full bg-slate-50 border border-slate-200/80 px-3 py-0.5 text-[11px] font-semibold text-slate-600 shadow-2xs",
							children: "Ocean Freight"
						}, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 44,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$11,
						lineNumber: 40,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$11,
				lineNumber: 32,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$11,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 flex items-center gap-2.5",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 rounded-2xl bg-black text-white font-bold text-[13px] py-3 px-5 shadow-md border border-black transition-all duration-200 group-hover:bg-slate-800 text-center flex items-center justify-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 54,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "+ Add Forwarder Profile" }, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 55,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$11,
					lineNumber: 53,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 52,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$11,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var _jsxFileName$10 = "/app/applet/src/components/nashmia/forwarders/ForwarderCard.tsx";
function getAvatarInitials$2(name) {
	const parts = name.trim().split(" ");
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return (parts[0][0] + parts[1][0]).toUpperCase();
}
function getCountryFlag(countryCode) {
	return {
		GB: "🇬🇧",
		PK: "🇵🇰",
		ES: "🇪🇸",
		DE: "🇩🇪",
		IT: "🇮🇹",
		FR: "🇫🇷",
		NL: "🇳🇱",
		US: "🇺🇸",
		AE: "🇦🇪",
		CN: "🇨🇳",
		SG: "🇸🇬"
	}[countryCode] || "🌐";
}
var AVATAR_GRADIENTS = [
	"from-[#6A80A9] via-[#859ABF] to-[#4F658E]",
	"from-[#475569] via-[#64748B] to-[#334155]",
	"from-[#0284C7] via-[#38BDF8] to-[#0369A1]",
	"from-[#059669] via-[#34D399] to-[#047857]",
	"from-[#6366F1] via-[#818CF8] to-[#4F46E5]"
];
function ForwarderCard({ forwarder, index = 0, onSelectForwarder, onEditForwarder, onToggleArchive, onSendTestEmail }) {
	const [isBookmarked, setIsBookmarked] = (0, import_react.useState)(false);
	const initials = getAvatarInitials$2(forwarder.name);
	const flag = getCountryFlag(forwarder.countryCode);
	const isInactive = forwarder.status === "Inactive" || forwarder.status === "Archived";
	const avatarGradient = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
	const handleShare = (e) => {
		e.stopPropagation();
		const shareUrl = window.location.href;
		navigator.clipboard.writeText(shareUrl);
		toast.success(`Share link copied for ${forwarder.name}`, { description: `${forwarder.badge} · ${forwarder.code}` });
	};
	const handleBookmarkToggle = (e) => {
		e.stopPropagation();
		setIsBookmarked(!isBookmarked);
		toast.success(isBookmarked ? `Removed ${forwarder.name} from saved` : `Saved ${forwarder.name} to favorites`);
	};
	const handleManageRateCards = (e) => {
		e.stopPropagation();
		onSelectForwarder(forwarder);
		toast.info("Rate Cards Overview", { description: `Viewing ${forwarder.rateCards.length} agreed monthly rate cards for ${forwarder.name}.` });
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		onClick: () => onSelectForwarder(forwarder),
		style: {
			animationDelay: `${index * 30}ms`,
			background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 55%, #EDF2F7 100%)"
		},
		className: cn("group relative flex min-h-[380px] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[32px] sm:rounded-[36px] border border-white/90 p-6 sm:p-7 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.08),0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-12px_rgba(106,128,169,0.18)] active:translate-y-0", isInactive && "opacity-75 grayscale-[25%]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" }, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 122,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: cn("size-16 sm:size-17 rounded-full border-2 border-white bg-gradient-to-br p-0.5 shadow-[0_6px_18px_rgba(106,128,169,0.22)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105", avatarGradient),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-full rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center text-white font-bold text-[18px] tracking-tight",
								children: initials
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 135,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 129,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-white text-xs shadow-xs border border-slate-100",
							title: forwarder.country,
							children: flag
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 139,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 128,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						onClick: (e) => e.stopPropagation(),
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: handleShare,
							title: "Share Forwarder Profile",
							className: "grid size-9 place-items-center rounded-full text-slate-500 hover:text-slate-900 hover:bg-white/80 transition-colors cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share2, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 155,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 149,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								"aria-label": `Actions for ${forwarder.name}`,
								className: "grid size-9 place-items-center rounded-full text-slate-400 hover:text-slate-900 hover:bg-white/80 transition-colors focus:outline-none cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ellipsis, { className: "size-4 stroke-[1.8]" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 165,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 160,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 159,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
							align: "end",
							className: "w-52 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
									className: "px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400",
									children: forwarder.name
								}, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 172,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onSelectForwarder(forwarder),
									className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-[#E8F1F3]/50",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5 text-[#6A80A9]" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 179,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 180,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$10,
									lineNumber: 175,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onEditForwarder(forwarder),
									className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 186,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Edit Forwarder" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 187,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$10,
									lineNumber: 182,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/new-booking",
										search: { bookingAgentId: forwarder.id },
										className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] font-semibold text-[#6A80A9] hover:bg-[#E8F1F3]",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5 text-[#6A80A9]" }, void 0, false, {
											fileName: _jsxFileName$10,
											lineNumber: 195,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Create Booking" }, void 0, false, {
											fileName: _jsxFileName$10,
											lineNumber: 196,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$10,
										lineNumber: 190,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 189,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onSendTestEmail(forwarder),
									className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-3.5 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 203,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Send Test Email" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 204,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$10,
									lineNumber: 199,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: handleManageRateCards,
									className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DollarSign, { className: "size-3.5 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 210,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Manage Rate Cards" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 211,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$10,
									lineNumber: 206,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 213,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onToggleArchive(forwarder.id),
									className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] text-slate-600 hover:bg-slate-100",
									children: forwarder.status === "Active" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Archive, { className: "size-3.5 text-amber-600" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 220,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Forwarder" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 221,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$10,
										lineNumber: 219,
										columnNumber: 21
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArchiveRestore, { className: "size-3.5 text-emerald-600" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 225,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Activate Forwarder" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 226,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$10,
										lineNumber: 224,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 214,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 168,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 158,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 148,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 126,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-[21px] sm:text-[22px] font-bold text-slate-900 tracking-tight leading-snug",
							children: forwarder.name
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 237,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[13.5px] font-medium text-slate-500 mt-0.5 truncate",
							children: [
								forwarder.badge,
								" · ",
								forwarder.contactPerson
							]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 240,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-white/95 border border-slate-200/70 px-3 py-0.5 text-[11px] font-semibold text-slate-700 shadow-2xs",
									children: [
										forwarder.countryCode,
										" · ",
										forwarder.country
									]
								}, void 0, true, {
									fileName: _jsxFileName$10,
									lineNumber: 246,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-white/95 border border-slate-200/70 px-3 py-0.5 text-[11px] font-semibold text-slate-700 shadow-2xs",
									children: [forwarder.shippingLines.slice(0, 2).join(", "), forwarder.shippingLines.length > 2 ? ` +${forwarder.shippingLines.length - 2}` : ""]
								}, void 0, true, {
									fileName: _jsxFileName$10,
									lineNumber: 249,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-white/95 border border-slate-200/70 px-2.5 py-0.5 text-[10.5px] font-mono font-semibold text-slate-500 shadow-2xs",
									children: forwarder.code
								}, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 253,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 245,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 236,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 grid grid-cols-3 gap-2 border-t border-slate-200/60 pt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "flex items-center gap-1 text-[15px] font-bold text-slate-900 leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "size-3.5 fill-slate-900 text-slate-900" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 264,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "4.9" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 265,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$10,
								lineNumber: 263,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11.5px] font-medium text-slate-400 mt-0.5",
								children: "Rating"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 267,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 262,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[15px] font-bold text-slate-900 leading-tight",
								children: [forwarder.activeBookings, " Active"]
							}, void 0, true, {
								fileName: _jsxFileName$10,
								lineNumber: 272,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11.5px] font-medium text-slate-400 mt-0.5",
								children: "Pipeline"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 275,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 271,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[15px] font-bold text-slate-900 leading-tight",
								children: [forwarder.rateCards.length, " Rates"]
							}, void 0, true, {
								fileName: _jsxFileName$10,
								lineNumber: 280,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11.5px] font-medium text-slate-400 mt-0.5",
								children: "Rate Cards"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 283,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 279,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 260,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 125,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onSelectForwarder(forwarder),
					className: "flex-1 rounded-full bg-white/95 hover:bg-white text-slate-900 font-bold text-[13.5px] py-3 px-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-slate-200/80 transition-all duration-200 hover:border-[#6A80A9]/40 hover:shadow-[0_8px_24px_rgba(106,128,169,0.12)] active:scale-[0.98] text-center cursor-pointer",
					children: "View Profile & Rates"
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 291,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: handleBookmarkToggle,
					title: isBookmarked ? "Remove bookmark" : "Save bookmark",
					className: cn("size-11 sm:size-12 rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-slate-200/80 shrink-0 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer", isBookmarked ? "bg-[#6A80A9] text-white border-[#6A80A9] shadow-[0_4px_14px_rgba(106,128,169,0.3)]" : "bg-white hover:bg-slate-50 text-slate-800"),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bookmark, { className: cn("size-4.5 stroke-[2]", isBookmarked && "fill-white") }, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 311,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 300,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 289,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$10,
		lineNumber: 110,
		columnNumber: 5
	}, this);
}
var _jsxFileName$9 = "/app/applet/src/components/nashmia/forwarders/ForwarderCardGrid.tsx";
function ForwarderCardGrid({ forwarders, onSelectForwarder, onEditForwarder, onToggleArchive, onSendTestEmail, onAddForwarder }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddForwarderCard, { onAddForwarder }, void 0, false, {
			fileName: _jsxFileName$9,
			lineNumber: 25,
			columnNumber: 7
		}, this), forwarders.map((forwarder, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwarderCard, {
			forwarder,
			index: idx + 1,
			onSelectForwarder,
			onEditForwarder,
			onToggleArchive,
			onSendTestEmail
		}, forwarder.id, false, {
			fileName: _jsxFileName$9,
			lineNumber: 29,
			columnNumber: 9
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 23,
		columnNumber: 5
	}, this);
}
var _jsxFileName$8 = "/app/applet/src/components/nashmia/forwarders/ForwarderDetailDrawer.tsx";
function getAvatarInitials$1(name) {
	const parts = name.trim().split(" ");
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return (parts[0][0] + parts[1][0]).toUpperCase();
}
function ForwarderDetailDrawer({ open, onOpenChange, forwarder, onEditForwarder, onToggleArchive, onOpenTestEmail }) {
	const [copiedField, setCopiedField] = (0, import_react.useState)(null);
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [isMobile, setIsMobile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const checkMobile = () => {
			setIsMobile(typeof window !== "undefined" ? window.innerWidth < 640 : false);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	const { elementRef, handleRef } = useSwipeToDismiss({
		direction: "down",
		onDismiss: () => onOpenChange(false),
		enabled: isMobile && open
	});
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onOpenChange(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = originalOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [open, onOpenChange]);
	if (!open || !forwarder) return null;
	const initials = getAvatarInitials$1(forwarder.name);
	const copyToClipboard = (text, label) => {
		navigator.clipboard.writeText(text);
		setCopiedField(label);
		toast.success(`Copied ${label}`, {
			description: text,
			duration: 2e3
		});
		setTimeout(() => setCopiedField(null), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 p-0 sm:p-4 backdrop-blur-sm animate-in fade-in",
		onClick: (e) => {
			if (e.target === e.currentTarget) onOpenChange(false);
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "glass-card-strong relative flex max-h-[92vh] w-full max-w-3xl flex-col rounded-t-[28px] rounded-b-none sm:rounded-[28px] border-t sm:border border-white/90 bg-white p-0 shadow-2xl animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					"data-swipe-handle": "true",
					className: "mx-auto pt-2 pb-1 flex h-6 w-full max-w-[140px] cursor-grab touch-none items-center justify-center sm:hidden select-none shrink-0 bg-gradient-to-r from-slate-50/90 via-white to-[#E8F1F3]/40",
					"aria-label": "Drag down to dismiss",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 129,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 124,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative border-b border-slate-100/90 bg-gradient-to-r from-slate-50/90 via-white to-[#E8F1F3]/40 p-5 sm:p-6 pb-4 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start sm:items-center gap-4 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid size-14 sm:size-16 shrink-0 place-items-center rounded-2xl border border-[#6A80A9]/25 bg-white text-[19px] font-bold text-[#6A80A9] shadow-sm",
								children: initials
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 137,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
											className: "text-xl sm:text-2xl font-bold tracking-tight text-slate-900 truncate",
											children: forwarder.name
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 143,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-tight shrink-0", forwarder.status === "Active" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-slate-100 text-slate-500 border border-slate-200"),
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("size-1.5 rounded-full", forwarder.status === "Active" ? "bg-emerald-500 animate-pulse" : "bg-slate-400") }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 154,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: forwarder.status }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 162,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 146,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 142,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[13px] text-slate-500 font-medium truncate mt-0.5",
										children: "Freight Forwarder & Ocean Logistics Partner"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 166,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap items-center gap-2 mt-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "rounded-lg bg-white border border-slate-200 px-2 py-0.5 font-mono text-[11px] font-bold text-slate-700 shadow-2xs",
												children: forwarder.code
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 171,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "rounded-md bg-[#E8F1F3] px-2 py-0.5 text-[11px] font-bold text-[#6A80A9]",
												children: forwarder.badge
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 174,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[11.5px] text-slate-400",
												children: [
													forwarder.country,
													" (",
													forwarder.countryCode,
													")"
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 177,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 170,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 141,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 135,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 self-stretch sm:self-auto shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/new-booking",
									search: { bookingAgentId: forwarder.id },
									onClick: () => onOpenChange(false),
									className: "flex-1 sm:flex-none inline-flex h-9.5 items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-black px-4 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-0.5 active:translate-y-0",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 192,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Create Booking" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 193,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 186,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => {
										onOpenTestEmail(forwarder);
									},
									className: "inline-flex h-9.5 items-center gap-1.5 rounded-xl border border-[#6A80A9]/30 bg-white px-3 text-xs font-semibold text-[#6A80A9] hover:bg-[#E8F1F3]/50 transition-colors shadow-2xs cursor-pointer",
									title: "Send test email",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 204,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "hidden sm:inline",
										children: "Test Email"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 205,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 196,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => onEditForwarder(forwarder),
									className: "inline-flex h-9.5 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer",
									title: "Edit Forwarder",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 214,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "hidden sm:inline",
										children: "Edit"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 215,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 208,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => onOpenChange(false),
									className: "grid size-9 place-items-center rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer ml-1",
									title: "Close (Esc)",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 224,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 218,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 185,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 134,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 mt-5 -mb-4 border-b border-transparent",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActiveTab("overview"),
								className: cn("pb-2.5 text-xs font-bold px-3 border-b-2 transition-all cursor-pointer", activeTab === "overview" ? "border-[#6A80A9] text-[#6A80A9]" : "border-transparent text-slate-500 hover:text-slate-800"),
								children: "Overview & Contact"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 231,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActiveTab("rates"),
								className: cn("pb-2.5 text-xs font-bold px-3 border-b-2 transition-all flex items-center gap-1.5 cursor-pointer", activeTab === "rates" ? "border-[#6A80A9] text-[#6A80A9]" : "border-transparent text-slate-500 hover:text-slate-800"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Rates & Lines" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 253,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-slate-100 px-1.5 py-0.2 text-[10px] font-bold text-slate-600",
									children: forwarder.rateCards.length
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 254,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 243,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActiveTab("bookings"),
								className: cn("pb-2.5 text-xs font-bold px-3 border-b-2 transition-all flex items-center gap-1.5 cursor-pointer", activeTab === "bookings" ? "border-[#6A80A9] text-[#6A80A9]" : "border-transparent text-slate-500 hover:text-slate-800"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Active Bookings" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 268,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-slate-100 px-1.5 py-0.2 text-[10px] font-bold text-slate-600",
									children: forwarder.activeBookings
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 269,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 258,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 230,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 133,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 scrollbar-thin",
					children: [
						activeTab === "overview" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-5",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
											children: "Active Bookings"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 283,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[22px] font-bold text-slate-900 leading-tight",
											children: forwarder.activeBookings
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 286,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 282,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
											children: "Agreed Rates"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 291,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[22px] font-bold text-slate-900 leading-tight",
											children: forwarder.rateCards.length
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 294,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 290,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
											children: "Shipping Lines"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 299,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[22px] font-bold text-[#6A80A9] leading-tight",
											children: forwarder.shippingLines.length
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 302,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 298,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
											children: "Tier Badge"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 307,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[13.5px] font-bold text-slate-800 truncate leading-snug",
											children: forwarder.badge
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 310,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 306,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 281,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (void 0)("h4", {
										className: "text-[11px] font-bold uppercase tracking-wider text-slate-400",
										children: "Primary Contact Information"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 318,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-slate-200 bg-slate-50/50 p-4 space-y-1",
												children: [
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
														children: "Contact Person"
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 324,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "font-bold text-slate-900 text-[14.5px]",
														children: forwarder.contactPerson
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 327,
														columnNumber: 21
													}, this),
													forwarder.contactRole && /* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-slate-500 font-medium",
														children: forwarder.contactRole
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 331,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 323,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-slate-200 bg-slate-50/50 p-4 space-y-1",
												children: [
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
														children: "Headquarters"
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 336,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "font-bold text-slate-900 text-[14.5px]",
														children: [
															forwarder.country,
															" (",
															forwarder.countryCode,
															")"
														]
													}, void 0, true, {
														fileName: _jsxFileName$8,
														lineNumber: 339,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-slate-500 font-mono",
														children: ["Agent Code: ", forwarder.code]
													}, void 0, true, {
														fileName: _jsxFileName$8,
														lineNumber: 342,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 335,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-slate-200 bg-white p-4 sm:col-span-2 flex items-center justify-between shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (void 0)("p", {
														className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
														children: "Email Address"
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 347,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "font-semibold text-slate-900 text-[14px] truncate mt-0.5",
														children: forwarder.email
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 350,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 346,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => copyToClipboard(forwarder.email, "Email"),
													className: "grid size-8 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer",
													title: "Copy Email",
													children: copiedField === "Email" ? /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-emerald-600" }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 361,
														columnNumber: 25
													}, this) : /* @__PURE__ */ (void 0)(Copy, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 363,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 354,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 345,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-slate-200 bg-white p-4 sm:col-span-2 flex items-center justify-between shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (void 0)("p", {
														className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
														children: "WhatsApp / Direct Phone"
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 370,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "font-mono font-semibold text-emerald-700 text-[14px] mt-0.5",
														children: forwarder.whatsapp
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 373,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 369,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => copyToClipboard(forwarder.whatsapp, "WhatsApp"),
													className: "grid size-8 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer",
													title: "Copy WhatsApp",
													children: copiedField === "WhatsApp" ? /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-emerald-600" }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 384,
														columnNumber: 25
													}, this) : /* @__PURE__ */ (void 0)(Copy, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 386,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 377,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 368,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 322,
										columnNumber: 17
									}, this),
									forwarder.notes && /* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-[#6A80A9]/20 bg-[#E8F1F3]/40 p-4 text-[12.5px] text-slate-700 space-y-1 mt-3",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "font-bold text-slate-900 flex items-center gap-1.5",
											children: [/* @__PURE__ */ (void 0)(Clock, { className: "size-3.5 text-[#6A80A9]" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 396,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: "Operational Notes" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 397,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 395,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-slate-600 leading-relaxed font-medium",
											children: forwarder.notes
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 399,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 394,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 317,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 279,
							columnNumber: 13
						}, this),
						activeTab === "rates" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "space-y-2.5",
								children: [/* @__PURE__ */ (void 0)("h4", {
									className: "text-[11px] font-bold uppercase tracking-wider text-slate-400",
									children: "Connected Shipping Lines & Alliances"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 410,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex flex-wrap gap-2.5",
									children: forwarder.shippingLines.map((line) => /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "grid size-7 place-items-center rounded-xl bg-[#E8F1F3] text-[#6A80A9]",
											children: /* @__PURE__ */ (void 0)(Ship, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 421,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 420,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
											className: "text-[13px] font-bold text-slate-900 leading-none",
											children: line
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 424,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-[10px] text-slate-400 mt-0.5",
											children: "Contracted Carrier"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 425,
											columnNumber: 25
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 423,
											columnNumber: 23
										}, this)]
									}, line, true, {
										fileName: _jsxFileName$8,
										lineNumber: 416,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 414,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 409,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
										className: "text-[14px] font-bold tracking-tight text-slate-900",
										children: "Contracted Ocean Rate Cards"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 436,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-slate-500",
										children: "Active agreed rates and validity periods"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 439,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 435,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(Link, {
										to: "/rate-cards",
										search: { forwarderId: forwarder.id },
										onClick: () => onOpenChange(false),
										className: "inline-flex items-center gap-1 rounded-xl border border-[#6A80A9]/30 bg-white px-3 py-1.5 text-xs font-semibold text-[#6A80A9] shadow-2xs hover:bg-[#E8F1F3]/60 transition-colors",
										children: [/* @__PURE__ */ (void 0)("span", { children: "View Rate Directory" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 450,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(ArrowRight, { className: "size-3" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 451,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 444,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 434,
									columnNumber: 17
								}, this), forwarder.rateCards.length === 0 ? /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-slate-400 italic py-3",
									children: "No active rate cards registered for this forwarder."
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 456,
									columnNumber: 19
								}, this) : /* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
									children: forwarder.rateCards.map((rc) => /* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs space-y-2.5 hover:border-slate-300 transition-colors",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-bold text-[14px] text-slate-900",
													children: rc.lane
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 467,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-mono font-bold text-xs rounded-lg bg-[#E8F1F3] px-2 py-0.5 text-[#6A80A9]",
													children: rc.containerSize
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 468,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 466,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-baseline justify-between pt-1 border-t border-slate-100",
												children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-mono text-[20px] font-bold text-slate-900",
													children: ["$", rc.rate.toLocaleString()]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 475,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "ml-1 text-xs font-bold text-slate-500 font-mono",
													children: rc.currency
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 478,
													columnNumber: 29
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 474,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-bold text-emerald-700 border border-emerald-200",
													children: [/* @__PURE__ */ (void 0)("span", { className: "size-1 rounded-full bg-emerald-500" }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 484,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)("span", { children: rc.status }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 485,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 483,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 473,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "text-[11px] text-slate-400",
												children: [
													"Effective:",
													" ",
													/* @__PURE__ */ (void 0)("strong", {
														className: "text-slate-600 font-semibold",
														children: rc.effectiveFrom
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 491,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 489,
												columnNumber: 25
											}, this)
										]
									}, rc.id, true, {
										fileName: _jsxFileName$8,
										lineNumber: 462,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 460,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 433,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 407,
							columnNumber: 13
						}, this),
						activeTab === "bookings" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
									className: "text-[14px] font-bold tracking-tight text-slate-900",
									children: "Active Bookings & Shipments"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 507,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-slate-500",
									children: ["Ocean shipments placed with ", forwarder.name]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 510,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 506,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)(Link, {
									to: "/new-booking",
									search: { bookingAgentId: forwarder.id },
									onClick: () => onOpenChange(false),
									className: "inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:underline",
									children: [/* @__PURE__ */ (void 0)("span", { children: "New Booking" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 520,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(ArrowRight, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 521,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 514,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 505,
								columnNumber: 15
							}, this), forwarder.recentMovements.length === 0 ? /* @__PURE__ */ (void 0)("div", {
								className: "rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-8 text-center",
								children: [
									/* @__PURE__ */ (void 0)(Container, { className: "mx-auto size-8 text-slate-300" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 527,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "mt-2 text-[13.5px] font-bold text-slate-700",
										children: "No active movements"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 528,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-slate-400 mt-0.5",
										children: "Bookings placed with this agent will display live stages here."
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 529,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 526,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (void 0)("div", {
								className: "space-y-2.5",
								children: forwarder.recentMovements.map((m) => /* @__PURE__ */ (void 0)("div", {
									className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs space-y-2 hover:border-slate-300 transition-colors",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2",
												children: [
													/* @__PURE__ */ (void 0)("span", {
														className: "font-mono font-bold text-[13.5px] text-slate-900",
														children: m.ref
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 542,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("span", {
														className: "text-xs text-slate-400",
														children: "·"
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 545,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("span", {
														className: "text-xs font-medium text-slate-700",
														children: ["Buyer: ", /* @__PURE__ */ (void 0)("strong", {
															className: "text-slate-900",
															children: m.buyerName
														}, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 547,
															columnNumber: 36
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$8,
														lineNumber: 546,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 541,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: cn("rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold", m.stage === "In Transit" ? "bg-blue-50 text-blue-700 border border-blue-200" : m.stage === "Delivered" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"),
												children: ["● ", m.stage]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 550,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 540,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between text-xs text-slate-600 pt-1 border-t border-slate-100",
											children: [/* @__PURE__ */ (void 0)("div", { children: ["Route: ", /* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-slate-900",
												children: m.route
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 566,
												columnNumber: 34
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 565,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "font-mono text-xs text-[#6A80A9] font-bold",
												children: [
													"Container: ",
													m.containerSize,
													" × ",
													m.containersCount
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 568,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 564,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between text-[11px] text-slate-500 pt-1.5 bg-slate-50 -mx-4 -mb-4 px-4 py-2 rounded-b-2xl border-t border-slate-100",
											children: [/* @__PURE__ */ (void 0)("span", { children: ["Vessel: ", /* @__PURE__ */ (void 0)("strong", {
												className: "text-slate-800",
												children: m.vessel
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 575,
												columnNumber: 35
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 574,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", { children: ["ETD: ", /* @__PURE__ */ (void 0)("strong", {
												className: "text-slate-800",
												children: m.etd
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 578,
												columnNumber: 32
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 577,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 573,
											columnNumber: 23
										}, this)
									]
								}, m.id, true, {
									fileName: _jsxFileName$8,
									lineNumber: 536,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 534,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 504,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 277,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border-t border-slate-100 px-6 py-4 bg-slate-50/80 flex items-center justify-between shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onToggleArchive(forwarder.id),
						className: "flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer",
						children: forwarder.status === "Active" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Archive, { className: "size-3.5 text-amber-600" }, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 598,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Forwarder" }, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 599,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 597,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArchiveRestore, { className: "size-3.5 text-emerald-600" }, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 603,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Activate Forwarder" }, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 604,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 602,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 591,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onOpenChange(false),
						className: "h-9 rounded-xl border border-slate-200 bg-white px-5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-2xs cursor-pointer",
						children: "Close"
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 609,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 590,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 122,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 114,
		columnNumber: 5
	}, this);
}
var _jsxFileName$7 = "/app/applet/src/components/nashmia/forwarders/ForwardersEmptyState.tsx";
function ForwardersEmptyState({ isSearchEmpty = false, onResetFilters, onAddForwarder }) {
	if (isSearchEmpty) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col items-center justify-center rounded-[24px] border border-white/80 bg-white/70 px-6 py-16 text-center shadow-[0_12px_36px_rgba(15,23,42,0.03)] backdrop-blur-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid size-16 place-items-center rounded-2xl border border-slate-200/80 bg-[#E8F1F3]/80 text-[#6A80A9] shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-7" }, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 18,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 17,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "mt-4 text-[18px] font-semibold text-[#000000]",
				children: "No Forwarders Found"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 20,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1.5 max-w-md text-[13.5px] text-slate-500",
				children: "No booking agents match your current search criteria or active filters."
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 21,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onResetFilters,
				className: "mt-5 inline-flex h-10 items-center gap-2 rounded-[12px] border border-slate-200/80 bg-white px-4 text-[13px] font-medium text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "size-3.5" }, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 29,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Clear Filters" }, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 30,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 24,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 16,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col items-center justify-center rounded-[24px] border border-white/80 bg-white/70 px-6 py-20 text-center shadow-[0_12px_36px_rgba(15,23,42,0.03)] backdrop-blur-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid size-18 place-items-center rounded-2xl border border-[#6A80A9]/20 bg-[#E8F1F3] text-[#6A80A9] shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-8" }, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 39,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 38,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "mt-4 text-[20px] font-semibold tracking-[-0.02em] text-[#000000]",
				children: "No Forwarders Yet"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 41,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1.5 max-w-md text-[14px] text-slate-500 leading-relaxed",
				children: "Add your booking agents to start managing booking requests and agreed rates."
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onAddForwarder,
				className: "mt-6 flex h-[48px] items-center gap-2 rounded-[14px] bg-[#000000] px-6 text-[14px] font-medium text-white shadow-[0_8px_20px_rgba(0,0,0,0.14)] hover:bg-slate-900 transition-all hover:scale-[1.02] active:scale-[0.98]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 52,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "+ Add Forwarder" }, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 53,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 47,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 37,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "/app/applet/src/components/nashmia/forwarders/ForwardersHeader.tsx";
function ForwardersHeader({ onOpenMobileMenu, onAddForwarder }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-start gap-3",
			children: [onOpenMobileMenu && /* @__PURE__ */ (void 0)("button", {
				type: "button",
				onClick: onOpenMobileMenu,
				"aria-label": "Toggle navigation menu",
				className: "mt-1 grid size-11 shrink-0 place-items-center rounded-[14px] border border-slate-200/80 bg-white/80 text-black shadow-2xs backdrop-blur-md transition-all hover:bg-white lg:hidden",
				children: /* @__PURE__ */ (void 0)(Menu, { className: "size-5" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 20,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 14,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6A80A9]",
						children: "DIRECTORY"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 25,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-[32px] font-semibold tracking-[-0.03em] text-[#000000] sm:text-[38px] lg:text-[40px] leading-tight",
						children: "Forwarders"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 28,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "max-w-2xl text-[14px] text-slate-500 leading-relaxed",
						children: "Manage booking agents, contacts and communication details."
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 31,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 24,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 12,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center gap-3",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onAddForwarder,
				className: "group relative flex h-[50px] items-center gap-2.5 rounded-[14px] bg-[#000000] px-6 text-[14px] font-medium text-[#FFFFFF] shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_16px_36px_rgba(0,0,0,0.26)] active:translate-y-0 active:scale-[0.99]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4 transition-transform duration-200 group-hover:rotate-90" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 44,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "+ Add Forwarder" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 45,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 39,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 38,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/app/applet/src/components/nashmia/forwarders/ForwardersListView.tsx";
function getAvatarInitials(name) {
	const parts = name.trim().split(" ");
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return (parts[0][0] + parts[1][0]).toUpperCase();
}
function ForwardersListView({ forwarders, onSelectForwarder, onEditForwarder, onToggleArchive, onSendTestEmail }) {
	const [copiedId, setCopiedId] = (0, import_react.useState)(null);
	const copyToClipboard = (e, text, id, label) => {
		e.stopPropagation();
		navigator.clipboard.writeText(text);
		setCopiedId(id);
		toast.success(`Copied ${label}`, {
			description: text,
			duration: 2e3
		});
		setTimeout(() => setCopiedId(null), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative overflow-hidden rounded-[20px] border border-white/85 bg-white/80 shadow-[0_12px_36px_rgba(15,23,42,0.035)] backdrop-blur-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "md:hidden divide-y divide-slate-100/90",
			children: forwarders.map((fwd) => {
				const initials = getAvatarInitials(fwd.name);
				const isInactive = fwd.status === "Inactive" || fwd.status === "Archived";
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					onClick: () => onSelectForwarder(fwd),
					className: cn("p-4 space-y-3 cursor-pointer transition-colors active:bg-slate-50", isInactive ? "opacity-75 bg-slate-50/50" : "hover:bg-[#E8F1F3]/25"),
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid size-11 shrink-0 place-items-center rounded-xl border border-[#6A80A9]/20 bg-[#E8F1F3] text-[13px] font-bold text-[#6A80A9] shadow-2xs",
									children: initials
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 84,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-sm font-bold text-slate-900 truncate",
										children: fwd.name
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 88,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-slate-500 truncate flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "size-3 text-slate-400 shrink-0" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 90,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: fwd.contactPerson }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 91,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 89,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 87,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 83,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold shrink-0", fwd.status === "Active" ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60" : "bg-slate-100 text-slate-600 border border-slate-200"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("size-1.5 rounded-full", fwd.status === "Active" ? "bg-emerald-500" : "bg-slate-400") }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 103,
									columnNumber: 19
								}, this), fwd.status]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 95,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 82,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between gap-2 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5 flex-wrap min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-3 text-slate-400 shrink-0" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 116,
										columnNumber: 19
									}, this),
									fwd.shippingLines.slice(0, 3).map((sl) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 truncate",
										children: sl
									}, sl, false, {
										fileName: _jsxFileName$5,
										lineNumber: 118,
										columnNumber: 21
									}, this)),
									fwd.shippingLines.length > 3 && /* @__PURE__ */ (void 0)("span", {
										className: "text-[10px] text-slate-400 font-medium",
										children: ["+", fwd.shippingLines.length - 3]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 126,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 115,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "rounded-full bg-[#E8F1F3] px-2 py-0.5 text-[11px] font-bold text-[#24828E] shrink-0",
								children: [fwd.activeBookingsCount, " bookings"]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 131,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 114,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between pt-2 border-t border-slate-100 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: fwd.email && /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: (e) => copyToClipboard(e, fwd.email, `m-email-${fwd.id}`, "Email"),
									className: "inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 hover:text-slate-900 bg-slate-100 px-2 py-1 rounded-md",
									children: [/* @__PURE__ */ (void 0)(Mail, { className: "size-3" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 145,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "max-w-[120px] truncate",
										children: fwd.email
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 146,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 140,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 138,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: (e) => {
										e.stopPropagation();
										onEditForwarder(fwd);
									},
									className: "p-1.5 rounded-lg text-slate-500 hover:bg-slate-100",
									title: "Edit Forwarder",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 160,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 151,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-4 text-slate-400" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 162,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 150,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 137,
							columnNumber: 15
						}, this)
					]
				}, fwd.id, true, {
					fileName: _jsxFileName$5,
					lineNumber: 74,
					columnNumber: 13
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 68,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "hidden md:block overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
				className: "w-full text-left border-collapse min-w-[980px]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
					className: "border-b border-slate-100/90 bg-slate-50/40 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-4 pl-6 pr-4",
							children: "Forwarder"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 175,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-4 px-4",
							children: "Contact Person"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 176,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-4 px-4",
							children: "Email"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 177,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-4 px-4",
							children: "WhatsApp"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 178,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-4 px-4",
							children: "Shipping Lines"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 179,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-4 px-4 text-center",
							children: "Active Bookings"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 180,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-4 px-4 text-center",
							children: "Status"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 181,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-4 pl-4 pr-6 text-right",
							children: "Actions"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 182,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 174,
					columnNumber: 13
				}, this) }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 173,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
					className: "divide-y divide-slate-100/80 text-[13.5px]",
					children: forwarders.map((fwd) => {
						const initials = getAvatarInitials(fwd.name);
						const isInactive = fwd.status === "Inactive" || fwd.status === "Archived";
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
							onClick: () => onSelectForwarder(fwd),
							className: cn("group cursor-pointer transition-colors duration-150", isInactive ? "bg-slate-50/30 opacity-70 hover:bg-[#E8F1F3]/30 hover:opacity-100" : "hover:bg-[#E8F1F3]/40"),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-4 pl-6 pr-4",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "grid size-10 shrink-0 place-items-center rounded-full border border-[#6A80A9]/20 bg-[#E8F1F3] text-[13px] font-bold text-[#6A80A9] shadow-2xs group-hover:border-[#6A80A9]/40 group-hover:scale-105 transition-all",
											children: initials
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 204,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-semibold text-[#000000] text-[14.5px] group-hover:text-[#6A80A9] transition-colors truncate",
												children: fwd.name
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 209,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-1.5 mt-0.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "inline-block rounded-md bg-[#E8F1F3]/80 px-1.5 py-0.5 text-[10.5px] font-medium text-[#6A80A9]",
														children: fwd.badge
													}, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 213,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "text-[11px] text-slate-400",
														children: "·"
													}, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 216,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "text-[11.5px] text-slate-500 font-mono",
														children: fwd.country
													}, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 217,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 212,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 208,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 203,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 202,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-4 px-4",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-medium text-[#000000]",
											children: fwd.contactPerson
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 228,
											columnNumber: 23
										}, this), fwd.contactRole && /* @__PURE__ */ (void 0)("p", {
											className: "text-[11.5px] text-slate-400 truncate",
											children: fwd.contactRole
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 230,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 227,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 226,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-4 px-4",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "max-w-[190px] truncate font-medium text-slate-700",
											children: fwd.email
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 238,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: (e) => copyToClipboard(e, fwd.email, `email-${fwd.id}`, "Email"),
											className: "grid size-7 place-items-center rounded-md border border-transparent text-slate-400 opacity-0 group-hover:opacity-100 hover:border-slate-200 hover:bg-white hover:text-black transition-all",
											title: "Copy email",
											children: copiedId === `email-${fwd.id}` ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3 text-emerald-600" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 248,
												columnNumber: 27
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "size-3" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 250,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 241,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 237,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 236,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-4 px-4",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1 font-mono text-[12.5px] text-slate-700",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, { className: "size-3 text-emerald-600" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 260,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: fwd.whatsapp }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 261,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 259,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: (e) => copyToClipboard(e, fwd.whatsapp, `wa-${fwd.id}`, "WhatsApp"),
											className: "grid size-7 place-items-center rounded-md border border-transparent text-slate-400 opacity-0 group-hover:opacity-100 hover:border-slate-200 hover:bg-white hover:text-black transition-all",
											title: "Copy WhatsApp",
											children: copiedId === `wa-${fwd.id}` ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3 text-emerald-600" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 272,
												columnNumber: 27
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "size-3" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 274,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 263,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 258,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 257,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-4 px-4",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap items-center gap-1 max-w-[220px]",
										children: fwd.shippingLines.map((sl) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1 rounded-[8px] border border-[#6A80A9]/20 bg-[#E8F1F3]/50 px-2 py-0.5 text-[11px] font-semibold text-slate-800 shadow-2xs",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-2.5 text-[#6A80A9]" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 288,
												columnNumber: 27
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: sl }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 289,
												columnNumber: 27
											}, this)]
										}, sl, true, {
											fileName: _jsxFileName$5,
											lineNumber: 284,
											columnNumber: 25
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 282,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 281,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-4 px-4 text-center",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "inline-flex items-center justify-center rounded-full bg-[#E8F1F3]/90 px-3 py-1 font-mono text-[12.5px] font-bold text-[#6A80A9] border border-[#6A80A9]/25 shadow-2xs",
										children: [fwd.activeBookings, " active"]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 297,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 296,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-4 px-4 text-center",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11.5px] font-medium tracking-tight", fwd.status === "Active" ? "bg-[#C7D5BF]/40 text-[#2B3B24] border border-[#C7D5BF]/70" : "bg-slate-100 text-slate-500 border border-slate-200"),
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("size-1.5 rounded-full", fwd.status === "Active" ? "bg-[#3D5A32]" : "bg-slate-400") }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 312,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: fwd.status }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 318,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 304,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 303,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-4 pl-4 pr-6 text-right",
									onClick: (e) => e.stopPropagation(),
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-end gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: "/new-booking",
											search: { bookingAgentId: fwd.id },
											className: "inline-flex h-8 items-center gap-1.5 rounded-[9px] bg-[#000000] px-3 text-[12px] font-medium text-white shadow-2xs transition-all hover:bg-slate-900",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 330,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Book" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 331,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 325,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
												type: "button",
												"aria-label": "More actions",
												className: "grid size-8 place-items-center rounded-[9px] border border-slate-200/70 bg-white/70 text-slate-500 hover:bg-white hover:text-black hover:shadow-2xs transition-all",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ellipsis, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 341,
													columnNumber: 29
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 336,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 335,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
											align: "end",
											className: "w-48 rounded-[16px] border border-white/80 bg-white/95 p-1.5 shadow-[0_16px_36px_rgba(15,23,42,0.08)] backdrop-blur-2xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
													onClick: () => onSelectForwarder(fwd),
													className: "flex cursor-pointer items-center gap-2 rounded-[10px] px-2.5 py-1.5 text-[13px] text-slate-700 hover:bg-slate-100",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "size-3.5 text-[#6A80A9]" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 352,
														columnNumber: 29
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Profile" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 353,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$5,
													lineNumber: 348,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
													onClick: () => onEditForwarder(fwd),
													className: "flex cursor-pointer items-center gap-2 rounded-[10px] px-2.5 py-1.5 text-[13px] text-slate-700 hover:bg-slate-100",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5 text-slate-500" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 360,
														columnNumber: 29
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Edit Forwarder" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 361,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$5,
													lineNumber: 356,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
													onClick: () => onSendTestEmail(fwd),
													className: "flex cursor-pointer items-center gap-2 rounded-[10px] px-2.5 py-1.5 text-[13px] text-slate-700 hover:bg-slate-100",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-3.5 text-[#6A80A9]" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 368,
														columnNumber: 29
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Send Test Email" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 369,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$5,
													lineNumber: 364,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 372,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
													onClick: () => onToggleArchive(fwd.id),
													className: "flex cursor-pointer items-center gap-2 rounded-[10px] px-2.5 py-1.5 text-[13px] text-amber-700 hover:bg-amber-50",
													children: fwd.status === "Active" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Archive, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 380,
														columnNumber: 33
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Forwarder" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 381,
														columnNumber: 33
													}, this)] }, void 0, true, {
														fileName: _jsxFileName$5,
														lineNumber: 379,
														columnNumber: 31
													}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArchiveRestore, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 385,
														columnNumber: 33
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Activate Forwarder" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 386,
														columnNumber: 33
													}, this)] }, void 0, true, {
														fileName: _jsxFileName$5,
														lineNumber: 384,
														columnNumber: 31
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 374,
													columnNumber: 27
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 344,
											columnNumber: 25
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 334,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 324,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 323,
									columnNumber: 19
								}, this)
							]
						}, fwd.id, true, {
							fileName: _jsxFileName$5,
							lineNumber: 191,
							columnNumber: 17
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 185,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 172,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 171,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 66,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/nashmia/forwarders/ForwardersSummaryStrip.tsx";
function ForwardersSummaryStrip({ totalCount = 18, activeCount = 16, activeBookingsCount = 42, shippingLinesCount = 7 }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative w-full min-w-0 max-w-full",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -top-8 inset-x-0 mx-auto h-72 w-full max-w-full sm:max-w-4xl bg-gradient-to-r from-amber-400/20 via-orange-300/15 to-teal-400/15 blur-3xl opacity-65 -z-10" }, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 19,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)] flex flex-col justify-between min-h-[145px] sm:min-h-[155px]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 29,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 28,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Active"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 32,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Accounts"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 35,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 31,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 27,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: activeCount
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 43,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-end gap-1.5 h-6 pb-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-2 rounded-full bg-slate-900/90" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 48,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-3.5 rounded-full bg-slate-900/90" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 49,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-6 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 50,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 51,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-2.5 rounded-full bg-slate-900/80" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 52,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 47,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 42,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] p-5 sm:p-6 border border-amber-400/20 shadow-[0_16px_36px_-10px_rgba(110,65,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_-10px_rgba(110,65,25,0.4)] flex flex-col justify-between min-h-[145px] sm:min-h-[155px]",
					style: { background: `
              radial-gradient(circle at 85% 15%, rgba(165, 105, 45, 0.85) 0%, transparent 60%),
              radial-gradient(circle at 20% 80%, rgba(125, 75, 30, 0.5) 0%, transparent 60%),
              linear-gradient(135deg, #44311e 0%, #684824 52%, #382515 100%)
            ` },
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 71,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-11 sm:size-12 rounded-full border border-amber-200/30 bg-white/5 backdrop-blur-xs flex items-center justify-center text-amber-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DollarSign, { className: "size-5 stroke-[1.8] text-amber-100" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 76,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 75,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-amber-100/95",
									children: "Active"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 79,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-amber-100/95",
									children: "Bookings"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 82,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 78,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 74,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-baseline",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[28px] sm:text-[32px] font-bold text-white tracking-tight leading-none",
									children: activeBookingsCount
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 91,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-normal text-amber-200/80 ml-1",
									children: "bkgs"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 94,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 90,
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
											fileName: _jsxFileName$4,
											lineNumber: 100,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "22",
											cy: "5",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 106,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "42",
											cy: "18",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 107,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "62",
											cy: "8",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 108,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 99,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 98,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 89,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 60,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)] flex flex-col justify-between min-h-[145px] sm:min-h-[155px]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 121,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 120,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Total"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 124,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Forwarders"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 127,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 123,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 119,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: totalCount
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 135,
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
									fileName: _jsxFileName$4,
									lineNumber: 141,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 140,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 139,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 134,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 117,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)] flex flex-col justify-between min-h-[145px] sm:min-h-[155px]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 159,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 158,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Connected"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 162,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Lines"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 165,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 161,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 157,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: shippingLinesCount
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 173,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-rows-3 grid-flow-col gap-x-1.5 gap-y-1 pb-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 178,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 179,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 180,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 182,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-400" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 183,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 184,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 186,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 187,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 188,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 190,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-400" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 191,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 192,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 194,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 195,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 196,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 177,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 172,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 155,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 21,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/nashmia/forwarders/ForwardersToolbar.tsx";
function ForwardersToolbar({ searchQuery, onSearchChange, selectedShippingLine, onShippingLineChange, selectedStatus, onStatusChange, selectedCountry, onCountryChange, sortBy, onSortChange, viewMode, onViewModeChange, onResetFilters }) {
	const searchInputRef = (0, import_react.useRef)(null);
	const hasActiveFilters = searchQuery !== "" || selectedShippingLine !== "all" || selectedStatus !== "all" || selectedCountry !== "all" || sortBy !== "name-asc";
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				searchInputRef.current?.focus();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	const currentSortLabel = FORWARDER_SORT_OPTIONS.find((s) => s.value === sortBy)?.label || "Sort";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative rounded-[18px] border border-white/85 bg-white/72 p-3 shadow-[0_16px_44px_rgba(15,23,42,0.04)] backdrop-blur-[24px] transition-all duration-300",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 88,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						ref: searchInputRef,
						type: "text",
						value: searchQuery,
						onChange: (e) => onSearchChange(e.target.value),
						placeholder: "Search forwarders, contacts or email...",
						className: "h-[46px] w-full rounded-[14px] border border-slate-200/70 bg-white/60 pl-11 pr-20 text-[14px] text-black placeholder:text-slate-400 transition-all duration-200 focus:border-[#6A80A9]/50 focus:bg-[#E8F1F3]/40 focus:shadow-[0_0_0_3px_rgba(106,128,169,0.12)] focus:outline-none"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 89,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5",
						children: searchQuery ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onSearchChange(""),
							"aria-label": "Clear search input",
							className: "rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-200/60 hover:text-slate-700",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 106,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 100,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", {
							className: "pointer-events-none hidden items-center gap-0.5 rounded-[7px] border border-slate-200/80 bg-white/80 px-2 py-1 font-mono text-[11px] font-medium text-slate-400 shadow-2xs sm:inline-flex",
							children: "⌘ K"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 109,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 98,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 87,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: cn("inline-flex h-[42px] items-center gap-2 rounded-[13px] border px-3.5 text-[13px] font-medium transition-all duration-200", selectedShippingLine !== "all" ? "border-[#6A80A9]/40 bg-[#6A80A9]/15 text-[#3D5276] shadow-xs" : "border-slate-200/70 bg-white/60 text-slate-700 hover:bg-white hover:text-black"),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-3.5 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 130,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "max-w-[130px] truncate",
									children: selectedShippingLine === "all" ? "Shipping Line" : selectedShippingLine
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 131,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 134,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 121,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 120,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
						align: "end",
						className: "w-56 rounded-[18px] border border-white/80 bg-white/95 p-1.5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
								className: "px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400",
								children: "Filter by Carrier Line"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 141,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onShippingLineChange("all"),
								className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All Shipping Lines" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 148,
									columnNumber: 17
								}, this), selectedShippingLine === "all" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 149,
									columnNumber: 52
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 144,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 151,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "max-h-56 overflow-y-auto",
								children: FORWARDER_SHIPPING_LINES_OPTIONS.filter((sl) => sl !== "All Shipping Lines").map((sl) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onShippingLineChange(sl),
									className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-1.5 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: sl }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 160,
										columnNumber: 23
									}, this), selectedShippingLine === sl && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 161,
										columnNumber: 55
									}, this)]
								}, sl, true, {
									fileName: _jsxFileName$3,
									lineNumber: 155,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 152,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 137,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 119,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: cn("inline-flex h-[42px] items-center gap-2 rounded-[13px] border px-3.5 text-[13px] font-medium transition-all duration-200", selectedStatus !== "all" ? "border-[#6A80A9]/30 bg-[#6A80A9]/10 text-[#6A80A9] shadow-xs" : "border-slate-200/70 bg-white/60 text-slate-700 hover:bg-white hover:text-black"),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Funnel, { className: "size-3.5 text-slate-400" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 181,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: selectedStatus === "all" ? "Status" : selectedStatus }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 182,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 183,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 172,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 171,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
						align: "end",
						className: "w-48 rounded-[18px] border border-white/80 bg-white/95 p-1.5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
								className: "px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400",
								children: "Filter by Status"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 190,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onStatusChange("all"),
								className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All Statuses" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 197,
									columnNumber: 17
								}, this), selectedStatus === "all" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 198,
									columnNumber: 46
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 193,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 200,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onStatusChange("Active"),
								className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-1.5 text-[13px] text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-emerald-500" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 206,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Active" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 207,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 205,
									columnNumber: 17
								}, this), selectedStatus === "Active" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 209,
									columnNumber: 49
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 201,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onStatusChange("Inactive"),
								className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-1.5 text-[13px] text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-slate-400" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 216,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Inactive" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 217,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 215,
									columnNumber: 17
								}, this), selectedStatus === "Inactive" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 219,
									columnNumber: 51
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 211,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 186,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 170,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: cn("inline-flex h-[42px] items-center gap-2 rounded-[13px] border px-3.5 text-[13px] font-medium transition-all duration-200", selectedCountry !== "all" ? "border-[#6A80A9]/30 bg-[#6A80A9]/10 text-[#6A80A9] shadow-xs" : "border-slate-200/70 bg-white/60 text-slate-700 hover:bg-white hover:text-black"),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Earth, { className: "size-3.5 text-slate-400" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 236,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "max-w-[120px] truncate",
									children: selectedCountry === "all" ? "Country" : selectedCountry
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 237,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 240,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 227,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 226,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
						align: "end",
						className: "w-56 rounded-[18px] border border-white/80 bg-white/95 p-1.5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
								className: "px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400",
								children: "Filter by Country"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 247,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onCountryChange("all"),
								className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All Countries" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 254,
									columnNumber: 17
								}, this), selectedCountry === "all" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 255,
									columnNumber: 47
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 250,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 257,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "max-h-52 overflow-y-auto",
								children: FORWARDER_COUNTRY_OPTIONS.filter((c) => c !== "All Countries").map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onCountryChange(c),
									className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-1.5 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: c }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 265,
										columnNumber: 21
									}, this), selectedCountry === c && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 266,
										columnNumber: 47
									}, this)]
								}, c, true, {
									fileName: _jsxFileName$3,
									lineNumber: 260,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 258,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 243,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 225,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "inline-flex h-[42px] items-center gap-2 rounded-[13px] border border-slate-200/70 bg-white/60 px-3.5 text-[13px] font-medium text-slate-700 transition-all duration-200 hover:bg-white hover:text-black",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 280,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: currentSortLabel }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 281,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 282,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 276,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 275,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
						align: "end",
						className: "w-56 rounded-[18px] border border-white/80 bg-white/95 p-1.5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
							className: "px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400",
							children: "Sort Forwarders By"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 289,
							columnNumber: 15
						}, this), FORWARDER_SORT_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
							onClick: () => onSortChange(opt.value),
							className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-1.5 text-[13px] text-slate-700 hover:bg-slate-100",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: opt.label }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 298,
								columnNumber: 19
							}, this), sortBy === opt.value && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 299,
								columnNumber: 44
							}, this)]
						}, opt.value, true, {
							fileName: _jsxFileName$3,
							lineNumber: 293,
							columnNumber: 17
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 285,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 274,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center rounded-[13px] border border-slate-200/70 bg-white/60 p-1 shadow-2xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onViewModeChange("grid"),
							className: cn("flex size-[34px] items-center justify-center rounded-[9px] transition-all", viewMode === "grid" ? "bg-[#6A80A9] text-white shadow-2xs" : "text-slate-400 hover:text-black"),
							title: "Grid View (Default)",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutGrid, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 318,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 307,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onViewModeChange("list"),
							className: cn("flex size-[34px] items-center justify-center rounded-[9px] transition-all", viewMode === "list" ? "bg-[#6A80A9] text-white shadow-2xs" : "text-slate-400 hover:text-black"),
							title: "List View",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 331,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 320,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 306,
						columnNumber: 11
					}, this),
					hasActiveFilters && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: onResetFilters,
						className: "inline-flex h-[42px] items-center gap-1.5 rounded-[13px] border border-slate-200/60 bg-white px-3 text-[12.5px] font-medium text-slate-600 shadow-2xs transition-all hover:bg-slate-50 hover:text-slate-900",
						children: [/* @__PURE__ */ (void 0)(RotateCcw, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 342,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", { children: "Clear" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 343,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 337,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 117,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 85,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 84,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/nashmia/forwarders/SendTestEmailModal.tsx";
function SendTestEmailModal({ open, onOpenChange, forwarder }) {
	const [subject, setSubject] = (0, import_react.useState)("[NASHMIA LOGISTICS] Booking Inquiry & Rate Verification - Nashmia Industries");
	const [message, setMessage] = (0, import_react.useState)("");
	const [isSending, setIsSending] = (0, import_react.useState)(false);
	const [isMobile, setIsMobile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const checkMobile = () => {
			setIsMobile(typeof window !== "undefined" ? window.innerWidth < 640 : false);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	const { elementRef, handleRef } = useSwipeToDismiss({
		direction: "down",
		onDismiss: () => onOpenChange(false),
		enabled: isMobile && open
	});
	(0, import_react.useEffect)(() => {
		if (forwarder) setMessage(`Dear ${forwarder.contactPerson || "Booking Team"},\n\nThis is a test communication dispatch from the Nashmia Logistics Platform to verify operational email deliverability and active rate card sync for upcoming ocean container dispatches.\n\nCarrier Alliance: ${forwarder.shippingLines.join(", ")}\nAgent Code: ${forwarder.code}\n\nBest regards,\nNashmia Freight Operations`);
	}, [forwarder, open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onOpenChange(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = originalOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [open, onOpenChange]);
	if (!open || !forwarder) return null;
	const handleSend = () => {
		setIsSending(true);
		setTimeout(() => {
			setIsSending(false);
			onOpenChange(false);
			toast.success("Test Email Dispatched", { description: `Dispatched to ${forwarder.email} (${forwarder.name})` });
		}, 900);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 p-0 sm:p-4 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto",
		onClick: (e) => {
			if (e.target === e.currentTarget) onOpenChange(false);
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			ref: elementRef,
			className: cn("glass-card-strong relative flex w-full max-w-xl flex-col bg-white text-slate-900 shadow-2xl transition-all overflow-hidden outline-none", "max-h-[92vh] rounded-t-[28px] rounded-b-none border-t sm:border border-white/90 p-0 pb-[max(1.5rem,env(safe-area-inset-bottom))] animate-in slide-in-from-bottom duration-240 ease-[cubic-bezier(0.16,1,0.3,1)]", "sm:rounded-[28px] sm:max-h-[92vh] sm:slide-in-from-bottom-0 sm:zoom-in-95 sm:duration-150"),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					ref: handleRef,
					"data-swipe-handle": "true",
					className: "group mx-auto pt-2.5 pb-1 flex h-7 w-full max-w-[180px] cursor-grab touch-none items-center justify-center sm:hidden active:cursor-grabbing select-none",
					"aria-label": "Drag down to dismiss",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300 transition-all duration-150 group-hover:bg-slate-400 group-active:scale-x-110 group-active:bg-slate-500" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 104,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 98,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between border-b border-slate-100/90 px-6 py-4.5 bg-[#F8FAFC]/90 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "grid size-10 place-items-center rounded-2xl bg-[#6A80A9]/10 text-[#6A80A9] font-bold shadow-2xs",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 111,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 110,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-base sm:text-lg font-extrabold text-slate-900",
							children: "Send Operational Test Email"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 114,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-slate-500",
							children: "Verify booking agent deliverability and communication workflow."
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 117,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 113,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 109,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onOpenChange(false),
						className: "grid size-8 place-items-center rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer",
						title: "Close (Esc)",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 128,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 122,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 108,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-6 space-y-4 overflow-y-auto scrollbar-thin",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl border border-slate-200/80 bg-[#E8F1F3]/40 p-3.5 space-y-2 text-[13px]",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-slate-500 font-medium",
									children: "To Forwarder:"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 136,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-semibold text-slate-900",
									children: forwarder.name
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 137,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 135,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-slate-500 font-medium",
									children: "Recipient Address:"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 140,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-mono text-slate-800 font-semibold",
									children: forwarder.email
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 141,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 139,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 134,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "text-xs font-bold text-slate-700",
								children: "Subject Line"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 146,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								value: subject,
								onChange: (e) => setSubject(e.target.value),
								className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-xs sm:text-[13px] font-semibold text-slate-900 focus:bg-white focus:border-[#6A80A9] focus:ring-4 focus:ring-[#6A80A9]/10 focus:outline-none transition-all"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 147,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 145,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "text-xs font-bold text-slate-700",
								children: "Message Body"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 156,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
								rows: 6,
								value: message,
								onChange: (e) => setMessage(e.target.value),
								className: "w-full rounded-xl border border-slate-200 bg-slate-50/60 p-3.5 text-xs sm:text-[13px] font-medium text-slate-900 focus:bg-white focus:border-[#6A80A9] focus:ring-4 focus:ring-[#6A80A9]/10 focus:outline-none transition-all"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 157,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 155,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-xl bg-[#E8F1F3]/30 p-3 text-[11.5px] text-slate-600 flex items-center gap-2 border border-[#6A80A9]/20",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-4 text-[#6A80A9] shrink-0" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 166,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Connected to Nashmia Email Engine. Real dispatch delivers live notification to forwarder inbox." }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 167,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 165,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 133,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border-t border-slate-100 px-6 py-4 flex items-center justify-end gap-3 bg-slate-50/80 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onOpenChange(false),
						className: "rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer",
						children: "Cancel"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 176,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleSend,
						disabled: isSending,
						className: "flex items-center gap-2 rounded-xl bg-black px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-slate-800 transition-all cursor-pointer disabled:opacity-50",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 189,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: isSending ? "Dispatching..." : "Send Test Email" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 190,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 183,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 175,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 87,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 79,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/nashmia/forwarders/ForwardersDirectoryPage.tsx";
function ForwardersDirectoryPage({ onOpenMobileMenu }) {
	const { userId, isConfigured } = useAuth();
	const queryClient = useQueryClient();
	const { data: cachedForwarders = [], isLoading: isQueryLoading, refetch: refetchForwarders } = useCachedForwarders(userId, { enabled: isConfigured });
	const [forwarders, setForwarders] = (0, import_react.useState)([]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedShippingLine, setSelectedShippingLine] = (0, import_react.useState)("all");
	const [selectedStatus, setSelectedStatus] = (0, import_react.useState)("all");
	const [selectedCountry, setSelectedCountry] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("name-asc");
	const [viewMode, setViewMode] = (0, import_react.useState)("grid");
	const [isAddModalOpen, setIsAddModalOpen] = (0, import_react.useState)(false);
	const [editingForwarder, setEditingForwarder] = (0, import_react.useState)(null);
	const [selectedForwarder, setSelectedForwarder] = (0, import_react.useState)(null);
	const [isDetailDrawerOpen, setIsDetailDrawerOpen] = (0, import_react.useState)(false);
	const [testEmailForwarder, setTestEmailForwarder] = (0, import_react.useState)(null);
	const [isTestEmailOpen, setIsTestEmailOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setForwarders(cachedForwarders || []);
	}, [cachedForwarders]);
	const isLoading = isQueryLoading && forwarders.length === 0;
	useSupabaseRealtime("forwarders", (0, import_react.useCallback)(() => {
		invalidateCachedForwarders(queryClient, userId);
	}, [queryClient, userId]), isConfigured);
	const filteredForwarders = (0, import_react.useMemo)(() => {
		return forwarders.filter((fwd) => {
			if (searchQuery.trim()) {
				const q = searchQuery.toLowerCase().trim();
				const matchName = fwd.name.toLowerCase().includes(q);
				const matchContact = fwd.contactPerson.toLowerCase().includes(q);
				const matchEmail = fwd.email.toLowerCase().includes(q);
				const matchWhatsapp = fwd.whatsapp.toLowerCase().includes(q);
				const matchNotes = fwd.notes.toLowerCase().includes(q);
				const matchCode = fwd.code.toLowerCase().includes(q);
				const matchCountry = fwd.country.toLowerCase().includes(q);
				const matchLines = fwd.shippingLines.some((sl) => sl.toLowerCase().includes(q));
				if (!matchName && !matchContact && !matchEmail && !matchWhatsapp && !matchNotes && !matchCode && !matchCountry && !matchLines) return false;
			}
			if (selectedShippingLine !== "all" && !fwd.shippingLines.includes(selectedShippingLine)) return false;
			if (selectedStatus !== "all" && fwd.status !== selectedStatus) return false;
			if (selectedCountry !== "all" && fwd.country !== selectedCountry) return false;
			return true;
		}).sort((a, b) => {
			if (sortBy === "name-asc") return a.name.localeCompare(b.name);
			if (sortBy === "name-desc") return b.name.localeCompare(a.name);
			if (sortBy === "bookings-desc") return b.activeBookings - a.activeBookings;
			if (sortBy === "rates-desc") return b.rateCards.length - a.rateCards.length;
			if (sortBy === "recent") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
			return 0;
		});
	}, [
		forwarders,
		searchQuery,
		selectedShippingLine,
		selectedStatus,
		selectedCountry,
		sortBy
	]);
	const activeCount = (0, import_react.useMemo)(() => forwarders.filter((f) => f.status === "Active").length, [forwarders]);
	const totalActiveBookings = (0, import_react.useMemo)(() => forwarders.reduce((sum, f) => sum + f.activeBookings, 0), [forwarders]);
	const handleSaveForwarder = async (data, editId) => {
		if (editId) {
			setForwarders((prev) => prev.map((f) => f.id === editId ? {
				...f,
				...data
			} : f));
			if (selectedForwarder?.id === editId) setSelectedForwarder((prev) => prev ? {
				...prev,
				...data
			} : null);
			try {
				if (isConfigured) {
					const updated = await updateForwarderInSupabase(editId, data);
					setForwarders((prev) => prev.map((f) => f.id === editId ? {
						...f,
						...updated
					} : f));
					await invalidateCachedForwarders(queryClient, userId);
				}
				toast.success("✓ Forwarder Updated", { description: `${data.name} profile has been updated.` });
			} catch (err) {
				toast.error("Failed to update forwarder", { description: err instanceof Error ? err.message : "Database error" });
				refetchForwarders();
			}
		} else {
			const tempId = `agent-${Date.now()}`;
			const newForwarder = {
				...data,
				id: tempId,
				code: `${data.name.slice(0, 3).toUpperCase()}-FWD`,
				createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
				activeBookings: 0,
				bookingsThisMonth: 0,
				totalBookings: 0,
				rateCards: [],
				recentMovements: []
			};
			setForwarders((prev) => [newForwarder, ...prev]);
			try {
				const createdAccount = await insertForwarderToSupabase(userId, data);
				setForwarders((prev) => {
					const filtered = prev.filter((f) => f.id !== tempId && f.id !== createdAccount.id);
					return [createdAccount, ...filtered];
				});
				await invalidateCachedForwarders(queryClient, userId);
				if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nashmia-forwarder-created", { detail: createdAccount }));
				toast.success("✓ Forwarder Created", { description: `${createdAccount.name} has been added successfully.` });
			} catch {
				if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nashmia-forwarder-created", { detail: newForwarder }));
				toast.success("✓ Forwarder Created", { description: `${newForwarder.name} has been added successfully.` });
			}
		}
	};
	const handleToggleArchive = async (forwarderId) => {
		const target = forwarders.find((f) => f.id === forwarderId);
		if (!target) return;
		const nextStatus = target.status === "Active" ? "Inactive" : "Active";
		setForwarders((prev) => prev.map((f) => f.id === forwarderId ? {
			...f,
			status: nextStatus
		} : f));
		if (selectedForwarder?.id === forwarderId) setSelectedForwarder((prev) => prev ? {
			...prev,
			status: nextStatus
		} : null);
		try {
			if (isConfigured) {
				await updateForwarderInSupabase(forwarderId, { status: nextStatus });
				await invalidateCachedForwarders(queryClient, userId);
			}
			toast.info(nextStatus === "Inactive" ? `${target.name} archived` : `${target.name} activated`);
		} catch (err) {
			toast.error("Could not update forwarder status", { description: err instanceof Error ? err.message : "Database error" });
			refetchForwarders();
		}
	};
	const handleOpenAddModal = () => {
		setEditingForwarder(null);
		setIsAddModalOpen(true);
	};
	const handleOpenEditModal = (forwarder) => {
		setEditingForwarder(forwarder);
		setIsAddModalOpen(true);
	};
	const handleSelectForwarder = (forwarder) => {
		setSelectedForwarder(forwarder);
		setIsDetailDrawerOpen(true);
	};
	const handleOpenTestEmail = (forwarder) => {
		setTestEmailForwarder(forwarder);
		setIsTestEmailOpen(true);
	};
	const handleResetFilters = () => {
		setSearchQuery("");
		setSelectedShippingLine("all");
		setSelectedStatus("all");
		setSelectedCountry("all");
		setSortBy("name-asc");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative z-10 w-full min-w-0 max-w-full space-y-6 text-slate-900 pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardersHeader, {
				onOpenMobileMenu,
				onAddForwarder: handleOpenAddModal
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 285,
				columnNumber: 7
			}, this),
			isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectorySummaryStripSkeleton, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 289,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardersSummaryStrip, {
				totalCount: forwarders.length,
				activeCount,
				activeBookingsCount: totalActiveBookings,
				shippingLinesCount: 7
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 291,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardersToolbar, {
				searchQuery,
				onSearchChange: setSearchQuery,
				selectedShippingLine,
				onShippingLineChange: setSelectedShippingLine,
				selectedStatus,
				onStatusChange: setSelectedStatus,
				selectedCountry,
				onCountryChange: setSelectedCountry,
				sortBy,
				onSortChange: setSortBy,
				viewMode,
				onViewModeChange: setViewMode,
				onResetFilters: handleResetFilters
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 300,
				columnNumber: 7
			}, this),
			isLoading ? viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectoryCardGridSkeleton, { count: 8 }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 319,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectoryTableSkeleton, { rows: 8 }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 321,
				columnNumber: 11
			}, this) : filteredForwarders.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardersEmptyState, {
				isSearchEmpty: searchQuery !== "" || selectedShippingLine !== "all" || selectedStatus !== "all" || selectedCountry !== "all",
				onResetFilters: handleResetFilters,
				onAddForwarder: handleOpenAddModal
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 324,
				columnNumber: 9
			}, this) : viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwarderCardGrid, {
				forwarders: filteredForwarders,
				onSelectForwarder: handleSelectForwarder,
				onEditForwarder: handleOpenEditModal,
				onToggleArchive: handleToggleArchive,
				onSendTestEmail: handleOpenTestEmail,
				onAddForwarder: handleOpenAddModal
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 336,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardersListView, {
				forwarders: filteredForwarders,
				onSelectForwarder: handleSelectForwarder,
				onEditForwarder: handleOpenEditModal,
				onToggleArchive: handleToggleArchive,
				onSendTestEmail: handleOpenTestEmail
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 346,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddForwarderModal, {
				open: isAddModalOpen,
				onOpenChange: setIsAddModalOpen,
				onSaveForwarder: handleSaveForwarder,
				editForwarder: editingForwarder
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 356,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwarderDetailDrawer, {
				open: isDetailDrawerOpen,
				onOpenChange: setIsDetailDrawerOpen,
				forwarder: selectedForwarder,
				onEditForwarder: (f) => {
					setIsDetailDrawerOpen(false);
					handleOpenEditModal(f);
				},
				onToggleArchive: handleToggleArchive,
				onOpenTestEmail: handleOpenTestEmail
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 364,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SendTestEmailModal, {
				open: isTestEmailOpen,
				onOpenChange: setIsTestEmailOpen,
				forwarder: testEmailForwarder
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 377,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 283,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/forwarders.tsx?tsr-split=component";
function ForwardersRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, {
		bg: "bg-white",
		children: ({ onOpenMobileMenu }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardersDirectoryPage, { onOpenMobileMenu }, void 0, false, {
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
export { ForwardersRoute as component };
