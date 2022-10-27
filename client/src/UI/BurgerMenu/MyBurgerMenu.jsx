import React, { useState } from "react";
import { MenuItem } from "../MenuItem/MenuItem";
import cl from "./MyBurgerMenu.module.css"

const MyBurgerMenu=({theme,setTheme})=>{

    

    const catalog=[{title:'Масла и автохимия', 
                    link:"/catalog1",
                    items: ['Масла Маторные', 'Масла Трансмиссионные', 
                           ' Жидкости для омывателя стекла', 'Жидкости охлаждающие', 'Автокосметика ', 'Автохимия', 
                           'Антисептики', 'Ароматизаторы', 'Герметики',
                           'Бытовая и прочая химия', 'Жидкости гидравлические', 'Жидкости тормозные',
                           'Клеи', 
                           'Масла компрессора кондиционера ']},
                          { title:'Шины и Диски' ,
                          link:"/catalog2",
                           items: ['Шины Летние ', 'Шины Зимние', 
                           'Диски колесные, литые', 'Диски колесные, штампованные', 'Шины мотоциклетные','Гайки колёсные ', 'Болты колёсные ', 
                           'Колпаки колёсные ', 'Цепи противоскольжения','Кольца центровочные',
                           'Чехлы для хранения колёс ', 'Проставки колесного диска', 'колпачки и шинный вентиль']},
                          {
                            title:"Автоэлектроника",
                            link:"/catalog2",
                            items: ['Лампы', 'Аккумуляторы', 
                            'Камеры заднего вида', 'Предохранители', 'Парковочные радары',
                            'Автомагнитолы', 'Видеорегистратор' ,'Кабели и адаптеры ','DVD-Чейнджеры ', 'FM-модуляторы, контроллеры', 
                            'Автоакустика коаксиальная', 'Автоакустика компонентная', 'Антенны',
                            'Батарейки', 'Контроллеры AV и модули расширения', 'Ксенон, подсветка, спецсигналы',
                            'Динамик', 
                            'Накидка с подогревом ', 'Мониторы и телевизоры', 'Отделочные материалы ', 'Охранные системы', 'Провода прикуривания', 'Радар-детекторы ']
                          },
                          {
                            title:"Остальное",
                            link:"/catalog1",
                            items: ['Электрооборудование  ', 'Инструмент', 
                            'Автоаксессуары', 'Все для автосервиса',
                            'Щетки стеклоочистителя', 'Одежда и экипировка']
                          }
                        ]

    return(
        <div className={theme?cl.main:cl.change} onClick={(e)=>e.stopPropagation()}>
            {
                catalog.map((p)=>
                <MenuItem p={p}></MenuItem>
                )
            }
           
    
 
        </div>
    )
}
export default MyBurgerMenu;