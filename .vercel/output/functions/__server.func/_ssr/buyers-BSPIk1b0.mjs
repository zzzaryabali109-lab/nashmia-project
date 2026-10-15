import { o as __toESM } from "../_runtime.mjs";
import { Bt as updateBuyerInSupabase, nt as fetchBookingsFromSupabase, vt as insertBuyerToSupabase } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { A as Share2, Bt as Ellipsis, En as Anchor, Et as Funnel, F as SearchX, Ht as Earth, K as Phone, Kt as Copy, Lt as Eye, O as Ship, P as Search, R as RotateCcw, S as Star, Tn as ArchiveRestore, Tt as Globe, W as Plus, _t as LayoutGrid, bn as ArrowUpDown, c as Users, cn as Check, ct as MapPin, dn as Building2, hn as Bookmark, i as X, l as User, lt as Mail, nn as CircleAlert, ot as Menu, pt as List, q as Pen, qt as Container, sn as ChevronDown, tn as CircleCheck, u as UserPlus, wn as Archive, xn as ArrowRight, zt as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { N as useAuth, _ as DropdownMenuTrigger, c as DialogDescription, d as DialogTitle, f as DropdownMenu, g as DropdownMenuSeparator, h as DropdownMenuLabel, m as DropdownMenuItem, n as ResultSuccessView, o as Dialog, p as DropdownMenuContent, r as AppLayout, s as DialogContent, u as DialogHeader, v as useSupabaseRealtime } from "./router-BJg2H47m.mjs";
import { t as LifecycleDropdownSelect } from "./LifecycleDropdownSelect-Dr2RhBr1.mjs";
import { i as useCachedBuyers, t as invalidateCachedBuyers } from "./entity-cache-C4kyVDy3.mjs";
import { n as DirectorySummaryStripSkeleton, r as DirectoryTableSkeleton, t as DirectoryCardGridSkeleton } from "./DirectorySkeletons-CWkWH_i-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/buyers-BSPIk1b0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var COUNTRY_FILTER_OPTIONS = [
	"All Countries",
	"United Kingdom",
	"Pakistan",
	"Spain",
	"Germany",
	"Italy",
	"France",
	"Sweden",
	"United States"
];
var SORT_OPTIONS = [
	{
		label: "Name A–Z",
		value: "name-asc"
	},
	{
		label: "Name Z–A",
		value: "name-desc"
	},
	{
		label: "Most Active Movements",
		value: "movements-desc"
	},
	{
		label: "Recently Added",
		value: "recent"
	}
];
var _jsxFileName$11 = "/app/applet/src/components/nashmia/buyers/AddBuyerModal.tsx";
function AddBuyerModal({ open, onOpenChange, onSaveBuyer, editBuyer }) {
	const [name, setName] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [country, setCountry] = (0, import_react.useState)("United Kingdom");
	const [contactPerson, setContactPerson] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [showSuccessScreen, setShowSuccessScreen] = (0, import_react.useState)(false);
	const [savedEntity, setSavedEntity] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (editBuyer) {
			setName(editBuyer.name);
			setCompany(editBuyer.company);
			setCountry(editBuyer.country);
			setContactPerson(editBuyer.contactPerson);
			setEmail(editBuyer.email);
			setPhone(editBuyer.phone);
			setErrors({});
			setShowSuccessScreen(false);
			setSavedEntity(null);
		} else {
			setName("");
			setCompany("");
			setCountry("United Kingdom");
			setContactPerson("");
			setEmail("");
			setPhone("");
			setErrors({});
			setShowSuccessScreen(false);
			setSavedEntity(null);
		}
	}, [editBuyer, open]);
	const validate = () => {
		const newErrors = {};
		if (!name.trim()) newErrors.name = "Buyer name is required";
		if (!company.trim()) newErrors.company = "Company entity is required";
		if (!contactPerson.trim()) newErrors.contactPerson = "Contact person is required";
		if (!email.trim()) newErrors.email = "Email address is required";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email";
		if (!phone.trim()) newErrors.phone = "Phone number is required";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;
		const countryCode = country === "United Kingdom" ? "GB" : country === "Pakistan" ? "PK" : country === "Spain" ? "ES" : country === "Germany" ? "DE" : country === "Italy" ? "IT" : country === "France" ? "FR" : country === "Sweden" ? "SE" : "US";
		const code = editBuyer?.code || `BUY-${countryCode}-${Math.floor(1e3 + Math.random() * 9e3)}`;
		onSaveBuyer({
			name: name.trim(),
			company: company.trim(),
			country,
			countryCode,
			contactPerson: contactPerson.trim(),
			email: email.trim(),
			phone: phone.trim(),
			activeMovements: editBuyer ? editBuyer.activeMovements : 0,
			deltaThisMonth: editBuyer ? editBuyer.deltaThisMonth : "+0 this month",
			progressPercent: editBuyer ? editBuyer.progressPercent : 0,
			totalMovements: editBuyer ? editBuyer.totalMovements : 0,
			deliveredMovements: editBuyer ? editBuyer.deliveredMovements : 0,
			inTransitMovements: editBuyer ? editBuyer.inTransitMovements : 0,
			status: editBuyer ? editBuyer.status : "Active",
			code,
			taxId: editBuyer?.taxId || `${countryCode}-${Math.floor(1e8 + Math.random() * 9e8)}`,
			address: editBuyer?.address || `Commercial Freight Corridor, ${country}`,
			city: editBuyer?.city || country,
			recentMovement: editBuyer?.recentMovement
		}, editBuyer?.id);
		setSavedEntity({
			name: name.trim(),
			code
		});
		setShowSuccessScreen(true);
	};
	const handleDismiss = () => {
		onOpenChange(false);
		setTimeout(() => {
			setShowSuccessScreen(false);
			setSavedEntity(null);
		}, 200);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			hideCloseButton: true,
			className: cn("w-full sm:max-w-[560px] max-h-[92vh] flex flex-col p-0 overflow-hidden sm:rounded-[28px] bg-white shadow-2xl focus:outline-none", showSuccessScreen && "sm:max-w-[420px]"),
			children: showSuccessScreen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-4 sm:p-6 overflow-y-auto max-h-[88vh]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultSuccessView, {
					type: "success",
					title: "Success!",
					message: `Thank you for waiting. Your buyer data has been ${editBuyer ? "updated" : "approved"}.`,
					entityName: savedEntity?.name,
					entitySubtitle: savedEntity?.code,
					actionText: "OKAY",
					onAction: handleDismiss,
					onClose: handleDismiss
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 154,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 153,
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
							fileName: _jsxFileName$11,
							lineNumber: 179,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 173,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, {
						className: "p-5 sm:p-6 pb-3 sm:pb-4 border-b border-slate-100 shrink-0 bg-white space-y-1.5 text-left pr-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-[#E8F5F6] px-3 py-1 text-[11px] font-bold text-[#0FA3B1] w-fit",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$11,
									lineNumber: 185,
									columnNumber: 17
								}, this), editBuyer ? "Edit Buyer Profile" : "New Consignee"]
							}, void 0, true, {
								fileName: _jsxFileName$11,
								lineNumber: 184,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
								className: "text-xl sm:text-[22px] font-extrabold tracking-tight text-[#0D1F3C]",
								children: editBuyer ? "Update Buyer Account" : "Add Buyer Account"
							}, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 188,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
								className: "text-xs sm:text-[13px] font-medium text-slate-500",
								children: editBuyer ? "Modify consignee contact details and delivery settings." : "Fill in the details below to add a buyer to your active logistics network."
							}, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 191,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$11,
						lineNumber: 183,
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
											children: ["Buyer Name ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 204,
												columnNumber: 32
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 203,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "relative",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												type: "text",
												value: name,
												onChange: (e) => {
													setName(e.target.value);
													if (errors.name) setErrors((prev) => ({
														...prev,
														name: ""
													}));
												},
												placeholder: "e.g. New Henna Ltd",
												className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 207,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 206,
											columnNumber: 19
										}, this),
										errors.name && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 220,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.name }, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 221,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 219,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$11,
									lineNumber: 202,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "text-[12px] font-semibold text-slate-600",
											children: ["Legal Company ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 228,
												columnNumber: 35
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 227,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "relative",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												type: "text",
												value: company,
												onChange: (e) => {
													setCompany(e.target.value);
													if (errors.company) setErrors((prev) => ({
														...prev,
														company: ""
													}));
												},
												placeholder: "e.g. Global Trading LLC",
												className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 231,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 230,
											columnNumber: 19
										}, this),
										errors.company && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 244,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.company }, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 245,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 243,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$11,
									lineNumber: 226,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$11,
								lineNumber: 201,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
										label: "Destination Country *",
										value: country,
										onChange: (val) => setCountry(val),
										options: COUNTRY_FILTER_OPTIONS.filter((c) => c !== "All Countries").map((c) => ({
											value: c,
											label: c
										})),
										placeholder: "Select Country",
										activeColor: "teal",
										triggerClassName: "h-11 w-full text-sm sm:text-[13px] bg-slate-50/60"
									}, void 0, false, {
										fileName: _jsxFileName$11,
										lineNumber: 254,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$11,
									lineNumber: 253,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "text-[12px] font-semibold text-slate-600",
											children: ["Contact Person ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 272,
												columnNumber: 36
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 271,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "relative",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												type: "text",
												value: contactPerson,
												onChange: (e) => {
													setContactPerson(e.target.value);
													if (errors.contactPerson) setErrors((prev) => ({
														...prev,
														contactPerson: ""
													}));
												},
												placeholder: "e.g. John Smith",
												className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 275,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 274,
											columnNumber: 19
										}, this),
										errors.contactPerson && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 289,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.contactPerson }, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 290,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 288,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$11,
									lineNumber: 270,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$11,
								lineNumber: 252,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "text-[12px] font-semibold text-slate-600",
											children: ["Work Email ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 300,
												columnNumber: 32
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 299,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "relative",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												type: "email",
												value: email,
												onChange: (e) => {
													setEmail(e.target.value);
													if (errors.email) setErrors((prev) => ({
														...prev,
														email: ""
													}));
												},
												placeholder: "buyer@enterprise.com",
												className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 303,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 302,
											columnNumber: 19
										}, this),
										errors.email && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 316,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.email }, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 317,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 315,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$11,
									lineNumber: 298,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "text-[12px] font-semibold text-slate-600",
											children: ["Phone / WhatsApp ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 324,
												columnNumber: 38
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 323,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "relative",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												type: "tel",
												value: phone,
												onChange: (e) => {
													setPhone(e.target.value);
													if (errors.phone) setErrors((prev) => ({
														...prev,
														phone: ""
													}));
												},
												placeholder: "+44 20 7946 0000",
												className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 327,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$11,
											lineNumber: 326,
											columnNumber: 19
										}, this),
										errors.phone && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 340,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.phone }, void 0, false, {
												fileName: _jsxFileName$11,
												lineNumber: 341,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$11,
											lineNumber: 339,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$11,
									lineNumber: 322,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$11,
								lineNumber: 297,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$11,
						lineNumber: 199,
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
							fileName: _jsxFileName$11,
							lineNumber: 350,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "submit",
							className: "inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#009EE2] hover:bg-[#0089c7] px-5 sm:px-6 text-[13px] font-bold text-white shadow-md shadow-[#009EE2]/20 transition-all active:scale-[0.98] cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5 stroke-[2.5]" }, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 361,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: editBuyer ? "Save Changes" : "Add Buyer" }, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 362,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$11,
							lineNumber: 357,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$11,
						lineNumber: 349,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$11,
				lineNumber: 168,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$11,
			lineNumber: 145,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$11,
		lineNumber: 144,
		columnNumber: 5
	}, this);
}
var _jsxFileName$10 = "/app/applet/src/components/nashmia/buyers/AddBuyerCard.tsx";
function AddBuyerCard({ onClick }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type: "button",
		onClick,
		style: { background: "linear-gradient(180deg, #FFFFFF 0%, #F5FBFC 45%, #D4F0F6 100%)" },
		className: "group relative flex min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-[32px] sm:rounded-[36px] border border-white/90 p-6 sm:p-7 text-left shadow-[0_20px_45px_-12px_rgba(15,163,177,0.16),0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-12px_rgba(15,163,177,0.22)] active:translate-y-0 cursor-pointer",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" }, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "size-16 sm:size-17 rounded-full border-2 border-white bg-gradient-to-br from-[#0FA3B1] via-teal-400 to-[#45DFEB] p-0.5 shadow-[0_6px_18px_rgba(15,163,177,0.25)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "size-full rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserPlus, { className: "size-7 stroke-[2]" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 25,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 24,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 23,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "inline-flex items-center gap-1 rounded-full bg-white/80 border border-slate-200/60 px-3 py-1 text-[11px] font-semibold text-[#0FA3B1] shadow-2xs",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3" }, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 30,
						columnNumber: 13
					}, this), " Quick Add"]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 29,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 22,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-[21px] sm:text-[22px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#0FA3B1] transition-colors",
						children: "Register New Buyer"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 36,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-[13.5px] font-medium text-slate-500 mt-1 leading-relaxed",
						children: "Consignee profile, tax ID validation, and designated discharge port routing."
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 39,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3 flex flex-wrap items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "rounded-full bg-white/90 border border-slate-200/60 px-3 py-0.5 text-[11px] font-semibold text-slate-600 shadow-2xs",
							children: "Direct Onboarding"
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 44,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "rounded-full bg-white/90 border border-slate-200/60 px-3 py-0.5 text-[11px] font-semibold text-slate-600 shadow-2xs",
							children: "Automated EDI"
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 47,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 43,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 35,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 flex items-center gap-2.5",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 rounded-full bg-[#0FA3B1] text-white font-semibold text-[13.5px] py-3 px-5 shadow-[0_4px_16px_rgba(15,163,177,0.3)] border border-[#0FA3B1] transition-all duration-200 group-hover:bg-[#0b828e] text-center flex items-center justify-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 57,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Add Buyer Profile" }, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 58,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 56,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 55,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$10,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var _jsxFileName$9 = "/app/applet/src/components/nashmia/buyers/BuyerCard.tsx";
function getAvatarInitials$2(name) {
	const parts = name.trim().split(" ");
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return (parts[0][0] + parts[1][0]).toUpperCase();
}
function getCountryFlag$2(countryCode) {
	return {
		GB: "🇬🇧",
		PK: "🇵🇰",
		ES: "🇪🇸",
		DE: "🇩🇪",
		IT: "🇮🇹",
		FR: "🇫🇷",
		SE: "🇸🇪",
		US: "🇺🇸",
		AE: "🇦🇪",
		CN: "🇨🇳"
	}[countryCode] || "🌐";
}
var AVATAR_GRADIENTS = [
	"from-sky-400 via-teal-400 to-cyan-500",
	"from-indigo-400 via-sky-400 to-teal-400",
	"from-amber-400 via-orange-400 to-rose-400",
	"from-teal-400 via-emerald-400 to-cyan-500",
	"from-blue-500 via-indigo-400 to-sky-400"
];
function BuyerCard({ buyer, onSelect, onEdit, onToggleArchive, index }) {
	const [isBookmarked, setIsBookmarked] = (0, import_react.useState)(false);
	const initials = getAvatarInitials$2(buyer.name);
	const isInactive = buyer.status === "Inactive" || buyer.status === "Archived";
	const flag = getCountryFlag$2(buyer.countryCode);
	const avatarGradient = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
	const handleShare = (e) => {
		e.stopPropagation();
		const shareUrl = window.location.href;
		navigator.clipboard.writeText(shareUrl);
		toast.success(`Share link copied for ${buyer.name}`, { description: `${buyer.company} · ${buyer.code}` });
	};
	const handleBookmarkToggle = (e) => {
		e.stopPropagation();
		setIsBookmarked(!isBookmarked);
		toast.success(isBookmarked ? `Removed ${buyer.name} from saved` : `Saved ${buyer.name} to favorites`);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		onClick: () => onSelect(buyer),
		style: {
			animationDelay: `${index * 30}ms`,
			background: "linear-gradient(180deg, #FFFFFF 0%, #F5FBFC 45%, #D4F0F6 100%)"
		},
		className: cn("group relative flex min-h-[380px] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[32px] sm:rounded-[36px] border border-white/90 p-6 sm:p-7 shadow-[0_20px_45px_-12px_rgba(15,163,177,0.16),0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-12px_rgba(15,163,177,0.22)] active:translate-y-0", isInactive && "opacity-75 grayscale-[20%]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" }, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 103,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: cn("size-16 sm:size-17 rounded-full border-2 border-white bg-gradient-to-br p-0.5 shadow-[0_6px_18px_rgba(15,163,177,0.2)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105", avatarGradient),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-full rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white font-bold text-[18px] tracking-tight",
								children: initials
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 116,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 110,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-white text-xs shadow-xs border border-slate-100",
							title: buyer.country,
							children: flag
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 120,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 109,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						onClick: (e) => e.stopPropagation(),
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: handleShare,
							title: "Share Buyer Profile",
							className: "grid size-9 place-items-center rounded-full text-slate-500 hover:text-slate-900 hover:bg-white/80 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share2, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 136,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 130,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								"aria-label": `Actions for ${buyer.name}`,
								className: "grid size-9 place-items-center rounded-full text-slate-400 hover:text-slate-900 hover:bg-white/80 transition-colors focus:outline-none",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ellipsis, { className: "size-4 stroke-[1.8]" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 146,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 141,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 140,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
							align: "end",
							className: "w-52 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
									className: "px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400",
									children: buyer.name
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 153,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onSelect(buyer),
									className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 160,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Full Dossier" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 161,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 156,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onEdit(buyer),
									className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 167,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Edit Account" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 168,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 163,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/new-booking",
										className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] font-semibold text-[#0FA3B1] hover:bg-[#E8F5F6]",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 175,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Create Booking" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 176,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 171,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 170,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 179,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onToggleArchive(buyer.id),
									className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] text-slate-600 hover:bg-slate-100",
									children: buyer.status === "Active" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Archive, { className: "size-3.5 text-amber-600" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 186,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Buyer" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 187,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 185,
										columnNumber: 21
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArchiveRestore, { className: "size-3.5 text-emerald-600" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 191,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Activate Buyer" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 192,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 190,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 180,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 149,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 139,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 129,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 107,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-[21px] sm:text-[22px] font-bold text-slate-900 tracking-tight leading-snug",
							children: buyer.name
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 203,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[13.5px] font-medium text-slate-500 mt-0.5 truncate",
							children: buyer.company
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 206,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-white/90 border border-slate-200/60 px-3 py-0.5 text-[11px] font-semibold text-slate-700 shadow-2xs",
									children: [
										buyer.countryCode,
										" · ",
										buyer.country
									]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 212,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-white/90 border border-slate-200/60 px-3 py-0.5 text-[11px] font-semibold text-slate-700 shadow-2xs",
									children: buyer.preferredPort || buyer.city || "Direct Routing"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 215,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-white/90 border border-slate-200/60 px-2.5 py-0.5 text-[10.5px] font-mono font-semibold text-slate-500 shadow-2xs",
									children: buyer.code
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 218,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 211,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 202,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 grid grid-cols-3 gap-2 border-t border-slate-200/50 pt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "flex items-center gap-1 text-[15px] font-bold text-slate-900 leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "size-3.5 fill-slate-900 text-slate-900" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 229,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "4.9" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 230,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 228,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11.5px] font-medium text-slate-400 mt-0.5",
								children: "Rating"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 232,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 227,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[15px] font-bold text-slate-900 leading-tight",
								children: [buyer.activeMovements, " Active"]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 237,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11.5px] font-medium text-slate-400 mt-0.5",
								children: "Pipeline"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 240,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 236,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[15px] font-bold text-slate-900 leading-tight",
								children: [buyer.totalMovements, " cgo"]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 245,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11.5px] font-medium text-slate-400 mt-0.5",
								children: "Total Vol"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 248,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 244,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 225,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 106,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onSelect(buyer),
					className: "flex-1 rounded-full bg-white/95 hover:bg-white text-slate-900 font-semibold text-[13.5px] py-3 px-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-white/90 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(15,163,177,0.14)] active:scale-[0.98] text-center",
					children: "Get in touch"
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 256,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: handleBookmarkToggle,
					title: isBookmarked ? "Remove bookmark" : "Save bookmark",
					className: cn("size-11 sm:size-12 rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-white/90 shrink-0 transition-all duration-200 hover:scale-105 active:scale-95", isBookmarked ? "bg-[#0FA3B1] text-white border-[#0FA3B1] shadow-[0_4px_14px_rgba(15,163,177,0.3)]" : "bg-white hover:bg-slate-50 text-slate-800"),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bookmark, { className: cn("size-4.5 stroke-[2]", isBookmarked && "fill-white") }, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 276,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 265,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 254,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 91,
		columnNumber: 5
	}, this);
}
var _jsxFileName$8 = "/app/applet/src/components/nashmia/buyers/BuyerCardGrid.tsx";
function BuyerCardGrid({ buyers, onSelectBuyer, onEditBuyer, onToggleArchive, onAddBuyer }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 animate-in fade-in-50 duration-300",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddBuyerCard, { onClick: onAddBuyer }, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 23,
			columnNumber: 7
		}, this), buyers.map((buyer, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BuyerCard, {
			buyer,
			index,
			onSelect: onSelectBuyer,
			onEdit: onEditBuyer,
			onToggleArchive
		}, buyer.id, false, {
			fileName: _jsxFileName$8,
			lineNumber: 27,
			columnNumber: 9
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
var _jsxFileName$7 = "/app/applet/src/components/nashmia/buyers/BuyerDetailDrawer.tsx";
function getAvatarInitials$1(name) {
	const parts = name.trim().split(" ");
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return (parts[0][0] + parts[1][0]).toUpperCase();
}
function getCountryFlag$1(countryCode) {
	return {
		GB: "🇬🇧",
		PK: "🇵🇰",
		ES: "🇪🇸",
		DE: "🇩🇪",
		IT: "🇮🇹",
		FR: "🇫🇷",
		SE: "🇸🇪",
		US: "🇺🇸",
		AE: "🇦🇪",
		CN: "🇨🇳"
	}[countryCode] || "🌐";
}
var statusBadgeStyles = {
	"In Transit": {
		bg: "bg-blue-50",
		text: "text-blue-700",
		border: "border-blue-200",
		dot: "bg-blue-500"
	},
	"Booking Requested": {
		bg: "bg-amber-50",
		text: "text-amber-700",
		border: "border-amber-200",
		dot: "bg-amber-500"
	},
	"Customs Hold": {
		bg: "bg-rose-50",
		text: "text-rose-700",
		border: "border-rose-200",
		dot: "bg-rose-500"
	},
	Delivered: {
		bg: "bg-emerald-50",
		text: "text-emerald-700",
		border: "border-emerald-200",
		dot: "bg-emerald-500"
	},
	"Gate-In": {
		bg: "bg-purple-50",
		text: "text-purple-700",
		border: "border-purple-200",
		dot: "bg-purple-500"
	}
};
function BuyerDetailDrawer({ open, onOpenChange, buyer, movements, onEditBuyer, onToggleArchive }) {
	const [copiedField, setCopiedField] = (0, import_react.useState)(null);
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	if (!buyer) return null;
	const initials = getAvatarInitials$1(buyer.name);
	const flag = getCountryFlag$1(buyer.countryCode);
	const copyToClipboard = (text, label) => {
		navigator.clipboard.writeText(text);
		setCopiedField(label);
		toast.success(`Copied ${label}`, {
			description: text,
			duration: 2e3
		});
		setTimeout(() => setCopiedField(null), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "w-full sm:max-w-[760px] lg:max-w-[840px] p-0 overflow-hidden sm:rounded-[28px] bg-white shadow-2xl max-h-[92vh] flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative border-b border-slate-200 bg-gradient-to-r from-blue-50/50 via-white to-slate-50 p-5 sm:p-6 pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start sm:items-center gap-4 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid size-14 sm:size-16 place-items-center rounded-2xl border border-[#C7E8E8] bg-white text-[19px] font-bold text-[#0FA3B1] shadow-sm",
									children: initials
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 137,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "absolute -bottom-1 -right-1 text-base drop-shadow-xs bg-white rounded-full p-0.5 border border-slate-100",
									title: buyer.country,
									children: flag
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 140,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 136,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
											className: "truncate text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug",
											children: buyer.name
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 150,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold border shrink-0", buyer.status === "Active" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-slate-100 text-slate-600"),
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("size-1.5 rounded-full", buyer.status === "Active" ? "bg-emerald-500 animate-pulse" : "bg-slate-400") }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 161,
												columnNumber: 21
											}, this), buyer.status]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 153,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 149,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
										className: "text-[13px] text-slate-500 font-medium truncate mt-0.5",
										children: buyer.company
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 171,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap items-center gap-2 mt-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "rounded-lg bg-white border border-slate-200 px-2 py-0.5 font-mono text-[11px] font-bold text-slate-700 shadow-2xs",
											children: buyer.code
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 176,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-[11.5px] text-slate-400",
											children: [
												buyer.country,
												" · ",
												buyer.preferredPort || "Global Corridor"
											]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 179,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 175,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 148,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 134,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 self-stretch sm:self-auto shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/new-booking",
								onClick: () => onOpenChange(false),
								className: "flex-1 sm:flex-none inline-flex h-9.5 items-center justify-center gap-2 rounded-xl bg-[#0FA3B1] hover:bg-[#078A99] px-4 text-xs font-semibold text-white shadow-[0_2px_10px_rgba(15,163,177,0.25)] transition-all hover:-translate-y-0.5 active:translate-y-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 193,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Create Booking" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 194,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 188,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => onEditBuyer(buyer),
								className: "inline-flex h-9.5 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs",
								title: "Edit Buyer",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5 text-slate-400" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 203,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "hidden sm:inline",
									children: "Edit"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 204,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 197,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 187,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 133,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 mt-5 -mb-4 border-b border-transparent",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActiveTab("overview"),
								className: cn("pb-2 text-xs font-semibold px-3 border-b-2 transition-all", activeTab === "overview" ? "border-[#0FA3B1] text-[#0FA3B1]" : "border-transparent text-slate-500 hover:text-slate-800"),
								children: "Overview & Metrics"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 211,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActiveTab("company"),
								className: cn("pb-2 text-xs font-semibold px-3 border-b-2 transition-all", activeTab === "company" ? "border-[#0FA3B1] text-[#0FA3B1]" : "border-transparent text-slate-500 hover:text-slate-800"),
								children: "Company & Contact"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 223,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActiveTab("movements"),
								className: cn("pb-2 text-xs font-semibold px-3 border-b-2 transition-all flex items-center gap-1.5", activeTab === "movements" ? "border-[#0FA3B1] text-[#0FA3B1]" : "border-transparent text-slate-500 hover:text-slate-800"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Allocated Movements" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 245,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-slate-100 px-1.5 py-0.2 text-[10px] font-bold text-slate-600",
									children: movements.length
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 246,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 235,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 210,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 132,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 overflow-y-auto p-5 sm:p-6 space-y-6",
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
											children: "Active"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 260,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[22px] font-bold tracking-tight text-slate-900",
											children: buyer.activeMovements
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 263,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 259,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
											children: "Total Movements"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 269,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[22px] font-bold tracking-tight text-slate-900",
											children: buyer.totalMovements
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 272,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 268,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-blue-200/80 bg-blue-50/50 p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10.5px] font-bold text-blue-600 uppercase tracking-wider",
											children: "In Transit"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 278,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[22px] font-bold tracking-tight text-blue-700",
											children: buyer.inTransitMovements
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 281,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 277,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10.5px] font-bold text-emerald-600 uppercase tracking-wider",
											children: "Delivered"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 287,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[22px] font-bold tracking-tight text-emerald-700",
											children: buyer.deliveredMovements
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 290,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 286,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 258,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "rounded-2xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5 space-y-3",
								children: [/* @__PURE__ */ (void 0)("h4", {
									className: "text-[11px] font-bold uppercase tracking-wider text-slate-400",
									children: "Primary Profile Snapshot"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 298,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "rounded-xl bg-white p-3.5 border border-slate-200/90 shadow-2xs",
										children: [
											/* @__PURE__ */ (void 0)("p", {
												className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
												children: "Primary Contact"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 303,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-[14px] font-bold text-slate-900 mt-0.5",
												children: buyer.contactPerson
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 306,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-slate-500",
												children: buyer.contactRole || "Cargo Buyer"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 309,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 302,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "rounded-xl bg-white p-3.5 border border-slate-200/90 shadow-2xs",
										children: [
											/* @__PURE__ */ (void 0)("p", {
												className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
												children: "Preferred Port of Discharge"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 313,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-[14px] font-bold text-slate-900 mt-0.5 flex items-center gap-1.5",
												children: [/* @__PURE__ */ (void 0)(Anchor, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 317,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", { children: buyer.preferredPort || "Global Corridor" }, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 318,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 316,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-slate-500",
												children: buyer.country
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 320,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 312,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 301,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 297,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 256,
							columnNumber: 13
						}, this),
						activeTab === "company" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-start gap-3 rounded-2xl bg-slate-50/60 p-4 border border-slate-200/90 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "grid size-10 shrink-0 place-items-center rounded-xl bg-white border border-[#C7E8E8] text-[#0FA3B1] shadow-2xs",
											children: /* @__PURE__ */ (void 0)(Building2, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 333,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 332,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "min-w-0",
											children: [
												/* @__PURE__ */ (void 0)("p", {
													className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
													children: "Legal Entity"
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 336,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("p", {
													className: "text-[14px] font-bold text-slate-900 truncate",
													children: buyer.company
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 339,
													columnNumber: 21
												}, this),
												buyer.taxId && /* @__PURE__ */ (void 0)("p", {
													className: "font-mono text-xs font-semibold text-slate-600 truncate mt-0.5",
													children: ["Tax ID: ", buyer.taxId]
												}, void 0, true, {
													fileName: _jsxFileName$7,
													lineNumber: 341,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 335,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 331,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-start gap-3 rounded-2xl bg-slate-50/60 p-4 border border-slate-200/90 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "grid size-10 shrink-0 place-items-center rounded-xl bg-white border border-cyan-200 text-cyan-600 shadow-2xs",
											children: /* @__PURE__ */ (void 0)(Globe, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 351,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 350,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "min-w-0",
											children: [
												/* @__PURE__ */ (void 0)("p", {
													className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
													children: "Country & Port"
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 354,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("p", {
													className: "text-[14px] font-bold text-slate-900 truncate flex items-center gap-1.5",
													children: [/* @__PURE__ */ (void 0)("span", { children: flag }, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 358,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", { children: buyer.country }, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 359,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$7,
													lineNumber: 357,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-slate-500 truncate mt-0.5",
													children: buyer.preferredPort || "Global Corridor"
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 361,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 353,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 349,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-start gap-3 rounded-2xl bg-slate-50/60 p-4 border border-slate-200/90 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "grid size-10 shrink-0 place-items-center rounded-xl bg-white border border-indigo-200 text-indigo-600 shadow-2xs",
											children: /* @__PURE__ */ (void 0)(User, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 370,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 369,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "min-w-0",
											children: [
												/* @__PURE__ */ (void 0)("p", {
													className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
													children: "Primary Contact"
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 373,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("p", {
													className: "text-[14px] font-bold text-slate-900",
													children: buyer.contactPerson
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 376,
													columnNumber: 21
												}, this),
												buyer.contactRole && /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-slate-500 truncate mt-0.5",
													children: buyer.contactRole
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 378,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 372,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 368,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-start gap-3 rounded-2xl bg-slate-50/60 p-4 border border-slate-200/90 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "grid size-10 shrink-0 place-items-center rounded-xl bg-white border border-amber-200 text-amber-600 shadow-2xs",
											children: /* @__PURE__ */ (void 0)(MapPin, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 386,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 385,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (void 0)("p", {
												className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
												children: "Delivery Address"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 389,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-slate-700 line-clamp-2 mt-0.5 font-medium",
												children: buyer.address || "Standard Port Delivery"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 392,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 388,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 384,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between rounded-2xl bg-white p-4 border border-slate-200 shadow-2xs sm:col-span-2",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3 min-w-0",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "grid size-9 shrink-0 place-items-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600",
												children: /* @__PURE__ */ (void 0)(Mail, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 402,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 401,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (void 0)("p", {
													className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
													children: "Email Address"
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 405,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-[13.5px] font-semibold text-slate-900 truncate",
													children: buyer.email
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 408,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 404,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 400,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => copyToClipboard(buyer.email, "Email"),
											className: "grid size-8 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors",
											children: copiedField === "Email" ? /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-emerald-600" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 419,
												columnNumber: 23
											}, this) : /* @__PURE__ */ (void 0)(Copy, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 421,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 413,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 399,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between rounded-2xl bg-white p-4 border border-slate-200 shadow-2xs sm:col-span-2",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3 min-w-0",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "grid size-9 shrink-0 place-items-center rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600",
												children: /* @__PURE__ */ (void 0)(Phone, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 430,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 429,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (void 0)("p", {
													className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
													children: "Phone / WhatsApp"
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 433,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "font-mono text-[13.5px] font-semibold text-slate-900 truncate",
													children: buyer.phone
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 436,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 432,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 428,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => copyToClipboard(buyer.phone, "Phone"),
											className: "grid size-8 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors",
											children: copiedField === "Phone" ? /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-emerald-600" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 447,
												columnNumber: 23
											}, this) : /* @__PURE__ */ (void 0)(Copy, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 449,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 441,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 427,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 329,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 328,
							columnNumber: 13
						}, this),
						activeTab === "movements" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
									className: "text-[14px] font-bold text-slate-900 tracking-tight",
									children: "Allocated Container Movements"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 461,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-slate-500",
									children: ["Live and historic shipments assigned to ", buyer.name]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 464,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 460,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)(Link, {
									to: "/new-booking",
									onClick: () => onOpenChange(false),
									className: "inline-flex items-center gap-1 text-xs font-bold text-[#0FA3B1] hover:underline",
									children: [/* @__PURE__ */ (void 0)("span", { children: "Book Movement" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 474,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(ArrowRight, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 475,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 469,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 459,
								columnNumber: 15
							}, this), movements.length === 0 ? /* @__PURE__ */ (void 0)("div", {
								className: "rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-8 text-center",
								children: [
									/* @__PURE__ */ (void 0)(Container, { className: "mx-auto size-8 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 481,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "mt-2 text-[13.5px] font-bold text-slate-800",
										children: "No Movements Recorded"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 482,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "mt-0.5 text-xs text-slate-500",
										children: [
											"Create a new booking to allocate containers to ",
											buyer.name,
											"."
										]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 485,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 480,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (void 0)("div", {
								className: "space-y-2.5",
								children: movements.map((mov) => {
									const statusStyle = statusBadgeStyles[mov.status] || {
										bg: "bg-slate-50",
										text: "text-slate-700",
										border: "border-slate-200",
										dot: "bg-slate-400"
									};
									return /* @__PURE__ */ (void 0)("div", {
										className: "group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-sm",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-start justify-between gap-2",
											children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-mono text-[13px] font-bold text-slate-900",
													children: mov.ref
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 508,
													columnNumber: 31
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10.5px] font-semibold text-slate-700",
													children: [
														mov.containerSize,
														" × ",
														mov.containersCount
													]
												}, void 0, true, {
													fileName: _jsxFileName$7,
													lineNumber: 511,
													columnNumber: 31
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 507,
												columnNumber: 29
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "mt-1 text-[13px] font-semibold text-slate-800",
												children: [
													mov.polName,
													" → ",
													mov.podName
												]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 515,
												columnNumber: 29
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 506,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold border", statusStyle.bg, statusStyle.text, statusStyle.border),
												children: [/* @__PURE__ */ (void 0)("span", { className: cn("size-1.5 rounded-full", statusStyle.dot) }, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 528,
													columnNumber: 29
												}, this), mov.status]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 520,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 505,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-xs text-slate-500",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (void 0)("span", { children: ["ETD: ", /* @__PURE__ */ (void 0)("strong", {
													className: "text-slate-800",
													children: mov.etd
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 537,
													columnNumber: 36
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$7,
													lineNumber: 536,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("span", { children: ["ETA: ", /* @__PURE__ */ (void 0)("strong", {
													className: "text-slate-800",
													children: mov.eta
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 540,
													columnNumber: 36
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$7,
													lineNumber: 539,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 535,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (void 0)(Ship, { className: "size-3.5 text-slate-400" }, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 545,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-medium text-slate-700",
													children: mov.carrier
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 546,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 544,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 534,
											columnNumber: 25
										}, this)]
									}, mov.id, true, {
										fileName: _jsxFileName$7,
										lineNumber: 500,
										columnNumber: 23
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 490,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 458,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 254,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border-t border-slate-200 bg-slate-50/90 p-4 px-6 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onToggleArchive(buyer.id),
						className: "flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors",
						children: buyer.status === "Active" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Archive, { className: "size-3.5 text-amber-600" }, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 567,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Buyer" }, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 568,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 566,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArchiveRestore, { className: "size-3.5 text-emerald-600" }, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 572,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Activate Buyer" }, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 573,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 571,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 560,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onOpenChange(false),
						className: "h-9 rounded-xl border border-slate-200 bg-white px-5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-2xs",
						children: "Close"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 578,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 559,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 130,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 129,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "/app/applet/src/components/nashmia/buyers/BuyersEmptyState.tsx";
function BuyersEmptyState({ isSearchEmpty, onResetFilters, onAddBuyer }) {
	if (isSearchEmpty) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-6 py-16 text-center shadow-2xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid size-14 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 shadow-2xs",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchX, { className: "size-7 stroke-[1.75]" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 18,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 17,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "mt-4 text-[19px] font-bold text-slate-900 tracking-tight",
				children: "No matching buyers found"
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 20,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1.5 max-w-sm text-[13.5px] text-slate-500",
				children: "We couldn't find any buyers matching your current search query or active filter selection."
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 23,
				columnNumber: 9
			}, this),
			onResetFilters && /* @__PURE__ */ (void 0)("button", {
				type: "button",
				onClick: onResetFilters,
				className: "mt-6 inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[13px] font-semibold text-slate-700 shadow-2xs transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-[0.99]",
				children: [/* @__PURE__ */ (void 0)(RotateCcw, { className: "size-3.5 text-slate-400" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 32,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("span", { children: "Clear Filters & Reset" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 33,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 27,
				columnNumber: 11
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 16,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-6 py-20 text-center shadow-2xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid size-16 place-items-center rounded-2xl border border-[#C7E8E8] bg-[#E8F5F6] text-[#0FA3B1] shadow-2xs",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-8 stroke-[1.75]" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 43,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 42,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "mt-5 text-[22px] font-bold text-slate-900 tracking-tight",
				children: "No registered buyers yet"
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1.5 max-w-md text-[13.5px] text-slate-500 leading-relaxed",
				children: "Register your first buyer account to establish trade corridors, record consignee tax IDs, and allocate active container movements."
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 48,
				columnNumber: 7
			}, this),
			onAddBuyer && /* @__PURE__ */ (void 0)("button", {
				type: "button",
				onClick: onAddBuyer,
				className: "mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-[#0FA3B1] hover:bg-[#078A99] px-6 text-[13.5px] font-semibold text-white shadow-[0_2px_10px_rgba(15,163,177,0.25)] transition-all hover:-translate-y-0.5 active:translate-y-0",
				children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-4" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 58,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("span", { children: "Register First Buyer" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 59,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 53,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 41,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/app/applet/src/components/nashmia/buyers/BuyersHeader.tsx";
function BuyersHeader({ onOpenMobileMenu, onAddBuyer, totalBuyersCount }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-start gap-3.5",
			children: [onOpenMobileMenu && /* @__PURE__ */ (void 0)("button", {
				type: "button",
				onClick: onOpenMobileMenu,
				"aria-label": "Toggle navigation menu",
				className: "mt-1 grid size-11 shrink-0 place-items-center rounded-xl border border-slate-200/90 bg-white text-slate-800 shadow-sm transition-all hover:bg-slate-50 lg:hidden",
				children: /* @__PURE__ */ (void 0)(Menu, { className: "size-5" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 26,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 20,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#E8F5F6] border border-[#C7E8E8] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0FA3B1]",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-3" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 33,
								columnNumber: 15
							}, this), "Consignee Directory"]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 32,
							columnNumber: 13
						}, this), totalBuyersCount !== void 0 && /* @__PURE__ */ (void 0)("span", {
							className: "rounded-full bg-slate-100 border border-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-600",
							children: [totalBuyersCount, " Registered"]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 37,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 31,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-[30px] font-bold tracking-tight text-slate-900 sm:text-[36px] lg:text-[38px] leading-tight",
						children: "Buyers & Accounts"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 42,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "max-w-2xl text-[14px] text-slate-500 leading-relaxed",
						children: "Manage your global consignees, commercial accounts, and container shipment allocations."
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 45,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 30,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 18,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/new-booking",
				className: "flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[13.5px] font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "size-4 text-slate-400" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 57,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "New Booking" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 58,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 53,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onAddBuyer,
				className: "group relative flex h-[46px] items-center gap-2 rounded-xl bg-[#0FA3B1] hover:bg-[#078A99] px-5 text-[13.5px] font-semibold text-white shadow-[0_4px_14px_rgba(15,163,177,0.3)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4 transition-transform duration-200 group-hover:rotate-90" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 66,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "+ Add Buyer" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 67,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 61,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 52,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/nashmia/buyers/BuyersListView.tsx";
function getAvatarInitials(name) {
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
		SE: "🇸🇪",
		US: "🇺🇸",
		AE: "🇦🇪",
		CN: "🇨🇳"
	}[countryCode] || "🌐";
}
function BuyersListView({ buyers, onSelectBuyer, onEditBuyer, onToggleArchive }) {
	const [copiedField, setCopiedField] = (0, import_react.useState)(null);
	const copyToClipboard = (text, label, e) => {
		e.stopPropagation();
		navigator.clipboard.writeText(text);
		setCopiedField(`${label}-${text}`);
		toast.success(`Copied ${label}`, {
			description: text,
			duration: 2e3
		});
		setTimeout(() => setCopiedField(null), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "md:hidden divide-y divide-slate-100",
			children: buyers.map((buyer) => {
				const initials = getAvatarInitials(buyer.name);
				const flag = getCountryFlag(buyer.countryCode);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					onClick: () => onSelectBuyer(buyer),
					className: "p-4 space-y-3 hover:bg-slate-50/80 active:bg-slate-100/60 transition-colors cursor-pointer",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#6A80A9]/20 to-[#C7D5BF]/30 font-bold text-[#0FA3B1] text-xs shadow-2xs",
									children: [initials, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "absolute -bottom-1 -right-1 text-xs",
										title: buyer.country,
										children: flag
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 93,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 91,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1.5 flex-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-sm font-bold text-slate-900 truncate",
											children: buyer.name
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 99,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-slate-600",
											children: buyer.code
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 102,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 98,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-slate-500 truncate",
										children: buyer.company
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 106,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 97,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 90,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold shrink-0", buyer.status === "Active" ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60" : "bg-slate-100 text-slate-600 border border-slate-200"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("size-1.5 rounded-full", buyer.status === "Active" ? "bg-emerald-500" : "bg-slate-400") }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 117,
									columnNumber: 19
								}, this), buyer.status]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 109,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 89,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5 truncate",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { className: "size-3 text-slate-400 shrink-0" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 130,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "truncate",
									children: buyer.defaultPort || buyer.country
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 131,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 129,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5 truncate",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "size-3 text-slate-400 shrink-0" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 134,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [buyer.activeShipmentsCount, " active units"] }, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 135,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 133,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 128,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between pt-2 border-t border-slate-100 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: buyer.email && /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: (e) => copyToClipboard(buyer.email, "Email", e),
									className: "inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 hover:text-slate-900 bg-slate-100 px-2 py-1 rounded-md",
									children: [/* @__PURE__ */ (void 0)(Mail, { className: "size-3" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 148,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "max-w-[120px] truncate",
										children: buyer.email
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 149,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 143,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 141,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: (e) => {
										e.stopPropagation();
										onEditBuyer(buyer);
									},
									className: "p-1.5 rounded-lg text-slate-500 hover:bg-slate-100",
									title: "Edit Buyer",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 163,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 154,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-4 text-slate-400" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 165,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 153,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 140,
							columnNumber: 15
						}, this)
					]
				}, buyer.id, true, {
					fileName: _jsxFileName$4,
					lineNumber: 84,
					columnNumber: 13
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 79,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "hidden md:block overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
				className: "w-full text-left text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
					className: "border-b border-slate-200 bg-slate-50/75 text-[11px] font-bold uppercase tracking-wider text-slate-500",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-3.5 pl-6 pr-4",
							children: "Buyer Account"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 178,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5",
							children: "Company Entity"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 179,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5",
							children: "Country & Port"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 180,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5",
							children: "Primary Contact"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 181,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5",
							children: "Email"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 182,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5",
							children: "Phone / WhatsApp"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 183,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5 text-center",
							children: "Active Units"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 184,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5 text-center",
							children: "Status"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 185,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-3.5 pl-4 pr-6 text-right",
							children: "Actions"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 186,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 177,
					columnNumber: 13
				}, this) }, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 176,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
					className: "divide-y divide-slate-100",
					children: buyers.map((buyer) => {
						const initials = getAvatarInitials(buyer.name);
						const flag = getCountryFlag(buyer.countryCode);
						const isEmailCopied = copiedField === `Email-${buyer.email}`;
						const isPhoneCopied = copiedField === `Phone-${buyer.phone}`;
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
							onClick: () => onSelectBuyer(buyer),
							className: "group cursor-pointer transition-colors duration-150 hover:bg-slate-50/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-3.5 pl-6 pr-4",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "grid size-9 shrink-0 place-items-center rounded-xl border border-[#C7E8E8] bg-[#E8F5F6] text-xs font-bold text-[#0FA3B1] shadow-2xs group-hover:scale-105 transition-transform",
												children: initials
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 206,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "absolute -bottom-1 -right-1 text-[10px] drop-shadow-2xs",
												title: buyer.country,
												children: flag
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 209,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 205,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "font-bold text-[13.5px] text-slate-900 group-hover:text-[#0FA3B1] transition-colors truncate",
													children: buyer.name
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 218,
													columnNumber: 27
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "rounded bg-slate-100 border border-slate-200 px-1.5 py-0.2 font-mono text-[10px] font-semibold text-slate-500",
													children: buyer.code
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 221,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 217,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11.5px] text-slate-400 truncate mt-0.5",
												children: buyer.company
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 225,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 216,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 204,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 203,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1.5 text-[13px] font-semibold text-slate-800",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "size-3.5 text-slate-400 shrink-0" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 235,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "truncate max-w-[160px]",
											children: buyer.company
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 236,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 234,
										columnNumber: 21
									}, this), buyer.taxId && /* @__PURE__ */ (void 0)("p", {
										className: "font-mono text-[10.5px] text-slate-400 truncate mt-0.5",
										children: buyer.taxId
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 239,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 233,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1.5 text-[13px] font-semibold text-slate-800",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: flag }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 248,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: buyer.country }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 249,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 247,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11px] text-slate-400 truncate mt-0.5",
										children: buyer.preferredPort || "Main Port"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 251,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 246,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[13px] font-semibold text-slate-900",
										children: buyer.contactPerson
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 258,
										columnNumber: 21
									}, this), buyer.contactRole && /* @__PURE__ */ (void 0)("p", {
										className: "text-[11px] text-slate-400 truncate mt-0.5",
										children: buyer.contactRole
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 262,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 257,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: (e) => copyToClipboard(buyer.email, "Email", e),
										title: "Click to copy email",
										className: "group/btn inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[12px] text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-3.5 text-slate-400 group-hover/btn:text-[#0FA3B1]" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 276,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "max-w-[140px] truncate",
												children: buyer.email
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 277,
												columnNumber: 23
											}, this),
											isEmailCopied ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3 text-emerald-600" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 279,
												columnNumber: 25
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "size-3 opacity-0 group-hover/btn:opacity-100 text-slate-400 transition-opacity" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 281,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 270,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 269,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: (e) => copyToClipboard(buyer.phone, "Phone", e),
										title: "Click to copy phone",
										className: "group/btn inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-mono text-[12px] text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "size-3.5 text-slate-400 group-hover/btn:text-[#0FA3B1]" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 294,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "whitespace-nowrap",
												children: buyer.phone
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 295,
												columnNumber: 23
											}, this),
											isPhoneCopied ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3 text-emerald-600" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 297,
												columnNumber: 25
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "size-3 opacity-0 group-hover/btn:opacity-100 text-slate-400 transition-opacity" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 299,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 288,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 287,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5 text-center",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold transition-colors", buyer.activeMovements > 0 ? "bg-slate-100 text-slate-900 border border-slate-200" : "text-slate-400"),
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: cn("size-3.5", buyer.activeMovements > 0 ? "text-[#0FA3B1]" : "text-slate-300") }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 314,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: buyer.activeMovements }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 320,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 306,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 305,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5 text-center",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold border", buyer.status === "Active" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-slate-100 text-slate-600"),
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("size-1.5 rounded-full", buyer.status === "Active" ? "bg-emerald-500 animate-pulse" : "bg-slate-400") }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 334,
											columnNumber: 23
										}, this), buyer.status]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 326,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 325,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									onClick: (e) => e.stopPropagation(),
									className: "py-3.5 pl-4 pr-6 text-right",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											className: "grid size-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ellipsis, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 354,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 350,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 349,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
										align: "end",
										className: "w-48 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
												className: "px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400",
												children: buyer.name
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 361,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => onSelectBuyer(buyer),
												className: "flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 368,
													columnNumber: 27
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 369,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 364,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => onEditBuyer(buyer),
												className: "flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5 text-slate-500" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 375,
													columnNumber: 27
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Edit Buyer" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 376,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 371,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
													to: "/new-booking",
													className: "flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5 text-emerald-600" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 383,
														columnNumber: 29
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "New Booking" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 384,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 379,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 378,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 387,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => onToggleArchive(buyer.id),
												className: "flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100",
												children: buyer.status === "Active" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Archive, { className: "size-3.5 text-amber-600" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 394,
													columnNumber: 31
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Buyer" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 395,
													columnNumber: 31
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 393,
													columnNumber: 29
												}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArchiveRestore, { className: "size-3.5 text-emerald-600" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 399,
													columnNumber: 31
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Restore Buyer" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 400,
													columnNumber: 31
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 398,
													columnNumber: 29
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 388,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 357,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 348,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 347,
									columnNumber: 19
								}, this)
							]
						}, buyer.id, true, {
							fileName: _jsxFileName$4,
							lineNumber: 197,
							columnNumber: 17
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 189,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 175,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 174,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 77,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/nashmia/buyers/BuyersSummaryStrip.tsx";
function BuyersSummaryStrip({ totalBuyers, activeBuyers, withActiveMovements, totalCountries }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative w-full min-w-0 max-w-full",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -top-8 inset-x-0 mx-auto h-72 w-full max-w-full sm:max-w-4xl bg-gradient-to-r from-amber-400/20 via-orange-300/15 to-teal-400/15 blur-3xl opacity-65 -z-10" }, void 0, false, {
			fileName: _jsxFileName$3,
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
								fileName: _jsxFileName$3,
								lineNumber: 29,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 28,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Active"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 32,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Accounts"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 35,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 31,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 27,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: activeBuyers
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 43,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-end gap-1.5 h-6 pb-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-2 rounded-full bg-slate-900/90" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 48,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-3.5 rounded-full bg-slate-900/90" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 49,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-6 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 50,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 51,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-2.5 rounded-full bg-slate-900/80" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 52,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 47,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 42,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
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
							fileName: _jsxFileName$3,
							lineNumber: 71,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-11 sm:size-12 rounded-full border border-amber-200/30 bg-white/5 backdrop-blur-xs flex items-center justify-center text-amber-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "size-5 stroke-[1.8] text-amber-100" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 76,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 75,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-amber-100/95",
									children: "Active"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 79,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-amber-100/95",
									children: "Movements"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 82,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 78,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 74,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-baseline",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[28px] sm:text-[32px] font-bold text-white tracking-tight leading-none",
									children: withActiveMovements
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 91,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-normal text-amber-200/80 ml-1",
									children: "mvts"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 94,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
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
											fileName: _jsxFileName$3,
											lineNumber: 100,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "22",
											cy: "5",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 106,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "42",
											cy: "18",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 107,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "62",
											cy: "8",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 108,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 99,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 98,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 89,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 60,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)] flex flex-col justify-between min-h-[145px] sm:min-h-[155px]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 121,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 120,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Total"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 124,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Buyers"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 127,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 123,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 119,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: totalBuyers
						}, void 0, false, {
							fileName: _jsxFileName$3,
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
									fileName: _jsxFileName$3,
									lineNumber: 141,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 140,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 139,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 134,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 117,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)] flex flex-col justify-between min-h-[145px] sm:min-h-[155px]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Earth, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 159,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 158,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Global"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 162,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Corridors"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 165,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 161,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 157,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: totalCountries
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 173,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-rows-3 grid-flow-col gap-x-1.5 gap-y-1 pb-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 178,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 179,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 180,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 182,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-400" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 183,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 184,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 186,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 187,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 188,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 190,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-400" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 191,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 192,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 194,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 195,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 196,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 177,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 172,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 155,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 21,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/nashmia/buyers/BuyersToolbar.tsx";
function BuyersToolbar({ searchQuery, onSearchChange, selectedCountry, onCountryChange, selectedStatus, onStatusChange, sortBy, onSortChange, viewMode, onViewModeChange, onResetFilters }) {
	const searchInputRef = (0, import_react.useRef)(null);
	const hasActiveFilters = searchQuery !== "" || selectedCountry !== "all" || selectedStatus !== "all" || sortBy !== "name-asc";
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
	const currentSortLabel = SORT_OPTIONS.find((s) => s.value === sortBy)?.label || "Sort";
	const quickFilters = [
		{
			label: "All Accounts",
			active: selectedCountry === "all" && selectedStatus === "all",
			onClick: () => {
				onCountryChange("all");
				onStatusChange("all");
			}
		},
		{
			label: "Active Only",
			active: selectedStatus === "Active",
			onClick: () => onStatusChange(selectedStatus === "Active" ? "all" : "Active")
		},
		{
			label: "United Kingdom",
			active: selectedCountry === "United Kingdom",
			onClick: () => onCountryChange(selectedCountry === "United Kingdom" ? "all" : "United Kingdom")
		},
		{
			label: "Pakistan",
			active: selectedCountry === "Pakistan",
			onClick: () => onCountryChange(selectedCountry === "Pakistan" ? "all" : "Pakistan")
		},
		{
			label: "Spain",
			active: selectedCountry === "Spain",
			onClick: () => onCountryChange(selectedCountry === "Spain" ? "all" : "Spain")
		},
		{
			label: "Germany",
			active: selectedCountry === "Germany",
			onClick: () => onCountryChange(selectedCountry === "Germany" ? "all" : "Germany")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col gap-3 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03),0_8px_20px_-6px_rgba(0,0,0,0.04)] lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 118,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						ref: searchInputRef,
						type: "text",
						value: searchQuery,
						onChange: (e) => onSearchChange(e.target.value),
						placeholder: "Search by buyer name, company, contact person, or account code...",
						className: "h-[44px] w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-20 text-[13.5px] text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-[#0FA3B1] focus:bg-white focus:shadow-[0_0_0_3px_rgba(15,163,177,0.12)] focus:outline-none"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 119,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5",
						children: searchQuery ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onSearchChange(""),
							"aria-label": "Clear search input",
							className: "rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 136,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 130,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", {
							className: "pointer-events-none hidden items-center gap-0.5 rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10.5px] font-semibold text-slate-400 shadow-2xs sm:inline-flex",
							children: "⌘ K"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 139,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 128,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 117,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: cn("inline-flex h-[42px] items-center gap-2 rounded-xl border px-3.5 text-[13px] font-semibold transition-all duration-200", selectedCountry !== "all" ? "border-[#0FA3B1]/40 bg-[#E8F5F6] text-[#0FA3B1]" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Earth, { className: "size-3.5 text-slate-400" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 160,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "max-w-[120px] truncate",
									children: selectedCountry === "all" ? "Country" : selectedCountry
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 161,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 164,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 151,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 150,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
						align: "end",
						className: "w-56 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
								className: "px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400",
								children: "Filter by Country"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 171,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onCountryChange("all"),
								className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All Countries" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 178,
									columnNumber: 17
								}, this), selectedCountry === "all" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 179,
									columnNumber: 47
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 174,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 181,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "max-h-56 overflow-y-auto",
								children: COUNTRY_FILTER_OPTIONS.filter((c) => c !== "All Countries").map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onCountryChange(c),
									className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: c }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 189,
										columnNumber: 21
									}, this), selectedCountry === c && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 190,
										columnNumber: 47
									}, this)]
								}, c, true, {
									fileName: _jsxFileName$2,
									lineNumber: 184,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 182,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 167,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 149,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: cn("inline-flex h-[42px] items-center gap-2 rounded-xl border px-3.5 text-[13px] font-semibold transition-all duration-200", selectedStatus !== "all" ? "border-[#0FA3B1]/40 bg-[#E8F5F6] text-[#0FA3B1]" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Funnel, { className: "size-3.5 text-slate-400" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 209,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: selectedStatus === "all" ? "Status" : selectedStatus }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 210,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 211,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 200,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 199,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
						align: "end",
						className: "w-48 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
								className: "px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400",
								children: "Filter by Status"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 218,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onStatusChange("all"),
								className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All Statuses" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 225,
									columnNumber: 17
								}, this), selectedStatus === "all" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 226,
									columnNumber: 46
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 221,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 228,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onStatusChange("Active"),
								className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-emerald-500" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 234,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Active" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 235,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 233,
									columnNumber: 17
								}, this), selectedStatus === "Active" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 237,
									columnNumber: 49
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 229,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onStatusChange("Inactive"),
								className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-slate-400" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 244,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Inactive" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 245,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 243,
									columnNumber: 17
								}, this), selectedStatus === "Inactive" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 247,
									columnNumber: 51
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 239,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 214,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 198,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "inline-flex h-[42px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 text-[13px] font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 259,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "hidden sm:inline",
									children: currentSortLabel
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 260,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 261,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 255,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 254,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
						align: "end",
						className: "w-56 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
							className: "px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400",
							children: "Sort Buyers By"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 268,
							columnNumber: 15
						}, this), SORT_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
							onClick: () => onSortChange(opt.value),
							className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: opt.label }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 277,
								columnNumber: 19
							}, this), sortBy === opt.value && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 278,
								columnNumber: 44
							}, this)]
						}, opt.value, true, {
							fileName: _jsxFileName$2,
							lineNumber: 272,
							columnNumber: 17
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 264,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 253,
						columnNumber: 11
					}, this),
					hasActiveFilters && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: onResetFilters,
						className: "inline-flex h-[42px] items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 text-[12.5px] font-semibold text-slate-600 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900",
						children: [/* @__PURE__ */ (void 0)(RotateCcw, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 291,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", { children: "Clear" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 292,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 286,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-0.5 hidden h-6 w-px bg-slate-200 sm:block" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 297,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center rounded-xl border border-slate-200 bg-slate-50/70 p-1 shadow-2xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onViewModeChange("grid"),
							"aria-label": "Switch to Grid View",
							className: cn("grid size-8 place-items-center rounded-lg transition-all duration-200", viewMode === "grid" ? "bg-[#0FA3B1] text-white shadow-sm" : "text-slate-400 hover:text-slate-800"),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutGrid, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 312,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 301,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onViewModeChange("list"),
							"aria-label": "Switch to List View",
							className: cn("grid size-8 place-items-center rounded-lg transition-all duration-200", viewMode === "list" ? "bg-[#0FA3B1] text-white shadow-sm" : "text-slate-400 hover:text-slate-800"),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 325,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 314,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 300,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 147,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 115,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center gap-1.5 overflow-x-auto pb-1 text-xs [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-[11.5px] font-semibold uppercase tracking-wider text-slate-400 mr-1 shrink-0",
				children: "Quick Filters:"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 333,
				columnNumber: 9
			}, this), quickFilters.map((qf) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: qf.onClick,
				className: cn("whitespace-nowrap rounded-lg px-3 py-1.5 text-[12px] font-semibold transition-all shrink-0", qf.active ? "bg-[#0FA3B1] text-white shadow-sm" : "border border-slate-200/80 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"),
				children: qf.label
			}, qf.label, false, {
				fileName: _jsxFileName$2,
				lineNumber: 337,
				columnNumber: 11
			}, this))]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 332,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 113,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/nashmia/buyers/BuyersDirectoryPage.tsx";
function BuyersDirectoryPage({ onOpenMobileMenu }) {
	const { userId, isConfigured } = useAuth();
	const queryClient = useQueryClient();
	const { data: cachedBuyers = [], isLoading: isQueryLoading, refetch: refetchBuyers } = useCachedBuyers(userId, { enabled: isConfigured });
	const { data: allBookings = [] } = useQuery({
		queryKey: ["dashboard-bookings", userId],
		queryFn: () => fetchBookingsFromSupabase(userId),
		enabled: true
	});
	const [buyers, setBuyers] = (0, import_react.useState)([]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedCountry, setSelectedCountry] = (0, import_react.useState)("all");
	const [selectedStatus, setSelectedStatus] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("name-asc");
	const [viewMode, setViewMode] = (0, import_react.useState)("grid");
	const [isAddModalOpen, setIsAddModalOpen] = (0, import_react.useState)(false);
	const [editingBuyer, setEditingBuyer] = (0, import_react.useState)(null);
	const [selectedBuyer, setSelectedBuyer] = (0, import_react.useState)(null);
	const [isDetailDrawerOpen, setIsDetailDrawerOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setBuyers(cachedBuyers || []);
	}, [cachedBuyers]);
	const isLoading = isQueryLoading && buyers.length === 0;
	useSupabaseRealtime("buyers", (0, import_react.useCallback)(() => {
		invalidateCachedBuyers(queryClient, userId);
	}, [queryClient, userId]), isConfigured);
	const filteredBuyers = (0, import_react.useMemo)(() => {
		return buyers.filter((b) => {
			if (searchQuery.trim()) {
				const q = searchQuery.toLowerCase().trim();
				const matchName = b.name.toLowerCase().includes(q);
				const matchCompany = b.company.toLowerCase().includes(q);
				const matchCountry = b.country.toLowerCase().includes(q);
				const matchContact = b.contactPerson.toLowerCase().includes(q);
				const matchEmail = b.email.toLowerCase().includes(q);
				const matchPhone = b.phone.toLowerCase().includes(q);
				const matchCode = b.code.toLowerCase().includes(q);
				if (!matchName && !matchCompany && !matchCountry && !matchContact && !matchEmail && !matchPhone && !matchCode) return false;
			}
			if (selectedCountry !== "all" && b.country !== selectedCountry) return false;
			if (selectedStatus !== "all" && b.status !== selectedStatus) return false;
			return true;
		}).sort((a, b) => {
			if (sortBy === "name-asc") return a.name.localeCompare(b.name);
			if (sortBy === "name-desc") return b.name.localeCompare(a.name);
			if (sortBy === "movements-desc") return b.activeMovements - a.activeMovements;
			if (sortBy === "recent") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
			return 0;
		});
	}, [
		buyers,
		searchQuery,
		selectedCountry,
		selectedStatus,
		sortBy
	]);
	const stats = (0, import_react.useMemo)(() => {
		return {
			totalBuyers: buyers.length,
			activeBuyers: buyers.filter((b) => b.status === "Active").length,
			withActiveMovements: buyers.filter((b) => b.activeMovements > 0).length,
			totalCountries: new Set(buyers.map((b) => b.country)).size
		};
	}, [buyers]);
	const handleSaveBuyer = async (data, editId) => {
		if (editId) {
			setBuyers((prev) => prev.map((b) => b.id === editId ? {
				...b,
				...data
			} : b));
			if (selectedBuyer?.id === editId) setSelectedBuyer((prev) => prev ? {
				...prev,
				...data
			} : null);
			try {
				if (isConfigured) {
					const updated = await updateBuyerInSupabase(editId, data);
					setBuyers((prev) => prev.map((b) => b.id === editId ? updated : b));
					await invalidateCachedBuyers(queryClient, userId);
				}
				toast.success("Buyer updated successfully");
			} catch (err) {
				toast.error("Failed to update buyer", { description: err instanceof Error ? err.message : "Database error" });
				refetchBuyers();
			}
		} else {
			const tempId = `buyer-${Date.now()}`;
			const newBuyerLocal = {
				...data,
				id: tempId,
				createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
			};
			setBuyers((prev) => [newBuyerLocal, ...prev]);
			try {
				if (isConfigured) {
					const created = await insertBuyerToSupabase(userId || null, data);
					setBuyers((prev) => prev.map((b) => b.id === tempId ? created : b));
					await invalidateCachedBuyers(queryClient, userId);
					try {
						window.dispatchEvent(new CustomEvent("nashmia-buyer-created", { detail: created }));
					} catch (e) {
						console.error("Failed to broadcast buyer event:", e);
					}
				} else try {
					window.dispatchEvent(new CustomEvent("nashmia-buyer-created", { detail: newBuyerLocal }));
				} catch (e) {
					console.error("Failed to broadcast buyer event:", e);
				}
				toast.success(`${data.name} added to directory & Supabase`);
			} catch (err) {
				console.warn("[BuyersDirectoryPage] Supabase buyer creation error:", err);
				toast.error("Failed to save buyer to Supabase", { description: err instanceof Error ? err.message : "Database error" });
				refetchBuyers();
			}
		}
	};
	const handleToggleArchive = async (buyerId) => {
		const target = buyers.find((b) => b.id === buyerId);
		if (!target) return;
		const nextStatus = target.status === "Active" ? "Inactive" : "Active";
		setBuyers((prev) => prev.map((b) => b.id === buyerId ? {
			...b,
			status: nextStatus
		} : b));
		if (selectedBuyer?.id === buyerId) setSelectedBuyer((prev) => prev ? {
			...prev,
			status: nextStatus
		} : null);
		try {
			if (isConfigured) {
				await updateBuyerInSupabase(buyerId, { status: nextStatus });
				await invalidateCachedBuyers(queryClient, userId);
			}
			toast.info(nextStatus === "Inactive" ? `${target.name} archived` : `${target.name} activated`);
		} catch (err) {
			toast.error("Could not update buyer status", { description: err instanceof Error ? err.message : "Database error" });
			loadBuyers();
		}
	};
	const handleOpenAddModal = () => {
		setEditingBuyer(null);
		setIsAddModalOpen(true);
	};
	const handleOpenEditModal = (buyer) => {
		setEditingBuyer(buyer);
		setIsAddModalOpen(true);
	};
	const handleSelectBuyer = (buyer) => {
		setSelectedBuyer(buyer);
		setIsDetailDrawerOpen(true);
	};
	const handleResetFilters = () => {
		setSearchQuery("");
		setSelectedCountry("all");
		setSelectedStatus("all");
		setSortBy("name-asc");
	};
	const selectedBuyerMovements = (0, import_react.useMemo)(() => {
		if (!selectedBuyer) return [];
		const bId = (selectedBuyer.id || "").toLowerCase();
		const bName = (selectedBuyer.name || "").toLowerCase();
		const bComp = (selectedBuyer.company || "").toLowerCase();
		return (allBookings || []).filter((b) => {
			const rowBuyerId = (b.buyer_id || "").toLowerCase();
			const rowCustName = (b.customer_name || "").toLowerCase();
			const rowBuyerName = (b.buyer_name || "").toLowerCase();
			return rowBuyerId === bId || bId && rowBuyerId && rowBuyerId === bId || bName && (rowCustName === bName || rowBuyerName === bName) || bComp && (rowCustName === bComp || rowBuyerName === bComp);
		}).map((b) => ({
			id: b.id,
			ref: b.booking_reference || b.movement_number || b.id,
			buyerId: selectedBuyer.id,
			buyerName: selectedBuyer.name,
			supplierName: b.supplier_name || "Supplier",
			containersCount: b.container_count || 1,
			containerSize: b.container_size || "40HC",
			polCode: b.pol_code || "POL",
			polName: b.pol_name || b.origin || "Origin",
			podCode: b.pod_code || "POD",
			podName: b.pod_name || b.destination || "Destination",
			carrier: b.carrier || "Carrier",
			vessel: b.vessel_name || "Vessel",
			status: b.status || "In Transit",
			etd: b.etd || "—",
			eta: b.eta || "—",
			ratePerContainer: b.rate_amount || 0,
			totalFreight: b.total_freight || 0,
			currency: b.currency || "USD"
		}));
	}, [selectedBuyer, allBookings]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative z-10 w-full min-w-0 max-w-full space-y-7 text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BuyersHeader, {
				onOpenMobileMenu,
				onAddBuyer: handleOpenAddModal
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 308,
				columnNumber: 7
			}, this),
			isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectorySummaryStripSkeleton, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 312,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BuyersSummaryStrip, {
				totalBuyers: stats.totalBuyers,
				activeBuyers: stats.activeBuyers,
				withActiveMovements: stats.withActiveMovements,
				totalCountries: stats.totalCountries
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 314,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BuyersToolbar, {
				searchQuery,
				onSearchChange: setSearchQuery,
				selectedCountry,
				onCountryChange: setSelectedCountry,
				selectedStatus,
				onStatusChange: setSelectedStatus,
				sortBy,
				onSortChange: setSortBy,
				viewMode,
				onViewModeChange: setViewMode,
				onResetFilters: handleResetFilters
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 323,
				columnNumber: 7
			}, this),
			isLoading ? viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectoryCardGridSkeleton, { count: 8 }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 340,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectoryTableSkeleton, { rows: 8 }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 342,
				columnNumber: 11
			}, this) : filteredBuyers.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BuyersEmptyState, {
				isSearchEmpty: searchQuery !== "" || selectedCountry !== "all" || selectedStatus !== "all",
				onResetFilters: handleResetFilters,
				onAddBuyer: handleOpenAddModal
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 345,
				columnNumber: 9
			}, this) : viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BuyerCardGrid, {
				buyers: filteredBuyers,
				onSelectBuyer: handleSelectBuyer,
				onEditBuyer: handleOpenEditModal,
				onToggleArchive: handleToggleArchive,
				onAddBuyer: handleOpenAddModal
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 353,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BuyersListView, {
				buyers: filteredBuyers,
				onSelectBuyer: handleSelectBuyer,
				onEditBuyer: handleOpenEditModal,
				onToggleArchive: handleToggleArchive
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 361,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddBuyerModal, {
				open: isAddModalOpen,
				onOpenChange: setIsAddModalOpen,
				onSaveBuyer: handleSaveBuyer,
				editBuyer: editingBuyer
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 370,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BuyerDetailDrawer, {
				open: isDetailDrawerOpen,
				onOpenChange: setIsDetailDrawerOpen,
				buyer: selectedBuyer,
				movements: selectedBuyerMovements,
				onEditBuyer: (b) => {
					setIsDetailDrawerOpen(false);
					handleOpenEditModal(b);
				},
				onToggleArchive: handleToggleArchive
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 378,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 306,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/buyers.tsx?tsr-split=component";
function BuyersRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, {
		bg: "bg-white",
		children: ({ onOpenMobileMenu }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BuyersDirectoryPage, { onOpenMobileMenu }, void 0, false, {
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
export { BuyersRoute as component };
