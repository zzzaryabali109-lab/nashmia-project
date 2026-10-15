import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-swipe-to-dismiss-DDttoUG9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function isScrollableNode(node) {
	if (!node || node === document.body || node === document.documentElement) return false;
	try {
		const overflowY = window.getComputedStyle(node).overflowY;
		return (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") && node.scrollHeight > node.clientHeight + 1;
	} catch {
		return false;
	}
}
function hasScrolledParent(target, boundary) {
	let curr = target;
	while (curr && curr !== boundary && curr !== document.body) {
		if (isScrollableNode(curr) && curr.scrollTop > 1) return true;
		curr = curr.parentElement;
	}
	if (boundary && isScrollableNode(boundary) && boundary.scrollTop > 1) return true;
	return false;
}
function useSwipeToDismiss({ onDismiss, direction = "down", threshold = 65, velocityThreshold = .35, enabled = true, onDragProgress, onlyHandle = false }) {
	const elementRef = (0, import_react.useRef)(null);
	const handleRef = (0, import_react.useRef)(null);
	const isDraggingRef = (0, import_react.useRef)(false);
	const startPosRef = (0, import_react.useRef)(null);
	const lastPosRef = (0, import_react.useRef)(null);
	const currentDeltaRef = (0, import_react.useRef)(0);
	const isDirectHandleTouchRef = (0, import_react.useRef)(false);
	const isEligibleForDragRef = (0, import_react.useRef)(false);
	const rafIdRef = (0, import_react.useRef)(null);
	const resetTransform = (0, import_react.useCallback)((animate = true) => {
		if (rafIdRef.current !== null) {
			cancelAnimationFrame(rafIdRef.current);
			rafIdRef.current = null;
		}
		const el = elementRef.current;
		if (!el) return;
		if (animate) el.style.transition = "transform 200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease-out";
		else el.style.transition = "none";
		el.style.transform = "";
		currentDeltaRef.current = 0;
		onDragProgress?.(0);
	}, [onDragProgress]);
	const applyTransform = (0, import_react.useCallback)((delta) => {
		if (!elementRef.current) return;
		if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
		rafIdRef.current = requestAnimationFrame(() => {
			rafIdRef.current = null;
			const targetEl = elementRef.current;
			if (!targetEl) return;
			targetEl.style.transition = "none";
			if (direction === "down") {
				const clampedY = Math.max(0, delta);
				targetEl.style.transform = `translate3d(0, ${clampedY}px, 0)`;
			} else if (direction === "right") {
				const clampedX = Math.max(0, delta);
				targetEl.style.transform = `translate3d(${clampedX}px, 0, 0)`;
			} else if (direction === "left") {
				const clampedX = Math.min(0, delta);
				targetEl.style.transform = `translate3d(${clampedX}px, 0, 0)`;
			}
			currentDeltaRef.current = delta;
			onDragProgress?.(Math.min(1, Math.abs(delta) / 220));
		});
	}, [direction, onDragProgress]);
	const triggerDismissAnimation = (0, import_react.useCallback)(() => {
		const el = elementRef.current;
		if (!el) {
			onDismiss();
			return;
		}
		el.style.transition = "transform 200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease-out";
		if (direction === "down") el.style.transform = "translate3d(0, 100%, 0)";
		else if (direction === "right") el.style.transform = "translate3d(100%, 0, 0)";
		else if (direction === "left") el.style.transform = "translate3d(-100%, 0, 0)";
		el.style.opacity = "0.6";
		setTimeout(() => {
			onDismiss();
			if (elementRef.current) {
				elementRef.current.style.transform = "";
				elementRef.current.style.transition = "";
				elementRef.current.style.opacity = "";
			}
		}, 190);
	}, [direction, onDismiss]);
	(0, import_react.useEffect)(() => {
		const el = elementRef.current;
		if (!el || !enabled) return;
		const onStart = (clientX, clientY, target) => {
			const isHandle = handleRef.current?.contains(target) || Boolean(target.closest("[data-swipe-handle]")) || Boolean(target.getAttribute("data-swipe-handle"));
			if (Boolean(target.closest("input, textarea, select, [contenteditable='true'], [role='combobox'], [role='slider'], button, a, [data-prevent-swipe]")) && !isHandle) {
				isEligibleForDragRef.current = false;
				return;
			}
			if (onlyHandle && !isHandle) {
				isEligibleForDragRef.current = false;
				return;
			}
			const isScrolledDown = hasScrolledParent(target, el);
			if (isScrolledDown && !isHandle) {
				isEligibleForDragRef.current = false;
				return;
			}
			isDirectHandleTouchRef.current = Boolean(isHandle);
			isEligibleForDragRef.current = Boolean(isHandle || !isScrolledDown);
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
			if (!startPosRef.current) return;
			const deltaX = clientX - startPosRef.current.x;
			const deltaY = clientY - startPosRef.current.y;
			lastPosRef.current = {
				x: clientX,
				y: clientY,
				time: Date.now()
			};
			if (!isDraggingRef.current) {
				if (isDirectHandleTouchRef.current) {
					if (direction === "down" && deltaY > 1) isDraggingRef.current = true;
					else if (direction === "right" && deltaX > 1) isDraggingRef.current = true;
					else if (direction === "left" && deltaX < -1) isDraggingRef.current = true;
				} else if (isEligibleForDragRef.current && el.scrollTop <= 2) {
					if (direction === "down") {
						if (deltaY > 5 && Math.abs(deltaY) > Math.abs(deltaX) * 1.1) isDraggingRef.current = true;
					} else if (direction === "right") {
						if (deltaX > 5 && Math.abs(deltaX) > Math.abs(deltaY) * 1.1) isDraggingRef.current = true;
					} else if (direction === "left") {
						if (deltaX < -5 && Math.abs(deltaX) > Math.abs(deltaY) * 1.1) isDraggingRef.current = true;
					}
				}
			}
			if (isDraggingRef.current) {
				if (direction === "down" && deltaY > 0) {
					if (cancelable) preventDefault();
					applyTransform(deltaY * (deltaY > threshold ? .88 : 1));
				} else if (direction === "right" && deltaX > 0) {
					if (cancelable) preventDefault();
					applyTransform(deltaX);
				} else if (direction === "left" && deltaX < 0) {
					if (cancelable) preventDefault();
					applyTransform(deltaX);
				}
			}
		};
		const onEnd = () => {
			if (!startPosRef.current || !lastPosRef.current) return;
			const deltaY = lastPosRef.current.y - startPosRef.current.y;
			const deltaX = lastPosRef.current.x - startPosRef.current.x;
			const duration = Math.max(1, lastPosRef.current.time - startPosRef.current.time);
			const velocityY = deltaY / duration;
			const velocityX = deltaX / duration;
			if (isDraggingRef.current) {
				let shouldDismiss = false;
				if (direction === "down") shouldDismiss = deltaY >= threshold || velocityY >= velocityThreshold;
				else if (direction === "right") shouldDismiss = deltaX >= threshold || velocityX >= velocityThreshold;
				else if (direction === "left") shouldDismiss = deltaX <= -threshold || velocityX <= -velocityThreshold;
				if (shouldDismiss) triggerDismissAnimation();
				else resetTransform(true);
			}
			isDraggingRef.current = false;
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
			if (handleRef.current?.contains(target) || Boolean(target.closest("[data-swipe-handle]"))) {
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
		direction,
		threshold,
		velocityThreshold,
		applyTransform,
		resetTransform,
		triggerDismissAnimation,
		onlyHandle
	]);
	return {
		elementRef,
		handleRef
	};
}
//#endregion
export { useSwipeToDismiss as t };
