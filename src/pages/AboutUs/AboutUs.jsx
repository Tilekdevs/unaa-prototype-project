import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./aboutUs.scss"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='AboutUs'>
      <div className='AboutContainer'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", position: "relative", justifyContent: "center", alignItems: "center"}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="О предприятии" {...a11yProps(0)} />
              <Tab label="История" {...a11yProps(1)} />
              <Tab label="Услуги" {...a11yProps(2)} />
              <Tab label="Контакты" {...a11yProps(3)} />
              <Tab label="Руководство" {...a11yProps(4)} />
            </Tabs> 
          </Box>
          <CustomTabPanel value={value} index={0}>
          <div className="tab_pane_fade_active_show" id="about">
            <p class="section__paragraph">Государственного учреждения «Унаа»  при Министерстве цифрового развития
                                        Кыргызской Республики осуществляющего деятельность в области регистрации,
                                        перерегистрации автомототранспортных средств, самоходных технологических машин,
                                        тракторов, стационарных технологических установок и оборудования, выдачи
                                        водительских удостоверений, удостоверений тракториста-машиниста и допуска
                                        водителей к управлению транспортными средствами.                                        </p>
                                    <p class="section__paragraph">Учреждение
                                        является подведомственным учреждением Министерства цифрового развития Кыргызской
                                        Республики.</p>
                                    <p class="section__paragraph">Целью
                                        Учреждения является реализация государственной политики в области регистрации,
                                        перерегистрации транспортных средств, выдачи водительских удостоверений,
                                        удостоверений тракториста-машиниста и допуска водителей к управлению
                                        транспортными средствами.</p>
                                    <div className="section__paragraph">

                                        <div className="accordeon">

                                            <a class="accordeon__link"
                                               data-toggle="collapse" href="#mainFunctions">
                                                Задачами Учреждения являются:
                                            </a>

                                            <div className="accordeon__body  collapse" id="mainFunctions">
                                                <ul class="list">
                                                    <li class="list__item">организация системы регистрации, перерегистрации транспортных
                                                        средств, прав и ограничений на транспортные средства и
                                                        водительского состава;
                                                    </li>
                                                    <li class="list__item">участие в создании, регистрации, формировании и обслуживании
                                                        информационных ресурсов в пределах компетенции Учреждения;
                                                    </li>
                                                    <li class="list__item">анализ состояния и выработка предложений по совершенствованию
                                                        законодательства в сфере регистрации, перерегистрации
                                                        транспортных средств и водительского состава и внесение их на
                                                        рассмотрение Министерства;
                                                    </li>
                                                    <li class="list__item">обеспечение реализации прав граждан и организаций на доступ к
                                                        информационным ресурсам;
                                                    </li>
                                                    <li class="list__item">обеспечение защиты персональных данных в соответствии с
                                                        законодательством Кыргызской Республики в сфере информации
                                                        персонального характера.
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>
                                  </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
          <div className="tab history" id="history">
                                    <p class="section__paragraph">В соответствии
                                        с Указом Президента Кыргызской Республики от 26 октября 2009 года № 425 «О мерах
                                        по обеспечению реализации Закона Кыргызской Республики «О структуре
                                        Правительства Кыргызской Республики» образована Государственная регистрационная
                                        служба при Правительстве Кыргызской Республики с передачей ей функций по
                                        регистрации автотранспортных средств и водительского состава изъяв их из ведения
                                        Министерства внутренних дел Кыргызской Республики, по регистрации
                                        сельскохозяйственной техники, изъяв их из ведения Министерства сельского,
                                        водного хозяйства и перерабатывающей промышленности Кыргызской Республики.</p>
                                    <p class="section__paragraph">В соответствии
                                        с постановлением Правительства Кыргызской Республики от 17 ноября 2009 года №
                                        708 «О Государственной регистрационной службе при Правительстве Кыргызской
                                        Республики» постановлением Правительства Кыргызской Республики «О Департаменте
                                        регистрации транспортных средств и водительского состава при Государственной
                                        регистрационной службе при Правительстве Кыргызской Республики» от 5 февраля
                                        2010 года № 76 утверждено Положение о Департаменте регистрации транспортных
                                        средств и водительского состава.</p>
                                    <p class="section__paragraph">Департамент
                                        являлся подведомственным подразделением Государственной регистрационной службы
                                        при Правительстве Кыргызской Республики, осуществляющим деятельность в области
                                        регистрации транспортных средств, выдачи водительских удостоверений,
                                        удостоверений тракториста-машиниста и допуска водителей к управлению
                                        транспортными средствами.</p>
                                    <p class="section__paragraph">В целях
                                        введения единого порядка регистрации, перерегистрации и снятия с учета
                                        транспортных средств, установок и оборудования постановлением Правительства
                                        Кыргызской Республики «О вопросах регистрации транспортных средств, установок и
                                        оборудования» от 23 июня 2017 года № 407 утверждены:                                    <ul class="list">
                                        <li class="list__item">Правила
                                            государственной регистрации, перерегистрации транспортных средств, установок
                                            и оборудования, а также прав собственности на них согласно приложению 1;
                                        </li>
                                        <li class="list__item">Порядок
                                            организации и содержание электронной базы данных зарегистрированных
                                            транспортных средств и водительского состава согласно приложению 2;                                        </li>
                                        <li class="list__item">Перечень
                                            государственных органов Кыргызской Республики, имеющих оперативный доступ к
                                            электронной базе данных зарегистрированных транспортных средств и
                                            водительского состава, согласно приложению 3.                                        </li>
                                    </ul>
                                    </p>
                                    <p class="section__paragraph">В целях
                                        введения единого порядка выдачи водительских удостоверений и удостоверений
                                        тракториста-машиниста постановлением Правительства Кыргызской Республики «Об
                                        утверждении Правил приема квалификационных экзаменов, выдачи водительских
                                        удостоверений и удостоверений тракториста-машиниста» от 18 декабря 2017 года №
                                        819 утверждены:                                    <ul class="list">
                                        <li class="list__item">Правила приема
                                            квалификационных экзаменов и выдачи водительских удостоверений;                                        </li>
                                        <li class="list__item">Правила приема
                                            квалификационных экзаменов и выдачи удостоверений тракториста-машиниста.                                        </li>
                                    </ul>
                                    </p>
                                    <p class="section__paragraph">В целях
                                        создания нового, современного, эффективного и профессионального государственного
                                        учреждения по реализации единых государственных функций в сфере регистрации
                                        транспортных средств и водительского состава, обеспечения финансовой
                                        устойчивости государственной регистрационной системы Кыргызской Республики в 20
                                        декабря 2018 года Постановлением Правительства № 599 «О государственном
                                        учреждении «Унаа» при Государственной регистрационной службе при Правительстве
                                        Кыргызской Республики» на базе Департамента регистрации транспортных средств и
                                        водительского состава при Государственной регистрационной службе при
                                        Правительстве Кыргызской Республики образуется государственное учреждение «Унаа»
                                        при Государственной регистрационной службе при Правительстве Кыргызской
                                        Республики </p>
                                    <p class="section__paragraph">В рамках
                                        Постановления Кабинета Министров Кыргызской Республики от 1 июня 2021 года № 17
                                        Государственное учреждение «Унаа» при Государственной регистрационной службе при
                                        Правительстве Кыргызской Республики был переименован в Государственное
                                        учреждение «Унаа» при Министерстве цифрового развития Кыргызской Республики;</p>
                                </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
          <div className="tab-pane  fade" id="services">
                                    <h5>Стоимость услуг, оказываемых ГУ &quot;Унаа&quot;</h5>
                                    <p class="section__paragraph">
                                    <strong>Стоимость услуг регистрация (перерегистрация) прав собственности на автомашины с
                                        выдачей удостоверяющих документов, регистрационных номерных
                                        знаков:    </strong>                                <ul class="list">
                                        <li class="list__item">Осмотр авто на территории ГУ «Унаа» – <b>141 сом</b></li>
                                        <li class="list__item">Осмотр авто с выездом по месту нахождения – <b>140 сом</b> (без учета транспортных
                                            расходов на выезд)                                        </li>
                                        <li class="list__item">Формирование базы
                                            данных по авто и самоходной технологической машины, установкой и
                                            оборудования, впервые прибывшие – <b>141 сом</b></li>
                                        <li class="list__item">Обеспечение
                                            госномером – <b>141 сом</b></li>
                                        <li class="list__item">Регистрация
                                            (перерегистрация) транспортного средства, с выдачей удостоверяющих
                                            документов – <b>141 сом</b></li>
                                        <li class="list__item">Регистрация
                                            (перерегистрация) самоходной технологической машины с выдачей удостоверяющих
                                            документов – <b>121 сом</b></li>

                                    </ul>
                                    </p>
                                    <p class="section__paragraph">
                                    <strong>Стоимость услуг по выдаче удостоверения
                                        тракториста-машиниста на управление самоходными технологическими машинами:   </strong>                                 <ul class="list">
                                        <li class="list__item">Регистрация и выдача удостоверения тракториста-машиниста – <b>135 сом</b></li>
                                        <li class="list__item">Подтверждение сведений о транспортных средствах и водительских удостоверениях – <b>142
                                                сом</b></li>
                                    </ul>
                                    </p>
                                    <p class="section__paragraph">Стоимость услуг по выдаче водительского удостоверения на право управления транспортными средствами                                        - <b>141 сом</b></p>
                                    <p class="section__paragraph">
                                    <strong>Стоимость специальной бланочной продукции: </strong>                                   <ul class="list">
                                        <li class="list__item">Свидетельство о регистрации ТС                                            – <b>192 сом</b></li>
                                        <li class="list__item">Водительское удостоверение национального образца                                            – <b>100, 86 сом</b></li>
                                        <li class="list__item">Водительское удостоверение международного образца                                            – <b>52 сом</b></li>
                                        <li class="list__item">Технический паспорт СТМ                                            – <b>43 сом</b></li>
                                    </ul>
                                    </p>
                                    <h5>
                                        Оплата за госномер автомобиля                                        – <b>650 сом</b></h5>
                                    <h5>
                                        Оплата за госномер самходной технологической машины                                        – <b>325 сом</b></h5>
                                    <h5>
                                        Оплата за услуги по персонификации                                        - <b>255 сом</b></h5>
                                    <p class="section__paragraph">
                                    <strong>Примечание: Цены указаны без учёта банковских услуг</strong></p>
                                    <p class="section__paragraph">
                                        В случае коррупционных проявлений вы можете обратиться по бесплатному номеру                                        <b>119</b>
                                    </p>
                                </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}> 
            <div className='About contacts'> 
            {/* // первые три карточки с переходом в 2gis */}
                <div className="card" onClick={() => window.location.   href="https://2gis.kg/bishkek/firm/70000001019365883?m=74.677648%2C42.859405%2F17.71"}>
                    <div className="info">
                        <div className="title">
                        Центральный аппарат Государственного учреждения “Унаа”
                        </div>
                        <p className="section__paragraph address">
                        г. Бишкек, ул. Чокана Валиханова, 2а
                        </p>
                        <p className="section__paragraph phone">Call center - 119</p>
                        <p className="section__paragraph phone">Тел: (312) 63 23 63</p>
                        <p className="section__paragraph working-hours">
                        Время работы: с 9:00 до 18:00, обеденный перерыв с 12.30 до 13.30
                        </p>
                    </div>
                </div>
                
                <div className="card" onClick={() => window.location.   href="https://2gis.kg/bishkek/firm/70000001019365883?m=74.677648%2C42.859405%2F17.71"}>
                    <a href="https://2gis.kg/bishkek/firm/70000001019365883?m=74.677648%2C42.859405%2F17.71"></a>
                    <div className="title">
                        Бишкекский городской отдели Гу «Унаа»
                    </div>
                        <p className="section__paragraph address">г. Бишкек, ул. Чокана Валиханова, 2а</p>
                        <p className="section__paragraph">Заведующий отделом:<br/>
                        Рыскелдиев Адылбек Мукашович
                        <p className="section__paragraph phone">
                            <br/>тел. 0312 633701 </p> 
                            <p className="section__paragraph working-hours">
                                Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                            </p>
                    </div>
                </div>

                <div className="card" onClick={() => window.location.   href="https://2gis.kg/bishkek/firm/70000001019365883?m=74.677648%2C42.859405%2F17.71"}>
                    <a href="https://2gis.kg/bishkek/firm/70000001019365883?m=74.677648%2C42.859405%2F17.71"></a>
                    <div className="title">
                        Бишкекский городской отдел Гу «Унаа»
                    </div>
                    <div className="info">
                        <p className="section__paragraph">Имамов Кубанычбек Маматякыпович
                        <p className="section__paragraph phone">
                        <br/>тел. 0312 463910</p><br/>
                        <p className="section__paragraph working-hours">
                            Сб-Ср (раб. дни), Чт-Пт (выходные), 08:30-17:30, перерыв 12:00-13:00
                            </p>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="title">Аламудунский отдел с. Нижняя-Ала-Арча, пер. Школьный, 7а</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Бейшеев Максат Кожомкулович
                        <p className="section__paragraph phone">
                        <br/>тел. 0312 678562</p>
                        <p className="section__paragraph working-hours"><br/>Пн-Пт 08:30-17:30, перерыв 12:00-13:00
                        </p>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="title">Ысык-Атинский отдел г. Кант, ул. Советская, 8</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Байзаков Бактыбек Осмонакунович
                        <p className="section__paragraph phone">
                        <br/>тел. 0312 616911</p>
                        <p className="section__paragraph working-hours">
                            <br/>Пн-Пт 08:30-17:30, перерыв 12:00-13:00
                            </p>
                        </p>
                    </div>
                </div>

                {/* <!-- Chuuy-Keminskiy отдел --> */}
                <div className="card">
                    <div className="title">Чуй-Кеминский отдел г. Токмок, 1 мкр.</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Султанов Акимбай Токтоназарович</p>
                        <p className="section__paragraph phone">тел. 03138 55456</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Sokuluk-Moskovskiy отдел --> */}
                <div className="card">
                    <div className="title">Sокулук-Московский отдел г. Шопоков, ул. Машиностроительная, 1</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Токобаев Суйунбек Асакеевич</p>
                        <p className="section__paragraph phone">тел. 0312 607634</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Jaiyl-Panfilovskiy отдел --> */}
                <div className="card">
                    <div className="title">Жайыл-Панфиловский отдел г. Кара-Балта, ул. Жайыл-Баатыра, 127</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Зикиров Жусупбек Камчыбекович</p>
                        <p className="section__paragraph phone">тел. 0312 221553</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Naryn regional отдел --> */}
                <div className="card">
                    <div className="title">Нарынский региональный отдел г. Нарын, ул. Кулумбаева, 23</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Карагулов Канат Джапарбекович</p>
                        <p className="section__paragraph phone">тел. 03522 50972</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Jumgal sector --> */}
                <div className="card">
                    <div className="title">Жумгальский сектор Нарынского регионального отдела с. Чаек, ул. Э. Матыева, 123</div>
                    <div className="info">
                        <p className="section__paragraph">Специалист - Тултуков Айбек Нуралиевич</p>
                        <p className="section__paragraph phone">тел. 03536 23106</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Kochkorskiy sector --> */}
                <div className="card">
                    <div className="title">Кочкорский сектор Нарынского регионального отдела с. Кочкор, ул. С. Орозбак, 178</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий сектором Сапарбек уулу Торобек</p>
                        <p className="section__paragraph phone">тел. 03535 50453</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Talasskiy regional отдел --> */}
                <div className="card">
                    <div className="title">Таласский региональный отдел г. Талас, ул. Э. Мадиева, 2</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Кулубаев Аманбек Кулубаевич</p>
                        <p className="section__paragraph phone">тел. 03422 52391</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Kara-Buura-Manasskiy сектор Тalasskiy regional отдела --> */}
                <div className="card">
                    <div className="title">Кара-Буура-Манасский сектор Таласского регионального отдела</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Сейталиев Суйунтбек Тургунович</p>
                        <p className="section__paragraph phone">тел. 0342252453</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Karakolskiy отдел --> */}
                <div className="card">
                    <div className="title">Караколский отдел г. Каракол, ул. Карасаева, 1а</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Канаев Талайбек Садыбакасович</p>
                        <p className="section__paragraph phone">тел. 03922 41753</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Balykchinskiy отдел --> */}
                <div className="card">
                    <div className="title">Балыкчинский отдел г. Балыкчы, ул. Ж. Абдрахманова, 25</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Акимканов Кубанычбек Абдыкадырович</p>
                        <p className="section__paragraph phone">тел. 03944 70350</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Oshski regional отдел --> */}
                <div className="card">
                    <div className="title">Ошский региональный отдел г. Ош, ул. Навои, б/н</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Абжалов Акылбек Макамбаевич</p>
                        <p className="section__paragraph phone">тел. 03222 56580</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Alayskiy сектор Oshski regional отдела --> */}
                <div className="card">
                    <div className="title">Алайский сектор Ошского регионального отдела с. Гульчо, ул. Ленина, 86</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий сектором Арыкбаев Долгобек Арыкбаевич</p>
                        <p className="section__paragraph phone">тел. 03234 50360</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Uzgenskiy отдел Oshski regional отдела --> */}
                <div className="card">
                    <div className="title">Узгенский отдел Ошского регионального отдела с. Шералы, ул. Акматова</div>
                    <div className="info">
                        <p className="section__paragraph">Главный специалист- Абдиматалипов Алтынбек</p>
                        <p className="section__paragraph phone">тел. 03233 50162</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Oshski городской отдел --> */}
                <div className="card">
                    <div className="title">Ошский городской отдел г. Ош, ул. Касымбекова, 30</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Абдыкадыров Бактыбек Жоробаевич</p>
                        <p className="section__paragraph phone">тел. 03222 39547</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Jalal-Abad regional отдел --> */}
                <div className="card">
                    <div className="title">Джалал-Абадский региональный отдел г. Джалал-Абад, ул. Шопокова, 32</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Турдубаев Тайлак Макамбаевич</p>
                        <p className="section__paragraph phone">тел. 03722 50919</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Aksyyskiy сектор Jalal-Abad regional отдела --> */}
                <div className="card">
                    <div className="title">Аксыйский сектор Джалал-Абадского регионального отдела г. Кербен, ул. Осмонова, б/н</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий сектором Кутманов Нурланбек Осмонович</p>
                        <p className="section__paragraph phone">тел. 03742 50330</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Kara-Kulskiy сектор Jalal-Abad regional отдела --> */}
                <div className="card">
                    <div className="title">Кара-Кульский сектор Джалал-Абадского регионального отдела г. Кара-Куль, ул. Ленина, 1а</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий сектором Жунусов Бактыбек Молдодинович</p>
                        <p className="section__paragraph phone">тел. 03746 51527</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Nookenskiy сектор Jalal-Abad regional отдела --> */}
                <div className="card">
                    <div className="title">Ноокенский сектор Джалал-Абадского регионального отдела г. Кочкор-Ата, ул. Фрунзе, 38а</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий сектором Омурзаков Медер Абдыманапович</p>
                        <p className="section__paragraph phone">тел. 03734 53636</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Toktogulskiy сектор Jalal-Abad regional отдела --> */}
                <div className="card">
                    <div className="title">Токтогульский сектор Джалал-Абадского регионального отдела г. Токтогул, ул. Черноткач, 11</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий сектором Токтогулов Ибаратбек Исабекович</p>
                        <p className="section__paragraph phone">тел. 03747 50091</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Batkenskiy regional отдел --> */}
                <div className="card">
                    <div className="title">Баткенский региональный отдел г. Кызыл-Кия, ул. Масалиева, б/н</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Матназаров Нияз Сабирович</p>
                        <p className="section__paragraph phone">тел. 03657 54158</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>
                {/* <!-- Batkenskiy sector --> */}
                <div className="card">
                    <div className="title">Баткенский сектор Баткенского регионального отдела г. Баткен, ул. Раззакова, 77</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий сектором Абдуллаев Анарбай Ибраимович</p>
                        <p className="section__paragraph phone">тел. 03622 51025</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>

                {/* <!-- Sulyuktinskiy отдел --> */}
                <div className="card">
                    <div className="title">Сулюктинский отдел Баткенского регионального отдела г. Сулюкта, ул. Раззакова, б/н</div>
                    <div className="info">
                        <p className="section__paragraph">Заведующий отделом Ташбалтаев Насирдин Абдыкадырович</p>
                        <p className="section__paragraph phone">тел. 03653 50455</p>
                        <p className="section__paragraph working-hours">Пн-Пт 08:30-17:30, перерыв 12:00-13:00</p>
                    </div>
                </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <h3>Руководство</h3>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}