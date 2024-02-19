import React from 'react';
import './Information.scss';

const Information = () => {
    return (
        <section className='information'>
            <div className='information__container'>
                <h1 className='information__title'>Прейскурант тарифов на платные услуги</h1>

                <div className='information__table'>
                    <h2 className='information__table-title'>Регистрация прав собственности на автотранспорт</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Наименование услуги</th>
                                <th>Стоимость (сом)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.1</td>
                                <td>Осмотр транспортного средства на территории обслуживаемого отдела</td>
                                <td>264</td>
                            </tr>
                            <tr>
                                <td>1.2</td>
                                <td>Осмотр транспортного средства с выездом по месту нахождения транспортного средства</td>
                                <td>524</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='information__table'>
                    <h2 className='information__table-title'>Регистрация прав собственности на трактора и оборудование</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Наименование услуги</th>
                                <th>Стоимость (сом)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.2</td>
                                <td>Осмотр транспортного средства с выездом по месту нахождения транспортного средства</td>
                                <td>524</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='information__table'>
                    <h2 className='information__table-title'>Выдача водительского удостоверения</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Наименование услуги</th>
                                <th>Стоимость (сом)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.2</td>
                                <td>Осмотр транспортного средства с выездом по месту нахождения транспортного средства</td>
                                <td>524</td>
                            </tr>
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Information;
