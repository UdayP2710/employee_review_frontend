import { api } from "./api.js";
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const adminDashboard = document.getElementById("admin-dashboard");
  const employeeDashboard = document.getElementById("employee-dashboard");
  const employeeForm = document.getElementById("employee-form");
  const reviewForm = document.getElementById("review-form");
  const feedbackForm = document.getElementById("feedback-form");
  let currentUser = null;
  // Helper functions
  const showElement = (element) => (element.style.display = "block");
  const hideElement = (element) => (element.style.display = "none");
  const logout = () => {
    currentUser = null;
    hideElement(adminDashboard);
    hideElement(employeeDashboard);
    showElement(loginForm);
  };
  const loadEmployees = async () => {
    const employees = await api.getAllEmployees();
    console.log(employees);
    console.log(typeof employees);
    const employeeList = document.getElementById("employee-list");
    employeeList.innerHTML = employees.users_data
      .map(
        (employee) => `
            <li>
                ${employee.name} (${employee.email}) - ${employee.role}
                <button onclick="editEmployee('${employee._id}')">Edit</button>
                <button onclick="deleteEmployee('${employee._id}')">Delete</button>
            </li>
        `
      )
      .join("");
    const reviewEmployeeSelect = document.getElementById("review-employee");
    const reviewReviewersSelect = document.getElementById("review-reviewers");
    reviewEmployeeSelect.innerHTML = employees.users_data
      .map(
        (employee) => `
            <option value="${employee._id}">${employee.name}</option>
        `
      )
      .join("");
    reviewReviewersSelect.innerHTML = employees.users_data
      .map(
        (employee) => `
            <option value="${employee._id}">${employee.name}</option>
        `
      )
      .join("");
  };

  const loadReviews = async () => {
    const reviews = await api.getAllReviews();
    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = reviews
      .map(
        (review) => `
            <li>
                Review for ${review.employee.name}
                <ul>
                    ${review.feedback
                      .map(
                        (fb) => `
                        <li>${fb.reviewer.name}: ${fb.text}</li>
                    `
                      )
                      .join("")}
                </ul>
            </li>
        `
      )
      .join("");
  };
  const loadFeedbacks = async () => {
    const reviews = await api.getReviewsForReviewer(currentUser._id);
    const feedbackReviewSelect = document.getElementById("feedback-review");
    const feedbackList = document.getElementById("feedback-list");
    feedbackReviewSelect.innerHTML = reviews
      .map(
        (review) => `
            <option value="${review._id}">Review for ${review.employee.name}</option>
        `
      )
      .join("");
    feedbackList.innerHTML = reviews
      .map(
        (review) => `
            <li>
                Review for ${review.employee.name}
                <ul>
                    ${review.feedback
                      .map(
                        (fb) => `
                        <li>${fb.reviewer.name}: ${fb.text}</li>
                    `
                      )
                      .join("")}
                </ul>
            </li>
        `
      )
      .join("");
  };

  // Event listeners
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const user = await api.loginUser({ email, password });
    console.log(user);
    if (user.status === true) {
      currentUser = user.user;
      hideElement(loginForm);
      if (currentUser.role === "admin") {
        showElement(adminDashboard);
        loadEmployees();
        loadReviews();
      } else {
        showElement(employeeDashboard);
        loadFeedbacks();
      }
    } else {
      alert("Invalid credentials");
    }
  });

  employeeForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("employee-name").value;
    const email = document.getElementById("employee-email").value;
    const role = document.getElementById("employee-role").value;
    await api.addEmployee({ name, email, role });
    loadEmployees();
  });

  reviewForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const employeeId = document.getElementById("review-employee").value;
    const reviewerIds = Array.from(
      document.getElementById("review-reviewers").selectedOptions
    ).map((option) => option.value);
    await api.createReview({ employeeId, reviewerIds });
    loadReviews();
  });

  feedbackForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const reviewId = document.getElementById("feedback-review").value;
    const text = document.getElementById("feedback-text").value;
    await api.submitFeedback(reviewId, { reviewerId: currentUser._id, text });
    loadFeedbacks();
  });

  window.editEmployee = async (id) => {
    const employee = await api.getEmployeeById(id);
    document.getElementById("employee-name").value = employee.name;
    document.getElementById("employee-email").value = employee.email;
    document.getElementById("employee-role").value = employee.role;
    employeeForm.onsubmit = async (e) => {
      e.preventDefault();
      const name = document.getElementById("employee-name").value;
      const email = document.getElementById("employee-email").value;
      const role = document.getElementById("employee-role").value;
      await api.updateEmployee(id, { name, email, role });
      loadEmployees();
    };
  };

  window.deleteEmployee = async (id) => {
    await api.deleteEmployee(id);
    loadEmployees();
  };

  window.logout = logout;
});
