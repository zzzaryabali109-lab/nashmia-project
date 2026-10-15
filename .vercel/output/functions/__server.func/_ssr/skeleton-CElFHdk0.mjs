import "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
require_react();
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/ui/skeleton.tsx";
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("rounded-md bg-slate-200/70 animate-skeleton-shimmer dark:bg-slate-800", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
//#endregion
export { Skeleton as t };
