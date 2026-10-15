import { o as __toESM } from "../_runtime.mjs";
import { n as supabase, t as isSupabaseConfigured } from "./supabase-lbao-IEt.mjs";
import { $ as deleteRateCardFromSupabase, A as mapGmailMessageToEmailRecord, At as safeUuid, B as sendEmailDirectlyViaGmail, C as getGmailAccessToken, Ft as scheduleCutOffReminders, Ht as updateLocalBooking, Mt as saveCutOffsForMovement, O as isGmailQuotaCooldownActive, P as processIncomingForwarderEmailReply, S as getCachedGoogleUser, St as isBookingConfirmed, Ut as updateRateCardInSupabase, W as CURRENCY_OPTIONS, _ as fetchLiveGmailMessages, a as connectGmailAccount, at as fetchRateCardsFromSupabase, bt as insertRateCardToSupabase, et as extractMovementNumber, g as fetchGmailConnectionState, i as classifyConfirmationDeterministic, it as fetchForwardersFromSupabase, kt as safeInsertNotification, nt as fetchBookingsFromSupabase, pt as getLocalBookings, s as disconnectGmailAccount, st as generateAllCutOffReminders, tt as fetchBookingByIdFromSupabase, wt as markIdentifierConfirmed, x as getCachedGmailConnectionState } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as createFileRoute, b as useNavigate, d as HeadContent, f as useLocation, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageTransitionProvider, r as cn, t as PageTransition } from "./PageTransition-CIz7I5li.mjs";
import { Dn as AlarmClock, N as Send, P as Search, R as RotateCcw, St as Info, V as Receipt, W as Plus, Wt as DollarSign, Xt as ClipboardList, Zt as Circle, _n as Bell, _t as LayoutGrid, an as ChevronRight, bn as ArrowUpDown, c as Users, cn as Check, ct as MapPin, dn as Building2, h as TriangleAlert, i as X, j as Settings, jt as FileText, lt as Mail, nn as CircleAlert, on as ChevronLeft, ot as Menu, pt as List, q as Pen, qt as Container, s as Warehouse, sn as ChevronDown, tn as CircleCheck, tt as MessageSquare, ut as LogOut, v as Trash2, vt as LayoutDashboard, w as Sparkles } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useQueryClient, n as useQuery, r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as DropdownMenuItemIndicator, c as DropdownMenuRadioItem$1, d as DropdownMenuSubTrigger$1, f as DropdownMenuTrigger$1, i as DropdownMenuItem$1, l as DropdownMenuSeparator$1, n as DropdownMenuCheckboxItem$1, o as DropdownMenuLabel$1, r as DropdownMenuContent$1, s as DropdownMenuPortal, t as DropdownMenu$1, u as DropdownMenuSubContent$1 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pill-toast-C0PQKxTb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$22 = "/app/applet/src/lib/pill-toast.tsx";
var TYPE_CONFIG = {
	comment: {
		icon: MessageSquare,
		iconBg: "bg-blue-50/90",
		iconBorder: "border-blue-200/80 shadow-[inset_0_1px_2px_rgba(59,130,246,0.1)]",
		iconColor: "text-blue-500",
		defaultTitle: "New comment"
	},
	reminder: {
		icon: AlarmClock,
		iconBg: "bg-orange-50/90",
		iconBorder: "border-orange-200/80 shadow-[inset_0_1px_2px_rgba(249,115,22,0.1)]",
		iconColor: "text-orange-500",
		defaultTitle: "Reminder"
	},
	build: {
		icon: Settings,
		iconBg: "bg-purple-50/90",
		iconBorder: "border-purple-200/80 shadow-[inset_0_1px_2px_rgba(168,85,247,0.1)]",
		iconColor: "text-purple-500",
		defaultTitle: "Build Complete"
	},
	mention: {
		icon: Bell,
		iconBg: "bg-amber-50/90",
		iconBorder: "border-amber-200/80 shadow-[inset_0_1px_2px_rgba(245,158,11,0.1)]",
		iconColor: "text-amber-500",
		defaultTitle: "Mention"
	},
	success: {
		icon: CircleCheck,
		iconBg: "bg-emerald-50/90",
		iconBorder: "border-emerald-200/80 shadow-[inset_0_1px_2px_rgba(16,185,129,0.1)]",
		iconColor: "text-emerald-600",
		defaultTitle: "Booking Confirmed"
	},
	error: {
		icon: CircleAlert,
		iconBg: "bg-rose-50/90",
		iconBorder: "border-rose-200/80 shadow-[inset_0_1px_2px_rgba(244,63,94,0.1)]",
		iconColor: "text-rose-500",
		defaultTitle: "Notice"
	},
	info: {
		icon: Info,
		iconBg: "bg-sky-50/90",
		iconBorder: "border-sky-200/80 shadow-[inset_0_1px_2px_rgba(14,165,233,0.1)]",
		iconColor: "text-sky-500",
		defaultTitle: "Information"
	},
	ai: {
		icon: Sparkles,
		iconBg: "bg-teal-50/90",
		iconBorder: "border-teal-200/80 shadow-[inset_0_1px_2px_rgba(15,163,177,0.1)]",
		iconColor: "text-[#0FA3B1]",
		defaultTitle: "AI Update"
	}
};
function PillToastCard({ title, description, type = "info", customIcon, bookingReference, onDismiss }) {
	const config = TYPE_CONFIG[type] || TYPE_CONFIG.info;
	const IconComponent = customIcon || config.icon;
	const detectedRef = bookingReference || (typeof title === "string" ? title.match(/\b(MOV-\d{4}-\d{3,6}|BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|NASH-[A-Z0-9-]+|BKG-[A-Z0-9-]+)\b/i)?.[0] : void 0) || (typeof description === "string" ? description.match(/\b(MOV-\d{4}-\d{3,6}|BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|NASH-[A-Z0-9-]+|BKG-[A-Z0-9-]+)\b/i)?.[0] : void 0);
	let displayTitle = title || config.defaultTitle;
	if (typeof title === "string" && detectedRef && title.includes(detectedRef)) {
		const cleaned = title.replace(`: ${detectedRef}`, "").replace(` ${detectedRef}`, "").trim();
		if (cleaned) displayTitle = cleaned;
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		role: "alert",
		onClick: onDismiss,
		className: cn("group relative flex cursor-pointer items-center gap-3.5 rounded-full bg-white/95 py-2.5 pl-3 pr-8", "border border-slate-100/90 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15),0_2px_8px_-2px_rgba(0,0,0,0.06)]", "backdrop-blur-md transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]", "min-w-[300px] max-w-[460px] select-none"),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("grid size-11 shrink-0 place-items-center rounded-full border text-base transition-transform group-hover:scale-105", config.iconBg, config.iconBorder, config.iconColor),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "size-5 stroke-[1.8]" }, void 0, false, {
				fileName: _jsxFileName$22,
				lineNumber: 155,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$22,
			lineNumber: 147,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex min-w-0 flex-1 flex-col justify-center py-0.5 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-1.5 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "truncate text-[14px] font-bold tracking-tight text-slate-800 leading-tight",
					children: displayTitle
				}, void 0, false, {
					fileName: _jsxFileName$22,
					lineNumber: 161,
					columnNumber: 11
				}, this), detectedRef && /* @__PURE__ */ (void 0)("span", {
					className: "inline-flex shrink-0 items-center rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-800 border border-emerald-200/80 shadow-2xs font-mono",
					children: detectedRef
				}, void 0, false, {
					fileName: _jsxFileName$22,
					lineNumber: 165,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$22,
				lineNumber: 160,
				columnNumber: 9
			}, this), description && /* @__PURE__ */ (void 0)("span", {
				className: "truncate text-[12.5px] font-normal text-slate-500 leading-tight mt-0.5",
				children: description
			}, void 0, false, {
				fileName: _jsxFileName$22,
				lineNumber: 171,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$22,
			lineNumber: 159,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$22,
		lineNumber: 136,
		columnNumber: 5
	}, this);
}
var recentPillToasts = /* @__PURE__ */ new Map();
function showPillToast({ title, description, type = "info", duration = 4e3, icon, bookingReference }) {
	const dedupeKey = `${type}:${title}:${typeof description === "string" ? description : ""}:${bookingReference || ""}`.toLowerCase();
	const now = Date.now();
	const lastShown = recentPillToasts.get(dedupeKey);
	if (lastShown && now - lastShown < 4e3) return "";
	recentPillToasts.set(dedupeKey, now);
	if (recentPillToasts.size > 50) {
		for (const [k, time] of recentPillToasts.entries()) if (now - time > 3e4) recentPillToasts.delete(k);
	}
	return toast.custom((id) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PillToastCard, {
		title,
		description,
		type,
		customIcon: icon,
		bookingReference,
		onDismiss: () => toast.dismiss(id)
	}, void 0, false, {
		fileName: _jsxFileName$22,
		lineNumber: 211,
		columnNumber: 7
	}, this), { duration });
}
showPillToast.comment = (description, title = "New comment", bookingReference) => showPillToast({
	title,
	description,
	type: "comment",
	bookingReference
});
showPillToast.reminder = (description, title = "Reminder", bookingReference) => showPillToast({
	title,
	description,
	type: "reminder",
	bookingReference
});
showPillToast.build = (description, title = "Build Complete", bookingReference) => showPillToast({
	title,
	description,
	type: "build",
	bookingReference
});
showPillToast.mention = (description, title = "Mention", bookingReference) => showPillToast({
	title,
	description,
	type: "mention",
	bookingReference
});
showPillToast.success = (description, title = "Booking Confirmed", bookingReference) => showPillToast({
	title,
	description,
	type: "success",
	bookingReference
});
showPillToast.error = (description, title = "Notice", bookingReference) => showPillToast({
	title,
	description,
	type: "error",
	bookingReference
});
showPillToast.info = (description, title = "Information", bookingReference) => showPillToast({
	title,
	description,
	type: "info",
	bookingReference
});
showPillToast.ai = (description, title = "AI Assistant", bookingReference) => showPillToast({
	title,
	description,
	type: "ai",
	bookingReference
});
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/auth-context-CXGenRZZ.js
/**
* Authentication Navigation & Route Persistence Utilities
* Manages route restoration, redirect targets, and session pre-checks.
*/
var LAST_ROUTE_KEY = "nashmia_last_route";
var REDIRECT_TARGET_KEY = "nashmia_auth_redirect";
var TAB_INITIALIZED_KEY = "nashmia_tab_initialized";
function clearAllAuthTracking() {
	if (typeof window === "undefined") return;
	try {
		localStorage.removeItem(LAST_ROUTE_KEY);
		sessionStorage.removeItem(REDIRECT_TARGET_KEY);
		sessionStorage.removeItem(TAB_INITIALIZED_KEY);
	} catch {}
}
var _jsxFileName$21 = "/app/applet/src/lib/auth-context.tsx";
var AuthContext = (0, import_react.createContext)(void 0);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [session, setSession] = (0, import_react.useState)(null);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const fetchProfile = (0, import_react.useCallback)(async (uid, fallbackEmail) => {
		if (!isSupabaseConfigured) return;
		try {
			const { data, error } = await supabase.from("profiles").select("*").eq("id", uid).maybeSingle();
			if (!error && data) setProfile(data);
			else if (!data) {
				const newProfile = {
					id: uid,
					email: fallbackEmail || "",
					full_name: fallbackEmail ? fallbackEmail.split("@")[0] : "Nashmia User",
					role: "operations",
					company_name: "Nashmia Industries",
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				};
				const { data: created } = await supabase.from("profiles").upsert(newProfile).select().single();
				if (created) setProfile(created);
			}
		} catch (err) {
			console.warn("[Auth] Failed to load or sync profile:", err);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		let isMounted = true;
		async function initAuth() {
			if (!isSupabaseConfigured) {
				if (isMounted) setLoading(false);
				return;
			}
			try {
				const { data: { session: currentSession } } = await supabase.auth.getSession();
				if (isMounted) {
					setSession(currentSession);
					setUser(currentSession?.user ?? null);
					if (currentSession?.user) fetchProfile(currentSession.user.id, currentSession.user.email);
				}
			} catch (err) {
				console.error("[Auth] Initial session error:", err);
			} finally {
				if (isMounted) setLoading(false);
			}
		}
		initAuth();
		const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
			if (!isMounted) return;
			setSession(newSession);
			setUser(newSession?.user ?? null);
			if (newSession?.user) fetchProfile(newSession.user.id, newSession.user.email);
			else setProfile(null);
			setLoading(false);
		});
		return () => {
			isMounted = false;
			subscription.unsubscribe();
		};
	}, [fetchProfile]);
	const signIn = (0, import_react.useCallback)(async (email, password) => {
		if (!isSupabaseConfigured) return {
			success: false,
			error: "Supabase connection is not configured."
		};
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: email.trim().toLowerCase(),
				password
			});
			if (error) return {
				success: false,
				error: error.message
			};
			if (data.user) {
				setUser(data.user);
				setSession(data.session);
				await fetchProfile(data.user.id, data.user.email);
			}
			return { success: true };
		} catch (err) {
			return {
				success: false,
				error: err instanceof Error ? err.message : "Failed to sign in"
			};
		}
	}, [fetchProfile]);
	const signUp = (0, import_react.useCallback)(async (email, password, fullName) => {
		if (!isSupabaseConfigured) return {
			success: false,
			error: "Supabase connection is not configured."
		};
		try {
			const normalizedEmail = email.trim().toLowerCase();
			const trimmedName = fullName.trim();
			const { data, error } = await supabase.auth.signUp({
				email: normalizedEmail,
				password,
				options: { data: { full_name: trimmedName } }
			});
			if (error) return {
				success: false,
				error: error.message
			};
			if (data.user) {
				try {
					await supabase.from("profiles").upsert({
						id: data.user.id,
						email: normalizedEmail,
						full_name: trimmedName,
						role: "operations",
						company_name: "Nashmia Industries",
						updated_at: (/* @__PURE__ */ new Date()).toISOString()
					});
				} catch (profileErr) {
					console.warn("[Auth] Post-signup profile creation warning:", profileErr);
				}
				setUser(data.user);
				setSession(data.session);
				await fetchProfile(data.user.id, normalizedEmail);
			}
			return {
				success: true,
				requiresConfirmation: !data.session && !!data.user
			};
		} catch (err) {
			return {
				success: false,
				error: err instanceof Error ? err.message : "Failed to sign up"
			};
		}
	}, [fetchProfile]);
	const resetPassword = (0, import_react.useCallback)(async (email) => {
		if (!isSupabaseConfigured) return {
			success: false,
			error: "Supabase connection is not configured."
		};
		try {
			const { error } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), { redirectTo: window.location.origin + "/login" });
			if (error) return {
				success: false,
				error: error.message
			};
			return { success: true };
		} catch (err) {
			return {
				success: false,
				error: err instanceof Error ? err.message : "Failed to send reset email"
			};
		}
	}, []);
	const signOut = (0, import_react.useCallback)(async () => {
		clearAllAuthTracking();
		if (isSupabaseConfigured) try {
			await supabase.auth.signOut();
		} catch (err) {
			console.warn("[Auth] Sign out error:", err);
		}
		setUser(null);
		setSession(null);
		setProfile(null);
	}, []);
	const refreshProfile = (0, import_react.useCallback)(async () => {
		if (user?.id) await fetchProfile(user.id, user.email);
	}, [
		user?.id,
		user?.email,
		fetchProfile
	]);
	const organizationId = (0, import_react.useMemo)(() => {
		return profile?.organization_id || user?.user_metadata?.organization_id || user?.app_metadata?.organization_id || null;
	}, [profile, user]);
	const contextValue = (0, import_react.useMemo)(() => ({
		user,
		session,
		profile,
		loading,
		isConfigured: isSupabaseConfigured,
		userId: user?.id ?? null,
		organizationId,
		signIn,
		signUp,
		resetPassword,
		signOut,
		refreshProfile
	}), [
		user,
		session,
		profile,
		loading,
		organizationId,
		signIn,
		signUp,
		resetPassword,
		signOut,
		refreshProfile
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthContext.Provider, {
		value: contextValue,
		children
	}, void 0, false, {
		fileName: _jsxFileName$21,
		lineNumber: 289,
		columnNumber: 10
	}, this);
}
function useAuth() {
	const context = (0, import_react.useContext)(AuthContext);
	if (!context) throw new Error("useAuth must be used within an AuthProvider");
	return context;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-context-dkMClvjp.js
var _jsxFileName$1$1 = "/app/applet/src/lib/use-gmail.tsx";
var GmailContext = (0, import_react.createContext)(void 0);
function GmailProvider({ children }) {
	const { userId } = useAuth();
	const [isConnected, setIsConnected] = (0, import_react.useState)(false);
	const [isConnecting, setIsConnecting] = (0, import_react.useState)(false);
	const [googleEmail, setGoogleEmail] = (0, import_react.useState)(null);
	const [displayName, setDisplayName] = (0, import_react.useState)(null);
	const [avatarUrl, setAvatarUrl] = (0, import_react.useState)(null);
	const [lastSyncAt, setLastSyncAt] = (0, import_react.useState)(null);
	const [liveMessages, setLiveMessages] = (0, import_react.useState)([]);
	const [isLoadingMessages, setIsLoadingMessages] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const cached = getCachedGmailConnectionState();
		if (cached) {
			if (cached.isConnected) setIsConnected(true);
			if (cached.email) setGoogleEmail(cached.email);
			if (cached.displayName) setDisplayName(cached.displayName);
			if (cached.avatarUrl) setAvatarUrl(cached.avatarUrl);
			if (cached.lastSyncAt) setLastSyncAt(cached.lastSyncAt);
		}
	}, []);
	const checkStatus = (0, import_react.useCallback)(async () => {
		try {
			const state = await fetchGmailConnectionState(userId);
			setIsConnected(state.isConnected);
			setGoogleEmail(state.email);
			setDisplayName(state.displayName);
			setAvatarUrl(state.avatarUrl);
			setLastSyncAt(state.lastSyncAt || null);
		} catch (err) {
			console.warn("[GmailContext] Failed to check status:", err);
		}
	}, [userId]);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			checkStatus();
		}, 2500);
		return () => clearTimeout(timer);
	}, [checkStatus]);
	const connect = (0, import_react.useCallback)(async () => {
		setIsConnecting(true);
		try {
			const result = await connectGmailAccount(userId);
			setIsConnected(true);
			setGoogleEmail(result.email);
			setDisplayName(result.displayName);
			setAvatarUrl(result.avatarUrl || null);
			setLastSyncAt((/* @__PURE__ */ new Date()).toISOString());
			showPillToast.info(`Signed in as ${result.email}. You can now send real emails directly.`, "Connected to Gmail");
			return true;
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Failed to connect Gmail account";
			if (msg.includes("popup was blocked") || msg.includes("popup-blocked")) showPillToast.info("Popups were blocked by your browser. Please allow popups for this site in your browser's address bar and click Connect again.", "Popup Blocked");
			else showPillToast.error(msg, "Gmail Connection Notice");
			return false;
		} finally {
			setIsConnecting(false);
		}
	}, [userId]);
	const disconnect = (0, import_react.useCallback)(async () => {
		try {
			await disconnectGmailAccount(userId, googleEmail);
			setIsConnected(false);
			setGoogleEmail(null);
			setDisplayName(null);
			setAvatarUrl(null);
			setLastSyncAt(null);
			setLiveMessages([]);
			showPillToast.info("Disconnected from Gmail account", "Gmail Disconnected");
			if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("gmail_connection_changed", { detail: { connected: false } }));
		} catch (err) {
			console.error("[GmailContext] Disconnect error:", err);
			showPillToast.error("Failed to disconnect Gmail account", "Gmail Notice");
		}
	}, [userId, googleEmail]);
	const sendGmailEmail = (0, import_react.useCallback)(async (values, existingMessageId) => {
		const gmailResult = await sendEmailDirectlyViaGmail({
			fromEmail: values.fromEmail || googleEmail || "projectnashmia1@gmail.com",
			toEmail: values.toEmail,
			toName: values.toName,
			cc: values.cc,
			bcc: values.bcc,
			subject: values.subject,
			body: values.body,
			bookingId: values.bookingId,
			forwarderId: values.forwarderId,
			userId
		});
		if (isSupabaseConfigured) {
			const validUserUuid = safeUuid(userId);
			try {
				if (existingMessageId) await supabase.from("email_messages").update({
					gmail_message_id: gmailResult.gmailMessageId,
					sent_at: (/* @__PURE__ */ new Date()).toISOString()
				}).eq("id", existingMessageId);
				else {
					let targetUserId = validUserUuid;
					if (!targetUserId) {
						const { data: prof } = await supabase.from("profiles").select("id").limit(1).maybeSingle();
						targetUserId = prof?.id || null;
					}
					let verifiedBookingId = null;
					if (values.bookingId) {
						const cleanBid = safeUuid(values.bookingId);
						if (cleanBid) {
							const { data: bCheck } = await supabase.from("bookings").select("id").eq("id", cleanBid).maybeSingle();
							if (bCheck?.id) verifiedBookingId = bCheck.id;
						}
					}
					if (targetUserId) {
						const { data: thread } = await supabase.from("email_threads").insert({
							user_id: targetUserId,
							booking_id: verifiedBookingId,
							subject: values.subject,
							status: "Active",
							gmail_thread_id: gmailResult.gmailThreadId,
							snippet: values.body.slice(0, 100),
							last_message_at: (/* @__PURE__ */ new Date()).toISOString()
						}).select().maybeSingle();
						if (thread) await supabase.from("email_messages").insert({
							thread_id: thread.id,
							sender_email: values.fromEmail || googleEmail || "",
							sender_name: displayName || "Nashmia Operations",
							recipient_email: values.toEmail,
							cc: values.cc || null,
							bcc: values.bcc || null,
							subject: values.subject,
							body: values.body,
							body_html: values.body.replace(/\n/g, "<br/>"),
							direction: "Outbound",
							gmail_message_id: gmailResult.gmailMessageId,
							sent_at: (/* @__PURE__ */ new Date()).toISOString(),
							raw_headers: {
								user_id: targetUserId,
								booking_id: safeUuid(values.bookingId),
								forwarder_id: safeUuid(values.forwarderId),
								recipient_name: values.toName || null,
								email_type: values.emailType,
								status: "sent",
								gmail_thread_id: gmailResult.gmailThreadId
							}
						});
					}
				}
			} catch (dbErr) {
				console.warn("[GmailContext] Failed to persist sent message into Supabase:", dbErr);
			}
		}
		return {
			success: true,
			gmailMessageId: gmailResult.gmailMessageId,
			gmailThreadId: gmailResult.gmailThreadId
		};
	}, [
		userId,
		googleEmail,
		displayName
	]);
	const fetchInbox = (0, import_react.useCallback)(async () => {
		setIsLoadingMessages(true);
		try {
			const messages = await fetchLiveGmailMessages({ maxResults: 25 });
			setLiveMessages(messages);
			setLastSyncAt((/* @__PURE__ */ new Date()).toISOString());
			for (const msg of messages) processIncomingForwarderEmailReply({
				gmailThreadId: msg.threadId,
				gmailMessageId: msg.id,
				senderEmail: msg.fromEmail,
				senderName: msg.fromName,
				subject: msg.subject,
				body: msg.body,
				snippet: msg.snippet
			}).catch((err) => {
				console.debug("[GmailContext] Background forwarder reply route notice:", err);
			});
			return messages;
		} catch (err) {
			console.error("[GmailContext] Fetch inbox error:", err);
			throw err;
		} finally {
			setIsLoadingMessages(false);
		}
	}, []);
	const isSyncingRef = (0, import_react.useRef)(false);
	const syncInboxToApp = (0, import_react.useCallback)(async (options) => {
		if (isSyncingRef.current) return { imported: 0 };
		if (isGmailQuotaCooldownActive()) return { imported: 0 };
		isSyncingRef.current = true;
		try {
			setIsLoadingMessages(true);
			const token = await getGmailAccessToken(userId);
			if (!token && !googleEmail) return { imported: 0 };
			let serverResult = null;
			if (isSupabaseConfigured) try {
				const { data, error } = await supabase.functions.invoke("sync-gmail-replies", { body: {
					userId: safeUuid(userId),
					maxResults: 10
				} });
				if (!error && data) serverResult = data;
			} catch {}
			if (!serverResult || !serverResult.success) {
				const res = await fetch("/api/gmail/sync-replies", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						...token ? { Authorization: `Bearer ${token}` } : {}
					},
					body: JSON.stringify({
						userId: safeUuid(userId),
						userEmail: googleEmail,
						accessToken: token || void 0,
						maxResults: 10
					})
				});
				if (res.ok) serverResult = await res.json();
			}
			const importedCount = serverResult?.newMessages ?? serverResult?.syncedCount ?? 0;
			const confirmedCount = serverResult?.confirmedMovements ?? 0;
			const nowIso = (/* @__PURE__ */ new Date()).toISOString();
			setLastSyncAt(nowIso);
			if (importedCount > 0 && !options?.silent) showPillToast.info(`Received and processed ${importedCount} incoming message(s)${confirmedCount > 0 ? ` • ${confirmedCount} movement(s) confirmed` : ""}.`, "Gmail Inbox Synchronized");
			if (typeof window !== "undefined" && (importedCount > 0 || confirmedCount > 0)) {
				window.dispatchEvent(new CustomEvent("nashmia_emails_updated", { detail: {
					importedCount,
					confirmedCount
				} }));
				window.dispatchEvent(new CustomEvent("nashmia_documents_updated", { detail: { updated: true } }));
				window.dispatchEvent(new CustomEvent("supabase_realtime_bookings_change", { detail: {
					updated: true,
					confirmedCount
				} }));
				window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: { updated: true } }));
				window.dispatchEvent(new CustomEvent("nashmia_multi_forwarder_updated", { detail: { updated: true } }));
				if (Array.isArray(serverResult?.details)) {
					for (const item of serverResult.details) if (item.actionTaken === "AUTO_CONFIRMED") {
						const movRef = item.movementNumber;
						const bId = item.matchedBookingId || movRef;
						if (bId || movRef) {
							updateLocalBooking(bId || movRef, {
								status: "Booking Confirmed",
								confirmation_status: "CONFIRMED",
								confirmed_at: (/* @__PURE__ */ new Date()).toISOString(),
								confirmed_by: "Forwarder Email Confirmation"
							});
							if (movRef && movRef !== bId) updateLocalBooking(movRef, {
								status: "Booking Confirmed",
								confirmation_status: "CONFIRMED",
								confirmed_at: (/* @__PURE__ */ new Date()).toISOString(),
								confirmed_by: "Forwarder Email Confirmation"
							});
							window.dispatchEvent(new CustomEvent("nashmia_booking_confirmed", { detail: {
								bookingId: bId,
								movementNumber: movRef,
								bookingReference: movRef,
								status: "Booking Confirmed"
							} }));
						}
					}
				}
				window.dispatchEvent(new CustomEvent("nashmia_booking_status_updated", { detail: { updated: true } }));
			}
			return { imported: importedCount };
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Failed to sync inbox";
			if (!options?.silent) showPillToast.error(msg, "Inbox Sync Notice");
			return { imported: 0 };
		} finally {
			setIsLoadingMessages(false);
			isSyncingRef.current = false;
		}
	}, [userId, googleEmail]);
	(0, import_react.useEffect)(() => {
		if (!isConnected) return;
		let lastSyncTime = Date.now();
		const initialTimer = setTimeout(() => {
			lastSyncTime = Date.now();
			syncInboxToApp({ silent: true });
		}, 1500);
		const interval = setInterval(() => {
			if (typeof document !== "undefined" && document.visibilityState !== "visible") return;
			lastSyncTime = Date.now();
			syncInboxToApp({ silent: true });
		}, 3e4);
		const handleFocus = () => {
			if (Date.now() - lastSyncTime > 3e3) {
				lastSyncTime = Date.now();
				syncInboxToApp({ silent: true });
			}
		};
		const handleEmailSent = () => {
			setTimeout(() => {
				lastSyncTime = Date.now();
				syncInboxToApp({ silent: true });
			}, 1500);
			setTimeout(() => {
				lastSyncTime = Date.now();
				syncInboxToApp({ silent: true });
			}, 5e3);
		};
		window.addEventListener("focus", handleFocus);
		window.addEventListener("nashmia:email-sent", handleEmailSent);
		return () => {
			clearTimeout(initialTimer);
			clearInterval(interval);
			window.removeEventListener("focus", handleFocus);
			window.removeEventListener("nashmia:email-sent", handleEmailSent);
		};
	}, [isConnected, syncInboxToApp]);
	const contextValue = (0, import_react.useMemo)(() => ({
		isConnected,
		isConnecting,
		googleEmail,
		displayName,
		avatarUrl,
		lastSyncAt,
		liveMessages,
		isLoadingMessages,
		connect,
		disconnect,
		sendGmailEmail,
		fetchInbox,
		syncInboxToApp
	}), [
		isConnected,
		isConnecting,
		googleEmail,
		displayName,
		avatarUrl,
		lastSyncAt,
		liveMessages,
		isLoadingMessages,
		connect,
		disconnect,
		sendGmailEmail,
		fetchInbox,
		syncInboxToApp
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GmailContext.Provider, {
		value: contextValue,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1$1,
		lineNumber: 548,
		columnNumber: 10
	}, this);
}
function useGmail() {
	const context = (0, import_react.useContext)(GmailContext);
	if (!context) throw new Error("useGmail must be used within a GmailProvider");
	return context;
}
/**
* Maps raw database thread + messages + bookings + forwarders into a frontend EmailMessageRecord
*/
function mapDatabaseEmailToRecord(msg, thread, booking, forwarder) {
	let rawStatus = (msg.status || thread?.status || "SENT").toUpperCase().trim();
	if (rawStatus === "OUTBOUND" || rawStatus === "INBOUND") rawStatus = msg.sent_at ? "SENT" : "PENDING";
	let status = "SENT";
	if ([
		"DRAFT",
		"PENDING",
		"SENDING",
		"SENT",
		"FAILED",
		"CANCELLED"
	].includes(rawStatus)) status = rawStatus;
	else if (rawStatus === "DELIVERED" || rawStatus === "COMPLETED") status = "SENT";
	else if (rawStatus === "QUEUED" || rawStatus === "WAITING") status = "PENDING";
	const headers = msg.raw_headers || {};
	const movementNumber = msg.movement_number || headers.movement_number || thread?.movement_number || booking?.movement_number || extractMovementNumber(msg.subject) || extractMovementNumber(thread?.subject) || extractMovementNumber(msg.body) || (booking?.booking_reference && booking.booking_reference.startsWith("MOV-") ? booking.booking_reference : null) || (booking?.reference && booking.reference.startsWith("MOV-") ? booking.reference : null) || booking?.booking_reference || booking?.reference || null;
	const movementId = msg.movement_id || headers.movement_id || thread?.movement_id || msg.booking_id || headers.booking_id || thread?.booking_id || booking?.id || null;
	const isSubjectConfirmed = msg.subject?.toLowerCase().includes("booking confirmed") || msg.subject?.toLowerCase().includes("space confirmed") || msg.subject?.toLowerCase().includes("confirmation") || msg.subject?.toLowerCase().includes("confirm") && (msg.subject?.toLowerCase().includes("booking") || msg.subject?.toLowerCase().includes("movement") || msg.subject?.toLowerCase().includes("space"));
	const isBodyConfirmed = msg.body?.toLowerCase().includes("booking is confirmed") || msg.body?.toLowerCase().includes("booking confirmed") || msg.body?.toLowerCase().includes("space confirmed") || msg.body?.toLowerCase().includes("space is confirmed") || msg.body?.toLowerCase().includes("we are pleased to confirm your booking") || msg.body?.toLowerCase().includes("booking has been confirmed") || msg.body?.toLowerCase().includes("space is secured");
	const isExplicitConfirmed = isSubjectConfirmed || isBodyConfirmed || booking?.status?.toLowerCase().includes("confirmed") || msg.confirmation_status === "CONFIRMED" || headers.confirmation_status === "CONFIRMED";
	let emailType = "BOOKING_REQUEST";
	const rawEmailType = msg.email_type || headers.email_type;
	if (isExplicitConfirmed) emailType = "BOOKING_CONFIRMATION";
	else if (rawEmailType && [
		"BOOKING_REQUEST",
		"BOOKING_CONFIRMATION",
		"BOOKING_UPDATE",
		"GENERAL",
		"SYSTEM"
	].includes(rawEmailType)) emailType = rawEmailType;
	else if (rawEmailType === "BOOKING_REPLY") emailType = "BOOKING_UPDATE";
	else if (msg.subject?.toLowerCase().includes("system") || msg.subject?.toLowerCase().includes("alert")) emailType = "SYSTEM";
	else if (msg.subject?.toLowerCase().includes("update")) emailType = "BOOKING_UPDATE";
	else if (booking) emailType = "BOOKING_REQUEST";
	else emailType = "GENERAL";
	const attachmentsList = Array.isArray(msg.attachments) ? msg.attachments : [];
	const isInbound = (msg.direction || headers.direction || "outbound").toLowerCase() === "inbound";
	const resolvedFromName = isInbound ? msg.sender_name || headers.sender_name || forwarder?.company_name || (msg.sender_email ? msg.sender_email.split("@")[0].replace(/[._-]/g, " ") : "Freight Forwarder") : msg.sender_name || "Nashmia Logistics";
	const resolvedFromEmail = msg.sender_email || msg.from_email || headers.from_email || (isInbound ? "quotes@forwarder.com" : "operations@nashmiaindustries.com");
	const resolvedForwarderName = forwarder?.company_name || booking?.forwarder?.company_name || (isInbound ? msg.sender_name || headers.sender_name || (msg.sender_email ? msg.sender_email.split("@")[0].replace(/[._-]/g, " ") : "Forwarder") : msg.recipient_name || "Forwarder");
	return {
		id: msg.id,
		threadId: msg.thread_id || thread?.id || msg.id,
		userId: msg.user_id || thread?.user_id,
		organizationId: msg.organization_id || headers.organization_id || thread?.organization_id,
		bookingId: msg.booking_id || headers.booking_id || thread?.booking_id || booking?.id || null,
		movementId,
		movementNumber,
		forwarderId: msg.forwarder_id || headers.forwarder_id || forwarder?.id || null,
		fromEmail: resolvedFromEmail,
		fromName: resolvedFromName,
		toEmail: msg.recipient_email || msg.to_email || headers.to_email || "",
		toName: msg.recipient_name || forwarder?.contact_person || forwarder?.company_name || "",
		cc: msg.cc || null,
		bcc: msg.bcc || null,
		subject: msg.subject || thread?.subject || "(No Subject)",
		body: msg.body || "",
		bodyHtml: msg.body_html || null,
		snippet: msg.body ? msg.body.slice(0, 140) : thread?.snippet || "",
		emailType,
		status,
		direction: isInbound ? "inbound" : "outbound",
		gmailMessageId: msg.gmail_message_id || headers.gmail_message_id || null,
		gmailThreadId: msg.gmail_thread_id || thread?.gmail_thread_id || headers.gmail_thread_id || null,
		errorMessage: msg.error_message || null,
		attachments: attachmentsList,
		createdAt: msg.created_at || (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: msg.updated_at || msg.created_at || (/* @__PURE__ */ new Date()).toISOString(),
		sentAt: msg.sent_at || (status === "SENT" ? msg.created_at : null),
		receivedAt: msg.received_at || headers.received_at || msg.sent_at || (isInbound ? msg.created_at : null),
		matchStatus: msg.match_status || headers.match_status || (isInbound ? booking ? "MATCHED" : "NEEDS_REVIEW" : null),
		matchReason: msg.match_reason || headers.match_reason || null,
		matchedBy: msg.matched_by || headers.matched_by || (booking ? "MOVEMENT_NUMBER" : "NONE"),
		matchedAt: msg.matched_at || headers.matched_at || null,
		matchDetails: msg.match_details || headers.match_details || null,
		confirmationStatus: msg.confirmation_status || headers.confirmation_status || msg.match_details?.confirmationStatus || (isExplicitConfirmed ? "CONFIRMED" : null),
		confirmationConfidence: typeof msg.confirmation_confidence === "number" ? msg.confirmation_confidence : typeof headers.confirmation_confidence === "number" ? headers.confirmation_confidence : typeof msg.match_details?.confidence === "number" ? msg.match_details.confidence : isExplicitConfirmed ? .98 : null,
		confirmationReason: msg.confirmation_reason || headers.confirmation_reason || msg.match_details?.confirmationReason || (isExplicitConfirmed ? "Booking and space confirmation recognized from message content" : null),
		confirmationDetectedBy: msg.confirmation_detected_by || headers.confirmation_detected_by || msg.match_details?.confirmationDetectedBy || (isExplicitConfirmed ? "RULE_FALLBACK" : null),
		confirmationDetectedAt: msg.confirmation_detected_at || headers.confirmation_detected_at || msg.match_details?.confirmationDetectedAt || null,
		confirmationDetails: msg.confirmation_details || headers.confirmation_details || msg.match_details?.confirmationDetails || null,
		bookingReference: booking?.booking_reference || booking?.reference || movementNumber || null,
		bookingOrigin: booking?.origin || null,
		bookingDestination: booking?.destination || null,
		buyerName: booking?.buyer?.company_name || booking?.buyer_name || null,
		supplierName: booking?.supplier?.company_name || booking?.supplier_name || null,
		forwarderName: resolvedForwarderName,
		forwarderCode: forwarder?.code || booking?.forwarder?.code || null,
		containerSize: booking?.container_size || null,
		containerCount: booking?.container_count || null,
		vesselName: booking?.vessel_name || null
	};
}
var LOCAL_EMAILS_KEY = "nashmia_custom_emails_v1";
function getLocalEmails() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(LOCAL_EMAILS_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function saveLocalEmail(email) {
	if (typeof window === "undefined") return;
	try {
		const updated = [email, ...getLocalEmails().filter((e) => e.id !== email.id)];
		localStorage.setItem(LOCAL_EMAILS_KEY, JSON.stringify(updated));
	} catch (err) {
		console.warn("[Local Emails] Failed to save:", err);
	}
}
function updateLocalEmail(id, patch) {
	if (typeof window === "undefined") return;
	try {
		const updated = getLocalEmails().map((e) => e.id === id ? {
			...e,
			...patch
		} : e);
		localStorage.setItem(LOCAL_EMAILS_KEY, JSON.stringify(updated));
	} catch (err) {
		console.warn("[Local Emails] Failed to update:", err);
	}
}
/**
* Zero mock/demo email policy - only returns genuine authenticated user/Gmail communications
*/
function getDefaultOperationalEmails() {
	return [];
}
var lastLiveGmailFetchTime = 0;
var cachedLiveGmailRecords = [];
/**
* Fetch all email messages with full relational metadata from Supabase and live Gmail
*/
async function fetchEmailsFromSupabase(userId) {
	const localList = getLocalEmails();
	let dbRecords = [];
	let gmailRecords = [];
	const now = Date.now();
	if (now - lastLiveGmailFetchTime < 1e4 && cachedLiveGmailRecords.length > 0) gmailRecords = cachedLiveGmailRecords;
	else if (isGmailQuotaCooldownActive()) gmailRecords = cachedLiveGmailRecords;
	else try {
		if (await getGmailAccessToken(userId)) {
			const cachedUser = getCachedGoogleUser();
			const liveGmailMsgs = await fetchLiveGmailMessages({
				maxResults: 20,
				userId
			});
			if (liveGmailMsgs && liveGmailMsgs.length > 0) {
				gmailRecords = liveGmailMsgs.map((g) => mapGmailMessageToEmailRecord(g, cachedUser?.email));
				cachedLiveGmailRecords = gmailRecords;
				lastLiveGmailFetchTime = now;
			}
		}
	} catch (gmailErr) {
		console.warn("[EmailServices] Live Gmail fetch notice:", gmailErr);
		gmailRecords = cachedLiveGmailRecords;
	}
	if (isSupabaseConfigured) try {
		let threadsQuery = supabase.from("email_threads").select(`
          *,
          booking:bookings(
            *,
            buyer:buyers(*),
            supplier:suppliers(*),
            forwarder:forwarders(*)
          )
        `).order("last_message_at", { ascending: false });
		const validUserUuid = safeUuid(userId);
		if (validUserUuid) threadsQuery = threadsQuery.or(`user_id.eq.${validUserUuid},user_id.is.null`);
		const { data: threads, error: threadsError } = await threadsQuery;
		if (threadsError) console.warn("[fetchEmailsFromSupabase] Threads error:", threadsError.message);
		const { data: messages, error: messagesError } = await supabase.from("email_messages").select("*").order("created_at", { ascending: false });
		if (!messagesError && messages) {
			const threadMap = /* @__PURE__ */ new Map();
			(threads || []).forEach((t) => threadMap.set(t.id, t));
			const missingThreadIds = Array.from(new Set(messages.map((m) => m.thread_id).filter((id) => Boolean(id && !threadMap.has(id)))));
			if (missingThreadIds.length > 0) {
				const { data: moreThreads } = await supabase.from("email_threads").select(`
              *,
              booking:bookings(
                *,
                buyer:buyers(*),
                supplier:suppliers(*),
                forwarder:forwarders(*)
              )
            `).in("id", missingThreadIds);
				(moreThreads || []).forEach((t) => threadMap.set(t.id, t));
			}
			const { data: forwarders } = await supabase.from("forwarders").select("*");
			const forwarderMap = /* @__PURE__ */ new Map();
			(forwarders || []).forEach((f) => forwarderMap.set(f.id, f));
			dbRecords = messages.map((msg) => {
				const thread = threadMap.get(msg.thread_id);
				const booking = thread?.booking;
				return mapDatabaseEmailToRecord(msg, thread, booking, booking?.forwarder_id ? forwarderMap.get(booking.forwarder_id) : null);
			});
		}
	} catch (err) {
		console.error("[fetchEmailsFromSupabase] Exception:", err);
	}
	const combinedMap = /* @__PURE__ */ new Map();
	gmailRecords.forEach((item) => {
		combinedMap.set(item.id, item);
		if (item.gmailMessageId) combinedMap.set(item.gmailMessageId, item);
	});
	dbRecords.forEach((item) => {
		combinedMap.set(item.id, item);
		if (item.gmailMessageId) combinedMap.set(item.gmailMessageId, item);
	});
	localList.forEach((item) => {
		if (!combinedMap.has(item.id) && (!item.gmailMessageId || !combinedMap.has(item.gmailMessageId))) combinedMap.set(item.id, item);
	});
	const merged = Array.from(new Set(Array.from(combinedMap.values())));
	if (merged.length === 0) return getDefaultOperationalEmails();
	const localBookings = getLocalBookings();
	const confirmedRefs = /* @__PURE__ */ new Set();
	for (const b of localBookings) {
		const s = (b.status || "").toUpperCase();
		const c = (b.confirmation_status || "").toUpperCase();
		if (s.includes("CONFIRM") || c === "CONFIRMED" || s === "LOADED" || s === "IN TRANSIT") {
			if (b.booking_reference) confirmedRefs.add(b.booking_reference.trim().toUpperCase());
			if (b.movement_number) confirmedRefs.add(b.movement_number.trim().toUpperCase());
			if (b.reference) confirmedRefs.add(b.reference.trim().toUpperCase());
			if (b.id) confirmedRefs.add(b.id.trim().toUpperCase());
		}
	}
	merged.forEach((item) => {
		const text = `${item.subject} ${item.body} ${item.snippet || ""}`;
		const movRef = item.movementNumber || item.bookingReference || text.match(/\b(MOV-\d{4}-\d{3,6}|BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|NASH-[A-Z0-9-]+)\b/i)?.[0];
		if (movRef) {
			if (!item.movementNumber) item.movementNumber = movRef;
			if (!item.bookingReference) item.bookingReference = movRef;
		}
		const det = classifyConfirmationDeterministic(item.subject || "", item.body || item.snippet || "", item.snippet);
		const isLinkedConfirmed = Boolean(movRef && confirmedRefs.has(movRef.trim().toUpperCase()));
		if (det?.status === "CONFIRMED" || isLinkedConfirmed) {
			item.confirmationStatus = "CONFIRMED";
			item.emailType = "BOOKING_CONFIRMATION";
			if (!item.confirmationReason) item.confirmationReason = det?.reason || "Confirmed by Forwarder";
			if (!item.confirmationConfidence) item.confirmationConfidence = det?.confidence || .95;
			if (!item.confirmationDetectedBy) item.confirmationDetectedBy = "DETERMINISTIC";
		}
	});
	return merged.sort((a, b) => {
		const timeA = new Date(a.sentAt || a.createdAt).getTime();
		return new Date(b.sentAt || b.createdAt).getTime() - timeA;
	});
}
/**
* Fetch email statistics summary directly calculated from real database records
*/
function calculateEmailStatistics(emails) {
	let inbox = 0;
	let sent = 0;
	let drafts = 0;
	let pending = 0;
	let failed = 0;
	emails.forEach((email) => {
		if (email.direction === "inbound") inbox++;
		switch (email.status) {
			case "SENT":
				sent++;
				break;
			case "DRAFT":
				drafts++;
				break;
			case "PENDING":
			case "SENDING":
				pending++;
				break;
			case "FAILED":
			case "CANCELLED":
				failed++;
				break;
			default: if (email.direction === "inbound") {} else sent++;
		}
	});
	return {
		total: emails.length,
		inbox,
		sent,
		drafts,
		pending,
		failed
	};
}
/**
* Calculate folder counts for sidebar navigation
*/
function calculateFolderCounts(emails) {
	let inbox = 0;
	let sent = 0;
	let drafts = 0;
	let pending = 0;
	let failed = 0;
	let booking = 0;
	let system = 0;
	emails.forEach((e) => {
		if (e.direction === "inbound") inbox++;
		if (e.status === "SENT") sent++;
		if (e.status === "DRAFT") drafts++;
		if (e.status === "PENDING" || e.status === "SENDING") pending++;
		if (e.status === "FAILED") failed++;
		if (e.emailType.startsWith("BOOKING_") || e.bookingId) booking++;
		if (e.emailType === "SYSTEM") system++;
	});
	return {
		inbox,
		sent,
		drafts,
		pending,
		failed,
		all: emails.length,
		booking,
		system
	};
}
/**
* Create or Save Draft Email to Supabase
*/
async function saveDraftEmailInSupabase(userId, values, _existingMessageId) {
	const validUserUuid = safeUuid(userId);
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const fallbackThreadId = `th-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
	const fallbackMessageId = `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
	let threadId = fallbackThreadId;
	let messageId = fallbackMessageId;
	if (isSupabaseConfigured) try {
		const { data: thread, error: threadError } = await supabase.from("email_threads").insert({
			user_id: validUserUuid,
			booking_id: safeUuid(values.bookingId),
			subject: values.subject || "Draft: (No Subject)",
			status: "DRAFT",
			snippet: values.body ? values.body.slice(0, 100) : "Draft email",
			last_message_at: nowIso
		}).select().single();
		if (!threadError && thread) {
			threadId = thread.id;
			const { data: message, error: messageError } = await supabase.from("email_messages").insert({
				thread_id: thread.id,
				sender_email: values.fromEmail,
				sender_name: "Nashmia Industries",
				recipient_email: values.toEmail || "draft@nashmia.internal",
				recipient_name: values.toName || null,
				cc: values.cc || null,
				bcc: values.bcc || null,
				subject: values.subject || "(No Subject)",
				body: values.body || "",
				body_html: values.body ? values.body.replace(/\n/g, "<br/>") : null,
				direction: "outbound",
				sent_at: null
			}).select().single();
			if (!messageError && message) messageId = message.id;
		}
	} catch (err) {
		console.warn("[saveDraftEmailInSupabase] Supabase save notice:", err);
	}
	saveLocalEmail({
		id: messageId,
		threadId,
		userId: validUserUuid,
		bookingId: values.bookingId || null,
		fromEmail: values.fromEmail || "operations@nashmiaindustries.com",
		fromName: "Nashmia Industries",
		toEmail: values.toEmail || "",
		toName: values.toName || "",
		cc: values.cc || null,
		bcc: values.bcc || null,
		subject: values.subject || "Draft: (No Subject)",
		body: values.body || "",
		bodyHtml: values.body ? values.body.replace(/\n/g, "<br/>") : null,
		snippet: values.body ? values.body.slice(0, 140) : "Draft email",
		emailType: values.bookingId ? "BOOKING_REQUEST" : "GENERAL",
		status: "DRAFT",
		direction: "outbound",
		createdAt: nowIso,
		updatedAt: nowIso,
		attachments: []
	});
	return {
		success: true,
		messageId,
		threadId
	};
}
/**
* Dispatch / Send an email through the secure backend flow with Gmail verification.
* Supports both signatures:
*   sendEmailThroughBackend(userId, values, draftId)
*   sendEmailThroughBackend({ userId, toEmail, subject, ... })
*/
async function sendEmailThroughBackend(userIdOrOptions, maybeValues, _draftMessageId) {
	let userId = null;
	let values;
	if (typeof userIdOrOptions === "object" && userIdOrOptions !== null) {
		const opts = userIdOrOptions;
		userId = opts.userId || null;
		values = {
			fromEmail: opts.fromEmail || "projectnashmia1@gmail.com",
			toEmail: opts.toEmail,
			toName: opts.toName,
			cc: opts.cc,
			bcc: opts.bcc,
			subject: opts.subject,
			body: opts.body || opts.bodyText || "",
			bookingId: opts.bookingId,
			forwarderId: opts.forwarderId,
			emailType: opts.emailType,
			movementNumber: opts.movementNumber || opts.bookingReference,
			attachments: opts.attachments
		};
	} else {
		userId = userIdOrOptions;
		values = maybeValues || {};
	}
	console.log("[EmailService] sendEmailThroughBackend initiated with payload:", {
		userId: userId || null,
		fromEmail: values.fromEmail,
		toEmail: values.toEmail,
		toName: values.toName || null,
		cc: values.cc || null,
		bcc: values.bcc || null,
		subject: values.subject,
		bodyLength: values.body ? values.body.length : 0,
		bodySnippet: values.body ? values.body.slice(0, 100) : "",
		bookingId: values.bookingId || null,
		emailType: values.emailType,
		attachmentCount: values.attachments?.length || 0
	});
	if (!values.toEmail || !values.toEmail.includes("@")) {
		const errorMsg = "A valid recipient email address is required.";
		console.error("[EmailService] Validation failed: Invalid recipient email:", values.toEmail);
		throw new Error(errorMsg);
	}
	const validUserUuid = safeUuid(userId);
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const fallbackThreadId = `th-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
	const fallbackMessageId = `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
	let threadId = fallbackThreadId;
	let messageId = fallbackMessageId;
	if (isSupabaseConfigured) try {
		const { data: thread, error: threadError } = await supabase.from("email_threads").insert({
			user_id: validUserUuid,
			booking_id: safeUuid(values.bookingId),
			subject: values.subject,
			status: "SENDING",
			snippet: values.body ? values.body.slice(0, 100) : "",
			last_message_at: nowIso
		}).select().single();
		const movementNumber = values.movementNumber || extractMovementNumber(values.subject) || extractMovementNumber(values.body) || null;
		const movementId = values.movementId || values.bookingId || null;
		if (threadError) console.warn("[EmailService] Supabase thread insert error:", threadError);
		else if (thread) {
			threadId = thread.id;
			const { data: message, error: messageError } = await supabase.from("email_messages").insert({
				thread_id: thread.id,
				user_id: validUserUuid,
				booking_id: safeUuid(values.bookingId),
				movement_id: safeUuid(movementId),
				movement_number: movementNumber,
				forwarder_id: safeUuid(values.forwarderId),
				sender_email: values.fromEmail,
				from_email: values.fromEmail,
				sender_name: "Nashmia Industries",
				recipient_email: values.toEmail,
				to_email: values.toEmail,
				recipient_name: values.toName || null,
				cc: values.cc || null,
				bcc: values.bcc || null,
				subject: values.subject,
				body: values.body || "",
				body_html: values.body ? values.body.replace(/\n/g, "<br/>") : null,
				direction: "outbound",
				status: "SENDING",
				email_type: values.emailType || "BOOKING_REQUEST",
				sent_at: null
			}).select().single();
			if (messageError) console.warn("[EmailService] Supabase message insert error:", messageError);
			else if (message) messageId = message.id;
		}
	} catch (dbErr) {
		console.warn("[EmailService] Supabase DB initial insert notice:", dbErr);
	}
	let finalStatus = "FAILED";
	let gmailMessageId;
	let gmailThreadId;
	let backendErrorMessage;
	try {
		console.log("[EmailService] Checking Gmail access token for user:", userId);
		if (await getGmailAccessToken(userId)) {
			console.log("[EmailService] Token found. Calling sendEmailDirectlyViaGmail...");
			const gmailResult = await sendEmailDirectlyViaGmail({
				fromEmail: values.fromEmail,
				toEmail: values.toEmail,
				toName: values.toName,
				cc: values.cc,
				bcc: values.bcc,
				subject: values.subject,
				body: values.body,
				bookingId: values.bookingId,
				forwarderId: values.forwarderId,
				userId
			});
			gmailMessageId = gmailResult.gmailMessageId;
			gmailThreadId = gmailResult.gmailThreadId;
			finalStatus = "SENT";
			console.log("[EmailService] Email successfully dispatched via Gmail API:", {
				gmailMessageId,
				gmailThreadId
			});
		} else {
			console.warn("[EmailService] No Gmail access token found in client memory. Triggering /api/gmail/send-email server dispatch...");
			const backendRes = await fetch("/api/gmail/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					userId: userId || null,
					from: values.fromEmail,
					fromName: values.toName ? "Nashmia Operations" : void 0,
					to: values.toEmail,
					toName: values.toName,
					cc: values.cc,
					bcc: values.bcc,
					subject: values.subject,
					body: values.body,
					bookingId: values.bookingId,
					messageId
				})
			}).catch((fetchErr) => {
				console.warn("[EmailService] Backend proxy fetch failed:", fetchErr);
				return null;
			});
			if (backendRes && backendRes.ok) {
				const responseData = await backendRes.json().catch(() => ({}));
				if (responseData.success !== false && (responseData.gmail_message_id || responseData.id)) {
					finalStatus = "SENT";
					gmailMessageId = responseData.gmail_message_id || responseData.id || `gm-${Date.now()}`;
					gmailThreadId = responseData.gmail_thread_id || responseData.threadId || `gth-${Date.now()}`;
					console.log("[EmailService] Sent successfully via backend proxy:", {
						gmailMessageId,
						gmailThreadId
					});
				} else {
					finalStatus = "FAILED";
					backendErrorMessage = responseData.error || "Gmail is not connected. Please connect your Gmail account in Settings or click Connect Gmail.";
				}
			} else {
				backendErrorMessage = (backendRes ? await backendRes.json().catch(() => ({})) : {})?.error || "Gmail is not connected. Please connect your Gmail account in Settings to send live emails.";
				finalStatus = "FAILED";
				console.error("[EmailService] Email delivery failed: No active Gmail OAuth session.", backendErrorMessage);
			}
		}
	} catch (err) {
		console.error("[EmailService] ❌ Error occurred while sending email:", err);
		backendErrorMessage = err instanceof Error ? err.message : String(err);
		finalStatus = "FAILED";
	}
	if (isSupabaseConfigured && messageId !== fallbackMessageId) try {
		const { error: msgUpdErr } = await supabase.from("email_messages").update({
			direction: "Outbound",
			gmail_message_id: gmailMessageId || null,
			sent_at: finalStatus === "SENT" ? (/* @__PURE__ */ new Date()).toISOString() : null
		}).eq("id", messageId);
		if (msgUpdErr) console.warn("[EmailService] Supabase email_messages update notice:", msgUpdErr.message);
		await supabase.from("email_threads").update({
			status: finalStatus === "SENT" ? "SENT" : "FAILED",
			gmail_thread_id: gmailThreadId || null,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("id", threadId);
		console.log("[EmailService] Supabase database records updated with status:", finalStatus);
	} catch (updateErr) {
		console.warn("[EmailService] Supabase update notice:", updateErr);
	}
	saveLocalEmail({
		id: messageId,
		threadId,
		userId: validUserUuid,
		bookingId: values.bookingId || null,
		fromEmail: values.fromEmail || "operations@nashmiaindustries.com",
		fromName: "Nashmia Industries",
		toEmail: values.toEmail,
		toName: values.toName || "",
		cc: values.cc || null,
		bcc: values.bcc || null,
		subject: values.subject,
		body: values.body,
		bodyHtml: values.body ? values.body.replace(/\n/g, "<br/>") : null,
		snippet: values.body ? values.body.slice(0, 140) : "",
		emailType: values.bookingId ? "BOOKING_REQUEST" : "GENERAL",
		status: finalStatus,
		direction: "outbound",
		gmailMessageId: gmailMessageId || null,
		gmailThreadId: gmailThreadId || null,
		errorMessage: backendErrorMessage || null,
		createdAt: nowIso,
		updatedAt: nowIso,
		sentAt: finalStatus === "SENT" ? nowIso : null,
		attachments: []
	});
	return {
		success: finalStatus === "SENT",
		status: finalStatus,
		messageId,
		threadId,
		gmailMessageId,
		gmailThreadId,
		errorMessage: backendErrorMessage
	};
}
/**
* Retry sending a failed email through the backend or Gmail API
*/
async function retrySendEmailInSupabase(email) {
	console.log("[EmailService] retrySendEmailInSupabase called with record payload:", {
		id: email.id,
		threadId: email.threadId,
		toEmail: email.toEmail,
		subject: email.subject,
		userId: email.userId,
		bookingId: email.bookingId
	});
	try {
		if (isSupabaseConfigured) {
			await supabase.from("email_threads").update({ status: "SENDING" }).eq("id", email.threadId);
			await supabase.from("email_messages").update({ status: "SENDING" }).eq("id", email.id);
		}
		if (!await getGmailAccessToken(email.userId)) {
			const tokenErrMsg = "Gmail is not connected. Please connect your Gmail account in settings to retry.";
			console.error("[EmailService] Retry failed: No Gmail access token found for user ID:", email.userId);
			throw new Error(tokenErrMsg);
		}
		const gmailResult = await sendEmailDirectlyViaGmail({
			fromEmail: email.fromEmail,
			toEmail: email.toEmail,
			toName: email.toName,
			cc: email.cc || void 0,
			bcc: email.bcc || void 0,
			subject: email.subject,
			body: email.body,
			bodyHtml: email.bodyHtml || void 0,
			bookingId: email.bookingId,
			forwarderId: email.forwarderId,
			userId: email.userId
		});
		console.log("[EmailService] ✅ Retry send SUCCEEDED via Gmail API:", gmailResult);
		if (isSupabaseConfigured) try {
			await supabase.from("email_messages").update({
				gmail_message_id: gmailResult.gmailMessageId,
				sent_at: (/* @__PURE__ */ new Date()).toISOString()
			}).eq("id", email.id);
			await supabase.from("email_threads").update({
				status: "SENT",
				gmail_thread_id: gmailResult.gmailThreadId,
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			}).eq("id", email.threadId);
		} catch (dbErr) {
			console.warn("[EmailService] Notice updating database records on retry:", dbErr);
		}
		updateLocalEmail(email.id, {
			status: "SENT",
			gmailMessageId: gmailResult.gmailMessageId,
			gmailThreadId: gmailResult.gmailThreadId,
			sentAt: (/* @__PURE__ */ new Date()).toISOString(),
			errorMessage: null
		});
		return {
			success: true,
			status: "SENT"
		};
	} catch (err) {
		console.error("[EmailService] ❌ Retry send FAILED. Full error details:", err);
		const msg = err instanceof Error ? err.message : "Failed to retry email transmission.";
		if (isSupabaseConfigured) {
			await supabase.from("email_messages").update({
				status: "FAILED",
				error_message: msg,
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			}).eq("id", email.id);
			await supabase.from("email_threads").update({
				status: "FAILED",
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			}).eq("id", email.threadId);
		}
		updateLocalEmail(email.id, {
			status: "FAILED",
			errorMessage: msg
		});
		return {
			success: false,
			status: "FAILED",
			errorMessage: msg
		};
	}
}
var _jsxFileName$20 = "/app/applet/src/lib/notifications-context.tsx";
function formatNotificationRelativeTime(dateInput) {
	const date = new Date(dateInput);
	const diffMs = (/* @__PURE__ */ new Date()).getTime() - date.getTime();
	if (diffMs < 0) return "Just now";
	const diffMinutes = Math.floor(diffMs / 6e4);
	const diffHours = Math.floor(diffMs / 36e5);
	const diffDays = Math.floor(diffMs / 864e5);
	if (diffMinutes < 1) return "Just now";
	if (diffMinutes < 60) return `${diffMinutes}m ago`;
	if (diffHours < 24) return `${diffHours}h ago`;
	if (diffDays < 7) return `${diffDays}d ago`;
	return `${Math.floor(diffDays / 7)}w ago`;
}
function categorizeNotificationDate(dateInput) {
	const date = new Date(dateInput);
	const diffHours = ((/* @__PURE__ */ new Date()).getTime() - date.getTime()) / 36e5;
	if (diffHours <= 24) return "today";
	if (diffHours <= 168) return "thisWeek";
	return "earlier";
}
var NotificationsContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "nashmia_notification_center_items_v4";
var CLEARED_AT_KEY = "nashmia_notifications_cleared_at_v4";
var DISMISSED_IDS_KEY = "nashmia_notifications_dismissed_ids_v4";
var READ_IDS_KEY = "nashmia_notifications_read_ids_v4";
var CONFIRMATION_ALERTED_KEY = "nashmia_alerted_confirmations_v2";
function getNotificationSignature(item) {
	if (item.bookingReference) {
		const cleanRef = item.bookingReference.trim().toUpperCase();
		if (item.type === "booking_confirmed") return `confirmed:${cleanRef}`;
		if (item.type === "cutoff_reminder") return `cutoff:${cleanRef}:${item.cutoffDetails?.cutoffType || ""}`;
		if (item.type === "booking_reply") return `reply:${cleanRef}`;
		if (item.type === "booking_request") return `request:${cleanRef}`;
	}
	return item.id;
}
function getClearedAt() {
	if (typeof window === "undefined") return 0;
	try {
		const raw = localStorage.getItem(CLEARED_AT_KEY);
		return raw ? parseInt(raw, 10) || 0 : 0;
	} catch {
		return 0;
	}
}
function setClearedAt(timestamp) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(CLEARED_AT_KEY, String(timestamp));
	} catch {}
}
function getDismissedIds() {
	const set = /* @__PURE__ */ new Set();
	if (typeof window === "undefined") return set;
	try {
		const raw = localStorage.getItem(DISMISSED_IDS_KEY);
		if (raw) {
			const arr = JSON.parse(raw);
			if (Array.isArray(arr)) arr.forEach((id) => set.add(String(id)));
		}
	} catch {}
	return set;
}
function addDismissedId(id) {
	if (typeof window === "undefined") return;
	try {
		const set = getDismissedIds();
		set.add(id);
		localStorage.setItem(DISMISSED_IDS_KEY, JSON.stringify(Array.from(set).slice(-200)));
	} catch {}
}
function getReadIds() {
	const set = /* @__PURE__ */ new Set();
	if (typeof window === "undefined") return set;
	try {
		const raw = localStorage.getItem(READ_IDS_KEY);
		if (raw) {
			const arr = JSON.parse(raw);
			if (Array.isArray(arr)) arr.forEach((id) => set.add(String(id)));
		}
	} catch {}
	return set;
}
function addReadId(id) {
	if (typeof window === "undefined") return;
	try {
		const set = getReadIds();
		set.add(id);
		localStorage.setItem(READ_IDS_KEY, JSON.stringify(Array.from(set).slice(-300)));
	} catch {}
}
function markAllIdsRead(ids) {
	if (typeof window === "undefined") return;
	try {
		const set = getReadIds();
		ids.forEach((id) => set.add(id));
		localStorage.setItem(READ_IDS_KEY, JSON.stringify(Array.from(set).slice(-300)));
	} catch {}
}
function getAlertedConfirmationKeys() {
	const set = /* @__PURE__ */ new Set();
	if (typeof window !== "undefined") try {
		const raw = localStorage.getItem(CONFIRMATION_ALERTED_KEY);
		if (raw) {
			const arr = JSON.parse(raw);
			if (Array.isArray(arr)) arr.forEach((k) => set.add(String(k).trim().toUpperCase()));
		}
	} catch {}
	return set;
}
getAlertedConfirmationKeys();
function NotificationsProvider({ children }) {
	const [notifications, setNotifications] = (0, import_react.useState)([]);
	const [isMounted, setIsMounted] = (0, import_react.useState)(false);
	const [isSyncing, setIsSyncing] = (0, import_react.useState)(false);
	const { user } = useAuth();
	const gmail = useGmail();
	const seenGmailIdsRef = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const isFirstGmailLoadRef = (0, import_react.useRef)(true);
	const gmailLiveMessagesRef = (0, import_react.useRef)(gmail?.liveMessages);
	gmailLiveMessagesRef.current = gmail?.liveMessages;
	(0, import_react.useEffect)(() => {
		setIsMounted(true);
		try {
			const clearedAt = getClearedAt();
			const dismissed = getDismissedIds();
			const readIds = getReadIds();
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) {
				const parsed = JSON.parse(stored);
				if (Array.isArray(parsed) && parsed.length > 0) {
					const filtered = parsed.filter((p) => p.timestamp > clearedAt && !dismissed.has(p.id)).map((p) => readIds.has(p.id) ? {
						...p,
						unread: false
					} : p);
					setNotifications(filtered);
				}
			}
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isMounted) return;
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications.slice(0, 50)));
		} catch {}
	}, [notifications, isMounted]);
	const unreadCount = (0, import_react.useMemo)(() => {
		if (!isMounted) return 0;
		return notifications.filter((n) => n.unread).length;
	}, [notifications, isMounted]);
	const addItemDeduplicated = (0, import_react.useCallback)((item) => {
		const clearedAt = getClearedAt();
		const dismissed = getDismissedIds();
		const readIds = getReadIds();
		if (item.timestamp <= clearedAt || dismissed.has(item.id)) return;
		const isRead = readIds.has(item.id) || item.unread === false;
		setNotifications((prev) => {
			const itemSig = getNotificationSignature(item);
			const existingIndex = prev.findIndex((p) => getNotificationSignature(p) === itemSig || p.id === item.id);
			if (existingIndex >= 0) {
				const updated = [...prev];
				const existing = updated[existingIndex];
				updated[existingIndex] = {
					...existing,
					...item,
					unread: !isRead && (existing.unread || item.unread)
				};
				return updated.sort((a, b) => b.timestamp - a.timestamp);
			}
			return [{
				...item,
				unread: !isRead && item.unread
			}, ...prev].slice(0, 50);
		});
	}, []);
	const refreshNotifications = (0, import_react.useCallback)(async () => {
		setIsSyncing(true);
		const generatedItems = [];
		const clearedAt = getClearedAt();
		const dismissedIds = getDismissedIds();
		const readIds = getReadIds();
		try {
			if (isSupabaseConfigured) try {
				const { data: dbNotifications, error: dbNotifErr } = await supabase.from("notifications").select("id, user_id, type, title, message, booking_id, related_booking_id, link, is_read, created_at").order("created_at", { ascending: false }).limit(30);
				if (!dbNotifErr && dbNotifications) dbNotifications.forEach((n) => {
					const dateVal = n.created_at || /* @__PURE__ */ new Date();
					const timestamp = new Date(dateVal).getTime();
					const notifId = `db-notif-${n.id}`;
					if (timestamp <= clearedAt || dismissedIds.has(notifId)) return;
					const cat = categorizeNotificationDate(dateVal);
					const timeStr = formatNotificationRelativeTime(dateVal);
					const isConfirmed = n.title?.toLowerCase().includes("confirmed") || n.message?.toLowerCase().includes("confirmed") || n.type === "booking_confirmed";
					const refMatch = `${n.title || ""} ${n.message || ""}`.match(/\b(MOV-\d{4}-\d{3,6}|BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|NASH-[A-Z0-9-]+)\b/i);
					const bookingRef = refMatch ? refMatch[1].toUpperCase() : void 0;
					const notifTitle = isConfirmed ? bookingRef ? `Booking Confirmed: ${bookingRef}` : n.title || "Booking Confirmed" : n.title || "Notification";
					generatedItems.push({
						id: notifId,
						icon: isConfirmed ? "check" : n.type === "booking_reply" ? "reply" : "sparkles",
						title: notifTitle,
						time: timeStr,
						timestamp,
						description: n.message,
						rawDescription: n.message,
						unread: n.is_read === false && !readIds.has(notifId),
						category: cat,
						type: isConfirmed ? "booking_confirmed" : n.type || "system",
						bookingReference: bookingRef,
						linkUrl: n.link || "/requests"
					});
				});
			} catch (dbNotifError) {
				console.warn("[NotificationsContext] Notice loading db notifications:", dbNotifError);
			}
			(await fetchEmailsFromSupabase(user?.id)).forEach((em) => {
				const dateVal = em.sentAt || em.createdAt || /* @__PURE__ */ new Date();
				const timestamp = new Date(dateVal).getTime();
				const notifId = `email-reply-${em.id}`;
				if (timestamp <= clearedAt || dismissedIds.has(notifId)) return;
				if (!(em.direction === "inbound" || em.subject?.toLowerCase().startsWith("re:") || em.emailType === "BOOKING_CONFIRMATION")) return;
				const cat = categorizeNotificationDate(dateVal);
				const timeStr = formatNotificationRelativeTime(dateVal);
				const subject = em.subject || "(No Subject)";
				const sender = em.fromName || em.fromEmail || "Forwarder Desk";
				const snippet = em.snippet || (em.body ? em.body.slice(0, 100) : subject);
				const matched = `${subject} ${snippet}`.match(/\b(MOV-\d{4}-\d{3,6}|BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|GD-[A-Z0-9-]+)\b/i);
				const bookingRef = em.bookingReference || (matched ? matched[0].toUpperCase() : void 0);
				generatedItems.push({
					id: notifId,
					icon: "reply",
					title: `Reply Received: ${bookingRef ? bookingRef + " - " : ""}${subject.replace(/^Re:\s*/i, "").slice(0, 36)}`,
					time: timeStr,
					timestamp,
					description: `From ${sender}: "${snippet}"`,
					rawDescription: `From ${sender}: "${snippet}"`,
					unread: !readIds.has(notifId) && cat === "today" && em.status !== "READ",
					category: cat,
					type: "booking_reply",
					bookingReference: bookingRef,
					senderName: sender,
					senderEmail: em.fromEmail,
					linkUrl: `/emails?search=${encodeURIComponent(bookingRef || subject)}`
				});
			});
			if (isSupabaseConfigured) {
				const { data: events } = await supabase.from("booking_events").select("id, booking_id, title, description, event_type, created_at").order("created_at", { ascending: false }).limit(8);
				(events || []).forEach((ev) => {
					const dateVal = ev.created_at || /* @__PURE__ */ new Date();
					const timestamp = new Date(dateVal).getTime();
					const notifId = `event-${ev.id}`;
					if (timestamp <= clearedAt || dismissedIds.has(notifId)) return;
					const cat = categorizeNotificationDate(dateVal);
					const timeStr = formatNotificationRelativeTime(dateVal);
					generatedItems.push({
						id: notifId,
						icon: "sparkles",
						title: ev.title || "Tracking Milestone Update",
						time: timeStr,
						timestamp,
						description: ev.description || "Container tracking update synchronized.",
						rawDescription: ev.description || "Container tracking update synchronized.",
						unread: !readIds.has(notifId) && cat === "today",
						category: cat,
						type: "tracking_event",
						linkUrl: `/movements`
					});
				});
			}
			(gmailLiveMessagesRef.current || []).forEach((msg) => {
				const timestamp = new Date(msg.date || Date.now()).getTime();
				const notifId = `gmail-msg-${msg.id}`;
				if (timestamp <= clearedAt || dismissedIds.has(notifId)) return;
				if (!(msg.subject.toLowerCase().startsWith("re:") || msg.snippet.toLowerCase().includes("booking") || msg.labelIds.includes("INBOX"))) return;
				const cat = categorizeNotificationDate(msg.date || /* @__PURE__ */ new Date());
				const timeStr = formatNotificationRelativeTime(msg.date || /* @__PURE__ */ new Date());
				const refMatch = `${msg.subject} ${msg.snippet}`.match(/\b(MOV-\d{4}-\d{3,6}|BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|NASH-[A-Z0-9-]+)\b/i);
				const bookingRef = refMatch ? refMatch[1].toUpperCase() : void 0;
				generatedItems.push({
					id: notifId,
					icon: "reply",
					title: `Gmail Reply: ${bookingRef ? bookingRef + " - " : ""}${msg.subject.replace(/^Re:\s*/i, "").slice(0, 32)}`,
					time: timeStr,
					timestamp,
					description: `From ${msg.from.split("<")[0].trim()}: "${msg.snippet.slice(0, 90)}"`,
					rawDescription: `From ${msg.from.split("<")[0].trim()}: "${msg.snippet.slice(0, 90)}"`,
					unread: !readIds.has(notifId) && cat === "today",
					category: cat,
					type: "booking_reply",
					bookingReference: bookingRef,
					senderName: msg.from.split("<")[0].trim(),
					linkUrl: `/emails?search=${encodeURIComponent(bookingRef || msg.subject)}`
				});
			});
			try {
				generateAllCutOffReminders().forEach((rem) => {
					if (rem.timestamp > clearedAt && !dismissedIds.has(rem.id)) generatedItems.push({
						...rem,
						unread: !readIds.has(rem.id) && rem.unread
					});
				});
			} catch (cutoffErr) {
				console.warn("[NotificationsContext] Notice loading cut-off reminders:", cutoffErr);
			}
			setNotifications((prev) => {
				const signatureMap = /* @__PURE__ */ new Map();
				prev.forEach((p) => {
					if (p.timestamp > clearedAt && !dismissedIds.has(p.id)) {
						const sig = getNotificationSignature(p);
						signatureMap.set(sig, p);
					}
				});
				generatedItems.forEach((item) => {
					if (item.timestamp > clearedAt && !dismissedIds.has(item.id)) {
						const sig = getNotificationSignature(item);
						const existing = signatureMap.get(sig);
						if (existing) signatureMap.set(sig, {
							...item,
							unread: !readIds.has(item.id) && (existing.unread || item.unread)
						});
						else signatureMap.set(sig, {
							...item,
							unread: !readIds.has(item.id) && item.unread
						});
					}
				});
				return Array.from(signatureMap.values()).sort((a, b) => b.timestamp - a.timestamp).slice(0, 50);
			});
		} catch (err) {
			console.warn("[NotificationsContext] Refresh warning:", err);
		} finally {
			setIsSyncing(false);
		}
	}, [user?.id]);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			refreshNotifications();
		}, 2e3);
		return () => clearTimeout(timer);
	}, [refreshNotifications]);
	(0, import_react.useEffect)(() => {
		const handleEmailSentEvent = (e) => {
			const detail = e.detail;
			if (!detail) return;
			const now = Date.now();
			const ref = detail.bookingReference || "BK-REQUEST";
			const sentItem = {
				id: `email-sent-event-${detail.id || now}`,
				icon: "mail",
				title: `Booking Request Sent: ${ref}`,
				time: "Just now",
				timestamp: now,
				description: `Dispatched to ${detail.toName || detail.toEmail || "Carrier Desk"}: "${detail.snippet || detail.subject || "Ocean freight allocation requested."}"`,
				rawDescription: `Dispatched to ${detail.toName || detail.toEmail || "Carrier Desk"}: "${detail.snippet || detail.subject || "Ocean freight allocation requested."}"`,
				unread: true,
				category: "today",
				type: "booking_request",
				bookingReference: ref,
				recipientName: detail.toName || detail.toEmail,
				recipientEmail: detail.toEmail,
				linkUrl: `/emails?search=${encodeURIComponent(ref)}`
			};
			addItemDeduplicated(sentItem);
		};
		const handleBookingConfirmedEvent = (e) => {
			const detail = e.detail;
			if (!detail) return;
			let resolvedRef = detail.movementNumber || detail.bookingReference || detail.reference || "";
			if (!resolvedRef || resolvedRef.toLowerCase() === "booking" || resolvedRef.startsWith("Booking #")) {
				if (detail.bookingId) {
					const found = getLocalBookings().find((b) => b.id === detail.bookingId || b.movement_number === detail.bookingId || b.booking_reference === detail.bookingId || b.reference === detail.bookingId);
					if (found) resolvedRef = found.movement_number || found.booking_reference || found.reference || "";
				}
			}
			if (!resolvedRef && detail.bookingId) resolvedRef = detail.bookingId;
			if (!resolvedRef) resolvedRef = "MOV-2026-00001";
			const movementRef = resolvedRef;
			const notifTitle = `Booking Confirmed: ${movementRef}`;
			const forwarderParty = detail.confirmedBy || detail.forwarderName;
			const notifMsg = forwarderParty ? `Movement ${movementRef} has been confirmed by ${forwarderParty}.` : `Movement ${movementRef} has been confirmed by the forwarder.`;
			const confirmedItem = {
				id: `booking-confirmed-${detail.movementNumber || detail.bookingId || movementRef}`,
				icon: "check",
				title: notifTitle,
				time: "Just now",
				timestamp: Date.now(),
				description: notifMsg,
				rawDescription: notifMsg,
				unread: true,
				category: "today",
				type: "booking_confirmed",
				bookingReference: movementRef,
				linkUrl: "/requests"
			};
			addItemDeduplicated(confirmedItem);
		};
		const handleNotificationInserted = (e) => {
			const n = e.detail;
			if (!n) return;
			const dateVal = n.created_at || /* @__PURE__ */ new Date();
			const cat = categorizeNotificationDate(dateVal);
			const timeStr = formatNotificationRelativeTime(dateVal);
			const isConfirmed = n.title?.toLowerCase().includes("confirmed") || n.message?.toLowerCase().includes("confirmed") || n.type === "booking_confirmed";
			const refMatch = `${n.title || ""} ${n.message || ""}`.match(/\b(MOV-\d{4}-\d{3,6}|BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|NASH-[A-Z0-9-]+)\b/i);
			const bookingRef = refMatch ? refMatch[1].toUpperCase() : void 0;
			const notifTitle = isConfirmed ? bookingRef ? `Booking Confirmed: ${bookingRef}` : n.title || "Booking Confirmed" : n.title || "Notification";
			const notifMsg = n.message || (bookingRef ? `Movement ${bookingRef} has been confirmed by the forwarder.` : "Movement confirmed by forwarder.");
			const newItem = {
				id: `db-notif-${n.id || Date.now()}`,
				icon: isConfirmed ? "check" : n.type === "booking_reply" ? "reply" : "sparkles",
				title: notifTitle,
				time: timeStr || "Just now",
				timestamp: Date.now(),
				description: notifMsg,
				rawDescription: notifMsg,
				unread: n.is_read !== true,
				category: cat,
				type: isConfirmed ? "booking_confirmed" : n.type || "system",
				bookingReference: bookingRef,
				linkUrl: n.link || "/requests"
			};
			addItemDeduplicated(newItem);
		};
		const handleNotificationUpdated = (e) => {
			const updated = e.detail;
			if (!updated?.id) return;
			setNotifications((prev) => prev.map((item) => item.id === `db-notif-${updated.id}` ? {
				...item,
				unread: updated.is_read === false
			} : item));
		};
		const handleNotificationDeleted = (e) => {
			const deleted = e.detail;
			if (!deleted?.id) return;
			setNotifications((prev) => prev.filter((item) => item.id !== `db-notif-${deleted.id}`));
		};
		const handleCutOffReminderTriggered = (e) => {
			const notif = e.detail;
			if (!notif) return;
			addItemDeduplicated(notif);
		};
		window.addEventListener("nashmia:email-sent", handleEmailSentEvent);
		window.addEventListener("nashmia_booking_confirmed", handleBookingConfirmedEvent);
		window.addEventListener("nashmia_cutoff_reminder_triggered", handleCutOffReminderTriggered);
		window.addEventListener("nashmia_notification_inserted", handleNotificationInserted);
		window.addEventListener("nashmia_notification_updated", handleNotificationUpdated);
		window.addEventListener("nashmia_notification_deleted", handleNotificationDeleted);
		const cancelScheduler = scheduleCutOffReminders();
		return () => {
			window.removeEventListener("nashmia:email-sent", handleEmailSentEvent);
			window.removeEventListener("nashmia_booking_confirmed", handleBookingConfirmedEvent);
			window.removeEventListener("nashmia_cutoff_reminder_triggered", handleCutOffReminderTriggered);
			window.removeEventListener("nashmia_notification_inserted", handleNotificationInserted);
			window.removeEventListener("nashmia_notification_updated", handleNotificationUpdated);
			window.removeEventListener("nashmia_notification_deleted", handleNotificationDeleted);
			cancelScheduler();
		};
	}, [addItemDeduplicated]);
	(0, import_react.useEffect)(() => {
		if (!isSupabaseConfigured) return;
		let channel = null;
		const timer = setTimeout(() => {
			channel = supabase.channel("nashmia_live_operations_notifications_v4").on("postgres_changes", {
				event: "INSERT",
				schema: "public",
				table: "notifications"
			}, (payload) => {
				const n = payload.new;
				const dateVal = n.created_at || /* @__PURE__ */ new Date();
				const cat = categorizeNotificationDate(dateVal);
				const timeStr = formatNotificationRelativeTime(dateVal);
				const isConfirmed = n.title?.toLowerCase().includes("confirmed") || n.message?.toLowerCase().includes("confirmed") || n.type === "booking_confirmed";
				const refMatch = `${n.title || ""} ${n.message || ""}`.match(/\b(MOV-\d{4}-\d{3,6}|BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|NASH-[A-Z0-9-]+)\b/i);
				const bookingRef = refMatch ? refMatch[1].toUpperCase() : void 0;
				const notifTitle = isConfirmed ? bookingRef ? `Booking Confirmed: ${bookingRef}` : n.title || "Booking Confirmed" : n.title || "Notification";
				const notifMsg = n.message || (bookingRef ? `Movement ${bookingRef} has been confirmed by the forwarder.` : "Movement confirmed by forwarder.");
				const newItem = {
					id: `db-notif-${n.id || Date.now()}`,
					icon: isConfirmed ? "check" : n.type === "booking_reply" ? "reply" : "sparkles",
					title: notifTitle,
					time: timeStr || "Just now",
					timestamp: Date.now(),
					description: notifMsg,
					rawDescription: notifMsg,
					unread: n.is_read !== true,
					category: cat,
					type: isConfirmed ? "booking_confirmed" : n.type || "system",
					bookingReference: bookingRef,
					linkUrl: n.link || "/requests"
				};
				addItemDeduplicated(newItem);
			}).on("postgres_changes", {
				event: "UPDATE",
				schema: "public",
				table: "notifications"
			}, (payload) => {
				const updated = payload.new;
				if (!updated.id) return;
				setNotifications((prev) => prev.map((item) => item.id === `db-notif-${updated.id}` ? {
					...item,
					unread: updated.is_read === false
				} : item));
			}).on("postgres_changes", {
				event: "DELETE",
				schema: "public",
				table: "notifications"
			}, (payload) => {
				const deleted = payload.old;
				if (!deleted.id) return;
				setNotifications((prev) => prev.filter((item) => item.id !== `db-notif-${deleted.id}`));
			}).on("postgres_changes", {
				event: "UPDATE",
				schema: "public",
				table: "bookings"
			}, (payload) => {
				const updated = payload.new;
				const old = payload.old;
				const isConfirmed = updated.status?.toUpperCase() === "CONFIRMED" || updated.status?.toLowerCase().includes("confirmed");
				const wasNotConfirmed = !old?.status || old.status.toUpperCase() !== "CONFIRMED" && !old.status.toLowerCase().includes("confirmed");
				if (isConfirmed && wasNotConfirmed) {
					let movementRef = updated.movement_number || updated.booking_reference || "";
					if (!movementRef && updated.id) {
						const found = getLocalBookings().find((b) => b.id === updated.id);
						if (found) movementRef = found.movement_number || found.booking_reference || found.reference || "";
					}
					if (!movementRef && updated.id && !updated.id.includes("-")) movementRef = updated.id;
					if (!movementRef || movementRef.toLowerCase() === "booking") return;
					const notifTitle = `Booking Confirmed: ${movementRef}`;
					const notifMsg = `Movement ${movementRef} has been confirmed by the forwarder.`;
					const notifItem = {
						id: `booking-confirmed-${updated.id || movementRef}`,
						icon: "check",
						title: notifTitle,
						time: "Just now",
						timestamp: Date.now(),
						description: notifMsg,
						rawDescription: notifMsg,
						unread: true,
						category: "today",
						type: "booking_confirmed",
						bookingReference: movementRef,
						linkUrl: "/requests"
					};
					addItemDeduplicated(notifItem);
				}
			}).on("postgres_changes", {
				event: "INSERT",
				schema: "public",
				table: "bookings"
			}, (payload) => {
				const newBooking = payload.new;
				const ref = newBooking.booking_reference || "NASH-BKG";
				const client = newBooking.customer_name || "Customer";
				const route = `${newBooking.origin_port || "Karachi"} → ${newBooking.destination_port || "Destination"}`;
				const newItem = {
					id: `booking-${newBooking.id || Date.now()}`,
					icon: "check",
					title: `Booking Request Created: ${ref}`,
					time: "Just now",
					timestamp: Date.now(),
					description: `New booking for ${client} (${route}) registered in operations.`,
					rawDescription: `New booking for ${client} (${route}) registered in operations.`,
					unread: true,
					category: "today",
					type: "booking_request",
					bookingReference: ref,
					linkUrl: "/requests"
				};
				addItemDeduplicated(newItem);
			}).on("postgres_changes", {
				event: "*",
				schema: "public",
				table: "forwarder_offers"
			}, (payload) => {
				const offer = payload.new || {};
				if (!offer || !offer.id) return;
				const fName = offer.forwarder_name || "Forwarder";
				const movRef = offer.movement_number || "";
				const status = String(offer.status || "").toUpperCase();
				if (status === "AWARDED") {
					const title = movRef ? `Offer Awarded: ${movRef}` : "Offer Awarded";
					const desc = `Booking ${movRef || ""} awarded to ${fName} ($${offer.rate_per_container || 0}/cntr).`;
					const notifItem = {
						id: `offer-awarded-${offer.id}`,
						icon: "check",
						title,
						time: "Just now",
						timestamp: Date.now(),
						description: desc,
						rawDescription: desc,
						unread: true,
						category: "today",
						type: "booking_request",
						bookingReference: movRef,
						linkUrl: "/requests"
					};
					addItemDeduplicated(notifItem);
				} else if (status === "RESPONDED" || offer.space_available) {
					const title = movRef ? `Offer Received: ${movRef}` : "Forwarder Offer Received";
					const desc = `${fName} submitted quote: $${offer.rate_per_container || 0}/cntr${offer.carrier ? ` on ${offer.carrier}` : ""}.`;
					const notifItem = {
						id: `offer-received-${offer.id}`,
						icon: "tag",
						title,
						time: "Just now",
						timestamp: Date.now(),
						description: desc,
						rawDescription: desc,
						unread: true,
						category: "today",
						type: "quote_received",
						bookingReference: movRef,
						linkUrl: "/requests"
					};
					addItemDeduplicated(notifItem);
				}
			}).on("postgres_changes", {
				event: "INSERT",
				schema: "public",
				table: "email_messages"
			}, (payload) => {
				const em = payload.new;
				const isReply = em.direction === "inbound" || em.subject?.toLowerCase().startsWith("re:") || em.email_type === "BOOKING_CONFIRMATION";
				const subject = em.subject || "(No Subject)";
				const sender = em.sender_name || em.sender_email || "Forwarder/Buyer";
				const snippet = em.snippet || (em.body ? em.body.slice(0, 100) : subject);
				const rawHeaders = payload.new.raw_headers || {};
				let bookingRef = em.movement_number || rawHeaders.movement_number || rawHeaders.movementNumber || extractMovementNumber(subject) || extractMovementNumber(snippet) || extractMovementNumber(em.body);
				if (em.booking_id || bookingRef) {
					const found = getLocalBookings().find((b) => em.booking_id && b.id === em.booking_id || bookingRef && (b.movement_number === bookingRef || b.booking_reference === bookingRef || b.reference === bookingRef));
					if (found && found.movement_number) bookingRef = found.movement_number;
				}
				const isConfirmedReply = rawHeaders.confirmation_status === "CONFIRMED" || subject.toLowerCase().includes("booking confirmed") || snippet.toLowerCase().includes("booking confirmed") || em.body && em.body.toLowerCase().includes("booking confirmed");
				if (isReply && isConfirmedReply) {
					const confirmedTitle = bookingRef ? `Booking Confirmed: ${bookingRef}` : "Booking Confirmed";
					const confirmedMsg = bookingRef ? `Movement ${bookingRef} confirmed by forwarder.` : `Movement confirmed by forwarder.`;
					const confirmedItem = {
						id: `booking-confirmed-${bookingRef || em.id}`,
						icon: "check",
						title: confirmedTitle,
						time: "Just now",
						timestamp: Date.now(),
						description: confirmedMsg,
						rawDescription: confirmedMsg,
						unread: true,
						category: "today",
						type: "booking_confirmed",
						bookingReference: bookingRef,
						senderName: sender,
						senderEmail: em.sender_email,
						linkUrl: `/movements`
					};
					addItemDeduplicated(confirmedItem);
				} else if (isReply) {
					const replyItem = {
						id: `email-reply-${em.id || Date.now()}`,
						icon: "reply",
						title: `Booking Reply Received: ${bookingRef ? bookingRef : subject.slice(0, 30)}`,
						time: "Just now",
						timestamp: Date.now(),
						description: `From ${sender}: "${snippet}"`,
						rawDescription: `From ${sender}: "${snippet}"`,
						unread: true,
						category: "today",
						type: "booking_reply",
						bookingReference: bookingRef,
						senderName: sender,
						senderEmail: em.sender_email,
						linkUrl: `/emails?search=${encodeURIComponent(bookingRef || subject)}`
					};
					addItemDeduplicated(replyItem);
				} else {
					const sentItem = {
						id: `email-sent-${em.id || Date.now()}`,
						icon: "mail",
						title: `Booking Request Sent: ${bookingRef || subject.slice(0, 30)}`,
						time: "Just now",
						timestamp: Date.now(),
						description: `Dispatched to ${em.recipient_name || em.recipient_email}: "${snippet}"`,
						rawDescription: `Dispatched to ${em.recipient_name || em.recipient_email}: "${snippet}"`,
						unread: false,
						category: "today",
						type: "booking_request",
						bookingReference: bookingRef,
						linkUrl: `/emails?search=${encodeURIComponent(bookingRef || subject)}`
					};
					addItemDeduplicated(sentItem);
				}
			}).on("postgres_changes", {
				event: "INSERT",
				schema: "public",
				table: "booking_events"
			}, (payload) => {
				const ev = payload.new;
				const newItem = {
					id: `event-${ev.id || Date.now()}`,
					icon: "sparkles",
					title: ev.title || "Tracking Milestone Update",
					time: "Just now",
					timestamp: Date.now(),
					description: ev.description || "Container tracking update synchronized.",
					rawDescription: ev.description || "Container tracking update synchronized.",
					unread: true,
					category: "today",
					type: "tracking_event",
					linkUrl: "/requests"
				};
				addItemDeduplicated(newItem);
			}).subscribe();
		}, 1200);
		return () => {
			clearTimeout(timer);
			if (channel) supabase.removeChannel(channel);
		};
	}, [addItemDeduplicated]);
	(0, import_react.useEffect)(() => {
		const liveGmail = gmail?.liveMessages || [];
		if (liveGmail.length === 0) return;
		if (isFirstGmailLoadRef.current) {
			isFirstGmailLoadRef.current = false;
			liveGmail.forEach((m) => seenGmailIdsRef.current.add(m.id));
			return;
		}
		const latest = liveGmail[0];
		if (latest && !seenGmailIdsRef.current.has(latest.id)) {
			seenGmailIdsRef.current.add(latest.id);
			const isReply = latest.subject.toLowerCase().startsWith("re:") || latest.snippet.toLowerCase().includes("booking");
			const senderName = latest.from.split("<")[0].trim() || "Forwarder";
			const subject = latest.subject || "(No Subject)";
			const refMatch = `${subject} ${latest.snippet}`.match(/\b(BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|NASH-[A-Z0-9-]+)\b/i);
			const bookingRef = refMatch ? refMatch[1].toUpperCase() : void 0;
			const isConfirmedReply = isReply && (subject.toLowerCase().includes("booking confirmed") || latest.snippet.toLowerCase().includes("booking confirmed") || latest.body && latest.body.toLowerCase().includes("booking confirmed"));
			const notifItem = {
				id: `gmail-live-${latest.id}`,
				icon: isConfirmedReply ? "check" : isReply ? "reply" : "mail",
				title: isConfirmedReply ? `Booking Confirmed: ${bookingRef || subject.slice(0, 30)}` : isReply ? `Booking Reply: ${bookingRef ? bookingRef + " - " : ""}${subject.replace(/^Re:\s*/i, "").slice(0, 30)}` : `Email: ${subject.slice(0, 30)}`,
				time: "Just now",
				timestamp: Date.now(),
				description: `From ${senderName}: "${latest.snippet.slice(0, 80)}"`,
				rawDescription: `From ${senderName}: "${latest.snippet.slice(0, 80)}"`,
				unread: true,
				category: "today",
				type: isConfirmedReply ? "booking_confirmed" : isReply ? "booking_reply" : "general_email",
				bookingReference: bookingRef,
				senderName,
				linkUrl: `/emails?search=${encodeURIComponent(bookingRef || subject)}`
			};
			addItemDeduplicated(notifItem);
		}
	}, [gmail?.liveMessages, addItemDeduplicated]);
	const markAsRead = (0, import_react.useCallback)((id) => {
		addReadId(id);
		setNotifications((prev) => prev.map((item) => item.id === id ? {
			...item,
			unread: false
		} : item));
		if (isSupabaseConfigured && id.startsWith("db-notif-")) {
			const dbId = id.replace("db-notif-", "");
			supabase.from("notifications").update({
				is_read: true,
				read_at: (/* @__PURE__ */ new Date()).toISOString()
			}).eq("id", dbId).then(() => {});
		}
	}, []);
	const markAllAsRead = (0, import_react.useCallback)(() => {
		markAllIdsRead(notifications.map((n) => n.id));
		setNotifications((prev) => prev.map((item) => ({
			...item,
			unread: false
		})));
		if (isSupabaseConfigured) supabase.from("notifications").update({
			is_read: true,
			read_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("is_read", false).then(() => {});
		showPillToast.info("All notifications marked as read.", "Notification Center");
	}, [notifications]);
	const clearAll = (0, import_react.useCallback)(() => {
		setClearedAt(Date.now());
		notifications.forEach((n) => addDismissedId(n.id));
		setNotifications([]);
		try {
			localStorage.removeItem(STORAGE_KEY);
		} catch {}
		if (isSupabaseConfigured) supabase.from("notifications").update({
			is_read: true,
			read_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("is_read", false).then(() => {});
		showPillToast.info("All notifications cleared.", "Notification Center");
	}, [notifications]);
	const deleteNotification = (0, import_react.useCallback)((id) => {
		addDismissedId(id);
		setNotifications((prev) => prev.filter((item) => item.id !== id));
		if (isSupabaseConfigured && id.startsWith("db-notif-")) {
			const dbId = id.replace("db-notif-", "");
			supabase.from("notifications").delete().eq("id", dbId).then(() => {});
		}
	}, []);
	const simulateBookingReply = (0, import_react.useCallback)((bookingRef, customSender = "Maersk Customer Booking Desk", customSnippet = "Booking space confirmed. Container release order CRO-99182 allocated for Karachi to Jebel Ali voyage.") => {
		const localBookings = getLocalBookings();
		const defaultMov = localBookings[0]?.movement_number || localBookings[0]?.booking_reference || localBookings[0]?.reference || "MOV-2026-00001";
		const actualRef = bookingRef && bookingRef !== "BK-2026-0814" && bookingRef !== "BK-2026-0925" ? bookingRef : defaultMov;
		const now = Date.now();
		const nowIso = new Date(now).toISOString();
		const msgId = `sim-reply-${now}`;
		const isConfirmed = customSnippet.toLowerCase().includes("confirmed") || customSnippet.toLowerCase().includes("space confirmed");
		const notifTitle = isConfirmed ? `Booking Confirmed: ${actualRef}` : `Booking Reply: ${actualRef}`;
		const notifMsg = `From ${customSender}: "${customSnippet.slice(0, 60)}"`;
		const replyItem = {
			id: msgId,
			icon: isConfirmed ? "check" : "reply",
			title: notifTitle,
			time: "Just now",
			timestamp: now,
			description: `From ${customSender}: "${customSnippet}"`,
			rawDescription: `From ${customSender}: "${customSnippet}"`,
			unread: true,
			category: "today",
			type: isConfirmed ? "booking_confirmed" : "booking_reply",
			bookingReference: bookingRef,
			senderName: customSender,
			senderEmail: "bookings@maerskline-logistics.com",
			linkUrl: `/emails?search=${encodeURIComponent(bookingRef)}`
		};
		saveLocalEmail({
			id: msgId,
			threadId: `th-${msgId}`,
			fromEmail: "bookings@maerskline-logistics.com",
			fromName: customSender,
			toEmail: "operations@nashmiaindustries.com",
			toName: "Nashmia Operations",
			subject: `Re: Ocean Freight Space Confirmation - ${bookingRef}`,
			body: `Dear Nashmia Industries Logistics Team,\n\n${customSnippet}\n\nVessel: CMA CGM Palais\nPort Cut-off: 03-Sep-2026\nEquipment: Ready at Karachi Port Terminal.\n\nBest regards,\n${customSender}`,
			bodyHtml: null,
			snippet: customSnippet,
			emailType: "BOOKING_CONFIRMATION",
			status: "SENT",
			direction: "inbound",
			bookingReference: bookingRef,
			createdAt: nowIso,
			updatedAt: nowIso,
			sentAt: nowIso,
			attachments: [{
				name: `Booking_Confirmation_${bookingRef}.pdf`,
				size: "380 KB"
			}]
		});
		if (isSupabaseConfigured) (async () => {
			try {
				const { data: existingThread } = await supabase.from("email_threads").select("id").limit(1).maybeSingle();
				let targetThreadId = existingThread?.id;
				if (!targetThreadId) {
					const { data: p } = await supabase.from("profiles").select("id").limit(1).maybeSingle();
					if (p?.id) {
						const { data: newT } = await supabase.from("email_threads").insert({
							user_id: p.id,
							subject: `Re: Booking Request - ${bookingRef}`,
							status: "Active",
							snippet: customSnippet.slice(0, 120)
						}).select("id").maybeSingle();
						targetThreadId = newT?.id;
					}
				}
				if (targetThreadId) await supabase.from("email_messages").insert({
					thread_id: targetThreadId,
					subject: `Re: Booking Request - ${bookingRef} Space Confirmation`,
					body: `Dear Nashmia Operations,\n\n${customSnippet}\n\nVessel schedule has been locked.\n\nBest regards,\n${customSender}`,
					sender_name: customSender,
					sender_email: "bookings@maerskline-logistics.com",
					recipient_email: "operations@nashmiaindustries.com",
					direction: "Inbound",
					sent_at: nowIso,
					raw_headers: {
						booking_reference: bookingRef,
						snippet: customSnippet,
						recipient_name: "Nashmia Operations",
						status: "SENT",
						email_type: "BOOKING_CONFIRMATION"
					}
				});
			} catch (e) {
				console.warn("[NotificationsContext] Notice during email_messages sync:", e);
			}
		})();
		if (isConfirmed) showPillToast.success(notifMsg, notifTitle, bookingRef);
		else showPillToast.comment(notifMsg, notifTitle, bookingRef);
		setNotifications((prev) => [replyItem, ...prev.filter((n) => n.id !== replyItem.id)]);
	}, []);
	const simulateBookingRequest = (0, import_react.useCallback)((bookingRef, forwarderName = "Hapag-Lloyd Ocean Desk", route = "Karachi (PKKHI) → Hamburg (DEHAM)") => {
		const localBookings = getLocalBookings();
		const defaultMov = localBookings[0]?.movement_number || localBookings[0]?.booking_reference || localBookings[0]?.reference || "MOV-2026-00001";
		const actualRef = bookingRef && bookingRef !== "BK-2026-0814" && bookingRef !== "BK-2026-0925" ? bookingRef : defaultMov;
		const now = Date.now();
		const nowIso = new Date(now).toISOString();
		const msgId = `sim-req-${now}`;
		const snippet = `Booking request dispatched for 3x 40HC containers (${route}). Vessel allocation requested.`;
		const requestItem = {
			id: msgId,
			icon: "mail",
			title: `Booking Request Sent: ${actualRef}`,
			time: "Just now",
			timestamp: now,
			description: `Dispatched to ${forwarderName}: "${snippet}"`,
			rawDescription: `Dispatched to ${forwarderName}: "${snippet}"`,
			unread: true,
			category: "today",
			type: "booking_request",
			bookingReference: actualRef,
			recipientName: forwarderName,
			recipientEmail: "freight@hapag-lloyd-desk.com",
			linkUrl: `/emails?search=${encodeURIComponent(actualRef)}`
		};
		saveLocalEmail({
			id: msgId,
			threadId: `th-${msgId}`,
			fromEmail: "operations@nashmiaindustries.com",
			fromName: "Nashmia Operations Desk",
			toEmail: "freight@hapag-lloyd-desk.com",
			toName: forwarderName,
			subject: `Booking Request ${bookingRef} | ${route}`,
			body: `Dear ${forwarderName},\n\nPlease book ocean freight allocation for ${bookingRef}.\nRoute: ${route}\nCargo: 100% Organic Cotton Garments\nEquipment: 3x 40HC\n\nKindly confirm booking confirmation and shipping instructions cutoff.\n\nBest regards,\nNashmia Operations`,
			bodyHtml: null,
			snippet,
			emailType: "BOOKING_REQUEST",
			status: "SENT",
			direction: "outbound",
			bookingReference: bookingRef,
			createdAt: nowIso,
			updatedAt: nowIso,
			sentAt: nowIso,
			attachments: [{
				name: `Booking_Summary_${bookingRef}.pdf`,
				size: "295 KB"
			}]
		});
		showPillToast.build(`Dispatched to ${forwarderName} (${route})`, `Booking Request Sent (${bookingRef})`);
		setNotifications((prev) => [requestItem, ...prev.filter((n) => n.id !== requestItem.id)]);
	}, []);
	const contextValue = (0, import_react.useMemo)(() => ({
		notifications,
		unreadCount,
		isMounted,
		isSyncing,
		markAsRead,
		markAllAsRead,
		clearAll,
		deleteNotification,
		refreshNotifications,
		simulateBookingReply,
		simulateBookingRequest
	}), [
		notifications,
		unreadCount,
		isMounted,
		isSyncing,
		markAsRead,
		markAllAsRead,
		clearAll,
		deleteNotification,
		refreshNotifications,
		simulateBookingReply,
		simulateBookingRequest
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NotificationsContext.Provider, {
		value: contextValue,
		children
	}, void 0, false, {
		fileName: _jsxFileName$20,
		lineNumber: 1619,
		columnNumber: 5
	}, this);
}
function useNotifications() {
	const context = (0, import_react.useContext)(NotificationsContext);
	if (!context) throw new Error("useNotifications must be used within a NotificationsProvider");
	return context;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BJg2H47m.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
/**
* Checks if an element is a vertically scrollable container.
*/
function isScrollableContainer(node) {
	if (!node || node === document.body || node === document.documentElement) return false;
	try {
		const overflowY = window.getComputedStyle(node).overflowY;
		return (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") && node.scrollHeight > node.clientHeight + 1;
	} catch {
		return false;
	}
}
/**
* Traverses from target up to the boundary element.
* Returns true if ANY ancestor has scrolled down (scrollTop > 1), meaning downward touch
* is intended to scroll the content upward, NOT drag the sheet down.
*/
function hasScrolledAncestor(target, boundary) {
	let curr = target;
	while (curr && curr !== boundary && curr !== document.body) {
		if (isScrollableContainer(curr) && curr.scrollTop > 1) return true;
		curr = curr.parentElement;
	}
	if (boundary && isScrollableContainer(boundary) && boundary.scrollTop > 1) return true;
	return false;
}
/**
* Checks whether an element is an interactive form element that should take priority
* over bottom sheet dismissal dragging.
*/
function isInteractiveFormElement(target) {
	return Boolean(target.closest("input, textarea, select, [contenteditable='true'], [role='combobox'], [role='slider'], [role='spinbutton'], [role='listbox'], button, a, [data-prevent-swipe]"));
}
/**
* Custom hook for detecting vertical swipe-down gestures on mobile bottom sheets.
* Provides intuitive, fluid dismissal with natural resistance and spring physics,
* while strictly avoiding conflicts with nested scrollable forms and inputs.
*/
function useVerticalSwipeGesture({ onDismiss, threshold = 75, velocityThreshold = .38, enabled = true, onlyHandle = false, onDragProgress, onDragStart, onDragEnd }) {
	const elementRef = (0, import_react.useRef)(null);
	const handleRef = (0, import_react.useRef)(null);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const isDraggingRef = (0, import_react.useRef)(false);
	const startPosRef = (0, import_react.useRef)(null);
	const lastPosRef = (0, import_react.useRef)(null);
	const currentDeltaRef = (0, import_react.useRef)(0);
	const isDirectHandleTouchRef = (0, import_react.useRef)(false);
	const isEligibleForDragRef = (0, import_react.useRef)(false);
	const rafIdRef = (0, import_react.useRef)(null);
	const resetPosition = (0, import_react.useCallback)((animate = true) => {
		if (rafIdRef.current !== null) {
			cancelAnimationFrame(rafIdRef.current);
			rafIdRef.current = null;
		}
		const el = elementRef.current;
		if (!el) return;
		if (animate) el.style.transition = "transform 220ms cubic-bezier(0.16, 1, 0.3, 1), opacity 220ms ease-out";
		else el.style.transition = "none";
		el.style.transform = "";
		currentDeltaRef.current = 0;
		onDragProgress?.(0);
		if (isDraggingRef.current) {
			isDraggingRef.current = false;
			setIsDragging(false);
		}
	}, [onDragProgress]);
	const applyTransform = (0, import_react.useCallback)((delta) => {
		if (!elementRef.current) return;
		if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
		rafIdRef.current = requestAnimationFrame(() => {
			rafIdRef.current = null;
			const targetEl = elementRef.current;
			if (!targetEl) return;
			targetEl.style.transition = "none";
			const clampedY = Math.max(0, delta);
			targetEl.style.transform = `translate3d(0, ${clampedY}px, 0)`;
			currentDeltaRef.current = delta;
			const normalized = Math.min(1, Math.max(0, delta / 240));
			onDragProgress?.(normalized);
		});
	}, [onDragProgress]);
	const triggerDismiss = (0, import_react.useCallback)(() => {
		const el = elementRef.current;
		if (!el) {
			onDismiss();
			return;
		}
		el.style.transition = "transform 200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease-out";
		el.style.transform = "translate3d(0, 100%, 0)";
		el.style.opacity = "0.5";
		setTimeout(() => {
			onDismiss();
			if (elementRef.current) {
				elementRef.current.style.transform = "";
				elementRef.current.style.transition = "";
				elementRef.current.style.opacity = "";
			}
		}, 190);
	}, [onDismiss]);
	(0, import_react.useEffect)(() => {
		const el = elementRef.current;
		if (!el || !enabled) return;
		const onStart = (clientX, clientY, target) => {
			const isHandle = handleRef.current?.contains(target) || Boolean(target.closest("[data-swipe-handle='true']")) || Boolean(target.closest("[data-swipe-handle]")) || Boolean(target.getAttribute("data-swipe-handle"));
			isDirectHandleTouchRef.current = isHandle;
			if (isInteractiveFormElement(target) && !isHandle) {
				isEligibleForDragRef.current = false;
				return;
			}
			if (onlyHandle && !isHandle) {
				isEligibleForDragRef.current = false;
				return;
			}
			if (hasScrolledAncestor(target, el) && !isHandle) {
				isEligibleForDragRef.current = false;
				return;
			}
			isEligibleForDragRef.current = true;
			startPosRef.current = {
				x: clientX,
				y: clientY,
				time: Date.now()
			};
			lastPosRef.current = {
				x: clientX,
				y: clientY,
				time: Date.now()
			};
			isDraggingRef.current = false;
		};
		const onMove = (clientX, clientY, cancelable, preventDefault) => {
			if (!startPosRef.current || !isEligibleForDragRef.current) return;
			const deltaX = clientX - startPosRef.current.x;
			const deltaY = clientY - startPosRef.current.y;
			lastPosRef.current = {
				x: clientX,
				y: clientY,
				time: Date.now()
			};
			if (!isDraggingRef.current) {
				if (isDirectHandleTouchRef.current) {
					if (deltaY > 1) {
						isDraggingRef.current = true;
						setIsDragging(true);
						onDragStart?.();
					}
				} else if (deltaY > 8 && Math.abs(deltaY) > Math.abs(deltaX) * 1.3) {
					const targetEl = elementRef.current;
					if (targetEl && targetEl.scrollTop <= 1) {
						isDraggingRef.current = true;
						setIsDragging(true);
						onDragStart?.();
					} else {
						isEligibleForDragRef.current = false;
						return;
					}
				}
			}
			if (isDraggingRef.current && deltaY > 0) {
				if (cancelable) preventDefault();
				const resistance = deltaY > threshold ? 1 - Math.min(.45, (deltaY - threshold) / 500) : 1;
				applyTransform(deltaY * resistance);
			}
		};
		const onEnd = () => {
			if (!startPosRef.current || !lastPosRef.current) {
				isDraggingRef.current = false;
				setIsDragging(false);
				return;
			}
			const deltaY = lastPosRef.current.y - startPosRef.current.y;
			const deltaX = lastPosRef.current.x - startPosRef.current.x;
			const velocityY = deltaY / Math.max(1, lastPosRef.current.time - startPosRef.current.time);
			if (isDraggingRef.current) {
				const isPastThreshold = deltaY >= threshold;
				const isFastFlick = velocityY >= velocityThreshold && deltaY > 30;
				const isDominantVertical = Math.abs(deltaY) > Math.abs(deltaX) * 1.1;
				const shouldDismiss = (isPastThreshold || isFastFlick) && isDominantVertical;
				onDragEnd?.(shouldDismiss);
				if (shouldDismiss) triggerDismiss();
				else resetPosition(true);
			}
			isDraggingRef.current = false;
			setIsDragging(false);
			startPosRef.current = null;
			lastPosRef.current = null;
			isDirectHandleTouchRef.current = false;
			isEligibleForDragRef.current = false;
		};
		const handleTouchStart = (e) => {
			if (e.touches.length !== 1) return;
			onStart(e.touches[0].clientX, e.touches[0].clientY, e.target);
		};
		const handleTouchMove = (e) => {
			if (e.touches.length !== 1) return;
			onMove(e.touches[0].clientX, e.touches[0].clientY, e.cancelable, () => e.preventDefault());
		};
		const handleTouchEnd = () => {
			onEnd();
		};
		const handlePointerDown = (e) => {
			if (e.pointerType === "touch") return;
			const target = e.target;
			if (handleRef.current?.contains(target) || Boolean(target.closest("[data-swipe-handle='true']")) || Boolean(target.closest("[data-swipe-handle]"))) {
				onStart(e.clientX, e.clientY, target);
				const onPointerMove = (pe) => {
					onMove(pe.clientX, pe.clientY, pe.cancelable, () => pe.preventDefault());
				};
				const onPointerUp = () => {
					onEnd();
					window.removeEventListener("pointermove", onPointerMove);
					window.removeEventListener("pointerup", onPointerUp);
					window.removeEventListener("pointercancel", onPointerUp);
				};
				window.addEventListener("pointermove", onPointerMove);
				window.addEventListener("pointerup", onPointerUp);
				window.addEventListener("pointercancel", onPointerUp);
			}
		};
		el.addEventListener("touchstart", handleTouchStart, { passive: true });
		el.addEventListener("touchmove", handleTouchMove, { passive: false });
		el.addEventListener("touchend", handleTouchEnd, { passive: true });
		el.addEventListener("touchcancel", handleTouchEnd, { passive: true });
		el.addEventListener("pointerdown", handlePointerDown);
		return () => {
			if (rafIdRef.current !== null) {
				cancelAnimationFrame(rafIdRef.current);
				rafIdRef.current = null;
			}
			el.removeEventListener("touchstart", handleTouchStart);
			el.removeEventListener("touchmove", handleTouchMove);
			el.removeEventListener("touchend", handleTouchEnd);
			el.removeEventListener("touchcancel", handleTouchEnd);
			el.removeEventListener("pointerdown", handlePointerDown);
		};
	}, [
		enabled,
		threshold,
		velocityThreshold,
		onlyHandle,
		applyTransform,
		resetPosition,
		triggerDismiss,
		onDragStart,
		onDragEnd
	]);
	return {
		elementRef,
		handleRef,
		isDragging,
		resetPosition,
		triggerDismiss
	};
}
/**
* Maps Supabase FullBookingRecord to BookingRequestRecord
*/
function mapBookingRecordToRequest(booking) {
	let priority = "Normal";
	const specialText = `${booking.special_instructions || ""} ${booking.notes || ""}`.toLowerCase();
	if (specialText.includes("urgent") || specialText.includes("rush") || specialText.includes("critical")) priority = "Urgent";
	else if (specialText.includes("high") || specialText.includes("priority") || specialText.includes("asap")) priority = "High";
	else if (specialText.includes("flexible") || specialText.includes("economy")) priority = "Flexible";
	let status = "Pending Review";
	const rawStatus = booking.status || "Booking Requested";
	const upperStatus = rawStatus.toUpperCase();
	const confirmationStatusUpper = (booking.confirmation_status || "").toUpperCase();
	const isConfirmed = isBookingConfirmed(booking, booking.id || booking.movement_number || booking.booking_reference) || upperStatus === "CONFIRMED" || upperStatus === "BOOKING CONFIRMED" || upperStatus.includes("CONFIRM") || confirmationStatusUpper === "CONFIRMED" || upperStatus === "LOADED" || upperStatus === "IN TRANSIT" || upperStatus === "CUSTOMS CLEARED" || upperStatus === "DISCHARGED" || upperStatus === "DELIVERED";
	if (isConfirmed) status = "Approved";
	else if (rawStatus === "Rate Verification" || rawStatus === "Rate Check" || upperStatus === "RATE VERIFICATION") status = "Rate Verification";
	else if (rawStatus === "Line Allocation" || rawStatus === "Allocation Pending" || upperStatus === "LINE ALLOCATION") status = "Line Allocation";
	else if (rawStatus === "Customs Hold" || rawStatus === "Revision Requested" || rawStatus.includes("Revision") || confirmationStatusUpper === "REJECTED") status = "Revision Requested";
	else if (rawStatus === "Cancelled" || rawStatus === "Declined" || upperStatus === "CANCELLED" || upperStatus === "DECLINED") status = "Declined";
	else status = "Pending Review";
	const containerCount = booking.container_count || 1;
	const totalFreight = booking.total_freight || (booking.rate_amount ? booking.rate_amount * containerCount : 0);
	const ratePerContainer = containerCount > 0 && totalFreight > 0 ? Math.round(totalFreight / containerCount) : booking.rate_amount || 0;
	const originStr = booking.origin || booking.pol_name || "POL";
	const destStr = booking.destination || booking.pod_name || "POD";
	const polCode = booking.pol_code || originStr.match(/\(([A-Z]{3,5})\)/)?.[1] || originStr.slice(0, 3).toUpperCase();
	const polName = booking.pol_name || originStr;
	const podCode = booking.pod_code || destStr.match(/\(([A-Z]{3,5})\)/)?.[1] || destStr.slice(0, 3).toUpperCase();
	const podName = booking.pod_name || destStr;
	const containerWeights = booking.containers?.reduce((sum, c) => sum + (c.weight || 0), 0) || 0;
	const totalWeightKg = containerWeights > 0 ? containerWeights : containerCount * 22e3;
	const totalVolumeCbm = containerCount * (booking.container_size === "40HC" ? 68 : booking.container_size === "45HC" ? 86 : 33);
	const packagesCount = containerCount * 650;
	const etdDate = booking.etd ? new Date(booking.etd) : new Date(Date.now() + 6048e5);
	const etdStr = etdDate.toISOString().split("T")[0];
	const siCutoffDate = /* @__PURE__ */ new Date(etdDate.getTime() - 1728e5);
	const vgmCutoffDate = /* @__PURE__ */ new Date(etdDate.getTime() - 864e5);
	const preferredCarrier = booking.shipping_line?.name || booking.vessel_name?.split(" ")[0] || "Ocean Carrier";
	const effectiveMovementNumber = booking.movement_number || (booking.booking_reference?.startsWith("MOV-") ? booking.booking_reference : void 0);
	return {
		id: booking.id,
		reference: booking.booking_reference || booking.movement_number || `REQ-${booking.id.slice(0, 8).toUpperCase()}`,
		movementNumber: effectiveMovementNumber,
		movementId: booking.id,
		bookingReference: booking.booking_reference,
		createdAt: booking.created_at || (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: booking.updated_at || booking.created_at || (/* @__PURE__ */ new Date()).toISOString(),
		status,
		priority,
		confirmationStatus: booking.confirmation_status || (isConfirmed ? "CONFIRMED" : void 0),
		confirmedAt: booking.confirmed_at || void 0,
		confirmedBy: booking.confirmed_by || void 0,
		confirmationEmailId: booking.confirmation_email_id || void 0,
		confirmationReason: booking.confirmation_reason || void 0,
		confirmationDetectedBy: booking.confirmation_detected_by || void 0,
		confirmationConfidence: booking.confirmation_confidence || void 0,
		buyerId: booking.buyer_id || void 0,
		buyerName: booking.buyer?.name || booking.buyer?.company_name || booking.buyer_name || booking?.buyerName || "Buyer",
		buyerCode: booking.buyer?.code || "BUYER",
		buyerCountry: booking.buyer?.country || "International",
		consignee: booking.buyer?.consignee || booking.buyer?.name || booking.buyer?.company_name || booking.buyer_name || "Consignee on File",
		supplierId: booking.supplier_id || void 0,
		supplierName: booking.supplier?.name || booking.supplier?.company_name || booking.supplier_name || booking?.supplierName || "Supplier",
		supplierCode: booking.supplier?.code || "SUPPLIER",
		supplierCity: booking.supplier?.city || booking?.supplierCity || "",
		supplierLoadPoint: booking.supplier?.load_point || "",
		forwarderId: isConfirmed ? booking.forwarder_id || void 0 : void 0,
		forwarderName: isConfirmed ? booking.forwarder?.name || booking.forwarder?.company_name || booking.forwarder_name || "Forwarder" : "Pending Award",
		forwarderCode: booking.forwarder?.code || "FORWARDER",
		forwarderEmail: booking.forwarder?.email || void 0,
		polCode,
		polName,
		podCode,
		podName,
		requestedEtd: etdStr,
		estimatedEta: booking.eta || new Date(etdDate.getTime() + 18144e5).toISOString().split("T")[0],
		containerSize: booking.container_size || "40HC",
		containerType: booking.container_type || "High Cube Dry",
		containerCount,
		allocatedContainers: booking.containers?.map((c) => c.container_number),
		preferredCarrier,
		assignedCarrier: preferredCarrier,
		vesselName: booking.vessel_name || "Pending Allocation",
		voyageNumber: booking.voyage_number || "—",
		ratePerContainer,
		totalFreight,
		currency: booking.currency || "USD",
		rateCardId: booking.rate_card_id || void 0,
		rateValidUntil: "—",
		cargo: {
			description: booking.product_description || "Commercial Export Cargo",
			totalWeightKg,
			totalVolumeCbm,
			packagesCount,
			packageType: "Export Master Cartons / Pallets"
		},
		siCutoff: booking.cut_off_dates?.siCutoff || booking.confirmation_details?.cut_off_dates?.siCutoff || `${siCutoffDate.toISOString().split("T")[0]} 18:00`,
		vgmCutoff: booking.cut_off_dates?.vgmCutoff || booking.confirmation_details?.cut_off_dates?.vgmCutoff || `${vgmCutoffDate.toISOString().split("T")[0]} 12:00`,
		gateCutoff: booking.cut_off_dates?.gateCutoff || booking.cut_off_dates?.portCutoff || booking.confirmation_details?.cut_off_dates?.gateCutoff || booking.confirmation_details?.cut_off_dates?.portCutoff || `${vgmCutoffDate.toISOString().split("T")[0]} 22:00`,
		specialInstructions: booking.special_instructions || booking.notes || void 0,
		revisionNotes: status === "Revision Requested" ? booking.special_instructions || "Awaiting updated documentation or weight adjustments." : void 0,
		requestedBy: {
			name: booking.supplier?.contact_person || booking.created_by_name || "Operations Desk",
			email: booking.supplier?.email || "operations@nashmia.com",
			phone: booking.supplier?.phone || "—"
		},
		events: booking.events
	};
}
/**
* Fetch all booking requests from Supabase without any demo or mock items
*/
async function fetchBookingRequestsFromSupabase(userId) {
	try {
		const bookings = await fetchBookingsFromSupabase(userId);
		if (!bookings || bookings.length === 0) return [];
		const confirmedIdentifiers = /* @__PURE__ */ new Set();
		if (typeof window !== "undefined") try {
			const rawEmails = localStorage.getItem("nashmia_custom_emails_v1");
			if (rawEmails) {
				const parsed = JSON.parse(rawEmails);
				if (Array.isArray(parsed)) for (const em of parsed) {
					const subj = (em.subject || "").toLowerCase();
					const body = (em.body || "").toLowerCase();
					if (em.confirmationStatus === "CONFIRMED" || em.emailType === "BOOKING_CONFIRMATION" || subj.includes("booking confirmed") || subj.includes("space confirmed") || body.includes("booking confirmed") || body.includes("booking is confirmed") || body.includes("space is confirmed") || body.includes("space confirmed")) {
						if (em.movementNumber) confirmedIdentifiers.add(em.movementNumber.trim().toLowerCase());
						if (em.bookingReference) confirmedIdentifiers.add(em.bookingReference.trim().toLowerCase());
						if (em.bookingId) confirmedIdentifiers.add(em.bookingId.trim().toLowerCase());
					}
				}
			}
		} catch (err) {
			console.warn("[fetchBookingRequestsFromSupabase] Local email scan notice:", err);
		}
		if (isSupabaseConfigured) try {
			const { data: confs } = await supabase.from("email_confirmations").select("booking_id, movement_number, confirmation_status").eq("confirmation_status", "CONFIRMED").limit(200);
			if (confs) for (const c of confs) {
				if (c.movement_number) confirmedIdentifiers.add(c.movement_number.trim().toLowerCase());
				if (c.booking_id) confirmedIdentifiers.add(c.booking_id.trim().toLowerCase());
			}
		} catch {}
		const rawRequests = bookings.map((booking) => {
			const bRef = (booking.booking_reference || "").trim().toLowerCase();
			const movNum = (booking.movement_number || "").trim().toLowerCase();
			const ref = (booking.reference || "").trim().toLowerCase();
			const bId = (booking.id || "").trim().toLowerCase();
			if (bRef && confirmedIdentifiers.has(bRef) || movNum && confirmedIdentifiers.has(movNum) || ref && confirmedIdentifiers.has(ref) || bId && confirmedIdentifiers.has(bId)) {
				const rawStatus = (booking.status || "").trim();
				const currentUpper = rawStatus.toUpperCase();
				if (!rawStatus || currentUpper === "BOOKING REQUESTED" || currentUpper === "DRAFT" || currentUpper === "PENDING" || currentUpper === "PENDING REVIEW" || currentUpper === "RATE VERIFICATION" || currentUpper === "LINE ALLOCATION") booking.status = "Booking Confirmed";
				booking.confirmation_status = "CONFIRMED";
				booking.confirmed_at = booking.confirmed_at || (/* @__PURE__ */ new Date()).toISOString();
				booking.confirmed_by = booking.confirmed_by || "Operations Desk";
				updateLocalBooking(booking.id, {
					status: booking.status,
					confirmation_status: "CONFIRMED",
					confirmed_at: booking.confirmed_at,
					confirmed_by: booking.confirmed_by,
					forwarder_name: booking.forwarder_name,
					rate_amount: booking.rate_amount,
					total_freight: booking.total_freight
				});
			}
			return mapBookingRecordToRequest(booking);
		});
		const groupedByMovement = /* @__PURE__ */ new Map();
		for (const req of rawRequests) {
			const groupKey = (req.movementNumber || req.bookingReference || req.reference || req.id).trim().toUpperCase();
			if (!groupedByMovement.has(groupKey)) groupedByMovement.set(groupKey, req);
			else {
				const existing = groupedByMovement.get(groupKey);
				if (new Date(req.updatedAt).getTime() > new Date(existing.updatedAt).getTime()) groupedByMovement.set(groupKey, req);
			}
		}
		return Array.from(groupedByMovement.values());
	} catch (err) {
		console.warn("[fetchBookingRequestsFromSupabase] Exception:", err);
		return [];
	}
}
/**
* Approve a booking request: transitions status to "Approved" / "Booking Confirmed"
*/
async function approveBookingRequestInSupabase(requestId, userId, details = {}) {
	const validUserUuid = safeUuid(userId);
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const existing = getLocalBookings().find((b) => b.id === requestId || b.booking_reference === requestId || b.movement_number === requestId || b.reference && b.reference === requestId || b.id && b.id.toLowerCase() === requestId.toLowerCase());
	let movementNum = existing?.movement_number || existing?.booking_reference || existing?.reference || (requestId.startsWith("MOV-") || requestId.startsWith("NASH-") ? requestId : "NASH-BK-2026-7023");
	try {
		const apiRes = await fetch("/api/bookings/approve", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				bookingId: requestId,
				requestId,
				forwarderId: details.forwarderId,
				forwarderName: details.forwarderName,
				vesselName: details.vesselName,
				voyageNumber: details.voyageNumber,
				notes: details.notes,
				confirmedBy: details.forwarderName || details.confirmedBy,
				userId
			})
		});
		if (apiRes.ok) {
			const apiJson = await apiRes.json();
			if (apiJson.success && apiJson.movementNumber) movementNum = apiJson.movementNumber;
		}
	} catch (apiErr) {
		console.warn("[approveBookingRequestInSupabase] API notice:", apiErr);
	}
	const validBookingUuid = safeUuid(requestId) || safeUuid(existing?.id);
	updateLocalBooking(requestId, {
		status: "Booking Confirmed",
		forwarder_id: details.forwarderId,
		forwarder_name: details.forwarderName || existing?.forwarder_name,
		vessel_name: details.vesselName,
		voyage_number: details.voyageNumber,
		notes: details.notes,
		confirmed_at: nowIso,
		confirmed_by: details.forwarderName || details.confirmedBy || "Operations Desk",
		confirmation_status: "CONFIRMED",
		updated_at: nowIso
	});
	markIdentifierConfirmed(requestId, [
		movementNum,
		existing?.movement_number,
		existing?.booking_reference,
		validBookingUuid || void 0
	].filter(Boolean));
	if (isSupabaseConfigured) try {
		const fullBookingUpdates = {
			status: "Confirmed",
			movement_status: "CONFIRMED",
			is_movement_confirmed: true,
			updated_at: nowIso,
			confirmation_status: "CONFIRMED",
			confirmed_at: nowIso,
			confirmed_by: details.forwarderName || details.confirmedBy || "Operations Desk"
		};
		if (details.forwarderName) fullBookingUpdates.forwarder_name = details.forwarderName;
		if (details.forwarderId) fullBookingUpdates.forwarder_id = details.forwarderId;
		if (details.vesselName) fullBookingUpdates.vessel_name = details.vesselName;
		if (details.voyageNumber) fullBookingUpdates.voyage_number = details.voyageNumber;
		if (details.notes) fullBookingUpdates.notes = details.notes;
		if (validBookingUuid) await supabase.from("bookings").update(fullBookingUpdates).eq("id", validBookingUuid);
		else if (existing?.movement_number) await supabase.from("bookings").update(fullBookingUpdates).eq("movement_number", existing.movement_number);
		else if (requestId) await supabase.from("bookings").update(fullBookingUpdates).eq("booking_reference", requestId);
		try {
			await supabase.from("email_confirmations").insert({
				booking_id: validBookingUuid || requestId,
				movement_number: movementNum,
				confirmation_status: "CONFIRMED",
				confirmed_by: details.confirmedBy || "Operations Desk",
				source: "OPERATIONS_APPROVAL",
				confirmed_at: nowIso
			});
		} catch {}
		if (validBookingUuid) await supabase.from("booking_events").insert({
			booking_id: validBookingUuid,
			event_type: "Booking Confirmed",
			event_date: nowIso,
			location: "Operations Desk",
			description: `Request approved. Vessel ${details.vesselName || "Assigned"} / Voyage ${details.voyageNumber || "Allocated"}. Booking confirmation released.`
		}).catch((err) => console.warn("[approveBookingRequest] Event insert notice:", err));
		await safeInsertNotification({
			userId: validUserUuid,
			type: "booking_confirmed",
			title: `Booking Confirmed: ${movementNum}`,
			message: `Movement ${movementNum} has been confirmed. Space and equipment allocated.`,
			booking_id: validBookingUuid,
			is_read: false
		});
	} catch (err) {
		console.warn("[approveBookingRequest] Supabase notice:", err);
	}
	const movementRef = movementNum;
	if (typeof window !== "undefined") {
		window.dispatchEvent(new CustomEvent("nashmia_booking_confirmed", { detail: {
			bookingId: requestId,
			movementNumber: movementRef,
			bookingReference: movementRef,
			status: "Booking Confirmed",
			confirmedBy: details.confirmedBy || "Operations Desk",
			vesselName: details.vesselName,
			voyageNumber: details.voyageNumber
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_booking_status_updated", { detail: {
			bookingId: requestId,
			movementNumber: movementRef,
			status: "Booking Confirmed"
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_bookings_updated"));
		window.dispatchEvent(new CustomEvent("supabase_realtime_bookings_change"));
	}
}
/**
* Request revisions on a booking request
*/
async function requestRevisionInSupabase(requestId, userId, revisionNotes) {
	const validUserUuid = safeUuid(userId);
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	updateLocalBooking(requestId, {
		status: "Customs Hold",
		special_instructions: `Revision Requested: ${revisionNotes}`,
		updated_at: nowIso
	});
	const existing = getLocalBookings().find((b) => b.id === requestId || b.booking_reference === requestId || b.movement_number === requestId || b.id && b.id.toLowerCase() === requestId.toLowerCase());
	const movementNum = existing?.movement_number || existing?.booking_reference || (requestId.startsWith("MOV-") ? requestId : requestId);
	const validBookingUuid = safeUuid(requestId) || safeUuid(existing?.id);
	if (isSupabaseConfigured) try {
		if (validBookingUuid) {
			const { error } = await supabase.from("bookings").update({
				status: "Customs Hold",
				special_instructions: `Revision Requested: ${revisionNotes}`,
				updated_at: nowIso
			}).eq("id", validBookingUuid);
			if (error) console.warn("[requestRevisionInSupabase] Update notice:", error.message);
		} else if (existing?.movement_number) await supabase.from("bookings").update({
			status: "Customs Hold",
			special_instructions: `Revision Requested: ${revisionNotes}`,
			updated_at: nowIso
		}).eq("movement_number", existing.movement_number);
		else if (requestId) await supabase.from("bookings").update({
			status: "Customs Hold",
			special_instructions: `Revision Requested: ${revisionNotes}`,
			updated_at: nowIso
		}).eq("booking_reference", requestId);
		if (validBookingUuid) await supabase.from("booking_events").insert({
			booking_id: validBookingUuid,
			event_type: "Revision Requested",
			event_date: nowIso,
			location: "Documentation Desk",
			description: revisionNotes
		}).catch((err) => console.warn("[requestRevisionInSupabase] Event notice:", err));
		await safeInsertNotification({
			userId: validUserUuid,
			type: "action_required",
			title: "Revision Requested",
			message: `Revision requested for booking ${movementNum}: ${revisionNotes.slice(0, 80)}...`,
			booking_id: validBookingUuid,
			is_read: false
		});
	} catch (err) {
		console.warn("[requestRevision] Exception:", err);
	}
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nashmia_booking_status_updated", { detail: {
		bookingId: requestId,
		movementNumber: movementNum,
		status: "Customs Hold",
		revisionNotes
	} }));
}
/**
* Calculate statistical aggregates for summary ribbon
*/
function calculateRequestsStats(requests) {
	const total = requests.length;
	return {
		total,
		pendingReview: requests.filter((r) => r.status === "Pending Review").length,
		rateVerification: requests.filter((r) => r.status === "Rate Verification").length,
		lineAllocation: requests.filter((r) => r.status === "Line Allocation").length,
		approved: requests.filter((r) => r.status === "Approved").length,
		revisionRequested: requests.filter((r) => r.status === "Revision Requested").length,
		urgentCutoffs: requests.filter((r) => r.priority === "Urgent" || r.priority === "High").length,
		totalCargoTons: Math.round(requests.reduce((acc, r) => acc + (r.cargo?.totalWeightKg || 0) / 1e3, 0)),
		totalValueUsd: requests.reduce((acc, r) => acc + (r.totalFreight || 0), 0),
		avgTurnaroundHours: total > 0 ? "1.4 hrs" : "0 hrs"
	};
}
/**
* Normalizes an identifier string for case-insensitive matching
*/
function normalizeId(id) {
	if (typeof id !== "string") return "";
	return id.trim().toLowerCase();
}
/**
* Check if a booking matches any identifier
*/
function matchesBooking(booking, identifiers) {
	const bId = normalizeId(booking.id);
	const bMov = normalizeId(booking.movement_number);
	const bRef = normalizeId(booking.booking_reference);
	const bReference = normalizeId(booking.reference);
	return identifiers.some((target) => target && (target === bId || target === bMov || target === bRef || target === bReference));
}
/**
* Check if a request matches any identifier
*/
function matchesRequest(request, identifiers) {
	const rId = normalizeId(request.id);
	const rMov = normalizeId(request.movementNumber);
	const rRef = normalizeId(request.reference);
	const rBkRef = normalizeId(request.bookingReference);
	return identifiers.some((target) => target && (target === rId || target === rMov || target === rRef || target === rBkRef));
}
/**
* Surgically update cache when a `bookings` table realtime event is received.
* Updates only the affected booking record in query cache without full refetches.
*/
function applyBookingRealtimeUpdate(queryClient, payload) {
	const { eventType, new: newRow, old: oldRow } = payload;
	const targetRow = newRow || oldRow || {};
	const targetIdentifiers = [
		normalizeId(targetRow.id),
		normalizeId(targetRow.movement_number),
		normalizeId(targetRow.booking_reference),
		normalizeId(targetRow.reference)
	].filter(Boolean);
	if (targetIdentifiers.length === 0) return;
	const isConfirmed = String(targetRow.confirmation_status || "").toUpperCase() === "CONFIRMED" || String(targetRow.status || "").toLowerCase().includes("confirm") || String(targetRow.status || "").toLowerCase() === "approved";
	queryClient.setQueriesData({ queryKey: ["dashboard-bookings"] }, (prev) => {
		if (!prev) return prev;
		if (eventType === "DELETE") return prev.filter((b) => !matchesBooking(b, targetIdentifiers));
		if (eventType === "INSERT") {
			if (prev.some((b) => matchesBooking(b, targetIdentifiers))) return prev;
			return [targetRow, ...prev];
		}
		if (eventType === "UPDATE") return prev.map((b) => {
			if (!matchesBooking(b, targetIdentifiers)) return b;
			const rawTargetStatus = targetRow.status ? String(targetRow.status) : b.status;
			const normalizedTargetLower = rawTargetStatus ? rawTargetStatus.toLowerCase() : "";
			const isAdvancedStage = normalizedTargetLower.includes("transit") || normalizedTargetLower.includes("loaded") || normalizedTargetLower.includes("stuff") || normalizedTargetLower.includes("seal") || normalizedTargetLower.includes("custom") || normalizedTargetLower.includes("cleared") || normalizedTargetLower.includes("shipped") || normalizedTargetLower.includes("dispatch") || normalizedTargetLower.includes("gate") || normalizedTargetLower.includes("arriv") || normalizedTargetLower.includes("deliver");
			const effectiveStatus = isAdvancedStage ? rawTargetStatus : isConfirmed ? "Booking Confirmed" : rawTargetStatus;
			const effectiveConfStatus = isConfirmed || isAdvancedStage ? "CONFIRMED" : targetRow.confirmation_status ? targetRow.confirmation_status : b.confirmation_status;
			return {
				...b,
				...targetRow,
				status: effectiveStatus,
				confirmation_status: effectiveConfStatus,
				confirmed_at: targetRow.confirmed_at ? String(targetRow.confirmed_at) : isConfirmed ? b.confirmed_at || (/* @__PURE__ */ new Date()).toISOString() : b.confirmed_at,
				confirmed_by: targetRow.confirmed_by ? String(targetRow.confirmed_by) : isConfirmed ? b.confirmed_by || "Forwarder" : b.confirmed_by,
				forwarder_name: targetRow.forwarder_name ? String(targetRow.forwarder_name) : b.forwarder_name,
				vessel_name: targetRow.vessel_name ? String(targetRow.vessel_name) : b.vessel_name,
				voyage_number: targetRow.voyage_number ? String(targetRow.voyage_number) : b.voyage_number,
				si_cutoff: targetRow.si_cutoff ? String(targetRow.si_cutoff) : b.si_cutoff,
				vgm_cutoff: targetRow.vgm_cutoff ? String(targetRow.vgm_cutoff) : b.vgm_cutoff,
				gate_cutoff: targetRow.gate_cutoff ? String(targetRow.gate_cutoff) : b.gate_cutoff,
				updated_at: targetRow.updated_at ? String(targetRow.updated_at) : (/* @__PURE__ */ new Date()).toISOString()
			};
		});
		return prev;
	});
	queryClient.setQueriesData({ queryKey: ["dashboard-requests"] }, (prev) => {
		if (!prev) return prev;
		if (eventType === "DELETE") return prev.filter((r) => !matchesRequest(r, targetIdentifiers));
		const mapped = mapBookingRecordToRequest(targetRow);
		if (eventType === "INSERT") {
			if (prev.some((r) => matchesRequest(r, targetIdentifiers))) return prev;
			return [mapped, ...prev];
		}
		if (eventType === "UPDATE") return prev.map((r) => {
			if (!matchesRequest(r, targetIdentifiers)) return r;
			let status = r.status;
			const rawStatus = (targetRow.status ? String(targetRow.status) : "").trim();
			const upper = rawStatus.toUpperCase();
			if (isConfirmed) status = "Booking Confirmed";
			else if (upper.includes("REVIEW") || upper.includes("REQUESTED")) status = "Pending Review";
			else if (upper.includes("ALLOCATION") || upper.includes("RATE")) status = "Rate Verification";
			else if (upper.includes("CANCEL") || upper.includes("REJECT")) status = "Cancelled";
			else if (rawStatus) status = rawStatus;
			const confDetails = targetRow.confirmation_details || {};
			const cutOffs = targetRow.cut_off_dates || confDetails.cut_off_dates;
			const effectiveSi = targetRow.si_cutoff || cutOffs?.siCutOffDate || confDetails.si_cutoff || r.siCutoff;
			const effectiveVgm = targetRow.vgm_cutoff || cutOffs?.vgmCutOffDate || confDetails.vgm_cutoff || r.vgmCutoff;
			const effectiveGate = targetRow.gate_cutoff || cutOffs?.gateCutOffDate || confDetails.gate_cutoff || r.gateCutoff;
			return {
				...r,
				status,
				confirmationStatus: isConfirmed ? "CONFIRMED" : targetRow.confirmation_status ? String(targetRow.confirmation_status) : r.confirmationStatus,
				forwarderName: targetRow.forwarder_name ? String(targetRow.forwarder_name) : targetRow.confirmed_by ? String(targetRow.confirmed_by) : r.forwarderName,
				confirmedBy: targetRow.confirmed_by ? String(targetRow.confirmed_by) : r.confirmedBy,
				confirmedAt: targetRow.confirmed_at ? String(targetRow.confirmed_at) : r.confirmedAt,
				preferredCarrier: targetRow.shipping_line_name ? String(targetRow.shipping_line_name) : r.preferredCarrier,
				vesselName: targetRow.vessel_name ? String(targetRow.vessel_name) : r.vesselName,
				voyageNumber: targetRow.voyage_number ? String(targetRow.voyage_number) : r.voyageNumber,
				ratePerContainer: typeof targetRow.rate_amount === "number" ? targetRow.rate_amount : r.ratePerContainer,
				totalFreight: typeof targetRow.total_freight === "number" ? targetRow.total_freight : r.totalFreight,
				siCutoff: effectiveSi,
				vgmCutoff: effectiveVgm,
				gateCutoff: effectiveGate,
				updatedAt: targetRow.updated_at ? String(targetRow.updated_at) : (/* @__PURE__ */ new Date()).toISOString()
			};
		});
		return prev;
	});
	queryClient.setQueriesData({ queryKey: ["booking-requests"] }, (prev) => {
		if (!prev) return prev;
		if (eventType === "DELETE") return prev.filter((r) => !matchesRequest(r, targetIdentifiers));
		const mapped = mapBookingRecordToRequest(targetRow);
		if (eventType === "INSERT") {
			if (prev.some((r) => matchesRequest(r, targetIdentifiers))) return prev;
			return [mapped, ...prev];
		}
		if (eventType === "UPDATE") return prev.map((r) => {
			if (!matchesRequest(r, targetIdentifiers)) return r;
			let status = r.status;
			const rawStatus = (targetRow.status ? String(targetRow.status) : "").trim();
			const upper = rawStatus.toUpperCase();
			if (isConfirmed) status = "Booking Confirmed";
			else if (upper.includes("REVIEW") || upper.includes("REQUESTED")) status = "Pending Review";
			else if (upper.includes("ALLOCATION") || upper.includes("RATE")) status = "Rate Verification";
			else if (upper.includes("CANCEL") || upper.includes("REJECT")) status = "Cancelled";
			else if (rawStatus) status = rawStatus;
			const confDetails = targetRow.confirmation_details || {};
			const cutOffs = targetRow.cut_off_dates || confDetails.cut_off_dates;
			const effectiveSi = targetRow.si_cutoff || cutOffs?.siCutOffDate || confDetails.si_cutoff || r.siCutoff;
			const effectiveVgm = targetRow.vgm_cutoff || cutOffs?.vgmCutOffDate || confDetails.vgm_cutoff || r.vgmCutoff;
			const effectiveGate = targetRow.gate_cutoff || cutOffs?.gateCutOffDate || confDetails.gate_cutoff || r.gateCutoff;
			return {
				...r,
				status,
				confirmationStatus: isConfirmed ? "CONFIRMED" : targetRow.confirmation_status ? String(targetRow.confirmation_status) : r.confirmationStatus,
				forwarderName: targetRow.forwarder_name ? String(targetRow.forwarder_name) : targetRow.confirmed_by ? String(targetRow.confirmed_by) : r.forwarderName,
				confirmedBy: targetRow.confirmed_by ? String(targetRow.confirmed_by) : r.confirmedBy,
				confirmedAt: targetRow.confirmed_at ? String(targetRow.confirmed_at) : r.confirmedAt,
				preferredCarrier: targetRow.shipping_line_name ? String(targetRow.shipping_line_name) : r.preferredCarrier,
				vesselName: targetRow.vessel_name ? String(targetRow.vessel_name) : r.vesselName,
				voyageNumber: targetRow.voyage_number ? String(targetRow.voyage_number) : r.voyageNumber,
				ratePerContainer: typeof targetRow.rate_amount === "number" ? targetRow.rate_amount : r.ratePerContainer,
				totalFreight: typeof targetRow.total_freight === "number" ? targetRow.total_freight : r.totalFreight,
				siCutoff: effectiveSi,
				vgmCutoff: effectiveVgm,
				gateCutoff: effectiveGate,
				updatedAt: targetRow.updated_at ? String(targetRow.updated_at) : (/* @__PURE__ */ new Date()).toISOString()
			};
		});
		return prev;
	});
	const rowConf = targetRow.confirmation_details || {};
	const rowCutOffs = targetRow.cut_off_dates || rowConf.cut_off_dates;
	const effectiveMovRef = String(targetRow.movement_number || targetRow.booking_reference || targetRow.reference || targetRow.id || "").trim();
	if (rowCutOffs && effectiveMovRef) try {
		saveCutOffsForMovement(effectiveMovRef, rowCutOffs, String(targetRow.id || ""));
	} catch (cutoffErr) {
		console.warn("[applyBookingRealtimeUpdate] Notice syncing cut-offs:", cutoffErr);
	}
	queryClient.invalidateQueries({ queryKey: ["dashboard-bookings"] });
	queryClient.invalidateQueries({ queryKey: ["dashboard-requests"] });
	queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
	queryClient.invalidateQueries({ queryKey: ["bookings"] });
	queryClient.invalidateQueries({ queryKey: ["movements"] });
	if (typeof window !== "undefined") {
		const detailPayload = {
			id: targetRow.id,
			bookingId: targetRow.id || targetRow.movement_number,
			movementNumber: targetRow.movement_number,
			bookingReference: targetRow.booking_reference,
			status: isConfirmed ? "Booking Confirmed" : targetRow.status,
			confirmationStatus: isConfirmed ? "CONFIRMED" : targetRow.confirmation_status || "PENDING",
			forwarderName: targetRow.forwarder_name || targetRow.confirmed_by,
			confirmedBy: targetRow.confirmed_by || targetRow.forwarder_name,
			confirmedAt: targetRow.confirmed_at || (/* @__PURE__ */ new Date()).toISOString(),
			vesselName: targetRow.vessel_name,
			voyageNumber: targetRow.voyage_number,
			booking: targetRow
		};
		window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: detailPayload }));
		window.dispatchEvent(new CustomEvent("supabase_realtime_bookings_change", { detail: detailPayload }));
		if (isConfirmed) window.dispatchEvent(new CustomEvent("nashmia_booking_confirmed", { detail: detailPayload }));
		else window.dispatchEvent(new CustomEvent("nashmia_booking_status_updated", { detail: detailPayload }));
	}
}
/**
* Surgically update cache when a `forwarder_requests` table realtime event is received.
*/
function applyForwarderRequestRealtimeUpdate(queryClient, payload) {
	const { new: newRow, old: oldRow } = payload;
	const targetRow = newRow || oldRow || {};
	const bookingId = normalizeId(targetRow.booking_id);
	if (bookingId) queryClient.invalidateQueries({ queryKey: ["forwarder-requests", bookingId] });
	queryClient.invalidateQueries({ queryKey: ["forwarder-requests"] });
	queryClient.invalidateQueries({ queryKey: ["all-forwarder-requests"] });
	queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nashmia_multi_forwarder_updated", { detail: {
		bookingId: targetRow.booking_id,
		movementNumber: targetRow.movement_number,
		requestId: targetRow.id || targetRow.request_id,
		status: targetRow.status,
		awardStatus: targetRow.award_status,
		timestamp: Date.now()
	} }));
}
/**
* Surgically update cache when a `quotations` table realtime event is received.
* Updates affected booking and forwarder requests without refetching the entire application.
*/
function applyQuotationRealtimeUpdate(queryClient, payload) {
	const { new: newRow, old: oldRow } = payload;
	const targetRow = newRow || oldRow || {};
	const bookingId = normalizeId(targetRow.booking_id);
	if (bookingId) {
		queryClient.invalidateQueries({ queryKey: ["forwarder-requests", bookingId] });
		queryClient.invalidateQueries({ queryKey: ["quotations", bookingId] });
	}
	queryClient.invalidateQueries({ queryKey: ["forwarder-requests"] });
	queryClient.invalidateQueries({ queryKey: ["all-forwarder-requests"] });
	queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
	queryClient.invalidateQueries({ queryKey: ["dashboard-metrics"] });
	if (typeof window !== "undefined") {
		window.dispatchEvent(new CustomEvent("nashmia_multi_forwarder_updated", { detail: {
			bookingId: targetRow.booking_id,
			movementNumber: targetRow.movement_number,
			quotationId: targetRow.id,
			forwarderId: targetRow.forwarder_id,
			rate: targetRow.rate,
			currency: targetRow.currency,
			timestamp: Date.now()
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_forwarder_offer_received", { detail: {
			bookingId: targetRow.booking_id,
			movementNumber: targetRow.movement_number,
			quotationId: targetRow.id,
			forwarderId: targetRow.forwarder_id,
			rate: targetRow.rate,
			currency: targetRow.currency,
			offer: targetRow
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_quotation_persisted", { detail: {
			quotationId: targetRow.id,
			bookingId: targetRow.booking_id,
			forwarderRequestId: targetRow.forwarder_request_id,
			rate: targetRow.rate
		} }));
	}
}
/**
* Backward-compatible stub for offer realtime events (synced with quotations)
*/
function applyOfferRealtimeUpdate(queryClient, payload) {
	applyQuotationRealtimeUpdate(queryClient, payload);
}
/**
* Surgically update cache when a `booking_events` table realtime event is received.
*/
function applyBookingEventRealtimeUpdate(queryClient, payload) {
	const { eventType, new: newRow } = payload;
	if (eventType !== "INSERT" || !newRow) return;
	const bookingId = normalizeId(newRow.booking_id);
	if (!bookingId) return;
	queryClient.setQueriesData({ queryKey: ["booking-events", bookingId] }, (prev) => {
		if (!prev) return [newRow];
		return [...prev, newRow];
	});
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nashmia_booking_event_added", { detail: {
		bookingId,
		event: newRow
	} }));
}
/**
* Surgically update cache when an `email_messages` table realtime event is received.
*/
function applyEmailMessageRealtimeUpdate(queryClient, payload) {
	const { new: newRow } = payload;
	queryClient.invalidateQueries({ queryKey: ["emails"] });
	queryClient.invalidateQueries({ queryKey: ["email-threads"] });
	queryClient.invalidateQueries({ queryKey: ["dashboard-metrics"] });
	queryClient.invalidateQueries({ queryKey: ["documents"] });
	if (typeof window !== "undefined") {
		window.dispatchEvent(new CustomEvent("nashmia_emails_updated", { detail: { payload: newRow } }));
		window.dispatchEvent(new CustomEvent("supabase_realtime_bookings_change", { detail: { payload: newRow } }));
	}
	if (!newRow) return;
	const m = newRow;
	const rawHeaders = m.raw_headers || {};
	const movNum = String(m.movement_number || rawHeaders.movement_number || "").trim();
	const bId = String(m.booking_id || rawHeaders.booking_id || "").trim();
	const fromEmail = String(m.sender_email || m.from || "").trim();
	const targetIdentifiers = [movNum, bId].filter(Boolean);
	if (targetIdentifiers.length === 0) return;
	const confStatus = String(rawHeaders.confirmation_status || "").toUpperCase();
	const respClass = String(rawHeaders.response_classification || "").toUpperCase();
	if (confStatus === "CONFIRMED" || respClass === "CONFIRMED") {
		const forwarderName = String(rawHeaders.forwarder_name || m.sender_name || fromEmail.split("@")[0] || "Forwarder");
		queryClient.setQueriesData({ queryKey: ["booking-requests"] }, (prev) => {
			if (!prev) return prev;
			return prev.map((r) => {
				if (!matchesRequest(r, targetIdentifiers)) return r;
				return {
					...r,
					status: "Booking Confirmed",
					confirmationStatus: "CONFIRMED",
					forwarderName,
					confirmedBy: forwarderName,
					confirmedAt: (/* @__PURE__ */ new Date()).toISOString(),
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				};
			});
		});
		queryClient.setQueriesData({ queryKey: ["dashboard-bookings"] }, (prev) => {
			if (!prev) return prev;
			return prev.map((b) => {
				if (!matchesBooking(b, targetIdentifiers)) return b;
				return {
					...b,
					status: "Booking Confirmed",
					confirmation_status: "CONFIRMED",
					forwarder_name: forwarderName,
					confirmed_by: forwarderName,
					confirmed_at: (/* @__PURE__ */ new Date()).toISOString(),
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				};
			});
		});
		if (typeof window !== "undefined") {
			const detailPayload = {
				bookingId: movNum,
				movementNumber: movNum,
				bookingReference: movNum,
				status: "Booking Confirmed",
				confirmationStatus: "CONFIRMED",
				forwarderName,
				confirmedBy: forwarderName
			};
			window.dispatchEvent(new CustomEvent("nashmia_booking_confirmed", { detail: detailPayload }));
			window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: detailPayload }));
		}
	}
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nashmia_email_matched", { detail: { payload: newRow } }));
}
/**
* Surgically update cache when a `notifications` table realtime event is received.
*/
function applyNotificationRealtimeUpdate(_queryClient, payload) {
	if (typeof window === "undefined") return;
	const { eventType, new: newRow, old: oldRow } = payload;
	if (eventType === "INSERT" && newRow) window.dispatchEvent(new CustomEvent("nashmia_notification_inserted", { detail: newRow }));
	else if (eventType === "UPDATE" && newRow) window.dispatchEvent(new CustomEvent("nashmia_notification_updated", { detail: newRow }));
	else if (eventType === "DELETE" && oldRow) window.dispatchEvent(new CustomEvent("nashmia_notification_deleted", { detail: oldRow }));
}
var channelPool = /* @__PURE__ */ new Map();
var CHANNEL_TEARDOWN_GRACE_MS = 2500;
var MAX_RECONNECT_DELAY_MS = 1e4;
var recentEventSignatures = /* @__PURE__ */ new Map();
var DEDUP_WINDOW_MS = 8e3;
function cleanupOldEventSignatures() {
	const now = Date.now();
	for (const [sig, ts] of recentEventSignatures.entries()) if (now - ts > DEDUP_WINDOW_MS) recentEventSignatures.delete(sig);
}
var VALID_TABLES = /* @__PURE__ */ new Set([
	"buyers",
	"suppliers",
	"forwarders",
	"shipping_lines",
	"rate_cards",
	"bookings",
	"booking_containers",
	"booking_events",
	"notifications",
	"email_messages",
	"email_threads",
	"forwarder_offers",
	"booking_forwarders",
	"forwarder_requests",
	"quotations",
	"quotation_versions",
	"requests"
]);
/**
* Maps incoming table names or legacy aliases to the canonical database table
*/
function resolveCanonicalTable(table) {
	if (table === "requests") return "bookings";
	if (table === "booking_forwarders") return "forwarder_offers";
	if (table === "email_confirmations") return "email_messages";
	return table;
}
/**
* Hook to subscribe to PostgreSQL table changes in Supabase in real-time.
* Multiplexes subscriptions into a single WebSocket channel per table resource.
* Automatically synchronizes TanStack Query cache without triggering expensive
* full-database refetches or duplicate WebSocket connections.
*/
function useSupabaseRealtime(table, onChange, enabled = true, filterOrOptions) {
	const queryClient = useQueryClient();
	const onChangeRef = (0, import_react.useRef)(onChange);
	onChangeRef.current = onChange;
	const [connectionStatus, setConnectionStatus] = (0, import_react.useState)("CONNECTING");
	const filter = typeof filterOrOptions === "string" ? filterOrOptions : filterOrOptions?.filter;
	const organizationId = typeof filterOrOptions === "object" ? filterOrOptions?.organizationId : null;
	(0, import_react.useEffect)(() => {
		if (!isSupabaseConfigured || !enabled) return;
		const targetTable = resolveCanonicalTable(table);
		if (!VALID_TABLES.has(targetTable) && !VALID_TABLES.has(table)) {
			console.warn(`[useSupabaseRealtime] Table "${targetTable}" is not in valid realtime tables.`);
			return;
		}
		const channelKey = `${targetTable}:${filter || "*"}`;
		const listener = (payload) => {
			if (organizationId) {
				const row = payload.new || payload.old || {};
				if (row.organization_id && String(row.organization_id) !== String(organizationId)) return;
			}
			const row = payload.new || payload.old || {};
			const recordId = String(row.id || row.booking_id || row.movement_number || "");
			const recordTs = String(payload.commit_timestamp || row.updated_at || row.created_at || "");
			const eventSig = `${targetTable}:${payload.eventType}:${recordId}:${recordTs}`;
			cleanupOldEventSignatures();
			if (recentEventSignatures.has(eventSig)) return;
			recentEventSignatures.set(eventSig, Date.now());
			try {
				onChangeRef.current?.(payload);
			} catch (err) {
				console.warn(`[useSupabaseRealtime] Error in listener for ${targetTable}:`, err);
			}
		};
		let entry = channelPool.get(channelKey);
		const setupSubscription = (currentEntry) => {
			const channel = currentEntry.channel;
			channel.on("postgres_changes", {
				event: "*",
				schema: "public",
				table: targetTable,
				filter
			}, (payload) => {
				const targetRow = payload.new || payload.old || {};
				if (organizationId && targetRow.organization_id && String(targetRow.organization_id) !== String(organizationId)) return;
				try {
					if (targetTable === "bookings") applyBookingRealtimeUpdate(queryClient, payload);
					else if (targetTable === "forwarder_requests") applyForwarderRequestRealtimeUpdate(queryClient, payload);
					else if (targetTable === "quotations" || targetTable === "quotation_versions") applyQuotationRealtimeUpdate(queryClient, payload);
					else if (targetTable === "forwarder_offers" || targetTable === "booking_forwarders") applyOfferRealtimeUpdate(queryClient, payload);
					else if (targetTable === "booking_events") applyBookingEventRealtimeUpdate(queryClient, payload);
					else if (targetTable === "email_messages") applyEmailMessageRealtimeUpdate(queryClient, payload);
					else if (targetTable === "notifications") applyNotificationRealtimeUpdate(queryClient, payload);
				} catch (syncErr) {
					console.warn(`[useSupabaseRealtime] Cache sync notice on ${targetTable}:`, syncErr);
				}
				currentEntry.listeners.forEach((fn) => {
					try {
						fn(payload);
					} catch (e) {
						console.warn(`[useSupabaseRealtime] Dispatch error on ${targetTable}:`, e);
					}
				});
			});
			channel.subscribe((status, err) => {
				currentEntry.state = status;
				setConnectionStatus(status);
				if (status === "SUBSCRIBED") currentEntry.reconnectAttempts = 0;
				else if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
					console.warn(`[useSupabaseRealtime] Channel notice on ${channelKey} (${status}):`, err?.message);
					if (!currentEntry.reconnectTimer) {
						currentEntry.reconnectAttempts += 1;
						const delay = Math.min(1e3 * Math.pow(1.5, currentEntry.reconnectAttempts), MAX_RECONNECT_DELAY_MS);
						currentEntry.reconnectTimer = setTimeout(() => {
							currentEntry.reconnectTimer = null;
							if (currentEntry.listeners.size > 0) try {
								channel.subscribe();
							} catch (reconnectErr) {
								console.warn("[useSupabaseRealtime] Reconnect notice:", reconnectErr);
							}
						}, delay);
					}
				}
			});
		};
		if (entry) {
			if (entry.teardownTimer) {
				clearTimeout(entry.teardownTimer);
				entry.teardownTimer = null;
			}
			setConnectionStatus(entry.state);
		} else {
			const channelName = `rt_${targetTable}_${(filter || "all").replace(/[^a-zA-Z0-9_-]/g, "_")}`;
			entry = {
				channel: supabase.channel(channelName),
				listeners: /* @__PURE__ */ new Set(),
				teardownTimer: null,
				reconnectTimer: null,
				reconnectAttempts: 0,
				state: "CONNECTING",
				targetTable,
				filter,
				channelName
			};
			channelPool.set(channelKey, entry);
			setupSubscription(entry);
		}
		entry.listeners.add(listener);
		const handleOnline = () => {
			const activeEntry = channelPool.get(channelKey);
			if (activeEntry && activeEntry.state !== "SUBSCRIBED") try {
				activeEntry.channel.subscribe();
			} catch {}
		};
		window.addEventListener("online", handleOnline);
		return () => {
			window.removeEventListener("online", handleOnline);
			const currentEntry = channelPool.get(channelKey);
			if (!currentEntry) return;
			currentEntry.listeners.delete(listener);
			if (currentEntry.listeners.size === 0) {
				if (currentEntry.teardownTimer) clearTimeout(currentEntry.teardownTimer);
				if (currentEntry.reconnectTimer) {
					clearTimeout(currentEntry.reconnectTimer);
					currentEntry.reconnectTimer = null;
				}
				currentEntry.teardownTimer = setTimeout(() => {
					const freshCheck = channelPool.get(channelKey);
					if (freshCheck && freshCheck.listeners.size === 0) {
						supabase.removeChannel(freshCheck.channel);
						channelPool.delete(channelKey);
					}
				}, CHANNEL_TEARDOWN_GRACE_MS);
			}
		};
	}, [
		table,
		enabled,
		filter,
		organizationId,
		queryClient
	]);
	return { connectionStatus };
}
var _jsxFileName$19 = "/app/applet/src/components/ui/dropdown-menu.tsx";
var DropdownMenu = DropdownMenu$1;
var DropdownMenuTrigger = DropdownMenuTrigger$1;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSubTrigger$1, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "ml-auto" }, void 0, false, {
		fileName: _jsxFileName$19,
		lineNumber: 37,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$19,
	lineNumber: 27,
	columnNumber: 3
}, void 0));
DropdownMenuSubTrigger.displayName = DropdownMenuSubTrigger$1.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSubContent$1, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$19,
	lineNumber: 46,
	columnNumber: 3
}, void 0));
DropdownMenuSubContent.displayName = DropdownMenuSubContent$1.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent$1, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md transition-all will-change-[transform,opacity] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)]", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1.5 data-[side=left]:slide-in-from-right-1.5 data-[side=right]:slide-in-from-left-1.5 data-[side=top]:slide-in-from-bottom-1.5 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$19,
	lineNumber: 62,
	columnNumber: 5
}, void 0) }, void 0, false, {
	fileName: _jsxFileName$19,
	lineNumber: 61,
	columnNumber: 3
}, void 0));
DropdownMenuContent.displayName = DropdownMenuContent$1.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$19,
	lineNumber: 82,
	columnNumber: 3
}, void 0));
DropdownMenuItem.displayName = DropdownMenuItem$1.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuCheckboxItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$19,
			lineNumber: 108,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$19,
			lineNumber: 107,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$19,
		lineNumber: 106,
		columnNumber: 5
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$19,
	lineNumber: 98,
	columnNumber: 3
}, void 0));
DropdownMenuCheckboxItem.displayName = DropdownMenuCheckboxItem$1.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuRadioItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
			fileName: _jsxFileName$19,
			lineNumber: 130,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$19,
			lineNumber: 129,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$19,
		lineNumber: 128,
		columnNumber: 5
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$19,
	lineNumber: 120,
	columnNumber: 3
}, void 0));
DropdownMenuRadioItem.displayName = DropdownMenuRadioItem$1.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$19,
	lineNumber: 144,
	columnNumber: 3
}, void 0));
DropdownMenuLabel.displayName = DropdownMenuLabel$1.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$19,
	lineNumber: 156,
	columnNumber: 3
}, void 0));
DropdownMenuSeparator.displayName = DropdownMenuSeparator$1.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$19,
		lineNumber: 166,
		columnNumber: 5
	}, void 0);
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var _jsxFileName$18 = "/app/applet/src/components/ui/dialog.tsx";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-xs transition-all duration-200 ease-out", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$18,
	lineNumber: 22,
	columnNumber: 3
}, void 0));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, hideDragHandle = false, hideCloseButton = false, onlyHandleDismiss = false, ...props }, ref) => {
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
	const { elementRef, handleRef } = useVerticalSwipeGesture({
		onDismiss: () => {
			closeBtnRef.current?.click();
		},
		enabled: isMobile,
		onlyHandle: onlyHandleDismiss
	});
	const setCombinedRef = import_react.useCallback((node) => {
		elementRef.current = node;
		if (typeof ref === "function") ref(node);
		else if (ref) ref.current = node;
	}, [ref, elementRef]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {}, void 0, false, {
		fileName: _jsxFileName$18,
		lineNumber: 91,
		columnNumber: 9
	}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent$1, {
		ref: setCombinedRef,
		className: cn("fixed z-50 grid w-full gap-4 bg-background shadow-2xl transition-all box-border outline-none focus:outline-none focus-visible:outline-none antialiased [backface-visibility:hidden]", "inset-x-0 bottom-0 top-auto max-h-[92vh] overflow-y-auto overflow-x-hidden translate-x-0 translate-y-0 rounded-t-[28px] rounded-b-none border-t border-x-0 border-b-0 p-5 pb-[max(2rem,env(safe-area-inset-bottom))]", "duration-240 ease-[cubic-bezier(0.16,1,0.3,1)]", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom", "sm:inset-x-auto sm:bottom-auto sm:left-[50%] sm:top-[50%] sm:max-w-lg sm:max-h-[92vh] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-[28px] sm:border sm:p-6 sm:pb-6", "sm:duration-150 sm:ease-out", "sm:data-[state=open]:zoom-in-95 sm:data-[state=closed]:zoom-out-95 sm:data-[state=open]:slide-in-from-bottom-0 sm:data-[state=closed]:slide-out-to-bottom-0", className, "max-sm:!inset-x-0 max-sm:!bottom-0 max-sm:!top-auto max-sm:!w-full max-sm:!max-w-full max-sm:!translate-x-0 max-sm:!translate-y-0 max-sm:!rounded-t-[28px] max-sm:!rounded-b-none max-sm:!border-t max-sm:!border-x-0 max-sm:!border-b-0 max-sm:!max-h-[92vh]"),
		...props,
		children: [
			!hideDragHandle && /* @__PURE__ */ (void 0)("div", {
				ref: handleRef,
				"data-swipe-handle": "true",
				className: "group mx-auto -mt-2 mb-1 flex h-7 w-full max-w-[180px] cursor-grab touch-none items-center justify-center sm:hidden active:cursor-grabbing select-none shrink-0",
				"aria-label": "Drag down to dismiss",
				children: /* @__PURE__ */ (void 0)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300 transition-all duration-150 group-hover:bg-slate-400 group-active:scale-x-110 group-active:bg-slate-500" }, void 0, false, {
					fileName: _jsxFileName$18,
					lineNumber: 119,
					columnNumber: 15
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$18,
				lineNumber: 113,
				columnNumber: 13
			}, void 0),
			children,
			!hideCloseButton && /* @__PURE__ */ (void 0)(DialogClose, {
				ref: closeBtnRef,
				className: "absolute right-4 top-4 rounded-full p-1.5 opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-30",
				children: [/* @__PURE__ */ (void 0)(X, { className: "h-4 w-4" }, void 0, false, {
					fileName: _jsxFileName$18,
					lineNumber: 128,
					columnNumber: 15
				}, void 0), /* @__PURE__ */ (void 0)("span", {
					className: "sr-only",
					children: "Close"
				}, void 0, false, {
					fileName: _jsxFileName$18,
					lineNumber: 129,
					columnNumber: 15
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$18,
				lineNumber: 124,
				columnNumber: 13
			}, void 0)
		]
	}, void 0, true, {
		fileName: _jsxFileName$18,
		lineNumber: 92,
		columnNumber: 9
	}, void 0)] }, void 0, true, {
		fileName: _jsxFileName$18,
		lineNumber: 90,
		columnNumber: 7
	}, void 0);
});
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$18,
	lineNumber: 140,
	columnNumber: 3
}, void 0);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$18,
	lineNumber: 145,
	columnNumber: 3
}, void 0);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$18,
	lineNumber: 156,
	columnNumber: 3
}, void 0));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$18,
	lineNumber: 168,
	columnNumber: 3
}, void 0));
DialogDescription.displayName = DialogDescription$1.displayName;
var _jsxFileName$17 = "/app/applet/src/components/ui/sonner.tsx";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster, {
		className: "toaster group font-sans",
		position: "top-right",
		toastOptions: {
			unstyled: true,
			classNames: {
				toast: "group flex items-center gap-3.5 rounded-full bg-white/95 py-2.5 pl-3.5 pr-7 border border-slate-100/90 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15),0_2px_8px_-2px_rgba(0,0,0,0.06)] backdrop-blur-md text-slate-800 transition-all duration-300 ease-out select-none min-w-[280px] max-w-[420px]",
				title: "text-[14px] font-bold tracking-tight text-slate-900 leading-tight",
				description: "text-[12.5px] font-normal text-slate-500 leading-tight mt-0.5",
				actionButton: "rounded-full bg-[#0FA3B1] px-3 py-1 text-xs font-semibold text-white",
				cancelButton: "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
			}
		},
		...props
	}, void 0, false, {
		fileName: _jsxFileName$17,
		lineNumber: 7,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$16 = "/app/applet/src/components/auth/AuthGuard.tsx";
function AuthGuard({ children }) {
	const { user, session, loading } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const isAuthRoute = location.pathname === "/login" || location.pathname === "/signup";
	const isAuthenticated = Boolean(user || session);
	(0, import_react.useEffect)(() => {
		if (loading) return;
		if (!isAuthenticated && !isAuthRoute) {
			const currentPath = location.pathname + (location.searchStr ? location.searchStr : "");
			const redirectTarget = currentPath && currentPath !== "/" ? currentPath : void 0;
			navigate({
				to: "/login",
				search: redirectTarget ? { redirect: redirectTarget } : void 0,
				replace: true
			});
		} else if (isAuthenticated && isAuthRoute) {
			let targetUrl = "/";
			try {
				if (typeof window !== "undefined") {
					const redirectParam = new URLSearchParams(window.location.search).get("redirect");
					if (redirectParam && redirectParam.startsWith("/") && !redirectParam.startsWith("/login") && !redirectParam.startsWith("/signup")) targetUrl = redirectParam;
				}
			} catch {
				targetUrl = "/";
			}
			navigate({
				to: targetUrl,
				replace: true
			});
		}
	}, [
		isAuthenticated,
		isAuthRoute,
		loading,
		location.pathname,
		location.searchStr,
		navigate
	]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen w-full items-center justify-center bg-white",
		"aria-busy": "true",
		"aria-label": "Checking authentication...",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col items-center gap-3",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-8 rounded-full border-2 border-[#6A80A9]/25 border-t-[#6A80A9] animate-spin" }, void 0, false, {
				fileName: _jsxFileName$16,
				lineNumber: 68,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$16,
			lineNumber: 67,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$16,
		lineNumber: 62,
		columnNumber: 7
	}, this);
	if (!isAuthenticated && !isAuthRoute) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen w-full items-center justify-center bg-white",
		"aria-busy": "true",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col items-center gap-3",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-8 rounded-full border-2 border-[#6A80A9]/25 border-t-[#6A80A9] animate-spin" }, void 0, false, {
				fileName: _jsxFileName$16,
				lineNumber: 82,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$16,
			lineNumber: 81,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$16,
		lineNumber: 77,
		columnNumber: 7
	}, this);
	if (isAuthenticated && isAuthRoute) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen w-full items-center justify-center bg-white",
		"aria-busy": "true",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col items-center gap-3",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-8 rounded-full border-2 border-[#6A80A9]/25 border-t-[#6A80A9] animate-spin" }, void 0, false, {
				fileName: _jsxFileName$16,
				lineNumber: 96,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$16,
			lineNumber: 95,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$16,
		lineNumber: 91,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$16,
		lineNumber: 103,
		columnNumber: 10
	}, this);
}
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_LOG_ENTRIES = 100;
var logHistory = [];
var logSubscribers = /* @__PURE__ */ new Set();
function createLogId() {
	return `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
}
function normalizeError(error) {
	if (!error) return void 0;
	if (error instanceof Error) return {
		name: error.name,
		message: error.message,
		stack: error.stack
	};
	if (typeof error === "string") return {
		name: "Error",
		message: error
	};
	return {
		name: "UnknownError",
		message: String(error)
	};
}
/**
* Centralized logging and error tracking service.
* Gracefully records errors, warnings, and informational diagnostics with full context.
*/
var ErrorLoggingService = class {
	initialized = false;
	init() {
		if (this.initialized || typeof window === "undefined") return;
		this.initialized = true;
		window.addEventListener("error", (event) => {
			this.error("Uncaught global window error", event.error || event.message, {
				source: "window.onerror",
				filename: event.filename,
				lineno: event.lineno,
				colno: event.colno
			});
		});
		window.addEventListener("unhandledrejection", (event) => {
			this.error("Unhandled promise rejection", event.reason, { source: "window.unhandledrejection" });
		});
	}
	addEntry(level, message, error, context, componentStack) {
		const entry = {
			id: createLogId(),
			timestamp: (/* @__PURE__ */ new Date()).toISOString(),
			level,
			message,
			error: normalizeError(error),
			context: {
				...context,
				userAgent: typeof navigator !== "undefined" ? navigator.userAgent : void 0
			},
			componentStack,
			url: typeof window !== "undefined" ? window.location.href : ""
		};
		logHistory.push(entry);
		if (logHistory.length > MAX_LOG_ENTRIES) logHistory.shift();
		logSubscribers.forEach((subscriber) => {
			try {
				subscriber(entry);
			} catch (err) {
				console.warn("[ErrorLoggingService] Subscriber error:", err);
			}
		});
		return entry;
	}
	error(message, error, context, componentStack) {
		const entry = this.addEntry("error", message, error, context, componentStack);
		console.error(`[Nashmia:Error] ${message}`, error, context);
		if (error) reportLovableError(error, {
			logMessage: message,
			componentStack,
			...context
		});
		return entry;
	}
	warn(message, context) {
		const entry = this.addEntry("warn", message, void 0, context);
		console.warn(`[Nashmia:Warn] ${message}`, context);
		return entry;
	}
	info(message, context) {
		return this.addEntry("info", message, void 0, context);
	}
	debug(message, context) {
		return this.addEntry("debug", message, void 0, context);
	}
	getHistory() {
		return [...logHistory];
	}
	clearHistory() {
		logHistory.length = 0;
	}
	subscribe(callback) {
		logSubscribers.add(callback);
		return () => {
			logSubscribers.delete(callback);
		};
	}
};
var logger = new ErrorLoggingService();
if (typeof window !== "undefined") logger.init();
var _jsxFileName$15 = "/app/applet/src/components/common/ErrorBoundary.tsx";
/**
* Robust React Error Boundary that isolates component failures,
* logs diagnostics via the centralized logging service, and renders
* a graceful recovery UI without crashing the rest of the application.
*/
var ErrorBoundary = class extends import_react.Component {
	state = {
		hasError: false,
		error: null
	};
	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			error
		};
	}
	componentDidCatch(error, errorInfo) {
		logger.error(`Unhandled React component error in ${this.props.moduleName || "AnonymousComponent"}`, error, { moduleName: this.props.moduleName }, errorInfo.componentStack || void 0);
	}
	componentDidUpdate(prevProps) {
		if (!this.state.hasError) return;
		if (this.props.resetKeys && prevProps.resetKeys) {
			if (this.props.resetKeys.some((key, index) => key !== prevProps.resetKeys?.[index])) this.resetErrorBoundary();
		}
	}
	resetErrorBoundary = () => {
		this.props.onReset?.();
		this.setState({
			hasError: false,
			error: null
		});
	};
	render() {
		const { hasError, error } = this.state;
		const { children, fallback, title, description, moduleName, compact } = this.props;
		if (!hasError) return children;
		if (typeof fallback === "function" && error) return fallback(error, this.resetErrorBoundary);
		if (fallback) return fallback;
		if (compact) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			role: "alert",
			className: "flex items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-900",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "size-4 shrink-0 text-amber-600" }, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 89,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "font-medium",
					children: title || `Unable to load ${moduleName || "section"}`
				}, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 90,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$15,
				lineNumber: 88,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: this.resetErrorBoundary,
				className: "inline-flex items-center gap-1 rounded-md border border-amber-300 bg-white px-2 py-1 font-semibold text-amber-800 shadow-2xs hover:bg-amber-50",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "size-3" }, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 99,
					columnNumber: 13
				}, this), "Retry"]
			}, void 0, true, {
				fileName: _jsxFileName$15,
				lineNumber: 94,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$15,
			lineNumber: 84,
			columnNumber: 9
		}, this);
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			role: "alert",
			className: "my-4 flex flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white/95 p-6 text-center shadow-xs sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid size-12 place-items-center rounded-xl border border-amber-200 bg-amber-50 text-amber-600 shadow-2xs",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "size-6" }, void 0, false, {
						fileName: _jsxFileName$15,
						lineNumber: 112,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 111,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "mt-4 text-base font-semibold text-slate-900",
					children: title || (moduleName ? `Error loading ${moduleName}` : "Component temporarily unavailable")
				}, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 115,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1.5 max-w-md text-sm text-slate-500",
					children: description || "An unexpected error occurred while rendering this component. The rest of the dashboard remains operational."
				}, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 120,
					columnNumber: 9
				}, this),
				error?.message && /* @__PURE__ */ (void 0)("div", {
					className: "mt-3 max-w-lg rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-left text-xs font-mono text-slate-600",
					children: error.message
				}, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 126,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-5 flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: this.resetErrorBoundary,
						className: "inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition-colors hover:bg-slate-50",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$15,
							lineNumber: 137,
							columnNumber: 13
						}, this), "Retry Component"]
					}, void 0, true, {
						fileName: _jsxFileName$15,
						lineNumber: 132,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 131,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$15,
			lineNumber: 107,
			columnNumber: 7
		}, this);
	}
};
var queryKeys = {
	bookings: (userId) => ["dashboard-bookings", userId || "all"],
	bookingDetail: (id, userId) => [
		"dashboard-bookings",
		"detail",
		id,
		userId || "all"
	],
	requests: (userId) => ["dashboard-requests", userId || "all"],
	buyers: (userId) => [
		"entities",
		"buyers",
		userId || "all"
	],
	suppliers: (userId) => [
		"entities",
		"suppliers",
		userId || "all"
	],
	forwarders: (userId) => [
		"entities",
		"forwarders",
		userId || "all"
	],
	shippingLines: (userId) => [
		"entities",
		"shipping-lines",
		userId || "all"
	],
	rateCards: (userId) => [
		"entities",
		"rate-cards",
		userId || "all"
	],
	emails: (userId) => ["emails", userId || "all"],
	documents: (userId) => ["documents", userId || "all"],
	metrics: (userId) => ["dashboard-metrics", userId || "all"]
};
/**
* Robust TanStack Query hook to fetch real bookings from Supabase with proper loading states.
*/
function useRealBookings(userId, options) {
	return useQuery({
		queryKey: queryKeys.bookings(userId),
		queryFn: async () => {
			return fetchBookingsFromSupabase(userId);
		},
		staleTime: 0,
		gcTime: 6e5,
		enabled: options?.enabled ?? true,
		refetchInterval: 3e3,
		refetchOnWindowFocus: true,
		refetchOnReconnect: "always"
	});
}
/**
* Fetch a single booking by ID or Movement Number with full container & event joins.
*/
function useRealBookingDetail(id, userId, options) {
	return useQuery({
		queryKey: queryKeys.bookingDetail(id, userId),
		queryFn: async () => {
			if (!id) return null;
			return fetchBookingByIdFromSupabase(id);
		},
		enabled: Boolean(id) && (options?.enabled ?? true),
		staleTime: 0,
		refetchInterval: 3e3
	});
}
/**
* Robust TanStack Query hook for live Supabase Forwarders directory.
*/
function useRealForwarders(userId, options) {
	return useQuery({
		queryKey: queryKeys.forwarders(userId),
		queryFn: async () => {
			return fetchForwardersFromSupabase(userId);
		},
		staleTime: 5e3,
		gcTime: 18e5,
		enabled: options?.enabled ?? true,
		refetchInterval: 5e3,
		refetchOnWindowFocus: true
	});
}
/**
* Robust TanStack Query hook for live Rate Cards.
*/
function useRealRateCards(userId, options) {
	return useQuery({
		queryKey: queryKeys.rateCards(userId),
		queryFn: async () => {
			return fetchRateCardsFromSupabase(userId);
		},
		staleTime: 5e3,
		gcTime: 36e5,
		enabled: options?.enabled ?? true,
		refetchInterval: 8e3
	});
}
var _jsxFileName$14 = "/app/applet/src/components/providers/GlobalRealtimeProvider.tsx";
/**
* Global Realtime Provider
* Subscribes to all Supabase PostgreSQL tables over WebSocket channels,
* ensuring any change (INSERT, UPDATE, DELETE) instantly syncs across all pages
* without requiring the user to manually refresh their browser.
*/
function GlobalRealtimeProvider({ children }) {
	const queryClient = useQueryClient();
	const handleRealtimeChange = (0, import_react.useCallback)((tableName) => {
		console.info(`[Global Realtime] Postgres change on "${tableName}", invalidating query caches...`);
		if (tableName === "bookings" || tableName === "booking_containers" || tableName === "booking_events") {
			queryClient.invalidateQueries({ queryKey: ["dashboard-bookings"] });
			queryClient.invalidateQueries({ queryKey: ["dashboard-requests"] });
			queryClient.invalidateQueries({ queryKey: ["dashboard-metrics"] });
			queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
		}
		if (tableName === "buyers") queryClient.invalidateQueries({ queryKey: queryKeys.buyers() });
		if (tableName === "suppliers") queryClient.invalidateQueries({ queryKey: queryKeys.suppliers() });
		if (tableName === "forwarders" || tableName === "rate_cards") {
			queryClient.invalidateQueries({ queryKey: queryKeys.forwarders() });
			queryClient.invalidateQueries({ queryKey: queryKeys.rateCards() });
		}
		if (tableName === "shipping_lines") queryClient.invalidateQueries({ queryKey: queryKeys.shippingLines() });
		if (tableName === "email_messages" || tableName === "email_threads") queryClient.invalidateQueries({ queryKey: queryKeys.emails() });
		if (tableName === "forwarder_requests" || tableName === "quotations" || tableName === "quotation_versions") {
			queryClient.invalidateQueries({ queryKey: ["all-forwarder-requests"] });
			queryClient.invalidateQueries({ queryKey: ["dashboard-requests"] });
			queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
			queryClient.invalidateQueries({ queryKey: queryKeys.requests() });
		}
		if (tableName === "notifications") queryClient.invalidateQueries({ queryKey: ["notifications"] });
	}, [queryClient]);
	const onBookingsChange = (0, import_react.useCallback)(() => handleRealtimeChange("bookings"), [handleRealtimeChange]);
	const onContainersChange = (0, import_react.useCallback)(() => handleRealtimeChange("booking_containers"), [handleRealtimeChange]);
	const onEventsChange = (0, import_react.useCallback)(() => handleRealtimeChange("booking_events"), [handleRealtimeChange]);
	const onBuyersChange = (0, import_react.useCallback)(() => handleRealtimeChange("buyers"), [handleRealtimeChange]);
	const onSuppliersChange = (0, import_react.useCallback)(() => handleRealtimeChange("suppliers"), [handleRealtimeChange]);
	const onForwardersChange = (0, import_react.useCallback)(() => handleRealtimeChange("forwarders"), [handleRealtimeChange]);
	const onShippingLinesChange = (0, import_react.useCallback)(() => handleRealtimeChange("shipping_lines"), [handleRealtimeChange]);
	const onRateCardsChange = (0, import_react.useCallback)(() => handleRealtimeChange("rate_cards"), [handleRealtimeChange]);
	const onEmailMessagesChange = (0, import_react.useCallback)(() => handleRealtimeChange("email_messages"), [handleRealtimeChange]);
	const onNotificationsChange = (0, import_react.useCallback)(() => handleRealtimeChange("notifications"), [handleRealtimeChange]);
	const onForwarderRequestsChange = (0, import_react.useCallback)(() => handleRealtimeChange("forwarder_requests"), [handleRealtimeChange]);
	const onQuotationsChange = (0, import_react.useCallback)(() => handleRealtimeChange("quotations"), [handleRealtimeChange]);
	useSupabaseRealtime("bookings", onBookingsChange, isSupabaseConfigured);
	useSupabaseRealtime("booking_containers", onContainersChange, isSupabaseConfigured);
	useSupabaseRealtime("booking_events", onEventsChange, isSupabaseConfigured);
	useSupabaseRealtime("buyers", onBuyersChange, isSupabaseConfigured);
	useSupabaseRealtime("suppliers", onSuppliersChange, isSupabaseConfigured);
	useSupabaseRealtime("forwarders", onForwardersChange, isSupabaseConfigured);
	useSupabaseRealtime("shipping_lines", onShippingLinesChange, isSupabaseConfigured);
	useSupabaseRealtime("rate_cards", onRateCardsChange, isSupabaseConfigured);
	useSupabaseRealtime("email_messages", onEmailMessagesChange, isSupabaseConfigured);
	useSupabaseRealtime("notifications", onNotificationsChange, isSupabaseConfigured);
	useSupabaseRealtime("forwarder_requests", onForwarderRequestsChange, isSupabaseConfigured);
	useSupabaseRealtime("quotations", onQuotationsChange, isSupabaseConfigured);
	(0, import_react.useEffect)(() => {
		let debounceTimer = null;
		const handleWindowEvent = () => {
			if (debounceTimer) clearTimeout(debounceTimer);
			debounceTimer = setTimeout(() => {
				queryClient.invalidateQueries({ queryKey: ["dashboard-bookings"] });
				queryClient.invalidateQueries({ queryKey: ["dashboard-metrics"] });
				queryClient.invalidateQueries({ queryKey: ["dashboard-requests"] });
				queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
			}, 300);
		};
		window.addEventListener("nashmia_bookings_updated", handleWindowEvent);
		window.addEventListener("nashmia_booking_confirmed", handleWindowEvent);
		window.addEventListener("supabase_realtime_bookings_change", handleWindowEvent);
		window.addEventListener("storage", handleWindowEvent);
		return () => {
			if (debounceTimer) clearTimeout(debounceTimer);
			window.removeEventListener("nashmia_bookings_updated", handleWindowEvent);
			window.removeEventListener("nashmia_booking_confirmed", handleWindowEvent);
			window.removeEventListener("supabase_realtime_bookings_change", handleWindowEvent);
			window.removeEventListener("storage", handleWindowEvent);
		};
	}, [queryClient]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$14,
		lineNumber: 165,
		columnNumber: 10
	}, this);
}
var styles_default = "/assets/styles-DZiyGYyG.css";
var _jsxFileName$13 = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 28,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 29,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 30,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName$13,
						lineNumber: 34,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 33,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$13,
			lineNumber: 27,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$13,
		lineNumber: 26,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		logger.error("Root router route error", error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 58,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 61,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName$13,
						lineNumber: 65,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName$13,
						lineNumber: 74,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$13,
					lineNumber: 64,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$13,
			lineNumber: 57,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$13,
		lineNumber: 56,
		columnNumber: 5
	}, this);
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: "Nashmia Operations Hub" },
			{
				name: "description",
				content: "Container logistics operations platform for Nashmia Industries — bookings, transits, cut-offs, and deliveries in a liquid glass interface."
			},
			{
				name: "author",
				content: "Nashmia Industries"
			},
			{
				property: "og:title",
				content: "Nashmia Operations Hub"
			},
			{
				property: "og:description",
				content: "Container logistics operations platform for Nashmia Industries — bookings, transits, cut-offs, and deliveries in a liquid glass interface."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				href: "data:,"
			}
		],
		scripts: [{
			src: "https://accounts.google.com/gsi/client",
			async: true,
			defer: true
		}]
	}),
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RootDocument, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageTransitionProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
		fileName: _jsxFileName$13,
		lineNumber: 137,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName$13,
		lineNumber: 136,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName$13,
		lineNumber: 135,
		columnNumber: 5
	}, this);
}
function RootDocument({ children }) {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		className: "m-0 p-0 w-full min-w-full max-w-full h-full min-h-full min-h-[100dvh] overflow-x-hidden bg-white",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName$13,
			lineNumber: 153,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName$13,
			lineNumber: 152,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
			suppressHydrationWarning: true,
			className: "m-0 p-0 w-full min-w-full max-w-full min-h-full min-h-[100dvh] overflow-x-hidden bg-white text-black antialiased selection:bg-[#6A80A9]/20 overscroll-none",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
				client: queryClient,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthGuard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GmailProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NotificationsProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GlobalRealtimeProvider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBoundary, {
					moduleName: "Application View",
					children
				}, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 165,
					columnNumber: 21
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster$1, { position: "top-right" }, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 166,
					columnNumber: 21
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$13,
					lineNumber: 164,
					columnNumber: 19
				}, this) }, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 163,
					columnNumber: 17
				}, this) }, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 162,
					columnNumber: 15
				}, this) }, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 161,
					columnNumber: 13
				}, this) }, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 160,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$13,
				lineNumber: 159,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
				fileName: _jsxFileName$13,
				lineNumber: 173,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$13,
			lineNumber: 155,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$13,
		lineNumber: 147,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$10 = () => import("./routes-Dv03X_wc.mjs").then((n) => n.n);
var title$12 = "Container Operations Dashboard | Nashmia Industries";
var description$12 = "Nashmia Industries container logistics command center: track bookings, transits, cut-offs and deliveries in one premium operations dashboard.";
var Route$13 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: title$12 },
		{
			name: "description",
			content: description$12
		},
		{
			property: "og:title",
			content: title$12
		},
		{
			property: "og:description",
			content: description$12
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./buyers-BSPIk1b0.mjs");
var title$11 = "Buyers Directory | Nashmia Industries Logistics Platform";
var description$11 = "Manage the accounts and buyers associated with your container movements inside the Nashmia Industries operating system.";
var Route$12 = createFileRoute("/buyers")({
	head: () => ({ meta: [
		{ title: title$11 },
		{
			name: "description",
			content: description$11
		},
		{
			property: "og:title",
			content: title$11
		},
		{
			property: "og:description",
			content: description$11
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./documents-CIwPiA6d.mjs");
var title$10 = "My Drive & Documents | Nashmia Logistics Platform";
var description$10 = "Access, manage, and collaborate on drive documents, spreadsheets, certificates, and quick access folders.";
var Route$11 = createFileRoute("/documents")({
	head: () => ({ meta: [
		{ title: title$10 },
		{
			name: "description",
			content: description$10
		},
		{
			property: "og:title",
			content: title$10
		},
		{
			property: "og:description",
			content: description$10
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./emails-BRZT_oiA.mjs");
var title$9 = "Emails Management | Nashmia Industries Logistics Platform";
var description$9 = "Manage booking requests, sent emails, drafts, and email correspondence within the Nashmia Industries operating system.";
var Route$10 = createFileRoute("/emails")({
	head: () => ({ meta: [
		{ title: title$9 },
		{
			name: "description",
			content: description$9
		},
		{
			property: "og:title",
			content: title$9
		},
		{
			property: "og:description",
			content: description$9
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./forwarders-Ds_GTxI2.mjs");
var title$8 = "Forwarders Directory | Nashmia Industries Logistics Platform";
var description$8 = "Manage booking agents, contacts, communication details, and agreed rate cards inside the Nashmia Industries operating system.";
var Route$9 = createFileRoute("/forwarders")({
	head: () => ({ meta: [
		{ title: title$8 },
		{
			name: "description",
			content: description$8
		},
		{
			property: "og:title",
			content: title$8
		},
		{
			property: "og:description",
			content: description$8
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./login-A_AfAlMb.mjs");
var title$7 = "Sign In | Nashmia Industries Logistics Platform";
var description$7 = "Sign in to your Nashmia Industries container logistics workspace — manage shipments, bookings, rate cards, and consignments.";
var Route$8 = createFileRoute("/login")({
	validateSearch: (search) => {
		return { redirect: typeof search.redirect === "string" ? search.redirect : void 0 };
	},
	head: () => ({ meta: [
		{ title: title$7 },
		{
			name: "description",
			content: description$7
		},
		{
			property: "og:title",
			content: title$7
		},
		{
			property: "og:description",
			content: description$7
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./new-booking-D2JFeBvI.mjs");
var title$6 = "New Booking Request | Nashmia Industries Logistics Platform";
var description$6 = "Create an important logistics movement and prepare the booking request for your forwarder inside the Nashmia Industries operating system.";
var Route$7 = createFileRoute("/new-booking")({
	head: () => ({ meta: [
		{ title: title$6 },
		{
			name: "description",
			content: description$6
		},
		{
			property: "og:title",
			content: title$6
		},
		{
			property: "og:description",
			content: description$6
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var SIDEBAR_COLLAPSED_KEY = "nashmia_sidebar_collapsed";
function getStoredSnapshot() {
	if (typeof window === "undefined") return false;
	try {
		return localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === "true";
	} catch {
		return false;
	}
}
function getServerSnapshot() {
	return false;
}
var listeners = /* @__PURE__ */ new Set();
function subscribe(callback) {
	listeners.add(callback);
	const handleStorage = (e) => {
		if (e.key === SIDEBAR_COLLAPSED_KEY || e.key === null) callback();
	};
	window.addEventListener("storage", handleStorage);
	return () => {
		listeners.delete(callback);
		window.removeEventListener("storage", handleStorage);
	};
}
function notifyListeners() {
	listeners.forEach((listener) => {
		try {
			listener();
		} catch (e) {
			console.error(e);
		}
	});
}
function setSidebarCollapsed(value) {
	const current = getStoredSnapshot();
	const next = typeof value === "function" ? value(current) : value;
	try {
		localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(next));
	} catch (e) {
		console.error("Failed to save sidebar state", e);
	}
	notifyListeners();
}
function toggleSidebarCollapsed() {
	setSidebarCollapsed((prev) => !prev);
}
function useSidebarCollapsed() {
	return [
		(0, import_react.useSyncExternalStore)(subscribe, getStoredSnapshot, getServerSnapshot),
		(0, import_react.useCallback)(() => {
			toggleSidebarCollapsed();
		}, []),
		(0, import_react.useCallback)((value) => {
			setSidebarCollapsed(value);
		}, [])
	];
}
var _jsxFileName$12 = "/app/applet/src/components/nashmia/AppSidebar.tsx";
var NAVIGATION_SECTIONS = [
	{
		title: "Overview",
		items: [{
			label: "Dashboard",
			icon: LayoutDashboard,
			href: "/",
			exact: true,
			description: "Operations metrics & activity"
		}]
	},
	{
		title: "Operations",
		items: [
			{
				label: "New Booking",
				icon: Plus,
				href: "/new-booking",
				description: "Create export/import container booking"
			},
			{
				label: "Bookings",
				icon: Container,
				href: "/",
				exact: false,
				description: "Active container movements & cut-offs"
			},
			{
				label: "Requests",
				icon: ClipboardList,
				href: "/requests",
				badge: "6",
				description: "Forwarder quotation inquiries"
			}
		]
	},
	{
		title: "Directory",
		items: [
			{
				label: "Buyers",
				icon: Users,
				href: "/buyers",
				description: "Buyer consignees & accounts"
			},
			{
				label: "Suppliers",
				icon: Warehouse,
				href: "/suppliers",
				description: "Shippers & cargo suppliers"
			},
			{
				label: "Forwarders",
				icon: Send,
				href: "/forwarders",
				description: "Ocean carriers & freight forwarders"
			}
		]
	},
	{
		title: "Commercial",
		items: [{
			label: "Rate Cards",
			icon: Receipt,
			href: "/rate-cards",
			description: "Contracted freight tariff sheets"
		}]
	},
	{
		title: "Records",
		items: [{
			label: "Documents",
			icon: FileText,
			href: "/documents",
			description: "Bills of lading, invoices & OCR records"
		}, {
			label: "Emails",
			icon: Mail,
			href: "/emails",
			description: "Automated quotation inbox & threads"
		}]
	},
	{
		title: "System",
		items: [{
			label: "Settings",
			icon: Settings,
			href: "/settings",
			description: "Organization & workflow preferences"
		}]
	}
];
/**
* Brand Logo Mark - Circular Pill Container matching reference aesthetic
*/
function BrandMark({ collapsed }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative flex items-center gap-3 select-none",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("relative grid size-9.5 shrink-0 place-items-center rounded-full bg-white text-slate-900 border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-200 group-hover:scale-105", collapsed && "mx-auto"),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 24 24",
				className: "size-4.5 text-slate-900",
				fill: "none",
				strokeWidth: "2.2",
				stroke: "currentColor",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "3",
						y: "3",
						width: "8",
						height: "8",
						rx: "2"
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 169,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
						x: "13",
						y: "13",
						width: "8",
						height: "8",
						rx: "2"
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 170,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M7 11v6a2 2 0 0 0 2 2h6" }, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 171,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$12,
				lineNumber: 159,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute bottom-0.5 right-0.5 size-2 rounded-full border-2 border-white bg-emerald-500 shadow-2xs" }, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 173,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$12,
			lineNumber: 152,
			columnNumber: 7
		}, this), !collapsed && /* @__PURE__ */ (void 0)("div", {
			className: "flex min-w-0 flex-col overflow-hidden text-left transition-opacity duration-200",
			children: [/* @__PURE__ */ (void 0)("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ (void 0)("span", {
					className: "text-[13.5px] font-extrabold tracking-[0.06em] text-slate-900",
					children: "NASHMIA"
				}, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 179,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("span", {
					className: "rounded-full bg-slate-100 px-1.5 py-0.5 text-[8.5px] font-bold tracking-wider text-slate-600",
					children: "LOGISTICS"
				}, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 182,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$12,
				lineNumber: 178,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)("span", {
				className: "text-[10.5px] font-medium text-slate-400 truncate",
				children: "Container Operations"
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 186,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$12,
			lineNumber: 177,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$12,
		lineNumber: 151,
		columnNumber: 5
	}, this);
}
/**
* Determines whether a navigation item is active based on exact or nested path
*/
function isItemActive(item, currentPath) {
	if (!item.href) return false;
	if (item.href === "/") {
		if (item.label === "Dashboard") return currentPath === "/" && !window.location.hash.includes("booking");
		if (item.label === "Bookings") return currentPath === "/" && window.location.hash.includes("booking");
		return currentPath === "/";
	}
	if (item.exact) return currentPath === item.href;
	return currentPath === item.href || currentPath.startsWith(`${item.href}/`);
}
/**
* Navigation Row Component - Smooth, Reference-Inspired Circular Icon Navigation
*/
function NavRow({ item, collapsed, onNavigate, dynamicBadge }) {
	const Icon = item.icon;
	const currentPath = useLocation().pathname;
	const isActive = isItemActive(item, currentPath);
	const displayBadge = dynamicBadge ?? item.badge;
	if (collapsed) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative group/nav flex justify-center py-0.5",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: item.href,
			onClick: onNavigate,
			"aria-label": item.label,
			"aria-current": isActive ? "page" : void 0,
			className: cn("relative flex size-9.5 items-center justify-center rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2", isActive ? "bg-slate-950 text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)] scale-100 ring-1 ring-black/10" : "bg-white text-slate-600 border border-slate-200/70 shadow-2xs hover:bg-slate-50 hover:text-slate-950 hover:border-slate-300 hover:shadow-xs hover:scale-105 active:scale-95"),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
				className: cn("size-4 shrink-0 transition-transform duration-200 group-hover/nav:scale-105", isActive ? "text-white" : "text-slate-600 group-hover/nav:text-slate-900"),
				strokeWidth: isActive ? 2.2 : 1.9
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 257,
				columnNumber: 11
			}, this), Boolean(displayBadge) && /* @__PURE__ */ (void 0)("span", {
				className: cn("absolute -top-0.5 -right-0.5 flex size-3.5 items-center justify-center rounded-full text-[8.5px] font-bold shadow-xs ring-2 ring-white", isActive ? "bg-amber-400 text-slate-950 font-extrabold" : "bg-slate-950 text-white"),
				children: displayBadge
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 267,
				columnNumber: 13
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$12,
			lineNumber: 245,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			role: "tooltip",
			className: "pointer-events-none fixed left-[78px] z-50 hidden rounded-2xl bg-slate-900 px-3 py-1.5 text-left text-white shadow-xl ring-1 ring-white/10 backdrop-blur-md transition-all duration-150 group-hover/nav:flex group-hover/nav:items-center group-hover/nav:gap-2 group-focus-within/nav:flex",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-[12px] font-semibold text-white whitespace-nowrap",
					children: item.label
				}, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 284,
					columnNumber: 13
				}, this), item.description && /* @__PURE__ */ (void 0)("span", {
					className: "text-[10px] font-normal text-slate-300 whitespace-nowrap",
					children: item.description
				}, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 288,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$12,
				lineNumber: 283,
				columnNumber: 11
			}, this), Boolean(displayBadge) && /* @__PURE__ */ (void 0)("span", {
				className: "rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-bold text-white",
				children: displayBadge
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 294,
				columnNumber: 13
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$12,
			lineNumber: 279,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$12,
		lineNumber: 244,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to: item.href,
		onClick: onNavigate,
		"aria-current": isActive ? "page" : void 0,
		className: cn("group/nav relative flex h-10 items-center gap-2.5 rounded-2xl px-2 text-[13px] font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-1 overflow-hidden", isActive ? "bg-slate-100/90 text-slate-950 font-semibold shadow-2xs ring-1 ring-slate-200/70" : "text-slate-600 hover:bg-slate-50/80 hover:text-slate-950"),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: cn("grid size-8 shrink-0 place-items-center rounded-full transition-all duration-200", isActive ? "bg-slate-950 text-white shadow-xs ring-1 ring-black/10 scale-100" : "bg-white text-slate-600 border border-slate-200/80 shadow-2xs group-hover/nav:border-slate-300 group-hover/nav:text-slate-950 group-hover/nav:shadow-xs"),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
					className: cn("size-3.5 shrink-0 transition-transform duration-200 group-hover/nav:scale-105", isActive ? "text-white" : "text-slate-600 group-hover/nav:text-slate-900"),
					strokeWidth: isActive ? 2.2 : 1.9
				}, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 325,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 317,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "min-w-0 flex-1 truncate whitespace-nowrap",
				children: item.label
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 334,
				columnNumber: 7
			}, this),
			Boolean(displayBadge) && /* @__PURE__ */ (void 0)("span", {
				className: cn("ml-auto flex h-4 min-w-4 items-center justify-center rounded-full px-1.5 text-[9.5px] font-bold tracking-tight transition-colors duration-150 shrink-0", isActive ? "bg-slate-950 text-white shadow-2xs" : "bg-slate-100 text-slate-600 ring-1 ring-slate-200/80 group-hover/nav:bg-slate-200 group-hover/nav:text-slate-900"),
				children: displayBadge
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 337,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$12,
		lineNumber: 305,
		columnNumber: 5
	}, this);
}
/**
* Sidebar Body - Shared between Desktop Fixed and Mobile Drawer
*/
function SidebarBody({ collapsed, onToggle, showToggle = true, onNavigate }) {
	const navigate = useNavigate();
	const { profile, user, signOut } = useAuth();
	const { unreadCount } = useNotifications();
	const displayName = profile?.full_name || user?.user_metadata?.full_name || (user?.email ? user.email.split("@")[0] : "Operations");
	const userRole = (profile?.role || user?.user_metadata?.role || "OPERATIONS").toUpperCase();
	const userEmail = profile?.email || user?.email || "";
	const initial = (displayName.charAt(0) || userEmail.charAt(0) || "N").toUpperCase();
	const handleLogout = async () => {
		try {
			await signOut();
			toast.success("Signed out successfully");
			navigate({ to: "/login" });
		} catch {
			toast.success("Signed out");
			navigate({ to: "/login" });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative flex h-full flex-col overflow-hidden bg-white/95 rounded-[26px] border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] text-slate-700 antialiased select-none backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: cn("relative z-10 flex h-14 shrink-0 items-center px-3 border-b border-slate-100/80", collapsed ? "justify-center px-1" : "justify-between"),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					onClick: onNavigate,
					"aria-label": "Nashmia Logistics Home",
					className: "group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrandMark, { collapsed }, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 408,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 402,
					columnNumber: 9
				}, this), !collapsed && showToggle && /* @__PURE__ */ (void 0)("button", {
					type: "button",
					onClick: onToggle,
					"aria-label": "Collapse sidebar",
					title: "Collapse sidebar",
					className: "grid size-7.5 place-items-center rounded-full text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-800 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-slate-900 border border-slate-100 hover:border-slate-200 shadow-2xs",
					children: /* @__PURE__ */ (void 0)(ChevronLeft, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 419,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 412,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$12,
				lineNumber: 396,
				columnNumber: 7
			}, this),
			collapsed && showToggle && /* @__PURE__ */ (void 0)("div", {
				className: "flex justify-center py-1.5 border-b border-slate-100/80 bg-slate-50/40",
				children: /* @__PURE__ */ (void 0)("button", {
					type: "button",
					onClick: onToggle,
					"aria-label": "Expand sidebar",
					title: "Expand sidebar",
					className: "grid size-7.5 place-items-center rounded-full text-slate-400 transition-all hover:bg-slate-950 hover:text-white cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-slate-900 border border-slate-200/70 shadow-2xs hover:scale-105",
					children: /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 434,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 427,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 426,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				"aria-label": "Primary Navigation",
				className: cn("relative z-10 flex-1 overflow-y-auto overscroll-contain py-2 scroll-smooth [scrollbar-width:thin] [scrollbar-color:rgba(100,116,139,0.2)_transparent]", collapsed ? "px-1.5 space-y-1" : "px-2.5 space-y-2.5"),
				children: NAVIGATION_SECTIONS.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-0.5",
					children: [!collapsed && /* @__PURE__ */ (void 0)("div", {
						className: "px-2 pb-0.5 pt-1",
						children: /* @__PURE__ */ (void 0)("span", {
							className: "text-[9.5px] font-bold uppercase tracking-[0.14em] text-slate-400 select-none",
							children: section.title
						}, void 0, false, {
							fileName: _jsxFileName$12,
							lineNumber: 451,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 450,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-0.5",
						children: section.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavRow, {
							item,
							collapsed,
							onNavigate,
							dynamicBadge: item.label === "Requests" ? item.badge : item.label === "Emails" && unreadCount > 0 ? unreadCount : item.badge
						}, item.label, false, {
							fileName: _jsxFileName$12,
							lineNumber: 459,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 457,
						columnNumber: 13
					}, this)]
				}, section.title, true, {
					fileName: _jsxFileName$12,
					lineNumber: 448,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 440,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10 p-2 border-t border-slate-100/80 bg-slate-50/30",
				children: collapsed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group/user relative flex flex-col items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/settings",
						onClick: onNavigate,
						"aria-label": `User Settings - ${displayName} (${userRole})`,
						className: "relative flex size-9 items-center justify-center rounded-full bg-slate-950 font-bold text-xs text-white shadow-[0_3px_10px_rgba(0,0,0,0.16)] transition-transform hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-slate-900 border-2 border-white",
						children: [initial, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute bottom-0 right-0 size-2 rounded-full border border-white bg-emerald-500 shadow-2xs" }, void 0, false, {
							fileName: _jsxFileName$12,
							lineNumber: 490,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$12,
						lineNumber: 483,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						role: "tooltip",
						className: "pointer-events-none fixed left-[78px] bottom-3.5 z-50 hidden rounded-2xl bg-slate-900 p-3 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur-md transition-all group-hover/user:block",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[12px] font-bold text-white leading-tight",
								children: displayName
							}, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 498,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[10px] font-medium text-slate-300",
								children: userEmail
							}, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 499,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "mt-1.5 inline-block rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-bold text-slate-200",
								children: userRole
							}, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 500,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$12,
						lineNumber: 494,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$12,
					lineNumber: 481,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 rounded-2xl bg-white p-1.5 border border-slate-200/70 shadow-2xs transition-all hover:border-slate-300",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/settings",
						onClick: onNavigate,
						className: "group/profile flex min-w-0 flex-1 items-center gap-2.5 text-left outline-none focus-visible:ring-1 focus-visible:ring-slate-900 rounded-xl p-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative grid size-7.5 shrink-0 place-items-center rounded-full bg-slate-950 text-[11px] font-bold text-white shadow-2xs",
							children: [initial, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -bottom-0.5 -right-0.5 size-2 rounded-full border border-white bg-emerald-500" }, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 514,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$12,
							lineNumber: 512,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "truncate text-[12px] font-semibold text-slate-900 leading-tight",
								children: displayName
							}, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 517,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[9.5px] font-medium text-slate-400 capitalize truncate",
									children: userRole.toLowerCase()
								}, void 0, false, {
									fileName: _jsxFileName$12,
									lineNumber: 521,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$12,
								lineNumber: 520,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$12,
							lineNumber: 516,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$12,
						lineNumber: 507,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleLogout,
						title: "Sign out",
						"aria-label": "Sign out",
						className: "grid size-7 shrink-0 place-items-center rounded-full text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-rose-500 border border-transparent hover:border-rose-100",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "size-3" }, void 0, false, {
							fileName: _jsxFileName$12,
							lineNumber: 535,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 528,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$12,
					lineNumber: 506,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 479,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$12,
		lineNumber: 394,
		columnNumber: 5
	}, this);
}
/**
* Desktop AppSidebar (Fixed Full-Height Sticky Floating Card Layout)
*/
function AppSidebar({ collapsed: propCollapsed, onToggle: propOnToggle } = {}) {
	const [hookCollapsed, hookToggle] = useSidebarCollapsed();
	const collapsed = propCollapsed !== void 0 ? propCollapsed : hookCollapsed;
	const onToggle = propOnToggle ?? hookToggle;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
		"aria-label": "Main Navigation",
		style: {
			width: collapsed ? 72 : 260,
			willChange: "width"
		},
		className: cn("fixed inset-y-0 left-0 z-30 isolate hidden h-screen h-[100dvh] flex-col p-2 transition-[width] duration-300 ease-[cubic-bezier(0.2,0,0,1)] lg:flex"),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarBody, {
			collapsed,
			onToggle
		}, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 570,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$12,
		lineNumber: 560,
		columnNumber: 5
	}, this);
}
/**
* Mobile Sidebar Drawer (Off-Canvas Sheet)
*/
function MobileSidebar({ open: controlledOpen, onOpenChange } = {}) {
	const [internalOpen, setInternalOpen] = (0, import_react.useState)(false);
	const isControlled = controlledOpen !== void 0;
	const open = isControlled ? controlledOpen : internalOpen;
	const setOpen = (0, import_react.useCallback)((val) => {
		if (isControlled) onOpenChange?.(val);
		else setInternalOpen(val);
	}, [isControlled, onOpenChange]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [open, setOpen]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		!isControlled && /* @__PURE__ */ (void 0)("button", {
			type: "button",
			onClick: () => setOpen(true),
			"aria-label": "Open navigation menu",
			className: "fixed bottom-5 left-5 z-40 grid size-11 place-items-center rounded-full bg-slate-950 text-white shadow-lg ring-2 ring-white lg:hidden cursor-pointer active:scale-95 transition-transform",
			children: /* @__PURE__ */ (void 0)(Menu, { className: "size-5" }, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 631,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 625,
			columnNumber: 9
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			onClick: () => setOpen(false),
			"aria-hidden": "true",
			className: cn("fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-xs transition-opacity duration-250 lg:hidden", open ? "opacity-100" : "pointer-events-none opacity-0 invisible")
		}, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 636,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			"aria-label": "Mobile Navigation",
			className: cn("fixed inset-y-0 left-0 z-40 isolate flex h-full h-[100dvh] w-[270px] max-w-[85vw] flex-col p-2.5 transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] lg:hidden", open ? "translate-x-0" : "-translate-x-full pointer-events-none"),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => setOpen(false),
				"aria-label": "Close navigation",
				className: "absolute right-5 top-5 z-20 grid size-7.5 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-slate-900 border border-slate-200/80 bg-white shadow-2xs",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3.5" }, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 660,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 654,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarBody, {
				collapsed: false,
				showToggle: false,
				onNavigate: () => setOpen(false)
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 663,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$12,
			lineNumber: 646,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$12,
		lineNumber: 623,
		columnNumber: 5
	}, this);
}
var _jsxFileName$11 = "/app/applet/src/components/nashmia/AppLayout.tsx";
function AppLayout({ children, bg = "bg-white", maxWidth = "max-w-[1520px]", mainClassName = "px-4 pb-20 pt-6 sm:px-6 sm:pt-8 lg:pb-12 lg:pr-8" }) {
	const [collapsed, toggleCollapsed] = useSidebarCollapsed();
	const [mobileNavOpen, setMobileNavOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("relative w-full min-w-full max-w-full min-h-screen min-h-[100dvh] m-0 p-0 overflow-x-hidden", bg),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "env-light",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 30,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppSidebar, {
				collapsed,
				onToggle: toggleCollapsed
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 33,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileSidebar, {
				open: mobileNavOpen,
				onOpenChange: setMobileNavOpen
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 34,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: cn("relative z-0 min-h-screen min-h-[100dvh] w-full min-w-0 max-w-full overflow-x-hidden transition-[padding-left] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] lg:pl-[var(--offset)]", mainClassName),
				style: {
					"--offset": collapsed ? "72px" : "260px",
					willChange: "padding-left"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: cn("mx-auto w-full min-w-0 max-w-full", maxWidth),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageTransition, { children: typeof children === "function" ? children({ onOpenMobileMenu: () => setMobileNavOpen(true) }) : children }, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 49,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 48,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 36,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$11,
		lineNumber: 24,
		columnNumber: 5
	}, this);
}
var _jsxFileName$10 = "/app/applet/src/components/nashmia/rate-cards/RateCardsToolbar.tsx";
function RateCardsToolbar({ searchQuery, onSearchChange, selectedForwarder, onForwarderChange, forwardersList, sortBy, onSortChange, viewMode, onViewModeChange, onResetFilters }) {
	const hasActiveFilters = searchQuery !== "" || selectedForwarder !== "all" || sortBy !== "recent";
	const selectedForwarderObj = forwardersList.find((f) => f.id === selectedForwarder);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative rounded-[18px] border border-white/85 bg-white/72 p-3 shadow-[0_16px_44px_rgba(15,23,42,0.04)] backdrop-blur-[24px] transition-all duration-300",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" }, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 58,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						type: "text",
						value: searchQuery,
						onChange: (e) => onSearchChange(e.target.value),
						placeholder: "Search pickup point or forwarder name...",
						className: "h-[46px] w-full rounded-[14px] border border-slate-200/70 bg-white/60 pl-11 pr-12 text-[14px] text-black placeholder:text-slate-400 transition-all duration-200 focus:border-[#6A80A9]/50 focus:bg-[#E8F1F3]/40 focus:shadow-[0_0_0_3px_rgba(106,128,169,0.12)] focus:outline-none"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 59,
						columnNumber: 11
					}, this),
					searchQuery && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => onSearchChange(""),
						"aria-label": "Clear search input",
						className: "absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-200/60 hover:text-slate-700",
						children: /* @__PURE__ */ (void 0)(X, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 74,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 68,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 57,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: cn("inline-flex h-[42px] items-center gap-2 rounded-[13px] border px-3.5 text-[13px] font-medium transition-all duration-200 cursor-pointer", selectedForwarder !== "all" ? "border-[#6A80A9]/40 bg-[#6A80A9]/15 text-[#3D5276] shadow-xs" : "border-slate-200/70 bg-white/60 text-slate-700 hover:bg-white hover:text-black"),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "size-3.5 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 93,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "max-w-[130px] truncate",
									children: selectedForwarder === "all" ? "All Forwarders" : selectedForwarderObj?.name || "Forwarder"
								}, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 94,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 99,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 84,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 83,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
						align: "end",
						className: "w-56 rounded-[18px] border border-white/80 bg-white/95 p-1.5 shadow-2xl backdrop-blur-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
								className: "px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400",
								children: "Filter by Forwarder"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 106,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onForwarderChange("all"),
								className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All Forwarders" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 113,
									columnNumber: 17
								}, this), selectedForwarder === "all" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 114,
									columnNumber: 49
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$10,
								lineNumber: 109,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, { className: "my-1 bg-slate-100" }, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 116,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "max-h-56 overflow-y-auto scrollbar-thin",
								children: forwardersList.map((fwd) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									onClick: () => onForwarderChange(fwd.id),
									className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-1.5 text-[13px] text-slate-700 hover:bg-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "truncate",
										children: fwd.name
									}, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 124,
										columnNumber: 21
									}, this), selectedForwarder === fwd.id && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
										fileName: _jsxFileName$10,
										lineNumber: 125,
										columnNumber: 54
									}, this)]
								}, fwd.id, true, {
									fileName: _jsxFileName$10,
									lineNumber: 119,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 117,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 102,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 82,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "inline-flex h-[42px] items-center gap-2 rounded-[13px] border border-slate-200/70 bg-white/60 px-3.5 text-[13px] font-medium text-slate-700 hover:bg-white hover:text-black transition-all cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 139,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: sortBy === "rate-asc" ? "Rate: Low to High" : sortBy === "rate-desc" ? "Rate: High to Low" : "Recently Added" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 140,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 opacity-60" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 147,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$10,
							lineNumber: 135,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 134,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
						align: "end",
						className: "w-52 rounded-[18px] border border-white/80 bg-white/95 p-1.5 shadow-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
								className: "px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400",
								children: "Sort Rates By"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 154,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onSortChange("recent"),
								className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Recently Added" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 161,
									columnNumber: 17
								}, this), sortBy === "recent" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 162,
									columnNumber: 41
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$10,
								lineNumber: 157,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onSortChange("rate-asc"),
								className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Rate: Low to High" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 168,
									columnNumber: 17
								}, this), sortBy === "rate-asc" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 169,
									columnNumber: 43
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$10,
								lineNumber: 164,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
								onClick: () => onSortChange("rate-desc"),
								className: "flex cursor-pointer items-center justify-between rounded-[10px] px-2.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Rate: High to Low" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 175,
									columnNumber: 17
								}, this), sortBy === "rate-desc" && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$10,
									lineNumber: 176,
									columnNumber: 44
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$10,
								lineNumber: 171,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 150,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 133,
						columnNumber: 11
					}, this),
					hasActiveFilters && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: onResetFilters,
						className: "inline-flex h-[42px] items-center gap-1.5 rounded-[13px] border border-slate-200/80 bg-white px-3 text-[12px] font-semibold text-slate-600 hover:bg-slate-100 transition-colors shadow-2xs cursor-pointer",
						title: "Reset all filters",
						children: [/* @__PURE__ */ (void 0)(RotateCcw, { className: "size-3.5 text-slate-400" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 189,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", { children: "Reset" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 190,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 183,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex h-[42px] items-center rounded-[13px] border border-slate-200/70 bg-slate-100/70 p-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onViewModeChange("table"),
							className: cn("flex size-8 items-center justify-center rounded-[10px] transition-all cursor-pointer", viewMode === "table" ? "bg-white text-black shadow-xs font-bold" : "text-slate-400 hover:text-slate-700"),
							title: "Table View",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 207,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 196,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onViewModeChange("grid"),
							className: cn("flex size-8 items-center justify-center rounded-[10px] transition-all cursor-pointer", viewMode === "grid" ? "bg-white text-black shadow-xs font-bold" : "text-slate-400 hover:text-slate-700"),
							title: "Grid View",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutGrid, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 220,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 209,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 195,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 80,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$10,
			lineNumber: 55,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$10,
		lineNumber: 54,
		columnNumber: 5
	}, this);
}
var _jsxFileName$9 = "/app/applet/src/components/nashmia/rate-cards/RateCardsTable.tsx";
function RateCardsTable({ rateCards, onViewDetails, onEdit, onDelete, onAddRateCard }) {
	if (rateCards.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-[24px] border border-dashed border-slate-200 bg-white p-12 text-center shadow-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto grid size-14 place-items-center rounded-2xl bg-[#6A80A9]/10 text-[#6A80A9] mb-3.5 shadow-2xs",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Receipt, { className: "size-7 stroke-[1.8]" }, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 34,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 33,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "text-base font-bold text-slate-900",
				children: "No Rate Cards Found"
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 36,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-slate-500 max-w-md mx-auto mt-1",
				children: "No forwarder rates registered for this pickup location yet. Add a rate card with pickup point, forwarder, and agreed price."
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 37,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onAddRateCard,
				className: "mt-5 inline-flex items-center gap-2 rounded-xl bg-black hover:bg-slate-800 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-all active:scale-95 cursor-pointer",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5" }, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 46,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "+ Add Rate Card" }, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 47,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 41,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 32,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative overflow-hidden rounded-[20px] border border-white/85 bg-white/80 shadow-[0_12px_36px_rgba(15,23,42,0.035)] backdrop-blur-2xl",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
				className: "w-full text-left border-collapse min-w-[720px]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
					className: "border-b border-slate-100/90 bg-slate-50/50 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-4 pl-6 pr-4",
							children: "Pickup Point"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 59,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-4 px-4",
							children: "Forwarder"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 60,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-4 px-4",
							children: "Freight Rate"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 61,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "py-4 pl-4 pr-6 text-right",
							children: "Actions"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 62,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 58,
					columnNumber: 13
				}, this) }, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 57,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
					className: "divide-y divide-slate-100/80 text-[13.5px]",
					children: rateCards.map((card) => {
						const forwarderName = card.forwarders?.company_name || card.forwarders?.contact_person || "Unassigned Forwarder";
						const forwarderCode = card.forwarders?.code;
						const forwarderBadge = card.forwarders?.badge || "Booking Agent";
						const pickupLocation = card.load_point || card.origin || "Pickup Point";
						const rateVal = card.base_rate || card.rate || 0;
						const currency = card.currency || "USD";
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
							onClick: () => onViewDetails(card),
							className: "group cursor-pointer transition-colors duration-150 hover:bg-[#E8F1F3]/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-4 pl-6 pr-4",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "grid size-10 shrink-0 place-items-center rounded-xl border border-[#6A80A9]/20 bg-[#E8F1F3] text-[#6A80A9] shadow-2xs group-hover:scale-105 transition-all",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 87,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 86,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "font-bold text-slate-900 text-[14.5px] group-hover:text-[#6A80A9] transition-colors truncate",
												children: pickupLocation
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 90,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11.5px] text-slate-400 mt-0.5 flex items-center gap-1",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Dispatch Location" }, void 0, false, {
													fileName: _jsxFileName$9,
													lineNumber: 94,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 93,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 89,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 85,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 84,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-4 px-4",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "grid size-8 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-600 font-bold text-xs",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 104,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 103,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bold text-slate-900 text-[13.5px] truncate",
													children: forwarderName
												}, void 0, false, {
													fileName: _jsxFileName$9,
													lineNumber: 108,
													columnNumber: 27
												}, this), forwarderCode && /* @__PURE__ */ (void 0)("span", {
													className: "rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-slate-600",
													children: forwarderCode
												}, void 0, false, {
													fileName: _jsxFileName$9,
													lineNumber: 112,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$9,
												lineNumber: 107,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11px] text-slate-400 truncate mt-0.5",
												children: forwarderBadge
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 117,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 106,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 102,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 101,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-4 px-4",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-baseline gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-mono text-[19px] font-extrabold text-slate-900",
											children: [currency === "USD" ? "$" : currency === "GBP" ? "£" : currency === "EUR" ? "€" : `${currency} `, rateVal.toLocaleString()]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 127,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-mono text-[11px] font-bold text-slate-400",
											children: [currency, " / bkg"]
										}, void 0, true, {
											fileName: _jsxFileName$9,
											lineNumber: 137,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 126,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 125,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "py-4 pl-4 pr-6 text-right",
									onClick: (e) => e.stopPropagation(),
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-end gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: () => onEdit(card),
											className: "grid size-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-black transition-all cursor-pointer shadow-2xs",
											title: "Edit rate",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 152,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 146,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: () => onDelete(card.id, `${pickupLocation} - ${forwarderName}`),
											className: "grid size-8 place-items-center rounded-lg border border-slate-200 bg-white text-rose-500 hover:bg-rose-50 hover:border-rose-200 transition-all cursor-pointer shadow-2xs",
											title: "Delete rate",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 161,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 155,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 145,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 144,
									columnNumber: 19
								}, this)
							]
						}, card.id, true, {
							fileName: _jsxFileName$9,
							lineNumber: 78,
							columnNumber: 17
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 65,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 56,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$9,
			lineNumber: 55,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 54,
		columnNumber: 5
	}, this);
}
var _jsxFileName$8 = "/app/applet/src/components/nashmia/rate-cards/RateCardsGridView.tsx";
function RateCardsGridView({ rateCards, onViewDetails, onEdit, onDelete, onAddRateCard }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "button",
			onClick: onAddRateCard,
			className: "group relative flex min-h-[260px] w-full flex-col justify-between overflow-hidden rounded-[28px] border border-dashed border-[#6A80A9]/30 bg-white/70 p-6 text-left shadow-xs backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6A80A9] hover:bg-white hover:shadow-[0_20px_45px_rgba(106,128,169,0.12)] cursor-pointer",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex size-12 items-center justify-center rounded-2xl bg-[#E8F1F3] text-[#6A80A9] shadow-2xs group-hover:scale-105 transition-transform",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-6 stroke-[2.5]" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 40,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 39,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "mt-4 text-[18px] font-bold text-slate-900 group-hover:text-[#6A80A9] transition-colors",
					children: "+ Add Rate Card"
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 42,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-xs text-slate-500 leading-relaxed",
					children: "Register forwarder pricing for a pickup location or loading point."
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 45,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 38,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 rounded-xl bg-black py-2.5 px-4 text-center text-xs font-bold text-white shadow-xs group-hover:bg-slate-800 transition-colors",
				children: "Create Rate Entry"
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 50,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 33,
			columnNumber: 7
		}, this), rateCards.map((card) => {
			const forwarderName = card.forwarders?.company_name || card.forwarders?.contact_person || "Unassigned Forwarder";
			const forwarderCode = card.forwarders?.code;
			card.forwarders?.badge;
			const pickupLocation = card.load_point || card.origin || "Pickup Point";
			const rateVal = card.base_rate || card.rate || 0;
			const currency = card.currency || "USD";
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				onClick: () => onViewDetails(card),
				style: { background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 60%, #EDF2F7 100%)" },
				className: "group relative flex min-h-[260px] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[28px] border border-white/90 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(106,128,169,0.15)]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2.5 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid size-10 shrink-0 place-items-center rounded-2xl border border-[#6A80A9]/20 bg-[#E8F1F3] text-[#6A80A9] shadow-2xs",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 81,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 80,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 block",
								children: "Pickup Point"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 84,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-[16px] font-bold text-slate-900 truncate group-hover:text-[#6A80A9] transition-colors",
								children: pickupLocation
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 87,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 83,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 79,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1 shrink-0",
						onClick: (e) => e.stopPropagation(),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onEdit(card),
							className: "grid size-7.5 place-items-center rounded-lg border border-slate-200/80 bg-white text-slate-600 hover:bg-slate-100 hover:text-black transition-colors",
							title: "Edit rate",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 104,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 98,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onDelete(card.id, `${pickupLocation} - ${forwarderName}`),
							className: "grid size-7.5 place-items-center rounded-lg border border-slate-200/80 bg-white text-rose-500 hover:bg-rose-50 hover:border-rose-200 transition-colors",
							title: "Delete rate",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 112,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 106,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 94,
						columnNumber: 17
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 78,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4 flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-2xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid size-8 shrink-0 place-items-center rounded-xl bg-slate-100 text-[#6A80A9]",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 120,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 119,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider",
								children: "Forwarder Partner"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 123,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[13px] font-bold text-slate-900 truncate",
								children: forwarderName
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 126,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 122,
							columnNumber: 17
						}, this),
						forwarderCode && /* @__PURE__ */ (void 0)("span", {
							className: "rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-slate-600 shrink-0",
							children: forwarderCode
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 129,
							columnNumber: 19
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 118,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 77,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4 flex items-end justify-between border-t border-slate-200/60 pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[10.5px] font-bold uppercase tracking-wider text-slate-400 block",
						children: "Freight Rate"
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 139,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-mono text-[22px] font-extrabold text-slate-900 leading-tight",
						children: [currency === "USD" ? "$" : currency === "GBP" ? "£" : currency === "EUR" ? "€" : `${currency} `, rateVal.toLocaleString()]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 142,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 138,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full bg-[#E8F1F3] px-2.5 py-1 text-[11px] font-bold text-[#6A80A9] border border-[#6A80A9]/20",
						children: [currency, " / Container"]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 154,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 137,
					columnNumber: 13
				}, this)]
			}, card.id, true, {
				fileName: _jsxFileName$8,
				lineNumber: 68,
				columnNumber: 11
			}, this);
		})]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 31,
		columnNumber: 5
	}, this);
}
var _jsxFileName$7 = "/app/applet/src/components/nashmia/common/ResultModalIllustration.tsx";
function ResultModalIllustration({ type = "success", className = "size-32" }) {
	const isSuccess = type === "success";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: `relative flex items-center justify-center ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
			viewBox: "0 0 160 160",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: "w-full h-full select-none",
			children: [
				isSuccess ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M36 34V42M32 38H40",
						stroke: "#00A3FF",
						strokeWidth: "2.2",
						strokeLinecap: "round"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 26,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M124 32V40M120 36H128",
						stroke: "#00A3FF",
						strokeWidth: "2.2",
						strokeLinecap: "round"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 28,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M32 106V112M29 109H35",
						stroke: "#00C9FF",
						strokeWidth: "2",
						strokeLinecap: "round"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 35,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M128 108V114M125 111H131",
						stroke: "#00C9FF",
						strokeWidth: "2",
						strokeLinecap: "round"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 42,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "28",
						cy: "62",
						r: "3.5",
						stroke: "#CBD5E1",
						strokeWidth: "1.8"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 49,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "132",
						cy: "74",
						r: "3.5",
						stroke: "#CBD5E1",
						strokeWidth: "1.8"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 51,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 24,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M36 34V42M32 38H40",
						stroke: "#F59E0B",
						strokeWidth: "2.2",
						strokeLinecap: "round"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 56,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M124 32V40M120 36H128",
						stroke: "#F59E0B",
						strokeWidth: "2.2",
						strokeLinecap: "round"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 58,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: "M32 106V112M29 109H35",
						stroke: "#F59E0B",
						strokeWidth: "2",
						strokeLinecap: "round"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 65,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "28",
						cy: "62",
						r: "3.5",
						stroke: "#CBD5E1",
						strokeWidth: "1.8"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 72,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
						cx: "132",
						cy: "74",
						r: "3.5",
						stroke: "#CBD5E1",
						strokeWidth: "1.8"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 74,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 54,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ellipse", {
					cx: "80",
					cy: "138",
					rx: "40",
					ry: "7",
					fill: "rgba(15, 23, 42, 0.05)"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 79,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
					transform: "translate(42, 36)",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
							x: "0",
							y: "0",
							width: "64",
							height: "86",
							rx: "8",
							fill: "#FFFFFF",
							stroke: "#1E293B",
							strokeWidth: "3.2"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 84,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
							x1: "14",
							y1: "22",
							x2: "38",
							y2: "22",
							stroke: "#CBD5E1",
							strokeWidth: "3",
							strokeLinecap: "round"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 96,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
							x1: "14",
							y1: "34",
							x2: "48",
							y2: "34",
							stroke: "#CBD5E1",
							strokeWidth: "3",
							strokeLinecap: "round"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 107,
							columnNumber: 11
						}, this),
						isSuccess ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
							d: "M14 62H24L29 52L35 70L41 58L45 62H52",
							stroke: "#00A3FF",
							strokeWidth: "3",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 119,
							columnNumber: 13
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
							x1: "14",
							y1: "64",
							x2: "50",
							y2: "64",
							stroke: "#EF4444",
							strokeWidth: "3.5",
							strokeLinecap: "round"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 128,
							columnNumber: 13
						}, this),
						isSuccess ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
							transform: "translate(38, -6)",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
								d: "M19 8C19 3.5 15 0 10.5 0C6.5 0 3 3 3 3C3 3 -0.5 0 -4.5 0C-9 0 -13 3.5 -13 8C-13 15.5 3 24 3 24C3 24 19 15.5 19 8Z",
								fill: "#00E5FF",
								transform: "translate(13, 10)"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 143,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
								d: "M19 8C19 3.5 15 0 10.5 0C6.5 0 3 3 3 3C3 3 -0.5 0 -4.5 0C-9 0 -13 3.5 -13 8C-13 15.5 3 24 3 24C3 24 19 15.5 19 8Z",
								stroke: "#1E293B",
								strokeWidth: "3",
								strokeLinejoin: "round",
								transform: "translate(13, 10)"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 148,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 141,
							columnNumber: 13
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
							transform: "translate(38, -6)",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
								d: "M19 8C19 3.5 15 0 10.5 0C6.5 0 3 3 3 3C3 3 -0.5 0 -4.5 0C-9 0 -13 3.5 -13 8C-13 15.5 3 24 3 24C3 24 19 15.5 19 8Z",
								fill: "#F59E0B",
								transform: "translate(13, 10)"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 158,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
								d: "M19 8C19 3.5 15 0 10.5 0C6.5 0 3 3 3 3C3 3 -0.5 0 -4.5 0C-9 0 -13 3.5 -13 8C-13 15.5 3 24 3 24C3 24 19 15.5 19 8Z",
								stroke: "#1E293B",
								strokeWidth: "3",
								strokeLinejoin: "round",
								transform: "translate(13, 10)"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 163,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 157,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 82,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 16,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "/app/applet/src/components/nashmia/common/ResultSuccessView.tsx";
