export default function Grid() {
    return (
        <div
            className="bg-grid absolute w-full h-full z-[-50]"
            style={{
              backgroundSize: "200px",
              backgroundRepeat: "repeat",
              backgroundColor: "var(--background-color)",
            }}
            data-theme="light"
        />
    )
}