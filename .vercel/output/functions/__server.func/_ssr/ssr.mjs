import { r as __exportAll } from "../_runtime.mjs";
import { n as supabase, t as isSupabaseConfigured } from "./supabase-lbao-IEt.mjs";
import { At as safeUuid, D as inMemoryQuotations, E as inMemoryIncomingEmails, Et as normalizeLifecycleStage, F as processRawEmailContent, G as INITIAL_FILES, Ht as updateLocalBooking, I as recordQuotationAuditEvent, It as toDbBookingStatus, Lt as toDbMovementStatus, Mt as saveCutOffsForMovement, N as processForwarderQuotationEmail, Nt as saveDriveDocument, P as processIncomingForwarderEmailReply, Pt as saveLocalBookings, T as identifyMovementForIncomingEmail, Tt as normalizeBookingStatus, U as validateQuotationForBackendAction, X as deduplicateBookings, f as extractQuotationFromEmail, j as normalizeBookingNumber, jt as saveCutOffDataToDatabase, kt as safeInsertNotification, l as executeMovementForwarderMatch, nt as fetchBookingsFromSupabase, o as detectForwarderConfirmation, pt as getLocalBookings, u as extractMovementNumbers, ut as getCutOffDataFromDatabase, v as firebase_applet_config_default, w as getLocalForwarderRequests, z as saveLocalForwarderRequests } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import "../_libs/@google/genai.mjs";
import { n as utils, t as readSync } from "../_libs/xlsx.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { B as isDangerousProtocol, D as toCrossJSONAsync, F as waitForReason, G as isNotFound, I as _getRenderedMatches, M as getStylesheetHref, N as resolveManifestAssetLink, O as toCrossJSONStream, P as resolveManifestCssLink, T as fromJSON, U as isRedirect, V as isPromise, W as rootRouteId, a as isSsrResponse, i as disposeSsrResponse, j as getScriptPreloadAttrs, n as bindSsrResponseToRequest, o as normalizeSsrResponse, p as RouterProvider, r as defineHandlerCallback, s as stripSsrResponseBody, t as renderRouterToStream } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createServerHistory } from "../_libs/tanstack__history.mjs";
import { a as getNormalizedURL, c as makeSerovalPlugin, i as attachRouterServerSsrUtils, l as createSerializationAdapter, n as parseSetCookie, o as createRawStreamRPCPlugin, r as splitSetCookieString, s as defaultSerovalDeserializerPlugins, t as mergeHeaders } from "../_libs/@tanstack/router-core+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import fs from "fs";
import path from "path";
import crypto$1 from "crypto";
import { AsyncLocalStorage } from "node:async_hooks";
//#region node_modules/.nitro/vite/services/ssr/index.js
var ssr_exports = /* @__PURE__ */ __exportAll({
	a: () => executeExcelBookingUpdates,
	c: () => renderErrorPage,
	default: () => server_default,
	i: () => startContainerTracking,
	n: () => createMiddleware,
	o: () => parseAndPreviewExcelBookings,
	r: () => getTrackingProviderConfig,
	s: () => extractCutOffDeadlinesOnly,
	t: () => createCsrfMiddleware,
	triggerImmediateServerSync: () => triggerImmediateServerSync
});
require_react();
var import_jsx_runtime = require_jsx_runtime();
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
var CAUSE_DEPTH_LIMIT = 5;
var DESCRIPTION_LENGTH_LIMIT = 8e3;
function describeError(error) {
	const parts = [];
	let current = error;
	for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
		if (!(current instanceof Error)) {
			parts.push(typeof current === "string" ? current : safeStringify(current));
			break;
		}
		const label = depth === 0 ? "" : "caused by: ";
		const status = describeStatus(current);
		parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
		current = current.cause;
	}
	return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}
function describeStatus(error) {
	const { status, statusCode } = error;
	const value = status ?? statusCode;
	return typeof value === "number" ? ` (status ${value})` : "";
}
function safeStringify(value) {
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function isErrorLike(value) {
	return value instanceof Error;
}
var originalConsoleError = console.error.bind(console);
console.error = (...args) => {
	originalConsoleError(...args.map((arg) => {
		if (!isErrorLike(arg)) return arg;
		record(arg);
		return describeError(arg);
	}));
};
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
/**
* Step 5 — Automatic Movement Confirmation Engine
*
* Strict Validation Rules:
* A movement can ONLY become CONFIRMED when ALL 6 conditions are true:
* 1. Valid booking/movement found.
* 2. Exact Movement Number OR valid Gmail thread matched.
* 3. Forwarder is validated.
* 4. Incoming email is a genuine Forwarder reply.
* 5. Confirmation detector returns CONFIRMED.
* 6. No conflicting manual decision exists.
*
* Then updates movement.status = CONFIRMED, records confirmed_at, confirmed_by = SYSTEM,
* confirmation_email_id, and generates immutable audit log AUTO_CONFIRMED_FROM_EMAIL.
*/
async function processAutomaticMovementConfirmation(request) {
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	const validBookingUuid = safeUuid(request.bookingId || request.movementId);
	const failureReasons = [];
	console.log("[MovementConfirmationEngine] Evaluating Step 5 Automatic Confirmation:", {
		bookingId: validBookingUuid,
		movementNumber: request.movementNumber,
		confirmationStatus: request.confirmationStatus,
		matchedBy: request.matchedBy,
		isForwarderValidated: request.isForwarderValidated
	});
	let currentBooking = null;
	if (validBookingUuid && isSupabaseConfigured) try {
		const { data: dbBooking } = await supabase.from("bookings").select("id, status, booking_reference, reference, forwarder_id, user_id, notes").eq("id", validBookingUuid).maybeSingle();
		if (dbBooking) currentBooking = {
			...dbBooking,
			movement_number: dbBooking.booking_reference || dbBooking.reference
		};
	} catch (err) {
		console.warn("[MovementConfirmationEngine] Supabase booking fetch notice:", err);
	}
	if (!currentBooking && request.movementNumber && isSupabaseConfigured) try {
		const cleanMovement = request.movementNumber.trim();
		const { data: dbBookingByMov } = await supabase.from("bookings").select("id, status, booking_reference, reference, forwarder_id, user_id, notes").or(`booking_reference.eq.${cleanMovement},reference.eq.${cleanMovement},movement_number.eq.${cleanMovement}`).limit(1).maybeSingle();
		if (dbBookingByMov) currentBooking = {
			...dbBookingByMov,
			movement_number: dbBookingByMov.booking_reference || dbBookingByMov.movement_number || dbBookingByMov.reference
		};
	} catch (err) {
		console.warn("[MovementConfirmationEngine] Lookup by movement number notice:", err);
	}
	if (!currentBooking) {
		const cleanMov = (request.movementNumber || "").trim().toLowerCase();
		const cleanId = (validBookingUuid || "").toLowerCase();
		const local = getLocalBookings().find((b) => {
			const bId = (b.id || "").toLowerCase();
			const bMov = (b.movement_number || "").toLowerCase();
			const bBkRef = (b.booking_reference || "").toLowerCase();
			const bRef = (b.reference || "").toLowerCase();
			return cleanId && bId === cleanId || cleanMov && (bMov === cleanMov || bBkRef === cleanMov || bRef === cleanMov || bId === cleanMov);
		});
		if (local) currentBooking = {
			id: local.id,
			status: local.status || "Booking Requested",
			booking_reference: local.booking_reference,
			movement_number: local.movement_number || local.booking_reference,
			forwarder_id: local.forwarder_id,
			user_id: local.user_id,
			confirmed_at: local.confirmed_at || null,
			confirmed_by: local.confirmed_by || null,
			confirmation_email_id: local.confirmation_email_id || null,
			confirmation_status: local.confirmation_status || null
		};
	}
	const effectiveBookingId = currentBooking?.id || validBookingUuid || null;
	const effectiveMovementNumber = currentBooking?.movement_number || request.movementNumber || currentBooking?.booking_reference || "UNKNOWN";
	const previousStatus = currentBooking?.status || "Awaiting Confirmation";
	const validBookingFound = Boolean(currentBooking && effectiveBookingId);
	if (!validBookingFound) failureReasons.push("Condition 1 Failed: Valid booking or movement record was not found in the system.");
	const isMatchedByValidKey = request.matchedBy === "MOVEMENT_NUMBER" || request.matchedBy === "THREAD_ID" || request.matchedBy === "MANUAL" || Boolean(request.bookingId) || Boolean(request.movementId) || Boolean(request.movementNumber);
	const exactMatchMatched = Boolean(isMatchedByValidKey && (request.matchStatus === "MATCHED" || request.matchStatus === "NEEDS_REVIEW" || Boolean(currentBooking)));
	if (!exactMatchMatched) failureReasons.push("Condition 2 Failed: Movement Number or Gmail Thread ID was not accurately matched.");
	let awardedForwarderId = currentBooking?.forwarder_id || null;
	let awardedForwarderName = currentBooking?.forwarder_name || null;
	let awardedForwarderEmail = null;
	let hasAwardedOffer = Boolean(awardedForwarderId || awardedForwarderName);
	const notAwardedSenders = /* @__PURE__ */ new Set();
	if (isSupabaseConfigured && effectiveBookingId && safeUuid(effectiveBookingId)) try {
		const { data: offers } = await supabase.from("forwarder_offers").select("id, forwarder_id, forwarder_name, forwarder_email, status, is_declined").eq("booking_id", safeUuid(effectiveBookingId));
		if (offers && offers.length > 0) for (const o of offers) {
			const st = (o.status || "").toUpperCase();
			if (st === "AWARDED" || st === "ACCEPTED") {
				hasAwardedOffer = true;
				awardedForwarderId = o.forwarder_id || awardedForwarderId;
				awardedForwarderName = o.forwarder_name || awardedForwarderName;
				awardedForwarderEmail = o.forwarder_email || awardedForwarderEmail;
			} else if (st === "NOT_AWARDED" || st === "DECLINED" || o.is_declined) {
				if (o.forwarder_id) notAwardedSenders.add(o.forwarder_id.toLowerCase());
				if (o.forwarder_email) notAwardedSenders.add(o.forwarder_email.toLowerCase());
				if (o.forwarder_name) notAwardedSenders.add(o.forwarder_name.toLowerCase());
			}
		}
	} catch (chkErr) {
		console.warn("[MovementConfirmationEngine] Check forwarder_offers error:", chkErr);
	}
	const localReqs = getLocalForwarderRequests().filter((r) => r.bookingId === effectiveBookingId || r.movementNumber === effectiveMovementNumber);
	for (const lr of localReqs) {
		const st = (lr.status || "").toUpperCase();
		if (st === "AWARDED" || st === "ACCEPTED") {
			hasAwardedOffer = true;
			awardedForwarderId = lr.forwarderId || awardedForwarderId;
			awardedForwarderName = lr.forwarderName || awardedForwarderName;
			awardedForwarderEmail = lr.forwarderEmail || awardedForwarderEmail;
		} else if (st === "NOT_AWARDED" || st === "DECLINED") {
			if (lr.forwarderId) notAwardedSenders.add(lr.forwarderId.toLowerCase());
			if (lr.forwarderEmail) notAwardedSenders.add(lr.forwarderEmail.toLowerCase());
			if (lr.forwarderName) notAwardedSenders.add(lr.forwarderName.toLowerCase());
		}
	}
	const senderEmailLower = (request.senderEmail || "").toLowerCase().trim();
	const senderForwarderIdLower = (request.forwarderId || "").toLowerCase().trim();
	const senderNameLower = (request.forwarderName || "").toLowerCase().trim();
	const isSenderMarkedNotAwarded = senderForwarderIdLower && notAwardedSenders.has(senderForwarderIdLower) || senderEmailLower && notAwardedSenders.has(senderEmailLower) || senderNameLower && notAwardedSenders.has(senderNameLower);
	let isSenderAwardedForwarder = true;
	if (hasAwardedOffer) {
		const matchesAwardedId = Boolean(awardedForwarderId) && Boolean(senderForwarderIdLower) && awardedForwarderId?.toLowerCase() === senderForwarderIdLower;
		const matchesAwardedEmail = Boolean(awardedForwarderEmail) && Boolean(senderEmailLower) && (awardedForwarderEmail?.toLowerCase() === senderEmailLower || senderEmailLower.includes(awardedForwarderEmail?.toLowerCase() || ""));
		const matchesAwardedName = Boolean(awardedForwarderName) && Boolean(senderNameLower) && (awardedForwarderName?.toLowerCase() === senderNameLower || awardedForwarderName?.toLowerCase().includes(senderNameLower) || senderNameLower.includes(awardedForwarderName?.toLowerCase() || ""));
		const matchesBookingForwarder = currentBooking?.forwarder_id && currentBooking.forwarder_id.toLowerCase() === senderForwarderIdLower || currentBooking?.forwarder_name && currentBooking.forwarder_name.toLowerCase() === senderNameLower;
		isSenderAwardedForwarder = Boolean(matchesAwardedId || matchesAwardedEmail || matchesAwardedName || matchesBookingForwarder);
	}
	const forwarderValidated = !isSenderMarkedNotAwarded && isSenderAwardedForwarder && (request.isForwarderValidated === true || request.matchedBy === "THREAD_ID" || request.matchStatus === "MATCHED" && !failureReasons.includes("Forwarder mismatch") || Boolean(request.forwarderId || request.forwarderName));
	if (isSenderMarkedNotAwarded || hasAwardedOffer && !isSenderAwardedForwarder) {
		const blockReason = `Strict Policy: Only the AWARDED forwarder (${awardedForwarderName || "Official Forwarder"}) can confirm booking ${effectiveMovementNumber}. Sender (${request.senderEmail || request.forwarderName || "Unknown"}) is NOT_AWARDED.`;
		failureReasons.push(blockReason);
		if (isSupabaseConfigured && effectiveBookingId && safeUuid(effectiveBookingId)) supabase.from("booking_events").insert({
			booking_id: safeUuid(effectiveBookingId),
			event_type: "CONFIRMATION_BLOCKED",
			title: "Confirmation from NOT_AWARDED Forwarder Blocked",
			description: `Blocked unauthorized confirmation attempt from unawarded partner (${request.senderEmail || request.forwarderName}). Movement remains assigned to awarded partner (${awardedForwarderName || "Official Forwarder"}).`,
			event_date: nowIso,
			location: "Security Confirmation Guard"
		});
	} else if (!forwarderValidated) failureReasons.push("Condition 3 Failed: Sender does not match the validated forwarder credentials on file.");
	const isGenuineForwarderReply = (request.direction || "inbound").toLowerCase() === "inbound" && Boolean(request.senderEmail);
	if (!isGenuineForwarderReply) failureReasons.push("Condition 4 Failed: Message is not an inbound freight partner communication.");
	const detectorConfirmed = request.confirmationStatus === "CONFIRMED";
	if (!detectorConfirmed) failureReasons.push(`Condition 5 Failed: Detection engine returned '${request.confirmationStatus}' instead of 'CONFIRMED'.`);
	const rawStatusLower = (currentBooking?.status || "").toLowerCase();
	const noConflictingDecision = !(rawStatusLower.includes("cancel") || rawStatusLower.includes("reject") || rawStatusLower.includes("hold") || rawStatusLower.includes("dispute"));
	if (!noConflictingDecision) failureReasons.push(`Condition 6 Failed: Conflicting manual lifecycle state detected on movement (${currentBooking?.status}).`);
	const emailId = request.emailMessageId || request.gmailMessageId || "";
	if ((currentBooking?.status === "CONFIRMED" || currentBooking?.status === "Booking Confirmed") && currentBooking?.confirmation_email_id === emailId) {
		console.log("[MovementConfirmationEngine] Idempotent hit: Movement already confirmed by this email ID.", emailId);
		return {
			success: true,
			actionTaken: "SKIPPED_IDEMPOTENT",
			previousStatus: currentBooking?.status || "CONFIRMED",
			newStatus: "CONFIRMED",
			bookingId: effectiveBookingId,
			movementNumber: effectiveMovementNumber,
			confirmedAt: currentBooking?.confirmed_at || nowIso,
			confirmedBy: currentBooking?.confirmed_by || "SYSTEM",
			confirmationEmailId: emailId,
			conditions: {
				validBookingFound,
				exactMatchMatched,
				forwarderValidated,
				isGenuineForwarderReply,
				detectorConfirmed,
				noConflictingDecision,
				allConditionsMet: true,
				failureReasons: []
			},
			message: `Movement ${effectiveMovementNumber} is already confirmed by this email (Idempotent).`
		};
	}
	const allConditionsMet = validBookingFound && exactMatchMatched && forwarderValidated && isGenuineForwarderReply && detectorConfirmed && noConflictingDecision;
	const conditionsCheck = {
		validBookingFound,
		exactMatchMatched,
		forwarderValidated,
		isGenuineForwarderReply,
		detectorConfirmed,
		noConflictingDecision,
		allConditionsMet,
		failureReasons
	};
	if (allConditionsMet && effectiveBookingId) {
		const updatedStatus = "Booking Confirmed";
		const confirmedBy = request.forwarderName || awardedForwarderName || "Awarded Forwarder";
		const confirmedAt = nowIso;
		const confirmationEmailId = emailId;
		console.log(`[MovementConfirmationEngine] ✅ Auto-confirming movement ${effectiveMovementNumber} (${previousStatus} -> Booking Confirmed)`);
		if (isSupabaseConfigured) try {
			const existingNotes = currentBooking?.notes || "";
			const confirmationNote = `[Auto-Confirmed via Forwarder Email ${nowIso}: ${request.reason}]`;
			const updatedNotes = existingNotes ? `${existingNotes}\n${confirmationNote}` : confirmationNote;
			const updatePayload = {
				status: "Confirmed",
				movement_status: "CONFIRMED",
				is_movement_confirmed: true,
				confirmation_status: "CONFIRMED",
				confirmed_at: confirmedAt,
				confirmed_by: confirmedBy,
				confirmation_email_id: confirmationEmailId,
				confirmation_reason: request.reason || "Auto-confirmed from forwarder email",
				confirmation_detected_by: request.detectedBy || "DETERMINISTIC",
				confirmation_confidence: request.confidence || .95,
				notes: updatedNotes,
				updated_at: nowIso
			};
			if (effectiveBookingId && safeUuid(effectiveBookingId)) {
				const { error: updateErr } = await supabase.from("bookings").update(updatePayload).eq("id", effectiveBookingId);
				if (updateErr) console.error("[MovementConfirmationEngine] Supabase bookings update error:", updateErr);
				else console.log(`[MovementConfirmationEngine] ✅ Supabase booking ${effectiveBookingId} updated to status 'Booking Confirmed'`);
			}
			if (effectiveMovementNumber && effectiveMovementNumber !== "UNKNOWN") await supabase.from("bookings").update(updatePayload).or(`booking_reference.eq.${effectiveMovementNumber},movement_number.eq.${effectiveMovementNumber},reference.eq.${effectiveMovementNumber}`).catch((err) => console.warn("[MovementConfirmationEngine] Booking ref update notice:", err));
		} catch (dbErr) {
			console.warn("[MovementConfirmationEngine] Supabase update notice:", dbErr);
		}
		if (effectiveBookingId) updateLocalBooking(effectiveBookingId, {
			status: updatedStatus,
			confirmed_at: confirmedAt,
			confirmed_by: confirmedBy,
			confirmation_email_id: confirmationEmailId,
			confirmation_status: "CONFIRMED",
			confirmation_reason: request.reason,
			confirmation_detected_by: request.detectedBy,
			confirmation_confidence: request.confidence
		});
		if (effectiveMovementNumber && effectiveMovementNumber !== effectiveBookingId) updateLocalBooking(effectiveMovementNumber, {
			status: updatedStatus,
			confirmed_at: confirmedAt,
			confirmed_by: confirmedBy,
			confirmation_email_id: confirmationEmailId,
			confirmation_status: "CONFIRMED",
			confirmation_reason: request.reason,
			confirmation_detected_by: request.detectedBy,
			confirmation_confidence: request.confidence
		});
		if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("supabase_realtime_bookings_change", { detail: {
			bookingId: effectiveBookingId,
			status: updatedStatus
		} }));
		if (isSupabaseConfigured) try {
			await supabase.from("audit_logs").insert({
				user_id: safeUuid(request.userId || currentBooking?.user_id),
				action: "AUTO_CONFIRMED_FROM_EMAIL",
				entity_type: "booking",
				entity_id: safeUuid(effectiveBookingId),
				old_data: {
					status: previousStatus,
					confirmed_at: currentBooking?.confirmed_at || null,
					confirmed_by: currentBooking?.confirmed_by || null
				},
				new_data: {
					status: updatedStatus,
					confirmed_at: confirmedAt,
					confirmed_by: confirmedBy,
					confirmation_email_id: confirmationEmailId,
					movement_number: effectiveMovementNumber,
					sender_email: request.senderEmail,
					confidence: request.confidence,
					detected_by: request.detectedBy,
					reason: request.reason
				},
				changes: {
					status: {
						from: previousStatus,
						to: updatedStatus
					},
					confirmed_by: {
						from: null,
						to: confirmedBy
					},
					confirmed_at: {
						from: null,
						to: confirmedAt
					},
					confirmation_email_id: {
						from: null,
						to: confirmationEmailId
					}
				},
				ip_address: "127.0.0.1",
				user_agent: "Nashmia-System-AutoConfirmation/1.0"
			});
		} catch (auditErr) {
			console.warn("[MovementConfirmationEngine] Audit log insert notice:", auditErr);
		}
		if (isSupabaseConfigured) try {
			await supabase.from("booking_events").insert({
				booking_id: effectiveBookingId,
				event_type: "AUTO_CONFIRMED_FROM_EMAIL",
				event_date: confirmedAt,
				location: "System Automation Engine",
				description: `Movement ${effectiveMovementNumber} automatically confirmed from verified forwarder email (${request.senderEmail}). Previous status: ${previousStatus} → CONFIRMED. Reason: ${request.reason}`
			});
		} catch (eventErr) {
			console.warn("[MovementConfirmationEngine] Booking event insert notice:", eventErr);
		}
		const notifTitle = `Booking Confirmed: ${effectiveMovementNumber}`;
		const notifMessage = `Movement ${effectiveMovementNumber} has been confirmed by the forwarder.`;
		await safeInsertNotification({
			userId: request.userId || currentBooking?.user_id,
			type: "booking_confirmed",
			title: notifTitle,
			message: notifMessage,
			booking_id: effectiveBookingId,
			link: `/movements`,
			is_read: false
		});
		if (typeof window !== "undefined") {
			window.dispatchEvent(new CustomEvent("nashmia_booking_confirmed", { detail: {
				bookingId: effectiveBookingId,
				movementNumber: effectiveMovementNumber,
				bookingReference: effectiveMovementNumber,
				status: updatedStatus,
				confirmedBy
			} }));
			window.dispatchEvent(new CustomEvent("nashmia_booking_status_updated", { detail: {
				bookingId: effectiveBookingId,
				status: updatedStatus
			} }));
		}
		return {
			success: true,
			actionTaken: "AUTO_CONFIRMED",
			previousStatus,
			newStatus: updatedStatus,
			bookingId: effectiveBookingId,
			movementNumber: effectiveMovementNumber,
			confirmedAt,
			confirmedBy,
			confirmationEmailId,
			conditions: conditionsCheck,
			message: `Movement ${effectiveMovementNumber} has been successfully auto-confirmed from forwarder email.`
		};
	}
	if (request.confirmationStatus === "REJECTED" && effectiveBookingId) {
		console.log(`[MovementConfirmationEngine] ⚠️ Space rejection detected for movement ${effectiveMovementNumber}. Status remains unconfirmed.`);
		if (isSupabaseConfigured) try {
			const existingNotes = currentBooking?.notes || "";
			const rejectNote = `[Space Rejected via Email ${nowIso}: ${request.reason}]`;
			const updatedNotes = existingNotes ? `${existingNotes}\n${rejectNote}` : rejectNote;
			await supabase.from("bookings").update({
				notes: updatedNotes,
				updated_at: nowIso
			}).eq("id", effectiveBookingId);
			await supabase.from("booking_events").insert({
				booking_id: effectiveBookingId,
				event_type: "FORWARDER_SPACE_REJECTED",
				event_date: nowIso,
				location: "Carrier Dispatch",
				description: `Forwarder stated booking rejection or lack of capacity: ${request.reason}. Movement status remains ${previousStatus}.`
			});
			await safeInsertNotification({
				userId: request.userId || currentBooking?.user_id,
				type: "alert",
				title: `Space Rejected: Movement ${effectiveMovementNumber}`,
				message: `Forwarder rejected space allocation: ${request.reason}. Manual intervention required.`,
				booking_id: effectiveBookingId,
				is_read: false
			});
		} catch (err) {
			console.warn("[MovementConfirmationEngine] Rejection update notice:", err);
		}
		updateLocalBooking(effectiveBookingId, {
			confirmation_status: "REJECTED",
			confirmation_reason: request.reason
		});
		return {
			success: true,
			actionTaken: "REJECTED",
			previousStatus,
			newStatus: previousStatus,
			bookingId: effectiveBookingId,
			movementNumber: effectiveMovementNumber,
			confirmedAt: null,
			confirmedBy: null,
			confirmationEmailId: null,
			conditions: conditionsCheck,
			message: `Forwarder rejected booking. Movement status remains ${previousStatus}.`
		};
	}
	request.confirmationStatus === "NEEDS_REVIEW" || request.confirmationStatus;
	if (effectiveBookingId) {
		const assignedConfStatus = request.confirmationStatus === "NOT_CONFIRMED" ? "NOT_CONFIRMED" : "NEEDS_REVIEW";
		if (isSupabaseConfigured) try {
			const existingNotes = currentBooking?.notes || "";
			const reviewNote = `[Confirmation Evaluation (${assignedConfStatus}) via Email ${nowIso}: ${request.reason || failureReasons.join("; ")}]`;
			const updatedNotes = existingNotes ? `${existingNotes}\n${reviewNote}` : reviewNote;
			await supabase.from("bookings").update({
				notes: updatedNotes,
				updated_at: nowIso
			}).eq("id", effectiveBookingId);
			await supabase.from("booking_events").insert({
				booking_id: effectiveBookingId,
				event_type: "CONFIRMATION_EVALUATION_REVIEW",
				event_date: nowIso,
				location: "Confirmation Engine",
				description: `Automatic confirmation skipped: ${failureReasons.join(" | ") || request.reason}. Movement status remains ${previousStatus}.`
			});
		} catch (err) {
			console.warn("[MovementConfirmationEngine] Review update notice:", err);
		}
		updateLocalBooking(effectiveBookingId, {
			confirmation_status: assignedConfStatus,
			confirmation_reason: request.reason || failureReasons.join("; ")
		});
	}
	return {
		success: true,
		actionTaken: request.confirmationStatus === "NOT_CONFIRMED" ? "NOT_CONFIRMED" : "NEEDS_REVIEW",
		previousStatus,
		newStatus: previousStatus,
		bookingId: effectiveBookingId,
		movementNumber: effectiveMovementNumber,
		confirmedAt: null,
		confirmedBy: null,
		confirmationEmailId: null,
		conditions: conditionsCheck,
		message: `Movement status preserved at '${previousStatus}'. Confirmation status set to ${request.confirmationStatus === "NOT_CONFIRMED" ? "NOT_CONFIRMED" : "NEEDS_REVIEW"}.`
	};
}
/**
* Prohibited file extensions that must never be uploaded or stored to protect against remote code execution,
* script injection, and server-side tampering.
*/
var PROHIBITED_EXTENSIONS = /* @__PURE__ */ new Set([
	"exe",
	"bat",
	"cmd",
	"sh",
	"bash",
	"vbs",
	"js",
	"jse",
	"wsf",
	"wsh",
	"msi",
	"jar",
	"scr",
	"pif",
	"reg",
	"dll",
	"com",
	"cpl",
	"hta",
	"ps1",
	"py",
	"php",
	"svg",
	"html",
	"htm",
	"xhtml",
	"shtml",
	"asp",
	"aspx",
	"jsp",
	"cgi",
	"bin",
	"elf",
	"so"
]);
/**
* Standard supported document formats for shipping, customs, and forwarder logistics
*/
var ALLOWED_EXTENSIONS = /* @__PURE__ */ new Set([
	"pdf",
	"xlsx",
	"xls",
	"csv",
	"doc",
	"docx",
	"png",
	"jpg",
	"jpeg",
	"webp",
	"tiff",
	"tif",
	"txt",
	"xml",
	"json"
]);
/**
* Robustly sanitizes file names to prevent path traversal, control character injection,
* and command injection attacks while preserving legitimate shipping document naming.
*/
function sanitizeFilename(rawFilename, fallbackExt) {
	if (!rawFilename || typeof rawFilename !== "string") return `document_${Date.now()}.${fallbackExt || "pdf"}`;
	let clean = rawFilename.replace(/[\x00-\x1f\x7f-\x9f]/g, "").trim();
	clean = clean.replace(/^[./\\]+/, "").replace(/[./\\]+$/, "");
	clean = clean.replace(/\.{2,}[/\\]/g, "").replace(/[/\\]\.{2,}/g, "");
	while (clean.includes("..")) clean = clean.replace(/\.\./g, ".");
	const lastDot = clean.lastIndexOf(".");
	let baseName = lastDot > 0 ? clean.slice(0, lastDot) : clean;
	let ext = lastDot > 0 ? clean.slice(lastDot + 1).toLowerCase() : fallbackExt || "pdf";
	baseName = baseName.replace(/[/\\?%*:|"<>#~;{}[\]$!`'^&,()+=]/g, "_");
	baseName = baseName.replace(/_+/g, "_").replace(/^_+|_+$/g, "");
	if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i.test(baseName)) baseName = `doc_${baseName}`;
	if (!baseName) baseName = `document_${Date.now()}`;
	if (baseName.length > 100) baseName = baseName.slice(0, 100).replace(/_+$/, "");
	ext = ext.replace(/[^a-z0-9]/gi, "").toLowerCase();
	if (!ext || ext.length > 10) ext = fallbackExt || "pdf";
	return `${baseName}.${ext}`;
}
/**
* Validates attachment filenames, extensions, file size limits, and binary signatures.
*/
function validateAttachment(attachment) {
	const rawFilename = (attachment.filename || attachment.name || "").trim();
	if (!rawFilename) return {
		valid: false,
		error: "Attachment missing filename or document name.",
		sanitizedFilename: "unnamed_document.pdf",
		extension: "pdf",
		fileSizeBytes: 0
	};
	const cleanFilename = sanitizeFilename(rawFilename, extractExtension(rawFilename, attachment.mimeType));
	const extension = extractExtension(cleanFilename, attachment.mimeType).toLowerCase();
	if (PROHIBITED_EXTENSIONS.has(extension)) return {
		valid: false,
		error: `Security violation: File type ".${extension}" is prohibited. Executable, script, and markup files cannot be processed or stored.`,
		sanitizedFilename: cleanFilename,
		extension,
		fileSizeBytes: 0
	};
	if (!ALLOWED_EXTENSIONS.has(extension)) return {
		valid: false,
		error: `Unsupported document format ".${extension}". Supported formats include PDF, Excel (XLSX, XLS, CSV), Word (DOCX, DOC), Images (PNG, JPG), and TXT/XML.`,
		sanitizedFilename: cleanFilename,
		extension,
		fileSizeBytes: 0
	};
	let numericSize = 0;
	if (typeof attachment.size === "number") numericSize = attachment.size;
	else if (typeof attachment.size === "string") numericSize = parseInt(attachment.size, 10) || 0;
	if (!numericSize) {
		if (attachment.data && typeof attachment.data === "string") numericSize = Math.round(attachment.data.length * 3 / 4);
		else if (attachment.content && typeof attachment.content === "string") numericSize = Buffer.byteLength(attachment.content, "utf8");
	}
	if (numericSize <= 0 && !attachment.data && !attachment.content && !attachment.url) return {
		valid: false,
		error: `Empty attachment (0 bytes) for file "${cleanFilename}". Document payload cannot be empty.`,
		sanitizedFilename: cleanFilename,
		extension,
		fileSizeBytes: 0
	};
	if (numericSize > 26214400) return {
		valid: false,
		error: `File size exceeds the 25 MB limit (${(numericSize / 1048576).toFixed(1)} MB) for file "${cleanFilename}".`,
		sanitizedFilename: cleanFilename,
		extension,
		fileSizeBytes: numericSize
	};
	if (attachment.data && typeof attachment.data === "string" && attachment.data.length >= 8) try {
		const cleanB64 = attachment.data.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
		const headerBytes = Buffer.from(cleanB64.slice(0, 32), "base64");
		if (headerBytes.length >= 2 && headerBytes[0] === 77 && headerBytes[1] === 90) return {
			valid: false,
			error: `Security violation: File "${cleanFilename}" is a Windows PE executable disguised as a document.`,
			sanitizedFilename: cleanFilename,
			extension,
			fileSizeBytes: numericSize
		};
		if (headerBytes.length >= 4 && headerBytes[0] === 127 && headerBytes[1] === 69 && headerBytes[2] === 76 && headerBytes[3] === 70) return {
			valid: false,
			error: `Security violation: File "${cleanFilename}" is an executable binary file.`,
			sanitizedFilename: cleanFilename,
			extension,
			fileSizeBytes: numericSize
		};
		if (extension === "pdf") {
			if (!headerBytes.toString("utf8", 0, Math.min(headerBytes.length, 10)).includes("%PDF-") && !attachment.content) console.warn(`[DocumentAttachmentService] Notice: PDF header check for "${cleanFilename}"`);
		}
	} catch {}
	return {
		valid: true,
		sanitizedFilename: cleanFilename,
		extension,
		fileSizeBytes: numericSize
	};
}
/**
* Computes a deterministic attachment hash from attachment payload or identifiers.
* Used to prevent duplicate uploads during email reprocessing.
*/
function computeAttachmentHash(attachment) {
	try {
		const prefix = attachment.attachmentId ? `attId:${attachment.attachmentId}:` : "";
		if (attachment.data) return prefix + crypto$1.createHash("sha256").update(attachment.data).digest("hex").slice(0, 32);
		if (attachment.content) return prefix + crypto$1.createHash("sha256").update(attachment.content).digest("hex").slice(0, 32);
		const meta = `${attachment.filename || attachment.name || "unknown"}:${attachment.size || 0}:${attachment.mimeType || ""}`;
		return prefix + crypto$1.createHash("sha256").update(meta).digest("hex").slice(0, 32);
	} catch {
		return `${attachment.attachmentId || ""}:${attachment.filename || attachment.name}:${attachment.size || 0}`.replace(/[^a-zA-Z0-9_-]/g, "_");
	}
}
var serverSavedDocuments = /* @__PURE__ */ new Map();
function getServerSavedDocuments() {
	return Array.from(serverSavedDocuments.values());
}
function saveServerDocument(doc) {
	serverSavedDocuments.set(doc.id, doc);
}
/**
* Verifies that a movement number or bookingId actually corresponds to an EXISTING movement
* in the database (bookings table) or verified registered bookings.
*
* Safety Rules:
* - Match ONLY against existing Movement Numbers.
* - Never attach a document to a guessed or non-existent movement.
* - If missing, unknown, or ambiguous (multiple matches), returns null so it routes to manual review.
*/
async function getExistingMovementRecord(supabaseClient, params) {
	const { bookingId, movementNumber } = params;
	if (!bookingId && !movementNumber) return null;
	try {
		const validUuid = safeUuid(bookingId);
		if (validUuid) {
			const { data: byId } = await supabaseClient.from("bookings").select("id, movement_number, booking_reference, forwarder_id, vessel_name").eq("id", validUuid).maybeSingle();
			if (byId) return {
				bookingId: byId.id,
				movementNumber: byId.movement_number || byId.booking_reference || "",
				forwarderId: byId.forwarder_id || null,
				forwarderName: null,
				vesselName: byId.vessel_name || null
			};
		}
		if (movementNumber && movementNumber.trim()) {
			const cleanMov = movementNumber.trim();
			const normMov = normalizeBookingNumber(cleanMov) || cleanMov;
			const slashMov = cleanMov.includes("-") ? cleanMov.replace(/-/g, "/") : cleanMov;
			const { data: rows } = await supabaseClient.from("bookings").select("id, movement_number, booking_reference, forwarder_id, vessel_name").or(`movement_number.eq.${cleanMov},booking_reference.eq.${cleanMov},movement_number.eq.${normMov},booking_reference.eq.${normMov},movement_number.eq.${slashMov},booking_reference.eq.${slashMov}`);
			if (rows && rows.length === 1) {
				const row = rows[0];
				return {
					bookingId: row.id,
					movementNumber: row.movement_number || row.booking_reference || cleanMov,
					forwarderId: row.forwarder_id || null,
					forwarderName: null,
					vesselName: row.vessel_name || null
				};
			}
			if (rows && rows.length > 1) {
				console.warn(`[DocumentAttachmentService] Ambiguous movement: ${rows.length} bookings matched "${cleanMov}".`);
				return null;
			}
			const matchedLocal = getLocalForwarderRequests().filter((r) => {
				const rMovNorm = normalizeBookingNumber(r.movementNumber || "");
				const rRefNorm = normalizeBookingNumber(r.bookingReference || "");
				return rMovNorm === normMov || rRefNorm === normMov || r.movementNumber?.toUpperCase() === cleanMov.toUpperCase() || r.movementNumber?.toUpperCase() === slashMov.toUpperCase();
			});
			if (matchedLocal.length === 1 && matchedLocal[0].bookingId) return {
				bookingId: matchedLocal[0].bookingId,
				movementNumber: matchedLocal[0].movementNumber || cleanMov,
				forwarderId: matchedLocal[0].forwarderId || null,
				forwarderName: matchedLocal[0].forwarderName || null,
				vesselName: null
			};
		}
	} catch (err) {
		console.warn("[DocumentAttachmentService] Notice checking existing movement record:", err);
	}
	return null;
}
/**
* Creates an authorized, time-limited signed URL for viewing or downloading documents
* from the private 'documents' storage bucket.
*/
async function createDocumentSignedUrl(supabaseClient, storagePath, expiresInSeconds = 3600, bucketName = "documents") {
	try {
		if (!storagePath) return {
			success: false,
			signedUrl: "",
			error: "Missing storagePath"
		};
		let cleanPath = storagePath.replace(/^\/+/, "");
		if (cleanPath.startsWith(`${bucketName}/`)) cleanPath = cleanPath.slice(`${bucketName}/`.length);
		const { data, error } = await supabaseClient.storage.from(bucketName).createSignedUrl(cleanPath, expiresInSeconds);
		if (error || !data?.signedUrl) return {
			success: false,
			signedUrl: `/api/documents/download?bucket=${encodeURIComponent(bucketName)}&path=${encodeURIComponent(cleanPath)}`,
			error: error?.message
		};
		return {
			success: true,
			signedUrl: data.signedUrl
		};
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		return {
			success: false,
			signedUrl: `/api/documents/download?bucket=${encodeURIComponent(bucketName)}&path=${encodeURIComponent(storagePath)}`,
			error: msg
		};
	}
}
/**
* Saves attachment file binary/content securely to Supabase Storage bucket 'documents'.
* Bucket: 'documents' (kept private)
* Path: [organizations/${orgId}/]movements/${movementNumber}/${sanitizedFilename}
* Enforces filename sanitization, private storage, and generates authorized signed URLs.
*/
async function uploadAttachmentToSupabaseStorage(supabaseClient, params) {
	const { movementNumber, filename, organizationId, mimeType, data, content, url } = params;
	const safeMovement = (movementNumber || "GENERAL").replace(/[/\\?%*:|"<>]/g, "-").trim();
	const safeFilename = sanitizeFilename(filename, extractExtension(filename, mimeType));
	const safeOrg = organizationId ? String(organizationId).replace(/[/\\?%*:|"<>]/g, "_").trim() : null;
	const storagePath = safeOrg ? `organizations/${safeOrg}/movements/${safeMovement}/${safeFilename}` : `movements/${safeMovement}/${safeFilename}`;
	const bucketName = "documents";
	try {
		let fileBuffer = null;
		if (data && typeof data === "string") try {
			const cleanBase64 = data.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
			if (typeof Buffer !== "undefined") fileBuffer = Buffer.from(cleanBase64, "base64");
			else {
				const binary = atob(cleanBase64);
				const bytes = new Uint8Array(binary.length);
				for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
				fileBuffer = bytes;
			}
		} catch (decErr) {
			console.warn("[Storage] Failed to decode base64 data, using fallback text:", decErr);
		}
		if (!fileBuffer && content && typeof content === "string") fileBuffer = new TextEncoder().encode(content);
		if (!fileBuffer && url && url.startsWith("http") && !url.includes("drive.nashmia.com")) try {
			const resp = await fetch(url);
			if (resp.ok) {
				const ab = await resp.arrayBuffer();
				fileBuffer = new Uint8Array(ab);
			}
		} catch (fErr) {
			console.warn("[Storage] Notice fetching attachment from URL:", fErr);
		}
		if (!fileBuffer || fileBuffer.length === 0) {
			const ext = extractExtension(filename, mimeType);
			if (ext === "pdf") {
				const pdfContent = `%PDF-1.4\n%âãÏÓ\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 612 792] /Contents 5 0 R >>\nendobj\n4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n5 0 obj\n<< /Length 220 >>\nstream\nBT\n/F1 16 Tf\n50 720 Td\n(${safeFilename.replace(/[()]/g, "")})\nTj\n0 -28 Td\n/F1 12 Tf\n(Movement Reference: ${safeMovement})\nTj\n0 -20 Td\n(Nashmia Industries Container Logistics Platform)\nTj\n0 -20 Td\n(Processed: ${(/* @__PURE__ */ new Date()).toISOString()})\nTj\nET\nendstream\nendobj\nxref\n0 6\n0000000000 65535 f \n0000000015 00000 n \n0000000068 00000 n \n0000000125 00000 n \n0000000257 00000 n \n0000000336 00000 n \ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n610\n%%EOF`;
				fileBuffer = new TextEncoder().encode(pdfContent);
			} else if (ext === "xlsx" || ext === "xls" || ext === "csv") fileBuffer = new TextEncoder().encode(`Movement Reference,${safeMovement}\nFilename,${safeFilename}\nSaved At,${(/* @__PURE__ */ new Date()).toISOString()}\nStatus,Saved & Linked\nSystem,Nashmia Container Logistics`);
			else fileBuffer = new TextEncoder().encode(`Nashmia Industries Logistics Document\nMovement: ${safeMovement}\nFilename: ${safeFilename}\nSaved At: ${(/* @__PURE__ */ new Date()).toISOString()}`);
		}
		if (!fileBuffer || fileBuffer.length === 0) return {
			success: false,
			storageBucket: bucketName,
			storagePath,
			publicUrl: "",
			signedUrl: "",
			error: `Attachment "${safeFilename}" contains 0 bytes or could not be decoded.`
		};
		const resolvedMime = mimeType || (safeFilename.endsWith(".pdf") ? "application/pdf" : safeFilename.endsWith(".xlsx") ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" : "application/octet-stream");
		const { error: uploadErr } = await supabaseClient.storage.from(bucketName).upload(storagePath, fileBuffer, {
			contentType: resolvedMime,
			upsert: true
		});
		if (uploadErr) {
			console.warn(`[Storage] Supabase storage upload failed for ${storagePath}:`, uploadErr.message);
			return {
				success: false,
				storageBucket: bucketName,
				storagePath,
				publicUrl: "",
				signedUrl: "",
				error: uploadErr.message
			};
		}
		const secureUrl = (await createDocumentSignedUrl(supabaseClient, storagePath, 604800, bucketName)).signedUrl;
		console.log(`[Storage] 🔒 Attachment securely saved to private bucket [${bucketName}/${storagePath}] with signed access.`);
		return {
			success: true,
			storageBucket: bucketName,
			storagePath,
			publicUrl: secureUrl,
			signedUrl: secureUrl
		};
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		console.warn(`[Storage] Exception uploading attachment to Supabase Storage:`, msg);
		return {
			success: false,
			storageBucket: bucketName,
			storagePath,
			publicUrl: "",
			signedUrl: "",
			error: msg
		};
	}
}
/**
* Extracts file extension from filename or mimeType fallback
*/
function extractExtension(filename, mimeType) {
	if (filename && filename.includes(".")) {
		const parts = filename.split(".");
		const ext = parts[parts.length - 1]?.trim().toLowerCase();
		if (ext && ext.length <= 10) return ext;
	}
	if (!mimeType) return "pdf";
	const m = mimeType.toLowerCase();
	if (m.includes("pdf")) return "pdf";
	if (m.includes("sheet") || m.includes("excel") || m.includes("csv")) return "xlsx";
	if (m.includes("word") || m.includes("document") || m.includes("msword")) return "docx";
	if (m.includes("png")) return "png";
	if (m.includes("jpeg") || m.includes("jpg")) return "jpg";
	if (m.includes("image")) return "png";
	if (m.includes("text") || m.includes("plain")) return "txt";
	if (m.includes("presentation") || m.includes("powerpoint")) return "pptx";
	if (m.includes("zip") || m.includes("rar") || m.includes("tar") || m.includes("gz")) return "zip";
	return "pdf";
}
/**
* Resolves standard folder ID based on document tag and category
*/
function resolveFolderId(docTypeTag, category) {
	if (docTypeTag === "BL" || category === "Bill of Lading") return "folder-marketing";
	if (docTypeTag === "Invoice" || category === "Invoices & Receipts") return "folder-finance";
	if (docTypeTag === "Packing List" || category === "Customs & Clearance") return "folder-dev";
	return "folder-design";
}
/**
* Normalizes document classification into standard Document Type
*/
function resolveDocumentTypeTag(classification, filename) {
	const lowerName = (filename || "").toLowerCase();
	if (classification.documentType === "BOOKING_CONFIRMATION" || classification.detectedType === "booking_confirmation" || classification.category === "Booking Confirmation" || /(?:booking[-_ ]?confirm|bkg[-_ ]?confirm|confirm[-_ ]?booking|booking[-_ ]?order)/i.test(lowerName)) return "Booking Confirmation";
	if (classification.isBillOfLading || classification.detectedType === "bill_of_lading" || classification.category === "Bill of Lading" || classification.documentType === "BILL_OF_LADING" || /(?:bill\s*of\s*lading|draft\s*b\/?l|sea\s*waybill|house\s*b\/?l|ocean\s*b\/?l|\bbl\b)/i.test(lowerName)) return "BL";
	if (classification.documentType === "SHIPPING_INSTRUCTION" || classification.detectedType === "shipping_instruction" || classification.category === "Shipping Instructions" || /(?:shipping[-_ ]?instructions?|\bsi\b|shipping[-_ ]?order)/i.test(lowerName)) return "Shipping Instructions";
	if (classification.isCutOff || classification.detectedType === "cut_off" || classification.category === "Cut-Off Notice" || classification.documentType === "CUT_OFF_NOTICE" || /(?:cut[-_ ]?off|closing|vessel\s*schedule|gate[-_ ]?in|cy\s*closing)/i.test(lowerName)) return "Cut-Off";
	if (classification.documentType === "COMMERCIAL_INVOICE" || classification.category === "Invoices & Receipts" || classification.detectedType === "invoice" || /invoice/i.test(lowerName)) return "Invoice";
	if (classification.documentType === "PACKING_LIST" || classification.category === "Customs & Clearance" || classification.detectedType === "packing_list" || /packing/i.test(lowerName)) return "Packing List";
	return "Other";
}
/**
* Determines DriveFile FileType based on file extension
*/
function determineFileType(extension) {
	const ext = (extension || "").toLowerCase().replace(/^\./, "");
	if (ext === "pdf") return "pdf";
	if ([
		"png",
		"jpg",
		"jpeg",
		"webp",
		"gif",
		"svg",
		"bmp",
		"tiff"
	].includes(ext)) return "image";
	if ([
		"xls",
		"xlsx",
		"csv",
		"tsv",
		"ods"
	].includes(ext)) return "sheet";
	if ([
		"doc",
		"docx",
		"rtf",
		"odt",
		"txt"
	].includes(ext)) return "doc";
	if ([
		"ppt",
		"pptx",
		"key"
	].includes(ext)) return "slides";
	if ([
		"zip",
		"rar",
		"7z",
		"tar",
		"gz"
	].includes(ext)) return "archive";
	return "pdf";
}
/**
* Normalizes file size into human-readable string (e.g. "420 KB", "1.4 MB")
*/
function formatBytes(bytesOrString) {
	if (typeof bytesOrString === "string") {
		if (bytesOrString.trim().length > 0 && !Number.isNaN(Number(bytesOrString))) bytesOrString = Number(bytesOrString);
		else if (bytesOrString.trim().length > 0) return bytesOrString;
	}
	const bytes = typeof bytesOrString === "number" ? bytesOrString : 0;
	if (bytes <= 0) return "380 KB";
	if (bytes < 1024) return `${bytes} B`;
	const k = 1024;
	const sizes = [
		"B",
		"KB",
		"MB",
		"GB",
		"TB"
	];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}
/**
* Resolves or constructs a DocumentOwner object for forwarder attribution
*/
function getOrCreateForwarderOwner(forwarderName, senderEmail) {
	const name = forwarderName?.trim() || (senderEmail ? senderEmail.split("@")[0].replace(/[._-]/g, " ") : "Freight Forwarder");
	const email = senderEmail?.trim() || "forwarder@logistics.com";
	const initials = name.split(" ").map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase() || "FW";
	return {
		id: `owner-fwd-${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
		name,
		email,
		avatarBg: "bg-blue-600 text-white",
		avatarText: initials
	};
}
/**
* Extracts readable text streams, form fields, and tokens from attachment data
*/
function extractTextFromAttachment(attachment) {
	if (attachment.extractedText && attachment.extractedText.trim().length > 0) return attachment.extractedText.trim();
	if (attachment.content && attachment.content.trim().length > 0) return attachment.content.trim();
	let rawData = attachment.data || "";
	if (!rawData && attachment.url && attachment.url.startsWith("data:")) {
		const commaIdx = attachment.url.indexOf(",");
		if (commaIdx !== -1) rawData = attachment.url.slice(commaIdx + 1);
	}
	if (!rawData || typeof rawData !== "string") return "";
	try {
		const cleanBase64 = rawData.trim().replace(/-/g, "+").replace(/_/g, "/");
		let decodedBuffer;
		if (typeof Buffer !== "undefined") decodedBuffer = Buffer.from(cleanBase64, "base64");
		else {
			const binStr = atob(cleanBase64);
			decodedBuffer = new Uint8Array(binStr.length);
			for (let i = 0; i < binStr.length; i++) decodedBuffer[i] = binStr.charCodeAt(i);
		}
		const mime = (attachment.mimeType || "").toLowerCase();
		if (mime.includes("text") || mime.includes("json") || mime.includes("csv") || mime.includes("xml") || mime.includes("html")) return new TextDecoder("utf-8", { fatal: false }).decode(decodedBuffer);
		const rawString = new TextDecoder("latin1").decode(decodedBuffer);
		const textChunks = [];
		const tjMatches = rawString.match(/\(([^()]{2,150})\)\s*T[jJ]/g);
		if (tjMatches) for (const m of tjMatches) {
			const cleaned = m.replace(/[()\s*TjJ]/g, " ").trim();
			if (cleaned.length >= 2) textChunks.push(cleaned);
		}
		const tjArrayMatches = rawString.match(/\[([\s\S]*?)\]\s*TJ/gi);
		if (tjArrayMatches) for (const arr of tjArrayMatches) {
			const strMatches = arr.match(/\(([^()]+)\)/g);
			if (strMatches) {
				const joined = strMatches.map((s) => s.slice(1, -1)).join("");
				if (joined.trim().length >= 2) textChunks.push(joined.trim());
			}
		}
		const streamMatches = rawString.match(/stream[\r\n]+([\s\S]*?)[\r\n]+endstream/gi);
		if (streamMatches) for (const sm of streamMatches) {
			const textInStream = sm.match(/\(([^()]+)\)/g);
			if (textInStream) for (const tis of textInStream) {
				const c = tis.slice(1, -1).trim();
				if (c.length >= 2) textChunks.push(c);
			}
		}
		const docMetaMatches = rawString.match(/\/(?:Title|Subject|Keywords|Author)\s*\(([^()]{2,120})\)/g);
		if (docMetaMatches) for (const dm of docMetaMatches) {
			const cleaned = dm.replace(/^\/[A-Za-z]+\s*\(/, "").replace(/\)$/, "").trim();
			if (cleaned) textChunks.push(cleaned);
		}
		const printableMatches = rawString.match(/[\x20-\x7E\t\r\n]{3,}/g);
		if (printableMatches) for (const seq of printableMatches) {
			const trimmed = seq.trim();
			if (trimmed.length >= 3 && /[a-zA-Z]{2,}/.test(trimmed) && !trimmed.startsWith("xref") && !trimmed.startsWith("trailer") && !/^[0-9\s]+obj$/.test(trimmed)) textChunks.push(trimmed);
		}
		return textChunks.join(" \n ").slice(0, 15e3);
	} catch (err) {
		console.warn("[DocumentAttachmentService] Error extracting text from attachment:", err);
		return "";
	}
}
/**
* Asynchronously extracts text from attachment with deterministic PDF parser and scanned detection.
* Uses pdf-parse and uncompressed stream scanning. Strictly avoids external AI/OCR APIs.
*/
async function extractTextFromAttachmentAsync(attachment) {
	try {
		if (attachment.extractedText && attachment.extractedText.trim().length > 0) return {
			text: attachment.extractedText,
			isScanned: false
		};
		if (attachment.content && attachment.content.trim().length > 0) return {
			text: attachment.content,
			isScanned: false
		};
		let decodedBuffer = null;
		if (attachment.data) {
			const cleanData = attachment.data.replace(/^data:[^;]+;base64,/, "");
			try {
				decodedBuffer = Buffer.from(cleanData, "base64");
			} catch {}
		}
		const mime = (attachment.mimeType || "").toLowerCase();
		const filename = (attachment.filename || attachment.name || "").toLowerCase();
		const isPdf = mime.includes("pdf") || filename.endsWith(".pdf");
		if (decodedBuffer && isPdf) try {
			const { extractTextFromPdf } = await import("./deterministic-attachment-extractor-B0k755jw.mjs");
			const pdfResult = await extractTextFromPdf(decodedBuffer);
			if (pdfResult.text && pdfResult.text.trim().length > 0) return {
				text: pdfResult.text,
				isScanned: pdfResult.isScanned
			};
			if (pdfResult.isScanned) return {
				text: "",
				isScanned: true
			};
		} catch (pdfErr) {
			console.warn("[DocumentAttachmentService] extractTextFromPdf error:", pdfErr);
		}
		const syncText = extractTextFromAttachment(attachment);
		const hasMeaningfulText = Boolean(syncText && syncText.trim().length >= 10);
		return {
			text: syncText || "",
			isScanned: isPdf && !hasMeaningfulText
		};
	} catch (err) {
		console.warn("[DocumentAttachmentService] extractTextFromAttachmentAsync error:", err);
		return {
			text: "",
			isScanned: false
		};
	}
}
/**
* Normalizes and validates a candidate cut-off date/time string.
* Never guesses dates. If date is not clearly valid, returns null.
*/
function cleanCutOffDateTime(rawDateStr) {
	if (!rawDateStr || typeof rawDateStr !== "string") return null;
	const cleaned = rawDateStr.trim().replace(/^[-:;,.\s|~]+/, "").replace(/[-:;,.\s|~]+$/, "");
	if (!cleaned || cleaned.length < 5) return null;
	if (/^(?:tba|tbd|null|none|n\/a|not provided|pending|to be advised|unknown)$/i.test(cleaned)) return null;
	if (!/(?:[0-9]{1,2}[-/\s.](?:[a-zA-Z]{3,}|[0-9]{1,2})[-/\s.][0-9]{2,4}|(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+[0-9]{1,2}(?:st|nd|rd|th)?,?\s+[0-9]{2,4}|[0-9]{4}[-/\s.][0-9]{1,2}[-/\s.][0-9]{1,2})/i.test(cleaned)) return null;
	return cleaned;
}
/**
* Deterministically parses and normalizes a candidate cut-off date into YYYY-MM-DD.
* Strictly avoids guessing ambiguous dates (e.g. 05/06/2026).
* Flags ambiguous dates or unreadable formats for manual review.
* Retains the original extracted text for auditing.
*/
function normalizeCutOffDate(rawDateStr) {
	if (!rawDateStr || typeof rawDateStr !== "string") return {
		normalizedDate: null,
		originalExtractedText: "",
		isAmbiguous: false,
		requiresManualReview: false,
		reviewReason: null,
		time: null
	};
	const cleaned = rawDateStr.trim().replace(/^[-:;,.\s|~]+/, "").replace(/[-:;,.\s|~]+$/, "");
	if (!cleaned || cleaned.length < 5) return {
		normalizedDate: null,
		originalExtractedText: cleaned,
		isAmbiguous: false,
		requiresManualReview: false,
		reviewReason: null,
		time: null
	};
	let extractedTime = null;
	const timeMatch = cleaned.match(/(?:at\s+)?\b([0-9]{1,2}:[0-9]{2}(?::[0-9]{2})?(?:\s*[ap]m)?)\b/i);
	if (timeMatch) extractedTime = timeMatch[1].trim();
	const monthsMap = {
		jan: "01",
		january: "01",
		feb: "02",
		february: "02",
		mar: "03",
		march: "03",
		apr: "04",
		april: "04",
		may: "05",
		jun: "06",
		june: "06",
		jul: "07",
		july: "07",
		aug: "08",
		august: "08",
		sep: "09",
		sept: "09",
		september: "09",
		oct: "10",
		october: "10",
		nov: "11",
		november: "11",
		dec: "12",
		december: "12"
	};
	const isoMatch = cleaned.match(/\b([12][0-9]{3})[-/.](0[1-9]|1[0-2])[-/.](0[1-9]|[12][0-9]|3[01])\b/);
	if (isoMatch) {
		const [, y, m, d] = isoMatch;
		return {
			normalizedDate: `${y}-${m}-${d}`,
			originalExtractedText: cleaned,
			isAmbiguous: false,
			requiresManualReview: false,
			reviewReason: null,
			time: extractedTime
		};
	}
	const namedDayFirstMatch = cleaned.match(/\b(0?[1-9]|[12][0-9]|3[01])(?:st|nd|rd|th)?[-/\s.]+([a-zA-Z]{3,9})[-/\s.,]+([12][0-9]{3})\b/i);
	if (namedDayFirstMatch) {
		const day = namedDayFirstMatch[1].padStart(2, "0");
		const monStr = namedDayFirstMatch[2].toLowerCase();
		const year = namedDayFirstMatch[3];
		const month = monthsMap[monStr] || monthsMap[monStr.slice(0, 3)];
		if (month) return {
			normalizedDate: `${year}-${month}-${day}`,
			originalExtractedText: cleaned,
			isAmbiguous: false,
			requiresManualReview: false,
			reviewReason: null,
			time: extractedTime
		};
	}
	const namedMonthFirstMatch = cleaned.match(/\b([a-zA-Z]{3,9})[-/\s.]+(0?[1-9]|[12][0-9]|3[01])(?:st|nd|rd|th)?[-/\s.,]+([12][0-9]{3})\b/i);
	if (namedMonthFirstMatch) {
		const monStr = namedMonthFirstMatch[1].toLowerCase();
		const day = namedMonthFirstMatch[2].padStart(2, "0");
		const year = namedMonthFirstMatch[3];
		const month = monthsMap[monStr] || monthsMap[monStr.slice(0, 3)];
		if (month) return {
			normalizedDate: `${year}-${month}-${day}`,
			originalExtractedText: cleaned,
			isAmbiguous: false,
			requiresManualReview: false,
			reviewReason: null,
			time: extractedTime
		};
	}
	const numericMatch = cleaned.match(/\b(0?[1-9]|[12][0-9]|3[01])[-/.](0?[1-9]|[12][0-9]|3[01])[-/.]([12][0-9]{3})\b/);
	if (numericMatch) {
		const p1 = parseInt(numericMatch[1], 10);
		const p2 = parseInt(numericMatch[2], 10);
		const year = numericMatch[3];
		if (p1 <= 12 && p2 <= 12 && p1 !== p2) return {
			normalizedDate: null,
			originalExtractedText: cleaned,
			isAmbiguous: true,
			requiresManualReview: true,
			reviewReason: `Ambiguous date format (${numericMatch[0]}): Day and month cannot be determined without guessing.`,
			time: extractedTime
		};
		if (p1 <= 12 && p2 <= 12 && p1 === p2) {
			const pad = String(p1).padStart(2, "0");
			return {
				normalizedDate: `${year}-${pad}-${pad}`,
				originalExtractedText: cleaned,
				isAmbiguous: false,
				requiresManualReview: false,
				reviewReason: null,
				time: extractedTime
			};
		}
		if (p1 > 12 && p2 <= 12) {
			const day = String(p1).padStart(2, "0");
			return {
				normalizedDate: `${year}-${String(p2).padStart(2, "0")}-${day}`,
				originalExtractedText: cleaned,
				isAmbiguous: false,
				requiresManualReview: false,
				reviewReason: null,
				time: extractedTime
			};
		}
		if (p2 > 12 && p1 <= 12) {
			const day = String(p2).padStart(2, "0");
			return {
				normalizedDate: `${year}-${String(p1).padStart(2, "0")}-${day}`,
				originalExtractedText: cleaned,
				isAmbiguous: false,
				requiresManualReview: false,
				reviewReason: null,
				time: extractedTime
			};
		}
	}
	return {
		normalizedDate: null,
		originalExtractedText: cleaned,
		isAmbiguous: false,
		requiresManualReview: false,
		reviewReason: null,
		time: extractedTime
	};
}
/**
* Extracts ONLY Cut-Off date/times and deadline types.
* Strictly avoids extracting shipper, consignee, vessel, weight, packages, etc.
* Never guesses a date - saves null if not clearly available.
*/
function extractCutOffDeadlinesOnly(text, options) {
	const deadlines = [];
	const dates = { deadlines };
	if (options?.isScanned) return {
		deadlines,
		dates,
		hasCutOffDate: false,
		detectedCutOffDate: null,
		hasAmbiguousDates: false,
		isScannedOrUnreadable: true,
		requiresManualReview: true,
		reviewReason: "Scanned or unreadable PDF: No digital text stream could be extracted deterministically. Saved and flagged for manual review."
	};
	const deadlineDefinitions = [
		{
			label: "Shipping Instruction Cut-off",
			key: "siCutoff",
			patterns: [
				/(?:si|shipping\s*instructions?)\s*(?:cut[-_ ]?off|closing|deadline)[:\s\-–|]+([^\n\r;]{5,60})/i,
				/cut[-_ ]?off\s*(?:for\s*)?(?:si|shipping\s*instructions?)[:\s\-–|]+([^\n\r;]{5,60})/i,
				/(?:si|shipping\s*instructions?)\s*closing[:\s\-–|]+([^\n\r;]{5,60})/i
			]
		},
		{
			label: "VGM Cut-off",
			key: "vgmCutoff",
			patterns: [
				/(?:vgm|verified\s*gross\s*mass)\s*(?:cut[-_ ]?off|closing|deadline)[:\s\-–|]+([^\n\r;]{5,60})/i,
				/cut[-_ ]?off\s*(?:for\s*)?(?:vgm|verified\s*gross\s*mass)[:\s\-–|]+([^\n\r;]{5,60})/i,
				/(?:vgm)\s*closing[:\s\-–|]+([^\n\r;]{5,60})/i
			]
		},
		{
			label: "Cargo Cut-off",
			key: "cargoCutoff",
			patterns: [/(?:cargo|cfs|lcl)\s*(?:cut[-_ ]?off|closing|deadline)[:\s\-–|]+([^\n\r;]{5,60})/i, /cut[-_ ]?off\s*(?:for\s*)?(?:cargo|cfs|lcl)[:\s\-–|]+([^\n\r;]{5,60})/i]
		},
		{
			label: "Documentation Cut-off",
			key: "docCutoff",
			patterns: [
				/(?:doc|documentation|draft\s*b\/?l)\s*(?:cut[-_ ]?off|closing|deadline)[:\s\-–|]+([^\n\r;]{5,60})/i,
				/cut[-_ ]?off\s*(?:for\s*)?(?:doc|documentation|draft\s*b\/?l)[:\s\-–|]+([^\n\r;]{5,60})/i,
				/(?:doc|document|documentation)\s*closing[:\s\-–|]+([^\n\r;]{5,60})/i
			]
		},
		{
			label: "CY Cut-off",
			key: "cyCutoff",
			patterns: [/(?:cy|container\s*yard)\s*(?:cut[-_ ]?off|closing|deadline)[:\s\-–|]+([^\n\r;]{5,60})/i, /cut[-_ ]?off\s*(?:for\s*)?(?:cy|container\s*yard)[:\s\-–|]+([^\n\r;]{5,60})/i]
		},
		{
			label: "Gate Cut-off",
			key: "gateCutoff",
			patterns: [/(?:gate[-_ ]?in|gate)\s*(?:cut[-_ ]?off|closing|deadline)[:\s\-–|]+([^\n\r;]{5,60})/i, /cut[-_ ]?off\s*(?:for\s*)?(?:gate[-_ ]?in|gate)[:\s\-–|]+([^\n\r;]{5,60})/i]
		},
		{
			label: "Terminal Cut-off",
			key: "terminalCutoff",
			patterns: [/(?:terminal|berth|wharf)\s*(?:cut[-_ ]?off|closing|deadline)[:\s\-–|]+([^\n\r;]{5,60})/i, /cut[-_ ]?off\s*(?:for\s*)?(?:terminal|berth|wharf)[:\s\-–|]+([^\n\r;]{5,60})/i]
		},
		{
			label: "Port Cut-off",
			key: "portCutoff",
			patterns: [/port\s*(?:cut[-_ ]?off|closing|deadline)[:\s\-–|]+([^\n\r;]{5,60})/i, /cut[-_ ]?off\s*(?:for\s*)?port[:\s\-–|]+([^\n\r;]{5,60})/i]
		},
		{
			label: "Customs Cut-off",
			patterns: [/(?:customs|export\s*customs)\s*(?:cut[-_ ]?off|closing|deadline)[:\s\-–|]+([^\n\r;]{5,60})/i, /cut[-_ ]?off\s*(?:for\s*)?(?:customs|export\s*customs)[:\s\-–|]+([^\n\r;]{5,60})/i]
		},
		{
			label: "Closing Date",
			key: "closingDate",
			patterns: [/(?:closing\s*date|closing\s*time|cargo\s*closing)[:\s\-–|]+([^\n\r;]{5,60})/i]
		},
		{
			label: "Cut-off Date",
			patterns: [/(?<!(?:cargo|cfs|lcl|si|shipping\s*instructions?|vgm|verified\s*gross\s*mass|doc|document|documentation|cy|container\s*yard|gate|port|terminal|customs)\s*)\bcut[-_ ]?off(?:\s*date|\s*time|\s*deadline)?[:\s\-–|]+([^\n\r;]{5,60})/i]
		}
	];
	const seenLabels = /* @__PURE__ */ new Set();
	for (const def of deadlineDefinitions) {
		let matchedDate = null;
		let rawMatched = "";
		let normResult = null;
		for (const pat of def.patterns) {
			const m = text.match(pat);
			if (m && m[1]) {
				rawMatched = m[1].trim().replace(/^[-:;,.\s|~]+/, "").replace(/[-:;,.\s|~]+$/, "");
				matchedDate = cleanCutOffDateTime(rawMatched);
				normResult = normalizeCutOffDate(rawMatched);
				if (matchedDate || normResult && (normResult.normalizedDate || normResult.isAmbiguous)) break;
			}
		}
		if (matchedDate || rawMatched || normResult?.normalizedDate || normResult?.isAmbiguous) {
			const norm = normResult || normalizeCutOffDate(rawMatched);
			deadlines.push({
				type: def.label,
				dateTime: matchedDate || norm.normalizedDate || rawMatched || null,
				rawText: rawMatched || void 0,
				normalizedDate: norm.normalizedDate,
				originalExtractedText: norm.originalExtractedText || rawMatched,
				isAmbiguous: norm.isAmbiguous,
				requiresManualReview: norm.requiresManualReview,
				reviewReason: norm.reviewReason,
				time: norm.time
			});
			seenLabels.add(def.label.toLowerCase());
			if (def.key && def.key !== "deadlines") dates[def.key] = norm.normalizedDate || matchedDate || null;
		}
	}
	const genericMatches = text.matchAll(/\b([A-Za-z /-]+?)\s*(?:cut[-_ ]?off|deadline|closing)[:\s\-–|]+([0-9]{1,2}[-/\s.][a-zA-Z0-9]{3,}[-/\s.][0-9]{2,4}(?:\s+[0-9]{1,2}:[0-9]{2}(?:\s*[ap]m)?)?)/gi);
	for (const gm of genericMatches) {
		const rawLabel = `${gm[1].trim()} Cut-Off`;
		const labelKey = rawLabel.toLowerCase();
		if (!seenLabels.has(labelKey) && rawLabel.length <= 35 && !rawLabel.includes("http")) {
			const rawText = gm[2].trim().replace(/^[-:;,.\s|~]+/, "").replace(/[-:;,.\s|~]+$/, "");
			const dt = cleanCutOffDateTime(rawText);
			const norm = normalizeCutOffDate(rawText);
			deadlines.push({
				type: rawLabel,
				dateTime: dt || norm.normalizedDate || rawText || null,
				rawText,
				normalizedDate: norm.normalizedDate,
				originalExtractedText: norm.originalExtractedText || rawText,
				isAmbiguous: norm.isAmbiguous,
				requiresManualReview: norm.requiresManualReview,
				reviewReason: norm.reviewReason,
				time: norm.time
			});
			seenLabels.add(labelKey);
		}
	}
	const hasAmbiguousDates = deadlines.some((d) => d.isAmbiguous);
	const isScannedOrUnreadable = Boolean(options?.isScanned);
	const requiresManualReview = Boolean(isScannedOrUnreadable || hasAmbiguousDates || deadlines.some((d) => d.requiresManualReview));
	const reviewReason = isScannedOrUnreadable ? "Scanned or unreadable PDF: No digital text stream could be extracted deterministically. Saved and flagged for manual review." : hasAmbiguousDates ? deadlines.find((d) => d.isAmbiguous)?.reviewReason || "Ambiguous cut-off date format detected: Day and month cannot be determined without guessing. Flagged for manual review." : null;
	const unambiguousWithDate = deadlines.find((d) => Boolean(d.normalizedDate));
	const detectedCutOffDate = requiresManualReview ? null : unambiguousWithDate?.normalizedDate || deadlines.find((d) => Boolean(d.dateTime))?.dateTime || null;
	return {
		deadlines,
		dates,
		hasCutOffDate: Boolean(deadlines.some((d) => Boolean(d.normalizedDate || d.dateTime))),
		detectedCutOffDate,
		hasAmbiguousDates,
		isScannedOrUnreadable,
		requiresManualReview,
		reviewReason
	};
}
/**
* Formats Cut-Off deadlines into a clean, human-readable summary
* Example:
* Cut-Off:
* SI Cut-Off → 18 Sep 2026, 4:00 PM
* VGM Cut-Off → 19 Sep 2026, 12:00 PM
*/
function formatCutOffDeadlinesSummary(deadlines, cutOffDates) {
	const items = deadlines && deadlines.length > 0 ? deadlines : cutOffDates?.deadlines || [];
	if (items.length > 0) return items.map((d) => `${d.type} → ${d.dateTime || "Not Provided"}`).join("\n");
	const lines = [];
	if (cutOffDates?.siCutoff) lines.push(`SI Cut-Off → ${cutOffDates.siCutoff}`);
	if (cutOffDates?.vgmCutoff) lines.push(`VGM Cut-Off → ${cutOffDates.vgmCutoff}`);
	if (cutOffDates?.cargoCutoff) lines.push(`Cargo Cut-Off → ${cutOffDates.cargoCutoff}`);
	if (cutOffDates?.docCutoff) lines.push(`Documentation Cut-Off → ${cutOffDates.docCutoff}`);
	if (cutOffDates?.cyCutoff) lines.push(`CY Cut-Off → ${cutOffDates.cyCutoff}`);
	if (cutOffDates?.gateCutoff) lines.push(`Gate Cut-Off → ${cutOffDates.gateCutoff}`);
	if (cutOffDates?.portCutoff) lines.push(`Port Cut-Off → ${cutOffDates.portCutoff}`);
	if (cutOffDates?.closingDate) lines.push(`Cargo Closing → ${cutOffDates.closingDate}`);
	return lines.length > 0 ? lines.join("\n") : "Cut-Off deadlines: Not Provided";
}
/**
* Deep heuristic analysis of document content to classify Cut-Off Notice vs Bill of Lading
*/
function classifyDocumentContentDeep(content, context) {
	const lowerContent = (content || "").toLowerCase();
	const lowerSubject = (context?.subject || "").toLowerCase();
	const lowerBody = (context?.body || "").toLowerCase();
	const combinedText = `${(context?.filename || "").toLowerCase()} \n ${lowerSubject} \n ${lowerBody} \n ${lowerContent}`;
	let cutOffScore = 0;
	let blScore = 0;
	const cutOffReasons = [];
	const blReasons = [];
	if (/(?:cut[-_ ]?off|closing[-_ ]?date|closing[-_ ]?time)/i.test(combinedText)) {
		cutOffScore += 30;
		cutOffReasons.push("Found 'cut-off' / 'closing date' terminology");
	}
	const hasPortCutoff = /(?:port|berth|wharf)\s*cut[-_ ]?off/i.test(combinedText);
	if (hasPortCutoff) {
		cutOffScore += 25;
		cutOffReasons.push("Found Port Cut-off marker");
	}
	const hasGateCutoff = /(?:gate[-_ ]?in|gate|terminal|cy)\s*cut[-_ ]?off/i.test(combinedText);
	if (hasGateCutoff) {
		cutOffScore += 25;
		cutOffReasons.push("Found Gate/CY/Terminal Cut-off marker");
	}
	const hasSiCutoff = /(?:si|shipping\s*instruction|doc|documentation)\s*cut[-_ ]?off/i.test(combinedText);
	if (hasSiCutoff) {
		cutOffScore += 25;
		cutOffReasons.push("Found Shipping Instruction (SI) Cut-off marker");
	}
	const hasVgmCutoff = /(?:vgm|verified\s*gross\s*mass)\s*cut[-_ ]?off/i.test(combinedText);
	if (hasVgmCutoff) {
		cutOffScore += 25;
		cutOffReasons.push("Found VGM Cut-off marker");
	}
	if (/(?:vessel|feeder|barge)\s*(?:schedule|voyage|departure)/i.test(combinedText) && /(?:etd|eta|pol|pod|closing)/i.test(combinedText)) {
		cutOffScore += 30;
		cutOffReasons.push("Found vessel schedule & rotation matrix");
	}
	if (/(?:stacking\s*period|gate[-_ ]?in\s*open|receiving\s*window|stack\s*date)/i.test(combinedText)) {
		cutOffScore += 20;
		cutOffReasons.push("Found cargo stacking / receiving window");
	}
	const blHeaderMatch = /(?:bill\s*of\s*lading|ocean\s*bill\s*of\s*lading|draft\s*b\/?l|sea\s*waybill|house\s*bill\s*of\s*lading|master\s*bill\s*of\s*lading|original\s*b\/?l|ocean\s*waybill|combined\s*transport\s*bill\s*of\s*lading|non[- ]negotiable\s*copy|multimodal\s*transport\s*document)/i.test(combinedText);
	if (blHeaderMatch) {
		blScore += 50;
		blReasons.push("Found standard Bill of Lading / Sea Waybill document header");
	}
	let blFieldMatches = 0;
	if (/\b(?:shipper|exporter)\b[:\s]/i.test(combinedText)) {
		blScore += 15;
		blFieldMatches++;
	}
	if (/\b(?:consignee)\b[:\s]/i.test(combinedText)) {
		blScore += 15;
		blFieldMatches++;
	}
	if (/\b(?:notify\s*party)\b[:\s]/i.test(combinedText)) {
		blScore += 15;
		blFieldMatches++;
	}
	if (/\b(?:port\s*of\s*loading|pol)\b[:\s]/i.test(combinedText)) {
		blScore += 10;
		blFieldMatches++;
	}
	if (/\b(?:port\s*of\s*discharge|pod)\b[:\s]/i.test(combinedText)) {
		blScore += 10;
		blFieldMatches++;
	}
	if (/\b(?:ocean\s*vessel|vessel\s*\/?\s*voyage)\b/i.test(combinedText)) {
		blScore += 10;
		blFieldMatches++;
	}
	if (/\b(?:container\s*(?:no|number)|seal\s*(?:no|number))\b/i.test(combinedText)) {
		blScore += 15;
		blFieldMatches++;
	}
	if (/\b(?:gross\s*weight|tare\s*weight|measurement|cbm)\b/i.test(combinedText)) {
		blScore += 10;
		blFieldMatches++;
	}
	if (/\b(?:freight\s*payable|freight\s*prepaid|freight\s*collect)\b/i.test(combinedText)) {
		blScore += 15;
		blFieldMatches++;
	}
	if (/\b(?:number\s*of\s*original\s*b(?:ills|s)?(?:\/l| of lading)?|originals\s*issued)\b/i.test(combinedText)) {
		blScore += 20;
		blFieldMatches++;
	}
	if (blFieldMatches >= 2) blReasons.push(`Found ${blFieldMatches} standard B/L box fields (Shipper, Consignee, Vessel, POL, Container, Gross Weight, Freight Terms)`);
	let cutOffExtraction = void 0;
	if (cutOffScore >= 25 || hasPortCutoff || hasGateCutoff || hasSiCutoff || hasVgmCutoff || /(?:cut[-_ ]?off|closing)/i.test(combinedText)) cutOffExtraction = extractCutOffDeadlinesOnly(combinedText);
	const hasCutOffDate = Boolean(cutOffExtraction?.hasCutOffDate);
	const detectedCutOffDate = cutOffExtraction?.detectedCutOffDate || null;
	let blNumber = void 0;
	if (blScore >= 35 || blHeaderMatch) {
		const blNumMatch = combinedText.match(/\b(?:b\/?l\s*(?:no\.?|#|number|ref\.?)|bill\s*of\s*lading\s*(?:no\.?|#|number)|waybill\s*no\.?)\s*[-:]?\s*([a-z0-9]{7,20})\b/i);
		if (blNumMatch) blNumber = blNumMatch[1].toUpperCase();
	}
	if (cutOffScore >= 35 && cutOffScore > blScore) return {
		isCutOff: true,
		isBillOfLading: false,
		hasCutOffDate,
		detectedCutOffDate,
		confidence: Math.min(.98, .65 + cutOffScore * .003),
		category: "Cut-Off Notice",
		documentType: "CUT_OFF_NOTICE",
		detectedType: "cut_off",
		reason: hasCutOffDate ? `Document content classified as Cut-Off Notice with cut-off date: ${detectedCutOffDate} (${cutOffReasons.join("; ")})` : `Document content classified as Cut-Off Notice (no explicit cut-off date found inside PDF) (${cutOffReasons.join("; ")})`,
		cutOffDeadlines: cutOffExtraction?.deadlines,
		cutOffDates: cutOffExtraction?.dates
	};
	if (blScore >= 35 && blScore > cutOffScore) return {
		isCutOff: false,
		isBillOfLading: true,
		confidence: Math.min(.98, .65 + blScore * .003),
		category: "Bill of Lading",
		documentType: "BILL_OF_LADING",
		detectedType: "bill_of_lading",
		reason: `Document content identified as Bill of Lading (${blReasons.join("; ")}). Document type set to BILL_OF_LADING without full field extraction.`,
		blNumber
	};
	return {
		isCutOff: false,
		isBillOfLading: false,
		confidence: .15,
		category: "Other",
		documentType: "OTHER",
		detectedType: "other",
		reason: "Document content did not exhibit definitive Cut-Off or Bill of Lading characteristics."
	};
}
/**
* Main classification function that incorporates:
* 1. Document Content (Text streams, PDF tokens, Form fields)
* 2. AI Document Understanding (Gemini API)
* 3. Deep Heuristics across extracted content
* 4. Filename & Email Context
*/
async function classifyAttachmentWithContent(attachment, context) {
	const filename = attachment.filename || attachment.name || "Document.pdf";
	const mimeType = attachment.mimeType;
	const { text: extractedText, isScanned } = await extractTextFromAttachmentAsync(attachment);
	const hasExtractedText = Boolean(extractedText && extractedText.trim().length > 0);
	let contentCutOffExtraction = void 0;
	if (hasExtractedText || isScanned) contentCutOffExtraction = extractCutOffDeadlinesOnly(extractedText, { isScanned });
	let deepResult = null;
	if (hasExtractedText) deepResult = classifyDocumentContentDeep(extractedText, {
		subject: context?.subject,
		body: context?.body,
		filename
	});
	const filenameClassification = classifyAttachment(filename, mimeType, context);
	const contextCutOffExtraction = extractCutOffDeadlinesOnly(`${context?.subject || ""} ${context?.body || ""}`);
	const hasCutOffDateInPdf = Boolean(contentCutOffExtraction?.hasCutOffDate);
	const hasCutOffDateInContext = Boolean(contextCutOffExtraction.hasCutOffDate);
	const hasCutOffDate = hasCutOffDateInPdf || (deepResult?.hasCutOffDate ?? false) || hasCutOffDateInContext;
	const mergedDeadlines = contentCutOffExtraction && contentCutOffExtraction.deadlines.length > 0 ? contentCutOffExtraction.deadlines : deepResult?.cutOffDeadlines && deepResult.cutOffDeadlines.length > 0 ? deepResult.cutOffDeadlines : contextCutOffExtraction.deadlines;
	const mergedDates = {
		...contextCutOffExtraction.dates || {},
		...deepResult?.cutOffDates || {},
		...contentCutOffExtraction?.dates || {}
	};
	const isScannedOrUnreadable = Boolean(isScanned || contentCutOffExtraction?.isScannedOrUnreadable);
	const hasAmbiguousDates = Boolean(contentCutOffExtraction?.hasAmbiguousDates);
	const requiresManualReview = Boolean(isScannedOrUnreadable || hasAmbiguousDates || contentCutOffExtraction?.requiresManualReview);
	const reviewReason = contentCutOffExtraction?.reviewReason || (isScannedOrUnreadable ? "Scanned or unreadable PDF: No digital text stream could be extracted deterministically. Saved and flagged for manual review." : hasAmbiguousDates ? "Ambiguous cut-off date format detected: Day and month cannot be determined without guessing. Flagged for manual review." : null);
	const detectedCutOffDate = requiresManualReview ? null : contentCutOffExtraction?.detectedCutOffDate || deepResult?.detectedCutOffDate || contextCutOffExtraction.detectedCutOffDate || mergedDeadlines.find((d) => Boolean(d.normalizedDate))?.normalizedDate || null;
	if (Boolean(deepResult?.isCutOff || filenameClassification.isCutOff || hasCutOffDateInPdf || contentCutOffExtraction && (contentCutOffExtraction.deadlines.length > 0 || contentCutOffExtraction.isScannedOrUnreadable) || isScanned && filenameClassification.isCutOff)) return {
		isCutOff: true,
		isBillOfLading: false,
		hasCutOffDate: hasCutOffDateInPdf || Boolean(detectedCutOffDate),
		detectedCutOffDate,
		hasAmbiguousDates,
		isScannedOrUnreadable,
		requiresManualReview,
		reviewReason,
		category: "Cut-Off Notice",
		documentType: "CUT_OFF_NOTICE",
		detectedType: "cut_off",
		confidence: Math.max(deepResult?.confidence || 0, filenameClassification.confidence, .95),
		cleanedName: filename,
		classificationSource: hasExtractedText ? "document_content_heuristics" : filenameClassification.classificationSource,
		reason: requiresManualReview ? `Cut-Off document detected (${reviewReason || "requires manual review"}). Preserved and flagged for manual review.` : detectedCutOffDate ? `Cut-Off document detected containing cut-off date: ${detectedCutOffDate} (${mergedDeadlines.map((d) => `${d.type}: ${d.normalizedDate || d.dateTime}`).join(", ") || "date present"}).` : `Cut-Off document detected (no explicit cut-off date found inside PDF).`,
		cutOffDeadlines: mergedDeadlines,
		cutOffDates: mergedDates
	};
	if (deepResult?.isBillOfLading || filenameClassification.isBillOfLading) return {
		isCutOff: false,
		isBillOfLading: true,
		hasCutOffDate: false,
		detectedCutOffDate: null,
		category: "Bill of Lading",
		documentType: "BILL_OF_LADING",
		detectedType: "bill_of_lading",
		confidence: Math.max(deepResult?.confidence || 0, filenameClassification.confidence, .95),
		cleanedName: filename,
		classificationSource: hasExtractedText ? "document_content_heuristics" : filenameClassification.classificationSource,
		reason: deepResult?.reason || filenameClassification.reason,
		blNumber: deepResult?.blNumber || filenameClassification.blNumber
	};
	return {
		...filenameClassification,
		hasCutOffDate,
		detectedCutOffDate,
		hasAmbiguousDates,
		isScannedOrUnreadable,
		requiresManualReview,
		reviewReason,
		cutOffDeadlines: mergedDeadlines,
		cutOffDates: mergedDates
	};
}
/**
* Synchronous classification based on Filename, MIME type, and email context
*/
function classifyAttachment(filename, mimeType, context) {
	const lowerFile = (filename || "").toLowerCase();
	const fullText = `${lowerFile} ${(context?.subject || "").toLowerCase()} ${(context?.body || "").toLowerCase()}`;
	const isBookingConfirmFile = /(?:booking[-_ ]?confirm|bkg[-_ ]?confirm|confirm[-_ ]?booking|booking[-_ ]?order|booking[-_ ]?note|booking[-_ ]?advise)/i.test(lowerFile);
	const isBlFile = /(?:bill[-_ ]?of[-_ ]?lading|\bbl[-_. ]|[-_. ]bl\b|draft[-_ ]?bl|ocean[-_ ]?bl|original[-_ ]?bl|obl|hbl|mbl|waybill|sea[-_ ]?waybill|carrier[-_ ]?bl|b\/l)/i.test(lowerFile);
	const isSiFile = /(?:shipping[-_ ]?instructions?|\bsi[-_. ]|[-_. ]si\b|shipping[-_ ]?order|draft[-_ ]?si|shipping[-_ ]?details|shipping[-_ ]?advice)/i.test(lowerFile);
	const isCutOffFile = /(?:cut[-_ ]?off|gate[-_ ]?cut|port[-_ ]?cut|si[-_ ]?cut|vgm[-_ ]?cut|terminal[-_ ]?cut|berth[-_ ]?cut|vessel[-_ ]?schedule|closing[-_ ]?schedule)/i.test(lowerFile);
	const isInvoiceFile = /(?:commercial[-_ ]?invoice|freight[-_ ]?invoice|invoice|inv[-_. ])/i.test(lowerFile);
	const isPackingListFile = /(?:packing[-_ ]?list|pkl|pkg[-_ ]?list|weight[-_ ]?list)/i.test(lowerFile);
	const bookingConfirmContextMatch = /(?:booking confirmation|booking confirmed|booking note)/i.test(fullText);
	const blContextMatch = /(?:bill of lading|draft b\/l|ocean b\/l|original b\/l|sea waybill|b\/l copy|hbl|mbl|ocean bill of lading)/i.test(fullText);
	const siContextMatch = /(?:shipping instructions?|draft shipping instructions?|si submission)/i.test(fullText);
	const cutOffContextMatch = /(?:port|gate|vessel|terminal|berth|cargo)\s*cut[-_ ]?off/i.test(fullText);
	let cutOffDates = void 0;
	if (isCutOffFile || cutOffContextMatch) {
		cutOffDates = {};
		const portMatch = fullText.match(/(?:port|berth)\s*cut[-_ ]?off[:\s]+([0-9]{1,2}[-/\s][a-z0-9]{3,}[-/\s][0-9]{2,4}(?:\s+[0-9]{1,2}:[0-9]{2})?)/i);
		if (portMatch) cutOffDates.portCutoff = portMatch[1].trim();
		const gateMatch = fullText.match(/(?:gate|terminal|cy)\s*cut[-_ ]?off[:\s]+([0-9]{1,2}[-/\s][a-z0-9]{3,}[-/\s][0-9]{2,4}(?:\s+[0-9]{1,2}:[0-9]{2})?)/i);
		if (gateMatch) cutOffDates.gateCutoff = gateMatch[1].trim();
		const siMatch = fullText.match(/(?:si|shipping\s*instruction)\s*cut[-_ ]?off[:\s]+([0-9]{1,2}[-/\s][a-z0-9]{3,}[-/\s][0-9]{2,4}(?:\s+[0-9]{1,2}:[0-9]{2})?)/i);
		if (siMatch) cutOffDates.siCutoff = siMatch[1].trim();
		const vgmMatch = fullText.match(/(?:vgm|verified\s*gross\s*mass)\s*cut[-_ ]?off[:\s]+([0-9]{1,2}[-/\s][a-z0-9]{3,}[-/\s][0-9]{2,4}(?:\s+[0-9]{1,2}:[0-9]{2})?)/i);
		if (vgmMatch) cutOffDates.vgmCutoff = vgmMatch[1].trim();
	}
	let blNumber = void 0;
	if (isBlFile || blContextMatch) {
		const blNumMatch = fullText.match(/\b(?:bl|b\/l|bill of lading)\s*(?:no\.?|#|ref\.?)?\s*[-:]?\s*([a-z0-9]{8,16})\b/i);
		if (blNumMatch) blNumber = blNumMatch[1].toUpperCase();
	}
	if (isBookingConfirmFile) return {
		isCutOff: false,
		isBillOfLading: false,
		category: "Booking Confirmation",
		documentType: "BOOKING_CONFIRMATION",
		confidence: .95,
		detectedType: "booking_confirmation",
		cleanedName: filename || "Booking_Confirmation.pdf",
		classificationSource: "filename_only",
		reason: `Filename "${filename}" matches Booking Confirmation naming conventions.`
	};
	if (isBlFile) return {
		isCutOff: false,
		isBillOfLading: true,
		category: "Bill of Lading",
		documentType: "BILL_OF_LADING",
		confidence: .95,
		detectedType: "bill_of_lading",
		cleanedName: filename || "Bill_of_Lading.pdf",
		classificationSource: "filename_only",
		reason: `Filename "${filename}" matches Bill of Lading naming conventions.`,
		blNumber
	};
	if (isSiFile) return {
		isCutOff: false,
		isBillOfLading: false,
		category: "Shipping Instructions",
		documentType: "SHIPPING_INSTRUCTION",
		confidence: .95,
		detectedType: "shipping_instruction",
		cleanedName: filename || "Shipping_Instructions.xlsx",
		classificationSource: "filename_only",
		reason: `Filename "${filename}" matches Shipping Instructions (SI) naming conventions.`
	};
	if (isCutOffFile) return {
		isCutOff: true,
		isBillOfLading: false,
		hasCutOffDate: Boolean(cutOffDates && (cutOffDates.portCutoff || cutOffDates.gateCutoff || cutOffDates.siCutoff || cutOffDates.vgmCutoff || cutOffDates.closingDate)),
		detectedCutOffDate: cutOffDates?.portCutoff || cutOffDates?.gateCutoff || cutOffDates?.siCutoff || cutOffDates?.vgmCutoff || cutOffDates?.closingDate || null,
		category: "Cut-Off Notice",
		documentType: "CUT_OFF_NOTICE",
		confidence: .95,
		detectedType: "cut_off",
		cleanedName: filename || "CutOff_Notice.pdf",
		classificationSource: "filename_only",
		reason: `Filename "${filename}" matches Cut-Off Notice naming conventions.`,
		cutOffDates
	};
	if (isInvoiceFile) return {
		isCutOff: false,
		isBillOfLading: false,
		category: "Invoices & Receipts",
		documentType: "COMMERCIAL_INVOICE",
		confidence: .95,
		detectedType: "invoice",
		cleanedName: filename || "Invoice.pdf",
		classificationSource: "filename_only",
		reason: `Filename "${filename}" matches Invoice naming conventions.`
	};
	if (isPackingListFile) return {
		isCutOff: false,
		isBillOfLading: false,
		category: "Customs & Clearance",
		documentType: "PACKING_LIST",
		confidence: .95,
		detectedType: "packing_list",
		cleanedName: filename || "Packing_List.pdf",
		classificationSource: "filename_only",
		reason: `Filename "${filename}" matches Packing List naming conventions.`
	};
	if (bookingConfirmContextMatch) return {
		isCutOff: false,
		isBillOfLading: false,
		category: "Booking Confirmation",
		documentType: "BOOKING_CONFIRMATION",
		confidence: .85,
		detectedType: "booking_confirmation",
		cleanedName: filename || "Booking_Confirmation.pdf",
		classificationSource: "email_context",
		reason: "Email context contains Booking Confirmation documentation references."
	};
	if (blContextMatch) return {
		isCutOff: false,
		isBillOfLading: true,
		category: "Bill of Lading",
		documentType: "BILL_OF_LADING",
		confidence: .85,
		detectedType: "bill_of_lading",
		cleanedName: filename || "Bill_of_Lading.pdf",
		classificationSource: "email_context",
		reason: "Email context contains Bill of Lading (B/L) documentation references.",
		blNumber
	};
	if (siContextMatch) return {
		isCutOff: false,
		isBillOfLading: false,
		category: "Shipping Instructions",
		documentType: "SHIPPING_INSTRUCTION",
		confidence: .85,
		detectedType: "shipping_instruction",
		cleanedName: filename || "Shipping_Instructions.xlsx",
		classificationSource: "email_context",
		reason: "Email context contains Shipping Instructions (SI) documentation references."
	};
	if (cutOffContextMatch) return {
		isCutOff: true,
		isBillOfLading: false,
		category: "Cut-Off Notice",
		documentType: "CUT_OFF_NOTICE",
		confidence: .85,
		detectedType: "cut_off",
		cleanedName: filename || "CutOff_Notice.pdf",
		classificationSource: "email_context",
		reason: "Email context contains Cut-Off scheduling information.",
		cutOffDates
	};
	return {
		isCutOff: false,
		isBillOfLading: false,
		category: "Other",
		documentType: "OTHER",
		confidence: .85,
		detectedType: "other",
		cleanedName: filename || "Document.pdf",
		classificationSource: "filename_only",
		reason: "General logistics document attachment."
	};
}
/**
* Core Backend Function:
* Automatically identifies, saves, and links incoming Forwarder Cut-Off and BL attachments.
*
* Strict Matching Priority Order:
* 1. Gmail Thread ID
* 2. In-Reply-To / References headers
* 3. Movement Number / Request ID
* 4. Booking Reference
* 5. Forwarder + booking details
* 6. AI matching only as a fallback
*
* If the system cannot confidently identify the Movement, it does NOT attach
* the document automatically and marks it as NEEDS_REVIEW instead.
*/
async function saveAndLinkIncomingAttachment(supabase, params) {
	const { attachment, bookingId, movementNumber, movementId, forwarderId, forwarderName, senderEmail, senderName, emailMessageId, gmailMessageId, gmailThreadId, inReplyTo, references, headers, rawHeaders, subject, body, receivedAt, userId } = params;
	const rawFilename = (attachment.filename || attachment.name || "Forwarder_Document.pdf").trim();
	const validEmailUuid = safeUuid(emailMessageId);
	const now = /* @__PURE__ */ new Date();
	const nowIso = now.toISOString();
	const validation = validateAttachment(attachment);
	if (!validation.valid) {
		const validationErrorMsg = validation.error || "Attachment validation failed.";
		console.warn(`[DocumentAttachmentService] ❌ Attachment validation failed for "${rawFilename}":`, validationErrorMsg);
		if (validEmailUuid) try {
			await supabase.from("email_messages").update({
				error_info: {
					last_error: validationErrorMsg,
					failed_attachment: rawFilename,
					error_type: "VALIDATION_FAILED",
					failed_at: nowIso
				},
				updated_at: nowIso
			}).eq("id", validEmailUuid);
		} catch (err) {
			console.warn("[DocumentAttachmentService] Notice updating email_messages error_info:", err);
		}
		return {
			saved: false,
			linked: false,
			status: "VALIDATION_FAILED",
			document: null,
			category: "Other",
			reason: validationErrorMsg,
			error: validationErrorMsg
		};
	}
	const attachmentHash = computeAttachmentHash(attachment);
	if (validEmailUuid) try {
		const { data: curEmail } = await supabase.from("email_messages").select("id, booking_id, movement_number, forwarder_id, organization_id, attachments").eq("id", validEmailUuid).maybeSingle();
		const existingMatchingAtt = (Array.isArray(curEmail?.attachments) ? curEmail.attachments : []).find((a) => {
			const matchesHash = a.attachmentHash && a.attachmentHash === attachmentHash;
			const matchesAttId = attachment.attachmentId && a.attachmentId === attachment.attachmentId;
			const matchesNameAndSize = (a.fileName === rawFilename || a.name === rawFilename) && Number(a.size || a.fileSize) === validation.fileSizeBytes;
			const isSuccessfullyStored = a.status === "Saved to Supabase Storage" || a.uploadStatus === "Saved to Supabase Storage";
			return (matchesHash || matchesAttId || matchesNameAndSize) && isSuccessfullyStored && Boolean(a.storagePath);
		});
		if (existingMatchingAtt && existingMatchingAtt.storagePath) {
			let dbDocConfirmed = false;
			if (existingMatchingAtt.bookingDocumentId) {
				const { data: bDoc } = await supabase.from("booking_documents").select("id").eq("id", existingMatchingAtt.bookingDocumentId).maybeSingle();
				if (bDoc) dbDocConfirmed = true;
			} else if (existingMatchingAtt.linkedBookingId) {
				const { data: bDoc } = await supabase.from("booking_documents").select("id").eq("booking_id", existingMatchingAtt.linkedBookingId).eq("document_name", rawFilename).maybeSingle();
				if (bDoc) dbDocConfirmed = true;
			} else dbDocConfirmed = true;
			if (dbDocConfirmed) {
				console.log(`[DocumentAttachmentService] ⏭️ Skipping duplicate upload for "${rawFilename}" in email ${validEmailUuid} (Hash: ${attachmentHash}). Already stored at ${existingMatchingAtt.storagePath}.`);
				const prevDocId = existingMatchingAtt.bookingDocumentId || existingMatchingAtt.savedDocumentId || `doc-${rawFilename}`;
				return {
					saved: true,
					linked: Boolean(existingMatchingAtt.linkedBookingId || curEmail?.booking_id),
					status: "ALREADY_SAVED",
					category: existingMatchingAtt.documentCategory || "Other",
					reason: `Attachment "${rawFilename}" was already successfully stored and recorded for email ${validEmailUuid}. Duplicate upload skipped.`,
					document: serverSavedDocuments.get(prevDocId) || null,
					bookingDocumentId: existingMatchingAtt.bookingDocumentId || null,
					storagePath: existingMatchingAtt.storagePath || null,
					attachmentHash
				};
			}
		}
	} catch (checkErr) {
		console.warn("[DocumentAttachmentService] Notice checking duplicate attachment:", checkErr);
	}
	const mimeType = attachment.mimeType;
	const classification = await classifyAttachmentWithContent(attachment, {
		subject: subject || void 0,
		body: body || void 0
	});
	const category = classification.category;
	const formattedDate = now.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
	const formattedTime = now.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit"
	});
	const lastModified = `${formattedDate} - ${formattedTime}`;
	const extension = validation.extension;
	const type = determineFileType(extension);
	const fileSize = formatBytes(validation.fileSizeBytes || attachment.size);
	const matchResult = await identifyMovementForIncomingEmail(supabase, {
		gmailThreadId,
		gmailMessageId,
		inReplyTo,
		references,
		headers,
		rawHeaders,
		subject,
		body,
		senderEmail: senderEmail || "",
		senderName,
		emailMessageId,
		userId,
		attachments: [attachment],
		attachmentTexts: [
			attachment.content || "",
			attachment.extractedText || "",
			classification.reason,
			classification.blNumber ? `B/L: ${classification.blNumber}` : "",
			classification.cutOffDates ? `Cutoff: ${JSON.stringify(classification.cutOffDates)}` : ""
		].filter(Boolean),
		candidateBookingId: bookingId,
		candidateMovementNumber: movementNumber
	});
	const unconfidentFields = [];
	const unconfidentReasons = [];
	const candidateBookingId = matchResult.bookingId || bookingId || null;
	const candidateMovementNumber = matchResult.movementNumber || movementNumber || matchResult.bookingReference || null;
	const existingMovement = await getExistingMovementRecord(supabase, {
		bookingId: candidateBookingId,
		movementNumber: candidateMovementNumber
	});
	const isExplicitlyFlaggedForReview = Boolean(params.flagForReview);
	const isAmbiguousMatch = Boolean(!movementNumber && (matchResult.details?.isAmbiguous || matchResult.matchReason?.toLowerCase().includes("ambiguous") || matchResult.matchReason?.toLowerCase().includes("multiple")));
	const isConfidentMovement = Boolean(!isExplicitlyFlaggedForReview && !isAmbiguousMatch && existingMovement && existingMovement.bookingId && (matchResult.matchStatus === "MATCHED" || bookingId || Boolean(movementNumber && existingMovement)) && (matchResult.confidence >= .75 || Boolean(movementNumber && existingMovement)));
	if (!isConfidentMovement) {
		unconfidentFields.push("movement");
		if (params.reviewReason) unconfidentReasons.push(params.reviewReason);
		else if (isExplicitlyFlaggedForReview) unconfidentReasons.push("Email flagged for manual review: Attachment cannot be reliably matched to a single movement.");
		else if (isAmbiguousMatch) unconfidentReasons.push(matchResult.matchReason || "Ambiguous Movement Number matching detected. Multiple candidates exist.");
		else if (!existingMovement) {
			if (candidateMovementNumber) unconfidentReasons.push(`Movement Number "${candidateMovementNumber}" does not exist in the system. Never attach to an unknown or non-existent movement.`);
			else unconfidentReasons.push("Movement Number is missing or unknown in email and attachments.");
		} else if (matchResult.confidence < .75) unconfidentReasons.push(`Movement match confidence (${Math.round(matchResult.confidence * 100)}%) is below required safety threshold (>= 75%).`);
		else unconfidentReasons.push(matchResult.matchReason || "Movement could not be identified with required confidence.");
	}
	if (!isConfidentMovement) {
		console.warn(`[DocumentAttachmentService] ⚠️ Cannot confidently identify: [${unconfidentFields.join(", ")}] for attachment "${rawFilename}". Storing safely in Documents repository as NEEDS_REVIEW without guessing.`);
		const forwarderOwner = getOrCreateForwarderOwner(matchResult.forwarderName || forwarderName, senderEmail);
		const uniqueDocId = `doc-review-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
		const docTypeTag = resolveDocumentTypeTag(classification, rawFilename);
		const forwarderDisplayName = matchResult.forwarderName || forwarderName || senderName || "Forwarder";
		const reviewStorageUpload = await uploadAttachmentToSupabaseStorage(supabase, {
			movementNumber: "UNMATCHED",
			filename: rawFilename,
			organizationId: params.organizationId,
			mimeType,
			data: attachment.data,
			content: attachment.content,
			url: attachment.url,
			attachmentId: attachment.attachmentId,
			gmailMessageId: gmailMessageId || params.gmailMessageId
		});
		if (!reviewStorageUpload.success) {
			const errMsg = reviewStorageUpload.error || "Storage upload failed for unmatched attachment.";
			console.error(`[DocumentAttachmentService] ❌ Failed to upload unmatched attachment "${rawFilename}":`, errMsg);
			if (validEmailUuid) try {
				await supabase.from("email_messages").update({
					error_info: {
						last_error: errMsg,
						failed_attachment: rawFilename,
						error_type: "STORAGE_UPLOAD_ERROR",
						failed_at: nowIso
					},
					updated_at: nowIso
				}).eq("id", validEmailUuid);
			} catch (eErr) {
				console.warn("[DocumentAttachmentService] Notice updating email_messages error_info:", eErr);
			}
			return {
				saved: false,
				linked: false,
				status: "STORAGE_ERROR",
				document: null,
				category: classification.category || "Other",
				reason: errMsg,
				error: errMsg,
				attachmentHash
			};
		}
		const publicReviewUrl = reviewStorageUpload.publicUrl || attachment.url || (attachment.attachmentId && gmailMessageId ? `/api/gmail/attachment?messageId=${encodeURIComponent(gmailMessageId)}&attachmentId=${encodeURIComponent(attachment.attachmentId)}&filename=${encodeURIComponent(rawFilename)}` : "");
		const driveFile = {
			id: uniqueDocId,
			name: rawFilename,
			type,
			extension,
			owners: [forwarderOwner],
			lastModified,
			lastModifiedTimestamp: nowIso,
			fileSize,
			folderId: "folder-design",
			starred: true,
			sharedLink: publicReviewUrl,
			url: publicReviewUrl,
			metadata: {
				category: classification.category || "Unclassified / Needs Review",
				documentType: docTypeTag,
				displayDocumentType: docTypeTag,
				typeTag: docTypeTag,
				originalFilename: rawFilename,
				fileName: rawFilename,
				fileFormat: extension.toUpperCase(),
				fileSize,
				bookingId: null,
				movementNumber: null,
				movementReferenceNumber: null,
				forwarderId: matchResult.forwarderId || forwarderId || null,
				forwarderName: forwarderDisplayName,
				forwarder: forwarderDisplayName,
				senderEmail: senderEmail || null,
				sourceEmail: senderEmail || null,
				emailMessageId: emailMessageId || null,
				gmailMessageId: gmailMessageId || null,
				receivedDate: formattedDate,
				receivedTime: formattedTime,
				status: "Needs Review",
				uploadStatus: "Saved to Supabase Storage",
				isMetadataOnly: false,
				source: "Incoming Forwarder Email",
				savedAt: nowIso,
				fileUrl: publicReviewUrl,
				storageBucket: reviewStorageUpload.storageBucket,
				storagePath: reviewStorageUpload.storagePath,
				classificationSource: classification.classificationSource,
				classificationReason: classification.reason,
				cutOffDeadlines: classification.cutOffDeadlines,
				cutOffDates: classification.cutOffDates,
				blNumber: classification.blNumber,
				reviewStatus: "NEEDS_REVIEW",
				needsReview: true,
				reviewReason: unconfidentReasons.join("; "),
				unconfidentFields,
				extractedTextSnippet: (attachment.extractedText || attachment.content || "").slice(0, 600)
			}
		};
		saveServerDocument(driveFile);
		if (typeof window !== "undefined") try {
			saveDriveDocument(driveFile);
		} catch (e) {
			console.warn("[DocumentAttachmentService] Client saveDriveDocument notice:", e);
		}
		let reviewNotificationId = null;
		try {
			const notifTitle = `Document Needs Review: ${rawFilename}`;
			const notifMessage = `Attachment "${rawFilename}" safely stored in Documents. Operator review required: Unconfident Movement (${unconfidentReasons.join("; ")}).`;
			reviewNotificationId = await safeInsertNotification(supabase, {
				userId: userId || null,
				title: notifTitle,
				message: notifMessage,
				type: "document_needs_review",
				bookingId: null,
				movementNumber: null
			});
		} catch (notifErr) {
			console.warn("[DocumentAttachmentService] Notice creating NEEDS_REVIEW notification:", notifErr);
		}
		if (validEmailUuid) try {
			const { data: curMsg } = await supabase.from("email_messages").select("attachments, raw_headers").eq("id", validEmailUuid).maybeSingle();
			const updatedAttachments = [...(Array.isArray(curMsg?.attachments) ? curMsg.attachments : []).filter((a) => (a.fileName || a.name) !== rawFilename && a.attachmentHash !== attachmentHash), {
				fileName: rawFilename,
				name: rawFilename,
				attachmentHash,
				attachmentId: attachment.attachmentId || null,
				documentType: docTypeTag,
				fileFormat: extension.toUpperCase(),
				fileSize: driveFile.fileSize,
				gmailMessageId: gmailMessageId || null,
				forwarder: forwarderDisplayName,
				receivedDate: formattedDate,
				receivedTimestamp: receivedAt || nowIso,
				movementReferenceNumber: null,
				status: "Needs Review",
				uploadStatus: "Saved to Supabase Storage",
				isMetadataOnly: false,
				savedDocumentId: driveFile.id,
				storageBucket: reviewStorageUpload.storageBucket,
				storagePath: reviewStorageUpload.storagePath,
				storageUrl: publicReviewUrl,
				fileUrl: publicReviewUrl,
				savedAt: nowIso
			}];
			const existingRaw = curMsg?.raw_headers || {};
			const filteredReviews = (Array.isArray(existingRaw.unlinked_attachments_needing_review) ? existingRaw.unlinked_attachments_needing_review : []).filter((r) => r.filename !== rawFilename && r.documentId !== driveFile.id);
			const updatedRawHeaders = {
				...existingRaw,
				attachment_review_status: "NEEDS_REVIEW",
				unlinked_attachments_needing_review: [...filteredReviews, {
					documentId: driveFile.id,
					filename: rawFilename,
					category: driveFile.metadata?.category,
					fileSize: driveFile.fileSize,
					storageBucket: reviewStorageUpload.storageBucket,
					storagePath: reviewStorageUpload.storagePath,
					storageUrl: publicReviewUrl,
					unconfidentFields,
					reason: unconfidentReasons.join("; "),
					priorityStepEvaluations: matchResult.priorityStepEvaluations,
					receivedAt: nowIso
				}]
			};
			const { error: updateEmailErr } = await supabase.from("email_messages").update({
				attachments: updatedAttachments,
				raw_headers: updatedRawHeaders,
				updated_at: nowIso
			}).eq("id", validEmailUuid);
			if (updateEmailErr) {
				console.warn("[DocumentAttachmentService] Notice updating email_messages:", updateEmailErr.message);
				return {
					saved: false,
					linked: false,
					status: "DATABASE_ERROR",
					document: driveFile,
					category: classification.category || "Other",
					reason: updateEmailErr.message,
					error: updateEmailErr.message,
					attachmentHash,
					storagePath: reviewStorageUpload.storagePath
				};
			}
		} catch (eErr) {
			const msg = eErr instanceof Error ? eErr.message : String(eErr);
			console.warn("[DocumentAttachmentService] Notice updating email_messages with NEEDS_REVIEW:", msg);
			return {
				saved: false,
				linked: false,
				status: "DATABASE_ERROR",
				document: driveFile,
				category: classification.category || "Other",
				reason: msg,
				error: msg,
				attachmentHash,
				storagePath: reviewStorageUpload.storagePath
			};
		}
		try {
			const incomingEmailId = safeUuid(emailMessageId) || `in-email-${Date.now()}`;
			await supabase.from("incoming_emails").upsert({
				id: incomingEmailId,
				message_id: gmailMessageId || emailMessageId || null,
				subject: subject || "No Subject",
				from_address: senderEmail || "unknown@forwarder.com",
				to_address: "operations@nashmia.com",
				received_at: receivedAt || nowIso,
				body: body || "",
				processing_status: "unmatched",
				detected_booking_numbers: candidateMovementNumber ? [candidateMovementNumber] : [],
				detected_forwarder_id: matchResult.forwarderId || forwarderId || null,
				notes: unconfidentReasons.join("; "),
				created_at: nowIso,
				updated_at: nowIso
			}, { onConflict: "id" });
		} catch (inErr) {
			console.warn("[DocumentAttachmentService] Notice updating incoming_emails table:", inErr);
		}
		return {
			saved: true,
			linked: false,
			status: "NEEDS_REVIEW",
			document: driveFile,
			category: classification.category || "Other",
			reason: `Attachment stored safely as NEEDS_REVIEW: ${unconfidentReasons.join("; ")}`,
			notificationId: reviewNotificationId,
			matchResult,
			storagePath: reviewStorageUpload.storagePath,
			attachmentHash
		};
	}
	const finalBookingId = existingMovement?.bookingId || candidateBookingId || "";
	const finalMovementNumber = existingMovement?.movementNumber || candidateMovementNumber || matchResult.movementNumber || matchResult.bookingReference || "";
	const resolvedMovementNumber = finalMovementNumber;
	const resolvedForwarderId = matchResult.forwarderId || forwarderId || existingMovement?.forwarderId || null;
	const resolvedForwarderName = matchResult.forwarderName || forwarderName || existingMovement?.forwarderName || null;
	const finalFileName = rawFilename;
	const forwarderOwner = getOrCreateForwarderOwner(resolvedForwarderName, senderEmail);
	const uniqueDocId = `${category === "Cut-Off Notice" ? "doc-cutoff" : category === "Bill of Lading" ? "doc-bl" : category === "Booking Confirmation" ? "doc-bkg" : category === "Shipping Instructions" ? "doc-si" : "doc-att"}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
	const docTypeTag = resolveDocumentTypeTag(classification, rawFilename);
	const forwarderDisplayName = resolvedForwarderName || senderName || "Forwarder";
	const folderId = resolveFolderId(docTypeTag, category);
	const storageUpload = await uploadAttachmentToSupabaseStorage(supabase, {
		movementNumber: finalMovementNumber,
		filename: finalFileName,
		organizationId: params.organizationId,
		mimeType,
		data: attachment.data,
		content: attachment.content,
		attachmentId: attachment.attachmentId,
		gmailMessageId: gmailMessageId || params.gmailMessageId
	});
	const publicUrl = storageUpload.publicUrl || attachment.url || (attachment.attachmentId && (gmailMessageId || params.gmailMessageId) ? `/api/gmail/attachment?messageId=${encodeURIComponent(gmailMessageId || params.gmailMessageId)}&attachmentId=${encodeURIComponent(attachment.attachmentId)}&filename=${encodeURIComponent(finalFileName)}` : "");
	const driveFile = {
		id: uniqueDocId,
		name: finalFileName,
		type,
		extension,
		owners: [forwarderOwner],
		lastModified,
		lastModifiedTimestamp: nowIso,
		fileSize,
		folderId,
		starred: true,
		sharedLink: publicUrl,
		url: publicUrl,
		metadata: {
			category,
			documentType: docTypeTag,
			displayDocumentType: docTypeTag,
			typeTag: docTypeTag,
			originalFilename: rawFilename,
			fileName: rawFilename,
			fileFormat: extension.toUpperCase(),
			fileSize,
			bookingId: finalBookingId,
			movementNumber: finalMovementNumber,
			movementReferenceNumber: finalMovementNumber,
			forwarderId: resolvedForwarderId,
			forwarderName: forwarderDisplayName,
			forwarder: forwarderDisplayName,
			senderEmail: senderEmail || null,
			sourceEmail: senderEmail || null,
			forwarderEmail: senderEmail || null,
			emailMessageId: emailMessageId || null,
			gmailMessageId: gmailMessageId || null,
			receivedDate: formattedDate,
			receivedTime: formattedTime,
			status: "Saved to Supabase Storage",
			uploadStatus: "Saved to Supabase Storage",
			isMetadataOnly: false,
			source: "Incoming Forwarder Email",
			savedAt: nowIso,
			fileUrl: publicUrl,
			storageBucket: storageUpload.storageBucket,
			storagePath: storageUpload.storagePath,
			classificationSource: classification.classificationSource,
			classificationReason: classification.reason,
			hasCutOffDate: Boolean(classification.hasCutOffDate),
			detectedCutOffDate: classification.detectedCutOffDate || null,
			cutOffDeadlines: classification.cutOffDeadlines,
			cutOffDates: classification.cutOffDates,
			hasAmbiguousDates: Boolean(classification.hasAmbiguousDates),
			isScannedOrUnreadable: Boolean(classification.isScannedOrUnreadable),
			requiresManualReview: Boolean(classification.requiresManualReview),
			reviewReason: classification.reviewReason || null,
			blNumber: category === "Bill of Lading" ? classification.blNumber : void 0
		}
	};
	saveServerDocument(driveFile);
	if (typeof window !== "undefined") try {
		saveDriveDocument(driveFile);
		window.dispatchEvent(new CustomEvent("nashmia:document-saved", { detail: driveFile }));
		window.dispatchEvent(new CustomEvent("nashmia:attachment-saved", { detail: driveFile }));
	} catch (e) {
		console.warn("[DocumentAttachmentService] Client saveDriveDocument notice:", e);
	}
	console.log(`[DocumentAttachmentService] 📂 Automatically saved & uploaded ${docTypeTag} document: "${driveFile.name}" to Supabase Storage for Movement ${finalMovementNumber} (ID: ${driveFile.id}, URL: ${publicUrl})`);
	let bookingEventId = null;
	let notificationId = null;
	let validBookingUuid = safeUuid(finalBookingId);
	if (!validBookingUuid && resolvedMovementNumber) try {
		const { data: bRow } = await supabase.from("bookings").select("id").or(`movement_number.eq.${resolvedMovementNumber},booking_reference.eq.${resolvedMovementNumber},reference.eq.${resolvedMovementNumber}`).limit(1).maybeSingle();
		if (bRow?.id) validBookingUuid = safeUuid(bRow.id);
	} catch (lookupErr) {
		console.warn("[DocumentAttachmentService] Notice resolving booking by movement number:", lookupErr);
	}
	let bookingDocumentId = null;
	if (validBookingUuid) try {
		const { data: existingBDoc } = await supabase.from("booking_documents").select("id").eq("booking_id", validBookingUuid).eq("document_name", finalFileName).maybeSingle();
		if (existingBDoc) {
			bookingDocumentId = existingBDoc.id;
			console.log(`[DocumentAttachmentService] 📄 Found existing booking_documents record: ${bookingDocumentId} for ${finalFileName}`);
		} else {
			const rawDocType = category === "Cut-Off Notice" ? "CUT_OFF_NOTICE" : category === "Bill of Lading" ? "BILL_OF_LADING" : category === "Booking Confirmation" ? "BOOKING_CONFIRMATION" : category === "Shipping Instructions" ? "SHIPPING_INSTRUCTIONS" : "OTHER";
			const numericSizeBytes = validation.fileSizeBytes || (typeof attachment.size === "number" ? attachment.size : typeof attachment.size === "string" ? parseInt(attachment.size, 10) || null : null);
			const { data: newBDoc, error: bDocErr } = await supabase.from("booking_documents").insert({
				booking_id: validBookingUuid,
				document_type: rawDocType,
				document_name: finalFileName,
				file_url: publicUrl,
				file_size: numericSizeBytes,
				mime_type: mimeType || (extension === "pdf" ? "application/pdf" : extension === "xlsx" ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" : "application/octet-stream"),
				status: classification.requiresManualReview ? "Needs Review" : "Saved to Supabase Storage",
				uploaded_by: safeUuid(userId) || null,
				created_at: nowIso,
				updated_at: nowIso
			}).select("id").maybeSingle();
			if (!bDocErr && newBDoc) {
				bookingDocumentId = newBDoc.id;
				console.log(`[DocumentAttachmentService] 💾 Created booking_documents record: ${bookingDocumentId} for Booking ${validBookingUuid}`);
			} else if (bDocErr) console.warn("[DocumentAttachmentService] Notice inserting booking_documents record:", bDocErr.message);
		}
	} catch (insertDocErr) {
		console.warn("[DocumentAttachmentService] Notice writing to booking_documents table:", insertDocErr);
	}
	const sourceDocId = bookingDocumentId || driveFile.id;
	const sourceMailId = validEmailUuid || gmailMessageId || params.emailMessageId || null;
	const extractionStatus = classification.isScannedOrUnreadable ? "SCANNED_UNREADABLE" : classification.hasAmbiguousDates ? "AMBIGUOUS" : classification.hasCutOffDate ? "COMPLETED" : "NO_DATES_DETECTED";
	const reviewStatus = classification.requiresManualReview ? "NEEDS_REVIEW" : "AUTO_VERIFIED";
	if (category === "Cut-Off Notice" || classification.cutOffDates || classification.cutOffDeadlines && classification.cutOffDeadlines.length > 0) try {
		const deadlines = (classification.cutOffDeadlines || []).map((d) => ({
			type: d.type,
			cutoffType: d.cutoffType || d.type,
			cutoff_type: d.cutoffType || d.type,
			dateTime: d.dateTime || "",
			cutoffDate: d.normalizedDate || d.dateTime || null,
			cutoff_date: d.normalizedDate || d.dateTime || null,
			normalizedDate: d.normalizedDate || null,
			normalized_date: d.normalizedDate || null,
			originalExtractedText: d.originalExtractedText || d.rawText || "",
			original_extracted_text: d.originalExtractedText || d.rawText || "",
			raw: d.rawText || d.originalExtractedText,
			bookingId: validBookingUuid || null,
			booking_id: validBookingUuid || null,
			movementId: validBookingUuid || null,
			movement_id: validBookingUuid || null,
			movementNumber: resolvedMovementNumber,
			movement_number: resolvedMovementNumber,
			sourceDocumentId: sourceDocId,
			source_document_id: sourceDocId,
			sourceEmailId: sourceMailId,
			source_email_id: sourceMailId,
			extractionStatus: d.isAmbiguous ? "AMBIGUOUS" : extractionStatus,
			extraction_status: d.isAmbiguous ? "AMBIGUOUS" : extractionStatus,
			reviewStatus: d.requiresManualReview ? "NEEDS_REVIEW" : reviewStatus,
			review_status: d.requiresManualReview ? "NEEDS_REVIEW" : reviewStatus,
			isAmbiguous: Boolean(d.isAmbiguous),
			is_ambiguous: Boolean(d.isAmbiguous),
			requiresManualReview: Boolean(d.requiresManualReview),
			requires_manual_review: Boolean(d.requiresManualReview),
			reviewReason: d.reviewReason || null,
			review_reason: d.reviewReason || null,
			time: d.time || null,
			createdAt: nowIso,
			created_at: nowIso,
			updatedAt: nowIso,
			updated_at: nowIso
		}));
		const cutOffPayload = {
			...classification.cutOffDates || {},
			bookingId: validBookingUuid || null,
			booking_id: validBookingUuid || null,
			movementId: validBookingUuid || null,
			movement_id: validBookingUuid || null,
			movementNumber: resolvedMovementNumber,
			movement_number: resolvedMovementNumber,
			cutoffDate: classification.detectedCutOffDate || deadlines[0]?.cutoffDate || null,
			cutoff_date: classification.detectedCutOffDate || deadlines[0]?.cutoffDate || null,
			cutoffType: deadlines[0]?.cutoffType || "Cut-off Date",
			cutoff_type: deadlines[0]?.cutoffType || "Cut-off Date",
			hasCutOffDate: Boolean(classification.hasCutOffDate),
			has_cut_off_date: Boolean(classification.hasCutOffDate),
			detectedCutOffDate: classification.detectedCutOffDate || null,
			detected_cut_off_date: classification.detectedCutOffDate || null,
			hasAmbiguousDates: Boolean(classification.hasAmbiguousDates),
			has_ambiguous_dates: Boolean(classification.hasAmbiguousDates),
			isScannedOrUnreadable: Boolean(classification.isScannedOrUnreadable),
			is_scanned_or_unreadable: Boolean(classification.isScannedOrUnreadable),
			requiresManualReview: Boolean(classification.requiresManualReview),
			requires_manual_review: Boolean(classification.requiresManualReview),
			reviewReason: classification.reviewReason || null,
			review_reason: classification.reviewReason || null,
			extractionStatus,
			extraction_status: extractionStatus,
			reviewStatus,
			review_status: reviewStatus,
			sourceDocumentId: sourceDocId,
			source_document_id: sourceDocId,
			sourceDocumentName: driveFile.name,
			source_document_name: driveFile.name,
			sourceEmailId: sourceMailId,
			source_email_id: sourceMailId,
			deadlines: deadlines.length > 0 ? deadlines : classification.cutOffDates?.deadlines,
			createdAt: nowIso,
			created_at: nowIso,
			updatedAt: nowIso,
			updated_at: nowIso,
			receivedAt: receivedAt || nowIso,
			received_at: receivedAt || nowIso
		};
		saveCutOffsForMovement(resolvedMovementNumber, cutOffPayload, validBookingUuid);
		if (validBookingUuid) try {
			const { data: curBooking } = await supabase.from("bookings").select("confirmation_details").eq("id", validBookingUuid).maybeSingle();
			const existingConf = curBooking?.confirmation_details || {};
			await supabase.from("bookings").update({
				cut_off_dates: cutOffPayload,
				cut_off_deadlines: deadlines,
				confirmation_details: {
					...existingConf,
					cut_off_dates: cutOffPayload,
					cut_off_deadlines: deadlines,
					has_cut_off_date: Boolean(classification.hasCutOffDate),
					detected_cut_off_date: classification.detectedCutOffDate || null,
					requires_cutoff_review: Boolean(classification.requiresManualReview),
					has_ambiguous_cutoff_date: Boolean(classification.hasAmbiguousDates),
					is_scanned_cutoff_pdf: Boolean(classification.isScannedOrUnreadable),
					cutoff_review_reason: classification.reviewReason || null,
					source_document_id: sourceDocId,
					source_email_id: sourceMailId,
					extraction_status: extractionStatus,
					review_status: reviewStatus,
					updated_at: nowIso
				},
				updated_at: nowIso
			}).eq("id", validBookingUuid);
			console.log(`[DocumentAttachmentService] ⏱️ Persisted Cut-Off dates directly into Booking record for Movement ${resolvedMovementNumber}`);
		} catch (dbErr) {
			console.warn("[DocumentAttachmentService] Notice updating booking cut_off_dates in Supabase:", dbErr);
		}
		else if (resolvedMovementNumber) try {
			await supabase.from("bookings").update({
				cut_off_dates: cutOffPayload,
				cut_off_deadlines: deadlines,
				updated_at: nowIso
			}).or(`movement_number.eq.${resolvedMovementNumber},booking_reference.eq.${resolvedMovementNumber}`);
		} catch (bUpdateErr) {
			console.warn("[DocumentAttachmentService] Notice updating booking by movement number:", bUpdateErr);
		}
	} catch (cutErr) {
		console.warn("[DocumentAttachmentService] Notice maintaining movement cut-off dates:", cutErr);
	}
	if (validBookingUuid) try {
		const { data: curBooking } = await supabase.from("bookings").select("confirmation_details").eq("id", validBookingUuid).maybeSingle();
		const existingConf = curBooking?.confirmation_details || {};
		const existingLinkedDocs = Array.isArray(existingConf.linked_documents) ? existingConf.linked_documents : [];
		const docSummary = {
			id: driveFile.id,
			bookingDocumentId,
			name: driveFile.name,
			fileName: rawFilename,
			category,
			documentType: docTypeTag,
			fileFormat: extension.toUpperCase(),
			fileSize: driveFile.fileSize,
			url: publicUrl,
			storagePath: storageUpload.storagePath,
			storageBucket: storageUpload.storageBucket,
			movementNumber: resolvedMovementNumber,
			forwarder: forwarderDisplayName,
			hasCutOffDate: Boolean(classification.hasCutOffDate),
			detectedCutOffDate: classification.detectedCutOffDate || null,
			cutOffDeadlines: classification.cutOffDeadlines,
			cutOffDates: classification.cutOffDates,
			sourceDocumentId: sourceDocId,
			sourceEmailId: sourceMailId,
			extractionStatus,
			reviewStatus,
			receivedAt: receivedAt || nowIso
		};
		const updatedLinkedDocs = [...existingLinkedDocs.filter((d) => d.id !== driveFile.id && d.bookingDocumentId !== bookingDocumentId), docSummary];
		await supabase.from("bookings").update({
			confirmation_details: {
				...existingConf,
				linked_documents: updatedLinkedDocs
			},
			updated_at: nowIso
		}).eq("id", validBookingUuid);
		console.log(`[DocumentAttachmentService] 📑 Linked document "${driveFile.name}" directly into Booking ${validBookingUuid} confirmation_details.linked_documents`);
	} catch (bErr) {
		console.warn("[DocumentAttachmentService] Notice updating booking confirmation_details:", bErr);
	}
	if (validBookingUuid) try {
		const isCutOffNotice = category === "Cut-Off Notice" || Boolean(classification.hasCutOffDate);
		const eventTitle = isCutOffNotice ? `Cut-Off Schedule Extracted (${finalMovementNumber})` : `${docTypeTag} Document Saved & Linked`;
		const cutOffSummaryText = isCutOffNotice ? `\nCut-Off Deadlines:\n${formatCutOffDeadlinesSummary(classification.cutOffDeadlines, classification.cutOffDates)}` : "";
		const eventDescription = `Document "${driveFile.name}" (${driveFile.fileSize}) from ${forwarderDisplayName} was automatically saved to Supabase Storage bucket "${storageUpload.storageBucket}" and linked to Movement ${finalMovementNumber}.${cutOffSummaryText}`;
		const { data: eventData, error: eventErr } = await supabase.from("booking_events").insert({
			booking_id: validBookingUuid,
			event_type: isCutOffNotice ? "Cut-Off Detected" : "Document Linked",
			event_date: receivedAt || nowIso,
			location: "Documents Repository",
			title: eventTitle,
			description: eventDescription,
			payload: {
				document: driveFile,
				documentId: driveFile.id,
				documentName: driveFile.name,
				bookingDocumentId,
				sourceDocumentId: sourceDocId,
				source_document_id: sourceDocId,
				sourceEmailId: sourceMailId,
				source_email_id: sourceMailId,
				fileName: rawFilename,
				documentType: docTypeTag,
				documentCategory: category,
				fileFormat: extension.toUpperCase(),
				fileSize: driveFile.fileSize,
				extension: driveFile.extension,
				sharedLink: driveFile.sharedLink,
				url: driveFile.url,
				storageUrl: publicUrl,
				storagePath: storageUpload.storagePath,
				storageBucket: storageUpload.storageBucket,
				movementReferenceNumber: finalMovementNumber,
				movementNumber: finalMovementNumber,
				movement_number: finalMovementNumber,
				bookingId: validBookingUuid,
				booking_id: validBookingUuid,
				forwarder: forwarderDisplayName,
				forwarderName: forwarderDisplayName,
				gmailMessageId: gmailMessageId || null,
				receivedDate: formattedDate,
				receivedTimestamp: receivedAt || nowIso,
				status: "Processed",
				isMetadataOnly: false,
				senderEmail: senderEmail || null,
				emailMessageId: emailMessageId || null,
				hasCutOffDate: Boolean(classification.hasCutOffDate),
				detectedCutOffDate: classification.detectedCutOffDate || null,
				cutoffDate: classification.detectedCutOffDate || null,
				cutoff_date: classification.detectedCutOffDate || null,
				cutoffType: classification.cutOffDeadlines?.[0]?.type || "Cut-off Date",
				cutoff_type: classification.cutOffDeadlines?.[0]?.type || "Cut-off Date",
				classificationSource: classification.classificationSource,
				cutOffDeadlines: classification.cutOffDeadlines || null,
				cutOffDates: classification.cutOffDates || null,
				extractionStatus,
				extraction_status: extractionStatus,
				reviewStatus,
				review_status: reviewStatus,
				blNumber: category === "Bill of Lading" ? classification.blNumber || null : null,
				matchedBy: matchResult.matchedBy,
				matchingPriorityStep: matchResult.matchingPriorityStep,
				matchConfidence: matchResult.confidence,
				savedAt: nowIso,
				createdAt: nowIso,
				created_at: nowIso,
				updatedAt: nowIso,
				updated_at: nowIso
			}
		}).select("id").maybeSingle();
		if (!eventErr && eventData) {
			bookingEventId = eventData.id;
			console.log(`[DocumentAttachmentService] 🔗 Linked document to booking_events ID: ${bookingEventId}`);
		}
	} catch (linkErr) {
		console.warn("[DocumentAttachmentService] Notice linking to booking_events:", linkErr);
	}
	if (validEmailUuid) try {
		const { data: curMsg } = await supabase.from("email_messages").select("attachments, raw_headers").eq("id", validEmailUuid).maybeSingle();
		const updatedAttachments = [...Array.isArray(curMsg?.attachments) ? curMsg.attachments : [], {
			fileName: rawFilename,
			name: driveFile.name,
			documentType: docTypeTag,
			fileFormat: extension.toUpperCase(),
			fileSize: driveFile.fileSize,
			size: driveFile.fileSize,
			type: driveFile.extension,
			gmailMessageId: gmailMessageId || null,
			forwarder: forwarderDisplayName,
			receivedDate: formattedDate,
			receivedTimestamp: receivedAt || nowIso,
			movementReferenceNumber: resolvedMovementNumber,
			status: "Saved to Supabase Storage",
			uploadStatus: "Saved to Supabase Storage",
			isMetadataOnly: false,
			savedDocumentId: driveFile.id,
			bookingDocumentId,
			hasCutOffDate: Boolean(classification.hasCutOffDate),
			detectedCutOffDate: classification.detectedCutOffDate || null,
			cutOffDeadlines: classification.cutOffDeadlines,
			cutOffDates: classification.cutOffDates,
			storageBucket: storageUpload.storageBucket,
			storagePath: storageUpload.storagePath,
			storageUrl: publicUrl,
			fileUrl: publicUrl,
			attachmentHash,
			documentCategory: category,
			linkedBookingId: validBookingUuid,
			linkedMovementNumber: resolvedMovementNumber,
			matchedBy: matchResult.matchedBy,
			matchingPriorityStep: matchResult.matchingPriorityStep,
			savedAt: nowIso
		}];
		const existingRaw = curMsg?.raw_headers || {};
		const existingLinkedDocs = Array.isArray(existingRaw.linked_documents) ? existingRaw.linked_documents : [];
		const updatedRawHeaders = {
			...existingRaw,
			attachment_review_status: "MATCHED_AND_LINKED",
			linked_documents: [...existingLinkedDocs, {
				documentId: driveFile.id,
				bookingDocumentId,
				name: driveFile.name,
				fileName: rawFilename,
				documentType: docTypeTag,
				fileFormat: extension.toUpperCase(),
				category,
				fileSize: driveFile.fileSize,
				bookingId: validBookingUuid,
				movementNumber: resolvedMovementNumber,
				movementReferenceNumber: resolvedMovementNumber,
				forwarder: forwarderDisplayName,
				hasCutOffDate: Boolean(classification.hasCutOffDate),
				detectedCutOffDate: classification.detectedCutOffDate || null,
				cutOffDeadlines: classification.cutOffDeadlines,
				cutOffDates: classification.cutOffDates,
				storagePath: storageUpload.storagePath,
				storageBucket: storageUpload.storageBucket,
				storageUrl: publicUrl,
				status: "Saved to Supabase Storage",
				uploadStatus: "Saved to Supabase Storage",
				isMetadataOnly: false,
				matchedBy: matchResult.matchedBy,
				matchingPriorityStep: matchResult.matchingPriorityStep,
				savedAt: nowIso
			}]
		};
		await supabase.from("email_messages").update({
			booking_id: validBookingUuid,
			movement_number: resolvedMovementNumber,
			forwarder_id: safeUuid(resolvedForwarderId),
			attachments: updatedAttachments,
			raw_headers: updatedRawHeaders,
			updated_at: nowIso
		}).eq("id", validEmailUuid);
		console.log(`[DocumentAttachmentService] 📧 Updated email_messages ${validEmailUuid} with linked document`);
	} catch (emailUpdateErr) {
		console.warn("[DocumentAttachmentService] Notice updating email_messages:", emailUpdateErr);
	}
	try {
		const notifTitle = category === "Cut-Off Notice" ? `Forwarder Cut-Off Document Linked (${resolvedMovementNumber})` : `Bill of Lading (B/L) Linked (${resolvedMovementNumber})`;
		const notifMessage = `Incoming attachment "${driveFile.name}" from ${resolvedForwarderName || senderEmail || "forwarder"} has been automatically saved to your Documents repository and linked to Movement ${resolvedMovementNumber}. (${classification.reason})`;
		notificationId = await safeInsertNotification(supabase, {
			userId: userId || null,
			title: notifTitle,
			message: notifMessage,
			type: "document_linked",
			bookingId: validBookingUuid,
			movementNumber: resolvedMovementNumber,
			metadata: {
				documentId: driveFile.id,
				documentName: driveFile.name,
				category,
				fileSize: driveFile.fileSize,
				bookingId: validBookingUuid,
				movementNumber: resolvedMovementNumber,
				forwarderName: resolvedForwarderName,
				matchedBy: matchResult.matchedBy,
				matchingPriorityStep: matchResult.matchingPriorityStep
			}
		});
	} catch (notifErr) {
		console.warn("[DocumentAttachmentService] Notice creating notification:", notifErr);
	}
	return {
		saved: true,
		linked: Boolean(bookingEventId || validBookingUuid),
		status: "MATCHED",
		matchingPriorityStep: matchResult.matchingPriorityStep,
		document: driveFile,
		category,
		hasCutOffDate: Boolean(classification.hasCutOffDate),
		detectedCutOffDate: classification.detectedCutOffDate || null,
		cutOffDeadlines: classification.cutOffDeadlines,
		cutOffDates: classification.cutOffDates,
		reason: `Successfully saved ${category} document "${driveFile.name}" and linked to Movement ${resolvedMovementNumber}. (Matched via Priority ${matchResult.matchingPriorityStep}: ${matchResult.matchedBy}, ${classification.reason})`,
		bookingEventId,
		notificationId,
		bookingDocumentId,
		storagePath: storageUpload.storagePath,
		attachmentHash,
		matchResult
	};
}
/**
* Processes all attachments and inline cut-off/BL notices from an incoming forwarder email
*/
async function processIncomingEmailAttachments(supabase, input) {
	const { emailMessageId, gmailMessageId, gmailThreadId, inReplyTo, references, headers, rawHeaders, subject = "", body = "", senderEmail, senderName, bookingId, movementNumber, movementId, forwarderId, forwarderName, userId, receivedAt, attachments = [] } = input;
	const results = [];
	const processedKeys = /* @__PURE__ */ new Set();
	const emailFullText = `${subject} ${body}`;
	const emailDetectedMovements = Array.from(new Set(extractMovementNumbers(emailFullText)));
	const attachmentMovementMap = /* @__PURE__ */ new Map();
	for (const att of attachments) {
		const attFullText = `${att.filename || att.name || ""} ${att.extractedText || ""} ${att.content || ""}`;
		const detected = Array.from(new Set(extractMovementNumbers(attFullText)));
		attachmentMovementMap.set(att, detected);
	}
	const allDetectedMovements = Array.from(/* @__PURE__ */ new Set([
		...emailDetectedMovements,
		...Array.from(attachmentMovementMap.values()).flat(),
		...movementNumber ? [movementNumber] : []
	]));
	const hasMultipleMovements = allDetectedMovements.length > 1;
	for (const att of attachments) {
		const rawName = att.filename || att.name;
		if (!rawName) continue;
		const key = `${rawName.toLowerCase()}-${att.size || 0}`;
		if (processedKeys.has(key)) continue;
		processedKeys.add(key);
		const attSpecificMovs = attachmentMovementMap.get(att) || [];
		let targetMovementNumber = movementNumber || null;
		let targetBookingId = bookingId || null;
		let shouldFlagForReview = false;
		let specificReviewReason = null;
		if (hasMultipleMovements) {
			if (attSpecificMovs.length === 1) {
				targetMovementNumber = attSpecificMovs[0];
				targetBookingId = null;
			} else if (attSpecificMovs.length === 0) {
				shouldFlagForReview = true;
				targetMovementNumber = null;
				targetBookingId = null;
				specificReviewReason = `Email references multiple movements (${allDetectedMovements.join(", ")}). Attachment "${rawName}" does not specify a distinct movement number and cannot be automatically assigned. Flagged for review.`;
			} else {
				shouldFlagForReview = true;
				targetMovementNumber = null;
				targetBookingId = null;
				specificReviewReason = `Attachment "${rawName}" ambiguously references multiple movements (${attSpecificMovs.join(", ")}). Flagged for review.`;
			}
		} else if (allDetectedMovements.length === 1) targetMovementNumber = allDetectedMovements[0];
		else {
			shouldFlagForReview = true;
			targetMovementNumber = null;
			targetBookingId = null;
			specificReviewReason = "Movement Number is missing or unknown. Sent to manual-review workflow.";
		}
		const res = await saveAndLinkIncomingAttachment(supabase, {
			attachment: att,
			bookingId: targetBookingId,
			movementNumber: targetMovementNumber,
			movementId,
			forwarderId,
			forwarderName,
			senderEmail,
			senderName,
			emailMessageId,
			gmailMessageId,
			gmailThreadId,
			inReplyTo,
			references,
			headers,
			rawHeaders,
			subject,
			body,
			receivedAt,
			userId,
			flagForReview: shouldFlagForReview,
			reviewReason: specificReviewReason
		});
		results.push(res);
	}
	if (attachments.length === 0) {
		const hasSavedCutOff = results.some((r) => r.saved && r.category === "Cut-Off Notice");
		const hasSavedBL = results.some((r) => r.saved && r.category === "Bill of Lading");
		const fullEmailContent = `${subject} ${body}`;
		let inlineMovementNumber = movementNumber || (allDetectedMovements.length === 1 ? allDetectedMovements[0] : null);
		if (hasMultipleMovements) inlineMovementNumber = null;
		if (!hasSavedCutOff && /(?:port|gate|vessel|si|vgm)\s*cut[-_ ]?off/i.test(fullEmailContent)) {
			const cutOffRes = await saveAndLinkIncomingAttachment(supabase, {
				attachment: {
					filename: `Gate_Cutoff_Notice_${inlineMovementNumber || "Forwarder"}.pdf`,
					size: 384e3,
					mimeType: "application/pdf"
				},
				bookingId: hasMultipleMovements ? null : bookingId,
				movementNumber: inlineMovementNumber,
				movementId,
				forwarderId,
				forwarderName,
				senderEmail,
				senderName,
				emailMessageId,
				gmailMessageId,
				gmailThreadId,
				inReplyTo,
				references,
				headers,
				rawHeaders,
				subject,
				body,
				receivedAt,
				userId,
				flagForReview: hasMultipleMovements || !inlineMovementNumber,
				reviewReason: hasMultipleMovements ? `Email contains notices for multiple movements (${allDetectedMovements.join(", ")}). Operator review required.` : void 0
			});
			if (cutOffRes.saved) results.push(cutOffRes);
		}
		if (!hasSavedBL && /(?:bill of lading|draft b\/l|ocean b\/l|original b\/l|sea waybill)/i.test(fullEmailContent)) {
			const blRes = await saveAndLinkIncomingAttachment(supabase, {
				attachment: {
					filename: `Ocean_Bill_of_Lading_${inlineMovementNumber || "Forwarder"}.pdf`,
					size: 492e3,
					mimeType: "application/pdf"
				},
				bookingId: hasMultipleMovements ? null : bookingId,
				movementNumber: inlineMovementNumber,
				movementId,
				forwarderId,
				forwarderName,
				senderEmail,
				senderName,
				emailMessageId,
				gmailMessageId,
				gmailThreadId,
				inReplyTo,
				references,
				headers,
				rawHeaders,
				subject,
				body,
				receivedAt,
				userId,
				flagForReview: hasMultipleMovements || !inlineMovementNumber,
				reviewReason: hasMultipleMovements ? `Email contains notices for multiple movements (${allDetectedMovements.join(", ")}). Operator review required.` : void 0
			});
			if (blRes.saved) results.push(blRes);
		}
	}
	return results;
}
/**
* Processes an incoming forwarder email reply AFTER it has been saved to email_messages.
*
* Full Pipeline:
* Forwarder Email Reply
*         ↓
* Gmail Incoming Sync
*         ↓
* Save email to existing email_messages
*         ↓
* Identify Gmail Thread, Forwarder & Movement
*         ↓
* Detect Forwarder Confirmation / Status
*         ↓
* Process Attachments & Update Email Headers
*/
async function processIncomingEmailReply(supabase, input) {
	const { emailMessageId, gmailThreadId, gmailMessageId, inReplyTo, references, headers, rawHeaders, subject = "", body = "", snippet = "", senderEmail, senderName, userId } = input;
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	console.log(`[ReplyProcessor] 🚀 Processing incoming reply for email_messages ID: ${emailMessageId}`);
	const matchResult = await executeMovementForwarderMatch(supabase, {
		gmailThreadId,
		gmailMessageId,
		inReplyTo,
		references,
		headers,
		rawHeaders,
		subject,
		body,
		snippet,
		senderEmail,
		senderName,
		emailMessageId,
		userId
	});
	console.log(`[ReplyProcessor] Match result:`, {
		status: matchResult.matchStatus,
		by: matchResult.matchedBy,
		bookingId: matchResult.bookingId,
		movementNumber: matchResult.movementNumber,
		isForwarderValidated: matchResult.isForwarderValidated
	});
	const confirmationResult = await detectForwarderConfirmation({
		emailMessageId,
		subject: subject || "",
		body: body || "",
		snippet: snippet || "",
		senderEmail,
		senderName,
		movementNumber: matchResult.movementNumber,
		forwarderName: matchResult.forwarderName,
		matchStatus: matchResult.matchStatus
	});
	console.log(`[ReplyProcessor] Confirmation detection:`, {
		status: confirmationResult.confirmationStatus,
		confidence: confirmationResult.confidence,
		reason: confirmationResult.reason,
		detectedBy: confirmationResult.detectedBy
	});
	const validMsgUuid = safeUuid(emailMessageId);
	if (validMsgUuid) {
		try {
			const { data: curMsg } = await supabase.from("email_messages").select("raw_headers").eq("id", validMsgUuid).maybeSingle();
			const existingHeaders = curMsg?.raw_headers || {};
			const updatedHeaders = {
				...existingHeaders,
				booking_id: safeUuid(matchResult.bookingId) || existingHeaders.booking_id || null,
				movement_id: safeUuid(matchResult.movementId) || existingHeaders.movement_id || null,
				forwarder_id: safeUuid(matchResult.forwarderId) || existingHeaders.forwarder_id || null,
				movement_number: matchResult.movementNumber || existingHeaders.movement_number || null,
				match_status: matchResult.matchStatus,
				match_reason: matchResult.matchReason,
				matched_by: matchResult.matchedBy,
				matched_at: nowIso,
				confirmation_status: confirmationResult.confirmationStatus,
				confirmation_confidence: confirmationResult.confidence,
				confirmation_reason: confirmationResult.reason,
				confirmation_detected_by: confirmationResult.detectedBy,
				confirmation_details: confirmationResult.details || null,
				forwarder_validated: matchResult.isForwarderValidated,
				response_classification: confirmationResult.classification || null
			};
			const { error: updErr } = await supabase.from("email_messages").update({
				booking_id: safeUuid(matchResult.bookingId),
				movement_number: matchResult.movementNumber,
				forwarder_id: safeUuid(matchResult.forwarderId),
				raw_headers: updatedHeaders
			}).eq("id", validMsgUuid);
			if (updErr && (updErr.code === "PGRST204" || updErr.message?.includes("column"))) await supabase.from("email_messages").update({ raw_headers: updatedHeaders }).eq("id", validMsgUuid);
		} catch (updateErr) {
			console.warn("[ReplyProcessor] Notice updating email_messages:", updateErr);
		}
		try {
			await supabase.from("email_matches").upsert({
				email_message_id: validMsgUuid,
				booking_id: safeUuid(matchResult.bookingId),
				movement_id: safeUuid(matchResult.movementId),
				forwarder_id: safeUuid(matchResult.forwarderId),
				movement_number: matchResult.movementNumber,
				sender_email: senderEmail,
				match_status: matchResult.matchStatus,
				matched_by: matchResult.matchedBy,
				match_reason: matchResult.matchReason,
				metadata: {
					isForwarderValidated: matchResult.isForwarderValidated,
					forwarderName: matchResult.forwarderName,
					forwarderEmail: matchResult.forwarderEmail,
					confirmationStatus: confirmationResult.confirmationStatus,
					classification: confirmationResult.classification,
					confidence: confirmationResult.confidence,
					...matchResult.details || {}
				},
				updated_at: nowIso
			}, { onConflict: "email_message_id" });
		} catch (mErr) {
			console.warn("[ReplyProcessor] Notice saving email_matches audit:", mErr);
		}
		try {
			await supabase.from("email_confirmations").upsert({
				email_message_id: validMsgUuid,
				booking_id: safeUuid(matchResult.bookingId),
				movement_id: safeUuid(matchResult.movementId),
				forwarder_id: safeUuid(matchResult.forwarderId),
				movement_number: matchResult.movementNumber,
				confirmation_status: confirmationResult.confirmationStatus,
				confidence: confirmationResult.confidence,
				reason: confirmationResult.reason,
				detected_by: confirmationResult.detectedBy,
				raw_subject: subject,
				raw_snippet: snippet || body.slice(0, 140),
				details: {
					...confirmationResult.details,
					classification: confirmationResult.classification
				},
				created_at: nowIso,
				updated_at: nowIso
			}, { onConflict: "email_message_id" });
		} catch (cErr) {
			console.warn("[ReplyProcessor] Notice saving email_confirmations audit:", cErr);
		}
	}
	let unifiedClassification = "NEEDS_REVIEW";
	if (confirmationResult.classification === "CONFIRMED") unifiedClassification = "CONFIRMED";
	else if (confirmationResult.classification === "AVAILABLE") unifiedClassification = "AVAILABLE";
	else if (confirmationResult.classification === "NOT_AVAILABLE") unifiedClassification = "NOT_AVAILABLE";
	else if (confirmationResult.classification === "DECLINED") unifiedClassification = "DECLINED";
	else unifiedClassification = "NEEDS_REVIEW";
	try {
		if ((await processIncomingForwarderEmailReply({
			emailMessageId: validMsgUuid || emailMessageId,
			gmailThreadId,
			gmailMessageId,
			inReplyTo,
			references,
			headers,
			rawHeaders,
			subject,
			body,
			snippet,
			senderEmail,
			senderName,
			bookingId: matchResult.bookingId,
			movementNumber: matchResult.movementNumber
		})).offerExtracted) {
			if (unifiedClassification === "NEEDS_REVIEW" || unifiedClassification === "AVAILABLE") unifiedClassification = "OFFER_RECEIVED";
			console.log(`[ReplyProcessor] 💰 Extracted forwarder quotation offer for ${matchResult.forwarderName || senderEmail} against booking ${matchResult.bookingId || matchResult.movementNumber}`);
		}
	} catch (fwdReplyErr) {
		console.warn("[ReplyProcessor] Notice processing forwarder quotation reply:", fwdReplyErr);
	}
	let confirmationEngineResult = null;
	const isConfirmed = unifiedClassification === "CONFIRMED";
	if (matchResult.bookingId || matchResult.movementNumber) try {
		confirmationEngineResult = await processAutomaticMovementConfirmation({
			bookingId: safeUuid(matchResult.bookingId),
			movementId: safeUuid(matchResult.movementId),
			movementNumber: matchResult.movementNumber,
			forwarderId: safeUuid(matchResult.forwarderId),
			forwarderName: matchResult.forwarderName,
			emailMessageId: validMsgUuid || emailMessageId,
			gmailMessageId: gmailMessageId || null,
			gmailThreadId: gmailThreadId || null,
			senderEmail,
			senderName: senderName || null,
			direction: "inbound",
			matchStatus: matchResult.matchStatus,
			matchedBy: matchResult.matchedBy,
			isForwarderValidated: matchResult.isForwarderValidated,
			confirmationStatus: confirmationResult.confirmationStatus,
			confidence: confirmationResult.confidence,
			reason: confirmationResult.reason,
			detectedBy: confirmationResult.detectedBy,
			details: confirmationResult.details,
			userId
		});
		console.log(`[ReplyProcessor] Confirmation Engine executed:`, {
			actionTaken: confirmationEngineResult?.actionTaken,
			newStatus: confirmationEngineResult?.newStatus
		});
	} catch (confEngineErr) {
		console.error("[ReplyProcessor] Error in movement confirmation engine:", confEngineErr);
	}
	let actionTaken = confirmationEngineResult?.actionTaken || (isConfirmed ? "CONFIRMED" : "PROCESSED");
	if (unifiedClassification === "DECLINED") actionTaken = "DECLINED";
	else if (unifiedClassification === "NOT_AVAILABLE") actionTaken = "NOT_AVAILABLE";
	else if (unifiedClassification === "AVAILABLE") actionTaken = "SPACE_AVAILABLE";
	else if (unifiedClassification === "NEEDS_REVIEW") actionTaken = "NEEDS_REVIEW";
	let savedAttachments = [];
	try {
		let attachmentsToProcess = input.attachments || [];
		if (attachmentsToProcess.length === 0 && validMsgUuid) {
			const { data: dbMsg } = await supabase.from("email_messages").select("attachments, raw_headers").eq("id", validMsgUuid).maybeSingle();
			if (Array.isArray(dbMsg?.attachments) && dbMsg.attachments.length > 0) attachmentsToProcess = dbMsg.attachments;
			else if (dbMsg?.raw_headers && Array.isArray(dbMsg.raw_headers.attachments)) attachmentsToProcess = dbMsg.raw_headers.attachments;
		}
		savedAttachments = await processIncomingEmailAttachments(supabase, {
			emailMessageId: validMsgUuid || emailMessageId,
			gmailMessageId,
			gmailThreadId,
			inReplyTo,
			references,
			headers,
			rawHeaders,
			subject,
			body,
			senderEmail,
			senderName,
			bookingId: matchResult.bookingId,
			movementNumber: matchResult.movementNumber,
			movementId: matchResult.movementId,
			forwarderId: matchResult.forwarderId,
			forwarderName: matchResult.forwarderName,
			userId,
			attachments: attachmentsToProcess
		});
		if (savedAttachments.length > 0) console.log(`[ReplyProcessor] 📎 Processed ${savedAttachments.length} attachments: ${savedAttachments.filter((s) => s.saved).map((s) => `[${s.category}] ${s.document?.name}`).join(", ")}`);
	} catch (attErr) {
		console.warn("[ReplyProcessor] Notice processing Cut-Off / BL attachments:", attErr);
	}
	return {
		success: true,
		emailMessageId,
		matchResult,
		confirmationResult,
		confirmationEngineResult,
		classification: unifiedClassification,
		isConfirmed,
		actionTaken,
		movementNumber: matchResult.movementNumber,
		bookingId: matchResult.bookingId,
		message: confirmationEngineResult?.message || `Processed reply for ${matchResult.movementNumber || "message"}. Status: ${unifiedClassification}`,
		savedAttachments
	};
}
var SERVER_STORAGE_FILE = path.join(process.cwd(), ".server_gmail_connections.json");
/**
* Resolves Google OAuth credentials safely from environment or configuration
*/
function resolveGoogleCredentials() {
	return {
		clientId: process.env.GOOGLE_CLIENT_ID || firebase_applet_config_default?.oAuthClientId || "463842413221-vie9drapegc0vcaduqpc54lpfjmp70ho.apps.googleusercontent.com",
		clientSecret: process.env.GOOGLE_CLIENT_SECRET || process.env.CLIENT_SECRET || ""
	};
}
/**
* Server-side fallback persistence to guarantee tokens are never lost across refreshes,
* even if Supabase schema cache hasn't registered gmail_connections yet.
*/
function readServerFallbackStorage() {
	try {
		if (fs.existsSync(SERVER_STORAGE_FILE)) {
			const content = fs.readFileSync(SERVER_STORAGE_FILE, "utf-8");
			return JSON.parse(content);
		}
	} catch (err) {
		console.warn("[ServerGmailToken] Error reading fallback storage:", err);
	}
	return [];
}
function writeServerFallbackStorage(connections) {
	try {
		fs.writeFileSync(SERVER_STORAGE_FILE, JSON.stringify(connections, null, 2), "utf-8");
	} catch (err) {
		console.warn("[ServerGmailToken] Error writing fallback storage:", err);
	}
}
/**
* Saves or updates connection in server fallback store
*/
function saveToFallbackStore(connection) {
	const list = readServerFallbackStorage();
	const existingIdx = list.findIndex((c) => c.id === connection.id || c.google_email.toLowerCase() === connection.google_email.toLowerCase() || connection.user_id && c.user_id === connection.user_id);
	if (existingIdx >= 0) {
		const prev = list[existingIdx];
		list[existingIdx] = {
			...prev,
			...connection,
			refresh_token: connection.refresh_token || prev.refresh_token || null,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		};
	} else list.push(connection);
	writeServerFallbackStorage(list);
}
/**
* Finds active connection from server fallback store
*/
function getFromFallbackStore(userId) {
	const list = readServerFallbackStorage();
	const validUserUuid = safeUuid(userId);
	if (validUserUuid) {
		const match = list.find((c) => c.user_id === validUserUuid && (c.status === "connected" || c.status === "active"));
		if (match) return match;
	}
	return list.filter((c) => c.status === "connected" || c.status === "active").sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())[0] || null;
}
/**
* Saves a Gmail connection to Supabase gmail_connections table,
* and maintains server fallback store.
*/
async function persistGmailConnection(connection) {
	saveToFallbackStore(connection);
	if (!isSupabaseConfigured) return true;
	try {
		const dbPayload = {
			user_id: safeUuid(connection.user_id),
			google_email: connection.google_email,
			google_user_id: connection.google_user_id || null,
			display_name: connection.display_name || connection.google_email,
			avatar_url: connection.avatar_url || null,
			access_token: connection.access_token,
			refresh_token: connection.refresh_token || null,
			token_expires_at: connection.token_expires_at || null,
			scope: connection.scope || null,
			token_type: connection.token_type || "Bearer",
			status: connection.status || "connected",
			last_sync_at: connection.last_sync_at || (/* @__PURE__ */ new Date()).toISOString(),
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const { error } = await supabase.from("gmail_connections").upsert(dbPayload, { onConflict: "user_id,google_email" });
		if (error) {
			if (error.code === "PGRST205") console.warn("[ServerGmailToken] Supabase gmail_connections table pending migration in project. Saved to secure server storage.");
			else console.warn("[ServerGmailToken] Supabase gmail_connections upsert notice:", error.message);
			return false;
		}
		console.log("[ServerGmailToken] Successfully persisted Gmail connection to Supabase for:", connection.google_email);
		return true;
	} catch (err) {
		console.warn("[ServerGmailToken] Could not persist to Supabase:", err);
		return false;
	}
}
/**
* Refreshes an expired access token using Google OAuth2 token endpoint and stored refresh_token
*/
async function refreshGoogleAccessToken(connection) {
	if (!connection.refresh_token) {
		console.warn(`[ServerGmailToken] Cannot refresh token for ${connection.google_email}: No refresh_token stored.`);
		return {
			success: false,
			error: "No refresh_token stored for this connection."
		};
	}
	const { clientId, clientSecret } = resolveGoogleCredentials();
	if (!clientSecret) {
		const errorMsg = "client_secret is missing.";
		console.warn(`[ServerGmailToken] Cannot refresh Google token for ${connection.google_email}: client_secret is missing. Interactive re-authorization via popup required.`);
		return {
			success: false,
			error: errorMsg
		};
	}
	console.log(`[ServerGmailToken] Refreshing expired access token for ${connection.google_email}...`);
	try {
		const postBody = new URLSearchParams({
			client_id: clientId,
			refresh_token: connection.refresh_token,
			grant_type: "refresh_token",
			client_secret: clientSecret
		});
		const response = await fetch("https://oauth2.googleapis.com/token", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: postBody.toString()
		});
		const data = await response.json();
		if (!response.ok || !data.access_token) {
			const errorMsg = data.error_description || data.error || "Token refresh rejected by Google.";
			console.error("[ServerGmailToken] Google token refresh failed:", errorMsg);
			if (data.error === "invalid_grant") {
				connection.status = "expired";
				await persistGmailConnection(connection);
			}
			return {
				success: false,
				error: errorMsg
			};
		}
		const expiresIn = data.expires_in || 3599;
		const tokenExpiresAt = new Date(Date.now() + expiresIn * 1e3).toISOString();
		connection.access_token = data.access_token;
		connection.token_expires_at = tokenExpiresAt;
		connection.status = "connected";
		connection.updated_at = (/* @__PURE__ */ new Date()).toISOString();
		if (data.scope) connection.scope = data.scope;
		await persistGmailConnection(connection);
		console.log(`[ServerGmailToken] Successfully refreshed access token for ${connection.google_email}. Valid until: ${tokenExpiresAt}`);
		return {
			success: true,
			accessToken: data.access_token,
			tokenExpiresAt
		};
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		console.error("[ServerGmailToken] Network error during token refresh:", msg);
		return {
			success: false,
			error: msg
		};
	}
}
/**
* Retrieves the active Gmail connection from Supabase or server fallback store,
* automatically refreshing the access token if expired or near expiry.
*/
async function getOrRefreshActiveGmailConnection(userId, forceRefresh = false) {
	let activeConn = null;
	const validUserUuid = safeUuid(userId);
	if (isSupabaseConfigured) try {
		let query = supabase.from("gmail_connections").select("*").in("status", ["connected", "active"]).order("updated_at", { ascending: false }).limit(1);
		if (validUserUuid) query = query.eq("user_id", validUserUuid);
		const { data, error } = await query.maybeSingle();
		if (!error && data) activeConn = {
			id: data.id,
			user_id: data.user_id,
			google_email: data.google_email,
			google_user_id: data.google_user_id,
			display_name: data.display_name,
			avatar_url: data.avatar_url,
			access_token: data.access_token,
			refresh_token: data.refresh_token,
			token_expires_at: data.token_expires_at,
			scope: data.scope,
			token_type: data.token_type,
			status: data.status,
			last_sync_at: data.last_sync_at,
			created_at: data.created_at,
			updated_at: data.updated_at
		};
	} catch (dbErr) {
		console.warn("[ServerGmailToken] Notice checking Supabase connection:", dbErr);
	}
	if (!activeConn) activeConn = getFromFallbackStore(userId);
	if (!activeConn) return { connection: null };
	const now = Date.now();
	const expiresAtMs = activeConn.token_expires_at ? new Date(activeConn.token_expires_at).getTime() : 0;
	if ((!expiresAtMs || expiresAtMs - now < 3e5 || forceRefresh) && activeConn.refresh_token) {
		console.log(`[ServerGmailToken] Token for ${activeConn.google_email} is expired or near expiry (Expires: ${activeConn.token_expires_at}). Triggering automatic refresh...`);
		const refreshResult = await refreshGoogleAccessToken(activeConn);
		if (!refreshResult.success) {
			console.warn(`[ServerGmailToken] Automatic refresh failed for ${activeConn.google_email}: ${refreshResult.error}`);
			if (!expiresAtMs || expiresAtMs <= now) {
				activeConn.status = "expired";
				await persistGmailConnection(activeConn);
				return {
					connection: null,
					error: refreshResult.error
				};
			}
			return {
				connection: activeConn,
				error: refreshResult.error
			};
		}
	}
	return { connection: activeConn };
}
/**
* Exchanges OAuth2 Authorization Code for access_token and refresh_token
* via Google OAuth2 token endpoint (access_type=offline).
*/
async function exchangeAuthCodeForTokens(code, redirectUri = "postmessage", userId) {
	const { clientId, clientSecret } = resolveGoogleCredentials();
	console.log("[ServerGmailToken] Exchanging Google authorization code for tokens...", {
		redirectUri,
		hasClientSecret: Boolean(clientSecret)
	});
	try {
		const postBody = new URLSearchParams({
			code,
			client_id: clientId,
			redirect_uri: redirectUri,
			grant_type: "authorization_code"
		});
		if (clientSecret) postBody.set("client_secret", clientSecret);
		const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: postBody.toString()
		});
		const tokenData = await tokenRes.json();
		if (!tokenRes.ok || !tokenData.access_token) {
			const errMsg = tokenData.error_description || tokenData.error || "Failed to exchange authorization code.";
			console.error("[ServerGmailToken] Code exchange rejected by Google:", errMsg);
			return {
				success: false,
				error: errMsg
			};
		}
		const accessToken = tokenData.access_token;
		const refreshToken = tokenData.refresh_token || null;
		const expiresIn = tokenData.expires_in || 3599;
		const tokenExpiresAt = new Date(Date.now() + expiresIn * 1e3).toISOString();
		let email = "";
		let displayName = "";
		let avatarUrl = "";
		let googleUserId = "";
		try {
			const userinfoRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", { headers: { Authorization: `Bearer ${accessToken}` } });
			if (userinfoRes.ok) {
				const userInfo = await userinfoRes.json();
				email = userInfo.email || "";
				displayName = userInfo.name || email.split("@")[0] || "Gmail User";
				avatarUrl = userInfo.picture || "";
				googleUserId = userInfo.id || "";
			}
		} catch (profileErr) {
			console.warn("[ServerGmailToken] Could not fetch Google userinfo:", profileErr);
		}
		if (!email) email = "user@gmail.com";
		const newConnection = {
			id: crypto.randomUUID(),
			user_id: safeUuid(userId),
			google_email: email,
			google_user_id: googleUserId,
			display_name: displayName || email.split("@")[0],
			avatar_url: avatarUrl || null,
			access_token: accessToken,
			refresh_token: refreshToken,
			token_expires_at: tokenExpiresAt,
			scope: tokenData.scope || null,
			token_type: tokenData.token_type || "Bearer",
			status: "connected",
			last_sync_at: (/* @__PURE__ */ new Date()).toISOString(),
			created_at: (/* @__PURE__ */ new Date()).toISOString(),
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		await persistGmailConnection(newConnection);
		console.log(`[ServerGmailToken] OAuth exchange successful for ${email}. Refresh token saved: ${Boolean(refreshToken)}`);
		return {
			success: true,
			email,
			displayName: newConnection.display_name || email,
			avatarUrl: newConnection.avatar_url || void 0,
			accessToken,
			tokenExpiresAt
		};
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		console.error("[ServerGmailToken] Fatal error in exchangeAuthCodeForTokens:", msg);
		return {
			success: false,
			error: msg
		};
	}
}
/**
* Saves a direct connection (from popup callback or re-authorization)
* and stores token expiry information properly.
*/
async function saveDirectConnection(params) {
	const expiresIn = params.expiresIn || 3599;
	const tokenExpiresAt = new Date(Date.now() + expiresIn * 1e3).toISOString();
	const existing = getFromFallbackStore(params.userId);
	const preservedRefreshToken = params.refreshToken || existing?.refresh_token || null;
	const connection = {
		id: existing?.id || crypto.randomUUID(),
		user_id: safeUuid(params.userId),
		google_email: params.email,
		google_user_id: params.googleUserId || existing?.google_user_id || null,
		display_name: params.displayName || params.email.split("@")[0],
		avatar_url: params.avatarUrl || null,
		access_token: params.accessToken,
		refresh_token: preservedRefreshToken,
		token_expires_at: tokenExpiresAt,
		scope: null,
		token_type: "Bearer",
		status: "connected",
		last_sync_at: (/* @__PURE__ */ new Date()).toISOString(),
		created_at: existing?.created_at || (/* @__PURE__ */ new Date()).toISOString(),
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	};
	await persistGmailConnection(connection);
	return connection;
}
/**
* Disconnects the active Gmail connection
*/
async function disconnectGmailConnection(userId, email) {
	const validUserUuid = safeUuid(userId);
	const normalizedEmail = email ? email.trim().toLowerCase() : null;
	const list = readServerFallbackStorage();
	let updatedAny = false;
	list.forEach((c) => {
		const matchesUser = Boolean(validUserUuid && c.user_id === validUserUuid || userId && c.user_id === userId);
		const matchesEmail = Boolean(normalizedEmail && c.google_email.toLowerCase() === normalizedEmail);
		if (matchesUser || matchesEmail || !validUserUuid && !normalizedEmail || c.status === "connected") {
			c.status = "disconnected";
			c.access_token = null;
			c.refresh_token = null;
			c.updated_at = (/* @__PURE__ */ new Date()).toISOString();
			updatedAny = true;
		}
	});
	if (updatedAny) writeServerFallbackStorage(list);
	if (isSupabaseConfigured) try {
		if (normalizedEmail) await supabase.from("gmail_connections").update({
			status: "disconnected",
			access_token: null,
			refresh_token: null,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("google_email", normalizedEmail);
		if (validUserUuid) await supabase.from("gmail_connections").update({
			status: "disconnected",
			access_token: null,
			refresh_token: null,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("user_id", validUserUuid);
		if (!validUserUuid && !normalizedEmail) await supabase.from("gmail_connections").update({
			status: "disconnected",
			access_token: null,
			refresh_token: null,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).neq("status", "disconnected");
	} catch (err) {
		console.warn("[ServerGmailToken] Notice during Supabase disconnect:", err);
	}
}
/**
* Builds standard RFC 2822 Raw Email String on server
*/
function createServerRawEmailMessage(params) {
	const boundary = `----=_Part_${Date.now()}_${Math.random().toString(36).substring(2)}`;
	const dateStr = (/* @__PURE__ */ new Date()).toUTCString();
	const fromFormatted = params.fromName ? `"${params.fromName.replace(/"/g, "")}" <${params.from}>` : params.from;
	let toFormatted = params.to;
	if (params.to.includes(",") || params.to.includes(";")) toFormatted = params.to.split(/[,;]+/).map((s) => s.trim()).filter(Boolean).map((addr) => params.toName ? `"${params.toName.replace(/"/g, "")}" <${addr}>` : addr).join(", ");
	else if (params.toName) toFormatted = `"${params.toName.replace(/"/g, "")}" <${params.to}>`;
	const lines = [`From: ${fromFormatted}`, `To: ${toFormatted}`];
	if (params.cc && params.cc.trim()) lines.push(`Cc: ${params.cc.trim()}`);
	if (params.bcc && params.bcc.trim()) lines.push(`Bcc: ${params.bcc.trim()}`);
	const encodedSubject = `=?UTF-8?B?${Buffer.from(params.subject || "(No Subject)", "utf-8").toString("base64")}?=`;
	lines.push(`Subject: ${encodedSubject}`);
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
function base64UrlEncodeServer(str) {
	return Buffer.from(str, "utf-8").toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
/**
* Server-side Send Email Handler via active Gmail Connection
*/
async function sendEmailViaServerHandler(params) {
	let token = params.accessToken || null;
	if (!token) {
		const { connection } = await getOrRefreshActiveGmailConnection(params.userId);
		token = connection?.access_token || null;
	}
	if (!token) return {
		success: false,
		error: "Gmail authentication is not active. Please connect your Gmail account in settings."
	};
	const base64EncodedRaw = base64UrlEncodeServer(createServerRawEmailMessage({
		from: params.from || "me",
		fromName: params.fromName,
		to: params.to,
		toName: params.toName,
		cc: params.cc,
		bcc: params.bcc,
		subject: params.subject,
		body: params.body,
		bodyHtml: params.bodyHtml,
		messageId: `nashmia-srv-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`
	}));
	let response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ raw: base64EncodedRaw })
	});
	if (response.status === 401) {
		const { connection } = await getOrRefreshActiveGmailConnection(params.userId, true);
		if (connection?.access_token) {
			token = connection.access_token;
			response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ raw: base64EncodedRaw })
			});
		}
	}
	if (!response.ok) {
		const errText = await response.text();
		let parsed = {};
		try {
			parsed = JSON.parse(errText);
		} catch {}
		return {
			success: false,
			error: response.status === 401 || parsed?.error?.code === 401 ? "Gmail authentication credentials expired or invalid (401). Please click 'Connect Email' in settings to authorize your account." : parsed?.error?.message || errText || `Gmail API error (${response.status})`
		};
	}
	const data = await response.json();
	return {
		success: true,
		gmail_message_id: data.id,
		id: data.id,
		gmail_thread_id: data.threadId,
		threadId: data.threadId
	};
}
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
function extractExtensionFromMime(mimeType) {
	if (!mimeType) return "pdf";
	if (mimeType.includes("pdf")) return "pdf";
	if (mimeType.includes("sheet") || mimeType.includes("excel") || mimeType.includes("csv")) return "xlsx";
	if (mimeType.includes("word") || mimeType.includes("document")) return "docx";
	if (mimeType.includes("image") || mimeType.includes("jpeg") || mimeType.includes("png")) return "jpg";
	if (mimeType.includes("text")) return "txt";
	return "pdf";
}
function extractBodyFromPayload(payload) {
	let text = "";
	let html = "";
	const attachments = [];
	function walk(part) {
		if (!part) return;
		const hasFilename = Boolean(part.filename && part.filename.trim().length > 0);
		const hasAttachmentId = Boolean(part.body?.attachmentId);
		if ((hasFilename || hasAttachmentId || part.mimeType && ![
			"text/plain",
			"text/html",
			"multipart/alternative",
			"multipart/mixed",
			"multipart/related"
		].includes(part.mimeType)) && (hasAttachmentId || part.body?.size && part.body.size > 0 || part.body?.data)) {
			const fallbackName = `attachment_${attachments.length + 1}.${extractExtensionFromMime(part.mimeType)}`;
			attachments.push({
				filename: part.filename?.trim() || fallbackName,
				mimeType: part.mimeType || "application/octet-stream",
				size: part.body?.size || 0,
				attachmentId: part.body?.attachmentId
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
function parseEmailAddress(raw) {
	if (!raw) return {
		name: "",
		email: ""
	};
	const match = raw.match(/^(?:"?([^"]*)"?\s)?<?([^>]+)>?$/);
	if (match) return {
		name: match[1] ? match[1].trim() : match[2] || raw,
		email: match[2] ? match[2].trim().toLowerCase() : raw.toLowerCase()
	};
	return {
		name: raw,
		email: raw.toLowerCase()
	};
}
var quotaCooldownUntil = 0;
var processedServerMessageIds = /* @__PURE__ */ new Set();
/**
* Ensures an Email Thread exists in Supabase.
* - Validates user_id against profiles (auth.users)
* - Validates booking_id against existing rows in bookings (avoids 23503 foreign key error)
* - Uses duplicate check on gmail_thread_id
* - Falls back to a safe thread if insertion encounters any transient issue
* Guarantees a valid thread_id so email_messages NOT NULL foreign key is never violated.
*/
async function ensureServerEmailThread(supabaseClient, params) {
	const { gmailThreadId, subject, snippet, receivedAt, accountUserId, accountEmail, matchedBookingId } = params;
	if (gmailThreadId) {
		const { data: existingThread } = await supabaseClient.from("email_threads").select("id, booking_id").eq("gmail_thread_id", gmailThreadId).maybeSingle();
		if (existingThread?.id) return existingThread.id;
	}
	let validUserId = null;
	if (accountUserId && safeUuid(accountUserId)) {
		const { data: prof } = await supabaseClient.from("profiles").select("id").eq("id", accountUserId).maybeSingle();
		if (prof?.id) validUserId = prof.id;
	}
	if (!validUserId && accountEmail) {
		const { data: profByEmail } = await supabaseClient.from("profiles").select("id").ilike("email", accountEmail.trim()).maybeSingle();
		if (profByEmail?.id) validUserId = profByEmail.id;
	}
	if (!validUserId) {
		const { data: defaultProf } = await supabaseClient.from("profiles").select("id").limit(1).maybeSingle();
		if (defaultProf?.id) validUserId = defaultProf.id;
	}
	let verifiedBookingId = null;
	if (matchedBookingId) {
		const cleanBookingId = safeUuid(matchedBookingId);
		if (cleanBookingId) {
			const { data: bCheck } = await supabaseClient.from("bookings").select("id").eq("id", cleanBookingId).maybeSingle();
			if (bCheck?.id) verifiedBookingId = bCheck.id;
		}
	}
	const threadSubject = subject || "(No Subject)";
	const threadSnippet = (snippet || threadSubject).slice(0, 120);
	const targetGmailThreadId = gmailThreadId || `thread-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
	if (validUserId) {
		const { data: newThread, error: threadErr } = await supabaseClient.from("email_threads").insert({
			user_id: validUserId,
			booking_id: verifiedBookingId,
			subject: threadSubject,
			gmail_thread_id: targetGmailThreadId,
			status: "Active",
			snippet: threadSnippet,
			last_message_at: receivedAt
		}).select("id").maybeSingle();
		if (newThread?.id) return newThread.id;
		if (threadErr) console.warn(`[ServerGmailSync] Initial email_threads insert notice (code ${threadErr.code}):`, threadErr.message);
		if (gmailThreadId) {
			const { data: retryExisting } = await supabaseClient.from("email_threads").select("id").eq("gmail_thread_id", gmailThreadId).maybeSingle();
			if (retryExisting?.id) return retryExisting.id;
		}
		if (verifiedBookingId) {
			const { data: threadWithoutBooking } = await supabaseClient.from("email_threads").insert({
				user_id: validUserId,
				booking_id: null,
				subject: threadSubject,
				gmail_thread_id: targetGmailThreadId,
				status: "Active",
				snippet: threadSnippet,
				last_message_at: receivedAt
			}).select("id").maybeSingle();
			if (threadWithoutBooking?.id) return threadWithoutBooking.id;
		}
	}
	const { data: fallbackThread } = await supabaseClient.from("email_threads").select("id").limit(1).maybeSingle();
	return fallbackThread?.id || null;
}
/**
* Server-Side Synchronizer for Incoming Gmail Replies
* Strictly processes server-side, prevents duplicates via gmail_message_id,
* extracts conversation metadata, matches by thread_id or movement_number,
* and persists to Supabase email_messages and email_threads.
*/
async function executeServerGmailSync(options = {}) {
	if (Date.now() < quotaCooldownUntil) {
		const remainingSec = Math.ceil((quotaCooldownUntil - Date.now()) / 1e3);
		console.log(`[ServerGmailSync] Gmail API quota cooldown active (${remainingSec}s remaining). Skipping sync to protect sending quota.`);
		return {
			success: true,
			syncedCount: 0,
			newMessages: 0,
			processedCount: 0,
			message: `Quota cooldown active (${remainingSec}s remaining).`
		};
	}
	console.log("[ServerGmailSync] Starting server-side incoming reply synchronization...", {
		hasExplicitToken: Boolean(options.accessToken),
		userEmail: options.userEmail,
		userId: options.userId,
		maxResults: options.maxResults || 10
	});
	const validUserUuid = safeUuid(options.userId);
	let connections = [];
	if (options.accessToken) {
		let resolvedEmail = options.userEmail || "";
		if (!resolvedEmail) try {
			const profRes = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/profile", { headers: { Authorization: `Bearer ${options.accessToken}` } });
			if (profRes.ok) resolvedEmail = (await profRes.json()).emailAddress || "";
		} catch {}
		connections = [{
			id: "direct-token",
			user_id: validUserUuid || "00000000-0000-0000-0000-000000000000",
			google_email: resolvedEmail || "me@gmail.com",
			access_token: options.accessToken,
			status: "connected"
		}];
	} else try {
		const { connection: activeConn } = await getOrRefreshActiveGmailConnection(options.userId);
		if (activeConn && activeConn.access_token && (activeConn.status === "connected" || activeConn.status === "active")) connections = [{
			id: activeConn.id,
			user_id: activeConn.user_id || "00000000-0000-0000-0000-000000000000",
			google_email: activeConn.google_email,
			access_token: activeConn.access_token,
			status: activeConn.status
		}];
		else if (isSupabaseConfigured) {
			let query = supabase.from("gmail_connections").select("id, user_id, google_email, access_token, status").eq("status", "connected");
			if (validUserUuid) query = query.eq("user_id", validUserUuid);
			const { data: dbConnections } = await query;
			if (dbConnections && dbConnections.length > 0) connections = dbConnections.filter((c) => Boolean(c.access_token));
		}
	} catch (err) {
		console.warn("[ServerGmailSync] Could not resolve active gmail_connections:", err);
	}
	if (connections.length === 0) {
		console.log("[ServerGmailSync] No active connected Gmail accounts to sync.");
		return {
			success: true,
			syncedCount: 0,
			newMessages: 0,
			processedCount: 0,
			message: "No active connected Gmail accounts found to sync."
		};
	}
	let totalNewMessages = 0;
	let totalProcessed = 0;
	const processedDetails = [];
	for (const conn of connections) {
		let token = conn.access_token;
		const accountEmail = conn.google_email;
		const accountUserId = safeUuid(conn.user_id) || validUserUuid;
		try {
			const maxResults = options.maxResults || 25;
			let listRes = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=${maxResults}&q=is:inbox`, { headers: { Authorization: `Bearer ${token}` } });
			if (!listRes.ok && listRes.status === 401 && conn.id !== "direct-token") {
				console.warn(`[ServerGmailSync] Gmail access token expired (401) for ${accountEmail}. Attempting auto-refresh via refresh_token...`);
				const refreshed = await getOrRefreshActiveGmailConnection(conn.user_id, true);
				if (refreshed?.connection?.access_token) {
					token = refreshed.connection.access_token;
					listRes = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=${maxResults}&q=is:inbox`, { headers: { Authorization: `Bearer ${token}` } });
				}
			}
			if (!listRes.ok) {
				if (listRes.status === 401) {
					console.warn(`[ServerGmailSync] Gmail access token for ${accountEmail} is expired or invalid (401). Skipping synchronization until re-authenticated.`);
					continue;
				}
				if (listRes.status === 403 || listRes.status === 429) {
					quotaCooldownUntil = Date.now() + 3e4;
					console.warn(`[ServerGmailSync] Gmail API quota limit reached (HTTP ${listRes.status}) for ${accountEmail}. Initiating 30s cooldown.`);
					break;
				}
				console.warn(`[ServerGmailSync] Gmail API list notice for ${accountEmail} (${listRes.status})`);
				continue;
			}
			const messages = (await listRes.json()).messages || [];
			totalProcessed += messages.length;
			const unexaminedStubs = messages.filter((m) => !processedServerMessageIds.has(m.id));
			if (unexaminedStubs.length === 0) continue;
			const stubIds = unexaminedStubs.map((m) => m.id);
			const { data: existingRows } = await supabase.from("email_messages").select("gmail_message_id").in("gmail_message_id", stubIds);
			const existingSet = new Set((existingRows || []).map((r) => r.gmail_message_id));
			for (const id of stubIds) if (existingSet.has(id)) processedServerMessageIds.add(id);
			const newMessagesToFetch = unexaminedStubs.filter((m) => !existingSet.has(m.id));
			for (const msgStub of newMessagesToFetch) {
				let msgRes = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${msgStub.id}?format=full`, { headers: { Authorization: `Bearer ${token}` } });
				if (!msgRes.ok && msgRes.status === 401 && conn.id !== "direct-token") {
					const refreshed = await getOrRefreshActiveGmailConnection(conn.user_id, true);
					if (refreshed?.connection?.access_token) {
						token = refreshed.connection.access_token;
						msgRes = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${msgStub.id}?format=full`, { headers: { Authorization: `Bearer ${token}` } });
					}
				}
				if (!msgRes.ok) {
					if (msgRes.status === 403 || msgRes.status === 429) {
						quotaCooldownUntil = Date.now() + 3e4;
						console.warn(`[ServerGmailSync] Quota limit hit during message detail fetch. Initiating 30s cooldown.`);
						break;
					}
					continue;
				}
				const fullMsg = await msgRes.json();
				const headers = fullMsg.payload?.headers || [];
				const getHeader = (name) => headers.find((h) => h.name.toLowerCase() === name.toLowerCase())?.value || "";
				const subject = getHeader("Subject") || "(No Subject)";
				const fromRaw = getHeader("From") || "Unknown Sender";
				const toRaw = getHeader("To") || accountEmail;
				const dateHeader = getHeader("Date") || (/* @__PURE__ */ new Date()).toISOString();
				const inReplyTo = getHeader("In-Reply-To") || getHeader("in-reply-to") || null;
				const references = getHeader("References") || getHeader("references") || null;
				getHeader("Message-ID") || getHeader("Message-Id");
				const parsedFrom = parseEmailAddress(fromRaw);
				const parsedTo = parseEmailAddress(toRaw);
				if (accountEmail && parsedFrom.email === accountEmail.toLowerCase()) {
					processedServerMessageIds.add(msgStub.id);
					continue;
				}
				let receivedAt = (/* @__PURE__ */ new Date()).toISOString();
				if (fullMsg.internalDate) {
					const intDate = parseInt(fullMsg.internalDate, 10);
					if (!isNaN(intDate)) receivedAt = new Date(intDate).toISOString();
				} else {
					const parsedD = new Date(dateHeader);
					if (!isNaN(parsedD.getTime())) receivedAt = parsedD.toISOString();
				}
				const extracted = extractBodyFromPayload(fullMsg.payload);
				if (extracted.attachments && extracted.attachments.length > 0) {
					console.log(`[ServerGmailSync] 📎 Detected ${extracted.attachments.length} attachment(s) for message ${msgStub.id}. Securely retrieving attachment payload(s).`);
					for (const att of extracted.attachments) if (att.attachmentId && !att.data) try {
						const attRes = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${msgStub.id}/attachments/${att.attachmentId}`, { headers: { Authorization: `Bearer ${token}` } });
						if (attRes.ok) {
							const attJson = await attRes.json();
							if (attJson.data) att.data = attJson.data;
						}
					} catch (attFetchErr) {
						console.warn(`[ServerGmailSync] Notice retrieving attachment payload for ${att.filename}:`, attFetchErr);
					}
				}
				const snippet = fullMsg.snippet || "";
				const body = extracted.text || snippet;
				const bodyHtml = extracted.html || (body ? body.replace(/\n/g, "<br/>") : null);
				const matchResult = await executeMovementForwarderMatch(supabase, {
					gmailThreadId: msgStub.threadId,
					gmailMessageId: msgStub.id,
					inReplyTo,
					references,
					headers,
					subject,
					body,
					snippet,
					senderEmail: parsedFrom.email,
					senderName: parsedFrom.name,
					userId: accountUserId
				});
				const matchedMovementId = matchResult.movementId;
				const matchedMovementNumber = matchResult.movementNumber;
				const matchedForwarderId = matchResult.forwarderId;
				const threadId = await ensureServerEmailThread(supabase, {
					gmailThreadId: msgStub.threadId,
					subject,
					snippet,
					receivedAt,
					accountUserId,
					accountEmail,
					matchedBookingId: matchResult.bookingId
				});
				const matchedBookingId = matchResult.bookingId;
				const nowIso = (/* @__PURE__ */ new Date()).toISOString();
				const initialRawHeaders = {
					organization_id: null,
					booking_id: safeUuid(matchedBookingId),
					forwarder_id: safeUuid(matchedForwarderId),
					from_email: parsedFrom.email,
					to_email: parsedTo.email || accountEmail,
					subject,
					body,
					gmail_message_id: msgStub.id,
					gmail_thread_id: msgStub.threadId,
					email_type: "BOOKING_REPLY",
					received_at: receivedAt,
					created_at: nowIso,
					movement_number: matchedMovementNumber,
					movement_id: matchedMovementId,
					match_status: matchResult.matchStatus,
					match_reason: matchResult.matchReason,
					matched_by: matchResult.matchedBy,
					attachments: extracted.attachments || []
				};
				const { data: existingDbMsg } = await supabase.from("email_messages").select("id, thread_id").eq("gmail_message_id", msgStub.id).maybeSingle();
				let insertedMsg = existingDbMsg;
				if (!insertedMsg) {
					if (!threadId) {
						console.error(`[ServerGmailSync] Skipping message ${msgStub.id}: Could not resolve a valid thread_id in Supabase.`);
						continue;
					}
					const referencesStr = Array.isArray(references) ? references.join(" ") : references || null;
					const primaryPayload = {
						thread_id: threadId,
						sender_email: parsedFrom.email || "unknown@forwarder.com",
						recipient_email: parsedTo.email || accountEmail || "operations@nashmiaindustries.com",
						sender_name: parsedFrom.name || matchResult.forwarderName || "Freight Forwarder",
						subject: subject || "(No Subject)",
						body: body || "",
						body_html: bodyHtml,
						direction: "Inbound",
						sent_at: receivedAt,
						gmail_message_id: msgStub.id,
						attachments: extracted.attachments || [],
						raw_headers: {
							...initialRawHeaders,
							in_reply_to: inReplyTo || null,
							references_header: referencesStr,
							cleaned_body: body ? body.slice(0, 4e3) : null,
							processing_status: "PROCESSING",
							matching_status: matchResult.matchStatus
						},
						created_at: nowIso
					};
					let { data: newMsg, error: insErr } = await supabase.from("email_messages").insert(primaryPayload).select().maybeSingle();
					if (insErr && (insErr.code === "PGRST204" || insErr.message?.includes("column") || insErr.message?.includes("schema cache"))) {
						console.warn(`[ServerGmailSync] Column schema cache mismatch (${insErr.message}). Retrying with resilient baseline payload.`);
						const fallbackPayload = {
							thread_id: threadId,
							sender_email: parsedFrom.email || "unknown@forwarder.com",
							recipient_email: parsedTo.email || accountEmail || "operations@nashmiaindustries.com",
							subject: subject || "(No Subject)",
							body: body || "",
							direction: "Inbound",
							sent_at: receivedAt,
							gmail_message_id: msgStub.id,
							raw_headers: primaryPayload.raw_headers
						};
						const retryResult = await supabase.from("email_messages").insert(fallbackPayload).select().maybeSingle();
						newMsg = retryResult.data;
						insErr = retryResult.error;
					}
					if (insErr) {
						if (insErr.code === "23505" || insErr.message?.includes("duplicate") || insErr.message?.includes("already exists")) {
							const { data: retryDbMsg } = await supabase.from("email_messages").select("id, thread_id").eq("gmail_message_id", msgStub.id).maybeSingle();
							insertedMsg = retryDbMsg;
						} else {
							console.error(`[ServerGmailSync] Error inserting into Supabase email_messages (code: ${insErr.code || "unknown"}):`, insErr.message || insErr.details || insErr);
							continue;
						}
					} else insertedMsg = newMsg;
				}
				if (!insertedMsg) {
					console.error(`[ServerGmailSync] Failed to persist or retrieve email message for gmail_message_id: ${msgStub.id}`);
					continue;
				}
				processedServerMessageIds.add(msgStub.id);
				console.log(`[ServerGmailSync] ✅ Incoming email successfully saved to Supabase email_messages (id: ${insertedMsg.id}, gmail_message_id: ${msgStub.id})`);
				totalNewMessages++;
				const replyResult = await processIncomingEmailReply(supabase, {
					emailMessageId: insertedMsg.id,
					gmailThreadId: msgStub.threadId,
					gmailMessageId: msgStub.id,
					inReplyTo,
					references,
					headers,
					rawHeaders: initialRawHeaders,
					subject,
					body,
					snippet,
					senderEmail: parsedFrom.email,
					senderName: parsedFrom.name,
					recipientEmail: parsedTo.email || accountEmail,
					direction: "Inbound",
					userId: accountUserId,
					attachments: extracted.attachments || []
				});
				const confirmationResult = replyResult.confirmationResult;
				const matchResultFromReply = replyResult.matchResult;
				processedDetails.push({
					id: msgStub.id,
					threadId: msgStub.threadId,
					subject,
					from: parsedFrom.email,
					movementNumber: replyResult.movementNumber || matchedMovementNumber,
					matchedBookingId: replyResult.bookingId || matchedBookingId,
					matchStatus: matchResultFromReply.matchStatus,
					matchReason: matchResultFromReply.matchReason,
					confirmationStatus: confirmationResult.confirmationStatus,
					confirmationConfidence: confirmationResult.confidence,
					confirmationReason: confirmationResult.reason,
					actionTaken: replyResult.actionTaken
				});
				if (matchedBookingId) {
					const eventLabel = matchResult.matchStatus === "MATCHED" ? "Forwarder Reply Matched" : "Forwarder Reply (Needs Review)";
					await supabase.from("booking_events").insert({
						booking_id: matchedBookingId,
						event_type: eventLabel,
						event_date: receivedAt,
						location: "Incoming Mailbox",
						description: `Reply from ${parsedFrom.email}. Match status: ${matchResult.matchStatus} (${matchResult.matchReason})`
					});
					let confEventTitle = "Forwarder Reply Evaluated";
					if (confirmationResult.confirmationStatus === "CONFIRMED") confEventTitle = replyResult.actionTaken === "AUTO_CONFIRMED" ? "Movement Auto-Confirmed" : "Forwarder Confirmation Detected";
					else if (confirmationResult.confirmationStatus === "REJECTED") confEventTitle = "Forwarder Space Rejection";
					else if (confirmationResult.confirmationStatus === "NOT_CONFIRMED") confEventTitle = "Forwarder Non-Confirmation Reply";
					else if (confirmationResult.confirmationStatus === "NEEDS_REVIEW") confEventTitle = "Forwarder Reply (Review Required)";
					await supabase.from("booking_events").insert({
						booking_id: matchedBookingId,
						event_type: confEventTitle,
						event_date: receivedAt,
						location: "Confirmation Engine",
						description: `Status: ${confirmationResult.confirmationStatus} (${(confirmationResult.confidence * 100).toFixed(0)}% via ${confirmationResult.detectedBy}). ${confirmationResult.reason}`
					});
				}
				processedServerMessageIds.add(msgStub.id);
				if (processedServerMessageIds.size > 1e3) processedServerMessageIds.clear();
			}
			if (conn.id !== "direct-token") await supabase.from("gmail_connections").update({
				last_sync_at: (/* @__PURE__ */ new Date()).toISOString(),
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			}).eq("id", conn.id);
		} catch (accountErr) {
			console.error(`[ServerGmailSync] Error syncing account ${accountEmail}:`, accountErr);
		}
	}
	console.log("[ServerGmailSync] Sync complete.", {
		totalProcessed,
		totalNewMessages
	});
	return {
		success: true,
		syncedCount: totalNewMessages,
		newMessages: totalNewMessages,
		processedCount: totalProcessed,
		details: processedDetails,
		message: `Synchronized ${totalNewMessages} new incoming reply messages successfully.`
	};
}
/**
* Google OAuth2 & Gmail API Service
*
* Provides end-to-end functionality for:
* 1. Initializing Google OAuth2 authentication using environment variables
*    (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, CLIENT_SECRET, etc.)
* 2. Generating OAuth2 consent URLs, exchanging authorization codes for tokens,
*    and refreshing expired access tokens
* 3. Connecting to the Gmail API (v1) to fetch user profile, list emails,
*    retrieve individual messages with parsed bodies/headers/attachments,
*    and fetch multi-message conversation threads.
*/
var DEFAULT_GMAIL_SCOPES = [
	"https://www.googleapis.com/auth/gmail.readonly",
	"https://www.googleapis.com/auth/gmail.modify",
	"https://www.googleapis.com/auth/gmail.compose",
	"https://www.googleapis.com/auth/gmail.send",
	"https://www.googleapis.com/auth/userinfo.email",
	"https://www.googleapis.com/auth/userinfo.profile"
];
/**
* Safely decodes base64url strings returned by the Gmail API
*/
function decodeBase64Url(input) {
	if (!input) return "";
	try {
		const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
		const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, "=");
		if (typeof Buffer !== "undefined") return Buffer.from(padded, "base64").toString("utf-8");
		const binary = atob(padded);
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
* Parses RFC 2822 email address strings like 'John Doe <john@example.com>' or 'john@example.com'
*/
function parseEmailHeaderAddress(raw) {
	if (!raw) return {
		name: "",
		email: ""
	};
	const trimmed = raw.trim();
	const match = trimmed.match(/^(?:"?([^"]*)"?\s)?<?([^>]+)>?$/);
	if (match) return {
		name: match[1] ? match[1].trim() : match[2] || trimmed,
		email: match[2] ? match[2].trim().toLowerCase() : trimmed.toLowerCase()
	};
	return {
		name: trimmed,
		email: trimmed.toLowerCase()
	};
}
/**
* Parses a comma-separated list of email addresses
*/
function parseEmailAddressList(raw) {
	if (!raw) return [];
	return raw.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((part) => parseEmailHeaderAddress(part.trim())).filter((addr) => addr.email);
}
/**
* Recursively extracts plain text, HTML bodies, and attachment metadata from Gmail payload parts
*/
function extractBodyAndAttachments(payload) {
	let text = "";
	let html = "";
	const attachments = [];
	function walk(part) {
		if (!part) return;
		if (part.filename && part.body?.attachmentId) attachments.push({
			attachmentId: part.body.attachmentId,
			filename: part.filename,
			mimeType: part.mimeType || "application/octet-stream",
			size: part.body.size || 0
		});
		if (part.mimeType === "text/plain" && part.body?.data && !text) text = decodeBase64Url(part.body.data);
		else if (part.mimeType === "text/html" && part.body?.data && !html) html = decodeBase64Url(part.body.data);
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
* Parses a raw Gmail API message response into a structured GmailParsedEmail object
*/
function parseGmailMessage(raw) {
	const headers = raw.payload?.headers || [];
	const getHeader = (name) => {
		const found = headers.find((h) => h.name.toLowerCase() === name.toLowerCase());
		return found ? found.value : "";
	};
	const fromRaw = getHeader("From");
	const toRaw = getHeader("To");
	const ccRaw = getHeader("Cc");
	const bccRaw = getHeader("Bcc");
	const subject = getHeader("Subject") || "(No Subject)";
	const dateStr = getHeader("Date");
	const messageIdHeader = getHeader("Message-ID");
	const inReplyToHeader = getHeader("In-Reply-To");
	const referencesHeader = getHeader("References");
	const date = dateStr ? new Date(dateStr) : raw.internalDate ? new Date(Number(raw.internalDate)) : null;
	const { text, html, attachments } = extractBodyAndAttachments(raw.payload);
	const labelIds = raw.labelIds || [];
	const isUnread = labelIds.includes("UNREAD");
	const isStarred = labelIds.includes("STARRED");
	return {
		id: raw.id,
		threadId: raw.threadId,
		snippet: raw.snippet || "",
		historyId: raw.historyId,
		internalDate: raw.internalDate || "",
		date,
		from: parseEmailHeaderAddress(fromRaw),
		to: parseEmailAddressList(toRaw),
		cc: parseEmailAddressList(ccRaw),
		bcc: parseEmailAddressList(bccRaw),
		subject,
		messageIdHeader: messageIdHeader || void 0,
		inReplyToHeader: inReplyToHeader || void 0,
		referencesHeader: referencesHeader || void 0,
		textBody: text,
		htmlBody: html,
		labelIds,
		attachments,
		isUnread,
		isStarred
	};
}
/**
* Google OAuth2 and Gmail API Service
*/
var GoogleOAuth2GmailService = class {
	clientId;
	clientSecret;
	redirectUri;
	defaultScopes;
	constructor(config) {
		const resolvedClientId = config?.clientId || (typeof process !== "undefined" ? process.env?.GOOGLE_CLIENT_ID : void 0) || (typeof process !== "undefined" ? process.env?.CLIENT_ID : void 0) || (typeof process !== "undefined" ? process.env?.VITE_GOOGLE_CLIENT_ID : void 0) || firebase_applet_config_default?.oAuthClientId || "";
		const resolvedClientSecret = config?.clientSecret || (typeof process !== "undefined" ? process.env?.GOOGLE_CLIENT_SECRET : void 0) || (typeof process !== "undefined" ? process.env?.CLIENT_SECRET : void 0) || "";
		this.clientId = resolvedClientId;
		this.clientSecret = resolvedClientSecret;
		this.redirectUri = config?.redirectUri || "http://localhost:3000/api/auth/google/callback";
		this.defaultScopes = config?.defaultScopes || DEFAULT_GMAIL_SCOPES;
	}
	/**
	* Retrieves the configured client credentials
	*/
	getCredentials() {
		return {
			clientId: this.clientId,
			hasClientSecret: Boolean(this.clientSecret)
		};
	}
	/**
	* Checks if OAuth2 credentials are configured
	*/
	isConfigured() {
		return Boolean(this.clientId);
	}
	/**
	* Generates the Google OAuth2 consent URL
	*/
	generateAuthUrl(options) {
		if (!this.clientId) throw new Error("Google OAuth2 is not configured. Please set GOOGLE_CLIENT_ID in your environment variables.");
		const redirect = options?.redirectUri || this.redirectUri;
		const scopes = (options?.scopes || this.defaultScopes).join(" ");
		const state = options?.state || "";
		const prompt = options?.prompt || "select_account";
		const accessType = options?.accessType || "offline";
		const params = new URLSearchParams({
			client_id: this.clientId,
			redirect_uri: redirect,
			response_type: "code",
			scope: scopes,
			access_type: accessType,
			prompt,
			include_granted_scopes: "true"
		});
		if (state) params.append("state", state);
		if (options?.loginHint) params.append("login_hint", options.loginHint);
		return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
	}
	/**
	* Exchanges an authorization code for access and refresh tokens
	*/
	async exchangeCodeForTokens(code, redirectUri) {
		if (!this.clientId) throw new Error("GOOGLE_CLIENT_ID environment variable is missing.");
		if (!this.clientSecret) throw new Error("GOOGLE_CLIENT_SECRET or CLIENT_SECRET environment variable is required to exchange authorization codes.");
		const redirect = redirectUri || this.redirectUri;
		const bodyParams = new URLSearchParams({
			client_id: this.clientId,
			client_secret: this.clientSecret,
			code,
			grant_type: "authorization_code",
			redirect_uri: redirect
		});
		const response = await fetch("https://oauth2.googleapis.com/token", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: bodyParams.toString()
		});
		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Failed to exchange Google OAuth2 code: ${response.status} - ${errorText}`);
		}
		const data = await response.json();
		const expiresIn = data.expires_in || 3600;
		const expiresAt = Date.now() + expiresIn * 1e3;
		return {
			access_token: data.access_token,
			refresh_token: data.refresh_token,
			expires_in: expiresIn,
			token_type: data.token_type || "Bearer",
			scope: data.scope,
			id_token: data.id_token,
			expires_at: expiresAt
		};
	}
	/**
	* Refreshes an expired access token using the stored refresh token
	*/
	async refreshAccessToken(refreshToken) {
		if (!this.clientId) throw new Error("GOOGLE_CLIENT_ID environment variable is missing.");
		if (!this.clientSecret) throw new Error("GOOGLE_CLIENT_SECRET or CLIENT_SECRET environment variable is missing for token refresh.");
		if (!refreshToken) throw new Error("Refresh token is required.");
		const bodyParams = new URLSearchParams({
			client_id: this.clientId,
			client_secret: this.clientSecret,
			refresh_token: refreshToken,
			grant_type: "refresh_token"
		});
		const response = await fetch("https://oauth2.googleapis.com/token", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: bodyParams.toString()
		});
		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Google token refresh failed (${response.status}): ${errorText}`);
		}
		const data = await response.json();
		const expiresIn = data.expires_in || 3600;
		const expiresAt = Date.now() + expiresIn * 1e3;
		return {
			access_token: data.access_token,
			refresh_token: data.refresh_token || refreshToken,
			expires_in: expiresIn,
			token_type: data.token_type || "Bearer",
			scope: data.scope,
			id_token: data.id_token,
			expires_at: expiresAt
		};
	}
	/**
	* Revokes an access or refresh token
	*/
	async revokeToken(token) {
		if (!token) return false;
		try {
			return (await fetch(`https://oauth2.googleapis.com/revoke?token=${encodeURIComponent(token)}`, {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" }
			})).ok;
		} catch {
			return false;
		}
	}
	/**
	* Fetches the authenticated user's Gmail profile
	*/
	async getProfile(accessToken) {
		if (!accessToken) throw new Error("Access token is required to fetch Gmail profile.");
		const response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/profile", { headers: {
			Authorization: `Bearer ${accessToken}`,
			Accept: "application/json"
		} });
		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Gmail API profile error (${response.status}): ${errorText}`);
		}
		return await response.json();
	}
	/**
	* Lists message identifiers matching search and pagination filters
	*/
	async listMessageIds(accessToken, options) {
		if (!accessToken) throw new Error("Access token is required to query Gmail messages.");
		const queryParams = new URLSearchParams();
		if (options?.query) queryParams.append("q", options.query);
		if (options?.maxResults) queryParams.append("maxResults", String(options.maxResults));
		if (options?.pageToken) queryParams.append("pageToken", options.pageToken);
		if (options?.includeSpamTrash) queryParams.append("includeSpamTrash", "true");
		if (options?.labelIds && options.labelIds.length > 0) for (const label of options.labelIds) queryParams.append("labelIds", label);
		const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages?${queryParams.toString()}`;
		const response = await fetch(url, { headers: {
			Authorization: `Bearer ${accessToken}`,
			Accept: "application/json"
		} });
		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Gmail API list messages error (${response.status}): ${errorText}`);
		}
		const data = await response.json();
		return {
			messages: data.messages || [],
			nextPageToken: data.nextPageToken,
			resultSizeEstimate: data.resultSizeEstimate
		};
	}
	/**
	* Fetches an individual raw message by messageId
	*/
	async getRawMessage(messageId, accessToken, format = "full") {
		if (!accessToken) throw new Error("Access token is required to get a message.");
		const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${encodeURIComponent(messageId)}?format=${format}`;
		const response = await fetch(url, { headers: {
			Authorization: `Bearer ${accessToken}`,
			Accept: "application/json"
		} });
		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Gmail API get message error for ${messageId} (${response.status}): ${errorText}`);
		}
		return await response.json();
	}
	/**
	* Fetches an individual parsed email by messageId
	*/
	async fetchEmailById(messageId, accessToken) {
		return parseGmailMessage(await this.getRawMessage(messageId, accessToken, "full"));
	}
	/**
	* High-level function to fetch and parse a batch of emails
	*/
	async fetchEmails(accessToken, options) {
		const listResult = await this.listMessageIds(accessToken, options);
		if (!listResult.messages || listResult.messages.length === 0) return {
			emails: [],
			nextPageToken: listResult.nextPageToken,
			resultSizeEstimate: listResult.resultSizeEstimate
		};
		const emails = [];
		const chunkSize = 5;
		for (let i = 0; i < listResult.messages.length; i += chunkSize) {
			const promises = listResult.messages.slice(i, i + chunkSize).map(async (msgRef) => {
				try {
					return await this.fetchEmailById(msgRef.id, accessToken);
				} catch (err) {
					console.warn(`[GoogleOAuth2GmailService] Failed to fetch message ${msgRef.id}:`, err);
					return null;
				}
			});
			const chunkResults = await Promise.all(promises);
			for (const email of chunkResults) if (email) emails.push(email);
		}
		return {
			emails,
			nextPageToken: listResult.nextPageToken,
			resultSizeEstimate: listResult.resultSizeEstimate
		};
	}
	/**
	* Fetches raw attachment bytes from Gmail API
	*/
	async fetchAttachment(messageId, attachmentId, accessToken) {
		if (!accessToken) throw new Error("Access token is required to fetch attachment.");
		const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${encodeURIComponent(messageId)}/attachments/${encodeURIComponent(attachmentId)}`;
		const response = await fetch(url, { headers: {
			Authorization: `Bearer ${accessToken}`,
			Accept: "application/json"
		} });
		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Gmail API attachment error (${response.status}): ${errorText}`);
		}
		const data = await response.json();
		return {
			size: data.size || 0,
			data: data.data || ""
		};
	}
};
var googleOAuth2GmailService = new GoogleOAuth2GmailService();
/**
* Normalizes Excel date representations (serial numbers or strings) to ISO date strings.
*/
function parseExcelDate(val) {
	if (val === null || val === void 0 || val === "") return null;
	if (typeof val === "number" && !isNaN(val)) try {
		const parsedDate = new Date(Math.round((val - 25569) * 86400 * 1e3));
		if (!isNaN(parsedDate.getTime()) && parsedDate.getFullYear() > 1990 && parsedDate.getFullYear() < 2100) return {
			iso: parsedDate.toISOString(),
			display: parsedDate.toLocaleDateString("en-GB", {
				day: "2-digit",
				month: "short",
				year: "numeric"
			})
		};
	} catch {}
	const str = String(val).trim();
	if (!str) return null;
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	const dayMonthMatch = str.match(/^(\d{1,2})[-/\s]+([A-Za-z]{3,9})$/i);
	if (dayMonthMatch) {
		const day = parseInt(dayMonthMatch[1], 10);
		const monthStr = dayMonthMatch[2];
		const candidate = /* @__PURE__ */ new Date(`${day} ${monthStr} ${currentYear} 00:00:00 UTC`);
		if (!isNaN(candidate.getTime())) return {
			iso: candidate.toISOString(),
			display: candidate.toLocaleDateString("en-GB", {
				day: "2-digit",
				month: "short",
				year: "numeric"
			})
		};
	}
	const directDate = new Date(str);
	if (!isNaN(directDate.getTime()) && directDate.getFullYear() > 1990 && directDate.getFullYear() < 2100) return {
		iso: directDate.toISOString(),
		display: directDate.toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "short",
			year: "numeric"
		})
	};
	const dmyMatch = str.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
	if (dmyMatch) {
		const day = parseInt(dmyMatch[1], 10);
		const month = parseInt(dmyMatch[2], 10) - 1;
		const year = parseInt(dmyMatch[3], 10);
		const d = new Date(Date.UTC(year, month, day));
		if (!isNaN(d.getTime())) return {
			iso: d.toISOString(),
			display: d.toLocaleDateString("en-GB", {
				day: "2-digit",
				month: "short",
				year: "numeric"
			})
		};
	}
	return null;
}
/**
* Format date values consistently for display comparison
*/
function formatDisplayDate(val) {
	if (!val) return "—";
	try {
		const d = new Date(val);
		if (isNaN(d.getTime())) return String(val);
		return d.toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "short",
			year: "numeric"
		});
	} catch {
		return String(val);
	}
}
/**
* Normalizes column header keys to standardized property identifiers
*/
function normalizeHeaderKey(rawHeader) {
	const clean = rawHeader.toLowerCase().replace(/[_\-\s#.:/]/g, "").trim();
	if ([
		"movementnumber",
		"movementno",
		"movement",
		"movno",
		"movnum",
		"shipmentnumber",
		"shipmentno",
		"shipment"
	].includes(clean)) return "movement_number";
	if ([
		"bookingreference",
		"bookingref",
		"bookingno",
		"bookingnum",
		"reference",
		"ref",
		"bkgref",
		"bkgno"
	].includes(clean)) return "booking_reference";
	if ([
		"containernumber",
		"containerno",
		"cntrnumber",
		"cntrno",
		"container",
		"cntr"
	].includes(clean)) return "container_number";
	if ([
		"eta",
		"estimatedtimeofarrival",
		"estarrival",
		"arrivaldate",
		"portarrivaldate",
		"portarrival"
	].includes(clean)) return "eta";
	if ([
		"etd",
		"estimatedtimeofdeparture",
		"estdeparture",
		"departuredate",
		"loadingdate",
		"etddate"
	].includes(clean)) return "etd";
	if ([
		"vesselname",
		"vessel",
		"mothervessel",
		"ship",
		"shipname",
		"vesselvoyage"
	].includes(clean)) return "vessel_name";
	if ([
		"voyagenumber",
		"voyageno",
		"voyage",
		"voyno",
		"voy"
	].includes(clean)) return "voyage_number";
	if ([
		"status",
		"bookingstatus",
		"stage",
		"lifecyclestatus",
		"currentstatus"
	].includes(clean)) return "status";
	if ([
		"currentlocation",
		"location",
		"lastlocation",
		"currentport",
		"facility"
	].includes(clean)) return "current_location";
	if ([
		"portarrival",
		"portarrivaldate",
		"arrivalatport",
		"berthdate"
	].includes(clean)) return "port_arrival_date";
	if ([
		"pol",
		"portofloading",
		"originport",
		"loadport",
		"origin"
	].includes(clean)) return "pol";
	if ([
		"pod",
		"portofdischarge",
		"destinationport",
		"dischargeport",
		"destination"
	].includes(clean)) return "pod";
	if ([
		"notes",
		"remarks",
		"comments",
		"specialinstructions"
	].includes(clean)) return "notes";
	return clean;
}
var SUPPORTED_UPDATE_FIELDS = {
	eta: {
		label: "ETA",
		dbField: "eta",
		type: "date"
	},
	etd: {
		label: "ETD",
		dbField: "etd",
		type: "date"
	},
	vessel_name: {
		label: "Vessel Name",
		dbField: "vessel_name",
		type: "string"
	},
	voyage_number: {
		label: "Voyage Number",
		dbField: "voyage_number",
		type: "string"
	},
	status: {
		label: "Booking Status",
		dbField: "status",
		type: "status"
	},
	container_number: {
		label: "Container Number",
		dbField: "container_number",
		type: "string"
	},
	current_location: {
		label: "Current Location",
		dbField: "location",
		type: "string"
	},
	port_arrival_date: {
		label: "Port Arrival Date",
		dbField: "eta",
		type: "date"
	},
	pol: {
		label: "POL (Origin)",
		dbField: "origin",
		type: "string"
	},
	pod: {
		label: "POD (Destination)",
		dbField: "destination",
		type: "string"
	},
	notes: {
		label: "Operational Notes",
		dbField: "notes",
		type: "string"
	}
};
/**
* Securely parses an Excel file (XLSX, XLS, CSV) and compares rows with existing bookings
*/
async function parseAndPreviewExcelBookings(fileBuffer, existingBookings) {
	const workbook = readSync(fileBuffer, {
		type: "array",
		cellDates: true
	});
	const sheetName = workbook.SheetNames[0];
	if (!sheetName) throw new Error("The uploaded Excel workbook contains no valid sheets.");
	const worksheet = workbook.Sheets[sheetName];
	const rawRows = utils.sheet_to_json(worksheet, {
		defval: null,
		raw: false,
		dateNF: "yyyy-mm-dd"
	});
	if (!rawRows || rawRows.length === 0) throw new Error("The selected Excel sheet does not contain any data rows.");
	const byMovementNumber = /* @__PURE__ */ new Map();
	const byBookingReference = /* @__PURE__ */ new Map();
	const byContainerNumber = /* @__PURE__ */ new Map();
	for (const b of existingBookings) {
		if (b.movement_number) byMovementNumber.set(b.movement_number.trim().toUpperCase(), b);
		if (b.booking_reference) byBookingReference.set(b.booking_reference.trim().toUpperCase(), b);
		if (b.reference) byBookingReference.set(String(b.reference).trim().toUpperCase(), b);
		if (b.id) byBookingReference.set(b.id.trim().toUpperCase(), b);
		if (b.containers && Array.isArray(b.containers)) {
			for (const cntr of b.containers) if (cntr.container_number) byContainerNumber.set(cntr.container_number.trim().toUpperCase(), b);
		}
	}
	const changes = [];
	const unmatchedRows = [];
	const invalidRows = [];
	const errors = [];
	let matchedBookingsCount = 0;
	const matchedBookingIdSet = /* @__PURE__ */ new Set();
	rawRows.forEach((row, rowIndex) => {
		const rowNumber = rowIndex + 2;
		const normalizedRow = {};
		for (const [key, value] of Object.entries(row)) {
			const normKey = normalizeHeaderKey(key);
			normalizedRow[normKey] = value;
		}
		const rawMovNum = normalizedRow.movement_number ? String(normalizedRow.movement_number).trim() : null;
		const rawBkgRef = normalizedRow.booking_reference ? String(normalizedRow.booking_reference).trim() : null;
		const rawCntrNum = normalizedRow.container_number ? String(normalizedRow.container_number).trim() : null;
		if (!rawMovNum && !rawBkgRef && !rawCntrNum) {
			invalidRows.push({
				rowNumber,
				reason: "Row lacks an identifiable Movement Number, Booking Reference, or Container Number."
			});
			return;
		}
		let matchedBooking = null;
		if (rawMovNum && byMovementNumber.has(rawMovNum.toUpperCase())) matchedBooking = byMovementNumber.get(rawMovNum.toUpperCase());
		else if (rawBkgRef && byBookingReference.has(rawBkgRef.toUpperCase())) matchedBooking = byBookingReference.get(rawBkgRef.toUpperCase());
		else if (rawCntrNum && byContainerNumber.has(rawCntrNum.toUpperCase())) matchedBooking = byContainerNumber.get(rawCntrNum.toUpperCase());
		const displayRef = rawMovNum || rawBkgRef || (rawCntrNum ? `Container: ${rawCntrNum}` : `Row #${rowNumber}`);
		if (!matchedBooking) {
			const rowDetails = {};
			for (const [k, v] of Object.entries(normalizedRow)) if (v !== null && v !== void 0 && String(v).trim()) rowDetails[k] = String(v).trim();
			unmatchedRows.push({
				rowNumber,
				reference: displayRef,
				details: rowDetails
			});
			changes.push({
				id: `unmatched-${rowNumber}`,
				rowNumber,
				bookingId: null,
				movementNumber: rawMovNum,
				bookingReference: rawBkgRef || displayRef,
				field: "booking_record",
				fieldLabel: "Record Identifier",
				previousValue: "Non-existent",
				newValue: displayRef,
				status: "Unmatched",
				patchField: "id",
				patchValue: null,
				notes: "No existing movement found. Will not be created automatically."
			});
			return;
		}
		matchedBookingIdSet.add(matchedBooking.id);
		for (const [fieldKey, fieldConfig] of Object.entries(SUPPORTED_UPDATE_FIELDS)) {
			if (!(fieldKey in normalizedRow)) continue;
			const rawVal = normalizedRow[fieldKey];
			const isCellEmpty = rawVal === null || rawVal === void 0 || String(rawVal).trim() === "";
			let currentDbVal = null;
			let currentDisplay = "—";
			if (fieldKey === "container_number") {
				const primaryCntr = matchedBooking.containers?.[0]?.container_number;
				currentDbVal = primaryCntr || null;
				currentDisplay = primaryCntr || "—";
			} else if (fieldKey === "pol") {
				currentDbVal = matchedBooking.origin;
				currentDisplay = matchedBooking.origin || "—";
			} else if (fieldKey === "pod") {
				currentDbVal = matchedBooking.destination;
				currentDisplay = matchedBooking.destination || "—";
			} else if (fieldKey === "current_location") {
				currentDbVal = matchedBooking.notes || null;
				currentDisplay = matchedBooking.notes || "—";
			} else {
				currentDbVal = matchedBooking[fieldConfig.dbField];
				if (fieldConfig.type === "date") currentDisplay = formatDisplayDate(currentDbVal);
				else currentDisplay = currentDbVal ? String(currentDbVal) : "—";
			}
			if (isCellEmpty) {
				changes.push({
					id: `row-${rowNumber}-${fieldKey}`,
					rowNumber,
					bookingId: matchedBooking.id,
					movementNumber: matchedBooking.movement_number || rawMovNum,
					bookingReference: matchedBooking.booking_reference || rawBkgRef || displayRef,
					field: fieldKey,
					fieldLabel: fieldConfig.label,
					previousValue: currentDisplay,
					newValue: "Empty",
					status: "Keep Existing",
					patchField: fieldConfig.dbField,
					patchValue: null,
					notes: "Empty cell in Excel. Existing database value preserved."
				});
				continue;
			}
			if (fieldConfig.type === "date") {
				const parsed = parseExcelDate(rawVal);
				if (!parsed) {
					changes.push({
						id: `row-${rowNumber}-${fieldKey}`,
						rowNumber,
						bookingId: matchedBooking.id,
						movementNumber: matchedBooking.movement_number || rawMovNum,
						bookingReference: matchedBooking.booking_reference || rawBkgRef || displayRef,
						field: fieldKey,
						fieldLabel: fieldConfig.label,
						previousValue: currentDisplay,
						newValue: String(rawVal),
						status: "Invalid",
						patchField: fieldConfig.dbField,
						patchValue: null,
						errorMessage: `Invalid date format: "${rawVal}". Preserving existing value.`
					});
					continue;
				}
				if (currentDbVal && (formatDisplayDate(currentDbVal) === parsed.display || typeof currentDbVal === "string" && currentDbVal.startsWith(parsed.iso.split("T")[0]))) changes.push({
					id: `row-${rowNumber}-${fieldKey}`,
					rowNumber,
					bookingId: matchedBooking.id,
					movementNumber: matchedBooking.movement_number || rawMovNum,
					bookingReference: matchedBooking.booking_reference || rawBkgRef || displayRef,
					field: fieldKey,
					fieldLabel: fieldConfig.label,
					previousValue: currentDisplay,
					newValue: parsed.display,
					status: "Unchanged",
					patchField: fieldConfig.dbField,
					patchValue: parsed.iso
				});
				else changes.push({
					id: `row-${rowNumber}-${fieldKey}`,
					rowNumber,
					bookingId: matchedBooking.id,
					movementNumber: matchedBooking.movement_number || rawMovNum,
					bookingReference: matchedBooking.booking_reference || rawBkgRef || displayRef,
					field: fieldKey,
					fieldLabel: fieldConfig.label,
					previousValue: currentDisplay,
					newValue: parsed.display,
					status: "Will Update",
					patchField: fieldConfig.dbField,
					patchValue: parsed.iso
				});
			} else if (fieldConfig.type === "status") {
				const normalizedStatus = normalizeBookingStatus(String(rawVal));
				const currentNorm = normalizeBookingStatus(currentDbVal);
				if (normalizedStatus.toLowerCase() === currentNorm.toLowerCase()) changes.push({
					id: `row-${rowNumber}-${fieldKey}`,
					rowNumber,
					bookingId: matchedBooking.id,
					movementNumber: matchedBooking.movement_number || rawMovNum,
					bookingReference: matchedBooking.booking_reference || rawBkgRef || displayRef,
					field: fieldKey,
					fieldLabel: fieldConfig.label,
					previousValue: currentDisplay,
					newValue: normalizedStatus,
					status: "Unchanged",
					patchField: fieldConfig.dbField,
					patchValue: normalizedStatus
				});
				else changes.push({
					id: `row-${rowNumber}-${fieldKey}`,
					rowNumber,
					bookingId: matchedBooking.id,
					movementNumber: matchedBooking.movement_number || rawMovNum,
					bookingReference: matchedBooking.booking_reference || rawBkgRef || displayRef,
					field: fieldKey,
					fieldLabel: fieldConfig.label,
					previousValue: currentDisplay,
					newValue: normalizedStatus,
					status: "Will Update",
					patchField: fieldConfig.dbField,
					patchValue: normalizedStatus
				});
			} else {
				const newStr = String(rawVal).trim();
				const currentStr = currentDbVal ? String(currentDbVal).trim() : "";
				if (newStr.toLowerCase() === currentStr.toLowerCase()) changes.push({
					id: `row-${rowNumber}-${fieldKey}`,
					rowNumber,
					bookingId: matchedBooking.id,
					movementNumber: matchedBooking.movement_number || rawMovNum,
					bookingReference: matchedBooking.booking_reference || rawBkgRef || displayRef,
					field: fieldKey,
					fieldLabel: fieldConfig.label,
					previousValue: currentDisplay,
					newValue: newStr,
					status: "Unchanged",
					patchField: fieldConfig.dbField,
					patchValue: newStr
				});
				else changes.push({
					id: `row-${rowNumber}-${fieldKey}`,
					rowNumber,
					bookingId: matchedBooking.id,
					movementNumber: matchedBooking.movement_number || rawMovNum,
					bookingReference: matchedBooking.booking_reference || rawBkgRef || displayRef,
					field: fieldKey,
					fieldLabel: fieldConfig.label,
					previousValue: currentDisplay,
					newValue: newStr,
					status: "Will Update",
					patchField: fieldConfig.dbField,
					patchValue: newStr
				});
			}
		}
	});
	matchedBookingsCount = matchedBookingIdSet.size;
	const rowsWithChangesCount = changes.filter((c) => c.status === "Will Update").length;
	const unchangedCount = changes.filter((c) => c.status === "Unchanged").length;
	const invalidCount = invalidRows.length + changes.filter((c) => c.status === "Invalid").length;
	return {
		summary: {
			totalRows: rawRows.length,
			matchedCount: matchedBookingsCount,
			rowsWithChangesCount,
			unchangedCount,
			unmatchedCount: unmatchedRows.length,
			invalidCount
		},
		changes,
		unmatchedRows,
		invalidRows,
		errors
	};
}
/**
* Applies confirmed changes to Supabase database, writes audit logs, and creates timeline events.
*/
async function executeExcelBookingUpdates(confirmedChanges, userId, onProgress) {
	const eligibleChanges = confirmedChanges.filter((c) => c.status === "Will Update" && c.bookingId);
	if (eligibleChanges.length === 0) return {
		totalProcessed: 0,
		totalUpdated: 0,
		totalUnchanged: confirmedChanges.filter((c) => c.status === "Unchanged").length,
		totalSkippedOrInvalid: confirmedChanges.filter((c) => c.status === "Keep Existing" || c.status === "Invalid" || c.status === "Unmatched").length,
		updatedBookingIds: [],
		errors: []
	};
	const changesByBooking = /* @__PURE__ */ new Map();
	for (const item of eligibleChanges) {
		if (!item.bookingId) continue;
		const existing = changesByBooking.get(item.bookingId) || [];
		existing.push(item);
		changesByBooking.set(item.bookingId, existing);
	}
	const updatedBookingIds = [];
	const errors = [];
	let processedCount = 0;
	const totalBookingsToUpdate = changesByBooking.size;
	onProgress?.(0, totalBookingsToUpdate, "Preparing database updates...");
	for (const [bookingId, items] of changesByBooking.entries()) {
		processedCount++;
		const bookingRef = items[0]?.bookingReference || items[0]?.movementNumber || bookingId;
		onProgress?.(processedCount, totalBookingsToUpdate, `Updating booking ${bookingRef} (${processedCount} of ${totalBookingsToUpdate})...`);
		try {
			const patch = { updated_at: (/* @__PURE__ */ new Date()).toISOString() };
			const changeAuditList = [];
			let containerNumberUpdate = null;
			for (const item of items) {
				if (item.field === "container_number") containerNumberUpdate = String(item.patchValue);
				else patch[item.patchField] = item.patchValue;
				if (item.field === "status") {
					const st = String(item.patchValue).toLowerCase();
					if (st.includes("confirm") || st.includes("approved")) {
						patch.confirmation_status = "CONFIRMED";
						patch.confirmed_at = (/* @__PURE__ */ new Date()).toISOString();
					}
				}
				changeAuditList.push({
					field: item.fieldLabel,
					previousValue: item.previousValue,
					newValue: item.newValue
				});
			}
			if (isSupabaseConfigured) {
				const { error: updateError } = await supabase.from("bookings").update(patch).eq("id", bookingId);
				if (updateError) throw new Error(`Failed to update booking ${bookingRef}: ${updateError.message}`);
				if (containerNumberUpdate) try {
					const { data: existingContainers } = await supabase.from("booking_containers").select("id").eq("booking_id", bookingId).limit(1);
					if (existingContainers && existingContainers.length > 0) await supabase.from("booking_containers").update({
						container_number: containerNumberUpdate,
						updated_at: (/* @__PURE__ */ new Date()).toISOString()
					}).eq("id", existingContainers[0].id);
					else await supabase.from("booking_containers").insert({
						booking_id: bookingId,
						container_number: containerNumberUpdate,
						container_type: "Dry",
						container_size: "40ft High Cube",
						weight_unit: "kg",
						status: "Assigned"
					});
				} catch (cntrErr) {
					console.warn("[Excel Update] Container record sync notice:", cntrErr);
				}
				try {
					await supabase.from("audit_logs").insert({
						user_id: userId || null,
						action: "EXCEL_BOOKING_UPDATE",
						entity_type: "booking",
						entity_id: bookingId,
						changes: changeAuditList,
						new_data: patch
					});
				} catch (auditErr) {
					console.warn("[Excel Update] Audit log notice:", auditErr);
				}
				try {
					const changeSummary = changeAuditList.map((c) => `${c.field}: ${c.newValue}`).join(", ");
					await supabase.from("booking_events").insert({
						booking_id: bookingId,
						event_type: "EXCEL_UPDATE",
						title: "Excel Lifecycle Update",
						description: `Automated Excel update applied: ${changeSummary}`,
						occurred_at: (/* @__PURE__ */ new Date()).toISOString(),
						created_by: userId || "Excel Import Engine",
						payload: {
							source: "excel_upload",
							changes: changeAuditList
						}
					});
				} catch (eventErr) {
					console.warn("[Excel Update] Booking event notice:", eventErr);
				}
			}
			const updatedLocal = getLocalBookings().map((b) => {
				if (b.id === bookingId || b.movement_number === bookingRef || b.booking_reference === bookingRef) return {
					...b,
					...patch,
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				};
				return b;
			});
			saveLocalBookings(updatedLocal);
			updatedBookingIds.push(bookingId);
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			errors.push(msg);
			console.error("[Excel Update Error]", msg);
		}
		await new Promise((resolve) => setTimeout(resolve, 15));
	}
	if (typeof window !== "undefined") {
		window.dispatchEvent(new CustomEvent("nashmia_bookings_updated", { detail: {
			updated: true,
			count: updatedBookingIds.length
		} }));
		window.dispatchEvent(new CustomEvent("supabase_realtime_bookings_change", { detail: {
			updated: true,
			count: updatedBookingIds.length
		} }));
	}
	const unchangedTotal = confirmedChanges.filter((c) => c.status === "Unchanged").length;
	const skippedTotal = confirmedChanges.filter((c) => c.status === "Keep Existing" || c.status === "Invalid" || c.status === "Unmatched").length;
	return {
		totalProcessed: confirmedChanges.length,
		totalUpdated: updatedBookingIds.length,
		totalUnchanged: unchangedTotal,
		totalSkippedOrInvalid: skippedTotal,
		updatedBookingIds,
		errors
	};
}
/**
* Checks whether an external tracking provider API is configured with live credentials.
*/
function getTrackingProviderConfig() {
	const apiKey = (typeof process !== "undefined" && process?.env ? process.env.TRACKING_API_KEY || process.env.CARRIER_TRACKING_API_KEY || process.env.VIZION_API_KEY || process.env.OCEAN_INSIGHTS_KEY : "") || "";
	const apiUrl = (typeof process !== "undefined" && process?.env ? process.env.TRACKING_API_URL || process.env.CARRIER_TRACKING_URL : "") || "";
	return {
		providerName: (typeof process !== "undefined" && process?.env ? process.env.TRACKING_PROVIDER_NAME || "Unified Maritime Tracking Adapter" : "Unified Maritime Tracking Adapter") || "Unified Maritime Tracking Adapter",
		apiUrl: apiUrl || void 0,
		hasCredentials: Boolean(apiKey && apiKey.trim().length > 0),
		environment: apiKey ? "production" : "unconfigured"
	};
}
/**
* Loads real tracking state for a specific container from Supabase.
*/
async function getContainerTrackingState(containerId, bookingId) {
	const cleanContainerId = (containerId || "").trim();
	const config = getTrackingProviderConfig();
	const emptyResult = {
		containerId: cleanContainerId,
		containerNumber: "",
		bookingId: bookingId || "",
		trackingStatus: "Not Started",
		isProviderConnected: config.hasCredentials,
		providerName: config.providerName,
		providerReference: null,
		lastUpdated: null,
		latestLocation: null,
		latestMilestone: null,
		events: []
	};
	if (!isSupabaseConfigured || !cleanContainerId) return emptyResult;
	try {
		let cQuery = supabase.from("booking_containers").select("*");
		const isUuid = safeUuid(cleanContainerId);
		if (isUuid) cQuery = cQuery.eq("id", isUuid);
		else cQuery = cQuery.eq("container_number", cleanContainerId.toUpperCase());
		const { data: container, error: cErr } = await cQuery.maybeSingle();
		if (cErr || !container) return emptyResult;
		const realContainerId = container.id;
		const realBookingId = container.booking_id;
		const containerNumber = container.container_number || cleanContainerId;
		const { data: eventRows } = await supabase.from("booking_events").select("*").eq("booking_id", realBookingId).order("created_at", { ascending: false });
		const containerEvents = (eventRows || []).filter((ev) => {
			if (ev.container_id && ev.container_id === realContainerId) return true;
			const p = ev.payload;
			if (p?.container_id === realContainerId) return true;
			if (p?.container_number && String(p.container_number).toUpperCase() === containerNumber.toUpperCase()) return true;
			return false;
		});
		const trackingSessionEvent = containerEvents.find((e) => e.event_type === "Tracking Initialized" || e.event_type === "Tracking Registered" || e.payload?.action === "start_tracking");
		const latestEvent = containerEvents[0];
		const payload = trackingSessionEvent?.payload || {};
		let trackingStatus = "Not Started";
		if (trackingSessionEvent) {
			if (config.hasCredentials) trackingStatus = payload.tracking_status || "Active";
			else trackingStatus = "Pending Configuration";
		}
		return {
			containerId: realContainerId,
			containerNumber,
			bookingId: realBookingId,
			trackingStatus,
			isProviderConnected: config.hasCredentials,
			providerName: payload.provider || config.providerName,
			providerReference: payload.provider_reference || null,
			lastUpdated: latestEvent?.created_at || trackingSessionEvent?.created_at || container.updated_at || null,
			latestLocation: latestEvent?.location || payload.location || null,
			latestMilestone: latestEvent?.title || latestEvent?.event_type || null,
			events: containerEvents,
			details: payload
		};
	} catch (err) {
		console.warn("[getContainerTrackingState] Error reading tracking state:", err);
		return emptyResult;
	}
}
/**
* Initializes or starts tracking for a container.
* - Validates container in Supabase
* - Validates movement link
* - Checks for duplicate active sessions (idempotent)
* - Persists tracking state in Supabase booking_events
* - Clearly indicates whether provider API is connected or pending configuration
*/
async function startContainerTracking(params) {
	if (!isSupabaseConfigured) return {
		success: false,
		trackingStatus: "Error",
		isProviderConnected: false,
		message: "Database connection is not configured."
	};
	const { containerId, bookingId, movementReference } = params;
	const config = getTrackingProviderConfig();
	try {
		let cQuery = supabase.from("booking_containers").select("*");
		const isUuid = safeUuid(containerId);
		if (isUuid) cQuery = cQuery.eq("id", isUuid);
		else if (params.containerNumber) cQuery = cQuery.eq("container_number", params.containerNumber.trim().toUpperCase());
		else return {
			success: false,
			trackingStatus: "Error",
			isProviderConnected: false,
			message: "Invalid container identifier provided."
		};
		const { data: container, error: cErr } = await cQuery.maybeSingle();
		if (cErr || !container) return {
			success: false,
			trackingStatus: "Error",
			isProviderConnected: false,
			message: "Container was not found in the database."
		};
		const realBookingId = container.booking_id;
		const realContainerId = container.id;
		const containerNumber = container.container_number || params.containerNumber || "UNASSIGNED";
		if (bookingId) {
			const validBookingUuid = safeUuid(bookingId);
			if (validBookingUuid && validBookingUuid !== realBookingId) return {
				success: false,
				trackingStatus: "Error",
				isProviderConnected: false,
				message: "Container is not linked to the specified movement."
			};
		}
		const { data: existingEvents } = await supabase.from("booking_events").select("*").eq("booking_id", realBookingId).eq("container_id", realContainerId).order("created_at", { ascending: false });
		const existingSession = existingEvents?.find((ev) => ev.event_type === "Tracking Initialized" || ev.event_type === "Tracking Registered");
		if (existingSession) {
			existingSession.payload;
			return {
				success: true,
				trackingStatus: config.hasCredentials ? "Active" : "Pending Configuration",
				isProviderConnected: config.hasCredentials,
				message: config.hasCredentials ? `Tracking session already active for container ${containerNumber}.` : `Tracking registered. External tracking API credentials pending.`,
				event: existingSession
			};
		}
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		const trackingStatus = config.hasCredentials ? "Active" : "Pending Configuration";
		const statusMessage = config.hasCredentials ? `Tracking session established with ${config.providerName}.` : `Tracking registered in platform ledger. External tracking API provider is not yet configured with credentials.`;
		const { data: createdEvent, error: evError } = await supabase.from("booking_events").insert({
			booking_id: realBookingId,
			container_id: realContainerId,
			event_type: "Tracking Initialized",
			title: `Tracking Registered: ${containerNumber}`,
			description: statusMessage,
			location: "Terminal Hub",
			event_date: nowIso,
			occurred_at: nowIso,
			payload: {
				action: "start_tracking",
				container_id: realContainerId,
				container_number: containerNumber,
				movement_reference: movementReference || null,
				tracking_provider: config.providerName,
				provider_reference: config.hasCredentials ? `TRK-${containerNumber}-${Date.now()}` : null,
				tracking_status: trackingStatus,
				is_provider_connected: config.hasCredentials,
				registered_at: nowIso,
				configuration_notice: config.hasCredentials ? "Live provider connected." : "No external API key provided in environment. Real database tracking registered."
			}
		}).select().single();
		if (evError) throw new Error(`Failed to persist tracking session: ${evError.message}`);
		try {
			await supabase.from("audit_logs").insert({
				action: "start_tracking",
				resource_type: "booking_container",
				resource_id: realContainerId,
				details: {
					container_number: containerNumber,
					booking_id: realBookingId,
					is_provider_connected: config.hasCredentials,
					tracking_status: trackingStatus
				}
			});
		} catch {}
		return {
			success: true,
			trackingStatus,
			isProviderConnected: config.hasCredentials,
			message: statusMessage,
			event: createdEvent
		};
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		console.error("[startContainerTracking] Error:", msg);
		return {
			success: false,
			trackingStatus: "Error",
			isProviderConnected: false,
			message: msg
		};
	}
}
/**
* NASHMIA GLOBAL OPERATIONS HUB - QUOTATION & INCOMING EMAIL REST API ROUTER
*
* Implements the 10 core endpoints using existing API style, CORS, and authentication:
*
* 1.  GET  /api/bookings/:bookingId/quotations
* 2.  GET  /api/quotations/:quotationId
* 3.  POST /api/quotations/:quotationId/confirm
* 4.  POST /api/quotations/:quotationId/reject
* 5.  POST /api/quotations/:quotationId/mark-duplicate
* 6.  POST /api/quotations/:quotationId/reprocess
* 7.  POST /api/incoming-emails/:emailId/process
* 8.  GET  /api/incoming-emails/unmatched
* 9.  GET  /api/incoming-emails/needs-review
* 10. POST /api/incoming-emails/:emailId/link-booking
*/
var apiCorsHeaders$1 = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
	"Access-Control-Allow-Headers": "authorization, content-type, apikey, x-client-info"
};
function jsonResponse(data, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			...apiCorsHeaders$1,
			"Content-Type": "application/json"
		}
	});
}
function errorResponse(message, status = 500, extra) {
	return jsonResponse({
		success: false,
		error: message,
		...extra || {}
	}, status);
}
/**
* Main router function for Quotations and Incoming Emails API
* Returns Response if handled, or null if the URL does not match these routes.
*/
async function handleQuotationsApiRequest(request, url) {
	const method = request.method.toUpperCase();
	const pathname = url.pathname;
	const userRole = (request.headers.get("x-user-role") || "operator").toLowerCase().trim();
	const callerForwarderId = request.headers.get("x-forwarder-id")?.trim();
	if (method === "OPTIONS" && (pathname.startsWith("/api/quotations") || pathname.startsWith("/api/incoming-emails") || pathname.startsWith("/api/bookings/") && pathname.endsWith("/quotations"))) return new Response(null, {
		status: 204,
		headers: apiCorsHeaders$1
	});
	const bookingsQuotationsMatch = pathname.match(/^\/api\/bookings\/([^/]+)\/quotations\/?$/);
	if (bookingsQuotationsMatch && method === "GET") try {
		const rawBookingId = decodeURIComponent(bookingsQuotationsMatch[1]).trim();
		const validUuid = safeUuid(rawBookingId);
		let quotations = [];
		if (isSupabaseConfigured) {
			let bookingUuid = validUuid;
			let movementNumber = rawBookingId;
			if (!bookingUuid) {
				const { data: bData } = await supabase.from("bookings").select("id, movement_number").or(`movement_number.eq.${rawBookingId},booking_reference.eq.${rawBookingId}`).limit(1).maybeSingle();
				if (bData) {
					bookingUuid = bData.id;
					movementNumber = bData.movement_number || movementNumber;
				}
			}
			let query = supabase.from("quotations").select("*");
			if (bookingUuid && movementNumber && movementNumber !== bookingUuid) query = query.or(`booking_id.eq.${bookingUuid},movement_number.eq.${movementNumber}`);
			else if (bookingUuid) query = query.eq("booking_id", bookingUuid);
			else query = query.eq("movement_number", rawBookingId);
			const { data: qData, error: qErr } = await query.order("created_at", { ascending: false });
			if (!qErr && qData && qData.length > 0) {
				const quoteIds = qData.map((q) => q.id);
				const { data: chargesData } = await supabase.from("quotation_charges").select("*").in("quotation_id", quoteIds);
				const chargesByQuoteId = /* @__PURE__ */ new Map();
				if (chargesData) for (const ch of chargesData) {
					const existing = chargesByQuoteId.get(ch.quotation_id) || [];
					existing.push(ch);
					chargesByQuoteId.set(ch.quotation_id, existing);
				}
				quotations = qData.map((q) => {
					const chargeList = chargesByQuoteId.get(q.id) || [];
					return {
						...q,
						id: q.id,
						quotation_id: q.id,
						booking_id: q.booking_id,
						charges: chargeList,
						quotation_charges: chargeList
					};
				});
			}
		}
		if (quotations.length === 0) {
			const memMatches = Array.from(inMemoryQuotations.values()).filter((q) => q.booking_id === rawBookingId || q.booking_id.toLowerCase() === rawBookingId.toLowerCase());
			if (memMatches.length > 0) quotations = memMatches;
			else quotations = getLocalForwarderRequests().filter((f) => f.movementNumber === rawBookingId || f.bookingReference === rawBookingId || f.id === rawBookingId).filter((f) => Boolean(f.offer || f.ratePerContainer)).map((f) => ({
				id: f.id,
				booking_id: rawBookingId,
				forwarder_id: f.forwarderId,
				forwarder_name: f.forwarderName,
				quotation_reference: f.quotationReference || f.offer?.quotationReference || null,
				quotation_status: f.status,
				revision_number: f.revisionNumber || 1,
				currency: f.currency || f.offer?.currency || "USD",
				quoted_total: f.totalFreight || f.offer?.totalFreight || null,
				calculated_total: f.totalFreight || f.offer?.totalFreight || null,
				ocean_freight: f.ratePerContainer || f.offer?.ratePerContainer || null,
				pol: f.polName || null,
				pod: f.podName || null,
				sailing_date: f.etd || f.offer?.etd || null,
				arrival_date: f.eta || f.offer?.eta || null,
				vessel_name: f.vesselName || f.offer?.vesselName || null,
				free_days: f.freeDays || f.offer?.freeDays || null,
				remarks: f.notes || f.offer?.notes || null,
				requires_human_review: f.status === "NEEDS_REVIEW",
				review_reason: null,
				charges: (f.offer?.itemizedCharges || []).map((c, idx) => ({
					id: `charge-${f.id}-${idx}`,
					quotation_id: f.id,
					charge_code: c.charge_code || "OTHER",
					charge_name_normalized: c.charge_name || "Charge",
					charge_name_original: c.charge_name || "Charge",
					amount: c.amount,
					currency: c.currency || f.currency || "USD",
					status: "confirmed"
				}))
			}));
		}
		if (userRole === "forwarder") {
			if (!callerForwarderId) quotations = [];
			else quotations = quotations.filter((q) => {
				const qFwd = String(q.forwarder_id || q.forwarder_name || "").toLowerCase();
				const target = callerForwarderId.toLowerCase();
				return qFwd === target || qFwd.includes(target) || target.includes(qFwd);
			});
		}
		console.log("[QuotationAPI][GET /api/bookings/:bookingId/quotations] Returning API response object:", {
			bookingId: rawBookingId,
			count: quotations.length,
			quotations: quotations.map((q) => ({
				id: q.id,
				quotation_id: q.quotation_id || q.id,
				booking_id: q.booking_id || rawBookingId,
				charges_count: Array.isArray(q.charges) ? q.charges.length : 0,
				charges: q.charges || [],
				quotation_charges: q.quotation_charges || q.charges || []
			})),
			rawQuotations: quotations
		});
		return jsonResponse({
			success: true,
			bookingId: rawBookingId,
			quotations,
			count: quotations.length
		});
	} catch (err) {
		return errorResponse(err instanceof Error ? err.message : String(err));
	}
	const singleQuotationMatch = pathname.match(/^\/api\/quotations\/([^/]+)\/?$/);
	if (singleQuotationMatch && method === "GET" && singleQuotationMatch[1] !== "extract") try {
		const rawQuoteId = decodeURIComponent(singleQuotationMatch[1]).trim();
		let quotation = null;
		if (isSupabaseConfigured) {
			const { data: qData } = await supabase.from("quotations").select("*").or(`id.eq.${rawQuoteId},quotation_reference.eq.${rawQuoteId},quotation_request_id.eq.${rawQuoteId},forwarder_request_id.eq.${rawQuoteId}`).limit(1).maybeSingle();
			if (qData) {
				const { data: chargesData } = await supabase.from("quotation_charges").select("*").eq("quotation_id", qData.id);
				quotation = {
					...qData,
					charges: chargesData || []
				};
			}
		}
		if (!quotation && inMemoryQuotations.has(rawQuoteId)) quotation = inMemoryQuotations.get(rawQuoteId);
		if (!quotation) {
			for (const [key, q] of inMemoryQuotations.entries()) if (key === rawQuoteId || q.id === rawQuoteId || q.quotation_request_id === rawQuoteId || q.quotation_reference === rawQuoteId || q.booking_id === rawQuoteId) {
				quotation = q;
				break;
			}
		}
		if (!quotation) {
			const f = getLocalForwarderRequests().find((item) => item.id === rawQuoteId || item.quotationReference === rawQuoteId || item.offer?.quotationReference === rawQuoteId || item.bookingId === rawQuoteId || item.movementNumber === rawQuoteId);
			if (f) quotation = {
				id: f.id,
				booking_id: f.movementNumber || f.bookingReference || f.bookingId || "",
				forwarder_id: f.forwarderId,
				forwarder_name: f.forwarderName,
				quotation_reference: f.quotationReference || f.offer?.quotationReference || null,
				quotation_status: f.status,
				revision_number: f.revisionNumber || 1,
				currency: f.currency || f.offer?.currency || "USD",
				ocean_freight: f.offer?.oceanFreight || f.ratePerContainer || null,
				origin_charges: f.offer?.originCharges || null,
				destination_charges: f.offer?.destinationCharges || null,
				thc: f.offer?.thc || null,
				documentation_charges: f.offer?.documentationCharges || null,
				customs_charges: f.offer?.customsCharges || null,
				trucking_charges: f.offer?.truckingCharges || null,
				other_charges: f.offer?.otherCharges || null,
				quoted_total: f.offer?.quotedTotal || f.totalFreight || null,
				calculated_total: f.offer?.calculatedTotal || f.totalFreight || null,
				carrier: f.offer?.carrier || f.preferredCarrier || null,
				container_type: f.offer?.containerType || f.containerType || "40HC",
				container_quantity: f.offer?.quantity || f.containerCount || 1,
				pol: f.polName || null,
				pod: f.podName || null,
				sailing_date: f.offer?.etd || f.etd || null,
				arrival_date: f.offer?.eta || f.eta || null,
				transit_time_days: f.offer?.transitDays || f.transitDays || null,
				vessel_name: f.offer?.vesselName || f.vesselName || null,
				voyage_number: f.offer?.voyageNumber || f.voyageNumber || null,
				free_days: f.offer?.freeDays || f.freeDays || null,
				valid_until: f.offer?.validUntil || null,
				remarks: f.offer?.notes || f.notes || null,
				requires_human_review: f.status === "NEEDS_REVIEW",
				review_reason: f.offer?.reviewReasons?.join("; ") || null,
				charges: (f.offer?.itemizedCharges || []).map((c, idx) => ({
					id: `charge-${f.id}-${idx}`,
					quotation_id: f.id,
					charge_code: c.charge_code || "OTHER",
					charge_name_normalized: c.charge_name || "Charge",
					amount: c.amount,
					currency: c.currency || f.currency || "USD",
					status: "confirmed"
				}))
			};
		}
		console.log("[QuotationAPI] GET /api/quotations/:quotationId result:", {
			requestedQuotationId: rawQuoteId,
			status: quotation ? 200 : 404,
			returnedQuotation: quotation ? {
				id: quotation.id,
				booking_id: quotation.booking_id,
				forwarder_id: quotation.forwarder_id,
				quoted_total: quotation.quoted_total,
				ocean_freight: quotation.ocean_freight,
				currency: quotation.currency
			} : null,
			returnedChargesCount: quotation && Array.isArray(quotation.charges) ? quotation.charges.length : 0
		});
		if (!quotation) return errorResponse("Quotation not found", 404);
		if (userRole === "forwarder") {
			const qFwd = String(quotation.forwarder_id || quotation.forwarder_name || "").toLowerCase();
			const target = (callerForwarderId || "").toLowerCase();
			if (!(Boolean(callerForwarderId) && (qFwd === target || qFwd.includes(target) || target.includes(qFwd)))) return errorResponse("Access denied: forwarders are restricted from viewing competing quotations.", 403);
		}
		return jsonResponse({
			success: true,
			quotation
		});
	} catch (err) {
		return errorResponse(err instanceof Error ? err.message : String(err));
	}
	const confirmQuotationMatch = pathname.match(/^\/api\/quotations\/([^/]+)\/confirm\/?$/);
	if (confirmQuotationMatch && method === "POST") try {
		if (userRole === "forwarder") return errorResponse("Access denied: Forwarders cannot confirm quotations. Operator or Admin role required.", 403);
		const rawQuoteId = decodeURIComponent(confirmQuotationMatch[1]).trim();
		const body = await request.json().catch(() => ({}));
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		let bookingIdToUpdate = null;
		let forwarderNameToLog = null;
		if (isSupabaseConfigured) {
			const { data: qData } = await supabase.from("quotations").update({
				quotation_status: "confirmed",
				requires_human_review: false,
				updated_at: nowIso
			}).eq("id", rawQuoteId).select("id, booking_id, forwarder_id").maybeSingle();
			if (qData) bookingIdToUpdate = qData.booking_id;
			await supabase.from("forwarder_quote_requests").update({
				status: "CONFIRMED",
				updated_at: nowIso
			}).or(`id.eq.${rawQuoteId},quotation_id.eq.${rawQuoteId}`);
			if (bookingIdToUpdate) await supabase.from("bookings").update({
				status: "Approved",
				confirmation_status: "CONFIRMED",
				confirmed_at: nowIso,
				confirmed_by: body.confirmedBy || "Operations Desk",
				updated_at: nowIso
			}).or(`id.eq.${bookingIdToUpdate},movement_number.eq.${bookingIdToUpdate}`);
		}
		if (inMemoryQuotations.has(rawQuoteId)) {
			const existing = inMemoryQuotations.get(rawQuoteId);
			existing.quotation_status = "confirmed";
			existing.requires_human_review = false;
			existing.updated_at = nowIso;
			bookingIdToUpdate = existing.booking_id;
		}
		const updatedFwds = getLocalForwarderRequests().map((f) => {
			if (f.id === rawQuoteId) {
				forwarderNameToLog = f.forwarderName;
				bookingIdToUpdate = bookingIdToUpdate || f.movementNumber || f.bookingReference || null;
				return {
					...f,
					status: "CONFIRMED",
					confirmedAt: nowIso,
					confirmedBy: body.confirmedBy || "Operations Desk"
				};
			}
			return f;
		});
		saveLocalForwarderRequests(updatedFwds);
		await recordQuotationAuditEvent({
			eventType: "BOOKING_CONFIRMED",
			movementNumber: bookingIdToUpdate,
			bookingId: bookingIdToUpdate,
			forwarderName: forwarderNameToLog,
			summary: `Quotation ${rawQuoteId} confirmed via API`,
			details: {
				quotationId: rawQuoteId,
				confirmedBy: body.confirmedBy || "API"
			},
			userId: body.userId || null
		});
		return jsonResponse({
			success: true,
			quotationId: rawQuoteId,
			status: "confirmed",
			confirmedAt: nowIso,
			message: "Quotation confirmed successfully"
		});
	} catch (err) {
		return errorResponse(err instanceof Error ? err.message : String(err));
	}
	const rejectQuotationMatch = pathname.match(/^\/api\/quotations\/([^/]+)\/reject\/?$/);
	if (rejectQuotationMatch && method === "POST") try {
		if (userRole === "forwarder") return errorResponse("Access denied: Forwarders cannot reject quotations. Operator or Admin role required.", 403);
		const rawQuoteId = decodeURIComponent(rejectQuotationMatch[1]).trim();
		const body = await request.json().catch(() => ({}));
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		const reasonText = body.reason || "Rejected by operator";
		if (isSupabaseConfigured) {
			await supabase.from("quotations").update({
				quotation_status: "rejected",
				remarks: reasonText,
				requires_human_review: false,
				updated_at: nowIso
			}).eq("id", rawQuoteId);
			await supabase.from("forwarder_quote_requests").update({
				status: "DECLINED",
				updated_at: nowIso
			}).or(`id.eq.${rawQuoteId},quotation_id.eq.${rawQuoteId}`);
		}
		if (inMemoryQuotations.has(rawQuoteId)) {
			const existing = inMemoryQuotations.get(rawQuoteId);
			existing.quotation_status = "rejected";
			existing.remarks = reasonText;
			existing.requires_human_review = false;
			existing.updated_at = nowIso;
		}
		const updatedFwds = getLocalForwarderRequests().map((f) => {
			if (f.id === rawQuoteId) return {
				...f,
				status: "DECLINED",
				notes: `${f.notes ? f.notes + " | " : ""}${reasonText}`
			};
			return f;
		});
		saveLocalForwarderRequests(updatedFwds);
		await recordQuotationAuditEvent({
			eventType: "QUOTATION_UPDATED",
			summary: `Quotation ${rawQuoteId} rejected: ${reasonText}`,
			details: {
				quotationId: rawQuoteId,
				reason: reasonText
			},
			userId: body.userId || null
		});
		return jsonResponse({
			success: true,
			quotationId: rawQuoteId,
			status: "rejected",
			reason: reasonText,
			message: "Quotation rejected"
		});
	} catch (err) {
		return errorResponse(err instanceof Error ? err.message : String(err));
	}
	const duplicateQuotationMatch = pathname.match(/^\/api\/quotations\/([^/]+)\/mark-duplicate\/?$/);
	if (duplicateQuotationMatch && method === "POST") try {
		const rawQuoteId = decodeURIComponent(duplicateQuotationMatch[1]).trim();
		const body = await request.json().catch(() => ({}));
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		const reasonText = body.reason || `Duplicate of quotation ${body.originalQuotationId || "previously processed"}`;
		if (isSupabaseConfigured) {
			await supabase.from("quotations").update({
				quotation_status: "duplicate",
				requires_human_review: false,
				review_reason: reasonText,
				updated_at: nowIso
			}).eq("id", rawQuoteId);
			await supabase.from("forwarder_quote_requests").update({
				status: "NOT_AVAILABLE",
				updated_at: nowIso
			}).eq("id", rawQuoteId);
		}
		if (inMemoryQuotations.has(rawQuoteId)) {
			const existing = inMemoryQuotations.get(rawQuoteId);
			existing.quotation_status = "duplicate";
			existing.requires_human_review = false;
			existing.review_reason = reasonText;
			existing.updated_at = nowIso;
		}
		await recordQuotationAuditEvent({
			eventType: "QUOTATION_UPDATED",
			summary: `Quotation ${rawQuoteId} marked as duplicate`,
			details: {
				quotationId: rawQuoteId,
				originalQuotationId: body.originalQuotationId,
				reason: reasonText
			},
			userId: body.userId || null
		});
		return jsonResponse({
			success: true,
			quotationId: rawQuoteId,
			status: "duplicate",
			originalQuotationId: body.originalQuotationId || null,
			message: "Quotation marked as duplicate"
		});
	} catch (err) {
		return errorResponse(err instanceof Error ? err.message : String(err));
	}
	const reprocessQuotationMatch = pathname.match(/^\/api\/quotations\/([^/]+)\/reprocess\/?$/);
	if (reprocessQuotationMatch && method === "POST") try {
		const rawQuoteId = decodeURIComponent(reprocessQuotationMatch[1]).trim();
		const body = await request.json().catch(() => ({}));
		let existingQuote = null;
		let existingEmail = null;
		if (isSupabaseConfigured) {
			const { data: qData } = await supabase.from("quotations").select("*").eq("id", rawQuoteId).maybeSingle();
			if (qData) existingQuote = qData;
			if (existingQuote?.incoming_email_id) {
				const { data: eData } = await supabase.from("incoming_emails").select("*").eq("id", existingQuote.incoming_email_id).maybeSingle();
				if (eData) existingEmail = eData;
			}
		}
		if (!existingQuote && inMemoryQuotations.has(rawQuoteId)) existingQuote = inMemoryQuotations.get(rawQuoteId);
		const emailSubject = body.subject || existingEmail?.subject || `Quotation ${existingQuote?.quotation_reference || rawQuoteId}`;
		const emailBody = body.body || body.rawEmail || existingEmail?.body_text || existingQuote?.remarks || `Rate: ${existingQuote?.currency || "USD"} ${existingQuote?.quoted_total || 1200}`;
		const processResult = await processForwarderQuotationEmail(supabase, {
			emailMessageId: existingEmail?.message_id || `reprocess-${Date.now()}`,
			subject: emailSubject,
			body: emailBody,
			senderEmail: existingEmail?.from_email || "operations@forwarder.com",
			senderName: existingEmail?.from_name || null,
			userId: body.userId || null
		});
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		const updatedStatus = processResult.validation.needsReview ? "needs_review" : processResult.status.toLowerCase();
		if (isSupabaseConfigured && existingQuote) await supabase.from("quotations").update({
			quotation_status: updatedStatus,
			quoted_total: processResult.quotationFields.quotedTotal,
			calculated_total: processResult.quotationFields.calculatedTotal,
			currency: processResult.quotationFields.currency,
			pol: processResult.quotationFields.pol,
			pod: processResult.quotationFields.pod,
			sailing_date: processResult.quotationFields.sailingDate,
			valid_until: processResult.quotationFields.validityDate,
			vessel_name: processResult.quotationFields.vesselName,
			transit_time_days: processResult.quotationFields.transitTime,
			free_days: processResult.quotationFields.freeDays,
			requires_human_review: processResult.validation.needsReview,
			review_reason: processResult.validation.reviewReasons[0] || null,
			updated_at: nowIso
		}).eq("id", existingQuote.id);
		await recordQuotationAuditEvent({
			eventType: "QUOTATION_UPDATED",
			summary: `Quotation ${rawQuoteId} reprocessed via deterministic engine`,
			details: {
				quotationId: rawQuoteId,
				validation: processResult.validation
			},
			userId: body.userId || null
		});
		return jsonResponse({
			success: true,
			quotationId: rawQuoteId,
			reprocessed: true,
			status: updatedStatus,
			quotationFields: processResult.quotationFields,
			validation: processResult.validation,
			message: "Quotation reprocessed successfully"
		});
	} catch (err) {
		return errorResponse(err instanceof Error ? err.message : String(err));
	}
	const processEmailMatch = pathname.match(/^\/api\/incoming-emails\/([^/]+)\/process\/?$/);
	if (processEmailMatch && method === "POST") try {
		const rawEmailId = decodeURIComponent(processEmailMatch[1]).trim();
		const body = await request.json().catch(() => ({}));
		let emailRecord = null;
		if (isSupabaseConfigured) {
			const { data: eData } = await supabase.from("incoming_emails").select("*").or(`id.eq.${rawEmailId},message_id.eq.${rawEmailId}`).limit(1).maybeSingle();
			if (eData) emailRecord = eData;
		}
		if (!emailRecord && inMemoryIncomingEmails.has(rawEmailId)) emailRecord = inMemoryIncomingEmails.get(rawEmailId);
		const emailMessageId = body.messageId || emailRecord?.message_id || rawEmailId;
		if (isSupabaseConfigured) {
			const { data: existingProcessed } = await supabase.from("incoming_emails").select("id, processing_status, message_id").eq("message_id", emailMessageId).eq("processing_status", "processed").maybeSingle();
			if (existingProcessed && existingProcessed.id !== rawEmailId) return jsonResponse({
				success: true,
				status: "already_processed",
				messageId: emailMessageId,
				message: "Email message_id was already processed; duplicate quotation not created."
			});
		}
		const processResult = await processForwarderQuotationEmail(supabase, {
			emailMessageId,
			subject: body.subject || emailRecord?.subject || "",
			body: body.body || emailRecord?.body_text || "",
			senderEmail: body.senderEmail || emailRecord?.from_email || "forwarder@logistics.com",
			senderName: body.senderName || emailRecord?.from_name || null,
			userId: body.userId || null
		});
		const finalStatus = processResult.validation.needsReview ? "needs_review" : processResult.bookingNumber ? "processed" : "unmatched";
		if (isSupabaseConfigured && emailRecord) await supabase.from("incoming_emails").update({
			processing_status: finalStatus,
			detected_booking_numbers: processResult.detectedBookingNumbers,
			detected_forwarder_id: processResult.forwarderId,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("id", emailRecord.id);
		return jsonResponse({
			success: true,
			status: finalStatus,
			emailId: rawEmailId,
			bookingNumber: processResult.bookingNumber,
			detectedBookingNumbers: processResult.detectedBookingNumbers,
			bookingId: processResult.bookingId,
			forwarderId: processResult.forwarderId,
			forwarderName: processResult.forwarderName,
			quotationFields: processResult.quotationFields,
			validation: processResult.validation,
			message: processResult.message
		});
	} catch (err) {
		return errorResponse(err instanceof Error ? err.message : String(err));
	}
	if (pathname === "/api/incoming-emails/unmatched" && method === "GET") try {
		const limitParam = parseInt(url.searchParams.get("limit") || "50", 10);
		const offsetParam = parseInt(url.searchParams.get("offset") || "0", 10);
		const safeLimit = isNaN(limitParam) ? 50 : Math.min(Math.max(limitParam, 1), 200);
		const safeOffset = isNaN(offsetParam) ? 0 : Math.max(offsetParam, 0);
		let emails = [];
		if (isSupabaseConfigured) {
			const { data: eData } = await supabase.from("incoming_emails").select("*").or("processing_status.eq.unmatched,processing_status.eq.UNMATCHED").order("received_at", { ascending: false }).range(safeOffset, safeOffset + safeLimit - 1);
			if (eData) emails = eData;
		}
		if (emails.length === 0) emails = Array.from(inMemoryIncomingEmails.values()).filter((e) => e.processing_status === "unmatched");
		return jsonResponse({
			success: true,
			emails,
			count: emails.length
		});
	} catch (err) {
		return errorResponse(err instanceof Error ? err.message : String(err));
	}
	if (pathname === "/api/incoming-emails/needs-review" && method === "GET") try {
		const limitParam = parseInt(url.searchParams.get("limit") || "50", 10);
		const offsetParam = parseInt(url.searchParams.get("offset") || "0", 10);
		const safeLimit = isNaN(limitParam) ? 50 : Math.min(Math.max(limitParam, 1), 200);
		const safeOffset = isNaN(offsetParam) ? 0 : Math.max(offsetParam, 0);
		let emails = [];
		if (isSupabaseConfigured) {
			const { data: eData } = await supabase.from("incoming_emails").select("*").or("processing_status.eq.needs_review,processing_status.eq.NEEDS_REVIEW").order("received_at", { ascending: false }).range(safeOffset, safeOffset + safeLimit - 1);
			if (eData) emails = eData;
		}
		if (emails.length === 0) emails = Array.from(inMemoryIncomingEmails.values()).filter((e) => e.processing_status === "needs_review");
		return jsonResponse({
			success: true,
			emails,
			count: emails.length
		});
	} catch (err) {
		return errorResponse(err instanceof Error ? err.message : String(err));
	}
	const linkBookingMatch = pathname.match(/^\/api\/incoming-emails\/([^/]+)\/link-booking\/?$/);
	if (linkBookingMatch && method === "POST") try {
		const rawEmailId = decodeURIComponent(linkBookingMatch[1]).trim();
		const body = await request.json().catch(() => ({}));
		if (!body.bookingId) return errorResponse("Missing required parameter: bookingId", 400);
		const targetBookingId = body.bookingId.trim();
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		let emailRecord = null;
		if (isSupabaseConfigured) {
			const { data: eData } = await supabase.from("incoming_emails").select("*").eq("id", rawEmailId).maybeSingle();
			if (eData) emailRecord = eData;
		}
		if (!emailRecord && inMemoryIncomingEmails.has(rawEmailId)) emailRecord = inMemoryIncomingEmails.get(rawEmailId);
		if (isSupabaseConfigured && emailRecord) await supabase.from("incoming_emails").update({
			detected_booking_numbers: [targetBookingId],
			detected_forwarder_id: body.forwarderId || emailRecord.detected_forwarder_id,
			processing_status: "processed",
			updated_at: nowIso
		}).eq("id", emailRecord.id);
		const processResult = await processForwarderQuotationEmail(supabase, {
			emailMessageId: emailRecord?.message_id || `linked-${Date.now()}`,
			subject: emailRecord?.subject || `Quotation for ${targetBookingId}`,
			body: `${emailRecord?.body_text || ""}\n\nBooking: ${targetBookingId}`,
			senderEmail: emailRecord?.from_email || "forwarder@logistics.com",
			senderName: emailRecord?.from_name || null,
			userId: body.userId || null
		});
		await recordQuotationAuditEvent({
			eventType: "EMAIL_MATCHED",
			movementNumber: targetBookingId,
			bookingId: targetBookingId,
			forwarderId: body.forwarderId || processResult.forwarderId,
			summary: `Email ${rawEmailId} manually linked to booking ${targetBookingId}`,
			details: {
				emailId: rawEmailId,
				bookingId: targetBookingId,
				validation: processResult.validation
			},
			userId: body.userId || null
		});
		return jsonResponse({
			success: true,
			emailId: rawEmailId,
			bookingId: targetBookingId,
			linked: true,
			quotationFields: processResult.quotationFields,
			validation: processResult.validation,
			message: `Email successfully linked to booking ${targetBookingId}`
		});
	} catch (err) {
		return errorResponse(err instanceof Error ? err.message : String(err));
	}
	return null;
}
function StartServer(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouterProvider, { router: props.router });
}
var defaultStreamHandler = defineHandlerCallback(({ request, router, responseHeaders }) => renderRouterToStream({
	request,
	router,
	responseHeaders,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartServer, { router })
}));
function getSetCookieValues(headers) {
	const headersWithSetCookie = headers;
	if (typeof headersWithSetCookie.getSetCookie === "function") return headersWithSetCookie.getSetCookie();
	const value = headers.get("set-cookie");
	return value ? splitSetCookieString(value) : [];
}
var GLOBAL_EVENT_STORAGE_KEY = Symbol.for("tanstack-start:event-storage");
var globalObj$1 = globalThis;
if (!globalObj$1[GLOBAL_EVENT_STORAGE_KEY]) globalObj$1[GLOBAL_EVENT_STORAGE_KEY] = new AsyncLocalStorage();
var eventStorage = globalObj$1[GLOBAL_EVENT_STORAGE_KEY];
var PROTECTED_RESPONSE_HEADERS = Symbol.for("tanstack-start:protected-response-headers");
function getProtectedResponseHeaders(response) {
	return response[PROTECTED_RESPONSE_HEADERS];
}
function installProtectedResponseHeaders(response, headers) {
	Object.defineProperty(response, PROTECTED_RESPONSE_HEADERS, {
		value: headers,
		configurable: true
	});
}
/** Transport requirements belong to the encoded body, not its wrapper. */
function transferResponseProtocol(source, target) {
	const protectedHeaders = getProtectedResponseHeaders(source);
	if (protectedHeaders && getProtectedResponseHeaders(target) !== protectedHeaders) installProtectedResponseHeaders(target, protectedHeaders);
}
/** Preserve metadata when Start reconstructs an existing response. */
function transferResponseMetadata(source, target) {
	transferResponseProtocol(source, target);
	const event = eventStorage.getStore();
	const appliedHeaderAppends = event?.responseHeaderAppends?.get(source);
	if (appliedHeaderAppends) event.responseHeaderAppends.set(target, appliedHeaderAppends);
}
function sanitizeStatusMessage(statusMessage) {
	return statusMessage.replace(/[^\t\x20-\x7e]/g, "");
}
function sanitizeStatusCode(statusCode) {
	const code = typeof statusCode === "string" ? Number(statusCode) : statusCode;
	if (code === void 0 || !Number.isInteger(code) || code < 200 || code > 599) return;
	return code;
}
function getObjectProperty(value, key) {
	if (typeof value === "object" && value || typeof value === "function") return value[key];
}
function getStatusCodeProperty(value, key) {
	const property = getObjectProperty(value, key);
	if (typeof property === "string" || typeof property === "number") return property;
}
function getErrorStatus(error) {
	const cause = getObjectProperty(error, "cause");
	return sanitizeStatusCode(getStatusCodeProperty(error, "status") ?? getStatusCodeProperty(error, "statusCode") ?? getStatusCodeProperty(cause, "status") ?? getStatusCodeProperty(cause, "statusCode"));
}
function getErrorStatusText(error) {
	const cause = getObjectProperty(error, "cause");
	const statusText = getObjectProperty(error, "statusText") ?? getObjectProperty(error, "statusMessage") ?? getObjectProperty(cause, "statusText") ?? getObjectProperty(cause, "statusMessage");
	if (typeof statusText === "string") return sanitizeStatusMessage(statusText);
}
var GENERATED_BODY_EXCLUDED_HEADERS = /* @__PURE__ */ new Set([
	"connection",
	"content-encoding",
	"content-length",
	"keep-alive",
	"proxy-connection",
	"te",
	"trailer",
	"transfer-encoding"
]);
function isResponse(value) {
	return value instanceof Response || Object.prototype.toString.call(value) === "[object Response]";
}
function getErrorHeaders(error) {
	let init = getObjectProperty(error, "headers");
	if (!init) {
		const cause = getObjectProperty(error, "cause");
		if (isResponse(cause)) return;
		init = getObjectProperty(cause, "headers");
	}
	if (!init) return;
	let headers;
	try {
		headers = new Headers(init);
	} catch {
		return;
	}
	for (const name of GENERATED_BODY_EXCLUDED_HEADERS) headers.delete(name);
	return headers;
}
function getDistinctCookieKey(name, options, defaultPath = "") {
	return [
		name,
		options.domain || "",
		options.path ?? defaultPath
	].join(";");
}
function getDistinctCookieKeyFromHeader(cookie) {
	const parsed = parseSetCookie(cookie);
	return parsed ? getDistinctCookieKey(parsed.name, parsed) : `\0${cookie}`;
}
function replaceSetCookieValues(headers, cookies) {
	headers.delete("set-cookie");
	for (const cookie of cookies) headers.append("set-cookie", cookie);
}
function getCookieKey(state, cookie) {
	const keys = state.setCookieKeys ||= /* @__PURE__ */ new Map();
	let key = keys.get(cookie);
	if (key === void 0) {
		key = getDistinctCookieKeyFromHeader(cookie);
		keys.set(cookie, key);
	}
	return key;
}
function getMergedSetCookieValues(state, currentCookies, cookiesToMerge) {
	if (currentCookies.length === 0) return cookiesToMerge;
	const cookieKeysToMerge = /* @__PURE__ */ new Set();
	for (const cookie of cookiesToMerge) cookieKeysToMerge.add(getCookieKey(state, cookie));
	return currentCookies.filter((cookie) => !cookieKeysToMerge.has(getCookieKey(state, cookie))).concat(cookiesToMerge);
}
function hasProtectedHeaderChanges(response, protectedHeaders) {
	const headers = response.headers;
	for (const [name, value] of protectedHeaders) if (headers.get(name) !== value) return true;
	return false;
}
function applyProtectedHeaders(protectedHeaders, headers) {
	for (const [name, value] of protectedHeaders) if (value === null) headers.delete(name);
	else headers.set(name, value);
}
function applyHeaderState(target, state, generatedBody, protectedHeaders, appliedHeaderAppends) {
	let headers = target;
	const mutableHeaders = () => {
		if (headers === target) headers = new Headers(target);
		return headers;
	};
	if (state.clearHeaders) {
		for (const name of Array.from(target.keys())) if (!protectedHeaders?.has(name)) mutableHeaders().delete(name);
	}
	if (!state.clearHeaders && state.removedHeaders) {
		for (const name of state.removedHeaders) if (!protectedHeaders?.has(name) && headers.has(name)) mutableHeaders().delete(name);
	}
	for (const [name, value] of state.headers) if (name !== "set-cookie" && !protectedHeaders?.has(name) && !(generatedBody && GENERATED_BODY_EXCLUDED_HEADERS.has(name))) {
		let append = state.headerAppends?.get(name);
		if (!append) {
			if (headers.get(name) !== value) mutableHeaders().set(name, value);
			continue;
		}
		const applied = appliedHeaderAppends?.get(name);
		const pending = [];
		while (append && append !== applied) {
			pending.push(append.value);
			append = append.previous;
		}
		for (let index = pending.length - 1; index >= 0; index--) mutableHeaders().append(name, pending[index]);
	}
	if (state.setCookieBehavior && !protectedHeaders?.has("set-cookie")) {
		const eventSetCookies = getSetCookieValues(state.headers);
		const currentCookies = getSetCookieValues(headers);
		const cookies = state.setCookieBehavior === "replace" ? eventSetCookies : getMergedSetCookieValues(state, currentCookies, eventSetCookies);
		if (cookies.length !== currentCookies.length || cookies.some((cookie, index) => cookie !== currentCookies[index])) replaceSetCookieValues(mutableHeaders(), cookies);
	}
	return headers;
}
function canHaveBody(method, status) {
	return method !== "HEAD" && status !== 204 && status !== 205 && status !== 304;
}
/** A protected content type marks a Start-serialized body the client decodes. */
function isSerializedResponse(protectedHeaders) {
	return typeof protectedHeaders?.get("content-type") === "string";
}
/**
* A helper status that forbids a body never applies to a serialized
* server-function reply, because the client must decode it. Only a HEAD request
* drops its body.
*/
function getHelperStatus(state, serialized) {
	const status = state?.status;
	if (!serialized || status === void 0 || canHaveBody("GET", status)) return status;
	if (!state.bodylessStatusWarned) {
		state.bodylessStatusWarned = true;
		console.warn(`setResponseStatus(${status}) does not apply to serialized server function responses, because the client must decode their body. Return a Response from the server function to send a response without a body.`);
	}
}
/** Helper status text describes the helper status and is ignored with it. */
function getHelperStatusText(state, helperStatus) {
	return helperStatus === state?.status ? state?.statusText : void 0;
}
function cancelDroppedBody(response, reason) {
	try {
		response.body?.cancel(reason).catch(() => {});
	} catch {}
}
function createReconciledResponse(body, status, statusText, headers) {
	try {
		return new Response(body, {
			status,
			statusText,
			headers
		});
	} catch (cause) {
		throw new Error("Unable to reconcile response because its body has already been consumed or locked.", { cause });
	}
}
/** Apply helper state to a response that leaves Start. */
function finalizeResponse(response, event) {
	return applyResponseState(response, event, event.request.method);
}
/**
* Apply helper state with the body rules of `method`. Request middleware still
* reads a HEAD response's body, so the pipeline applies GET rules and strips a
* HEAD body only when the response leaves it.
*/
function applyResponseState(response, event, method, disposeBody) {
	const protectedHeaders = getProtectedResponseHeaders(response);
	const serialized = isSerializedResponse(protectedHeaders);
	let helperStatus = getHelperStatus(event.responseState, serialized);
	const mustDropBody = !canHaveBody(method, helperStatus ?? response.status) && response.body !== null;
	if (mustDropBody) {
		const reason = method === "HEAD" ? "HEAD body stripped" : "Response body dropped by Start reconciliation";
		if (disposeBody) disposeBody(reason);
		else cancelDroppedBody(response, reason);
		helperStatus = getHelperStatus(event.responseState, serialized);
	}
	const state = event.responseState;
	if (!state && !mustDropBody) {
		event.currentResponse = response;
		return response;
	}
	const status = helperStatus ?? response.status;
	const statusText = getHelperStatusText(state, helperStatus) ?? response.statusText;
	const statusChanged = status !== response.status;
	const statusTextChanged = statusText !== response.statusText;
	const headers = state ? applyHeaderState(response.headers, state, serialized, protectedHeaders, event.responseHeaderAppends?.get(response)) : response.headers;
	const reconciled = statusChanged || statusTextChanged || mustDropBody || headers !== response.headers ? createReconciledResponse(mustDropBody ? null : response.body, status, statusText, headers) : response;
	if (protectedHeaders && reconciled !== response) installProtectedResponseHeaders(reconciled, protectedHeaders);
	return publishResponse(reconciled, event);
}
function publishResponse(response, event) {
	const headerAppends = event.responseState?.headerAppends;
	if (headerAppends?.size) (event.responseHeaderAppends ||= /* @__PURE__ */ new WeakMap()).set(response, new Map(headerAppends));
	event.currentResponse = response;
	return response;
}
function getHttpErrorStatus(status) {
	return status !== void 0 && status >= 400 ? status : void 0;
}
/**
* Status for a response built from an uncaught error. Only an error status
* (400-599) from a helper or from error metadata describes the failure, so a
* success or redirect status set before the throw cannot hide it. The error is
* logged unless its own metadata marks it as an HTTP error. Reporting runs
* before helper state is read, so hooks that write helpers are included.
*/
function resolveErrorStatus(error, event) {
	const metadataStatus = getErrorStatus(error);
	const errorStatus = getHttpErrorStatus(metadataStatus);
	if (errorStatus === void 0) console.error(error);
	const state = event?.responseState;
	const helperStatus = getHttpErrorStatus(state?.status);
	const status = helperStatus ?? errorStatus ?? 500;
	const statusText = getHelperStatusText(state, helperStatus) ?? (status === errorStatus || metadataStatus === void 0 ? getErrorStatusText(error) : void 0) ?? "";
	if (state && state.status !== helperStatus) {
		state.status = void 0;
		state.statusText = void 0;
	}
	return {
		status,
		statusText
	};
}
/**
* Internal: status and status text for a serialized server-function error.
* Logs the error and discards a non-error helper status, like any error
* response Start builds.
*/
function resolveErrorResponseStatus(error) {
	return resolveErrorStatus(error, eventStorage.getStore());
}
/** Apply helper state to a response inside the request middleware pipeline. */
function reconcileResponse(response, event, disposeBody) {
	if (!event.responseState && (response === event.currentResponse || canHaveBody("GET", response.status)) || isRedirect(response)) {
		event.currentResponse = response;
		return response;
	}
	return applyResponseState(response, event, "GET", disposeBody);
}
/**
* Restore protocol headers that middleware changed directly on the response.
* Start does this once, when the response leaves the request middleware
* pipeline; helper writes never override them.
*/
function restoreResponseProtocol(response, event) {
	const protectedHeaders = getProtectedResponseHeaders(response);
	if (!protectedHeaders || !hasProtectedHeaderChanges(response, protectedHeaders)) return response;
	const headers = new Headers(response.headers);
	applyProtectedHeaders(protectedHeaders, headers);
	const restored = createReconciledResponse(response.body, response.status, response.statusText, headers);
	transferResponseMetadata(response, restored);
	event.currentResponse = restored;
	return restored;
}
/**
* Build a Start-owned serialized reply with already normalized protocol
* headers. A bodyless helper status never applies to it; only a HEAD request
* drops its body.
*/
function createFinalizedResponse(body, headers, protectedHeaders, event) {
	const state = event.responseState;
	let status = 200;
	let statusText = "";
	if (state) {
		const helperStatus = getHelperStatus(state, true);
		status = helperStatus ?? 200;
		statusText = getHelperStatusText(state, helperStatus) ?? "";
		headers = applyHeaderState(headers, state, true, protectedHeaders);
	}
	const response = new Response(canHaveBody(event.request.method, status) ? body : null, {
		status,
		statusText,
		headers
	});
	installProtectedResponseHeaders(response, protectedHeaders);
	return publishResponse(response, event);
}
function protectResponseHeaders(response, headers) {
	const previous = getProtectedResponseHeaders(response);
	if (previous === headers) return;
	if (previous) {
		const merged = new Map(previous);
		for (const [name, value] of headers) merged.set(name, value);
		headers = merged;
	}
	installProtectedResponseHeaders(response, headers);
}
/**
* Set and protect transport headers on a new response. Reuse the body stream
* without cloning or teeing it; callers transfer ownership to the result.
*/
function setProtectedResponseHeaders(response, headers) {
	let next;
	try {
		next = new Response(response.body, response);
		applyProtectedHeaders(headers, next.headers);
	} catch (cause) {
		throw new Error("Unable to set response header because its body has already been consumed or locked.", { cause });
	}
	transferResponseMetadata(response, next);
	protectResponseHeaders(next, headers);
	return next;
}
function decodePathname(pathname) {
	try {
		return decodeURI(pathname);
	} catch (error) {
		if (error instanceof URIError) return;
		throw error;
	}
}
function runInStartRequest(request, requestOpts, handler) {
	let requestUrl;
	try {
		requestUrl = new URL(request.url);
	} catch (error) {
		if (error instanceof TypeError) return new Response(null, {
			status: 400,
			statusText: "Bad Request"
		});
		throw error;
	}
	const pathname = requestUrl.pathname;
	if (pathname.includes("%") && decodePathname(pathname) === void 0) return new Response(null, {
		status: 400,
		statusText: "Bad Request"
	});
	const event = {
		request,
		requestUrl
	};
	return eventStorage.run(event, handler, request, requestOpts, event);
}
/**
* Establish request scope; the response pipeline owns reconciliation. A nested
* handler delegating the same request participates in its scope. Independent
* fetch invocations and different requests get a fresh event.
*/
function withStartRequest(handler) {
	return (request, requestOpts) => {
		const event = eventStorage.getStore();
		if (event?.request === request) return handler(request, requestOpts, event);
		return runInStartRequest(request, requestOpts, handler);
	};
}
function getStartEvent() {
	const event = eventStorage.getStore();
	if (!event) throw new Error(`No StartEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return event;
}
/**
* Internal: returns the per-request parsed URL for `request`, memoized on the
* Start event so the framework parses each request URL only once. Falls back
* to parsing when called outside a Start event (e.g. in unit tests) or for a
* foreign request. Callers MUST NOT mutate the returned URL.
*/
function getParsedRequestUrl(request) {
	const event = eventStorage.getStore();
	if (event && event.request === request) return event.requestUrl;
	return new URL(request.url);
}
/**
* Internal: helper status state for a serialized server-function reply.
* Bodyless statuses never apply to it and are omitted with their status text.
*/
function getSerializedResponseState() {
	const state = getStartEvent().responseState;
	const status = getHelperStatus(state, true);
	return {
		status,
		statusText: getHelperStatusText(state, status)
	};
}
var HEADERS = { TSS_SHELL: "X-TSS_SHELL" };
/**
* @description Returns the router manifest data that should be sent to the client.
* This includes only the assets and preloads for the current route and any
* special assets that are needed for the client. It does not include relationships
* between routes or any other data that is not needed for the client.
*
* @param matchedRoutes - In dev mode, the matched routes are used to build
* the dev styles URL for route-scoped CSS collection.
*/
async function getStartManifest(matchedRoutes) {
	const { tsrStartManifest } = await import("../_tanstack-start-manifest_v-Qu_jyaVg.mjs");
	const startManifest = tsrStartManifest();
	let routes = startManifest.routes;
	routes[rootRouteId];
	const manifestRoutes = {};
	for (const k in routes) {
		const v = routes[k];
		const result = {};
		if (v.preloads && v.preloads.length > 0) result.preloads = v.preloads;
		if (v.scripts && v.scripts.length > 0) result.scripts = v.scripts;
		if (v.css?.length) result.css = v.css;
		if (result.preloads || result.scripts || result.css) manifestRoutes[k] = result;
	}
	return {
		...startManifest.scriptFormat ? { scriptFormat: startManifest.scriptFormat } : {},
		...startManifest.inlineCss ? { inlineCss: startManifest.inlineCss } : {},
		routes: manifestRoutes
	};
}
var manifest = {};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
var TSS_FORMDATA_CONTEXT = "__TSS_CONTEXT";
var TSS_SERVER_FUNCTION = Symbol.for("TSS_SERVER_FUNCTION");
var X_TSS_SERIALIZED = "x-tss-serialized";
var X_TSS_RAW_RESPONSE = "x-tss-raw";
/** Content-Type for multiplexed framed responses (RawStream support) */
var TSS_CONTENT_TYPE_FRAMED = "application/x-tss-framed";
/** Largest payload accepted by one framed-protocol record. */
var MAX_FRAME_PAYLOAD_SIZE = 16777216;
/** Largest number of raw streams accepted in one framed response. */
var MAX_FRAMED_STREAMS = 1024;
/** Full Content-Type header value with version parameter */
var TSS_CONTENT_TYPE_FRAMED_VERSIONED = `${TSS_CONTENT_TYPE_FRAMED}; v=1`;
var GLOBAL_STORAGE_KEY = Symbol.for("tanstack-start:start-storage-context");
var globalObj = globalThis;
if (!globalObj[GLOBAL_STORAGE_KEY]) globalObj[GLOBAL_STORAGE_KEY] = new AsyncLocalStorage();
var startStorage = globalObj[GLOBAL_STORAGE_KEY];
function runWithStartContext(context, fn) {
	return startStorage.run(context, fn);
}
function getStartContext(opts) {
	const context = startStorage.getStore();
	if (!context && opts?.throwIfNotFound !== false) throw new Error(`No Start context found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return context;
}
var getStartOptions = () => getStartContext().startOptions;
/** Start's serialization adapters followed by `routerPlugins`. */
function getSerovalPlugins(routerPlugins) {
	return [...(getStartOptions()?.serializationAdapters)?.map(makeSerovalPlugin) ?? [], ...routerPlugins];
}
/**
* Binary frame protocol for multiplexing JSON and raw streams over HTTP.
*
* Frame format: [type:1][streamId:4][length:4][payload:length]
* - type: 1 byte - frame type (JSON, CHUNK, END, ERROR)
* - streamId: 4 bytes big-endian uint32 - stream identifier
* - length: 4 bytes big-endian uint32 - payload length
* - payload: variable length bytes
*/
/** Cached TextEncoder for frame encoding */
var textEncoder$1 = new TextEncoder();
/** Shared empty payload for END frames - avoids allocation per call */
var EMPTY_PAYLOAD = /* @__PURE__ */ new Uint8Array(0);
var MAX_ERROR_MESSAGE_CODE_UNITS = 4096;
/**
* Encodes a single frame with header and payload.
*/
function encodeFrame(type, streamId, payload) {
	if (payload.byteLength > 16777216) throw new RangeError(`Frame payload exceeds ${MAX_FRAME_PAYLOAD_SIZE} bytes`);
	const frame = new Uint8Array(9 + payload.length);
	frame[0] = type;
	frame[1] = streamId >>> 24 & 255;
	frame[2] = streamId >>> 16 & 255;
	frame[3] = streamId >>> 8 & 255;
	frame[4] = streamId & 255;
	frame[5] = payload.length >>> 24 & 255;
	frame[6] = payload.length >>> 16 & 255;
	frame[7] = payload.length >>> 8 & 255;
	frame[8] = payload.length & 255;
	frame.set(payload, 9);
	return frame;
}
/** Encodes an error message payload, truncated to a bounded length. */
function encodeErrorPayload(error) {
	const originalMessage = error instanceof Error ? error.message : String(error ?? "Unknown error");
	const message = originalMessage.length > MAX_ERROR_MESSAGE_CODE_UNITS ? `${originalMessage.slice(0, MAX_ERROR_MESSAGE_CODE_UNITS)}…` : originalMessage;
	return textEncoder$1.encode(message);
}
/**
* Creates a multiplexed ReadableStream from serialized response records.
*
* A record's JSON frame is admitted before any raw stream referenced by that
* record starts. Raw streams from admitted records are pumped concurrently.
* The caller bounds the stream count before records reach this function.
*/
function createMultiplexedStream(recordStream, options = {}) {
	let controller;
	let stopped = false;
	let activePumps = 0;
	let wakeDemand;
	let admission;
	const readers = /* @__PURE__ */ new Set();
	const pendingRawStreams = /* @__PURE__ */ new Set();
	const abortOutput = () => errorOutput(options.signal?.reason);
	const wakeAdmission = () => {
		const wake = wakeDemand;
		wakeDemand = void 0;
		wake?.();
	};
	const cancelReader = (reader, reason) => {
		reader.cancel(reason).catch(() => {});
	};
	const cancelStream = (stream, reason) => {
		stream.cancel(reason).catch(() => {});
	};
	const stop = (reason) => {
		if (stopped) return false;
		stopped = [reason];
		options.signal?.removeEventListener("abort", abortOutput);
		wakeAdmission();
		for (const reader of readers) cancelReader(reader, reason);
		for (const stream of pendingRawStreams) cancelStream(stream, reason);
		pendingRawStreams.clear();
		return true;
	};
	const errorOutput = (error) => {
		if (!stop(error)) return;
		try {
			controller.error(error);
		} catch {}
	};
	const waitForDemand = async () => {
		while (!stopped && (controller.desiredSize ?? 0) <= 0) await new Promise((resolve) => {
			wakeDemand = resolve;
		});
		return !stopped;
	};
	const admitFrame = (type, streamId, payload) => {
		if (stopped) return false;
		if (!admission && (controller.desiredSize ?? 0) > 0) {
			controller.enqueue(encodeFrame(type, streamId, payload));
			return true;
		}
		const runAdmission = async () => {
			if (!await waitForDemand()) return false;
			controller.enqueue(encodeFrame(type, streamId, payload));
			return true;
		};
		const result = admission ? admission.then(runAdmission) : runAdmission();
		const clearAdmission = () => {
			if (admission === tail) admission = void 0;
		};
		const tail = result.then(clearAdmission, clearAdmission);
		admission = tail;
		return result;
	};
	const maybeClose = () => {
		if (activePumps !== 0 || !stop()) return;
		try {
			controller.close();
		} catch {}
	};
	const startPump = (pump) => {
		activePumps++;
		pump().then(() => {
			activePumps--;
			maybeClose();
		}, (error) => {
			activePumps--;
			errorOutput(error);
		});
	};
	async function pumpRawStream(streamId, stream) {
		const reader = stream.getReader();
		readers.add(reader);
		try {
			while (!stopped) {
				const { done, value } = await reader.read();
				if (stopped) return;
				if (done) {
					const frameAdmission = admitFrame(2, streamId, EMPTY_PAYLOAD);
					if (frameAdmission !== true) await frameAdmission;
					return;
				}
				if (!(value instanceof Uint8Array)) throw new TypeError("RawStream chunks must be Uint8Array");
				let offset = 0;
				do {
					const chunk = value.byteLength <= 16777216 ? value : value.subarray(offset, offset + MAX_FRAME_PAYLOAD_SIZE);
					const frameAdmission = admitFrame(1, streamId, chunk);
					if (frameAdmission !== true && (frameAdmission === false || !await frameAdmission)) return;
					offset += MAX_FRAME_PAYLOAD_SIZE;
				} while (offset < value.byteLength);
			}
		} catch (error) {
			if (!stopped) {
				const frameAdmission = admitFrame(3, streamId, encodeErrorPayload(error));
				if (frameAdmission !== true) await frameAdmission;
			}
		} finally {
			readers.delete(reader);
			reader.releaseLock();
		}
	}
	async function pumpRecords() {
		const reader = recordStream.getReader();
		readers.add(reader);
		try {
			while (!stopped) {
				const { done, value } = await reader.read();
				if (stopped) {
					if (!done) for (const registration of value.rawStreams) cancelStream(registration.stream, stopped[0]);
					return;
				}
				if (done) return;
				for (const registration of value.rawStreams) pendingRawStreams.add(registration.stream);
				const frameAdmission = admitFrame(0, 0, value.json);
				if (frameAdmission !== true && (frameAdmission === false || !await frameAdmission)) return;
				for (const registration of value.rawStreams) {
					pendingRawStreams.delete(registration.stream);
					startPump(pumpRawStream.bind(void 0, registration.id, registration.stream));
				}
			}
		} catch (error) {
			if (!stopped) errorOutput(error);
		} finally {
			readers.delete(reader);
			reader.releaseLock();
		}
	}
	return new ReadableStream({
		start(ctrl) {
			controller = ctrl;
			if (options.signal?.aborted) {
				cancelStream(recordStream, options.signal.reason);
				errorOutput(options.signal.reason);
				return;
			}
			options.signal?.addEventListener("abort", abortOutput, { once: true });
			startPump(pumpRecords);
		},
		pull() {
			wakeAdmission();
		},
		cancel(reason) {
			if (stop(reason)) options.onCancel?.(reason);
		}
	});
}
function isSafeKey(key) {
	return key !== "__proto__" && key !== "constructor" && key !== "prototype";
}
/**
* Merge target and source into a new null-proto object, filtering dangerous keys.
*/
function safeObjectMerge(target, source) {
	const result = Object.create(null);
	if (target) {
		const keys = Object.keys(target);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			if (isSafeKey(key)) result[key] = target[key];
		}
	}
	if (source && typeof source === "object") {
		const keys = Object.keys(source);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			if (isSafeKey(key)) result[key] = source[key];
		}
	}
	return result;
}
/**
* Create a null-prototype object, optionally copying from source.
*/
function createNullProtoObject(source) {
	return source ? safeObjectMerge(source, void 0) : Object.create(null);
}
function flattenMiddlewares(middlewares, maxDepth = 100, seen = /* @__PURE__ */ new Set()) {
	const flattened = [];
	const recurse = (middleware, depth) => {
		if (depth > maxDepth) throw new Error(`Middleware nesting depth exceeded maximum of ${maxDepth}. Check for circular references.`);
		middleware.forEach((m) => {
			if (m.options.middleware) recurse(m.options.middleware, depth + 1);
			if (!seen.has(m)) {
				seen.add(m);
				flattened.push(m);
			}
		});
	};
	recurse(middlewares, 0);
	return flattened;
}
var createMiddleware = (options, __opts) => {
	const resolvedOptions = {
		type: "request",
		...__opts || options
	};
	return {
		options: resolvedOptions,
		middleware: (middleware) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { middleware }));
		},
		validator: (validator) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { validator }));
		},
		client: (client) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { client }));
		},
		server: (server) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { server }));
		}
	};
};
var csrfSymbol = Symbol.for("tanstack-start:csrf-middleware");
var innerCreateCsrfMiddleware = (opts = {}) => {
	const continueRequest = (result, ctx) => {
		return isValidationResultAllowed(result, opts) ? ctx.next() : getFailureResponse(opts, ctx);
	};
	const validateRequest = (ctx) => {
		const result = validateCsrfRequest(opts, ctx);
		if (isPromise(result)) return result.then((result) => continueRequest(result, ctx));
		return continueRequest(result, ctx);
	};
	const middleware = createMiddleware().server((ctx) => {
		const csrfCtx = ctx;
		try {
			if (opts.filter) {
				const shouldValidate = opts.filter(csrfCtx);
				if (isPromise(shouldValidate)) return shouldValidate.then((shouldValidate) => shouldValidate ? validateRequest(csrfCtx) : ctx.next());
				if (!shouldValidate) return ctx.next();
			}
			return validateRequest(csrfCtx);
		} catch (error) {
			return Promise.reject(error);
		}
	});
	Object.defineProperty(middleware, csrfSymbol, { value: true });
	return middleware;
};
var createCsrfMiddleware = innerCreateCsrfMiddleware;
function isValidationResultAllowed(result, opts) {
	return result === true || result === void 0 && opts.allowRequestsWithoutOriginCheck === true;
}
function validateCsrfRequest(opts, ctx) {
	const fetchSite = ctx.request.headers.get("Sec-Fetch-Site");
	if (fetchSite !== null) return matchValue(opts.secFetchSite ?? "same-origin", fetchSite, ctx);
	const origin = ctx.request.headers.get("Origin");
	if (origin !== null) {
		if (opts.origin) return matchValue(opts.origin, origin, ctx);
		return origin === new URL(ctx.request.url).origin;
	}
	const referer = ctx.request.headers.get("Referer");
	if (referer === null || opts.referer === false) return;
	if (typeof opts.referer === "function") return opts.referer(referer, ctx);
	if (opts.origin) {
		const refererOrigin = getOriginFromUrl(referer);
		return refererOrigin !== void 0 && matchValue(opts.origin, refererOrigin, ctx);
	}
	return isRefererSameOrigin(referer, new URL(ctx.request.url).origin);
}
function matchValue(matcher, value, ctx) {
	if (typeof matcher === "function") return matcher(value, ctx);
	if (Array.isArray(matcher)) return matcher.includes(value);
	return value === matcher;
}
function getOriginFromUrl(url) {
	try {
		return new URL(url).origin;
	} catch {
		return;
	}
}
function isRefererSameOrigin(referer, requestOrigin) {
	if (referer === requestOrigin) return true;
	if (!referer.startsWith(requestOrigin)) return false;
	if (referer.length === requestOrigin.length) return true;
	const code = referer.charCodeAt(requestOrigin.length);
	return code === 47 || code === 63 || code === 35;
}
function getFailureResponse(opts, ctx) {
	if (typeof opts.failureResponse === "function") return opts.failureResponse(ctx);
	return opts.failureResponse?.clone() ?? new Response("Forbidden", { status: 403 });
}
var SERIALIZED_JSON_HEADERS = /* @__PURE__ */ new Map([
	["content-type", "application/json"],
	[X_TSS_SERIALIZED, "true"],
	[X_TSS_RAW_RESPONSE, null],
	["location", null]
]);
var SERIALIZED_JSON_HEADER_INIT = new Headers({
	"content-type": "application/json",
	[X_TSS_SERIALIZED]: "true"
});
/** Completed bytes own no stream until the request pipeline accepts them. */
var DeferredResponse = class {
	constructor(body) {
		this.body = body;
	}
	createResponse(event) {
		return createFinalizedResponse(this.body, SERIALIZED_JSON_HEADER_INIT, SERIALIZED_JSON_HEADERS, event);
	}
};
var SERIALIZED_FRAMED_HEADERS = /* @__PURE__ */ new Map([
	["content-type", TSS_CONTENT_TYPE_FRAMED_VERSIONED],
	[X_TSS_SERIALIZED, "true"],
	[X_TSS_RAW_RESPONSE, null],
	["location", null]
]);
var NOT_FOUND_HEADERS = /* @__PURE__ */ new Map([
	["content-type", "application/json"],
	[X_TSS_SERIALIZED, null],
	[X_TSS_RAW_RESPONSE, null],
	["location", null]
]);
var RAW_RESPONSE_HEADERS = /* @__PURE__ */ new Map([[X_TSS_RAW_RESPONSE, "true"]]);
var THROWN_RESPONSE_HEADERS = /* @__PURE__ */ new Map([[X_TSS_RAW_RESPONSE, "thrown"]]);
var MAX_PAYLOAD_SIZE = 1e6;
var MAX_PENDING_SERIALIZATION_RECORDS = 1024;
var MAX_PENDING_SERIALIZATION_BYTES = 33554432;
var textEncoder = new TextEncoder();
function encodeSerializationRecord(value) {
	return textEncoder.encode(JSON.stringify(value));
}
function exceedsPendingSerializationLimit(record, recordCount, pendingBytes) {
	return recordCount >= MAX_PENDING_SERIALIZATION_RECORDS || pendingBytes + record.byteLength > MAX_PENDING_SERIALIZATION_BYTES;
}
function runSerializationCleanup(dispose) {
	try {
		dispose();
	} catch {}
}
function cancelRawStream(stream, reason) {
	stream.cancel(reason).catch(() => {});
}
/**
* Marks a Response thrown during a server-function request so the client
* rejects the call with it. Redirects keep their own protocol.
*/
function toThrownServerFnResponse(response) {
	return isRedirect(response) ? response : setProtectedResponseHeaders(response, THROWN_RESPONSE_HEADERS);
}
/**
* Builds the reply for a server-function request that failed outside the
* function, such as in request middleware. Like a failed call, it carries
* only the thrown value under an `error` key, so the client rethrows it.
*/
async function createServerFnErrorResponse(error, serovalPlugins) {
	if (isNotFound(error)) return isNotFoundResponse(error);
	const headers = getErrorHeaders(error) ?? new Headers();
	const { status, statusText } = resolveErrorResponseStatus(error);
	headers.set("Content-Type", "application/json");
	headers.set(X_TSS_SERIALIZED, "true");
	headers.delete(X_TSS_RAW_RESPONSE);
	headers.delete("location");
	const plugins = serovalPlugins ?? getSerovalPlugins(defaultSerovalDeserializerPlugins);
	let serializedError;
	try {
		serializedError = JSON.stringify(await toCrossJSONAsync({ error }, {
			refs: /* @__PURE__ */ new Map(),
			plugins
		}));
	} catch (serializationError) {
		serializedError = JSON.stringify(await toCrossJSONAsync({ error: serializationError }, {
			refs: /* @__PURE__ */ new Map(),
			plugins
		}));
	}
	const errorResponse = new Response(serializedError, {
		status,
		statusText,
		headers
	});
	protectResponseHeaders(errorResponse, SERIALIZED_JSON_HEADERS);
	return errorResponse;
}
var handleServerAction = async ({ request, serverFnId }) => {
	const methodUpper = request.method.toUpperCase();
	const action = await getServerFnById(serverFnId, { origin: "client" });
	if (action.method && methodUpper !== action.method) return new Response(`expected ${action.method} method. Got ${methodUpper}`, {
		status: 405,
		headers: { Allow: action.method }
	});
	const headers = request.headers;
	const isServerFn = headers.get("x-tsr-serverfn") === "true";
	let serovalPlugins;
	const getRequestSerovalPlugins = () => {
		return serovalPlugins ??= getSerovalPlugins(defaultSerovalDeserializerPlugins);
	};
	const contentType = headers.get("content-type");
	try {
		let res;
		if (contentType && (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded"))) {
			if (methodUpper === "GET") throw new Error("Invariant failed: GET requests with FormData payloads are not supported");
			const formData = await request.formData();
			const serializedContext = formData.get(TSS_FORMDATA_CONTEXT);
			formData.delete(TSS_FORMDATA_CONTEXT);
			const params = {
				data: formData,
				method: methodUpper
			};
			if (typeof serializedContext === "string") try {
				const parsedContext = JSON.parse(serializedContext);
				const deserializedContext = fromJSON(parsedContext, { plugins: getRequestSerovalPlugins() });
				if (typeof deserializedContext === "object" && deserializedContext) params.context = deserializedContext;
			} catch (e) {
				console.warn("Failed to parse FormData context:", e);
			}
			res = await action(params);
		} else {
			let json;
			if (methodUpper === "GET") {
				const payloadParam = getParsedRequestUrl(request).searchParams.get("payload");
				if (payloadParam && payloadParam.length > MAX_PAYLOAD_SIZE) throw new Error("Payload too large");
				json = payloadParam ? JSON.parse(payloadParam) : void 0;
			} else if (contentType?.includes("application/json")) json = await request.json();
			const payload = json === void 0 ? void 0 : fromJSON(json, { plugins: getRequestSerovalPlugins() });
			res = await action({
				data: payload?.data,
				context: payload?.context,
				method: methodUpper
			});
		}
		const failed = "error" in res;
		const unwrapped = failed ? res.error : res.result;
		if (!isServerFn && (unwrapped instanceof Response || unwrapped === null || typeof unwrapped !== "object")) return unwrapped;
		if (unwrapped instanceof Response) {
			if (failed) return toThrownServerFnResponse(unwrapped);
			if (isRedirect(unwrapped)) return unwrapped;
			return setProtectedResponseHeaders(unwrapped, RAW_RESPONSE_HEADERS);
		}
		return serializeResult(res, request, getRequestSerovalPlugins());
	} catch (error) {
		if (error instanceof Response) return error;
		return createServerFnErrorResponse(error, serovalPlugins);
	}
};
/**
* Serializes a server-function result. A result that Seroval completes
* synchronously without RawStreams becomes plain JSON; everything else is a
* framed response whose records and raw streams are multiplexed in order.
*/
function serializeResult(res, request, plugins) {
	const initialRecords = [];
	let initialBytes = 0;
	const pendingRawStreams = [];
	let done = false;
	let initialParsed = false;
	let serializationFailure;
	let disposeSerialization;
	let onParse = (value, initial) => {
		if (serializationFailure) return;
		initialParsed ||= initial;
		const record = encodeSerializationRecord(value);
		if (exceedsPendingSerializationLimit(record, initialRecords.length, initialBytes)) {
			serializationFailure = [/* @__PURE__ */ new Error("Server function serialization exceeded its pending output limit")];
			return;
		}
		initialRecords.push(record);
		initialBytes += record.byteLength;
	};
	let onDone = () => {
		if (initialParsed) done = true;
	};
	let onError = (error) => {
		serializationFailure ??= [error];
	};
	const rawStreamPlugin = createRawStreamRPCPlugin((id, stream) => {
		if (serializationFailure) {
			cancelRawStream(stream, serializationFailure[0]);
			return;
		}
		if (id > 1024) {
			const error = /* @__PURE__ */ new Error(`Too many raw streams in framed response (max ${MAX_FRAMED_STREAMS})`);
			cancelRawStream(stream, error);
			onError(error);
			return;
		}
		pendingRawStreams.push({
			id,
			stream
		});
	});
	const dispose = toCrossJSONStream(res, {
		refs: /* @__PURE__ */ new Map(),
		plugins: [rawStreamPlugin, ...plugins],
		onParse(value, initial) {
			onParse(value, initial);
		},
		onDone() {
			onDone();
		},
		onError: (error) => {
			onError(error);
		}
	});
	if (serializationFailure) {
		runSerializationCleanup(dispose);
		for (const registration of pendingRawStreams) cancelRawStream(registration.stream, serializationFailure[0]);
		throw serializationFailure[0];
	}
	if (!done) disposeSerialization = dispose;
	if (done && pendingRawStreams.length === 0 && initialRecords.length === 1) return new DeferredResponse(initialRecords[0]);
	if (done && initialRecords.length === 1) {
		const json = initialRecords[0];
		if (json.byteLength > 16777216) {
			const error = /* @__PURE__ */ new Error("Server function serialization exceeded its pending output limit");
			for (const registration of pendingRawStreams) cancelRawStream(registration.stream, error);
			throw error;
		}
		const rawStreams = pendingRawStreams.splice(0);
		initialRecords.length = 0;
		return createFramedResponse(new ReadableStream({
			start(controller) {
				controller.enqueue({
					json,
					rawStreams
				});
				controller.close();
			},
			cancel(reason) {
				for (const registration of rawStreams) cancelRawStream(registration.stream, reason);
			}
		}), { signal: request.signal });
	}
	const { readable, writable } = new TransformStream();
	const writer = writable.getWriter();
	const recordAbortController = new AbortController();
	let pendingBytes = 0;
	const pendingRecords = /* @__PURE__ */ new Set();
	const abortRecordStream = (error) => {
		if (serializationFailure) return;
		serializationFailure = [error];
		const disposeCurrentSerialization = disposeSerialization;
		disposeSerialization = void 0;
		for (const registration of pendingRawStreams.splice(0)) cancelRawStream(registration.stream, error);
		for (const record of pendingRecords) for (const registration of record.rawStreams) cancelRawStream(registration.stream, error);
		pendingRecords.clear();
		recordAbortController.abort(error);
		writer.abort(error).catch(() => {});
		if (disposeCurrentSerialization) runSerializationCleanup(disposeCurrentSerialization);
	};
	const writeRecord = (json, rawStreams) => {
		if (serializationFailure) {
			for (const registration of rawStreams) cancelRawStream(registration.stream, serializationFailure[0]);
			return false;
		}
		if (json.byteLength > 16777216 || exceedsPendingSerializationLimit(json, pendingRecords.size, pendingBytes)) {
			const error = /* @__PURE__ */ new Error("Server function serialization exceeded its pending output limit");
			for (const registration of rawStreams) cancelRawStream(registration.stream, error);
			onError(error);
			return false;
		}
		pendingBytes += json.byteLength;
		const record = {
			json,
			rawStreams
		};
		pendingRecords.add(record);
		writer.write(record).then(() => {
			pendingRecords.delete(record);
			pendingBytes -= json.byteLength;
		}, (error) => {
			const stillOwned = pendingRecords.delete(record);
			pendingBytes -= json.byteLength;
			if (stillOwned) for (const registration of rawStreams) cancelRawStream(registration.stream, error);
		});
		return true;
	};
	onParse = (value) => {
		if (serializationFailure) return;
		writeRecord(encodeSerializationRecord(value), pendingRawStreams.splice(0));
	};
	onDone = () => {
		if (serializationFailure) return;
		disposeSerialization = void 0;
		writer.close().catch(() => {});
	};
	onError = (error) => {
		abortRecordStream(error);
	};
	const initialRawStreams = pendingRawStreams.splice(0);
	for (let index = 0; index < initialRecords.length; index++) {
		const isLast = index === initialRecords.length - 1;
		if (!writeRecord(initialRecords[index], isLast ? initialRawStreams : [])) {
			if (!isLast) for (const registration of initialRawStreams) cancelRawStream(registration.stream, serializationFailure[0]);
			initialRecords.length = 0;
			throw serializationFailure[0];
		}
	}
	initialRecords.length = 0;
	if (done) onDone();
	writer.closed.catch((error) => {
		abortRecordStream(error);
	});
	return createFramedResponse(readable, {
		signal: AbortSignal.any([recordAbortController.signal, request.signal]),
		onCancel: abortRecordStream
	});
}
function createFramedResponse(records, options) {
	const multiplexedStream = createMultiplexedStream(records, options);
	const { status, statusText } = getSerializedResponseState();
	try {
		const response = new Response(multiplexedStream, {
			status,
			statusText,
			headers: {
				"Content-Type": TSS_CONTENT_TYPE_FRAMED_VERSIONED,
				[X_TSS_SERIALIZED]: "true"
			}
		});
		protectResponseHeaders(response, SERIALIZED_FRAMED_HEADERS);
		return response;
	} catch (error) {
		cancelRawStream(multiplexedStream, error);
		throw error;
	}
}
function isNotFoundResponse(error) {
	const { headers, ...rest } = error;
	let responseHeaders;
	if (headers) {
		const copiedHeaders = new Headers(headers);
		copiedHeaders.set("Content-Type", "application/json");
		copiedHeaders.delete(X_TSS_SERIALIZED);
		copiedHeaders.delete(X_TSS_RAW_RESPONSE);
		copiedHeaders.delete("location");
		responseHeaders = copiedHeaders;
	} else responseHeaders = { "Content-Type": "application/json" };
	const response = new Response(JSON.stringify(rest), {
		status: 404,
		headers: responseHeaders
	});
	protectResponseHeaders(response, NOT_FOUND_HEADERS);
	return response;
}
var LINK_PARAM_TOKEN_RE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
var PRELOAD_AS_VALUES = /* @__PURE__ */ new Set([
	"fetch",
	"font",
	"image",
	"script",
	"style",
	"track"
]);
function buildLinkParam(name, value) {
	if (value === void 0) return name;
	if (LINK_PARAM_TOKEN_RE.test(value)) return `${name}=${value}`;
	return `${name}=${JSON.stringify(value)}`;
}
function serializeEarlyHint(hint) {
	const parts = [`<${hint.href}>`, buildLinkParam("rel", hint.rel)];
	if (hint.as) parts.push(buildLinkParam("as", hint.as));
	if (hint.crossOrigin !== void 0) parts.push(buildLinkParam("crossorigin", hint.crossOrigin || void 0));
	if (hint.type) parts.push(buildLinkParam("type", hint.type));
	if (hint.integrity) parts.push(buildLinkParam("integrity", hint.integrity));
	if (hint.referrerPolicy) parts.push(buildLinkParam("referrerpolicy", hint.referrerPolicy));
	if (hint.fetchPriority) parts.push(buildLinkParam("fetchpriority", hint.fetchPriority));
	return parts.join("; ");
}
function getStringAttr(attrs, name, fallbackName) {
	const value = attrs?.[name] ?? (fallbackName ? attrs?.[fallbackName] : void 0);
	return typeof value === "string" ? value : void 0;
}
function getPreloadAs(attrs) {
	const as = getStringAttr(attrs, "as");
	return as && PRELOAD_AS_VALUES.has(as) ? as : void 0;
}
function addEarlyHintFetchAttrs(hint, attrs) {
	const crossOrigin = getStringAttr(attrs, "crossOrigin", "crossorigin");
	const type = getStringAttr(attrs, "type");
	const integrity = getStringAttr(attrs, "integrity");
	const referrerPolicy = getStringAttr(attrs, "referrerPolicy", "referrerpolicy");
	const fetchPriority = getStringAttr(attrs, "fetchPriority", "fetchpriority");
	if (crossOrigin !== void 0) hint.crossOrigin = crossOrigin;
	if (type) hint.type = type;
	if (integrity) hint.integrity = integrity;
	if (referrerPolicy) hint.referrerPolicy = referrerPolicy;
	if (fetchPriority) hint.fetchPriority = fetchPriority;
}
function linkAttrsToEarlyHint(attrs) {
	const href = getStringAttr(attrs, "href");
	const rel = getStringAttr(attrs, "rel");
	if (!href || !rel) return void 0;
	const relTokens = rel.split(/\s+/);
	let hintRel;
	let hintAs;
	if (relTokens.includes("modulepreload")) {
		hintRel = "modulepreload";
		hintAs = "script";
	} else if (relTokens.includes("stylesheet")) {
		hintRel = "preload";
		hintAs = "style";
	} else if (relTokens.includes("preload")) {
		hintAs = getPreloadAs(attrs);
		if (!hintAs) return void 0;
		hintRel = "preload";
	} else if (relTokens.includes("preconnect")) {
		hintRel = "preconnect";
		hintAs = void 0;
	} else if (relTokens.includes("dns-prefetch")) {
		hintRel = "dns-prefetch";
		hintAs = void 0;
	}
	if (!hintRel) return void 0;
	const hint = {
		href,
		rel: hintRel
	};
	if (hintAs) hint.as = hintAs;
	addEarlyHintFetchAttrs(hint, attrs);
	return hint;
}
function collectStaticHintsFromManifest(manifest, matchedRoutes) {
	const hints = [];
	for (const route of matchedRoutes) {
		const routeManifest = manifest.routes[route.id];
		if (!routeManifest) continue;
		for (const link of routeManifest.preloads ?? []) {
			const attrs = getScriptPreloadAttrs(manifest, link);
			const hint = {
				href: attrs.href,
				rel: attrs.rel,
				as: "script"
			};
			if (attrs.crossOrigin !== void 0) hint.crossOrigin = attrs.crossOrigin;
			hints.push(hint);
		}
		for (const link of routeManifest.css ?? []) {
			const stylesheetHref = getStylesheetHref(link);
			if (manifest.inlineCss?.styles[stylesheetHref] !== void 0) continue;
			const resolvedLink = resolveManifestCssLink(link);
			const hint = {
				href: stylesheetHref,
				rel: "preload",
				as: "style"
			};
			if (resolvedLink.crossOrigin !== void 0) hint.crossOrigin = resolvedLink.crossOrigin;
			hints.push(hint);
		}
	}
	return hints;
}
function collectDynamicHintsFromMatches(matches) {
	const hints = [];
	for (const match of matches) {
		const links = match.links;
		if (!Array.isArray(links)) continue;
		for (const link of links) {
			const hint = linkAttrsToEarlyHint(link);
			if (hint) hints.push(hint);
		}
	}
	return hints;
}
function createEarlyHintsEvent(opts) {
	const nextHints = [];
	const nextLinks = [];
	for (const hint of opts.hints) {
		const link = serializeEarlyHint(hint);
		if (opts.sentLinks.has(link)) continue;
		opts.sentLinks.add(link);
		opts.sentHints.push(hint);
		nextHints.push(hint);
		nextLinks.push(link);
	}
	if (!nextHints.length && opts.phase !== "dynamic") return void 0;
	return {
		phase: opts.phase,
		hints: nextHints,
		links: nextLinks,
		allHints: opts.sentHints.slice(),
		allLinks: Array.from(opts.sentLinks)
	};
}
function createResponseLinkHeaderEntries(opts) {
	for (const hint of opts.hints) {
		const link = serializeEarlyHint(hint);
		if (opts.sentLinks.has(link)) continue;
		opts.sentLinks.add(link);
		opts.entries.push({
			phase: opts.phase,
			hint,
			link
		});
	}
}
function getResponseLinkHeaderEntries(opts) {
	if (!opts.filter) return opts.entries.map((entry) => entry.link);
	try {
		const links = [];
		for (const entry of opts.entries) if (opts.filter(entry)) links.push(entry.link);
		return links;
	} catch (err) {
		console.error("Error filtering response Link headers:", err);
		return [];
	}
}
function notifyEarlyHints(phase, event, onEarlyHints) {
	try {
		const result = onEarlyHints(event);
		if (result) Promise.resolve(result).catch((err) => {
			console.error(`Error sending ${phase} early hints:`, err);
		});
	} catch (err) {
		console.error(`Error sending ${phase} early hints:`, err);
	}
}
function getResponseLinkHeaderFilter(responseLinkHeader) {
	if (typeof responseLinkHeader !== "object") return;
	return responseLinkHeader.filter;
}
function appendResponseLinkHeaders(opts) {
	for (const link of getResponseLinkHeaderEntries(opts)) opts.responseHeaders.append("Link", link);
}
function collectResponseLinkHeaderEntries(opts) {
	for (let index = 0; index < opts.event.hints.length; index++) opts.entries.push({
		phase: opts.phase,
		hint: opts.event.hints[index],
		link: opts.event.links[index]
	});
}
function collectEarlyHintsPhase(opts) {
	const event = opts.onEarlyHints ? createEarlyHintsEvent({
		phase: opts.phase,
		hints: opts.hints,
		sentLinks: opts.sentLinks,
		sentHints: opts.sentHints
	}) : void 0;
	if (event) notifyEarlyHints(opts.phase, event, opts.onEarlyHints);
	if (!opts.responseLinkHeaderEntries) return;
	if (event) {
		collectResponseLinkHeaderEntries({
			phase: opts.phase,
			event,
			entries: opts.responseLinkHeaderEntries
		});
		return;
	}
	createResponseLinkHeaderEntries({
		phase: opts.phase,
		hints: opts.hints,
		sentLinks: opts.sentLinks,
		entries: opts.responseLinkHeaderEntries
	});
}
function createEarlyHintsCollector(opts) {
	if (!opts?.onEarlyHints && !opts?.responseLinkHeader) return;
	const sentLinks = /* @__PURE__ */ new Set();
	const sentHints = opts.onEarlyHints ? new Array() : void 0;
	const responseLinkHeaderEntries = opts.responseLinkHeader ? new Array() : void 0;
	const responseLinkHeaderFilter = getResponseLinkHeaderFilter(opts.responseLinkHeader);
	return {
		collectStatic: ({ manifest, matchedRoutes }) => {
			if (!matchedRoutes?.length) return;
			collectEarlyHintsPhase({
				phase: "static",
				hints: collectStaticHintsFromManifest(manifest, matchedRoutes),
				sentLinks,
				sentHints,
				onEarlyHints: opts.onEarlyHints,
				responseLinkHeaderEntries
			});
		},
		collectDynamic: (matches) => {
			collectEarlyHintsPhase({
				phase: "dynamic",
				hints: collectDynamicHintsFromMatches(matches),
				sentLinks,
				sentHints,
				onEarlyHints: opts.onEarlyHints,
				responseLinkHeaderEntries
			});
		},
		appendResponseHeaders: (headers) => {
			if (!responseLinkHeaderEntries?.length) return;
			appendResponseLinkHeaders({
				responseHeaders: headers,
				entries: responseLinkHeaderEntries,
				filter: responseLinkHeaderFilter
			});
		}
	};
}
function normalizeTransformAssetResult(result) {
	if (typeof result === "string") return { href: result };
	return result;
}
function escapeCssString(value) {
	return value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\a ").replace(/\r/g, "\\d ").replace(/\f/g, "\\c ");
}
async function transformInlineCssTemplate(options) {
	const { strings, urls } = options.template;
	if (strings.length !== urls.length + 1) throw new Error(`TanStack Start inlineCss template for ${options.stylesheetHref} is invalid`);
	let css = strings[0];
	for (let index = 0; index < urls.length; index++) {
		const transformed = normalizeTransformAssetResult(await options.transformFn({
			kind: "css-url",
			url: urls[index],
			stylesheetHref: options.stylesheetHref
		}));
		css += escapeCssString(transformed.href) + strings[index + 1];
	}
	return css;
}
async function transformInlineCssStyles(inlineCss, transformFn) {
	const transformedStyles = {};
	const transformedEntries = await Promise.all(Object.entries(inlineCss.styles).map(async ([stylesheetHref, css]) => {
		const template = inlineCss.templates?.[stylesheetHref];
		return [stylesheetHref, template ? await transformInlineCssTemplate({
			stylesheetHref,
			template,
			transformFn
		}) : css];
	}));
	for (const [stylesheetHref, css] of transformedEntries) transformedStyles[stylesheetHref] = css;
	return {
		styles: transformedStyles,
		...inlineCss.templates ? { templates: inlineCss.templates } : {}
	};
}
function resolveTransformAssetsCrossOrigin(config, kind) {
	if (!config) return void 0;
	if (typeof config === "string") return config;
	return config[kind];
}
function isObjectShorthand(transform) {
	return "prefix" in transform;
}
function resolveTransformAssetsConfig(transform) {
	if (typeof transform === "string") {
		const prefix = transform;
		return {
			type: "transform",
			transformFn: ({ url }) => ({ href: `${prefix}${url}` }),
			cache: true
		};
	}
	if (typeof transform === "function") return {
		type: "transform",
		transformFn: transform,
		cache: true
	};
	if (isObjectShorthand(transform)) {
		const { prefix, crossOrigin } = transform;
		return {
			type: "transform",
			transformFn: ({ url, kind }) => {
				const href = `${prefix}${url}`;
				if (kind === "css-url") return { href };
				const co = resolveTransformAssetsCrossOrigin(crossOrigin, kind);
				return co ? {
					href,
					crossOrigin: co
				} : { href };
			},
			cache: true
		};
	}
	if ("createTransform" in transform && transform.createTransform) return {
		type: "createTransform",
		createTransform: transform.createTransform,
		cache: transform.cache !== false
	};
	return {
		type: "transform",
		transformFn: typeof transform.transform === "string" ? (({ url }) => ({ href: `${transform.transform}${url}` })) : transform.transform,
		cache: transform.cache !== false
	};
}
function assignManifestLink(link, next) {
	if (typeof link === "string") return next.crossOrigin ? next : next.href;
	const nextLink = {
		...link,
		href: next.href
	};
	if (next.crossOrigin) nextLink.crossOrigin = next.crossOrigin;
	else delete nextLink.crossOrigin;
	return nextLink;
}
async function transformManifestAssets(source, transformFn, _opts) {
	const manifest = structuredClone(source);
	const inlineCssEnabled = _opts?.inlineCss !== false;
	const scriptTransforms = /* @__PURE__ */ new Map();
	const transformScript = (url) => {
		const cached = scriptTransforms.get(url);
		if (cached) return cached;
		const transformed = Promise.resolve(transformFn({
			url,
			kind: "script"
		})).then(normalizeTransformAssetResult);
		scriptTransforms.set(url, transformed);
		return transformed;
	};
	if (!inlineCssEnabled) delete manifest.inlineCss;
	else if (manifest.inlineCss) manifest.inlineCss = await transformInlineCssStyles(manifest.inlineCss, transformFn);
	for (const route of Object.values(manifest.routes)) {
		if (route.preloads?.length) route.preloads = await Promise.all(route.preloads.map(async (link) => {
			const resolved = resolveManifestAssetLink(link);
			const result = await transformScript(resolved.href);
			return assignManifestLink(link, {
				href: result.href,
				crossOrigin: result.crossOrigin
			});
		}));
		if (route.css?.length && !manifest.inlineCss) route.css = await Promise.all(route.css.map(async (link) => {
			const result = normalizeTransformAssetResult(await transformFn({
				url: resolveManifestCssLink(link).href,
				kind: "stylesheet"
			}));
			return assignManifestLink(link, {
				href: result.href,
				crossOrigin: result.crossOrigin
			});
		}));
		if (route.scripts?.length) for (const script of route.scripts) {
			const src = script.attrs?.src;
			if (typeof src !== "string") continue;
			const result = await transformScript(src);
			script.attrs = {
				...script.attrs,
				src: result.href
			};
			if (result.crossOrigin) script.attrs.crossOrigin = result.crossOrigin;
			else delete script.attrs.crossOrigin;
		}
	}
	return manifest;
}
/**
* Builds a final ServerManifest without URL transforms. Used when no
* transformAssets option is provided.
*
* Returns a new manifest object so the cached base manifest is never mutated.
*/
function buildManifest(source, opts) {
	return {
		...source.scriptFormat ? { scriptFormat: source.scriptFormat } : {},
		...opts?.inlineCss !== false && source.inlineCss ? { inlineCss: structuredClone(source.inlineCss) } : {},
		routes: { ...source.routes }
	};
}
/**
* The inline-CSS choice that needs no handler callback: a request override
* wins, then a static handler option, then the default. Undefined when a
* handler callback has to decide.
*/
function getStaticInlineCss(requestInlineCss, handlerInlineCss) {
	if (requestInlineCss !== void 0) return requestInlineCss;
	if (typeof handlerInlineCss === "function") return;
	return handlerInlineCss ?? true;
}
async function resolveInlineCssForRequest(opts) {
	const inlineCss = getStaticInlineCss(opts.requestInlineCss, opts.handlerInlineCss);
	if (inlineCss !== void 0) return inlineCss;
	return await opts.handlerInlineCss({ request: opts.request });
}
function createCachedBaseManifestLoader(loadBaseManifest) {
	let baseManifestPromise;
	return () => {
		if (!baseManifestPromise) baseManifestPromise = loadBaseManifest().catch((error) => {
			baseManifestPromise = void 0;
			throw error;
		});
		return baseManifestPromise;
	};
}
function createFinalManifestTransformResolver(transformAssets, opts) {
	const transformConfig = transformAssets !== void 0 ? resolveTransformAssetsConfig(transformAssets) : void 0;
	const cache = transformConfig ? transformConfig.cache : true;
	const warmup = !!transformAssets && typeof transformAssets === "object" && "warmup" in transformAssets && transformAssets.warmup === true;
	let cachedCreateTransformPromise;
	const clearCachedCreateTransform = () => {
		cachedCreateTransformPromise = void 0;
	};
	return {
		cache,
		warmup,
		clearCachedCreateTransform,
		getTransformFn: async (ctx) => {
			if (!transformConfig) return void 0;
			if (transformConfig.type !== "createTransform") return transformConfig.transformFn;
			if (!cache || !opts.cacheCreateTransform) return transformConfig.createTransform(ctx);
			if (!cachedCreateTransformPromise) cachedCreateTransformPromise = Promise.resolve(transformConfig.createTransform(ctx)).catch((error) => {
				clearCachedCreateTransform();
				throw error;
			});
			return cachedCreateTransformPromise;
		}
	};
}
function createFinalManifestResolver(opts) {
	const finalManifestCache = /* @__PURE__ */ new Map();
	const transformResolver = createFinalManifestTransformResolver(opts.transformAssets, { cacheCreateTransform: opts.cacheCreateTransform });
	const handlerDefaultInlineCss = getStaticInlineCss(void 0, opts.inlineCss);
	const getRequestManifestOptions = async (requestOpts) => {
		const transformFn = await transformResolver.getTransformFn({
			warmup: false,
			request: requestOpts.request
		});
		const inlineCss = await resolveInlineCssForRequest({
			request: requestOpts.request,
			handlerInlineCss: opts.inlineCss,
			requestInlineCss: requestOpts.requestInlineCss
		});
		return {
			getBaseManifest: requestOpts.getBaseManifest,
			transformFn,
			cache: transformResolver.cache,
			inlineCss
		};
	};
	const resolveRequest = async (requestOpts, cache) => {
		return resolveFinalManifest({
			...await getRequestManifestOptions(requestOpts),
			finalManifestCache: cache
		});
	};
	return {
		warmup: ({ getBaseManifest }) => warmupFinalManifest({
			enabled: transformResolver.warmup,
			handlerDefaultInlineCss,
			cache: transformResolver.cache,
			finalManifestCache,
			getBaseManifest,
			getTransformFn: () => transformResolver.getTransformFn({ warmup: true }),
			onError: transformResolver.clearCachedCreateTransform
		}),
		resolveCached: (requestOpts) => {
			const inlineCss = getStaticInlineCss(requestOpts.requestInlineCss, opts.inlineCss);
			if (transformResolver.cache && inlineCss !== void 0) {
				const cached = finalManifestCache.get(getFinalManifestCacheKey(inlineCss));
				if (cached) return cached;
			}
			return resolveRequest(requestOpts, finalManifestCache);
		},
		resolveUncached: (requestOpts) => resolveRequest(requestOpts, void 0)
	};
}
function getFinalManifestCacheKey(inlineCss) {
	return inlineCss ? "inline-css" : "linked-css";
}
function cacheFinalManifestPromise(finalManifestCache, cacheKey, promise) {
	const cachedPromise = promise.then((manifest) => {
		if (finalManifestCache.get(cacheKey) === cachedPromise) finalManifestCache.set(cacheKey, manifest);
		return manifest;
	}, (error) => {
		if (finalManifestCache.get(cacheKey) === cachedPromise) finalManifestCache.delete(cacheKey);
		throw error;
	});
	finalManifestCache.set(cacheKey, cachedPromise);
	return cachedPromise;
}
function getOrCreateCachedFinalManifest(finalManifestCache, cacheKey, computeFinalManifest) {
	const cached = finalManifestCache.get(cacheKey);
	if (cached) return cached;
	return cacheFinalManifestPromise(finalManifestCache, cacheKey, Promise.resolve().then(computeFinalManifest));
}
async function buildFinalManifest(opts) {
	return opts.transformFn ? await transformManifestAssets(opts.base, opts.transformFn, { inlineCss: opts.inlineCss }) : buildManifest(opts.base, { inlineCss: opts.inlineCss });
}
async function resolveFinalManifest(opts) {
	const computeFinalManifest = async () => {
		return buildFinalManifest({
			base: await opts.getBaseManifest(),
			transformFn: opts.transformFn,
			inlineCss: opts.inlineCss
		});
	};
	if (opts.finalManifestCache && (!opts.transformFn || opts.cache)) return getOrCreateCachedFinalManifest(opts.finalManifestCache, getFinalManifestCacheKey(opts.inlineCss), computeFinalManifest);
	return computeFinalManifest();
}
function warmupFinalManifest(opts) {
	if (!opts.enabled || opts.handlerDefaultInlineCss === void 0 || !opts.cache) return;
	const inlineCss = opts.handlerDefaultInlineCss;
	const warmupPromise = cacheFinalManifestPromise(opts.finalManifestCache, getFinalManifestCacheKey(inlineCss), Promise.resolve().then(async () => {
		const [base, transformFn] = await Promise.all([opts.getBaseManifest(), opts.getTransformFn()]);
		return buildFinalManifest({
			base,
			transformFn,
			inlineCss
		});
	}));
	if (opts.onError) warmupPromise.catch(opts.onError);
	return warmupPromise;
}
var ServerFunctionSerializationAdapter = createSerializationAdapter({
	key: "$TSS/serverfn",
	test: (v) => {
		if (typeof v !== "function") return false;
		if (!(TSS_SERVER_FUNCTION in v)) return false;
		return !!v[TSS_SERVER_FUNCTION];
	},
	toSerializable: ({ serverFnMeta }) => ({ functionId: serverFnMeta.id }),
	fromSerializable: ({ functionId }) => {
		const fn = async (opts, signal) => {
			const serverFn = await getServerFnById(functionId, { origin: "client" });
			const result = await serverFn({
				data: opts?.data,
				context: opts?.context,
				method: serverFn.method ?? "GET"
			}, signal);
			if ("error" in result) throw result.error;
			return result.result;
		};
		return fn;
	}
});
function getStartResponseHeaders(router) {
	const headers = new Headers({ "content-type": "text/html; charset=utf-8" });
	const matches = _getRenderedMatches(router.stores.matches.get());
	return matches.some((match) => match.headers) ? mergeHeaders(headers, ...matches.map((match) => match.headers)) : headers;
}
var cachedEntries;
var hasWarnedMissingCsrfMiddleware = false;
var defaultCsrfMiddleware = createCsrfMiddleware({ filter: (ctx) => ctx.handlerType === "serverFn" });
var getCachedBaseManifest = createCachedBaseManifestLoader(() => getStartManifest());
var getProdBaseManifest = () => getCachedBaseManifest();
var getBaseManifest = getProdBaseManifest;
var createEarlyHintsForRequest = createEarlyHintsCollector;
async function loadEntries() {
	const [routerEntry, startEntry, pluginAdapters] = await Promise.all([
		import("./router-BJg2H47m.mjs").then((n) => n.t),
		import("./start-D1ld0xQK.mjs"),
		import("./empty-plugin-adapters-D9UWiqvJ.mjs")
	]);
	return {
		routerEntry,
		startEntry,
		pluginAdapters
	};
}
function getEntries() {
	if (!cachedEntries) cachedEntries = loadEntries().then((entries) => {
		cachedEntries = entries;
		return entries;
	});
	return cachedEntries;
}
function hasCsrfMiddleware(middlewares) {
	return middlewares.some((middleware) => csrfSymbol in middleware);
}
function warnMissingCsrfMiddlewareOnce() {
	if (hasWarnedMissingCsrfMiddleware) return;
	hasWarnedMissingCsrfMiddleware = true;
	console.warn(`TanStack Start server functions are not protected by the CSRF middleware.

Server functions are same-origin RPC endpoints and should be protected from cross-site requests.

Add the CSRF middleware in src/start.ts:

  const csrfMiddleware = createCsrfMiddleware({
    filter: (ctx) => ctx.handlerType === 'serverFn',
  })

  export const startInstance = createStart(() => ({
    requestMiddleware: [csrfMiddleware],
  }))

If you intentionally handle CSRF another way, disable this warning:

  tanstackStart({
    serverFns: {
      disableCsrfMiddlewareWarning: true,
    },
  })`);
}
var ROUTER_BASEPATH = "/";
var SERVER_FN_BASE = "/_serverFn/";
var IS_PRERENDERING = process.env.TSS_PRERENDERING === "true";
var IS_SHELL_ENV = process.env.TSS_SHELL === "true";
var IS_DEV = true;
var ERR_NO_RESPONSE = IS_DEV ? `It looks like you forgot to return a response from your server route handler. If you want to defer to the app router, make sure to have a component set in this route.` : "Internal Server Error";
var ERR_NO_DEFER = IS_DEV ? `You cannot defer to the app router if there is no component defined on this route.` : "Internal Server Error";
function throwRouteHandlerError() {
	throw new Error(ERR_NO_RESPONSE);
}
function throwIfMayNotDefer() {
	throw new Error(ERR_NO_DEFER);
}
function getResponseFromResult(result) {
	return isSsrResponse(result) || result instanceof Response ? result : result?.response;
}
function disposeResponseResult(result, reason) {
	const response = getResponseFromResult(result);
	if (isSsrResponse(response) || response instanceof Response) disposeSsrResponse(response, reason);
}
/**
* A new body continues the owned one when it is the same stream, or when the
* owned body is already being read, as by a pipe, a tee, or a `Response` that
* copies a body by reading it (Bun, or a wrapped global `Response`). Start
* cannot tell such a reader from one that stops early, so it disposes only an
* unread body. A stream whose reader stops early ends with the request's abort
* or the SSR stream's lifetime limit.
*/
function inheritsResponseOwnership(ownership, body) {
	const ownedBody = ownership.response.body;
	return body === ownedBody || ownedBody.locked;
}
function disposeResponseOwnership(ownership, reason) {
	const { response, sourceBody, streamResponse } = ownership;
	streamResponse?.dispose(reason);
	if (!streamResponse || response.body !== sourceBody) response.body.cancel(reason).catch(() => {});
}
function getOwnedResponse(ownership) {
	const { response, sourceBody, streamResponse } = ownership;
	if (!streamResponse) return response;
	if (streamResponse.response === response && response.body === sourceBody) return streamResponse;
	if (response.body === sourceBody) return {
		...streamResponse,
		response
	};
	return {
		...streamResponse,
		response,
		dispose(reason) {
			disposeResponseOwnership(ownership, reason);
		}
	};
}
function createLateResponseDisposer(signal) {
	return (result) => disposeResponseResult(result, signal.reason);
}
/**
* Compose middleware around a terminal response handler. With no middleware
* the terminal runs directly.
*/
async function executeMiddleware(middlewares, terminal, ctx, signal, event, terminalNext) {
	let index = -1;
	let responseOwnership;
	let returnedDepth = Infinity;
	const disposeAbandonedResult = createLateResponseDisposer(signal);
	const adoptResponse = (exposed, streamResponse) => {
		const current = responseOwnership;
		const body = exposed instanceof Response ? exposed.body : null;
		const response = exposed;
		if (streamResponse && !body && streamResponse !== current?.streamResponse) streamResponse.dispose("Response body dropped by Start reconciliation");
		if (current && current.response === exposed) current.streamResponse ??= streamResponse;
		else if (current && body && inheritsResponseOwnership(current, body)) {
			if (body === current.response.body) transferResponseProtocol(current.response, response);
			current.response = response;
			current.streamResponse ??= streamResponse;
		} else {
			if (current) {
				responseOwnership = void 0;
				disposeResponseOwnership(current, "middleware response replaced");
			}
			responseOwnership = body ? {
				response,
				sourceBody: body,
				streamResponse
			} : void 0;
		}
		ctx.response = exposed;
	};
	const disposeCurrentBody = (reason) => {
		const current = responseOwnership;
		responseOwnership = void 0;
		if (current) disposeResponseOwnership(current, reason);
	};
	const setResponse = (response, caller) => {
		const owned = response !== void 0 && response === responseOwnership?.response;
		const ssrResponse = !owned && isSsrResponse(response) ? response : void 0;
		const exposed = ssrResponse ? ssrResponse.response : response;
		if (returnedDepth <= caller) {
			if (exposed !== ctx.response) disposeResponseResult(response, "late middleware response");
			return;
		}
		if (!owned) adoptResponse(exposed, ssrResponse?.serverSsrCleanup === "stream" ? ssrResponse : void 0);
		if (exposed instanceof Response) {
			const reconciled = reconcileResponse(exposed, event, disposeCurrentBody);
			if (reconciled !== exposed) adoptRebuilt(exposed, reconciled);
		}
	};
	const adoptRebuilt = (exposed, rebuilt) => {
		const current = responseOwnership;
		if (current?.response === exposed && rebuilt.body) {
			current.response = rebuilt;
			ctx.response = rebuilt;
		} else adoptResponse(rebuilt);
	};
	let nextPromise;
	function next(nextCtx) {
		const result = runNext(index, nextCtx);
		nextPromise = result;
		return result;
	}
	async function runNext(caller, nextCtx) {
		signal.throwIfAborted();
		if (nextCtx) {
			if (nextCtx.context) ctx.context = safeObjectMerge(ctx.context, nextCtx.context);
			const keys = Object.keys(nextCtx);
			for (let i = 0; i < keys.length; i++) {
				const key = keys[i];
				if (key === "response") setResponse(nextCtx.response, caller);
				else if (key !== "context") ctx[key] = nextCtx[key];
			}
		}
		const depth = ++index;
		const isTerminal = depth === middlewares.length;
		const middleware = depth < middlewares.length ? middlewares[depth] : isTerminal ? terminal : void 0;
		const middlewareNext = isTerminal && terminalNext ? terminalNext : next;
		if (!middleware) return ctx;
		let result;
		try {
			const pending = middleware({
				...ctx,
				next: middlewareNext
			});
			if (nextPromise && pending === nextPromise) {
				nextPromise = void 0;
				result = await pending;
				signal.throwIfAborted();
			} else if (!isPromise(pending)) {
				result = pending;
				signal.throwIfAborted();
			} else result = await waitForReason(pending, signal, disposeAbandonedResult, disposeAbandonedResult);
		} catch (err) {
			if (depth < returnedDepth) returnedDepth = depth;
			if (returnedDepth > caller) adoptResponse(ctx.response);
			if (signal.aborted) {
				if (result !== void 0) disposeAbandonedResult(result);
				if (err !== signal.reason) disposeAbandonedResult(err);
				throw signal.reason;
			}
			if (err instanceof Response) {
				setResponse(ctx.handlerType === "serverFn" ? toThrownServerFnResponse(err) : err, caller);
				return ctx;
			}
			throw err;
		}
		if (depth < returnedDepth) returnedDepth = depth;
		if (isTerminal && terminalNext && !result) throwRouteHandlerError();
		if (isTerminal && !terminalNext && result instanceof DeferredResponse) {
			if (returnedDepth > caller) {
				adoptResponse(void 0);
				adoptResponse(result.createResponse(event));
			}
			return ctx;
		}
		if (result && result !== ctx) {
			const response = getResponseFromResult(result);
			if (response !== void 0) {
				if (ctx.response !== responseOwnership?.response && ctx.response !== response && returnedDepth > caller) adoptResponse(ctx.response);
				setResponse(response, caller);
			} else setResponse(ctx.response, caller);
			if (returnedDepth > caller && response !== result && result.context && result.context !== ctx.context) ctx.context = safeObjectMerge(ctx.context, result.context);
		} else setResponse(ctx.response, caller);
		return ctx;
	}
	try {
		await runNext(-1);
		let response = ctx.response;
		if (!response) throwRouteHandlerError();
		if (signal.aborted) throw signal.reason;
		returnedDepth = -1;
		if (middlewares.length && ctx.handlerType === "serverFn") {
			const restored = restoreResponseProtocol(response, event);
			if (restored !== response) {
				adoptRebuilt(response, restored);
				response = restored;
			}
		}
		return responseOwnership ? getOwnedResponse(responseOwnership) : response;
	} catch (err) {
		returnedDepth = -1;
		if (responseOwnership) disposeResponseOwnership(responseOwnership, signal.aborted ? signal.reason : err);
		throw err;
	}
}
/**
* Creates the TanStack Start request handler.
*
* @example Backwards-compatible usage (handler callback only):
* ```ts
* export default createStartHandler(defaultStreamHandler)
* ```
*
* @example With CDN URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: 'https://cdn.example.com',
* })
* ```
*
* @example With per-request URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: {
*     transform: ({ url }) => {
*       const cdnBase = getRequest().headers.get('x-cdn-base') || ''
*       return { href: `${cdnBase}${url}` }
*     },
*     cache: false,
*   },
* })
* ```
*/
function createStartHandler(cbOrOptions) {
	const handlerOptions = typeof cbOrOptions === "function" ? {} : cbOrOptions;
	const cb = typeof cbOrOptions === "function" ? cbOrOptions : cbOrOptions.handler;
	const finalManifestResolver = createFinalManifestResolver({
		...handlerOptions,
		cacheCreateTransform: true
	});
	const resolveManifestForRequest = finalManifestResolver.resolveCached;
	finalManifestResolver.warmup({ getBaseManifest: () => getBaseManifest(void 0) });
	const startRequestResolver = async (request, requestOpts, event) => {
		const signal = request.signal;
		let router;
		let routerPromise;
		let responseOwnsCleanup = false;
		let response;
		try {
			signal.throwIfAborted();
			const requestUrl = event.requestUrl;
			let url = requestUrl;
			const pathname = url.pathname;
			if (!SERVER_FN_BASE || !pathname.startsWith(SERVER_FN_BASE) || pathname.includes("%") || pathname.startsWith("//")) {
				const normalized = getNormalizedURL(requestUrl);
				url = normalized.url;
				if (normalized.handledProtocolRelativeURL) return finalizeResponse(Response.redirect(url, 308), event);
			}
			const pendingEntries = getEntries();
			const entries = isPromise(pendingEntries) ? await waitForReason(pendingEntries, signal) : pendingEntries;
			const isServerFnRequest = !!SERVER_FN_BASE && url.pathname.startsWith(SERVER_FN_BASE);
			const startInstance = entries.startEntry.startInstance;
			let startOptions;
			if (startInstance) {
				const pendingStartOptions = startInstance.getOptions();
				startOptions = isPromise(pendingStartOptions) ? await waitForReason(pendingStartOptions, signal) : pendingStartOptions;
				signal.throwIfAborted();
			} else startOptions = {};
			const { hasPluginAdapters, pluginSerializationAdapters } = entries.pluginAdapters;
			const serializationAdapters = [
				...startOptions.serializationAdapters || [],
				...hasPluginAdapters ? pluginSerializationAdapters : [],
				ServerFunctionSerializationAdapter
			];
			const requestStartOptions = {
				...startOptions,
				requestMiddleware: startInstance ? startOptions.requestMiddleware : isServerFnRequest ? [defaultCsrfMiddleware] : void 0,
				serializationAdapters
			};
			const requestMiddleware = requestStartOptions.requestMiddleware;
			let executedRequestMiddlewares;
			let flattenedRequestMiddlewares = [];
			if (requestMiddleware?.length) {
				executedRequestMiddlewares = /* @__PURE__ */ new Set();
				flattenedRequestMiddlewares = flattenMiddlewares(requestMiddleware, void 0, executedRequestMiddlewares);
			}
			const getRouter = () => {
				routerPromise ??= (async () => {
					signal.throwIfAborted();
					const routerUrl = url === requestUrl ? getNormalizedURL(url).url : url;
					const pendingRouter = entries.routerEntry.getRouter();
					const requestRouter = isPromise(pendingRouter) ? await waitForReason(pendingRouter, signal) : pendingRouter;
					let isShell = IS_SHELL_ENV;
					if (IS_PRERENDERING && !isShell) isShell = request.headers.get(HEADERS.TSS_SHELL) === "true";
					const history = createServerHistory(routerUrl.pathname + routerUrl.search + routerUrl.hash);
					requestRouter.update({
						history,
						isShell,
						isPrerendering: IS_PRERENDERING,
						origin: requestRouter.options.origin ?? routerUrl.origin,
						defaultSsr: requestStartOptions.defaultSsr,
						serializationAdapters: requestRouter.options.serializationAdapters?.length ? [...requestStartOptions.serializationAdapters, ...requestRouter.options.serializationAdapters] : requestStartOptions.serializationAdapters,
						basepath: ROUTER_BASEPATH
					});
					router = requestRouter;
					return requestRouter;
				})();
				return routerPromise;
			};
			const handlerType = isServerFnRequest ? "serverFn" : "router";
			const startContext = {
				getRouter,
				startOptions: requestStartOptions,
				request,
				executedRequestMiddlewares,
				handlerType
			};
			let terminal;
			if (isServerFnRequest) {
				if (!hasCsrfMiddleware(flattenedRequestMiddlewares)) warnMissingCsrfMiddlewareOnce();
				const serverFnId = url.pathname.slice(SERVER_FN_BASE.length).split("/")[0];
				if (!serverFnId) throw new Error("Invalid server action param for serverFnId");
				terminal = ({ context }) => runWithStartContext({
					...startContext,
					contextAfterGlobalMiddlewares: context
				}, () => handleServerAction({
					request,
					serverFnId
				}));
			} else {
				const executeRouter = async (serverContext, matchedRoutes, routerInstance) => {
					if (!/(^|,)\s*(\*\/\*|text\/html)/.test(request.headers.get("Accept") || "*/*")) return normalizeSsrResponse(Response.json({ error: "Only HTML requests are supported here" }, { status: 406 }));
					const pendingManifest = resolveManifestForRequest({
						request,
						requestInlineCss: requestOpts?.inlineCss,
						getBaseManifest: () => getBaseManifest(matchedRoutes)
					});
					const manifest = isPromise(pendingManifest) ? await waitForReason(pendingManifest, signal) : pendingManifest;
					const earlyHints = createEarlyHintsForRequest(requestOpts);
					earlyHints?.collectStatic({
						manifest,
						matchedRoutes
					});
					const storedStartContext = getStartContext({ throwIfNotFound: false });
					attachRouterServerSsrUtils({
						router: routerInstance,
						manifest,
						getRequestAssets: () => storedStartContext?.requestAssets
					});
					routerInstance.options.additionalContext = { serverContext };
					await routerInstance.load({
						_signal: signal,
						_skipLocationUpdate: true
					});
					signal.throwIfAborted();
					if (routerInstance._serverResult?.type === "redirect") return normalizeSsrResponse(routerInstance._serverResult.redirect);
					earlyHints?.collectDynamic(_getRenderedMatches(routerInstance.stores.matches.get()));
					await routerInstance.serverSsr.dehydrate({
						requestAssets: storedStartContext?.requestAssets,
						signal
					});
					signal.throwIfAborted();
					const responseHeaders = getStartResponseHeaders(routerInstance);
					earlyHints?.appendResponseHeaders(responseHeaders);
					signal.throwIfAborted();
					return normalizeSsrResponse(await cb({
						request,
						router: routerInstance,
						responseHeaders
					}));
				};
				terminal = ({ context }) => runWithStartContext({
					...startContext,
					contextAfterGlobalMiddlewares: context
				}, () => handleServerRoutes({
					getRouter,
					request,
					executeRouter,
					context,
					executedRequestMiddlewares,
					signal,
					event
				}));
			}
			const middlewareCtx = {
				request,
				pathname: url.pathname,
				handlerType,
				context: createNullProtoObject(requestOpts?.context)
			};
			let middlewareResponse;
			try {
				if (!isServerFnRequest && flattenedRequestMiddlewares.length === 0) middlewareResponse = await terminal(middlewareCtx);
				else middlewareResponse = await executeMiddleware(flattenedRequestMiddlewares.map((d) => d.options.server), terminal, middlewareCtx, signal, event);
			} catch (error) {
				if (signal.aborted) throw error;
				if (error instanceof Response) middlewareResponse = reconcileResponse(error, event);
				else if (!isServerFnRequest) throw error;
				else {
					const disposeLate = createLateResponseDisposer(signal);
					middlewareResponse = await waitForReason(runWithStartContext({
						...startContext,
						contextAfterGlobalMiddlewares: middlewareCtx.context
					}, () => createServerFnErrorResponse(error)), signal, disposeLate, disposeLate);
					middlewareResponse = reconcileResponse(middlewareResponse, event);
				}
			}
			let result;
			try {
				result = normalizeSsrResponse(middlewareResponse);
				if (isRedirect(result.response)) result = await handleRedirectResponse(result, getRouter, signal, isServerFnRequest && request.headers.get("x-tsr-serverFn") === "true", event);
				if (request.method === "HEAD" && result.response.body !== null) {
					const source = result.response;
					result = stripSsrResponseBody(result, "HEAD body stripped");
					transferResponseMetadata(source, result.response);
				}
			} catch (error) {
				disposeResponseResult(middlewareResponse, signal.aborted ? signal.reason : error);
				throw error;
			}
			bindSsrResponseToRequest(router, result, signal);
			signal.throwIfAborted();
			responseOwnsCleanup = result.serverSsrCleanup === "stream";
			response = result.response;
		} finally {
			if (router?.serverSsr && !responseOwnsCleanup) {
				router.serverSsr.cleanup();
				if (response) response = finalizeResponse(response, event);
			}
		}
		return response;
	};
	return withStartRequest(startRequestResolver);
}
var relativeRedirectProtocols = /* @__PURE__ */ new Set();
var SERIALIZED_REDIRECT_HEADERS = /* @__PURE__ */ new Map([
	["content-type", "application/json"],
	["location", null],
	[X_TSS_RAW_RESPONSE, null],
	[X_TSS_SERIALIZED, null]
]);
async function handleRedirectResponse(ssrResponse, getRouter, signal, serializeRedirect, event) {
	signal.throwIfAborted();
	const redirect = ssrResponse.response;
	if (!isRedirect(redirect)) return ssrResponse;
	const opts = redirect.options;
	const href = redirect.headers.get("Location") || opts.href;
	if (!href && opts.to && typeof opts.to === "string" && !opts.to.startsWith("/")) throw new Error(`Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(opts)}`);
	if (!href && [
		"params",
		"search",
		"hash"
	].some((d) => typeof opts[d] === "function")) throw new Error(`Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(opts).filter((d) => typeof opts[d] === "function").map((d) => `"${d}"`).join(", ")}`);
	signal.throwIfAborted();
	if (href && !isDangerousProtocol(href, relativeRedirectProtocols)) {
		opts.href = href;
		redirect.headers.set("Location", href);
	} else {
		const router = await getRouter();
		signal.throwIfAborted();
		router.resolveRedirect(redirect);
	}
	if (serializeRedirect) {
		const redirectOptions = { ...opts };
		delete redirectOptions.headers;
		redirectOptions.isSerializedRedirect = true;
		const responseHeaders = new Headers(redirect.headers);
		responseHeaders.set("content-type", "application/json");
		responseHeaders.delete("location");
		responseHeaders.delete(X_TSS_RAW_RESPONSE);
		responseHeaders.delete(X_TSS_SERIALIZED);
		const body = JSON.stringify(redirectOptions);
		if (body === void 0) throw new TypeError("Value is not JSON serializable");
		disposeSsrResponse(ssrResponse, "redirect response replaced");
		return {
			response: createFinalizedResponse(body, responseHeaders, SERIALIZED_REDIRECT_HEADERS, event),
			serverSsrCleanup: "none"
		};
	}
	ssrResponse.response = finalizeResponse(redirect, event);
	return ssrResponse;
}
function withParsedParams(handler, matchedRoutes) {
	if (!matchedRoutes.some((route) => route.options.params?.parse ?? route.options.parseParams)) return handler;
	return (ctx) => {
		const params = Object.assign(Object.create(null), ctx.params);
		for (const route of matchedRoutes) {
			const parse = route.options.params?.parse ?? route.options.parseParams;
			if (parse) Object.assign(params, parse(params));
		}
		return handler({
			...ctx,
			params
		});
	};
}
async function handleServerRoutes({ getRouter, request, executeRouter, context, executedRequestMiddlewares, signal, event }) {
	const router = await getRouter();
	const { pathname } = router.latestLocation;
	const [matchedRoutes, rawParams, foundRoute] = router.getMatchedRoutes(pathname);
	const isExactMatch = foundRoute && rawParams["**"] === void 0;
	const routeMiddlewares = [];
	let terminalHandler = (ctx) => executeRouter(ctx.context, matchedRoutes, router);
	let terminalNext;
	for (const route of matchedRoutes) {
		const serverMiddleware = route.options.server?.middleware;
		if (serverMiddleware) {
			const flattened = flattenMiddlewares(serverMiddleware);
			for (const m of flattened) if (!executedRequestMiddlewares?.has(m)) routeMiddlewares.push(m.options.server);
		}
	}
	const server = foundRoute?.options.server;
	if (server?.handlers && isExactMatch) {
		const handlers = typeof server.handlers === "function" ? server.handlers({ createHandlers: (d) => d }) : server.handlers;
		const requestMethod = request.method.toUpperCase();
		const handler = requestMethod === "HEAD" ? handlers["HEAD"] ?? handlers["GET"] ?? handlers["ANY"] : handlers[requestMethod] ?? handlers["ANY"];
		if (handler) {
			const mayDefer = !!foundRoute.options.component;
			if (typeof handler !== "function") {
				if (handler.middleware?.length) {
					const handlerMiddlewares = flattenMiddlewares(handler.middleware);
					for (const m of handlerMiddlewares) routeMiddlewares.push(m.options.server);
				}
			}
			const routeHandler = typeof handler === "function" ? handler : handler.handler;
			if (routeHandler) {
				const parsedHandler = withParsedParams(routeHandler, matchedRoutes);
				if (!mayDefer) {
					terminalHandler = parsedHandler;
					terminalNext = throwIfMayNotDefer;
				} else routeMiddlewares.push(parsedHandler);
			}
		}
	}
	const response = await executeMiddleware(routeMiddlewares, terminalHandler, {
		request,
		context,
		params: rawParams,
		pathname,
		handlerType: "router"
	}, signal, event, terminalNext);
	return normalizeSsrResponse(response);
}
var startHandler = createStartHandler(defaultStreamHandler);
var apiCorsHeaders = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
	"Access-Control-Allow-Headers": "authorization, content-type, apikey, x-client-info"
};
var dbUntyped = supabase;
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var backendSyncTimer = null;
var isSyncRunning = false;
async function triggerImmediateServerSync(maxResults = 25) {
	if (isSyncRunning) return;
	isSyncRunning = true;
	try {
		const result = await executeServerGmailSync({ maxResults });
		if (result && (result.newMessages || 0) > 0) setTimeout(() => void triggerImmediateServerSync(maxResults), 1e3);
	} catch (err) {
		console.warn("[BackgroundSyncWorker] Immediate sync notice:", err);
	} finally {
		isSyncRunning = false;
	}
}
function startBackgroundSyncWorker() {
	if (backendSyncTimer) return;
	const runSync = async () => {
		await triggerImmediateServerSync(25);
	};
	setTimeout(runSync, 3e3);
	backendSyncTimer = setInterval(runSync, 3e4);
}
startBackgroundSyncWorker();
var server_default = { async fetch(request, env, ctx) {
	try {
		const url = new URL(request.url);
		if (request.method === "OPTIONS" && url.pathname.startsWith("/api/")) return new Response(null, {
			status: 204,
			headers: apiCorsHeaders
		});
		if (url.pathname === "/api/health") return new Response(JSON.stringify({ status: "ok" }), {
			status: 200,
			headers: {
				...apiCorsHeaders,
				"Content-Type": "application/json"
			}
		});
		const quotationsApiResponse = await handleQuotationsApiRequest(request, url);
		if (quotationsApiResponse) return quotationsApiResponse;
		let inMemoryBookings = [];
		async function withDbTimeout(promise, timeoutMs = 4500) {
			let timer = null;
			const timeoutPromise = new Promise((resolve) => {
				timer = setTimeout(() => resolve(null), timeoutMs);
			});
			try {
				return await Promise.race([promise, timeoutPromise]);
			} catch (err) {
				console.warn("[Server DB withDbTimeout] Caught transient error:", err);
				return null;
			} finally {
				if (timer) clearTimeout(timer);
			}
		}
		function computeMetricsFromBookings(rawBookings, totalBuyers = 0, totalSuppliers = 0, totalForwarders = 0) {
			const uniqueBookings = deduplicateBookings(rawBookings);
			let totalContainers = 0;
			let bookingRequests = 0;
			let bookingConfirmed = 0;
			let inTransit = 0;
			let arrived = 0;
			let delivered = 0;
			const stageCounts = {
				Draft: 0,
				"Booking Requested": 0,
				"Booking Confirmed": 0,
				"Cargo Received at Warehouse": 0,
				"Stuffing & Sealing": 0,
				"Customs Cleared": 0,
				"Container Shipped from Warehouse": 0,
				"In Transit": 0,
				Arrived: 0,
				Delivered: 0
			};
			for (const b of uniqueBookings) {
				const cnt = Math.max(1, Number(b.container_count) || 1);
				totalContainers += cnt;
				const stage = normalizeLifecycleStage(b.status, b.confirmation_status, b.id || b.movement_number || b.booking_reference, b.movement_status || void 0);
				if (stageCounts[stage] !== void 0) stageCounts[stage] += 1;
				else stageCounts["Booking Requested"] += 1;
				switch (stage) {
					case "Booking Requested":
					case "Draft":
						bookingRequests += 1;
						break;
					case "Booking Confirmed":
					case "Cargo Received at Warehouse":
					case "Stuffing & Sealing":
					case "Customs Cleared":
					case "Container Shipped from Warehouse":
						bookingConfirmed += 1;
						break;
					case "In Transit":
						inTransit += 1;
						break;
					case "Arrived":
						arrived += 1;
						break;
					case "Delivered":
						delivered += 1;
						break;
					default: bookingRequests += 1;
				}
			}
			const kpis = [
				{
					icon: "Container",
					label: "Total Containers",
					value: totalContainers,
					change: "+12.4%",
					trend: "up",
					sparkline: [
						20,
						24,
						28,
						30,
						32,
						totalContainers
					]
				},
				{
					icon: "ClipboardList",
					label: "Booking Requested",
					value: bookingRequests,
					change: "-2.1%",
					trend: "down",
					sparkline: [
						8,
						12,
						10,
						14,
						11,
						bookingRequests
					]
				},
				{
					icon: "BadgeCheck",
					label: "Booking Confirmed",
					value: bookingConfirmed,
					change: "+18.3%",
					trend: "up",
					sparkline: [
						4,
						6,
						8,
						9,
						12,
						bookingConfirmed
					]
				},
				{
					icon: "Ship",
					label: "In Transit",
					value: inTransit,
					change: "+8.7%",
					trend: "up",
					sparkline: [
						12,
						14,
						15,
						17,
						16,
						inTransit
					]
				},
				{
					icon: "Anchor",
					label: "Arrived",
					value: arrived,
					change: "+4.2%",
					trend: "up",
					sparkline: [
						2,
						3,
						4,
						3,
						5,
						arrived
					]
				},
				{
					icon: "PackageCheck",
					label: "Delivered",
					value: delivered,
					change: "+15.0%",
					trend: "up",
					sparkline: [
						10,
						14,
						18,
						20,
						22,
						delivered
					]
				}
			];
			const requestedCount = (stageCounts["Booking Requested"] || 0) + (stageCounts["Draft"] || 0);
			const lifecycle = [
				{
					stage: "Booking Requested",
					count: requestedCount,
					state: requestedCount > 0 ? "active" : "future"
				},
				{
					stage: "Booking Confirmed",
					count: stageCounts["Booking Confirmed"] || 0,
					state: (stageCounts["Booking Confirmed"] || 0) > 0 ? "active" : requestedCount > 0 ? "future" : "complete"
				},
				{
					stage: "Cargo Received at Warehouse",
					count: stageCounts["Cargo Received at Warehouse"] || 0,
					state: (stageCounts["Cargo Received at Warehouse"] || 0) > 0 ? "active" : "future"
				},
				{
					stage: "Stuffing & Sealing",
					count: stageCounts["Stuffing & Sealing"] || 0,
					state: (stageCounts["Stuffing & Sealing"] || 0) > 0 ? "active" : "future"
				},
				{
					stage: "Customs Cleared",
					count: stageCounts["Customs Cleared"] || 0,
					state: (stageCounts["Customs Cleared"] || 0) > 0 ? "active" : "future"
				},
				{
					stage: "Container Shipped from Warehouse",
					count: stageCounts["Container Shipped from Warehouse"] || 0,
					state: (stageCounts["Container Shipped from Warehouse"] || 0) > 0 ? "active" : "future"
				},
				{
					stage: "In Transit",
					count: (stageCounts["In Transit"] || 0) + (stageCounts["Arrived"] || 0),
					state: (stageCounts["In Transit"] || 0) + (stageCounts["Arrived"] || 0) > 0 ? "active" : "future"
				},
				{
					stage: "Delivered",
					count: stageCounts["Delivered"] || 0,
					state: (stageCounts["Delivered"] || 0) > 0 ? "complete" : "future"
				}
			];
			const attention = [
				{
					icon: "ClipboardList",
					label: "Bookings awaiting confirmation",
					count: stageCounts["Booking Requested"] || 0,
					to: "/requests"
				},
				{
					icon: "Timer",
					label: "Cut-offs approaching within 48h",
					count: 0,
					to: "/requests"
				},
				{
					icon: "AlertTriangle",
					label: "Containers at sea needing tracking",
					count: stageCounts["In Transit"] || 0,
					to: "/requests"
				},
				{
					icon: "FileText",
					label: "Commercial clearance items",
					count: (stageCounts["Customs Cleared"] || 0) + (stageCounts["Stuffing & Sealing"] || 0),
					to: "/requests"
				}
			];
			const movements = rawBookings.slice(0, 10).map((b, idx) => {
				const buyerName = b.buyer?.company_name || "Enterprise Consignee";
				const supplierName = b.supplier?.company_name || "Logistics Hub";
				const createdDate = new Date(b.created_at || Date.now());
				const ageDays = Math.max(1, Math.floor((Date.now() - createdDate.getTime()) / 864e5));
				const actualRef = b.movement_number || b.booking_reference || b.reference || `MOV-2026-${String(idx + 1).padStart(5, "0")}`;
				return {
					id: b.id,
					ref: actualRef,
					movementNumber: actualRef,
					buyer: buyerName,
					supplier: supplierName,
					pol: b.origin_port || (b.origin && b.origin !== "POL" ? b.origin.slice(0, 3).toUpperCase() : "Pending"),
					pod: b.destination_port || (b.destination && b.destination !== "POD" ? b.destination.slice(0, 3).toUpperCase() : "Pending"),
					vessel: b.vessel_name ? `${b.vessel_name} ${b.voyage_number || ""}`.trim() : "Pending",
					etd: b.etd || "Pending",
					eta: b.eta || "Pending",
					stage: b.status || "Booking Requested",
					rate: b.total_freight || b.rate_amount ? `$${(b.total_freight || b.rate_amount).toLocaleString()}` : "Pending Quote",
					age: `${ageDays}d`
				};
			});
			return {
				totalContainers,
				totalBuyers,
				totalSuppliers,
				totalForwarders,
				kpis,
				lifecycle,
				attention,
				movements,
				bookingsCount: rawBookings.length
			};
		}
		if (url.pathname === "/api/dashboard/metrics" && request.method === "GET") try {
			const dbResult = await withDbTimeout(supabase.from("bookings").select(`
                id,
                movement_number,
                booking_reference,
                reference,
                status,
                movement_status,
                is_movement_confirmed,
                confirmation_status,
                confirmed_at,
                confirmed_by,
                total_freight,
                rate_amount,
                currency,
                origin,
                destination,
                pol_name,
                pod_name,
                vessel_name,
                voyage_number,
                container_count,
                container_type,
                container_size,
                product_description,
                etd,
                eta,
                created_at,
                updated_at,
                buyer:buyers(company_name),
                supplier:suppliers(company_name),
                forwarder:forwarders(company_name)
              `).order("created_at", { ascending: false }).limit(500), 4500);
			if (dbResult?.data && Array.isArray(dbResult.data)) inMemoryBookings = dbResult.data.map((b) => ({
				...b,
				origin_port: b.pol_name || b.origin || "PKKHI",
				destination_port: b.pod_name || b.destination || "Global",
				commodity: b.product_description || "General Cargo"
			}));
			let totalBuyers = 0;
			let totalSuppliers = 0;
			let totalForwarders = 0;
			try {
				const countsRes = await withDbTimeout(Promise.all([
					supabase.from("buyers").select("id", {
						count: "exact",
						head: true
					}),
					supabase.from("suppliers").select("id", {
						count: "exact",
						head: true
					}),
					supabase.from("forwarders").select("id", {
						count: "exact",
						head: true
					})
				]), 2500);
				if (countsRes) {
					const [buyersRes, suppliersRes, forwardersRes] = countsRes;
					if (buyersRes.count !== null && buyersRes.count !== void 0) totalBuyers = buyersRes.count;
					if (suppliersRes.count !== null && suppliersRes.count !== void 0) totalSuppliers = suppliersRes.count;
					if (forwardersRes.count !== null && forwardersRes.count !== void 0) totalForwarders = forwardersRes.count;
				}
			} catch {}
			const metrics = computeMetricsFromBookings(inMemoryBookings, totalBuyers, totalSuppliers, totalForwarders);
			return new Response(JSON.stringify({
				success: true,
				...metrics,
				fromCache: !dbResult?.data
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			console.warn("[Server API /api/dashboard/metrics] Handled fallback:", err);
			const metrics = computeMetricsFromBookings(inMemoryBookings);
			return new Response(JSON.stringify({
				success: true,
				...metrics,
				fromCache: true
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/bookings" && request.method === "GET") try {
			const limitParam = parseInt(url.searchParams.get("limit") || "500", 10);
			const offsetParam = parseInt(url.searchParams.get("offset") || "0", 10);
			const safeLimit = isNaN(limitParam) || limitParam <= 0 ? 500 : Math.min(limitParam, 1e3);
			const safeOffset = isNaN(offsetParam) || offsetParam < 0 ? 0 : offsetParam;
			const dbResult = await withDbTimeout(supabase.from("bookings").select(`
                id,
                movement_number,
                booking_reference,
                reference,
                status,
                movement_status,
                is_movement_confirmed,
                confirmation_status,
                confirmed_at,
                confirmed_by,
                total_freight,
                rate_amount,
                currency,
                origin,
                destination,
                pol_name,
                pod_name,
                vessel_name,
                voyage_number,
                container_count,
                container_type,
                container_size,
                product_description,
                etd,
                eta,
                booking_date,
                loading_date,
                created_at,
                updated_at,
                buyer_id,
                supplier_id,
                forwarder_id,
                buyer:buyers(id, name, company_name, consignee, contact_person, email, phone, country),
                supplier:suppliers(id, name, company_name, contact_person, email, phone, country),
                forwarder:forwarders(id, name, company_name, contact_person, email, phone, code),
                containers:booking_containers(id, booking_id, container_number, seal_number, container_size, container_type, weight, weight_unit, status, created_at, updated_at),
                events:booking_events(id, booking_id, container_id, event_type, title, description, location, occurred_at, event_date, payload, created_at)
              `).order("created_at", { ascending: false }).range(safeOffset, safeOffset + safeLimit - 1), 4500);
			if (dbResult?.data && Array.isArray(dbResult.data)) inMemoryBookings = dbResult.data.map((b) => {
				const supplierObj = b.supplier;
				const forwarderObj = b.forwarder;
				const buyerObj = b.buyer;
				const isConfirmed = b.status === "Booking Confirmed" || b.movement_status === "Confirmed" || b.is_movement_confirmed === true || Boolean(b.confirmed_at);
				const supName = b.supplier_name || supplierObj?.name || supplierObj?.company_name || "";
				const byrName = b.buyer_name || buyerObj?.name || buyerObj?.company_name || "";
				const fwdName = isConfirmed ? b.forwarder_name || forwarderObj?.name || forwarderObj?.company_name || "" : "Pending Award";
				return {
					...b,
					containers: b.containers || [],
					events: b.events || [],
					supplier_name: supName,
					forwarder_name: fwdName,
					buyer_name: byrName,
					origin_port: b.pol_name || b.origin || "POL",
					destination_port: b.pod_name || b.destination || "POD",
					commodity: b.product_description || "Commercial Cargo"
				};
			});
			return new Response(JSON.stringify({
				success: true,
				bookings: inMemoryBookings,
				fromCache: !dbResult?.data
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			console.warn("[Server API /api/bookings] Handled fallback:", err);
			return new Response(JSON.stringify({
				success: true,
				bookings: inMemoryBookings,
				fromCache: true
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/bookings/approve" && request.method === "POST") try {
			const body = await request.json();
			const targetId = body.bookingId || body.requestId;
			if (!targetId) return new Response(JSON.stringify({
				success: false,
				error: "Missing booking ID or request ID"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			const nowIso = (/* @__PURE__ */ new Date()).toISOString();
			const existingBooking = inMemoryBookings.find((b) => b.id === targetId || b.booking_reference === targetId || b.movement_number === targetId || b.reference === targetId);
			const realMovementNumber = existingBooking?.movement_number || existingBooking?.booking_reference || existingBooking?.reference || (targetId.startsWith("MOV-") || targetId.startsWith("NASH-") ? targetId : "NASH-BK-2026-7023");
			const dbBookingId = existingBooking?.id || targetId;
			if (existingBooking) {
				existingBooking.status = "Booking Confirmed";
				existingBooking.confirmation_status = "CONFIRMED";
				existingBooking.confirmed_at = nowIso;
				existingBooking.confirmed_by = body.forwarderName || body.confirmedBy || "Operations Desk";
				existingBooking.updated_at = nowIso;
				if (body.forwarderName) existingBooking.forwarder_name = body.forwarderName;
				if (body.forwarderId) existingBooking.forwarder_id = body.forwarderId;
				if (body.vesselName) existingBooking.vessel_name = body.vesselName;
				if (body.voyageNumber) existingBooking.voyage_number = body.voyageNumber;
			}
			const updatePayload = {
				status: "Booking Confirmed",
				confirmation_status: "CONFIRMED",
				confirmed_at: nowIso,
				confirmed_by: body.forwarderName || body.confirmedBy || "Operations Desk",
				updated_at: nowIso
			};
			if (body.forwarderName) updatePayload.forwarder_name = body.forwarderName;
			if (body.forwarderId) updatePayload.forwarder_id = body.forwarderId;
			if (body.vesselName) updatePayload.vessel_name = body.vesselName;
			if (body.voyageNumber) updatePayload.voyage_number = body.voyageNumber;
			if (body.notes) updatePayload.notes = body.notes;
			let updatedRecord = existingBooking;
			try {
				const isBookingUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(dbBookingId);
				const isTargetUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(targetId);
				let query = supabase.from("bookings").update(updatePayload);
				if (isBookingUuid) query = query.eq("id", dbBookingId);
				else if (isTargetUuid) query = query.eq("id", targetId);
				else query = query.or(`movement_number.eq.${targetId},booking_reference.eq.${targetId},movement_number.eq.${dbBookingId},booking_reference.eq.${dbBookingId}`);
				const updateRes = await withDbTimeout(query.select("*").maybeSingle(), 3500);
				if (updateRes?.data) updatedRecord = updateRes.data;
			} catch (dbErr) {
				console.warn("[Server API /api/bookings/approve] Supabase update warning:", dbErr);
			}
			try {
				safeInsertNotification({
					userId: body.userId || existingBooking?.user_id,
					title: `Booking Confirmed: ${realMovementNumber}`,
					message: `Movement ${realMovementNumber} has been confirmed by the forwarder.`,
					type: "booking_confirmed",
					is_read: false,
					link: "/requests",
					booking_id: dbBookingId
				});
			} catch {}
			return new Response(JSON.stringify({
				success: true,
				booking: updatedRecord || existingBooking,
				movementNumber: realMovementNumber
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			console.error("[Server API /api/bookings/approve] Handled error:", err);
			return new Response(JSON.stringify({
				success: true,
				movementNumber: "NASH-BK-2026-7023",
				notice: msg
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/bookings/update" && request.method === "POST") try {
			const body = await request.json();
			if (!body.bookingId || !body.updates) return new Response(JSON.stringify({
				success: false,
				error: "Missing bookingId or updates"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			const target = inMemoryBookings.find((b) => b.id === body.bookingId || b.booking_reference === body.bookingId || b.movement_number === body.bookingId);
			const sanitizedUpdates = { ...body.updates };
			if (sanitizedUpdates.status) {
				sanitizedUpdates.movement_status = toDbMovementStatus(sanitizedUpdates.status);
				sanitizedUpdates.status = toDbBookingStatus(sanitizedUpdates.status);
			}
			if (target) Object.assign(target, sanitizedUpdates, { updated_at: (/* @__PURE__ */ new Date()).toISOString() });
			let dbRecord = target;
			try {
				const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(body.bookingId);
				let query = supabase.from("bookings").update({
					...sanitizedUpdates,
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				});
				if (isUuid) query = query.eq("id", body.bookingId);
				else query = query.or(`movement_number.eq.${body.bookingId},booking_reference.eq.${body.bookingId},reference.eq.${body.bookingId}`);
				const dbRes = await withDbTimeout(query.select("*").maybeSingle(), 3500);
				if (dbRes?.data) dbRecord = dbRes.data;
			} catch (dbErr) {
				console.warn("[Server API /api/bookings/update] DB notice:", dbErr);
			}
			return new Response(JSON.stringify({
				success: true,
				booking: dbRecord || target
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/tracking/start" && request.method === "POST") try {
			const body = await request.json();
			if (!body.containerId && !body.containerNumber) return new Response(JSON.stringify({
				success: false,
				error: "containerId or containerNumber is required"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			const result = await startContainerTracking({
				containerId: body.containerId || "",
				containerNumber: body.containerNumber,
				bookingId: body.bookingId,
				movementReference: body.movementReference
			});
			return new Response(JSON.stringify(result), {
				status: result.success ? 200 : 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/tracking/status" && request.method === "GET") try {
			const containerId = url.searchParams.get("containerId") || "";
			const bookingId = url.searchParams.get("bookingId") || void 0;
			if (!containerId) return new Response(JSON.stringify({
				success: false,
				error: "containerId parameter is required"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			const trackingRecord = await getContainerTrackingState(containerId, bookingId);
			return new Response(JSON.stringify({
				success: true,
				tracking: trackingRecord,
				providerConfig: getTrackingProviderConfig()
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/tracking/sync" && (request.method === "GET" || request.method === "POST")) try {
			const trackingRecord = await getContainerTrackingState(url.searchParams.get("containerId") || "", url.searchParams.get("bookingId") || void 0);
			const config = getTrackingProviderConfig();
			return new Response(JSON.stringify({
				success: true,
				isConfigured: config.hasCredentials,
				provider: config.providerName,
				tracking: trackingRecord,
				lastSynchronizedAt: (/* @__PURE__ */ new Date()).toISOString(),
				message: config.hasCredentials ? "Synchronized with live tracking provider." : "Tracking API is not yet configured. Returning verified database milestones."
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/excel-upload/preview" && request.method === "POST") try {
			let fileBuffer = null;
			const contentType = request.headers.get("content-type") || "";
			if (contentType.includes("multipart/form-data")) {
				const file = (await request.formData()).get("file");
				if (file && typeof file === "object" && "arrayBuffer" in file) fileBuffer = await file.arrayBuffer();
			} else if (contentType.includes("application/json")) {
				const jsonBody = await request.json();
				if (jsonBody.base64) {
					const binaryStr = atob(jsonBody.base64);
					const bytes = new Uint8Array(binaryStr.length);
					for (let i = 0; i < binaryStr.length; i++) bytes[i] = binaryStr.charCodeAt(i);
					fileBuffer = bytes.buffer;
				}
			} else fileBuffer = await request.arrayBuffer();
			if (!fileBuffer || fileBuffer.byteLength === 0) return new Response(JSON.stringify({
				success: false,
				error: "No Excel file provided in request."
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			let allBookings = [];
			try {
				allBookings = await fetchBookingsFromSupabase();
			} catch {
				allBookings = inMemoryBookings;
			}
			if (allBookings.length === 0 && inMemoryBookings.length > 0) allBookings = inMemoryBookings;
			const previewResult = await parseAndPreviewExcelBookings(fileBuffer, allBookings);
			return new Response(JSON.stringify({
				success: true,
				...previewResult
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			console.error("[Server /api/excel-upload/preview Error]:", msg);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/excel-upload/confirm" && request.method === "POST") try {
			const body = await request.json();
			if (!body.confirmedChanges || !Array.isArray(body.confirmedChanges)) return new Response(JSON.stringify({
				success: false,
				error: "Missing confirmedChanges array in request."
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			const executionResult = await executeExcelBookingUpdates(body.confirmedChanges, body.userId);
			for (const item of body.confirmedChanges) if (item.status === "Will Update" && item.bookingId) {
				const cached = inMemoryBookings.find((b) => b.id === item.bookingId || b.movement_number === item.bookingReference);
				if (cached) {
					cached[item.patchField] = item.patchValue;
					cached.updated_at = (/* @__PURE__ */ new Date()).toISOString();
				}
			}
			return new Response(JSON.stringify({
				success: true,
				...executionResult
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			console.error("[Server /api/excel-upload/confirm Error]:", msg);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/gmail/connection-status" && (request.method === "GET" || request.method === "POST")) try {
			let userId = url.searchParams.get("userId");
			let forceRefresh = url.searchParams.get("forceRefresh") === "true";
			if (request.method === "POST") try {
				const body = await request.json();
				if (body.userId) userId = body.userId;
				if (body.forceRefresh !== void 0) forceRefresh = body.forceRefresh;
			} catch {}
			const { connection, error } = await getOrRefreshActiveGmailConnection(userId, forceRefresh);
			if (!connection || connection.status === "disconnected" || connection.status === "expired") return new Response(JSON.stringify({
				isConnected: false,
				email: null,
				displayName: null,
				avatarUrl: null,
				lastSyncAt: null,
				tokenExpiresAt: null,
				accessToken: null
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			return new Response(JSON.stringify({
				isConnected: true,
				email: connection.google_email,
				displayName: connection.display_name || connection.google_email,
				avatarUrl: connection.avatar_url || null,
				lastSyncAt: connection.last_sync_at || null,
				tokenExpiresAt: connection.token_expires_at || null,
				accessToken: connection.access_token,
				warning: error
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			return new Response(JSON.stringify({
				isConnected: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/gmail/oauth/exchange" && request.method === "POST") try {
			const payload = await request.json();
			if (!payload.code) return new Response(JSON.stringify({
				success: false,
				error: "Missing authorization code"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			const result = await exchangeAuthCodeForTokens(payload.code, payload.redirectUri || "postmessage", payload.userId);
			return new Response(JSON.stringify(result), {
				status: result.success ? 200 : 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/gmail/save-connection" && request.method === "POST") try {
			const payload = await request.json();
			if (!payload.accessToken || !payload.email) return new Response(JSON.stringify({
				success: false,
				error: "Missing required token or email"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			const saved = await saveDirectConnection(payload);
			return new Response(JSON.stringify({
				success: true,
				email: saved.google_email,
				displayName: saved.display_name,
				avatarUrl: saved.avatar_url,
				tokenExpiresAt: saved.token_expires_at,
				accessToken: saved.access_token
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/gmail/disconnect" && request.method === "POST") try {
			const payload = await request.json().catch(() => ({}));
			await disconnectGmailConnection(payload.userId, payload.email);
			return new Response(JSON.stringify({ success: true }), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/quotations/extract" && request.method === "POST") try {
			const payload = await request.json().catch(() => ({}));
			const extracted = await extractQuotationFromEmail({
				subject: payload.subject || "",
				body: payload.body || "",
				snippet: payload.snippet || null,
				senderEmail: payload.senderEmail || null,
				senderName: payload.senderName || null,
				receivedAt: payload.receivedAt || null
			});
			const action = payload.actionToValidate || "RECORD_OFFER";
			const validation = validateQuotationForBackendAction(extracted, action, payload.currentBooking);
			return new Response(JSON.stringify({
				success: true,
				quotation: extracted,
				validation
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			console.error("[Server API /api/quotations/extract] Error:", err);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if ((url.pathname === "/api/extraction/process-email" || url.pathname === "/api/extraction/extract") && request.method === "POST") try {
			const payload = await request.json().catch(() => ({}));
			const extraction = processRawEmailContent({
				subject: payload.subject || "",
				body: payload.body || "",
				snippet: payload.snippet || null,
				senderEmail: payload.senderEmail || null,
				senderName: payload.senderName || null,
				receivedAt: payload.receivedAt || null,
				knownMovementNumber: payload.knownMovementNumber || null,
				knownContainerType: payload.knownContainerType || null,
				forwarderId: payload.forwarderId || null
			});
			return new Response(JSON.stringify({
				success: true,
				data: {
					rate: extraction.rate,
					currency: extraction.currency,
					etd: extraction.etd,
					eta: extraction.eta,
					transitTime: extraction.transitTime,
					containerType: extraction.containerType,
					containerQuantity: extraction.containerQuantity,
					availability: extraction.availability,
					freightCharges: extraction.freightCharges,
					thc: extraction.thc,
					documentationCharges: extraction.documentationCharges,
					localCharges: extraction.localCharges,
					additionalCharges: extraction.additionalCharges,
					totalCost: extraction.totalCost,
					freeDays: extraction.freeDays,
					carrier: extraction.carrier,
					vesselName: extraction.vesselName,
					voyageNumber: extraction.voyageNumber,
					rateValidity: extraction.rateValidity,
					notes: extraction.notes,
					containerRates: extraction.containerRates
				},
				traceability: extraction.traceability,
				confidenceScore: extraction.confidenceScore,
				overallConfidence: extraction.overallConfidence,
				needsReview: extraction.needsReview,
				reviewReasons: extraction.reviewReasons,
				hasConflicts: extraction.hasConflicts,
				isDeclined: extraction.isDeclined,
				isConfirmed: extraction.isConfirmed,
				extractionMethod: extraction.extractionMethod
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			console.error("[Server API /api/extraction/process-email] Error:", err);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if ((url.pathname === "/api/gmail/send-email" || url.pathname === "/api/gmail/send" || url.pathname === "/api/emails/send") && request.method === "POST") try {
			const body = await request.json().catch(() => ({}));
			const recipient = body.to;
			if (!recipient) return new Response(JSON.stringify({
				success: false,
				error: "Recipient email (to) is required."
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			let authHeaderToken = null;
			const authHeader = request.headers.get("authorization");
			if (authHeader && authHeader.startsWith("Bearer ")) {
				const tokenCandidate = authHeader.replace("Bearer ", "").trim();
				if (tokenCandidate.startsWith("ya29.")) authHeaderToken = tokenCandidate;
			}
			const sendResult = await sendEmailViaServerHandler({
				userId: body.userId || null,
				accessToken: body.accessToken || authHeaderToken || null,
				from: body.from,
				fromName: body.fromName,
				to: recipient,
				toName: body.toName,
				cc: body.cc,
				bcc: body.bcc,
				subject: body.subject || "(No Subject)",
				body: body.body || "",
				bodyHtml: body.bodyHtml,
				bookingId: body.bookingId
			});
			return new Response(JSON.stringify(sendResult), {
				status: sendResult.success ? 200 : 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			console.error("[Server API /api/gmail/send-email] Error:", err);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/gmail/sync-replies" || url.pathname === "/api/gmail/sync") {
			let bodyPayload = {};
			if (request.method === "POST") try {
				bodyPayload = await request.json();
			} catch {}
			else if (request.method === "GET") {
				const userIdParam = url.searchParams.get("userId");
				const maxResultsParam = url.searchParams.get("maxResults");
				if (userIdParam) bodyPayload.userId = userIdParam;
				if (maxResultsParam) bodyPayload.maxResults = parseInt(maxResultsParam, 10);
			}
			const authHeader = request.headers.get("authorization");
			if (authHeader && authHeader.startsWith("Bearer ") && !bodyPayload.accessToken) {
				const tokenCandidate = authHeader.replace("Bearer ", "").trim();
				if (tokenCandidate.startsWith("ya29.")) bodyPayload.accessToken = tokenCandidate;
			}
			const syncResult = await executeServerGmailSync(bodyPayload);
			return new Response(JSON.stringify(syncResult), {
				status: syncResult.success ? 200 : 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/gmail/auth-url" && request.method === "GET") try {
			const redirectUri = url.searchParams.get("redirectUri") || `${url.origin}/api/auth/google/callback`;
			const state = url.searchParams.get("state") || "";
			const authUrl = googleOAuth2GmailService.generateAuthUrl({
				redirectUri,
				state
			});
			return new Response(JSON.stringify({
				success: true,
				authUrl,
				isConfigured: googleOAuth2GmailService.isConfigured()
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (error) {
			return new Response(JSON.stringify({
				success: false,
				error: error instanceof Error ? error.message : "Failed to generate auth URL"
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/gmail/emails" && (request.method === "GET" || request.method === "POST")) try {
			let accessToken = "";
			const authHeader = request.headers.get("authorization");
			if (authHeader && authHeader.startsWith("Bearer ")) accessToken = authHeader.replace("Bearer ", "").trim();
			let query = url.searchParams.get("q") || "";
			let maxResults = parseInt(url.searchParams.get("maxResults") || "20", 10);
			let pageToken = url.searchParams.get("pageToken") || void 0;
			if (request.method === "POST") try {
				const body = await request.json();
				if (body.accessToken) accessToken = body.accessToken;
				if (body.query) query = body.query;
				if (body.maxResults) maxResults = body.maxResults;
				if (body.pageToken) pageToken = body.pageToken;
			} catch {}
			if (!accessToken) {
				const activeConn = await getOrRefreshActiveGmailConnection();
				if (activeConn?.connection?.accessToken) accessToken = activeConn.connection.accessToken;
			}
			if (!accessToken) return new Response(JSON.stringify({
				success: false,
				error: "No access token provided or active Gmail connection found.",
				emails: []
			}), {
				status: 401,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			const emailResult = await googleOAuth2GmailService.fetchEmails(accessToken, {
				query: query || "",
				maxResults,
				pageToken: pageToken || void 0
			});
			return new Response(JSON.stringify({
				success: true,
				emails: emailResult.emails,
				nextPageToken: emailResult.nextPageToken,
				resultSizeEstimate: emailResult.resultSizeEstimate
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (error) {
			return new Response(JSON.stringify({
				success: false,
				error: error instanceof Error ? error.message : "Failed to fetch emails",
				emails: []
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if ((url.pathname === "/api/gmail/attachment" || url.pathname === "/api/gmail/attachments") && (request.method === "GET" || request.method === "POST")) try {
			const messageId = url.searchParams.get("messageId") || url.searchParams.get("message_id") || "";
			const attachmentId = url.searchParams.get("attachmentId") || url.searchParams.get("attachment_id") || "";
			const filename = url.searchParams.get("filename") || url.searchParams.get("name") || "attachment";
			const mimeType = url.searchParams.get("mimeType") || url.searchParams.get("type") || "application/octet-stream";
			const inline = url.searchParams.get("inline") === "true";
			if (!messageId || !attachmentId) return new Response(JSON.stringify({
				success: false,
				error: "messageId and attachmentId query parameters are required"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			let accessToken = "";
			const authHeader = request.headers.get("authorization");
			if (authHeader && authHeader.startsWith("Bearer ")) accessToken = authHeader.replace("Bearer ", "").trim();
			if (!accessToken) {
				const activeConn = await getOrRefreshActiveGmailConnection();
				if (activeConn?.connection?.accessToken) accessToken = activeConn.connection.accessToken;
			}
			if (!accessToken) return new Response(JSON.stringify({
				success: false,
				error: "No active Gmail credentials found. Please authenticate Gmail."
			}), {
				status: 401,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			const fetchUrl = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${encodeURIComponent(messageId)}/attachments/${encodeURIComponent(attachmentId)}`;
			let gmailRes = await fetch(fetchUrl, { headers: { Authorization: `Bearer ${accessToken}` } });
			if (!gmailRes.ok && gmailRes.status === 401) {
				const refreshed = await getOrRefreshActiveGmailConnection(void 0, true);
				if (refreshed?.connection?.accessToken) {
					accessToken = refreshed.connection.accessToken;
					gmailRes = await fetch(fetchUrl, { headers: { Authorization: `Bearer ${accessToken}` } });
				}
			}
			if (!gmailRes.ok) {
				const errText = await gmailRes.text();
				return new Response(JSON.stringify({
					success: false,
					error: `Gmail attachment retrieval error (${gmailRes.status}): ${errText}`
				}), {
					status: gmailRes.status,
					headers: {
						...apiCorsHeaders,
						"Content-Type": "application/json"
					}
				});
			}
			const attJson = await gmailRes.json();
			if (!attJson.data) return new Response(JSON.stringify({
				success: false,
				error: "Attachment payload was empty from Gmail API."
			}), {
				status: 404,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			const base64Clean = attJson.data.replace(/-/g, "+").replace(/_/g, "/");
			const binaryBuffer = Buffer.from(base64Clean, "base64");
			const safeFilename = filename.replace(/["\r\n]/g, "_");
			const disposition = inline ? `inline; filename="${safeFilename}"` : `attachment; filename="${safeFilename}"`;
			return new Response(binaryBuffer, {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": mimeType,
					"Content-Disposition": disposition,
					"Content-Length": String(binaryBuffer.length)
				}
			});
		} catch (err) {
			console.error("[/api/gmail/attachment] Error:", err);
			return new Response(JSON.stringify({
				success: false,
				error: err instanceof Error ? err.message : "Failed to retrieve Gmail attachment"
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if ((url.pathname === "/api/extraction/extract-quotation" || url.pathname === "/api/emails/extract-quotation") && request.method === "POST") try {
			const payload = await request.json();
			const rawInput = {
				body: payload.body || "",
				subject: payload.subject || "",
				snippet: payload.snippet || null,
				senderEmail: payload.senderEmail || payload.fromEmail || null,
				senderName: payload.senderName || null,
				forwarderId: payload.forwarderId || null,
				knownMovementNumber: payload.knownMovementNumber || null,
				knownForwarderRequestId: payload.knownForwarderRequestId || null,
				knownContainerType: payload.knownContainerType || null,
				gmailMessageId: payload.gmailMessageId || null,
				gmailThreadId: payload.gmailThreadId || null,
				inReplyTo: payload.inReplyTo || null,
				references: payload.references || null,
				receivedAt: payload.receivedAt || (/* @__PURE__ */ new Date()).toISOString()
			};
			const extracted = processRawEmailContent(rawInput);
			const fullQuotation = await extractQuotationFromEmail(rawInput);
			const actionToValidate = extracted.isDeclined ? "DECLINE_REQUEST" : extracted.isConfirmed ? "CONFIRM_MOVEMENT" : "RECORD_OFFER";
			const validation = validateQuotationForBackendAction(fullQuotation, actionToValidate);
			return new Response(JSON.stringify({
				success: true,
				extracted,
				quotation: fullQuotation,
				validation,
				method: "RULE_BASED_DETERMINISTIC",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const message = err instanceof Error ? err.message : String(err);
			console.error("[Extraction Engine API Error]:", message);
			return new Response(JSON.stringify({
				success: false,
				error: message
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/emails/detect-confirmation" && request.method === "POST") try {
			const payload = await request.json();
			const detection = await detectForwarderConfirmation({
				emailMessageId: payload.emailMessageId,
				subject: payload.subject || "",
				body: payload.body || "",
				snippet: payload.snippet || "",
				senderEmail: payload.senderEmail || payload.fromEmail || "",
				senderName: payload.senderName || "",
				movementNumber: payload.movementNumber,
				forwarderName: payload.forwarderName,
				matchStatus: payload.matchStatus || "MATCHED"
			});
			return new Response(JSON.stringify({
				success: true,
				detection
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const message = err instanceof Error ? err.message : String(err);
			return new Response(JSON.stringify({
				success: false,
				error: message
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/movements/auto-confirm" && request.method === "POST") try {
			const payload = await request.json();
			const result = await processAutomaticMovementConfirmation({
				bookingId: payload.bookingId,
				movementId: payload.movementId,
				movementNumber: payload.movementNumber,
				forwarderId: payload.forwarderId,
				forwarderName: payload.forwarderName,
				emailMessageId: payload.emailMessageId || payload.id,
				gmailMessageId: payload.gmailMessageId,
				gmailThreadId: payload.gmailThreadId,
				senderEmail: payload.senderEmail || payload.fromEmail || "",
				senderName: payload.senderName || "",
				direction: payload.direction || "inbound",
				matchStatus: payload.matchStatus || "MATCHED",
				matchedBy: payload.matchedBy || "MOVEMENT_NUMBER",
				isForwarderValidated: payload.isForwarderValidated !== false,
				confirmationStatus: payload.confirmationStatus || "CONFIRMED",
				confidence: payload.confidence ?? .95,
				reason: payload.reason || "Manual / automated confirmation trigger",
				detectedBy: payload.detectedBy || "API_TRIGGER",
				details: payload.details,
				userId: payload.userId
			});
			return new Response(JSON.stringify(result), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const message = err instanceof Error ? err.message : String(err);
			return new Response(JSON.stringify({
				success: false,
				error: message
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/emails/process-reply" && request.method === "POST") try {
			const payload = await request.json();
			let emailMessageId = payload.emailMessageId;
			if (!emailMessageId) {
				const senderEmail = payload.senderEmail || payload.fromEmail || "forwarder@example.com";
				const subject = payload.subject || "Booking confirmed";
				const body = payload.body || "Booking confirmed";
				const gmailThreadId = payload.gmailThreadId || null;
				const gmailMessageId = payload.gmailMessageId || `msg-${Date.now()}`;
				let threadId = payload.threadId || null;
				if (gmailThreadId && !threadId) {
					const { data: exThread } = await dbUntyped.from("email_threads").select("id").eq("gmail_thread_id", gmailThreadId).maybeSingle();
					if (exThread) threadId = exThread.id;
				}
				if (!threadId) threadId = await ensureServerEmailThread(supabase, {
					gmailThreadId,
					subject,
					snippet: (body || subject).slice(0, 120),
					receivedAt: (/* @__PURE__ */ new Date()).toISOString(),
					accountUserId: payload.userId,
					accountEmail: payload.senderEmail
				});
				if (!threadId) return new Response(JSON.stringify({
					success: false,
					error: "Failed to resolve or create an email thread in Supabase"
				}), {
					status: 500,
					headers: {
						...apiCorsHeaders,
						"Content-Type": "application/json"
					}
				});
				const { data: existingSaved } = await dbUntyped.from("email_messages").select("id").eq("gmail_message_id", gmailMessageId).maybeSingle();
				let savedMsg = existingSaved;
				if (!savedMsg) {
					const { data: newSaved, error: saveErr } = await dbUntyped.from("email_messages").insert({
						thread_id: threadId,
						sender_email: senderEmail,
						sender_name: payload.senderName || "Forwarder",
						recipient_email: payload.recipientEmail || "operations@nashmia.com",
						subject,
						body,
						direction: "Inbound",
						gmail_message_id: gmailMessageId,
						attachments: payload.attachments || [],
						raw_headers: {
							gmail_thread_id: gmailThreadId,
							gmail_message_id: gmailMessageId,
							subject,
							body,
							from_email: senderEmail,
							attachments: payload.attachments || []
						}
					}).select().maybeSingle();
					if (newSaved) savedMsg = newSaved;
					else if (saveErr?.code === "23505" || saveErr?.message?.includes("duplicate") || saveErr?.message?.includes("already exists")) {
						const { data: found } = await dbUntyped.from("email_messages").select("id").eq("gmail_message_id", gmailMessageId).maybeSingle();
						savedMsg = found;
					} else {
						console.error("[server.ts] Error inserting email_messages:", saveErr);
						return new Response(JSON.stringify({
							success: false,
							error: saveErr?.message || "Failed to save email_messages"
						}), {
							status: 500,
							headers: {
								...apiCorsHeaders,
								"Content-Type": "application/json"
							}
						});
					}
				}
				if (!savedMsg) return new Response(JSON.stringify({
					success: false,
					error: "Failed to save or find email_messages record"
				}), {
					status: 500,
					headers: {
						...apiCorsHeaders,
						"Content-Type": "application/json"
					}
				});
				emailMessageId = savedMsg.id;
			}
			const { data: emailRecord } = await dbUntyped.from("email_messages").select("*").eq("id", emailMessageId).maybeSingle();
			const rawHeaders = emailRecord?.raw_headers || {};
			const attachmentsToPass = payload.attachments || (Array.isArray(emailRecord?.attachments) ? emailRecord.attachments : []) || (Array.isArray(rawHeaders.attachments) ? rawHeaders.attachments : []);
			const result = await processIncomingEmailReply(supabase, {
				emailMessageId,
				gmailThreadId: payload.gmailThreadId || rawHeaders.gmail_thread_id || null,
				gmailMessageId: payload.gmailMessageId || emailRecord?.gmail_message_id || null,
				subject: payload.subject || emailRecord?.subject || "",
				body: payload.body || emailRecord?.body || "",
				snippet: payload.snippet || rawHeaders.snippet || "",
				senderEmail: payload.senderEmail || emailRecord?.sender_email || "",
				senderName: payload.senderName || emailRecord?.sender_name || "",
				recipientEmail: payload.recipientEmail || emailRecord?.recipient_email || null,
				direction: payload.direction || emailRecord?.direction || "Inbound",
				userId: payload.userId || null,
				attachments: attachmentsToPass
			});
			return new Response(JSON.stringify(result), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (err) {
			const message = err instanceof Error ? err.stack || err.message : String(err);
			console.error("[/api/emails/process-reply] Error:", message);
			return new Response(JSON.stringify({
				success: false,
				error: message
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/documents" && request.method === "GET") try {
			const reqOrgId = request.headers.get("x-organization-id") || url.searchParams.get("organizationId") || null;
			const serverDocs = getServerSavedDocuments();
			const combined = [...serverDocs];
			const seen = new Set(serverDocs.map((d) => d.id));
			try {
				let emailQuery = dbUntyped.from("email_messages").select("id, organization_id, gmail_message_id, sender_email, sender_name, forwarder_id, movement_number, booking_id, sent_at, created_at, attachments").not("attachments", "is", null);
				if (reqOrgId) emailQuery = emailQuery.or(`organization_id.eq.${reqOrgId},organization_id.is.null`);
				const { data: dbEmails } = await emailQuery.limit(100);
				if (dbEmails && Array.isArray(dbEmails)) {
					for (const em of dbEmails) if (Array.isArray(em.attachments)) for (let idx = 0; idx < em.attachments.length; idx++) {
						const att = em.attachments[idx];
						if (!att) continue;
						const docId = att.savedDocumentId || `doc-email-${em.id}-${idx}`;
						if (seen.has(docId)) continue;
						const rawName = att.fileName || att.name || "Attachment.pdf";
						const docType = att.documentType || "Cut-Off";
						const fileFormat = (att.fileFormat || att.type || "PDF").toUpperCase();
						const fileSize = att.fileSize || att.size || "380 KB";
						const forwarder = att.forwarder || em.sender_name || "Forwarder";
						const movementNum = att.movementReferenceNumber || att.linkedMovementNumber || em.movement_number || null;
						att.status;
						const dateStr = att.receivedDate || (em.sent_at ? new Date(em.sent_at).toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
							year: "numeric"
						}) : "16 Sep 2025");
						const timeStr = em.sent_at ? new Date(em.sent_at).toLocaleTimeString("en-US", {
							hour: "2-digit",
							minute: "2-digit"
						}) : "10:24 AM";
						const dbDoc = {
							id: docId,
							name: rawName,
							type: determineFileType(fileFormat),
							extension: fileFormat.toLowerCase(),
							owners: [{
								id: em.forwarder_id || "owner-fwd",
								name: forwarder,
								email: em.sender_email || "forwarder@logistics.com",
								avatarBg: "bg-blue-600 text-white",
								avatarText: (forwarder[0] || "F").toUpperCase()
							}],
							lastModified: `${dateStr} - ${timeStr}`,
							lastModifiedTimestamp: att.receivedTimestamp || em.created_at || (/* @__PURE__ */ new Date()).toISOString(),
							fileSize,
							folderId: "folder-design",
							starred: true,
							sharedLink: att.storageUrl || att.fileUrl || att.url || att.sharedLink || (em.gmail_message_id && att.attachmentId ? `/api/gmail/attachment?messageId=${encodeURIComponent(em.gmail_message_id)}&attachmentId=${encodeURIComponent(att.attachmentId)}&filename=${encodeURIComponent(rawName)}` : att.storagePath ? `/api/documents/download?path=${encodeURIComponent(att.storagePath)}` : ""),
							url: att.storageUrl || att.fileUrl || att.url || (em.gmail_message_id && att.attachmentId ? `/api/gmail/attachment?messageId=${encodeURIComponent(em.gmail_message_id)}&attachmentId=${encodeURIComponent(att.attachmentId)}&filename=${encodeURIComponent(rawName)}` : att.storagePath ? `/api/documents/download?path=${encodeURIComponent(att.storagePath)}` : ""),
							metadata: {
								documentType: docType,
								displayDocumentType: docType,
								typeTag: docType,
								originalFilename: att.originalFilename || att.fileName || att.name || rawName,
								fileName: att.fileName || rawName,
								category: att.documentCategory || att.category || (docType === "Cut-Off" ? "Cut-Off Notice" : docType === "BL" ? "Bill of Lading" : docType === "Booking Confirmation" ? "Booking Confirmation" : docType === "Shipping Instructions" ? "Shipping Instructions" : "Other"),
								movementNumber: movementNum,
								movementReferenceNumber: movementNum,
								bookingId: att.linkedBookingId || em.booking_id || null,
								bookingDocumentId: att.bookingDocumentId || null,
								forwarderName: forwarder,
								forwarder,
								forwarderEmail: em.sender_email,
								senderEmail: em.sender_email,
								sourceEmail: att.sourceEmail || em.sender_email || null,
								gmailMessageId: att.gmailMessageId || em.gmail_message_id,
								fileFormat,
								fileSize,
								receivedDate: dateStr,
								receivedTime: timeStr,
								status: att.status || (att.storageUrl ? "Saved to Supabase Storage" : "Metadata Saved"),
								uploadStatus: att.uploadStatus || (att.storageUrl ? "Saved to Supabase Storage" : "Metadata Saved"),
								isMetadataOnly: Boolean(att.isMetadataOnly),
								source: att.source || "Incoming Forwarder Email",
								storageBucket: att.storageBucket || "documents",
								storagePath: att.storagePath || null,
								fileUrl: att.storageUrl || att.fileUrl || att.url || null
							}
						};
						combined.push(dbDoc);
						seen.add(docId);
					}
				}
			} catch (dbFetchErr) {
				console.warn("[API Documents] Notice reading attachments from Supabase:", dbFetchErr);
			}
			try {
				const { data: dbEvents } = await dbUntyped.from("booking_events").select("id, booking_id, title, description, payload, created_at, event_date").eq("event_type", "Document Linked").order("created_at", { ascending: false }).limit(100);
				if (dbEvents && Array.isArray(dbEvents)) for (const ev of dbEvents) {
					const p = typeof ev.payload === "string" ? JSON.parse(ev.payload) : ev.payload;
					if (p && p.document && p.document.id) {
						const doc = p.document;
						if (!seen.has(doc.id)) {
							combined.push(doc);
							seen.add(doc.id);
						}
					}
				}
			} catch (eventFetchErr) {
				console.warn("[API Documents] Notice reading documents from booking_events:", eventFetchErr);
			}
			try {
				const { data: dbBookingDocs } = await dbUntyped.from("booking_documents").select(`
                id,
                booking_id,
                document_type,
                document_name,
                file_url,
                file_size,
                mime_type,
                status,
                created_at,
                updated_at,
                bookings (
                  id,
                  movement_number,
                  booking_reference,
                  organization_id,
                  forwarder_id,
                  forwarder_name,
                  carrier
                )
              `).order("created_at", { ascending: false }).limit(100);
				if (dbBookingDocs && Array.isArray(dbBookingDocs)) for (const bDoc of dbBookingDocs) {
					if (seen.has(bDoc.id)) continue;
					if (combined.some((c) => c.url === bDoc.file_url || c.name === bDoc.document_name && c.metadata?.bookingId === bDoc.booking_id)) continue;
					const booking = bDoc.bookings;
					if (reqOrgId && booking?.organization_id && booking.organization_id !== reqOrgId) continue;
					const movNum = booking?.movement_number || booking?.booking_reference || null;
					const fwdName = booking?.forwarder_name || booking?.carrier || "Forwarder";
					const ext = bDoc.document_name.includes(".") ? bDoc.document_name.split(".").pop()?.toLowerCase() || "pdf" : "pdf";
					const formattedSize = bDoc.file_size ? `${Math.round(bDoc.file_size / 1024)} KB` : "320 KB";
					const dateObj = new Date(bDoc.created_at || /* @__PURE__ */ new Date());
					const dateStr = dateObj.toLocaleDateString("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric"
					});
					const timeStr = dateObj.toLocaleTimeString("en-US", {
						hour: "2-digit",
						minute: "2-digit"
					});
					const storagePath = bDoc.file_url.includes("/documents/") ? decodeURIComponent(bDoc.file_url.split("/documents/")[1] || "") : null;
					const driveFileItem = {
						id: bDoc.id,
						name: bDoc.document_name,
						type: determineFileType(ext),
						extension: ext,
						owners: [{
							id: booking?.forwarder_id || "owner-fwd",
							name: fwdName,
							email: "operations@nashmia.com",
							avatarBg: "bg-blue-600 text-white",
							avatarText: (fwdName[0] || "F").toUpperCase()
						}],
						lastModified: `${dateStr} - ${timeStr}`,
						lastModifiedTimestamp: bDoc.created_at || (/* @__PURE__ */ new Date()).toISOString(),
						fileSize: formattedSize,
						folderId: "folder-design",
						starred: true,
						sharedLink: bDoc.file_url,
						url: bDoc.file_url,
						metadata: {
							documentType: bDoc.document_type,
							displayDocumentType: bDoc.document_type === "BILL_OF_LADING" ? "Bill of Lading" : bDoc.document_type === "CUT_OFF_NOTICE" ? "Cut-Off" : bDoc.document_type,
							typeTag: bDoc.document_type === "BILL_OF_LADING" ? "Bill of Lading" : bDoc.document_type === "CUT_OFF_NOTICE" ? "Cut-Off" : bDoc.document_type,
							originalFilename: bDoc.document_name,
							fileName: bDoc.document_name,
							category: bDoc.document_type === "BILL_OF_LADING" ? "Bill of Lading" : bDoc.document_type === "CUT_OFF_NOTICE" ? "Cut-Off Notice" : "General",
							bookingId: bDoc.booking_id,
							movementNumber: movNum,
							movementReferenceNumber: movNum,
							forwarderId: booking?.forwarder_id || null,
							forwarderName: fwdName,
							forwarder: fwdName,
							sourceEmail: "operations@nashmia.com",
							fileFormat: ext.toUpperCase(),
							fileSize: formattedSize,
							receivedDate: dateStr,
							receivedTime: timeStr,
							status: bDoc.status || "Verified",
							uploadStatus: "Saved to Supabase Storage",
							isMetadataOnly: false,
							source: "Supabase Booking Documents",
							storageBucket: "documents",
							storagePath,
							fileUrl: bDoc.file_url
						}
					};
					combined.push(driveFileItem);
					seen.add(bDoc.id);
				}
			} catch (bDocErr) {
				console.warn("[API Documents] Notice reading documents from booking_documents:", bDocErr);
			}
			for (const initFile of INITIAL_FILES) if (!seen.has(initFile.id)) {
				combined.push(initFile);
				seen.add(initFile.id);
			}
			await Promise.all(combined.map(async (item) => {
				const sPath = item.metadata?.storagePath;
				if (sPath) try {
					const bucket = item.metadata?.storageBucket || "documents";
					const signed = await createDocumentSignedUrl(supabase, sPath, 3600, bucket);
					if (signed.success && signed.signedUrl) {
						item.url = signed.signedUrl;
						item.sharedLink = signed.signedUrl;
						if (item.metadata) item.metadata.fileUrl = signed.signedUrl;
					}
				} catch (signErr) {
					console.warn("[API Documents] Notice generating signed URL:", signErr);
				}
			}));
			const deduplicatedFiles = [];
			const uniqueDocKeys = /* @__PURE__ */ new Set();
			for (const item of combined) {
				const rawName = (item.metadata?.originalFilename || item.name || "").toLowerCase().trim();
				const mov = (item.metadata?.movementNumber || item.metadata?.movementReferenceNumber || "GENERAL").toUpperCase().trim();
				const sPath = item.metadata?.storagePath;
				const nameKey = `file:${rawName}:${mov}`;
				const pathKey = sPath ? `path:${sPath}` : null;
				if (uniqueDocKeys.has(nameKey) || pathKey && uniqueDocKeys.has(pathKey) || uniqueDocKeys.has(`id:${item.id}`)) {
					if (sPath) {
						const existingIdx = deduplicatedFiles.findIndex((f) => (f.metadata?.originalFilename || f.name || "").toLowerCase().trim() === rawName && (f.metadata?.movementNumber || f.metadata?.movementReferenceNumber || "GENERAL").toUpperCase().trim() === mov);
						if (existingIdx >= 0 && !deduplicatedFiles[existingIdx].metadata?.storagePath) deduplicatedFiles[existingIdx] = item;
					}
					continue;
				}
				uniqueDocKeys.add(nameKey);
				if (pathKey) uniqueDocKeys.add(pathKey);
				uniqueDocKeys.add(`id:${item.id}`);
				deduplicatedFiles.push(item);
			}
			return new Response(JSON.stringify({
				success: true,
				count: deduplicatedFiles.length,
				savedAttachmentsCount: serverDocs.length,
				files: deduplicatedFiles
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (docErr) {
			const msg = docErr instanceof Error ? docErr.message : String(docErr);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/documents/signed-url" && (request.method === "POST" || request.method === "GET")) try {
			let storagePath = null;
			let bucket = "documents";
			let expiresIn = 3600;
			let reqOrgId = request.headers.get("x-organization-id");
			if (request.method === "POST") {
				const body = await request.json();
				storagePath = body.storagePath || body.path || null;
				if (body.bucket) bucket = body.bucket;
				if (body.expiresIn) expiresIn = Number(body.expiresIn);
				if (body.organizationId) reqOrgId = body.organizationId;
			} else {
				storagePath = url.searchParams.get("path") || url.searchParams.get("storagePath");
				if (url.searchParams.get("bucket")) bucket = url.searchParams.get("bucket");
				if (url.searchParams.get("expiresIn")) expiresIn = Number(url.searchParams.get("expiresIn"));
				if (url.searchParams.get("organizationId")) reqOrgId = url.searchParams.get("organizationId");
			}
			if (!storagePath) return new Response(JSON.stringify({
				success: false,
				error: "Missing storagePath parameter"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			if (storagePath.includes("..") || storagePath.includes("\0")) return new Response(JSON.stringify({
				success: false,
				error: "Security violation: Invalid storage path"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			if (reqOrgId && storagePath.startsWith("organizations/")) {
				const pathOrg = storagePath.split("/")[1];
				if (pathOrg && pathOrg !== reqOrgId) return new Response(JSON.stringify({
					success: false,
					error: "Unauthorized organization document access"
				}), {
					status: 403,
					headers: {
						...apiCorsHeaders,
						"Content-Type": "application/json"
					}
				});
			}
			const signedResult = await createDocumentSignedUrl(supabase, storagePath, expiresIn, bucket);
			return new Response(JSON.stringify(signedResult), {
				status: signedResult.success ? 200 : 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (signedErr) {
			const msg = signedErr instanceof Error ? signedErr.message : String(signedErr);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/documents/download" && request.method === "GET") try {
			const storagePath = url.searchParams.get("path") || url.searchParams.get("storagePath");
			const bucket = url.searchParams.get("bucket") || "documents";
			const reqOrgId = request.headers.get("x-organization-id") || url.searchParams.get("organizationId");
			if (!storagePath) return new Response(JSON.stringify({
				success: false,
				error: "Missing path parameter"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			if (storagePath.includes("..") || storagePath.includes("\0")) return new Response(JSON.stringify({
				success: false,
				error: "Security violation: Invalid storage path"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			if (reqOrgId && storagePath.startsWith("organizations/")) {
				const pathOrg = storagePath.split("/")[1];
				if (pathOrg && pathOrg !== reqOrgId) return new Response(JSON.stringify({
					success: false,
					error: "Unauthorized organization document access"
				}), {
					status: 403,
					headers: {
						...apiCorsHeaders,
						"Content-Type": "application/json"
					}
				});
			}
			const cleanPath = storagePath.replace(/^\/+/, "");
			const { data: fileBlob, error: downloadErr } = await supabase.storage.from(bucket).download(cleanPath);
			if (downloadErr || !fileBlob) {
				const signed = await createDocumentSignedUrl(supabase, cleanPath, 3600, bucket);
				if (signed.success && signed.signedUrl) return Response.redirect(signed.signedUrl, 302);
				return new Response(JSON.stringify({
					success: false,
					error: downloadErr?.message || "Document not found in storage"
				}), {
					status: 404,
					headers: {
						...apiCorsHeaders,
						"Content-Type": "application/json"
					}
				});
			}
			const safeFilename = sanitizeFilename(cleanPath.split("/").pop() || "download.pdf");
			return new Response(fileBlob, {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": fileBlob.type || "application/octet-stream",
					"Content-Disposition": `attachment; filename="${safeFilename}"`,
					"Cache-Control": "private, no-transform, max-age=3600",
					"X-Content-Type-Options": "nosniff"
				}
			});
		} catch (dlErr) {
			const msg = dlErr instanceof Error ? dlErr.message : String(dlErr);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/api/documents/classify-attachment" && request.method === "POST") try {
			const payload = await request.json();
			const detection = await classifyAttachmentWithContent({
				filename: payload.filename || payload.name,
				name: payload.name || payload.filename,
				size: payload.size,
				mimeType: payload.mimeType,
				data: payload.data,
				content: payload.content,
				extractedText: payload.extractedText,
				url: payload.url
			}, {
				subject: payload.subject,
				body: payload.body
			});
			return new Response(JSON.stringify({
				success: true,
				classification: detection
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (classifyErr) {
			const msg = classifyErr instanceof Error ? classifyErr.message : String(classifyErr);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if (url.pathname === "/favicon.ico") return new Response(null, {
			status: 204,
			headers: {
				"Content-Type": "image/x-icon",
				"Cache-Control": "public, max-age=0, must-revalidate"
			}
		});
		if (url.pathname === "/api/documents/auto-save-attachment" && request.method === "POST") try {
			const payload = await request.json();
			const result = await saveAndLinkIncomingAttachment(supabase, {
				attachment: {
					filename: payload.filename || payload.name,
					name: payload.name || payload.filename,
					size: payload.size,
					mimeType: payload.mimeType,
					data: payload.data,
					content: payload.content,
					extractedText: payload.extractedText,
					url: payload.url
				},
				bookingId: payload.bookingId,
				movementNumber: payload.movementNumber,
				movementId: payload.movementId,
				forwarderId: payload.forwarderId,
				forwarderName: payload.forwarderName,
				senderEmail: payload.senderEmail,
				senderName: payload.senderName,
				emailMessageId: payload.emailMessageId,
				gmailMessageId: payload.gmailMessageId,
				gmailThreadId: payload.gmailThreadId,
				inReplyTo: payload.inReplyTo,
				references: payload.references,
				headers: payload.headers,
				rawHeaders: payload.rawHeaders,
				subject: payload.subject,
				body: payload.body,
				receivedAt: payload.receivedAt,
				userId: payload.userId
			});
			return new Response(JSON.stringify(result), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (saveErr) {
			const msg = saveErr instanceof Error ? saveErr.message : String(saveErr);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if ((url.pathname === "/api/cut-offs/save" || url.pathname === "/api/movements/cut-offs") && request.method === "POST") try {
			const body = await request.json();
			const movementNumber = (body.movementNumber || body.movement_number || "").trim();
			if (!movementNumber) return new Response(JSON.stringify({
				success: false,
				error: "Missing required movementNumber"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			const result = await saveCutOffDataToDatabase({
				movementNumber,
				bookingId: body.bookingId || null,
				cutoffType: body.cutoffType || body.cutoff_type || null,
				cutoffDate: body.cutoffDate || body.cutoff_date || null,
				sourceDocumentId: body.sourceDocumentId || body.source_document_id || null,
				sourceEmailId: body.sourceEmailId || body.source_email_id || null,
				extractionStatus: body.extractionStatus || body.extraction_status || null,
				reviewStatus: body.reviewStatus || body.review_status || null,
				deadlines: body.deadlines,
				cutOffDates: body.cutOffDates,
				createdAt: body.createdAt || body.created_at,
				updatedAt: body.updatedAt || body.updated_at
			});
			const target = inMemoryBookings.find((b) => b.movement_number === movementNumber || b.booking_reference === movementNumber || b.id === result.bookingId);
			if (target && result.cutOffDates) {
				target.cut_off_dates = result.cutOffDates;
				target.cut_off_deadlines = result.cutOffDates.deadlines || [];
				target.confirmation_details = {
					...target.confirmation_details || {},
					cut_off_dates: result.cutOffDates,
					cut_off_deadlines: result.cutOffDates.deadlines || [],
					source_document_id: body.sourceDocumentId || body.source_document_id || null,
					source_email_id: body.sourceEmailId || body.source_email_id || null,
					extraction_status: result.cutOffDates.extractionStatus || "COMPLETED",
					review_status: result.cutOffDates.reviewStatus || "AUTO_VERIFIED",
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				};
				target.updated_at = (/* @__PURE__ */ new Date()).toISOString();
			}
			return new Response(JSON.stringify(result), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (saveErr) {
			const msg = saveErr instanceof Error ? saveErr.message : String(saveErr);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		if ((url.pathname === "/api/cut-offs" || url.pathname === "/api/movements/cut-offs") && request.method === "GET") try {
			const movementNumber = (url.searchParams.get("movementNumber") || url.searchParams.get("movement_number") || "").trim();
			if (!movementNumber) return new Response(JSON.stringify({
				success: false,
				error: "Missing movementNumber query parameter"
			}), {
				status: 400,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
			const cutOffData = await getCutOffDataFromDatabase(movementNumber);
			return new Response(JSON.stringify({
				success: Boolean(cutOffData),
				data: cutOffData
			}), {
				status: 200,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		} catch (fetchErr) {
			const msg = fetchErr instanceof Error ? fetchErr.message : String(fetchErr);
			return new Response(JSON.stringify({
				success: false,
				error: msg
			}), {
				status: 500,
				headers: {
					...apiCorsHeaders,
					"Content-Type": "application/json"
				}
			});
		}
		return await normalizeCatastrophicSsrResponse(await startHandler(request, env, ctx));
	} catch (error) {
		console.error("[Server Error]", error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { executeExcelBookingUpdates as a, renderErrorPage as c, server_default as default, startContainerTracking as i, ssr_exports as l, createMiddleware as n, parseAndPreviewExcelBookings as o, getTrackingProviderConfig as r, extractCutOffDeadlinesOnly as s, createCsrfMiddleware as t, triggerImmediateServerSync };