function ResultSuccessView({ type = "success", title, message, entityName, entitySubtitle, actionText, onAction, onClose }) {
	const isSuccess = type === "success";
	const defaultTitle = isSuccess ? "Success!" : "Sorry :(";
	const defaultMessage = isSuccess ? "Thank you for waiting. Your data has been approved." : "Your request couldn't be processed by the system.";
	const defaultActionText = isSuccess ? "OKAY" : "TRY AGAIN";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative w-full text-center px-4 py-3 sm:px-6 animate-in fade-in-50 zoom-in-95 duration-200",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onClose,
				"aria-label": "Close dialog",
				className: "absolute -top-1 -right-1 sm:top-0 sm:right-0 z-20 flex size-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all hover:bg-slate-200 hover:text-slate-700 active:scale-95 cursor-pointer shadow-2xs",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4 stroke-[2.5]" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 43,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 37,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex justify-center pt-2 pb-1",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultModalIllustration, {
					type,
					className: "w-36 h-36"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 48,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 47,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: `text-[26px] font-black tracking-tight leading-tight ${isSuccess ? "text-[#0D1F3C]" : "text-[#D97706]"}`,
				children: title || defaultTitle
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 52,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mx-auto mt-2 max-w-[280px] text-[14px] leading-relaxed text-slate-500 font-medium",
				children: message || defaultMessage
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 61,
				columnNumber: 7
			}, this),
			entityName && /* @__PURE__ */ (void 0)("div", {
				className: "mt-3.5 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-slate-50/80 px-3.5 py-1 text-[12px] font-semibold text-slate-700 shadow-2xs",
				children: [
					/* @__PURE__ */ (void 0)("span", { className: "size-1.5 rounded-full bg-[#00A3FF]" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 68,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("span", {
						className: "truncate max-w-[200px]",
						children: entityName
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 69,
						columnNumber: 11
					}, this),
					entitySubtitle && /* @__PURE__ */ (void 0)("span", {
						className: "text-slate-400 font-normal",
						children: [
							"(",
							entitySubtitle,
							")"
						]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 70,
						columnNumber: 30
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 67,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 pt-1",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onAction,
					className: `w-full py-3.5 px-6 rounded-full font-extrabold text-[14px] uppercase tracking-wider text-white shadow-md transition-all duration-150 cursor-pointer active:scale-[0.98] ${isSuccess ? "bg-[#009EE2] hover:bg-[#0089c7] shadow-[#009EE2]/25" : "bg-[#F59E0B] hover:bg-[#d97706] shadow-[#F59E0B]/25"}`,
					children: actionText || defaultActionText
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 76,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 75,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/app/applet/src/components/nashmia/rate-cards/RateCardModal.tsx";
function RateCardModal({ isOpen, onClose, onSave, editingCard, forwarders, isSubmitting = false }) {
	const [forwarderId, setForwarderId] = (0, import_react.useState)("");
	const [pickupPoint, setPickupPoint] = (0, import_react.useState)("");
	const [rate, setRate] = (0, import_react.useState)("2450");
	const [currency, setCurrency] = (0, import_react.useState)("USD");
	const [status, setStatus] = (0, import_react.useState)("Active");
	const [forwarderSearch, setForwarderSearch] = (0, import_react.useState)("");
	const [forwarderDropdownOpen, setForwarderDropdownOpen] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const [savedData, setSavedData] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		if (editingCard) {
			setForwarderId(editingCard.forwarder_id || "");
			setPickupPoint(editingCard.load_point || editingCard.origin || "");
			setRate(String(editingCard.base_rate || editingCard.rate || "2450"));
			setCurrency(editingCard.currency || "USD");
			setStatus(editingCard.status === "Inactive" ? "Inactive" : "Active");
			setIsSuccess(false);
			setSavedData(null);
		} else {
			setForwarderId(forwarders[0]?.id || "");
			setPickupPoint("");
			setRate("2450");
			setCurrency("USD");
			setStatus("Active");
			setIsSuccess(false);
			setSavedData(null);
		}
		setErrors({});
		setForwarderSearch("");
		setForwarderDropdownOpen(false);
	}, [
		isOpen,
		editingCard,
		forwarders
	]);
	const selectedForwarderObj = (0, import_react.useMemo)(() => {
		return forwarders.find((f) => f.id === forwarderId) || null;
	}, [forwarders, forwarderId]);
	const filteredForwarders = (0, import_react.useMemo)(() => {
		if (!forwarderSearch.trim()) return forwarders;
		const clean = forwarderSearch.toLowerCase();
		return forwarders.filter((f) => f.name.toLowerCase().includes(clean) || f.code && f.code.toLowerCase().includes(clean) || f.contact && f.contact.toLowerCase().includes(clean) || f.email && f.email.toLowerCase().includes(clean));
	}, [forwarders, forwarderSearch]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const newErrors = {};
		if (!forwarderId) newErrors.forwarderId = "Please select a forwarder";
		if (!pickupPoint.trim()) newErrors.pickupPoint = "Pickup point location is required";
		const numRate = Number(rate);
		if (isNaN(numRate) || numRate <= 0) newErrors.rate = "Please enter a valid rate amount";
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}
		try {
			const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
			const nextYear = new Date(Date.now() + 31536e6).toISOString().split("T")[0];
			const fwdName = selectedForwarderObj?.name || "Forwarder";
			await onSave({
				forwarderId,
				cardName: `${pickupPoint.trim()} Rate (${fwdName})`,
				origin: pickupPoint.trim(),
				destination: "Karachi (KHI)",
				loadPoint: pickupPoint.trim(),
				polName: pickupPoint.trim(),
				containerSize: "40HC",
				containerType: "High Cube",
				quantity: 1,
				baseRate: numRate,
				currency: currency.toUpperCase(),
				additionalCharges: [],
				validFrom: editingCard?.valid_from || today,
				validUntil: editingCard?.valid_until || nextYear,
				status,
				notes: `Pickup Point: ${pickupPoint.trim()}`
			}, editingCard?.id);
			setSavedData({
				forwarderName: fwdName,
				pickupPoint: pickupPoint.trim(),
				rateText: `${currency.toUpperCase()} ${numRate.toLocaleString()}`
			});
			setIsSuccess(true);
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			toast.error(msg || "Failed to save rate card");
		}
	};
	const handleDismiss = () => {
		onClose();
		setTimeout(() => {
			setIsSuccess(false);
			setSavedData(null);
		}, 200);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			hideCloseButton: true,
			className: cn("w-full sm:max-w-[560px] max-h-[92vh] flex flex-col p-0 overflow-hidden sm:rounded-[28px] bg-white shadow-2xl focus:outline-none", isSuccess && "sm:max-w-[420px]"),
			children: isSuccess ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-4 sm:p-6 overflow-y-auto max-h-[88vh]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultSuccessView, {
					type: "success",
					title: editingCard ? "Rate Card Updated" : "Rate Card Saved",
					message: `The rate card for ${savedData?.forwarderName} at pickup point "${savedData?.pickupPoint}" (${savedData?.rateText}) has been saved and is ready for booking requests.`,
					entityName: savedData?.forwarderName,
					entitySubtitle: savedData?.pickupPoint,
					actionText: "OKAY",
					onAction: handleDismiss,
					onClose: handleDismiss
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 184,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 183,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: handleSubmit,
				className: "flex flex-col h-full max-h-[90vh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: onClose,
						"aria-label": "Close",
						className: "absolute top-4 right-4 z-20 flex size-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all hover:bg-slate-200 hover:text-slate-700 active:scale-95 cursor-pointer shadow-2xs",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4 stroke-[2.5]" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 207,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 201,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, {
						className: "p-5 sm:p-6 pb-3 sm:pb-4 border-b border-slate-100 shrink-0 bg-white space-y-1.5 text-left pr-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-[#E8F5F6] px-3 py-1 text-[11px] font-bold text-[#0FA3B1] w-fit",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-[#0FA3B1]" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 213,
									columnNumber: 17
								}, this), editingCard ? "Edit Rate Card" : "Ocean Rate Card"]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 212,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
								className: "text-xl sm:text-[22px] font-extrabold tracking-tight text-[#0D1F3C]",
								children: editingCard ? "Update Rate Card" : "Add Rate Card"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 216,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
								className: "text-xs sm:text-[13px] font-medium text-slate-500",
								children: editingCard ? "Modify forwarder freight tariff, contracted pickup point, and currency." : "Set up forwarder freight tariff for origin pickup load points."
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 219,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 211,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex-1 overflow-y-auto px-5 sm:px-6 py-4 space-y-4 [scrollbar-width:thin]",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1 relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "text-[12px] font-semibold text-slate-600",
										children: ["Forwarder Partner ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-rose-500",
											children: "*"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 231,
											columnNumber: 37
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 230,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: () => setForwarderDropdownOpen((v) => !v),
											className: cn("flex h-11 w-full items-center justify-between rounded-xl border bg-slate-50/60 px-3.5 text-left text-sm sm:text-[13px] font-medium text-slate-900 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none cursor-pointer", errors.forwarderId ? "border-rose-400 bg-rose-50/30" : "border-slate-200"),
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2.5 truncate",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "size-4 text-[#0FA3B1] shrink-0" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 243,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "truncate",
													children: selectedForwarderObj ? `${selectedForwarderObj.name} ${selectedForwarderObj.code ? `(${selectedForwarderObj.code})` : ""}` : "Select Forwarder..."
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 244,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 242,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: cn("size-4 text-slate-400 shrink-0 transition-transform", forwarderDropdownOpen && "rotate-180 text-slate-700") }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 250,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 234,
											columnNumber: 19
										}, this), forwarderDropdownOpen && /* @__PURE__ */ (void 0)("div", {
											className: "absolute top-full left-0 z-30 mt-2 w-full rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl animate-in fade-in zoom-in-95",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "relative mb-2",
												children: [/* @__PURE__ */ (void 0)(Search, { className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-400" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 261,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													value: forwarderSearch,
													onChange: (e) => setForwarderSearch(e.target.value),
													placeholder: "Search forwarder name or code...",
													className: "h-9 w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-8.5 pr-3 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#009EE2] focus:outline-none",
													autoFocus: true
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 262,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 260,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "max-h-48 overflow-y-auto space-y-1 [scrollbar-width:thin]",
												children: filteredForwarders.length === 0 ? /* @__PURE__ */ (void 0)("div", {
													className: "p-3 text-center text-xs text-slate-400",
													children: "No forwarders found"
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 274,
													columnNumber: 27
												}, this) : filteredForwarders.map((fwd) => {
													const isSelected = fwd.id === forwarderId;
													return /* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => {
															setForwarderId(fwd.id);
															setForwarderDropdownOpen(false);
															if (errors.forwarderId) setErrors((prev) => ({
																...prev,
																forwarderId: ""
															}));
														},
														className: cn("flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-colors cursor-pointer", isSelected ? "bg-[#E8F5F6] font-bold text-[#0FA3B1]" : "hover:bg-slate-50 text-slate-800"),
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "min-w-0 pr-2",
															children: [/* @__PURE__ */ (void 0)("p", {
																className: "font-bold truncate",
																children: fwd.name
															}, void 0, false, {
																fileName: _jsxFileName$5,
																lineNumber: 298,
																columnNumber: 35
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-slate-400 truncate",
																children: [
																	fwd.code || "Agent",
																	" ",
																	fwd.email ? `• ${fwd.email}` : ""
																]
															}, void 0, true, {
																fileName: _jsxFileName$5,
																lineNumber: 299,
																columnNumber: 35
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$5,
															lineNumber: 297,
															columnNumber: 33
														}, this), isSelected && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#0FA3B1] shrink-0" }, void 0, false, {
															fileName: _jsxFileName$5,
															lineNumber: 303,
															columnNumber: 48
														}, this)]
													}, fwd.id, true, {
														fileName: _jsxFileName$5,
														lineNumber: 281,
														columnNumber: 31
													}, this);
												})
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 272,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 259,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 233,
										columnNumber: 17
									}, this),
									errors.forwarderId && /* @__PURE__ */ (void 0)("p", {
										className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
										children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 314,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: errors.forwarderId }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 315,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 313,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 229,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "text-[12px] font-semibold text-slate-600",
										children: ["Pickup Point / Facility Location ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-rose-500",
											children: "*"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 323,
											columnNumber: 52
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 322,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											type: "text",
											value: pickupPoint,
											onChange: (e) => {
												setPickupPoint(e.target.value);
												if (errors.pickupPoint) setErrors((prev) => ({
													...prev,
													pickupPoint: ""
												}));
											},
											placeholder: "e.g. Felixstowe Cargo Hub, Gate 4",
											className: cn("h-11 w-full rounded-xl border bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none", errors.pickupPoint ? "border-rose-400 bg-rose-50/30" : "border-slate-200")
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 326,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 325,
										columnNumber: 17
									}, this),
									errors.pickupPoint && /* @__PURE__ */ (void 0)("p", {
										className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
										children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 342,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: errors.pickupPoint }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 343,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 341,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 321,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1 sm:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "text-[12px] font-semibold text-slate-600",
											children: ["Ocean Freight Rate (40HC) ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-rose-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 352,
												columnNumber: 47
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 351,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											type: "number",
											min: "0",
											step: "1",
											value: rate,
											onChange: (e) => {
												setRate(e.target.value);
												if (errors.rate) setErrors((prev) => ({
													...prev,
													rate: ""
												}));
											},
											placeholder: "e.g. 2450",
											className: cn("h-11 w-full rounded-xl border bg-slate-50/60 px-3.5 text-sm sm:text-[13px] font-semibold text-slate-900 placeholder:text-slate-400 transition-all duration-150 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none", errors.rate ? "border-rose-400 bg-rose-50/30" : "border-slate-200")
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 354,
											columnNumber: 19
										}, this),
										errors.rate && /* @__PURE__ */ (void 0)("p", {
											className: "flex items-center gap-1 text-[11px] font-medium text-rose-500 pt-0.5",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3 shrink-0" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 371,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: errors.rate }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 372,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 370,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 350,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "text-[12px] font-semibold text-slate-600",
										children: "Currency"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 378,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
											value: currency,
											onChange: (e) => setCurrency(e.target.value),
											className: "h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 pr-8 text-sm sm:text-[13px] font-bold text-slate-900 hover:bg-white focus:bg-white focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 focus:outline-none cursor-pointer",
											children: CURRENCY_OPTIONS.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
												value: c.value,
												children: [
													c.value,
													" (",
													c.symbol,
													")"
												]
											}, c.value, true, {
												fileName: _jsxFileName$5,
												lineNumber: 386,
												columnNumber: 25
											}, this))
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 380,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 391,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 379,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 377,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 349,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-xl border border-slate-200 bg-slate-50/60 p-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[12px] font-bold text-slate-800",
									children: "Rate Card Status"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 399,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] text-slate-500",
									children: "Active rate cards are automatically matched during booking generation"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 400,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 398,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-1 bg-slate-200/70 p-0.5 rounded-full self-start sm:self-auto",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setStatus("Active"),
										className: cn("rounded-full px-3 py-1 text-[11.5px] font-bold transition-all cursor-pointer", status === "Active" ? "bg-white text-emerald-700 shadow-2xs" : "text-slate-600 hover:text-slate-900"),
										children: "Active"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 405,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setStatus("Inactive"),
										className: cn("rounded-full px-3 py-1 text-[11.5px] font-bold transition-all cursor-pointer", status === "Inactive" ? "bg-white text-slate-800 shadow-2xs" : "text-slate-600 hover:text-slate-900"),
										children: "Inactive"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 417,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 404,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 397,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 227,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-4 sm:p-5 sm:py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2.5 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: onClose,
							className: "h-10 px-4 rounded-full text-[13px] font-semibold text-slate-500 hover:bg-slate-200/60 hover:text-slate-800 transition-colors cursor-pointer",
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 435,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "submit",
							disabled: isSubmitting,
							className: "inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#009EE2] hover:bg-[#0089c7] px-5 sm:px-6 text-[13px] font-bold text-white shadow-md shadow-[#009EE2]/20 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5 stroke-[2.5]" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 447,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: editingCard ? "Save Changes" : "Save Rate Card" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 448,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 442,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 434,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 196,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 175,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 174,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/nashmia/rate-cards/RateCardDetailDrawer.tsx";
