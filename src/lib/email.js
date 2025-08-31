export async function sendContactEmail({ email, subject, message }) {
  const res = await fetch("/sendmsg", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, subject, message }),
  });
  if (!res.ok) {
    const t = await res.text().catch(() => "");
    throw new Error(t || "Failed to send");
  }
  return res.json();
}
