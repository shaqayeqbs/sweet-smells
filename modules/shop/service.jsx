export async function getAllPerfumes() {
 
  const controller = new AbortController();
  
  setTimeout(() => {
    controller.abort();
  }, 25000);

  
  const res = await fetch("http://localhost:3000/api/perfumes", {
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