function RateCardDetailDrawer({ card, isOpen, onClose, onEdit, onDelete }) {
	if (!isOpen || !card) return null;
	const forwarderName = card.forwarders?.company_name || card.forwarders?.contact_person || "Unassigned Forwarder";
	const forwarderCode = card.forwarders?.code;
	const forwarderBadge = card.forwarders?.badge || "Booking Agent";
	const pickupLocation = card.load_point || card.origin || "Pickup Point";
	const rateVal = card.base_rate || card.rate || 0;
	const currency = card.currency || "USD";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 p-0 sm:p-4 backdrop-blur-sm animate-in fade-in",
		onClick: (e) => {
			if (e.target === e.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "glass-card-strong relative flex max-h-[92vh] w-full max-w-lg flex-col rounded-t-[28px] rounded-b-none sm:rounded-[28px] border-t sm:border border-white/90 bg-white p-0 shadow-2xl animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					"data-swipe-handle": "true",
					className: "mx-auto pt-2 pb-1 flex h-6 w-full max-w-[140px] cursor-grab touch-none items-center justify-center sm:hidden select-none shrink-0 bg-gradient-to-r from-slate-50/90 via-white to-[#E8F1F3]/40",
					"aria-label": "Drag down to dismiss",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 59,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 54,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative border-b border-slate-100/90 bg-gradient-to-r from-slate-50/90 via-white to-[#E8F1F3]/40 p-5 sm:p-6 pb-4 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid size-12 shrink-0 place-items-center rounded-2xl border border-[#6A80A9]/25 bg-white text-[#6A80A9] shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Receipt, { className: "size-6" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 67,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 66,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-[#6A80A9]/10 px-2.5 py-0.5 text-[10.5px] font-bold text-[#6A80A9]",
									children: "RATE CARD DETAILS"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 70,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "text-lg sm:text-xl font-bold text-slate-900 mt-0.5",
									children: pickupLocation
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 73,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-slate-500 font-medium",
									children: forwarderName
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 76,
									columnNumber: 17
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 69,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 65,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: onClose,
							className: "grid size-8 place-items-center rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer",
							title: "Close (Esc)",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 86,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 80,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 64,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 63,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 overflow-y-auto p-6 space-y-5 scrollbar-thin",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl border border-[#6A80A9]/20 bg-[#E8F1F3]/40 p-5 text-center shadow-2xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 block",
								children: "Agreed Freight Rate"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 95,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-1 flex items-baseline justify-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-mono text-[34px] font-extrabold text-slate-900",
									children: [currency === "USD" ? "$" : currency === "GBP" ? "£" : currency === "EUR" ? "€" : `${currency} `, rateVal.toLocaleString()]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 99,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-mono text-sm font-bold text-[#6A80A9]",
									children: [currency, " / Container"]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 109,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 98,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 94,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl border border-slate-200 bg-slate-50/50 p-4 space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 118,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs font-bold text-slate-400 uppercase tracking-wider",
									children: "Pickup Point / Loading Point"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 119,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 117,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-base font-bold text-slate-900 pl-6",
								children: pickupLocation
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 123,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 116,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl border border-slate-200 bg-slate-50/50 p-4 space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "size-4 text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 129,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs font-bold text-slate-400 uppercase tracking-wider",
									children: "Freight Forwarder"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 130,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 128,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pl-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-base font-bold text-slate-900",
										children: forwarderName
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 136,
										columnNumber: 17
									}, this), forwarderCode && /* @__PURE__ */ (void 0)("span", {
										className: "rounded bg-slate-200 px-1.5 py-0.5 font-mono text-[10px] font-bold text-slate-700",
										children: forwarderCode
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 138,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 135,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-slate-500 mt-0.5",
									children: forwarderBadge
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 143,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 134,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 127,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 92,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border-t border-slate-100 px-6 py-4 bg-slate-50/80 flex items-center justify-between shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => {
							onDelete(card.id, `${pickupLocation} - ${forwarderName}`);
							onClose();
						},
						className: "flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 transition-colors cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 158,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete Rate" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 159,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 150,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => {
								onEdit(card);
								onClose();
							},
							className: "flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors shadow-2xs cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 171,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Edit" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 172,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 163,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/new-booking",
							search: { bookingAgentId: card.forwarder_id },
							onClick: onClose,
							className: "flex items-center gap-1.5 rounded-xl bg-black px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-slate-800 transition-all active:scale-95 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 181,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Use In Booking" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 182,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 175,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 162,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 149,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 52,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 44,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/nashmia/rate-cards/RateCardsPage.tsx";
function RateCardsPage({ onOpenMobileMenu }) {
	const { user } = useAuth();
	const queryClient = useQueryClient();
	const { data: rateCards = [], isLoading: isLoadingRates, refetch: refetchRates } = useRealRateCards(user?.id);
	const { data: forwarders = [] } = useRealForwarders(user?.id);
	const [viewMode, setViewMode] = (0, import_react.useState)("table");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedForwarder, setSelectedForwarder] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("recent");
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const [editingCard, setEditingCard] = (0, import_react.useState)(null);
	const [detailCard, setDetailCard] = (0, import_react.useState)(null);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [deleteCandidate, setDeleteCandidate] = (0, import_react.useState)(null);
	const forwardersOptions = (0, import_react.useMemo)(() => {
		return forwarders.map((fwd) => ({
			id: fwd.id,
			name: fwd.name,
			code: fwd.code,
			contact: fwd.contactPerson,
			email: fwd.email
		}));
	}, [forwarders]);
	const filteredRateCards = (0, import_react.useMemo)(() => {
		let result = [...rateCards];
		if (searchQuery.trim()) {
			const q = searchQuery.toLowerCase().trim();
			result = result.filter((card) => {
				const forwarderName = card.forwarders?.company_name || "";
				const forwarderCode = card.forwarders?.code || "";
				return (card.load_point || card.origin || "").toLowerCase().includes(q) || forwarderName.toLowerCase().includes(q) || forwarderCode.toLowerCase().includes(q) || card.notes && card.notes.toLowerCase().includes(q);
			});
		}
		if (selectedForwarder !== "all") result = result.filter((card) => card.forwarder_id === selectedForwarder);
		result.sort((a, b) => {
			const rateA = a.base_rate || a.rate || 0;
			const rateB = b.base_rate || b.rate || 0;
			if (sortBy === "rate-asc") return rateA - rateB;
			if (sortBy === "rate-desc") return rateB - rateA;
			return new Date(b.created_at || "").getTime() - new Date(a.created_at || "").getTime();
		});
		return result;
	}, [
		rateCards,
		searchQuery,
		selectedForwarder,
		sortBy
	]);
	const metrics = (0, import_react.useMemo)(() => {
		const total = rateCards.length;
		const uniqueForwarders = new Set(rateCards.map((r) => r.forwarder_id)).size;
		const ratesList = rateCards.map((r) => r.base_rate || r.rate || 0).filter((r) => r > 0);
		return {
			total,
			uniqueForwarders,
			avgRate: ratesList.length > 0 ? Math.round(ratesList.reduce((a, b) => a + b, 0) / ratesList.length) : 0,
			uniquePickupPoints: new Set(rateCards.map((r) => r.load_point || r.origin)).size
		};
	}, [rateCards]);
	const handleOpenAddModal = () => {
		setEditingCard(null);
		setIsModalOpen(true);
	};
	const handleOpenEditModal = (card) => {
		setEditingCard(card);
		setIsModalOpen(true);
	};
	const handleViewDetails = (card) => {
		setDetailCard(card);
	};
	const handleSaveRateCard = async (values, editingId) => {
		setIsSubmitting(true);
		try {
			if (editingId) {
				await updateRateCardInSupabase(editingId, {
					forwarder_id: values.forwarderId,
					origin: values.origin,
					destination: values.destination,
					load_point: values.loadPoint,
					container_size: values.containerSize,
					container_type: values.containerType,
					quantity: values.quantity,
					base_rate: values.baseRate,
					currency: values.currency,
					valid_from: values.validFrom,
					valid_until: values.validUntil,
					status: values.status,
					notes: values.notes
				});
				toast.success("✓ Rate Card Updated");
			} else {
				await insertRateCardToSupabase({
					forwarder_id: values.forwarderId,
					origin: values.origin,
					destination: values.destination,
					load_point: values.loadPoint,
					container_size: values.containerSize,
					container_type: values.containerType,
					quantity: values.quantity,
					base_rate: values.baseRate,
					currency: values.currency,
					valid_from: values.validFrom,
					valid_until: values.validUntil,
					status: values.status,
					notes: values.notes
				}, user?.id);
				toast.success("✓ Rate Card Added");
			}
			await queryClient.invalidateQueries({ queryKey: queryKeys.rateCards });
			await refetchRates();
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Failed to save rate card";
			toast.error(msg);
			throw err;
		} finally {
			setIsSubmitting(false);
		}
	};
	const handleConfirmDelete = async () => {
		if (!deleteCandidate) return;
		try {
			if (await deleteRateCardFromSupabase(deleteCandidate.id)) {
				toast.success("Rate Card Deleted", { description: deleteCandidate.name });
				await queryClient.invalidateQueries({ queryKey: queryKeys.rateCards });
				await refetchRates();
			} else toast.error("Failed to delete rate card");
		} catch (err) {
			toast.error("Error deleting rate card");
		} finally {
			setDeleteCandidate(null);
		}
	};
	const handleResetFilters = () => {
		setSearchQuery("");
		setSelectedForwarder("all");
		setSortBy("recent");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative z-10 w-full min-w-0 max-w-full space-y-6 text-slate-900 pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start gap-3",
					children: [onOpenMobileMenu && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: onOpenMobileMenu,
						"aria-label": "Toggle navigation menu",
						className: "mt-1 grid size-11 shrink-0 place-items-center rounded-[14px] border border-slate-200/80 bg-white/80 text-black shadow-2xs backdrop-blur-md transition-all hover:bg-white lg:hidden",
						children: /* @__PURE__ */ (void 0)(Menu, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 234,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 228,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6A80A9]",
								children: "DIRECTORY • FINANCIALS"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 239,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "text-[32px] font-semibold tracking-[-0.03em] text-[#000000] sm:text-[38px] lg:text-[40px] leading-tight",
								children: "Rate Cards"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 242,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "max-w-2xl text-[14px] text-slate-500 leading-relaxed",
								children: "Manage agreed pickup points, forwarders and freight rates."
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 245,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 238,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 226,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleOpenAddModal,
						className: "group relative flex h-[50px] items-center gap-2.5 rounded-[14px] bg-[#000000] px-6 text-[14px] font-medium text-[#FFFFFF] shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_16px_36px_rgba(0,0,0,0.26)] active:translate-y-0 active:scale-[0.99] cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4 transition-transform duration-200 group-hover:rotate-90" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 257,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "+ Add Rate Card" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 258,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 252,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 251,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 225,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Receipt, { className: "size-5 stroke-[1.8] text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 269,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 268,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-medium text-slate-800",
									children: "Total"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 272,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-medium text-slate-800",
									children: "Rate Cards"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 273,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 271,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 267,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
								children: metrics.total
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 277,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-semibold text-[#6A80A9] bg-[#E8F1F3] px-2 py-0.5 rounded-md",
								children: "Active Rates"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 280,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 276,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 266,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-5 stroke-[1.8] text-[#6A80A9]" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 290,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 289,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-medium text-slate-800",
									children: "Pickup"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 293,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-medium text-slate-800",
									children: "Points"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 294,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 292,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 288,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
								children: metrics.uniquePickupPoints
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 298,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-medium text-slate-400",
								children: "Locations"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 301,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 297,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 287,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "size-5 stroke-[1.8] text-slate-700" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 309,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 308,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-medium text-slate-800",
									children: "Forwarder"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 312,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-medium text-slate-800",
									children: "Partners"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 313,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 311,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 307,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none",
								children: metrics.uniqueForwarders
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 317,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-medium text-slate-400",
								children: "Linked"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 320,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 316,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 306,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "group relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[145px]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-11 sm:size-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-slate-700 shadow-2xs shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DollarSign, { className: "size-5 stroke-[1.8] text-emerald-600" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 328,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 327,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-medium text-slate-800",
									children: "Average"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 331,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[14px] font-medium text-slate-800",
									children: "Freight Rate"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 332,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 330,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 326,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-none font-mono",
								children: ["$", metrics.avgRate.toLocaleString()]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 336,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md",
								children: "USD / bkg"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 339,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 335,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 325,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 264,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RateCardsToolbar, {
				searchQuery,
				onSearchChange: setSearchQuery,
				selectedForwarder,
				onForwarderChange: setSelectedForwarder,
				forwardersList: forwardersOptions,
				sortBy,
				onSortChange: setSortBy,
				viewMode,
				onViewModeChange: setViewMode,
				onResetFilters: handleResetFilters
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 347,
				columnNumber: 7
			}, this),
			viewMode === "table" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RateCardsTable, {
				rateCards: filteredRateCards,
				onViewDetails: handleViewDetails,
				onEdit: handleOpenEditModal,
				onDelete: (id, name) => setDeleteCandidate({
					id,
					name
				}),
				onAddRateCard: handleOpenAddModal
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 362,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RateCardsGridView, {
				rateCards: filteredRateCards,
				onViewDetails: handleViewDetails,
				onEdit: handleOpenEditModal,
				onDelete: (id, name) => setDeleteCandidate({
					id,
					name
				}),
				onAddRateCard: handleOpenAddModal
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 370,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RateCardModal, {
				isOpen: isModalOpen,
				onClose: () => setIsModalOpen(false),
				onSave: handleSaveRateCard,
				editingCard,
				forwarders: forwardersOptions,
				isSubmitting
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 381,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RateCardDetailDrawer, {
				card: detailCard,
				isOpen: !!detailCard,
				onClose: () => setDetailCard(null),
				onEdit: (c) => {
					setDetailCard(null);
					handleOpenEditModal(c);
				},
				onDelete: (id, name) => setDeleteCandidate({
					id,
					name
				})
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 391,
				columnNumber: 7
			}, this),
			deleteCandidate && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 p-0 sm:p-4 backdrop-blur-sm animate-in fade-in",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "glass-card-strong relative w-full max-w-md rounded-t-[28px] rounded-b-none sm:rounded-[28px] border-t sm:border border-white/90 bg-white p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] outline-none",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							"data-swipe-handle": "true",
							className: "mx-auto -mt-2 mb-3 flex h-6 w-full max-w-[140px] cursor-grab touch-none items-center justify-center sm:hidden select-none",
							"aria-label": "Drag down to dismiss",
							children: /* @__PURE__ */ (void 0)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 412,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 407,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "grid size-12 place-items-center rounded-2xl bg-rose-50 text-rose-600 shadow-2xs shrink-0",
								children: /* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-6" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 417,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 416,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
								className: "text-base font-bold text-slate-900",
								children: "Delete Rate Card?"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 420,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-slate-500",
								children: "This action cannot be undone."
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 421,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 419,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 415,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-700 font-semibold border border-slate-100",
							children: deleteCandidate.name
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 425,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-6 flex items-center justify-end gap-3",
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setDeleteCandidate(null),
								className: "rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer",
								children: "Cancel"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 430,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: handleConfirmDelete,
								className: "rounded-xl bg-rose-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-rose-700 shadow-md transition-colors cursor-pointer",
								children: "Delete Rate Card"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 437,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 429,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 405,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 404,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 223,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/routes/rate-cards.tsx";
var title$5 = "Commercial Rate Cards | Nashmia Industries Logistics Platform";
var description$5 = "Manage agreed freight contracts, ocean container rate benchmarks, and validity windows across global trade corridors.";
var Route$6 = createFileRoute("/rate-cards")({
	head: () => ({ meta: [
		{ title: title$5 },
		{
			name: "description",
			content: description$5
		},
		{
			property: "og:title",
			content: title$5
		},
		{
			property: "og:description",
			content: description$5
		}
	] }),
	component: RateCardsRoute
});
function RateCardsRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, {
		bg: "bg-white",
		children: ({ onOpenMobileMenu }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RateCardsPage, { onOpenMobileMenu }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 24,
			columnNumber: 34
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 23,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$3 = () => import("./requests-Cy0h-U-J.mjs");
var title$4 = "Booking Requests | Nashmia Industries Logistics Desk";
var description$4 = "Review incoming export booking requests, verify ocean carrier rates, allocate equipment, and confirm container schedules with Nashmia Industries.";
var Route$5 = createFileRoute("/requests")({
	head: () => ({ meta: [
		{ title: title$4 },
		{
			name: "description",
			content: description$4
		},
		{
			property: "og:title",
			content: title$4
		},
		{
			property: "og:description",
			content: description$4
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./settings-B1rZwQ6v.mjs");
var title$3 = "Profile & Account Settings | Nashmia Industries Logistics Platform";
var description$3 = "Manage authenticated user credentials, organizational details, security preferences, and Supabase backend status.";
var Route$4 = createFileRoute("/settings")({
	head: () => ({ meta: [
		{ title: title$3 },
		{
			name: "description",
			content: description$3
		},
		{
			property: "og:title",
			content: title$3
		},
		{
			property: "og:description",
			content: description$3
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./signup-40ACqrHs.mjs");
var title$2 = "Create Account | Nashmia Industries Logistics Platform";
var description$2 = "Create your Nashmia Industries logistics operations account to manage container bookings, voyage intelligence, and forwarder directories.";
var Route$3 = createFileRoute("/signup")({
	validateSearch: (search) => {
		return { redirect: typeof search.redirect === "string" ? search.redirect : void 0 };
	},
	head: () => ({ meta: [
		{ title: title$2 },
		{
			name: "description",
			content: description$2
		},
		{
			property: "og:title",
			content: title$2
		},
		{
			property: "og:description",
			content: description$2
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./suppliers-BOCS_TGZ.mjs");
var title$1 = "Suppliers Directory | Nashmia Industries Logistics Platform";
var description$1 = "Manage pickup vendors and their loading locations inside the Nashmia Industries operating system.";
var Route$2 = createFileRoute("/suppliers")({
	head: () => ({ meta: [
		{ title: title$1 },
		{
			name: "description",
			content: description$1
		},
		{
			property: "og:title",
			content: title$1
		},
		{
			property: "og:description",
			content: description$1
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var _jsxFileName$1 = "/app/applet/src/components/nashmia/tracking/ShipmentTrackingSkeleton.tsx";
function ShipmentTrackingSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative flex flex-col min-h-full w-full bg-[#F5F7FA] text-slate-800 antialiased font-sans animate-pulse",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col lg:flex-row flex-1 w-full min-h-0",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
				className: "w-full lg:w-[350px] xl:w-[370px] shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200/90 bg-white p-5 lg:p-6 lg:min-h-full flex flex-col justify-start z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-[18px] border border-slate-200/80 p-3.5 sm:p-4 bg-white shadow-2xs",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-10 rounded-xl bg-slate-200 shrink-0" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 12,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex-1 space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2.5 w-10 bg-slate-200 rounded" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 14,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-28 bg-slate-200 rounded" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 15,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-20 bg-slate-100 rounded" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 16,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 13,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 11,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 10,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-10 w-full rounded-xl bg-slate-100" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 22,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-2.5 w-24 bg-slate-100 rounded" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 23,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 space-y-6 relative pl-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-8 rounded-full bg-slate-200 shrink-0" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 29,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2 flex-1 pt-1",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3.5 w-24 bg-slate-200 rounded" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 31,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 30,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 28,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-8 rounded-full bg-slate-200 shrink-0" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 37,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2.5 flex-1 pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3.5 w-32 bg-slate-200 rounded" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 39,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-44 bg-slate-100 rounded" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 40,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-40 bg-slate-100 rounded" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 41,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-36 bg-slate-100 rounded" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 42,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 38,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 36,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-8 rounded-full bg-slate-200 shrink-0" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 48,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-40 bg-slate-100 rounded italic" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 49,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 47,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-8 rounded-full bg-slate-200 shrink-0" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 54,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2 flex-1 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3.5 w-28 bg-slate-200 rounded" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 56,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-36 bg-slate-100 rounded" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 57,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 55,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 53,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-8 rounded-full bg-slate-200 shrink-0" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 63,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2 flex-1 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3.5 w-28 bg-slate-200 rounded" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 65,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-32 bg-slate-100 rounded" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 66,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 64,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 62,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 26,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 8,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "flex-1 min-w-0 flex flex-col bg-[#F5F7FA]",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative w-full h-[280px] sm:h-[340px] md:h-[380px] bg-slate-200/80 overflow-hidden flex items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 77,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute top-4 left-4 z-20",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm border border-slate-200/90",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "size-3.5 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 82,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-32 bg-slate-200 rounded" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 83,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 81,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 80,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-full bg-white/90 px-4 py-2 shadow-md border border-slate-200 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-3 rounded-full bg-slate-300" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 89,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3.5 w-40 bg-slate-300 rounded" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 90,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 88,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 75,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "px-5 sm:px-8 pt-6 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-6 rounded-full bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 98,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-7 w-48 sm:w-64 bg-slate-200 rounded-lg" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 99,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 97,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-8 rounded-full bg-slate-200" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 103,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-8 w-20 rounded-full bg-slate-200" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 104,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-8 w-24 rounded-full bg-slate-200" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 105,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 102,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 96,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 flex items-center gap-8 border-b border-slate-200 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-24 bg-slate-300 rounded" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 111,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-36 bg-slate-200 rounded" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 112,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 110,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 95,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-5 sm:p-8 space-y-6",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "lg:col-span-8 bg-white rounded-[20px] p-6 border border-slate-200/80 shadow-2xs space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between pb-4 border-b border-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-5 w-40 bg-slate-200 rounded" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 122,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-7 w-52 bg-slate-100 rounded-full" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 123,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 121,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6",
									children: Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-20 bg-slate-200 rounded" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 128,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-36 bg-slate-100 rounded" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 129,
											columnNumber: 23
										}, this)]
									}, i, true, {
										fileName: _jsxFileName$1,
										lineNumber: 127,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 125,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 120,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "lg:col-span-4 bg-white rounded-[20px] p-6 border border-slate-200/80 shadow-2xs space-y-5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-5 w-32 bg-slate-200 rounded pb-2 border-b border-slate-100" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 137,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-4",
									children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-24 bg-slate-200 rounded" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 141,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-32 bg-slate-100 rounded" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 142,
											columnNumber: 23
										}, this)]
									}, i, true, {
										fileName: _jsxFileName$1,
										lineNumber: 140,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 138,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 136,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 118,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 117,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 73,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 6,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/tracking.tsx";
var ShipmentTrackingView = (0, import_react.lazy)(() => import("./ShipmentTrackingView-CPKvaDW0.mjs").then((m) => ({ default: m.ShipmentTrackingView })));
var title = "Track Shipment | Nashmia Industries Logistics Command Center";
var description = "Real-time visual maritime shipment tracking with interactive route corridors, milestone logs, vessel position, and verified transport documents.";
var Route$1 = createFileRoute("/tracking")({
	validateSearch: (search) => ({
		id: search.id || void 0,
		ref: search.ref || void 0,
		container: search.container || void 0
	}),
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		}
	] }),
	component: TrackingPage
});
function TrackingPage() {
	const { id, ref, container } = Route$1.useSearch();
	const targetLookup = id || ref || container || "";
	const { data: detailBooking, isLoading: isDetailLoading } = useRealBookingDetail(id || ref || "", void 0, { enabled: Boolean(id || ref) });
	const { data: allBookings = [], isLoading: isAllLoading } = useRealBookings();
	const booking = (0, import_react.useMemo)(() => {
		if (detailBooking) return detailBooking;
		if (!targetLookup) return allBookings[0] || null;
		const clean = targetLookup.trim().toLowerCase();
		const cleanContainer = (container || "").trim().toLowerCase();
		if (cleanContainer) {
			const match = allBookings.find((b) => b.containers?.some((c) => c.container_number && c.container_number.toLowerCase() === cleanContainer));
			if (match) return match;
		}
		return allBookings.find((b) => b.id.toLowerCase() === clean || b.movement_number && b.movement_number.toLowerCase() === clean || b.booking_reference && b.booking_reference.toLowerCase() === clean || b.reference && b.reference.toLowerCase() === clean || b.containers?.some((c) => c.container_number && c.container_number.toLowerCase() === clean)) || null;
	}, [
		detailBooking,
		allBookings,
		targetLookup,
		container
	]);
	const loading = Boolean(targetLookup) && isDetailLoading || allBookings.length === 0 && isAllLoading;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, {
		bg: "bg-[#F5F7FA]",
		maxWidth: "max-w-[1800px]",
		mainClassName: "p-0",
		children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "w-full min-w-0 max-w-full min-h-[calc(100vh-60px)] min-h-[calc(100dvh-60px)] flex flex-col",
			children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShipmentTrackingSkeleton, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 13
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShipmentTrackingSkeleton, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 33
				}, this),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShipmentTrackingView, {
					booking,
					movementId: targetLookup || booking?.movement_number || booking?.booking_reference || null,
					selectedContainerNumber: container || null,
					isStandalonePage: true,
					onBack: () => {
						if (typeof window !== "undefined") {
							if (window.history.length > 1) window.history.back();
							else window.location.href = `/?selected=${encodeURIComponent(booking?.id || targetLookup)}`;
						}
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 15
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 13
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 86,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 84,
		columnNumber: 5
	}, this);
}
var rootRouteChildren = {
	IndexRoute: Route$13.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$14
	}),
	BuyersRoute: Route$12.update({
		id: "/buyers",
		path: "/buyers",
		getParentRoute: () => Route$14
	}),
	DocumentsRoute: Route$11.update({
		id: "/documents",
		path: "/documents",
		getParentRoute: () => Route$14
	}),
	EmailsRoute: Route$10.update({
		id: "/emails",
		path: "/emails",
		getParentRoute: () => Route$14
	}),
	ForwardersRoute: Route$9.update({
		id: "/forwarders",
		path: "/forwarders",
		getParentRoute: () => Route$14
	}),
	LoginRoute: Route$8.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$14
	}),
	NewBookingRoute: Route$7.update({
		id: "/new-booking",
		path: "/new-booking",
		getParentRoute: () => Route$14
	}),
	RateCardsRoute: Route$6.update({
		id: "/rate-cards",
		path: "/rate-cards",
		getParentRoute: () => Route$14
	}),
	RequestsRoute: Route$5.update({
		id: "/requests",
		path: "/requests",
		getParentRoute: () => Route$14
	}),
	SettingsRoute: Route$4.update({
		id: "/settings",
		path: "/settings",
		getParentRoute: () => Route$14
	}),
	SignupRoute: Route$3.update({
		id: "/signup",
		path: "/signup",
		getParentRoute: () => Route$14
	}),
	SuppliersRoute: Route$2.update({
		id: "/suppliers",
		path: "/suppliers",
		getParentRoute: () => Route$14
	}),
	TrackingRoute: Route$1.update({
		id: "/tracking",
		path: "/tracking",
		getParentRoute: () => Route$14
	})
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({
	createQueryClientInstance: () => createQueryClientInstance,
	getRouter: () => getRouter
});
var browserQueryClient = null;
var createQueryClientInstance = () => {
	return new QueryClient({ defaultOptions: {
		queries: {
			staleTime: 3e5,
			gcTime: 36e5,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: "always",
			structuralSharing: true,
			retry: 1,
			retryDelay: (attemptIndex) => Math.min(1e3 * 2 ** attemptIndex, 15e3)
		},
		mutations: { retry: 1 }
	} });
};
var getRouter = () => {
	const queryClient = typeof window !== "undefined" ? browserQueryClient ??= createQueryClientInstance() : createQueryClientInstance();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadDelay: 0,
		defaultPreloadStaleTime: 6e5
	});
};
//#endregion
export { sendEmailThroughBackend as A, requestRevisionInSupabase as C, fetchEmailsFromSupabase as D, calculateFolderCounts as E, useNotifications as M, useAuth as N, retrySendEmailInSupabase as O, showPillToast as P, mapBookingRecordToRequest as S, calculateEmailStatistics as T, DropdownMenuTrigger as _, ErrorBoundary as a, calculateRequestsStats as b, DialogDescription as c, DialogTitle as d, DropdownMenu as f, DropdownMenuSeparator as g, DropdownMenuLabel as h, useRealRateCards as i, useGmail as j, saveDraftEmailInSupabase as k, DialogFooter as l, DropdownMenuItem as m, ResultSuccessView as n, Dialog as o, DropdownMenuContent as p, AppLayout as r, DialogContent as s, router_exports as t, DialogHeader as u, useSupabaseRealtime as v, __exportAll as w, fetchBookingRequestsFromSupabase as x, approveBookingRequestInSupabase as y };
