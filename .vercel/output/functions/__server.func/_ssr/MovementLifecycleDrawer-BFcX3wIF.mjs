import { o as __toESM, r as __exportAll } from "../_runtime.mjs";
import { n as supabase, t as isSupabaseConfigured } from "./supabase-lbao-IEt.mjs";
import { Ht as updateLocalBooking, J as addBookingEventInSupabase, Lt as toDbMovementStatus, Mt as saveCutOffsForMovement, Pt as saveLocalBookings, St as isBookingConfirmed, Z as deleteBookingContainerFromSupabase, _t as insertBookingContainerInSupabase, dt as getCutOffsForMovement, ft as getLifecycleStageConfig, gt as getStageStepIndex, mt as getNextLifecycleStage, pt as getLocalBookings, q as LIFECYCLE_STAGES, tt as fetchBookingByIdFromSupabase, zt as updateBookingStatusInSupabase } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { l as require_react_dom, u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as startContainerTracking } from "./ssr.mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { B as RefreshCw, En as Anchor, H as Radio, It as FileCheckCorner, K as Phone, Kt as Copy, Lt as Eye, N as Send, O as Ship, Ut as Download, W as Plus, Xt as ClipboardList, Y as Paperclip, Yt as Clock, Z as PackageCheck, an as ChevronRight, c as Users, cn as Check, ct as MapPin, dn as Building2, i as X, jt as FileText, l as User, ln as CheckCheck, m as Truck, o as Waves, pn as Box, q as Pen, qt as Container, s as Warehouse, tn as CircleCheck, un as Calendar, v as Trash2, xn as ArrowRight, y as Timer, yn as BadgeCheck, zt as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as useSwipeToDismiss } from "./use-swipe-to-dismiss-DDttoUG9.mjs";
import { i as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { N as useAuth, v as useSupabaseRealtime, w as __exportAll$1 } from "./router-BJg2H47m.mjs";
import { t as LifecycleDropdownSelect } from "./LifecycleDropdownSelect-Dr2RhBr1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MovementLifecycleDrawer-BFcX3wIF.js
var MovementLifecycleDrawer_BFcX3wIF_exports = /* @__PURE__ */ __exportAll({
	n: () => MovementLifecycleDrawer_exports,
	t: () => MovementLifecycleDrawer
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var MovementLifecycleDrawer_exports = /* @__PURE__ */ __exportAll$1({
	MovementLifecycleDrawer: () => MovementLifecycleDrawer,
	MovementLifecycleModal: () => MovementLifecycleDrawer
});
var _jsxFileName = "/app/applet/src/components/nashmia/movements/MovementLifecycleDrawer.tsx";
var iconMap = {
	ClipboardList,
	BadgeCheck,
	Warehouse,
	PackageCheck,
	FileCheck2: FileCheckCorner,
	Truck,
	Ship,
	Anchor,
	CheckCircle2: CircleCheck
};
function MovementLifecycleDrawer({ isOpen, onClose, bookingId, initialReference, initialBooking, onMovementUpdated }) {
	const { userId, isConfigured, organizationId } = useAuth();
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const [booking, setBooking] = (0, import_react.useState)(() => initialBooking || null);
	const [containers, setContainers] = (0, import_react.useState)(() => initialBooking?.containers || []);
	const [events, setEvents] = (0, import_react.useState)(() => initialBooking?.events || []);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [isUpdating, setIsUpdating] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [copiedRef, setCopiedRef] = (0, import_react.useState)(false);
	const { elementRef: sheetElementRef, handleRef: sheetHandleRef } = useSwipeToDismiss({
		direction: "down",
		onDismiss: onClose,
		enabled: isOpen
	});
	const [advanceNotes, setAdvanceNotes] = (0, import_react.useState)("");
	const [advanceLocation, setAdvanceLocation] = (0, import_react.useState)("");
	const [editingContainerId, setEditingContainerId] = (0, import_react.useState)(null);
	const [editContainerNum, setEditContainerNum] = (0, import_react.useState)("");
	const [editSealNum, setEditSealNum] = (0, import_react.useState)("");
	const [editWeight, setEditWeight] = (0, import_react.useState)("");
	const [editStatus, setEditStatus] = (0, import_react.useState)("Allocated");
	const [showAddContainer, setShowAddContainer] = (0, import_react.useState)(false);
	const [newContainerNum, setNewContainerNum] = (0, import_react.useState)("");
	const [newSealNum, setNewSealNum] = (0, import_react.useState)("");
	const [newWeight, setNewWeight] = (0, import_react.useState)("24500");
	const [newSize, setNewSize] = (0, import_react.useState)("40HC");
	const [newType, setNewType] = (0, import_react.useState)("High Cube");
	const [isAddingContainer, setIsAddingContainer] = (0, import_react.useState)(false);
	const [trackingLoadingId, setTrackingLoadingId] = (0, import_react.useState)(null);
	const [customEventText, setCustomEventText] = (0, import_react.useState)("");
	const [customEventLocation, setCustomEventLocation] = (0, import_react.useState)("");
	const [movementCutOffs, setMovementCutOffs] = (0, import_react.useState)(() => getCutOffsForMovement(initialReference || "NASH-2026-0042", initialBooking || null));
	const [showAddCutOff, setShowAddCutOff] = (0, import_react.useState)(false);
	const [newCutOffType, setNewCutOffType] = (0, import_react.useState)("SI Cut-Off");
	const [newCutOffDateTime, setNewCutOffDateTime] = (0, import_react.useState)("");
	const buildFallbackBooking = (0, import_react.useCallback)((lookupId) => ({
		id: bookingId || `mov-${Date.now()}`,
		booking_reference: initialReference || lookupId || "MOV-2026-00042",
		movement_number: initialReference || lookupId || "MOV-2026-00042",
		status: "Booking Requested",
		confirmation_status: "PENDING",
		origin: void 0,
		destination: void 0,
		origin_port: void 0,
		destination_port: void 0,
		vessel_name: void 0,
		voyage_number: void 0,
		etd: void 0,
		eta: void 0,
		total_freight: void 0,
		containers: [],
		events: [],
		created_at: (/* @__PURE__ */ new Date()).toISOString()
	}), [bookingId, initialReference]);
	const loadedKeyRef = (0, import_react.useRef)(null);
	const loadData = (0, import_react.useCallback)(async () => {
		const targetLookup = bookingId || initialReference;
		if (!targetLookup) return;
		if (initialBooking) {
			setBooking(initialBooking);
			setContainers(initialBooking.containers || []);
			setEvents(initialBooking.events || []);
			const refId = initialBooking.movement_number || initialBooking.booking_reference || initialBooking.reference || targetLookup;
			setMovementCutOffs(getCutOffsForMovement(refId, initialBooking));
		}
		setIsLoading(true);
		try {
			const record = await fetchBookingByIdFromSupabase(targetLookup);
			if (record) {
				setBooking(record);
				if (isSupabaseConfigured && record.id) try {
					const { data: dbContainers } = await supabase.from("booking_containers").select("*").eq("booking_id", record.id).order("created_at", { ascending: true });
					if (dbContainers) setContainers(dbContainers);
					else setContainers(record.containers || []);
					const { data: dbEvents } = await supabase.from("booking_events").select("*").eq("booking_id", record.id).order("created_at", { ascending: false });
					if (dbEvents) setEvents(dbEvents);
					else setEvents(record.events || []);
				} catch (fetchErr) {
					console.warn("[MovementLifecycleDrawer] Notice fetching live containers:", fetchErr);
					setContainers(record.containers || []);
					setEvents(record.events || []);
				}
				else {
					setContainers(record.containers || []);
					setEvents(record.events || []);
				}
				const nextSt = getNextLifecycleStage(record.status, record.confirmation_status, record.id, record.movement_status);
				if (nextSt) setAdvanceLocation(nextSt.locationDefault);
				const refId = record.movement_number || record.booking_reference || record.reference || targetLookup;
				const cutOffs = getCutOffsForMovement(refId, record);
				setMovementCutOffs(cutOffs);
				return;
			}
			const localList = getLocalBookings();
			const cleanLookup = targetLookup.trim().toLowerCase();
			const localRec = localList.find((b) => b.id.toLowerCase() === cleanLookup || b.movement_number && b.movement_number.toLowerCase() === cleanLookup || b.booking_reference && b.booking_reference.toLowerCase() === cleanLookup || b.reference && b.reference.toLowerCase() === cleanLookup || initialReference && (b.movement_number && b.movement_number.toLowerCase() === initialReference.toLowerCase() || b.booking_reference && b.booking_reference.toLowerCase() === initialReference.toLowerCase()));
			if (localRec) {
				setBooking(localRec);
				setContainers(localRec.containers || []);
				setEvents(localRec.events || []);
				const nextSt = getNextLifecycleStage(localRec.status, localRec.confirmation_status, localRec.id, localRec.movement_status);
				if (nextSt) setAdvanceLocation(nextSt.locationDefault);
				const refId = localRec.movement_number || localRec.booking_reference || localRec.reference || targetLookup;
				const cutOffs = getCutOffsForMovement(refId, localRec);
				setMovementCutOffs(cutOffs);
				return;
			}
			if (!initialBooking) {
				const fallback = buildFallbackBooking(targetLookup);
				setBooking(fallback);
				setContainers(fallback.containers || []);
				setEvents(fallback.events || []);
				setMovementCutOffs(getCutOffsForMovement(targetLookup, fallback));
			}
		} catch (err) {
			console.warn("[MovementLifecycleDrawer] Error loading booking:", err);
			setBooking((prev) => {
				if (!prev && !initialBooking) {
					const fallback = buildFallbackBooking(targetLookup);
					setContainers(fallback.containers || []);
					setEvents(fallback.events || []);
					return fallback;
				}
				return prev;
			});
		} finally {
			setIsLoading(false);
		}
	}, [
		bookingId,
		initialReference,
		initialBooking,
		buildFallbackBooking
	]);
	(0, import_react.useEffect)(() => {
		if (isOpen) {
			const targetKey = `${bookingId || ""}_${initialReference || ""}`;
			if (loadedKeyRef.current !== targetKey) {
				loadedKeyRef.current = targetKey;
				loadData();
			}
		} else loadedKeyRef.current = null;
	}, [
		isOpen,
		bookingId,
		initialReference,
		loadData
	]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const originalStyle = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = originalStyle;
		};
	}, [isOpen]);
	useSupabaseRealtime({
		table: "booking_events",
		filter: booking?.id ? `booking_id=eq.${booking.id}` : void 0,
		enabled: isOpen && Boolean(booking?.id),
		onInsert: (payload) => {
			setEvents((prev) => [payload.new, ...prev.filter((e) => e.id !== payload.new.id)]);
		}
	});
	useSupabaseRealtime({
		table: "booking_containers",
		filter: booking?.id ? `booking_id=eq.${booking.id}` : void 0,
		enabled: isOpen && Boolean(booking?.id),
		onInsert: (payload) => {
			setContainers((prev) => [...prev.filter((c) => c.id !== payload.new.id), payload.new]);
		},
		onUpdate: (payload) => {
			setContainers((prev) => prev.map((c) => c.id === payload.new.id ? payload.new : c));
		},
		onDelete: (payload) => {
			setContainers((prev) => prev.filter((c) => c.id !== payload.old.id));
		}
	});
	const isConfirmed = isBookingConfirmed(booking, bookingId || initialReference || void 0);
	const effectiveConfStatus = isConfirmed ? "CONFIRMED" : booking?.confirmation_status || void 0;
	const rawStatus = booking?.status || "Booking Confirmed";
	const stageConfig = getLifecycleStageConfig(rawStatus, effectiveConfStatus, booking?.id, booking?.movement_status);
	const currentStepIdx = getStageStepIndex(stageConfig.id, effectiveConfStatus, booking?.id, booking?.movement_status);
	const nextStage = getNextLifecycleStage(stageConfig.id, effectiveConfStatus, booking?.id, booking?.movement_status);
	const [noteText, setNoteText] = (0, import_react.useState)("Booking confirmed with forwarder. All documents are in process. Vessel oocl (sdas).");
	const [isEditingNote, setIsEditingNote] = (0, import_react.useState)(false);
	const effectiveMovementRef = booking?.movement_number || booking?.booking_reference || booking?.reference || initialReference || "—";
	const originPort = booking?.origin_port?.trim() || booking?.origin?.trim() || booking?.polName?.trim() || "Pending";
	const destinationPort = booking?.destination_port?.trim() || booking?.destination?.trim() || booking?.podName?.trim() || "Pending";
	const rawVessel = booking?.vessel_name?.trim() || booking?.vessel?.trim() || booking?.vesselName?.trim();
	const vesselName = rawVessel && rawVessel.toUpperCase() !== "TBD" && rawVessel.toUpperCase() !== "PENDING ALLOCATION" ? rawVessel : "Pending";
	const modeName = "Ocean Freight";
	const buyerName = (booking?.buyer)?.company_name || (booking?.buyer)?.name || booking?.buyerName || booking?.buyer_name || booking?.buyer || booking?.customer_name || "—";
	const supplierName = (booking?.supplier)?.company_name || (booking?.supplier)?.name || booking?.supplierName || booking?.supplier_name || booking?.supplier_company || booking?.supplier || "—";
	const forwarderName = (booking?.forwarder)?.company_name || (booking?.forwarder)?.name || booking?.forwarderName || booking?.forwarder_name || booking?.forwarder_company || (booking?.shipping_line)?.name || booking?.forwarder || "Pending";
	const etdFormatted = booking?.etd && !isNaN(new Date(booking.etd).getTime()) ? new Date(booking.etd).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	}) : "Pending";
	const etaFormatted = booking?.eta && !isNaN(new Date(booking.eta).getTime()) ? `~ ${new Date(booking.eta).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	})}` : "Pending";
	const handleAdvanceStage = async (targetStage) => {
		const nextToApply = targetStage || nextStage;
		if (!nextToApply) {
			toast.info("Movement has reached final delivery milestone");
			return;
		}
		if (isUpdating) return;
		const currentBooking = booking || buildFallbackBooking(effectiveMovementRef);
		const loc = advanceLocation.trim() || nextToApply.locationDefault;
		const desc = advanceNotes.trim() || nextToApply.description;
		const newConfStatus = nextToApply.id === "Booking Confirmed" ? "CONFIRMED" : nextToApply.id === "Booking Requested" ? "PENDING" : currentBooking.confirmation_status || "CONFIRMED";
		const newMovementStatus = toDbMovementStatus(nextToApply.id);
		const optimisticBooking = {
			...currentBooking,
			status: nextToApply.id,
			movement_status: newMovementStatus,
			confirmation_status: newConfStatus,
			is_movement_confirmed: newConfStatus === "CONFIRMED",
			confirmed_at: nextToApply.id === "Booking Confirmed" ? currentBooking.confirmed_at || (/* @__PURE__ */ new Date()).toISOString() : currentBooking.confirmed_at
		};
		setBooking(optimisticBooking);
		const newEvent = {
			id: `evt-stage-${Date.now()}`,
			booking_id: currentBooking.id,
			event_type: nextToApply.label,
			event_date: (/* @__PURE__ */ new Date()).toISOString(),
			location: loc,
			description: desc || `Status updated to ${nextToApply.label}`,
			created_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		setEvents((prev) => [newEvent, ...prev.filter((e) => e.event_type !== nextToApply.label)]);
		saveLocalBookings([optimisticBooking]);
		updateLocalBooking(currentBooking.id, {
			status: nextToApply.id,
			movement_status: newMovementStatus,
			confirmation_status: newConfStatus,
			is_movement_confirmed: newConfStatus === "CONFIRMED"
		});
		window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: {
			updated: true,
			id: currentBooking.id,
			booking: optimisticBooking
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_booking_status_updated", { detail: {
			bookingId: currentBooking.id,
			status: nextToApply.id
		} }));
		queryClient.setQueriesData({ queryKey: ["dashboard-bookings"] }, (old) => {
			if (!old) return [optimisticBooking];
			return old.map((b) => b.id === optimisticBooking.id || b.movement_number && b.movement_number === optimisticBooking.movement_number || b.booking_reference && b.booking_reference === optimisticBooking.booking_reference ? optimisticBooking : b);
		});
		setIsUpdating(true);
		try {
			if (isConfigured) await updateBookingStatusInSupabase(currentBooking.id, userId, nextToApply.id, loc, desc, {
				movement_status: newMovementStatus,
				confirmation_status: newConfStatus
			});
			toast.success(`Milestone updated: ${nextToApply.label}`, { description: `Location: ${loc}` });
			setAdvanceNotes("");
			onMovementUpdated?.();
			queryClient.invalidateQueries({ queryKey: ["dashboard-bookings"] });
			queryClient.invalidateQueries({ queryKey: ["booking-requests"] });
			queryClient.invalidateQueries({ queryKey: ["movements"] });
		} catch (err) {
			console.warn("[MovementLifecycleDrawer] Advance server notice, kept in local state:", err);
			toast.success(`Milestone updated: ${nextToApply.label}`);
		} finally {
			setIsUpdating(false);
		}
	};
	const handleAddContainer = async () => {
		const cleanNum = newContainerNum.trim().toUpperCase();
		if (!cleanNum) {
			toast.error("Container number is required");
			return;
		}
		if (containers.some((c) => c.container_number?.trim().toUpperCase() === cleanNum)) {
			toast.error(`Container ${cleanNum} is already assigned to this movement`);
			return;
		}
		const currentBookingId = booking?.id || bookingId || initialReference;
		if (!currentBookingId) {
			toast.error("No active movement selected");
			return;
		}
		setIsAddingContainer(true);
		try {
			const saved = await insertBookingContainerInSupabase(currentBookingId, {
				containerNumber: cleanNum,
				sealNumber: newSealNum.trim().toUpperCase() || void 0,
				weight: Number(newWeight) || 24500,
				containerSize: newSize,
				containerType: newType,
				status: "Allocated",
				organizationId: organizationId || null
			});
			setContainers((prev) => [...prev, saved]);
			const nowIso = (/* @__PURE__ */ new Date()).toISOString();
			const localEvent = {
				id: `evt-${Date.now()}`,
				booking_id: saved.booking_id,
				container_id: saved.id,
				event_type: "Container Added",
				title: `Container Registered: ${saved.container_number}`,
				description: `Container ${saved.container_number} (${saved.container_size} ${saved.container_type}) registered to movement ledger.`,
				location: booking?.origin_port || booking?.origin || "Origin Port",
				event_date: nowIso,
				occurred_at: nowIso,
				payload: {
					container_id: saved.id,
					container_number: saved.container_number,
					seal_number: saved.seal_number,
					weight: saved.weight
				},
				created_at: nowIso,
				created_by: userId || null
			};
			setEvents((prev) => [localEvent, ...prev]);
			setShowAddContainer(false);
			setNewContainerNum("");
			setNewSealNum("");
			setNewWeight("24500");
			toast.success(`Container ${saved.container_number} saved to database`);
			queryClient.invalidateQueries({ queryKey: ["bookings"] });
			queryClient.invalidateQueries({ queryKey: ["booking-detail"] });
			queryClient.invalidateQueries({ queryKey: ["dashboard-metrics"] });
			onMovementUpdated?.();
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			toast.error(msg || "Failed to save container");
		} finally {
			setIsAddingContainer(false);
		}
	};
	const handleStartTracking = async (container) => {
		if (!container.id && !container.container_number) return;
		const targetKey = container.id || container.container_number || "";
		setTrackingLoadingId(targetKey);
		try {
			const res = await startContainerTracking({
				containerId: container.id,
				containerNumber: container.container_number || void 0,
				bookingId: booking?.id || bookingId || void 0,
				movementReference: effectiveMovementRef
			});
			if (res.success) {
				if (res.event) setEvents((prev) => [res.event, ...prev.filter((e) => e.id !== res.event.id)]);
				if (res.isProviderConnected) toast.success(`Live tracking active for ${container.container_number || "container"}`);
				else toast.info(`Tracking registered in database for ${container.container_number}. External tracking provider integration is not yet connected (awaiting provider credentials).`, { duration: 6e3 });
				queryClient.invalidateQueries({ queryKey: ["bookings"] });
				queryClient.invalidateQueries({ queryKey: ["booking-detail"] });
			} else toast.error(res.message || "Failed to initialize tracking");
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			toast.error(msg || "Tracking initialization failed");
		} finally {
			setTrackingLoadingId(null);
		}
	};
	const handleDeleteContainer = async (containerId) => {
		try {
			await deleteBookingContainerFromSupabase(containerId);
			setContainers((prev) => prev.filter((c) => c.id !== containerId));
			toast.success("Container removed from booking");
			queryClient.invalidateQueries({ queryKey: ["bookings"] });
			queryClient.invalidateQueries({ queryKey: ["booking-detail"] });
			queryClient.invalidateQueries({ queryKey: ["dashboard-metrics"] });
			onMovementUpdated?.();
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			toast.error(msg || "Failed to remove container");
		}
	};
	const handleAddCustomEvent = async () => {
		if (!customEventText.trim()) return;
		const currentBookingId = booking?.id || `mov-${Date.now()}`;
		const loc = customEventLocation.trim() || "Terminal Hub";
		const fakeEvt = {
			id: `evt-${Date.now()}`,
			booking_id: currentBookingId,
			event_type: stageConfig.label,
			event_date: (/* @__PURE__ */ new Date()).toISOString(),
			location: loc,
			description: customEventText.trim(),
			created_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		setEvents((prev) => [fakeEvt, ...prev]);
		setCustomEventText("");
		setCustomEventLocation("");
		toast.success("Timeline event logged");
		if (isConfigured) try {
			await addBookingEventInSupabase(currentBookingId, stageConfig.label, loc, customEventText.trim());
		} catch (err) {
			console.warn("Supabase event log deferred to local state:", err);
		}
	};
	const handleSaveCutOffDeadline = () => {
		if (!newCutOffDateTime.trim()) {
			toast.error("Please provide a date and time for the cut-off deadline.");
			return;
		}
		const updatedDeadlines = [...(movementCutOffs?.deadlines || []).filter((d) => d.type.toLowerCase() !== newCutOffType.toLowerCase()), {
			type: newCutOffType,
			dateTime: newCutOffDateTime.trim(),
			date: newCutOffDateTime.trim().split(" ")[0] || "",
			time: newCutOffDateTime.trim().split(" ").slice(1).join(" ") || "",
			in: "Active"
		}];
		const updatedDates = {
			...movementCutOffs?.dates || {},
			[newCutOffType]: newCutOffDateTime.trim()
		};
		saveCutOffsForMovement(effectiveMovementRef, updatedDates, booking?.id);
		setMovementCutOffs({
			movementRef: effectiveMovementRef,
			bookingId: booking?.id,
			deadlines: updatedDeadlines,
			dates: updatedDates
		});
		toast.success(`${newCutOffType} saved for movement ${effectiveMovementRef}`);
		setNewCutOffDateTime("");
		setShowAddCutOff(false);
	};
	const handleCopyReference = () => {
		navigator.clipboard.writeText(effectiveMovementRef);
		setCopiedRef(true);
		toast.success(`Copied ${effectiveMovementRef} to clipboard`);
		setTimeout(() => setCopiedRef(false), 2e3);
	};
	containers.reduce((acc, c) => acc + (Number(c.weight) || 24500), 0);
	if (!isOpen) return null;
	if (typeof document === "undefined") return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		role: "region",
		"aria-label": "Movement Details Modal Backdrop",
		className: "fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 ease-out",
			onClick: onClose,
			"aria-hidden": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 863,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			ref: sheetElementRef,
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "movement-modal-title",
			className: cn("relative z-10 w-full max-w-6xl bg-[#F8FAFD] border border-slate-200/80 shadow-[0_25px_70px_rgba(0,0,0,0.18)] flex flex-col overflow-hidden transition-all will-change-[transform,opacity] outline-none", "max-h-[92vh] rounded-t-[28px] rounded-b-none my-0 overflow-y-auto overflow-x-hidden animate-in slide-in-from-bottom duration-240 ease-[cubic-bezier(0.16,1,0.3,1)]", "sm:slide-in-from-bottom-0 sm:zoom-in-95 sm:fade-in-0 sm:duration-200 sm:ease-[cubic-bezier(0.16,1,0.3,1)] sm:rounded-[32px] sm:max-h-[92vh] sm:my-auto"),
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border-b border-slate-200/60 px-5 sm:px-8 pt-4 sm:pt-6 pb-4 bg-white shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							ref: sheetHandleRef,
							"data-swipe-handle": "true",
							className: "group mx-auto -mt-2 mb-2 flex h-8 w-full max-w-[200px] cursor-grab touch-none items-center justify-center sm:hidden active:cursor-grabbing select-none",
							"aria-label": "Drag down to dismiss",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 w-12 rounded-full bg-slate-300 transition-all duration-150 group-hover:bg-slate-400 group-active:scale-x-110 group-active:bg-slate-500" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 893,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 887,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3.5 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid size-12 shrink-0 place-items-center rounded-2xl bg-[#EBF3FF] border border-[#D0E2FF] text-[#0D74FF] shadow-xs",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-6" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 899,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 898,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2.5 flex-wrap",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
												id: "movement-modal-title",
												className: "text-[17px] font-bold tracking-tight text-slate-900 truncate",
												children: effectiveMovementRef
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 903,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
												type: "button",
												onClick: handleCopyReference,
												title: "Copy Reference",
												className: "inline-flex size-6 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer",
												children: copiedRef ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCheck, { className: "size-3 text-emerald-600" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 916,
													columnNumber: 23
												}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "size-3" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 918,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 909,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF3] border border-[#A6F4C5]/80 px-3 py-0.5 text-[12px] font-semibold text-[#027A48]",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-[#12B76A]" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 922,
													columnNumber: 21
												}, this), isConfirmed ? "Confirmed" : stageConfig.label]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 921,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 902,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-0.5 text-[13px] text-slate-500 truncate font-normal",
										children: [
											originPort,
											" → ",
											destinationPort,
											" · Vessel ",
											vesselName
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 926,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 901,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 897,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: onClose,
									"aria-label": "Close",
									className: "grid size-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 940,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 934,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 933,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 895,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-5 flex items-center gap-1.5 p-1.5 bg-[#F2F4F7] rounded-full overflow-x-auto no-scrollbar",
							children: [
								{
									id: "overview",
									label: "Overview",
									count: null
								},
								{
									id: "milestones",
									label: "Milestones",
									count: 5
								},
								{
									id: "containers",
									label: "Containers",
									count: containers.length
								},
								{
									id: "cutoffs",
									label: "Cut-Offs",
									count: movementCutOffs?.deadlines?.length || 0
								},
								{
									id: "audit",
									label: "Audit Log",
									count: events.length
								}
							].map((tab) => {
								const isActive = activeTab === tab.id;
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setActiveTab(tab.id),
									className: cn("px-5 py-2 text-[12.5px] rounded-full transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 font-medium", isActive ? "bg-white text-slate-900 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-white/50"),
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: tab.label }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 971,
										columnNumber: 19
									}, this), tab.count !== null && /* @__PURE__ */ (void 0)("span", {
										className: cn("rounded-full px-2 py-0.5 text-[11px] font-semibold transition-colors", isActive ? "bg-slate-100 text-slate-800" : "bg-[#EAECF0] text-slate-600"),
										children: tab.count
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 973,
										columnNumber: 21
									}, this)]
								}, tab.id, true, {
									fileName: _jsxFileName,
									lineNumber: 960,
									columnNumber: 17
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 946,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 885,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6 bg-[#F8FAFD]",
					children: [
						activeTab === "overview" && /* @__PURE__ */ (void 0)("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start animate-in fade-in-50 duration-150",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "lg:col-span-8 space-y-5",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "grid grid-cols-1 md:grid-cols-2 gap-5",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "bg-white rounded-[24px] border border-slate-200/80 p-5 shadow-xs flex flex-col justify-between",
											children: /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)(Ship, { className: "size-4.5 text-slate-700" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1002,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("h3", {
														className: "text-[15px] font-bold text-slate-900",
														children: "Shipment Details"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1003,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1001,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF8FF] text-[#175CD3] text-[11.5px] font-semibold",
													children: [/* @__PURE__ */ (void 0)(Ship, { className: "size-3" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1006,
														columnNumber: 27
													}, this), modeName]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1005,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1e3,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-2 gap-y-4 gap-x-3 pt-5",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-start gap-2.5",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "grid size-7 place-items-center rounded-lg bg-slate-50 text-slate-400 mt-0.5",
															children: /* @__PURE__ */ (void 0)(FileText, { className: "size-3.5" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1015,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1014,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[11px] font-medium text-slate-400 block",
															children: "Booking No."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1018,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[13px] font-bold text-slate-900 font-mono tracking-tight block",
															children: effectiveMovementRef
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1021,
															columnNumber: 29
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1017,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1013,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-start gap-2.5",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "grid size-7 place-items-center rounded-lg bg-slate-50 text-slate-400 mt-0.5",
															children: /* @__PURE__ */ (void 0)(Ship, { className: "size-3.5" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1030,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1029,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[11px] font-medium text-slate-400 block",
															children: "Vessel"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1033,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[13px] font-bold text-slate-900 block truncate",
															children: vesselName
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1036,
															columnNumber: 29
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1032,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1028,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-start gap-2.5",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "grid size-7 place-items-center rounded-lg bg-slate-50 text-slate-400 mt-0.5",
															children: /* @__PURE__ */ (void 0)(MapPin, { className: "size-3.5" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1045,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1044,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[11px] font-medium text-slate-400 block",
															children: "Origin (POL)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1048,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[13px] font-bold text-slate-900 block",
															children: originPort === "Pending" ? /* @__PURE__ */ (void 0)("span", {
																className: "inline-flex items-center rounded-md bg-amber-50 border border-amber-200/60 px-2 py-0.5 text-[11px] font-medium text-amber-700",
																children: "Pending"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1053,
																columnNumber: 33
															}, this) : originPort
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1051,
															columnNumber: 29
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1047,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1043,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-start gap-2.5",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "grid size-7 place-items-center rounded-lg bg-slate-50 text-slate-400 mt-0.5",
															children: /* @__PURE__ */ (void 0)(MapPin, { className: "size-3.5" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1066,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1065,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[11px] font-medium text-slate-400 block",
															children: "Destination (POD)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1069,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[13px] font-bold text-slate-900 block",
															children: destinationPort === "Pending" ? /* @__PURE__ */ (void 0)("span", {
																className: "inline-flex items-center rounded-md bg-amber-50 border border-amber-200/60 px-2 py-0.5 text-[11px] font-medium text-amber-700",
																children: "Pending"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1074,
																columnNumber: 33
															}, this) : destinationPort
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1072,
															columnNumber: 29
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1068,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1064,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-start gap-2.5",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "grid size-7 place-items-center rounded-lg bg-slate-50 text-slate-400 mt-0.5",
															children: /* @__PURE__ */ (void 0)(Calendar, { className: "size-3.5" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1087,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1086,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[11px] font-medium text-slate-400 block",
															children: "ETD"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1090,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[13px] font-bold text-slate-900 block",
															children: etdFormatted
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1093,
															columnNumber: 29
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1089,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1085,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-start gap-2.5",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "grid size-7 place-items-center rounded-lg bg-slate-50 text-slate-400 mt-0.5",
															children: /* @__PURE__ */ (void 0)(Waves, { className: "size-3.5" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1102,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1101,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[11px] font-medium text-slate-400 block",
															children: "Mode"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1105,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[13px] font-bold text-slate-900 block",
															children: modeName
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1108,
															columnNumber: 29
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1104,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1100,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1011,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 999,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 998,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "bg-white rounded-[24px] border border-slate-200/80 p-5 shadow-xs flex flex-col justify-between",
											children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "grid size-6 place-items-center rounded-full bg-[#12B76A] text-white",
													children: /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 stroke-[3]" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1122,
														columnNumber: 27
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1121,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("h3", {
													className: "text-[15px] font-bold text-slate-900",
													children: "Booking Status"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1124,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1120,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "mt-4 rounded-[18px] bg-[#ECFDF3] border border-[#A6F4C5] p-3.5 flex items-start gap-3",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "grid size-5 place-items-center rounded-full bg-[#12B76A] text-white shrink-0 mt-0.5",
													children: /* @__PURE__ */ (void 0)(Check, { className: "size-3 stroke-[3]" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1130,
														columnNumber: 27
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1129,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
													className: "text-[12.5px] font-bold text-[#027A48]",
													children: [stageConfig.label, " Active"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1133,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-[11.5px] text-[#027A48]/80 leading-relaxed mt-0.5",
													children: [
														stageConfig.description,
														" (Stage ",
														stageConfig.stepNumber,
														" of",
														" ",
														LIFECYCLE_STAGES.length,
														")"
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1136,
													columnNumber: 27
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1132,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1128,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1119,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "pt-5 pb-1",
												children: /* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between relative px-2",
													children: [
														/* @__PURE__ */ (void 0)("div", {
															className: "flex flex-col items-center relative z-10",
															children: [currentStepIdx >= 1 ? /* @__PURE__ */ (void 0)("div", {
																className: "grid size-6 place-items-center rounded-full bg-[#12B76A] text-white shadow-2xs",
																children: /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 stroke-[3]" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1151,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1150,
																columnNumber: 29
															}, this) : /* @__PURE__ */ (void 0)("div", {
																className: "grid size-6 place-items-center rounded-full bg-[#0D74FF] text-white shadow-2xs",
																children: /* @__PURE__ */ (void 0)("div", { className: "size-2 rounded-full bg-white animate-pulse" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1155,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1154,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: cn("text-[11px] font-semibold mt-2", currentStepIdx >= 1 ? "text-slate-700" : "text-[#0D74FF]"),
																children: "Booking"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1158,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1148,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { className: cn("flex-1 h-0.5 -mt-5 transition-colors", currentStepIdx >= 1 ? "bg-[#12B76A]" : "bg-slate-200") }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1168,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "flex flex-col items-center relative z-10",
															children: [currentStepIdx >= 4 ? /* @__PURE__ */ (void 0)("div", {
																className: "grid size-6 place-items-center rounded-full bg-[#12B76A] text-white shadow-2xs",
																children: /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 stroke-[3]" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1179,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1178,
																columnNumber: 29
															}, this) : currentStepIdx >= 1 ? /* @__PURE__ */ (void 0)("div", {
																className: "grid size-6 place-items-center rounded-full bg-[#0D74FF] text-white shadow-2xs",
																children: /* @__PURE__ */ (void 0)("div", { className: "size-2 rounded-full bg-white animate-pulse" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1183,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1182,
																columnNumber: 29
															}, this) : /* @__PURE__ */ (void 0)("div", { className: "size-6 rounded-full border-2 border-slate-300 bg-white" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1186,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: cn("text-[11px] font-semibold mt-2", currentStepIdx >= 4 ? "text-slate-700" : currentStepIdx >= 1 ? "text-[#0D74FF]" : "text-slate-400"),
																children: "Documentation"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1188,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1176,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { className: cn("flex-1 h-0.5 -mt-5 transition-colors", currentStepIdx >= 4 ? "bg-[#12B76A]" : "bg-slate-200") }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1202,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "flex flex-col items-center relative z-10",
															children: [currentStepIdx >= 7 ? /* @__PURE__ */ (void 0)("div", {
																className: "grid size-6 place-items-center rounded-full bg-[#12B76A] text-white shadow-2xs",
																children: /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 stroke-[3]" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1213,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1212,
																columnNumber: 29
															}, this) : currentStepIdx >= 5 ? /* @__PURE__ */ (void 0)("div", {
																className: "grid size-6 place-items-center rounded-full bg-[#0D74FF] text-white shadow-2xs",
																children: /* @__PURE__ */ (void 0)("div", { className: "size-2 rounded-full bg-white animate-pulse" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1217,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1216,
																columnNumber: 29
															}, this) : /* @__PURE__ */ (void 0)("div", { className: "size-6 rounded-full border-2 border-slate-300 bg-white" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1220,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: cn("text-[11px] font-semibold mt-2", currentStepIdx >= 7 ? "text-slate-700" : currentStepIdx >= 5 ? "text-[#0D74FF]" : "text-slate-400"),
																children: "In Transit"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1222,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1210,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { className: cn("flex-1 h-0.5 -mt-5 transition-colors", currentStepIdx >= 7 ? "bg-[#12B76A]" : "bg-slate-200") }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1236,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "flex flex-col items-center relative z-10",
															children: [currentStepIdx >= 8 ? /* @__PURE__ */ (void 0)("div", {
																className: "grid size-6 place-items-center rounded-full bg-[#12B76A] text-white shadow-2xs",
																children: /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 stroke-[3]" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1247,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1246,
																columnNumber: 29
															}, this) : currentStepIdx >= 7 ? /* @__PURE__ */ (void 0)("div", {
																className: "grid size-6 place-items-center rounded-full bg-[#0D74FF] text-white shadow-2xs",
																children: /* @__PURE__ */ (void 0)("div", { className: "size-2 rounded-full bg-white animate-pulse" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1251,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1250,
																columnNumber: 29
															}, this) : /* @__PURE__ */ (void 0)("div", { className: "size-6 rounded-full border-2 border-slate-300 bg-white" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1254,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: cn("text-[11px] font-medium mt-2", currentStepIdx >= 8 ? "text-slate-700 font-semibold" : currentStepIdx >= 7 ? "text-[#0D74FF] font-semibold" : "text-slate-400"),
																children: "Arrived"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1256,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1244,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1146,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1145,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1118,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 996,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "bg-white rounded-[24px] border border-slate-200/80 p-5 shadow-xs",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (void 0)(Users, { className: "size-4.5 text-slate-700" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1278,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("h3", {
													className: "text-[15px] font-bold text-slate-900",
													children: "Key Operational Parties"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1279,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1277,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => {
													toast.success("Manifest exported", { description: `Manifest for ${effectiveMovementRef} downloaded` });
												},
												className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF8FF] text-[#175CD3] text-[11.5px] font-semibold hover:bg-[#E0F2FE] transition-colors cursor-pointer",
												children: ["Export Manifest ", /* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1292,
													columnNumber: 39
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1283,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1276,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-4",
											children: [
												/* @__PURE__ */ (void 0)("div", {
													className: "bg-[#F8FAFC] border border-slate-100 rounded-2xl p-3.5 flex items-start gap-3",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "grid size-8 place-items-center rounded-full bg-slate-100 text-slate-600 shrink-0",
														children: /* @__PURE__ */ (void 0)(User, { className: "size-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1300,
															columnNumber: 25
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1299,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "min-w-0",
														children: [
															/* @__PURE__ */ (void 0)("span", {
																className: "text-[11px] font-medium text-slate-400 block",
																children: "Buyer / Consignee"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1303,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("p", {
																className: "text-[13.5px] font-bold text-slate-900 truncate mt-0.5",
																children: buyerName
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1306,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("p", {
																className: "text-[11.5px] text-slate-500 truncate",
																children: destinationPort
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1309,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1302,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1298,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "bg-[#F8FAFC] border border-slate-100 rounded-2xl p-3.5 flex items-start gap-3",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "grid size-8 place-items-center rounded-full bg-slate-100 text-slate-600 shrink-0",
														children: /* @__PURE__ */ (void 0)(Building2, { className: "size-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1316,
															columnNumber: 25
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1315,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "min-w-0",
														children: [
															/* @__PURE__ */ (void 0)("span", {
																className: "text-[11px] font-medium text-slate-400 block",
																children: "Supplier / Load Point"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1319,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("p", {
																className: "text-[13.5px] font-bold text-slate-900 truncate mt-0.5",
																children: supplierName
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1322,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("p", {
																className: "text-[11.5px] text-slate-500 truncate",
																children: originPort
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1325,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1318,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1314,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "bg-[#F8FAFC] border border-slate-100 rounded-2xl p-3.5 flex items-start gap-3",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "grid size-8 place-items-center rounded-full bg-slate-100 text-slate-600 shrink-0",
														children: /* @__PURE__ */ (void 0)(Send, { className: "size-4 -rotate-45" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1332,
															columnNumber: 25
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1331,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "min-w-0",
														children: [
															/* @__PURE__ */ (void 0)("span", {
																className: "text-[11px] font-medium text-slate-400 block",
																children: "Forwarder & Desk"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1335,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("p", {
																className: "text-[13.5px] font-bold text-slate-900 truncate mt-0.5",
																children: forwarderName
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1338,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("p", {
																className: "text-[11.5px] text-slate-500 truncate",
																children: "Booking Desk"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1341,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1334,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1330,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1296,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1275,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "grid grid-cols-1 md:grid-cols-2 gap-5",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "bg-white rounded-[24px] border border-slate-200/80 p-5 shadow-xs",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)(Clock, { className: "size-4.5 text-slate-700" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1353,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("h3", {
														className: "text-[15px] font-bold text-slate-900",
														children: "Shipment Timeline"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1354,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1352,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "px-2.5 py-0.5 rounded-full bg-[#EFF8FF] text-[#175CD3] text-[11.5px] font-semibold",
													children: "5 Milestones"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1356,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1351,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "mt-4 space-y-4 relative",
												children: [/* @__PURE__ */ (void 0)("div", { className: "absolute left-[11px] top-3 bottom-3 w-0.5 bg-slate-100" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1363,
													columnNumber: 23
												}, this), [
													{
														title: "Booking Confirmed",
														desc: "Forwarder correspondence confirmed",
														date: etdFormatted,
														stepIdx: 1
													},
													{
														title: "Documentation & Staged",
														desc: originPort,
														date: etdFormatted,
														stepIdx: 3
													},
													{
														title: "Customs Cleared",
														desc: "Clearance approved for export",
														date: etdFormatted,
														stepIdx: 4
													},
													{
														title: "In Transit",
														desc: `${modeName} • ${vesselName}`,
														date: etdFormatted,
														stepIdx: 6
													},
													{
														title: "Arrived at Destination",
														desc: destinationPort,
														date: etaFormatted,
														stepIdx: 7
													}
												].map((item, idx) => {
													const isCompleted = currentStepIdx > item.stepIdx;
													const isCurrent = currentStepIdx === item.stepIdx || idx === 0 && currentStepIdx <= 1 && currentStepIdx > 0 || idx === 1 && currentStepIdx >= 2 && currentStepIdx <= 3 || idx === 2 && currentStepIdx >= 4 && currentStepIdx <= 5 || idx === 3 && currentStepIdx === 6 || idx === 4 && currentStepIdx >= 7;
													return /* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between relative z-10",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-3",
															children: [isCompleted ? /* @__PURE__ */ (void 0)("div", {
																className: "grid size-6 place-items-center rounded-full bg-[#12B76A] text-white shadow-2xs",
																children: /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 stroke-[3]" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1414,
																	columnNumber: 35
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1413,
																columnNumber: 33
															}, this) : isCurrent ? /* @__PURE__ */ (void 0)("div", {
																className: "grid size-6 place-items-center rounded-full bg-[#0D74FF] text-white shadow-2xs",
																children: /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-3.5 stroke-[3]" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1418,
																	columnNumber: 35
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1417,
																columnNumber: 33
															}, this) : /* @__PURE__ */ (void 0)("div", { className: "size-6 rounded-full border-2 border-slate-300 bg-white" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1421,
																columnNumber: 33
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
																className: "text-[13px] font-bold text-slate-900 leading-none",
																children: item.title
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1424,
																columnNumber: 33
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-slate-400 mt-1",
																children: item.desc
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1427,
																columnNumber: 33
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1423,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1411,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[12px] font-medium text-slate-500",
															children: item.date
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1430,
															columnNumber: 29
														}, this)]
													}, idx, true, {
														fileName: _jsxFileName,
														lineNumber: 1407,
														columnNumber: 27
													}, this);
												})]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1361,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1350,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "bg-white rounded-[24px] border border-slate-200/80 p-5 shadow-xs flex flex-col justify-between",
											children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)(Box, { className: "size-4.5 text-slate-700" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1444,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("h3", {
														className: "text-[15px] font-bold text-slate-900",
														children: "Containers"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1445,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1443,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "grid size-5 place-items-center rounded-full bg-slate-100 text-slate-600 text-[11.5px] font-semibold",
													children: containers.length
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1447,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1442,
												columnNumber: 23
											}, this), containers.length === 0 ? /* @__PURE__ */ (void 0)("div", {
												className: "py-8 flex flex-col items-center justify-center text-center",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "grid size-14 place-items-center rounded-full bg-[#F2F4F7] text-slate-400 mb-3",
														children: /* @__PURE__ */ (void 0)(Box, { className: "size-7 stroke-[1.5]" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1456,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1455,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[13.5px] font-bold text-slate-800",
														children: "No containers assigned"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1458,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[12px] text-slate-400 mt-1",
														children: "Containers will be added once available."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1461,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => setActiveTab("containers"),
														className: "mt-3 text-[12px] font-semibold text-[#0D74FF] hover:underline cursor-pointer",
														children: "Manage Containers →"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1464,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1454,
												columnNumber: 25
											}, this) : /* @__PURE__ */ (void 0)("div", {
												className: "mt-4 space-y-2.5",
												children: containers.slice(0, 3).map((c) => /* @__PURE__ */ (void 0)("div", {
													className: "p-3 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-center justify-between",
													children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
														className: "font-mono text-[13px] font-bold text-slate-900 block",
														children: c.container_number
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1480,
														columnNumber: 33
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[11px] text-slate-500",
														children: [
															c.container_size,
															" · ",
															c.weight,
															" kg"
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1483,
														columnNumber: 33
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1479,
														columnNumber: 31
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700",
														children: c.status
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1487,
														columnNumber: 31
													}, this)]
												}, c.id, true, {
													fileName: _jsxFileName,
													lineNumber: 1475,
													columnNumber: 29
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1473,
												columnNumber: 25
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1441,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "pt-2 text-right",
												children: /* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => setActiveTab("containers"),
													className: "text-[12px] font-semibold text-slate-500 hover:text-[#0D74FF] transition-colors cursor-pointer",
													children: "View container ledger"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1497,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1496,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1440,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1348,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 994,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "lg:col-span-4 space-y-5",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "bg-white rounded-[24px] border border-slate-200/80 p-5 shadow-xs space-y-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)(Send, { className: "size-4 text-slate-700" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1514,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("h3", {
												className: "text-[15px] font-bold text-slate-900",
												children: "Quick Actions"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1515,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1513,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "space-y-2.5 pt-1",
											children: [
												/* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => setActiveTab("milestones"),
													className: "w-full bg-[#101828] hover:bg-black text-white text-[13px] font-semibold py-2.5 px-4 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs",
													children: [/* @__PURE__ */ (void 0)(ExternalLink, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1525,
														columnNumber: 23
													}, this), "View Full Details"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1520,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => {
														toast.success("Documents bundle ready", { description: `Downloading shipping package for ${effectiveMovementRef}` });
													},
													className: "w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-[13px] font-semibold py-2.5 px-4 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs",
													children: [/* @__PURE__ */ (void 0)(Download, { className: "size-4 text-slate-600" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1539,
														columnNumber: 23
													}, this), "Download Documents"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1530,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => {
														onClose();
														navigate({
															to: "/tracking",
															search: {
																id: booking?.id || bookingId || void 0,
																ref: effectiveMovementRef || void 0
															}
														});
													},
													className: "w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-[13px] font-semibold py-2.5 px-4 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs",
													children: [/* @__PURE__ */ (void 0)(MapPin, { className: "size-4 text-slate-600" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1558,
														columnNumber: 23
													}, this), "Track Shipment"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1544,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => {
														toast.info(`Contacting ${forwarderName}`, { description: "Opening forwarder operations desk channel" });
													},
													className: "w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-[13px] font-semibold py-2.5 px-4 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs",
													children: [/* @__PURE__ */ (void 0)(Phone, { className: "size-4 text-slate-600" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1572,
														columnNumber: 23
													}, this), "Contact Forwarder"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1563,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1518,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1512,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "bg-white rounded-[24px] border border-slate-200/80 p-5 shadow-xs space-y-3.5",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)(Calendar, { className: "size-4 text-slate-700" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1581,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("h3", {
												className: "text-[15px] font-bold text-slate-900",
												children: "Important Dates"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1582,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1580,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "space-y-3 pt-1",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between p-1 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "grid size-8 place-items-center rounded-full bg-slate-100 text-slate-600",
														children: /* @__PURE__ */ (void 0)(Truck, { className: "size-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1590,
															columnNumber: 27
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1589,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
														className: "text-[11px] font-medium text-slate-400 block",
														children: "ETD (Estimated Time of Departure)"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1593,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[13px] font-bold text-slate-900 block",
														children: etdFormatted
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1596,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1592,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1588,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-4 text-slate-400" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1601,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1587,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between p-1 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "grid size-8 place-items-center rounded-full bg-slate-100 text-slate-600",
														children: /* @__PURE__ */ (void 0)(Anchor, { className: "size-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1608,
															columnNumber: 27
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1607,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
														className: "text-[11px] font-medium text-slate-400 block",
														children: "ETA (Estimated Time of Arrival)"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1611,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[13px] font-bold text-slate-900 block",
														children: etaFormatted
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1614,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1610,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1606,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-4 text-slate-400" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1619,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1605,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1585,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1579,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "bg-white rounded-[24px] border border-slate-200/80 p-5 shadow-xs space-y-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between",
											children: /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (void 0)(FileText, { className: "size-4 text-slate-700" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1628,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("h3", {
													className: "text-[15px] font-bold text-slate-900",
													children: "Notes"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1629,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1627,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1626,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "bg-[#F8F9FC] border border-slate-200/60 rounded-[18px] p-3.5 relative",
											children: isEditingNote ? /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("textarea", {
												value: noteText,
												onChange: (e) => setNoteText(e.target.value),
												className: "w-full text-[12.5px] text-slate-700 bg-white border border-slate-200 rounded-lg p-2 outline-none",
												rows: 3
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1636,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => {
													setIsEditingNote(false);
													toast.success("Note updated");
												},
												className: "mt-2 px-3 py-1 bg-[#0D74FF] text-white rounded-full text-xs font-semibold cursor-pointer",
												children: "Save"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1642,
												columnNumber: 25
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1635,
												columnNumber: 23
											}, this) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("p", {
												className: "text-[12px] text-slate-600 leading-relaxed pr-6",
												children: noteText
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1655,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setIsEditingNote(true),
												className: "absolute top-3 right-3 text-slate-400 hover:text-slate-700 cursor-pointer",
												children: /* @__PURE__ */ (void 0)(Pen, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1663,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1658,
												columnNumber: 25
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1654,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1633,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1625,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "bg-white rounded-[24px] border border-slate-200/80 p-5 shadow-xs space-y-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (void 0)(Paperclip, { className: "size-4 text-slate-700" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1674,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("h3", {
													className: "text-[15px] font-bold text-slate-900",
													children: "Attachments"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1675,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1673,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => {
													toast.info("Viewing all 3 attached files");
												},
												className: "text-[11.5px] font-semibold text-[#175CD3] hover:underline cursor-pointer",
												children: "View All (3)"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1677,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1672,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-[#FAFAFA] hover:bg-slate-50 transition-colors",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "grid size-7 place-items-center rounded-lg bg-rose-50 border border-rose-200/60 text-rose-600 font-bold text-[9px] uppercase",
													children: "PDF"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1690,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
													className: "text-[12px] font-semibold text-slate-800 truncate max-w-[180px]",
													children: "Booking_Confirmation.pdf"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1694,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-[10.5px] text-slate-400",
													children: "2.4 MB"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1697,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1693,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1689,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => {
													toast.success("Downloading Booking_Confirmation.pdf");
												},
												className: "grid size-7 place-items-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer",
												children: /* @__PURE__ */ (void 0)(Download, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1707,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1700,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1688,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1671,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1510,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 992,
							columnNumber: 13
						}, this),
						activeTab === "milestones" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4 animate-in fade-in-50 duration-150",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "rounded-[26px] bg-white border border-slate-200/60 p-5 shadow-2xs space-y-3",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (void 0)("div", { children: [
										/* @__PURE__ */ (void 0)("span", {
											className: "text-[11px] font-bold uppercase tracking-wider text-[#0D74FF]",
											children: [
												"Current Stage ",
												stageConfig.stepNumber,
												" of ",
												LIFECYCLE_STAGES.length
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1722,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("h3", {
											className: "text-[16px] font-bold text-slate-900 mt-0.5",
											children: stageConfig.label
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1725,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "text-[12.5px] text-slate-500 mt-0.5",
											children: stageConfig.description
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1728,
											columnNumber: 21
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1721,
										columnNumber: 19
									}, this), nextStage && /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => void handleAdvanceStage(),
										disabled: isUpdating,
										className: "inline-flex items-center gap-2 rounded-full bg-[#0D74FF] hover:bg-[#0062E3] text-white px-5 py-2 text-[12.5px] font-semibold shadow-[0_6px_16px_rgba(13,116,255,0.25)] transition-all cursor-pointer",
										children: [/* @__PURE__ */ (void 0)("span", { children: stageConfig.nextActionLabel }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1737,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)(ArrowRight, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1738,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1731,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1720,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "border-t border-slate-100 pt-3",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2",
										children: "Required Verifications"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1745,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
										children: stageConfig.checklist.map((item, idx) => /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-[12px] text-slate-700 border border-slate-150/70",
											children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1754,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", { children: item }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1755,
												columnNumber: 25
											}, this)]
										}, idx, true, {
											fileName: _jsxFileName,
											lineNumber: 1750,
											columnNumber: 23
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1748,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1744,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1719,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-[11.5px] font-bold uppercase tracking-wider text-slate-400 block px-1",
									children: "End-to-End Logistics Pipeline"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1764,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2",
									children: LIFECYCLE_STAGES.map((st, i) => {
										const Icon = iconMap[st.iconName] || ClipboardList;
										const isCurrent = st.id === stageConfig.id;
										const isCompleted = i < currentStepIdx;
										return /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => void handleAdvanceStage(st),
											disabled: isUpdating,
											className: cn("flex w-full items-center justify-between gap-3 rounded-[20px] border p-3.5 text-left transition-all cursor-pointer", isCurrent ? "border-2 border-[#0D74FF] bg-[#F0F6FF] text-slate-900 shadow-xs" : isCompleted ? "border-emerald-200 bg-white text-slate-800 hover:bg-emerald-50/40" : "border-slate-200/70 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50/50", isUpdating && "opacity-60 cursor-not-allowed"),
											children: [
												/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-3 min-w-0",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: cn("grid size-8 shrink-0 place-items-center rounded-full text-[12px] font-bold shadow-2xs", isCurrent ? "bg-[#0D74FF] text-white" : isCompleted ? "bg-emerald-500 text-white" : "bg-[#EEF2F7] text-slate-500"),
														children: isCompleted ? /* @__PURE__ */ (void 0)(Check, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1801,
															columnNumber: 31
														}, this) : /* @__PURE__ */ (void 0)(Icon, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1803,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1790,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "min-w-0",
														children: [/* @__PURE__ */ (void 0)("p", {
															className: "text-[13px] font-bold truncate",
															children: [
																"Stage 0",
																st.stepNumber,
																": ",
																st.label
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1807,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("p", {
															className: "text-[11.5px] text-slate-500 truncate",
															children: st.description
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1810,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1806,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1789,
													columnNumber: 25
												}, this),
												isCurrent && /* @__PURE__ */ (void 0)("span", {
													className: "rounded-full bg-[#0D74FF] text-white px-3 py-0.5 text-[10px] font-bold shrink-0 shadow-2xs",
													children: "CURRENT"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1816,
													columnNumber: 27
												}, this),
												isCompleted && !isCurrent && /* @__PURE__ */ (void 0)("span", {
													className: "rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-0.5 text-[10px] font-bold shrink-0",
													children: "COMPLETED"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1821,
													columnNumber: 27
												}, this)
											]
										}, st.id, true, {
											fileName: _jsxFileName,
											lineNumber: 1774,
											columnNumber: 23
										}, this);
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1767,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1763,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1717,
							columnNumber: 13
						}, this),
						activeTab === "containers" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4 animate-in fade-in-50 duration-150",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
										className: "text-[15px] font-bold text-slate-900",
										children: [
											"Container Ledger (",
											containers.length,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1838,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-[12px] text-slate-500",
										children: "Track containers, verified gross mass (VGM), and high-security seals."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1841,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1837,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setShowAddContainer((v) => !v),
										className: "inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200/80 px-4 py-2 text-[12px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer",
										children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5 text-[#0D74FF]" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1850,
											columnNumber: 19
										}, this), showAddContainer ? "Close Form" : "Add Container"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1845,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1836,
									columnNumber: 15
								}, this),
								showAddContainer && /* @__PURE__ */ (void 0)("div", {
									className: "rounded-[24px] border border-[#0D74FF]/30 bg-[#F0F6FF]/70 p-5 space-y-4",
									children: [
										/* @__PURE__ */ (void 0)("p", {
											className: "text-[13.5px] font-bold text-slate-900",
											children: "Register Container to Movement"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1858,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs",
											children: [
												/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "text-[10.5px] font-bold text-slate-500 uppercase block ml-1 mb-1",
													children: "Container # *"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1863,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													placeholder: "MSCU9842104",
													value: newContainerNum,
													onChange: (e) => setNewContainerNum(e.target.value.toUpperCase()),
													disabled: isAddingContainer,
													className: "w-full rounded-full bg-white border border-slate-200 px-3.5 py-2 text-[12.5px] font-mono outline-none focus:border-[#0D74FF] focus:ring-2 focus:ring-[#0D74FF]/15 disabled:opacity-60"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1866,
													columnNumber: 23
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1862,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "text-[10.5px] font-bold text-slate-500 uppercase block ml-1 mb-1",
													children: "Seal #"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1876,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													placeholder: "SL-984210",
													value: newSealNum,
													onChange: (e) => setNewSealNum(e.target.value.toUpperCase()),
													disabled: isAddingContainer,
													className: "w-full rounded-full bg-white border border-slate-200 px-3.5 py-2 text-[12.5px] font-mono outline-none focus:border-[#0D74FF] focus:ring-2 focus:ring-[#0D74FF]/15 disabled:opacity-60"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1879,
													columnNumber: 23
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1875,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "text-[10.5px] font-bold text-slate-500 uppercase block ml-1 mb-1",
													children: "Weight (KG)"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1889,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "number",
													placeholder: "24500",
													value: newWeight,
													onChange: (e) => setNewWeight(e.target.value),
													disabled: isAddingContainer,
													className: "w-full rounded-full bg-white border border-slate-200 px-3.5 py-2 text-[12.5px] font-mono outline-none focus:border-[#0D74FF] focus:ring-2 focus:ring-[#0D74FF]/15 disabled:opacity-60"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1892,
													columnNumber: 23
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1888,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", { children: /* @__PURE__ */ (void 0)(LifecycleDropdownSelect, {
													label: "SIZE",
													value: newSize,
													onChange: (val) => setNewSize(val),
													options: [
														{
															value: "40HC",
															label: "40ft High Cube"
														},
														{
															value: "40FT",
															label: "40ft Standard"
														},
														{
															value: "20FT",
															label: "20ft Standard"
														}
													],
													placeholder: "Select Size",
													size: "sm",
													activeColor: "blue",
													triggerClassName: "w-full h-[38px] text-[12.5px]"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1902,
													columnNumber: 23
												}, this) }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1901,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", { children: /* @__PURE__ */ (void 0)(LifecycleDropdownSelect, {
													label: "CONTAINER TYPE",
													value: newType,
													onChange: (val) => setNewType(val),
													options: [
														{
															value: "High Cube",
															label: "High Cube"
														},
														{
															value: "Dry Standard",
															label: "Dry Standard"
														},
														{
															value: "Reefer",
															label: "Refrigerated"
														},
														{
															value: "Open Top",
															label: "Open Top"
														},
														{
															value: "Flat Rack",
															label: "Flat Rack"
														},
														{
															value: "Tank",
															label: "Tank Container"
														}
													],
													placeholder: "Select Type",
													size: "sm",
													activeColor: "blue",
													triggerClassName: "w-full h-[38px] text-[12.5px]"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1918,
													columnNumber: 23
												}, this) }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1917,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1861,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex justify-end gap-2 pt-1",
											children: [/* @__PURE__ */ (void 0)("button", {
												type: "button",
												disabled: isAddingContainer,
												onClick: () => setShowAddContainer(false),
												className: "px-4 py-2 text-[12px] font-medium text-slate-600 rounded-full hover:bg-white disabled:opacity-50",
												children: "Cancel"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1938,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												disabled: isAddingContainer,
												onClick: () => void handleAddContainer(),
												className: "inline-flex items-center gap-1.5 rounded-full bg-[#0D74FF] hover:bg-[#0062E3] px-5 py-2 text-[12px] font-bold text-white shadow-xs disabled:opacity-60 cursor-pointer",
												children: isAddingContainer ? /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(RefreshCw, { className: "size-3.5 animate-spin" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1954,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Saving to Supabase..." }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1955,
													columnNumber: 27
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1953,
													columnNumber: 25
												}, this) : /* @__PURE__ */ (void 0)("span", { children: "Save Container" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1958,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1946,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1937,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1857,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "space-y-2.5",
									children: containers.length === 0 ? /* @__PURE__ */ (void 0)("div", {
										className: "rounded-[24px] border border-dashed border-slate-200 bg-white p-6 text-center",
										children: [
											/* @__PURE__ */ (void 0)(Container, { className: "size-6 text-slate-400 mx-auto" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1969,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "mt-2 text-[13px] font-semibold text-slate-700",
												children: "No containers attached yet"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1970,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-[11.5px] text-slate-400",
												children: "Click \"Add Container\" above to register units."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1973,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1968,
										columnNumber: 19
									}, this) : containers.map((c) => {
										const trackingEvent = events.filter((e) => e.container_id === c.id || e.payload?.container_id === c.id || e.payload?.container_number === c.container_number).find((e) => e.event_type === "Tracking Initialized" || e.event_type === "Tracking Registered");
										const isTrackingActive = Boolean(trackingEvent);
										const trackingPayload = trackingEvent?.payload || {};
										const isProviderConnected = Boolean(trackingPayload.is_provider_connected);
										const lastTrackUpdate = trackingEvent?.created_at ? new Date(trackingEvent.created_at).toLocaleDateString("en-GB", {
											day: "numeric",
											month: "short",
											hour: "2-digit",
											minute: "2-digit"
										}) : null;
										return /* @__PURE__ */ (void 0)("div", {
											className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-[22px] border border-slate-200/60 bg-white p-4 shadow-2xs hover:border-slate-300 transition-colors",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-3.5 min-w-0",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "grid size-10 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#0D74FF] font-bold text-xs",
													children: /* @__PURE__ */ (void 0)(Container, { className: "size-4.5" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2013,
														columnNumber: 29
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2012,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "flex flex-wrap items-center gap-2",
														children: [
															/* @__PURE__ */ (void 0)("span", {
																className: "font-mono text-[14px] font-bold text-slate-900",
																children: c.container_number || "UNASSIGNED"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2017,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: "rounded-full bg-slate-100 px-2.5 py-0.5 text-[10.5px] font-semibold text-slate-600",
																children: [
																	c.container_size || "40HC",
																	" · ",
																	c.container_type || "High Cube"
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2020,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: "rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 text-[10.5px] font-bold text-emerald-700",
																children: c.status || "Allocated"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2023,
																columnNumber: 31
															}, this),
															isTrackingActive && /* @__PURE__ */ (void 0)("span", {
																className: cn("rounded-full px-2.5 py-0.5 text-[10px] font-bold inline-flex items-center gap-1", isProviderConnected ? "bg-blue-50 text-blue-700 border border-blue-200" : "bg-amber-50 text-amber-800 border border-amber-200"),
																title: isProviderConnected ? "Live tracking provider connected" : "Tracking registered in database; provider credentials pending",
																children: [/* @__PURE__ */ (void 0)(Radio, { className: "size-3" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2040,
																	columnNumber: 35
																}, this), isProviderConnected ? "Tracking Active" : "Tracking Registered (API Pending)"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2027,
																columnNumber: 33
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2016,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[12px] text-slate-500 font-mono mt-1",
														children: [
															"Seal: ",
															c.seal_number || "PENDING",
															" · VGM:",
															" ",
															(c.weight || 24500).toLocaleString(),
															" kg",
															lastTrackUpdate && ` · Tracked: ${lastTrackUpdate}`
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2047,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2015,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2011,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2 self-end sm:self-center shrink-0",
												children: [isTrackingActive ? /* @__PURE__ */ (void 0)(Link, {
													to: "/tracking",
													search: {
														id: booking?.id || "",
														ref: effectiveMovementRef,
														container: c.container_number || ""
													},
													className: "inline-flex items-center gap-1.5 rounded-full bg-slate-100 hover:bg-slate-200 px-3.5 py-1.5 text-[11px] font-bold text-slate-700 transition-colors shadow-2xs cursor-pointer",
													title: "Open visual tracking for this container",
													children: [/* @__PURE__ */ (void 0)(Eye, { className: "size-3.5 text-[#0D74FF]" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2067,
														columnNumber: 31
													}, this), /* @__PURE__ */ (void 0)("span", { children: "View Tracking" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2068,
														columnNumber: 31
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2057,
													columnNumber: 29
												}, this) : /* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => void handleStartTracking(c),
													disabled: trackingLoadingId === (c.id || c.container_number),
													className: "inline-flex items-center gap-1.5 rounded-full bg-[#0D74FF]/10 hover:bg-[#0D74FF]/20 border border-[#0D74FF]/30 px-3.5 py-1.5 text-[11.5px] font-bold text-[#0D74FF] transition-all cursor-pointer shadow-2xs active:scale-95 disabled:opacity-50",
													title: "Start container tracking session",
													children: [trackingLoadingId === (c.id || c.container_number) ? /* @__PURE__ */ (void 0)(RefreshCw, { className: "size-3.5 animate-spin" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2079,
														columnNumber: 33
													}, this) : /* @__PURE__ */ (void 0)(Ship, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2081,
														columnNumber: 33
													}, this), /* @__PURE__ */ (void 0)("span", { children: trackingLoadingId === (c.id || c.container_number) ? "Connecting..." : "Start Tracking" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2083,
														columnNumber: 31
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2071,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => void handleDeleteContainer(c.id),
													className: "grid size-8 place-items-center rounded-full text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer",
													title: "Remove container",
													children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2097,
														columnNumber: 29
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2091,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2055,
												columnNumber: 25
											}, this)]
										}, c.id, true, {
											fileName: _jsxFileName,
											lineNumber: 2007,
											columnNumber: 23
										}, this);
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1966,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1835,
							columnNumber: 13
						}, this),
						activeTab === "cutoffs" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4 animate-in fade-in-50 duration-150",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
										className: "text-[15px] font-bold text-slate-900",
										children: "Carrier Cut-Off Deadlines"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2113,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-[12px] text-slate-500",
										children: [
											"Deadlines maintained for Movement ",
											effectiveMovementRef,
											"."
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2116,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2112,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setShowAddCutOff((v) => !v),
										className: "inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200/80 px-4 py-2 text-[12px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer",
										children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5 text-[#0D74FF]" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2125,
											columnNumber: 19
										}, this), showAddCutOff ? "Close Form" : "Add Deadline"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2120,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2111,
									columnNumber: 15
								}, this),
								showAddCutOff && /* @__PURE__ */ (void 0)("div", {
									className: "rounded-[24px] border border-amber-200 bg-amber-50/50 p-5 space-y-4",
									children: [
										/* @__PURE__ */ (void 0)("p", {
											className: "text-[13.5px] font-bold text-slate-900",
											children: "Record Specific Cut-Off Deadline"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2133,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
											children: [/* @__PURE__ */ (void 0)("div", { children: /* @__PURE__ */ (void 0)(LifecycleDropdownSelect, {
												label: "CUT-OFF TYPE",
												value: newCutOffType,
												onChange: (val) => setNewCutOffType(val),
												options: [
													{
														value: "SI Cut-Off",
														label: "SI Cut-Off (Shipping Instructions)"
													},
													{
														value: "VGM Cut-Off",
														label: "VGM Cut-Off (Verified Gross Mass)"
													},
													{
														value: "Port Cut-Off",
														label: "Port Cut-Off"
													},
													{
														value: "Gate Cut-Off",
														label: "Gate Cut-Off"
													},
													{
														value: "Cargo Cut-Off",
														label: "Cargo Cut-Off"
													}
												],
												placeholder: "Select Cut-Off",
												size: "sm",
												activeColor: "teal",
												triggerClassName: "w-full h-[38px] text-[12.5px]"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2138,
												columnNumber: 23
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2137,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
												className: "text-[10.5px] font-bold text-slate-500 uppercase block ml-1 mb-1",
												children: "Date & Time"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2156,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "text",
												placeholder: "e.g. 24 Sep 2026 4:00 PM",
												value: newCutOffDateTime,
												onChange: (e) => setNewCutOffDateTime(e.target.value),
												className: "w-full rounded-full bg-white border border-slate-200 px-3.5 py-2 text-[12.5px] outline-none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2159,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2155,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2136,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex justify-end gap-2 pt-1",
											children: [/* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setShowAddCutOff(false),
												className: "px-4 py-2 text-[12px] font-medium text-slate-600 rounded-full hover:bg-white",
												children: "Cancel"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2169,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: handleSaveCutOffDeadline,
												className: "rounded-full bg-amber-600 hover:bg-amber-700 px-5 py-2 text-[12px] font-bold text-white shadow-2xs",
												children: "Save Deadline"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2176,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2168,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2132,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: !movementCutOffs || !movementCutOffs.deadlines || movementCutOffs.deadlines.length === 0 ? /* @__PURE__ */ (void 0)("div", {
										className: "col-span-full rounded-[24px] border border-dashed border-slate-200 bg-white p-6 text-center",
										children: [
											/* @__PURE__ */ (void 0)(Timer, { className: "size-6 text-slate-400 mx-auto" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2193,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "mt-2 text-[13px] font-semibold text-slate-700",
												children: "No cut-off notices recorded yet"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2194,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-[11.5px] text-slate-400",
												children: "Add deadlines above or forward booking confirmations to auto-parse."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2197,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2192,
										columnNumber: 19
									}, this) : movementCutOffs.deadlines.map((dl, idx) => /* @__PURE__ */ (void 0)("div", {
										className: "rounded-[22px] border border-slate-200/60 bg-white p-4 shadow-2xs space-y-1.5",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] font-bold uppercase tracking-wider text-amber-700",
												children: dl.type
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2208,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "rounded-full bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 text-[10.5px] font-semibold text-amber-700",
												children: dl.in || "Active"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2211,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2207,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "font-mono text-[14px] font-bold text-slate-900",
											children: dl.dateTime || `${dl.date || ""} ${dl.time || ""}`
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2215,
											columnNumber: 23
										}, this)]
									}, `dl-${dl.type}-${idx}`, true, {
										fileName: _jsxFileName,
										lineNumber: 2203,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 2188,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 2110,
							columnNumber: 13
						}, this),
						activeTab === "audit" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4 animate-in fade-in-50 duration-150",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between",
									children: /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
										className: "text-[15px] font-bold text-slate-900",
										children: [
											"Live Movement Events (",
											events.length,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2230,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-[12px] text-slate-500",
										children: "Immutable real-time audit stream synchronized across operations."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2233,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2229,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 2228,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "flex flex-col sm:flex-row gap-2 rounded-[24px] border border-slate-200/60 bg-white p-3.5 shadow-2xs",
									children: [
										/* @__PURE__ */ (void 0)("input", {
											type: "text",
											placeholder: "Log operational update note...",
											value: customEventText,
											onChange: (e) => setCustomEventText(e.target.value),
											className: "flex-1 rounded-full border border-slate-200 bg-[#F7F9FD] px-4 py-2 text-[12.5px] outline-none focus:bg-white focus:border-[#0D74FF]"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2241,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("input", {
											type: "text",
											placeholder: "Location",
											value: customEventLocation,
											onChange: (e) => setCustomEventLocation(e.target.value),
											className: "rounded-full border border-slate-200 bg-[#F7F9FD] px-4 py-2 text-[12.5px] outline-none sm:w-44 focus:bg-white focus:border-[#0D74FF]"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2248,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => void handleAddCustomEvent(),
											className: "rounded-full bg-[#0D74FF] hover:bg-[#0062E3] px-5 py-2 text-[12px] font-bold text-white shadow-2xs",
											children: "Log Note"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2255,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2240,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "space-y-3 border-l-2 border-slate-200 pl-4 ml-3 pt-1",
									children: events.length === 0 ? /* @__PURE__ */ (void 0)("p", {
										className: "text-[12px] text-slate-400 py-2",
										children: "No event records logged yet."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2267,
										columnNumber: 19
									}, this) : events.map((evt) => /* @__PURE__ */ (void 0)("div", {
										className: "relative group space-y-0.5",
										children: [
											/* @__PURE__ */ (void 0)("span", { className: "absolute -left-[23px] top-1.5 size-3 rounded-full border-2 border-white bg-[#0D74FF] shadow-xs" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2271,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-[13px] font-bold text-slate-900",
													children: evt.event_type
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2273,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-[11px] text-slate-400 font-mono",
													children: new Date(evt.event_date || evt.created_at).toLocaleString("en-GB", {
														day: "2-digit",
														month: "short",
														hour: "2-digit",
														minute: "2-digit"
													})
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2276,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2272,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-[12px] text-slate-600",
												children: evt.description
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2285,
												columnNumber: 23
											}, this),
											evt.location && /* @__PURE__ */ (void 0)("span", {
												className: "inline-flex items-center gap-1 text-[11px] text-slate-400",
												children: [/* @__PURE__ */ (void 0)(MapPin, { className: "size-3 text-[#0D74FF]" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2288,
													columnNumber: 27
												}, this), evt.location]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2287,
												columnNumber: 25
											}, this)
										]
									}, evt.id, true, {
										fileName: _jsxFileName,
										lineNumber: 2270,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 2265,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 2227,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 989,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between border-t border-slate-200/60 bg-white px-6 py-4 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => {
							toast.success("Terminal pass generated", { description: `Pass for ${effectiveMovementRef} downloaded` });
						},
						className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[12.5px] font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "size-3.5 text-slate-500" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 2311,
							columnNumber: 13
						}, this), "Export Pass"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 2302,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: onClose,
							className: "rounded-full bg-white border border-slate-200/80 px-5 py-2.5 text-[12.5px] font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs",
							children: "Close"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 2316,
							columnNumber: 13
						}, this), nextStage && /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => void handleAdvanceStage(),
							disabled: isUpdating,
							className: "inline-flex items-center gap-2 rounded-full bg-[#0D74FF] hover:bg-[#0062E3] px-6 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(13,116,255,0.28)] transition-all cursor-pointer disabled:opacity-50",
							children: [isUpdating ? "Updating..." : `Advance to ${nextStage.shortLabel}`, /* @__PURE__ */ (void 0)(ArrowRight, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2331,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 2324,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 2315,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 2301,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 870,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 857,
		columnNumber: 5
	}, this), document.body);
}
//#endregion
export { MovementLifecycleDrawer_BFcX3wIF_exports as n, MovementLifecycleDrawer as t };
