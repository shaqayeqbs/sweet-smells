export async function getAllPerfumes() {
  const dev = process.env.NODE_ENV !== "production";

  const server = dev
    ? "http://localhost:3000"
    : "https://your_deployment.server.com";
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort();
  }, 25000);
  const res = await fetch(`${server}/api/perfumes`, {
    method: "GET",
    signal: controller.signal,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await res.json();
  if (response) {
    return response;
  } else {
    throw new Error(data.message || "Something went wrong!");
  }
}
