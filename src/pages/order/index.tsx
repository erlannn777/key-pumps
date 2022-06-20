import React from "react";
import cdek from "./assets/cdek.png";
import del from "./assets/del.png";
import pochta from "./assets/pochta.png";

const Order = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full  container">
        <div className="w-full flex flex-col items-center">
          <div className="w-full text-start ">
            <span>Доставка</span>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex flex-col m-2">
              <div className="w-96 h-52">
                <img className="object-contain w-96 h-52" src={pochta} alt="" />
              </div>
              <div className="w-full">
                <span>Почта России</span>
              </div>
              <label>
                <input checked type="checkbox" name="" id="" />
                Получение посылки согласно условиям перевозчика
              </label>
              <label>
                <input checked type="checkbox" name="" id="" />
                Доставка в течении 1-2 дней
              </label>
            </div>
            <div className="flex flex-col m-2">
              <div className="w-96 h-52">
                <img className="object-contain w-96 h-52" src={del} alt="" />
              </div>
              <div className="w-full">
                <span>Деловые линии</span>
              </div>
              <label>
                <input checked type="checkbox" name="" id="" />
                Получение посылки согласно условиям перевозчика
              </label>
              <label>
                <input checked type="checkbox" name="" id="" />
                Доставка в течении 1-2 дней
              </label>
            </div>{" "}
            <div className="flex flex-col m-2">
              <div className="w-96 h-52">
                <img className="object-contain w-96 h-52" src={cdek} alt="" />
              </div>
              <div className="w-full">
                <span>СДЭК</span>
              </div>
              <label>
                <input checked type="checkbox" name="" id="" />
                Получение посылки согласно условиям перевозчика
              </label>
              <label>
                <input checked type="checkbox" name="" id="" />
                Доставка в течении 1-2 дней
              </label>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col text-start">
            <span>Оплата</span>
            <span>Банковская карта</span>
            <p>
              Онлайн заказ можно оплатить с помощью банковской карты, выпущенной
              на территории России. Оформляя заказ на сайте, в пункте «Оплата»
              выберите «Банковская карта». После переадресации на страницу
              системы безопасных платежей, необходимо лишь подтвердить платеж.
            </p>
          </div>
          <div className="w-full flex flex-col text-start">
            <span>Оплата при получении товара</span>
            <p>
              Онлайн заказ можно оплатить непосредственно при получении.
              Оформляя заказ на сайте, в пункте «Оплата» выберите «Оплата при
              получении товара». После того как товар будет доставлен к
              заказчику, после полного осмотра, оплатите стоимость товара
              удобным для вас способом.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col text-start">
          <span>Гарантии</span>
          <span>
            На все товары, приобретенные в нашем магазине, предоставляется
            гарантия, дающая право на:
          </span>
          <ul className="list-disc">
            <li>
              обмен или возврат товара в срок до 14 дней с момента приобретения;
            </li>
            <li>
              обмен или возврат товара на основании акта, выданного
              Авторизованным сервисным центром по результатам гарантийного
              обслуживания (в соответствии с Законом РФ «О защите прав
              потребителей»).
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col text-start">
          <span>Возврат товара</span>
          <span>Подготовьте, пожалуйста, все необходимые документы:</span>
          <ul className="list-disc">
            <li>
              выданный продавцом расчетный документ (чек / акт приема-передачи /
              накладная или др.), подтверждающий факт приобретения;
            </li>
            <li>гарантийный талон;</li>
            <li>документ, удостоверяющий личность;</li>
            <li>идентификационный налоговый номер (ИНН);</li>
            <li>
              в случае оплаты покупки банковской картой – актуальные реквизиты
              карточного счета.
            </li>
          </ul>
          <span>
            Передайте товар на гарантийное обслуживание, обязательно приложите
            указанные выше документы.
          </span>
          <p>
            Полезная информация о правах потребителя в случае приобретения им
            товара ненадлежащего качества – Закона РФ «О защите прав
            потребителей».
          </p>
          <p>
            Уважаемый покупатель, приносим извинения за неудобства, случившиеся
            в связи с выходом из строя. По вашему обращению будут приняты все
            меры для быстрого решения вашей проблемы.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
