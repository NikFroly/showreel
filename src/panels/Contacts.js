import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import './Contacts.css';

const Contacts = ({ id, go }) => (
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
				<section className="images_con">
					<svg className="LunaLogo" width="26%" height="21%" viewBox="0 0 439 147" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M 6.4921875,128.47159 V 18.531255 c 0,-16.5234401 27.0312495,-16.5234401 27.0312495,0 V 128.47159 c 0,16.51669 -27.0312495,16.51669 -27.0312495,0 z"
							fill="#ffffff"
						/>
						<path
							d="m 70.46875,18.53125 c 0,-16.52344 27.03125,-16.52344 27.03125,0 V 87.4375 c 0,35.875 44.12109,35.875 44.12109,0 V 18.53125 c 0,-16.52344 27.03125,-16.52344 27.03125,0 v 79.01547 c 0,57.70328 -98.18359,57.70328 -98.18359,0 z"
							fill="#ffffff"
						/>
						<path
							d="M 205.59582,128.48051 V 18.540174 c 0,-16.5234403 27.03125,-16.5234403 27.03125,0 V 128.48051 c 0,16.51669 -27.03125,16.51669 -27.03125,0 z"
							fill="#ffffff"
						/>
						<path
							d="M 269.57422,128.48331 V 18.542973 c 0,-16.52344 27.03125,-16.52344 27.03125,0 V 128.48331 c 0,16.51669 -27.03125,16.51669 -27.03125,0 z"
							fill="#ffffff"
						/>
						<path
							d="m 333.55553,128.41613 c 0,16.52344 27.03125,16.52344 27.03125,0 V 59.509886 c 0,-35.875005 44.12109,-35.875005 44.12109,0 v 68.906244 c 0,16.52344 27.03125,16.52344 27.03125,0 V 49.400666 c 0,-57.7032854 -98.18359,-57.7032854 -98.18359,0 z"
							fill="#ffffff"
						/>
					</svg>
				</section>
				<section className="messages_con">
					<article className="font_headline">
						Luna Apps
					</article>
					<article className="mes_con_0">
						Если у вас появилась идея для сервиса,<br />
						мы можем реализовать её вместе.
					</article>
					<article className="mes_con_1">
						Мы делаем сервисы с момента их появления.<br /> 
						Каждый десятый сервис в каталоге разработан нами.
					</article>
					<article className="mes_con_2">
						А еще мы разрабатываем сервисы на заказ.
					</article>
				</section>
				<form className="controls_con" action="https://docs.google.com/forms/d/1P-B1l-Yky-gsb6pgg0WRlpceqr_NtVCT_jrOUXbolWs/edit">
					<Button size="xl" level="secondary">
						Написать нам
					</Button>
				</form>
			</main>
			<footer>
				<div className="page_label" onClick={go} data-to="welcome"></div>
				<div className="page_label" onClick={go} data-to="start"></div>
				<div className="page_label" onClick={go} data-to="registration"></div>
				<div className="page_label" onClick={go} data-to="geolocation"></div>
				<div className="page_label" onClick={go} data-to="notification"></div>
				<div className="page_label" onClick={go} data-to="smartphone"></div>
				<div className="page_label" onClick={go} data-to="monetization"></div>
				<div className="page_label" onClick={go} data-to="business"></div>
				<div className="page_label --current"></div>
			</footer>
		</section>
	</div>
);

Contacts.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Contacts;