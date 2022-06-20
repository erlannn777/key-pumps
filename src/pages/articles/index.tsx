import React from "react";
import articlImg from "./assets/articleImg.png";

const Articles = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-wrap mt-8">
        <div className="w-96 bg-slate-100 m-5">
          <img className="w-96 h-60" src={articlImg} alt="" />
          <div className="w-full p-2">
            <div className="w-full text-center">
              <span>
                МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА
              </span>
            </div>
            <p>
              Как уже упоминалось, основными параметрами для оценки
              эффективности солнечных коллекторов являются...
            </p>
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col">
                <span>СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ</span>
                <span>9 апреля 2022</span>
              </div>
              <button>ДАЛЕЕ</button>
            </div>
          </div>
        </div>
        <div className="w-96 bg-slate-100 m-5">
          <img className="w-96 h-60" src={articlImg} alt="" />
          <div className="w-full p-2">
            <div className="w-full text-center">
              <span>
                МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА
              </span>
            </div>
            <p>
              Как уже упоминалось, основными параметрами для оценки
              эффективности солнечных коллекторов являются...
            </p>
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col">
                <span>СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ</span>
                <span>9 апреля 2022</span>
              </div>
              <button>ДАЛЕЕ</button>
            </div>
          </div>
        </div>
        <div className="w-96 bg-slate-100 m-5">
          <img className="w-96 h-60" src={articlImg} alt="" />
          <div className="w-full p-2">
            <div className="w-full text-center">
              <span>
                МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА
              </span>
            </div>
            <p>
              Как уже упоминалось, основными параметрами для оценки
              эффективности солнечных коллекторов являются...
            </p>
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col">
                <span>СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ</span>
                <span>9 апреля 2022</span>
              </div>
              <button>ДАЛЕЕ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
