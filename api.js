const apiBaseUrl = "http://localhost:6500";

export const api = {
  registerUser: async (formData) => {
    const response = await fetch(`${apiBaseUrl}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      alert("successfull response!!!!!");
      return response.json();
    }
  },
  loginUser: async (formData) => {
    const response = await fetch(`${apiBaseUrl}/users/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      alert("successfull response!!!!!");
      return response.json();
    }
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
      alert("successfull response!!!!!");
      return response.json();
    }
  },
  addEmployee: async (formData) => {
    console.log("addemployefn");
    const response = await fetch(`${apiBaseUrl}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      alert("successfull response!!!!!");
      return response.json();
    }
  },
  makeAdmin: async (id, formData) => {
    const response = await fetch(`${apiBaseUrl}/users/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      alert("successfull response!!!!!");
      return response.json();
    }
  },
  updateEmployee: async (id, formData) => {
    const response = await fetch(`${apiBaseUrl}/users/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      alert("successfull response!!!!!");
      return response.json();
    }
  },
  deleteEmployee: async (id) => {
    const response = await fetch(`${apiBaseUrl}/users/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      alert("successfull response!!!!!");
      return response.json();
    }
  },
  getAllReviews: async () => {
    const response = await fetch(`${apiBaseUrl}/reviews`);
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      alert("successfull response!!!!!");
      return response.json();
    }
  },
  createReview: async (formData) => {
    const response = await fetch(`${apiBaseUrl}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      alert("successfull response!!!!!");
      return response.json();
    }
  },
  updateReview: async (id, formData) => {
    const response = await fetch(`${apiBaseUrl}/reviews/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      alert("successfull response!!!!!");
      return response.json();
    }
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
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      alert("successfull response!!!!!");
      return response.json();
    }
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
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      alert("successfull response!!!!!");
      return response.json();
    }
  },
  getReviewsForReviewer: async (reviewerId) => {
    const response = await fetch(
      `${apiBaseUrl}/reviews/reviewer/${reviewerId}`
    );
    if (!response.ok) {
      alert("failed response!!!!!");
    } else {
      alert("successfull response!!!!!");
      return response.json();
    }
  },
};
