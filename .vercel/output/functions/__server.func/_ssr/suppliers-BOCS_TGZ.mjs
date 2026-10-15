import { o as __toESM } from "../_runtime.mjs";
import { Wt as updateSupplierInSupabase, nt as fetchBookingsFromSupabase, xt as insertSupplierToSupabase } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { A as Share2, Bt as Ellipsis, Et as Funnel, Ht as Earth, K as Phone, Kt as Copy, Lt as Eye, P as Search, R as RotateCcw, S as Star, Tn as ArchiveRestore, Vt as EllipsisVertical, W as Plus, Yt as Clock, _t as LayoutGrid, bn as ArrowUpDown, cn as Check, ct as MapPin, hn as Bookmark, i as X, lt as Mail, nn as CircleAlert, ot as Menu, pt as List, q as Pen, qt as Container, s as Warehouse, sn as ChevronDown, tn as CircleCheck, u as UserPlus, wn as Archive, xn as ArrowRight, zt as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { N as useAuth, _ as DropdownMenuTrigger, c as DialogDescription, d as DialogTitle, f as DropdownMenu, g as DropdownMenuSeparator, h as DropdownMenuLabel, m as DropdownMenuItem, n as ResultSuccessView, o as Dialog, p as DropdownMenuContent, r as AppLayout, s as DialogContent, u as DialogHeader, v as useSupabaseRealtime } from "./router-BJg2H47m.mjs";
import { t as LifecycleDropdownSelect } from "./LifecycleDropdownSelect-Dr2RhBr1.mjs";
import { o as useCachedSuppliers, r as invalidateCachedSuppliers } from "./entity-cache-C4kyVDy3.mjs";
import { n as DirectorySummaryStripSkeleton, r as DirectoryTableSkeleton, t as DirectoryCardGridSkeleton } from "./DirectorySkeletons-CWkWH_i-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/suppliers-BOCS_TGZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var SUPPLIER_COUNTRY_OPTIONS = [
	"All Countries",
	"United Kingdom",
	"Spain",
	"France",
	"Germany",
	"Italy",
	"Netherlands",
	"Sweden",
	"Pakistan",
	"United States"
];
var LOAD_POINT_TYPE_OPTIONS = [
	{
		label: "All Facility Types",
		value: "all"
	},
	{
		label: "Warehouse",
		value: "Warehouse"
	},
	{
		label: "Distribution Center",
		value: "Distribution Center"
	},
	{
		label: "Factory Hub",
		value: "Factory Hub"
	},
	{
		label: "Port Depot",
		value: "Port Depot"
	},
	{
		label: "CFS Terminal",
		value: "CFS Terminal"
	},
	{
		label: "Cold Hub",
		value: "Cold Hub"
	}
];
var SUPPLIER_SORT_OPTIONS = [
	{
		label: "Name (A–Z)",
		value: "name-asc"
	},
	{
		label: "Name (Z–A)",
		value: "name-desc"
	},
	{
		label: "Most Active Containers",
		value: "containers-desc"
	},
	{
		label: "Recently Added",
		value: "recent"
	}
];
var _jsxFileName$12 = "/app/applet/src/components/nashmia/suppliers/AddSupplierModal.tsx";
function AddSupplierModal({ open, onOpenChange, onSaveSupplier, editSupplier }) {
	const [name, setName] = (0, import_react.useState)("");
	const [country, setCountry] = (0, import_react.useState)("United Kingdom");
	const [loadPoint, setLoadPoint] = (0, import_react.useState)("");
	const [loadPointType, setLoadPointType] = (0, import_react.useState)("Warehouse");
	const [contactPerson, setContactPerson] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("Active");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const [savedEntity, setSavedEntity] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (editSupplier) {
			setName(editSupplier.name);
			setCountry(editSupplier.country);
			setLoadPoint(editSupplier.loadPoint);
			setLoadPointType(editSupplier.loadPointType);
			setContactPerson(editSupplier.contactPerson);
			setEmail(editSupplier.email);
			setPhone(editSupplier.phone);
			setStatus(editSupplier.status === "Inactive" ? "Inactive" : "Active");
			setIsSuccess(false);
			setSavedEntity(null);
		} else {
			setName("");
			setCountry("United Kingdom");
			setLoadPoint("");
			setLoadPointType("Warehouse");
			setContactPerson("");
			setEmail("");
			setPhone("");
			setStatus("Active");
			setIsSuccess(false);
			setSavedEntity(null);
		}
		setErrors({});
	}, [editSupplier, open]);
	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = {};
		if (!name.trim()) newErrors.name = "Supplier name is required";
		if (!loadPoint.trim()) newErrors.loadPoint = "Load point or warehouse is required";
		if (!contactPerson.trim()) newErrors.contactPerson = "Contact person is required";
		if (!email.trim()) newErrors.email = "Email address is required";
		else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email address";
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}
		const countryCode = country === "United Kingdom" ? "GB" : country === "Spain" ? "ES" : country === "France" ? "FR" : country === "Germany" ? "DE" : country === "Italy" ? "IT" : country === "Netherlands" ? "NL" : country === "Pakistan" ? "PK" : "US";
		const code = editSupplier?.code || `SUP-${countryCode}-${Math.floor(1e3 + Math.random() * 9e3)}`;
		onSaveSupplier({
			name: name.trim(),
			subtitle: "Pickup Vendor",
			companyName: editSupplier?.companyName || `${name.trim()} Ltd`,
			country,
			countryCode,
			loadPoint: loadPoint.trim(),
			loadPointCity: loadPoint.trim().split(" ")[0],
			loadPointType,
			contactPerson: contactPerson.trim(),
			email: email.trim().toLowerCase(),
			phone: phone.trim() || "+44 20 7946 0000",
			status,
			code,
			address: editSupplier?.address || `${loadPoint.trim()}, ${country}`,
			city: editSupplier?.city || country,
			activeContainers: editSupplier ? editSupplier.activeContainers : 0,
			containersDelta: editSupplier ? editSupplier.containersDelta : "0 this month",
			totalContainersMoved: editSupplier ? editSupplier.totalContainersMoved : 0
		}, editSupplier?.id);
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
			className: cn("w-full sm:max-w-[560px] max-h-[92vh] flex flex-col p-0 overflow-hidden sm:rounded-[28px] bg-white shadow-2xl focus:outline-none", isSuccess && "sm:max-w-[420px]"),
			children: isSuccess ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-4 sm:p-6 overflow-y-auto max-h-[88vh]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultSuccessView, {
					type: "success",
					title: "Success!",
					message: `Thank you for waiting. Your supplier data has been ${editSupplier ? "updated" : "approved"}.`,
					entityName: savedEntity?.name,
					entitySubtitle: savedEntity?.code,
					actionText: "OKAY",
					onAction: handleDismiss,
					onClose: handleDismiss
				}, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 167,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 166,
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
							lineNumber: 192,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 186,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, {
						className: "p-5 sm:p-6 pb-3 sm:pb-4 border-b border-slate-100 shrink-0 bg-white space-y-1.5 text-left pr-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-[#E8F5F6] px-3 py-1 text-[11px] font-bold text-[#0FA3B1] w-fit",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 198,
									columnNumber: 17
								}, this), editSupplier ? "Edit Supplier Profile" : "Origin Supplier"]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 197,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
								className: "text-xl sm:text-[22px] font-extrabold tracking-tight text-[#0D1F3C]",
								children: editSupplier ? "Update Supplier Profile" : "Add Supplier Profile"
							}, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 201,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
								className: "text-xs sm:text-[13px] font-medium text-slate-500",
								children: editSupplier ? "Modify vendor dispatch warehouse, facility type, and direct contact." : "Configure dispatch location, contact person, and booking status."
							}, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 204,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$12,
						lineNumber: 196,
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
											children: ["Supplier Name ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 217,
												columnNumber: 35
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 216,
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
											placeholder: "e.g. Apex Global Logistics",
											className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
										}, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 219,
											columnNumber: 19
										}, this),
										errors.name && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 231,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.name }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 232,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 230,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 215,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
										label: "Country",
										value: country,
										onChange: (val) => setCountry(val),
										options: SUPPLIER_COUNTRY_OPTIONS.filter((c) => c !== "All Countries").map((c) => ({
											value: c,
											label: c
										})),
										placeholder: "Select Country",
										activeColor: "teal",
										triggerClassName: "h-11 w-full text-sm sm:text-[13px] bg-slate-50/60"
									}, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 238,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 237,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 214,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1 sm:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "text-[12px] font-semibold text-slate-600",
											children: ["Primary Load Point / Facility ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 259,
												columnNumber: 51
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 258,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "relative",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												type: "text",
												value: loadPoint,
												onChange: (e) => {
													setLoadPoint(e.target.value);
													if (errors.loadPoint) setErrors((prev) => ({
														...prev,
														loadPoint: ""
													}));
												},
												placeholder: "e.g. Felixstowe Cargo Hub, Gate 4",
												className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 262,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 261,
											columnNumber: 19
										}, this),
										errors.loadPoint && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 275,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.loadPoint }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 276,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 274,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 257,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleDropdownSelect, {
										label: "Facility Type",
										value: loadPointType,
										onChange: (val) => setLoadPointType(val),
										options: [
											{
												value: "Warehouse",
												label: "Warehouse"
											},
											{
												value: "Factory",
												label: "Factory"
											},
											{
												value: "Terminal",
												label: "Terminal"
											},
											{
												value: "Depot",
												label: "Depot"
											}
										],
										placeholder: "Select Type",
										activeColor: "teal",
										triggerClassName: "h-11 w-full text-sm sm:text-[13px] bg-slate-50/60"
									}, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 282,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 281,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 256,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "text-[12px] font-semibold text-slate-600",
										children: ["Primary Contact Person ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-rose-500",
											children: "*"
										}, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 304,
											columnNumber: 42
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$12,
										lineNumber: 303,
										columnNumber: 17
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
										placeholder: "e.g. David Sterling (Dispatch Lead)",
										className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
									}, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 306,
										columnNumber: 17
									}, this),
									errors.contactPerson && /* @__PURE__ */ (void 0)("p", {
										className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
										children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 318,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: errors.contactPerson }, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 319,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$12,
										lineNumber: 317,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 302,
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
												lineNumber: 328,
												columnNumber: 34
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 327,
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
											placeholder: "dispatch@supplier.com",
											className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
										}, void 0, false, {
											fileName: _jsxFileName$12,
											lineNumber: 330,
											columnNumber: 19
										}, this),
										errors.email && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 342,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.email }, void 0, false, {
												fileName: _jsxFileName$12,
												lineNumber: 343,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$12,
											lineNumber: 341,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 326,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "text-[12px] font-semibold text-slate-600",
										children: "Phone / WhatsApp"
									}, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 349,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "text",
										value: phone,
										onChange: (e) => setPhone(e.target.value),
										placeholder: "+44 20 7946 0912",
										className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none"
									}, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 352,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 348,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 325,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-xl border border-slate-200 bg-slate-50/60 p-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[12px] font-bold text-slate-800",
									children: "Dispatch Status"
								}, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 365,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] text-slate-500",
									children: "Active suppliers can be assigned immediately to ocean bookings"
								}, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 366,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 364,
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
										lineNumber: 371,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setStatus("Inactive"),
										className: cn("rounded-full px-3 py-1 text-[11.5px] font-bold transition-all cursor-pointer", status === "Inactive" ? "bg-white text-slate-800 shadow-2xs" : "text-slate-600 hover:text-slate-900"),
										children: "Inactive"
									}, void 0, false, {
										fileName: _jsxFileName$12,
										lineNumber: 383,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$12,
									lineNumber: 370,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$12,
								lineNumber: 363,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$12,
						lineNumber: 212,
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
							lineNumber: 401,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "submit",
							className: "inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#009EE2] hover:bg-[#0089c7] px-5 sm:px-6 text-[13px] font-bold text-white shadow-md shadow-[#009EE2]/20 transition-all active:scale-[0.98] cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5 stroke-[2.5]" }, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 412,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: editSupplier ? "Save Changes" : "Add Supplier" }, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 413,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$12,
							lineNumber: 408,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$12,
						lineNumber: 400,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$12,
				lineNumber: 181,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 158,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$12,
		lineNumber: 157,
		columnNumber: 5
	}, this);
}
var _jsxFileName$11 = "/app/applet/src/components/nashmia/suppliers/AddSupplierCard.tsx";
function AddSupplierCard({ onClick }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type: "button",
		onClick,
		style: { background: "linear-gradient(180deg, #FFFFFF 0%, #F5FBFC 45%, #D4F0F6 100%)" },
		className: "group relative flex min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-[32px] sm:rounded-[36px] border border-white/90 p-6 sm:p-7 text-left shadow-[0_20px_45px_-12px_rgba(15,163,177,0.16),0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-12px_rgba(15,163,177,0.22)] active:translate-y-0 cursor-pointer",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" }, void 0, false, {
				fileName: _jsxFileName$11,
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
							fileName: _jsxFileName$11,
							lineNumber: 25,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 24,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 23,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "inline-flex items-center gap-1 rounded-full bg-white/80 border border-slate-200/60 px-3 py-1 text-[11px] font-semibold text-[#0FA3B1] shadow-2xs",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3" }, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 30,
						columnNumber: 13
					}, this), " Quick Add"]
				}, void 0, true, {
					fileName: _jsxFileName$11,
					lineNumber: 29,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$11,
				lineNumber: 22,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-[21px] sm:text-[22px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#0FA3B1] transition-colors",
						children: "Register New Supplier"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 36,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-[13.5px] font-medium text-slate-500 mt-1 leading-relaxed",
						children: "Onboard origin pickup vendor, tax ID validation, and default loading depot."
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 39,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3 flex flex-wrap items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "rounded-full bg-white/90 border border-slate-200/60 px-3 py-0.5 text-[11px] font-semibold text-slate-600 shadow-2xs",
							children: "Factory Hub"
						}, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 44,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "rounded-full bg-white/90 border border-slate-200/60 px-3 py-0.5 text-[11px] font-semibold text-slate-600 shadow-2xs",
							children: "Pickup Depot"
						}, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 47,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$11,
						lineNumber: 43,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$11,
				lineNumber: 35,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$11,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 flex items-center gap-2.5",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 rounded-full bg-[#0FA3B1] text-white font-semibold text-[13.5px] py-3 px-5 shadow-[0_4px_16px_rgba(15,163,177,0.3)] border border-[#0FA3B1] transition-all duration-200 group-hover:bg-[#0b828e] text-center flex items-center justify-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 57,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Add Supplier Profile" }, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 58,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$11,
					lineNumber: 56,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 55,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$11,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var _jsxFileName$10 = "/app/applet/src/components/nashmia/suppliers/SupplierCard.tsx";
