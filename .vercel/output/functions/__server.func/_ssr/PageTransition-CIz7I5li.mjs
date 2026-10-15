import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/PageTransition-CIz7I5li.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/common/PageTransition.tsx";
/**
* Linear-style Instant Page Transition
* - Fast, subtle crossfade (180ms)
* - Minimal 4-6px upward movement on entry
* - Smooth ease-out easing (0.16, 1, 0.3, 1)
* - Zero delay: starts immediately with component mount
* - No full-screen white overlay or center text
* - Zero flickering, zero layout shifts
* - Non-blocking: avoids freezing the navbar/sidebar
* - Respects prefers-reduced-motion accessibility
*/
function PageTransition({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: `w-full min-w-0 max-w-full ${className}`.trim(),
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 10
	}, this);
}
function PageTransitionProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 10
	}, this);
}
//#endregion
export { PageTransitionProvider as n, cn as r, PageTransition as t };
