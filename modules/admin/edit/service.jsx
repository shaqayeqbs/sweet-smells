export async function EditPerfume(data) {
  try {
    const res = await fetch("/api/admin/edit/" + data.id, {
      method: "PATCH",
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
    throw new Error(error || "lanat behesh:)!");
  }
}
