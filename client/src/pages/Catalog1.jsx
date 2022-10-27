import React, { useState } from "react";
import { ProductForm } from "../UI/ProductForm/ProductForm";
import img from "../img/catalog1.jpg";
import img1 from "../img/cat2.jpg";
import img2 from "../img/cat3.jpg";
import img3 from "../img/cat4.jpg";


export const Catalog1=()=>{ 

    

 const catalog= [
    {id:Date.now(), title:"Масло трансмиссионное",description:"ZIC GFT 75W-90 Полностью синтетическое масло для механических трансмиссий и мостов легковых и грузовых автомобилей, также строительной техники, требующих вязкости по SAE 75W-90 или 80W-90 и категорию по API GL-4, GL-5 или МТ-1. Изготовлено на основе полиальфаолефинов (ПАО) и собственного синтетического базового масла Yubase.", price:"1074", img:img},
    {id:Date.now(), title:"Жидкость стеклоомывателя ",description:"Предназначен для использования в системе омывания стекол в летний период. Уникальная химическая формула позволяет эффективно удалять грязь, соль, нефтяную пленку, следы от насекомых. Не оставляет биологических загрязнений, бликов, масляных пятен и разводов на стекле, повышая уровень безопасности управления автомобилем. Жидкость безвредна для лакокрасочных покрытий, резиновых и пластиковых деталей, не наносит вреда здоровью человека и окружающей среде", price:"133",img:img1},
    {id:Date.now(),title:"Жидкость тормозная",description:"Тормозная жидкость, предназначенная для использования в гидроприводах тормозных систем и сцеплений автомобилей отечественного и зарубежного производства. Температура кипения сухой жидкости – не менее +240 °С. Не оказывает отрицательного воздействия на детали тормозной системы и обладает высокой термической стабильностью. Соответствует требованиям стандарта FMVSS № 116 DOT4. Совместима со всеми тормозными жидкостями классов DOT3, DOT4, Нева, Роса", price:"700",img:img2},
    {id:Date.now(), title:"Жидкость гидравлическая",description:"Жидкость для централизованных гидросистем febi 06161 (синтетическая) разработана для применения в системах централизованной гидравлики, регулирования дорожного просвета, гидропневматических подвесок, а также амортизации и рулевого управления в диапазоне от –40 °C до +130 °C. Окрашена в зелёный цвет.", price:"1000",img:img3},
    {id:Date.now(), title:"Масло трансмиссионное",description:"ZIC GFT 75W-90 Полностью синтетическое масло для механических трансмиссий и мостов легковых и грузовых автомобилей, также строительной техники, требующих вязкости по SAE 75W-90 или 80W-90 и категорию по API GL-4, GL-5 или МТ-1. Изготовлено на основе полиальфаолефинов (ПАО) и собственного синтетического базового масла Yubase.", price:"1074", img:img}]


    return( 
        <div className="whole">
            {catalog.map((p)=>
            
                     <ProductForm p={p}  ></ProductForm>)
             }
        </div>
    )
}