"use client";

import { SendIcon } from "@/components/icons/VacancyIcons";
import { CalendarIcon, ArrowDownIcon } from "@/components/icons/NewsIcons";
import { DocumentUploadIcon } from "@/components/icons/LibraryIcons";

const inputClass =
  "h-11 w-full rounded border border-border bg-surface-soft px-4 text-base text-ink placeholder:text-muted";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-1 flex-col gap-2">
      <span className="text-base font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}

function DateField({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <input type="text" placeholder={placeholder} className={inputClass} />
      <CalendarIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
    </div>
  );
}

function SelectField({ placeholder, options }: { placeholder: string; options?: string[] }) {
  return (
    <div className="relative">
      <select defaultValue="" className={`${inputClass} appearance-none`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options?.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ArrowDownIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
    </div>
  );
}

function RadioOption({ name, label }: { name: string; label: string }) {
  return (
    <label className="flex h-11 items-center gap-3 rounded border border-border bg-surface-soft px-4">
      <input type="radio" name={name} className="h-4 w-4 accent-primary" />
      <span className="text-base text-ink">{label}</span>
    </label>
  );
}

export function InternshipFormSection() {
  return (
    <section className="bg-surface-soft py-10">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto flex w-[1183px] flex-col gap-10 rounded-lg bg-white px-[200px] py-10"
      >
        <h1 className="text-[28px] font-bold text-ink">Стажировка в Узбекистане</h1>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-ink">Общая Информация</h2>
          <div className="flex flex-col gap-4">
            <Field label="Ф.И.О">
              <input type="text" placeholder="Введите ваше полное имя" className={inputClass} />
            </Field>
            <div className="flex gap-6">
              <Field label="Дата рождения">
                <DateField placeholder="01.01.2000" />
              </Field>
              <Field label="Регион проживания">
                <SelectField placeholder="Выберите регион" />
              </Field>
            </div>
            <div className="flex gap-6">
              <Field label="Электронная почта">
                <input type="email" placeholder="Пример: the.best@uic.group" className={inputClass} />
              </Field>
              <Field label="Номер телефона">
                <input type="tel" placeholder="+998 __ ___ __ __" className={inputClass} />
              </Field>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-ink">Условия прохождения практики</h2>
          <div className="flex flex-col gap-4">
            <Field label="Сфера деятельности">
              <SelectField placeholder="Выберите желаемые сферы деятельности" />
            </Field>
            <Field label="Желаемая дата начала практики">
              <DateField placeholder="ДД/ММ/ГГГГ" />
            </Field>
            <div className="flex flex-col gap-3">
              <span className="text-base font-medium text-ink">
                Вы сможете приходить на практику полный рабочий день
              </span>
              <div className="grid grid-cols-2 gap-3">
                <RadioOption name="full-day" label="Да, смогу" />
                <RadioOption name="full-day" label="Нет, только на половину дня" />
                <RadioOption name="full-day" label="Другое" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-base font-medium text-ink">
                Могли бы Вы продолжать работу после окончания стажировки?
              </span>
              <div className="grid grid-cols-2 gap-3">
                <RadioOption name="continue" label="Полный день" />
                <RadioOption name="continue" label="Неполный рабочий день" />
                <RadioOption name="continue" label="Нет, только на летний период" />
                <RadioOption name="continue" label="Другое" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-ink">Образование</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <Field label="Учебное заведение">
                <SelectField placeholder="Выберите учебное заведение" />
              </Field>
              <Field label="Специальность, факультет">
                <SelectField placeholder="Выберите факультет, специальность" />
              </Field>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-1 gap-4">
                <Field label="Год поступления">
                  <DateField placeholder="ДД/ММ/ГГГГ" />
                </Field>
                <Field label="Год окончания">
                  <DateField placeholder="ДД/ММ/ГГГГ" />
                </Field>
              </div>
              <Field label="Средний бал">
                <input
                  type="text"
                  placeholder="Введите средний бал при оконочании"
                  className={inputClass}
                />
              </Field>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-ink">Образование</h2>
          <div className="flex flex-col gap-4">
            <Field label="Опыт работы">
              <textarea
                rows={3}
                placeholder="Опишите свой опыт работы"
                className="w-full resize-none rounded border border-border bg-surface-soft px-4 py-3 text-base text-ink placeholder:text-muted"
              />
            </Field>
            <Field label="Ключевые навыки">
              <input
                type="text"
                placeholder="Введите свои ключевые навыки"
                className={inputClass}
              />
            </Field>

            <div className="flex flex-col items-center gap-3 rounded border border-dashed border-border bg-surface-soft py-9">
              <DocumentUploadIcon className="h-8 w-8 text-muted" />
              <p className="text-base font-medium text-ink">Резюме</p>
              <p className="text-sm text-muted">Выберите или перетащите нужный файл в эту область</p>
              <label className="mt-1 flex h-[38px] w-[121px] cursor-pointer items-center justify-center gap-2 rounded bg-primary text-sm font-bold text-white">
                Выбрать
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        <label className="flex items-start gap-2">
          <input type="checkbox" required className="mt-0.5 h-5 w-5 shrink-0 rounded border-border accent-primary" />
          <span className="text-sm font-medium text-muted">
            Я даю свое согласие на передачу документа, содержащего мои персональные данные, и согласен со всеми
            условиями и правилами пользования
          </span>
        </label>

        <button
          type="submit"
          className="flex h-12 w-[179px] items-center justify-center gap-2 self-center rounded bg-primary text-base font-bold text-white"
        >
          Отправить
          <SendIcon className="h-5 w-5" />
        </button>
      </form>
    </section>
  );
}
