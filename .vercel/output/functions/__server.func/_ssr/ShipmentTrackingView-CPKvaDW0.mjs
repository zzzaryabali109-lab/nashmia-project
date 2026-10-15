import { o as __toESM } from "../_runtime.mjs";
import { n as supabase, t as isSupabaseConfigured } from "./supabase-lbao-IEt.mjs";
import { At as safeUuid, ht as getSavedDocuments } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as getTrackingProviderConfig } from "./ssr.mjs";
import { r as cn } from "./PageTransition-CIz7I5li.mjs";
import { A as Share2, B as RefreshCw, Cn as ArrowLeftRight, E as SlidersVertical, En as Anchor, G as Play, N as Send, O as Ship, R as RotateCcw, S as Star, Sn as ArrowLeft, T as Smartphone, Ut as Download, Yt as Clock, _n as Bell, cn as Check, dn as Building2, et as Minimize2, i as X, in as ChevronUp, k as ShieldCheck, lt as Mail, n as ZoomIn, nn as CircleAlert, on as ChevronLeft, pn as Box, sn as ChevronDown, st as Maximize2, t as ZoomOut, w as Sparkles, yt as Layers } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { N as useAuth, P as showPillToast, c as DialogDescription, d as DialogTitle, o as Dialog, s as DialogContent } from "./router-BJg2H47m.mjs";
import { t as require_leaflet_src } from "../_libs/leaflet.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ShipmentTrackingView-CPKvaDW0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var import_leaflet_src = /* @__PURE__ */ __toESM(require_leaflet_src());
var STORAGE_SUB_PREFIX = "nashmia_tracking_sub_";
/**
* Retrieves the user's subscription preferences for a given shipment
*/
function getShipmentSubscription(movementRef, fallbackEmail) {
	const cleanRef = movementRef.trim().toUpperCase();
	const defaultPrefs = {
		movementId: cleanRef,
		emailEnabled: true,
		emailAddress: fallbackEmail || "operations@nashmia.com",
		inAppToastEnabled: true,
		subscribedEvents: {
			departureDelay: true,
			transshipmentUpdate: true,
			portArrivalEta: true,
			customsGateInOut: true,
			aisLivePing: false
		},
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	if (typeof window === "undefined") return defaultPrefs;
	try {
		const raw = localStorage.getItem(`${STORAGE_SUB_PREFIX}${cleanRef}`);
		if (raw) {
			const parsed = JSON.parse(raw);
			return {
				...defaultPrefs,
				...parsed,
				subscribedEvents: {
					...defaultPrefs.subscribedEvents,
					...parsed.subscribedEvents || {}
				}
			};
		}
	} catch (e) {
		console.warn("[getShipmentSubscription] Local read error:", e);
	}
	return defaultPrefs;
}
/**
* Persists the user's subscription preferences to localStorage and Supabase
*/
async function saveShipmentSubscription(prefs) {
	const cleanRef = prefs.movementId.trim().toUpperCase();
	const updatedPrefs = {
		...prefs,
		movementId: cleanRef,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	if (typeof window !== "undefined") try {
		localStorage.setItem(`${STORAGE_SUB_PREFIX}${cleanRef}`, JSON.stringify(updatedPrefs));
	} catch (e) {
		console.warn("[saveShipmentSubscription] Local storage error:", e);
	}
	if (isSupabaseConfigured) try {
		const { data: sessionData } = await supabase.auth.getSession();
		const currentUserId = sessionData?.session?.user?.id;
		await supabase.from("notifications").insert({
			user_id: safeUuid(currentUserId) || null,
			type: "tracking_event",
			title: `Subscribed to Alerts: ${cleanRef}`,
			message: `Alert channels configured: ${[prefs.inAppToastEnabled ? "In-App Toast" : "", prefs.emailEnabled ? `Email (${prefs.emailAddress})` : ""].filter(Boolean).join(" & ")}. Status tracking is active.`,
			link: `/tracking?ref=${encodeURIComponent(cleanRef)}`,
			is_read: true
		});
	} catch (dbErr) {
		console.warn("[saveShipmentSubscription] Supabase record notice:", dbErr);
	}
	return {
		success: true,
		message: `Preferences saved for shipment ${cleanRef}.`
	};
}
/**
* Formats a Date object or ISO string into standardized nautical UTC timestamp
*/
function formatUtcTimestamp(dateInput) {
	const d = dateInput ? new Date(dateInput) : /* @__PURE__ */ new Date();
	if (isNaN(d.getTime())) return "24 Sep 2026 - 12:00 UTC";
	return `${d.getUTCDate().toString().padStart(2, "0")} ${[
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	][d.getUTCMonth()]} ${d.getUTCFullYear()} - ${d.getUTCHours().toString().padStart(2, "0")}:${d.getUTCMinutes().toString().padStart(2, "0")} UTC`;
}
/**
* Fetches real alerts and notifications from Supabase for this movement
*/
async function fetchShipmentAlertsFromSupabase(movementRef, booking) {
	const alerts = [];
	const cleanRef = movementRef.trim().toUpperCase();
	if (isSupabaseConfigured) {
		try {
			const validBookingUuid = safeUuid(booking?.id);
			let query = supabase.from("notifications").select("*").order("created_at", { ascending: false });
			if (validBookingUuid) query = query.or(`booking_id.eq.${validBookingUuid},message.ilike.%${cleanRef}%,title.ilike.%${cleanRef}%`);
			else query = query.or(`message.ilike.%${cleanRef}%,title.ilike.%${cleanRef}%`);
			const { data: notifs, error } = await query.limit(20);
			if (!error && Array.isArray(notifs)) notifs.forEach((n) => {
				const title = n.title || "Shipment Update";
				const desc = n.message || "";
				const created = n.created_at;
				let type = "info";
				let badge = "Live Update";
				let badgeType = "slate";
				const text = `${title} ${desc}`.toLowerCase();
				if (text.includes("delay") || text.includes("postpone") || text.includes("wind") || text.includes("+")) {
					type = "delay";
					badge = "+18h Departure";
					badgeType = "orange";
				} else if (text.includes("early") || text.includes("expedited") || text.includes("ahead") || text.includes("-")) {
					type = "early";
					badge = "-1d Early Arrival";
					badgeType = "green";
				} else if (text.includes("cleared") || text.includes("customs") || text.includes("vgm") || text.includes("approved")) {
					type = "success";
					badge = "Customs Cleared";
					badgeType = "blue";
				} else if (text.includes("ais") || text.includes("satellite") || text.includes("position") || text.includes("knots")) {
					type = "info";
					badge = "Live AIS Ping";
					badgeType = "slate";
				}
				alerts.push({
					id: `sb-notif-${n.id}`,
					type,
					title,
					description: desc,
					timestamp: formatUtcTimestamp(created),
					rawDate: created,
					badge,
					badgeType,
					source: "supabase_notifications"
				});
			});
		} catch (err) {
			console.warn("[fetchShipmentAlertsFromSupabase] Notifications query notice:", err);
		}
		if (booking?.id && safeUuid(booking.id)) try {
			const { data: dbEvents, error: evErr } = await supabase.from("booking_events").select("*").eq("booking_id", safeUuid(booking.id)).order("occurred_at", { ascending: false });
			if (!evErr && Array.isArray(dbEvents)) dbEvents.forEach((ev) => {
				alerts.push({
					id: `sb-event-${ev.id}`,
					type: ev.event_type === "delay" ? "delay" : "info",
					title: ev.title || "Milestone Logged",
					description: ev.description || "",
					timestamp: formatUtcTimestamp(ev.occurred_at || ev.event_date || ev.created_at),
					rawDate: ev.occurred_at || ev.created_at,
					badge: ev.event_type?.toUpperCase() || "EVENT",
					badgeType: ev.event_type === "delay" ? "orange" : "blue",
					location: ev.location,
					source: "booking_events"
				});
			});
		} catch (evErr) {
			console.warn("[fetchShipmentAlertsFromSupabase] Events query notice:", evErr);
		}
	}
	return alerts;
}
/**
* Triggers a simulated status alert to test the subscriber's In-App Toast and Email channel
*/
async function triggerTestShipmentAlert({ movementRef, alertType, prefs, booking, customTitle, customDesc }) {
	const cleanRef = movementRef.trim().toUpperCase();
	let title = customTitle || "Shipment Telemetry Updated";
	let description = customDesc || `New milestone registered for movement #${cleanRef}`;
	let badge = "Live Alert";
	let badgeType = "blue";
	let type = "info";
	if (alertType === "delay") {
		type = "delay";
		title = customTitle || `Vessel Departure Adjusted (+18h) • ${cleanRef}`;
		description = customDesc || `Vessel ${booking?.vessel_name || "MSC MARTINA MARIA"} departed London Gateway with an 18-hour weather delay. Adjusted ETA updated to ${booking?.eta || "31 Oct 2026"}.`;
		badge = "+18h Departure";
		badgeType = "orange";
	} else if (alertType === "transshipment") {
		type = "early";
		title = customTitle || `Transshipment Connection Confirmed • ${cleanRef}`;
		description = customDesc || `Intermediate hub connection at Colombo confirmed. Feeder vessel loading slot is secured with priority berth allocation.`;
		badge = "Hub Confirmed";
		badgeType = "green";
	} else if (alertType === "customs") {
		type = "success";
		title = customTitle || `VGM & Customs Gate-In Approved • ${cleanRef}`;
		description = customDesc || `Verified Gross Mass documentation validated. Container ${booking?.containers?.[0]?.container_number || "MSMU7506677"} cleared customs inspection.`;
		badge = "Customs Cleared";
		badgeType = "blue";
	} else if (alertType === "ais") {
		type = "info";
		title = customTitle || `Satellite AIS Vessel Ping Received • ${cleanRef}`;
		description = customDesc || `Live coordinates received: 18.4 kts, Course 198°. Vessel on schedule passing Gibraltar corridor.`;
		badge = "AIS Ping Active";
		badgeType = "slate";
	} else if (alertType === "eta") {
		type = "early";
		title = customTitle || `ETA Revision (-1d Early) • ${cleanRef}`;
		description = customDesc || `Favorable oceanic currents reduced transit time. Expected berthing at ${booking?.pod_name || "Karachi"} moved forward to 30 Oct 2026.`;
		badge = "-1d Early Arrival";
		badgeType = "green";
	}
	const newAlert = {
		id: `live-alert-${Date.now()}`,
		type,
		title,
		description,
		timestamp: formatUtcTimestamp(/* @__PURE__ */ new Date()),
		rawDate: (/* @__PURE__ */ new Date()).toISOString(),
		badge,
		badgeType,
		location: booking?.pol_name || "London Gateway",
		source: "supabase_notifications"
	};
	if (prefs.inAppToastEnabled) showPillToast({
		title,
		description,
		type: type === "delay" ? "reminder" : type === "success" ? "success" : "info",
		duration: 6e3,
		bookingReference: cleanRef
	});
	if (prefs.emailEnabled && prefs.emailAddress) toast.success(`Email alert dispatched to ${prefs.emailAddress}`, {
		description: `Subject: [Nashmia Logistics Alert] ${title}`,
		duration: 4500
	});
	if (isSupabaseConfigured) try {
		const { data: sessionData } = await supabase.auth.getSession();
		const currentUserId = sessionData?.session?.user?.id;
		await supabase.from("notifications").insert({
			user_id: safeUuid(currentUserId) || null,
			booking_id: safeUuid(booking?.id) || null,
			type: "tracking_event",
			title,
			message: description,
			link: `/tracking?ref=${encodeURIComponent(cleanRef)}`,
			is_read: false
		});
	} catch (err) {
		console.warn("[triggerTestShipmentAlert] Supabase notification insert notice:", err);
	}
	return newAlert;
}
var PORT_COORDINATES_CATALOG = {
	kettering: {
		name: "Kettering",
		country: "United Kingdom",
		code: "GB",
		coords: [52.399, -.728]
	},
	"london gateway": {
		name: "London Gateway",
		country: "United Kingdom",
		code: "GB",
		coords: [51.505, .468],
		isSeaPort: true
	},
	london: {
		name: "London",
		country: "United Kingdom",
		code: "GB",
		coords: [51.507, -.127]
	},
	felixstowe: {
		name: "Felixstowe",
		country: "United Kingdom",
		code: "GB",
		coords: [51.954, 1.306],
		isSeaPort: true
	},
	southampton: {
		name: "Southampton",
		country: "United Kingdom",
		code: "GB",
		coords: [50.899, -1.404],
		isSeaPort: true
	},
	liverpool: {
		name: "Liverpool",
		country: "United Kingdom",
		code: "GB",
		coords: [53.447, -3.023],
		isSeaPort: true
	},
	rotterdam: {
		name: "Rotterdam",
		country: "Netherlands",
		code: "NL",
		coords: [51.924, 4.477],
		isSeaPort: true
	},
	antwerp: {
		name: "Antwerp",
		country: "Belgium",
		code: "BE",
		coords: [51.219, 4.402],
		isSeaPort: true
	},
	hamburg: {
		name: "Hamburg",
		country: "Germany",
		code: "DE",
		coords: [53.551, 9.993],
		isSeaPort: true
	},
	bremen: {
		name: "Bremen",
		country: "Germany",
		code: "DE",
		coords: [53.079, 8.801],
		isSeaPort: true
	},
	valencia: {
		name: "Valencia",
		country: "Spain",
		code: "ES",
		coords: [39.469, -.376],
		isSeaPort: true
	},
	algeciras: {
		name: "Algeciras",
		country: "Spain",
		code: "ES",
		coords: [36.14, -5.453],
		isSeaPort: true
	},
	barcelona: {
		name: "Barcelona",
		country: "Spain",
		code: "ES",
		coords: [41.385, 2.173],
		isSeaPort: true
	},
	genoa: {
		name: "Genoa",
		country: "Italy",
		code: "IT",
		coords: [44.405, 8.946],
		isSeaPort: true
	},
	"port said": {
		name: "Port Said",
		country: "Egypt",
		code: "EG",
		coords: [31.265, 32.301],
		isSeaPort: true
	},
	suez: {
		name: "Suez Canal",
		country: "Egypt",
		code: "EG",
		coords: [29.967, 32.55],
		isSeaPort: true
	},
	jeddah: {
		name: "Jeddah",
		country: "Saudi Arabia",
		code: "SA",
		coords: [21.486, 39.173],
		isSeaPort: true
	},
	salalah: {
		name: "Salalah",
		country: "Oman",
		code: "OM",
		coords: [16.94, 54.004],
		isSeaPort: true
	},
	"jebel ali": {
		name: "Jebel Ali",
		country: "United Arab Emirates",
		code: "AE",
		coords: [25.011, 55.061],
		isSeaPort: true
	},
	dubai: {
		name: "Dubai",
		country: "United Arab Emirates",
		code: "AE",
		coords: [25.204, 55.27]
	},
	karachi: {
		name: "Karachi",
		country: "Pakistan",
		code: "PK",
		coords: [24.842, 66.974],
		isSeaPort: true
	},
	"karachi port": {
		name: "Karachi Port",
		country: "Pakistan",
		code: "PK",
		coords: [24.842, 66.974],
		isSeaPort: true
	},
	"port qasim": {
		name: "Port Qasim",
		country: "Pakistan",
		code: "PK",
		coords: [24.77, 67.339],
		isSeaPort: true
	},
	lahore: {
		name: "Lahore",
		country: "Pakistan",
		code: "PK",
		coords: [31.52, 74.358]
	},
	colombo: {
		name: "Colombo",
		country: "Sri Lanka",
		code: "LK",
		coords: [6.949, 79.843],
		isSeaPort: true
	},
	"nhava sheva": {
		name: "Nhava Sheva (JNPT)",
		country: "India",
		code: "IN",
		coords: [18.948, 72.951],
		isSeaPort: true
	},
	mumbai: {
		name: "Mumbai",
		country: "India",
		code: "IN",
		coords: [18.948, 72.951],
		isSeaPort: true
	},
	mundra: {
		name: "Mundra",
		country: "India",
		code: "IN",
		coords: [22.839, 69.704],
		isSeaPort: true
	},
	chittagong: {
		name: "Chittagong",
		country: "Bangladesh",
		code: "BD",
		coords: [22.33, 91.8],
		isSeaPort: true
	},
	singapore: {
		name: "Singapore",
		country: "Singapore",
		code: "SG",
		coords: [1.264, 103.84],
		isSeaPort: true
	},
	"port klang": {
		name: "Port Klang",
		country: "Malaysia",
		code: "MY",
		coords: [3, 101.4],
		isSeaPort: true
	},
	shanghai: {
		name: "Shanghai",
		country: "China",
		code: "CN",
		coords: [31.23, 121.473],
		isSeaPort: true
	},
	ningbo: {
		name: "Ningbo",
		country: "China",
		code: "CN",
		coords: [29.868, 121.544],
		isSeaPort: true
	},
	shenzhen: {
		name: "Shenzhen",
		country: "China",
		code: "CN",
		coords: [22.543, 114.057],
		isSeaPort: true
	},
	"hong kong": {
		name: "Hong Kong",
		country: "Hong Kong",
		code: "HK",
		coords: [22.319, 114.169],
		isSeaPort: true
	},
	qingdao: {
		name: "Qingdao",
		country: "China",
		code: "CN",
		coords: [36.067, 120.383],
		isSeaPort: true
	},
	busan: {
		name: "Busan",
		country: "South Korea",
		code: "KR",
		coords: [35.102, 129.04],
		isSeaPort: true
	},
	tokyo: {
		name: "Tokyo",
		country: "Japan",
		code: "JP",
		coords: [35.676, 139.65],
		isSeaPort: true
	},
	"new york": {
		name: "New York",
		country: "United States",
		code: "US",
		coords: [40.712, -74.006],
		isSeaPort: true
	},
	"los angeles": {
		name: "Los Angeles",
		country: "United States",
		code: "US",
		coords: [33.743, -118.267],
		isSeaPort: true
	},
	houston: {
		name: "Houston",
		country: "United States",
		code: "US",
		coords: [29.76, -95.369],
		isSeaPort: true
	},
	savannah: {
		name: "Savannah",
		country: "United States",
		code: "US",
		coords: [32.08, -81.091],
		isSeaPort: true
	},
	mersin: {
		name: "Mersin",
		country: "Turkey",
		code: "TR",
		coords: [36.812, 34.641],
		isSeaPort: true
	},
	istanbul: {
		name: "Istanbul",
		country: "Turkey",
		code: "TR",
		coords: [41.008, 28.978],
		isSeaPort: true
	}
};
/**
* Finds the closest matching port coordinates from a location string
*/
function resolveLocationCoords(loc) {
	if (!loc) return [51.505, .468];
	const clean = loc.toLowerCase().trim();
	for (const [key, item] of Object.entries(PORT_COORDINATES_CATALOG)) if (clean.includes(key) || key.includes(clean)) return item.coords;
	if (clean.includes("karachi") || clean.includes("qasim") || clean.includes("pakistan")) return PORT_COORDINATES_CATALOG.karachi.coords;
	if (clean.includes("london") || clean.includes("kettering") || clean.includes("uk") || clean.includes("united kingdom")) return clean.includes("kettering") ? PORT_COORDINATES_CATALOG.kettering.coords : PORT_COORDINATES_CATALOG["london gateway"].coords;
	if (clean.includes("colombo") || clean.includes("sri lanka")) return PORT_COORDINATES_CATALOG.colombo.coords;
	if (clean.includes("dubai") || clean.includes("jebel") || clean.includes("uae")) return PORT_COORDINATES_CATALOG["jebel ali"].coords;
	if (clean.includes("china") || clean.includes("shanghai") || clean.includes("ningbo")) return PORT_COORDINATES_CATALOG.ningbo.coords;
	if (clean.includes("rotterdam") || clean.includes("netherlands")) return PORT_COORDINATES_CATALOG.rotterdam.coords;
	return [24.842, 66.974];
}
/**
* Generates high-fidelity maritime nautical route waypoints between origin and destination
* routing through standard international maritime channels (English Channel, Gibraltar, Suez, Bab-el-Mandeb, Arabian Sea)
*/
function generateMaritimeRoutePath(originCoords, destCoords, transshipmentCoords) {
	const [oLat, oLng] = originCoords;
	const [dLat, dLng] = destCoords;
	const path = [originCoords];
	const isEuropeOrigin = oLat > 35 && oLng < 20;
	const isSouthAsiaDest = dLat > 5 && dLat < 35 && dLng > 50 && dLng < 95;
	if (isEuropeOrigin && isSouthAsiaDest) {
		path.push([50.2, -.8]);
		path.push([48.8, -4.5]);
		path.push([44.5, -9.5]);
		path.push([39, -10.5]);
		path.push([36, -5.8]);
		path.push([36.1, -4]);
		path.push([37.2, 5]);
		path.push([37.5, 11.5]);
		path.push([35.2, 19]);
		path.push([33.5, 27.5]);
		path.push([31.3, 32.3]);
		path.push([29.9, 32.6]);
		path.push([27, 34.5]);
		path.push([22, 38]);
		path.push([17, 41.5]);
		path.push([12.6, 43.4]);
		path.push([12.5, 48]);
		path.push([13, 52.5]);
		if (transshipmentCoords) {
			path.push([15, 62]);
			path.push(transshipmentCoords);
			path.push([18.5, 73]);
		} else {
			path.push([17.5, 60.5]);
			path.push([21, 64]);
		}
		path.push(destCoords);
		return path;
	}
	if (oLat > 15 && oLng > 100 && isSouthAsiaDest) {
		path.push([20, 115]);
		path.push([12, 110]);
		path.push([4, 105]);
		path.push([1.3, 104]);
		path.push([3.5, 99.5]);
		path.push([6, 95]);
		path.push([7, 85]);
		if (transshipmentCoords) path.push(transshipmentCoords);
		path.push([14, 75]);
		path.push([20, 70]);
		path.push(destCoords);
		return path;
	}
	const steps = 12;
	for (let i = 1; i < steps; i++) {
		const t = i / steps;
		const lat = oLat + (dLat - oLat) * t + Math.sin(t * Math.PI) * (oLng < dLng ? -4.5 : 4.5);
		const lng = oLng + (dLng - oLng) * t;
		path.push([lat, lng]);
	}
	path.push(destCoords);
	return path;
}
/**
* Calculates current vessel simulated position along the route based on progress or default (~65%)
*/
function calculateVesselPositionOnRoute(routePoints, progressRatio = .68) {
	if (routePoints.length === 0) return {
		position: [20, 63],
		headingDeg: 45
	};
	if (routePoints.length === 1) return {
		position: routePoints[0],
		headingDeg: 0
	};
	const targetIdx = Math.floor(routePoints.length * progressRatio);
	const clampedIdx = Math.max(0, Math.min(targetIdx, routePoints.length - 2));
	const p1 = routePoints[clampedIdx];
	const p2 = routePoints[clampedIdx + 1];
	const dLat = p2[0] - p1[0];
	const dLng = p2[1] - p1[1];
	const headingDeg = (Math.atan2(dLng, dLat) * (180 / Math.PI) + 360) % 360;
	return {
		position: [p1[0] + dLat * .4, p1[1] + dLng * .4],
		headingDeg: Math.round(headingDeg)
	};
}
var _jsxFileName$2 = "/app/applet/src/components/nashmia/tracking/TrackingMapSection.tsx";
function TrackingMapSection({ originName = "", originCountryCode = "", polName = "", polCountryCode = "", transshipmentName = "", transCountryCode = "", destinationName = "", destCountryCode = "", vesselName = "", vesselStatus = "", etaFormatted = "", className }) {
	const containerRef = (0, import_react.useRef)(null);
	const mapInstanceRef = (0, import_react.useRef)(null);
	const tileLayerRef = (0, import_react.useRef)(null);
	const [mapType, setMapType] = (0, import_react.useState)("positron");
	const [isFullscreen, setIsFullscreen] = (0, import_react.useState)(false);
	const [isMapReady, setIsMapReady] = (0, import_react.useState)(false);
	const originCoords = (0, import_react.useMemo)(() => resolveLocationCoords(originName || polName), [originName, polName]);
	const polCoords = (0, import_react.useMemo)(() => resolveLocationCoords(polName || originName), [polName, originName]);
	const destCoords = (0, import_react.useMemo)(() => resolveLocationCoords(destinationName), [destinationName]);
	const transshipmentCoords = (0, import_react.useMemo)(() => transshipmentName ? resolveLocationCoords(transshipmentName) : null, [transshipmentName]);
	const routeWaypoints = (0, import_react.useMemo)(() => {
		return generateMaritimeRoutePath(polCoords, destCoords, transshipmentCoords);
	}, [
		polCoords,
		destCoords,
		transshipmentCoords
	]);
	const vesselTelemetry = (0, import_react.useMemo)(() => {
		return calculateVesselPositionOnRoute(routeWaypoints, .68);
	}, [routeWaypoints]);
	(0, import_react.useEffect)(() => {
		if (!containerRef.current || typeof window === "undefined") return;
		if (mapInstanceRef.current) {
			mapInstanceRef.current.remove();
			mapInstanceRef.current = null;
		}
		const map = import_leaflet_src.default.map(containerRef.current, {
			zoomControl: false,
			attributionControl: false,
			scrollWheelZoom: false,
			touchZoom: true,
			dragging: true,
			maxBounds: [[-85, -180], [85, 180]],
			minZoom: 2,
			maxZoom: 16
		});
		mapInstanceRef.current = map;
		const tileUrl = mapType === "positron" ? "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
		const tileLayer = import_leaflet_src.default.tileLayer(tileUrl, {
			subdomains: "abcd",
			maxZoom: 19
		}).addTo(map);
		tileLayerRef.current = tileLayer;
		import_leaflet_src.default.polyline(routeWaypoints, {
			color: "#0D74FF",
			weight: 6,
			opacity: .28,
			lineCap: "round",
			lineJoin: "round"
		}).addTo(map);
		const activeRoute = import_leaflet_src.default.polyline(routeWaypoints, {
			color: "#009EE2",
			weight: 3.5,
			opacity: .95,
			dashArray: "6, 7",
			lineCap: "round",
			lineJoin: "round"
		}).addTo(map);
		const polIcon = import_leaflet_src.default.divIcon({
			className: "custom-leaflet-marker",
			html: `
        <div class="relative flex items-center justify-center group cursor-pointer">
          <div class="size-7 rounded-full bg-white shadow-md border-2 border-[#009EE2] flex items-center justify-center transition-transform hover:scale-110">
            <svg class="size-4 text-[#009EE2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="5" r="3"/>
              <line x1="12" y1="22" x2="12" y2="8"/>
              <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
            </svg>
          </div>
          <div class="absolute -top-7 whitespace-nowrap bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs pointer-events-none">
            ${polName} (${polCountryCode})
          </div>
        </div>
      `,
			iconSize: [28, 28],
			iconAnchor: [14, 14]
		});
		import_leaflet_src.default.marker(polCoords, { icon: polIcon }).addTo(map).bindPopup(`
      <div style="font-family: sans-serif; font-size: 12px; line-height: 1.4; color: #1e293b; padding: 2px;">
        <b style="font-size: 13px; color: #0f172a;">${polName} (POL)</b><br/>
        <span style="color: #64748b;">Country: ${polCountryCode}</span><br/>
        <span style="color: #0284c7; font-weight: 600;">Status: Departed</span>
      </div>
    `);
		if (transshipmentCoords) {
			const transIcon = import_leaflet_src.default.divIcon({
				className: "custom-leaflet-marker",
				html: `
          <div class="relative flex items-center justify-center cursor-pointer">
            <div class="size-6 rotate-45 rounded-[5px] bg-[#009EE2] text-white shadow-sm flex items-center justify-center border-2 border-white">
              <div class="size-1.5 rounded-full bg-white"></div>
            </div>
            <div class="absolute -top-6 whitespace-nowrap bg-slate-800 text-white text-[9.5px] font-semibold px-1.5 py-0.5 rounded shadow-xs pointer-events-none">
              ${transshipmentName} (${transCountryCode})
            </div>
          </div>
        `,
				iconSize: [24, 24],
				iconAnchor: [12, 12]
			});
			import_leaflet_src.default.marker(transshipmentCoords, { icon: transIcon }).addTo(map).bindPopup(`
        <div style="font-family: sans-serif; font-size: 12px; line-height: 1.4; color: #1e293b; padding: 2px;">
          <b style="font-size: 13px; color: #0f172a;">${transshipmentName}</b><br/>
          <span style="color: #64748b;">Transshipment Port (${transCountryCode})</span><br/>
          <span style="color: #0284c7; font-weight: 600;">Vessel connection scheduled</span>
        </div>
      `);
		}
		const destIcon = import_leaflet_src.default.divIcon({
			className: "custom-leaflet-marker",
			html: `
        <div class="relative flex items-center justify-center cursor-pointer group">
          <div class="size-8 rounded-full bg-[#EF4444] text-white shadow-md border-2 border-white flex items-center justify-center transition-transform hover:scale-110">
            <svg class="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div class="absolute -top-7 whitespace-nowrap bg-[#DC2626] text-white text-[10.5px] font-bold px-2 py-0.5 rounded shadow-xs pointer-events-none">
            ${destinationName} (${destCountryCode})
          </div>
        </div>
      `,
			iconSize: [32, 32],
			iconAnchor: [16, 16]
		});
		import_leaflet_src.default.marker(destCoords, { icon: destIcon }).addTo(map).bindPopup(`
      <div style="font-family: sans-serif; font-size: 12px; line-height: 1.4; color: #1e293b; padding: 2px;">
        <b style="font-size: 13px; color: #dc2626;">${destinationName} (POD)</b><br/>
        <span style="color: #64748b;">Destination Port (${destCountryCode})</span><br/>
        <span style="color: #059669; font-weight: 600;">ETA: ${etaFormatted}</span>
      </div>
    `);
		const vesselIcon = import_leaflet_src.default.divIcon({
			className: "custom-leaflet-vessel-marker",
			html: `
        <div class="relative flex items-center justify-center cursor-pointer group">
          <!-- Radar Pulse Animation -->
          <div class="absolute -inset-2.5 rounded-full bg-[#009EE2]/25 animate-ping"></div>
          <div class="absolute -inset-1 rounded-full bg-[#009EE2]/40"></div>
          <!-- Vessel Center Disc -->
          <div class="relative size-8 rounded-full bg-[#0D74FF] text-white shadow-lg border-2 border-white flex items-center justify-center transition-transform hover:scale-115">
            <svg class="size-4.5" style="transform: rotate(${vesselTelemetry.headingDeg}deg);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 19 21 12 17 5 21 12 2" />
            </svg>
          </div>
        </div>
      `,
			iconSize: [32, 32],
			iconAnchor: [16, 16]
		});
		import_leaflet_src.default.marker(vesselTelemetry.position, { icon: vesselIcon }).addTo(map).bindPopup(`
      <div style="font-family: sans-serif; font-size: 12px; line-height: 1.45; color: #1e293b; min-width: 170px;">
        <div style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 2px;">${vesselName}</div>
        <div style="display: inline-block; background: #e0f2fe; color: #0284c7; font-size: 10px; font-weight: 700; padding: 2px 6px; rounded: 4px; margin-bottom: 6px;">
          ${vesselStatus}
        </div>
        <div style="color: #475569; font-size: 11px;">Speed: <b>16.8 kts</b> | Course: <b>${vesselTelemetry.headingDeg}°</b></div>
        <div style="color: #64748b; font-size: 10.5px; margin-top: 2px;">
          Lat: ${vesselTelemetry.position[0].toFixed(2)}°N, Lng: ${vesselTelemetry.position[1].toFixed(2)}°E
        </div>
      </div>
    `);
		const bounds = activeRoute.getBounds();
		map.fitBounds(bounds, {
			padding: [45, 45],
			maxZoom: 6
		});
		setIsMapReady(true);
		const resizeObserver = new ResizeObserver(() => {
			map.invalidateSize();
		});
		resizeObserver.observe(containerRef.current);
		return () => {
			resizeObserver.disconnect();
			map.remove();
			mapInstanceRef.current = null;
		};
	}, [
		originCoords,
		polCoords,
		destCoords,
		transshipmentCoords,
		routeWaypoints,
		vesselTelemetry,
		polName,
		polCountryCode,
		destinationName,
		destCountryCode,
		transshipmentName,
		transCountryCode,
		vesselName,
		vesselStatus,
		etaFormatted,
		mapType
	]);
	const handleZoomIn = (0, import_react.useCallback)(() => {
		mapInstanceRef.current?.zoomIn();
	}, []);
	const handleZoomOut = (0, import_react.useCallback)(() => {
		mapInstanceRef.current?.zoomOut();
	}, []);
	const handleReset = (0, import_react.useCallback)(() => {
		if (!mapInstanceRef.current || routeWaypoints.length === 0) return;
		const poly = import_leaflet_src.default.polyline(routeWaypoints);
		mapInstanceRef.current.fitBounds(poly.getBounds(), {
			padding: [45, 45],
			maxZoom: 6
		});
	}, [routeWaypoints]);
	const handleToggleMapType = (0, import_react.useCallback)(() => {
		setMapType((prev) => prev === "positron" ? "osm" : "positron");
	}, []);
	const handleToggleFullscreen = (0, import_react.useCallback)(() => {
		setIsFullscreen((prev) => !prev);
		setTimeout(() => {
			mapInstanceRef.current?.invalidateSize();
		}, 150);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("relative w-full overflow-hidden transition-all duration-300 bg-[#E8F1F8] border-b border-slate-200 select-none", isFullscreen ? "fixed inset-0 z-50 h-screen w-screen rounded-none" : "h-[320px] sm:h-[370px] md:h-[410px] rounded-t-[20px]", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				ref: containerRef,
				className: "w-full h-full z-0 outline-none focus:outline-none",
				style: { background: "#E8F1F8" }
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 346,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute top-4 right-4 z-20 flex flex-col gap-1.5 bg-white/95 backdrop-blur-xs p-1 rounded-xl shadow-md border border-slate-200/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleZoomIn,
						className: "size-7.5 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer",
						title: "Zoom in",
						"aria-label": "Zoom in",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ZoomIn, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 361,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 354,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleZoomOut,
						className: "size-7.5 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer",
						title: "Zoom out",
						"aria-label": "Zoom out",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ZoomOut, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 370,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 363,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleReset,
						className: "size-7.5 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer border-t border-slate-100",
						title: "Reset voyage corridor view",
						"aria-label": "Reset route view",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 379,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 372,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleToggleMapType,
						className: "size-7.5 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer border-t border-slate-100",
						title: `Switch map layer (currently ${mapType === "positron" ? "CartoDB Positron" : "OpenStreetMap"})`,
						"aria-label": "Toggle map layer",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layers, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 388,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 381,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: handleToggleFullscreen,
						className: "size-7.5 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer border-t border-slate-100",
						title: isFullscreen ? "Exit fullscreen" : "Fullscreen map",
						"aria-label": "Fullscreen",
						children: isFullscreen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minimize2, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 397,
							columnNumber: 27
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize2, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 397,
							columnNumber: 64
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 390,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 353,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute bottom-3 left-4 z-20 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-xs py-1.5 px-3 rounded-full border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-700",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-emerald-500 animate-pulse" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 404,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-3.5 text-[#009EE2]" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 405,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-900 font-bold",
								children: vesselName
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 406,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 403,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-3 w-[1px] bg-slate-200" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 408,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-slate-500 text-[11px]",
						children: [
							"Course ",
							vesselTelemetry.headingDeg,
							"° • 16.8 kts"
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 409,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-3 w-[1px] bg-slate-200" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 412,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[#009EE2] font-semibold text-[11px]",
						children: vesselStatus
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 413,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 402,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute bottom-3 right-4 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-200/80 shadow-2xs text-[11px] font-bold text-slate-600",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-slate-800",
						children: polName
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 418,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-slate-400",
						children: "→"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 419,
						columnNumber: 9
					}, this),
					transshipmentName && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("span", {
						className: "text-slate-500 font-medium",
						children: transshipmentName
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 422,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("span", {
						className: "text-slate-400",
						children: "→"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 423,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 421,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[#0D74FF]",
						children: destinationName
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 426,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 417,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 336,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/nashmia/tracking/TrackingAlertsModal.tsx";
function TrackingAlertsModal({ open, onOpenChange, movementRef = "", booking, initialTab = "alerts", onSubscribedChange }) {
	const { user } = useAuth();
	const [activeTab, setActiveTab] = (0, import_react.useState)(initialTab);
	const [alerts, setAlerts] = (0, import_react.useState)([]);
	const [isLoadingAlerts, setIsLoadingAlerts] = (0, import_react.useState)(false);
	const [filterType, setFilterType] = (0, import_react.useState)("all");
	const [prefs, setPrefs] = (0, import_react.useState)(() => getShipmentSubscription(movementRef, user?.email || void 0));
	const [isSavingPrefs, setIsSavingPrefs] = (0, import_react.useState)(false);
	const [isSendingTest, setIsSendingTest] = (0, import_react.useState)(false);
	const [selectedTestType, setSelectedTestType] = (0, import_react.useState)("delay");
	const loadAlerts = (0, import_react.useCallback)(async () => {
		setIsLoadingAlerts(true);
		try {
			const data = await fetchShipmentAlertsFromSupabase(movementRef, booking);
			setAlerts(data);
		} catch (err) {
			console.warn("[TrackingAlertsModal] Failed fetching alerts:", err);
		} finally {
			setIsLoadingAlerts(false);
		}
	}, [movementRef, booking]);
	(0, import_react.useEffect)(() => {
		if (open) {
			setActiveTab(initialTab);
			const currentPrefs = getShipmentSubscription(movementRef, user?.email || void 0);
			setPrefs(currentPrefs);
			loadAlerts();
		}
	}, [
		open,
		movementRef,
		initialTab,
		user?.email,
		loadAlerts
	]);
	const handleSavePreferences = async (e) => {
		if (e) e.preventDefault();
		setIsSavingPrefs(true);
		try {
			const res = await saveShipmentSubscription(prefs);
			toast.success(res.message, { description: `Channels: ${[prefs.inAppToastEnabled ? "In-App Toast" : null, prefs.emailEnabled ? `Email (${prefs.emailAddress})` : null].filter(Boolean).join(" + ")}` });
			if (onSubscribedChange) onSubscribedChange(prefs.inAppToastEnabled || prefs.emailEnabled);
		} catch (err) {
			toast.error("Failed to save subscription preferences");
		} finally {
			setIsSavingPrefs(false);
		}
	};
	const handleTriggerTest = async () => {
		setIsSendingTest(true);
		try {
			const newAlert = await triggerTestShipmentAlert({
				movementRef,
				alertType: selectedTestType,
				prefs,
				booking
			});
			setAlerts((prev) => [newAlert, ...prev]);
		} catch (err) {
			toast.error("Failed to trigger test alert");
		} finally {
			setIsSendingTest(false);
		}
	};
	const filteredAlerts = alerts.filter((a) => {
		if (filterType === "all") return true;
		return a.type === filterType;
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "w-full sm:max-w-[620px] max-h-[92vh] flex flex-col p-0 overflow-hidden sm:rounded-[26px] bg-white shadow-2xl focus:outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-5 sm:p-6 pb-4 border-b border-slate-100 flex items-start justify-between bg-slate-50/60",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-[#EAEFF5] px-2.5 py-0.5 text-[11px] font-bold text-slate-700",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-3 text-slate-600" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 153,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Operational Exceptions" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 154,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 152,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-semibold text-[#009EE2]",
								children: ["Movement #", movementRef]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 156,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 151,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
							className: "text-xl sm:text-2xl font-extrabold text-slate-900 mt-1.5 tracking-tight font-sans",
							children: "Shipment Alerts & Subscriptions"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 158,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
							className: "text-xs text-slate-500 font-medium",
							children: "Live operational exceptions, transit delay logs, and automated event notifications."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 161,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 150,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onOpenChange(false),
						className: "size-8 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors shadow-2xs cursor-pointer",
						"aria-label": "Close modal",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 172,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 166,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 149,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex border-b border-slate-200 px-6 bg-white",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setActiveTab("alerts"),
						className: cn("py-3 px-2 text-xs font-bold transition-all relative flex items-center gap-2 cursor-pointer", activeTab === "alerts" ? "text-[#009EE2]" : "text-slate-500 hover:text-slate-800"),
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 186,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
								"Alerts Feed (",
								alerts.length,
								")"
							] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 187,
								columnNumber: 13
							}, this),
							activeTab === "alerts" && /* @__PURE__ */ (void 0)("span", { className: "absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#009EE2] rounded-t-full" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 189,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 178,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setActiveTab("subscribe"),
						className: cn("py-3 px-2 text-xs font-bold transition-all relative flex items-center gap-2 cursor-pointer ml-4", activeTab === "subscribe" ? "text-[#009EE2]" : "text-slate-500 hover:text-slate-800"),
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 201,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Subscribe to Status Updates" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 202,
								columnNumber: 13
							}, this),
							(prefs.emailEnabled || prefs.inAppToastEnabled) && /* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-emerald-500 animate-pulse" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 204,
								columnNumber: 15
							}, this),
							activeTab === "subscribe" && /* @__PURE__ */ (void 0)("span", { className: "absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#009EE2] rounded-t-full" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 207,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 193,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 177,
					columnNumber: 9
				}, this),
				activeTab === "alerts" && /* @__PURE__ */ (void 0)("div", { children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "px-6 py-2.5 bg-slate-50/70 border-b border-slate-150 flex flex-wrap items-center justify-between gap-2 text-xs",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]",
							children: [
								/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setFilterType("all"),
									className: cn("px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer", filterType === "all" ? "bg-[#0D1F3C] text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"),
									children: [
										"All (",
										alerts.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 218,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setFilterType("delay"),
									className: cn("px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer", filterType === "delay" ? "bg-[#D84926] text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"),
									children: "Delays"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 230,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setFilterType("early"),
									className: cn("px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer", filterType === "early" ? "bg-[#137333] text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"),
									children: "Early / Expedited"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 242,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setFilterType("success"),
									className: cn("px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer", filterType === "success" ? "bg-[#009EE2] text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"),
									children: "Customs & VGM"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 254,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 217,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: loadAlerts,
							disabled: isLoadingAlerts,
							className: "inline-flex items-center gap-1 text-[11.5px] font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer",
							title: "Refresh alerts from Supabase",
							children: [/* @__PURE__ */ (void 0)(RefreshCw, { className: cn("size-3 text-slate-500", isLoadingAlerts && "animate-spin text-[#009EE2]") }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 275,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("span", { children: isLoadingAlerts ? "Syncing..." : "Sync" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 281,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 268,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 216,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "p-5 sm:p-6 max-h-[52vh] overflow-y-auto space-y-3.5 [scrollbar-width:thin]",
						children: filteredAlerts.length === 0 ? /* @__PURE__ */ (void 0)("div", {
							className: "text-center py-10",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "size-12 rounded-full bg-slate-100 text-slate-400 grid place-items-center mx-auto mb-3",
									children: /* @__PURE__ */ (void 0)(Clock, { className: "size-6" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 290,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 289,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "text-sm font-bold text-slate-700",
									children: "No alerts found in this category"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 292,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-slate-400 mt-1",
									children: "Vessel schedule and terminal milestone logs are operating normally."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 295,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 288,
							columnNumber: 17
						}, this) : filteredAlerts.map((alert) => /* @__PURE__ */ (void 0)("div", {
							className: "p-4 rounded-[18px] border border-slate-200/90 bg-white hover:border-slate-300 transition-all space-y-2.5 shadow-2xs",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "flex items-start justify-between gap-2.5",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-start gap-2.5",
										children: [
											alert.type === "delay" && /* @__PURE__ */ (void 0)("span", {
												className: "grid size-6.5 place-items-center rounded-full bg-orange-100 text-[#D84926] shrink-0 mt-0.5",
												children: /* @__PURE__ */ (void 0)(CircleAlert, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 309,
													columnNumber: 29
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 308,
												columnNumber: 27
											}, this),
											alert.type === "early" && /* @__PURE__ */ (void 0)("span", {
												className: "grid size-6.5 place-items-center rounded-full bg-emerald-100 text-[#137333] shrink-0 mt-0.5",
												children: /* @__PURE__ */ (void 0)(Clock, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 314,
													columnNumber: 29
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 313,
												columnNumber: 27
											}, this),
											alert.type === "success" && /* @__PURE__ */ (void 0)("span", {
												className: "grid size-6.5 place-items-center rounded-full bg-blue-100 text-[#009EE2] shrink-0 mt-0.5",
												children: /* @__PURE__ */ (void 0)(ShieldCheck, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 319,
													columnNumber: 29
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 318,
												columnNumber: 27
											}, this),
											alert.type === "info" && /* @__PURE__ */ (void 0)("span", {
												className: "grid size-6.5 place-items-center rounded-full bg-slate-100 text-slate-600 shrink-0 mt-0.5",
												children: /* @__PURE__ */ (void 0)(Ship, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 324,
													columnNumber: 29
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 323,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
												className: "text-[13px] font-bold text-slate-900 leading-snug",
												children: alert.title
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 328,
												columnNumber: 27
											}, this), alert.location && /* @__PURE__ */ (void 0)("span", {
												className: "text-[10.5px] font-semibold text-slate-400",
												children: ["Location: ", alert.location]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 332,
												columnNumber: 29
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 327,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 306,
										columnNumber: 23
									}, this), alert.badge && /* @__PURE__ */ (void 0)("span", {
										className: `text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0 uppercase tracking-wider ${alert.badgeType === "orange" ? "bg-[#FDECE7] text-[#D84926] border border-orange-200/60" : alert.badgeType === "green" ? "bg-[#E6F4EA] text-[#137333] border border-emerald-200/60" : alert.badgeType === "blue" ? "bg-blue-50 text-[#009EE2] border border-blue-200/60" : "bg-slate-100 text-slate-700 border border-slate-200"}`,
										children: alert.badge
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 340,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 305,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "text-[12px] text-slate-600 leading-relaxed pl-9",
									children: alert.description
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 356,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "pl-9 pt-1 flex items-center justify-between text-[11px] text-slate-400 font-medium",
									children: [/* @__PURE__ */ (void 0)("span", { children: alert.timestamp }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 361,
										columnNumber: 23
									}, this), alert.source === "supabase_notifications" && /* @__PURE__ */ (void 0)("span", {
										className: "inline-flex items-center gap-1 text-[#009EE2] text-[10.5px] font-semibold",
										children: [/* @__PURE__ */ (void 0)(Check, { className: "size-3" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 364,
											columnNumber: 27
										}, this), " Supabase Verified"]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 363,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 360,
									columnNumber: 21
								}, this)
							]
						}, alert.id, true, {
							fileName: _jsxFileName$1,
							lineNumber: 301,
							columnNumber: 19
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 286,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setActiveTab("subscribe"),
								className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#009EE2] hover:text-[#0D74FF] transition-colors cursor-pointer",
								children: [/* @__PURE__ */ (void 0)(SlidersVertical, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 381,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", { children: "Configure Alert Channels & Rules" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 382,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 376,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 375,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => onOpenChange(false),
							className: "px-5 py-2 rounded-full bg-[#0D1F3C] text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer",
							children: "Close Feed"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 386,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 374,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 214,
					columnNumber: 11
				}, this),
				activeTab === "subscribe" && /* @__PURE__ */ (void 0)("form", {
					onSubmit: handleSavePreferences,
					className: "flex flex-col",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "p-5 sm:p-6 max-h-[55vh] overflow-y-auto space-y-5 [scrollbar-width:thin]",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (void 0)("h4", {
										className: "text-xs font-bold uppercase tracking-wider text-slate-500",
										children: "1. Delivery Channels"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 403,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("label", {
										className: "flex items-start justify-between gap-3 p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer transition-colors",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "size-8 rounded-xl bg-blue-100 text-[#009EE2] flex items-center justify-center shrink-0 mt-0.5",
												children: /* @__PURE__ */ (void 0)(Smartphone, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 411,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 410,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
												className: "text-xs font-bold text-slate-900",
												children: "In-App Toast Alerts"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 414,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "text-[11.5px] text-slate-500 leading-snug",
												children: "Immediate floating banner notification when ETA shifts or vessel milestones log."
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 415,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 413,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 409,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("input", {
											type: "checkbox",
											checked: prefs.inAppToastEnabled,
											onChange: (e) => setPrefs((p) => ({
												...p,
												inAppToastEnabled: e.target.checked
											})),
											className: "size-4.5 rounded text-[#009EE2] focus:ring-[#009EE2] mt-1 cursor-pointer"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 421,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 408,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3",
										children: [/* @__PURE__ */ (void 0)("label", {
											className: "flex items-start justify-between gap-3 cursor-pointer",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "size-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5",
													children: /* @__PURE__ */ (void 0)(Mail, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 436,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 435,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
													className: "text-xs font-bold text-slate-900",
													children: "Email Notifications"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 439,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "text-[11.5px] text-slate-500 leading-snug",
													children: "Receive automated operational reports and exception digests in your inbox."
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 440,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 438,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 434,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "checkbox",
												checked: prefs.emailEnabled,
												onChange: (e) => setPrefs((p) => ({
													...p,
													emailEnabled: e.target.checked
												})),
												className: "size-4.5 rounded text-[#009EE2] focus:ring-[#009EE2] mt-1 cursor-pointer"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 445,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 433,
											columnNumber: 19
										}, this), prefs.emailEnabled && /* @__PURE__ */ (void 0)("div", {
											className: "pl-11 pt-1",
											children: [/* @__PURE__ */ (void 0)("label", {
												className: "block text-[11px] font-bold text-slate-700 mb-1",
												children: "Recipient Email Address"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 455,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "email",
												required: true,
												value: prefs.emailAddress,
												onChange: (e) => setPrefs((p) => ({
													...p,
													emailAddress: e.target.value
												})),
												placeholder: "operator@nashmia.com",
												className: "w-full text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#009EE2]"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 458,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 454,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 432,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 402,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-3 pt-2",
								children: [/* @__PURE__ */ (void 0)("h4", {
									className: "text-xs font-bold uppercase tracking-wider text-slate-500",
									children: ["2. Select Events to Track for #", movementRef]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 473,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (void 0)("label", {
											className: "flex items-center justify-between p-3 rounded-xl border border-slate-150 bg-white hover:bg-slate-50 cursor-pointer text-xs",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-orange-500" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 480,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-bold text-slate-800",
													children: "Vessel Departure & Transit Delays"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 482,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-[11px] text-slate-500",
													children: "Schedule adjustments (e.g., +18h weather, berth congestion)"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 485,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 481,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 479,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "checkbox",
												checked: prefs.subscribedEvents.departureDelay,
												onChange: (e) => setPrefs((p) => ({
													...p,
													subscribedEvents: {
														...p.subscribedEvents,
														departureDelay: e.target.checked
													}
												})),
												className: "size-4 rounded text-[#009EE2] focus:ring-[#009EE2] cursor-pointer"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 490,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 478,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("label", {
											className: "flex items-center justify-between p-3 rounded-xl border border-slate-150 bg-white hover:bg-slate-50 cursor-pointer text-xs",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-emerald-500" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 508,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-bold text-slate-800",
													children: "Transshipment & Feeder Hubs"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 510,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-[11px] text-slate-500",
													children: "Intermediate port arrival and feeder connection confirmation (Colombo)"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 513,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 509,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 507,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "checkbox",
												checked: prefs.subscribedEvents.transshipmentUpdate,
												onChange: (e) => setPrefs((p) => ({
													...p,
													subscribedEvents: {
														...p.subscribedEvents,
														transshipmentUpdate: e.target.checked
													}
												})),
												className: "size-4 rounded text-[#009EE2] focus:ring-[#009EE2] cursor-pointer"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 518,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 506,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("label", {
											className: "flex items-center justify-between p-3 rounded-xl border border-slate-150 bg-white hover:bg-slate-50 cursor-pointer text-xs",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-blue-500" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 536,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-bold text-slate-800",
													children: "Port of Discharge ETA Shifts"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 538,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-[11px] text-slate-500",
													children: "Destination ETA changes, pilot boardings, and berthing"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 541,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 537,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 535,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "checkbox",
												checked: prefs.subscribedEvents.portArrivalEta,
												onChange: (e) => setPrefs((p) => ({
													...p,
													subscribedEvents: {
														...p.subscribedEvents,
														portArrivalEta: e.target.checked
													}
												})),
												className: "size-4 rounded text-[#009EE2] focus:ring-[#009EE2] cursor-pointer"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 546,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 534,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("label", {
											className: "flex items-center justify-between p-3 rounded-xl border border-slate-150 bg-white hover:bg-slate-50 cursor-pointer text-xs",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-indigo-500" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 564,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-bold text-slate-800",
													children: "Customs & Terminal Gate-In / Out"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 566,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-[11px] text-slate-500",
													children: "VGM approval, OCR seal scans, and terminal release"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 569,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 565,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 563,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "checkbox",
												checked: prefs.subscribedEvents.customsGateInOut,
												onChange: (e) => setPrefs((p) => ({
													...p,
													subscribedEvents: {
														...p.subscribedEvents,
														customsGateInOut: e.target.checked
													}
												})),
												className: "size-4 rounded text-[#009EE2] focus:ring-[#009EE2] cursor-pointer"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 574,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 562,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("label", {
											className: "flex items-center justify-between p-3 rounded-xl border border-slate-150 bg-white hover:bg-slate-50 cursor-pointer text-xs",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-slate-400" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 592,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-bold text-slate-800",
													children: "Daily Satellite AIS Pings"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 594,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-[11px] text-slate-500",
													children: "Automated 24h nautical telemetry coordinates and speed"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 595,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 593,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 591,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "checkbox",
												checked: prefs.subscribedEvents.aisLivePing,
												onChange: (e) => setPrefs((p) => ({
													...p,
													subscribedEvents: {
														...p.subscribedEvents,
														aisLivePing: e.target.checked
													}
												})),
												className: "size-4 rounded text-[#009EE2] focus:ring-[#009EE2] cursor-pointer"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 600,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 590,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 477,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 472,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2.5",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-4 text-[#009EE2]" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 621,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs font-bold text-slate-900",
											children: "Test Delivery Pipeline"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 622,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 620,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-[11.5px] text-slate-600 leading-relaxed",
										children: "Trigger an immediate simulated update to preview how your selected In-App Toast and Email channels receive notifications:"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 624,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex flex-wrap items-center gap-2 pt-1",
										children: [/* @__PURE__ */ (void 0)("select", {
											value: selectedTestType,
											onChange: (e) => setSelectedTestType(e.target.value),
											className: "text-xs px-3 py-1.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-700 focus:outline-none",
											children: [
												/* @__PURE__ */ (void 0)("option", {
													value: "delay",
													children: "Weather Delay (+18h)"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 639,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("option", {
													value: "transshipment",
													children: "Colombo Hub Connection"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 640,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("option", {
													value: "customs",
													children: "Customs & VGM Clearance"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 641,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("option", {
													value: "eta",
													children: "Early ETA (-1d)"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 642,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 630,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: handleTriggerTest,
											disabled: isSendingTest,
											className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#009EE2] text-white text-xs font-bold hover:bg-[#0D74FF] transition-all cursor-pointer shadow-xs disabled:opacity-50",
											children: [/* @__PURE__ */ (void 0)(Send, { className: "size-3" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 651,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("span", { children: isSendingTest ? "Sending..." : "Send Test Alert" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 652,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 645,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 629,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 619,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 400,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between",
						children: [/* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => setActiveTab("alerts"),
							className: "text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer",
							children: "← Back to Alerts Feed"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 660,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => onOpenChange(false),
								className: "px-4 py-2 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer",
								children: "Cancel"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 669,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "submit",
								disabled: isSavingPrefs,
								className: "px-5 py-2 rounded-full bg-[#0D1F3C] text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm cursor-pointer disabled:opacity-50 flex items-center gap-1.5",
								children: isSavingPrefs ? /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(RefreshCw, { className: "size-3.5 animate-spin" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 683,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("span", { children: "Saving..." }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 684,
									columnNumber: 23
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 682,
									columnNumber: 21
								}, this) : /* @__PURE__ */ (void 0)("span", { children: "Save Preferences" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 687,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 676,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 668,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 659,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 399,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 147,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 146,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/components/nashmia/tracking/ShipmentTrackingView.tsx";
function getCountryFlag(countryOrCode) {
	if (!countryOrCode) return "🌐";
	const clean = countryOrCode.trim().toUpperCase();
	if (clean === "GB" || clean === "UK" || clean.includes("UNITED KINGDOM") || clean.includes("LONDON") || clean.includes("KETTERING")) return "🇬🇧";
	if (clean === "PK" || clean.includes("PAKISTAN") || clean.includes("KARACHI") || clean.includes("QASIM")) return "🇵🇰";
	if (clean === "LK" || clean.includes("SRI LANKA") || clean.includes("COLOMBO")) return "🇱🇰";
	if (clean === "US" || clean.includes("USA") || clean.includes("UNITED STATES")) return "🇺🇸";
	if (clean === "AE" || clean.includes("UAE") || clean.includes("DUBAI") || clean.includes("JEBEL")) return "🇦🇪";
	if (clean === "CN" || clean.includes("CHINA") || clean.includes("SHANGHAI") || clean.includes("NINGBO")) return "🇨🇳";
	if (clean === "DE" || clean.includes("GERMANY") || clean.includes("HAMBURG")) return "🇩🇪";
	if (clean === "NL" || clean.includes("NETHERLANDS") || clean.includes("ROTTERDAM")) return "🇳🇱";
	if (clean === "SG" || clean.includes("SINGAPORE")) return "🇸🇬";
	if (clean === "TR" || clean.includes("TURKEY") || clean.includes("ISTANBUL")) return "🇹🇷";
	return "🌐";
}
function extractCountryCode(text) {
	if (!text) return "GB";
	const t = text.toUpperCase();
	if (t.includes("GB") || t.includes("UK") || t.includes("UNITED KINGDOM") || t.includes("LONDON") || t.includes("FELIXSTOWE") || t.includes("SOUTHAMPTON") || t.includes("KETTERING")) return "GB";
	if (t.includes("PK") || t.includes("PAKISTAN") || t.includes("KARACHI") || t.includes("QASIM")) return "PK";
	if (t.includes("LK") || t.includes("SRI LANKA") || t.includes("COLOMBO")) return "LK";
	if (t.includes("US") || t.includes("USA") || t.includes("UNITED STATES")) return "US";
	if (t.includes("AE") || t.includes("UAE") || t.includes("DUBAI") || t.includes("JEBEL")) return "AE";
	if (t.includes("CN") || t.includes("CHINA") || t.includes("SHANGHAI") || t.includes("NINGBO") || t.includes("SHENZHEN")) return "CN";
	if (t.includes("DE") || t.includes("GERMANY") || t.includes("HAMBURG") || t.includes("BREMEN")) return "DE";
	if (t.includes("NL") || t.includes("NETHERLANDS") || t.includes("ROTTERDAM")) return "NL";
	if (t.includes("SG") || t.includes("SINGAPORE")) return "SG";
	if (t.includes("TR") || t.includes("TURKEY") || t.includes("ISTANBUL") || t.includes("MERSIN")) return "TR";
	if (t.includes("BE") || t.includes("BELGIUM") || t.includes("ANTWERP")) return "BE";
	return "GB";
}
function ShipmentTrackingView({ booking, movementId, selectedContainerNumber, onBack, onClose, isStandalonePage = false }) {
	const [activeTab, setActiveTab] = (0, import_react.useState)("info");
	const [isFavorited, setIsFavorited] = (0, import_react.useState)(false);
	const [isSubscribed, setIsSubscribed] = (0, import_react.useState)(false);
	const [showAlertsModal, setShowAlertsModal] = (0, import_react.useState)(false);
	const [alertsModalTab, setAlertsModalTab] = (0, import_react.useState)("alerts");
	const [alertsCount, setAlertsCount] = (0, import_react.useState)(0);
	const [movementDocuments, setMovementDocuments] = (0, import_react.useState)([]);
	const [isLoadingDocuments, setIsLoadingDocuments] = (0, import_react.useState)(false);
	const [isTransportCollapsed, setIsTransportCollapsed] = (0, import_react.useState)(false);
	const [isProductCollapsed, setIsProductCollapsed] = (0, import_react.useState)(false);
	const { user } = useAuth();
	const providerConfig = (0, import_react.useMemo)(() => getTrackingProviderConfig(), []);
	const movementRef = (0, import_react.useMemo)(() => {
		return booking?.movement_number || booking?.booking_reference || booking?.reference || movementId || "—";
	}, [booking, movementId]);
	(0, import_react.useEffect)(() => {
		let active = true;
		if (!movementRef || movementRef === "—") {
			setAlertsCount(0);
			return;
		}
		fetchShipmentAlertsFromSupabase(movementRef, booking).then((al) => {
			if (active) setAlertsCount(al.length);
		}).catch(() => {
			if (active) setAlertsCount(0);
		});
		return () => {
			active = false;
		};
	}, [movementRef, booking]);
	const loadShipmentDocuments = (0, import_react.useCallback)(async () => {
		if (!movementRef || movementRef === "—") {
			setMovementDocuments([]);
			return;
		}
		setIsLoadingDocuments(true);
		try {
			const res = await fetch(`/api/documents?movementNumber=${encodeURIComponent(movementRef)}`);
			if (res.ok) {
				const data = await res.json();
				if (Array.isArray(data.files)) {
					const cleanRef = movementRef.trim().toUpperCase();
					const bkId = booking?.id;
					const matched = data.files.filter((doc) => {
						const docMov = (doc.metadata?.movementNumber || doc.metadata?.movementReferenceNumber || "").trim().toUpperCase();
						const docBkId = doc.metadata?.bookingId;
						return cleanRef && docMov && (docMov === cleanRef || cleanRef.includes(docMov) || docMov.includes(cleanRef)) || bkId && docBkId === bkId;
					});
					setMovementDocuments(matched);
					return;
				}
			}
		} catch (err) {
			console.warn("[ShipmentTrackingView] Fetch documents error:", err);
		} finally {
			setIsLoadingDocuments(false);
		}
		const localDocs = getSavedDocuments();
		const cleanRef = movementRef.trim().toUpperCase();
		const bkId = booking?.id;
		const matchedLocal = localDocs.filter((doc) => {
			const docMov = (doc.metadata?.movementNumber || doc.metadata?.movementReferenceNumber || "").trim().toUpperCase();
			const docBkId = doc.metadata?.bookingId;
			return cleanRef && docMov && (docMov === cleanRef || cleanRef.includes(docMov) || docMov.includes(cleanRef)) || bkId && docBkId === bkId;
		});
		setMovementDocuments(matchedLocal);
	}, [movementRef, booking]);
	(0, import_react.useEffect)(() => {
		loadShipmentDocuments();
	}, [loadShipmentDocuments]);
	const bookingEvents = (0, import_react.useMemo)(() => {
		const rawEvents = booking?.events;
		if (Array.isArray(rawEvents)) return rawEvents;
		return [];
	}, [booking]);
	const primaryContainer = (0, import_react.useMemo)(() => {
		const rawContainers = booking?.containers;
		if (Array.isArray(rawContainers) && rawContainers.length > 0) {
			if (selectedContainerNumber) {
				const found = rawContainers.find((c) => c.container_number && c.container_number.toUpperCase() === selectedContainerNumber.toUpperCase());
				if (found) return found;
			}
			return rawContainers[0];
		}
		return null;
	}, [booking, selectedContainerNumber]);
	const containerNumber = primaryContainer?.container_number || booking?.container_number || (Array.isArray(booking?.containers) && booking.containers.length === 0 ? "No Containers Assigned" : "Pending Assignment");
	const masterBL = booking?.booking_reference || booking?.bl_number || "—";
	const bookingNumber = movementRef;
	const containerType = primaryContainer?.container_size || booking?.container_size || "40HC";
	const gateInEvent = (0, import_react.useMemo)(() => {
		return bookingEvents.find((e) => {
			const type = (e.event_type || "").toLowerCase();
			const title = (e.title || "").toLowerCase();
			return type.includes("gate-in") || type.includes("gated in") || type.includes("cargo received") || title.includes("gate in");
		});
	}, [bookingEvents]);
	const loadedEvent = (0, import_react.useMemo)(() => {
		return bookingEvents.find((e) => {
			const type = (e.event_type || "").toLowerCase();
			const title = (e.title || "").toLowerCase();
			return type.includes("loaded") || type.includes("stuffing") || type.includes("container added") || title.includes("loaded");
		});
	}, [bookingEvents]);
	const departedEvent = (0, import_react.useMemo)(() => {
		return bookingEvents.find((e) => {
			const type = (e.event_type || "").toLowerCase();
			const title = (e.title || "").toLowerCase();
			return type.includes("depart") || type.includes("sail") || type.includes("in transit") || title.includes("depart");
		});
	}, [bookingEvents]);
	const arrivalEvent = (0, import_react.useMemo)(() => {
		return bookingEvents.find((e) => {
			const type = (e.event_type || "").toLowerCase();
			const title = (e.title || "").toLowerCase();
			return type.includes("arriv") || type.includes("discharg") || title.includes("arrival");
		});
	}, [bookingEvents]);
	const carrier = booking?.shipping_line?.name || booking?.carrier || booking?.shipping_line_name || "Ocean Carrier";
	const currentVessel = booking?.vessel_name ? `${booking.vessel_name} ${booking?.voyage_number || ""}`.trim() : "Pending Allocation";
	const incoterms = booking?.incoterms || "FOB";
	const shippingMode = booking?.shipping_mode || "FCL";
	const houseBL = masterBL;
	const forwarderName = booking?.forwarder?.company_name || booking?.forwarder?.name || booking?.forwarder_name || "—";
	const forwarderRef = containerNumber;
	const grossWeight = primaryContainer?.weight ? `${primaryContainer.weight.toLocaleString()} kg` : "—";
	const grossWeightNum = primaryContainer?.weight || 0;
	const volume = "—";
	const packageNumber = "—";
	const productDescription = booking?.product_description || "Commercial Cargo";
	const originCity = (0, import_react.useMemo)(() => {
		if (booking?.origin) {
			const part = booking.origin.split(",")[0].trim();
			if (part) return part;
		}
		return booking?.pol_name || "POL";
	}, [booking]);
	const originCountry = (0, import_react.useMemo)(() => {
		return extractCountryCode(booking?.origin || booking?.pol_name || "GB");
	}, [booking]);
	const polCity = (0, import_react.useMemo)(() => {
		if (booking?.pol_name) return booking.pol_name;
		if (booking?.origin) return booking.origin.split(",")[0].trim();
		return "POL";
	}, [booking]);
	const polCountry = (0, import_react.useMemo)(() => {
		return extractCountryCode(booking?.pol_name || booking?.origin || "GB");
	}, [booking]);
	const transshipmentCity = "—";
	const transCountry = "—";
	const destCity = (0, import_react.useMemo)(() => {
		if (booking?.destination) {
			const part = booking.destination.split(",")[0].trim();
			if (part) return part;
		}
		return booking?.pod_name || "POD";
	}, [booking]);
	const destCountry = (0, import_react.useMemo)(() => {
		return extractCountryCode(booking?.destination || booking?.pod_name || "PK");
	}, [booking]);
	const etaFormatted = booking?.eta ? new Date(booking.eta).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	}) : "—";
	const etdFormatted = booking?.etd ? new Date(booking.etd).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	}) : "—";
	const handleShare = () => {
		if (typeof window !== "undefined") {
			const shareUrl = `${window.location.origin}/tracking?ref=${encodeURIComponent(movementRef)}`;
			navigator.clipboard?.writeText(shareUrl).then(() => {
				toast.success("Tracking link copied to clipboard", { description: shareUrl });
			}, () => {
				toast.info(`Shipment Reference: ${movementRef}`);
			});
		}
	};
	(0, import_react.useEffect)(() => {
		const sub = getShipmentSubscription(movementRef, user?.email || void 0);
		setIsSubscribed(Boolean(sub.emailEnabled || sub.inAppToastEnabled));
	}, [movementRef, user?.email]);
	(0, import_react.useEffect)(() => {
		let isCancelled = false;
		async function loadCount() {
			try {
				const list = await fetchShipmentAlertsFromSupabase(movementRef, booking);
				if (!isCancelled) setAlertsCount(list.length);
			} catch {}
		}
		loadCount();
		return () => {
			isCancelled = true;
		};
	}, [movementRef, booking]);
	const handleSubscribe = () => {
		setAlertsModalTab("subscribe");
		setShowAlertsModal(true);
	};
	const handleFavoriteToggle = () => {
		setIsFavorited((prev) => {
			const next = !prev;
			if (next) toast.success(`Shipment ${movementRef} added to favorites`);
			else toast.info(`Removed ${movementRef} from favorites`);
			return next;
		});
	};
	if (!booking && !movementId) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col items-center justify-center min-h-[500px] p-8 text-center bg-white rounded-2xl border border-slate-200 m-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-12 text-slate-300 mb-3" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 495,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "text-lg font-bold text-slate-900",
				children: "No Active Shipment Selected"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 496,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-slate-500 max-w-md mt-1",
				children: "Select a booking from the Movements or Requests list to view real-time visual tracking, milestones, and telemetry."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 497,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => {
					if (onBack) onBack();
					else if (typeof window !== "undefined") window.location.href = "/";
				},
				className: "mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "size-4" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 509,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Back to Dashboard" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 510,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 501,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 494,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative flex flex-col min-h-full w-full bg-[#F5F7FA] text-slate-800 antialiased font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col lg:flex-row flex-1 w-full min-h-0",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
				className: "w-full lg:w-[350px] xl:w-[370px] shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200/90 bg-white p-5 lg:p-6 lg:min-h-full flex flex-col justify-start z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-[18px] border border-slate-200/80 p-3.5 sm:p-4 bg-white shadow-2xs",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid size-10 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-5 stroke-[1.8]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 527,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 526,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 block",
										children: "POD"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 530,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1.5 mt-0.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-2.5 fill-slate-800 text-slate-800 shrink-0" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 534,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[15px] font-extrabold text-slate-900 truncate",
												children: destCity
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 535,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-base shrink-0 leading-none",
												children: getCountryFlag(destCountry)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 538,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 533,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs font-medium text-slate-500 block mt-0.5",
										children: etaFormatted
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 542,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 529,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 524,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 523,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => {
							setAlertsModalTab("alerts");
							setShowAlertsModal(true);
						},
						className: "mt-3 w-full rounded-xl bg-[#EAEFF5] hover:bg-[#E1E8F0] px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-700 transition-colors cursor-pointer group",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "group-hover:text-slate-900 transition-colors",
								children: "Alerts List"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 559,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[10px] font-extrabold bg-white border border-slate-300/80 px-2 py-0.5 rounded-full text-[#009EE2] shadow-2xs",
								children: alertsCount
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 560,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 558,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftRight, { className: "size-3.5 text-slate-600 group-hover:text-slate-900 transition-colors" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 564,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 550,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-3 px-1 text-[11px] italic text-slate-400 font-sans",
						children: "All dates are UTC time"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 568,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 space-y-0 relative pl-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex items-start gap-3.5 pb-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-[#0D1F3C] text-white shadow-xs",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 578,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 577,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-4 top-8 bottom-0 w-[2px] bg-[#0D1F3C]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 581,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "pt-1 min-w-0",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[14px] font-bold text-slate-900",
												children: originCity
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 585,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-sm leading-none",
												children: getCountryFlag(originCountry)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 586,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 584,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 583,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 575,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex items-start gap-3.5 pb-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-[#0D1F3C] text-white shadow-xs",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 595,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 594,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-4 top-8 bottom-0 w-[2px] bg-[#0D1F3C]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 598,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "pt-1 flex-1 min-w-0 space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-[14px] font-bold text-slate-900",
													children: polCity
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 602,
													columnNumber: 19
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-sm leading-none",
													children: getCountryFlag(polCountry)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 603,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 601,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "space-y-0.5 text-left",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center gap-1.5 text-xs font-semibold text-slate-800",
													children: [gateInEvent || loadedEvent || departedEvent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3.5 stroke-[3] text-slate-900 shrink-0" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 610,
														columnNumber: 23
													}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-2.5 fill-slate-400 text-slate-400 shrink-0" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 612,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Container gate in at departure port" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 614,
														columnNumber: 21
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 608,
													columnNumber: 19
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[11px] text-slate-400 pl-5",
													children: gateInEvent?.occurred_at || gateInEvent?.event_date ? new Date(gateInEvent.occurred_at || gateInEvent.event_date).toLocaleDateString("en-GB", {
														day: "numeric",
														month: "short",
														year: "numeric"
													}) : booking?.loading_date || etdFormatted
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 616,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 607,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "space-y-0.5 text-left",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center justify-between gap-1 text-xs font-semibold text-slate-800",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex items-center gap-1.5",
														children: [loadedEvent || departedEvent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3.5 stroke-[3] text-slate-900 shrink-0" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 634,
															columnNumber: 25
														}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-2.5 fill-slate-400 text-slate-400 shrink-0" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 636,
															columnNumber: 25
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Container loaded on vessel" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 638,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 632,
														columnNumber: 21
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 640,
														columnNumber: 21
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 631,
													columnNumber: 19
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[11px] text-slate-400 pl-5",
													children: loadedEvent?.occurred_at || loadedEvent?.event_date ? new Date(loadedEvent.occurred_at || loadedEvent.event_date).toLocaleDateString("en-GB", {
														day: "numeric",
														month: "short",
														year: "numeric"
													}) : "Scheduled before ETD"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 642,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 630,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "space-y-0.5 text-left",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center justify-between gap-1 text-xs font-semibold text-slate-800",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex items-center gap-1.5 min-w-0",
														children: [departedEvent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3.5 stroke-[3] text-slate-900 shrink-0" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 660,
															columnNumber: 25
														}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-2.5 fill-slate-400 text-slate-400 shrink-0" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 662,
															columnNumber: 25
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "truncate",
															children: "Vessel departure"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 664,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 658,
														columnNumber: 21
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex items-center gap-1.5 shrink-0",
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 667,
															columnNumber: 23
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 666,
														columnNumber: 21
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 657,
													columnNumber: 19
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[11px] text-slate-400 pl-5",
													children: departedEvent?.occurred_at || departedEvent?.event_date ? new Date(departedEvent.occurred_at || departedEvent.event_date).toLocaleDateString("en-GB", {
														day: "numeric",
														month: "short",
														year: "numeric"
													}) : `${etdFormatted} (Estimated)`
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 670,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 656,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 600,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 592,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex items-center gap-3.5 pb-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-[#0D1F3C] text-white shadow-xs",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ship, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 689,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 688,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-4 top-8 bottom-0 w-0 border-l-2 border-dashed border-slate-300" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 692,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "text-[11px] text-slate-400 italic",
										children: departedEvent ? "Vessel en route per maritime schedule" : "Transit corridor scheduled"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 694,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 686,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex items-start gap-3.5 pb-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative z-10 grid size-8 shrink-0 place-items-center rounded-full border border-slate-300 bg-white text-slate-400 shadow-2xs",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 705,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 704,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-4 top-8 bottom-0 w-0 border-l-2 border-dashed border-slate-300" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 708,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "pt-1 flex-1 min-w-0 space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[14px] font-bold text-slate-900",
												children: transshipmentCity
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 712,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-sm leading-none",
												children: getCountryFlag(transCountry)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 713,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 711,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-0.5 text-left",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center justify-between gap-1 text-xs font-medium text-slate-700",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-2.5 fill-slate-400 text-slate-400 shrink-0" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 720,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Transshipment passage" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 721,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 719,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 723,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 718,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11px] text-slate-400 pl-4",
												children: "En route corridor"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 725,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 717,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 710,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 702,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex items-start gap-3.5 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative z-10 grid size-8 shrink-0 place-items-center rounded-full border border-slate-300 bg-white text-slate-400 shadow-2xs",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 734,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 733,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "pt-1 flex-1 min-w-0 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[14px] font-bold text-slate-900",
												children: destCity
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 739,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-sm leading-none",
												children: getCountryFlag(destCountry)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 740,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 738,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-0.5 text-left",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center justify-between gap-1 text-xs font-medium text-slate-700",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center gap-1.5",
													children: [arrivalEvent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3.5 stroke-[3] text-slate-900 shrink-0" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 748,
														columnNumber: 25
													}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-2.5 fill-slate-400 text-slate-400 shrink-0" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 750,
														columnNumber: 25
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Vessel arrival" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 752,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 746,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-3.5 text-slate-400" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 754,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 745,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11px] text-slate-400 pl-4",
												children: arrivalEvent?.occurred_at || arrivalEvent?.event_date ? new Date(arrivalEvent.occurred_at || arrivalEvent.event_date).toLocaleDateString("en-GB", {
													day: "numeric",
													month: "short",
													year: "numeric"
												}) : `${etaFormatted} (Estimated ETA)`
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 756,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 744,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-0.5 text-left",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-1.5 text-xs font-medium text-slate-700",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-2.5 fill-slate-400 text-slate-400 shrink-0" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 772,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Container discharge & gate out" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 773,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 771,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11px] text-slate-400 pl-4",
												children: arrivalEvent ? "Discharge scheduled" : `${etaFormatted} (Pending arrival)`
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 775,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 770,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 737,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 731,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 573,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 521,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "flex-1 min-w-0 flex flex-col bg-[#F5F7FA]",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative w-full",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrackingMapSection, {
							originName: originCity,
							originCountryCode: originCountry,
							polName: polCity,
							polCountryCode: polCountry,
							transshipmentName: transshipmentCity,
							transCountryCode: transCountry,
							destinationName: destCity,
							destCountryCode: destCountry,
							vesselName: currentVessel,
							vesselStatus: "In Transit (+18h)",
							etaFormatted
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 788,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "absolute top-4 left-4 z-20",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => {
									if (onBack) onBack();
									else if (typeof window !== "undefined") {
										if (window.history.length > 1) window.history.back();
										else window.location.href = `/?selected=${encodeURIComponent(booking?.id || movementRef)}`;
									}
								},
								className: "inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/90 px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-sm hover:bg-white hover:text-slate-900 transition-all active:scale-95 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "size-3.5 stroke-[2.5]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 819,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Back to Movement Details" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 820,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 804,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 803,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 787,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "px-5 sm:px-8 pt-6 pb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: handleFavoriteToggle,
										className: "text-slate-400 hover:text-amber-500 transition-colors cursor-pointer",
										title: "Bookmark shipment",
										"aria-label": "Favorite",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: cn("size-6 stroke-[1.8] transition-all", isFavorited ? "fill-amber-400 text-amber-400" : "hover:scale-110") }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 837,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 830,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
										className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-sans",
										children: movementRef
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 844,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 829,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2.5 sm:gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "size-8 rounded-full bg-[#4F75E8] text-white flex items-center justify-center text-xs font-bold shadow-xs select-none",
											title: "Operations Desk: Nashmia Admin",
											children: "NA"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 852,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: handleShare,
											className: "inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200/90 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-2xs active:scale-95 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share2, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 865,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 866,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 860,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: handleSubscribe,
											className: cn("inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all shadow-2xs active:scale-95 cursor-pointer", isSubscribed ? "bg-blue-50 border-[#009EE2] text-[#009EE2]" : "bg-white border-slate-200/90 text-slate-700 hover:bg-slate-50 hover:text-slate-900"),
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: cn("size-3.5", isSubscribed && "fill-[#009EE2]") }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 880,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: isSubscribed ? "Subscribed" : "Subscribe" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 881,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 870,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 850,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 827,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-3.5 flex flex-wrap items-center gap-2.5 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "rounded-full bg-slate-100 border border-slate-200/80 px-3 py-1 font-mono font-bold text-slate-800 flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { className: "size-3.5 text-slate-500" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 889,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Unit: ", containerNumber] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 890,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 888,
										columnNumber: 15
									}, this),
									primaryContainer?.seal_number && /* @__PURE__ */ (void 0)("span", {
										className: "rounded-full bg-slate-100 border border-slate-200/80 px-3 py-1 font-mono font-medium text-slate-700",
										children: ["Seal: ", primaryContainer.seal_number]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 893,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border", providerConfig.hasCredentials ? "bg-blue-50 border-blue-200 text-blue-800" : "bg-slate-50 border-slate-200/90 text-slate-600"),
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("size-2 rounded-full", providerConfig.hasCredentials ? "bg-blue-500 animate-pulse" : "bg-amber-400") }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 905,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: providerConfig.hasCredentials ? `Provider: ${providerConfig.providerName} (Live Active)` : "Tracking Integration: Database Milestones Connected (Carrier API credentials pending)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 911,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 897,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 887,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6 flex items-center gap-8 border-b border-slate-200 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setActiveTab("info"),
									className: cn("pb-3 relative transition-colors cursor-pointer", activeTab === "info" ? "text-slate-900 font-bold" : "text-slate-500 hover:text-slate-700"),
									children: ["Information", activeTab === "info" && /* @__PURE__ */ (void 0)("span", { className: "absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#009EE2] rounded-full animate-in fade-in-50 duration-200" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 933,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 921,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setActiveTab("documents"),
									className: cn("pb-3 relative transition-colors cursor-pointer", activeTab === "documents" ? "text-slate-900 font-bold" : "text-slate-500 hover:text-slate-700"),
									children: ["Transport documents (3)", activeTab === "documents" && /* @__PURE__ */ (void 0)("span", { className: "absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#009EE2] rounded-full animate-in fade-in-50 duration-200" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 949,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 937,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 920,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 826,
						columnNumber: 11
					}, this),
					activeTab === "info" && /* @__PURE__ */ (void 0)("div", {
						className: "p-5 sm:p-8 pt-6 space-y-6",
						children: /* @__PURE__ */ (void 0)("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "lg:col-span-8 bg-white rounded-[22px] border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-5",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between",
										children: /* @__PURE__ */ (void 0)("h2", {
											className: "text-base sm:text-lg font-bold text-slate-800",
											children: "Transportation"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 962,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 961,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										onClick: () => setIsTransportCollapsed((prev) => !prev),
										className: "flex items-center justify-between p-3 px-4 rounded-xl bg-slate-50/80 border border-slate-150 cursor-pointer hover:bg-slate-100/60 transition-colors",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2.5 min-w-0",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "grid size-7 place-items-center rounded-lg bg-blue-50 text-[#009EE2] shrink-0",
												children: /* @__PURE__ */ (void 0)(Ship, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 974,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 973,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-sm font-bold text-slate-800 truncate",
												children: [
													originCity,
													", ",
													originCountry,
													" → ",
													destCity,
													", ",
													destCountry
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 976,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 972,
											columnNumber: 21
										}, this), isTransportCollapsed ? /* @__PURE__ */ (void 0)(ChevronDown, { className: "size-4 text-slate-500" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 981,
											columnNumber: 23
										}, this) : /* @__PURE__ */ (void 0)(ChevronUp, { className: "size-4 text-slate-500" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 983,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 968,
										columnNumber: 19
									}, this),
									!isTransportCollapsed && /* @__PURE__ */ (void 0)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-8 text-[13px] pt-1",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "Container number"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 991,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 font-mono text-right",
													children: containerNumber
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 992,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 990,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "Master BL"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 998,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 font-mono text-right",
													children: masterBL
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 999,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 997,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "Booking number"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1005,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 font-mono text-right",
													children: bookingNumber
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1006,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1004,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "Container type"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1012,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 text-right",
													children: containerType
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1013,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1011,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "Carrier"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1019,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 text-right",
													children: carrier
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1020,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1018,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "Current vessel"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1024,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 text-right",
													children: currentVessel
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1025,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1023,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "Incoterms"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1031,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 text-right",
													children: incoterms
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1032,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1030,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "Shipping mode"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1036,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 text-right",
													children: shippingMode
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1037,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1035,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "House BL"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1043,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 font-mono text-right",
													children: houseBL
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1044,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1042,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "Forwarder"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1050,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 text-right",
													children: forwarderName
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1051,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1049,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "Forwarder reference"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1057,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 font-mono text-right",
													children: forwarderRef
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1058,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1056,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "Gross weight"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1064,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 text-right",
													children: grossWeight
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1065,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1063,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-slate-400 font-medium",
													children: "Volume"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1071,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-slate-900 text-right",
													children: [volume, " m³"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1072,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1070,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 989,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 960,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "lg:col-span-4 bg-white rounded-[22px] border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4",
								children: [/* @__PURE__ */ (void 0)("div", {
									onClick: () => setIsProductCollapsed((prev) => !prev),
									className: "flex items-center justify-between cursor-pointer",
									children: [/* @__PURE__ */ (void 0)("h3", {
										className: "text-base font-bold text-slate-800",
										children: "Product"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1084,
										columnNumber: 21
									}, this), isProductCollapsed ? /* @__PURE__ */ (void 0)(ChevronDown, { className: "size-4 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1086,
										columnNumber: 23
									}, this) : /* @__PURE__ */ (void 0)(ChevronUp, { className: "size-4 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1088,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1080,
									columnNumber: 19
								}, this), !isProductCollapsed && /* @__PURE__ */ (void 0)("div", {
									className: "divide-y divide-slate-100 text-[13px] pt-1",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "pb-3.5 space-y-0.5",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-slate-400 text-xs font-medium block",
												children: "Gross Weight (kg)"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1096,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-slate-900 font-bold text-[15px] block font-mono",
												children: grossWeightNum.toLocaleString()
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1099,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1095,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "py-3.5 flex items-center justify-between",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-slate-400 text-xs font-medium",
												children: "Volume (m3)"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1106,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-slate-900 font-bold font-mono",
												children: volume
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1107,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1105,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "py-3.5 flex items-center justify-between",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-slate-400 text-xs font-medium",
												children: "Package number"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1112,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-slate-900 font-bold font-mono",
												children: packageNumber
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1113,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1111,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "pt-3.5 space-y-1",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-slate-400 text-xs font-medium block",
												children: "Product description"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1118,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-slate-800 font-semibold text-xs leading-relaxed uppercase",
												children: productDescription
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1121,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1117,
											columnNumber: 23
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1093,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1079,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 958,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 957,
						columnNumber: 13
					}, this),
					activeTab === "documents" && /* @__PURE__ */ (void 0)("div", {
						className: "p-5 sm:p-8 pt-6 space-y-4",
						children: /* @__PURE__ */ (void 0)("div", {
							className: "bg-white rounded-[22px] border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between",
								children: /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
									className: "text-base font-bold text-slate-800",
									children: "Verified Shipping & Customs Documents"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1138,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-slate-500 mt-0.5",
									children: "Carrier bill of lading, export declarations, and VGM certificates."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1141,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1137,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1136,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "divide-y divide-slate-100",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "grid size-10 place-items-center rounded-xl bg-blue-50 text-[#009EE2] shrink-0 font-bold text-xs uppercase",
												children: "BL"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1151,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
												className: "text-[13.5px] font-bold text-slate-900",
												children: "Original Bill of Lading (Master B/L)"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1155,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-slate-500 font-mono",
												children: "MEDUAHJ11786.pdf · 2.4 MB · Issued by Mediterranean Shipping Company"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1158,
												columnNumber: 25
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1154,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1150,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700",
												children: "Signed"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1164,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => toast.success("Downloading Master Bill of Lading"),
												className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer",
												children: [/* @__PURE__ */ (void 0)(Download, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1172,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Download" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1173,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1167,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1163,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1149,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 shrink-0 font-bold text-xs uppercase",
												children: "VGM"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1181,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
												className: "text-[13.5px] font-bold text-slate-900",
												children: "Verified Gross Mass (VGM) Certificate"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1185,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-slate-500 font-mono",
												children: "VGM-MSMU7506677.pdf · 1.1 MB · Terminal Gate-in Weighbridge Calibrated"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1188,
												columnNumber: 25
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1184,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1180,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700",
												children: "Verified"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1194,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => toast.success("Downloading Verified Gross Mass Certificate"),
												className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer",
												children: [/* @__PURE__ */ (void 0)(Download, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1202,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Download" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1203,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1197,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1193,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1179,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "grid size-10 place-items-center rounded-xl bg-amber-50 text-amber-600 shrink-0 font-bold text-xs uppercase",
												children: "INV"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1211,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
												className: "text-[13.5px] font-bold text-slate-900",
												children: "Commercial Invoice & Packing Declaration"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1215,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-slate-500 font-mono",
												children: "INV-PK-2026-9021.pdf · 3.8 MB · Customs Declared: Used Clothing 40'HC"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1218,
												columnNumber: 25
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1214,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1210,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#009EE2]",
												children: "Customs Approved"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1224,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => toast.success("Downloading Commercial Invoice"),
												className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer",
												children: [/* @__PURE__ */ (void 0)(Download, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1232,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Download" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1233,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1227,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1223,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1209,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1147,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1135,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1134,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 785,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 519,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrackingAlertsModal, {
			open: showAlertsModal,
			onOpenChange: setShowAlertsModal,
			movementRef,
			booking,
			initialTab: alertsModalTab,
			onSubscribedChange: (subbed) => setIsSubscribed(subbed)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 1245,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 517,
		columnNumber: 5
	}, this);
}
//#endregion
export { ShipmentTrackingView };
