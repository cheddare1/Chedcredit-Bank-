export interface User {
  id: string
  name: string
  email: string
  password: string
  verificationCode: string
  accountNumber: string
  routingNumber: string
  balance: number
  businessBalance: number
}

export const userAccounts: User[] = [
  {
    id: "1",
    name: "Michael",
    email: "michaelclayton783@outlook.com",
    password: "Mikeclayton1965",
    verificationCode: "5940",
    accountNumber: "7822",
    routingNumber: "021000021",
    balance: 5942744,
    businessBalance: 22000000,
  },
  {
    id: "2",
    name: "Thomas",
    email: "thomasfree67@yahoo.com",
    password: "Thomas1947$",
    verificationCode: "1589",
    accountNumber: "9043",
    routingNumber: "021000021",
    balance: 15420.5,
    businessBalance: 85000,
  },
  {
    id: "3",
    name: "Cheddar",
    email: "ponodc34@yahoo.com",
    password: "Cheddar12$",
    verificationCode: "2289",
    accountNumber: "1718",
    routingNumber: "021000021",
    balance: 2500.75,
    businessBalance: 12000,
  },
]

export function authenticateUser(email: string, password: string): User | null {
  const user = userAccounts.find((u) => u.email === email && u.password === password)
  return user || null
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null

  const userEmail = localStorage.getItem("user_email")
  if (!userEmail) return null

  return userAccounts.find((u) => u.email === userEmail) || null
}

export function getUserByEmail(email: string): User | null {
  return userAccounts.find((u) => u.email === email) || null
}
