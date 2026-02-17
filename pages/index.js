import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Products from "../components/Products";
import CheckoutPopup from "../components/CheckoutPopup";

export default function Home() {
  const [user, setUser] = useState("");
  const [zone, setZone] = useState("");
  const [diamond, setDiamond] = useState(null);
  const [popup, setPopup] = useState(false);

  function checkout() {
    if (!user || !zone || !diamond) {
      alert("Lengkapi semua data dulu!");
      return;
    }

    setPopup(true);

    let adminWA = "62895619811574";
    let msg =
      `Halo Admin Shine Store,%0A%0ASaya mau TopUp BBC:%0AUserID: ${user}%0AZone: ${zone}%0APaket: ${diamond.name}%0AHarga: ${diamond.price}%0A%0ATerima kasih 🙏`;

    window.open(`https://wa.me/${adminWA}?text=${msg}`, "_blank");
  }

  return (
    <div>
      <Navbar />
      <Banner />

      <main className="max-w-5xl mx-auto px-4 mt-8 space-y-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
          <h2 className="text-sky-400 font-semibold text-lg mb-4">
            Masukkan Data Akun
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="User ID"
              className="p-3 rounded-xl bg-white/10 outline-none"
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              placeholder="Zone ID"
              className="p-3 rounded-xl bg-white/10 outline-none"
              onChange={(e) => setZone(e.target.value)}
            />
          </div>
        </div>

        <Products diamond={diamond} setDiamond={setDiamond} />

        <button
          onClick={checkout}
          className="w-full py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-sky-400 to-blue-700 hover:opacity-90"
        >
          🚀 Checkout Sekarang
        </button>
      </main>

      <CheckoutPopup open={popup} setOpen={setPopup} data={{ user, zone, diamond }} />

      <footer className="text-center text-gray-500 mt-10 pb-6">
        © 2026 Shine Store
      </footer>
    </div>
  );
}
