import "../styles/components.css";

export default function Footer({ total }) {
  return (
    <footer className="footer">
      <p>
        Total: ${
          typeof total === "number" ? total.toFixed(2) : "0.00"
        }
      </p>
      <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
    </footer>
  );
}
