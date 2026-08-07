"use client";

import { useState } from "react";
import { ApiError, createQuestion } from "@/lib/api";
import { SendIcon } from "@/components/icons/VacancyIcons";

const NAME_PATTERN = /^[A-Za-zА-Яа-яЁёʼʻ'\s-]+$/;
const PHONE_DIGITS_PATTERN = /^\d{9}$/;

export function SendMessageModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [notRobot, setNotRobot] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    message?: string;
    notRobot?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  if (!open) return null;

  function handleClose() {
    setSubmitted(false);
    setServerError(null);
    setErrors({});
    onClose();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);

    const trimmedName = name.trim();
    const digits = phone.replace(/\D/g, "");
    const trimmedMessage = message.trim();
    const nextErrors: typeof errors = {};

    if (!trimmedName) {
      nextErrors.name = "Введите ваше имя";
    } else if (!NAME_PATTERN.test(trimmedName)) {
      nextErrors.name = "Имя не должно содержать цифры или символы";
    }

    if (!PHONE_DIGITS_PATTERN.test(digits)) {
      nextErrors.phone = "Введите корректный номер телефона";
    }

    if (!trimmedMessage) {
      nextErrors.message = "Введите текст вопроса";
    }

    if (!notRobot) {
      nextErrors.notRobot = "Подтвердите, что вы не робот";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await createQuestion({
        fullName: trimmedName,
        phoneNumber: `+998${digits}`,
        questions: trimmedMessage,
      });
      setSubmitted(true);
      setName("");
      setPhone("");
      setMessage("");
      setNotRobot(false);
    } catch (err) {
      setServerError(err instanceof ApiError ? err.message : "Не удалось отправить, проверьте соединение");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-[483px] rounded-lg bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-ink">Отправить сообщение</h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Закрыть"
            className="flex h-6 w-6 items-center justify-center text-ink"
          >
            <span className="rotate-45 text-2xl leading-none">+</span>
          </button>
        </div>

        {submitted ? (
          <div className="mt-6 flex flex-col items-center gap-4 py-6 text-center">
            <p className="text-lg font-medium text-ink">
              Спасибо! Ваше сообщение отправлено.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="flex h-11 w-fit items-center justify-center rounded bg-primary px-6 text-base font-bold text-white"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-base font-medium text-ink">Ф.И.О</span>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="Введите ваше полное имя"
                className={`h-11 rounded-md border bg-surface-soft px-4 text-base text-ink placeholder:text-muted ${
                  errors.name ? "border-red-500" : "border-border"
                }`}
              />
              {errors.name && <span className="text-sm font-medium text-red-500">{errors.name}</span>}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-base font-medium text-ink">Номер телефона</span>
              <div
                className={`flex h-11 items-center rounded-md border bg-surface-soft ${
                  errors.phone ? "border-red-500" : "border-border"
                }`}
              >
                <span className="flex h-full items-center border-r border-border px-3 text-base text-ink">
                  +998
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  placeholder="(00) 000 00 00"
                  className="h-full flex-1 bg-transparent px-3 text-base text-ink placeholder:text-muted"
                />
              </div>
              {errors.phone && <span className="text-sm font-medium text-red-500">{errors.phone}</span>}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-base font-medium text-ink">Текст вопроса</span>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                }}
                placeholder="Введите ваш вопрос"
                rows={4}
                className={`resize-none rounded-md border bg-surface-soft px-4 py-3 text-base text-ink placeholder:text-muted ${
                  errors.message ? "border-red-500" : "border-border"
                }`}
              />
              {errors.message && (
                <span className="text-sm font-medium text-red-500">{errors.message}</span>
              )}
            </label>

            <label className="flex items-center gap-3 rounded-md border border-border bg-surface-soft px-4 py-4">
              <input
                type="checkbox"
                checked={notRobot}
                onChange={(e) => {
                  setNotRobot(e.target.checked);
                  if (errors.notRobot) setErrors((prev) => ({ ...prev, notRobot: undefined }));
                }}
                className="h-5 w-5 rounded border-border accent-primary"
              />
              <span className="text-base text-ink">Я не робот</span>
            </label>
            {errors.notRobot && (
              <span className="text-sm font-medium text-red-500">{errors.notRobot}</span>
            )}
            {serverError && <p className="text-sm font-medium text-red-500">{serverError}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="flex h-12 w-[200px] cursor-pointer items-center justify-center gap-2 self-end rounded bg-primary text-base font-bold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Отправка..." : "Отправить"}
              <SendIcon className="h-5 w-5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
