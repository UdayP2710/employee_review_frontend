const apiBaseUrl = "http://localhost:6500";

export const api = {
  registerUser: async (formData) => {
    const response = await fetch(`${apiBaseUrl}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return response.json();
  },
  loginUser: async (formData) => {
    const response = await fetch(`${apiBaseUrl}/users/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return response.json();
  },
  getAllEmployees: async () => {
    console.log("getallfrontend");
    const response = await fetch(`${apiBaseUrl}/users`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      return response.json();
    }
  },
  addEmployee: async (formData) => {
    console.log("addemployeefn");
    const response = await fetch(`${apiBaseUrl}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return response.json();
  },
  makeAdmin: async (id, formData) => {
    const response = await fetch(`${apiBaseUrl}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return response.json();
  },
  updateEmployee: async (id, formData) => {
    const response = await fetch(`${apiBaseUrl}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return response.json();
  },
  deleteEmployee: async (id) => {
    const response = await fetch(`${apiBaseUrl}/users/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
  getAllReviews: async () => {
    const response = await fetch(`${apiBaseUrl}/reviews`);
    return response.json();
  },
  createReview: async (formData) => {
    const response = await fetch(`${apiBaseUrl}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return response.json();
  },
  updateReview: async (id, formData) => {
    const response = await fetch(`${apiBaseUrl}/reviews/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return response.json();
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
    return response.json();
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
    return response.json();
  },
  getReviewsForReviewer: async (reviewerId) => {
    const response = await fetch(
      `${apiBaseUrl}/reviews/reviewer/${reviewerId}`
    );
    return response.json();
  },
};
