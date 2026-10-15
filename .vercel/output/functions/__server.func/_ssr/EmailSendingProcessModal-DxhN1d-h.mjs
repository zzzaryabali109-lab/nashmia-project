import { o as __toESM } from "../_runtime.mjs";
import { n as supabase, t as isSupabaseConfigured } from "./supabase-lbao-IEt.mjs";
import { l as require_react_dom, u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { B as RefreshCw, cn as Check, i as X, lt as Mail } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { A as sendEmailThroughBackend, D as fetchEmailsFromSupabase, E as calculateFolderCounts, N as useAuth, O as retrySendEmailInSupabase, P as showPillToast, T as calculateEmailStatistics, k as saveDraftEmailInSupabase } from "./router-BJg2H47m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EmailSendingProcessModal-DxhN1d-h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var EMAILS_QUERY_KEY = ["emails"];
/**
* Real-time Supabase hook for Emails page
*/
function useEmails(selectedFolder = "all") {
	const { userId } = useAuth();
	const queryClient = useQueryClient();
	const query = useQuery({
		queryKey: [...EMAILS_QUERY_KEY, userId],
		queryFn: () => fetchEmailsFromSupabase(userId),
		staleTime: 1e3,
		refetchInterval: 3e3,
		refetchIntervalInBackground: false,
		refetchOnWindowFocus: "always",
		refetchOnMount: "always"
	});
	(0, import_react.useEffect)(() => {
		const handleUpdate = () => {
			queryClient.invalidateQueries({ queryKey: EMAILS_QUERY_KEY });
		};
		window.addEventListener("nashmia_booking_confirmed", handleUpdate);
		window.addEventListener("nashmia_booking_status_updated", handleUpdate);
		window.addEventListener("supabase_realtime_bookings_change", handleUpdate);
		window.addEventListener("nashmia_bookings_updated", handleUpdate);
		window.addEventListener("nashmia_emails_updated", handleUpdate);
		window.addEventListener("nashmia:email-sent", handleUpdate);
		window.addEventListener("storage", handleUpdate);
		return () => {
			window.removeEventListener("nashmia_booking_confirmed", handleUpdate);
			window.removeEventListener("nashmia_booking_status_updated", handleUpdate);
			window.removeEventListener("supabase_realtime_bookings_change", handleUpdate);
			window.removeEventListener("nashmia_bookings_updated", handleUpdate);
			window.removeEventListener("nashmia_emails_updated", handleUpdate);
			window.removeEventListener("nashmia:email-sent", handleUpdate);
			window.removeEventListener("storage", handleUpdate);
		};
	}, [queryClient]);
	(0, import_react.useEffect)(() => {
		if (!isSupabaseConfigured) return;
		const channel = supabase.channel("realtime-email-messages").on("postgres_changes", {
			event: "*",
			schema: "public",
			table: "email_messages"
		}, () => {
			queryClient.invalidateQueries({ queryKey: EMAILS_QUERY_KEY });
		}).on("postgres_changes", {
			event: "*",
			schema: "public",
			table: "email_threads"
		}, () => {
			queryClient.invalidateQueries({ queryKey: EMAILS_QUERY_KEY });
		}).subscribe();
		return () => {
			supabase.removeChannel(channel);
		};
	}, [queryClient]);
	const allEmails = query.data || [];
	const filteredEmails = (0, import_react.useMemo)(() => {
		return allEmails.filter((email) => {
			switch (selectedFolder) {
				case "inbox": return email.direction === "inbound";
				case "sent": return email.status === "SENT";
				case "drafts": return email.status === "DRAFT";
				case "pending": return email.status === "PENDING" || email.status === "SENDING";
				case "failed": return email.status === "FAILED" || email.status === "CANCELLED";
				case "booking": return email.emailType.startsWith("BOOKING_") || Boolean(email.bookingId);
				case "system": return email.emailType === "SYSTEM";
				default: return true;
			}
		});
	}, [allEmails, selectedFolder]);
	const statistics = (0, import_react.useMemo)(() => calculateEmailStatistics(allEmails), [allEmails]);
	const folderCounts = (0, import_react.useMemo)(() => calculateFolderCounts(allEmails), [allEmails]);
	return {
		...query,
		allEmails,
		emails: filteredEmails,
		statistics,
		folderCounts
	};
}
/**
* Mutation for sending an email
*/
function useSendEmail() {
	const queryClient = useQueryClient();
	const { userId } = useAuth();
	return useMutation({
		mutationFn: (values) => sendEmailThroughBackend(userId, values),
		onSuccess: (result, values) => {
			queryClient.invalidateQueries({ queryKey: EMAILS_QUERY_KEY });
			if (result.success) {
				if (typeof window !== "undefined") {
					const match = `${values.subject} ${values.body}`.match(/\b(BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|GD-[A-Z0-9-]+)\b/i);
					const bookingRef = match ? match[0].toUpperCase() : void 0;
					window.dispatchEvent(new CustomEvent("nashmia:email-sent", { detail: {
						id: result.emailId || result.gmailMessageId,
						toEmail: values.toEmail,
						toName: values.toName,
						subject: values.subject,
						snippet: values.body ? values.body.slice(0, 100) : values.subject,
						bookingReference: bookingRef
					} }));
				}
			} else if (result.errorMessage?.includes("Quota") || result.errorMessage?.includes("rateLimit") || result.errorMessage?.includes("Units per minute")) showPillToast.info("Gmail per-minute user limit reached on Google Cloud. Your message is recorded and queued.", "Email Queued (Quota Cooldown)");
			else showPillToast.error(result.errorMessage || "Unable to complete Gmail API delivery.", "Email Transmission Failed");
		},
		onError: (err) => {
			const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
			if (msg.includes("Quota") || msg.includes("rateLimit") || msg.includes("Units per minute")) showPillToast.info("Google Cloud per-minute user limit reached. Please wait ~60s before sending again.", "Google API Quota Window Active");
			else showPillToast.error(msg, "Failed to Send Email");
		}
	});
}
/**
* Mutation for saving draft
*/
function useSaveDraft() {
	const queryClient = useQueryClient();
	const { userId } = useAuth();
	return useMutation({
		mutationFn: (values) => saveDraftEmailInSupabase(userId, values),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: EMAILS_QUERY_KEY });
			showPillToast.build("Your message has been safely saved to drafts.", "Draft Saved");
		},
		onError: (err) => {
			const msg = err instanceof Error ? err.message : "Could not save draft to database.";
			showPillToast.error(msg, "Failed to Save Draft");
		}
	});
}
/**
* Mutation for retrying failed email
*/
function useRetryEmail() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (email) => retrySendEmailInSupabase(email),
		onSuccess: (res) => {
			queryClient.invalidateQueries({ queryKey: EMAILS_QUERY_KEY });
			if (res.success) showPillToast.build("Transmission completed via backend.", "Email Retried & Sent Successfully");
			else showPillToast.error(res.errorMessage || "Could not send email.", "Retry Attempt Failed");
		},
		onError: (err) => {
			const msg = err instanceof Error ? err.message : "Failed to contact email dispatch service.";
			showPillToast.error(msg, "Retry Failed");
		}
	});
}
var _jsxFileName = "/app/applet/src/components/nashmia/emails/EmailSendingProcessModal.tsx";
function EmailSendingProcessModal({ isOpen, onClose, items: initialItems, movementReference, onSendItem, onFinished, onRetryFailed: externalRetryFailed, isControlled = false, isCompletedControlled }) {
	const [itemList, setItemList] = (0, import_react.useState)([]);
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [isCompleted, setIsCompleted] = (0, import_react.useState)(false);
	const [activeSendingId, setActiveSendingId] = (0, import_react.useState)(null);
	const isRunningRef = (0, import_react.useRef)(false);
	const onSendItemRef = (0, import_react.useRef)(onSendItem);
	const onFinishedRef = (0, import_react.useRef)(onFinished);
	(0, import_react.useEffect)(() => {
		onSendItemRef.current = onSendItem;
		onFinishedRef.current = onFinished;
	});
	(0, import_react.useEffect)(() => {
		if (isControlled) {
			setItemList(initialItems);
			if (isCompletedControlled !== void 0) setIsCompleted(isCompletedControlled);
			else {
				const allDone = initialItems.length > 0 && initialItems.every((it) => it.status === "Sent" || it.status === "Failed");
				setIsCompleted(allDone);
			}
		}
	}, [
		isControlled,
		initialItems,
		isCompletedControlled
	]);
	(0, import_react.useEffect)(() => {
		if (isControlled) return;
		if (isOpen && initialItems.length > 0) {
			const initialized = initialItems.map((item) => ({
				...item,
				status: item.status || "Waiting"
			}));
			setItemList(initialized);
			setIsProcessing(true);
			setIsCompleted(false);
			setActiveSendingId(null);
			isRunningRef.current = false;
		} else if (!isOpen) {
			setIsProcessing(false);
			setIsCompleted(false);
			setActiveSendingId(null);
			isRunningRef.current = false;
		}
	}, [
		isOpen,
		initialItems,
		isControlled
	]);
	const runSendingQueue = (0, import_react.useCallback)(async (targetsToRun) => {
		if (isRunningRef.current || targetsToRun.length === 0 || !onSendItemRef.current) return;
		isRunningRef.current = true;
		setIsProcessing(true);
		const currentList = [...targetsToRun];
		for (let i = 0; i < currentList.length; i++) {
			const currentItem = currentList[i];
			setActiveSendingId(currentItem.id);
			setItemList((prev) => prev.map((it) => it.id === currentItem.id ? {
				...it,
				status: "Sending"
			} : it));
			try {
				const result = await onSendItemRef.current(currentItem);
				if (result.success) setItemList((prev) => prev.map((it) => it.id === currentItem.id ? {
					...it,
					status: "Sent",
					gmailMessageId: result.gmailMessageId,
					gmailThreadId: result.gmailThreadId,
					errorMessage: void 0
				} : it));
				else setItemList((prev) => prev.map((it) => it.id === currentItem.id ? {
					...it,
					status: "Failed",
					errorMessage: result.errorMessage || "Unable to send"
				} : it));
			} catch (err) {
				const errorMsg = err instanceof Error ? err.message : "Unable to send";
				setItemList((prev) => prev.map((it) => it.id === currentItem.id ? {
					...it,
					status: "Failed",
					errorMessage: errorMsg
				} : it));
			}
			if (i < currentList.length - 1) await new Promise((resolve) => setTimeout(resolve, 400));
		}
		setActiveSendingId(null);
		setIsProcessing(false);
		setIsCompleted(true);
		isRunningRef.current = false;
		setItemList((finalList) => {
			const successful = finalList.filter((it) => it.status === "Sent");
			const failed = finalList.filter((it) => it.status === "Failed");
			if (onFinishedRef.current) onFinishedRef.current({
				successful,
				failed
			});
			return finalList;
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (isControlled) return;
		if (isOpen && isProcessing && !isCompleted && !isRunningRef.current && itemList.length > 0 && onSendItem) {
			const waitingItems = itemList.filter((it) => it.status === "Waiting");
			if (waitingItems.length > 0) runSendingQueue(waitingItems);
		}
	}, [
		isOpen,
		isProcessing,
		isCompleted,
		itemList,
		runSendingQueue,
		isControlled,
		onSendItem
	]);
	const handleRetryFailed = () => {
		if (externalRetryFailed) {
			externalRetryFailed();
			return;
		}
		const failedItems = itemList.filter((it) => it.status === "Failed");
		if (failedItems.length === 0) return;
		setItemList((prev) => prev.map((it) => it.status === "Failed" ? {
			...it,
			status: "Waiting",
			errorMessage: void 0
		} : it));
		setIsCompleted(false);
		setIsProcessing(true);
		const reloaded = failedItems.map((it) => ({
			...it,
			status: "Waiting",
			errorMessage: void 0
		}));
		runSendingQueue(reloaded);
	};
	const sentCount = (0, import_react.useMemo)(() => itemList.filter((it) => it.status === "Sent").length, [itemList]);
	const failedCount = (0, import_react.useMemo)(() => itemList.filter((it) => it.status === "Failed").length, [itemList]);
	const totalCount = itemList.length;
	const isAllSent = sentCount === totalCount && totalCount > 0;
	const hasPartialFailures = failedCount > 0;
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
		id: "email-sending-process-overlay",
		className: "fixed inset-0 z-[10000] flex items-end sm:items-center justify-center bg-slate-900/60 p-0 sm:p-4 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200 ease-out",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			id: "email-sending-process-card",
			className: cn("relative w-full max-w-[440px] bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100/90 flex flex-col transition-all will-change-[transform,opacity] outline-none", "max-h-[90vh] rounded-t-[28px] rounded-b-none p-5 pb-8 overflow-y-auto overflow-x-hidden animate-in slide-in-from-bottom duration-240 ease-[cubic-bezier(0.16,1,0.3,1)]", "sm:slide-in-from-bottom-0 sm:zoom-in-[0.96] sm:fade-in-0 sm:duration-200 sm:ease-[cubic-bezier(0.16,1,0.3,1)] sm:rounded-[28px] sm:p-7"),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto -mt-1 mb-3.5 h-1.5 w-12 shrink-0 rounded-full bg-slate-300 sm:hidden",
				"aria-hidden": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 270,
				columnNumber: 9
			}, this), !isCompleted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-12 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-3 shadow-2xs",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-5 stroke-[2.2]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 282,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 281,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-[20px] font-bold tracking-tight text-slate-900",
								children: "Sending Emails"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 284,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[13.5px] text-slate-500 mt-1 leading-relaxed max-w-xs",
								children: "Please wait while we send your booking request."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 287,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 280,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11.5px] font-bold text-slate-400 uppercase tracking-wider",
							children: "Sending to Forwarders"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 294,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11.5px] font-medium text-slate-400",
							children: [
								sentCount,
								" of ",
								totalCount,
								" sent"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 297,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 293,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-3.5 max-h-[300px] overflow-y-auto pr-0.5",
						children: itemList.map((item, index) => {
							const isWaiting = item.status === "Waiting";
							const isSending = item.status === "Sending";
							const isSent = item.status === "Sent";
							const isFailed = item.status === "Failed";
							const isLast = index === itemList.length - 1;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex items-start gap-3.5",
								children: [
									!isLast && /* @__PURE__ */ (void 0)("div", { className: cn("absolute left-[9px] top-[22px] w-[2px] h-[calc(100%+4px)] transition-colors duration-300", isSent ? "bg-[#2563EB]/30" : "bg-slate-200/80") }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 315,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative z-10 shrink-0 mt-0.5",
										children: [
											isWaiting && /* @__PURE__ */ (void 0)("div", {
												className: "size-5 rounded-full border-2 border-slate-300 bg-white",
												title: "Waiting"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 326,
												columnNumber: 25
											}, this),
											isSending && /* @__PURE__ */ (void 0)("div", {
												className: "size-5 rounded-full border-2 border-slate-200 border-t-[#2563EB] animate-spin",
												title: "Sending"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 332,
												columnNumber: 25
											}, this),
											isSent && /* @__PURE__ */ (void 0)("div", {
												className: "size-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-2xs animate-in zoom-in-50 duration-200",
												title: "Sent",
												children: /* @__PURE__ */ (void 0)(Check, { className: "size-3 stroke-[3]" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 342,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 338,
												columnNumber: 25
											}, this),
											isFailed && /* @__PURE__ */ (void 0)("div", {
												className: "size-5 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-2xs animate-in zoom-in-50 duration-200",
												title: "Failed",
												children: /* @__PURE__ */ (void 0)(X, { className: "size-3 stroke-[3]" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 350,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 346,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 324,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex-1 min-w-0 pb-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[13.5px] font-semibold text-slate-900 truncate",
													children: item.name
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 358,
													columnNumber: 25
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "text-[12px] shrink-0 font-medium",
													children: [
														isWaiting && /* @__PURE__ */ (void 0)("span", {
															className: "text-slate-400",
															children: "Waiting..."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 363,
															columnNumber: 41
														}, this),
														isSending && /* @__PURE__ */ (void 0)("span", {
															className: "text-[#2563EB] animate-pulse",
															children: "Sending..."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 365,
															columnNumber: 29
														}, this),
														isSent && /* @__PURE__ */ (void 0)("span", {
															className: "text-emerald-600 font-semibold",
															children: "✓ Sent"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 367,
															columnNumber: 38
														}, this),
														isFailed && /* @__PURE__ */ (void 0)("span", {
															className: "text-rose-600 font-semibold",
															children: "✕ Failed"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 369,
															columnNumber: 29
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 362,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 357,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "text-[11.5px] text-slate-400 font-mono truncate mt-0.5",
												children: item.email
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 374,
												columnNumber: 23
											}, this),
											isFailed && item.errorMessage && /* @__PURE__ */ (void 0)("div", {
												className: "mt-1 text-[11.5px] text-rose-600 font-medium bg-rose-50/80 border border-rose-100 rounded-lg px-2 py-1 leading-snug",
												children: ["Unable to send: ", item.errorMessage]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 380,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 356,
										columnNumber: 21
									}, this)
								]
							}, item.id, true, {
								fileName: _jsxFileName,
								lineNumber: 312,
								columnNumber: 19
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 303,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-5 pt-3 border-t border-slate-100/80",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-1.5 w-full bg-slate-100 rounded-full overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "h-full bg-[#2563EB] rounded-full transition-all duration-300",
								style: { width: `${totalCount > 0 ? sentCount / totalCount * 100 : 0}%` }
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 393,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 392,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-2 text-center text-[11.5px] text-slate-400",
							children: "Pacing delivery for verified Gmail transmission..."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 400,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 391,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 278,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col animate-in fade-in zoom-in-[0.98] duration-200",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative w-full h-36 rounded-2xl overflow-hidden bg-gradient-to-b from-[#2563EB] via-[#3B82F6] to-[#60A5FA] flex items-center justify-center shadow-inner mb-4 select-none",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
							viewBox: "0 0 320 160",
							className: "w-full h-full pointer-events-none",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
									cx: "45",
									cy: "30",
									r: "1.5",
									fill: "#ffffff",
									opacity: "0.8"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 419,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
									cx: "85",
									cy: "45",
									r: "1.2",
									fill: "#ffffff",
									opacity: "0.6"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 420,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
									cx: "230",
									cy: "25",
									r: "1.8",
									fill: "#ffffff",
									opacity: "0.8"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 421,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
									cx: "275",
									cy: "42",
									r: "1.2",
									fill: "#ffffff",
									opacity: "0.7"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 422,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
									cx: "115",
									cy: "20",
									r: "1.0",
									fill: "#ffffff",
									opacity: "0.5"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 423,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
									cx: "205",
									cy: "50",
									r: "1.3",
									fill: "#ffffff",
									opacity: "0.6"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 424,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
									d: "M-20 160 C 20 115, 75 125, 110 145 C 135 130, 175 128, 200 148 C 225 125, 275 120, 305 142 C 325 132, 345 145, 360 160 Z",
									fill: "#ffffff",
									opacity: "0.35"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 427,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
									d: "M-10 160 C 30 122, 90 132, 120 152 C 145 136, 185 132, 212 152 C 242 128, 290 122, 335 160 Z",
									fill: "#ffffff",
									opacity: "0.75"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 432,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
									d: "M0 160 C 40 132, 100 142, 130 160 C 160 142, 200 140, 228 160 C 258 137, 310 132, 340 160 Z",
									fill: "#ffffff"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 437,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
									d: "M 156 68 L 156 160 L 164 160 L 164 68 Z",
									fill: "url(#trailGradientLight)",
									opacity: "0.85"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 443,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
									transform: "translate(142, 28)",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
											d: "M 4 40 C 4 30, 10 32, 10 24 L 10 42 Z",
											fill: "#E2E8F0"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 452,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
											d: "M 32 40 C 32 30, 26 32, 26 24 L 26 42 Z",
											fill: "#E2E8F0"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 454,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
											d: "M 18 0 C 10 8, 8 26, 8 44 L 28 44 C 28 26, 26 8, 18 0 Z",
											fill: "#FFFFFF"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 456,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "18",
											cy: "19",
											r: "4.5",
											fill: "#2563EB"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 461,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "17",
											cy: "18",
											r: "1.5",
											fill: "#93C5FD"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 462,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 450,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
									id: "trailGradientLight",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
										offset: "0%",
										stopColor: "#FFFFFF",
										stopOpacity: "0.95"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 467,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
										offset: "100%",
										stopColor: "#FFFFFF",
										stopOpacity: "0"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 468,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 466,
									columnNumber: 19
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 465,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 412,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 411,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-[21px] font-bold tracking-tight text-slate-900 leading-snug",
							children: isAllSent ? "Emails Sent Successfully!" : "Email Sending Completed"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 476,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[13px] text-slate-500 mt-1 leading-relaxed max-w-sm mx-auto",
							children: isAllSent ? "Your booking request has been successfully sent to all selected forwarders." : "Some booking emails were delivered, while others encountered delivery issues."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 479,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 475,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3.5 flex items-center justify-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3.5 stroke-[2.5]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 489,
									columnNumber: 17
								}, this),
								sentCount,
								" Email",
								sentCount !== 1 ? "s" : "",
								" Sent"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 488,
							columnNumber: 15
						}, this), hasPartialFailures ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-rose-50 text-rose-700 border border-rose-200/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3.5 stroke-[2.5]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 495,
									columnNumber: 19
								}, this),
								failedCount,
								" Email",
								failedCount !== 1 ? "s" : "",
								" Failed"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 494,
							columnNumber: 17
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-blue-50 text-blue-700 border border-blue-200/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3.5 stroke-[2.5]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 500,
									columnNumber: 19
								}, this),
								sentCount,
								" Forwarder",
								sentCount !== 1 ? "s" : "",
								" Notified"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 499,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 487,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3.5 rounded-xl bg-slate-50/90 border border-slate-200/70 p-3 space-y-2 max-h-[160px] overflow-y-auto",
						children: itemList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-[13px] py-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2 min-w-0",
								children: [item.status === "Sent" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-emerald-600 font-bold shrink-0",
									children: "✓"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 512,
									columnNumber: 23
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-rose-500 font-bold shrink-0",
									children: "✕"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 514,
									columnNumber: 23
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-semibold text-slate-800 truncate",
									children: item.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 516,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 510,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: cn("text-[12px] font-medium shrink-0 ml-2", item.status === "Sent" ? "text-slate-500" : "text-rose-600 font-semibold"),
								children: item.status === "Sent" ? "Sent" : "Failed"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 518,
								columnNumber: 19
							}, this)]
						}, item.id, true, {
							fileName: _jsxFileName,
							lineNumber: 509,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 507,
						columnNumber: 13
					}, this),
					movementReference && /* @__PURE__ */ (void 0)("div", {
						className: "mt-3 flex items-center justify-center",
						children: /* @__PURE__ */ (void 0)("span", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[12px] font-mono font-medium text-slate-600 bg-slate-100 border border-slate-200/80",
							children: ["Movement: ", /* @__PURE__ */ (void 0)("span", {
								className: "font-bold text-slate-900",
								children: movementReference
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 534,
								columnNumber: 29
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 533,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 532,
						columnNumber: 15
					}, this),
					hasPartialFailures ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-5 grid grid-cols-2 gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: handleRetryFailed,
							className: "h-11 rounded-[14px] border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-800 text-[13.5px] font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 547,
								columnNumber: 19
							}, this), "Retry Failed"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 542,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: onClose,
							className: "h-11 rounded-[14px] bg-slate-900 hover:bg-black text-white text-[13.5px] font-semibold transition-all shadow-sm active:scale-[0.99] flex items-center justify-center",
							children: "Done"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 550,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 541,
						columnNumber: 15
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: onClose,
						className: "mt-5 w-full h-11 rounded-[14px] bg-slate-900 hover:bg-black text-white text-[14px] font-semibold transition-all shadow-sm active:scale-[0.99] flex items-center justify-center",
						children: "Done"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 559,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 409,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 259,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 255,
		columnNumber: 5
	}, this), document.body);
}
//#endregion
export { useSaveDraft as a, useRetryEmail as i, EmailSendingProcessModal as n, useSendEmail as o, useEmails as r, EMAILS_QUERY_KEY as t };
