//#region node_modules/.nitro/vite/services/ssr/assets/deterministic-attachment-extractor-B0k755jw.js
/**
* Deterministically extracts text from PDF buffer using pdf-parse.
* If the PDF has no text stream (scanned PDF), returns unreadable.
*/
async function extractTextFromPdf(buffer) {
	try {
		let rawText = "";
		try {
			const pdfParseModule = await import("../_libs/pdf-parse+pdfjs-dist.mjs").then((n) => n.t);
			if (typeof pdfParseModule.PDFParse === "function") {
				const { PDFParse } = pdfParseModule;
				const parser = new PDFParse({ data: buffer });
				await parser.load();
				rawText = ((await parser.getText())?.text || "").trim();
				try {
					await parser.destroy();
				} catch {}
			} else {
				const pdfParseFn = pdfParseModule.default || pdfParseModule;
				if (typeof pdfParseFn === "function") rawText = ((await pdfParseFn(buffer))?.text || "").trim();
			}
		} catch {}
		if (!rawText || rawText.trim().length < 5) {
			const latin1Str = new TextDecoder("latin1").decode(buffer);
			const textChunks = [];
			const tjArrayMatches = latin1Str.match(/\[([\s\S]*?)\]\s*TJ/gi);
			if (tjArrayMatches) for (const arr of tjArrayMatches) {
				const strMatches = arr.match(/\(([^()]+)\)/g);
				if (strMatches) {
					const joined = strMatches.map((s) => s.slice(1, -1)).join("");
					if (joined.trim().length >= 2) textChunks.push(joined.trim());
				}
			}
			const tjMatches = latin1Str.match(/\(([^()]{2,150})\)\s*T[jJ]/g);
			if (tjMatches) for (const m of tjMatches) {
				const cleaned = m.replace(/[()\s*TjJ]/g, " ").trim();
				if (cleaned.length >= 2) textChunks.push(cleaned);
			}
			const streamMatches = latin1Str.match(/stream[\r\n]+([\s\S]*?)[\r\n]+endstream/gi);
			if (streamMatches) for (const sm of streamMatches) {
				const textInStream = sm.match(/\(([^()]+)\)/g);
				if (textInStream) for (const tis of textInStream) {
					const c = tis.slice(1, -1).trim();
					if (c.length >= 2) textChunks.push(c);
				}
			}
			const printableMatches = latin1Str.match(/[\x20-\x7E\t\r\n]{3,}/g);
			if (printableMatches) for (const seq of printableMatches) {
				const trimmed = seq.trim();
				if (trimmed.length >= 3 && /[a-zA-Z]{2,}/.test(trimmed) && !trimmed.startsWith("xref") && !trimmed.startsWith("trailer") && !/^[0-9\s]+obj$/.test(trimmed)) textChunks.push(trimmed);
			}
			if (textChunks.length > 0) rawText = textChunks.join(" \n ").slice(0, 2e4);
		}
		const meaningfulText = rawText.replace(/[\s\r\n\t]+/g, " ").trim();
		const alphanumericCount = (meaningfulText.match(/[a-zA-Z0-9]/g) || []).length;
		if (!meaningfulText || alphanumericCount < 10) return {
			text: "",
			isScanned: true
		};
		return {
			text: rawText,
			isScanned: false
		};
	} catch {
		return {
			text: "",
			isScanned: true
		};
	}
}
//#endregion
export { extractTextFromPdf };
