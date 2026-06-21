export type ReservationState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "partySize" | "date" | "time", string>>;
};

export const initialReservationState: ReservationState = {
  status: "idle",
  message: "",
};
