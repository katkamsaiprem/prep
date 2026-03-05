import { useCart } from "@/Day1/api's/context/CartContext";

export function CartPage() {
    const { state, dispatch } = useCart();

    if (state.items.length === 0) {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "64px 16px",
                color: "#6b7280",
                gap: "12px",
            }}>
                <span style={{ fontSize: "48px" }}>🛒</span>
                <p style={{ fontSize: "18px", fontWeight: "600", margin: 0 }}>Your cart is empty</p>
                <p style={{ fontSize: "14px", margin: 0 }}>Add some products to get started!</p>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "24px 16px" }}>

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h2 style={{ fontSize: "22px", fontWeight: "700", margin: 0 }}>Your Cart</h2>
                <button
                    onClick={() => dispatch({ type: "CLEAR_CART" })}
                    style={{
                        padding: "6px 14px",
                        background: "#ef4444",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: "500",
                    }}
                >
                    Clear Cart
                </button>
            </div>

           
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {state.items.map((item) => (
                    <div key={item.id} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "12px",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                        background: "#fff",
                    }}>
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: "56px", height: "56px", objectFit: "contain", borderRadius: "4px" }}
                        />

                        <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{
                                margin: "0 0 2px",
                                fontSize: "14px",
                                fontWeight: "600",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}>
                                {item.title}
                            </p>
                            <p style={{ margin: "0 0 2px", fontSize: "12px", color: "#6b7280", textTransform: "capitalize" }}>
                                {item.category}
                            </p>
                            <p style={{ margin: 0, fontSize: "13px", fontWeight: "700", color: "#16a34a" }}>
                                ${item.price} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>

                        <button
                            onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
                            style={{
                                padding: "5px 12px",
                                background: "#fff",
                                color: "#ef4444",
                                border: "1px solid #fca5a5",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontSize: "12px",
                                fontWeight: "500",
                                flexShrink: 0,
                            }}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

          
            <div style={{
                marginTop: "20px",
                padding: "16px",
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
            }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#6b7280", marginBottom: "6px" }}>
                    <span>Total Items</span>
                    <span style={{ fontWeight: "600", color: "#111827" }}>{state.totalItems}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", fontWeight: "700" }}>
                    <span>Total Price</span>
                    <span style={{ color: "#16a34a" }}>${state.totalPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}
