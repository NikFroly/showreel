import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import spotInterest from '../img/Spot_interest.png';
import './Business.css';

const Business = ({ id, go }) => (
	<div className="Page" id={id}>
		<section className="background_element">
			<div className="Rectangle --first"></div>
			<div className="Rectangle --second"></div>
			<div className="Rectangle --third"></div>
			<div className="Rectangle --fourth"></div>
		</section>
		<section className="content">
			<header></header>
			<main>
				<section className="images_bu">
					<img className="SpotInterest" src={spotInterest} alt="Interest" />
				</section>
				<section className="messages_bu">
					<article className="font_headline">
						Что даст сервис вашему бизнесу?
					</article>
					<ul className="mes_list_bu">
						<li>От 100 000 бесплатных пользователей в месяц</li>
						<li>Продавайте свои товары и услуги</li>
						<li>Упрощение коммуникации с покупателями</li>
						<li>Увеличивайте продажи</li>
						<li>Зарабатывайте</li>
					</ul>
				</section>
				<section className="controls_bu">
					<Button size="xl" level="secondary" onClick={go} data-to="contacts">
						Интересно
					</Button>
				</section>
			</main>
			<footer>
				<div className="page_label" onClick={go} data-to="welcome"></div>
				<div className="page_label" onClick={go} data-to="start"></div>
				<div className="page_label" onClick={go} data-to="registration"></div>
				<div className="page_label" onClick={go} data-to="geolocation"></div>
				<div className="page_label" onClick={go} data-to="notification"></div>
				<div className="page_label" onClick={go} data-to="smartphone"></div>
				<div className="page_label" onClick={go} data-to="monetization"></div>
				<div className="page_label --current"></div>
				<div className="page_label" onClick={go} data-to="contacts"></div>
			</footer>
		</section>
	</div>
);

Business.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Business;