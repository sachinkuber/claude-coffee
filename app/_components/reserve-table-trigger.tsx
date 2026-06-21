"use client";

export function ReserveTableTrigger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const dialog = document.getElementById("reserve-table-dialog") as HTMLDialogElement | null;
        dialog?.showModal();
      }}
    >
      {children}
    </button>
  );
}
