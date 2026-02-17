export default function CheckoutPopup({ open, setOpen, data }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#05070f] border border-white/10 rounded-3xl p-6 w-[90%] max-w-md shadow-xl">
        <h2 className="text-xl font-bold text-sky-400 mb-3">
          Invoice Checkout
        </h2>

        <div className="space-y-2 text-gray-300">
          <p>UserID: <b>{data.user}</b></p>
          <p>ZoneID: <b>{data.zone}</b></p>
          <p>Paket: <b>{data.diamond.name}</b></p>
          <p>Harga: <b>{data.diamond.price}</b></p>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="mt-5 w-full py-3 rounded-xl bg-red-500 font-bold"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
