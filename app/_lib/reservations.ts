"use server";

import type { ReservationState } from "./reservation-state";

export async function requestReservation(
  _prevState: ReservationState,
  formData: FormData
): Promise<ReservationState> {
  const name = String(formData.get("name") ?? "").trim();
  const partySizeRaw = String(formData.get("partySize") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const time = String(formData.get("time") ?? "").trim();

  const fieldErrors: ReservationState["fieldErrors"] = {};

  if (!name) fieldErrors.name = "Tell us who we're seating.";

  const partySize = Number(partySizeRaw);
  if (!partySizeRaw || !Number.isInteger(partySize) || partySize < 1 || partySize > 12) {
    fieldErrors.partySize = "Parties of 1–12, please — for bigger groups, call the shop.";
  }

  if (!date) fieldErrors.date = "Pick a date.";
  if (!time) fieldErrors.time = "Pick a time.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Check a couple of fields and try again.",
      fieldErrors,
    };
  }

  return {
    status: "success",
    message: "Reservation requested — we'll confirm shortly.",
  };
}
