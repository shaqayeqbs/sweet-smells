export async function getAllPerfumes() {
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort();
  }, 15000);
  const res = await fetch("http://localhost:3000/api/perfumes", {
    method: "GET",
    signal: controller.signal,
    headers: {
      "Content-Type": "application/json",
      domain: "localhost",
    },
  });
  const response = await res.json();
  if (response) {
    return response;
  } else if (!response) {
    throw new Error(data.message || "Something went wrong!");
  }
}
