// Alex's birthday. PLACEHOLDER: replace with his real birthday.
export const ALEX_BIRTHDAY = { year: 2004, month: 12, day: 1 };

// Works out someone's current age from their birthday.
export function getAge(year: number, month: number, day: number): number {
  const today = new Date();
  let age = today.getFullYear() - year;

  // JavaScript counts months 0–11, so add 1 to compare with a normal month number.
  const thisMonth = today.getMonth() + 1;
  const birthdayPassed =
    thisMonth > month || (thisMonth === month && today.getDate() >= day);

  if (!birthdayPassed) age--; // hasn't had a birthday yet this year
  return age;
}

// Alex's age right now.
export function getAlexAge(): number {
  return getAge(ALEX_BIRTHDAY.year, ALEX_BIRTHDAY.month, ALEX_BIRTHDAY.day);
}