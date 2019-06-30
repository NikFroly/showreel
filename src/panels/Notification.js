import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import pushExample from '../img/Push_example.svg';
import './Notification.css';

const Notification = ({ id, getNotifications, allowNotification, go }) => (
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
				<section className="messages_1_nt">
					<article className="font_headline --fh_nt">
						Push-уведомления
					</article>
					<article className="mes_0_nt">
						Если сервис интересный,<br />
						то можно подписывать пользователя на push-уведомления<br />
						и сообщать о новых событиях.
					</article>
				</section>
				<section className="images_nt">
					<img className="PushExample" src={pushExample} alt="Example of push-messages" />
				</section>
				<section className="messages_2_nt">
					<article>
						Оно появится даже на заблокированном экране устройства.
					</article>
				</section>
				<section className="controls_nt">
					<Button size="xl" level="secondary" onClick={getNotifications}>
						{`${ allowNotification ? 'Выключить push' : 'Включить push' }`}
					</Button>
					<Button className="controls_skip --cs_nt" level="tertiary" onClick={go} data-to="smartphone">
						К другим фишкам
					</Button>
				</section>
			</main>
			<footer>
				<div className="page_label" onClick={go} data-to="welcome"></div>
				<div className="page_label" onClick={go} data-to="start"></div>
				<div className="page_label" onClick={go} data-to="registration"></div>
				<div className="page_label" onClick={go} data-to="geolocation"></div>
				<div className="page_label --current"></div>
				<div className="page_label" onClick={go} data-to="smartphone"></div>
				<div className="page_label" onClick={go} data-to="monetization"></div>
				<div className="page_label" onClick={go} data-to="business"></div>
				<div className="page_label" onClick={go} data-to="contacts"></div>
			</footer>
		</section>
	</div>
);

Notification.propTypes = {
	id: PropTypes.string.isRequired,
	getNotifications: PropTypes.func.isRequired,
	allowNotification: PropTypes.bool.isRequired,
	go: PropTypes.func.isRequired
};

export default Notification;