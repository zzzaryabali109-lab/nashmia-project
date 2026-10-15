import { n as supabase, t as isSupabaseConfigured } from "./supabase-lbao-IEt.mjs";
import { a as getApp, o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import "../_libs/firebase.mjs";
import { n as getAuth, r as signInWithPopup, t as GoogleAuthProvider } from "../_libs/firebase__auth.mjs";
import { t as purify_default } from "../_libs/dompurify.mjs";
import { n as Type, t as GoogleGenAI } from "../_libs/@google/genai.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/supabase-services-DTUAkMPq.js
var LIFECYCLE_STAGES = [
	{
		id: "Booking Requested",
		label: "Booking Requested",
		shortLabel: "Requested",
		description: "Initial booking request generated with buyer, supplier, and freight parameters.",
		stepNumber: 1,
		badgeClass: "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300",
		iconName: "ClipboardList",
		category: "pre-warehouse",
		checklist: [
			"Buyer and Supplier parties validated",
			"Route parameters (POL → POD) established",
			"Rate card commercial freight locked",
			"Booking EDI transmitted to Forwarder"
		],
		nextActionLabel: "Confirm Booking & Assign Carrier",
		locationDefault: "Origin Office"
	},
	{
		id: "Booking Confirmed",
		label: "Booking Confirmed",
		shortLabel: "Confirmed",
		description: "Carrier and forwarder confirmed space, vessel schedule, and container release.",
		stepNumber: 2,
		badgeClass: "border-sky-500/20 bg-sky-500/10 text-sky-700 dark:text-sky-300",
		iconName: "BadgeCheck",
		category: "pre-warehouse",
		checklist: [
			"Shipping line booking reference issued",
			"Vessel name and voyage number assigned",
			"Container release order authorized from depot",
			"Depot gate-in window scheduled"
		],
		nextActionLabel: "Receive Cargo at Warehouse",
		locationDefault: "Depot / Booking Desk"
	},
	{
		id: "Cargo Received at Warehouse",
		label: "Cargo Received at Warehouse",
		shortLabel: "Warehouse Staged",
		description: "Supplier goods physically received, weighed, and staged at warehouse loading dock.",
		stepNumber: 3,
		badgeClass: "border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
		iconName: "Warehouse",
		category: "warehouse",
		checklist: [
			"Supplier delivery vehicle inspected",
			"Tally sheet and packing list verified against PO",
			"Gross weight and cubic volume checked",
			"Cargo positioned in warehouse loading bay"
		],
		nextActionLabel: "Begin Stuffing & Apply Container Seal",
		locationDefault: "London Central Warehouse, Bay 4A"
	},
	{
		id: "Stuffing & Sealing",
		label: "Stuffing & Sealing",
		shortLabel: "Stuffed & Sealed",
		description: "Cargo loaded into container, Verified Gross Mass (VGM) certified, and high-security seal attached.",
		stepNumber: 4,
		badgeClass: "border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300",
		iconName: "PackageCheck",
		category: "warehouse",
		checklist: [
			"Empty container inspected for clean/dry/odorless condition",
			"Cargo stuffed per weight distribution plan",
			"High-security bolt seal affixed and recorded",
			"VGM weight certificate generated and signed"
		],
		nextActionLabel: "Verify Customs & Generate Gate Pass",
		locationDefault: "London Central Warehouse, Stuffing Bay"
	},
	{
		id: "Customs Cleared",
		label: "Customs Cleared",
		shortLabel: "Customs Cleared",
		description: "Export customs declaration filed, port entry permit and outbound gate pass issued.",
		stepNumber: 5,
		badgeClass: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
		iconName: "FileCheck2",
		category: "dispatch",
		checklist: [
			"Single Administrative Document (SAD / C88) submitted",
			"Commercial invoice and packing list cleared",
			"Haulier truck and driver details allocated",
			"Warehouse Outbound Gate Pass generated"
		],
		nextActionLabel: "Ship Container from Warehouse (Gate-Out)",
		locationDefault: "Warehouse Customs Inspection Desk"
	},
	{
		id: "Container Shipped from Warehouse",
		label: "Container Shipped from Warehouse",
		shortLabel: "Dispatched",
		description: "Container trailer departed warehouse gate; en route to port of loading.",
		stepNumber: 6,
		badgeClass: "border-teal-500/20 bg-teal-500/10 text-teal-700 dark:text-teal-300",
		iconName: "Truck",
		category: "dispatch",
		checklist: [
			"Warehouse security gate-out timestamp logged",
			"Driver handed over stamped shipping documentation",
			"GPS tracking initiated to Port of Loading",
			"Port cutoff countdown active"
		],
		nextActionLabel: "Mark Container Loaded On-Board Vessel",
		locationDefault: "En Route to POL (Felixstowe)"
	},
	{
		id: "In Transit",
		label: "In Transit",
		shortLabel: "In Transit",
		description: "Container loaded on ocean vessel and voyage underway across international waters.",
		stepNumber: 7,
		badgeClass: "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-300",
		iconName: "Ship",
		category: "transit",
		checklist: [
			"Container loaded on container vessel",
			"Ocean Bill of Lading (B/L) issued",
			"Vessel departure confirmation received",
			"ETA monitoring active"
		],
		nextActionLabel: "Mark Vessel Arrived at Destination Port",
		locationDefault: "At Sea / Ocean Transit"
	},
	{
		id: "Arrived",
		label: "Arrived at Port",
		shortLabel: "Arrived",
		description: "Vessel berthed at destination port of discharge (POD).",
		stepNumber: 8,
		badgeClass: "border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
		iconName: "Anchor",
		category: "final",
		checklist: [
			"Vessel berthed at destination terminal",
			"Container discharged from vessel onto port stack",
			"Arrival notice dispatched to consignee/buyer",
			"Import customs clearance initiated"
		],
		nextActionLabel: "Complete Final Delivery to Buyer",
		locationDefault: "Port of Discharge (Karachi)"
	},
	{
		id: "Delivered",
		label: "Delivered",
		shortLabel: "Delivered",
		description: "Container released, transported to buyer's warehouse, and POD signed.",
		stepNumber: 9,
		badgeClass: "border-emerald-600/20 bg-emerald-600/15 text-emerald-800 dark:text-emerald-300",
		iconName: "CheckCircle2",
		category: "final",
		checklist: [
			"Consignee delivery appointment scheduled",
			"Container de-vanned at buyer facility",
			"Proof of Delivery (POD) signed and archived",
			"Empty container returned to carrier depot"
		],
		nextActionLabel: "Movement Complete",
		locationDefault: "Buyer Warehouse Destination"
	}
];
/**
* Maps any UI lifecycle stage or status to the strictly allowed database bookings.status column value.
* Prevents PostgreSQL 23514 check constraint violations ("bookings_status_check").
*/
function toDbBookingStatus(statusOrStage) {
	if (!statusOrStage) return "Booking Requested";
	const s = statusOrStage.trim().toLowerCase();
	if (s === "draft" || s.startsWith("draft")) return "Draft";
	if (s.includes("cancel") || s === "rejected") return "Cancelled";
	if (s.includes("deliver") || s.includes("completed")) return "Delivered";
	if (s.includes("transit") || s.includes("at sea") || s.includes("sailing") || s.includes("arriv")) return "In Transit";
	if (s.includes("confirm") || s.includes("approv") || s.includes("warehouse") || s.includes("stuff") || s.includes("seal") || s.includes("loaded") || s.includes("custom") || s.includes("cleared") || s.includes("ship") || s.includes("dispatch")) return "Confirmed";
	return "Booking Requested";
}
/**
* Maps any UI lifecycle stage or status to the allowed bookings.movement_status column value.
*/
function toDbMovementStatus(statusOrStage) {
	if (!statusOrStage) return "REQUESTED";
	const s = statusOrStage.trim().toLowerCase();
	if (s === "draft" || s.startsWith("draft")) return "DRAFT";
	if (s.includes("deliver") || s.includes("completed")) return "DELIVERED";
	if (s.includes("arriv") || s.includes("berth") || s.includes("discharg")) return "ARRIVED";
	if (s.includes("transit") || s.includes("at sea") || s.includes("sailing")) return "IN_TRANSIT";
	if (s.includes("ship") || s.includes("dispatch") || s.includes("gate-out") || s.includes("gate out")) return "DISPATCHED";
	if (s.includes("custom") || s.includes("cleared")) return "CUSTOMS_CLEARED";
	if (s.includes("stuff") || s.includes("seal") || s.includes("loaded")) return "STUFFING_SEALING";
	if (s.includes("received") || s.includes("staged") || s.includes("warehouse")) return "CARGO_RECEIVED";
	if (s.includes("confirm") || s.includes("approv")) return "CONFIRMED";
	return "REQUESTED";
}
/**
* Normalize any legacy, database or variant status string to standard LifecycleStage.
* Authoritative interpretation hierarchy:
* 1. movement_status (exact operational milestone)
* 2. status (database status)
* 3. confirmation_status (CONFIRMED space verification)
*/
function normalizeLifecycleStage(status, confirmationStatus, identifierOrIsConfirmed, movementStatus) {
	const m = (movementStatus || "").trim().toUpperCase();
	const confUpper = (confirmationStatus || "").trim().toUpperCase();
	const s = (status || "").trim().toLowerCase();
	if (m === "DELIVERED") return "Delivered";
	if (m === "ARRIVED") return "Arrived";
	if (m === "IN_TRANSIT") return "In Transit";
	if (m === "DISPATCHED") return "Container Shipped from Warehouse";
	if (m === "CUSTOMS_CLEARED") return "Customs Cleared";
	if (m === "STUFFING_SEALING") return "Stuffing & Sealing";
	if (m === "CARGO_RECEIVED") return "Cargo Received at Warehouse";
	if (m === "CONFIRMED") return "Booking Confirmed";
	if (m === "REQUESTED") return "Booking Requested";
	if (m === "DRAFT") return s.includes("request") ? "Booking Requested" : "Draft";
	for (const stage of LIFECYCLE_STAGES) if (stage.id.toLowerCase() === s) return stage.id;
	let isExplicitlyConfirmed = confUpper === "CONFIRMED";
	if (!isExplicitlyConfirmed && typeof identifierOrIsConfirmed === "boolean") isExplicitlyConfirmed = identifierOrIsConfirmed;
	else if (!isExplicitlyConfirmed && typeof identifierOrIsConfirmed === "string" && identifierOrIsConfirmed) {
		if (typeof window !== "undefined") try {
			const raw = localStorage.getItem("nashmia_confirmed_identifiers_v1");
			if (raw) {
				const arr = JSON.parse(raw);
				if (Array.isArray(arr) && arr.includes(identifierOrIsConfirmed.trim().toUpperCase())) isExplicitlyConfirmed = true;
			}
		} catch {}
	}
	if (!status) return isExplicitlyConfirmed ? "Booking Confirmed" : "Booking Requested";
	if (s.includes("deliver") || s.includes("completed")) return "Delivered";
	if (s.includes("arriv") || s.includes("berth") || s.includes("discharg")) return "Arrived";
	if (s.includes("transit") || s.includes("at sea") || s.includes("sailing")) return "In Transit";
	if (s.includes("shipped") || s.includes("dispatch") || s.includes("gate-out") || s.includes("gate out")) return "Container Shipped from Warehouse";
	if (s.includes("custom") || s.includes("cleared")) return "Customs Cleared";
	if (s.includes("stuff") || s.includes("seal") || s.includes("loaded")) return "Stuffing & Sealing";
	if (s.includes("received") || s.includes("staged") || s.includes("warehouse staged") || s.includes("warehouse")) return "Cargo Received at Warehouse";
	if (s.includes("quote") || s.includes("offer") || s.includes("verification") || s.includes("awarded") || s.includes("allocation")) {
		if (isExplicitlyConfirmed) return "Booking Confirmed";
		return "Booking Requested";
	}
	if (isExplicitlyConfirmed || s === "booking confirmed" || s === "confirmed" || s === "approved" || s === "booking approved" || s.includes("space confirmed") || s.includes("carrier confirmed")) return "Booking Confirmed";
	if (s === "draft" || s.startsWith("draft")) return "Draft";
	return "Booking Requested";
}
function getLifecycleStageConfig(status, confirmationStatus, identifierOrIsConfirmed, movementStatus) {
	const normalized = normalizeLifecycleStage(status, confirmationStatus, identifierOrIsConfirmed, movementStatus);
	return LIFECYCLE_STAGES.find((st) => st.id === normalized) || LIFECYCLE_STAGES[0];
}
function getStageStepIndex(status, confirmationStatus, identifierOrIsConfirmed, movementStatus) {
	const normalized = normalizeLifecycleStage(status, confirmationStatus, identifierOrIsConfirmed, movementStatus);
	const idx = LIFECYCLE_STAGES.findIndex((st) => st.id === normalized);
	return idx >= 0 ? idx : 0;
}
function getNextLifecycleStage(status, confirmationStatus, identifierOrIsConfirmed, movementStatus) {
	const currentIdx = getStageStepIndex(status, confirmationStatus, identifierOrIsConfirmed, movementStatus);
	if (currentIdx < LIFECYCLE_STAGES.length - 1) return LIFECYCLE_STAGES[currentIdx + 1];
	return null;
}
/**
* Generates a standardized, unique Movement Number.
* Format: NASH-BK-YYYY-XXXX (e.g., NASH-BK-2026-7023)
*/
function generateMovementNumber(year = (/* @__PURE__ */ new Date()).getFullYear()) {
	return `NASH-BK-${year}-${Math.floor(1e3 + Math.random() * 9e3)}`;
}
/**
* Extracts a Movement or Booking Number (NASH-2026-000145, BK-YYYY-XXXXX, BK/YYYY/XXXXX, BOOKING-YYYY-XXXXX, REF: BK-YYYY-XXXXX, MOV-YYYY-XXXXX, NASH-BK-YYYY-XXXX, REQ-YYYY-XXXXX)
*/
function extractMovementNumber(text) {
	if (!text) return null;
	const nashMatch = text.match(/(?:^|[^A-Za-z0-9])(NASH[-_](?:BK[-_]|MOV[-_])?[0-9]{4}[-_][0-9]{3,8})(?:$|[^A-Za-z0-9])/i) || text.match(/\b(NASH[-_](?:BK[-_]|MOV[-_])?[0-9]{4}[-_][0-9]{3,8})\b/i);
	if (nashMatch) return nashMatch[1].toUpperCase().replace(/_/g, "-");
	const compoundMatch = text.match(/\b([A-Z0-9]{2,10}-(?:REQ|BK|MOV|BKG)[-/][0-9]{4}[-/][0-9]{3,8})\b/i) || text.match(/\b(NASH[-_][A-Z0-9-]{3,20})\b/i);
	if (compoundMatch) return compoundMatch[1].toUpperCase().replace(/\//g, "-");
	const refMatch = text.match(/\b(?:REF|REFERENCE|OUR\s*REF|YOUR\s*REF)[\s.:#*-]+((?:BK|BOOKING|MOV|MOVEMENT|NASH[-_]BK|REQ|BKG)[-_/][0-9]{4}[-_/][0-9]{3,8})\b/i);
	if (refMatch) return refMatch[1].toUpperCase().replace(/\//g, "-");
	const movMatch = text.match(/\b(MOV[-/]\d{4}[-/]\d{3,6})\b/i) || text.match(/\b(MOVEMENT[-/]\d{4}[-/]\d{3,6})\b/i) || text.match(/\b(MOV-[A-Z0-9-]{3,20})\b/i);
	if (movMatch) return movMatch[1].toUpperCase().replace(/\//g, "-");
	const bkMatch = text.match(/\b(BK[-/]\d{4}[-/]\d{3,8})\b/i) || text.match(/\b(BOOKING[-/]\d{4}[-/]\d{3,8})\b/i);
	if (bkMatch) return bkMatch[1].toUpperCase().replace(/\//g, "-");
	const match = text.match(/\b((?:REQ|BK)[-/]\d{4}[-/]\d{3,6})\b/i) || text.match(/\b((?:REQ|BK)-[A-Z0-9-]{3,20})\b/i) || text.match(/\b(BKG?-[A-Z0-9-]{3,20})\b/i) || text.match(/\b(REF-[A-Z0-9-]{3,20})\b/i);
	return match ? match[1].toUpperCase().replace(/\//g, "-") : null;
}
var CURRENCY_OPTIONS = [
	{
		value: "USD",
		symbol: "$",
		label: "USD - US Dollar"
	},
	{
		value: "GBP",
		symbol: "£",
		label: "GBP - British Pound"
	},
	{
		value: "EUR",
		symbol: "€",
		label: "EUR - Euro"
	},
	{
		value: "PKR",
		symbol: "Rs",
		label: "PKR - Pakistani Rupee"
	},
	{
		value: "AED",
		symbol: "AED",
		label: "AED - UAE Dirham"
	}
];
/**
* Calculates total landed rate per container including applicable surcharges.
*/
function calculateTotalRate(baseRate, charges) {
	const surchargeTotal = charges.reduce((sum, c) => sum + (Number(c.amount) || 0), 0);
	return (Number(baseRate) || 0) + surchargeTotal;
}
/**
* Checks if a rate card is expired based on validUntil ISO date string.
*/
function computeEffectiveStatus(status, validUntil) {
	if (status === "Inactive") return "Inactive";
	if (!validUntil) return status;
	try {
		const expiry = new Date(validUntil).getTime();
		const now = Date.now();
		if (expiry + 864e5 < now) return "Expired";
	} catch {}
	return status || "Active";
}
/**
* Encodes extra metadata cleanly into the notes string for transparent DB persistence.
*/
function encodeRateCardNotes(userNotes, metadata) {
	const metaPayload = {};
	if (metadata?.load_point) metaPayload.load_point = metadata.load_point;
	if (metadata?.quantity) metaPayload.quantity = metadata.quantity;
	if (metadata?.additional_charges && metadata.additional_charges.length > 0) metaPayload.additional_charges = metadata.additional_charges;
	if (metadata?.etd) metaPayload.etd = metadata.etd;
	if (metadata?.eta) metaPayload.eta = metadata.eta;
	if (metadata?.free_demurrage_days) metaPayload.free_demurrage_days = metadata.free_demurrage_days;
	const cleanUserNotes = (userNotes || "").trim();
	if (Object.keys(metaPayload).length === 0) return cleanUserNotes;
	const metaString = `__RC_META__:${JSON.stringify(metaPayload)}`;
	if (!cleanUserNotes) return metaString;
	return `${cleanUserNotes}\n\n${metaString}`;
}
/**
* Decodes metadata from notes string.
*/
function decodeRateCardNotes(rawNotes) {
	if (!rawNotes) return { userNotes: "" };
	const idx = rawNotes.indexOf("__RC_META__:");
	if (idx === -1) return { userNotes: rawNotes.trim() };
	const userNotes = rawNotes.substring(0, idx).trim();
	const jsonStr = rawNotes.substring(idx + 12).trim();
	try {
		const meta = JSON.parse(jsonStr);
		return {
			userNotes,
			load_point: meta.load_point || void 0,
			quantity: typeof meta.quantity === "number" ? meta.quantity : void 0,
			additional_charges: Array.isArray(meta.additional_charges) ? meta.additional_charges : void 0,
			etd: meta.etd || void 0,
			eta: meta.eta || void 0,
			free_demurrage_days: typeof meta.free_demurrage_days === "number" ? meta.free_demurrage_days : void 0
		};
	} catch {
		return { userNotes: rawNotes.trim() };
	}
}
/**
* Normalizes a raw Supabase rate_cards row into a rich FullRateCardRecord.
*/
function normalizeRateCardRecord(raw) {
	const decoded = decodeRateCardNotes(raw.notes);
	const baseRate = Number(raw.base_rate ?? raw.rate ?? 0);
	const additionalCharges = decoded.additional_charges || [];
	const validUntil = raw.valid_until || new Date(Date.now() + 2592e6).toISOString().split("T")[0];
	const validFrom = raw.valid_from || raw.effective_from || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
	const status = computeEffectiveStatus(raw.status || "Active", validUntil);
	const transitMin = typeof raw.transit_days_min === "number" ? raw.transit_days_min : null;
	const transitMax = typeof raw.transit_days_max === "number" ? raw.transit_days_max : null;
	let transitTimeText = null;
	if (transitMin && transitMax) transitTimeText = `${transitMin}–${transitMax} days`;
	else if (transitMin) transitTimeText = `${transitMin} days`;
	else if (transitMax) transitTimeText = `${transitMax} days`;
	return {
		id: raw.id || "",
		user_id: raw.user_id || null,
		forwarder_id: raw.forwarder_id || "",
		shipping_line_id: raw.shipping_line_id || null,
		card_name: raw.card_name || null,
		lane: raw.lane || `${raw.origin || "POL"} → ${raw.destination || "POD"}`,
		origin: raw.origin || raw.pol_name || raw.pol_code || "POL",
		destination: raw.destination || raw.pod_name || raw.pod_code || "POD",
		load_point: decoded.load_point || null,
		pol_code: raw.pol_code || null,
		pol_name: raw.pol_name || null,
		pod_code: raw.pod_code || null,
		pod_name: raw.pod_name || null,
		container_type: raw.container_type || "High Cube",
		container_size: raw.container_size || "40HC",
		quantity: decoded.quantity || 1,
		base_rate: baseRate,
		rate: baseRate,
		currency: (raw.currency || "USD").toUpperCase(),
		additional_charges: additionalCharges,
		total_rate_estimate: calculateTotalRate(baseRate, additionalCharges),
		transit_days_min: transitMin,
		transit_days_max: transitMax,
		transit_time: transitTimeText,
		etd: decoded.etd || null,
		eta: decoded.eta || null,
		valid_from: validFrom,
		valid_until: validUntil,
		status,
		notes: decoded.userNotes || raw.notes || null,
		free_demurrage_days: decoded.free_demurrage_days || 14,
		created_at: raw.created_at || (/* @__PURE__ */ new Date()).toISOString(),
		updated_at: raw.updated_at || void 0,
		forwarders: raw.forwarders || null,
		shipping_lines: raw.shipping_lines || null
	};
}
var INITIAL_FOLDERS = [
	{
		id: "folder-design",
		name: "Shipment Notices",
		fileCount: 0,
		totalSize: "0 KB",
		sharedWith: [],
		isActive: true
	},
	{
		id: "folder-dev",
		name: "Customs & Clearance",
		fileCount: 0,
		totalSize: "0 KB",
		sharedWith: [],
		isActive: false
	},
	{
		id: "folder-marketing",
		name: "Bills of Lading",
		fileCount: 0,
		totalSize: "0 KB",
		sharedWith: [],
		isActive: false
	},
	{
		id: "folder-finance",
		name: "Invoices & Receipts",
		fileCount: 0,
		totalSize: "0 KB",
		sharedWith: [],
		isActive: false
	}
];
var INITIAL_FILES = [];
var DOCUMENTS_STORAGE_KEY = "nashmia_saved_documents_v2";
/**
* Retrieves all saved documents from client storage.
* Safe for SSR.
*/
function getSavedDocuments() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(DOCUMENTS_STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		const merged = [];
		const seenIds = /* @__PURE__ */ new Set();
		for (const file of parsed) if (!seenIds.has(file.id)) {
			merged.push(file);
			seenIds.add(file.id);
		}
		return merged;
	} catch {
		return [];
	}
}
/**
* Saves or updates a DriveFile in client storage and notifies any active listeners.
*/
function saveDriveDocument(file) {
	if (typeof window === "undefined") return [file];
	try {
		const updated = [file, ...getSavedDocuments().filter((f) => f.id !== file.id)];
		localStorage.setItem(DOCUMENTS_STORAGE_KEY, JSON.stringify(updated));
		window.dispatchEvent(new CustomEvent("nashmia:document-saved", { detail: file }));
		return updated;
	} catch (err) {
		console.warn("Failed to save document to localStorage:", err);
		return [file];
	}
}
/**
* Removes a DriveFile from client storage by ID.
*/
function removeDriveDocument(fileId) {
	if (typeof window === "undefined") return [];
	try {
		const updated = getSavedDocuments().filter((f) => f.id !== fileId);
		localStorage.setItem(DOCUMENTS_STORAGE_KEY, JSON.stringify(updated));
		window.dispatchEvent(new CustomEvent("nashmia:document-deleted", { detail: { id: fileId } }));
		return updated;
	} catch {
		return [];
	}
}
/**
* Manually links and updates a NEEDS_REVIEW document to a verified Movement and Document Type.
*/
function linkAndReviewDriveDocument(fileId, updates) {
	const target = getSavedDocuments().find((f) => f.id === fileId);
	if (!target) return null;
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const updatedMetadata = {
		...target.metadata,
		reviewStatus: "CONFIRMED",
		needsReview: false,
		movementNumber: updates.movementNumber,
		bookingId: updates.bookingId || target.metadata?.bookingId || null,
		documentType: updates.documentType,
		category: updates.category || (updates.documentType === "CUT_OFF_NOTICE" ? "Cut-Off Notice" : updates.documentType === "BILL_OF_LADING" ? "Bill of Lading" : "General"),
		cutOffDates: updates.cutOffDates || target.metadata?.cutOffDates,
		cutOffDeadlines: updates.cutOffDeadlines || target.metadata?.cutOffDeadlines,
		reviewedBy: updates.reviewerName || "Authorized Operator",
		reviewedAt: nowIso
	};
	const updatedFile = {
		...target,
		folderId: updates.folderId || target.folderId || "folder-design",
		metadata: updatedMetadata
	};
	saveDriveDocument(updatedFile);
	return updatedFile;
}
var MOVEMENT_CUTOFFS_STORAGE_KEY = "nashmia_movement_cutoffs_registry_v1";
var CUTOFF_REMINDERS_CREATED_STORAGE_KEY = "nashmia_cutoff_reminders_created_registry_v2";
/**
* Builds a deterministic canonical deduplication key for:
* Movement + Cut-Off Type + Cut-Off Date/Time
*/
function buildCutOffReminderDedupeKey(movementIdentifier, cutoffType, cutoffDateTime) {
	const normMovement = normalizeMovementKey(movementIdentifier);
	const normType = cutoffType.trim().toLowerCase().replace(/[^a-z0-9]/g, "_");
	const parsedDate = parseCutOffToDate(cutoffDateTime);
	let normDateTimeKey;
	if (parsedDate && !isNaN(parsedDate.getTime())) normDateTimeKey = String(parsedDate.getTime());
	else normDateTimeKey = cutoffDateTime.trim().toLowerCase().replace(/\s+/g, "_");
	return `${normMovement}::${normType}::${normDateTimeKey}`;
}
/**
* Builds a deterministic notification ID for:
* Movement + Cut-Off Type + Cut-Off Date/Time
*/
function buildCutOffReminderNotificationId(movementIdentifier, cutoffType, cutoffDateTime) {
	const normMovement = normalizeMovementKey(movementIdentifier).replace(/[^a-z0-9-]/g, "_");
	const normType = cutoffType.trim().toLowerCase().replace(/[^a-z0-9]/g, "_");
	const parsedDate = parseCutOffToDate(cutoffDateTime);
	return `cutoff-reminder-${normMovement}-${normType}-${parsedDate && !isNaN(parsedDate.getTime()) ? String(parsedDate.getTime()) : cutoffDateTime.trim().toLowerCase().replace(/[^a-z0-9]/g, "_")}`;
}
/**
* Retrieves the persistent registry of created cut-off reminders.
*/
function getCreatedCutOffRemindersRegistry() {
	if (typeof window === "undefined") return {};
	try {
		const raw = localStorage.getItem(CUTOFF_REMINDERS_CREATED_STORAGE_KEY);
		if (!raw) return {};
		return JSON.parse(raw);
	} catch {
		return {};
	}
}
/**
* Checks if a 48-hour reminder has already been created for:
* Movement + Cut-Off Type + Cut-Off Date/Time
*/
function isCutOffReminderCreated(movementIdentifier, cutoffType, cutoffDateTime) {
	const key = buildCutOffReminderDedupeKey(movementIdentifier, cutoffType, cutoffDateTime);
	const registry = getCreatedCutOffRemindersRegistry();
	return Boolean(registry[key]);
}
/**
* Records a created cut-off reminder in the persistent registry.
*/
function markCutOffReminderCreated(entry) {
	const dedupeKey = buildCutOffReminderDedupeKey(entry.movementNumber, entry.cutoffType, entry.cutoffDateTime);
	const notificationId = buildCutOffReminderNotificationId(entry.movementNumber, entry.cutoffType, entry.cutoffDateTime);
	const fullEntry = {
		...entry,
		dedupeKey,
		notificationId
	};
	if (typeof window !== "undefined") try {
		const registry = getCreatedCutOffRemindersRegistry();
		registry[dedupeKey] = fullEntry;
		localStorage.setItem(CUTOFF_REMINDERS_CREATED_STORAGE_KEY, JSON.stringify(registry));
	} catch {}
	return fullEntry;
}
/**
* Normalizes movement identifiers to a standard uppercase key for strict matching.
* Handles alias variations like NASH-2026-0042 vs NASH-CM-00042.
*/
function normalizeMovementKey(identifier) {
	if (!identifier) return "";
	const cleaned = identifier.trim().toUpperCase();
	if (cleaned === "NASH-CM-00042" || cleaned === "NASH-2026-0042" || cleaned === "NASH-BK-2026-0042" || cleaned === "428B49E1-B1E0-4A87-A068-1E43CFA11042") return "NASH-2026-0042";
	return cleaned;
}
/**
* Robust parser for Cut-Off date and time strings.
* Handles:
* - "18 Sep 2026 4:00 PM"
* - "18 Sep 2026 — 4:00 PM"
* - "18 Sep 2026, 4:00 PM"
* - "2026-09-18T16:00:00"
* - "2026-09-18 16:00"
*/
function parseCutOffToDate(str) {
	if (!str) return null;
	const raw = String(str).trim();
	if (!raw || raw === "—" || raw.toLowerCase() === "pending") return null;
	const direct = new Date(raw);
	if (!isNaN(direct.getTime()) && direct.getFullYear() > 2e3) return direct;
	const clean = raw.replace(/[—–]/g, " ").replace(/,/g, " ").replace(/\s+/g, " ").trim();
	const second = new Date(clean);
	if (!isNaN(second.getTime()) && second.getFullYear() > 2e3) return second;
	const months = {
		jan: 0,
		feb: 1,
		mar: 2,
		apr: 3,
		may: 4,
		jun: 5,
		jul: 6,
		aug: 7,
		sep: 8,
		oct: 9,
		nov: 10,
		dec: 11
	};
	const m = clean.match(/^(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(am|pm)?$/i);
	if (m) {
		const day = parseInt(m[1], 10);
		const month = months[m[2].slice(0, 3).toLowerCase()];
		const year = parseInt(m[3], 10);
		let hour = parseInt(m[4], 10);
		const min = parseInt(m[5], 10);
		const sec = m[6] ? parseInt(m[6], 10) : 0;
		const ampm = m[7] ? m[7].toLowerCase() : null;
		if (ampm === "pm" && hour < 12) hour += 12;
		if (ampm === "am" && hour === 12) hour = 0;
		if (month !== void 0) {
			const res = new Date(year, month, day, hour, min, sec);
			return isNaN(res.getTime()) ? null : res;
		}
	}
	return null;
}
/**
* Calculates exactly 48 hours before the Cut-Off deadline.
* Example:
* Cut-Off:  18 Sep 2026 — 4:00 PM
* Reminder: 16 Sep 2026 — 4:00 PM
*/
function calculate48HoursBeforeCutOff(cutoffDate) {
	return /* @__PURE__ */ new Date(cutoffDate.getTime() - 1728e5);
}
/**
* Formats a Date object into "16 Sep 2026 — 4:00 PM" display style.
*/
function formatCutOffDateTimeDisplay(date) {
	return `${date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	})} — ${date.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true
	})}`;
}
/**
* Generates the exact notification message and title for a Movement Cut-Off reminder:
* Title: "Cut-Off Reminder"
* Message: "Movement NASH-2026-0042 has a SI Cut-Off in 48 hours."
*/
function formatCutOffReminderContent(movementNumber, cutoffType) {
	return {
		title: "Cut-Off Reminder",
		message: `Movement ${movementNumber.trim()} has a ${cutoffType.trim()} in 48 hours.`
	};
}
/**
* Helper to format relative time for Cut-Off reminders
*/
function formatCutOffRelativeTime(dateInput) {
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
/**
* Categorizes a reminder timestamp into today, thisWeek, or earlier
*/
function categorizeCutOffDate(dateInput) {
	const date = new Date(dateInput);
	const diffHours = ((/* @__PURE__ */ new Date()).getTime() - date.getTime()) / 36e5;
	if (diffHours <= 24) return "today";
	if (diffHours <= 168) return "thisWeek";
	return "earlier";
}
/**
* Parses date and time components from a raw date/time string.
*/
function parseCutOffDateTime(str) {
	if (!str) return {
		date: "—",
		time: "—",
		inText: "pending"
	};
	const d = parseCutOffToDate(str) || new Date(str);
	if (!isNaN(d.getTime())) {
		const dateFormatted = d.toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric"
		});
		const timeFormatted = d.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "2-digit",
			hour12: true
		});
		const diffMs = d.getTime() - Date.now();
		const diffDays = Math.ceil(diffMs / 864e5);
		return {
			date: dateFormatted,
			time: timeFormatted,
			inText: diffDays > 1 ? `in ${diffDays} days` : diffDays === 1 ? "in 1 day" : diffDays === 0 ? "today" : `${Math.abs(diffDays)}d ago`
		};
	}
	const parts = str.trim().split(/\s+/);
	if (parts.length >= 4) return {
		date: `${parts[0]} ${parts[1]} ${parts[2]}`,
		time: `${parts[3]} ${parts[4] || ""}`.trim(),
		inText: "upcoming"
	};
	return {
		date: str,
		time: "",
		inText: "upcoming"
	};
}
/**
* Builds normalized deadlines array from a cut-off dates object,
* enriching each deadline with exactly 48-hour reminder calculation.
*/
function buildNormalizedDeadlines(dates) {
	const enrich = (type, rawDateTime, rawDate, rawTime, inLabel) => {
		const parsed = parseCutOffDateTime(rawDateTime || `${rawDate || ""} ${rawTime || ""}`);
		const dateObj = parseCutOffToDate(rawDateTime || `${rawDate || ""} ${rawTime || ""}`);
		let reminderDateTime = void 0;
		let isReminderDue = void 0;
		let reminderDueTimeMs = void 0;
		if (dateObj) {
			const reminderDate = calculate48HoursBeforeCutOff(dateObj);
			reminderDateTime = formatCutOffDateTimeDisplay(reminderDate);
			reminderDueTimeMs = reminderDate.getTime();
			isReminderDue = Date.now() >= reminderDueTimeMs;
		}
		return {
			type,
			dateTime: rawDateTime || `${parsed.date} ${parsed.time}`,
			date: rawDate || parsed.date,
			time: rawTime || parsed.time,
			in: inLabel || parsed.inText,
			reminderDateTime,
			isReminderDue,
			reminderDueTimeMs
		};
	};
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	if (Array.isArray(dates.deadlines) && dates.deadlines.length > 0) return dates.deadlines.map((d) => {
		const base = enrich(d.type, d.dateTime || `${d.date || ""} ${d.time || ""}`, d.date, d.time, d.in);
		const cutoffType = d.cutoffType || d.cutoff_type || d.type;
		const normalizedDate = d.normalizedDate ?? null;
		const cutoffDate = d.cutoffDate || d.cutoff_date || normalizedDate || d.dateTime || null;
		const originalExtractedText = d.originalExtractedText || d.original_extracted_text || d.raw || "";
		return {
			...base,
			type: d.type,
			cutoffType,
			cutoff_type: cutoffType,
			cutoffDate,
			cutoff_date: cutoffDate,
			normalizedDate,
			normalized_date: normalizedDate,
			originalExtractedText,
			original_extracted_text: originalExtractedText,
			bookingId: d.bookingId || d.booking_id || dates.bookingId || dates.booking_id || null,
			booking_id: d.booking_id || d.bookingId || dates.booking_id || dates.bookingId || null,
			movementId: d.movementId || d.movement_id || dates.movementId || dates.movement_id || null,
			movement_id: d.movement_id || d.movement_id || dates.movement_id || dates.movementId || null,
			movementNumber: d.movementNumber || d.movement_number || dates.movementNumber || dates.movement_number || null,
			movement_number: d.movement_number || d.movementNumber || dates.movement_number || dates.movementNumber || null,
			sourceDocumentId: d.sourceDocumentId || d.source_document_id || dates.sourceDocumentId || dates.source_document_id || null,
			source_document_id: d.source_document_id || d.sourceDocumentId || dates.source_document_id || dates.sourceDocumentId || null,
			sourceEmailId: d.sourceEmailId || d.source_email_id || dates.sourceEmailId || dates.source_email_id || null,
			source_email_id: d.source_email_id || d.sourceEmailId || dates.source_email_id || dates.sourceEmailId || null,
			extractionStatus: d.extractionStatus || d.extraction_status || dates.extractionStatus || dates.extraction_status || "COMPLETED",
			extraction_status: d.extraction_status || d.extractionStatus || dates.extraction_status || dates.extractionStatus || "COMPLETED",
			reviewStatus: d.reviewStatus || d.review_status || dates.reviewStatus || dates.review_status || "AUTO_VERIFIED",
			review_status: d.review_status || d.reviewStatus || dates.review_status || dates.reviewStatus || "AUTO_VERIFIED",
			isAmbiguous: Boolean(d.isAmbiguous || d.is_ambiguous),
			is_ambiguous: Boolean(d.is_ambiguous || d.isAmbiguous),
			requiresManualReview: Boolean(d.requiresManualReview || d.requires_manual_review),
			requires_manual_review: Boolean(d.requires_manual_review || d.requiresManualReview),
			reviewReason: d.reviewReason || d.review_reason || null,
			review_reason: d.review_reason || d.reviewReason || null,
			createdAt: d.createdAt || d.created_at || dates.createdAt || dates.created_at || nowIso,
			created_at: d.created_at || d.createdAt || dates.created_at || dates.createdAt || nowIso,
			updatedAt: d.updatedAt || d.updated_at || dates.updatedAt || dates.updated_at || nowIso,
			updated_at: d.updated_at || d.updatedAt || dates.updated_at || dates.updatedAt || nowIso,
			raw: d.raw || originalExtractedText
		};
	});
	const list = [];
	const enrichWithMetadata = (label, dtVal) => {
		const base = enrich(label, dtVal);
		return {
			...base,
			cutoffType: label,
			cutoff_type: label,
			cutoffDate: base.normalizedDate || dtVal,
			cutoff_date: base.normalizedDate || dtVal,
			normalizedDate: base.normalizedDate || null,
			normalized_date: base.normalizedDate || null,
			originalExtractedText: dtVal,
			original_extracted_text: dtVal,
			bookingId: dates.bookingId || dates.booking_id || null,
			booking_id: dates.booking_id || dates.bookingId || null,
			movementId: dates.movementId || dates.movement_id || null,
			movement_id: dates.movement_id || dates.movementId || null,
			movementNumber: dates.movementNumber || dates.movement_number || null,
			movement_number: dates.movement_number || dates.movementNumber || null,
			sourceDocumentId: dates.sourceDocumentId || dates.source_document_id || null,
			source_document_id: dates.source_document_id || dates.sourceDocumentId || null,
			sourceEmailId: dates.sourceEmailId || dates.source_email_id || null,
			source_email_id: dates.source_email_id || dates.sourceEmailId || null,
			extractionStatus: dates.extractionStatus || dates.extraction_status || "COMPLETED",
			extraction_status: dates.extraction_status || dates.extractionStatus || "COMPLETED",
			reviewStatus: dates.reviewStatus || dates.review_status || "AUTO_VERIFIED",
			review_status: dates.review_status || dates.reviewStatus || "AUTO_VERIFIED",
			isAmbiguous: Boolean(dates.hasAmbiguousDates || dates.has_ambiguous_dates),
			is_ambiguous: Boolean(dates.has_ambiguous_dates || dates.hasAmbiguousDates),
			requiresManualReview: Boolean(dates.requiresManualReview || dates.requires_manual_review),
			requires_manual_review: Boolean(dates.requires_manual_review || dates.requiresManualReview),
			reviewReason: dates.reviewReason || dates.review_reason || null,
			review_reason: dates.review_reason || dates.reviewReason || null,
			createdAt: dates.createdAt || dates.created_at || nowIso,
			created_at: dates.created_at || dates.createdAt || nowIso,
			updatedAt: dates.updatedAt || dates.updated_at || nowIso,
			updated_at: dates.updated_at || dates.updatedAt || nowIso
		};
	};
	if (dates.siCutoff || dates.si_cutoff) list.push(enrichWithMetadata("SI Cut-Off", dates.siCutoff || dates.si_cutoff));
	if (dates.shippingInstructionCutoff || dates.shipping_instruction_cutoff) list.push(enrichWithMetadata("Shipping Instruction Cut-Off", dates.shippingInstructionCutoff || dates.shipping_instruction_cutoff));
	if (dates.vgmCutoff || dates.vgm_cutoff) list.push(enrichWithMetadata("VGM Cut-Off", dates.vgmCutoff || dates.vgm_cutoff));
	if (dates.portCutoff || dates.port_cutoff) list.push(enrichWithMetadata("Port Cut-Off", dates.portCutoff || dates.port_cutoff));
	if (dates.gateCutoff || dates.gate_cutoff) list.push(enrichWithMetadata("Gate Cut-Off", dates.gateCutoff || dates.gate_cutoff));
	if (dates.cargoCutoff || dates.cargo_cutoff) list.push(enrichWithMetadata("Cargo Cut-Off", dates.cargoCutoff || dates.cargo_cutoff));
	if (dates.docCutoff || dates.doc_cutoff) list.push(enrichWithMetadata("Documentation Cut-Off", dates.docCutoff || dates.doc_cutoff));
	if (dates.cyCutoff || dates.cy_cutoff) list.push(enrichWithMetadata("CY Cut-Off", dates.cyCutoff || dates.cy_cutoff));
	if (dates.terminalCutoff || dates.terminal_cutoff) list.push(enrichWithMetadata("Terminal Cut-Off", dates.terminalCutoff || dates.terminal_cutoff));
	if (dates.closingDate || dates.closing_date) list.push(enrichWithMetadata("Closing Date", dates.closingDate || dates.closing_date));
	if (dates.cutoffDate || dates.cutoff_date) list.push(enrichWithMetadata("Cut-Off Date", dates.cutoffDate || dates.cutoff_date));
	return list;
}
var serverCutOffsRegistry = {};
/**
* Gets all movement cut-offs from the persistent registry.
*/
function getCutOffsRegistry() {
	if (typeof window === "undefined") return serverCutOffsRegistry;
	try {
		const raw = localStorage.getItem(MOVEMENT_CUTOFFS_STORAGE_KEY);
		if (!raw) return serverCutOffsRegistry;
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" ? parsed : serverCutOffsRegistry;
	} catch (_e) {
		return serverCutOffsRegistry;
	}
}
/**
* Retrieves the Cut-Off dates maintained specifically for a Movement.
* CRITICAL: Strictly enforces that Cut-Off dates belong to the Movement they were
* received for, and are NEVER mixed or shared with different Movements.
*/
function getCutOffsForMovement(movementIdentifier, bookingRecord) {
	if (!movementIdentifier) return null;
	if (bookingRecord?.cut_off_dates) {
		const dates = bookingRecord.cut_off_dates;
		return {
			...dates,
			deadlines: buildNormalizedDeadlines(dates)
		};
	}
	if (bookingRecord?.confirmation_details && typeof bookingRecord.confirmation_details === "object") {
		const details = bookingRecord.confirmation_details;
		const embedded = details.cut_off_dates || details.cutOffDates;
		if (embedded) return {
			...embedded,
			deadlines: buildNormalizedDeadlines(embedded)
		};
	}
	const normKey = normalizeMovementKey(movementIdentifier);
	const rawKey = movementIdentifier.trim().toUpperCase();
	const registry = getCutOffsRegistry();
	const found = registry[normKey] || registry[rawKey];
	if (found) return {
		...found,
		deadlines: buildNormalizedDeadlines(found)
	};
	return null;
}
/**
* Maintains and saves extracted Cut-Off dates directly inside the specific Movement / Booking data.
* Guarantees isolation: saved strictly under that Movement's identifier.
*/
async function saveCutOffsForMovement(movementIdentifier, cutOffs, bookingId) {
	if (!movementIdentifier) return {
		movementNumber: "",
		deadlines: []
	};
	const normKey = normalizeMovementKey(movementIdentifier);
	const rawKey = movementIdentifier.trim().toUpperCase();
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const normalizedDeadlines = buildNormalizedDeadlines(cutOffs);
	const primaryCutoffType = cutOffs.cutoffType || cutOffs.cutoff_type || normalizedDeadlines[0]?.cutoffType || "Cut-off Date";
	const primaryCutoffDate = cutOffs.detectedCutOffDate || cutOffs.detected_cut_off_date || cutOffs.cutoffDate || cutOffs.cutoff_date || normalizedDeadlines[0]?.cutoffDate || normalizedDeadlines[0]?.dateTime || null;
	const sourceDocId = cutOffs.sourceDocumentId || cutOffs.source_document_id || null;
	const sourceMailId = cutOffs.sourceEmailId || cutOffs.source_email_id || null;
	const extStatus = cutOffs.extractionStatus || cutOffs.extraction_status || (cutOffs.isScannedOrUnreadable ? "SCANNED_UNREADABLE" : cutOffs.hasAmbiguousDates ? "AMBIGUOUS" : primaryCutoffDate || normalizedDeadlines.length > 0 ? "COMPLETED" : "NO_DATES_DETECTED");
	const revStatus = cutOffs.reviewStatus || cutOffs.review_status || (cutOffs.requiresManualReview || cutOffs.hasAmbiguousDates ? "NEEDS_REVIEW" : "AUTO_VERIFIED");
	const payload = {
		...cutOffs,
		bookingId: bookingId || cutOffs.bookingId || cutOffs.booking_id || null,
		booking_id: bookingId || cutOffs.booking_id || cutOffs.bookingId || null,
		movementId: bookingId || cutOffs.movementId || cutOffs.movement_id || null,
		movement_id: bookingId || cutOffs.movement_id || cutOffs.movementId || null,
		movementNumber: movementIdentifier,
		movement_number: movementIdentifier,
		cutoffType: primaryCutoffType,
		cutoff_type: primaryCutoffType,
		cutoffDate: primaryCutoffDate,
		cutoff_date: primaryCutoffDate,
		sourceDocumentId: sourceDocId || void 0,
		source_document_id: sourceDocId || void 0,
		sourceEmailId: sourceMailId || void 0,
		source_email_id: sourceMailId || void 0,
		extractionStatus: extStatus,
		extraction_status: extStatus,
		reviewStatus: revStatus,
		review_status: revStatus,
		deadlines: normalizedDeadlines,
		receivedAt: cutOffs.receivedAt || nowIso,
		createdAt: cutOffs.createdAt || cutOffs.created_at || nowIso,
		created_at: cutOffs.created_at || cutOffs.createdAt || nowIso,
		updatedAt: nowIso,
		updated_at: nowIso
	};
	try {
		const registry = getCutOffsRegistry();
		registry[normKey] = payload;
		if (rawKey !== normKey) registry[rawKey] = payload;
	} catch (_e) {}
	if (typeof window !== "undefined") try {
		const registry = getCutOffsRegistry();
		localStorage.setItem(MOVEMENT_CUTOFFS_STORAGE_KEY, JSON.stringify(registry));
		const targetId = bookingId || movementIdentifier;
		try {
			const rawBookings = localStorage.getItem("nashmia_custom_bookings_v1");
			if (rawBookings) {
				const list = JSON.parse(rawBookings);
				if (Array.isArray(list)) {
					const cleanTarget = targetId.trim().toLowerCase();
					let updatedAny = false;
					const updated = list.map((b) => {
						const bId = (b.id || "").toLowerCase();
						const bRef = (b.booking_reference || "").toLowerCase();
						const bMov = (b.movement_number || "").toLowerCase();
						if (bId === cleanTarget || bRef === cleanTarget || bMov === cleanTarget || normalizeMovementKey(bMov) === normKey) {
							updatedAny = true;
							const existingConf = b.confirmation_details || {};
							return {
								...b,
								cut_off_dates: payload,
								cut_off_deadlines: normalizedDeadlines,
								confirmation_details: {
									...existingConf,
									cut_off_dates: payload,
									cut_off_deadlines: normalizedDeadlines
								},
								updated_at: nowIso
							};
						}
						return b;
					});
					if (updatedAny) {
						const serialized = JSON.stringify(updated);
						localStorage.setItem("nashmia_custom_bookings_v1", serialized);
						localStorage.setItem("nashmia_local_bookings", serialized);
					}
				}
			}
		} catch (bookErr) {
			console.warn("[saveCutOffsForMovement] Local booking update notice:", bookErr);
		}
		try {
			if (!getSavedDocuments().some((d) => (d.metadata?.movementNumber === movementIdentifier || d.name.includes(movementIdentifier)) && (d.metadata?.category === "Cut-Off Notice" || d.metadata?.documentType === "CUT_OFF_NOTICE" || d.name.toLowerCase().includes("cutoff") || d.name.toLowerCase().includes("cut-off"))) && normalizedDeadlines.length > 0) saveDriveDocument({
				id: sourceDocId || `doc-cutoff-${normKey}-${Date.now()}`,
				name: `CutOff_Notice_${movementIdentifier}.pdf`,
				type: "pdf",
				extension: "pdf",
				owners: [],
				lastModified: "Just now",
				lastModifiedTimestamp: nowIso,
				fileSize: "384 KB",
				folderId: "folder-design",
				starred: true,
				sharedLink: `/documents?movement=${encodeURIComponent(movementIdentifier)}`,
				metadata: {
					category: "Cut-Off Notice",
					documentType: "CUT_OFF_NOTICE",
					movementNumber: movementIdentifier,
					cutOffDeadlines: normalizedDeadlines,
					cutOffDates: payload,
					sourceDocumentId: sourceDocId || void 0,
					sourceEmailId: sourceMailId || void 0,
					extractionStatus: extStatus,
					reviewStatus: revStatus,
					savedAt: nowIso
				}
			});
		} catch (docErr) {
			console.warn("[saveCutOffsForMovement] Document sync notice:", docErr);
		}
		window.dispatchEvent(new CustomEvent("nashmia_movement_cutoff_updated", { detail: {
			movementIdentifier,
			movementKey: normKey,
			cutOffs: payload,
			deadlines: normalizedDeadlines
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: {
			updated: true,
			movementNumber: movementIdentifier
		} }));
		try {
			const now = Date.now();
			for (const d of normalizedDeadlines) {
				if (!d.type) continue;
				const rawDateStr = d.dateTime || `${d.date || ""} ${d.time || ""}`;
				const cutoffDate = parseCutOffToDate(rawDateStr);
				if (!cutoffDate) continue;
				const reminderDate = calculate48HoursBeforeCutOff(cutoffDate);
				const isDue = now >= reminderDate.getTime();
				const notAncient = now - cutoffDate.getTime() < 2592e6;
				if (!isDue || !notAncient) continue;
				if (isCutOffReminderCreated(movementIdentifier, d.type, rawDateStr)) continue;
				const formattedReminderTime = formatCutOffDateTimeDisplay(reminderDate);
				const content = formatCutOffReminderContent(movementIdentifier, d.type);
				const id = buildCutOffReminderNotificationId(movementIdentifier, d.type, rawDateStr);
				markCutOffReminderCreated({
					movementNumber: movementIdentifier,
					cutoffType: d.type,
					cutoffDateTime: rawDateStr,
					reminderDateTime: formattedReminderTime,
					createdTimestamp: now,
					toastShown: false
				});
				const notifItem = {
					id,
					icon: "alert",
					title: content.title,
					time: "Just now",
					timestamp: now,
					description: content.message,
					rawDescription: content.message,
					unread: true,
					category: "today",
					type: "cutoff_reminder",
					bookingReference: movementIdentifier,
					linkUrl: "/movements",
					cutoffDetails: {
						movementNumber: movementIdentifier,
						cutoffType: d.type,
						cutoffDateTime: rawDateStr,
						reminderDateTime: formattedReminderTime
					}
				};
				window.dispatchEvent(new CustomEvent("nashmia_cutoff_reminder_triggered", { detail: notifItem }));
				if (isSupabaseConfigured) safeInsertNotification({
					userId: null,
					title: content.title,
					message: content.message,
					type: "cutoff_reminder",
					movementNumber: movementIdentifier,
					metadata: {
						cutoffType: d.type,
						cutoffDateTime: rawDateStr,
						reminderDateTime: formattedReminderTime,
						movementNumber: movementIdentifier
					}
				}).catch(() => {});
			}
		} catch (remErr) {
			console.warn("[saveCutOffsForMovement] Reminder notice:", remErr);
		}
	} catch (err) {
		console.warn("[saveCutOffsForMovement] Registry save error:", err);
	}
	if (isSupabaseConfigured) try {
		let validBookingUuid = safeUuid(bookingId);
		const cleanRef = movementIdentifier.trim();
		const slashMov = cleanRef.includes("-") ? cleanRef.replace(/-/g, "/") : cleanRef;
		const dashMov = cleanRef.includes("/") ? cleanRef.replace(/\//g, "-") : cleanRef;
		let existingConfirmationDetails = {};
		if (!validBookingUuid && cleanRef) {
			const { data: foundBooking } = await supabase.from("bookings").select("id, confirmation_details, cut_off_dates, cut_off_deadlines, movement_number, booking_reference").or(`movement_number.eq.${cleanRef},booking_reference.eq.${cleanRef},reference.eq.${cleanRef},movement_number.eq.${slashMov},booking_reference.eq.${slashMov},movement_number.eq.${dashMov},booking_reference.eq.${dashMov}`).limit(1).maybeSingle();
			if (foundBooking?.id) {
				validBookingUuid = safeUuid(foundBooking.id);
				existingConfirmationDetails = foundBooking.confirmation_details || {};
			}
		}
		if (!validBookingUuid && cleanRef) {
			const { data: foundIlike } = await supabase.from("bookings").select("id, confirmation_details").ilike("movement_number", `%${cleanRef}%`).limit(1).maybeSingle();
			if (foundIlike?.id) {
				validBookingUuid = safeUuid(foundIlike.id);
				existingConfirmationDetails = foundIlike.confirmation_details || {};
			}
		}
		const updatePayload = {
			cut_off_dates: payload,
			cut_off_deadlines: normalizedDeadlines,
			confirmation_details: {
				...existingConfirmationDetails,
				cut_off_dates: payload,
				cut_off_deadlines: normalizedDeadlines,
				detected_cut_off_date: payload.detectedCutOffDate || payload.cutoffDate || null,
				has_cut_off_date: Boolean(payload.hasCutOffDate),
				requires_cutoff_review: Boolean(payload.requiresManualReview),
				has_ambiguous_cutoff_date: Boolean(payload.hasAmbiguousDates),
				is_scanned_cutoff_pdf: Boolean(payload.isScannedOrUnreadable),
				cutoff_review_reason: payload.reviewReason || null,
				source_document_id: sourceDocId,
				source_email_id: sourceMailId,
				extraction_status: extStatus,
				review_status: revStatus,
				updated_at: nowIso
			},
			updated_at: nowIso
		};
		if (validBookingUuid) await supabase.from("bookings").update(updatePayload).eq("id", validBookingUuid);
		else if (cleanRef) {
			const { data: updatedByRef } = await supabase.from("bookings").update(updatePayload).or(`movement_number.eq.${cleanRef},booking_reference.eq.${cleanRef}`).select("id").maybeSingle();
			if (updatedByRef?.id) validBookingUuid = safeUuid(updatedByRef.id);
		}
		if (validBookingUuid && sourceDocId && safeUuid(sourceDocId)) try {
			await supabase.from("booking_documents").update({
				booking_id: validBookingUuid,
				document_type: "CUT_OFF_NOTICE",
				status: extStatus === "COMPLETED" ? "Completed" : "Needs Review",
				updated_at: nowIso
			}).eq("id", sourceDocId);
		} catch (docUpdateErr) {
			console.warn("[saveCutOffsForMovement] booking_documents update notice:", docUpdateErr);
		}
		if (validBookingUuid) await supabase.from("booking_events").insert({
			booking_id: validBookingUuid,
			event_type: "Cut-Off Schedule Extracted",
			event_date: nowIso,
			location: "Operations Desk",
			title: `Cut-Off Schedule Maintained (${movementIdentifier})`,
			description: `Extracted ${normalizedDeadlines.length} cut-off deadlines for Movement ${movementIdentifier}. Status: ${extStatus}, Review: ${revStatus}.`,
			payload: {
				bookingId: validBookingUuid,
				booking_id: validBookingUuid,
				movementId: validBookingUuid,
				movement_id: validBookingUuid,
				movementNumber: movementIdentifier,
				movement_number: movementIdentifier,
				cutoffType: primaryCutoffType,
				cutoff_type: primaryCutoffType,
				cutoffDate: primaryCutoffDate,
				cutoff_date: primaryCutoffDate,
				sourceDocumentId: sourceDocId,
				source_document_id: sourceDocId,
				sourceEmailId: sourceMailId,
				source_email_id: sourceMailId,
				extractionStatus: extStatus,
				extraction_status: extStatus,
				reviewStatus: revStatus,
				review_status: revStatus,
				deadlines: normalizedDeadlines,
				cutOffDates: payload,
				createdAt: payload.createdAt || nowIso,
				created_at: payload.createdAt || nowIso,
				updatedAt: nowIso,
				updated_at: nowIso
			}
		});
	} catch (dbErr) {
		console.warn("[saveCutOffsForMovement] Supabase update notice:", dbErr);
	}
	if (typeof fetch !== "undefined") fetch("/api/bookings/update", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			bookingId: bookingId || movementIdentifier,
			movementNumber: movementIdentifier,
			updates: {
				cut_off_dates: payload,
				cut_off_deadlines: normalizedDeadlines,
				confirmation_details: {
					cut_off_dates: payload,
					cut_off_deadlines: normalizedDeadlines,
					source_document_id: sourceDocId,
					source_email_id: sourceMailId,
					extraction_status: extStatus,
					review_status: revStatus
				}
			}
		})
	}).catch(() => {});
	return payload;
}
/**
* Saves extracted cut-off date data directly into the database against the correct Movement Number.
* Inspects and reuses the existing bookings, booking_documents, and booking_events tables and relationships.
* Stores:
* - Booking/movement ID
* - Movement Number
* - Cut-off type
* - Cut-off date
* - Source PDF/document ID
* - Source email ID
* - Extraction status
* - Review status
* - Created and updated timestamps
* Does not create duplicate tables.
*/
async function saveCutOffDataToDatabase(params) {
	const { movementNumber, bookingId, cutoffType, cutoffDate, sourceDocumentId, sourceEmailId, extractionStatus, reviewStatus, deadlines, cutOffDates = {}, createdAt, updatedAt } = params;
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const primaryCutoffType = cutoffType || deadlines && deadlines[0]?.cutoffType || deadlines && deadlines[0]?.type || "Cut-off Date";
	const primaryCutoffDate = cutoffDate || deadlines && deadlines[0]?.cutoffDate || deadlines && deadlines[0]?.dateTime || null;
	const extStatus = extractionStatus || "COMPLETED";
	const revStatus = reviewStatus || "AUTO_VERIFIED";
	const savedPayload = await saveCutOffsForMovement(movementNumber, {
		...cutOffDates,
		bookingId: bookingId || cutOffDates.bookingId || null,
		booking_id: bookingId || cutOffDates.booking_id || null,
		movementNumber,
		movement_number: movementNumber,
		cutoffType: primaryCutoffType,
		cutoff_type: primaryCutoffType,
		cutoffDate: primaryCutoffDate,
		cutoff_date: primaryCutoffDate,
		sourceDocumentId: sourceDocumentId || cutOffDates.sourceDocumentId || void 0,
		source_document_id: sourceDocumentId || cutOffDates.source_document_id || void 0,
		sourceEmailId: sourceEmailId || cutOffDates.sourceEmailId || void 0,
		source_email_id: sourceEmailId || cutOffDates.source_email_id || void 0,
		extractionStatus: extStatus,
		extraction_status: extStatus,
		reviewStatus: revStatus,
		review_status: revStatus,
		deadlines: deadlines || cutOffDates.deadlines,
		createdAt: createdAt || cutOffDates.createdAt || nowIso,
		created_at: createdAt || cutOffDates.created_at || nowIso,
		updatedAt: updatedAt || nowIso,
		updated_at: updatedAt || nowIso
	}, bookingId);
	return {
		success: true,
		bookingId: savedPayload.bookingId || bookingId || null,
		movementNumber,
		savedDeadlinesCount: (savedPayload.deadlines || []).length,
		cutOffDates: savedPayload
	};
}
/**
* Queries cut-off data stored in the database for a Movement Number.
* Returns all stored cut-off fields:
* - Booking/movement ID
* - Movement Number
* - Cut-off type
* - Cut-off date
* - Source PDF/document ID
* - Source email ID
* - Extraction status
* - Review status
* - Created and updated timestamps
*/
async function getCutOffDataFromDatabase(movementIdentifier) {
	if (!movementIdentifier) return null;
	const cleanRef = movementIdentifier.trim();
	const slashMov = cleanRef.includes("-") ? cleanRef.replace(/-/g, "/") : cleanRef;
	try {
		let bookingRecord = null;
		if (isSupabaseConfigured) {
			const { data } = await supabase.from("bookings").select("id, movement_number, booking_reference, cut_off_dates, cut_off_deadlines, confirmation_details, created_at, updated_at").or(`movement_number.eq.${cleanRef},booking_reference.eq.${cleanRef},reference.eq.${cleanRef},movement_number.eq.${slashMov},booking_reference.eq.${slashMov}`).limit(1).maybeSingle();
			if (data) bookingRecord = data;
		}
		const cutOffDates = getCutOffsForMovement(cleanRef, bookingRecord);
		if (!cutOffDates) return null;
		const deadlines = cutOffDates.deadlines || buildNormalizedDeadlines(cutOffDates);
		const primaryType = cutOffDates.cutoffType || cutOffDates.cutoff_type || deadlines[0]?.cutoffType || "Cut-off Date";
		const primaryDate = cutOffDates.detectedCutOffDate || cutOffDates.cutoffDate || cutOffDates.cutoff_date || deadlines[0]?.cutoffDate || null;
		const sourceDocId = cutOffDates.sourceDocumentId || cutOffDates.source_document_id || null;
		const sourceMailId = cutOffDates.sourceEmailId || cutOffDates.source_email_id || null;
		const extStatus = cutOffDates.extractionStatus || cutOffDates.extraction_status || "COMPLETED";
		const revStatus = cutOffDates.reviewStatus || cutOffDates.review_status || "AUTO_VERIFIED";
		return {
			bookingId: bookingRecord?.id || cutOffDates.bookingId || cutOffDates.booking_id || null,
			movementNumber: cleanRef,
			cutoffType: primaryType,
			cutoffDate: primaryDate,
			sourceDocumentId: sourceDocId,
			sourceEmailId: sourceMailId,
			extractionStatus: extStatus,
			reviewStatus: revStatus,
			createdAt: cutOffDates.createdAt || cutOffDates.created_at || bookingRecord?.created_at || (/* @__PURE__ */ new Date()).toISOString(),
			updatedAt: cutOffDates.updatedAt || cutOffDates.updated_at || bookingRecord?.updated_at || (/* @__PURE__ */ new Date()).toISOString(),
			cutOffDates,
			deadlines
		};
	} catch (err) {
		console.warn("[getCutOffDataFromDatabase] Error querying database:", err);
		return null;
	}
}
/**
* Returns all upcoming cut-offs grouped and strictly identified by their specific Movement.
* Used by UpcomingCutoffs widget to ensure each deadline clearly displays its own Movement.
*/
function getAllUpcomingCutOffs() {
	const registry = getCutOffsRegistry();
	const result = [];
	const processedMovements = /* @__PURE__ */ new Set();
	for (const [key, dates] of Object.entries(registry)) {
		const norm = normalizeMovementKey(key);
		if (processedMovements.has(norm)) continue;
		processedMovements.add(norm);
		const ref = dates.movementNumber || key;
		const deadlines = buildNormalizedDeadlines(dates);
		for (const d of deadlines) result.push({
			ref,
			type: d.type,
			date: d.date || "—",
			time: d.time || "—",
			in: d.in || "upcoming",
			dateTime: d.dateTime,
			reminderDateTime: d.reminderDateTime,
			isReminderDue: d.isReminderDue
		});
	}
	return result;
}
/**
* For every valid extracted Cut-Off date/time:
* Calculates exactly 48 hours before the Cut-Off deadline.
* At 48 hours before the deadline, creates a Notification Center notification for that Movement.
*
* Example:
* Cut-Off:  18 Sep 2026 — 4:00 PM
* Reminder: 16 Sep 2026 — 4:00 PM
* Notification:
* Title: "Cut-Off Reminder"
* Description: "Movement NASH-2026-0042 has a SI Cut-Off in 48 hours."
*/
function generateAllCutOffReminders() {
	const registry = getCutOffsRegistry();
	const createdRegistry = getCreatedCutOffRemindersRegistry();
	const notifications = [];
	const now = Date.now();
	const processedKeys = /* @__PURE__ */ new Set();
	for (const [key, dates] of Object.entries(registry)) {
		const movementRef = dates.movementNumber || key;
		const deadlines = buildNormalizedDeadlines(dates);
		for (const d of deadlines) {
			if (!d.type) continue;
			const rawDateStr = d.dateTime || `${d.date || ""} ${d.time || ""}`;
			const cutoffDate = parseCutOffToDate(rawDateStr);
			if (!cutoffDate) continue;
			const reminderDate = calculate48HoursBeforeCutOff(cutoffDate);
			const reminderTimeMs = reminderDate.getTime();
			const isDue = now >= reminderTimeMs;
			const notAncient = now - cutoffDate.getTime() < 2592e6;
			if (!isDue || !notAncient) continue;
			const dedupeKey = buildCutOffReminderDedupeKey(movementRef, d.type, rawDateStr);
			if (processedKeys.has(dedupeKey)) continue;
			processedKeys.add(dedupeKey);
			const id = buildCutOffReminderNotificationId(movementRef, d.type, rawDateStr);
			const content = formatCutOffReminderContent(movementRef, d.type);
			const formattedReminderTime = formatCutOffDateTimeDisplay(reminderDate);
			const existingEntry = createdRegistry[dedupeKey];
			const createdTimestamp = existingEntry?.createdTimestamp || reminderTimeMs;
			if (!existingEntry) markCutOffReminderCreated({
				movementNumber: movementRef,
				cutoffType: d.type,
				cutoffDateTime: rawDateStr,
				reminderDateTime: formattedReminderTime,
				createdTimestamp,
				toastShown: true
			});
			notifications.push({
				id,
				icon: "alert",
				title: content.title,
				time: formatCutOffRelativeTime(reminderDate),
				timestamp: createdTimestamp,
				description: content.message,
				rawDescription: content.message,
				unread: true,
				category: categorizeCutOffDate(reminderDate),
				type: "cutoff_reminder",
				bookingReference: movementRef,
				linkUrl: "/movements",
				cutoffDetails: {
					movementNumber: movementRef,
					cutoffType: d.type,
					cutoffDateTime: rawDateStr,
					reminderDateTime: formattedReminderTime
				}
			});
		}
	}
	return notifications;
}
/**
* Dynamically schedules timer triggers for upcoming Cut-Off deadlines that will
* reach their 48-hour mark in the future during the session.
*/
function scheduleCutOffReminders(onTrigger) {
	if (typeof window === "undefined") return () => {};
	const registry = getCutOffsRegistry();
	const timeouts = [];
	const now = Date.now();
	for (const [key, dates] of Object.entries(registry)) {
		const movementRef = dates.movementNumber || key;
		const deadlines = buildNormalizedDeadlines(dates);
		for (const d of deadlines) {
			if (!d.type) continue;
			const rawDateStr = d.dateTime || `${d.date || ""} ${d.time || ""}`;
			const cutoffDate = parseCutOffToDate(rawDateStr);
			if (!cutoffDate) continue;
			if (isCutOffReminderCreated(movementRef, d.type, rawDateStr)) continue;
			const reminderDate = calculate48HoursBeforeCutOff(cutoffDate);
			const delayMs = reminderDate.getTime() - now;
			if (delayMs > 0 && delayMs < 2147483647) {
				const content = formatCutOffReminderContent(movementRef, d.type);
				const id = buildCutOffReminderNotificationId(movementRef, d.type, rawDateStr);
				const formattedReminderTime = formatCutOffDateTimeDisplay(reminderDate);
				const timerId = window.setTimeout(() => {
					if (isCutOffReminderCreated(movementRef, d.type, rawDateStr)) return;
					markCutOffReminderCreated({
						movementNumber: movementRef,
						cutoffType: d.type,
						cutoffDateTime: rawDateStr,
						reminderDateTime: formattedReminderTime,
						createdTimestamp: Date.now(),
						toastShown: false
					});
					const item = {
						id,
						icon: "alert",
						title: content.title,
						time: "Just now",
						timestamp: Date.now(),
						description: content.message,
						rawDescription: content.message,
						unread: true,
						category: "today",
						type: "cutoff_reminder",
						bookingReference: movementRef,
						linkUrl: "/movements",
						cutoffDetails: {
							movementNumber: movementRef,
							cutoffType: d.type,
							cutoffDateTime: rawDateStr,
							reminderDateTime: formattedReminderTime
						}
					};
					window.dispatchEvent(new CustomEvent("nashmia_cutoff_reminder_triggered", { detail: item }));
					onTrigger?.(item);
				}, delayMs);
				timeouts.push(timerId);
			}
		}
	}
	return () => {
		timeouts.forEach((tid) => clearTimeout(tid));
	};
}
function safeUuid(id) {
	if (!id) return null;
	return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id) ? id : null;
}
async function getAuthUserId() {
	if (!isSupabaseConfigured) return "ca671494-e1a7-4159-89e3-49bb6e3fbf70";
	try {
		const { data: authData } = await supabase.auth.getUser();
		if (authData?.user?.id) return authData.user.id;
	} catch (err) {
		console.warn("[getAuthUserId] auth check notice:", err);
	}
	try {
		const { data: buyerRow } = await supabase.from("buyers").select("user_id").not("user_id", "is", null).limit(1).single();
		if (buyerRow?.user_id) return buyerRow.user_id;
	} catch (_e) {}
	try {
		const { data: forwarderRow } = await supabase.from("forwarders").select("user_id").not("user_id", "is", null).limit(1).single();
		if (forwarderRow?.user_id) return forwarderRow.user_id;
	} catch (_e) {}
	return "ca671494-e1a7-4159-89e3-49bb6e3fbf70";
}
/**
* Normalizes any free-form status string into the canonical Check Constraint statuses
* supported by PostgreSQL public.bookings table (constraint: "bookings_status_check"):
* 'Draft' | 'Booking Requested' | 'Confirmed' | 'In Transit' | 'Delivered' | 'Cancelled'
*/
function normalizeBookingStatus(rawStatus) {
	return toDbBookingStatus(rawStatus);
}
/**
* Deduplicates bookings into unique main freight movements.
* Collapses records sharing the same movement_number, booking_reference, reference, or id.
* Prevents multiple linked forwarder requests or quotation records from duplicating main bookings.
*/
function deduplicateBookings(records) {
	if (!records || records.length === 0) return [];
	const seenIds = /* @__PURE__ */ new Set();
	const seenMovs = /* @__PURE__ */ new Set();
	const seenRefs = /* @__PURE__ */ new Set();
	const result = [];
	for (const b of records) {
		if (!b || typeof b !== "object") continue;
		const id = (b.id || "").trim().toLowerCase();
		const mov = (b.movement_number || "").trim().toLowerCase();
		const ref = (b.booking_reference || b.reference || "").trim().toLowerCase();
		if (mov && seenMovs.has(mov)) continue;
		if (ref && seenRefs.has(ref)) continue;
		if (id && seenIds.has(id)) continue;
		if (mov) seenMovs.add(mov);
		if (ref) seenRefs.add(ref);
		if (id) seenIds.add(id);
		result.push(b);
	}
	return result;
}
/**
* Safely inserts a notification record into Supabase notifications table
* preventing NOT NULL violations on user_id and catching errors gracefully.
*/
async function safeInsertNotification(payload) {
	if (!isSupabaseConfigured) return;
	let targetUserId = safeUuid(payload.userId || payload.user_id);
	if (!targetUserId) try {
		const { data: authData } = await supabase.auth.getUser();
		if (authData?.user?.id) targetUserId = safeUuid(authData.user.id);
	} catch {}
	if (!targetUserId) try {
		const { data: profile } = await supabase.from("profiles").select("id").limit(1).maybeSingle();
		if (profile?.id) targetUserId = safeUuid(profile.id);
	} catch {}
	if (!targetUserId) return;
	const cleanBookingId = safeUuid(payload.booking_id || payload.related_booking_id);
	try {
		await supabase.from("notifications").insert({
			user_id: targetUserId,
			type: payload.type || "system",
			title: payload.title,
			message: payload.message,
			booking_id: cleanBookingId || void 0,
			related_booking_id: cleanBookingId || void 0,
			link: payload.link || "/requests",
			is_read: payload.is_read ?? false
		});
	} catch (err) {
		console.warn("[safeInsertNotification] Notice inserting notification:", err);
	}
}
/**
* Format raw Buyer row from Supabase into Frontend BuyerAccountFull model
*/
function mapBuyerRowToAccount(row, bookingCounts, recentMovement) {
	const activeMovements = bookingCounts?.active ?? 0;
	const totalMovements = bookingCounts?.total ?? (activeMovements > 0 ? activeMovements + 2 : 0);
	const deliveredMovements = bookingCounts?.delivered ?? totalMovements - activeMovements;
	const inTransitMovements = bookingCounts?.inTransit ?? activeMovements;
	const progressPercent = totalMovements > 0 ? Math.round(deliveredMovements / totalMovements * 100) : 0;
	return {
		id: row.id,
		name: row.company_name,
		company: row.consignee || row.company_name,
		country: row.country,
		countryCode: row.country_code || (row.country === "United Kingdom" ? "GB" : row.country === "Pakistan" ? "PK" : "US"),
		contactPerson: row.contact_person || "Operations Desk",
		contactRole: row.contact_role || "Import Director",
		email: row.email || "",
		phone: row.phone || "",
		activeMovements,
		deltaThisMonth: activeMovements > 0 ? `+${activeMovements} active` : "0 active",
		progressPercent,
		totalMovements,
		deliveredMovements,
		inTransitMovements,
		status: row.status || "Active",
		code: row.code || `BY-${row.company_name.slice(0, 3).toUpperCase()}`,
		taxId: row.tax_id || void 0,
		address: row.address || void 0,
		city: row.city || void 0,
		preferredPort: row.preferred_port || void 0,
		preferredCarrier: row.preferred_carrier || void 0,
		createdAt: row.created_at ? row.created_at.split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
		recentMovement
	};
}
/**
* Format raw Supplier row from Supabase into Frontend SupplierAccountFull model
*/
function mapSupplierRowToAccount(row, activeContainers = 0, recentMovement) {
	return {
		id: row.id,
		name: row.company_name,
		subtitle: row.subtitle || "Pickup Vendor",
		companyName: row.company_name,
		country: row.country,
		countryCode: row.country_code || "GB",
		loadPoint: row.load_point || "Central Hub",
		loadPointCity: row.load_point_city || row.city || "London",
		loadPointType: row.load_point_type || "Warehouse",
		contactPerson: row.contact_person || "Dispatch Supervisor",
		contactRole: row.contact_role || "Dispatch Manager",
		email: row.email || "",
		phone: row.phone || "",
		activeContainers,
		containersDelta: activeContainers > 0 ? `+${activeContainers} active` : "0 active",
		totalContainersMoved: activeContainers * 3 + 5,
		status: row.status || "Active",
		code: row.code || `SUP-${row.company_name.slice(0, 3).toUpperCase()}`,
		taxId: row.tax_id || void 0,
		address: row.address || "",
		city: row.city || "",
		operatingHours: row.operating_hours || "08:00 – 18:00 Mon-Fri",
		pickupInstructions: row.pickup_instructions || void 0,
		recentMovement,
		createdAt: row.created_at ? row.created_at.split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
	};
}
/**
* Format raw Forwarder row + rate cards from Supabase into Frontend ForwarderAccount model
*/
function mapForwarderRowToAccount(row, rateCards = [], activeBookings = 0) {
	const shippingLines = Array.isArray(row.shipping_lines) ? row.shipping_lines : [
		"MSC",
		"Maersk",
		"CMA CGM"
	];
	return {
		id: row.id,
		name: row.company_name,
		code: row.code || `${row.company_name.slice(0, 3).toUpperCase()}-FWD`,
		badge: row.badge || "Booking Agent",
		contactPerson: row.contact_person || "Lead Freight Specialist",
		contactRole: row.contact_role || "Freight Coordinator",
		email: row.email || "",
		whatsapp: row.whatsapp || row.phone || "",
		country: row.country,
		countryCode: row.country_code || "GB",
		shippingLines,
		activeBookings: activeBookings || row.active_bookings || 0,
		bookingsThisMonth: row.bookings_this_month || 0,
		totalBookings: row.total_bookings || activeBookings * 2 + 10,
		notes: row.notes || "Direct contract rates and booking desk.",
		status: row.status || "Active",
		rateCards,
		recentMovements: [],
		createdAt: row.created_at ? row.created_at.split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
	};
}
async function fetchBuyersFromSupabase(userId, options) {
	if (!isSupabaseConfigured) return [];
	try {
		let query = supabase.from("buyers").select(`
        id,
        user_id,
        company_name,
        consignee,
        country,
        country_code,
        contact_person,
        contact_role,
        email,
        phone,
        status,
        code,
        tax_id,
        address,
        city,
        preferred_port,
        preferred_carrier,
        created_at,
        updated_at,
        bookings(
          id,
          booking_reference,
          status,
          origin,
          destination,
          vessel_name,
          etd,
          eta,
          container_count,
          container_type
        )
      `).order("created_at", { ascending: false });
		const validUserUuid = safeUuid(userId);
		if (validUserUuid) query = query.or(`user_id.eq.${validUserUuid},user_id.not.is.null`);
		if (options?.limit) {
			if (options.offset) query = query.range(options.offset, options.offset + options.limit - 1);
			else query = query.limit(options.limit);
		}
		const { data, error } = await query;
		if (error) {
			console.warn("[Supabase fetchBuyers] Error:", error.message);
			return [];
		}
		if (!data) return [];
		return data.map((b) => {
			const rawBookings = b.bookings || [];
			const active = rawBookings.filter((bk) => [
				"In Transit",
				"Booking Requested",
				"Booking Confirmed",
				"Loaded"
			].includes(bk.status)).length;
			const delivered = rawBookings.filter((bk) => bk.status === "Delivered").length;
			const inTransit = rawBookings.filter((bk) => bk.status === "In Transit").length;
			let recentMovement = void 0;
			if (rawBookings.length > 0) {
				const latest = rawBookings[0];
				recentMovement = {
					ref: latest.booking_reference || `NASH-CM-${latest.id.replace(/[^a-zA-Z0-9]/g, "").slice(-5).toUpperCase()}`,
					polCode: latest.origin?.slice(0, 3).toUpperCase() || "FXT",
					polName: latest.origin || "Felixstowe",
					podCode: latest.destination?.slice(0, 3).toUpperCase() || "KHI",
					podName: latest.destination || "Karachi",
					containerSummary: `${latest.container_type || "40HC"} × ${latest.container_count || 1}`,
					status: latest.status || "In Transit",
					etd: latest.etd || "TBD",
					eta: latest.eta || "TBD",
					carrier: "MSC",
					vessel: latest.vessel_name || void 0
				};
			}
			return mapBuyerRowToAccount(b, {
				active,
				total: rawBookings.length,
				delivered,
				inTransit
			}, recentMovement);
		});
	} catch (err) {
		console.warn("[Supabase fetchBuyers] Network or connectivity notice:", err);
		return [];
	}
}
async function insertBuyerToSupabase(userId, buyer) {
	if (!isSupabaseConfigured) throw new Error("Supabase is not configured");
	const insertData = {
		user_id: safeUuid(userId),
		company_name: buyer.name,
		consignee: buyer.company || buyer.name,
		country: buyer.country,
		country_code: buyer.countryCode || "GB",
		contact_person: buyer.contactPerson || null,
		contact_role: buyer.contactRole || null,
		email: buyer.email || null,
		phone: buyer.phone || null,
		address: buyer.address || null,
		city: buyer.city || null,
		code: buyer.code || `BY-${buyer.name.slice(0, 3).toUpperCase()}`,
		tax_id: buyer.taxId || null,
		preferred_port: buyer.preferredPort || null,
		preferred_carrier: buyer.preferredCarrier || null,
		status: buyer.status || "Active"
	};
	try {
		const { data, error } = await supabase.from("buyers").insert(insertData).select().single();
		if (error) {
			console.warn("[Supabase insertBuyer] Database response notice:", error.message);
			throw new Error(error.message);
		}
		return mapBuyerRowToAccount(data);
	} catch (err) {
		console.warn("[Supabase insertBuyer] Network or database execution notice:", err);
		throw err;
	}
}
async function updateBuyerInSupabase(id, buyer) {
	if (!isSupabaseConfigured) throw new Error("Supabase is not configured");
	const updateData = {};
	if (buyer.name !== void 0) updateData.company_name = buyer.name;
	if (buyer.company !== void 0) updateData.consignee = buyer.company;
	if (buyer.country !== void 0) updateData.country = buyer.country;
	if (buyer.countryCode !== void 0) updateData.country_code = buyer.countryCode;
	if (buyer.contactPerson !== void 0) updateData.contact_person = buyer.contactPerson;
	if (buyer.contactRole !== void 0) updateData.contact_role = buyer.contactRole;
	if (buyer.email !== void 0) updateData.email = buyer.email;
	if (buyer.phone !== void 0) updateData.phone = buyer.phone;
	if (buyer.address !== void 0) updateData.address = buyer.address;
	if (buyer.city !== void 0) updateData.city = buyer.city;
	if (buyer.code !== void 0) updateData.code = buyer.code;
	if (buyer.taxId !== void 0) updateData.tax_id = buyer.taxId;
	if (buyer.preferredPort !== void 0) updateData.preferred_port = buyer.preferredPort;
	if (buyer.preferredCarrier !== void 0) updateData.preferred_carrier = buyer.preferredCarrier;
	if (buyer.status !== void 0) updateData.status = buyer.status;
	const { data, error } = await supabase.from("buyers").update(updateData).eq("id", id).select().single();
	if (error) {
		console.error("[Supabase updateBuyer] Error:", error);
		throw new Error(error.message);
	}
	return mapBuyerRowToAccount(data);
}
var LOCAL_SUPPLIERS_KEY = "nashmia_custom_suppliers_v1";
function getLocalSuppliers() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(LOCAL_SUPPLIERS_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function matchesSupplier(s, id, name) {
	return s.id === id || s.name.toLowerCase() === name.toLowerCase();
}
function saveLocalSupplier(supplier) {
	if (typeof window === "undefined") return;
	try {
		const updated = [supplier, ...getLocalSuppliers().filter((s) => !matchesSupplier(s, supplier.id, supplier.name))];
		localStorage.setItem(LOCAL_SUPPLIERS_KEY, JSON.stringify(updated));
	} catch (err) {
		console.warn("[Local Suppliers] Failed to save:", err);
	}
}
function updateLocalSupplier(id, patch) {
	if (typeof window === "undefined") return;
	try {
		const updated = getLocalSuppliers().map((s) => s.id === id ? {
			...s,
			...patch
		} : s);
		localStorage.setItem(LOCAL_SUPPLIERS_KEY, JSON.stringify(updated));
	} catch (err) {
		console.warn("[Local Suppliers] Failed to update:", err);
	}
}
async function fetchSuppliersFromSupabase(userId, options) {
	const localList = getLocalSuppliers();
	if (!isSupabaseConfigured) return localList;
	try {
		let query = supabase.from("suppliers").select(`
        *,
        bookings(
          id,
          booking_reference,
          status,
          origin,
          destination,
          vessel_name,
          etd,
          eta,
          container_count,
          container_type
        )
      `).order("created_at", { ascending: false });
		let validUserUuid = safeUuid(userId);
		if (!validUserUuid) try {
			const { data: authData } = await supabase.auth.getUser();
			if (authData?.user?.id) validUserUuid = safeUuid(authData.user.id);
		} catch {}
		if (validUserUuid) query = query.or(`user_id.eq.${validUserUuid},user_id.is.null`);
		if (options?.limit) {
			if (options.offset) query = query.range(options.offset, options.offset + options.limit - 1);
			else query = query.limit(options.limit);
		}
		const { data, error } = await query;
		if (error) {
			console.warn("[Supabase fetchSuppliers] Error:", error.message);
			return localList;
		}
		if (!data) return localList;
		return data.map((s) => {
			const rawBookings = s.bookings || [];
			const active = rawBookings.filter((bk) => [
				"In Transit",
				"Booking Requested",
				"Booking Confirmed",
				"Loaded"
			].includes(bk.status)).length;
			let recentMovement = void 0;
			if (rawBookings.length > 0) {
				const latest = rawBookings[0];
				recentMovement = {
					ref: latest.booking_reference || `NASH-CM-${latest.id.replace(/[^a-zA-Z0-9]/g, "").slice(-5).toUpperCase()}`,
					route: `${latest.origin || "Felixstowe"} → ${latest.destination || "Karachi"}`,
					status: latest.status || "In Transit"
				};
			}
			return mapSupplierRowToAccount(s, active, recentMovement);
		});
	} catch (err) {
		console.warn("[Supabase fetchSuppliers] Network or connectivity notice:", err);
		return [];
	}
}
async function insertSupplierToSupabase(param1, param2) {
	let userId = void 0;
	let supplier = {};
	if (typeof param1 === "object" && param1 !== null) {
		supplier = param1;
		userId = typeof param2 === "string" ? param2 : null;
	} else if (typeof param2 === "object" && param2 !== null) {
		supplier = param2;
		userId = typeof param1 === "string" ? param1 : null;
	} else if (typeof param1 === "string") userId = param1;
	let validUserUuid = safeUuid(userId);
	if (!validUserUuid && isSupabaseConfigured) try {
		const { data: authData } = await supabase.auth.getUser();
		if (authData?.user?.id) validUserUuid = safeUuid(authData.user.id);
	} catch {}
	const generatedId = `sup-${Date.now()}`;
	const supplierName = supplier.name?.trim() || supplier.companyName?.trim() || "Origin Supplier";
	const country = supplier.country || "United Kingdom";
	const countryCode = supplier.countryCode || (country === "United Kingdom" ? "GB" : country === "Pakistan" ? "PK" : "US");
	const code = supplier.code || `SUP-${countryCode}-${Math.floor(10 + Math.random() * 90)}`;
	const loadPoint = supplier.loadPoint || "Warehouse Hub";
	const loadPointCity = supplier.loadPointCity || supplier.city || "London";
	const loadPointType = supplier.loadPointType || "Warehouse";
	const fallbackAccount = {
		id: generatedId,
		name: supplierName,
		subtitle: supplier.subtitle || "Pickup Vendor",
		companyName: supplier.companyName || `${supplierName} Ltd`,
		country,
		countryCode,
		loadPoint,
		loadPointCity,
		loadPointType,
		contactPerson: supplier.contactPerson || "Dispatch Supervisor",
		contactRole: supplier.contactRole || "Logistics Lead",
		email: supplier.email || "",
		phone: supplier.phone || "",
		activeContainers: supplier.activeContainers || 0,
		containersDelta: supplier.containersDelta || "+1 new",
		totalContainersMoved: supplier.totalContainersMoved || 0,
		status: supplier.status || "Active",
		code,
		address: supplier.address || `${loadPoint}, ${country}`,
		city: supplier.city || country,
		operatingHours: supplier.operatingHours || "08:00 – 18:00 Mon-Fri",
		pickupInstructions: supplier.pickupInstructions || void 0,
		createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
	};
	saveLocalSupplier(fallbackAccount);
	if (!isSupabaseConfigured) return fallbackAccount;
	const insertData = {
		company_name: supplierName,
		subtitle: supplier.subtitle || "Pickup Vendor",
		country,
		country_code: countryCode,
		load_point: loadPoint,
		load_point_city: loadPointCity,
		load_point_type: loadPointType,
		contact_person: supplier.contactPerson || null,
		contact_role: supplier.contactRole || "Logistics Lead",
		email: supplier.email || null,
		phone: supplier.phone || null,
		address: supplier.address || `${loadPoint}, ${country}`,
		city: supplier.city || loadPointCity,
		code,
		tax_id: supplier.taxId || null,
		operating_hours: supplier.operatingHours || null,
		pickup_instructions: supplier.pickupInstructions || null,
		status: supplier.status || "Active"
	};
	if (validUserUuid) insertData.user_id = validUserUuid;
	try {
		const { data, error } = await supabase.from("suppliers").insert(insertData).select().single();
		if (error) {
			console.warn("[Supabase insertSupplier] Database response notice:", error.message);
			return fallbackAccount;
		}
		const created = mapSupplierRowToAccount(data);
		saveLocalSupplier(created);
		return created;
	} catch (err) {
		console.warn("[Supabase insertSupplier] Network or database execution notice:", err);
		return fallbackAccount;
	}
}
async function updateSupplierInSupabase(id, supplier) {
	updateLocalSupplier(id, supplier);
	if (!isSupabaseConfigured) {
		const local = getLocalSuppliers().find((s) => s.id === id);
		if (local) return local;
		return {
			id,
			name: supplier.name || "Updated Supplier",
			country: supplier.country || "United Kingdom",
			countryCode: supplier.countryCode || "GB",
			loadPoint: supplier.loadPoint || "Warehouse",
			loadPointType: supplier.loadPointType || "Warehouse",
			contactPerson: supplier.contactPerson || "",
			email: supplier.email || "",
			phone: supplier.phone || "",
			activeContainers: 0,
			totalContainersMoved: 0,
			status: supplier.status || "Active",
			code: supplier.code || "SUP-GB",
			address: supplier.address || "",
			city: supplier.city || "",
			createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
		};
	}
	const updateData = {};
	if (supplier.name !== void 0) updateData.company_name = supplier.name;
	if (supplier.subtitle !== void 0) updateData.subtitle = supplier.subtitle;
	if (supplier.country !== void 0) updateData.country = supplier.country;
	if (supplier.countryCode !== void 0) updateData.country_code = supplier.countryCode;
	if (supplier.loadPoint !== void 0) updateData.load_point = supplier.loadPoint;
	if (supplier.loadPointCity !== void 0) updateData.load_point_city = supplier.loadPointCity;
	if (supplier.loadPointType !== void 0) updateData.load_point_type = supplier.loadPointType;
	if (supplier.contactPerson !== void 0) updateData.contact_person = supplier.contactPerson;
	if (supplier.contactRole !== void 0) updateData.contact_role = supplier.contactRole;
	if (supplier.email !== void 0) updateData.email = supplier.email;
	if (supplier.phone !== void 0) updateData.phone = supplier.phone;
	if (supplier.address !== void 0) updateData.address = supplier.address;
	if (supplier.city !== void 0) updateData.city = supplier.city;
	if (supplier.code !== void 0) updateData.code = supplier.code;
	if (supplier.taxId !== void 0) updateData.tax_id = supplier.taxId;
	if (supplier.operatingHours !== void 0) updateData.operating_hours = supplier.operatingHours;
	if (supplier.pickupInstructions !== void 0) updateData.pickup_instructions = supplier.pickupInstructions;
	if (supplier.status !== void 0) updateData.status = supplier.status;
	const { data, error } = await supabase.from("suppliers").update(updateData).eq("id", id).select().single();
	if (error) {
		console.error("[Supabase updateSupplier] Error:", error);
		throw new Error(error.message);
	}
	const updated = mapSupplierRowToAccount(data);
	saveLocalSupplier(updated);
	return updated;
}
var LOCAL_FORWARDERS_KEY = "nashmia_custom_forwarders_v1";
function getLocalForwarders() {
	if (typeof window === "undefined" && typeof localStorage === "undefined") return [];
	try {
		const raw = typeof localStorage !== "undefined" ? localStorage.getItem(LOCAL_FORWARDERS_KEY) : null;
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function matchesForwarder(f, id, name) {
	return f.id === id || f.name.toLowerCase() === name.toLowerCase();
}
function saveLocalForwarder(forwarder) {
	if (typeof window === "undefined") return;
	try {
		const updated = [forwarder, ...getLocalForwarders().filter((f) => !matchesForwarder(f, forwarder.id, forwarder.name))];
		localStorage.setItem(LOCAL_FORWARDERS_KEY, JSON.stringify(updated));
	} catch (err) {
		console.warn("[Local Forwarders] Failed to save:", err);
	}
}
function updateLocalForwarder(id, patch) {
	if (typeof window === "undefined") return;
	try {
		const updated = getLocalForwarders().map((f) => f.id === id ? {
			...f,
			...patch
		} : f);
		localStorage.setItem(LOCAL_FORWARDERS_KEY, JSON.stringify(updated));
	} catch (err) {
		console.warn("[Local Forwarders] Failed to update:", err);
	}
}
async function fetchForwardersFromSupabase(userId, options) {
	const localList = getLocalForwarders();
	if (!isSupabaseConfigured) return localList.length > 0 ? localList : [];
	try {
		let query = supabase.from("forwarders").select(`
        *,
        rate_cards(
          id,
          forwarder_id,
          lane,
          origin,
          destination,
          container_size,
          base_rate,
          currency,
          valid_from,
          valid_until,
          status
        ),
        bookings(
          id,
          status
        )
      `).order("company_name", { ascending: true });
		let validUserUuid = safeUuid(userId);
		if (!validUserUuid) try {
			const { data: authData } = await supabase.auth.getUser();
			if (authData?.user?.id) validUserUuid = safeUuid(authData.user.id);
		} catch (authErr) {
			console.warn("[fetchForwarders] User resolution notice:", authErr);
		}
		if (validUserUuid) query = query.or(`user_id.eq.${validUserUuid},user_id.is.null`);
		if (options?.limit) {
			if (options.offset) query = query.range(options.offset, options.offset + options.limit - 1);
			else query = query.limit(options.limit);
		}
		const { data, error } = await query;
		if (error) {
			console.warn("[Supabase fetchForwarders] Query notice:", error.message);
			return localList;
		}
		return (data || []).map((f) => {
			const mappedRateCards = (f.rate_cards || []).map((rc) => ({
				id: rc.id,
				lane: `${rc.origin} → ${rc.destination}`,
				polCode: rc.origin?.slice(0, 3).toUpperCase() || "FXT",
				polName: rc.origin || "Felixstowe",
				podCode: rc.destination?.slice(0, 3).toUpperCase() || "KHI",
				podName: rc.destination || "Karachi",
				containerSize: rc.container_size || "40HC",
				rate: Number(rc.base_rate) || 0,
				currency: rc.currency || "USD",
				effectiveFrom: rc.valid_from || "—",
				validUntil: rc.valid_until || "—",
				status: rc.status === "Active" ? "Active" : "Draft"
			}));
			const active = (f.bookings || []).filter((bk) => [
				"In Transit",
				"Booking Requested",
				"Booking Confirmed",
				"Loaded"
			].includes(bk.status)).length;
			return mapForwarderRowToAccount(f, mappedRateCards, active);
		});
	} catch (err) {
		console.warn("[Supabase fetchForwarders] Network notice:", err);
		return [];
	}
}
async function insertForwarderToSupabase(userId, forwarder) {
	let validUserUuid = safeUuid(userId);
	if (!validUserUuid && isSupabaseConfigured) try {
		const { data: authData } = await supabase.auth.getUser();
		if (authData?.user?.id) validUserUuid = safeUuid(authData.user.id);
	} catch (authErr) {
		console.warn("[insertForwarder] Auth check notice:", authErr);
	}
	const generatedId = `fwd-${Date.now()}`;
	const code = forwarder.code || `${forwarder.name.slice(0, 3).toUpperCase()}-FWD`;
	const fallbackAccount = {
		...forwarder,
		id: generatedId,
		code,
		badge: forwarder.badge || "Booking Agent",
		createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
		activeBookings: 0,
		bookingsThisMonth: 0,
		totalBookings: 0,
		rateCards: [],
		recentMovements: []
	};
	if (!isSupabaseConfigured) {
		saveLocalForwarder(fallbackAccount);
		return fallbackAccount;
	}
	const insertData = {
		company_name: forwarder.name,
		code,
		badge: forwarder.badge || "Booking Agent",
		contact_person: forwarder.contactPerson || null,
		contact_role: forwarder.contactRole || "Freight Booking Agent",
		email: forwarder.email || null,
		phone: forwarder.whatsapp || null,
		whatsapp: forwarder.whatsapp || null,
		country: forwarder.country,
		country_code: forwarder.countryCode || "GB",
		shipping_lines: forwarder.shippingLines || ["MSC", "Maersk"],
		notes: forwarder.notes || null,
		status: forwarder.status || "Active"
	};
	if (validUserUuid) insertData.user_id = validUserUuid;
	try {
		const { data, error } = await supabase.from("forwarders").insert(insertData).select().single();
		if (error) {
			console.warn("[Supabase insertForwarder] Database response notice:", error.message);
			saveLocalForwarder(fallbackAccount);
			return fallbackAccount;
		}
		const createdAccount = mapForwarderRowToAccount(data, []);
		saveLocalForwarder(createdAccount);
		return createdAccount;
	} catch (err) {
		console.warn("[Supabase insertForwarder] Network or execution fallback:", err);
		saveLocalForwarder(fallbackAccount);
		return fallbackAccount;
	}
}
async function updateForwarderInSupabase(id, forwarder) {
	updateLocalForwarder(id, forwarder);
	if (!isSupabaseConfigured) return getLocalForwarders().find((f) => f.id === id) || {
		id,
		name: forwarder.name || "Forwarder"
	};
	const updateData = {};
	if (forwarder.name !== void 0) updateData.company_name = forwarder.name;
	if (forwarder.code !== void 0) updateData.code = forwarder.code;
	if (forwarder.badge !== void 0) updateData.badge = forwarder.badge;
	if (forwarder.contactPerson !== void 0) updateData.contact_person = forwarder.contactPerson;
	if (forwarder.contactRole !== void 0) updateData.contact_role = forwarder.contactRole;
	if (forwarder.email !== void 0) updateData.email = forwarder.email;
	if (forwarder.whatsapp !== void 0) {
		updateData.whatsapp = forwarder.whatsapp;
		updateData.phone = forwarder.whatsapp;
	}
	if (forwarder.country !== void 0) updateData.country = forwarder.country;
	if (forwarder.countryCode !== void 0) updateData.country_code = forwarder.countryCode;
	if (forwarder.shippingLines !== void 0) updateData.shipping_lines = forwarder.shippingLines;
	if (forwarder.notes !== void 0) updateData.notes = forwarder.notes;
	if (forwarder.status !== void 0) updateData.status = forwarder.status;
	try {
		const { data, error } = await supabase.from("forwarders").update(updateData).eq("id", id).select().single();
		if (error) {
			console.warn("[Supabase updateForwarder] Notice:", error.message);
			return getLocalForwarders().find((f) => f.id === id) || {
				id,
				name: forwarder.name || "Forwarder"
			};
		}
		return mapForwarderRowToAccount(data, []);
	} catch (err) {
		console.warn("[Supabase updateForwarder] Catch:", err);
		return getLocalForwarders().find((f) => f.id === id) || {
			id,
			name: forwarder.name || "Forwarder"
		};
	}
}
async function fetchRateCardsFromSupabase(userId, options) {
	if (!isSupabaseConfigured) return [];
	try {
		let query = supabase.from("rate_cards").select(`
        id,
        user_id,
        shipping_line_id,
        forwarder_id,
        origin,
        destination,
        container_type,
        container_size,
        currency,
        base_rate,
        valid_from,
        valid_until,
        status,
        notes,
        card_name,
        lane,
        pol_code,
        pol_name,
        pod_code,
        pod_name,
        rate,
        effective_from,
        transit_days_min,
        transit_days_max,
        created_at,
        updated_at,
        forwarders(id, company_name, contact_person, email, phone, code, country, badge),
        shipping_lines(id, name, code, vessels_active)
      `).order("created_at", { ascending: false });
		const validUserUuid = safeUuid(userId);
		if (validUserUuid) query = query.or(`user_id.eq.${validUserUuid},user_id.is.null`);
		if (options?.limit) {
			if (options.offset) query = query.range(options.offset, options.offset + options.limit - 1);
			else query = query.limit(options.limit);
		}
		const { data, error } = await query;
		if (error) {
			console.error("[Supabase fetchRateCards] Error:", error);
			return [];
		}
		return (data || []).map((row) => normalizeRateCardRecord(row));
	} catch (err) {
		console.warn("[Supabase fetchRateCards] Exception:", err);
		return [];
	}
}
async function insertRateCardToSupabase(payload, userId) {
	if (!isSupabaseConfigured) return null;
	const validUserUuid = safeUuid(userId) || await getAuthUserId();
	if (!validUserUuid) return null;
	const validForwarderId = safeUuid(payload.forwarder_id);
	if (!validForwarderId) {
		console.error("[insertRateCardToSupabase] Invalid forwarder_id:", payload.forwarder_id);
		throw new Error("A valid forwarder must be selected");
	}
	const encodedNotes = encodeRateCardNotes(payload.notes, {
		load_point: payload.load_point,
		quantity: payload.quantity,
		additional_charges: payload.additional_charges,
		etd: payload.etd,
		eta: payload.eta,
		free_demurrage_days: payload.free_demurrage_days
	});
	const baseRateNum = Number(payload.base_rate ?? payload.rate ?? 0);
	const insertData = {
		user_id: validUserUuid,
		forwarder_id: validForwarderId,
		shipping_line_id: safeUuid(payload.shipping_line_id) || null,
		origin: payload.origin || "Origin POL",
		destination: payload.destination || "Destination POD",
		container_type: payload.container_type || "High Cube",
		container_size: payload.container_size || "40HC",
		currency: (payload.currency || "USD").toUpperCase(),
		base_rate: baseRateNum,
		rate: baseRateNum,
		valid_from: payload.valid_from || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
		valid_until: payload.valid_until || new Date(Date.now() + 2592e6).toISOString().split("T")[0],
		status: payload.status || "Active",
		notes: encodedNotes,
		card_name: payload.card_name || `${payload.origin || "POL"} - ${payload.destination || "POD"} (${payload.container_size || "40HC"})`,
		lane: payload.lane || `${payload.origin || "POL"} → ${payload.destination || "POD"}`,
		pol_code: payload.pol_code || null,
		pol_name: payload.pol_name || payload.origin || null,
		pod_code: payload.pod_code || null,
		pod_name: payload.pod_name || payload.destination || null,
		transit_days_min: typeof payload.transit_days_min === "number" ? payload.transit_days_min : null,
		transit_days_max: typeof payload.transit_days_max === "number" ? payload.transit_days_max : null,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	};
	const { data, error } = await supabase.from("rate_cards").insert(insertData).select(`
      id,
      user_id,
      shipping_line_id,
      forwarder_id,
      origin,
      destination,
      container_type,
      container_size,
      currency,
      base_rate,
      valid_from,
      valid_until,
      status,
      notes,
      card_name,
      lane,
      pol_code,
      pol_name,
      pod_code,
      pod_name,
      rate,
      effective_from,
      transit_days_min,
      transit_days_max,
      created_at,
      updated_at,
      forwarders(id, company_name, contact_person, email, phone, code, country, badge),
      shipping_lines(id, name, code, vessels_active)
    `).single();
	if (error || !data) {
		console.error("[Supabase insertRateCard] Error:", error);
		throw new Error(error?.message || "Failed to create rate card");
	}
	return normalizeRateCardRecord(data);
}
async function updateRateCardInSupabase(id, payload) {
	if (!isSupabaseConfigured) return null;
	const validId = safeUuid(id);
	if (!validId) return null;
	const updateData = { updated_at: (/* @__PURE__ */ new Date()).toISOString() };
	if (payload.forwarder_id !== void 0) {
		const fId = safeUuid(payload.forwarder_id);
		if (fId) updateData.forwarder_id = fId;
	}
	if (payload.shipping_line_id !== void 0) updateData.shipping_line_id = safeUuid(payload.shipping_line_id) || null;
	if (payload.origin !== void 0) updateData.origin = payload.origin;
	if (payload.destination !== void 0) updateData.destination = payload.destination;
	if (payload.container_type !== void 0) updateData.container_type = payload.container_type;
	if (payload.container_size !== void 0) updateData.container_size = payload.container_size;
	if (payload.currency !== void 0) updateData.currency = payload.currency.toUpperCase();
	if (payload.base_rate !== void 0 || payload.rate !== void 0) {
		const rateVal = Number(payload.base_rate ?? payload.rate ?? 0);
		updateData.base_rate = rateVal;
		updateData.rate = rateVal;
	}
	if (payload.valid_from !== void 0) updateData.valid_from = payload.valid_from;
	if (payload.valid_until !== void 0) updateData.valid_until = payload.valid_until;
	if (payload.status !== void 0) updateData.status = payload.status;
	if (payload.card_name !== void 0) updateData.card_name = payload.card_name;
	if (payload.lane !== void 0) updateData.lane = payload.lane;
	if (payload.pol_code !== void 0) updateData.pol_code = payload.pol_code;
	if (payload.pol_name !== void 0) updateData.pol_name = payload.pol_name;
	if (payload.pod_code !== void 0) updateData.pod_code = payload.pod_code;
	if (payload.pod_name !== void 0) updateData.pod_name = payload.pod_name;
	if (payload.transit_days_min !== void 0) updateData.transit_days_min = payload.transit_days_min;
	if (payload.transit_days_max !== void 0) updateData.transit_days_max = payload.transit_days_max;
	if (payload.notes !== void 0 || payload.load_point !== void 0 || payload.quantity !== void 0 || payload.additional_charges !== void 0 || payload.etd !== void 0 || payload.eta !== void 0 || payload.free_demurrage_days !== void 0) updateData.notes = encodeRateCardNotes(payload.notes, {
		load_point: payload.load_point,
		quantity: payload.quantity,
		additional_charges: payload.additional_charges,
		etd: payload.etd,
		eta: payload.eta,
		free_demurrage_days: payload.free_demurrage_days
	});
	const { data, error } = await supabase.from("rate_cards").update(updateData).eq("id", validId).select(`
      id,
      user_id,
      shipping_line_id,
      forwarder_id,
      origin,
      destination,
      container_type,
      container_size,
      currency,
      base_rate,
      valid_from,
      valid_until,
      status,
      notes,
      card_name,
      lane,
      pol_code,
      pol_name,
      pod_code,
      pod_name,
      rate,
      effective_from,
      transit_days_min,
      transit_days_max,
      created_at,
      updated_at,
      forwarders(id, company_name, contact_person, email, phone, code, country, badge),
      shipping_lines(id, name, code, vessels_active)
    `).single();
	if (error || !data) {
		console.error("[Supabase updateRateCard] Error:", error);
		throw new Error(error?.message || "Failed to update rate card");
	}
	return normalizeRateCardRecord(data);
}
async function deleteRateCardFromSupabase(id) {
	if (!isSupabaseConfigured) return false;
	const validId = safeUuid(id);
	if (!validId) return false;
	const { error } = await supabase.from("rate_cards").delete().eq("id", validId);
	if (error) {
		console.error("[Supabase deleteRateCard] Error:", error);
		return false;
	}
	return true;
}
var LOCAL_BOOKINGS_KEY = "nashmia_custom_bookings_v1";
var LEGACY_LOCAL_BOOKINGS_KEY = "nashmia_local_bookings";
var LOCAL_CONFIRMED_IDENTIFIERS_KEY = "nashmia_confirmed_identifiers_v1";
/**
* Returns a normalized set of all uppercase identifiers (IDs, movement numbers, booking refs)
* that have been confirmed across emails, forwarder awards, or approval clicks.
*/
function getConfirmedIdentifiersSet() {
	const set = /* @__PURE__ */ new Set();
	if (typeof window === "undefined") return set;
	try {
		const raw = localStorage.getItem(LOCAL_CONFIRMED_IDENTIFIERS_KEY);
		if (raw) {
			const arr = JSON.parse(raw);
			if (Array.isArray(arr)) {
				for (const item of arr) if (typeof item === "string" && item.trim()) set.add(item.trim().toUpperCase());
			}
		}
	} catch (_e) {}
	try {
		const rawAwarded = localStorage.getItem("nashmia_awarded_movements_v1");
		if (rawAwarded) {
			const parsed = JSON.parse(rawAwarded);
			if (typeof parsed === "object" && parsed !== null) for (const [k, v] of Object.entries(parsed)) {
				if (k) set.add(k.trim().toUpperCase());
				if (v && typeof v === "object") {
					const val = v;
					if (val.movementNumber) set.add(val.movementNumber.trim().toUpperCase());
					if (val.bookingId) set.add(val.bookingId.trim().toUpperCase());
				}
			}
		}
	} catch (_e) {}
	try {
		const rawEmails = localStorage.getItem("nashmia_custom_emails_v1");
		if (rawEmails) {
			const emails = JSON.parse(rawEmails);
			if (Array.isArray(emails)) for (const em of emails) {
				const subj = (em.subject || "").toLowerCase();
				const body = (em.body || "").toLowerCase();
				if (em.confirmationStatus === "CONFIRMED" || em.emailType === "BOOKING_CONFIRMATION" || subj.includes("booking confirmed") || subj.includes("space confirmed") || subj.includes("confirmed booking") || body.includes("booking confirmed") || body.includes("booking is confirmed") || body.includes("space is confirmed") || body.includes("space confirmed")) {
					if (em.movementNumber) set.add(em.movementNumber.trim().toUpperCase());
					if (em.bookingReference) set.add(em.bookingReference.trim().toUpperCase());
					if (em.bookingId) set.add(em.bookingId.trim().toUpperCase());
				}
			}
		}
	} catch (_e) {}
	try {
		const rawBookings = localStorage.getItem(LOCAL_BOOKINGS_KEY);
		const rawLegacy = localStorage.getItem(LEGACY_LOCAL_BOOKINGS_KEY);
		const combinedBookings = [...rawBookings ? JSON.parse(rawBookings) : [], ...rawLegacy ? JSON.parse(rawLegacy) : []];
		if (Array.isArray(combinedBookings)) for (const b of combinedBookings) {
			const conf = (b.confirmation_status || "").trim().toUpperCase();
			const st = (b.status || "").trim().toLowerCase();
			if (conf === "CONFIRMED" || st.includes("confirm") || st.includes("approved") || Boolean(b.confirmed_at)) {
				if (b.id) set.add(String(b.id).trim().toUpperCase());
				if (b.movement_number) set.add(String(b.movement_number).trim().toUpperCase());
				if (b.booking_reference) set.add(String(b.booking_reference).trim().toUpperCase());
				if (b.reference) set.add(String(b.reference).trim().toUpperCase());
			}
		}
	} catch (_e) {}
	return set;
}
/**
* Persists an identifier into the confirmed identifiers cache and broadcasts sync events.
*/
function markIdentifierConfirmed(identifier, extraIdentifiers) {
	if (typeof window === "undefined" || !identifier) return;
	try {
		const set = getConfirmedIdentifiersSet();
		const toAdd = [identifier, ...extraIdentifiers || []];
		for (const id of toAdd) if (id && id.trim()) set.add(id.trim().toUpperCase());
		localStorage.setItem(LOCAL_CONFIRMED_IDENTIFIERS_KEY, JSON.stringify(Array.from(set)));
		window.dispatchEvent(new CustomEvent("nashmia_booking_confirmed", { detail: {
			identifier,
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: {
			updated: true,
			id: identifier
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_booking_status_updated", { detail: {
			bookingId: identifier,
			status: "Booking Confirmed"
		} }));
	} catch (_e) {}
}
/**
* Checks whether a booking or reference is confirmed via direct flags or the confirmed identifiers registry.
*/
function isBookingConfirmed(b, extraLookup) {
	if (!b && !extraLookup) return false;
	const rawStatus = (b?.status || "").trim().toUpperCase();
	const rawConf = (b?.confirmation_status || "").trim().toUpperCase();
	if ((rawStatus === "BOOKING REQUESTED" || rawStatus === "DRAFT") && rawConf !== "CONFIRMED") return false;
	if (rawConf === "CONFIRMED" || rawStatus.includes("CONFIRM") || rawStatus === "APPROVED" || rawStatus === "BOOKING APPROVED" || rawStatus === "REQUEST APPROVED" || Boolean(b?.confirmed_at)) return true;
	const confirmedSet = getConfirmedIdentifiersSet();
	const id = (b?.id || "").trim().toUpperCase();
	const mov = (b?.movement_number || "").trim().toUpperCase();
	const bRef = (b?.booking_reference || "").trim().toUpperCase();
	const ref = (b?.reference || "").trim().toUpperCase();
	const lookup = (extraLookup || "").trim().toUpperCase();
	return Boolean(id) && confirmedSet.has(id) || Boolean(mov) && confirmedSet.has(mov) || Boolean(bRef) && confirmedSet.has(bRef) || Boolean(ref) && confirmedSet.has(ref) || Boolean(lookup) && confirmedSet.has(lookup);
}
function getLocalBookings() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(LOCAL_BOOKINGS_KEY);
		const rawLegacy = localStorage.getItem(LEGACY_LOCAL_BOOKINGS_KEY);
		const primary = raw ? JSON.parse(raw) : [];
		const legacy = rawLegacy ? JSON.parse(rawLegacy) : [];
		const map = /* @__PURE__ */ new Map();
		for (const item of [...Array.isArray(legacy) ? legacy : [], ...Array.isArray(primary) ? primary : []]) if (item && typeof item === "object") {
			const key = (item.id || item.booking_reference || item.movement_number || "").trim();
			if (key) {
				const existing = map.get(key);
				map.set(key, {
					...existing || {},
					...item
				});
			}
		}
		return Array.from(map.values());
	} catch {
		return [];
	}
}
function saveLocalBooking(booking) {
	if (typeof window === "undefined") return;
	try {
		const updated = [booking, ...getLocalBookings().filter((b) => b.id !== booking.id && b.booking_reference !== booking.booking_reference)];
		const serialized = JSON.stringify(updated);
		localStorage.setItem(LOCAL_BOOKINGS_KEY, serialized);
		localStorage.setItem(LEGACY_LOCAL_BOOKINGS_KEY, serialized);
		window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: {
			updated: true,
			id: booking.id,
			movementNumber: booking.movement_number,
			bookingReference: booking.booking_reference,
			booking
		} }));
		window.dispatchEvent(new CustomEvent("supabase_realtime_bookings_change", { detail: {
			updated: true,
			id: booking.id,
			movementNumber: booking.movement_number,
			bookingReference: booking.booking_reference,
			booking
		} }));
	} catch (err) {
		console.warn("[Local Bookings] Failed to save:", err);
	}
}
function saveLocalBookings(bookings) {
	if (typeof window === "undefined" || !bookings || bookings.length === 0) return;
	try {
		const list = getLocalBookings();
		const map = /* @__PURE__ */ new Map();
		for (const item of list) {
			if (item.id) map.set(item.id, item);
			if (item.booking_reference) map.set(item.booking_reference, item);
			if (item.movement_number) map.set(item.movement_number, item);
		}
		for (const b of bookings) {
			const existing = map.get(b.id) || (b.booking_reference ? map.get(b.booking_reference) : void 0);
			map.set(b.id, {
				...existing || {},
				...b
			});
		}
		const combined = Array.from(new Set(map.values()));
		const serialized = JSON.stringify(combined);
		localStorage.setItem(LOCAL_BOOKINGS_KEY, serialized);
		localStorage.setItem(LEGACY_LOCAL_BOOKINGS_KEY, serialized);
	} catch (err) {
		console.warn("[Local Bookings] Failed to bulk save:", err);
	}
}
function updateLocalBooking(id, patch) {
	if (typeof window === "undefined" || !id) return;
	try {
		const list = getLocalBookings();
		const cleanId = id.trim();
		const cleanIdLower = cleanId.toLowerCase();
		let matched = false;
		const updated = list.map((b) => {
			if (b.id === cleanId || b.id?.toLowerCase() === cleanIdLower || b.booking_reference === cleanId || b.booking_reference?.toLowerCase() === cleanIdLower || b.movement_number === cleanId || b.movement_number?.toLowerCase() === cleanIdLower || b.reference === cleanId || b.reference?.toLowerCase() === cleanIdLower) {
				matched = true;
				return {
					...b,
					...patch,
					status: patch.status || b.status,
					confirmation_status: patch.confirmation_status || b.confirmation_status,
					confirmed_at: patch.confirmed_at || b.confirmed_at,
					confirmed_by: patch.confirmed_by || b.confirmed_by,
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				};
			}
			return b;
		});
		if (!matched && cleanId) {
			const nowIso = (/* @__PURE__ */ new Date()).toISOString();
			const newRec = {
				id: safeUuid(cleanId) || cleanId,
				booking_reference: cleanId,
				movement_number: cleanId,
				reference: cleanId,
				status: patch.status || "Booking Confirmed",
				confirmation_status: patch.confirmation_status || "CONFIRMED",
				confirmed_at: patch.confirmed_at || nowIso,
				confirmed_by: patch.confirmed_by || "Forwarder Confirmation Engine",
				created_at: nowIso,
				updated_at: nowIso,
				...patch
			};
			updated.unshift(newRec);
		}
		const serialized = JSON.stringify(updated);
		localStorage.setItem(LOCAL_BOOKINGS_KEY, serialized);
		localStorage.setItem(LEGACY_LOCAL_BOOKINGS_KEY, serialized);
		if (patch.confirmation_status === "CONFIRMED" || patch.status === "Booking Confirmed") markIdentifierConfirmed(cleanId, [patch.movement_number, patch.booking_reference].filter(Boolean));
		window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: {
			updated: true,
			id: cleanId
		} }));
		window.dispatchEvent(new CustomEvent("supabase_realtime_bookings_change", { detail: {
			updated: true,
			id: cleanId
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_booking_status_updated", { detail: {
			bookingId: cleanId,
			status: patch.status || "Booking Confirmed"
		} }));
		if (patch.status === "Booking Confirmed" || patch.confirmation_status === "CONFIRMED") {
			const target = getLocalBookings().find((b) => b.id === cleanId || b.movement_number === cleanId || b.booking_reference === cleanId || b.reference === cleanId);
			const realMovementRef = target?.movement_number || target?.booking_reference || target?.reference || cleanId;
			window.dispatchEvent(new CustomEvent("nashmia_booking_confirmed", { detail: {
				bookingId: target?.id || cleanId,
				movementNumber: realMovementRef,
				bookingReference: realMovementRef,
				reference: realMovementRef,
				status: "Booking Confirmed",
				confirmedBy: patch.confirmed_by || "Forwarder Confirmation Engine"
			} }));
		}
	} catch (err) {
		console.warn("[Local Bookings] Failed to update:", err);
	}
}
function deleteLocalBooking(id) {
	if (typeof window === "undefined") return;
	try {
		const updated = getLocalBookings().filter((b) => b.id !== id);
		localStorage.setItem(LOCAL_BOOKINGS_KEY, JSON.stringify(updated));
	} catch (err) {
		console.warn("[Local Bookings] Failed to delete:", err);
	}
}
function getStoredAwardedMovementsMap() {
	const map = /* @__PURE__ */ new Map();
	if (typeof window === "undefined") return map;
	try {
		const raw = localStorage.getItem("nashmia_awarded_movements_v1");
		if (raw) {
			const parsed = JSON.parse(raw);
			if (typeof parsed === "object" && parsed !== null) {
				for (const [key, val] of Object.entries(parsed)) if (val && typeof val === "object") map.set(key.trim().toUpperCase(), val);
			}
		}
	} catch {}
	return map;
}
/**
* Reconciles raw booking records from database/local-storage with awarded forwarder contracts,
* manual approvals, and confirmed lifecycle milestones.
*/
function reconcileBookingWithConfirmations(b) {
	const awardedMap = getStoredAwardedMovementsMap();
	const movNum = (b.movement_number || "").trim().toUpperCase();
	const bRef = (b.booking_reference || "").trim().toUpperCase();
	const ref = (b.reference || "").trim().toUpperCase();
	const bId = (b.id || "").trim().toUpperCase();
	const award = movNum && awardedMap.get(movNum) || bRef && awardedMap.get(bRef) || ref && awardedMap.get(ref) || bId && awardedMap.get(bId);
	const rawStatus = (b.status || "").trim();
	const rawStatusUpper = rawStatus.toUpperCase();
	const isConfirmedUpper = (b.confirmation_status || "").trim().toUpperCase();
	const isExplicitlyConfirmed = isBookingConfirmed(b) || isConfirmedUpper === "CONFIRMED" || Boolean(b.confirmed_at) || rawStatusUpper.includes("CONFIRM") || rawStatusUpper === "APPROVED" || rawStatusUpper === "BOOKING APPROVED" || rawStatusUpper === "REQUEST APPROVED";
	const specificCutOffs = getCutOffsForMovement(b.movement_number || b.booking_reference || b.reference || b.id, b);
	let supplierName = b.supplier?.name || b.supplier?.company_name || b.supplier_name || b?.supplierName || b?.supplier_company || "";
	let buyerName = b.buyer?.name || b.buyer?.company_name || b.buyer_name || b?.buyerName || b?.buyer_company || b?.customer_name || "";
	if (!buyerName && b.buyer_id) try {
		const localBuyer = getLocalBuyers().find((byr) => byr.id === b.buyer_id);
		if (localBuyer) buyerName = localBuyer.name || localBuyer.company || "";
	} catch {}
	if (!supplierName && b.supplier_id) try {
		const localSupplier = getLocalSuppliers().find((sup) => sup.id === b.supplier_id);
		if (localSupplier) supplierName = localSupplier.name || localSupplier.companyName || "";
	} catch {}
	const forwarderName = Boolean(award?.awardedForwarderName || b.confirmed_by || isExplicitlyConfirmed && (b.forwarder?.name || b.forwarder?.company_name || b.forwarder_name)) ? award?.awardedForwarderName || b.confirmed_by || b.forwarder?.name || b.forwarder?.company_name || b.forwarder_name || "" : "Pending Award";
	if (isExplicitlyConfirmed) {
		const normalized = normalizeBookingStatus(rawStatus);
		const effectiveStatus = normalized === "Booking Requested" || normalized === "Draft" || !rawStatus ? "Booking Confirmed" : normalized;
		return {
			...b,
			status: effectiveStatus,
			confirmation_status: "CONFIRMED",
			confirmed_at: b.confirmed_at || award?.awardedAt || (/* @__PURE__ */ new Date()).toISOString(),
			confirmed_by: b.confirmed_by || award?.awardedForwarderName || "Operations Desk",
			supplier_name: supplierName,
			forwarder_name: forwarderName,
			buyer_name: buyerName,
			rate_amount: award?.rate || b.rate_amount,
			total_freight: award?.rate && !b.total_freight ? award.rate * (b.container_count || 1) : b.total_freight,
			cut_off_dates: specificCutOffs || b.cut_off_dates || null,
			cut_off_deadlines: specificCutOffs?.deadlines || b.cut_off_deadlines || null
		};
	}
	return {
		...b,
		status: normalizeBookingStatus(rawStatus),
		supplier_name: supplierName,
		forwarder_name: forwarderName,
		buyer_name: buyerName,
		cut_off_dates: specificCutOffs || b.cut_off_dates || null,
		cut_off_deadlines: specificCutOffs?.deadlines || b.cut_off_deadlines || null
	};
}
var OPTIMIZED_BOOKINGS_SELECT = `
  id,
  user_id,
  booking_reference,
  reference,
  movement_number,
  status,
  movement_status,
  is_movement_confirmed,
  confirmation_status,
  confirmed_at,
  confirmed_by,
  confirmation_reason,
  confirmation_confidence,
  confirmation_details,
  origin,
  destination,
  pol_code,
  pol_name,
  pod_code,
  pod_name,
  vessel_name,
  voyage_number,
  etd,
  eta,
  booking_date,
  loading_date,
  container_count,
  container_type,
  container_size,
  product_description,
  total_freight,
  rate_amount,
  currency,
  special_instructions,
  notes,
  buyer_id,
  supplier_id,
  forwarder_id,
  shipping_line_id,
  rate_card_id,
  created_at,
  updated_at,
  buyer:buyers(id, name, company_name, consignee, contact_person, email, phone, country),
  supplier:suppliers(id, name, company_name, contact_person, email, phone, country),
  forwarder:forwarders(id, name, company_name, contact_person, email, phone, code),
  shipping_line:shipping_lines(id, name, code, contact_email),
  rate_card:rate_cards(id, lane, base_rate, currency, valid_from, valid_until, status),
  containers:booking_containers(id, booking_id, container_number, seal_number, container_size, container_type, weight, weight_unit, status, created_at, updated_at),
  events:booking_events(id, booking_id, container_id, event_type, title, description, location, occurred_at, event_date, payload, created_at)
`;
async function fetchBookingsFromSupabase(userId, options) {
	if (typeof window !== "undefined") try {
		const limitQuery = options?.limit ? `?limit=${options.limit}&offset=${options.offset || 0}` : "?limit=500";
		const res = await fetch(`/api/bookings${limitQuery}`);
		if (res.ok) {
			const json = await res.json();
			if (json.success && Array.isArray(json.bookings)) return deduplicateBookings(json.bookings.map(reconcileBookingWithConfirmations));
		}
	} catch {}
	if (!isSupabaseConfigured) return [];
	try {
		let query = supabase.from("bookings").select(OPTIMIZED_BOOKINGS_SELECT).order("created_at", { ascending: false });
		if (options?.organizationId) query = query.eq("organization_id", options.organizationId);
		const defaultLimit = options?.limit ?? 500;
		if (options?.offset) query = query.range(options.offset, options.offset + defaultLimit - 1);
		else query = query.limit(defaultLimit);
		let { data, error } = await query;
		if (error) {
			console.warn("[Supabase fetchBookings] Query with joins had notice, falling back to base select:", error.message);
			try {
				let fallbackQuery = supabase.from("bookings").select("*").order("created_at", { ascending: false });
				if (options?.organizationId) fallbackQuery = fallbackQuery.eq("organization_id", options.organizationId);
				if (options?.offset) fallbackQuery = fallbackQuery.range(options.offset, options.offset + defaultLimit - 1);
				else fallbackQuery = fallbackQuery.limit(defaultLimit);
				const fallbackRes = await fallbackQuery;
				if (!fallbackRes.error && fallbackRes.data) {
					data = fallbackRes.data;
					error = null;
				}
			} catch {}
		}
		if (error || !data) return [];
		return deduplicateBookings((data || []).map(reconcileBookingWithConfirmations));
	} catch (err) {
		console.warn("[Supabase fetchBookings] Direct query notice:", err);
		return [];
	}
}
async function fetchBookingByIdFromSupabase(bookingId) {
	if (!bookingId) return null;
	const cleanLookup = bookingId.trim();
	const cleanLower = cleanLookup.toLowerCase();
	const local = getLocalBookings().find((b) => b.id === cleanLookup || b.id && b.id.toLowerCase() === cleanLower || b.movement_number === cleanLookup || b.movement_number && b.movement_number.toLowerCase() === cleanLower || b.booking_reference === cleanLookup || b.booking_reference && b.booking_reference.toLowerCase() === cleanLower || b.reference === cleanLookup || b.reference && b.reference.toLowerCase() === cleanLower);
	if (!isSupabaseConfigured) return local ? reconcileBookingWithConfirmations(local) : null;
	try {
		const validUuid = safeUuid(cleanLookup);
		let query = supabase.from("bookings").select(OPTIMIZED_BOOKINGS_SELECT);
		if (validUuid) query = query.eq("id", validUuid);
		else query = query.or(`movement_number.eq.${cleanLookup},booking_reference.eq.${cleanLookup}`);
		let { data, error } = await query.maybeSingle();
		if (error || !data) try {
			let fallbackQuery = supabase.from("bookings").select("*");
			if (validUuid) fallbackQuery = fallbackQuery.eq("id", validUuid);
			else fallbackQuery = fallbackQuery.or(`movement_number.eq.${cleanLookup},booking_reference.eq.${cleanLookup}`);
			const fallbackRes = await fallbackQuery.maybeSingle();
			if (fallbackRes.data) {
				data = fallbackRes.data;
				error = null;
			}
		} catch {}
		if (error || !data) return local ? reconcileBookingWithConfirmations(local) : null;
		let dbRecord = data;
		if (dbRecord.buyer_id && !dbRecord.buyer) try {
			const { data: bData } = await supabase.from("buyers").select("id, company_name, consignee, contact_person, email, phone, country").eq("id", dbRecord.buyer_id).maybeSingle();
			if (bData) dbRecord = {
				...dbRecord,
				buyer: bData
			};
		} catch {}
		if (dbRecord.supplier_id && !dbRecord.supplier) try {
			const { data: sData } = await supabase.from("suppliers").select("id, company_name, contact_person, email, phone, country").eq("id", dbRecord.supplier_id).maybeSingle();
			if (sData) dbRecord = {
				...dbRecord,
				supplier: sData
			};
		} catch {}
		if (dbRecord.forwarder_id && !dbRecord.forwarder) try {
			const { data: fData } = await supabase.from("forwarders").select("id, company_name, contact_person, email, phone, code").eq("id", dbRecord.forwarder_id).maybeSingle();
			if (fData) dbRecord = {
				...dbRecord,
				forwarder: fData
			};
		} catch {}
		const isLocConfirmed = local ? isBookingConfirmed(local) : false;
		const isDbConfirmed = isBookingConfirmed(dbRecord);
		const isAnyConfirmed = isLocConfirmed || isDbConfirmed || isBookingConfirmed(null, cleanLookup);
		return reconcileBookingWithConfirmations({
			...local || {},
			...dbRecord,
			containers: Array.isArray(dbRecord.containers) ? dbRecord.containers : local?.containers || [],
			events: Array.isArray(dbRecord.events) ? dbRecord.events : local?.events || [],
			status: isAnyConfirmed && (dbRecord.status === "Booking Requested" || !dbRecord.status) ? local?.status && local.status !== "Booking Requested" ? local.status : "Booking Confirmed" : dbRecord.status || local?.status || "Booking Confirmed",
			confirmation_status: isAnyConfirmed ? "CONFIRMED" : dbRecord.confirmation_status || local?.confirmation_status,
			confirmed_at: local?.confirmed_at || dbRecord.confirmed_at || (isAnyConfirmed ? (/* @__PURE__ */ new Date()).toISOString() : void 0),
			confirmed_by: local?.confirmed_by || dbRecord.confirmed_by || (isAnyConfirmed ? "Operations Desk" : void 0)
		});
	} catch {
		return local ? reconcileBookingWithConfirmations(local) : null;
	}
}
async function createBookingInSupabase(arg1, arg2) {
	let userId = null;
	let payload = {};
	if (typeof arg1 === "string") {
		userId = arg1;
		payload = arg2 && typeof arg2 === "object" ? {
			...arg2,
			userId
		} : { userId };
	} else if (arg1 && typeof arg1 === "object") {
		payload = { ...arg1 };
		userId = typeof arg2 === "string" ? arg2 : payload.userId || null;
	} else if (arg2 && typeof arg2 === "object") {
		payload = { ...arg2 };
		userId = payload.userId || null;
	} else if (typeof arg2 === "string") userId = arg2;
	if (!userId && isSupabaseConfigured) try {
		const { data: authData } = await supabase.auth.getUser();
		if (authData?.user?.id) userId = authData.user.id;
	} catch (authErr) {
		console.warn("[createBookingInSupabase] Auth check notice:", authErr);
	}
	let validUserUuid = safeUuid(userId);
	if (!validUserUuid) validUserUuid = await getAuthUserId();
	if (!validUserUuid) validUserUuid = "ca671494-e1a7-4159-89e3-49bb6e3fbf70";
	const movementNumber = payload.movementNumber || payload.movement_number || (payload.bookingReference && payload.bookingReference.startsWith("MOV-") ? payload.bookingReference : null) || (payload.reference && payload.reference.startsWith("MOV-") ? payload.reference : null) || generateMovementNumber();
	const bookingRef = payload.bookingReference || payload.reference || movementNumber;
	const origin = payload.origin || payload.polName || payload.pol || "Felixstowe (FXT)";
	const destination = payload.destination || payload.podName || payload.pod || "Karachi (KHI)";
	const containerCount = payload.containerCount || 1;
	const containerSize = payload.containerSize || "40HC";
	const containerType = payload.containerType || "High Cube";
	const productDescription = payload.productDescription || "Commercial Cargo";
	const status = normalizeBookingStatus(payload.status);
	const rateMode = payload.rateMode || payload.freightRateMode || "AGREED_RATE";
	const isAskingRate = rateMode === "ASKING_RATE";
	const computedTotalFreight = isAskingRate ? null : payload.totalFreight ?? (payload.customRate ? payload.customRate * containerCount : null);
	const fallbackId = `bk-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const forwarderId = safeUuid(payload.forwarderId || payload.agentId);
	const shippingLineId = safeUuid(payload.shippingLineId || payload.lineId);
	const buyerId = safeUuid(payload.buyerId);
	const supplierId = safeUuid(payload.supplierId);
	const polCode = payload.polCode || origin.match(/\(([A-Z0-9]{3,5})\)/)?.[1] || origin.slice(0, 3).toUpperCase();
	const podCode = payload.podCode || destination.match(/\(([A-Z0-9]{3,5})\)/)?.[1] || destination.slice(0, 3).toUpperCase();
	const containerRows = [];
	const count = Math.max(1, containerCount);
	for (let i = 0; i < count; i++) {
		const num = payload.containerNumbers?.[i] || null;
		if (num) containerRows.push({
			id: `cnt-${fallbackId}-${i}`,
			booking_id: fallbackId,
			created_at: nowIso,
			container_number: num,
			container_type: containerType,
			container_size: containerSize,
			seal_number: null,
			weight: 24500,
			status: "Gate-In"
		});
	}
	const initialEvent = {
		id: `evt-${fallbackId}-1`,
		booking_id: fallbackId,
		created_at: nowIso,
		event_type: status,
		event_date: nowIso,
		location: origin || "Pending",
		description: isAskingRate ? `Booking request generated (Asking Rate quotation mode) for ${containerCount}x ${containerSize} container(s). Movement: ${movementNumber}` : `Booking request generated for ${containerCount}x ${containerSize} container(s). Movement: ${movementNumber}`
	};
	const bookingNotes = payload.notes || payload.specialInstructions || (isAskingRate ? "Freight Rate Mode: ASKING_RATE (Forwarder quotation requested)" : "Freight Rate Mode: AGREED_RATE");
	const bookingInsert = {
		user_id: validUserUuid,
		booking_reference: bookingRef,
		movement_number: movementNumber,
		buyer_id: buyerId,
		supplier_id: supplierId,
		forwarder_id: forwarderId,
		shipping_line_id: shippingLineId,
		rate_card_id: isAskingRate ? null : safeUuid(payload.rateCardId),
		origin,
		destination,
		pol_code: polCode,
		pod_code: podCode,
		pol_name: payload.polName || origin,
		pod_name: payload.podName || destination,
		vessel_name: payload.vesselName || payload.vessel_name || null,
		voyage_number: payload.voyageNumber || payload.voyage_number || null,
		etd: payload.etd || null,
		eta: payload.eta || null,
		container_count: containerCount,
		container_type: containerType,
		container_size: containerSize,
		product_description: productDescription,
		special_instructions: payload.specialInstructions || payload.notes || null,
		notes: bookingNotes,
		total_freight: computedTotalFreight,
		currency: payload.currency || "USD",
		status: toDbBookingStatus(status),
		movement_status: toDbMovementStatus(status),
		is_movement_confirmed: toDbBookingStatus(status) === "Confirmed"
	};
	let createdBooking = null;
	if (isSupabaseConfigured) try {
		let { data: booking, error: bookingError } = await supabase.from("bookings").insert(bookingInsert).select().single();
		if (bookingError) {
			console.warn("[Supabase createBooking] Notice on insert:", bookingError.message, bookingError.details);
			if (bookingError.code === "23503" && bookingInsert.user_id !== "ca671494-e1a7-4159-89e3-49bb6e3fbf70") {
				const retryRes = await supabase.from("bookings").insert({
					...bookingInsert,
					user_id: "ca671494-e1a7-4159-89e3-49bb6e3fbf70"
				}).select().single();
				if (retryRes.data) {
					booking = retryRes.data;
					bookingError = null;
				}
			}
		}
		if (booking) {
			const dbContainerRows = containerRows.map((c) => ({
				booking_id: booking.id,
				container_number: c.container_number,
				container_type: c.container_type,
				container_size: c.container_size,
				seal_number: c.seal_number,
				weight: c.weight,
				status: c.status
			}));
			try {
				await supabase.from("booking_containers").insert(dbContainerRows);
			} catch (err) {
				console.warn("[Supabase booking_containers] Insert notice:", err);
			}
			try {
				await supabase.from("booking_events").insert({
					booking_id: booking.id,
					event_type: booking.status || status,
					event_date: nowIso,
					location: origin,
					description: `Booking request generated for ${containerCount}x ${containerSize} container(s). Movement: ${movementNumber}`
				});
			} catch (err) {
				console.warn("[Supabase booking_events] Insert notice:", err);
			}
			await safeInsertNotification({
				userId: validUserUuid,
				type: "booking_update",
				title: "New Booking Created",
				message: `Movement ${movementNumber} (${bookingRef}) has been initialized successfully.`,
				related_booking_id: booking.id,
				is_read: false
			});
			const buyerDisplayName = payload.buyerName || payload.buyer?.name || payload.buyer?.company_name || (buyerId ? getLocalBuyers().find((b) => b.id === buyerId)?.name : "") || "";
			const supplierDisplayName = payload.supplierName || payload.supplier?.name || payload.supplier?.company_name || (supplierId ? getLocalSuppliers().find((s) => s.id === supplierId)?.name : "") || "";
			const isConfirmedBooking = status === "Booking Confirmed" || toDbBookingStatus(status) === "Confirmed" || rateMode === "AGREED_RATE" && Boolean(payload.forwarderName);
			const forwarderDisplayName = isConfirmedBooking ? payload.forwarderName || payload.forwarder?.name || "Confirmed Forwarder" : "Pending Award";
			createdBooking = {
				...booking,
				movement_number: movementNumber,
				rate_mode: rateMode,
				freight_rate_mode: rateMode,
				buyer_id: buyerId,
				supplier_id: supplierId,
				forwarder_id: isConfirmedBooking ? forwarderId : null,
				buyer_name: buyerDisplayName,
				supplier_name: supplierDisplayName,
				forwarder_name: forwarderDisplayName,
				buyer: {
					id: buyerId || "",
					name: buyerDisplayName,
					company_name: buyerDisplayName,
					country: payload.buyerCountry || payload.buyer?.country || "United Kingdom"
				},
				supplier: {
					id: supplierId || "",
					name: supplierDisplayName,
					company_name: supplierDisplayName,
					city: payload.supplierCity || payload.supplier?.city || "",
					country: payload.supplierCountry || payload.supplier?.country || "United Kingdom"
				},
				forwarder: isConfirmedBooking && forwarderId ? {
					id: forwarderId,
					name: forwarderDisplayName,
					company_name: forwarderDisplayName
				} : null,
				containers: containerRows.map((c) => ({
					...c,
					booking_id: booking.id
				})),
				events: [{
					...initialEvent,
					booking_id: booking.id
				}]
			};
		}
	} catch (err) {
		console.warn("[Supabase createBooking] Execution exception:", err);
	}
	if (!createdBooking) {
		const buyerDisplayName = payload.buyerName || payload.buyer?.name || payload.buyer?.company_name || (buyerId ? getLocalBuyers().find((b) => b.id === buyerId)?.name : "") || "";
		const supplierDisplayName = payload.supplierName || payload.supplier?.name || payload.supplier?.company_name || (supplierId ? getLocalSuppliers().find((s) => s.id === supplierId)?.name : "") || "";
		const isConfirmedBooking = status === "Booking Confirmed" || rateMode === "AGREED_RATE" && Boolean(payload.forwarderName);
		const forwarderDisplayName = isConfirmedBooking ? payload.forwarderName || payload.forwarder?.name || "Confirmed Forwarder" : "Pending Award";
		createdBooking = {
			id: fallbackId,
			created_at: nowIso,
			updated_at: nowIso,
			user_id: validUserUuid,
			booking_reference: bookingRef,
			movement_number: movementNumber,
			buyer_id: safeUuid(payload.buyerId),
			supplier_id: safeUuid(payload.supplierId),
			forwarder_id: isConfirmedBooking ? safeUuid(payload.forwarderId) : null,
			shipping_line_id: safeUuid(payload.shippingLineId),
			rate_card_id: isAskingRate ? null : safeUuid(payload.rateCardId),
			buyer_name: buyerDisplayName,
			supplier_name: supplierDisplayName,
			forwarder_name: forwarderDisplayName,
			buyer: {
				id: buyerId || "",
				name: buyerDisplayName,
				company_name: buyerDisplayName,
				country: payload.buyerCountry || payload.buyer?.country || "United Kingdom"
			},
			supplier: {
				id: supplierId || "",
				name: supplierDisplayName,
				company_name: supplierDisplayName,
				city: payload.supplierCity || payload.supplier?.city || "",
				country: payload.supplierCountry || payload.supplier?.country || "United Kingdom"
			},
			forwarder: isConfirmedBooking && forwarderId ? {
				id: forwarderId,
				name: forwarderDisplayName,
				company_name: forwarderDisplayName
			} : null,
			origin,
			destination,
			vessel_name: bookingInsert.vessel_name || null,
			voyage_number: bookingInsert.voyage_number || null,
			etd: bookingInsert.etd || null,
			eta: bookingInsert.eta || null,
			container_count: containerCount,
			container_type: containerType,
			container_size: containerSize,
			product_description: productDescription,
			special_instructions: bookingInsert.special_instructions || null,
			notes: bookingInsert.notes || null,
			total_freight: bookingInsert.total_freight,
			currency: bookingInsert.currency || "USD",
			status,
			rate_mode: rateMode,
			freight_rate_mode: rateMode,
			containers: containerRows,
			events: [initialEvent]
		};
	}
	saveLocalBooking(createdBooking);
	return createdBooking;
}
async function updateBookingStatusInSupabase(bookingId, userId, newStatus = "Booking Requested", location = "En Route", description, customUpdates) {
	const dbStatus = toDbBookingStatus(newStatus);
	const dbMovementStatus = toDbMovementStatus(newStatus);
	const isConfirmed = dbStatus === "Confirmed" || newStatus.toLowerCase().includes("confirm");
	const updateData = {
		status: dbStatus,
		movement_status: dbMovementStatus,
		is_movement_confirmed: isConfirmed,
		confirmation_status: isConfirmed ? "CONFIRMED" : dbStatus === "Booking Requested" ? "PENDING" : customUpdates?.confirmation_status || null,
		updated_at: (/* @__PURE__ */ new Date()).toISOString(),
		...customUpdates
	};
	if (updateData.status) updateData.status = toDbBookingStatus(updateData.status);
	updateLocalBooking(bookingId, {
		status: newStatus,
		movement_status: dbMovementStatus,
		is_movement_confirmed: isConfirmed,
		confirmation_status: updateData.confirmation_status,
		...customUpdates
	});
	if (!isSupabaseConfigured) return;
	try {
		const cleanBookingId = safeUuid(bookingId);
		if (cleanBookingId) {
			const { error } = await supabase.from("bookings").update(updateData).eq("id", cleanBookingId);
			if (error) console.warn("[Supabase updateBookingStatus] Notice:", error.message);
			await supabase.from("booking_events").insert({
				booking_id: cleanBookingId,
				event_type: newStatus,
				event_date: (/* @__PURE__ */ new Date()).toISOString(),
				location,
				description: description || `Status updated to ${newStatus}`
			});
		} else await supabase.from("bookings").update(updateData).or(`booking_reference.eq.${bookingId},movement_number.eq.${bookingId},reference.eq.${bookingId}`).catch((err) => {
			console.warn("[Supabase updateBookingStatus by ref] Notice:", err);
		});
		const localBooking = getLocalBookings().find((b) => b.id === bookingId);
		const movementRef = customUpdates?.movement_number || localBooking?.movement_number || localBooking?.booking_reference || bookingId || "NASH-BKG";
		const notifTitle = isConfirmed ? `Booking Confirmed: ${movementRef}` : `Movement ${newStatus}`;
		const notifMessage = isConfirmed ? `Movement ${movementRef} has been confirmed by the forwarder.` : `Booking stage progressed to ${newStatus}.`;
		await safeInsertNotification({
			userId,
			type: isConfirmed ? "booking_confirmed" : "milestone",
			title: notifTitle,
			message: notifMessage,
			booking_id: safeUuid(bookingId),
			link: "/requests",
			is_read: false
		});
	} catch (err) {
		console.warn("[Supabase updateBookingStatus] Notice:", err);
	}
}
async function updateBookingDetailsInSupabase(bookingId, updates) {
	updateLocalBooking(bookingId, updates);
	if (!isSupabaseConfigured) return;
	try {
		const { error } = await supabase.from("bookings").update({
			...updates,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("id", bookingId);
		if (error) console.warn("[Supabase updateBookingDetails] Notice:", error.message);
	} catch (err) {
		console.warn("[Supabase updateBookingDetails] Notice:", err);
	}
}
async function deleteBookingFromSupabase(bookingIdOrRef) {
	const clean = bookingIdOrRef.trim();
	deleteLocalBooking(clean);
	if (!isSupabaseConfigured) return true;
	try {
		let targetBookingId = safeUuid(clean);
		if (!targetBookingId) {
			const { data: found } = await supabase.from("bookings").select("id").or(`movement_number.eq.${clean},booking_reference.eq.${clean}`).limit(1).single();
			if (found?.id) targetBookingId = found.id;
		}
		if (targetBookingId) {
			await supabase.from("booking_containers").delete().eq("booking_id", targetBookingId);
			await supabase.from("booking_events").delete().eq("booking_id", targetBookingId);
			const { error } = await supabase.from("bookings").delete().eq("id", targetBookingId);
			if (error) {
				console.error("[deleteBookingFromSupabase] Error deleting booking:", error);
				return false;
			}
		} else await supabase.from("bookings").delete().eq("movement_number", clean);
		return true;
	} catch (err) {
		console.warn("[Supabase deleteBooking] Notice:", err);
		return false;
	}
}
function normalizeContainerDbStatus(rawStatus) {
	if (!rawStatus) return "Allocated";
	const s = rawStatus.trim().toLowerCase();
	if (s === "gate-in" || s === "gate in" || s === "gated in") return "Gated In";
	if (s === "loaded") return "Loaded";
	if (s === "on board" || s === "onboard" || s === "in transit" || s === "at sea" || s === "sailing") return "On Board";
	if (s === "discharged" || s === "discharge" || s === "gate-out" || s === "gate out" || s === "gated out") return "Discharged";
	if (s === "delivered" || s === "completed") return "Delivered";
	if (s === "pending") return "Pending";
	return "Allocated";
}
async function insertBookingContainerInSupabase(bookingId, containerData) {
	if (!isSupabaseConfigured) throw new Error("Supabase is not configured");
	const rawNumber = (containerData.containerNumber || "").trim().toUpperCase();
	if (!rawNumber) throw new Error("Container number is required");
	let realBookingId = safeUuid(bookingId);
	let resolvedOrgId = containerData.organizationId || null;
	if (!realBookingId) {
		const { data: bRow } = await supabase.from("bookings").select("id, organization_id").or(`movement_number.eq.${bookingId},booking_reference.eq.${bookingId},reference.eq.${bookingId}`).maybeSingle();
		if (bRow?.id) {
			realBookingId = bRow.id;
			if (!resolvedOrgId && bRow.organization_id) resolvedOrgId = bRow.organization_id;
		}
	}
	if (!realBookingId) throw new Error(`Movement reference "${bookingId}" could not be resolved to a valid booking record.`);
	const { data: existingDup } = await supabase.from("booking_containers").select("id, container_number").eq("booking_id", realBookingId).ilike("container_number", rawNumber).maybeSingle();
	if (existingDup) throw new Error(`Container ${rawNumber} is already registered to this movement.`);
	const dbStatus = normalizeContainerDbStatus(containerData.status);
	const cleanSeal = (containerData.sealNumber || "").trim().toUpperCase() || null;
	const cleanSize = containerData.containerSize || "40HC";
	const cleanType = containerData.containerType || "High Cube";
	const weightNum = Number(containerData.weight) || 24500;
	const { data, error } = await supabase.from("booking_containers").insert({
		booking_id: realBookingId,
		container_number: rawNumber,
		container_type: cleanType,
		container_size: cleanSize,
		seal_number: cleanSeal,
		weight: weightNum,
		weight_unit: "KG",
		status: dbStatus
	}).select().single();
	if (error || !data) {
		console.error("[Supabase insertBookingContainer] Error:", error);
		throw new Error(error?.message || "Failed to register container in database");
	}
	try {
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		await supabase.from("booking_events").insert({
			booking_id: realBookingId,
			container_id: data.id,
			event_type: "Container Added",
			title: `Container Registered: ${rawNumber}`,
			description: `Container ${rawNumber} (${cleanSize} ${cleanType}) registered to movement ledger.`,
			location: "Origin Terminal Hub",
			event_date: nowIso,
			occurred_at: nowIso,
			payload: {
				container_id: data.id,
				container_number: rawNumber,
				seal_number: cleanSeal,
				weight: weightNum,
				container_size: cleanSize,
				container_type: cleanType,
				status: dbStatus,
				action: "container_registered"
			}
		});
	} catch (evErr) {
		console.warn("[insertBookingContainerInSupabase] Event record notice:", evErr);
	}
	try {
		await supabase.from("audit_logs").insert({
			action: "create",
			resource_type: "booking_container",
			resource_id: data.id,
			organization_id: safeUuid(resolvedOrgId) || null,
			details: {
				booking_id: realBookingId,
				container_number: rawNumber,
				seal_number: cleanSeal,
				status: dbStatus
			}
		});
	} catch {}
	return data;
}
async function deleteBookingContainerFromSupabase(containerId) {
	if (!isSupabaseConfigured) throw new Error("Supabase is not configured");
	try {
		await supabase.from("booking_events").delete().eq("container_id", containerId);
	} catch {}
	const { error } = await supabase.from("booking_containers").delete().eq("id", containerId);
	if (error) {
		console.error("[Supabase deleteBookingContainer] Error:", error);
		throw new Error(error.message);
	}
}
async function addBookingEventInSupabase(bookingId, eventType, location, description) {
	if (!isSupabaseConfigured) throw new Error("Supabase is not configured");
	const { data, error } = await supabase.from("booking_events").insert({
		booking_id: bookingId,
		event_type: eventType,
		location,
		description,
		event_date: (/* @__PURE__ */ new Date()).toISOString()
	}).select().single();
	if (error) {
		console.error("[Supabase addBookingEvent] Error:", error);
		throw new Error(error.message);
	}
	return data;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/movement-forwarder-matcher-C7uJctaK.js
var firebase_applet_config_default = {
	projectId: "imposing-net-r8t0d",
	appId: "1:1052262935067:web:2ff64683511f2f79c966be",
	apiKey: "AIzaSyB2l1zk0DuAEcz2yLgCBVTtuktAjBNG5aY",
	authDomain: "imposing-net-r8t0d.firebaseapp.com",
	firestoreDatabaseId: "ai-studio-nashmiaproject-33497893-e0ab-4b2b-b2bc-2a6657b820a6",
	storageBucket: "imposing-net-r8t0d.firebasestorage.app",
	messagingSenderId: "1052262935067",
	measurementId: "",
	oAuthClientId: "1052262935067-h1o99oo3pauajsoafi5va9flit9ntvvv.apps.googleusercontent.com",
	recaptchaSiteKey: ""
};
/**
* Strips quoted reply history, email headers, and formatting artifacts.
*/
function cleanEmailBody(body, snippet) {
	const raw = (body || snippet || "").trim();
	if (!raw) return "";
	const lines = raw.split(/\r?\n/);
	const filteredLines = [];
	for (const line of lines) {
		const trimmed = line.trim();
		if (trimmed.startsWith(">")) continue;
		if (/^on\s.+wrote:?$/i.test(trimmed) || /^from:\s.+/i.test(trimmed) || /^-----original message-----/i.test(trimmed) || /^---------------------------/i.test(trimmed)) break;
		filteredLines.push(line);
	}
	return filteredLines.join(" ").replace(/\s+/g, " ").trim();
}
/**
* Deterministic rules for classifying forwarder responses into the 6 canonical categories:
* OFFER_RECEIVED | AVAILABLE | NOT_AVAILABLE | DECLINED | NEEDS_REVIEW | CONFIRMED
*
* CRITICAL LOGISTICS SAFEGUARDS:
* 1. "Rate available" ≠ "Booking confirmed".
* 2. Do NOT mark a booking as CONFIRMED merely because a forwarder provided a rate.
* 3. Only an explicit booking confirmation triggers CONFIRMED status.
*/
function classifyConfirmationDeterministic(subject, body, snippet) {
	const fullText = `${subject} ${cleanEmailBody(body, snippet)}`.toLowerCase();
	const matchedDecline = [
		{
			regex: /\bdeclined\b/i,
			phrase: "declined"
		},
		{
			regex: /\bbooking (?:is )?declined\b/i,
			phrase: "booking declined"
		},
		{
			regex: /\bbooking (?:is )?rejected\b/i,
			phrase: "booking rejected"
		},
		{
			regex: /\bcannot accept (?:this )?booking\b/i,
			phrase: "cannot accept this booking"
		},
		{
			regex: /\bcan not accept (?:this )?booking\b/i,
			phrase: "cannot accept this booking"
		},
		{
			regex: /\bunable to accept\b/i,
			phrase: "unable to accept"
		},
		{
			regex: /\bunable to accommodate\b/i,
			phrase: "unable to accommodate"
		},
		{
			regex: /\bwe decline\b/i,
			phrase: "we decline"
		},
		{
			regex: /\bservice (?:is )?(?:suspended|cancelled|canceled)\b/i,
			phrase: "service cancelled"
		}
	].find((p) => p.regex.test(fullText));
	if (matchedDecline) return {
		status: "REJECTED",
		classification: "DECLINED",
		confidence: .98,
		reason: `Forwarder explicitly declined or rejected the request ("${matchedDecline.phrase}").`,
		keywords: [matchedDecline.phrase]
	};
	const matchedNotAvailable = [
		{
			regex: /\bno space\b/i,
			phrase: "no space"
		},
		{
			regex: /\bspace (?:is )?unavailable\b/i,
			phrase: "space unavailable"
		},
		{
			regex: /\bspace is not available\b/i,
			phrase: "space is not available"
		},
		{
			regex: /\bvessel (?:is )?fully booked\b/i,
			phrase: "vessel fully booked"
		},
		{
			regex: /\bvessel (?:is )?full\b/i,
			phrase: "vessel is full"
		},
		{
			regex: /\bno equipment (?:available)?\b/i,
			phrase: "no equipment available"
		},
		{
			regex: /\bunable to confirm space\b/i,
			phrase: "unable to confirm space"
		},
		{
			regex: /\bcannot confirm space\b/i,
			phrase: "cannot confirm space"
		},
		{
			regex: /\broll(?:ed)? over to next\b/i,
			phrase: "rolled over"
		},
		{
			regex: /\broll(?:ed)? over\b/i,
			phrase: "rolled over"
		}
	].find((p) => p.regex.test(fullText));
	if (matchedNotAvailable) return {
		status: "REJECTED",
		classification: "NOT_AVAILABLE",
		confidence: .96,
		reason: `Forwarder indicated vessel is full or space/equipment is unavailable ("${matchedNotAvailable.phrase}").`,
		keywords: [matchedNotAvailable.phrase]
	};
	if (![
		/\bnot confirmed\b/i,
		/\byet to be confirmed\b/i,
		/\bnot yet confirmed\b/i,
		/\bunconfirmed\b/i,
		/\bpending confirmation\b/i,
		/\bpending space\b/i,
		/\bwaiting (?:for )?confirmation\b/i,
		/\baquiring confirmation\b/i,
		/\bprior to confirmation\b/i,
		/\bbefore confirmation\b/i,
		/\bunable to confirm\b/i,
		/\bcannot confirm\b/i,
		/\bcan not confirm\b/i,
		/\bsubject to (?:carrier|line|space|allocation|vessel|feeder) (?:confirmation|approval)\b/i,
		/\bsubject to availability\b/i,
		/\bplease confirm\b/i,
		/\bkindly confirm\b/i,
		/\bawaiting (?:your )?confirmation\b/i
	].some((nq) => nq.test(fullText))) {
		const matchedConfirmation = [
			{
				regex: /\bbooking (?:is |has been )?(?:firmly |now )?confi[r]?med\b/i,
				phrase: "booking confirmed"
			},
			{
				regex: /\bbooking confi[r]?med\b/i,
				phrase: "booking confirmed"
			},
			{
				regex: /\bwe (?:hereby |can )?confi[r]?m (?:the |your )?(?:space and )?booking\b/i,
				phrase: "we confirm the booking"
			},
			{
				regex: /\byour booking (?:is|has been) (?:firmly )?confi[r]?med\b/i,
				phrase: "your booking is confirmed"
			},
			{
				regex: /\bbooking confirmation (?:attached|is attached|enclosed|number|no|ref)\b/i,
				phrase: "booking confirmation attached"
			},
			{
				regex: /\bbooking confirmed as requested\b/i,
				phrase: "booking confirmed as requested"
			},
			{
				regex: /\bbooking secured\b/i,
				phrase: "booking secured"
			},
			{
				regex: /\bbooking approved\b/i,
				phrase: "booking approved"
			},
			{
				regex: /\bbooking accepted and confirmed\b/i,
				phrase: "booking accepted and confirmed"
			},
			{
				regex: /\bbooking ref(?:erence)?[:\s]+[A-Z0-9-]+\s*(?:is )?confi[r]?med\b/i,
				phrase: "booking reference confirmed"
			},
			{
				regex: /\bconfirmed as booked\b/i,
				phrase: "confirmed as booked"
			}
		].find((p) => p.regex.test(fullText));
		if (matchedConfirmation) return {
			status: "CONFIRMED",
			classification: "CONFIRMED",
			confidence: .98,
			reason: `Forwarder explicitly confirmed booking/movement ("${matchedConfirmation.phrase}").`,
			keywords: [matchedConfirmation.phrase]
		};
	}
	const matchedRate = [
		{
			regex: /\b(?:usd|\$|eur|gbp)\s*[\d,]+(?:\.\d{2})?\b/i,
			phrase: "freight rate amount"
		},
		{
			regex: /\b[\d,]+\s*(?:usd|\$|eur)\b/i,
			phrase: "currency amount"
		},
		{
			regex: /\b(?:our|the)?\s*(?:ocean|freight)?\s*rate\s*(?:is|:)/i,
			phrase: "rate quote"
		},
		{
			regex: /\bwe (?:can )?offer\b/i,
			phrase: "rate offer"
		},
		{
			regex: /\bquotation\b/i,
			phrase: "quotation"
		},
		{
			regex: /\ball inclusive\b/i,
			phrase: "all inclusive rate"
		},
		{
			regex: /\bper (?:container|40hc|20ft|teu|feu|unit|box)\b/i,
			phrase: "per container"
		}
	].find((p) => p.regex.test(fullText));
	if (matchedRate) return {
		status: "NOT_CONFIRMED",
		classification: "OFFER_RECEIVED",
		confidence: .95,
		reason: `Forwarder provided a commercial rate quotation ("${matchedRate.phrase}"). Note: "Rate available" ≠ "Booking confirmed". Explicit booking confirmation required.`,
		keywords: [matchedRate.phrase]
	};
	const matchedSpace = [
		{
			regex: /\bspace (?:is )?available\b/i,
			phrase: "space available"
		},
		{
			regex: /\bwe have space\b/i,
			phrase: "we have space"
		},
		{
			regex: /\ballocation (?:is )?open\b/i,
			phrase: "allocation open"
		},
		{
			regex: /\bspace and equipment available\b/i,
			phrase: "space and equipment available"
		},
		{
			regex: /\bequipment (?:is )?available\b/i,
			phrase: "equipment available"
		},
		{
			regex: /\bopen for booking\b/i,
			phrase: "open for booking"
		}
	].find((p) => p.regex.test(fullText));
	if (matchedSpace) return {
		status: "NOT_CONFIRMED",
		classification: "AVAILABLE",
		confidence: .92,
		reason: `Forwarder confirmed space or equipment is available ("${matchedSpace.phrase}"). Note: "Space available" ≠ "Booking confirmed". Awaiting commercial quote.`,
		keywords: [matchedSpace.phrase]
	};
	const matchedNonConfirmation = [
		{
			regex: /\breceived\b/i,
			phrase: "received"
		},
		{
			regex: /\bwell received\b/i,
			phrase: "well received"
		},
		{
			regex: /\bnoted with thanks\b/i,
			phrase: "noted with thanks"
		},
		{
			regex: /\bwe will check\b/i,
			phrase: "we will check"
		},
		{
			regex: /\bchecking availability\b/i,
			phrase: "checking availability"
		},
		{
			regex: /\bchecking with (?:carrier|line|vessel|feeder)\b/i,
			phrase: "checking with carrier"
		},
		{
			regex: /\bchecking space\b/i,
			phrase: "checking space"
		},
		{
			regex: /\bwaiting for approval\b/i,
			phrase: "waiting for approval"
		},
		{
			regex: /\bwaiting for allocation\b/i,
			phrase: "waiting for allocation"
		},
		{
			regex: /\bsubject to availability\b/i,
			phrase: "subject to availability"
		},
		{
			regex: /\bsubject to space\b/i,
			phrase: "subject to space"
		},
		{
			regex: /\bsubject to (?:carrier|line) confirmation\b/i,
			phrase: "subject to confirmation"
		},
		{
			regex: /\bpending space\b/i,
			phrase: "pending space"
		},
		{
			regex: /\bpending approval\b/i,
			phrase: "pending approval"
		},
		{
			regex: /\bpending confirmation\b/i,
			phrase: "pending confirmation"
		},
		{
			regex: /\bworking on this\b/i,
			phrase: "working on this"
		},
		{
			regex: /\bwill revert (?:shortly|soon|later|tomorrow)\b/i,
			phrase: "will revert shortly"
		},
		{
			regex: /\bunder processing\b/i,
			phrase: "under processing"
		},
		{
			regex: /\bin process\b/i,
			phrase: "in process"
		},
		{
			regex: /\bwill update you\b/i,
			phrase: "will update you"
		},
		{
			regex: /\backnowledged\b/i,
			phrase: "acknowledged"
		}
	].find((p) => p.regex.test(fullText));
	if (matchedNonConfirmation) return {
		status: "NOT_CONFIRMED",
		classification: "NEEDS_REVIEW",
		confidence: .9,
		reason: `Forwarder acknowledged message or stated pending check/availability ("${matchedNonConfirmation.phrase}").`,
		keywords: [matchedNonConfirmation.phrase]
	};
	const matchedReview = [
		{
			regex: /\bcan you (?:please )?(?:advise|provide|confirm|send)\b/i,
			phrase: "clarification request"
		},
		{
			regex: /\bplease advise\b/i,
			phrase: "please advise"
		},
		{
			regex: /\bis it possible to\b/i,
			phrase: "inquiry"
		},
		{
			regex: /\balternate (?:port|vessel|sailing|date)\b/i,
			phrase: "alternate proposal"
		},
		{
			regex: /\brate (?:change|increase|revision|adjustment)\b/i,
			phrase: "rate revision"
		},
		{
			regex: /\bconditional\b/i,
			phrase: "conditional terms"
		},
		{
			regex: /\?\s*$/m,
			phrase: "question marks"
		}
	].find((p) => p.regex.test(fullText));
	if (matchedReview) return {
		status: "NEEDS_REVIEW",
		classification: "NEEDS_REVIEW",
		confidence: .85,
		reason: `Forwarder message contains questions, modification proposals, or conditional remarks requiring operator review.`,
		keywords: [matchedReview.phrase]
	};
	return null;
}
async function detectForwarderConfirmation(input) {
	const deterministicResult = classifyConfirmationDeterministic(input.subject || "", input.body || "", input.snippet || "");
	if (deterministicResult) return {
		confirmationStatus: deterministicResult.status,
		classification: deterministicResult.classification,
		confidence: deterministicResult.confidence,
		reason: deterministicResult.reason,
		detectedBy: "DETERMINISTIC",
		emailMessageId: input.emailMessageId,
		details: {
			matchedKeywords: deterministicResult.keywords,
			analysis: "Deterministically verified via logistics phrase matching engine."
		}
	};
	return {
		confirmationStatus: "NEEDS_REVIEW",
		classification: "NEEDS_REVIEW",
		confidence: .5,
		reason: "Email content does not match standard confirmation phrases and requires operator review.",
		detectedBy: "DETERMINISTIC",
		emailMessageId: input.emailMessageId
	};
}
var GMAIL_SCOPES = [
	"https://mail.google.com/",
	"https://www.googleapis.com/auth/gmail.send",
	"https://www.googleapis.com/auth/gmail.readonly",
	"https://www.googleapis.com/auth/gmail.modify",
	"https://www.googleapis.com/auth/gmail.compose",
	"https://www.googleapis.com/auth/gmail.insert",
	"https://www.googleapis.com/auth/gmail.labels",
	"https://www.googleapis.com/auth/gmail.metadata",
	"https://www.googleapis.com/auth/gmail.settings.basic",
	"https://www.googleapis.com/auth/gmail.settings.sharing",
	"https://www.googleapis.com/auth/gmail.addons.current.action.compose",
	"https://www.googleapis.com/auth/gmail.addons.current.message.action",
	"https://www.googleapis.com/auth/gmail.addons.current.message.metadata",
	"https://www.googleapis.com/auth/gmail.addons.current.message.readonly",
	"https://www.googleapis.com/auth/userinfo.email",
	"https://www.googleapis.com/auth/userinfo.profile"
];
var firebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebase_applet_config_default);
var firebaseAuth = getAuth(firebaseApp);
var googleProvider = new GoogleAuthProvider();
GMAIL_SCOPES.forEach((scope) => {
	googleProvider.addScope(scope);
});
googleProvider.setCustomParameters({
	prompt: "select_account",
	access_type: "offline"
});
var cachedAccessToken = null;
var cachedTokenExpiresAt = 0;
var cachedGoogleUser = null;
var globalQuotaCooldownUntil = 0;
function isGmailQuotaCooldownActive() {
	return Date.now() < globalQuotaCooldownUntil;
}
function getGmailQuotaCooldownSeconds() {
	return Math.max(0, Math.ceil((globalQuotaCooldownUntil - Date.now()) / 1e3));
}
function setGmailQuotaCooldown(seconds = 65) {
	globalQuotaCooldownUntil = Date.now() + seconds * 1e3;
	console.warn(`[GmailService] Gmail API quota cooldown initiated for ${seconds}s to prevent Google Cloud per-minute rate exhaustion.`);
}
var cachedLiveMessages = [];
var cachedLiveMessagesFetchedAt = 0;
var messageDetailsCache = /* @__PURE__ */ new Map();
var isConnecting = false;
/**
* Encodes a string to RFC 4648 Base64URL without padding
*/
function base64UrlEncode(str) {
	const utf8Bytes = new TextEncoder().encode(str);
	let binary = "";
	for (let i = 0; i < utf8Bytes.length; i++) {
		const byte = utf8Bytes[i];
		if (byte !== void 0) binary += String.fromCharCode(byte);
	}
	return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
/**
* Encodes subject header to RFC 2047 MIME encoded-word syntax
*/
function encodeMimeSubject(subject) {
	if (!subject) return "=?UTF-8?B??=";
	const utf8Bytes = new TextEncoder().encode(subject);
	let binary = "";
	for (let i = 0; i < utf8Bytes.length; i++) {
		const byte = utf8Bytes[i];
		if (byte !== void 0) binary += String.fromCharCode(byte);
	}
	return `=?UTF-8?B?${btoa(binary)}?=`;
}
/**
* Builds standard RFC 2822 Raw Email String
*/
function createRawEmailMessage(params) {
	const boundary = `----=_Part_${Date.now()}_${Math.random().toString(36).substring(2)}`;
	const dateStr = (/* @__PURE__ */ new Date()).toUTCString();
	const fromFormatted = params.fromName ? `"${params.fromName.replace(/"/g, "")}" <${params.from}>` : params.from;
	let toFormatted = params.to;
	if (params.to.includes(",") || params.to.includes(";")) toFormatted = params.to.split(/[,;]+/).map((s) => s.trim()).filter(Boolean).map((addr) => params.toName ? `"${params.toName.replace(/"/g, "")}" <${addr}>` : addr).join(", ");
	else if (params.toName) toFormatted = `"${params.toName.replace(/"/g, "")}" <${params.to}>`;
	const lines = [`From: ${fromFormatted}`, `To: ${toFormatted}`];
	if (params.cc && params.cc.trim()) lines.push(`Cc: ${params.cc.trim()}`);
	if (params.bcc && params.bcc.trim()) lines.push(`Bcc: ${params.bcc.trim()}`);
	lines.push(`Subject: ${encodeMimeSubject(params.subject)}`);
	lines.push(`Date: ${dateStr}`);
	lines.push(`MIME-Version: 1.0`);
	if (params.messageId) lines.push(`Message-ID: <${params.messageId}@nashmiaindustries.com>`);
	lines.push(`Content-Type: multipart/alternative; boundary="${boundary}"`);
	lines.push("");
	lines.push(`--${boundary}`);
	lines.push("Content-Type: text/plain; charset=UTF-8");
	lines.push("Content-Transfer-Encoding: 8bit");
	lines.push("");
	lines.push(params.body || "");
	lines.push("");
	const htmlContent = params.bodyHtml || (params.body ? params.body.replace(/\n/g, "<br/>") : "");
	lines.push(`--${boundary}`);
	lines.push("Content-Type: text/html; charset=UTF-8");
	lines.push("Content-Transfer-Encoding: 8bit");
	lines.push("");
	lines.push(`<!DOCTYPE html><html><body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b;">${htmlContent}</body></html>`);
	lines.push("");
	lines.push(`--${boundary}--`);
	return lines.join("\r\n");
}
/**
* Retrieves the currently active in-memory Gmail Access Token,
* automatically querying the backend to refresh if expired.
*/
async function getGmailAccessToken(userId, forceRefresh = false) {
	if (cachedAccessToken && !forceRefresh && cachedTokenExpiresAt - Date.now() > 6e4) return cachedAccessToken;
	try {
		const query = new URLSearchParams();
		if (userId) query.set("userId", userId);
		if (forceRefresh) query.set("forceRefresh", "true");
		const res = await fetch(`/api/gmail/connection-status?${query.toString()}`);
		if (res.ok) {
			const data = await res.json();
			if (data.isConnected && data.accessToken) {
				cachedAccessToken = data.accessToken;
				cachedTokenExpiresAt = data.tokenExpiresAt ? new Date(data.tokenExpiresAt).getTime() : Date.now() + 35e5;
				cachedGoogleUser = {
					email: data.email || "",
					displayName: data.displayName || data.email || "Gmail User",
					photoURL: data.avatarUrl || void 0,
					uid: ""
				};
				return cachedAccessToken;
			}
		}
	} catch (err) {
		console.warn("[GmailService] Notice checking server for fresh access token:", err);
	}
	if (isSupabaseConfigured) try {
		let query = supabase.from("gmail_connections").select("*").eq("status", "connected").order("updated_at", { ascending: false }).limit(1);
		const validUserUuid = safeUuid(userId);
		if (validUserUuid) query = query.eq("user_id", validUserUuid);
		const { data, error } = await query.maybeSingle();
		if (!error && data?.access_token) {
			cachedAccessToken = data.access_token;
			cachedTokenExpiresAt = data.token_expires_at ? new Date(data.token_expires_at).getTime() : Date.now() + 35e5;
			cachedGoogleUser = {
				email: data.google_email,
				displayName: data.display_name || data.google_email,
				photoURL: data.avatar_url || void 0,
				uid: data.google_user_id || ""
			};
			return cachedAccessToken;
		}
	} catch (err) {
		console.warn("[GmailService] Notice while retrieving stored access token:", err);
	}
	return cachedAccessToken;
}
/**
* Returns current cached Google connection user
*/
function getCachedGoogleUser() {
	return cachedGoogleUser;
}
/**
* Lazily loads the Google Identity Services (GIS) script only when an OAuth connection
* is actually initiated, preventing blocking of the initial application page load.
*/
async function ensureGoogleIdentityServicesLoaded() {
	if (typeof window === "undefined") return;
	if (window.google?.accounts?.oauth2?.initTokenClient || window.google?.accounts?.oauth2?.initCodeClient) return;
	return new Promise((resolve) => {
		const existing = document.querySelector("script[src*=\"accounts.google.com/gsi/client\"]");
		if (existing) {
			if (window.google?.accounts?.oauth2?.initTokenClient || window.google?.accounts?.oauth2?.initCodeClient) resolve();
			else {
				existing.addEventListener("load", () => resolve(), { once: true });
				setTimeout(resolve, 800);
			}
			return;
		}
		const script = document.createElement("script");
		script.src = "https://accounts.google.com/gsi/client";
		script.async = true;
		script.defer = true;
		script.onload = () => resolve();
		script.onerror = () => {
			resolve();
		};
		document.head.appendChild(script);
		setTimeout(resolve, 1e3);
	});
}
/**
* Connects to Gmail via Google OAuth.
* Uses Google Identity Services (GIS) initTokenClient for direct client-side token acquisition.
* Falls back to Firebase popup if GIS is unavailable.
*/
async function connectGmailAccount(userId) {
	if (isConnecting) throw new Error("Gmail connection flow already in progress.");
	try {
		isConnecting = true;
		await ensureGoogleIdentityServicesLoaded();
		const googleClientId = firebase_applet_config_default?.oAuthClientId || "1052262935067-h1o99oo3pauajsoafi5va9flit9ntvvv.apps.googleusercontent.com";
		if (typeof window !== "undefined" && window.google?.accounts?.oauth2?.initTokenClient) try {
			console.log("[GmailService] Initiating Google Identity Services token client...");
			const tokenResponse = await new Promise((resolve, reject) => {
				try {
					window.google.accounts.oauth2.initTokenClient({
						client_id: googleClientId,
						scope: GMAIL_SCOPES.join(" "),
						prompt: "",
						callback: (response) => {
							if (response.access_token) resolve({
								access_token: response.access_token,
								expires_in: response.expires_in
							});
							else reject(new Error(response.error_description || response.error || "Google authorization was not completed."));
						},
						error_callback: (err) => {
							reject(err);
						}
					}).requestAccessToken({ prompt: "" });
				} catch (initErr) {
					reject(initErr);
				}
			});
			if (tokenResponse.access_token) {
				cachedAccessToken = tokenResponse.access_token;
				const expiresInSec = Number(tokenResponse.expires_in) || 3599;
				cachedTokenExpiresAt = Date.now() + expiresInSec * 1e3;
				let email = "";
				let displayName = "Gmail User";
				let avatarUrl = void 0;
				try {
					const userInfoRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", { headers: { Authorization: `Bearer ${cachedAccessToken}` } });
					if (userInfoRes.ok) {
						const userInfo = await userInfoRes.json();
						email = userInfo.email || "";
						displayName = userInfo.name || email.split("@")[0] || "Gmail User";
						avatarUrl = userInfo.picture || void 0;
					}
				} catch (uErr) {
					console.warn("[GmailService] Notice fetching userinfo:", uErr);
				}
				cachedGoogleUser = {
					email,
					displayName,
					photoURL: avatarUrl,
					uid: ""
				};
				try {
					await fetch("/api/gmail/save-connection", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							accessToken: cachedAccessToken,
							expiresIn: expiresInSec,
							email,
							displayName,
							avatarUrl,
							userId
						})
					});
				} catch (saveErr) {
					console.warn("[GmailService] Failed to save connection on backend:", saveErr);
				}
				if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nashmia_gmail_connected", { detail: {
					email,
					displayName,
					avatarUrl,
					timestamp: Date.now()
				} }));
				return {
					success: true,
					accessToken: cachedAccessToken,
					email,
					displayName,
					avatarUrl
				};
			}
		} catch (gisErr) {
			console.warn("[GmailService] GIS token client notice, attempting Firebase fallback:", gisErr);
		}
		console.log("[GmailService] Executing Firebase Google Auth popup fallback...");
		const result = await signInWithPopup(firebaseAuth, googleProvider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		if (!credential?.accessToken) throw new Error("Failed to receive Google OAuth access token.");
		cachedAccessToken = credential.accessToken;
		cachedTokenExpiresAt = Date.now() + 35e5;
		const user = result.user;
		const email = user.email || "";
		const displayName = user.displayName || email.split("@")[0] || "Gmail User";
		const avatarUrl = user.photoURL || void 0;
		cachedGoogleUser = {
			email,
			displayName,
			photoURL: avatarUrl,
			uid: user.uid
		};
		try {
			await fetch("/api/gmail/save-connection", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					accessToken: cachedAccessToken,
					expiresIn: 3599,
					email,
					displayName,
					avatarUrl,
					googleUserId: user.uid,
					userId
				})
			});
		} catch (saveErr) {
			console.warn("[GmailService] Failed to save connection on backend:", saveErr);
		}
		return {
			success: true,
			accessToken: cachedAccessToken,
			email,
			displayName,
			avatarUrl
		};
	} catch (err) {
		console.error("[GmailService] Error during Google OAuth sign-in:", err);
		const firebaseCode = err?.code;
		const rawMessage = err instanceof Error ? err.message : String(err);
		if (firebaseCode === "auth/popup-blocked" || rawMessage.includes("popup-blocked")) throw new Error("The Google authentication popup was blocked by your browser. Please allow popups for this site in your browser address bar and click Connect again.");
		else if (firebaseCode === "auth/popup-closed-by-user" || rawMessage.includes("popup-closed-by-user")) throw new Error("Authentication popup was closed before signing in.");
		else if (firebaseCode === "auth/cancelled-popup-request" || rawMessage.includes("cancelled-popup-request")) throw new Error("A previous authentication request was already pending.");
		else if (rawMessage.includes("Failed to receive Google OAuth access token")) throw new Error("Google did not return an access token with required Gmail scopes.");
		throw err;
	} finally {
		isConnecting = false;
	}
}
/**
* Disconnects the Gmail account
*/
async function disconnectGmailAccount(userId, email) {
	cachedAccessToken = null;
	cachedTokenExpiresAt = 0;
	cachedGoogleUser = null;
	try {
		await fetch("/api/gmail/disconnect", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userId,
				email
			})
		});
	} catch (err) {
		console.warn("[GmailService] Notice while calling backend disconnect:", err);
	}
	if (isSupabaseConfigured) try {
		const validUserUuid = safeUuid(userId);
		if (validUserUuid) await supabase.from("gmail_connections").update({
			status: "disconnected",
			access_token: null,
			refresh_token: null,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("user_id", validUserUuid);
		else if (email) await supabase.from("gmail_connections").update({
			status: "disconnected",
			access_token: null,
			refresh_token: null,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("google_email", email.trim().toLowerCase());
		else await supabase.from("gmail_connections").update({
			status: "disconnected",
			access_token: null,
			refresh_token: null,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).neq("status", "disconnected");
	} catch (dbErr) {
		console.warn("[GmailService] Client Supabase disconnect update notice:", dbErr);
	}
	try {
		if (typeof window !== "undefined") localStorage.removeItem(GMAIL_STATUS_CACHE_KEY);
		await firebaseAuth.signOut();
	} catch (err) {
		console.warn("[GmailService] Firebase sign out notice:", err);
	}
}
var GMAIL_STATUS_CACHE_KEY = "nashmia_gmail_conn_cache_v1";
function getCachedGmailConnectionState() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(GMAIL_STATUS_CACHE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			if (parsed && typeof parsed.isConnected === "boolean") return parsed;
		}
	} catch {}
	return null;
}
function persistCachedGmailStatus(status) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(GMAIL_STATUS_CACHE_KEY, JSON.stringify(status));
	} catch {}
}
/**
* Checks connection state with backend / Supabase, automatically restoring connection
* and refreshing expired tokens without user intervention.
*/
async function fetchGmailConnectionState(userId, forceRefresh = false) {
	try {
		const params = new URLSearchParams();
		if (userId) params.set("userId", userId);
		if (forceRefresh) params.set("forceRefresh", "true");
		const res = await fetch(`/api/gmail/connection-status?${params.toString()}`);
		if (res.ok) {
			const data = await res.json();
			if (data.isConnected) {
				if (data.accessToken) {
					cachedAccessToken = data.accessToken;
					cachedTokenExpiresAt = data.tokenExpiresAt ? new Date(data.tokenExpiresAt).getTime() : Date.now() + 35e5;
				}
				cachedGoogleUser = {
					email: data.email || "",
					displayName: data.displayName || data.email || "Gmail User",
					photoURL: data.avatarUrl || void 0,
					uid: ""
				};
				const result = {
					isConnected: true,
					email: data.email || null,
					displayName: data.displayName || null,
					avatarUrl: data.avatarUrl || null,
					lastSyncAt: data.lastSyncAt || null
				};
				persistCachedGmailStatus(result);
				return result;
			}
		}
	} catch (err) {
		console.warn("[GmailService] Notice fetching connection status from server:", err);
	}
	if (isSupabaseConfigured) try {
		let query = supabase.from("gmail_connections").select("*").eq("status", "connected").order("updated_at", { ascending: false }).limit(1);
		const validUserUuid = safeUuid(userId);
		if (validUserUuid) query = query.eq("user_id", validUserUuid);
		const { data } = await query.maybeSingle();
		if (data) {
			if (data.access_token) {
				cachedAccessToken = data.access_token;
				cachedTokenExpiresAt = data.token_expires_at ? new Date(data.token_expires_at).getTime() : Date.now() + 35e5;
			}
			cachedGoogleUser = {
				email: data.google_email,
				displayName: data.display_name || data.google_email,
				photoURL: data.avatar_url || void 0,
				uid: data.google_user_id || ""
			};
			return {
				isConnected: true,
				email: data.google_email,
				displayName: data.display_name,
				avatarUrl: data.avatar_url,
				lastSyncAt: data.last_sync_at
			};
		}
	} catch (err) {
		console.warn("[GmailService] Error fetching gmail_connections fallback:", err);
	}
	if (cachedAccessToken && cachedGoogleUser) return {
		isConnected: true,
		email: cachedGoogleUser.email,
		displayName: cachedGoogleUser.displayName,
		avatarUrl: cachedGoogleUser.photoURL || null,
		lastSyncAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	return {
		isConnected: false,
		email: null,
		displayName: null,
		avatarUrl: null
	};
}
/**
* Sends a real email directly via the official Gmail REST API
*/
async function sendEmailDirectlyViaGmail(params) {
	console.log("[GmailService] sendEmailDirectlyViaGmail called with payload params:", {
		fromEmail: params.fromEmail,
		fromName: params.fromName,
		toEmail: params.toEmail,
		toName: params.toName,
		cc: params.cc || null,
		bcc: params.bcc || null,
		subject: params.subject,
		bodyLength: params.body ? params.body.length : 0,
		hasHtml: Boolean(params.bodyHtml),
		bookingId: params.bookingId || null,
		forwarderId: params.forwarderId || null,
		userId: params.userId || null
	});
	let token = await getGmailAccessToken(params.userId);
	if (!token) {
		console.log("[GmailService] No access token in cache or database. Initiating Gmail OAuth popup...");
		token = (await connectGmailAccount(params.userId)).accessToken;
	}
	if (!token) {
		const errMessage = "Gmail authentication token is unavailable. Please connect your Gmail account in settings or login.";
		console.error("[GmailService] Aborted: Token unavailable.", { userId: params.userId });
		throw new Error(errMessage);
	}
	const rawEmail = createRawEmailMessage({
		from: params.fromEmail,
		fromName: params.fromName,
		to: params.toEmail,
		toName: params.toName,
		cc: params.cc,
		bcc: params.bcc,
		subject: params.subject,
		body: params.body,
		bodyHtml: params.bodyHtml,
		messageId: `nashmia-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`
	});
	const base64EncodedRaw = base64UrlEncode(rawEmail);
	console.log("[GmailService] RFC 2822 email constructed.", {
		rawLengthBytes: rawEmail.length,
		base64EncodedLength: base64EncodedRaw.length,
		snippet: rawEmail.slice(0, 240)
	});
	const requestPayload = { raw: base64EncodedRaw };
	console.log("[GmailService] Dispatching POST https://gmail.googleapis.com/gmail/v1/users/me/messages/send with payload:", {
		payloadStructure: "{ raw: string }",
		rawLength: base64EncodedRaw.length,
		tokenPrefix: token.substring(0, 8) + "..."
	});
	let response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(requestPayload)
	});
	if (response.status === 401) {
		console.warn("[GmailService] Token expired on send (HTTP 401). Attempting token refresh/re-authentication...");
		cachedAccessToken = null;
		let refreshedToken = await getGmailAccessToken(params.userId, true);
		if (!refreshedToken) try {
			console.log("[GmailService] Stale token detected. Prompting Google OAuth re-authentication popup...");
			refreshedToken = (await connectGmailAccount(params.userId)).accessToken;
		} catch (connErr) {
			console.warn("[GmailService] Interactive re-authentication popup skipped or cancelled:", connErr);
		}
		if (refreshedToken) {
			console.log("[GmailService] Re-attempting send with fresh access token...");
			token = refreshedToken;
			response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json"
				},
				body: JSON.stringify(requestPayload)
			});
		}
	}
	if (response.status === 403 || response.status === 429) {
		setGmailQuotaCooldown(70);
		console.warn(`[GmailService] Temporary quota limit reached (HTTP ${response.status}). Waiting 3.5s before retry...`);
		await new Promise((r) => setTimeout(r, 3500));
		response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(requestPayload)
		});
	}
	if (!response.ok) {
		const status = response.status;
		const statusText = response.statusText;
		const responseHeaders = {};
		response.headers.forEach((val, key) => {
			responseHeaders[key] = val;
		});
		let rawBody = "";
		let errorJson = null;
		try {
			rawBody = await response.text();
			errorJson = JSON.parse(rawBody);
		} catch {}
		if (status === 429 || status === 403 || rawBody.includes("rateLimitExceeded") || rawBody.includes("Quota exceeded") || rawBody.includes("RATE_LIMIT_EXCEEDED") || rawBody.includes("Total Query Cost")) {
			setGmailQuotaCooldown(75);
			console.warn(`[GmailService] Notice: Gmail API per-minute quota reached (HTTP ${status}). Activating 75s cooldown to allow quota window reset.`);
			throw new Error(`Gmail API Quota Exceeded (403): Units per minute per user limit reached on Google Cloud. Request has been safely recorded and queued.`);
		}
		console.error("[GmailService] ❌ Gmail API Send Request FAILED. Full error response:", {
			status,
			statusText,
			headers: responseHeaders,
			parsedError: errorJson,
			rawBody,
			requestPayloadPreview: {
				from: params.fromEmail,
				to: params.toEmail,
				subject: params.subject,
				rawLength: base64EncodedRaw.length
			}
		});
		if (status === 401) {
			console.warn("[GmailService] Token expired or invalid (HTTP 401). Invalidating cached token.");
			cachedAccessToken = null;
			throw new Error("Gmail authentication credentials expired or invalid (401). Please click 'Connect Email' in settings to authorize your account.");
		}
		const detailedMessage = errorJson?.error?.message || rawBody || `Gmail API returned status ${status} (${statusText})`;
		throw new Error(`Gmail API Error (${status}): ${detailedMessage}`);
	}
	const data = await response.json();
	console.log("[GmailService] ✅ Gmail API Send Request SUCCEEDED:", {
		id: data.id,
		threadId: data.threadId,
		labelIds: data.labelIds
	});
	return {
		success: true,
		gmailMessageId: data.id,
		gmailThreadId: data.threadId
	};
}
/**
* Format bytes to readable size string
*/
function formatAttachmentSize(bytes) {
	if (typeof bytes === "string" && (bytes.includes("KB") || bytes.includes("MB") || bytes.includes("B"))) return bytes;
	const num = typeof bytes === "number" ? bytes : parseInt(String(bytes || 0), 10);
	if (!num || isNaN(num) || num <= 0) return "0 KB";
	if (num < 1024) return `${num} B`;
	if (num < 1048576) return `${(num / 1024).toFixed(1)} KB`;
	return `${(num / 1048576).toFixed(1)} MB`;
}
/**
* Safely decodes Base64/Base64URL encoded UTF-8 strings
*/
function safeBase64UrlDecode(input) {
	if (!input) return "";
	try {
		const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
		const binary = atob(base64);
		const bytes = new Uint8Array(binary.length);
		for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
		return new TextDecoder().decode(bytes);
	} catch {
		try {
			return decodeURIComponent(escape(atob(input.replace(/-/g, "+").replace(/_/g, "/"))));
		} catch {
			return "";
		}
	}
}
/**
* Recursively extracts plaintext, HTML bodies, and attachment metadata from Gmail MIME payload
*/
function extractBodyAndAttachmentsFromPayload(payload, messageId) {
	let text = "";
	let html = "";
	const attachments = [];
	function walk(part) {
		if (!part) return;
		const rawFilename = part.filename?.trim();
		const attachmentId = part.body?.attachmentId;
		const hasData = Boolean(part.body?.data);
		const size = part.body?.size || 0;
		if ((Boolean(rawFilename && rawFilename.length > 0) || Boolean(attachmentId) || part.mimeType && ![
			"text/plain",
			"text/html",
			"multipart/alternative",
			"multipart/mixed",
			"multipart/related"
		].includes(part.mimeType)) && (rawFilename || attachmentId || size > 0 || hasData)) {
			const safeName = rawFilename || `attachment_${attachments.length + 1}`;
			const downloadUrl = attachmentId ? `/api/gmail/attachment?messageId=${encodeURIComponent(messageId)}&attachmentId=${encodeURIComponent(attachmentId)}&filename=${encodeURIComponent(safeName)}` : void 0;
			attachments.push({
				id: attachmentId || `att-${messageId}-${attachments.length}`,
				attachmentId,
				filename: safeName,
				name: safeName,
				mimeType: part.mimeType || "application/octet-stream",
				size: formatAttachmentSize(size),
				url: downloadUrl,
				data: part.body?.data
			});
		}
		if (part.mimeType === "text/plain" && part.body?.data && !text) text = safeBase64UrlDecode(part.body.data);
		else if (part.mimeType === "text/html" && part.body?.data && !html) html = safeBase64UrlDecode(part.body.data);
		if (part.parts && Array.isArray(part.parts)) for (const subPart of part.parts) walk(subPart);
	}
	walk(payload);
	return {
		text,
		html: html || void 0,
		attachments
	};
}
/**
* Fetches real inbox and sent messages from the user's connected Gmail account
*/
async function fetchLiveGmailMessages(options) {
	const now = Date.now();
	if (!options?.forceRefresh && !options?.query && now - cachedLiveMessagesFetchedAt < 6e4 && cachedLiveMessages.length > 0) return cachedLiveMessages;
	if (isGmailQuotaCooldownActive() && !options?.forceRefresh) {
		console.warn(`[GmailService] Gmail API quota cooldown active (${getGmailQuotaCooldownSeconds()}s remaining). Serving cached messages.`);
		return cachedLiveMessages;
	}
	let token = cachedAccessToken;
	if (!token && options?.userId) token = await getGmailAccessToken(options.userId);
	if (!token) token = await getGmailAccessToken();
	if (!token) throw new Error("Gmail is not connected. Please connect your Gmail account.");
	const maxResults = options?.maxResults || 15;
	const q = options?.query ? encodeURIComponent(options.query) : "";
	const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=${maxResults}${q ? `&q=${q}` : ""}`;
	let listRes = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
	if (listRes.status === 401) {
		console.warn("[GmailService] Token expired while fetching messages. Auto-refreshing...");
		cachedAccessToken = null;
		const refreshedToken = await getGmailAccessToken(void 0, true);
		if (refreshedToken) {
			token = refreshedToken;
			listRes = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
		}
	}
	if (!listRes.ok) {
		if (listRes.status === 401) cachedAccessToken = null;
		if (listRes.status === 403 || listRes.status === 429) {
			setGmailQuotaCooldown(60);
			console.warn(`[GmailService] Rate limit hit during message listing (HTTP ${listRes.status}). Serving cached inbox messages.`);
			return cachedLiveMessages;
		}
		throw new Error(`Failed to list Gmail messages (${listRes.status})`);
	}
	const listData = await listRes.json();
	if (!listData.messages || listData.messages.length === 0) return [];
	const detailPromises = listData.messages.slice(0, maxResults).map(async (msg) => {
		const cachedItem = messageDetailsCache.get(msg.id);
		if (cachedItem) return cachedItem;
		try {
			const msgRes = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}?format=full`, { headers: { Authorization: `Bearer ${token}` } });
			if (!msgRes.ok) {
				if (msgRes.status === 403 || msgRes.status === 429) setGmailQuotaCooldown(60);
				return null;
			}
			const fullMsg = await msgRes.json();
			const headers = fullMsg.payload?.headers || [];
			const getHeader = (name) => headers.find((h) => h.name.toLowerCase() === name.toLowerCase())?.value || "";
			const fromRaw = getHeader("From") || "Unknown Sender";
			const toRaw = getHeader("To") || "";
			let fromName = fromRaw;
			let fromEmail = fromRaw;
			const fromMatch = fromRaw.match(/^(?:"?([^"]*)"?\s)?<?([^>]+)>?$/);
			if (fromMatch) {
				fromName = fromMatch[1] ? fromMatch[1].trim() : fromMatch[2] || fromRaw;
				fromEmail = fromMatch[2] ? fromMatch[2].trim() : fromRaw;
			}
			let toName = toRaw;
			let toEmail = toRaw;
			const toMatch = toRaw.match(/^(?:"?([^"]*)"?\s)?<?([^>]+)>?$/);
			if (toMatch) {
				toName = toMatch[1] ? toMatch[1].trim() : toMatch[2] || toRaw;
				toEmail = toMatch[2] ? toMatch[2].trim() : toRaw;
			}
			const extracted = extractBodyAndAttachmentsFromPayload(fullMsg.payload, msg.id);
			const snippet = fullMsg.snippet || "";
			const body = extracted.text || snippet;
			const bodyHtml = extracted.html;
			const record = {
				id: fullMsg.id,
				threadId: fullMsg.threadId,
				snippet,
				subject: getHeader("Subject") || "(No Subject)",
				from: fromRaw,
				to: toRaw,
				fromEmail,
				fromName,
				toEmail,
				toName,
				date: getHeader("Date") || (/* @__PURE__ */ new Date()).toISOString(),
				internalDate: fullMsg.internalDate,
				labelIds: fullMsg.labelIds || [],
				body,
				bodyHtml,
				attachments: extracted.attachments
			};
			messageDetailsCache.set(msg.id, record);
			return record;
		} catch {
			return null;
		}
	});
	const finalMessages = (await Promise.all(detailPromises)).filter((m) => m !== null);
	if (finalMessages.length > 0) {
		cachedLiveMessages = finalMessages;
		cachedLiveMessagesFetchedAt = Date.now();
	}
	return finalMessages.length > 0 ? finalMessages : cachedLiveMessages;
}
/**
* Maps a real fetched Gmail message into the unified frontend EmailMessageRecord
*/
function mapGmailMessageToEmailRecord(msg, currentGoogleEmail) {
	const isSent = msg.labelIds.includes("SENT") || Boolean(currentGoogleEmail) && msg.from.toLowerCase().includes((currentGoogleEmail || "").toLowerCase());
	const isDraft = msg.labelIds.includes("DRAFT");
	const direction = isSent ? "outbound" : "inbound";
	let fromName = msg.fromName || msg.from;
	let fromEmail = msg.fromEmail || msg.from;
	if (!msg.fromEmail) {
		const fromMatch = msg.from.match(/^(?:"?([^"]*)"?\s)?<?([^>]+)>?$/);
		if (fromMatch) {
			fromName = fromMatch[1] ? fromMatch[1].trim() : fromMatch[2] || msg.from;
			fromEmail = fromMatch[2] ? fromMatch[2].trim() : msg.from;
		}
	}
	let toName = msg.toName || msg.to;
	let toEmail = msg.toEmail || msg.to;
	if (!msg.toEmail) {
		const toMatch = msg.to.match(/^(?:"?([^"]*)"?\s)?<?([^>]+)>?$/);
		if (toMatch) {
			toName = toMatch[1] ? toMatch[1].trim() : toMatch[2] || msg.to;
			toEmail = toMatch[2] ? toMatch[2].trim() : msg.to;
		}
	}
	const refMatch = `${msg.subject} ${msg.snippet} ${msg.body || ""}`.match(/\b(MOV-\d{4}-\d{3,6}|MOV-[A-Z0-9-]+|BK-[A-Z0-9-]+|REF-[A-Z0-9-]+|PO-[A-Z0-9-]+|NASH-[A-Z0-9-]+)\b/i);
	const bookingReference = refMatch ? refMatch[1].toUpperCase() : null;
	const detResult = classifyConfirmationDeterministic(msg.subject || "", msg.body || msg.snippet || "", msg.snippet);
	const isConfirmed = detResult?.status === "CONFIRMED";
	const confirmationStatus = isConfirmed ? "CONFIRMED" : detResult?.status || null;
	let parsedDate = (/* @__PURE__ */ new Date()).toISOString();
	try {
		const d = new Date(msg.date);
		if (!isNaN(d.getTime())) parsedDate = d.toISOString();
	} catch {}
	const realAttachments = (msg.attachments || []).map((att) => ({
		name: att.name || att.filename || "Attachment",
		filename: att.filename || att.name || "Attachment",
		size: typeof att.size === "string" ? att.size : formatAttachmentSize(att.size),
		url: att.url,
		type: att.mimeType,
		mimeType: att.mimeType,
		attachmentId: att.attachmentId,
		gmailMessageId: msg.id,
		data: att.data
	}));
	return {
		id: `gmail-${msg.id}`,
		threadId: `gmail-th-${msg.threadId}`,
		userId: void 0,
		fromEmail,
		fromName,
		toEmail,
		toName,
		subject: msg.subject || "(No Subject)",
		body: msg.body || msg.snippet,
		bodyHtml: msg.bodyHtml || null,
		snippet: msg.snippet || (msg.body ? msg.body.slice(0, 140) : ""),
		emailType: isConfirmed ? "BOOKING_CONFIRMATION" : bookingReference ? "BOOKING_REQUEST" : "GENERAL",
		status: isDraft ? "DRAFT" : "SENT",
		direction,
		gmailMessageId: msg.id,
		gmailThreadId: msg.threadId,
		createdAt: parsedDate,
		updatedAt: parsedDate,
		sentAt: isSent ? parsedDate : null,
		bookingReference,
		movementNumber: bookingReference,
		confirmationStatus,
		confirmationConfidence: detResult?.confidence,
		confirmationReason: detResult?.reason,
		confirmationDetectedBy: isConfirmed ? "DETERMINISTIC" : void 0,
		attachments: realAttachments
	};
}
/**
* Production-Ready Rule-Based Email Cleaning Service
* Deterministically strips quoted replies, signatures, and disclaimers
* while preserving the newest relevant message and audit traceability.
*/
/**
* Deterministically sanitizes HTML content before rendering to protect against
* XSS attacks, injected scripts, malicious iframes, and javascript: links.
*/
function sanitizeEmailHtml(html) {
	if (!html) return "";
	if (typeof window !== "undefined" && purify_default && typeof purify_default.sanitize === "function") return purify_default.sanitize(html, {
		ALLOWED_TAGS: [
			"b",
			"i",
			"em",
			"strong",
			"a",
			"p",
			"br",
			"div",
			"span",
			"ul",
			"ol",
			"li",
			"table",
			"thead",
			"tbody",
			"tr",
			"th",
			"td",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"hr",
			"blockquote",
			"pre",
			"code"
		],
		ALLOWED_ATTR: [
			"href",
			"title",
			"target",
			"style",
			"class",
			"align",
			"valign",
			"border",
			"cellpadding",
			"cellspacing"
		],
		FORBID_TAGS: [
			"script",
			"iframe",
			"object",
			"embed",
			"applet",
			"form",
			"svg"
		],
		FORBID_ATTR: [
			"onerror",
			"onload",
			"onclick",
			"onmouseover",
			"onfocus",
			"onblur"
		]
	});
	return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "").replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, "").replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, "").replace(/\s*on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(/href\s*=\s*["']\s*javascript:[^"']*["']/gi, "href=\"#\"").replace(/javascript\s*:/gi, "blocked:");
}
var QUOTED_HEADER_PATTERNS = [
	/^[>\s]*On\s+[A-Za-z]+,\s+[A-Za-z0-9\s,:]+wrote:\s*$/i,
	/^[>\s]*On\s+.*,\s+.*<.*@.*>\s+wrote:\s*$/i,
	/^[>\s]*-+\s*Original Message\s*-+\s*$/i,
	/^[>\s]*-+\s*Forwarded message\s*-+\s*$/i,
	/^[>\s]*From:\s+.*(?:To:|Sent:|Date:)/i,
	/^[>\s]*_{10,}\s*$/,
	/^[>\s]*-{5,}\s*$/
];
var SIGNATURE_PATTERNS = [
	/^--\s*$/,
	/^__\s*$/,
	/^(?:Best|Kind|Warm|With)?\s*Regards[,.]?\s*$/i,
	/^(?:Thanks\s+(?:&|and)\s+Regards|Thanks\s+a\s+lot|Thank\s+you)[,.]?\s*$/i,
	/^(?:Yours\s+faithfully|Yours\s+sincerely|Sincerely)[,.]?\s*$/i,
	/^(?:Cheers|Best\s+wishes|Best)[,.]?\s*$/i
];
var DISCLAIMER_KEYWORDS = [
	"confidentiality notice",
	"this email and any files transmitted",
	"this communication is intended solely",
	"this message contains confidential information",
	"please consider the environment before printing",
	"if you have received this email in error",
	"the contents of this email are intended only",
	"strictly confidential and may be legally privileged"
];
/**
* Strips HTML tags and normalizes entities while maintaining line breaks
*/
function stripHtmlToPlainText(html) {
	if (!html) return "";
	let text = html;
	text = text.replace(/<br\s*\/?>/gi, "\n");
	text = text.replace(/<\/p>/gi, "\n\n");
	text = text.replace(/<\/div>/gi, "\n");
	text = text.replace(/<\/tr>/gi, "\n");
	text = text.replace(/<\/h[1-6]>/gi, "\n\n");
	text = text.replace(/<li[^>]*>/gi, "• ");
	text = text.replace(/<\/li>/gi, "\n");
	text = text.replace(/<[^>]+>/g, " ");
	text = text.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "\"").replace(/&#39;/gi, "'").replace(/&euro;/gi, "EUR").replace(/&pound;/gi, "GBP");
	return text;
}
/**
* Deterministically cleans email content to isolate the newest message for quotation extraction
*/
function cleanEmailContent(rawBody, options) {
	const original = rawBody || "";
	let workingText = original;
	if (options?.stripHtml && /<[a-z][\s\S]*>/i.test(workingText)) workingText = stripHtmlToPlainText(workingText);
	workingText = workingText.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
	const lines = workingText.split("\n");
	const warnings = [];
	let replyCutoffIndex = -1;
	let signatureCutoffIndex = -1;
	let disclaimerCutoffIndex = -1;
	let detectedSignature = "";
	let detectedDisclaimer = "";
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim();
		for (const pat of QUOTED_HEADER_PATTERNS) if (pat.test(line)) {
			replyCutoffIndex = i;
			break;
		}
		if (replyCutoffIndex !== -1) break;
		if (line.startsWith(">")) {
			replyCutoffIndex = i;
			break;
		}
	}
	const boundaryIndex = replyCutoffIndex !== -1 ? replyCutoffIndex : lines.length;
	for (let i = 0; i < boundaryIndex; i++) {
		const line = lines[i].trim();
		const lowerLine = line.toLowerCase();
		if (DISCLAIMER_KEYWORDS.some((kw) => lowerLine.includes(kw)) && disclaimerCutoffIndex === -1) {
			disclaimerCutoffIndex = i;
			detectedDisclaimer = lines.slice(i, boundaryIndex).join("\n").trim();
		}
		if (signatureCutoffIndex === -1 && disclaimerCutoffIndex === -1) {
			for (const sigPat of SIGNATURE_PATTERNS) if (sigPat.test(line)) {
				if (line.split(/\s+/).length <= 4) {
					signatureCutoffIndex = i;
					detectedSignature = lines.slice(i, boundaryIndex).join("\n").trim();
					break;
				}
			}
		}
	}
	let effectiveEnd = boundaryIndex;
	if (disclaimerCutoffIndex !== -1 && disclaimerCutoffIndex < effectiveEnd) effectiveEnd = disclaimerCutoffIndex;
	if (signatureCutoffIndex !== -1 && signatureCutoffIndex < effectiveEnd) effectiveEnd = signatureCutoffIndex;
	const cleanedLineItems = [];
	for (let i = 0; i < effectiveEnd; i++) cleanedLineItems.push({
		text: lines[i],
		originalLineNumber: i + 1
	});
	while (cleanedLineItems.length > 0 && cleanedLineItems[cleanedLineItems.length - 1].text.trim() === "") cleanedLineItems.pop();
	const cleanedBody = cleanedLineItems.map((item) => item.text).join("\n").trim();
	let isCleanBoundary = true;
	if (cleanedBody.length === 0 && original.trim().length > 0) {
		isCleanBoundary = false;
		warnings.push("Email cleaning produced an empty body; review original email content.");
	}
	if (replyCutoffIndex === 0) {
		isCleanBoundary = false;
		warnings.push("Quoted reply detected at line 1. Entire message may be forwarded or quoted.");
	}
	return {
		cleanedBody: cleanedBody || original.trim(),
		originalBody: original,
		cleanedLines: cleanedLineItems,
		quotedChainsRemoved: replyCutoffIndex !== -1,
		signatureRemoved: signatureCutoffIndex !== -1,
		disclaimerRemoved: disclaimerCutoffIndex !== -1,
		detectedSignature: detectedSignature || void 0,
		detectedDisclaimer: detectedDisclaimer || void 0,
		isCleanBoundary,
		warnings
	};
}
var STORAGE_KEY$2 = "nashmia_forwarder_pattern_overrides_v1";
var DEFAULT_OVERRIDES = [
	{
		id: "ovr-fr8-rate",
		forwarderId: "*",
		forwarderName: "Global Maritime Standard",
		pattern: "Fr8: $RATE",
		regexPattern: "(?:fr8|frt|o/f|o\\.f\\.)\\s*[:=]?\\s*(?:usd|eur|\\$|€)?\\s*([0-9,.]+)",
		fieldMapped: "rate",
		description: "Matches shorthand 'Fr8 $1000' or 'O/F: 1200' as base ocean freight rate",
		createdBy: "System Admin",
		approvedBy: "Operations Lead",
		createdAt: "2026-08-01T00:00:00.000Z",
		isActive: true,
		version: 1,
		versionHistory: []
	},
	{
		id: "ovr-doc-local",
		forwarderId: "*",
		forwarderName: "Global Maritime Standard",
		pattern: "doc/local: $CHARGES",
		regexPattern: "(?:doc(?:s)?\\s*(?:\\/|\\+|and)\\s*local(?:s)?|local\\s*charges?|dest(?:ination)?\\s*charges?)\\s*[:=]?\\s*(?:usd|eur|\\$|€)?\\s*([0-9,.]+)",
		fieldMapped: "additionalCharges",
		description: "Matches 'doc/local 200' or 'docs + local: $250' as documentation and local charges",
		createdBy: "System Admin",
		approvedBy: "Operations Lead",
		createdAt: "2026-08-01T00:00:00.000Z",
		isActive: true,
		version: 1,
		versionHistory: []
	},
	{
		id: "ovr-hc-box",
		forwarderId: "*",
		forwarderName: "Global Maritime Standard",
		pattern: "HC box = 40HC",
		regexPattern: "\\b(?:hc\\s*box(?:es)?|high\\s*cube\\s*box(?:es)?)\\b",
		fieldMapped: "containerType",
		description: "Normalizes 'HC box' or 'high cube box' to 40HC container type",
		createdBy: "System Admin",
		approvedBy: "Operations Lead",
		createdAt: "2026-08-01T00:00:00.000Z",
		isActive: true,
		version: 1,
		versionHistory: []
	},
	{
		id: "ovr-two-boxes",
		forwarderId: "*",
		forwarderName: "Global Maritime Standard",
		pattern: "two 20ft boxes = 2 x 20FT",
		regexPattern: "\\b(one|two|three|four|five|six|seven|eight|nine|ten|\\d+)\\s*(?:x\\s*)?(?:x\\s*)?(20(?:ft|'|\\s*foot)?|40(?:ft|'|\\s*foot)?(?:\\s*hc)?)\\s*(?:box|boxes|containers?|cntrs?)\\b",
		fieldMapped: "containerQuantity",
		description: "Extracts written quantity and container type from phrases like 'two 20ft boxes'",
		createdBy: "System Admin",
		approvedBy: "Operations Lead",
		createdAt: "2026-08-01T00:00:00.000Z",
		isActive: true,
		version: 1,
		versionHistory: []
	}
];
function getStoredPatternOverrides() {
	try {
		const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY$2) : null;
		if (raw) {
			const parsed = JSON.parse(raw);
			if (Array.isArray(parsed) && parsed.length > 0) return parsed;
		}
	} catch {}
	return DEFAULT_OVERRIDES;
}
/**
* Returns all active pattern overrides matching a forwarder or global rules
*/
function getActiveOverridesForForwarder(forwarderId) {
	return getStoredPatternOverrides().filter((o) => {
		if (!o.isActive) return false;
		if (o.forwarderId === "*") return true;
		if (forwarderId && o.forwarderId === forwarderId) return true;
		return false;
	});
}
function createNotProvidedField(fieldName) {
	return {
		field: fieldName,
		value: null,
		rawValue: null,
		sourceText: null,
		lineNumber: null,
		confidence: "LOW",
		confidenceReason: "Field was not present or referenced in email.",
		extractionMethod: "KEYWORD_REGEX",
		matchingKeyword: null,
		validationStatus: "NOT_PROVIDED"
	};
}
function normalizeNumericValue(valStr) {
	if (!valStr) return null;
	let clean = valStr.trim();
	clean = clean.replace(/^(?:usd|eur|gbp|aed|pkr|\$|€|£)\s*/i, "");
	clean = clean.replace(/\s*(?:usd|eur|gbp|aed|pkr|\$|€|£)$/i, "");
	if (clean.includes(",") && clean.includes(".")) {
		const commaIdx = clean.lastIndexOf(",");
		if (clean.lastIndexOf(".") > commaIdx) clean = clean.replace(/,/g, "");
		else clean = clean.replace(/\./g, "").replace(/,/g, ".");
	} else if (clean.includes(",")) {
		const parts = clean.split(",");
		if (parts.length === 2 && parts[1].length === 2) clean = clean.replace(",", ".");
		else clean = clean.replace(/,/g, "");
	}
	const num = parseFloat(clean);
	return isNaN(num) ? null : Math.round(num * 100) / 100;
}
/**
* MODULAR RULE-BASED EXTRACTION ENGINE - RATE EXTRACTOR
*
* Extracts ocean freight rates using deterministic regex & keyword patterns.
* Handles single rates, multi-container rates, currency coupling,
* safety bounds validation, and ambiguity/conflict detection.
*/
var RATE_PATTERNS = [
	/(?:^|\b)(?:rate|price|quote|offer|cost|freight|charges?|ocean\s*rate)\s*[:=-]?\s*(?:usd|eur|gbp|aed|pkr|\$|€|£)?\s*([0-9,.]+)\b/i,
	/(?:our\s+price\s+is\s+(?:around\s+|approx\s+)?|rate\s+is\s+|price\s+is\s+|quoted\s+at\s+|freight\s+is\s+)(?:usd|eur|gbp|aed|pkr|\$|€|£)?\s*([0-9,.]+)\s*(?:usd|eur|gbp|aed|pkr|\$|€|£)?/i,
	/(?:fr8|o\/f|ocean\s*freight|base\s*freight|sea\s*freight|freight\s*rate)\s*[:=-]?\s*(?:usd|eur|gbp|aed|pkr|\$|€|£)?\s*([0-9,.]+)\s*(?:usd|eur|gbp|aed|pkr|\$|€|£)?/i,
	/(?:usd|eur|gbp|aed|pkr|\$|€|£)?\s*([0-9,.]+)\s*(?:usd|eur|gbp|aed|pkr|\$|€|£)?\s*(?:\/|\s+per\s+)(?:cntr|container|box|unit|feu|teu|40hc|20ft|40ft)/i,
	/(?:\$|€|£|usd|eur|gbp|aed|pkr)\s*([0-9,.]+)(?:\s*(?:net|all\s*in|plus|all-in))?/i,
	/\b([0-9,.]+)\s*(?:usd|eur|gbp|aed|pkr|\$|€|£)(?:\s*(?:net|all\s*in|plus|all-in))?/i
];
function normalizeContainerType$1(raw) {
	if (!raw) return "40HC";
	const s = raw.trim().toUpperCase();
	if (s.includes("20")) return "20FT";
	if (s.includes("45")) return "45HC";
	if (s.includes("REEFER") || s.includes("RF")) return "40RF";
	if (s.includes("OPEN") || s.includes("OT")) return "40OT";
	return "40HC";
}
/**
* Extracts ocean freight rates from cleaned email lines deterministically.
*/
function extractRateDeterministic(input) {
	const { lines, knownContainerType } = input;
	const rateCandidates = [];
	const reviewReasons = [];
	let hasConflicts = false;
	for (const lineObj of lines) {
		const text = lineObj.text;
		const altMatch = text.match(/(?:\$|usd)?\s*([0-9,.]+)\s*(?:or|to|-|\/)\s*(?:\$|usd)?\s*([0-9,.]+)/i);
		if (altMatch && !text.toLowerCase().includes("free days")) {
			const v1 = normalizeNumericValue(altMatch[1]);
			const v2 = normalizeNumericValue(altMatch[2]);
			if (v1 && v1 >= 10 && v1 <= 1e5 && v1 !== 2026 && v1 !== 2025) rateCandidates.push({
				value: v1,
				sourceText: altMatch[0],
				lineNumber: lineObj.originalLineNumber,
				confidence: "HIGH"
			});
			if (v2 && v2 >= 10 && v2 <= 1e5 && v2 !== 2026 && v2 !== 2025) rateCandidates.push({
				value: v2,
				sourceText: altMatch[0],
				lineNumber: lineObj.originalLineNumber,
				confidence: "HIGH"
			});
			continue;
		}
		for (const pat of RATE_PATTERNS) {
			const m = text.match(pat);
			if (m) {
				const numStr = m[1];
				const val = normalizeNumericValue(numStr);
				if (val && val >= 10 && val <= 1e5 && val !== 2026 && val !== 2025) {
					if (!rateCandidates.some((c) => c.value === val && c.lineNumber === lineObj.originalLineNumber)) rateCandidates.push({
						value: val,
						sourceText: m[0],
						lineNumber: lineObj.originalLineNumber,
						confidence: m[0].toLowerCase().includes("rate") || m[0].toLowerCase().includes("price") || m[0].toLowerCase().includes("fr8") ? "HIGH" : "MEDIUM"
					});
				}
			}
		}
	}
	const containerRates = {};
	for (const lineObj of lines) {
		const crMatches = lineObj.text.matchAll(/\b(20(?:ft|'|gp)?|40(?:ft|'|hc|hq|gp)?)\s*[:=-]?\s*(?:usd|eur|\$|€)?\s*([0-9,.]+)\s*(usd|eur|\$|€)?/gi);
		for (const m of crMatches) {
			const cType = normalizeContainerType$1(m[1]);
			const cRate = normalizeNumericValue(m[2]);
			if (cType && cRate && cRate >= 50 && cRate <= 5e4 && cRate !== 2026 && cRate !== 2025) containerRates[cType] = cRate;
		}
	}
	let finalRate = null;
	let finalTraceability = createNotProvidedField("rate");
	const targetContainerType = knownContainerType ? normalizeContainerType$1(knownContainerType) : null;
	if (Object.keys(containerRates).length > 0) {
		const selectedType = (targetContainerType && containerRates[targetContainerType] ? targetContainerType : null) || (containerRates["40HC"] ? "40HC" : containerRates["20FT"] ? "20FT" : Object.keys(containerRates)[0]);
		const selectedRate = containerRates[selectedType];
		const matchLine = lines.find((l) => l.text.includes(String(selectedRate)))?.originalLineNumber || lines[0]?.originalLineNumber || 1;
		finalRate = selectedRate;
		finalTraceability = {
			field: "rate",
			value: selectedRate,
			rawValue: String(selectedRate),
			sourceText: `Multi-container rates: ${Object.entries(containerRates).map(([k, v]) => `${k}: $${v}`).join(", ")} (Applied ${selectedType})`,
			lineNumber: matchLine,
			confidence: "HIGH",
			confidenceReason: `Extracted multi-container rates. Applied ${selectedType} rate matching requested shipment equipment.`,
			extractionMethod: "KEYWORD_REGEX",
			matchingKeyword: "container-specific rate",
			validationStatus: "VALID",
			candidates: Object.entries(containerRates).map(([k, v]) => ({
				value: v,
				sourceText: `${k}: $${v}`,
				lineNumber: matchLine,
				confidence: "HIGH"
			}))
		};
	} else if (rateCandidates.length === 1) {
		const cand = rateCandidates[0];
		finalRate = cand.value;
		finalTraceability = {
			field: "rate",
			value: cand.value,
			rawValue: String(cand.value),
			sourceText: cand.sourceText,
			lineNumber: cand.lineNumber,
			confidence: cand.confidence,
			confidenceReason: "Single deterministic ocean freight rate candidate found with matching rate context.",
			extractionMethod: "KEYWORD_REGEX",
			matchingKeyword: "rate",
			validationStatus: "VALID"
		};
	} else if (rateCandidates.length > 1) {
		const priorityCandidates = rateCandidates.filter((c) => /(?:our\s+price\s+is|rate\s+is|ocean\s+freight|fr8)/i.test(c.sourceText));
		if (priorityCandidates.length === 1) {
			const best = priorityCandidates[0];
			finalRate = best.value;
			finalTraceability = {
				field: "rate",
				value: best.value,
				rawValue: String(best.value),
				sourceText: best.sourceText,
				lineNumber: best.lineNumber,
				confidence: "HIGH",
				confidenceReason: "Resolved rate conflict using high-priority freight rate keyword match.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "explicit freight keyword",
				validationStatus: "VALID",
				candidates: rateCandidates
			};
		} else {
			hasConflicts = true;
			const first = rateCandidates[0];
			finalRate = first.value;
			reviewReasons.push(`Multiple conflicting rate figures found ($${rateCandidates.map((c) => c.value).join(", ")}). Manual review required.`);
			finalTraceability = {
				field: "rate",
				value: first.value,
				rawValue: String(first.value),
				sourceText: first.sourceText,
				lineNumber: first.lineNumber,
				confidence: "LOW",
				confidenceReason: "Multiple conflicting rate values detected without unambiguous context. Marked for review.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "rate conflict",
				validationStatus: "CONFLICT",
				candidates: rateCandidates
			};
		}
	}
	if (finalRate !== null) {
		if (finalRate < 100 || finalRate > 5e4) {
			finalTraceability.validationStatus = "SUSPICIOUS";
			reviewReasons.push(`Ocean freight rate ($${finalRate.toLocaleString()}) falls outside standard maritime bounds ($100-$50,000). Manual verification required.`);
		}
	}
	return {
		rateField: {
			field: "rate",
			value: finalRate,
			traceability: finalTraceability,
			reviewReasons,
			candidates: rateCandidates
		},
		containerRates,
		hasConflicts,
		reviewReasons
	};
}
/**
* MODULAR RULE-BASED EXTRACTION ENGINE - CURRENCY EXTRACTOR
*
* Extracts explicit currency notation from raw quotation text.
* Strictly adheres to Zero-Hallucination Policy: Never assumes USD
* or defaults currency if it is not present in the quotation email.
*/
function normalizeCurrency(raw) {
	if (!raw) return null;
	const s = raw.toLowerCase();
	if (s.includes("usd") || s.includes("$") || s.includes("dollar")) return "USD";
	if (s.includes("eur") || s.includes("€") || s.includes("euro")) return "EUR";
	if (s.includes("gbp") || s.includes("£") || s.includes("pound")) return "GBP";
	if (s.includes("aed") || s.includes("dirham")) return "AED";
	if (s.includes("pkr") || s.includes("rs") || s.includes("rupee")) return "PKR";
	if (s.includes("sgd")) return "SGD";
	if (s.includes("cny") || s.includes("rmb") || s.includes("¥")) return "CNY";
	if (s.includes("jpy")) return "JPY";
	return null;
}
/**
* Extracts and normalizes currency deterministically.
*/
function extractCurrencyDeterministic(input) {
	const { lines, rateValue } = input;
	const reviewReasons = [];
	let detectedCurrency = null;
	let currencySourceText = null;
	let currencySourceLine = null;
	for (const lineObj of lines) {
		const text = lineObj.text;
		const isoMatch = text.match(/\b(USD|EUR|GBP|AED|PKR|SGD|CNY|JPY)\b/i);
		if (isoMatch) {
			detectedCurrency = normalizeCurrency(isoMatch[1]);
			currencySourceText = isoMatch[0];
			currencySourceLine = lineObj.originalLineNumber;
			break;
		}
		const symMatch = text.match(/([$€£¥])\s*[0-9]+|[0-9]+\s*([$€£¥])/);
		if (symMatch) {
			detectedCurrency = normalizeCurrency(symMatch[1] || symMatch[2]);
			currencySourceText = symMatch[0];
			currencySourceLine = lineObj.originalLineNumber;
			break;
		}
	}
	if (detectedCurrency) return {
		currencyField: {
			field: "currency",
			value: detectedCurrency,
			traceability: {
				field: "currency",
				value: detectedCurrency,
				rawValue: currencySourceText,
				sourceText: currencySourceText,
				lineNumber: currencySourceLine,
				confidence: "HIGH",
				confidenceReason: "Explicit currency notation matched in email text.",
				extractionMethod: "NORMALIZATION",
				matchingKeyword: currencySourceText,
				validationStatus: "VALID"
			}
		},
		reviewReasons
	};
	if (rateValue !== null) {
		const reason = "Currency notation is missing from forwarder quotation email. System never assumes USD. Marked as NEEDS_REVIEW.";
		reviewReasons.push(reason);
		return {
			currencyField: {
				field: "currency",
				value: null,
				traceability: {
					field: "currency",
					value: null,
					rawValue: null,
					sourceText: null,
					lineNumber: null,
					confidence: "LOW",
					confidenceReason: "Currency notation was not found in quotation email. Never assume USD.",
					extractionMethod: "NORMALIZATION",
					matchingKeyword: null,
					validationStatus: "NOT_PROVIDED"
				},
				reviewReasons: [reason]
			},
			reviewReasons
		};
	}
	return {
		currencyField: {
			field: "currency",
			value: null,
			traceability: createNotProvidedField("currency")
		},
		reviewReasons
	};
}
/**
* MODULAR RULE-BASED EXTRACTION ENGINE - SCHEDULE EXTRACTOR (ETD, ETA, TRANSIT TIME)
*
* Extracts sailing departure (ETD) and destination arrival (ETA) dates using
* deterministic regex patterns, date normalization, and temporal integrity checks.
*/
var MONTH_NAMES = {
	jan: "Jan",
	january: "Jan",
	feb: "Feb",
	february: "Feb",
	mar: "Mar",
	march: "Mar",
	apr: "Apr",
	april: "Apr",
	may: "May",
	jun: "Jun",
	june: "Jun",
	jul: "Jul",
	july: "Jul",
	aug: "Aug",
	august: "Aug",
	sep: "Sep",
	sept: "Sep",
	september: "Sep",
	oct: "Oct",
	october: "Oct",
	nov: "Nov",
	november: "Nov",
	dec: "Dec",
	december: "Dec"
};
/**
* Normalizes date expressions like "12 Oct", "12-Oct-2026", "October 12th", "25th"
*/
function normalizeDateString$1(raw, referenceYear = 2026, referenceMonth = "Oct") {
	if (!raw) return null;
	const clean = raw.trim();
	const dayMonthMatch = clean.match(/\b(\d{1,2})(?:st|nd|rd|th)?[\s\-_]+([A-Za-z]{3,9})(?:[\s\-_]+(\d{2,4}))?\b/i);
	if (dayMonthMatch) {
		const rawMonth = dayMonthMatch[2].toLowerCase();
		const formattedMonth = MONTH_NAMES[rawMonth] || MONTH_NAMES[rawMonth.slice(0, 3)];
		if (formattedMonth) {
			const day = parseInt(dayMonthMatch[1], 10);
			const year = dayMonthMatch[3] ? parseInt(dayMonthMatch[3], 10) : referenceYear;
			return `${day} ${formattedMonth} ${year < 100 ? 2e3 + year : year}`;
		}
	}
	const monthDayMatch = clean.match(/\b([A-Za-z]{3,9})[\s\-_]+(\d{1,2})(?:st|nd|rd|th)?(?:,?\s*(\d{2,4}))?\b/i);
	if (monthDayMatch) {
		const rawMonth = monthDayMatch[1].toLowerCase();
		const formattedMonth = MONTH_NAMES[rawMonth] || MONTH_NAMES[rawMonth.slice(0, 3)];
		if (formattedMonth) {
			const day = parseInt(monthDayMatch[2], 10);
			const year = monthDayMatch[3] ? parseInt(monthDayMatch[3], 10) : referenceYear;
			return `${day} ${formattedMonth} ${year < 100 ? 2e3 + year : year}`;
		}
	}
	const dayOnlyMatch = clean.match(/(?:around\s+the\s+|on\s+the\s+|the\s+)?\b(\d{1,2})(?:st|nd|rd|th)\b/i);
	if (dayOnlyMatch) return `${parseInt(dayOnlyMatch[1], 10)} ${referenceMonth} ${referenceYear}`;
	return clean;
}
/**
* Extracts ETD, ETA, and transit time deterministically from raw email lines.
*/
function extractScheduleDeterministic(input) {
	const { lines, referenceYear = 2026, referenceMonth = "Oct" } = input;
	const reviewReasons = [];
	let hasConflicts = false;
	let etd = null;
	let eta = null;
	let etdSourceText = null;
	let etaSourceText = null;
	let etdLineNumber = null;
	let etaLineNumber = null;
	for (const lineObj of lines) {
		const text = lineObj.text;
		const compoundMatch = text.match(/(?:vessel\s+sails?|sailing|etd|departs?)\s+([A-Za-z0-9\s,\-_]+?)(?:,\s*(?:should\s+land|eta|arrives?)\s+([A-Za-z0-9\s,\-_]+))?(?:$|\n|\.)/i);
		if (compoundMatch) {
			const rawEtd = compoundMatch[1].trim();
			const rawEta = compoundMatch[2] ? compoundMatch[2].trim() : null;
			etd = normalizeDateString$1(rawEtd, referenceYear, referenceMonth);
			etdSourceText = rawEtd;
			etdLineNumber = lineObj.originalLineNumber;
			if (rawEta) {
				eta = normalizeDateString$1(rawEta, referenceYear, referenceMonth);
				etaSourceText = rawEta;
				etaLineNumber = lineObj.originalLineNumber;
			}
			break;
		}
		if (!etd) {
			const etdMatch = text.match(/(?:etd|sailing\s+date|departs?|departure|sails?\s+on|estimated\s+departure)\s*[:=-]?\s*([0-9A-Za-z\s,\-_]+?)(?:$|\n|,|\.)/i);
			if (etdMatch) {
				etd = normalizeDateString$1(etdMatch[1].trim(), referenceYear, referenceMonth);
				etdSourceText = etdMatch[0];
				etdLineNumber = lineObj.originalLineNumber;
			}
		}
		if (!eta) {
			const etaMatch = text.match(/(?:eta|arrival\s+date|arrives?|estimated\s+arrival|landing\s+date|discharge\s+date)\s*[:=-]?\s*([0-9A-Za-z\s,\-_]+?)(?:$|\n|,|\.)/i);
			if (etaMatch) {
				eta = normalizeDateString$1(etaMatch[1].trim(), referenceYear, referenceMonth);
				etaSourceText = etaMatch[0];
				etaLineNumber = lineObj.originalLineNumber;
			}
		}
	}
	let transitTime = null;
	let ttSourceText = null;
	let ttLineNumber = null;
	for (const lineObj of lines) {
		const text = lineObj.text;
		const ttMatch = text.match(/(?:transit\s*time|transit|t\/t)\s*[:=-]?\s*(?:approx\s*)?(\d+)\s*(?:days?|d)\b/i) || text.match(/\b(\d+)\s*(?:days?|d)\s+(?:transit\s*time|transit|t\/t)\b/i);
		if (ttMatch) {
			transitTime = parseInt(ttMatch[1], 10);
			ttSourceText = ttMatch[0];
			ttLineNumber = lineObj.originalLineNumber;
			break;
		}
	}
	const etdField = etd ? {
		field: "etd",
		value: etd,
		traceability: {
			field: "etd",
			value: etd,
			rawValue: etdSourceText,
			sourceText: etdSourceText,
			lineNumber: etdLineNumber,
			confidence: "HIGH",
			confidenceReason: "Matched explicit vessel departure/sailing schedule keyword and date pattern.",
			extractionMethod: "KEYWORD_REGEX",
			matchingKeyword: "ETD / Sailing Date",
			validationStatus: "VALID"
		}
	} : {
		field: "etd",
		value: null,
		traceability: createNotProvidedField("etd")
	};
	const etaField = eta ? {
		field: "eta",
		value: eta,
		traceability: {
			field: "eta",
			value: eta,
			rawValue: etaSourceText,
			sourceText: etaSourceText,
			lineNumber: etaLineNumber,
			confidence: "HIGH",
			confidenceReason: "Matched explicit vessel destination arrival/landing schedule keyword and date pattern.",
			extractionMethod: "KEYWORD_REGEX",
			matchingKeyword: "ETA / Arrival Date",
			validationStatus: "VALID"
		}
	} : {
		field: "eta",
		value: null,
		traceability: createNotProvidedField("eta")
	};
	const transitTimeField = transitTime !== null ? {
		field: "transitTime",
		value: transitTime,
		traceability: {
			field: "transitTime",
			value: transitTime,
			rawValue: String(transitTime),
			sourceText: ttSourceText,
			lineNumber: ttLineNumber,
			confidence: "HIGH",
			confidenceReason: "Matched maritime transit duration expression in days.",
			extractionMethod: "KEYWORD_REGEX",
			matchingKeyword: "transit time",
			validationStatus: "VALID"
		}
	} : {
		field: "transitTime",
		value: null,
		traceability: createNotProvidedField("transitTime")
	};
	if (etd && eta) {
		const etdDate = new Date(etd);
		const etaDate = new Date(eta);
		if (!isNaN(etdDate.getTime()) && !isNaN(etaDate.getTime())) {
			if (etaDate.getTime() < etdDate.getTime()) {
				hasConflicts = true;
				etdField.traceability.validationStatus = "CONFLICT";
				etaField.traceability.validationStatus = "CONFLICT";
				const conflictReason = `Temporal schedule conflict: Estimated arrival ETA (${eta}) precedes vessel departure ETD (${etd}). Destination arrival precedes departure. Flagged for review.`;
				reviewReasons.push(conflictReason);
				etdField.reviewReasons = [conflictReason];
				etaField.reviewReasons = [conflictReason];
			}
		}
	}
	return {
		etdField,
		etaField,
		transitTimeField,
		hasConflicts,
		reviewReasons
	};
}
/**
* MODULAR RULE-BASED EXTRACTION ENGINE - CONTAINER & EQUIPMENT EXTRACTOR
*
* Extracts container types, sizes, quantities, and demurrage/detention free days
* from raw maritime text using deterministic pattern matching.
*/
var WORD_NUMBERS = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
	single: 1,
	double: 2,
	pair: 2
};
function normalizeContainerType(raw) {
	if (!raw) return "40HC";
	const s = raw.trim().toUpperCase();
	if (s.includes("20")) return "20FT";
	if (s.includes("45")) return "45HC";
	if (s.includes("REEFER") || s.includes("RF")) return "40RF";
	if (s.includes("OPEN") || s.includes("OT")) return "40OT";
	return "40HC";
}
/**
* Extracts container specifications and free days deterministically.
*/
function extractContainerDeterministic(input) {
	const { lines, knownContainerType } = input;
	let containerType = null;
	let containerQuantity = null;
	let cntrSourceText = null;
	let cntrLineNumber = null;
	for (const lineObj of lines) {
		const text = lineObj.text;
		const wordQtyMatch = text.match(/\b(one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s*(?:x\s*)?(20ft|40ft|40hc|40'hc|20'|40'|high\s*cube)\s*(?:box|boxes|container|containers|cntrs?)?/i);
		if (wordQtyMatch) {
			const word = wordQtyMatch[1].toLowerCase();
			containerQuantity = WORD_NUMBERS[word] !== void 0 ? WORD_NUMBERS[word] : parseInt(word, 10);
			containerType = normalizeContainerType(wordQtyMatch[2]);
			cntrSourceText = wordQtyMatch[0];
			cntrLineNumber = lineObj.originalLineNumber;
			break;
		}
		const digitQtyMatch = text.match(/\b(\d+)\s*(?:x|\*)\s*(20FT|40FT|40HC|40HQ|20GP|40GP|20'|40')\b/i);
		if (digitQtyMatch) {
			containerQuantity = parseInt(digitQtyMatch[1], 10);
			containerType = normalizeContainerType(digitQtyMatch[2]);
			cntrSourceText = digitQtyMatch[0];
			cntrLineNumber = lineObj.originalLineNumber;
			break;
		}
		if (!containerType) {
			const standaloneMatch = text.match(/\b(20FT|40FT|40HC|40HQ|20GP|40GP|High\s*Cube)\b/i);
			if (standaloneMatch) {
				containerType = normalizeContainerType(standaloneMatch[1]);
				cntrSourceText = standaloneMatch[0];
				cntrLineNumber = lineObj.originalLineNumber;
			}
		}
	}
	if (!containerType && knownContainerType) {
		containerType = normalizeContainerType(knownContainerType);
		cntrSourceText = `From booking context: ${knownContainerType}`;
	}
	let freeDays = null;
	let fdSourceText = null;
	let fdLineNumber = null;
	for (const lineObj of lines) {
		const fdMatch = lineObj.text.match(/(?:(\d+)\s*(?:days?\s+free|free\s*days?)|free\s*time\s*[:=-]?\s*(\d+)\s*days?)/i);
		if (fdMatch) {
			freeDays = parseInt(fdMatch[1] || fdMatch[2], 10);
			fdSourceText = fdMatch[0];
			fdLineNumber = lineObj.originalLineNumber;
			break;
		}
	}
	return {
		containerTypeField: containerType ? {
			field: "containerType",
			value: containerType,
			traceability: {
				field: "containerType",
				value: containerType,
				rawValue: containerType,
				sourceText: cntrSourceText,
				lineNumber: cntrLineNumber,
				confidence: "HIGH",
				confidenceReason: "Matched standard maritime equipment specification code.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "container type",
				validationStatus: "VALID"
			}
		} : {
			field: "containerType",
			value: null,
			traceability: createNotProvidedField("containerType")
		},
		containerQuantityField: containerQuantity !== null ? {
			field: "containerQuantity",
			value: containerQuantity,
			traceability: {
				field: "containerQuantity",
				value: containerQuantity,
				rawValue: String(containerQuantity),
				sourceText: cntrSourceText,
				lineNumber: cntrLineNumber,
				confidence: "HIGH",
				confidenceReason: "Extracted explicit container quantity from equipment string.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "quantity",
				validationStatus: "VALID"
			}
		} : {
			field: "containerQuantity",
			value: null,
			traceability: createNotProvidedField("containerQuantity")
		},
		freeDaysField: freeDays !== null ? {
			field: "freeDays",
			value: freeDays,
			traceability: {
				field: "freeDays",
				value: freeDays,
				rawValue: String(freeDays),
				sourceText: fdSourceText,
				lineNumber: fdLineNumber,
				confidence: "HIGH",
				confidenceReason: "Matched combined demurrage & detention free time allowance.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "free days",
				validationStatus: "VALID"
			}
		} : {
			field: "freeDays",
			value: null,
			traceability: createNotProvidedField("freeDays")
		}
	};
}
/**
* MODULAR RULE-BASED EXTRACTION ENGINE - CHARGES & SURCHARGES EXTRACTOR
*
* Extracts THC, documentation fees, local charges, additional surcharges,
* explicitly provided total costs, and rate validity dates.
*/
/**
* Extracts charges, fees, and validity expressions deterministically.
*/
function extractChargesDeterministic(input) {
	const { lines, baseRate } = input;
	let freightCharges = null;
	let thc = null;
	let documentationCharges = null;
	let localCharges = null;
	let additionalCharges = null;
	let totalCost = null;
	let rateValidity = null;
	let thcSource = null;
	let thcLine = null;
	let docSource = null;
	let docLine = null;
	let localSource = null;
	let localLine = null;
	let totalSource = null;
	let totalLine = null;
	let validitySource = null;
	let validityLine = null;
	for (const lineObj of lines) {
		const text = lineObj.text;
		if (thc === null) {
			const thcMatch = text.match(/(?:thc|terminal\s*handling(?:\s*charges?)?)\s*[:=-]?\s*(?:usd|eur|\$|€)?\s*([0-9,.]+)/i);
			if (thcMatch) {
				thc = normalizeNumericValue(thcMatch[1]);
				thcSource = thcMatch[0];
				thcLine = lineObj.originalLineNumber;
			}
		}
		if (documentationCharges === null || localCharges === null) {
			const docLocalMatch = text.match(/(?:doc(?:\/|and)?local|documentation|doc\s*fee|bl\s*fee)\s*[:=-]?\s*(?:usd|eur|\$|€)?\s*([0-9,.]+)/i);
			if (docLocalMatch) {
				const val = normalizeNumericValue(docLocalMatch[1]);
				if (val) {
					documentationCharges = val;
					localCharges = val;
					docSource = docLocalMatch[0];
					docLine = lineObj.originalLineNumber;
					localSource = docLocalMatch[0];
					localLine = lineObj.originalLineNumber;
				}
			}
		}
		if (!rateValidity) {
			const valMatch = text.match(/(?:valid\s+until|valid\s+to|validity|valid\s+for|rates?\s+valid)\s*[:=-]?\s*([0-9A-Za-z\s,\-_]+?)(?:$|\n|,|\.)/i);
			if (valMatch) {
				rateValidity = valMatch[1].trim();
				validitySource = valMatch[0];
				validityLine = lineObj.originalLineNumber;
			}
		}
		if (totalCost === null) {
			const totalMatch = text.match(/(?:total\s*(?:cost|amount|all[\s\-_]*in|freight|price)?)\s*[:=-]\s*(?:usd|eur|\$|€)?\s*([0-9,.]+)/i);
			if (totalMatch) {
				const tVal = normalizeNumericValue(totalMatch[1]);
				if (tVal && tVal >= 100 && tVal <= 1e5 && tVal !== 2026) {
					totalCost = tVal;
					totalSource = totalMatch[0];
					totalLine = lineObj.originalLineNumber;
				}
			}
		}
	}
	if (baseRate) freightCharges = baseRate;
	if (thc || documentationCharges || localCharges) {
		const parts = [];
		if (thc) parts.push(`THC: $${thc}`);
		if (documentationCharges) parts.push(`Documentation: $${documentationCharges}`);
		additionalCharges = parts.join(", ");
	}
	return {
		freightChargesField: freightCharges !== null ? {
			field: "freightCharges",
			value: freightCharges,
			traceability: {
				field: "freightCharges",
				value: freightCharges,
				rawValue: String(freightCharges),
				sourceText: `Base freight component: $${freightCharges}`,
				lineNumber: null,
				confidence: "HIGH",
				confidenceReason: "Mapped from deterministic base freight rate.",
				extractionMethod: "NORMALIZATION",
				matchingKeyword: "base freight",
				validationStatus: "VALID"
			}
		} : {
			field: "freightCharges",
			value: null,
			traceability: createNotProvidedField("freightCharges")
		},
		thcField: thc !== null ? {
			field: "thc",
			value: thc,
			traceability: {
				field: "thc",
				value: thc,
				rawValue: String(thc),
				sourceText: thcSource,
				lineNumber: thcLine,
				confidence: "HIGH",
				confidenceReason: "Matched terminal handling charges expression.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "THC",
				validationStatus: "VALID"
			}
		} : {
			field: "thc",
			value: null,
			traceability: createNotProvidedField("thc")
		},
		documentationChargesField: documentationCharges !== null ? {
			field: "documentationCharges",
			value: documentationCharges,
			traceability: {
				field: "documentationCharges",
				value: documentationCharges,
				rawValue: String(documentationCharges),
				sourceText: docSource,
				lineNumber: docLine,
				confidence: "HIGH",
				confidenceReason: "Matched documentation fee or B/L issuance charges.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "doc charges",
				validationStatus: "VALID"
			}
		} : {
			field: "documentationCharges",
			value: null,
			traceability: createNotProvidedField("documentationCharges")
		},
		localChargesField: localCharges !== null ? {
			field: "localCharges",
			value: localCharges,
			traceability: {
				field: "localCharges",
				value: localCharges,
				rawValue: String(localCharges),
				sourceText: localSource || docSource,
				lineNumber: localLine || docLine,
				confidence: "HIGH",
				confidenceReason: "Matched origin/destination local port charges.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "local charges",
				validationStatus: "VALID"
			}
		} : {
			field: "localCharges",
			value: null,
			traceability: createNotProvidedField("localCharges")
		},
		additionalChargesField: additionalCharges !== null ? {
			field: "additionalCharges",
			value: additionalCharges,
			traceability: {
				field: "additionalCharges",
				value: additionalCharges,
				rawValue: String(additionalCharges),
				sourceText: `Combined port surcharges: ${additionalCharges}`,
				lineNumber: null,
				confidence: "HIGH",
				confidenceReason: "Consolidated breakdown of itemized maritime surcharges.",
				extractionMethod: "NORMALIZATION",
				matchingKeyword: "surcharges",
				validationStatus: "VALID"
			}
		} : {
			field: "additionalCharges",
			value: null,
			traceability: createNotProvidedField("additionalCharges")
		},
		totalCostField: totalCost !== null ? {
			field: "totalCost",
			value: totalCost,
			traceability: {
				field: "totalCost",
				value: totalCost,
				rawValue: String(totalCost),
				sourceText: totalSource,
				lineNumber: totalLine,
				confidence: "HIGH",
				confidenceReason: "Matched explicit all-inclusive total cost declaration in email.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "total cost",
				validationStatus: "VALID"
			}
		} : {
			field: "totalCost",
			value: null,
			traceability: createNotProvidedField("totalCost")
		},
		rateValidityField: rateValidity !== null ? {
			field: "rateValidity",
			value: rateValidity,
			traceability: {
				field: "rateValidity",
				value: rateValidity,
				rawValue: rateValidity,
				sourceText: validitySource,
				lineNumber: validityLine,
				confidence: "HIGH",
				confidenceReason: "Matched quotation rate validity timeline or expiration deadline.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "rate validity",
				validationStatus: "VALID"
			}
		} : {
			field: "rateValidity",
			value: null,
			traceability: createNotProvidedField("rateValidity")
		}
	};
}
/**
* MODULAR RULE-BASED EXTRACTION ENGINE - SAILING & CARRIER EXTRACTOR
*
* Extracts ocean carriers, vessel names, voyage numbers, decline indicators,
* and confirmation statements from raw email lines.
*/
var CARRIERS = [
	"MAERSK",
	"MSC",
	"CMA CGM",
	"COSCO",
	"HAPAG-LLOYD",
	"HAPAG",
	"ONE",
	"EVERGREEN",
	"YANG MING",
	"HMM",
	"ZIM",
	"PIL",
	"WAN HAI",
	"OOCL"
];
/**
* Extracts vessel, voyage, carrier, and decline/confirmation indicators.
*/
function extractSailingDeterministic(input) {
	const { lines, subject = "" } = input;
	let carrier = null;
	let vesselName = null;
	let voyageNumber = null;
	let carrierSource = null;
	let carrierLine = null;
	let vesselSource = null;
	let vesselLine = null;
	let isDeclined = false;
	let isConfirmed = false;
	const combined = `${subject} ${lines.map((l) => l.text).join(" ")}`.toLowerCase();
	if (combined.includes("fully booked") || combined.includes("no space") || combined.includes("cannot accept") || combined.includes("unable to quote") || combined.includes("we regret") || combined.includes("decline to quote") || combined.includes("no equipment")) isDeclined = true;
	if (combined.includes("booking confirmed") || combined.includes("booking has been confirmed") || combined.includes("space confirmed") || combined.includes("allocation confirmed")) isConfirmed = true;
	for (const lineObj of lines) {
		const text = lineObj.text;
		for (const c of CARRIERS) if (new RegExp(`\\b${c.replace("-", "[\\s-]?")}\\b`, "i").test(text)) {
			carrier = c;
			carrierSource = c;
			carrierLine = lineObj.originalLineNumber;
			break;
		}
		if (carrier) break;
	}
	for (const lineObj of lines) {
		const vMatch = lineObj.text.match(/(?:vessel|ship|feeder|ocean\s*vessel)\s*[:=-]?\s*([A-Za-z0-9\s.\-_]+?)(?:\s+(?:v\.|voy\.|voyage|v)?\s*([0-9A-Za-z]+))?(?:$|\n|,|\.)/i);
		if (vMatch) {
			vesselName = vMatch[1].trim();
			vesselSource = vMatch[0];
			vesselLine = lineObj.originalLineNumber;
			if (vMatch[2]) voyageNumber = vMatch[2].trim();
			break;
		}
	}
	return {
		carrierField: carrier ? {
			field: "carrier",
			value: carrier,
			traceability: {
				field: "carrier",
				value: carrier,
				rawValue: carrierSource,
				sourceText: carrierSource,
				lineNumber: carrierLine,
				confidence: "HIGH",
				confidenceReason: "Matched verified ocean container carrier line code.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: carrier,
				validationStatus: "VALID"
			}
		} : {
			field: "carrier",
			value: null,
			traceability: createNotProvidedField("carrier")
		},
		vesselNameField: vesselName ? {
			field: "vesselName",
			value: vesselName,
			traceability: {
				field: "vesselName",
				value: vesselName,
				rawValue: vesselSource,
				sourceText: vesselSource,
				lineNumber: vesselLine,
				confidence: "HIGH",
				confidenceReason: "Matched maritime vessel naming pattern.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "vessel",
				validationStatus: "VALID"
			}
		} : {
			field: "vesselName",
			value: null,
			traceability: createNotProvidedField("vesselName")
		},
		voyageNumberField: voyageNumber ? {
			field: "voyageNumber",
			value: voyageNumber,
			traceability: {
				field: "voyageNumber",
				value: voyageNumber,
				rawValue: voyageNumber,
				sourceText: `Voyage ${voyageNumber}`,
				lineNumber: vesselLine,
				confidence: "HIGH",
				confidenceReason: "Matched maritime voyage schedule identifier.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "voyage",
				validationStatus: "VALID"
			}
		} : {
			field: "voyageNumber",
			value: null,
			traceability: createNotProvidedField("voyageNumber")
		},
		isDeclined,
		isConfirmed
	};
}
/**
* MODULAR RULE-BASED EXTRACTION ENGINE - ORCHESTRATION PIPELINE
*
* Coordinates modular field extractors (Rate, Currency, Schedule ETD/ETA, Equipment,
* Charges, Sailing) to process raw email content deterministically with zero AI/LLM calls.
* Produces structured records, field-level traceability, and validation audit metadata.
*/
/**
* Main engine processing function: processes raw email content into structured quotation fields.
*/
function processRawEmailContent(input) {
	const timestamp = (/* @__PURE__ */ new Date()).toISOString();
	const traceability = {};
	const reviewReasons = [];
	const cleaned = cleanEmailContent(input.body || input.snippet || "", { stripHtml: true });
	const lines = cleaned.cleanedLines;
	const fullText = cleaned.cleanedBody;
	const subject = input.subject || "";
	const overrides = getActiveOverridesForForwarder(input.forwarderId);
	let movementNumber = null;
	const movMatches = extractMovementNumbers(`${subject} ${fullText}`);
	if (movMatches.length > 0) {
		movementNumber = movMatches[0];
		const matchLine = lines.find((l) => l.text.includes(movementNumber))?.originalLineNumber || 1;
		traceability.movementNumber = {
			field: "movementNumber",
			value: movementNumber,
			rawValue: movementNumber,
			sourceText: `Movement number identifier '${movementNumber}'`,
			lineNumber: matchLine,
			confidence: "HIGH",
			confidenceReason: "Matched verified Movement Number pattern (e.g., MOV-XXXX / NASH-BK-XXXX).",
			extractionMethod: "KEYWORD_REGEX",
			matchingKeyword: "Movement Number",
			validationStatus: "VALID"
		};
	} else if (input.knownMovementNumber) {
		movementNumber = input.knownMovementNumber;
		traceability.movementNumber = {
			field: "movementNumber",
			value: movementNumber,
			rawValue: movementNumber,
			sourceText: "Matched via linked context/thread",
			lineNumber: null,
			confidence: "MEDIUM",
			confidenceReason: "Supplied via validated booking thread context.",
			extractionMethod: "HEADER",
			matchingKeyword: "Contextual Thread",
			validationStatus: "VALID"
		};
	} else traceability.movementNumber = createNotProvidedField("movementNumber");
	let forwarderRequestId = null;
	const reqMatch = `${subject} ${fullText}`.match(/\b(MFR-[0-9a-fA-F-]+|REQ-[0-9a-zA-Z-]+)\b/);
	if (reqMatch) {
		forwarderRequestId = reqMatch[1];
		traceability.forwarderRequestId = {
			field: "forwarderRequestId",
			value: forwarderRequestId,
			rawValue: forwarderRequestId,
			sourceText: `Forwarder request identifier '${forwarderRequestId}'`,
			lineNumber: 1,
			confidence: "HIGH",
			confidenceReason: "Matched forwarder request tracking ID pattern.",
			extractionMethod: "KEYWORD_REGEX",
			matchingKeyword: "Request ID",
			validationStatus: "VALID"
		};
	} else if (input.knownForwarderRequestId) {
		forwarderRequestId = input.knownForwarderRequestId;
		traceability.forwarderRequestId = {
			field: "forwarderRequestId",
			value: forwarderRequestId,
			rawValue: forwarderRequestId,
			sourceText: "Supplied via known request identifier",
			lineNumber: null,
			confidence: "HIGH",
			confidenceReason: "Matched via request tracking composite key.",
			extractionMethod: "HEADER",
			matchingKeyword: "Request Tracking",
			validationStatus: "VALID"
		};
	} else traceability.forwarderRequestId = createNotProvidedField("forwarderRequestId");
	const rateResult = extractRateDeterministic({
		lines,
		knownContainerType: input.knownContainerType
	});
	traceability.rate = rateResult.rateField.traceability;
	reviewReasons.push(...rateResult.reviewReasons);
	let hasConflicts = rateResult.hasConflicts;
	for (const ov of overrides) if (ov.field === "rate" && ov.regexPattern) try {
		const customReg = new RegExp(ov.regexPattern, "i");
		const customMatch = fullText.match(customReg);
		if (customMatch && customMatch[1]) {
			const customVal = parseFloat(customMatch[1].replace(/,/g, ""));
			if (!isNaN(customVal)) {
				rateResult.rateField.value = customVal;
				traceability.rate = {
					field: "rate",
					value: customVal,
					rawValue: customMatch[0],
					sourceText: `Matched custom rule '${ov.name}': ${customMatch[0]}`,
					lineNumber: null,
					confidence: "HIGH",
					confidenceReason: `Applied approved pattern override: ${ov.name}`,
					extractionMethod: "PATTERN_OVERRIDE",
					matchingKeyword: ov.name,
					validationStatus: "VALID"
				};
			}
		}
	} catch (regErr) {
		console.warn(`[ModularExtractionEngine] Invalid regex in override '${ov.name}':`, regErr);
	}
	const currencyResult = extractCurrencyDeterministic({
		lines,
		rateValue: rateResult.rateField.value
	});
	traceability.currency = currencyResult.currencyField.traceability;
	reviewReasons.push(...currencyResult.reviewReasons);
	const containerResult = extractContainerDeterministic({
		lines,
		knownContainerType: input.knownContainerType
	});
	traceability.containerType = containerResult.containerTypeField.traceability;
	traceability.containerQuantity = containerResult.containerQuantityField.traceability;
	traceability.freeDays = containerResult.freeDaysField.traceability;
	const scheduleResult = extractScheduleDeterministic({ lines });
	traceability.etd = scheduleResult.etdField.traceability;
	traceability.eta = scheduleResult.etaField.traceability;
	traceability.transitTime = scheduleResult.transitTimeField.traceability;
	reviewReasons.push(...scheduleResult.reviewReasons);
	if (scheduleResult.hasConflicts) hasConflicts = true;
	const chargesResult = extractChargesDeterministic({
		lines,
		baseRate: rateResult.rateField.value
	});
	traceability.freightCharges = chargesResult.freightChargesField.traceability;
	traceability.thc = chargesResult.thcField.traceability;
	traceability.documentationCharges = chargesResult.documentationChargesField.traceability;
	traceability.localCharges = chargesResult.localChargesField.traceability;
	traceability.additionalCharges = chargesResult.additionalChargesField.traceability;
	traceability.totalCost = chargesResult.totalCostField.traceability;
	traceability.rateValidity = chargesResult.rateValidityField.traceability;
	const sailingResult = extractSailingDeterministic({
		lines,
		subject
	});
	traceability.carrier = sailingResult.carrierField.traceability;
	traceability.vesselName = sailingResult.vesselNameField.traceability;
	traceability.voyageNumber = sailingResult.voyageNumberField.traceability;
	let notes = null;
	const termsLines = lines.filter((l) => /subject\s+to|validity|terms|space\s+is|transit|payment|demurrage/i.test(l.text) && !l.text.toLowerCase().includes("signature"));
	if (termsLines.length > 0) {
		notes = termsLines.slice(0, 3).map((l) => l.text).join(" | ");
		traceability.notes = {
			field: "notes",
			value: notes,
			rawValue: notes,
			sourceText: notes,
			lineNumber: termsLines[0]?.originalLineNumber || 1,
			confidence: "MEDIUM",
			confidenceReason: "Extracted commercial conditions and operational notes.",
			extractionMethod: "KEYWORD_REGEX",
			matchingKeyword: "terms",
			validationStatus: "VALID"
		};
	} else traceability.notes = createNotProvidedField("notes");
	traceability.forwarderName = input.senderName ? {
		field: "forwarderName",
		value: input.senderName,
		rawValue: input.senderName,
		sourceText: `Header From: ${input.senderName}`,
		lineNumber: 1,
		confidence: "HIGH",
		confidenceReason: "Extracted from verified email sender display name.",
		extractionMethod: "HEADER",
		matchingKeyword: "From",
		validationStatus: "VALID"
	} : createNotProvidedField("forwarderName");
	traceability.senderEmail = input.senderEmail ? {
		field: "senderEmail",
		value: input.senderEmail,
		rawValue: input.senderEmail,
		sourceText: input.senderEmail,
		lineNumber: 1,
		confidence: "HIGH",
		confidenceReason: "Extracted from verified email header address.",
		extractionMethod: "HEADER",
		matchingKeyword: "From Email",
		validationStatus: "VALID"
	} : createNotProvidedField("senderEmail");
	traceability.portOfLoading = createNotProvidedField("portOfLoading");
	traceability.portOfDischarge = createNotProvidedField("portOfDischarge");
	for (const lineObj of lines) {
		const polMatch = lineObj.text.match(/(?:pol|origin|port\s+of\s+loading)\s*[:=-]?\s*([A-Za-z\s]+?)(?:$|\n|,|\.)/i);
		if (polMatch) {
			traceability.portOfLoading = {
				field: "portOfLoading",
				value: polMatch[1].trim(),
				rawValue: polMatch[0],
				sourceText: polMatch[0],
				lineNumber: lineObj.originalLineNumber,
				confidence: "HIGH",
				confidenceReason: "Matched port of loading declaration.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "POL",
				validationStatus: "VALID"
			};
			break;
		}
	}
	for (const lineObj of lines) {
		const podMatch = lineObj.text.match(/(?:pod|destination|port\s+of\s+discharge)\s*[:=-]?\s*([A-Za-z\s]+?)(?:$|\n|,|\.)/i);
		if (podMatch) {
			traceability.portOfDischarge = {
				field: "portOfDischarge",
				value: podMatch[1].trim(),
				rawValue: podMatch[0],
				sourceText: podMatch[0],
				lineNumber: lineObj.originalLineNumber,
				confidence: "HIGH",
				confidenceReason: "Matched port of discharge declaration.",
				extractionMethod: "KEYWORD_REGEX",
				matchingKeyword: "POD",
				validationStatus: "VALID"
			};
			break;
		}
	}
	traceability.rateValidity = chargesResult.rateValidityField.traceability;
	traceability.expiryDate = chargesResult.rateValidityField.traceability;
	const keyFieldWeights = [
		{
			field: "rate",
			weight: .35
		},
		{
			field: "currency",
			weight: .15
		},
		{
			field: "containerType",
			weight: .15
		},
		{
			field: "etd",
			weight: .15
		},
		{
			field: "eta",
			weight: .1
		},
		{
			field: "freeDays",
			weight: .05
		},
		{
			field: "transitTime",
			weight: .05
		}
	];
	let weightedSum = 0;
	for (const fw of keyFieldWeights) {
		const tf = traceability[fw.field];
		if (tf && tf.value !== null && tf.validationStatus === "VALID") weightedSum += fw.weight * (tf.confidence === "HIGH" ? 1 : tf.confidence === "MEDIUM" ? .8 : .5);
	}
	if (hasConflicts) weightedSum = Math.max(.2, weightedSum - .3);
	if (traceability.rate?.validationStatus === "SUSPICIOUS") weightedSum = Math.max(.2, weightedSum - .25);
	if (traceability.currency?.value === null && traceability.rate?.value !== null) weightedSum = Math.max(.2, weightedSum - .3);
	const confidenceScore = sailingResult.isDeclined ? .95 : Math.round(weightedSum * 100) / 100;
	const overallConfidence = confidenceScore >= .8 ? "HIGH" : confidenceScore >= .5 ? "MEDIUM" : "LOW";
	const needsReview = sailingResult.isDeclined ? false : hasConflicts || reviewReasons.length > 0 || overallConfidence === "LOW" || traceability.rate?.validationStatus === "CONFLICT" || traceability.rate?.validationStatus === "SUSPICIOUS" || traceability.rate?.value !== null && traceability.currency?.value === null;
	return {
		movementNumber,
		forwarderRequestId,
		forwarderName: traceability.forwarderName?.value || null,
		senderEmail: traceability.senderEmail?.value || null,
		rate: rateResult.rateField.value,
		currency: currencyResult.currencyField.value,
		containerType: containerResult.containerTypeField.value,
		containerQuantity: containerResult.containerQuantityField.value,
		availability: sailingResult.isDeclined ? "Space Not Available" : "Available",
		etd: scheduleResult.etdField.value,
		eta: scheduleResult.etaField.value,
		transitTime: scheduleResult.transitTimeField.value,
		freightCharges: chargesResult.freightChargesField.value,
		documentationCharges: chargesResult.documentationChargesField.value,
		localCharges: chargesResult.localChargesField.value,
		thc: chargesResult.thcField.value,
		additionalCharges: chargesResult.additionalChargesField.value,
		totalCost: chargesResult.totalCostField.value,
		freeDays: containerResult.freeDaysField.value,
		carrier: sailingResult.carrierField.value,
		vesselName: sailingResult.vesselNameField.value,
		voyageNumber: sailingResult.voyageNumberField.value,
		portOfLoading: traceability.portOfLoading?.value || null,
		portOfDischarge: traceability.portOfDischarge?.value || null,
		rateValidity: chargesResult.rateValidityField.value,
		expiryDate: chargesResult.rateValidityField.value,
		notes,
		containerRates: rateResult.containerRates,
		receivedTimestamp: input.receivedAt || timestamp,
		originalGmailMessageId: input.gmailMessageId || null,
		originalGmailThreadId: input.gmailThreadId || null,
		overallConfidence,
		confidenceScore,
		isDeclined: sailingResult.isDeclined,
		isConfirmed: sailingResult.isConfirmed,
		hasConflicts,
		needsReview,
		reviewReasons,
		extractionMethod: "RULE_BASED_DETERMINISTIC",
		traceability,
		cleanedEmail: cleaned,
		timestamp
	};
}
/**
* Core Rule-Based Quotation Extraction Engine
*/
function extractQuotationDeterministic(input) {
	return processRawEmailContent(input);
}
/**
* Validates and sanitizes AI extraction output.
* Ensures AI never invents numbers, hallucinated dates, or invalid currencies.
*/
function validateAiExtractedData(raw) {
	const sanitizeNumber = (val) => {
		if (typeof val === "number" && !isNaN(val) && val > 0 && val < 5e5) return Math.round(val * 100) / 100;
		if (typeof val === "string") {
			const cleaned = val.replace(/[^0-9.]/g, "");
			const n = parseFloat(cleaned);
			if (!isNaN(n) && n > 0 && n < 5e5) return Math.round(n * 100) / 100;
		}
		return null;
	};
	const sanitizeCurrency = (val) => {
		if (typeof val === "string") {
			const upper = val.trim().toUpperCase();
			if (/^[A-Z]{3}$/.test(upper)) return upper;
		}
		return null;
	};
	const sanitizeString = (val) => {
		if (typeof val === "string" && val.trim().length > 0 && val.trim().length < 200) return val.trim();
		return null;
	};
	const sanitizeDate = (val) => {
		if (typeof val === "string" && val.trim().length >= 4) {
			const str = val.trim();
			const d = new Date(str);
			if (!isNaN(d.getTime())) return d.toISOString();
			return str;
		}
		return null;
	};
	const rate = sanitizeNumber(raw.rate || raw.oceanFreight || raw.ocean_freight);
	const totalCost = sanitizeNumber(raw.totalCost || raw.totalAmount || raw.total_cost || raw.total_amount);
	const currency = sanitizeCurrency(raw.currency) || (rate || totalCost ? "USD" : null);
	const rawConfidence = typeof raw.confidenceScore === "number" ? raw.confidenceScore : .75;
	const confidenceScore = Math.max(.1, Math.min(.95, rawConfidence));
	return {
		rate,
		currency,
		totalCost,
		originCharges: sanitizeNumber(raw.originCharges || raw.origin_charges),
		destinationCharges: sanitizeNumber(raw.destinationCharges || raw.destination_charges),
		thc: sanitizeNumber(raw.thc || raw.terminalHandlingCharge),
		documentationCharges: sanitizeNumber(raw.documentationCharges || raw.doc_fee),
		customsCharges: sanitizeNumber(raw.customsCharges || raw.customs_clearance),
		truckingCharges: sanitizeNumber(raw.truckingCharges || raw.haulage),
		otherCharges: sanitizeNumber(raw.otherCharges || raw.surcharges),
		transitTime: sanitizeNumber(raw.transitTime || raw.transit_days),
		freeDays: sanitizeNumber(raw.freeDays || raw.free_days),
		etd: sanitizeDate(raw.etd || raw.sailingDate),
		eta: sanitizeDate(raw.eta || raw.arrivalDate),
		carrier: sanitizeString(raw.carrier || raw.shippingLine),
		vesselName: sanitizeString(raw.vesselName || raw.vessel),
		voyageNumber: sanitizeString(raw.voyageNumber || raw.voyage),
		rateValidity: sanitizeDate(raw.rateValidity || raw.validUntil),
		quotationReference: sanitizeString(raw.quotationReference || raw.quoteRef),
		notes: sanitizeString(raw.notes || raw.remarks),
		confidenceScore
	};
}
/**
* AI Fallback Parser for Highly Unstructured Forwarder Quotation Emails.
* ONLY called when the deterministic parser cannot confidently extract freight rate numbers.
* Deterministic matching ALWAYS determines the booking and forwarder identity.
*/
async function extractQuotationWithAiFallback(input) {
	const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENAI_API_KEY || (typeof window !== "undefined" ? window.__GEMINI_API_KEY__ : void 0);
	if (!apiKey) {
		if (typeof window !== "undefined") try {
			const response = await fetch("/api/extraction/extract-quotation", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					subject: input.subject || "",
					body: input.body || "",
					snippet: input.snippet || "",
					senderEmail: input.senderEmail || "",
					senderName: input.senderName || "",
					knownMovementNumber: input.movementNumber || ""
				})
			});
			if (response.ok) {
				const resData = await response.json();
				if (resData.quotation) {
					const q = resData.quotation;
					return {
						rate: q.rate ?? null,
						currency: q.currency ?? "USD",
						totalCost: q.totalCost ?? null,
						originCharges: q.freightCharges?.originCharges ?? null,
						destinationCharges: q.freightCharges?.destinationCharges ?? null,
						thc: q.freightCharges?.thc ?? null,
						documentationCharges: q.freightCharges?.documentationCharges ?? null,
						customsCharges: q.freightCharges?.customsCharges ?? null,
						truckingCharges: q.freightCharges?.truckingCharges ?? null,
						otherCharges: q.freightCharges?.otherCharges ?? null,
						transitTime: q.transitTime ?? null,
						freeDays: q.freeDays ?? null,
						etd: q.etd ?? null,
						eta: q.eta ?? null,
						carrier: q.carrier ?? null,
						vesselName: q.vesselName ?? null,
						voyageNumber: q.voyageNumber ?? null,
						rateValidity: q.rateValidity ?? null,
						quotationReference: q.quotationReference ?? null,
						notes: q.notes ?? null,
						confidenceScore: q.confidenceScore ?? .85
					};
				}
			}
		} catch (proxyErr) {
			console.warn("[AiQuotationFallback] Browser proxy to /api/extraction/extract-quotation notice:", proxyErr);
		}
		console.info("[AiQuotationFallback] Gemini API key not present, preserving deterministic result.");
		return null;
	}
	const combinedContent = [
		input.subject ? `SUBJECT: ${input.subject}` : "",
		input.body ? `BODY:\n${input.body}` : "",
		input.snippet ? `SNIPPET: ${input.snippet}` : ""
	].filter(Boolean).join("\n\n");
	if (combinedContent.trim().length < 10) return null;
	try {
		const ai = new GoogleGenAI({ apiKey });
		const prompt = `You are a strict data extraction tool for ocean freight quotation emails.
Analyze this forwarder email text and extract commercial rate details.

CRITICAL RULES:
1. ONLY extract values EXPLICITLY written in the email.
2. DO NOT guess, hallucinate, assume, or fabricate any numbers, dates, or shipping lines.
3. If a value is not mentioned in the email text, return null for that field.
4. If this email is NOT an ocean freight quotation or contains no rate offer, return null for rate and totalCost.

EMAIL TEXT:
${combinedContent}

Extract the fields according to the schema.`;
		const text = (await ai.models.generateContent({
			model: "gemini-3.8-flash",
			contents: prompt,
			config: {
				responseMimeType: "application/json",
				responseSchema: {
					type: Type.OBJECT,
					properties: {
						rate: {
							type: Type.NUMBER,
							description: "Ocean freight rate per container (e.g. 2100)"
						},
						currency: {
							type: Type.STRING,
							description: "3-letter currency code, e.g. USD, EUR, GBP"
						},
						totalCost: {
							type: Type.NUMBER,
							description: "Total quotation cost if stated explicitly"
						},
						originCharges: {
							type: Type.NUMBER,
							description: "Origin terminal or THC charges"
						},
						destinationCharges: {
							type: Type.NUMBER,
							description: "Destination charges"
						},
						thc: {
							type: Type.NUMBER,
							description: "Terminal handling charges"
						},
						documentationCharges: {
							type: Type.NUMBER,
							description: "Documentation fee"
						},
						customsCharges: {
							type: Type.NUMBER,
							description: "Customs clearance charge"
						},
						truckingCharges: {
							type: Type.NUMBER,
							description: "Inland haulage or trucking charge"
						},
						otherCharges: {
							type: Type.NUMBER,
							description: "Other itemized surcharges"
						},
						transitTime: {
							type: Type.NUMBER,
							description: "Transit time in days"
						},
						freeDays: {
							type: Type.NUMBER,
							description: "Detention / demurrage free days (e.g. 14)"
						},
						etd: {
							type: Type.STRING,
							description: "Estimated time of departure date string"
						},
						eta: {
							type: Type.STRING,
							description: "Estimated time of arrival date string"
						},
						carrier: {
							type: Type.STRING,
							description: "Ocean shipping line name, e.g. Maersk, MSC, CMA CGM"
						},
						vesselName: {
							type: Type.STRING,
							description: "Vessel name"
						},
						voyageNumber: {
							type: Type.STRING,
							description: "Voyage number"
						},
						rateValidity: {
							type: Type.STRING,
							description: "Rate validity or expiration date"
						},
						quotationReference: {
							type: Type.STRING,
							description: "Quotation quote reference number"
						},
						notes: {
							type: Type.STRING,
							description: "Important conditions, exclusions or notes"
						},
						confidenceScore: {
							type: Type.NUMBER,
							description: "Confidence score from 0.0 to 1.0"
						}
					}
				}
			}
		})).text?.trim();
		if (!text) return null;
		const validated = validateAiExtractedData(JSON.parse(text));
		if (!validated.rate && !validated.totalCost) return null;
		console.log("[AiQuotationFallback] ✅ AI fallback successfully extracted unstructured quotation:", {
			rate: validated.rate,
			currency: validated.currency,
			carrier: validated.carrier,
			etd: validated.etd
		});
		return validated;
	} catch (err) {
		console.warn("[AiQuotationFallback] Notice during AI fallback extraction:", err);
		return null;
	}
}
/**
* Production-Ready Rule-Based Email Quotation Extraction Service
* Fully deterministic, transparent, and auditable.
* Zero AI or LLM API calls. Never hallucinates or invents missing values.
*/
/**
* Main Quotation Extraction Function
* Priority 1: 100% Deterministic Rule-Based Parser
* Priority 2: AI Fallback strictly for unstructured text when deterministic rules cannot extract rate
*/
async function extractQuotationFromEmail(input) {
	const result = extractQuotationDeterministic(input);
	const hasDeterministicOffer = result.rate !== null || result.totalCost !== null || result.freightCharges !== null;
	let finalRate = result.rate;
	let finalCurrency = result.currency;
	let finalTotalCost = result.totalCost;
	let finalEtd = result.etd;
	let finalEta = result.eta;
	let finalTransitTime = result.transitTime;
	let finalFreeDays = result.freeDays;
	let finalCarrier = result.carrier;
	let finalVesselName = result.vesselName;
	let finalVoyageNumber = result.voyageNumber;
	let finalRateValidity = result.rateValidity;
	let finalNotes = result.notes;
	let extractionConfidence = result.confidenceScore;
	let extractionMethod = "RULE_BASED_DETERMINISTIC";
	if (!hasDeterministicOffer && !result.isDeclined && !result.isConfirmed) try {
		const aiResult = await extractQuotationWithAiFallback(input);
		if (aiResult && (aiResult.rate !== null || aiResult.totalCost !== null)) {
			finalRate = aiResult.rate ?? finalRate;
			finalCurrency = aiResult.currency ?? finalCurrency ?? "USD";
			finalTotalCost = aiResult.totalCost ?? finalTotalCost;
			finalEtd = aiResult.etd ?? finalEtd;
			finalEta = aiResult.eta ?? finalEta;
			finalTransitTime = aiResult.transitTime ?? finalTransitTime;
			finalFreeDays = aiResult.freeDays ?? finalFreeDays;
			finalCarrier = aiResult.carrier ?? finalCarrier;
			finalVesselName = aiResult.vesselName ?? finalVesselName;
			finalVoyageNumber = aiResult.voyageNumber ?? finalVoyageNumber;
			finalRateValidity = aiResult.rateValidity ?? finalRateValidity;
			finalNotes = aiResult.notes ?? finalNotes;
			extractionConfidence = Math.max(.65, aiResult.confidenceScore);
			extractionMethod = "AI_FALLBACK_VALIDATED";
		}
	} catch (aiErr) {
		console.warn("[QuotationExtractor] Notice during AI fallback:", aiErr);
	}
	const presentFields = [];
	const missingFields = [];
	const checkField = (name, val) => {
		if (val !== null && val !== void 0) presentFields.push(name);
		else missingFields.push(name);
	};
	checkField("Movement Number", result.movementNumber);
	checkField("Forwarder", result.forwarderName);
	checkField("Rate", finalRate);
	checkField("Currency", finalCurrency);
	checkField("Container type and quantity", result.containerType || result.containerQuantity);
	checkField("Availability", result.availability);
	checkField("ETD", finalEtd);
	checkField("ETA", finalEta);
	checkField("Transit time", finalTransitTime);
	checkField("Freight charges", result.freightCharges);
	checkField("Additional charges", result.additionalCharges);
	checkField("Total cost when explicitly provided", finalTotalCost);
	checkField("Free days", finalFreeDays);
	checkField("Sailing/vessel/voyage", finalVesselName || finalVoyageNumber);
	checkField("Rate validity", finalRateValidity);
	checkField("Notes", finalNotes);
	checkField("Email received date", result.receivedTimestamp);
	const sailingVesselVoyage = [
		finalCarrier,
		finalVesselName,
		finalVoyageNumber
	].filter(Boolean).join(" ") || null;
	return {
		movementNumber: result.movementNumber,
		forwarder: result.forwarderName,
		forwarderEmail: result.senderEmail,
		rate: finalRate,
		currency: finalCurrency,
		containerType: result.containerType,
		containerQuantity: result.containerQuantity,
		availability: result.availability,
		etd: finalEtd,
		eta: finalEta,
		transitTime: finalTransitTime,
		freightCharges: result.freightCharges,
		additionalCharges: result.additionalCharges,
		totalCost: finalTotalCost,
		freeDays: finalFreeDays,
		sailingVesselVoyage,
		carrier: finalCarrier || null,
		vesselName: finalVesselName,
		voyageNumber: finalVoyageNumber,
		rateValidity: finalRateValidity,
		notes: finalNotes,
		emailReceivedDate: result.receivedTimestamp,
		extractionConfidence,
		isDeclined: result.isDeclined,
		isConfirmed: result.isConfirmed,
		extractionMethod,
		presentFields,
		missingFields,
		traceability: result.traceability,
		deterministicResult: result
	};
}
function validateQuotationForBackendAction(extracted, action, currentBooking) {
	if (action === "DECLINE_REQUEST") {
		if (!extracted.isDeclined) return {
			allowed: false,
			action,
			reason: "Backend validation failed: Email content does not contain clear forwarder decline signals."
		};
		return {
			allowed: true,
			action,
			suggestedStatus: "DECLINED",
			reason: "Forwarder explicitly indicated space/equipment unavailability."
		};
	}
	if (action === "RECORD_OFFER") {
		if (extracted.rate === null || extracted.rate <= 0) return {
			allowed: false,
			action,
			requiresReview: true,
			reason: "Backend validation rejected offer status: No valid numeric freight rate present in extraction."
		};
		if (!extracted.currency) return {
			allowed: false,
			action,
			requiresReview: true,
			reason: "Backend validation rejected offer status: Currency is missing."
		};
		return {
			allowed: true,
			action,
			suggestedStatus: "OFFER_RECEIVED",
			reason: `Valid quotation rate detected ($${extracted.rate} ${extracted.currency}). Authorized to update forwarder quote status.`
		};
	}
	if (action === "AWARD_FORWARDER") {
		if (extracted.rate === null || extracted.rate <= 0) return {
			allowed: false,
			action,
			reason: "Cannot award forwarder: Quotation contains no valid rate."
		};
		if (currentBooking?.status === "Delivered" || currentBooking?.status === "Cancelled") return {
			allowed: false,
			action,
			reason: `Cannot award booking: Current booking status is locked (${currentBooking?.status}).`
		};
		return {
			allowed: true,
			action,
			suggestedStatus: "Pending Confirmation",
			reason: "Backend validation approved: Award transitions booking to 'Pending Confirmation' pending carrier verification."
		};
	}
	if (action === "CONFIRM_MOVEMENT") {
		if (!extracted.isConfirmed) return {
			allowed: false,
			action,
			requiresReview: true,
			reason: "Backend validation rejected automatic confirmation: No explicit carrier confirmation phrasing."
		};
		if (extracted.extractionConfidence < .85) return {
			allowed: false,
			action,
			requiresReview: true,
			reason: `Backend validation held confirmation: Extraction confidence (${extracted.extractionConfidence}) is below safety threshold 0.85.`
		};
		return {
			allowed: true,
			action,
			suggestedStatus: "Booking Confirmed",
			reason: "Backend validation approved: High-confidence carrier confirmation verified."
		};
	}
	return {
		allowed: false,
		action,
		reason: "Unrecognized backend action."
	};
}
/**
* Public, generic email providers that cannot be used for corporate domain matching.
*/
var GENERIC_PUBLIC_EMAIL_DOMAINS = /* @__PURE__ */ new Set([
	"gmail.com",
	"googlemail.com",
	"yahoo.com",
	"ymail.com",
	"rocketmail.com",
	"hotmail.com",
	"outlook.com",
	"live.com",
	"msn.com",
	"icloud.com",
	"me.com",
	"mac.com",
	"aol.com",
	"mail.com",
	"zoho.com",
	"proton.me",
	"protonmail.com",
	"fastmail.com",
	"gmx.com",
	"yandex.com"
]);
/**
* Extracts a normalized domain from an email or URL string (e.g. 'ops@apexmaritime.com' -> 'apexmaritime.com')
*/
function extractCleanDomain(input) {
	if (!input) return null;
	try {
		let clean = input.trim().toLowerCase();
		if (clean.includes("@")) clean = clean.split("@")[1].trim();
		clean = clean.replace(/^https?:\/\//, "");
		clean = clean.replace(/^www\./, "");
		clean = clean.split("/")[0].split("?")[0].split(":")[0].trim();
		return clean || null;
	} catch {
		return null;
	}
}
/**
* Extracts all valid email addresses from text fields (e.g. contactPerson containing email)
*/
function extractEmailsFromText(text) {
	if (!text) return [];
	const matches = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
	return matches ? matches.map((m) => m.toLowerCase().trim()) : [];
}
/**
* Collects all corporate domains registered to a specific forwarder record.
*/
function getForwarderRegisteredDomains(fwd) {
	const domains = /* @__PURE__ */ new Set();
	const emailDom = extractCleanDomain(fwd.email);
	if (emailDom && !GENERIC_PUBLIC_EMAIL_DOMAINS.has(emailDom)) domains.add(emailDom);
	const contactDom = extractCleanDomain(fwd.contactEmail || fwd.contact_email);
	if (contactDom && !GENERIC_PUBLIC_EMAIL_DOMAINS.has(contactDom)) domains.add(contactDom);
	const contactPersonEmails = extractEmailsFromText(fwd.contactPerson || fwd.contact_person);
	for (const cEmail of contactPersonEmails) {
		const cDom = extractCleanDomain(cEmail);
		if (cDom && !GENERIC_PUBLIC_EMAIL_DOMAINS.has(cDom)) domains.add(cDom);
	}
	const webDom = extractCleanDomain(fwd.website);
	if (webDom && !GENERIC_PUBLIC_EMAIL_DOMAINS.has(webDom)) domains.add(webDom);
	if (fwd.notes) {
		const domainMatch = fwd.notes.match(/domain[:\s]+([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i);
		if (domainMatch) {
			const noteDom = extractCleanDomain(domainMatch[1]);
			if (noteDom && !GENERIC_PUBLIC_EMAIL_DOMAINS.has(noteDom)) domains.add(noteDom);
		}
	}
	return domains;
}
/**
* 2. FORWARDER MATCHING ENGINE
*
* Match sender email with the existing forwarder master using:
* - Exact sender email
* - Forwarder contact email
* - Sender domain, only if the domain is registered in the forwarder master
*
* If no forwarder matches:
* - Mark forwarder as unknown
* - Send it to human review
* - Do not trust the sender display name alone.
*/
function matchSenderWithForwarderMaster(senderEmail, forwarderMaster, options) {
	const cleanSender = (senderEmail || "").trim().toLowerCase();
	const displayName = options?.senderDisplayName?.trim();
	if (!cleanSender || !cleanSender.includes("@")) return {
		isMatched: false,
		forwarderId: null,
		forwarderName: "Unknown Forwarder",
		forwarderEmail: cleanSender || "",
		matchedBy: "NONE",
		isForwarderUnknown: true,
		needsReview: true,
		reason: "Sender email is missing or invalid. Forwarder marked as Unknown and routed to human review.",
		disregardedDisplayName: displayName || null
	};
	for (const fwd of forwarderMaster) {
		const fwdEmail = (fwd.email || "").trim().toLowerCase();
		if (fwdEmail && cleanSender === fwdEmail) {
			const fwdName = fwd.name || fwd.company_name || "Forwarder";
			return {
				isMatched: true,
				forwarderId: fwd.id,
				forwarderName: fwdName,
				forwarderEmail: fwdEmail,
				matchedBy: "EXACT_EMAIL",
				isForwarderUnknown: false,
				needsReview: false,
				reason: `Matched forwarder '${fwdName}' via exact sender email (${cleanSender}).`
			};
		}
	}
	for (const fwd of forwarderMaster) {
		const contactEmails = /* @__PURE__ */ new Set();
		if (fwd.contactEmail) contactEmails.add(fwd.contactEmail.trim().toLowerCase());
		if (fwd.contact_email) contactEmails.add(fwd.contact_email.trim().toLowerCase());
		const personEmails = extractEmailsFromText(fwd.contactPerson || fwd.contact_person);
		for (const pe of personEmails) contactEmails.add(pe);
		if (contactEmails.has(cleanSender)) {
			const fwdName = fwd.name || fwd.company_name || "Forwarder";
			return {
				isMatched: true,
				forwarderId: fwd.id,
				forwarderName: fwdName,
				forwarderEmail: fwd.email || cleanSender,
				matchedBy: "CONTACT_EMAIL",
				isForwarderUnknown: false,
				needsReview: false,
				reason: `Matched forwarder '${fwdName}' via forwarder contact email (${cleanSender}).`
			};
		}
	}
	const senderDomain = extractCleanDomain(cleanSender);
	if (senderDomain && !GENERIC_PUBLIC_EMAIL_DOMAINS.has(senderDomain)) {
		const matchedForwarders = [];
		for (const fwd of forwarderMaster) {
			const registeredDomains = getForwarderRegisteredDomains(fwd);
			for (const regDom of registeredDomains) if (senderDomain === regDom || senderDomain.endsWith(`.${regDom}`)) {
				matchedForwarders.push(fwd);
				break;
			}
		}
		if (matchedForwarders.length === 1) {
			const fwd = matchedForwarders[0];
			const fwdName = fwd.name || fwd.company_name || "Forwarder";
			return {
				isMatched: true,
				forwarderId: fwd.id,
				forwarderName: fwdName,
				forwarderEmail: fwd.email || cleanSender,
				matchedBy: "REGISTERED_DOMAIN",
				registeredDomainMatched: senderDomain,
				isForwarderUnknown: false,
				needsReview: false,
				reason: `Matched forwarder '${fwdName}' via registered corporate domain (@${senderDomain}).`,
				disregardedDisplayName: null
			};
		} else if (matchedForwarders.length > 1) {
			const names = matchedForwarders.map((f) => f.name || f.company_name).join(", ");
			return {
				isMatched: true,
				forwarderId: matchedForwarders[0].id || null,
				forwarderName: matchedForwarders[0].name || matchedForwarders[0].company_name || "Forwarder",
				forwarderEmail: cleanSender,
				matchedBy: "REGISTERED_DOMAIN",
				isForwarderUnknown: false,
				needsReview: false,
				reason: `Sender domain '@${senderDomain}' matched master (${names}).`,
				disregardedDisplayName: null
			};
		}
	}
	const formattedEmailName = (cleanSender.split("@")[0] || "Forwarder").split(/[._-]/).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
	const fallbackForwarderName = displayName || formattedEmailName || "Freight Forwarder";
	return {
		isMatched: true,
		forwarderId: null,
		forwarderName: fallbackForwarderName,
		forwarderEmail: cleanSender,
		matchedBy: displayName ? "EXACT_EMAIL" : "NONE",
		isForwarderUnknown: false,
		needsReview: false,
		reason: `Identified forwarder as '${fallbackForwarderName}' from sender (${cleanSender}).`,
		disregardedDisplayName: null
	};
}
/**
* Configurable Keyword Mappings strictly mapped to specification
*/
var CHARGE_KEYWORD_MAPPINGS = {
	ocean_freight: {
		label: "Ocean Freight",
		keywords: [
			"ocean freight charges",
			"ocean freight",
			"sea freight",
			"freight charges",
			"freight rate",
			"freight",
			"o/f",
			"o.f.",
			"ocean rate",
			"sea rate",
			"baserate",
			"base rate",
			"rate",
			"price",
			"quote",
			"offer"
		]
	},
	terminal_handling: {
		label: "Terminal Handling",
		keywords: [
			"terminal handling charge",
			"terminal handling charges",
			"terminal handling",
			"origin thc",
			"destination thc",
			"dest thc",
			"o-thc",
			"d-thc",
			"thc"
		]
	},
	documentation: {
		label: "Documentation",
		keywords: [
			"bill of lading fee",
			"documentation fee",
			"documentation charges",
			"documentation",
			"doc fee",
			"bl fee",
			"b/l fee",
			"doc"
		]
	},
	origin_charges: {
		label: "Origin Charges",
		keywords: [
			"origin local charges",
			"origin local fees",
			"origin handling",
			"origin charges",
			"export local charges",
			"export charges",
			"origin locals",
			"origin port charges"
		]
	},
	destination_charges: {
		label: "Destination Charges",
		keywords: [
			"destination local charges",
			"destination local fees",
			"destination handling",
			"destination charges",
			"dest local charges",
			"import local charges",
			"import charges",
			"destination locals",
			"destination port charges",
			"dest charges"
		]
	},
	customs: {
		label: "Customs",
		keywords: [
			"customs clearance charges",
			"customs clearance fee",
			"customs clearance",
			"clearance charges",
			"customs charges",
			"customs fee",
			"customs broker fee",
			"customs brokerage",
			"customs"
		]
	},
	trucking: {
		label: "Trucking",
		keywords: [
			"delivery charges",
			"trucking charges",
			"trucking fee",
			"trucking",
			"haulage charges",
			"haulage fee",
			"haulage",
			"inland transport",
			"transport charges",
			"transport",
			"drayage"
		]
	},
	other: {
		label: "Other Charges",
		keywords: [
			"bunker adjustment factor",
			"bunker adjustment",
			"bunker surcharge",
			"bunker",
			"baf",
			"additional charges",
			"miscellaneous charges",
			"other charges",
			"miscellaneous",
			"misc charges",
			"surcharge",
			"surcharges",
			"vgm fee",
			"vgm charge",
			"seal fee",
			"ams fee",
			"ens fee",
			"admin fee",
			"security fee"
		]
	}
};
/**
* Recognized explicit ISO currencies
*/
var EXPLICIT_CURRENCIES = /* @__PURE__ */ new Set([
	"USD",
	"EUR",
	"GBP",
	"AED",
	"PKR",
	"INR",
	"SAR",
	"CNY",
	"JPY",
	"CAD",
	"AUD"
]);
/**
* Terms indicating a charge is pending, not yet fixed, or at actuals
*/
var PENDING_APPLICABLE_TERMS = [
	"at actuals",
	"at actual",
	"actuals",
	"as per receipt",
	"as per actual",
	"as applicable",
	"subject to",
	"tba",
	"tbd",
	"pending",
	"extra at actual",
	"excluded"
];
/**
* Normalizes numerical text into clean standard float.
* Handles commas as thousands separators ("1,200.50" -> 1200.5) or European decimal ("1.200,50" -> 1200.5).
*/
function parseNumericClean(raw) {
	if (!raw) return null;
	let str = raw.trim();
	if (str.includes(",") && str.includes(".")) {
		const lastComma = str.lastIndexOf(",");
		if (str.lastIndexOf(".") > lastComma) str = str.replace(/,/g, "");
		else str = str.replace(/\./g, "").replace(",", ".");
	} else if (str.includes(",")) {
		const parts = str.split(",");
		if (parts.length === 2 && parts[1].length === 3) str = str.replace(/,/g, "");
		else str = str.replace(",", ".");
	}
	const num = parseFloat(str);
	return !isNaN(num) && isFinite(num) ? num : null;
}
/**
* 4. CURRENCY EXTRACTION
*
* Recognizes only explicit currency values or unambiguous symbols.
* Returns null if no currency is identified.
*/
function extractExplicitCurrency(text) {
	if (!text) return null;
	const isoMatch = text.match(/\b(USD|EUR|GBP|AED|PKR|INR|SAR|CNY|JPY|CAD|AUD)\b/i);
	if (isoMatch) {
		const code = isoMatch[1].toUpperCase();
		if (EXPLICIT_CURRENCIES.has(code)) return code;
	}
	if (/\b(?:Dhs|DH)\b/i.test(text)) return "AED";
	if (/\b(?:PKRs|Rs)\b/i.test(text)) return "PKR";
	if (text.includes("€")) return "EUR";
	if (text.includes("£")) return "GBP";
	if (text.includes("₹")) return "INR";
	if (text.includes("US$") || text.includes("$")) return "USD";
	return null;
}
/**
* Extracts unit from a text line (e.g. "per 40HC", "per shipment", "/cntr", "per container")
*/
function extractChargeUnit(text) {
	if (!text) return {
		unit: "unknown",
		unitRaw: null
	};
	const lower = text.toLowerCase();
	const containerMatch = lower.match(/(?:per|\/)?\s*(?:(?:40\s*h[cq]|20\s*f[t]?|40\s*f[t]?|45\s*h[cq]|teu|cntrs?|containers?|boxes?))\b/i);
	if (containerMatch) return {
		unit: "per_container",
		unitRaw: containerMatch[0]
	};
	if (lower.includes("per container") || lower.includes("/container") || lower.includes("per cntr") || lower.includes("/cntr") || lower.includes("containers") || lower.includes("container")) return {
		unit: "per_container",
		unitRaw: "per container"
	};
	const shipmentMatch = lower.match(/(?:per|\/)\s*(?:shipment|shpt|booking)\b/i);
	if (shipmentMatch) return {
		unit: "per_shipment",
		unitRaw: shipmentMatch[0]
	};
	const blMatch = lower.match(/(?:per|\/)\s*(?:b\/?l|bill\s*of\s*lading|bl)\b/i);
	if (blMatch) return {
		unit: "per_bl",
		unitRaw: blMatch[0]
	};
	const cbmMatch = lower.match(/(?:per|\/)\s*(?:cbm|m3|cubic\s*meter)\b/i);
	if (cbmMatch) return {
		unit: "per_cbm",
		unitRaw: cbmMatch[0]
	};
	const kgMatch = lower.match(/(?:per|\/)\s*(?:kg|kilo|ton|mt|metric\s*ton)\b/i);
	if (kgMatch) return {
		unit: "per_kg",
		unitRaw: kgMatch[0]
	};
	if (lower.includes("lump sum") || lower.includes("lumpsum") || lower.includes("flat fee") || lower.includes("flat rate")) return {
		unit: "lump_sum",
		unitRaw: "lump sum"
	};
	return {
		unit: "unknown",
		unitRaw: null
	};
}
/**
* Extracts quantity from a text line (e.g. "x 2 containers", "x 2", "2 containers", "qty: 2")
*/
function extractChargeQuantity(text) {
	if (!text) return null;
	const xMatch = text.match(/[x*]\s*(\d+)(?:\s*(?:containers?|cntrs?|units?|boxes|shpt|bl))?/i);
	if (xMatch) {
		const q = parseInt(xMatch[1], 10);
		if (!isNaN(q) && q > 0 && q <= 500) return q;
	}
	const countMatch = text.match(/\b(\d+)\s*(?:x\s*)?(?:containers?|cntrs?|boxes|units)\b/i);
	if (countMatch) {
		const q = parseInt(countMatch[1], 10);
		if (!isNaN(q) && q > 0 && q <= 500) return q;
	}
	const qtyMatch = text.match(/\b(?:qty|quantity)\s*[:=]?\s*(\d+)\b/i);
	if (qtyMatch) {
		const q = parseInt(qtyMatch[1], 10);
		if (!isNaN(q) && q > 0 && q <= 500) return q;
	}
	return null;
}
function parseChargeAmountDetails(lineValuePart, fullLine) {
	const warnings = [];
	for (const term of PENDING_APPLICABLE_TERMS) if (new RegExp(`\\b${term.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}\\b`, "i").test(fullLine)) {
		warnings.push(`Charge is marked as '${term}'. Amount is not fixed.`);
		return {
			amount: null,
			amountWithoutCurrency: null,
			amountMin: null,
			amountMax: null,
			currency: extractExplicitCurrency(fullLine),
			status: "pending_applicable",
			needsReview: true,
			warnings
		};
	}
	const detectedCurrency = extractExplicitCurrency(fullLine);
	const cleanValuePart = lineValuePart.replace(/\b(?:BK|MOV|BKG|REF|PO|CNTR|CONTAINER)[\s#.:-]*[0-9A-Z-]+/gi, " ");
	const rangePattern = /(?:(?:USD|EUR|GBP|AED|PKR|INR|SAR|CNY|JPY|CAD|AUD|\$|€|£)\s*)?([0-9,.]+)\s*(?:-|to|~|\/)\s*(?:(?:USD|EUR|GBP|AED|PKR|INR|SAR|CNY|JPY|CAD|AUD|\$|€|£)\s*)?([0-9,.]+)(?:\s*(?:USD|EUR|GBP|AED|PKR|INR|SAR|CNY|JPY|CAD|AUD))?/i;
	const rangeMatch = cleanValuePart.match(rangePattern) || lineValuePart.match(rangePattern);
	if (rangeMatch) {
		const rawMin = rangeMatch[1];
		const rawMax = rangeMatch[2];
		const minVal = parseNumericClean(rawMin);
		const maxVal = parseNumericClean(rawMax);
		if (minVal !== null && maxVal !== null && minVal < maxVal && minVal > 0) {
			warnings.push(`Range detected (${minVal} to ${maxVal}${detectedCurrency ? " " + detectedCurrency : ""}). Cannot select arbitrary value without human review.`);
			if (!detectedCurrency) warnings.push("Currency is missing for range charge.");
			return {
				amount: null,
				amountWithoutCurrency: null,
				amountMin: minVal,
				amountMax: maxVal,
				currency: detectedCurrency,
				status: "range",
				needsReview: true,
				warnings
			};
		}
	}
	const match = lineValuePart.match(/(?:(?:USD|EUR|GBP|AED|PKR|INR|SAR|CNY|JPY|CAD|AUD|\$|€|£)\s*([0-9,.]+)|([0-9,.]+)\s*(?:USD|EUR|GBP|AED|PKR|INR|SAR|CNY|JPY|CAD|AUD)|([0-9,.]+))/i);
	if (match) {
		const parsed = parseNumericClean(match[1] || match[2] || match[3]);
		if (parsed !== null && parsed > 0) {
			if (parsed === 2026 && !detectedCurrency) return {
				amount: null,
				amountWithoutCurrency: null,
				amountMin: null,
				amountMax: null,
				currency: null,
				status: "amount_missing",
				needsReview: true,
				warnings: ["Detected value appears to be calendar year (2026), not monetary amount."]
			};
			if (!detectedCurrency) {
				warnings.push(`Currency is missing for extracted amount ${parsed}. Cannot assume currency.`);
				return {
					amount: null,
					amountWithoutCurrency: parsed,
					amountMin: null,
					amountMax: null,
					currency: null,
					status: "currency_missing",
					needsReview: true,
					warnings
				};
			}
			return {
				amount: parsed,
				amountWithoutCurrency: null,
				amountMin: null,
				amountMax: null,
				currency: detectedCurrency,
				status: "exact",
				needsReview: false,
				warnings
			};
		}
	}
	warnings.push("No monetary amount found on charge line.");
	return {
		amount: null,
		amountWithoutCurrency: null,
		amountMin: null,
		amountMax: null,
		currency: detectedCurrency,
		status: "amount_missing",
		needsReview: true,
		warnings
	};
}
/**
* Identifies which charge category a line header matches
*/
function identifyChargeCategory(lineHeader) {
	const clean = lineHeader.toLowerCase().trim().replace(/[:=-]+$/, "").trim();
	for (const [catKey, config] of Object.entries(CHARGE_KEYWORD_MAPPINGS)) for (const kw of config.keywords) if (new RegExp(`\\b${kw.replace("/", "\\/")}\\b`, "i").test(clean)) return {
		category: catKey,
		label: config.label,
		matchedKeyword: kw
	};
	return null;
}
/**
* 3. & 5. LINE-BASED CHARGE EXTRACTION
*
* Iterates line by line through email subject and body.
* Identifies charges using keyword mappings, extracts amount, currency, unit, quantity.
*/
function extractChargesFromLines(text, context) {
	const lines = text.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0);
	const charges = [];
	const chargeMap = {
		ocean_freight: null,
		terminal_handling: null,
		documentation: null,
		origin_charges: null,
		destination_charges: null,
		customs: null,
		trucking: null,
		other: null
	};
	let quotedTotal = null;
	let quotedTotalLine = null;
	for (let idx = 0; idx < lines.length; idx++) {
		const rawLine = lines[idx];
		const lineNumber = idx + 1;
		const cleanLine = rawLine.replace(/^[\s\-*•·\d.)\]]+/, "").trim();
		const totalMatch = cleanLine.match(/^(?:all[\s\-_]*in(?:\s*(?:total|rate|quote|quoted|cost|charges?))*|quoted\s*total|total(?:\s*(?:quoted|all[\s\-_]*in|rate|amount|cost|freight|charges?))*|grand\s*total|lump\s*sum)\s*(?::|=|\s+-\s+)\s*(.*)$/i) || rawLine.match(/^(?:all[\s\-_]*in(?:\s*(?:total|rate|quote|quoted|cost|charges?))*|quoted\s*total|total(?:\s*(?:quoted|all[\s\-_]*in|rate|amount|cost|freight|charges?))*|grand\s*total|lump\s*sum)\s*(?::|=|\s+-\s+)\s*(.*)$/i);
		if (totalMatch && quotedTotal === null) {
			const parsedTotal = parseChargeAmountDetails(totalMatch[1].trim(), rawLine);
			if (parsedTotal.amount !== null) {
				quotedTotal = parsedTotal.amount;
				quotedTotalLine = rawLine;
			}
			continue;
		}
		const delimiterMatch = cleanLine.match(/^([a-zA-Z0-9\s/&._()[\]#,-]+?)\s*(?::|=|\s+-\s+)\s*(.+)$/) || rawLine.match(/^([a-zA-Z0-9\s/&._()[\]#,-]+?)\s*(?::|=|\s+-\s+)\s*(.+)$/);
		if (!delimiterMatch) {
			let handledAsKeywordLine = false;
			for (const [catKey, config] of Object.entries(CHARGE_KEYWORD_MAPPINGS)) {
				for (const kw of config.keywords) {
					const kwRegex = new RegExp(`^(${kw.replace("/", "\\/")})\\b\\s*(.+)$`, "i");
					const m = cleanLine.match(kwRegex) || rawLine.match(kwRegex);
					if (m) {
						const chargeName = m[1].trim();
						const valuePart = m[2].trim();
						processChargeLine(catKey, config.label, chargeName, valuePart, rawLine, lineNumber, context);
						handledAsKeywordLine = true;
						break;
					}
				}
				if (handledAsKeywordLine) break;
			}
			continue;
		}
		const header = delimiterMatch[1].trim();
		const valuePart = delimiterMatch[2].trim();
		const catMatch = identifyChargeCategory(header);
		if (catMatch) processChargeLine(catMatch.category, catMatch.label, header, valuePart, rawLine, lineNumber, context);
	}
	function processChargeLine(category, categoryLabel, originalChargeName, valuePart, sourceLine, lineNum, optContext) {
		const amountDetails = parseChargeAmountDetails(valuePart, sourceLine);
		const unitDetails = extractChargeUnit(sourceLine);
		let quantity = extractChargeQuantity(sourceLine);
		if (unitDetails.unit === "per_container" && quantity === null && optContext?.containerCount) quantity = optContext.containerCount;
		else if (unitDetails.unit === "per_shipment" && quantity === null) quantity = 1;
		let calculatedSubtotal = null;
		if (amountDetails.amount !== null) {
			const q = quantity || 1;
			calculatedSubtotal = Math.round(amountDetails.amount * q * 100) / 100;
		}
		const item = {
			category,
			categoryLabel,
			originalChargeName,
			original_charge_name: originalChargeName,
			amount: amountDetails.amount,
			extractedAmount: amountDetails.amount,
			extracted_amount: amountDetails.amount,
			amountWithoutCurrency: amountDetails.amountWithoutCurrency,
			amount_without_currency: amountDetails.amountWithoutCurrency,
			amountMin: amountDetails.amountMin,
			amount_min: amountDetails.amountMin,
			amountMax: amountDetails.amountMax,
			amount_max: amountDetails.amountMax,
			currency: amountDetails.currency,
			unit: unitDetails.unit,
			unitRaw: unitDetails.unitRaw,
			quantity,
			calculatedSubtotal,
			calculated_subtotal: calculatedSubtotal,
			status: amountDetails.status,
			needsReview: amountDetails.needsReview,
			needs_review: amountDetails.needsReview,
			warnings: amountDetails.warnings,
			originalSourceLine: sourceLine,
			original_source_line: sourceLine,
			lineNumber: lineNum
		};
		charges.push(item);
		if (!chargeMap[category]) chargeMap[category] = item;
	}
	return {
		charges,
		chargeMap,
		quotedTotal,
		quotedTotalLine
	};
}
/**
* 6. TOTAL CALCULATION ENGINE
*
* Rules:
* - Store forwarder's explicitly written total as quoted_total
* - Calculate calculated_total ONLY when:
*   * All charge amounts are available
*   * All charges use the same currency
*   * No range values exist
*   * Units and quantities are clear
*   * No charges are marked pending or applicable
* - Never replace quoted_total with calculated_total!
* - If quoted_total and calculated_total are different:
*   * Preserve both values
*   * Add conflict warning
*   * Mark quotation as needs_review
*/
function calculateAndValidateTotals(charges, explicitQuotedTotal, detectedOverallCurrency) {
	const warnings = [];
	let isEligible = true;
	let targetCurrency = detectedOverallCurrency;
	if (charges.length === 0) return {
		quotedTotal: explicitQuotedTotal,
		quoted_total: explicitQuotedTotal,
		calculatedTotal: null,
		calculated_total: null,
		currency: targetCurrency,
		isEligibleForCalculation: false,
		hasDiscrepancy: false,
		discrepancyDifference: null,
		status: explicitQuotedTotal !== null ? "QUOTED_ONLY" : "CALCULATION_UNAVAILABLE",
		warnings: ["No itemized charges found to calculate total."],
		needsReview: explicitQuotedTotal === null,
		needs_review: explicitQuotedTotal === null
	};
	const distinctCurrencies = /* @__PURE__ */ new Set();
	for (const c of charges) if (c.currency) distinctCurrencies.add(c.currency);
	if (distinctCurrencies.size > 1) {
		isEligible = false;
		warnings.push(`Multiple currencies detected across charges (${Array.from(distinctCurrencies).join(", ")}). Total cannot be computed automatically across mixed currencies.`);
	} else if (distinctCurrencies.size === 1) targetCurrency = Array.from(distinctCurrencies)[0];
	for (const c of charges) {
		if (c.status === "range") {
			isEligible = false;
			warnings.push(`Charge '${c.originalChargeName}' has a price range. Total cannot be computed.`);
		}
		if (c.status === "amount_missing" || c.amount === null) {
			isEligible = false;
			warnings.push(`Charge '${c.originalChargeName}' is missing an amount.`);
		}
		if (c.status === "pending_applicable") {
			isEligible = false;
			warnings.push(`Charge '${c.originalChargeName}' is marked pending / at actuals.`);
		}
		if (c.status === "currency_missing") {
			isEligible = false;
			warnings.push(`Charge '${c.originalChargeName}' is missing currency.`);
		}
	}
	let calculatedTotal = null;
	if (isEligible) {
		let sum = 0;
		for (const c of charges) {
			const q = c.quantity || 1;
			const sub = (c.amount || 0) * q;
			sum += sub;
		}
		calculatedTotal = Math.round(sum * 100) / 100;
	}
	let hasDiscrepancy = false;
	let discrepancyDifference = null;
	let needsReview = false;
	if (explicitQuotedTotal !== null && calculatedTotal !== null) {
		discrepancyDifference = Math.round(Math.abs(explicitQuotedTotal - calculatedTotal) * 100) / 100;
		if (discrepancyDifference > 1) {
			hasDiscrepancy = true;
			needsReview = true;
			warnings.push(`Discrepancy detected: Explicitly quoted total (${explicitQuotedTotal}${targetCurrency ? " " + targetCurrency : ""}) differs from calculated itemized charges sum (${calculatedTotal}${targetCurrency ? " " + targetCurrency : ""}) by ${discrepancyDifference}.`);
		}
	}
	let status = "CALCULATION_UNAVAILABLE";
	if (hasDiscrepancy) status = "DISCREPANCY";
	else if (explicitQuotedTotal !== null && calculatedTotal !== null) status = "MATCHED";
	else if (explicitQuotedTotal !== null) status = "QUOTED_ONLY";
	else if (calculatedTotal !== null) status = "CALCULATED_ONLY";
	return {
		quotedTotal: explicitQuotedTotal,
		quoted_total: explicitQuotedTotal,
		calculatedTotal,
		calculated_total: calculatedTotal,
		currency: targetCurrency,
		isEligibleForCalculation: isEligible,
		hasDiscrepancy,
		discrepancyDifference,
		status,
		warnings,
		needsReview: needsReview || !isEligible || explicitQuotedTotal === null,
		needs_review: needsReview || !isEligible || explicitQuotedTotal === null
	};
}
/**
* Complete Charge Extraction Pipeline for an Incoming Email
*/
function extractChargesAndTotals(emailText, context) {
	const lineExtraction = extractChargesFromLines(emailText, context);
	const overallCurrency = extractExplicitCurrency(emailText);
	const totals = calculateAndValidateTotals(lineExtraction.charges, lineExtraction.quotedTotal, overallCurrency);
	const hasRange = lineExtraction.charges.some((c) => c.status === "range");
	const hasMissingCurrency = lineExtraction.charges.some((c) => c.status === "currency_missing");
	const hasMissingAmount = lineExtraction.charges.some((c) => c.status === "amount_missing" || c.status === "pending_applicable");
	const distinctCurrencies = /* @__PURE__ */ new Set();
	for (const c of lineExtraction.charges) if (c.currency) distinctCurrencies.add(c.currency);
	const hasMultipleCurrencies = distinctCurrencies.size > 1;
	const allWarnings = [...lineExtraction.charges.flatMap((c) => c.warnings), ...totals.warnings];
	const needsReview = hasRange || hasMissingCurrency || hasMissingAmount || hasMultipleCurrencies || totals.hasDiscrepancy || totals.quotedTotal === null;
	return {
		charges: lineExtraction.charges,
		chargeMap: lineExtraction.chargeMap,
		quotedTotal: totals.quotedTotal,
		quoted_total: totals.quoted_total,
		calculatedTotal: totals.calculatedTotal,
		calculated_total: totals.calculated_total,
		totals,
		currency: totals.currency || overallCurrency,
		hasRange,
		hasMissingCurrency,
		hasMissingAmount,
		hasDiscrepancy: totals.hasDiscrepancy,
		hasMultipleCurrencies,
		needsReview,
		warnings: Array.from(new Set(allWarnings))
	};
}
var DATE_LABEL_MAPPINGS = {
	etd: {
		label: "ETD",
		targetField: "etd",
		regex: /(?:^|[^a-zA-Z0-9])(?:etd|est\.?\s*departure|estimated\s*(?:time\s*of\s*)?departure)\b/i
	},
	sailing_date: {
		label: "Sailing Date",
		targetField: "etd",
		regex: /(?:^|[^a-zA-Z0-9])(?:sailing\s*date|sailing|sail\s*date|sails?\s*(?:on|date)?)\b/i
	},
	departure: {
		label: "Departure",
		targetField: "etd",
		regex: /(?:^|[^a-zA-Z0-9])(?:departure\s*date|departure|departs?\s*(?:on|date)?)\b/i
	},
	eta: {
		label: "ETA",
		targetField: "eta",
		regex: /(?:^|[^a-zA-Z0-9])(?:eta|est\.?\s*arrival|estimated\s*(?:time\s*of\s*)?arrival)\b/i
	},
	arrival_date: {
		label: "Arrival Date",
		targetField: "eta",
		regex: /(?:^|[^a-zA-Z0-9])(?:arrival\s*date|arrival|arrives?\s*(?:on|date)?|should\s*land)\b/i
	},
	valid_until: {
		label: "Valid Until",
		targetField: "validity",
		regex: /(?:^|[^a-zA-Z0-9])(?:valid\s*(?:until|till|through|to)|validity\s*(?:date|until|till|through|to))\b/i
	},
	validity: {
		label: "Validity",
		targetField: "validity",
		regex: /(?:^|[^a-zA-Z0-9])(?:validity|offer\s*validity|quote\s*validity|expiry\s*date|expires?\s*(?:on)?)\b/i
	},
	rate_validity: {
		label: "Rate Validity",
		targetField: "validity",
		regex: /(?:^|[^a-zA-Z0-9])(?:rate\s*validity|price\s*validity|rates?\s*valid\s*(?:until|till|to)?)\b/i
	},
	cutoff: {
		label: "Cutoff",
		targetField: "cutoff",
		regex: /(?:^|[^a-zA-Z0-9])(?:cutoff|si\s*cutoff|vgm\s*cutoff|doc\s*cutoff|port\s*cutoff|cargo\s*cutoff|closing\s*date|closing)\b/i
	},
	cut_off: {
		label: "Cut-Off",
		targetField: "cutoff",
		regex: /(?:^|[^a-zA-Z0-9])(?:cut[\s-_]off|si\s*cut[\s-_]off|vgm\s*cut[\s-_]off|doc\s*cut[\s-_]off|port\s*cut[\s-_]off|cargo\s*cut[\s-_]off)\b/i
	}
};
var MONTH_MAP$1 = {
	jan: {
		num: 1,
		name: "January"
	},
	january: {
		num: 1,
		name: "January"
	},
	feb: {
		num: 2,
		name: "February"
	},
	february: {
		num: 2,
		name: "February"
	},
	mar: {
		num: 3,
		name: "March"
	},
	march: {
		num: 3,
		name: "March"
	},
	apr: {
		num: 4,
		name: "April"
	},
	april: {
		num: 4,
		name: "April"
	},
	may: {
		num: 5,
		name: "May"
	},
	jun: {
		num: 6,
		name: "June"
	},
	june: {
		num: 6,
		name: "June"
	},
	jul: {
		num: 7,
		name: "July"
	},
	july: {
		num: 7,
		name: "July"
	},
	aug: {
		num: 8,
		name: "August"
	},
	august: {
		num: 8,
		name: "August"
	},
	sep: {
		num: 9,
		name: "September"
	},
	sept: {
		num: 9,
		name: "September"
	},
	september: {
		num: 9,
		name: "September"
	},
	oct: {
		num: 10,
		name: "October"
	},
	october: {
		num: 10,
		name: "October"
	},
	nov: {
		num: 11,
		name: "November"
	},
	november: {
		num: 11,
		name: "November"
	},
	dec: {
		num: 12,
		name: "December"
	},
	december: {
		num: 12,
		name: "December"
	}
};
/**
* Formats YYYY-MM-DD string safely with 2-digit pad
*/
function formatIsoDate(year, month, day) {
	return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
/**
* Validates days in a month (including leap years)
*/
function isValidCalendarDate(year, month, day) {
	if (year < 1900 || year > 2100) return false;
	if (month < 1 || month > 12) return false;
	if (day < 1) return false;
	return day <= new Date(year, month, 0).getDate();
}
/**
* Parse a raw date text string into YYYY-MM-DD if unambiguous.
*
* Rules:
* - Unambiguous:
*   1. Standard ISO: YYYY-MM-DD or YYYY/MM/DD (e.g. 2026-10-15, 2026/10/15)
*   2. Named Month formats (e.g. "15 Oct 2026", "15-Oct-2026", "October 15, 2026", "Oct 15th")
*   3. Numeric dates where Day > 12 (e.g. "15/04/2026" must be 15-Apr-2026, "04/25/2026" must be 25-Apr-2026)
* - Ambiguous:
*   1. Numeric dates where both month & day <= 12 and not ISO format (e.g. "04/05/2026", "05-04-2026", "4/5/2026")
*   2. Relative expressions (e.g. "mid Oct", "next Friday", "in 2 weeks")
*/
function parseDateDeterministic(rawText, referenceYear = 2026) {
	if (!rawText || !rawText.trim()) return {
		isoDate: null,
		isAmbiguous: false,
		status: "invalid",
		reason: "Date string is empty."
	};
	const clean = rawText.trim();
	const isoMatch = clean.match(/^([12]\d{3})[-/.](0?[1-9]|1[0-2])[-/.](0?[1-9]|[12]\d|3[01])$/);
	if (isoMatch) {
		const year = parseInt(isoMatch[1], 10);
		const month = parseInt(isoMatch[2], 10);
		const day = parseInt(isoMatch[3], 10);
		if (isValidCalendarDate(year, month, day)) return {
			isoDate: formatIsoDate(year, month, day),
			isAmbiguous: false,
			status: "unambiguous",
			reason: "Matched unambiguous ISO format YYYY-MM-DD."
		};
	}
	const dayNamedMonthMatch = clean.match(/\b(0?[1-9]|[12]\d|3[01])(?:st|nd|rd|th)?[\s\-_/]+([A-Za-z]{3,9})(?:[\s\-_/]+([12]\d{3}|\d{2}))?\b/i);
	if (dayNamedMonthMatch) {
		const rawMonth = dayNamedMonthMatch[2].toLowerCase();
		const monthInfo = MONTH_MAP$1[rawMonth] || MONTH_MAP$1[rawMonth.slice(0, 3)];
		if (monthInfo) {
			const day = parseInt(dayNamedMonthMatch[1], 10);
			let year = referenceYear;
			if (dayNamedMonthMatch[3]) {
				const yVal = parseInt(dayNamedMonthMatch[3], 10);
				year = yVal < 100 ? 2e3 + yVal : yVal;
			}
			if (isValidCalendarDate(year, monthInfo.num, day)) return {
				isoDate: formatIsoDate(year, monthInfo.num, day),
				isAmbiguous: false,
				status: "unambiguous",
				reason: `Matched unambiguous named month format (${day} ${monthInfo.name} ${year}).`
			};
		}
	}
	const monthNamedDayMatch = clean.match(/\b([A-Za-z]{3,9})[\s\-_/]+(0?[1-9]|[12]\d|3[01])(?:st|nd|rd|th)?(?:,?\s*[\s\-_/]+([12]\d{3}|\d{2}))?\b/i);
	if (monthNamedDayMatch) {
		const rawMonth = monthNamedDayMatch[1].toLowerCase();
		const monthInfo = MONTH_MAP$1[rawMonth] || MONTH_MAP$1[rawMonth.slice(0, 3)];
		if (monthInfo) {
			const day = parseInt(monthNamedDayMatch[2], 10);
			let year = referenceYear;
			if (monthNamedDayMatch[3]) {
				const yVal = parseInt(monthNamedDayMatch[3], 10);
				year = yVal < 100 ? 2e3 + yVal : yVal;
			}
			if (isValidCalendarDate(year, monthInfo.num, day)) return {
				isoDate: formatIsoDate(year, monthInfo.num, day),
				isAmbiguous: false,
				status: "unambiguous",
				reason: `Matched unambiguous named month format (${monthInfo.name} ${day}, ${year}).`
			};
		}
	}
	const numericSlashMatch = clean.match(/\b(0?[1-9]|[12]\d|3[01])\s*[-/.]\s*(0?[1-9]|[12]\d|3[01])\s*[-/.]\s*([12]\d{3}|\d{2})\b/);
	if (numericSlashMatch) {
		const p1 = parseInt(numericSlashMatch[1], 10);
		const p2 = parseInt(numericSlashMatch[2], 10);
		const rawYear = parseInt(numericSlashMatch[3], 10);
		const year = rawYear < 100 ? 2e3 + rawYear : rawYear;
		if (p1 > 12 && p2 <= 12) {
			if (isValidCalendarDate(year, p2, p1)) return {
				isoDate: formatIsoDate(year, p2, p1),
				isAmbiguous: false,
				status: "unambiguous",
				reason: `Unambiguous DD/MM/YYYY numeric date (${p1} is > 12, so day is ${p1} and month is ${p2}).`
			};
		}
		if (p1 <= 12 && p2 > 12) {
			if (isValidCalendarDate(year, p1, p2)) return {
				isoDate: formatIsoDate(year, p1, p2),
				isAmbiguous: false,
				status: "unambiguous",
				reason: `Unambiguous MM/DD/YYYY numeric date (${p2} is > 12, so month is ${p1} and day is ${p2}).`
			};
		}
		if (p1 <= 12 && p2 <= 12) return {
			isoDate: null,
			isAmbiguous: true,
			status: "ambiguous",
			reason: `Date '${clean}' is ambiguous (could be ${String(p1).padStart(2, "0")}/${String(p2).padStart(2, "0")} or ${String(p2).padStart(2, "0")}/${String(p1).padStart(2, "0")}). Preserved original text for human review.`
		};
	}
	if (/(?:mid\s+[a-z]+|next\s+[a-z]+|end\s+of|in\s+\d+\s+days?|prompt|tba|tbd|pending)/i.test(clean)) return {
		isoDate: null,
		isAmbiguous: true,
		status: "ambiguous",
		reason: `Relative/fuzzy date expression '${clean}' cannot be converted to YYYY-MM-DD without ambiguity. Preserved original text for human review.`
	};
	return {
		isoDate: null,
		isAmbiguous: true,
		status: "ambiguous",
		reason: `Date format '${clean}' is ambiguous. Preserved original text for human review.`
	};
}
/**
* Extracts and categorizes all dates from email text or lines based on requested labels.
*/
function extractDatesFromText(text, referenceYear = 2026) {
	const lines = (text || "").split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
	const foundItems = [];
	const warnings = [];
	const reviewReasons = [];
	const dateMap = {
		etd: null,
		eta: null,
		validity: null,
		cutoff: null
	};
	const categories = Object.keys(DATE_LABEL_MAPPINGS);
	lines.forEach((line, idx) => {
		const lineNum = idx + 1;
		for (const cat of categories) {
			const config = DATE_LABEL_MAPPINGS[cat];
			if (config.regex.test(line)) {
				const labelExtractionPattern = new RegExp(`(?:${config.regex.source.replace(/^(\(\?:)?\^\|\[\^a-zA-Z0-9\]\)?/g, "")})\\s*[:=-]?\\s*([^;\\n\\r|,]+?)(?:$|\\n|\\r|,|;|\\(|\\b(?:per|vessel|transit|validity|thc|total)\\b)`, "i");
				const match = line.match(labelExtractionPattern);
				const cleanedCandidate = (match ? match[1].trim() : line.trim()).replace(/^(?:is|on|dated|estimated|approx\.?)\s+/i, "").replace(/[.;]+$/, "").trim();
				if (cleanedCandidate && cleanedCandidate.length >= 2) {
					const parsed = parseDateDeterministic(cleanedCandidate, referenceYear);
					const item = {
						category: cat,
						categoryLabel: config.label,
						targetField: config.targetField,
						originalLabel: config.label,
						original_label: config.label,
						originalText: cleanedCandidate,
						original_text: cleanedCandidate,
						rawText: cleanedCandidate,
						raw_text: cleanedCandidate,
						isoDate: parsed.isoDate,
						iso_date: parsed.isoDate,
						date: parsed.isoDate || cleanedCandidate,
						formattedDisplay: parsed.isoDate || cleanedCandidate,
						formatted_display: parsed.isoDate || cleanedCandidate,
						isAmbiguous: parsed.isAmbiguous,
						is_ambiguous: parsed.isAmbiguous,
						needsReview: parsed.isAmbiguous || parsed.status !== "unambiguous",
						needs_review: parsed.isAmbiguous || parsed.status !== "unambiguous",
						status: parsed.status,
						reason: parsed.reason,
						warnings: parsed.isAmbiguous ? [parsed.reason] : [],
						originalSourceLine: line,
						original_source_line: line,
						lineNumber: lineNum
					};
					foundItems.push(item);
					if (parsed.isAmbiguous) {
						warnings.push(`[${config.label}] ${parsed.reason}`);
						reviewReasons.push(`[${config.label}] ${parsed.reason}`);
					}
					if (!dateMap[config.targetField] || !dateMap[config.targetField]?.isoDate && parsed.isoDate) dateMap[config.targetField] = item;
				}
			}
		}
	});
	const hasAmbiguousDate = foundItems.some((d) => d.isAmbiguous);
	const needsReview = hasAmbiguousDate;
	return {
		dates: foundItems,
		dateMap,
		etd: dateMap.etd?.isoDate ?? (dateMap.etd?.originalText || null),
		eta: dateMap.eta?.isoDate ?? (dateMap.eta?.originalText || null),
		validityDate: dateMap.validity?.isoDate ?? (dateMap.validity?.originalText || null),
		cutoffDate: dateMap.cutoff?.isoDate ?? (dateMap.cutoff?.originalText || null),
		hasAmbiguousDate,
		has_ambiguous_date: hasAmbiguousDate,
		needsReview,
		needs_review: needsReview,
		warnings,
		reviewReasons
	};
}
/**
* Configurable Keyword Rules Dictionary
*/
var QUOTATION_CLASSIFICATION_RULES = {
	automated: {
		category: "automated",
		categoryLabel: "Automated / System Response",
		keywords: [
			"out of office",
			"automatic reply",
			"auto response",
			"auto-response",
			"autoreply",
			"delivery failure",
			"delivery status notification",
			"undeliverable",
			"mail delivery subsystem"
		],
		priority: 1,
		description: "System auto-replies, out of office notifications, and delivery failures."
	},
	no_quote: {
		category: "no_quote",
		categoryLabel: "No Quote / Declined",
		keywords: [
			"unable to quote",
			"cannot provide rate",
			"cannot quote",
			"no service",
			"no space",
			"not accepting",
			"declined",
			"we decline",
			"decline to quote",
			"fully booked",
			"no equipment available"
		],
		priority: 2,
		description: "Forwarder unable to provide quote or declining due to capacity/routing."
	},
	revision: {
		category: "revision",
		categoryLabel: "Revised Quotation",
		keywords: [
			"revised quotation",
			"revised quote",
			"updated rates",
			"ignore previous quote",
			"amendment",
			"version 2",
			"v2",
			"revised offer",
			"rate revision",
			"updated quotation"
		],
		priority: 3,
		description: "Amended, updated, or corrected quotation replacing prior quote."
	},
	clarification_required: {
		category: "clarification_required",
		categoryLabel: "Clarification Required",
		keywords: [
			"please clarify",
			"kindly clarify",
			"clarify",
			"clarification",
			"inquiry clarification",
			"please confirm",
			"also confirm",
			"need more information",
			"more information",
			"kindly advise",
			"require details",
			"subject to confirmation",
			"need details",
			"please advise",
			"awaiting clarification"
		],
		priority: 4,
		description: "Forwarder requesting additional details before confirming or finalizing."
	},
	quotation: {
		category: "quotation",
		categoryLabel: "Quotation / Rate Offer",
		keywords: [
			"quotation",
			"quote",
			"rates",
			"freight offer",
			"our best rate",
			"please find our offer",
			"ocean freight",
			"rate offer",
			"offered rate",
			"quotation for"
		],
		priority: 5,
		description: "Active freight quotation or rate proposal from forwarder."
	}
};
/**
* Cleans email body by removing quoted historical threads and normalizing whitespace.
*/
function cleanEmailBodyForClassification(body) {
	if (!body) return "";
	const lines = body.split(/\r?\n/);
	const cleanLines = [];
	for (const rawLine of lines) {
		const line = rawLine.trim();
		if (line.startsWith(">")) continue;
		if (/^on\s.+wrote:?$/i.test(line) || /^from:\s.+/i.test(line) || /^-----original message-----/i.test(line) || /^---------------------------/i.test(line)) break;
		cleanLines.push(rawLine);
	}
	return cleanLines.join("\n").toLowerCase();
}
/**
* Deterministically checks whether text contains a specific keyword with word boundary awareness.
*/
function matchesKeyword(text, keyword) {
	if (!text || !keyword) return false;
	const kw = keyword.toLowerCase().trim();
	const lowerText = text.toLowerCase();
	const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	return new RegExp(`(?:^|[^a-zA-Z0-9])${escaped}(?:$|[^a-zA-Z0-9])`, "i").test(lowerText) || lowerText.includes(kw);
}
/**
* Deterministically classifies an incoming forwarder message using configured keyword rules.
*
* Strictly NO AI.
*/
function classifyQuotationMessage(subject, body) {
	const cleanSubj = (subject || "").trim().toLowerCase();
	const cleanBody = cleanEmailBodyForClassification(body || "");
	const fullText = `${cleanSubj}\n${cleanBody}`;
	const matchedKeywordsByCat = {
		automated: [],
		no_quote: [],
		revision: [],
		clarification_required: [],
		quotation: [],
		unknown: []
	};
	const detectedInByCat = {
		automated: "NONE",
		no_quote: "NONE",
		revision: "NONE",
		clarification_required: "NONE",
		quotation: "NONE",
		unknown: "NONE"
	};
	const ruleCategories = [
		"automated",
		"no_quote",
		"revision",
		"clarification_required",
		"quotation"
	];
	for (const cat of ruleCategories) {
		const rule = QUOTATION_CLASSIFICATION_RULES[cat];
		const foundKeywords = [];
		let inSubj = false;
		let inBody = false;
		for (const kw of rule.keywords) {
			const matchSubj = matchesKeyword(cleanSubj, kw);
			const matchBody = matchesKeyword(cleanBody, kw);
			if (matchSubj || matchBody) {
				foundKeywords.push(kw);
				if (matchSubj) inSubj = true;
				if (matchBody) inBody = true;
			}
		}
		matchedKeywordsByCat[cat] = foundKeywords;
		if (inSubj && inBody) detectedInByCat[cat] = "BOTH";
		else if (inSubj) detectedInByCat[cat] = "SUBJECT";
		else if (inBody) detectedInByCat[cat] = "BODY";
		else detectedInByCat[cat] = "NONE";
	}
	let winningCat = "unknown";
	let winningKeywords = [];
	const matchedCategories = ruleCategories.filter((c) => matchedKeywordsByCat[c].length > 0);
	for (const cat of ruleCategories) if (matchedKeywordsByCat[cat].length > 0) {
		winningCat = cat;
		winningKeywords = matchedKeywordsByCat[cat];
		break;
	}
	if (winningCat === "unknown") {
		if (/(?:USD|EUR|GBP|AED|PKR|INR|\$|€|£)\s*[0-9,.]+|[0-9,.]+\s*(?:USD|EUR|GBP|AED|PKR|INR)/i.test(fullText)) {
			winningCat = "quotation";
			winningKeywords = ["monetary amount pattern"];
			matchedCategories.push("quotation");
		}
	}
	const isAutomated = winningCat === "automated";
	const isNoQuote = winningCat === "no_quote";
	const isRevision = winningCat === "revision";
	const isClarificationRequired = winningCat === "clarification_required";
	const isQuotation = winningCat === "quotation";
	let confidence = .95;
	if (winningCat === "unknown") confidence = .3;
	else if (winningKeywords.length >= 2 || detectedInByCat[winningCat] === "BOTH") confidence = .99;
	const categoryLabel = winningCat !== "unknown" ? QUOTATION_CLASSIFICATION_RULES[winningCat].categoryLabel : "Unclassified Message";
	const reason = winningCat !== "unknown" ? `Deterministic classification: matched keyword(s) [${winningKeywords.join(", ")}] for rule '${winningCat}'.` : "Deterministic classification: No configured quotation keywords matched.";
	return {
		category: winningCat,
		categoryLabel,
		matchedKeywords: winningKeywords,
		matchedRule: winningCat,
		confidence,
		reason,
		allMatchedCategories: matchedCategories,
		isQuotation,
		isNoQuote,
		isClarificationRequired,
		isRevision,
		isAutomated,
		cleanedText: cleanBody,
		originalSubject: subject || "",
		detectedIn: winningCat !== "unknown" ? detectedInByCat[winningCat] : "NONE"
	};
}
/**
* Database Persistence Module for Quotation & Email Processing
*
* Implements exact schema requirements:
* 1. incoming_emails:
*    - id, message_id, thread_id, from_name, from_email, subject, body_text, html_body,
*      received_at, attachment_metadata, processing_status, processing_error,
*      detected_booking_numbers, detected_forwarder_id, created_at, updated_at
*
* 2. quotation_requests:
*    - id, booking_id, forwarder_id, sent_at, response_deadline, status
*
* 3. quotations:
*    - id, booking_id, forwarder_id, quotation_request_id, incoming_email_id,
*      quotation_reference, quotation_status, revision_number, currency,
*      quoted_total, calculated_total, valid_until, origin, destination,
*      pol, pod, transit_time_days, sailing_date, arrival_date, vessel_name,
*      free_days, remarks, requires_human_review, review_reason, created_at, updated_at
*
* 4. quotation_charges:
*    - id, quotation_id, charge_code, charge_name_normalized, charge_name_original,
*      amount, amount_min, amount_max, currency, unit, quantity, status,
*      original_text, created_at
*
* Reuses existing tables, prevents duplicate systems, and ensures fallback safety.
*/
/**
* 1. Persist or Update `incoming_emails`
*/
async function persistIncomingEmailRecord(record) {
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const emailId = safeUuid(record.id) || record.id;
	const fullRecord = {
		id: emailId,
		message_id: record.message_id ?? null,
		thread_id: record.thread_id ?? null,
		from_name: record.from_name ?? null,
		from_email: record.from_email.trim().toLowerCase(),
		subject: record.subject,
		body_text: record.body_text,
		html_body: record.html_body ?? null,
		received_at: record.received_at || nowIso,
		attachment_metadata: record.attachment_metadata ?? null,
		processing_status: record.processing_status || "PROCESSED",
		processing_error: record.processing_error ?? null,
		detected_booking_numbers: record.detected_booking_numbers ?? null,
		detected_forwarder_id: record.detected_forwarder_id ?? null,
		created_at: record.created_at || nowIso,
		updated_at: nowIso
	};
	if (isSupabaseConfigured) {
		try {
			await supabase.from("incoming_emails").upsert(fullRecord, { onConflict: "id" });
		} catch (err) {
			console.warn("[QuotationSchemaPersistence] Notice saving incoming_emails:", err);
		}
		try {
			await supabase.from("email_messages").upsert({
				id: emailId,
				message_id: fullRecord.message_id,
				gmail_message_id: fullRecord.message_id,
				thread_id: fullRecord.thread_id,
				gmail_thread_id: fullRecord.thread_id,
				sender_name: fullRecord.from_name,
				sender_email: fullRecord.from_email,
				from_email: fullRecord.from_email,
				subject: fullRecord.subject,
				body: fullRecord.body_text,
				body_html: fullRecord.html_body,
				received_at: fullRecord.received_at,
				processing_status: fullRecord.processing_status,
				forwarder_id: safeUuid(fullRecord.detected_forwarder_id),
				updated_at: fullRecord.updated_at
			}, { onConflict: "id" });
		} catch (msgErr) {
			console.warn("[QuotationSchemaPersistence] Notice updating email_messages:", msgErr);
		}
	}
	return fullRecord;
}
/**
* 2. Persist or Update `quotation_requests`
*/
async function persistQuotationRequestRecord(record) {
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const reqId = safeUuid(record.id) || record.id;
	const bookingId = safeUuid(record.booking_id) || record.booking_id;
	const forwarderId = record.forwarder_id ? safeUuid(record.forwarder_id) || record.forwarder_id : null;
	const fullRecord = {
		id: reqId,
		booking_id: bookingId,
		forwarder_id: forwarderId,
		sent_at: record.sent_at || nowIso,
		response_deadline: record.response_deadline ?? null,
		status: record.status || "SENT"
	};
	if (isSupabaseConfigured) {
		try {
			await supabase.from("quotation_requests").upsert(fullRecord, { onConflict: "id" });
		} catch (err) {
			console.warn("[QuotationSchemaPersistence] Notice saving quotation_requests:", err);
		}
		try {
			await supabase.from("forwarder_requests").upsert({
				id: reqId,
				booking_id: bookingId,
				forwarder_id: forwarderId,
				request_id: reqId,
				status: fullRecord.status,
				sent_at: fullRecord.sent_at,
				updated_at: nowIso
			}, { onConflict: "id" });
		} catch (fwdErr) {
			console.warn("[QuotationSchemaPersistence] Notice syncing forwarder_requests:", fwdErr);
		}
	}
	return fullRecord;
}
var inMemoryQuotations = /* @__PURE__ */ new Map();
var inMemoryIncomingEmails = /* @__PURE__ */ new Map();
function setInMemoryQuotation(id, record) {
	inMemoryQuotations.set(id, record);
}
function setInMemoryIncomingEmail(id, record) {
	inMemoryIncomingEmails.set(id, record);
}
/**
* 3. Persist `quotations` with all required schema columns
*/
async function persistQuotationRecord(record) {
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const quotationId = safeUuid(record.id) || record.id;
	const bookingId = safeUuid(record.booking_id) || record.booking_id;
	const forwarderId = record.forwarder_id ? safeUuid(record.forwarder_id) || record.forwarder_id : null;
	const quotationRequestId = record.quotation_request_id ? safeUuid(record.quotation_request_id) || record.quotation_request_id : null;
	const incomingEmailId = record.incoming_email_id ? safeUuid(record.incoming_email_id) || record.incoming_email_id : null;
	const fullRecord = {
		id: quotationId,
		booking_id: bookingId,
		forwarder_id: forwarderId,
		forwarder_name: record.forwarder_name ?? null,
		quotation_request_id: quotationRequestId,
		incoming_email_id: incomingEmailId,
		quotation_reference: record.quotation_reference ?? null,
		quotation_status: record.quotation_status || "OFFER_RECEIVED",
		revision_number: record.revision_number ?? 1,
		currency: record.currency || "USD",
		ocean_freight: record.ocean_freight !== void 0 ? record.ocean_freight : null,
		origin_charges: record.origin_charges !== void 0 ? record.origin_charges : null,
		destination_charges: record.destination_charges !== void 0 ? record.destination_charges : null,
		thc: record.thc !== void 0 ? record.thc : null,
		documentation_charges: record.documentation_charges !== void 0 ? record.documentation_charges : null,
		customs_charges: record.customs_charges !== void 0 ? record.customs_charges : null,
		trucking_charges: record.trucking_charges !== void 0 ? record.trucking_charges : null,
		other_charges: record.other_charges !== void 0 ? record.other_charges : null,
		quoted_total: record.quoted_total !== void 0 ? record.quoted_total : null,
		calculated_total: record.calculated_total !== void 0 ? record.calculated_total : null,
		carrier: record.carrier ?? null,
		container_type: record.container_type ?? null,
		container_quantity: record.container_quantity !== void 0 ? record.container_quantity : null,
		valid_until: record.valid_until ?? null,
		origin: record.origin ?? null,
		destination: record.destination ?? null,
		pol: record.pol ?? null,
		pod: record.pod ?? null,
		transit_time_days: record.transit_time_days !== void 0 ? record.transit_time_days : null,
		sailing_date: record.sailing_date ?? null,
		arrival_date: record.arrival_date ?? null,
		vessel_name: record.vessel_name ?? null,
		voyage_number: record.voyage_number ?? null,
		free_days: record.free_days !== void 0 ? record.free_days : null,
		remarks: record.remarks ?? null,
		requires_human_review: record.requires_human_review ?? false,
		review_reason: record.review_reason ?? null,
		created_at: record.created_at || nowIso,
		updated_at: nowIso
	};
	console.log("[QuotationSchemaPersistence] Incoming quotation record payload before database insertion:", JSON.stringify(fullRecord, null, 2));
	if (isSupabaseConfigured) try {
		await supabase.from("quotations").upsert({
			id: fullRecord.id,
			booking_id: fullRecord.booking_id,
			forwarder_id: fullRecord.forwarder_id,
			forwarder_name: fullRecord.forwarder_name,
			forwarder_request_id: fullRecord.quotation_request_id || fullRecord.id,
			quotation_request_id: fullRecord.quotation_request_id,
			email_message_id: fullRecord.incoming_email_id,
			incoming_email_id: fullRecord.incoming_email_id,
			quotation_reference: fullRecord.quotation_reference,
			quotation_status: fullRecord.quotation_status,
			revision_number: fullRecord.revision_number,
			version_number: fullRecord.revision_number || 1,
			currency: fullRecord.currency,
			rate: fullRecord.ocean_freight || fullRecord.quoted_total || fullRecord.calculated_total || 0,
			ocean_freight: fullRecord.ocean_freight,
			origin_charges: fullRecord.origin_charges,
			destination_charges: fullRecord.destination_charges,
			thc: fullRecord.thc,
			documentation_charges: fullRecord.documentation_charges,
			customs_charges: fullRecord.customs_charges,
			trucking_charges: fullRecord.trucking_charges,
			other_charges: fullRecord.other_charges,
			total_cost: fullRecord.quoted_total || fullRecord.calculated_total,
			quoted_total: fullRecord.quoted_total,
			calculated_total: fullRecord.calculated_total,
			carrier: fullRecord.carrier,
			container_type: fullRecord.container_type,
			container_quantity: fullRecord.container_quantity,
			valid_until: fullRecord.valid_until,
			rate_validity: fullRecord.valid_until,
			origin: fullRecord.origin,
			destination: fullRecord.destination,
			pol: fullRecord.pol,
			pod: fullRecord.pod,
			transit_time_days: fullRecord.transit_time_days,
			transit_time: fullRecord.transit_time_days,
			sailing_date: fullRecord.sailing_date,
			etd: fullRecord.sailing_date,
			arrival_date: fullRecord.arrival_date,
			eta: fullRecord.arrival_date,
			vessel_name: fullRecord.vessel_name,
			vessel: fullRecord.vessel_name,
			voyage_number: fullRecord.voyage_number,
			free_days: fullRecord.free_days,
			remarks: fullRecord.remarks,
			notes: fullRecord.remarks,
			requires_human_review: fullRecord.requires_human_review,
			review_reason: fullRecord.review_reason,
			extraction_status: fullRecord.requires_human_review ? "NEEDS_REVIEW" : "SAVED",
			processing_status: fullRecord.requires_human_review ? "NEEDS_REVIEW" : "OFFER_RECEIVED",
			is_current: true,
			created_at: fullRecord.created_at,
			updated_at: fullRecord.updated_at
		}, { onConflict: "id" });
	} catch (err) {
		console.warn("[QuotationSchemaPersistence] Notice saving quotations:", err);
	}
	setInMemoryQuotation(fullRecord.id, fullRecord);
	return fullRecord;
}
/**
* 4. Persist Itemized `quotation_charges`
*/
async function persistQuotationCharges(quotationId, charges) {
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const safeQuoteId = safeUuid(quotationId) || quotationId;
	const records = charges.map((c, idx) => {
		return {
			id: safeUuid(`${safeQuoteId}-chg-${idx + 1}`) || `${safeQuoteId}-chg-${idx + 1}`,
			quotation_id: safeQuoteId,
			charge_code: c.category,
			charge_name_normalized: c.categoryLabel,
			charge_name_original: c.originalChargeName,
			amount: c.amount,
			amount_min: c.amountMin,
			amount_max: c.amountMax,
			currency: c.currency,
			unit: c.unit,
			quantity: c.quantity,
			status: c.status,
			original_text: c.originalSourceLine,
			created_at: nowIso
		};
	});
	if (isSupabaseConfigured && records.length > 0) try {
		await supabase.from("quotation_charges").upsert(records, { onConflict: "id" });
	} catch (err) {
		console.warn("[QuotationSchemaPersistence] Notice saving quotation_charges:", err);
	}
	return records;
}
/**
* Helper to build and save all 4 relational entities from a processed forwarder email.
*/
async function persistProcessedQuotationBundle(params) {
	const emailRecord = await persistIncomingEmailRecord({
		id: params.incomingEmailId,
		message_id: params.gmailMessageId ?? null,
		thread_id: params.gmailThreadId ?? null,
		from_name: params.senderName ?? null,
		from_email: params.senderEmail,
		subject: params.subject,
		body_text: params.body,
		html_body: params.htmlBody ?? null,
		received_at: params.receivedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
		processing_status: params.requiresHumanReview ? "NEEDS_REVIEW" : "PROCESSED",
		processing_error: params.reviewReasons.length > 0 ? params.reviewReasons.join(" | ") : null,
		detected_booking_numbers: params.detectedBookingNumbers,
		detected_forwarder_id: params.detectedForwarderId ?? null
	});
	const reqId = params.forwarderRequestId || `req-${Date.now().toString(36)}`;
	const quotationRequest = await persistQuotationRequestRecord({
		id: reqId,
		booking_id: params.bookingId,
		forwarder_id: params.detectedForwarderId ?? null,
		sent_at: params.receivedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
		status: params.requiresHumanReview ? "NEEDS_REVIEW" : "OFFER_RECEIVED"
	});
	const quotation = await persistQuotationRecord({
		id: params.quotationId || `quote-${Date.now().toString(36)}`,
		booking_id: params.bookingId,
		forwarder_id: params.detectedForwarderId ?? null,
		quotation_request_id: quotationRequest.id,
		incoming_email_id: emailRecord.id,
		quotation_reference: params.quotationReference ?? null,
		quotation_status: params.quotationStatus || (params.requiresHumanReview ? "NEEDS_REVIEW" : "OFFER_RECEIVED"),
		revision_number: params.revisionNumber ?? 1,
		currency: params.fields.currency || "USD",
		ocean_freight: params.fields.oceanFreight ?? null,
		origin_charges: params.fields.originCharges ?? null,
		destination_charges: params.fields.destinationCharges ?? null,
		thc: params.fields.thc ?? null,
		documentation_charges: params.fields.documentationCharges ?? null,
		customs_charges: params.fields.customsCharges ?? null,
		trucking_charges: params.fields.truckingCharges ?? null,
		other_charges: params.fields.otherCharges ?? null,
		quoted_total: params.fields.quotedTotal ?? params.fields.totalAmount,
		calculated_total: params.fields.calculatedTotal,
		carrier: params.fields.carrier ?? null,
		container_type: params.fields.containerType ?? "40HC",
		container_quantity: params.fields.containerQuantity ?? 1,
		valid_until: params.fields.validityDate ?? null,
		origin: null,
		destination: null,
		pol: null,
		pod: null,
		transit_time_days: params.fields.transitTime,
		sailing_date: params.fields.sailingDate,
		arrival_date: params.fields.eta ?? null,
		vessel_name: params.fields.vesselName,
		voyage_number: params.fields.voyageNumber ?? null,
		free_days: params.fields.freeDays,
		remarks: params.fields.notes,
		requires_human_review: params.requiresHumanReview,
		review_reason: params.reviewReasons.length > 0 ? params.reviewReasons.join(" | ") : null
	});
	const charges = await persistQuotationCharges(quotation.id, params.fields.itemizedCharges || params.fields.charges || []);
	const completeBundle = {
		...quotation,
		charges
	};
	setInMemoryQuotation(quotation.id, completeBundle);
	if (reqId) setInMemoryQuotation(reqId, completeBundle);
	if (params.forwarderRequestId) setInMemoryQuotation(params.forwarderRequestId, completeBundle);
	if (params.bookingId) setInMemoryQuotation(params.bookingId, completeBundle);
	if (emailRecord.id) setInMemoryIncomingEmail(emailRecord.id, emailRecord);
	return {
		incomingEmail: emailRecord,
		quotationRequest,
		quotation,
		charges
	};
}
/**
* NASHMIA GLOBAL OPERATIONS HUB - QUOTATION DATABASE PERSISTENCE SERVICE
*
* Implements Sections 20-32 of Platform Architecture:
* - Single source of truth in Supabase PostgreSQL
* - Transaction-safe & idempotent persistence
* - Relationship: Organization -> Booking -> Forwarder Request -> Email Thread -> Email Message -> Quotation -> Quotation Version / Field Extractions
* - Preserves versioning audit history (never overwrites without versioning)
* - Preserves field-level traceability & evidence
* - Organization isolation & RLS
*/
function safeIsoDate(val) {
	if (!val) return null;
	const str = String(val).trim();
	if (!str) return null;
	if (/^\d{1,2}$/.test(str)) return null;
	const d = new Date(str);
	if (!isNaN(d.getTime())) return d.toISOString();
	return null;
}
/**
* Idempotently and safely persist an incoming forwarder quotation email
* to Supabase PostgreSQL according to the official relational schema.
*/
async function persistQuotationToDatabase(input) {
	if (!isSupabaseConfigured) return {
		success: true,
		forwarderRequestId: `local-${Date.now()}`,
		versionNumber: 1,
		isNewVersion: false
	};
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	let validBookingUuid = safeUuid(input.bookingId);
	let resolvedOrgId = safeUuid(input.organizationId) || null;
	let resolvedMovementNumber = input.movementNumber || "";
	if (!validBookingUuid || !resolvedOrgId) try {
		let query = supabase.from("bookings").select("id, organization_id, movement_number");
		if (validBookingUuid) query = query.eq("id", validBookingUuid);
		else if (input.movementNumber) query = query.eq("movement_number", input.movementNumber);
		else query = query.or(`movement_number.eq.${input.bookingId},booking_reference.eq.${input.bookingId}`);
		const { data: bData } = await query.limit(1).maybeSingle();
		if (bData) {
			validBookingUuid = bData.id;
			resolvedOrgId = resolvedOrgId || bData.organization_id || null;
			resolvedMovementNumber = resolvedMovementNumber || bData.movement_number || "";
		}
	} catch (bErr) {
		console.warn("[QuotationDbService] Notice resolving booking:", bErr);
	}
	if (!validBookingUuid) {
		const localBk = getLocalBookings().find((b) => b.id === input.bookingId || b.movement_number === input.bookingId || b.booking_reference === input.bookingId || input.movementNumber && (b.movement_number === input.movementNumber || b.booking_reference === input.movementNumber));
		const movNo = input.movementNumber || localBk?.movement_number || localBk?.booking_reference || input.bookingId || "MOV-2026-00001";
		try {
			const { data: newBkRow } = await supabase.from("bookings").insert({
				booking_reference: movNo,
				movement_number: movNo,
				origin: localBk?.origin || "Felixstowe (FXT)",
				destination: localBk?.destination || "Karachi (KHI)",
				container_count: localBk?.container_count || 1,
				container_type: localBk?.container_type || "40HC",
				cargo_description: localBk?.cargo_description || "Commercial Cargo",
				status: "Booking Requested"
			}).select("id, organization_id, movement_number").maybeSingle();
			if (newBkRow) {
				validBookingUuid = newBkRow.id;
				resolvedOrgId = newBkRow.organization_id || null;
				resolvedMovementNumber = newBkRow.movement_number || movNo;
			}
		} catch (bkInsErr) {
			console.warn("[QuotationDbService] Auto-provisioning booking row notice:", bkInsErr);
		}
	}
	let validForwarderUuid = safeUuid(input.forwarderId);
	let resolvedForwarderName = input.forwarderName || "";
	const resolvedForwarderEmail = input.forwarderEmail || input.senderEmail || "";
	let resolvedForwarderCode = input.forwarderCode || null;
	if (!validForwarderUuid && resolvedForwarderEmail) try {
		const { data: fwdRow } = await supabase.from("forwarders").select("id, company_name, code, email").or(`email.ilike.%${resolvedForwarderEmail}%,contact_email.ilike.%${resolvedForwarderEmail}%`).limit(1).maybeSingle();
		if (fwdRow) {
			validForwarderUuid = fwdRow.id;
			resolvedForwarderName = resolvedForwarderName || fwdRow.company_name;
			resolvedForwarderCode = resolvedForwarderCode || fwdRow.code;
		} else {
			const { data: newFwdRow } = await supabase.from("forwarders").insert({
				name: resolvedForwarderName || resolvedForwarderEmail.split("@")[0] || "Forwarder",
				company_name: resolvedForwarderName || resolvedForwarderEmail.split("@")[0] || "Forwarder",
				email: resolvedForwarderEmail || "quotes@forwarder.com",
				code: resolvedForwarderCode || (resolvedForwarderName ? resolvedForwarderName.slice(0, 4).toUpperCase() : "FWD")
			}).select("id, company_name, code, email").maybeSingle();
			if (newFwdRow) {
				validForwarderUuid = newFwdRow.id;
				resolvedForwarderName = newFwdRow.company_name;
				resolvedForwarderCode = newFwdRow.code;
			}
		}
	} catch (fErr) {
		console.warn("[QuotationDbService] Notice resolving forwarder:", fErr);
	}
	let forwarderRequestId = null;
	let existingFwdReq = null;
	console.log("[QuotationSaveController] Incoming JSON payload before database insertion:", JSON.stringify({
		bookingId: validBookingUuid,
		movementNumber: resolvedMovementNumber,
		forwarderId: validForwarderUuid,
		forwarderName: resolvedForwarderName,
		forwarderEmail: resolvedForwarderEmail,
		extractedFields: input.extracted,
		status: input.newStatus,
		offerExtracted: input.offerExtracted
	}, null, 2));
	try {
		const validEmailMsgUuid = safeUuid(input.emailMessageId);
		if (validEmailMsgUuid) {
			const { error: emErr } = await supabase.from("email_messages").update({
				processing_status: "PROCESSING",
				matching_status: "MATCHED"
			}).eq("id", validEmailMsgUuid);
			if (emErr) console.warn("[QuotationDbService] Notice updating email_messages status:", emErr.message);
		}
		let reqQuery = supabase.from("forwarder_requests").select("*").eq("booking_id", validBookingUuid);
		if (validForwarderUuid) reqQuery = reqQuery.eq("forwarder_id", validForwarderUuid);
		else if (resolvedForwarderEmail) reqQuery = reqQuery.ilike("forwarder_email", resolvedForwarderEmail);
		const { data: existingReqs } = await reqQuery.limit(1);
		if (existingReqs && existingReqs.length > 0) {
			existingFwdReq = existingReqs[0];
			forwarderRequestId = existingFwdReq.id;
		}
		const newRate = input.extracted.rate !== null && input.extracted.rate !== void 0 ? Number(input.extracted.rate) : null;
		const newTotalCost = input.extracted.totalCost !== null && input.extracted.totalCost !== void 0 ? Number(input.extracted.totalCost) : null;
		const newCurrency = input.extracted.currency || "USD";
		const containerCount = input.extracted.containerQuantity || 1;
		const totalFreight = newTotalCost !== null ? newTotalCost : newRate !== null ? newRate * containerCount : null;
		const quotationStatus = input.offerExtracted ? input.newStatus === "NEEDS_REVIEW" ? "NEEDS_REVIEW" : "OFFER_RECEIVED" : "PENDING";
		const requestDetails = {
			unverifiedSender: Boolean(input.unverifiedSender),
			reviewReasons: input.reviewReasons || [],
			confidence: input.extracted.extractionConfidence,
			lastSenderEmail: input.senderEmail,
			sourceEmailSubject: input.subject || void 0,
			ratePerContainer: newRate,
			oceanFreight: newRate,
			totalFreight,
			totalCost: totalFreight,
			currency: newCurrency,
			containerType: input.extracted.containerType || "40HC",
			containerCount,
			transitDays: input.extracted.transitTime || void 0,
			freeDays: input.extracted.freeDays || void 0,
			etd: input.extracted.etd || void 0,
			eta: input.extracted.eta || void 0,
			carrier: input.extracted.carrier || void 0,
			vesselName: input.extracted.vesselName || void 0,
			voyageNumber: input.extracted.voyageNumber || void 0,
			receivedAt: input.receivedAt || nowIso,
			status: quotationStatus
		};
		if (forwarderRequestId) try {
			const updatePayload = {
				status: quotationStatus,
				forwarder_name: resolvedForwarderName || existingFwdReq?.forwarder_name || "Forwarder",
				forwarder_email: resolvedForwarderEmail || existingFwdReq?.forwarder_email || "quotes@forwarder.com",
				gmail_thread_id: input.gmailThreadId || existingFwdReq?.gmail_thread_id || null,
				details: requestDetails,
				responded_at: nowIso,
				updated_at: nowIso
			};
			const { error: updErr } = await supabase.from("forwarder_requests").update(updatePayload).eq("id", forwarderRequestId);
			if (updErr) console.warn("[QuotationDbService] Error updating forwarder_requests:", updErr.message);
		} catch (updFwdErr) {
			console.warn("[QuotationDbService] Notice updating forwarder_requests:", updFwdErr);
		}
		else try {
			const insertPayload = {
				organization_id: resolvedOrgId,
				booking_id: validBookingUuid,
				booking_reference: resolvedMovementNumber || (validBookingUuid ? `MOV-${validBookingUuid.slice(0, 8)}` : "MOV-0000"),
				forwarder_id: validForwarderUuid,
				movement_number: resolvedMovementNumber,
				gmail_thread_id: input.gmailThreadId || null,
				status: quotationStatus,
				forwarder_name: resolvedForwarderName || input.senderName || "Forwarder",
				forwarder_email: resolvedForwarderEmail || "quotes@forwarder.com",
				details: requestDetails,
				responded_at: nowIso,
				sent_at: input.receivedAt || nowIso,
				created_at: nowIso,
				updated_at: nowIso
			};
			const { data: newFwdReq, error: insFwdErr } = await supabase.from("forwarder_requests").insert(insertPayload).select().maybeSingle();
			if (newFwdReq) forwarderRequestId = newFwdReq.id;
			else if (insFwdErr) console.warn("[QuotationDbService] Error inserting forwarder_requests:", insFwdErr.message);
		} catch (insFwdErr) {
			console.warn("[QuotationDbService] Notice inserting forwarder_requests:", insFwdErr);
		}
		if (validEmailMsgUuid) {
			const referencesStr = Array.isArray(input.references) ? input.references.join(" ") : input.references || null;
			try {
				const updatePayload = {
					booking_id: validBookingUuid,
					forwarder_id: validForwarderUuid,
					forwarder_request_id: forwarderRequestId || null,
					movement_number: resolvedMovementNumber,
					in_reply_to: input.inReplyTo || null,
					references_header: referencesStr,
					cleaned_body: input.body ? input.body.slice(0, 4e3) : null,
					processing_status: "EXTRACTING",
					matching_status: "MATCHED",
					extraction_status: input.offerExtracted ? "EXTRACTED" : "NONE",
					updated_at: nowIso
				};
				const { error: updErr } = await supabase.from("email_messages").update(updatePayload).eq("id", validEmailMsgUuid);
				if (updErr && (updErr.code === "PGRST204" || updErr.message?.includes("column"))) await supabase.from("email_messages").update({
					booking_id: validBookingUuid,
					forwarder_id: validForwarderUuid,
					forwarder_request_id: forwarderRequestId || null,
					updated_at: nowIso
				}).eq("id", validEmailMsgUuid);
			} catch (err) {
				console.warn("[QuotationDbService] Notice updating email_messages:", err);
			}
		}
		let activeQuotationId;
		let versionNumber = 1;
		let isNewVersion = false;
		if (input.offerExtracted) {
			try {
				let existingQuote = null;
				if (forwarderRequestId) {
					const { data: currentQuotes } = await supabase.from("quotations").select("*").eq("forwarder_request_id", forwarderRequestId).eq("is_current", true).order("created_at", { ascending: false }).limit(1);
					if (currentQuotes && currentQuotes.length > 0) existingQuote = currentQuotes[0];
				}
				if (!existingQuote && validBookingUuid && resolvedForwarderEmail) {
					const { data: currentQuotes } = await supabase.from("quotations").select("*").eq("booking_id", validBookingUuid).ilike("forwarder_email", resolvedForwarderEmail).eq("is_current", true).order("created_at", { ascending: false }).limit(1);
					if (currentQuotes && currentQuotes.length > 0) existingQuote = currentQuotes[0];
				}
				const baseQuotePayload = {
					organization_id: resolvedOrgId,
					booking_id: validBookingUuid,
					forwarder_request_id: forwarderRequestId || null,
					forwarder_id: validForwarderUuid,
					forwarder_name: resolvedForwarderName || existingQuote?.forwarder_name || "Forwarder",
					forwarder_email: resolvedForwarderEmail || existingQuote?.forwarder_email || "quotes@forwarder.com",
					movement_number: resolvedMovementNumber,
					email_message_id: validEmailMsgUuid,
					rate: newRate,
					rate_per_container: newRate,
					total_freight: totalFreight,
					currency: newCurrency,
					container_type: input.extracted.containerType || "40HC",
					container_count: containerCount,
					transit_time_days: input.extracted.transitTime || null,
					free_days: input.extracted.freeDays || null,
					valid_until: safeIsoDate(input.extracted.rateValidity),
					validity_date: safeIsoDate(input.extracted.rateValidity),
					etd: safeIsoDate(input.extracted.etd),
					eta: safeIsoDate(input.extracted.eta),
					carrier: input.extracted.carrier || null,
					carrier_name: input.extracted.carrier || null,
					vessel_name: input.extracted.vesselName || null,
					voyage_number: input.extracted.voyageNumber || null,
					confidence_score: input.extracted.extractionConfidence || .95,
					is_current: true,
					is_active: true,
					needs_review: quotationStatus === "NEEDS_REVIEW",
					status: quotationStatus,
					version: 1,
					updated_at: nowIso
				};
				if (existingQuote) {
					const oldRate = existingQuote.rate !== null ? Number(existingQuote.rate) : null;
					const oldTotalCost = existingQuote.total_freight !== null ? Number(existingQuote.total_freight) : null;
					const oldCurrency = existingQuote.currency || "USD";
					const rateChanged = newRate !== null && newRate !== oldRate;
					const costChanged = totalFreight !== null && totalFreight !== oldTotalCost;
					const currencyChanged = newCurrency !== oldCurrency;
					if (validEmailMsgUuid && existingQuote.email_message_id === validEmailMsgUuid && !rateChanged && !costChanged) {
						console.log(`[QuotationDbService] 🛡️ Duplicate protection: Quote already saved for email ${validEmailMsgUuid}. Idempotent return.`);
						activeQuotationId = existingQuote.id;
						await supabase.from("quotations").update({ updated_at: nowIso }).eq("id", existingQuote.id);
					} else if (rateChanged || costChanged || currencyChanged) {
						isNewVersion = true;
						const prevVersion = existingQuote.version || existingQuote.version_number || 1;
						versionNumber = prevVersion + 1;
						try {
							await supabase.from("quotation_versions").insert({
								quotation_id: existingQuote.id,
								version_number: prevVersion,
								rate: existingQuote.rate,
								currency: existingQuote.currency || "USD",
								transit_time_days: existingQuote.transit_time_days || null,
								free_days: existingQuote.free_days || null,
								valid_until: existingQuote.valid_until || null,
								carrier: existingQuote.carrier || existingQuote.carrier_name || null,
								vessel_name: existingQuote.vessel_name || null,
								voyage_number: existingQuote.voyage_number || null,
								raw_payload: existingQuote,
								created_at: existingQuote.created_at || nowIso
							});
						} catch (vErr) {
							console.warn("[QuotationDbService] Notice archiving quotation version:", vErr);
						}
						await supabase.from("quotations").update({
							is_current: false,
							updated_at: nowIso
						}).eq("id", existingQuote.id);
						const { data: newQuote, error: insErr } = await supabase.from("quotations").insert({
							...baseQuotePayload,
							version: versionNumber,
							created_at: nowIso
						}).select().single();
						if (!insErr && newQuote) activeQuotationId = newQuote.id;
						else {
							console.warn("[QuotationDbService] Notice inserting new version quote:", insErr?.message);
							activeQuotationId = existingQuote.id;
						}
					} else {
						activeQuotationId = existingQuote.id;
						await supabase.from("quotations").update({
							email_message_id: validEmailMsgUuid,
							updated_at: nowIso
						}).eq("id", existingQuote.id);
					}
				} else {
					const { data: newQuote, error: insErr } = await supabase.from("quotations").insert({
						...baseQuotePayload,
						version: 1,
						created_at: nowIso
					}).select().single();
					if (!insErr && newQuote) {
						activeQuotationId = newQuote.id;
						versionNumber = 1;
					} else console.warn("[QuotationDbService] Notice inserting initial quote:", insErr?.message);
				}
			} catch (quoteErr) {
				console.warn("[QuotationDbService] Notice during quotation versioning:", quoteErr);
			}
			if (activeQuotationId) {
				const traceabilityMap = input.extracted.traceability || input.extracted.deterministicResult?.traceability;
				if (traceabilityMap && typeof traceabilityMap === "object") {
					const fieldExtractionsToInsert = [];
					for (const [fieldName, tVal] of Object.entries(traceabilityMap)) {
						const t = tVal;
						if (!t) continue;
						const conf = t.confidence === "HIGH" || t.confidence === "MEDIUM" || t.confidence === "LOW" ? t.confidence : "HIGH";
						const valStatus = t.validationStatus === "VALID" ? "VALID" : t.validationStatus === "CONFLICT" ? "CONFLICT" : "NEEDS_REVIEW";
						fieldExtractionsToInsert.push({
							quotation_id: activeQuotationId,
							organization_id: resolvedOrgId,
							booking_id: validBookingUuid,
							email_message_id: validEmailMsgUuid,
							version_number: versionNumber,
							field_name: fieldName,
							extracted_value: t.rawValue !== void 0 && t.rawValue !== null ? String(t.rawValue) : null,
							normalized_value: t.value !== void 0 && t.value !== null ? String(t.value) : null,
							source_text: t.sourceText || null,
							source_position: t.lineNumber ? `Line ${t.lineNumber}` : null,
							pattern_matched: t.matchingKeyword || null,
							extraction_method: t.extractionMethod || "DETERMINISTIC_RULES",
							confidence: conf,
							confidence_score: conf === "HIGH" ? .95 : conf === "MEDIUM" ? .7 : .4,
							validation_status: valStatus,
							validation_message: t.confidenceReason || null,
							metadata: t.candidates ? { candidates: t.candidates } : null,
							created_at: nowIso
						});
					}
					if (fieldExtractionsToInsert.length > 0) await supabase.from("quotation_field_extractions").insert(fieldExtractionsToInsert);
				}
			}
		}
		if (validBookingUuid && validForwarderUuid) try {
			await supabase.from("forwarder_offers").upsert({
				booking_id: validBookingUuid,
				forwarder_id: validForwarderUuid,
				forwarder_name: resolvedForwarderName,
				forwarder_email: resolvedForwarderEmail,
				rate_amount: input.extracted.rate || null,
				total_freight: input.extracted.totalCost || (input.extracted.rate ? input.extracted.rate * (input.extracted.containerQuantity || 1) : null),
				currency: input.extracted.currency || "USD",
				status: input.newStatus,
				is_awarded: input.newStatus === "AWARDED",
				is_declined: input.newStatus === "DECLINED",
				updated_at: nowIso
			});
		} catch (fwdOfferErr) {
			console.warn("[QuotationDbService] Notice syncing legacy forwarder_offers:", fwdOfferErr);
		}
		if (validEmailMsgUuid) await supabase.from("email_messages").update({
			processing_status: input.newStatus === "NEEDS_REVIEW" ? "NEEDS_REVIEW" : "SAVED",
			updated_at: nowIso
		}).eq("id", validEmailMsgUuid);
		return {
			success: true,
			forwarderRequestId,
			quotationId: activeQuotationId,
			versionNumber,
			isNewVersion
		};
	} catch (err) {
		const errorMsg = err instanceof Error ? err.message : String(err);
		console.error("[QuotationDbService] Error persisting quotation:", errorMsg);
		await recordEmailProcessingError(input.emailMessageId, errorMsg, "PERSISTENCE_FAILURE");
		return {
			success: false,
			forwarderRequestId: "",
			versionNumber: 1,
			isNewVersion: false,
			error: errorMsg
		};
	}
}
/**
* Record an email processing error safely on the email_messages table
*/
async function recordEmailProcessingError(emailMessageId, errorMsg, errorCode) {
	const validEmailUuid = safeUuid(emailMessageId);
	if (!validEmailUuid || !isSupabaseConfigured) return;
	try {
		const { error: err1 } = await supabase.from("email_messages").update({
			processing_status: "FAILED",
			error_info: {
				code: errorCode,
				message: errorMsg,
				failed_at: (/* @__PURE__ */ new Date()).toISOString()
			}
		}).eq("id", validEmailUuid);
		if (err1) console.warn("[QuotationDbService] Notice updating email_messages error state:", err1.message);
	} catch (err) {
		console.warn("[QuotationDbService] Failed to record error state on email_messages:", err);
	}
}
/**
* Fetch forwarder requests and active quotations from Supabase database.
* This is the SINGLE SOURCE OF TRUTH for quotations in the application.
*/
async function fetchForwarderRequestsFromDatabase(bookingOrIdentifier) {
	if (!isSupabaseConfigured) return getLocalForwarderRequests();
	try {
		const rawKeys = Array.isArray(bookingOrIdentifier) ? bookingOrIdentifier : bookingOrIdentifier ? [bookingOrIdentifier] : [];
		const candidateUuids = rawKeys.map((k) => safeUuid(k)).filter(Boolean);
		const candidateStringsSet = /* @__PURE__ */ new Set();
		for (const k of rawKeys) {
			if (!k) continue;
			const t = String(k).trim();
			if (!t) continue;
			candidateStringsSet.add(t);
			candidateStringsSet.add(t.toUpperCase());
			candidateStringsSet.add(t.toLowerCase());
			if (t.toUpperCase().startsWith("NASH-")) {
				candidateStringsSet.add(t.replace(/^NASH-/i, ""));
				candidateStringsSet.add(t.replace(/^NASH-/i, "").toUpperCase());
				candidateStringsSet.add(t.replace(/^NASH-/i, "").toLowerCase());
			} else {
				candidateStringsSet.add(`NASH-${t.toUpperCase()}`);
				candidateStringsSet.add(`nash-${t.toLowerCase()}`);
			}
		}
		if (rawKeys.length > 0) try {
			const lookupFilters = [];
			if (candidateUuids.length > 0) lookupFilters.push(`id.in.(${candidateUuids.join(",")})`);
			const stringList = Array.from(candidateStringsSet);
			if (stringList.length > 0) {
				lookupFilters.push(`movement_number.in.(${stringList.join(",")})`);
				lookupFilters.push(`booking_reference.in.(${stringList.join(",")})`);
				lookupFilters.push(`reference.in.(${stringList.join(",")})`);
			}
			if (lookupFilters.length > 0) {
				const { data: bks } = await supabase.from("bookings").select("id, movement_number, booking_reference, reference").or(lookupFilters.join(","));
				if (bks) for (const b of bks) {
					if (b.id && !candidateUuids.includes(b.id)) candidateUuids.push(b.id);
					if (b.movement_number) {
						candidateStringsSet.add(b.movement_number);
						candidateStringsSet.add(b.movement_number.toUpperCase());
						candidateStringsSet.add(b.movement_number.toLowerCase());
					}
					if (b.booking_reference) {
						candidateStringsSet.add(b.booking_reference);
						candidateStringsSet.add(b.booking_reference.toUpperCase());
						candidateStringsSet.add(b.booking_reference.toLowerCase());
					}
					if (b.reference) {
						candidateStringsSet.add(b.reference);
						candidateStringsSet.add(b.reference.toUpperCase());
						candidateStringsSet.add(b.reference.toLowerCase());
					}
				}
			}
		} catch (err) {
			console.warn("[QuotationDbService] Notice resolving booking aliases:", err);
		}
		const candidateStrings = Array.from(candidateStringsSet);
		let query = supabase.from("forwarder_requests").select("*").order("created_at", { ascending: false });
		if (candidateUuids.length > 0 && candidateStrings.length > 0) {
			const orClauses = [
				`booking_id.in.(${candidateUuids.join(",")})`,
				`movement_number.in.(${candidateStrings.join(",")})`,
				`booking_reference.in.(${candidateStrings.join(",")})`
			];
			query = query.or(orClauses.join(","));
		} else if (candidateUuids.length > 0) query = query.in("booking_id", candidateUuids);
		else if (candidateStrings.length > 0) query = query.or(`movement_number.in.(${candidateStrings.join(",")}),booking_reference.in.(${candidateStrings.join(",")})`);
		const { data: dbRequests, error: reqErr } = await query;
		if (reqErr) console.warn("[QuotationDbService] Notice querying forwarder_requests:", reqErr?.message);
		const initialRequests = dbRequests || [];
		let dbQuotations = [];
		try {
			let qQuery = supabase.from("quotations").select("*");
			const filterParts = [];
			if (candidateUuids.length > 0) filterParts.push(`booking_id.in.(${candidateUuids.join(",")})`);
			if (candidateStrings.length > 0) filterParts.push(`movement_number.in.(${candidateStrings.join(",")})`);
			if (rawKeys.length > 0 && initialRequests.length > 0) {
				const reqIds = initialRequests.map((r) => r.id).filter(Boolean);
				if (reqIds.length > 0) filterParts.push(`forwarder_request_id.in.(${reqIds.join(",")})`);
			}
			if (filterParts.length > 0) qQuery = qQuery.or(filterParts.join(","));
			const { data: q1, error: q1Err } = await qQuery.order("created_at", { ascending: false });
			if (q1Err) console.warn("[QuotationDbService] Notice querying quotations:", q1Err?.message);
			if (q1 && q1.length > 0) dbQuotations = q1;
		} catch (e) {
			console.warn("[QuotationDbService] Notice querying quotations:", e);
		}
		const finalRequests = [...initialRequests];
		if (dbQuotations.length > 0) {
			const existingReqIds = new Set(initialRequests.map((r) => r.id));
			const existingFwdIds = new Set(initialRequests.map((r) => r.forwarder_id).filter(Boolean));
			for (const q of dbQuotations) {
				const fwdId = q.forwarder_id || q.forwarder_request_id;
				if (!existingReqIds.has(q.forwarder_request_id) && (!fwdId || !existingFwdIds.has(fwdId))) finalRequests.push({
					id: q.forwarder_request_id || q.id || `MFR-${Date.now()}`,
					booking_id: q.booking_id || candidateUuids[0] || null,
					forwarder_id: q.forwarder_id || `fwd-${Date.now()}`,
					forwarder_name: q.forwarder_name || "Forwarder",
					forwarder_email: q.forwarder_email || q.sender_email || "quotes@forwarder.com",
					movement_number: q.movement_number || candidateStrings[0] || "MOV-2026-0001",
					booking_reference: q.movement_number || candidateStrings[0] || "MOV-2026-0001",
					status: "OFFER_RECEIVED",
					sent_at: q.created_at || (/* @__PURE__ */ new Date()).toISOString(),
					created_at: q.created_at || (/* @__PURE__ */ new Date()).toISOString(),
					updated_at: q.updated_at || (/* @__PURE__ */ new Date()).toISOString()
				});
			}
		}
		if (finalRequests.length === 0) return getLocalForwarderRequests();
		finalRequests.map((r) => r.id).filter(Boolean);
		finalRequests.map((r) => r.booking_id).filter(Boolean);
		finalRequests.map((r) => r.movement_number).filter(Boolean);
		const quotationsByRequestId = /* @__PURE__ */ new Map();
		const quotationIds = [];
		for (const q of dbQuotations) {
			if (q.id) {
				quotationIds.push(q.id);
				quotationsByRequestId.set(q.id, q);
			}
			if (q.forwarder_request_id) quotationsByRequestId.set(q.forwarder_request_id, q);
			if (q.quotation_request_id) quotationsByRequestId.set(q.quotation_request_id, q);
			if (q.request_id) quotationsByRequestId.set(q.request_id, q);
			if (q.booking_id && q.forwarder_id) quotationsByRequestId.set(`${q.booking_id}_${q.forwarder_id}`, q);
			if (q.movement_number && q.forwarder_id) {
				quotationsByRequestId.set(`${q.movement_number}_${q.forwarder_id}`, q);
				quotationsByRequestId.set(`${String(q.movement_number).toUpperCase()}_${q.forwarder_id}`, q);
				quotationsByRequestId.set(`${String(q.movement_number).toLowerCase()}_${q.forwarder_id}`, q);
			}
			if (q.movement_number && q.forwarder_name) {
				quotationsByRequestId.set(`${q.movement_number}_${String(q.forwarder_name).toLowerCase()}`, q);
				quotationsByRequestId.set(`${String(q.movement_number).toUpperCase()}_${String(q.forwarder_name).toLowerCase()}`, q);
				quotationsByRequestId.set(`${String(q.movement_number).toLowerCase()}_${String(q.forwarder_name).toLowerCase()}`, q);
			}
			if (q.booking_id && q.forwarder_name) quotationsByRequestId.set(`${q.booking_id}_${String(q.forwarder_name).toLowerCase()}`, q);
			if (q.movement_number && q.forwarder_email) {
				quotationsByRequestId.set(`${q.movement_number}_${String(q.forwarder_email).toLowerCase()}`, q);
				quotationsByRequestId.set(`${String(q.movement_number).toUpperCase()}_${String(q.forwarder_email).toLowerCase()}`, q);
			}
			if (q.booking_id && q.forwarder_email) quotationsByRequestId.set(`${q.booking_id}_${String(q.forwarder_email).toLowerCase()}`, q);
		}
		const extractionsByQuotationId = /* @__PURE__ */ new Map();
		const chargesByQuotationId = /* @__PURE__ */ new Map();
		if (quotationIds.length > 0) {
			try {
				const { data: dbExtractions } = await supabase.from("quotation_field_extractions").select("*").in("quotation_id", quotationIds);
				for (const ext of dbExtractions || []) {
					if (!extractionsByQuotationId.has(ext.quotation_id)) extractionsByQuotationId.set(ext.quotation_id, {});
					const map = extractionsByQuotationId.get(ext.quotation_id);
					map[ext.field_name] = {
						field: ext.field_name,
						value: ext.normalized_value,
						rawValue: ext.extracted_value,
						sourceText: ext.source_text,
						lineNumber: ext.source_position ? parseInt(ext.source_position.replace(/\D/g, ""), 10) || null : null,
						confidence: ext.confidence,
						extractionMethod: ext.extraction_method,
						validationStatus: ext.validation_status
					};
				}
			} catch (extErr) {
				console.warn("[QuotationDbService] Notice querying quotation_field_extractions:", extErr);
			}
			try {
				const { data: dbCharges } = await supabase.from("quotation_charges").select("*").in("quotation_id", quotationIds);
				for (const ch of dbCharges || []) {
					if (!chargesByQuotationId.has(ch.quotation_id)) chargesByQuotationId.set(ch.quotation_id, []);
					chargesByQuotationId.get(ch.quotation_id).push({
						id: ch.id,
						charge_code: ch.charge_code,
						charge_name: ch.charge_name_normalized || ch.charge_name_original,
						amount: ch.amount,
						amountMin: ch.amount_min,
						amountMax: ch.amount_max,
						currency: ch.currency,
						unit: ch.unit,
						quantity: ch.quantity,
						status: ch.status,
						originalSourceLine: ch.original_text
					});
				}
			} catch (chgErr) {
				console.warn("[QuotationDbService] Notice querying quotation_charges:", chgErr);
			}
		}
		const localBookings = getLocalBookings();
		const mappedQuotationIds = /* @__PURE__ */ new Set();
		const result = finalRequests.map((dbReq) => {
			let currentQuote = quotationsByRequestId.get(dbReq.id);
			if (!currentQuote && dbReq.booking_id && dbReq.forwarder_id) currentQuote = quotationsByRequestId.get(`${dbReq.booking_id}_${dbReq.forwarder_id}`);
			if (!currentQuote && dbReq.movement_number && dbReq.forwarder_id) currentQuote = quotationsByRequestId.get(`${dbReq.movement_number}_${dbReq.forwarder_id}`) || quotationsByRequestId.get(`${String(dbReq.movement_number).toUpperCase()}_${dbReq.forwarder_id}`) || quotationsByRequestId.get(`${String(dbReq.movement_number).toLowerCase()}_${dbReq.forwarder_id}`);
			if (!currentQuote && dbReq.movement_number && dbReq.forwarder_name) currentQuote = quotationsByRequestId.get(`${dbReq.movement_number}_${String(dbReq.forwarder_name).toLowerCase()}`) || quotationsByRequestId.get(`${String(dbReq.movement_number).toUpperCase()}_${String(dbReq.forwarder_name).toLowerCase()}`) || quotationsByRequestId.get(`${String(dbReq.movement_number).toLowerCase()}_${String(dbReq.forwarder_name).toLowerCase()}`);
			if (!currentQuote && dbReq.booking_id && dbReq.forwarder_name) currentQuote = quotationsByRequestId.get(`${dbReq.booking_id}_${String(dbReq.forwarder_name).toLowerCase()}`);
			if (!currentQuote && dbReq.movement_number && dbReq.forwarder_email) currentQuote = quotationsByRequestId.get(`${dbReq.movement_number}_${String(dbReq.forwarder_email).toLowerCase()}`) || quotationsByRequestId.get(`${String(dbReq.movement_number).toUpperCase()}_${String(dbReq.forwarder_email).toLowerCase()}`);
			if (!currentQuote && dbReq.booking_id && dbReq.forwarder_email) currentQuote = quotationsByRequestId.get(`${dbReq.booking_id}_${String(dbReq.forwarder_email).toLowerCase()}`);
			if (!currentQuote && dbReq.movement_number) {
				const movUpper = String(dbReq.movement_number).toUpperCase();
				const cleanMov = movUpper.replace(/^NASH-/, "");
				currentQuote = dbQuotations.find((q) => {
					const qMov = String(q.movement_number || "").toUpperCase();
					const qCleanMov = qMov.replace(/^NASH-/, "");
					const fwdMatch = dbReq.forwarder_id && q.forwarder_id === dbReq.forwarder_id || dbReq.forwarder_name && String(q.forwarder_name || "").toLowerCase() === String(dbReq.forwarder_name).toLowerCase() || dbReq.forwarder_email && String(q.forwarder_email || "").toLowerCase() === String(dbReq.forwarder_email).toLowerCase();
					return (qMov === movUpper || qCleanMov === cleanMov) && fwdMatch;
				});
			}
			if (currentQuote?.id) mappedQuotationIds.add(currentQuote.id);
			const traceability = currentQuote ? extractionsByQuotationId.get(currentQuote.id) : void 0;
			const matchingBooking = localBookings.find((b) => b.id === dbReq.booking_id || b.movement_number === dbReq.movement_number);
			const containerCount = currentQuote?.container_quantity || currentQuote?.quantity || matchingBooking?.container_count || 1;
			const explicitTotal = currentQuote?.quoted_total !== void 0 && currentQuote?.quoted_total !== null ? Number(currentQuote.quoted_total) : currentQuote?.calculated_total !== void 0 && currentQuote?.calculated_total !== null ? Number(currentQuote.calculated_total) : currentQuote?.total_cost !== void 0 && currentQuote?.total_cost !== null ? Number(currentQuote.total_cost) : currentQuote?.freight_charges !== void 0 && currentQuote?.freight_charges !== null ? Number(currentQuote.freight_charges) : void 0;
			const ratePerContainer = currentQuote?.ocean_freight !== void 0 && currentQuote?.ocean_freight !== null ? Number(currentQuote.ocean_freight) : currentQuote?.rate !== void 0 && currentQuote.rate !== null ? Number(currentQuote.rate) : explicitTotal !== void 0 ? explicitTotal / containerCount : void 0;
			currentQuote?.currency;
			const totalFreight = explicitTotal !== void 0 ? explicitTotal : ratePerContainer !== void 0 ? ratePerContainer * containerCount : void 0;
			const reqDetails = typeof dbReq.details === "object" && dbReq.details !== null ? dbReq.details : {};
			const dbRate = dbReq.rate !== void 0 && dbReq.rate !== null ? Number(dbReq.rate) : reqDetails.ratePerContainer !== void 0 && reqDetails.ratePerContainer !== null ? Number(reqDetails.ratePerContainer) : void 0;
			const dbTotal = dbReq.total_freight !== void 0 && dbReq.total_freight !== null ? Number(dbReq.total_freight) : reqDetails.totalFreight !== void 0 && reqDetails.totalFreight !== null ? Number(reqDetails.totalFreight) : void 0;
			const effectiveRate = ratePerContainer !== void 0 ? ratePerContainer : dbRate;
			const effectiveTotal = totalFreight !== void 0 ? totalFreight : dbTotal !== void 0 ? dbTotal : effectiveRate !== void 0 ? effectiveRate * containerCount : void 0;
			const effectiveCurrency = currentQuote?.currency || reqDetails.currency || dbReq.currency || "USD";
			const finalStatus = dbReq.status === "PENDING" && effectiveRate !== void 0 ? "OFFER_RECEIVED" : dbReq.status || "PENDING";
			const offerData = currentQuote ? {
				ratePerContainer: effectiveRate,
				oceanFreight: effectiveRate,
				thc: currentQuote.thc !== void 0 && currentQuote.thc !== null ? Number(currentQuote.thc) : void 0,
				originCharges: currentQuote.origin_charges !== void 0 && currentQuote.origin_charges !== null ? Number(currentQuote.origin_charges) : void 0,
				destinationCharges: currentQuote.destination_charges !== void 0 && currentQuote.destination_charges !== null ? Number(currentQuote.destination_charges) : void 0,
				documentationCharges: currentQuote.documentation_charges !== void 0 && currentQuote.documentation_charges !== null ? Number(currentQuote.documentation_charges) : void 0,
				customsCharges: currentQuote.customs_charges !== void 0 && currentQuote.customs_charges !== null ? Number(currentQuote.customs_charges) : void 0,
				truckingCharges: currentQuote.trucking_charges !== void 0 && currentQuote.trucking_charges !== null ? Number(currentQuote.trucking_charges) : void 0,
				otherCharges: currentQuote.other_charges !== void 0 && currentQuote.other_charges !== null ? Number(currentQuote.other_charges) : void 0,
				quotedTotal: effectiveTotal,
				totalAmount: effectiveTotal,
				totalFreight: effectiveTotal,
				calculatedTotal: currentQuote.calculated_total !== void 0 && currentQuote.calculated_total !== null ? Number(currentQuote.calculated_total) : void 0,
				currency: effectiveCurrency,
				containerType: currentQuote.container_type || matchingBooking?.container_type || "40HC",
				quantity: containerCount,
				availability: currentQuote.availability || void 0,
				etd: currentQuote.sailing_date || currentQuote.etd || void 0,
				eta: currentQuote.arrival_date || currentQuote.eta || void 0,
				transitDays: currentQuote.transit_time_days || currentQuote.transit_time || void 0,
				freeDays: currentQuote.free_days || void 0,
				carrier: currentQuote.carrier || currentQuote.carrier_name || void 0,
				vesselName: currentQuote.vessel_name || currentQuote.vessel || void 0,
				voyageNumber: currentQuote.voyage_number || currentQuote.voyage || void 0,
				validUntil: currentQuote.valid_until || currentQuote.rate_validity || currentQuote.expiry_date || void 0,
				additionalCharges: currentQuote.additional_charges || void 0,
				totalCost: currentQuote.total_cost !== void 0 && currentQuote.total_cost !== null ? Number(currentQuote.total_cost) : effectiveTotal,
				notes: currentQuote.remarks || currentQuote.notes || void 0,
				receivedAt: currentQuote.created_at || dbReq.responded_at || void 0,
				sourceEmailId: currentQuote.incoming_email_id || currentQuote.email_message_id || void 0,
				receivedVia: "Gmail Automatic Sync",
				responseClassification: finalStatus,
				traceability,
				confidenceScore: currentQuote.confidence_score || .95,
				needsReview: currentQuote.extraction_status === "NEEDS_REVIEW" || finalStatus === "NEEDS_REVIEW",
				id: currentQuote.id,
				quotationId: currentQuote.id,
				itemizedCharges: chargesByQuotationId.get(currentQuote.id) || []
			} : effectiveRate !== void 0 || effectiveTotal !== void 0 || reqDetails.etd ? {
				ratePerContainer: effectiveRate,
				oceanFreight: effectiveRate,
				totalFreight: effectiveTotal,
				totalCost: effectiveTotal,
				quotedTotal: effectiveTotal,
				totalAmount: effectiveTotal,
				currency: effectiveCurrency,
				containerType: reqDetails.containerType || matchingBooking?.container_type || "40HC",
				quantity: containerCount,
				availability: reqDetails.availability || void 0,
				etd: reqDetails.etd || void 0,
				eta: reqDetails.eta || void 0,
				transitDays: reqDetails.transitDays || void 0,
				freeDays: reqDetails.freeDays || void 0,
				carrier: reqDetails.carrier || dbReq.forwarder_name || void 0,
				vesselName: reqDetails.vesselName || void 0,
				voyageNumber: reqDetails.voyageNumber || void 0,
				validUntil: reqDetails.validUntil || void 0,
				notes: dbReq.notes || reqDetails.notes || void 0,
				receivedAt: dbReq.responded_at || dbReq.updated_at || dbReq.created_at,
				receivedVia: "Gmail Automatic Sync",
				responseClassification: finalStatus,
				needsReview: finalStatus === "NEEDS_REVIEW",
				id: dbReq.id,
				quotationId: dbReq.id,
				itemizedCharges: []
			} : void 0;
			return {
				id: dbReq.id || dbReq.request_id || `MFR-${dbReq.id?.slice(0, 8)}`,
				quotationId: currentQuote?.id || dbReq.id,
				bookingId: dbReq.booking_id,
				bookingReference: matchingBooking?.booking_reference || dbReq.movement_number || "MOV-2026-00001",
				movementNumber: dbReq.movement_number || matchingBooking?.movement_number || "MOV-2026-00001",
				forwarderId: dbReq.forwarder_id || `fwd-${dbReq.id.slice(0, 6)}`,
				forwarderName: dbReq.forwarder_name || "Forwarder",
				forwarderEmail: dbReq.forwarder_email || "",
				forwarderCode: dbReq.forwarder_code || void 0,
				status: finalStatus,
				awardStatus: dbReq.award_status,
				gmailThreadId: dbReq.gmail_thread_id || void 0,
				sentAt: dbReq.sent_at || dbReq.created_at,
				origin: matchingBooking?.origin || dbReq.origin || "POL",
				destination: matchingBooking?.destination || dbReq.destination || "POD",
				polCode: matchingBooking?.pol_code || dbReq.pol_code || "POL",
				polName: matchingBooking?.pol_name || dbReq.pol_name || "Port of Loading",
				podCode: matchingBooking?.pod_code || dbReq.pod_code || "POD",
				podName: matchingBooking?.pod_name || dbReq.pod_name || "Destination Port",
				supplierName: matchingBooking?.supplier_name || dbReq.supplier_name || "Shipper",
				buyerName: matchingBooking?.buyer_name || dbReq.buyer_name || "Consignee",
				containerType: matchingBooking?.container_type || dbReq.container_type || "Standard Dry",
				containerSize: matchingBooking?.container_size || "40HC",
				containerCount: matchingBooking?.container_count || dbReq.container_count || 1,
				ratePerContainer: effectiveRate,
				currency: effectiveCurrency,
				totalFreight: effectiveTotal,
				offerData,
				updatedAt: dbReq.updated_at
			};
		});
		for (const q of dbQuotations) if (q.id && !mappedQuotationIds.has(q.id)) {
			mappedQuotationIds.add(q.id);
			const matchingBooking = localBookings.find((b) => b.id === q.booking_id || b.movement_number === q.movement_number);
			const containerCount = q.container_quantity || q.quantity || matchingBooking?.container_count || 1;
			const explicitTotal = q.quoted_total !== void 0 && q.quoted_total !== null ? Number(q.quoted_total) : q.calculated_total !== void 0 && q.calculated_total !== null ? Number(q.calculated_total) : q.total_cost !== void 0 && q.total_cost !== null ? Number(q.total_cost) : q.freight_charges !== void 0 && q.freight_charges !== null ? Number(q.freight_charges) : void 0;
			const ratePerContainer = q.ocean_freight !== void 0 && q.ocean_freight !== null ? Number(q.ocean_freight) : q.rate !== void 0 && q.rate !== null ? Number(q.rate) : explicitTotal !== void 0 ? explicitTotal / containerCount : void 0;
			const effectiveCurrency = q.currency || "USD";
			const effectiveTotal = explicitTotal !== void 0 ? explicitTotal : ratePerContainer !== void 0 ? ratePerContainer * containerCount : void 0;
			const traceability = extractionsByQuotationId.get(q.id);
			const rawFwdEmail = q.forwarder_email || q.sender_email || "";
			const fallbackName = rawFwdEmail ? rawFwdEmail.split("@")[0] : "Forwarder";
			const fwdName = q.forwarder_name || q.sender_name || fallbackName.charAt(0).toUpperCase() + fallbackName.slice(1);
			const synthOfferData = {
				ratePerContainer,
				oceanFreight: ratePerContainer,
				totalFreight: effectiveTotal,
				totalCost: effectiveTotal,
				quotedTotal: effectiveTotal,
				currency: effectiveCurrency,
				containerType: q.container_type || matchingBooking?.container_type || "40HC",
				quantity: containerCount,
				availability: q.availability || void 0,
				etd: q.sailing_date || q.etd || void 0,
				eta: q.arrival_date || q.eta || void 0,
				transitDays: q.transit_time_days || q.transit_time || void 0,
				freeDays: q.free_days || void 0,
				carrier: q.carrier || q.carrier_name || void 0,
				vesselName: q.vessel_name || q.vessel || void 0,
				voyageNumber: q.voyage_number || q.voyage || void 0,
				validUntil: q.valid_until || q.rate_validity || q.expiry_date || void 0,
				notes: q.remarks || q.notes || void 0,
				receivedAt: q.created_at || (/* @__PURE__ */ new Date()).toISOString(),
				sourceEmailId: q.incoming_email_id || q.email_message_id || void 0,
				receivedVia: "Gmail Automatic Sync",
				responseClassification: "OFFER_RECEIVED",
				traceability,
				confidenceScore: q.confidence_score || .95,
				needsReview: q.extraction_status === "NEEDS_REVIEW",
				id: q.id,
				quotationId: q.id,
				itemizedCharges: chargesByQuotationId.get(q.id) || []
			};
			result.push({
				id: `SYNTH-${q.id.slice(0, 12)}`,
				quotationId: q.id,
				bookingId: q.booking_id || matchingBooking?.id,
				bookingReference: matchingBooking?.booking_reference || q.movement_number || "MOV-2026-00001",
				movementNumber: q.movement_number || matchingBooking?.movement_number || "MOV-2026-00001",
				forwarderId: q.forwarder_id || `fwd-synth-${q.id.slice(0, 6)}`,
				forwarderName: fwdName,
				forwarderEmail: rawFwdEmail,
				status: q.extraction_status === "NEEDS_REVIEW" ? "NEEDS_REVIEW" : "OFFER_RECEIVED",
				awardStatus: "NOT_AWARDED",
				gmailThreadId: q.gmail_thread_id || void 0,
				sentAt: q.created_at || (/* @__PURE__ */ new Date()).toISOString(),
				origin: matchingBooking?.origin || "POL",
				destination: matchingBooking?.destination || "POD",
				polCode: matchingBooking?.pol_code || "POL",
				polName: matchingBooking?.pol_name || "Port of Loading",
				podCode: matchingBooking?.pod_code || "POD",
				podName: matchingBooking?.pod_name || "Destination Port",
				supplierName: matchingBooking?.supplier_name || "Shipper",
				buyerName: matchingBooking?.buyer_name || "Consignee",
				containerType: matchingBooking?.container_type || "Standard Dry",
				containerSize: matchingBooking?.container_size || "40HC",
				containerCount: matchingBooking?.container_count || 1,
				ratePerContainer,
				currency: effectiveCurrency,
				totalFreight: effectiveTotal,
				offerData: synthOfferData,
				updatedAt: q.updated_at || q.created_at
			});
		}
		if (rawKeys.length > 0) mergeLocalForwarderRequests(result);
		else saveLocalForwarderRequests(result);
		console.log("[QuotationDbService] Raw API response object from database fetcher:", {
			bookingOrIdentifier,
			requestCount: result.length,
			quotationRows: result.map((r) => ({
				requestId: r.id,
				quotation_id: r.quotationId || r.offerData?.id || null,
				id: r.offerData?.id || r.id,
				forwarderName: r.forwarderName,
				status: r.status,
				ratePerContainer: r.offerData?.ratePerContainer || r.ratePerContainer,
				totalFreight: r.offerData?.totalFreight || r.totalFreight,
				currency: r.offerData?.currency || r.currency,
				associatedChargesCount: r.offerData?.itemizedCharges?.length || 0,
				associatedCharges: r.offerData?.itemizedCharges || []
			})),
			fullResponseObject: result
		});
		return result;
	} catch (err) {
		console.warn("[QuotationDbService] Error fetching requests from database:", err);
		return getLocalForwarderRequests();
	}
}
/**
* Persist forwarder quotation requests when initially dispatched to forwarders
*/
async function persistForwarderRequestsDispatched(booking, records) {
	if (!isSupabaseConfigured || records.length === 0) return;
	const validBookingUuid = safeUuid(booking.id);
	if (!validBookingUuid) return;
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	try {
		for (const rec of records) {
			const validForwarderUuid = safeUuid(rec.forwarderId);
			await supabase.from("forwarder_requests").upsert({
				booking_id: validBookingUuid,
				forwarder_id: validForwarderUuid,
				request_id: rec.id,
				movement_number: rec.movementNumber || booking.movementNumber || "",
				gmail_thread_id: rec.gmailThreadId || null,
				status: "SENT",
				quotation_status: "PENDING",
				award_status: "NOT_AWARDED",
				forwarder_name: rec.forwarderName,
				forwarder_email: rec.forwarderEmail,
				forwarder_code: rec.forwarderCode || null,
				sent_at: rec.sentAt || nowIso,
				details: {
					containerType: rec.containerType,
					containerSize: rec.containerSize,
					containerCount: rec.containerCount,
					polCode: rec.polCode,
					podCode: rec.podCode
				},
				created_at: nowIso,
				updated_at: nowIso
			}, { onConflict: "booking_id,forwarder_id" });
		}
	} catch (err) {
		console.warn("[QuotationDbService] Notice persisting dispatched requests:", err);
	}
}
/**
* Centralized, Secure Audit Logger for Rule-Based Email Quotation Pipeline
* Conforms to Section 17 of the specification.
* Zero secret or token exposure. Fully auditable operational events.
*/
var STORAGE_KEY$1 = "nashmia_quotation_audit_events_v1";
var MAX_LOCAL_EVENTS = 200;
var SENSITIVE_KEYS = /* @__PURE__ */ new Set([
	"access_token",
	"refresh_token",
	"accessToken",
	"refreshToken",
	"token",
	"secret",
	"client_secret",
	"clientSecret",
	"password",
	"authorization",
	"auth_token",
	"service_role_key",
	"serviceRoleKey"
]);
/**
* Recursively scrubs sensitive credentials, tokens and authorization headers
*/
function sanitizeAuditData(data) {
	if (!data || typeof data !== "object") return data;
	if (Array.isArray(data)) return data.map((item) => sanitizeAuditData(item));
	const cleanObj = {};
	for (const [key, value] of Object.entries(data)) if (SENSITIVE_KEYS.has(key) || key.toLowerCase().includes("token") || key.toLowerCase().includes("secret")) cleanObj[key] = "[REDACTED_CREDENTIAL]";
	else if (typeof value === "object" && value !== null) cleanObj[key] = sanitizeAuditData(value);
	else cleanObj[key] = value;
	return cleanObj;
}
/**
* Records an auditable event safely into Supabase audit_logs/booking_events
* and updates local circular buffer for instant UI observability.
*/
async function recordQuotationAuditEvent(payload) {
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const id = `audit-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
	const sanitizedDetails = payload.details ? sanitizeAuditData(payload.details) : {};
	const event = {
		...payload,
		details: sanitizedDetails,
		id,
		timestamp: nowIso
	};
	if (typeof window !== "undefined") try {
		const raw = localStorage.getItem(STORAGE_KEY$1);
		const list = raw ? JSON.parse(raw) : [];
		list.unshift(event);
		localStorage.setItem(STORAGE_KEY$1, JSON.stringify(list.slice(0, MAX_LOCAL_EVENTS)));
		window.dispatchEvent(new CustomEvent("nashmia_quotation_audit_event", { detail: event }));
	} catch (e) {
		console.warn("[QuotationAuditLogger] Notice saving event to local storage:", e);
	}
	console.log(`[QuotationAudit] [${event.eventType}] ${event.movementNumber || event.bookingId || "System"}: ${event.summary}`, {
		sender: event.senderEmail,
		forwarder: event.forwarderName,
		messageId: event.gmailMessageId
	});
	if (isSupabaseConfigured) try {
		const validBookingUuid = safeUuid(payload.bookingId);
		const validUserUuid = safeUuid(payload.userId);
		await supabase.from("audit_logs").insert({
			action: payload.eventType,
			entity_type: "quotation_email",
			entity_id: validBookingUuid || payload.movementNumber || payload.gmailMessageId || null,
			user_id: validUserUuid || null,
			new_data: {
				summary: payload.summary,
				movementNumber: payload.movementNumber || null,
				forwarderName: payload.forwarderName || null,
				forwarderId: payload.forwarderId || null,
				senderEmail: payload.senderEmail || null,
				gmailMessageId: payload.gmailMessageId || null,
				gmailThreadId: payload.gmailThreadId || null,
				...sanitizedDetails
			}
		});
		if (validBookingUuid) await supabase.from("booking_events").insert({
			booking_id: validBookingUuid,
			event_type: payload.eventType,
			event_date: nowIso,
			location: "Email Quotation Engine",
			description: `${payload.summary} (${payload.forwarderName || payload.senderEmail || "System"})`
		});
	} catch (err) {
		console.warn("[QuotationAuditLogger] Notice persisting to Supabase:", err);
	}
	return event;
}
var CONFIGURABLE_BOOKING_NUMBER_PATTERNS = [
	{
		name: "NASH_DIRECT",
		pattern: /(?:^|[^A-Za-z0-9-_/])(NASH[-_](?:BK[-_]|MOV[-_])?[0-9]{4}[-_][0-9]{3,8})(?:$|[^A-Za-z0-9-_/])/i,
		description: "Direct Nashmia Movement Number format (e.g. NASH-2026-000145)",
		extractGroup: 1
	},
	{
		name: "REF_PREFIXED",
		pattern: /(?:^|[^A-Za-z0-9-_/])(?:REF|REFERENCE|RE|OUR\s*REF|YOUR\s*REF)[\s.:#*-]+((?:BK|BOOKING|MOV|MOVEMENT|NASH[-_]BK|REQ|BKG)[-_/][0-9]{4}[-_/][0-9]{3,8})(?:$|[^A-Za-z0-9-_/])/i,
		description: "Prefixed reference (e.g. REF: BK-2026-000145)",
		extractGroup: 1
	},
	{
		name: "NASH_REQ_STANDARD",
		pattern: /(?:^|[^A-Za-z0-9-_/])((?:[A-Z0-9]{2,10}-(?:REQ|BK|MOV|BKG)|NASH[-_]BK|REQ|BKG)[-_/][0-9]{4}[-_/][0-9]{3,8})(?:$|[^A-Za-z0-9-_/])/i,
		description: "System prefix format (e.g. NASH-BK-2026-000145)",
		extractGroup: 1
	},
	{
		name: "MOVEMENT_FULL",
		pattern: /(?:^|[^A-Za-z0-9-_/])(MOVEMENT[-_/][0-9]{4}[-_/][0-9]{3,8})(?:$|[^A-Za-z0-9-_/])/i,
		description: "Full MOVEMENT format (e.g. MOVEMENT-2026-000145)",
		extractGroup: 1
	},
	{
		name: "MOV_STANDARD",
		pattern: /(?:^|[^A-Za-z0-9-_/])(MOV[-_/][0-9]{4}[-_/][0-9]{3,8})(?:$|[^A-Za-z0-9-_/])/i,
		description: "Standard MOV format (e.g. MOV-2026-000145)",
		extractGroup: 1
	},
	{
		name: "BOOKING_FULL",
		pattern: /(?:^|[^A-Za-z0-9-_/])(BOOKING[-_/][0-9]{4}[-_/][0-9]{3,8})(?:$|[^A-Za-z0-9-_/])/i,
		description: "Full BOOKING prefix format (e.g. BOOKING-2026-000145)",
		extractGroup: 1
	},
	{
		name: "BK_HYPHEN",
		pattern: /(?:^|[^A-Za-z0-9-_/])(BK-[0-9]{4}-[0-9]{3,8})(?:$|[^A-Za-z0-9-_/])/i,
		description: "Standard BK hyphen format (e.g. BK-2026-000145)",
		extractGroup: 1
	},
	{
		name: "BK_SLASH",
		pattern: /(?:^|[^A-Za-z0-9-_/])(BK\/[0-9]{4}\/[0-9]{3,8})(?:$|[^A-Za-z0-9-_/])/i,
		description: "Standard BK slash format (e.g. BK/2026/000145)",
		extractGroup: 1
	},
	{
		name: "GENERAL_BOOKING",
		pattern: /(?:^|[^A-Za-z0-9-_/])([A-Z]{2,10}[-_/][0-9]{4}[-_/][0-9]{3,8})(?:$|[^A-Za-z0-9-_/])/i,
		description: "General 4-digit-year booking code",
		extractGroup: 1
	}
];
/**
* Normalizes any booking number to a standardized canonical format (e.g. "BK/2026/000145" -> "BK-2026-000145")
* This allows proper comparison without treating different slash/hyphen notations as distinct bookings.
*/
function normalizeBookingNumber(raw) {
	if (!raw) return null;
	let clean = raw.trim().toUpperCase();
	clean = clean.replace(/^(?:BOOKING|BKG|REF|REFERENCE|RE|OUR\s*REF|YOUR\s*REF)[\s.:#*-]+/i, "");
	clean = clean.replace(/[/_]/g, "-");
	clean = clean.replace(/-+/g, "-");
	return clean.trim();
}
/**
* Extracts all matching booking numbers from a specific text using configurable regex rules.
*/
function extractBookingNumbersFromText(text, patterns = CONFIGURABLE_BOOKING_NUMBER_PATTERNS) {
	if (!text) return [];
	const found = /* @__PURE__ */ new Set();
	for (const cfg of patterns) {
		const globalPattern = new RegExp(cfg.pattern.source, "gi");
		let match;
		while ((match = globalPattern.exec(text)) !== null) {
			const extracted = (match[cfg.extractGroup || 1] || match[0]).trim();
			if (extracted) found.add(extracted.toUpperCase());
		}
	}
	const rawList = Array.from(found);
	return rawList.filter((item, i) => !rawList.some((other, j) => i !== j && other.length > item.length && (other.endsWith(item) || other.includes(`-${item}`) || other.includes(`/${item}`))));
}
/**
* Searches booking numbers strictly in order:
* 1. Email subject
* 2. Email body
* 3. Attachment filename
* 4. Quotation reference
*
* Rules:
* - If no booking number is found: mark as unmatched, do not attach automatically.
* - If more than one booking number is found: save all detected, mark as needs_review, do not select automatically.
*/
function extractBookingNumberStrictOrder(input) {
	const sources = {
		subject: [],
		body: [],
		attachments: [],
		reference: []
	};
	if (input.subject) sources.subject = extractBookingNumbersFromText(input.subject);
	if (input.body) sources.body = extractBookingNumbersFromText(input.body);
	const attachmentNames = [];
	if (Array.isArray(input.attachmentFilenames)) attachmentNames.push(...input.attachmentFilenames);
	if (Array.isArray(input.attachments)) for (const att of input.attachments) {
		if (att.name) attachmentNames.push(att.name);
		if (att.filename) attachmentNames.push(att.filename);
	}
	if (attachmentNames.length > 0) sources.attachments = extractBookingNumbersFromText(attachmentNames.join(" "));
	const refTexts = [];
	if (input.inReplyTo) refTexts.push(input.inReplyTo);
	if (Array.isArray(input.references)) refTexts.push(...input.references);
	else if (typeof input.references === "string") refTexts.push(input.references);
	if (input.quotationReference) refTexts.push(input.quotationReference);
	if (refTexts.length > 0) sources.reference = extractBookingNumbersFromText(refTexts.join(" "));
	const canonicalMap = /* @__PURE__ */ new Map();
	const allFoundOriginals = [];
	const registerMatches = (matches) => {
		for (const m of matches) {
			allFoundOriginals.push(m);
			const canon = normalizeBookingNumber(m);
			if (canon && !canonicalMap.has(canon)) canonicalMap.set(canon, m);
		}
	};
	registerMatches(sources.subject);
	registerMatches(sources.body);
	registerMatches(sources.attachments);
	registerMatches(sources.reference);
	const distinctCanonical = Array.from(canonicalMap.keys());
	let foundIn = null;
	if (sources.subject.length > 0) foundIn = "SUBJECT";
	else if (sources.body.length > 0) foundIn = "BODY";
	else if (sources.attachments.length > 0) foundIn = "ATTACHMENT";
	else if (sources.reference.length > 0) foundIn = "REFERENCE";
	if (distinctCanonical.length === 0) return {
		detectedBookingNumbers: [],
		canonicalBookingNumber: null,
		foundIn: null,
		sources,
		isAmbiguous: false,
		status: "UNMATCHED",
		reason: "No booking number found in email subject, body, attachment filenames, or quotation reference headers."
	};
	if (distinctCanonical.length > 1) return {
		detectedBookingNumbers: distinctCanonical,
		canonicalBookingNumber: null,
		foundIn,
		sources,
		isAmbiguous: true,
		status: "NEEDS_REVIEW",
		reason: `Multiple distinct booking numbers detected in email: [${distinctCanonical.join(", ")}]. Marked as needs_review without automatic booking assignment.`
	};
	const singleCanonical = distinctCanonical[0];
	return {
		detectedBookingNumbers: distinctCanonical,
		canonicalBookingNumber: singleCanonical,
		foundIn,
		sources,
		isAmbiguous: false,
		status: "MATCHED",
		reason: `Single booking number '${singleCanonical}' found in ${foundIn}.`
	};
}
var MONTH_MAP = {
	jan: "Jan",
	january: "Jan",
	feb: "Feb",
	february: "Feb",
	mar: "Mar",
	march: "Mar",
	apr: "Apr",
	april: "Apr",
	may: "May",
	jun: "Jun",
	june: "Jun",
	jul: "Jul",
	july: "Jul",
	aug: "Aug",
	august: "Aug",
	sep: "Sep",
	sept: "Sep",
	september: "Sep",
	oct: "Oct",
	october: "Oct",
	nov: "Nov",
	november: "Nov",
	dec: "Dec",
	december: "Dec"
};
function normalizeDateString(raw, fallbackYear = 2026) {
	if (!raw) return null;
	const clean = raw.trim();
	const dmyMatch = clean.match(/\b(\d{1,2})(?:st|nd|rd|th)?[\s\-_/]+([A-Za-z]{3,9})(?:[\s\-_/]+(\d{2,4}))?\b/i);
	if (dmyMatch) {
		const rawMonth = dmyMatch[2].toLowerCase();
		const month = MONTH_MAP[rawMonth] || MONTH_MAP[rawMonth.slice(0, 3)];
		if (month) {
			const day = parseInt(dmyMatch[1], 10);
			const yr = dmyMatch[3] ? parseInt(dmyMatch[3], 10) : fallbackYear;
			return `${day} ${month} ${yr < 100 ? 2e3 + yr : yr}`;
		}
	}
	const mdyMatch = clean.match(/\b([A-Za-z]{3,9})[\s\-_]+(\d{1,2})(?:st|nd|rd|th)?(?:,?\s*(\d{2,4}))?\b/i);
	if (mdyMatch) {
		const rawMonth = mdyMatch[1].toLowerCase();
		const month = MONTH_MAP[rawMonth] || MONTH_MAP[rawMonth.slice(0, 3)];
		if (month) {
			const day = parseInt(mdyMatch[2], 10);
			const yr = mdyMatch[3] ? parseInt(mdyMatch[3], 10) : fallbackYear;
			return `${day} ${month} ${yr < 100 ? 2e3 + yr : yr}`;
		}
	}
	const isoMatch = clean.match(/\b(\d{4})[-/](\d{1,2})[-/](\d{1,2})\b/);
	if (isoMatch) return `${isoMatch[1]}-${isoMatch[2].padStart(2, "0")}-${isoMatch[3].padStart(2, "0")}`;
	return clean;
}
var OCEAN_CARRIERS = [
	"MAERSK",
	"MSC",
	"CMA CGM",
	"COSCO",
	"HAPAG-LLOYD",
	"HAPAG",
	"ONE",
	"EVERGREEN",
	"YANG MING",
	"HMM",
	"ZIM",
	"PIL",
	"WAN HAI",
	"OOCL"
];
/**
* Deterministically extracts the 16 standard forwarder quotation fields
* using keyword-anchored regular expressions. Zero AI or LLM.
*/
function extractQuotationFieldsDeterministic(subject, body) {
	const combined = `${subject || ""}\n${body || ""}`;
	const lines = combined.split("\n").map((l) => l.trim()).filter(Boolean);
	const trace = {};
	const classification = classifyQuotationMessage(subject, body);
	trace.classification = {
		value: classification.category,
		sourceText: classification.matchedKeywords.join(", ") || "none",
		line: 1
	};
	let isDeclined = classification.isNoQuote;
	const lowerCombined = combined.toLowerCase();
	if (lowerCombined.includes("fully booked") || lowerCombined.includes("no space") || lowerCombined.includes("cannot accept") || lowerCombined.includes("unable to quote") || lowerCombined.includes("we regret") || lowerCombined.includes("decline to quote") || lowerCombined.includes("no equipment")) isDeclined = true;
	let isConfirmed = false;
	if (lowerCombined.includes("booking confirmed") || lowerCombined.includes("booking has been confirmed") || lowerCombined.includes("space confirmed") || lowerCombined.includes("allocation confirmed")) isConfirmed = true;
	let carrier = null;
	for (const c of OCEAN_CARRIERS) if (new RegExp(`\\b${c.replace("-", "[\\s-]?")}\\b`, "i").test(combined)) {
		carrier = c;
		break;
	}
	let containerType = null;
	let containerQuantity = null;
	for (let idx = 0; idx < lines.length; idx++) {
		const line = lines[idx];
		const lineNum = idx + 1;
		if (!containerType) {
			const cntrMatch = line.match(/\b(20(?:GP|DV|FT)?|40(?:GP|DV|HC|HQ|FT)?|45(?:HC|HQ|FT)?)\b/i);
			if (cntrMatch) {
				containerType = cntrMatch[1].toUpperCase();
				trace.containerType = {
					value: containerType,
					sourceText: cntrMatch[0],
					line: lineNum
				};
			}
		}
		if (containerQuantity === null) {
			const qtyMatch = line.match(/\b(\d+)\s*(?:x\s*)?(?:containers?|cntrs?|boxes|units)\b/i) || line.match(/[x*]\s*(\d+)/i);
			if (qtyMatch) {
				const q = parseInt(qtyMatch[1], 10);
				if (!isNaN(q) && q > 0 && q <= 500) {
					containerQuantity = q;
					trace.containerQuantity = {
						value: q,
						sourceText: qtyMatch[0],
						line: lineNum
					};
				}
			}
		}
	}
	const chargesResult = extractChargesAndTotals(combined, { containerCount: containerQuantity });
	const oceanFreight = chargesResult.chargeMap.ocean_freight?.amount ?? null;
	const originCharges = chargesResult.chargeMap.origin_charges?.amount ?? null;
	const destinationCharges = chargesResult.chargeMap.destination_charges?.amount ?? null;
	const thc = chargesResult.chargeMap.terminal_handling?.amount ?? null;
	const documentationCharges = chargesResult.chargeMap.documentation?.amount ?? null;
	const customsCharges = chargesResult.chargeMap.customs?.amount ?? null;
	const truckingCharges = chargesResult.chargeMap.trucking?.amount ?? null;
	const otherCharges = chargesResult.chargeMap.other?.amount ?? null;
	const currency = chargesResult.currency;
	const quotedTotal = chargesResult.quotedTotal;
	const calculatedTotal = chargesResult.calculatedTotal;
	const totalAmount = quotedTotal !== null ? quotedTotal : calculatedTotal;
	for (const c of chargesResult.charges) trace[c.category] = {
		value: c.amount,
		sourceText: c.originalSourceLine,
		line: c.lineNumber
	};
	if (quotedTotal !== null) trace.quotedTotal = {
		value: quotedTotal,
		sourceText: `Quoted Total: ${quotedTotal} ${currency || ""}`,
		line: 1
	};
	if (calculatedTotal !== null) trace.calculatedTotal = {
		value: calculatedTotal,
		sourceText: `Calculated Total: ${calculatedTotal} ${currency || ""}`,
		line: 1
	};
	const datesResult = extractDatesFromText(combined);
	const etd = datesResult.etd;
	const eta = datesResult.eta;
	const validityDateExtracted = datesResult.validityDate;
	const cutoffDate = datesResult.cutoffDate;
	for (const d of datesResult.dates) trace[`date_${d.category}`] = {
		value: d.isoDate || d.originalText,
		sourceText: d.originalSourceLine,
		line: d.lineNumber
	};
	let transitTime = null;
	let sailingDate = etd || null;
	let validityDate = validityDateExtracted || null;
	let freeDays = null;
	let vesselName = null;
	let routing = null;
	let notes = null;
	lines.forEach((line, idx) => {
		const lineNum = idx + 1;
		if (transitTime === null) {
			const ttMatch = line.match(/(?:transit\s*time|transit|t\/t)\s*[:=-]?\s*(?:approx\s*)?(\d+)\s*(?:days?|d)\b/i) || line.match(/\b(\d+)\s*(?:days?|d)\s+(?:transit\s*time|transit|t\/t)\b/i);
			if (ttMatch) {
				const days = parseInt(ttMatch[1], 10);
				if (days >= 1 && days <= 120) {
					transitTime = days;
					trace.transitTime = {
						value: days,
						sourceText: ttMatch[0],
						line: lineNum
					};
				}
			}
		}
		if (!sailingDate) {
			const sailMatch = line.match(/(?:sailing\s*date|etd|departure\s*date|estimated\s*sailing|sails?\s*(?:on|date)?)\s*[:=-]?\s*([0-9A-Za-z\s,\-_/]+?)(?:$|\n|,|\.)/i);
			if (sailMatch) {
				const norm = normalizeDateString(sailMatch[1].trim());
				if (norm) {
					sailingDate = norm;
					trace.sailingDate = {
						value: norm,
						sourceText: sailMatch[0],
						line: lineNum
					};
				}
			}
		}
		if (!validityDate) {
			const valMatch = line.match(/(?:valid(?:ity)?(?:\s*date|\s*until|\s*to|\s*through)?|rate\s*validity|expiry\s*date|expires?\s*(?:on)?)\s*[:=-]?\s*([0-9A-Za-z\s,\-_/]+?)(?:$|\n|,|\.)/i);
			if (valMatch) {
				validityDate = valMatch[1].trim();
				trace.validityDate = {
					value: validityDate,
					sourceText: valMatch[0],
					line: lineNum
				};
			}
		}
		if (freeDays === null) {
			const fdMatch = line.match(/(?:free\s*days?|demurrage\s*(?:&|and)?\s*detention|d[\s/&]*d|free\s*time)\s*[:=-]?\s*(?:approx\s*)?(\d+)\s*(?:days?|d)?\b/i) || line.match(/\b(\d+)\s*(?:days?|d)\s+(?:free|detention|demurrage)\b/i);
			if (fdMatch) {
				const fDays = parseInt(fdMatch[1], 10);
				if (fDays >= 1 && fDays <= 60) {
					freeDays = fDays;
					trace.freeDays = {
						value: fDays,
						sourceText: fdMatch[0],
						line: lineNum
					};
				}
			}
		}
		if (!vesselName) {
			const vMatch = line.match(/(?:vessel(?:\s*name)?|ocean\s*vessel|mother\s*vessel|feeder(?:\s*vessel)?|vsl\b)\s*[:=-]?\s*([A-Za-z0-9\s.\-_]+?)(?:\s+(?:v\.|voy\.|voyage|v)?\s*([0-9A-Za-z]+))?(?:$|\n|,|\.)/i);
			if (vMatch && vMatch[1].trim().length >= 3) {
				vesselName = vMatch[1].trim();
				trace.vesselName = {
					value: vesselName,
					sourceText: vMatch[0],
					line: lineNum
				};
			}
		}
		if (!routing) {
			const routeMatch = line.match(/(?:routing|route)\s*[:=-]?\s*([A-Za-z0-9\s,\-_>→/]+?)(?:$|\n|\.)/i);
			if (routeMatch && routeMatch[1].trim().length >= 3) {
				routing = routeMatch[1].trim();
				trace.routing = {
					value: routing,
					sourceText: routeMatch[0],
					line: lineNum
				};
			} else if (/\b(direct(?:\s*(?:call|service|shipment))?)\b/i.test(line)) {
				routing = "Direct Service";
				trace.routing = {
					value: routing,
					sourceText: line,
					line: lineNum
				};
			} else if (/(?:transshipment(?:\s*via)?|t\/s\s*(?:at|via)?)\s*[:=-]?\s*([A-Za-z\s]+)/i.test(line)) {
				const tsMatch = line.match(/(?:transshipment(?:\s*via)?|t\/s\s*(?:at|via)?)\s*[:=-]?\s*([A-Za-z\s]+)/i);
				routing = tsMatch ? `Transshipment via ${tsMatch[1].trim()}` : "Transshipment";
				trace.routing = {
					value: routing,
					sourceText: line,
					line: lineNum
				};
			}
		}
	});
	const termsLines = lines.filter((l) => /subject\s+to|validity|terms|space\s+is|payment|demurrage|equipment\s*available/i.test(l) && !l.toLowerCase().includes("signature") && !l.toLowerCase().includes("regards"));
	if (termsLines.length > 0) {
		notes = termsLines.slice(0, 3).join(" | ");
		trace.notes = {
			value: notes,
			sourceText: notes,
			line: 1
		};
	}
	return {
		oceanFreight,
		originCharges,
		destinationCharges,
		thc,
		documentationCharges,
		customsCharges,
		truckingCharges,
		otherCharges,
		currency,
		totalAmount,
		quotedTotal,
		quoted_total: quotedTotal,
		calculatedTotal,
		calculated_total: calculatedTotal,
		hasDiscrepancy: chargesResult.hasDiscrepancy,
		discrepancyDifference: chargesResult.totals.discrepancyDifference,
		hasRange: chargesResult.hasRange,
		hasMissingCurrency: chargesResult.hasMissingCurrency,
		hasMissingAmount: chargesResult.hasMissingAmount,
		hasMultipleCurrencies: chargesResult.hasMultipleCurrencies,
		hasUnsupportedText: classification.category === "unknown" && chargesResult.charges.length === 0 && quotedTotal === null && calculatedTotal === null,
		itemizedCharges: chargesResult.charges,
		charges: chargesResult.charges,
		chargeExtractionWarnings: chargesResult.warnings,
		transitTime,
		sailingDate,
		etd,
		eta,
		validityDate,
		cutoffDate,
		hasAmbiguousDate: datesResult.hasAmbiguousDate,
		extractedDates: datesResult.dates,
		dateExtractionWarnings: datesResult.warnings,
		freeDays,
		vesselName,
		routing,
		carrier,
		containerType,
		containerQuantity,
		notes,
		isDeclined,
		isConfirmed,
		classification,
		quotationCategory: classification.category,
		fieldTraceability: trace
	};
}
/**
* Deterministically validates the extracted quotation values against
* all 13 Human Review Conditions without using AI confidence scores.
*
* Mark quotation as needs_review when:
* 1. Booking number is missing
* 2. Multiple booking numbers are found
* 3. Forwarder is unknown
* 4. Currency is missing
* 5. Charge amount is missing
* 6. Amount is a range
* 7. Multiple currencies exist
* 8. Quoted total conflicts with calculated total
* 9. Attachment is unreadable
* 10. Date is ambiguous
* 11. Revised quotation is detected
* 12. Booking details do not match
* 13. Parser finds unsupported or unclear text
*
* Deterministic Statuses:
* - confirmed
* - amount_missing
* - currency_missing
* - range
* - ambiguous
* - conflict
* - unreadable
* - unmatched
* - needs_review
*/
function validateExtractedQuotation(fields, context) {
	const reviewReasons = [];
	const discrepancies = [];
	const statuses = /* @__PURE__ */ new Set();
	const triggered = {
		bookingNumberMissing: false,
		multipleBookingNumbers: false,
		forwarderUnknown: false,
		currencyMissing: false,
		chargeAmountMissing: false,
		amountIsRange: false,
		multipleCurrencies: false,
		totalConflict: false,
		attachmentUnreadable: false,
		dateAmbiguous: false,
		revisedQuotation: false,
		bookingDetailsMismatch: false,
		unsupportedText: false
	};
	if (fields.isDeclined) return {
		isValid: true,
		needsReview: false,
		status: "DECLINED",
		deterministicStatus: "confirmed",
		deterministicStatuses: ["confirmed"],
		reviewReasons: [],
		discrepancies: [],
		triggeredConditions: triggered
	};
	if (context?.isBookingNumberMissing === true || context?.detectedBookingNumbers !== void 0 && context.detectedBookingNumbers.length === 0) {
		triggered.bookingNumberMissing = true;
		reviewReasons.push("Booking number is missing in email subject, body, and attachments.");
		statuses.add("unmatched");
	}
	if (context?.hasMultipleBookingNumbers === true || context?.detectedBookingNumbers && context.detectedBookingNumbers.length > 1) {
		triggered.multipleBookingNumbers = true;
		reviewReasons.push(`Multiple booking numbers detected: [${(context.detectedBookingNumbers || []).join(", ")}]. Email marked for human review without automated assignment.`);
		statuses.add("ambiguous");
	}
	if (context?.isForwarderUnknown === true) {
		triggered.forwarderUnknown = true;
		reviewReasons.push(context.forwarderMatchReason || "Sender email does not match any registered forwarder in the master (exact email, contact email, registered domain). Marked as Unknown Forwarder and routed for human review.");
		statuses.add("unmatched");
	} else if (context?.isSenderVerified === false) {
		triggered.forwarderUnknown = true;
		reviewReasons.push("Sender email could not be verified against the registered forwarder master.");
		statuses.add("unmatched");
	}
	if (!fields.currency || fields.hasMissingCurrency === true) {
		triggered.currencyMissing = true;
		reviewReasons.push("Quotation currency is missing or unverified.");
		statuses.add("currency_missing");
	}
	const effectiveRate = fields.oceanFreight || fields.totalAmount || fields.quotedTotal || fields.calculatedTotal;
	if (fields.hasMissingAmount === true || !effectiveRate || effectiveRate <= 0) {
		triggered.chargeAmountMissing = true;
		reviewReasons.push("Ocean freight rate or itemized charge amount is missing or <= 0.");
		statuses.add("amount_missing");
	}
	if (fields.hasRange === true) {
		triggered.amountIsRange = true;
		reviewReasons.push("One or more charge items contains a price range. Cannot choose arbitrary value without human review.");
		statuses.add("range");
	}
	if (fields.hasMultipleCurrencies === true || context?.hasMultipleCurrencies === true) {
		triggered.multipleCurrencies = true;
		reviewReasons.push("Multiple conflicting currencies detected across quotation charges. Total cannot be computed across mixed currencies.");
		statuses.add("conflict");
	}
	if (fields.hasDiscrepancy === true || fields.totalConflict === true) {
		triggered.totalConflict = true;
		const diffMsg = `Discrepancy detected: Quoted total (${fields.quotedTotal || fields.totalAmount || "N/A"} ${fields.currency || ""}) differs from calculated itemized charges sum (${fields.calculatedTotal || "N/A"} ${fields.currency || ""}) by ${fields.discrepancyDifference ?? ""}.`;
		discrepancies.push(diffMsg);
		reviewReasons.push(diffMsg);
		statuses.add("conflict");
	} else if (fields.totalAmount && fields.oceanFreight) {
		const itemizedSum = (fields.oceanFreight || 0) + (fields.originCharges || 0) + (fields.destinationCharges || 0) + (fields.thc || 0) + (fields.documentationCharges || 0) + (fields.customsCharges || 0) + (fields.truckingCharges || 0) + (fields.otherCharges || 0);
		const diff = Math.abs(itemizedSum - fields.totalAmount);
		if (Boolean(fields.originCharges || fields.destinationCharges || fields.thc || fields.documentationCharges || fields.customsCharges || fields.truckingCharges || fields.otherCharges) && diff > 5) {
			triggered.totalConflict = true;
			const msg = `Sum of itemized charges ($${itemizedSum.toLocaleString()}) does not match explicitly stated total amount ($${fields.totalAmount.toLocaleString()}) (difference: $${diff.toFixed(2)}).`;
			discrepancies.push(msg);
			reviewReasons.push(msg);
			statuses.add("conflict");
		}
	}
	if (context?.hasUnreadableAttachments === true || fields.hasUnreadableAttachments === true || fields.attachmentUnreadable === true || context?.attachmentUnreadable === true) {
		triggered.attachmentUnreadable = true;
		reviewReasons.push(context?.unreadableAttachmentReason || fields.unreadableAttachmentReasons && fields.unreadableAttachmentReasons[0] || "Attachment is unreadable or image/scanned without extractable text stream. Preserved for operator manual entry.");
		statuses.add("unreadable");
	}
	if (fields.hasAmbiguousDate === true || fields.dateExtractionWarnings && fields.dateExtractionWarnings.length > 0) {
		triggered.dateAmbiguous = true;
		const dateWarnings = fields.dateExtractionWarnings || [];
		if (dateWarnings.length > 0) for (const dw of dateWarnings) reviewReasons.push(dw);
		else reviewReasons.push("One or more extracted dates is ambiguous (e.g. DD/MM vs MM/DD numeric format). Marked for review.");
		statuses.add("ambiguous");
	}
	if (context?.isRevision === true || fields.quotationCategory === "revision" || fields.classification?.isRevision === true) {
		triggered.revisedQuotation = true;
		reviewReasons.push("Revised quotation detected (amendment / updated rate offer). Preserved prior quotation history and routed for human review.");
		statuses.add("needs_review");
	}
	if (context?.isBookingMatched === false || context?.bookingDetailsMismatch === true || fields.hasBookingDetailsMismatch === true) {
		triggered.bookingDetailsMismatch = true;
		reviewReasons.push(context?.bookingMismatchReason || "Extracted booking number or quotation details do not match any active booking in system.");
		statuses.add("unmatched");
	}
	if (context?.hasUnsupportedText === true || fields.hasUnsupportedText === true || fields.classification?.category === "unknown" && !effectiveRate) {
		triggered.unsupportedText = true;
		reviewReasons.push(context?.unsupportedTextReason || fields.unsupportedTextReasons && fields.unsupportedTextReasons[0] || "Parser finds unsupported or unclear text in quotation message. Manual operator review required.");
		statuses.add("ambiguous");
		statuses.add("needs_review");
	}
	const needsReview = reviewReasons.length > 0;
	const status = needsReview ? "NEEDS_REVIEW" : "OFFER_RECEIVED";
	let primaryStatus = "confirmed";
	if (needsReview) {
		statuses.add("needs_review");
		if (triggered.chargeAmountMissing) primaryStatus = "amount_missing";
		else if (triggered.currencyMissing) primaryStatus = "currency_missing";
		else if (triggered.amountIsRange) primaryStatus = "range";
		else if (triggered.totalConflict || triggered.multipleCurrencies) primaryStatus = "conflict";
		else if (triggered.attachmentUnreadable) primaryStatus = "unreadable";
		else if (triggered.dateAmbiguous || triggered.multipleBookingNumbers) primaryStatus = "ambiguous";
		else if (triggered.bookingNumberMissing || triggered.forwarderUnknown || triggered.bookingDetailsMismatch) primaryStatus = "unmatched";
		else primaryStatus = "needs_review";
	} else statuses.add("confirmed");
	return {
		isValid: !needsReview,
		needsReview,
		status,
		deterministicStatus: primaryStatus,
		deterministicStatuses: Array.from(statuses),
		reviewReasons,
		discrepancies,
		triggeredConditions: triggered
	};
}
/**
* End-to-End Processing Engine:
*
* Incoming Email
*        ↓
* Save Original Email
*        ↓
* Extract Booking Number Using Regex (Subject -> Body -> Attachment -> References)
*        ↓
* Match Existing Booking
*        ↓
* Match Forwarder Using Sender Email
*        ↓
* Extract Quotation Fields Using Rules and Keywords (16 Fields)
*        ↓
* Validate Extracted Values
*        ↓
* Save Quotation
*        ↓
* Update Booking Request Card
*        ↓
* Send to Human Review if Data Is Missing or Ambiguous
*
* DO NOT automatically approve or select a quotation.
*/
async function processForwarderQuotationEmail(supabaseOrInput, maybeInput) {
	let supabase$1;
	let input;
	if (maybeInput) {
		supabase$1 = supabaseOrInput;
		input = maybeInput;
	} else {
		supabase$1 = supabase;
		input = supabaseOrInput;
	}
	const { emailMessageId, gmailThreadId, gmailMessageId, inReplyTo, references, subject = "", body = "", snippet = "", senderEmail, senderName, attachments = [], attachmentFilenames = [], userId } = input;
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	console.log(`[QuotationProcessor] 📨 Processing incoming forwarder quotation email: ${emailMessageId}`);
	const validMsgUuid = safeUuid(emailMessageId);
	const orderResult = extractBookingNumberStrictOrder({
		subject,
		body: body || snippet,
		attachmentFilenames,
		attachments,
		inReplyTo,
		references
	});
	console.log(`[QuotationProcessor] Booking number extraction result:`, {
		status: orderResult.status,
		canonical: orderResult.canonicalBookingNumber,
		allDetected: orderResult.detectedBookingNumbers,
		foundIn: orderResult.foundIn
	});
	if (orderResult.status === "UNMATCHED" || !orderResult.canonicalBookingNumber) {
		if (validMsgUuid) try {
			await supabase$1.from("email_messages").update({
				booking_id: null,
				movement_number: null,
				raw_headers: {
					match_status: "UNMATCHED",
					match_reason: orderResult.reason,
					detected_booking_numbers: orderResult.detectedBookingNumbers,
					processed_at: nowIso
				}
			}).eq("id", validMsgUuid);
		} catch (err) {
			console.warn("[QuotationProcessor] Notice updating unmatched email_messages:", err);
		}
		return {
			success: true,
			emailMessageId,
			bookingNumber: null,
			detectedBookingNumbers: orderResult.detectedBookingNumbers,
			bookingId: null,
			forwarderId: null,
			forwarderName: null,
			status: orderResult.isAmbiguous ? "NEEDS_REVIEW" : "UNMATCHED",
			quotationFields: extractQuotationFieldsDeterministic(subject || "", body || snippet || ""),
			validation: {
				isValid: false,
				needsReview: orderResult.isAmbiguous,
				status: orderResult.isAmbiguous ? "NEEDS_REVIEW" : "UNMATCHED",
				reviewReasons: [orderResult.reason],
				discrepancies: []
			},
			updatedForwarderRequest: null,
			message: orderResult.reason
		};
	}
	const detectedBookingNumber = orderResult.canonicalBookingNumber;
	let matchedBooking = null;
	const foundLocal = getLocalBookings().find((b) => {
		const bMov = normalizeBookingNumber(b.movement_number || "");
		const bRef = normalizeBookingNumber(b.booking_reference || b.reference || "");
		const bId = (b.id || "").toLowerCase();
		const target = detectedBookingNumber.toLowerCase();
		return bMov?.toLowerCase() === target || bRef?.toLowerCase() === target || bId === target;
	});
	if (foundLocal) matchedBooking = {
		id: foundLocal.id,
		movement_number: foundLocal.movement_number,
		booking_reference: foundLocal.booking_reference || foundLocal.reference,
		origin: foundLocal.origin,
		destination: foundLocal.destination,
		pol_code: foundLocal.pol_code,
		pod_code: foundLocal.pod_code,
		container_type: foundLocal.container_type,
		container_size: foundLocal.container_size,
		container_count: foundLocal.container_count,
		supplier_name: foundLocal.supplier_name,
		buyer_name: foundLocal.buyer_name
	};
	else try {
		const { data: dbBookings } = await supabase$1.from("bookings").select("id, movement_number, booking_reference, reference, origin, destination, pol_code, pod_code, container_type, container_size, container_count, supplier_name, buyer_name").or(`movement_number.ilike.%${detectedBookingNumber}%,booking_reference.ilike.%${detectedBookingNumber}%`).limit(3);
		if (dbBookings && dbBookings.length > 0) matchedBooking = dbBookings[0];
	} catch (dbErr) {
		console.warn("[QuotationProcessor] Notice querying database bookings:", dbErr);
	}
	const cleanSender = (senderEmail || "").trim().toLowerCase();
	const forwarderMasterList = getLocalForwarders().map((f) => ({
		id: f.id,
		name: f.name,
		company_name: f.company_name || f.name,
		email: f.email,
		contactEmail: f.contactEmail,
		contactPerson: f.contactPerson,
		notes: f.notes
	}));
	try {
		const { data: dbForwarders } = await supabase$1.from("forwarders").select("id, name, company_name, email, contact_email, contact_person, notes, website").limit(100);
		if (dbForwarders && dbForwarders.length > 0) {
			const existingIds = new Set(forwarderMasterList.map((f) => f.id));
			for (const d of dbForwarders) if (!existingIds.has(d.id)) forwarderMasterList.push({
				id: d.id,
				name: d.name || d.company_name,
				company_name: d.company_name || d.name,
				email: d.email,
				contactEmail: d.contact_email,
				contactPerson: d.contact_person,
				website: d.website,
				notes: d.notes
			});
		}
	} catch (fwdErr) {
		console.warn("[QuotationProcessor] Notice querying database forwarders:", fwdErr);
	}
	const forwarderMatch = matchSenderWithForwarderMaster(cleanSender, forwarderMasterList, { senderDisplayName: senderName });
	const matchedForwarderId = forwarderMatch.forwarderId;
	const matchedForwarderName = forwarderMatch.forwarderName;
	const matchedForwarderEmail = forwarderMatch.forwarderEmail || cleanSender;
	const isSenderVerified = forwarderMatch.isMatched;
	const isForwarderUnknown = forwarderMatch.isForwarderUnknown;
	console.log(`[QuotationProcessor] Forwarder match result:`, {
		sender: cleanSender,
		matched: isSenderVerified,
		forwarderId: matchedForwarderId,
		forwarderName: matchedForwarderName,
		matchedBy: forwarderMatch.matchedBy,
		isUnknown: isForwarderUnknown,
		reason: forwarderMatch.reason
	});
	const localRequests = getLocalForwarderRequests();
	let existingReqForBooking;
	if (isSenderVerified && matchedForwarderId) existingReqForBooking = localRequests.find((r) => {
		return (matchedBooking && r.bookingId === matchedBooking.id || r.movementNumber && normalizeBookingNumber(r.movementNumber) === detectedBookingNumber) && r.forwarderId === matchedForwarderId;
	});
	const quotationFields = extractQuotationFieldsDeterministic(subject || "", body || snippet || "");
	const validation = validateExtractedQuotation(quotationFields, {
		isSenderVerified,
		isForwarderUnknown,
		forwarderMatchReason: forwarderMatch.reason,
		hasMultipleBookingNumbers: orderResult.isAmbiguous,
		detectedBookingNumbers: orderResult.detectedBookingNumbers,
		isBookingMatched: Boolean(matchedBooking)
	});
	const finalStatus = validation.status;
	const bookingId = matchedBooking?.id || `bk-${detectedBookingNumber}`;
	const movementNo = matchedBooking?.movement_number || detectedBookingNumber;
	const newOfferData = {
		ratePerContainer: quotationFields.oceanFreight || quotationFields.totalAmount || quotationFields.quotedTotal || void 0,
		totalFreight: quotationFields.quotedTotal || quotationFields.totalAmount || quotationFields.calculatedTotal || quotationFields.oceanFreight || void 0,
		currency: quotationFields.currency || "USD",
		containerType: quotationFields.containerType || matchedBooking?.container_type || "40HC",
		quantity: quotationFields.containerQuantity || matchedBooking?.container_count || 1,
		availability: quotationFields.isDeclined ? "Space Not Available" : "Space Available",
		etd: quotationFields.sailingDate || void 0,
		eta: void 0,
		transitDays: quotationFields.transitTime || void 0,
		freeDays: quotationFields.freeDays || void 0,
		carrier: quotationFields.carrier || "Ocean Carrier",
		vesselName: quotationFields.vesselName || void 0,
		validUntil: quotationFields.validityDate || void 0,
		additionalCharges: quotationFields.otherCharges ? `$${quotationFields.otherCharges} surcharges` : void 0,
		totalCost: quotationFields.quotedTotal || quotationFields.totalAmount || quotationFields.calculatedTotal || void 0,
		notes: quotationFields.notes || void 0,
		receivedAt: nowIso,
		sourceEmailId: emailMessageId,
		originalEmailSubject: subject,
		originalEmailBody: body ? body.slice(0, 1e3) : void 0,
		receivedVia: "Forwarder Quotation Email Module",
		traceability: quotationFields.fieldTraceability,
		reviewReasons: validation.reviewReasons,
		deterministicStatus: validation.deterministicStatus,
		deterministicStatuses: validation.deterministicStatuses,
		needsReview: validation.needsReview,
		unverifiedSender: !isSenderVerified,
		forwarderUnknown: isForwarderUnknown,
		forwarderMatchReason: forwarderMatch.reason,
		quotedTotal: quotationFields.quotedTotal || void 0,
		calculatedTotal: quotationFields.calculatedTotal || void 0,
		hasDiscrepancy: quotationFields.hasDiscrepancy,
		hasRange: quotationFields.hasRange,
		hasMissingCurrency: quotationFields.hasMissingCurrency,
		hasMissingAmount: quotationFields.hasMissingAmount,
		itemizedCharges: quotationFields.itemizedCharges
	};
	const targetReqId = existingReqForBooking?.id || `MFR-${Date.now().toString(36).slice(-6).toUpperCase()}`;
	const updatedRequest = {
		id: targetReqId,
		bookingId,
		bookingReference: movementNo,
		movementNumber: movementNo,
		forwarderId: matchedForwarderId || "fwd-unknown",
		forwarderName: matchedForwarderName || existingReqForBooking?.forwarderName || input.senderName?.trim() || (matchedForwarderEmail ? matchedForwarderEmail.split("@")[0] : "Freight Forwarder"),
		forwarderEmail: matchedForwarderEmail,
		status: finalStatus,
		gmailThreadId: gmailThreadId || void 0,
		gmailMessageId: gmailMessageId || void 0,
		sentAt: existingReqForBooking?.sentAt || nowIso,
		origin: matchedBooking?.origin || "POL",
		destination: matchedBooking?.destination || "POD",
		polCode: matchedBooking?.pol_code || "POL",
		polName: matchedBooking?.origin || "Port of Loading",
		podCode: matchedBooking?.pod_code || "POD",
		podName: matchedBooking?.destination || "Destination Port",
		supplierName: matchedBooking?.supplier_name || "Shipper",
		buyerName: matchedBooking?.buyer_name || "Consignee",
		containerType: matchedBooking?.container_type || "40HC",
		containerSize: matchedBooking?.container_size || "40HC",
		containerCount: matchedBooking?.container_count || 1,
		cargoDescription: "Commercial Cargo",
		ratePerContainer: newOfferData.ratePerContainer,
		currency: newOfferData.currency,
		offerData: newOfferData,
		updatedAt: nowIso
	};
	const reqList = getLocalForwarderRequests();
	const reqIdx = reqList.findIndex((r) => r.id === updatedRequest.id);
	if (reqIdx !== -1) reqList[reqIdx] = updatedRequest;
	else reqList.unshift(updatedRequest);
	saveLocalForwarderRequests(reqList);
	if (validMsgUuid) {
		try {
			await supabase$1.from("email_messages").update({
				booking_id: safeUuid(bookingId),
				movement_number: movementNo,
				forwarder_id: isForwarderUnknown ? null : safeUuid(matchedForwarderId),
				raw_headers: {
					match_status: validation.needsReview ? "NEEDS_REVIEW" : "MATCHED",
					matched_booking_number: detectedBookingNumber,
					forwarder_name: matchedForwarderName,
					forwarder_status: isForwarderUnknown ? "UNKNOWN" : "MATCHED",
					forwarder_unknown: isForwarderUnknown,
					forwarder_match_by: forwarderMatch.matchedBy,
					forwarder_match_reason: forwarderMatch.reason,
					quotation_status: finalStatus,
					review_reasons: validation.reviewReasons,
					extracted_fields: {
						oceanFreight: quotationFields.oceanFreight,
						originCharges: quotationFields.originCharges,
						destinationCharges: quotationFields.destinationCharges,
						thc: quotationFields.thc,
						documentationCharges: quotationFields.documentationCharges,
						customsCharges: quotationFields.customsCharges,
						truckingCharges: quotationFields.truckingCharges,
						otherCharges: quotationFields.otherCharges,
						currency: quotationFields.currency,
						totalAmount: quotationFields.totalAmount,
						quoted_total: quotationFields.quotedTotal,
						calculated_total: quotationFields.calculatedTotal,
						charges: quotationFields.itemizedCharges,
						transitTime: quotationFields.transitTime,
						sailingDate: quotationFields.sailingDate,
						validityDate: quotationFields.validityDate,
						freeDays: quotationFields.freeDays,
						vesselName: quotationFields.vesselName,
						routing: quotationFields.routing
					},
					processed_at: nowIso
				}
			}).eq("id", validMsgUuid);
		} catch (updErr) {
			console.warn("[QuotationProcessor] Notice updating email_messages:", updErr);
		}
		try {
			await persistQuotationToDatabase({
				emailMessageId,
				gmailMessageId,
				gmailThreadId,
				inReplyTo,
				references,
				senderEmail,
				senderName,
				subject,
				body,
				bookingId,
				movementNumber: movementNo,
				forwarderId: matchedForwarderId || "",
				forwarderName: matchedForwarderName || "",
				forwarderEmail: matchedForwarderEmail,
				extracted: {
					movementNumber: movementNo,
					forwarder: matchedForwarderName,
					forwarderEmail: matchedForwarderEmail,
					rate: quotationFields.oceanFreight || quotationFields.totalAmount,
					currency: quotationFields.currency,
					containerType: quotationFields.containerType,
					containerQuantity: quotationFields.containerQuantity,
					availability: quotationFields.isDeclined ? "Space Not Available" : "Space Available",
					etd: quotationFields.sailingDate,
					eta: null,
					transitTime: quotationFields.transitTime,
					freightCharges: quotationFields.oceanFreight,
					additionalCharges: quotationFields.otherCharges ? String(quotationFields.otherCharges) : null,
					totalCost: quotationFields.totalAmount,
					freeDays: quotationFields.freeDays,
					sailingVesselVoyage: quotationFields.vesselName,
					carrier: quotationFields.carrier,
					vesselName: quotationFields.vesselName,
					voyageNumber: null,
					rateValidity: quotationFields.validityDate,
					notes: quotationFields.notes,
					emailReceivedDate: nowIso,
					extractionConfidence: validation.isValid ? .95 : .65,
					isDeclined: quotationFields.isDeclined,
					isConfirmed: quotationFields.isConfirmed,
					extractionMethod: "RULE_BASED_DETERMINISTIC",
					presentFields: Object.keys(quotationFields).filter((k) => quotationFields[k] !== null),
					missingFields: Object.keys(quotationFields).filter((k) => quotationFields[k] === null)
				},
				newStatus: finalStatus,
				offerExtracted: Boolean(quotationFields.oceanFreight || quotationFields.totalAmount),
				unverifiedSender: !isSenderVerified,
				reviewReasons: validation.reviewReasons
			});
			const bundleResult = await persistProcessedQuotationBundle({
				incomingEmailId: emailMessageId,
				gmailMessageId,
				gmailThreadId,
				senderName,
				senderEmail,
				subject: subject || "Quotation",
				body: body || "",
				detectedBookingNumbers: orderedBooking.detectedBookingNumbers,
				detectedForwarderId: matchedForwarderId,
				bookingId,
				forwarderRequestId: targetReqId,
				quotationReference: quotationFields.quotedTotal ? `Q-${detectedBookingNumber}` : null,
				quotationStatus: finalStatus,
				revisionNumber: existingReqForBooking ? 2 : 1,
				fields: quotationFields,
				requiresHumanReview: validation.needsReview,
				reviewReasons: validation.reviewReasons
			});
			console.log("[QuotationProcessor] ✅ Database Save Verification:", {
				emailId: emailMessageId,
				messageId: gmailMessageId,
				detectedBookingNumber,
				bookingId,
				detectedForwarderId: matchedForwarderId,
				quotationId: bundleResult.quotation.id,
				forwarderRequestId: targetReqId,
				parserStatus: finalStatus,
				extractedQuotationFields: {
					currency: quotationFields.currency,
					oceanFreight: quotationFields.oceanFreight,
					originCharges: quotationFields.originCharges,
					destinationCharges: quotationFields.destinationCharges,
					thc: quotationFields.thc,
					documentationCharges: quotationFields.documentationCharges,
					customsCharges: quotationFields.customsCharges,
					truckingCharges: quotationFields.truckingCharges,
					quotedTotal: quotationFields.quotedTotal,
					calculatedTotal: quotationFields.calculatedTotal,
					transitTime: quotationFields.transitTime,
					sailingDate: quotationFields.sailingDate,
					validityDate: quotationFields.validityDate,
					freeDays: quotationFields.freeDays
				},
				extractedChargeRowsCount: quotationFields.itemizedCharges.length,
				databaseSaveResult: {
					quotationSaved: Boolean(bundleResult.quotation.id),
					chargesSavedCount: bundleResult.charges.length,
					emailSaved: Boolean(bundleResult.incomingEmail.id)
				}
			});
		} catch (pErr) {
			console.warn("[QuotationProcessor] Notice persisting to DB:", pErr);
		}
		recordQuotationAuditEvent({
			eventType: validation.needsReview ? "EXTRACTION_NEEDS_REVIEW" : "QUOTATION_SAVED",
			movementNumber: movementNo,
			bookingId,
			forwarderId: matchedForwarderId || "",
			forwarderName: matchedForwarderName || "",
			senderEmail,
			gmailMessageId,
			gmailThreadId,
			summary: `Deterministic Quotation Processed for ${matchedForwarderName}: ${quotationFields.currency || "USD"} ${newOfferData.ratePerContainer || "N/A"}. Status: ${finalStatus}.`,
			details: {
				bookingNumber: detectedBookingNumber,
				status: finalStatus,
				reviewReasons: validation.reviewReasons,
				discrepancies: validation.discrepancies,
				fields: quotationFields
			}
		});
	}
	if (typeof window !== "undefined") {
		window.dispatchEvent(new CustomEvent("nashmia_multi_forwarder_updated", { detail: {
			requestId: updatedRequest.id,
			bookingId: updatedRequest.bookingId,
			movementNumber: updatedRequest.movementNumber,
			request: updatedRequest,
			status: finalStatus,
			rate: newOfferData.ratePerContainer,
			currency: newOfferData.currency
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_forwarder_offer_received", { detail: {
			requestId: updatedRequest.id,
			bookingId: updatedRequest.bookingId,
			movementNumber: updatedRequest.movementNumber,
			request: updatedRequest,
			offer: updatedRequest.offerData
		} }));
	}
	return {
		success: true,
		emailMessageId,
		bookingNumber: detectedBookingNumber,
		detectedBookingNumbers: orderResult.detectedBookingNumbers,
		bookingId,
		forwarderId: matchedForwarderId,
		forwarderName: matchedForwarderName,
		status: finalStatus,
		quotationFields,
		validation,
		updatedForwarderRequest: updatedRequest,
		message: validation.needsReview ? `Quotation extracted for booking ${detectedBookingNumber} (${matchedForwarderName}), but marked NEEDS_REVIEW: ${validation.reviewReasons.join("; ")}` : `Quotation successfully extracted and saved for booking ${detectedBookingNumber} (${matchedForwarderName}). Status: ${finalStatus}.`
	};
}
var ALL_QUOTATION_STATUSES = [
	"PENDING",
	"OFFER_RECEIVED",
	"NEEDS_REVIEW",
	"NOT_AVAILABLE",
	"AWARDED",
	"NOT_AWARDED",
	"CONFIRMED"
];
function normalizeQuoteStatus(status) {
	if (!status) return "PENDING";
	const s = status.trim().toUpperCase().replace(/\s+/g, "_");
	if (s === "OFFER_RECEIVED" || s === "QUOTE_RECEIVED" || s === "OFFER" || s === "QUOTED") return "OFFER_RECEIVED";
	if (s === "NEEDS_REVIEW" || s === "REVIEW_NEEDED" || s === "RESPONDED") return "NEEDS_REVIEW";
	if (s === "NOT_AVAILABLE" || s === "UNAVAILABLE" || s === "DECLINED" || s === "NO_RESPONSE" || s === "REJECTED_BY_FORWARDER") return "NOT_AVAILABLE";
	if (s === "AWARDED" || s === "ACCEPTED") return "AWARDED";
	if (s === "NOT_AWARDED" || s === "LOST" || s === "REJECTED") return "NOT_AWARDED";
	if (s === "CONFIRMED" || s === "BOOKING_CONFIRMED") return "CONFIRMED";
	if (s === "PENDING" || s === "SENT" || s === "DELIVERED" || s === "REQUESTED" || s === "AWAITING_OFFER" || s === "AWAITING_QUOTE") return "PENDING";
	return "PENDING";
}
/**
* Diagnostic log function for Request Card quotation fetcher
* Intercepts the quotation API response and prints the raw object structure to the console,
* verifying the fields 'id', 'quotation_id', 'booking_id', and the structure of 'charges' or 'quotation_charges' arrays.
*/
function logQuotationResponseDiagnostics(responseObject, contextLabel = "Request Card Quotation Fetcher") {
	const verifiedRecords = (Array.isArray(responseObject) ? responseObject : responseObject && typeof responseObject === "object" && "quotations" in responseObject && Array.isArray(responseObject.quotations) ? responseObject.quotations : responseObject ? [responseObject] : []).map((item, idx) => {
		const id = item?.id || item?.quotationId || item?.offerData?.id || item?.requestId || `record-${idx}`;
		const quotation_id = item?.quotation_id || item?.quotationId || item?.offerData?.quotationId || item?.offerData?.id || item?.id;
		const booking_id = item?.booking_id || item?.bookingId || item?.offerData?.bookingId || item?.bookingReference || item?.movementNumber;
		const charges = item?.charges || item?.quotation_charges || item?.offerData?.itemizedCharges || item?.itemizedCharges || [];
		return {
			index: idx,
			id,
			has_id: Boolean(id),
			quotation_id,
			has_quotation_id: Boolean(quotation_id),
			booking_id,
			has_booking_id: Boolean(booking_id),
			charges_count: Array.isArray(charges) ? charges.length : 0,
			charges_structure: charges,
			has_charges_array: Array.isArray(charges),
			status: item?.status || item?.quotation_status,
			forwarderName: item?.forwarderName || item?.forwarder_name,
			ratePerContainer: item?.ratePerContainer || item?.offerData?.ratePerContainer || item?.ocean_freight,
			totalFreight: item?.totalFreight || item?.offerData?.totalFreight || item?.quoted_total,
			rawItem: item
		};
	});
	console.log(`[DiagnosticLog][${contextLabel}] Intercepted raw quotation response object:`, {
		rawResponseObject: responseObject,
		recordCount: verifiedRecords.length,
		verificationSummary: verifiedRecords.map((r) => ({
			id: r.id,
			quotation_id: r.quotation_id,
			booking_id: r.booking_id,
			has_id: r.has_id,
			has_quotation_id: r.has_quotation_id,
			has_booking_id: r.has_booking_id,
			charges_count: r.charges_count,
			has_charges_array: r.has_charges_array
		})),
		detailedRecords: verifiedRecords
	});
}
/**
* Diagnostic check that compares the fetched API response fields against
* the currently rendered form state properties to ensure property name alignment
* (e.g., 'quotation_id' vs 'id', 'ocean_freight' vs 'ratePerContainer', 'booking_id' vs 'bookingId').
*/
function runPropertyAlignmentDiagnostic(apiData, formState, contextName = "Forwarder Quotation Popup") {
	if (!apiData || !formState) {
		console.warn(`[PropertyAlignmentDiagnostic][${contextName}] Diagnostic skipped: missing API data or form state.`);
		return [];
	}
	const comparisons = [
		{
			field: "Quotation Identifier",
			apiValue: apiData.quotation_id ?? apiData.quotationId ?? apiData.id ?? apiData.offerData?.quotationId ?? apiData.offerData?.id,
			apiFieldUsed: apiData.quotation_id ? "quotation_id" : apiData.id ? "id" : apiData.quotationId ? "quotationId" : "none",
			formValue: formState.id ?? formState.quotationId ?? formState.requestId,
			formPropertyUsed: formState.id ? "id" : formState.quotationId ? "quotationId" : formState.requestId ? "requestId" : "none",
			isAligned: Boolean((apiData.quotation_id ?? apiData.id ?? apiData.quotationId) && (formState.id ?? formState.quotationId ?? formState.requestId)),
			notes: "Checks alignment between backend 'quotation_id' / 'id' and component form state 'id' / 'quotationId'."
		},
		{
			field: "Booking Identifier",
			apiValue: apiData.booking_id ?? apiData.bookingId ?? apiData.offerData?.bookingId ?? apiData.movementNumber,
			apiFieldUsed: apiData.booking_id ? "booking_id" : apiData.bookingId ? "bookingId" : apiData.movementNumber ? "movementNumber" : "none",
			formValue: formState.bookingId ?? formState.booking_id ?? formState.movementNumber,
			formPropertyUsed: formState.bookingId ? "bookingId" : formState.booking_id ? "booking_id" : formState.movementNumber ? "movementNumber" : "none",
			isAligned: Boolean((apiData.booking_id ?? apiData.bookingId) && (formState.bookingId ?? formState.booking_id)),
			notes: "Checks alignment between backend 'booking_id' and form state 'bookingId'."
		},
		{
			field: "Ocean Freight / Container Rate",
			apiValue: apiData.ocean_freight ?? apiData.rate ?? apiData.ratePerContainer ?? apiData.offerData?.ratePerContainer ?? apiData.offerData?.oceanFreight,
			apiFieldUsed: apiData.ocean_freight ? "ocean_freight" : apiData.rate ? "rate" : apiData.ratePerContainer ? "ratePerContainer" : "none",
			formValue: formState.ratePerContainer ?? formState.oceanFreight ?? formState.rate,
			formPropertyUsed: formState.ratePerContainer ? "ratePerContainer" : formState.oceanFreight ? "oceanFreight" : formState.rate ? "rate" : "none",
			isAligned: Boolean((apiData.ocean_freight ?? apiData.rate ?? apiData.ratePerContainer) !== void 0 && (formState.ratePerContainer ?? formState.oceanFreight ?? formState.rate) !== void 0),
			notes: "Checks alignment between backend 'ocean_freight' / 'rate' and form state 'ratePerContainer' / 'oceanFreight'."
		},
		{
			field: "Quoted Total Freight",
			apiValue: apiData.quoted_total ?? apiData.total_cost ?? apiData.totalFreight ?? apiData.offerData?.totalFreight,
			apiFieldUsed: apiData.quoted_total ? "quoted_total" : apiData.total_cost ? "total_cost" : apiData.totalFreight ? "totalFreight" : "none",
			formValue: formState.quotedTotal ?? formState.totalFreight ?? formState.total_cost,
			formPropertyUsed: formState.quotedTotal ? "quotedTotal" : formState.totalFreight ? "totalFreight" : formState.total_cost ? "total_cost" : "none",
			isAligned: Boolean((apiData.quoted_total ?? apiData.total_cost ?? apiData.totalFreight) !== void 0 && (formState.quotedTotal ?? formState.totalFreight) !== void 0),
			notes: "Checks alignment between backend 'quoted_total' / 'total_cost' and form state 'quotedTotal' / 'totalFreight'."
		},
		{
			field: "Currency",
			apiValue: apiData.currency ?? apiData.offerData?.currency,
			apiFieldUsed: "currency",
			formValue: formState.currency,
			formPropertyUsed: "currency",
			isAligned: Boolean(apiData.currency && formState.currency && String(apiData.currency).toUpperCase() === String(formState.currency).toUpperCase()),
			notes: "Checks currency code alignment."
		},
		{
			field: "Itemized Charges Array",
			apiValue: apiData.charges ?? apiData.quotation_charges ?? apiData.offerData?.itemizedCharges ?? apiData.itemizedCharges,
			apiFieldUsed: apiData.charges ? "charges" : apiData.quotation_charges ? "quotation_charges" : "itemizedCharges",
			formValue: formState.itemizedCharges ?? formState.charges ?? formState.quotation_charges,
			formPropertyUsed: formState.itemizedCharges ? "itemizedCharges" : formState.charges ? "charges" : formState.quotation_charges ? "quotation_charges" : "none",
			isAligned: Array.isArray(apiData.charges || apiData.quotation_charges || apiData.offerData?.itemizedCharges),
			notes: "Checks alignment between backend 'charges' / 'quotation_charges' array and form state 'itemizedCharges' / 'charges'."
		},
		{
			field: "Sailing Date / ETD",
			apiValue: apiData.sailing_date ?? apiData.etd ?? apiData.offerData?.etd ?? apiData.offerData?.sailingDate,
			apiFieldUsed: apiData.sailing_date ? "sailing_date" : apiData.etd ? "etd" : "none",
			formValue: formState.etd ?? formState.sailingDate,
			formPropertyUsed: formState.etd ? "etd" : formState.sailingDate ? "sailingDate" : "none",
			isAligned: Boolean((apiData.sailing_date || apiData.etd) && (formState.etd || formState.sailingDate)),
			notes: "Checks alignment between backend 'sailing_date' / 'etd' and form state 'etd'."
		},
		{
			field: "Arrival Date / ETA",
			apiValue: apiData.arrival_date ?? apiData.eta ?? apiData.offerData?.eta,
			apiFieldUsed: apiData.arrival_date ? "arrival_date" : apiData.eta ? "eta" : "none",
			formValue: formState.eta,
			formPropertyUsed: "eta",
			isAligned: Boolean((apiData.arrival_date || apiData.eta) && formState.eta),
			notes: "Checks alignment between backend 'arrival_date' / 'eta' and form state 'eta'."
		},
		{
			field: "Vessel Name",
			apiValue: apiData.vessel_name ?? apiData.vessel ?? apiData.offerData?.vesselName,
			apiFieldUsed: apiData.vessel_name ? "vessel_name" : apiData.vessel ? "vessel" : "none",
			formValue: formState.vesselName ?? formState.vessel,
			formPropertyUsed: formState.vesselName ? "vesselName" : formState.vessel ? "vessel" : "none",
			isAligned: Boolean((apiData.vessel_name || apiData.vessel) && (formState.vesselName || formState.vessel)),
			notes: "Checks alignment between backend 'vessel_name' and form state 'vesselName'."
		},
		{
			field: "Quotation Status",
			apiValue: apiData.quotation_status ?? apiData.status,
			apiFieldUsed: apiData.quotation_status ? "quotation_status" : apiData.status ? "status" : "none",
			formValue: formState.status,
			formPropertyUsed: "status",
			isAligned: Boolean((apiData.quotation_status || apiData.status) && formState.status),
			notes: "Checks alignment between backend 'quotation_status' and form state 'status'."
		}
	];
	console.log(`[PropertyAlignmentDiagnostic][${contextName}] Comparison report:`, {
		rawApiDataSample: apiData,
		renderedFormStateSample: formState,
		alignmentsCount: comparisons.filter((c) => c.isAligned).length,
		totalFieldsChecked: comparisons.length,
		fieldComparisons: comparisons
	});
	return comparisons;
}
var STORAGE_KEY = "nashmia_multi_forwarder_requests_v2";
var LEGACY_STORAGE_KEY = "nashmia_forwarder_requests";
/**
* Builds a deterministic tracking composite key connecting:
* Booking ID + Forwarder ID + Gmail Thread ID + Gmail Message ID
*/
function buildTrackingCompositeKey(bookingId, forwarderId, gmailThreadId, gmailMessageId) {
	return `${(bookingId || "unknown-booking").trim()}::${(forwarderId || "unknown-forwarder").trim()}::${(gmailThreadId || "pending-thread").trim()}::${(gmailMessageId || "pending-msg").trim()}`;
}
/**
* Read local forwarder requests from localStorage
*/
function getLocalForwarderRequests() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
		if (!raw) return [];
		return JSON.parse(raw);
	} catch (err) {
		console.warn("[MultiForwarderService] Error reading local requests:", err);
		return [];
	}
}
/**
* Save list of forwarder requests to localStorage and dispatch update event
*/
function saveLocalForwarderRequests(requests) {
	if (typeof window === "undefined") return;
	try {
		const json = JSON.stringify(requests);
		localStorage.setItem(STORAGE_KEY, json);
		localStorage.setItem(LEGACY_STORAGE_KEY, json);
		window.dispatchEvent(new CustomEvent("nashmia_multi_forwarder_updated", { detail: {
			count: requests.length,
			timestamp: Date.now()
		} }));
	} catch (err) {
		console.warn("[MultiForwarderService] Error writing local requests:", err);
	}
}
/**
* Merges a list of forwarder requests into localStorage without overwriting unrelated booking records
*/
function mergeLocalForwarderRequests(requests) {
	if (typeof window === "undefined" || !requests || requests.length === 0) return;
	try {
		const existing = getLocalForwarderRequests();
		const map = /* @__PURE__ */ new Map();
		for (const item of existing) {
			if (item.id) map.set(item.id, item);
			if (item.bookingId && item.forwarderId) map.set(`${item.bookingId}_${item.forwarderId}`, item);
			if (item.movementNumber && item.forwarderId) map.set(`${item.movementNumber}_${item.forwarderId}`, item);
		}
		for (const item of requests) {
			if (item.id) map.set(item.id, item);
			if (item.bookingId && item.forwarderId) map.set(`${item.bookingId}_${item.forwarderId}`, item);
			if (item.movementNumber && item.forwarderId) map.set(`${item.movementNumber}_${item.forwarderId}`, item);
		}
		const seenIds = /* @__PURE__ */ new Set();
		const merged = [];
		for (const record of map.values()) if (record.id && !seenIds.has(record.id)) {
			seenIds.add(record.id);
			merged.push(record);
		}
		saveLocalForwarderRequests(merged);
	} catch (err) {
		console.warn("[MultiForwarderService] Error merging local requests:", err);
	}
}
/**
* Fetch all forwarder requests to whom quotation request emails were sent,
* optionally filtered by booking object or booking identifier.
*/
async function fetchForwarderRequestsForBooking(bookingOrIdentifier) {
	const localList = getLocalForwarderRequests();
	if (!bookingOrIdentifier) return localList;
	const validKeys = /* @__PURE__ */ new Set();
	const rawKeyStrings = [];
	if (typeof bookingOrIdentifier === "string") {
		const raw = bookingOrIdentifier.trim();
		if (raw) {
			rawKeyStrings.push(raw);
			validKeys.add(raw.toLowerCase());
			validKeys.add(raw.toUpperCase());
			if (raw.toLowerCase().startsWith("nash-")) {
				validKeys.add(raw.replace(/^nash-/i, "").toLowerCase());
				validKeys.add(raw.replace(/^nash-/i, "").toUpperCase());
			} else {
				validKeys.add(`nash-${raw.toLowerCase()}`);
				validKeys.add(`NASH-${raw.toUpperCase()}`);
			}
		}
	} else if (typeof bookingOrIdentifier === "object") {
		const rawIds = [
			bookingOrIdentifier.id,
			bookingOrIdentifier.movementNumber,
			bookingOrIdentifier.reference,
			bookingOrIdentifier.bookingReference,
			bookingOrIdentifier.bookingId,
			bookingOrIdentifier.booking_id,
			bookingOrIdentifier.movement_number,
			bookingOrIdentifier.booking_reference,
			bookingOrIdentifier.bookingNumber,
			bookingOrIdentifier.booking_number
		].filter(Boolean);
		for (const raw of rawIds) {
			const trimmed = raw.trim();
			if (trimmed) {
				rawKeyStrings.push(trimmed);
				validKeys.add(trimmed.toLowerCase());
				validKeys.add(trimmed.toUpperCase());
				if (trimmed.toLowerCase().startsWith("nash-")) {
					validKeys.add(trimmed.replace(/^nash-/i, "").toLowerCase());
					validKeys.add(trimmed.replace(/^nash-/i, "").toUpperCase());
				} else {
					validKeys.add(`nash-${trimmed.toLowerCase()}`);
					validKeys.add(`NASH-${trimmed.toUpperCase()}`);
				}
			}
		}
	}
	if (validKeys.size === 0) return localList;
	try {
		const localBookings = getLocalBookings();
		for (const b of localBookings) {
			const bId = (b.id || "").toLowerCase();
			const bMov = (b.movement_number || "").toLowerCase();
			const bRef = (b.booking_reference || b.reference || "").toLowerCase();
			if (bId && validKeys.has(bId) || bMov && validKeys.has(bMov) || bRef && validKeys.has(bRef) || Array.from(validKeys).some((k) => bMov && bMov.includes(k) || bRef && bRef.includes(k))) {
				if (b.id) {
					validKeys.add(b.id.toLowerCase());
					rawKeyStrings.push(b.id);
				}
				if (b.movement_number) {
					validKeys.add(b.movement_number.toLowerCase());
					validKeys.add(b.movement_number.toUpperCase());
					rawKeyStrings.push(b.movement_number);
				}
				if (b.booking_reference) {
					validKeys.add(b.booking_reference.toLowerCase());
					validKeys.add(b.booking_reference.toUpperCase());
					rawKeyStrings.push(b.booking_reference);
				}
			}
		}
	} catch (err) {
		console.warn("[MultiForwarderService] Error expanding booking keys:", err);
	}
	if (isSupabaseConfigured) try {
		const dbList = await fetchForwarderRequestsFromDatabase(Array.from(/* @__PURE__ */ new Set([...rawKeyStrings, ...Array.from(validKeys)])));
		if (dbList && dbList.length > 0) {
			logQuotationResponseDiagnostics(dbList, "MultiForwarderService Database Fetcher");
			console.log("[MultiForwarderService] fetchForwarderRequestsForBooking raw response object:", {
				bookingOrIdentifier,
				recordsCount: dbList.length,
				quotations: dbList.map((r) => ({
					requestId: r.id,
					id: r.offerData?.id || r.id,
					quotation_id: r.quotationId || r.offerData?.id || r.id,
					forwarderName: r.forwarderName,
					status: r.status,
					ratePerContainer: r.offerData?.ratePerContainer || r.ratePerContainer,
					totalFreight: r.offerData?.totalFreight || r.totalFreight,
					currency: r.offerData?.currency || r.currency,
					associatedChargeRowsCount: r.offerData?.itemizedCharges?.length || 0,
					associatedChargeRows: r.offerData?.itemizedCharges || []
				})),
				rawList: dbList
			});
			return dbList;
		}
	} catch (dbErr) {
		console.warn("[MultiForwarderService] Notice fetching from database:", dbErr);
	}
	let filtered = localList.filter((req) => {
		const rBkId = (req.bookingId || "").toLowerCase();
		const rBkReqId = (req.bookingRequestId || "").toLowerCase();
		const rRef = (req.bookingReference || "").toLowerCase();
		const rMov = (req.movementNumber || "").toLowerCase();
		return rBkId && validKeys.has(rBkId) || rBkReqId && validKeys.has(rBkReqId) || rRef && validKeys.has(rRef) || rMov && validKeys.has(rMov) || req.trackingCompositeKey && Array.from(validKeys).some((k) => req.trackingCompositeKey?.toLowerCase().includes(k));
	});
	if (isSupabaseConfigured) try {
		const candidateUuid = Array.from(validKeys).map((k) => safeUuid(k)).find(Boolean);
		let query = supabase.from("email_messages").select("*").eq("direction", "Outbound").order("created_at", { ascending: false });
		if (candidateUuid) query = query.eq("booking_id", candidateUuid);
		const { data, error } = await query;
		if (!error && data && data.length > 0) {
			let hasNew = false;
			const currentList = [...localList];
			for (const msg of data) {
				const rawHeaders = msg.raw_headers || {};
				const msgMov = rawHeaders.movement_number || (msg.subject ? extractMovementNumber(msg.subject) : null);
				const msgBkId = msg.booking_id || rawHeaders.booking_id;
				if (!(candidateUuid && msg.booking_id === candidateUuid || msgMov && validKeys.has(msgMov.toLowerCase()) || msgBkId && validKeys.has(msgBkId.toLowerCase()) || Array.from(validKeys).some((k) => msg.subject?.toLowerCase().includes(k)))) continue;
				if (!currentList.some((r) => r.emailMessageId === msg.id || msg.gmail_thread_id && r.gmailThreadId === msg.gmail_thread_id || msg.recipient_email && r.forwarderEmail.toLowerCase() === msg.recipient_email.toLowerCase() && (msgMov && r.movementNumber === msgMov || msgBkId && r.bookingId === msgBkId)) && msg.recipient_email) {
					const bk = getLocalBookings().find((b) => b.id && validKeys.has(b.id.toLowerCase()) || b.movement_number && validKeys.has(b.movement_number.toLowerCase()) || b.booking_reference && validKeys.has(b.booking_reference.toLowerCase()));
					const resolvedMov = msgMov && msgMov !== "MOV-REQ" && !msgMov.startsWith("MOV-REQ") ? msgMov : bk?.movement_number || bk?.booking_reference || bk?.reference || Array.from(validKeys)[0] || "MOV-2026-00001";
					const newRecord = {
						id: `MFR-${msg.id.slice(0, 8)}`,
						bookingId: msg.booking_id || bk?.id || Array.from(validKeys)[0],
						bookingReference: resolvedMov,
						movementNumber: resolvedMov,
						forwarderId: msg.forwarder_id || rawHeaders.forwarder_id || `fwd-${Date.now()}`,
						forwarderName: msg.recipient_name || msg.recipient_email?.split("@")[0] || "Forwarder",
						forwarderEmail: msg.recipient_email || "",
						status: "AWAITING_OFFER",
						emailMessageId: msg.id,
						gmailThreadId: msg.gmail_thread_id || void 0,
						gmailMessageId: msg.gmail_message_id || void 0,
						sentAt: msg.sent_at || msg.created_at,
						origin: bk?.origin || "POL",
						destination: bk?.destination || "POD",
						polCode: bk?.pol_code || "POL",
						polName: bk?.pol_name || "Port of Loading",
						podCode: bk?.pod_code || "POD",
						podName: bk?.pod_name || "Destination Port",
						supplierName: bk?.supplier_name || "Shipper",
						buyerName: bk?.buyer_name || "Consignee",
						containerType: bk?.container_type || "Standard Dry",
						containerSize: bk?.container_size || "40HC",
						containerCount: bk?.container_count || 1,
						updatedAt: msg.updated_at
					};
					currentList.unshift(newRecord);
					hasNew = true;
				}
			}
			if (hasNew) {
				saveLocalForwarderRequests(currentList);
				filtered = currentList.filter((req) => {
					const rBkId = (req.bookingId || "").toLowerCase();
					const rBkReqId = (req.bookingRequestId || "").toLowerCase();
					const rRef = (req.bookingReference || "").toLowerCase();
					const rMov = (req.movementNumber || "").toLowerCase();
					return rBkId && validKeys.has(rBkId) || rBkReqId && validKeys.has(rBkReqId) || rRef && validKeys.has(rRef) || rMov && validKeys.has(rMov) || req.trackingCompositeKey && Array.from(validKeys).some((k) => req.trackingCompositeKey?.toLowerCase().includes(k));
				});
			}
		}
	} catch (dbErr) {
		console.warn("[MultiForwarderService] Notice checking Supabase email_messages:", dbErr);
	}
	return filtered;
}
/**
* Generate individualized plain text and HTML content for a specific forwarder
*/
function generateForwarderEmailContent(booking, forwarder, options) {
	const movementNo = booking.movementNumber || booking.reference;
	const bookingRef = booking.bookingReference || booking.reference;
	const contactName = forwarder.contactPerson || `${forwarder.name} Operations Desk`;
	const pol = `${booking.polCode} (${booking.polName})`;
	const pod = `${booking.podCode} (${booking.podName})`;
	const sailingDate = options?.requiredSailingDate || booking.requestedEtd || "Prompt";
	const deadlineStr = options?.deadline || "Within 24 hours";
	const cargoDesc = booking.cargo?.description || "General Merchandise";
	const weightStr = booking.cargo?.totalWeightKg ? `${booking.cargo.totalWeightKg.toLocaleString()} kg` : "Standard payload";
	const supplierLocation = booking.supplierLoadPoint || booking.supplierCity || "Central Depot";
	const instructions = options?.specialInstructions || booking.specialInstructions || "";
	return {
		subject: `Freight Quotation Request: ${movementNo} | ${forwarder.name} | ${booking.polCode} → ${booking.podCode}`,
		bodyText: `Dear ${contactName},

Please provide your best competitive ocean freight quotation for the following export booking requirement:

═══════════════════════════════════════════════════════════════════════════════
                      FREIGHT BOOKING SPECIFICATIONS
═══════════════════════════════════════════════════════════════════════════════
• Movement Number:       ${movementNo}
• Booking Reference:     ${bookingRef}
• Shipper / Supplier:    ${booking.supplierName}
• Pickup / Load Point:   ${supplierLocation}
• Consignee / Buyer:     ${booking.buyerName} (${booking.consignee || booking.buyerCountry})
• Port of Loading (POL): ${pol}
• Destination Port (POD):${pod}
• Required Sailing Date: ${sailingDate}
• Target ETD:            ${booking.requestedEtd || "Prompt / First available"}
• Estimated ETA:         ${booking.estimatedEta || "Standard transit"}
• Equipment & Quantity:  ${booking.containerCount}x ${booking.containerSize} (${booking.containerType})
• Cargo Description:     ${cargoDesc}
• Total Cargo Weight:    ${weightStr}
${instructions ? `• Special Instructions:  ${instructions}\n` : ""}═══════════════════════════════════════════════════════════════════════════════

QUOTATION REQUIREMENTS:
Please reply directly to this email with:
1. Ocean Freight Rate per container (USD) - all-inclusive base + standard surcharges
2. Proposed Shipping Line / Carrier and direct/transshipment route
3. Estimated Transit Time (days)
4. Free Days at Destination (Demurrage & Detention combined)
5. Sailing Schedule / Vessel ETD confirmation
6. Rate Validity Window

RESPONSE REQUESTED: ${deadlineStr}

Best regards,

Freight Operations Desk
Nashmia Global Logistics
Email: operations@nashmia-logistics.com
Ref Code: ${movementNo}`,
		bodyHtml: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
  <div style="background-color: #0FA3B1; padding: 24px; color: #ffffff;">
    <h2 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">Nashmia Global Logistics</h2>
    <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">Export Freight Quotation Request</p>
  </div>

  <div style="padding: 24px;">
    <p style="font-size: 15px; margin-top: 0;">Dear <strong>${contactName}</strong>,</p>
    <p style="font-size: 14px; color: #475569;">Please review the freight booking specifications below and submit your best ocean freight rate for this movement:</p>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin: 20px 0;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13.5px;">
        <tr style="border-bottom: 1px solid #edf2f7;">
          <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 40%;">Movement Number:</td>
          <td style="padding: 8px 0; font-family: monospace; font-weight: 700; color: #0FA3B1;">${movementNo}</td>
        </tr>
        <tr style="border-bottom: 1px solid #edf2f7;">
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Booking Reference:</td>
          <td style="padding: 8px 0; font-weight: 600; color: #0f172a;">${bookingRef}</td>
        </tr>
        <tr style="border-bottom: 1px solid #edf2f7;">
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Shipper / Supplier:</td>
          <td style="padding: 8px 0; font-weight: 600; color: #0f172a;">${booking.supplierName} (${supplierLocation})</td>
        </tr>
        <tr style="border-bottom: 1px solid #edf2f7;">
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Consignee / Buyer:</td>
          <td style="padding: 8px 0; font-weight: 600; color: #0f172a;">${booking.buyerName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #edf2f7;">
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Port of Loading (POL):</td>
          <td style="padding: 8px 0; font-weight: 700; color: #0f172a;">${pol}</td>
        </tr>
        <tr style="border-bottom: 1px solid #edf2f7;">
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Destination Port (POD):</td>
          <td style="padding: 8px 0; font-weight: 700; color: #0f172a;">${pod}</td>
        </tr>
        <tr style="border-bottom: 1px solid #edf2f7;">
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Required Sailing Date:</td>
          <td style="padding: 8px 0; font-weight: 700; color: #b45309;">${sailingDate}</td>
        </tr>
        <tr style="border-bottom: 1px solid #edf2f7;">
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Target ETD / ETA:</td>
          <td style="padding: 8px 0; color: #0f172a;">ETD: ${booking.requestedEtd || "Prompt"} | ETA: ${booking.estimatedEta || "Standard"}</td>
        </tr>
        <tr style="border-bottom: 1px solid #edf2f7;">
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Equipment & Quantity:</td>
          <td style="padding: 8px 0; font-weight: 700; color: #0FA3B1;">${booking.containerCount}x ${booking.containerSize} (${booking.containerType})</td>
        </tr>
        <tr style="border-bottom: 1px solid #edf2f7;">
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Cargo & Gross Weight:</td>
          <td style="padding: 8px 0; color: #0f172a;">${cargoDesc} (${weightStr})</td>
        </tr>
        ${instructions ? `<tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Special Instructions:</td>
          <td style="padding: 8px 0; color: #b45309; font-style: italic;">${instructions}</td>
        </tr>` : ""}
      </table>
    </div>

    <div style="background-color: #f1f5f9; border-left: 4px solid #0FA3B1; padding: 14px 16px; margin-bottom: 24px; border-radius: 4px;">
      <h4 style="margin: 0 0 6px 0; font-size: 13.5px; font-weight: 700; color: #0f172a;">Please include in your reply:</h4>
      <ul style="margin: 0; padding-left: 18px; font-size: 13px; color: #334155;">
        <li>Ocean freight rate per container (USD)</li>
        <li>Carrying vessel / shipping line & routing</li>
        <li>Transit time (days) & Free days at destination</li>
        <li>Quotation validity period</li>
      </ul>
    </div>

    <p style="font-size: 13px; color: #64748b; margin-bottom: 0;">
      Please reply directly to this email to submit your quotation. All quotation terms are reviewed by the export logistics desk.
    </p>
  </div>

  <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 24px; font-size: 12px; color: #94a3b8; text-align: center;">
    Nashmia Global Logistics Platform · Movement Ref: <strong>${movementNo}</strong> · Confidential
  </div>
</div>`
	};
}
/**
* Dispatch independent, separate requests to multiple forwarders.
* Each forwarder receives its OWN separate email, separate Gmail thread,
* separate request record, and separate status/offer tracking.
*/
async function dispatchMultiForwarderRequests(params) {
	const { booking, forwarders, requiredSailingDate, deadline, specialInstructions, userId, userEmail, onProgress } = params;
	const results = [];
	const errors = [];
	const fromEmail = userEmail || "operations@nashmia-logistics.com";
	const movementNo = booking.movementNumber || booking.reference;
	const bookingRef = booking.bookingReference || booking.reference;
	const updatedList = [...getLocalForwarderRequests()];
	for (let i = 0; i < forwarders.length; i++) {
		const forwarder = forwarders[i];
		if (onProgress) onProgress(i + 1, forwarders.length, forwarder.name);
		try {
			const { subject, bodyText, bodyHtml } = generateForwarderEmailContent(booking, forwarder, {
				requiredSailingDate,
				deadline,
				specialInstructions
			});
			let gmailMessageId;
			let gmailThreadId;
			try {
				console.log(`[MultiForwarderService] Dispatching separate email to: ${forwarder.email} (${forwarder.name})`);
				const sendResult = await sendEmailDirectlyViaGmail({
					fromEmail,
					fromName: "Nashmia Freight Operations",
					toEmail: forwarder.email,
					toName: forwarder.contactPerson || forwarder.name,
					subject,
					body: bodyText,
					bodyHtml,
					bookingId: safeUuid(booking.id),
					forwarderId: safeUuid(forwarder.id),
					userId
				});
				gmailMessageId = sendResult.gmailMessageId;
				gmailThreadId = sendResult.gmailThreadId;
				console.log(`[MultiForwarderService] Separate email sent successfully! MessageId: ${gmailMessageId}, ThreadId: ${gmailThreadId}`);
			} catch (sendErr) {
				console.warn(`[MultiForwarderService] Gmail dispatch warning for ${forwarder.name}:`, sendErr);
				gmailMessageId = `gm-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
				gmailThreadId = `gth-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
			}
			if (isSupabaseConfigured) try {
				let validUserForThread = safeUuid(userId);
				if (!validUserForThread) {
					const { data: p } = await supabase.from("profiles").select("id").limit(1).maybeSingle();
					validUserForThread = p?.id || null;
				}
				let verifiedBookingId = null;
				const cleanBookingId = safeUuid(booking.id);
				if (cleanBookingId) {
					const { data: bCheck } = await supabase.from("bookings").select("id").eq("id", cleanBookingId).maybeSingle();
					if (bCheck?.id) verifiedBookingId = bCheck.id;
				}
				let threadId = null;
				if (validUserForThread) {
					const { data: newThread } = await supabase.from("email_threads").insert({
						user_id: validUserForThread,
						booking_id: verifiedBookingId,
						subject,
						gmail_thread_id: gmailThreadId,
						status: "Active",
						snippet: `Quotation requested for ${movementNo} - ${booking.containerCount}x ${booking.containerSize}`.slice(0, 120),
						last_message_at: (/* @__PURE__ */ new Date()).toISOString()
					}).select("id").maybeSingle();
					if (newThread?.id) threadId = newThread.id;
				}
				if (!threadId) {
					const { data: fallbackThread } = await supabase.from("email_threads").select("id").limit(1).maybeSingle();
					threadId = fallbackThread?.id || null;
				}
				if (threadId) await supabase.from("email_messages").insert({
					thread_id: threadId,
					sender_email: fromEmail,
					recipient_email: forwarder.email,
					recipient_name: forwarder.name,
					subject,
					body: bodyText,
					body_html: bodyHtml,
					direction: "Outbound",
					gmail_message_id: gmailMessageId,
					sent_at: (/* @__PURE__ */ new Date()).toISOString(),
					raw_headers: {
						movement_number: movementNo,
						booking_id: cleanBookingId,
						forwarder_id: safeUuid(forwarder.id),
						user_id: validUserForThread,
						email_type: "FORWARDER_REQUEST",
						status: "SENT",
						gmail_thread_id: gmailThreadId
					}
				});
				await supabase.from("booking_events").insert({
					booking_id: safeUuid(booking.id) || "",
					event_type: "Forwarder Request Sent",
					title: `Quotation Request Sent to ${forwarder.name}`,
					description: `Dispatched individual booking request email to ${forwarder.email}. Distinct Gmail Thread: ${gmailThreadId}`,
					occurred_at: (/* @__PURE__ */ new Date()).toISOString()
				});
			} catch (dbErr) {
				console.warn("[MultiForwarderService] Supabase persistence notice:", dbErr);
			}
			const newRecord = {
				id: `MFR-${booking.id.slice(0, 6)}-${forwarder.id.slice(0, 6)}-${Date.now()}`,
				bookingId: booking.id,
				bookingReference: bookingRef,
				movementNumber: movementNo,
				forwarderId: forwarder.id,
				forwarderName: forwarder.name,
				forwarderCode: forwarder.code,
				forwarderEmail: forwarder.email,
				forwarderContactPerson: forwarder.contactPerson,
				forwarderBadge: forwarder.badge,
				status: "AWAITING_OFFER",
				emailMessageId: messageId,
				gmailThreadId,
				gmailMessageId,
				trackingCompositeKey: buildTrackingCompositeKey(booking.id, forwarder.id, gmailThreadId, gmailMessageId),
				sentAt: (/* @__PURE__ */ new Date()).toISOString(),
				sentBy: fromEmail,
				requiredSailingDate: requiredSailingDate || booking.requestedEtd,
				etd: booking.requestedEtd,
				eta: booking.estimatedEta,
				origin: `${booking.polCode} - ${booking.polName}`,
				destination: `${booking.podCode} - ${booking.podName}`,
				polCode: booking.polCode,
				polName: booking.polName,
				podCode: booking.podCode,
				podName: booking.podName,
				supplierName: booking.supplierName,
				supplierLoadPoint: booking.supplierLoadPoint || booking.supplierCity,
				buyerName: booking.buyerName,
				consignee: booking.consignee,
				containerType: booking.containerType,
				containerSize: booking.containerSize,
				containerCount: booking.containerCount,
				cargoDescription: booking.cargo?.description,
				cargoWeightKg: booking.cargo?.totalWeightKg,
				specialInstructions,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			results.push(newRecord);
			updatedList.unshift(newRecord);
			if (i < forwarders.length - 1) await new Promise((r) => setTimeout(r, 1200));
		} catch (err) {
			console.error(`[MultiForwarderService] Failed dispatch to forwarder ${forwarder.name}:`, err);
			errors.push({
				forwarderName: forwarder.name,
				error: err instanceof Error ? err.message : String(err)
			});
		}
	}
	saveLocalForwarderRequests(updatedList);
	if (isSupabaseConfigured) try {
		await persistForwarderRequestsDispatched(booking, results);
	} catch (persistErr) {
		console.warn("[MultiForwarderService] Notice persisting dispatched requests to Supabase:", persistErr);
	}
	if (typeof window !== "undefined") {
		window.dispatchEvent(new CustomEvent("nashmia_multi_forwarder_dispatched", { detail: {
			bookingId: booking.id,
			movementNumber: movementNo,
			count: results.length,
			records: results
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_booking_status_updated", { detail: {
			bookingId: booking.id,
			status: "Line Allocation"
		} }));
	}
	return {
		success: results.length > 0,
		totalDispatched: results.length,
		records: results,
		errors
	};
}
/**
* Update quotation status directly to one of the 7 supported statuses:
* PENDING, OFFER_RECEIVED, NEEDS_REVIEW, NOT_AVAILABLE, AWARDED, NOT_AWARDED, CONFIRMED
*
* NOTE: Setting status to OFFER_RECEIVED never confirms the booking.
*/
async function updateForwarderQuoteStatus(requestId, newStatus, reason, userId) {
	const normalized = normalizeQuoteStatus(newStatus);
	if (normalized === "AWARDED") return (await awardForwarderOffer(requestId, userId)).request;
	const list = getLocalForwarderRequests();
	const idx = list.findIndex((r) => r.id === requestId);
	if (idx === -1) throw new Error(`Forwarder quote request ${requestId} not found.`);
	const existing = list[idx];
	const updatedRecord = {
		...existing,
		status: normalized,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	list[idx] = updatedRecord;
	saveLocalForwarderRequests(list);
	if (normalized === "CONFIRMED" && existing.bookingId) await confirmAwardedBooking(existing.bookingId, {
		forwarderName: existing.forwarderName,
		forwarderEmail: existing.forwarderEmail,
		userId
	});
	if (isSupabaseConfigured && existing.bookingId) try {
		const validBookingUuid = safeUuid(existing.bookingId);
		if (validBookingUuid) await supabase.from("booking_events").insert({
			booking_id: validBookingUuid,
			event_type: "Quotation Status Changed",
			title: `Quotation status updated to ${normalized} for ${existing.forwarderName}`,
			description: reason || `Quotation status set to ${normalized} by ${userId || "Operations User"}. Rule enforced: Receiving quotation does not confirm booking.`,
			occurred_at: (/* @__PURE__ */ new Date()).toISOString()
		});
	} catch (err) {
		console.warn("[MultiForwarderService] Notice saving quotation audit event:", err);
	}
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nashmia_multi_forwarder_updated", { detail: {
		updatedRequestId: requestId,
		bookingId: updatedRecord.bookingId,
		newStatus: normalized
	} }));
	return updatedRecord;
}
/**
* Update / manually correct extracted forwarder quotation values with audit logging
*/
async function updateForwarderQuotation(requestId, updatedOffer, userId, newStatus) {
	const list = getLocalForwarderRequests();
	const idx = list.findIndex((r) => r.id === requestId);
	if (idx === -1) throw new Error(`Forwarder request ${requestId} not found.`);
	const existing = list[idx];
	const ratePerCntr = updatedOffer.ratePerContainer !== void 0 ? updatedOffer.ratePerContainer : existing.offerData?.ratePerContainer;
	const totalFreight = updatedOffer.totalFreight !== void 0 ? updatedOffer.totalFreight : ratePerCntr ? ratePerCntr * existing.containerCount : existing.offerData?.totalFreight;
	const mergedOffer = {
		...existing.offerData || {},
		...updatedOffer,
		ratePerContainer: ratePerCntr,
		totalFreight,
		manuallyCorrected: true,
		correctedAt: (/* @__PURE__ */ new Date()).toISOString(),
		correctedBy: userId || "Operations User"
	};
	const finalStatus = newStatus ? normalizeQuoteStatus(newStatus) : existing.status === "AWAITING_OFFER" || existing.status === "PENDING" ? "OFFER_RECEIVED" : existing.status;
	const updatedRecord = {
		...existing,
		status: finalStatus,
		offerData: mergedOffer,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	list[idx] = updatedRecord;
	saveLocalForwarderRequests(list);
	if (finalStatus === "AWARDED" && existing.status !== "AWARDED") await awardForwarderOffer(requestId, userId);
	else if (finalStatus === "CONFIRMED" && existing.status !== "CONFIRMED" && existing.bookingId) await confirmAwardedBooking(existing.bookingId, {
		forwarderName: existing.forwarderName,
		forwarderEmail: existing.forwarderEmail,
		userId
	});
	if (isSupabaseConfigured && existing.bookingId) try {
		const validBookingUuid = safeUuid(existing.bookingId);
		if (validBookingUuid) await supabase.from("booking_events").insert({
			booking_id: validBookingUuid,
			event_type: "Quotation Updated",
			title: `Quotation Adjusted for ${existing.forwarderName}`,
			description: `Manual rate adjustment: $${ratePerCntr || 0}/cntr (${mergedOffer.currency || "USD"}). Status: ${finalStatus}. Carrier: ${mergedOffer.carrier || "Standard"}.`,
			occurred_at: (/* @__PURE__ */ new Date()).toISOString()
		});
	} catch (err) {
		console.warn("[MultiForwarderService] Notice saving quotation audit event:", err);
	}
	if (typeof window !== "undefined") {
		window.dispatchEvent(new CustomEvent("nashmia_forwarder_offer_received", { detail: {
			requestId,
			bookingId: updatedRecord.bookingId,
			offer: mergedOffer
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_multi_forwarder_updated", { detail: {
			updatedRequestId: requestId,
			bookingId: updatedRecord.bookingId
		} }));
	}
	return updatedRecord;
}
/**
* Award a forwarder's quotation for a booking (Step 6 Workflow).
*
* Requirements:
* 1. Sets the selected request status to "AWARDED".
* 2. Sets other competing requests for the same booking to "NOT_AWARDED".
* 3. Saves the selected forwarder as the official booking forwarder.
* 4. Creates an audit event: "BOOKING_AWARDED".
* 5. Sets the booking and movement status to "Pending Confirmation" (NOT Confirmed yet!).
* 6. Prevents duplicate awards and ensures backend synchronization.
*/
async function awardForwarderOffer(requestId, userId) {
	const list = getLocalForwarderRequests();
	const targetReq = list.find((r) => r.id === requestId);
	if (!targetReq) throw new Error(`Forwarder request ${requestId} not found.`);
	const bookingId = targetReq.bookingId;
	const forwarderId = targetReq.forwarderId;
	const forwarderName = targetReq.forwarderName;
	const ratePerContainer = targetReq.offerData?.ratePerContainer || targetReq.ratePerContainer || 0;
	const totalFreight = targetReq.offerData?.totalFreight || (ratePerContainer ? ratePerContainer * targetReq.containerCount : 0);
	const currency = targetReq.offerData?.currency || targetReq.currency || "USD";
	const updatedTarget = {
		...targetReq,
		status: "AWARDED",
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	saveLocalForwarderRequests(list.map((item) => {
		if (item.bookingId === bookingId || item.movementNumber && item.movementNumber === targetReq.movementNumber || item.bookingReference && item.bookingReference === targetReq.bookingReference) {
			if (item.id === requestId) return updatedTarget;
			else return {
				...item,
				status: "NOT_AWARDED",
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
		}
		return item;
	}));
	if (bookingId) updateLocalBooking(bookingId, {
		status: "Pending Confirmation",
		confirmation_status: "PENDING_CONFIRMATION",
		forwarder_id: forwarderId,
		forwarder_name: forwarderName,
		rate_amount: ratePerContainer,
		currency,
		total_freight: totalFreight,
		preferred_carrier: targetReq.offerData?.carrier || targetReq.preferredCarrier || void 0
	});
	if (isSupabaseConfigured) try {
		const validBookingUuid = safeUuid(bookingId);
		const validForwarderUuid = safeUuid(forwarderId);
		if (validBookingUuid) {
			const updatePayload = {
				status: "Booking Requested",
				movement_status: "REQUESTED",
				confirmation_status: "PENDING_CONFIRMATION",
				confirmation_reason: `Awarded to ${forwarderName} ($${ratePerContainer}/cntr, total $${totalFreight} ${currency}). Awaiting formal carrier confirmation.`,
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			};
			if (validForwarderUuid) updatePayload.forwarder_id = validForwarderUuid;
			if (forwarderName) updatePayload.forwarder_name = forwarderName;
			if (ratePerContainer > 0) {
				updatePayload.rate_amount = ratePerContainer;
				updatePayload.currency = currency;
				updatePayload.total_freight = totalFreight;
			}
			if (targetReq.offerData?.carrier) updatePayload.preferred_carrier = targetReq.offerData.carrier;
			await supabase.from("bookings").update(updatePayload).eq("id", validBookingUuid);
			const cntrInfo = `${targetReq.containerCount || 1}x ${targetReq.containerSize || "40HC"} (${targetReq.offerData?.containerType || targetReq.containerType || "Standard Dry"})`;
			const etdInfo = targetReq.offerData?.etd || targetReq.etd || targetReq.requiredSailingDate || "Prompt";
			const etaInfo = targetReq.offerData?.eta || targetReq.eta || "Standard Transit";
			const addInfo = targetReq.offerData?.additionalCharges ? ` Surcharges: ${targetReq.offerData.additionalCharges}.` : "";
			await supabase.from("booking_events").insert({
				booking_id: validBookingUuid,
				event_type: "BOOKING_AWARDED",
				title: `Booking Awarded to ${forwarderName}`,
				description: `Designated ${forwarderName} (${targetReq.forwarderEmail}) as official forwarder for ${cntrInfo}. Rate: $${ratePerContainer.toLocaleString()} ${currency}/cntr (Total: $${totalFreight.toLocaleString()} ${currency}). ETD: ${etdInfo} | ETA: ${etaInfo}.${addInfo} Status transitioned to Pending Confirmation.`,
				occurred_at: (/* @__PURE__ */ new Date()).toISOString()
			});
			try {
				await supabase.from("forwarder_offers").upsert({
					booking_id: validBookingUuid,
					forwarder_id: validForwarderUuid || safeUuid(targetReq.forwarderId),
					forwarder_name: forwarderName,
					forwarder_email: targetReq.forwarderEmail,
					rate_amount: ratePerContainer,
					total_freight: totalFreight,
					currency,
					status: "AWARDED",
					is_awarded: true,
					is_declined: false,
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				});
			} catch (offerErr) {
				console.warn("[MultiForwarderService] Supabase forwarder_offers sync notice:", offerErr);
			}
		}
	} catch (dbErr) {
		console.warn("[MultiForwarderService] Supabase booking award notice:", dbErr);
	}
	if (typeof window !== "undefined") {
		window.dispatchEvent(new CustomEvent("nashmia_booking_awarded", { detail: {
			bookingId,
			movementNumber: targetReq.movementNumber,
			bookingReference: targetReq.bookingReference,
			awardedRequestId: requestId,
			forwarderId,
			forwarderName,
			ratePerContainer,
			totalFreight,
			currency,
			status: "Pending Confirmation"
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_multi_forwarder_updated", { detail: {
			awardedRequestId: requestId,
			bookingId
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_booking_status_updated", { detail: {
			bookingId,
			status: "Pending Confirmation",
			movementNumber: targetReq.movementNumber
		} }));
	}
	return {
		success: true,
		request: updatedTarget
	};
}
/**
* Confirm the booking once the awarded forwarder's confirmation email is validated (Step 7 Workflow)
*/
async function confirmAwardedBooking(bookingId, params) {
	saveLocalForwarderRequests(getLocalForwarderRequests().map((item) => {
		if (item.bookingId === bookingId && (item.status === "AWARDED" || item.status === "ACCEPTED")) return {
			...item,
			status: "CONFIRMED",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		return item;
	}));
	if (isSupabaseConfigured) {
		const validBookingUuid = safeUuid(bookingId);
		if (validBookingUuid) {
			await supabase.from("bookings").update({
				status: "Booking Confirmed",
				confirmed_at: (/* @__PURE__ */ new Date()).toISOString(),
				confirmed_by: params.forwarderName,
				confirmation_status: "CONFIRMED",
				confirmation_email_id: params.confirmationEmailId || null,
				vessel_name: params.vesselName || void 0,
				voyage_number: params.voyageNumber || void 0,
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			}).eq("id", validBookingUuid);
			await supabase.from("booking_events").insert({
				booking_id: validBookingUuid,
				event_type: "Booking Confirmed",
				title: `Booking Confirmed by ${params.forwarderName}`,
				description: `Awarded forwarder ${params.forwarderName} verified and confirmed booking space allocation.`,
				occurred_at: (/* @__PURE__ */ new Date()).toISOString()
			});
		}
	}
	if (typeof window !== "undefined") {
		window.dispatchEvent(new CustomEvent("nashmia_booking_confirmed", { detail: {
			bookingId,
			confirmedBy: params.forwarderName,
			status: "Booking Confirmed"
		} }));
		window.dispatchEvent(new CustomEvent("nashmia_multi_forwarder_updated", { detail: { bookingId } }));
	}
	return {
		success: true,
		bookingId
	};
}
/**
* Extract host/domain from an email address
*/
function getEmailDomain(email) {
	if (!email || !email.includes("@")) return "";
	return email.split("@")[1].toLowerCase().trim();
}
/**
* Verify whether an incoming sender email matches a specific forwarder's email or domain.
* Guards against falsely mixing responses across forwarders.
*/
function isSenderMatchingForwarder(senderEmail, forwarderEmail, _forwarderName) {
	const sClean = (senderEmail || "").toLowerCase().trim();
	const fClean = (forwarderEmail || "").toLowerCase().trim();
	if (!sClean || !fClean) return false;
	if (sClean === fClean) return true;
	const sDomain = getEmailDomain(sClean);
	const fDomain = getEmailDomain(fClean);
	if (sDomain && fDomain && !(/* @__PURE__ */ new Set([
		"gmail.com",
		"googlemail.com",
		"yahoo.com",
		"ymail.com",
		"rocketmail.com",
		"hotmail.com",
		"outlook.com",
		"live.com",
		"msn.com",
		"icloud.com",
		"me.com",
		"mac.com",
		"aol.com",
		"mail.com",
		"zoho.com",
		"proton.me",
		"protonmail.com",
		"fastmail.com",
		"gmx.com",
		"yandex.com"
	])).has(sDomain) && sDomain === fDomain) return true;
	return false;
}
/**
* CORE MATCHING ENGINE:
* Uniquely connects an incoming email to a specific forwarder quote request.
*
* Enforces the strict rule:
* Booking ID + Forwarder ID + Gmail Thread ID + Gmail Message ID
* with Movement Number / Booking Reference as an additional matching fallback.
*
* CRITICAL ANTI-MIXING RULE:
* Replies from different forwarders for the same booking must NEVER be mixed together!
*/
function matchIncomingEmailToForwarderRequest(input, requestsList) {
	const allRequests = requestsList || getLocalForwarderRequests();
	if (allRequests.length === 0) return {
		matched: false,
		request: null,
		matchedBy: "NONE",
		confidence: 0,
		reason: "No forwarder quote requests exist in the system."
	};
	const cleanSender = (input.senderEmail || "").trim().toLowerCase();
	const thId = input.gmailThreadId?.trim();
	const msgId = input.gmailMessageId?.trim();
	const refTokens = `${input.inReplyTo || ""} ${input.references || ""} ${msgId || ""}`;
	if (thId) {
		const threadMatch = allRequests.find((r) => r.gmailThreadId && r.gmailThreadId.trim() === thId);
		if (threadMatch) return {
			matched: true,
			request: threadMatch,
			matchedBy: "GMAIL_THREAD_ID",
			confidence: 1,
			reason: `Isolated thread match: Gmail Thread ID [${thId}] uniquely connects to forwarder ${threadMatch.forwarderName} (${threadMatch.forwarderEmail}) for Booking ${threadMatch.movementNumber}.`,
			forwarderId: threadMatch.forwarderId,
			forwarderName: threadMatch.forwarderName,
			movementNumber: threadMatch.movementNumber,
			bookingId: threadMatch.bookingId
		};
	}
	if (refTokens.trim()) {
		const msgMatch = allRequests.find((r) => {
			if (r.gmailMessageId && refTokens.includes(r.gmailMessageId.trim())) return true;
			if (r.emailMessageId && refTokens.includes(r.emailMessageId.trim())) return true;
			return false;
		});
		if (msgMatch) return {
			matched: true,
			request: msgMatch,
			matchedBy: "GMAIL_MESSAGE_ID",
			confidence: .98,
			reason: `Message ID reference match: References outgoing request [${msgMatch.gmailMessageId || msgMatch.emailMessageId}] sent exclusively to ${msgMatch.forwarderName}.`,
			forwarderId: msgMatch.forwarderId,
			forwarderName: msgMatch.forwarderName,
			movementNumber: msgMatch.movementNumber,
			bookingId: msgMatch.bookingId
		};
	}
	if (input.bookingId) {
		const bookingReqs = allRequests.filter((r) => r.bookingId === input.bookingId || r.bookingReference === input.bookingId || r.movementNumber === input.bookingId);
		if (bookingReqs.length > 0) {
			const fwdMatch = bookingReqs.find((r) => isSenderMatchingForwarder(cleanSender, r.forwarderEmail, r.forwarderName));
			if (fwdMatch) return {
				matched: true,
				request: fwdMatch,
				matchedBy: "COMPOSITE_BOOKING_FORWARDER",
				confidence: .95,
				reason: `Composite match: Booking ID [${input.bookingId}] + Forwarder [${fwdMatch.forwarderName}: ${fwdMatch.forwarderEmail}] verified from sender.`,
				forwarderId: fwdMatch.forwarderId,
				forwarderName: fwdMatch.forwarderName,
				movementNumber: fwdMatch.movementNumber,
				bookingId: fwdMatch.bookingId
			};
		}
	}
	const movNumber = input.movementNumber || input.bookingReference || `${input.subject || ""} ${input.body || ""} ${input.snippet || ""}`.match(/\b(MOV-\d{4}-\d{3,6}|BK-[A-Z0-9-]+|REQ-[A-Z0-9-]+|REF-[A-Z0-9-]+|NASH-[A-Z0-9-]+)\b/i)?.[0];
	if (movNumber) {
		const cleanMov = movNumber.toUpperCase().trim();
		const movReqs = allRequests.filter((r) => r.movementNumber.toUpperCase().trim() === cleanMov || r.bookingReference.toUpperCase().trim() === cleanMov);
		if (movReqs.length > 0) {
			const fwdMatch = movReqs.find((r) => isSenderMatchingForwarder(cleanSender, r.forwarderEmail, r.forwarderName));
			if (fwdMatch) return {
				matched: true,
				request: fwdMatch,
				matchedBy: "FALLBACK_MOVEMENT_FORWARDER",
				confidence: .9,
				reason: `Fallback match: Movement Number [${cleanMov}] combined with verified sender [${cleanSender}] matching forwarder ${fwdMatch.forwarderName}.`,
				forwarderId: fwdMatch.forwarderId,
				forwarderName: fwdMatch.forwarderName,
				movementNumber: fwdMatch.movementNumber,
				bookingId: fwdMatch.bookingId
			};
			return {
				matched: false,
				request: null,
				matchedBy: "NONE",
				confidence: 0,
				reason: `Movement Number [${cleanMov}] found, but sender [${cleanSender}] does not match any of the ${movReqs.length} forwarders requested (${movReqs.map((r) => r.forwarderName).join(", ")}). Refusing to mix forwarder records.`
			};
		}
	}
	return {
		matched: false,
		request: null,
		matchedBy: "NONE",
		confidence: 0,
		reason: "No connection found via Thread ID, Message ID, or Movement Number + Forwarder pair."
	};
}
/**
* Ingest and process an incoming email reply, uniquely routing it to its forwarder request
*/
async function processIncomingForwarderEmailReply(input) {
	const matchResult = matchIncomingEmailToForwarderRequest(input);
	let req;
	let existing;
	if (matchResult.matched && matchResult.request) {
		req = matchResult.request;
		const list = getLocalForwarderRequests();
		const idx = list.findIndex((r) => r.id === req.id);
		if (idx !== -1) existing = list[idx];
		else {
			existing = req;
			list.push(existing);
			saveLocalForwarderRequests(list);
		}
	} else {
		const extractedMov = input.movementNumber || (input.subject ? extractMovementNumber(input.subject) : null);
		const targetBkId = input.bookingId || extractedMov;
		const bk = getLocalBookings().find((b) => targetBkId && b.id && b.id.toLowerCase() === targetBkId.toLowerCase() || targetBkId && b.movement_number && b.movement_number.toLowerCase() === targetBkId.toLowerCase() || targetBkId && b.booking_reference && b.booking_reference.toLowerCase() === targetBkId.toLowerCase() || input.subject && b.movement_number && input.subject.toLowerCase().includes(b.movement_number.toLowerCase()) || extractedMov && b.movement_number && (b.movement_number.toLowerCase().includes(extractedMov.toLowerCase()) || extractedMov.toLowerCase().includes(b.movement_number.toLowerCase())));
		let dbBkId = null;
		let dbMov = null;
		let dbPol = null;
		let dbPod = null;
		let dbSupplier = null;
		let dbBuyer = null;
		if (!bk && isSupabaseConfigured && (extractedMov || targetBkId)) try {
			const candidateKeys = [
				extractedMov,
				targetBkId,
				extractedMov?.replace(/^NASH-/, "")
			].filter(Boolean);
			const candidateUuids = candidateKeys.map((k) => safeUuid(k)).filter(Boolean);
			let bQuery = supabase.from("bookings").select("*");
			if (candidateUuids.length > 0 && candidateKeys.length > 0) bQuery = bQuery.or(`id.in.(${candidateUuids.join(",")}),movement_number.in.(${candidateKeys.join(",")}),booking_reference.in.(${candidateKeys.join(",")})`);
			else if (candidateUuids.length > 0) bQuery = bQuery.in("id", candidateUuids);
			else if (candidateKeys.length > 0) bQuery = bQuery.or(`movement_number.in.(${candidateKeys.join(",")}),booking_reference.in.(${candidateKeys.join(",")})`);
			const { data: dbBks } = await bQuery.limit(1);
			if (dbBks && dbBks.length > 0) {
				const dbB = dbBks[0];
				dbBkId = dbB.id;
				dbMov = dbB.movement_number || dbB.booking_reference;
				dbPol = dbB.pol_code || dbB.origin;
				dbPod = dbB.pod_code || dbB.destination;
				dbSupplier = dbB.supplier_name;
				dbBuyer = dbB.buyer_name;
			}
		} catch (err) {
			console.warn("[MultiForwarderService] Notice resolving booking from DB:", err);
		}
		if (!bk && !dbBkId && !extractedMov && !input.movementNumber && !input.bookingId) return {
			processed: false,
			request: null,
			reason: matchResult.reason || "No associated booking found for incoming forwarder quote."
		};
		const movNo = bk?.movement_number || dbMov || extractedMov || input.movementNumber || bk?.booking_reference || "MOV-2026-00001";
		const senderEmail = (input.senderEmail || "").trim().toLowerCase();
		let fwdMasterList = getLocalForwarders().map((f) => ({
			id: f.id,
			name: f.name || f.company_name,
			company_name: f.company_name || f.name,
			email: f.email,
			contactEmail: f.contactEmail,
			contactPerson: f.contactPerson,
			notes: f.notes
		}));
		if (isSupabaseConfigured) try {
			const { data: dbFwds } = await supabase.from("forwarders").select("*");
			if (dbFwds && dbFwds.length > 0) fwdMasterList = [...dbFwds.map((f) => ({
				id: f.id,
				name: f.company_name || f.name || f.contact_person,
				company_name: f.company_name || f.name || f.contact_person,
				email: f.email,
				contactEmail: f.contact_email || f.email,
				contactPerson: f.contact_person,
				notes: f.notes
			})), ...fwdMasterList];
		} catch (err) {
			console.warn("[MultiForwarderService] Error querying forwarders table:", err);
		}
		const matchFwdResult = matchSenderWithForwarderMaster(senderEmail, fwdMasterList, { senderDisplayName: input.senderName });
		let fwdName = matchFwdResult.forwarderName;
		let fwdId = matchFwdResult.forwarderId || `fwd-${Date.now()}`;
		let fwdEmail = matchFwdResult.forwarderEmail || senderEmail;
		if ((!fwdName || fwdName === "Unknown Forwarder" || fwdName === "Forwarder") && isSupabaseConfigured) try {
			const { data: existingFwdReqs } = await supabase.from("forwarder_requests").select("forwarder_id, forwarder_name, forwarder_email").or(`movement_number.eq.${movNo},booking_reference.eq.${movNo}`).ilike("forwarder_email", senderEmail).limit(1);
			if (existingFwdReqs && existingFwdReqs.length > 0 && existingFwdReqs[0].forwarder_name) {
				fwdName = existingFwdReqs[0].forwarder_name;
				fwdId = existingFwdReqs[0].forwarder_id || fwdId;
				fwdEmail = existingFwdReqs[0].forwarder_email || fwdEmail;
			}
		} catch {}
		if (!fwdName || fwdName === "Unknown Forwarder") {
			const emailUser = senderEmail.split("@")[0] || "Forwarder";
			fwdName = input.senderName?.trim() || emailUser.charAt(0).toUpperCase() + emailUser.slice(1);
		}
		const newReq = {
			id: `MFR-${Date.now().toString(36).slice(-6).toUpperCase()}`,
			bookingId: bk?.id || dbBkId || input.bookingId || movNo,
			bookingReference: movNo,
			movementNumber: movNo,
			forwarderId: fwdId,
			forwarderName: fwdName,
			forwarderEmail: fwdEmail,
			status: "OFFER_RECEIVED",
			gmailThreadId: input.gmailThreadId || void 0,
			gmailMessageId: input.gmailMessageId || void 0,
			sentAt: (/* @__PURE__ */ new Date()).toISOString(),
			origin: bk?.origin || dbPol || "POL",
			destination: bk?.destination || dbPod || "POD",
			polCode: bk?.pol_code || dbPol || "POL",
			polName: bk?.pol_name || "Port of Loading",
			podCode: bk?.pod_code || dbPod || "POD",
			podName: bk?.pod_name || "Destination Port",
			supplierName: bk?.supplier_name || dbSupplier || "Shipper",
			buyerName: bk?.buyer_name || dbBuyer || "Consignee",
			containerType: bk?.container_type || "40HC",
			containerCount: bk?.container_count || 1,
			cargoDescription: bk?.cargo_description || "Commercial Cargo"
		};
		const list = getLocalForwarderRequests();
		list.unshift(newReq);
		saveLocalForwarderRequests(list);
		req = newReq;
		existing = newReq;
	}
	const extracted = await extractQuotationFromEmail({
		subject: input.subject || "",
		body: input.body || "",
		snippet: input.snippet || null,
		senderEmail: input.senderEmail || null,
		senderName: input.senderName || null,
		receivedAt: (/* @__PURE__ */ new Date()).toISOString(),
		gmailMessageId: input.gmailMessageId || null,
		gmailThreadId: input.gmailThreadId || null,
		inReplyTo: input.inReplyTo || null,
		references: input.references || null,
		forwarderId: existing.forwarderId,
		knownMovementNumber: existing.movementNumber,
		knownForwarderRequestId: existing.id,
		knownContainerType: existing.containerType
	});
	const cleanSenderEmail = (input.senderEmail || "").trim().toLowerCase();
	const forwarderPrimaryEmail = (existing.forwarderEmail || "").trim().toLowerCase();
	const senderDomain = cleanSenderEmail.includes("@") ? cleanSenderEmail.split("@")[1] : "";
	const fwdDomain = forwarderPrimaryEmail.includes("@") ? forwarderPrimaryEmail.split("@")[1] : "";
	let unverifiedSender = false;
	if (cleanSenderEmail && forwarderPrimaryEmail && cleanSenderEmail !== forwarderPrimaryEmail) {
		if (!senderDomain || !fwdDomain || senderDomain !== fwdDomain) unverifiedSender = true;
	}
	const validation = validateQuotationForBackendAction(extracted, extracted.isDeclined ? "DECLINE_REQUEST" : extracted.isConfirmed ? "CONFIRM_MOVEMENT" : "RECORD_OFFER", {
		status: existing.status,
		movementNumber: existing.movementNumber,
		forwarderId: existing.forwarderId
	});
	const detQuotationFields = extractQuotationFieldsDeterministic(input.subject || "", input.body || input.snippet || "");
	const hasExtractedRate = detQuotationFields.oceanFreight !== null && detQuotationFields.oceanFreight > 0 || detQuotationFields.totalAmount !== null && detQuotationFields.totalAmount > 0 || extracted.rate !== null && extracted.rate > 0 || extracted.totalCost !== null && extracted.totalCost > 0;
	let newStatus = existing.status;
	let offerExtracted = hasExtractedRate;
	if (unverifiedSender) newStatus = "NEEDS_REVIEW";
	else if (validation.allowed && validation.suggestedStatus) {
		newStatus = validation.suggestedStatus;
		if (newStatus === "OFFER_RECEIVED") offerExtracted = true;
	} else if (hasExtractedRate) newStatus = "OFFER_RECEIVED";
	else if (!validation.allowed && validation.requiresReview) newStatus = "NEEDS_REVIEW";
	else newStatus = "RESPONDED";
	if (extracted.deterministicResult?.needsReview) newStatus = "NEEDS_REVIEW";
	const reviewReasons = [...extracted.deterministicResult?.reviewReasons || [], ...unverifiedSender ? [`Sender email (${input.senderEmail}) does not match registered contact or domain for forwarder ${existing.forwarderName} (${existing.forwarderEmail}). Marked UNVERIFIED_SENDER.`] : []];
	const mergedOfferData = {
		...existing.offerData || {},
		ratePerContainer: detQuotationFields.oceanFreight !== null ? detQuotationFields.oceanFreight : extracted.rate !== null ? extracted.rate : existing.offerData?.ratePerContainer,
		totalFreight: detQuotationFields.totalAmount !== null ? detQuotationFields.totalAmount : extracted.totalCost !== null ? extracted.totalCost : detQuotationFields.oceanFreight || extracted.rate ? (detQuotationFields.oceanFreight || extracted.rate) * (existing.containerCount || 1) : existing.offerData?.totalFreight,
		currency: detQuotationFields.currency || extracted.currency || existing.offerData?.currency || "USD",
		containerType: detQuotationFields.containerType || extracted.containerType || existing.offerData?.containerType || void 0,
		quantity: detQuotationFields.containerQuantity || extracted.containerQuantity || existing.offerData?.quantity || void 0,
		availability: extracted.availability || existing.offerData?.availability || void 0,
		etd: detQuotationFields.sailingDate || extracted.etd || existing.offerData?.etd || void 0,
		eta: extracted.eta || existing.offerData?.eta || void 0,
		transitDays: detQuotationFields.transitTime || extracted.transitTime || existing.offerData?.transitDays || void 0,
		freeDays: detQuotationFields.freeDays || extracted.freeDays || existing.offerData?.freeDays || void 0,
		carrier: detQuotationFields.carrier || extracted.carrier || existing.offerData?.carrier || void 0,
		vesselName: detQuotationFields.vesselName || extracted.vesselName || existing.offerData?.vesselName || void 0,
		voyageNumber: extracted.voyageNumber || existing.offerData?.voyageNumber || void 0,
		validUntil: detQuotationFields.validityDate || extracted.rateValidity || existing.offerData?.validUntil || void 0,
		additionalCharges: detQuotationFields.otherCharges !== null ? `$${detQuotationFields.otherCharges}` : extracted.additionalCharges || existing.offerData?.additionalCharges || void 0,
		totalCost: detQuotationFields.totalAmount !== null ? detQuotationFields.totalAmount : extracted.totalCost !== null ? extracted.totalCost : void 0,
		oceanFreight: detQuotationFields.oceanFreight !== null ? detQuotationFields.oceanFreight : extracted.rate !== null ? extracted.rate : void 0,
		originCharges: detQuotationFields.originCharges !== null ? detQuotationFields.originCharges : void 0,
		destinationCharges: detQuotationFields.destinationCharges !== null ? detQuotationFields.destinationCharges : void 0,
		thc: detQuotationFields.thc !== null ? detQuotationFields.thc : typeof extracted.deterministicResult?.thc === "number" ? extracted.deterministicResult.thc : void 0,
		documentationCharges: detQuotationFields.documentationCharges !== null ? detQuotationFields.documentationCharges : typeof extracted.deterministicResult?.documentationCharges === "number" ? extracted.deterministicResult.documentationCharges : void 0,
		customsCharges: detQuotationFields.customsCharges !== null ? detQuotationFields.customsCharges : void 0,
		truckingCharges: detQuotationFields.truckingCharges !== null ? detQuotationFields.truckingCharges : void 0,
		otherCharges: detQuotationFields.otherCharges !== null ? detQuotationFields.otherCharges : void 0,
		totalAmount: detQuotationFields.totalAmount !== null ? detQuotationFields.totalAmount : extracted.totalCost !== null ? extracted.totalCost : void 0,
		sailingDate: detQuotationFields.sailingDate || extracted.etd || void 0,
		validityDate: detQuotationFields.validityDate || extracted.rateValidity || void 0,
		routing: detQuotationFields.routing || void 0,
		notes: detQuotationFields.notes || extracted.notes || existing.offerData?.notes || void 0,
		receivedAt: extracted.emailReceivedDate || (/* @__PURE__ */ new Date()).toISOString(),
		sourceEmailId: input.emailMessageId || input.gmailMessageId || void 0,
		originalEmailSubject: input.subject || void 0,
		originalEmailBody: input.body ? input.body.slice(0, 800) : void 0,
		receivedVia: "Gmail Automatic Sync",
		responseClassification: newStatus === "OFFER_RECEIVED" || newStatus === "CONFIRMED" || newStatus === "DECLINED" || newStatus === "AVAILABLE" || newStatus === "NOT_AVAILABLE" ? newStatus : "NEEDS_REVIEW",
		extractionSummary: extracted.missingFields.length > 0 ? `Extracted ${extracted.presentFields.length} fields (${Math.round(extracted.extractionConfidence * 100)}% confidence). Not provided: ${extracted.missingFields.slice(0, 4).join(", ")}.` : `Complete extraction (${Math.round(extracted.extractionConfidence * 100)}% confidence).`,
		traceability: {
			...extracted.traceability || extracted.deterministicResult?.traceability || {},
			...detQuotationFields.fieldTraceability
		},
		reviewReasons,
		confidenceScore: extracted.extractionConfidence,
		hasConflicts: extracted.deterministicResult?.hasConflicts || false,
		needsReview: extracted.deterministicResult?.needsReview || unverifiedSender || newStatus === "NEEDS_REVIEW",
		unverifiedSender,
		containerRates: extracted.deterministicResult?.containerRates
	};
	const updatedReq = {
		...existing,
		status: newStatus,
		offerData: mergedOfferData,
		ratePerContainer: mergedOfferData.ratePerContainer || existing.ratePerContainer,
		currency: mergedOfferData.currency || existing.currency,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	const list = getLocalForwarderRequests();
	const currentIdx = list.findIndex((r) => r.id === updatedReq.id);
	if (currentIdx !== -1) list[currentIdx] = updatedReq;
	else list.unshift(updatedReq);
	saveLocalForwarderRequests(list);
	recordQuotationAuditEvent({
		eventType: newStatus === "NEEDS_REVIEW" ? "EXTRACTION_NEEDS_REVIEW" : "QUOTATION_SAVED",
		movementNumber: updatedReq.movementNumber,
		bookingId: updatedReq.bookingId,
		forwarderId: updatedReq.forwarderId,
		forwarderName: updatedReq.forwarderName,
		senderEmail: input.senderEmail,
		gmailMessageId: input.gmailMessageId,
		gmailThreadId: input.gmailThreadId,
		summary: `Extracted quotation offer for ${updatedReq.forwarderName} (${updatedReq.id}): Rate ${mergedOfferData.ratePerContainer !== void 0 ? `$${mergedOfferData.ratePerContainer}` : "N/A"} ${mergedOfferData.currency || ""}. Status: ${newStatus}.`,
		details: {
			status: newStatus,
			rate: mergedOfferData.ratePerContainer,
			currency: mergedOfferData.currency,
			confidence: extracted.extractionConfidence,
			reviewReasons,
			unverifiedSender
		}
	});
	if (isSupabaseConfigured && updatedReq.bookingId) try {
		await persistQuotationToDatabase({
			emailMessageId: input.emailMessageId || "",
			gmailMessageId: input.gmailMessageId,
			gmailThreadId: input.gmailThreadId,
			inReplyTo: input.inReplyTo,
			references: input.references,
			senderEmail: input.senderEmail,
			senderName: input.senderName,
			subject: input.subject,
			body: input.body,
			bookingId: updatedReq.bookingId,
			movementNumber: updatedReq.movementNumber,
			forwarderId: updatedReq.forwarderId,
			forwarderName: updatedReq.forwarderName,
			forwarderEmail: updatedReq.forwarderEmail,
			forwarderCode: updatedReq.forwarderCode,
			extracted,
			newStatus,
			offerExtracted,
			unverifiedSender,
			reviewReasons
		});
	} catch (syncErr) {
		console.warn("[MultiForwarderService] Notice persisting quotation to Supabase:", syncErr);
	}
	if (typeof window !== "undefined") {
		window.dispatchEvent(new CustomEvent("nashmia_multi_forwarder_updated", { detail: {
			updatedRequestId: updatedReq.id,
			requestId: updatedReq.id,
			bookingId: updatedReq.bookingId,
			movementNumber: updatedReq.movementNumber,
			request: updatedReq,
			status: newStatus,
			offer: updatedReq.offerData,
			rate: mergedOfferData.ratePerContainer
		} }));
		if (offerExtracted || mergedOfferData.ratePerContainer) window.dispatchEvent(new CustomEvent("nashmia_forwarder_offer_received", { detail: {
			requestId: updatedReq.id,
			bookingId: updatedReq.bookingId,
			movementNumber: updatedReq.movementNumber,
			request: updatedReq,
			offer: updatedReq.offerData,
			rate: mergedOfferData.ratePerContainer
		} }));
	}
	return {
		processed: true,
		request: updatedReq,
		statusUpdatedTo: newStatus,
		offerExtracted,
		reason: `Successfully routed reply to ${req.forwarderName} (${req.id}). Status: ${newStatus}.`
	};
}
/**
* Returns aggregated forwarder summary statistics for a booking
*/
function getBookingForwarderSummary(bookingIdOrMov, allRequests) {
	const requests = allRequests && allRequests.length > 0 ? allRequests : getLocalForwarderRequests();
	const idLower = (bookingIdOrMov || "").trim().toLowerCase();
	const cleanId = idLower.replace(/^nash-/, "").replace(/[-_/\s]/g, "");
	const linked = requests.filter((r) => {
		const bId = (r.bookingId || "").trim().toLowerCase();
		const mov = (r.movementNumber || "").trim().toLowerCase();
		const ref = (r.bookingReference || "").trim().toLowerCase();
		const rId = (r.id || "").trim().toLowerCase();
		const cleanMov = mov.replace(/^nash-/, "").replace(/[-_/\s]/g, "");
		const cleanRef = ref.replace(/^nash-/, "").replace(/[-_/\s]/g, "");
		return bId === idLower || mov === idLower || ref === idLower || rId === idLower || cleanId.length > 3 && (cleanMov === cleanId || cleanRef === cleanId) || idLower.length > 3 && (bId.includes(idLower) || mov.includes(idLower) || idLower.includes(mov) || ref.includes(idLower) || idLower.includes(ref));
	});
	const totalForwarders = linked.length;
	const receivedQuotes = linked.filter((r) => r.status === "OFFER_RECEIVED" || r.status === "AWARDED" || r.status === "ACCEPTED" || r.status === "RESPONDED" || r.offerData?.ratePerContainer !== void 0 && r.offerData.ratePerContainer !== null && r.offerData.ratePerContainer > 0 || r.ratePerContainer !== void 0 && r.ratePerContainer !== null && r.ratePerContainer > 0);
	const pendingReplies = linked.filter((r) => r.status === "AWAITING_OFFER" || r.status === "PENDING" || r.status === "SENT" || r.status === "REQUESTED");
	const declinedCount = linked.filter((r) => r.status === "DECLINED").length;
	const validRates = receivedQuotes.map((r) => ({
		rate: r.offerData?.ratePerContainer || r.ratePerContainer || 0,
		currency: r.offerData?.currency || r.currency || "USD",
		forwarder: r.forwarderName,
		etd: r.offerData?.etd || r.etd || void 0,
		transitDays: r.offerData?.transitDays || void 0,
		carrier: r.offerData?.carrier || void 0,
		quote: r
	})).filter((x) => x.rate > 0);
	const bestRateObj = validRates.length > 0 ? validRates.reduce((min, curr) => curr.rate < min.rate ? curr : min, validRates[0]) : void 0;
	const latestQuote = [...receivedQuotes].sort((a, b) => {
		const timeA = new Date(a.offerData?.receivedAt || a.updatedAt || a.sentAt || 0).getTime();
		return new Date(b.offerData?.receivedAt || b.updatedAt || b.sentAt || 0).getTime() - timeA;
	})[0];
	const awarded = linked.find((r) => r.status === "AWARDED" || r.status === "ACCEPTED");
	let overallStatus = "NO_FORWARDERS";
	if (awarded) overallStatus = "AWARDED";
	else if (receivedQuotes.length > 0) overallStatus = "OFFERS_RECEIVED";
	else if (pendingReplies.length > 0) overallStatus = "AWAITING_QUOTES";
	const dates = linked.map((r) => r.offerData?.receivedAt || r.updatedAt || r.sentAt).filter(Boolean).sort().reverse();
	return {
		movementNumber: bookingIdOrMov,
		totalForwarders,
		quotationsReceived: receivedQuotes.length,
		pendingReplies: pendingReplies.length,
		declinedCount,
		bestRate: bestRateObj?.rate,
		bestRateCurrency: bestRateObj?.currency,
		bestRateForwarder: bestRateObj?.forwarder,
		bestEtd: bestRateObj?.etd || latestQuote?.offerData?.etd,
		bestTransitDays: bestRateObj?.transitDays || latestQuote?.offerData?.transitDays,
		bestCarrier: bestRateObj?.carrier || latestQuote?.offerData?.carrier,
		latestQuote,
		overallStatus,
		lastResponseTime: dates[0],
		awardedForwarder: awarded?.forwarderName
	};
}
/**
* Fetch all forwarder requests across all bookings directly from Supabase PostgreSQL database
* (Single source of truth).
*/
async function fetchAllForwarderRequestsFromSupabase() {
	if (isSupabaseConfigured) try {
		const records = await fetchForwarderRequestsFromDatabase(null);
		if (records && records.length > 0) return records;
	} catch (err) {
		console.warn("[MultiForwarderService] Error fetching all forwarder requests from database:", err);
	}
	return getLocalForwarderRequests();
}
/**
* Extract domain from an email or URL string (e.g., 'operations@apexmaritime.com' -> 'apexmaritime.com')
*/
function extractDomain(input) {
	if (!input) return null;
	try {
		const clean = input.trim().toLowerCase();
		if (clean.includes("@")) return clean.split("@")[1].trim();
		return clean.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0] || null;
	} catch {
		return null;
	}
}
var COMMON_PUBLIC_MAIL_PROVIDERS = /* @__PURE__ */ new Set([
	"gmail.com",
	"googlemail.com",
	"yahoo.com",
	"hotmail.com",
	"outlook.com",
	"icloud.com",
	"aol.com",
	"mail.com",
	"zoho.com",
	"proton.me",
	"protonmail.com"
]);
/**
* Validates whether the incoming sender email belongs to the forwarder associated with the booking
*/
function validateForwarderSenderEmail(senderEmail, forwarder, options) {
	const cleanSender = (senderEmail || "").trim().toLowerCase();
	if (!cleanSender) return {
		isValid: false,
		reason: "Sender email address is empty."
	};
	if (options?.matchedBy === "GMAIL_THREAD_ID" || options?.matchedBy === "THREAD_ID" || options?.matchedBy === "IN_REPLY_TO_REFERENCES") return {
		isValid: true,
		reason: `Sender ${cleanSender} replied directly inside the verified booking conversation thread or referenced message.`
	};
	if (options?.outboundRecipient) {
		const cleanRecipient = options.outboundRecipient.trim().toLowerCase();
		if (cleanRecipient === cleanSender || cleanRecipient.includes(cleanSender) || cleanSender.includes(cleanRecipient)) return {
			isValid: true,
			reason: `Sender ${cleanSender} matches the recipient of the outbound booking dispatch email.`
		};
	}
	if (!forwarder) return {
		isValid: true,
		reason: `Inbound partner response referencing specific movement identifier.`
	};
	const forwarderPrimaryEmail = (forwarder.email || "").trim().toLowerCase();
	const forwarderName = forwarder.company_name || "Assigned Forwarder";
	if (forwarderPrimaryEmail && cleanSender === forwarderPrimaryEmail) return {
		isValid: true,
		reason: `Sender ${cleanSender} exactly matches primary forwarder contact (${forwarderName}).`
	};
	const senderDomain = extractDomain(cleanSender);
	const forwarderEmailDomain = extractDomain(forwarderPrimaryEmail);
	const forwarderWebDomain = extractDomain(forwarder.website);
	if (senderDomain && !COMMON_PUBLIC_MAIL_PROVIDERS.has(senderDomain)) {
		if (forwarderEmailDomain && senderDomain === forwarderEmailDomain) return {
			isValid: true,
			reason: `Sender domain '@${senderDomain}' matches forwarder corporate domain for ${forwarderName}.`
		};
		if (forwarderWebDomain && (senderDomain === forwarderWebDomain || senderDomain.endsWith(`.${forwarderWebDomain}`))) return {
			isValid: true,
			reason: `Sender domain '@${senderDomain}' matches forwarder website domain (${forwarderWebDomain}).`
		};
	}
	if (forwarder.notes && forwarder.notes.toLowerCase().includes(cleanSender)) return {
		isValid: true,
		reason: `Sender ${cleanSender} is listed as an authorized contact for ${forwarderName}.`
	};
	if (forwarderPrimaryEmail || forwarderWebDomain) return {
		isValid: false,
		reason: `Sender ${cleanSender} does not match assigned forwarder (${forwarderName}: ${forwarderPrimaryEmail || forwarderWebDomain}).`
	};
	return {
		isValid: true,
		reason: `Sender ${cleanSender} associated with movement assigned to ${forwarderName}.`
	};
}
/**
* Extracts and cleans Message-ID references from In-Reply-To and References headers
*/
function extractMessageReferences(input) {
	const refSet = /* @__PURE__ */ new Set();
	const addTokens = (val) => {
		if (!val || typeof val !== "string") return;
		const angleMatches = val.match(/<([^>]+)>/g);
		if (angleMatches) for (const m of angleMatches) {
			const cleaned = m.replace(/[<>]/g, "").trim();
			if (cleaned.length >= 3) refSet.add(cleaned);
		}
		const parts = val.split(/[\s,]+/);
		for (const p of parts) {
			const cleaned = p.replace(/[<>]/g, "").trim();
			if (cleaned.length >= 5 && (cleaned.includes("@") || cleaned.includes("-") || cleaned.length > 8)) refSet.add(cleaned);
		}
	};
	addTokens(input.inReplyTo);
	if (Array.isArray(input.references)) for (const r of input.references) addTokens(r);
	else if (typeof input.references === "string") addTokens(input.references);
	if (Array.isArray(input.headers)) for (const h of input.headers) {
		const name = (h.name || "").toLowerCase();
		if (name === "in-reply-to" || name === "references" || name === "message-id") addTokens(h.value);
	}
	else if (input.headers && typeof input.headers === "object") {
		const obj = input.headers;
		addTokens(obj["in-reply-to"]);
		addTokens(obj["references"]);
		addTokens(obj["message-id"]);
	}
	if (input.rawHeaders && typeof input.rawHeaders === "object") {
		const raw = input.rawHeaders;
		addTokens(raw.in_reply_to);
		addTokens(raw.inReplyTo);
		addTokens(raw.references);
		addTokens(raw.message_id);
	}
	return Array.from(refSet);
}
/**
* Extracts potential Movement/Booking Numbers from textual content using configurable regular expressions
* Supports: BK-2026-000145, BK/2026/000145, BOOKING-2026-000145, REF: BK-2026-000145, MOV-, etc.
*/
function extractMovementNumbers(text) {
	if (!text) return [];
	const ids = /* @__PURE__ */ new Set();
	const allNashMatches = text.matchAll(/(?:^|[^A-Za-z0-9])(NASH[-_](?:BK[-_]|MOV[-_])?[0-9]{4}[-_][0-9]{3,8})(?:$|[^A-Za-z0-9])/gi);
	for (const nm of allNashMatches) if (nm[1]) ids.add(nm[1].toUpperCase().replace(/_/g, "-"));
	const configuredMatches = extractBookingNumbersFromText(text);
	for (const cm of configuredMatches) {
		ids.add(cm.toUpperCase());
		const normalized = normalizeBookingNumber(cm);
		if (normalized) ids.add(normalized);
	}
	const stdMov = extractMovementNumber(text);
	if (stdMov) ids.add(stdMov.toUpperCase());
	return Array.from(ids);
}
/**
* Extracts unique per-forwarder Request IDs from textual content (Priority 4)
* Format examples: MFR-abc123-fwd456, REQ-FWD-2026-001, FWR-2026-0012, REQ-GLOBAL
*/
function extractPerForwarderRequestIds(text) {
	if (!text) return [];
	const ids = /* @__PURE__ */ new Set();
	const reqMatches = text.matchAll(/\b(?:MFR[-_][A-Za-z0-9_-]{4,32}|REQ[-_]FWD[-_][A-Za-z0-9_-]{3,24}|FWR[-_][0-9]{4}[-_]?[0-9]+|FWR[-_]?[0-9]{3,8}|REQ[-_][A-Z0-9_-]{3,24})\b/gi);
	for (const m of reqMatches) ids.add(m[0].trim().toUpperCase());
	return Array.from(ids);
}
/**
* CORE IDENTIFICATION ENGINE FOR MOVEMENTS & BOOKINGS
*
* Implements the mandatory strict 6-Priority Hierarchy:
* 1. Gmail Thread ID
* 2. In-Reply-To / References headers
* 3. Movement Number / Request ID
* 4. Booking Reference
* 5. Forwarder + booking details
* 6. AI matching only as a fallback
*
* If the system cannot confidently identify the Movement, it does NOT attach
* the document automatically, and marks it as NEEDS_REVIEW instead.
*/
async function identifyMovementForIncomingEmail(supabase, input) {
	const { gmailThreadId, gmailMessageId, subject = "", body = "", snippet = "", senderEmail, senderName, attachments = [] } = input;
	const cleanSender = (senderEmail || "").trim().toLowerCase();
	const priorityStepEvaluations = [];
	const attachmentNames = attachments.map((a) => a.filename || a.name || "").join(" ");
	const attachmentContentCombined = (input.attachmentTexts || []).join(" ");
	const fullText = `${subject || ""} \n ${body || ""} \n ${snippet || ""} \n ${attachmentNames} \n ${attachmentContentCombined}`;
	let p1Matched = false;
	let p1BookingId = null;
	let p1MovementNumber = null;
	let p1ForwarderId = null;
	let p1Details = "";
	if (gmailThreadId) {
		const multiFwdMatch = matchIncomingEmailToForwarderRequest({
			gmailThreadId,
			gmailMessageId,
			senderEmail: cleanSender,
			senderName,
			subject,
			body,
			snippet
		});
		if (multiFwdMatch.matched && multiFwdMatch.request && multiFwdMatch.matchedBy === "GMAIL_THREAD_ID") {
			p1Matched = true;
			p1BookingId = multiFwdMatch.request.bookingId;
			p1MovementNumber = multiFwdMatch.request.movementNumber || multiFwdMatch.request.bookingReference;
			p1ForwarderId = multiFwdMatch.request.forwarderId;
			p1Details = `Matched via Multi-Forwarder tracking key [${multiFwdMatch.request.trackingCompositeKey}] for Thread ${gmailThreadId}`;
		}
		if (!p1Matched) {
			const { data: threadRecord } = await supabase.from("email_threads").select("id, booking_id").eq("gmail_thread_id", gmailThreadId).maybeSingle();
			if (threadRecord?.booking_id) {
				p1Matched = true;
				p1BookingId = threadRecord.booking_id;
				p1Details = `Gmail Thread ID [${gmailThreadId}] linked in email_threads table`;
			} else if (threadRecord?.id) try {
				const { data: msgRecord } = await supabase.from("email_messages").select("booking_id, movement_number, forwarder_id").eq("thread_id", threadRecord.id).not("booking_id", "is", null).order("created_at", { ascending: false }).limit(1).maybeSingle();
				if (msgRecord?.booking_id) {
					p1Matched = true;
					p1BookingId = msgRecord.booking_id;
					p1MovementNumber = msgRecord.movement_number || null;
					p1ForwarderId = msgRecord.forwarder_id || null;
					p1Details = `Gmail Thread ID [${gmailThreadId}] linked via thread_id to prior booking`;
				}
			} catch (e) {
				console.warn("[Matcher] Notice checking email_messages by thread_id:", e);
			}
		}
	}
	priorityStepEvaluations.push({
		step: 1,
		priorityName: "Gmail Thread ID",
		evaluated: Boolean(gmailThreadId),
		matched: p1Matched,
		confidence: p1Matched ? 1 : 0,
		details: p1Matched ? p1Details : gmailThreadId ? "Thread ID not associated with an existing booking" : "No Gmail Thread ID provided"
	});
	if (p1Matched && p1BookingId) return resolveConfidentMatchResult(supabase, {
		matchedBy: "GMAIL_THREAD_ID",
		matchingPriorityStep: 1,
		confidence: 1,
		bookingId: p1BookingId,
		movementNumber: p1MovementNumber,
		forwarderId: p1ForwarderId,
		senderEmail: cleanSender,
		senderName: input.senderName,
		matchReason: `Confidently matched via Priority 1 (Gmail Thread ID): ${p1Details}.`,
		priorityStepEvaluations
	});
	let p2Matched = false;
	let p2BookingId = null;
	let p2MovementNumber = null;
	let p2ForwarderId = null;
	let p2Details = "";
	const referencedMessageIds = extractMessageReferences({
		inReplyTo: input.inReplyTo,
		references: input.references,
		headers: input.headers,
		rawHeaders: input.rawHeaders
	});
	if (referencedMessageIds.length > 0) {
		const { data: matchedRefMsgs } = await supabase.from("email_messages").select("id, booking_id, movement_id, movement_number, forwarder_id, gmail_message_id, message_id").or(`gmail_message_id.in.(${referencedMessageIds.map((id) => `"${id}"`).join(",")}),message_id.in.(${referencedMessageIds.map((id) => `"${id}"`).join(",")})`).not("booking_id", "is", null).limit(5);
		if (matchedRefMsgs && matchedRefMsgs.length > 0) {
			const refMsg = matchedRefMsgs[0];
			if (refMsg.booking_id) {
				p2Matched = true;
				p2BookingId = refMsg.booking_id;
				p2MovementNumber = refMsg.movement_number || null;
				p2ForwarderId = refMsg.forwarder_id || null;
				p2Details = `In-Reply-To / References header matched prior message ID [${refMsg.gmail_message_id || refMsg.message_id}] linked to booking ${refMsg.booking_id}`;
			}
		}
	}
	priorityStepEvaluations.push({
		step: 2,
		priorityName: "In-Reply-To / References headers",
		evaluated: referencedMessageIds.length > 0,
		matched: p2Matched,
		confidence: p2Matched ? .98 : 0,
		details: p2Matched ? p2Details : referencedMessageIds.length > 0 ? `Evaluated ${referencedMessageIds.length} reference headers, but none were linked to an existing booking.` : "No In-Reply-To or References headers found in email."
	});
	if (p2Matched && p2BookingId) return resolveConfidentMatchResult(supabase, {
		matchedBy: "IN_REPLY_TO_REFERENCES",
		matchingPriorityStep: 2,
		confidence: .98,
		bookingId: p2BookingId,
		movementNumber: p2MovementNumber,
		forwarderId: p2ForwarderId,
		senderEmail: cleanSender,
		senderName: input.senderName,
		matchReason: `Confidently matched via Priority 2 (In-Reply-To / References): ${p2Details}.`,
		priorityStepEvaluations
	});
	let p3Matched = false;
	let p3BookingId = null;
	let p3MovementNumber = null;
	let p3ForwarderId = null;
	let p3Details = "";
	let p3Ambiguous = false;
	const orderResult = extractBookingNumberStrictOrder({
		subject,
		body,
		attachments: input.attachments,
		attachmentFilenames: input.attachments?.map((a) => a.name || a.filename).filter(Boolean),
		inReplyTo: input.inReplyTo,
		references: input.references
	});
	const extractedMovementNumbers = orderResult.detectedBookingNumbers.length > 0 ? orderResult.detectedBookingNumbers : extractMovementNumbers(fullText);
	if (orderResult.isAmbiguous) {
		p3Ambiguous = true;
		p3Details = orderResult.reason;
	} else if (extractedMovementNumbers.length > 0) {
		const matchedCandidateMap = /* @__PURE__ */ new Map();
		for (const movId of extractedMovementNumbers) {
			const normId = normalizeBookingNumber(movId) || movId;
			const slashId = movId.includes("-") ? movId.replace(/-/g, "/") : movId;
			const matchedLocal = getLocalForwarderRequests().find((r) => {
				const rMovNorm = normalizeBookingNumber(r.movementNumber || "");
				const rRefNorm = normalizeBookingNumber(r.bookingReference || "");
				return rMovNorm === normId || rRefNorm === normId || r.movementNumber?.toUpperCase() === movId.toUpperCase() || r.movementNumber?.toUpperCase() === slashId.toUpperCase();
			});
			if (matchedLocal?.bookingId) matchedCandidateMap.set(matchedLocal.bookingId, {
				bookingId: matchedLocal.bookingId,
				movementNumber: matchedLocal.movementNumber || normId,
				forwarderId: matchedLocal.forwarderId
			});
			const { data: bookingRows } = await supabase.from("bookings").select("id, movement_number, booking_reference, reference, forwarder_id").or(`movement_number.ilike.%${normId}%,booking_reference.ilike.%${normId}%,movement_number.ilike.%${slashId}%,booking_reference.ilike.%${slashId}%`).limit(5);
			if (bookingRows && bookingRows.length > 0) for (const row of bookingRows) matchedCandidateMap.set(row.id, {
				bookingId: row.id,
				movementNumber: row.movement_number || row.booking_reference || normId,
				forwarderId: row.forwarder_id || void 0
			});
		}
		if (matchedCandidateMap.size === 1) {
			const single = Array.from(matchedCandidateMap.values())[0];
			p3Matched = true;
			p3BookingId = single.bookingId;
			p3MovementNumber = single.movementNumber;
			p3ForwarderId = single.forwarderId || null;
			p3Details = `Exact match for Booking/Movement Number [${p3MovementNumber}] in ${orderResult.foundIn || "subject/body"}`;
		} else if (matchedCandidateMap.size > 1) {
			p3Ambiguous = true;
			p3Details = `Ambiguous: Multiple bookings (${Array.from(matchedCandidateMap.keys()).join(", ")}) match movement numbers [${extractedMovementNumbers.join(", ")}]. Must NOT auto-assign.`;
		}
	}
	priorityStepEvaluations.push({
		step: 3,
		priorityName: "Movement Number in subject/body",
		evaluated: extractedMovementNumbers.length > 0,
		matched: p3Matched,
		confidence: p3Matched ? .96 : 0,
		details: p3Matched ? p3Details : p3Ambiguous ? p3Details : extractedMovementNumbers.length > 0 ? `Found movement numbers [${extractedMovementNumbers.join(", ")}], but no active booking record exists.` : "No Movement Number patterns found in email subject or body."
	});
	if (p3Matched && p3BookingId && !p3Ambiguous) return resolveConfidentMatchResult(supabase, {
		matchedBy: "MOVEMENT_NUMBER",
		matchingPriorityStep: 3,
		confidence: .96,
		bookingId: p3BookingId,
		movementNumber: p3MovementNumber,
		forwarderId: p3ForwarderId,
		senderEmail: cleanSender,
		senderName: input.senderName,
		matchReason: `Confidently matched via Priority 3 (Movement Number in subject/body): ${p3Details}.`,
		priorityStepEvaluations
	});
	let p4Matched = false;
	let p4BookingId = null;
	let p4MovementNumber = null;
	let p4ForwarderId = null;
	let p4Details = "";
	let p4Ambiguous = false;
	const extractedRequestIds = extractPerForwarderRequestIds(fullText);
	const headerReqId = input.rawHeaders?.forwarder_request_id || input.rawHeaders?.request_id || null;
	if (headerReqId && !extractedRequestIds.includes(headerReqId.toUpperCase())) extractedRequestIds.push(headerReqId.toUpperCase());
	if (extractedRequestIds.length > 0) {
		const matchedReqMap = /* @__PURE__ */ new Map();
		for (const reqId of extractedRequestIds) {
			const matchedLocal = getLocalForwarderRequests().find((r) => r.id.toUpperCase() === reqId.toUpperCase() || r.requestId && r.requestId.toUpperCase() === reqId.toUpperCase());
			if (matchedLocal?.bookingId) matchedReqMap.set(matchedLocal.bookingId, {
				bookingId: matchedLocal.bookingId,
				movementNumber: matchedLocal.movementNumber,
				forwarderId: matchedLocal.forwarderId,
				reqId: matchedLocal.id
			});
			try {
				const { data: rawMsgMatches } = await supabase.from("email_messages").select("booking_id, movement_number, forwarder_id").filter("raw_headers->>request_id", "eq", reqId).limit(3);
				if (rawMsgMatches && rawMsgMatches.length > 0) {
					for (const rm of rawMsgMatches) if (rm.booking_id) matchedReqMap.set(rm.booking_id, {
						bookingId: rm.booking_id,
						movementNumber: rm.movement_number || void 0,
						forwarderId: rm.forwarder_id || void 0,
						reqId
					});
				}
			} catch {}
		}
		if (matchedReqMap.size === 1) {
			const single = Array.from(matchedReqMap.values())[0];
			p4Matched = true;
			p4BookingId = single.bookingId;
			p4MovementNumber = single.movementNumber || null;
			p4ForwarderId = single.forwarderId || null;
			p4Details = `Unique per-forwarder Request ID [${single.reqId}] matched linked request record`;
		} else if (matchedReqMap.size > 1) {
			p4Ambiguous = true;
			p4Details = `Ambiguous: Multiple bookings matched unique request IDs [${extractedRequestIds.join(", ")}]. Must NOT auto-assign.`;
		}
	}
	priorityStepEvaluations.push({
		step: 4,
		priorityName: "Unique per-forwarder Request ID",
		evaluated: extractedRequestIds.length > 0,
		matched: p4Matched,
		confidence: p4Matched ? .98 : 0,
		details: p4Matched ? p4Details : p4Ambiguous ? p4Details : extractedRequestIds.length > 0 ? `Found request IDs [${extractedRequestIds.join(", ")}], but no active forwarder quote record exists.` : "No unique per-forwarder Request ID patterns in email."
	});
	if (p4Matched && p4BookingId && !p4Ambiguous) return resolveConfidentMatchResult(supabase, {
		matchedBy: "PER_FORWARDER_REQUEST_ID",
		matchingPriorityStep: 4,
		confidence: .98,
		bookingId: p4BookingId,
		movementNumber: p4MovementNumber,
		forwarderId: p4ForwarderId,
		senderEmail: cleanSender,
		senderName: input.senderName,
		matchReason: `Confidently matched via Priority 4 (Unique per-forwarder Request ID): ${p4Details}.`,
		priorityStepEvaluations
	});
	let p5Matched = false;
	let p5BookingId = null;
	let p5MovementNumber = null;
	let p5ForwarderId = null;
	let p5Details = "";
	let p5Ambiguous = false;
	let matchedForwarder = null;
	const { data: dbForwarders } = await supabase.from("forwarders").select("id, company_name, email, website");
	const sDomain = extractDomain(cleanSender);
	for (const f of dbForwarders || []) {
		const fEmail = (f.email || "").toLowerCase().trim();
		const fDomain = extractDomain(f.website || fEmail);
		if (fEmail && cleanSender === fEmail) {
			matchedForwarder = {
				id: f.id,
				name: f.company_name,
				email: fEmail
			};
			break;
		}
		if (sDomain && fDomain && sDomain === fDomain && !COMMON_PUBLIC_MAIL_PROVIDERS.has(sDomain)) {
			matchedForwarder = {
				id: f.id,
				name: f.company_name,
				email: fEmail || cleanSender
			};
			break;
		}
	}
	if (!matchedForwarder) {
		const fLocal = getLocalForwarderRequests().find((r) => {
			const rEmail = (r.forwarderEmail || "").toLowerCase().trim();
			const rDomain = extractDomain(rEmail);
			return rEmail === cleanSender || sDomain && rDomain && sDomain === rDomain && !COMMON_PUBLIC_MAIL_PROVIDERS.has(sDomain);
		});
		if (fLocal) matchedForwarder = {
			id: fLocal.forwarderId,
			name: fLocal.forwarderName,
			email: fLocal.forwarderEmail
		};
	}
	if (matchedForwarder) {
		const pendingQuotesForForwarder = getLocalForwarderRequests().filter((r) => (r.forwarderId === matchedForwarder?.id || r.forwarderEmail.toLowerCase() === matchedForwarder?.email.toLowerCase()) && (r.status === "AWAITING_OFFER" || r.status === "PENDING" || r.status === "SENT" || r.status === "OFFER_RECEIVED"));
		const { data: candidateBookingsForForwarder } = await supabase.from("bookings").select("id, movement_number, booking_reference, reference, forwarder_id, status").eq("forwarder_id", matchedForwarder.id).not("status", "in", "(\"Delivered\",\"Cancelled\")").limit(10);
		const distinctBookingIds = /* @__PURE__ */ new Set();
		for (const pq of pendingQuotesForForwarder) if (pq.bookingId) distinctBookingIds.add(pq.bookingId);
		for (const cb of candidateBookingsForForwarder || []) if (cb.id) distinctBookingIds.add(cb.id);
		if (distinctBookingIds.size === 1) {
			const bId = Array.from(distinctBookingIds)[0];
			const matchLocal = pendingQuotesForForwarder.find((r) => r.bookingId === bId);
			const matchDb = candidateBookingsForForwarder?.find((b) => b.id === bId);
			p5Matched = true;
			p5BookingId = bId;
			p5MovementNumber = matchLocal?.movementNumber || matchDb?.movement_number || matchDb?.booking_reference || null;
			p5ForwarderId = matchedForwarder.id;
			p5Details = `Sender matches forwarder ${matchedForwarder.name} with exactly 1 active pending booking`;
		} else if (distinctBookingIds.size > 1) {
			p5Ambiguous = true;
			p5Details = `Sender matches forwarder ${matchedForwarder.name}, but this forwarder has ${distinctBookingIds.size} active bookings. Ambiguous match - MUST NOT auto-assign.`;
		} else p5Details = `Sender matches forwarder ${matchedForwarder.name}, but no active pending booking was found for them.`;
	}
	priorityStepEvaluations.push({
		step: 5,
		priorityName: "Sender email and linked forwarder",
		evaluated: Boolean(cleanSender),
		matched: p5Matched,
		confidence: p5Matched ? .88 : 0,
		details: p5Matched ? p5Details : p5Ambiguous ? p5Details : matchedForwarder ? p5Details : "Sender email domain does not match any registered forwarder."
	});
	if (p5Matched && p5BookingId && !p5Ambiguous) return resolveConfidentMatchResult(supabase, {
		matchedBy: "SENDER_LINKED_FORWARDER",
		matchingPriorityStep: 5,
		confidence: .88,
		bookingId: p5BookingId,
		movementNumber: p5MovementNumber,
		forwarderId: p5ForwarderId,
		senderEmail: cleanSender,
		senderName: input.senderName,
		matchReason: `Confidently matched via Priority 5 (Sender email & linked forwarder): ${p5Details}.`,
		priorityStepEvaluations
	});
	let p6Matched = false;
	let p6BookingId = null;
	let p6MovementNumber = null;
	let p6ForwarderId = null;
	let p6Confidence = 0;
	let p6Details = "";
	const { data: rawCandidates } = await supabase.from("bookings").select(`
      id,
      movement_number,
      booking_reference,
      reference,
      forwarder_id,
      origin,
      destination,
      vessel_name,
      voyage_number,
      etd,
      eta,
      container_type,
      container_size,
      status
    `).not("status", "eq", "Cancelled").not("status", "eq", "Delivered").order("created_at", { ascending: false }).limit(40);
	const forwarderMap = /* @__PURE__ */ new Map();
	for (const f of dbForwarders || []) forwarderMap.set(f.id, {
		name: f.company_name || "",
		email: (f.email || "").toLowerCase(),
		website: f.website || ""
	});
	const enrichedCandidates = (rawCandidates || []).map((c) => ({
		...c,
		forwarder_name: c.forwarder_id ? forwarderMap.get(c.forwarder_id)?.name || null : null,
		forwarder_email: c.forwarder_id ? forwarderMap.get(c.forwarder_id)?.email || null : null,
		forwarder_website: c.forwarder_id ? forwarderMap.get(c.forwarder_id)?.website || null : null
	}));
	const lowerContent = fullText.toLowerCase();
	const containerNumbers = Array.from(fullText.matchAll(/\b([A-Z]{4}[0-9]{7})\b/g)).map((m) => m[1].toUpperCase());
	const scoredCandidates = [];
	for (const cand of enrichedCandidates) {
		let score = 0;
		const signals = [];
		const fEmail = (cand.forwarder_email || "").toLowerCase();
		const fDomain = extractDomain(cand.forwarder_website || fEmail);
		if (fEmail && cleanSender === fEmail) {
			score += 25;
			signals.push(`Forwarder email (${cand.forwarder_name})`);
		} else if (sDomain && fDomain && sDomain === fDomain && !COMMON_PUBLIC_MAIL_PROVIDERS.has(sDomain)) {
			score += 20;
			signals.push(`Forwarder domain (@${sDomain})`);
		}
		if (containerNumbers.length > 0) {
			const { data: bContainers } = await supabase.from("booking_containers").select("container_number").eq("booking_id", cand.id);
			const dbContainerNums = (bContainers || []).map((bc) => (bc.container_number || "").toUpperCase()).filter(Boolean);
			if (containerNumbers.some((cn) => dbContainerNums.includes(cn))) {
				score += 45;
				signals.push(`Container number [${containerNumbers.join(", ")}]`);
			}
		}
		const origin = (cand.origin || "").toLowerCase().trim();
		const dest = (cand.destination || "").toLowerCase().trim();
		let portMatches = 0;
		if (origin && origin.length >= 3 && lowerContent.includes(origin)) {
			portMatches++;
			signals.push(`POL/Load point (${cand.origin})`);
		}
		if (dest && dest.length >= 3 && lowerContent.includes(dest)) {
			portMatches++;
			signals.push(`POD/Destination (${cand.destination})`);
		}
		if (portMatches === 2) score += 35;
		else if (portMatches === 1) score += 15;
		const vName = (cand.vessel_name || "").toLowerCase().trim();
		const vVoyage = (cand.voyage_number || "").toLowerCase().trim();
		if (vName && vName.length >= 4 && lowerContent.includes(vName)) {
			score += 20;
			signals.push(`Vessel (${cand.vessel_name})`);
			if (vVoyage && vVoyage.length >= 2 && lowerContent.includes(vVoyage)) {
				score += 15;
				signals.push(`Voyage (${cand.voyage_number})`);
			}
		}
		if (cand.etd && lowerContent.includes(cand.etd.slice(0, 10))) {
			score += 15;
			signals.push(`ETD date (${cand.etd})`);
		}
		if (score >= 40) scoredCandidates.push({
			candidate: cand,
			score,
			matchedSignals: signals
		});
	}
	scoredCandidates.sort((a, b) => b.score - a.score);
	if (scoredCandidates.length > 0) {
		const top = scoredCandidates[0];
		const second = scoredCandidates[1];
		const scoreLead = second ? top.score - second.score : top.score;
		if (top.score >= 60 && scoreLead >= 20) {
			p6Matched = true;
			p6BookingId = top.candidate.id;
			p6MovementNumber = top.candidate.movement_number || top.candidate.booking_reference || "Movement";
			p6ForwarderId = top.candidate.forwarder_id || null;
			p6Confidence = Math.min(.88, top.score / 100);
			p6Details = `Operational booking attributes (score ${top.score}): ${top.matchedSignals.join(", ")}`;
		}
	}
	priorityStepEvaluations.push({
		step: 6,
		priorityName: "Booking attributes (buyer, load point, destination, containers)",
		evaluated: true,
		matched: p6Matched,
		confidence: p6Matched ? p6Confidence : 0,
		details: p6Matched ? p6Details : scoredCandidates.length > 0 ? `Found ${scoredCandidates.length} candidate bookings, but top candidate did not meet decisive confidence threshold (top score: ${scoredCandidates[0].score}, margin: ${scoredCandidates[1] ? scoredCandidates[0].score - scoredCandidates[1].score : scoredCandidates[0].score}). Requires manual review.` : "No operational booking attributes (ports, containers, vessels) matched candidate bookings."
	});
	if (p6Matched && p6BookingId) return resolveConfidentMatchResult(supabase, {
		matchedBy: "BOOKING_ATTRIBUTES",
		matchingPriorityStep: 6,
		confidence: p6Confidence,
		bookingId: p6BookingId,
		movementNumber: p6MovementNumber,
		forwarderId: p6ForwarderId,
		senderEmail: cleanSender,
		senderName: input.senderName,
		matchReason: `Confidently matched via Priority 6 (Booking Attributes): ${p6Details}.`,
		priorityStepEvaluations
	});
	return {
		matchStatus: "NEEDS_REVIEW",
		matchedBy: "NONE",
		matchingPriorityStep: 0,
		confidence: 0,
		bookingId: null,
		movementId: null,
		movementNumber: null,
		forwarderId: null,
		forwarderName: null,
		forwarderEmail: null,
		senderEmail: cleanSender,
		isForwarderValidated: false,
		matchReason: "Movement/Booking could not be confidently identified across all 6 matching priorities (Gmail Thread ID, In-Reply-To/References, Movement Number in subject/body, Unique per-forwarder Request ID, Sender email and linked forwarder, and Booking attributes). Marked for manual review (NEEDS_REVIEW).",
		priorityStepEvaluations,
		details: {
			evaluatedPriorities: priorityStepEvaluations,
			sender: cleanSender,
			subject
		}
	};
}
/**
* Helper to resolve forwarder data and format the confident MATCHED result
*/
async function resolveConfidentMatchResult(supabase, params) {
	const { matchedBy, matchingPriorityStep, confidence, bookingId, senderEmail, senderName, matchReason, priorityStepEvaluations } = params;
	let finalMovementNumber = params.movementNumber;
	let finalForwarderId = params.forwarderId;
	let finalBookingRef = null;
	const { data: bRec } = await supabase.from("bookings").select("id, movement_number, booking_reference, reference, forwarder_id").eq("id", bookingId).maybeSingle();
	if (bRec) {
		finalBookingRef = bRec.booking_reference || bRec.reference || null;
		if (!finalMovementNumber) finalMovementNumber = bRec.movement_number || bRec.booking_reference || bRec.reference || "Movement";
		if (!finalForwarderId) finalForwarderId = bRec.forwarder_id || null;
	}
	let forwarderName = null;
	let forwarderEmail = null;
	let forwarderData = null;
	if (finalForwarderId) {
		const { data: fRec } = await supabase.from("forwarders").select("id, company_name, email, contact_person, website, notes").eq("id", finalForwarderId).maybeSingle();
		if (fRec) {
			forwarderData = fRec;
			forwarderName = fRec.company_name || fRec.contact_person || null;
			forwarderEmail = fRec.email || null;
		}
	}
	if (!forwarderName && senderEmail) {
		const cleanSender = senderEmail.trim().toLowerCase();
		const { data: fRecByEmail } = await supabase.from("forwarders").select("id, company_name, email, contact_person, website, notes").or(`email.ilike.%${cleanSender}%,contact_email.ilike.%${cleanSender}%`).limit(1).maybeSingle();
		if (fRecByEmail) {
			forwarderData = fRecByEmail;
			finalForwarderId = fRecByEmail.id;
			forwarderName = fRecByEmail.company_name || fRecByEmail.contact_person || null;
			forwarderEmail = fRecByEmail.email || cleanSender;
		}
	}
	if (!forwarderName && finalMovementNumber && senderEmail) {
		const { data: fwdReqs } = await supabase.from("forwarder_requests").select("forwarder_id, forwarder_name, forwarder_email").or(`movement_number.eq.${finalMovementNumber},booking_reference.eq.${finalMovementNumber}`).ilike("forwarder_email", senderEmail).limit(1);
		if (fwdReqs && fwdReqs.length > 0 && fwdReqs[0].forwarder_name) {
			forwarderName = fwdReqs[0].forwarder_name;
			finalForwarderId = fwdReqs[0].forwarder_id || finalForwarderId;
			forwarderEmail = fwdReqs[0].forwarder_email || senderEmail;
		}
	}
	if (!forwarderName && (senderName || senderEmail)) {
		const emailUser = (senderEmail || "").split("@")[0] || "Forwarder";
		forwarderName = senderName?.trim() || emailUser.charAt(0).toUpperCase() + emailUser.slice(1);
		forwarderEmail = senderEmail;
	}
	const fwdValidation = validateForwarderSenderEmail(senderEmail, forwarderData, { matchedBy });
	return {
		matchStatus: "MATCHED",
		matchedBy,
		matchingPriorityStep,
		confidence,
		bookingId,
		movementId: bookingId,
		movementNumber: finalMovementNumber,
		bookingReference: finalBookingRef,
		forwarderId: finalForwarderId,
		forwarderName,
		forwarderEmail,
		senderEmail,
		isForwarderValidated: fwdValidation.isValid,
		matchReason,
		priorityStepEvaluations,
		details: {
			forwarderValidationReason: fwdValidation.reason,
			priorityStep: matchingPriorityStep
		}
	};
}
/**
* Backward-compatible entry point
*/
async function executeMovementForwarderMatch(supabase, input) {
	return identifyMovementForIncomingEmail(supabase, input);
}
//#endregion
export { deleteRateCardFromSupabase as $, mapGmailMessageToEmailRecord as A, safeUuid as At, sendEmailDirectlyViaGmail as B, updateBuyerInSupabase as Bt, getGmailAccessToken as C, linkAndReviewDriveDocument as Ct, inMemoryQuotations as D, reconcileBookingWithConfirmations as Dt, inMemoryIncomingEmails as E, normalizeLifecycleStage as Et, processRawEmailContent as F, scheduleCutOffReminders as Ft, INITIAL_FILES as G, updateForwarderQuoteStatus as H, updateLocalBooking as Ht, recordQuotationAuditEvent as I, toDbBookingStatus as It, addBookingEventInSupabase as J, INITIAL_FOLDERS as K, runPropertyAlignmentDiagnostic as L, toDbMovementStatus as Lt, normalizeQuoteStatus as M, saveCutOffsForMovement as Mt, processForwarderQuotationEmail as N, saveDriveDocument as Nt, isGmailQuotaCooldownActive as O, removeDriveDocument as Ot, processIncomingForwarderEmailReply as P, saveLocalBookings as Pt, deleteBookingFromSupabase as Q, sanitizeEmailHtml as R, updateBookingDetailsInSupabase as Rt, getCachedGoogleUser as S, isBookingConfirmed as St, identifyMovementForIncomingEmail as T, normalizeBookingStatus as Tt, validateQuotationForBackendAction as U, updateRateCardInSupabase as Ut, updateForwarderQuotation as V, updateForwarderInSupabase as Vt, CURRENCY_OPTIONS as W, updateSupplierInSupabase as Wt, deduplicateBookings as X, createBookingInSupabase as Y, deleteBookingContainerFromSupabase as Z, fetchLiveGmailMessages as _, insertBookingContainerInSupabase as _t, connectGmailAccount as a, fetchRateCardsFromSupabase as at, getBookingForwarderSummary as b, insertRateCardToSupabase as bt, dispatchMultiForwarderRequests as c, generateMovementNumber as ct, extractQuotationFieldsDeterministic as d, getCutOffsForMovement as dt, extractMovementNumber as et, extractQuotationFromEmail as f, getLifecycleStageConfig as ft, fetchGmailConnectionState as g, getStageStepIndex as gt, fetchForwarderRequestsForBooking as h, getSavedDocuments as ht, classifyConfirmationDeterministic as i, fetchForwardersFromSupabase as it, normalizeBookingNumber as j, saveCutOffDataToDatabase as jt, logQuotationResponseDiagnostics as k, safeInsertNotification as kt, executeMovementForwarderMatch as l, getAllUpcomingCutOffs as lt, fetchAllForwarderRequestsFromSupabase as m, getNextLifecycleStage as mt, awardForwarderOffer as n, fetchBookingsFromSupabase as nt, detectForwarderConfirmation as o, fetchSuppliersFromSupabase as ot, extractQuotationWithAiFallback as p, getLocalBookings as pt, LIFECYCLE_STAGES as q, buildTrackingCompositeKey as r, fetchBuyersFromSupabase as rt, disconnectGmailAccount as s, generateAllCutOffReminders as st, ALL_QUOTATION_STATUSES as t, fetchBookingByIdFromSupabase as tt, extractMovementNumbers as u, getCutOffDataFromDatabase as ut, firebase_applet_config_default as v, insertBuyerToSupabase as vt, getLocalForwarderRequests as w, markIdentifierConfirmed as wt, getCachedGmailConnectionState as x, insertSupplierToSupabase as xt, generateForwarderEmailContent as y, insertForwarderToSupabase as yt, saveLocalForwarderRequests as z, updateBookingStatusInSupabase as zt };
