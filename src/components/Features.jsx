import React from "react";

const Features = () => {
  const stats = [
    {
      icon: "👥", // Replace with an actual icon/image if needed
      value: "500+",
      description: "Petani Binaan",
    },
    {
      icon: "💰", // Replace with an actual icon/image if needed
      value: "> Rp 5 Miliar",
      description: "Pendanaan Tersalurkan",
    },
    {
      icon: "📈", // Replace with an actual icon/image if needed
      value: "> 15%",
      description: "Peningkatan Pendapatan",
    },
    {
      icon: "🌾", // Replace with an actual icon/image if needed
      value: "750 Ha +",
      description: "Luas Wilayah Binaan",
    },
    {
      icon: "✅", // Replace with an actual icon/image if needed
      value: "> 20%",
      description: "Peningkatan Produktivitas",
    },
  ];

  return (
    <section className="statistics-section">
      <h2 className="section-title">
        Menuju Ekosistem yang <br />
        <span className="highlight">Lebih Kuat Bersama Eratani</span>
      </h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="icon">{stat.icon}</div>
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
