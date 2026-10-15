import "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { an as ChevronRight, on as ChevronLeft } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
require_react();
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/nashmia/common/PillPagination.tsx";
function PillPagination({ currentPage, totalPages, onPageChange, totalItems, pageSize, itemName = "records", className = "" }) {
	if (totalPages <= 1 && (!totalItems || totalItems <= (pageSize || 10))) {
		if (!totalItems) return null;
	}
	const getPageNumbers = () => {
		if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
		if (currentPage <= 3) return [
			1,
			2,
			3,
			4,
			5
		];
		if (currentPage >= totalPages - 2) return [
			totalPages - 4,
			totalPages - 3,
			totalPages - 2,
			totalPages - 1,
			totalPages
		];
		return [
			currentPage - 2,
			currentPage - 1,
			currentPage,
			currentPage + 1,
			currentPage + 2
		];
	};
	const pages = getPageNumbers();
	const startRecord = totalItems !== void 0 && pageSize !== void 0 ? Math.min(totalItems, (currentPage - 1) * pageSize + 1) : null;
	const endRecord = totalItems !== void 0 && pageSize !== void 0 ? Math.min(totalItems, currentPage * pageSize) : null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: `flex flex-col sm:flex-row items-center justify-between gap-3.5 pt-2 text-xs text-slate-500 select-none ${className}`,
		children: [startRecord !== null && endRecord !== null && totalItems !== void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "text-[12.5px] text-slate-500 font-normal",
			children: [
				"Showing ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "font-semibold text-slate-700",
					children: startRecord
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 19
				}, this),
				"–",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "font-semibold text-slate-700",
					children: endRecord
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 11
				}, this),
				" of",
				" ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "font-semibold text-slate-700",
					children: totalItems
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 11
				}, this),
				" ",
				itemName
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 9
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 65,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "inline-flex items-center gap-1.5 p-1 rounded-full bg-[#ECEEF1] border border-slate-200/80 shadow-2xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onPageChange(Math.max(1, currentPage - 1)),
					disabled: currentPage <= 1,
					"aria-label": "Previous Page",
					className: "size-7 sm:size-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-white/60 transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "size-4 stroke-[2.2]" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 9
				}, this),
				pages.map((p) => {
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onPageChange(p),
						className: `min-w-7 sm:min-w-8 h-7 sm:h-8 px-2 rounded-full text-[12px] sm:text-[13px] font-medium flex items-center justify-center transition-all cursor-pointer ${p === currentPage ? "bg-[#D8F836] text-slate-900 font-bold shadow-xs border border-lime-400/40" : "border border-slate-300/60 bg-white/50 text-slate-600 hover:bg-white hover:text-slate-900"}`,
						children: p
					}, p, false, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 13
					}, this);
				}),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => onPageChange(Math.min(totalPages, currentPage + 1)),
					disabled: currentPage >= totalPages || totalPages === 0,
					"aria-label": "Next Page",
					className: "size-7 sm:size-8 rounded-full bg-white text-slate-700 shadow-2xs border border-slate-200/90 hover:bg-slate-50 flex items-center justify-center transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "size-4 stroke-[2.2]" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 69,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 54,
		columnNumber: 5
	}, this);
}
//#endregion
export { PillPagination as t };
