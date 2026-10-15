import { it as fetchForwardersFromSupabase, nt as fetchBookingsFromSupabase, ot as fetchSuppliersFromSupabase, rt as fetchBuyersFromSupabase } from "./movement-forwarder-matcher-C7uJctaK.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/entity-cache-C4kyVDy3.js
var STABLE_CACHE_GC_TIME = 36e5;
var OPERATIONAL_CACHE_GC_TIME = 3e5;
/**
* Assert that a cache key or payload never touches sensitive credentials.
* Sensitive Gmail tokens (OAuth access tokens, refresh tokens, client secrets)
* must NEVER be placed into TanStack Query cache or browser storage.
*/
function assertNonSensitiveCacheKey(key) {
	const serialized = JSON.stringify(key).toLowerCase();
	if (serialized.includes("token") || serialized.includes("secret") || serialized.includes("credential") || serialized.includes("auth_code")) throw new Error("[Security Violation] Sensitive credentials and Gmail tokens must never be written to the client query cache.");
}
var entityCacheKeys = {
	all: ["entities"],
	buyers: (userId) => {
		const key = [
			"entities",
			"buyers",
			userId || "all"
		];
		assertNonSensitiveCacheKey(key);
		return key;
	},
	buyerDetail: (id, userId) => {
		const key = [
			"entities",
			"buyers",
			"detail",
			id,
			userId || "all"
		];
		assertNonSensitiveCacheKey(key);
		return key;
	},
	suppliers: (userId) => {
		const key = [
			"entities",
			"suppliers",
			userId || "all"
		];
		assertNonSensitiveCacheKey(key);
		return key;
	},
	supplierDetail: (id, userId) => {
		const key = [
			"entities",
			"suppliers",
			"detail",
			id,
			userId || "all"
		];
		assertNonSensitiveCacheKey(key);
		return key;
	},
	forwarders: (userId) => {
		const key = [
			"entities",
			"forwarders",
			userId || "all"
		];
		assertNonSensitiveCacheKey(key);
		return key;
	},
	forwarderDetail: (id, userId) => {
		const key = [
			"entities",
			"forwarders",
			"detail",
			id,
			userId || "all"
		];
		assertNonSensitiveCacheKey(key);
		return key;
	},
	shippingLines: (userId) => {
		const key = [
			"entities",
			"shipping-lines",
			userId || "all"
		];
		assertNonSensitiveCacheKey(key);
		return key;
	},
	rateCards: (userId) => {
		const key = [
			"entities",
			"rate-cards",
			userId || "all"
		];
		assertNonSensitiveCacheKey(key);
		return key;
	},
	/**
	* Operational bookings key — designated for authoritative Supabase sync.
	*/
	operationalBookings: (userId) => {
		const key = [
			"operational",
			"bookings",
			userId || "all"
		];
		assertNonSensitiveCacheKey(key);
		return key;
	}
};
/**
* Cached Buyers Query:
* - Reuses cached results across page navigation (e.g. Buyers Directory -> Bookings -> Compose Email).
* - Deduplicates in-flight requests if multiple components mount simultaneously.
* - Revalidates in the background after 10 minutes or on real-time mutation.
*/
function useCachedBuyers(userId, options) {
	return useQuery({
		queryKey: entityCacheKeys.buyers(userId),
		queryFn: async () => {
			return fetchBuyersFromSupabase(userId);
		},
		staleTime: options?.staleTime ?? 6e5,
		gcTime: STABLE_CACHE_GC_TIME,
		enabled: options?.enabled ?? true,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: "always",
		structuralSharing: true
	});
}
/**
* Cached Suppliers Query:
* - Reuses cached results across page navigation.
* - Deduplicates queries and provides background revalidation.
*/
function useCachedSuppliers(userId, options) {
	return useQuery({
		queryKey: entityCacheKeys.suppliers(userId),
		queryFn: async () => {
			return fetchSuppliersFromSupabase(userId);
		},
		staleTime: options?.staleTime ?? 6e5,
		gcTime: STABLE_CACHE_GC_TIME,
		enabled: options?.enabled ?? true,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: "always",
		structuralSharing: true
	});
}
/**
* Cached Forwarders Query:
* - Reuses cached results across Forwarders Directory, New Booking, Multi-Forwarder Request,
*   and Compose Email modals.
*/
function useCachedForwarders(userId, options) {
	return useQuery({
		queryKey: entityCacheKeys.forwarders(userId),
		queryFn: async () => {
			return fetchForwardersFromSupabase(userId);
		},
		staleTime: options?.staleTime ?? 6e5,
		gcTime: STABLE_CACHE_GC_TIME,
		enabled: options?.enabled ?? true,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: "always",
		structuralSharing: true
	});
}
/**
* Operational Bookings Query:
* - Enforces staleTime: 0.
* - Always validates with Supabase / `/api/bookings`.
* - Prevents cached data from ever becoming the authoritative source for critical booking statuses.
*/
function useOperationalBookings(userId, options) {
	return useQuery({
		queryKey: entityCacheKeys.operationalBookings(userId),
		queryFn: async () => {
			return fetchBookingsFromSupabase(userId);
		},
		staleTime: 0,
		gcTime: OPERATIONAL_CACHE_GC_TIME,
		enabled: options?.enabled ?? true,
		refetchOnMount: "always",
		refetchOnWindowFocus: true,
		refetchOnReconnect: "always"
	});
}
async function invalidateCachedBuyers(queryClient, userId) {
	await queryClient.invalidateQueries({ queryKey: entityCacheKeys.buyers(userId) });
}
async function invalidateCachedSuppliers(queryClient, userId) {
	await queryClient.invalidateQueries({ queryKey: entityCacheKeys.suppliers(userId) });
}
async function invalidateCachedForwarders(queryClient, userId) {
	await queryClient.invalidateQueries({ queryKey: entityCacheKeys.forwarders(userId) });
}
//#endregion
export { useCachedForwarders as a, useCachedBuyers as i, invalidateCachedForwarders as n, useCachedSuppliers as o, invalidateCachedSuppliers as r, useOperationalBookings as s, invalidateCachedBuyers as t };
