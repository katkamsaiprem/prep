import { useCart } from "@/Day1/api's/context/CartContext";

export function Navbar({ onViewChange, view }) {
    const { state } = useCart();

    return (
        <nav style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "#fff",
            borderBottom: "1px solid #e5e7eb",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <h1 style={{ fontSize: "18px", fontWeight: "700", margin: 0 }}>
                🛍️ ShopZone
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <button
                    onClick={() => onViewChange("shop")}
                    style={{
                        padding: "6px 14px",
                        borderRadius: "6px",
                        border: "1px solid #d1d5db",
                        background: view === "shop" ? "#111827" : "#f3f4f6",
                        color: view === "shop" ? "#fff" : "#374151",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: "500",
                    }}
                >
                    Shop
                </button>

                <button
                    onClick={() => onViewChange("cart")}
                    style={{
                        padding: "6px 14px",
                        borderRadius: "6px",
                        border: "1px solid #d1d5db",
                        background: view === "cart" ? "#111827" : "#f3f4f6",
                        color: view === "cart" ? "#fff" : "#374151",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: "500",
                        position: "relative",
                    }}
                >
                     Cart
                    {state.totalItems > 0 && (
                        <span style={{
                            position: "absolute",
                            top: "-8px",
                            right: "-8px",
                            background: "#ef4444",
                            color: "#fff",
                            borderRadius: "50%",
                            width: "18px",
                            height: "18px",
                            fontSize: "11px",
                            fontWeight: "700",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            {state.totalItems}
                        </span>
                    )}
                </button>

                <span style={{ fontSize: "13px", color: "#6b7280" }}>
                    Total:{" "}
                    <span style={{ fontWeight: "700", color: "#16a34a" }}>
                        ${state.totalPrice.toFixed(2)}
                    </span>
                </span>
            </div>
        </nav>
    );
}
