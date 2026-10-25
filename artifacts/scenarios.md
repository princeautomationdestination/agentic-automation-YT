# Manual Test Scenarios — US-HRM-001

**Story:** Automate the OrangeHRM login flow to verify authentication stability.  
**Application:** [OrangeHRM demo login](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

## Preconditions

- The OrangeHRM demo site is reachable.
- A valid test account is available for the positive scenario. Use credentials supplied for the test environment; do not assume or publish credentials.
- The tester can confirm whether the application has reached an authenticated state.

## Positive test cases

### TC-01 — Open the login page

**Steps**
1. Navigate to the application URL.
2. Observe the login form.

**Expected result**
- The login page loads.
- Username and password inputs and a Login control are available.

### TC-02 — Log in with valid credentials

**Steps**
1. Enter the valid test account's username.
2. Enter its password.
3. Select Login.

**Expected result**
- Authentication succeeds.
- The application displays its authenticated area rather than the login form.

## Negative test cases

### TC-03 — Submit an unknown username and a valid password

**Steps**
1. Enter a username that is not associated with an account.
2. Enter a valid test account's password.
3. Select Login.

**Expected result**
- Authentication is rejected and the application does not enter an authenticated state.
- The login page provides an appropriate failure indication.

### TC-04 — Submit a valid username and an incorrect password

**Steps**
1. Enter the valid test account's username.
2. Enter an incorrect password.
3. Select Login.

**Expected result**
- Authentication is rejected and the application does not enter an authenticated state.
- The login page provides an appropriate failure indication.

### TC-05 — Submit an unknown username and an incorrect password

**Steps**
1. Enter a username that is not associated with an account.
2. Enter an incorrect password.
3. Select Login.

**Expected result**
- Authentication is rejected and the application does not enter an authenticated state.
- The login page provides an appropriate failure indication.

### TC-06 — Submit with the username empty

**Steps**
1. Leave the username empty.
2. Enter a password.
3. Select Login.

**Expected result**
- Authentication does not succeed.
- The form indicates that the username is required or otherwise prevents submission.

### TC-07 — Submit with the password empty

**Steps**
1. Enter a username.
2. Leave the password empty.
3. Select Login.

**Expected result**
- Authentication does not succeed.
- The form indicates that the password is required or otherwise prevents submission.

### TC-08 — Submit with both fields empty

**Steps**
1. Leave both username and password empty.
2. Select Login.

**Expected result**
- Authentication does not succeed.
- The form indicates that the required credentials are missing or otherwise prevents submission.

## Scope notes

- These cases cover only the login flow described by US-HRM-001.
- No acceptance criteria beyond the story statement were provided. Exact validation wording, account lockout behavior, CAPTCHA behavior, and post-login features are therefore not asserted.
