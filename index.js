function createLoginTracker(user) {
  let failed = 0;
  let locked = false;

  return (passwordAttempt) => {
    if (locked) {
      return 'Account locked due to too many failed login attempts';
    }

    if (passwordAttempt === user.password) {
      return 'Login successful';
    }

    failed += 1;
    if (failed <= 3) {
      return `Attempt ${failed}: Login failed`;
    }

    locked = true;
    return 'Account locked due to too many failed login attempts';
  };
}

module.exports = { createLoginTracker };