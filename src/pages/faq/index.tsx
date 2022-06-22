import React from "react";

const FAQ = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full container sm:max-w-full">
        <div className='flex items-start justify-start my-4'>
          <h2>Главная / <span className='text-gray-400'>FAQ Вопрос-ответ</span></h2>
        </div>
        <div className="flex flex-col">
          <div className="text-start py-4">
            <span className='text-3xl font-bold'>Ответы на часто задаваемые вопросы</span>
          </div>
          <details className='my-2'>
            <summary className='bg-gray-100 p-2'>Вы осуществляете доставку?</summary>
            <p>
              Техническое обслуживание тепловых насосов для отопления и
              охлаждения — ключевой фактор долговечности климатической системы.
              Вовремя обнаруженные отклонения рабочих параметров системы от
              заданных, помогут сохранить работоспособность оборудования, не
              прибегая к дорогостоящему ремонту.
            </p>
          </details>
          <details className='mb-2'>
            <summary className='bg-gray-100 p-2'>
              Установка и монтаж облорудования включены в стоимость?
            </summary>
            <p>
              Техническое обслуживание тепловых насосов для отопления и
              охлаждения — ключевой фактор долговечности климатической системы.
              Вовремя обнаруженные отклонения рабочих параметров системы от
              заданных, помогут сохранить работоспособность оборудования, не
              прибегая к дорогостоящему ремонту.
            </p>
          </details>
          <details className='mb-2'>
            <summary className='bg-gray-100 p-2'>Как оплатить?</summary>
            <p>
              Техническое обслуживание тепловых насосов для отопления и
              охлаждения — ключевой фактор долговечности климатической системы.
              Вовремя обнаруженные отклонения рабочих параметров системы от
              заданных, помогут сохранить работоспособность оборудования, не
              прибегая к дорогостоящему ремонту.
            </p>
          </details>{" "}
          <details className='mb-2'>
            <summary className='bg-gray-100 p-2'>Обслуживание тепловых насосов</summary>
            <p>
              Техническое обслуживание тепловых насосов для отопления и
              охлаждения — ключевой фактор долговечности климатической системы.
              Вовремя обнаруженные отклонения рабочих параметров системы от
              заданных, помогут сохранить работоспособность оборудования, не
              прибегая к дорогостоящему ремонту.
            </p>
          </details>{" "}
          <details className='mb-2'>
            <summary className='bg-gray-100 p-2'>В какие сроки происходит установка?</summary>
            <p>
              Техническое обслуживание тепловых насосов для отопления и
              охлаждения — ключевой фактор долговечности климатической системы.
              Вовремя обнаруженные отклонения рабочих параметров системы от
              заданных, помогут сохранить работоспособность оборудования, не
              прибегая к дорогостоящему ремонту.
            </p>
          </details>
        </div>
        <div className="w-full flex flex-col items-center text-center py-12">
          <span className='text-3xl font-bold'>Мы Вам перезвоним</span>
          <p className='text-sm'>
            Если у вас возникли какие-то вопросы или проблемы, заполните форму и
            мы Вам перезвоним.
          </p>
          <form className="flex">
            <div className='flex px-2 py-4 sm:block'>
              <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  className="m-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
              <input
                  type="text"
                  placeholder="Ваш Email"
                  required
                  className="m-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
              <button className='bg-orange-300 px-4 sm:py-1'>Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
