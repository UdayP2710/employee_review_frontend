const apiBaseUrl = "http://localhost:6500";

export const api = {
  registerUser: async (formData) => {
    const response = await fetch(`${apiBaseUrl}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    handleRespone(response);
  },
  loginUser: async (formData) => {
    const response = await fetch(`${apiBaseUrl}/users/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    handleRespone(response);
  },
  getAllEmployees: async () => {
    console.log("getallfrontend");
    const response = await fetch(`${apiBaseUrl}/users`, {
      method: "GET",
      credentials: "include",
    });
    handleRespone(response);
  },
  addEmployee: async (formData) => {
    console.log("addemployefn");
    const response = await fetch(`${apiBaseUrl}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    handleRespone(response);
  },
  makeAdmin: async (id, formData) => {
    const response = await fetch(`${apiBaseUrl}/users/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    handleRespone(response);
  },
  updateEmployee: async (id, formData) => {
    const response = await fetch(`${apiBaseUrl}/users/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    handleRespone(response);
  },
  deleteEmployee: async (id) => {
    const response = await fetch(`${apiBaseUrl}/users/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    handleRespone(response);
  },
  getAllReviews: async () => {
    const response = await fetch(`${apiBaseUrl}/reviews`);
    handleRespone(response);
  },
  createReview: async (formData) => {
    const response = await fetch(`${apiBaseUrl}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    handleRespone(response);
  },
  updateReview: async (id, formData) => {
    const response = await fetch(`${apiBaseUrl}/reviews/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    handleRespone(response);
  },
  assignReviewer: async (id, formData) => {
    const response = await fetch(
      `${apiBaseUrl}/reviews/assign-reviewer/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    handleRespone(response);
  },
  submitFeedback: async (id, formData) => {
    const response = await fetch(
      `${apiBaseUrl}/reviews/submit-feedback/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    handleRespone(response);
  },
  getReviewsForReviewer: async (reviewerId) => {
    const response = await fetch(
      `${apiBaseUrl}/reviews/reviewer/${reviewerId}`
    );
    handleRespone(response);
  },
};
function handleRespone(response) {
  if (!response.ok) {
    alert("failed response!!!!!");
  } else {
    return response.json();
  }
}
