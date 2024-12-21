export default function Grid() {
    return (
        <div
            className="bg-grid fixed inset-0 z-[-50]"
            style={{
                backgroundSize: "200px",
                backgroundRepeat: "repeat",
                backgroundColor: "var(--background-color)",
            }}
            data-theme="light"
        />
    );
}