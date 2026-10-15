import { o as __toESM } from "../_runtime.mjs";
import { n as supabase } from "./supabase-lbao-IEt.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { cn as Check, ft as LoaderCircle, i as X, l as User, lt as Mail, tn as CircleCheck, xn as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as AuthLayout, r as PasswordInput, t as AuthCard } from "./PasswordInput-C0IxltCy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-40ACqrHs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
function validatePasswordRules(password) {
	const hasMinLength = password.length >= 8;
	const hasUppercase = /[A-Z]/.test(password);
	const hasLowercase = /[a-z]/.test(password);
	const hasNumber = /[0-9]/.test(password);
	const passedCount = [
		hasMinLength,
		hasUppercase,
		hasLowercase,
		hasNumber
	].filter(Boolean).length;
	let strengthLabel = "Too weak";
	let strengthPercent = 0;
	let strengthColor = "bg-slate-200";
	if (password.length > 0) {
		if (passedCount === 1) {
			strengthLabel = "Weak";
			strengthPercent = 25;
			strengthColor = "bg-rose-400";
		} else if (passedCount === 2) {
			strengthLabel = "Fair";
			strengthPercent = 50;
			strengthColor = "bg-amber-400";
		} else if (passedCount === 3) {
			strengthLabel = "Good";
			strengthPercent = 75;
			strengthColor = "bg-[#6A80A9]";
		} else if (passedCount === 4) {
			strengthLabel = "Strong";
			strengthPercent = 100;
			strengthColor = "bg-[#3D5A32]";
		}
	}
	return {
		hasMinLength,
		hasUppercase,
		hasLowercase,
		hasNumber,
		passedCount,
		isComplete: passedCount === 4,
		strengthLabel,
		strengthPercent,
		strengthColor
	};
}
var _jsxFileName$2 = "/app/applet/src/components/auth/PasswordStrengthIndicator.tsx";
function PasswordStrengthIndicator({ password }) {
	const { hasMinLength, hasUppercase, hasLowercase, hasNumber, strengthLabel, strengthPercent, strengthColor } = validatePasswordRules(password);
	const rules = [
		{
			label: "8+ characters",
			valid: hasMinLength
		},
		{
			label: "Uppercase letter",
			valid: hasUppercase
		},
		{
			label: "Lowercase letter",
			valid: hasLowercase
		},
		{
			label: "Number (0-9)",
			valid: hasNumber
		}
	];
	if (!password) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-2 grid grid-cols-2 gap-1.5 pt-1 text-[11.5px] text-slate-400",
		children: rules.map((rule) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-slate-300" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 32,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: rule.label }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 33,
				columnNumber: 13
			}, this)]
		}, rule.label, true, {
			fileName: _jsxFileName$2,
			lineNumber: 31,
			columnNumber: 11
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 29,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-2.5 space-y-2 rounded-[12px] border border-[#6A80A9]/15 bg-[#E8F1F3]/30 p-2.5 backdrop-blur-sm transition-all duration-200",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between text-[11px] font-semibold text-slate-600",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Password strength" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 45,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: cn("font-medium", strengthPercent === 100 ? "text-[#3D5A32]" : "text-slate-500"),
					children: strengthLabel
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 46,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 44,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: cn("h-full transition-all duration-300 ease-out", strengthColor),
					style: { width: `${strengthPercent}%` }
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 56,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 55,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 43,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-2 gap-1.5 pt-1 text-[11.5px]",
			children: rules.map((rule) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: cn("flex items-center gap-1.5 font-medium transition-colors duration-150", rule.valid ? "text-[#2B3B24]" : "text-slate-400"),
				children: [rule.valid ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "grid size-3.5 place-items-center rounded-full bg-[#C7D5BF] text-[#2B3B24]",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-2.5 stroke-[3]" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 75,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 74,
					columnNumber: 15
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "grid size-3.5 place-items-center rounded-full bg-slate-200 text-slate-400",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-2.5 stroke-[2.5]" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 79,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 78,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: rule.label }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 82,
					columnNumber: 13
				}, this)]
			}, rule.label, true, {
				fileName: _jsxFileName$2,
				lineNumber: 66,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 64,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 41,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/auth/SignUpForm.tsx";
function SignUpForm() {
	const navigate = useNavigate();
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const validate = () => {
		const errs = {};
		if (!fullName.trim()) errs.fullName = "Full name is required";
		if (!email.trim()) errs.email = "Email is required";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = "Please enter a valid email address";
		if (!password) errs.password = "Password is required";
		else {
			const { isComplete } = validatePasswordRules(password);
			if (!isComplete) errs.password = "Password must satisfy all strength criteria";
		}
		if (!confirmPassword) errs.confirmPassword = "Confirm password is required";
		else if (password !== confirmPassword) errs.confirmPassword = "Passwords do not match";
		setErrors(errs);
		return Object.keys(errs).length === 0;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;
		setIsLoading(true);
		try {
			const normalizedEmail = email.trim().toLowerCase();
			const trimmedName = fullName.trim();
			const { data, error } = await supabase.auth.signUp({
				email: normalizedEmail,
				password,
				options: { data: { full_name: trimmedName } }
			});
			if (error) {
				setIsLoading(false);
				toast.error("Registration Failed", { description: error.message || "Could not complete account creation. Please try again." });
				return;
			}
			if (data.user) try {
				await supabase.from("profiles").upsert({
					id: data.user.id,
					email: normalizedEmail,
					full_name: trimmedName,
					role: "operations",
					company_name: "Nashmia Industries",
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				});
			} catch (profileErr) {
				console.warn("[SignUp] Profile initial sync note:", profileErr);
			}
			setIsLoading(false);
			setIsSuccess(true);
			if (!data.session && data.user) {
				toast.success("Account Registered", { description: `A confirmation link has been dispatched to ${normalizedEmail}. Please check your inbox to activate your workspace.` });
				setTimeout(() => {
					navigate({ to: "/login" });
				}, 800);
			} else {
				toast.success("Account Created Successfully", { description: `Welcome to Nashmia Logistics, ${trimmedName}!` });
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
			}
		} catch (err) {
			setIsLoading(false);
			toast.error("Sign Up Error", { description: err instanceof Error ? err.message : "An unexpected error occurred." });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthCard, {
		title: "Create your account",
		subtitle: "Start managing your logistics operations",
		footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
			"Already have an account?",
			" ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/login",
				className: "font-semibold text-[#000000] hover:text-[#6A80A9] hover:underline transition-colors",
				children: "Sign in"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 163,
				columnNumber: 11
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 161,
			columnNumber: 9
		}, this),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			onSubmit: handleSubmit,
			className: "space-y-3.5",
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1.5 w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							htmlFor: "signup-name",
							className: "block text-[13px] font-semibold text-[#000000] tracking-tight",
							children: "Full Name"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 175,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, {
									className: "size-4 stroke-[1.8]",
									"aria-hidden": "true"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 183,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 182,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								id: "signup-name",
								type: "text",
								autoComplete: "name",
								value: fullName,
								onChange: (e) => {
									setFullName(e.target.value);
									if (errors.fullName) setErrors((prev) => ({
										...prev,
										fullName: void 0
									}));
								},
								placeholder: "Enter your full name",
								"aria-invalid": errors.fullName ? "true" : "false",
								"aria-describedby": errors.fullName ? "signup-name-error" : void 0,
								className: cn("h-[46px] w-full rounded-[14px] border bg-white/70 pl-10 pr-4 text-[14px] text-[#000000] placeholder:text-slate-400 transition-all duration-200 backdrop-blur-md", "focus:bg-[#E8F1F3]/40 focus:outline-none", errors.fullName ? "border-red-400/80 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.14)]" : "border-slate-200/80 focus:border-[#6A80A9] focus:shadow-[0_0_0_3px_rgba(106,128,169,0.14)]")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 185,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 181,
							columnNumber: 11
						}, this),
						errors.fullName && /* @__PURE__ */ (void 0)("p", {
							id: "signup-name-error",
							className: "text-[11.5px] font-medium text-red-500 animate-in fade-in duration-150",
							children: errors.fullName
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 207,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 174,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1.5 w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							htmlFor: "signup-email",
							className: "block text-[13px] font-semibold text-[#000000] tracking-tight",
							children: "Email"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 218,
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
									lineNumber: 226,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 225,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								id: "signup-email",
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
								"aria-describedby": errors.email ? "signup-email-error" : void 0,
								className: cn("h-[46px] w-full rounded-[14px] border bg-white/70 pl-10 pr-4 text-[14px] text-[#000000] placeholder:text-slate-400 transition-all duration-200 backdrop-blur-md", "focus:bg-[#E8F1F3]/40 focus:outline-none", errors.email ? "border-red-400/80 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.14)]" : "border-slate-200/80 focus:border-[#6A80A9] focus:shadow-[0_0_0_3px_rgba(106,128,169,0.14)]")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 228,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 224,
							columnNumber: 11
						}, this),
						errors.email && /* @__PURE__ */ (void 0)("p", {
							id: "signup-email-error",
							className: "text-[11.5px] font-medium text-red-500 animate-in fade-in duration-150",
							children: errors.email
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 250,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 217,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, {
						id: "signup-password",
						label: "Password",
						autoComplete: "new-password",
						value: password,
						onChange: (e) => {
							setPassword(e.target.value);
							if (errors.password) setErrors((prev) => ({
								...prev,
								password: void 0
							}));
						},
						placeholder: "Create a password",
						error: errors.password
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 261,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordStrengthIndicator, { password }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 274,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 260,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, {
					id: "signup-confirm-password",
					label: "Confirm Password",
					autoComplete: "new-password",
					value: confirmPassword,
					onChange: (e) => {
						setConfirmPassword(e.target.value);
						if (errors.confirmPassword) setErrors((prev) => ({
							...prev,
							confirmPassword: void 0
						}));
					},
					placeholder: "Confirm your password",
					error: errors.confirmPassword
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 278,
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
							lineNumber: 306,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Creating Account..." }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 307,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 305,
							columnNumber: 15
						}, this) : isSuccess ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-4 text-[#C7D5BF]" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 311,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Account Ready" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 312,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 310,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Create Account" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 316,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-4 transition-transform duration-200 group-hover:translate-x-1" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 317,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 315,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 294,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 293,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 172,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 157,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/signup.tsx?tsr-split=component";
function SignupRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignUpForm, {}, void 0, false, {
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
export { SignupRoute as component };
