import { o as __toESM } from "../_runtime.mjs";
import { n as supabase } from "./supabase-lbao-IEt.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { ft as LoaderCircle, lt as Mail, tn as CircleCheck, xn as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as AuthLayout, r as PasswordInput, t as AuthCard } from "./PasswordInput-C0IxltCy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-A_AfAlMb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/auth/SignInForm.tsx";
function SignInForm() {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [rememberMe, setRememberMe] = (0, import_react.useState)(true);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const validate = () => {
		const errs = {};
		if (!email.trim()) errs.email = "Email is required";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = "Please enter a valid email address";
		if (!password) errs.password = "Password is required";
		setErrors(errs);
		return Object.keys(errs).length === 0;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;
		setIsLoading(true);
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: email.trim().toLowerCase(),
				password
			});
			if (error) {
				setIsLoading(false);
				toast.error("Sign In Failed", { description: error.message || "Invalid login credentials. Please check your email and password." });
				return;
			}
			setIsLoading(false);
			setIsSuccess(true);
			toast.success("Welcome back to Nashmia Logistics", { description: `Signed in as ${data.user?.email || email}` });
			let targetUrl = "/";
			try {
				if (typeof window !== "undefined") {
					const redirectParam = new URLSearchParams(window.location.search).get("redirect");
					if (redirectParam && redirectParam.startsWith("/") && !redirectParam.startsWith("/login") && !redirectParam.startsWith("/signup")) targetUrl = redirectParam;
				}
			} catch {
				targetUrl = "/";
			}
			setTimeout(() => {
				navigate({ to: targetUrl });
			}, 400);
		} catch (err) {
			setIsLoading(false);
			toast.error("Sign In Error", { description: err instanceof Error ? err.message : "An unexpected error occurred." });
		}
	};
	const handleForgotPassword = async (e) => {
		e.preventDefault();
		if (!email.trim()) {
			toast.info("Password Reset", { description: "Please enter your email address above to receive password reset instructions." });
			return;
		}
		try {
			const { error } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), { redirectTo: `${window.location.origin}/login` });
			if (error) toast.error("Reset Failed", { description: error.message });
			else toast.success("Password Reset Email Sent", { description: `A password reset link has been dispatched to ${email}.` });
		} catch (err) {
			toast.error("Reset Error", { description: err instanceof Error ? err.message : "Failed to send reset link." });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthCard, {
		title: "Welcome back",
		subtitle: "Sign in to your logistics workspace",
		footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
			"Don't have an account?",
			" ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/signup",
				className: "font-semibold text-[#000000] hover:text-[#6A80A9] hover:underline transition-colors",
				children: "Create one"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 132,
				columnNumber: 11
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 130,
			columnNumber: 9
		}, this),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			onSubmit: handleSubmit,
			className: "space-y-4",
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1.5 w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							htmlFor: "signin-email",
							className: "block text-[13px] font-semibold text-[#000000] tracking-tight",
							children: "Email"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 144,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, {
									className: "size-4 stroke-[1.8]",
									"aria-hidden": "true"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 152,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 151,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								id: "signin-email",
								type: "email",
								autoComplete: "email",
								value: email,
								onChange: (e) => {
									setEmail(e.target.value);
									if (errors.email) setErrors((prev) => ({
										...prev,
										email: void 0
									}));
								},
								placeholder: "Enter your email",
								"aria-invalid": errors.email ? "true" : "false",
								"aria-describedby": errors.email ? "signin-email-error" : void 0,
								className: cn("h-[46px] w-full rounded-[14px] border bg-white/70 pl-10 pr-4 text-[14px] text-[#000000] placeholder:text-slate-400 transition-all duration-200 backdrop-blur-md", "focus:bg-[#E8F1F3]/40 focus:outline-none", errors.email ? "border-red-400/80 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.14)]" : "border-slate-200/80 focus:border-[#6A80A9] focus:shadow-[0_0_0_3px_rgba(106,128,169,0.14)]")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 154,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 150,
							columnNumber: 11
						}, this),
						errors.email && /* @__PURE__ */ (void 0)("p", {
							id: "signin-email-error",
							className: "text-[11.5px] font-medium text-red-500 animate-in fade-in duration-150",
							children: errors.email
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 176,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 143,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, {
					id: "signin-password",
					label: "Password",
					autoComplete: "current-password",
					value: password,
					onChange: (e) => {
						setPassword(e.target.value);
						if (errors.password) setErrors((prev) => ({
							...prev,
							password: void 0
						}));
					},
					placeholder: "Enter your password",
					error: errors.password
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 186,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "flex cursor-pointer items-center gap-2 select-none",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							type: "checkbox",
							checked: rememberMe,
							onChange: (e) => setRememberMe(e.target.checked),
							className: "size-4 rounded-[5px] border-slate-300 text-[#000000] accent-black focus:ring-[#6A80A9]/30"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 202,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[13px] font-medium text-slate-600",
							children: "Remember me"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 208,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 201,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleForgotPassword,
						className: "text-[12.5px] font-semibold text-slate-600 hover:text-[#000000] hover:underline transition-colors",
						children: "Forgot password?"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 211,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 200,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "pt-2",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "submit",
						disabled: isLoading || isSuccess,
						className: cn("group relative flex h-[50px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#000000] px-6 text-[14.5px] font-bold text-[#FFFFFF] shadow-[0_10px_28px_rgba(0,0,0,0.16)] transition-all duration-200", "hover:bg-slate-900 hover:scale-[1.01] active:scale-[0.99]", "focus:outline-none focus-visible:ring-4 focus-visible:ring-black/20", "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"),
						children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 234,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Signing in..." }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 235,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 233,
							columnNumber: 15
						}, this) : isSuccess ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-4 text-[#C7D5BF]" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 239,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Verified" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 240,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 238,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Sign In" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 244,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-4 transition-transform duration-200 group-hover:translate-x-1" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 245,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 243,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 222,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 221,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 141,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 126,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/login.tsx?tsr-split=component";
function LoginRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignInForm, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 4,
		columnNumber: 10
	}, this);
}
//#endregion
export { LoginRoute as component };
