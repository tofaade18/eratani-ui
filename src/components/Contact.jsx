import React from 'react';

const Contact = () => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      {/* Heading */}
      <h2 style={{ color: 'green' }}>Ingin Menjadi Bagian dari Kami?</h2>
      <p>
        Bersama kami membangun pertanian Indonesia karena Eratani{' '}
        <span style={{ fontWeight: 'bold', color: '#FFA500' }}>#SelaluAdaUntukPetani</span>
      </p>

      {/* Contact Button */}
      <button
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => window.open('https://wa.me', '_blank')} // Replace with actual WhatsApp link
      >
        Hubungi Kami
      </button>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: '2rem',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Map Section */}
        <div>
          <iframe
            title="Lokasi"
            src="https://www.google.com/maps/embed?pb=..." // Replace with your Google Maps embed link
            width="300"
            height="200"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <button
            style={{
                display: 'grid',
              backgroundColor: '#FFA500',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '5px',
              marginTop: '0.5rem',
              cursor: 'pointer',
            }}
          >
            Lokasi
          </button>
        </div>

        {/* Feedback Form */}
        <div
          style={{
            backgroundColor: '#f4f4f4',
            padding: '2rem',
            borderRadius: '5px',
            width: '400px',
          }}
        >
          <h3>Kritik & Saran</h3>
          <form>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                placeholder="Nama"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                placeholder="Email"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <textarea
                placeholder="Pesan Anda"
                rows="4"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#FFA500',
                color: 'white',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
