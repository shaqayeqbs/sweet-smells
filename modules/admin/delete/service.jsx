export async function deletePerfume(data) {
  console.log(data, "dataaaaaaaaaaaaaaaaa");
  try {
    const res = await fetch("/api/admin/delete/" + data, {
      method: "POST",
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
