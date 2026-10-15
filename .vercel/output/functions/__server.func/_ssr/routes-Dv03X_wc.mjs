import { o as __toESM, r as __exportAll } from "../_runtime.mjs";
import { Dt as reconcileBookingWithConfirmations, Et as normalizeLifecycleStage, It as toDbBookingStatus, Lt as toDbMovementStatus, Q as deleteBookingFromSupabase, Rt as updateBookingDetailsInSupabase, X as deduplicateBookings, ft as getLifecycleStageConfig, it as fetchForwardersFromSupabase, lt as getAllUpcomingCutOffs, nt as fetchBookingsFromSupabase, ot as fetchSuppliersFromSupabase, rt as fetchBuyersFromSupabase } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { l as require_react_dom, u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as executeExcelBookingUpdates, o as parseAndPreviewExcelBookings } from "./ssr.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { B as RefreshCw, Ct as Inbox, En as Anchor, Et as Funnel, Ft as FileCheck, J as PenLine, Kt as Copy, Mt as FileSpreadsheet, N as Send, O as Ship, Ot as FolderOpen, P as Search, R as RotateCcw, Sn as ArrowLeft, St as Info, V as Receipt, Vt as EllipsisVertical, W as Plus, Wt as DollarSign, X as Package, Xt as ClipboardList, Z as PackageCheck, _n as Bell, a as Wrench, c as Users, cn as Check, ct as MapPin, dn as Building2, f as Upload, ft as LoaderCircle, g as TrendingUp, gt as Lightbulb, h as TriangleAlert, i as X, in as ChevronUp, jt as FileText, k as ShieldCheck, lt as Mail, nt as MessageSquareReply, ot as Menu, qt as Container, s as Warehouse, sn as ChevronDown, tn as CircleCheck, un as Calendar, v as Trash2, vn as Ban, w as Sparkles, xn as ArrowRight, y as Timer, yn as BadgeCheck, yt as Layers, zt as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Skeleton } from "./skeleton-CElFHdk0.mjs";
import { t as useSwipeToDismiss } from "./use-swipe-to-dismiss-DDttoUG9.mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { M as useNotifications, N as useAuth, P as showPillToast, _ as DropdownMenuTrigger, a as ErrorBoundary, f as DropdownMenu, m as DropdownMenuItem, p as DropdownMenuContent, r as AppLayout, v as useSupabaseRealtime } from "./router-BJg2H47m.mjs";
import { t as MovementLifecycleDrawer$1 } from "./MovementLifecycleDrawer-BFcX3wIF.mjs";
import { t as PillPagination } from "./PillPagination-D19p0fGj.mjs";
import { i as PopoverTrigger$1, n as PopoverContent$1, r as PopoverPortal, t as Popover$1 } from "../_libs/radix-ui__react-popover.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dv03X_wc.js
var routes_Dv03X_wc_exports = /* @__PURE__ */ __exportAll({
	component: () => Dashboard,
	t: () => AINotificationCenter
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var _jsxFileName$10 = "/app/applet/src/components/nashmia/skeletons/NotificationSkeletons.tsx";
function NotificationsListSkeleton({ count = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "divide-y divide-slate-100 skeleton-container",
		children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-start gap-3 py-3 px-2 rounded-xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-9 rounded-xl bg-slate-200/80 shrink-0" }, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 9,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex-1 min-w-0 space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-36 bg-slate-200/80" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 12,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3 w-12 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 13,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 11,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3 w-48 bg-slate-100" }, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 15,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-20 rounded bg-slate-200/60" }, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 16,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 10,
				columnNumber: 11
			}, this)]
		}, i, true, {
			fileName: _jsxFileName$10,
			lineNumber: 8,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$10,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var _jsxFileName$9 = "/app/applet/src/components/nashmia/AINotificationCenter.tsx";
var AINotificationCenter = ({ onClose, className, isBottomSheet = false }) => {
	const navigate = useNavigate();
	const { notifications, unreadCount, isSyncing, markAsRead, markAllAsRead, clearAll, deleteNotification, refreshNotifications } = useNotifications();
	const [activeDateTab, setActiveDateTab] = (0, import_react.useState)("all");
	const [filterType, setFilterType] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const filteredItems = (0, import_react.useMemo)(() => {
		return notifications.filter((item) => {
			if (activeDateTab !== "all" && item.category !== activeDateTab) return false;
			if (filterType === "replies" && item.type !== "booking_reply") return false;
			if (filterType === "requests" && item.type !== "booking_request") return false;
			if (filterType === "milestones" && item.type !== "tracking_event" && item.type !== "system") return false;
			if (filterType === "cutoffs" && item.type !== "cutoff_reminder") return false;
			if (filterType === "unread" && !item.unread) return false;
			if (searchQuery.trim()) {
				const query = searchQuery.toLowerCase().trim();
				const titleMatch = item.title.toLowerCase().includes(query);
				const descMatch = (item.rawDescription || "").toLowerCase().includes(query);
				const refMatch = (item.bookingReference || "").toLowerCase().includes(query);
				const senderMatch = (item.senderName || "").toLowerCase().includes(query);
				const recipientMatch = (item.recipientName || "").toLowerCase().includes(query);
				if (!titleMatch && !descMatch && !refMatch && !senderMatch && !recipientMatch) return false;
			}
			return true;
		});
	}, [
		notifications,
		activeDateTab,
		filterType,
		searchQuery
	]);
	const totalCount = notifications.length;
	const replyCount = (0, import_react.useMemo)(() => notifications.filter((n) => n.type === "booking_reply").length, [notifications]);
	const requestCount = (0, import_react.useMemo)(() => notifications.filter((n) => n.type === "booking_request").length, [notifications]);
	const milestoneCount = (0, import_react.useMemo)(() => notifications.filter((n) => n.type === "tracking_event" || n.type === "system").length, [notifications]);
	const cutoffCount = (0, import_react.useMemo)(() => notifications.filter((n) => n.type === "cutoff_reminder").length, [notifications]);
	const todayCount = (0, import_react.useMemo)(() => notifications.filter((n) => n.category === "today").length, [notifications]);
	const thisWeekCount = (0, import_react.useMemo)(() => notifications.filter((n) => n.category === "thisWeek").length, [notifications]);
	const earlierCount = (0, import_react.useMemo)(() => notifications.filter((n) => n.category === "earlier").length, [notifications]);
	const renderIcon = (type, itemType) => {
		if (itemType === "cutoff_reminder" || type === "alert") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Timer, { className: "size-4.5 text-amber-600 stroke-[2.2]" }, void 0, false, {
			fileName: _jsxFileName$9,
			lineNumber: 125,
			columnNumber: 14
		}, void 0);
		if (itemType === "booking_reply" || type === "reply") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageSquareReply, { className: "size-4.5 text-emerald-600 stroke-[2.2]" }, void 0, false, {
			fileName: _jsxFileName$9,
			lineNumber: 128,
			columnNumber: 14
		}, void 0);
		if (itemType === "booking_request" || type === "mail") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-4.5 text-[#0FA3B1] stroke-[2.2]" }, void 0, false, {
			fileName: _jsxFileName$9,
			lineNumber: 131,
			columnNumber: 14
		}, void 0);
		switch (type) {
			case "sparkles": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-4.5 text-purple-600 stroke-[2]" }, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 135,
				columnNumber: 16
			}, void 0);
			case "check": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-4.5 text-blue-600 stroke-[2]" }, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 137,
				columnNumber: 16
			}, void 0);
			case "shield": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-4.5 text-indigo-600 stroke-[2]" }, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 139,
				columnNumber: 16
			}, void 0);
			case "package": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Package, { className: "size-4.5 text-amber-600 stroke-[2]" }, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 141,
				columnNumber: 16
			}, void 0);
			case "trend": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrendingUp, { className: "size-4.5 text-slate-700 stroke-[2]" }, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 143,
				columnNumber: 16
			}, void 0);
			case "wrench": return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrench, { className: "size-4.5 text-slate-700 stroke-[2]" }, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 145,
				columnNumber: 16
			}, void 0);
			default: return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lightbulb, { className: "size-4.5 text-slate-700 stroke-[2]" }, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 147,
				columnNumber: 16
			}, void 0);
		}
	};
	const handleItemClick = (item) => {
		markAsRead(item.id);
		if (item.type === "cutoff_reminder" && item.bookingReference) {
			onClose?.();
			navigate({
				to: "/movements",
				search: { ref: item.bookingReference }
			});
			return;
		}
		if (item.linkUrl) {
			onClose?.();
			navigate({ to: item.linkUrl });
		} else if (item.bookingReference) {
			onClose?.();
			navigate({
				to: "/emails",
				search: { search: item.bookingReference }
			});
		} else showPillToast.info(item.rawDescription || item.title, item.title);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		id: "ai-notification-center",
		className: cn("text-left font-sans transition-all select-none w-full max-w-full overflow-hidden", isBottomSheet ? "rounded-none bg-transparent p-0 border-0 shadow-none" : "w-[min(460px,calc(100vw-24px))] max-w-full rounded-[24px] bg-white p-4 sm:p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18),0_0_1px_1px_rgba(0,0,0,0.06)] border border-slate-100/90", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between border-b border-slate-100 pb-3 gap-2 w-full max-w-full",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative grid size-8 sm:size-8.5 shrink-0 place-items-center rounded-xl bg-slate-900 text-white shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: "size-3.5 sm:size-4" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 192,
							columnNumber: 13
						}, void 0), unreadCount > 0 && /* @__PURE__ */ (void 0)("span", { className: "absolute -top-0.5 -right-0.5 size-2 sm:size-2.5 rounded-full bg-[#0FA3B1] ring-2 ring-white" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 194,
							columnNumber: 15
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 191,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-1.5 sm:gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-[14.5px] sm:text-[15.5px] font-bold tracking-tight text-slate-900 truncate",
								children: "Notification Center"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 199,
								columnNumber: 15
							}, void 0), unreadCount > 0 && /* @__PURE__ */ (void 0)("span", {
								className: "inline-flex shrink-0 items-center rounded-full bg-[#0FA3B1]/10 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-[#0FA3B1]",
								children: [unreadCount, " new"]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 203,
								columnNumber: 17
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 198,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[10.5px] sm:text-[11px] font-medium text-slate-400 truncate max-w-[210px] xs:max-w-xs sm:max-w-none",
							children: "Live Booking Requests & Milestones"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 208,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 197,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 190,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-1 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => {
							clearAll();
						},
						disabled: notifications.length === 0,
						title: "Clear all notifications",
						className: "flex items-center gap-1 rounded-lg border border-slate-200/80 bg-white px-2 py-1 text-[11px] sm:text-[11.5px] font-semibold text-slate-600 transition-all hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-600 disabled:cursor-not-allowed",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-3 sm:size-3.5 text-rose-500" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 224,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "hidden xs:inline",
								children: "Clear All"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 225,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "xs:hidden",
								children: "Clear"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 226,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 215,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: markAllAsRead,
						disabled: unreadCount === 0,
						title: "Mark all as read",
						className: "rounded-lg border border-slate-200/80 bg-white px-2 py-1 text-[11px] sm:text-[11.5px] font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-900 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-600 disabled:cursor-not-allowed",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "hidden xs:inline",
							children: "Read All"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 235,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "xs:hidden",
							children: "Read"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 236,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 228,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 214,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 189,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-2.5 sm:mt-3 grid grid-cols-4 gap-1 rounded-xl bg-slate-100/90 p-1 w-full max-w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setActiveDateTab("all"),
						className: cn("rounded-lg py-1 px-1 text-[11px] sm:text-[12px] font-semibold transition-all flex items-center justify-center gap-0.5 sm:gap-1 truncate", activeDateTab === "all" ? "bg-white text-slate-900 shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : "text-slate-500 hover:text-slate-800"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 253,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[10px] text-slate-400",
							children: [
								"(",
								totalCount,
								")"
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 254,
							columnNumber: 11
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 243,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setActiveDateTab("today"),
						className: cn("rounded-lg py-1 px-1 text-[11px] sm:text-[12px] font-semibold transition-all flex items-center justify-center gap-0.5 sm:gap-1 truncate", activeDateTab === "today" ? "bg-white text-slate-900 shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : "text-slate-500 hover:text-slate-800"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Today" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 266,
							columnNumber: 11
						}, void 0), todayCount > 0 && /* @__PURE__ */ (void 0)("span", {
							className: "text-[10px] text-slate-400",
							children: [
								"(",
								todayCount,
								")"
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 267,
							columnNumber: 30
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 256,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setActiveDateTab("thisWeek"),
						className: cn("rounded-lg py-1 px-1 text-[11px] sm:text-[12px] font-semibold transition-all flex items-center justify-center gap-0.5 sm:gap-1 truncate", activeDateTab === "thisWeek" ? "bg-white text-slate-900 shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : "text-slate-500 hover:text-slate-800"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "hidden sm:inline",
							children: "This "
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 280,
							columnNumber: 13
						}, void 0), "Week"] }, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 279,
							columnNumber: 11
						}, void 0), thisWeekCount > 0 && /* @__PURE__ */ (void 0)("span", {
							className: "text-[10px] text-slate-400",
							children: [
								"(",
								thisWeekCount,
								")"
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 283,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 269,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setActiveDateTab("earlier"),
						className: cn("rounded-lg py-1 px-1 text-[11px] sm:text-[12px] font-semibold transition-all flex items-center justify-center gap-0.5 sm:gap-1 truncate", activeDateTab === "earlier" ? "bg-white text-slate-900 shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : "text-slate-500 hover:text-slate-800"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Earlier" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 296,
							columnNumber: 11
						}, void 0), earlierCount > 0 && /* @__PURE__ */ (void 0)("span", {
							className: "text-[10px] text-slate-400",
							children: [
								"(",
								earlierCount,
								")"
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 297,
							columnNumber: 32
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 286,
						columnNumber: 9
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 242,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-2.5 relative w-full max-w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" }, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 303,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						type: "text",
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						placeholder: "Filter by ref, forwarder, or keyword...",
						className: "w-full pl-8 pr-7 py-1.5 rounded-lg border border-slate-200/90 bg-slate-50/50 text-[12px] text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0FA3B1] truncate"
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 304,
						columnNumber: 9
					}, void 0),
					searchQuery && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => setSearchQuery(""),
						className: "absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",
						children: /* @__PURE__ */ (void 0)(X, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 317,
							columnNumber: 13
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 312,
						columnNumber: 11
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 302,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-2.5 flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] sm:text-xs no-scrollbar w-full max-w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setFilterType("all"),
						className: cn("px-2.5 py-1 rounded-lg font-medium transition-all shrink-0", filterType === "all" ? "bg-slate-900 text-white shadow-xs" : "bg-slate-100/70 text-slate-600 hover:bg-slate-200/70"),
						children: "All"
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 324,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setFilterType("replies"),
						className: cn("inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium transition-all shrink-0", filterType === "replies" ? "bg-emerald-600 text-white shadow-xs" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageSquareReply, { className: "size-3" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 346,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
							"Replies (",
							replyCount,
							")"
						] }, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 347,
							columnNumber: 11
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 336,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setFilterType("requests"),
						className: cn("inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium transition-all shrink-0", filterType === "requests" ? "bg-[#0FA3B1] text-white shadow-xs" : "bg-[#0FA3B1]/10 text-[#0FA3B1] hover:bg-[#0FA3B1]/20"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-3" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 359,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
							"Sent Requests (",
							requestCount,
							")"
						] }, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 360,
							columnNumber: 11
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 349,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setFilterType("milestones"),
						className: cn("inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium transition-all shrink-0", filterType === "milestones" ? "bg-purple-600 text-white shadow-xs" : "bg-purple-50 text-purple-700 hover:bg-purple-100"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 372,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
							"Milestones (",
							milestoneCount,
							")"
						] }, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 373,
							columnNumber: 11
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 362,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setFilterType("cutoffs"),
						className: cn("inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium transition-all shrink-0", filterType === "cutoffs" ? "bg-amber-600 text-white shadow-xs" : "bg-amber-50 text-amber-800 hover:bg-amber-100"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Timer, { className: "size-3" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 385,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
							"Cut-Offs (",
							cutoffCount,
							")"
						] }, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 386,
							columnNumber: 11
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 375,
						columnNumber: 9
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 323,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: cn("mt-2.5 sm:mt-3 divide-y divide-slate-100 overflow-y-auto pr-0.5 sm:pr-1 w-full max-w-full", isBottomSheet ? "max-h-[50vh] sm:max-h-[55vh]" : "max-h-[340px]"),
				children: isSyncing && notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NotificationsListSkeleton, { count: 4 }, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 398,
					columnNumber: 11
				}, void 0) : filteredItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "py-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Inbox, { className: "size-8 mx-auto text-slate-300 mb-2" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 401,
							columnNumber: 13
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-semibold text-slate-600",
							children: "No notifications found"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 402,
							columnNumber: 13
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[11px] text-slate-400 mt-0.5",
							children: searchQuery ? `No results matching "${searchQuery}".` : filterType !== "all" ? `No ${filterType} available in this view.` : "All operational communication is synchronized."
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 403,
							columnNumber: 13
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 400,
					columnNumber: 11
				}, void 0) : filteredItems.map((item) => {
					const isConfirmed = item.type === "booking_confirmed" || item.title.toLowerCase().includes("confirmed") || item.description.toLowerCase().includes("confirmed");
					const isReply = item.type === "booking_reply";
					const isRequest = item.type === "booking_request";
					const isCutoff = item.type === "cutoff_reminder";
					const displayRef = item.bookingReference || `${item.title} ${item.description}`.match(/\b(MOV-\d{4}-\d{3,6}|BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|NASH-[A-Z0-9-]+)\b/i)?.[0];
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						onClick: () => handleItemClick(item),
						className: cn("group relative flex cursor-pointer items-start gap-2.5 sm:gap-3 py-2.5 sm:py-3 px-1.5 sm:px-2 rounded-xl transition-all hover:bg-slate-50 active:scale-[0.99] w-full max-w-full min-w-0", item.unread && "bg-[#0FA3B1]/4 hover:bg-[#0FA3B1]/8"),
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: cn("grid size-8 sm:size-9 shrink-0 place-items-center rounded-xl border bg-white shadow-2xs transition-all", isCutoff ? "border-amber-200 bg-amber-50/90 text-amber-600" : isConfirmed ? "border-emerald-200 bg-emerald-50/70 text-emerald-600" : isReply ? "border-emerald-200 bg-emerald-50/60 text-emerald-600" : isRequest ? "border-[#0FA3B1]/30 bg-[#0FA3B1]/5 text-[#0FA3B1]" : "border-slate-200/90 text-slate-600"),
								children: renderIcon(item.icon, item.type)
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 437,
								columnNumber: 17
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5 min-w-0 flex-1",
											children: [item.unread && /* @__PURE__ */ (void 0)("span", { className: "size-1.5 shrink-0 rounded-full bg-[#0FA3B1]" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 459,
												columnNumber: 25
											}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "truncate text-[12.5px] sm:text-[13px] font-bold text-slate-900",
												children: item.title
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 461,
												columnNumber: 23
											}, void 0)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 457,
											columnNumber: 21
										}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "shrink-0 text-[10.5px] sm:text-[11px] font-normal text-slate-400",
											children: item.time
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 465,
											columnNumber: 21
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 456,
										columnNumber: 19
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-0.5 text-[11.5px] sm:text-[12px] leading-relaxed text-slate-600 line-clamp-2 break-words",
										children: item.description
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 471,
										columnNumber: 19
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-1.5 flex flex-wrap items-center gap-1 sm:gap-1.5 max-w-full",
										children: [
											displayRef && /* @__PURE__ */ (void 0)("span", {
												className: cn("inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] sm:text-[10.5px] font-bold tracking-tight shadow-2xs truncate max-w-[130px]", isConfirmed ? "bg-emerald-50 text-emerald-800 border border-emerald-200/80" : "bg-slate-100 text-slate-700 border border-slate-200/60"),
												children: displayRef
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 478,
												columnNumber: 23
											}, void 0),
											isConfirmed && /* @__PURE__ */ (void 0)("span", {
												className: "inline-flex items-center gap-1 text-[10px] sm:text-[10.5px] font-semibold text-emerald-700 bg-emerald-50/80 px-1.5 py-0.5 rounded-md border border-emerald-200/60",
												children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-2.5 sm:size-3" }, void 0, false, {
													fileName: _jsxFileName$9,
													lineNumber: 491,
													columnNumber: 25
												}, void 0), "Confirmed"]
											}, void 0, true, {
												fileName: _jsxFileName$9,
												lineNumber: 490,
												columnNumber: 23
											}, void 0),
											isReply && !isConfirmed && /* @__PURE__ */ (void 0)("span", {
												className: "inline-flex items-center gap-1 text-[10px] sm:text-[10.5px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md",
												children: [/* @__PURE__ */ (void 0)(MessageSquareReply, { className: "size-2.5 sm:size-3" }, void 0, false, {
													fileName: _jsxFileName$9,
													lineNumber: 497,
													columnNumber: 25
												}, void 0), "Reply"]
											}, void 0, true, {
												fileName: _jsxFileName$9,
												lineNumber: 496,
												columnNumber: 23
											}, void 0),
											isRequest && /* @__PURE__ */ (void 0)("span", {
												className: "inline-flex items-center gap-1 text-[10px] sm:text-[10.5px] font-semibold text-[#0FA3B1] bg-[#0FA3B1]/10 px-1.5 py-0.5 rounded-md",
												children: [/* @__PURE__ */ (void 0)(Send, { className: "size-2.5 sm:size-3" }, void 0, false, {
													fileName: _jsxFileName$9,
													lineNumber: 503,
													columnNumber: 25
												}, void 0), "Request Sent"]
											}, void 0, true, {
												fileName: _jsxFileName$9,
												lineNumber: 502,
												columnNumber: 23
											}, void 0),
											isCutoff && /* @__PURE__ */ (void 0)("span", {
												className: "inline-flex items-center gap-1 text-[10px] sm:text-[10.5px] font-semibold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded-md border border-amber-200/80",
												children: [/* @__PURE__ */ (void 0)(Timer, { className: "size-2.5 sm:size-3" }, void 0, false, {
													fileName: _jsxFileName$9,
													lineNumber: 509,
													columnNumber: 25
												}, void 0), "Deadline"]
											}, void 0, true, {
												fileName: _jsxFileName$9,
												lineNumber: 508,
												columnNumber: 23
											}, void 0),
											isCutoff && item.cutoffDetails?.cutoffType && /* @__PURE__ */ (void 0)("span", {
												className: "inline-flex items-center text-[10px] sm:text-[10.5px] font-medium text-amber-700 bg-amber-100/70 px-1.5 py-0.5 rounded-md truncate max-w-[110px]",
												children: item.cutoffDetails.cutoffType
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 514,
												columnNumber: 23
											}, void 0),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[10px] sm:text-[10.5px] text-slate-400 group-hover:text-slate-700 inline-flex items-center gap-0.5 ml-auto opacity-0 sm:group-hover:opacity-100 transition-opacity font-medium",
												children: ["Open ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-2.5" }, void 0, false, {
													fileName: _jsxFileName$9,
													lineNumber: 519,
													columnNumber: 28
												}, void 0)]
											}, void 0, true, {
												fileName: _jsxFileName$9,
												lineNumber: 518,
												columnNumber: 21
											}, void 0)
										]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 476,
										columnNumber: 19
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 455,
								columnNumber: 17
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: (e) => {
									e.stopPropagation();
									deleteNotification(item.id);
								},
								className: "opacity-70 sm:opacity-0 sm:group-hover:opacity-100 text-slate-400 hover:text-rose-500 p-1 rounded transition-all shrink-0",
								title: "Dismiss notification",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 534,
									columnNumber: 19
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 525,
								columnNumber: 17
							}, void 0)
						]
					}, item.id, true, {
						fileName: _jsxFileName$9,
						lineNumber: 428,
						columnNumber: 15
					}, void 0);
				})
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 391,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-[11px] sm:text-[11.5px] w-full max-w-full",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: clearAll,
					className: "text-slate-400 hover:text-rose-600 transition-colors",
					children: "Clear all"
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 544,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => {
						onClose?.();
						navigate({ to: "/emails" });
					},
					className: "inline-flex items-center gap-1 font-semibold text-[#0FA3B1] hover:text-[#0c828e] transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 559,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Open Email Center" }, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 560,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 551,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 543,
				columnNumber: 7
			}, void 0)
		]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 178,
		columnNumber: 5
	}, void 0);
};
var quickActions = [
	{
		label: "New Booking",
		icon: "Plus"
	},
	{
		label: "Add Supplier",
		icon: "Warehouse"
	},
	{
		label: "Add Buyer",
		icon: "Users"
	},
	{
		label: "Manage Rates",
		icon: "Receipt"
	}
];
var _jsxFileName$8 = "/app/applet/src/components/nashmia/movements/ExcelBookingUploadModal.tsx";
var PROCESSING_STEPS = [
	"Reading Excel file",
	"Validating rows",
	"Matching existing bookings",
	"Comparing updated fields",
	"Updating database records",
	"Refreshing Movement Lifecycle data"
];
function ExcelBookingUploadModal({ isOpen, onClose, existingBookings, onUploadSuccess }) {
	const { userId } = useAuth();
	const fileInputRef = (0, import_react.useRef)(null);
	const [step, setStep] = (0, import_react.useState)("upload");
	const [selectedFile, setSelectedFile] = (0, import_react.useState)(null);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const [isReadingFile, setIsReadingFile] = (0, import_react.useState)(false);
	const [previewResult, setPreviewResult] = (0, import_react.useState)(null);
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [searchFilter, setSearchFilter] = (0, import_react.useState)("");
	const [currentStepIndex, setCurrentStepIndex] = (0, import_react.useState)(0);
	const [processingProgress, setProcessingProgress] = (0, import_react.useState)(0);
	const [processedCount, setProcessedCount] = (0, import_react.useState)(0);
	const [updatedCount, setUpdatedCount] = (0, import_react.useState)(0);
	const [skippedCount, setSkippedCount] = (0, import_react.useState)(0);
	const [errorCount, setErrorCount] = (0, import_react.useState)(0);
	const [processingStatusText, setProcessingStatusText] = (0, import_react.useState)("");
	const [executionResult, setExecutionResult] = (0, import_react.useState)(null);
	const [showErrorDetails, setShowErrorDetails] = (0, import_react.useState)(false);
	const { elementRef: sheetElementRef, handleRef: sheetHandleRef } = useSwipeToDismiss({
		onDismiss: () => {
			if (step !== "processing") handleClose();
		},
		direction: "down",
		threshold: 65,
		enabled: step !== "processing"
	});
	const handleReset = (0, import_react.useCallback)(() => {
		setSelectedFile(null);
		setPreviewResult(null);
		setStep("upload");
		setCurrentStepIndex(0);
		setProcessingProgress(0);
		setProcessedCount(0);
		setUpdatedCount(0);
		setSkippedCount(0);
		setErrorCount(0);
		setProcessingStatusText("");
		setExecutionResult(null);
		setShowErrorDetails(false);
		setStatusFilter("all");
		setSearchFilter("");
		if (fileInputRef.current) fileInputRef.current.value = "";
	}, []);
	const handleClose = (0, import_react.useCallback)(() => {
		if (step === "processing") return;
		handleReset();
		onClose();
	}, [
		step,
		handleReset,
		onClose
	]);
	const handleFileDrop = (0, import_react.useCallback)((e) => {
		e.preventDefault();
		setIsDragging(false);
		const files = e.dataTransfer.files;
		if (files && files.length > 0) validateAndSetFile(files[0]);
	}, []);
	const handleFileSelect = (0, import_react.useCallback)((e) => {
		const files = e.target.files;
		if (files && files.length > 0) validateAndSetFile(files[0]);
	}, []);
	const validateAndSetFile = (file) => {
		const validExtensions = [
			".xlsx",
			".xls",
			".csv"
		];
		const lowerName = file.name.toLowerCase();
		if (!validExtensions.some((ext) => lowerName.endsWith(ext))) {
			toast.error("Invalid file format. Please upload an Excel file (.xlsx, .xls, or .csv).");
			return;
		}
		if (file.size > 26214400) {
			toast.error("File size exceeds 25 MB limit. Please upload a smaller file.");
			return;
		}
		setSelectedFile(file);
	};
	const formatFileSize = (bytes) => {
		if (bytes < 1024) return `${bytes} B`;
		if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
		return `${(bytes / 1048576).toFixed(1)} MB`;
	};
	const getFileExtension = (name) => {
		const parts = name.split(".");
		return parts.length > 1 ? parts.pop().toUpperCase() : "FILE";
	};
	const handleContinueToPreview = async () => {
		if (!selectedFile) return;
		setIsReadingFile(true);
		try {
			const buffer = await selectedFile.arrayBuffer();
			let result = null;
			try {
				const formData = new FormData();
				formData.append("file", selectedFile);
				const res = await fetch("/api/excel-upload/preview", {
					method: "POST",
					body: formData
				});
				if (res.ok) {
					const json = await res.json();
					if (json.success && json.summary) result = json;
				}
			} catch (apiErr) {
				console.warn("[Excel Modal] Server preview notice, running client parser:", apiErr);
			}
			if (!result) result = await parseAndPreviewExcelBookings(buffer, existingBookings);
			setPreviewResult(result);
			setStep("preview");
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Failed to read Excel file.";
			toast.error(msg);
			console.error("[Excel Read Error]", err);
		} finally {
			setIsReadingFile(false);
		}
	};
	const filteredChanges = (0, import_react.useMemo)(() => {
		if (!previewResult) return [];
		let list = previewResult.changes;
		if (statusFilter !== "all") list = list.filter((item) => item.status === statusFilter);
		if (searchFilter.trim()) {
			const q = searchFilter.trim().toLowerCase();
			list = list.filter((item) => item.bookingReference && item.bookingReference.toLowerCase().includes(q) || item.movementNumber && item.movementNumber.toLowerCase().includes(q) || item.fieldLabel.toLowerCase().includes(q) || item.previousValue.toLowerCase().includes(q) || item.newValue.toLowerCase().includes(q));
		}
		return list;
	}, [
		previewResult,
		statusFilter,
		searchFilter
	]);
	const handleConfirmAndApply = async () => {
		if (!previewResult) return;
		if (previewResult.changes.filter((c) => c.status === "Will Update").length === 0) {
			toast.info("No rows with new updates detected.");
			return;
		}
		setStep("processing");
		setCurrentStepIndex(0);
		setProcessingProgress(5);
		setProcessingStatusText("Initiating secure update pipeline...");
		try {
			setCurrentStepIndex(0);
			setProcessingProgress(15);
			await new Promise((r) => setTimeout(r, 200));
			setCurrentStepIndex(1);
			setProcessingProgress(30);
			await new Promise((r) => setTimeout(r, 200));
			setCurrentStepIndex(2);
			setProcessingProgress(45);
			await new Promise((r) => setTimeout(r, 200));
			setCurrentStepIndex(3);
			setProcessingProgress(60);
			await new Promise((r) => setTimeout(r, 200));
			setCurrentStepIndex(4);
			setProcessingProgress(75);
			let execResult = null;
			try {
				const res = await fetch("/api/excel-upload/confirm", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						confirmedChanges: previewResult.changes,
						userId
					})
				});
				if (res.ok) {
					const json = await res.json();
					if (json.success) execResult = json;
				}
			} catch (serverErr) {
				console.warn("[Excel Modal] Server confirm notice, executing client updater:", serverErr);
			}
			if (!execResult) execResult = await executeExcelBookingUpdates(previewResult.changes, userId, (processed, total, stepText) => {
				setProcessedCount(processed);
				setProcessingStatusText(stepText);
				const dynamicProgress = 75 + Math.round(processed / Math.max(total, 1) * 20);
				setProcessingProgress(Math.min(95, dynamicProgress));
			});
			setCurrentStepIndex(5);
			setProcessingProgress(100);
			setProcessingStatusText("Movement Lifecycle records refreshed!");
			await new Promise((r) => setTimeout(r, 350));
			setExecutionResult(execResult);
			setStep("result");
			onUploadSuccess?.();
			showPillToast.success(`Successfully updated ${execResult.totalUpdated} booking(s) across Movement Lifecycle.`, "Bookings Updated");
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Failed to execute Excel update.";
			toast.error(msg);
			console.error("[Excel Execute Error]", err);
			setStep("preview");
		}
	};
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [isOpen]);
	if (!isOpen) return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Excel Booking Upload Modal",
		className: "fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 ease-out",
			onClick: () => {
				if (step !== "processing") handleClose();
			},
			"aria-hidden": "true"
		}, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 359,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			ref: sheetElementRef,
			onClick: (e) => e.stopPropagation(),
			className: cn("relative z-10 w-full max-w-full sm:max-w-2xl bg-white shadow-2xl transition-all duration-300 max-h-[92vh] flex flex-col outline-none", "rounded-t-[28px] sm:rounded-[26px] border-t sm:border border-slate-200/90", step === "preview" && "sm:max-w-3xl lg:max-w-4xl"),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					ref: sheetHandleRef,
					"data-swipe-handle": "true",
					className: "flex sm:hidden justify-center pt-2.5 pb-2 cursor-grab active:cursor-grabbing touch-none select-none",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-12 h-1.5 rounded-full bg-slate-300/80 hover:bg-slate-400 transition-colors" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 382,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 377,
					columnNumber: 9
				}, this),
				step === "upload" && /* @__PURE__ */ (void 0)("div", {
					className: "flex flex-col h-full overflow-y-auto p-5 sm:p-7",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between pb-4 border-b border-slate-100",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "size-9 rounded-xl bg-[#E8F5F6] text-[#0FA3B1] flex items-center justify-center border border-[#0FA3B1]/20",
									children: /* @__PURE__ */ (void 0)(Upload, { className: "size-4.5" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 394,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 393,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
									className: "text-[17px] sm:text-[18px] font-bold text-slate-900 tracking-tight",
									children: "Upload Bookings"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 397,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-[12px] text-slate-500",
									children: "Bulk update Movement Lifecycle records via Excel spreadsheet."
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 400,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 396,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 392,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: handleClose,
								"aria-label": "Close",
								className: "size-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer",
								children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 411,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 405,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 391,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "py-6",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									onDragOver: (e) => {
										e.preventDefault();
										setIsDragging(true);
									},
									onDragLeave: () => setIsDragging(false),
									onDrop: handleFileDrop,
									onClick: () => fileInputRef.current?.click(),
									className: cn("relative group flex flex-col items-center justify-center p-8 sm:p-10 rounded-[24px] border-2 border-dashed transition-all duration-200 cursor-pointer text-center", isDragging ? "border-[#0FA3B1] bg-[#0FA3B1]/5 scale-[0.99]" : "border-slate-200/90 bg-slate-50/50 hover:border-[#0FA3B1]/50 hover:bg-slate-50/90", selectedFile && "border-emerald-300 bg-emerald-50/30"),
									children: [
										/* @__PURE__ */ (void 0)("input", {
											ref: fileInputRef,
											type: "file",
											accept: ".xlsx,.xls,.csv",
											onChange: handleFileSelect,
											className: "hidden"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 433,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "relative mb-4",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "size-16 sm:size-18 rounded-[20px] bg-gradient-to-tr from-[#3b5998] to-[#4c6ef5] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(76,110,245,0.4)] transition-transform duration-200 group-hover:scale-105",
												children: /* @__PURE__ */ (void 0)(FolderOpen, { className: "size-8 stroke-[1.8]" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 444,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 443,
												columnNumber: 19
											}, this), selectedFile && /* @__PURE__ */ (void 0)("div", {
												className: "absolute -bottom-1 -right-1 size-6 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-2 ring-white",
												children: /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 stroke-[2.5]" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 448,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 447,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 442,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("h4", {
											className: "text-[15px] sm:text-[16px] font-semibold text-slate-800 tracking-tight",
											children: "Drag your Excel file here to start uploading."
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 454,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[12.5px] text-slate-400 font-medium",
											children: "Supported formats: XLSX, XLS, CSV"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 459,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "my-4 flex items-center justify-center w-48 max-w-full",
											children: [
												/* @__PURE__ */ (void 0)("div", { className: "h-[1px] flex-1 bg-slate-200" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 465,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "px-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest",
													children: "OR"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 466,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("div", { className: "h-[1px] flex-1 bg-slate-200" }, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 469,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 464,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: (e) => {
												e.stopPropagation();
												fileInputRef.current?.click();
											},
											className: "rounded-xl bg-[#4c6ef5] hover:bg-[#3b5bdb] active:scale-98 px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_4px_12px_rgba(76,110,245,0.3)] transition-all cursor-pointer",
											children: "Browse files"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 473,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 417,
									columnNumber: 15
								}, this),
								selectedFile && /* @__PURE__ */ (void 0)("div", {
									className: "mt-4 flex items-center justify-between rounded-xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-2xs",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3 min-w-0 flex-1",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "size-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200/70 shrink-0",
											children: /* @__PURE__ */ (void 0)(FileSpreadsheet, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 490,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 489,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (void 0)("p", {
												className: "text-[13px] font-bold text-slate-900 truncate",
												children: selectedFile.name
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 493,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2 mt-0.5 text-[11px] text-slate-500 font-medium",
												children: [
													/* @__PURE__ */ (void 0)("span", {
														className: "rounded bg-slate-100 px-1.5 py-0.2 font-mono uppercase text-slate-700 font-bold",
														children: getFileExtension(selectedFile.name)
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 497,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("span", { children: "•" }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 500,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("span", { children: formatFileSize(selectedFile.size) }, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 501,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 496,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 492,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 488,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-1.5 shrink-0 pl-2",
										children: [/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => fileInputRef.current?.click(),
											className: "text-[12px] font-semibold text-[#0FA3B1] hover:text-[#078A99] px-2.5 py-1 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer",
											children: "Replace"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 507,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setSelectedFile(null),
											title: "Remove file",
											className: "size-7 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 flex items-center justify-center transition-colors cursor-pointer",
											children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 520,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 514,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 506,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 487,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "mt-4 rounded-xl bg-slate-50 border border-slate-200/60 p-3 text-[12px] text-slate-600 flex items-start gap-2.5",
									children: [/* @__PURE__ */ (void 0)(Info, { className: "size-4 text-[#0FA3B1] shrink-0 mt-0.5" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 528,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "leading-relaxed",
										children: [
											"Excel rows will be matched to existing bookings by",
											" ",
											/* @__PURE__ */ (void 0)("strong", { children: "Movement Number" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 531,
												columnNumber: 19
											}, this),
											", ",
											/* @__PURE__ */ (void 0)("strong", { children: "Booking Reference" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 531,
												columnNumber: 53
											}, this),
											", or",
											" ",
											/* @__PURE__ */ (void 0)("strong", { children: "Container Number" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 532,
												columnNumber: 19
											}, this),
											". Empty cells will never overwrite existing database data."
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 529,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 527,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 416,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-auto pt-4 border-t border-slate-100 flex items-center justify-end gap-2.5",
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: handleClose,
								className: "rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer",
								children: "Cancel"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 540,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								disabled: !selectedFile || isReadingFile,
								onClick: handleContinueToPreview,
								className: "flex items-center gap-1.5 rounded-xl bg-[#0FA3B1] hover:bg-[#078A99] disabled:opacity-50 disabled:cursor-not-allowed px-5 py-2.5 text-[13px] font-bold text-white shadow-xs transition-all cursor-pointer",
								children: isReadingFile ? /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 555,
									columnNumber: 21
								}, this), "Reading Excel..."] }, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 554,
									columnNumber: 19
								}, this) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: ["Continue", /* @__PURE__ */ (void 0)(ArrowRight, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 561,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 559,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 547,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 539,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 389,
					columnNumber: 11
				}, this),
				step === "preview" && previewResult && /* @__PURE__ */ (void 0)("div", {
					className: "flex flex-col h-full overflow-hidden p-5 sm:p-7",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between pb-4 border-b border-slate-100",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "size-9 rounded-xl bg-[#E8F5F6] text-[#0FA3B1] flex items-center justify-center border border-[#0FA3B1]/20",
									children: /* @__PURE__ */ (void 0)(FileSpreadsheet, { className: "size-4.5" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 578,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 577,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
									className: "text-[17px] sm:text-[18px] font-bold text-slate-900 tracking-tight",
									children: "Upload Preview"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 581,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-[12px] text-slate-500",
									children: "Verify matched bookings and field comparisons before applying changes."
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 584,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 580,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 576,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: handleClose,
								"aria-label": "Close",
								className: "size-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer",
								children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 595,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 589,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 575,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 py-4",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 text-center",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[10.5px] font-semibold text-slate-500 uppercase tracking-wider block",
										children: "Total Rows"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 602,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[18px] font-bold text-slate-800",
										children: previewResult.summary.totalRows
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 605,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 601,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-blue-200/80 bg-blue-50/50 p-2.5 text-center",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[10.5px] font-semibold text-blue-700 uppercase tracking-wider block",
										children: "Matched"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 610,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[18px] font-bold text-blue-800",
										children: previewResult.summary.matchedCount
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 613,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 609,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-2.5 text-center",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[10.5px] font-semibold text-emerald-700 uppercase tracking-wider block",
										children: "With Changes"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 618,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[18px] font-bold text-emerald-800",
										children: previewResult.summary.rowsWithChangesCount
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 621,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 617,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-slate-200/80 bg-slate-50/50 p-2.5 text-center",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[10.5px] font-semibold text-slate-600 uppercase tracking-wider block",
										children: "Unchanged"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 626,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[18px] font-bold text-slate-700",
										children: previewResult.summary.unchangedCount
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 629,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 625,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-amber-200/80 bg-amber-50/50 p-2.5 text-center",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[10.5px] font-semibold text-amber-700 uppercase tracking-wider block",
										children: "Unmatched"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 634,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[18px] font-bold text-amber-800",
										children: previewResult.summary.unmatchedCount
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 637,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 633,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-rose-200/80 bg-rose-50/50 p-2.5 text-center",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[10.5px] font-semibold text-rose-700 uppercase tracking-wider block",
										children: "Invalid / Errors"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 642,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[18px] font-bold text-rose-800",
										children: previewResult.summary.invalidCount
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 645,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 641,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 600,
							columnNumber: 13
						}, this),
						previewResult.summary.unmatchedCount > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "mb-3 rounded-xl bg-amber-50/90 border border-amber-200/80 p-3 text-[12px] text-amber-900 flex items-start gap-2.5",
							children: [/* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-4 text-amber-600 shrink-0 mt-0.5" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 654,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("p", { children: [
								/* @__PURE__ */ (void 0)("strong", { children: [previewResult.summary.unmatchedCount, " record(s)"] }, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 656,
									columnNumber: 19
								}, this),
								" do not match any existing movement or booking reference in the database. As per security rules, they ",
								/* @__PURE__ */ (void 0)("strong", { children: "will not be created" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 658,
									columnNumber: 24
								}, this),
								" automatically."
							] }, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 655,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 653,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex flex-wrap items-center justify-between gap-2 pb-2",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[11px] sm:text-xs",
								children: [
									/* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setStatusFilter("all"),
										className: cn("px-2.5 py-1 rounded-lg font-semibold transition-all shrink-0 cursor-pointer", statusFilter === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"),
										children: [
											"All (",
											previewResult.changes.length,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 666,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setStatusFilter("Will Update"),
										className: cn("px-2.5 py-1 rounded-lg font-semibold transition-all shrink-0 cursor-pointer", statusFilter === "Will Update" ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"),
										children: [
											"Will Update (",
											previewResult.summary.rowsWithChangesCount,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 678,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setStatusFilter("Keep Existing"),
										className: cn("px-2.5 py-1 rounded-lg font-semibold transition-all shrink-0 cursor-pointer", statusFilter === "Keep Existing" ? "bg-slate-700 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"),
										children: "Keep Existing"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 690,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setStatusFilter("Unchanged"),
										className: cn("px-2.5 py-1 rounded-lg font-semibold transition-all shrink-0 cursor-pointer", statusFilter === "Unchanged" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 hover:bg-blue-100"),
										children: [
											"Unchanged (",
											previewResult.summary.unchangedCount,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 702,
										columnNumber: 17
									}, this),
									previewResult.summary.unmatchedCount > 0 && /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setStatusFilter("Unmatched"),
										className: cn("px-2.5 py-1 rounded-lg font-semibold transition-all shrink-0 cursor-pointer", statusFilter === "Unmatched" ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-700 hover:bg-amber-100"),
										children: [
											"Unmatched (",
											previewResult.summary.unmatchedCount,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 715,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 665,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("input", {
								type: "text",
								value: searchFilter,
								onChange: (e) => setSearchFilter(e.target.value),
								placeholder: "Filter preview table...",
								className: "h-8 px-2.5 text-[12px] rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0FA3B1]"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 731,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 664,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex-1 overflow-y-auto border border-slate-200/80 rounded-xl min-h-[220px] max-h-[360px] bg-white",
							children: /* @__PURE__ */ (void 0)("table", {
								className: "w-full text-left border-collapse text-[12.5px]",
								children: [/* @__PURE__ */ (void 0)("thead", {
									className: "sticky top-0 bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold text-[11px] uppercase tracking-wider z-10",
									children: /* @__PURE__ */ (void 0)("tr", { children: [
										/* @__PURE__ */ (void 0)("th", {
											className: "px-3.5 py-2.5",
											children: "Booking Reference / Movement"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 745,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("th", {
											className: "px-3.5 py-2.5",
											children: "Field"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 746,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("th", {
											className: "px-3.5 py-2.5",
											children: "Previous Value"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 747,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("th", {
											className: "px-3.5 py-2.5",
											children: "New Value"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 748,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("th", {
											className: "px-3.5 py-2.5 text-right",
											children: "Status"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 749,
											columnNumber: 21
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 744,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 743,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("tbody", {
									className: "divide-y divide-slate-100 text-slate-700",
									children: filteredChanges.length === 0 ? /* @__PURE__ */ (void 0)("tr", { children: /* @__PURE__ */ (void 0)("td", {
										colSpan: 5,
										className: "py-8 text-center text-slate-400 text-xs",
										children: "No rows found matching current filter."
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 755,
										columnNumber: 23
									}, this) }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 754,
										columnNumber: 21
									}, this) : filteredChanges.map((item) => /* @__PURE__ */ (void 0)("tr", {
										className: cn("transition-colors", item.status === "Will Update" && "bg-emerald-50/20 hover:bg-emerald-50/40", item.status === "Unmatched" && "bg-amber-50/20 hover:bg-amber-50/40", item.status === "Invalid" && "bg-rose-50/20 hover:bg-rose-50/40", item.status === "Unchanged" && "hover:bg-slate-50/50"),
										children: [
											/* @__PURE__ */ (void 0)("td", {
												className: "px-3.5 py-2.5 font-bold text-slate-900 font-mono text-[12px]",
												children: item.bookingReference || item.movementNumber || "—"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 772,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("td", {
												className: "px-3.5 py-2.5 font-medium text-slate-700",
												children: item.fieldLabel
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 775,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("td", {
												className: "px-3.5 py-2.5 text-slate-500 font-mono text-[11.5px]",
												children: item.previousValue
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 778,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("td", {
												className: "px-3.5 py-2.5",
												children: /* @__PURE__ */ (void 0)("span", {
													className: cn("font-mono text-[11.5px] font-semibold", item.status === "Will Update" ? "text-emerald-700 font-bold" : item.newValue === "Empty" ? "text-slate-400 italic font-normal" : "text-slate-800"),
													children: item.newValue
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 782,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 781,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("td", {
												className: "px-3.5 py-2.5 text-right whitespace-nowrap",
												children: /* @__PURE__ */ (void 0)("span", {
													className: cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold shadow-2xs", item.status === "Will Update" && "bg-emerald-50 text-emerald-700 border border-emerald-200/80", item.status === "Keep Existing" && "bg-slate-100 text-slate-600 border border-slate-200/80", item.status === "Unchanged" && "bg-blue-50 text-blue-700 border border-blue-200/60", item.status === "Unmatched" && "bg-amber-50 text-amber-800 border border-amber-200/80", item.status === "Invalid" && "bg-rose-50 text-rose-700 border border-rose-200/80"),
													children: [
														item.status === "Will Update" && /* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3 text-emerald-600" }, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 812,
															columnNumber: 31
														}, this),
														item.status === "Keep Existing" && /* @__PURE__ */ (void 0)(Info, { className: "size-3 text-slate-500" }, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 815,
															columnNumber: 31
														}, this),
														item.status === "Unmatched" && /* @__PURE__ */ (void 0)(Ban, { className: "size-3 text-amber-600" }, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 818,
															columnNumber: 31
														}, this),
														item.status === "Invalid" && /* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-3 text-rose-600" }, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 821,
															columnNumber: 31
														}, this),
														item.status
													]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 796,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 795,
												columnNumber: 25
											}, this)
										]
									}, item.id, true, {
										fileName: _jsxFileName$8,
										lineNumber: 761,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 752,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 742,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 741,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-4 pt-3 border-t border-slate-100 flex items-center justify-between",
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setStep("upload"),
								className: "flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-[12.5px] font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer",
								children: [/* @__PURE__ */ (void 0)(ArrowLeft, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 840,
									columnNumber: 17
								}, this), "Back"]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 835,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: handleClose,
									className: "rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-[12.5px] font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer",
									children: "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 845,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									disabled: previewResult.summary.rowsWithChangesCount === 0,
									onClick: handleConfirmAndApply,
									className: "flex items-center gap-1.5 rounded-xl bg-[#0FA3B1] hover:bg-[#078A99] disabled:opacity-50 disabled:cursor-not-allowed px-4.5 py-2 text-[12.5px] font-bold text-white shadow-xs transition-all cursor-pointer",
									children: [
										/* @__PURE__ */ (void 0)(Check, { className: "size-3.5 stroke-[2.5]" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 858,
											columnNumber: 19
										}, this),
										"Confirm & Update (",
										previewResult.summary.rowsWithChangesCount,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 852,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 844,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 834,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 573,
					columnNumber: 11
				}, this),
				step === "processing" && /* @__PURE__ */ (void 0)("div", {
					className: "flex flex-col h-full p-6 sm:p-8 text-center items-center justify-center",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "relative mb-5",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "size-16 rounded-full bg-[#E8F5F6] flex items-center justify-center text-[#0FA3B1] animate-pulse",
								children: /* @__PURE__ */ (void 0)(RefreshCw, { className: "size-8 animate-spin" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 874,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 873,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", { className: "absolute inset-0 rounded-full border-2 border-[#0FA3B1]/20 animate-ping opacity-40" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 876,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 872,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("h3", {
							className: "text-[19px] font-bold text-slate-900 tracking-tight",
							children: "Updating Movement Bookings"
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 879,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-[13px] text-slate-500 max-w-sm",
							children: "Please wait while the system validates, matches, and persists updates securely."
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 882,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-6 w-full max-w-md",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between text-[12px] font-semibold text-slate-600 mb-1.5",
								children: [/* @__PURE__ */ (void 0)("span", { children: processingStatusText || "Processing records..." }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 889,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "font-mono text-[#0FA3B1]",
									children: [processingProgress, "%"]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 890,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 888,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "h-2.5 w-full rounded-full bg-slate-100 overflow-hidden",
								children: /* @__PURE__ */ (void 0)("div", {
									className: "h-full rounded-full bg-gradient-to-r from-[#0FA3B1] to-[#078A99] transition-all duration-300 ease-out",
									style: { width: `${processingProgress}%` }
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 893,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 892,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 887,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-6 w-full max-w-md rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-left divide-y divide-slate-100/80",
							children: PROCESSING_STEPS.map((stepLabel, idx) => {
								const isComplete = idx < currentStepIndex;
								const isCurrent = idx === currentStepIndex;
								const isPending = idx > currentStepIndex;
								return /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between py-2 text-[12px]",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: cn("font-medium", isComplete && "text-slate-800 font-semibold", isCurrent && "text-[#0FA3B1] font-bold", isPending && "text-slate-400"),
										children: [
											idx + 1,
											". ",
											stepLabel
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 912,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "shrink-0",
										children: [
											isComplete && /* @__PURE__ */ (void 0)(CircleCheck, { className: "size-4 text-emerald-500" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 923,
												columnNumber: 38
											}, this),
											isCurrent && /* @__PURE__ */ (void 0)(LoaderCircle, { className: "size-4 text-[#0FA3B1] animate-spin" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 924,
												columnNumber: 37
											}, this),
											isPending && /* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-slate-300 block mr-1" }, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 926,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 922,
										columnNumber: 21
									}, this)]
								}, stepLabel, true, {
									fileName: _jsxFileName$8,
									lineNumber: 908,
									columnNumber: 19
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 901,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 870,
					columnNumber: 11
				}, this),
				step === "result" && executionResult && /* @__PURE__ */ (void 0)("div", {
					className: "flex flex-col h-full overflow-y-auto p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "text-center flex flex-col items-center",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "size-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center ring-8 ring-emerald-50/50 mb-3.5",
									children: /* @__PURE__ */ (void 0)(FileCheck, { className: "size-8 stroke-[2.2]" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 944,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 943,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("h3", {
									className: "text-[20px] font-bold text-slate-900 tracking-tight",
									children: "Bookings Updated Successfully"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 947,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "mt-1 text-[13px] text-slate-500 max-w-md",
									children: "The Movement Lifecycle records have been updated in real-time. All audit logs and timeline events have been recorded."
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 950,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 941,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-center",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider block",
										children: "Total Processed"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 959,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[20px] font-bold text-slate-800",
										children: executionResult.totalProcessed
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 962,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 958,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-emerald-200/80 bg-emerald-50/60 p-3 text-center",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block",
										children: "Bookings Updated"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 967,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[20px] font-bold text-emerald-700",
										children: executionResult.totalUpdated
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 970,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 966,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-center",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[11px] font-semibold text-slate-600 uppercase tracking-wider block",
										children: "Unchanged Rows"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 975,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[20px] font-bold text-slate-700",
										children: executionResult.totalUnchanged
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 978,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 974,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-amber-200/80 bg-amber-50/60 p-3 text-center",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[11px] font-semibold text-amber-700 uppercase tracking-wider block",
										children: "Skipped / Kept"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 983,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[20px] font-bold text-amber-800",
										children: executionResult.totalSkippedOrInvalid
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 986,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 982,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 957,
							columnNumber: 13
						}, this),
						executionResult.errors.length > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "mt-4 rounded-xl border border-rose-200 bg-rose-50/50 p-3.5 text-left",
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setShowErrorDetails((prev) => !prev),
								className: "flex items-center justify-between w-full text-[12.5px] font-semibold text-rose-800 cursor-pointer",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-4 text-rose-600" }, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 1001,
											columnNumber: 21
										}, this),
										executionResult.errors.length,
										" Notice(s) or Warning(s)"
									]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 1e3,
									columnNumber: 19
								}, this), showErrorDetails ? /* @__PURE__ */ (void 0)(ChevronUp, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 1005,
									columnNumber: 21
								}, this) : /* @__PURE__ */ (void 0)(ChevronDown, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 1007,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 995,
								columnNumber: 17
							}, this), showErrorDetails && /* @__PURE__ */ (void 0)("ul", {
								className: "mt-2.5 space-y-1 text-[11.5px] text-rose-700 list-disc list-inside",
								children: executionResult.errors.map((err, i) => /* @__PURE__ */ (void 0)("li", { children: err }, i, false, {
									fileName: _jsxFileName$8,
									lineNumber: 1013,
									columnNumber: 23
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 1011,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 994,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-8 pt-4 border-t border-slate-100 flex items-center justify-center",
							children: /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: handleClose,
								className: "w-full sm:w-auto min-w-[180px] rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-98 px-6 py-2.5 text-[13px] font-bold text-white shadow-xs transition-all cursor-pointer",
								children: "Close & View Movements"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 1022,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 1021,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 940,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 366,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 352,
		columnNumber: 5
	}, this), document.body);
}
var _jsxFileName$7 = "/app/applet/src/components/nashmia/movements/EditMovementModal.tsx";
var LIFECYCLE_STATUS_OPTIONS = [
	{
		value: "Booking Requested",
		label: "Booking Requested (Pending Quote)"
	},
	{
		value: "Confirmed",
		label: "Booking Confirmed"
	},
	{
		value: "In Transit",
		label: "In Transit / Sailing"
	},
	{
		value: "Delivered",
		label: "Delivered"
	},
	{
		value: "Draft",
		label: "Draft"
	},
	{
		value: "Cancelled",
		label: "Cancelled"
	}
];
function EditMovementModal({ isOpen, onClose, movement, onUpdated }) {
	const queryClient = useQueryClient();
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
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
		onDismiss: onClose,
		enabled: isMobile && isOpen
	});
	const [pol, setPol] = (0, import_react.useState)("");
	const [pod, setPod] = (0, import_react.useState)("");
	const [vessel, setVessel] = (0, import_react.useState)("");
	const [voyageNumber, setVoyageNumber] = (0, import_react.useState)("");
	const [etd, setEtd] = (0, import_react.useState)("");
	const [eta, setEta] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("Booking Requested");
	const [totalFreight, setTotalFreight] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (movement) {
			setPol(movement.pol !== "Pending" ? movement.pol : "");
			setPod(movement.pod !== "Pending" ? movement.pod : "");
			setVessel(movement.vessel !== "Pending" ? movement.vessel : "");
			setVoyageNumber("");
			if (movement.etd && movement.etd !== "Pending" && movement.etd !== "—") {
				const parsedEtd = new Date(movement.etd);
				if (!isNaN(parsedEtd.getTime())) setEtd(parsedEtd.toISOString().slice(0, 10));
				else setEtd("");
			} else setEtd("");
			if (movement.eta && movement.eta !== "Pending" && movement.eta !== "—") {
				const parsedEta = new Date(movement.eta);
				if (!isNaN(parsedEta.getTime())) setEta(parsedEta.toISOString().slice(0, 10));
				else setEta("");
			} else setEta("");
			setStatus(movement.stage || "Booking Requested");
			if (movement.rate) {
				const num = movement.rate.replace(/[^0-9.]/g, "");
				setTotalFreight(num || "");
			} else setTotalFreight("");
		}
	}, [movement, isOpen]);
	if (!isOpen || !movement) return null;
	const targetId = movement.id || movement.ref;
	const handleSave = async (e) => {
		e.preventDefault();
		if (!targetId) {
			toast.error("Movement ID or Reference is missing");
			return;
		}
		setIsSaving(true);
		try {
			const dbStatus = toDbBookingStatus(status);
			const updates = {
				origin: pol.trim() || null,
				destination: pod.trim() || null,
				pol_name: pol.trim() || null,
				pod_name: pod.trim() || null,
				pol_code: pol.trim().slice(0, 5).toUpperCase() || null,
				pod_code: pod.trim().slice(0, 5).toUpperCase() || null,
				vessel_name: vessel.trim() || null,
				voyage_number: voyageNumber.trim() || null,
				etd: etd || null,
				eta: eta || null,
				status: dbStatus,
				movement_status: toDbMovementStatus(status),
				is_movement_confirmed: dbStatus === "Confirmed",
				total_freight: totalFreight ? Number(totalFreight) : null
			};
			await updateBookingDetailsInSupabase(targetId, updates);
			queryClient.invalidateQueries({ queryKey: ["dashboard-bookings"] });
			queryClient.invalidateQueries({ queryKey: ["dashboard-data"] });
			queryClient.invalidateQueries({ queryKey: ["bookings"] });
			queryClient.invalidateQueries({ queryKey: ["movements"] });
			if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: {
				updated: true,
				id: targetId
			} }));
			toast.success("Movement Updated Successfully!", { description: `Changes to ${movement.ref} have been persisted in the database.` });
			onUpdated?.();
			onClose();
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Failed to update movement";
			toast.error(msg);
		} finally {
			setIsSaving(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			ref: elementRef,
			className: cn("relative z-10 w-full max-w-lg bg-white shadow-2xl border-t sm:border border-slate-200 text-slate-900 overflow-y-auto outline-none transition-all", "max-h-[92vh] rounded-t-[28px] rounded-b-none p-5 pb-[max(2rem,env(safe-area-inset-bottom))] animate-in slide-in-from-bottom duration-240 ease-[cubic-bezier(0.16,1,0.3,1)]", "sm:rounded-3xl sm:p-6 sm:pb-6 sm:slide-in-from-bottom-0 sm:zoom-in-95 sm:duration-150 sm:max-h-[92vh]"),
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					ref: handleRef,
					"data-swipe-handle": "true",
					className: "group mx-auto -mt-2 mb-2 flex h-7 w-full max-w-[180px] cursor-grab touch-none items-center justify-center sm:hidden active:cursor-grabbing select-none",
					"aria-label": "Drag down to dismiss",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300 transition-all duration-150 group-hover:bg-slate-400 group-active:scale-x-110 group-active:bg-slate-500" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 198,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 192,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start justify-between border-b border-slate-100 pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid size-11 place-items-center rounded-2xl bg-[#E8F1F3] text-[#0FA3B1]",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-5.5" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 205,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 204,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-base font-bold text-slate-900 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Update Movement" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 209,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700",
								children: movement.ref
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 210,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 208,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-slate-500 mt-0.5",
							children: "Edit real database fields for this logistics lifecycle record."
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 214,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 207,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 203,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: onClose,
						className: "rounded-full p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 224,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 219,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 202,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: handleSave,
					className: "mt-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-2 gap-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 234,
									columnNumber: 17
								}, this), "Port of Loading (POL)"]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 233,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								value: pol,
								onChange: (e) => setPol(e.target.value),
								placeholder: "e.g. FXT (Felixstowe)",
								className: "w-full h-10 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0FA3B1] focus:outline-none transition"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 237,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 232,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 247,
									columnNumber: 17
								}, this), "Port of Discharge (POD)"]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 246,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								value: pod,
								onChange: (e) => setPod(e.target.value),
								placeholder: "e.g. KHI (Karachi)",
								className: "w-full h-10 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0FA3B1] focus:outline-none transition"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 250,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 245,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 231,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-2 gap-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 264,
									columnNumber: 17
								}, this), "Vessel Name"]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 263,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								value: vessel,
								onChange: (e) => setVessel(e.target.value),
								placeholder: "e.g. MSC ISABELLA",
								className: "w-full h-10 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0FA3B1] focus:outline-none transition"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 267,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 262,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layers, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 277,
									columnNumber: 17
								}, this), "Voyage Number"]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 276,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								value: voyageNumber,
								onChange: (e) => setVoyageNumber(e.target.value),
								placeholder: "e.g. V.2410",
								className: "w-full h-10 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0FA3B1] focus:outline-none transition"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 280,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 275,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 261,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-2 gap-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 294,
									columnNumber: 17
								}, this), "ETD (Departure)"]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 293,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "date",
								value: etd,
								onChange: (e) => setEtd(e.target.value),
								className: "w-full h-10 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0FA3B1] focus:outline-none transition"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 297,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 292,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 306,
									columnNumber: 17
								}, this), "ETA (Arrival)"]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 305,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "date",
								value: eta,
								onChange: (e) => setEta(e.target.value),
								className: "w-full h-10 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0FA3B1] focus:outline-none transition"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 309,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 304,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 291,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-2 gap-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 322,
									columnNumber: 17
								}, this), "Lifecycle Status"]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 321,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
								value: status,
								onChange: (e) => setStatus(e.target.value),
								className: "w-full h-10 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0FA3B1] focus:outline-none transition cursor-pointer font-medium",
								children: LIFECYCLE_STATUS_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: opt.value,
									children: opt.label
								}, opt.value, false, {
									fileName: _jsxFileName$7,
									lineNumber: 331,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 325,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 320,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DollarSign, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 339,
									columnNumber: 17
								}, this), "Total Freight ($ USD)"]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 338,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "number",
								value: totalFreight,
								onChange: (e) => setTotalFreight(e.target.value),
								placeholder: "e.g. 2450",
								min: "0",
								step: "50",
								className: "w-full h-10 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0FA3B1] focus:outline-none transition"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 342,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 337,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 319,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: onClose,
								className: "h-10 px-4 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer transition",
								children: "Cancel"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 356,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "submit",
								disabled: isSaving,
								className: "h-10 px-5 rounded-xl bg-black hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md hover:shadow-lg transition cursor-pointer disabled:opacity-50",
								children: isSaving ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-3.5 animate-spin" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 370,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Saving to DB..." }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 371,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 369,
									columnNumber: 17
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Save Database Changes" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 374,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 363,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 355,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 229,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 180,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 176,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "/app/applet/src/components/nashmia/skeletons/DashboardSkeletons.tsx";
function KpiGridSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6 skeleton-container",
		children: [
			1,
			2,
			3,
			4,
			5,
			6
		].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative overflow-hidden rounded-[20px] border border-slate-100/90 bg-white p-4 sm:p-5 shadow-xs flex flex-col justify-between h-[132px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-8 rounded-xl bg-slate-100" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 13,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-12 rounded-full bg-slate-100" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 14,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 12,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3 w-16 bg-slate-100" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 17,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-6 w-20 bg-slate-200/80" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 18,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 16,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-2.5 w-24 bg-slate-100/80" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 20,
					columnNumber: 11
				}, this)
			]
		}, i, true, {
			fileName: _jsxFileName$6,
			lineNumber: 8,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
function LifecycleSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative overflow-hidden rounded-[24px] border border-slate-100/90 bg-white p-5 sm:p-6 shadow-xs space-y-5 skeleton-container",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-5 w-44 bg-slate-200/80" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 33,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-56 bg-slate-100" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 34,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 32,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-8 w-20 rounded-xl bg-slate-100" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 37,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-8 w-20 rounded-xl bg-slate-100" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 38,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 36,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 31,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3",
			children: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8
			].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-2xl border border-slate-100 bg-slate-50/50 p-3 sm:p-3.5 space-y-2.5 flex flex-col justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-6 rounded-full bg-slate-200/80" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 50,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-5 rounded-full bg-slate-200/60" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 51,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 49,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3 w-full bg-slate-200/70" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 53,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-1.5 w-full rounded-full bg-slate-200/60" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 54,
						columnNumber: 13
					}, this)
				]
			}, i, true, {
				fileName: _jsxFileName$6,
				lineNumber: 45,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 43,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
function RecentMovementsSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative overflow-hidden rounded-[24px] border border-slate-100/90 bg-white p-5 sm:p-6 shadow-xs space-y-4 skeleton-container",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-5 w-44 bg-slate-200/80" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 68,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-56 bg-slate-100" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 69,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 67,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-8 w-24 rounded-xl bg-slate-100" }, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 71,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 66,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "min-w-[760px] divide-y divide-slate-100",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-12 gap-3 pb-2.5 text-xs font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "col-span-2 h-3.5 w-16 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 78,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "col-span-3 h-3.5 w-24 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 79,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "col-span-2 h-3.5 w-16 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 80,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "col-span-2 h-3.5 w-20 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 81,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "col-span-2 h-3.5 w-16 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 82,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "col-span-1 h-3.5 w-8 ml-auto bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 83,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 77,
					columnNumber: 11
				}, this), [
					1,
					2,
					3,
					4,
					5
				].map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-12 gap-3 py-3 items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "col-span-2 h-4 w-20 rounded bg-slate-200/80" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 88,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "col-span-3 h-4 w-28 bg-slate-200/70" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 89,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "col-span-2 h-4 w-16 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 90,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "col-span-2 h-4 w-20 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 91,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "col-span-2 h-5 w-20 rounded-full bg-slate-200/70" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 92,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "col-span-1 size-6 rounded-lg ml-auto bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 93,
							columnNumber: 15
						}, this)
					]
				}, row, true, {
					fileName: _jsxFileName$6,
					lineNumber: 87,
					columnNumber: 13
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 76,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 75,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 64,
		columnNumber: 5
	}, this);
}
function NeedsAttentionSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative overflow-hidden rounded-[24px] border border-slate-100/90 bg-white p-5 sm:p-6 shadow-xs space-y-3 skeleton-container",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-5 w-32 bg-slate-200/80" }, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 106,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-4 w-6 rounded-full bg-slate-100" }, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 107,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 105,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "space-y-2.5",
			children: [
				1,
				2,
				3
			].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "size-7 rounded-lg bg-slate-200/70" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 116,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-3.5 w-32 bg-slate-200/70" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 118,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-2.5 w-20 bg-slate-100" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 119,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 117,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 115,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-6 w-16 rounded-lg bg-slate-200/60" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 122,
					columnNumber: 13
				}, this)]
			}, i, true, {
				fileName: _jsxFileName$6,
				lineNumber: 111,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 109,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 104,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/app/applet/src/components/nashmia/search/GlobalSearch.tsx";
var QUICK_ACTIONS = [
	{
		id: "act-new-booking",
		category: "action",
		title: "Create New Booking",
		subtitle: "Launch full lifecycle freight container booking",
		meta: "Quick Action",
		badge: {
			label: "New",
			variant: "cyan"
		},
		actionUrl: "/new-booking"
	},
	{
		id: "act-requests",
		category: "action",
		title: "Quotation Requests & RFQs",
		subtitle: "Multi-forwarder rate bidding and freight contracts",
		meta: "Quotations",
		badge: {
			label: "RFQ",
			variant: "indigo"
		},
		actionUrl: "/requests"
	},
	{
		id: "act-emails",
		category: "action",
		title: "AI Email Operations Hub",
		subtitle: "Automated forwarder confirmations & booking threads",
		meta: "AI Communications",
		badge: {
			label: "AI Mail",
			variant: "cyan"
		},
		actionUrl: "/emails"
	},
	{
		id: "act-buyers",
		category: "action",
		title: "Buyers & Consignees Directory",
		subtitle: "Manage buyer accounts, shipment history & destinations",
		meta: "Directory",
		badge: {
			label: "Accounts",
			variant: "slate"
		},
		actionUrl: "/buyers"
	},
	{
		id: "act-suppliers",
		category: "action",
		title: "Suppliers & Load Points Directory",
		subtitle: "Collection warehouses, CFS terminals & vendor contacts",
		meta: "Vendors",
		badge: {
			label: "Pickup Points",
			variant: "amber"
		},
		actionUrl: "/suppliers"
	},
	{
		id: "act-forwarders",
		category: "action",
		title: "Forwarders & Shipping Lines",
		subtitle: "Freight carriers, contracts, ratings and allocations",
		meta: "Carriers",
		badge: {
			label: "Lines",
			variant: "emerald"
		},
		actionUrl: "/forwarders"
	},
	{
		id: "act-documents",
		category: "action",
		title: "Document Vault & Bill of Lading",
		subtitle: "Export declarations, packing lists & commercial invoices",
		meta: "Compliance",
		badge: {
			label: "Docs",
			variant: "slate"
		},
		actionUrl: "/documents"
	},
	{
		id: "act-settings",
		category: "action",
		title: "System & Profile Settings",
		subtitle: "Organization profile, notifications and preferences",
		meta: "Config",
		badge: {
			label: "Admin",
			variant: "slate"
		},
		actionUrl: "/settings"
	}
];
var GlobalSearch = (0, import_react.memo)(function GlobalSearch({ variant = "dashboard", className, placeholder, onSelectMovement }) {
	const navigate = useNavigate();
	const { user } = useAuth();
	const userId = user?.id;
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(0);
	const [activeMovementDrawerId, setActiveMovementDrawerId] = (0, import_react.useState)(null);
	const [activeMovementDrawerRef, setActiveMovementDrawerRef] = (0, import_react.useState)(null);
	const containerRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const listRef = (0, import_react.useRef)(null);
	const { data: rawBookings = [] } = useQuery({
		queryKey: ["global-search-bookings", userId],
		queryFn: () => fetchBookingsFromSupabase(userId),
		staleTime: 3e4
	});
	const { data: rawBuyers = [] } = useQuery({
		queryKey: ["global-search-buyers", userId],
		queryFn: () => fetchBuyersFromSupabase(userId),
		staleTime: 6e4
	});
	const { data: rawSuppliers = [] } = useQuery({
		queryKey: ["global-search-suppliers", userId],
		queryFn: () => fetchSuppliersFromSupabase(userId),
		staleTime: 6e4
	});
	const { data: rawForwarders = [] } = useQuery({
		queryKey: ["global-search-forwarders", userId],
		queryFn: () => fetchForwardersFromSupabase(userId),
		staleTime: 6e4
	});
	const movementsList = (0, import_react.useMemo)(() => {
		if (rawBookings && rawBookings.length > 0) return rawBookings.map(reconcileBookingWithConfirmations);
		return [];
	}, [rawBookings]);
	const buyersList = (0, import_react.useMemo)(() => {
		return rawBuyers || [];
	}, [rawBuyers]);
	const suppliersList = (0, import_react.useMemo)(() => {
		return rawSuppliers || [];
	}, [rawSuppliers]);
	const searchResults = (0, import_react.useMemo)(() => {
		const q = searchQuery.trim().toLowerCase();
		if (!q) return QUICK_ACTIONS.slice(0, 6);
		const items = [];
		movementsList.filter((m) => {
			const ref = (m.movement_number || m.booking_reference || m.ref || m.id || "").toLowerCase();
			const buyer = (m.buyer_name || m.buyer?.company_name || m.buyer || "").toLowerCase();
			const supplier = (m.supplier_name || m.supplier?.company_name || m.supplier || "").toLowerCase();
			const forwarder = (m.forwarder_name || m.forwarder?.company_name || m.forwarder || "").toLowerCase();
			const pol = (m.origin_port || m.pol || "").toLowerCase();
			const pod = (m.destination_port || m.pod || "").toLowerCase();
			const vessel = (m.vessel_name || m.vessel || "").toLowerCase();
			const stage = (m.status || m.stage || "").toLowerCase();
			return ref.includes(q) || buyer.includes(q) || supplier.includes(q) || forwarder.includes(q) || pol.includes(q) || pod.includes(q) || vessel.includes(q) || stage.includes(q);
		}).slice(0, 5).forEach((m) => {
			const ref = m.movement_number || m.booking_reference || m.ref || (m.id ? `MOV-${String(m.id).slice(0, 8).toUpperCase()}` : "Movement");
			const buyer = m.buyer_name || m.buyer?.company_name || m.buyer || "—";
			const supplier = m.supplier_name || m.supplier?.company_name || m.supplier || "—";
			const forwarder = m.forwarder_name || m.forwarder?.company_name || m.forwarder || "Unassigned";
			const pol = (m.origin_port || m.pol || "").toUpperCase();
			const pod = (m.destination_port || m.pod || "").toUpperCase();
			const vessel = m.vessel_name || m.vessel || "—";
			const stage = m.status || m.stage || "Booking Requested";
			const isConfirmed = stage.toLowerCase().includes("confirmed") || m.confirmation_status === "CONFIRMED";
			const laneText = pol && pod ? ` · ${pol} → ${pod}` : "";
			items.push({
				id: `mov-${m.id || ref}`,
				category: "movement",
				title: `${ref}${laneText}`,
				subtitle: `${buyer} • ${supplier} • Forwarder: ${forwarder} • Vessel: ${vessel}`,
				meta: pol && pod ? `${pol} → ${pod}` : void 0,
				badge: {
					label: isConfirmed ? "Confirmed" : stage,
					variant: isConfirmed ? "cyan" : "slate"
				},
				data: {
					id: m.id,
					ref
				}
			});
		});
		buyersList.filter((b) => {
			const name = (b.name || b.company || "").toLowerCase();
			const contact = (b.contact_person || b.contactPerson || "").toLowerCase();
			const country = (b.country || "").toLowerCase();
			const code = (b.code || "").toLowerCase();
			const email = (b.email || "").toLowerCase();
			return name.includes(q) || contact.includes(q) || country.includes(q) || code.includes(q) || email.includes(q);
		}).slice(0, 3).forEach((b) => {
			const name = b.name || b.company || "Buyer Account";
			const contact = b.contact_person || b.contactPerson || "Primary Contact";
			const country = b.country || "Global";
			const code = b.code || "BYR";
			items.push({
				id: `buyer-${b.id || name}`,
				category: "buyer",
				title: `${name} (${code})`,
				subtitle: `${contact} · ${country} · ${b.email || "buyer@nashmia.com"}`,
				meta: country,
				badge: {
					label: "Buyer",
					variant: "slate"
				},
				actionUrl: "/buyers"
			});
		});
		suppliersList.filter((s) => {
			const name = (s.name || s.companyName || s.company_name || "").toLowerCase();
			const contact = (s.contact_person || s.contactPerson || "").toLowerCase();
			const city = (s.city || s.loadPointCity || "").toLowerCase();
			const loadPoint = (s.loadPoint || s.address || "").toLowerCase();
			const code = (s.code || "").toLowerCase();
			return name.includes(q) || contact.includes(q) || city.includes(q) || loadPoint.includes(q) || code.includes(q);
		}).slice(0, 3).forEach((s) => {
			const name = s.name || s.companyName || s.company_name || "Supplier";
			const city = s.city || s.loadPointCity || "City Hub";
			const code = s.code || "SUP";
			const contact = s.contact_person || s.contactPerson || "Vendor Contact";
			items.push({
				id: `sup-${s.id || name}`,
				category: "supplier",
				title: `${name} (${code})`,
				subtitle: `${contact} · ${city} · Vendor Pickup Point`,
				meta: city,
				badge: {
					label: "Supplier",
					variant: "amber"
				},
				actionUrl: "/suppliers"
			});
		});
		QUICK_ACTIONS.filter((a) => a.title.toLowerCase().includes(q) || a.subtitle.toLowerCase().includes(q) || a.meta && a.meta.toLowerCase().includes(q)).slice(0, 3).forEach((a) => {
			items.push(a);
		});
		return items;
	}, [
		searchQuery,
		movementsList,
		buyersList,
		suppliersList
	]);
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (e) => {
			if (containerRef.current && !containerRef.current.contains(e.target)) setIsOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				const activeTag = document.activeElement?.tagName.toLowerCase();
				if (activeTag !== "input" && activeTag !== "textarea") {
					e.preventDefault();
					inputRef.current?.focus();
					setIsOpen(true);
				}
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	const handleSelectItem = (0, import_react.useCallback)((item) => {
		setIsOpen(false);
		setSearchQuery("");
		if (item.category === "movement") {
			const movData = item.data;
			if (onSelectMovement) onSelectMovement(movData?.id, movData?.ref);
			else {
				setActiveMovementDrawerId(movData?.id || null);
				setActiveMovementDrawerRef(movData?.ref || null);
			}
			return;
		}
		if (item.actionUrl) navigate({ to: item.actionUrl });
	}, [navigate, onSelectMovement]);
	const handleInputKeyDown = (e) => {
		if (e.key === "ArrowDown") {
			e.preventDefault();
			setIsOpen(true);
			setSelectedIndex((prev) => prev < searchResults.length - 1 ? prev + 1 : 0);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			setIsOpen(true);
			setSelectedIndex((prev) => prev > 0 ? prev - 1 : searchResults.length - 1);
		} else if (e.key === "Enter") {
			e.preventDefault();
			if (searchResults.length > 0 && searchResults[selectedIndex]) handleSelectItem(searchResults[selectedIndex]);
		} else if (e.key === "Escape") {
			e.preventDefault();
			setIsOpen(false);
			inputRef.current?.blur();
		}
	};
	const groupedResults = (0, import_react.useMemo)(() => {
		return {
			movements: searchResults.filter((r) => r.category === "movement"),
			parties: searchResults.filter((r) => r.category === "buyer" || r.category === "supplier" || r.category === "forwarder"),
			actions: searchResults.filter((r) => r.category === "action")
		};
	}, [searchResults]);
	const defaultPlaceholder = variant === "dashboard" ? "Search containers, buyers, references..." : "Search containers, vessels, bookings, cut-offs...";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: containerRef,
		className: cn("relative", className),
		children: [variant === "dashboard" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("flex h-11 w-full min-w-0 sm:min-w-[240px] items-center gap-2.5 rounded-xl border border-slate-200/90 bg-white px-4 shadow-2xs sm:w-[330px] transition-all duration-200", isOpen && "border-[#0FA3B1] ring-2 ring-[#0FA3B1]/20 shadow-[0_4px_16px_rgba(15,163,177,0.1)]"),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-4 shrink-0 text-slate-400" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 518,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					ref: inputRef,
					type: "text",
					value: searchQuery,
					onChange: (e) => {
						setSearchQuery(e.target.value);
						setIsOpen(true);
						setSelectedIndex(0);
					},
					onFocus: () => setIsOpen(true),
					onKeyDown: handleInputKeyDown,
					"aria-label": "Search",
					placeholder: placeholder || defaultPlaceholder,
					className: "w-full bg-transparent text-[13.5px] text-slate-900 outline-none placeholder:text-slate-400"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 519,
					columnNumber: 13
				}, this),
				searchQuery ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => {
						setSearchQuery("");
						inputRef.current?.focus();
					},
					"aria-label": "Clear search",
					className: "rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 544,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 535,
					columnNumber: 15
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", {
					className: "pointer-events-none hidden items-center rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-400 sm:inline-block",
					children: "⌘K"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 547,
					columnNumber: 15
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 511,
			columnNumber: 11
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("flex h-8.5 w-full items-center gap-2 rounded-xl border border-slate-200/80 bg-white/90 px-3 shadow-2xs transition-all duration-150 hover:border-slate-300 focus-within:border-slate-900 focus-within:bg-white focus-within:ring-2 focus-within:ring-slate-900/10", isOpen && "border-slate-900 bg-white ring-2 ring-slate-900/10"),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-3.5 shrink-0 text-slate-400" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 559,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					ref: inputRef,
					type: "text",
					value: searchQuery,
					onChange: (e) => {
						setSearchQuery(e.target.value);
						setIsOpen(true);
						setSelectedIndex(0);
					},
					onFocus: () => setIsOpen(true),
					onKeyDown: handleInputKeyDown,
					"aria-label": "Search operations",
					placeholder: placeholder || defaultPlaceholder,
					className: "w-full bg-transparent text-[12.5px] text-slate-900 outline-none placeholder:text-slate-400"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 560,
					columnNumber: 13
				}, this),
				searchQuery ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => {
						setSearchQuery("");
						inputRef.current?.focus();
					},
					"aria-label": "Clear search",
					className: "rounded-full p-1 text-muted-foreground hover:bg-slate-100 hover:text-foreground transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 585,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 576,
					columnNumber: 15
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", {
					className: "hidden rounded-[6px] border border-white/90 bg-white/70 px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground shadow-xs lg:inline-block",
					children: "⌘K"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 588,
					columnNumber: 15
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 553,
			columnNumber: 11
		}, this), isOpen && /* @__PURE__ */ (void 0)("div", {
			ref: listRef,
			className: "absolute left-0 right-0 sm:left-auto sm:right-0 sm:w-[460px] max-w-[calc(100vw-24px)] top-full mt-2 z-50 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.16)] backdrop-blur-xl animate-in fade-in-50 zoom-in-95 duration-150",
			children: [
				/* @__PURE__ */ (void 0)("div", {
					className: "flex items-center justify-between px-3 py-2 border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-400",
					children: [/* @__PURE__ */ (void 0)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 604,
							columnNumber: 17
						}, this), searchQuery ? "Global Results" : "Quick Actions & Navigation"]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 603,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("span", {
						className: "font-normal normal-case text-slate-400 text-[11px]",
						children: [
							searchResults.length,
							" ",
							searchResults.length === 1 ? "result" : "results"
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 607,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 602,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (void 0)("div", {
					className: "max-h-[380px] overflow-y-auto overscroll-contain py-1 divide-y divide-slate-100/60",
					children: searchResults.length === 0 ? /* @__PURE__ */ (void 0)("div", {
						className: "py-8 text-center",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "mx-auto grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-400",
								children: /* @__PURE__ */ (void 0)(Search, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 617,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 616,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "mt-2.5 text-[13.5px] font-semibold text-slate-800",
								children: "No matching records found"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 619,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "mt-0.5 text-[12px] text-slate-500",
								children: "Try searching with reference number, port code, or partner name."
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 622,
								columnNumber: 19
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 615,
						columnNumber: 17
					}, this) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
						groupedResults.movements.length > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "py-1.5",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",
								children: [/* @__PURE__ */ (void 0)(Ship, { className: "size-3 text-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 632,
									columnNumber: 25
								}, this), "Movements & Shipments"]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 631,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "mt-1 space-y-0.5",
								children: groupedResults.movements.map((item) => {
									const itemIndex = searchResults.findIndex((r) => r.id === item.id);
									const isSelected = itemIndex === selectedIndex;
									return /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => handleSelectItem(item),
										onMouseEnter: () => setSelectedIndex(itemIndex),
										className: cn("group flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-150 cursor-pointer", isSelected ? "bg-[#E8F5F6] text-slate-900 shadow-2xs" : "text-slate-700 hover:bg-slate-50"),
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3 min-w-0",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: cn("grid size-8 shrink-0 place-items-center rounded-lg border text-[13px] font-bold transition-colors", isSelected ? "border-[#0FA3B1] bg-[#0FA3B1] text-white" : "border-slate-200 bg-slate-100 text-slate-600 group-hover:border-[#0FA3B1]/40 group-hover:text-[#0FA3B1]"),
												children: /* @__PURE__ */ (void 0)(Ship, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 661,
													columnNumber: 35
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 653,
												columnNumber: 33
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)("p", {
														className: "truncate text-[13px] font-bold text-slate-900",
														children: item.title
													}, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 665,
														columnNumber: 37
													}, this), item.badge && /* @__PURE__ */ (void 0)("span", {
														className: cn("inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold", item.badge.variant === "cyan" ? "bg-[#0FA3B1]/10 text-[#0FA3B1]" : "bg-slate-100 text-slate-600"),
														children: item.badge.label
													}, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 669,
														columnNumber: 39
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$5,
													lineNumber: 664,
													columnNumber: 35
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "truncate text-[11.5px] text-slate-500 mt-0.5",
													children: item.subtitle
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 681,
													columnNumber: 35
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 663,
												columnNumber: 33
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 652,
											columnNumber: 31
										}, this), /* @__PURE__ */ (void 0)(ArrowRight, { className: cn("size-4 shrink-0 transition-transform", isSelected ? "text-[#0FA3B1] translate-x-0.5" : "text-slate-300 opacity-0 group-hover:opacity-100") }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 686,
											columnNumber: 31
										}, this)]
									}, item.id, true, {
										fileName: _jsxFileName$5,
										lineNumber: 640,
										columnNumber: 29
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 635,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 630,
							columnNumber: 21
						}, this),
						groupedResults.parties.length > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "py-1.5",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",
								children: [/* @__PURE__ */ (void 0)(Building2, { className: "size-3 text-amber-500" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 705,
									columnNumber: 25
								}, this), "Directory & Accounts"]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 704,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "mt-1 space-y-0.5",
								children: groupedResults.parties.map((item) => {
									const itemIndex = searchResults.findIndex((r) => r.id === item.id);
									const isSelected = itemIndex === selectedIndex;
									const isBuyer = item.category === "buyer";
									return /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => handleSelectItem(item),
										onMouseEnter: () => setSelectedIndex(itemIndex),
										className: cn("group flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-150 cursor-pointer", isSelected ? "bg-slate-100 text-slate-900 shadow-2xs" : "text-slate-700 hover:bg-slate-50"),
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3 min-w-0",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: cn("grid size-8 shrink-0 place-items-center rounded-lg border text-[13px] font-bold transition-colors", isBuyer ? "border-blue-200 bg-blue-50 text-blue-600" : "border-amber-200 bg-amber-50 text-amber-600"),
												children: isBuyer ? /* @__PURE__ */ (void 0)(Building2, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 736,
													columnNumber: 37
												}, this) : /* @__PURE__ */ (void 0)(Warehouse, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 738,
													columnNumber: 37
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 727,
												columnNumber: 33
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)("p", {
														className: "truncate text-[13px] font-bold text-slate-900",
														children: item.title
													}, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 743,
														columnNumber: 37
													}, this), item.badge && /* @__PURE__ */ (void 0)("span", {
														className: cn("inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold", isBuyer ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"),
														children: item.badge.label
													}, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 747,
														columnNumber: 39
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$5,
													lineNumber: 742,
													columnNumber: 35
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "truncate text-[11.5px] text-slate-500 mt-0.5",
													children: item.subtitle
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 759,
													columnNumber: 35
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 741,
												columnNumber: 33
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 726,
											columnNumber: 31
										}, this), /* @__PURE__ */ (void 0)(ArrowRight, { className: cn("size-4 shrink-0 text-slate-400 transition-transform", isSelected ? "translate-x-0.5 text-slate-700" : "opacity-0 group-hover:opacity-100") }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 764,
											columnNumber: 31
										}, this)]
									}, item.id, true, {
										fileName: _jsxFileName$5,
										lineNumber: 714,
										columnNumber: 29
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 708,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 703,
							columnNumber: 21
						}, this),
						groupedResults.actions.length > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "py-1.5",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",
								children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-3 text-indigo-500" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 783,
									columnNumber: 25
								}, this), "Quick Navigation"]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 782,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "mt-1 space-y-0.5",
								children: groupedResults.actions.map((item) => {
									const itemIndex = searchResults.findIndex((r) => r.id === item.id);
									return /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => handleSelectItem(item),
										onMouseEnter: () => setSelectedIndex(itemIndex),
										className: cn("group flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left transition-all duration-150 cursor-pointer", itemIndex === selectedIndex ? "bg-slate-100 text-slate-900 shadow-2xs" : "text-slate-700 hover:bg-slate-50"),
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3 min-w-0",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "grid size-7 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-2xs group-hover:border-[#0FA3B1]",
												children: item.id.includes("booking") ? /* @__PURE__ */ (void 0)(Plus, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 806,
													columnNumber: 37
												}, this) : item.id.includes("email") ? /* @__PURE__ */ (void 0)(Mail, { className: "size-3.5 text-[#0FA3B1]" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 808,
													columnNumber: 37
												}, this) : /* @__PURE__ */ (void 0)(ArrowRight, { className: "size-3.5 text-slate-500" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 810,
													columnNumber: 37
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 804,
												columnNumber: 33
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (void 0)("p", {
													className: "truncate text-[12.5px] font-semibold text-slate-800",
													children: item.title
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 814,
													columnNumber: 35
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "truncate text-[11px] text-slate-400",
													children: item.subtitle
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 817,
													columnNumber: 35
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 813,
												columnNumber: 33
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 803,
											columnNumber: 31
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-[11px] font-semibold text-slate-400 group-hover:text-slate-600",
											children: "Open"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 822,
											columnNumber: 31
										}, this)]
									}, item.id, true, {
										fileName: _jsxFileName$5,
										lineNumber: 791,
										columnNumber: 29
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 786,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 781,
							columnNumber: 21
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 627,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 613,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (void 0)("div", {
					className: "flex items-center justify-between border-t border-slate-100 px-3 py-2 text-[11px] text-slate-400 bg-slate-50/50 rounded-b-xl",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (void 0)("kbd", {
									className: "rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[9.5px] font-semibold text-slate-500 shadow-2xs",
									children: "↑"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 839,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("kbd", {
									className: "rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[9.5px] font-semibold text-slate-500 shadow-2xs",
									children: "↓"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 842,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("span", {
									className: "ml-1",
									children: "Navigate"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 845,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 838,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (void 0)("kbd", {
								className: "rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[9.5px] font-semibold text-slate-500 shadow-2xs",
								children: "↵"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 848,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "ml-1",
								children: "Select"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 851,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 847,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 837,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("span", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (void 0)("kbd", {
							className: "rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[9.5px] font-semibold text-slate-500 shadow-2xs",
							children: "Esc"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 855,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "ml-1",
							children: "Close"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 858,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 854,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 836,
					columnNumber: 13
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 597,
			columnNumber: 11
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 508,
		columnNumber: 7
	}, this), activeMovementDrawerRef && /* @__PURE__ */ (void 0)(MovementLifecycleDrawer$1, {
		isOpen: Boolean(activeMovementDrawerRef),
		onClose: () => {
			setActiveMovementDrawerRef(null);
			setActiveMovementDrawerId(null);
		},
		bookingId: activeMovementDrawerId || void 0,
		initialReference: activeMovementDrawerRef
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 867,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 507,
		columnNumber: 5
	}, this);
});
var _jsxFileName$4 = "/app/applet/src/components/ui/popover.tsx";
var Popover = Popover$1;
var PopoverTrigger = PopoverTrigger$1;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverPortal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverContent$1, {
	ref,
	align,
	sideOffset,
	collisionPadding: 12,
	className: cn("z-50 w-72 max-w-[calc(100vw-16px)] max-w-[calc(100dvw-16px)] overflow-x-hidden rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none transition-all will-change-[transform,opacity] duration-180 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 17,
	columnNumber: 5
}, void 0) }, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 16,
	columnNumber: 3
}, void 0));
PopoverContent.displayName = PopoverContent$1.displayName;
var _jsxFileName$3 = "/app/applet/src/components/ui/sheet.tsx";
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm transition-all duration-200 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 23,
	columnNumber: 3
}, void 0));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-2xl transition ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] box-border outline-none focus:outline-none focus-visible:outline-none data-[state=closed]:duration-200 data-[state=open]:duration-240 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b overflow-x-hidden data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t rounded-t-[28px] max-h-[90vh] overflow-y-auto overflow-x-hidden w-full data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r overflow-x-hidden data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-x-0 bottom-0 top-auto h-auto max-h-[90vh] w-full rounded-t-[28px] rounded-b-none border-t border-l-0 overflow-y-auto overflow-x-hidden p-5 pb-8 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom sm:inset-y-0 sm:right-0 sm:left-auto sm:top-0 sm:h-full sm:w-3/4 sm:rounded-none sm:border-l sm:border-t-0 sm:data-[state=closed]:slide-out-to-right sm:data-[state=open]:slide-in-from-right sm:max-w-xl sm:p-6"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => {
	const closeBtnRef = import_react.useRef(null);
	const [isMobile, setIsMobile] = import_react.useState(false);
	import_react.useEffect(() => {
		const checkMobile = () => {
			setIsMobile(typeof window !== "undefined" ? window.innerWidth < 640 : false);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	const { elementRef, handleRef } = useSwipeToDismiss({
		direction: isMobile ? "down" : side === "left" ? "left" : "right",
		onDismiss: () => {
			closeBtnRef.current?.click();
		},
		enabled: true
	});
	const setCombinedRef = import_react.useCallback((node) => {
		elementRef.current = node;
		if (typeof ref === "function") ref(node);
		else if (ref) ref.current = node;
	}, [ref, elementRef]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetOverlay, {}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 101,
		columnNumber: 7
	}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
		ref: setCombinedRef,
		className: cn(sheetVariants({ side }), className),
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				ref: handleRef,
				"data-swipe-handle": "true",
				className: "group mx-auto -mt-2 mb-1 flex h-8 w-full max-w-[200px] cursor-grab touch-none items-center justify-center sm:hidden active:cursor-grabbing select-none",
				"aria-label": "Drag down to dismiss",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300 transition-all duration-150 group-hover:bg-slate-400 group-active:scale-x-110 group-active:bg-slate-500" }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 114,
					columnNumber: 11
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 108,
				columnNumber: 9
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
				ref: closeBtnRef,
				className: "absolute right-4 top-4 rounded-full p-1.5 opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 120,
					columnNumber: 11
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "sr-only",
					children: "Close"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 121,
					columnNumber: 11
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 116,
				columnNumber: 9
			}, void 0),
			children
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 102,
		columnNumber: 7
	}, void 0)] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 100,
		columnNumber: 5
	}, void 0);
});
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 131,
	columnNumber: 3
}, void 0);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 136,
	columnNumber: 3
}, void 0);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 147,
	columnNumber: 3
}, void 0));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 159,
	columnNumber: 3
}, void 0));
SheetDescription.displayName = DialogDescription.displayName;
var _jsxFileName$2 = "/app/applet/src/components/nashmia/NotificationCenterTrigger.tsx";
function NotificationCenterTrigger({ className, id, iconClassName = "size-4" }) {
	const { unreadCount, isMounted } = useNotifications();
	const [isDesktopOpen, setIsDesktopOpen] = (0, import_react.useState)(false);
	const [isMobileOpen, setIsMobileOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "hidden sm:block",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, {
			open: isDesktopOpen,
			onOpenChange: setIsDesktopOpen,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					id,
					"aria-label": "Notifications",
					className: cn("relative cursor-pointer focus:outline-none", className),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: iconClassName }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 36,
						columnNumber: 15
					}, this), isMounted && unreadCount > 0 && /* @__PURE__ */ (void 0)("span", {
						className: "absolute -top-1 -right-1 flex min-w-[18px] h-[18px] items-center justify-center rounded-full bg-[#0FA3B1] px-1 text-[10px] font-bold text-white shadow-[0_2px_6px_rgba(15,163,177,0.4)] ring-2 ring-white animate-in zoom-in-50",
						children: unreadCount > 9 ? "9+" : unreadCount
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 38,
						columnNumber: 17
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 30,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 29,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverContent, {
				align: "end",
				sideOffset: 8,
				className: "w-auto max-w-[calc(100vw-24px)] p-0 border-0 bg-transparent shadow-none",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AINotificationCenter, { onClose: () => setIsDesktopOpen(false) }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 49,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 44,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 28,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 27,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "block sm:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "button",
			id: id ? `${id}-mobile` : "mobile-notifications-button",
			onClick: () => setIsMobileOpen(true),
			"aria-label": "Notifications",
			className: cn("relative cursor-pointer focus:outline-none", className),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: iconClassName }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 63,
				columnNumber: 11
			}, this), isMounted && unreadCount > 0 && /* @__PURE__ */ (void 0)("span", {
				className: "absolute -top-1 -right-1 flex min-w-[18px] h-[18px] items-center justify-center rounded-full bg-[#0FA3B1] px-1 text-[10px] font-bold text-white shadow-[0_2px_6px_rgba(15,163,177,0.4)] ring-2 ring-white animate-in zoom-in-50",
				children: unreadCount > 9 ? "9+" : unreadCount
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 65,
				columnNumber: 13
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 56,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sheet, {
			open: isMobileOpen,
			onOpenChange: setIsMobileOpen,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetContent, {
				side: "bottom",
				onDismiss: () => setIsMobileOpen(false),
				className: "p-3.5 pb-6 sm:hidden rounded-t-[28px] border-t border-slate-200/80 bg-white max-h-[88vh] overflow-y-auto overflow-x-hidden w-full max-w-full",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetHeader, {
					className: "sr-only",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetTitle, { children: "Notification Center" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 78,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 77,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AINotificationCenter, {
					isBottomSheet: true,
					onClose: () => setIsMobileOpen(false)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 80,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 72,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 71,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 55,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 25,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/nashmia/DashboardSections.tsx";
var MovementLifecycleDrawer = (0, import_react.lazy)(() => import("./MovementLifecycleDrawer-BFcX3wIF.mjs").then((n) => n.n).then((n) => n.n).then((m) => ({ default: m.MovementLifecycleDrawer })));
(0, import_react.lazy)(() => import("./AINotificationCenter-CVJgTjUr.mjs").then((m) => ({ default: m.AINotificationCenter })));
var iconMap = {
	Container,
	ClipboardList,
	BadgeCheck,
	Ship,
	Anchor,
	PackageCheck,
	Timer,
	AlertTriangle: TriangleAlert,
	FileText,
	Plus,
	Warehouse,
	Users,
	Receipt
};
var DEFAULT_KPIS = [
	{
		label: "Total Containers",
		value: "0",
		trend: "0 active",
		icon: "Container"
	},
	{
		label: "Booking Requested",
		value: "0",
		trend: "0 pending",
		icon: "ClipboardList"
	},
	{
		label: "Booking Confirmed",
		value: "0",
		trend: "0 confirmed",
		icon: "BadgeCheck"
	},
	{
		label: "In Transit",
		value: "0",
		trend: "0 sailing",
		icon: "Ship"
	},
	{
		label: "Arrived",
		value: "0",
		trend: "0 arrived",
		icon: "Anchor"
	},
	{
		label: "Delivered",
		value: "0",
		trend: "0 completed",
		icon: "PackageCheck"
	}
];
var DEFAULT_LIFECYCLE = [
	{
		stage: "Booking Requested",
		count: 0,
		state: "future"
	},
	{
		stage: "Booking Confirmed",
		count: 0,
		state: "future"
	},
	{
		stage: "Cargo Received at Warehouse",
		count: 0,
		state: "future"
	},
	{
		stage: "Stuffing & Sealing",
		count: 0,
		state: "future"
	},
	{
		stage: "Customs Cleared",
		count: 0,
		state: "future"
	},
	{
		stage: "Container Shipped from Warehouse",
		count: 0,
		state: "future"
	},
	{
		stage: "In Transit",
		count: 0,
		state: "future"
	},
	{
		stage: "Delivered",
		count: 0,
		state: "future"
	}
];
var DEFAULT_ATTENTION = [
	{
		icon: "ClipboardList",
		label: "Bookings awaiting forwarder quotes",
		count: 0,
		to: "/requests"
	},
	{
		icon: "AlertTriangle",
		label: "Containers at sea needing tracking",
		count: 0,
		to: "/requests"
	},
	{
		icon: "FileText",
		label: "Commercial clearance & stuffing items",
		count: 0,
		to: "/requests"
	}
];
function deriveLiveDashboardMetrics(bookings, serverMetrics) {
	if (!bookings || bookings.length === 0) return serverMetrics || {
		totalContainers: 0,
		bookingRequests: 0,
		bookingConfirmed: 0,
		inTransit: 0,
		arrived: 0,
		delivered: 0,
		kpis: DEFAULT_KPIS,
		lifecycle: DEFAULT_LIFECYCLE,
		attention: DEFAULT_ATTENTION,
		cutoffs: []
	};
	const uniqueBookings = deduplicateBookings(bookings);
	let totalContainers = 0;
	let bookingRequests = 0;
	let bookingConfirmed = 0;
	let inTransit = 0;
	let arrived = 0;
	let delivered = 0;
	const stageCounts = {
		"Booking Requested": 0,
		"Booking Confirmed": 0,
		"Cargo Received at Warehouse": 0,
		"Stuffing & Sealing": 0,
		"Customs Cleared": 0,
		"Container Shipped from Warehouse": 0,
		"In Transit": 0,
		Arrived: 0,
		Delivered: 0
	};
	for (const b of uniqueBookings) {
		const cnt = Math.max(1, Number(b.container_count) || 1);
		totalContainers += cnt;
		const stage = normalizeLifecycleStage(b.status, b.confirmation_status, b.id || b.movement_number || b.booking_reference, b.movement_status);
		if (stageCounts[stage] !== void 0) stageCounts[stage] += 1;
		else stageCounts["Booking Requested"] += 1;
		switch (stage) {
			case "Booking Requested":
			case "Draft":
				bookingRequests += 1;
				break;
			case "Booking Confirmed":
			case "Cargo Received at Warehouse":
			case "Stuffing & Sealing":
			case "Customs Cleared":
			case "Container Shipped from Warehouse":
				bookingConfirmed += 1;
				break;
			case "In Transit":
				inTransit += 1;
				break;
			case "Arrived":
				arrived += 1;
				break;
			case "Delivered":
				delivered += 1;
				break;
			default: bookingRequests += 1;
		}
	}
	const kpis = [
		{
			label: "Total Containers",
			value: String(totalContainers),
			trend: `${totalContainers} in network`,
			icon: "Container"
		},
		{
			label: "Booking Requested",
			value: String(bookingRequests),
			trend: `${bookingRequests} pending`,
			icon: "ClipboardList"
		},
		{
			label: "Booking Confirmed",
			value: String(bookingConfirmed),
			trend: `${bookingConfirmed} confirmed`,
			icon: "BadgeCheck"
		},
		{
			label: "In Transit",
			value: String(inTransit),
			trend: `${inTransit} sailing`,
			icon: "Ship"
		},
		{
			label: "Arrived",
			value: String(arrived),
			trend: `${arrived} at port`,
			icon: "Anchor"
		},
		{
			label: "Delivered",
			value: String(delivered),
			trend: `${delivered} completed`,
			icon: "PackageCheck"
		}
	];
	const requestedCount = (stageCounts["Booking Requested"] || 0) + (stageCounts["Draft"] || 0);
	const lifecycle = [
		{
			stage: "Booking Requested",
			count: requestedCount,
			state: requestedCount > 0 ? "active" : "future"
		},
		{
			stage: "Booking Confirmed",
			count: stageCounts["Booking Confirmed"] || 0,
			state: stageCounts["Booking Confirmed"] > 0 ? "active" : "future"
		},
		{
			stage: "Cargo Received at Warehouse",
			count: stageCounts["Cargo Received at Warehouse"] || 0,
			state: stageCounts["Cargo Received at Warehouse"] > 0 ? "active" : "future"
		},
		{
			stage: "Stuffing & Sealing",
			count: stageCounts["Stuffing & Sealing"] || 0,
			state: stageCounts["Stuffing & Sealing"] > 0 ? "active" : "future"
		},
		{
			stage: "Customs Cleared",
			count: stageCounts["Customs Cleared"] || 0,
			state: stageCounts["Customs Cleared"] > 0 ? "active" : "future"
		},
		{
			stage: "Container Shipped from Warehouse",
			count: stageCounts["Container Shipped from Warehouse"] || 0,
			state: stageCounts["Container Shipped from Warehouse"] > 0 ? "active" : "future"
		},
		{
			stage: "In Transit",
			count: (stageCounts["In Transit"] || 0) + (stageCounts["Arrived"] || 0),
			state: (stageCounts["In Transit"] || 0) + (stageCounts["Arrived"] || 0) > 0 ? "active" : "future"
		},
		{
			stage: "Delivered",
			count: stageCounts["Delivered"] || 0,
			state: stageCounts["Delivered"] > 0 ? "complete" : "future"
		}
	];
	const attentionList = [
		{
			icon: "ClipboardList",
			label: "Bookings awaiting forwarder quotes",
			count: bookingRequests,
			to: "/requests"
		},
		{
			icon: "AlertTriangle",
			label: "Containers at sea needing tracking",
			count: inTransit,
			to: "/requests"
		},
		{
			icon: "FileText",
			label: "Commercial clearance & stuffing items",
			count: (stageCounts["Customs Cleared"] || 0) + (stageCounts["Stuffing & Sealing"] || 0),
			to: "/requests"
		}
	];
	return {
		totalContainers,
		bookingRequests,
		bookingConfirmed,
		inTransit,
		arrived,
		delivered,
		kpis,
		lifecycle,
		attention: attentionList,
		cutoffs: serverMetrics?.cutoffs || getAllUpcomingCutOffs(uniqueBookings) || []
	};
}
var DashboardDataContext = (0, import_react.createContext)(null);
/**
* Unified Dashboard Provider that manages single-roundtrip queries and instant Realtime synchronization.
* Prevents multiple components from opening redundant subscriptions or running duplicate queries.
*/
function DashboardDataProvider({ children }) {
	const { userId, organizationId, isConfigured } = useAuth();
	const queryClient = useQueryClient();
	const bookingsQuery = useQuery({
		queryKey: ["dashboard-bookings", userId],
		queryFn: () => fetchBookingsFromSupabase(userId),
		enabled: true,
		staleTime: 3e5,
		gcTime: 36e5
	});
	const { data: bookingsData, isLoading: bookingsIsLoading, refetch: bookingsRefetch } = bookingsQuery;
	useSupabaseRealtime("bookings", void 0, isConfigured, { organizationId });
	useSupabaseRealtime("booking_events", void 0, isConfigured, { organizationId });
	useSupabaseRealtime("notifications", void 0, isConfigured, { organizationId });
	useSupabaseRealtime("email_messages", void 0, isConfigured, { organizationId });
	(0, import_react.useEffect)(() => {
		const handleImmediateUpdate = (e) => {
			queryClient.invalidateQueries({ queryKey: ["dashboard-bookings"] });
			queryClient.invalidateQueries({ queryKey: ["dashboard-data"] });
			queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
			queryClient.invalidateQueries({ queryKey: ["movements"] });
			bookingsRefetch();
			if (e && "detail" in e) {
				const detail = e.detail;
				if (detail) {
					const targetId = (detail.bookingId || detail.id || detail.movementNumber || detail.bookingReference || detail.reference || "").trim().toLowerCase();
					if (detail.booking && typeof detail.booking === "object") {
						const rawBooking = detail.booking;
						queryClient.setQueriesData({ queryKey: ["dashboard-bookings"] }, (old) => {
							if (!old) return [rawBooking];
							if (old.some((b) => rawBooking.id && b.id === rawBooking.id || rawBooking.movement_number && b.movement_number === rawBooking.movement_number || rawBooking.booking_reference && b.booking_reference === rawBooking.booking_reference)) return old.map((b) => rawBooking.id && b.id === rawBooking.id || rawBooking.movement_number && b.movement_number === rawBooking.movement_number || rawBooking.booking_reference && b.booking_reference === rawBooking.booking_reference ? {
								...b,
								...rawBooking
							} : b);
							return [rawBooking, ...old];
						});
					}
					if (targetId) queryClient.setQueriesData({ queryKey: ["dashboard-bookings"] }, (old) => {
						if (!old) return old;
						return old.map((b) => {
							const bId = (b.id || "").trim().toLowerCase();
							const bMov = (b.movement_number || "").trim().toLowerCase();
							const bRef = (b.booking_reference || "").trim().toLowerCase();
							if (bId === targetId || bMov === targetId || bRef === targetId) {
								const isConfirmed = detail.isConfirmed || detail.confirmationStatus === "CONFIRMED" || typeof detail.status === "string" && detail.status.includes("Confirm");
								return {
									...b,
									status: detail.status || b.status,
									confirmation_status: detail.confirmationStatus || (isConfirmed ? "CONFIRMED" : b.confirmation_status),
									confirmed_at: detail.confirmedAt || b.confirmed_at || (isConfirmed ? (/* @__PURE__ */ new Date()).toISOString() : void 0),
									confirmed_by: detail.confirmedBy || b.confirmed_by,
									vessel_name: detail.vesselName || b.vessel_name,
									voyage_number: detail.voyageNumber || b.voyage_number
								};
							}
							return b;
						});
					});
				}
			}
		};
		window.addEventListener("nashmia_booking_created", handleImmediateUpdate);
		window.addEventListener("nashmia_movement_created", handleImmediateUpdate);
		window.addEventListener("nashmia_booking_confirmed", handleImmediateUpdate);
		window.addEventListener("nashmia_booking_awarded", handleImmediateUpdate);
		window.addEventListener("nashmia_booking_status_updated", handleImmediateUpdate);
		window.addEventListener("supabase_realtime_bookings_change", handleImmediateUpdate);
		window.addEventListener("nashmia_bookings_updated", handleImmediateUpdate);
		window.addEventListener("nashmia_multi_forwarder_updated", handleImmediateUpdate);
		window.addEventListener("nashmia_forwarder_offer_received", handleImmediateUpdate);
		window.addEventListener("nashmia:email-sent", handleImmediateUpdate);
		window.addEventListener("storage", handleImmediateUpdate);
		return () => {
			window.removeEventListener("nashmia_booking_created", handleImmediateUpdate);
			window.removeEventListener("nashmia_movement_created", handleImmediateUpdate);
			window.removeEventListener("nashmia_booking_confirmed", handleImmediateUpdate);
			window.removeEventListener("nashmia_booking_awarded", handleImmediateUpdate);
			window.removeEventListener("nashmia_booking_status_updated", handleImmediateUpdate);
			window.removeEventListener("supabase_realtime_bookings_change", handleImmediateUpdate);
			window.removeEventListener("nashmia_bookings_updated", handleImmediateUpdate);
			window.removeEventListener("nashmia_multi_forwarder_updated", handleImmediateUpdate);
			window.removeEventListener("nashmia_forwarder_offer_received", handleImmediateUpdate);
			window.removeEventListener("nashmia:email-sent", handleImmediateUpdate);
			window.removeEventListener("storage", handleImmediateUpdate);
		};
	}, [
		queryClient,
		userId,
		bookingsRefetch
	]);
	const liveMetrics = (0, import_react.useMemo)(() => {
		return deriveLiveDashboardMetrics(bookingsQuery.data || []);
	}, [bookingsQuery.data]);
	const contextValue = (0, import_react.useMemo)(() => ({
		metrics: liveMetrics,
		bookings: bookingsData || [],
		isLoading: bookingsIsLoading,
		refetch: () => void bookingsRefetch()
	}), [
		liveMetrics,
		bookingsData,
		bookingsIsLoading,
		bookingsRefetch
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DashboardDataContext.Provider, {
		value: contextValue,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 607,
		columnNumber: 5
	}, this);
}
/**
* Accesses unified dashboard data and realtime metrics efficiently.
*/
function useDashboardData() {
	const context = (0, import_react.useContext)(DashboardDataContext);
	const { userId } = useAuth();
	const fallbackQuery = useQuery({
		queryKey: ["dashboard-bookings", userId],
		queryFn: () => fetchBookingsFromSupabase(userId),
		enabled: !context,
		staleTime: 3e4
	});
	const fallbackMetrics = (0, import_react.useMemo)(() => {
		if (context) return context.metrics;
		return deriveLiveDashboardMetrics(fallbackQuery.data || []);
	}, [context, fallbackQuery.data]);
	if (context) return context;
	return {
		metrics: fallbackMetrics,
		bookings: fallbackQuery.data || [],
		isLoading: fallbackQuery.isLoading,
		refetch: () => {
			fallbackQuery.refetch();
		}
	};
}
var TopHeader = (0, import_react.memo)(function TopHeader({ onOpenMobileMenu }) {
	const { profile, user } = useAuth();
	const { unreadCount, isMounted } = useNotifications();
	const displayName = profile?.full_name || user?.email?.split("@")[0] || "Operations";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex min-w-0 flex-1 items-center gap-3",
			children: [onOpenMobileMenu && /* @__PURE__ */ (void 0)("button", {
				type: "button",
				onClick: onOpenMobileMenu,
				"aria-label": "Toggle navigation menu",
				className: "grid size-11 shrink-0 place-items-center rounded-xl border border-slate-200/90 bg-white text-slate-800 shadow-2xs transition-all hover:bg-slate-50 lg:hidden",
				children: /* @__PURE__ */ (void 0)(Menu, { className: "size-5" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 664,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 658,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-[22px] font-semibold tracking-[-0.02em] text-slate-900 sm:text-[26px] lg:text-[30px] truncate",
					children: ["Good morning, ", displayName]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 668,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-0.5 sm:mt-1 text-[13px] sm:text-[14px] text-slate-500",
					children: "Here's what's happening across your container operations."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 671,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 667,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 656,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GlobalSearch, { variant: "dashboard" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 678,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NotificationCenterTrigger, {
					className: "grid size-11 shrink-0 place-items-center rounded-xl border border-slate-200/90 bg-white text-slate-700 shadow-2xs transition-all duration-150 hover:bg-slate-50",
					iconClassName: "size-[18px]"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 680,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/new-booking",
					className: "flex h-11 items-center gap-2 rounded-xl bg-[#0FA3B1] hover:bg-[#078A99] px-4 text-[13.5px] font-semibold text-white shadow-[0_4px_14px_rgba(15,163,177,0.3)] transition-all duration-150",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 689,
						columnNumber: 11
					}, this), "New Booking"]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 685,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 677,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 655,
		columnNumber: 5
	}, this);
});
var PageTitle = (0, import_react.memo)(function PageTitle() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "text-[22px] font-semibold tracking-[-0.02em] text-slate-900 sm:text-[24px]",
			children: "Container Operations"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 701,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-1 text-[14px] text-slate-500",
			children: "Monitor every movement from booking request to final delivery."
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 704,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 700,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "button",
			className: "flex h-10 w-fit items-center gap-2.5 rounded-xl border border-slate-200/90 bg-white px-3.5 text-[13px] font-semibold text-slate-800 shadow-2xs transition-colors hover:bg-slate-50",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 712,
					columnNumber: 9
				}, this),
				"18 Aug 2026",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 714,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 708,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 699,
		columnNumber: 5
	}, this);
});
function formatKpiTitle(label) {
	const clean = label.trim();
	if (clean === "Total Containers") return ["Total", "Containers"];
	if (clean === "Booking Requested" || clean === "Booking Requests") return ["Booking", "Requests"];
	if (clean === "Booking Confirmed") return ["Booking", "Confirmed"];
	if (clean === "In Transit") return ["In", "Transit"];
	if (clean === "Arrived") return ["Arrived", "At Port"];
	if (clean === "Delivered") return ["Cargo", "Delivered"];
	const words = clean.split(/\s+/);
	if (words.length <= 1) return [words[0] || "", ""];
	return [words[0], words.slice(1).join(" ")];
}
function renderKpiSparkline(iconName, index) {
	if (iconName === "ClipboardList" || index === 1) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-end gap-1.5 h-6 pb-0.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-2 rounded-full bg-slate-900/90" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 739,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-3.5 rounded-full bg-slate-900/90" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 740,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-6 rounded-full bg-slate-900" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 741,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-5 rounded-full bg-slate-900" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 742,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-2.5 rounded-full bg-slate-900/80" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 743,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 738,
		columnNumber: 7
	}, this);
	if (iconName === "BadgeCheck" || index === 2) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-rows-3 grid-flow-col gap-x-1.5 gap-y-1 pb-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 752,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 753,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 754,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 756,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-400" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 757,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 758,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 760,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 761,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 762,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 764,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-400" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 765,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-200" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 766,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 768,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-900" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 769,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-slate-300" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 770,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 751,
		columnNumber: 7
	}, this);
	if (iconName === "Anchor" || index === 4) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-end gap-1.5 h-6 pb-0.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-1.5 rounded-full bg-slate-400" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 779,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-3.5 rounded-full bg-slate-600" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 780,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-5 rounded-full bg-slate-800" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 781,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-6 rounded-full bg-slate-900" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 782,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-3 rounded-full bg-slate-700" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 783,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 778,
		columnNumber: 7
	}, this);
	if (iconName === "PackageCheck" || index === 5) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
				fileName: _jsxFileName$1,
				lineNumber: 793,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
				cx: "32",
				cy: "5",
				r: "2.5",
				fill: "#0f172a"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 799,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 792,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 791,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
				fileName: _jsxFileName$1,
				lineNumber: 809,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 808,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 807,
		columnNumber: 5
	}, this);
}
var KpiGrid = (0, import_react.memo)(function KpiGrid() {
	const { metrics, isLoading } = useDashboardData();
	const safeKpiList = metrics?.kpis && metrics.kpis.length > 0 ? metrics.kpis : DEFAULT_KPIS;
	if (isLoading && (!metrics || !metrics.kpis || metrics.kpis.length === 0)) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KpiGridSkeleton, {}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 825,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative w-full min-w-0 max-w-full",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -top-8 inset-x-0 mx-auto h-72 w-full max-w-full sm:max-w-5xl bg-gradient-to-r from-amber-400/20 via-orange-300/15 to-teal-400/15 blur-3xl opacity-65 -z-10" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 831,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4 sm:gap-4.5",
			children: safeKpiList.map((kpi, idx) => {
				const Icon = iconMap[kpi.icon] ?? Container;
				const [line1, line2] = formatKpiTitle(kpi.label);
				if (kpi.icon === "Ship" || kpi.label.toLowerCase().includes("transit") || safeKpiList.length >= 4 && idx === 3) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] p-5 sm:p-5.5 border border-amber-400/20 shadow-[0_16px_36px_-10px_rgba(110,65,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_-10px_rgba(110,65,25,0.4)] flex flex-col justify-between min-h-[145px] sm:min-h-[155px]",
					style: { background: `
                    radial-gradient(circle at 85% 15%, rgba(165, 105, 45, 0.85) 0%, transparent 60%),
                    radial-gradient(circle at 20% 80%, rgba(125, 75, 30, 0.5) 0%, transparent 60%),
                    linear-gradient(135deg, #44311e 0%, #684824 52%, #382515 100%)
                  ` },
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 856,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-11 sm:size-12 rounded-full border border-amber-200/30 bg-white/5 backdrop-blur-xs flex items-center justify-center text-amber-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-5 stroke-[1.8] text-amber-100" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 861,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 860,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-amber-100/95",
									children: line1
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 864,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-amber-100/95",
									children: line2
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 867,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 863,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 859,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-baseline",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[28px] sm:text-[32px] font-bold text-white tracking-tight leading-none",
									children: kpi.value
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 876,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[13px] font-normal text-amber-200/80 ml-1",
									children: "cgo"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 879,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 875,
								columnNumber: 19
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
											fileName: _jsxFileName$1,
											lineNumber: 885,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "22",
											cy: "5",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 891,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "42",
											cy: "18",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 892,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
											cx: "62",
											cy: "8",
											r: "2",
											fill: "rgba(253, 230, 138, 0.95)"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 893,
											columnNumber: 23
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 884,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 883,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 874,
							columnNumber: 17
						}, this)
					]
				}, kpi.label, true, {
					fileName: _jsxFileName$1,
					lineNumber: 844,
					columnNumber: 15
				}, this);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-5.5 border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-8px_rgba(0,0,0,0.09)] flex flex-col justify-between min-h-[145px] sm:min-h-[155px]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 909,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 908,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: line1
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 912,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[14px] sm:text-[15px] font-medium leading-[1.2] text-slate-800",
								children: line2
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 915,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 911,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 907,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
							children: kpi.value
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 923,
							columnNumber: 17
						}, this), renderKpiSparkline(kpi.icon, idx)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 922,
						columnNumber: 15
					}, this)]
				}, kpi.label, true, {
					fileName: _jsxFileName$1,
					lineNumber: 902,
					columnNumber: 13
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 833,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 829,
		columnNumber: 5
	}, this);
});
var Lifecycle = (0, import_react.memo)(function Lifecycle() {
	const { metrics, isLoading } = useDashboardData();
	const safeLifecycleList = metrics?.lifecycle && metrics.lifecycle.length > 0 ? metrics.lifecycle : DEFAULT_LIFECYCLE;
	const max = Math.max(...safeLifecycleList.map((s) => s.count), 1);
	const totalContainersInPipeline = safeLifecycleList.reduce((acc, curr) => acc + (curr.count || 0), 0);
	if (isLoading && (!metrics || !metrics.lifecycle || metrics.lifecycle.length === 0)) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LifecycleSkeleton, {}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 947,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative overflow-hidden rounded-[24px] sm:rounded-[26px] border border-slate-100/90 bg-white p-5 sm:p-6 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -top-16 -right-12 h-60 w-80 bg-gradient-to-br from-amber-400/15 via-teal-400/10 to-transparent blur-3xl opacity-50 -z-10" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 953,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center justify-between gap-4 border-b border-slate-100/90 pb-5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 959,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 958,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-[18px] sm:text-[20px] font-bold text-slate-900 tracking-tight leading-snug",
							children: "Container Lifecycle"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 963,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "hidden sm:inline-flex items-center rounded-full bg-slate-100/90 px-2.5 py-0.5 text-[11px] font-bold text-slate-700 border border-slate-200/60 font-mono",
							children: [totalContainersInPipeline, " in pipeline"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 966,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 962,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-0.5 text-[13px] text-slate-500 font-normal",
						children: "Real-time stage distribution across freight & cargo milestones."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 970,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 961,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 957,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 sm:gap-2.5 text-[11.5px] font-medium",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-50/80 px-2.5 py-1 text-emerald-700 border border-emerald-200/60 shadow-2xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-emerald-500" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 979,
								columnNumber: 13
							}, this), "Completed"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 978,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#E8F5F6]/90 px-2.5 py-1 text-[#0FA3B1] border border-[#0FA3B1]/25 shadow-2xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-[#0FA3B1] animate-pulse" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 983,
								columnNumber: 13
							}, this), "Active Gate"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 982,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-slate-500 border border-slate-200/60 shadow-2xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-300" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 987,
								columnNumber: 13
							}, this), "Upcoming"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 986,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 977,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 956,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4 xl:grid-cols-8",
				children: safeLifecycleList.map((s, i) => {
					const percent = Math.min(100, Math.round(s.count / max * 100));
					const isActive = s.state === "active";
					const isComplete = s.state === "complete";
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: cn("group relative flex flex-col justify-between overflow-hidden rounded-[20px] p-3 sm:p-3.5 text-center transition-all duration-300 hover:-translate-y-1", isActive && "border border-[#0FA3B1]/40 bg-gradient-to-b from-[#E8F5F6]/80 via-[#E8F5F6]/40 to-white shadow-[0_8px_22px_-6px_rgba(15,163,177,0.22)] ring-1 ring-[#0FA3B1]/25", isComplete && "border border-emerald-100/90 bg-gradient-to-b from-emerald-50/40 via-emerald-50/15 to-white shadow-[0_4px_16px_-4px_rgba(16,185,129,0.08)] hover:border-emerald-200", !isActive && !isComplete && "border border-slate-100 bg-slate-50/40 shadow-2xs hover:border-slate-200 hover:bg-white"),
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: cn("flex size-7.5 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-200", isActive && "bg-[#0FA3B1] text-white shadow-[0_0_12px_rgba(15,163,177,0.5)] ring-4 ring-[#0FA3B1]/15", isComplete && "bg-emerald-500 text-white shadow-[0_0_8px_rgba(16,185,129,0.35)]", !isActive && !isComplete && "border border-slate-200 bg-white text-slate-400"),
									children: isComplete ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3 stroke-[3]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1026,
										columnNumber: 33
									}, this) : i + 1
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 1016,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1015,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2.5 text-[11.5px] font-semibold leading-tight tracking-tight text-slate-800 min-h-[28px] flex items-center justify-center",
								children: s.stage
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1031,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-mono mt-1.5 text-[22px] sm:text-[24px] font-bold text-slate-900 tracking-tight leading-none",
								children: s.count
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1036,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-2.5 w-full",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-1.5 w-full overflow-hidden rounded-full bg-slate-100/90",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: cn("h-full rounded-full transition-all duration-500", isActive ? "bg-gradient-to-r from-[#0FA3B1] to-teal-400" : isComplete ? "bg-emerald-500" : "bg-slate-300/70"),
										style: { width: `${Math.max(percent, s.count > 0 ? 15 : 6)}%` }
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1043,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 1042,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1041,
								columnNumber: 15
							}, this)
						]
					}, s.stage, true, {
						fileName: _jsxFileName$1,
						lineNumber: 1001,
						columnNumber: 13
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 994,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 pt-3.5 border-t border-slate-100/80 flex flex-wrap items-center justify-between gap-3 text-[12px] text-slate-500",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-[#0FA3B1]" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1064,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Automated EDI tracking & milestone updates enabled" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1065,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 1063,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/requests",
					className: "inline-flex items-center gap-1.5 font-semibold text-[#0FA3B1] hover:text-[#0b7c87] transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Requests & Quotations" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1071,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1072,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 1067,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 1062,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 951,
		columnNumber: 5
	}, this);
});
var NeedsAttention = (0, import_react.memo)(function NeedsAttention() {
	const { metrics, isLoading } = useDashboardData();
	const navigate = useNavigate();
	const safeAttentionList = metrics?.attention && metrics.attention.length > 0 ? metrics.attention : DEFAULT_ATTENTION;
	if (isLoading && (!metrics || !metrics.attention || metrics.attention.length === 0)) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NeedsAttentionSkeleton, {}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 1086,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "text-[18px] font-semibold text-slate-900",
				children: "Needs Attention"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1091,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-[13.5px] text-slate-500",
				children: "Items waiting on an operator decision."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1092,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 space-y-2",
				children: safeAttentionList.map((row) => {
					const Icon = iconMap[row.icon] ?? TriangleAlert;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => {
							if (row.to) navigate({ to: row.to });
						},
						className: "group flex w-full items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/50 px-3.5 py-3 text-left transition-all duration-150 hover:border-slate-200 hover:bg-slate-50 cursor-pointer",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "grid size-9 shrink-0 place-items-center rounded-xl border border-rose-200/70 bg-rose-50 text-rose-600",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-[17px]" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 1108,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1107,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "min-w-0 flex-1 text-[13.5px] font-medium text-slate-700",
								children: row.label
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1110,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "num rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[12px] font-bold text-slate-800 shadow-2xs",
								children: row.count
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1113,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-4 shrink-0 text-slate-400 opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:opacity-100" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1116,
								columnNumber: 15
							}, this)
						]
					}, row.label, true, {
						fileName: _jsxFileName$1,
						lineNumber: 1097,
						columnNumber: 13
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1093,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 1090,
		columnNumber: 5
	}, this);
});
function StageBadge({ stage, confirmationStatus, refOrId }) {
	const config = getLifecycleStageConfig(stage, confirmationStatus, refOrId);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("inline-flex whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[11.5px] font-bold shadow-xs", config.badgeClass),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-1.5 inline-block size-1.5 self-center rounded-full bg-current" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 1142,
			columnNumber: 7
		}, this), config.shortLabel]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 1136,
		columnNumber: 5
	}, this);
}
var RecentMovements = (0, import_react.memo)(function RecentMovements() {
	const { bookings, isLoading, refetch } = useDashboardData();
	const [selectedBookingId, setSelectedBookingId] = (0, import_react.useState)(null);
	const [selectedRef, setSelectedRef] = (0, import_react.useState)(null);
	const [isDrawerOpen, setIsDrawerOpen] = (0, import_react.useState)(false);
	const [isUploadModalOpen, setIsUploadModalOpen] = (0, import_react.useState)(false);
	const [editingMovement, setEditingMovement] = (0, import_react.useState)(null);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedStage, setSelectedStage] = (0, import_react.useState)("all");
	const searchInputRef = (0, import_react.useRef)(null);
	const PAGE_SIZE = 6;
	const queryClient = useQueryClient();
	const handleDeleteMovement = (0, import_react.useCallback)(async (m) => {
		const targetKey = m.id || m.ref;
		if (!targetKey) return;
		if (!window.confirm(`Are you sure you want to permanently delete movement ${m.ref} from the database?`)) return;
		try {
			if (await deleteBookingFromSupabase(targetKey)) {
				toast.success(`Movement ${m.ref} deleted from database`);
				queryClient.invalidateQueries({ queryKey: ["dashboard-bookings"] });
				queryClient.invalidateQueries({ queryKey: ["dashboard-data"] });
				queryClient.invalidateQueries({ queryKey: ["bookings"] });
				queryClient.invalidateQueries({ queryKey: ["movements"] });
				refetch();
			} else toast.error(`Failed to delete movement ${m.ref}`);
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Failed to delete movement";
			toast.error(msg);
		}
	}, [queryClient, refetch]);
	const handleOpenMovement = (0, import_react.useCallback)((id, ref) => {
		setSelectedBookingId(id || null);
		setSelectedRef(ref || null);
		setIsDrawerOpen(true);
	}, []);
	const selectedBooking = (0, import_react.useMemo)(() => {
		if (!selectedBookingId && !selectedRef) return null;
		return bookings.find((b) => {
			if (selectedBookingId && b.id === selectedBookingId) return true;
			const rawRef = b.movement_number || b.booking_reference || b.movementNumber || b.reference;
			return Boolean(selectedRef && rawRef && rawRef.toLowerCase() === selectedRef.toLowerCase());
		}) || null;
	}, [
		bookings,
		selectedBookingId,
		selectedRef
	]);
	(0, import_react.useEffect)(() => {
		setCurrentPage(1);
	}, [searchQuery, selectedStage]);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			const params = new URLSearchParams(window.location.search);
			const sel = params.get("selected") || params.get("movement");
			if (sel) handleOpenMovement(sel, sel);
		}
	}, [handleOpenMovement]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				const activeTag = document.activeElement?.tagName.toLowerCase();
				if (activeTag !== "input" && activeTag !== "textarea") {
					e.preventDefault();
					searchInputRef.current?.focus();
				}
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	const movementsData = (0, import_react.useMemo)(() => {
		return bookings.map((b, idx) => {
			const rawRef = b.movement_number || b.booking_reference || b.movementNumber || b.reference;
			const fallbackRef = `MOV-2026-${String(idx + 1).padStart(5, "0")}`;
			let buyerName = b.buyer?.name || b.buyer?.company_name || b.buyerName || b.buyer_name || "";
			let supplierName = b.supplier?.name || b.supplier?.company_name || b.supplierName || b.supplier_name || b.supplier_company || "";
			if (!buyerName && b.buyer_id) try {
				const localBuyer = getLocalBuyers().find((byr) => byr.id === b.buyer_id);
				if (localBuyer) buyerName = localBuyer.name || localBuyer.company || "";
			} catch {}
			if (!supplierName && b.supplier_id) try {
				const localSupplier = getLocalSuppliers().find((sup) => sup.id === b.supplier_id);
				if (localSupplier) supplierName = localSupplier.name || localSupplier.companyName || "";
			} catch {}
			const forwarderName = b.status === "Booking Confirmed" || b.movement_status === "Confirmed" || b.is_movement_confirmed === true || Boolean(b.confirmed_at) || Boolean(b.confirmed_by) || Boolean(b.awardedForwarderName) ? b.awardedForwarderName || b.confirmed_by || b.forwarder?.name || b.forwarder?.company_name || b.forwarderName || b.forwarder_name || b.shipping_line?.name || "Confirmed Forwarder" : "Pending Award";
			const rawPol = b.origin_port || b.origin || b.polName || b.pol_code;
			const cleanPol = rawPol && typeof rawPol === "string" && rawPol.trim() && rawPol.trim() !== "POL" ? rawPol.trim().length <= 5 ? rawPol.trim().toUpperCase() : rawPol.trim().match(/\(([A-Z]{3,5})\)/)?.[1] || rawPol.trim().slice(0, 3).toUpperCase() : "Pending";
			const rawPod = b.destination_port || b.destination || b.podName || b.pod_code;
			const cleanPod = rawPod && typeof rawPod === "string" && rawPod.trim() && rawPod.trim() !== "POD" ? rawPod.trim().length <= 5 ? rawPod.trim().toUpperCase() : rawPod.trim().match(/\(([A-Z]{3,5})\)/)?.[1] || rawPod.trim().slice(0, 3).toUpperCase() : "Pending";
			const rawVessel = b.vessel_name || b.vesselName || b.vessel;
			const cleanVessel = rawVessel && typeof rawVessel === "string" && rawVessel.trim() && rawVessel.trim().toUpperCase() !== "TBD" && rawVessel.trim().toUpperCase() !== "PENDING ALLOCATION" ? rawVessel.trim() : "Pending";
			const cleanEtd = b.etd && !isNaN(new Date(b.etd).getTime()) ? new Date(b.etd).toLocaleDateString("en-GB", {
				day: "2-digit",
				month: "short"
			}) : "Pending";
			const cleanEta = b.eta && !isNaN(new Date(b.eta).getTime()) ? new Date(b.eta).toLocaleDateString("en-GB", {
				day: "2-digit",
				month: "short"
			}) : "Pending";
			return {
				id: b.id,
				ref: rawRef || fallbackRef,
				buyer: buyerName || "—",
				supplier: supplierName || "—",
				forwarder: forwarderName || "—",
				pol: cleanPol,
				pod: cleanPod,
				vessel: cleanVessel,
				etd: cleanEtd,
				eta: cleanEta,
				stage: b.status,
				movementStatus: b.movement_status,
				confirmationStatus: b.confirmation_status,
				rate: b.total_freight ? `$${b.total_freight.toLocaleString()}` : "Pending Quote",
				age: "Just now"
			};
		});
	}, [bookings]);
	const filteredMovements = (0, import_react.useMemo)(() => {
		return movementsData.filter((m) => {
			if (selectedStage !== "all") {
				const canonical = normalizeLifecycleStage(m.stage, m.confirmationStatus, m.ref || m.id, m.movementStatus);
				if (selectedStage === "CONFIRMED") {
					if (!(canonical === "Booking Confirmed" || canonical === "Cargo Received at Warehouse" || canonical === "Stuffing & Sealing" || canonical === "Customs Cleared" || canonical === "Container Shipped from Warehouse")) return false;
				} else if (selectedStage === "REQUESTED") {
					if (canonical !== "Booking Requested" && canonical !== "Draft") return false;
				} else if (selectedStage === "IN_TRANSIT") {
					if (canonical !== "In Transit" && canonical !== "Arrived") return false;
				} else if (selectedStage === "DELIVERED") {
					if (canonical !== "Delivered") return false;
				}
			}
			if (!searchQuery.trim()) return true;
			const q = searchQuery.trim().toLowerCase();
			return m.ref.toLowerCase().includes(q) || m.buyer.toLowerCase().includes(q) || m.supplier.toLowerCase().includes(q) || m.forwarder && m.forwarder.toLowerCase().includes(q) || m.pol.toLowerCase().includes(q) || m.pod.toLowerCase().includes(q) || m.vessel.toLowerCase().includes(q) || m.stage && m.stage.toLowerCase().includes(q) || m.rate && m.rate.toLowerCase().includes(q) || m.etd && m.etd.toLowerCase().includes(q) || m.eta && m.eta.toLowerCase().includes(q);
		});
	}, [
		movementsData,
		selectedStage,
		searchQuery
	]);
	const totalPages = (0, import_react.useMemo)(() => {
		return Math.ceil(filteredMovements.length / PAGE_SIZE) || 1;
	}, [filteredMovements.length, PAGE_SIZE]);
	const currentSafePage = (0, import_react.useMemo)(() => {
		return Math.min(Math.max(1, currentPage), totalPages);
	}, [currentPage, totalPages]);
	const paginatedMovements = (0, import_react.useMemo)(() => {
		return filteredMovements.slice((currentSafePage - 1) * PAGE_SIZE, currentSafePage * PAGE_SIZE);
	}, [
		filteredMovements,
		currentSafePage,
		PAGE_SIZE
	]);
	if (isLoading && bookings.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecentMovementsSkeleton, {}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 1437,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-[18px] font-semibold text-slate-900",
							children: "Recent Movements"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 1446,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "rounded-full bg-[#E8F5F6] border border-[#C7E8E8] px-2.5 py-0.5 text-[11px] font-bold text-[#0FA3B1]",
							children: "Live Real-Time"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 1447,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 1445,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-[13.5px] text-slate-500",
						children: "Click any shipment to inspect and advance its full logistics lifecycle stage."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1451,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 1444,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setIsUploadModalOpen(true),
							className: "flex items-center gap-1.5 rounded-xl border border-[#0FA3B1]/20 bg-[#E8F5F6] px-3.5 py-2 text-[12.5px] font-semibold text-[#0FA3B1] transition-all hover:bg-[#0FA3B1]/15 active:scale-98 cursor-pointer shadow-2xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Upload, { className: "size-3.5 stroke-[2.2]" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1461,
								columnNumber: 15
							}, this), "Upload Bookings"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 1456,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1455,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 1443,
					columnNumber: 9
				}, this),
				movementsData.length > 0 && /* @__PURE__ */ (void 0)("div", {
					className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "relative flex-1",
						children: [
							/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1472,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("input", {
								ref: searchInputRef,
								type: "text",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								placeholder: "Search by reference, buyer, supplier, forwarder, port, or vessel...",
								className: "h-[42px] w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-20 text-[13.5px] text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-[#0FA3B1] focus:bg-white focus:shadow-[0_0_0_3px_rgba(15,163,177,0.12)] focus:outline-none"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1473,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5",
								children: searchQuery ? /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setSearchQuery(""),
									"aria-label": "Clear search",
									className: "rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700 cursor-pointer",
									children: /* @__PURE__ */ (void 0)(X, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1489,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 1483,
									columnNumber: 19
								}, this) : /* @__PURE__ */ (void 0)("kbd", {
									className: "pointer-events-none hidden items-center gap-0.5 rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10.5px] font-semibold text-slate-400 shadow-2xs sm:inline-flex",
									children: "⌘ K"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 1492,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1481,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 1471,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (void 0)(DropdownMenu, { children: [/* @__PURE__ */ (void 0)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (void 0)("button", {
								type: "button",
								className: cn("inline-flex h-[42px] items-center gap-2 rounded-xl border px-3.5 text-[13px] font-semibold transition-all duration-200 cursor-pointer", selectedStage !== "all" ? "border-[#0FA3B1]/40 bg-[#E8F5F6] text-[#0FA3B1]" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"),
								children: [
									/* @__PURE__ */ (void 0)(Funnel, { className: "size-3.5 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1512,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("span", {
										className: "max-w-[130px] truncate",
										children: selectedStage === "all" ? "All Stages" : selectedStage === "CONFIRMED" ? "Confirmed" : selectedStage === "REQUESTED" ? "Requested" : selectedStage === "IN_TRANSIT" ? "In Transit" : selectedStage === "DELIVERED" ? "Delivered" : selectedStage
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1513,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1526,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 1503,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 1502,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)(DropdownMenuContent, {
							align: "end",
							className: "w-52 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl",
							children: [
								/* @__PURE__ */ (void 0)(DropdownMenuItem, {
									onClick: () => setSelectedStage("all"),
									className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (void 0)("span", { children: "All Stages" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1537,
										columnNumber: 21
									}, this), selectedStage === "all" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1538,
										columnNumber: 49
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 1533,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)(DropdownMenuItem, {
									onClick: () => setSelectedStage("CONFIRMED"),
									className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (void 0)("span", { children: "Booking Confirmed" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1544,
										columnNumber: 21
									}, this), selectedStage === "CONFIRMED" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1545,
										columnNumber: 55
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 1540,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)(DropdownMenuItem, {
									onClick: () => setSelectedStage("REQUESTED"),
									className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (void 0)("span", { children: "Requested / Pending" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1551,
										columnNumber: 21
									}, this), selectedStage === "REQUESTED" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1552,
										columnNumber: 55
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 1547,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)(DropdownMenuItem, {
									onClick: () => setSelectedStage("IN_TRANSIT"),
									className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (void 0)("span", { children: "In Transit / Loaded" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1558,
										columnNumber: 21
									}, this), selectedStage === "IN_TRANSIT" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1559,
										columnNumber: 56
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 1554,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)(DropdownMenuItem, {
									onClick: () => setSelectedStage("DELIVERED"),
									className: "flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (void 0)("span", { children: "Delivered / Cleared" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1565,
										columnNumber: 21
									}, this), selectedStage === "DELIVERED" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#0FA3B1]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1566,
										columnNumber: 55
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 1561,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 1529,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 1501,
							columnNumber: 15
						}, this), (searchQuery !== "" || selectedStage !== "all") && /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => {
								setSearchQuery("");
								setSelectedStage("all");
							},
							title: "Reset filters",
							className: "inline-flex h-[42px] items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 text-[12.5px] font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer",
							children: [/* @__PURE__ */ (void 0)(RotateCcw, { className: "size-3.5 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1581,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "hidden sm:inline",
								children: "Reset"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1582,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 1572,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 1500,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 1469,
					columnNumber: 11
				}, this),
				movementsData.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col items-center justify-center p-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid size-14 place-items-center rounded-2xl bg-[#E8F5F6] text-[#0FA3B1]",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "size-7" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1592,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 1591,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
							className: "mt-4 text-[16px] font-semibold text-slate-900",
							children: "No Movements Yet"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 1594,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 max-w-sm text-[13px] text-slate-500",
							children: "You haven't created any container bookings in this profile yet. Create your first booking to start tracking real-time logistics."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 1595,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/new-booking",
							className: "mt-5 flex items-center gap-2 rounded-xl bg-[#0FA3B1] hover:bg-[#078A99] px-4 py-2 text-[13px] font-semibold text-white shadow transition-transform hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1603,
								columnNumber: 15
							}, this), "Create First Booking"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 1599,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 1590,
					columnNumber: 11
				}, this) : filteredMovements.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col items-center justify-center p-10 text-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid size-12 place-items-center rounded-2xl bg-[#E8F5F6] text-[#0FA3B1]",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1610,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 1609,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
							className: "mt-3.5 text-[15px] font-semibold text-slate-900",
							children: "No matching movements found"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 1612,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 max-w-sm text-[13px] text-slate-500",
							children: [
								"No shipments match \"",
								searchQuery || selectedStage,
								"\". Check the reference, buyer, supplier, forwarder, or reset filters."
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 1615,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => {
								setSearchQuery("");
								setSelectedStage("all");
							},
							className: "mt-4 inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-[12.5px] font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "size-3.5 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1627,
								columnNumber: 15
							}, this), "Clear Search & Filters"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 1619,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 1608,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "hidden overflow-x-auto md:block -mx-6 sm:-mx-7 px-6 sm:px-7",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
							className: "w-full min-w-[1100px] border-separate border-spacing-0 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
								className: "bg-[#ECEEF1] text-[#5E6778]",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "rounded-l-2xl pl-6 pr-4 py-3.5 text-[13px] font-medium tracking-normal text-[#5E6778]",
										children: "Reference"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1638,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3.5 text-[13px] font-medium tracking-normal text-[#5E6778]",
										children: "Buyer"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1641,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3.5 text-[13px] font-medium tracking-normal text-[#5E6778]",
										children: "Supplier"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1644,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3.5 text-[13px] font-medium tracking-normal text-[#5E6778]",
										children: "Forwarder"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1647,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-3.5 py-3.5 text-[13px] font-medium tracking-normal text-[#5E6778]",
										children: "POL"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1650,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-3.5 py-3.5 text-[13px] font-medium tracking-normal text-[#5E6778]",
										children: "POD"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1653,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3.5 text-[13px] font-medium tracking-normal text-[#5E6778]",
										children: "Vessel"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1656,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3.5 text-[13px] font-medium tracking-normal text-[#5E6778]",
										children: "ETD"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1659,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3.5 text-[13px] font-medium tracking-normal text-[#5E6778]",
										children: "ETA"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1662,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3.5 text-[13px] font-medium tracking-normal text-[#5E6778]",
										children: "Status"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1665,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3.5 text-[13px] font-medium tracking-normal text-[#5E6778]",
										children: "Total Freight"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1668,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3.5 text-[13px] font-medium tracking-normal text-[#5E6778]",
										children: "Age"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1671,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "rounded-r-2xl pr-6 pl-2 py-3.5 text-right text-[13px] font-medium text-[#5E6778] w-12",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "sr-only",
											children: "Actions"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1675,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1674,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 1637,
								columnNumber: 19
							}, this) }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1636,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: paginatedMovements.map((m, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
								onClick: () => handleOpenMovement(m.id, m.ref),
								className: "group cursor-pointer border-b border-[#F0F2F5] transition-colors duration-150 last:border-b-0 hover:bg-[#F8FAFC]",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "whitespace-nowrap pl-6 pr-4 py-4.5 text-[13.5px] font-semibold tracking-[-0.01em] text-slate-900 group-hover:text-blue-600 transition-colors",
										children: m.ref
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1686,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "whitespace-nowrap px-4 py-4.5 text-[13.5px] text-slate-700 font-medium",
										children: m.buyer
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1689,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "whitespace-nowrap px-4 py-4.5 text-[13.5px] text-slate-600",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "truncate max-w-[140px] inline-block align-middle font-medium",
											title: m.supplier,
											children: m.supplier
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1693,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1692,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "whitespace-nowrap px-4 py-4.5 text-[13.5px]",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "truncate max-w-[140px] inline-block align-middle font-semibold text-[#0FA3B1]",
											title: m.forwarder,
											children: m.forwarder
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1701,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1700,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-3.5 py-4.5 text-[13px] font-semibold text-slate-700",
										children: m.pol === "Pending" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center rounded-md bg-amber-50 border border-amber-200/60 px-2 py-0.5 text-[11px] font-medium text-amber-700",
											children: "Pending"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1710,
											columnNumber: 27
										}, this) : m.pol
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1708,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-3.5 py-4.5 text-[13px] font-semibold text-slate-700",
										children: m.pod === "Pending" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center rounded-md bg-amber-50 border border-amber-200/60 px-2 py-0.5 text-[11px] font-medium text-amber-700",
											children: "Pending"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1719,
											columnNumber: 27
										}, this) : m.pod
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1717,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "whitespace-nowrap px-4 py-4.5 text-[13px] text-slate-600",
										children: m.vessel === "Pending" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center rounded-md bg-slate-100 border border-slate-200/80 px-2 py-0.5 text-[11px] font-medium text-slate-500",
											children: "Pending"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1728,
											columnNumber: 27
										}, this) : m.vessel
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1726,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "whitespace-nowrap px-4 py-4.5 text-[13px] text-slate-600",
										children: m.etd === "Pending" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center rounded-md bg-slate-100 border border-slate-200/80 px-2 py-0.5 text-[11px] font-medium text-slate-500",
											children: "Pending"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1737,
											columnNumber: 27
										}, this) : m.etd
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1735,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "whitespace-nowrap px-4 py-4.5 text-[13px] text-slate-600",
										children: m.eta === "Pending" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center rounded-md bg-slate-100 border border-slate-200/80 px-2 py-0.5 text-[11px] font-medium text-slate-500",
											children: "Pending"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1746,
											columnNumber: 27
										}, this) : m.eta
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1744,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-4 py-4.5",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StageBadge, {
											stage: m.stage,
											confirmationStatus: m.confirmationStatus,
											refOrId: m.id || m.ref,
											movementStatus: m.movementStatus
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1754,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1753,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-4 py-4.5 text-[13.5px] font-medium text-slate-900",
										children: m.rate
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1761,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-4 py-4.5 text-[12.5px] text-slate-400",
										children: m.age
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1764,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "pr-6 pl-2 py-4.5 text-right",
										onClick: (e) => e.stopPropagation(),
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
												type: "button",
												"aria-label": "Movement options",
												className: "size-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EllipsisVertical, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1776,
													columnNumber: 31
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1771,
												columnNumber: 29
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1770,
											columnNumber: 27
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
											align: "end",
											className: "w-48 text-xs rounded-xl shadow-lg border border-slate-200 p-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
													onClick: () => handleOpenMovement(m.id, m.ref),
													className: "gap-2 cursor-pointer font-medium",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5 text-slate-500" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 1787,
														columnNumber: 31
													}, this), "Inspect Lifecycle"]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 1783,
													columnNumber: 29
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
													onClick: () => setEditingMovement(m),
													className: "gap-2 cursor-pointer font-medium text-slate-800",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PenLine, { className: "size-3.5 text-blue-500" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 1794,
														columnNumber: 31
													}, this), "Update Movement"]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 1790,
													columnNumber: 29
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
													onClick: () => {
														navigator.clipboard.writeText(m.ref);
														toast.success(`Movement reference ${m.ref} copied`);
													},
													className: "gap-2 cursor-pointer font-medium text-slate-600",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "size-3.5 text-slate-400" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 1804,
														columnNumber: 31
													}, this), "Copy Reference"]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 1797,
													columnNumber: 29
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-px bg-slate-100 my-1" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1807,
													columnNumber: 29
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
													onClick: () => void handleDeleteMovement(m),
													className: "gap-2 cursor-pointer font-medium text-rose-600 focus:bg-rose-50 focus:text-rose-700",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-3.5 text-rose-500" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 1812,
														columnNumber: 31
													}, this), "Delete Movement"]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 1808,
													columnNumber: 29
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1779,
											columnNumber: 27
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1769,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1765,
										columnNumber: 23
									}, this)
								]
							}, m.id ? `mov-${m.id}` : `mov-${m.ref}-${idx}`, true, {
								fileName: _jsxFileName$1,
								lineNumber: 1681,
								columnNumber: 21
							}, this)) }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1679,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 1635,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1634,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-3 md:hidden",
						children: paginatedMovements.map((m, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							onClick: () => handleOpenMovement(m.id, m.ref),
							className: "w-full rounded-2xl border border-slate-200/90 bg-white p-4 text-left transition hover:bg-slate-50 active:bg-slate-100/70 cursor-pointer shadow-2xs space-y-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-sm font-bold text-slate-900",
										children: m.ref
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1833,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1.5",
										onClick: (e) => e.stopPropagation(),
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StageBadge, {
											stage: m.stage,
											confirmationStatus: m.confirmationStatus,
											refOrId: m.id || m.ref,
											movementStatus: m.movementStatus
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1835,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
												type: "button",
												"aria-label": "Options",
												className: "size-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EllipsisVertical, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1848,
													columnNumber: 29
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1843,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1842,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
											align: "end",
											className: "w-44 text-xs rounded-xl shadow-lg border border-slate-200 p-1",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => setEditingMovement(m),
												className: "gap-2 font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PenLine, { className: "size-3.5 text-blue-500" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1859,
													columnNumber: 29
												}, this), "Update"]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 1855,
												columnNumber: 27
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onClick: () => void handleDeleteMovement(m),
												className: "gap-2 font-medium text-rose-600",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-3.5 text-rose-500" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 1866,
													columnNumber: 29
												}, this), "Delete"]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 1862,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1851,
											columnNumber: 25
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1841,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 1834,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 1832,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-xs text-slate-700",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-slate-900 font-semibold",
										children: m.buyer
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1874,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-slate-500",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
											className: "text-slate-400 font-normal",
											children: "Shipper: "
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1877,
											columnNumber: 25
										}, this), m.supplier] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1876,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-[#0FA3B1] font-medium",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
												className: "text-slate-400 font-normal",
												children: "Forwarder: "
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 1881,
												columnNumber: 25
											}, this), m.forwarder]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1880,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 1875,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 1873,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between rounded-xl bg-slate-50/80 p-2.5 text-xs text-slate-600 border border-slate-100",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "font-semibold text-slate-800",
											children: [
												m.pol,
												" → ",
												m.pod
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1887,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-slate-500 text-[11px]",
											children: [
												"ETD ",
												m.etd,
												" • ETA ",
												m.eta
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 1890,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "font-bold text-slate-900",
											children: m.rate
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 1893,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 1886,
									columnNumber: 19
								}, this)
							]
						}, m.id ? `mob-mov-${m.id}` : `mob-mov-${m.ref}-${idx}`, true, {
							fileName: _jsxFileName$1,
							lineNumber: 1827,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1825,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PillPagination, {
						currentPage: currentSafePage,
						totalPages,
						onPageChange: setCurrentPage,
						totalItems: filteredMovements.length,
						pageSize: PAGE_SIZE,
						itemName: "movements",
						className: "mt-2 pt-2 border-t border-slate-100"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1900,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 1632,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 1442,
			columnNumber: 7
		}, this),
		isDrawerOpen && /* @__PURE__ */ (void 0)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (void 0)(MovementLifecycleDrawer, {
				isOpen: isDrawerOpen,
				onClose: () => setIsDrawerOpen(false),
				bookingId: selectedBookingId,
				initialReference: selectedRef,
				initialBooking: selectedBooking,
				onMovementUpdated: () => {
					refetch();
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1915,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 1914,
			columnNumber: 9
		}, this),
		isUploadModalOpen && /* @__PURE__ */ (void 0)(ExcelBookingUploadModal, {
			isOpen: isUploadModalOpen,
			onClose: () => setIsUploadModalOpen(false),
			existingBookings: bookings,
			onUploadSuccess: () => {
				refetch();
			}
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 1929,
			columnNumber: 9
		}, this),
		editingMovement && /* @__PURE__ */ (void 0)(EditMovementModal, {
			isOpen: Boolean(editingMovement),
			onClose: () => setEditingMovement(null),
			movement: editingMovement,
			onUpdated: () => {
				refetch();
			}
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 1940,
			columnNumber: 9
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 1441,
		columnNumber: 5
	}, this);
});
var UpcomingCutoffs = (0, import_react.memo)(function UpcomingCutoffs() {
	const [selectedMovementRef, setSelectedMovementRef] = (0, import_react.useState)(null);
	const [cutOffList, setCutOffList] = (0, import_react.useState)(() => getAllUpcomingCutOffs());
	(0, import_react.useEffect)(() => {
		const refreshCutOffs = () => {
			setCutOffList(getAllUpcomingCutOffs());
		};
		window.addEventListener("nashmia_movement_cutoff_updated", refreshCutOffs);
		window.addEventListener("nashmia_bookings_updated", refreshCutOffs);
		return () => {
			window.removeEventListener("nashmia_movement_cutoff_updated", refreshCutOffs);
			window.removeEventListener("nashmia_bookings_updated", refreshCutOffs);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "text-[18px] font-semibold text-slate-900",
					children: "Upcoming Cut-offs"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 1973,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-[11.5px] font-medium text-slate-400",
					children: "By Movement"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 1974,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 1972,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-[13.5px] text-slate-500",
				children: "Deadlines in the next few days."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1976,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 space-y-2.5",
				children: cutOffList.slice(0, 5).map((c, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => setSelectedMovementRef(c.ref),
					className: "w-full text-left flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3.5 transition-colors hover:border-amber-200 hover:bg-amber-50/40 cursor-pointer group",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "grid size-9 shrink-0 place-items-center rounded-xl border border-amber-200/80 bg-amber-50 text-amber-600 group-hover:bg-amber-100/80",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Timer, { className: "size-[17px]" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1986,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 1985,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "num text-[12.5px] font-bold text-slate-900 group-hover:text-amber-800",
								children: c.ref
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1989,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[12px] text-slate-500",
									children: c.type
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 1993,
									columnNumber: 19
								}, this), c.reminderDateTime && /* @__PURE__ */ (void 0)("span", {
									className: "text-[10px] font-semibold text-amber-700 bg-amber-100/70 px-1.5 py-0.5 rounded",
									children: ["48h: ", c.reminderDateTime]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 1995,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 1992,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 1988,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "num text-[13.5px] font-bold text-slate-900",
								children: [
									c.date,
									" · ",
									c.time
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 2002,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11px] font-semibold text-[#0FA3B1]",
								children: c.in
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 2005,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 2001,
							columnNumber: 15
						}, this)
					]
				}, `cutoff-${c.type}-${c.ref}-${idx}`, true, {
					fileName: _jsxFileName$1,
					lineNumber: 1979,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1977,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 1971,
		columnNumber: 7
	}, this), selectedMovementRef && /* @__PURE__ */ (void 0)(import_react.Suspense, {
		fallback: null,
		children: /* @__PURE__ */ (void 0)(MovementLifecycleDrawer, {
			isOpen: Boolean(selectedMovementRef),
			onClose: () => setSelectedMovementRef(null),
			initialReference: selectedMovementRef
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 2014,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 2013,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 1970,
		columnNumber: 5
	}, this);
});
var QuickActions = (0, import_react.memo)(function QuickActions() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "text-[18px] font-semibold text-slate-900",
				children: "Quick Actions"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 2028,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-[13.5px] text-slate-500",
				children: "Start a common operation."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 2029,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 grid grid-cols-2 gap-2.5",
				children: quickActions.map((a) => {
					const Icon = iconMap[a.icon] ?? Plus;
					if (a.label === "New Booking") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/new-booking",
						className: "group flex flex-col items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:border-slate-200 hover:bg-slate-50",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "grid size-9 place-items-center rounded-xl border border-[#C7E8E8] bg-[#E8F5F6] text-[#0FA3B1] transition-transform duration-150 group-hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-[17px]" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 2041,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 2040,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[13px] font-semibold text-slate-800",
							children: a.label
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 2043,
							columnNumber: 17
						}, this)]
					}, a.label, true, {
						fileName: _jsxFileName$1,
						lineNumber: 2035,
						columnNumber: 15
					}, this);
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "group flex flex-col items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:border-slate-200 hover:bg-slate-50",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "grid size-9 place-items-center rounded-xl border border-[#C7E8E8] bg-[#E8F5F6] text-[#0FA3B1] transition-transform duration-150 group-hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-[17px]" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 2054,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 2053,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[13px] font-semibold text-slate-800",
							children: a.label
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 2056,
							columnNumber: 15
						}, this)]
					}, a.label, true, {
						fileName: _jsxFileName$1,
						lineNumber: 2048,
						columnNumber: 13
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 2030,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 2027,
		columnNumber: 5
	}, this);
});
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function Dashboard() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, {
		maxWidth: "max-w-[1600px]",
		mainClassName: "px-4 pb-24 pt-6 sm:px-6 sm:pt-8 lg:pb-10 lg:pr-8",
		children: ({ onOpenMobileMenu }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DashboardDataProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TopHeader, { onOpenMobileMenu }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 10,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageTitle, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 11,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBoundary, {
					moduleName: "KPI Metrics",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KpiGrid, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 14,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-1 gap-5 xl:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "xl:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBoundary, {
							moduleName: "Lifecycle Tracker",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lifecycle, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 20,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 19,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBoundary, {
						moduleName: "Action Items",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NeedsAttention, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-1 gap-5 xl:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "xl:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBoundary, {
							moduleName: "Recent Movements Table",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecentMovements, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 31,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBoundary, {
							moduleName: "Upcoming Cut-offs",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpcomingCutoffs, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBoundary, {
							moduleName: "Quick Actions",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuickActions, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 13
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 10
	}, this);
}
//#endregion
export { Dashboard as component, routes_Dv03X_wc_exports as n, AINotificationCenter as t };
