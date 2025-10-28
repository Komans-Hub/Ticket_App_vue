// Form validation utilities
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  if (!password || password.length === 0) {
    return { isValid: false, message: 'Password is required' };
  }
  if (password.length < 5) {
    return { isValid: false, message: 'Password must be at least 5 characters' };
  }
  return { isValid: true, message: '' };
};

export const validateLoginForm = (formData) => {
  const errors = {};

  if (!formData.email || formData.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  const passwordValidation = validatePassword(formData.password);
  if (!passwordValidation.isValid) {
    errors.password = passwordValidation.message;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateSignupForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim() === '') {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!formData.email || formData.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  const passwordValidation = validatePassword(formData.password);
  if (!passwordValidation.isValid) {
    errors.password = passwordValidation.message;
  }

  if (!formData.confirmPassword || formData.confirmPassword === '') {
    errors.confirmPassword = 'Please confirm your password';
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateTicketForm = (ticketData) => {
  const errors = {};

  if (!ticketData.title || ticketData.title.trim() === '') {
    errors.title = 'Title is required';
  } else if (ticketData.title.trim().length < 3) {
    errors.title = 'Title must be at least 3 characters';
  } else if (ticketData.title.length > 100) {
    errors.title = 'Title must not exceed 100 characters';
  }

  if (!ticketData.status || ticketData.status === '') {
    errors.status = 'Status is required';
  } else if (!['open', 'in_progress', 'closed'].includes(ticketData.status)) {
    errors.status = 'Invalid status value';
  }

  if (ticketData.description && ticketData.description.length > 500) {
    errors.description = 'Description must not exceed 500 characters';
  }

  if (ticketData.priority && !['low', 'medium', 'high'].includes(ticketData.priority)) {
    errors.priority = 'Invalid priority value';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};