// Validates if the input is a valid number
export const validateInput = (hours: string): boolean => {
  const parsed = parseFloat(hours);
  return !isNaN(parsed) && parsed > 0;
};

// Conditional Logic (If/Else) for feedback
export const getFeedbackMessage = (hours: number): string => {
  if (hours >= 5) {
    return "Wow! You are a hard worker! 🌟";
  } else if (hours >= 3) {
    return "Great job! Keep up the momentum. 👍";
  } else {
    return "Good start! Every minute counts. 🌱";
  }
};