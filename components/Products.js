export default function Products({ diamond, setDiamond }) {
  const items = [
    { name: "5K BBC", price: "Rp 20.000" },
    { name: "10K BBC", price: "Rp 40.000" },
    { name: "20K BBC", price: "Rp 60.000" },
    { name: "50K BBC", price: "Rp 120.000" },
    { name: "100K BBC", price: "Rp 200.000" },
    { name: "200K BBC", price: "Rp 350.000" },
  ];

  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
      <h2 className="text-sky-400 font-semibold text-lg mb-4">
        Pilih Nominal BBC
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((p, i) => (
          <button
            key={i}
            onClick={() => setDiamond(p)}
            className={`p-4 rounded-2xl border text-left transition ${
              diamond?.name === p.name
                ? "border-sky-400 bg-sky-400/20"
                : "border-white/10 bg-white/5 hover:border-sky-300"
            }`}
          >
            <p className="font-bold">{p.name}</p>
            <p className="text-gray-400 text-sm">{p.price}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
