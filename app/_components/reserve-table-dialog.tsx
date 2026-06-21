"use client";

import { useActionState, useRef, useState } from "react";
import { requestReservation } from "@/app/_lib/reservations";
import { initialReservationState } from "@/app/_lib/reservation-state";
import { IconPlus } from "./icons";

function ReservationForm() {
  const [state, formAction, pending] = useActionState(
    requestReservation,
    initialReservationState
  );

  if (state.status === "success") {
    return (
      <p role="status" className="text-roast">
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <label className="flex flex-col gap-1 text-sm text-roast">
        Name
        <input
          name="name"
          required
          className="h-11 rounded-full bg-cream-deep px-4 text-espresso outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep"
        />
        {state.fieldErrors?.name && (
          <span className="text-sm text-terracotta-deep">{state.fieldErrors.name}</span>
        )}
      </label>
      <label className="flex flex-col gap-1 text-sm text-roast">
        Party size
        <input
          name="partySize"
          type="number"
          min={1}
          max={12}
          required
          className="h-11 rounded-full bg-cream-deep px-4 text-espresso outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep"
        />
        {state.fieldErrors?.partySize && (
          <span className="text-sm text-terracotta-deep">{state.fieldErrors.partySize}</span>
        )}
      </label>
      <label className="flex flex-col gap-1 text-sm text-roast">
        Date
        <input
          name="date"
          type="date"
          required
          className="h-11 rounded-full bg-cream-deep px-4 text-espresso outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep"
        />
        {state.fieldErrors?.date && (
          <span className="text-sm text-terracotta-deep">{state.fieldErrors.date}</span>
        )}
      </label>
      <label className="flex flex-col gap-1 text-sm text-roast">
        Time
        <input
          name="time"
          type="time"
          required
          className="h-11 rounded-full bg-cream-deep px-4 text-espresso outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep"
        />
        {state.fieldErrors?.time && (
          <span className="text-sm text-terracotta-deep">{state.fieldErrors.time}</span>
        )}
      </label>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-terracotta-deep">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center rounded-full bg-espresso font-medium text-paper shadow-soft transition-all duration-150 ease-brew hover:bg-roast hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-espresso disabled:bg-clay disabled:text-roast/60 disabled:shadow-none"
      >
        {pending ? "Requesting…" : "Request reservation"}
      </button>
    </form>
  );
}

export function ReserveTableDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [formKey, setFormKey] = useState(0);

  return (
    <dialog
      id="reserve-table-dialog"
      ref={dialogRef}
      aria-labelledby="reserve-table-heading"
      onClose={() => setFormKey((key) => key + 1)}
      className="w-full max-w-md rounded-card bg-paper p-0 shadow-lift backdrop:bg-espresso/40"
    >
      <div className="flex flex-col gap-5 p-8">
        <div className="flex items-start justify-between">
          <h2 id="reserve-table-heading" className="font-display text-display-md text-espresso">
            Reserve a table
          </h2>
          <button
            type="button"
            aria-label="Close"
            onClick={() => dialogRef.current?.close()}
            className="grid size-11 shrink-0 place-items-center rounded-full text-espresso transition-colors hover:bg-cream-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <IconPlus className="size-5 rotate-45" />
          </button>
        </div>
        <ReservationForm key={formKey} />
      </div>
    </dialog>
  );
}