function getAvatarInitials$3(name) {
	const parts = name.trim().split(" ");
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return (parts[0][0] + parts[1][0]).toUpperCase();
}
function getCountryFlag$3(countryCode) {
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
		CN: "🇨🇳"
	}[countryCode] || "🌐";
}
var AVATAR_GRADIENTS$1 = [
	"from-sky-400 via-teal-400 to-cyan-500",
	"from-indigo-400 via-sky-400 to-teal-400",
	"from-amber-400 via-orange-400 to-rose-400",
	"from-teal-400 via-emerald-400 to-cyan-500",
	"from-blue-500 via-indigo-400 to-sky-400"
];
function SupplierCard({ supplier, index = 0, onSelect, onEdit, onToggleArchive }) {
	const [isBookmarked, setIsBookmarked] = (0, import_react.useState)(false);
	const initials = getAvatarInitials$3(supplier.name);
	const flag = getCountryFlag$3(supplier.countryCode);
	const isInactive = supplier.status === "Inactive" || supplier.status === "Archived";
	const avatarGradient = AVATAR_GRADIENTS$1[index % AVATAR_GRADIENTS$1.length];
	const handleShare = (e) => {
		e.stopPropagation();
		const shareUrl = window.location.href;
		navigator.clipboard.writeText(shareUrl);
		toast.success(`Share link copied for ${supplier.name}`, { description: `${supplier.companyName || supplier.subtitle || "Vendor"} · ${supplier.code}` });
	};
	const handleBookmarkToggle = (e) => {
		e.stopPropagation();
		setIsBookmarked(!isBookmarked);
		toast.success(isBookmarked ? `Removed ${supplier.name} from saved` : `Saved ${supplier.name} to favorites`);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		onClick: () => onSelect(supplier),
		style: {
			animationDelay: `${index * 30}ms`,
			background: "linear-gradient(180deg, #FFFFFF 0%, #F5FBFC 45%, #D4F0F6 100%)"
		},
		className: cn("group relative flex min-h-[380px] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[32px] sm:rounded-[36px] border border-white/90 p-6 sm:p-7 shadow-[0_20px_45px_-12px_rgba(15,163,177,0.16),0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-12px_rgba(15,163,177,0.22)] active:translate-y-0", isInactive && "opacity-75 grayscale-[20%]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" }, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 107,
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
								fileName: _jsxFileName$10,
								lineNumber: 120,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 114,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-white text-xs shadow-xs border border-slate-100",
							title: supplier.country,
							children: flag
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 124,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 113,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						onClick: (e) => e.stopPropagation(),
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: handleShare,
							title: "Share Supplier Profile",
							className: "grid size-9 place-items-center rounded-full text-slate-500 hover:text-slate-900 hover:bg-white/80 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share2, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 140,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 134,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								"aria-label": `Options for ${supplier.name}`,
								className: "grid size-9 place-items-center rounded-full text-slate-400 hover:text-slate-900 hover:bg-white/80 transition-colors focus:outline-none",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ellipsis, { className: "size-4 stroke-[1.8]" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 150,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 145,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 144,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
							align: "end",
							className: "w-52 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
									className: "px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400",
									children: supplier.name
								}, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 157,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onSelect(supplier),
									className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 164,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Full Profile" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 165,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$10,
									lineNumber: 160,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onEdit(supplier),
									className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 171,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Edit Supplier" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 172,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$10,
									lineNumber: 167,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/new-booking",
										search: { supplierId: supplier.id },
										className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] font-semibold text-[#0FA3B1] hover:bg-[#E8F5F6]",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
											fileName: _jsxFileName$10,
											lineNumber: 180,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Create Booking" }, void 0, false, {
											fileName: _jsxFileName$10,
											lineNumber: 181,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$10,
										lineNumber: 175,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 174,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 184,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onToggleArchive(supplier.id),
									className: "flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] text-slate-600 hover:bg-slate-100",
									children: supplier.status === "Active" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Archive, { className: "size-3.5 text-amber-600" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 191,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Supplier" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 192,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$10,
										lineNumber: 190,
										columnNumber: 21
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArchiveRestore, { className: "size-3.5 text-emerald-600" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 196,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Activate Supplier" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 197,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$10,
										lineNumber: 195,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 185,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 153,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 143,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 133,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 111,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-[21px] sm:text-[22px] font-bold text-slate-900 tracking-tight leading-snug",
							children: supplier.name
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 208,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[13.5px] font-medium text-slate-500 mt-0.5 truncate",
							children: supplier.companyName || supplier.subtitle || `${supplier.loadPointType} · ${supplier.city}`
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 211,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-white/90 border border-slate-200/60 px-3 py-0.5 text-[11px] font-semibold text-slate-700 shadow-2xs",
									children: [
										supplier.countryCode,
										" · ",
										supplier.country
									]
								}, void 0, true, {
									fileName: _jsxFileName$10,
									lineNumber: 219,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-white/90 border border-slate-200/60 px-3 py-0.5 text-[11px] font-semibold text-slate-700 shadow-2xs",
									children: [
										supplier.loadPointType,
										" · ",
										supplier.city || supplier.loadPointCity
									]
								}, void 0, true, {
									fileName: _jsxFileName$10,
									lineNumber: 222,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-white/90 border border-slate-200/60 px-2.5 py-0.5 text-[10.5px] font-mono font-semibold text-slate-500 shadow-2xs",
									children: supplier.code
								}, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 225,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 218,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 207,
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
									fileName: _jsxFileName$10,
									lineNumber: 236,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "4.9" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 237,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$10,
								lineNumber: 235,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11.5px] font-medium text-slate-400 mt-0.5",
								children: "Rating"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 239,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 234,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[15px] font-bold text-slate-900 leading-tight",
								children: [supplier.activeContainers, " Active"]
							}, void 0, true, {
								fileName: _jsxFileName$10,
								lineNumber: 244,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11.5px] font-medium text-slate-400 mt-0.5",
								children: "Pipeline"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 247,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 243,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[15px] font-bold text-slate-900 leading-tight",
								children: [supplier.totalContainersMoved, " Units"]
							}, void 0, true, {
								fileName: _jsxFileName$10,
								lineNumber: 252,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11.5px] font-medium text-slate-400 mt-0.5",
								children: "Total Vol"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 255,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 251,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 232,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 110,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onSelect(supplier),
					className: "flex-1 rounded-full bg-white/95 hover:bg-white text-slate-900 font-semibold text-[13.5px] py-3 px-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-white/90 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(15,163,177,0.14)] active:scale-[0.98] text-center",
					children: "Get in touch"
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 263,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: handleBookmarkToggle,
					title: isBookmarked ? "Remove bookmark" : "Save bookmark",
					className: cn("size-11 sm:size-12 rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-white/90 shrink-0 transition-all duration-200 hover:scale-105 active:scale-95", isBookmarked ? "bg-[#0FA3B1] text-white border-[#0FA3B1] shadow-[0_4px_14px_rgba(15,163,177,0.3)]" : "bg-white hover:bg-slate-50 text-slate-800"),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bookmark, { className: cn("size-4.5 stroke-[2]", isBookmarked && "fill-white") }, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 283,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 272,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 261,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$10,
		lineNumber: 95,
		columnNumber: 5
	}, this);
}
var _jsxFileName$9 = "/app/applet/src/components/nashmia/suppliers/SupplierCardGrid.tsx";
function SupplierCardGrid({ suppliers, onSelectSupplier, onEditSupplier, onToggleArchive, onAddSupplier }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 animate-in fade-in-50 duration-300",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddSupplierCard, { onClick: onAddSupplier }, void 0, false, {
			fileName: _jsxFileName$9,
			lineNumber: 23,
			columnNumber: 7
		}, this), suppliers.map((supplier, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SupplierCard, {
			supplier,
			index,
			onSelect: onSelectSupplier,
			onEdit: onEditSupplier,
			onToggleArchive
		}, supplier.id, false, {
			fileName: _jsxFileName$9,
			lineNumber: 27,
			columnNumber: 9
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
var _jsxFileName$8 = "/app/applet/src/components/nashmia/suppliers/SupplierDetailDrawer.tsx";
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
		NL: "🇳🇱",
		US: "🇺🇸",
		AE: "🇦🇪",
		CN: "🇨🇳"
	}[countryCode] || "🌐";
}
function SupplierDetailDrawer({ open, onOpenChange, supplier, movements, onEditSupplier, onToggleArchive }) {
	const [copiedField, setCopiedField] = (0, import_react.useState)(null);
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	if (!supplier) return null;
	const initials = getAvatarInitials$2(supplier.name);
	const flag = getCountryFlag$2(supplier.countryCode);
	supplier.status === "Inactive" || supplier.status;
	const copyToClipboard = (text, label) => {
		navigator.clipboard.writeText(text);
		setCopiedField(`${label}-${text}`);
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
			className: "w-full sm:max-w-[760px] lg:max-w-[820px] p-0 overflow-hidden sm:rounded-[28px] bg-white shadow-2xl max-h-[92vh] flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative border-b border-slate-200 bg-gradient-to-r from-[#E8F5F6]/70 via-white to-slate-50 p-5 sm:p-6 pb-4",
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
									fileName: _jsxFileName$8,
									lineNumber: 102,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "absolute -bottom-1 -right-1 text-base drop-shadow-xs bg-white rounded-full p-0.5 border border-slate-100",
									title: supplier.country,
									children: flag
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 105,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 101,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
											className: "text-xl sm:text-2xl font-bold text-slate-900 tracking-tight",
											children: supplier.name
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 115,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold border", supplier.status === "Active" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-slate-100 text-slate-600"),
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("size-1.5 rounded-full", supplier.status === "Active" ? "bg-emerald-500 animate-pulse" : "bg-slate-400") }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 126,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: supplier.status }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 134,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 118,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 114,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
										className: "text-[13px] text-slate-500 mt-0.5 font-medium",
										children: supplier.companyName || supplier.subtitle || "Pickup Vendor & Manufacturer"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 138,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap items-center gap-2 mt-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "rounded-lg bg-white border border-slate-200 px-2 py-0.5 font-mono text-[11px] font-bold text-slate-700 shadow-2xs",
												children: supplier.code
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 143,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[11.5px] text-slate-400",
												children: [
													supplier.city,
													", ",
													supplier.country
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 146,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-slate-300",
												children: "•"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 149,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[11.5px] text-slate-400",
												children: ["Created ", supplier.createdAt]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 150,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 142,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 113,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 100,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 self-stretch sm:self-auto shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/new-booking",
								search: { supplierId: supplier.id },
								onClick: () => onOpenChange(false),
								className: "flex-1 sm:flex-none inline-flex h-9.5 items-center justify-center gap-2 rounded-xl bg-[#0FA3B1] hover:bg-[#078A99] px-4 text-xs font-semibold text-white shadow-[0_2px_10px_rgba(15,163,177,0.25)] transition-all hover:-translate-y-0.5 active:translate-y-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 163,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Create Booking" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 164,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 157,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => onEditSupplier(supplier),
								className: "inline-flex h-9.5 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs",
								title: "Edit Supplier",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5 text-slate-500" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 173,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "hidden sm:inline",
									children: "Edit"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 174,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 167,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 156,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 99,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 mt-5 -mb-4 border-b border-transparent",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActiveTab("overview"),
								className: cn("pb-2 text-xs font-semibold px-3 border-b-2 transition-all", activeTab === "overview" ? "border-[#0FA3B1] text-[#0FA3B1]" : "border-transparent text-slate-500 hover:text-slate-800"),
								children: "Overview & Contact"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 181,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActiveTab("logistics"),
								className: cn("pb-2 text-xs font-semibold px-3 border-b-2 transition-all", activeTab === "logistics" ? "border-[#0FA3B1] text-[#0FA3B1]" : "border-transparent text-slate-500 hover:text-slate-800"),
								children: "Loading Facility & Logistics"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 193,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActiveTab("movements"),
								className: cn("pb-2 text-xs font-semibold px-3 border-b-2 transition-all flex items-center gap-1.5", activeTab === "movements" ? "border-[#0FA3B1] text-[#0FA3B1]" : "border-transparent text-slate-500 hover:text-slate-800"),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Movements" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 215,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-slate-100 px-1.5 py-0.2 text-[10px] font-bold text-slate-600",
									children: movements.length
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 216,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 205,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 180,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 98,
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
											children: "Active Shipments"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 230,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[22px] font-bold text-slate-900 leading-tight",
											children: supplier.activeContainers || 0
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 233,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 229,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
											children: "Total Movements"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 238,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[22px] font-bold text-slate-900 leading-tight",
											children: movements.length
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 241,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 237,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
											children: "Load Point Type"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 246,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[13.5px] font-bold text-[#0FA3B1] truncate leading-snug",
											children: supplier.loadPointType
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 249,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 245,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
											children: "Account Status"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 254,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[13.5px] font-bold text-emerald-700 truncate leading-snug",
											children: supplier.status
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 257,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 253,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 228,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (void 0)("h4", {
									className: "text-[11px] font-bold uppercase tracking-wider text-slate-400",
									children: "Primary Contact & Communications"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 265,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-slate-200 bg-slate-50/50 p-4 space-y-1",
											children: [
												/* @__PURE__ */ (void 0)("p", {
													className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
													children: "Contact Person"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 270,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("p", {
													className: "font-bold text-slate-900 text-[14.5px]",
													children: supplier.contactPerson
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 273,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-slate-500 font-medium",
													children: supplier.contactRole || "Lead Cargo Representative"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 276,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 269,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-slate-200 bg-slate-50/50 p-4 space-y-1",
											children: [
												/* @__PURE__ */ (void 0)("p", {
													className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
													children: "Facility Location"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 282,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("p", {
													className: "font-bold text-slate-900 text-[14.5px] flex items-center gap-1.5",
													children: [/* @__PURE__ */ (void 0)("span", { children: flag }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 286,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", { children: [
														supplier.city,
														", ",
														supplier.country
													] }, void 0, true, {
														fileName: _jsxFileName$8,
														lineNumber: 287,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 285,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-slate-500 font-mono",
													children: ["Code: ", supplier.code]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 291,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 281,
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
													lineNumber: 296,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "font-semibold text-slate-900 text-[14px] truncate mt-0.5",
													children: supplier.email
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 299,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 295,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => copyToClipboard(supplier.email, "Email"),
												className: "grid size-8 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors shrink-0",
												children: copiedField === `Email-${supplier.email}` ? /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-emerald-600" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 309,
													columnNumber: 25
												}, this) : /* @__PURE__ */ (void 0)(Copy, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 311,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 303,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 294,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-slate-200 bg-white p-4 sm:col-span-2 flex items-center justify-between shadow-2xs",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (void 0)("p", {
													className: "text-[10.5px] font-bold text-slate-400 uppercase tracking-wider",
													children: "Phone / WhatsApp"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 318,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "font-mono font-semibold text-slate-900 text-[14px] mt-0.5",
													children: supplier.phone
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 321,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 317,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => copyToClipboard(supplier.phone, "Phone"),
												className: "grid size-8 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors shrink-0",
												children: copiedField === `Phone-${supplier.phone}` ? /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-emerald-600" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 331,
													columnNumber: 25
												}, this) : /* @__PURE__ */ (void 0)(Copy, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 333,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 325,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 316,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 268,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 264,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 226,
							columnNumber: 13
						}, this),
						activeTab === "logistics" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-5",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-4",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0FA3B1]",
											children: [/* @__PURE__ */ (void 0)(MapPin, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 348,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("span", { children: "Primary Loading Point" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 349,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 347,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "rounded-full bg-white border border-slate-200 px-3 py-0.5 text-xs font-bold text-slate-700 shadow-2xs",
											children: supplier.loadPointType
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 351,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 346,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-start gap-3.5",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-[#0FA3B1] shadow-2xs border border-slate-200",
											children: /* @__PURE__ */ (void 0)(Warehouse, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 358,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 357,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "min-w-0 flex-1",
											children: [
												/* @__PURE__ */ (void 0)("h4", {
													className: "text-[17px] font-bold text-slate-900 leading-tight",
													children: supplier.loadPoint
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 361,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("p", {
													className: "text-[13px] text-slate-600 mt-1",
													children: supplier.address
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 364,
													columnNumber: 21
												}, this),
												supplier.operatingHours && /* @__PURE__ */ (void 0)("p", {
													className: "text-[12px] text-slate-500 flex items-center gap-1.5 mt-2",
													children: [/* @__PURE__ */ (void 0)(Clock, { className: "size-3.5 text-slate-400" }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 367,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("span", { children: ["Operating Hours: ", /* @__PURE__ */ (void 0)("strong", { children: supplier.operatingHours }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 369,
														columnNumber: 44
													}, this)] }, void 0, true, {
														fileName: _jsxFileName$8,
														lineNumber: 368,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 366,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 360,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 356,
										columnNumber: 17
									}, this),
									supplier.pickupInstructions && /* @__PURE__ */ (void 0)("div", {
										className: "rounded-xl bg-white p-3.5 text-[12.5px] text-slate-700 border border-slate-200 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-bold text-slate-900",
											children: ["Dispatch & Loading Instructions:", " "]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 378,
											columnNumber: 21
										}, this), supplier.pickupInstructions]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 377,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 345,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 343,
							columnNumber: 13
						}, this),
						activeTab === "movements" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
									className: "text-[14px] font-bold text-slate-900",
									children: "Active & Recorded Shipments"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 392,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-slate-500",
									children: "Live movement history linked to this supplier"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 395,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 391,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)(Link, {
									to: "/new-booking",
									search: { supplierId: supplier.id },
									className: "inline-flex items-center gap-1 text-xs font-bold text-[#0FA3B1] hover:underline",
									children: [/* @__PURE__ */ (void 0)("span", { children: "New Booking" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 404,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(ArrowRight, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 405,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 399,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 390,
								columnNumber: 15
							}, this), movements.length === 0 ? /* @__PURE__ */ (void 0)("div", {
								className: "rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-8 text-center",
								children: [
									/* @__PURE__ */ (void 0)(Container, { className: "mx-auto size-8 text-slate-300" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 411,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "mt-2 text-[13.5px] font-bold text-slate-800",
										children: "No movements recorded yet"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 412,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-slate-400 mt-0.5",
										children: "Bookings created with this pickup vendor will appear here."
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 415,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 410,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (void 0)("div", {
								className: "space-y-2.5",
								children: movements.map((m) => /* @__PURE__ */ (void 0)("div", {
									className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs space-y-2 hover:border-slate-300 transition-colors",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-mono font-bold text-[13.5px] text-slate-900",
													children: m.ref
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 428,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-xs text-slate-500 font-medium",
													children: ["→ ", m.buyerName]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 431,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 427,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: cn("rounded-full px-2.5 py-0.5 text-[11px] font-semibold border", m.status === "In Transit" ? "bg-blue-50 text-blue-700 border-blue-200" : m.status === "Delivered" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200"),
												children: ["● ", m.status]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 435,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 426,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between text-xs text-slate-600 pt-1 border-t border-slate-100",
											children: [/* @__PURE__ */ (void 0)("div", { children: [
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900",
													children: m.polName
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 451,
													columnNumber: 27
												}, this),
												" → ",
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900",
													children: m.podName
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 453,
													columnNumber: 27
												}, this)
											] }, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 450,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "font-mono text-xs text-[#0FA3B1] font-bold",
												children: [
													m.containerSize,
													" × ",
													m.containersCount
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 455,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 449,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between text-[11.5px] text-slate-500 pt-1.5 bg-slate-50 -mx-4 -mb-4 px-4 py-2 rounded-b-2xl border-t border-slate-100",
											children: [/* @__PURE__ */ (void 0)("span", { children: ["ETD: ", /* @__PURE__ */ (void 0)("strong", {
												className: "text-slate-800",
												children: m.etd
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 462,
												columnNumber: 32
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 461,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", { children: ["ETA: ", /* @__PURE__ */ (void 0)("strong", {
												className: "text-slate-800",
												children: m.eta
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 465,
												columnNumber: 32
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 464,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 460,
											columnNumber: 23
										}, this)
									]
								}, m.id, true, {
									fileName: _jsxFileName$8,
									lineNumber: 422,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 420,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 389,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 224,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border-t border-slate-200 bg-slate-50/90 p-4 px-6 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onToggleArchive(supplier.id),
						className: "flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors",
						children: supplier.status === "Active" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Archive, { className: "size-3.5 text-amber-600" }, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 485,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Supplier" }, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 486,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 484,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArchiveRestore, { className: "size-3.5 text-emerald-600" }, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 490,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Activate Supplier" }, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 491,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 489,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 478,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onOpenChange(false),
						className: "h-9 rounded-xl border border-slate-200 bg-white px-5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-2xs",
						children: "Close"
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 496,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 477,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 96,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 95,
		columnNumber: 5
	}, this);
}
var _jsxFileName$7 = "/app/applet/src/components/nashmia/suppliers/SuppliersEmptyState.tsx";
function SuppliersEmptyState({ isSearchEmpty, onResetFilters, onAddSupplier }) {
	if (isSearchEmpty) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-6 py-16 text-center shadow-2xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid size-14 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 shadow-2xs",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-7 stroke-[1.75]" }, void 0, false, {
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
				className: "mt-4 text-[19px] font-bold text-slate-900 tracking-tight",
				children: "No matching suppliers found"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 21,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1.5 max-w-md text-[13.5px] text-slate-500 leading-relaxed",
				children: "We couldn't find any pickup vendors or loading locations matching your search query or active filter selection."
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 24,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onResetFilters,
					className: "inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[13px] font-semibold text-slate-700 shadow-2xs transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-[0.99]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "size-3.5 text-slate-400" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 35,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Clear Filters & Reset" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 36,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 30,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onAddSupplier,
					className: "inline-flex h-10 items-center gap-2 rounded-xl bg-[#0FA3B1] hover:bg-[#078A99] px-5 text-[13px] font-semibold text-white shadow-[0_2px_10px_rgba(15,163,177,0.25)] transition-all hover:-translate-y-0.5 active:translate-y-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 43,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Register Supplier" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 44,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 38,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 29,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 16,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-6 py-20 text-center shadow-2xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid size-16 place-items-center rounded-2xl border border-[#C7E8E8] bg-[#E8F5F6] text-[#0FA3B1] shadow-2xs",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Warehouse, { className: "size-8 stroke-[1.75]" }, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 54,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 53,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "mt-5 text-[22px] font-bold text-slate-900 tracking-tight",
				children: "No registered suppliers yet"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 57,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1.5 max-w-md text-[13.5px] text-slate-500 leading-relaxed",
				children: "Register your first origin vendor to configure default factory load points, manage contact roles, and streamline container movement bookings."
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 60,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onAddSupplier,
					className: "inline-flex h-11 items-center gap-2 rounded-xl bg-[#0FA3B1] hover:bg-[#078A99] px-6 text-[13.5px] font-semibold text-white shadow-[0_2px_10px_rgba(15,163,177,0.25)] transition-all hover:-translate-y-0.5 active:translate-y-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 71,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Register First Supplier" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 72,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 66,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 65,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 52,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "/app/applet/src/components/nashmia/suppliers/SuppliersHeader.tsx";
function SuppliersHeader({ onOpenMobileMenu, onAddSupplier }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-start gap-3",
			children: [onOpenMobileMenu && /* @__PURE__ */ (void 0)("button", {
				type: "button",
				onClick: onOpenMobileMenu,
				"aria-label": "Toggle navigation menu",
				className: "mt-1 grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-2xs transition-all hover:bg-slate-50 lg:hidden",
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
				className: "space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1 rounded-md border border-[#C7E8E8] bg-[#E8F5F6] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0FA3B1]",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Warehouse, { className: "size-3" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 27,
								columnNumber: 15
							}, this), "Vendor Network"]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 26,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 25,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-[28px] sm:text-[32px] font-bold tracking-tight text-slate-900 leading-tight",
						children: "Suppliers & Pickup Points"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 31,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "max-w-2xl text-[13.5px] text-slate-500 font-normal",
						children: "Manage origin suppliers, certified factories, and primary cargo loading locations."
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 34,
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
			className: "flex items-center gap-3 shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onAddSupplier,
				className: "inline-flex h-11 items-center gap-2 rounded-xl bg-[#0FA3B1] hover:bg-[#078A99] px-5 text-sm font-semibold text-white shadow-[0_2px_10px_rgba(15,163,177,0.25)] transition-all hover:-translate-y-0.5 active:translate-y-0",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 47,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Register Supplier" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 48,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 42,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 41,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/app/applet/src/components/nashmia/suppliers/SuppliersSummaryStrip.tsx";
function SuppliersSummaryStrip({ totalCount = 28, activeCount = 25, loadPointsCount = 31, activeMovementsCount = 19 }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative w-full min-w-0 max-w-full",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -top-8 inset-x-0 mx-auto h-72 w-full max-w-full sm:max-w-4xl bg-gradient-to-r from-amber-400/20 via-orange-300/15 to-teal-400/15 blur-3xl opacity-65 -z-10" }, void 0, false, {
			fileName: _jsxFileName$5,
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
								fileName: _jsxFileName$5,
								lineNumber: 29,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 28,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Active"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 32,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Accounts"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 35,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 31,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 27,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: activeCount
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 43,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-end gap-1.5 h-6 pb-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-2 rounded-full bg-slate-900/90" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 48,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-3.5 rounded-full bg-slate-900/90" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 49,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-6 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 50,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 51,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-2.5 rounded-full bg-slate-900/80" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 52,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 47,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 42,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
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
							fileName: _jsxFileName$5,
							lineNumber: 71,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-11 sm:size-12 rounded-full border border-amber-200/30 bg-white/5 backdrop-blur-xs flex items-center justify-center text-amber-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "size-5 stroke-[1.8] text-amber-100" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 76,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 75,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-amber-100/95",
									children: "Active"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 79,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-amber-100/95",
									children: "Movements"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 82,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 78,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 74,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-baseline",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[28px] sm:text-[32px] font-bold text-white tracking-tight leading-none",
									children: activeMovementsCount
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 91,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-normal text-amber-200/80 ml-1",
									children: "mvts"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 94,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
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
											fileName: _jsxFileName$5,
											lineNumber: 100,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "22",
											cy: "5",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 106,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "42",
											cy: "18",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 107,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "62",
											cy: "8",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 108,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 99,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 98,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 89,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 60,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)] flex flex-col justify-between min-h-[145px] sm:min-h-[155px]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Warehouse, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 121,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 120,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Total"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 124,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Suppliers"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 127,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 123,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 119,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: totalCount
						}, void 0, false, {
							fileName: _jsxFileName$5,
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
									fileName: _jsxFileName$5,
									lineNumber: 141,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 140,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 139,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 134,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 117,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)] flex flex-col justify-between min-h-[145px] sm:min-h-[155px]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 159,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 158,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Pickup"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 162,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: "Points"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 165,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 161,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 157,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: loadPointsCount
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 173,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-rows-3 grid-flow-col gap-x-1.5 gap-y-1 pb-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 178,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 179,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 180,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 182,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-400" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 183,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 184,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 186,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 187,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 188,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 190,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-400" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 191,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 192,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 194,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 195,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 196,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 177,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 172,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 155,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 21,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/nashmia/suppliers/SuppliersMobileCards.tsx";
var AVATAR_GRADIENTS = [
	"from-sky-400 via-teal-400 to-cyan-500",
	"from-indigo-400 via-sky-400 to-teal-400",
	"from-amber-400 via-orange-400 to-rose-400",
	"from-teal-400 via-emerald-400 to-cyan-500",
	"from-blue-500 via-indigo-400 to-sky-400"
];
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
		NL: "🇳🇱",
		US: "🇺🇸",
		AE: "🇦🇪",
		CN: "🇨🇳"
	}[countryCode] || "🌐";
}
function SuppliersMobileCards({ suppliers, onSelectSupplier, onEditSupplier, onToggleArchive }) {
	const [bookmarkedMap, setBookmarkedMap] = (0, import_react.useState)({});
	const toggleBookmark = (supplier, e) => {
		e.stopPropagation();
		const nextState = !bookmarkedMap[supplier.id];
		setBookmarkedMap((prev) => ({
			...prev,
			[supplier.id]: nextState
		}));
		toast.success(nextState ? `Saved ${supplier.name} to favorites` : `Removed ${supplier.name} from saved`);
	};
	const handleShare = (supplier, e) => {
		e.stopPropagation();
		navigator.clipboard.writeText(window.location.href);
		toast.success(`Share link copied for ${supplier.name}`);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden",
		children: suppliers.map((supplier, index) => {
			const initials = getAvatarInitials$1(supplier.name);
			const isArchived = supplier.status === "Archived";
			const isBookmarked = !!bookmarkedMap[supplier.id];
			const flag = getCountryFlag$1(supplier.countryCode);
			const avatarGradient = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				onClick: () => onSelectSupplier(supplier),
				style: { background: "linear-gradient(180deg, #FFFFFF 0%, #F5FBFC 45%, #D4F0F6 100%)" },
				className: cn("group relative flex min-h-[350px] flex-col justify-between overflow-hidden rounded-[30px] border border-white/90 p-5.5 shadow-[0_16px_36px_-10px_rgba(15,163,177,0.16)] transition-all active:scale-[0.99]", isArchived && "opacity-75 grayscale-[20%]"),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: cn("size-15 rounded-full border-2 border-white bg-gradient-to-br p-0.5 shadow-[0_4px_14px_rgba(15,163,177,0.2)] flex items-center justify-center", avatarGradient),
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "size-full rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white font-bold text-[17px]",
									children: initials
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 117,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 111,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "absolute -bottom-1 -right-1 flex size-5.5 items-center justify-center rounded-full bg-white text-[11px] shadow-xs border border-slate-100",
								title: supplier.country,
								children: flag
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 121,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 110,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							onClick: (e) => e.stopPropagation(),
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: (e) => handleShare(supplier, e),
								className: "grid size-8 place-items-center rounded-full text-slate-400 hover:text-slate-800 hover:bg-white/80",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share2, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 135,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 130,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									"aria-label": `Actions for ${supplier.name}`,
									className: "grid size-8 place-items-center rounded-full text-slate-400 hover:bg-white/80 hover:text-slate-800",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EllipsisVertical, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 145,
										columnNumber: 25
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 140,
									columnNumber: 23
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 139,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
								align: "end",
								className: "w-48 rounded-[18px] border border-white/80 bg-white/95 p-1.5 shadow-xl backdrop-blur-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
										className: "px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400",
										children: supplier.name
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 152,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
										onClick: () => onSelectSupplier(supplier),
										className: "flex cursor-pointer items-center gap-2 rounded-[10px] px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 159,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 160,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 155,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
										onClick: () => onEditSupplier(supplier),
										className: "flex cursor-pointer items-center gap-2 rounded-[10px] px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-4 text-slate-500" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 166,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Edit Supplier" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 167,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 162,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: "/new-booking",
											search: { supplierId: supplier.id },
											className: "flex cursor-pointer items-center gap-2 rounded-[10px] px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 175,
												columnNumber: 27
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "New Booking" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 176,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 170,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 169,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 179,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
										onClick: () => onToggleArchive(supplier.id),
										className: "flex cursor-pointer items-center gap-2 rounded-[10px] px-2.5 py-2 text-[13px] text-slate-600 hover:bg-slate-100",
										children: supplier.status === "Active" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Archive, { className: "size-4 text-amber-600" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 186,
											columnNumber: 29
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Supplier" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 187,
											columnNumber: 29
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 185,
											columnNumber: 27
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArchiveRestore, { className: "size-4 text-emerald-600" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 191,
											columnNumber: 29
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Restore Supplier" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 192,
											columnNumber: 29
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 190,
											columnNumber: 27
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 180,
										columnNumber: 23
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 148,
								columnNumber: 21
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 138,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 129,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 109,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-[19px] font-bold text-slate-900 tracking-tight leading-snug",
								children: supplier.name
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 203,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[13px] font-medium text-slate-500 mt-0.5 truncate",
								children: supplier.companyName || supplier.subtitle || `${supplier.loadPointType} · ${supplier.city}`
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 206,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-2.5 flex flex-wrap items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "rounded-full bg-white/90 border border-slate-200/60 px-2.5 py-0.5 text-[10.5px] font-semibold text-slate-700 shadow-2xs",
										children: [
											supplier.countryCode,
											" · ",
											supplier.country
										]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 213,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "rounded-full bg-white/90 border border-slate-200/60 px-2.5 py-0.5 text-[10.5px] font-semibold text-slate-700 shadow-2xs",
										children: supplier.loadPointType
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 216,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "rounded-full bg-white/90 border border-slate-200/60 px-2 py-0.5 text-[10px] font-mono font-semibold text-slate-500 shadow-2xs",
										children: supplier.code
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 219,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 212,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 202,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-5 grid grid-cols-3 gap-2 border-t border-slate-200/50 pt-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex items-center gap-1 text-[14px] font-bold text-slate-900 leading-tight",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "size-3 fill-slate-900 text-slate-900" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 229,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "4.9" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 230,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 228,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11px] font-medium text-slate-400 mt-0.5",
									children: "Rating"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 232,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 227,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-bold text-slate-900 leading-tight",
									children: [supplier.activeContainers, " Active"]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 235,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11px] font-medium text-slate-400 mt-0.5",
									children: "Pipeline"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 238,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 234,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-bold text-slate-900 leading-tight",
									children: [supplier.totalContainersMoved, " Units"]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 241,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11px] font-medium text-slate-400 mt-0.5",
									children: "Total Vol"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 244,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 240,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 226,
						columnNumber: 15
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 108,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-5 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onSelectSupplier(supplier),
						className: "flex-1 rounded-full bg-white/95 text-slate-900 font-semibold text-[13px] py-2.5 px-4 shadow-2xs border border-white/90 text-center",
						children: "Get in touch"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 251,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: (e) => toggleBookmark(supplier, e),
						className: cn("size-10 rounded-full flex items-center justify-center shadow-2xs border border-white/90 shrink-0 transition-all", isBookmarked ? "bg-[#0FA3B1] text-white border-[#0FA3B1]" : "bg-white text-slate-800"),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bookmark, { className: cn("size-4 stroke-[2]", isBookmarked && "fill-white") }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 269,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 259,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 250,
					columnNumber: 13
				}, this)]
			}, supplier.id, true, {
				fileName: _jsxFileName$4,
				lineNumber: 96,
				columnNumber: 11
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 87,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/nashmia/suppliers/SuppliersTable.tsx";
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
		NL: "🇳🇱",
		US: "🇺🇸",
		AE: "🇦🇪",
		CN: "🇨🇳"
	}[countryCode] || "🌐";
}
function SuppliersTable({ suppliers, onSelectSupplier, onEditSupplier, onToggleArchive }) {
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SuppliersMobileCards, {
			suppliers,
			onSelectSupplier,
			onEditSupplier,
			onToggleArchive
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 85,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 84,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "hidden md:block overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
				className: "w-full text-left text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
					className: "border-b border-slate-200 bg-slate-50/75 text-[11px] font-bold uppercase tracking-wider text-slate-500",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-3.5 pl-6 pr-4",
							children: "Supplier Account"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 99,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5",
							children: "Country & City"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 100,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5",
							children: "Pickup Loading Point"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 101,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5",
							children: "Primary Contact"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 102,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5",
							children: "Email"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 103,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5",
							children: "Phone"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 104,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5 text-center",
							children: "Active Units"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 105,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-4 py-3.5 text-center",
							children: "Status"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 106,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-3.5 pl-4 pr-6 text-right",
							children: "Actions"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 107,
							columnNumber: 17
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 98,
					columnNumber: 15
				}, this) }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 97,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
					className: "divide-y divide-slate-100",
					children: suppliers.map((supplier) => {
						const initials = getAvatarInitials(supplier.name);
						const flag = getCountryFlag(supplier.countryCode);
						const isInactive = supplier.status === "Inactive" || supplier.status === "Archived";
						const isEmailCopied = copiedField === `Email-${supplier.email}`;
						const isPhoneCopied = copiedField === `Phone-${supplier.phone}`;
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
							onClick: () => onSelectSupplier(supplier),
							className: cn("group cursor-pointer transition-colors duration-150 hover:bg-slate-50/80", isInactive && "opacity-75 bg-slate-50/40"),
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
												fileName: _jsxFileName$3,
												lineNumber: 131,
												columnNumber: 27
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "absolute -bottom-1 -right-1 text-[10px] drop-shadow-2xs",
												title: supplier.country,
												children: flag
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 134,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 130,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "font-bold text-[13.5px] text-slate-900 group-hover:text-[#0FA3B1] transition-colors truncate",
													children: supplier.name
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 143,
													columnNumber: 29
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "rounded bg-slate-100 border border-slate-200 px-1.5 py-0.2 font-mono text-[10px] font-semibold text-slate-500",
													children: supplier.code
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 146,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 142,
												columnNumber: 27
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11.5px] text-slate-400 truncate mt-0.5",
												children: supplier.companyName || supplier.subtitle || "Pickup Vendor"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 150,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 141,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 129,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 128,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1.5 text-[13px] font-semibold text-slate-800",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: flag }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 160,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: supplier.country }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 161,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 159,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11px] text-slate-400 truncate mt-0.5",
										children: supplier.city
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 163,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 158,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-1.5 shadow-2xs",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-3.5 text-[#0FA3B1] shrink-0" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 169,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "font-bold text-slate-900 text-[12.5px] leading-tight",
											children: supplier.loadPoint
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 171,
											columnNumber: 27
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-[10.5px] text-slate-500 font-medium",
											children: [
												supplier.loadPointType,
												" · ",
												supplier.loadPointCity || supplier.city
											]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 174,
											columnNumber: 27
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 170,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 168,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 167,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[13px] font-semibold text-slate-900",
										children: supplier.contactPerson
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 183,
										columnNumber: 23
									}, this), supplier.contactRole && /* @__PURE__ */ (void 0)("p", {
										className: "text-[11px] text-slate-400 truncate mt-0.5",
										children: supplier.contactRole
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 187,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 182,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: (e) => copyToClipboard(supplier.email, "Email", e),
										title: "Click to copy email",
										className: "group/btn inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[12px] text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-3.5 text-slate-400 group-hover/btn:text-[#0FA3B1]" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 201,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "max-w-[140px] truncate",
												children: supplier.email
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 202,
												columnNumber: 25
											}, this),
											isEmailCopied ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3 text-emerald-600" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 204,
												columnNumber: 27
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "size-3 opacity-0 group-hover/btn:opacity-100 text-slate-400 transition-opacity" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 206,
												columnNumber: 27
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 195,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 194,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: (e) => copyToClipboard(supplier.phone, "Phone", e),
										title: "Click to copy phone",
										className: "group/btn inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-mono text-[12px] text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "size-3.5 text-slate-400 group-hover/btn:text-[#0FA3B1]" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 219,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "whitespace-nowrap",
												children: supplier.phone
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 220,
												columnNumber: 25
											}, this),
											isPhoneCopied ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3 text-emerald-600" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 222,
												columnNumber: 27
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "size-3 opacity-0 group-hover/btn:opacity-100 text-slate-400 transition-opacity" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 224,
												columnNumber: 27
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 213,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 212,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5 text-center",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold transition-colors", supplier.activeContainers > 0 ? "bg-slate-100 text-slate-900 border border-slate-200" : "text-slate-400"),
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: cn("size-3.5", supplier.activeContainers > 0 ? "text-[#0FA3B1]" : "text-slate-300") }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 239,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: supplier.activeContainers }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 245,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 231,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 230,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-4 py-3.5 text-center",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold border", supplier.status === "Active" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-slate-100 text-slate-600"),
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("size-1.5 rounded-full", supplier.status === "Active" ? "bg-emerald-500 animate-pulse" : "bg-slate-400") }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 259,
											columnNumber: 25
										}, this), supplier.status]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 251,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 250,
									columnNumber: 21
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
												fileName: _jsxFileName$3,
												lineNumber: 282,
												columnNumber: 29
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 278,
											columnNumber: 27
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 277,
										columnNumber: 25
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
										align: "end",
										className: "w-48 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
												className: "px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400",
												children: supplier.name
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 289,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => onSelectSupplier(supplier),
												className: "flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 296,
													columnNumber: 29
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 297,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 292,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => onEditSupplier(supplier),
												className: "flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5 text-slate-500" }, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 303,
													columnNumber: 29
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Edit Supplier" }, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 304,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 299,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
													to: "/new-booking",
													search: { supplierId: supplier.id },
													className: "flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5 text-emerald-600" }, void 0, false, {
														fileName: _jsxFileName$3,
														lineNumber: 312,
														columnNumber: 31
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "New Booking" }, void 0, false, {
														fileName: _jsxFileName$3,
														lineNumber: 313,
														columnNumber: 31
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 307,
													columnNumber: 29
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 306,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 316,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => onToggleArchive(supplier.id),
												className: "flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100",
												children: supplier.status === "Active" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Archive, { className: "size-3.5 text-amber-600" }, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 323,
													columnNumber: 33
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Supplier" }, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 324,
													columnNumber: 33
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 322,
													columnNumber: 31
												}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArchiveRestore, { className: "size-3.5 text-emerald-600" }, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 328,
													columnNumber: 33
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Restore Supplier" }, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 329,
													columnNumber: 33
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 327,
													columnNumber: 31
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 317,
												columnNumber: 27
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 285,
										columnNumber: 25
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 276,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 272,
									columnNumber: 21
								}, this)
							]
						}, supplier.id, true, {
							fileName: _jsxFileName$3,
							lineNumber: 119,
							columnNumber: 19
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 110,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 96,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 95,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 94,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 82,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/nashmia/suppliers/SuppliersToolbar.tsx";
function SuppliersToolbar({ searchQuery, onSearchChange, selectedCountry, onCountryChange, selectedStatus, onStatusChange, selectedLoadPoint, onLoadPointChange, sortBy, onSortChange, viewMode, onViewModeChange, onResetFilters }) {
	const searchInputRef = (0, import_react.useRef)(null);
	const hasActiveFilters = searchQuery !== "" || selectedCountry !== "all" || selectedStatus !== "all" || selectedLoadPoint !== "all" || sortBy !== "name-asc";
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
	const currentSortLabel = SUPPLIER_SORT_OPTIONS.find((s) => s.value === sortBy)?.label || "Sort";
	const quickFilters = [
		{
			label: "All Suppliers",
			active: selectedCountry === "all" && selectedStatus === "all" && selectedLoadPoint === "all",
			onClick: () => {
				onCountryChange("all");
				onStatusChange("all");
				onLoadPointChange("all");
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
			label: "Warehouses Only",
			active: selectedLoadPoint === "Warehouse",
			onClick: () => onLoadPointChange(selectedLoadPoint === "Warehouse" ? "all" : "Warehouse")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xs",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 128,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							ref: searchInputRef,
							type: "text",
							value: searchQuery,
							onChange: (e) => onSearchChange(e.target.value),
							placeholder: "Search by supplier name, code, contact person, city, or loading point...",
							className: "h-10 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-20 text-[13.5px] text-slate-900 placeholder:text-slate-400 transition-all focus:border-[#0FA3B1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0FA3B1]/15"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 129,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "absolute right-2.5 top-1/2 flex -translate-y-1/2 items-center gap-1.5",
							children: searchQuery ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => onSearchChange(""),
								"aria-label": "Clear search input",
								className: "rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 146,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 140,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", {
								className: "pointer-events-none hidden items-center gap-0.5 rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-400 shadow-2xs sm:inline-flex",
								children: "⌘ K"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 149,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 138,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 127,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: cn("inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-[13px] font-semibold transition-colors", selectedLoadPoint !== "all" ? "border-[#0FA3B1] bg-[#E8F5F6] text-[#0FA3B1]" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"),
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Warehouse, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 170,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "max-w-[130px] truncate",
										children: selectedLoadPoint === "all" ? "Load Point" : selectedLoadPoint
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 171,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 174,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 161,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 160,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
							align: "end",
							className: "w-56 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
								className: "px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400",
								children: "Filter by Loading Type"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 181,
								columnNumber: 17
							}, this), LOAD_POINT_TYPE_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onLoadPointChange(opt.value),
								className: "flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: opt.label }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 190,
									columnNumber: 21
								}, this), selectedLoadPoint === opt.value && /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 192,
									columnNumber: 23
								}, this)]
							}, opt.value, true, {
								fileName: _jsxFileName$2,
								lineNumber: 185,
								columnNumber: 19
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 177,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 159,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: cn("inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-[13px] font-semibold transition-colors", selectedCountry !== "all" ? "border-[#0FA3B1] bg-[#E8F5F6] text-[#0FA3B1]" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"),
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Earth, { className: "size-3.5 text-slate-500" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 211,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "max-w-[120px] truncate",
										children: selectedCountry === "all" ? "Country" : selectedCountry
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 212,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 215,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 202,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 201,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
							align: "end",
							className: "w-52 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
									className: "px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400",
									children: "Filter by Country"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 222,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onCountryChange("all"),
									className: "flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All Countries" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 230,
										columnNumber: 19
									}, this), selectedCountry === "all" && /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 231,
										columnNumber: 49
									}, this)]
								}, "all", true, {
									fileName: _jsxFileName$2,
									lineNumber: 225,
									columnNumber: 17
								}, this),
								SUPPLIER_COUNTRY_OPTIONS.filter((c) => c !== "All Countries").map((country) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onCountryChange(country),
									className: "flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: country }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 239,
										columnNumber: 21
									}, this), selectedCountry === country && /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 240,
										columnNumber: 53
									}, this)]
								}, country, true, {
									fileName: _jsxFileName$2,
									lineNumber: 234,
									columnNumber: 19
								}, this))
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 218,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 200,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: cn("inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-[13px] font-semibold transition-colors", selectedStatus !== "all" ? "border-[#0FA3B1] bg-[#E8F5F6] text-[#0FA3B1]" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"),
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Funnel, { className: "size-3.5 text-slate-500" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 258,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: selectedStatus === "all" ? "Status" : selectedStatus }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 259,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 260,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 249,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 248,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
							align: "end",
							className: "w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
								className: "px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400",
								children: "Account Status"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 267,
								columnNumber: 17
							}, this), [
								{
									label: "All Statuses",
									value: "all"
								},
								{
									label: "Active Only",
									value: "Active"
								},
								{
									label: "Inactive",
									value: "Inactive"
								},
								{
									label: "Archived",
									value: "Archived"
								}
							].map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onStatusChange(opt.value),
								className: "flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: opt.label }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 281,
									columnNumber: 21
								}, this), selectedStatus === opt.value && /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 282,
									columnNumber: 54
								}, this)]
							}, opt.value, true, {
								fileName: _jsxFileName$2,
								lineNumber: 276,
								columnNumber: 19
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 263,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 247,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpDown, { className: "size-3.5 text-slate-500" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 295,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "hidden sm:inline",
										children: currentSortLabel
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 296,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 297,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 291,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 290,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
							align: "end",
							className: "w-52 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
								className: "px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400",
								children: "Sort Directory"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 304,
								columnNumber: 17
							}, this), SUPPLIER_SORT_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onSortChange(opt.value),
								className: "flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: opt.label }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 313,
									columnNumber: 21
								}, this), sortBy === opt.value && /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 314,
									columnNumber: 46
								}, this)]
							}, opt.value, true, {
								fileName: _jsxFileName$2,
								lineNumber: 308,
								columnNumber: 19
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 300,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 289,
							columnNumber: 13
						}, this),
						hasActiveFilters && /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: onResetFilters,
							className: "inline-flex h-10 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 text-[13px] font-semibold text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors",
							title: "Reset all filters",
							children: [/* @__PURE__ */ (void 0)(RotateCcw, { className: "size-3.5 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 328,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "hidden md:inline",
								children: "Reset"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 329,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 322,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex h-10 items-center rounded-xl border border-slate-200 bg-slate-100/80 p-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => onViewModeChange("grid"),
								"aria-label": "Grid View",
								className: cn("flex size-9 items-center justify-center rounded-lg transition-all", viewMode === "grid" ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-400 hover:text-slate-700"),
								title: "Grid view",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutGrid, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 347,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 335,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => onViewModeChange("list"),
								"aria-label": "List View",
								className: cn("flex size-9 items-center justify-center rounded-lg transition-all", viewMode === "list" ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-400 hover:text-slate-700"),
								title: "Table list view",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 361,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 349,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 334,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 157,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 125,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 124,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap items-center gap-2 pt-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-[11.5px] font-bold uppercase tracking-wider text-slate-400 pr-1",
				children: "Quick Filters:"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 370,
				columnNumber: 9
			}, this), quickFilters.map((pill) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: pill.onClick,
				className: cn("inline-flex h-7 items-center rounded-lg border px-3 text-xs font-semibold transition-all", pill.active ? "border-[#0FA3B1] bg-[#0FA3B1] text-white shadow-2xs" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"),
				children: pill.label
			}, pill.label, false, {
				fileName: _jsxFileName$2,
				lineNumber: 374,
				columnNumber: 11
			}, this))]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 369,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 123,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/nashmia/suppliers/SuppliersDirectoryPage.tsx";
function SuppliersDirectoryPage({ onOpenMobileMenu }) {
	const { userId, isConfigured } = useAuth();
	const queryClient = useQueryClient();
	const { data: cachedSuppliers = [], isLoading: isQueryLoading, refetch: refetchSuppliers } = useCachedSuppliers(userId, { enabled: isConfigured });
	const { data: allBookings = [] } = useQuery({
		queryKey: ["dashboard-bookings", userId],
		queryFn: () => fetchBookingsFromSupabase(userId),
		enabled: true
	});
	const [suppliers, setSuppliers] = (0, import_react.useState)([]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedCountry, setSelectedCountry] = (0, import_react.useState)("all");
	const [selectedStatus, setSelectedStatus] = (0, import_react.useState)("all");
	const [selectedLoadPoint, setSelectedLoadPoint] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("name-asc");
	const [viewMode, setViewMode] = (0, import_react.useState)("grid");
	const [isAddModalOpen, setIsAddModalOpen] = (0, import_react.useState)(false);
	const [editingSupplier, setEditingSupplier] = (0, import_react.useState)(null);
	const [selectedSupplier, setSelectedSupplier] = (0, import_react.useState)(null);
	const [isDetailDrawerOpen, setIsDetailDrawerOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setSuppliers(cachedSuppliers || []);
	}, [cachedSuppliers]);
	const isLoading = isQueryLoading && suppliers.length === 0;
	useSupabaseRealtime("suppliers", (0, import_react.useCallback)(() => {
		invalidateCachedSuppliers(queryClient, userId);
	}, [queryClient, userId]), isConfigured);
	const filteredSuppliers = (0, import_react.useMemo)(() => {
		return suppliers.filter((supplier) => {
			if (searchQuery) {
				const q = searchQuery.toLowerCase();
				const matchName = supplier.name.toLowerCase().includes(q);
				const matchCode = supplier.code?.toLowerCase().includes(q);
				const matchContact = supplier.contactPerson.toLowerCase().includes(q);
				const matchCity = supplier.city.toLowerCase().includes(q);
				const matchLoadPoint = supplier.loadPoint.toLowerCase().includes(q);
				const matchEmail = supplier.email.toLowerCase().includes(q);
				if (!matchName && !matchCode && !matchContact && !matchCity && !matchLoadPoint && !matchEmail) return false;
			}
			if (selectedCountry !== "all" && supplier.country !== selectedCountry) return false;
			if (selectedStatus !== "all" && supplier.status !== selectedStatus) return false;
			if (selectedLoadPoint !== "all" && supplier.loadPointType !== selectedLoadPoint) return false;
			return true;
		}).sort((a, b) => {
			switch (sortBy) {
				case "name-asc": return a.name.localeCompare(b.name);
				case "name-desc": return b.name.localeCompare(a.name);
				case "containers-desc": return b.activeContainers - a.activeContainers;
				case "country": return a.country.localeCompare(b.country);
				default: return 0;
			}
		});
	}, [
		suppliers,
		searchQuery,
		selectedCountry,
		selectedStatus,
		selectedLoadPoint,
		sortBy
	]);
	const handleSaveSupplier = async (data, editId) => {
		if (editId) {
			setSuppliers((prev) => prev.map((s) => s.id === editId ? {
				...s,
				...data
			} : s));
			if (selectedSupplier?.id === editId) setSelectedSupplier((prev) => prev ? {
				...prev,
				...data
			} : null);
			toast.success("Supplier updated successfully");
			try {
				if (isConfigured) {
					await updateSupplierInSupabase(editId, data);
					await invalidateCachedSuppliers(queryClient, userId);
				}
			} catch (err) {
				toast.error("Failed to update supplier in Supabase", { description: err instanceof Error ? err.message : "Database error" });
				refetchSuppliers();
			}
		} else {
			const tempSupplier = {
				...data,
				id: `sup-${Date.now()}`,
				createdAt: "Just now"
			};
			setSuppliers((prev) => [tempSupplier, ...prev]);
			toast.success("New supplier registered successfully");
			try {
				const created = await insertSupplierToSupabase(userId || null, data);
				if (created) {
					setSuppliers((prev) => [created, ...prev.filter((s) => s.id !== tempSupplier.id && s.id !== created.id)]);
					await invalidateCachedSuppliers(queryClient, userId);
				}
			} catch (err) {
				console.warn("Supplier insert notice:", err);
			}
		}
	};
	const handleToggleArchive = async (supplierId) => {
		const target = suppliers.find((s) => s.id === supplierId);
		if (!target) return;
		const nextStatus = target.status === "Active" ? "Inactive" : "Active";
		setSuppliers((prev) => prev.map((s) => s.id === supplierId ? {
			...s,
			status: nextStatus
		} : s));
		if (selectedSupplier?.id === supplierId) setSelectedSupplier((prev) => prev ? {
			...prev,
			status: nextStatus
		} : null);
		try {
			if (isConfigured) {
				await updateSupplierInSupabase(supplierId, { status: nextStatus });
				await invalidateCachedSuppliers(queryClient, userId);
			}
			toast.info(nextStatus === "Inactive" ? `${target.name} archived` : `${target.name} activated`);
		} catch (err) {
			toast.error("Could not update supplier status", { description: err instanceof Error ? err.message : "Database error" });
			refetchSuppliers();
		}
	};
	const handleOpenAddModal = () => {
		setEditingSupplier(null);
		setIsAddModalOpen(true);
	};
	const handleOpenEditModal = (supplier) => {
		setEditingSupplier(supplier);
		setIsAddModalOpen(true);
	};
	const handleSelectSupplier = (supplier) => {
		setSelectedSupplier(supplier);
		setIsDetailDrawerOpen(true);
	};
	const handleResetFilters = () => {
		setSearchQuery("");
		setSelectedCountry("all");
		setSelectedStatus("all");
		setSelectedLoadPoint("all");
		setSortBy("name-asc");
	};
	const selectedSupplierMovements = (0, import_react.useMemo)(() => {
		if (!selectedSupplier) return [];
		const sId = (selectedSupplier.id || "").toLowerCase();
		const sName = (selectedSupplier.name || "").toLowerCase();
		return (allBookings || []).filter((b) => {
			const rowSuppId = (b.supplier_id || "").toLowerCase();
			const rowSuppName = (b.supplier_name || "").toLowerCase();
			return rowSuppId === sId || sId && rowSuppId && rowSuppId === sId || sName && rowSuppName === sName;
		}).map((b) => ({
			id: b.id,
			ref: b.booking_reference || b.movement_number || b.id,
			supplierId: selectedSupplier.id,
			supplierName: selectedSupplier.name,
			loadPoint: selectedSupplier.loadPoint || "Default Load Point",
			buyerName: b.buyer_name || b.customer_name || "Buyer",
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
			eta: b.eta || "—"
		}));
	}, [selectedSupplier, allBookings]);
	const activeCount = suppliers.filter((s) => s.status === "Active").length;
	const loadPointsCount = new Set(suppliers.map((s) => s.loadPoint)).size;
	const activeMovementsCount = suppliers.reduce((acc, s) => acc + (s.activeContainers || 0), 0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative z-10 w-full min-w-0 max-w-full space-y-6 text-slate-900 pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SuppliersHeader, {
				onOpenMobileMenu,
				onAddSupplier: handleOpenAddModal
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 283,
				columnNumber: 7
			}, this),
			isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectorySummaryStripSkeleton, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 287,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SuppliersSummaryStrip, {
				totalCount: suppliers.length || 28,
				activeCount: activeCount || 25,
				loadPointsCount: loadPointsCount || 31,
				activeMovementsCount: activeMovementsCount || 19
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 289,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SuppliersToolbar, {
				searchQuery,
				onSearchChange: setSearchQuery,
				selectedCountry,
				onCountryChange: setSelectedCountry,
				selectedStatus,
				onStatusChange: setSelectedStatus,
				selectedLoadPoint,
				onLoadPointChange: setSelectedLoadPoint,
				sortBy,
				onSortChange: setSortBy,
				viewMode,
				onViewModeChange: setViewMode,
				onResetFilters: handleResetFilters
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 298,
				columnNumber: 7
			}, this),
			isLoading ? viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectoryCardGridSkeleton, { count: 8 }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 317,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectoryTableSkeleton, { rows: 8 }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 319,
				columnNumber: 11
			}, this) : filteredSuppliers.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SuppliersEmptyState, {
				isSearchEmpty: searchQuery !== "" || selectedCountry !== "all" || selectedStatus !== "all" || selectedLoadPoint !== "all",
				onResetFilters: handleResetFilters,
				onAddSupplier: handleOpenAddModal
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 322,
				columnNumber: 9
			}, this) : viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SupplierCardGrid, {
				suppliers: filteredSuppliers,
				onSelectSupplier: handleSelectSupplier,
				onEditSupplier: handleOpenEditModal,
				onToggleArchive: handleToggleArchive,
				onAddSupplier: handleOpenAddModal
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 333,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SuppliersTable, {
				suppliers: filteredSuppliers,
				onSelectSupplier: handleSelectSupplier,
				onEditSupplier: handleOpenEditModal,
				onToggleArchive: handleToggleArchive
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 341,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddSupplierModal, {
				open: isAddModalOpen,
				onOpenChange: setIsAddModalOpen,
				onSaveSupplier: handleSaveSupplier,
				editSupplier: editingSupplier
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 350,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SupplierDetailDrawer, {
				open: isDetailDrawerOpen,
				onOpenChange: setIsDetailDrawerOpen,
				supplier: selectedSupplier,
				movements: selectedSupplierMovements,
				onEditSupplier: (s) => {
					setIsDetailDrawerOpen(false);
					handleOpenEditModal(s);
				},
				onToggleArchive: handleToggleArchive
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 358,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 281,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/suppliers.tsx?tsr-split=component";
function SuppliersRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, {
		bg: "bg-white",
		children: ({ onOpenMobileMenu }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SuppliersDirectoryPage, { onOpenMobileMenu }, void 0, false, {
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
export { SuppliersRoute as component };
