import { NextRequest, NextResponse } from "next/server";

const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycby1aGir0CiMYXvtqKDpxWI5LTwuKmoy4o2yuIBZd0TZDNPl_LUPB2TuuXrbjwBkYto8/exec";

type ImagePayload = {
  name: string;
  mimeType: string;
  data: string;
};

export async function POST(request: NextRequest) {
  if (!SHEET_ENDPOINT) {
    console.error("Missing ISSUE_APPS_SCRIPT_URL env var");
    return NextResponse.json(
      { ok: false, message: "Missing ISSUE_APPS_SCRIPT_URL environment variable." },
      { status: 500 }
    );
  }

  console.log("report-issue: using SHEET_ENDPOINT=", SHEET_ENDPOINT);

  const formData = await request.formData();
  const payload: Record<string, string | ImagePayload[]> = {
    name: String(formData.get("name") || ""),
    phone: String(formData.get("phone") || ""),
    location: String(formData.get("location") || ""),
    municipality: String(formData.get("municipality") || ""),
    ward: String(formData.get("ward") || ""),
    category: String(formData.get("category") || ""),
    description: String(formData.get("description") || ""),
    source: "UPF report issue form",
  };

  const images: ImagePayload[] = [];
  const uploadedFiles = formData.getAll("images");

  for (const entry of uploadedFiles) {
    if (!(entry instanceof File) || entry.size === 0) continue;

    const bytes = new Uint8Array(await entry.arrayBuffer());
    images.push({
      name: entry.name,
      mimeType: entry.type || "application/octet-stream",
      data: Buffer.from(bytes).toString("base64"),
    });
  }

  payload.images = images;

  try {
    const response = await fetch(SHEET_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    console.log("report-issue: apps-script status=", response.status, "body=", text.slice(0, 200));

    try {
      const json = JSON.parse(text);
      return NextResponse.json(json, { status: response.ok ? 200 : 500 });
    } catch (err) {
      return NextResponse.json({ ok: response.ok, message: text || "Saved" }, { status: response.ok ? 200 : 500 });
    }
  } catch (err) {
    console.error("report-issue: fetch to Apps Script failed", String(err));
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}