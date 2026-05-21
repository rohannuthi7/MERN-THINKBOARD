export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        day: "short",
        month: "numeric",
        year: "numeric"
    });
}