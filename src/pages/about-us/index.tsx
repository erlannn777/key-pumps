import React from "react";
import Carousel from "react-grid-carousel";
import firstImg from "./assets/first.png";
import secondImg from "./assets/second.png";
import fourthImg from "./assets/fourth.png";
import brand1 from "./assets/brands/brand1.png";
import brand2 from "./assets/brands/brand2.png";
import brand3 from "./assets/brands/brand3.png";
import brand4 from "./assets/brands/brand4.png";
import brand5 from "./assets/brands/brand5.png";
import brand6 from "./assets/brands/brand6.png";
import brand7 from "./assets/brands/brand7.png";
import brand8 from "./assets/brands/brand8.png";
import brand9 from "./assets/brands/brand9.png";
import builder1 from "./assets/team/builder1.png";
import builder2 from "./assets/team/builder2.png";
import builder3 from "./assets/team/builder3.png";
import contact1Img from "./assets/contacts/contact1.png";
import contact2Img from "./assets/contacts/contact2.png";
import contact3Img from "./assets/contacts/contact3.png";

const AboutUs = () => {
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
  ];
  return (
    <div className="w-full">
      <div className="flex flex-col items-center mx-24">
        <div className="w-full flex justify-between items-center">
          <img className="object-contain w-80 h-96" src={firstImg} alt="" />
          <div>
            <div>
              <span>Компания</span>
              <span className="bg-orange-200">KEYPUMPS</span>
            </div>
            <p className="break-words">
              Компания «KEYPUMPS» входит в группу компаний «KEY CORPORATION».
              Компания имеет более 12 лет опыта в монтаже и внедрении
              высокоэффективных систем отопления, вентиляции и кондиционирования
              на базе энергосберегающих технологий. Применение выработанных
              решений в бизнес-центрах, гостиницах, банкахи прочих жилых и
              коммерческих зданиях.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="flex flex-col text-start">
            <span>О НАС</span>
            <p className="break-words">
              Продукция предназначена для стран СНГ с учетом всех особенностей
              тяжелых зим, резких изменений климата, учитываются все особенности
              питающих электрических сетей, низкие цены на все тепловые насосы с
              сохранением всех технологий, полный набор всех режимов в одном
              изделии (отопление, охлаждение, ГВС), самые современные
              контроллеры автоматики, двухкомпессорные системы позволяющие
              одновременную работу в режимах нагрева/охлаждения и ГВС.
            </p>
          </div>
          <img className="object-contain w-80 h-96" src={secondImg} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <span>Почему KeyPumps?</span>
          </div>
          <div className="w-full flex items-center">
            <img className="object-contain w-80 h-96" src={fourthImg} alt="" />
            <div>
              <div>
                <span>Возврат стоимости</span>
                <p>
                  За каждый отправленый товар который окажеться бракованным, мы
                  вернем вам стоимость.
                </p>
              </div>
              <div>
                <span>Монтаж</span>
                <p>
                  За каждый отправленый товар который окажеться бракованным, мы
                  вернем вам стоимость.Наши квалифицированные специалисты
                  обеспечат высокое качество монтажа и наладки
                  электрооборудования
                </p>
              </div>
              <div>
                <span>Надежность</span>
                <p>
                  Мы поставляем лучшее в своем классе оборудование ведущих
                  зарубежных производителей
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-80 bg-gray-700 flex items-center justify-center">
        <div className="m-8">
          <span>5,567</span>
          <p>Довольных клиентов</p>
        </div>
        <div className="m-8">
          <span>1245</span>
          <p>Продуктов на выбор</p>
        </div>
        <div className="m-8">
          <span>372</span>
          <p>Продаж в день</p>
        </div>
        <div className="m-8">
          <span>20</span>
          <p>Лет на рынке</p>
        </div>
      </div>
      <div className="flex flex-col items-center mx-24">
        <div className="w-full">
          <Carousel
            cols={1}
            rows={1}
            gap={1}
            //   arrowLeft={<button className="hidden">ee</button>}
            //   arrowRight={<button className="hidden">ee</button>}
          >
            <Carousel.Item className="">
              <div className="text-center">
                <span>ООО “Феникс”</span>
                <p>
                  OOO «Модульстрой» выражает благодарность «KEYPUMPS» за
                  выполненный спектр услуг по обслуживанию климатической
                  техники. Обязательства были выполнены в соответствии с
                  договором и четким соблюдением сроков выполнения. Желаем Вам
                  грандиозных планов, перспективных партнеров и успехов в
                  развитии бизнеса.{" "}
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="text-center">
                <span>ООО “Феникс 2”</span>
                <p>
                  OOO «Модульстрой» выражает благодарность «KEYPUMPS» за
                  выполненный спектр услуг по обслуживанию климатической
                  техники. Обязательства были выполнены в соответствии с
                  договором и четким соблюдением сроков выполнения. Желаем Вам
                  грандиозных планов, перспективных партнеров и успехов в
                  развитии бизнеса.{" "}
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="text-center">
                <span>ООО “Феникс 3”</span>
                <p>
                  OOO «Модульстрой» выражает благодарность «KEYPUMPS» за
                  выполненный спектр услуг по обслуживанию климатической
                  техники. Обязательства были выполнены в соответствии с
                  договором и четким соблюдением сроков выполнения. Желаем Вам
                  грандиозных планов, перспективных партнеров и успехов в
                  развитии бизнеса.{" "}
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="w-full">
          <div className="w-full text-center">
            <span>Производители, с которыми мы работаем</span>
          </div>
          <div className="w-full flex flex-wrap justify-center">
            {brands.map((brand: any, index) => (
              <img key={index} src={brand} alt="" />
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="w-full text-center">
            <span>команда</span>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex flex-col items-center">
              <img className="object-contain w-72 h-80" src={builder1} alt="" />
              <span>Специалист по монтажу тепловых насосов</span>
              <p>Александров П. А.</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="object-contain w-72 h-80" src={builder2} alt="" />
              <span>Специалист по монтажу тепловых насосов</span>
              <p>Александров П. А.</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="object-contain w-72 h-80" src={builder1} alt="" />
              <span>Специалист по монтажу тепловых насосов</span>
              <p>Александров П. А.</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <form className="flex flex-col items-start text-start w-96">
            <span>Остались вопросы?</span>
            <p className="break-words">
              Если у вас возникли какие-то вопросы по поводу оптовых заказов,
              заполните форму и мы Вам перезвоним.
            </p>
            <input type="text" placeholder="Ваше имя" required />
            <input type="text" placeholder="Ваш Email" required />
            <button>Отправить</button>
          </form>
          <div>
            <div className="w-full text-start">
              <span>Контакты</span>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex flex-col text-start">
                <span>Наш адрес</span>
                <p className="break-words">Россия, г. Сочи, ул. Горького, 87</p>
              </div>
              <div className="flex flex-col text-start">
                <span>Телефоны</span>
                <p className="">+7 (964) 945 41 38</p>
              </div>{" "}
              <div className="flex flex-col text-start">
                <span>Email</span>
                <p className="">info@keypumps.ru</p>
              </div>
            </div>
            <div className="w-full flex ">
              <img
                className="object-contain w-48 h-36 m-2"
                src={contact1Img}
                alt=""
              />
              <img
                className="object-contain w-48 h-36 m-2"
                src={contact2Img}
                alt=""
              />
              <img
                className="object-contain w-48 h-36 m-2"
                src={contact3Img}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
