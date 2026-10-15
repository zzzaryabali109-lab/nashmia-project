import { o as __toESM } from "../_runtime.mjs";
import { et as extractMovementNumber } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { l as require_react_dom, u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { Bt as Ellipsis, Dt as Folder, N as Send, W as Plus, Yt as Clock, cn as Check, et as Minimize2, ft as LoaderCircle, ht as Link2, i as X, jt as FileText, lt as Mail, st as Maximize2, un as Calendar, v as Trash2 } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { A as sendEmailThroughBackend, N as useAuth, P as showPillToast, j as useGmail } from "./router-BJg2H47m.mjs";
import { a as useCachedForwarders, i as useCachedBuyers, o as useCachedSuppliers, s as useOperationalBookings } from "./entity-cache-C4kyVDy3.mjs";
import { a as useSaveDraft, n as EmailSendingProcessModal, o as useSendEmail, t as EMAILS_QUERY_KEY } from "./EmailSendingProcessModal-DxhN1d-h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ComposeEmailModal-BqLUMJ5t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var _jsxFileName = "/app/applet/src/components/nashmia/emails/ComposeEmailModal.tsx";
var AVATAR_BG_COLORS = [
	"from-amber-400 to-orange-500",
	"from-emerald-400 to-teal-600",
	"from-blue-400 to-indigo-600",
	"from-purple-400 to-pink-600",
	"from-rose-400 to-red-500",
	"from-cyan-400 to-blue-500"
];
function getInitials(name) {
	if (!name) return "U";
	const parts = name.trim().split(/\s+/);
	if (parts.length >= 2 && parts[0] && parts[1]) return (parts[0][0] + parts[1][0]).toUpperCase();
	return name.slice(0, 2).toUpperCase();
}
function getFileType(fileName) {
	const lower = fileName.toLowerCase();
	if (lower.endsWith(".pptx") || lower.endsWith(".ppt")) return "pptx";
	if (lower.endsWith(".docx") || lower.endsWith(".doc") || lower.includes("word")) return "docx";
	if (lower.endsWith(".xlsx") || lower.endsWith(".xls") || lower.endsWith(".csv")) return "xlsx";
	if (lower.endsWith(".pdf")) return "pdf";
	return "other";
}
function ComposeEmailModal({ isOpen, onClose, initialDraft, defaultBookingId, defaultRecipientEmail, defaultSubject }) {
	const { user, userId, profile } = useAuth();
	const sendMutation = useSendEmail();
	const saveDraftMutation = useSaveDraft();
	const { data: forwarders = [] } = useCachedForwarders(userId, { enabled: isOpen });
	const { data: buyers = [] } = useCachedBuyers(userId, { enabled: isOpen });
	const { data: suppliers = [] } = useCachedSuppliers(userId, { enabled: isOpen });
	const { data: bookings = [] } = useOperationalBookings(userId, { enabled: isOpen });
	const { googleEmail, displayName: gmailName, avatarUrl: gmailAvatar } = useGmail();
	const fromEmail = (0, import_react.useMemo)(() => {
		return googleEmail || user?.email || profile?.email || "operations@nashmia-logistics.com";
	}, [
		googleEmail,
		user?.email,
		profile?.email
	]);
	const senderDisplayName = (0, import_react.useMemo)(() => {
		return gmailName || profile?.full_name || profile?.name || user?.email?.split("@")[0] || "Operations Desk";
	}, [
		gmailName,
		profile,
		user?.email
	]);
	const senderInitials = (0, import_react.useMemo)(() => {
		return getInitials(senderDisplayName);
	}, [senderDisplayName]);
	const activeBooking = (0, import_react.useMemo)(() => {
		if (!defaultBookingId && !initialDraft?.bookingId) {
			if (bookings.length > 0) return bookings[0];
			return null;
		}
		const targetId = defaultBookingId || initialDraft?.bookingId;
		return bookings.find((b) => b.id === targetId || b.movementNumber === targetId) || bookings[0] || null;
	}, [
		defaultBookingId,
		initialDraft?.bookingId,
		bookings
	]);
	const [recipients, setRecipients] = (0, import_react.useState)(() => {
		if (initialDraft?.toEmail) return initialDraft.toEmail.split(/[,;]+/).map((e) => e.trim()).filter(Boolean).map((email, idx) => ({
			id: `draft-rec-${idx}`,
			name: initialDraft.toName && idx === 0 ? initialDraft.toName : email.split("@")[0],
			email,
			avatarBg: AVATAR_BG_COLORS[idx % AVATAR_BG_COLORS.length]
		}));
		if (defaultRecipientEmail) return [{
			id: "default-rec-1",
			name: defaultRecipientEmail.split("@")[0].replace(/[._-]/g, " "),
			email: defaultRecipientEmail,
			avatarBg: AVATAR_BG_COLORS[0]
		}];
		return [];
	});
	const [cc, setCc] = (0, import_react.useState)(initialDraft?.cc || "");
	const [bcc, setBcc] = (0, import_react.useState)(initialDraft?.bcc || "");
	const [showCcBcc, setShowCcBcc] = (0, import_react.useState)(Boolean(initialDraft?.cc || initialDraft?.bcc));
	const [isAddingRecipient, setIsAddingRecipient] = (0, import_react.useState)(false);
	const [recipientInput, setRecipientInput] = (0, import_react.useState)("");
	const [showContactDropdown, setShowContactDropdown] = (0, import_react.useState)(false);
	const [subject, setSubject] = (0, import_react.useState)(() => {
		if (initialDraft?.subject) return initialDraft.subject;
		if (defaultSubject) return defaultSubject;
		if (activeBooking) return `Freight Quotation Request: ${activeBooking.movementNumber || activeBooking.reference} | ${activeBooking.polCode || activeBooking.polName || "Origin"} → ${activeBooking.podCode || activeBooking.podName || "Destination"}`;
		return "Freight Quotation Request & Schedule Inquiry";
	});
	const [body, setBody] = (0, import_react.useState)(() => {
		if (initialDraft?.body) return initialDraft.body;
		if (activeBooking) return `Dear Forwarding Partner,\n\nPlease provide your best competitive ocean freight quotation for the following booking requirement:\n\n• Movement Number: ${activeBooking.movementNumber || activeBooking.reference}\n• Route: ${activeBooking.polName ? `${activeBooking.polName} (${activeBooking.polCode})` : activeBooking.polCode || "Port of Loading"} to ${activeBooking.podName ? `${activeBooking.podName} (${activeBooking.podCode})` : activeBooking.podCode || "Port of Discharge"}\n• Equipment: ${`${activeBooking.containerCount || 1}x ${activeBooking.containerSize || "40HC"} (${activeBooking.containerType || "Dry Standard / High Cube"})`}\n• Requested ETD: ${activeBooking.requestedEtd || "Prompt Sailing"}\n• Target Freight Rate: ${activeBooking.targetFreight ? `$${activeBooking.targetFreight.toLocaleString()} ${activeBooking.currency || "USD"}` : "Best Market Rate"}\n\nKindly share your earliest available vessel schedule, transit time, and detention/demurrage free days.\n\nBest regards,\n${senderDisplayName}\nNashmia Global Logistics`;
		return `Dear Forwarding Partner,\n\nPlease review our upcoming export shipment requirement and provide your most competitive ocean freight rates along with vessel schedule, transit duration, and container free days.\n\nBest regards,\n${senderDisplayName}\nNashmia Global Logistics`;
	});
	const [attachments, setAttachments] = (0, import_react.useState)(() => {
		if (initialDraft?.attachments && initialDraft.attachments.length > 0) return initialDraft.attachments.map((att, i) => ({
			id: `att-draft-${i}`,
			name: att.name,
			size: att.size || "1.2 MB",
			type: getFileType(att.name)
		}));
		const mov = activeBooking?.movementNumber || activeBooking?.reference || "Shipment";
		return [
			{
				id: "att-1",
				name: `${mov}_Specification.docx`,
				size: "1.2 MB",
				type: "docx"
			},
			{
				id: "att-2",
				name: `${mov}_Rate_Schedule.xlsx`,
				size: "340 KB",
				type: "xlsx"
			},
			{
				id: "att-3",
				name: `${mov}_Cargo_Manifest.pdf`,
				size: "2.4 MB",
				type: "pdf"
			}
		];
	});
	const [isMaximized, setIsMaximized] = (0, import_react.useState)(false);
	const [isScheduleOpen, setIsScheduleOpen] = (0, import_react.useState)(false);
	const [scheduleDate, setScheduleDate] = (0, import_react.useState)("");
	const [bookingId, setBookingId] = (0, import_react.useState)(initialDraft?.bookingId || defaultBookingId || "");
	const [emailType, setEmailType] = (0, import_react.useState)(initialDraft?.emailType || "BOOKING_REQUEST");
	const queryClient = useQueryClient();
	const [isProcessModalOpen, setIsProcessModalOpen] = (0, import_react.useState)(false);
	const [processItems, setProcessItems] = (0, import_react.useState)([]);
	const [movementRef, setMovementRef] = (0, import_react.useState)("NASH-BK-2026-7023");
	const fileInputRef = (0, import_react.useRef)(null);
	const allContacts = (0, import_react.useMemo)(() => {
		const list = [];
		forwarders.forEach((f, i) => {
			if (f.email) list.push({
				id: f.id || `fwd-${i}`,
				name: f.name,
				email: f.email,
				avatarBg: AVATAR_BG_COLORS[i % AVATAR_BG_COLORS.length]
			});
		});
		buyers.forEach((b, i) => {
			if (b.email) list.push({
				id: b.id || `buyer-${i}`,
				name: b.name,
				email: b.email,
				avatarBg: AVATAR_BG_COLORS[(i + 2) % AVATAR_BG_COLORS.length]
			});
		});
		suppliers.forEach((s, i) => {
			if (s.email) list.push({
				id: s.id || `sup-${i}`,
				name: s.name,
				email: s.email,
				avatarBg: AVATAR_BG_COLORS[(i + 4) % AVATAR_BG_COLORS.length]
			});
		});
		return list;
	}, [
		forwarders,
		buyers,
		suppliers
	]);
	(0, import_react.useEffect)(() => {
		if (recipients.length === 0 && defaultRecipientEmail) setRecipients([{
			id: "default-rec-1",
			name: defaultRecipientEmail.split("@")[0].replace(/[._-]/g, " "),
			email: defaultRecipientEmail,
			avatarBg: AVATAR_BG_COLORS[0]
		}]);
	}, [defaultRecipientEmail, recipients.length]);
	const handleAddRecipient = (contact) => {
		if (!recipients.some((r) => r.email.toLowerCase() === contact.email.toLowerCase())) setRecipients((prev) => [...prev, contact]);
		setRecipientInput("");
		setIsAddingRecipient(false);
		setShowContactDropdown(false);
	};
	const handleCreateCustomRecipient = () => {
		if (!recipientInput.trim()) return;
		const clean = recipientInput.trim();
		const isEmail = clean.includes("@");
		const newRec = {
			id: `custom-${Date.now()}`,
			name: isEmail ? clean.split("@")[0].replace(/[._-]/g, " ") : clean,
			email: isEmail ? clean : `${clean.toLowerCase().replace(/\s+/g, "")}@forwarder.com`,
			avatarBg: AVATAR_BG_COLORS[recipients.length % AVATAR_BG_COLORS.length]
		};
		setRecipients((prev) => [...prev, newRec]);
		setRecipientInput("");
		setIsAddingRecipient(false);
		setShowContactDropdown(false);
	};
	const handleRemoveRecipient = (id) => {
		setRecipients((prev) => prev.filter((r) => r.id !== id));
	};
	const handleFileUpload = (e) => {
		const files = e.target.files;
		if (!files || files.length === 0) return;
		const newAttachments = Array.from(files).map((f, i) => {
			const sizeMb = (f.size / 1048576).toFixed(1);
			const sizeKb = Math.round(f.size / 1024);
			return {
				id: `uploaded-${Date.now()}-${i}`,
				name: f.name,
				size: parseFloat(sizeMb) >= 1 ? `${sizeMb} MB` : `${sizeKb} KB`,
				type: getFileType(f.name)
			};
		});
		setAttachments((prev) => [...prev, ...newAttachments]);
		showPillToast.success(`Attached ${files.length} file${files.length > 1 ? "s" : ""}`, "File Attached");
	};
	const handleRemoveAttachment = (id) => {
		setAttachments((prev) => prev.filter((a) => a.id !== id));
	};
	const handleSend = async () => {
		if (recipients.length === 0) {
			showPillToast.error("Please add at least one recipient email.", "Recipient Required");
			return;
		}
		let movementReference = "NASH-BK-2026-7023";
		if (activeBooking) movementReference = activeBooking.movementNumber || activeBooking.bookingReference || activeBooking.reference || "NASH-BK-2026-7023";
		else {
			const extracted = extractMovementNumber(subject) || extractMovementNumber(body);
			if (extracted) movementReference = extracted;
		}
		setMovementRef(movementReference);
		const targets = recipients.map((r, idx) => ({
			id: r.id.startsWith("custom-") || r.id.startsWith("draft-") ? `target-${idx}-${Date.now()}` : r.id,
			name: r.name,
			email: r.email,
			contactName: r.name,
			status: "Waiting"
		}));
		setProcessItems(targets);
		setIsProcessModalOpen(true);
	};
	const handleSendSingleForwarder = async (item) => {
		try {
			const singleValues = {
				fromEmail,
				toEmail: item.email,
				toName: item.contactName || item.name,
				cc: cc || void 0,
				bcc: bcc || void 0,
				subject: subject || "Freight Quotation Request",
				body,
				bookingId: activeBooking?.id || bookingId || null,
				emailType,
				attachments: attachments.map((a) => ({
					name: a.name,
					size: a.size
				})),
				movementNumber: movementRef,
				forwarderId: item.id.startsWith("target-") ? void 0 : item.id
			};
			const result = await sendEmailThroughBackend(userId, singleValues);
			queryClient.invalidateQueries({ queryKey: EMAILS_QUERY_KEY });
			queryClient.invalidateQueries({ queryKey: ["dashboard-data"] });
			queryClient.invalidateQueries({ queryKey: ["dashboard-bookings"] });
			queryClient.invalidateQueries({ queryKey: ["bookings"] });
			return {
				success: result.success,
				gmailMessageId: result.gmailMessageId,
				gmailThreadId: result.gmailThreadId,
				errorMessage: result.errorMessage
			};
		} catch (err) {
			return {
				success: false,
				errorMessage: err instanceof Error ? err.message : "Failed to dispatch email."
			};
		}
	};
	const handleSaveDraft = async () => {
		const values = {
			fromEmail,
			toEmail: recipients.map((r) => r.email).join(", "),
			toName: recipients[0]?.name || "",
			cc: cc || void 0,
			bcc: bcc || void 0,
			subject: subject || "Draft: (No Subject)",
			body,
			bookingId: activeBooking?.id || bookingId || null,
			emailType,
			attachments: attachments.map((a) => ({
				name: a.name,
				size: a.size
			}))
		};
		await saveDraftMutation.mutateAsync(values);
		showPillToast.success("Email draft saved.", "Draft Saved");
		onClose();
	};
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && isOpen && !sendMutation.isPending) {
				e.preventDefault();
				handleSend();
			}
			if (e.key === "Escape" && isOpen && !isProcessModalOpen) onClose();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		isOpen,
		isProcessModalOpen,
		sendMutation.isPending
	]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const originalStyle = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = originalStyle;
		};
	}, [isOpen]);
	if (!isOpen) return null;
	if (typeof document === "undefined") return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Compose Email",
		className: "fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-5 overflow-y-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-all duration-200 ease-out animate-in fade-in",
				onClick: onClose,
				"aria-hidden": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 485,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				onClick: (e) => e.stopPropagation(),
				className: cn("relative z-10 flex flex-col bg-white text-slate-900 shadow-2xl transition-all duration-200 antialiased outline-none", isMaximized ? "w-full h-full max-w-none max-h-none rounded-none p-5 sm:p-8" : "w-full sm:max-w-[620px] max-h-[92vh] rounded-t-[28px] rounded-b-none sm:rounded-[28px] border-t sm:border border-slate-200/90 p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:p-7 animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden"),
				children: [
					!isMaximized && /* @__PURE__ */ (void 0)("div", {
						"data-swipe-handle": "true",
						className: "mx-auto -mt-2 mb-2 flex h-6 w-full max-w-[140px] cursor-grab touch-none items-center justify-center sm:hidden select-none shrink-0",
						"aria-label": "Drag down to dismiss",
						children: /* @__PURE__ */ (void 0)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 508,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 503,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between pb-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 text-slate-800 font-semibold text-[15px]",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-4.5 text-slate-700 stroke-[1.8]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 515,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Compose email" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 516,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 514,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 text-slate-400",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setIsMaximized(!isMaximized),
								className: "hover:text-slate-700 transition-colors p-1 cursor-pointer",
								title: isMaximized ? "Restore Size" : "Expand",
								children: isMaximized ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minimize2, { className: "size-4 stroke-[1.8]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 527,
									columnNumber: 17
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize2, { className: "size-4 stroke-[1.8]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 529,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 520,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: onClose,
								className: "hover:text-slate-700 transition-colors p-1 cursor-pointer",
								title: "Close",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4 stroke-[1.8]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 538,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 532,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 519,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 513,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3 py-1.5 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-slate-400 font-normal w-10 shrink-0",
							children: "From"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 545,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "size-6.5 rounded-full bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 text-white font-bold text-[11px] grid place-items-center shrink-0 shadow-2xs overflow-hidden",
									children: gmailAvatar ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: gmailAvatar,
										alt: senderDisplayName,
										className: "size-full object-cover"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 549,
										columnNumber: 17
									}, this) : senderInitials
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 547,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[13.5px] font-semibold text-slate-900 truncate",
									children: senderDisplayName
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 554,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "inline-grid place-items-center size-3.5 rounded-full bg-[#0084FF] text-white shrink-0 shadow-2xs",
									title: "Verified Sender",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-2.5 stroke-[3]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 562,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 558,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 546,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 544,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-start gap-3 py-2 text-xs relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-400 font-normal w-10 shrink-0 mt-1.5",
								children: "To"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 569,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex-1 flex flex-wrap items-center gap-1.5 min-w-0",
								children: [recipients.map((rec) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "inline-flex items-center gap-1.5 bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200/60 rounded-full pl-1 pr-2.5 py-0.5 text-[12px] text-slate-800 font-medium transition-colors group",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: cn("size-4.5 rounded-full text-white text-[9px] font-bold grid place-items-center bg-gradient-to-tr", rec.avatarBg || "from-amber-400 to-orange-500"),
											children: getInitials(rec.name)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 577,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "truncate max-w-[120px]",
											children: rec.name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 585,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: () => handleRemoveRecipient(rec.id),
											className: "text-slate-400 hover:text-slate-700 p-0.5 rounded-full cursor-pointer transition-colors",
											title: "Remove",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 592,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 586,
											columnNumber: 17
										}, this)
									]
								}, rec.id, true, {
									fileName: _jsxFileName,
									lineNumber: 573,
									columnNumber: 15
								}, this)), isAddingRecipient ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "inline-flex items-center gap-1 relative min-w-[150px]",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "text",
										autoFocus: true,
										value: recipientInput,
										onChange: (e) => {
											setRecipientInput(e.target.value);
											setShowContactDropdown(true);
										},
										onKeyDown: (e) => {
											if (e.key === "Enter") {
												e.preventDefault();
												handleCreateCustomRecipient();
											} else if (e.key === "Escape") {
												setIsAddingRecipient(false);
												setShowContactDropdown(false);
											}
										},
										placeholder: "Type name or email...",
										className: "text-[12px] bg-white border border-[#0FA3B1] rounded-full px-2.5 py-0.5 focus:outline-none w-full"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 600,
										columnNumber: 17
									}, this), showContactDropdown && /* @__PURE__ */ (void 0)("div", {
										className: "absolute top-full left-0 mt-1 w-64 max-h-48 overflow-y-auto bg-white rounded-xl border border-slate-200 shadow-xl z-30 p-1 space-y-0.5",
										children: [allContacts.filter((c) => c.name.toLowerCase().includes(recipientInput.toLowerCase()) || c.email.toLowerCase().includes(recipientInput.toLowerCase())).slice(0, 5).map((c) => /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => handleAddRecipient(c),
											className: "w-full text-left px-2.5 py-1.5 hover:bg-slate-100 rounded-lg flex items-center gap-2 text-xs cursor-pointer transition",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: cn("size-5 rounded-full text-white text-[9px] font-bold grid place-items-center bg-gradient-to-tr shrink-0", c.avatarBg),
												children: getInitials(c.name)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 638,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "font-semibold text-slate-900 truncate text-[12px]",
													children: c.name
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 647,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "text-[10.5px] text-slate-400 truncate",
													children: c.email
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 650,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 646,
												columnNumber: 27
											}, this)]
										}, c.id, true, {
											fileName: _jsxFileName,
											lineNumber: 632,
											columnNumber: 25
										}, this)), recipientInput.trim() && /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: handleCreateCustomRecipient,
											className: "w-full text-left px-2.5 py-1.5 bg-[#0FA3B1]/10 text-[#0FA3B1] hover:bg-[#0FA3B1]/20 rounded-lg text-xs font-semibold cursor-pointer",
											children: [
												"Add \"",
												recipientInput,
												"\""
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 655,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 623,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 599,
									columnNumber: 15
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => {
										setIsAddingRecipient(true);
										setShowContactDropdown(true);
									},
									className: "inline-flex items-center gap-1 text-[11.5px] text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 border border-dashed border-slate-200 rounded-full px-2 py-0.5 transition-colors cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 675,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Add" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 676,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 667,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 571,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setShowCcBcc(!showCcBcc),
								className: "text-[12px] text-slate-400 hover:text-slate-600 font-medium cursor-pointer ml-auto shrink-0 select-none",
								children: showCcBcc ? "Hide CC / BCC" : "Add CC / BCC"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 682,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 568,
						columnNumber: 9
					}, this),
					showCcBcc && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-2 py-1 text-xs animate-in fade-in duration-150",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-slate-400 font-normal w-10 shrink-0",
								children: "CC"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 695,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("input", {
								type: "text",
								value: cc,
								onChange: (e) => setCc(e.target.value),
								placeholder: "CC recipients (comma separated)",
								className: "flex-1 text-[12px] text-slate-800 bg-slate-50/50 border border-slate-200 rounded-lg px-2.5 py-1 focus:outline-none focus:border-slate-400"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 696,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 694,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-slate-400 font-normal w-10 shrink-0",
								children: "BCC"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 705,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("input", {
								type: "text",
								value: bcc,
								onChange: (e) => setBcc(e.target.value),
								placeholder: "BCC recipients (comma separated)",
								className: "flex-1 text-[12px] text-slate-800 bg-slate-50/50 border border-slate-200 rounded-lg px-2.5 py-1 focus:outline-none focus:border-slate-400"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 706,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 704,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 693,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-slate-100 my-3" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 718,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex-1 overflow-y-auto space-y-2 min-h-[200px] max-h-[380px] pr-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							type: "text",
							value: subject,
							onChange: (e) => setSubject(e.target.value),
							placeholder: "Freight Quotation Request",
							className: "w-full text-[16.5px] font-bold text-slate-950 placeholder:text-slate-400 focus:outline-none bg-transparent tracking-tight py-0.5 leading-snug"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 723,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							rows: 7,
							value: body,
							onChange: (e) => setBody(e.target.value),
							placeholder: "Write your email message...",
							className: "w-full text-[13.5px] text-slate-700 leading-relaxed placeholder:text-slate-400 focus:outline-none resize-none bg-transparent py-1.5 min-h-[140px]"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 732,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 721,
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
									fileName: _jsxFileName,
									lineNumber: 744,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11px] text-slate-500 flex items-center gap-1",
									children: ["Verified Documents", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "inline-grid place-items-center size-3.5 rounded-full bg-[#10B981] text-white",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-2.5 stroke-[3]" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 748,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 747,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 745,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 743,
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
												fileName: _jsxFileName,
												lineNumber: 764,
												columnNumber: 23
											}, this) : att.type === "docx" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "size-7 rounded-lg bg-[#2B579A] text-white text-[11px] font-bold grid place-items-center shrink-0 shadow-2xs",
												children: "W"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 768,
												columnNumber: 23
											}, this) : att.type === "xlsx" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "size-7 rounded-lg bg-[#217346] text-white text-[11px] font-bold grid place-items-center shrink-0 shadow-2xs",
												children: "X"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 772,
												columnNumber: 23
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "size-7 rounded-lg bg-[#E53935] text-white text-[10px] font-bold grid place-items-center shrink-0 shadow-2xs",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "size-3.5 text-white" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 777,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 776,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "text-[12px] font-semibold text-slate-900 truncate leading-tight",
													children: att.name
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 782,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "text-[10.5px] text-slate-400 leading-tight mt-0.5",
													children: att.size
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 785,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 781,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 761,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: () => handleRemoveAttachment(att.id),
											className: "opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-700 transition-opacity p-1 cursor-pointer",
											title: "Remove file",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 797,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 791,
											columnNumber: 19
										}, this)]
									}, att.id, true, {
										fileName: _jsxFileName,
										lineNumber: 757,
										columnNumber: 17
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 754,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "file",
								multiple: true,
								ref: fileInputRef,
								onChange: handleFileUpload,
								className: "hidden"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 805,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 742,
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
										setBody((prev) => prev ? `${prev}\n\n[AI Optimized]: Freight inquiry terms and documentation verified.` : prev);
										showPillToast.success("Email content polished with AI assistance.", "AI Polish");
									},
									className: "hover:text-slate-700 transition-colors p-1 cursor-pointer",
									title: "More options & AI Polish",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ellipsis, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 832,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 818,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => fileInputRef.current?.click(),
									className: "hover:text-slate-700 transition-colors p-1 cursor-pointer",
									title: "Attach File / Link",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 841,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 835,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: handleSaveDraft,
									className: "hover:text-slate-700 transition-colors p-1 cursor-pointer",
									title: "Save as Draft / Folder",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Folder, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 850,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 844,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => {
										setSubject("");
										setBody("");
										setRecipients([]);
										showPillToast.info("Cleared email draft.", "Draft Cleared");
									},
									className: "hover:text-rose-500 transition-colors p-1 cursor-pointer",
									title: "Discard / Trash",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 864,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 853,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 817,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2.5 relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setIsScheduleOpen(!isScheduleOpen),
									className: "rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold px-3.5 py-2 flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-3.5 text-slate-500 stroke-[1.8]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 876,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Schedule" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 877,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 871,
									columnNumber: 13
								}, this),
								isScheduleOpen && /* @__PURE__ */ (void 0)("div", {
									className: "absolute bottom-full right-24 mb-2 w-64 bg-white border border-slate-200 rounded-xl p-3 shadow-xl z-30 space-y-2 text-xs animate-in fade-in",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "font-semibold text-slate-900 flex items-center gap-1",
											children: [/* @__PURE__ */ (void 0)(Clock, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 884,
												columnNumber: 19
											}, this), "Schedule Delivery"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 883,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("input", {
											type: "datetime-local",
											value: scheduleDate,
											onChange: (e) => setScheduleDate(e.target.value),
											className: "w-full text-xs border border-slate-200 rounded-lg p-1.5 focus:outline-none"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 887,
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
												fileName: _jsxFileName,
												lineNumber: 894,
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
												fileName: _jsxFileName,
												lineNumber: 901,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 893,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 882,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: handleSend,
									disabled: sendMutation.isPending || isProcessModalOpen,
									className: cn("bg-[#0F172A] hover:bg-black text-white text-xs font-bold px-4.5 py-2 rounded-xl flex items-center gap-2 cursor-pointer shadow-sm active:scale-95 transition-all", (sendMutation.isPending || isProcessModalOpen) && "opacity-80 cursor-wait"),
									children: sendMutation.isPending || isProcessModalOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-3.5 animate-spin" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 931,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Sending..." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 932,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 930,
										columnNumber: 17
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Send" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 936,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-3.5 text-white stroke-[2.2]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 937,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 935,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 920,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 869,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 815,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 492,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailSendingProcessModal, {
				isOpen: isProcessModalOpen,
				onClose: () => {
					setIsProcessModalOpen(false);
					onClose();
				},
				items: processItems,
				movementReference: movementRef,
				onSendItem: handleSendSingleForwarder
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 946,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 478,
		columnNumber: 5
	}, this), document.body);
}
//#endregion
export { ComposeEmailModal as t };
