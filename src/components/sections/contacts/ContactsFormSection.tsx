"use client";

import { useState } from "react";
import { ApiError, createQuestion } from "@/lib/api";

const LEGAL_PARAGRAPHS = [
  "Обеспечение реализации Закона Республики Узбекистан «Об обращениях физических и юридических лиц», создание благоприятных условий для приема представителей физических и юридических лиц, рассмотрения заявлений, жалоб и предложений, непосредственно связанных с деятельностью центра, а также как процесс обеспечения информационной безопасности. В целях совершенствования процесса помнить перед направлением обращения, в соответствии с Законом Республики Узбекистан «Об обращениях физических и юридических лиц»:",
  "В обращениях должны быть указаны сведения о фамилии, имени, отчестве, месте жительства граждан, а также изложена суть предложения, заявления или жалобы. Заявки без этой информации считаются анонимными письмами и рассматриваться не будут.",
];

const NAME_PATTERN = /^[A-Za-zА-Яа-яЁёʼʻ'\s-]+$/;
const PHONE_DIGITS_PATTERN = /^\d{9}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactsPressCard() {
  return (
    <div className="flex-1">
      <div className="flex gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/leadership/staff-baxtiyarov-placeholder.png"
          alt="Бахтияров Шохрух Бахтиярович"
          className="h-[197px] w-[166px] shrink-0 rounded-md border border-border object-cover"
        />
        <div>
          <p className="text-2xl font-bold leading-tight text-ink">Бахтияров Шохрух Бахтиярович</p>
          <p className="mt-2 text-base font-medium text-primary">Пресса</p>

          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <p className="text-sm text-muted">Номер телефона</p>
              <p className="mt-1 text-base font-bold text-ink">+998 (71) 200 70 07</p>
            </div>
            <div>
              <p className="text-sm text-muted">Адрес электронной почты</p>
              <p className="mt-1 text-base font-bold text-ink">sh.baxtiyarov@wayu.uz</p>
            </div>
            <div>
              <p className="text-sm text-muted">Приемные дни</p>
              <p className="mt-1 text-base font-bold text-ink">
                Еженедельно по четвергам: с 11:00 до 13:00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {LEGAL_PARAGRAPHS.map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-ink">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function ContactsForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notRobot, setNotRobot] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    notRobot?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(false);
    setServerError(null);

    const trimmedName = name.trim();
    const digits = phone.replace(/\D/g, "");
    const trimmedEmail = email.trim();
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

    if (trimmedEmail && !EMAIL_PATTERN.test(trimmedEmail)) {
      nextErrors.email = "Введите корректный email-адрес";
    }

    if (!trimmedMessage) {
      nextErrors.message = "Введите ваше сообщение";
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
        email: trimmedEmail || undefined,
        questions: trimmedMessage,
      });
      setSubmitted(true);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setNotRobot(false);
    } catch (err) {
      setServerError(err instanceof ApiError ? err.message : "Не удалось отправить, проверьте соединение");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-[532px] shrink-0 flex-col gap-6 rounded-lg border border-border bg-white p-6"
    >
      <div className="flex flex-col gap-0.5">
        <h2 className="text-2xl font-bold text-ink">Обратная связь</h2>
        <p className="text-base text-muted">
          Ваш телефон и email адрес не будет опубликован. Все поля необходимо заполнить.
        </p>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-base font-medium text-ink">Ваше имя</span>
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

      <div className="flex gap-6">
        <label className="flex flex-1 flex-col gap-2">
          <span className="text-base font-medium text-ink">Телефон</span>
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

        <label className="flex flex-1 flex-col gap-2">
          <span className="text-base font-medium text-ink">Электронная почта</span>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="Введите электронную почту"
            className={`h-11 rounded-md border bg-surface-soft px-4 text-base text-ink placeholder:text-muted ${
              errors.email ? "border-red-500" : "border-border"
            }`}
          />
          {errors.email && <span className="text-sm font-medium text-red-500">{errors.email}</span>}
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-base font-medium text-ink">Сообщение</span>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
          }}
          placeholder="Введите ваше сообщения"
          rows={4}
          className={`resize-none rounded-md border bg-surface-soft px-4 py-3 text-base text-ink placeholder:text-muted ${
            errors.message ? "border-red-500" : "border-border"
          }`}
        />
        {errors.message && <span className="text-sm font-medium text-red-500">{errors.message}</span>}
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
      {errors.notRobot && <span className="text-sm font-medium text-red-500">{errors.notRobot}</span>}

      {submitted && (
        <p className="text-sm font-medium text-green-600">Спасибо! Ваше сообщение отправлено.</p>
      )}
      {serverError && <p className="text-sm font-medium text-red-500">{serverError}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="flex h-11 w-fit cursor-pointer items-center justify-center self-end rounded bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Отправка..." : "Отправить"}
      </button>
    </form>
  );
}

export function ContactsFormSection() {
  return (
    <section className="mx-auto max-w-(--container-page) flex gap-6 py-10">
      <ContactsPressCard />
      <ContactsForm />
    </section>
  );
}

