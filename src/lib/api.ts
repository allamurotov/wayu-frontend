const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export function uploadUrl(path: string | null | undefined): string {
  if (!path) return "";
  return `${API_URL}/uploads/${path}`;
}

export class ApiError extends Error {
  status: number;
  fields?: Record<string, string>;

  constructor(message: string, status: number, fields?: Record<string, string>) {
    super(message);
    this.status = status;
    this.fields = fields;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    const message = Array.isArray(body?.message) ? body.message.join(", ") : body?.message;
    throw new ApiError(message || "Что-то пошло не так, попробуйте позже", res.status);
  }

  if (res.status === 204) return undefined as T;
  return res.json();
}

export type PaymentProvider = "payme" | "click" | "oson";

export type Donation = {
  id: number;
  amount: number;
  fullName: string;
  date: string;
  paidBy: PaymentProvider;
};

export function createDonation(data: {
  amount: number;
  fullName: string;
  date: string;
  paidBy: PaymentProvider;
}) {
  return request<Donation>("/public/donations", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getAllDonations() {
  return request<Donation[]>("/public/donations?size=100", { cache: "no-store" });
}

export type NewsItem = {
  id: number;
  categoryId: number;
  countryId?: number | null;
  title: string;
  image: string;
  date: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export function getAllNews() {
  return request<NewsItem[]>("/public/news?size=100", { cache: "no-store" });
}

export function getOneNews(id: number) {
  return request<NewsItem>(`/public/news/${id}`, { cache: "no-store" });
}

export type VacancyType = "fullTime" | "partTime";

export type VacancyItem = {
  id: number;
  title: string;
  address: string;
  description: string;
  phoneNumber: string;
  type: VacancyType;
  salary: string;
  isActive: boolean;
  createdAt: string;
  updatedAt?: string;
};

export function vacancyTypeLabel(type: VacancyType): string {
  return type === "fullTime" ? "Полная ставка" : "0,5 ставка";
}

export function getAllVacancies() {
  return request<VacancyItem[]>("/public/vacancy?size=100", { cache: "no-store" });
}

export function getOneVacancy(id: number) {
  return request<VacancyItem>(`/public/vacancy/${id}`, { cache: "no-store" });
}

export type BranchItem = {
  id: number;
  countryId: number;
  representativeId: number;
  city: string;
  // Postgres `numeric` columns are returned as strings by the pg driver.
  latitude: string;
  longitude: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
};

export function getAllBranches() {
  return request<BranchItem[]>("/public/branches?size=100", { cache: "no-store" });
}

export function getOneBranch(id: number) {
  return request<BranchItem>(`/public/branches/${id}`, { cache: "no-store" });
}

export type RepresentativeItem = {
  id: number;
  fullName: string;
  image: string;
  email: string;
  phoneNumber: string;
  resume: string;
  createdAt: string;
  updatedAt: string;
};

export function getAllRepresentatives() {
  return request<RepresentativeItem[]>("/public/representative?size=100", { cache: "no-store" });
}

export type CountryItem = {
  id: number;
  title: string;
  flag: string;
};

export function getAllCountries() {
  return request<CountryItem[]>("/public/countries?size=100", { cache: "no-store" });
}

export type InstagramPostItem = {
  id: number;
  image: string;
  link: string;
  createdAt: string;
  updatedAt: string;
};

export function getAllInstagramPosts() {
  return request<InstagramPostItem[]>("/public/instagram-posts?size=100", { cache: "no-store" });
}

export type Question = {
  id: number;
  fullName: string;
  phoneNumber: string;
  email?: string;
  questions: string;
};

export function createQuestion(data: {
  fullName: string;
  phoneNumber: string;
  email?: string;
  questions: string;
}) {
  return request<Question>("/public/question", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export type EventItem = {
  id: number;
  categoryId: number;
  title: string;
  content: string;
  image: string;
  date: string;
  address: string;
  createdAt: string;
  updatedAt?: string;
};

export function getAllEvents() {
  return request<EventItem[]>("/public/event?size=100", { cache: "no-store" });
}

export type EventCategoryItem = {
  id: number;
  title: string;
};

export function getAllEventCategories() {
  return request<EventCategoryItem[]>("/public/event-category?size=100", { cache: "no-store" });
}
