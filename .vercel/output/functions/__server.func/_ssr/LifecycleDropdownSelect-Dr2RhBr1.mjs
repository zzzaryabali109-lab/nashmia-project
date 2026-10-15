import "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { cn as Check, sn as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as DropdownMenuTrigger, f as DropdownMenu, m as DropdownMenuItem, p as DropdownMenuContent } from "./router-BJg2H47m.mjs";
require_react();
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/nashmia/common/LifecycleDropdownSelect.tsx";
function LifecycleDropdownSelect({ value, onChange, options, placeholder = "Select...", label, icon, className, triggerClassName, contentClassName, align = "start", activeColor = "teal", size = "md", disabled = false }) {
	const normalizedOptions = options.map((opt) => {
		if (typeof opt === "string") return {
			value: opt,
			label: opt
		};
		return opt;
	});
	const selectedOption = normalizedOptions.find((opt) => opt.value === value);
	const displayLabel = selectedOption ? selectedOption.label : placeholder;
	const isSelectedActive = value && value !== "all" && value !== "";
	const sizeClasses = {
		sm: "h-8.5 px-3 text-xs rounded-xl",
		md: "h-[40px] px-3.5 text-[13px] rounded-xl",
		lg: "h-[44px] px-4 text-[13.5px] rounded-xl"
	};
	const activeColorMap = {
		teal: {
			activeBorder: "border-[#0FA3B1]/40 bg-[#E8F5F6] text-[#0FA3B1]",
			checkColor: "text-[#0FA3B1]"
		},
		blue: {
			activeBorder: "border-blue-300 bg-blue-50/80 text-blue-700",
			checkColor: "text-blue-600"
		},
		slate: {
			activeBorder: "border-slate-300 bg-slate-100 text-slate-900",
			checkColor: "text-slate-800"
		}
	};
	const activeConfig = activeColorMap[activeColor] || activeColorMap.teal;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("flex flex-col gap-1", className),
		children: [label && /* @__PURE__ */ (void 0)("label", {
			className: "text-[11.5px] font-medium text-slate-500 flex items-center gap-1",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 87,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
			asChild: true,
			disabled,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				className: cn("inline-flex items-center justify-between gap-2 border font-semibold transition-all duration-200 cursor-pointer select-none", sizeClasses[size], isSelectedActive ? activeConfig.activeBorder : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-2xs", disabled && "opacity-50 cursor-not-allowed pointer-events-none", triggerClassName),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 min-w-0 truncate",
					children: [icon && /* @__PURE__ */ (void 0)("span", {
						className: "shrink-0 text-slate-400",
						children: icon
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 24
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "truncate",
						children: displayLabel
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 shrink-0 opacity-50 ml-1.5" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 94,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 93,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
			align,
			className: cn("w-56 max-h-[300px] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl z-50", contentClassName),
			children: normalizedOptions.map((opt) => {
				const isMatch = opt.value === value;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
					onClick: () => onChange(opt.value),
					className: cn("flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-[13px] font-medium transition-colors", isMatch ? "bg-slate-100 text-slate-900 font-semibold" : "text-slate-700 hover:bg-slate-50"),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 min-w-0 truncate",
						children: [opt.icon && /* @__PURE__ */ (void 0)("span", {
							className: "shrink-0",
							children: opt.icon
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 32
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "truncate",
							children: opt.label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 136,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1.5 ml-2 shrink-0",
						children: [opt.badge, isMatch && /* @__PURE__ */ (void 0)(Check, { className: cn("size-4", activeConfig.checkColor) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 31
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 138,
						columnNumber: 17
					}, this)]
				}, opt.value, true, {
					fileName: _jsxFileName,
					lineNumber: 124,
					columnNumber: 15
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 114,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 92,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 85,
		columnNumber: 5
	}, this);
}
//#endregion
export { LifecycleDropdownSelect as t };
