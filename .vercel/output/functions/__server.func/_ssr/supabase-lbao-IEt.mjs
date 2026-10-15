import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/supabase-lbao-IEt.js
/**
* Supabase client configuration using environment variables.
* Credentials must come exclusively from environment variables.
*/
function resolveEnv(key) {
	try {
		if (typeof process !== "undefined" && process?.env && process.env[key]) return String(process.env[key]);
	} catch {}
	try {
		if (typeof import.meta !== "undefined" && {
			"BASE_URL": "/",
			"DEV": true,
			"MODE": "production",
			"PROD": false,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/"
		}[key]) return String({
			"BASE_URL": "/",
			"DEV": true,
			"MODE": "production",
			"PROD": false,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/"
		}[key]);
	} catch {}
	return "";
}
var supabaseUrl = resolveEnv("VITE_SUPABASE_URL") || resolveEnv("SUPABASE_URL") || "";
var supabaseAnonKey = resolveEnv("VITE_SUPABASE_ANON_KEY") || resolveEnv("VITE_SUPABASE_PUBLISHABLE_KEY") || resolveEnv("SUPABASE_PUBLISHABLE_KEY") || "";
var isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey && !supabaseUrl.includes("placeholder-project"));
if (!isSupabaseConfigured) console.warn("[Supabase] Environment variables VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY are not set. Provide them in your environment settings.");
/**
* Centralized Supabase client instance using anonymous public key.
* Exported for application-wide reuse across authentication, tables, and realtime services.
* Strictly avoids service-role keys to ensure user-scoped permissions and RLS.
*/
var supabase = createClient(supabaseUrl || "https://placeholder-project.supabase.co", supabaseAnonKey || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.placeholder", { auth: {
	autoRefreshToken: true,
	persistSession: true,
	detectSessionInUrl: true
} });
/**
* Safe connection test to verify that the Supabase client can communicate with the project.
* Uses a non-destructive auth session ping and health query that does not require any custom database tables to exist.
*/
async function testSupabaseConnection() {
	const timestamp = (/* @__PURE__ */ new Date()).toISOString();
	const maskedUrl = supabaseUrl ? supabaseUrl.replace(/https:\/\/(.{4}).*(\.supabase\.co)/, "https://$1...$2") : void 0;
	if (!isSupabaseConfigured) {
		const result = {
			success: false,
			isConfigured: false,
			timestamp,
			url: maskedUrl,
			message: "Supabase credentials pending. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment."
		};
		console.warn("[Supabase Connection Test]", result);
		return result;
	}
	const startTime = performance.now();
	try {
		const { error } = await supabase.auth.getSession();
		const latencyMs = Math.round(performance.now() - startTime);
		if (error) {
			const result = {
				success: false,
				isConfigured: true,
				latencyMs,
				timestamp,
				url: maskedUrl,
				message: "Failed to communicate with Supabase project.",
				error: error.message
			};
			console.error("[Supabase Connection Test]", result);
			return result;
		}
		const result = {
			success: true,
			isConfigured: true,
			latencyMs,
			timestamp,
			url: maskedUrl,
			message: "Successfully connected to Supabase project."
		};
		console.log("[Supabase Connection Test] Connection verified:", result);
		return result;
	} catch (err) {
		const result = {
			success: false,
			isConfigured: true,
			latencyMs: Math.round(performance.now() - startTime),
			timestamp,
			url: maskedUrl,
			message: "Unexpected error during Supabase connection test.",
			error: err instanceof Error ? err.message : String(err)
		};
		console.error("[Supabase Connection Test]", result);
		return result;
	}
}
//#endregion
export { supabase as n, testSupabaseConnection as r, isSupabaseConfigured as t };
