"use client";

import { useState } from "react";
import Link from "next/link";
import { HeartIcon, ReceiptIcon } from "@/components/icons/DonateIcons";
import { ApiError, createDonation, type PaymentProvider } from "@/lib/api";

const stats = [
  {
    icon: "/icons/donate/stat-people.svg",
    value: "200+",
    label: "Люди уже пожертвовали",
  },
  {
    icon: "/icons/donate/stat-moneys.svg",
    value: "251 300 000 UZS+",
    label: "Сумма пожертвования",
    action: "Список",
  },
  {
    icon: "/icons/donate/stat-group.svg",
    value: "1 000+",
    label: "Благодарных мигрантов",
  },
  {
    icon: "/icons/donate/stat-money-time.svg",
    value: "12 520 000 UZS",
    label: "Сумма пожертвования за этот месяц",
  },
];

const paymentMethods = [
  { id: "payme", logo: "/icons/donate/payme.svg", alt: "Payme" },
  { id: "oson", logo: "/icons/donate/oson.svg", alt: "Oson" },
  { id: "click", logo: "/icons/donate/click.svg", alt: "Click" },
] as const;

const quickAmounts = ["1 000 000", "500 000", "100 000"];

const NAME_PATTERN = /^[A-Za-zА-Яа-яЁёʼʻ'\s-]+$/;
const AMOUNT_PATTERN = /^[\d\s]+$/;

export function DonateSection() {
  const [payment, setPayment] = useState<PaymentProvider | null>(null);
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<{ name?: string; amount?: string; payment?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(false);
    setServerError(null);

    const trimmedName = name.trim();
    const trimmedAmount = amount.trim();
    const nextErrors: { name?: string; amount?: string; payment?: string } = {};

    if (!trimmedName) {
      nextErrors.name = "Введите ваше имя";
    } else if (!NAME_PATTERN.test(trimmedName)) {
      nextErrors.name = "Имя не должно содержать цифры или символы";
    }

    if (!trimmedAmount) {
      nextErrors.amount = "Введите сумму вклада";
    } else if (!AMOUNT_PATTERN.test(trimmedAmount)) {
      nextErrors.amount = "Сумма должна содержать только цифры";
    }

    if (!payment) {
      nextErrors.payment = "Выберите способ оплаты";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await createDonation({
        fullName: trimmedName,
        amount: Number(trimmedAmount.replace(/\s/g, "")),
        date: new Date().toISOString().slice(0, 10),
        paidBy: payment!,
      });
      setSubmitted(true);
      setName("");
      setAmount("");
      setPayment(null);
    } catch (err) {
      setServerError(err instanceof ApiError ? err.message : "Не удалось отправить, проверьте соединение");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mx-auto max-w-(--container-page) py-8">
      <div className="flex items-center gap-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/donate/musofir-seal.svg" alt="" width={60} height={88} />
        <div className="flex flex-col gap-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/donate/musofir-word.svg" alt="Musofir" width={169} height={27} />
          <span className="text-[9px] font-medium uppercase tracking-wide text-ink">
            Фонд поддержки узбекистанцев за границей
          </span>
        </div>
      </div>

      <h2 className="mt-3 text-xl font-medium text-ink">
        Внесите свой вклад в поддержку наших соратников за границей
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 rounded-lg border border-border bg-background p-6">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-xl font-bold text-ink">Статистика пожертвований</h3>
            <p className="text-sm text-muted">
              Информация актульная на период: 23.01.2022
            </p>
          </div>

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-lg border border-border p-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={stat.icon} alt="" width={54} height={54} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-ink">{stat.value}</span>
                <span className="text-base text-[#565E6A]">{stat.label}</span>
              </div>
              {stat.action && (
                <Link
                  href="/about/donations"
                  className="ml-auto flex cursor-pointer items-center gap-1.5 rounded-md bg-primary/10 px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/20"
                >
                  {stat.action}
                  <ReceiptIcon className="h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 rounded-lg border border-border bg-background p-6">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-2xl font-bold text-ink">Внесите свой вклад</h3>
            <p className="text-sm text-muted">Заполните форму и отправьте средства</p>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-base font-medium text-ink">Ваше имя</span>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                setSubmitted(false);
              }}
              placeholder="Введите ваше полное имя"
              className={`h-11 rounded-md border bg-surface-soft px-4 text-base text-ink placeholder:text-muted ${
                errors.name ? "border-red-500" : "border-border"
              }`}
            />
            {errors.name && <span className="text-sm font-medium text-red-500">{errors.name}</span>}
          </label>

          <div className="flex flex-col gap-2">
            <span className="text-base font-medium text-ink">Как будете оплачивать?</span>
            <div className="flex gap-4">
              {paymentMethods.map((method) => {
                const selected = payment === method.id;
                return (
                  <label
                    key={method.id}
                    className={`flex h-11 flex-1 cursor-pointer items-center justify-between rounded-md border px-3 transition-colors ${
                      selected ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={method.logo} alt={method.alt} className="h-5 w-auto" />
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        selected ? "border-primary" : "border-border bg-surface-soft"
                      }`}
                    >
                      {selected && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
                    </span>
                    <input
                      type="radio"
                      name="paymentProvider"
                      value={method.id}
                      checked={selected}
                      onChange={() => {
                        setPayment(method.id);
                        if (errors.payment) setErrors((prev) => ({ ...prev, payment: undefined }));
                        setSubmitted(false);
                      }}
                      className="sr-only"
                    />
                  </label>
                );
              })}
            </div>
            {errors.payment && <span className="text-sm font-medium text-red-500">{errors.payment}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-ink">Сумма поддержки (UZS)</span>
              <div className="flex gap-2">
                {quickAmounts.map((quickAmount) => {
                  const selected = amount === quickAmount;
                  return (
                    <button
                      key={quickAmount}
                      type="button"
                      onClick={() => {
                        setAmount(quickAmount);
                        if (errors.amount) setErrors((prev) => ({ ...prev, amount: undefined }));
                        setSubmitted(false);
                      }}
                      className={`cursor-pointer rounded-full px-2 py-1 text-sm font-medium transition-colors ${
                        selected
                          ? "bg-primary text-white"
                          : "bg-[#ECEFF3] text-muted hover:bg-primary/15 hover:text-primary"
                      }`}
                    >
                      {quickAmount}
                    </button>
                  );
                })}
              </div>
            </div>
            <input
              type="text"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                if (errors.amount) setErrors((prev) => ({ ...prev, amount: undefined }));
                setSubmitted(false);
              }}
              placeholder="Введите сумму вклада"
              className={`h-11 rounded-md border bg-surface-soft px-4 text-base text-ink placeholder:text-muted ${
                errors.amount ? "border-red-500" : "border-border"
              }`}
            />
            {errors.amount && <span className="text-sm font-medium text-red-500">{errors.amount}</span>}
          </div>

          <p className="text-sm font-medium text-muted">
            Нажимая отправить, вы соглашаетесь с правиламии пользования
          </p>

          {submitted && (
            <p className="text-sm font-medium text-green-600">
              Спасибо! Ваша заявка принята.
            </p>
          )}
          {serverError && <p className="text-sm font-medium text-red-500">{serverError}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="flex h-12 cursor-pointer items-center justify-center gap-1.5 rounded-md bg-primary text-base font-bold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <HeartIcon className="h-5 w-5" />
            {submitting ? "Отправка..." : "Отправить"}
          </button>
        </form>
      </div>
    </section>
  );
}
