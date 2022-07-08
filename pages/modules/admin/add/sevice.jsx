export async function AddPerfume(data) {
  try {
    const controller = new AbortController();
    setTimeout(() => {
      controller.abort();
    }, 25000);

    const res = await fetch("/api/admin/add-perfume", {
      method: "POST",
      signal: controller.signal,
      body: JSON.stringify({
        data,
      }),
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
  } catch (error) {
    throw new Error(error || "lanat behesh!");
  }
}
