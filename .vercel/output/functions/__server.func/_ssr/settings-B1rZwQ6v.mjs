import { o as __toESM } from "../_runtime.mjs";
import { n as supabase, r as testSupabaseConnection, t as isSupabaseConfigured } from "./supabase-lbao-IEt.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { B as RefreshCw, Dn as AlarmClock, E as SlidersVertical, Gt as Database, H as Radio, I as Save, Kt as Copy, M as Server, _n as Bell, an as ChevronRight, bt as Key, cn as Check, dt as Lock, j as Settings, l as User, ln as CheckCheck, tt as MessageSquare } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { N as useAuth, P as showPillToast, r as AppLayout } from "./router-BJg2H47m.mjs";
import { n as Input, t as Button } from "./input-BcTzOgX2.mjs";
import { t as Label } from "./label-8xz9aKVd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-B1rZwQ6v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/nashmia/profile/ProfileSettingsPage.tsx";
function ProfileSettingsPage({ onOpenMobileMenu }) {
	const { user: contextUser, profile: contextProfile, refreshProfile: refreshAuthContext, signOut } = useAuth();
	const [user, setUser] = (0, import_react.useState)(contextUser);
	const [profileRecord, setProfileRecord] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [changingPassword, setChangingPassword] = (0, import_react.useState)(false);
	const [copiedId, setCopiedId] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("profile");
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [companyName, setCompanyName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("");
	const [bio, setBio] = (0, import_react.useState)("");
	const [preferredPort, setPreferredPort] = (0, import_react.useState)("Karachi (PKKHI)");
	const [timezone, setTimezone] = (0, import_react.useState)("UTC+05:00 (Pakistan Standard Time)");
	const [currency, setCurrency] = (0, import_react.useState)("USD ($)");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [passwordError, setPasswordError] = (0, import_react.useState)("");
	const [connectionTest, setConnectionTest] = (0, import_react.useState)(null);
	const [testingConnection, setTestingConnection] = (0, import_react.useState)(false);
	const [emailAlerts, setEmailAlerts] = (0, import_react.useState)(true);
	const [bookingUpdates, setBookingUpdates] = (0, import_react.useState)(true);
	const [etaChanges, setEtaChanges] = (0, import_react.useState)(true);
	const [systemAnnouncements, setSystemAnnouncements] = (0, import_react.useState)(false);
	const fetchUserData = (0, import_react.useCallback)(async (showToast = false) => {
		if (!isSupabaseConfigured) {
			setLoading(false);
			return;
		}
		try {
			if (showToast) setRefreshing(true);
			const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
			if (authError || !authUser) {
				setUser(null);
				setProfileRecord(null);
				if (showToast) showPillToast.error(authError?.message || "Please sign in again.", "Auth Session Expired");
				return;
			}
			setUser(authUser);
			const meta = authUser.user_metadata || {};
			setFullName(meta.full_name || contextProfile?.full_name || "");
			setCompanyName(meta.company_name || meta.company || contextProfile?.company_name || "Nashmia Industries");
			setPhone(meta.phone || authUser.phone || "+92 300 1234567");
			setRole(meta.role || contextProfile?.role || "Operations Officer");
			setBio(meta.bio || "Logistics Coordinator overseeing international container bookings and shipment clearances.");
			try {
				const { data: dbProfile, error: dbError } = await supabase.from("profiles").select("*").eq("id", authUser.id).maybeSingle();
				if (!dbError && dbProfile) setProfileRecord(dbProfile);
			} catch (err) {
				console.warn("[ProfileSettingsPage] Profile query note:", err);
			}
			if (showToast) showPillToast.success("Live authentication and Supabase records retrieved.", "Profile Synchronized");
		} catch (err) {
			console.error("[ProfileSettingsPage] Error fetching user profile:", err);
			if (showToast) showPillToast.error(err instanceof Error ? err.message : "Unknown error occurred.", "Failed to load profile");
		} finally {
			setLoading(false);
			setRefreshing(false);
		}
	}, [contextProfile]);
	(0, import_react.useEffect)(() => {
		fetchUserData(false);
	}, [fetchUserData]);
	const handleTestBackend = async () => {
		setTestingConnection(true);
		try {
			const result = await testSupabaseConnection();
			setConnectionTest(result);
			if (result.success) showPillToast.success(`Supabase database ping responded in ${result.latencyMs}ms.`, "Backend Connected Successfully");
			else showPillToast.error(result.message || "Failed to reach Supabase endpoints.", "Backend Connection Issue");
		} catch (err) {
			showPillToast.error(err instanceof Error ? err.message : "Unknown connection error.", "Backend Test Failed");
		} finally {
			setTestingConnection(false);
		}
	};
	const handleCopyUserId = async () => {
		if (!user?.id) return;
		try {
			await navigator.clipboard.writeText(user.id);
			setCopiedId(true);
			showPillToast.info("User ID copied to clipboard", "Copied");
			setTimeout(() => setCopiedId(false), 2e3);
		} catch {
			showPillToast.info("User ID: " + user.id, "User UUID");
		}
	};
	const handleSaveProfile = async (e) => {
		e.preventDefault();
		if (!user) {
			showPillToast.error("You must be signed in to save profile changes.", "Unauthorized");
			return;
		}
		setSaving(true);
		try {
			const updatedMetadata = {
				...user.user_metadata,
				full_name: fullName.trim(),
				company_name: companyName.trim(),
				phone: phone.trim(),
				role: role.trim(),
				bio: bio.trim(),
				preferred_port: preferredPort,
				timezone,
				currency
			};
			const { data: updatedAuth, error: authUpdateError } = await supabase.auth.updateUser({ data: updatedMetadata });
			if (authUpdateError) throw authUpdateError;
			if (updatedAuth.user) setUser(updatedAuth.user);
			try {
				await supabase.from("profiles").upsert({
					id: user.id,
					email: user.email || "",
					full_name: fullName.trim() || user.email?.split("@")[0] || "User",
					company_name: companyName.trim(),
					role: role.trim().toLowerCase(),
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				});
			} catch (dbErr) {
				console.warn("[ProfileSettingsPage] Profile table upsert note:", dbErr);
			}
			await refreshAuthContext();
			showPillToast.success("All user metadata and preferences have been committed to Supabase.", "Profile & Settings Saved");
			fetchUserData(false);
		} catch (err) {
			showPillToast.error(err instanceof Error ? err.message : "Could not update user metadata.", "Save Failed");
		} finally {
			setSaving(false);
		}
	};
	const handleChangePassword = async (e) => {
		e.preventDefault();
		setPasswordError("");
		if (!newPassword) {
			setPasswordError("Please enter a new password.");
			return;
		}
		if (newPassword.length < 6) {
			setPasswordError("Password must be at least 6 characters long.");
			return;
		}
		if (newPassword !== confirmPassword) {
			setPasswordError("Passwords do not match.");
			return;
		}
		setChangingPassword(true);
		try {
			const { error } = await supabase.auth.updateUser({ password: newPassword });
			if (error) throw error;
			showPillToast.success("Your new credentials are active for future logins.", "Password Updated Successfully");
			setNewPassword("");
			setConfirmPassword("");
		} catch (err) {
			showPillToast.error(err instanceof Error ? err.message : "Failed to update password.", "Password Update Failed");
		} finally {
			setChangingPassword(false);
		}
	};
	const displayName = fullName || user?.user_metadata?.full_name || profileRecord?.full_name || (user?.email ? user.email.split("@")[0] : "Nashmia Logistics");
	const userEmail = user?.email || profileRecord?.email || "";
	const userRoleDisplay = role || user?.user_metadata?.role || "Operations";
	const avatarLetter = (displayName[0] || userEmail[0] || "N").toUpperCase();
	const isEmailConfirmed = !!user?.email_confirmed_at;
	const createdAtFormatted = user?.created_at ? new Date(user.created_at).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	}) : "Active member";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		id: "profile-settings-page",
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2",
				children: [onOpenMobileMenu && /* @__PURE__ */ (void 0)("button", {
					type: "button",
					onClick: onOpenMobileMenu,
					className: "grid size-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-2xs hover:bg-slate-50 lg:hidden",
					children: /* @__PURE__ */ (void 0)(SlidersVertical, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 366,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 361,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl",
					children: "Profile & Account Settings"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 369,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 359,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-slate-500",
				children: "Manage your personal credentials, organizational profile, and live Supabase backend connectivity."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 373,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 358,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => void fetchUserData(true),
					disabled: refreshing,
					className: "h-10 gap-2 rounded-xl border-slate-200 bg-white text-slate-700 shadow-2xs hover:bg-slate-50",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: cn("size-4", refreshing && "animate-spin") }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 387,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Sync Supabase" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 388,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 380,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "button",
					onClick: handleSaveProfile,
					disabled: saving,
					className: "h-10 gap-2 rounded-xl bg-[#0FA3B1] text-white shadow-sm hover:bg-[#0d8f9c]",
					children: [saving ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: "size-4 animate-spin" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 397,
						columnNumber: 23
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Save, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 397,
						columnNumber: 71
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Save Changes" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 398,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 391,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 379,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 357,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-1 gap-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-6 lg:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative overflow-hidden rounded-[24px] border border-slate-200/90 bg-white p-6 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-[#0FA3B1] to-[#078A99] text-2xl font-bold text-white shadow-md",
									children: avatarLetter
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 411,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "absolute -bottom-1 -right-1 size-4 rounded-full border-2 border-white bg-emerald-500 shadow-xs",
									title: "Supabase Online"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 414,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 410,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
											className: "truncate text-base font-bold text-slate-900",
											children: displayName
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 421,
											columnNumber: 19
										}, this), isEmailConfirmed && /* @__PURE__ */ (void 0)(CheckCheck, {
											className: "size-4 text-emerald-600",
											title: "Verified Account"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 423,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 420,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "truncate text-xs font-medium text-slate-500",
										children: userEmail
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 426,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-1.5 inline-flex items-center rounded-full bg-[#0FA3B1]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#0FA3B1]",
										children: userRoleDisplay
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 427,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 419,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 409,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-medium",
										children: "Company"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 435,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-slate-800",
										children: companyName
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 436,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 434,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-medium",
										children: "Member Since"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 439,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-slate-800",
										children: createdAtFormatted
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 440,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 438,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-400 font-medium",
										children: "Backend State"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 443,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "inline-flex items-center gap-1 font-semibold text-emerald-600",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-emerald-500 animate-pulse" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 445,
											columnNumber: 19
										}, this), "Connected"]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 444,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 442,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 433,
							columnNumber: 13
						}, this),
						user?.id && /* @__PURE__ */ (void 0)("div", {
							className: "mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 border border-slate-100",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (void 0)("p", {
									className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
									children: "User UUID"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 455,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "font-mono text-[11px] text-slate-700 truncate max-w-[170px]",
									children: user.id
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 458,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 454,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: handleCopyUserId,
								className: "rounded-lg p-1.5 text-slate-400 hover:bg-white hover:text-slate-700 shadow-2xs transition-all",
								title: "Copy User ID",
								children: copiedId ? /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-emerald-600" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 469,
									columnNumber: 21
								}, this) : /* @__PURE__ */ (void 0)(Copy, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 471,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 462,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 453,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 408,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-[24px] border border-slate-200/90 bg-white p-2.5 shadow-sm space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setActiveTab("profile"),
							className: cn("flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all", activeTab === "profile" ? "bg-[#0FA3B1] text-white shadow-xs" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 491,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "General Profile" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 492,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 490,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: cn("size-4 opacity-70", activeTab === "profile" && "text-white") }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 494,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 480,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setActiveTab("security"),
							className: cn("flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all", activeTab === "security" ? "bg-[#0FA3B1] text-white shadow-xs" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 510,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Security & Password" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 511,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 509,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: cn("size-4 opacity-70", activeTab === "security" && "text-white") }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 513,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 499,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setActiveTab("backend"),
							className: cn("flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all", activeTab === "backend" ? "bg-[#0FA3B1] text-white shadow-xs" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Server, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 529,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Backend & Database" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 530,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 528,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: cn("size-4 opacity-70", activeTab === "backend" && "text-white") }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 532,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 518,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setActiveTab("preferences"),
							className: cn("flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all", activeTab === "preferences" ? "bg-[#0FA3B1] text-white shadow-xs" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 548,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Notifications & System" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 549,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 547,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: cn("size-4 opacity-70", activeTab === "preferences" && "text-white") }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 551,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 537,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 479,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 406,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-6 lg:col-span-8",
				children: [
					activeTab === "profile" && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-[24px] border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "border-b border-slate-100 pb-5",
							children: [/* @__PURE__ */ (void 0)("h3", {
								className: "text-lg font-bold text-slate-900",
								children: "Personal Information"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 564,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "mt-0.5 text-xs text-slate-500",
								children: "Update your contact details, operational role, and organization bio."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 565,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 563,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("form", {
							onSubmit: handleSaveProfile,
							className: "mt-6 space-y-5",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 gap-5 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (void 0)(Label, {
												className: "text-xs font-semibold text-slate-700",
												children: "Full Name"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 573,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												value: fullName,
												onChange: (e) => setFullName(e.target.value),
												placeholder: "e.g. Tariq Mansoor",
												className: "h-10 rounded-xl border-slate-200 text-sm focus:border-[#0FA3B1] focus:ring-[#0FA3B1]"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 574,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 572,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1.5",
											children: [
												/* @__PURE__ */ (void 0)(Label, {
													className: "text-xs font-semibold text-slate-700",
													children: "Email Address"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 583,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)(Input, {
													value: userEmail,
													disabled: true,
													className: "h-10 rounded-xl border-slate-200 bg-slate-50 text-sm text-slate-500 cursor-not-allowed"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 584,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "text-[11px] text-slate-400",
													children: "Email address is managed via primary Supabase Auth credentials."
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 589,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 582,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (void 0)(Label, {
												className: "text-xs font-semibold text-slate-700",
												children: "Role / Job Title"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 595,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												value: role,
												onChange: (e) => setRole(e.target.value),
												placeholder: "e.g. Operations Officer",
												className: "h-10 rounded-xl border-slate-200 text-sm"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 596,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 594,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (void 0)(Label, {
												className: "text-xs font-semibold text-slate-700",
												children: "Organization"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 605,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												value: companyName,
												onChange: (e) => setCompanyName(e.target.value),
												placeholder: "e.g. Nashmia Industries",
												className: "h-10 rounded-xl border-slate-200 text-sm"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 606,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 604,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (void 0)(Label, {
												className: "text-xs font-semibold text-slate-700",
												children: "Contact Phone"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 615,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												value: phone,
												onChange: (e) => setPhone(e.target.value),
												placeholder: "e.g. +92 300 9876543",
												className: "h-10 rounded-xl border-slate-200 text-sm"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 616,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 614,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (void 0)(Label, {
												className: "text-xs font-semibold text-slate-700",
												children: "Default Sea Port"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 625,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(Input, {
												value: preferredPort,
												onChange: (e) => setPreferredPort(e.target.value),
												placeholder: "e.g. Karachi (PKKHI) / Port Qasim",
												className: "h-10 rounded-xl border-slate-200 text-sm"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 626,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 624,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 571,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (void 0)(Label, {
										className: "text-xs font-semibold text-slate-700",
										children: "Bio & Role Focus"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 636,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("textarea", {
										value: bio,
										onChange: (e) => setBio(e.target.value),
										rows: 3,
										className: "w-full rounded-xl border border-slate-200 p-3 text-sm text-slate-800 focus:border-[#0FA3B1] focus:outline-none focus:ring-1 focus:ring-[#0FA3B1]",
										placeholder: "Short description of your logistics role..."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 637,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 635,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "flex justify-end gap-3 pt-3 border-t border-slate-100",
									children: /* @__PURE__ */ (void 0)(Button, {
										type: "submit",
										disabled: saving,
										className: "h-10 gap-2 rounded-xl bg-[#0FA3B1] px-5 text-sm font-semibold text-white shadow-sm hover:bg-[#0d8f9c]",
										children: [saving ? /* @__PURE__ */ (void 0)(RefreshCw, { className: "size-4 animate-spin" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 653,
											columnNumber: 23
										}, this) : /* @__PURE__ */ (void 0)(Check, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 655,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Save Profile to Supabase" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 657,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 647,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 646,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 570,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 562,
						columnNumber: 13
					}, this),
					activeTab === "security" && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-[24px] border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "border-b border-slate-100 pb-5",
								children: [/* @__PURE__ */ (void 0)("h3", {
									className: "text-lg font-bold text-slate-900",
									children: "Security & Authentication"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 668,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "mt-0.5 text-xs text-slate-500",
									children: "Update your authentication password and view session security credentials."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 669,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 667,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("form", {
								onSubmit: handleChangePassword,
								className: "mt-6 space-y-5 max-w-lg",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (void 0)(Label, {
											className: "text-xs font-semibold text-slate-700",
											children: "New Password"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 676,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)(Input, {
											type: "password",
											value: newPassword,
											onChange: (e) => setNewPassword(e.target.value),
											placeholder: "Enter new password (min. 6 characters)",
											className: "h-10 rounded-xl border-slate-200 text-sm"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 677,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 675,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (void 0)(Label, {
											className: "text-xs font-semibold text-slate-700",
											children: "Confirm New Password"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 687,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)(Input, {
											type: "password",
											value: confirmPassword,
											onChange: (e) => setConfirmPassword(e.target.value),
											placeholder: "Re-type new password",
											className: "h-10 rounded-xl border-slate-200 text-sm"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 690,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 686,
										columnNumber: 17
									}, this),
									passwordError && /* @__PURE__ */ (void 0)("p", {
										className: "text-xs font-medium text-rose-600",
										children: passwordError
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 700,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)(Button, {
										type: "submit",
										disabled: changingPassword,
										className: "h-10 gap-2 rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800",
										children: [changingPassword ? /* @__PURE__ */ (void 0)(RefreshCw, { className: "size-4 animate-spin" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 709,
											columnNumber: 21
										}, this) : /* @__PURE__ */ (void 0)(Key, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 711,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Update Password" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 713,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 703,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 674,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "mt-8 border-t border-slate-100 pt-6",
								children: [/* @__PURE__ */ (void 0)("h4", {
									className: "text-sm font-bold text-slate-900",
									children: "Session Security"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 718,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "rounded-xl border border-slate-100 bg-slate-50/70 p-3",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "text-[11px] font-medium text-slate-400 uppercase",
											children: "Provider"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 721,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-0.5 text-xs font-bold text-slate-800 capitalize",
											children: user?.app_metadata?.provider || "Supabase Email/Password"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 722,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 720,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "rounded-xl border border-slate-100 bg-slate-50/70 p-3",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "text-[11px] font-medium text-slate-400 uppercase",
											children: "Last Sign-In"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 727,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-0.5 text-xs font-bold text-slate-800",
											children: user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : "Current Active Session"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 728,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 726,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 719,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 717,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 666,
						columnNumber: 13
					}, this),
					activeTab === "backend" && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-[24px] border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-6",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "border-b border-slate-100 pb-5",
								children: [/* @__PURE__ */ (void 0)("h3", {
									className: "text-lg font-bold text-slate-900",
									children: "Supabase Backend & Health"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 743,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "mt-0.5 text-xs text-slate-500",
									children: "Verify real-time database endpoints, table schemas, and API authentication status."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 744,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 742,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 p-4",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "grid size-10 place-items-center rounded-xl bg-emerald-600 text-white shadow-xs",
										children: /* @__PURE__ */ (void 0)(Database, { className: "size-5" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 753,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 752,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
										className: "text-sm font-bold text-emerald-950",
										children: "Supabase Cloud Database Operational"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 756,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-emerald-700",
										children: "All tables (bookings, buyers, suppliers, forwarders, profiles) are synchronized."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 759,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 755,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 751,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)(Button, {
									type: "button",
									variant: "outline",
									onClick: handleTestBackend,
									disabled: testingConnection,
									className: "h-9 gap-1.5 rounded-xl border-emerald-300 bg-white text-xs font-semibold text-emerald-800 shadow-2xs hover:bg-emerald-50",
									children: [/* @__PURE__ */ (void 0)(Radio, { className: cn("size-3.5", testingConnection && "animate-pulse") }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 773,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", { children: testingConnection ? "Pinging..." : "Test Connection" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 774,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 766,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 750,
								columnNumber: 15
							}, this),
							connectionTest && /* @__PURE__ */ (void 0)("div", {
								className: "rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-2",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-xs font-bold text-slate-800",
											children: "Connection Diagnostics"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 782,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: cn("text-xs font-bold px-2 py-0.5 rounded-full", connectionTest.success ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"),
											children: connectionTest.success ? "200 OK" : "Ping Issue"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 783,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 781,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-slate-600",
										children: connectionTest.message
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 794,
										columnNumber: 19
									}, this),
									connectionTest.latencyMs && /* @__PURE__ */ (void 0)("p", {
										className: "text-[11px] font-mono text-slate-500",
										children: [
											"Round-trip Latency: ",
											connectionTest.latencyMs,
											"ms"
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 796,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 780,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (void 0)("h4", {
									className: "text-xs font-bold uppercase tracking-wider text-slate-500",
									children: "Active Database Tables"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 805,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [
										{
											name: "bookings",
											desc: "Container bookings, tracking & voyage records"
										},
										{
											name: "buyers",
											desc: "Consignee directory & destination ports"
										},
										{
											name: "suppliers",
											desc: "Vendors & loading points"
										},
										{
											name: "forwarders",
											desc: "Freight forwarders & rate cards"
										},
										{
											name: "profiles",
											desc: "User identities & permissions"
										},
										{
											name: "booking_events",
											desc: "Realtime tracking lifecycle events"
										}
									].map((table) => /* @__PURE__ */ (void 0)("div", {
										className: "rounded-xl border border-slate-100 bg-white p-3 shadow-2xs hover:border-[#0FA3B1]/40 transition-colors",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-emerald-500" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 822,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "font-mono text-xs font-bold text-slate-900",
												children: ["public.", table.name]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 823,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 821,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-[11.5px] text-slate-500",
											children: table.desc
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 827,
											columnNumber: 23
										}, this)]
									}, table.name, true, {
										fileName: _jsxFileName$1,
										lineNumber: 817,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 808,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 804,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 741,
						columnNumber: 13
					}, this),
					activeTab === "preferences" && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-[24px] border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-6",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "border-b border-slate-100 pb-5",
								children: [/* @__PURE__ */ (void 0)("h3", {
									className: "text-lg font-bold text-slate-900",
									children: "System & Preferences"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 839,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "mt-0.5 text-xs text-slate-500",
									children: "Configure automated logistics alerts and regional display defaults."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 840,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 838,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (void 0)("h4", {
									className: "text-xs font-bold uppercase tracking-wider text-slate-500",
									children: "Notification Triggers"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 846,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-slate-50/50 p-2",
									children: [
										/* @__PURE__ */ (void 0)("label", {
											className: "flex items-center justify-between p-3 cursor-pointer hover:bg-white rounded-xl transition-colors",
											children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
												className: "text-xs font-bold text-slate-900",
												children: "Email Booking Summaries"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 853,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[11.5px] text-slate-500",
												children: "Receive daily PDF logs for scheduled container departures."
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 854,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 852,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "checkbox",
												checked: emailAlerts,
												onChange: (e) => setEmailAlerts(e.target.checked),
												className: "size-4 rounded text-[#0FA3B1] focus:ring-[#0FA3B1]"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 858,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 851,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("label", {
											className: "flex items-center justify-between p-3 cursor-pointer hover:bg-white rounded-xl transition-colors",
											children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
												className: "text-xs font-bold text-slate-900",
												children: "ETA & Vessel Changes"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 868,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[11.5px] text-slate-500",
												children: "Instant notifications when shipping lines adjust estimated arrival times."
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 869,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 867,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "checkbox",
												checked: etaChanges,
												onChange: (e) => setEtaChanges(e.target.checked),
												className: "size-4 rounded text-[#0FA3B1] focus:ring-[#0FA3B1]"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 873,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 866,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("label", {
											className: "flex items-center justify-between p-3 cursor-pointer hover:bg-white rounded-xl transition-colors",
											children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
												className: "text-xs font-bold text-slate-900",
												children: "Realtime Movement Events"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 883,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[11.5px] text-slate-500",
												children: "WebSocket updates for container gate-in and customs clearance."
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 884,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 882,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "checkbox",
												checked: bookingUpdates,
												onChange: (e) => setBookingUpdates(e.target.checked),
												className: "size-4 rounded text-[#0FA3B1] focus:ring-[#0FA3B1]"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 888,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 881,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 850,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 845,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-3 pt-2",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (void 0)("h4", {
										className: "text-xs font-bold uppercase tracking-wider text-slate-500",
										children: "Live Toast Notification Previews (Click to Test)"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 901,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[11px] font-medium text-[#0FA3B1]",
										children: "Interactive Side Notifications"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 904,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 900,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => showPillToast.comment("Ava: “Love this shot!”", "New comment"),
											className: "flex items-center gap-3.5 rounded-full border border-slate-200/90 bg-white/90 p-2.5 pl-3 pr-5 text-left shadow-xs hover:border-blue-300 hover:bg-blue-50/20 hover:shadow-md transition-all active:scale-[0.98]",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "grid size-10 shrink-0 place-items-center rounded-full border border-blue-200/80 bg-blue-50/90 text-blue-500 shadow-[inset_0_1px_2px_rgba(59,130,246,0.1)]",
												children: /* @__PURE__ */ (void 0)(MessageSquare, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 917,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 916,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (void 0)("p", {
													className: "truncate text-xs font-bold text-slate-800",
													children: "New comment"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 920,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "truncate text-[11.5px] text-slate-500",
													children: "Ava: “Love this shot!”"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 921,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 919,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 911,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => showPillToast.reminder("Standup in 15 min", "Reminder"),
											className: "flex items-center gap-3.5 rounded-full border border-slate-200/90 bg-white/90 p-2.5 pl-3 pr-5 text-left shadow-xs hover:border-orange-300 hover:bg-orange-50/20 hover:shadow-md transition-all active:scale-[0.98]",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "grid size-10 shrink-0 place-items-center rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-500 shadow-[inset_0_1px_2px_rgba(249,115,22,0.1)]",
												children: /* @__PURE__ */ (void 0)(AlarmClock, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 934,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 933,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (void 0)("p", {
													className: "truncate text-xs font-bold text-slate-800",
													children: "Reminder"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 937,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "truncate text-[11.5px] text-slate-500",
													children: "Standup in 15 min"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 938,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 936,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 928,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => showPillToast.build("v1.4.3 deployed", "Build Complete"),
											className: "flex items-center gap-3.5 rounded-full border border-slate-200/90 bg-white/90 p-2.5 pl-3 pr-5 text-left shadow-xs hover:border-purple-300 hover:bg-purple-50/20 hover:shadow-md transition-all active:scale-[0.98]",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "grid size-10 shrink-0 place-items-center rounded-full border border-purple-200/80 bg-purple-50/90 text-purple-500 shadow-[inset_0_1px_2px_rgba(168,85,247,0.1)]",
												children: /* @__PURE__ */ (void 0)(Settings, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 949,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 948,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (void 0)("p", {
													className: "truncate text-xs font-bold text-slate-800",
													children: "Build Complete"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 952,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "truncate text-[11.5px] text-slate-500",
													children: "v1.4.3 deployed"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 953,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 951,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 943,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => showPillToast.mention("@you in #design", "Mention"),
											className: "flex items-center gap-3.5 rounded-full border border-slate-200/90 bg-white/90 p-2.5 pl-3 pr-5 text-left shadow-xs hover:border-amber-300 hover:bg-amber-50/20 hover:shadow-md transition-all active:scale-[0.98]",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "grid size-10 shrink-0 place-items-center rounded-full border border-amber-200/80 bg-amber-50/90 text-amber-500 shadow-[inset_0_1px_2px_rgba(245,158,11,0.1)]",
												children: /* @__PURE__ */ (void 0)(Bell, { className: "size-4.5 stroke-[1.8]" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 964,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 963,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (void 0)("p", {
													className: "truncate text-xs font-bold text-slate-800",
													children: "Mention"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 967,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "truncate text-[11.5px] text-slate-500",
													children: "@you in #design"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 968,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 966,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 958,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 909,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 899,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (void 0)(Label, {
										className: "text-xs font-semibold text-slate-700",
										children: "Display Timezone"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 976,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(Input, {
										value: timezone,
										onChange: (e) => setTimezone(e.target.value),
										className: "h-10 rounded-xl border-slate-200 text-sm"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 977,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 975,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (void 0)(Label, {
										className: "text-xs font-semibold text-slate-700",
										children: "Operational Currency"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 984,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(Input, {
										value: currency,
										onChange: (e) => setCurrency(e.target.value),
										className: "h-10 rounded-xl border-slate-200 text-sm"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 987,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 983,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 974,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "flex justify-end pt-3 border-t border-slate-100",
								children: /* @__PURE__ */ (void 0)(Button, {
									type: "button",
									onClick: handleSaveProfile,
									disabled: saving,
									className: "h-10 gap-2 rounded-xl bg-[#0FA3B1] px-5 text-sm font-semibold text-white shadow-sm hover:bg-[#0d8f9c]",
									children: [/* @__PURE__ */ (void 0)(Save, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1002,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", { children: "Save Preferences" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 1003,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 996,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 995,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 837,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 559,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 404,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 355,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/settings.tsx?tsr-split=component";
function SettingsRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, { children: ({ onOpenMobileMenu }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileSettingsPage, { onOpenMobileMenu }, void 0, false, {
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
export { SettingsRoute as component };
