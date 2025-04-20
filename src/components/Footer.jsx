// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Calm Clone — Built for Pixel Plus Hackathon
        </p>
        <p className="mt-2 text-xs text-gray-400">
          This is a clone made for educational and non-commercial purposes.
        </p>
      </div>
    </footer>
  );
}
