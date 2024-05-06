export default function getOptions(selectionType) {
  switch (selectionType) {
    case "Role":
      return [
        { value: "frontend", label: "Frontend" },
        { value: "backend", label: "Backend" },
        { value: "ios", label: "iOS" },
        { value: "android", label: "Android" },
        { value: "tech lead", label: "Tech Lead" },
      ];
    case "Remote":
      return [
        { value: "remote", label: "Remote" },
        { value: "non-remote", label: "Non-remote" },
      ];
    case "Experience":
      return [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
        { value: 6, label: "6" },
        { value: 7, label: "7" },
        { value: 8, label: "8" },
        { value: 9, label: "9" },
      ];
    case "Minimum Base Pay Salary":
      return [
        { value: 0, label: "0L" },
        { value: 10, label: "10L" },
        { value: 20, label: "20L" },
        { value: 30, label: "30L" },
        { value: 40, label: "40L" },
        { value: 50, label: "50L" },
        { value: 60, label: "60L" },
        { value: 70, label: "70L" },
      ];
    case "Number of Employees":
      return [
        { value: 1, label: "1-10" },
        { value: 2, label: "11-20" },
        { value: 3, label: "21-50" },
        { value: 4, label: "51-100" },
        { value: 5, label: "101-200" },
        { value: 6, label: "201-500" },
        { value: 7, label: "500+" },
      ];
    default:
      return [];
  }
}
