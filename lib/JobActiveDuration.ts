export const getJobActiveDuration = (createdAt: string): string => {
  const createdDate = new Date(createdAt);
  const now = new Date();

  let years = now.getFullYear() - createdDate.getFullYear();
  let months = now.getMonth() - createdDate.getMonth();
  let days = now.getDate() - createdDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} year${years > 1 ? "s" : ""}`);
  }

  if (months > 0) {
    parts.push(`${months} month${months > 1 ? "s" : ""}`);
  }

  if (days > 0) {
    parts.push(`${days} day${days > 1 ? "s" : ""}`);
  }

  return parts.length ? parts.join(", ") : "Today";
};
